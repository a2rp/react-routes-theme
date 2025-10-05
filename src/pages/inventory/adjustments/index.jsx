import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* date helpers (consistent across the app) */
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* demo fixtures (display-only) */
const SUMMARY = { total: 128, pending: 4, approved: 120, rejected: 4 };

const ADJUSTMENTS = [
    {
        id: "ADJ-2025-0001",
        warehouse: "Central WH",
        reason: "Damage",
        items: 3,
        reference: "RCV-7831",
        createdBy: "Ananya Gupta",
        createdAt: "2025-10-04T15:38:20+05:30",
        status: "Approved",
    },
    {
        id: "ADJ-2025-0002",
        warehouse: "South Hub",
        reason: "Cycle Count",
        items: 12,
        reference: "CC-2025-09-30",
        createdBy: "Rohan Verma",
        createdAt: "2025-10-03T18:12:05+05:30",
        status: "Pending",
    },
    {
        id: "ADJ-2025-0003",
        warehouse: "Central WH",
        reason: "Expiry",
        items: 5,
        reference: "BATCH-AX91",
        createdBy: "Lisa D’Souza",
        createdAt: "2025-10-02T11:46:51+05:30",
        status: "Rejected",
    },
    {
        id: "ADJ-2025-0004",
        warehouse: "East Depot",
        reason: "Transfer Correction",
        items: 8,
        reference: "TRF-1189",
        createdBy: "Vikram Iyer",
        createdAt: "2025-10-01T09:25:10+05:30",
        status: "Approved",
    },
    {
        id: "ADJ-2025-0005",
        warehouse: "Central WH",
        reason: "Cycle Count",
        items: 10,
        reference: "CC-2025-09-27",
        createdBy: "Ananya Gupta",
        createdAt: "2025-09-30T17:02:41+05:30",
        status: "Approved",
    },
    {
        id: "ADJ-2025-0006",
        warehouse: "South Hub",
        reason: "Damage",
        items: 2,
        reference: "RET-5521",
        createdBy: "Aman Khan",
        createdAt: "2025-09-29T14:00:12+05:30",
        status: "Approved",
    },
    {
        id: "ADJ-2025-0007",
        warehouse: "East Depot",
        reason: "Expiry",
        items: 7,
        reference: "BATCH-RZ14",
        createdBy: "Meera Patel",
        createdAt: "2025-09-28T16:40:33+05:30",
        status: "Approved",
    },
    {
        id: "ADJ-2025-0008",
        warehouse: "Central WH",
        reason: "Transfer Correction",
        items: 1,
        reference: "TRF-1180",
        createdBy: "Rohit Kumar",
        createdAt: "2025-09-27T10:05:59+05:30",
        status: "Approved",
    },
    {
        id: "ADJ-2025-0009",
        warehouse: "West Node",
        reason: "Cycle Count",
        items: 9,
        reference: "CC-2025-09-26",
        createdBy: "Riya Sen",
        createdAt: "2025-09-26T12:21:48+05:30",
        status: "Approved",
    },
    {
        id: "ADJ-2025-0010",
        warehouse: "West Node",
        reason: "Damage",
        items: 6,
        reference: "RET-5466",
        createdBy: "Zaid Sheikh",
        createdAt: "2025-09-25T19:35:14+05:30",
        status: "Approved",
    },
    {
        id: "ADJ-2025-0011",
        warehouse: "South Hub",
        reason: "Expiry",
        items: 4,
        reference: "BATCH-KD55",
        createdBy: "Aman Khan",
        createdAt: "2025-09-24T08:17:22+05:30",
        status: "Approved",
    },
    {
        id: "ADJ-2025-0012",
        warehouse: "East Depot",
        reason: "Cycle Count",
        items: 11,
        reference: "CC-2025-09-20",
        createdBy: "Meera Patel",
        createdAt: "2025-09-22T13:11:03+05:30",
        status: "Approved",
    },
];

const WAREHOUSES = ["Central WH", "South Hub", "East Depot", "West Node"];
const STATUSES = ["Approved", "Pending", "Rejected"];
const REASONS = ["Cycle Count", "Damage", "Expiry", "Transfer Correction"];

