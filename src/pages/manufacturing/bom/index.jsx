import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { Wrap, Toolbar, Filters, TableWrap, Badge, Kpis, Modal } from "./styled";

const DEMO_MODE = true;

// date utilities (required formats)
const fmtDate = (iso) => {
    try { return new Date(iso).toDateString(); } catch { return iso; }
};
const fmtTime = (iso) => {
    try {
        const d = new Date(iso);
        const hh = String(d.getHours()).padStart(2, "0");
        const mm = String(d.getMinutes()).padStart(2, "0");
        const ss = String(d.getSeconds()).padStart(2, "0");
        return `${hh}:${mm}:${ss}hrs`;
    } catch { return iso; }
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

// demo dataset (display-only)
const BOMS = [
    {
        id: "BOM-1001",
        productId: "PROD-AXN-100",
        productName: "Axon Monitor 24\"",
        revision: "R3",
        status: "Approved",
        uom: "Unit",
        components: 12,
        effectiveFrom: "2025-07-01T09:30:00+05:30",
        effectiveTo: null,
        updatedAt: "2025-10-02T15:38:20+05:30",
    },
    {
        id: "BOM-1002",
        productId: "PROD-AXN-200",
        productName: "Axon Monitor 27\"",
        revision: "R1",
        status: "Draft",
        uom: "Unit",
        components: 15,
        effectiveFrom: "2025-09-14T10:05:00+05:30",
        effectiveTo: null,
        updatedAt: "2025-10-01T12:12:40+05:30",
    },
    {
        id: "BOM-1003",
        productId: "PROD-SMC-500",
        productName: "Smart Cart v2",
        revision: "R7",
        status: "Approved",
        uom: "Assembly",
        components: 28,
        effectiveFrom: "2025-08-10T11:00:00+05:30",
        effectiveTo: null,
        updatedAt: "2025-10-04T09:10:05+05:30",
    },
    {
        id: "BOM-1004",
        productId: "PROD-PWR-90",
        productName: "Power Supply 90W",
        revision: "R2",
        status: "Archived",
        uom: "Unit",
        components: 7,
        effectiveFrom: "2024-12-01T00:00:00+05:30",
        effectiveTo: "2025-06-30T23:59:59+05:30",
        updatedAt: "2025-07-02T18:00:00+05:30",
    },
    {
        id: "BOM-1005",
        productId: "PROD-MED-AMOX-500",
        productName: "Amoxicillin 500mg (Tab)",
        revision: "R5",
        status: "Approved",
        uom: "Pack",
        components: 6,
        effectiveFrom: "2025-05-12T08:40:00+05:30",
        effectiveTo: null,
        updatedAt: "2025-09-30T14:22:30+05:30",
    },
    {
        id: "BOM-1006",
        productId: "PROD-RCK-12",
        productName: "Server Rack 12U",
        revision: "R1",
        status: "Draft",
        uom: "Assembly",
        components: 19,
        effectiveFrom: "2025-09-02T10:20:00+05:30",
        effectiveTo: null,
        updatedAt: "2025-10-03T13:50:10+05:30",
    },
    {
        id: "BOM-1007",
        productId: "PROD-CART-KIT",
        productName: "Pharma Cart Kit",
        revision: "R4",
        status: "Approved",
        uom: "Kit",
        components: 11,
        effectiveFrom: "2025-06-01T10:00:00+05:30",
        effectiveTo: null,
        updatedAt: "2025-10-04T08:05:11+05:30",
    },
    {
        id: "BOM-1008",
        productId: "PROD-LBL-TTP",
        productName: "Thermal Label Printer",
        revision: "R2",
        status: "Approved",
        uom: "Unit",
        components: 9,
        effectiveFrom: "2025-03-22T09:00:00+05:30",
        effectiveTo: null,
        updatedAt: "2025-09-25T18:48:59+05:30",
    },
];

const STATUSES = ["All", "Approved", "Draft", "Archived"];

export default function BomListPage() {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const [q, setQ] = useState(params.get("q") || "");
    const [status, setStatus] = useState(params.get("status") || "All");
    const [showModal, setShowModal] = useState(null); // holds row id for demo modal
    const searchRef = useRef(null);

    // Title
    useEffect(() => {
        document.title = "BOMs · Manufacturing";
    }, []);

    // keep URL in-sync (deep-linkable filters)
    useEffect(() => {
        const next = new URLSearchParams(params);
        q ? next.set("q", q) : next.delete("q");
        status && status !== "All" ? next.set("status", status) : next.delete("status");
        setParams(next, { replace: true });
    }, [q, status]); // eslint-disable-line react-hooks/exhaustive-deps

    // focus search on mount
    useEffect(() => {
        const id = requestAnimationFrame(() => searchRef.current?.focus());
        return () => cancelAnimationFrame(id);
    }, []);

    const filtered = useMemo(() => {
        const s = (q || "").trim().toLowerCase();
        return BOMS.filter(row => {
            const matchesQ =
                !s ||
                row.id.toLowerCase().includes(s) ||
                row.productName.toLowerCase().includes(s) ||
                row.productId.toLowerCase().includes(s) ||
                row.revision.toLowerCase().includes(s);
            const matchesStatus = status === "All" ? true : row.status === status;
            return matchesQ && matchesStatus;
        });
    }, [q, status]);

    const kpis = useMemo(() => {
        const total = BOMS.length;
        const approved = BOMS.filter(x => x.status === "Approved").length;
        const draft = BOMS.filter(x => x.status === "Draft").length;
        const archived = BOMS.filter(x => x.status === "Archived").length;
        const latest = BOMS
            .slice()
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0]?.updatedAt;
        return { total, approved, draft, archived, latest };
    }, []);

    const onExport = () => {
        try {
            const data = JSON.stringify(BOMS, null, 2);
            const blob = new Blob([data], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `bom-export-${Date.now()}.json`;
            a.click();
            URL.revokeObjectURL(url);
        } catch { }
    };

    const onPrint = () => {
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
    };

    const goto = (path) => navigate(path);

    return (
        <Wrap>
            {/* Print stylesheet (as provided) */}
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

            {/* Header / Toolbar */}
            <Toolbar role="region" aria-label="BOM toolbar">
                <div className="breadcrumbs">
                    <NavLink to="/manufacturing" className="crumb">Manufacturing</NavLink>
                    <span className="sep">/</span>
                    <span className="crumb current">Bill of Materials</span>
                </div>

                <div className="actions">
                    <button
                        disabled={DEMO_MODE}
                        title="Demo only"
                        aria-disabled={DEMO_MODE}
                        className="primary"
                        onClick={() => goto("/manufacturing/bom/new")}
                    >
                        New BOM
                    </button>

                    <button disabled title="Demo only">Import</button>
                    <button onClick={onExport} title="Export JSON">Export</button>
                    <button onClick={onPrint} title="Print current view">Print</button>
                    <NavLink to="/manufacturing/work-orders" title="Work Orders" className="ghost">Work Orders</NavLink>
                    <NavLink to="/manufacturing/production" title="Production" className="ghost">Production</NavLink>
                </div>
            </Toolbar>

            {/* KPIs */}
            <Kpis aria-label="BOM summary">
                <div className="kpi">
                    <div className="label">Total</div>
                    <div className="value">{kpis.total}</div>
                </div>
                <div className="kpi">
                    <div className="label">Approved</div>
                    <div className="value">{kpis.approved}</div>
                </div>
                <div className="kpi">
                    <div className="label">Draft</div>
                    <div className="value">{kpis.draft}</div>
                </div>
                <div className="kpi">
                    <div className="label">Archived</div>
                    <div className="value">{kpis.archived}</div>
                </div>
                <div className="kpi">
                    <div className="label">Last Update</div>
                    <div className="value small">{fmtDateTime(kpis.latest || "2025-10-04T00:00:00+05:30")}</div>
                </div>
            </Kpis>

            {/* Filters */}
            <Filters role="search" aria-label="BOM filters">
                <div className="row">
                    <input
                        ref={searchRef}
                        type="text"
                        placeholder="Search by BOM / Product / Revision…"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        aria-label="Search"
                    />
                    <div className="status">
                        {STATUSES.map(s => (
                            <button
                                key={s}
                                className={s === status ? "chip active" : "chip"}
                                onClick={() => setStatus(s)}
                                aria-pressed={s === status}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="row secondary">
                    <div className="hint">Quick links:</div>
                    <NavLink to="/products" className="mini">Products</NavLink>
                    <NavLink to="/inventory/lots" className="mini">Inventory Lots</NavLink>
                    <NavLink to="/vendors" className="mini">Vendors</NavLink>
                    <NavLink to="/reports/inventory" className="mini">Inventory Report</NavLink>
                    <NavLink to="/manufacturing/bom" className="mini">All BOMs</NavLink>
                </div>
            </Filters>

            {/* Table (print target) */}
            <TableWrap id="search-print-area" role="table" aria-label="BOM list">
                <div className="thead" role="rowgroup">
                    <div className="tr" role="row">
                        <div className="th" role="columnheader">BOM</div>
                        <div className="th" role="columnheader">Product</div>
                        <div className="th" role="columnheader">Revision</div>
                        <div className="th" role="columnheader">Status</div>
                        <div className="th" role="columnheader">UoM</div>
                        <div className="th" role="columnheader">Components</div>
                        <div className="th" role="columnheader">Effective</div>
                        <div className="th" role="columnheader">Updated</div>
                        <div className="th" role="columnheader">Actions</div>
                    </div>
                </div>

                <div className="tbody" role="rowgroup">
                    {filtered.map(row => (
                        <div key={row.id} className="tr" role="row">
                            <div className="td code" role="cell">
                                <NavLink to={`/manufacturing/bom/${row.id}`} title="Open BOM details">{row.id}</NavLink>
                            </div>

                            <div className="td product" role="cell">
                                <NavLink to={`/products/${row.productId}`} title="Open product">{row.productName}</NavLink>
                                <div className="sub">{row.productId}</div>
                            </div>

                            <div className="td" role="cell">{row.revision}</div>

                            <div className="td" role="cell">
                                <Badge data-type={row.status.toLowerCase()}>{row.status}</Badge>
                            </div>

                            <div className="td" role="cell">{row.uom}</div>

                            <div className="td" role="cell">
                                {row.components}
                                <span className="muted"> parts</span>
                            </div>

                            <div className="td" role="cell">
                                <div>{fmtDate(row.effectiveFrom)}</div>
                                {row.effectiveTo ? <div className="muted">to {fmtDate(row.effectiveTo)}</div> : <div className="muted">current</div>}
                            </div>

                            <div className="td" role="cell">{fmtDateTime(row.updatedAt)}</div>

                            <div className="td actions" role="cell">
                                <NavLink to={`/manufacturing/bom/${row.id}`} title="BOM details">Detail</NavLink>
                                <NavLink to={`/manufacturing/work-orders?bom=${row.id}`} title="Work orders">Work&nbsp;Orders</NavLink>
                                <NavLink to={`/manufacturing/production?bom=${row.id}`} title="Production">Production</NavLink>
                                <button
                                    className="danger ghost"
                                    onClick={() => setShowModal(row.id)}
                                    title="Archive (demo modal)"
                                >
                                    Archive
                                </button>
                            </div>
                        </div>
                    ))}

                    {filtered.length === 0 && (
                        <div className="empty">
                            <div className="emptyCard">
                                <h3>No results</h3>
                                <p>Try clearing filters or search with a different term.</p>
                                <div className="row">
                                    <button onClick={() => setQ("")}>Clear Search</button>
                                    <button onClick={() => setStatus("All")}>Reset Status</button>
                                    <NavLink to="/products">Go to Products</NavLink>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Static pagination (display-only) */}
                <div className="tfoot">
                    <div className="pager">
                        <button disabled title="First page">«</button>
                        <button disabled title="Previous">‹</button>
                        <div className="pageInfo">Page 1 of 3</div>
                        <button disabled title="Next">›</button>
                        <button disabled title="Last page">»</button>
                    </div>
                    <div className="legend">
                        <span className="dot a"></span> Approved
                        <span className="dot d"></span> Draft
                        <span className="dot r"></span> Archived
                    </div>
                </div>
            </TableWrap>

            {/* Demo-only confirm modal */}
            {showModal && (
                <Modal role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
                    <div className="card">
                        <h3 id="demo-modal-title">Archive BOM</h3>
                        <p>This is a live demo. Destructive actions are disabled.</p>
                        <div className="meta">
                            <div className="label">BOM</div>
                            <div className="value">{showModal}</div>
                        </div>
                        <div className="buttons">
                            <button onClick={() => setShowModal(null)}>OK</button>
                            <NavLink to={`/manufacturing/bom/${showModal}`} onClick={() => setShowModal(null)}>Open Details</NavLink>
                        </div>
                    </div>
                    <div className="backdrop" onClick={() => setShowModal(null)} />
                </Modal>
            )}
        </Wrap>
    );
}
