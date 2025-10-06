import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

// ---- date formatting helpers (single source of truth)
const dd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const mm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${dd[x.getDay()]} ${mm[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

// ---- demo fixtures (display-only, deterministic)
const FIXED_SUMMARY = {
    totalReceipts: "₹ 2,43,890.00",
    today: "₹ 12,450.00",
    month: "₹ 1,28,700.00",
    avgAmount: "₹ 7,436.06",
};

const RECEIPTS = [
    {
        id: "RCPT-5001",
        invoiceId: "INV-2031",
        customer: { id: "CUST-1001", name: "Aarav Sharma" },
        amount: 12450.0,
        method: "UPI",
        status: "Settled",
        receivedAt: "2025-10-04T14:08:21+05:30",
        createdBy: "ashish",
    },
    {
        id: "RCPT-5002",
        invoiceId: "INV-2032",
        customer: { id: "CUST-1002", name: "Niharika Verma" },
        amount: 8900.0,
        method: "Card",
        status: "Settled",
        receivedAt: "2025-10-03T17:42:09+05:30",
        createdBy: "mohit",
    },
    {
        id: "RCPT-5003",
        invoiceId: "INV-2033",
        customer: { id: "CUST-1003", name: "Bluewave Traders" },
        amount: 45200.0,
        method: "Bank",
        status: "Pending",
        receivedAt: "2025-10-02T11:23:55+05:30",
        createdBy: "neha",
    },
    {
        id: "RCPT-5004",
        invoiceId: "INV-2034",
        customer: { id: "CUST-1004", name: "Tricity Medico" },
        amount: 2150.0,
        method: "Cash",
        status: "Settled",
        receivedAt: "2025-10-01T10:00:00+05:30",
        createdBy: "ashish",
    },
    {
        id: "RCPT-5005",
        invoiceId: "INV-2035",
        customer: { id: "CUST-1005", name: "Ananya Rao" },
        amount: 12600.0,
        method: "UPI",
        status: "Settled",
        receivedAt: "2025-09-30T19:18:44+05:30",
        createdBy: "mohit",
    },
    {
        id: "RCPT-5006",
        invoiceId: "INV-2036",
        customer: { id: "CUST-1006", name: "RapidCare Labs" },
        amount: 37850.0,
        method: "Bank",
        status: "Partial",
        receivedAt: "2025-09-29T09:02:07+05:30",
        createdBy: "neha",
    },
    {
        id: "RCPT-5007",
        invoiceId: "INV-2037",
        customer: { id: "CUST-1007", name: "Sunrise Pharmacy" },
        amount: 4999.0,
        method: "Card",
        status: "Settled",
        receivedAt: "2025-09-28T12:16:30+05:30",
        createdBy: "ashish",
    },
    {
        id: "RCPT-5008",
        invoiceId: "INV-2038",
        customer: { id: "CUST-1008", name: "NeuroWell Clinic" },
        amount: 16450.0,
        method: "UPI",
        status: "Refunded",
        receivedAt: "2025-09-28T16:40:12+05:30",
        createdBy: "neha",
    },
    {
        id: "RCPT-5009",
        invoiceId: "INV-2039",
        customer: { id: "CUST-1009", name: "Apex Diagnostics" },
        amount: 28500.0,
        method: "Bank",
        status: "Settled",
        receivedAt: "2025-09-27T10:11:11+05:30",
        createdBy: "mohit",
    },
    {
        id: "RCPT-5010",
        invoiceId: "INV-2040",
        customer: { id: "CUST-1010", name: "Cliniva Pvt Ltd" },
        amount: 9800.0,
        method: "Cash",
        status: "Settled",
        receivedAt: "2025-09-27T18:33:26+05:30",
        createdBy: "ashish",
    },
    // add a few more for a scrolly table
    {
        id: "RCPT-5011",
        invoiceId: "INV-2041",
        customer: { id: "CUST-1011", name: "Alpha Care" },
        amount: 13200.0,
        method: "UPI",
        status: "Settled",
        receivedAt: "2025-09-26T13:58:00+05:30",
        createdBy: "neha",
    },
    {
        id: "RCPT-5012",
        invoiceId: "INV-2042",
        customer: { id: "CUST-1012", name: "WellSpring" },
        amount: 7300.0,
        method: "Card",
        status: "Settled",
        receivedAt: "2025-09-25T12:05:42+05:30",
        createdBy: "mohit",
    },
    {
        id: "RCPT-5013",
        invoiceId: "INV-2043",
        customer: { id: "CUST-1013", name: "Aarogya Plus" },
        amount: 25100.0,
        method: "Bank",
        status: "Pending",
        receivedAt: "2025-09-25T20:14:09+05:30",
        createdBy: "ashish",
    },
    {
        id: "RCPT-5014",
        invoiceId: "INV-2044",
        customer: { id: "CUST-1014", name: "Bharat Pharma" },
        amount: 15400.0,
        method: "UPI",
        status: "Settled",
        receivedAt: "2025-09-24T08:44:29+05:30",
        createdBy: "neha",
    },
    {
        id: "RCPT-5015",
        invoiceId: "INV-2045",
        customer: { id: "CUST-1015", name: "Om Clinics" },
        amount: 6400.0,
        method: "Cash",
        status: "Settled",
        receivedAt: "2025-09-24T10:10:10+05:30",
        createdBy: "mohit",
    },
];

const DEMO_MODE = true; // gate destructive actions

const ReceiptsList = () => {
    const printRef = useRef(null);

    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all");      // all | Settled | Pending | Partial | Refunded
    const [method, setMethod] = useState("all");      // all | UPI | Card | Cash | Bank
    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return RECEIPTS.filter(r => {
            if (status !== "all" && r.status !== status) return false;
            if (method !== "all" && r.method !== method) return false;
            if (tokens.length === 0) return true;
            const hay = `${r.id} ${r.invoiceId} ${r.customer.name} ${r.method} ${r.status}`.toLowerCase();
            return tokens.every(t => hay.includes(t));
        });
    }, [q, status, method]);

    const exportJSON = () => {
        const payload = { generatedAt: fmtDateTime(new Date()), filters: { q, status, method }, items: filtered };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `receipts-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
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

    return (
        <Styled.Page>
            {/* print rules */}
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
                    <h1>Receipts</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/invoices">Billing</NavLink>
                        <span>/</span>
                        <span className="current">Receipts</span>
                    </nav>
                    <div className="meta">
                        <span>As of {fmtDateTime(new Date())}</span>
                    </div>
                </div>

                <div className="right actions">
                    <button
                        className="btnGhost"
                        title="Demo — create is disabled"
                        disabled={DEMO_MODE}
                        aria-disabled={DEMO_MODE}
                    >
                        New Receipt
                    </button>
                    <button className="btnPrimary" onClick={exportJSON} title="Download JSON snapshot">Export</button>
                    <button className="btnGhost" onClick={printSection} title="Print this view">Print</button>
                </div>
            </Styled.Header>

            {/* Summary */}
            <Styled.Summary>
                <div className="card kpi">
                    <div className="k">Total</div>
                    <div className="v">{FIXED_SUMMARY.totalReceipts}</div>
                    <div className="hint">All-time received</div>
                </div>
                <div className="card kpi">
                    <div className="k">Today</div>
                    <div className="v">{FIXED_SUMMARY.today}</div>
                    <div className="hint">{fmtDate(new Date())}</div>
                </div>
                <div className="card kpi">
                    <div className="k">This Month</div>
                    <div className="v">{FIXED_SUMMARY.month}</div>
                    <div className="hint">Month-to-date</div>
                </div>
                <div className="card kpi">
                    <div className="k">Avg Amount</div>
                    <div className="v">{FIXED_SUMMARY.avgAmount}</div>
                    <div className="hint">Per receipt</div>
                </div>
            </Styled.Summary>

            {/* Filters */}
            <Styled.Filters className="card">
                <div className="row">
                    <div className="field">
                        <label>Search</label>
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Receipt / Invoice / Customer / Method"
                            aria-label="Search receipts"
                        />
                    </div>

                    <div className="field">
                        <label>Status</label>
                        <div className="chips">
                            {["all", "Settled", "Pending", "Partial", "Refunded"].map(s => (
                                <button
                                    key={s}
                                    className={`chip ${status === s ? "active" : ""}`}
                                    onClick={() => setStatus(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="field">
                        <label>Method</label>
                        <div className="chips">
                            {["all", "UPI", "Card", "Cash", "Bank"].map(m => (
                                <button
                                    key={m}
                                    className={`chip ${method === m ? "active" : ""}`}
                                    onClick={() => setMethod(m)}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row metaRow">
                    <div className="legend">
                        <span className="dot upi" /> UPI
                        <span className="dot card" /> Card
                        <span className="dot cash" /> Cash
                        <span className="dot bank" /> Bank
                    </div>
                    <div className="distribution">
                        <div className="bar">
                            <span className="seg upi" style={{ width: "34%" }} />
                            <span className="seg card" style={{ width: "26%" }} />
                            <span className="seg cash" style={{ width: "18%" }} />
                            <span className="seg bank" style={{ width: "22%" }} />
                        </div>
                        <div className="note">Method mix (demo)</div>
                    </div>
                </div>
            </Styled.Filters>

            {/* Table */}
            <Styled.TableCard className="card">
                <div className="tableWrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Receipt</th>
                                <th>Invoice</th>
                                <th>Customer</th>
                                <th className="right">Amount (₹)</th>
                                <th>Method</th>
                                <th>Status</th>
                                <th>Received On</th>
                                <th>Created By</th>
                                <th>Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(r => (
                                <tr key={r.id}>
                                    <td><span className="mono">{r.id}</span></td>
                                    <td>
                                        <NavLink to={`/invoices/${r.invoiceId}`} title={`Open ${r.invoiceId}`}>{r.invoiceId}</NavLink>
                                    </td>
                                    <td>
                                        <NavLink to={`/customers/${r.customer.id}`} title={`Open ${r.customer.name}`}>{r.customer.name}</NavLink>
                                    </td>
                                    <td className="right">{r.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                                    <td><span className={`badge method ${r.method.toLowerCase()}`}>{r.method}</span></td>
                                    <td>
                                        <span className={`badge status ${r.status.toLowerCase().replace(/\s+/g, '-')}`}>{r.status}</span>
                                    </td>
                                    <td>{fmtDateTime(r.receivedAt)}</td>
                                    <td className="muted">{r.createdBy}</td>
                                    <td className="links">
                                        <NavLink to={`/invoices/${r.invoiceId}`} className="tiny">Invoice</NavLink>
                                        <NavLink to={`/customers/${r.customer.id}`} className="tiny">Customer</NavLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="footerBar">
                    <div className="count">{filtered.length} receipts</div>
                    <div className="pager">
                        <button className="btnGhost small" disabled>Prev</button>
                        <button className="btnGhost small" disabled>Next</button>
                    </div>
                </div>
            </Styled.TableCard>

            {/* Printable: summary + compact table */}
            <Styled.PrintArea id="search-print-area" ref={printRef}>
                <h2>Receipts — Summary</h2>
                <div className="grid">
                    <div><div className="k">Generated</div><div className="v">{fmtDateTime(new Date())}</div></div>
                    <div><div className="k">Filters</div><div className="v">q: {q || "—"}, status: {status}, method: {method}</div></div>
                    <div><div className="k">Total</div><div className="v">{FIXED_SUMMARY.totalReceipts}</div></div>
                    <div><div className="k">Today</div><div className="v">{FIXED_SUMMARY.today}</div></div>
                </div>

                <table className="printTable">
                    <thead>
                        <tr>
                            <th>Receipt</th>
                            <th>Invoice</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Status</th>
                            <th>Received</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.slice(0, 14).map(r => (
                            <tr key={`p-${r.id}`}>
                                <td>{r.id}</td>
                                <td>{r.invoiceId}</td>
                                <td>{r.customer.name}</td>
                                <td>₹ {r.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                                <td>{r.method}</td>
                                <td>{r.status}</td>
                                <td>{fmtDateTime(r.receivedAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Styled.PrintArea>
        </Styled.Page>
    );
};

export default ReceiptsList;
