import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

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

const DEMO_DISABLED_TEXT = "Demo mode: action unavailable";

// lightweight info modal
const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer><button className="btnPrimary" onClick={onClose}>Close</button></footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const MoleculesPage = () => {
    const now = useMemo(() => new Date(), []);
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [showInfo, setShowInfo] = useState(false);
    const printRef = useRef(null);

    // display-only sample dataset (pre-specified)
    const rows = useMemo(
        () => [
            {
                id: "MOL-PAR-500",
                molecule: "Paracetamol",
                forms: ["Tablet", "Syrup", "IV"],
                strengths: ["500 mg", "650 mg", "125 mg/5ml"],
                atc: "N02BE01",
                schedule: "OTC",
                brandsCount: 120,
                interactions: ["Warfarin (monitor INR)"],
                lastUpdated: "2025-10-04T15:38:20+05:30",
            },
            {
                id: "MOL-AMOX-500",
                molecule: "Amoxicillin",
                forms: ["Capsule", "Dry Syrup"],
                strengths: ["250 mg", "500 mg"],
                atc: "J01CA04",
                schedule: "Rx",
                brandsCount: 80,
                interactions: ["Allopurinol (rash risk)", "Warfarin (INR)"],
                lastUpdated: "2025-09-30T11:12:05+05:30",
            },
            {
                id: "MOL-AZITH-500",
                molecule: "Azithromycin",
                forms: ["Tablet", "Oral Suspension"],
                strengths: ["250 mg", "500 mg", "200 mg/5ml"],
                atc: "J01FA10",
                schedule: "Rx",
                brandsCount: 64,
                interactions: ["QT-prolonging agents"],
                lastUpdated: "2025-09-26T09:01:41+05:30",
            },
            {
                id: "MOL-MET-500",
                molecule: "Metformin",
                forms: ["Tablet", "ER Tablet"],
                strengths: ["500 mg", "850 mg", "1000 mg"],
                atc: "A10BA02",
                schedule: "Rx",
                brandsCount: 90,
                interactions: ["Iodinated contrast (hold)", "Alcohol"],
                lastUpdated: "2025-10-01T10:05:12+05:30",
            },
            {
                id: "MOL-AMLO-5",
                molecule: "Amlodipine",
                forms: ["Tablet"],
                strengths: ["2.5 mg", "5 mg", "10 mg"],
                atc: "C08CA01",
                schedule: "Rx",
                brandsCount: 76,
                interactions: ["CYP3A4 inhibitors/inducers"],
                lastUpdated: "2025-09-27T13:15:00+05:30",
            },
            {
                id: "MOL-LOSA-50",
                molecule: "Losartan",
                forms: ["Tablet"],
                strengths: ["25 mg", "50 mg", "100 mg"],
                atc: "C09CA01",
                schedule: "Rx",
                brandsCount: 48,
                interactions: ["Potassium-sparing agents"],
                lastUpdated: "2025-09-28T17:42:33+05:30",
            },
            {
                id: "MOL-PANTO-40",
                molecule: "Pantoprazole",
                forms: ["Tablet", "IV"],
                strengths: ["20 mg", "40 mg"],
                atc: "A02BC02",
                schedule: "Rx",
                brandsCount: 54,
                interactions: ["Drugs needing acidic pH"],
                lastUpdated: "2025-09-25T08:10:22+05:30",
            },
            {
                id: "MOL-OMEP-20",
                molecule: "Omeprazole",
                forms: ["Capsule"],
                strengths: ["10 mg", "20 mg", "40 mg"],
                atc: "A02BC01",
                schedule: "Rx",
                brandsCount: 67,
                interactions: ["Clopidogrel (reduced activation)"],
                lastUpdated: "2025-09-22T19:25:12+05:30",
            },
            {
                id: "MOL-IBU-400",
                molecule: "Ibuprofen",
                forms: ["Tablet", "Suspension"],
                strengths: ["200 mg", "400 mg"],
                atc: "M01AE01",
                schedule: "OTC/Rx",
                brandsCount: 110,
                interactions: ["Antihypertensives (reduced effect)"],
                lastUpdated: "2025-10-02T16:20:45+05:30",
            },
            {
                id: "MOL-DICLO-50",
                molecule: "Diclofenac",
                forms: ["Tablet", "Gel"],
                strengths: ["50 mg", "75 mg", "1% gel"],
                atc: "M01AB05",
                schedule: "Rx",
                brandsCount: 88,
                interactions: ["Anticoagulants", "SSRIs (bleed risk)"],
                lastUpdated: "2025-09-18T12:11:09+05:30",
            },
            {
                id: "MOL-CET-10",
                molecule: "Cetirizine",
                forms: ["Tablet", "Syrup"],
                strengths: ["5 mg", "10 mg"],
                atc: "R06AE07",
                schedule: "OTC/Rx",
                brandsCount: 72,
                interactions: ["CNS depressants (sedation)"],
                lastUpdated: "2025-10-03T09:47:12+05:30",
            },
            {
                id: "MOL-LEVO-5",
                molecule: "Levocetirizine",
                forms: ["Tablet", "Syrup"],
                strengths: ["5 mg", "2.5 mg/5ml"],
                atc: "R06AE09",
                schedule: "Rx",
                brandsCount: 58,
                interactions: ["CNS depressants (sedation)"],
                lastUpdated: "2025-09-29T14:36:05+05:30",
            },
        ],
        []
    );

    const filtered = useMemo(() => {
        const qq = q.trim().toLowerCase();
        if (!qq) return rows;
        return rows.filter(r =>
            (r.molecule + " " + r.atc + " " + r.forms.join(" ") + " " + r.strengths.join(" "))
                .toLowerCase()
                .includes(qq)
        );
    }, [q, rows]);

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
            {/* print rules */}
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
                    <h1>Molecules</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/medicines">Medicines</NavLink><span>/</span>
                        <span className="current">Molecules</span>
                    </nav>
                    <div className="meta">
                        <span>Total: {rows.length}</span><span>•</span>
                        <span>Last sync: {fmt(now, true)}</span>
                    </div>
                </div>

                <div className="right">
                    <button className="btnGhost" onClick={printSection} title="Print list">Print</button>
                    <button
                        className="btnPrimary"
                        onClick={() => setShowInfo(true)}
                        title={DEMO_DISABLED_TEXT}
                    >
                        Add Molecule
                    </button>
                    <button
                        className="btnGhost"
                        onClick={() => setShowInfo(true)}
                        title={DEMO_DISABLED_TEXT}
                    >
                        Bulk Import
                    </button>
                </div>
            </Styled.Header>

            <Styled.Toolbar className="card">
                <div className="filters">
                    <div className="search">
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search molecule, ATC, form, strength…"
                            aria-label="Search molecules"
                        />
                    </div>
                    <div className="chips">
                        <button className="chip" onClick={() => setShowInfo(true)} title="Coming soon">Class: Analgesic</button>
                        <button className="chip" onClick={() => setShowInfo(true)} title="Coming soon">Form: Tablet</button>
                        <button className="chip" onClick={() => setShowInfo(true)} title="Coming soon">Schedule: Rx</button>
                        <button className="chip" onClick={() => setShowInfo(true)} title="Coming soon">Schedule: OTC</button>
                    </div>
                </div>

                <div className="toolbarRight">
                    <div className="legend">
                        <span className="dot rx" /> Rx
                        <span className="dot otc" /> OTC
                    </div>
                    <div className="quick">
                        <NavLink className="mini" to="/medicines/forms">Forms</NavLink>
                        <NavLink className="mini" to="/medicines/strengths">Strengths</NavLink>
                        <NavLink className="mini" to="/medicines/hsn-gst">HSN / GST</NavLink>
                    </div>
                </div>
            </Styled.Toolbar>

            <Styled.Layout>
                <section className="main card">
                    <Styled.Table role="table" aria-label="Molecules table">
                        <div className="thead" role="rowgroup">
                            <div className="tr" role="row">
                                <div className="th" role="columnheader">Molecule</div>
                                <div className="th" role="columnheader">Forms</div>
                                <div className="th" role="columnheader">Common Strengths</div>
                                <div className="th" role="columnheader" title="Anatomical Therapeutic Chemical">ATC</div>
                                <div className="th" role="columnheader">Schedule</div>
                                <div className="th" role="columnheader">Brands</div>
                                <div className="th" role="columnheader">Interactions</div>
                                <div className="th" role="columnheader">Updated</div>
                                <div className="th actions" role="columnheader">Actions</div>
                            </div>
                        </div>

                        <div className="tbody" role="rowgroup">
                            {filtered.length === 0 ? (
                                <div className="empty">
                                    <div className="icon">🔎</div>
                                    <div className="title">No matches</div>
                                    <div className="sub">Try a different keyword or clear filters.</div>
                                </div>
                            ) : (
                                filtered.map((r) => (
                                    <div className="tr" role="row" key={r.id}>
                                        <div className="td">
                                            <div className="titleCell">
                                                <div className="name">{r.molecule}</div>
                                                <div className="muted">ID: {r.id}</div>
                                            </div>
                                        </div>
                                        <div className="td">
                                            <div className="chipsLine">
                                                {r.forms.map(f => <span key={f} className="chip tiny">{f}</span>)}
                                            </div>
                                        </div>
                                        <div className="td">
                                            <div className="chipsLine">
                                                {r.strengths.map(s => <span key={s} className="chip tiny">{s}</span>)}
                                            </div>
                                        </div>
                                        <div className="td"><span className="mono">{r.atc}</span></div>
                                        <div className="td">
                                            <span className={`badge ${String(r.schedule).toLowerCase().includes("otc") ? "otc" : "rx"}`}>
                                                {r.schedule}
                                            </span>
                                        </div>
                                        <div className="td">{r.brandsCount}</div>
                                        <div className="td">
                                            <ul className="bullets">
                                                {r.interactions.map((i) => <li key={i}>{i}</li>)}
                                            </ul>
                                        </div>
                                        <div className="td">{fmt(r.lastUpdated, true)}</div>
                                        <div className="td actions">
                                            <NavLink className="mini" to="/products" title="Browse products">Products</NavLink>
                                            <NavLink className="mini" to="/products/brands" title="View brands">Brands</NavLink>
                                            <NavLink className="mini" to="/medicines/hsn-gst" title="HSN & GST">HSN/GST</NavLink>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </Styled.Table>

                    <Styled.FooterBar>
                        <div className="left">
                            <span className="muted">Showing {filtered.length} of {rows.length}</span>
                        </div>
                        <div className="right">
                            <button className="btnGhost mini" onClick={() => setShowInfo(true)} title={DEMO_DISABLED_TEXT}>Prev</button>
                            <button className="btnGhost mini" onClick={() => setShowInfo(true)} title={DEMO_DISABLED_TEXT}>Next</button>
                        </div>
                    </Styled.FooterBar>
                </section>

                <aside className="side">
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Summary</h3>
                        <div className="gridTwo">
                            <div>
                                <div className="label">Dataset</div>
                                <div className="value">Molecules</div>
                            </div>
                            <div>
                                <div className="label">Count</div>
                                <div className="value">{rows.length}</div>
                            </div>
                            <div>
                                <div className="label">Generated</div>
                                <div className="value">{fmt(now, true)}</div>
                            </div>
                            <div>
                                <div className="label">Local time</div>
                                <div className="value">{onlyTime(now)}</div>
                            </div>
                        </div>

                        <div className="divider" />

                        <div className="keylist">
                            <div className="k">Quick links</div>
                            <div className="v">
                                <ul>
                                    <li><NavLink to="/medicines/forms">Forms</NavLink></li>
                                    <li><NavLink to="/medicines/strengths">Strengths</NavLink></li>
                                    <li><NavLink to="/medicines/expiry-tracker">Expiry Tracker</NavLink></li>
                                    <li><NavLink to="/products">Products</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Recent Updates</h3>
                        <ul className="timeline">
                            <li><span className="dot" /><div><strong>Interaction list refreshed</strong><div className="muted">{fmt(now, true)}</div></div></li>
                            <li><span className="dot" /><div><strong>ATC mappings checked</strong><div className="muted">{fmt("2025-09-30T11:12:05+05:30", true)}</div></div></li>
                            <li><span className="dot" /><div><strong>Form catalog revised</strong><div className="muted">{fmt("2025-09-26T09:01:41+05:30", true)}</div></div></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Reference</h3>
                        <div className="legendRef">
                            <span><span className="dot rx" /> Prescription</span>
                            <span><span className="dot otc" /> Over-the-counter</span>
                        </div>
                        <p className="muted small">This view is for demonstration. Create/Import actions are disabled.</p>
                    </div>
                </aside>
            </Styled.Layout>

            <InfoDialog
                open={showInfo}
                title="Unavailable in Demo"
                message={DEMO_DISABLED_TEXT}
                onClose={() => setShowInfo(false)}
            />
        </Styled.Page>
    );
};

export default MoleculesPage;
