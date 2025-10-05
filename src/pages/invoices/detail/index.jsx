import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

// date helpers (consistent format)
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

// lightweight modal
const Modal = ({ open, title, onClose, children }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body">{children}</div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const InvoiceDetail = () => {
    const { invoiceId: routeId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // demo data (display-only, pre-computed totals)
    const invoice = useMemo(() => {
        const id = routeId || "INV-2031";
        const issuedAt = new Date("2025-10-04T10:35:20+05:30");
        const dueAt = new Date("2025-10-14T23:59:59+05:30");
        return {
            id,
            number: id,
            poNumber: "PO-77821",
            status: "Unpaid", // Unpaid | Paid | Overdue | Partially Paid | Draft
            currency: "INR",
            issuedAt,
            dueAt,
            createdAt: issuedAt,
            updatedAt: new Date("2025-10-04T15:38:20+05:30"),
            seller: {
                name: "Bluewave Traders Pvt. Ltd.",
                gstin: "22ABCDE1234F1Z5",
                pan: "ABCDE1234F",
                email: "billing@bluewave.example.com",
                phone: "+91 98765 10001",
                address: [
                    "2nd Floor, DLF Cyber City",
                    "Phase III, Gurugram, HR 122002",
                    "India",
                ],
                website: "https://bluewave.example.com",
            },
            customer: {
                code: "CUST-1001",
                name: "Aarav Sharma",
                company: "Aarav Retail Mart",
                email: "aarav.sharma@example.com",
                phone: "+91 98765 43210",
                gstin: "07AAACB2233C1Z9",
                address: [
                    "221B Baker Street, Khan Market",
                    "New Delhi 110003, DL",
                    "India",
                ],
                shipping: [
                    "Plot 14, Industrial Area, Phase 2",
                    "Gurugram 122002, HR",
                    "India",
                ],
            },
            tags: ["priority", "net-10", "retail"],
            // items with display-only totals (no calculation here)
            items: [
                { id: "MED-AMOX-500", name: "Amoxicillin 500mg Capsules", hsn: "3004", qty: 2, unit: "Box (10x10)", rate: 1250.00, tax: "12%", amount: 2500.00 },
                { id: "MED-PARA-650", name: "Paracetamol 650mg Tablets", hsn: "3004", qty: 3, unit: "Box (10x15)", rate: 780.00, tax: "12%", amount: 2340.00 },
                { id: "MED-VITD3", name: "Vitamin D3 60k IU Softgels", hsn: "3004", qty: 1, unit: "Pack (8)", rate: 540.00, tax: "5%", amount: 540.00 },
            ],
            summary: {
                notes: "Thank you for your business. For NEFT, use virtual account shared on first invoice.",
                terms: "Payment due within 10 days of issue. Late fee 1.5%/month post due date. Goods once sold are not returnable unless damaged on delivery.",
                // display-only totals
                subtotal: 5380.00,
                discount: 180.00,
                shipping: 120.00,
                tax: 534.00,
                grandTotal: 5854.00,
                paid: 0.00,
                due: 5854.00,
                // quick split for reference text (not used for math)
                taxBreakup: [
                    { label: "CGST (6%)", amount: 267.00 },
                    { label: "SGST (6%)", amount: 267.00 },
                ],
            },
            payments: [
                // empty => unpaid display
            ],
            activity: [
                { t: "Created invoice", at: issuedAt },
                { t: "Viewed by customer", at: new Date("2025-10-04T12:02:11+05:30") },
                { t: "Reminder scheduled", at: new Date("2025-10-07T09:00:00+05:30") },
            ],
            attachments: [
                { name: `${id}.pdf`, size: "122 KB", href: "/sample/invoice.pdf" },
                { name: "PO-77821.pdf", size: "88 KB", href: "/sample/po.pdf" },
            ],
        };
    }, [routeId]);

    const [banner, setBanner] = useState("");     // non-blocking status line
    const [sendOpen, setSendOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);

    const copyLink = async () => {
        const url = window.location.href;
        try {
            await navigator.clipboard.writeText(url);
            setBanner(`Link copied • ${fmt(new Date(), true)}`);
            setTimeout(() => setBanner(""), 3000);
        } catch {
            setBanner(`Copy failed • ${fmt(new Date(), true)}`);
            setTimeout(() => setBanner(""), 3000);
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

    const statusTone = (s) => {
        switch (s) {
            case "Paid": return "success";
            case "Overdue": return "danger";
            case "Partially Paid": return "warning";
            case "Draft": return "muted";
            default: return "info"; // Unpaid
        }
    };

    return (
        <Styled.Page>
            {/* print CSS (scoped to #search-print-area as requested) */}
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
                    <h1>Invoice {invoice.number}</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/invoices">Invoices</NavLink>
                        <span>/</span>
                        <span className="current">{invoice.number}</span>
                    </nav>
                    <div className="meta">
                        <Styled.Pill tone={statusTone(invoice.status)}>{invoice.status}</Styled.Pill>
                        <span className="sep">•</span>
                        <span>Issued: {fmt(invoice.issuedAt, true)}</span>
                        <span className="sep">•</span>
                        <span>Due: {fmt(invoice.dueAt)}</span>
                        <span className="sep">•</span>
                        <span>Updated: {fmt(invoice.updatedAt, true)}</span>
                    </div>
                </div>

                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate("/invoices")} title="Back to list">Back</button>
                    <NavLink to={`/invoices/${invoice.id}/edit`} className="btnGhost" title="Edit invoice">Edit</NavLink>
                    <button className="btnPrimary" onClick={printSection} title="Print">Print</button>
                    <a className="btnGhost" href="/sample/invoice.pdf" download title="Download PDF">Download</a>
                    <button className="btnGhost" onClick={copyLink} title="Copy share link">Share</button>
                    <button className="btnPrimary" onClick={() => setSendOpen(true)} title="Send invoice">Send</button>
                    <button className="btnGhost" onClick={() => setMoreOpen(true)} title="More">More</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* MAIN */}
                <section className="col main">
                    {/* Printable region */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <Styled.PrintHeader>
                            <div className="brand">
                                <div className="logo" aria-hidden="true">BW</div>
                                <div className="bmeta">
                                    <h3>{invoice.seller.name}</h3>
                                    <div className="muted">{invoice.seller.website}</div>
                                </div>
                            </div>
                            <div className="invBlock">
                                <div className="num">Invoice</div>
                                <div className="big">{invoice.number}</div>
                                <div className="kv">
                                    <span>PO #</span><strong>{invoice.poNumber}</strong>
                                </div>
                            </div>
                        </Styled.PrintHeader>

                        <Styled.Addresses>
                            <div>
                                <h4>Bill From</h4>
                                <div className="name">{invoice.seller.name}</div>
                                {invoice.seller.address.map((l, i) => <div key={i}>{l}</div>)}
                                <div className="muted">GSTIN: {invoice.seller.gstin} • PAN: {invoice.seller.pan}</div>
                                <div className="muted">{invoice.seller.email} • {invoice.seller.phone}</div>
                            </div>
                            <div>
                                <h4>Bill To</h4>
                                <div className="name">{invoice.customer.company}</div>
                                <div className="muted">{invoice.customer.name} • {invoice.customer.email}</div>
                                {invoice.customer.address.map((l, i) => <div key={i}>{l}</div>)}
                                <div className="muted">GSTIN: {invoice.customer.gstin}</div>
                            </div>
                            <div>
                                <h4>Ship To</h4>
                                {invoice.customer.shipping.map((l, i) => <div key={i}>{l}</div>)}
                                <div className="muted">{invoice.customer.phone}</div>
                            </div>
                            <div className="dates">
                                <h4>Dates</h4>
                                <div className="kv"><span>Issued</span><strong>{fmt(invoice.issuedAt)}</strong></div>
                                <div className="kv"><span>Due</span><strong>{fmt(invoice.dueAt)}</strong></div>
                                <div className="kv"><span>Time</span><strong>{onlyTime(invoice.issuedAt)}</strong></div>
                            </div>
                        </Styled.Addresses>

                        <Styled.TableWrap>
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ width: "38%" }}>Item</th>
                                        <th>HSN</th>
                                        <th>Qty</th>
                                        <th>Unit</th>
                                        <th>Rate ({invoice.currency})</th>
                                        <th>Tax</th>
                                        <th style={{ textAlign: "right" }}>Amount ({invoice.currency})</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoice.items.map((it) => (
                                        <tr key={it.id}>
                                            <td>
                                                <div className="itname">{it.name}</div>
                                                <div className="muted">{it.id}</div>
                                            </td>
                                            <td>{it.hsn}</td>
                                            <td>{it.qty}</td>
                                            <td>{it.unit}</td>
                                            <td>{it.rate.toFixed(2)}</td>
                                            <td>{it.tax}</td>
                                            <td className="right">{it.amount.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Styled.TableWrap>

                        <Styled.Summary>
                            <div className="left">
                                <div className="badges">
                                    {invoice.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                                <div className="note">
                                    <h5>Notes</h5>
                                    <p>{invoice.summary.notes}</p>
                                </div>
                                <div className="terms">
                                    <h5>Terms</h5>
                                    <p>{invoice.summary.terms}</p>
                                </div>
                            </div>

                            <div className="right">
                                <div className="kv"><span>Subtotal</span><strong>{invoice.summary.subtotal.toFixed(2)}</strong></div>
                                <div className="kv"><span>Discount</span><strong>-{invoice.summary.discount.toFixed(2)}</strong></div>
                                <div className="kv"><span>Shipping</span><strong>{invoice.summary.shipping.toFixed(2)}</strong></div>
                                <div className="kv"><span>Tax</span><strong>{invoice.summary.tax.toFixed(2)}</strong></div>
                                <div className="taxsplit">
                                    {invoice.summary.taxBreakup.map((t) => (
                                        <div key={t.label} className="kv tiny">
                                            <span>{t.label}</span><strong>{t.amount.toFixed(2)}</strong>
                                        </div>
                                    ))}
                                </div>
                                <div className="divider" />
                                <div className="kv total"><span>Total</span><strong>{invoice.summary.grandTotal.toFixed(2)}</strong></div>
                                <div className="kv"><span>Paid</span><strong>{invoice.summary.paid.toFixed(2)}</strong></div>
                                <div className="kv due"><span>Due</span><strong>{invoice.summary.due.toFixed(2)}</strong></div>
                            </div>
                        </Styled.Summary>
                    </div>

                    <div className="card">
                        <Styled.SectionHeader>
                            <h3>Timeline</h3>
                            <div className="hint">All times local • {fmt(new Date(), true)}</div>
                        </Styled.SectionHeader>
                        <Styled.Timeline>
                            {invoice.activity.map((e, i) => (
                                <li key={i}>
                                    <span className="dot" />
                                    <div>
                                        <strong>{e.t}</strong>
                                        <div className="muted">{fmt(e.at, true)}</div>
                                    </div>
                                </li>
                            ))}
                            {invoice.payments.length === 0 ? (
                                <li className="empty">
                                    <div className="muted">No payments recorded for this invoice.</div>
                                </li>
                            ) : null}
                        </Styled.Timeline>
                    </div>
                </section>

                {/* SIDE */}
                <aside className="col side">
                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/invoices">All Invoices</NavLink></li>
                            <li><NavLink to={`/invoices/${invoice.id}/edit`}>Edit</NavLink></li>
                            <li><NavLink to="/customers">Customers</NavLink></li>
                            <li><NavLink to="/reports/finance">Finance Report</NavLink></li>
                            <li><NavLink to="/receipts">Receipts</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Payment Window</h3>
                        <div className="kvgrid">
                            <div><span className="k">Due Date</span><span className="v">{fmt(invoice.dueAt)}</span></div>
                            <div><span className="k">Preferred</span><span className="v">NEFT / UPI</span></div>
                            <div><span className="k">Support</span><span className="v">{invoice.seller.email}</span></div>
                            <div><span className="k">Best Time</span><span className="v">{onlyTime(new Date())}</span></div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Attachments</h3>
                        <ul className="files">
                            {invoice.attachments.map((a) => (
                                <li key={a.name}>
                                    <a href={a.href} download>{a.name}</a>
                                    <span className="muted">{a.size}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Customer</h3>
                        <div className="cust">
                            <div className="name">{invoice.customer.company}</div>
                            <div className="muted">{invoice.customer.name} • {invoice.customer.email}</div>
                            <div className="muted">{invoice.customer.phone}</div>
                            <div className="addr">{invoice.customer.address.join(", ")}</div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            {/* Send invoice modal (demo) */}
            <Modal open={sendOpen} title="Send Invoice" onClose={() => setSendOpen(false)}>
                <p>This is a display-only demo. Configure email/SMS in a real integration.</p>
                <div className="mini muted" style={{ marginTop: 8 }}>Last attempted: none</div>
            </Modal>

            {/* More modal */}
            <Modal open={moreOpen} title="More Actions" onClose={() => setMoreOpen(false)}>
                <ul className="sheet">
                    <li><button className="linklike" onClick={copyLink}>Copy public link</button></li>
                    <li><a className="linklike" href="/sample/invoice.pdf" download>Download PDF</a></li>
                    <li><button className="linklike" onClick={printSection}>Print invoice</button></li>
                </ul>
            </Modal>
        </Styled.Page>
    );
};

export default InvoiceDetail;
