import React from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/** Demo-only helpers (no storage, no network) */
const fmtDate = (iso) => {
    const d = new Date(iso);
    return d.toDateString(); // e.g. "Sat Oct 04 2025"
};
const fmtDateTime = (iso) => {
    const d = new Date(iso);
    const t = d.toTimeString().slice(0, 8); // "15:38:20"
    return `${d.toDateString()} ${t}hrs`; // "Sat Oct 04 2025 15:38:20hrs"
};

const ProfitLoss = () => {
    // Demo period + build/commit times (if defined via Vite define)
    const period = {
        from: "2025-10-01T00:00:00+05:30",
        to: "2025-10-04T23:59:59+05:30",
    };

    const buildISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || null;
    const commitISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || null;

    // Demo static figures (display-only)
    const overviewKPIs = [
        { key: "rev", label: "Revenue", value: "₹ 24,890,000", subtitle: "All streams" },
        { key: "cogs", label: "COGS", value: "₹ 14,320,000", subtitle: "Materials, freight" },
        { key: "gross", label: "Gross Profit", value: "₹ 10,570,000", subtitle: "Revenue − COGS" },
        { key: "opex", label: "Operating Expenses", value: "₹ 6,420,000", subtitle: "S&M, G&A, R&D" },
        { key: "opinc", label: "Operating Income", value: "₹ 4,150,000", subtitle: "Gross − Opex" },
        { key: "other", label: "Other Net", value: "₹ 310,000", subtitle: "Other income − expense" },
        { key: "net", label: "Net Profit", value: "₹ 4,460,000", subtitle: "Bottom line" },
    ];

    const pnlRows = [
        { type: "header", label: "Revenue" },
        { type: "row", label: "Product Sales", amount: "₹ 18,640,000" },
        { type: "row", label: "Service Revenue", amount: "₹ 6,250,000" },
        { type: "total", label: "Total Revenue", amount: "₹ 24,890,000" },

        { type: "spacer" },

        { type: "header", label: "Cost of Goods Sold (COGS)" },
        { type: "row", label: "Materials", amount: "₹ 11,200,000" },
        { type: "row", label: "Freight & Inbound", amount: "₹ 1,320,000" },
        { type: "row", label: "Duties & Taxes (non-credit)", amount: "₹ 1,800,000" },
        { type: "total", label: "Total COGS", amount: "₹ 14,320,000" },

        { type: "calc", label: "Gross Profit", amount: "₹ 10,570,000" },

        { type: "spacer" },

        { type: "header", label: "Operating Expenses" },
        { type: "row", label: "Sales & Marketing", amount: "₹ 2,780,000" },
        { type: "row", label: "General & Administrative", amount: "₹ 1,960,000" },
        { type: "row", label: "Research & Development", amount: "₹ 1,200,000" },
        { type: "row", label: "IT & Subscriptions", amount: "₹ 480,000" },
        { type: "row", label: "Rent & Utilities", amount: "₹ 0.00" },
        { type: "total", label: "Total Operating Expenses", amount: "₹ 6,420,000" },

        { type: "calc", label: "Operating Income", amount: "₹ 4,150,000" },

        { type: "spacer" },

        { type: "header", label: "Other Income / (Expense)" },
        { type: "row", label: "Interest Income", amount: "₹ 240,000" },
        { type: "row", label: "FX Gain / (Loss)", amount: "₹ 160,000" },
        { type: "row", label: "Other Adjustments", amount: "₹ 90,000" },
        { type: "total", label: "Net Other Income", amount: "₹ 490,000" },
        { type: "row", label: "Interest Expense", amount: "₹ (180,000)" },

        { type: "calc-strong", label: "Net Profit", amount: "₹ 4,460,000" },
    ];

    const revBySegment = [
        { seg: "B2B Enterprise", amt: "₹ 11,200,000", share: "45%" },
        { seg: "B2B SMB", amt: "₹ 7,040,000", share: "28%" },
        { seg: "Retail / D2C", amt: "₹ 4,480,000", share: "18%" },
        { seg: "Services", amt: "₹ 2,170,000", share: "9%" },
    ];
    const opexBreak = [
        { cat: "People (Salary, Bonus)", amt: "₹ 3,120,000" },
        { cat: "Marketing & Ads", amt: "₹ 1,080,000" },
        { cat: "IT / SaaS", amt: "₹ 480,000" },
        { cat: "Admin & Legal", amt: "₹ 1,020,000" },
        { cat: "Travel", amt: "₹ 720,000" },
    ];

    const handlePrint = () => {
        document.body.classList.add("print-section-mode");
        // Allow layout to apply before print fires
        setTimeout(() => {
            window.print();
            setTimeout(() => {
                document.body.classList.remove("print-section-mode");
            }, 150);
        }, 50);
    };

    const exportJSON = () => {
        const exportObj = {
            title: "Profit & Loss",
            period: { from: period.from, to: period.to, displayFrom: fmtDate(period.from), displayTo: fmtDate(period.to) },
            figures: { overviewKPIs, pnlRows, revBySegment, opexBreak },
            generatedAt: fmtDateTime(new Date().toISOString()),
        };
        const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `profit-loss_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <Styled.Wrap>
            {/* Print CSS (scoped) */}
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

            {/* Header */}
            <header className="header">
                <div className="titleBlock">
                    <h1>Profit &amp; Loss</h1>
                    <div className="meta">
                        <span className="chip">Display Only</span>
                        <span className="sep">•</span>
                        <span>Period: {fmtDate(period.from)} &ndash; {fmtDate(period.to)}</span>
                        {commitISO && (
                            <>
                                <span className="sep">•</span>
                                <span>Last commit: {fmtDateTime(commitISO)}</span>
                            </>
                        )}
                        {!commitISO && buildISO && (
                            <>
                                <span className="sep">•</span>
                                <span>Build: {fmtDateTime(buildISO)}</span>
                            </>
                        )}
                    </div>
                </div>

                <nav className="crumbs" aria-label="Breadcrumb">
                    <NavLink to="/home">Home</NavLink>
                    <span>/</span>
                    <NavLink to="/finance">Finance</NavLink>
                    <span>/</span>
                    <span className="current">Profit &amp; Loss</span>
                </nav>
            </header>

            {/* Toolbar */}
            <section className="toolbar">
                <div className="range">
                    <label>
                        From
                        <input type="date" disabled title="Demo: controls are disabled" />
                    </label>
                    <label>
                        To
                        <input type="date" disabled title="Demo: controls are disabled" />
                    </label>
                    <div className="presets" aria-label="Quick ranges">
                        <button disabled title="Demo">MTD</button>
                        <button disabled title="Demo">QTD</button>
                        <button disabled title="Demo">YTD</button>
                        <button disabled title="Demo">FY</button>
                    </div>
                </div>

                <div className="actions">
                    <button onClick={handlePrint} title="Print this P&L view">Print</button>
                    <button onClick={exportJSON} title="Export JSON snapshot">Export</button>
                    <NavLink className="btnLink" to="/settings/print-templates" title="Customize layouts">Print Templates</NavLink>
                    <NavLink className="btnLink" to="/settings/currencies" title="Currency settings">Currencies</NavLink>
                </div>
            </section>

            {/* KPI Cards */}
            <section className="cards">
                {overviewKPIs.map(k => (
                    <div key={k.key} className={`card kpi ${k.key}`}>
                        <div className="kpiHead">{k.label}</div>
                        <div className="kpiValue">{k.value}</div>
                        <div className="kpiSub">{k.subtitle}</div>
                    </div>
                ))}
            </section>

            {/* Main printable area */}
            <section id="search-print-area" className="pnlArea">
                <div className="panel">
                    <div className="panelHead">
                        <h2>Statement</h2>
                        <div className="panelMeta">
                            <span>Period</span>
                            <strong>{fmtDate(period.from)} &ndash; {fmtDate(period.to)}</strong>
                        </div>
                    </div>

                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Line Item</th>
                                    <th className="num">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pnlRows.map((r, idx) => {
                                    if (r.type === "spacer") return <tr key={`s-${idx}`} className="sp"><td colSpan={2} /></tr>;
                                    if (r.type === "header") return (
                                        <tr key={`h-${idx}`} className="hd">
                                            <td colSpan={2}>{r.label}</td>
                                        </tr>
                                    );
                                    if (r.type === "total") return (
                                        <tr key={`t-${idx}`} className="total">
                                            <td>{r.label}</td>
                                            <td className="num">{r.amount}</td>
                                        </tr>
                                    );
                                    if (r.type === "calc") return (
                                        <tr key={`c-${idx}`} className="calc">
                                            <td>{r.label}</td>
                                            <td className="num">{r.amount}</td>
                                        </tr>
                                    );
                                    if (r.type === "calc-strong") return (
                                        <tr key={`cs-${idx}`} className="calcStrong">
                                            <td>{r.label}</td>
                                            <td className="num">{r.amount}</td>
                                        </tr>
                                    );
                                    return (
                                        <tr key={`r-${idx}`}>
                                            <td>{r.label}</td>
                                            <td className="num">{r.amount}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Side panels (segments & expenses) */}
                <div className="grid">
                    <div className="panel">
                        <div className="panelHead">
                            <h3>Revenue by Segment</h3>
                            <NavLink to="/reports/sales" className="panelLink" title="Open sales report">Open Report</NavLink>
                        </div>
                        <div className="tableWrap small">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Segment</th>
                                        <th className="num">Amount</th>
                                        <th className="num">Share</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {revBySegment.map((s) => (
                                        <tr key={s.seg}>
                                            <td>{s.seg}</td>
                                            <td className="num">{s.amt}</td>
                                            <td className="num">{s.share}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="legend">
                            <span className="dot"></span>
                            <span>Top segments by value</span>
                        </div>
                    </div>

                    <div className="panel">
                        <div className="panelHead">
                            <h3>Operating Expenses (Breakdown)</h3>
                            <NavLink to="/finance/ledgers" className="panelLink" title="View ledgers">Ledgers</NavLink>
                        </div>
                        <div className="tableWrap small">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th className="num">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {opexBreak.map((e) => (
                                        <tr key={e.cat}>
                                            <td>{e.cat}</td>
                                            <td className="num">{e.amt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="legend">
                            <span className="dot"></span>
                            <span>Expense distribution</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick navigation */}
            <section className="quickNav">
                <div className="qnHead">Quick Navigation</div>
                <div className="links">
                    <NavLink to="/reports/finance" className="chipLink">Finance Reports</NavLink>
                    <NavLink to="/finance/balance-sheet" className="chipLink">Balance Sheet</NavLink>
                    <NavLink to="/finance/trial-balance" className="chipLink">Trial Balance</NavLink>
                    <NavLink to="/finance/journals" className="chipLink">Journals</NavLink>
                    <NavLink to="/finance/chart-of-accounts" className="chipLink">Chart of Accounts</NavLink>
                    <NavLink to="/invoices" className="chipLink">Invoices</NavLink>
                    <NavLink to="/receipts" className="chipLink">Receipts</NavLink>
                    <NavLink to="/reports/sales" className="chipLink">Sales Report</NavLink>
                    <NavLink to="/reports/inventory" className="chipLink">Inventory Report</NavLink>
                    <NavLink to="/reports/gst" className="chipLink">GST Report</NavLink>
                    <NavLink to="/settings/print-templates" className="chipLink">Print Templates</NavLink>
                    <NavLink to="/tools/import-export" className="chipLink">Import / Export</NavLink>
                </div>
            </section>
        </Styled.Wrap>
    );
};

export default ProfitLoss;
