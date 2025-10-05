import React, { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- date utils (consistent formatting everywhere) ---------- */
const fmt = (d, withTime = false) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    return withTime
        ? `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`
        : base;
};

/* ---------- demo dataset (display-only; stable deep links) ---------- */
const STRENGTHS = [
    {
        id: "MED-AMOX",
        molecule: "Amoxicillin",
        forms: ["Tablet", "Capsule", "Suspension"],
        strengths: ["125 mg/5 ml", "250 mg", "500 mg"],
        uomGroup: "mg",
        brandExamples: ["Amoxil", "Mox", "Trimox"],
        brandCount: 28,
        updatedAt: "2025-10-04T10:15:00+05:30",
    },
    {
        id: "MED-AZTH",
        molecule: "Azithromycin",
        forms: ["Tablet", "Suspension"],
        strengths: ["200 mg/5 ml", "250 mg", "500 mg"],
        uomGroup: "mg",
        brandExamples: ["Azithral", "Zithromax"],
        brandCount: 31,
        updatedAt: "2025-10-04T08:20:00+05:30",
    },
    {
        id: "MED-PARA",
        molecule: "Paracetamol",
        forms: ["Tablet", "Syrup", "Suppository"],
        strengths: ["125 mg/5 ml", "250 mg/5 ml", "500 mg", "650 mg"],
        uomGroup: "mg",
        brandExamples: ["Crocin", "Calpol", "Tylenol"],
        brandCount: 52,
        updatedAt: "2025-10-03T17:32:00+05:30",
    },
    {
        id: "MED-IBU",
        molecule: "Ibuprofen",
        forms: ["Tablet", "Suspension", "Gel"],
        strengths: ["100 mg/5 ml", "200 mg", "400 mg"],
        uomGroup: "mg",
        brandExamples: ["Brufen", "Advil"],
        brandCount: 22,
        updatedAt: "2025-10-02T12:05:00+05:30",
    },
    {
        id: "MED-METF",
        molecule: "Metformin",
        forms: ["Tablet", "Tablet ER"],
        strengths: ["250 mg", "500 mg", "750 mg", "1000 mg"],
        uomGroup: "mg",
        brandExamples: ["Glycomet", "Glucophage"],
        brandCount: 26,
        updatedAt: "2025-10-04T09:42:00+05:30",
    },
    {
        id: "MED-ATOR",
        molecule: "Atorvastatin",
        forms: ["Tablet"],
        strengths: ["5 mg", "10 mg", "20 mg", "40 mg"],
        uomGroup: "mg",
        brandExamples: ["Atorlip", "Lipitor"],
        brandCount: 18,
        updatedAt: "2025-09-29T11:10:00+05:30",
    },
    {
        id: "MED-OMEP",
        molecule: "Omeprazole",
        forms: ["Capsule", "Tablet"],
        strengths: ["10 mg", "20 mg", "40 mg"],
        uomGroup: "mg",
        brandExamples: ["Omez", "Prilosec"],
        brandCount: 16,
        updatedAt: "2025-10-01T10:00:00+05:30",
    },
    {
        id: "MED-PANTO",
        molecule: "Pantoprazole",
        forms: ["Tablet", "Injection"],
        strengths: ["20 mg", "40 mg"],
        uomGroup: "mg",
        brandExamples: ["Pantocid", "Protonix"],
        brandCount: 19,
        updatedAt: "2025-10-03T10:36:00+05:30",
    },
    {
        id: "MED-CEFI",
        molecule: "Cefixime",
        forms: ["Tablet", "Dispersible Tablet", "Suspension"],
        strengths: ["50 mg/5 ml", "100 mg", "200 mg"],
        uomGroup: "mg",
        brandExamples: ["Suprax", "Taxim-O"],
        brandCount: 21,
        updatedAt: "2025-10-04T07:04:00+05:30",
    },
    {
        id: "MED-DOXY",
        molecule: "Doxycycline",
        forms: ["Capsule", "Tablet"],
        strengths: ["50 mg", "100 mg"],
        uomGroup: "mg",
        brandExamples: ["Doxy-1", "Vibramycin"],
        brandCount: 15,
        updatedAt: "2025-09-28T13:44:00+05:30",
    },
    {
        id: "MED-SALB",
        molecule: "Salbutamol",
        forms: ["Inhaler", "Syrup", "Neb Solution"],
        strengths: ["100 mcg/dose", "2 mg/5 ml", "5 mg/ml"],
        uomGroup: "mcg",
        brandExamples: ["Ventolin", "Asthalin"],
        brandCount: 14,
        updatedAt: "2025-10-04T06:40:00+05:30",
    },
    {
        id: "MED-LEVOC",
        molecule: "Levocetirizine",
        forms: ["Tablet", "Syrup"],
        strengths: ["2.5 mg/5 ml", "5 mg"],
        uomGroup: "mg",
        brandExamples: ["Xyzal", "Levocet"],
        brandCount: 17,
        updatedAt: "2025-10-02T18:21:00+05:30",
    },
    {
        id: "MED-CETI",
        molecule: "Cetirizine",
        forms: ["Tablet", "Syrup"],
        strengths: ["1 mg/ml", "5 mg", "10 mg"],
        uomGroup: "mg",
        brandExamples: ["Cetzine", "Zyrtec"],
        brandCount: 24,
        updatedAt: "2025-10-03T14:51:00+05:30",
    },
    {
        id: "MED-VITD3",
        molecule: "Cholecalciferol (Vit D3)",
        forms: ["Softgel", "Granules", "Drops"],
        strengths: ["60000 IU", "400 IU/drop"],
        uomGroup: "IU",
        brandExamples: ["D-Rise", "Calcirol"],
        brandCount: 12,
        updatedAt: "2025-10-04T09:00:00+05:30",
    },
    {
        id: "MED-VITB12",
        molecule: "Cyanocobalamin (Vit B12)",
        forms: ["Tablet", "Injection"],
        strengths: ["500 mcg", "1000 mcg"],
        uomGroup: "mcg",
        brandExamples: ["Cobadex", "Milgamma"],
        brandCount: 9,
        updatedAt: "2025-10-01T19:30:00+05:30",
    },
    {
        id: "MED-INS",
        molecule: "Insulin (Regular)",
        forms: ["Injection"],
        strengths: ["100 IU/ml"],
        uomGroup: "IU",
        brandExamples: ["Actrapid"],
        brandCount: 6,
        updatedAt: "2025-09-30T08:02:00+05:30",
    },
    {
        id: "MED-PVID",
        molecule: "Povidone Iodine",
        forms: ["Solution", "Ointment", "Gargle"],
        strengths: ["5 %", "10 %"],
        uomGroup: "%",
        brandExamples: ["Betadine"],
        brandCount: 8,
        updatedAt: "2025-10-02T16:10:00+05:30",
    },
    {
        id: "MED-CHX",
        molecule: "Chlorhexidine",
        forms: ["Mouthwash", "Solution"],
        strengths: ["0.2 %"],
        uomGroup: "%",
        brandExamples: ["Hexidine"],
        brandCount: 5,
        updatedAt: "2025-10-03T11:11:00+05:30",
    },
    {
        id: "MED-DICL",
        molecule: "Diclofenac",
        forms: ["Tablet", "Gel", "Injection"],
        strengths: ["50 mg", "75 mg/ml"],
        uomGroup: "mg",
        brandExamples: ["Voveran", "Voltaren"],
        brandCount: 20,
        updatedAt: "2025-10-01T09:27:00+05:30",
    },
];

