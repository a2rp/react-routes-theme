import { useMemo, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

/** ---------- Small date utils (always Asia/Kolkata) ---------- */
const pad = (n) => String(n).padStart(2, "0");
const partsFromTZ = (d = new Date(), tz = "Asia/Kolkata") =>
    new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        weekday: "short", month: "short", day: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    }).formatToParts(d).reduce((acc, p) => (acc[p.type] = p.value, acc), {});

const formatDate = (d = new Date()) => {
    const p = partsFromTZ(d);
    return `${p.weekday} ${p.month} ${p.day} ${p.year}`;
};
const formatTime = (d = new Date()) => {
    const p = partsFromTZ(d);
    return `${pad(p.hour)}:${pad(p.minute)}:${pad(p.second)}hrs`;
};
const formatDateTime = (d = new Date()) => `${formatDate(d)} ${formatTime(d)}`;

/** ---------- Demo, display-only fixtures (no calculations) ---------- */
const TB_GROUPS = [
    {
        group: "Assets",
        note: "Current & non-current assets",
        rows: [
            { code: "1000", name: "Cash & Cash Equivalents", debit: "₹150,000.00", credit: "₹0.00" },
            { code: "1100", name: "Accounts Receivable", debit: "₹320,500.00", credit: "₹0.00" },
            { code: "1200", name: "Inventory", debit: "₹410,200.00", credit: "₹0.00" },
            { code: "1300", name: "Prepaid Expenses", debit: "₹24,800.00", credit: "₹0.00" },
            { code: "1400", name: "Fixed Assets", debit: "₹960,000.00", credit: "₹0.00" },
            { code: "1410", name: "Accumulated Depreciation", debit: "₹0.00", credit: "₹120,000.00" },
        ],
        subtotal: { debit: "₹1,865,500.00", credit: "₹120,000.00" },
    },
    {
        group: "Liabilities",
        note: "Current & long-term liabilities",
        rows: [
            { code: "2000", name: "Accounts Payable", debit: "₹0.00", credit: "₹285,400.00" },
            { code: "2100", name: "Accrued Liabilities", debit: "₹0.00", credit: "₹62,500.00" },
            { code: "2200", name: "Deferred Revenue", debit: "₹0.00", credit: "₹40,000.00" },
            { code: "2300", name: "Short-term Borrowings", debit: "₹0.00", credit: "₹110,000.00" },
            { code: "2400", name: "Long-term Debt", debit: "₹0.00", credit: "₹450,000.00" },
        ],
        subtotal: { debit: "₹0.00", credit: "₹947,900.00" },
    },
    {
        group: "Equity",
        note: "Share capital & retained earnings",
        rows: [
            { code: "3000", name: "Share Capital", debit: "₹0.00", credit: "₹500,000.00" },
            { code: "3100", name: "Securities Premium", debit: "₹0.00", credit: "₹75,000.00" },
            { code: "3200", name: "Retained Earnings", debit: "₹0.00", credit: "₹155,000.00" },
        ],
        subtotal: { debit: "₹0.00", credit: "₹730,000.00" },
    },
    {
        group: "Income",
        note: "Revenue & other income",
        rows: [
            { code: "4000", name: "Sales Revenue", debit: "₹0.00", credit: "₹1,520,000.00" },
            { code: "4100", name: "Other Income", debit: "₹0.00", credit: "₹48,500.00" },
        ],
        subtotal: { debit: "₹0.00", credit: "₹1,568,500.00" },
    },
    {
        group: "Expenses",
        note: "COGS & operating expenses",
        rows: [
            { code: "5000", name: "Cost of Goods Sold", debit: "₹890,000.00", credit: "₹0.00" },
            { code: "5100", name: "Salaries & Wages", debit: "₹230,000.00", credit: "₹0.00" },
            { code: "5200", name: "Rent & Utilities", debit: "₹96,000.00", credit: "₹0.00" },
            { code: "5300", name: "Marketing", debit: "₹45,000.00", credit: "₹0.00" },
            { code: "5400", name: "Professional Fees", debit: "₹18,000.00", credit: "₹0.00" },
            { code: "5500", name: "Miscellaneous", debit: "₹13,000.00", credit: "₹0.00" },
        ],
        subtotal: { debit: "₹1,292,000.00", credit: "₹0.00" },
    },
];

