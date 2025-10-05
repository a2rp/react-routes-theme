import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* date utils — one place so formatting stays consistent */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* lightweight confirm dialog (no browser alerts) */
const Confirm = ({ open, title, message, onClose, onConfirm, confirmText = "Confirm" }) => {
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

const SalesQuoteDetail = () => {
    const { quoteId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    /* display-only model: precomputed totals, no calculations here */
    const model = useMemo(() => {
        const now = new Date("2025-10-04T15:38:20+05:30");
        return {
            id: quoteId || "Q-2025-0031",
            number: quoteId || "Q-2025-0031",
            status: "Sent", // Draft | Sent | Viewed | Accepted | Declined | Expired
            createdAt: now,
            validTill: "2025-10-18",
            currency: "INR",
            salesRep: { id: "U-007", name: "A. Ranjan", email: "ar@example.com" },
            customer: {
                id: "CUST-1001",
                name: "Bluewave Traders",
                email: "ops@bluewave.example.com",
                phone: "+91 98765 43210",
            },
            billing: {
                line1: "221B Baker Street",
                line2: "Khan Market",
                city: "New Delhi",
                state: "DL",
                zip: "110003",
                country: "India",
            },
            shipping: {
                line1: "Plot 14, Industrial Area",
                line2: "Phase 2",
                city: "Gurugram",
                state: "HR",
                zip: "122002",
                country: "India",
            },
            tags: ["priority", "wholesale", "north"],
            items: [
                { line: 1, sku: "MED-AMOX-500", name: "Amoxicillin 500mg Capsule", desc: "Blister pack of 10", qty: "50", unitPrice: "42.00", tax: "12%", discount: "0%", lineTotal: "2,100.00" },
                { line: 2, sku: "MED-PARA-650", name: "Paracetamol 650mg Tablet", desc: "Bottle of 100", qty: "20", unitPrice: "95.00", tax: "12%", discount: "5%", lineTotal: "1,805.00" },
                { line: 3, sku: "MED-PANT-40", name: "Pantoprazole 40mg", desc: "Strip of 15", qty: "30", unitPrice: "68.00", tax: "12%", discount: "0%", lineTotal: "2,040.00" },
                { line: 4, sku: "MED-CET-10", name: "Cetirizine 10mg", desc: "Strip of 10", qty: "40", unitPrice: "18.00", tax: "12%", discount: "0%", lineTotal: "720.00" },
            ],
            totals: {
                subTotal: "6,665.00",
                discountTotal: "95.00",
                taxTotal: "788.40",
                shipping: "0.00",
                grandTotal: "7,358.40",
            },
            terms: [
                "Prices in INR. Taxes as applicable.",
                "Valid till the mentioned date or while stocks last.",
                "Delivery within 3-5 business days from confirmation.",
                "Payment: Net 15. Late fee may apply thereafter.",
            ],
            attachments: [
                { id: "att-1", name: "Quote-Q-2025-0031.pdf", size: "220 KB" },
                { id: "att-2", name: "Product-Specs.xlsx", size: "96 KB" },
            ],
            timeline: [
                { type: "email", label: "Quote emailed to customer", at: now },
                { type: "note", label: "Requested 2 extra packs for AMOX-500", at: now },
                { type: "create", label: "Quote created", at: now },
            ],
        };
    }, [quoteId]);

    const [banner, setBanner] = useState("");
    const [askEmail, setAskEmail] = useState(false);

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3500);
        return () => clearTimeout(t);
    }, [banner]);

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

    const copyLink = async () => {
        try {
            await navigator.clipboard?.writeText(window.location.href);
            setBanner("Link copied to clipboard.");
        } catch {
            setBanner("Copy failed. You can copy from the address bar.");
        }
    };

    const sendEmail = () => setAskEmail(true);
    const confirmEmail = () => {
        setAskEmail(false);
        setBanner(`Email queued at ${fmt(new Date(), true)}`);
    };

    const statusClass = {
        Draft: "draft",
        Sent: "sent",
        Viewed: "viewed",
        Accepted: "accepted",
        Declined: "declined",
        Expired: "expired",
    }[model.status] || "draft";

    return (
        <Styled.Page className="container">
            {/* print rules */}
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
                    <h1>Sales Quote</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/sales">Sales</NavLink><span>/</span>
                        <NavLink to="/sales/quotes">Quotes</NavLink><span>/</span>
                        <span className="current">{model.number}</span>
                    </nav>
                    <div className="meta">
                        <span className={`status ${statusClass}`}>{model.status}</span>
                        <span>Created: {fmt(model.createdAt)}</span>
                        <span>•</span>
                        <span>Valid till: {fmt(new Date(model.validTill))}</span>
                    </div>
                </div>
                <div className="right actions">
                    <NavLink className="btnGhost" to="/sales/quotes" title="Back to quotes">Back</NavLink>
                    <button className="btnGhost" onClick={copyLink} title="Copy shareable link">Copy Link</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnPrimary" onClick={sendEmail} title="Email this quote">Email Quote</button>
                    <button className="btnDisabled" title="Demo: convert disabled">Convert to Order</button>
                    <button className="btnDisabled" title="Demo: approve disabled">Mark as Accepted</button>
                    <button className="btnDisabled" title="Demo: decline disabled">Mark as Declined</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner>{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* Main column */}
                <section className="col main">
                    {/* Customer & meta */}
                    <div className="card identity">
                        <div className="customer">
                            <div className="avatar" aria-hidden="true">{model.customer.name.charAt(0)}</div>
                            <div className="who">
                                <h3>{model.customer.name}</h3>
                                <div className="muted">{model.customer.email} • {model.customer.phone}</div>
                                <div className="tags">
                                    {model.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <div>
                                <div className="k">Quote No</div>
                                <div className="v">{model.number}</div>
                            </div>
                            <div>
                                <div className="k">Sales Rep</div>
                                <div className="v">{model.salesRep.name}</div>
                            </div>
                            <div>
                                <div className="k">Currency</div>
                                <div className="v">{model.currency}</div>
                            </div>
                            <div>
                                <div className="k">Status</div>
                                <div className="v"><span className={`pill ${statusClass}`}>{model.status}</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Addresses */}
                    <div className="two">
                        <div className="card addr">
                            <h3>Billing Address</h3>
                            <p>
                                {model.billing.line1}, {model.billing.line2}<br />
                                {model.billing.city} {model.billing.zip}<br />
                                {model.billing.state}, {model.billing.country}
                            </p>
                        </div>
                        <div className="card addr">
                            <h3>Shipping Address</h3>
                            <p>
                                {model.shipping.line1}, {model.shipping.line2}<br />
                                {model.shipping.city} {model.shipping.zip}<br />
                                {model.shipping.state}, {model.shipping.country}
                            </p>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="card items">
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Item</th>
                                        <th>SKU</th>
                                        <th className="num">Qty</th>
                                        <th className="num">Unit Price</th>
                                        <th className="num">Tax</th>
                                        <th className="num">Discount</th>
                                        <th className="num">Line Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {model.items.map(row => (
                                        <tr key={row.line}>
                                            <td>{row.line}</td>
                                            <td>
                                                <div className="name">{row.name}</div>
                                                <div className="muted small">{row.desc}</div>
                                            </td>
                                            <td>{row.sku}</td>
                                            <td className="num">{row.qty}</td>
                                            <td className="num">{row.unitPrice}</td>
                                            <td className="num">{row.tax}</td>
                                            <td className="num">{row.discount}</td>
                                            <td className="num strong">{row.lineTotal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="totals">
                            <div className="row"><div>Subtotal</div><div>{model.totals.subTotal}</div></div>
                            <div className="row"><div>Discount</div><div>-{model.totals.discountTotal}</div></div>
                            <div className="row"><div>Tax</div><div>{model.totals.taxTotal}</div></div>
                            <div className="row"><div>Shipping</div><div>{model.totals.shipping}</div></div>
                            <div className="row grand"><div>Grand Total</div><div>{model.totals.grandTotal}</div></div>
                        </div>
                    </div>

                    {/* Terms & Attachments */}
                    <div className="two">
                        <div className="card">
                            <h3>Terms & Conditions</h3>
                            <ul className="terms">
                                {model.terms.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                        </div>
                        <div className="card">
                            <h3>Attachments</h3>
                            <ul className="files">
                                {model.attachments.map(a => (
                                    <li key={a.id}>
                                        <span className="file">{a.name}</span>
                                        <span className="size">{a.size}</span>
                                        <button className="btnGhost small" title="Open">Open</button>
                                        <button className="btnGhost small" title="Download">Download</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Activity */}
                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            {model.timeline.map((t, i) => (
                                <li key={i}>
                                    <span className={`dot ${t.type}`} />
                                    <div>
                                        <strong>{t.label}</strong>
                                        <div className="muted">{fmt(t.at, true)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Side column */}
                <aside className="col side">
                    <div className="card quick">
                        <h3>Quick Actions</h3>
                        <div className="qgrid">
                            <button className="btnPrimary" onClick={sendEmail} title="Email this quote">Email Quote</button>
                            <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                            <button className="btnDisabled" title="Demo: convert disabled">Convert to Order</button>
                            <button className="btnDisabled" title="Demo: edit disabled">Edit</button>
                        </div>
                    </div>

                    <div className="card facts">
                        <h3>Summary</h3>
                        <div className="list">
                            <div><span className="k">Quote</span><span className="v">{model.number}</span></div>
                            <div><span className="k">Customer</span><span className="v"><NavLink to={`/customers/${model.customer.id}`}>{model.customer.name}</NavLink></span></div>
                            <div><span className="k">Sales Rep</span><span className="v">{model.salesRep.name}</span></div>
                            <div><span className="k">Created</span><span className="v">{fmt(model.createdAt, true)}</span></div>
                            <div><span className="k">Valid Till</span><span className="v">{fmt(new Date(model.validTill))}</span></div>
                            <div><span className="k">Currency</span><span className="v">{model.currency}</span></div>
                            <div><span className="k">Status</span><span className="v"><span className={`pill ${statusClass}`}>{model.status}</span></span></div>
                        </div>
                    </div>

                    {/* Printable compact summary */}
                    <div className="card print" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="ps">
                            <div className="line"><span className="k">Quote</span><span className="v">{model.number}</span></div>
                            <div className="line"><span className="k">Customer</span><span className="v">{model.customer.name}</span></div>
                            <div className="line"><span className="k">Created</span><span className="v">{fmt(model.createdAt, true)}</span></div>
                            <div className="line"><span className="k">Valid Till</span><span className="v">{fmt(new Date(model.validTill))}</span></div>
                            <div className="line"><span className="k">Subtotal</span><span className="v">{model.totals.subTotal}</span></div>
                            <div className="line"><span className="k">Tax</span><span className="v">{model.totals.taxTotal}</span></div>
                            <div className="line"><span className="k">Grand</span><span className="v">{model.totals.grandTotal}</span></div>
                        </div>
                    </div>

                    <div className="card related">
                        <h3>Related</h3>
                        <ul>
                            <li><NavLink to="/orders" title="Open orders list">Orders</NavLink></li>
                            <li><NavLink to="/invoices" title="Open invoices list">Invoices</NavLink></li>
                            <li><NavLink to="/customers" title="Open customers list">Customers</NavLink></li>
                            <li><NavLink to="/reports/sales" title="Sales report">Sales Report</NavLink></li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <Confirm
                open={askEmail}
                title="Send quote via email?"
                message={`An email will be sent to ${model.customer.email}.`}
                onClose={() => setAskEmail(false)}
                onConfirm={confirmEmail}
                confirmText="Send Email"
            />
        </Styled.Page>
    );
};

export default SalesQuoteDetail;
