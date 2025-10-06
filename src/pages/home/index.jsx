import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import {
    FiUsers, FiFileText, FiShoppingCart, FiPackage, FiTruck, FiBarChart2,
    FiSettings, FiDatabase, FiClock, FiInfo, FiBell, FiDownload,
    FiPrinter, FiExternalLink, FiSearch
} from "react-icons/fi";

/** date formatting helpers */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())} hrs`;
};

const onlyTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())} hrs`;
};

/** IST label */
function formatISTLabel(iso) {
    try {
        const d = new Date(iso);
        const parts = new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Kolkata",
        }).formatToParts(d);
        const get = (t) => parts.find((p) => p.type === t)?.value || "";
        // Example: "Oct 04, 2025 15:38:20 hrs"
        return `${get("month")} ${get("day")}, ${get("year")} ${get("hour")}:${get("minute")}:${get("second")} hrs`;
    } catch {
        return "-";
    }
}

const DEMO_MODE = true; // display-only theme

const Home = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    // build/commit times (from vite define)
    const buildISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
    const commitISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString();

    const LAST_ISO =
        (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) ||
        (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) ||
        null;
    const lastUpdatedLabel = LAST_ISO ? formatISTLabel(LAST_ISO) : "-";

    // live clock
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);
    const today = fmt(now);
    const nowWithTime = fmt(now, true);

    const printOverview = () => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const goSearch = () => navigate("/search");

    return (
        <Styled.Page>
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            {/* Hero */}
            <header className="hero card">
                <div className="heroText">
                    <h1>React Routes Theme</h1>

                    {/* Last updated line */}
                    <p className="muted" style={{ marginTop: 6 }}>
                        last updated: <time dateTime={LAST_ISO || ""}>{lastUpdatedLabel}</time>
                    </p>

                    <div className="meta">
                        <span title="Current date">{today}</span>
                        <span className="dot">•</span>
                        <span title="Current time">{onlyTime(now)}</span>
                    </div>

                    <p className="lead">
                        Polished, display-only ERP frontend theme. No writes, no surprises — just premium UX,
                        deep links, and gorgeous defaults.
                    </p>

                </div>

                <div className="heroActions">
                    <button className="btnPrimary" onClick={goSearch} aria-label="Open global search">
                        <FiSearch style={{ marginRight: 8 }} /> Open Search
                    </button>

                    <div className="ghostRow">
                        <Link className="btnGhost" to="/examples/print" title="Print demo">
                            <FiPrinter style={{ marginRight: 8 }} /> Print Demo
                        </Link>
                        <a
                            className="btnGhost"
                            href="data:application/json;charset=utf-8,{}"
                            download="export.json"
                            title="Export snapshot (static)"
                        >
                            <FiDownload style={{ marginRight: 8 }} /> Export JSON
                        </a>
                    </div>
                </div>
            </header>

            {/* Disabled quick actions (demo mode) */}
            <section className="actions">
                <button className="cta" disabled data-tooltip="Demo mode: action disabled">
                    <FiShoppingCart /> New Order
                </button>
                <button className="cta" disabled data-tooltip="Demo mode: action disabled">
                    <FiFileText /> New Invoice
                </button>
                <button className="cta" disabled data-tooltip="Demo mode: action disabled">
                    <FiUsers /> New Customer
                </button>
                <button className="cta" disabled data-tooltip="Demo mode: action disabled">
                    <FiPackage /> New Product
                </button>
            </section>

            {/* KPI band (hard-coded display values) */}
            <section className="kpis">
                <div className="kpi card">
                    <div className="kpiIcon"><FiShoppingCart /></div>
                    <div className="kpiBody">
                        <div className="kpiLabel">Orders Today</div>
                        <div className="kpiValue">128</div>
                        <div className="kpiFoot">as of {nowWithTime}</div>
                    </div>
                </div>
                <div className="kpi card">
                    <div className="kpiIcon"><FiFileText /></div>
                    <div className="kpiBody">
                        <div className="kpiLabel">Invoices (Open)</div>
                        <div className="kpiValue">42</div>
                        <div className="kpiFoot">updated {nowWithTime}</div>
                    </div>
                </div>
                <div className="kpi card">
                    <div className="kpiIcon"><FiTruck /></div>
                    <div className="kpiBody">
                        <div className="kpiLabel">Pending Shipments</div>
                        <div className="kpiValue">17</div>
                        <div className="kpiFoot">cutoff {onlyTime(now)}</div>
                    </div>
                </div>
                <div className="kpi card">
                    <div className="kpiIcon"><FiPackage /></div>
                    <div className="kpiBody">
                        <div className="kpiLabel">Low-Stock SKUs</div>
                        <div className="kpiValue">9</div>
                        <div className="kpiFoot"><NavLink to="/inventory/reorder">View Reorder</NavLink></div>
                    </div>
                </div>
            </section>

            <section className="grid">
                {/* Shortcuts */}
                <div className="card shortcuts">
                    <h3>Shortcuts</h3>
                    <ul>
                        <li><NavLink to="/customers"><FiUsers /> Customers</NavLink></li>
                        <li><NavLink to="/orders"><FiShoppingCart /> Orders</NavLink></li>
                        <li><NavLink to="/products"><FiPackage /> Products</NavLink></li>
                        <li><NavLink to="/inventory"><FiDatabase /> Inventory</NavLink></li>
                        <li><NavLink to="/vendors"><FiTruck /> Vendors</NavLink></li>
                        <li><NavLink to="/invoices"><FiFileText /> Invoices</NavLink></li>
                        <li><NavLink to="/shipments"><FiTruck /> Shipments</NavLink></li>
                        <li><NavLink to="/reports"><FiBarChart2 /> Reports</NavLink></li>
                        <li><NavLink to="/settings"><FiSettings /> Settings</NavLink></li>
                    </ul>
                </div>

                {/* Recently Viewed (deep links only) */}
                <div className="card recent">
                    <h3>Recently Viewed</h3>
                    <ul className="list">
                        <li>
                            <NavLink to="/customers/CUST-1001">
                                Customer CUST-1001 <FiExternalLink className="x" />
                            </NavLink>
                            <span className="muted">{fmt("2025-10-04T12:15:23+05:30", true)}</span>
                        </li>
                        <li>
                            <NavLink to="/orders/ORD-3001">
                                Order ORD-3001 <FiExternalLink className="x" />
                            </NavLink>
                            <span className="muted">{fmt("2025-10-02T18:05:10+05:30", true)}</span>
                        </li>
                        <li>
                            <NavLink to="/invoices/INV-2031">
                                Invoice INV-2031 <FiExternalLink className="x" />
                            </NavLink>
                            <span className="muted">{fmt("2025-10-01T09:40:00+05:30", true)}</span>
                        </li>
                        <li>
                            <NavLink to="/medicines/MED-AMOX-500">
                                MED-AMOX-500 <FiExternalLink className="x" />
                            </NavLink>
                            <span className="muted">{fmt("2025-09-30T14:32:55+05:30", true)}</span>
                        </li>
                    </ul>
                </div>

                {/* Announcements / Changelog */}
                <div className="card news">
                    <h3>Announcements</h3>
                    <ul className="timeline">
                        <li>
                            <span className="dot" />
                            <div>
                                <strong>Theme refresh · Cards & Focus states</strong>
                                <div className="muted">{fmt("2025-10-04T10:00:00+05:30", true)}</div>
                                <p>Sharper spacing, improved shadows, and accessible focus rings across components.</p>
                            </div>
                        </li>
                        <li>
                            <span className="dot" />
                            <div>
                                <strong>Navigation · Collapsible sections + search memory</strong>
                                <div className="muted">{fmt("2025-10-03T11:35:00+05:30", true)}</div>
                                <p>Sidebar sections collapse, remember state, and auto-open on route match.</p>
                            </div>
                        </li>
                        <li>
                            <span className="dot" />
                            <div>
                                <strong>Printing · Section-only print</strong>
                                <div className="muted">{fmt("2025-10-01T16:05:00+05:30", true)}</div>
                                <p>Pinpoint print support for summaries without layout hacks.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* System Info */}
                <div className="card sys">
                    <h3>System</h3>
                    <div className="rows">
                        <div>
                            <div className="k">Build</div>
                            <div className="v">{fmt(buildISO, true)}</div>
                        </div>
                        <div>
                            <div className="k">Last Commit</div>
                            <div className="v">{fmt(commitISO, true)}</div>
                        </div>
                        <div>
                            <div className="k">Last Updated</div>
                            <div className="v"><time dateTime={LAST_ISO || ""}>{lastUpdatedLabel}</time></div>
                        </div>
                        <div>
                            <div className="k">Demo Mode</div>
                            <div className="v">{DEMO_MODE ? "Enabled" : "Disabled"}</div>
                        </div>
                        <div>
                            <div className="k">Base Path</div>
                            <div className="v">/react-routes-theme</div>
                        </div>
                    </div>
                </div>

                {/* Print Overview (target section) */}
                <div className="card printTarget" id="search-print-area" ref={printRef}>
                    <h3>Printable Overview</h3>
                    <div className="kv">
                        <span className="k">Date</span><span className="v">{today}</span>
                        <span className="k">Time</span><span className="v">{onlyTime(now)}</span>
                        <span className="k">Build</span><span className="v">{fmt(buildISO, true)}</span>
                        <span className="k">Commit</span><span className="v">{fmt(commitISO, true)}</span>
                    </div>
                    <div className="printBtns">
                        <button className="btnGhost" onClick={printOverview}><FiPrinter style={{ marginRight: 8 }} /> Print Overview</button>
                        <Link className="btnGhost" to="/examples/print"><FiInfo style={{ marginRight: 8 }} /> Print Docs</Link>
                    </div>
                </div>
            </section>

            {/* Footer strip */}
            <footer className="foot">
                <div className="left">
                    <FiClock /> <span>Last refreshed</span>
                    <strong>{fmt(now, true)}</strong>
                </div>
                <div className="right">
                    <Link to="/changelog" className="pill"><FiBell /> Changelog</Link>
                    <Link to="/roadmap" className="pill"><FiExternalLink /> Roadmap</Link>
                    <Link to="/help" className="pill"><FiInfo /> Help</Link>
                </div>
            </footer>
        </Styled.Page>
    );
};

export default Home;
