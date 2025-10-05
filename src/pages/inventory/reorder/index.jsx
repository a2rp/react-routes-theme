import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/** Date helpers — single source to ensure consistent formatting everywhere */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/** Demo dataset (display-only). Pre-computed fields to avoid runtime math. */
const DATA = [
    {
        id: "MED-AMOX-500",
        name: "Amoxicillin 500mg",
        sku: "AMX-500CAP",
        category: "Antibiotic",
        warehouse: "Central",
        supplier: { id: "VEND-SUNPH", name: "Sun Pharma" },
        stock: 120,
        reorderPoint: 200,
        stockPctOfROP: 60, // pre-computed just for visuals
        onOrder: 0,
        leadTimeDays: 5,
        uom: "Capsule",
        pack: "10 x 10",
        status: "Low",
        nextDeliveryEta: "2025-10-05T11:30:00+05:30",
        lastSoldAt: "2025-10-04T16:45:18+05:30",
        suggestedOrder: 200,
    },
    {
        id: "MED-PARA-650",
        name: "Paracetamol 650mg",
        sku: "PAR-650TAB",
        category: "Analgesic",
        warehouse: "Central",
        supplier: { id: "VEND-DRREDD", name: "Dr. Reddy’s" },
        stock: 45,
        reorderPoint: 300,
        stockPctOfROP: 15,
        onOrder: 50,
        leadTimeDays: 4,
        uom: "Tablet",
        pack: "20 x 15",
        status: "Critical",
        nextDeliveryEta: "2025-10-06T10:10:00+05:30",
        lastSoldAt: "2025-10-04T12:20:40+05:30",
        suggestedOrder: 400,
    },
    {
        id: "MED-AZI-500",
        name: "Azithromycin 500mg",
        sku: "AZI-500TAB",
        category: "Antibiotic",
        warehouse: "Central",
        supplier: { id: "VEND-CIPLA", name: "Cipla" },
        stock: 380,
        reorderPoint: 300,
        stockPctOfROP: 127,
        onOrder: 0,
        leadTimeDays: 6,
        uom: "Tablet",
        pack: "10 x 6",
        status: "OK",
        nextDeliveryEta: "",
        lastSoldAt: "2025-10-03T19:08:51+05:30",
        suggestedOrder: 0,
    },
    {
        id: "MED-IBUP-400",
        name: "Ibuprofen 400mg",
        sku: "IBU-400TAB",
        category: "Analgesic",
        warehouse: "Outlet-1",
        supplier: { id: "VEND-ABBOT", name: "Abbott" },
        stock: 80,
        reorderPoint: 180,
        stockPctOfROP: 44,
        onOrder: 60,
        leadTimeDays: 7,
        uom: "Tablet",
        pack: "10 x 10",
        status: "Low",
        nextDeliveryEta: "2025-10-07T09:30:00+05:30",
        lastSoldAt: "2025-10-04T17:02:11+05:30",
        suggestedOrder: 200,
    },
    {
        id: "MED-ORS-20",
        name: "ORS Sachet 20.5g",
        sku: "ORS-20SAC",
        category: "Hydration",
        warehouse: "Outlet-2",
        supplier: { id: "VEND-FDC", name: "FDC" },
        stock: 24,
        reorderPoint: 140,
        stockPctOfROP: 17,
        onOrder: 0,
        leadTimeDays: 3,
        uom: "Sachet",
        pack: "20 x 1",
        status: "Critical",
        nextDeliveryEta: "",
        lastSoldAt: "2025-10-04T14:30:05+05:30",
        suggestedOrder: 180,
    },
    {
        id: "MED-MULTI-AD",
        name: "Multivitamin Adult",
        sku: "MVT-ADULT",
        category: "Supplement",
        warehouse: "Central",
        supplier: { id: "VEND-GSK", name: "GSK" },
        stock: 520,
        reorderPoint: 400,
        stockPctOfROP: 130,
        onOrder: 0,
        leadTimeDays: 4,
        uom: "Tablet",
        pack: "10 x 15",
        status: "OK",
        nextDeliveryEta: "",
        lastSoldAt: "2025-10-02T11:12:22+05:30",
        suggestedOrder: 0,
    },
    {
        id: "MED-RANT-150",
        name: "Ranitidine 150mg",
        sku: "RAN-150TAB",
        category: "Gastro",
        warehouse: "Outlet-1",
        supplier: { id: "VEND-TORRE", name: "Torrent" },
        stock: 12,
        reorderPoint: 160,
        stockPctOfROP: 8,
        onOrder: 0,
        leadTimeDays: 6,
        uom: "Tablet",
        pack: "10 x 10",
        status: "Critical",
        nextDeliveryEta: "",
        lastSoldAt: "2025-10-04T13:40:59+05:30",
        suggestedOrder: 220,
    },
    {
        id: "MED-LOSA-50",
        name: "Losartan 50mg",
        sku: "LOS-50TAB",
        category: "Cardiac",
        warehouse: "Central",
        supplier: { id: "VEND-LUPIN", name: "Lupin" },
        stock: 190,
        reorderPoint: 250,
        stockPctOfROP: 76,
        onOrder: 100,
        leadTimeDays: 8,
        uom: "Tablet",
        pack: "10 x 15",
        status: "Low",
        nextDeliveryEta: "2025-10-09T16:00:00+05:30",
        lastSoldAt: "2025-10-04T09:22:08+05:30",
        suggestedOrder: 180,
    },
    {
        id: "MED-METF-500",
        name: "Metformin 500mg",
        sku: "MET-500TAB",
        category: "Diabetes",
        warehouse: "Central",
        supplier: { id: "VEND-ALKE", name: "Alkem" },
        stock: 600,
        reorderPoint: 450,
        stockPctOfROP: 133,
        onOrder: 0,
        leadTimeDays: 5,
        uom: "Tablet",
        pack: "20 x 10",
        status: "OK",
        nextDeliveryEta: "",
        lastSoldAt: "2025-10-01T17:11:35+05:30",
        suggestedOrder: 0,
    },
    {
        id: "MED-DICL-50",
        name: "Diclofenac 50mg",
        sku: "DIC-50TAB",
        category: "Analgesic",
        warehouse: "Outlet-2",
        supplier: { id: "VEND-IPCA", name: "IPCA" },
        stock: 30,
        reorderPoint: 160,
        stockPctOfROP: 19,
        onOrder: 30,
        leadTimeDays: 5,
        uom: "Tablet",
        pack: "10 x 10",
        status: "Critical",
        nextDeliveryEta: "2025-10-06T15:00:00+05:30",
        lastSoldAt: "2025-10-04T15:58:44+05:30",
        suggestedOrder: 200,
    },
    {
        id: "MED-OMEP-20",
        name: "Omeprazole 20mg",
        sku: "OME-20CAP",
        category: "Gastro",
        warehouse: "Central",
        supplier: { id: "VEND-INTAS", name: "Intas" },
        stock: 210,
        reorderPoint: 220,
        stockPctOfROP: 95,
        onOrder: 0,
        leadTimeDays: 7,
        uom: "Capsule",
        pack: "10 x 10",
        status: "Low",
        nextDeliveryEta: "",
        lastSoldAt: "2025-10-03T10:50:02+05:30",
        suggestedOrder: 150,
    },
    {
        id: "MED-CETI-10",
        name: "Cetirizine 10mg",
        sku: "CET-10TAB",
        category: "Allergy",
        warehouse: "Central",
        supplier: { id: "VEND-ZYDUS", name: "Zydus" },
        stock: 95,
        reorderPoint: 180,
        stockPctOfROP: 52,
        onOrder: 0,
        leadTimeDays: 3,
        uom: "Tablet",
        pack: "10 x 10",
        status: "Low",
        nextDeliveryEta: "",
        lastSoldAt: "2025-10-04T08:04:33+05:30",
        suggestedOrder: 180,
    },
];

