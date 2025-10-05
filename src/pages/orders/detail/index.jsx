import React, { useMemo, useRef, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

// date utils (single source for consistent display)
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

// simple confirm dialog (custom, never window.confirm)
const ConfirmDialog = ({ open, title, message, onConfirm, onClose, confirmText = "Confirm" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                    <button className="btnDanger" onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const OrderDetail = () => {
    const { orderId = "ORD-3001" } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // display-only fixture (no calculations performed here)
    const model = useMemo(() => ({
        id: orderId,
        code: orderId,
        channel: "Online",
        status: "Partially Shipped",
        createdAt: "2025-10-04T09:22:31+05:30",
        confirmedAt: "2025-10-04T09:25:12+05:30",
        packedAt: "2025-10-04T11:40:00+05:30",
        shippedAt: "2025-10-04T17:10:45+05:30",
        deliveredAt: "",
        customer: {
            id: "CUST-1001",
            name: "Aarav Sharma",
            email: "aarav.sharma@example.com",
            phone: "+91 98765 43210",
            tags: ["priority", "wholesale"],
        },
        billingAddress: {
            line1: "221B Baker Street",
            line2: "Khan Market",
            city: "New Delhi",
            state: "DL",
            zip: "110003",
            country: "India",
        },
        shippingAddress: {
            line1: "Plot 14, Industrial Area",
            line2: "Phase 2",
            city: "Gurugram",
            state: "HR",
            zip: "122002",
            country: "India",
        },
        payment: {
            status: "Partially Paid",
            method: "UPI",
            reference: "TXN-77H92P",
            paidAt: "2025-10-04T10:05:14+05:30",
            amounts: {
                currency: "INR",
                subtotal: 18450.00,
                discount: 950.00,
                tax: 3321.00,
                shipping: 250.00,
                total: 211, // placeholder (no calc implied)
                grandTotal: 21071.00,
                paid: 15000.00,
                balance: 6071.00,
            }
        },
        invoice: { id: "INV-2031" },
        shipments: [
            { id: "SHP-501", carrier: "Delhivery", trackingNo: "DLV-993442118", labels: 2, createdAt: "2025-10-04T17:12:11+05:30", status: "In Transit" },
            { id: "SHP-502", carrier: "BlueDart", trackingNo: "BD-77449155", labels: 1, createdAt: "2025-10-04T19:45:03+05:30", status: "Label Created" },
        ],
        // added stable itemId for deep links
        items: [
            { itemId: "ITEM-01", lineId: "LN-01", sku: "MED-AMOX-500", name: "Amoxicillin 500mg (10 tabs)", hsn: "3004", qty: 6, unit: "box", rate: 250.00, discount: 50.00, tax: 54.00, lineTotal: 1504.00 },
            { itemId: "ITEM-02", lineId: "LN-02", sku: "MED-PARA-650", name: "Paracetamol 650mg (15 tabs)", hsn: "3003", qty: 12, unit: "box", rate: 190.00, discount: 0.00, tax: 410.00, lineTotal: 2290.00 },
            { itemId: "ITEM-03", lineId: "LN-03", sku: "MED-ORS-200", name: "ORS 200ml", hsn: "2202", qty: 24, unit: "bottle", rate: 35.00, discount: 120.00, tax: 190.00, lineTotal: 910.00 },
            { itemId: "ITEM-04", lineId: "LN-04", sku: "MED-ZINC-50", name: "Zinc 50mg (100 tabs)", hsn: "3004", qty: 3, unit: "bottle", rate: 420.00, discount: 60.00, tax: 158.00, lineTotal: 1418.00 },
        ],
        docs: {
            quoteId: "QUO-7811",
            pickingList: "PL-3001",
            packingList: "PK-3001",
        },
        notes: "Deliver weekday afternoons only. Keep outer packaging discreet. Club all partials in single invoice.",
        activity: [
            { t: "Order created", at: "2025-10-04T09:22:31+05:30" },
            { t: "Payment received (partial)", at: "2025-10-04T10:05:14+05:30" },
            { t: "Packed", at: "2025-10-04T11:40:00+05:30" },
            { t: "Shipment SHP-501 created", at: "2025-10-04T17:12:11+05:30" },
            { t: "Shipment SHP-502 label created", at: "2025-10-04T19:45:03+05:30" },
        ],
        tags: ["priority", "north", "bulk"],
    }), [orderId]);

    // minor banner + confirm (demo only)
    const [banner, setBanner] = useState("");
    const [askCancel, setAskCancel] = useState(false);

    const copyLink = () => {
        const url = window.location.href;
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(url);
            setBanner("Link copied");
            setTimeout(() => setBanner(""), 2500);
        }
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

    const openCancelDialog = () => setAskCancel(true);
    const confirmCancel = () => {
        setAskCancel(false);
        setBanner("Demo: cancel action not available");
        setTimeout(() => setBanner(""), 3000);
    };

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/orders">Orders</NavLink>
            <span>/</span>
            <span className="current">{model.code}</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print CSS (exact) */}
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
                    <h1>Order {model.code}</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Created: {fmt(model.createdAt, true)}</span>
                        <span>•</span>
                        <span>Status: {model.status}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate("/orders")}>Back</button>
                    <NavLink className="btnGhost" to={`/orders/${model.id}/print`}>Print View</NavLink>
                    <button className="btnGhost" onClick={copyLink}>Copy Link</button>
                    <NavLink className="btnPrimary" to={`/orders/${model.id}/edit`} title="Display-only demo">Edit</NavLink>
                    <button className="btnDanger" onClick={openCancelDialog} title="Display-only">Cancel Order</button>
                    <button className="btnGhost" onClick={printSection}>Print</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.TopGrid>
                <section className="card">
                    <header className="secHead">
                        <h3>Customer</h3>
                        <NavLink className="tinyLink" to={`/customers/${model.customer.id}`}>View</NavLink>
                    </header>
                    <div className="pair">
                        <div>
                            <div className="label">Name</div>
                            <div>{model.customer.name}</div>
                        </div>
                        <div>
                            <div className="label">Customer ID</div>
                            <div><NavLink to={`/customers/${model.customer.id}`}>{model.customer.id}</NavLink></div>
                        </div>
                        <div>
                            <div className="label">Email</div>
                            <div>{model.customer.email}</div>
                        </div>
                        <div>
                            <div className="label">Phone</div>
                            <div>{model.customer.phone}</div>
                        </div>
                    </div>
                    <div className="chips">
                        {model.customer.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                    </div>
                </section>

                <section className="card">
                    <header className="secHead">
                        <h3>Payment</h3>
                        <span className="status">{model.payment.status}</span>
                    </header>
                    <div className="pair">
                        <div>
                            <div className="label">Method</div>
                            <div>{model.payment.method}</div>
                        </div>
                        <div>
                            <div className="label">Reference</div>
                            <div>{model.payment.reference}</div>
                        </div>
                        <div>
                            <div className="label">Paid At</div>
                            <div>{fmt(model.payment.paidAt, true)}</div>
                        </div>
                        <div>
                            <div className="label">Invoice</div>
                            <div><NavLink to={`/invoices/${model.invoice.id}`}>{model.invoice.id}</NavLink></div>
                        </div>
                    </div>

                    <div className="totals">
                        <div><span>Subtotal</span><b>₹ {model.payment.amounts.subtotal.toLocaleString()}</b></div>
                        <div><span>Discount</span><b>₹ {model.payment.amounts.discount.toLocaleString()}</b></div>
                        <div><span>Tax</span><b>₹ {model.payment.amounts.tax.toLocaleString()}</b></div>
                        <div><span>Shipping</span><b>₹ {model.payment.amounts.shipping.toLocaleString()}</b></div>
                        <div className="hr" />
                        <div className="grand"><span>Grand Total</span><b>₹ {model.payment.amounts.grandTotal.toLocaleString()}</b></div>
                        <div><span>Paid</span><b>₹ {model.payment.amounts.paid.toLocaleString()}</b></div>
                        <div><span>Balance</span><b>₹ {model.payment.amounts.balance.toLocaleString()}</b></div>
                    </div>
                </section>

                <section className="card">
                    <header className="secHead"><h3>Addresses</h3></header>
                    <div className="addrWrap">
                        <div className="addr">
                            <div className="addrHead">Billing</div>
                            <p>{model.billingAddress.line1}</p>
                            <p>{model.billingAddress.line2}</p>
                            <p>{model.billingAddress.city} - {model.billingAddress.zip}</p>
                            <p>{model.billingAddress.state}, {model.billingAddress.country}</p>
                        </div>
                        <div className="addr">
                            <div className="addrHead">Shipping</div>
                            <p>{model.shippingAddress.line1}</p>
                            <p>{model.shippingAddress.line2}</p>
                            <p>{model.shippingAddress.city} - {model.shippingAddress.zip}</p>
                            <p>{model.shippingAddress.state}, {model.shippingAddress.country}</p>
                        </div>
                    </div>
                </section>
            </Styled.TopGrid>

            <Styled.TableCard className="card">
                <header className="secHead">
                    <h3>Items</h3>
                    <div className="legend">
                        <span className="dot" /> {model.status}
                    </div>
                </header>

                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>SKU</th>
                                <th>Item</th>
                                <th>HSN</th>
                                <th className="num">Qty</th>
                                <th className="num">Rate</th>
                                <th className="num">Discount</th>
                                <th className="num">Tax</th>
                                <th className="num">Line Total</th>
                            </tr>
                        </thead>
                        <tbody className="itemsBody">
                            {model.items.map((it, idx) => {
                                const itemId = it.itemId || `ITEM-${String(idx + 1).padStart(2, "0")}`;
                                const href = `/orders/${model.id}/items/${itemId}`;
                                return (
                                    <tr key={it.lineId} className="itemRow">
                                        <td className="mono">
                                            <NavLink to={href} title={`Open ${itemId}`}>{it.sku}</NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={href} title={`Open ${itemId}`} className="title">{it.name}</NavLink>
                                            <div className="muted">Unit: {it.unit}</div>
                                        </td>
                                        <td className="mono">{it.hsn}</td>
                                        <td className="num">{it.qty}</td>
                                        <td className="num">₹ {it.rate.toLocaleString()}</td>
                                        <td className="num">₹ {it.discount.toLocaleString()}</td>
                                        <td className="num">₹ {it.tax.toLocaleString()}</td>
                                        <td className="num strong total">
                                            <span>₹ {it.lineTotal.toLocaleString()}</span>
                                            <NavLink to={href} className="viewLink" title={`Open ${itemId}`}>View</NavLink>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Styled.TableCard>

            <Styled.SecondaryGrid>
                <section className="card">
                    <header className="secHead"><h3>Shipments</h3></header>
                    <ul className="shipments">
                        {model.shipments.map((s) => (
                            <li key={s.id} className="ship">
                                <div className="left">
                                    <div className="id">
                                        <NavLink to={`/shipments/${s.id}`}>{s.id}</NavLink>
                                        <span className="status">{s.status}</span>
                                    </div>
                                    <div className="meta small">
                                        <span>Carrier: {s.carrier}</span>
                                        <span>•</span>
                                        <span>Tracking: {s.trackingNo}</span>
                                        <span>•</span>
                                        <span>Created: {fmt(s.createdAt, true)}</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <NavLink className="btnGhost small" to={`/shipments/${s.id}/track`}>Track</NavLink>
                                    <NavLink className="btnGhost small" to={`/shipments/${s.id}/labels`}>Labels ({s.labels})</NavLink>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="card">
                    <header className="secHead"><h3>Documents</h3></header>
                    <ul className="docs">
                        <li><span className="k">Quote</span> <NavLink to={`/sales/quotes/${model.docs.quoteId}`}>{model.docs.quoteId}</NavLink></li>
                        <li><span className="k">Invoice</span> <NavLink to={`/invoices/${model.invoice.id}`}>{model.invoice.id}</NavLink></li>
                        <li><span className="k">Picking</span> {model.docs.pickingList}</li>
                        <li><span className="k">Packing</span> {model.docs.packingList}</li>
                    </ul>
                </section>

                <section className="card">
                    <header className="secHead"><h3>Timeline</h3></header>
                    <ul className="timeline">
                        {model.activity.map((a, i) => (
                            <li key={i}>
                                <span className="dot" />
                                <div>
                                    <strong>{a.t}</strong>
                                    <div className="muted">{fmt(a.at, true)}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="card">
                    <header className="secHead">
                        <h3>Notes & Tags</h3>
                    </header>
                    <p className="note">{model.notes}</p>
                    <div className="chips">
                        {model.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                    </div>
                </section>

                {/* Printable summary */}
                <section className="card" id="search-print-area" ref={printRef}>
                    <header className="secHead"><h3>Print Summary</h3></header>
                    <div className="printSummary">
                        <div className="line"><span className="k">Order</span><span className="v">{model.code}</span></div>
                        <div className="line"><span className="k">Customer</span><span className="v">{model.customer.name} ({model.customer.id})</span></div>
                        <div className="line"><span className="k">Status</span><span className="v">{model.status}</span></div>
                        <div className="line"><span className="k">Created</span><span className="v">{fmt(model.createdAt, true)}</span></div>
                        <div className="line"><span className="k">Invoice</span><span className="v">{model.invoice.id}</span></div>
                        <div className="line"><span className="k">Grand Total</span><span className="v">₹ {model.payment.amounts.grandTotal.toLocaleString()}</span></div>
                    </div>
                </section>
            </Styled.SecondaryGrid>

            <ConfirmDialog
                open={askCancel}
                title="Cancel this order?"
                message="This is a demo. Cancelling will not change any data."
                confirmText="Understood"
                onConfirm={confirmCancel}
                onClose={() => setAskCancel(false)}
            />
        </Styled.Page>
    );
};

export default OrderDetail;
