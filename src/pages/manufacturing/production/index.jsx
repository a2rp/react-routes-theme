import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/** ----------------------------------------
 * Date / Time helpers (display-only)
 *  - Date: Sat Oct 04 2025
 *  - Date+Time: Sat Oct 04 2025 15:38:20hrs
 *  - Time: 15:38:20hrs
 * --------------------------------------- */
const fmtDate = (iso) => {
    try { return new Date(iso).toDateString(); } catch { return iso; }
};
const pad2 = (n) => String(n).padStart(2, "0");
const fmtTime = (iso) => {
    try {
        const d = new Date(iso);
        const hh = pad2(d.getHours());
        const mm = pad2(d.getMinutes());
        const ss = pad2(d.getSeconds());
        return `${hh}:${mm}:${ss}hrs`;
    } catch { return iso; }
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

/** Demo page data (display-only, no persistence) */
const demo = {
    buildISO: typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString(),
    commitISO: typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString(),
    // Running WOs (keep IDs aligned with routes)
    runningWOs: [
        {
            id: "WO-2025-0007",
            orderRef: "ORD-3001",
            product: { id: "PROD-AMOX-500-CAP", name: "Amoxicillin 500mg Capsule (Strip 10)" },
            qtyPlanned: 2000,
            qtyDone: 1150,
            status: "In Progress",
            startedAt: "2025-10-04T08:45:10+05:30",
            dueAt: "2025-10-05T18:00:00+05:30",
            workCenter: "WC-MIX-01",
            priority: "High"
        },
        {
            id: "WO-2025-0008",
            orderRef: "ORD-3002",
            product: { id: "PROD-PARA-650-TAB", name: "Paracetamol 650mg Tablet (Bottle 100)" },
            qtyPlanned: 1000,
            qtyDone: 420,
            status: "In Progress",
            startedAt: "2025-10-04T10:20:00+05:30",
            dueAt: "2025-10-06T12:30:00+05:30",
            workCenter: "WC-TABLET-01",
            priority: "Medium"
        },
        {
            id: "WO-2025-0009",
            orderRef: "ORD-3004",
            product: { id: "PROD-SYRUP-IBU-100", name: "Ibuprofen 100mg/5ml Syrup (100ml)" },
            qtyPlanned: 600,
            qtyDone: 120,
            status: "Waiting QC",
            startedAt: "2025-10-03T14:05:00+05:30",
            dueAt: "2025-10-05T17:00:00+05:30",
            workCenter: "WC-LIQ-02",
            priority: "High"
        },
        {
            id: "WO-2025-0010",
            orderRef: "ORD-3005",
            product: { id: "PROD-CREAM-HC-15", name: "Hydrocortisone 1% Cream (15g)" },
            qtyPlanned: 800,
            qtyDone: 0,
            status: "Queued",
            startedAt: "2025-10-05T09:00:00+05:30",
            dueAt: "2025-10-07T18:30:00+05:30",
            workCenter: "WC-SEMISOLID-01",
            priority: "Low"
        }
    ],
    workCenters: [
        { id: "WC-MIX-01", name: "Mixer Line 01", state: "Running", oee: 83, shift: "A", crew: 4 },
        { id: "WC-TABLET-01", name: "Tablet Press 01", state: "Setup", oee: 72, shift: "A", crew: 3 },
        { id: "WC-COAT-01", name: "Coating Drum", state: "Idle", oee: 0, shift: "A", crew: 1 },
        { id: "WC-LIQ-02", name: "Liquid Fill 02", state: "Hold-QC", oee: 58, shift: "A", crew: 2 },
        { id: "WC-SEMISOLID-01", name: "Semisolid Line", state: "Queued", oee: 0, shift: "A", crew: 2 }
    ],
    schedule: [
        { id: "SLOT-01", wc: "WC-MIX-01", wo: "WO-2025-0007", from: "2025-10-04T08:30:00+05:30", to: "2025-10-04T12:00:00+05:30" },
        { id: "SLOT-02", wc: "WC-TABLET-01", wo: "WO-2025-0008", from: "2025-10-04T10:30:00+05:30", to: "2025-10-04T16:30:00+05:30" },
        { id: "SLOT-03", wc: "WC-LIQ-02", wo: "WO-2025-0009", from: "2025-10-04T13:00:00+05:30", to: "2025-10-04T17:30:00+05:30" }
    ],
    shortages: [
        { bom: "BOM-PARA-650", productId: "RAW-PARA-API", name: "Paracetamol API", need: 25, uom: "kg", available: 10, warehouseId: "WH-01" },
        { bom: "BOM-AMOX-500", productId: "RAW-AMOX-API", name: "Amoxicillin API", need: 18, uom: "kg", available: 12, warehouseId: "WH-02" },
        { bom: "BOM-IBU-100", productId: "RAW-IBU-API", name: "Ibuprofen API", need: 12, uom: "kg", available: 12, warehouseId: "WH-02" }
    ],
    qc: [
        { id: "QC-1131", wo: "WO-2025-0009", step: "Assay", status: "Pending", due: "2025-10-04T15:00:00+05:30" },
        { id: "QC-1132", wo: "WO-2025-0007", step: "Uniformity", status: "In Progress", due: "2025-10-04T14:30:00+05:30" },
        { id: "QC-1133", wo: "WO-2025-0008", step: "Dissolution", status: "Scheduled", due: "2025-10-05T10:00:00+05:30" }
    ],
    downtime: [
        { id: "DT-5001", wc: "WC-TABLET-01", reason: "Punch wear", started: "2025-10-04T07:15:00+05:30", ended: "2025-10-04T09:05:00+05:30" },
        { id: "DT-5002", wc: "WC-COAT-01", reason: "Cleaning", started: "2025-10-03T18:20:00+05:30", ended: "2025-10-03T19:10:00+05:30" }
    ],
    activity: [
        { ts: "2025-10-04T11:58:22+05:30", text: "WO-2025-0007 lot 2 moved to uniformity QC." },
        { ts: "2025-10-04T10:45:02+05:30", text: "Tablet Press 01 changed tooling (13mm capsule)." },
        { ts: "2025-10-04T09:15:40+05:30", text: "Issued raw material: Paracetamol API 10kg from WH-01." },
        { ts: "2025-10-04T08:47:05+05:30", text: "Shift A handover completed for Mixer Line 01." }
    ]
};

/** Simple confirm → then demo guard (no real actions) */
const ConfirmModal = ({ open, title, message, onCancel, onConfirm }) => {
    if (!open) return null;
    return (
        <Styled.ModalOverlay role="dialog" aria-modal="true">
            <Styled.ModalCard className="card">
                <header>
                    <h3>{title}</h3>
                </header>
                <div className="body">
                    <p>{message}</p>
                </div>
                <footer>
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={onConfirm}>Confirm</button>
                </footer>
            </Styled.ModalCard>
        </Styled.ModalOverlay>
    );
};

const DemoGuard = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <Styled.ModalOverlay role="dialog" aria-modal="true">
            <Styled.ModalCard className="card">
                <header>
                    <h3>Demo Mode</h3>
                </header>
                <div className="body">
                    <p>This is a display-only preview. Actions are disabled.</p>
                </div>
                <footer>
                    <button onClick={onClose}>Close</button>
                </footer>
            </Styled.ModalCard>
        </Styled.ModalOverlay>
    );
};

