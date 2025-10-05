import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- Date format helpers (consistent across app) ---------- */
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

/* ---------- Demo fixtures (display-only; no calculations) ---------- */
const STATS = {
    totalBatches: 48,
    expiringSoon: 12,
    expired: 3,
    ok: 33,
    lastSyncISO: "2025-10-04T15:38:20+05:30",
};

const GROUPS = [
    {
        title: "Oct 2025",
        count: 6,
        items: [
            {
                id: "LOT-AX5",
                productId: "MED-AMOX-500",
                sku: "AMOX-500-TAB",
                name: "Amoxicillin 500",
                strength: "500mg",
                form: "Tablet",
                batch: "AX5-2408",
                mfg: "2025-02-10",
                expiry: "2025-10-21",
                bucket: "Soon", // Soon | Expired | OK
                qty: "240",
                location: "WH-DEL / A-12",
                vendor: "Bluewave Traders",
                manufacturer: "Cipra Labs",
                mrp: "₹ 145.00",
            },
            {
                id: "LOT-PCM",
                productId: "MED-PARA-650",
                sku: "PARA-650-TAB",
                name: "Paracetamol 650",
                strength: "650mg",
                form: "Tablet",
                batch: "PCM-0925",
                mfg: "2025-03-05",
                expiry: "2025-10-28",
                bucket: "Soon",
                qty: "500",
                location: "WH-DEL / B-02",
                vendor: "Medilink",
                manufacturer: "Nova Remedies",
                mrp: "₹ 28.00",
            },
            {
                id: "LOT-IBU",
                productId: "MED-IBU-400",
                sku: "IBU-400-TAB",
                name: "Ibuprofen 400",
                strength: "400mg",
                form: "Tablet",
                batch: "IBU-10-25",
                mfg: "2025-01-18",
                expiry: "2025-10-09",
                bucket: "Soon",
                qty: "310",
                location: "WH-GGN / C-07",
                vendor: "Helios Distributors",
                manufacturer: "Zen Pharma",
                mrp: "₹ 36.00",
            },
            {
                id: "LOT-RAB",
                productId: "MED-RAB-20",
                sku: "RAB-20-TAB",
                name: "Rabeprazole 20",
                strength: "20mg",
                form: "Tablet",
                batch: "RAB-2025-10",
                mfg: "2025-02-02",
                expiry: "2025-10-30",
                bucket: "Soon",
                qty: "180",
                location: "WH-DEL / D-10",
                vendor: "Bluewave Traders",
                manufacturer: "Crestor Labs",
                mrp: "₹ 98.00",
            },
            {
                id: "LOT-CEF",
                productId: "MED-CEF-200",
                sku: "CEF-200-TAB",
                name: "Cefixime 200",
                strength: "200mg",
                form: "Tablet",
                batch: "CEF-200-25A",
                mfg: "2025-01-09",
                expiry: "2025-10-14",
                bucket: "Soon",
                qty: "90",
                location: "WH-DEL / E-02",
                vendor: "Medilink",
                manufacturer: "Trident Biotech",
                mrp: "₹ 178.00",
            },
            {
                id: "LOT-LOR",
                productId: "MED-LOR-2",
                sku: "LOR-2-TAB",
                name: "Loratadine 2",
                strength: "2mg",
                form: "Syrup",
                batch: "LOR-SYR-25",
                mfg: "2024-12-20",
                expiry: "2025-10-03",
                bucket: "Expired",
                qty: "14",
                location: "WH-GGN / S-01",
                vendor: "Helios Distributors",
                manufacturer: "Valence Care",
                mrp: "₹ 64.00",
            },
        ],
    },
    {
        title: "Nov 2025",
        count: 4,
        items: [
            {
                id: "LOT-LEV",
                productId: "MED-LEV-500",
                sku: "LEV-500-TAB",
                name: "Levofloxacin 500",
                strength: "500mg",
                form: "Tablet",
                batch: "LEV-1125",
                mfg: "2025-04-18",
                expiry: "2025-11-12",
                bucket: "Soon",
                qty: "120",
                location: "WH-DEL / F-04",
                vendor: "Bluewave Traders",
                manufacturer: "Zen Pharma",
                mrp: "₹ 210.00",
            },
            {
                id: "LOT-OME",
                productId: "MED-OME-20",
                sku: "OME-20-CAP",
                name: "Omeprazole 20",
                strength: "20mg",
                form: "Capsule",
                batch: "OME-20-25B",
                mfg: "2025-03-08",
                expiry: "2025-11-22",
                bucket: "OK",
                qty: "260",
                location: "WH-DEL / A-07",
                vendor: "Medilink",
                manufacturer: "Nova Remedies",
                mrp: "₹ 85.00",
            },
            {
                id: "LOT-AZI",
                productId: "MED-AZI-500",
                sku: "AZI-500-TAB",
                name: "Azithromycin 500",
                strength: "500mg",
                form: "Tablet",
                batch: "AZI-500-25",
                mfg: "2025-05-01",
                expiry: "2025-11-29",
                bucket: "OK",
                qty: "70",
                location: "WH-DEL / H-11",
                vendor: "Helios Distributors",
                manufacturer: "Cipra Labs",
                mrp: "₹ 228.00",
            },
            {
                id: "LOT-VITC",
                productId: "MED-ASC-500",
                sku: "ASC-500-CHEW",
                name: "Vitamin C 500",
                strength: "500mg",
                form: "Chewable",
                batch: "ASC-CH-25",
                mfg: "2025-02-12",
                expiry: "2025-11-06",
                bucket: "Soon",
                qty: "200",
                location: "WH-GGN / V-03",
                vendor: "Bluewave Traders",
                manufacturer: "Crestor Labs",
                mrp: "₹ 125.00",
            },
        ],
    },
    {
        title: "Dec 2025",
        count: 3,
        items: [
            {
                id: "LOT-MET",
                productId: "MED-MET-500",
                sku: "MET-500-TAB",
                name: "Metformin 500",
                strength: "500mg",
                form: "Tablet",
                batch: "MET-500-25",
                mfg: "2025-04-01",
                expiry: "2025-12-18",
                bucket: "OK",
                qty: "400",
                location: "WH-DEL / D-05",
                vendor: "Medilink",
                manufacturer: "Zen Pharma",
                mrp: "₹ 34.00",
            },
            {
                id: "LOT-DIC",
                productId: "MED-DIC-50",
                sku: "DIC-50-GEL",
                name: "Diclofenac 50",
                strength: "50mg",
                form: "Gel",
                batch: "DIC-GEL-25",
                mfg: "2025-04-28",
                expiry: "2025-12-04",
                bucket: "OK",
                qty: "150",
                location: "WH-GGN / G-01",
                vendor: "Helios Distributors",
                manufacturer: "Valence Care",
                mrp: "₹ 72.00",
            },
            {
                id: "LOT-ASP",
                productId: "MED-ASP-75",
                sku: "ASP-75-TAB",
                name: "Aspirin 75",
                strength: "75mg",
                form: "Tablet",
                batch: "ASP-75-25",
                mfg: "2025-03-17",
                expiry: "2025-12-29",
                bucket: "OK",
                qty: "180",
                location: "WH-DEL / K-02",
                vendor: "Bluewave Traders",
                manufacturer: "Trident Biotech",
                mrp: "₹ 22.00",
            },
        ],
    },
];

