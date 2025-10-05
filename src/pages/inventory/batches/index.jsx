import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* -----------------------------
   Date / time formatting utils
   ----------------------------- */
const fmt = (d, withTime = false) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* -----------------------------
   Demo dataset (display-only)
   Precomputed fields: daysLeft, status, lowStock
   ----------------------------- */
const ROWS = [
    {
        id: "BATCH-AX89", productId: "PROD-AMOX-500", product: "Amoxicillin 500mg", sku: "MED-AMOX-500",
        form: "Capsule", strength: "500mg", manufacturer: "Sun Pharma",
        mfg: "2025-04-15", expiry: "2026-03-31", daysLeft: 177, qty: 240, lowStock: false,
        warehouse: "WH-DEL-01", lot: "LOT-DEL-23-09", receivedOn: "2025-09-22T10:35:20+05:30",
        unitCost: 11.25, mrp: 28.00, gst: 12, hsn: "3003", status: "ok"
    },
    {
        id: "BATCH-CE12", productId: "PROD-CEFA-250", product: "Cefalexin 250mg", sku: "MED-CEFA-250",
        form: "Tablet", strength: "250mg", manufacturer: "Cipla",
        mfg: "2025-03-10", expiry: "2025-11-30", daysLeft: 56, qty: 42, lowStock: true,
        warehouse: "WH-DEL-02", lot: "LOT-DEL-24-01", receivedOn: "2025-08-12T09:10:44+05:30",
        unitCost: 3.9, mrp: 10.00, gst: 12, hsn: "3003", status: "near"
    },
    {
        id: "BATCH-PZ07", productId: "PROD-PARA-650", product: "Paracetamol 650mg", sku: "MED-PARA-650",
        form: "Tablet", strength: "650mg", manufacturer: "Dr. Reddy's",
        mfg: "2025-02-05", expiry: "2027-01-31", daysLeft: 483, qty: 980, lowStock: false,
        warehouse: "WH-MUM-01", lot: "LOT-MUM-25-02", receivedOn: "2025-07-03T14:22:01+05:30",
        unitCost: 1.65, mrp: 4.00, gst: 5, hsn: "3004", status: "ok"
    },
    {
        id: "BATCH-IB77", productId: "PROD-IBU-400", product: "Ibuprofen 400mg", sku: "MED-IBU-400",
        form: "Tablet", strength: "400mg", manufacturer: "Torrent",
        mfg: "2024-12-12", expiry: "2025-09-10", daysLeft: -24, qty: 18, lowStock: true,
        warehouse: "WH-DEL-01", lot: "LOT-DEL-24-07", receivedOn: "2025-04-01T11:05:31+05:30",
        unitCost: 1.95, mrp: 5.50, gst: 12, hsn: "3004", status: "expired"
    },
    {
        id: "BATCH-OF23", productId: "PROD-OFLOX-200", product: "Ofloxacin 200mg", sku: "MED-OFLOX-200",
        form: "Tablet", strength: "200mg", manufacturer: "Alkem",
        mfg: "2025-01-20", expiry: "2026-05-31", daysLeft: 239, qty: 120, lowStock: false,
        warehouse: "WH-MUM-02", lot: "LOT-MUM-25-03", receivedOn: "2025-06-18T10:09:22+05:30",
        unitCost: 4.5, mrp: 12.00, gst: 12, hsn: "3004", status: "ok"
    },
    {
        id: "BATCH-MT10", productId: "PROD-MET-500", product: "Metformin 500mg", sku: "MED-MET-500",
        form: "Tablet", strength: "500mg", manufacturer: "Zydus",
        mfg: "2025-05-02", expiry: "2026-02-28", daysLeft: 146, qty: 65, lowStock: false,
        warehouse: "WH-DEL-01", lot: "LOT-DEL-25-05", receivedOn: "2025-09-05T16:40:10+05:30",
        unitCost: 0.85, mrp: 2.00, gst: 5, hsn: "3004", status: "ok"
    },
    {
        id: "BATCH-AT21", productId: "PROD-ATOR-10", product: "Atorvastatin 10mg", sku: "MED-ATOR-10",
        form: "Tablet", strength: "10mg", manufacturer: "Pfizer",
        mfg: "2025-03-25", expiry: "2025-12-15", daysLeft: 71, qty: 28, lowStock: true,
        warehouse: "WH-KOL-01", lot: "LOT-KOL-25-04", receivedOn: "2025-08-30T13:28:44+05:30",
        unitCost: 3.1, mrp: 8.50, gst: 12, hsn: "3004", status: "near"
    },
    {
        id: "BATCH-CT45", productId: "PROD-CET-10", product: "Cetirizine 10mg", sku: "MED-CET-10",
        form: "Tablet", strength: "10mg", manufacturer: "Glenmark",
        mfg: "2025-06-01", expiry: "2027-05-31", daysLeft: 603, qty: 410, lowStock: false,
        warehouse: "WH-DEL-02", lot: "LOT-DEL-25-06", receivedOn: "2025-09-10T12:05:59+05:30",
        unitCost: 0.75, mrp: 2.00, gst: 5, hsn: "3004", status: "ok"
    },
    {
        id: "BATCH-OM33", productId: "PROD-OMEP-20", product: "Omeprazole 20mg", sku: "MED-OMEP-20",
        form: "Capsule", strength: "20mg", manufacturer: "Intas",
        mfg: "2025-04-02", expiry: "2026-01-15", daysLeft: 102, qty: 52, lowStock: false,
        warehouse: "WH-MUM-01", lot: "LOT-MUM-25-04", receivedOn: "2025-08-20T18:12:02+05:30",
        unitCost: 1.2, mrp: 3.20, gst: 5, hsn: "3004", status: "near"
    },
    {
        id: "BATCH-AZ90", productId: "PROD-AZITH-500", product: "Azithromycin 500mg", sku: "MED-AZITH-500",
        form: "Tablet", strength: "500mg", manufacturer: "Aurobindo",
        mfg: "2025-02-14", expiry: "2025-08-31", daysLeft: -35, qty: 9, lowStock: true,
        warehouse: "WH-DEL-01", lot: "LOT-DEL-25-02", receivedOn: "2025-03-10T10:01:25+05:30",
        unitCost: 12.5, mrp: 35.00, gst: 12, hsn: "3004", status: "expired"
    },
    {
        id: "BATCH-DS61", productId: "PROD-D3-60K", product: "Cholecalciferol 60k", sku: "MED-D3-60K",
        form: "Capsule", strength: "60000 IU", manufacturer: "Mankind",
        mfg: "2025-06-12", expiry: "2027-06-30", daysLeft: 633, qty: 205, lowStock: false,
        warehouse: "WH-KOL-01", lot: "LOT-KOL-25-05", receivedOn: "2025-09-22T19:20:11+05:30",
        unitCost: 9.0, mrp: 22.00, gst: 12, hsn: "3004", status: "ok"
    },
    {
        id: "BATCH-RS18", productId: "PROD-RABE-20", product: "Rabeprazole 20mg", sku: "MED-RABE-20",
        form: "Tablet", strength: "20mg", manufacturer: "Lupin",
        mfg: "2025-03-22", expiry: "2026-04-30", daysLeft: 208, qty: 33, lowStock: true,
        warehouse: "WH-DEL-02", lot: "LOT-DEL-25-08", receivedOn: "2025-09-12T09:45:00+05:30",
        unitCost: 2.2, mrp: 6.00, gst: 12, hsn: "3004", status: "ok"
    }
];

