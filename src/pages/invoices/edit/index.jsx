import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ----------------------------- date utils ----------------------------- */
const fmtDate = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    return `${days[x.getDay()]} ${mons[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

/* --------------------------- tiny confirm modal --------------------------- */
const Confirm = ({ open, title, message, onClose, onConfirm, confirmText = "Confirm", danger }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Cancel</button>
                    <button className={danger ? "btnDanger" : "btnPrimary"} onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const InvoiceEdit = () => {
    const { invoiceId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // display-only demo flag
    const DEMO = true;

    // demo fixtures (no calculations — all values pre-computed)
    const now = useMemo(() => new Date("2025-10-04T12:05:33+05:30"), []);
    const model = useMemo(() => ({
        id: invoiceId || "INV-2031",
        number: invoiceId || "INV-2031",
        status: "Sent", // Draft | Sent | Partially Paid | Paid | Overdue | Cancelled
        createdAt: "2025-10-02T09:30:05+05:30",
        updatedAt: "2025-10-04T11:58:20+05:30",
        issueDate: "2025-10-03",
        dueDate: "2025-10-15",
        reference: "SO-3456",
        customer: {
            id: "CUST-1001",
            name: "Aarav Sharma",
            company: "Bluewave Traders",
            email: "billing@bluewave.example.com",
            phone: "+91 98765 43210",
            gstin: "22ABCDE1234F1Z5",
            pan: "ABCDE1234F",
            billing: {
                line1: "221B Baker Street, Khan Market",
                city: "New Delhi", state: "DL", zip: "110003", country: "India"
            },
            shipping: {
                line1: "Plot 14, Industrial Area, Phase 2",
                city: "Gurugram", state: "HR", zip: "122002", country: "India"
            },
            tags: ["priority", "wholesale", "north"]
        },
        seller: {
            name: "Nova Commerce Pvt Ltd",
            email: "accounts@nova.example.com",
            phone: "+91 99999 11111",
            gstin: "07AAACN1234M1Z1",
            address: "7th Floor, Tower-B, DLF Cybercity, Gurugram 122002, IN"
        },
        currency: "₹",
        items: [
            { id: "IT-01", sku: "MED-AMOX-500", name: "Amoxicillin 500mg Capsule", hsn: "3003", batch: "BCH-7F9A", exp: "2026-02", qty: 10, unit: "strip", rate: 120.00, discount: 20.00, taxLabel: "GST 18%", taxAmount: 180.00, amount: 1_360.00 },
            { id: "IT-02", sku: "MED-PARA-650", name: "Paracetamol 650mg Tablet", hsn: "3004", batch: "BCH-9Z2K", exp: "2027-09", qty: 40, unit: "strip", rate: 95.00, discount: 0.00, taxLabel: "GST 12%", taxAmount: 456.00, amount: 3_800.00 },
            { id: "IT-03", sku: "MED-ORS-200", name: "ORS Sachet 200ml", hsn: "3004", batch: "BCH-3Q1M", exp: "2026-12", qty: 100, unit: "pc", rate: 28.50, discount: 50.00, taxLabel: "GST 5%", taxAmount: 142.50, amount: 2_900.00 }
        ],
        charges: {
            shipping: 250.00,
            packing: 0.00,
            other: 0.00
        },
        summary: {
            subTotal: 7_750.00,
            discountTotal: 70.00,
            taxable: 7_680.00,
            cgst: 799.50,
            sgst: 799.50,
            igst: 0.00,
            roundOff: -0.00,
            grandTotal: 9_529.00
        },
        payments: [
            { id: "PMT-1098", date: "2025-10-03T14:08:12+05:30", amount: 5_000.00, mode: "UPI", ref: "TXN-9981", note: "Advance" },
            { id: "PMT-1107", date: "2025-10-04T10:11:39+05:30", amount: 2_500.00, mode: "Bank Transfer", ref: "NEFT-AXIS-3391", note: "Part payment" }
        ],
        terms: [
            "Goods once sold will not be taken back.",
            "Payment due within 12 days from the date of invoice.",
            "Subject to Gurugram jurisdiction."
        ],
        notes: "Please verify batch/expiry on receipt. For issues, write to support@nova.example.com.",
        attachments: [
            { id: "F-01", name: "PO-SO-3456.pdf", size: "142 KB" },
            { id: "F-02", name: "Delivery-Challan-INV-2031.pdf", size: "96 KB" }
        ],
        qrText: "INV-2031 | Bluewave Traders | ₹9529.00",
    }), [invoiceId, now]);

    const [showDelete, setShowDelete] = useState(false);
    const [banner, setBanner] = useState("");

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3500);
        return () => clearTimeout(t);
    }, [banner]);

    const onCancel = () => navigate(`/invoices/${model.id}`);
    const onSave = () => {
        if (DEMO) { setBanner("Demo mode: editing is disabled"); return; }
    };
    const onSaveView = () => {
        if (DEMO) { setBanner("Demo mode: editing is disabled"); return; }
    };
    const onDelete = () => setShowDelete(true);
    const confirmDelete = () => {
        setShowDelete(false);
        if (DEMO) { setBanner("Demo mode: delete is disabled"); return; }
        navigate("/invoices");
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

    const crumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/invoices">Invoices</NavLink>
            <span>/</span>
            <NavLink to={`/invoices/${model.id}`}>{model.id}</NavLink>
            <span>/</span>
            <span className="current">Edit</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print-only rules (your global snippet) */}
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
                    <div className="titleRow">
                        <h1>Invoice</h1>
                        <span className={`status ${model.status.toLowerCase().replace(/\s+/g, "-")}`}>{model.status}</span>
                    </div>
                    {crumbs}
                    <div className="meta">
                        <span>Created: {fmtDate(model.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmtDateTime(model.updatedAt)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={onCancel} title="Back to invoice details">Cancel</button>
                    <button className="btnPrimary" disabled={DEMO} onClick={onSave} title={DEMO ? "Demo mode" : "Save changes"}>Save</button>
                    <button className="btnPrimary" disabled={DEMO} onClick={onSaveView} title={DEMO ? "Demo mode" : "Save and view"}>Save &amp; View</button>
                    <button className="btnDanger" disabled={DEMO} onClick={onDelete} title={DEMO ? "Demo mode" : "Delete invoice"}>Delete</button>
                    <button className="btnGhost" onClick={printSection} title="Print">Print</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* Main column */}
                <section className="col main card">
                    {/* Bill parties */}
                    <div className="partyRow">
                        <div className="party">
                            <h3>Bill To</h3>
                            <div className="name">{model.customer.name}</div>
                            <div className="comp">{model.customer.company}</div>
                            <div className="addr">{model.customer.billing.line1}, {model.customer.billing.city}-{model.customer.billing.zip}, {model.customer.billing.state}, {model.customer.billing.country}</div>
                            <div className="metaLine">
                                <span>GSTIN: {model.customer.gstin}</span>
                                <span>•</span>
                                <span>PAN: {model.customer.pan}</span>
                            </div>
                            <div className="metaLine">
                                <a href={`mailto:${model.customer.email}`}>{model.customer.email}</a>
                                <span>•</span>
                                <a href={`tel:${model.customer.phone}`}>{model.customer.phone}</a>
                            </div>
                            <div className="chips">
                                {model.customer.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                            </div>
                            <div className="links">
                                <NavLink to={`/customers/${model.customer.id}`}>View customer</NavLink>
                            </div>
                        </div>

                        <div className="party">
                            <h3>From</h3>
                            <div className="name">{model.seller.name}</div>
                            <div className="addr">{model.seller.address}</div>
                            <div className="metaLine">
                                <span>GSTIN: {model.seller.gstin}</span>
                            </div>
                            <div className="metaLine">
                                <a href={`mailto:${model.seller.email}`}>{model.seller.email}</a>
                                <span>•</span>
                                <a href={`tel:${model.seller.phone}`}>{model.seller.phone}</a>
                            </div>
                        </div>

                        <div className="metaCard">
                            <div className="row">
                                <div><span className="k">Invoice #</span><span className="v">{model.number}</span></div>
                                <div><span className="k">Reference</span><span className="v">{model.reference}</span></div>
                                <div><span className="k">Issue Date</span><span className="v">{fmtDate(model.issueDate)}</span></div>
                                <div><span className="k">Due Date</span><span className="v">{fmtDate(model.dueDate)}</span></div>
                                <div><span className="k">Currency</span><span className="v">{model.currency}</span></div>
                            </div>
                            <div className="qrArea" aria-label="QR placeholder">
                                <div className="qr"></div>
                                <div className="qrHint">Scan to view invoice</div>
                            </div>
                        </div>
                    </div>

                    {/* Items table (display) */}
                    <div className="tableWrap">
                        <div className="tableHeader">
                            <h3>Items</h3>
                            <div className="legend">
                                <span className="badge">Display-only</span>
                            </div>
                        </div>
                        <div className="scroll">
                            <table className="items">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>SKU</th>
                                        <th>Description</th>
                                        <th>HSN</th>
                                        <th>Batch</th>
                                        <th>Expiry</th>
                                        <th className="num">Qty</th>
                                        <th>Unit</th>
                                        <th className="num">Rate</th>
                                        <th className="num">Discount</th>
                                        <th>Tax</th>
                                        <th className="num">Tax Amt</th>
                                        <th className="num">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {model.items.map((it, idx) => (
                                        <tr key={it.id}>
                                            <td>{idx + 1}</td>
                                            <td className="mono">{it.sku}</td>
                                            <td>{it.name}</td>
                                            <td className="mono">{it.hsn}</td>
                                            <td className="mono">{it.batch}</td>
                                            <td className="mono">{it.exp}</td>
                                            <td className="num">{it.qty}</td>
                                            <td className="mono">{it.unit}</td>
                                            <td className="num">{model.currency}{it.rate.toFixed(2)}</td>
                                            <td className="num">{model.currency}{it.discount.toFixed(2)}</td>
                                            <td>{it.taxLabel}</td>
                                            <td className="num">{model.currency}{it.taxAmount.toFixed(2)}</td>
                                            <td className="num">{model.currency}{it.amount.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* terms & notes */}
                    <div className="blocks">
                        <div className="block card">
                            <h3>Terms</h3>
                            <ul className="terms">
                                {model.terms.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                        </div>
                        <div className="block card">
                            <h3>Notes</h3>
                            <p>{model.notes}</p>
                        </div>
                    </div>

                    {/* attachments */}
                    <div className="attachments card">
                        <h3>Attachments</h3>
                        <ul className="files">
                            {model.attachments.map(f => (
                                <li key={f.id}>
                                    <span className="file">{f.name}</span>
                                    <span className="size">{f.size}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* printable summary area */}
                    <div className="card printCard" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="grid">
                            <div><span className="k">Invoice</span><span className="v">{model.number}</span></div>
                            <div><span className="k">Issue</span><span className="v">{fmtDate(model.issueDate)}</span></div>
                            <div><span className="k">Due</span><span className="v">{fmtDate(model.dueDate)}</span></div>
                            <div><span className="k">Customer</span><span className="v">{model.customer.company}</span></div>
                            <div><span className="k">Total</span><span className="v">{model.currency}{model.summary.grandTotal.toFixed(2)}</span></div>
                            <div><span className="k">Status</span><span className="v">{model.status}</span></div>
                        </div>
                    </div>
                </section>

                {/* Side column */}
                <aside className="col side">
                    <div className="card totals">
                        <h3>Totals</h3>
                        <div className="rows">
                            <div><span className="k">Subtotal</span><span className="v">{model.currency}{model.summary.subTotal.toFixed(2)}</span></div>
                            <div><span className="k">Discount</span><span className="v">− {model.currency}{model.summary.discountTotal.toFixed(2)}</span></div>
                            <div><span className="k">Taxable</span><span className="v">{model.currency}{model.summary.taxable.toFixed(2)}</span></div>
                            <hr />
                            <div><span className="k">CGST</span><span className="v">{model.currency}{model.summary.cgst.toFixed(2)}</span></div>
                            <div><span className="k">SGST</span><span className="v">{model.currency}{model.summary.sgst.toFixed(2)}</span></div>
                            <div><span className="k">IGST</span><span className="v">{model.currency}{model.summary.igst.toFixed(2)}</span></div>
                            <div><span className="k">Shipping</span><span className="v">{model.currency}{model.charges.shipping.toFixed(2)}</span></div>
                            <div><span className="k">Round Off</span><span className="v">{model.currency}{model.summary.roundOff.toFixed(2)}</span></div>
                            <div className="grand"><span className="k">Grand Total</span><span className="v">{model.currency}{model.summary.grandTotal.toFixed(2)}</span></div>
                        </div>
                    </div>

                    <div className="card payments">
                        <h3>Payments</h3>
                        <ul className="plist">
                            {model.payments.map(p => (
                                <li key={p.id}>
                                    <div className="row1">
                                        <strong>{p.id}</strong>
                                        <span className="amt">{model.currency}{p.amount.toFixed(2)}</span>
                                    </div>
                                    <div className="row2">
                                        <span>{fmtDateTime(p.date)}</span>
                                        <span>•</span>
                                        <span>{p.mode}</span>
                                        <span>•</span>
                                        <span className="mono">{p.ref}</span>
                                    </div>
                                    <div className="row3 muted">{p.note}</div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card info">
                        <h3>Document Info</h3>
                        <div className="grid">
                            <div><span className="k">Created</span><span className="v">{fmtDateTime(model.createdAt)}</span></div>
                            <div><span className="k">Updated</span><span className="v">{fmtDateTime(model.updatedAt)}</span></div>
                            <div><span className="k">Customer</span><span className="v"><NavLink to={`/customers/${model.customer.id}`}>{model.customer.id}</NavLink></span></div>
                            <div><span className="k">Ref</span><span className="v">{model.reference}</span></div>
                        </div>
                    </div>

                    <div className="card signatures">
                        <h3>Signatures</h3>
                        <div className="sigGrid">
                            <div className="sigBox"><div className="line" /><div className="cap">Authorized Signatory</div></div>
                            <div className="sigBox"><div className="line" /><div className="cap">Customer</div></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <Confirm
                open={showDelete}
                title="Delete invoice?"
                message={`This will permanently remove ${model.number}.`}
                danger
                confirmText="Delete"
                onClose={() => setShowDelete(false)}
                onConfirm={confirmDelete}
            />
        </Styled.Page>
    );
};

export default InvoiceEdit;
