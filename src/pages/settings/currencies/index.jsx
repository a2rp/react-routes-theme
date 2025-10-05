import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { MdSearch, MdPrint, MdFileDownload, MdLock, MdInfoOutline, MdContentCopy, MdWarningAmber } from "react-icons/md";

/** Formatting helpers — use exact formats requested */
function pad2(n) { return n.toString().padStart(2, "0"); }
function formatDate(d) {
    const dt = d instanceof Date ? d : new Date(d);
    // e.g., "Sat Oct 04 2025"
    return dt.toDateString();
}
function formatTime(d) {
    const dt = d instanceof Date ? d : new Date(d);
    return `${pad2(dt.getHours())}:${pad2(dt.getMinutes())}:${pad2(dt.getSeconds())}hrs`;
}
function formatDateTime(d) {
    const dt = d instanceof Date ? d : new Date(d);
    return `${formatDate(dt)} ${formatTime(dt)}`;
}

/** Demo fixture (display-only) */
const BASE_CURRENCY = {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
    format: "{symbol}{amount}",
    decimal: 2,
    thousandSep: ",",
    decimalSep: ".",
    rounding: "Banker's rounding",
    lastUpdated: "2025-10-04T15:38:20+05:30",
};

const CURRENCIES = [
    { code: "INR", name: "Indian Rupee", symbol: "₹", format: "{symbol}{amount}", decimal: 2, thousandSep: ",", decimalSep: ".", rounding: "Banker's rounding", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "USD", name: "US Dollar", symbol: "$", format: "{symbol}{amount}", decimal: 2, thousandSep: ",", decimalSep: ".", rounding: "Half up", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "EUR", name: "Euro", symbol: "€", format: "{amount} {symbol}", decimal: 2, thousandSep: ".", decimalSep: ",", rounding: "Half up", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "GBP", name: "Pound Sterling", symbol: "£", format: "{symbol}{amount}", decimal: 2, thousandSep: ",", decimalSep: ".", rounding: "Half up", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥", format: "{symbol}{amount}", decimal: 0, thousandSep: ",", decimalSep: ".", rounding: "Half up", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "AED", name: "UAE Dirham", symbol: "د.إ", format: "{amount} {symbol}", decimal: 2, thousandSep: ",", decimalSep: ".", rounding: "Half up", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$", format: "{symbol}{amount}", decimal: 2, thousandSep: ",", decimalSep: ".", rounding: "Half up", active: false, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$", format: "{symbol}{amount}", decimal: 2, thousandSep: ",", decimalSep: ".", rounding: "Half up", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "CHF", name: "Swiss Franc", symbol: "CHF", format: "{amount} {symbol}", decimal: 2, thousandSep: "’", decimalSep: ".", rounding: "Half up", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥", format: "{symbol}{amount}", decimal: 2, thousandSep: ",", decimalSep: ".", rounding: "Half up", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "SGD", name: "Singapore Dollar", symbol: "S$", format: "{symbol}{amount}", decimal: 2, thousandSep: ",", decimalSep: ".", rounding: "Half up", active: true, lastUpdated: "2025-10-04T15:38:20+05:30" },
    { code: "ZAR", name: "South African Rand", symbol: "R", format: "{symbol}{amount}", decimal: 2, thousandSep: " ", decimalSep: ",", rounding: "Half up", active: false, lastUpdated: "2025-10-04T15:38:20+05:30" },
];

/** Static rate snapshot vs INR (demo only) */
const RATE_SNAPSHOT = {
    base: "INR",
    asOf: "2025-10-04T15:38:20+05:30",
    source: "Internal demo fixture",
    rates: {
        USD: 0.0120, EUR: 0.0110, GBP: 0.0095, JPY: 1.85, AED: 0.044, AUD: 0.018, CAD: 0.016, CHF: 0.011, CNY: 0.087,
        SGD: 0.016, ZAR: 0.22,
    },
};

const DEMO_DISABLED_MSG = "This is a display-only demo. Actions are disabled.";

