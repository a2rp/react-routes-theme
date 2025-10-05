import React, { useMemo, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

// date utils — single source of truth for formatting
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

// tiny confirm dialog (our own component; no browser alerts)
const ConfirmDialog = ({ open, title, message, onConfirm, onClose, confirmText = "Confirm", danger = false }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                    <button className={danger ? "btnDanger" : "btnPrimary"} onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const SalesPaymentDetail = () => {
    const { paymentId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const printRef = useRef(null);

    // display-only mock model (no calculations, no persistence)
    const now = useMemo(() => new Date(), []);
    const model = useMemo(() => ({
        id: paymentId || "PAY-7852",
        number: paymentId || "PAY-7852",
        status: "reconciled",          // reconciled | pending | failed | refunded
        method: "UPI",                  // UPI | Card | Bank Transfer | Cash
        amount: 45000.00,
        currency: "INR",
        receivedOn: "2025-10-04T15:38:20+05:30",
        createdAt: "2025-10-04T15:39:25+05:30",
        updatedAt: "2025-10-04T15:41:12+05:30",
        reference: {
            utr: "HDFC/NEFT/9002345678",
            upiRef: "324878234123@upi",
            bank: "HDFC Bank",
            account: "XXXX 1234",
            posRef: "",
            notes: "Collected by counter on weekend; auto-reconcile successful."
        },
        customer: { id: "CUST-1001", code: "CUST-1001", name: "Aarav Sharma" },
        collectedBy: { id: "USR-17", name: "A. Ranjan" },
        tags: ["counter", "kiosk", "priority"],
        allocations: [
            { invoiceId: "INV-2031", invoiceDate: "2025-09-28", dueDate: "2025-10-05", amount: 30000.00, applied: 30000.00 },
            { invoiceId: "INV-2040", invoiceDate: "2025-09-30", dueDate: "2025-10-07", amount: 15000.00, applied: 15000.00 },
        ],
        overpayment: 0.00,
        timeline: [
            { label: "Payment recorded", at: "2025-10-04T15:38:20+05:30" },
            { label: "UPI confirmed by gateway", at: "2025-10-04T15:38:50+05:30" },
            { label: "Auto-applied to invoices", at: "2025-10-04T15:39:05+05:30" },
            { label: "Reconciliation completed", at: "2025-10-04T15:41:12+05:30" },
        ],
        attachments: [
            { name: "upi-receipt.pdf", href: "#" },
            { name: "counter-slip.jpg", href: "#" },
        ],
        remarks: "Customer prefers messages by email. Next collection expected last week of month."
    }), [paymentId]);

    // demo-only confirm dialog (non-destructive)
    const [showDemoDialog, setShowDemoDialog] = useState(false);

    const breadcrumbs = (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <NavLink to="/sales">Sales</NavLink>
            <span>/</span>
            <NavLink to="/sales/payments">Payments</NavLink>
            <span>/</span>
            <span className="current">{model.number}</span>
        </nav>
    );

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.origin + location.pathname);
        } catch { }
    };

    const downloadJSON = () => {
        const data = {
            id: model.id,
            number: model.number,
            amount: model.amount,
            currency: model.currency,
            method: model.method,
            receivedOn: model.receivedOn,
            customer: model.customer,
            reference: model.reference,
            allocations: model.allocations,
            overpayment: model.overpayment,
            status: model.status,
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement("a"), { href: url, download: `${model.number}.json` });
        document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
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

    const totalApplied = model.allocations.reduce((s, a) => s + a.applied, 0);

    return (
        <Styled.Page>
            {/* print rules (exact block) */}
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
                    <h1>Payment Detail</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>ID: {model.number}</span><span>•</span>
                        <span>Received: {fmt(model.receivedOn, true)}</span><span>•</span>
                        <span>Updated: {fmt(model.updatedAt, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate("/sales/payments")} title="Back to payments">Back</button>
                    <button className="btnGhost" onClick={copyLink} title="Copy deep link">Copy Link</button>
                    <button className="btnGhost" onClick={downloadJSON} title="Download JSON">Export</button>
                    <button className="btnPrimary" onClick={printSection} title="Print payment">Print</button>
                    <button className="btnDisabled" onClick={() => setShowDemoDialog(true)} title="Demo only">Edit</button>
                    <button className="btnDisabled" onClick={() => setShowDemoDialog(true)} title="Demo only">Refund</button>
                    <button className="btnDisabled" onClick={() => setShowDemoDialog(true)} title="Demo only">Delete</button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                {/* MAIN */}
                <section className="col main">
                    {/* Top summary strip */}
                    <div className="card summary">
                        <div className="summaryItem">
                            <div className="label">Amount</div>
                            <div className="value">{model.currency} {model.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</div>
                            <div className="sub">Applied: {model.currency} {totalApplied.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</div>
                        </div>
                        <div className="summaryItem">
                            <div className="label">Method</div>
                            <div className="value">{model.method}</div>
                            <div className="sub">Ref: {model.reference.upiRef || model.reference.utr || "—"}</div>
                        </div>
                        <div className="summaryItem">
                            <div className="label">Status</div>
                            <div className={`pill ${model.status}`}>{model.status}</div>
                            <div className="sub">Collected: {fmt(model.receivedOn)}</div>
                        </div>
                        <div className="summaryItem">
                            <div className="label">Customer</div>
                            <div className="value"><NavLink to={`/customers/${model.customer.id}`}>{model.customer.name}</NavLink></div>
                            <div className="sub">{model.customer.code}</div>
                        </div>
                    </div>

                    {/* Payment info */}
                    <div className="card section">
                        <div className="sectionHead">
                            <h3>Payment Information</h3>
                            <div className="tags">
                                {model.tags.map(t => <span key={t} className="chip">{t}</span>)}
                            </div>
                        </div>
                        <div className="two">
                            <div className="panel">
                                <dl className="kv">
                                    <div><dt>Received on</dt><dd>{fmt(model.receivedOn, true)}</dd></div>
                                    <div><dt>Method</dt><dd>{model.method}</dd></div>
                                    <div><dt>Currency</dt><dd>{model.currency}</dd></div>
                                    <div><dt>Collected by</dt><dd>{model.collectedBy.name}</dd></div>
                                </dl>
                            </div>
                            <div className="panel">
                                <dl className="kv">
                                    <div><dt>UTR / Ref</dt><dd>{model.reference.utr || "—"}</dd></div>
                                    <div><dt>UPI Ref</dt><dd>{model.reference.upiRef || "—"}</dd></div>
                                    <div><dt>Bank</dt><dd>{model.reference.bank || "—"}</dd></div>
                                    <div><dt>Account</dt><dd>{model.reference.account || "—"}</dd></div>
                                </dl>
                            </div>
                        </div>
                        <div className="notes">{model.reference.notes}</div>
                    </div>

                    {/* Allocations */}
                    <div className="card section">
                        <div className="sectionHead">
                            <h3>Allocations</h3>
                            <div className="hint">Invoices this payment was applied to.</div>
                        </div>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Invoice</th>
                                        <th>Invoice Date</th>
                                        <th>Due Date</th>
                                        <th className="num">Invoice Amount</th>
                                        <th className="num">Applied</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {model.allocations.map(a => (
                                        <tr key={a.invoiceId}>
                                            <td><NavLink to={`/invoices/${a.invoiceId}`}>{a.invoiceId}</NavLink></td>
                                            <td>{fmt(a.invoiceDate)}</td>
                                            <td>{fmt(a.dueDate)}</td>
                                            <td className="num">{model.currency} {a.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                                            <td className="num">{model.currency} {a.applied.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={3} className="num label">Totals</td>
                                        <td className="num">{model.currency} {model.allocations.reduce((s, a) => s + a.amount, 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                                        <td className="num">{model.currency} {totalApplied.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3} className="num label">Overpayment</td>
                                        <td className="num">—</td>
                                        <td className="num">{model.currency} {model.overpayment.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    {/* Remarks / Activity */}
                    <div className="two">
                        <div className="card section">
                            <div className="sectionHead"><h3>Remarks</h3></div>
                            <div className="notes">{model.remarks}</div>
                        </div>
                        <div className="card section">
                            <div className="sectionHead"><h3>Timeline</h3></div>
                            <ul className="timeline">
                                {model.timeline.map((t, i) => (
                                    <li key={i}>
                                        <span className="dot" />
                                        <div>
                                            <strong>{t.label}</strong>
                                            <div className="muted">{fmt(t.at, true)}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SIDEBAR */}
                <aside className="col side">
                    <div className="card">
                        <h3>Customer</h3>
                        <div className="customer">
                            <div className="avatar" aria-hidden="true">A</div>
                            <div className="info">
                                <NavLink to={`/customers/${model.customer.id}`} className="name">{model.customer.name}</NavLink>
                                <div className="muted">{model.customer.code}</div>
                            </div>
                        </div>
                        <div className="miniGrid">
                            <div>
                                <div className="label">Best time</div>
                                <div>{onlyTime(now)}</div>
                            </div>
                            <div>
                                <div className="label">Preferred</div>
                                <div>Email</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Meta</h3>
                        <dl className="kv">
                            <div><dt>Created</dt><dd>{fmt(model.createdAt, true)}</dd></div>
                            <div><dt>Updated</dt><dd>{fmt(model.updatedAt, true)}</dd></div>
                            <div><dt>Status</dt><dd><span className={`pill ${model.status}`}>{model.status}</span></dd></div>
                        </dl>
                    </div>

                    <div className="card">
                        <h3>Attachments</h3>
                        <ul className="files">
                            {model.attachments.map(f => (
                                <li key={f.name}>
                                    <a href={f.href} download>{f.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Printable receipt */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Receipt</h3>
                        <div className="receipt">
                            <div className="line"><span>Payment</span><span>{model.number}</span></div>
                            <div className="line"><span>Date</span><span>{fmt(model.receivedOn, true)}</span></div>
                            <div className="line"><span>Customer</span><span>{model.customer.name} ({model.customer.code})</span></div>
                            <div className="line"><span>Amount</span><span>{model.currency} {model.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span></div>
                            <div className="line"><span>Method</span><span>{model.method}</span></div>
                            <div className="line"><span>Reference</span><span>{model.reference.upiRef || model.reference.utr || "—"}</span></div>
                            <div className="line"><span>Status</span><span className={`pill ${model.status}`}>{model.status}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <ConfirmDialog
                open={showDemoDialog}
                title="Demo mode"
                message="This is a display-only theme. Actions like Edit/Refund/Delete are disabled."
                onConfirm={() => setShowDemoDialog(false)}
                onClose={() => setShowDemoDialog(false)}
            />
        </Styled.Page>
    );
};

export default SalesPaymentDetail;
