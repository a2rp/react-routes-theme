import { useMemo, useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiDownload, FiPrinter, FiFileText, FiExternalLink, FiChevronDown, FiChevronRight, FiClock, FiCheckCircle, FiXCircle, FiArrowRightCircle, FiLink } from "react-icons/fi";
import { Styled } from "./styled";

/** Small helpers (display-only formatting) */
const fmtDate = (iso) => {
    try {
        const d = new Date(iso);
        return d.toDateString(); // e.g. "Sat Oct 04 2025"
    } catch { return iso; }
};
const fmtDateTime = (iso) => {
    try {
        const d = new Date(iso);
        const t = d.toLocaleTimeString("en-GB", { hour12: false });
        return `${d.toDateString()} ${t}hrs`; // e.g. "Sat Oct 04 2025 15:38:20hrs"
    } catch { return iso; }
};

/** Demo fixtures (display only) */
const FY = "2025-26";
const PERIODS = [
    { code: "2025-04", label: "Apr 2025" },
    { code: "2025-05", label: "May 2025" },
    { code: "2025-06", label: "Jun 2025" },
    { code: "2025-07", label: "Jul 2025" },
    { code: "2025-08", label: "Aug 2025" },
    { code: "2025-09", label: "Sep 2025" },
];

const RETURNS = [
    // Pre-formatted labels to guarantee your exact spec
    {
        id: "RET-APR-1",
        period: "Apr 2025",
        type: "GSTR-1",
        dueDateLabel: "Sat May 10 2025",
        filedOnLabel: "Mon May 12 2025 11:04:20hrs",
        arn: "AA2704251234567",
        status: "Filed",
        links: { summary: "/reports/gst", invoices: "/invoices", drill: "/reports/sales" }
    },
    {
        id: "RET-APR-3B",
        period: "Apr 2025",
        type: "GSTR-3B",
        dueDateLabel: "Tue May 20 2025",
        filedOnLabel: "Wed May 21 2025 15:30:05hrs",
        arn: "BB2704257654321",
        status: "Filed",
        links: { summary: "/reports/finance", invoices: "/invoices", drill: "/finance/ledgers" }
    },
    {
        id: "RET-AUG-1",
        period: "Aug 2025",
        type: "GSTR-1",
        dueDateLabel: "Thu Sep 11 2025",
        filedOnLabel: "Fri Sep 12 2025 09:12:41hrs",
        arn: "CC2708251122334",
        status: "Filed",
        links: { summary: "/reports/gst", invoices: "/invoices", drill: "/reports/sales" }
    },
    {
        id: "RET-SEP-1",
        period: "Sep 2025",
        type: "GSTR-1",
        dueDateLabel: "Sat Oct 11 2025",
        filedOnLabel: null,
        arn: "-",
        status: "Pending",
        links: { summary: "/reports/gst", invoices: "/invoices", drill: "/reports/sales" }
    },
    {
        id: "RET-SEP-3B",
        period: "Sep 2025",
        type: "GSTR-3B",
        dueDateLabel: "Mon Oct 20 2025",
        filedOnLabel: null,
        arn: "-",
        status: "Pending",
        links: { summary: "/reports/finance", invoices: "/invoices", drill: "/finance/ledgers" }
    },
];

/** Summary tiles (display only numbers) */
const SUMMARY = [
    { key: "gstr1Docs", label: "GSTR-1: Docs", value: "154", hint: "B2B + B2C + CDN + EXP", link: "/reports/gst" },
    { key: "taxableValue", label: "Taxable Value", value: "₹ 42,18,500", hint: "Outward supplies (net)", link: "/reports/sales" },
    { key: "outputTax", label: "Output Tax", value: "₹ 7,59,330", hint: "IGST + CGST + SGST", link: "/finance/ledgers" },
    { key: "itc", label: "ITC Available", value: "₹ 3,06,900", hint: "3B - Table 4(A)", link: "/reports/finance" },
    { key: "netPayable", label: "Net Payable", value: "₹ 4,52,430", hint: "After set-off", link: "/finance/journals" },
    { key: "eWay", label: "e-Way Bills", value: "23", hint: "Linked to invoices", link: "/shipments" },
    { key: "returnsFiled", label: "Returns Filed", value: "3 / 5", hint: "FY 2025-26 so far", link: "/reports/gst" },
    { key: "lastSync", label: "Last Sync", value: fmtDateTime(globalThis.__APP_COMMIT_ISO__ || globalThis.__APP_BUILD_ISO__ || new Date().toISOString()), hint: "Build/commit time", link: "/changelog" },
];

