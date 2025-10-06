import React, { useMemo, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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

const CustomerPrint = () => {
    const { customerId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // deterministic mock for display-only
    const now = useMemo(() => new Date(), []);
    const model = useMemo(() => ({
        id: customerId || "CUST-1001",
        code: "CUST-1001",
        createdAt: "2024-12-17T10:15:45+05:30",
        updatedAt: "2025-10-04T12:28:10+05:30",
        firstName: "Aarav",
        lastName: "Sharma",
        email: "aarav.sharma@example.com",
        phone: "+91 98765 43210",
        gender: "male",
        dob: "1996-10-04",
        gstin: "22ABCDE1234F1Z5",
        pan: "ABCDE1234F",
        company: "Bluewave Traders",
        website: "https://bluewave.example.com",
        status: "active",
        tags: ["priority", "wholesale", "north"],
        billing: {
            line1: "221B Baker Street", line2: "Khan Market",
            city: "New Delhi", state: "DL", zip: "110003", country: "India"
        },
        shipping: {
            line1: "Plot 14, Industrial Area", line2: "Phase 2",
            city: "Gurugram", state: "HR", zip: "122002", country: "India"
        },
        // pre-computed display rows (no calculations here)
        kpIs: {
            lifetimeValue: "₹ 14,28,500",
            outstanding: "₹ 36,200",
            totalOrders: "58",
            lastOrderAt: "2025-09-22T18:43:10+05:30"
        },
        orders: [
            { id: "ORD-3456", date: "2025-09-22T18:43:10+05:30", items: 12, amount: "₹ 42,300", status: "Fulfilled" },
            { id: "ORD-3419", date: "2025-08-28T11:20:45+05:30", items: 8, amount: "₹ 28,750", status: "Shipped" },
            { id: "ORD-3381", date: "2025-07-15T16:09:20+05:30", items: 10, amount: "₹ 33,400", status: "Delivered" }
        ],
        invoices: [
            { id: "INV-2034", date: "2025-09-22T19:01:12+05:30", due: "2025-10-10T00:00:00+05:30", amount: "₹ 42,300", paid: "₹ 24,000", balance: "₹ 18,300", status: "Partially Paid" },
            { id: "INV-2011", date: "2025-08-28T11:44:30+05:30", due: "2025-09-15T00:00:00+05:30", amount: "₹ 28,750", paid: "₹ 28,750", balance: "₹ 0", status: "Paid" }
        ],
        payments: [
            { id: "RCPT-1421", date: "2025-09-24T10:05:10+05:30", mode: "NEFT", ref: "UTR-98X2JK1", amount: "₹ 24,000" },
            { id: "RCPT-1389", date: "2025-08-31T15:20:00+05:30", mode: "UPI", ref: "UPI-3290AV", amount: "₹ 28,750" }
        ],
        notes: "Bulk orders in month-end cycle. Prefers email. Ship from Warehouse-2 to Gurugram address. Mark urgent if order contains cold-chain items."
    }), [customerId]);

    const fullName = `${model.firstName} ${model.lastName}`.trim();

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const goBack = () => navigate(model.id ? `/customers/${model.id}` : "/customers");

    return (
        <Styled.Page className="container">
            {/* Print CSS  */}
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
                <div className="left">
                    <h1>Print Customer</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/customers">Customers</NavLink>
                        <span>/</span>
                        <NavLink to={`/customers/${model.id}`}>{model.id}</NavLink>
                        <span>/</span>
                        <span className="current">Print</span>
                    </nav>
                    <div className="meta">
                        <span>Created: {fmt(model.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmt(model.updatedAt, true)}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="btnGhost" onClick={goBack} title="Back to details">Back</button>
                    <NavLink className="btnGhost" to={`/customers/${model.id}`} title="Open details">Open Details</NavLink>
                    <button className="btnPrimary" onClick={printSection} title="Print this sheet">Print</button>
                </div>
            </Styled.Header>

            <Styled.SheetWrap>
                <div id="search-print-area" ref={printRef}>
                    <Styled.PrintSheet className="card">
                        {/* Letterhead */}
                        <header className="sheetHead">
                            <div className="brand">
                                <div className="logo" aria-hidden="true">AR</div>
                                <div className="brandText">
                                    <h2>Bluewave ERP</h2>
                                    <div className="muted">Customer Summary</div>
                                </div>
                            </div>
                            <div className="docMeta">
                                <div><span className="k">Generated</span><span className="v">{fmt(now, true)}</span></div>
                                <div><span className="k">Customer ID</span><span className="v">{model.id}</span></div>
                                <div><span className="k">Status</span><span className="v badge">{model.status}</span></div>
                            </div>
                        </header>

                        {/* Identity */}
                        <section className="identity">
                            <div className="who">
                                <h3>{fullName}</h3>
                                <div className="grid">
                                    <div><span className="k">Company</span><span className="v">{model.company}</span></div>
                                    <div><span className="k">Email</span><span className="v">{model.email}</span></div>
                                    <div><span className="k">Phone</span><span className="v">{model.phone}</span></div>
                                    <div><span className="k">Website</span><span className="v">{model.website}</span></div>
                                    <div><span className="k">GSTIN</span><span className="v">{model.gstin}</span></div>
                                    <div><span className="k">PAN</span><span className="v">{model.pan}</span></div>
                                    <div><span className="k">DOB</span><span className="v">{fmt(model.dob)}</span></div>
                                    <div><span className="k">Gender</span><span className="v">{model.gender}</span></div>
                                </div>
                            </div>
                            <div className="addr">
                                <div className="card block">
                                    <h4>Billing Address</h4>
                                    <p>
                                        {model.billing.line1}<br />
                                        {model.billing.line2}<br />
                                        {model.billing.city} {model.billing.zip}<br />
                                        {model.billing.state}, {model.billing.country}
                                    </p>
                                </div>
                                <div className="card block">
                                    <h4>Shipping Address</h4>
                                    <p>
                                        {model.shipping.line1}<br />
                                        {model.shipping.line2}<br />
                                        {model.shipping.city} {model.shipping.zip}<br />
                                        {model.shipping.state}, {model.shipping.country}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Tags and KPIs */}
                        <section className="tagsKpi">
                            <div className="tags">
                                {model.tags.map((t) => (
                                    <span className="chip" key={t}>{t}</span>
                                ))}
                            </div>
                            <div className="kpis">
                                <div className="kpi">
                                    <div className="label">Lifetime Value</div>
                                    <div className="value">{model.kpIs.lifetimeValue}</div>
                                </div>
                                <div className="kpi">
                                    <div className="label">Outstanding</div>
                                    <div className="value">{model.kpIs.outstanding}</div>
                                </div>
                                <div className="kpi">
                                    <div className="label">Total Orders</div>
                                    <div className="value">{model.kpIs.totalOrders}</div>
                                </div>
                                <div className="kpi">
                                    <div className="label">Last Order</div>
                                    <div className="value">{fmt(model.kpIs.lastOrderAt, true)}</div>
                                </div>
                            </div>
                        </section>

                        {/* Orders */}
                        <section className="section">
                            <div className="sectionHead">
                                <h3>Recent Orders</h3>
                                <NavLink to="/orders" className="miniLink">Open Orders</NavLink>
                            </div>
                            <div className="tableWrap">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Order</th>
                                            <th>Date</th>
                                            <th>Items</th>
                                            <th className="right">Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {model.orders.map((o) => (
                                            <tr key={o.id}>
                                                <td><NavLink to={`/orders/${o.id}`}>{o.id}</NavLink></td>
                                                <td>{fmt(o.date, true)}</td>
                                                <td>{o.items}</td>
                                                <td className="right">{o.amount}</td>
                                                <td>{o.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Invoices */}
                        <section className="section">
                            <div className="sectionHead">
                                <h3>Invoices</h3>
                                <NavLink to="/invoices" className="miniLink">Open Invoices</NavLink>
                            </div>
                            <div className="tableWrap">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Invoice</th>
                                            <th>Date</th>
                                            <th>Due</th>
                                            <th className="right">Amount</th>
                                            <th className="right">Paid</th>
                                            <th className="right">Balance</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {model.invoices.map((inv) => (
                                            <tr key={inv.id}>
                                                <td><NavLink to={`/invoices/${inv.id}`}>{inv.id}</NavLink></td>
                                                <td>{fmt(inv.date, true)}</td>
                                                <td>{fmt(inv.due)}</td>
                                                <td className="right">{inv.amount}</td>
                                                <td className="right">{inv.paid}</td>
                                                <td className="right">{inv.balance}</td>
                                                <td>{inv.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Payments */}
                        <section className="section">
                            <div className="sectionHead">
                                <h3>Payments</h3>
                                <NavLink to="/receipts" className="miniLink">Open Receipts</NavLink>
                            </div>
                            <div className="tableWrap">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Receipt</th>
                                            <th>Date</th>
                                            <th>Mode</th>
                                            <th>Reference</th>
                                            <th className="right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {model.payments.map((p) => (
                                            <tr key={p.id}>
                                                <td>{p.id}</td>
                                                <td>{fmt(p.date, true)}</td>
                                                <td>{p.mode}</td>
                                                <td>{p.ref}</td>
                                                <td className="right">{p.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Notes & Sign */}
                        <section className="notesSign">
                            <div className="card note">
                                <h4>Notes</h4>
                                <p>{model.notes}</p>
                            </div>
                            <div className="signs">
                                <div className="signBlock">
                                    <div className="line" />
                                    <div className="cap">Prepared by</div>
                                </div>
                                <div className="signBlock">
                                    <div className="line" />
                                    <div className="cap">Approved by</div>
                                </div>
                                <div className="signBlock">
                                    <div className="line" />
                                    <div className="cap">Customer</div>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="sheetFoot">
                            <div>Printed: {fmt(now, true)}</div>
                            <div>Contact: support@bluewave.example.com • +91 99999 99999</div>
                            <div>Page 1 of 1</div>
                        </footer>
                    </Styled.PrintSheet>
                </div>
            </Styled.SheetWrap>
        </Styled.Page>
    );
};

export default CustomerPrint;
