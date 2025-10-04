import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

/* date utils (consistent app-wide) */
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[d.getDay()]} ${mons[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const fmtDateTime = (d) => `${fmtDate(d)} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;

/* light confirm dialog (no browser alert) */
const Confirm = ({ open, title, message, onConfirm, onCancel, confirmText = "Confirm" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onCancel}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onCancel}>Cancel</button>
                    <button className="btnDanger" onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const ExampleNavSearch = () => {
    const now = useMemo(() => new Date(), []);
    const { pathname } = useLocation();
    const pageSearchRef = useRef(null);
    const printRef = useRef(null);

    const [query, setQuery] = useState("");
    const [navStats, setNavStats] = useState({ sections: 0, links: 0, visible: 0, hidden: 0, openSecs: 0, closedSecs: 0 });
    const [matches, setMatches] = useState([]);
    const [askReset, setAskReset] = useState(false);

    // helpers to access the real sidebar DOM
    const navRoot = () => document.getElementById("navlinksWrapper");
    const navSearchInput = () => document.querySelector(".searchWraper input");

    const syncSidebarSearch = (value) => {
        const input = navSearchInput();
        if (!input) return;

        // set value and dispatch input event to trigger existing logic
        input.value = value;
        input.dispatchEvent(new Event("input", { bubbles: true }));
    };

    const collectSnapshot = () => {
        const root = navRoot();
        if (!root) return null;
        const headers = Array.from(root.querySelectorAll("h3.title[data-sec]"));
        const links = Array.from(root.querySelectorAll("a[href]"));

        const sectionMap = headers.map(h => ({
            key: h.getAttribute("data-sec"),
            collapsed: h.getAttribute("data-collapsed") === "true",
            hidden: h.getAttribute("data-hidden") === "true",
        }));
        const linkMap = links.map(a => ({
            text: (a.textContent || "").trim(),
            href: a.getAttribute("href"),
            title: a.getAttribute("title") || "",
            hidden: a.getAttribute("data-hidden") === "true" || a.getAttribute("data-collapsed") === "true",
            section: (() => {
                let prev = a.previousElementSibling;
                while (prev && prev.tagName !== "H3") prev = prev.previousElementSibling;
                return prev?.getAttribute("data-sec") || "";
            })(),
            active: a.classList.contains("active"),
        }));

        return { sectionMap, linkMap };
    };

    const recompute = () => {
        const snap = collectSnapshot();
        if (!snap) return;
        const visible = snap.linkMap.filter(l => !l.hidden).length;
        const hidden = snap.linkMap.length - visible;
        const openSecs = snap.sectionMap.filter(s => !s.collapsed && !s.hidden).length;
        const closedSecs = snap.sectionMap.filter(s => s.collapsed && !s.hidden).length;

        setNavStats({
            sections: snap.sectionMap.length,
            links: snap.linkMap.length,
            visible,
            hidden,
            openSecs,
            closedSecs
        });

        // top 30 visible + textual match order
        const q = query.trim().toLowerCase();
        let m = snap.linkMap.filter(l => !l.hidden);
        if (q) {
            const tokens = q.split(/\s+/).filter(Boolean);
            m = m
                .map(l => {
                    const hay = (l.text + " " + l.title + " " + l.href).toLowerCase();
                    const score = tokens.reduce((acc, t) => acc + (hay.includes(t) ? 1 : 0), 0);
                    return { ...l, score };
                })
                .filter(l => l.score > 0)
                .sort((a, b) => b.score - a.score || a.text.localeCompare(b.text));
        }
        setMatches(m.slice(0, 30));
    };

    // initial sync with current sidebar search value
    useEffect(() => {
        const input = navSearchInput();
        if (input) {
            setQuery(input.value || "");
        }
        recompute();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // keep stats fresh on route change (active highlight, auto-open logic outside)
    useEffect(() => {
        recompute();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, query]);

    const onPageQuery = (e) => {
        const v = e.target.value;
        setQuery(v);
        syncSidebarSearch(v);
        // recompute happens via effect
    };

    const openAll = () => {
        const root = navRoot(); if (!root) return;
        const headers = Array.from(root.querySelectorAll("h3.title[data-sec]"));
        headers.forEach(h => { if (h.getAttribute("data-collapsed") === "true") h.click(); });
        recompute();
    };

    const closeAll = () => {
        const root = navRoot(); if (!root) return;
        const headers = Array.from(root.querySelectorAll("h3.title[data-sec]"));
        headers.forEach(h => { if (h.getAttribute("data-collapsed") !== "true") h.click(); });
        recompute();
    };

    const resetSearch = () => {
        syncSidebarSearch("");
        setQuery("");
        setAskReset(false);
        recompute();
    };

    const copyDeepLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            // soft toast
            const el = document.getElementById("copyToast");
            if (el) {
                el.textContent = "Link copied";
                el.setAttribute("data-show", "true");
                setTimeout(() => el && el.setAttribute("data-show", "false"), 1500);
            }
        } catch { }
    };

    const exportNavJSON = () => {
        const snap = collectSnapshot();
        if (!snap) return;
        // produce a minimal nav map
        const root = navRoot();
        const headers = Array.from(root.querySelectorAll("h3.title[data-sec]"));
        const out = headers.map(h => {
            const key = h.getAttribute("data-sec");
            const sec = { section: key, items: [] };
            let node = h.nextElementSibling;
            while (node && node.tagName !== "H3") {
                if (node.tagName === "A") {
                    sec.items.push({
                        text: (node.textContent || "").trim(),
                        href: node.getAttribute("href"),
                        title: node.getAttribute("title") || ""
                    });
                }
                node = node.nextElementSibling;
            }
            return sec;
        });

        const blob = new Blob([JSON.stringify(out, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "nav-map.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const focusSidebarSearch = () => {
        const input = navSearchInput();
        if (!input) return;
        input.focus();
        input.select?.();
    };

    const printSection = () => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page>
            {/* Print CSS hook (scoped) */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Sidebar Nav Search</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/examples">Examples</NavLink>
                        <span>/</span>
                        <span className="current">Nav Search</span>
                    </nav>
                    <div className="meta">
                        <span>Generated: {fmtDateTime(now)}</span>
                    </div>
                </div>
                <div className="right">
                    <button className="btnGhost" onClick={copyDeepLink} title="Copy deep link">Copy Link</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            {/* toast */}
            <Styled.Toast id="copyToast" aria-live="polite">Link copied</Styled.Toast>

            <Styled.Grid>
                <section className="card">
                    <h3>Live Controls</h3>
                    <p className="muted">This page talks to the real sidebar: type here to filter, open/close sections, export a JSON nav map, or print a summary.</p>

                    <div className="controls">
                        <input
                            ref={pageSearchRef}
                            value={query}
                            onChange={onPageQuery}
                            placeholder="Type to filter sidebar (Ctrl + K focuses the sidebar box)"
                            aria-label="Filter sidebar"
                        />
                        <div className="btns">
                            <button className="btnPrimary" onClick={focusSidebarSearch} title="Focus sidebar search">Focus Sidebar</button>
                            <button className="btnPrimary" onClick={openAll} title="Expand all sections">Open All</button>
                            <button className="btnGhost" onClick={closeAll} title="Collapse all sections">Close All</button>
                            <button className="btnGhost" onClick={() => setAskReset(true)} title="Clear current query">Reset</button>
                            <button className="btnPrimary" onClick={exportNavJSON} title="Download a JSON of the sidebar">Export Nav JSON</button>
                        </div>
                    </div>

                    <Styled.Kpis>
                        <div className="kpi">
                            <div className="label">Sections</div>
                            <div className="value">{navStats.sections}</div>
                        </div>
                        <div className="kpi">
                            <div className="label">Links</div>
                            <div className="value">{navStats.links}</div>
                        </div>
                        <div className="kpi">
                            <div className="label">Visible</div>
                            <div className="value">{navStats.visible}</div>
                        </div>
                        <div className="kpi">
                            <div className="label">Hidden</div>
                            <div className="value">{navStats.hidden}</div>
                        </div>
                        <div className="kpi">
                            <div className="label">Open Sections</div>
                            <div className="value">{navStats.openSecs}</div>
                        </div>
                        <div className="kpi">
                            <div className="label">Closed Sections</div>
                            <div className="value">{navStats.closedSecs}</div>
                        </div>
                    </Styled.Kpis>
                </section>

                <section className="card">
                    <h3>Visible Matches</h3>
                    <p className="muted">Top results from the sidebar after your query and section visibility.</p>

                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: "36px" }}>#</th>
                                    <th>Label</th>
                                    <th>Section</th>
                                    <th>Title</th>
                                    <th>Path</th>
                                    <th style={{ width: "80px" }}>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matches.length === 0 ? (
                                    <tr>
                                        <td colSpan={6}>
                                            <div className="empty">
                                                <div className="dot" />
                                                <div>
                                                    <div className="h">No visible matches</div>
                                                    <div className="p">Try clearing the query or opening more sections.</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : matches.map((m, i) => (
                                    <tr key={m.href + i}>
                                        <td>{i + 1}</td>
                                        <td>{m.text}</td>
                                        <td className="muted">{m.section}</td>
                                        <td className="muted">{m.title}</td>
                                        <td><NavLink to={m.href}>{m.href}</NavLink></td>
                                        <td>{m.active ? "Yes" : "—"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <aside className="card" id="search-print-area" ref={printRef}>
                    <h3>Print Summary</h3>
                    <div className="summary">
                        <div className="row"><span className="k">Generated</span><span className="v">{fmtDateTime(now)}</span></div>
                        <div className="row"><span className="k">Current Path</span><span className="v">{pathname}</span></div>
                        <div className="row"><span className="k">Query</span><span className="v">{query || "(none)"}</span></div>
                        <div className="row"><span className="k">Sections</span><span className="v">{navStats.sections}</span></div>
                        <div className="row"><span className="k">Links</span><span className="v">{navStats.links}</span></div>
                        <div className="row"><span className="k">Visible</span><span className="v">{navStats.visible}</span></div>
                        <div className="row"><span className="k">Hidden</span><span className="v">{navStats.hidden}</span></div>
                    </div>

                    <div className="printActions">
                        <button className="btnPrimary" onClick={printSection}>Print This</button>
                        <NavLink className="btnGhost" to="/examples">Back to Examples</NavLink>
                    </div>
                </aside>

                <section className="card">
                    <h3>How it Works</h3>
                    <ul className="bullets">
                        <li>Sidebar headers are <code>h3.title[data-sec]</code>. Each toggles collapse on click/keyboard.</li>
                        <li>Links carry <code>data-hidden</code> (search filter) and <code>data-collapsed</code> (section collapse).</li>
                        <li>The search box sets these attributes and sections auto-open when a match exists.</li>
                        <li>This page mirrors that input, so you can demo filtering, open/close, and export the nav structure.</li>
                    </ul>
                </section>
            </Styled.Grid>

            <Confirm
                open={askReset}
                title="Clear the query?"
                message="This will reset the sidebar filter and show all visible links."
                confirmText="Clear"
                onConfirm={resetSearch}
                onCancel={() => setAskReset(false)}
            />
        </Styled.Page>
    );
};

export default ExampleNavSearch;