/* ---------- small helpers ---------- */
const unique = (arr) => [...new Set(arr)];
const flat = (arr) => arr.reduce((a, b) => a.concat(b), []);

const StrengthsPage = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    const [q, setQ] = useState("");
    const [formFilter, setFormFilter] = useState("All");
    const [uomFilter, setUomFilter] = useState("All");
    const [sortKey, setSortKey] = useState("alpha"); // alpha | brands | updated
    const [copied, setCopied] = useState("");

    const allForms = useMemo(() => unique(flat(STRENGTHS.map(s => s.forms))), []);
    const allUoms = useMemo(() => unique(STRENGTHS.map(s => s.uomGroup)), []);
    const lastUpdated = useMemo(() => {
        const mx = STRENGTHS.reduce((acc, s) => Math.max(acc, new Date(s.updatedAt).getTime()), 0);
        return new Date(mx);
    }, []);

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        let list = STRENGTHS.filter(s => {
            const hay = [
                s.molecule,
                s.forms.join(" "),
                s.strengths.join(" "),
                s.brandExamples.join(" "),
                s.uomGroup
            ].join(" ").toLowerCase();
            const matchesText = tokens.length === 0 || tokens.every(t => hay.includes(t));
            const matchesForm = formFilter === "All" || s.forms.includes(formFilter);
            const matchesUom = uomFilter === "All" || s.uomGroup === uomFilter;
            return matchesText && matchesForm && matchesUom;
        });

        if (sortKey === "brands") list.sort((a, b) => b.brandCount - a.brandCount || a.molecule.localeCompare(b.molecule));
        else if (sortKey === "updated") list.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        else list.sort((a, b) => a.molecule.localeCompare(b.molecule));

        return list;
    }, [q, formFilter, uomFilter, sortKey]);

    const statTotals = useMemo(() => ({
        molecules: STRENGTHS.length,
        forms: unique(flat(STRENGTHS.map(s => s.forms))).length,
        uoms: unique(STRENGTHS.map(s => s.uomGroup)).length,
    }), []);

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const copyLink = (href) => {
        try {
            navigator.clipboard.writeText(window.location.origin + (import.meta.env.BASE_URL || "") + href.replace(/^\//, ""));
            setCopied(href);
            setTimeout(() => setCopied(""), 2000);
        } catch {
            // ignore
        }
    };

    useEffect(() => {
        // focus search on mount to keep UX consistent with sidebar
        const el = document.getElementById("strengths-search");
        if (!el) return;
        const id = requestAnimationFrame(() => {
            try { el.focus({ preventScroll: true }); } catch { el.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <Styled.Page className="container">
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
                    <h1>Medicine Strengths</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/medicines">Medicines</NavLink>
                        <span>/</span>
                        <span className="current">Strengths</span>
                    </nav>
                    <div className="meta">
                        <span>Total Molecules: {statTotals.molecules}</span>
                        <span>•</span>
                        <span>Forms: {statTotals.forms}</span>
                        <span>•</span>
                        <span>UoM Groups: {statTotals.uoms}</span>
                        <span>•</span>
                        <span>Last Update: {fmt(lastUpdated, true)}</span>
                    </div>
                </div>

                <div className="right actions">
                    <button className="btnGhost" onClick={printSection} title="Print this list">Print</button>
                    <button className="btnDisabled" title="Demo only — adding is disabled">Add Strength</button>
                    <button className="btnDisabled" title="Demo only — import is disabled">Import</button>
                    <button className="btnDisabled" title="Demo only — export is disabled">Export</button>
                </div>
            </Styled.Header>

            <Styled.Filters className="card">
                <div className="row">
                    <div className="cell grow">
                        <label htmlFor="strengths-search">Search</label>
                        <input
                            id="strengths-search"
                            type="text"
                            placeholder="Search molecule, form, strength, brand…"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>

                    <div className="cell">
                        <label>Form</label>
                        <div className="pills">
                            <button
                                className={formFilter === "All" ? "pill active" : "pill"}
                                onClick={() => setFormFilter("All")}
                                title="All forms"
                            >All</button>
                            {allForms.map(f => (
                                <button
                                    key={f}
                                    className={formFilter === f ? "pill active" : "pill"}
                                    onClick={() => setFormFilter(f)}
                                    title={f}
                                >{f}</button>
                            ))}
                        </div>
                    </div>

                    <div className="cell">
                        <label>Unit</label>
                        <div className="pills">
                            <button
                                className={uomFilter === "All" ? "pill active" : "pill"}
                                onClick={() => setUomFilter("All")}
                            >All</button>
                            {allUoms.map(u => (
                                <button
                                    key={u}
                                    className={uomFilter === u ? "pill active" : "pill"}
                                    onClick={() => setUomFilter(u)}
                                >{u}</button>
                            ))}
                        </div>
                    </div>

                    <div className="cell">
                        <label>Sort</label>
                        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
                            <option value="alpha">A → Z (Molecule)</option>
                            <option value="brands">Brands (High → Low)</option>
                            <option value="updated">Recently Updated</option>
                        </select>
                    </div>

                    <div className="cell">
                        <label>&nbsp;</label>
                        <button className="btnGhost" onClick={() => { setQ(""); setFormFilter("All"); setUomFilter("All"); setSortKey("alpha"); }}>
                            Reset
                        </button>
                    </div>
                </div>
            </Styled.Filters>

            <Styled.Grid>
                <section className="col main card" id="search-print-area" ref={printRef}>
                    <div className="tableHead">
                        <div className="titleLeft">
                            <h3>Catalog</h3>
                            <span className="sub">Showing {filtered.length} of {STRENGTHS.length}</span>
                        </div>
                        <div className="legend">
                            <span className="chip legendItem">Tablet</span>
                            <span className="chip legendItem">Capsule</span>
                            <span className="chip legendItem">Syrup</span>
                            <span className="chip legendItem">Injection</span>
                            <span className="chip legendItem">Inhaler</span>
                        </div>
                    </div>

                    <div className="tableWrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: "26%" }}>Molecule</th>
                                    <th style={{ width: "24%" }}>Forms</th>
                                    <th style={{ width: "26%" }}>Strengths</th>
                                    <th style={{ width: "10%" }}>UoM</th>
                                    <th style={{ width: "14%" }}>Brands</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map(row => (
                                    <tr key={row.id}>
                                        <td>
                                            <div className="molecule">
                                                <strong>{row.molecule}</strong>
                                                <div className="muted">Updated: {fmt(row.updatedAt, true)}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="chips">
                                                {row.forms.map(f => (
                                                    <span className="chip" key={f} onClick={() => setFormFilter(f)} role="button" title={`Filter by ${f}`}>{f}</span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="mono">
                                            {row.strengths.join(", ")}
                                        </td>
                                        <td className="mono">{row.uomGroup}</td>
                                        <td>
                                            <div className="brandCell">
                                                <span className="count">{row.brandCount} brands</span>
                                                <div className="examples">
                                                    {row.brandExamples.slice(0, 3).map(b => <span key={b} className="example">{b}</span>)}
                                                </div>
                                                <div className="rowActions">
                                                    <button className="linkBtn" onClick={() => navigate(`/medicines/${row.id}`)} title="Open details">Open</button>
                                                    <button className="linkBtn" onClick={() => copyLink(`/medicines/${row.id}`)} title="Copy deep link">Copy Link</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={5}>
                                            <div className="empty">
                                                <div className="icon" aria-hidden="true">🔎</div>
                                                <div>No results. Try clearing filters.</div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>

                <aside className="col side">
                    <div className="card info">
                        <h3>What counts as a “Strength”</h3>
                        <p>
                            Strengths represent labeled potency of a pharmaceutical product (e.g., <span className="mono">500 mg</span>, <span className="mono">125 mg/5 ml</span>, <span className="mono">100 IU/ml</span>).
                            Forms contextualize dosing (Tablet, Capsule, Syrup, Injection, etc.).
                        </p>
                        <ul className="bullets">
                            <li>Units commonly used: <span className="mono">mg</span>, <span className="mono">mcg</span>, <span className="mono">IU</span>, <span className="mono">%</span>.</li>
                            <li>Suspensions and syrups indicate volume basis: <span className="mono">mg/5 ml</span>, <span className="mono">mg/ml</span>.</li>
                            <li>Inhalers often use dose-based microgram notation.</li>
                        </ul>
                        <div className="links">
                            <NavLink to="/medicines/forms">See Forms</NavLink>
                            <NavLink to="/medicines/hsn-gst">HSN / GST</NavLink>
                            <NavLink to="/medicines/expiry-tracker">Expiry Tracker</NavLink>
                        </div>
                    </div>

                    <div className="card callout">
                        <h3>Demo Mode</h3>
                        <p>
                            This catalog is display-only. Actions like Add, Import, Export are intentionally disabled here.
                            Deep links still work—open any molecule and share the link.
                        </p>
                    </div>

                    {copied && (
                        <div className="toast" role="status" aria-live="polite">
                            Copied: <span className="mono">{copied}</span>
                        </div>
                    )}
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default StrengthsPage;
