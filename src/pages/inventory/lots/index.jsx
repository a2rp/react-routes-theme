import React, { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { Styled } from "./styled";

/** -----------------------------------------------------------
 *  Date formatting helpers (single source of truth)
 *  Date  => Sat Oct 04 2025
 *  Date+Time => Sat Oct 04 2025 15:38:20hrs
 *  Time => 15:38:20hrs
 * ----------------------------------------------------------*/
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/** -----------------------------------------------------------
 *  Display-only fixtures (sample, deterministic)
 *  Pre-computed fields (like valuation) are included directly.
 * ----------------------------------------------------------*/
const LOTS_FIXTURE = [
    {
        id: "LOT-AX9K21",
        productId: "MED-AMOX-500",
        productName: "Amoxicillin 500mg Capsules",
        sku: "AMOX-500-CAP",
        batch: "B2309A",
        mfg: "2024-09-05T10:00:00+05:30",
        expiry: "2026-03-31T23:59:59+05:30",
        qtyOnHand: 1200,
        qtyReserved: 150,
        qtyAvailable: 1050,
        unitCost: 6.25,
        mrp: 12.5,
        valuation: 7500,
        status: "in_stock", // in_stock | low | expiring | expired
        warehouse: "WH-DEL",
        bin: "A-03-2",
        supplier: "Medico Labs",
        receivedAt: "2025-02-18T13:12:54+05:30",
        lastMovementAt: "2025-09-21T11:24:02+05:30",
    },
    {
        id: "LOT-C2J7M0",
        productId: "MED-PARA-650",
        productName: "Paracetamol 650mg Tablets",
        sku: "PARA-650-TAB",
        batch: "P2411Z",
        mfg: "2024-11-15T09:00:00+05:30",
        expiry: "2026-11-30T23:59:59+05:30",
        qtyOnHand: 340,
        qtyReserved: 20,
        qtyAvailable: 320,
        unitCost: 1.9,
        mrp: 4.0,
        valuation: 646,
        status: "low",
        warehouse: "WH-DEL",
        bin: "B-01-1",
        supplier: "HealPlus Pharma",
        receivedAt: "2025-03-01T10:08:10+05:30",
        lastMovementAt: "2025-08-19T17:20:10+05:30",
    },
    {
        id: "LOT-ZP88KQ",
        productId: "MED-CET-10",
        productName: "Cetirizine 10mg Tablets",
        sku: "CET-10-TAB",
        batch: "C2502K",
        mfg: "2025-02-01T10:00:00+05:30",
        expiry: "2025-11-30T23:59:59+05:30",
        qtyOnHand: 90,
        qtyReserved: 10,
        qtyAvailable: 80,
        unitCost: 0.9,
        mrp: 2.5,
        valuation: 81,
        status: "expiring",
        warehouse: "WH-MUM",
        bin: "M-02-5",
        supplier: "Orbit Remedies",
        receivedAt: "2025-02-20T09:20:34+05:30",
        lastMovementAt: "2025-09-02T16:02:11+05:30",
    },
    {
        id: "LOT-K1R4DX",
        productId: "MED-RAB-20",
        productName: "Rabeprazole 20mg Tablets",
        sku: "RAB-20-TAB",
        batch: "R2408S",
        mfg: "2024-08-20T10:00:00+05:30",
        expiry: "2025-08-31T23:59:59+05:30",
        qtyOnHand: 0,
        qtyReserved: 0,
        qtyAvailable: 0,
        unitCost: 3.1,
        mrp: 7.5,
        valuation: 0,
        status: "expired",
        warehouse: "WH-MUM",
        bin: "M-07-1",
        supplier: "ZenCore Healthcare",
        receivedAt: "2024-09-01T11:16:40+05:30",
        lastMovementAt: "2025-08-31T08:10:01+05:30",
    },
    {
        id: "LOT-7NY42F",
        productId: "MED-AZT-250",
        productName: "Azithromycin 250mg Tablets",
        sku: "AZT-250-TAB",
        batch: "A2505N",
        mfg: "2025-05-01T10:00:00+05:30",
        expiry: "2027-04-30T23:59:59+05:30",
        qtyOnHand: 540,
        qtyReserved: 60,
        qtyAvailable: 480,
        unitCost: 5.2,
        mrp: 11.0,
        valuation: 2808,
        status: "in_stock",
        warehouse: "WH-DEL",
        bin: "A-05-4",
        supplier: "Medico Labs",
        receivedAt: "2025-05-14T12:01:00+05:30",
        lastMovementAt: "2025-09-26T10:45:12+05:30",
    },
    {
        id: "LOT-VB4T56",
        productId: "MED-IBU-400",
        productName: "Ibuprofen 400mg Tablets",
        sku: "IBU-400-TAB",
        batch: "I2503B",
        mfg: "2025-03-20T10:00:00+05:30",
        expiry: "2026-09-30T23:59:59+05:30",
        qtyOnHand: 210,
        qtyReserved: 0,
        qtyAvailable: 210,
        unitCost: 2.1,
        mrp: 5.2,
        valuation: 441,
        status: "in_stock",
        warehouse: "WH-BLR",
        bin: "BL-01-1",
        supplier: "Orbit Remedies",
        receivedAt: "2025-03-28T15:22:11+05:30",
        lastMovementAt: "2025-09-18T14:55:42+05:30",
    },
    {
        id: "LOT-PT4L9A",
        productId: "MED-MULTI-60",
        productName: "Multivitamin 60 Tabs",
        sku: "MULTI-60",
        batch: "MV2501N",
        mfg: "2025-01-12T10:00:00+05:30",
        expiry: "2027-01-31T23:59:59+05:30",
        qtyOnHand: 75,
        qtyReserved: 5,
        qtyAvailable: 70,
        unitCost: 8.9,
        mrp: 16.0,
        valuation: 667.5,
        status: "low",
        warehouse: "WH-BLR",
        bin: "BL-07-3",
        supplier: "HealPlus Pharma",
        receivedAt: "2025-01-30T18:10:30+05:30",
        lastMovementAt: "2025-09-29T18:40:00+05:30",
    },
    {
        id: "LOT-CT2R8E",
        productId: "MED-ORS-200",
        productName: "ORS 200ml",
        sku: "ORS-200",
        batch: "O2506L",
        mfg: "2025-06-12T10:00:00+05:30",
        expiry: "2026-06-30T23:59:59+05:30",
        qtyOnHand: 320,
        qtyReserved: 40,
        qtyAvailable: 280,
        unitCost: 10.0,
        mrp: 18.0,
        valuation: 3200,
        status: "in_stock",
        warehouse: "WH-DEL",
        bin: "A-02-2",
        supplier: "ZenCore Healthcare",
        receivedAt: "2025-06-20T09:45:12+05:30",
        lastMovementAt: "2025-09-24T12:10:20+05:30",
    },
    {
        id: "LOT-LM94TZ",
        productId: "MED-GLU-75",
        productName: "Glucose Powder 75g",
        sku: "GLU-75",
        batch: "G2507T",
        mfg: "2025-07-01T10:00:00+05:30",
        expiry: "2026-12-31T23:59:59+05:30",
        qtyOnHand: 150,
        qtyReserved: 0,
        qtyAvailable: 150,
        unitCost: 3.2,
        mrp: 6.0,
        valuation: 480,
        status: "in_stock",
        warehouse: "WH-MUM",
        bin: "M-03-4",
        supplier: "Medico Labs",
        receivedAt: "2025-07-10T16:12:00+05:30",
        lastMovementAt: "2025-09-27T13:22:30+05:30",
    },
    {
        id: "LOT-AD8Q3W",
        productId: "MED-SAL-0.9",
        productName: "Normal Saline 0.9% 500ml",
        sku: "SAL-0.9-500",
        batch: "S2505H",
        mfg: "2025-05-15T10:00:00+05:30",
        expiry: "2026-05-31T23:59:59+05:30",
        qtyOnHand: 40,
        qtyReserved: 2,
        qtyAvailable: 38,
        unitCost: 22.5,
        mrp: 38.0,
        valuation: 900,
        status: "expiring",
        warehouse: "WH-DEL",
        bin: "A-10-2",
        supplier: "Orbit Remedies",
        receivedAt: "2025-05-25T11:10:10+05:30",
        lastMovementAt: "2025-09-20T09:12:50+05:30",
    }
];

/** Quick helpers for UI */
const STATUS_META = {
    in_stock: { label: "In Stock", tone: "ok" },
    low: { label: "Low", tone: "warn" },
    expiring: { label: "Expiring", tone: "warn" },
    expired: { label: "Expired", tone: "danger" },
};
const WAREHOUSES = ["WH-DEL", "WH-MUM", "WH-BLR"];

const Lots = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [wh, setWh] = useState("all");
    const [status, setStatus] = useState("all");
    const [sortBy, setSortBy] = useState("expiry"); // expiry | qty | updated
    const [sortDir, setSortDir] = useState("asc"); // asc | desc
    const [selected, setSelected] = useState(null);
    const printRef = useRef(null);

    // open by deep-link (?lot=ID)
    useEffect(() => {
        const id = params.get("lot");
        if (!id) return;
        const found = LOTS_FIXTURE.find((x) => x.id === id);
        setSelected(found || null);
    }, [params]);

    const onRowOpen = (lot) => {
        setSelected(lot);
        setParams((p) => {
            const next = new URLSearchParams(p);
            next.set("lot", lot.id);
            return next;
        }, { replace: false });
    };

    const onCloseDrawer = () => {
        setSelected(null);
        setParams((p) => {
            const next = new URLSearchParams(p);
            next.delete("lot");
            return next;
        }, { replace: true });
    };

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        let arr = LOTS_FIXTURE.filter((x) => {
            const inWH = wh === "all" ? true : x.warehouse === wh;
            const inStatus = status === "all" ? true : x.status === status;
            if (!inWH || !inStatus) return false;
            if (tokens.length === 0) return true;
            const hay = `${x.id} ${x.productName} ${x.sku} ${x.batch} ${x.productId} ${x.warehouse} ${x.bin}`.toLowerCase();
            return tokens.every((t) => hay.includes(t));
        });

        arr = arr.sort((a, b) => {
            const dir = sortDir === "asc" ? 1 : -1;
            if (sortBy === "expiry") {
                return (new Date(a.expiry) - new Date(b.expiry)) * dir;
            } else if (sortBy === "qty") {
                return (a.qtyAvailable - b.qtyAvailable) * dir;
            } else if (sortBy === "updated") {
                return (new Date(a.lastMovementAt) - new Date(b.lastMovementAt)) * dir;
            }
            return 0;
        });

        return arr;
    }, [q, wh, status, sortBy, sortDir]);

    const cards = useMemo(() => {
        const totalLots = LOTS_FIXTURE.length;
        const totalQty = LOTS_FIXTURE.reduce((s, x) => s + x.qtyOnHand, 0);
        const expiringCount = LOTS_FIXTURE.filter((x) => x.status === "expiring").length;
        const expiredCount = LOTS_FIXTURE.filter((x) => x.status === "expired").length;
        const lowCount = LOTS_FIXTURE.filter((x) => x.status === "low").length;
        return { totalLots, totalQty, expiringCount, expiredCount, lowCount };
    }, []);

    const exportCsv = () => {
        const header = [
            "Lot ID", "Product", "SKU", "Batch", "Mfg", "Expiry", "Warehouse", "Bin",
            "Qty On Hand", "Qty Reserved", "Qty Available", "Unit Cost", "MRP", "Valuation", "Status", "Supplier", "Last Movement"
        ];
        const rows = filtered.map(x => [
            x.id, x.productName, x.sku, x.batch, fmtDate(x.mfg), fmtDate(x.expiry),
            x.warehouse, x.bin, x.qtyOnHand, x.qtyReserved, x.qtyAvailable,
            x.unitCost, x.mrp, x.valuation, STATUS_META[x.status]?.label || x.status,
            x.supplier, fmtDateTime(x.lastMovementAt)
        ]);
        const csv = [header, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url; a.download = "inventory-lots.csv"; a.click();
        URL.revokeObjectURL(url);
    };

    const printLabel = () => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    // actions (display-only)
    const [demoModal, setDemoModal] = useState(null);

    // close on Esc
    useEffect(() => {
        if (!selected) return;
        const onKey = (e) => { if (e.key === "Escape") onCloseDrawer(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected]);


    return (
        <Styled.Page>

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
                    <h1>Inventory Lots</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/inventory">Inventory</NavLink>
                        <span>/</span>
                        <span className="current">Lots</span>
                    </nav>
                    <div className="meta">
                        <span>Total: {cards.totalLots}</span>
                        <span>•</span>
                        <span>Qty: {cards.totalQty}</span>
                        <span>•</span>
                        <span>Updated: {fmtDateTime(new Date())}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate(-1)} title="Back">Back</button>
                    <button className="btnPrimary" onClick={exportCsv} title="Export CSV">Export</button>
                </div>
            </Styled.Header>

            <Styled.KPIs>
                <div className="kpi card">
                    <div className="label">Lots</div>
                    <div className="value">{cards.totalLots}</div>
                    <div className="hint">{WAREHOUSES.length} warehouses</div>
                </div>
                <div className="kpi card">
                    <div className="label">On Hand</div>
                    <div className="value">{cards.totalQty}</div>
                    <div className="hint">All active lots</div>
                </div>
                <div className="kpi card">
                    <div className="label">Expiring</div>
                    <div className="value">{cards.expiringCount}</div>
                    <div className="hint">Next few months</div>
                </div>
                <div className="kpi card">
                    <div className="label">Expired</div>
                    <div className="value">{cards.expiredCount}</div>
                    <div className="hint">Action required</div>
                </div>
                <div className="kpi card">
                    <div className="label">Low Stock</div>
                    <div className="value">{cards.lowCount}</div>
                    <div className="hint">Below threshold</div>
                </div>
            </Styled.KPIs>

            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="search">
                        <label>Search</label>
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search lot / product / sku / batch / location"
                            aria-label="Search lots"
                        />
                    </div>
                    <div className="filters">
                        <div>
                            <label>Warehouse</label>
                            <select value={wh} onChange={(e) => setWh(e.target.value)}>
                                <option value="all">All</option>
                                {WAREHOUSES.map(w => <option key={w} value={w}>{w}</option>)}
                            </select>
                        </div>
                        <div>
                            <label>Status</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="all">All</option>
                                <option value="in_stock">In Stock</option>
                                <option value="low">Low</option>
                                <option value="expiring">Expiring</option>
                                <option value="expired">Expired</option>
                            </select>
                        </div>
                        <div>
                            <label>Sort</label>
                            <div className="sortGroup" role="group" aria-label="Sort">
                                <button
                                    className={`chip ${sortBy === "expiry" ? "active" : ""}`}
                                    onClick={() => setSortBy("expiry")}
                                >Expiry</button>
                                <button
                                    className={`chip ${sortBy === "qty" ? "active" : ""}`}
                                    onClick={() => setSortBy("qty")}
                                >Qty</button>
                                <button
                                    className={`chip ${sortBy === "updated" ? "active" : ""}`}
                                    onClick={() => setSortBy("updated")}
                                >Updated</button>
                                <button
                                    className="chip"
                                    onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
                                    title="Toggle direction"
                                >
                                    {sortDir === "asc" ? "Asc" : "Desc"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cta">
                        <button className="btnGhost" onClick={() => { setQ(""); setWh("all"); setStatus("all"); setSortBy("expiry"); setSortDir("asc"); }}>
                            Reset
                        </button>
                    </div>
                </div>
            </Styled.Toolbar>

            <Styled.TableWrap className="card">
                <table>
                    <thead>
                        <tr>
                            <th>Lot</th>
                            <th>Product</th>
                            <th>Batch</th>
                            <th>Expiry</th>
                            <th>Qty</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((x) => (
                            <tr key={x.id} onClick={() => onRowOpen(x)} tabIndex={0} onKeyDown={(e) => (e.key === "Enter" ? onRowOpen(x) : null)}>
                                <td>
                                    <div className="lot">
                                        <div className="id">{x.id}</div>
                                        <div className="sku">{x.sku}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="prod">
                                        <div className="name">{x.productName}</div>
                                        <div className="sub">{x.productId}</div>
                                    </div>
                                </td>
                                <td>{x.batch}</td>
                                <td>
                                    <div className="dateCol">
                                        <div>{fmtDate(x.expiry)}</div>
                                        <div className="muted">Mfg {fmtDate(x.mfg)}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="qty">
                                        <div className="row">
                                            <span className="label">OH</span><span className="val">{x.qtyOnHand}</span>
                                            <span className="label">Res</span><span className="val">{x.qtyReserved}</span>
                                            <span className="label">Avail</span><span className="val">{x.qtyAvailable}</span>
                                        </div>
                                        <div className="bar"><span style={{ width: `${Math.min(100, (x.qtyAvailable / Math.max(1, x.qtyOnHand || x.qtyAvailable)) * 100)}%` }} /></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="loc">
                                        <div>{x.warehouse}</div>
                                        <div className="muted">{x.bin}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="price">
                                        <div>₹{x.unitCost.toFixed(2)} <span className="muted">cost</span></div>
                                        <div>₹{x.mrp.toFixed(2)} <span className="muted">MRP</span></div>
                                    </div>
                                </td>
                                <td>
                                    <span className={`badge ${STATUS_META[x.status]?.tone || ""}`}>
                                        {STATUS_META[x.status]?.label || x.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="dateCol">
                                        <div>{fmtDate(x.lastMovementAt)}</div>
                                        <div className="muted">{fmtTime(x.lastMovementAt)}</div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={9}>
                                    <Styled.Empty>
                                        <div className="icon">📦</div>
                                        <div className="title">No lots match your filters</div>
                                        <div className="desc">Try resetting filters or search with a different term.</div>
                                    </Styled.Empty>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Styled.TableWrap>

            {/* Drawer */}
            {selected && (
                <Styled.Drawer
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="lot-title"
                    onMouseDown={(e) => {
                        // click on the dark backdrop closes; clicks inside the sheet don’t
                        if (e.target === e.currentTarget) onCloseDrawer();
                    }}
                >
                    <div className="sheet" onMouseDown={(e) => e.stopPropagation()}>
                        {/* floating close button */}
                        <button className="closeX" onClick={onCloseDrawer} aria-label="Close panel">
                            <span aria-hidden>×</span>
                        </button>

                        <header className="hdr">
                            <div>
                                <h2 id="lot-title">{selected.productName}</h2>
                                <div className="sub">
                                    <span className="id">{selected.id}</span> • <span className="sku">{selected.sku}</span>
                                </div>
                            </div>
                            <div className="hdr-actions">
                                <button className="btnGhost" onClick={onCloseDrawer}>Close</button>
                                <button className="btnPrimary" onClick={printLabel}>Print</button>
                            </div>
                        </header>

                        <div className="body">
                            <section className="card info">
                                <div className="grid">
                                    <div>
                                        <div className="label">Batch</div>
                                        <div className="value">{selected.batch}</div>
                                    </div>
                                    <div>
                                        <div className="label">Expiry</div>
                                        <div className="value">{fmtDate(selected.expiry)}</div>
                                    </div>
                                    <div>
                                        <div className="label">Manufactured</div>
                                        <div className="value">{fmtDate(selected.mfg)}</div>
                                    </div>
                                    <div>
                                        <div className="label">Warehouse</div>
                                        <div className="value">{selected.warehouse}</div>
                                    </div>
                                    <div>
                                        <div className="label">Bin</div>
                                        <div className="value">{selected.bin}</div>
                                    </div>
                                    <div>
                                        <div className="label">Supplier</div>
                                        <div className="value">{selected.supplier}</div>
                                    </div>
                                    <div>
                                        <div className="label">On Hand</div>
                                        <div className="value">{selected.qtyOnHand}</div>
                                    </div>
                                    <div>
                                        <div className="label">Reserved</div>
                                        <div className="value">{selected.qtyReserved}</div>
                                    </div>
                                    <div>
                                        <div className="label">Available</div>
                                        <div className="value">{selected.qtyAvailable}</div>
                                    </div>
                                    <div>
                                        <div className="label">Unit Cost</div>
                                        <div className="value">₹{selected.unitCost.toFixed(2)}</div>
                                    </div>
                                    <div>
                                        <div className="label">MRP</div>
                                        <div className="value">₹{selected.mrp.toFixed(2)}</div>
                                    </div>
                                    <div>
                                        <div className="label">Valuation</div>
                                        <div className="value">₹{selected.valuation}</div>
                                    </div>
                                </div>

                                <div className="chips">
                                    <span className={`badge ${STATUS_META[selected.status]?.tone || ""}`}>
                                        {STATUS_META[selected.status]?.label || selected.status}
                                    </span>
                                    <span className="badge soft">{selected.productId}</span>
                                </div>

                                <div className="actions">
                                    <button className="btnGhost" onClick={() => setDemoModal({ title: "Adjust Stock", msg: "Disabled in demo." })}>
                                        Adjust Stock
                                    </button>
                                    <button className="btnGhost" onClick={() => setDemoModal({ title: "Archive Lot", msg: "Disabled in demo." })}>
                                        Archive
                                    </button>
                                    <button className="btnGhost" onClick={() => setDemoModal({ title: "Relabel", msg: "Disabled in demo." })}>
                                        Relabel
                                    </button>
                                </div>
                            </section>

                            <section className="card">
                                <h3>Activity</h3>
                                <ul className="timeline">
                                    <li>
                                        <span className="dot" />
                                        <div>
                                            <strong>Transfer to {selected.warehouse}/{selected.bin}</strong>
                                            <div className="muted">{fmtDateTime(selected.lastMovementAt)}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="dot" />
                                        <div>
                                            <strong>Received</strong>
                                            <div className="muted">{fmtDateTime(selected.receivedAt)}</div>
                                        </div>
                                    </li>
                                </ul>
                            </section>

                            {/* Printable area */}
                            <section className="card printCard" id="search-print-area" ref={printRef}>
                                <div className="labelTop">
                                    <div className="big">{selected.productName}</div>
                                    <div className="sub">SKU: {selected.sku} • Batch: {selected.batch}</div>
                                </div>
                                <div className="grid two">
                                    <div>
                                        <div className="kv"><span className="k">Lot</span><span className="v">{selected.id}</span></div>
                                        <div className="kv"><span className="k">Expiry</span><span className="v">{fmtDate(selected.expiry)}</span></div>
                                        <div className="kv"><span className="k">Warehouse</span><span className="v">{selected.warehouse}</span></div>
                                        <div className="kv"><span className="k">Bin</span><span className="v">{selected.bin}</span></div>
                                    </div>
                                    <div>
                                        <div className="kv"><span className="k">On Hand</span><span className="v">{selected.qtyOnHand}</span></div>
                                        <div className="kv"><span className="k">Reserved</span><span className="v">{selected.qtyReserved}</span></div>
                                        <div className="kv"><span className="k">Available</span><span className="v">{selected.qtyAvailable}</span></div>
                                        <div className="kv"><span className="k">Supplier</span><span className="v">{selected.supplier}</span></div>
                                    </div>
                                </div>
                                <div className="footer">Generated: {fmtDateTime(new Date())}</div>
                            </section>
                        </div>
                    </div>
                </Styled.Drawer>
            )}

            {/* Demo modal */}
            {demoModal && (
                <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={() => setDemoModal(null)}>
                    <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                        <header>
                            <h4>{demoModal.title}</h4>
                        </header>
                        <div className="body">
                            <p>{demoModal.msg}</p>
                        </div>
                        <footer>
                            <button className="btnGhost" onClick={() => setDemoModal(null)}>Close</button>
                        </footer>
                    </Styled.Modal>
                </Styled.Overlay>
            )}
        </Styled.Page>
    );
};

export default Lots;
