import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

// demo flag (display-only)
const DEMO_MODE = true;

// date utils (single source of truth)
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

const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body">
                    <p>{message}</p>
                </div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>OK</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const ShipmentNew = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    // fixed demo values (no calculations)
    const now = useMemo(() => new Date(), []);
    const eta = useMemo(() => new Date("2025-10-11T10:30:00"), []);
    const draftId = "SHP-5007";

    const [step, setStep] = useState(2); // 1..5 just for UI
    const [showDemoInfo, setShowDemoInfo] = useState(false);

    const [form, setForm] = useState({
        reference: "PO-88921",
        service: "Express",
        carrier: "BlueDart",
        pickupDate: "2025-10-06",
        pickupTimeFrom: "10:00",
        pickupTimeTo: "17:00",
        payer: "Shipper",
        declaredValue: "₹ 48,000",
        incoterm: "DAP",
        insurance: "Included",
        weightKg: "7.50",
        volWeightKg: "9.30",
        pieces: "3",
        notes: "Leave at the reception if consignee unavailable.",
        shipper: {
            name: "Bluewave Traders",
            contact: "Aarav Sharma",
            phone: "+91 98765 43210",
            email: "shipping@bluewave.example.com",
            line1: "A-12, 4th Floor",
            line2: "DLF Cyber City",
            city: "Gurugram",
            state: "HR",
            zip: "122002",
            country: "India",
            gstin: "06ABCDE1234F1Z8",
        },
        consignee: {
            name: "Orchid Retail Pvt Ltd",
            contact: "Rhea Kapoor",
            phone: "+91 98200 12345",
            email: "ops@orchidretail.example.com",
            line1: "241 Park Avenue",
            line2: "Near Riverfront Mall",
            city: "Mumbai",
            state: "MH",
            zip: "400001",
            country: "India",
            gstin: "27ABCDE1234F1Z2",
        },
        items: [
            { sku: "MED-AMOX-500", desc: "Amoxicillin 500mg (10x10)", hsCode: "30049099", batch: "AX5-2209", exp: "2026-09-30", qty: "20", weight: "4.2 kg" },
            { sku: "MED-D3-60K", desc: "Vitamin D3 60K IU (1x8)", hsCode: "30045039", batch: "D3K-2503", exp: "2027-03-31", qty: "12", weight: "1.1 kg" },
            { sku: "MED-PAR-650", desc: "Paracetamol 650mg (25x10)", hsCode: "30049013", batch: "PA6-2501", exp: "2026-12-31", qty: "6", weight: "2.2 kg" },
        ],
        charges: {
            base: "₹ 1,650.00",
            fuel: "₹ 231.00",
            cod: "₹ 0.00",
            insurance: "₹ 120.00",
            handling: "₹ 80.00",
            tax: "₹ 358.20",
            total: "₹ 2,439.20"
        },
        docs: [
            { name: "Commercial Invoice.pdf", href: "#", size: "148 KB" },
            { name: "E-Way Bill.pdf", href: "#", size: "92 KB" },
            { name: "Packing List.pdf", href: "#", size: "106 KB" },
        ]
    });

    const onField = (scope, name, value) => {
        if (!scope) setForm((f) => ({ ...f, [name]: value }));
        else setForm((f) => ({ ...f, [scope]: { ...f[scope], [name]: value } }));
    };

    const actDisabledInfo = () => setShowDemoInfo(true);

    const goBack = () => navigate("/shipments");

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

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/shipments">Shipments</NavLink>
            <span>/</span>
            <span className="current">New</span>
        </nav>
    );

    return (
        <Styled.Wrap>
            {/* print CSS (standardized snippet) */}
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

            <Styled.Header className="card">
                <div className="left">
                    <h1>New Shipment</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Draft: {draftId}</span>
                        <span>•</span>
                        <span>Created: {fmt(now, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={goBack} title="Back to list">Back</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnPrimary" onClick={actDisabledInfo} title="Save draft">Save Draft</button>
                    <button className="btnPrimary" onClick={actDisabledInfo} title="Create & Book">Create Shipment</button>
                </div>
            </Styled.Header>

            <Styled.TopStrip>
                <div className="stepper">
                    {[
                        { n: 1, t: "Details" },
                        { n: 2, t: "Addresses" },
                        { n: 3, t: "Carrier" },
                        { n: 4, t: "Items" },
                        { n: 5, t: "Review" },
                    ].map(({ n, t }) => (
                        <button
                            key={n}
                            className={`step ${step === n ? "active" : ""}`}
                            onClick={() => setStep(n)}
                            type="button"
                            title={t}
                        >
                            <span className="num">{n}</span>
                            <span className="txt">{t}</span>
                        </button>
                    ))}
                </div>
                <div className="tags">
                    <span className="chip">Service: {form.service}</span>
                    <span className="chip">Carrier: {form.carrier}</span>
                    <span className="chip">Pieces: {form.pieces}</span>
                    <span className="chip">Weight: {form.weightKg} kg</span>
                    <span className="chip alt">Vol Wt: {form.volWeightKg} kg</span>
                </div>
            </Styled.TopStrip>

            <Styled.Grid>
                {/* Main column */}
                <section className="col main card">
                    {/* Step 1: details */}
                    <div className="block">
                        <div className="blockHead">
                            <h3>Shipment Details</h3>
                            <div className="micro">
                                <span>ETA: {fmt(eta)}</span>
                                <span>•</span>
                                <span>Pickup window: {form.pickupTimeFrom}-{form.pickupTimeTo}</span>
                            </div>
                        </div>

                        <div className="fields three">
                            <div>
                                <label>Reference</label>
                                <input value={form.reference} onChange={(e) => onField(null, "reference", e.target.value)} placeholder="Customer reference" />
                            </div>
                            <div>
                                <label>Payer</label>
                                <select value={form.payer} onChange={(e) => onField(null, "payer", e.target.value)}>
                                    <option>Shipper</option>
                                    <option>Consignee</option>
                                    <option>Third Party</option>
                                </select>
                            </div>
                            <div>
                                <label>Incoterm</label>
                                <select value={form.incoterm} onChange={(e) => onField(null, "incoterm", e.target.value)}>
                                    <option>DAP</option>
                                    <option>DDP</option>
                                    <option>EXW</option>
                                    <option>CPT</option>
                                </select>
                            </div>
                        </div>

                        <div className="fields three">
                            <div>
                                <label>Declared Value</label>
                                <input value={form.declaredValue} onChange={(e) => onField(null, "declaredValue", e.target.value)} />
                            </div>
                            <div>
                                <label>Insurance</label>
                                <select value={form.insurance} onChange={(e) => onField(null, "insurance", e.target.value)}>
                                    <option>Included</option>
                                    <option>Not Included</option>
                                </select>
                            </div>
                            <div>
                                <label>Service</label>
                                <select value={form.service} onChange={(e) => onField(null, "service", e.target.value)}>
                                    <option>Express</option>
                                    <option>Surface</option>
                                    <option>Overnight</option>
                                </select>
                            </div>
                        </div>

                        <div className="fields four">
                            <div>
                                <label>Pickup Date</label>
                                <input type="date" value={form.pickupDate} onChange={(e) => onField(null, "pickupDate", e.target.value)} />
                            </div>
                            <div>
                                <label>From</label>
                                <input type="time" value={form.pickupTimeFrom} onChange={(e) => onField(null, "pickupTimeFrom", e.target.value)} />
                            </div>
                            <div>
                                <label>To</label>
                                <input type="time" value={form.pickupTimeTo} onChange={(e) => onField(null, "pickupTimeTo", e.target.value)} />
                            </div>
                            <div>
                                <label>Special Notes</label>
                                <input value={form.notes} onChange={(e) => onField(null, "notes", e.target.value)} />
                            </div>
                        </div>
                    </div>

                    {/* Step 2: addresses */}
                    <div className="block twoCol">
                        <div className="card sub">
                            <div className="blockHead"><h3>Shipper</h3></div>
                            <div className="fields">
                                <div className="two">
                                    <div>
                                        <label>Company</label>
                                        <input value={form.shipper.name} onChange={(e) => onField("shipper", "name", e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Contact</label>
                                        <input value={form.shipper.contact} onChange={(e) => onField("shipper", "contact", e.target.value)} />
                                    </div>
                                </div>
                                <div className="two">
                                    <div><label>Phone</label><input value={form.shipper.phone} onChange={(e) => onField("shipper", "phone", e.target.value)} /></div>
                                    <div><label>Email</label><input type="email" value={form.shipper.email} onChange={(e) => onField("shipper", "email", e.target.value)} /></div>
                                </div>
                                <input placeholder="Address line 1" value={form.shipper.line1} onChange={(e) => onField("shipper", "line1", e.target.value)} />
                                <input placeholder="Address line 2" value={form.shipper.line2} onChange={(e) => onField("shipper", "line2", e.target.value)} />
                                <div className="three">
                                    <input placeholder="City" value={form.shipper.city} onChange={(e) => onField("shipper", "city", e.target.value)} />
                                    <input placeholder="State" value={form.shipper.state} onChange={(e) => onField("shipper", "state", e.target.value)} />
                                    <input placeholder="PIN" value={form.shipper.zip} onChange={(e) => onField("shipper", "zip", e.target.value)} />
                                </div>
                                <div className="two">
                                    <input placeholder="Country" value={form.shipper.country} onChange={(e) => onField("shipper", "country", e.target.value)} />
                                    <input placeholder="GSTIN" value={form.shipper.gstin} onChange={(e) => onField("shipper", "gstin", e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="card sub">
                            <div className="blockHead"><h3>Consignee</h3></div>
                            <div className="fields">
                                <div className="two">
                                    <div>
                                        <label>Company</label>
                                        <input value={form.consignee.name} onChange={(e) => onField("consignee", "name", e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Contact</label>
                                        <input value={form.consignee.contact} onChange={(e) => onField("consignee", "contact", e.target.value)} />
                                    </div>
                                </div>
                                <div className="two">
                                    <div><label>Phone</label><input value={form.consignee.phone} onChange={(e) => onField("consignee", "phone", e.target.value)} /></div>
                                    <div><label>Email</label><input type="email" value={form.consignee.email} onChange={(e) => onField("consignee", "email", e.target.value)} /></div>
                                </div>
                                <input placeholder="Address line 1" value={form.consignee.line1} onChange={(e) => onField("consignee", "line1", e.target.value)} />
                                <input placeholder="Address line 2" value={form.consignee.line2} onChange={(e) => onField("consignee", "line2", e.target.value)} />
                                <div className="three">
                                    <input placeholder="City" value={form.consignee.city} onChange={(e) => onField("consignee", "city", e.target.value)} />
                                    <input placeholder="State" value={form.consignee.state} onChange={(e) => onField("consignee", "state", e.target.value)} />
                                    <input placeholder="PIN" value={form.consignee.zip} onChange={(e) => onField("consignee", "zip", e.target.value)} />
                                </div>
                                <div className="two">
                                    <input placeholder="Country" value={form.consignee.country} onChange={(e) => onField("consignee", "country", e.target.value)} />
                                    <input placeholder="GSTIN" value={form.consignee.gstin} onChange={(e) => onField("consignee", "gstin", e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: carrier & service */}
                    <div className="block">
                        <div className="blockHead"><h3>Carrier & Service</h3></div>
                        <div className="carrierGrid">
                            {[
                                { code: "BlueDart", title: "Blue Dart", desc: "Express Air | Door to Door" },
                                { code: "DTDC", title: "DTDC", desc: "Surface Plus | Metro Priority" },
                                { code: "Delhivery", title: "Delhivery", desc: "Express Surface | Pan-India" },
                            ].map((c) => (
                                <label key={c.code} className={`carrier ${form.carrier === c.code ? "active" : ""}`} title={c.desc}>
                                    <input type="radio" name="carrier" value={c.code}
                                        checked={form.carrier === c.code}
                                        onChange={(e) => onField(null, "carrier", e.target.value)} />
                                    <div className="meta">
                                        <div className="t">{c.title}</div>
                                        <div className="d">{c.desc}</div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Step 4: items */}
                    <div className="block">
                        <div className="blockHead between">
                            <h3>Items</h3>
                            <div className="miniActions">
                                <button className="btnGhost" onClick={actDisabledInfo} title="Add line item">Add Item</button>
                                <button className="btnGhost" onClick={actDisabledInfo} title="Import">Import</button>
                            </div>
                        </div>

                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>SKU</th>
                                        <th>Description</th>
                                        <th>HSN</th>
                                        <th>Batch</th>
                                        <th>Expiry</th>
                                        <th className="num">Qty</th>
                                        <th>Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {form.items.map((it, idx) => (
                                        <tr key={idx}>
                                            <td><NavLink to={`/products/${it.sku}`}>{it.sku}</NavLink></td>
                                            <td>{it.desc}</td>
                                            <td>{it.hsCode}</td>
                                            <td>{it.batch}</td>
                                            <td>{fmt(it.exp)}</td>
                                            <td className="num">{it.qty}</td>
                                            <td>{it.weight}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Step 5: review & actions */}
                    <div className="block">
                        <div className="blockHead"><h3>Review</h3></div>
                        <div className="review">
                            <div><span className="k">Reference</span><span className="v">{form.reference}</span></div>
                            <div><span className="k">Service</span><span className="v">{form.service}</span></div>
                            <div><span className="k">Carrier</span><span className="v">{form.carrier}</span></div>
                            <div><span className="k">Pieces</span><span className="v">{form.pieces}</span></div>
                            <div><span className="k">Wt / Vol</span><span className="v">{form.weightKg} kg / {form.volWeightKg} kg</span></div>
                            <div><span className="k">Pickup</span><span className="v">{fmt(form.pickupDate)} {form.pickupTimeFrom}-{form.pickupTimeTo}</span></div>
                            <div><span className="k">ETA</span><span className="v">{fmt(eta)}</span></div>
                        </div>

                        <div className="ctaRow">
                            <button className="btnPrimary" onClick={actDisabledInfo} title="Create shipment">Create Shipment</button>
                            <button className="btnGhost" onClick={actDisabledInfo} title="Book pickup">Book Pickup</button>
                            <button className="btnGhost" onClick={actDisabledInfo} title="Generate labels">Generate Labels</button>
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="col side">
                    <div className="card">
                        <div className="blockHead"><h3>Charges</h3></div>
                        <div className="chargeList">
                            <div><span>Base</span><span>{form.charges.base}</span></div>
                            <div><span>Fuel Surcharge</span><span>{form.charges.fuel}</span></div>
                            <div><span>Insurance</span><span>{form.charges.insurance}</span></div>
                            <div><span>Handling</span><span>{form.charges.handling}</span></div>
                            <div><span>Tax</span><span>{form.charges.tax}</span></div>
                            <div className="total"><span>Total</span><span>{form.charges.total}</span></div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="blockHead"><h3>Attachments</h3></div>
                        <ul className="files">
                            {form.docs.map((d) => (
                                <li key={d.name}>
                                    <a href={d.href} download>{d.name}</a>
                                    <span className="muted">{d.size}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="miniActions">
                            <button className="btnGhost" onClick={actDisabledInfo} title="Upload">Upload</button>
                            <button className="btnGhost" onClick={actDisabledInfo} title="Scan">Scan</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="blockHead"><h3>Activity</h3></div>
                        <ul className="timeline">
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Draft created</strong>
                                    <div className="muted">{fmt(now, true)}</div>
                                </div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Address validated</strong>
                                    <div className="muted">{fmt(now)}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="card" id="search-print-area" ref={printRef}>
                        <div className="blockHead"><h3>Print Summary</h3></div>
                        <div className="printSummary">
                            <div className="line"><span className="k">Draft</span><span className="v">{draftId}</span></div>
                            <div className="line"><span className="k">Shipper</span><span className="v">{form.shipper.name}, {form.shipper.city}</span></div>
                            <div className="line"><span className="k">Consignee</span><span className="v">{form.consignee.name}, {form.consignee.city}</span></div>
                            <div className="line"><span className="k">Carrier</span><span className="v">{form.carrier} ({form.service})</span></div>
                            <div className="line"><span className="k">Pieces</span><span className="v">{form.pieces}</span></div>
                            <div className="line"><span className="k">Weight</span><span className="v">{form.weightKg} kg / {form.volWeightKg} kg</span></div>
                            <div className="line"><span className="k">Pickup</span><span className="v">{fmt(form.pickupDate)} {form.pickupTimeFrom}-{form.pickupTimeTo}</span></div>
                            <div className="line"><span className="k">ETA</span><span className="v">{fmt(eta)}</span></div>
                            <div className="line"><span className="k">Amount</span><span className="v">{form.charges.total}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <InfoDialog
                open={DEMO_MODE && showDemoInfo}
                title="Demo mode"
                message="This is a display-only preview. Create/Book/Upload actions are disabled in demo."
                onClose={() => setShowDemoInfo(false)}
            />
        </Styled.Wrap>
    );
};

export default ShipmentNew;
