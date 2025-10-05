import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Styled } from "./styled";

/** --- date formatting helpers (exact spec) --- */
const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${DAY[d.getDay()]} ${MON[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (iso) => {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

/** --- demo dataset (display-only) --- */
const FEEDBACK = [
    {
        id: "FB-1007",
        title: "Bulk print for invoices with one click",
        category: "Billing",
        status: "Planned",
        votes: 243,
        createdAt: "2025-09-02T10:05:11+05:30",
        updatedAt: "2025-10-04T15:38:20+05:30",
        related: [
            { label: "Invoices", to: "/invoices" },
            { label: "Print Templates", to: "/settings/print-templates" },
            { label: "Receipts", to: "/receipts" },
        ],
    },
    {
        id: "FB-1006",
        title: "Inventory transfers with barcode handoff",
        category: "Inventory",
        status: "Under Review",
        votes: 187,
        createdAt: "2025-08-22T12:12:12+05:30",
        updatedAt: "2025-10-01T09:14:02+05:30",
        related: [
            { label: "Transfers", to: "/inventory/transfers" },
            { label: "Warehouses", to: "/inventory/warehouses" },
            { label: "Batches", to: "/inventory/batches" },
        ],
    },
    {
        id: "FB-1005",
        title: "Customers: pin important contacts at top",
        category: "Customers",
        status: "Shipped",
        votes: 129,
        createdAt: "2025-07-19T18:45:41+05:30",
        updatedAt: "2025-09-15T14:33:20+05:30",
        related: [
            { label: "Customers", to: "/customers" },
            { label: "Users", to: "/admin/users" },
            { label: "Activity", to: "/admin/activity" },
        ],
        shippedLink: { label: "Changelog", to: "/changelog" },
    },
    {
        id: "FB-1004",
        title: "HSN/GST matrix for medicines catalog",
        category: "Medicines",
        status: "Planned",
        votes: 211,
        createdAt: "2025-07-01T10:01:01+05:30",
        updatedAt: "2025-09-28T11:22:01+05:30",
        related: [
            { label: "HSN / GST", to: "/medicines/hsn-gst" },
            { label: "Medicines", to: "/medicines" },
            { label: "Taxes", to: "/finance/taxes" },
        ],
    },
    {
        id: "FB-1003",
        title: "Role-based access for Reports > Finance",
        category: "Admin",
        status: "Under Review",
        votes: 98,
        createdAt: "2025-06-11T10:05:11+05:30",
        updatedAt: "2025-08-08T16:12:20+05:30",
        related: [
            { label: "Permissions", to: "/admin/permissions" },
            { label: "Roles", to: "/admin/roles" },
            { label: "Finance Reports", to: "/reports/finance" },
        ],
    },
    {
        id: "FB-1002",
        title: "Dark/light follow system across subpages",
        category: "Settings",
        status: "Shipped",
        votes: 321,
        createdAt: "2025-05-10T09:05:11+05:30",
        updatedAt: "2025-09-10T18:20:20+05:30",
        related: [
            { label: "Appearance", to: "/settings/appearance" },
            { label: "Theme Tokens", to: "/tools/theme-tokens" },
        ],
        shippedLink: { label: "Changelog", to: "/changelog" },
    },
    {
        id: "FB-1001",
        title: "Order screen: quick add from favorites",
        category: "Orders",
        status: "Under Review",
        votes: 77,
        createdAt: "2025-04-01T12:00:00+05:30",
        updatedAt: "2025-07-22T17:20:30+05:30",
        related: [
            { label: "Orders", to: "/orders" },
            { label: "Products", to: "/products" },
        ],
    },
];

const CATEGORIES = ["All", "Billing", "Inventory", "Customers", "Medicines", "Admin", "Settings", "Orders"];
const STATUSES = ["All", "Planned", "Under Review", "Shipped"];

export default function FeedbackPage() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState("All");
    const [st, setSt] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return FEEDBACK.filter((f) => {
            const text = `${f.title} ${f.category} ${f.status}`.toLowerCase();
            const tMatch = tokens.length === 0 || tokens.every(t => text.includes(t));
            const cMatch = cat === "All" || f.category === cat;
            const sMatch = st === "All" || f.status === st;
            return tMatch && cMatch && sMatch;
        });
    }, [q, cat, st]);

    const openDemoModal = () => setModalOpen(true);
    const closeDemoModal = () => setModalOpen(false);

    const nowISO = "2025-10-04T15:38:20+05:30"; // sample clock for page meta

    return (
        <Styled.Page>
            {/* print-only rules (scoped) */}
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

            <Styled.Header>
                <div className="path">
                    <NavLink to="/home">Home</NavLink>
                    <span>›</span>
                    <NavLink to="/help">Help & Docs</NavLink>
                    <span>›</span>
                    <strong>Feedback</strong>
                </div>

                <div className="meta">
                    <span className="stamp" title={fmtDateTime(nowISO)}>
                        Updated: {fmtDateTime(nowISO)}
                    </span>
                    <Link to="/roadmap" className="pill">Roadmap</Link>
                    <Link to="/changelog" className="pill">Changelog</Link>
                    <Link to="/contact" className="pill">Contact</Link>
                </div>
            </Styled.Header>

            <Styled.TopBar>
                <div className="cluster">
                    <button disabled title="Demo: action disabled">New Feedback</button>
                    <button onClick={openDemoModal}>How feedback works</button>
                    <Link to="/reports/customers" className="link">Reports</Link>
                    <Link to="/admin/audit-log" className="link">Audit Log</Link>
                    <Link to="/settings/notifications" className="link">Notifications</Link>
                </div>

                <div className="filters">
                    <input
                        type="text"
                        placeholder="Search feedback..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        aria-label="Search feedback"
                    />

                    <select value={cat} onChange={(e) => setCat(e.target.value)} aria-label="Category filter">
                        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>

                    <select value={st} onChange={(e) => setSt(e.target.value)} aria-label="Status filter">
                        {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>

                    <button onClick={() => { setQ(""); setCat("All"); setSt("All"); }}>
                        Reset
                    </button>
                </div>
            </Styled.TopBar>

            {/* KPI glance */}
            <Styled.Kpis role="region" aria-label="Feedback KPIs">
                <div className="kpi">
                    <div className="label">Total Requests</div>
                    <div className="value">7</div>
                    <div className="hint">as of {fmtDate(nowISO)}</div>
                </div>
                <div className="kpi">
                    <div className="label">Planned</div>
                    <div className="value">2</div>
                    <div className="hint"><Link to="/roadmap">view roadmap</Link></div>
                </div>
                <div className="kpi">
                    <div className="label">Under Review</div>
                    <div className="value">3</div>
                    <div className="hint"><Link to="/admin/permissions">related settings</Link></div>
                </div>
                <div className="kpi">
                    <div className="label">Shipped</div>
                    <div className="value">2</div>
                    <div className="hint"><Link to="/changelog">release notes</Link></div>
                </div>
            </Styled.Kpis>

            {/* print area */}
            <Styled.Content id="search-print-area">
                <div className="listHeader">
                    <div>
                        <h1>Feedback</h1>
                        <p>Share ideas, report issues, and see what’s planned or shipped. Everything below is display-only for the demo.</p>
                    </div>
                    <div className="listActions">
                        <button onClick={() => {
                            document.body.classList.add("print-section-mode");
                            setTimeout(() => {
                                window.print();
                                document.body.classList.remove("print-section-mode");
                            }, 0);
                        }}>
                            Print This
                        </button>
                        <Link to="/settings/print-templates" className="link">Print Templates</Link>
                    </div>
                </div>

                <div className="cards">
                    {filtered.map((f) => (
                        <article key={f.id} className="card" aria-labelledby={`fb-${f.id}`}>
                            <header className="cardHead">
                                <span className={`chip ${f.status.replace(/\s+/g, '').toLowerCase()}`}>{f.status}</span>
                                <span className="id" title={`Created: ${fmtDateTime(f.createdAt)}`}>{f.id}</span>
                            </header>

                            <h2 id={`fb-${f.id}`}>{f.title}</h2>

                            <div className="metaRow">
                                <span className="badge">{f.category}</span>
                                <span className="votes" title="Upvotes (demo)">
                                    ▲ {f.votes}
                                </span>
                                <span className="updated" title={`Updated: ${fmtDateTime(f.updatedAt)}`}>
                                    Updated: {fmtDateTime(f.updatedAt)}
                                </span>
                            </div>

                            <div className="links">
                                {f.related.map((r) => (
                                    <Link key={r.to} to={r.to} className="link">{r.label}</Link>
                                ))}
                                {f.shippedLink && (
                                    <Link to={f.shippedLink.to} className="link">{f.shippedLink.label}</Link>
                                )}
                            </div>

                            <footer className="cardFoot">
                                <button disabled title="Demo: action disabled">Upvote</button>
                                <button disabled title="Demo: action disabled">Comment</button>
                                <Link to="/roadmap" className="link">View on Roadmap</Link>
                                <Link to="/changelog" className="link">Related Changelog</Link>
                            </footer>
                        </article>
                    ))}
                </div>
            </Styled.Content>

            {/* quick navigation grid */}
            <Styled.QuickNav>
                <div className="qtitle">Jump to</div>
                <nav className="grid">
                    <Link to="/invoices">Invoices</Link>
                    <Link to="/receipts">Receipts</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/inventory/transfers">Transfers</Link>
                    <Link to="/inventory/warehouses">Warehouses</Link>
                    <Link to="/medicines">Medicines</Link>
                    <Link to="/medicines/hsn-gst">HSN / GST</Link>
                    <Link to="/customers">Customers</Link>
                    <Link to="/sales/quotes">Quotes</Link>
                    <Link to="/sales/returns">Returns</Link>
                    <Link to="/finance">Finance</Link>
                    <Link to="/reports">Reports</Link>
                    <Link to="/reports/finance">Finance Report</Link>
                    <Link to="/admin/permissions">Permissions</Link>
                    <Link to="/admin/roles">Roles</Link>
                    <Link to="/admin/audit-log">Audit Log</Link>
                    <Link to="/settings/appearance">Appearance</Link>
                    <Link to="/tools/theme-tokens">Theme Tokens</Link>
                    <Link to="/help">Help Center</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/roadmap">Roadmap</Link>
                    <Link to="/changelog">Changelog</Link>
                </nav>
            </Styled.QuickNav>

            {/* demo modal */}
            {modalOpen && (
                <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
                    <div className="sheet">
                        <h3 id="demo-modal-title">About Feedback (Demo)</h3>
                        <p>
                            This page shows how a full feedback hub would look in production:
                            voting, comments, and triage. In this demo, actions are disabled by
                            design to keep the experience predictable.
                        </p>

                        <ul className="modalLinks">
                            <li><Link to="/roadmap">Roadmap</Link></li>
                            <li><Link to="/changelog">Changelog</Link></li>
                            <li><Link to="/settings/notifications">Notification Settings</Link></li>
                            <li><Link to="/admin/feature-flags">Feature Flags</Link></li>
                        </ul>

                        <div className="controls">
                            <button onClick={closeDemoModal}>Close</button>
                        </div>
                    </div>
                    <button className="backdrop" onClick={closeDemoModal} aria-label="Close"></button>
                </Styled.Modal>
            )}
        </Styled.Page>
    );
}
