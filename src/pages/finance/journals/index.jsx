import React, { useMemo, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdOutlinePrint,
    MdOutlineCloudDownload,
    MdOpenInNew,
    MdLock,
    MdHistory,
    MdOutlineSearch,
} from "react-icons/md";

/** --- tiny date utils to match the required formats --- */
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function two(n) { return n.toString().padStart(2, "0"); }
function fmtDate(iso) {
    const d = new Date(iso);
    return `${DAYS[d.getDay()]} ${MONS[d.getMonth()]} ${two(d.getDate())} ${d.getFullYear()}`;
}
function fmtTime(iso) {
    const d = new Date(iso);
    return `${two(d.getHours())}:${two(d.getMinutes())}:${two(d.getSeconds())}hrs`;
}
function fmtDateTime(iso) { return `${fmtDate(iso)} ${fmtTime(iso)}`; }

/** use commit/build time if Vite injected, else now */
const COMMIT_ISO = (typeof __APP_COMMIT_ISO__ !== "undefined") ? __APP_COMMIT_ISO__ : new Date().toISOString();
const BUILD_ISO = (typeof __APP_BUILD_ISO__ !== "undefined") ? __APP_BUILD_ISO__ : new Date().toISOString();

/** --- display-only dataset (pre-specified) --- */
const JOURNALS = [
    {
        id: "JRN-2025-0001",
        date: "2025-10-04T15:38:20+05:30",
        type: "General",
        reference: { type: "Invoice", id: "INV-2031", link: "/invoices/INV-2031" },
        lines: 5,
        debit: "₹ 58,240.00",
        credit: "₹ 58,240.00",
        status: "Posted",
        accounts: [{ id: "LED-1001", name: "Sales A/C" }, { id: "LED-2101", name: "GST Output" }],
    },
    {
        id: "JRN-2025-0002",
        date: "2025-10-03T12:22:11+05:30",
        type: "Payment",
        reference: { type: "Receipt", id: "RCT-5127", link: "/receipts" },
        lines: 3,
        debit: "₹ 18,000.00",
        credit: "₹ 18,000.00",
        status: "Posted",
        accounts: [{ id: "LED-1301", name: "Bank A/C" }, { id: "LED-1101", name: "Accounts Receivable" }],
    },
    {
        id: "JRN-2025-0003",
        date: "2025-10-03T09:05:44+05:30",
        type: "Adjustment",
        reference: { type: "Inventory", id: "ADJ-901", link: "/inventory/adjustments" },
        lines: 4,
        debit: "₹ 7,950.00",
        credit: "₹ 7,950.00",
        status: "Draft",
        accounts: [{ id: "LED-1501", name: "Inventory" }, { id: "LED-5001", name: "COGS" }],
    },
    {
        id: "JRN-2025-0004",
        date: "2025-10-02T18:46:02+05:30",
        type: "Reversal",
        reference: { type: "Invoice", id: "INV-2022", link: "/invoices/INV-2022" },
        lines: 2,
        debit: "₹ 1,200.00",
        credit: "₹ 1,200.00",
        status: "Reversed",
        accounts: [{ id: "LED-1001", name: "Sales A/C" }],
    },
    {
        id: "JRN-2025-0005",
        date: "2025-10-02T08:14:30+05:30",
        type: "General",
        reference: { type: "PO Bill", id: "BILL-774", link: "/purchase-orders/BILL-774" },
        lines: 6,
        debit: "₹ 92,340.00",
        credit: "₹ 92,340.00",
        status: "Posted",
        accounts: [{ id: "LED-1401", name: "Accounts Payable" }, { id: "LED-1501", name: "Inventory" }],
    },
    {
        id: "JRN-2025-0006",
        date: "2025-10-01T16:00:00+05:30",
        type: "Payment",
        reference: { type: "Vendor Payment", id: "PAY-921", link: "/finance/payments" },
        lines: 2,
        debit: "₹ 40,000.00",
        credit: "₹ 40,000.00",
        status: "Posted",
        accounts: [{ id: "LED-1401", name: "Accounts Payable" }, { id: "LED-1301", name: "Bank A/C" }],
    },
    {
        id: "JRN-2025-0007",
        date: "2025-09-29T11:10:10+05:30",
        type: "General",
        reference: { type: "Manual", id: "MNL-321", link: "/finance/journals/JRN-2025-0007" },
        lines: 8,
        debit: "₹ 10,500.00",
        credit: "₹ 10,500.00",
        status: "Posted",
        accounts: [{ id: "LED-2201", name: "Round-off" }],
    },
    {
        id: "JRN-2025-0008",
        date: "2025-09-28T17:35:22+05:30",
        type: "Adjustment",
        reference: { type: "Stock Count", id: "CNT-102", link: "/inventory/adjustments" },
        lines: 5,
        debit: "₹ 3,120.00",
        credit: "₹ 3,120.00",
        status: "Posted",
        accounts: [{ id: "LED-1501", name: "Inventory" }],
    },
    {
        id: "JRN-2025-0009",
        date: "2025-09-27T10:25:55+05:30",
        type: "General",
        reference: { type: "Invoice", id: "INV-1998", link: "/invoices/INV-1998" },
        lines: 4,
        debit: "₹ 25,000.00",
        credit: "₹ 25,000.00",
        status: "Posted",
        accounts: [{ id: "LED-1001", name: "Sales A/C" }, { id: "LED-2101", name: "GST Output" }],
    },
    {
        id: "JRN-2025-0010",
        date: "2025-09-27T08:02:12+05:30",
        type: "Payment",
        reference: { type: "Receipt", id: "RCT-5068", link: "/receipts" },
        lines: 2,
        debit: "₹ 9,000.00",
        credit: "₹ 9,000.00",
        status: "Draft",
        accounts: [{ id: "LED-1301", name: "Bank A/C" }, { id: "LED-1101", name: "Accounts Receivable" }],
    },
];

