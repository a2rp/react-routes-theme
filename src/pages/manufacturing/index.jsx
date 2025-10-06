import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import {
    FiPrinter,
    FiExternalLink,
    FiChevronRight,
    FiPackage,
    FiActivity,
    FiLayers,
    FiTool,
    FiSettings,
    FiCalendar,
    FiClock,
    FiAlertTriangle,
    FiFileText,
} from "react-icons/fi";

/* Date formatting helpers (required formats)
   Date: Sat Oct 04 2025
   Date+Time: Sat Oct 04 2025 15:38:20hrs
   Time: 15:38:20hrs
*/
const fmtDate = (d) => new Date(d).toDateString();
const fmtTimeOnly = (d) =>
    new Date(d).toLocaleTimeString("en-GB", { hour12: false }) + "hrs";
const fmtDateTime = (d) => `${fmtDate(d)} ${fmtTimeOnly(d)}`;

/* Static demo data (display-only) */
const KPIS = [
    { key: "wip", label: "Work Orders (WIP)", value: "18", sub: "7 due today" },
    { key: "overdue", label: "Overdue Ops", value: "4", sub: "check queue" },
    { key: "capacity", label: "Capacity Utilization", value: "82%", sub: "shift A" },
    { key: "oee", label: "OEE", value: "74%", sub: "last 7 days" },
    { key: "rejections", label: "Rejections", value: "1.9%", sub: "month-to-date" },
    { key: "downtime", label: "Planned Downtime", value: "03:20hrs", sub: "this week" },
];

const WORK_ORDERS = [
    {
        id: "WO-3001",
        bomId: "BOM-1001",
        productId: "MED-AMOX-500",
        product: "Amoxicillin 500mg Tablets",
        line: "Tablet Line 1",
        scheduledFor: "2025-10-04T09:00:00+05:30",
        eta: "2025-10-04T16:30:00+05:30",
        status: "WIP",
        qty: "25,000",
    },
    {
        id: "WO-3002",
        bomId: "BOM-1010",
        productId: "MED-PCM-650",
        product: "Paracetamol 650mg Tablets",
        line: "Tablet Line 2",
        scheduledFor: "2025-10-04T10:30:00+05:30",
        eta: "2025-10-04T18:00:00+05:30",
        status: "Queued",
        qty: "40,000",
    },
    {
        id: "WO-2997",
        bomId: "BOM-0999",
        productId: "MED-ORS-200",
        product: "Oral Rehydration Salts 200ml",
        line: "Sachet Line",
        scheduledFor: "2025-10-03T15:00:00+05:30",
        eta: "2025-10-03T20:00:00+05:30",
        status: "Overdue",
        qty: "12,000",
    },
];

const TOP_BOMS = [
    { id: "BOM-1001", productId: "MED-AMOX-500", product: "Amoxicillin 500mg Tablets", rev: "R3", components: 12 },
    { id: "BOM-1010", productId: "MED-PCM-650", product: "Paracetamol 650mg Tablets", rev: "R1", components: 8 },
    { id: "BOM-2003", productId: "MED-AZT-250", product: "Azithromycin 250mg", rev: "R2", components: 10 },
];

const PRODUCTION_QUEUE = [
    { id: "Q-01", woId: "WO-3002", step: "Granulation", line: "Tablet Line 2", start: "2025-10-04T10:30:00+05:30", state: "Waiting" },
    { id: "Q-02", woId: "WO-3001", step: "Compression", line: "Tablet Line 1", start: "2025-10-04T11:15:00+05:30", state: "Running" },
    { id: "Q-03", woId: "WO-2997", step: "Coating", line: "Tablet Line 1", start: "2025-10-03T17:00:00+05:30", state: "Delayed" },
];

const QUALITY_CHECKS = [
    { id: "QC-5001", woId: "WO-3001", gate: "In-Process", status: "Pending", at: "2025-10-04T13:00:00+05:30" },
    { id: "QC-5002", woId: "WO-3001", gate: "Finished Goods", status: "Scheduled", at: "2025-10-04T17:00:00+05:30" },
    { id: "QC-4987", woId: "WO-2997", gate: "In-Process", status: "Hold", at: "2025-10-03T19:10:00+05:30" },
];

