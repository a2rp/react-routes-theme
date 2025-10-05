import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { FiPrinter, FiDownload, FiLink2, FiSliders, FiFilter, FiX, FiInfo } from "react-icons/fi";

/** ------------ date/time format helpers (app-wide style) ------------ */
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmtDate(d) {
    const dt = new Date(d);
    return `${WEEKDAYS[dt.getDay()]} ${MONTHS[dt.getMonth()]} ${String(dt.getDate()).padStart(2, "0")} ${dt.getFullYear()}`;
}
function fmtTime(d) {
    const dt = new Date(d);
    const hh = String(dt.getHours()).padStart(2, "0");
    const mm = String(dt.getMinutes()).padStart(2, "0");
    const ss = String(dt.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
}
function fmtDateTime(d) {
    return `${fmtDate(d)} ${fmtTime(d)}`;
}

/** ------------ demo/fallback build stamps (if defined in Vite) ------------ */
const BUILD_ISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
const COMMIT_ISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : BUILD_ISO;

/** ------------ tiny utilities ------------ */
function downloadJSON(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
}
function downloadCSV(filename, rows) {
    if (!rows?.length) return;
    const headers = Object.keys(rows[0]);
    const escape = (v) => `"${String(v ?? "").replaceAll(`"`, `""`)}"`;
    const csv = [
        headers.map(escape).join(","),
        ...rows.map(r => headers.map(h => escape(r[h])).join(","))
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
}

/** ------------ sample (display-only) datasets ------------ */
const topMovers = [
    { id: "PROD-1001", name: "N95 Respirator Mask", sku: "MASK-N95-10", cat: "PPE", uom: "Pack", soH: 820, monthlyOut: 540, route: "/products/PROD-1001" },
    { id: "MED-AMOX-500", name: "Amoxicillin 500mg", sku: "MED-AMOX-500", cat: "Antibiotic", uom: "Strip", soH: 1200, monthlyOut: 480, route: "/medicines/MED-AMOX-500" },
    { id: "PROD-1019", name: "Infrared Thermometer", sku: "THERMO-IR", cat: "Devices", uom: "Unit", soH: 145, monthlyOut: 132, route: "/products/PROD-1019" },
    { id: "PROD-1027", name: "3-Ply Surgical Mask", sku: "MASK-3PLY-50", cat: "PPE", uom: "Box", soH: 650, monthlyOut: 410, route: "/products/PROD-1027" },
];
const lowStock = [
    { id: "MED-PCM-650", name: "Paracetamol 650mg", sku: "MED-PCM-650", cat: "Analgesic", uom: "Strip", reOrder: 120, soH: 90, route: "/medicines/MED-PCM-650" },
    { id: "PROD-2002", name: "IV Cannula 20G", sku: "IV-20G", cat: "Consumable", uom: "Unit", reOrder: 300, soH: 120, route: "/products/PROD-2002" },
    { id: "PROD-2005", name: "Alcohol Swab 70%", sku: "AS-70-100", cat: "Consumable", uom: "Box", reOrder: 80, soH: 62, route: "/products/PROD-2005" },
];
const nearExpiry = [
    { id: "MED-OMEP-20", name: "Omeprazole 20mg", sku: "MED-OMEP-20", batch: "B-0925", exp: "2026-01-15T00:00:00Z", soH: 220, route: "/medicines/MED-OMEP-20" },
    { id: "MED-ATV-10", name: "Atorvastatin 10mg", sku: "MED-ATV-10", batch: "B-0825", exp: "2025-12-05T00:00:00Z", soH: 140, route: "/medicines/MED-ATV-10" },
    { id: "PROD-3001", name: "Vitamin C Chewable", sku: "VITC-500", batch: "B-0725", exp: "2025-11-18T00:00:00Z", soH: 95, route: "/products/PROD-3001" },
];
const categoryValuation = [
    { cat: "PPE", items: 22, sohUnits: 4600, value: "₹ 9,80,000" },
    { cat: "Antibiotic", items: 48, sohUnits: 8200, value: "₹ 12,45,000" },
    { cat: "Devices", items: 17, sohUnits: 730, value: "₹ 6,70,500" },
    { cat: "Consumable", items: 65, sohUnits: 14200, value: "₹ 7,60,300" },
];

/** tables → quick CSV exports */
const csvTopMovers = topMovers.map(x => ({
    id: x.id, name: x.name, sku: x.sku, category: x.cat, uom: x.uom, stock_on_hand: x.soH, monthly_out: x.monthlyOut
}));
const csvLowStock = lowStock.map(x => ({
    id: x.id, name: x.name, sku: x.sku, category: x.cat, uom: x.uom, reorder_level: x.reOrder, stock_on_hand: x.soH
}));
const csvNearExpiry = nearExpiry.map(x => ({
    id: x.id, name: x.name, sku: x.sku, batch: x.batch, expiry: fmtDate(x.exp), stock_on_hand: x.soH
}));
const csvValuation = categoryValuation.map(x => ({
    category: x.cat, items: x.items, soh_units: x.sohUnits, value: x.value
}));

/** simple custom modal */
function DemoModal({ open, onClose, title = "Action unavailable", desc = "This is a demo. Actions are disabled." }) {
    if (!open) return null;
    return (
        <Styled.ModalBackdrop role="dialog" aria-modal="true">
            <Styled.ModalCard className="card">
                <div className="modalHead">
                    <div className="title">{title}</div>
                    <button className="iconBtn" onClick={onClose} aria-label="Close"><FiX /></button>
                </div>
                <div className="modalBody">
                    <p>{desc}</p>
                </div>
                <div className="modalFoot">
                    <button onClick={onClose}>Close</button>
                </div>
            </Styled.ModalCard>
        </Styled.ModalBackdrop>
    );
}

export default function ReportInventory() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const generatedAt = useMemo(() => new Date(), []);
    const lastUpdated = useMemo(() => COMMIT_ISO || BUILD_ISO, []);

    const doPrint = () => {
        const body = document.body;
        body.classList.add("print-section-mode");
        window.requestAnimationFrame(() => {
            window.print();
            setTimeout(() => body.classList.remove("print-section-mode"), 0);
        });
    };

    const doCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setModalOpen(true);
        } catch {
            setModalOpen(true);
        }
    };

    return (
        <Styled.Page>
            {/* print CSS (section-only) */}
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

            {/* header */}
            <Styled.Header className="card">
                <div className="left">
                    <div className="breadcrumbs">
                        <NavLink to="/home">Home</NavLink>
                        <span>/</span>
                        <NavLink to="/reports">Reports</NavLink>
                        <span>/</span>
                        <strong>Inventory</strong>
                    </div>
                    <h1>Inventory Report</h1>
                    <div className="meta">
                        <span title={fmtDateTime(generatedAt)}><FiInfo /> Generated: {fmtDateTime(generatedAt)}</span>
                        <span title={fmtDateTime(lastUpdated)}><FiInfo /> Last updated: {fmtDateTime(lastUpdated)}</span>
                    </div>
                </div>

                <div className="right">
                    <div className="toolbar">
                        <button onClick={doPrint} title="Print report"><FiPrinter /> Print</button>
                        <button onClick={() => downloadJSON("inventory-report.json", { topMovers, lowStock, nearExpiry, categoryValuation, generatedAt })} title="Download as JSON"><FiDownload /> JSON</button>
                        <button onClick={() => downloadCSV("inventory-top-movers.csv", csvTopMovers)} title="Export Top Movers CSV"><FiDownload /> Top Movers CSV</button>
                        <button onClick={() => downloadCSV("inventory-low-stock.csv", csvLowStock)} title="Export Low Stock CSV"><FiDownload /> Low Stock CSV</button>
                        <button onClick={() => downloadCSV("inventory-near-expiry.csv", csvNearExpiry)} title="Export Near Expiry CSV"><FiDownload /> Near Expiry CSV</button>
                        <button onClick={() => downloadCSV("inventory-valuation.csv", csvValuation)} title="Export Valuation CSV"><FiDownload /> Valuation CSV</button>
                        <button onClick={doCopyLink} title="Copy link to this report"><FiLink2 /> Copy Link</button>
                    </div>
                    <div className="quickLinks">
                        <NavLink to="/inventory">Inventory</NavLink>
                        <NavLink to="/inventory/lots">Lots</NavLink>
                        <NavLink to="/inventory/batches">Batches</NavLink>
                        <NavLink to="/inventory/transfers">Transfers</NavLink>
                        <NavLink to="/inventory/warehouses">Warehouses</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/medicines">Medicines</NavLink>
                        <NavLink to="/medicines/expiry-tracker">Expiry Tracker</NavLink>
                        <NavLink to="/reports">All Reports</NavLink>
                        <NavLink to="/reports/sales">Sales Report</NavLink>
                        <NavLink to="/reports/procurement">Procurement Report</NavLink>
                        <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                    </div>
                </div>
            </Styled.Header>

            {/* filters + view options */}
            <Styled.Filters className="card">
                <div className="row">
                    <div className="group">
                        <div className="label"><FiFilter /> Timeframe</div>
                        <div className="chips">
                            <button aria-pressed="true">Last 30 days</button>
                            <button>Last 7 days</button>
                            <button>Today</button>
                            <button>Q2 FY25–26</button>
                            <button>FY25–26</button>
                            <button disabled title="Demo">Custom…</button>
                        </div>
                    </div>

                    <div className="group">
                        <div className="label"><FiSliders /> Scope</div>
                        <div className="chips">
                            <button aria-pressed="true">All Warehouses</button>
                            <button>WH-Mumbai</button>
                            <button>WH-Delhi</button>
                            <button>WH-Bengaluru</button>
                        </div>
                    </div>

                    <div className="group">
                        <div className="label">Category</div>
                        <div className="chips">
                            <button aria-pressed="true">All</button>
                            <button>PPE</button>
                            <button>Antibiotic</button>
                            <button>Devices</button>
                            <button>Consumable</button>
                        </div>
                    </div>

                    <div className="spacer" />

                    <div className="actions">
                        <button disabled title="Demo only">Save View</button>
                        <button onClick={() => setModalOpen(true)}>Schedule Email</button>
                    </div>
                </div>
            </Styled.Filters>

            {/* printable area */}
            <div id="search-print-area">
                {/* KPIs */}
                <Styled.Kpis>
                    <div className="kpi card">
                        <div className="k">Stock on Hand (Units)</div>
                        <div className="v">27,530</div>
                        <div className="s">All warehouses</div>
                    </div>
                    <div className="kpi card">
                        <div className="k">Inventory Valuation</div>
                        <div className="v">₹ 36,55,800</div>
                        <div className="s">MRP · display-only</div>
                    </div>
                    <div className="kpi card">
                        <div className="k">Unique SKUs</div>
                        <div className="v">1,218</div>
                        <div className="s">Active catalog</div>
                    </div>
                    <div className="kpi card">
                        <div className="k">Warehouses</div>
                        <div className="v">3</div>
                        <div className="s">Mumbai · Delhi · Bengaluru</div>
                    </div>
                    <div className="kpi card">
                        <div className="k">Out of Stock</div>
                        <div className="v">31</div>
                        <div className="s"><NavLink to="/inventory/reorder">View reorder</NavLink></div>
                    </div>
                    <div className="kpi card">
                        <div className="k">Near Expiry (≤90d)</div>
                        <div className="v">12</div>
                        <div className="s"><NavLink to="/medicines/expiry-tracker">Open tracker</NavLink></div>
                    </div>
                </Styled.Kpis>

                {/* Top movers */}
                <Styled.TableCard className="card">
                    <div className="head">
                        <h2>Top Movers</h2>
                        <div className="headActions">
                            <NavLink to="/reports/sales">Sales Report</NavLink>
                            <NavLink to="/products">Catalog</NavLink>
                            <button onClick={() => downloadCSV("inventory-top-movers.csv", csvTopMovers)}><FiDownload /> CSV</button>
                        </div>
                    </div>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>SKU</th>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>UoM</th>
                                    <th className="num">Stock on Hand</th>
                                    <th className="num">Monthly Out</th>
                                    <th>Open</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topMovers.map(r => (
                                    <tr key={r.id}>
                                        <td className="mono">{r.sku}</td>
                                        <td>{r.name}</td>
                                        <td>{r.cat}</td>
                                        <td>{r.uom}</td>
                                        <td className="num">{r.soH}</td>
                                        <td className="num">{r.monthlyOut}</td>
                                        <td><NavLink to={r.route}>View</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styled.TableCard>

                {/* Low stock */}
                <Styled.TableCard className="card">
                    <div className="head">
                        <h2>Low Stock</h2>
                        <div className="headActions">
                            <NavLink to="/inventory/reorder">Reorder Planner</NavLink>
                            <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                            <button onClick={() => downloadCSV("inventory-low-stock.csv", csvLowStock)}><FiDownload /> CSV</button>
                        </div>
                    </div>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>SKU</th>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>UoM</th>
                                    <th className="num">Reorder Level</th>
                                    <th className="num">Stock on Hand</th>
                                    <th>Open</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lowStock.map(r => (
                                    <tr key={r.id}>
                                        <td className="mono">{r.sku}</td>
                                        <td>{r.name}</td>
                                        <td>{r.cat}</td>
                                        <td>{r.uom}</td>
                                        <td className="num">{r.reOrder}</td>
                                        <td className="num">{r.soH}</td>
                                        <td><NavLink to={r.route}>View</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styled.TableCard>

                {/* Near expiry */}
                <Styled.TableCard className="card">
                    <div className="head">
                        <h2>Near Expiry</h2>
                        <div className="headActions">
                            <NavLink to="/medicines/expiry-tracker">Open Tracker</NavLink>
                            <NavLink to="/inventory/batches">Batches</NavLink>
                            <button onClick={() => downloadCSV("inventory-near-expiry.csv", csvNearExpiry)}><FiDownload /> CSV</button>
                        </div>
                    </div>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>SKU</th>
                                    <th>Product</th>
                                    <th>Batch</th>
                                    <th>Expiry</th>
                                    <th className="num">Stock on Hand</th>
                                    <th>Open</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nearExpiry.map(r => (
                                    <tr key={r.id}>
                                        <td className="mono">{r.sku}</td>
                                        <td>{r.name}</td>
                                        <td className="mono">{r.batch}</td>
                                        <td>{fmtDate(r.exp)}</td>
                                        <td className="num">{r.soH}</td>
                                        <td><NavLink to={r.route}>View</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styled.TableCard>

                {/* Category valuation */}
                <Styled.TableCard className="card">
                    <div className="head">
                        <h2>Valuation by Category</h2>
                        <div className="headActions">
                            <NavLink to="/inventory">Inventory</NavLink>
                            <button onClick={() => downloadCSV("inventory-valuation.csv", csvValuation)}><FiDownload /> CSV</button>
                        </div>
                    </div>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th className="num">Items</th>
                                    <th className="num">SOH Units</th>
                                    <th className="num">Valuation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryValuation.map(r => (
                                    <tr key={r.cat}>
                                        <td>{r.cat}</td>
                                        <td className="num">{r.items}</td>
                                        <td className="num">{r.sohUnits}</td>
                                        <td className="num">{r.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styled.TableCard>

                {/* navigator strip */}
                <Styled.FooterNav className="card">
                    <div className="links">
                        <NavLink to="/reports">← Reports Home</NavLink>
                        <NavLink to="/reports/sales">Sales</NavLink>
                        <NavLink to="/reports/customers">Customers</NavLink>
                        <NavLink to="/reports/finance">Finance</NavLink>
                        <NavLink to="/reports/procurement">Procurement</NavLink>
                        <NavLink to="/reports/shipment">Shipment</NavLink>
                        <NavLink to="/reports/gst">GST</NavLink>
                        <NavLink to="/inventory">Inventory Overview →</NavLink>
                    </div>
                    <div className="stamp">Report generated on {fmtDateTime(generatedAt)}</div>
                </Styled.FooterNav>
            </div>

            <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} title="Saved!" desc="Link copied / demo action shown." />
        </Styled.Page>
    );
}
