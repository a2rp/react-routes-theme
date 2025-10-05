import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

// date utilities (single source of truth so formatting is consistent)
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const fmtINR = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(n);

// demo dataset (display-only; precomputed values)
const ORDERS = [
    { id: "ORD-3001", customer: "Bluewave Traders", items: 12, amount: 18450, status: "Pending", channel: "POS", placedAt: "2025-10-04T10:35:20+05:30", dueAt: "2025-10-10T00:00:00+05:30" },
    { id: "ORD-3002", customer: "Northline Mart", items: 5, amount: 7299, status: "Packed", channel: "Online", placedAt: "2025-10-03T16:22:58+05:30", dueAt: "2025-10-09T00:00:00+05:30" },
    { id: "ORD-3003", customer: "Sharma Pharmacy", items: 18, amount: 26490, status: "Shipped", channel: "B2B", placedAt: "2025-10-02T12:10:31+05:30", dueAt: "2025-10-12T00:00:00+05:30" },
    { id: "ORD-3004", customer: "Eastern Supplies", items: 9, amount: 15200, status: "Completed", channel: "B2B", placedAt: "2025-10-01T09:05:11+05:30", dueAt: "2025-10-08T00:00:00+05:30" },
    { id: "ORD-3005", customer: "Metro Medicos", items: 22, amount: 30990, status: "Invoiced", channel: "Online", placedAt: "2025-09-30T18:44:42+05:30", dueAt: "2025-10-06T00:00:00+05:30" },
    { id: "ORD-3006", customer: "Prime Healthcare", items: 7, amount: 9980, status: "Pending", channel: "POS", placedAt: "2025-09-29T14:29:00+05:30", dueAt: "2025-10-05T00:00:00+05:30" },
    { id: "ORD-3007", customer: "Kanishk Retail", items: 11, amount: 17120, status: "Cancelled", channel: "Online", placedAt: "2025-09-29T08:19:54+05:30", dueAt: "2025-10-07T00:00:00+05:30" },
    { id: "ORD-3008", customer: "City Care Store", items: 14, amount: 21950, status: "Completed", channel: "POS", placedAt: "2025-09-28T13:17:09+05:30", dueAt: "2025-10-04T00:00:00+05:30" },
    { id: "ORD-3009", customer: "Aarav Distributors", items: 6, amount: 8450, status: "Invoiced", channel: "B2B", placedAt: "2025-09-27T11:02:40+05:30", dueAt: "2025-10-03T00:00:00+05:30" },
    { id: "ORD-3010", customer: "Lotus Chemists", items: 16, amount: 24810, status: "Shipped", channel: "Online", placedAt: "2025-09-26T17:40:28+05:30", dueAt: "2025-10-02T00:00:00+05:30" },
];

