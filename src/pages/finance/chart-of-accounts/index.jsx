import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* ---------------------------------------------
   Date formats
--------------------------------------------- */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ---------------------------------------------
   Fixture (nested)
--------------------------------------------- */
const COA_FIXTURE = [
    {
        id: "1000", code: "1000", name: "Assets", type: "Asset", normal: "Debit", status: "Active",
        tags: ["group"], createdAt: "2025-09-21T09:25:10+05:30", updatedAt: "2025-10-04T11:15:22+05:30",
        children: [
            {
                id: "1100", code: "1100", name: "Current Assets", type: "Asset", normal: "Debit", status: "Active",
                tags: ["group", "current"], createdAt: "2025-09-21T09:25:10+05:30", updatedAt: "2025-10-04T11:15:22+05:30",
                children: [
                    { id: "1110", code: "1110", name: "Cash in Hand", type: "Asset", normal: "Debit", status: "Active", tags: ["cash", "daily"], createdAt: "2025-09-22T10:10:00+05:30", updatedAt: "2025-10-04T11:20:05+05:30", children: [] },
                    { id: "1120", code: "1120", name: "Bank - HDFC", type: "Asset", normal: "Debit", status: "Active", tags: ["bank"], createdAt: "2025-09-22T10:30:00+05:30", updatedAt: "2025-10-04T11:20:05+05:30", children: [] },
                    {
                        id: "1130", code: "1130", name: "Accounts Receivable", type: "Asset", normal: "Debit", status: "Active",
                        tags: ["receivable", "ar"], createdAt: "2025-09-23T15:00:00+05:30", updatedAt: "2025-10-04T11:40:12+05:30",
                        children: [
                            { id: "1131", code: "1131", name: "AR - Domestic", type: "Asset", normal: "Debit", status: "Active", tags: ["ar", "india"], createdAt: "2025-09-23T15:10:00+05:30", updatedAt: "2025-10-04T11:40:12+05:30", children: [] },
                            { id: "1132", code: "1132", name: "AR - Export", type: "Asset", normal: "Debit", status: "Active", tags: ["ar", "export"], createdAt: "2025-09-23T15:20:00+05:30", updatedAt: "2025-10-04T11:40:12+05:30", children: [] }
                        ]
                    }
                ]
            },
            {
                id: "1200", code: "1200", name: "Fixed Assets", type: "Asset", normal: "Debit", status: "Active",
                tags: ["group", "fixed"], createdAt: "2025-09-21T09:25:10+05:30", updatedAt: "2025-10-04T11:15:22+05:30",
                children: [
                    { id: "1210", code: "1210", name: "Plant & Machinery", type: "Asset", normal: "Debit", status: "Active", tags: ["depreciable"], createdAt: "2025-09-25T13:55:00+05:30", updatedAt: "2025-10-04T12:00:00+05:30", children: [] },
                    { id: "1220", code: "1220", name: "Office Equipment", type: "Asset", normal: "Debit", status: "Active", tags: ["depreciable"], createdAt: "2025-09-25T13:55:00+05:30", updatedAt: "2025-10-04T12:00:00+05:30", children: [] }
                ]
            }
        ]
    },
    {
        id: "2000", code: "2000", name: "Liabilities", type: "Liability", normal: "Credit", status: "Active",
        tags: ["group"], createdAt: "2025-09-21T09:25:10+05:30", updatedAt: "2025-10-04T11:15:22+05:30",
        children: [
            {
                id: "2100", code: "2100", name: "Current Liabilities", type: "Liability", normal: "Credit", status: "Active",
                tags: ["group", "current"], createdAt: "2025-09-24T08:15:00+05:30", updatedAt: "2025-10-04T12:12:00+05:30",
                children: [
                    { id: "2110", code: "2110", name: "Accounts Payable", type: "Liability", normal: "Credit", status: "Active", tags: ["ap", "payable"], createdAt: "2025-09-24T08:15:00+05:30", updatedAt: "2025-10-04T12:12:00+05:30", children: [] },
                    { id: "2120", code: "2120", name: "GST Payable", type: "Liability", normal: "Credit", status: "Active", tags: ["gst", "compliance"], createdAt: "2025-09-26T10:00:00+05:30", updatedAt: "2025-10-04T12:12:00+05:30", children: [] }
                ]
            }
        ]
    },
    {
        id: "3000", code: "3000", name: "Equity", type: "Equity", normal: "Credit", status: "Active",
        tags: ["group"], createdAt: "2025-09-21T09:25:10+05:30", updatedAt: "2025-10-04T11:15:22+05:30",
        children: [
            { id: "3100", code: "3100", name: "Share Capital", type: "Equity", normal: "Credit", status: "Active", tags: [], createdAt: "2025-09-27T12:00:00+05:30", updatedAt: "2025-10-04T12:12:00+05:30", children: [] },
            { id: "3200", code: "3200", name: "Retained Earnings", type: "Equity", normal: "Credit", status: "Active", tags: [], createdAt: "2025-09-27T12:00:00+05:30", updatedAt: "2025-10-04T12:12:00+05:30", children: [] }
        ]
    },
    {
        id: "4000", code: "4000", name: "Income", type: "Income", normal: "Credit", status: "Active",
        tags: ["group"], createdAt: "2025-09-21T09:25:10+05:30", updatedAt: "2025-10-04T11:15:22+05:30",
        children: [
            {
                id: "4100", code: "4100", name: "Sales", type: "Income", normal: "Credit", status: "Active",
                tags: ["primary"], createdAt: "2025-09-28T14:00:00+05:30", updatedAt: "2025-10-04T12:20:00+05:30",
                children: [
                    { id: "4110", code: "4110", name: "Domestic Sales", type: "Income", normal: "Credit", status: "Active", tags: [], createdAt: "2025-09-28T14:20:00+05:30", updatedAt: "2025-10-04T12:20:00+05:30", children: [] },
                    { id: "4120", code: "4120", name: "Export Sales", type: "Income", normal: "Credit", status: "Active", tags: [], createdAt: "2025-09-28T14:20:00+05:30", updatedAt: "2025-10-04T12:20:00+05:30", children: [] }
                ]
            },
            { id: "4200", code: "4200", name: "Other Income", type: "Income", normal: "Credit", status: "Active", tags: [], createdAt: "2025-09-28T14:00:00+05:30", updatedAt: "2025-10-04T12:20:00+05:30", children: [] }
        ]
    },
    {
        id: "5000", code: "5000", name: "Expense", type: "Expense", normal: "Debit", status: "Active",
        tags: ["group"], createdAt: "2025-09-21T09:25:10+05:30", updatedAt: "2025-10-04T11:15:22+05:30",
        children: [
            { id: "5100", code: "5100", name: "COGS", type: "Expense", normal: "Debit", status: "Active", tags: [], createdAt: "2025-09-29T09:00:00+05:30", updatedAt: "2025-10-04T12:22:00+05:30", children: [] },
            {
                id: "5200", code: "5200", name: "Operating Expenses", type: "Expense", normal: "Debit", status: "Active",
                tags: ["opex"], createdAt: "2025-09-29T09:00:00+05:30", updatedAt: "2025-10-04T12:22:00+05:30",
                children: [
                    { id: "5210", code: "5210", name: "Salaries", type: "Expense", normal: "Debit", status: "Active", tags: [], createdAt: "2025-09-29T09:20:00+05:30", updatedAt: "2025-10-04T12:22:00+05:30", children: [] },
                    { id: "5220", code: "5220", name: "Rent", type: "Expense", normal: "Debit", status: "Active", tags: [], createdAt: "2025-09-29T09:20:00+05:30", updatedAt: "2025-10-04T12:22:00+05:30", children: [] },
                    { id: "5230", code: "5230", name: "Utilities", type: "Expense", normal: "Debit", status: "Active", tags: [], createdAt: "2025-09-29T09:20:00+05:30", updatedAt: "2025-10-04T12:22:00+05:30", children: [] }
                ]
            }
        ]
    }
];

