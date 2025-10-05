import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { FiPrinter, FiDownload, FiCopy, FiExternalLink, FiSlash, FiCheckCircle, FiX } from "react-icons/fi";
import { Styled } from "./styled";

/** Demo-only helpers */
const DEMO_MODE = true;

/** Date formatting — exact spec:
 * Date: Sat Oct 04 2025
 * Date+Time: Sat Oct 04 2025 15:38:20hrs
 * Time: 15:38:20hrs
 */
const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = (n) => String(n).padStart(2, "0");

const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${DAY[d.getDay()]} ${MON[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (iso) => {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

/** Static demo journal (display-only; no calculations) */
const JOURNAL_FIXTURES = {
    "JRN-2025-0007": {
        id: "JRN-2025-0007",
        refNo: "MAN-POST/2025/07",
        status: "Posted",
        date: "2025-10-04T15:38:20+05:30",
        createdAt: "2025-10-03T11:12:08+05:30",
        createdBy: { id: "USR-101", name: "Ritika Singh" },
        postedAt: "2025-10-04T15:39:02+05:30",
        postedBy: { id: "USR-103", name: "Arun Sharma" },
        notes: "Month-end accruals and reversals aligned to COA policy FY25.",
        lines: [
            { id: "L1", type: "Debit", accountId: "AC-2101", accountName: "Purchases - Medicines", narration: "Batch AMOX-500", amount: "₹ 75,000.00" },
            { id: "L2", type: "Credit", accountId: "AC-1101", accountName: "Accounts Payable - Vendors", narration: "PO P-20341", amount: "₹ 75,000.00" },
            { id: "L3", type: "Debit", accountId: "AC-5102", accountName: "Freight & Logistics", narration: "Shipment S-00419", amount: "₹ 3,200.00" },
            { id: "L4", type: "Credit", accountId: "AC-1001", accountName: "Cash & Bank - HDFC CA", narration: "UPI REF 9482", amount: "₹ 3,200.00" },
        ],
        totals: { debit: "₹ 78,200.00", credit: "₹ 78,200.00" },
        related: {
            purchaseOrders: [{ id: "PO-20341" }],
            invoices: [{ id: "INV-2031" }],
            receipts: [{ id: "RCPT-5560" }],
            shipments: [{ id: "SHP-00419" }],
            vendors: [{ id: "VND-3021", name: "Medico Labs Pvt Ltd" }],
        },
        activity: [
            { id: "A1", at: "2025-10-03T11:12:08+05:30", by: "Ritika Singh", msg: "Created journal draft" },
            { id: "A2", at: "2025-10-04T15:37:55+05:30", by: "Arun Sharma", msg: "Reviewed and validated accounts" },
            { id: "A3", at: "2025-10-04T15:39:02+05:30", by: "Arun Sharma", msg: "Posted journal" },
        ],
        attachments: [
            { id: "AT1", name: "goods-received-note.pdf", size: "214 KB" },
            { id: "AT2", name: "freight-receipt.jpg", size: "482 KB" },
        ],
    },
};

const StatusPill = ({ status }) => {
    const tone = status === "Posted" ? "ok" : status === "Draft" ? "muted" : "warn";
    return <span className={`status ${tone}`}>{status}</span>;
};

const ConfirmModal = ({ open, title, message, onConfirm, onClose, confirmLabel = "Confirm" }) => {
    if (!open) return null;
    return (
        <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="confirmTitle">
            <div className="panel">
                <div className="head">
                    <h3 id="confirmTitle">{title}</h3>
                    <button className="icon" onClick={onClose} aria-label="Close"><FiX /></button>
                </div>
                <div className="body">
                    <p>{message}</p>
                </div>
                <div className="foot">
                    <button onClick={onClose} className="ghost">Cancel</button>
                    <button onClick={onConfirm} className="danger">
                        <FiSlash style={{ marginRight: 6 }} />
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </Styled.Modal>
    );
};

export default function JournalDetailPage() {
    const { journalId = "JRN-2025-0007" } = useParams();
    const navigate = useNavigate();
    const data = useMemo(() => JOURNAL_FIXTURES[journalId] ?? null, [journalId]);
    const [copied, setCopied] = useState(false);
    const [showVoid, setShowVoid] = useState(false);
    const [disabledBanner, setDisabledBanner] = useState(false);

    useEffect(() => { setDisabledBanner(false); }, [journalId]);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    };

    const exportJson = () => {
        const file = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = `${journalId}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(a.href);
    };

    const doPrint = useCallback(() => {
        document.body.classList.add("print-section-mode");
        const cleanup = () => document.body.classList.remove("print-section-mode");
        window.addEventListener("afterprint", cleanup, { once: true });
        window.print();
    }, []);

    const blockedAction = (label) => {
        if (!DEMO_MODE) return;
        setDisabledBanner(true);
        // non-blocking info banner appears; no alert, no write
    };

    const onVoid = () => {
        setShowVoid(false);
        blockedAction("Void");
    };

    const notFound = !data;

    return (
        <Styled.Wrap>
            {/* Local print stylesheet for section-only print */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}</style>

            {/* Page top bar */}
            <div className="topbar">
                <nav className="crumbs" aria-label="Breadcrumb">
                    <NavLink to="/finance" end>Finance</NavLink>
                    <span> / </span>
                    <NavLink to="/finance/journals" end>Journals</NavLink>
                    <span> / </span>
                    <span className="current">{journalId}</span>
                </nav>

                <div className="quick-tabs" role="tablist" aria-label="Finance quick access">
                    <NavLink to="/finance/journals" end className="tab">Journals</NavLink>
                    <NavLink to="/finance/ledgers" end className="tab">Ledgers</NavLink>
                    <NavLink to="/finance/chart-of-accounts" end className="tab">COA</NavLink>
                    <NavLink to="/finance/taxes" end className="tab">Taxes</NavLink>
                    <NavLink to="/finance/gst-returns" end className="tab">GST Returns</NavLink>
                    <NavLink to="/reports/finance" end className="tab">Reports</NavLink>
                </div>
            </div>

            {/* Header */}
            <header className="header">
                <div className="title">
                    <h1>Journal Voucher <span className="mono">{journalId}</span></h1>
                    {!notFound && <StatusPill status={data.status} />}
                    {notFound && <span className="status warn">Not Found</span>}
                </div>

                <div className="actions">
                    <button onClick={doPrint} title="Print voucher">
                        <FiPrinter /> Print
                    </button>
                    <button onClick={exportJson} title="Export as JSON">
                        <FiDownload /> Export
                    </button>
                    <button onClick={copyLink} title="Copy deep link">
                        <FiCopy /> {copied ? "Copied" : "Copy Link"}
                    </button>
                    <span className="sep" />
                    <button className="ghost" disabled={DEMO_MODE} title="Post (demo disabled)" onClick={() => blockedAction("Post")}>
                        <FiCheckCircle /> Post
                    </button>
                    <button className="danger" onClick={() => setShowVoid(true)} title="Void journal (demo)">
                        <FiSlash /> Void
                    </button>
                </div>
            </header>

            {disabledBanner && (
                <div className="inline-banner" role="status">
                    Actions are disabled in demo. You can browse, print and export.
                </div>
            )}

            {/* Main grid */}
            <div className="grid">
                {/* Left: Printable voucher */}
                <section className="card voucher" id="search-print-area" aria-label="Journal voucher">
                    {!data ? (
                        <div className="empty">
                            <p>We couldn’t find <strong>{journalId}</strong>.</p>
                            <div className="links">
                                <Link to="/finance/journals">Back to Journals</Link>
                                <Link to="/finance">Finance Home</Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="voucher-head">
                                <div className="brand">
                                    <h2>Voucher</h2>
                                    <div className="sub">Reference: <span className="mono">{data.refNo}</span></div>
                                </div>
                                <div className="meta">
                                    <div><span className="k">Date</span><span className="v">{fmtDate(data.date)}</span></div>
                                    <div><span className="k">Time</span><span className="v">{fmtTime(data.date)}</span></div>
                                    <div><span className="k">Status</span><span className="v"><StatusPill status={data.status} /></span></div>
                                </div>
                            </div>

                            <div className="voucher-body">
                                <table className="lines" aria-label="Journal lines">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '12ch' }}>Type</th>
                                            <th>Account</th>
                                            <th>Narration</th>
                                            <th style={{ width: '16ch' }} className="right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.lines.map((l) => (
                                            <tr key={l.id}>
                                                <td><span className={`pill ${l.type === "Debit" ? "deb" : "cre"}`}>{l.type}</span></td>
                                                <td>
                                                    <NavLink to={`/finance/ledgers/${l.accountId}`} className="account">
                                                        {l.accountName} <span className="muted mono">{l.accountId}</span> <FiExternalLink className="ext" />
                                                    </NavLink>
                                                </td>
                                                <td className="muted">{l.narration}</td>
                                                <td className="right mono">{l.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3} className="right strong">Total Debit</td>
                                            <td className="right mono strong">{data.totals.debit}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="right strong">Total Credit</td>
                                            <td className="right mono strong">{data.totals.credit}</td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div className="notes">
                                    <div className="k">Notes</div>
                                    <p>{data.notes}</p>
                                </div>
                            </div>

                            <div className="voucher-foot">
                                <div className="sig">
                                    <div className="k">Prepared by</div>
                                    <div className="v">{data.createdBy.name}</div>
                                    <div className="muted">{fmtDateTime(data.createdAt)}</div>
                                </div>
                                <div className="sig">
                                    <div className="k">Posted by</div>
                                    <div className="v">{data.postedBy.name}</div>
                                    <div className="muted">{fmtDateTime(data.postedAt)}</div>
                                </div>
                                <div className="sig">
                                    <div className="k">Approved by</div>
                                    <div className="v muted">—</div>
                                    <div className="muted">—</div>
                                </div>
                            </div>
                        </>
                    )}
                </section>

                {/* Right: Meta, related, activity, quick links */}
                <aside className="side">
                    <section className="card meta">
                        <h3>Details</h3>
                        <div className="grid2">
                            <div><span className="k">Journal ID</span><span className="v mono">{journalId}</span></div>
                            <div><span className="k">Reference</span><span className="v mono">{data?.refNo || "—"}</span></div>
                            <div><span className="k">Status</span><span className="v"><StatusPill status={data?.status || "Draft"} /></span></div>
                            <div><span className="k">Date</span><span className="v">{data ? fmtDate(data.date) : "—"}</span></div>
                        </div>
                        <div className="row">
                            <span className="k">Created</span>
                            <span className="v">{data ? `${fmtDateTime(data.createdAt)} · ${data.createdBy.name}` : "—"}</span>
                        </div>
                        <div className="row">
                            <span className="k">Posted</span>
                            <span className="v">{data ? `${fmtDateTime(data.postedAt)} · ${data.postedBy.name}` : "—"}</span>
                        </div>
                    </section>

                    <section className="card related">
                        <h3>Related</h3>
                        <div className="chips">
                            {data?.related.vendors.map(v => (
                                <Link key={v.id} to={`/vendors/${v.id}`} className="chip">{v.name} <span className="mono">{v.id}</span></Link>
                            ))}
                        </div>
                        <div className="links">
                            {data?.related.purchaseOrders.map(po => (
                                <NavLink key={po.id} to={`/purchase-orders/${po.id}`}>PO {po.id} <FiExternalLink /></NavLink>
                            ))}
                            {data?.related.invoices.map(inv => (
                                <NavLink key={inv.id} to={`/invoices/${inv.id}`}>Invoice {inv.id} <FiExternalLink /></NavLink>
                            ))}
                            {data?.related.receipts.map(r => (
                                <NavLink key={r.id} to={`/receipts`}>Receipt {r.id} <FiExternalLink /></NavLink>
                            ))}
                            {data?.related.shipments.map(s => (
                                <NavLink key={s.id} to={`/shipments/${s.id}`}>Shipment {s.id} <FiExternalLink /></NavLink>
                            ))}
                        </div>
                        <div className="quick">
                            <NavLink to="/finance/ledgers" className="ghost small">Open Ledgers</NavLink>
                            <NavLink to="/finance/chart-of-accounts" className="ghost small">Open COA</NavLink>
                            <NavLink to="/reports/finance" className="ghost small">Finance Reports</NavLink>
                        </div>
                    </section>

                    <section className="card attach">
                        <h3>Attachments</h3>
                        <ul>
                            {data?.attachments.map(f => (
                                <li key={f.id}>
                                    <span className="file">{f.name}</span>
                                    <span className="muted">{f.size}</span>
                                    <button className="ghost small" disabled title="Demo: download disabled"><FiDownload /> Download</button>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="card activity">
                        <h3>Activity</h3>
                        <ol>
                            {data?.activity.map(a => (
                                <li key={a.id}>
                                    <div className="dot" />
                                    <div className="evt">
                                        <div className="line">{a.msg}</div>
                                        <div className="meta small muted">{fmtDateTime(a.at)} · {a.by}</div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="card more">
                        <h3>Navigate</h3>
                        <div className="grid2">
                            <NavLink to="/finance/journals" className="ghost">All Journals</NavLink>
                            <NavLink to="/finance/journals/JRN-2025-0006" className="ghost">Prev Journal</NavLink>
                            <NavLink to="/finance/journals/JRN-2025-0008" className="ghost">Next Journal</NavLink>
                            <NavLink to="/help" className="ghost">Help Center</NavLink>
                        </div>
                    </section>
                </aside>
            </div>

            {/* Confirm modal for Void */}
            <ConfirmModal
                open={showVoid}
                title="Void Journal"
                message="This will mark the journal as void. In demo, no data is changed."
                onConfirm={onVoid}
                onClose={() => setShowVoid(false)}
                confirmLabel="Void"
            />
        </Styled.Wrap>
    );
}
