import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* ---- tiny date utils (single source of truth for formatting) ---- */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const now = new Date();

/* ---- demo fixtures (display-only) ---- */
const FIXTURES = [
    {
        id: "CUST-1001",
        code: "CUST-1001",
        firstName: "Aarav",
        lastName: "Sharma",
        email: "aarav.sharma@example.com",
        phone: "+91 98765 43210",
        status: "active",
        tags: ["priority", "wholesale", "north"],
        createdAt: "2024-11-19T10:18:02+05:30",
        updatedAt: "2025-10-04T15:08:41+05:30",
    },
    {
        id: "CUST-1002",
        code: "CUST-1002",
        firstName: "Ishita",
        lastName: "Gupta",
        email: "ishita.gupta@example.com",
        phone: "+91 90000 10002",
        status: "prospect",
        tags: ["inbound", "trial"],
        createdAt: "2025-05-14T12:03:00+05:30",
        updatedAt: "2025-09-28T19:31:12+05:30",
    },
    {
        id: "CUST-1003",
        code: "CUST-1003",
        firstName: "Kabir",
        lastName: "Saxena",
        email: "kabir.saxena@example.com",
        phone: "+91 99220 00011",
        status: "inactive",
        tags: ["overdue"],
        createdAt: "2023-12-09T09:00:00+05:30",
        updatedAt: "2024-02-28T08:20:00+05:30",
    },
    {
        id: "CUST-1004",
        code: "CUST-1004",
        firstName: "Meera",
        lastName: "Nair",
        email: "meera.nair@example.com",
        phone: "+91 98111 22233",
        status: "active",
        tags: ["north", "retail"],
        createdAt: "2025-01-20T14:10:00+05:30",
        updatedAt: "2025-08-01T09:45:12+05:30",
    },
    {
        id: "CUST-1005",
        code: "CUST-1005",
        firstName: "Rohit",
        lastName: "Verma",
        email: "rohit.verma@example.com",
        phone: "+91 98989 12345",
        status: "active",
        tags: ["b2b", "west"],
        createdAt: "2024-06-17T11:45:00+05:30",
        updatedAt: "2025-09-15T17:12:10+05:30",
    },
    {
        id: "CUST-1006",
        code: "CUST-1006",
        firstName: "Tanya",
        lastName: "Kapoor",
        email: "tanya.kapoor@example.com",
        phone: "+91 90012 44662",
        status: "prospect",
        tags: ["newsletter"],
        createdAt: "2025-03-10T16:22:12+05:30",
        updatedAt: "2025-07-21T13:56:28+05:30",
    },
    {
        id: "CUST-1007",
        code: "CUST-1007",
        firstName: "Yash",
        lastName: "Patel",
        email: "yash.patel@example.com",
        phone: "+91 97000 55521",
        status: "active",
        tags: ["south", "wholesale"],
        createdAt: "2022-09-05T10:00:00+05:30",
        updatedAt: "2025-04-18T18:10:00+05:30",
    },
    {
        id: "CUST-1008",
        code: "CUST-1008",
        firstName: "Aditi",
        lastName: "Menon",
        email: "aditi.menon@example.com",
        phone: "+91 96543 22112",
        status: "inactive",
        tags: ["returns"],
        createdAt: "2021-01-15T08:00:00+05:30",
        updatedAt: "2024-11-30T20:01:10+05:30",
    },
    {
        id: "CUST-1009",
        code: "CUST-1009",
        firstName: "Harsh",
        lastName: "Bajaj",
        email: "harsh.bajaj@example.com",
        phone: "+91 95555 88776",
        status: "active",
        tags: ["priority", "key-account"],
        createdAt: "2025-09-01T12:40:40+05:30",
        updatedAt: "2025-10-02T10:10:10+05:30",
    },
    {
        id: "CUST-1010",
        code: "CUST-1010",
        firstName: "Sana",
        lastName: "Qureshi",
        email: "sana.q@example.com",
        phone: "+91 99888 11223",
        status: "prospect",
        tags: ["trial", "email-only"],
        createdAt: "2025-07-09T09:09:09+05:30",
        updatedAt: "2025-09-14T14:14:14+05:30",
    },
    {
        id: "CUST-1011",
        code: "CUST-1011",
        firstName: "Dev",
        lastName: "Rathore",
        email: "dev.r@example.com",
        phone: "+91 88000 99001",
        status: "active",
        tags: ["b2b", "south"],
        createdAt: "2024-02-01T08:12:00+05:30",
        updatedAt: "2025-06-22T12:00:00+05:30",
    },
    {
        id: "CUST-1012",
        code: "CUST-1012",
        firstName: "Naina",
        lastName: "Singh",
        email: "naina.singh@example.com",
        phone: "+91 88990 11223",
        status: "inactive",
        tags: ["churn-risk"],
        createdAt: "2023-04-18T10:30:00+05:30",
        updatedAt: "2024-10-10T10:10:10+05:30",
    },
];

