import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- formatting helpers ---------- */
const fmtDate = (d, withTime = false) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    return withTime ? `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs` : base;
};
const money = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(n);

/* ---------- demo dataset (display-only) ---------- */
const DEMO = [
    { id: "CN-2101", invoiceId: "INV-2031", customer: "Bluewave Traders", date: "2025-10-04T15:38:20+05:30", reason: "Damaged goods", status: "open", amount: 12450, balance: 12450, user: "Arjun" },
    { id: "CN-2102", invoiceId: "INV-2032", customer: "Sapphire Retail", date: "2025-09-28T11:20:45+05:30", reason: "Short supply", status: "adjusted", amount: 5600, balance: 0, user: "Nikita" },
    { id: "CN-2103", invoiceId: "INV-2033", customer: "Nimbus Wholesale", date: "2025-09-22T09:10:30+05:30", reason: "Expired stock", status: "void", amount: 3100, balance: 3100, user: "Karan" },
    { id: "CN-2104", invoiceId: "INV-2070", customer: "Vertex Pharmaceuticals", date: "2025-09-15T14:05:10+05:30", reason: "Rate difference", status: "adjusted", amount: 9900, balance: 0, user: "Pooja" },
    { id: "CN-2105", invoiceId: "INV-2080", customer: "Northwind Clinic", date: "2025-09-12T16:15:33+05:30", reason: "Wrong item delivered", status: "open", amount: 4425, balance: 4425, user: "Ameya" },
    { id: "CN-2106", invoiceId: "INV-2091", customer: "Greenbridge Chemists", date: "2025-09-10T12:30:00+05:30", reason: "Partial return", status: "open", amount: 2750, balance: 2750, user: "Isha" },
    { id: "CN-2107", invoiceId: "INV-2100", customer: "Aster Hospitals", date: "2025-09-06T10:08:10+05:30", reason: "Order cancelled", status: "void", amount: 15250, balance: 15250, user: "Arjun" },
    { id: "CN-2108", invoiceId: "INV-2105", customer: "Medico Hub", date: "2025-09-01T18:41:05+05:30", reason: "Promotional credit", status: "adjusted", amount: 2300, balance: 0, user: "Nikita" },
];

/* pre-computed overview values for display-only */
const METRICS = {
    openCount: 3,
    adjustedCount: 3,
    voidCount: 2,
    totalValue: "₹68,775.00",
    lastSync: "Sat Oct 04 2025 15:38:20hrs",
};