const OrdersList = () => {
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all");
    const [channel, setChannel] = useState("all");
    const [period, setPeriod] = useState("30d");
    const printRef = useRef(null);
    const navigate = useNavigate();

    // derived view (display-only filtering for demo feel)
    const rows = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return ORDERS.filter(o => {
            const text = `${o.id} ${o.customer} ${o.channel} ${o.status}`.toLowerCase();
            const okQ = tokens.length ? tokens.every(t => text.includes(t)) : true;
            const okS = status === "all" ? true : o.status.toLowerCase() === status;
            const okC = channel === "all" ? true : o.channel.toLowerCase() === channel;
            const okP = period === "all" ? true : true; // visual only
            return okQ && okS && okC && okP;
        });
    }, [q, status, channel, period]);

    const summary = useMemo(() => {
        const total = ORDERS.length;
        const open = ORDERS.filter(o => ["pending", "packed", "shipped"].includes(o.status.toLowerCase())).length;
        const invoiced = ORDERS.filter(o => o.status.toLowerCase() === "invoiced").length;
        const revenue = ORDERS
            .filter(o => ["invoiced", "completed"].includes(o.status.toLowerCase()))
            .reduce((s, o) => s + o.amount, 0);
        return { total, open, invoiced, revenue };
    }, []);

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

    const onExport = () => {
        const data = JSON.stringify(ORDERS, null, 2);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "orders-demo.json";
        document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <Styled.Page>
            {/* print CSS standard block */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Orders</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/home">Home</NavLink>
                        <span>/</span>
                        <span className="current">Orders</span>
                    </nav>
                    <div className="meta">
                        <span>Total: {summary.total}</span>
                        <span>•</span>
                        <span>Open: {summary.open}</span>
                        <span>•</span>
                        <span>Invoiced: {summary.invoiced}</span>
                        <span>•</span>
                        <span>Recognised: {fmtINR(summary.revenue)}</span>
                    </div>
                </div>

                <div className="right actions">
                    <button className="btnGhost" onClick={onExport} title="Download JSON snapshot">Export</button>
                    <button className="btnGhost" onClick={onPrint} title="Print table">Print</button>
                    <button className="btnPrimary" disabled title="Demo only: creation disabled">New Order</button>
                </div>
            </Styled.Header>

            <Styled.Cards>
                <div className="kpi card">
                    <div className="label">All Orders</div>
                    <div className="value">{summary.total}</div>
                    <div className="muted">Last updated {fmtDateTime(new Date())}</div>
                </div>
                <div className="kpi card">
                    <div className="label">Open</div>
                    <div className="value">{summary.open}</div>
                    <div className="muted">Pending / Packed / Shipped</div>
                </div>
                <div className="kpi card">
                    <div className="label">Invoiced</div>
                    <div className="value">{summary.invoiced}</div>
                    <div className="muted">Awaiting payment</div>
                </div>
                <div className="kpi card">
                    <div className="label">Recognised Revenue</div>
                    <div className="value">{fmtINR(summary.revenue)}</div>
                    <div className="muted">Completed + Invoiced</div>
                </div>
            </Styled.Cards>

            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search orders, customers, channels…"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            aria-label="Search orders"
                        />
                    </div>

                    <div className="filters">
                        <label>Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="all">All</option>
                            <option value="pending">Pending</option>
                            <option value="packed">Packed</option>
                            <option value="shipped">Shipped</option>
                            <option value="invoiced">Invoiced</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>

                    <div className="filters">
                        <label>Channel</label>
                        <select value={channel} onChange={(e) => setChannel(e.target.value)}>
                            <option value="all">All</option>
                            <option value="pos">POS</option>
                            <option value="online">Online</option>
                            <option value="b2b">B2B</option>
                        </select>
                    </div>

                    <div className="period">
                        <label>Period</label>
                        <div className="chips">
                            <button className={period === "today" ? "chip active" : "chip"} onClick={() => setPeriod("today")} title="Today">Today</button>
                            <button className={period === "7d" ? "chip active" : "chip"} onClick={() => setPeriod("7d")} title="Last 7 days">7d</button>
                            <button className={period === "30d" ? "chip active" : "chip"} onClick={() => setPeriod("30d")} title="Last 30 days">30d</button>
                            <button className={period === "all" ? "chip active" : "chip"} onClick={() => setPeriod("all")} title="All time">All</button>
                        </div>
                    </div>
                </div>
            </Styled.Toolbar>

            <Styled.Table className="card">
                <div className="tableWrap" role="region" aria-label="Orders table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Customer</th>
                                <th className="num">Items</th>
                                <th className="num">Amount</th>
                                <th>Status</th>
                                <th>Channel</th>
                                <th>Placed</th>
                                <th>Due</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(o => (
                                <tr key={o.id}>
                                    <td>
                                        <NavLink to={`/orders/${o.id}`} className="mono">{o.id}</NavLink>
                                    </td>
                                    <td>{o.customer}</td>
                                    <td className="num">{o.items}</td>
                                    <td className="num">{fmtINR(o.amount)}</td>
                                    <td>
                                        <span className={`badge status ${o.status.toLowerCase()}`}>{o.status}</span>
                                    </td>
                                    <td><span className="badge light">{o.channel}</span></td>
                                    <td title={fmtDateTime(o.placedAt)}>{fmtDateTime(o.placedAt)}</td>
                                    <td title={fmtDate(o.dueAt)}>{fmtDate(o.dueAt)}</td>
                                    <td className="actions">
                                        <NavLink to={`/orders/${o.id}`} className="link">View</NavLink>
                                        <NavLink to={`/orders/${o.id}/edit`} className="link">Edit</NavLink>
                                        <NavLink to={`/orders/${o.id}/print`} className="link">Print</NavLink>
                                        <NavLink to={`/orders/${o.id}/invoice`} className="link">Invoice</NavLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* footer / pagination (display-only) */}
                <div className="tableFooter">
                    <div className="hint">{rows.length} of {ORDERS.length} shown</div>
                    <div className="pager">
                        <button className="btnGhost" disabled title="First page">«</button>
                        <button className="btnGhost" disabled title="Previous page">‹</button>
                        <span className="page">1 / 1</span>
                        <button className="btnGhost" disabled title="Next page">›</button>
                        <button className="btnGhost" disabled title="Last page">»</button>
                    </div>
                </div>
            </Styled.Table>

            {/* print-friendly area */}
            <Styled.PrintCard className="card" id="search-print-area" ref={printRef}>
                <h3>Orders — Summary</h3>
                <div className="grid">
                    <div><span className="k">Generated</span><span className="v">{fmtDateTime(new Date())}</span></div>
                    <div><span className="k">Total Orders</span><span className="v">{summary.total}</span></div>
                    <div><span className="k">Open</span><span className="v">{summary.open}</span></div>
                    <div><span className="k">Invoiced</span><span className="v">{summary.invoiced}</span></div>
                    <div><span className="k">Recognised</span><span className="v">{fmtINR(summary.revenue)}</span></div>
                </div>
                <div className="list">
                    {ORDERS.map(o => (
                        <div className="row" key={o.id}>
                            <span className="mono">{o.id}</span>
                            <span>{o.customer}</span>
                            <span className="right">{fmtINR(o.amount)}</span>
                            <span className="right">{o.status}</span>
                        </div>
                    ))}
                </div>
            </Styled.PrintCard>
        </Styled.Page>
    );
};

export default OrdersList;