const TB_TOTALS = {
    asOf: formatDateTime(new Date()),
    overall: { debit: "₹3,157,500.00", credit: "₹3,366,400.00" }, // display-only
    difference: { label: "Imbalance", value: "₹208,900.00" },     // display-only badge (demo)
};

const quickLinks = [
    { to: "/finance", label: "Finance Overview" },
    { to: "/finance/chart-of-accounts", label: "Chart of Accounts" },
    { to: "/finance/ledgers", label: "Ledgers" },
    { to: "/finance/journals", label: "Journals" },
    { to: "/finance/taxes", label: "Taxes" },
    { to: "/finance/gst-returns", label: "GST Returns" },
    { to: "/finance/balance-sheet", label: "Balance Sheet" },
    { to: "/finance/profit-loss", label: "Profit & Loss" },
    { to: "/reports/finance", label: "Finance Reports" },
    { to: "/invoices", label: "Invoices" },
];

/** ---------- Component ---------- */
export default function TrialBalancePage() {
    const { pathname } = useLocation();
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(() =>
        TB_GROUPS.reduce((acc, g) => (acc[g.group] = true, acc), {})
    );
    const [copied, setCopied] = useState(false);
    const [showDemoModal, setShowDemoModal] = useState(false);

    // auto open all groups when filtering
    useEffect(() => {
        if (!search.trim()) return;
        setOpen(TB_GROUPS.reduce((acc, g) => (acc[g.group] = true, acc), {}));
    }, [search]);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return TB_GROUPS;
        return TB_GROUPS.map(g => ({
            ...g,
            rows: g.rows.filter(r =>
                (r.code + " " + r.name).toLowerCase().includes(q)
            ),
        })).filter(g => g.rows.length > 0);
    }, [search]);

    const exportCSV = () => {
        const header = ["Group", "Code", "Account", "Debit", "Credit"];
        const lines = [header.join(",")];
        TB_GROUPS.forEach(g => {
            g.rows.forEach(r => lines.push(
                [g.group, r.code, r.name, r.debit, r.credit].map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")
            ));
        });
        const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "trial-balance.csv";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch { }
    };

    const printSection = () => {
        const cls = "print-section-mode";
        document.body.classList.add(cls);
        window.print();
        setTimeout(() => document.body.classList.remove(cls), 0);
    };

    const toggle = (key) => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <Styled.Page>
            {/* Print rules (scoped) */}
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

            <div className="header">
                <div className="breadcrumbs">
                    <NavLink to="/home">Home</NavLink>
                    <span>/</span>
                    <NavLink to="/finance">Finance</NavLink>
                    <span>/</span>
                    <span aria-current="page">Trial Balance</span>
                </div>

                <div className="meta">
                    <div className="title">Trial Balance</div>
                    <div className="sub">
                        As of <strong>{TB_TOTALS.asOf}</strong>
                        <span className="sep">•</span>
                        Period <span className="pill">FY 2025–26</span>
                        <span className="sep">•</span>
                        Base Currency <span className="pill">INR</span>
                    </div>
                </div>

                <div className="actions">
                    <button onClick={exportCSV} title="Export CSV">Export CSV</button>
                    <button onClick={copyLink} title="Copy deep link">{copied ? "Copied!" : "Copy Link"}</button>
                    <button onClick={printSection} title="Print section">Print</button>
                    <button onClick={() => setShowDemoModal(true)} disabled title="Demo Only">Post Adjustment</button>
                </div>
            </div>

            {/* Quick nav */}
            <div className="quicklinks">
                {quickLinks.map((q) => (
                    <NavLink key={q.to} to={q.to} className="chip" title={q.label}>
                        {q.label}
                    </NavLink>
                ))}
            </div>

            {/* Summary cards */}
            <div className="cards">
                <div className="card">
                    <div className="label">Total Debit</div>
                    <div className="value">{TB_TOTALS.overall.debit}</div>
                    <div className="hint">Includes all asset & expense accounts</div>
                </div>
                <div className="card">
                    <div className="label">Total Credit</div>
                    <div className="value">{TB_TOTALS.overall.credit}</div>
                    <div className="hint">Includes liabilities, equity & income</div>
                </div>
                <div className="card warning">
                    <div className="label">{TB_TOTALS.difference.label}</div>
                    <div className="value">{TB_TOTALS.difference.value}</div>
                    <div className="hint">Display-only sample data</div>
                </div>
            </div>

            {/* Controls */}
            <div className="toolbar">
                <div className="group">
                    <label>Search accounts</label>
                    <input
                        type="text"
                        placeholder="Code or account name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label="Search accounts"
                    />
                </div>
                <div className="group">
                    <label>As of</label>
                    <input type="text" value={formatDate(new Date())} readOnly />
                </div>
                <div className="group">
                    <label>Time</label>
                    <input type="text" value={formatTime(new Date())} readOnly />
                </div>
            </div>

            {/* Printable area */}
            <div id="search-print-area" className="sheet">
                <div className="sheet-head">
                    <div>
                        <div className="sheet-title">Trial Balance</div>
                        <div className="sheet-sub">As of {formatDateTime(new Date())} • INR</div>
                    </div>
                    <div className="sheet-brand">
                        <div className="name">Ashish ERP</div>
                        <div className="muted">reports / trial-balance</div>
                    </div>
                </div>

                <div className="table">
                    <div className="thead">
                        <div>Code</div>
                        <div>Account</div>
                        <div className="num">Debit</div>
                        <div className="num">Credit</div>
                    </div>

                    {filtered.map((g) => (
                        <div key={g.group} className="group">
                            <button
                                className="group-head"
                                onClick={() => toggle(g.group)}
                                aria-expanded={open[g.group] ? "true" : "false"}
                                title="Toggle section"
                            >
                                <span className="chev" aria-hidden="true">{open[g.group] ? "▾" : "▸"}</span>
                                <span className="gname">{g.group}</span>
                                {g.note && <span className="gnote">{g.note}</span>}
                                <span className="spacer" />
                                <span className="subt">
                                    <span className="num">{g.subtotal.debit}</span>
                                    <span className="num">{g.subtotal.credit}</span>
                                </span>
                            </button>

                            {open[g.group] && (
                                <div className="tbody">
                                    {g.rows.map((r) => (
                                        <div key={g.group + r.code} className="row">
                                            <div className="code">{r.code}</div>
                                            <div className="name">
                                                <NavLink to={`/finance/ledgers/${encodeURIComponent(r.code)}`} title="Open ledger">
                                                    {r.name}
                                                </NavLink>
                                            </div>
                                            <div className="num">{r.debit}</div>
                                            <div className="num">{r.credit}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <div className="foot">
                    <div className="legend">
                        <span className="dot" /> Display-only theme. Values are illustrative.
                    </div>
                    <div className="signoff">
                        Generated on {formatDateTime(new Date())}
                    </div>
                </div>
            </div>

            {/* Mini demo modal (non-blocking, custom) */}
            {showDemoModal && (
                <div className="modal" role="dialog" aria-modal="true" aria-labelledby="demo-title">
                    <div className="modal-card">
                        <div className="modal-head">
                            <div id="demo-title">Action unavailable in demo</div>
                            <button onClick={() => setShowDemoModal(false)} aria-label="Close">✕</button>
                        </div>
                        <div className="modal-body">
                            This is a display-only preview. Posting manual adjustments is disabled.
                        </div>
                        <div className="modal-actions">
                            <button onClick={() => setShowDemoModal(false)}>Close</button>
                            <NavLink to="/finance/journals" className="ghost">Open Journals</NavLink>
                        </div>
                    </div>
                </div>
            )}
        </Styled.Page>
    );
}
