import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* ------------------------------------------------------------------ */
/* tiny date utils (consistent formatting everywhere)                  */
/* ------------------------------------------------------------------ */
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
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ------------------------------------------------------------------ */
/* demo fixtures (display-only; no persistence)                        */
/* ------------------------------------------------------------------ */
const NOW = new Date();
const KPI = Object.freeze({
    totalSkus: "12,480",
    totalUnits: "1,487,265",
    warehouses: 5,
    nearExpiry: 42,
    reorderPending: 128,
    capacityUtil: "73%",
});

const WAREHOUSES = [
    { id: "WH-ND-01", name: "New Delhi HQ", city: "New Delhi", bins: 1240, skus: 7850, units: "512,340", capacity: 82 },
    { id: "WH-MUM-02", name: "Mumbai DC", city: "Mumbai", bins: 910, skus: 5620, units: "383,904", capacity: 69 },
    { id: "WH-BLR-03", name: "Bengaluru DC", city: "Bengaluru", bins: 760, skus: 4980, units: "291,002", capacity: 61 },
    { id: "WH-KOL-04", name: "Kolkata DC", city: "Kolkata", bins: 540, skus: 3120, units: "145,833", capacity: 48 },
    { id: "WH-HYD-05", name: "Hyderabad DC", city: "Hyderabad", bins: 620, skus: 3190, units: "154,186", capacity: 52 },
];

const REORDER = [
    { sku: "MED-AMOX-500", name: "Amoxicillin 500mg Cap", onHand: 120, min: 500, vendor: "Zentis Labs", eta: "Sat Oct 11 2025" },
    { sku: "MED-PARA-650", name: "Paracetamol 650mg Tab", onHand: 980, min: 1500, vendor: "CureWell Pharma", eta: "Mon Oct 13 2025" },
    { sku: "MED-IBU-400", name: "Ibuprofen 400mg Tab", onHand: 410, min: 950, vendor: "Auric Remedies", eta: "Tue Oct 14 2025" },
    { sku: "MED-OMZ-20", name: "Omeprazole 20mg Cap", onHand: 210, min: 600, vendor: "Zeon Biocare", eta: "Wed Oct 15 2025" },
    { sku: "MED-LEV-500", name: "Levofloxacin 500mg Tab", onHand: 80, min: 300, vendor: "Silverline Labs", eta: "Fri Oct 17 2025" },
    { sku: "MED-CET-10", name: "Cetirizine 10mg Tab", onHand: 350, min: 900, vendor: "Apollo Generics", eta: "Sat Oct 18 2025" },
    { sku: "MED-RAB-20", name: "Rabeprazole 20mg Tab", onHand: 150, min: 500, vendor: "Medinova", eta: "Sun Oct 19 2025" },
];

const NEAR_EXPIRY = [
    { lot: "LOT-AZ-1221", sku: "MED-AZI-500", name: "Azithromycin 500mg Tab", exp: "Sat Nov 15 2025", wh: "New Delhi HQ", qty: 220 },
    { lot: "LOT-MET-980", sku: "MED-MET-850", name: "Metformin 850mg Tab", exp: "Sun Nov 30 2025", wh: "Mumbai DC", qty: 480 },
    { lot: "LOT-AMP-705", sku: "MED-AMPI-250", name: "Ampicillin 250mg Cap", exp: "Tue Dec 02 2025", wh: "Bengaluru DC", qty: 130 },
    { lot: "LOT-PAN-231", sku: "MED-PANT-40", name: "Pantoprazole 40mg Tab", exp: "Sat Dec 06 2025", wh: "Hyderabad DC", qty: 96 },
    { lot: "LOT-DOX-404", sku: "MED-DOXY-100", name: "Doxycycline 100mg Cap", exp: "Mon Dec 15 2025", wh: "Kolkata DC", qty: 260 },
];

const TRANSFERS = [
    { id: "TR-9001", from: "Mumbai DC", to: "New Delhi HQ", items: 12, units: 8500, when: fmtDateTime(NOW) },
    { id: "TR-9000", from: "Hyderabad DC", to: "Bengaluru DC", items: 7, units: 2900, when: "Fri Oct 03 2025 18:22:05hrs" },
    { id: "TR-8999", from: "Kolkata DC", to: "Mumbai DC", items: 4, units: 1200, when: "Fri Oct 03 2025 11:05:41hrs" },
    { id: "TR-8998", from: "New Delhi HQ", to: "Hyderabad DC", items: 15, units: 10100, when: "Thu Oct 02 2025 16:44:12hrs" },
];

