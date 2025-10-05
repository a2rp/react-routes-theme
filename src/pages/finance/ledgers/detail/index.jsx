import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---- date format helpers (single source of truth) ---- */
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

const LedgerDetail = () => {
    const { accountId = "LEDGER-1001" } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // ---- demo fixture (display-only; no calculations here) ----
    const account = useMemo(() => ({
        id: accountId,
        code: "110101",
        name: "Cash in Hand",
        type: "Asset",
        currency: "INR",
        status: "Active",
        parent: { code: "1101", name: "Cash & Bank" },
        taxProfile: "Non-GST",
        openingBalance: "₹ 1,25,000.00 (Dr)",
        openingAsOn: "2025-04-01T00:00:00+05:30",
        createdAt: "2024-06-15T12:22:03+05:30",
        updatedAt: "2025-10-04T15:38:20+05:30",
        tags: ["finance", "current-asset", "priority"],
    }), [accountId]);

    const periodSummary = useMemo(() => ({
        periodLabel: "FY 2025-26",
        periodFrom: "2025-04-01T00:00:00+05:30",
        periodTo: "2026-03-31T23:59:59+05:30",
        broughtForward: "₹ 1,25,000.00 (Dr)",
        totalDebits: "₹ 9,40,000.00",
        totalCredits: "₹ 8,60,000.00",
        carriedForward: "₹ 2,05,000.00 (Dr)",
        lastReconciled: "2025-10-02T18:05:12+05:30",
    }), []);

    const entries = useMemo(() => ([
        { id: "JV-4021", dt: "2025-10-01T10:15:21+05:30", ref: "Receipt #RCPT-1188", journal: "Receipt", description: "Cash received from CUST-1001 (part payment for INV-2031)", debit: "₹ 35,000.00", credit: "—", balanceAfter: "₹ 1,60,000.00 (Dr)" },
        { id: "JV-4022", dt: "2025-10-01T17:32:54+05:30", ref: "Payment #PMT-9042", journal: "Payment", description: "Cash deposited to bank (BOB A/c)", debit: "—", credit: "₹ 50,000.00", balanceAfter: "₹ 1,10,000.00 (Dr)" },
        { id: "JV-4023", dt: "2025-10-02T09:02:03+05:30", ref: "Expense #EXP-7713", journal: "Expense", description: "Courier charges (Petty cash)", debit: "₹ 1,200.00", credit: "—", balanceAfter: "₹ 1,11,200.00 (Dr)" },
        { id: "JV-4024", dt: "2025-10-02T13:48:37+05:30", ref: "Receipt #RCPT-1189", journal: "Receipt", description: "Cash received from CUST-1012", debit: "₹ 22,500.00", credit: "—", balanceAfter: "₹ 1,33,700.00 (Dr)" },
        { id: "JV-4025", dt: "2025-10-03T11:20:10+05:30", ref: "Contra #CN-3320", journal: "Contra", description: "Cash withdrawn from bank (operational float)", debit: "₹ 50,000.00", credit: "—", balanceAfter: "₹ 1,83,700.00 (Dr)" },
        { id: "JV-4026", dt: "2025-10-03T17:02:45+05:30", ref: "Payment #PMT-9046", journal: "Payment", description: "Advance to vendor VEND-2007", debit: "—", credit: "₹ 35,000.00", balanceAfter: "₹ 1,48,700.00 (Dr)" },
        { id: "JV-4027", dt: "2025-10-04T09:30:18+05:30", ref: "Expense #EXP-7725", journal: "Expense", description: "Stationery and printing", debit: "₹ 2,350.00", credit: "—", balanceAfter: "₹ 1,51,050.00 (Dr)" },
        { id: "JV-4028", dt: "2025-10-04T12:56:02+05:30", ref: "Receipt #RCPT-1191", journal: "Receipt", description: "Cash received from CUST-1020 (round-off)", debit: "₹ 650.00", credit: "—", balanceAfter: "₹ 1,51,700.00 (Dr)" },
        { id: "JV-4029", dt: "2025-10-04T15:38:20+05:30", ref: "Payment #PMT-9051", journal: "Payment", description: "Cash paid for housekeeping", debit: "—", credit: "₹ 2,700.00", balanceAfter: "₹ 1,49,000.00 (Dr)" },
    ]), []);

    const [demoDialog, setDemoDialog] = useState("");

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

    const doExport = () => {
        const payload = { account, periodSummary, entries };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${account.code}-${account.name.replace(/\s+/g, "-").toLowerCase()}-ledger.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/finance">Finance</NavLink>
            <span>/</span>
            <NavLink to="/finance/ledgers">Ledgers</NavLink>
            <span>/</span>
            <span className="current">{account.code}</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print CSS (as specified) */}
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
                    <h1>{account.name}</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Code: {account.code}</span>
                        <span>•</span>
                        <span>Type: {account.type}</span>
                        <span>•</span>
                        <span>Status: {account.status}</span>
                    </div>
                    <div className="meta">
                        <span>Created: {fmtDate(account.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmtDateTime(account.updatedAt)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate("/finance/ledgers")} title="Back to ledgers">Back</button>
                    <button className="btnPrimary" onClick={doExport} title="Download JSON snapshot">Export</button>
                    <button className="btnPrimary" onClick={printSection} title="Print this ledger">Print</button>
                    <button className="btnGhost" disabled title="Demo only">New Journal</button>
                    <button className="btnGhost" onClick={() => setDemoDialog("Adjust opening balance is disabled in demo.")} title="Adjust opening balance">Adjust OB</button>
                </div>
            </Styled.Header>

            {/* Top summary band */}
            <Styled.Band className="card">
                <div className="item">
                    <div className="k">Period</div>
                    <div className="v">{periodSummary.periodLabel}</div>
                    <div className="s">{fmtDate(periodSummary.periodFrom)} — {fmtDate(periodSummary.periodTo)}</div>
                </div>
                <div className="item">
                    <div className="k">B/F</div>
                    <div className="v">{periodSummary.broughtForward}</div>
                    <div className="s">as on {fmtDate(periodSummary.periodFrom)}</div>
                </div>
                <div className="item">
                    <div className="k">Total Debits</div>
                    <div className="v">{periodSummary.totalDebits}</div>
                    <div className="s muted">receipts, contra, adjustments</div>
                </div>
                <div className="item">
                    <div className="k">Total Credits</div>
                    <div className="v">{periodSummary.totalCredits}</div>
                    <div className="s muted">payments, contra, adjustments</div>
                </div>
                <div className="item">
                    <div className="k">C/F</div>
                    <div className="v">{periodSummary.carriedForward}</div>
                    <div className="s">as of {fmtDateTime(new Date())}</div>
                </div>
            </Styled.Band>

            {/* Main 2-col layout */}
            <Styled.Grid>
                <section className="col main card">
                    {/* Filters (display-only) */}
                    <div className="filters">
                        <div className="row">
                            <div>
                                <label>From</label>
                                <input type="date" disabled title="Demo only" defaultValue="2025-10-01" />
                            </div>
                            <div>
                                <label>To</label>
                                <input type="date" disabled title="Demo only" defaultValue="2025-10-04" />
                            </div>
                            <div>
                                <label>Show</label>
                                <select disabled title="Demo only" defaultValue="all">
                                    <option value="all">All</option>
                                    <option value="debits">Only Debits</option>
                                    <option value="credits">Only Credits</option>
                                    <option value="reconciled">Reconciled</option>
                                    <option value="unreconciled">Unreconciled</option>
                                </select>
                            </div>
                            <div className="stretch">
                                <label>Search</label>
                                <input placeholder="Reference, description…" disabled title="Demo only" />
                            </div>
                            <div className="btns">
                                <button className="btnGhost" disabled title="Demo only">Apply</button>
                                <button className="btnGhost" disabled title="Demo only">Reset</button>
                            </div>
                        </div>
                    </div>

                    {/* Transactions table */}
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: 170 }}>Date</th>
                                    <th style={{ width: 160 }}>Ref</th>
                                    <th style={{ width: 120 }}>Journal</th>
                                    <th>Description</th>
                                    <th className="num" style={{ width: 140 }}>Debit</th>
                                    <th className="num" style={{ width: 140 }}>Credit</th>
                                    <th className="num" style={{ width: 200 }}>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entries.map((e) => (
                                    <tr key={e.id}>
                                        <td>
                                            <div className="tdp">
                                                <div>{fmtDate(e.dt)}</div>
                                                <div className="muted">{fmtTime(e.dt)}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <NavLink to={`/finance/journals/${e.id}`} title="Open journal">{e.id}</NavLink>
                                            <div className="muted">{e.ref}</div>
                                        </td>
                                        <td>{e.journal}</td>
                                        <td>{e.description}</td>
                                        <td className="num">{e.debit}</td>
                                        <td className="num">{e.credit}</td>
                                        <td className="num">{e.balanceAfter}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Reconciliation strip (display state) */}
                    <div className="recon card sub">
                        <div className="left">
                            <h3>Reconciliation</h3>
                            <div className="muted">Last reconciled on {fmtDateTime(periodSummary.lastReconciled)}</div>
                        </div>
                        <div className="right">
                            <button className="btnGhost" disabled title="Demo only">Start Reconciliation</button>
                            <button className="btnGhost" disabled title="Demo only">Mark as Reconciled</button>
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="col side">
                    <div className="card">
                        <h3>Account</h3>
                        <div className="kv">
                            <div><span className="k">Code</span><span className="v">{account.code}</span></div>
                            <div><span className="k">Type</span><span className="v">{account.type}</span></div>
                            <div><span className="k">Parent</span><span className="v">{account.parent.code} — {account.parent.name}</span></div>
                            <div><span className="k">Currency</span><span className="v">{account.currency}</span></div>
                            <div><span className="k">Tax Profile</span><span className="v">{account.taxProfile}</span></div>
                            <div><span className="k">Opening Balance</span><span className="v">{account.openingBalance}</span></div>
                            <div><span className="k">Opening as on</span><span className="v">{fmtDate(account.openingAsOn)}</span></div>
                        </div>
                        <div className="chips">
                            {account.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                        </div>
                    </div>

                    <div className="card">
                        <h3>Attachments</h3>
                        <ul className="files">
                            <li><a href="#" onClick={e => e.preventDefault()} title="Demo">cash-counter-audit.pdf</a><span className="muted"> • {fmtDate("2025-10-03T14:11:00+05:30")}</span></li>
                            <li><a href="#" onClick={e => e.preventDefault()} title="Demo">petty-cash-vouchers.zip</a><span className="muted"> • {fmtDate("2025-10-02T10:44:00+05:30")}</span></li>
                            <li><a href="#" onClick={e => e.preventDefault()} title="Demo">recon-oct-week1.csv</a><span className="muted"> • {fmtDate("2025-10-01T18:05:00+05:30")}</span></li>
                        </ul>
                        <div className="inlineBtns">
                            <button className="btnGhost" disabled title="Demo only">Upload</button>
                            <button className="btnGhost" disabled title="Demo only">Remove</button>
                        </div>
                    </div>

                    {/* Printable snapshot */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Snapshot</h3>
                        <div className="printKVs">
                            <div className="row"><span className="k">Account</span><span className="v">{account.name}</span></div>
                            <div className="row"><span className="k">Code</span><span className="v">{account.code}</span></div>
                            <div className="row"><span className="k">Type</span><span className="v">{account.type}</span></div>
                            <div className="row"><span className="k">Period</span><span className="v">{periodSummary.periodLabel}</span></div>
                            <div className="row"><span className="k">B/F</span><span className="v">{periodSummary.broughtForward}</span></div>
                            <div className="row"><span className="k">Debits</span><span className="v">{periodSummary.totalDebits}</span></div>
                            <div className="row"><span className="k">Credits</span><span className="v">{periodSummary.totalCredits}</span></div>
                            <div className="row"><span className="k">C/F</span><span className="v">{periodSummary.carriedForward}</span></div>
                            <div className="row"><span className="k">Printed</span><span className="v">{fmtDateTime(new Date())}</span></div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Opening balance updated</strong>
                                    <div className="muted">{fmtDateTime("2025-10-01T09:00:00+05:30")}</div>
                                </div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Attachment added (cash-counter-audit.pdf)</strong>
                                    <div className="muted">{fmtDateTime("2025-10-03T14:11:00+05:30")}</div>
                                </div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Reconciled through Oct Week 1</strong>
                                    <div className="muted">{fmtDateTime(periodSummary.lastReconciled)}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            {/* Demo modal */}
            {demoDialog ? (
                <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={() => setDemoDialog("")}>
                    <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                        <header><h4>Demo</h4></header>
                        <div className="body"><p>{demoDialog}</p></div>
                        <footer><button className="btnPrimary" onClick={() => setDemoDialog("")}>OK</button></footer>
                    </Styled.Modal>
                </Styled.Overlay>
            ) : null}
        </Styled.Page>
    );
};

export default LedgerDetail;