/* -----------------------------
   Helpers
   ----------------------------- */
const STATUS_LABEL = {
    ok: "OK",
    near: "Near Expiry",
    expired: "Expired",
};

const formatCurrency = (n) => `₹${Number(n).toFixed(2)}`;

/* -----------------------------
   Component
   ----------------------------- */
const Batches = () => {
    const printRef = useRef(null);
    const [query, setQuery] = useState("");
    const [quick, setQuick] = useState("all"); // all | near | expired | low
    const [sortKey, setSortKey] = useState("expiry"); // expiry | qty | product
    const [sortDir, setSortDir] = useState("asc"); // asc | desc
    const [labelFor, setLabelFor] = useState(null); // row for label modal

    const stats = useMemo(() => {
        const total = ROWS.length;
        const near = ROWS.filter(r => r.status === "near").length;
        const expired = ROWS.filter(r => r.status === "expired").length;
        const qty = ROWS.reduce((acc, r) => acc + r.qty, 0);
        return { total, near, expired, qty };
    }, []);

    const filtered = useMemo(() => {
        let arr = ROWS;
        // quick filter
        if (quick === "near") arr = arr.filter(r => r.status === "near");
        if (quick === "expired") arr = arr.filter(r => r.status === "expired");
        if (quick === "low") arr = arr.filter(r => r.lowStock);
        // text filter
        const q = query.trim().toLowerCase();
        if (q) {
            arr = arr.filter(r =>
                [r.product, r.sku, r.id, r.manufacturer, r.warehouse, r.lot]
                    .join(" ")
                    .toLowerCase()
                    .includes(q)
            );
        }
        // sort
        const s = [...arr].sort((a, b) => {
            const mult = sortDir === "asc" ? 1 : -1;
            if (sortKey === "product") return a.product.localeCompare(b.product) * mult;
            if (sortKey === "qty") return (a.qty - b.qty) * mult;
            if (sortKey === "expiry") return (new Date(a.expiry) - new Date(b.expiry)) * mult;
            return 0;
        });
        return s;
    }, [query, quick, sortKey, sortDir]);

    const setSort = (key) => {
        if (sortKey === key) {
            setSortDir((d) => (d === "asc" ? "desc" : "asc"));
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    };

    const printSummary = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const printLabel = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const exportCSV = () => {
        const cols = ["Batch", "Product", "SKU", "Form", "Strength", "Mfg", "Expiry", "DaysLeft", "Qty", "Status", "Warehouse", "Lot", "ReceivedOn", "UnitCost", "MRP", "GST%", "HSN"];
        const lines = [cols.join(",")];
        filtered.forEach(r => {
            lines.push([
                r.id, r.product, r.sku, r.form, r.strength,
                fmt(r.mfg), fmt(r.expiry), r.daysLeft, r.qty, STATUS_LABEL[r.status],
                r.warehouse, r.lot, fmt(r.receivedOn, true), r.unitCost, r.mrp, r.gst, r.hsn
            ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(","));
        });
        const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "batches.csv"; a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <Styled.Page>
            {/* print styles (summary + label) */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #label-print-area,
          body.print-section-mode #search-print-area * ,
          body.print-section-mode #label-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #label-print-area {
            position: absolute !important; left:0; top:0; width:100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="lhs">
                    <h1>Inventory — Batches</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/inventory" end>Inventory</NavLink>
                        <span>/</span>
                        <span className="current">Batches</span>
                    </nav>
                    <div className="meta">
                        <span>Total: {stats.total}</span>
                        <span>•</span>
                        <span>Near: {stats.near}</span>
                        <span>•</span>
                        <span>Expired: {stats.expired}</span>
                        <span>•</span>
                        <span>Qty: {stats.qty}</span>
                    </div>
                </div>
                <div className="rhs">
                    <button className="btnGhost" aria-disabled title="Demo only">New Batch</button>
                    <button className="btnGhost" aria-disabled title="Demo only">Adjust</button>
                    <button className="btnGhost" aria-disabled title="Demo only">Transfer</button>
                    <button className="btnPrimary" onClick={exportCSV}>Export CSV</button>
                    <button className="btnPrimary" onClick={printSummary}>Print</button>
                </div>
            </Styled.Header>

            <Styled.Stats>
                <div className="kpi card">
                    <div className="label">Total Batches</div>
                    <div className="value">{stats.total}</div>
                    <div className="sub">as on {fmt(new Date(), true)}</div>
                </div>
                <div className="kpi card">
                    <div className="label">Near Expiry</div>
                    <div className="value">{stats.near}</div>
                    <div className="sub">≤ 60 days</div>
                </div>
                <div className="kpi card">
                    <div className="label">Expired</div>
                    <div className="value">{stats.expired}</div>
                    <div className="sub">action required</div>
                </div>
                <div className="kpi card">
                    <div className="label">Total Quantity</div>
                    <div className="value">{stats.qty}</div>
                    <div className="sub">all warehouses</div>
                </div>
            </Styled.Stats>

            <Styled.Toolbar className="card">
                <div className="search">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search: product, SKU, batch, manufacturer, warehouse, lot…"
                        aria-label="Search batches"
                    />
                </div>
                <div className="filters">
                    <button className={quick === "all" ? "chip active" : "chip"} onClick={() => setQuick("all")}>All</button>
                    <button className={quick === "near" ? "chip active" : "chip"} onClick={() => setQuick("near")}>Near Expiry</button>
                    <button className={quick === "expired" ? "chip active" : "chip"} onClick={() => setQuick("expired")}>Expired</button>
                    <button className={quick === "low" ? "chip active" : "chip"} onClick={() => setQuick("low")}>Low Stock</button>
                </div>
                <div className="sort">
                    <span>Sort:</span>
                    <button className={sortKey === "expiry" ? "link active" : "link"} onClick={() => setSort("expiry")}>
                        Expiry {sortKey === "expiry" ? (sortDir === "asc" ? "▴" : "▾") : ""}
                    </button>
                    <button className={sortKey === "qty" ? "link active" : "link"} onClick={() => setSort("qty")}>
                        Qty {sortKey === "qty" ? (sortDir === "asc" ? "▴" : "▾") : ""}
                    </button>
                    <button className={sortKey === "product" ? "link active" : "link"} onClick={() => setSort("product")}>
                        Product {sortKey === "product" ? (sortDir === "asc" ? "▴" : "▾") : ""}
                    </button>
                </div>
            </Styled.Toolbar>

            <Styled.Grid>
                <Styled.TableWrap className="card">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: 26 }}><input type="checkbox" disabled aria-label="Select all (disabled)" /></th>
                                <th>Batch</th>
                                <th>Product</th>
                                <th>SKU</th>
                                <th>Form</th>
                                <th>Strength</th>
                                <th>Manufacturer</th>
                                <th>Warehouse</th>
                                <th>Lot</th>
                                <th>Received</th>
                                <th>Expiry</th>
                                <th>Days</th>
                                <th>Qty</th>
                                <th>Unit</th>
                                <th>MRP</th>
                                <th>GST</th>
                                <th>HSN</th>
                                <th>Status</th>
                                <th style={{ width: 180 }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(r => (
                                <tr key={r.id} data-state={r.status}>
                                    <td><input type="checkbox" disabled aria-label={`Select ${r.id} (disabled)`} /></td>
                                    <td className="mono">{r.id}</td>
                                    <td>
                                        <div className="prod">
                                            <div className="nm">{r.product}</div>
                                            <NavLink className="subLink" to={`/products/${r.productId}`}>Open Product</NavLink>
                                        </div>
                                    </td>
                                    <td className="mono">{r.sku}</td>
                                    <td>{r.form}</td>
                                    <td className="mono">{r.strength}</td>
                                    <td>{r.manufacturer}</td>
                                    <td className="mono">{r.warehouse}</td>
                                    <td className="mono">{r.lot}</td>
                                    <td className="mono">{fmt(r.receivedOn, true)}</td>
                                    <td className="mono">{fmt(r.expiry)}</td>
                                    <td className="mono">{r.daysLeft}</td>
                                    <td className="mono">{r.qty}</td>
                                    <td className="mono">{formatCurrency(r.unitCost)}</td>
                                    <td className="mono">{formatCurrency(r.mrp)}</td>
                                    <td className="mono">{r.gst}%</td>
                                    <td className="mono">{r.hsn}</td>
                                    <td>
                                        <span className={`status ${r.status}`}>
                                            {STATUS_LABEL[r.status]}
                                        </span>
                                    </td>
                                    <td className="actions">
                                        <button className="btnGhost small" onClick={() => setLabelFor(r)}>Label</button>
                                        <NavLink className="btnGhost small" to="/inventory/transfers" title="Movement / Transfers">Movement</NavLink>
                                        <button className="btnGhost small" aria-disabled title="Demo only">Mark Damaged</button>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={19}>
                                        <Styled.Empty>
                                            <div className="icon" aria-hidden>📦</div>
                                            <h4>No batches found</h4>
                                            <p>Try clearing filters or searching a different keyword.</p>
                                        </Styled.Empty>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Styled.TableWrap>

                {/* printable summary on the right */}
                <aside className="side">
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3 className="sideTitle">Print Summary — Batches</h3>
                        <div className="printBlock">
                            <div className="line"><span className="k">Printed</span><span className="v">{fmt(new Date(), true)}</span></div>
                            <div className="line"><span className="k">Total Batches</span><span className="v">{stats.total}</span></div>
                            <div className="line"><span className="k">Near Expiry</span><span className="v">{stats.near}</span></div>
                            <div className="line"><span className="k">Expired</span><span className="v">{stats.expired}</span></div>
                            <div className="line"><span className="k">Total Quantity</span><span className="v">{stats.qty}</span></div>
                            <div className="line"><span className="k">Quick Filter</span><span className="v">{quick}</span></div>
                            <div className="line"><span className="k">Search</span><span className="v">{query || "—"}</span></div>
                        </div>
                    </div>

                    <div className="card tips">
                        <h3 className="sideTitle">Tips</h3>
                        <ul>
                            <li>Use search for SKU, batch, lot, warehouse.</li>
                            <li>“Label” shows a printable preview for the selected batch.</li>
                            <li>All create/update actions are disabled in demo.</li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            {/* Label modal */}
            {labelFor && (
                <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={() => setLabelFor(null)}>
                    <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                        <header>
                            <h4>Label Preview — {labelFor.id}</h4>
                        </header>
                        <div className="body">
                            <div className="labelWrap" id="label-print-area">
                                <div className="labelHeader">
                                    <div className="brand">Warehouse: {labelFor.warehouse}</div>
                                    <div className="date">{fmt(new Date(), true)}</div>
                                </div>
                                <div className="labelMain">
                                    <div className="big">{labelFor.product}</div>
                                    <div className="meta">
                                        <span>SKU: {labelFor.sku}</span>
                                        <span>Batch: {labelFor.id}</span>
                                        <span>Lot: {labelFor.lot}</span>
                                        <span>Qty: {labelFor.qty}</span>
                                    </div>
                                    <div className="meta">
                                        <span>Form: {labelFor.form}</span>
                                        <span>Strength: {labelFor.strength}</span>
                                    </div>
                                    <div className="meta">
                                        <span>Mfg: {fmt(labelFor.mfg)}</span>
                                        <span>Exp: {fmt(labelFor.expiry)}</span>
                                    </div>
                                    <div className="barcode" aria-hidden />
                                </div>
                                <div className="labelFooter">
                                    <span>MRP: {formatCurrency(labelFor.mrp)}</span>
                                    <span>GST: {labelFor.gst}%</span>
                                    <span>HSN: {labelFor.hsn}</span>
                                </div>
                            </div>
                        </div>
                        <footer>
                            <button className="btnGhost" onClick={() => setLabelFor(null)}>Close</button>
                            <button className="btnPrimary" onClick={printLabel}>Print Label</button>
                        </footer>
                    </Styled.Modal>
                </Styled.Overlay>
            )}
        </Styled.Page>
    );
};

export default Batches;