const GstReturns = () => {
    const navigate = useNavigate();
    const [period, setPeriod] = useState(PERIODS[PERIODS.length - 1].code); // default latest
    const [open1, setOpen1] = useState(true);
    const [open3b, setOpen3b] = useState(true);
    const [modal, setModal] = useState(null); // { title, message }

    const currentLabel = useMemo(
        () => PERIODS.find(p => p.code === period)?.label || "",
        [period]
    );

    const filtered = useMemo(() => {
        return RETURNS.filter(r => r.period === currentLabel || currentLabel === "");
    }, [currentLabel]);

    const onDemoAction = useCallback((title) => {
        setModal({
            title,
            message: "This is a display-only demo. Actions like filing, downloading JSON, or e-invoice pushes are disabled."
        });
    }, []);

    const handlePrint = useCallback(() => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
        }
    }, []);

    const jump = (to) => navigate(to);

    return (
        <Styled.Wrap>
            {/* Top bar */}
            <div className="topbar">
                <div className="breadcrumbs">
                    <NavLink to="/home" className="crumb">Home</NavLink>
                    <FiChevronRight className="sep" />
                    <NavLink to="/finance" className="crumb">Finance</NavLink>
                    <FiChevronRight className="sep" />
                    <span className="crumb current" aria-current="page">GST Returns</span>
                </div>

                <div className="actions">
                    <button onClick={() => onDemoAction("File Return")}>
                        <FiFileText /> File Return
                    </button>
                    <button onClick={() => onDemoAction("Download GSTR-1 JSON")}>
                        <FiDownload /> GSTR-1 JSON
                    </button>
                    <button onClick={() => onDemoAction("Download GSTR-3B JSON")}>
                        <FiDownload /> GSTR-3B JSON
                    </button>
                    <button onClick={handlePrint}>
                        <FiPrinter /> Print Summary
                    </button>
                </div>
            </div>

            {/* Quick links */}
            <div className="quicklinks">
                <NavLink to="/finance/taxes"><FiArrowRightCircle /> Taxes</NavLink>
                <NavLink to="/finance/ledgers"><FiArrowRightCircle /> Ledgers</NavLink>
                <NavLink to="/finance/journals"><FiArrowRightCircle /> Journals</NavLink>
                <NavLink to="/invoices"><FiArrowRightCircle /> Invoices</NavLink>
                <NavLink to="/reports/gst"><FiArrowRightCircle /> GST Report</NavLink>
                <NavLink to="/reports/sales"><FiArrowRightCircle /> Sales Report</NavLink>
                <NavLink to="/settings/tax"><FiArrowRightCircle /> Tax Settings</NavLink>
            </div>

            {/* Filters */}
            <div className="filters">
                <div className="fy">FY <span className="pill">{FY}</span></div>
                <div className="periods">
                    {PERIODS.map(p => (
                        <button
                            key={p.code}
                            onClick={() => setPeriod(p.code)}
                            className={p.code === period ? "chip active" : "chip"}
                            aria-pressed={p.code === period}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Summary */}
            <div className="summaryGrid">
                {SUMMARY.map(tile => (
                    <div key={tile.key} className="card">
                        <div className="label">{tile.label}</div>
                        <div className="value">{tile.value}</div>
                        <div className="hint">
                            {tile.hint} <NavLink to={tile.link} className="inlineLink"><FiLink /> open</NavLink>
                        </div>
                    </div>
                ))}
            </div>

            {/* Printable area starts */}
            <div id="search-print-area">
                {/* Accordions */}
                <div className="accordion">
                    <button className="accHeader" onClick={() => setOpen1(v => !v)}>
                        {open1 ? <FiChevronDown /> : <FiChevronRight />} GSTR-1 — Outward Supplies ({currentLabel})
                    </button>
                    {open1 && (
                        <div className="accBody">
                            <div className="twoCol">
                                <div className="panel">
                                    <div className="panelTitle">Document Types</div>
                                    <ul className="bulleted">
                                        <li>B2B, B2C (Large/Small), Exports (With/Without tax)</li>
                                        <li>Credit/Debit Notes</li>
                                        <li>CDNR/CDNUR</li>
                                        <li>Nil/Exempted/Non-GST</li>
                                    </ul>
                                </div>
                                <div className="panel">
                                    <div className="panelTitle">Cross-checks</div>
                                    <ul className="bulleted">
                                        <li>Taxable value vs Tax summations</li>
                                        <li>HSN summary presence</li>
                                        <li>Place of supply distribution</li>
                                        <li>e-Way bill coverage</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hintRow">
                                <NavLink to="/reports/gst"><FiExternalLink /> View detailed GST report</NavLink>
                                <NavLink to="/invoices"><FiExternalLink /> Open invoices</NavLink>
                                <NavLink to="/shipments"><FiExternalLink /> Linked shipments</NavLink>
                            </div>
                        </div>
                    )}
                </div>

                <div className="accordion">
                    <button className="accHeader" onClick={() => setOpen3b(v => !v)}>
                        {open3b ? <FiChevronDown /> : <FiChevronRight />} GSTR-3B — Summary & Liability ({currentLabel})
                    </button>
                    {open3b && (
                        <div className="accBody">
                            <div className="twoCol">
                                <div className="panel">
                                    <div className="panelTitle">Liability Snapshot</div>
                                    <ul className="bulleted">
                                        <li>Outward tax by section (3.1(a) to 3.1(e))</li>
                                        <li>Inter-state supplies to unregistered/comp/ UIN holders</li>
                                        <li>Interest & late fee (if applicable)</li>
                                    </ul>
                                </div>
                                <div className="panel">
                                    <div className="panelTitle">ITC & Set-off View</div>
                                    <ul className="bulleted">
                                        <li>ITC available, reversed, net ITC (Table 4)</li>
                                        <li>Cash/Credit ledger utilization</li>
                                        <li>Rounding and carry forward (display-only)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hintRow">
                                <NavLink to="/finance/ledgers"><FiExternalLink /> Open ledgers</NavLink>
                                <NavLink to="/finance/journals"><FiExternalLink /> Journal entries</NavLink>
                                <NavLink to="/reports/finance"><FiExternalLink /> Finance report</NavLink>
                            </div>
                        </div>
                    )}
                </div>

                {/* Returns table */}
                <div className="tableWrap">
                    <div className="tableTitle">Returns — {currentLabel}</div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Period</th>
                                <th>Return</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Filed On</th>
                                <th>ARN</th>
                                <th>Navigate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(row => (
                                <tr key={row.id}>
                                    <td>{row.period}</td>
                                    <td>{row.type}</td>
                                    <td>{row.dueDateLabel}</td>
                                    <td>
                                        <span className={`status`} data-status={row.status}>
                                            {row.status === "Filed" && <FiCheckCircle aria-hidden="true" />}
                                            {row.status === "Pending" && <FiClock aria-hidden="true" />}
                                            {row.status === "Overdue" && <FiXCircle aria-hidden="true" />}
                                            <span>{row.status}</span>
                                        </span>
                                    </td>
                                    <td>{row.filedOnLabel || "-"}</td>
                                    <td className="mono">{row.arn}</td>
                                    <td className="acts">
                                        <NavLink to={row.links.summary} className="smallLink"><FiFileText /> Summary</NavLink>
                                        <NavLink to={row.links.invoices} className="smallLink"><FiFileText /> Invoices</NavLink>
                                        <NavLink to={row.links.drill} className="smallLink"><FiFileText /> Drill</NavLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Printable area ends */}

            {/* Sticky footer nav chips */}
            <div className="footerNav">
                <button onClick={() => jump("/reports/gst")}><FiFileText /> Reports · GST</button>
                <button onClick={() => jump("/reports/finance")}><FiFileText /> Reports · Finance</button>
                <button onClick={() => jump("/invoices")}><FiFileText /> Invoices</button>
                <button onClick={() => jump("/finance/taxes")}><FiFileText /> Taxes</button>
                <button onClick={() => jump("/settings/print-templates")}><FiFileText /> Print Templates</button>
            </div>

            {/* Demo modal */}
            {modal && (
                <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="demo-title">
                    <div className="backdrop" onClick={() => setModal(null)} />
                    <div className="sheet">
                        <div className="head">
                            <div className="title" id="demo-title">{modal.title}</div>
                            <button className="iconClose" onClick={() => setModal(null)} aria-label="Close">
                                <FiXCircle />
                            </button>
                        </div>
                        <div className="body">
                            <p>{modal.message}</p>
                            <ul className="bulleted">
                                <li>Browse summaries via the links above.</li>
                                <li>Use <NavLink to="/reports/gst">GST Report</NavLink> for a period-wise overview.</li>
                                <li>Jump to <NavLink to="/finance/ledgers">Ledgers</NavLink> or <NavLink to="/finance/journals">Journals</NavLink> for accounting view.</li>
                            </ul>
                        </div>
                        <div className="foot">
                            <button onClick={() => setModal(null)}>Got it</button>
                        </div>
                    </div>
                </Styled.Modal>
            )}

            {/* Print CSS (as shared spec) */}
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
        </Styled.Wrap>
    );
};

export default GstReturns;
