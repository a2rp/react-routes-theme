import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdPrint, MdDownload, MdOpenInNew, MdInfoOutline, MdOutlineLock } from "react-icons/md";
import { Styled } from "./styled";

/** ─────────────────────────────────────────────────────────────
 *  Date utilities (strict formats)
 *  - Date: Sat Oct 04 2025
 *  - Date+Time: Sat Oct 04 2025 15:38:20hrs
 *  - Time: 15:38:20hrs
 *  ───────────────────────────────────────────────────────────── */
const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function pad(n) { return n < 10 ? `0${n}` : `${n}`; }
function formatDate(d) {
    const dt = (d instanceof Date) ? d : new Date(d);
    return `${DAY[dt.getDay()]} ${MON[dt.getMonth()]} ${pad(dt.getDate())} ${dt.getFullYear()}`;
}
function formatTime(d) {
    const dt = (d instanceof Date) ? d : new Date(d);
    return `${pad(dt.getHours())}:${pad(dt.getMinutes())}:${pad(dt.getSeconds())}hrs`;
}
function formatDateTime(d) {
    const dt = (d instanceof Date) ? d : new Date(d);
    return `${formatDate(dt)} ${formatTime(dt)}`;
}

/** Display-only sample data (pre-computed, no calculations here) */
const SAMPLE = {
    period: {
        asOf: new Date(),
        start: "2025-04-01T00:00:00+05:30",
        end: "2025-10-05T00:00:00+05:30",
        fy: "FY 2025-26",
    },
    kpis: [
        { key: "assets", label: "Total Assets", value: "₹ 12,48,20,000" },
        { key: "liabilities", label: "Total Liabilities", value: "₹ 7,31,90,000" },
        { key: "equity", label: "Equity", value: "₹ 5,16,30,000" },
        { key: "working", label: "Working Capital", value: "₹ 3,84,75,000" },
    ],
    statement: {
        assets: [
            {
                group: "Current Assets",
                rows: [
                    { code: "CA-101", name: "Cash & Cash Equivalents", balance: "₹ 1,48,50,000" },
                    { code: "CA-102", name: "Accounts Receivable", balance: "₹ 2,31,70,000", link: "/finance/ledgers/AR" },
                    { code: "CA-103", name: "Inventory", balance: "₹ 3,02,40,000", link: "/inventory" },
                    { code: "CA-104", name: "Short-term Investments", balance: "₹ 74,60,000" },
                ],
                total: "₹ 7,57,20,000",
            },
            {
                group: "Non-Current Assets",
                rows: [
                    { code: "NCA-201", name: "Property, Plant & Equipment", balance: "₹ 3,84,00,000", link: "/manufacturing" },
                    { code: "NCA-202", name: "Intangible Assets", balance: "₹ 72,00,000" },
                    { code: "NCA-203", name: "Deferred Tax Assets", balance: "₹ 35,00,000" },
                ],
                total: "₹ 4,91,00,000",
            },
        ],
        liabilitiesEquity: [
            {
                group: "Current Liabilities",
                rows: [
                    { code: "CL-301", name: "Accounts Payable", balance: "₹ 2,12,30,000", link: "/finance/ledgers/AP" },
                    { code: "CL-302", name: "GST Payable", balance: "₹ 58,60,000", link: "/finance/gst-returns" },
                    { code: "CL-303", name: "Short-term Borrowings", balance: "₹ 1,26,50,000" },
                ],
                total: "₹ 3,97,40,000",
            },
            {
                group: "Non-Current Liabilities",
                rows: [
                    { code: "NCL-401", name: "Long-term Borrowings", balance: "₹ 3,34,50,000" },
                ],
                total: "₹ 3,34,50,000",
            },
            {
                group: "Equity",
                rows: [
                    { code: "EQ-501", name: "Share Capital", balance: "₹ 3,00,00,000" },
                    { code: "EQ-502", name: "Reserves & Surplus", balance: "₹ 2,16,30,000", link: "/finance/ledgers/RES" },
                ],
                total: "₹ 5,16,30,000",
            },
        ],
        totals: {
            assets: "₹ 12,48,20,000",
            liabilitiesEquity: "₹ 12,48,20,000",
        }
    },
    quickLinks: [
        { label: "Chart of Accounts", to: "/finance/chart-of-accounts" },
        { label: "Ledgers", to: "/finance/ledgers" },
        { label: "Journals", to: "/finance/journals" },
        { label: "Profit & Loss", to: "/finance/profit-loss" },
        { label: "Trial Balance", to: "/finance/trial-balance" },
        { label: "GST Returns", to: "/finance/gst-returns" },
        { label: "Invoices", to: "/invoices" },
        { label: "Receipts", to: "/receipts" },
        { label: "Reports: Finance", to: "/reports/finance" },
    ],
};

