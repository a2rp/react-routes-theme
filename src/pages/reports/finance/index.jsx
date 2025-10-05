import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as S from "./styled";
import { FiDownload, FiPrinter, FiExternalLink, FiChevronRight, FiArrowUpRight, FiShare2 } from "react-icons/fi";

/** --- date/time helpers (exact formats) --- */
const fmtDate = (iso) => {
    try {
        const d = new Date(iso);
        return d.toDateString(); // e.g. "Sat Oct 04 2025"
    } catch {
        return "";
    }
};
const fmtTime = (iso) => {
    try {
        const d = new Date(iso);
        return d.toLocaleTimeString("en-GB", { hour12: false }) + "hrs"; // "15:38:20hrs"
    } catch {
        return "";
    }
};
const fmtDateTime = (iso) => {
    try {
        const d = new Date(iso);
        return `${d.toDateString()} ${d.toLocaleTimeString("en-GB", { hour12: false })}hrs`;
    } catch {
        return "";
    }
};

/** Vite-defined build/commit times (from your vite.config.ts/js) */
const BUILD_ISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
const COMMIT_ISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString();

/** Static demo fixtures (display-only) */
const kpis = [
    { label: "Revenue (MTD)", value: "₹ 1,48,20,000", delta: "+4.8%", href: "/reports/sales" },
    { label: "Expenses (MTD)", value: "₹ 92,10,430", delta: "+1.2%", href: "/finance/ledgers" },
    { label: "Gross Margin", value: "37.8%", delta: "+0.6pp", href: "/reports/finance" },
    { label: "Outstanding AR", value: "₹ 58,36,210", delta: "↓", href: "/sales/payments" },
    { label: "Outstanding AP", value: "₹ 33,11,720", delta: "↓", href: "/purchase-orders" },
    { label: "Cash & Bank", value: "₹ 21,07,550", delta: "—", href: "/finance/ledgers/GL-CASH" },
];

const topAccounts = [
    { code: "GL-4000", name: "Revenue", balance: "₹ 12,48,20,000", route: "/finance/ledgers/GL-4000" },
    { code: "GL-5001", name: "COGS", balance: "₹ 7,75,40,230", route: "/finance/ledgers/GL-5001" },
    { code: "GL-1001", name: "Cash", balance: "₹ 9,87,540", route: "/finance/ledgers/GL-1001" },
    { code: "GL-1002", name: "Bank - Current A/C", balance: "₹ 20,18,010", route: "/finance/ledgers/GL-1002" },
    { code: "GL-2100", name: "Accounts Payable", balance: "₹ 33,11,720", route: "/finance/ledgers/GL-2100" },
    { code: "GL-1200", name: "Accounts Receivable", balance: "₹ 58,36,210", route: "/finance/ledgers/GL-1200" },
];

const recentJournals = [
    { id: "JV-10231", date: "2025-10-04T09:25:10+05:30", desc: "Sales recognition - Order ORD-3001", link: "/finance/journals/JV-10231", debit: "₹ 2,45,000", credit: "₹ 2,45,000" },
    { id: "JV-10230", date: "2025-10-03T18:04:41+05:30", desc: "Bank charges - ICICI", link: "/finance/journals/JV-10230", debit: "₹ 0", credit: "₹ 1,250" },
    { id: "JV-10229", date: "2025-10-03T10:11:02+05:30", desc: "Vendor bill - PO-5507", link: "/finance/journals/JV-10229", debit: "₹ 1,18,540", credit: "₹ 1,18,540" },
    { id: "JV-10228", date: "2025-10-02T16:33:55+05:30", desc: "Customer payment - INV-2031", link: "/finance/journals/JV-10228", debit: "₹ 1,50,000", credit: "₹ 1,50,000" },
];

const aging = [
    { bucket: "0–30 days", ar: "₹ 28,45,900", ap: "₹ 11,02,750" },
    { bucket: "31–60 days", ar: "₹ 19,11,420", ap: "₹ 13,44,970" },
    { bucket: "61–90 days", ar: "₹ 7,40,120", ap: "₹ 6,78,000" },
    { bucket: "90+ days", ar: "₹ 1,38,770", ap: "₹ 1,86,000" },
];

const taxes = [
    { name: "GST Output", amount: "₹ 12,18,320", route: "/finance/taxes" },
    { name: "GST Input", amount: "₹ 9,45,150", route: "/finance/taxes" },
    { name: "Net GST Payable", amount: "₹ 2,73,170", route: "/finance/gst-returns" },
];

