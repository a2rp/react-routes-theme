import React, { useMemo, useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* date utils (consistent format across app) */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* display-only seed — dosage forms */
const TOTAL_FORMS = 20;
const FORMS = [
    { id: "FORM-001", name: "Tablet", abbrev: "Tab", route: "Oral", category: "Solid", examples: ["Paracetamol 500", "Cefixime 200"], commonUse: "General prescriptions", updatedAt: "2025-10-04T13:25:10Z" },
    { id: "FORM-002", name: "Capsule", abbrev: "Cap", route: "Oral", category: "Solid", examples: ["Omeprazole 20", "Doxycycline 100"], commonUse: "Gastro, antibiotics", updatedAt: "2025-10-04T12:05:45Z" },
    { id: "FORM-003", name: "Syrup", abbrev: "Syp", route: "Oral", category: "Liquid", examples: ["Ambroxol", "Paracetamol"], commonUse: "Paediatric dosing", updatedAt: "2025-10-04T09:11:19Z" },
    { id: "FORM-004", name: "Suspension", abbrev: "Susp", route: "Oral", category: "Liquid", examples: ["Azithromycin 200/5ml"], commonUse: "Antibiotics (kids)", updatedAt: "2025-10-03T17:42:30Z" },
    { id: "FORM-005", name: "Injection", abbrev: "Inj", route: "Parenteral", category: "Parenteral", examples: ["Ceftriaxone", "Insulin"], commonUse: "Acute care", updatedAt: "2025-10-02T08:12:00Z" },
    { id: "FORM-006", name: "IV Infusion", abbrev: "IV", route: "Parenteral", category: "Parenteral", examples: ["NS 0.9%", "RL"], commonUse: "Fluid therapy", updatedAt: "2025-10-01T16:55:11Z" },
    { id: "FORM-007", name: "Ointment", abbrev: "Oint", route: "Topical", category: "Semi-solid", examples: ["Mupirocin", "Clobetasol"], commonUse: "Dermatology", updatedAt: "2025-09-30T10:03:50Z" },
    { id: "FORM-008", name: "Cream", abbrev: "Crm", route: "Topical", category: "Semi-solid", examples: ["Clotrimazole", "Hydrocortisone"], commonUse: "Derm / antifungal", updatedAt: "2025-09-29T14:40:21Z" },
    { id: "FORM-009", name: "Gel", abbrev: "Gel", route: "Topical", category: "Semi-solid", examples: ["Diclofenac", "Adapalene"], commonUse: "Analgesic / acne", updatedAt: "2025-09-28T07:38:10Z" },
    { id: "FORM-010", name: "Lotion", abbrev: "Lot", route: "Topical", category: "Liquid", examples: ["Calamine", "Permethrin"], commonUse: "Skin soothing", updatedAt: "2025-09-27T18:21:05Z" },
    { id: "FORM-011", name: "Eye Drops", abbrev: "ED", route: "Ophthalmic", category: "Liquid", examples: ["Moxifloxacin", "Carboxymethylcellulose"], commonUse: "Eye infections/dry eye", updatedAt: "2025-09-26T09:45:33Z" },
    { id: "FORM-012", name: "Ear Drops", abbrev: "EarD", route: "Otic", category: "Liquid", examples: ["Ofloxacin", "Neomycin/Beclo"], commonUse: "Otitis externa", updatedAt: "2025-09-26T09:45:33Z" },
    { id: "FORM-013", name: "Nasal Spray", abbrev: "NS", route: "Nasal", category: "Aerosol", examples: ["Fluticasone", "Oxymetazoline"], commonUse: "Rhinitis", updatedAt: "2025-09-25T11:00:41Z" },
    { id: "FORM-014", name: "Inhaler", abbrev: "Inh", route: "Inhalation", category: "Aerosol", examples: ["Levosalbutamol", "Budesonide"], commonUse: "Asthma/COPD", updatedAt: "2025-09-24T15:32:29Z" },
    { id: "FORM-015", name: "Powder", abbrev: "Pwd", route: "Oral/Topical", category: "Solid", examples: ["ORS", "Antifungal dusting"], commonUse: "Rehydration / skin", updatedAt: "2025-09-23T08:04:09Z" },
    { id: "FORM-016", name: "Sachet", abbrev: "Sach", route: "Oral", category: "Solid", examples: ["Racecadotril", "Probiotics"], commonUse: "Diarrhoea / gut", updatedAt: "2025-09-22T13:19:55Z" },
    { id: "FORM-017", name: "Suppository", abbrev: "Supp", route: "Rectal", category: "Solid", examples: ["Glycerin", "Paracetamol"], commonUse: "Paediatric / local", updatedAt: "2025-09-21T19:48:01Z" },
    { id: "FORM-018", name: "Transdermal Patch", abbrev: "Patch", route: "Transdermal", category: "Patch", examples: ["Nitroglycerin", "Fentanyl"], commonUse: "Chronic therapy", updatedAt: "2025-09-20T06:31:44Z" },
    { id: "FORM-019", name: "Mouthwash", abbrev: "MW", route: "Oral Rinse", category: "Liquid", examples: ["Chlorhexidine", "Fluoride"], commonUse: "Dentistry", updatedAt: "2025-09-19T12:57:13Z" },
    { id: "FORM-020", name: "Elixir", abbrev: "Elx", route: "Oral", category: "Liquid", examples: ["Iron Elixir", "Antihistamine"], commonUse: "Palatable liquids", updatedAt: "2025-09-18T17:26:39Z" },
];

const CATEGORIES = [
    { key: "Solid", label: "Solid" },
    { key: "Liquid", label: "Liquid" },
    { key: "Semi-solid", label: "Semi-solid" },
    { key: "Parenteral", label: "Parenteral" },
    { key: "Aerosol", label: "Aerosol" },
    { key: "Patch", label: "Patch" },
];

const ROUTES = [
    "Oral", "Parenteral", "Topical", "Ophthalmic", "Otic", "Inhalation", "Nasal", "Rectal", "Transdermal", "Oral Rinse", "Oral/Topical"
];

const FormsPage = () => {
    const now = useMemo(() => new Date(), []);
    const [query, setQuery] = useState("");
    const [picked, setPicked] = useState([]); // category chips
    const [route, setRoute] = useState("all");
    const [view, setView] = useState("table"); // 'table' | 'cards'
    const printRef = useRef(null);
    const searchRef = useRef(null);

    // focus the search on mount
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            try { searchRef.current?.focus({ preventScroll: true }); } catch { searchRef.current?.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    const toggleCategory = (key) => {
        setPicked((prev) => prev.includes(key) ? prev.filter(x => x !== key) : [...prev, key]);
    };

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return FORMS.filter(f => {
            const textMatch = !q || [f.name, f.abbrev, f.route, f.category, ...f.examples, f.commonUse].join(" ").toLowerCase().includes(q);
            const catMatch = picked.length === 0 || picked.includes(f.category);
            const routeMatch = route === "all" || f.route === route || (route === "Oral/Topical" && f.route === "Oral/Topical");
            return textMatch && catMatch && routeMatch;
        });
    }, [query, picked, route]);

    const clearFilters = () => { setQuery(""); setPicked([]); setRoute("all"); };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => { document.body.classList.remove("print-section-mode"); window.onafterprint = null; };
        window.print();
    };

    return (
        <Styled.Page>
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
                    <h1>Dosage Forms</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/medicines">Medicines</NavLink>
                        <span>/</span>
                        <span className="current">Forms</span>
                    </nav>
                    <div className="meta">
                        <span>Total: {TOTAL_FORMS}</span>
                        <span>•</span>
                        <span>Last refreshed: {fmt(now, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" title="Open manufacturers">
                        <NavLink to="/medicines/manufacturers">Manufacturers</NavLink>
                    </button>
                    <button className="btnGhost" title="Open molecules">
                        <NavLink to="/medicines/molecules">Molecules</NavLink>
                    </button>
                    <button className="btnGhost" title="Inventory batches">
                        <NavLink to="/inventory/batches">Batches</NavLink>
                    </button>
                    <button className="btnGhost" title="Reports">
                        <NavLink to="/reports/inventory">Inventory Report</NavLink>
                    </button>
                    <button className="btnPrimary" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnPrimary" title="Import / Export">
                        <NavLink to="/tools/import-export">Export</NavLink>
                    </button>
                    <button className="btnPrimary" disabled title="Demo: action disabled">New Form</button>
                </div>
            </Styled.Header>

            <Styled.Toolbar className="card">
                <div className="search">
                    <input
                        ref={searchRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by name, abbrev, route, example..."
                        aria-label="Search dosage forms"
                    />
                </div>

                <div className="chips">
                    {CATEGORIES.map(c => (
                        <button
                            key={c.key}
                            className={`chip ${picked.includes(c.key) ? "active" : ""}`}
                            onClick={() => toggleCategory(c.key)}
                            aria-pressed={picked.includes(c.key)}
                            title={c.label}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                <div className="route">
                    <label>Route</label>
                    <select value={route} onChange={(e) => setRoute(e.target.value)}>
                        <option value="all">All</option>
                        {ROUTES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>

                <div className="view">
                    <div className="seg" role="tablist" aria-label="View mode">
                        <button role="tab" aria-selected={view === "table"} className={view === "table" ? "active" : ""} onClick={() => setView("table")}>Table</button>
                        <button role="tab" aria-selected={view === "cards"} className={view === "cards" ? "active" : ""} onClick={() => setView("cards")}>Cards</button>
                    </div>
                </div>

                <div className="right">
                    <button className="btnGhost" onClick={clearFilters} title="Reset all filters">Reset</button>
                </div>
            </Styled.Toolbar>

            {view === "table" ? (
                <Styled.TableWrap className="card">
                    <table>
                        <thead>
                            <tr>
                                <th>Form</th>
                                <th>Abbrev</th>
                                <th>Route</th>
                                <th>Category</th>
                                <th>Examples</th>
                                <th>Notes</th>
                                <th>Updated</th>
                                <th style={{ textAlign: "right" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(f => (
                                <tr key={f.id}>
                                    <td>
                                        <div className="titleCell">
                                            <span className="title">{f.name}</span>
                                            <span className="muted">#{f.id}</span>
                                        </div>
                                    </td>
                                    <td><span className="pill">{f.abbrev}</span></td>
                                    <td>{f.route}</td>
                                    <td>{f.category}</td>
                                    <td className="examples">{f.examples.join(", ")}</td>
                                    <td className="muted">{f.commonUse}</td>
                                    <td className="muted">{fmt(f.updatedAt, true)}</td>
                                    <td style={{ textAlign: "right" }}>
                                        <div className="rowActions">
                                            <NavLink to="/medicines" title="View related items" className="linkBtn">View Items</NavLink>
                                            <button className="linkBtn" disabled title="Demo: action disabled">Edit</button>
                                            <button className="linkBtn danger" disabled title="Demo: action disabled">Archive</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={8}>
                                        <Styled.Empty>
                                            <div className="icon" aria-hidden="true">🔎</div>
                                            <div className="text">
                                                <h4>No forms match your filters</h4>
                                                <p className="muted">Try clearing filters or checking a different category/route.</p>
                                            </div>
                                            <div className="cta">
                                                <button className="btnGhost" onClick={clearFilters}>Clear Filters</button>
                                            </div>
                                        </Styled.Empty>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Styled.TableWrap>
            ) : (
                <Styled.Cards className="card">
                    <div className="grid">
                        {filtered.map(f => (
                            <article className="cardItem" key={f.id}>
                                <header>
                                    <h3>{f.name}</h3>
                                    <span className="pill">{f.abbrev}</span>
                                </header>
                                <section className="meta">
                                    <div><span className="label">Route</span><span>{f.route}</span></div>
                                    <div><span className="label">Category</span><span>{f.category}</span></div>
                                    <div><span className="label">Updated</span><span className="muted">{fmt(f.updatedAt, true)}</span></div>
                                </section>
                                <section className="examples">
                                    <div className="label">Examples</div>
                                    <ul>{f.examples.map(x => <li key={x}>{x}</li>)}</ul>
                                </section>
                                <footer className="actions">
                                    <NavLink to="/medicines" className="btnGhost" title="View related items">View Items</NavLink>
                                    <button className="btnGhost" disabled title="Demo: action disabled">Edit</button>
                                    <button className="btnGhost danger" disabled title="Demo: action disabled">Archive</button>
                                </footer>
                            </article>
                        ))}
                        {filtered.length === 0 && (
                            <Styled.Empty className="card">
                                <div className="icon" aria-hidden="true">🔎</div>
                                <div className="text">
                                    <h4>No forms match your filters</h4>
                                    <p className="muted">Try clearing filters or checking a different category/route.</p>
                                </div>
                                <div className="cta">
                                    <button className="btnGhost" onClick={clearFilters}>Clear Filters</button>
                                </div>
                            </Styled.Empty>
                        )}
                    </div>
                </Styled.Cards>
            )}

            {/* Printable summary */}
            <Styled.PrintBox className="card" id="search-print-area" ref={printRef}>
                <h3>Forms Summary</h3>
                <div className="rows">
                    <div className="row">
                        <span className="k">Generated</span>
                        <span className="v">{fmt(now, true)}</span>
                    </div>
                    <div className="row">
                        <span className="k">Catalog</span>
                        <span className="v">Medicines → Forms</span>
                    </div>
                    <div className="row">
                        <span className="k">Overview</span>
                        <span className="v">Oral, Parenteral, Topical, Aerosols and more. Common examples included for easy cross-check.</span>
                    </div>
                </div>

                <div className="miniTable">
                    <div className="head">
                        <div>Form</div><div>Abbrev</div><div>Route</div><div>Category</div><div>Example</div>
                    </div>
                    {FORMS.slice(0, 12).map(f => (
                        <div className="row" key={f.id}>
                            <div>{f.name}</div>
                            <div>{f.abbrev}</div>
                            <div>{f.route}</div>
                            <div>{f.category}</div>
                            <div>{f.examples[0]}</div>
                        </div>
                    ))}
                </div>
            </Styled.PrintBox>
        </Styled.Page>
    );
};

export default FormsPage;