export default function ProductionPage() {
    const navigate = useNavigate();
    const [askConfirm, setAskConfirm] = useState(false);
    const [showGuard, setShowGuard] = useState(false);
    const [pendingAction, setPendingAction] = useState(null);

    const kpis = useMemo(() => {
        const running = demo.runningWOs.filter(x => ["In Progress", "Waiting QC"].includes(x.status)).length;
        const delayed = demo.runningWOs.filter(x => new Date(x.dueAt) < new Date() && x.status !== "Queued").length;
        const queued = demo.runningWOs.filter(x => x.status === "Queued").length;
        const outputToday = demo.runningWOs.reduce((sum, x) => sum + (x.qtyDone || 0), 0);
        return { running, delayed, queued, outputToday };
    }, []);

    const exportJSON = () => {
        const blob = new Blob([JSON.stringify(demo, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "production-demo.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => {
            document.body.classList.remove("print-section-mode");
        }, 300);
    };

    const requestAction = (actionLabel) => {
        setPendingAction(actionLabel);
        setAskConfirm(true);
    };
    const confirmAction = () => {
        setAskConfirm(false);
        setShowGuard(true);
    };

    return (
        <Styled.Wrap>
            {/* Print CSS */}
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

            {/* TOP: breadcrumbs + toolbar */}
            <div className="topbar">
                <nav className="breadcrumbs">
                    <Link to="/home">Home</Link>
                    <span>/</span>
                    <Link to="/manufacturing">Manufacturing</Link>
                    <span>/</span>
                    <strong>Production</strong>
                </nav>

                <div className="toolbar">
                    <button title="Create work order (disabled)" disabled>New Work Order</button>
                    <button title="Start shift (disabled)" disabled>Start Shift</button>
                    <button onClick={printSection} title="Print section">Print</button>
                    <button onClick={exportJSON} title="Export JSON">Export</button>
                    <Link className="btn-link" to="/manufacturing/work-orders">Work Orders</Link>
                    <Link className="btn-link" to="/manufacturing/bom">BOM</Link>
                    <Link className="btn-link" to="/inventory/warehouses">Warehouses</Link>
                    <Link className="btn-link" to="/reports/production">Production Report</Link>
                </div>
            </div>

            {/* IN-PAGE NAV */}
            <div className="tabs">
                <a href="#overview">Overview</a>
                <a href="#running">Running Orders</a>
                <a href="#workcenters">Work Centers</a>
                <a href="#schedule">Schedule</a>
                <a href="#materials">Materials</a>
                <a href="#quality">Quality</a>
                <a href="#downtime">Downtime</a>
                <a href="#activity">Activity</a>
            </div>

            {/* PRINT AREA START */}
            <div id="search-print-area">
                {/* OVERVIEW */}
                <section id="overview" className="grid-kpi card">
                    <header className="section-header">
                        <h2>Production Overview</h2>
                        <div className="meta">
                            <span>Build: {fmtDateTime(demo.buildISO)}</span>
                            <span>Last Commit: {fmtDateTime(demo.commitISO)}</span>
                        </div>
                    </header>
                    <div className="kpis">
                        <div className="kpi">
                            <div className="kpi-title">Running</div>
                            <div className="kpi-value">{kpis.running}</div>
                            <div className="kpi-foot"><Link to="/manufacturing/work-orders">Go to Work Orders</Link></div>
                        </div>
                        <div className="kpi">
                            <div className="kpi-title">Delayed</div>
                            <div className="kpi-value warn">{kpis.delayed}</div>
                            <div className="kpi-foot"><Link to="/reports/production">See Delays Report</Link></div>
                        </div>
                        <div className="kpi">
                            <div className="kpi-title">Queued</div>
                            <div className="kpi-value">{kpis.queued}</div>
                            <div className="kpi-foot"><Link to="/manufacturing/work-orders">Queue</Link></div>
                        </div>
                        <div className="kpi">
                            <div className="kpi-title">Output Today</div>
                            <div className="kpi-value">{kpis.outputToday}</div>
                            <div className="kpi-foot"><Link to="/reports/production">Daily Output</Link></div>
                        </div>
                        <div className="kpi">
                            <div className="kpi-title">OEE (Mixer 01)</div>
                            <div className="kpi-value">{demo.workCenters[0].oee}%</div>
                            <div className="kpi-foot"><a href="#workcenters">Work Centers</a></div>
                        </div>
                    </div>
                </section>

                {/* RUNNING ORDERS */}
                <section id="running" className="card">
                    <header className="section-header">
                        <h2>Running Work Orders</h2>
                        <div className="section-actions">
                            <button title="Bulk complete (disabled)" disabled>Bulk Complete</button>
                            <button onClick={() => requestAction("Close Period")} title="Close production period">Close Period</button>
                        </div>
                    </header>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>WO #</th>
                                    <th>Product</th>
                                    <th>Planned</th>
                                    <th>Done</th>
                                    <th>Work Center</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Started</th>
                                    <th>Due</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {demo.runningWOs.map(row => (
                                    <tr key={row.id}>
                                        <td>
                                            <Link to={`/manufacturing/work-orders/${row.id}`}>{row.id}</Link>
                                            <div className="muted">Sales <Link to={`/orders/${row.orderRef}`}>{row.orderRef}</Link></div>
                                        </td>
                                        <td>
                                            <Link to={`/products/${row.product.id}`}>{row.product.name}</Link>
                                        </td>
                                        <td className="num">{row.qtyPlanned}</td>
                                        <td className="num">{row.qtyDone}</td>
                                        <td><Link to={`/manufacturing/work-orders?wc=${row.workCenter}`}>{row.workCenter}</Link></td>
                                        <td>
                                            <span className={`chip ${row.status === "In Progress" ? "ok" : row.status === "Waiting QC" ? "warn" : "muted"}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td><span className={`chip ${row.priority === "High" ? "warn" : "muted"}`}>{row.priority}</span></td>
                                        <td>
                                            <div>{fmtDateTime(row.startedAt)}</div>
                                        </td>
                                        <td>
                                            <div className={new Date(row.dueAt) < new Date() ? "text-error" : ""}>{fmtDateTime(row.dueAt)}</div>
                                        </td>
                                        <td className="row-actions">
                                            <button onClick={() => requestAction(`Mark ${row.id} Done`)} title="Mark as Done">Mark Done</button>
                                            <button onClick={() => requestAction(`Scrap on ${row.id}`)} title="Scrap">Scrap</button>
                                            <Link className="btn-link" to={`/manufacturing/work-orders/${row.id}`}>Open</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* WORK CENTERS */}
                <section id="workcenters" className="card">
                    <header className="section-header">
                        <h2>Work Centers</h2>
                        <div className="section-actions">
                            <Link className="btn-link" to="/manufacturing/work-orders">All Orders</Link>
                            <Link className="btn-link" to="/reports/production">Reports</Link>
                        </div>
                    </header>

                    <div className="wc-grid">
                        {demo.workCenters.map((wc) => (
                            <div key={wc.id} className="wc-card">
                                <div className="wc-head">
                                    <h3>{wc.name}</h3>
                                    <span className={`chip ${wc.state === "Running" ? "ok" : wc.state.includes("Hold") ? "warn" : "muted"}`}>{wc.state}</span>
                                </div>
                                <div className="wc-body">
                                    <div className="kv">
                                        <span className="k">Code</span>
                                        <span className="v">{wc.id}</span>
                                    </div>
                                    <div className="kv">
                                        <span className="k">OEE</span>
                                        <span className="v">{wc.oee}%</span>
                                    </div>
                                    <div className="kv">
                                        <span className="k">Shift</span>
                                        <span className="v">{wc.shift}</span>
                                    </div>
                                    <div className="kv">
                                        <span className="k">Crew</span>
                                        <span className="v">{wc.crew}</span>
                                    </div>
                                </div>
                                <div className="wc-foot">
                                    <Link to={`/manufacturing/work-orders?wc=${wc.id}`}>View Orders</Link>
                                    <Link to={`/reports/production?wc=${wc.id}`}>KPI</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SCHEDULE */}
                <section id="schedule" className="card">
                    <header className="section-header">
                        <h2>Schedule — {fmtDate(demo.buildISO)}</h2>
                        <div className="section-actions">
                            <button title="Reschedule (disabled)" disabled>Auto-Reschedule</button>
                        </div>
                    </header>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Slot</th>
                                    <th>Work Center</th>
                                    <th>Work Order</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Navigate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {demo.schedule.map(s => (
                                    <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td><Link to={`/manufacturing/work-orders?wc=${s.wc}`}>{s.wc}</Link></td>
                                        <td><Link to={`/manufacturing/work-orders/${s.wo}`}>{s.wo}</Link></td>
                                        <td>{fmtDateTime(s.from)}</td>
                                        <td>{fmtDateTime(s.to)}</td>
                                        <td className="row-actions">
                                            <Link className="btn-link" to={`/manufacturing/work-orders/${s.wo}`}>Open WO</Link>
                                            <Link className="btn-link" to={`/print/sticker/${s.wo}`}>Print Sticker</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* MATERIALS */}
                <section id="materials" className="card">
                    <header className="section-header">
                        <h2>Materials Requirements</h2>
                        <div className="section-actions">
                            <Link className="btn-link" to="/purchase-orders">Purchase Orders</Link>
                            <Link className="btn-link" to="/inventory">Inventory</Link>
                        </div>
                    </header>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>BOM</th>
                                    <th>Item</th>
                                    <th>Need</th>
                                    <th>Available</th>
                                    <th>Warehouse</th>
                                    <th>Status</th>
                                    <th>Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                {demo.shortages.map(x => {
                                    const ok = x.available >= x.need;
                                    return (
                                        <tr key={x.productId}>
                                            <td><Link to={`/manufacturing/bom/${x.bom}`}>{x.bom}</Link></td>
                                            <td>
                                                <Link to={`/products/${x.productId}`}>{x.name}</Link>
                                                <div className="muted">{x.productId}</div>
                                            </td>
                                            <td className="num">{x.need} {x.uom}</td>
                                            <td className="num">{x.available} {x.uom}</td>
                                            <td><Link to={`/settings/warehouses`}>{x.warehouseId}</Link></td>
                                            <td>
                                                <span className={`chip ${ok ? "ok" : "warn"}`}>{ok ? "OK" : "Short"}</span>
                                            </td>
                                            <td className="row-actions">
                                                <Link className="btn-link" to="/purchase-orders/new">Raise PO</Link>
                                                <Link className="btn-link" to={`/inventory/warehouses`}>Reallocate</Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* QUALITY */}
                <section id="quality" className="card">
                    <header className="section-header">
                        <h2>Quality Checks</h2>
                        <div className="section-actions">
                            <Link className="btn-link" to="/labs">Labs</Link>
                            <Link className="btn-link" to="/reports/quality">Quality Reports</Link>
                        </div>
                    </header>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>QC #</th>
                                    <th>WO #</th>
                                    <th>Step</th>
                                    <th>Status</th>
                                    <th>Due</th>
                                    <th>Open</th>
                                </tr>
                            </thead>
                            <tbody>
                                {demo.qc.map(q => (
                                    <tr key={q.id}>
                                        <td>{q.id}</td>
                                        <td><Link to={`/manufacturing/work-orders/${q.wo}`}>{q.wo}</Link></td>
                                        <td>{q.step}</td>
                                        <td>
                                            <span className={`chip ${q.status === "In Progress" ? "ok" : q.status === "Pending" ? "warn" : "muted"}`}>{q.status}</span>
                                        </td>
                                        <td>{fmtDateTime(q.due)}</td>
                                        <td className="row-actions">
                                            <Link className="btn-link" to={`/manufacturing/work-orders/${q.wo}`}>Open WO</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* DOWNTIME */}
                <section id="downtime" className="card">
                    <header className="section-header">
                        <h2>Downtime</h2>
                        <div className="section-actions">
                            <button onClick={() => requestAction("Acknowledge Downtime")} title="Acknowledge">Acknowledge</button>
                        </div>
                    </header>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Work Center</th>
                                    <th>Reason</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th>Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                {demo.downtime.map(d => (
                                    <tr key={d.id}>
                                        <td>{d.id}</td>
                                        <td><Link to={`/manufacturing/work-orders?wc=${d.wc}`}>{d.wc}</Link></td>
                                        <td>{d.reason}</td>
                                        <td>{fmtDateTime(d.started)}</td>
                                        <td>{fmtDateTime(d.ended)}</td>
                                        <td className="row-actions">
                                            <Link className="btn-link" to="/reports/production">Downtime Report</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ACTIVITY */}
                <section id="activity" className="card">
                    <header className="section-header">
                        <h2>Activity</h2>
                        <div className="section-actions">
                            <Link className="btn-link" to="/admin/audit-log">Audit Log</Link>
                        </div>
                    </header>
                    <ul className="timeline">
                        {demo.activity.map((a, i) => (
                            <li key={i}>
                                <div className="dot" />
                                <div className="when">{fmtDateTime(a.ts)}</div>
                                <div className="what">{a.text}</div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            {/* PRINT AREA END */}

            {/* FOOT NAV */}
            <div className="footlinks">
                <Link to="/manufacturing/bom">Go to BOM</Link>
                <Link to="/manufacturing/work-orders">Work Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/reports">Reports</Link>
                <Link to="/settings">Settings</Link>
            </div>

            {/* Modals */}
            <ConfirmModal
                open={askConfirm}
                title={pendingAction || "Proceed?"}
                message="This action will be simulated. Continue?"
                onCancel={() => setAskConfirm(false)}
                onConfirm={confirmAction}
            />
            <DemoGuard open={showGuard} onClose={() => setShowGuard(false)} />
        </Styled.Wrap>
    );
}
