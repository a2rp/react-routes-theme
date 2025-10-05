import React, { useMemo, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* ------------------------------
   tiny date helpers (uniform app-wide)
------------------------------ */
const pad = (n) => String(n).padStart(2, "0");
const fmt = (d, withTime = false) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ------------------------------
   demo dataset (display-only)
   (Descriptions are illustrative)
------------------------------ */
const RAW = [
    {
        hsn: "3004",
        category: "Medicaments, retail pack",
        examples: ["Paracetamol Tablets 500mg", "Azithromycin 250mg"],
        gst: 12,
        uqc: "Pack / Box",
        notes: "Non-specified brand names, allopathic formulary.",
        effective: "2025-09-01T09:30:00+05:30",
        form: ["Tablet", "Capsule"]
    },
    {
        hsn: "3003",
        category: "Medicaments, not put up for retail sale",
        examples: ["Bulk Ibuprofen API", "Bulk Amoxicillin API"],
        gst: 12,
        uqc: "KG",
        notes: "Bulk ingredients for further manufacture.",
        effective: "2025-08-10T10:00:00+05:30",
        form: ["API"]
    },
    {
        hsn: "3002",
        category: "Human blood; antisera; vaccines",
        examples: ["Vaccines (routine immunization)"],
        gst: 5,
        uqc: "Vial",
        notes: "Biologicals in cold-chain.",
        effective: "2025-07-15T12:00:00+05:30",
        form: ["Vaccine"]
    },
    {
        hsn: "3006",
        category: "Pharmaceutical goods (first-aid boxes, etc.)",
        examples: ["First Aid Kit", "Diagnostic strips"],
        gst: 18,
        uqc: "Unit",
        notes: "Kits, dressings, testing strips.",
        effective: "2025-06-20T11:45:00+05:30",
        form: ["Kit", "Accessory"]
    },
    {
        hsn: "3005",
        category: "Wadding, gauze, bandages",
        examples: ["Gauze Roll 10cm", "Adhesive Bandage"],
        gst: 12,
        uqc: "Roll / Pack",
        notes: "Sterile / non-sterile dressings.",
        effective: "2025-05-01T08:15:00+05:30",
        form: ["Dressing"]
    },
    {
        hsn: "9018",
        category: "Instruments & appliances for medical use",
        examples: ["Syringe (disposable)", "Thermometer (digital)"],
        gst: 12,
        uqc: "Unit",
        notes: "General medical instruments, disposables.",
        effective: "2025-03-22T16:10:00+05:30",
        form: ["Device"]
    },
    {
        hsn: "3306",
        category: "Oral hygiene preparations",
        examples: ["Medicated Mouthwash 0.2%"],
        gst: 18,
        uqc: "Bottle",
        notes: "Borderline goods depend on active & label claims.",
        effective: "2025-02-02T14:05:00+05:30",
        form: ["Liquid"]
    },
    {
        hsn: "3001",
        category: "Glands and other organs (exa. heparin)",
        examples: ["Heparin (pharmaceutical)"],
        gst: 5,
        uqc: "Vial",
        notes: "Special biological extracts.",
        effective: "2025-01-12T10:25:00+05:30",
        form: ["Injectable"]
    }
];

/* rate palette for chips */
const RATE_BADGE = (rate) => {
    if (rate === 0) return "rateZero";
    if (rate <= 5) return "rateLow";
    if (rate <= 12) return "rateMid";
    return "rateHigh";
};

const HsnGstPage = () => {
    const now = new Date();
    const printRef = useRef(null);

    // optional banner dates from vite defines (safe-guarded)
    const buildISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || now.toISOString();
    const commitISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || now.toISOString();

    // filters (UI-only)
    const [q, setQ] = useState("");
    const [rate, setRate] = useState("all");
    const [forms, setForms] = useState({
        Tablet: false, Capsule: false, Syrup: false, Vaccine: false,
        Dressing: false, Device: false, API: false, Kit: false, Accessory: false, Injectable: false, Liquid: false
    });

    const activeForms = useMemo(() => Object.entries(forms).filter(([, v]) => v).map(([k]) => k), [forms]);

    const data = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return RAW.filter(row => {
            const hay = [
                row.hsn, row.category,
                ...(row.examples || []),
                row.notes
            ].join(" ").toLowerCase();

            const matchesText = tokens.length === 0 || tokens.every(t => hay.includes(t));
            const matchesRate = rate === "all" ? true : String(row.gst) === rate;
            const matchesForm = activeForms.length === 0 ? true : (row.form || []).some(f => activeForms.includes(f));
            return matchesText && matchesRate && matchesForm;
        });
    }, [q, rate, activeForms]);

    const counts = useMemo(() => {
        const s = { total: RAW.length, v0: 0, v5: 0, v12: 0, v18: 0 };
        RAW.forEach(r => {
            if (r.gst === 0) s.v0++; else if (r.gst === 5) s.v5++; else if (r.gst === 12) s.v12++; else if (r.gst === 18) s.v18++;
        });
        return s;
    }, []);

    const exportJSON = () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "hsn-gst-mapping.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    const exportCSV = () => {
        const header = ["HSN", "Category", "Examples", "GST%", "UQC", "Notes", "Effective From"];
        const rows = data.map(r => [
            r.hsn,
            r.category,
            (r.examples || []).join(" | "),
            r.gst,
            r.uqc,
            r.notes?.replace(/\n|\r/g, " "),
            fmt(r.effective, true)
        ]);
        const csv = [header, ...rows].map(arr => arr.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "hsn-gst-mapping.csv";
        a.click();
        URL.revokeObjectURL(url);
    };

    const resetFilters = () => {
        setQ("");
        setRate("all");
        setForms(prev => Object.fromEntries(Object.keys(prev).map(k => [k, false])));
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page>
            {/* print stylesheet hook (exact) */}
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
                <div className="l">
                    <h1>HSN &amp; GST Mapping</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/medicines">Medicines</NavLink>
                        <span>/</span>
                        <span className="current">HSN &amp; GST</span>
                    </nav>
                    <div className="meta">
                        <span>Build: {fmt(buildISO, true)}</span>
                        <span>•</span>
                        <span>Commit: {fmt(commitISO, true)}</span>
                    </div>
                </div>
                <div className="r">
                    <button className="btnGhost" onClick={exportCSV} title="Download CSV">Export CSV</button>
                    <button className="btnGhost" onClick={exportJSON} title="Download JSON">Export JSON</button>
                    <button className="btnPrimary" onClick={printSection} title="Print this list">Print</button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                <section className="card main">
                    <div className="toolbar">
                        <div className="row">
                            <div className="field grow">
                                <label>Search</label>
                                <input
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    placeholder="HSN, category, example, note…"
                                    aria-label="Search HSN/GST mapping"
                                />
                            </div>
                            <div className="field">
                                <label>GST Rate</label>
                                <select value={rate} onChange={(e) => setRate(e.target.value)}>
                                    <option value="all">All</option>
                                    <option value="0">0%</option>
                                    <option value="5">5%</option>
                                    <option value="12">12%</option>
                                    <option value="18">18%</option>
                                </select>
                            </div>
                            <div className="field actions">
                                <button className="btnGhost" onClick={resetFilters}>Reset</button>
                            </div>
                        </div>

                        <div className="chips">
                            {Object.keys(forms).map((k) => (
                                <button
                                    key={k}
                                    className={`chip ${forms[k] ? "on" : ""}`}
                                    onClick={() => setForms((p) => ({ ...p, [k]: !p[k] }))}
                                    aria-pressed={forms[k] ? "true" : "false"}
                                >
                                    {k}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* PRINTABLE AREA */}
                    <div id="search-print-area" ref={printRef}>
                        <div className="legend">
                            <div className="pill rateZero">0%</div>
                            <div className="pill rateLow">5%</div>
                            <div className="pill rateMid">12%</div>
                            <div className="pill rateHigh">18%</div>
                            <div className="muted">Demo dataset for UI display</div>
                        </div>

                        <div className="tableWrap">
                            <table role="table">
                                <thead>
                                    <tr>
                                        <th>HSN</th>
                                        <th>Category / Description</th>
                                        <th>Examples</th>
                                        <th>GST</th>
                                        <th>UQC</th>
                                        <th>Notes</th>
                                        <th>Effective</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((r) => (
                                        <tr key={`${r.hsn}-${r.category}`}>
                                            <td>
                                                <code className="hsn">{r.hsn}</code>
                                            </td>
                                            <td>
                                                <div className="cat">{r.category}</div>
                                                {r.form?.length ? (
                                                    <div className="formtags">
                                                        {r.form.map((f) => <span key={f} className="formtag">{f}</span>)}
                                                    </div>
                                                ) : null}
                                            </td>
                                            <td className="examples">
                                                {(r.examples || []).map((e, i) => (
                                                    <span key={i} className="ex">{e}</span>
                                                ))}
                                            </td>
                                            <td>
                                                <span className={`badge ${RATE_BADGE(r.gst)}`}>{r.gst}%</span>
                                            </td>
                                            <td>{r.uqc}</td>
                                            <td className="muted">{r.notes}</td>
                                            <td>{fmt(r.effective, true)}</td>
                                        </tr>
                                    ))}
                                    {data.length === 0 && (
                                        <tr>
                                            <td colSpan={7} className="empty">No matches for current filters.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <aside className="side">
                    <div className="card stats" role="status" aria-live="polite">
                        <h3>GST Summary</h3>
                        <ul className="kv">
                            <li><span>Total</span><strong>{counts.total}</strong></li>
                            <li><span>0%</span><strong>{counts.v0}</strong></li>
                            <li><span>5%</span><strong>{counts.v5}</strong></li>
                            <li><span>12%</span><strong>{counts.v12}</strong></li>
                            <li><span>18%</span><strong>{counts.v18}</strong></li>
                        </ul>
                    </div>

                    <div className="card quicklinks">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><NavLink to="/medicines">Catalog</NavLink></li>
                            <li><NavLink to="/medicines/manufacturers">Manufacturers</NavLink></li>
                            <li><NavLink to="/medicines/molecules">Molecules</NavLink></li>
                            <li><NavLink to="/medicines/forms">Forms</NavLink></li>
                            <li><NavLink to="/medicines/strengths">Strengths</NavLink></li>
                            <li><NavLink to="/medicines/expiry-tracker">Expiry Tracker</NavLink></li>
                        </ul>
                    </div>

                    <div className="card guide">
                        <h3>Mapping Guide</h3>
                        <ol>
                            <li>Identify product classification and dosage form.</li>
                            <li>Cross-check packaging (retail vs bulk).</li>
                            <li>Match with closest HSN description in list.</li>
                            <li>Confirm applicable GST rate and effective date.</li>
                            <li>Keep label claims consistent with chosen code.</li>
                        </ol>
                    </div>

                    <div className="card faq">
                        <h3>FAQ</h3>
                        <details>
                            <summary>What if an item fits multiple descriptions?</summary>
                            <p>Choose the description that most closely aligns with its primary use, packaging, and label claim.</p>
                        </details>
                        <details>
                            <summary>Are rates uniform across states?</summary>
                            <p>This demo assumes uniform rates. Always verify with the latest notifications for specific cases.</p>
                        </details>
                        <details>
                            <summary>How do I handle kits with mixed items?</summary>
                            <p>Classify by the essential character of the kit; if unclear, list components separately for clarity.</p>
                        </details>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default HsnGstPage;
