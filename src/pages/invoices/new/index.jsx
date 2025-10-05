import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* date utils (single source of truth) */
const pad = (n) => String(n).padStart(2, "0");
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const onlyTime = (d) => `${pad(new Date(d).getHours())}:${pad(new Date(d).getMinutes())}:${pad(new Date(d).getSeconds())}hrs`;
const isoDateOnly = (d) => new Date(d).toISOString().slice(0, 10);

/* non-blocking info modal (no browser alerts) */
const InfoDialog = ({ open, title, message, onClose, actionText = "OK" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>{actionText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const InvoiceNew = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    const now = useMemo(() => new Date(), []);
    const tomorrow = useMemo(() => new Date(now.getTime() + 24 * 60 * 60 * 1000), [now]);

    // display-only model (no calculations / no storage)
    const [invoice, setInvoice] = useState(() => ({
        number: "AUTO",
        status: "draft",
        issueDate: isoDateOnly(now),
        dueDate: isoDateOnly(tomorrow),
        customerId: "CUST-1001",
        customerName: "Bluewave Traders",
        customerEmail: "accounts@bluewave.example.com",
        customerPhone: "+91 98765 11111",
        billTo: {
            line1: "221B Baker Street",
            line2: "Khan Market",
            city: "New Delhi", state: "DL", zip: "110003", country: "India",
        },
        shipTo: {
            line1: "Plot 14, Industrial Area",
            line2: "Phase 2",
            city: "Gurugram", state: "HR", zip: "122002", country: "India",
        },
        reference: "SO-3456",
        currency: "INR",
        notes: "Payment due within 7 days. Cheques in favour of Bluewave Traders.",
        terms: "Late fee may apply after due date.",
        items: [
            { id: "MED-AMOX-500", name: "Amoxicillin 500mg", desc: "Capsule · Strip of 10", hsn: "3004", qty: 2, uom: "box", rate: 450.00, tax: "12%", amount: 900.00 },
            { id: "MED-PARA-650", name: "Paracetamol 650mg", desc: "Tablet · Strip of 15", hsn: "3004", qty: 3, uom: "box", rate: 220.00, tax: "5%", amount: 660.00 },
        ],
        totals: {
            subTotal: 1560.00,
            discount: 60.00,
            tax: 118.80,
            shipping: 0.00,
            grandTotal: 1618.80,
            amountPaid: 0.00,
            balanceDue: 1618.80
        },
        meta: {
            createdAt: now,
            updatedAt: now,
        }
    }));

    const [banner, setBanner] = useState("");
    const [showDemoInfo, setShowDemoInfo] = useState(false);

    useEffect(() => {
        let t;
        if (banner) t = setTimeout(() => setBanner(""), 3500);
        return () => t && clearTimeout(t);
    }, [banner]);

    const goBack = () => navigate("/invoices");
    const openDemoModal = () => setShowDemoInfo(true);

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

    const exportJson = () => {
        const data = {
            ...invoice,
            exportedAt: fmt(new Date(), true)
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `invoice-draft-${invoice.reference || "ref"}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        setBanner(`Exported at ${fmt(new Date(), true)}`);
    };

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/invoices">Invoices</NavLink>
            <span>/</span>
            <span className="current">New</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print CSS contract */}
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
                    <h1>New Invoice</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Created: {fmt(invoice.meta.createdAt, true)}</span>
                        <span>•</span>
                        <span>Now: {fmt(new Date(), true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={goBack} title="Back to Invoices">Discard</button>
                    <button className="btnPrimary" onClick={openDemoModal} title="Demo only">Save</button>
                    <button className="btnPrimary" onClick={openDemoModal} title="Demo only">Save &amp; Print</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnGhost" onClick={exportJson} title="Export current draft JSON">Export</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* MAIN */}
                <section className="col main card">
                    <div className="row two">
                        <div className="block">
                            <h3>Invoice Info</h3>
                            <div className="grid twoCol">
                                <div>
                                    <label>Invoice No.</label>
                                    <input value={invoice.number} onChange={() => { }} readOnly />
                                </div>
                                <div>
                                    <label>Status</label>
                                    <select value={invoice.status} onChange={() => { }}>
                                        <option value="draft">Draft</option>
                                        <option value="issued">Issued</option>
                                        <option value="paid">Paid</option>
                                        <option value="overdue">Overdue</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Issue Date</label>
                                    <input type="date" value={invoice.issueDate} onChange={() => { }} />
                                </div>
                                <div>
                                    <label>Due Date</label>
                                    <input type="date" value={invoice.dueDate} onChange={() => { }} />
                                </div>
                                <div>
                                    <label>Reference</label>
                                    <input placeholder="SO / PO / Ref" value={invoice.reference} onChange={() => { }} />
                                </div>
                                <div>
                                    <label>Currency</label>
                                    <select value={invoice.currency} onChange={() => { }}>
                                        <option>INR</option>
                                        <option>USD</option>
                                        <option>EUR</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="block">
                            <h3>Customer</h3>
                            <div className="identity">
                                <div className="avatar" />
                                <div className="who">
                                    <div className="name">{invoice.customerName}</div>
                                    <div className="contact">
                                        <span>{invoice.customerEmail}</span>
                                        <span>•</span>
                                        <span>{invoice.customerPhone}</span>
                                    </div>
                                    <div className="chips">
                                        <span className="chip">CUST-1001</span>
                                        <span className="chip">priority</span>
                                        <span className="chip">wholesale</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* addresses */}
                    <div className="row two">
                        <div className="block card sub">
                            <h3>Bill To</h3>
                            <div className="addr">
                                <div>{invoice.billTo.line1}</div>
                                <div>{invoice.billTo.line2}</div>
                                <div>{invoice.billTo.city} {invoice.billTo.zip}</div>
                                <div>{invoice.billTo.state}, {invoice.billTo.country}</div>
                            </div>
                        </div>
                        <div className="block card sub">
                            <h3>Ship To</h3>
                            <div className="addr">
                                <div>{invoice.shipTo.line1}</div>
                                <div>{invoice.shipTo.line2}</div>
                                <div>{invoice.shipTo.city} {invoice.shipTo.zip}</div>
                                <div>{invoice.shipTo.state}, {invoice.shipTo.country}</div>
                            </div>
                        </div>
                    </div>

                    {/* items */}
                    <div className="block">
                        <div className="row between">
                            <h3>Line Items</h3>
                            <div className="miniActions">
                                <button className="btnGhost small" onClick={openDemoModal} title="Demo only">Add Item</button>
                                <button className="btnGhost small" onClick={openDemoModal} title="Demo only">Import CSV</button>
                            </div>
                        </div>
                        <div className="tableWrap">
                            <table className="items">
                                <thead>
                                    <tr>
                                        <th style={{ width: '20%' }}>Item</th>
                                        <th>Description</th>
                                        <th>HSN</th>
                                        <th className="num">Qty</th>
                                        <th>UOM</th>
                                        <th className="num">Rate</th>
                                        <th>Tax</th>
                                        <th className="num">Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoice.items.map((it) => (
                                        <tr key={it.id}>
                                            <td>
                                                <div className="bold">{it.name}</div>
                                                <div className="muted">{it.id}</div>
                                            </td>
                                            <td>{it.desc}</td>
                                            <td>{it.hsn}</td>
                                            <td className="num">{it.qty}</td>
                                            <td>{it.uom}</td>
                                            <td className="num">{it.rate.toFixed(2)}</td>
                                            <td>{it.tax}</td>
                                            <td className="num">{it.amount.toFixed(2)}</td>
                                            <td className="actions">
                                                <button className="btnGhost xsmall" onClick={openDemoModal} title="Demo only">Edit</button>
                                                <button className="btnGhost xsmall" onClick={openDemoModal} title="Demo only">Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* empty safe row for visual spacing */}
                                    <tr className="ghost">
                                        <td colSpan={9}>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* totals */}
                    <div className="row two">
                        <div className="block">
                            <h3>Notes & Terms</h3>
                            <textarea rows={6} value={invoice.notes} onChange={() => { }} />
                            <div className="mini muted">Terms: {invoice.terms}</div>
                        </div>
                        <div className="block">
                            <h3>Summary</h3>
                            <div className="totals card">
                                <div className="line"><span>Subtotal</span><span>{invoice.totals.subTotal.toFixed(2)} {invoice.currency}</span></div>
                                <div className="line"><span>Discount</span><span>-{invoice.totals.discount.toFixed(2)} {invoice.currency}</span></div>
                                <div className="line"><span>Tax</span><span>{invoice.totals.tax.toFixed(2)} {invoice.currency}</span></div>
                                <div className="line"><span>Shipping</span><span>{invoice.totals.shipping.toFixed(2)} {invoice.currency}</span></div>
                                <div className="sep" />
                                <div className="line grand"><span>Total</span><span>{invoice.totals.grandTotal.toFixed(2)} {invoice.currency}</span></div>
                                <div className="line"><span>Amount Paid</span><span>{invoice.totals.amountPaid.toFixed(2)} {invoice.currency}</span></div>
                                <div className="line due"><span>Balance Due</span><span>{invoice.totals.balanceDue.toFixed(2)} {invoice.currency}</span></div>
                            </div>
                            <div className="payinfo">
                                <div><span className="label">Preferred Method</span><div>UPI / Bank Transfer</div></div>
                                <div><span className="label">Window</span><div>{onlyTime(now)}</div></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDEBAR */}
                <aside className="col side">
                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/invoices">All Invoices</NavLink></li>
                            <li><NavLink to="/customers/CUST-1001">Customer</NavLink></li>
                            <li><NavLink to="/orders/ORD-3456">Related Order</NavLink></li>
                            <li><NavLink to="/reports/finance">Finance Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li><span className="dot" /><div><strong>Draft created</strong><div className="muted">{fmt(now, true)}</div></div></li>
                            <li><span className="dot" /><div><strong>Customer added</strong><div className="muted">{fmt(now)}</div></div></li>
                        </ul>
                    </div>

                    {/* printable summary */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Preview</h3>
                        <div className="invHead">
                            <div className="brand">
                                <div className="logo" />
                                <div>
                                    <div className="bname">Bluewave Traders</div>
                                    <div className="muted">GSTIN: 22ABCDE1234F1Z5 • PAN: ABCDE1234F</div>
                                </div>
                            </div>
                            <div className="meta">
                                <div><span className="label">Invoice</span><div>Auto</div></div>
                                <div><span className="label">Date</span><div>{fmt(invoice.meta.createdAt)}</div></div>
                                <div><span className="label">Ref</span><div>{invoice.reference}</div></div>
                            </div>
                        </div>

                        <div className="two">
                            <div>
                                <div className="label muted">Bill To</div>
                                <div className="blk">
                                    <div className="bold">{invoice.customerName}</div>
                                    <div>{invoice.billTo.line1}</div>
                                    <div>{invoice.billTo.line2}</div>
                                    <div>{invoice.billTo.city} {invoice.billTo.zip}</div>
                                    <div>{invoice.billTo.state}, {invoice.billTo.country}</div>
                                </div>
                            </div>
                            <div>
                                <div className="label muted">Ship To</div>
                                <div className="blk">
                                    <div className="bold">{invoice.customerName}</div>
                                    <div>{invoice.shipTo.line1}</div>
                                    <div>{invoice.shipTo.line2}</div>
                                    <div>{invoice.shipTo.city} {invoice.shipTo.zip}</div>
                                    <div>{invoice.shipTo.state}, {invoice.shipTo.country}</div>
                                </div>
                            </div>
                        </div>

                        <table className="miniTable">
                            <thead>
                                <tr><th>Item</th><th>HSN</th><th className="num">Qty</th><th className="num">Rate</th><th className="num">Amount</th></tr>
                            </thead>
                            <tbody>
                                {invoice.items.map(it => (
                                    <tr key={it.id}>
                                        <td><div className="bold">{it.name}</div><div className="muted small">{it.desc}</div></td>
                                        <td>{it.hsn}</td>
                                        <td className="num">{it.qty}</td>
                                        <td className="num">{it.rate.toFixed(2)}</td>
                                        <td className="num">{it.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="totalsMini">
                            <div><span>Subtotal</span><span>{invoice.totals.subTotal.toFixed(2)} {invoice.currency}</span></div>
                            <div><span>Discount</span><span>-{invoice.totals.discount.toFixed(2)} {invoice.currency}</span></div>
                            <div><span>Tax</span><span>{invoice.totals.tax.toFixed(2)} {invoice.currency}</span></div>
                            <div><span>Shipping</span><span>{invoice.totals.shipping.toFixed(2)} {invoice.currency}</span></div>
                            <div className="grand"><span>Total</span><span>{invoice.totals.grandTotal.toFixed(2)} {invoice.currency}</span></div>
                            <div className="due"><span>Balance Due</span><span>{invoice.totals.balanceDue.toFixed(2)} {invoice.currency}</span></div>
                        </div>

                        <div className="footnote muted">Generated: {fmt(new Date(), true)}</div>
                    </div>
                </aside>
            </Styled.Grid>

            <InfoDialog
                open={showDemoInfo}
                title="Demo mode"
                message="This is a display-only demo. Saving, editing, or importing is disabled."
                onClose={() => setShowDemoInfo(false)}
                actionText="Got it"
            />
        </Styled.Page>
    );
};

export default InvoiceNew;
