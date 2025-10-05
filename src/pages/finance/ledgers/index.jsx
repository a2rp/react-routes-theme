import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- date & money formatting (single source) ---------- */
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
const money = (n) =>
    new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

/* ---------- display-only dataset (pre-specified) ---------- */
const DEMO_MODE = true;

const LEDGER_SUMMARY = {
    org: "Bluewave Traders",
    baseCurrency: "INR",
    periodFrom: "2025-10-01",
    periodTo: "2025-10-05",
    preparedAt: new Date("2025-10-05T15:38:20+05:30"),
    totals: {
        debit: 125000.0,
        credit: 125000.0,
        entries: 12
    }
};

const LEDGER_ROWS = [
    // date, accountCode, accountName, type, ref, description, debit, credit
    ["2025-10-01", "AC-1001", "Cash & Bank", "Asset", "RCPT-1122", "Customer receipt INV-2030", 25000, 0],
    ["2025-10-01", "AC-1100", "Accounts Receivable", "Asset", "INV-2031", "Invoice to CUST-1001", 0, 42000],
    ["2025-10-01", "AC-4000", "Sales Revenue", "Income", "INV-2031", "Sales income for order ORD-3456", 0, 42000],
    ["2025-10-01", "AC-5000", "COGS", "Expense", "JV-9001", "Cost of goods for INV-2031", 18000, 0],
    ["2025-10-01", "AC-1200", "Inventory", "Asset", "JV-9001", "COGS adjustment", 0, 18000],
    ["2025-10-02", "AC-2000", "Accounts Payable", "Liability", "BILL-7781", "Vendor bill for purchase", 52000, 0],
    ["2025-10-02", "AC-1200", "Inventory", "Asset", "BILL-7781", "Inventory received GRN-5544", 0, 52000],
    ["2025-10-03", "AC-6100", "Operating Expenses", "Expense", "JV-9099", "Courier & packaging", 3500, 0],
    ["2025-10-03", "AC-1001", "Cash & Bank", "Asset", "PMT-2203", "Payment to vendor V-203", 0, 20000],
    ["2025-10-04", "AC-1100", "Accounts Receivable", "Asset", "RCPT-1125", "Receipt against INV-2031", 42000, 0],
    ["2025-10-04", "AC-1001", "Cash & Bank", "Asset", "RCPT-1125", "Bank deposit", 0, 42000],
    ["2025-10-05", "AC-3000", "Equity", "Equity", "JV-9105", "Opening/Retained earnings adj.", 0, 0],
];

/* ---------- helpers ---------- */
const toCSV = (rows) => {
    const header = [
        "Date",
        "Account Code",
        "Account Name",
        "Type",
        "Reference",
        "Description",
        "Debit",
        "Credit",
    ].join(",");
    const lines = rows.map(r =>
        [
            fmt(r.date),
            r.accountCode,
            r.accountName,
            r.type,
            r.ref,
            `"${(r.description || "").replace(/"/g, '""')}"`,
            money(r.debit),
            money(r.credit),
        ].join(",")
    );
    return [header, ...lines].join("\n");
};

