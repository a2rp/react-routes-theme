import React, { useMemo, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---------------------------- date format utils --------------------------- */
/* Always render dates like:
   - Date: Sat Oct 04 2025
   - Date+Time: Sat Oct 04 2025 15:38:20hrs
   - Time only: 15:38:20hrs
*/
const pad = (n) => String(n).padStart(2, "0");
const dname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const mname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formatDate = (v) => {
    const d = v instanceof Date ? v : new Date(v);
    return `${dname[d.getDay()]} ${mname[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const formatDateTime = (v) => {
    const d = v instanceof Date ? v : new Date(v);
    return `${formatDate(d)} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const formatTime = (v) => {
    const d = v instanceof Date ? v : new Date(v);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};

/* ------------------------------ demo invoice ------------------------------ */
/* Display-only: no calculations; values are precomputed for a premium demo */
const useDemoInvoice = (idFromRoute) => {
    const now = useMemo(() => new Date(), []);
    const id = idFromRoute || "INV-2031";
    return useMemo(() => ({
        id,
        number: id,
        status: "Unpaid",          // Unpaid | Paid | Overdue | Partial
        currency: "INR",
        symbol: "₹",
        issueDate: now,
        dueDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
        createdAt: now,
        updatedAt: now,

        seller: {
            name: "Bluewave Traders Pvt. Ltd.",
            gstin: "22ABCDE1234F1Z5",
            pan: "ABCDE1234F",
            address: ["5th Floor, Vertex Plaza", "MG Road", "Bengaluru, KA 560001", "India"],
            email: "accounts@bluewave.example.com",
            phone: "+91 80 4000 1234",
            website: "https://bluewave.example.com",
            bank: {
                accountName: "Bluewave Traders Pvt. Ltd.",
                accountNo: "123456789012",
                ifsc: "HDFC0001234",
                bankName: "HDFC Bank, MG Road Branch",
                upi: "bluewave@okhdfcbank"
            }
        },

        buyer: {
            code: "CUST-1001",
            name: "Aarav Sharma",
            company: "Sharma & Co.",
            email: "billing@sharma-co.example.com",
            phone: "+91 98765 43210",
            billTo: ["221B Baker Street", "Khan Market", "New Delhi 110003", "India"],
            shipTo: ["Plot 14, Industrial Area", "Phase II", "Gurugram 122002", "India"],
            gstin: "07ASDFG1234Z1A2"
        },

        meta: {
            poNumber: "PO-7765",
            salesperson: "PRIYA N",
            reference: "SO-3456",
            terms: "Net 7 days. Late fee 2% per 30 days after due date.",
            notes: "Thanks for your business. For queries, reply to this email with the invoice number."
        },

        items: [
            { no: 1, sku: "MED-AMOX-500", name: "Amoxycillin 500mg Capsule", hsn: "3003", batch: "AX500-24-09", exp: "2026-09-30", qty: "2", unit: "Box", rate: "₹ 1,250.00", discount: "₹ 0.00", taxPct: "12%", taxAmt: "₹ 300.00", lineTotal: "₹ 2,800.00" },
            { no: 2, sku: "MED-PARA-650", name: "Paracetamol 650mg Tablet", hsn: "3004", batch: "PA650-24-06", exp: "2027-06-30", qty: "5", unit: "Strip", rate: "₹ 120.00", discount: "₹ 20.00", taxPct: "5%", taxAmt: "₹ 25.00", lineTotal: "₹ 605.00" },
            { no: 3, sku: "MED-ZINC-20", name: "Zinc 20mg Tablet", hsn: "3004", batch: "ZN020-25-01", exp: "2028-01-31", qty: "3", unit: "Bottle", rate: "₹ 220.00", discount: "₹ 0.00", taxPct: "5%", taxAmt: "₹ 33.00", lineTotal: "₹ 693.00" },
            { no: 4, sku: "MED-ORS-1L", name: "ORS 1L Solution", hsn: "3004", batch: "ORS1L-25-07", exp: "2027-07-31", qty: "6", unit: "Bottle", rate: "₹ 75.00", discount: "₹ 0.00", taxPct: "5%", taxAmt: "₹ 22.50", lineTotal: "₹ 472.50" },
            { no: 5, sku: "MED-IBU-400", name: "Ibuprofen 400mg Tablet", hsn: "3004", batch: "IBU400-26-02", exp: "2028-02-28", qty: "2", unit: "Box", rate: "₹ 530.00", discount: "₹ 0.00", taxPct: "12%", taxAmt: "₹ 127.20", lineTotal: "₹ 1,187.20" }
        ],

        totals: {
            subTotal: "₹ 5,602.70",
            discount: "₹ 20.00",
            tax: "₹ 507.70",
            roundOff: "₹ 0.60",
            grandTotal: "₹ 6,091.00",
            inWords: "Six Thousand Ninety One Only"
        },

        footer: {
            declaration: "Goods once sold will not be taken back. All disputes subject to Bengaluru jurisdiction.",
            support: "Need help? +91 80 4000 1234 • support@bluewave.example.com",
        }
    }), [id, now]);
};

const InvoicePrint = () => {
    const { invoiceId } = useParams();
    const invoice = useDemoInvoice(invoiceId);
    const printRef = useRef(null);
    const [copied, setCopied] = useState(false);
    const [compact, setCompact] = useState(false);
    const [grid, setGrid] = useState(true);

    const onPrint = () => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const onCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch { }
    };

    return (
        <Styled.Wrapper data-gridlines={grid ? "on" : "off"} data-compact={compact ? "on" : "off"}>
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

            {/* Toolbar - non-printable */}
            <Styled.Toolbar className="card" aria-label="Invoice actions">
                <div className="left">
                    <NavLink to={`/invoices/${invoice.id}`} className="btn">Back to Invoice</NavLink>
                    <button className="btn" onClick={onPrint}>Print</button>
                    <button className="btn" onClick={onCopyLink}>{copied ? "Link Copied" : "Copy Link"}</button>
                </div>
                <div className="right toggles">
                    <label className="toggle">
                        <input type="checkbox" checked={compact} onChange={() => setCompact(v => !v)} />
                        <span>Compact rows</span>
                    </label>
                    <label className="toggle">
                        <input type="checkbox" checked={grid} onChange={() => setGrid(v => !v)} />
                        <span>Show gridlines</span>
                    </label>
                </div>
            </Styled.Toolbar>

            {/* Printable region */}
            <Styled.PrintArea id="search-print-area" ref={printRef}>
                {/* Top header */}
                <header className="inv-header">
                    <div className="brand">
                        <div className="logo" aria-label="Company logo" />
                        <div className="seller">
                            <h1>Tax Invoice</h1>
                            <div className="seller-name">{invoice.seller.name}</div>
                            <div className="seller-meta">
                                <span>GSTIN: {invoice.seller.gstin}</span>
                                <span>•</span>
                                <span>PAN: {invoice.seller.pan}</span>
                                <span>•</span>
                                <a href={invoice.seller.website} target="_blank" rel="noreferrer">{invoice.seller.website}</a>
                            </div>
                            <div className="seller-meta">
                                <span>{invoice.seller.email}</span><span>•</span>
                                <span>{invoice.seller.phone}</span>
                            </div>
                        </div>
                    </div>

                    <div className="doc-meta card">
                        <div className={`status ${invoice.status.toLowerCase()}`}>{invoice.status}</div>
                        <div className="grid">
                            <div><span className="k">Invoice #</span><span className="v">{invoice.number}</span></div>
                            <div><span className="k">Issue Date</span><span className="v">{formatDate(invoice.issueDate)}</span></div>
                            <div><span className="k">Due Date</span><span className="v">{formatDate(invoice.dueDate)}</span></div>
                            <div><span className="k">Currency</span><span className="v">{invoice.currency}</span></div>
                        </div>
                        <div className="grid">
                            <div><span className="k">Salesperson</span><span className="v">{invoice.meta.salesperson}</span></div>
                            <div><span className="k">PO #</span><span className="v">{invoice.meta.poNumber}</span></div>
                            <div><span className="k">Reference</span><span className="v">{invoice.meta.reference}</span></div>
                        </div>
                    </div>
                </header>

                {/* Parties */}
                <section className="parties">
                    <div className="party card">
                        <h3>From</h3>
                        <div className="name">{invoice.seller.name}</div>
                        <address>
                            {invoice.seller.address.map((l, i) => <div key={i}>{l}</div>)}
                        </address>
                    </div>

                    <div className="party card">
                        <h3>Bill To</h3>
                        <div className="name">{invoice.buyer.company}</div>
                        <div className="muted">{invoice.buyer.name} &middot; {invoice.buyer.phone}</div>
                        <address>
                            {invoice.buyer.billTo.map((l, i) => <div key={i}>{l}</div>)}
                        </address>
                        <div className="muted">GSTIN: {invoice.buyer.gstin}</div>
                    </div>

                    <div className="party card">
                        <h3>Ship To</h3>
                        <address>
                            {invoice.buyer.shipTo.map((l, i) => <div key={i}>{l}</div>)}
                        </address>
                    </div>
                </section>

                {/* Items */}
                <section className="items card">
                    <table aria-label="Invoice items">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item / SKU</th>
                                <th>HSN</th>
                                <th>Batch</th>
                                <th>Expiry</th>
                                <th className="num">Qty</th>
                                <th>Unit</th>
                                <th className="num">Rate</th>
                                <th className="num">Disc.</th>
                                <th className="num">Tax %</th>
                                <th className="num">Tax Amt</th>
                                <th className="num">Line Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoice.items.map((it) => (
                                <tr key={it.no}>
                                    <td>{it.no}</td>
                                    <td>
                                        <div className="pname">{it.name}</div>
                                        <div className="muted">{it.sku}</div>
                                    </td>
                                    <td>{it.hsn}</td>
                                    <td>{it.batch}</td>
                                    <td>{formatDate(it.exp)}</td>
                                    <td className="num">{it.qty}</td>
                                    <td>{it.unit}</td>
                                    <td className="num">{it.rate}</td>
                                    <td className="num">{it.discount}</td>
                                    <td className="num">{it.taxPct}</td>
                                    <td className="num">{it.taxAmt}</td>
                                    <td className="num">{it.lineTotal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* Summary */}
                <section className="summary">
                    <div className="left">
                        <div className="card pay">
                            <h3>Payment</h3>
                            <div className="rows">
                                <div><span className="k">UPI</span><span className="v">{invoice.seller.bank.upi}</span></div>
                                <div><span className="k">Account</span><span className="v">{invoice.seller.bank.accountNo}</span></div>
                                <div><span className="k">IFSC</span><span className="v">{invoice.seller.bank.ifsc}</span></div>
                                <div><span className="k">Bank</span><span className="v">{invoice.seller.bank.bankName}</span></div>
                                <div><span className="k">A/c Name</span><span className="v">{invoice.seller.bank.accountName}</span></div>
                            </div>
                        </div>

                        <div className="card terms">
                            <h3>Terms & Notes</h3>
                            <p className="muted">{invoice.meta.terms}</p>
                            <p className="muted">{invoice.meta.notes}</p>
                        </div>

                        <div className="card stamps">
                            <div className="qr">
                                {/* a simple placeholder QR (SVG) */}
                                <svg viewBox="0 0 80 80" width="80" height="80" aria-label="QR">
                                    <rect x="0" y="0" width="80" height="80" fill="var(--card)" stroke="var(--border)" />
                                    <rect x="6" y="6" width="20" height="20" fill="var(--text)" />
                                    <rect x="54" y="6" width="20" height="20" fill="var(--text)" />
                                    <rect x="6" y="54" width="20" height="20" fill="var(--text)" />
                                    <rect x="26" y="26" width="28" height="28" fill="var(--text)" />
                                </svg>
                                <div className="muted">Scan to pay</div>
                            </div>
                            <div className="sign">
                                <div className="line" />
                                <div className="muted">Authorized Signatory</div>
                            </div>
                            <div className="stamp">Company Seal</div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="card totals">
                            <div className="row"><span>Subtotal</span><span>{invoice.totals.subTotal}</span></div>
                            <div className="row"><span>Discount</span><span>{invoice.totals.discount}</span></div>
                            <div className="row"><span>Tax</span><span>{invoice.totals.tax}</span></div>
                            <div className="row"><span>Round Off</span><span>{invoice.totals.roundOff}</span></div>
                            <div className="grand row"><span>Grand Total</span><span>{invoice.totals.grandTotal}</span></div>
                            <div className="inwords">Amount in words: {invoice.totals.inWords}</div>
                            <div className="meta">
                                <span>Generated: {formatDateTime(invoice.createdAt)}</span>
                                <span>•</span>
                                <span>Updated: {formatDateTime(invoice.updatedAt)}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer / declaration */}
                <footer className="inv-footer">
                    <div className="decl">{invoice.footer.declaration}</div>
                    <div className="support">{invoice.footer.support}</div>
                    <div className="tiny">
                        Printed on {formatDateTime(new Date())} • Page 1 of 1
                    </div>
                </footer>
            </Styled.PrintArea>
        </Styled.Wrapper>
    );
};

export default InvoicePrint;
