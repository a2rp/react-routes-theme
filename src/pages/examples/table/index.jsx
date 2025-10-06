import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* =========================
   Date formatting helpers
   ========================= */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const dnames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mnames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = n => String(n).padStart(2, "0");
    const base = `${dnames[dd.getDay()]} ${mnames[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* =========================
   Demo dataset (display-only)
   ========================= */
const ORDERS = [
    { id: "ORD-3001", date: "2025-09-21T12:32:11+05:30", customer: "Aarav Sharma", city: "New Delhi", channel: "Web", status: "paid", amount: 23890.00, items: 7 },
    { id: "ORD-3002", date: "2025-09-22T09:14:05+05:30", customer: "Diya Kapoor", city: "Mumbai", channel: "POS", status: "pending", amount: 5890.50, items: 2 },
    { id: "ORD-3003", date: "2025-09-22T18:20:31+05:30", customer: "Rahul Verma", city: "Pune", channel: "Web", status: "shipped", amount: 12990.00, items: 3 },
    { id: "ORD-3004", date: "2025-09-23T10:02:00+05:30", customer: "Ishita Mehta", city: "Ahmedabad", channel: "Phone", status: "paid", amount: 8190.00, items: 4 },
    { id: "ORD-3005", date: "2025-09-23T16:45:42+05:30", customer: "Kabir Khanna", city: "Chandigarh", channel: "Web", status: "cancelled", amount: 2999.00, items: 1 },
    { id: "ORD-3006", date: "2025-09-24T11:08:17+05:30", customer: "Neha Gupta", city: "Lucknow", channel: "POS", status: "paid", amount: 9990.00, items: 2 },
    { id: "ORD-3007", date: "2025-09-24T14:19:53+05:30", customer: "Arjun Patel", city: "Surat", channel: "Web", status: "refunded", amount: 4590.00, items: 1 },
    { id: "ORD-3008", date: "2025-09-25T09:55:09+05:30", customer: "Sara Khan", city: "Bengaluru", channel: "Web", status: "paid", amount: 1590.00, items: 1 },
    { id: "ORD-3009", date: "2025-09-25T17:28:44+05:30", customer: "Nikhil Singh", city: "Jaipur", channel: "Marketplace", status: "shipped", amount: 6990.00, items: 2 },
    { id: "ORD-3010", date: "2025-09-26T11:41:27+05:30", customer: "Ananya Iyer", city: "Chennai", channel: "Web", status: "paid", amount: 18990.00, items: 5 },
    { id: "ORD-3011", date: "2025-09-26T13:06:12+05:30", customer: "Viraj Nair", city: "Kochi", channel: "POS", status: "pending", amount: 2490.00, items: 1 },
    { id: "ORD-3012", date: "2025-09-27T10:18:03+05:30", customer: "Meera Rao", city: "Hyderabad", channel: "Phone", status: "paid", amount: 4590.00, items: 2 },
    { id: "ORD-3013", date: "2025-09-27T19:40:55+05:30", customer: "Rohit Sinha", city: "Patna", channel: "Web", status: "paid", amount: 7590.00, items: 2 },
    { id: "ORD-3014", date: "2025-09-28T08:12:22+05:30", customer: "Pooja Jain", city: "Indore", channel: "Marketplace", status: "pending", amount: 2290.00, items: 1 },
    { id: "ORD-3015", date: "2025-09-28T22:01:49+05:30", customer: "Zara Ali", city: "Srinagar", channel: "Web", status: "paid", amount: 9999.00, items: 3 },
    { id: "ORD-3016", date: "2025-09-29T12:20:00+05:30", customer: "Ahaan Bose", city: "Kolkata", channel: "POS", status: "shipped", amount: 8990.00, items: 2 },
    { id: "ORD-3017", date: "2025-09-29T16:30:11+05:30", customer: "Naira Dutta", city: "Guwahati", channel: "Web", status: "paid", amount: 4390.00, items: 1 },
    { id: "ORD-3018", date: "2025-09-30T10:05:37+05:30", customer: "Ritesh K", city: "Mysuru", channel: "Phone", status: "cancelled", amount: 1290.00, items: 1 },
    { id: "ORD-3019", date: "2025-09-30T18:44:19+05:30", customer: "Tanya Arora", city: "Noida", channel: "Web", status: "paid", amount: 12990.00, items: 4 },
    { id: "ORD-3020", date: "2025-10-01T09:21:54+05:30", customer: "Dev Malhotra", city: "Amritsar", channel: "Marketplace", status: "paid", amount: 5990.00, items: 2 },
    { id: "ORD-3021", date: "2025-10-01T12:40:33+05:30", customer: "Yash Anand", city: "Varanasi", channel: "Web", status: "pending", amount: 3290.00, items: 1 },
    { id: "ORD-3022", date: "2025-10-02T11:09:05+05:30", customer: "Simran Kaur", city: "Ludhiana", channel: "POS", status: "paid", amount: 7490.00, items: 2 },
    { id: "ORD-3023", date: "2025-10-03T15:20:40+05:30", customer: "Harshita M", city: "Bhopal", channel: "Web", status: "shipped", amount: 2590.00, items: 1 },
    { id: "ORD-3024", date: "2025-10-03T19:02:14+05:30", customer: "Pranav Joshi", city: "Nagpur", channel: "Web", status: "refunded", amount: 1990.00, items: 1 },
    { id: "ORD-3025", date: "2025-10-04T09:12:28+05:30", customer: "Anvi Kulkarni", city: "Thane", channel: "Web", status: "paid", amount: 8999.00, items: 3 },
];

/* columns: id, date, customer, city, channel, status, items, amount */

const HEADERS = [
    { key: "id", label: "Order ID", align: "left" },
    { key: "date", label: "Date", align: "left" },
    { key: "customer", label: "Customer", align: "left" },
    { key: "city", label: "City", align: "left" },
    { key: "channel", label: "Channel", align: "left" },
    { key: "status", label: "Status", align: "left" },
    { key: "items", label: "Items", align: "right" },
    { key: "amount", label: "Amount (₹)", align: "right" },
    { key: "actions", label: "", align: "right", sortable: false },
];

const cmp = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

const ExampleTable = () => {
    const [q, setQ] = useState("");
    const [sortBy, setSortBy] = useState("date");
    const [sortDir, setSortDir] = useState("desc"); // asc|desc
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);
    const [showDemoModal, setShowDemoModal] = useState(false);
    const printRef = useRef(null);

    const filtered = useMemo(() => {
        const t = q.trim().toLowerCase();
        if (!t) return ORDERS;
        return ORDERS.filter(o => {
            const blob = `${o.id} ${o.customer} ${o.city} ${o.channel} ${o.status}`.toLowerCase();
            return t.split(/\s+/).every(tok => blob.includes(tok));
        });
    }, [q]);

    const sorted = useMemo(() => {
        const arr = [...filtered];
        if (!sortBy) return arr;
        arr.sort((a, b) => {
            let av = a[sortBy];
            let bv = b[sortBy];
            if (sortBy === "date") { av = new Date(av).getTime(); bv = new Date(bv).getTime(); }
            return sortDir === "asc" ? cmp(av, bv) : cmp(bv, av);
        });
        return arr;
    }, [filtered, sortBy, sortDir]);

    const pages = Math.max(1, Math.ceil(sorted.length / pageSize));
    const pageSafe = Math.min(Math.max(page, 1), pages);
    const rows = useMemo(() => {
        const start = (pageSafe - 1) * pageSize;
        return sorted.slice(start, start + pageSize);
    }, [sorted, pageSize, pageSafe]);

    const toggleSort = (key) => {
        if (key === "actions") return;
        if (sortBy !== key) { setSortBy(key); setSortDir("asc"); return; }
        setSortDir(prev => (prev === "asc" ? "desc" : "asc"));
    };

    const exportCSV = () => {
        const header = ["Order ID", "Date", "Customer", "City", "Channel", "Status", "Items", "Amount"];
        const lines = [header.join(",")];
        sorted.forEach(o => {
            lines.push([
                o.id,
                fmt(o.date, true).replace(/,/g, ""),
                `"${o.customer}"`,
                `"${o.city}"`,
                o.channel,
                o.status,
                o.items,
                o.amount.toFixed(2)
            ].join(","));
        });
        const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `orders-export-${Date.now()}.csv`;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 5000);
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

    const now = new Date();

    return (
        <Styled.Page className="container">
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

            <Styled.Header className="card">
                <div className="left">
                    <h1>Table Demo</h1>
                    <div className="meta">
                        <span>Updated: {fmt(now, true)}</span>
                        <span>•</span>
                        <span>Total orders: {ORDERS.length}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={printSection} title="Print section">Print</button>
                    <button className="btnPrimary" onClick={exportCSV} title="Export visible as CSV">Export CSV</button>
                    <button className="btnDanger" onClick={() => setShowDemoModal(true)} title="Demo only – delete disabled">Delete Selected</button>
                </div>
            </Styled.Header>

            <Styled.Toolbar className="card">
                <div className="left">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search orders (e.g. paid delhi web)"
                            value={q}
                            onChange={(e) => { setQ(e.target.value); setPage(1); }}
                            aria-label="Search orders"
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="stat">Showing <strong>{rows.length}</strong> of <strong>{sorted.length}</strong></div>
                    <div className="spacer" />
                    <label className="psize">
                        Rows
                        <select value={pageSize} onChange={(e) => { setPageSize(+e.target.value); setPage(1); }}>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                        </select>
                    </label>
                </div>
            </Styled.Toolbar>

            <Styled.TableCard className="card" id="search-print-area" ref={printRef}>
                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                {HEADERS.map(h => (
                                    <th
                                        key={h.key}
                                        className={[
                                            h.align === "right" ? "right" : "left",
                                            h.key !== "actions" ? "sortable" : "",
                                            sortBy === h.key ? `sorted ${sortDir}` : ""
                                        ].join(" ").trim()}
                                        onClick={() => toggleSort(h.key)}
                                        scope="col"
                                    >
                                        <span>{h.label}</span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.length === 0 ? (
                                <tr><td colSpan={HEADERS.length} className="empty">No results for “{q}”.</td></tr>
                            ) : rows.map((o) => (
                                <tr key={o.id}>
                                    <td className="left id">
                                        <NavLink to={`/orders/${o.id}`} className="idLink" title="Open order">{o.id}</NavLink>
                                    </td>
                                    <td className="left">{fmt(o.date, true)}</td>
                                    <td className="left">
                                        <div className="customer">
                                            <div className="name">{o.customer}</div>
                                            <div className="muted">{o.city}</div>
                                        </div>
                                    </td>
                                    <td className="left">{o.city}</td>
                                    <td className="left">{o.channel}</td>
                                    <td className="left">
                                        <Styled.StatusChip data-variant={o.status}>
                                            {o.status}
                                        </Styled.StatusChip>
                                    </td>
                                    <td className="right">{o.items}</td>
                                    <td className="right amount">₹ {o.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                                    <td className="right">
                                        <div className="rowActions">
                                            <NavLink className="btnGhost xs" to={`/orders/${o.id}`} title="View">View</NavLink>
                                            <button className="btnGhost xs" title="Demo only – edit disabled" disabled>Edit</button>
                                            <button className="btnDanger xs" onClick={() => setShowDemoModal(true)} title="Demo only – delete disabled">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <Styled.Pager>
                    <button
                        className="btnGhost"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={pageSafe === 1}
                        title="Previous page"
                    >
                        ‹ Prev
                    </button>
                    <div className="info">
                        Page <strong>{pageSafe}</strong> of <strong>{Math.max(1, Math.ceil(sorted.length / pageSize))}</strong>
                    </div>
                    <button
                        className="btnGhost"
                        onClick={() => setPage(p => Math.min(Math.ceil(sorted.length / pageSize), p + 1))}
                        disabled={pageSafe >= Math.ceil(sorted.length / pageSize)}
                        title="Next page"
                    >
                        Next ›
                    </button>
                </Styled.Pager>
            </Styled.TableCard>

            {/* Demo modal (custom, no browser alerts) */}
            {showDemoModal && (
                <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={() => setShowDemoModal(false)}>
                    <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                        <header><h4>Action disabled in demo</h4></header>
                        <div className="body">
                            <p>This theme is display-only. Destructive actions like <strong>delete</strong> or <strong>edit</strong> are turned off.</p>
                        </div>
                        <footer>
                            <button className="btnPrimary" onClick={() => setShowDemoModal(false)}>Got it</button>
                        </footer>
                    </Styled.Modal>
                </Styled.Overlay>
            )}
        </Styled.Page>
    );
};

export default ExampleTable;
