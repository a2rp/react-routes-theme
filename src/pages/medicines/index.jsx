import React, { useMemo, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* ======= tiny date format helpers (consistent across app) ======= */
const pad = (n) => String(n).padStart(2, "0");
const fmt = (d, withTime = false) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ======= display-only fixtures (sample) ======= */
/* In real theme, source these from fixtures/repositories. */
const FIXTURES = [
    {
        id: "MED-AMOX-500", brand: "Amoxitab", generic: "Amoxicillin",
        strength: "500 mg", form: "Tablet", pack: "10x10", mrp: 165.00, gst: 12,
        manufacturer: "Astra Remedies", hsn: "30049099", stock: 420,
        status: "ok", expiryISO: "2026-02-15", updatedAt: "2025-10-04T10:12:45+05:30"
    },
    {
        id: "MED-PCM-650", brand: "Paracet", generic: "Paracetamol",
        strength: "650 mg", form: "Tablet", pack: "15x1", mrp: 32.00, gst: 5,
        manufacturer: "Beacon Labs", hsn: "30049091", stock: 36,
        status: "low", expiryISO: "2025-11-20", updatedAt: "2025-10-04T09:01:10+05:30"
    },
    {
        id: "MED-AZ-500", brand: "Azicine", generic: "Azithromycin",
        strength: "500 mg", form: "Tablet", pack: "3x1", mrp: 79.00, gst: 12,
        manufacturer: "NovaCare Pharma", hsn: "30042049", stock: 180,
        status: "ok", expiryISO: "2027-01-05", updatedAt: "2025-10-04T08:30:00+05:30"
    },
    {
        id: "MED-DOLO-650", brand: "Dolor", generic: "Paracetamol",
        strength: "650 mg", form: "Tablet", pack: "15x1", mrp: 35.00, gst: 5,
        manufacturer: "Everest Biotech", hsn: "30049091", stock: 0,
        status: "out", expiryISO: "2025-10-10", updatedAt: "2025-10-04T07:58:33+05:30"
    },
    {
        id: "MED-IBU-400", brand: "Ibufast", generic: "Ibuprofen",
        strength: "400 mg", form: "Tablet", pack: "10x1", mrp: 48.00, gst: 12,
        manufacturer: "Astra Remedies", hsn: "30049029", stock: 95,
        status: "ok", expiryISO: "2026-06-30", updatedAt: "2025-10-03T17:41:22+05:30"
    },
    {
        id: "MED-OND-4", brand: "Ondex", generic: "Ondansetron",
        strength: "4 mg/5ml", form: "Syrup", pack: "60 ml", mrp: 58.00, gst: 12,
        manufacturer: "Beacon Labs", hsn: "30049034", stock: 22,
        status: "low", expiryISO: "2025-12-31", updatedAt: "2025-10-03T12:10:48+05:30"
    },
    {
        id: "MED-PANT-40", brand: "Pantose", generic: "Pantoprazole",
        strength: "40 mg", form: "Tablet", pack: "15x1", mrp: 89.00, gst: 12,
        manufacturer: "Trident Healthcare", hsn: "30049099", stock: 300,
        status: "ok", expiryISO: "2027-05-01", updatedAt: "2025-10-02T16:05:05+05:30"
    },
    {
        id: "MED-AMLO-5", brand: "Amlocard", generic: "Amlodipine",
        strength: "5 mg", form: "Tablet", pack: "10x1", mrp: 25.00, gst: 12,
        manufacturer: "NovaCare Pharma", hsn: "30049069", stock: 11,
        status: "low", expiryISO: "2025-10-06", updatedAt: "2025-10-04T11:21:09+05:30"
    },
    {
        id: "MED-SALBUT-100", brand: "Salbair", generic: "Salbutamol",
        strength: "100 mcg", form: "Inhaler", pack: "200 metered", mrp: 295.00, gst: 12,
        manufacturer: "Everest Biotech", hsn: "30049022", stock: 62,
        status: "ok", expiryISO: "2026-11-18", updatedAt: "2025-09-22T14:18:27+05:30"
    },
    {
        id: "MED-AMOX-250-SYR", brand: "AmoxiKid", generic: "Amoxicillin",
        strength: "250 mg/5ml", form: "Syrup", pack: "100 ml", mrp: 84.00, gst: 12,
        manufacturer: "Astra Remedies", hsn: "30049099", stock: 8,
        status: "low", expiryISO: "2025-10-04", updatedAt: "2025-10-04T06:33:11+05:30"
    },
    {
        id: "MED-CEF-200", brand: "Cefin", generic: "Cefixime",
        strength: "200 mg", form: "Tablet", pack: "10x1", mrp: 145.00, gst: 12,
        manufacturer: "Trident Healthcare", hsn: "30042032", stock: 210,
        status: "ok", expiryISO: "2026-02-01", updatedAt: "2025-09-30T10:00:00+05:30"
    },
    {
        id: "MED-BET-0.1", brand: "Betasol", generic: "Betamethasone",
        strength: "0.1%", form: "Ointment", pack: "20 g", mrp: 70.00, gst: 12,
        manufacturer: "Beacon Labs", hsn: "30049011", stock: 4,
        status: "low", expiryISO: "2025-10-12", updatedAt: "2025-10-04T08:55:55+05:30"
    }
];

/* ======= table utilities (display-only, in-memory) ======= */
const sorters = {
    brand: (a, b) => a.brand.localeCompare(b.brand),
    generic: (a, b) => a.generic.localeCompare(b.generic),
    mrp: (a, b) => a.mrp - b.mrp,
    stock: (a, b) => a.stock - b.stock,
    expiry: (a, b) => new Date(a.expiryISO) - new Date(b.expiryISO),
};
const forms = ["Tablet", "Capsule", "Syrup", "Ointment", "Inhaler", "Injection"];
const statuses = [
    { key: "ok", label: "In Stock" },
    { key: "low", label: "Low Stock" },
    { key: "out", label: "Out of Stock" },
];

const MedicinesList = () => {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [formFilter, setFormFilter] = useState(new Set());
    const [statusFilter, setStatusFilter] = useState(new Set());
    const [sortKey, setSortKey] = useState("brand");
    const [sortDir, setSortDir] = useState("asc");
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const printRef = useRef(null);

    const all = useMemo(() => FIXTURES, []);
    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return all.filter(m => {
            const hay = `${m.id} ${m.brand} ${m.generic} ${m.form} ${m.manufacturer} ${m.hsn}`.toLowerCase();
            const searchHit = tokens.length === 0 || tokens.every(t => hay.includes(t));
            const formHit = formFilter.size ? formFilter.has(m.form) : true;
            const statusHit = statusFilter.size ? statusFilter.has(m.status) : true;
            return searchHit && formHit && statusHit;
        });
    }, [all, q, formFilter, statusFilter]);

    const sorted = useMemo(() => {
        const arr = [...filtered];
        const s = sorters[sortKey] || sorters.brand;
        arr.sort(s);
        if (sortDir === "desc") arr.reverse();
        return arr;
    }, [filtered, sortKey, sortDir]);

    const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
    const pageRows = sorted.slice((page - 1) * pageSize, page * pageSize);

    const toggleForm = (v) => {
        setPage(1);
        setFormFilter(prev => {
            const next = new Set(prev);
            next.has(v) ? next.delete(v) : next.add(v);
            return next;
        });
    };
    const toggleStatus = (k) => {
        setPage(1);
        setStatusFilter(prev => {
            const next = new Set(prev);
            next.has(k) ? next.delete(k) : next.add(k);
            return next;
        });
    };

    const changeSort = (key) => {
        if (key === sortKey) setSortDir(d => (d === "asc" ? "desc" : "asc"));
        else { setSortKey(key); setSortDir("asc"); }
    };

    const exportJSON = () => {
        const blob = new Blob([JSON.stringify(sorted, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "medicines-export.json"; a.click();
        URL.revokeObjectURL(url);
    };

    const copyDeepLink = (id) => {
        const url = new URL(window.location.href);
        url.pathname = `${import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}/medicines/${id}`;
        navigator.clipboard?.writeText(url.toString());
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

    return (
        <Styled.Page className="container">
            {/* print css for this page */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left:0; top:0; width:100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="title">
                    <h1>Medicines</h1>
                    <div className="meta">
                        <span>Total</span>
                        <strong>{sorted.length}</strong>
                        <span>•</span>
                        <span>Updated</span>
                        <strong>{fmt(new Date(), true)}</strong>
                    </div>
                </div>
                <div className="actions">
                    <button className="btnGhost" onClick={printSection}>Print</button>
                    <button className="btnGhost" onClick={exportJSON}>Export</button>
                    <button className="btnPrimary" disabled title="Demo mode">Add Medicine</button>
                    <button className="btnPrimary" disabled title="Demo mode">Import</button>
                </div>
            </Styled.Header>

            <Styled.Toolbar className="card">
                <div className="search">
                    <input
                        value={q}
                        onChange={(e) => { setQ(e.target.value); setPage(1); }}
                        placeholder="Search brand, generic, SKU, manufacturer…"
                        aria-label="Search medicines"
                    />
                </div>

                <div className="filters">
                    <div className="group">
                        <div className="groupTitle">Form</div>
                        <div className="chips">
                            {forms.map(f => (
                                <button
                                    key={f}
                                    className={`chip ${formFilter.has(f) ? "active" : ""}`}
                                    onClick={() => toggleForm(f)}
                                >{f}</button>
                            ))}
                        </div>
                    </div>

                    <div className="group">
                        <div className="groupTitle">Status</div>
                        <div className="chips">
                            {statuses.map(s => (
                                <button
                                    key={s.key}
                                    className={`chip ${statusFilter.has(s.key) ? "active" : ""}`}
                                    onClick={() => toggleStatus(s.key)}
                                >{s.label}</button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sort">
                    <span>Sort by</span>
                    <select value={sortKey} onChange={(e) => { setSortKey(e.target.value); setSortDir("asc"); }}>
                        <option value="brand">Brand</option>
                        <option value="generic">Generic</option>
                        <option value="mrp">MRP</option>
                        <option value="stock">Stock</option>
                        <option value="expiry">Expiry</option>
                    </select>
                    <button className="btnGhost" onClick={() => setSortDir(d => d === "asc" ? "desc" : "asc")}>
                        {sortDir === "asc" ? "Asc" : "Desc"}
                    </button>
                </div>
            </Styled.Toolbar>

            <Styled.Grid>
                <section className="main card">
                    <div className="tableWrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th onClick={() => changeSort("brand")}>Brand</th>
                                    <th onClick={() => changeSort("generic")}>Generic</th>
                                    <th>Form</th>
                                    <th>Strength</th>
                                    <th>Pack</th>
                                    <th onClick={() => changeSort("mrp")}>MRP</th>
                                    <th>GST %</th>
                                    <th onClick={() => changeSort("stock")}>Stock</th>
                                    <th onClick={() => changeSort("expiry")}>Expiry</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pageRows.map(row => (
                                    <tr key={row.id}>
                                        <td>
                                            <div className="brand">
                                                <Link className="brandLink" to={`/medicines/${row.id}`}>{row.brand}</Link>
                                                <div className="sku">{row.id}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="generic">{row.generic}</div>
                                            <div className="mfg">
                                                <span className="muted">by</span>{" "}
                                                <NavLink to="/medicines/manufacturers">{row.manufacturer}</NavLink>
                                            </div>
                                        </td>
                                        <td>{row.form}</td>
                                        <td>{row.strength}</td>
                                        <td>{row.pack}</td>
                                        <td>₹{row.mrp.toFixed(2)}</td>
                                        <td>{row.gst}%</td>
                                        <td>{row.stock}</td>
                                        <td>{fmt(row.expiryISO)}</td>
                                        <td>
                                            <span className={`badge ${row.status}`}>
                                                {row.status === "ok" && "In Stock"}
                                                {row.status === "low" && "Low"}
                                                {row.status === "out" && "Out"}
                                            </span>
                                        </td>
                                        <td className="rowActions">
                                            <Link to={`/medicines/${row.id}`} className="act">View</Link>
                                            <button className="act" onClick={() => copyDeepLink(row.id)}>Copy Link</button>
                                            <Link to="/medicines/hsn-gst" className="act">HSN</Link>
                                        </td>
                                    </tr>
                                ))}
                                {pageRows.length === 0 && (
                                    <tr>
                                        <td colSpan={11}>
                                            <Styled.Empty>
                                                <div className="emoji">🗂️</div>
                                                <div className="title">No results</div>
                                                <div className="hint">Try adjusting filters or search terms.</div>
                                            </Styled.Empty>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="pager">
                        <button className="btnGhost" disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</button>
                        <div className="pageInfo">Page {page} / {totalPages}</div>
                        <button className="btnGhost" disabled={page >= totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>Next</button>
                    </div>
                </section>

                <aside className="side">
                    <div className="card miniCard">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/medicines/manufacturers">Manufacturers</NavLink></li>
                            <li><NavLink to="/medicines/molecules">Molecules</NavLink></li>
                            <li><NavLink to="/medicines/forms">Forms</NavLink></li>
                            <li><NavLink to="/medicines/strengths">Strengths</NavLink></li>
                            <li><NavLink to="/medicines/expiry-tracker">Expiry Tracker</NavLink></li>
                            <li><NavLink to="/medicines/hsn-gst">HSN &amp; GST</NavLink></li>
                        </ul>
                    </div>

                    <div className="card miniCard">
                        <h3>Legend</h3>
                        <div className="legend">
                            <span className="badge ok">In Stock</span>
                            <span className="badge low">Low</span>
                            <span className="badge out">Out</span>
                        </div>
                        <div className="legendNote">Row menu includes deep links and copy-link for quick sharing.</div>
                    </div>

                    {/* printable summary */}
                    <div className="card miniCard" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Generated</span><span className="v">{fmt(new Date(), true)}</span></div>
                            <div className="line"><span className="k">Items</span><span className="v">{sorted.length}</span></div>
                            <div className="line"><span className="k">Filters</span><span className="v">
                                {q ? `q="${q}"` : "none"}
                                {formFilter.size ? `, forms=[${[...formFilter].join(", ")}]` : ""}
                                {statusFilter.size ? `, status=[${[...statusFilter].join(", ")}]` : ""}
                            </span></div>
                        </div>
                        <div className="miniTable">
                            <table>
                                <thead><tr><th>Brand</th><th>Generic</th><th>MRP</th><th>Expiry</th></tr></thead>
                                <tbody>
                                    {sorted.slice(0, 8).map(r => (
                                        <tr key={r.id}>
                                            <td>{r.brand}</td>
                                            <td>{r.generic}</td>
                                            <td>₹{r.mrp.toFixed(2)}</td>
                                            <td>{fmt(r.expiryISO)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default MedicinesList;