const LedgersList = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    const [q, setQ] = useState("");
    const [type, setType] = useState("All"); // All | Asset | Liability | Equity | Income | Expense
    const [dense, setDense] = useState(false);

    const rows = useMemo(
        () =>
            LEDGER_ROWS.map((r, i) => ({
                id: i + 1,
                date: new Date(r[0] + "T10:00:00+05:30"),
                accountCode: r[1],
                accountName: r[2],
                type: r[3],
                ref: r[4],
                description: r[5],
                debit: r[6],
                credit: r[7],
            })),
        []
    );

    const filtered = useMemo(() => {
        const term = q.trim().toLowerCase();
        return rows.filter(r => {
            const tMatch =
                type === "All" ? true : r.type.toLowerCase() === type.toLowerCase();
            if (!term) return tMatch;
            const blob = `${r.accountCode} ${r.accountName} ${r.ref} ${r.description}`.toLowerCase();
            return tMatch && blob.includes(term);
        });
    }, [rows, q, type]);

    const exportCSV = () => {
        const csv = toCSV(filtered);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `ledgers-${LEDGER_SUMMARY.periodFrom}-to-${LEDGER_SUMMARY.periodTo}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const copyLink = async () => {
        const url = window.location.origin + (import.meta.env.BASE_URL || "") + "finance/ledgers";
        try { await navigator.clipboard.writeText(url); } catch { }
    };

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

    const openAccount = (code) => navigate(`/finance/ledgers/${encodeURIComponent(code)}`);

    return (
        <Styled.Page>
            {/* print CSS (scoped exactly as requested) */}
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

            <header className="card pageHead">
                <div className="l">
                    <h1>Ledgers</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/finance">Finance</NavLink>
                        <span>/</span>
                        <span className="current">Ledgers</span>
                    </nav>
                    <div className="meta">
                        <span>Period: {fmt(new Date(LEDGER_SUMMARY.periodFrom))} — {fmt(new Date(LEDGER_SUMMARY.periodTo))}</span>
                        <span>•</span>
                        <span>Prepared: {fmt(LEDGER_SUMMARY.preparedAt, true)}</span>
                    </div>
                </div>
                <div className="r actions">
                    <button className="btnGhost" onClick={copyLink} title="Copy deep link">Copy Link</button>
                    <button className="btnGhost" onClick={printSection} title="Print current view">Print</button>
                    <button className="btnPrimary" onClick={exportCSV} title="Export current rows to CSV">Export</button>
                    <button className="btnDisabled" disabled title="Demo mode">New Journal</button>
                    <button className="btnDisabled" disabled title="Demo mode">Import</button>
                    <button className="btnDisabled" disabled title="Demo mode">Reconcile</button>
                </div>
            </header>

            {/* Quick KPI cards */}
            <section className="kpis">
                <div className="card kpi">
                    <div className="label">Entries</div>
                    <div className="value">{LEDGER_SUMMARY.totals.entries}</div>
                </div>
                <div className="card kpi">
                    <div className="label">Total Debit</div>
                    <div className="value">₹ {money(LEDGER_SUMMARY.totals.debit)}</div>
                </div>
                <div className="card kpi">
                    <div className="label">Total Credit</div>
                    <div className="value">₹ {money(LEDGER_SUMMARY.totals.credit)}</div>
                </div>
                <div className="card kpi">
                    <div className="label">Base Currency</div>
                    <div className="value">{LEDGER_SUMMARY.baseCurrency}</div>
                </div>
            </section>

            {/* Toolbar */}
            <section className="toolbar card">
                <div className="filters">
                    <div className="field">
                        <label>Search</label>
                        <input
                            type="text"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Find by account, reference, or description…"
                            aria-label="Search ledgers"
                        />
                    </div>

                    <div className="field types">
                        <label>Type</label>
                        <div className="chips">
                            {["All", "Asset", "Liability", "Equity", "Income", "Expense"].map(t => (
                                <button
                                    key={t}
                                    className={`chip ${type === t ? "active" : ""}`}
                                    onClick={() => setType(t)}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="toggles">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={dense}
                                onChange={(e) => setDense(e.target.checked)}
                            />
                            <span>Dense rows</span>
                        </label>
                    </div>
                </div>

                <div className="context">
                    <div>
                        <div className="muted">Organisation</div>
                        <div>{LEDGER_SUMMARY.org}</div>
                    </div>
                    <div>
                        <div className="muted">From</div>
                        <div>{fmt(new Date(LEDGER_SUMMARY.periodFrom))}</div>
                    </div>
                    <div>
                        <div className="muted">To</div>
                        <div>{fmt(new Date(LEDGER_SUMMARY.periodTo))}</div>
                    </div>
                    <div>
                        <div className="muted">As of</div>
                        <div>{fmt(new Date(), true)}</div>
                    </div>
                </div>
            </section>

            {/* Main grid: table + printable summary on the right */}
            <section className="grid">
                <div className={`card tableWrap ${dense ? "dense" : ""}`}>
                    <div className="tableHead">
                        <div className="left">Showing <strong>{filtered.length}</strong> rows</div>
                        <div className="right">
                            <span className="muted">Tip: Click account to open its detail</span>
                        </div>
                    </div>

                    <div className="tableScroller">
                        <table className="listing">
                            <thead>
                                <tr>
                                    <th style={{ minWidth: 120 }}>Date</th>
                                    <th style={{ minWidth: 120 }}>Account Code</th>
                                    <th style={{ minWidth: 220 }}>Account Name</th>
                                    <th style={{ minWidth: 120 }}>Type</th>
                                    <th style={{ minWidth: 140 }}>Reference</th>
                                    <th>Description</th>
                                    <th className="num" style={{ minWidth: 140 }}>Debit</th>
                                    <th className="num" style={{ minWidth: 140 }}>Credit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map(r => (
                                    <tr key={r.id}>
                                        <td>{fmt(r.date)}</td>
                                        <td>
                                            <button className="linkish" onClick={() => openAccount(r.accountCode)} title="Open account detail">
                                                {r.accountCode}
                                            </button>
                                        </td>
                                        <td>{r.accountName}</td>
                                        <td>{r.type}</td>
                                        <td>{r.ref}</td>
                                        <td className="desc">{r.description}</td>
                                        <td className="num">{r.debit ? "₹ " + money(r.debit) : ""}</td>
                                        <td className="num">{r.credit ? "₹ " + money(r.credit) : ""}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Printable summary */}
                <aside className="card side" id="search-print-area" ref={printRef}>
                    <h3>Ledger Register</h3>
                    <div className="kv">
                        <div><span className="k">Organisation</span><span className="v">{LEDGER_SUMMARY.org}</span></div>
                        <div><span className="k">Base Currency</span><span className="v">{LEDGER_SUMMARY.baseCurrency}</span></div>
                        <div><span className="k">From</span><span className="v">{fmt(new Date(LEDGER_SUMMARY.periodFrom))}</span></div>
                        <div><span className="k">To</span><span className="v">{fmt(new Date(LEDGER_SUMMARY.periodTo))}</span></div>
                        <div><span className="k">Prepared</span><span className="v">{fmt(LEDGER_SUMMARY.preparedAt, true)}</span></div>
                    </div>

                    <div className="hr" />

                    <div className="totals">
                        <div>
                            <div className="label">Total Debit</div>
                            <div className="value">₹ {money(LEDGER_SUMMARY.totals.debit)}</div>
                        </div>
                        <div>
                            <div className="label">Total Credit</div>
                            <div className="value">₹ {money(LEDGER_SUMMARY.totals.credit)}</div>
                        </div>
                        <div>
                            <div className="label">Entries</div>
                            <div className="value">{LEDGER_SUMMARY.totals.entries}</div>
                        </div>
                    </div>

                    <div className="help">
                        <p className="muted">
                            This is a display-only register for demo. Use the export above to download the current view.
                        </p>
                    </div>
                </aside>
            </section>
        </Styled.Page>
    );
};

export default LedgersList;
