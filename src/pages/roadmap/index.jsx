import { useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- date formatting helpers ---------- */
function fmtDate(dateLike) {
    const d = new Date(dateLike);
    return d.toDateString(); // e.g., "Sat Oct 04 2025"
}
function fmtTime(dateLike) {
    const d = new Date(dateLike);
    const h = String(d.getHours()).padStart(2, "0");
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    return `${h}:${m}:${s}hrs`; // e.g., "15:38:20hrs"
}
function fmtDateTime(dateLike) {
    const d = new Date(dateLike);
    return `${d.toDateString()} ${fmtTime(d)}`;
}

/* build/commit meta from Vite define (if present) */
const BUILD_ISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : null;
const COMMIT_ISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : null;

/* ---------- display-only static roadmap data ---------- */
const swimlanes = [
    { key: "now", label: "Now" },
    { key: "next", label: "Next" },
    { key: "later", label: "Later" },
    { key: "shipped", label: "Recently Shipped" },
];

const areas = [
    "UX",
    "Performance",
    "Reliability",
    "Compliance",
    "Integrations",
    "Healthcare Pack",
    "E-commerce Pack",
    "Reporting",
    "DevEx",
];

const items = [
    {
        id: "RM-101",
        title: "Global Search polish & result previews",
        area: "UX",
        lane: "now",
        date: "2025-10-04T12:15:20+05:30",
        links: [
            { to: "/search", label: "Open Search" },
            { to: "/examples/nav-search", label: "Nav Search Demo" },
        ],
    },
    {
        id: "RM-102",
        title: "Customers detail page — activity timeline & print area",
        area: "UX",
        lane: "now",
        date: "2025-10-03T16:45:00+05:30",
        links: [
            { to: "/customers", label: "Customers" },
            { to: "/reports/customers", label: "Customers Report" },
        ],
    },
    {
        id: "RM-110",
        title: "Invoice print layout presets",
        area: "Reporting",
        lane: "next",
        date: "2025-10-10T10:05:00+05:30",
        links: [
            { to: "/invoices", label: "Invoices" },
            { to: "/settings/print-templates", label: "Print Templates" },
        ],
    },
    {
        id: "RM-120",
        title: "Inventory: near-expiry & low-stock ribbons",
        area: "Reliability",
        lane: "next",
        date: "2025-10-18T11:30:00+05:30",
        links: [
            { to: "/inventory", label: "Inventory" },
            { to: "/medicines/expiry-tracker", label: "Expiry Tracker" },
            { to: "/inventory/reorder", label: "Reorder Planner" },
        ],
    },
    {
        id: "RM-130",
        title: "Finance views: P&L, Balance Sheet, Trial Balance (display)",
        area: "Reporting",
        lane: "later",
        date: "2025-11-15T09:00:00+05:30",
        links: [
            { to: "/finance/profit-loss", label: "Profit & Loss" },
            { to: "/finance/balance-sheet", label: "Balance Sheet" },
            { to: "/finance/trial-balance", label: "Trial Balance" },
        ],
    },
    {
        id: "RM-140",
        title: "Feature Flags console for demo toggles",
        area: "DevEx",
        lane: "later",
        date: "2025-12-01T14:25:00+05:30",
        links: [
            { to: "/admin/feature-flags", label: "Feature Flags" },
            { to: "/admin/system-status", label: "System Status" },
        ],
    },
    {
        id: "RM-090",
        title: "Theme tokens preview & live playground",
        area: "DevEx",
        lane: "shipped",
        date: "2025-09-26T18:28:57+05:30",
        links: [
            { to: "/examples/theme", label: "Theme Demo" },
            { to: "/tools/theme-tokens", label: "Theme Tokens" },
            { to: "/settings/appearance", label: "Appearance" },
        ],
    },
    {
        id: "RM-095",
        title: "Collapsible, searchable sidebar navigation",
        area: "UX",
        lane: "shipped",
        date: "2025-09-28T13:12:00+05:30",
        links: [
            { to: "/examples/breadcrumbs", label: "Breadcrumbs" },
            { to: "/dashboard", label: "Dashboard" },
        ],
    },
];

/* quicklinks to move around the app from Roadmap */
const quickLinks = [
    { to: "/customers", label: "Customers" },
    { to: "/orders", label: "Orders" },
    { to: "/products", label: "Products" },
    { to: "/medicines", label: "Medicines" },
    { to: "/inventory", label: "Inventory" },
    { to: "/vendors", label: "Vendors" },
    { to: "/purchase-orders", label: "Purchase Orders" },
    { to: "/shipments", label: "Shipments" },
    { to: "/invoices", label: "Invoices" },
    { to: "/receipts", label: "Receipts" },
    { to: "/finance", label: "Finance" },
    { to: "/reports", label: "Reports" },
    { to: "/admin/users", label: "Admin: Users" },
    { to: "/admin/feature-flags", label: "Admin: Feature Flags" },
    { to: "/settings/appearance", label: "Settings: Appearance" },
    { to: "/tools/theme-tokens", label: "Tools: Theme Tokens" },
    { to: "/help", label: "Help Center" },
    { to: "/changelog", label: "Changelog" },
];

export default function RoadmapPage() {
    const { pathname } = useLocation();

    const lanes = useMemo(() => {
        const map = Object.fromEntries(swimlanes.map(s => [s.key, []]));
        for (const it of items) {
            if (map[it.lane]) map[it.lane].push(it);
        }
        return map;
    }, []);

    const onPrint = () => {
        document.body.classList.add("print-section-mode");
        setTimeout(() => {
            window.print();
            document.body.classList.remove("print-section-mode");
        }, 10);
    };

    return (
        <Styled.Page>
            {/* print-only style block */}
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

            <Styled.Header>
                <div className="left">
                    <h1>Product Roadmap</h1>
                    <div className="meta">
                        <span className="crumbs">
                            <NavLink to="/home" title="Home">Home</NavLink>
                            <span className="sep">/</span>
                            <NavLink to="/about" title="About">About</NavLink>
                            <span className="sep">/</span>
                            <span className="current" aria-current="page">Roadmap</span>
                        </span>

                        <span className="divider">•</span>
                        <span title="Current route">{pathname}</span>

                        {BUILD_ISO && (
                            <>
                                <span className="divider">•</span>
                                <span className="dim">Build:</span>&nbsp;
                                <span>{fmtDateTime(BUILD_ISO)}</span>
                            </>
                        )}
                        {COMMIT_ISO && (
                            <>
                                <span className="divider">•</span>
                                <span className="dim">Last commit:</span>&nbsp;
                                <span>{fmtDateTime(COMMIT_ISO)}</span>
                            </>
                        )}
                    </div>

                    <div className="tags">
                        {areas.map(a => (
                            <span key={a} className="tag" title={`Area: ${a}`}>{a}</span>
                        ))}
                    </div>
                </div>

                <div className="right">
                    <div className="toolbar">
                        <button className="primary" onClick={onPrint} title="Print this roadmap section">
                            Print
                        </button>
                        <a className="ghost" href="/changelog" title="See releases">
                            Release Notes
                        </a>
                        <a className="ghost" href="/admin/feature-flags" title="Feature flags console">
                            Feature Flags
                        </a>
                        <a className="ghost" href="/settings/appearance" title="Theme & appearance">
                            Appearance
                        </a>
                    </div>
                    <div className="quicklinks">
                        {quickLinks.map(q => (
                            <Link key={q.to} to={q.to} className="q" title={q.label}>{q.label}</Link>
                        ))}
                    </div>
                </div>
            </Styled.Header>

            {/* main content to be printable */}
            <div id="search-print-area">
                <Styled.Legend>
                    <div className="row">
                        <span className="badge now">Now</span>
                        <span className="badge next">Next</span>
                        <span className="badge later">Later</span>
                        <span className="badge shipped">Shipped</span>
                    </div>
                    <div className="row">
                        <a href="#lane-now" className="anchor">Jump to Now</a>
                        <a href="#lane-next" className="anchor">Jump to Next</a>
                        <a href="#lane-later" className="anchor">Jump to Later</a>
                        <a href="#lane-shipped" className="anchor">Jump to Shipped</a>
                    </div>
                </Styled.Legend>

                <Styled.Grid>
                    {swimlanes.map(({ key, label }) => (
                        <section key={key} id={`lane-${key}`} className="lane">
                            <header className={`laneHead ${key}`}>
                                <h2>{label}</h2>
                            </header>

                            <div className="cards">
                                {lanes[key].map(card => (
                                    <article key={card.id} className="card">
                                        <div className="cardTop">
                                            <span className={`status ${key}`}>{label}</span>
                                            <span className="id">{card.id}</span>
                                        </div>

                                        <h3 className="title">{card.title}</h3>

                                        <div className="meta">
                                            <span className="area" title="Work area">{card.area}</span>
                                            <span className="dot">•</span>
                                            <span title="Target / Shipped on">{fmtDate(card.date)}</span>
                                            <span className="dot">•</span>
                                            <span className="time" title="Time">{fmtTime(card.date)}</span>
                                        </div>

                                        <div className="links">
                                            {card.links.map(l => (
                                                <Link key={l.to} to={l.to} className="inlineLink" title={l.label}>
                                                    {l.label}
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="foot">
                                            <Link to="/reports" className="pill" title="Reports">Reports</Link>
                                            <Link to="/dashboard" className="pill" title="Dashboard">Dashboard</Link>
                                            <Link to="/settings/print-templates" className="pill" title="Print Templates">
                                                Print Templates
                                            </Link>
                                        </div>
                                    </article>
                                ))}

                                {lanes[key].length === 0 && (
                                    <div className="empty">
                                        <p>No items in this lane right now.</p>
                                        <p className="hint">
                                            Explore <Link to="/changelog">Changelog</Link> or return to <Link to="/home">Home</Link>.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>
                    ))}
                </Styled.Grid>

                <Styled.FooterNav>
                    <div className="col">
                        <h4>Explore</h4>
                        <nav>
                            <Link to="/customers">Customers</Link>
                            <Link to="/orders">Orders</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/medicines">Medicines</Link>
                            <Link to="/inventory">Inventory</Link>
                            <Link to="/shipments">Shipments</Link>
                            <Link to="/invoices">Invoices</Link>
                            <Link to="/receipts">Receipts</Link>
                        </nav>
                    </div>
                    <div className="col">
                        <h4>Reports</h4>
                        <nav>
                            <Link to="/reports/sales">Sales</Link>
                            <Link to="/reports/inventory">Inventory</Link>
                            <Link to="/reports/customers">Customers</Link>
                            <Link to="/reports/finance">Finance</Link>
                            <Link to="/reports/gst">GST</Link>
                        </nav>
                    </div>
                    <div className="col">
                        <h4>Admin & Settings</h4>
                        <nav>
                            <Link to="/admin/users">Users</Link>
                            <Link to="/admin/roles">Roles</Link>
                            <Link to="/admin/feature-flags">Feature Flags</Link>
                            <Link to="/settings/appearance">Appearance</Link>
                            <Link to="/tools/theme-tokens">Theme Tokens</Link>
                            <Link to="/help">Help Center</Link>
                        </nav>
                    </div>
                </Styled.FooterNav>
            </div>
        </Styled.Page>
    );
}
