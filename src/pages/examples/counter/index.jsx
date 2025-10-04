import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* -----------------------------
   Tiny date utilities
------------------------------ */
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* -----------------------------
   Local components
------------------------------ */
const ConfirmDialog = ({ open, title, message, onConfirm, onClose, confirmText = "Confirm" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Cancel</button>
                    <button className="btnDanger" onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const Stat = ({ label, value }) => (
    <Styled.Stat>
        <div className="label">{label}</div>
        <div className="value" aria-live="polite">{value}</div>
    </Styled.Stat>
);

/* -----------------------------
   Page
------------------------------ */
const ExampleCounterPage = () => {
    const startedAt = useMemo(() => new Date(), []);
    const [now, setNow] = useState(() => new Date());

    // A few counters showcasing different patterns
    const [basic, setBasic] = useState(0);
    const [step, setStep] = useState(5);
    const [stepped, setStepped] = useState(10);
    const [bounded, setBounded] = useState(3);
    const min = 0, max = 10;

    // Async demo (fake delay)
    const [pending, setPending] = useState(false);

    // Keyboard shortcuts target (“focused” card)
    const [activePanel, setActivePanel] = useState("basic"); // 'basic' | 'stepped' | 'bounded'

    // Reset modal
    const [askReset, setAskReset] = useState(false);

    // Live clock
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    // Global keyboard shortcuts: + / - / 0 for reset (on active panel)
    useEffect(() => {
        const onKey = (e) => {
            const k = e.key;
            if (k === "+" || k === "=") {
                if (activePanel === "basic") setBasic((v) => v + 1);
                if (activePanel === "stepped") setStepped((v) => v + step);
                if (activePanel === "bounded") setBounded((v) => Math.min(max, v + 1));
            } else if (k === "-") {
                if (activePanel === "basic") setBasic((v) => v - 1);
                if (activePanel === "stepped") setStepped((v) => v - step);
                if (activePanel === "bounded") setBounded((v) => Math.max(min, v - 1));
            } else if (k === "0") {
                setAskReset(true);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [activePanel, step]);

    const doAsyncIncrement = async () => {
        if (pending) return;
        setPending(true);
        await new Promise((r) => setTimeout(r, 900));
        setBasic((v) => v + 1);
        setPending(false);
    };

    const resetAll = () => {
        setAskReset(false);
        setBasic(0); setStepped(10); setBounded(3);
    };

    const progress = Math.round(((bounded - min) / (max - min)) * 100);

    const printRef = useRef(null);
    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page className="container">
            {/* Print CSS as requested */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Example: Counter</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/examples">Examples</NavLink>
                        <span>/</span>
                        <span className="current">Counter</span>
                    </nav>
                    <div className="meta">
                        <span>Session: {fmtDateTime(startedAt)}</span>
                        <span>•</span>
                        <span>Now: {fmtDateTime(now)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => setAskReset(true)} title="Reset all counters (0 key)">
                        Reset All
                    </button>
                    <button className="btnPrimary" onClick={printSection} title="Print the summary panel">
                        Print
                    </button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                {/* Main column */}
                <section className="col main">
                    {/* Basic counter */}
                    <Styled.CounterCard
                        className={`card ${activePanel === "basic" ? "active" : ""}`}
                        role="group"
                        aria-label="Basic counter"
                        onClick={() => setActivePanel("basic")}
                    >
                        <header>
                            <h3>Basic</h3>
                            <span className="hint">Click to target. Use + / - keys.</span>
                        </header>
                        <div className="value" aria-live="polite" data-testid="basic-value">{basic}</div>
                        <div className="controls">
                            <button onClick={() => setBasic((v) => v - 1)} aria-label="Decrease">−</button>
                            <button onClick={() => setBasic((v) => v + 1)} aria-label="Increase">+</button>
                            <button onClick={doAsyncIncrement} disabled={pending} aria-label="Async increment" title="Adds 1 after a short delay">
                                {pending ? <span className="spinner" aria-hidden="true" /> : "Async +1"}
                            </button>
                        </div>
                        <footer>
                            <div className="kbd"><span>+</span>/<span>-</span> or <span>0</span> to reset all</div>
                        </footer>
                    </Styled.CounterCard>

                    {/* Stepped counter */}
                    <Styled.CounterCard
                        className={`card ${activePanel === "stepped" ? "active" : ""}`}
                        role="group"
                        aria-label="Stepped counter"
                        onClick={() => setActivePanel("stepped")}
                    >
                        <header>
                            <h3>Stepped</h3>
                            <span className="hint">Choose a step and nudge.</span>
                        </header>
                        <div className="row">
                            <label htmlFor="stepSel">Step</label>
                            <select id="stepSel" value={step} onChange={(e) => setStep(Number(e.target.value))}>
                                <option value={1}>1</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                            </select>
                        </div>
                        <div className="value" aria-live="polite" data-testid="stepped-value">{stepped}</div>
                        <div className="controls">
                            <button onClick={() => setStepped((v) => v - step)} aria-label={`Decrease by ${step}`}>−{step}</button>
                            <button onClick={() => setStepped((v) => v + step)} aria-label={`Increase by ${step}`}>+{step}</button>
                            <button className="btnGhost" onClick={() => setStepped(0)} aria-label="Reset stepped to 0">Reset</button>
                        </div>
                    </Styled.CounterCard>

                    {/* Bounded counter */}
                    <Styled.CounterCard
                        className={`card ${activePanel === "bounded" ? "active" : ""}`}
                        role="group"
                        aria-label="Bounded counter"
                        onClick={() => setActivePanel("bounded")}
                    >
                        <header>
                            <h3>Bounded</h3>
                            <span className="hint">Min {min} · Max {max}</span>
                        </header>

                        <div className="value" aria-live="polite" data-testid="bounded-value">{bounded}</div>

                        <div className="progressWrap" aria-label="Progress">
                            <div className="progressTrack" />
                            <div className="progressBar" style={{ width: `${progress}%` }} />
                            <div className="progressMeta">
                                <span>{min}</span>
                                <span>{progress}%</span>
                                <span>{max}</span>
                            </div>
                        </div>

                        <div className="controls">
                            <button onClick={() => setBounded((v) => Math.max(min, v - 1))} aria-label="Decrease bounded">−</button>
                            <button onClick={() => setBounded((v) => Math.min(max, v + 1))} aria-label="Increase bounded">+</button>
                            <button className="btnGhost" onClick={() => setBounded(3)} aria-label="Reset bounded to 3">Reset</button>
                        </div>
                    </Styled.CounterCard>
                </section>

                {/* Side column */}
                <aside className="col side">
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="summary">
                            <div className="line"><span className="k">Basic</span><span className="v">{basic}</span></div>
                            <div className="line"><span className="k">Stepped</span><span className="v">{stepped} (step {step})</span></div>
                            <div className="line"><span className="k">Bounded</span><span className="v">{bounded} / {max}</span></div>
                            <div className="line"><span className="k">Snapshot</span><span className="v">{fmtDateTime(now)}</span></div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Live Stats</h3>
                        <Styled.StatsGrid>
                            <Stat label="Total (all)" value={basic + stepped + bounded} />
                            <Stat label="Max allowed" value={max} />
                            <Stat label="Active panel" value={activePanel} />
                            <Stat label="Clock" value={fmtTime(now)} />
                        </Styled.StatsGrid>
                    </div>

                    <div className="card">
                        <h3>Shortcuts</h3>
                        <ul className="shortcuts">
                            <li><code>+</code> / <code>-</code> — increment/decrement active panel</li>
                            <li><code>0</code> — Reset all (asks confirmation)</li>
                            <li>Click a card to make it active</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/examples">Examples Overview</NavLink></li>
                            <li><NavLink to="/examples/table">Table</NavLink></li>
                            <li><NavLink to="/examples/print">Print Demo</NavLink></li>
                            <li><NavLink to="/reports">Reports</NavLink></li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <ConfirmDialog
                open={askReset}
                title="Reset counters?"
                message="This will set all counters back to their initial state."
                confirmText="Reset"
                onConfirm={resetAll}
                onClose={() => setAskReset(false)}
            />
        </Styled.Page>
    );
};

export default ExampleCounterPage;
