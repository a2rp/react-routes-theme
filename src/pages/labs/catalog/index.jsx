import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

const DEMO_MODE = true;

// Util: Date/Time
function fmtDate(iso) {
    const d = new Date(iso);
    return d.toDateString().replace(/^\w{3}/, d.toDateString().slice(0, 3)); // Sat Oct 04 2025 style (native gives similar)
}
function fmtDateTime(iso) {
    const d = new Date(iso);
    const dateStr = d.toDateString();
    const time = d.toTimeString().split(" ")[0]; // 15:38:20
    return `${dateStr} ${time}hrs`;
}
function fmtTimeOnly(iso) {
    const d = new Date(iso);
    const time = d.toTimeString().split(" ")[0];
    return `${time}hrs`;
}

// Demo fixtures (display-only; tweak as you like)
const TESTS = [
    {
        id: "LAB-CBC",
        name: "Complete Blood Count",
        department: "Hematology",
        specimen: "Whole Blood (EDTA)",
        container: "Lavender Top",
        tat: "4 hrs",
        price: "₹350",
        active: true,
        updatedAt: "2025-10-04T14:22:10+05:30",
        vendor: "PathX Labs",
        panel: null,
        tags: ["Routine", "Baseline"],
    },
    {
        id: "LAB-LFT",
        name: "Liver Function Test",
        department: "Biochemistry",
        specimen: "Serum",
        container: "Red/Gold Top",
        tat: "6 hrs",
        price: "₹750",
        active: true,
        updatedAt: "2025-10-03T17:14:45+05:30",
        vendor: "MedCore Diagnostics",
        panel: "PANEL-LIVER",
        tags: ["Panel-Compatible"],
    },
    {
        id: "LAB-KFT",
        name: "Kidney Function Test",
        department: "Biochemistry",
        specimen: "Serum",
        container: "Red/Gold Top",
        tat: "6 hrs",
        price: "₹700",
        active: true,
        updatedAt: "2025-10-01T10:02:00+05:30",
        vendor: "MedCore Diagnostics",
        panel: "PANEL-RENAL",
        tags: ["Panel-Compatible"],
    },
    {
        id: "LAB-CRP",
        name: "C-Reactive Protein (CRP)",
        department: "Immunology",
        specimen: "Serum",
        container: "Red/Gold Top",
        tat: "8 hrs",
        price: "₹650",
        active: true,
        updatedAt: "2025-10-04T09:40:22+05:30",
        vendor: "PathX Labs",
        panel: null,
        tags: ["Inflammation"],
    },
    {
        id: "LAB-TSH",
        name: "Thyroid Stimulating Hormone (TSH)",
        department: "Endocrinology",
        specimen: "Serum",
        container: "Red/Gold Top",
        tat: "8 hrs",
        price: "₹500",
        active: true,
        updatedAt: "2025-09-29T19:12:58+05:30",
        vendor: "CoreLab India",
        panel: "PANEL-THYROID",
        tags: ["Hormonal", "Panel-Compatible"],
    },
    {
        id: "LAB-LIPID",
        name: "Lipid Profile",
        department: "Biochemistry",
        specimen: "Serum (Fasting)",
        container: "Red/Gold Top",
        tat: "10 hrs",
        price: "₹900",
        active: true,
        updatedAt: "2025-10-02T13:18:40+05:30",
        vendor: "CoreLab India",
        panel: "PANEL-LIPID",
        tags: ["Fasting", "Preventive"],
    },
    {
        id: "LAB-HBA1C",
        name: "HbA1c (Glycated Hemoglobin)",
        department: "Biochemistry",
        specimen: "Whole Blood (EDTA)",
        container: "Lavender Top",
        tat: "6 hrs",
        price: "₹600",
        active: true,
        updatedAt: "2025-09-30T11:05:10+05:30",
        vendor: "PathX Labs",
        panel: null,
        tags: ["Diabetes"],
    },
    {
        id: "LAB-VITD",
        name: "Vitamin D (25-OH)",
        department: "Immunoassay",
        specimen: "Serum",
        container: "Red/Gold Top",
        tat: "24 hrs",
        price: "₹1600",
        active: true,
        updatedAt: "2025-09-28T16:55:50+05:30",
        vendor: "MedCore Diagnostics",
        panel: null,
        tags: ["Wellness"],
    },
    {
        id: "LAB-PTINR",
        name: "Prothrombin Time (PT/INR)",
        department: "Coagulation",
        specimen: "Citrated Plasma",
        container: "Light Blue Top",
        tat: "3 hrs",
        price: "₹550",
        active: true,
        updatedAt: "2025-10-04T08:01:11+05:30",
        vendor: "PathX Labs",
        panel: null,
        tags: ["Pre-Op"],
    },
    {
        id: "LAB-URINE",
        name: "Urine Routine & Microscopy",
        department: "Urinalysis",
        specimen: "Urine",
        container: "Sterile Cup",
        tat: "3 hrs",
        price: "₹300",
        active: true,
        updatedAt: "2025-10-04T07:40:20+05:30",
        vendor: "CoreLab India",
        panel: null,
        tags: ["Routine"],
    },
];

