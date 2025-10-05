import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* --------- tiny date + money utils (single-source formatting) ---------- */
const fmtDate = (d, withTime = false) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const INR = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(n);

/* --------- local fixture (display-only) ---------- */
const FIX = {
    "CN-2025-0012": {
        id: "CN-2025-0012",
        status: "Issued", // Issued | Partially Applied | Applied | Void
        createdAt: "2025-10-04T09:15:22+05:30",
        updatedAt: "2025-10-04T09:40:11+05:30",
        customer: {
            id: "CUST-1001",
            name: "Aarav Sharma",
            email: "aarav.sharma@example.com",
            phone: "+91 98765 43210",
            code: "CUST-1001",
            tags: ["priority", "wholesale", "north"],
        },
        invoice: { id: "INV-2031", date: "2025-09-28T11:25:00+05:30" },
        reason: "Overcharge adjustment on Item #2",
        currency: "INR",
        totals: {
            subTotal: 10600.0,
            discount: 600.0,
            tax: {
                split: [
                    { label: "CGST 9%", amount: 900.0 },
                    { label: "SGST 9%", amount: 900.0 },
                ],
                total: 1800.0,
            },
            roundOff: 0.0,
            grandTotal: 11800.0,
            applied: 5000.0,
            balance: 6800.0,
        },
        allocations: [
            { id: "INV-2031", appliedOn: "2025-10-04T09:35:00+05:30", amount: 5000.0 },
        ],
        items: [
            {
                id: "MED-AMOX-500",
                name: "Amoxicillin 500 mg Capsule",
                hsn: "3004",
                batch: "AMX0925",
                expiry: "2027-01-31",
                qty: 20,
                uom: "Strip",
                rate: 250.0,
                disc: 0,
                taxPerc: 18,
                amount: 5900.0,
            },
            {
                id: "MED-PARA-650",
                name: "Paracetamol 650 mg Tablet",
                hsn: "3004",
                batch: "PAR0825",
                expiry: "2026-12-31",
                qty: 20,
                uom: "Strip",
                rate: 235.0,
                disc: 600.0,
                taxPerc: 18,
                amount: 5900.0,
            },
        ],
        notes:
            "Customer requested adjustment due to rate discrepancy detected during reconciliation. Apply remaining balance to next invoice automatically when raised.",
        address: {
            billing:
                "221B Baker Street, Khan Market, New Delhi 110003, DL, India",
            shipping:
                "Plot 14, Industrial Area, Phase 2, Gurugram 122002, HR, India",
        },
        activity: [
            { t: "2025-10-04T09:40:11+05:30", line: "Credit note updated by Ashish" },
            { t: "2025-10-04T09:35:00+05:30", line: "₹5,000 applied to INV-2031" },
            { t: "2025-10-04T09:20:00+05:30", line: "Credit note emailed to customer" },
            { t: "2025-10-04T09:15:22+05:30", line: "Credit note created" },
        ],
        attachments: [
            { id: "ATT-1", name: "Rate-Discrepancy-Screenshot.png", size: "184 KB" },
            { id: "ATT-2", name: "Approval-Manager.pdf", size: "92 KB" },
        ],
    },
    "CN-2025-0013": {
        id: "CN-2025-0013",
        status: "Void",
        createdAt: "2025-09-20T14:10:00+05:30",
        updatedAt: "2025-09-20T15:12:00+05:30",
        customer: { id: "CUST-1020", name: "Bluewave Traders", email: "ap@bluewave.example.com", phone: "+91 98200 20000" },
        invoice: { id: "INV-2011", date: "2025-09-18T12:00:00+05:30" },
        reason: "Cancelled request by customer",
        currency: "INR",
        totals: {
            subTotal: 2500.0,
            discount: 0.0,
            tax: { split: [{ label: "IGST 18%", amount: 450.0 }], total: 450.0 },
            roundOff: 0.0,
            grandTotal: 2950.0,
            applied: 0.0,
            balance: 2950.0,
        },
        allocations: [],
        items: [
            { id: "MED-VITC-1K", name: "Vitamin C 1000 mg", hsn: "3004", batch: "VIT0825", expiry: "2027-02-28", qty: 5, uom: "Bottle", rate: 500, disc: 0, taxPerc: 18, amount: 2950.0 },
        ],
        notes: "Voided on same day before customer receipt.",
        address: { billing: "G-101, Andheri, Mumbai 400053, MH, India", shipping: "Same as billing" },
        activity: [
            { t: "2025-09-20T15:12:00+05:30", line: "Credit note voided" },
            { t: "2025-09-20T14:10:00+05:30", line: "Credit note created" },
        ],
        attachments: [],
    },
};

const Badge = ({ status }) => {
    const key = (status || "").toLowerCase();
    return <span className={`badge status-${key}`}>{status}</span>;
};

