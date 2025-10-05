import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---- date/time helpers (single source of truth) ---- */
const pad = (n) => String(n).padStart(2, "0");
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${DOW[x.getDay()]} ${MON[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};
const money = (n) => `₹${Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/* simple modal */
const Dialog = ({ open, title, message, onClose, actions }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    {(actions || []).map((a) =>
                        <button key={a.label} className={a.kind || "btnPrimary"} onClick={a.onClick}>{a.label}</button>
                    )}
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const OrderInvoicePage = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // demo payload (display-only; values pre-computed)
    const data = useMemo(() => {
        const now = new Date();
        const due = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        return {
            orderId: orderId || "ORD-3001",
            invoiceId: "INV-2031",
            status: "Unpaid", // Unpaid | Partially Paid | Paid | Overdue | Cancelled
            issuedAt: now,
            dueAt: due,
            channel: "Online",
            currency: "INR",
            seller: {
                name: "Bluewave Traders Pvt. Ltd.",
                gstin: "22ABCDE1234F1Z5",
                pan: "ABCDE1234F",
                address: ["17/3, NH-8", "DLF Phase 2", "Gurugram - 122002", "Haryana, India"],
                email: "billing@bluewave.example.com",
                phone: "+91 11 4455 7788",
                placeOfSupply: "Haryana",
            },
            buyer: {
                code: "CUST-1001",
                name: "Aarav Sharma",
                company: "Aarav Retail",
                gstin: "29AABCU9603R1ZV",
                address: ["221B Baker Street", "Khan Market", "New Delhi - 110003", "India"],
                email: "aarav.sharma@example.com",
                phone: "+91 98765 43210",
                shipping: ["Plot 14, Industrial Area", "Phase 2", "Gurugram - 122002", "Haryana, India"],
            },
            items: [
                {
                    lineNo: 1, sku: "MED-AMOX-500", name: "Amoxicillin 500mg Capsule",
                    hsn: "3004", qty: 2, uom: "Box", rate: 120.0, discount: 0.0, taxPct: 12,
                    taxAmt: 28.80, lineTotal: 268.80,
                },
                {
                    lineNo: 2, sku: "MED-PARA-650", name: "Paracetamol 650mg Tablet",
                    hsn: "3004", qty: 5, uom: "Strip", rate: 35.0, discount: 5.0, taxPct: 12,
                    taxAmt: 18.60, lineTotal: 198.60,
                },
                {
                    lineNo: 3, sku: "MED-ORS-20", name: "ORS Powder 20.5g Sachet",
                    hsn: "2106", qty: 10, uom: "Sachet", rate: 9.5, discount: 0.0, taxPct: 5,
                    taxAmt: 4.75, lineTotal: 99.75,
                },
            ],
            summary: {
                subTotal: 533.00,
                discountTotal: 5.00,
                taxBreakup: [
                    { label: "CGST", pct: 9, amount: 30.00 },
                    { label: "SGST", pct: 9, amount: 30.00 },
                    { label: "IGST", pct: 0, amount: 0.00 },
                ],
                roundOff: 0.05,
                grandTotal: 598.40,
                amountInWords: "Rupees Five Hundred Ninety Eight and Forty Paise Only",
            },
            payments: [
                { id: "PMT-7001", mode: "UPI", ref: "UPI-AXIS-88921", at: now, amount: 0.00 }, // demo Unpaid
            ],
            notes: "Thank you for your business. Medicines once sold cannot be returned without authorization.",
            terms: [
                "Payment due within 7 days.",
                "All disputes are subject to Gurugram jurisdiction.",
                "Prices inclusive of applicable GST as itemized.",
            ],
            bank: {
                name: "HDFC Bank", branch: "DLF Phase 2",
                account: "XXXXXXXX1234", ifsc: "HDFC0000123",
                upi: "bluewave@hdfcbank",
            },
            meta: {
                createdBy: "ashish",
                createdAt: now,
                lastPrintedAt: null,
            }
        };
    }, [orderId]);

    const [demoMsg, setDemoMsg] = useState("");

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setDemoMsg(`Link copied at ${fmtTime(new Date())}`);
        } catch {
            setDemoMsg("Could not copy link");
        }
    };

    const downloadJSON = () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${data.invoiceId}.json`;
        a.click();
        URL.revokeObjectURL(a.href);
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

    const openDemoDialog = (msg) => setDemoMsg(msg);

    const breadcrumbs = (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <NavLink to="/orders">Orders</NavLink>
            <span>/</span>
            <NavLink to={`/orders/${data.orderId}`}>{data.orderId}</NavLink>
            <span>/</span>
            <span className="current">Invoice</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* exact print CSS you asked for */}
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
                <div className="l">
                    <h1>Tax Invoice</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Invoice: <strong>{data.invoiceId}</strong></span>
                        <span>•</span>
                        <span>Order: <NavLink to={`/orders/${data.orderId}`}>{data.orderId}</NavLink></span>
                        <span>•</span>
                        <span>Issued: {fmtDateTime(data.issuedAt)}</span>
                        <span>•</span>
                        <span>Due: {fmtDate(data.dueAt)}</span>
                    </div>
                </div>
                <div className="r">
                    <span className={`chip ${data.status.toLowerCase().replace(/\s/g, '-')}`}>{data.status}</span>
                    <div className="actions">
                        <button className="btnGhost" onClick={() => navigate(-1)}>Back</button>
                        <button className="btnGhost" onClick={copyLink} title="Copy link">Copy Link</button>
                        <button className="btnPrimary" onClick={printSection} title="Print">Print</button>
                        <button className="btnPrimary" onClick={downloadJSON} title="Export JSON">Export</button>
                        <button className="btnGhost" onClick={() => openDemoDialog("Email sending is disabled in demo.")} title="Email invoice">Email</button>
                        <button className="btnDanger" onClick={() => openDemoDialog("Void action is disabled in demo.")} title="Void invoice">Void</button>
                    </div>
                </div>
            </Styled.Header>

            {demoMsg ? <Styled.Banner>{demoMsg}</Styled.Banner> : null}

            <Styled.Layout>
                {/* Printable block */}
                <section className="card printable" id="search-print-area" ref={printRef}>
                    <div className="grid-top">
                        <div className="org">
                            <div className="logo">BW</div>
                            <div className="org-meta">
                                <h3>{data.seller.name}</h3>
                                <div className="muted">{data.seller.address.join(", ")}</div>
                                <div className="muted">
                                    <span>GSTIN: {data.seller.gstin}</span> • <span>PAN: {data.seller.pan}</span>
                                </div>
                                <div className="muted">{data.seller.email} • {data.seller.phone}</div>
                            </div>
                        </div>

                        <div className="inv-meta">
                            <table>
                                <tbody>
                                    <tr><th>Invoice No.</th><td>{data.invoiceId}</td></tr>
                                    <tr><th>Invoice Date</th><td>{fmtDate(data.issuedAt)}</td></tr>
                                    <tr><th>Order No.</th><td>{data.orderId}</td></tr>
                                    <tr><th>Channel</th><td>{data.channel}</td></tr>
                                    <tr><th>Place of Supply</th><td>{data.seller.placeOfSupply}</td></tr>
                                    <tr><th>Currency</th><td>{data.currency}</td></tr>
                                </tbody>
                            </table>
                            <div className="barcode" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="grid-party">
                        <div className="party">
                            <h4>Bill To</h4>
                            <div className="name">{data.buyer.company}</div>
                            <div className="muted">{data.buyer.name}</div>
                            <div className="muted">{data.buyer.address.join(", ")}</div>
                            <div className="muted">GSTIN: {data.buyer.gstin}</div>
                            <div className="muted">{data.buyer.email} • {data.buyer.phone}</div>
                        </div>
                        <div className="party">
                            <h4>Ship To</h4>
                            <div className="name">{data.buyer.company}</div>
                            <div className="muted">{data.buyer.shipping.join(", ")}</div>
                        </div>
                        <div className="party pay">
                            <h4>Pay To</h4>
                            <div className="muted">{data.bank.name} – {data.bank.branch}</div>
                            <div className="muted">A/C: {data.bank.account} • IFSC: {data.bank.ifsc}</div>
                            <div className="muted">UPI: {data.bank.upi}</div>
                            <div className="qr" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="items">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th style={{ minWidth: 220 }}>Item</th>
                                    <th>HSN</th>
                                    <th>Qty</th>
                                    <th>UoM</th>
                                    <th>Rate</th>
                                    <th>Disc</th>
                                    <th>Tax %</th>
                                    <th>Tax Amt</th>
                                    <th style={{ textAlign: "right" }}>Line Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.items.map((it) => (
                                    <tr key={it.lineNo}>
                                        <td>{it.lineNo}</td>
                                        <td>
                                            <div className="itm">{it.name}</div>
                                            <div className="muted mono">{it.sku}</div>
                                        </td>
                                        <td className="mono">{it.hsn}</td>
                                        <td className="mono">{it.qty}</td>
                                        <td>{it.uom}</td>
                                        <td className="mono">{money(it.rate)}</td>
                                        <td className="mono">{money(it.discount)}</td>
                                        <td className="mono">{it.taxPct}%</td>
                                        <td className="mono">{money(it.taxAmt)}</td>
                                        <td className="mono ta-r">{money(it.lineTotal)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid-summary">
                        <div className="left">
                            <div className="box">
                                <div className="row"><div className="k">Subtotal</div><div className="v">{money(data.summary.subTotal)}</div></div>
                                <div className="row"><div className="k">Discount</div><div className="v">{money(data.summary.discountTotal)}</div></div>
                                {data.summary.taxBreakup.map((t) => (
                                    <div className="row" key={t.label}>
                                        <div className="k">{t.label} ({t.pct}%)</div>
                                        <div className="v">{money(t.amount)}</div>
                                    </div>
                                ))}
                                <div className="row"><div className="k">Round Off</div><div className="v">{money(data.summary.roundOff)}</div></div>
                                <div className="row total"><div className="k">Grand Total</div><div className="v">{money(data.summary.grandTotal)}</div></div>
                            </div>

                            <div className="words">
                                Amount in words: <strong>{data.summary.amountInWords}</strong>
                            </div>
                        </div>

                        <div className="right">
                            <div className="box mini">
                                <div className="hdr">Payment Summary</div>
                                <ul className="paylist">
                                    {data.payments.map((p) => (
                                        <li key={p.id}>
                                            <div>
                                                <div className="mono">{p.id}</div>
                                                <div className="muted">{p.mode} • {p.ref || "—"}</div>
                                            </div>
                                            <div className="amt mono">{money(p.amount)}</div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="due">
                                    <span>Due Date</span>
                                    <strong>{fmtDate(data.dueAt)}</strong>
                                </div>
                            </div>

                            <div className="box mini">
                                <div className="hdr">Meta</div>
                                <div className="kv"><span>Created by</span><span className="mono">{data.meta.createdBy}</span></div>
                                <div className="kv"><span>Created at</span><span>{fmtDateTime(data.meta.createdAt)}</span></div>
                                <div className="kv"><span>Last printed</span><span>{data.meta.lastPrintedAt ? fmtDateTime(data.meta.lastPrintedAt) : "—"}</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="notes-terms">
                        <div className="blk">
                            <h4>Notes</h4>
                            <p>{data.notes}</p>
                        </div>
                        <div className="blk">
                            <h4>Terms</h4>
                            <ul>{data.terms.map((t, i) => <li key={i}>{t}</li>)}</ul>
                        </div>
                        <div className="blk sign">
                            <h4>Authorized Signatory</h4>
                            <div className="signbox" />
                            <div className="muted">For {data.seller.name}</div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="muted">
                            This is a computer-generated invoice. No signature required.
                        </div>
                    </div>
                </section>

                {/* Right rail widgets */}
                <aside className="rail">
                    <div className="card rail-card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to={`/orders/${data.orderId}`}>Order Detail</NavLink></li>
                            <li><NavLink to={`/invoices/${data.invoiceId}`}>Open Invoice Page</NavLink></li>
                            <li><NavLink to="/customers">Customer Directory</NavLink></li>
                            <li><NavLink to="/reports/sales">Sales Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card rail-card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li><span className="dot" /><div><strong>Invoice generated</strong><div className="muted">{fmtDateTime(data.issuedAt)}</div></div></li>
                            <li><span className="dot" /><div><strong>Order confirmed</strong><div className="muted">{fmtDateTime(data.issuedAt)}</div></div></li>
                        </ul>
                    </div>

                    <div className="card rail-card">
                        <h3>Support</h3>
                        <p className="muted">Need a correction? Reach billing support with the invoice number.</p>
                        <button className="btnGhost" onClick={() => openDemoDialog("Support ticketing is disabled in demo.")}>Raise Ticket</button>
                    </div>
                </aside>
            </Styled.Layout>

            <Dialog
                open={!!demoMsg}
                title="Demo"
                message={demoMsg}
                onClose={() => setDemoMsg("")}
                actions={[{ label: "Close", onClick: () => setDemoMsg(""), kind: "btnPrimary" }]}
            />
        </Styled.Page>
    );
};

export default OrderInvoicePage;