const quickNav = [
    { label: "Balance Sheet", to: "/finance/balance-sheet" },
    { label: "Profit & Loss", to: "/finance/profit-loss" },
    { label: "Trial Balance", to: "/finance/trial-balance" },
    { label: "Ledgers", to: "/finance/ledgers" },
    { label: "Journal Vouchers", to: "/finance/journals" },
    { label: "Taxes", to: "/finance/taxes" },
    { label: "GST Returns", to: "/finance/gst-returns" },
    { label: "Invoices", to: "/invoices" },
    { label: "Payments", to: "/sales/payments" },
    { label: "Purchase Orders", to: "/purchase-orders" },
];

const FinanceReport = () => {
    const [exportOpen, setExportOpen] = useState(false);

    const buildDate = useMemo(() => fmtDateTime(BUILD_ISO), []);
    const commitDate = useMemo(() => fmtDateTime(COMMIT_ISO), []);

    const handlePrint = () => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 0);
        }
    };

    return (
        <S.Page>
            {/* print-only rules (section print) */}
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

            {/* Header */}
            <S.Header>
                <div className="breadcrumbs">
                    <NavLink to="/home">Home</NavLink>
                    <FiChevronRight aria-hidden />
                    <NavLink to="/reports">Reports</NavLink>
                    <FiChevronRight aria-hidden />
                    <span>Finance</span>
                </div>

                <div className="titleRow">
                    <div className="titleBlock">
                        <h1>Finance Overview</h1>
                        <div className="meta">
                            <span>Build: {buildDate}</span>
                            <span>Commit: {commitDate}</span>
                        </div>
                    </div>

                    <div className="actions">
                        <button onClick={() => setExportOpen(true)} title="Export (demo)">
                            <FiDownload /> Export
                        </button>
                        <button onClick={handlePrint} title="Print current section">
                            <FiPrinter /> Print
                        </button>
                        <Link to="/finance/ledgers" className="ghost">
                            <FiExternalLink /> Ledgers
                        </Link>
                        <Link to="/finance/journals" className="ghost">
                            <FiExternalLink /> Journals
                        </Link>
                    </div>
                </div>
            </S.Header>

            {/* Print area wraps the main analytics section */}
            <section id="search-print-area">
                {/* KPI grid */}
                <S.KpiGrid>
                    {kpis.map((k) => (
                        <Link key={k.label} to={k.href} className="kpi">
                            <div className="label">{k.label}</div>
                            <div className="value">
                                {k.value} <FiArrowUpRight className="trend" aria-hidden />
                            </div>
                            <div className="delta">{k.delta}</div>
                            {/* inline sparkline */}
                            <svg className="spark" width="100%" height="36" viewBox="0 0 120 36" preserveAspectRatio="none" aria-hidden>
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    points="0,20 12,22 24,18 36,24 48,16 60,14 72,18 84,12 96,16 108,10 120,14"
                                />
                            </svg>
                        </Link>
                    ))}
                </S.KpiGrid>

                {/* Two-column: Top accounts + Recent journals */}
                <S.Columns>
                    <S.Card>
                        <header>
                            <h2>Top Accounts by Balance</h2>
                            <Link to="/finance/ledgers">View All</Link>
                        </header>

                        <S.Table>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Account</th>
                                    <th className="right">Balance</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {topAccounts.map((row) => (
                                    <tr key={row.code}>
                                        <td><Link to={row.route}>{row.code}</Link></td>
                                        <td>{row.name}</td>
                                        <td className="right">{row.balance}</td>
                                        <td className="right">
                                            <Link to={row.route} className="inlineLink">Open <FiExternalLink /></Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </S.Table>

                        <div className="footLinks">
                            <Link to="/finance/balance-sheet">Go to Balance Sheet</Link>
                            <Link to="/finance/profit-loss">Open Profit &amp; Loss</Link>
                            <Link to="/finance/trial-balance">Trial Balance</Link>
                        </div>
                    </S.Card>

                    <S.Card>
                        <header>
                            <h2>Recent Journal Vouchers</h2>
                            <Link to="/finance/journals">View All</Link>
                        </header>

                        <S.Table>
                            <thead>
                                <tr>
                                    <th>JV No.</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th className="right">Debit</th>
                                    <th className="right">Credit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentJournals.map((j) => (
                                    <tr key={j.id}>
                                        <td><Link to={j.link}>{j.id}</Link></td>
                                        <td>
                                            <div>{fmtDate(j.date)}</div>
                                            <small className="muted">{fmtTime(j.date)}</small>
                                        </td>
                                        <td>{j.desc}</td>
                                        <td className="right">{j.debit}</td>
                                        <td className="right">{j.credit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </S.Table>

                        <div className="footLinks">
                            <Link to="/reports/finance">Finance Report</Link>
                            <Link to="/reports/sales">Sales Report</Link>
                            <Link to="/reports/inventory">Inventory Report</Link>
                        </div>
                    </S.Card>
                </S.Columns>

                {/* AR/AP Aging + Taxes */}
                <S.Columns>
                    <S.Card>
                        <header>
                            <h2>Receivables / Payables Aging</h2>
                            <div className="legend">
                                <span className="chip">AR</span>
                                <span className="chip">AP</span>
                            </div>
                        </header>
                        <S.Table>
                            <thead>
                                <tr>
                                    <th>Bucket</th>
                                    <th className="right">AR</th>
                                    <th className="right">AP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aging.map((a) => (
                                    <tr key={a.bucket}>
                                        <td>{a.bucket}</td>
                                        <td className="right">{a.ar}</td>
                                        <td className="right">{a.ap}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </S.Table>
                        <div className="footLinks">
                            <Link to="/finance/ledgers/GL-1200">Accounts Receivable (GL-1200)</Link>
                            <Link to="/finance/ledgers/GL-2100">Accounts Payable (GL-2100)</Link>
                        </div>
                    </S.Card>

                    <S.Card>
                        <header>
                            <h2>Tax Summary</h2>
                            <Link to="/finance/taxes">Open Taxes</Link>
                        </header>

                        <div className="taxGrid">
                            {taxes.map((t) => (
                                <Link to={t.route} key={t.name} className="tax">
                                    <div className="name">{t.name}</div>
                                    <div className="amt">{t.amount}</div>
                                </Link>
                            ))}
                        </div>

                        <div className="footLinks">
                            <Link to="/finance/gst-returns">GST Returns</Link>
                            <Link to="/reports/gst">GST Report</Link>
                        </div>
                    </S.Card>
                </S.Columns>

                {/* Quick navigation */}
                <S.QuickNav>
                    {quickNav.map((q) => (
                        <Link key={q.label} to={q.to} className="q">
                            <span>{q.label}</span>
                            <FiChevronRight aria-hidden />
                        </Link>
                    ))}
                </S.QuickNav>

                {/* Activity / meta */}
                <S.Card>
                    <header>
                        <h2>Recent Finance Activity</h2>
                        <Link to="/admin/audit-log">Open Audit Log</Link>
                    </header>
                    <S.Timeline>
                        <li>
                            <div className="dot" />
                            <div className="row">
                                <div className="when">{fmtDateTime("2025-10-04T11:35:20+05:30")}</div>
                                <div className="what">
                                    Customer payment recorded for <Link to="/invoices/INV-2031">INV-2031</Link> via <Link to="/finance/ledgers/GL-1002">Bank - Current A/C</Link>.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dot" />
                            <div className="row">
                                <div className="when">{fmtDateTime("2025-10-03T19:02:10+05:30")}</div>
                                <div className="what">
                                    Journal adjustment posted <Link to="/finance/journals/JV-10230">JV-10230</Link> (bank charges).
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dot" />
                            <div className="row">
                                <div className="when">{fmtDateTime("2025-10-03T10:55:42+05:30")}</div>
                                <div className="what">
                                    Vendor bill linked to <Link to="/purchase-orders/PO-5507">PO-5507</Link> and <Link to="/invoices/INV-2077">INV-2077</Link>.
                                </div>
                            </div>
                        </li>
                    </S.Timeline>
                </S.Card>
            </section>

            {/* Footer bar */}
            <S.Footer>
                <div className="left">
                    <span>Report refreshed:</span>
                    <strong>{fmtDateTime(BUILD_ISO)}</strong>
                </div>
                <div className="right">
                    <Link to="/reports">All Reports</Link>
                    <Link to="/reports/customers">Customer Report</Link>
                    <Link to="/reports/inventory">Inventory Report</Link>
                    <Link to="/reports/procurement">Procurement</Link>
                </div>
            </S.Footer>

            {/* Export modal (custom, no browser alert) */}
            {exportOpen && (
                <S.ModalBackdrop role="dialog" aria-modal="true" aria-labelledby="exportTitle">
                    <S.Modal>
                        <header>
                            <h3 id="exportTitle"><FiDownload /> Export Finance Report</h3>
                            <button className="icon" onClick={() => setExportOpen(false)} aria-label="Close">✕</button>
                        </header>
                        <div className="content">
                            <p>This is a display-only demo. You can still choose an export type to preview the flow.</p>
                            <div className="options">
                                <label className="opt"><input type="radio" name="ex" defaultChecked /> CSV</label>
                                <label className="opt"><input type="radio" name="ex" /> PDF</label>
                                <label className="opt"><input type="radio" name="ex" /> XLSX</label>
                                <label className="opt"><input type="radio" name="ex" /> JSON</label>
                            </div>
                            <div className="share">
                                <button className="ghost"><FiShare2 /> Copy Link</button>
                                <button className="ghost"><FiExternalLink /> Open Reports</button>
                            </div>
                        </div>
                        <footer>
                            <button onClick={() => setExportOpen(false)}>Done</button>
                        </footer>
                    </S.Modal>
                </S.ModalBackdrop>
            )}
        </S.Page>
    );
};

export default FinanceReport;