const AdjustmentsPage = () => {
    const printRef = useRef(null);

    /* display-only filters (in-memory) */
    const [q, setQ] = useState("");
    const [wh, setWh] = useState("");
    const [st, setSt] = useState("");
    const [rs, setRs] = useState("");

    const filtered = useMemo(() => {
        const t = (s) => s.toLowerCase();
        const toks = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return ADJUSTMENTS.filter((row) => {
            if (wh && row.warehouse !== wh) return false;
            if (st && row.status !== st) return false;
            if (rs && row.reason !== rs) return false;
            if (toks.length) {
                const blob = t(
                    `${row.id} ${row.warehouse} ${row.reason} ${row.reference} ${row.createdBy} ${row.status}`
                );
                if (!toks.every((x) => blob.includes(x))) return false;
            }
            return true;
        });
    }, [q, wh, st, rs]);

    const exportJSON = () => {
        const blob = new Blob([JSON.stringify({ items: filtered }, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "inventory-adjustments.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

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
            {/* print CSS as requested */}
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

            <header className="card pageHead">
                <div className="left">
                    <h1>Inventory Adjustments</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/inventory">Inventory</NavLink>
                        <span>/</span>
                        <span className="current">Adjustments</span>
                    </nav>
                    <div className="subMeta">
                        <span>Last sync: {fmtDateTime("2025-10-04T15:38:20+05:30")}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnPrimary" onClick={exportJSON} title="Download JSON">Export</button>
                    <button className="btnPrimary" disabled data-tooltip="Demo mode">
                        New Adjustment
                    </button>
                </div>
            </header>

            {/* summary cards */}
            <section className="metrics">
                <div className="card metric">
                    <div className="k">Total</div>
                    <div className="v">{SUMMARY.total}</div>
                    <div className="hint">All time</div>
                </div>
                <div className="card metric">
                    <div className="k">Approved</div>
                    <div className="v">{SUMMARY.approved}</div>
                    <div className="hint">Auto-posted to stock</div>
                </div>
                <div className="card metric">
                    <div className="k">Pending</div>
                    <div className="v">{SUMMARY.pending}</div>
                    <div className="hint">Awaiting review</div>
                </div>
                <div className="card metric">
                    <div className="k">Rejected</div>
                    <div className="v">{SUMMARY.rejected}</div>
                    <div className="hint">Needs follow-up</div>
                </div>
            </section>

            {/* filters */}
            <section className="filters card">
                <div className="row">
                    <div className="field">
                        <label>Search</label>
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="ID, warehouse, reason, reference, user, status…"
                            aria-label="Search adjustments"
                        />
                    </div>
                    <div className="field">
                        <label>Warehouse</label>
                        <select value={wh} onChange={(e) => setWh(e.target.value)} aria-label="Warehouse filter">
                            <option value="">All</option>
                            {WAREHOUSES.map((w) => <option key={w} value={w}>{w}</option>)}
                        </select>
                    </div>
                    <div className="field">
                        <label>Status</label>
                        <select value={st} onChange={(e) => setSt(e.target.value)} aria-label="Status filter">
                            <option value="">All</option>
                            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div className="field">
                        <label>Reason</label>
                        <select value={rs} onChange={(e) => setRs(e.target.value)} aria-label="Reason filter">
                            <option value="">All</option>
                            {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                </div>
                <div className="filterMeta">
                    Showing <strong>{filtered.length}</strong> of <strong>{ADJUSTMENTS.length}</strong> adjustments
                </div>
            </section>

            {/* main grid */}
            <div className="grid">
                <section className="card tableWrap">
                    <div className="tableHead">
                        <div className="title">Adjustments</div>
                        <div className="legend">
                            <span className="chip approved">Approved</span>
                            <span className="chip pending">Pending</span>
                            <span className="chip rejected">Rejected</span>
                        </div>
                    </div>

                    <div className="scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Warehouse</th>
                                    <th>Reason</th>
                                    <th>Items</th>
                                    <th>Reference</th>
                                    <th>Created By</th>
                                    <th>Created At</th>
                                    <th>Status</th>
                                    <th style={{ width: 80 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((r) => (
                                    <tr key={r.id}>
                                        <td className="mono">{r.id}</td>
                                        <td>{r.warehouse}</td>
                                        <td>{r.reason}</td>
                                        <td className="mono">{r.items}</td>
                                        <td className="muted">{r.reference}</td>
                                        <td>{r.createdBy}</td>
                                        <td className="muted">{fmtDateTime(r.createdAt)}</td>
                                        <td>
                                            <span
                                                className={
                                                    "chip " +
                                                    (r.status === "Approved" ? "approved" : r.status === "Pending" ? "pending" : "rejected")
                                                }
                                            >
                                                {r.status}
                                            </span>
                                        </td>
                                        <td className="rowActions">
                                            <button className="btnGhost small" data-tooltip="Demo mode">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <footer className="tableFoot">
                        <div className="pageNote">Page 1 of 8</div>
                        <div className="pager">
                            <button className="btnGhost small" disabled>&larr; Prev</button>
                            <button className="btnGhost small" disabled>Next &rarr;</button>
                        </div>
                    </footer>
                </section>

                {/* printable summary / side rail */}
                <aside className="side card" id="search-print-area" ref={printRef}>
                    <h3>Print Summary</h3>
                    <div className="sum">
                        <div className="line"><span className="k">Report</span><span className="v">Inventory Adjustments</span></div>
                        <div className="line"><span className="k">Generated</span><span className="v">{fmtDateTime("2025-10-04T15:38:20+05:30")}</span></div>
                        <div className="line"><span className="k">Total</span><span className="v">{SUMMARY.total}</span></div>
                        <div className="line"><span className="k">Approved</span><span className="v">{SUMMARY.approved}</span></div>
                        <div className="line"><span className="k">Pending</span><span className="v">{SUMMARY.pending}</span></div>
                        <div className="line"><span className="k">Rejected</span><span className="v">{SUMMARY.rejected}</span></div>
                    </div>

                    <div className="miniList">
                        <h4>Recent</h4>
                        <ul>
                            {ADJUSTMENTS.slice(0, 5).map((r) => (
                                <li key={r.id}>
                                    <span className="mono">{r.id}</span>
                                    <span className="muted">{fmtDate(r.createdAt)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="help">
                        <h4>What is an Adjustment?</h4>
                        <p>
                            A record that reconciles physical stock with system quantities—triggered by cycle counts, damage, expiry,
                            or transfer corrections.
                        </p>
                    </div>
                </aside>
            </div>
        </Styled.Page>
    );
};

export default AdjustmentsPage;
