import { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineSearch, MdOpenInNew, MdPrint, MdFileDownload, MdTune, MdMoreVert, MdClose } from "react-icons/md";
import { Styled } from "./styled";

/** Date/Time utilities (strict format)
 *  - Date: Sat Oct 04 2025
 *  - Date+Time: Sat Oct 04 2025 15:38:20hrs
 *  - Time: 15:38:20hrs
 */
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MO = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = (n) => (n < 10 ? "0" + n : "" + n);
const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${DOW[d.getDay()]} ${MO[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (iso) => {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

/** Display-only sample dataset (stable IDs & links) */
const WORK_ORDERS = [
    {
        id: "WO-1001",
        title: "Blister Pack — Amoxicillin 500mg (10x10)",
        productId: "MED-AMOX-500",
        productName: "Amoxicillin 500mg",
        bomId: "BOM-2001",
        warehouse: "WH-MUM-01",
        priority: "High",
        status: "In Progress",
        qtyPlanned: 10000,
        qtyDone: 4200,
        uom: "tabs",
        startAt: "2025-10-02T09:30:12+05:30",
        dueAt: "2025-10-06T18:00:00+05:30",
        owner: "usr-ops-01",
        ownerName: "S. Mehta",
        updatedAt: "2025-10-04T15:38:20+05:30",
        links: {
            product: "/products/MED-AMOX-500",
            bom: "/manufacturing/bom/BOM-2001",
            inventory: "/inventory/lots",
            production: "/manufacturing/production",
        }
    },
    {
        id: "WO-1002",
        title: "Syrup — Paracetamol 250mg/5ml (100ml)",
        productId: "MED-PARA-250-SYR",
        productName: "Paracetamol Syrup 250mg/5ml",
        bomId: "BOM-2007",
        warehouse: "WH-DEL-02",
        priority: "Medium",
        status: "Planned",
        qtyPlanned: 2500,
        qtyDone: 0,
        uom: "bottles",
        startAt: "2025-10-05T10:10:00+05:30",
        dueAt: "2025-10-10T19:00:00+05:30",
        owner: "usr-ops-02",
        ownerName: "A. Roy",
        updatedAt: "2025-10-04T11:12:00+05:30",
        links: {
            product: "/products/MED-PARA-250-SYR",
            bom: "/manufacturing/bom/BOM-2007",
            inventory: "/inventory/reorder",
            production: "/manufacturing/production",
        }
    },
    {
        id: "WO-1003",
        title: "Capsule — Omeprazole 20mg (Alu-Alu)",
        productId: "MED-OME-020",
        productName: "Omeprazole 20mg",
        bomId: "BOM-2010",
        warehouse: "WH-MUM-01",
        priority: "Low",
        status: "Hold",
        qtyPlanned: 15000,
        qtyDone: 0,
        uom: "caps",
        startAt: "2025-10-03T14:05:45+05:30",
        dueAt: "2025-10-09T12:00:00+05:30",
        owner: "usr-ops-04",
        ownerName: "R. Gupta",
        updatedAt: "2025-10-04T09:02:10+05:30",
        links: {
            product: "/products/MED-OME-020",
            bom: "/manufacturing/bom/BOM-2010",
            inventory: "/inventory/warehouses",
            production: "/manufacturing/production",
        }
    },
    {
        id: "WO-1004",
        title: "Tablet — Metformin 500mg (Film Coated)",
        productId: "MED-MET-500",
        productName: "Metformin 500mg",
        bomId: "BOM-2015",
        warehouse: "WH-PUN-01",
        priority: "High",
        status: "Completed",
        qtyPlanned: 8000,
        qtyDone: 8000,
        uom: "tabs",
        startAt: "2025-09-28T08:45:20+05:30",
        dueAt: "2025-10-03T17:30:00+05:30",
        owner: "usr-ops-03",
        ownerName: "K. Verma",
        updatedAt: "2025-10-03T18:10:05+05:30",
        links: {
            product: "/products/MED-MET-500",
            bom: "/manufacturing/bom/BOM-2015",
            inventory: "/inventory/batches",
            production: "/manufacturing/production",
        }
    },
    {
        id: "WO-1005",
        title: "Bottle — Cough Syrup (Ambroxol + Guaifenesin)",
        productId: "MED-CGH-AMB-GF",
        productName: "Ambroxol + Guaifenesin",
        bomId: "BOM-2022",
        warehouse: "WH-DEL-02",
        priority: "Medium",
        status: "In Progress",
        qtyPlanned: 5000,
        qtyDone: 1200,
        uom: "bottles",
        startAt: "2025-10-04T11:30:00+05:30",
        dueAt: "2025-10-08T20:00:00+05:30",
        owner: "usr-ops-05",
        ownerName: "N. Iyer",
        updatedAt: "2025-10-04T16:05:00+05:30",
        links: {
            product: "/products/MED-CGH-AMB-GF",
            bom: "/manufacturing/bom/BOM-2022",
            inventory: "/inventory/adjustments",
            production: "/manufacturing/production",
        }
    }
];

const STAT = {
    total: WORK_ORDERS.length,
    inProgress: WORK_ORDERS.filter(x => x.status === "In Progress").length,
    planned: WORK_ORDERS.filter(x => x.status === "Planned").length,
    completed: WORK_ORDERS.filter(x => x.status === "Completed").length,
    hold: WORK_ORDERS.filter(x => x.status === "Hold").length,
};

const STAT_CARDS = [
    { key: "total", label: "Total WOs" },
    { key: "inProgress", label: "In Progress" },
    { key: "planned", label: "Planned" },
    { key: "completed", label: "Completed" },
    { key: "hold", label: "On Hold" },
];

const STATUS_OPTIONS = ["All", "Planned", "In Progress", "Completed", "Hold"];

/** simple text match for display-only */
const match = (s, q) => s?.toLowerCase().includes(q);

export default function WorkOrdersList() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("All");
    const [showConfirm, setShowConfirm] = useState(false);

    const data = useMemo(() => {
        const query = q.trim().toLowerCase();
        return WORK_ORDERS.filter(w => {
            const statusOk = status === "All" ? true : w.status === status;
            if (!statusOk) return false;
            if (!query) return true;
            return (
                match(w.id, query) ||
                match(w.title, query) ||
                match(w.productId, query) ||
                match(w.productName, query) ||
                match(w.ownerName, query) ||
                match(w.warehouse, query)
            );
        });
    }, [q, status]);

    const exportJSON = () => {
        try {
            const blob = new Blob([JSON.stringify(WORK_ORDERS, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "work-orders.json";
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        } catch { }
    };

    return (
        <Styled.Page>
            {/* Print styles for section prints */}
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

            {/* Breadcrumbs + page actions */}
            <div className="head">
                <div className="crumbs">
                    <NavLink to="/manufacturing" end>Manufacturing</NavLink>
                    <span className="sep">/</span>
                    <span className="current">Work Orders</span>
                </div>

                <div className="actions">
                    <button type="button" title="Filters" className="ghost">
                        <MdTune size={18} /> <span>Filters</span>
                    </button>
                    <button type="button" title="Export JSON" onClick={exportJSON}>
                        <MdFileDownload size={18} /> <span>Export</span>
                    </button>
                    <button type="button" title="New Work Order (disabled)" disabled>
                        <MdOpenInNew size={18} /> <span>New</span>
                    </button>
                    <button type="button" title="More" className="ghost" disabled>
                        <MdMoreVert size={18} />
                    </button>
                </div>
            </div>

            {/* Snapshot metrics */}
            <div className="stats">
                {STAT_CARDS.map(card => (
                    <div key={card.key} className="statCard card">
                        <div className="label">{card.label}</div>
                        <div className="value">{STAT[card.key]}</div>
                        <div className="meta">Updated {fmtDateTime("2025-10-04T15:38:20+05:30")}</div>
                    </div>
                ))}
            </div>

            {/* Toolbar */}
            <div className="toolbar card">
                <div className="search">
                    <MdOutlineSearch size={18} className="icon" />
                    <input
                        placeholder="Search by WO ID, product, owner, warehouse…"
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        aria-label="Search work orders"
                    />
                </div>
                <div className="tabs">
                    {STATUS_OPTIONS.map(s => (
                        <button
                            key={s}
                            className={`tab ${status === s ? "active" : ""}`}
                            onClick={() => setStatus(s)}
                            type="button"
                        >
                            {s}
                        </button>
                    ))}
                </div>
                <div className="spacer" />
                <div className="toolbarLinks">
                    <NavLink to="/manufacturing/bom" title="Bill of Materials">BOM</NavLink>
                    <NavLink to="/manufacturing/production" title="Production">Production</NavLink>
                    <NavLink to="/inventory/warehouses" title="Warehouses">Warehouses</NavLink>
                    <NavLink to="/reports/inventory" title="Inventory Report">Report</NavLink>
                </div>
            </div>

            {/* List/Table */}
            <div className="tableWrap card" id="search-print-area">
                <table className="table">
                    <thead>
                        <tr>
                            <th>WO</th>
                            <th>Product</th>
                            <th>BOM</th>
                            <th>Qty</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Start</th>
                            <th>Due</th>
                            <th>Owner</th>
                            <th>Warehouse</th>
                            <th className="nowrap">Links</th>
                            <th className="right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(w => (
                            <tr key={w.id}>
                                <td className="mono">
                                    <NavLink to={`/manufacturing/work-orders/${w.id}`} title="Open work order">
                                        {w.id}
                                    </NavLink>
                                    <div className="sub">{w.title}</div>
                                </td>
                                <td>
                                    <div className="ellipsis">{w.productName}</div>
                                    <NavLink to={w.links.product} className="minor ellipsis" title="Open product">
                                        {w.productId}
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink to={w.links.bom} className="mono" title="Open BOM">
                                        {w.bomId}
                                    </NavLink>
                                </td>
                                <td>
                                    <div className="mono">{w.qtyDone} / {w.qtyPlanned} {w.uom}</div>
                                </td>
                                <td>
                                    <span className={`chip ${w.status.replace(/\s+/g, '').toLowerCase()}`}>{w.status}</span>
                                </td>
                                <td>
                                    <span className={`chip mute ${w.priority.toLowerCase()}`}>{w.priority}</span>
                                </td>
                                <td>
                                    <div className="mono">{fmtDateTime(w.startAt)}</div>
                                </td>
                                <td>
                                    <div className="mono">{fmtDateTime(w.dueAt)}</div>
                                </td>
                                <td>
                                    <div className="ellipsis">{w.ownerName}</div>
                                </td>
                                <td>
                                    <NavLink to="/inventory/warehouses" className="mono" title="View warehouse">
                                        {w.warehouse}
                                    </NavLink>
                                </td>
                                <td className="linksCell">
                                    <NavLink to={w.links.inventory} title="Inventory">Inventory</NavLink>
                                    <NavLink to={w.links.production} title="Production">Production</NavLink>
                                </td>
                                <td className="right">
                                    <div className="rowActions">
                                        <NavLink to={`/manufacturing/work-orders/${w.id}`} className="btn" title="Open">
                                            <MdOpenInNew size={16} />
                                        </NavLink>
                                        <NavLink to={`/print/sticker/${w.id}`} className="btn" title="Print sticker">
                                            <MdPrint size={16} />
                                        </NavLink>
                                        <button className="btn" title="Close (disabled)" disabled onClick={() => setShowConfirm(true)}>
                                            Close
                                        </button>
                                        <button className="btn danger" title="Delete (disabled)" disabled onClick={() => setShowConfirm(true)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {data.length === 0 && (
                            <tr>
                                <td colSpan={12}>
                                    <div className="empty">
                                        <div className="big">No matching work orders</div>
                                        <div className="muted">Try a different keyword or clear filters.</div>
                                        <div className="quickLinks">
                                            <NavLink to="/manufacturing" className="ghost">Manufacturing Home</NavLink>
                                            <NavLink to="/manufacturing/bom" className="ghost">Browse BOM</NavLink>
                                            <NavLink to="/products" className="ghost">All Products</NavLink>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={12}>
                                <div className="footBar">
                                    <div className="muted">Showing {data.length} of {WORK_ORDERS.length}</div>
                                    <div className="pager">
                                        <button type="button" disabled>&laquo;</button>
                                        <button type="button" className="active">1</button>
                                        <button type="button" disabled>2</button>
                                        <button type="button" disabled>&raquo;</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            {/* Inline confirm (display-only) */}
            {showConfirm && (
                <div className="confirmBackdrop" role="dialog" aria-modal="true">
                    <div className="confirmModal card">
                        <div className="title">Action Unavailable</div>
                        <div className="body">
                            This is a read-only preview. Destructive actions are disabled.
                        </div>
                        <div className="footer">
                            <button onClick={() => setShowConfirm(false)}>
                                <MdClose size={18} /> <span>Close</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Styled.Page>
    );
}
