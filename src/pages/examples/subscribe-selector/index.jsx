import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

/* ---------------- date formatting helpers ---------------- */
const fmtDate = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    return `${days[x.getDay()]} ${mons[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

/* ---------------- confirm dialog (custom, non-blocking) ---------------- */
const ConfirmDialog = ({ open, title, message, confirmText = "Confirm", onConfirm, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Cancel</button>
                    <button className="btnPrimary" onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

/* ---------------- zustand store with subscribeWithSelector ---------------- */
const useCounterStore = create(subscribeWithSelector((set, get) => ({
    counterA: 1,
    counterB: 5,
    toggle: false,
    updatedAt: new Date().toISOString(),

    incrementA: (n = 1) => set((s) => ({ counterA: s.counterA + n, updatedAt: new Date().toISOString() })),
    decrementA: (n = 1) => set((s) => ({ counterA: Math.max(0, s.counterA - n), updatedAt: new Date().toISOString() })),
    incrementB: (n = 1) => set((s) => ({ counterB: s.counterB + n, updatedAt: new Date().toISOString() })),
    decrementB: (n = 1) => set((s) => ({ counterB: Math.max(0, s.counterB - n), updatedAt: new Date().toISOString() })),
    setToggle: (v) => set(() => ({ toggle: !!v, updatedAt: new Date().toISOString() })),
    reset: () => set(() => ({ counterA: 1, counterB: 5, toggle: false, updatedAt: new Date().toISOString() })),
})));

/* ---------------- tiny components ---------------- */
const RenderBadge = () => {
    const renders = useRef(0);
    renders.current += 1;
    return <span className="renderBadge">render #{renders.current}</span>;
};

const SliceA = () => {
    const a = useCounterStore((s) => s.counterA);          // selective read
    const incA = useCounterStore((s) => s.incrementA);
    const decA = useCounterStore((s) => s.decrementA);
    return (
        <div className="slice">
            <div className="sliceHead">
                <h4>Counter A</h4><RenderBadge />
            </div>
            <div className="value">{a}</div>
            <div className="rowBtns">
                <button onClick={() => decA(1)}>-1</button>
                <button onClick={() => incA(1)}>+1</button>
                <button onClick={() => decA(10)}>-10</button>
                <button onClick={() => incA(10)}>+10</button>
            </div>
        </div>
    );
};

const SliceB = () => {
    const b = useCounterStore((s) => s.counterB);
    const incB = useCounterStore((s) => s.incrementB);
    const decB = useCounterStore((s) => s.decrementB);
    return (
        <div className="slice">
            <div className="sliceHead">
                <h4>Counter B</h4><RenderBadge />
            </div>
            <div className="value">{b}</div>
            <div className="rowBtns">
                <button onClick={() => decB(1)}>-1</button>
                <button onClick={() => incB(1)}>+1</button>
                <button onClick={() => decB(10)}>-10</button>
                <button onClick={() => incB(10)}>+10</button>
            </div>
        </div>
    );
};

const SliceToggle = () => {
    const t = useCounterStore((s) => s.toggle);
    const setToggle = useCounterStore((s) => s.setToggle);
    return (
        <div className="slice">
            <div className="sliceHead">
                <h4>Toggle</h4><RenderBadge />
            </div>
            <div className="value">{String(t)}</div>
            <div className="rowBtns">
                <button onClick={() => setToggle(!t)}>{t ? "Switch Off" : "Switch On"}</button>
            </div>
        </div>
    );
};

const DerivedPanel = () => {
    const a = useCounterStore((s) => s.counterA);
    const b = useCounterStore((s) => s.counterB);
    const sum = a + b;
    const diff = Math.abs(a - b);
    return (
        <div className="derived card">
            <div className="row">
                <div>
                    <div className="label">Sum</div>
                    <div className="big">{sum}</div>
                </div>
                <div>
                    <div className="label">Difference</div>
                    <div className="big">{diff}</div>
                </div>
                <div>
                    <div className="label">Updated</div>
                    <div className="big">{fmtDateTime(useCounterStore.getState().updatedAt)}</div>
                </div>
            </div>
            <RenderBadge />
        </div>
    );
};

/* ---------------- main example page ---------------- */
const ExampleSubscribeSelector = () => {
    const [feed, setFeed] = useState([]);
    const [askReset, setAskReset] = useState(false);

    const now = useMemo(() => new Date(), []);
    const reset = useCounterStore((s) => s.reset);

    // subscribe to a slice (A) — fires only when A changes
    useEffect(() => {
        const unsubA = useCounterStore.subscribe(
            (s) => s.counterA,
            (cur, prev) => {
                setFeed((f) => [
                    { id: crypto.randomUUID(), t: new Date(), k: "counterA", prev, cur },
                    ...f,
                ].slice(0, 24));
            }
        );
        const unsubB = useCounterStore.subscribe(
            (s) => s.counterB,
            (cur, prev) => {
                setFeed((f) => [
                    { id: crypto.randomUUID(), t: new Date(), k: "counterB", prev, cur },
                    ...f,
                ].slice(0, 24));
            }
        );
        const unsubSum = useCounterStore.subscribe(
            (s) => s.counterA + s.counterB,
            (cur, prev) => {
                setFeed((f) => [
                    { id: crypto.randomUUID(), t: new Date(), k: "sum(a+b)", prev, cur },
                    ...f,
                ].slice(0, 24));
            }
        );
        const unsubToggle = useCounterStore.subscribe(
            (s) => s.toggle,
            (cur, prev) => {
                setFeed((f) => [
                    { id: crypto.randomUUID(), t: new Date(), k: "toggle", prev: String(prev), cur: String(cur) },
                    ...f,
                ].slice(0, 24));
            }
        );
        return () => { unsubA(); unsubB(); unsubSum(); unsubToggle(); };
    }, []);

    const breadcrumbs = (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <NavLink to="/examples">Examples</NavLink>
            <span>/</span>
            <span className="current">Subscribe + Selector</span>
        </nav>
    );

    const printPanel = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page className="container">
            {/* print CSS block  */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>subscribeWithSelector Demo</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Today: {fmtDate(now)}</span>
                        <span>•</span>
                        <span>{fmtTime(now)}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="btnGhost" onClick={() => setAskReset(true)} title="Reset demo state">Reset</button>
                    <button className="btnPrimary" onClick={printPanel} title="Print snapshot">Print</button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                {/* main column */}
                <section className="col main">
                    <div className="card stacks">
                        <div className="stack">
                            <SliceA />
                            <SliceB />
                            <SliceToggle />
                        </div>
                        <DerivedPanel />
                    </div>

                    <div className="card perf">
                        <h3>Selective Rendering</h3>
                        <p className="muted">
                            Each box reads a <em>slice</em> from the store. Updating A doesn’t re-render B (and vice-versa).
                            The little counter on the right shows how many times that component re-rendered.
                        </p>
                        <ul className="tips">
                            <li>Use <code>useStore(selector)</code> or external <code>store.subscribe(selector)</code> for precision.</li>
                            <li>Avoid passing the entire state into heavy trees; subscribe to what’s necessary.</li>
                            <li>Derive values locally (e.g., <code>a + b</code>) when cheap; memoize expensive derivations.</li>
                        </ul>
                    </div>

                    <div className="card" id="search-print-area">
                        <h3>Printable Snapshot</h3>
                        <div className="snapshot">
                            <div><span className="label">Counter A</span><span className="value">{useCounterStore.getState().counterA}</span></div>
                            <div><span className="label">Counter B</span><span className="value">{useCounterStore.getState().counterB}</span></div>
                            <div><span className="label">Toggle</span><span className="value">{String(useCounterStore.getState().toggle)}</span></div>
                            <div><span className="label">Sum</span><span className="value">{useCounterStore.getState().counterA + useCounterStore.getState().counterB}</span></div>
                            <div><span className="label">Updated</span><span className="value">{fmtDateTime(useCounterStore.getState().updatedAt)}</span></div>
                        </div>
                    </div>
                </section>

                {/* sidebar */}
                <aside className="col side">
                    <div className="card">
                        <h3>Event Feed</h3>
                        <p className="muted">Shows only when a <em>selected slice</em> changes.</p>
                        <div className="feed">
                            {feed.length === 0 ? (
                                <div className="empty">No changes yet. Try incrementing counters.</div>
                            ) : (
                                feed.map((e) => (
                                    <div className="line" key={e.id}>
                                        <div className="when">{fmtDateTime(e.t)}</div>
                                        <div className="what"><span className="tag">{e.k}</span> {String(e.prev)} → <strong>{String(e.cur)}</strong></div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/examples">Examples Home</NavLink></li>
                            <li><NavLink to="/examples/table">Table Demo</NavLink></li>
                            <li><NavLink to="/examples/print">Print Demo</NavLink></li>
                            <li><NavLink to="/reports/customers">Customer Report</NavLink></li>
                            <li><NavLink to="/tools/playground">Playground</NavLink></li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <ConfirmDialog
                open={askReset}
                title="Reset demo?"
                message="This will reset the in-memory store."
                confirmText="Reset"
                onClose={() => setAskReset(false)}
                onConfirm={() => { setAskReset(false); reset(); }}
            />
        </Styled.Page>
    );
};

export default ExampleSubscribeSelector;