/* ---------- Page ---------- */
const ExpiryTracker = () => {
    const printRef = useRef(null);

    // UI state (display only). Filtering is string includes; no totals math.
    const [q, setQ] = useState("");
    const [bucket, setBucket] = useState("ALL"); // ALL | Soon | Expired | OK
    const [form, setForm] = useState("ALL"); // Tablet | Capsule | Syrup | ...
    const [brand, setBrand] = useState("ALL"); // manufacturer

    const lastSync = useMemo(() => fmtDateTime(STATS.lastSyncISO), []);

    const matches = (item) => {
        const txt = `${item.name} ${item.sku} ${item.batch} ${item.manufacturer} ${item.vendor} ${item.location}`.toLowerCase();
        const okQ = q.trim() === "" || txt.includes(q.trim().toLowerCase());
        const okBucket = bucket === "ALL" || item.bucket === bucket;
        const okForm = form === "ALL" || (item.form || "").toLowerCase() === form.toLowerCase();
        const okBrand = brand === "ALL" || (item.manufacturer || "") === brand;
        return okQ && okBucket && okForm && okBrand;
    };

    const filteredGroups = GROUPS.map(g => ({
        ...g,
        items: g.items.filter(matches),
        count: g.items.filter(matches).length,
    })).filter(g => g.items.length > 0);

    const brands = useMemo(() => {
        const s = new Set();
        GROUPS.forEach(g => g.items.forEach(it => s.add(it.manufacturer)));
        return ["ALL", ...Array.from(s)];
    }, []);
    const forms = useMemo(() => {
        const s = new Set();
        GROUPS.forEach(g => g.items.forEach(it => it.form && s.add(it.form)));
        return ["ALL", ...Array.from(s)];
    }, []);

    const onPrint = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page>
            {/* print rules (your standard) */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Expiry Tracker</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/medicines">Medicines</NavLink>
                        <span>/</span>
                        <span className="current">Expiry Tracker</span>
                    </nav>
                    <div className="meta">
                        <span>Last sync: {lastSync}</span>
                    </div>
                </div>
                <div className="right">
                    <button className="btnGhost" onClick={onPrint} title="Print summary">Print</button>
                    <button className="btnGhost" title="Export CSV (static download)" onClick={() => {
                        const csv = [
                            "Batch,SKU,Name,Strength,Form,Expiry,Bucket,Qty,Location,Vendor,Manufacturer,MRP",
                            ...GROUPS.flatMap(g => g.items).map(it => [
                                it.batch, it.sku, it.name, it.strength, it.form, fmtDate(it.expiry),
                                it.bucket, it.qty, `"${it.location}"`, `"${it.vendor}"`, `"${it.manufacturer}"`, it.mrp
                            ].join(","))
                        ].join("\n");
                        const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
                        const a = document.createElement("a");
                        a.href = url; a.download = "expiry-tracker.csv";
                        document.body.appendChild(a); a.click(); a.remove();
                        URL.revokeObjectURL(url);
                    }}>Export</button>
                </div>
            </Styled.Header>

            {/* Stat cards */}
            <Styled.Cards>
                <div className="kpi card">
                    <div className="label">Total Batches</div>
                    <div className="value">{STATS.totalBatches}</div>
                </div>
                <div className="kpi card">
                    <div className="label">Expiring Soon</div>
                    <div className="value">{STATS.expiringSoon}</div>
                </div>
                <div className="kpi card">
                    <div className="label">Expired</div>
                    <div className="value">{STATS.expired}</div>
                </div>
                <div className="kpi card">
                    <div className="label">OK</div>
                    <div className="value">{STATS.ok}</div>
                </div>
            </Styled.Cards>

            {/* Controls */}
            <Styled.Controls className="card">
                <div className="row">
                    <div className="field grow">
                        <label>Search</label>
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search by name, SKU, batch, vendor, location…"
                        />
                    </div>
                    <div className="field">
                        <label>Status</label>
                        <select value={bucket} onChange={(e) => setBucket(e.target.value)}>
                            <option value="ALL">All</option>
                            <option value="Soon">Expiring Soon</option>
                            <option value="Expired">Expired</option>
                            <option value="OK">OK</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Form</label>
                        <select value={form} onChange={(e) => setForm(e.target.value)}>
                            {forms.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                    </div>
                    <div className="field">
                        <label>Manufacturer</label>
                        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                            {brands.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row actions">
                    <button className="btnDisabled" title="Demo mode">Add Batch</button>
                    <button className="btnDisabled" title="Demo mode">Adjust Stock</button>
                    <button className="btnDisabled" title="Demo mode">Archive Expired</button>
                </div>
            </Styled.Controls>

            <Styled.Layout>
                {/* Main content */}
                <section className="main">
                    {filteredGroups.length === 0 ? (
                        <div className="empty card">
                            <h3>No results</h3>
                            <p>Try clearing filters or search with a different keyword.</p>
                        </div>
                    ) : (
                        filteredGroups.map(group => (
                            <div className="group card" key={group.title}>
                                <header className="groupHead">
                                    <h3>{group.title}</h3>
                                    <span className="count">{group.count} batch{group.count === 1 ? "" : "es"}</span>
                                </header>
                                <div className="tableWrap">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Batch</th>
                                                <th>Product</th>
                                                <th>Expiry</th>
                                                <th>Status</th>
                                                <th>Qty</th>
                                                <th>Location</th>
                                                <th>Vendor</th>
                                                <th>Manufacturer</th>
                                                <th>MRP</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {group.items.map(it => (
                                                <tr key={it.id}>
                                                    <td>
                                                        <div className="mono">{it.batch}</div>
                                                        <div className="muted">{it.sku}</div>
                                                    </td>
                                                    <td>
                                                        <div className="name">
                                                            <NavLink to={`/medicines/${it.productId}`}>{it.name}</NavLink>
                                                        </div>
                                                        <div className="muted">{it.strength} • {it.form}</div>
                                                    </td>
                                                    <td>{fmtDate(it.expiry)}</td>
                                                    <td>
                                                        <span className={`chip ${it.bucket.toLowerCase()}`}>{it.bucket}</span>
                                                    </td>
                                                    <td className="right">{it.qty}</td>
                                                    <td>{it.location}</td>
                                                    <td>{it.vendor}</td>
                                                    <td>{it.manufacturer}</td>
                                                    <td className="right">{it.mrp}</td>
                                                    <td className="rowActions">
                                                        <NavLink className="link" to={`/medicines/${it.productId}`}>View</NavLink>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))
                    )}
                </section>

                {/* Side panel */}
                <aside className="side">
                    <div className="card">
                        <h3>Shortcuts</h3>
                        <ul className="links">
                            <li><NavLink to="/medicines">Catalog</NavLink></li>
                            <li><NavLink to="/inventory/batches">Batches</NavLink></li>
                            <li><NavLink to="/inventory/lots">Lots</NavLink></li>
                            <li><NavLink to="/reports/inventory">Inventory Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Saved Views</h3>
                        <ul className="views">
                            <li><button className="btnGhost small" onClick={() => { setBucket("Soon"); setForm("ALL"); setBrand("ALL"); setQ(""); }}>Expiring this quarter</button></li>
                            <li><button className="btnGhost small" onClick={() => { setBucket("Expired"); setForm("ALL"); setBrand("ALL"); setQ(""); }}>Expired</button></li>
                            <li><button className="btnGhost small" onClick={() => { setBucket("OK"); setForm("Tablet"); setBrand("ALL"); setQ(""); }}>Tablets (OK)</button></li>
                        </ul>
                    </div>

                    <div className="card legend">
                        <h3>Legend</h3>
                        <div className="chips">
                            <span className="chip soon">Expiring Soon</span>
                            <span className="chip expired">Expired</span>
                            <span className="chip ok">OK</span>
                        </div>
                        <p className="muted small">Status reflects predefined batch buckets in demo data.</p>
                    </div>

                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="summaryGrid">
                            <div><span className="k">Total</span><span className="v">{STATS.totalBatches}</span></div>
                            <div><span className="k">Soon</span><span className="v">{STATS.expiringSoon}</span></div>
                            <div><span className="k">Expired</span><span className="v">{STATS.expired}</span></div>
                            <div><span className="k">OK</span><span className="v">{STATS.ok}</span></div>
                            <div className="wide"><span className="k">As of</span><span className="v">{lastSync}</span></div>
                        </div>

                        <div className="miniList">
                            <h4>Top Batches</h4>
                            <ul>
                                {GROUPS[0].items.slice(0, 3).map(it => (
                                    <li key={it.id}>
                                        <span className="n">{it.name}</span>
                                        <span className="x">{fmtDate(it.expiry)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </Styled.Layout>
        </Styled.Page>
    );
};

export default ExpiryTracker;
