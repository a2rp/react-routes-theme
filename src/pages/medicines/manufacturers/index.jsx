import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* date utils: consistent formats
   Date -> Sat Oct 04 2025
   DateTime -> Sat Oct 04 2025 15:38:20hrs
   Time -> 15:38:20hrs
*/
const fmtDate = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    return `${days[x.getDay()]} ${mons[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

/* demo seed (display-only) */
const SEED = [
    { id: "MFG-ACME", name: "ACME Pharmaceuticals", country: "United States", city: "New Brunswick, NJ", brands: 12, products: 146, tags: ["oncology", "critical-care"], status: "active", gstin: "", established: "1984-04-18", updatedAt: "2025-09-30T14:22:10+05:30", rating: 4.6 },
    { id: "MFG-SUNRX", name: "Sunray Labs", country: "India", city: "Ahmedabad, GJ", brands: 9, products: 212, tags: ["generics", "oral-solids"], status: "active", gstin: "24SUNRX0099A1Z5", established: "1998-03-09", updatedAt: "2025-10-02T11:08:44+05:30", rating: 4.3 },
    { id: "MFG-NEPTUNE", name: "Neptune Biocare", country: "Germany", city: "Leverkusen", brands: 7, products: 88, tags: ["biologics"], status: "active", gstin: "", established: "2006-07-21", updatedAt: "2025-09-15T09:46:33+05:30", rating: 4.1 },
    { id: "MFG-AZURE", name: "Azure Therapeutics", country: "United Kingdom", city: "Cambridge", brands: 4, products: 55, tags: ["respiratory"], status: "active", gstin: "", established: "2012-10-05", updatedAt: "2025-09-24T18:01:02+05:30", rating: 4.0 },
    { id: "MFG-LOTUS", name: "Lotus Remedies", country: "India", city: "Hyderabad, TS", brands: 5, products: 102, tags: ["injectables", "cephalosporins"], status: "active", gstin: "36LOTUS8822Z1B2", established: "2003-01-14", updatedAt: "2025-10-03T16:42:17+05:30", rating: 4.2 },
    { id: "MFG-NIPPON", name: "Nippon Chem Labs", country: "Japan", city: "Osaka", brands: 6, products: 63, tags: ["cardio"], status: "active", gstin: "", established: "1994-05-11", updatedAt: "2025-09-27T10:15:55+05:30", rating: 3.9 },
    { id: "MFG-ALPINE", name: "Alpine Pharma", country: "Switzerland", city: "Basel", brands: 3, products: 41, tags: ["rare-diseases"], status: "prospect", gstin: "", established: "2019-06-30", updatedAt: "2025-09-10T12:05:02+05:30", rating: 3.8 },
    { id: "MFG-VEDA", name: "Veda Herbals", country: "India", city: "Bengaluru, KA", brands: 8, products: 75, tags: ["ayurveda", "otc"], status: "active", gstin: "29VEDA6611D8Z9", established: "2007-02-22", updatedAt: "2025-10-01T19:22:50+05:30", rating: 4.4 },
    { id: "MFG-CASCADE", name: "Cascade Life Sciences", country: "Canada", city: "Montreal", brands: 2, products: 18, tags: ["derma"], status: "inactive", gstin: "", established: "2001-09-12", updatedAt: "2025-08-29T08:14:20+05:30", rating: 3.1 },
    { id: "MFG-MEZZA", name: "Mezza Formulations", country: "Italy", city: "Milan", brands: 4, products: 47, tags: ["orphan-drugs"], status: "active", gstin: "", established: "2010-11-04", updatedAt: "2025-09-20T17:40:33+05:30", rating: 4.0 },
    { id: "MFG-ORION", name: "Orion Labs", country: "Finland", city: "Espoo", brands: 3, products: 36, tags: ["neurology"], status: "active", gstin: "", established: "1999-04-04", updatedAt: "2025-09-12T13:58:02+05:30", rating: 3.7 },
    { id: "MFG-SANTOS", name: "Santos Biotech", country: "Brazil", city: "São Paulo", brands: 5, products: 69, tags: ["antibiotics"], status: "active", gstin: "", established: "2008-07-19", updatedAt: "2025-09-08T15:21:11+05:30", rating: 3.9 },
];

const DISABLED_MSG = "Demo only: creating or editing manufacturers is disabled.";

const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>Close</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const Manufacturers = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    const [q, setQ] = useState("");
    const [country, setCountry] = useState("all");
    const [status, setStatus] = useState("all");
    const [sortBy, setSortBy] = useState("updatedAt-desc");
    const [density, setDensity] = useState("comfortable"); // or compact
    const [showDisabled, setShowDisabled] = useState(false);

    const countries = useMemo(() => {
        const s = new Set(SEED.map(x => x.country));
        return ["all", ...Array.from(s)];
    }, []);

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        let rows = SEED.filter(r => {
            if (country !== "all" && r.country !== country) return false;
            if (status !== "all" && r.status !== status) return false;
            if (!tokens.length) return true;
            const hay = (r.name + " " + r.city + " " + r.country + " " + r.tags.join(" ")).toLowerCase();
            return tokens.every(t => hay.includes(t));
        });

        const [key, dir] = sortBy.split("-");
        rows.sort((a, b) => {
            const get = (x) => {
                if (key === "name") return x.name.toLowerCase();
                if (key === "products") return x.products;
                if (key === "brands") return x.brands;
                if (key === "rating") return x.rating;
                if (key === "updatedAt") return new Date(x.updatedAt).getTime();
                return 0;
            };
            const va = get(a), vb = get(b);
            if (va < vb) return dir === "asc" ? -1 : 1;
            if (va > vb) return dir === "asc" ? 1 : -1;
            return 0;
        });

        return rows;
    }, [q, country, status, sortBy]);

    const totals = useMemo(() => {
        const uniqueCountries = new Set(SEED.map(x => x.country)).size;
        const active = SEED.filter(x => x.status === "active").length;
        return {
            total: SEED.length,
            uniqueCountries,
            active,
            products: SEED.reduce((s, x) => s + x.products, 0),
            brands: SEED.reduce((s, x) => s + x.brands, 0),
            lastUpdated: fmtDateTime(SEED.reduce((m, x) => (new Date(x.updatedAt) > new Date(m.updatedAt) ? x : m), SEED[0]).updatedAt),
        };
    }, []);

    const onExportCSV = () => {
        // simple CSV export
        const header = ["ID", "Name", "Country", "City", "Brands", "Products", "Status", "Tags", "Established", "UpdatedAt", "Rating"].join(",");
        const lines = filtered.map(r => [
            r.id, r.name, r.country, r.city, r.brands, r.products, r.status, r.tags.join("|"), r.established, r.updatedAt, r.rating
        ].map(v => `"${String(v).replaceAll('"', '""')}"`).join(","));
        const blob = new Blob([header + "\n" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "manufacturers.csv"; a.click();
        URL.revokeObjectURL(url);
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

    const ratingStars = (r) => {
        const full = Math.floor(r);
        const half = r - full >= 0.5;
        return "★".repeat(full) + (half ? "½" : "");
    };

    useEffect(() => {
        // autofocus the search once
        const input = document.getElementById("mfg-search");
        if (!input) return;
        const id = requestAnimationFrame(() => {
            try { input.focus({ preventScroll: true }); } catch { input.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/medicines">Medicines</NavLink>
            <span>/</span>
            <span className="current">Manufacturers</span>
        </nav>
    );

    return (
        <Styled.Page className="container">
            {/* print styles for section-only printing */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Manufacturers</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Total: {totals.total}</span><span>•</span>
                        <span>Active: {totals.active}</span><span>•</span>
                        <span>Countries: {totals.uniqueCountries}</span><span>•</span>
                        <span>Last update: {totals.lastUpdated}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" title="Open catalog" onClick={() => navigate("/medicines")}>Catalog</button>
                    <button className="btnPrimary" title="Export CSV" onClick={onExportCSV}>Export</button>
                    <button className="btnGhost" title="Print summary" onClick={printSection}>Print</button>
                    <button className="btnDisabled" title={DISABLED_MSG} onClick={() => setShowDisabled(true)}>New Manufacturer</button>
                </div>
            </Styled.Header>

            <Styled.Stats>
                <div className="card stat">
                    <div className="k">Total Products</div>
                    <div className="v">{totals.products}</div>
                    <div className="s">across all manufacturers</div>
                </div>
                <div className="card stat">
                    <div className="k">Total Brands</div>
                    <div className="v">{totals.brands}</div>
                    <div className="s">active portfolios</div>
                </div>
                <div className="card stat">
                    <div className="k">Active Manufacturers</div>
                    <div className="v">{totals.active}</div>
                    <div className="s">ready to supply</div>
                </div>
            </Styled.Stats>

            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="search">
                        <input
                            id="mfg-search"
                            type="text"
                            placeholder="Search name, city, tag…"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            aria-label="Search manufacturers"
                        />
                    </div>
                    <div className="filters">
                        <select value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Filter by country">
                            {countries.map(c => <option key={c} value={c}>{c === "all" ? "All Countries" : c}</option>)}
                        </select>
                        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="prospect">Prospect</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} aria-label="Sort by">
                            <option value="updatedAt-desc">Updated (newest)</option>
                            <option value="updatedAt-asc">Updated (oldest)</option>
                            <option value="name-asc">Name (A–Z)</option>
                            <option value="name-desc">Name (Z–A)</option>
                            <option value="products-desc">Products (high→low)</option>
                            <option value="products-asc">Products (low→high)</option>
                            <option value="brands-desc">Brands (high→low)</option>
                            <option value="brands-asc">Brands (low→high)</option>
                            <option value="rating-desc">Rating (high→low)</option>
                            <option value="rating-asc">Rating (low→high)</option>
                        </select>
                        <div className="density">
                            <button
                                className={density === "comfortable" ? "btnPrimary small" : "btnGhost small"}
                                onClick={() => setDensity("comfortable")}
                                title="Comfortable density"
                            >Comfort</button>
                            <button
                                className={density === "compact" ? "btnPrimary small" : "btnGhost small"}
                                onClick={() => setDensity("compact")}
                                title="Compact density"
                            >Compact</button>
                        </div>
                    </div>
                </div>
            </Styled.Toolbar>

            <Styled.Grid>
                <section className="card tableWrap">
                    <table className={`table ${density}`}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Country / City</th>
                                <th>Brands</th>
                                <th>Products</th>
                                <th>Tags</th>
                                <th>Status</th>
                                <th>Updated</th>
                                <th>Rating</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(row => (
                                <tr key={row.id}>
                                    <td>
                                        <div className="titleCell">
                                            <strong>{row.name}</strong>
                                            <div className="muted id">{row.id}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>{row.country}</div>
                                        <div className="muted">{row.city}</div>
                                    </td>
                                    <td className="num">{row.brands}</td>
                                    <td className="num">{row.products}</td>
                                    <td>
                                        <div className="chips">
                                            {row.tags.map(t => <span key={t} className="chip">{t}</span>)}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`badge ${row.status}`}>{row.status}</span>
                                    </td>
                                    <td>
                                        <div>{fmtDate(row.updatedAt)}</div>
                                        <div className="muted">{fmtDateTime(row.updatedAt)}</div>
                                    </td>
                                    <td>{ratingStars(row.rating)}</td>
                                    <td className="actions">
                                        <NavLink to="/medicines" className="btnGhost small" title="Open catalog filtered">View</NavLink>
                                        <button className="btnDisabled small" title={DISABLED_MSG} onClick={() => setShowDisabled(true)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={9}>
                                        <div className="empty">
                                            <div className="icon">∅</div>
                                            <div>No manufacturers match your filters.</div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>

                <aside className="side">
                    {/* printable summary */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="summary">
                            <div className="line"><span className="k">Manufacturers</span><span className="v">{filtered.length} / {SEED.length}</span></div>
                            <div className="line"><span className="k">Countries</span><span className="v">{countries.length - 1}</span></div>
                            <div className="line"><span className="k">Exported</span><span className="v">CSV available</span></div>
                            <div className="line"><span className="k">Generated</span><span className="v">{fmtDateTime(new Date())}</span></div>
                        </div>
                        <div className="mini muted">Use the “Print” button to print only this section.</div>
                    </div>

                    <div className="card tips">
                        <h3>Hints</h3>
                        <ul>
                            <li>Use filters to explore the catalog by country and status.</li>
                            <li>Open the full medicine catalog from the top-right actions.</li>
                            <li>Export the current view to CSV for a quick share.</li>
                            <li>Detail editing is disabled in this demo.</li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <InfoDialog
                open={showDisabled}
                title="Action unavailable"
                message={DISABLED_MSG}
                onClose={() => setShowDisabled(false)}
            />
        </Styled.Page>
    );
};

export default Manufacturers;
