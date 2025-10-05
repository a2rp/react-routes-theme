import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---------------------------------------------
   Date helpers (global format rules)
--------------------------------------------- */
const pad = (n) => String(n).padStart(2, "0");
const fmt = (d, withTime = false) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const onlyTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ---------------------------------------------
   Tiny banner + confirm dialog (self-made)
--------------------------------------------- */
const Banner = ({ text }) => (text ? <Styled.Banner role="status" aria-live="polite">{text}</Styled.Banner> : null);

const ConfirmDialog = ({ open, title, message, confirmText = "Confirm", onConfirm, onClose, variant = "danger" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                    <button className={variant === "danger" ? "btnDanger" : "btnPrimary"} onClick={onConfirm}>
                        {confirmText}
                    </button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

/* ---------------------------------------------
   Page
--------------------------------------------- */
const ShipmentDetail = () => {
    const { shipmentId = "SHP-78421" } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // deterministic snapshot (display-only)
    const now = useMemo(() => new Date("2025-10-04T15:38:20"), []);
    const model = useMemo(
        () => ({
            id: shipmentId,
            status: "In Transit", // Created → Packed → Dispatched → In Transit → Out for Delivery → Delivered
            service: "Surface Plus",
            carrier: "Delhivery",
            trackingNumber: "DLV123456789IN",
            awb: "AWB-9988776655",
            createdAt: "2025-10-01T09:05:12+05:30",
            updatedAt: "2025-10-04T12:32:10+05:30",
            expectedDelivery: "2025-10-06T18:30:00+05:30",
            source: {
                name: "Bluewave Central Warehouse",
                contact: "+91 22 4567 8900",
                line1: "Plot 18, MIDC",
                line2: "Andheri East",
                city: "Mumbai",
                state: "MH",
                zip: "400059",
                country: "India",
            },
            destination: {
                name: "Aarav Sharma",
                contact: "+91 98765 43210",
                line1: "C-14, Greenwood Enclave",
                line2: "Golf Course Road",
                city: "Gurugram",
                state: "HR",
                zip: "122002",
                country: "India",
            },
            packages: [
                { id: "PKG-01", items: 3, weightKg: 4.25, dims: "30 × 25 × 18 cm", volumetricKg: 5.0, fragile: false },
                { id: "PKG-02", items: 2, weightKg: 2.10, dims: "28 × 18 × 14 cm", volumetricKg: 2.4, fragile: true },
            ],
            items: [
                { sku: "MED-AMOX-500", name: "Amoxicillin 500mg Capsules", batch: "AMX0925A", exp: "2027-06-30", qty: 2, uom: "box", weightKg: 1.1 },
                { sku: "MED-PARA-650", name: "Paracetamol 650mg Tablets", batch: "PARA0925B", exp: "2026-12-31", qty: 1, uom: "box", weightKg: 0.8 },
                { sku: "MED-ORS-200", name: "ORS Sachets 200ml", batch: "ORS0825", exp: "2026-03-31", qty: 2, uom: "pack", weightKg: 1.2 },
                { sku: "MED-ZINC-20", name: "Zinc 20mg Tablets", batch: "ZNC0725", exp: "2027-01-31", qty: 1, uom: "box", weightKg: 0.5 },
                { sku: "MED-VITA-D3", name: "Vit D3 60k IU Softgel", batch: "VD30925", exp: "2027-09-30", qty: 1, uom: "strip", weightKg: 0.15 },
            ],
            milestones: [
                { key: "Created", at: "2025-10-01T09:05:12+05:30", note: "Shipment created by system" },
                { key: "Packed", at: "2025-10-01T12:40:10+05:30", note: "Items picked and packed" },
                { key: "Dispatched", at: "2025-10-02T10:02:05+05:30", note: "Handed over to carrier hub" },
                { key: "In Transit", at: "2025-10-03T08:14:53+05:30", note: "Line haul to NCR hub" },
                { key: "Out for Delivery", at: null, note: "" },
                { key: "Delivered", at: null, note: "" },
            ],
            costs: {
                shipping: 220.00,
                fuelSurcharge: 18.50,
                insurance: 12.00,
                codFees: 0.00,
                tax: 45.90,
                total: 296.40,
                currency: "INR",
            },
            meta: {
                paymentTerm: "Prepaid",
                incoterm: "DDP",
                mode: "Road",
                pieces: 2,
                totalWeightKg: 6.35,
                volumetricKg: 7.4,
            },
            lastScan: {
                when: "2025-10-04T12:30:25+05:30",
                hub: "Gurugram (NCR)",
                code: "HUB-NCR-2",
                remark: "Arrived at destination hub",
            },
        }),
        [shipmentId]
    );

    // UI state (display-only actions)
    const [banner, setBanner] = useState("");
    const [showCancel, setShowCancel] = useState(false);
    const [showDeliver, setShowDeliver] = useState(false);

    const copyTracking = async () => {
        try {
            await navigator.clipboard.writeText(model.trackingNumber);
            setBanner(`Tracking copied: ${model.trackingNumber}`);
            setTimeout(() => setBanner(""), 3000);
        } catch {
            setBanner("Could not copy tracking number");
            setTimeout(() => setBanner(""), 3000);
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

    const breadcrumb = (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <NavLink to="/shipments">Shipments</NavLink>
            <span>/</span>
            <span className="current">{model.id}</span>
        </nav>
    );

    // progress computation for milestone meter
    const progressIndex = model.milestones.findIndex(m => m.key === model.status);
    const completeCount = model.milestones.reduce((n, m) => n + (m.at ? 1 : 0), 0);

    return (
        <Styled.Page>
            {/* print-only CSS hook (use the exact snippet you requested) */}
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
                    <h1>Shipment {model.id}</h1>
                    {breadcrumb}
                    <div className="meta">
                        <span>Status: <strong className={`pill ${model.status.replace(/\s+/g, '-').toLowerCase()}`}>{model.status}</strong></span>
                        <span>•</span>
                        <span>Carrier: <strong>{model.carrier}</strong></span>
                        <span>•</span>
                        <span>Service: <strong>{model.service}</strong></span>
                        <span>•</span>
                        <span>Created: {fmt(model.createdAt, true)}</span>
                    </div>
                </div>

                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate("/shipments")} title="Back to list">Back</button>
                    <button className="btnGhost" onClick={copyTracking} title="Copy tracking number">Copy Tracking</button>
                    <NavLink className="btnGhost" to={`/shipments/${model.id}/track`} title="Live tracking">Track</NavLink>
                    <NavLink className="btnGhost" to={`/shipments/${model.id}/labels`} title="Labels & docs">Labels</NavLink>
                    <button className="btnPrimary" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnDanger" onClick={() => setShowCancel(true)} title="Cancel shipment (demo)">Cancel</button>
                    <button className="btnPrimary" onClick={() => setShowDeliver(true)} title="Mark delivered (demo)">Mark Delivered</button>
                </div>
            </Styled.Header>

            <Banner text={banner} />

            {/* Sub-header: milestone meter */}
            <Styled.Milestones className="card" aria-label="Shipment progress">
                <ol className="meter" data-progress={progressIndex}>
                    {model.milestones.map((m, i) => {
                        const done = !!m.at;
                        const current = m.key === model.status;
                        return (
                            <li key={m.key} className={`${done ? "done" : ""} ${current ? "current" : ""}`}>
                                <div className="dot" aria-hidden="true" />
                                <div className="label">
                                    <div className="k">{m.key}</div>
                                    <div className="v">{m.at ? fmt(m.at, true) : (i <= progressIndex ? "processing…" : "pending")}</div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
                <div className="lastScan">
                    <div><span className="muted">Last scan</span> <strong>{fmt(model.lastScan.when, true)}</strong></div>
                    <div><span className="muted">Hub</span> <strong>{model.lastScan.hub}</strong> <span className="muted">({model.lastScan.code})</span></div>
                    <div><span className="muted">Remark</span> <strong>{model.lastScan.remark}</strong></div>
                </div>
            </Styled.Milestones>

            {/* Stat cards */}
            <Styled.Stats>
                <div className="card stat">
                    <div className="label">ETA</div>
                    <div className="value">{fmt(model.expectedDelivery)}</div>
                </div>
                <div className="card stat">
                    <div className="label">Pieces</div>
                    <div className="value">{model.meta.pieces}</div>
                </div>
                <div className="card stat">
                    <div className="label">Total Weight</div>
                    <div className="value">{model.meta.totalWeightKg} kg</div>
                </div>
                <div className="card stat">
                    <div className="label">Volumetric</div>
                    <div className="value">{model.meta.volumetricKg} kg</div>
                </div>
                <div className="card stat">
                    <div className="label">Mode</div>
                    <div className="value">{model.meta.mode}</div>
                </div>
                <div className="card stat">
                    <div className="label">Payment</div>
                    <div className="value">{model.meta.paymentTerm}</div>
                </div>
            </Styled.Stats>

            {/* Main grid */}
            <Styled.Grid>
                {/* Left column */}
                <section className="col main">
                    <div className="card">
                        <header className="sectionHead">
                            <h3>Shipment Summary</h3>
                            <div className="badgeRow">
                                <span className="badge">AWB {model.awb}</span>
                                <span className="badge">Tracking {model.trackingNumber}</span>
                            </div>
                        </header>

                        <div className="summaryGrid">
                            <div className="block">
                                <div className="blockHead">
                                    <h4>From</h4>
                                </div>
                                <address>
                                    <div className="name">{model.source.name}</div>
                                    <div>{model.source.line1}</div>
                                    <div>{model.source.line2}</div>
                                    <div>{model.source.city} {model.source.zip}</div>
                                    <div>{model.source.state}, {model.source.country}</div>
                                    <div className="muted">{model.source.contact}</div>
                                </address>
                            </div>

                            <div className="block">
                                <div className="blockHead">
                                    <h4>To</h4>
                                </div>
                                <address>
                                    <div className="name">{model.destination.name}</div>
                                    <div>{model.destination.line1}</div>
                                    <div>{model.destination.line2}</div>
                                    <div>{model.destination.city} {model.destination.zip}</div>
                                    <div>{model.destination.state}, {model.destination.country}</div>
                                    <div className="muted">{model.destination.contact}</div>
                                </address>
                            </div>

                            <div className="block">
                                <div className="blockHead">
                                    <h4>Carrier</h4>
                                </div>
                                <div className="kv"><span className="k">Name</span><span className="v">{model.carrier}</span></div>
                                <div className="kv"><span className="k">Service</span><span className="v">{model.service}</span></div>
                                <div className="kv"><span className="k">Mode</span><span className="v">{model.meta.mode}</span></div>
                                <div className="kv"><span className="k">Updated</span><span className="v">{fmt(model.updatedAt, true)}</span></div>
                            </div>

                            <div className="block">
                                <div className="blockHead">
                                    <h4>Costs</h4>
                                </div>
                                <div className="kv"><span className="k">Shipping</span><span className="v">{model.costs.currency} {model.costs.shipping.toFixed(2)}</span></div>
                                <div className="kv"><span className="k">Fuel Surcharge</span><span className="v">{model.costs.currency} {model.costs.fuelSurcharge.toFixed(2)}</span></div>
                                <div className="kv"><span className="k">Insurance</span><span className="v">{model.costs.currency} {model.costs.insurance.toFixed(2)}</span></div>
                                <div className="kv"><span className="k">COD Fees</span><span className="v">{model.costs.currency} {model.costs.codFees.toFixed(2)}</span></div>
                                <div className="kv"><span className="k">Tax</span><span className="v">{model.costs.currency} {model.costs.tax.toFixed(2)}</span></div>
                                <div className="kv total"><span className="k">Total</span><span className="v">{model.costs.currency} {model.costs.total.toFixed(2)}</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <header className="sectionHead">
                            <h3>Items</h3>
                            <div className="rightSmall">Total lines: {model.items.length}</div>
                        </header>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>SKU</th>
                                        <th>Item</th>
                                        <th>Batch</th>
                                        <th>Expiry</th>
                                        <th className="num">Qty</th>
                                        <th>UoM</th>
                                        <th className="num">Weight (kg)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {model.items.map((r) => (
                                        <tr key={r.sku}>
                                            <td><NavLink to={`/products/${encodeURIComponent(r.sku)}`} title="View product">{r.sku}</NavLink></td>
                                            <td>{r.name}</td>
                                            <td>{r.batch}</td>
                                            <td>{fmt(r.exp)}</td>
                                            <td className="num">{r.qty}</td>
                                            <td>{r.uom}</td>
                                            <td className="num">{r.weightKg.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card">
                        <header className="sectionHead">
                            <h3>Packages</h3>
                            <div className="rightSmall">Total: {model.packages.length}</div>
                        </header>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Package</th>
                                        <th>Items</th>
                                        <th>Weight (kg)</th>
                                        <th>Vol. Weight (kg)</th>
                                        <th>Dimensions</th>
                                        <th>Fragile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {model.packages.map((p) => (
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td className="num">{p.items}</td>
                                            <td className="num">{p.weightKg.toFixed(2)}</td>
                                            <td className="num">{p.volumetricKg.toFixed(2)}</td>
                                            <td>{p.dims}</td>
                                            <td>{p.fragile ? "Yes" : "No"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Printable summary */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <header className="sectionHead">
                            <h3>Print Summary</h3>
                            <div className="rightSmall">Generated: {fmt(now, true)}</div>
                        </header>
                        <div className="printGrid">
                            <div className="kv"><span className="k">Shipment</span><span className="v">{model.id}</span></div>
                            <div className="kv"><span className="k">Tracking</span><span className="v">{model.trackingNumber}</span></div>
                            <div className="kv"><span className="k">Carrier</span><span className="v">{model.carrier}</span></div>
                            <div className="kv"><span className="k">Service</span><span className="v">{model.service}</span></div>
                            <div className="kv"><span className="k">Status</span><span className="v">{model.status}</span></div>
                            <div className="kv"><span className="k">ETA</span><span className="v">{fmt(model.expectedDelivery)}</span></div>
                            <div className="kv"><span className="k">Pieces</span><span className="v">{model.meta.pieces}</span></div>
                            <div className="kv"><span className="k">Weight</span><span className="v">{model.meta.totalWeightKg} kg</span></div>
                            <div className="kv"><span className="k">Volumetric</span><span className="v">{model.meta.volumetricKg} kg</span></div>
                            <div className="kv"><span className="k">From</span><span className="v">{model.source.city}, {model.source.state}</span></div>
                            <div className="kv"><span className="k">To</span><span className="v">{model.destination.city}, {model.destination.state}</span></div>
                            <div className="kv"><span className="k">Updated</span><span className="v">{fmt(model.updatedAt, true)}</span></div>
                            <div className="kv"><span className="k">Total Cost</span><span className="v">{model.costs.currency} {model.costs.total.toFixed(2)}</span></div>
                        </div>
                    </div>
                </section>

                {/* Right column */}
                <aside className="col side">
                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/shipments">All Shipments</NavLink></li>
                            <li><NavLink to={`/shipments/${model.id}/track`}>Live Tracking</NavLink></li>
                            <li><NavLink to={`/shipments/${model.id}/labels`}>Labels &amp; Docs</NavLink></li>
                            <li><NavLink to="/orders">Orders</NavLink></li>
                            <li><NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/reports/shipment">Shipment Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            {model.milestones.slice(0, completeCount).map((m) => (
                                <li key={m.key}>
                                    <span className="dot" />
                                    <div>
                                        <strong>{m.key}</strong>
                                        <div className="muted">{fmt(m.at, true)}</div>
                                        {m.note ? <div className="note">{m.note}</div> : null}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card map">
                        <h3>Route Snapshot</h3>
                        <div className="mapBox" aria-label="Route mini map (placeholder)">
                            <div className="line"></div>
                            <div className="pin origin" title="Origin"></div>
                            <div className="pin hub" title="Hub"></div>
                            <div className="pin dest" title="Destination"></div>
                        </div>
                        <div className="legend">
                            <span className="dot origin"></span> Origin
                            <span className="dot hub"></span> Hub
                            <span className="dot dest"></span> Destination
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            {/* demo-only confirmations */}
            <ConfirmDialog
                open={showCancel}
                title="Cancel shipment?"
                message="This is a demo. Cancelling is disabled here, but this is how the confirmation would look."
                confirmText="I Understand"
                variant="danger"
                onConfirm={() => setShowCancel(false)}
                onClose={() => setShowCancel(false)}
            />
            <ConfirmDialog
                open={showDeliver}
                title="Mark as delivered?"
                message="This is a demo. State changes are disabled."
                confirmText="Close"
                variant="primary"
                onConfirm={() => setShowDeliver(false)}
                onClose={() => setShowDeliver(false)}
            />
        </Styled.Page>
    );
};

export default ShipmentDetail;
