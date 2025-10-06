import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* ------------------------------------------------------------------ */
/* date utils (consistent app-wide formatting)                         */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    return withTime
        ? `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`
        : base;
};
/* ------------------------------------------------------------------ */

/** Display-only fixtures (no calculations at runtime) */
const KPIS = {
    totalAmount: "₹2,45,80,000.00",
    totalCount: "1,284",
    refundedAmount: "₹6,30,000.00",
    todayCount: "12",
};

const METHODS = ["UPI", "Card", "NetBanking", "Cash", "Cheque"];
const STATUSES = ["received", "partial", "pending", "refunded", "failed"];
const CURRENCIES = ["INR", "USD", "EUR"];

const PAYMENTS = [
    {
        id: "PAY-90231",
        date: "2025-10-04T11:38:20+05:30",
        customer: "Bluewave Traders",
        customerId: "CUST-1001",
        method: "UPI",
        reference: "UPI-AXIS-9X31",
        amount: "₹1,25,000.00",
        currency: "INR",
        status: "received",
        invoices: ["INV-2031", "INV-2033"],
        notes: "Received via UPI. Auto-reconciled.",
    },
    {
        id: "PAY-90230",
        date: "2025-10-04T10:15:05+05:30",
        customer: "Goodwill Pharma",
        customerId: "CUST-1044",
        method: "Card",
        reference: "VISA-8891",
        amount: "₹80,000.00",
        currency: "INR",
        status: "partial",
        invoices: ["INV-2028"],
        notes: "Part-payment against INV-2028.",
    },
    {
        id: "PAY-90229",
        date: "2025-10-03T18:22:49+05:30",
        customer: "Healcon Retail",
        customerId: "CUST-1022",
        method: "NetBanking",
        reference: "NEFT-HDFC-001233",
        amount: "₹45,000.00",
        currency: "INR",
        status: "received",
        invoices: ["INV-2025"],
        notes: "NEFT received EOD.",
    },
    {
        id: "PAY-90228",
        date: "2025-10-02T14:05:12+05:30",
        customer: "Care & Cure",
        customerId: "CUST-1019",
        method: "Cash",
        reference: "CASH-CTR-12",
        amount: "₹15,000.00",
        currency: "INR",
        status: "pending",
        invoices: ["INV-2021"],
        notes: "Cash to be deposited next business day.",
    },
    {
        id: "PAY-90227",
        date: "2025-10-02T09:44:03+05:30",
        customer: "Silverline Medicos",
        customerId: "CUST-1007",
        method: "Cheque",
        reference: "CHQ-SBI-557700",
        amount: "₹60,000.00",
        currency: "INR",
        status: "failed",
        invoices: ["INV-2017"],
        notes: "Cheque returned — signature mismatch.",
    },
    {
        id: "PAY-90226",
        date: "2025-10-01T12:00:00+05:30",
        customer: "Bluewave Traders",
        customerId: "CUST-1001",
        method: "UPI",
        reference: "UPI-AXIS-9X01",
        amount: "₹1,10,000.00",
        currency: "INR",
        status: "refunded",
        invoices: ["INV-2009"],
        notes: "Refund processed as credit note CN-5509.",
    },
    {
        id: "PAY-90225",
        date: "2025-09-30T16:01:11+05:30",
        customer: "Nova Wellness",
        customerId: "CUST-1032",
        method: "Card",
        reference: "AMEX-0912",
        amount: "₹1,80,000.00",
        currency: "INR",
        status: "received",
        invoices: ["INV-2002", "INV-2003", "INV-2004"],
        notes: "Corporate AMEX.",
    },
    {
        id: "PAY-90224",
        date: "2025-09-29T08:21:44+05:30",
        customer: "Apex Hospitals",
        customerId: "CUST-1100",
        method: "NetBanking",
        reference: "RTGS-ICICI-99112",
        amount: "₹7,50,000.00",
        currency: "INR",
        status: "received",
        invoices: ["INV-1999"],
        notes: "Annual contract milestone.",
    },
];

