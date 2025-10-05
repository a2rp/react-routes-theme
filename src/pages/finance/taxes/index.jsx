import React, { useMemo, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { FiPrinter, FiDownload, FiCopy, FiPlus, FiRefreshCw, FiExternalLink } from "react-icons/fi";

/** Display-only fixtures (no calculations; pre-computed text values) */
const TAX_SUMMARY = {
    jurisdiction: "India",
    regime: "GST",
    lastUpdatedISO: "2025-10-04T15:38:20+05:30",
    lastFiledPeriod: "Q2 FY2025-26",
    lastFiledOnISO: "2025-10-03T12:15:10+05:30",
    totals: {
        taxCollected: "₹ 12,84,500.00",
        inputCredit: "₹ 4,12,300.00",
        netTaxPayable: "₹ 8,72,200.00",
        exemptTurnover: "₹ 1,34,000.00"
    }
};

const TAX_RATES = [
    { code: "GST-000", name: "Zero Rated", type: "IGST", rate: "0%", effectiveFrom: "2024-04-01", effectiveTo: "", status: "Active" },
    { code: "GST-005", name: "Essential Goods", type: "CGST+SGST", rate: "5%", effectiveFrom: "2024-04-01", effectiveTo: "", status: "Active" },
    { code: "GST-012", name: "Standard (Lower)", type: "CGST+SGST", rate: "12%", effectiveFrom: "2023-10-01", effectiveTo: "", status: "Active" },
    { code: "GST-018", name: "Standard", type: "IGST", rate: "18%", effectiveFrom: "2023-04-01", effectiveTo: "", status: "Active" },
    { code: "GST-028", name: "Luxury & Sin Goods", type: "CGST+SGST", rate: "28%", effectiveFrom: "2022-04-01", effectiveTo: "", status: "Active" },
    { code: "EXEMPT", name: "Exempt Supplies", type: "N/A", rate: "Exempt", effectiveFrom: "2021-07-01", effectiveTo: "", status: "Active" }
];

const EXEMPTIONS = [
    { hsn: "3004", description: "Prescription medicines (select)", note: "As notified" },
    { hsn: "4901", description: "Printed books", note: "Educational" },
    { hsn: "1006", description: "Rice (unbranded)", note: "As notified" }
];

const RETURNS = [
    { period: "Apr 2025", form: "GSTR-1", status: "Filed", filedOnISO: "2025-05-10T10:02:30+05:30" },
    { period: "May 2025", form: "GSTR-3B", status: "Filed", filedOnISO: "2025-06-18T14:22:05+05:30" },
    { period: "Jun 2025", form: "GSTR-9 (Draft)", status: "Draft", filedOnISO: "" },
    { period: "Q2 FY2025-26", form: "CMP-08", status: "Filed", filedOnISO: "2025-10-03T12:15:10+05:30" }
];

const ACTIVITY = [
    { whenISO: "2025-10-04T15:38:20+05:30", text: "Rates reviewed and verified by Finance Admin" },
    { whenISO: "2025-09-28T11:05:02+05:30", text: "HSN-to-rate mapping updated (batch import)" },
    { whenISO: "2025-09-14T09:20:41+05:30", text: "GSTR-3B offsets validated against ledgers" },
    { whenISO: "2025-08-31T18:12:10+05:30", text: "Jurisdiction thresholds reconfirmed" }
];

/** Date formatting helpers */
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    return `${days[d.getDay()]} ${months[d.getMonth()]} ${String(d.getDate()).padStart(2, "0")} ${d.getFullYear()}`;
}
function formatDateTime(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${formatDate(iso)} ${hh}:${mm}:${ss}hrs`;
}
function formatTime(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
}

const DEMO_DISABLED_TITLE = "Demo only — action disabled";

const TaxesPage = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState("overview"); // overview | rates | returns | exemptions | settings
    const [showConfirm, setShowConfirm] = useState(false);
    const [copied, setCopied] = useState(false);
    const printRef = useRef(null);

    const deepLink = useMemo(() => `${window.location.origin}${import.meta.env.BASE_URL || ""}finance/taxes`, []);

    const onCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(deepLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch { }
    };

    const onExport = () => {
        const payload = {
            summary: TAX_SUMMARY,
            rates: TAX_RATES,
            exemptions: EXEMPTIONS,
            returns: RETURNS
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "taxes-export.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const onPrint = () => {
        // print the section
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
    };

    return (
        <Styled.Page>
            {/* Print rules (as provided) */}
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

            {/* Breadcrumb + Actions */}
            <Styled.Header>
                <div className="crumbs">
                    <NavLink to="/finance" className="crumb">Finance</NavLink>
                    <span className="sep">/</span>
                    <span className="here">Taxes</span>
                </div>
                <div className="actions">
                    <button className="ghost" onClick={onCopyLink} title="Copy deep link">
                        <FiCopy /> <span>Copy Link</span>{copied && <em className="chip">Copied</em>}
                    </button>
                    <button className="ghost" onClick={onExport} title="Export JSON snapshot">
                        <FiDownload /> <span>Export</span>
                    </button>
                    <button className="ghost" onClick={onPrint} title="Print section">
                        <FiPrinter /> <span>Print</span>
                    </button>
                    <button className="primary" disabled title={DEMO_DISABLED_TITLE}>
                        <FiPlus /> <span>New Rate</span>
                    </button>
                    <button className="danger" onClick={() => setShowConfirm(true)} title="Open confirm">
                        <FiRefreshCw /> <span>Reset All Rates</span>
                    </button>
                </div>
            </Styled.Header>

            {/* Header Meta */}
            <Styled.TopMeta>
                <div className="left">
                    <h1>Taxes</h1>
                    <p className="muted">
                        {TAX_SUMMARY.jurisdiction} • {TAX_SUMMARY.regime} • Last updated {formatDateTime(TAX_SUMMARY.lastUpdatedISO)}
                    </p>
                </div>
                <div className="right links">
                    <Link to="/finance/gst-returns" className="link">
                        Returns <FiExternalLink />
                    </Link>
                    <Link to="/reports/gst" className="link">
                        GST Report <FiExternalLink />
                    </Link>
                    <Link to="/settings/tax" className="link">
                        Tax Settings <FiExternalLink />
                    </Link>
                    <Link to="/finance/ledgers" className="link">
                        Ledgers <FiExternalLink />
                    </Link>
                    <Link to="/finance/journals" className="link">
                        Journals <FiExternalLink />
                    </Link>
                </div>
            </Styled.TopMeta>

            {/* Tabs */}
            <Styled.Tabs>
                <button className={tab === "overview" ? "active" : ""} onClick={() => setTab("overview")}>Overview</button>
                <button className={tab === "rates" ? "active" : ""} onClick={() => setTab("rates")}>Rates</button>
                <button className={tab === "returns" ? "active" : ""} onClick={() => setTab("returns")}>Returns</button>
                <button className={tab === "exemptions" ? "active" : ""} onClick={() => setTab("exemptions")}>Exemptions</button>
                <button className={tab === "settings" ? "active" : ""} onClick={() => setTab("settings")}>Settings</button>
            </Styled.Tabs>

            {/* PRINT AREA */}
            <div id="search-print-area" ref={printRef}>
                {tab === "overview" && (
                    <>
                        <Styled.Stats>
                            <div className="card">
                                <h4>Total Tax Collected</h4>
                                <div className="value">{TAX_SUMMARY.totals.taxCollected}</div>
                                <p className="sub">Up to {formatDate(TAX_SUMMARY.lastUpdatedISO)}</p>
                            </div>
                            <div className="card">
                                <h4>Input Tax Credit</h4>
                                <div className="value">{TAX_SUMMARY.totals.inputCredit}</div>
                                <p className="sub">Voucher verified</p>
                            </div>
                            <div className="card">
                                <h4>Net Tax Payable</h4>
                                <div className="value">{TAX_SUMMARY.totals.netTaxPayable}</div>
                                <p className="sub">As per filings</p>
                            </div>
                            <div className="card">
                                <h4>Exempt Turnover</h4>
                                <div className="value">{TAX_SUMMARY.totals.exemptTurnover}</div>
                                <p className="sub">Disclosure ready</p>
                            </div>
                        </Styled.Stats>

                        <Styled.GridTwo>
                            <div className="panel">
                                <div className="panelHead">
                                    <h3>Quick Links</h3>
                                </div>
                                <div className="linksList">
                                    <Link to="/invoices" className="item">Invoices</Link>
                                    <Link to="/invoices/credit-notes" className="item">Credit Notes</Link>
                                    <Link to="/receipts" className="item">Receipts</Link>
                                    <Link to="/reports/gst" className="item">GST: Summary</Link>
                                    <Link to="/reports/finance" className="item">Finance Report</Link>
                                    <Link to="/settings/tax" className="item">Configure Taxes</Link>
                                    <Link to="/tools/import-export" className="item">Import / Export</Link>
                                </div>
                            </div>

                            <div className="panel">
                                <div className="panelHead">
                                    <h3>Compliance Calendar</h3>
                                </div>
                                <ul className="calendar">
                                    <li><span>GSTR-1</span> <em>Monthly</em> <strong>Due by 11th</strong></li>
                                    <li><span>GSTR-3B</span> <em>Monthly</em> <strong>Due by 20th</strong></li>
                                    <li><span>GSTR-9</span> <em>Annually</em> <strong>As per rule</strong></li>
                                    <li><span>CMP-08</span> <em>Quarterly</em> <strong>As per rule</strong></li>
                                </ul>
                                <div className="note">Last filed: <strong>{TAX_SUMMARY.lastFiledPeriod}</strong> on <strong>{formatDateTime(TAX_SUMMARY.lastFiledOnISO)}</strong></div>
                            </div>
                        </Styled.GridTwo>

                        <Styled.Activity>
                            <div className="panelHead">
                                <h3>Activity</h3>
                            </div>
                            <ol>
                                {ACTIVITY.map((a, i) => (
                                    <li key={i}>
                                        <time>{formatDateTime(a.whenISO)}</time>
                                        <p>{a.text}</p>
                                    </li>
                                ))}
                            </ol>
                        </Styled.Activity>
                    </>
                )}

                {tab === "rates" && (
                    <Styled.Rates>
                        <div className="panelHead">
                            <h3>Rates Catalogue</h3>
                            <div className="panelActions">
                                <button disabled title={DEMO_DISABLED_TITLE}><FiPlus /> Add Rate</button>
                                <button onClick={() => setShowConfirm(true)} title="Open confirm"><FiRefreshCw /> Reset All</button>
                            </div>
                        </div>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Rate</th>
                                        <th>Effective From</th>
                                        <th>Effective To</th>
                                        <th>Status</th>
                                        <th>Navigate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TAX_RATES.map((r) => (
                                        <tr key={r.code}>
                                            <td><Link to="/settings/tax" className="lnk">{r.code}</Link></td>
                                            <td>{r.name}</td>
                                            <td>{r.type}</td>
                                            <td>{r.rate}</td>
                                            <td>{r.effectiveFrom ? formatDate(r.effectiveFrom) : ""}</td>
                                            <td>{r.effectiveTo ? formatDate(r.effectiveTo) : "—"}</td>
                                            <td><span className={`pill ${r.status.toLowerCase()}`}>{r.status}</span></td>
                                            <td className="go">
                                                <Link to="/reports/gst" className="chipLink">Report</Link>
                                                <Link to="/finance/ledgers" className="chipLink">Ledgers</Link>
                                                <Link to="/finance/journals" className="chipLink">Journals</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Styled.Rates>
                )}

                {tab === "returns" && (
                    <Styled.Returns>
                        <div className="panelHead">
                            <h3>Returns</h3>
                            <div className="panelActions">
                                <Link to="/finance/gst-returns" className="chipLink">Open Returns</Link>
                                <Link to="/reports/gst" className="chipLink">View GST Report</Link>
                            </div>
                        </div>
                        <div className="cards">
                            {RETURNS.map((r, idx) => (
                                <div className="card" key={idx}>
                                    <div className="head">
                                        <h4>{r.form}</h4>
                                        <span className={`pill ${r.status.toLowerCase()}`}>{r.status}</span>
                                    </div>
                                    <div className="body">
                                        <div className="row"><span>Period</span><strong>{r.period}</strong></div>
                                        <div className="row"><span>Filed On</span><strong>{r.filedOnISO ? formatDateTime(r.filedOnISO) : "—"}</strong></div>
                                    </div>
                                    <div className="foot">
                                        <Link to="/finance/gst-returns" className="linkBtn">Open</Link>
                                        <Link to="/reports/gst" className="linkBtn">Report</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Styled.Returns>
                )}

                {tab === "exemptions" && (
                    <Styled.Exemptions>
                        <div className="panelHead">
                            <h3>Exemptions & HSN Mapping</h3>
                            <div className="panelActions">
                                <button disabled title={DEMO_DISABLED_TITLE}><FiPlus /> Add Exemption</button>
                            </div>
                        </div>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>HSN</th>
                                        <th>Description</th>
                                        <th>Note</th>
                                        <th>Navigate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {EXEMPTIONS.map((e) => (
                                        <tr key={e.hsn}>
                                            <td>{e.hsn}</td>
                                            <td>{e.description}</td>
                                            <td>{e.note}</td>
                                            <td className="go">
                                                <Link to="/products" className="chipLink">Products</Link>
                                                <Link to="/reports/gst" className="chipLink">GST Report</Link>
                                                <Link to="/settings/tax" className="chipLink">Settings</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Styled.Exemptions>
                )}

                {tab === "settings" && (
                    <Styled.Settings>
                        <div className="panel">
                            <div className="panelHead"><h3>Setup</h3></div>
                            <ul className="links">
                                <li><Link to="/settings/tax">Tax Settings</Link></li>
                                <li><Link to="/settings/numbering">Document Numbering</Link></li>
                                <li><Link to="/settings/currencies">Currencies</Link></li>
                                <li><Link to="/settings/print-templates">Print Templates</Link></li>
                                <li><Link to="/settings/notifications">Notifications</Link></li>
                                <li><Link to="/settings/webhooks">Webhooks</Link></li>
                            </ul>
                        </div>
                        <div className="panel">
                            <div className="panelHead"><h3>Related</h3></div>
                            <ul className="links">
                                <li><Link to="/invoices">Invoices</Link></li>
                                <li><Link to="/invoices/credit-notes">Credit Notes</Link></li>
                                <li><Link to="/receipts">Receipts</Link></li>
                                <li><Link to="/finance/ledgers">Ledgers</Link></li>
                                <li><Link to="/finance/journals">Journals</Link></li>
                                <li><Link to="/reports/gst">GST Reports</Link></li>
                            </ul>
                        </div>
                    </Styled.Settings>
                )}
            </div>

            {/* Confirm Modal (self-made, no browser alert) */}
            {showConfirm && (
                <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="tax-reset-title">
                    <div className="scrim" onClick={() => setShowConfirm(false)} />
                    <div className="dialog">
                        <h3 id="tax-reset-title">Reset All Rates?</h3>
                        <p>This is a demo. No changes will be applied.</p>
                        <div className="actions">
                            <button className="ghost" onClick={() => setShowConfirm(false)}>Close</button>
                            <button className="primary" disabled title={DEMO_DISABLED_TITLE}>Confirm</button>
                        </div>
                    </div>
                </Styled.Modal>
            )}
        </Styled.Page>
    );
};

export default TaxesPage;