/** simple info cards (static display) */
const METRICS = [
    { key: "posted", label: "Posted (30d)", value: "124", sub: "Last sync " + fmtDateTime(COMMIT_ISO) },
    { key: "drafts", label: "Drafts", value: "7", sub: "Ready to review" },
    { key: "reversed", label: "Reversals", value: "3", sub: "Past 30 days" },
    { key: "balance", label: "Trial Balance", value: "₹ 0.00", sub: "Debits = Credits" },
];

export default function JournalsList() {
    const { search } = useLocation();
    const [showDemoModal, setShowDemoModal] = useState(false);
    const qs = new URLSearchParams(search);
    const statusFilter = qs.get("status"); // purely visual; data not filtered (display-only)

    const list = useMemo(() => {
        // display-only: optionally visualize a filtered header state if ?status= present
        if (!statusFilter) return JOURNALS;
        return JOURNALS; // do not change dataset; theme-only
    }, [statusFilter]);

    const handleExport = () => {
        const blob = new Blob([JSON.stringify(JOURNALS, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "journals.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const handlePrint = () => {
        const cls = "print-section-mode";
        document.body.classList.add(cls);
        setTimeout(() => {
            window.print();
            setTimeout(() => document.body.classList.remove(cls), 0);
        }, 50);
    };

    return (
        <Styled.Page>
            {/* print-only CSS for section */}
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

            <Styled.Head>
                <div className="left">
                    <nav className="crumbs" aria-label="Breadcrumb">
                        <NavLink to="/finance" end>Finance</NavLink>
                        <span className="sep">/</span>
                        <span className="current">Journals</span>
                    </nav>
                    <h1>Journals</h1>
                    <p className="meta">
                        Build: <strong>{fmtDateTime(BUILD_ISO)}</strong> &middot; Last commit: <strong>{fmtDateTime(COMMIT_ISO)}</strong>
                    </p>
                </div>

                <div className="right">
                    <div className="quicklinks" role="group" aria-label="Quick links">
                        <NavLink to="/finance/chart-of-accounts" className="chip">Chart of Accounts</NavLink>
                        <NavLink to="/finance/ledgers" className="chip">Ledgers</NavLink>
                        <NavLink to="/finance/journals" className="chip">Journals</NavLink>
                        <NavLink to="/finance/taxes" className="chip">Taxes</NavLink>
                        <NavLink to="/finance/gst-returns" className="chip">GST Returns</NavLink>
                        <NavLink to="/finance/balance-sheet" className="chip">Balance Sheet</NavLink>
                        <NavLink to="/finance/profit-loss" className="chip">P&amp;L</NavLink>
                        <NavLink to="/finance/trial-balance" className="chip">Trial Balance</NavLink>
                    </div>

                    <div className="actions">
                        <button
                            className="btn ghost"
                            onClick={handlePrint}
                            title="Print this table"
                        >
                            <MdOutlinePrint size={18} /> Print
                        </button>
                        <button className="btn ghost" onClick={handleExport} title="Download journals.json">
                            <MdOutlineCloudDownload size={18} /> Export JSON
                        </button>
                        <button
                            className="btn primary"
                            data-disabled="true"
                            onClick={() => setShowDemoModal(true)}
                            aria-disabled="true"
                            title="Demo mode"
                        >
                            <MdLock size={18} /> New Journal
                        </button>
                    </div>
                </div>
            </Styled.Head>

            <Styled.MetricRow>
                {METRICS.map(m => (
                    <div className="metric card" key={m.key}>
                        <div className="label">{m.label}</div>
                        <div className="value">{m.value}</div>
                        <div className="sub">{m.sub}</div>
                    </div>
                ))}
            </Styled.MetricRow>

            <Styled.TabBar role="tablist" aria-label="Journal tabs">
                <NavLink to="/finance/journals" end className="tab">All</NavLink>
                <NavLink to="/finance/journals?status=posted" className="tab">Posted</NavLink>
                <NavLink to="/finance/journals?status=draft" className="tab">Draft</NavLink>
                <NavLink to="/finance/journals?status=reversed" className="tab">Reversed</NavLink>

                <div className="spacer" />
                <div className="search">
                    <MdOutlineSearch size={18} />
                    <input placeholder="Search (demo)" disabled />
                </div>
            </Styled.TabBar>

            {/* PRINT AREA */}
            <section id="search-print-area">
                <Styled.TableWrap aria-label="Journals table">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: 160 }}>Journal ID</th>
                                <th style={{ width: 170 }}>Date</th>
                                <th>Type</th>
                                <th>Reference</th>
                                <th>Lines</th>
                                <th>Debit</th>
                                <th>Credit</th>
                                <th>Status</th>
                                <th style={{ width: 220 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(row => (
                                <tr key={row.id}>
                                    <td>
                                        <NavLink to={`/finance/journals/${row.id}`} className="link-strong">
                                            {row.id} <MdOpenInNew size={14} className="icon-open" />
                                        </NavLink>
                                    </td>
                                    <td>
                                        <div className="date">{fmtDate(row.date)}</div>
                                        <div className="time">{fmtTime(row.date)}</div>
                                    </td>
                                    <td>{row.type}</td>
                                    <td>
                                        <div className="ref">
                                            <span className="badge">{row.reference.type}</span>
                                            <NavLink to={row.reference.link} className="ref-link">
                                                {row.reference.id}
                                            </NavLink>
                                        </div>
                                        <div className="accounts">
                                            {row.accounts.map(a => (
                                                <NavLink key={a.id} to={`/finance/ledgers/${a.id}`} className="account-chip">{a.name}</NavLink>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="num">{row.lines}</td>
                                    <td className="num">{row.debit}</td>
                                    <td className="num">{row.credit}</td>
                                    <td>
                                        <span className={`status ${row.status.toLowerCase()}`}>{row.status}</span>
                                    </td>
                                    <td>
                                        <div className="row-actions">
                                            <NavLink className="btn tiny ghost" to={`/finance/journals/${row.id}`} title="Open details">
                                                View
                                            </NavLink>
                                            <button className="btn tiny ghost" title="Print this entry" onClick={handlePrint}>Print</button>
                                            <NavLink className="btn tiny ghost" to="/finance/ledgers" title="Open Ledgers">
                                                Ledgers
                                            </NavLink>
                                            {row.reference.link && (
                                                <NavLink className="btn tiny ghost" to={row.reference.link} title="Go to reference">
                                                    {row.reference.type}
                                                </NavLink>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="legend">
                        <span className="status posted">Posted</span>
                        <span className="status draft">Draft</span>
                        <span className="status reversed">Reversed</span>
                    </div>
                </Styled.TableWrap>
            </section>

            <Styled.FooterBar>
                <div className="pages">
                    <span>Rows: {list.length}</span>
                    <span className="divider">•</span>
                    <NavLink to="/finance/journals?page=1">1</NavLink>
                    <NavLink to="/finance/journals?page=2">2</NavLink>
                    <NavLink to="/finance/journals?page=3">3</NavLink>
                    <NavLink to="/finance/journals?page=4">4</NavLink>
                    <NavLink to="/finance/journals?page=5">5</NavLink>
                </div>
                <div className="rightlinks">
                    <NavLink to="/reports/finance" className="footlink"><MdHistory size={16} /> Finance Report</NavLink>
                    <NavLink to="/reports/gst" className="footlink">GST Report</NavLink>
                    <NavLink to="/settings/print-templates" className="footlink">Print Templates</NavLink>
                </div>
            </Styled.FooterBar>

            {/* Demo modal */}
            {showDemoModal && (
                <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="demo-title">
                    <div className="overlay" onClick={() => setShowDemoModal(false)} />
                    <div className="content card">
                        <h3 id="demo-title">New Journal</h3>
                        <p>Demo mode is display-only. Creating or editing entries is disabled.</p>
                        <div className="actions">
                            <button className="btn primary" onClick={() => setShowDemoModal(false)}>OK</button>
                        </div>
                    </div>
                </Styled.Modal>
            )}
        </Styled.Page>
    );
}
