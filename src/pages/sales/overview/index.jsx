import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* date utils to keep a single consistent format everywhere */
const fmt = (d, withTime = false) => {
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

/* soft confirm (no browser alerts) */
const Confirm = ({ open, title, message, onConfirm, onClose, confirmText = "Confirm" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Cancel</button>
                    <button className="btnPrimary" onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const SalesOverview = () => {
    const now = useMemo(() => new Date(), []);
    const printRef = useRef(null);

    // demo filters (display-only)
    const [from, setFrom] = useState("2025-09-01");
    const [to, setTo] = useState("2025-10-04");
    const [q, setQ] = useState("");

    const [askExport, setAskExport] = useState(false);
    const [banner, setBanner] = useState("");

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setBanner("Link copied");
            setTimeout(() => setBanner(""), 2000);
        } catch {
            setBanner("Copy failed");
            setTimeout(() => setBanner(""), 2000);
        }
    };

    const exportSnapshot = () => setAskExport(true);
    const doExport = () => {
        setAskExport(false);
        // lightweight CSV snapshot (display-only)
        const rows = [
            ["Metric", "Value"],
            ["Revenue (This Period)", "₹ 1,48,20,000"],
            ["Orders", "1,236"],
            ["Avg Order Value", "₹ 11,985"],
            ["Outstanding (AR)", "₹ 32,40,000"],
        ];
        const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `sales-overview-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
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

    // Display-only demo content (no calculations)
    const KPIS = [
        { key: "Revenue", value: "₹ 1,48,20,000", sub: "This period", delta: "+4.2%" },
        { key: "Orders", value: "1,236", sub: "Confirmed", delta: "+2.1%" },
        { key: "Avg Order Value", value: "₹ 11,985", sub: "Incl. taxes", delta: "−1.3%" },
        { key: "Outstanding (AR)", value: "₹ 32,40,000", sub: "Due within 30d", delta: "—" },
    ];

    const PIPELINE = [
        { label: "Leads", value: 420 },
        { label: "Qualified", value: 290 },
        { label: "Quoted", value: 180 },
        { label: "Won", value: 126 },
    ];

    const REGIONS = [
        { label: "North", value: 42, hint: "₹ 58.2L" },
        { label: "West", value: 36, hint: "₹ 49.4L" },
        { label: "South", value: 31, hint: "₹ 44.7L" },
        { label: "East", value: 21, hint: "₹ 30.1L" },
    ];

    const QUOTES = [
        { id: "Q-3107", customer: "Pixel Labs", amount: "₹ 2,45,000", date: "2025-10-02T15:08:20+05:30", status: "Open" },
        { id: "Q-3106", customer: "Bluewave Traders", amount: "₹ 1,05,000", date: "2025-10-01T11:14:52+05:30", status: "Sent" },
        { id: "Q-3105", customer: "Apollo Medicals", amount: "₹ 3,60,000", date: "2025-09-30T17:45:03+05:30", status: "Converted" },
        { id: "Q-3104", customer: "Arka Retail", amount: "₹ 82,000", date: "2025-09-29T10:12:44+05:30", status: "Expired" },
    ];

    const ORDERS = [
        { id: "ORD-3501", customer: "Apollo Medicals", total: "₹ 3,60,000", date: "2025-10-03T13:02:10+05:30", status: "Confirmed" },
        { id: "ORD-3500", customer: "Pixel Labs", total: "₹ 2,29,000", date: "2025-10-03T09:41:28+05:30", status: "Packed" },
        { id: "ORD-3499", customer: "Bluewave Traders", total: "₹ 1,05,000", date: "2025-10-02T18:12:31+05:30", status: "Invoiced" },
        { id: "ORD-3498", customer: "Arka Retail", total: "₹ 76,500", date: "2025-10-01T16:18:59+05:30", status: "Shipped" },
    ];

    const RETURNS = [
        { id: "RT-120", orderId: "ORD-3492", customer: "Care n Cure", amount: "₹ 14,200", date: "2025-09-28T10:05:11+05:30", status: "Approved" },
        { id: "RT-119", orderId: "ORD-3488", customer: "OmniMart", amount: "₹ 9,950", date: "2025-09-27T12:22:40+05:30", status: "Initiated" },
    ];

    const PAYMENTS = [
        { id: "PAY-7810", invoiceId: "INV-2042", customer: "Pixel Labs", amount: "₹ 1,10,000", mode: "NEFT", date: "2025-10-03T14:14:02+05:30" },
        { id: "PAY-7809", invoiceId: "INV-2041", customer: "Apollo Medicals", amount: "₹ 75,500", mode: "UPI", date: "2025-10-02T12:31:55+05:30" },
        { id: "PAY-7808", invoiceId: "INV-2038", customer: "Bluewave Traders", amount: "₹ 58,900", mode: "Card", date: "2025-10-01T09:06:41+05:30" },
    ];

    return (
        <Styled.Page className="container">
            {/* print rule — your exact snippet */}
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
                <div className="l">
                    <h1>Sales Overview</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/sales">Sales</NavLink><span>/</span><span className="current">Overview</span>
                    </nav>
                    <div className="meta">
                        <span>Today: {fmt(now, true)}</span>
                    </div>
                </div>
                <div className="r actions">
                    <button className="btnGhost" title="Copy deep link" onClick={copyLink}>Copy Link</button>
                    <button className="btnGhost" title="Export snapshot" onClick={exportSnapshot}>Export Snapshot</button>
                    <button className="btnGhost" title="Print section" onClick={printSection}>Print</button>
                    <button className="btnPrimary" disabled title="Demo mode">Create Quote</button>
                    <button className="btnPrimary" disabled title="Demo mode">New Order</button>
                    <button className="btnPrimary" disabled title="Demo mode">Record Payment</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Controls className="card">
                <div className="row">
                    <div className="field">
                        <label>From</label>
                        <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>To</label>
                        <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
                    </div>
                    <div className="field grow">
                        <label>Quick find</label>
                        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search customers, orders, quotes…" />
                    </div>
                    <div className="cta">
                        <button className="btnPrimary" disabled title="Demo mode">Apply</button>
                        <button className="btnGhost" disabled title="Demo mode">Reset</button>
                    </div>
                </div>
            </Styled.Controls>

            <Styled.KpiGrid>
                {KPIS.map((k) => (
                    <Styled.KpiCard key={k.key} className="card">
                        <div className="k">{k.key}</div>
                        <div className="v">{k.value}</div>
                        <div className="s">{k.sub}</div>
                        <div className="d">{k.delta}</div>
                    </Styled.KpiCard>
                ))}
            </Styled.KpiGrid>

            <Styled.Grid>
                <section className="card">
                    <header className="sectHead">
                        <h3>Pipeline</h3>
                        <div className="hint">Snapshot as of {fmt(now)}</div>
                    </header>
                    <div className="pipeline">
                        {PIPELINE.map((p) => (
                            <div key={p.label} className="row">
                                <div className="label">{p.label}</div>
                                <div className="bar"><div style={{ width: `${p.value / 4}%` }} /></div>
                                <div className="val">{p.value}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="card">
                    <header className="sectHead">
                        <h3>Region Performance</h3>
                        <div className="hint">Share by orders</div>
                    </header>
                    <div className="regions">
                        {REGIONS.map((r) => (
                            <div key={r.label} className="row">
                                <div className="label">{r.label}</div>
                                <div className="miniBars">
                                    <div className="bar" style={{ width: `${r.value * 2}%` }} />
                                </div>
                                <div className="val">{r.hint}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </Styled.Grid>

            <Styled.GridCols>
                <section className="card">
                    <header className="sectHead">
                        <h3>Recent Quotes</h3>
                        <NavLink to="/sales/quotes" className="link">Open list</NavLink>
                    </header>
                    <Styled.Table>
                        <table>
                            <thead>
                                <tr>
                                    <th>Quote #</th>
                                    <th>Customer</th>
                                    <th className="num">Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th className="w80"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {QUOTES.map(q => (
                                    <tr key={q.id}>
                                        <td>{q.id}</td>
                                        <td>{q.customer}</td>
                                        <td className="num">{q.amount}</td>
                                        <td>{fmt(q.date, true)}</td>
                                        <td>
                                            <span className={`badge ${q.status.toLowerCase()}`}>{q.status}</span>
                                        </td>
                                        <td className="w80">
                                            <NavLink to={`/sales/quotes/${q.id}`} className="rowLink">View</NavLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Styled.Table>
                </section>

                <section className="card">
                    <header className="sectHead">
                        <h3>Recent Orders</h3>
                        <NavLink to="/orders" className="link">Open list</NavLink>
                    </header>
                    <Styled.Table>
                        <table>
                            <thead>
                                <tr>
                                    <th>Order #</th>
                                    <th>Customer</th>
                                    <th className="num">Total</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th className="w80"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ORDERS.map(o => (
                                    <tr key={o.id}>
                                        <td>{o.id}</td>
                                        <td>{o.customer}</td>
                                        <td className="num">{o.total}</td>
                                        <td>{fmt(o.date, true)}</td>
                                        <td>
                                            <span className={`badge ${o.status.toLowerCase().replace(/\s+/g, '-')}`}>{o.status}</span>
                                        </td>
                                        <td className="w80">
                                            <NavLink to={`/orders/${o.id}`} className="rowLink">View</NavLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Styled.Table>
                </section>
            </Styled.GridCols>

            <Styled.GridCols>
                <section className="card">
                    <header className="sectHead">
                        <h3>Returns & Refunds</h3>
                        <NavLink to="/sales/returns" className="link">Open list</NavLink>
                    </header>
                    <Styled.Table>
                        <table>
                            <thead>
                                <tr>
                                    <th>Return #</th>
                                    <th>Order #</th>
                                    <th>Customer</th>
                                    <th className="num">Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RETURNS.map(r => (
                                    <tr key={r.id}>
                                        <td>{r.id}</td>
                                        <td><NavLink to={`/orders/${r.orderId}`}>{r.orderId}</NavLink></td>
                                        <td>{r.customer}</td>
                                        <td className="num">{r.amount}</td>
                                        <td>{fmt(r.date, true)}</td>
                                        <td><span className={`badge ${r.status.toLowerCase()}`}>{r.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Styled.Table>
                </section>

                <section className="card" id="search-print-area" ref={printRef}>
                    <header className="sectHead">
                        <h3>Latest Payments</h3>
                        <NavLink to="/sales/payments" className="link">Open list</NavLink>
                    </header>
                    <Styled.Table>
                        <table>
                            <thead>
                                <tr>
                                    <th>Payment #</th>
                                    <th>Invoice #</th>
                                    <th>Customer</th>
                                    <th className="num">Amount</th>
                                    <th>Mode</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PAYMENTS.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td><NavLink to={`/invoices/${p.invoiceId}`}>{p.invoiceId}</NavLink></td>
                                        <td>{p.customer}</td>
                                        <td className="num">{p.amount}</td>
                                        <td>{p.mode}</td>
                                        <td>{fmt(p.date, true)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Styled.Table>

                    <div className="miniMeta">
                        <div>Printed: {fmt(now, true)}</div>
                        <div>Window: {onlyTime(now)}</div>
                    </div>
                </section>
            </Styled.GridCols>

            <Confirm
                open={askExport}
                title="Export snapshot?"
                message="A lightweight CSV with the top metrics will be downloaded."
                confirmText="Download"
                onConfirm={doExport}
                onClose={() => setAskExport(false)}
            />
        </Styled.Page>
    );
};

export default SalesOverview;
