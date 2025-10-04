import React, { useMemo, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

// date utils (consistent with your format)
const pad = (n) => String(n).padStart(2, "0");
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

const ExamplesOverview = () => {
    const now = useMemo(() => new Date(), []);
    const printRef = useRef(null);

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

    const copyLink = async (href) => {
        try {
            await navigator.clipboard.writeText(window.location.origin + href);
            const toast = document.getElementById("ex-toast");
            if (toast) {
                toast.setAttribute("data-show", "true");
                setTimeout(() => toast.removeAttribute("data-show"), 1200);
            }
        } catch {
            // silent fail in demo
        }
    };

    return (
        <Styled.Page className="container">
            {/* print CSS (as requested) */}
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
                    <h1>Examples Overview</h1>
                    <p className="sub">A curated grid of demo screens—fast to browse, easy to deep-link. Display-only, zero-risk.</p>
                    <div className="meta">
                        <span>Generated: {fmt(now, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnPrimary" onClick={printSection}>Print Section</button>
                    <NavLink className="btnGhost" to="/examples/theme" title="Theme tokens preview">Theme Tokens</NavLink>
                </div>
            </Styled.Header>

            {/* toast (copy feedback) */}
            <Styled.Toast id="ex-toast" role="status" aria-live="polite">Link copied</Styled.Toast>

            <Styled.Grid>
                {/* Quick Start */}
                <section className="card section">
                    <header>
                        <h2>Quick Start</h2>
                        <p className="hint">Jump into the most common demo screens.</p>
                    </header>
                    <div className="tiles">
                        <NavLink to="/examples/table" className="tile" onContextMenu={(e) => { e.preventDefault(); copyLink("/examples/table"); }}>
                            <div className="title">Table</div>
                            <div className="desc">Compact data grid with sticky header & row states.</div>
                        </NavLink>

                        <NavLink to="/examples/form" className="tile" onContextMenu={(e) => { e.preventDefault(); copyLink("/examples/form"); }}>
                            <div className="title">Form</div>
                            <div className="desc">Inputs, selects, date pickers with crisp focus.</div>
                        </NavLink>

                        <NavLink to="/examples/print" className="tile" onContextMenu={(e) => { e.preventDefault(); copyLink("/examples/print"); }}>
                            <div className="title">Print Demo</div>
                            <div className="desc">Section-only print using a minimal CSS hook.</div>
                        </NavLink>

                        <NavLink to="/examples/gallery" className="tile" onContextMenu={(e) => { e.preventDefault(); copyLink("/examples/gallery"); }}>
                            <div className="title">Gallery</div>
                            <div className="desc">Responsive image grid & light density cards.</div>
                        </NavLink>
                    </div>
                </section>

                {/* Navigation Patterns */}
                <section className="card section" id="search-print-area" ref={printRef}>
                    <header>
                        <h2>Navigation Patterns</h2>
                        <p className="hint">Breadcrumbs, sidebar search, and counters—pure display, deep-link friendly.</p>
                    </header>
                    <div className="tiles">
                        <NavLink to="/examples/breadcrumbs" className="tile">
                            <div className="title">Breadcrumbs</div>
                            <div className="desc">Hierarchical context with truncation.</div>
                        </NavLink>

                        <NavLink to="/examples/nav-search" className="tile">
                            <div className="title">Sidebar Search</div>
                            <div className="desc">Filterable left-nav with collapsible groups.</div>
                        </NavLink>

                        <NavLink to="/examples/counter" className="tile">
                            <div className="title">Counter</div>
                            <div className="desc">Micro-interaction sample (display-only).</div>
                        </NavLink>

                        <NavLink to="/examples/persist-theme" className="tile">
                            <div className="title">Persist Theme</div>
                            <div className="desc">Theme tokens preview—no local storage writes.</div>
                        </NavLink>
                    </div>

                    <div className="tokensPreview">
                        <div className="chipRow">
                            <span className="chip tone" title="Background">BG</span>
                            <span className="chip tone text" title="Text">TEXT</span>
                            <span className="chip tone card" title="Card">CARD</span>
                            <span className="chip tone border" title="Border">BORDER</span>
                            <span className="chip tone accent" title="Accent">ACCENT</span>
                        </div>
                        <p className="muted">Colors above are live from your CSS variables.</p>
                    </div>
                </section>

                {/* State & Devtools demos */}
                <section className="card section">
                    <header>
                        <h2>State & Dev Tools</h2>
                        <p className="hint">Display-only stubs to showcase layout and flows.</p>
                    </header>
                    <div className="tiles">
                        <NavLink to="/examples/devtools-todos" className="tile">
                            <div className="title">Devtools Todos</div>
                            <div className="desc">State timeline, no writes.</div>
                        </NavLink>

                        <NavLink to="/examples/subscribe-selector" className="tile">
                            <div className="title">Subscribe + Selector</div>
                            <div className="desc">Selective updates demo.</div>
                        </NavLink>

                        <NavLink to="/examples/undo-redo" className="tile">
                            <div className="title">Undo / Redo</div>
                            <div className="desc">Temporal history UI, disabled actions in demo.</div>
                        </NavLink>

                        <NavLink to="/examples/confirm-modal" className="tile">
                            <div className="title">Confirm Modal</div>
                            <div className="desc">Custom overlay—no browser alerts.</div>
                        </NavLink>
                    </div>
                </section>

                {/* Helpful links */}
                <section className="card section">
                    <header>
                        <h2>Helpful Pages</h2>
                        <p className="hint">High-signal screens you’ll reference often.</p>
                    </header>
                    <div className="tiles dense">
                        <NavLink to="/changelog" className="tile sm">
                            <div className="title">Changelog</div>
                            <div className="desc">Release notes, dates in your format.</div>
                        </NavLink>

                        <NavLink to="/roadmap" className="tile sm">
                            <div className="title">Roadmap</div>
                            <div className="desc">What’s next—display-only.</div>
                        </NavLink>

                        <NavLink to="/help" className="tile sm">
                            <div className="title">Help Center</div>
                            <div className="desc">FAQs and quick tips.</div>
                        </NavLink>

                        <NavLink to="/feedback" className="tile sm">
                            <div className="title">Feedback</div>
                            <div className="desc">Non-interactive demo form.</div>
                        </NavLink>
                    </div>
                </section>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default ExamplesOverview;
