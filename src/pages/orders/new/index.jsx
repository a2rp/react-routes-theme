import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/** date utils (single source of truth for formatting) */
const pad = (n) => String(n).padStart(2, "0");
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${DAYS[x.getDay()]} ${MONS[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

const DEMO_MODE = true;

const OrderNew = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    // demo, display-only: prefilled but not persisted
    const now = useMemo(() => new Date(), []);
    const [form, setForm] = useState({
        customerId: "CUST-1001",
        customerName: "Aarav Sharma",
        orderDate: now.toISOString().slice(0, 10),
        warehouse: "WH-DEL-01",
        priceList: "PL-STD-2025",
        paymentTerm: "Net 15",
        shippingMethod: "Surface",
        salesperson: "USR-009 | Roshni",
        notes: "Monthly bulk purchase. Leave package at gate if not available.",
        tags: ["priority", "wholesale", "north"],
    });

    const [items] = useState([
        { id: "MED-AMOX-500", name: "Amoxicillin 500mg", sku: "MED-AMOX-500", batch: "AMX0925A", exp: "2026-02-28", qty: 2, unit: "box", mrp: 480.00, net: 420.00, tax: 5, lineTotal: 840.00 },
        { id: "MED-PARA-650", name: "Paracetamol 650mg", sku: "MED-PARA-650", batch: "PAR0825D", exp: "2027-08-31", qty: 3, unit: "box", mrp: 320.00, net: 285.00, tax: 12, lineTotal: 855.00 },
        { id: "MED-ORS-200", name: "ORS Powder 200ml", sku: "MED-ORS-200", batch: "ORS0725B", exp: "2026-11-30", qty: 5, unit: "pkt", mrp: 45.00, net: 40.00, tax: 12, lineTotal: 200.00 },
    ]);

    // static totals (display-only; not computed from inputs)
    const totals = {
        subtotal: 1895.00,
        discount: 95.00,
        tax: 146.30,
        shipping: 60.00,
        roundoff: -0.30,
        grand: 2006.00,
    };

    const billing = {
        line1: "221B Baker Street",
        line2: "Khan Market",
        city: "New Delhi",
        state: "DL",
        zip: "110003",
        country: "India",
        gstin: "22ABCDE1234F1Z5",
        pan: "ABCDE1234F",
    };
    const shipping = {
        line1: "Plot 14, Industrial Area",
        line2: "Phase 2",
        city: "Gurugram",
        state: "HR",
        zip: "122002",
        country: "India",
        contact: "+91 98765 43210",
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const printSection = () => {
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
                    <h1>New Order</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/sales">Sales</NavLink>
                        <span>/</span>
                        <NavLink to="/orders">Orders</NavLink>
                        <span>/</span>
                        <span className="current">New</span>
                    </nav>
                    <div className="meta">
                        <span>Today: {fmtDate(now)}</span>
                        <span>•</span>
                        <span>Created: {fmtDateTime(now)}</span>
                    </div>
                </div>
                <div className="right">
                    <button className="btnGhost" onClick={() => navigate("/orders")} title="Back to orders">Cancel</button>
                    <button className="btnPrimary" disabled={DEMO_MODE} title="Disabled in demo">Save Draft</button>
                    <button className="btnPrimary" disabled={DEMO_MODE} title="Disabled in demo">Create Order</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                <section className="col main card">
                    {/* Customer & Context */}
                    <div className="panel">
                        <div className="row two">
                            <div>
                                <label>Customer</label>
                                <div className="withBadge">
                                    <select name="customerId" value={form.customerId} onChange={onChange} aria-label="Customer">
                                        <option value="CUST-1001">CUST-1001 · Aarav Sharma</option>
                                        <option value="CUST-1002">CUST-1002 · Neha Verma</option>
                                        <option value="CUST-1003">CUST-1003 · Bluewave Traders</option>
                                    </select>
                                    <NavLink className="badgeLink" to={`/customers/${form.customerId}`} title="Open customer">View</NavLink>
                                </div>
                            </div>
                            <div>
                                <label>Order Date</label>
                                <input type="date" name="orderDate" value={form.orderDate} onChange={onChange} />
                            </div>
                        </div>

                        <div className="row three">
                            <div>
                                <label>Warehouse</label>
                                <select name="warehouse" value={form.warehouse} onChange={onChange}>
                                    <option value="WH-DEL-01">Delhi · WH-DEL-01</option>
                                    <option value="WH-MUM-01">Mumbai · WH-MUM-01</option>
                                    <option value="WH-BLR-02">Bengaluru · WH-BLR-02</option>
                                </select>
                            </div>
                            <div>
                                <label>Price List</label>
                                <select name="priceList" value={form.priceList} onChange={onChange}>
                                    <option value="PL-STD-2025">Standard · PL-STD-2025</option>
                                    <option value="PL-HOSP-2025">Hospital · PL-HOSP-2025</option>
                                    <option value="PL-WHOL-2025">Wholesale · PL-WHOL-2025</option>
                                </select>
                            </div>
                            <div>
                                <label>Salesperson</label>
                                <select name="salesperson" value={form.salesperson} onChange={onChange}>
                                    <option>USR-009 | Roshni</option>
                                    <option>USR-011 | Karan</option>
                                    <option>USR-004 | Nidhi</option>
                                </select>
                            </div>
                        </div>

                        <div className="row three">
                            <div>
                                <label>Payment Term</label>
                                <select name="paymentTerm" value={form.paymentTerm} onChange={onChange}>
                                    <option>Advance</option>
                                    <option>Net 7</option>
                                    <option>Net 15</option>
                                    <option>Net 30</option>
                                </select>
                            </div>
                            <div>
                                <label>Shipping Method</label>
                                <select name="shippingMethod" value={form.shippingMethod} onChange={onChange}>
                                    <option>Surface</option>
                                    <option>Air</option>
                                    <option>Express</option>
                                </select>
                            </div>
                            <div>
                                <label>Reference #</label>
                                <input value="RFQ-2025-091" onChange={() => { }} placeholder="PO/Ref" />
                            </div>
                        </div>
                    </div>

                    {/* Addresses */}
                    <div className="row two">
                        <div className="card sub">
                            <h3>Billing Address</h3>
                            <div className="addr">
                                <div>{billing.line1}</div>
                                <div>{billing.line2}</div>
                                <div>{billing.city} - {billing.zip}, {billing.state}, {billing.country}</div>
                                <div className="muted">GSTIN: {billing.gstin} • PAN: {billing.pan}</div>
                            </div>
                        </div>
                        <div className="card sub">
                            <h3>Shipping Address</h3>
                            <div className="addr">
                                <div>{shipping.line1}</div>
                                <div>{shipping.line2}</div>
                                <div>{shipping.city} - {shipping.zip}, {shipping.state}, {shipping.country}</div>
                                <div className="muted">Contact: {shipping.contact}</div>
                            </div>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="panel">
                        <div className="tableHeader">
                            <h3>Items</h3>
                            <div className="actions">
                                <button className="btnGhost" disabled title="Disabled in demo">Add Item</button>
                                <button className="btnGhost" disabled title="Disabled in demo">Import CSV</button>
                            </div>
                        </div>

                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ width: '26%' }}>Item</th>
                                        <th>SKU</th>
                                        <th>Batch</th>
                                        <th>Expiry</th>
                                        <th className="num">Qty</th>
                                        <th>Unit</th>
                                        <th className="num">Price</th>
                                        <th className="num">Tax %</th>
                                        <th className="num">Line Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((r) => (
                                        <tr key={r.id}>
                                            <td>
                                                <div className="title">{r.name}</div>
                                                <div className="muted tiny">{r.id}</div>
                                            </td>
                                            <td>{r.sku}</td>
                                            <td>{r.batch}</td>
                                            <td>{fmtDate(r.exp)}</td>
                                            <td className="num">{r.qty}</td>
                                            <td>{r.unit}</td>
                                            <td className="num">₹ {r.net.toFixed(2)}</td>
                                            <td className="num">{r.tax}%</td>
                                            <td className="num strong">₹ {r.lineTotal.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="notesWrap">
                            <label>Order Notes</label>
                            <textarea rows={4} value={form.notes} onChange={onChange} name="notes" placeholder="Instructions for packing, delivery windows, etc." />
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="col side">
                    <div className="card">
                        <h3>Order Summary</h3>
                        <div className="summary">
                            <div><span>Subtotal</span><strong>₹ {totals.subtotal.toFixed(2)}</strong></div>
                            <div><span>Discount</span><strong>- ₹ {totals.discount.toFixed(2)}</strong></div>
                            <div><span>Tax</span><strong>₹ {totals.tax.toFixed(2)}</strong></div>
                            <div><span>Shipping</span><strong>₹ {totals.shipping.toFixed(2)}</strong></div>
                            <div><span>Round-off</span><strong>{totals.roundoff >= 0 ? "" : "- "}₹ {Math.abs(totals.roundoff).toFixed(2)}</strong></div>
                            <div className="grand"><span>Grand Total</span><strong>₹ {totals.grand.toFixed(2)}</strong></div>
                        </div>
                        <div className="mini muted">Updated: {fmtDateTime(now)}</div>
                    </div>

                    <div className="card">
                        <h3>Status</h3>
                        <ol className="steps">
                            <li className="active">Draft</li>
                            <li>Confirmed</li>
                            <li>Fulfilled</li>
                            <li>Invoiced</li>
                        </ol>
                    </div>

                    <div className="card">
                        <h3>Tags</h3>
                        <div className="chips">
                            {form.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                        </div>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Order draft created</strong>
                                    <div className="muted tiny">{fmtDateTime(now)}</div>
                                </div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Customer viewed price list {form.priceList}</strong>
                                    <div className="muted tiny">{fmtTime(now)}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Printable section */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Customer</span><span className="v">{form.customerName} ({form.customerId})</span></div>
                            <div className="line"><span className="k">Order Date</span><span className="v">{fmtDate(form.orderDate)}</span></div>
                            <div className="line"><span className="k">Warehouse</span><span className="v">{form.warehouse}</span></div>
                            <div className="line"><span className="k">Payment</span><span className="v">{form.paymentTerm}</span></div>
                            <div className="line"><span className="k">Shipping</span><span className="v">{form.shippingMethod}</span></div>
                            <div className="line"><span className="k">Total</span><span className="v">₹ {totals.grand.toFixed(2)}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            {/* Demo flag strip */}
            <Styled.DemoBar role="status" aria-live="polite">
                Demo mode: create/save is disabled. Explore the UI freely.
            </Styled.DemoBar>
        </Styled.Page>
    );
};

export default OrderNew;