function ConfirmModal({ open, title, body, confirmText = "Confirm", onConfirm, onClose }) {
    if (!open) return null;
    return (
        <Styled.ModalBackdrop role="dialog" aria-modal="true">
            <Styled.ModalCard className="card">
                <header>
                    <h3>{title}</h3>
                </header>
                <section>
                    <p>{body}</p>
                </section>
                <footer>
                    <button onClick={onClose} aria-label="Cancel">Cancel</button>
                    <button onClick={onConfirm} aria-label={confirmText} className="danger">{confirmText}</button>
                </footer>
            </Styled.ModalCard>
        </Styled.ModalBackdrop>
    );
}

export default function BalanceSheet() {
    const navigate = useNavigate();
    const [modal, setModal] = useState({ open: false, type: null });

    const now = useMemo(() => new Date(), []);
    const periodText = `${formatDate(SAMPLE.period.start)} — ${formatDate(SAMPLE.period.end)}`;
    const asOfText = formatDateTime(SAMPLE.period.asOf);

    const handlePrint = () => {
        const body = document.body;
        body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => body.classList.remove("print-section-mode"), 250);
    };

    const handleExport = () => {
        // simple static CSV (display-only)
        const rows = [
            ["Section", "Code", "Name", "Balance"],
            ...SAMPLE.statement.assets.flatMap(g => g.rows.map(r => ["Assets", r.code, r.name, r.balance])),
            ...SAMPLE.statement.liabilitiesEquity.flatMap(g => g.rows.map(r => ["Liabilities/Equity", r.code, r.name, r.balance])),
        ];
        const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `balance-sheet-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
    };

    const openDemoLock = (type) => setModal({ open: true, type });
    const closeDemoLock = () => setModal({ open: false, type: null });

    const modalCopy = useMemo(() => {
        if (!modal.open) return { title: "", body: "" };
        switch (modal.type) {
            case "close-period":
                return {
                    title: "Close Period",
                    body: "This is a display-only theme. Period close is disabled in demo.",
                    btn: "OK",
                };
            case "adjustments":
                return {
                    title: "Post Adjustments",
                    body: "Journal adjustments are disabled in demo.",
                    btn: "OK",
                };
            default:
                return { title: "Action Disabled", body: "Not available in demo.", btn: "OK" };
        }
    }, [modal]);

    return (
        <Styled.Page>
            {/* print rules (scoped) */}
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

            <Styled.Header>
                <div className="topline">
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/home" className="crumb" end>Home</NavLink>
                        <span className="sep">/</span>
                        <NavLink to="/finance" className="crumb" end>Finance</NavLink>
                        <span className="sep">/</span>
                        <span className="here">Balance Sheet</span>
                    </nav>

                    <div className="actions">
                        <button onClick={handlePrint} title="Print section">
                            <MdPrint size={18} /> <span>Print</span>
                        </button>
                        <button onClick={handleExport} title="Export CSV">
                            <MdDownload size={18} /> <span>Export</span>
                        </button>
                        <button onClick={() => openDemoLock("close-period")} title="Close period (disabled)">
                            <MdOutlineLock size={18} /> <span>Close Period</span>
                        </button>
                    </div>
                </div>

                <div className="titleRow">
                    <div>
                        <h1>Balance Sheet</h1>
                        <p className="meta">
                            <MdInfoOutline size={16} aria-hidden="true" />
                            <span> As of {asOfText} • {SAMPLE.period.fy}</span>
                        </p>
                    </div>

                    <div className="period">
                        <div className="range">
                            <span>Period:</span>
                            <strong>{periodText}</strong>
                        </div>
                        <div className="quick">
                            <button disabled title="Demo only">This FY</button>
                            <button disabled title="Demo only">This Quarter</button>
                            <button disabled title="Demo only">This Month</button>
                        </div>
                    </div>
                </div>
            </Styled.Header>

            <section id="search-print-area">
                <Styled.Kpis>
                    {SAMPLE.kpis.map(k => (
                        <div key={k.key} className="kpi card" role="article" aria-label={k.label}>
                            <div className="label">{k.label}</div>
                            <div className="value">{k.value}</div>
                        </div>
                    ))}
                </Styled.Kpis>

                <Styled.Content>
                    <div className="left">
                        <Styled.Statement className="card">
                            <div className="head">
                                <h2>Statement</h2>
                                <div className="head-actions">
                                    <NavLink to="/finance/trial-balance" className="ghost" title="Open Trial Balance">
                                        Open Trial Balance <MdOpenInNew size={16} />
                                    </NavLink>
                                    <NavLink to="/reports/finance" className="ghost" title="Finance Reports">
                                        Finance Reports <MdOpenInNew size={16} />
                                    </NavLink>
                                </div>
                            </div>

                            {/* Assets */}
                            <div className="section">
                                <h3>Assets</h3>
                                {SAMPLE.statement.assets.map(grp => (
                                    <details open key={grp.group}>
                                        <summary>{grp.group} <span className="total">{grp.total}</span></summary>
                                        <div className="tableWrap">
                                            <table role="table" aria-label={`${grp.group} table`}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: '120px' }}>Code</th>
                                                        <th>Name</th>
                                                        <th style={{ width: '180px' }} className="num">Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {grp.rows.map(r => (
                                                        <tr key={r.code}>
                                                            <td>{r.code}</td>
                                                            <td>
                                                                {r.link ? (
                                                                    <NavLink to={r.link} title="Open link">{r.name}</NavLink>
                                                                ) : r.name}
                                                            </td>
                                                            <td className="num">{r.balance}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </details>
                                ))}
                            </div>

                            {/* Liabilities & Equity */}
                            <div className="section">
                                <h3>Liabilities &amp; Equity</h3>
                                {SAMPLE.statement.liabilitiesEquity.map(grp => (
                                    <details open key={grp.group}>
                                        <summary>{grp.group} <span className="total">{grp.total}</span></summary>
                                        <div className="tableWrap">
                                            <table role="table" aria-label={`${grp.group} table`}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: '120px' }}>Code</th>
                                                        <th>Name</th>
                                                        <th style={{ width: '180px' }} className="num">Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {grp.rows.map(r => (
                                                        <tr key={r.code}>
                                                            <td>{r.code}</td>
                                                            <td>
                                                                {r.link ? (
                                                                    <NavLink to={r.link} title="Open link">{r.name}</NavLink>
                                                                ) : r.name}
                                                            </td>
                                                            <td className="num">{r.balance}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </details>
                                ))}
                            </div>

                            {/* Totals */}
                            <div className="footerTotals">
                                <div className="tot">
                                    <span>Assets Total</span>
                                    <strong>{SAMPLE.statement.totals.assets}</strong>
                                </div>
                                <div className="tot">
                                    <span>Liabilities + Equity</span>
                                    <strong>{SAMPLE.statement.totals.liabilitiesEquity}</strong>
                                </div>
                            </div>
                        </Styled.Statement>
                    </div>

                    <aside className="right">
                        <Styled.SideCard className="card">
                            <h3>Quick Links</h3>
                            <ul>
                                {SAMPLE.quickLinks.map((q) => (
                                    <li key={q.to}>
                                        <NavLink to={q.to} title={`Go to ${q.label}`}>{q.label}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </Styled.SideCard>

                        <Styled.SideCard className="card">
                            <h3>Notes</h3>
                            <div className="note">
                                Figures are for presentation only. For ledgers or vouchers, use the links above.
                            </div>
                            <div className="note">
                                To view receivables/payables aging, open
                                {" "}
                                <NavLink to="/reports/finance" title="Finance Reports">Finance Reports</NavLink>.
                            </div>
                            <div className="meta">
                                <span className="label">Generated</span>
                                <span className="value">{formatDateTime(now)}</span>
                            </div>
                            <div className="meta">
                                <span className="label">Time</span>
                                <span className="value">{formatTime(now)}</span>
                            </div>
                        </Styled.SideCard>

                        <Styled.SideCard className="card">
                            <h3>Period Controls</h3>
                            <div className="controls">
                                <button disabled title="Demo only">
                                    Post Adjustments
                                </button>
                                <button onClick={() => openDemoLock("adjustments")} title="Disabled in demo">
                                    Explain
                                </button>
                                <button disabled title="Demo only">
                                    Re-run Consolidation
                                </button>
                                <button onClick={() => openDemoLock("close-period")} title="Disabled in demo">
                                    Close Period
                                </button>
                            </div>
                        </Styled.SideCard>
                    </aside>
                </Styled.Content>
            </section>

            <ConfirmModal
                open={modal.open}
                title={modalCopy.title}
                body={modalCopy.body}
                confirmText={modalCopy.btn}
                onConfirm={closeDemoLock}
                onClose={closeDemoLock}
            />
        </Styled.Page>
    );
}