const SalesPaymentsList = () => {
    const [filters, setFilters] = useState({
        q: "",
        from: "",
        to: "",
        method: "",
        status: "",
        currency: "",
    });
    const [drawer, setDrawer] = useState({ open: false, current: null });
    const printRef = useRef(null);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFilters((f) => ({ ...f, [name]: value }));
    };

    const openDrawer = (p) => setDrawer({ open: true, current: p });
    const closeDrawer = () => setDrawer({ open: false, current: null });

    const onExport = () => {
        // display-only: export the same fixtures
        const blob = new Blob([JSON.stringify(PAYMENTS, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "sales-payments.json";
        document.body.appendChild(a); a.click(); a.remove();
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

    const rows = useMemo(() => PAYMENTS, []);

    return (
        <Styled.Page>
            {/* print CSS */}
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
                <div className="lh">
                    <h1>Payments</h1>
                    <div className="meta">
                        <span>Total: <strong>{KPIS.totalAmount}</strong></span>
                        <span>•</span>
                        <span>Count: <strong>{KPIS.totalCount}</strong></span>
                        <span>•</span>
                        <span>Refunded: <strong>{KPIS.refundedAmount}</strong></span>
                        <span>•</span>
                        <span>Today: <strong>{KPIS.todayCount}</strong></span>
                    </div>
                </div>
                <div className="rh">
                    <button className="btnGhost" onClick={onExport} title="Export JSON">Export</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnPrimary" disabled title="Demo mode">New Payment</button>
                </div>
            </Styled.Header>

            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="field grow">
                        <label>Search</label>
                        <input
                            name="q"
                            placeholder="Search payments, customers, references…"
                            value={filters.q}
                            onChange={onChange}
                        />
                    </div>

                    <div className="field">
                        <label>From</label>
                        <input type="date" name="from" value={filters.from} onChange={onChange} />
                    </div>
                    <div className="field">
                        <label>To</label>
                        <input type="date" name="to" value={filters.to} onChange={onChange} />
                    </div>

                    <div className="field">
                        <label>Method</label>
                        <select name="method" value={filters.method} onChange={onChange}>
                            <option value="">Any</option>
                            {METHODS.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>

                    <div className="field">
                        <label>Status</label>
                        <select name="status" value={filters.status} onChange={onChange}>
                            <option value="">Any</option>
                            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    <div className="field">
                        <label>Currency</label>
                        <select name="currency" value={filters.currency} onChange={onChange}>
                            <option value="">Any</option>
                            {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    <div className="buttons">
                        <button className="btnPrimary" disabled title="Demo mode">Apply</button>
                        <button className="btnGhost" onClick={() => setFilters({ q: "", from: "", to: "", method: "", status: "", currency: "" })}>Reset</button>
                    </div>
                </div>

                <div className="chips">
                    <span className="chip">Preset: Last 7 days</span>
                    <span className="chip">Channel: Online</span>
                    <span className="chip">Reconciled</span>
                </div>
            </Styled.Toolbar>

            {/* KPIs quick cards */}
            <Styled.Kpis>
                <div className="kpi card">
                    <div className="k">Total Collected</div>
                    <div className="v">{KPIS.totalAmount}</div>
                    <div className="s">As of {fmt(new Date(), true)}</div>
                </div>
                <div className="kpi card">
                    <div className="k">Payments</div>
                    <div className="v">{KPIS.totalCount}</div>
                    <div className="s">All time</div>
                </div>
                <div className="kpi card">
                    <div className="k">Refunded</div>
                    <div className="v">{KPIS.refundedAmount}</div>
                    <div className="s">Cumulative</div>
                </div>
                <div className="kpi card">
                    <div className="k">Today</div>
                    <div className="v">{KPIS.todayCount}</div>
                    <div className="s">{fmt(new Date())}</div>
                </div>
            </Styled.Kpis>

            <Styled.TableCard className="card">
                <div className="tableHeader">
                    <div className="left">
                        <strong>Payments</strong>
                        <span className="muted">Showing {rows.length}</span>
                    </div>
                    <div className="right">
                        <button className="btnGhost" disabled title="Demo mode">Sort</button>
                        <button className="btnGhost" disabled title="Demo mode">Columns</button>
                    </div>
                </div>

                <div className="tableScroll">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Customer</th>
                                <th>Method</th>
                                <th>Reference</th>
                                <th className="num">Amount</th>
                                <th>Currency</th>
                                <th>Status</th>
                                <th>Invoices</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((p) => (
                                <tr key={p.id} onClick={() => openDrawer(p)}>
                                    <td>
                                        <NavLink to={`/sales/payments/${p.id}`} onClick={(e) => e.stopPropagation()}>{p.id}</NavLink>
                                    </td>
                                    <td>{fmt(p.date, true)}</td>
                                    <td>
                                        <NavLink to={`/customers/${p.customerId}`} onClick={(e) => e.stopPropagation()} title="Open customer">
                                            {p.customer}
                                        </NavLink>
                                    </td>
                                    <td>{p.method}</td>
                                    <td className="mono">{p.reference}</td>
                                    <td className="num mono">{p.amount}</td>
                                    <td>{p.currency}</td>
                                    <td>
                                        <span className={`status ${p.status}`}>{p.status}</span>
                                    </td>
                                    <td className="mono">
                                        {p.invoices.map((inv, i) => (
                                            <React.Fragment key={inv}>
                                                <NavLink to={`/invoices/${inv}`} onClick={(e) => e.stopPropagation()}>{inv}</NavLink>
                                                {i < p.invoices.length - 1 ? ", " : ""}
                                            </React.Fragment>
                                        ))}
                                    </td>
                                    <td className="actions">
                                        <button className="btnGhost" onClick={(e) => { e.stopPropagation(); openDrawer(p); }}>View</button>
                                        <button className="btnGhost" disabled title="Demo mode" onClick={(e) => e.stopPropagation()}>Refund</button>
                                        <a className="btnGhost" href={`/sales/payments/${p.id}`} onClick={(e) => e.stopPropagation()} title="Open in new tab" target="_blank" rel="noreferrer">Open</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="tableFooter">
                    <div className="left">
                        <span className="muted">Page 1 of 5</span>
                    </div>
                    <div className="right">
                        <button className="btnGhost" disabled title="Demo mode">Prev</button>
                        <button className="btnGhost" disabled title="Demo mode">Next</button>
                    </div>
                </div>
            </Styled.TableCard>

            {/* Printable summary (list context) */}
            <Styled.PrintCard className="card" id="search-print-area" ref={printRef}>
                <header>
                    <h3>Payments — Summary</h3>
                    <div className="meta">{fmt(new Date(), true)}</div>
                </header>
                <div className="grid">
                    <div><div className="k">Total Amount</div><div className="v">{KPIS.totalAmount}</div></div>
                    <div><div className="k">Payments</div><div className="v">{KPIS.totalCount}</div></div>
                    <div><div className="k">Refunded</div><div className="v">{KPIS.refundedAmount}</div></div>
                    <div><div className="k">Today</div><div className="v">{KPIS.todayCount}</div></div>
                </div>
            </Styled.PrintCard>

            {/* Drawer: quick view */}
            {drawer.open && drawer.current ? (
                <Styled.Drawer onClick={closeDrawer} role="dialog" aria-modal="true">
                    <div className="panel card" onClick={(e) => e.stopPropagation()}>
                        <div className="head">
                            <h3>{drawer.current.id}</h3>
                            <button className="btnGhost" onClick={closeDrawer}>Close</button>
                        </div>
                        <div className="body">
                            <div className="cols">
                                <div className="main">
                                    <div className="line">
                                        <span className="k">Customer</span>
                                        <span className="v">
                                            <NavLink to={`/customers/${drawer.current.customerId}`}>{drawer.current.customer}</NavLink>
                                        </span>
                                    </div>
                                    <div className="line">
                                        <span className="k">Date</span>
                                        <span className="v">{fmt(drawer.current.date, true)}</span>
                                    </div>
                                    <div className="line">
                                        <span className="k">Method</span>
                                        <span className="v">{drawer.current.method}</span>
                                    </div>
                                    <div className="line">
                                        <span className="k">Reference</span>
                                        <span className="v mono">{drawer.current.reference}</span>
                                    </div>
                                    <div className="line">
                                        <span className="k">Amount</span>
                                        <span className="v mono">{drawer.current.amount} {drawer.current.currency}</span>
                                    </div>
                                    <div className="line">
                                        <span className="k">Status</span>
                                        <span className="v"><span className={`status ${drawer.current.status}`}>{drawer.current.status}</span></span>
                                    </div>
                                    <div className="line">
                                        <span className="k">Invoices</span>
                                        <span className="v mono">
                                            {drawer.current.invoices.map((inv, i) => (
                                                <React.Fragment key={inv}>
                                                    <NavLink to={`/invoices/${inv}`}>{inv}</NavLink>{i < drawer.current.invoices.length - 1 ? ", " : ""}
                                                </React.Fragment>
                                            ))}
                                        </span>
                                    </div>
                                    <div className="line">
                                        <span className="k">Notes</span>
                                        <span className="v">{drawer.current.notes}</span>
                                    </div>
                                </div>

                                <div className="side">
                                    <div className="card tiny">
                                        <div className="cap">Quick links</div>
                                        <ul className="links">
                                            <li><NavLink to={`/sales/payments/${drawer.current.id}`}>Open detail</NavLink></li>
                                            <li><NavLink to={`/customers/${drawer.current.customerId}`}>Open customer</NavLink></li>
                                            <li><a href={`/sales/payments/${drawer.current.id}`} target="_blank" rel="noreferrer">Open in new tab</a></li>
                                        </ul>
                                    </div>

                                    <div className="card tiny">
                                        <div className="cap">Actions</div>
                                        <div className="btns">
                                            <button className="btnPrimary" disabled title="Demo mode">Mark as Refunded</button>
                                            <button className="btnGhost" onClick={printSection}>Print Summary</button>
                                            <button className="btnGhost" disabled title="Demo mode">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* A mini print area inside drawer mirrors the list summary */}
                            <div className="miniPrint card" id="search-print-area">
                                <div className="row">
                                    <div className="k">Payment</div>
                                    <div className="v">{drawer.current.id}</div>
                                </div>
                                <div className="row">
                                    <div className="k">Customer</div>
                                    <div className="v">{drawer.current.customer} ({drawer.current.customerId})</div>
                                </div>
                                <div className="row">
                                    <div className="k">Date</div>
                                    <div className="v">{fmt(drawer.current.date, true)}</div>
                                </div>
                                <div className="row">
                                    <div className="k">Amount</div>
                                    <div className="v mono">{drawer.current.amount} {drawer.current.currency}</div>
                                </div>
                                <div className="row">
                                    <div className="k">Status</div>
                                    <div className="v"><span className={`status ${drawer.current.status}`}>{drawer.current.status}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Styled.Drawer>
            ) : null}
        </Styled.Page>
    );
};

export default SalesPaymentsList;