const DemoDialog = ({ open, onClose, title = "Demo mode", message = "This action is disabled on the demo." }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer><button className="btnPrimary" onClick={onClose}>OK</button></footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const CreditNoteDetail = () => {
    const { creditId } = useParams();
    const navigate = useNavigate();
    const note = useMemo(() => FIX[creditId] || null, [creditId]);
    const [banner, setBanner] = useState("");
    const [demoOpen, setDemoOpen] = useState(false);
    const printRef = useRef(null);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setBanner("Link copied to clipboard.");
            setTimeout(() => setBanner(""), 2500);
        } catch {
            setBanner("Copy not available.");
            setTimeout(() => setBanner(""), 2500);
        }
    };

    const exportJSON = () => {
        if (!note) return;
        const blob = new Blob([JSON.stringify(note, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${note.id}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        setBanner("Download started.");
        setTimeout(() => setBanner(""), 2000);
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    if (!note) {
        return (
            <Styled.Page>
                <Styled.Header className="card">
                    <div className="left">
                        <h1>Credit Note</h1>
                        <nav className="breadcrumbs">
                            <NavLink to="/invoices">Invoices</NavLink>
                            <span>/</span>
                            <NavLink to="/invoices/credit-notes">Credit Notes</NavLink>
                            <span>/</span>
                            <span className="current">Not found</span>
                        </nav>
                    </div>
                    <div className="right actions">
                        <button className="btnGhost" onClick={() => navigate("/invoices/credit-notes")}>Back</button>
                    </div>
                </Styled.Header>

                <Styled.Notice className="card">
                    <h3>We couldn’t find that credit note.</h3>
                    <p>Check the URL or head back to <NavLink to="/invoices/credit-notes">Credit Notes</NavLink>.</p>
                </Styled.Notice>
            </Styled.Page>
        );
    }

    const { id, status, customer, invoice, totals, items, reason, notes, createdAt, updatedAt, address, activity, attachments } = note;

    return (
        <Styled.Page>
            {/* print CSS as requested */}
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
                    <h1>Credit Note <span className="muted">#{id}</span> <Badge status={status} /></h1>
                    <nav className="breadcrumbs">
                        <NavLink to="/invoices">Invoices</NavLink>
                        <span>/</span>
                        <NavLink to="/invoices/credit-notes">Credit Notes</NavLink>
                        <span>/</span>
                        <span className="current">{id}</span>
                    </nav>
                    <div className="meta">
                        <span>Created: {fmtDate(createdAt, true)}</span>
                        <span>•</span>
                        <span>Updated: {fmtDate(updatedAt, true)}</span>
                    </div>
                </div>

                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate("/invoices/credit-notes")}>Back</button>
                    <button className="btnPrimary" onClick={printSection}>Print</button>
                    <button className="btnPrimary" onClick={exportJSON}>Download JSON</button>
                    <button className="btnGhost" onClick={copyLink}>Copy Link</button>
                    <button className="btnDisabled" onClick={() => setDemoOpen(true)} title="Disabled on demo">Void</button>
                    <button className="btnDisabled" onClick={() => setDemoOpen(true)} title="Disabled on demo">Apply</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* MAIN */}
                <section className="col main">
                    {/* Summary card */}
                    <div className="card">
                        <div className="summary">
                            <div>
                                <div className="label">Customer</div>
                                <div className="value">
                                    <NavLink to={`/customers/${customer.id}`}>{customer.name}</NavLink>
                                    <div className="sub">{customer.email} • {customer.phone}</div>
                                </div>
                            </div>
                            <div>
                                <div className="label">Against Invoice</div>
                                <div className="value">
                                    <NavLink to={`/invoices/${invoice.id}`}>{invoice.id}</NavLink>
                                    <div className="sub">{fmtDate(invoice.date)}</div>
                                </div>
                            </div>
                            <div>
                                <div className="label">Reason</div>
                                <div className="value">{reason}</div>
                            </div>
                            <div>
                                <div className="label">Currency</div>
                                <div className="value">{note.currency}</div>
                            </div>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="card">
                        <div className="tableWrap">
                            <table className="items">
                                <thead>
                                    <tr>
                                        <th style={{ width: "30%" }}>Item</th>
                                        <th>HSN/SAC</th>
                                        <th>Batch</th>
                                        <th>Expiry</th>
                                        <th className="num">Qty</th>
                                        <th>UoM</th>
                                        <th className="num">Rate</th>
                                        <th className="num">Disc</th>
                                        <th className="num">Tax %</th>
                                        <th className="num">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((it) => (
                                        <tr key={it.id}>
                                            <td>
                                                <NavLink to={`/products/${it.id}`}>{it.name}</NavLink>
                                                <div className="sub">{it.id}</div>
                                            </td>
                                            <td>{it.hsn}</td>
                                            <td>{it.batch}</td>
                                            <td>{fmtDate(it.expiry)}</td>
                                            <td className="num">{it.qty}</td>
                                            <td>{it.uom}</td>
                                            <td className="num">{INR(it.rate)}</td>
                                            <td className="num">{it.disc ? INR(it.disc) : "-"}</td>
                                            <td className="num">{it.taxPerc}%</td>
                                            <td className="num">{INR(it.amount)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="totals">
                            <div className="left">
                                <div className="addr">
                                    <h4>Billing</h4>
                                    <p>{address.billing}</p>
                                </div>
                                <div className="addr">
                                    <h4>Shipping</h4>
                                    <p>{address.shipping}</p>
                                </div>
                            </div>

                            <div className="right">
                                <div className="row"><span>Subtotal</span><span>{INR(totals.subTotal)}</span></div>
                                <div className="row"><span>Discount</span><span>-{INR(totals.discount)}</span></div>
                                {totals.tax.split.map((t) => (
                                    <div className="row" key={t.label}><span>{t.label}</span><span>{INR(t.amount)}</span></div>
                                ))}
                                <div className="row"><span>Round Off</span><span>{INR(totals.roundOff)}</span></div>
                                <div className="row grand"><span>Grand Total</span><span>{INR(totals.grandTotal)}</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Allocations & Notes */}
                    <div className="card">
                        <div className="two">
                            <div>
                                <h3>Allocations</h3>
                                {note.allocations.length === 0 ? (
                                    <div className="empty">No allocations yet.</div>
                                ) : (
                                    <table className="alloc">
                                        <thead>
                                            <tr><th>Invoice</th><th>Applied On</th><th className="num">Amount</th></tr>
                                        </thead>
                                        <tbody>
                                            {note.allocations.map((al) => (
                                                <tr key={al.id}>
                                                    <td><NavLink to={`/invoices/${al.id}`}>{al.id}</NavLink></td>
                                                    <td>{fmtDate(al.appliedOn, true)}</td>
                                                    <td className="num">{INR(al.amount)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan={2}>Applied</td>
                                                <td className="num">{INR(totals.applied)}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Balance</td>
                                                <td className="num">{INR(totals.balance)}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                )}
                            </div>

                            <div>
                                <h3>Notes</h3>
                                <div className="notes">{notes}</div>
                                <div className="chips">
                                    {customer.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDE */}
                <aside className="col side">
                    <div className="card" id="search-print-area" ref={printRef}>
                        <div className="printHead">
                            <h2>Credit Note</h2>
                            <div className="muted">{fmtDate(createdAt, true)}</div>
                        </div>
                        <div className="kv">
                            <div><span className="k">No.</span><span className="v">{id}</span></div>
                            <div><span className="k">Status</span><span className="v">{status}</span></div>
                            <div><span className="k">Customer</span><span className="v">{customer.name}</span></div>
                            <div><span className="k">Against</span><span className="v">{invoice.id}</span></div>
                            <div><span className="k">Amount</span><span className="v">{INR(totals.grandTotal)}</span></div>
                            <div><span className="k">Balance</span><span className="v">{INR(totals.balance)}</span></div>
                        </div>
                        <div className="miniTable">
                            <div className="mh">Taxes</div>
                            <ul>
                                {totals.tax.split.map(t => <li key={t.label}><span>{t.label}</span><span>{INR(t.amount)}</span></li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            {activity.map((a, i) => (
                                <li key={i}>
                                    <span className="dot" />
                                    <div>
                                        <div>{a.line}</div>
                                        <div className="muted">{fmtDate(a.t, true)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Attachments</h3>
                        {attachments.length === 0 ? (
                            <div className="empty">No files.</div>
                        ) : (
                            <ul className="files">
                                {attachments.map(f => (
                                    <li key={f.id}>
                                        <div className="name">{f.name}</div>
                                        <div className="size">{f.size}</div>
                                        <div className="rowBtns">
                                            <button className="btnGhost small" onClick={() => setDemoOpen(true)} title="Open">{/* iconless */}Open</button>
                                            <button className="btnGhost small" onClick={() => setDemoOpen(true)} title="Download">Download</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="ql">
                            <li><NavLink to={`/customers/${customer.id}`}>Customer</NavLink></li>
                            <li><NavLink to={`/invoices/${invoice.id}`}>Invoice</NavLink></li>
                            <li><NavLink to={`/reports/finance`}>Finance Report</NavLink></li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <DemoDialog open={demoOpen} onClose={() => setDemoOpen(false)} />
        </Styled.Page>
    );
};

export default CreditNoteDetail;
