import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* date formatting helpers: 
   Date -> Sat Oct 04 2025
   Date+Time -> Sat Oct 04 2025 15:38:20hrs
   Time -> 15:38:20hrs
*/
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const onlyTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

const InfoDialog = ({ open, title, message, onClose, cta = "OK" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>{cta}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const MedicineDetail = () => {
    const { medicineId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // demo/static record (display-only)
    const data = useMemo(() => {
        const now = new Date("2025-10-04T15:38:20+05:30");
        return {
            id: medicineId || "MED-AMOX-500",
            sku: "MED-AMOX-500",
            brandName: "Amoxycap 500",
            genericName: "Amoxicillin",
            strength: "500 mg",
            form: "Capsule",
            packSize: "Strip of 10 capsules",
            manufacturer: { id: "MFG-001", name: "Bluewave Pharma Pvt Ltd" },
            category: { id: "CAT-ABX", name: "Antibiotics" },
            hsn: "300420",
            gst: 12,
            schedule: "Rx Only",
            barcodes: ["8901234567890", "8901234567891"],
            mrp: 98.00,
            ptr: 65.00,
            uom: "capsule",
            storage: "Store below 25°C. Protect from light and moisture.",
            shelfLifeMonths: 24,
            createdAt: now,
            updatedAt: now,
            tags: ["priority", "essential", "adult"],
            indications: [
                "Bacterial infections of ear, nose, throat",
                "Lower respiratory tract infections",
                "Skin and soft tissue infections",
            ],
            contraindications: ["History of hypersensitivity to penicillins"],
            sideEffects: ["Nausea", "Rash", "Diarrhea", "Headache"],
            interactions: [
                "May reduce efficacy of oral contraceptives",
                "Probenecid may increase serum concentration",
            ],
            composition: [
                { moiety: "Amoxicillin Trihydrate", strength: "500 mg" },
                { moiety: "Excipients", strength: "q.s." },
            ],
            inventory: {
                totalStock: 425,
                reserved: 30,
                available: 395,
                inTransit: 50,
                reorderLevel: 200,
                warehouses: [
                    { code: "WH-01", name: "Primary DC", stock: 260 },
                    { code: "WH-02", name: "North Hub", stock: 165 },
                ],
            },
            batches: [
                { batch: "AB1234", mfg: "2024-02-15", exp: "2026-01-31", qty: 120, mrp: 98.0, ptr: 65.0, location: "WH-01 / A2", status: "OK" },
                { batch: "CD6789", mfg: "2024-05-10", exp: "2025-10-30", qty: 180, mrp: 98.0, ptr: 65.0, location: "WH-01 / B1", status: "OK" },
                { batch: "EF9012", mfg: "2024-07-20", exp: "2026-04-15", qty: 125, mrp: 98.0, ptr: 65.0, location: "WH-02 / R3", status: "OK" },
            ],
            activity: [
                { when: now, text: "Batch EF9012 received at WH-02 (GRN #GRN-5821)" },
                { when: now, text: "PTR updated to 65.00" },
                { when: now, text: "Reorder level revised to 200" },
            ],
            leaflets: [
                { name: "Patient Information Leaflet.pdf", size: "284 KB" },
                { name: "Prescribing Information.pdf", size: "412 KB" },
            ],
        };
    }, [medicineId]);

    const [demoNoteOpen, setDemoNoteOpen] = useState(false);

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

    const exportJson = () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `${data.id}.json`;
        document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
    };

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/medicines">Medicines</NavLink>
            <span>/</span>
            <span className="current">{data.id}</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print rules */}
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
                    <h1>{data.brandName} <span className="sub">({data.genericName})</span></h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>ID: {data.id}</span>
                        <span>•</span>
                        <span>Updated: {fmt(data.updatedAt, true)}</span>
                        <span>•</span>
                        <span>Created: {fmt(data.createdAt)}</span>
                    </div>
                    <div className="tags">
                        {data.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                        <span className="pill">{data.form}</span>
                        <span className="pill">{data.strength}</span>
                        <span className="pill">{data.packSize}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="btnGhost" onClick={() => navigate(-1)} title="Go back">Back</button>
                    <button className="btnPrimary" onClick={exportJson} title="Export JSON">Export</button>
                    <button className="btnPrimary" onClick={printSection} title="Print section">Print</button>
                    <button className="btnPrimary" disabled title="Demo: disabled" onClick={() => setDemoNoteOpen(true)}>Add to Order</button>
                    <button className="btnDanger" disabled title="Demo: disabled" onClick={() => setDemoNoteOpen(true)}>Adjust Stock</button>
                    <button className="btnGhost" disabled title="Demo: disabled" onClick={() => setDemoNoteOpen(true)}>Archive</button>
                </div>
            </Styled.Header>

            <Styled.Stats className="card">
                <div>
                    <div className="k">Available</div>
                    <div className="v">{data.inventory.available} {data.uom}</div>
                </div>
                <div>
                    <div className="k">Reserved</div>
                    <div className="v">{data.inventory.reserved} {data.uom}</div>
                </div>
                <div>
                    <div className="k">In Transit</div>
                    <div className="v">{data.inventory.inTransit} {data.uom}</div>
                </div>
                <div>
                    <div className="k">Reorder Level</div>
                    <div className="v">{data.inventory.reorderLevel} {data.uom}</div>
                </div>
                <div>
                    <div className="k">MRP</div>
                    <div className="v">₹{data.mrp.toFixed(2)}</div>
                </div>
                <div>
                    <div className="k">PTR</div>
                    <div className="v">₹{data.ptr.toFixed(2)}</div>
                </div>
            </Styled.Stats>

            <Styled.Grid>
                {/* Left: Content */}
                <section className="col main">
                    <div className="card section">
                        <h3>Overview</h3>
                        <div className="kv">
                            <div><span className="k">Brand</span><span className="v">{data.brandName}</span></div>
                            <div><span className="k">Generic</span><span className="v">{data.genericName}</span></div>
                            <div><span className="k">Strength</span><span className="v">{data.strength}</span></div>
                            <div><span className="k">Form</span><span className="v">{data.form}</span></div>
                            <div><span className="k">Pack</span><span className="v">{data.packSize}</span></div>
                            <div><span className="k">UOM</span><span className="v">{data.uom}</span></div>
                            <div><span className="k">HSN</span><span className="v">{data.hsn}</span></div>
                            <div><span className="k">GST</span><span className="v">{data.gst}%</span></div>
                            <div><span className="k">Schedule</span><span className="v">{data.schedule}</span></div>
                            <div><span className="k">Barcodes</span><span className="v">{data.barcodes.join(", ")}</span></div>
                            <div><span className="k">Manufacturer</span><span className="v">
                                <NavLink to={`/medicines/manufacturers`} title="Open manufacturers">{data.manufacturer.name}</NavLink>
                            </span></div>
                            <div><span className="k">Category</span><span className="v">
                                <NavLink to={`/categories`} title="Open categories">{data.category.name}</NavLink>
                            </span></div>
                            <div className="full">
                                <span className="k">Storage</span>
                                <span className="v">{data.storage} Shelf-life: {data.shelfLifeMonths} months</span>
                            </div>
                        </div>
                    </div>

                    <div className="card section">
                        <h3>Composition</h3>
                        <table>
                            <thead>
                                <tr><th>Moiety</th><th>Strength</th></tr>
                            </thead>
                            <tbody>
                                {data.composition.map((c, idx) => (
                                    <tr key={idx}>
                                        <td>{c.moiety}</td>
                                        <td>{c.strength}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="linksBar">
                            <NavLink to="/medicines/molecules" title="Open molecules catalog">View molecules</NavLink>
                            <NavLink to="/medicines/forms" title="Open dosage forms">View forms</NavLink>
                            <NavLink to="/medicines/strengths" title="Open strengths">View strengths</NavLink>
                        </div>
                    </div>

                    <div className="card section">
                        <h3>Indications</h3>
                        <ul className="bullets">
                            {data.indications.map((s) => <li key={s}>{s}</li>)}
                        </ul>
                        <div className="grid two">
                            <div>
                                <h4>Contraindications</h4>
                                <ul className="bullets">
                                    {data.contraindications.map((s) => <li key={s}>{s}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4>Interactions</h4>
                                <ul className="bullets">
                                    {data.interactions.map((s) => <li key={s}>{s}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="subtle">
                            Common side effects: {data.sideEffects.join(", ")}.
                        </div>
                    </div>

                    <div className="card section">
                        <h3>Batches & Expiry</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Batch</th>
                                    <th>Mfg</th>
                                    <th>Expiry</th>
                                    <th>Qty</th>
                                    <th>MRP</th>
                                    <th>PTR</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.batches.map((b) => (
                                    <tr key={b.batch}>
                                        <td>{b.batch}</td>
                                        <td>{fmt(b.mfg)}</td>
                                        <td>{fmt(b.exp)}</td>
                                        <td>{b.qty}</td>
                                        <td>₹{b.mrp.toFixed(2)}</td>
                                        <td>₹{b.ptr.toFixed(2)}</td>
                                        <td>{b.location}</td>
                                        <td><span className="status ok">OK</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="linksBar">
                            <NavLink to="/inventory/lots" title="Open lots">Lots</NavLink>
                            <NavLink to="/inventory/batches" title="Open batches">Batches</NavLink>
                            <NavLink to="/inventory/reorder" title="Open reorder planner">Reorder planner</NavLink>
                        </div>
                    </div>
                </section>

                {/* Right: Sidebar */}
                <aside className="col side">
                    <div className="card section">
                        <h3>Warehouse Split</h3>
                        <ul className="kvList">
                            {data.inventory.warehouses.map((w) => (
                                <li key={w.code}>
                                    <span className="k">{w.name}</span>
                                    <span className="v">{w.stock} {data.uom}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card section">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/medicines/expiry-tracker">Expiry Tracker</NavLink></li>
                            <li><NavLink to="/medicines/hsn-gst">HSN / GST</NavLink></li>
                            <li><NavLink to="/reports/inventory">Inventory Report</NavLink></li>
                            <li><NavLink to="/products/price-lists">Price Lists</NavLink></li>
                        </ul>
                    </div>

                    <div className="card section">
                        <h3>Files</h3>
                        <ul className="files">
                            {data.leaflets.map(f => (
                                <li key={f.name}>
                                    <span className="fileName">{f.name}</span>
                                    <span className="fileSize">{f.size}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card section" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Brand</span><span className="v">{data.brandName}</span></div>
                            <div className="line"><span className="k">Generic</span><span className="v">{data.genericName}</span></div>
                            <div className="line"><span className="k">Strength</span><span className="v">{data.strength}</span></div>
                            <div className="line"><span className="k">Form</span><span className="v">{data.form}</span></div>
                            <div className="line"><span className="k">Pack</span><span className="v">{data.packSize}</span></div>
                            <div className="line"><span className="k">HSN / GST</span><span className="v">{data.hsn} / {data.gst}%</span></div>
                            <div className="line"><span className="k">MRP / PTR</span><span className="v">₹{data.mrp.toFixed(2)} / ₹{data.ptr.toFixed(2)}</span></div>
                            <div className="line"><span className="k">Stock</span><span className="v">{data.inventory.available} {data.uom}</span></div>
                            <div className="line"><span className="k">Updated</span><span className="v">{fmt(data.updatedAt, true)}</span></div>
                        </div>
                    </div>

                    <div className="card section">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            {data.activity.map((a, i) => (
                                <li key={i}>
                                    <span className="dot" />
                                    <div>
                                        <strong>{a.text}</strong>
                                        <div className="muted">{fmt(a.when, true)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <InfoDialog
                open={demoNoteOpen}
                title="Demo mode"
                message="This is a display-only theme. Actions like Add to Order or Adjust Stock are disabled."
                onClose={() => setDemoNoteOpen(false)}
            />
        </Styled.Page>
    );
};

export default MedicineDetail;