const SettingsCurrencies = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [modalMsg, setModalMsg] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return CURRENCIES;
        return CURRENCIES.filter(c =>
            [c.code, c.name, c.symbol, c.rounding].some(v => String(v).toLowerCase().includes(q))
        );
    }, [query]);

    const exportJson = () => {
        const payload = {
            base: BASE_CURRENCY,
            currencies: CURRENCIES,
            rates: RATE_SNAPSHOT,
            exportedAt: new Date().toISOString(),
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `currencies_${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        setTimeout(() => {
            window.print();
            setTimeout(() => document.body.classList.remove("print-section-mode"), 50);
        }, 50);
    };

    const copyBase = async () => {
        try {
            await navigator.clipboard.writeText(BASE_CURRENCY.code);
            setModalMsg("Copied base currency code to clipboard.");
            setTimeout(() => setModalMsg(""), 1400);
        } catch {
            setModalMsg("Copy not supported.");
            setTimeout(() => setModalMsg(""), 1400);
        }
    };

    const showDisabled = (msg = DEMO_DISABLED_MSG) => setModalMsg(msg);

    return (
        <Styled.Wrap>
            {/* Print-only rules */}
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

            {/* Breadcrumbs + Page heading */}
            <div className="headerRow">
                <nav className="breadcrumbs" aria-label="Breadcrumb">
                    <NavLink to="/settings">Settings</NavLink>
                    <span aria-hidden="true">/</span>
                    <NavLink to="/settings">General</NavLink>
                    <span aria-hidden="true">/</span>
                    <span className="current" aria-current="page">Currencies</span>
                </nav>

                <div className="actions">
                    <button className="ghost" onClick={printSection} title="Print">
                        <MdPrint size={18} /> <span>Print</span>
                    </button>
                    <button className="ghost" onClick={exportJson} title="Export JSON">
                        <MdFileDownload size={18} /> <span>Export</span>
                    </button>
                    <button className="primary" disabled onClick={() => showDisabled()}>
                        <MdLock size={18} /> <span>Add Currency</span>
                    </button>
                </div>
            </div>

            {/* Tabs to other settings pages */}
            <div className="tabs">
                <NavLink to="/settings/profile">Profile</NavLink>
                <NavLink to="/settings/appearance">Appearance</NavLink>
                <NavLink to="/settings/billing">Billing</NavLink>
                <NavLink to="/settings/tax">Tax</NavLink>
                <NavLink to="/settings/units">Units</NavLink>
                <NavLink to="/settings/currencies" className="active">Currencies</NavLink>
                <NavLink to="/settings/numbering">Numbering</NavLink>
                <NavLink to="/settings/print-templates">Print Templates</NavLink>
                <NavLink to="/settings/notifications">Notifications</NavLink>
                <NavLink to="/settings/webhooks">Webhooks</NavLink>
                <NavLink to="/settings/warehouses">Warehouses</NavLink>
                <NavLink to="/settings/locations">Locations</NavLink>
            </div>

            {/* Top summary cards */}
            <section className="gridCards">
                <div className="card" role="region" aria-labelledby="base-currency">
                    <div className="cardHead">
                        <h3 id="base-currency">Base currency</h3>
                        <button className="iconBtn" onClick={copyBase} title="Copy base currency">
                            <MdContentCopy size={16} />
                        </button>
                    </div>
                    <div className="kv">
                        <div><span>Code</span><strong>{BASE_CURRENCY.code}</strong></div>
                        <div><span>Name</span><strong>{BASE_CURRENCY.name}</strong></div>
                        <div><span>Symbol</span><strong>{BASE_CURRENCY.symbol}</strong></div>
                        <div><span>Format</span><strong>{BASE_CURRENCY.format}</strong></div>
                        <div><span>Decimals</span><strong>{BASE_CURRENCY.decimal}</strong></div>
                        <div><span>Separators</span><strong>{BASE_CURRENCY.thousandSep} / {BASE_CURRENCY.decimalSep}</strong></div>
                        <div><span>Rounding</span><strong>{BASE_CURRENCY.rounding}</strong></div>
                        <div><span>Last updated</span><strong>{formatDateTime(BASE_CURRENCY.lastUpdated)}</strong></div>
                    </div>
                    <div className="links">
                        <Link to="/reports/finance" className="link">View finance reports</Link>
                        <Link to="/invoices" className="link">Go to invoices</Link>
                    </div>
                </div>

                <div className="card" role="region" aria-labelledby="rate-snap">
                    <div className="cardHead">
                        <h3 id="rate-snap">Exchange rates</h3>
                        <span className="badge">Snapshot</span>
                    </div>
                    <div className="mutedRow">
                        <MdInfoOutline size={16} />
                        <span>
                            Source: {RATE_SNAPSHOT.source} • As of {formatDateTime(RATE_SNAPSHOT.asOf)}
                        </span>
                    </div>
                    <div className="rates">
                        {Object.entries(RATE_SNAPSHOT.rates).map(([code, rate]) => (
                            <div key={code} className="rateItem">
                                <div className="code">{code}</div>
                                <div className="pair">1 {BASE_CURRENCY.code} → {rate} {code}</div>
                            </div>
                        ))}
                    </div>
                    <div className="links">
                        <Link to="/finance" className="link">Open Finance</Link>
                        <Link to="/reports/gst" className="link">GST reports</Link>
                    </div>
                </div>

                <div className="card" role="region" aria-labelledby="guides">
                    <div className="cardHead">
                        <h3 id="guides">Guides</h3>
                    </div>
                    <ul className="guideList">
                        <li><Link to="/help">How currency formatting works</Link></li>
                        <li><Link to="/help">Multi-currency in invoices</Link></li>
                        <li><Link to="/help">Rounding modes & print templates</Link></li>
                        <li><Link to="/help">Tax & currency interplay</Link></li>
                    </ul>
                    <div className="links">
                        <Link to="/settings/print-templates" className="link">Print templates</Link>
                        <Link to="/settings/numbering" className="link">Document numbering</Link>
                    </div>
                </div>
            </section>

            {/* Search + table (printable area) */}
            <section id="search-print-area" className="tableSection">
                <div className="tableHeadBar">
                    <div className="search">
                        <MdSearch size={18} />
                        <input
                            type="text"
                            placeholder="Search currencies (code, name, symbol, rounding)"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            aria-label="Search currencies"
                        />
                    </div>
                    <div className="rightLinks">
                        <Link to="/reports/finance" className="link">Reports</Link>
                        <Link to="/finance/ledgers" className="link">Ledgers</Link>
                        <Link to="/settings/tax" className="link">Tax</Link>
                    </div>
                </div>

                <div className="tableWrap">
                    <table role="grid" aria-label="Currencies configuration">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Format sample</th>
                                <th>Decimals</th>
                                <th>Separators</th>
                                <th>Rounding</th>
                                <th>Status</th>
                                <th>Last updated</th>
                                <th className="actionsCol">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((c) => (
                                <tr key={c.code}>
                                    <td><strong>{c.code}</strong></td>
                                    <td>{c.name}</td>
                                    <td>{c.symbol}</td>
                                    <td className="mono">{c.format.replace("{symbol}", c.symbol).replace("{amount}", "12,345.67")}</td>
                                    <td>{c.decimal}</td>
                                    <td>{c.thousandSep} / {c.decimalSep}</td>
                                    <td>{c.rounding}</td>
                                    <td>
                                        <span className={`chip ${c.active ? "active" : "inactive"}`}>
                                            {c.active ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td>{formatDate(c.lastUpdated)}</td>
                                    <td className="rowActions">
                                        <button className="linkBtn" onClick={() => navigate("/settings/print-templates")}>View format</button>
                                        <button className="linkBtn" onClick={() => showDisabled("Demo: Edit disabled.")}>Edit</button>
                                        <button className="linkBtn danger" onClick={() => showDisabled("Demo: Deactivate disabled.")}>Deactivate</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="footNote">
                    <MdWarningAmber size={16} />
                    <span>Display-only demo. Exchange rates and formatting are static samples.</span>
                </div>
            </section>

            {/* Bottom quick nav */}
            <section className="quickNav">
                <Link to="/settings">← Back to Settings</Link>
                <div className="spacer" />
                <Link to="/settings/numbering">Next: Numbering →</Link>
            </section>

            {/* Tiny modal/toast */}
            {modalMsg && (
                <div className="modal" role="dialog" aria-live="polite">
                    <div className="modalCard">
                        <div className="modalContent">
                            <MdInfoOutline size={18} />
                            <span>{modalMsg}</span>
                        </div>
                        <button className="ghost closeBtn" onClick={() => setModalMsg("")}>Close</button>
                    </div>
                </div>
            )}
        </Styled.Wrap>
    );
};

export default SettingsCurrencies;
