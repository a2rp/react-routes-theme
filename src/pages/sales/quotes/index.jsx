import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { Styled } from "./styled";

const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const onlyTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const inr = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

// Demo data (display-only)
const QUOTES = [
    { id: "Q-1001", customer: "Bluewave Traders", createdAt: "2025-10-01T10:12:03+05:30", validTill: "2025-10-10", status: "Sent", items: 12, amount: 184000, salesperson: "Aarav", lastActivity: "2025-10-04T16:38:20+05:30" },
    { id: "Q-1002", customer: "Nimbus Pharma", createdAt: "2025-09-28T09:31:44+05:30", validTill: "2025-10-06", status: "Draft", items: 7, amount: 78000, salesperson: "Ishita", lastActivity: "2025-10-03T12:05:10+05:30" },
    { id: "Q-1003", customer: "Urban Stores", createdAt: "2025-09-25T15:02:18+05:30", validTill: "2025-10-05", status: "Accepted", items: 5, amount: 52000, salesperson: "Kabir", lastActivity: "2025-10-04T09:18:00+05:30" },
    { id: "Q-1004", customer: "Vertex Labs", createdAt: "2025-09-29T11:44:02+05:30", validTill: "2025-10-08", status: "Rejected", items: 3, amount: 22000, salesperson: "Ishita", lastActivity: "2025-10-02T18:26:45+05:30" },
    { id: "Q-1005", customer: "Meadow Retail", createdAt: "2025-09-23T12:07:55+05:30", validTill: "2025-10-03", status: "Expired", items: 9, amount: 132000, salesperson: "Aarav", lastActivity: "2025-10-01T10:52:11+05:30" },
    { id: "Q-1006", customer: "Skyline Distributors", createdAt: "2025-10-02T13:21:00+05:30", validTill: "2025-10-12", status: "Sent", items: 11, amount: 201500, salesperson: "Zara", lastActivity: "2025-10-04T11:00:00+05:30" },
    { id: "Q-1007", customer: "Crescent Care", createdAt: "2025-10-03T08:19:12+05:30", validTill: "2025-10-11", status: "Draft", items: 6, amount: 61000, salesperson: "Kabir", lastActivity: "2025-10-04T13:42:29+05:30" },
    { id: "Q-1008", customer: "Oakridge Chem", createdAt: "2025-09-30T17:40:00+05:30", validTill: "2025-10-07", status: "Accepted", items: 10, amount: 157000, salesperson: "Zara", lastActivity: "2025-10-04T14:14:14+05:30" },
    { id: "Q-1009", customer: "Silverline Clinic", createdAt: "2025-09-22T10:10:10+05:30", validTill: "2025-09-30", status: "Expired", items: 4, amount: 43000, salesperson: "Ishita", lastActivity: "2025-09-30T19:22:45+05:30" },
    { id: "Q-1010", customer: "Pacific Healthcare", createdAt: "2025-10-04T09:09:09+05:30", validTill: "2025-10-15", status: "Sent", items: 8, amount: 98000, salesperson: "Aarav", lastActivity: "2025-10-04T12:34:56+05:30" },
    { id: "Q-1011", customer: "Northwind Mart", createdAt: "2025-09-27T14:25:00+05:30", validTill: "2025-10-09", status: "Rejected", items: 2, amount: 12000, salesperson: "Kabir", lastActivity: "2025-10-03T16:11:11+05:30" },
    { id: "Q-1012", customer: "Suncrest Stores", createdAt: "2025-09-26T11:11:11+05:30", validTill: "2025-10-06", status: "Sent", items: 13, amount: 245500, salesperson: "Zara", lastActivity: "2025-10-04T10:45:00+05:30" },
];

const STATUS = ["All", "Draft", "Sent", "Accepted", "Rejected", "Expired"];

const DemoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay onMouseDown={onClose} role="dialog" aria-modal="true">
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer><button className="btnPrimary" onClick={onClose}>Close</button></footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const SalesQuotesList = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const [query, setQuery] = useState(() => params.get("q") || "");
    const [status, setStatus] = useState(() => params.get("status") || "All");
    const [from, setFrom] = useState(() => params.get("from") || "");
    const [to, setTo] = useState(() => params.get("to") || "");
    const [page, setPage] = useState(() => Number(params.get("page") || 1));
    const [demoOpen, setDemoOpen] = useState(false);
    const [banner, setBanner] = useState("");
    const printRef = useRef(null);

    const pageSize = 8;

    useEffect(() => {
        const next = new URLSearchParams();
        if (query) next.set("q", query);
        if (status && status !== "All") next.set("status", status);
        if (from) next.set("from", from);
        if (to) next.set("to", to);
        if (page > 1) next.set("page", String(page));
        setParams(next, { replace: true });
    }, [query, status, from, to, page, setParams]);

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3000);
        return () => clearTimeout(t);
    }, [banner]);

    const filtered = useMemo(() => {
        let out = QUOTES;
        if (status !== "All") out = out.filter(q => q.status === status);
        if (query.trim()) {
            const ql = query.trim().toLowerCase();
            out = out.filter(q =>
                (q.id + " " + q.customer + " " + q.salesperson).toLowerCase().includes(ql)
            );
        }
        if (from) out = out.filter(q => new Date(q.createdAt) >= new Date(from));
        if (to) out = out.filter(q => new Date(q.createdAt) <= new Date(to + "T23:59:59"));
        return out;
    }, [query, status, from, to]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    useEffect(() => {
        if (page > totalPages) setPage(1);
    }, [page, totalPages]);
    const paged = filtered.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);

    const handleExport = () => {
        const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "quotes.json";
        document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
        setBanner(`Exported at ${fmt(new Date(), true)}`);
    };

    const handleCopy = (id) => {
        const link = `${location.origin}${import.meta.env.BASE_URL || "/"}sales/quotes/${id}`.replace(/\/+$/, "/").replace(/\/{2,}/g, "/");
        navigator.clipboard?.writeText(link).then(() => {
            setBanner(`Link copied • ${id}`);
        });
    };

    const printList = () => {
        const el = printRef.current; if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const clearFilters = () => {
        setQuery(""); setStatus("All"); setFrom(""); setTo(""); setPage(1);
    };

    return (
        <Styled.Page>
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
                <div className="meta">
                    <h1>Sales Quotes</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/sales">Sales</NavLink><span>/</span><span className="current">Quotes</span>
                    </nav>
                    <div className="sub">
                        <span>Last refreshed: {fmt(new Date(), true)}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="btnGhost" onClick={printList} title="Print visible list">Print</button>
                    <button className="btnGhost" onClick={handleExport} title="Export to JSON">Export</button>
                    <button className="btnPrimary" onClick={() => setDemoOpen(true)} title="Create new quote">New Quote</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Filters className="card">
                <div className="row">
                    <div>
                        <label>Search</label>
                        <input
                            value={query}
                            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                            placeholder="Search by Quote ID, Customer, Salesperson"
                            aria-label="Search quotes"
                        />
                    </div>
                    <div>
                        <label>Status</label>
                        <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }}>
                            {STATUS.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div>
                        <label>From</label>
                        <input type="date" value={from} onChange={(e) => { setFrom(e.target.value); setPage(1); }} />
                    </div>
                    <div>
                        <label>To</label>
                        <input type="date" value={to} onChange={(e) => { setTo(e.target.value); setPage(1); }} />
                    </div>
                </div>
                <div className="toolbar">
                    <div className="chips">
                        {status !== "All" ? <span className="chip">Status: {status}</span> : null}
                        {query ? <span className="chip">Query: {query}</span> : null}
                        {from ? <span className="chip">From: {fmt(new Date(from))}</span> : null}
                        {to ? <span className="chip">To: {fmt(new Date(to))}</span> : null}
                    </div>
                    <div className="right">
                        <button className="btnGhost" onClick={clearFilters}>Clear</button>
                    </div>
                </div>
            </Styled.Filters>

            <Styled.TableCard className="card" id="search-print-area" ref={printRef}>
                <div className="tableHeader">
                    <div className="counts">
                        <span className="muted">Showing</span>
                        <strong>{paged.length}</strong>
                        <span className="muted">of</span>
                        <strong>{filtered.length}</strong>
                        <span className="muted">quotes</span>
                    </div>
                </div>

                {filtered.length === 0 ? (
                    <Styled.Empty>
                        <div className="icon">⊘</div>
                        <div className="title">No quotes match the filters</div>
                        <div className="sub">Try clearing filters or adjusting the date range.</div>
                    </Styled.Empty>
                ) : (
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Quote</th>
                                    <th>Customer</th>
                                    <th>Created</th>
                                    <th>Valid Till</th>
                                    <th>Status</th>
                                    <th>Items</th>
                                    <th className="right">Amount</th>
                                    <th>Salesperson</th>
                                    <th>Last Activity</th>
                                    <th className="right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paged.map(row => (
                                    <tr key={row.id}>
                                        <td><NavLink to={`/sales/quotes/${row.id}`} title="Open details">{row.id}</NavLink></td>
                                        <td className="mutedCell">{row.customer}</td>
                                        <td>{fmt(row.createdAt)}</td>
                                        <td>{fmt(row.validTill)}</td>
                                        <td>
                                            <span className={`badge status-${row.status.toLowerCase()}`}>{row.status}</span>
                                        </td>
                                        <td>{row.items}</td>
                                        <td className="right">{inr(row.amount)}</td>
                                        <td className="mutedCell">{row.salesperson}</td>
                                        <td>{fmt(row.lastActivity, true)}</td>
                                        <td className="right actions">
                                            <NavLink className="link" to={`/sales/quotes/${row.id}`} title="View">View</NavLink>
                                            <button className="link" onClick={() => handleCopy(row.id)} title="Copy deep link">Copy Link</button>
                                            <button className="link" onClick={printList} title="Print list">Print</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <Styled.Pagination>
                    <button disabled={page <= 1} onClick={() => setPage(1)}>« First</button>
                    <button disabled={page <= 1} onClick={() => setPage(p => p - 1)}>‹ Prev</button>
                    <span className="page">
                        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
                    </span>
                    <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next ›</button>
                    <button disabled={page >= totalPages} onClick={() => setPage(totalPages)}>Last »</button>
                </Styled.Pagination>
            </Styled.TableCard>

            <Styled.SidebarRow>
                <div className="card info">
                    <h3>How quotes work</h3>
                    <p>
                        Send a formal offer with pricing and validity. When accepted, convert it to an order or invoice.
                    </p>
                    <ul>
                        <li>Draft → internal only</li>
                        <li>Sent → delivered to customer</li>
                        <li>Accepted / Rejected → final decision</li>
                        <li>Expired → after validity date</li>
                    </ul>
                    <div className="tips">
                        <span className="chip">Deep links</span>
                        <span className="chip">Print-ready</span>
                        <span className="chip">Export JSON</span>
                    </div>
                </div>

                <div className="card shortcuts">
                    <h3>Shortcuts</h3>
                    <div className="grid">
                        <NavLink to="/customers">Customers</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/invoices">Invoices</NavLink>
                        <NavLink to="/orders">Orders</NavLink>
                        <NavLink to="/reports/sales">Sales Report</NavLink>
                    </div>
                </div>
            </Styled.SidebarRow>

            <DemoDialog
                open={demoOpen}
                title="Demo Mode"
                message="This is a display-only theme. Creating new quotes is disabled here."
                onClose={() => setDemoOpen(false)}
            />
        </Styled.Page>
    );
};

export default SalesQuotesList;