/* ---- chips helpers ---- */
const STATUS_OPTS = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "prospect", label: "Prospect" },
    { key: "inactive", label: "Inactive" },
];

const SORTS = [
    { key: "name-asc", label: "Name A–Z" },
    { key: "name-desc", label: "Name Z–A" },
    { key: "created-desc", label: "Created (Newest)" },
    { key: "created-asc", label: "Created (Oldest)" },
    { key: "updated-desc", label: "Updated (Newest)" },
    { key: "updated-asc", label: "Updated (Oldest)" },
];

const CustomersList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [view, setView] = useState("table"); // 'table' | 'cards'
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all");
    const [sort, setSort] = useState("updated-desc");
    const [showDemoDialog, setShowDemoDialog] = useState(false);

    const printRef = useRef(null);

    useEffect(() => {
        // simulate data fetch for a premium feel
        const t = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(t);
    }, []);

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        let list = FIXTURES.filter((row) => {
            if (status !== "all" && row.status !== status) return false;
            if (tokens.length === 0) return true;
            const surface = [
                row.firstName, row.lastName, row.email, row.phone, row.code, row.id,
                ...(row.tags || [])
            ].join(" ").toLowerCase();
            return tokens.every(t => surface.includes(t));
        });

        const by = {
            "name-asc": (a, b) => (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName),
            "name-desc": (a, b) => (b.firstName + b.lastName).localeCompare(a.firstName + a.lastName),
            "created-desc": (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            "created-asc": (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
            "updated-desc": (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
            "updated-asc": (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
        }[sort];

        list = list.slice().sort(by);
        return list;
    }, [q, status, sort]);

    const onExport = () => {
        const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `customers-export-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const onPrint = () => {
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
            {/* print rules */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position:absolute !important; left:0; top:0; width:100%; }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Customers</h1>
                    <div className="sub">
                        <span>{filtered.length} records</span>
                        <span className="dot">•</span>
                        <span>Last refreshed: {fmt(now, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnDisabled" title="Demo: disabled" onClick={() => setShowDemoDialog(true)}>
                        New Customer
                    </button>
                    <button className="btnDisabled" title="Demo: disabled" onClick={() => setShowDemoDialog(true)}>
                        Import
                    </button>
                    <button className="btnPrimary" onClick={onExport} title="Export visible list">
                        Export
                    </button>
                    <button className="btnGhost" onClick={onPrint} title="Print current view">
                        Print
                    </button>
                </div>
            </Styled.Header>

            <Styled.Toolbar className="card">
                <div className="search">
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search by name, email, phone, tag…"
                        aria-label="Search customers"
                    />
                </div>

                <div className="chips" role="tablist" aria-label="Status filter">
                    {STATUS_OPTS.map(opt => (
                        <button
                            key={opt.key}
                            role="tab"
                            aria-selected={status === opt.key}
                            className={status === opt.key ? "chip active" : "chip"}
                            onClick={() => setStatus(opt.key)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>

                <div className="controls">
                    <label className="select">
                        <span>Sort</span>
                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            {SORTS.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                        </select>
                    </label>

                    <div className="view">
                        <button
                            className={view === "table" ? "toggle active" : "toggle"}
                            onClick={() => setView("table")}
                            title="Table view"
                        >
                            Table
                        </button>
                        <button
                            className={view === "cards" ? "toggle active" : "toggle"}
                            onClick={() => setView("cards")}
                            title="Cards view"
                        >
                            Cards
                        </button>
                    </div>
                </div>
            </Styled.Toolbar>

            {/* printable area mirrors what's visible */}
            <div id="search-print-area" ref={printRef}>
                {view === "table" ? (
                    <Styled.TableCard className="card">
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Contact</th>
                                        <th>Tags</th>
                                        <th>Status</th>
                                        <th>Created</th>
                                        <th>Updated</th>
                                        <th aria-label="actions" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        Array.from({ length: 8 }).map((_, i) => (
                                            <tr key={`sk-${i}`} className="skeleton">
                                                <td><div className="sk sk-avatar" /></td>
                                                <td><div className="sk sk-line" /></td>
                                                <td><div className="sk sk-line" /></td>
                                                <td><div className="sk sk-pill" /></td>
                                                <td><div className="sk sk-line short" /></td>
                                                <td><div className="sk sk-line short" /></td>
                                                <td><div className="sk sk-actions" /></td>
                                            </tr>
                                        ))
                                    ) : filtered.length === 0 ? (
                                        <tr>
                                            <td colSpan={7}>
                                                <Styled.Empty>
                                                    <div className="emoji" aria-hidden>🗂️</div>
                                                    <h3>No customers match</h3>
                                                    <p>Try a different keyword or clear the status filter.</p>
                                                    <div className="muted">Search is case-insensitive and supports multiple words.</div>
                                                </Styled.Empty>
                                            </td>
                                        </tr>
                                    ) : (
                                        filtered.map((c) => (
                                            <tr key={c.id}>
                                                <td>
                                                    <div className="cell-customer">
                                                        <div className="avatar" aria-hidden>
                                                            <span>{(c.firstName?.[0] || "C") + (c.lastName?.[0] || "")}</span>
                                                        </div>
                                                        <div className="meta">
                                                            <NavLink className="name" to={`/customers/${c.id}`}>{c.firstName} {c.lastName}</NavLink>
                                                            <div className="code">{c.code}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="contact">
                                                        <a href={`mailto:${c.email}`} className="email">{c.email}</a>
                                                        <div className="phone">{c.phone}</div>
                                                    </div>
                                                </td>
                                                <td className="tags">
                                                    {(c.tags || []).map(t => <span key={t} className="tag">{t}</span>)}
                                                </td>
                                                <td>
                                                    <span className={`status ${c.status}`}>{c.status}</span>
                                                </td>
                                                <td>{fmt(c.createdAt)}</td>
                                                <td>{fmt(c.updatedAt, true)}</td>
                                                <td className="actions">
                                                    <NavLink to={`/customers/${c.id}`} className="act">View</NavLink>
                                                    <NavLink to={`/customers/${c.id}/edit`} className="act">Edit</NavLink>
                                                    <NavLink to={`/customers/${c.id}/print`} className="act">Print</NavLink>
                                                    <button className="act disabled" title="Demo: disabled" onClick={() => setShowDemoDialog(true)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Styled.TableCard>
                ) : (
                    <Styled.CardsGrid>
                        {loading ? (
                            Array.from({ length: 8 }).map((_, i) => (
                                <div key={`cks-${i}`} className="card item skeleton">
                                    <div className="sk sk-avatar" />
                                    <div className="sk sk-line" />
                                    <div className="sk sk-line short" />
                                    <div className="sk sk-pill" />
                                </div>
                            ))
                        ) : filtered.length === 0 ? (
                            <div className="card">
                                <Styled.Empty>
                                    <div className="emoji" aria-hidden>🗂️</div>
                                    <h3>No customers match</h3>
                                    <p>Try a different keyword or clear the status filter.</p>
                                </Styled.Empty>
                            </div>
                        ) : (
                            filtered.map(c => (
                                <div key={c.id} className="card item">
                                    <div className="head">
                                        <div className="avatar"><span>{(c.firstName?.[0] || "C") + (c.lastName?.[0] || "")}</span></div>
                                        <div className="meta">
                                            <NavLink className="name" to={`/customers/${c.id}`}>{c.firstName} {c.lastName}</NavLink>
                                            <div className="code">{c.code}</div>
                                        </div>
                                        <span className={`status ${c.status}`}>{c.status}</span>
                                    </div>
                                    <div className="body">
                                        <div className="row">
                                            <div className="k">Email</div>
                                            <div className="v"><a href={`mailto:${c.email}`}>{c.email}</a></div>
                                        </div>
                                        <div className="row">
                                            <div className="k">Phone</div>
                                            <div className="v">{c.phone}</div>
                                        </div>
                                        <div className="row">
                                            <div className="k">Created</div>
                                            <div className="v">{fmt(c.createdAt)}</div>
                                        </div>
                                        <div className="row">
                                            <div className="k">Updated</div>
                                            <div className="v">{fmt(c.updatedAt, true)}</div>
                                        </div>
                                        <div className="tags">
                                            {(c.tags || []).map(t => <span key={t} className="tag">{t}</span>)}
                                        </div>
                                    </div>
                                    <div className="foot">
                                        <NavLink to={`/customers/${c.id}`} className="btnGhost small">View</NavLink>
                                        <NavLink to={`/customers/${c.id}/edit`} className="btnGhost small">Edit</NavLink>
                                        <NavLink to={`/customers/${c.id}/print`} className="btnGhost small">Print</NavLink>
                                        <button className="btnGhost small disabled" title="Demo: disabled" onClick={() => setShowDemoDialog(true)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </Styled.CardsGrid>
                )}
            </div>

            {/* demo dialog */}
            {showDemoDialog && (
                <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={() => setShowDemoDialog(false)}>
                    <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                        <header><h4>Demo</h4></header>
                        <div className="body">
                            <p>This is a display-only preview. Create/Import/Delete actions are disabled.</p>
                        </div>
                        <footer>
                            <button className="btnPrimary" onClick={() => setShowDemoDialog(false)}>Got it</button>
                            <button className="btnGhost" onClick={() => navigate("/help")}>Help</button>
                        </footer>
                    </Styled.Modal>
                </Styled.Overlay>
            )}
        </Styled.Page>
    );
};

export default CustomersList;
