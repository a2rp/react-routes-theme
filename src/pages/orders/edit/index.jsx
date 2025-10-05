import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- tiny date utils for consistent format ---------- */
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
const onlyTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ---------- self-made confirm (no browser confirm) ---------- */
const ConfirmDialog = ({ open, title, message, onConfirm, onClose, confirmText = "Confirm" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Cancel</button>
                    <button className="btnDanger" onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const OrderEdit = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    /* display-only: pre-specified order; totals are precomputed (no calculations) */
    const order = useMemo(() => ({
        id: orderId || "ORD-3001",
        number: orderId || "ORD-3001",
        status: "processing", // draft | processing | packed | shipped | delivered | cancelled
        createdAt: "2025-10-04T10:22:33+05:30",
        updatedAt: "2025-10-04T15:38:20+05:30",
        currency: "₹",
        customer: {
            id: "CUST-1001",
            name: "Aarav Sharma",
            email: "aarav.sharma@example.com",
            phone: "+91 98765 43210",
            code: "CUST-1001"
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
        tags: ["priority", "pharma", "online"],
        references: {
            po: "PO-7749",
            invoiceId: "INV-2031",
            shipmentId: "SHP-5012"
        },
        items: [
            {
                id: "ITEM-01",
                productId: "MED-AMOX-500",
                name: "Amoxicillin 500mg Capsule",
                sku: "AMOX-500",
                batch: "BCH-2201",
                expiry: "2026-02-28",
                qty: 2,
                unit: "strip",
                mrp: "150.00",
                rate: "120.00",
                discount: "10.00",
                taxRate: "12%",
                tax: "25.92",
                lineTotal: "233.92"
            },
            {
                id: "ITEM-02",
                productId: "MED-PARA-650",
                name: "Paracetamol 650mg Tablet",
                sku: "PARA-650",
                batch: "BCH-2305",
                expiry: "2027-05-31",
                qty: 4,
                unit: "strip",
                mrp: "90.00",
                rate: "72.00",
                discount: "0.00",
                taxRate: "12%",
                tax: "34.56",
                lineTotal: "322.56"
            },
            {
                id: "ITEM-03",
                productId: "MED-ORS-200",
                name: "ORS Sachet 20.5g",
                sku: "ORS-20",
                batch: "BCH-2311",
                expiry: "2026-11-30",
                qty: 12,
                unit: "sachet",
                mrp: "20.00",
                rate: "16.00",
                discount: "6.00",
                taxRate: "5%",
                tax: "9.00",
                lineTotal: "165.00"
            }
        ],
        totals: {
            subTotal: "680.00",
            discountTotal: "20.00",
            taxTotal: "69.48",
            shipping: "12.12",
            roundOff: "-0.60",
            grandTotal: "741.00",
            paid: "500.00",
            balance: "241.00"
        },
        notes: "Pack medicines with temperature-control gel. Do not substitute brand. Deliver before evening.",
        attachments: [
            { id: "A1", name: "Doctor_Prescription.pdf", size: "182 KB" },
            { id: "A2", name: "KYC_Customer.pdf", size: "96 KB" }
        ]
    }), [orderId]);

    const [askDelete, setAskDelete] = useState(false);
    const [banner, setBanner] = useState("");

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

    const onCancel = () => navigate(`/orders/${order.id}`);
    const onDelete = () => setAskDelete(true);
    const confirmDelete = () => {
        setAskDelete(false);
        navigate("/orders");
    };

    const setDemoBanner = (msg) => {
        setBanner(msg);
        window.clearTimeout(setDemoBanner._t);
        setDemoBanner._t = window.setTimeout(() => setBanner(""), 3500);
    };

    const disabledTip = "Demo only: action disabled";

    return (
        <Styled.Page>
            {/* print CSS block (as required) */}
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
                    <h1>Edit Order</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumbs">
                        <NavLink to="/orders">Orders</NavLink>
                        <span>/</span>
                        <NavLink to={`/orders/${order.id}`}>{order.number}</NavLink>
                        <span>/</span>
                        <span className="current">Edit</span>
                    </nav>
                    <div className="meta">
                        <span>Created: {fmt(order.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmt(order.updatedAt, true)}</span>
                    </div>
                </div>

                <div className="right actions">
                    <span className={`status ${order.status}`}>{order.status}</span>
                    <button className="btnGhost" onClick={onCancel} title="Back to order details">Cancel</button>
                    <button className="btnPrimary" disabled title={disabledTip} onClick={() => setDemoBanner(disabledTip)}>Save</button>
                    <button className="btnPrimary" disabled title={disabledTip} onClick={() => setDemoBanner(disabledTip)}>Save &amp; View</button>
                    <button className="btnDanger" onClick={onDelete} title="Delete this order">Delete</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* Main column */}
                <section className="col main card">
                    {/* Order identity + customer */}
                    <div className="row idRow">
                        <div className="idBlock">
                            <div className="label">Order</div>
                            <div className="value">{order.number}</div>
                        </div>
                        <div className="idBlock">
                            <div className="label">Customer</div>
                            <div className="value">
                                <NavLink to={`/customers/${order.customer.id}`}>{order.customer.name}</NavLink>
                                <div className="muted">{order.customer.email} · {order.customer.phone}</div>
                            </div>
                        </div>
                        <div className="idBlock">
                            <div className="label">References</div>
                            <div className="value">
                                PO: {order.references.po} ·{" "}
                                <NavLink to={`/invoices/${order.references.invoiceId}`}>{order.references.invoiceId}</NavLink> ·{" "}
                                <NavLink to={`/shipments/${order.references.shipmentId}`}>{order.references.shipmentId}</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Status steps */}
                    <div className="steps">
                        <div className={`step ${["draft", "processing", "packed", "shipped", "delivered"].includes(order.status) ? "done" : ""}`}>
                            <span>Draft</span>
                        </div>
                        <div className={`step ${["processing", "packed", "shipped", "delivered"].includes(order.status) ? "done" : ""}`}>
                            <span>Processing</span>
                        </div>
                        <div className={`step ${["packed", "shipped", "delivered"].includes(order.status) ? "done" : ""}`}>
                            <span>Packed</span>
                        </div>
                        <div className={`step ${["shipped", "delivered"].includes(order.status) ? "done" : ""}`}>
                            <span>Shipped</span>
                        </div>
                        <div className={`step ${order.status === "delivered" ? "done" : ""}`}>
                            <span>Delivered</span>
                        </div>
                    </div>

                    {/* Items (display-only) */}
                    <div className="tableWrap">
                        <div className="tableHeader">
                            <h3>Items</h3>
                            <div className="tableActions">
                                <button className="btnGhost small" disabled title={disabledTip} onClick={() => setDemoBanner(disabledTip)}>Add Item</button>
                                <button className="btnGhost small" disabled title={disabledTip} onClick={() => setDemoBanner(disabledTip)}>Import Items</button>
                            </div>
                        </div>

                        <div className="scroller">
                            <table className="grid">
                                <thead>
                                    <tr>
                                        <th style={{ minWidth: 240 }}>Product</th>
                                        <th>SKU</th>
                                        <th>Batch / Expiry</th>
                                        <th className="num">Qty</th>
                                        <th className="num">Rate</th>
                                        <th className="num">Discount</th>
                                        <th className="num">Tax</th>
                                        <th className="num">Line Total</th>
                                        <th className="num">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.items.map((it) => (
                                        <tr key={it.id}>
                                            <td>
                                                <div className="pTitle">
                                                    <NavLink to={`/products/${it.productId}`}>{it.name}</NavLink>
                                                    <div className="muted">{it.unit}</div>
                                                </div>
                                            </td>
                                            <td>{it.sku}</td>
                                            <td>{it.batch} · {it.expiry}</td>
                                            <td className="num">{it.qty}</td>
                                            <td className="num">{order.currency}{it.rate}</td>
                                            <td className="num">{order.currency}{it.discount}</td>
                                            <td className="num">{it.taxRate} ({order.currency}{it.tax})</td>
                                            <td className="num strong">{order.currency}{it.lineTotal}</td>
                                            <td className="num">
                                                <button
                                                    className="btnGhost xsmall"
                                                    disabled
                                                    title={disabledTip}
                                                    onClick={() => setDemoBanner(disabledTip)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={6}></td>
                                        <td className="num">Sub Total</td>
                                        <td className="num strong">{order.currency}{order.totals.subTotal}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6}></td>
                                        <td className="num">Discount</td>
                                        <td className="num strong">-{order.currency}{order.totals.discountTotal}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6}></td>
                                        <td className="num">Tax</td>
                                        <td className="num strong">{order.currency}{order.totals.taxTotal}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6}></td>
                                        <td className="num">Shipping</td>
                                        <td className="num strong">{order.currency}{order.totals.shipping}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6}></td>
                                        <td className="num">Round Off</td>
                                        <td className="num strong">{order.currency}{order.totals.roundOff}</td>
                                        <td></td>
                                    </tr>
                                    <tr className="grand">
                                        <td colSpan={6}></td>
                                        <td className="num">Grand Total</td>
                                        <td className="num strong">{order.currency}{order.totals.grandTotal}</td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    {/* Notes + Attachments */}
                    <div className="row two">
                        <div className="card sub">
                            <h3>Notes</h3>
                            <textarea rows={6} defaultValue={order.notes} readOnly />
                            <div className="mini">Last edit: {fmt(order.updatedAt, true)}</div>
                        </div>
                        <div className="card sub">
                            <h3>Attachments</h3>
                            <ul className="files">
                                {order.attachments.map(f => (
                                    <li key={f.id}>
                                        <span className="fileName">{f.name}</span>
                                        <span className="muted">{f.size}</span>
                                        <button className="btnGhost xsmall" onClick={() => setDemoBanner("Preview coming soon")}>Preview</button>
                                        <a className="btnGhost xsmall" href="#" onClick={(e) => e.preventDefault()} title="Download copy">Download</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Side column */}
                <aside className="col side">
                    <div className="card">
                        <h3>Payment</h3>
                        <div className="kv">
                            <div><span className="k">Received</span><span className="v">{order.currency}{order.totals.paid}</span></div>
                            <div><span className="k">Balance</span><span className="v">{order.currency}{order.totals.balance}</span></div>
                        </div>
                        <div className="progress">
                            <div className="bar" style={{ width: `${Math.min(100, Math.round((Number(order.totals.paid) / Number(order.totals.grandTotal)) * 100))}%` }} />
                        </div>
                        <div className="mini muted">Collected on: {fmt(order.updatedAt)}</div>
                    </div>

                    <div className="card">
                        <h3>Addresses</h3>
                        <div className="addr">
                            <div>
                                <div className="label">Billing</div>
                                <p>
                                    {order.billingAddress.line1}<br />
                                    {order.billingAddress.line2}<br />
                                    {order.billingAddress.city} {order.billingAddress.zip}<br />
                                    {order.billingAddress.state}, {order.billingAddress.country}
                                </p>
                            </div>
                            <div>
                                <div className="label">Shipping</div>
                                <p>
                                    {order.shippingAddress.line1}<br />
                                    {order.shippingAddress.line2}<br />
                                    {order.shippingAddress.city} {order.shippingAddress.zip}<br />
                                    {order.shippingAddress.state}, {order.shippingAddress.country}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Tags</h3>
                        <div className="chips">
                            {order.tags.map(t => <span key={t} className="chip">{t}</span>)}
                        </div>
                    </div>

                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Order</span><span className="v">{order.number}</span></div>
                            <div className="line"><span className="k">Customer</span><span className="v">{order.customer.name} ({order.customer.code})</span></div>
                            <div className="line"><span className="k">Status</span><span className="v">{order.status}</span></div>
                            <div className="line"><span className="k">Created</span><span className="v">{fmt(order.createdAt, true)}</span></div>
                            <div className="line"><span className="k">Grand Total</span><span className="v">{order.currency}{order.totals.grandTotal}</span></div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li><span className="dot" /><div><strong>Packed</strong><div className="muted">{fmt("2025-10-04T14:10:00+05:30", true)}</div></div></li>
                            <li><span className="dot" /><div><strong>Processing started</strong><div className="muted">{fmt("2025-10-04T11:00:00+05:30", true)}</div></div></li>
                            <li><span className="dot" /><div><strong>Order created</strong><div className="muted">{fmt(order.createdAt, true)}</div></div></li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <ConfirmDialog
                open={askDelete}
                title="Delete order?"
                message={`This will remove ${order.number}.`}
                confirmText="Delete"
                onConfirm={confirmDelete}
                onClose={() => setAskDelete(false)}
            />
        </Styled.Page>
    );
};

export default OrderEdit;
