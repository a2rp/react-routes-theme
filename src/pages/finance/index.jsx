import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* date helpers so format stays consistent across the page */
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

/* Small self-made confirm dialog (non-blocking, no browser alerts) */
const ConfirmDialog = ({ open, title, message, onClose, onConfirm, confirmText = "Confirm" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                    <button className="btnPrimary" onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const FinanceOverview = () => {
    const now = useMemo(() => new Date(), []);
    const [period, setPeriod] = useState("Sep 2025");
    const [fy, setFy] = useState("FY 2025-26");
    const [currency, setCurrency] = useState("INR");
    const [showConfirm, setShowConfirm] = useState(false);
    const printRef = useRef(null);

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page>
            {/* print rules exactly as requested */}
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

            {/* Top header + toolbar */}
            <Styled.Header className="card">
                <div className="lhs">
                    <h1>Finance</h1>
                    <div className="meta">
                        <span>Overview</span>
                        <span>•</span>
                        <span>Updated {fmt(now, true)}</span>
                    </div>
                </div>
                <div className="rhs">
                    <div className="filters">
                        <div className="f">
                            <label>Period</label>
                            <select value={period} onChange={(e) => setPeriod(e.target.value)}>
                                <option>Sep 2025</option>
                                <option>Aug 2025</option>
                                <option>Jul 2025</option>
                                <option>Q2 2025-26</option>
                                <option>YTD 2025-26</option>
                            </select>
                        </div>
                        <div className="f">
                            <label>FY</label>
                            <select value={fy} onChange={(e) => setFy(e.target.value)}>
                                <option>FY 2025-26</option>
                                <option>FY 2024-25</option>
                                <option>FY 2023-24</option>
                            </select>
                        </div>
                        <div className="f">
                            <label>Currency</label>
                            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                                <option>INR</option>
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>

                    <div className="actions">
                        <button className="btnGhost" onClick={printSection} title="Print finance snapshot">Print</button>
                        <button className="btnPrimary" onClick={() => setShowConfirm(true)} title="Close current period">Close Period</button>
                    </div>
                </div>
            </Styled.Header>

            {/* KPI row */}
            <Styled.KPIRow>
                <Styled.KPI className="card">
                    <div className="k">Cash &amp; Bank</div>
                    <div className="v">₹ 1,92,40,000</div>
                    <div className="tiny">as of {fmt(now)}</div>
                    <Styled.Spark aria-hidden="true">
                        <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                            <polyline points="0,30 15,22 30,26 45,18 60,14 75,16 90,10 105,14 120,8" />
                        </svg>
                    </Styled.Spark>
                </Styled.KPI>

                <Styled.KPI className="card">
                    <div className="k">Receivables</div>
                    <div className="v">₹ 58,10,300</div>
                    <div className="tiny">Avg. DSO 43 days</div>
                    <Styled.Segments>
                        <span className="chip">Current</span>
                        <span className="chip">30+</span>
                        <span className="chip">60+</span>
                        <span className="chip">90+</span>
                    </Styled.Segments>
                </Styled.KPI>

                <Styled.KPI className="card">
                    <div className="k">Payables</div>
                    <div className="v">₹ 31,55,900</div>
                    <div className="tiny">Next payout {fmt(now)}</div>
                    <Styled.Spark>
                        <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                            <polyline points="0,20 15,18 30,22 45,14 60,18 75,20 90,22 105,17 120,19" />
                        </svg>
                    </Styled.Spark>
                </Styled.KPI>

                <Styled.KPI className="card">
                    <div className="k">Revenue (MTD)</div>
                    <div className="v">₹ 14,85,200</div>
                    <div className="tiny">Cutoff {onlyTime(now)}</div>
                    <Styled.Spark>
                        <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                            <polyline points="0,32 20,30 40,26 60,24 80,18 100,14 120,10" />
                        </svg>
                    </Styled.Spark>
                </Styled.KPI>

                <Styled.KPI className="card">
                    <div className="k">Expenses (MTD)</div>
                    <div className="v">₹ 8,42,700</div>
                    <div className="tiny">Incl. payroll &amp; utilities</div>
                    <Styled.Spark>
                        <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                            <polyline points="0,16 20,18 40,20 60,22 80,26 100,28 120,30" />
                        </svg>
                    </Styled.Spark>
                </Styled.KPI>

                <Styled.KPI className="card">
                    <div className="k">Net Profit (MTD)</div>
                    <div className="v">₹ 6,42,500</div>
                    <div className="tiny">Margin 18.6%</div>
                    <Styled.Spark>
                        <svg viewBox="0 0 120 40" preserveAspectRatio="none">
                            <polyline points="0,30 20,28 40,24 60,26 80,20 100,16 120,14" />
                        </svg>
                    </Styled.Spark>
                </Styled.KPI>
            </Styled.KPIRow>

            {/* wide grid: charts, tables, side panels */}
            <Styled.MainGrid>
                <section className="card block">
                    <header>
                        <h3>P&amp;L Snapshot</h3>
                        <div className="tools">
                            <NavLink to="/finance/profit-loss" className="btnGhost small">Open</NavLink>
                        </div>
                    </header>
                    <div className="content">
                        <Styled.Chart>
                            <div className="legend"><span className="dot dot1" /> Revenue</div>
                            <div className="legend"><span className="dot dot2" /> COGS</div>
                            <div className="legend"><span className="dot dot3" /> Opex</div>
                            <svg viewBox="0 0 800 220" preserveAspectRatio="none">
                                {/* axes */}
                                <line x1="40" y1="10" x2="40" y2="200" className="axis" />
                                <line x1="40" y1="200" x2="780" y2="200" className="axis" />
                                {/* revenue */}
                                <polyline className="s1" points="40,180 120,160 200,154 280,138 360,126 440,110 520,96 600,92 680,82 760,70" />
                                {/* cogs */}
                                <polyline className="s2" points="40,190 120,178 200,172 280,166 360,160 440,154 520,148 600,144 680,138 760,132" />
                                {/* opex */}
                                <polyline className="s3" points="40,188 120,184 200,182 280,178 360,176 440,172 520,168 600,166 680,164 760,162" />
                            </svg>
                        </Styled.Chart>
                        <Styled.MiniStats>
                            <div className="stat">
                                <div className="k">Gross Margin</div>
                                <div className="v">34.1%</div>
                            </div>
                            <div className="stat">
                                <div className="k">Opex Ratio</div>
                                <div className="v">12.8%</div>
                            </div>
                            <div className="stat">
                                <div className="k">EBITDA</div>
                                <div className="v">₹ 3,24,000</div>
                            </div>
                            <div className="stat">
                                <div className="k">Runway</div>
                                <div className="v">11.2 months</div>
                            </div>
                        </Styled.MiniStats>
                    </div>
                </section>

                <section className="card block">
                    <header>
                        <h3>Top Accounts</h3>
                        <div className="tools">
                            <NavLink to="/finance/ledgers" className="btnGhost small">Ledgers</NavLink>
                        </div>
                    </header>
                    <div className="content">
                        <Styled.Table role="table" aria-label="Top accounts by balance">
                            <div className="thead" role="rowgroup">
                                <div className="tr" role="row">
                                    <div className="th" role="columnheader">Account</div>
                                    <div className="th" role="columnheader">Type</div>
                                    <div className="th" role="columnheader" style={{ textAlign: "right" }}>Balance</div>
                                </div>
                            </div>
                            <div className="tbody" role="rowgroup">
                                {[
                                    ["1001 - Cash on Hand", "Asset", "₹ 24,40,000"],
                                    ["1005 - Bank - HDFC", "Asset", "₹ 1,68,00,000"],
                                    ["1200 - Accounts Receivable", "Asset", "₹ 58,10,300"],
                                    ["2100 - Accounts Payable", "Liability", "₹ 31,55,900"],
                                    ["4000 - Sales", "Income", "₹ 14,85,200"]
                                ].map((r) => (
                                    <div className="tr" role="row" key={r[0]}>
                                        <div className="td" role="cell"><NavLink to="/finance/ledgers/1005">{r[0]}</NavLink></div>
                                        <div className="td" role="cell">{r[1]}</div>
                                        <div className="td num" role="cell">{r[2]}</div>
                                    </div>
                                ))}
                            </div>
                        </Styled.Table>
                    </div>
                </section>

                <section className="card block">
                    <header>
                        <h3>Recent Journals</h3>
                        <div className="tools">
                            <NavLink to="/finance/journals" className="btnGhost small">Journals</NavLink>
                        </div>
                    </header>
                    <div className="content">
                        <Styled.Table role="table" aria-label="Recent journal entries">
                            <div className="thead" role="rowgroup">
                                <div className="tr" role="row">
                                    <div className="th">Date</div>
                                    <div className="th">Journal #</div>
                                    <div className="th">Memo</div>
                                    <div className="th" style={{ textAlign: "right" }}>Amount</div>
                                </div>
                            </div>
                            <div className="tbody" role="rowgroup">
                                {[
                                    [fmt(now), "JR-31021", "Payroll Sep Wk4", "₹ 4,80,000"],
                                    [fmt(now), "JR-31020", "GST Settlement", "₹ 1,22,400"],
                                    [fmt(now), "JR-31019", "COGS Adjustment", "₹ 86,700"],
                                    [fmt(now), "JR-31018", "Sales Recognition", "₹ 9,50,000"],
                                ].map((r) => (
                                    <div className="tr" key={r[1]}>
                                        <div className="td">{r[0]}</div>
                                        <div className="td"><NavLink to="/finance/journals/JR-31021">{r[1]}</NavLink></div>
                                        <div className="td">{r[2]}</div>
                                        <div className="td num">{r[3]}</div>
                                    </div>
                                ))}
                            </div>
                        </Styled.Table>
                    </div>
                </section>

                <aside className="side">
                    <div className="card sideBlock">
                        <h3>Compliance</h3>
                        <ul className="list">
                            <li>
                                <span className="label">GST Return</span>
                                <span className="value">Due {fmt(now)}</span>
                                <NavLink to="/finance/gst-returns" className="btnGhost tiny">Open</NavLink>
                            </li>
                            <li>
                                <span className="label">Tax</span>
                                <span className="value">Next {fmt(now)}</span>
                                <NavLink to="/finance/taxes" className="btnGhost tiny">Tax</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="card sideBlock">
                        <h3>Shortcuts</h3>
                        <div className="linksCol">
                            <NavLink to="/finance/balance-sheet">Balance Sheet</NavLink>
                            <NavLink to="/finance/profit-loss">Profit &amp; Loss</NavLink>
                            <NavLink to="/finance/chart-of-accounts">Chart of Accounts</NavLink>
                            <NavLink to="/finance/ledgers">Ledgers</NavLink>
                            <NavLink to="/finance/journals">Journals</NavLink>
                            <NavLink to="/invoices">Invoices</NavLink>
                            <NavLink to="/reports/finance">Finance Report</NavLink>
                        </div>
                    </div>

                    {/* Printable snapshot */}
                    <div className="card sideBlock" id="search-print-area" ref={printRef}>
                        <h3>Print Snapshot</h3>
                        <div className="printGrid">
                            <div className="row"><span className="k">Period</span><span className="v">{period}</span></div>
                            <div className="row"><span className="k">FY</span><span className="v">{fy}</span></div>
                            <div className="row"><span className="k">Currency</span><span className="v">{currency}</span></div>
                            <div className="row"><span className="k">Cash &amp; Bank</span><span className="v">₹ 1,92,40,000</span></div>
                            <div className="row"><span className="k">Receivables</span><span className="v">₹ 58,10,300</span></div>
                            <div className="row"><span className="k">Payables</span><span className="v">₹ 31,55,900</span></div>
                            <div className="row"><span className="k">Revenue (MTD)</span><span className="v">₹ 14,85,200</span></div>
                            <div className="row"><span className="k">Expenses (MTD)</span><span className="v">₹ 8,42,700</span></div>
                            <div className="row"><span className="k">Generated</span><span className="v">{fmt(now, true)}</span></div>
                        </div>
                    </div>
                </aside>

                <section className="card block">
                    <header>
                        <h3>Aged Buckets (Receivables / Payables)</h3>
                        <div className="tools">
                            <NavLink to="/reports/customers" className="btnGhost small">Customer Aging</NavLink>
                            <NavLink to="/reports/procurement" className="btnGhost small">Vendor Aging</NavLink>
                        </div>
                    </header>
                    <div className="content two">
                        <Styled.Table role="table" aria-label="Aged receivables">
                            <div className="thead"><div className="tr">
                                <div className="th">Bucket</div>
                                <div className="th" style={{ textAlign: "right" }}>Amount</div>
                            </div></div>
                            <div className="tbody">
                                {[
                                    ["Current", "₹ 31,70,000"],
                                    ["30+", "₹ 16,20,300"],
                                    ["60+", "₹ 8,10,000"],
                                    ["90+", "₹ 2,10,000"]
                                ].map((r) => (
                                    <div className="tr" key={r[0]}>
                                        <div className="td">{r[0]}</div>
                                        <div className="td num">{r[1]}</div>
                                    </div>
                                ))}
                            </div>
                        </Styled.Table>

                        <Styled.Table role="table" aria-label="Aged payables">
                            <div className="thead"><div className="tr">
                                <div className="th">Bucket</div>
                                <div className="th" style={{ textAlign: "right" }}>Amount</div>
                            </div></div>
                            <div className="tbody">
                                {[
                                    ["Current", "₹ 22,40,000"],
                                    ["30+", "₹ 6,40,900"],
                                    ["60+", "₹ 2,35,000"],
                                    ["90+", "₹ 40,000"]
                                ].map((r) => (
                                    <div className="tr" key={r[0]}>
                                        <div className="td">{r[0]}</div>
                                        <div className="td num">{r[1]}</div>
                                    </div>
                                ))}
                            </div>
                        </Styled.Table>
                    </div>
                </section>

                <section className="card block">
                    <header>
                        <h3>Tax Summary</h3>
                        <div className="tools">
                            <NavLink to="/finance/taxes" className="btnGhost small">Open</NavLink>
                        </div>
                    </header>
                    <div className="content">
                        <Styled.Table role="table" aria-label="Tax summary">
                            <div className="thead"><div className="tr">
                                <div className="th">Head</div>
                                <div className="th">Period</div>
                                <div className="th" style={{ textAlign: "right" }}>Payable</div>
                                <div className="th" style={{ textAlign: "right" }}>Input Credit</div>
                                <div className="th" style={{ textAlign: "right" }}>Net</div>
                            </div></div>
                            <div className="tbody">
                                {[
                                    ["GST", period, "₹ 1,98,400", "₹ 76,000", "₹ 1,22,400"],
                                    ["TDS", period, "₹ 64,800", "₹ 0", "₹ 64,800"],
                                    ["Professional Tax", period, "₹ 12,000", "₹ 0", "₹ 12,000"],
                                ].map((r) => (
                                    <div className="tr" key={r[0]}>
                                        <div className="td">{r[0]}</div>
                                        <div className="td">{r[1]}</div>
                                        <div className="td num">{r[2]}</div>
                                        <div className="td num">{r[3]}</div>
                                        <div className="td num">{r[4]}</div>
                                    </div>
                                ))}
                            </div>
                        </Styled.Table>
                    </div>
                </section>
            </Styled.MainGrid>

            <ConfirmDialog
                open={showConfirm}
                title="Close Period"
                message="This is a demo preview. Period closing is disabled here."
                confirmText="Okay"
                onConfirm={() => setShowConfirm(false)}
                onClose={() => setShowConfirm(false)}
            />
        </Styled.Page>
    );
};

export default FinanceOverview;