/* ------------------------------------------------------------------ */

const DEMO_MODE = true;

const InventoryOverview = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    const [search, setSearch] = useState("");
    const filteredReorder = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return REORDER;
        return REORDER.filter(
            r =>
                r.sku.toLowerCase().includes(q) ||
                r.name.toLowerCase().includes(q) ||
                r.vendor.toLowerCase().includes(q)
        );
    }, [search]);

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/inventory">Inventory</NavLink>
            <span>/</span>
            <span className="current">Overview</span>
        </nav>
    );

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

    useEffect(() => {
        // no-op: page load decorations or analytics hooks could live here
    }, []);

    return (
        <Styled.Page>
            {/* print rules as requested */}
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
                    <h1>Inventory Overview</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Snapshot: {fmtDateTime(NOW)}</span>
                        <span>•</span>
                        <span>Best viewed on desktop</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate("/inventory/warehouses")} title="Go to Warehouses">Warehouses</button>
                    <button className="btnGhost" onClick={() => navigate("/inventory/transfers")} title="Go to Transfers">Transfers</button>
                    <a className="btnGhost" href="/data/inventory-snapshot.csv" download title="Export static snapshot">Export</a>
                    <button className="btnPrimary" onClick={printSection} title="Print summary">Print</button>
                    <button
                        className="btnDisabled"
                        aria-disabled="true"
                        title="Demo mode: Adjustments disabled"
                    >
                        Adjust Stock
                    </button>
                    <button
                        className="btnDisabled"
                        aria-disabled="true"
                        title="Demo mode: New transfer disabled"
                    >
                        New Transfer
                    </button>
                </div>
            </Styled.Header>

            {/* KPIs */}
            <Styled.KpiGrid>
                <section className="card kpi">
                    <div className="k">Total SKUs</div>
                    <div className="v">{KPI.totalSkus}</div>
                    <div className="hint">Across catalog</div>
                </section>
                <section className="card kpi">
                    <div className="k">Total Units</div>
                    <div className="v">{KPI.totalUnits}</div>
                    <div className="hint">All warehouses</div>
                </section>
                <section className="card kpi">
                    <div className="k">Warehouses</div>
                    <div className="v">{KPI.warehouses}</div>
                    <div className="hint">Active locations</div>
                </section>
                <section className="card kpi">
                    <div className="k">Near Expiry</div>
                    <div className="v">{KPI.nearExpiry}</div>
                    <div className="hint">Lots in next 60 days</div>
                </section>
                <section className="card kpi">
                    <div className="k">Reorder Pending</div>
                    <div className="v">{KPI.reorderPending}</div>
                    <div className="hint">Items under min</div>
                </section>
                <section className="card kpi">
                    <div className="k">Capacity Used</div>
                    <div className="v">{KPI.capacityUtil}</div>
                    <div className="hint">Average across network</div>
                </section>
            </Styled.KpiGrid>

            {/* Main grid */}
            <Styled.Grid>
                <section className="col main">
                    {/* Printable summary */}
                    <div className="card printSummary" id="search-print-area" ref={printRef}>
                        <header>
                            <h3>Snapshot Summary</h3>
                            <div className="time">Generated {fmtDateTime(NOW)}</div>
                        </header>
                        <div className="rows">
                            <div className="row"><span className="k">Total SKUs</span><span className="v">{KPI.totalSkus}</span></div>
                            <div className="row"><span className="k">Total Units</span><span className="v">{KPI.totalUnits}</span></div>
                            <div className="row"><span className="k">Warehouses</span><span className="v">{KPI.warehouses}</span></div>
                            <div className="row"><span className="k">Near Expiry</span><span className="v">{KPI.nearExpiry}</span></div>
                            <div className="row"><span className="k">Reorder Pending</span><span className="v">{KPI.reorderPending}</span></div>
                            <div className="row"><span className="k">Capacity Used</span><span className="v">{KPI.capacityUtil}</span></div>
                        </div>
                    </div>

                    {/* Warehouses capacity */}
                    <div className="card">
                        <header className="cardHeader">
                            <h3>Warehouses & Capacity</h3>
                            <NavLink to="/inventory/warehouses" className="link">View all</NavLink>
                        </header>

                        <Styled.Table>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Warehouse</th>
                                        <th>City</th>
                                        <th>Bins</th>
                                        <th>SKUs</th>
                                        <th>Units</th>
                                        <th>Capacity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {WAREHOUSES.map(w => (
                                        <tr key={w.id}>
                                            <td><NavLink to={`/inventory/warehouses`} title="Open warehouses">{w.id}</NavLink></td>
                                            <td>{w.name}</td>
                                            <td>{w.city}</td>
                                            <td className="num">{w.bins}</td>
                                            <td className="num">{w.skus}</td>
                                            <td className="num">{w.units}</td>
                                            <td>
                                                <Styled.Progress value={w.capacity}>
                                                    <span style={{ width: `${w.capacity}%` }} />
                                                    <i>{w.capacity}%</i>
                                                </Styled.Progress>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Styled.Table>
                    </div>

                    {/* Reorder queue */}
                    <div className="card">
                        <header className="cardHeader">
                            <h3>Reorder Queue</h3>
                            <div className="tools">
                                <input
                                    placeholder="Search SKU, name, vendor"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    aria-label="Filter reorder table"
                                />
                                <button className="btnDisabled" aria-disabled="true" title="Demo mode: Create PO disabled">Create PO</button>
                            </div>
                        </header>

                        <Styled.Table>
                            <table>
                                <thead>
                                    <tr>
                                        <th>SKU</th>
                                        <th>Item</th>
                                        <th>On Hand</th>
                                        <th>Min</th>
                                        <th>Vendor</th>
                                        <th>ETA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredReorder.map(r => (
                                        <tr key={r.sku}>
                                            <td><NavLink to={`/products/${encodeURIComponent(r.sku)}`}>{r.sku}</NavLink></td>
                                            <td>{r.name}</td>
                                            <td className="num">{r.onHand}</td>
                                            <td className="num">{r.min}</td>
                                            <td>{r.vendor}</td>
                                            <td>{r.eta}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Styled.Table>
                    </div>

                    {/* Near expiry lots */}
                    <div className="card">
                        <header className="cardHeader">
                            <h3>Near Expiry Lots</h3>
                            <NavLink to="/medicines/expiry-tracker" className="link">Open tracker</NavLink>
                        </header>

                        <Styled.Table>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Lot</th>
                                        <th>SKU</th>
                                        <th>Item</th>
                                        <th>Warehouse</th>
                                        <th>Expires</th>
                                        <th>Qty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {NEAR_EXPIRY.map(l => (
                                        <tr key={l.lot}>
                                            <td>{l.lot}</td>
                                            <td><NavLink to={`/medicines/${encodeURIComponent(l.sku)}`}>{l.sku}</NavLink></td>
                                            <td>{l.name}</td>
                                            <td>{l.wh}</td>
                                            <td>{l.exp}</td>
                                            <td className="num">{l.qty}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Styled.Table>
                    </div>
                </section>

                {/* Side column */}
                <aside className="col side">
                    <div className="card sideCard">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/inventory/lots">Lots</NavLink></li>
                            <li><NavLink to="/inventory/batches">Batches</NavLink></li>
                            <li><NavLink to="/inventory/transfers">Transfers</NavLink></li>
                            <li><NavLink to="/inventory/adjustments">Adjustments</NavLink></li>
                            <li><NavLink to="/inventory/warehouses">Warehouses</NavLink></li>
                            <li><NavLink to="/reports/inventory">Inventory Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card sideCard">
                        <h3>Recent Transfers</h3>
                        <ul className="timeline">
                            {TRANSFERS.map(t => (
                                <li key={t.id}>
                                    <span className="dot" />
                                    <div className="entry">
                                        <div className="row1">
                                            <NavLink to={`/inventory/transfers`}>{t.id}</NavLink>
                                            <span className="sep">•</span>
                                            <span className="muted">{t.when}</span>
                                        </div>
                                        <div className="row2">{t.from} → {t.to}</div>
                                        <div className="row3">
                                            <span className="chip">{t.items} items</span>
                                            <span className="chip">{t.units} units</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card sideCard">
                        <h3>Contact Window</h3>
                        <div className="kv">
                            <div><span className="k">Ops Desk</span><span className="v">09:00–18:00 ({fmtTime(NOW)})</span></div>
                            <div><span className="k">Cutoff (PO)</span><span className="v">16:00hrs</span></div>
                            <div><span className="k">Next Cycle</span><span className="v">{fmtDate(new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate() + 7))}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default InventoryOverview;