/* ---------------------------------------------
   Helpers
--------------------------------------------- */
const flatten = (nodes, parentId = null, depth = 0, out = []) => {
    nodes.forEach(n => {
        out.push({ ...n, parentId, depth });
        if (n.children?.length) flatten(n.children, n.id, depth + 1, out);
    });
    return out;
};

const toCSV = (rows) => {
    const header = ["code", "name", "type", "normal", "status", "tags", "parentCode", "createdAt", "updatedAt"].join(",");
    const byId = new Map(rows.map(r => [r.id, r]));
    const esc = (v) => {
        if (v == null) return "";
        const s = String(v);
        return (s.includes(",") || s.includes("\"") || s.includes("\n")) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const lines = rows.map(r => [
        r.code, r.name, r.type, r.normal, r.status, (r.tags || []).join("|"),
        r.parentId ? byId.get(r.parentId)?.code || "" : "",
        r.createdAt, r.updatedAt
    ].map(esc).join(","));
    return [header, ...lines].join("\n");
};

/* --------------------------------------------- */

const ChartOfAccounts = () => {
    const [query, setQuery] = useState("");
    const [collapsed, setCollapsed] = useState(() => ({})); // id:boolean
    const [selected, setSelected] = useState(null);
    const printRef = useRef(null);

    const flat = useMemo(() => flatten(COA_FIXTURE), []);
    const stats = useMemo(() => {
        const count = (t) => flat.filter(r => r.type === t).length;
        return [
            { label: "Assets", value: count("Asset") },
            { label: "Liabilities", value: count("Liability") },
            { label: "Equity", value: count("Equity") },
            { label: "Income", value: count("Income") },
            { label: "Expense", value: count("Expense") },
            { label: "Total Accounts", value: flat.length }
        ];
    }, [flat]);

    const matches = useCallback((r) => {
        if (!query.trim()) return true;
        const q = query.trim().toLowerCase();
        const hay = [r.code, r.name, r.type, r.normal, r.status, ...(r.tags || [])].join(" ").toLowerCase();
        return q.split(/\s+/).every(t => hay.includes(t));
    }, [query]);

    // visibility map: show node if it matches OR any descendant matches (to keep context)
    const visibleMap = useMemo(() => {
        const map = new Map();
        const visit = (n) => {
            const self = matches(n);
            const kids = (n.children || []).map(visit);
            const anyChild = kids.some(Boolean);
            const vis = self || anyChild;
            map.set(n.id, vis);
            return vis;
        };
        COA_FIXTURE.forEach(visit);
        return map;
    }, [matches]);

    // expand ancestors whenever search is active
    useEffect(() => {
        if (!query.trim()) return;
        const next = { ...collapsed };
        const byId = new Map(flat.map(r => [r.id, r]));
        flat.forEach(r => {
            if (visibleMap.get(r.id) && r.parentId) {
                let p = byId.get(r.parentId);
                while (p) {
                    next[p.id] = false; // force open
                    p = p.parentId ? byId.get(p.parentId) : null;
                }
            }
        });
        setCollapsed(next);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]); // we want this to run when query changes

    const expandAll = () => {
        const open = {};
        flat.forEach(r => { if (r.parentId != null) open[r.id] = false; });
        setCollapsed(open);
    };
    const collapseAll = () => {
        const shut = {};
        flat.forEach(r => { if (r.children?.length) shut[r.id] = true; });
        setCollapsed(shut);
    };

    const exportCSV = () => {
        const csv = toCSV(flat);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `chart-of-accounts-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const renderTree = useCallback((nodes, depth = 0) => {
        return nodes.map((n) => {
            if (!visibleMap.get(n.id)) return null;

            const hasKids = (n.children?.length || 0) > 0;
            const isCollapsed = !!collapsed[n.id];

            return (
                <React.Fragment key={n.id}>
                    <div
                        className="row"
                        id={`acc-${n.code}`}
                        onClick={() => setSelected(n)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === "Enter") setSelected(n); }}
                    >
                        <div className="tree">
                            <span className="indent" aria-hidden="true" style={{ "--d": depth }} />
                            {hasKids ? (
                                <button
                                    className="chev"
                                    aria-label={isCollapsed ? "Expand" : "Collapse"}
                                    onClick={(e) => { e.stopPropagation(); setCollapsed(prev => ({ ...prev, [n.id]: !prev[n.id] })); }}
                                >
                                    {isCollapsed ? "▸" : "▾"}
                                </button>
                            ) : (
                                <span className="leaf" aria-hidden="true">•</span>
                            )}
                        </div>
                        <div className="code">{n.code}</div>
                        <div className="name">{n.name}</div>
                        <div className="type">{n.type}</div>
                        <div className="normal">{n.normal}</div>
                        <div className="status">{n.status}</div>
                        <div className="tags">
                            {(n.tags || []).map(t => <span className="tag" key={t}>{t}</span>)}
                        </div>
                        <div className="updated">{fmt(n.updatedAt, true)}</div>
                        <div className="actions">
                            <button className="btnGhost small" onClick={(e) => {
                                e.stopPropagation();
                                const href = `${location.origin}${import.meta.env.BASE_URL || "/"}finance/chart-of-accounts#acc-${n.code}`;
                                navigator.clipboard?.writeText(href);
                            }}>Copy Link</button>
                            <button className="btnGhost small" disabled title="Demo: edit disabled">Details</button>
                        </div>
                    </div>

                    {hasKids && !isCollapsed ? renderTree(n.children, depth + 1) : null}
                </React.Fragment>
            );
        });
    }, [collapsed, visibleMap]);

    // select from hash on load
    useEffect(() => {
        if (location.hash) {
            const code = location.hash.replace("#acc-", "");
            const row = flat.find(r => r.code === code);
            if (row) setSelected(row);
        }
    }, [flat]);

    return (
        <Styled.Page>
            {/* print rules for section-only printing */}
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
                    <h1>Chart of Accounts</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/finance">Finance</NavLink>
                        <span>/</span>
                        <span className="current">Chart of Accounts</span>
                    </nav>
                    <div className="meta">
                        <span>Snapshot: {fmt(new Date())}</span>
                        <span>•</span>
                        <span>Server Time: {fmt(new Date(), true)}</span>
                    </div>
                </div>
                <div className="right">
                    <button className="btnGhost" disabled title="Demo: disabled">New Account</button>
                    <button className="btnGhost" onClick={expandAll}>Expand All</button>
                    <button className="btnGhost" onClick={collapseAll}>Collapse All</button>
                    <button className="btnPrimary" onClick={exportCSV}>Export CSV</button>
                    <button className="btnGhost" onClick={printSection}>Print</button>
                </div>
            </Styled.Header>

            <Styled.Tools className="card">
                <div className="search">
                    <label htmlFor="coa-search">Search</label>
                    <input
                        id="coa-search"
                        placeholder="Search code, name, type, tags…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {query && <button className="btnGhost small" onClick={() => setQuery("")}>Clear</button>}
                </div>
                <div className="legend">
                    <span className="dot asset" /> Asset
                    <span className="dot liability" /> Liability
                    <span className="dot equity" /> Equity
                    <span className="dot income" /> Income
                    <span className="dot expense" /> Expense
                </div>
            </Styled.Tools>

            <Styled.Stats>
                {stats.map(s => (
                    <div className="stat card" key={s.label}>
                        <div className="label">{s.label}</div>
                        <div className="value">{s.value}</div>
                    </div>
                ))}
            </Styled.Stats>

            <Styled.Grid>
                <section className="tree card" id="search-print-area" ref={printRef}>
                    <header className="thead sticky">
                        <div className="tree">Tree</div>
                        <div className="code">Code</div>
                        <div className="name">Name</div>
                        <div className="type">Type</div>
                        <div className="normal">Normal</div>
                        <div className="status">Status</div>
                        <div className="tags">Tags</div>
                        <div className="updated">Updated</div>
                        <div className="actions">Actions</div>
                    </header>
                    <div className="tbody">
                        {renderTree(COA_FIXTURE)}
                    </div>
                </section>

                <aside className="panel">
                    <div className="card head">
                        <h3>Account Summary</h3>
                        {!selected ? (
                            <p className="muted">Select an account from the list to view details.</p>
                        ) : (
                            <div className="summary">
                                <div className="row">
                                    <div>
                                        <div className="k">Code</div>
                                        <div className="v">{selected.code}</div>
                                    </div>
                                    <div>
                                        <div className="k">Name</div>
                                        <div className="v">{selected.name}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <div className="k">Type</div>
                                        <div className="v">{selected.type}</div>
                                    </div>
                                    <div>
                                        <div className="k">Normal</div>
                                        <div className="v">{selected.normal}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <div className="k">Status</div>
                                        <div className="v">{selected.status}</div>
                                    </div>
                                    <div>
                                        <div className="k">Tags</div>
                                        <div className="v tags">
                                            {(selected.tags || []).length ? selected.tags.map(t => <span className="tag" key={t}>{t}</span>) : "—"}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <div className="k">Created</div>
                                        <div className="v">{fmt(selected.createdAt, true)}</div>
                                    </div>
                                    <div>
                                        <div className="k">Updated</div>
                                        <div className="v">{fmt(selected.updatedAt, true)}</div>
                                    </div>
                                </div>
                                <div className="row actions">
                                    <button className="btnGhost">Copy Link</button>
                                    <button className="btnGhost" disabled title="Demo: disabled">Edit</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="card">
                        <h3>Recent Activity</h3>
                        <ul className="timeline">
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Structure reviewed</strong>
                                    <div className="muted">{fmt("2025-10-04T15:38:20+05:30", true)}</div>
                                </div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Code mapping updated</strong>
                                    <div className="muted">{fmt("2025-10-02T18:00:00+05:30", true)}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/finance/ledgers">Ledgers</NavLink></li>
                            <li><NavLink to="/finance/journals">Journals</NavLink></li>
                            <li><NavLink to="/finance/taxes">Taxes</NavLink></li>
                            <li><NavLink to="/reports/finance">Finance Report</NavLink></li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default ChartOfAccounts;
