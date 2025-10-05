import React, { useMemo, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/** Small helpers for consistent date formatting */
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad2 = (n) => String(n).padStart(2, "0");

function fmtDate(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    return `${dayNames[d.getDay()]} ${monNames[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
}
function fmtDateTime(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    const t = `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
    return `${fmtDate(iso)} ${t}`;
}
function fmtTime(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
}

const DemoConfirm = ({ open, title = "Action", message = "Demo only", onClose }) => {
    if (!open) return null;
    return (
        <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="demo-title">
            <div className="backdrop" onClick={onClose} />
            <div className="panel" role="document">
                <h3 id="demo-title">{title}</h3>
                <p className="muted">{message}</p>
                <div className="actions">
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </Styled.Modal>
    );
};

export default function WorkOrderDetailPage() {
    const { woId = "WO-0001" } = useParams();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    // demo fixture (display-only)
    const data = useMemo(() => ({
        id: woId,
        status: "In Progress",                 // Planned | In Progress | On Hold | Completed | Cancelled
        priority: "High",
        product: { id: "MED-AMOX-500", name: "Amoxicillin 500mg Capsule", category: "Antibiotics" },
        bom: { id: "BOM-1007", rev: "R2" },
        batch: { id: "BATCH-23A91", lot: "LOT-7231", expiry: "2026-03-31T00:00:00.000Z" },
        warehouse: { id: "WH-MUM-01", name: "Mumbai Central DC" },
        vendor: { id: "VEND-1043", name: "BlueCaps Machinery" },
        purchaseOrder: { id: "PO-20877" },
        shipment: { id: "SHIP-7012" },

        /** dates */
        createdAt: (typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString()),
        scheduledStart: "2025-10-04T09:30:15.000Z",
        dueDate: "2025-10-06T18:00:00.000Z",
        startedAt: "2025-10-04T10:05:12.000Z",
        completedAt: null,
        lastUpdated: (typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString()),

        /** summary (pre-computed for display) */
        quantity: { uom: "packs", planned: 1200, produced: 340, scrap: 5 },

        /** operations routing (display only) */
        operations: [
            { id: "OP-10", name: "Mixing", workstation: "MIX-01", owner: "Akash", start: "2025-10-04T10:10:00.000Z", end: "2025-10-04T11:05:00.000Z", status: "Done", notes: "Viscosity checked" },
            { id: "OP-20", name: "Granulation", workstation: "GRN-02", owner: "Mira", start: "2025-10-04T11:20:00.000Z", end: "", status: "Running", notes: "Humidity stable" },
            { id: "OP-30", name: "Drying", workstation: "DRY-01", owner: "—", start: "", end: "", status: "Pending", notes: "" },
            { id: "OP-40", name: "Compression", workstation: "CMP-03", owner: "—", start: "", end: "", status: "Pending", notes: "" },
            { id: "OP-50", name: "Blister Packaging", workstation: "PKG-01", owner: "—", start: "", end: "", status: "Pending", notes: "" },
        ],

        /** materials (issued / planned) — display only */
        materials: [
            { id: "RM-AMOX", name: "Amoxicillin Trihydrate", type: "API", uom: "kg", planned: 85, issued: 24, lot: "LOT-API-991", expiry: "2027-06-30T00:00:00.000Z" },
            { id: "RM-LACT", name: "Lactose Monohydrate", type: "Excipient", uom: "kg", planned: 40, issued: 10, lot: "LOT-EXC-402", expiry: "2028-01-31T00:00:00.000Z" },
            { id: "PK-CAP", name: "Empty Hard Gelatin Capsules Size-0", type: "Pack", uom: "pcs", planned: 72000, issued: 20000, lot: "LOT-PK-118", expiry: "2029-12-31T00:00:00.000Z" },
            { id: "PK-ALU", name: "Alu Foil 250µ", type: "Pack", uom: "roll", planned: 42, issued: 11, lot: "LOT-PK-232", expiry: "" },
        ],

        /** quality checks (display only) */
        qc: [
            { id: "QC-01", name: "Assay", result: "Conforming", at: "2025-10-04T10:50:12.000Z", by: "QA-Devika" },
            { id: "QC-02", name: "Uniformity", result: "Pending", at: "", by: "" },
            { id: "QC-03", name: "Dissolution", result: "Pending", at: "", by: "" },
        ],

        /** assignees */
        assignees: [
            { id: "USR-101", name: "Akash Patel" },
            { id: "USR-219", name: "Mira Shah" },
            { id: "USR-333", name: "Arun B" },
        ],

        /** activity feed (display only) */
        activity: [
            { id: "ACT-1", text: "Work order created", at: "2025-10-04T09:31:10.000Z", by: "system" },
            { id: "ACT-2", text: "BOM R2 attached (BOM-1007)", at: "2025-10-04T09:33:27.000Z", by: "system" },
            { id: "ACT-3", text: "Started Mixing (OP-10)", at: "2025-10-04T10:10:03.000Z", by: "Akash" },
            { id: "ACT-4", text: "QC Assay passed", at: "2025-10-04T10:50:12.000Z", by: "QA-Devika" },
            { id: "ACT-5", text: "Granulation begun (OP-20)", at: "2025-10-04T11:20:05.000Z", by: "Mira" },
        ],
    }), [woId]);

    const onDemoAction = () => setModalOpen(true);

    const handlePrintSection = () => {
        document.body.classList.add("print-section-mode");
        setTimeout(() => window.print(), 50);
        setTimeout(() => document.body.classList.remove("print-section-mode"), 500);
    };

    const statusTone = {
        "Planned": "tone-planned",
        "In Progress": "tone-progress",
        "On Hold": "tone-hold",
        "Completed": "tone-done",
        "Cancelled": "tone-cancel",
    }[data.status] || "tone-progress";

    return (
        <Styled.Page>
            {/* Breadcrumbs */}
            <div className="crumbs">
                <NavLink to="/manufacturing" className="crumb">Manufacturing</NavLink>
                <span className="sep">/</span>
                <NavLink to="/manufacturing/work-orders" className="crumb">Work Orders</NavLink>
                <span className="sep">/</span>
                <span className="crumb current">{data.id}</span>
            </div>

            {/* Header / Title bar */}
            <header className="titlebar">
                <div className="left">
                    <h1>
                        Work Order <span className="mono">{data.id}</span>
                    </h1>
                    <div className="meta">
                        <span className={`badge ${statusTone}`}>{data.status}</span>
                        <span className="dot">•</span>
                        <span className="muted">Priority:</span> <span className="badge tone-priority">{data.priority}</span>
                        <span className="dot">•</span>
                        <span className="muted">Created:</span> <span>{fmtDateTime(data.createdAt)}</span>
                        <span className="dot">•</span>
                        <span className="muted">Updated:</span> <span>{fmtDateTime(data.lastUpdated)}</span>
                    </div>
                </div>

                <div className="right actions">
                    <NavLink className="btn link" to={`/manufacturing/production?woId=${encodeURIComponent(data.id)}`}>Open Production</NavLink>
                    <button onClick={handlePrintSection} className="btn">Print</button>
                    <button onClick={onDemoAction} className="btn" title="Display demo only">Start</button>
                    <button onClick={onDemoAction} className="btn" title="Display demo only">Complete</button>
                    <button onClick={onDemoAction} className="btn danger" title="Display demo only">Cancel</button>
                </div>
            </header>

            {/* Print CSS for section-only printing */}
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

            {/* Main (full width; no container max) */}
            <main id="search-print-area">
                {/* Summary strip */}
                <section className="strip">
                    <div className="tile">
                        <div className="k">Product</div>
                        <div className="v">
                            <NavLink to={`/products/${data.product.id}`} className="mono">{data.product.id}</NavLink>
                            <span className="muted"> — {data.product.name}</span>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="k">BOM</div>
                        <div className="v">
                            <NavLink to={`/manufacturing/bom/${data.bom.id}`} className="mono">{data.bom.id}</NavLink>
                            <span className="muted"> ({data.bom.rev})</span>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="k">Batch / Lot</div>
                        <div className="v">
                            <NavLink to={`/inventory/batches`} className="mono">{data.batch.id}</NavLink>
                            <span className="muted"> — {data.batch.lot}</span>
                            <span className="chip">Expiry: {fmtDate(data.batch.expiry)}</span>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="k">Warehouse</div>
                        <div className="v">
                            <NavLink to="/inventory/warehouses" className="mono">{data.warehouse.id}</NavLink>
                            <span className="muted"> — {data.warehouse.name}</span>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="k">Quantity</div>
                        <div className="v">
                            <span className="mono">{data.quantity.planned}</span> {data.quantity.uom}
                            <span className="chip soft">Produced: {data.quantity.produced}</span>
                            <span className="chip soft">Scrap: {data.quantity.scrap}</span>
                        </div>
                    </div>
                </section>

                {/* Grid */}
                <section className="grid">
                    {/* Left column */}
                    <div className="col">
                        {/* Schedule */}
                        <div className="card">
                            <div className="card-h">
                                <h2>Schedule</h2>
                                <div className="links">
                                    <NavLink to="/appointments/calendar">Calendar</NavLink>
                                    <span className="dot">•</span>
                                    <NavLink to="/reports/production">Reports</NavLink>
                                </div>
                            </div>
                            <div className="grid2">
                                <div>
                                    <div className="k">Scheduled Start</div>
                                    <div className="v">{fmtDateTime(data.scheduledStart)}</div>
                                </div>
                                <div>
                                    <div className="k">Due</div>
                                    <div className="v">{fmtDateTime(data.dueDate)}</div>
                                </div>
                                <div>
                                    <div className="k">Started</div>
                                    <div className="v">{fmtDateTime(data.startedAt)}</div>
                                </div>
                                <div>
                                    <div className="k">Completed</div>
                                    <div className="v">{data.completedAt ? fmtDateTime(data.completedAt) : "—"}</div>
                                </div>
                            </div>
                        </div>

                        {/* Operations routing */}
                        <div className="card">
                            <div className="card-h">
                                <h2>Operations</h2>
                                <div className="links">
                                    <NavLink to={`/manufacturing/work-orders`}>All Work Orders</NavLink>
                                    <span className="dot">•</span>
                                    <NavLink to={`/manufacturing/work-orders/${encodeURIComponent(data.id)}`}>This Work Order</NavLink>
                                </div>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Op</th>
                                        <th>Name</th>
                                        <th>Workstation</th>
                                        <th>Owner</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.operations.map(op => (
                                        <tr key={op.id}>
                                            <td className="mono">{op.id}</td>
                                            <td>{op.name}</td>
                                            <td><NavLink to="/manufacturing/production" title="Open production">{op.workstation}</NavLink></td>
                                            <td>{op.owner || "—"}</td>
                                            <td>{op.start ? fmtTime(op.start) : "—"}</td>
                                            <td>{op.end ? fmtTime(op.end) : "—"}</td>
                                            <td>
                                                <span className={`badge ${op.status === "Done" ? "tone-done" : op.status === "Running" ? "tone-progress" : "tone-planned"}`}>
                                                    {op.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {data.operations.some(x => x.notes) && (
                                <div className="op-notes">
                                    {data.operations.filter(x => x.notes).map(x => (
                                        <div className="note" key={x.id}>
                                            <span className="mono">{x.id}</span>
                                            <span className="muted"> — </span>
                                            <span>{x.notes}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Quality checks */}
                        <div className="card">
                            <div className="card-h">
                                <h2>Quality Checks</h2>
                                <div className="links">
                                    <NavLink to="/labs">Labs</NavLink>
                                    <span className="dot">•</span>
                                    <NavLink to="/reports/quality">Quality Report</NavLink>
                                </div>
                            </div>
                            <ul className="list">
                                {data.qc.map(q => (
                                    <li key={q.id} className="row">
                                        <div className="l">
                                            <div className="mono">{q.id}</div>
                                            <div className="name">{q.name}</div>
                                        </div>
                                        <div className="r">
                                            <span className={`badge ${q.result === "Conforming" ? "tone-done" : "tone-planned"}`}>{q.result || "Pending"}</span>
                                            <span className="muted">{q.at ? ` • ${fmtDateTime(q.at)}` : ""}</span>
                                            {q.by ? <span className="muted">{` • by ${q.by}`}</span> : null}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Assignees */}
                        <div className="card">
                            <div className="card-h"><h2>Assignees</h2></div>
                            <div className="chips">
                                {data.assignees.map(a => (
                                    <NavLink to={`/admin/users/${a.id}`} key={a.id} className="chip-user" title={a.name}>
                                        <span className="avatar">{a.name.split(" ").map(s => s[0]).join("").slice(0, 2).toUpperCase()}</span>
                                        <span className="label">{a.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        {/* Linked references */}
                        <div className="card">
                            <div className="card-h"><h2>Linked</h2></div>
                            <div className="links-grid">
                                <NavLink to={`/products/${data.product.id}`}>Product: <span className="mono">{data.product.id}</span></NavLink>
                                <NavLink to={`/manufacturing/bom/${data.bom.id}`}>BOM: <span className="mono">{data.bom.id}</span></NavLink>
                                <NavLink to={`/purchase-orders/${data.purchaseOrder.id}`}>PO: <span className="mono">{data.purchaseOrder.id}</span></NavLink>
                                <NavLink to={`/shipments/${data.shipment.id}`}>Shipment: <span className="mono">{data.shipment.id}</span></NavLink>
                                <NavLink to={`/vendors/${data.vendor.id}`}>Vendor: <span className="mono">{data.vendor.id}</span></NavLink>
                                <NavLink to={`/inventory/warehouses`}>Warehouse: <span className="mono">{data.warehouse.id}</span></NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="col">
                        {/* Materials */}
                        <div className="card">
                            <div className="card-h">
                                <h2>Materials</h2>
                                <div className="links">
                                    <NavLink to="/inventory">Inventory</NavLink>
                                    <span className="dot">•</span>
                                    <NavLink to="/categories">Categories</NavLink>
                                </div>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Type</th>
                                        <th>Lot</th>
                                        <th>Planned</th>
                                        <th>Issued</th>
                                        <th>Expiry</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.materials.map(m => (
                                        <tr key={m.id}>
                                            <td>
                                                <NavLink to={`/products/${m.id}`} className="mono">{m.id}</NavLink>
                                                <div className="muted">{m.name}</div>
                                            </td>
                                            <td>{m.type}</td>
                                            <td>{m.lot || "—"}</td>
                                            <td>{m.planned} {m.uom}</td>
                                            <td>{m.issued} {m.uom}</td>
                                            <td>{m.expiry ? fmtDate(m.expiry) : "—"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Tools & Machines */}
                        <div className="card">
                            <div className="card-h"><h2>Tools & Machines</h2></div>
                            <ul className="list">
                                <li className="row">
                                    <div className="l"><div className="mono">MIX-01</div><div className="name">Planetary Mixer</div></div>
                                    <div className="r"><span className="badge tone-soft">Calibrated</span></div>
                                </li>
                                <li className="row">
                                    <div className="l"><div className="mono">GRN-02</div><div className="name">High Shear Granulator</div></div>
                                    <div className="r"><span className="badge tone-soft">Calibrated</span></div>
                                </li>
                                <li className="row">
                                    <div className="l"><div className="mono">DRY-01</div><div className="name">Fluid Bed Dryer</div></div>
                                    <div className="r"><span className="badge tone-soft">Due: {fmtDate("2025-11-15T00:00:00.000Z")}</span></div>
                                </li>
                            </ul>
                        </div>

                        {/* Notes */}
                        <div className="card">
                            <div className="card-h"><h2>Notes</h2></div>
                            <div className="notes">
                                <p>Humidity maintained at 45–50% RH in granulation area. Ensure blister sealing temp at 180–190°C.</p>
                                <p>Packaging art: <NavLink to="/settings/print-templates">Print Templates</NavLink> • Storage: <NavLink to="/inventory/warehouses">WH-MUM-01</NavLink></p>
                            </div>
                        </div>

                        {/* Activity */}
                        <div className="card">
                            <div className="card-h"><h2>Activity</h2></div>
                            <ul className="activity">
                                {data.activity.map(a => (
                                    <li key={a.id}>
                                        <div className="time">{fmtDateTime(a.at)}</div>
                                        <div className="text">{a.text}</div>
                                        <div className="by muted">by {a.by}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Audit */}
                        <div className="card">
                            <div className="card-h"><h2>Audit</h2></div>
                            <div className="audit">
                                <div><span className="k">Created</span><span className="v">{fmtDateTime(data.createdAt)}</span></div>
                                <div><span className="k">Last Updated</span><span className="v">{fmtDateTime(data.lastUpdated)}</span></div>
                                <div><span className="k">Source</span><span className="v">Manufacturing module</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Explore more */}
                <section className="explore">
                    <h3>Explore</h3>
                    <div className="links">
                        <NavLink to="/manufacturing/work-orders">All Work Orders</NavLink>
                        <NavLink to={`/manufacturing/bom/${data.bom.id}`}>BOM {data.bom.id}</NavLink>
                        <NavLink to={`/products/${data.product.id}`}>Product {data.product.id}</NavLink>
                        <NavLink to={`/purchase-orders/${data.purchaseOrder.id}`}>PO {data.purchaseOrder.id}</NavLink>
                        <NavLink to="/inventory/lots">Lots</NavLink>
                        <NavLink to="/inventory/transfers">Transfers</NavLink>
                        <NavLink to="/reports/inventory">Inventory Report</NavLink>
                        <NavLink to="/reports/sales">Sales Report</NavLink>
                        <NavLink to="/admin/users">Users</NavLink>
                        <NavLink to="/settings/appearance">Appearance</NavLink>
                    </div>
                </section>
            </main>

            <DemoConfirm
                open={modalOpen}
                title="Demo"
                message="Display-only theme. Actions are not available."
                onClose={() => setModalOpen(false)}
            />
        </Styled.Page>
    );
}