/** Very light in-page tooltip without any lib */
const Tip = ({ children, label }) => (
    <span className="tipWrap" aria-label={label} data-tip={label}>{children}</span>
);

const Reorder = () => {
    const printRef = useRef(null);
    const [q, setQ] = useState("");
    const [warehouse, setWarehouse] = useState("all");
    const [category, setCategory] = useState("all");
    const [onlyIssues, setOnlyIssues] = useState(false); // show only Low/Critical
    const [selected, setSelected] = useState({});
    const [demoModal, setDemoModal] = useState(false);

    const now = useMemo(() => new Date(), []);
    const warehouses = useMemo(() => ["Central", "Outlet-1", "Outlet-2"], []);
    const categories = useMemo(() => {
        const s = new Set(DATA.map(d => d.category));
        return Array.from(s);
    }, []);

    const filtered = useMemo(() => {
        const text = q.trim().toLowerCase();
        return DATA.filter(r => {
            if (warehouse !== "all" && r.warehouse !== warehouse) return false;
            if (category !== "all" && r.category !== category) return false;
            if (onlyIssues && !(r.status === "Low" || r.status === "Critical")) return false;
            if (!text) return true;
            const hay = `${r.name} ${r.sku} ${r.id} ${r.supplier?.name}`.toLowerCase();
            return text.split(/\s+/).every(t => hay.includes(t));
        });
    }, [q, warehouse, category, onlyIssues]);

    const stats = useMemo(() => {
        const total = DATA.length;
        const low = DATA.filter(d => d.status === "Low").length;
        const critical = DATA.filter(d => d.status === "Critical").length;
        const ok = DATA.filter(d => d.status === "OK").length;
        const pending = DATA.filter(d => d.onOrder > 0).length;
        return { total, low, critical, ok, pending };
    }, []);

    const toggleRow = (id) => setSelected(prev => ({ ...prev, [id]: !prev[id] }));
    const allOnPageSelected = filtered.every(r => selected[r.id]);
    const togglePage = () => {
        const anyUnselected = filtered.some(r => !selected[r.id]);
        if (anyUnselected) {
            const next = { ...selected };
            filtered.forEach(r => { next[r.id] = true; });
            setSelected(next);
        } else {
            const next = { ...selected };
            filtered.forEach(r => { delete next[r.id]; });
            setSelected(next);
        }
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

    const exportCSV = () => {
        const head = [
            "ID", "Name", "SKU", "Category", "Warehouse", "Supplier",
            "Stock", "ReorderPoint", "OnOrder", "LeadTimeDays", "UOM", "Pack",
            "Status", "NextETA", "LastSold", "SuggestedOrder"
        ];
        const rows = filtered.map(r => [
            r.id, r.name, r.sku, r.category, r.warehouse, r.supplier?.name || "",
            r.stock, r.reorderPoint, r.onOrder, r.leadTimeDays, r.uom, r.pack,
            r.status, r.nextDeliveryEta, r.lastSoldAt, r.suggestedOrder
        ]);
        const csv = [head, ...rows].map(a => a.map(val => {
            const s = String(val ?? "");
            return /[",\n]/.test(s) ? `"${s.replaceAll('"', '""')}"` : s;
        }).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "reorder-export.csv";
        a.click();
        URL.revokeObjectURL(url);
    };

    const openDemoModal = () => setDemoModal(true);
    const closeDemoModal = () => setDemoModal(false);

    return (
        <Styled.Page>
            {/* print styles as requested */}
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

            <Styled.Header className="card">
                <div className="left">
                    <h1>Reorder Planner</h1>
                    <div className="meta">
                        <span>Generated: {fmt(now, true)}</span>
                        <span>•</span>
                        <span>Scope: Inventory across warehouses</span>
                    </div>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/inventory">Inventory</NavLink>
                        <span>/</span>
                        <span className="current">Reorder</span>
                    </nav>
                </div>
                <div className="right">
                    <button className="btn" onClick={exportCSV} title="Download CSV">Export CSV</button>
                    <button className="btn" onClick={printSection} title="Print selection">Print</button>
                    <Tip label="Demo only">
                        <button className="btn primary" disabled onClick={openDemoModal} title="Create Purchase Order from selection">Create PO</button>
                    </Tip>
                </div>
            </Styled.Header>

            <Styled.Stats className="card">
                <div className="item">
                    <div className="k">Total SKUs</div>
                    <div className="v">{stats.total}</div>
                </div>
                <div className="item">
                    <div className="k">OK</div>
                    <div className="v">{stats.ok}</div>
                </div>
                <div className="item">
                    <div className="k">Low</div>
                    <div className="v label-low">{stats.low}</div>
                </div>
                <div className="item">
                    <div className="k">Critical</div>
                    <div className="v label-critical">{stats.critical}</div>
                </div>
                <div className="item">
                    <div className="k">Pending PO Lines</div>
                    <div className="v">{stats.pending}</div>
                </div>
            </Styled.Stats>

            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="group">
                        <label>Search</label>
                        <input
                            placeholder="SKU / Name / Supplier"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>
                    <div className="group">
                        <label>Warehouse</label>
                        <select value={warehouse} onChange={(e) => setWarehouse(e.target.value)}>
                            <option value="all">All</option>
                            {warehouses.map(w => <option value={w} key={w}>{w}</option>)}
                        </select>
                    </div>
                    <div className="group">
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="all">All</option>
                            {categories.map(c => <option value={c} key={c}>{c}</option>)}
                        </select>
                    </div>
                    <div className="group checkbox">
                        <label className="inline">
                            <input type="checkbox" checked={onlyIssues} onChange={(e) => setOnlyIssues(e.target.checked)} />
                            Show only Low/Critical
                        </label>
                    </div>
                </div>

                <div className="row actions">
                    <div className="left">
                        <label className="inline">
                            <input type="checkbox" checked={allOnPageSelected} onChange={togglePage} />
                            Select page ({filtered.length})
                        </label>
                    </div>
                    <div className="right">
                        <Tip label="Demo only">
                            <button className="btn" disabled title="Add selected lines to a draft PO">Add Selected to PO</button>
                        </Tip>
                        <Tip label="Demo only">
                            <button className="btn" disabled title="Email suppliers for quotes">Request Quotes</button>
                        </Tip>
                    </div>
                </div>
            </Styled.Toolbar>

            <Styled.TableWrap className="card">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: 44 }}><input type="checkbox" checked={allOnPageSelected} onChange={togglePage} aria-label="Select page" /></th>
                            <th>Item</th>
                            <th>Warehouse</th>
                            <th>Stock</th>
                            <th>ROP</th>
                            <th>On&nbsp;Order</th>
                            <th>Lead</th>
                            <th>Supplier</th>
                            <th>Suggested</th>
                            <th>ETA</th>
                            <th>Last Sold</th>
                            <th style={{ textAlign: "right" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(r => {
                            const sel = !!selected[r.id];
                            return (
                                <tr key={r.id} data-status={r.status}>
                                    <td><input type="checkbox" checked={sel} onChange={() => toggleRow(r.id)} aria-label={`Select ${r.name}`} /></td>
                                    <td>
                                        <div className="itemCell">
                                            <div className="title">
                                                <NavLink to={`/products/${r.id}`} className="link">{r.name}</NavLink>
                                                <span className="sku">{r.sku}</span>
                                            </div>
                                            <div className="meta">
                                                <span className="chip">{r.category}</span>
                                                <span className="chip">{r.uom}</span>
                                                <span className="chip">{r.pack}</span>
                                                <span className={`chip status ${r.status.toLowerCase()}`}>{r.status}</span>
                                            </div>
                                            <div className="bar">
                                                <span className="fill" style={{ width: `${Math.min(100, Math.max(0, r.stockPctOfROP))}%` }} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{r.warehouse}</td>
                                    <td>{r.stock}</td>
                                    <td>{r.reorderPoint}</td>
                                    <td>{r.onOrder || 0}</td>
                                    <td>{r.leadTimeDays}d</td>
                                    <td>
                                        {r.supplier?.id ? (
                                            <NavLink to={`/vendors/${r.supplier.id}`} className="link">{r.supplier.name}</NavLink>
                                        ) : "-"}
                                    </td>
                                    <td className="bold">{r.suggestedOrder}</td>
                                    <td>{r.nextDeliveryEta ? fmt(r.nextDeliveryEta, true) : "-"}</td>
                                    <td>{r.lastSoldAt ? fmt(r.lastSoldAt, true) : "-"}</td>
                                    <td className="actions">
                                        <NavLink to={`/products/${r.id}`} className="btnLink">View</NavLink>
                                        <Tip label="Demo only">
                                            <button className="btnTiny" disabled title="Add single line to PO">Add to PO</button>
                                        </Tip>
                                    </td>
                                </tr>
                            );
                        })}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={12}>
                                    <div className="empty">
                                        <div className="big">No items match this view</div>
                                        <div className="sub">Try clearing filters or search keywords.</div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Styled.TableWrap>

            {/* Printable summary (selection-based) */}
            <Styled.PrintCard className="card" id="search-print-area" ref={printRef}>
                <h3>Reorder Summary</h3>
                <div className="grid">
                    <div><span className="k">Generated</span><span className="v">{fmt(now, true)}</span></div>
                    <div><span className="k">Warehouse</span><span className="v">{warehouse === "all" ? "All" : warehouse}</span></div>
                    <div><span className="k">Category</span><span className="v">{category === "all" ? "All" : category}</span></div>
                    <div><span className="k">Filter</span><span className="v">{onlyIssues ? "Low/Critical only" : "All"}</span></div>
                </div>
                <div className="list">
                    {filtered.map(r => (
                        <div className="line" key={`print-${r.id}`}>
                            <div className="name">{r.name} <span className="muted">({r.sku})</span></div>
                            <div className="meta">
                                <span>Stock {r.stock}</span>
                                <span>ROP {r.reorderPoint}</span>
                                <span>On Order {r.onOrder}</span>
                                <span>Lead {r.leadTimeDays}d</span>
                                <span>Suggested {r.suggestedOrder}</span>
                            </div>
                        </div>
                    ))}
                    {filtered.length === 0 && <div className="muted">Nothing to print.</div>}
                </div>
            </Styled.PrintCard>

            {/* Demo-only modal */}
            {demoModal && (
                <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={closeDemoModal}>
                    <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                        <header><h4>Action unavailable in demo</h4></header>
                        <section className="body">
                            <p>This is a display-only environment. Purchasing flows are disabled.</p>
                        </section>
                        <footer>
                            <button className="btn" onClick={closeDemoModal}>Close</button>
                        </footer>
                    </Styled.Modal>
                </Styled.Overlay>
            )}
        </Styled.Page>
    );
};

export default Reorder;