const DemoDisabledDialog = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>Action unavailable</h4></header>
                <div className="body">
                    <p>This is a demo preview. Create/Update/Delete actions are disabled.</p>
                </div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>Okay</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const CreditNotesList = () => {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [showDemo, setShowDemo] = useState(false);
    const printRef = useRef(null);

    const filtered = useMemo(() => {
        const t = q.trim().toLowerCase();
        if (!t) return DEMO;
        return DEMO.filter(r => {
            const blob = `${r.id} ${r.invoiceId} ${r.customer} ${r.reason} ${r.status} ${r.user}`.toLowerCase();
            return t.split(/\s+/).every(x => blob.includes(x));
        });
    }, [q]);

    const exportCSV = () => {
        const head = ["CreditNote", "Invoice", "Customer", "Date", "Status", "Reason", "Amount", "Balance", "User"];
        const rows = filtered.map(r => [
            r.id, r.invoiceId, r.customer, fmtDate(r.date, true), r.status, r.reason, r.amount, r.balance, r.user
        ]);
        const lines = [head, ...rows].map(arr =>
            arr.map(x => `"${String(x).replaceAll('"', '""')}"`).join(",")
        ).join("\n");
        const blob = new Blob([lines], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "credit-notes.csv";
        document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
    };

    const printSection = () => {
        const el = printRef.current; if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const quick = (t) => setQ(t);

    return (
        <Styled.Page>
            {/* Print styles required */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }

          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Credit Notes</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/invoices">Invoices</NavLink>
                        <span>/</span>
                        <span className="current">Credit Notes</span>
                    </nav>
                    <div className="meta">
                        <span>As of {METRICS.lastSync}</span>
                    </div>
                </div>

                <div className="actions">
                    <button className="btnDisabled" title="Demo preview only" onClick={() => setShowDemo(true)}>New Credit Note</button>
                    <button className="btnGhost" onClick={exportCSV} title="Download CSV of visible rows">Export CSV</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary/table">Print</button>
                </div>
            </Styled.Header>

            <Styled.Metrics>
                <div className="metric card">
                    <div className="k">Open</div>
                    <div className="v">{METRICS.openCount}</div>
                    <div className="s">Awaiting adjustment</div>
                </div>
                <div className="metric card">
                    <div className="k">Adjusted</div>
                    <div className="v">{METRICS.adjustedCount}</div>
                    <div className="s">Applied to invoices</div>
                </div>
                <div className="metric card">
                    <div className="k">Voided</div>
                    <div className="v">{METRICS.voidCount}</div>
                    <div className="s">Cancelled records</div>
                </div>
                <div className="metric card">
                    <div className="k">Total Value</div>
                    <div className="v">{METRICS.totalValue}</div>
                    <div className="s">Cumulative credits</div>
                </div>
            </Styled.Metrics>

            <Styled.Tools className="card">
                <div className="row">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search: CN / invoice / customer / status / reason / user"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            aria-label="Search credit notes list"
                        />
                    </div>
                    <div className="quick">
                        <span className="label">Quick:</span>
                        <button className="chip" onClick={() => quick("open")}>Open</button>
                        <button className="chip" onClick={() => quick("adjusted")}>Adjusted</button>
                        <button className="chip" onClick={() => quick("void")}>Voided</button>
                        <button className="chip" onClick={() => setQ("")}>Reset</button>
                    </div>
                </div>
            </Styled.Tools>

            <Styled.TableWrap className="card" id="search-print-area" ref={printRef}>
                <div className="tableMeta">
                    <div className="count">{filtered.length} records</div>
                    <div className="legend">
                        <span className="dot open" /> Open
                        <span className="dot adjusted" /> Adjusted
                        <span className="dot void" /> Voided
                    </div>
                </div>

                <div className="tableScroller">
                    <table className="grid">
                        <thead>
                            <tr>
                                <th>Credit Note</th>
                                <th>Invoice</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th className="right">Amount</th>
                                <th className="right">Balance</th>
                                <th>By</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(row => (
                                <tr key={row.id}>
                                    <td>
                                        <NavLink className="mono" to={`/invoices/credit-notes/${row.id}`} title="Open credit note">
                                            {row.id}
                                        </NavLink>
                                    </td>
                                    <td>
                                        <NavLink className="mono" to={`/invoices/${row.invoiceId}`} title="Open invoice">
                                            {row.invoiceId}
                                        </NavLink>
                                    </td>
                                    <td>{row.customer}</td>
                                    <td>
                                        <div className="date">{fmtDate(row.date)}</div>
                                        <div className="time muted">{fmtDate(row.date, true).split(" ").slice(4).join(" ")}</div>
                                    </td>
                                    <td>{row.reason}</td>
                                    <td>
                                        <span className={`status ${row.status}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="right">{money(row.amount)}</td>
                                    <td className="right">{money(row.balance)}</td>
                                    <td>{row.user}</td>
                                    <td className="actions">
                                        <NavLink className="link" to={`/invoices/credit-notes/${row.id}`}>View</NavLink>
                                        <button className="link disabled" title="Demo preview only" onClick={() => setShowDemo(true)}>Void</button>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr className="empty">
                                    <td colSpan={10}>
                                        <div className="emptyWrap">
                                            <div className="title">No results</div>
                                            <div className="sub">Try a different keyword or clear the search.</div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Styled.TableWrap>

            <DemoDisabledDialog open={showDemo} onClose={() => setShowDemo(false)} />
        </Styled.Page>
    );
};

export default CreditNotesList;