const PANELS = [
    {
        id: "PANEL-LIVER",
        name: "Liver Panel",
        tests: ["LAB-LFT"],
        department: "Biochemistry",
        price: "₹1500",
        tat: "10 hrs",
        updatedAt: "2025-10-01T12:22:10+05:30",
    },
    {
        id: "PANEL-RENAL",
        name: "Renal Panel",
        tests: ["LAB-KFT"],
        department: "Biochemistry",
        price: "₹1400",
        tat: "10 hrs",
        updatedAt: "2025-09-30T10:44:30+05:30",
    },
    {
        id: "PANEL-THYROID",
        name: "Thyroid Panel",
        tests: ["LAB-TSH"],
        department: "Endocrinology",
        price: "₹1200",
        tat: "12 hrs",
        updatedAt: "2025-09-27T16:10:00+05:30",
    },
    {
        id: "PANEL-LIPID",
        name: "Lipid Panel",
        tests: ["LAB-LIPID"],
        department: "Biochemistry",
        price: "₹1500",
        tat: "12 hrs",
        updatedAt: "2025-09-25T18:22:20+05:30",
    },
];

export default function LabCatalog() {
    const location = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const [q, setQ] = useState(() => new URLSearchParams(location.search).get("q") ?? "");
    const [tab, setTab] = useState(() => new URLSearchParams(location.search).get("tab") ?? "tests");
    const [showDisabledModal, setShowDisabledModal] = useState(false);

    // focus search on mount
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            try { searchRef.current?.focus({ preventScroll: true }); } catch { searchRef.current?.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    // keep URL in sync with tab/q (nice deep links)
    useEffect(() => {
        const sp = new URLSearchParams(location.search);
        q ? sp.set("q", q) : sp.delete("q");
        tab ? sp.set("tab", tab) : sp.delete("tab");
        navigate({ pathname: location.pathname, search: sp.toString() }, { replace: true });
    }, [q, tab]); // eslint-disable-line react-hooks/exhaustive-deps

    const filteredTests = useMemo(() => {
        if (!q.trim()) return TESTS;
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return TESTS.filter(t => {
            const hay = [
                t.id, t.name, t.department, t.specimen, t.container, t.vendor, ...(t.tags || [])
            ].join(" ").toLowerCase();
            return tokens.every(tok => hay.includes(tok));
        });
    }, [q]);

    const filteredPanels = useMemo(() => {
        if (!q.trim()) return PANELS;
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return PANELS.filter(p => {
            const hay = [p.id, p.name, p.department, p.price, p.tat].join(" ").toLowerCase();
            return tokens.every(tok => hay.includes(tok));
        });
    }, [q]);

    const onPrint = () => {
        const body = document.body;
        body.classList.add("print-section-mode");
        const cleanup = () => body.classList.remove("print-section-mode");
        const after = () => setTimeout(cleanup, 0);
        if ("onafterprint" in window) {
            const prev = window.onafterprint;
            window.onafterprint = () => { prev && prev(); after(); };
        }
        window.print();
    };

    const onExport = () => {
        const data = tab === "tests" ? filteredTests : filteredPanels;
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = tab === "tests" ? "lab-tests.json" : "lab-panels.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const stats = {
        tests: TESTS.length,
        panels: PANELS.length,
        vendors: new Set(TESTS.map(t => t.vendor)).size,
        depts: new Set(TESTS.map(t => t.department)).size,
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
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            {/* Breadcrumbs */}
            <nav className="crumbs" aria-label="Breadcrumb">
                <NavLink to="/home">Home</NavLink>
                <span>/</span>
                <NavLink to="/labs">Labs</NavLink>
                <span>/</span>
                <span aria-current="page">Catalog</span>
            </nav>

            {/* Header + actions */}
            <header className="header">
                <div>
                    <h1>Lab Catalog</h1>
                    <p className="muted">
                        Updated: {fmtDateTime("2025-10-04T15:38:20+05:30")} • Departments: {stats.depts} • Vendors: {stats.vendors}
                    </p>
                </div>

                <div className="actions">
                    <div className="seg">
                        <button
                            className={`seg-btn ${tab === "tests" ? "active" : ""}`}
                            onClick={() => setTab("tests")}
                            aria-pressed={tab === "tests"}
                        >
                            Tests ({stats.tests})
                        </button>
                        <button
                            className={`seg-btn ${tab === "panels" ? "active" : ""}`}
                            onClick={() => setTab("panels")}
                            aria-pressed={tab === "panels"}
                        >
                            Panels ({stats.panels})
                        </button>
                    </div>

                    <div className="toolbar">
                        <input
                            ref={searchRef}
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search tests, panels, specimen, vendor…"
                            aria-label="Search catalog"
                        />
                        <button onClick={onExport} title="Export JSON">Export</button>
                        <button onClick={onPrint} title="Print list">Print</button>
                        <button
                            onClick={() => setShowDisabledModal(true)}
                            disabled={!DEMO_MODE ? false : true}
                            title={DEMO_MODE ? "Demo mode: action disabled" : "Create new test"}
                        >
                            New Test
                        </button>
                    </div>
                </div>
            </header>

            {/* KPI cards */}
            <section className="kpis" aria-label="Catalog stats">
                <div className="card kpi">
                    <div className="kpi-title">Total Tests</div>
                    <div className="kpi-value">{stats.tests}</div>
                    <div className="kpi-foot">
                        <NavLink to="/labs" title="Open Labs">Go to Labs</NavLink>
                    </div>
                </div>
                <div className="card kpi">
                    <div className="kpi-title">Panels</div>
                    <div className="kpi-value">{stats.panels}</div>
                    <div className="kpi-foot">
                        <a href="#panels">Jump to Panels</a>
                    </div>
                </div>
                <div className="card kpi">
                    <div className="kpi-title">Vendors</div>
                    <div className="kpi-value">{stats.vendors}</div>
                    <div className="kpi-foot">
                        <NavLink to="/admin/integrations" title="Vendor integrations">Vendor Integrations</NavLink>
                    </div>
                </div>
                <div className="card kpi">
                    <div className="kpi-title">Departments</div>
                    <div className="kpi-value">{stats.depts}</div>
                    <div className="kpi-foot">
                        <NavLink to="/settings/units" title="Units">Units & References</NavLink>
                    </div>
                </div>
            </section>

            {/* Printable area wrapper */}
            <div id="search-print-area">
                {tab === "tests" ? (
                    <TestsTable data={filteredTests} />
                ) : (
                    <PanelsGrid data={filteredPanels} />
                )}
            </div>

            {/* Secondary navigation blocks */}
            <footer className="quicknav">
                <div className="card">
                    <h3>Quick Links</h3>
                    <div className="links">
                        <NavLink to="/labs">Labs Home</NavLink>
                        <NavLink to="/labs/catalog">Catalog</NavLink>
                        <NavLink to="/patients">Patients</NavLink>
                        <NavLink to="/appointments">Appointments</NavLink>
                        <NavLink to="/orders">Orders</NavLink>
                        <NavLink to="/invoices">Invoices</NavLink>
                        <NavLink to="/reports">Reports</NavLink>
                        <NavLink to="/settings/print-templates">Print Templates</NavLink>
                        <NavLink to="/tools/import-export">Import / Export</NavLink>
                    </div>
                </div>

                <div className="card">
                    <h3>Common Panels</h3>
                    <ul className="mini">
                        {PANELS.map(p => (
                            <li key={p.id}>
                                <NavLink to={`/labs/catalog?tab=panels&q=${encodeURIComponent(p.name)}`}>{p.name}</NavLink>
                                <span className="muted"> • {p.department}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="card">
                    <h3>Specimen Types</h3>
                    <ul className="chips">
                        {["Serum", "Plasma", "Urine", "Whole Blood", "Citrated Plasma"].map(s => (
                            <li key={s}>
                                <button className="chip" onClick={() => setQ(s)}>{s}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>

            {/* Demo confirm modal */}
            {showDisabledModal && (
                <ConfirmModal
                    title="Action unavailable"
                    message="This is a display-only demo. Creating new tests is disabled."
                    confirmText="Got it"
                    onClose={() => setShowDisabledModal(false)}
                    onConfirm={() => setShowDisabledModal(false)}
                    single
                />
            )}
        </Styled.Page>
    );
}

function TestsTable({ data }) {
    return (
        <section className="tableWrap" aria-label="Tests table">
            <div className="tableHead">
                <h2>Tests</h2>
                <div className="muted">Showing {data.length} records</div>
            </div>

            <div className="table card">
                <div className="thead">
                    <div>Code</div>
                    <div>Test</div>
                    <div>Department</div>
                    <div>Specimen</div>
                    <div>Container</div>
                    <div>TAT</div>
                    <div>Price</div>
                    <div>Status</div>
                    <div>Updated</div>
                    <div>Actions</div>
                </div>

                <div className="tbody">
                    {data.map((t) => (
                        <div className="row" key={t.id}>
                            <div className="cell code">
                                <NavLink to={`/labs/${t.id}`} title="Open test">{t.id}</NavLink>
                            </div>
                            <div className="cell">
                                <div className="name">{t.name}</div>
                                <div className="sub muted">{t.tags?.join(" • ")}</div>
                            </div>
                            <div className="cell">{t.department}</div>
                            <div className="cell">{t.specimen}</div>
                            <div className="cell">{t.container}</div>
                            <div className="cell">{t.tat}</div>
                            <div className="cell">{t.price}</div>
                            <div className="cell">
                                <span className={`pill ${t.active ? "ok" : "off"}`}>{t.active ? "Active" : "Inactive"}</span>
                            </div>
                            <div className="cell">{fmtDate(t.updatedAt)}</div>
                            <div className="cell actions">
                                <NavLink to={`/labs/${t.id}`} className="btn" title="View details">View</NavLink>
                                {t.panel ? (
                                    <NavLink to={`/labs/catalog?tab=panels&q=${encodeURIComponent(t.panel)}`} className="btn" title="Open panel">
                                        Panel
                                    </NavLink>
                                ) : (
                                    <button className="btn ghost" disabled title="No panel">Panel</button>
                                )}
                                <NavLink to={`/admin/integrations`} className="btn" title="Vendor">
                                    Vendor
                                </NavLink>
                                <NavLink to={`/settings/print-templates`} className="btn" title="Templates">
                                    Template
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PanelsGrid({ data }) {
    return (
        <section id="panels" className="panelsWrap" aria-label="Panels grid">
            <div className="tableHead">
                <h2>Panels</h2>
                <div className="muted">Showing {data.length} records</div>
            </div>

            <div className="grid">
                {data.map(p => (
                    <article className="panel card" key={p.id}>
                        <header>
                            <div className="pid">{p.id}</div>
                            <h3>{p.name}</h3>
                        </header>
                        <div className="meta">
                            <div><span className="label">Department</span><span>{p.department}</span></div>
                            <div><span className="label">Price</span><span>{p.price}</span></div>
                            <div><span className="label">TAT</span><span>{p.tat}</span></div>
                            <div><span className="label">Updated</span><span>{fmtDate(p.updatedAt)}</span></div>
                        </div>
                        <div className="tests">
                            <div className="label">Includes</div>
                            <ul>
                                {p.tests.map(tid => (
                                    <li key={tid}><NavLink to={`/labs/${tid}`}>{tid}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                        <footer className="cta">
                            <NavLink to={`/labs/catalog?tab=tests&q=${encodeURIComponent(p.name)}`} className="btn">View Tests</NavLink>
                            <NavLink to={`/reports/lab`} className="btn ghost" title="Open lab reports">Reports</NavLink>
                            <NavLink to={`/settings/print-templates`} className="btn ghost" title="Print template">Print Template</NavLink>
                        </footer>
                    </article>
                ))}
            </div>
        </section>
    );
}

/** Simple custom modal (non-blocking; no browser alert) */
function ConfirmModal({ title, message, confirmText = "OK", cancelText = "Close", onConfirm, onClose, single = false }) {
    const overlayRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div className="modalOverlay" ref={overlayRef} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modalCard card">
                <h3 id="modal-title">{title}</h3>
                <p className="muted">{message}</p>
                <div className="modalActions">
                    {!single && <button onClick={onClose}>Cancel</button>}
                    <button onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>
    );
}