const ACTIVITY = [
    { id: 1, type: "wo", text: "WO-3001 moved to Compression", at: "2025-10-04T11:20:00+05:30" },
    { id: 2, type: "qc", text: "QC sample drawn for WO-3001 (IPQC)", at: "2025-10-04T11:45:00+05:30" },
    { id: 3, type: "bom", text: "BOM-1010 revision R1 released", at: "2025-10-03T18:05:00+05:30" },
    { id: 4, type: "alert", text: "Coating delay flagged on WO-2997", at: "2025-10-03T19:30:00+05:30" },
];

const nowISO = new Date().toISOString();

export default function ManufacturingOverview() {
    const navigate = useNavigate();
    const [confirm, setConfirm] = useState({ open: false, title: "", message: "", onConfirm: null });

    const snapshot = useMemo(() => fmtDateTime(nowISO), []);

    const openPrint = () => {
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => document.body.classList.remove("print-section-mode"), 0);
    };

    const openConfirm = (title, message) => {
        setConfirm({
            open: true,
            title,
            message,
            onConfirm: () => setConfirm({ open: false, title: "", message: "", onConfirm: null }),
        });
    };

    return (
        <Styled.Wrap>
            {/* PRINT CSS   */}
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

            {/* Header */}
            <Styled.Header>
                <div className="titles">
                    <h1>Manufacturing</h1>
                    <p className="meta">
                        <FiClock aria-hidden="true" /> Snapshot &nbsp;
                        <strong>{snapshot}</strong>
                    </p>
                    <nav className="crumbs" aria-label="Breadcrumb">
                        <NavLink to="/home">Home</NavLink>
                        <FiChevronRight />
                        <NavLink to="/manufacturing" aria-current="page">Overview</NavLink>
                    </nav>
                </div>

                <div className="actions">
                    <button onClick={openPrint}>
                        <FiPrinter /> Print Overview
                    </button>

                    <a className="ghost" href="/tools/import-export" onClick={(e) => {
                        e.preventDefault(); navigate("/tools/import-export");
                    }}>
                        <FiExternalLink /> Export / Import
                    </a>

                    {/* Demo-only primary actions, shown but disabled */}
                    <span className="tip" data-tip="Disabled in demo">
                        <button disabled aria-disabled>
                            <FiLayers /> New BOM
                        </button>
                    </span>
                    <span className="tip" data-tip="Disabled in demo">
                        <button disabled aria-disabled>
                            <FiTool /> New Work Order
                        </button>
                    </span>
                </div>
            </Styled.Header>

            {/* Sub navigation */}
            <Styled.Subnav aria-label="Manufacturing sections">
                <NavLink to="/manufacturing" end>Overview</NavLink>
                <NavLink to="/manufacturing/bom">BOM</NavLink>
                <NavLink to="/manufacturing/work-orders">Work Orders</NavLink>
                <NavLink to="/manufacturing/production">Production</NavLink>
                <NavLink to="/inventory/warehouses">Warehouses</NavLink>
                <NavLink to="/reports/inventory">Inventory Report</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/medicines">Medicines</NavLink>
                <NavLink to="/settings/print-templates">Print Templates</NavLink>
            </Styled.Subnav>

            {/* PRINT AREA START */}
            <div id="search-print-area">
                {/* KPI Grid */}
                <Styled.KpiGrid>
                    {KPIS.map(k => (
                        <div key={k.key} className="kpi card" role="group" aria-label={k.label}>
                            <div className="value">{k.value}</div>
                            <div className="label">{k.label}</div>
                            <div className="sub">{k.sub}</div>
                        </div>
                    ))}
                </Styled.KpiGrid>

                {/* Two-column: WO Table + Activity */}
                <Styled.Columns>
                    <section className="card">
                        <header className="sectionHead">
                            <div className="title">
                                <FiPackage /> Work Orders — Today & Upcoming
                            </div>
                            <div className="tools">
                                <NavLink to="/manufacturing/work-orders" className="link">View All</NavLink>
                            </div>
                        </header>

                        <Styled.Table role="table" aria-label="Work orders table">
                            <div className="thead" role="rowgroup">
                                <div className="tr" role="row">
                                    <div className="th">WO ID</div>
                                    <div className="th">Product</div>
                                    <div className="th">Line</div>
                                    <div className="th">Scheduled</div>
                                    <div className="th">ETA</div>
                                    <div className="th">Qty</div>
                                    <div className="th">Status</div>
                                    <div className="th right">Actions</div>
                                </div>
                            </div>
                            <div className="tbody" role="rowgroup">
                                {WORK_ORDERS.map(row => (
                                    <div className="tr" role="row" key={row.id}>
                                        <div className="td">
                                            <NavLink to={`/manufacturing/work-orders/${row.id}`} className="cellLink">{row.id}</NavLink>
                                        </div>
                                        <div className="td">
                                            <div className="stack">
                                                <NavLink to={`/products/${row.productId}`} className="cellLink">{row.product}</NavLink>
                                                <NavLink to={`/manufacturing/bom/${row.bomId}`} className="muted">BOM: {row.bomId}</NavLink>
                                            </div>
                                        </div>
                                        <div className="td">{row.line}</div>
                                        <div className="td">
                                            <span className="muted">{fmtDate(row.scheduledFor)}</span>
                                            <div className="sub">{fmtTimeOnly(row.scheduledFor)}</div>
                                        </div>
                                        <div className="td">
                                            <span className="muted">{fmtDate(row.eta)}</span>
                                            <div className="sub">{fmtTimeOnly(row.eta)}</div>
                                        </div>
                                        <div className="td">{row.qty}</div>
                                        <div className="td">
                                            <span className={`pill ${row.status.toLowerCase()}`}>{row.status}</span>
                                        </div>
                                        <div className="td right">
                                            <div className="rowActions">
                                                <NavLink to={`/manufacturing/work-orders/${row.id}`} className="ghost">Open</NavLink>
                                                <button
                                                    className="ghost"
                                                    onClick={() => openConfirm("Close Work Order", "This action is disabled in the demo build.")}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="ghost"
                                                    onClick={() => openConfirm("Cancel Work Order", "This action is disabled in the demo build.")}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Styled.Table>
                    </section>

                    <aside>
                        <section className="card">
                            <header className="sectionHead">
                                <div className="title"><FiActivity /> Recent Activity</div>
                                <div className="tools">
                                    <NavLink to="/admin/audit-log" className="link">Audit Log</NavLink>
                                </div>
                            </header>

                            <Styled.Timeline>
                                {ACTIVITY.map(ev => (
                                    <div className="item" key={ev.id}>
                                        <div className={`dot ${ev.type}`} />
                                        <div className="content">
                                            <div className="text">{ev.text}</div>
                                            <div className="time">{fmtDateTime(ev.at)}</div>
                                        </div>
                                    </div>
                                ))}
                            </Styled.Timeline>
                        </section>

                        <section className="card">
                            <header className="sectionHead">
                                <div className="title"><FiSettings /> Quick Shortcuts</div>
                            </header>
                            <Styled.ListLinks>
                                <NavLink to="/manufacturing/bom">Open BOM Catalog</NavLink>
                                <NavLink to="/manufacturing/work-orders">Browse Work Orders</NavLink>
                                <NavLink to="/manufacturing/production">Production Board</NavLink>
                                <NavLink to="/inventory/warehouses">Go to Warehouses</NavLink>
                                <NavLink to="/reports/production">Production Reports</NavLink>
                                <NavLink to="/settings/print-templates">Configure Print Templates</NavLink>
                            </Styled.ListLinks>
                        </section>
                    </aside>
                </Styled.Columns>

                {/* Top BOMs */}
                <section className="card">
                    <header className="sectionHead">
                        <div className="title"><FiLayers /> Bill of Materials — Top Items</div>
                        <div className="tools">
                            <NavLink to="/manufacturing/bom" className="link">View All</NavLink>
                        </div>
                    </header>

                    <Styled.Table role="table" aria-label="Top BOMs table">
                        <div className="thead" role="rowgroup">
                            <div className="tr" role="row">
                                <div className="th">BOM</div>
                                <div className="th">Product</div>
                                <div className="th">Revision</div>
                                <div className="th">Components</div>
                                <div className="th right">Open</div>
                            </div>
                        </div>
                        <div className="tbody" role="rowgroup">
                            {TOP_BOMS.map(b => (
                                <div className="tr" role="row" key={b.id}>
                                    <div className="td">
                                        <NavLink to={`/manufacturing/bom/${b.id}`} className="cellLink">{b.id}</NavLink>
                                    </div>
                                    <div className="td">
                                        <NavLink to={`/products/${b.productId}`} className="cellLink">{b.product}</NavLink>
                                    </div>
                                    <div className="td">{b.rev}</div>
                                    <div className="td">{b.components}</div>
                                    <div className="td right">
                                        <NavLink to={`/manufacturing/bom/${b.id}`} className="ghost">Open</NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Styled.Table>
                </section>

                {/* Production Queue + QC */}
                <Styled.Columns>
                    <section className="card">
                        <header className="sectionHead">
                            <div className="title"><FiCalendar /> Production Queue</div>
                            <div className="tools">
                                <NavLink to="/manufacturing/production" className="link">Board</NavLink>
                            </div>
                        </header>

                        <Styled.Table role="table" aria-label="Production queue">
                            <div className="thead">
                                <div className="tr">
                                    <div className="th">#</div>
                                    <div className="th">WO</div>
                                    <div className="th">Step</div>
                                    <div className="th">Line</div>
                                    <div className="th">Start</div>
                                    <div className="th">State</div>
                                </div>
                            </div>
                            <div className="tbody">
                                {PRODUCTION_QUEUE.map((q, idx) => (
                                    <div className="tr" key={q.id}>
                                        <div className="td">{String(idx + 1).padStart(2, "0")}</div>
                                        <div className="td">
                                            <NavLink to={`/manufacturing/work-orders/${q.woId}`} className="cellLink">{q.woId}</NavLink>
                                        </div>
                                        <div className="td">{q.step}</div>
                                        <div className="td">{q.line}</div>
                                        <div className="td">
                                            <span className="muted">{fmtDate(q.start)}</span>
                                            <div className="sub">{fmtTimeOnly(q.start)}</div>
                                        </div>
                                        <div className="td">
                                            <span className={`pill state-${q.state.toLowerCase()}`}>{q.state}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Styled.Table>
                    </section>

                    <section className="card">
                        <header className="sectionHead">
                            <div className="title"><FiFileText /> Quality Checks</div>
                            <div className="tools">
                                <NavLink to="/reports/quality" className="link">QC Reports</NavLink>
                            </div>
                        </header>

                        <Styled.Table role="table" aria-label="Quality checks">
                            <div className="thead">
                                <div className="tr">
                                    <div className="th">QC</div>
                                    <div className="th">WO</div>
                                    <div className="th">Gate</div>
                                    <div className="th">Status</div>
                                    <div className="th">When</div>
                                </div>
                            </div>
                            <div className="tbody">
                                {QUALITY_CHECKS.map(qc => (
                                    <div className="tr" key={qc.id}>
                                        <div className="td">{qc.id}</div>
                                        <div className="td">
                                            <NavLink to={`/manufacturing/work-orders/${qc.woId}`} className="cellLink">{qc.woId}</NavLink>
                                        </div>
                                        <div className="td">{qc.gate}</div>
                                        <div className="td">
                                            <span className={`pill qc-${qc.status.toLowerCase()}`}>{qc.status}</span>
                                        </div>
                                        <div className="td">
                                            <span className="muted">{fmtDate(qc.at)}</span>
                                            <div className="sub">{fmtTimeOnly(qc.at)}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Styled.Table>
                    </section>
                </Styled.Columns>
            </div>
            {/* PRINT AREA END */}

            {/* Demo-friendly confirm modal */}
            {confirm.open && (
                <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="confirm-title">
                    <div className="overlay" onClick={() => setConfirm({ open: false, title: "", message: "", onConfirm: null })} />
                    <div className="panel card">
                        <header>
                            <FiAlertTriangle />
                            <h3 id="confirm-title">{confirm.title || "Confirm"}</h3>
                        </header>
                        <div className="body">
                            <p>{confirm.message || "Are you sure?"}</p>
                        </div>
                        <footer>
                            <button
                                onClick={() => setConfirm({ open: false, title: "", message: "", onConfirm: null })}
                                className="ghost"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    confirm.onConfirm && confirm.onConfirm();
                                }}
                                disabled
                                aria-disabled
                                title="Disabled in demo"
                            >
                                Continue
                            </button>
                        </footer>
                    </div>
                </Styled.Modal>
            )}
        </Styled.Wrap>
    );
}
