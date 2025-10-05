import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

// date utils (consistent formatting across the app)
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

// non-blocking modal (no browser alerts)
const Modal = ({ open, title, children, onClose, onConfirm, confirmText = "OK" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body">{children}</div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                    <button className="btnPrimary" onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const SalesReturnDetail = () => {
    const { returnId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // fixture-style data (display-only)
    const data = useMemo(() => ({
        id: returnId || "RET-49021",
        rma: "RMA-87432",
        createdAt: "2025-10-04T10:15:14+05:30",
        updatedAt: "2025-10-04T13:41:09+05:30",
        status: "Approved", // Requested | Approved | Received | Refunded | Rejected
        reasonSummary: "Wrong item received; customer opted for refund.",
        method: "Courier Pickup",
        warehouse: "WH-NCR-01",
        order: { id: "ORD-3456" },
        invoice: { id: "INV-2031" },
        customer: {
            id: "CUST-1001",
            name: "Aarav Sharma",
            email: "aarav.sharma@example.com",
            phone: "+91 98765 43210",
        },
        addresses: {
            shipping: {
                line1: "221B Baker Street",
                line2: "Khan Market",
                city: "New Delhi",
                state: "DL",
                zip: "110003",
                country: "India",
            }
        },
        items: [
            {
                id: "ITEM-01",
                sku: "MED-AMOX-500",
                name: "Amoxicillin 500mg Capsules",
                batch: "AMX0925A",
                expiry: "2027-02-28",
                qtyReturn: 2,
                unitPrice: "₹180.00",
                refundSubtotal: "₹360.00",
                reason: "Wrong item",
                condition: "Sealed",
                restock: "Eligible"
            },
            {
                id: "ITEM-02",
                sku: "MED-PARA-650",
                name: "Paracetamol 650mg Tablets",
                batch: "PARA1125B",
                expiry: "2026-11-30",
                qtyReturn: 1,
                unitPrice: "₹90.00",
                refundSubtotal: "₹90.00",
                reason: "Damaged box",
                condition: "Sealed",
                restock: "Eligible"
            }
        ],
        totals: {
            subtotal: "₹450.00",
            tax: "₹0.00",
            shippingRefund: "₹0.00",
            adjustment: "₹-10.00",
            grandTotal: "₹440.00"
        },
        attachments: [
            { id: "F-1", name: "delivery-photo.jpg", size: "248 KB" },
            { id: "F-2", name: "customer-note.pdf", size: "92 KB" }
        ],
        activity: [
            { id: "A-1", title: "Return created", time: "2025-10-04T10:15:14+05:30" },
            { id: "A-2", title: "RMA assigned (RMA-87432)", time: "2025-10-04T10:16:01+05:30" },
            { id: "A-3", title: "Return approved", time: "2025-10-04T12:10:45+05:30" }
        ],
        notes: "Pickup scheduled for next working day between 11:00–16:00hrs.",
        policy: "Returns accepted within 7 days of delivery for sealed medicines only. Temperature-controlled items are non-returnable."
    }), [returnId]);

    // demo-mode gate (non-functional actions)
    const [showDemo, setShowDemo] = useState(false);

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

    const statusIndex = (s) => {
        const order = ["Requested", "Approved", "Received", "Refunded"];
        const i = order.indexOf(s);
        return i === -1 ? 0 : i;
    };

    const crumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/sales">Sales</NavLink><span>/</span>
            <NavLink to="/sales/returns">Returns</NavLink><span>/</span>
            <span className="current">{data.id}</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print rules (section-only) */}
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
                    <h1>Sales Return</h1>
                    {crumbs}
                    <div className="meta">
                        <span>RMA: <strong>{data.rma}</strong></span><span>•</span>
                        <span>Created: {fmt(data.createdAt, true)}</span><span>•</span>
                        <span>Updated: {fmt(data.updatedAt, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate("/sales/returns")} title="Back to returns">Back</button>
                    <a className="btnGhost" href="#" onClick={(e) => e.preventDefault()} title="Download PDF">Download</a>
                    <button className="btnGhost" onClick={printSection} title="Print">Print</button>
                    <button className="btnDisabled" onClick={() => setShowDemo(true)} title="Demo only">Approve</button>
                    <button className="btnDisabled" onClick={() => setShowDemo(true)} title="Demo only">Mark Received</button>
                    <button className="btnDisabled" onClick={() => setShowDemo(true)} title="Demo only">Refund</button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                <section className="col main">
                    <div className="card">
                        <div className="rowTop">
                            <div className="identity">
                                <div className="title">
                                    <h2>{data.id}</h2>
                                    <span className={`badge ${data.status.toLowerCase()}`}>{data.status}</span>
                                </div>
                                <div className="links">
                                    <span>Order:&nbsp;<NavLink to={`/orders/${data.order.id}`}>{data.order.id}</NavLink></span>
                                    <span>Invoice:&nbsp;<NavLink to={`/invoices/${data.invoice.id}`}>{data.invoice.id}</NavLink></span>
                                    <span>Customer:&nbsp;<NavLink to={`/customers/${data.customer.id}`}>{data.customer.name}</NavLink></span>
                                </div>
                            </div>

                            <div className="steps">
                                {["Requested", "Approved", "Received", "Refunded"].map((s, i) => (
                                    <div key={s} className={`step ${i <= statusIndex(data.status) ? "done" : ""}`}>
                                        <div className="dot" />
                                        <div className="label">{s}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rowInfo">
                            <div className="info">
                                <div><span className="k">Method</span><span className="v">{data.method}</span></div>
                                <div><span className="k">Warehouse</span><span className="v">{data.warehouse}</span></div>
                                <div><span className="k">Summary</span><span className="v">{data.reasonSummary}</span></div>
                            </div>
                            <div className="policy">
                                <h4>Return Policy</h4>
                                <p>{data.policy}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Items</h3>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>SKU</th>
                                        <th>Product</th>
                                        <th>Batch</th>
                                        <th>Expiry</th>
                                        <th className="num">Qty</th>
                                        <th className="num">Unit Price</th>
                                        <th className="num">Refund</th>
                                        <th>Reason</th>
                                        <th>Condition</th>
                                        <th>Restock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.items.map((it) => (
                                        <tr key={it.id}>
                                            <td><NavLink to={`/products/${it.sku}`}>{it.sku}</NavLink></td>
                                            <td>{it.name}</td>
                                            <td>{it.batch}</td>
                                            <td>{fmt(it.expiry)}</td>
                                            <td className="num">{it.qtyReturn}</td>
                                            <td className="num">{it.unitPrice}</td>
                                            <td className="num">{it.refundSubtotal}</td>
                                            <td>{it.reason}</td>
                                            <td>{it.condition}</td>
                                            <td>{it.restock}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid2">
                        <div className="card">
                            <h3>Totals</h3>
                            <div className="totals">
                                <div><span>Subtotal</span><span>{data.totals.subtotal}</span></div>
                                <div><span>Tax</span><span>{data.totals.tax}</span></div>
                                <div><span>Shipping Refund</span><span>{data.totals.shippingRefund}</span></div>
                                <div><span>Adjustment</span><span>{data.totals.adjustment}</span></div>
                                <div className="grand"><span>Total Refund</span><span>{data.totals.grandTotal}</span></div>
                            </div>
                        </div>

                        <div className="card">
                            <h3>Notes</h3>
                            <p>{data.notes}</p>
                            <div className="mini">Last update: {fmt(data.updatedAt, true)}</div>
                        </div>
                    </div>
                </section>

                <aside className="col side">
                    <div className="card">
                        <h3>Customer</h3>
                        <div className="customer">
                            <div className="name">
                                <NavLink to={`/customers/${data.customer.id}`}>{data.customer.name}</NavLink>
                            </div>
                            <div className="grid">
                                <div><span className="k">Email</span><span className="v">{data.customer.email}</span></div>
                                <div><span className="k">Phone</span><span className="v">{data.customer.phone}</span></div>
                            </div>
                            <div className="addr">
                                <div className="k">Ship To</div>
                                <div className="v">
                                    {data.addresses.shipping.line1}, {data.addresses.shipping.line2}<br />
                                    {data.addresses.shipping.city} {data.addresses.shipping.zip}, {data.addresses.shipping.state}<br />
                                    {data.addresses.shipping.country}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            {data.activity.map(a => (
                                <li key={a.id}>
                                    <span className="dot" />
                                    <div>
                                        <strong>{a.title}</strong>
                                        <div className="muted">{fmt(a.time, true)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Attachments</h3>
                        <ul className="files">
                            {data.attachments.map(f => (
                                <li key={f.id}>
                                    <a href="#" onClick={(e) => e.preventDefault()}>{f.name}</a>
                                    <span className="muted">{f.size}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Printable compact summary */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="summary">
                            <div><span className="k">Return</span><span className="v">{data.id}</span></div>
                            <div><span className="k">RMA</span><span className="v">{data.rma}</span></div>
                            <div><span className="k">Status</span><span className="v">{data.status}</span></div>
                            <div><span className="k">Order</span><span className="v">{data.order.id}</span></div>
                            <div><span className="k">Invoice</span><span className="v">{data.invoice.id}</span></div>
                            <div><span className="k">Customer</span><span className="v">{data.customer.name}</span></div>
                            <div><span className="k">Total Refund</span><span className="v">{data.totals.grandTotal}</span></div>
                            <div><span className="k">Created</span><span className="v">{fmt(data.createdAt, true)}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <Modal
                open={showDemo}
                title="Demo mode"
                onClose={() => setShowDemo(false)}
                onConfirm={() => setShowDemo(false)}
            >
                <p>These actions are shown for design preview and are disabled in the demo.</p>
            </Modal>
        </Styled.Page>
    );
};

export default SalesReturnDetail;
