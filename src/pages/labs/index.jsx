// src/pages/labs/index.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StyledLabs as S } from "./styled";

const TZ = "Asia/Kolkata";

function fmtDate(iso) {
    const d = new Date(iso);
    const base = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
        timeZone: TZ,
    }).format(d);
    // "Sat, Oct 04, 2025" -> "Sat Oct 04 2025"
    return base.replaceAll(",", "");
}
function fmtDateTime(iso) {
    const d = new Date(iso);
    const date = fmtDate(iso);
    const time = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: TZ,
    }).format(d);
    return `${date} ${time}hrs`;
}
function fmtTime(iso) {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: TZ,
    }).format(d) + "hrs";
}

const DEMO_DISABLED_MSG = "Demo only — actions are disabled.";

const FIXTURE_LABS = [
    {
        id: "LAB-2025-0001",
        patientId: "PAT-1001",
        patient: "Riya Sharma",
        age: 32,
        gender: "F",
        tests: ["CBC", "LFT"],
        status: "Completed",
        collectedAt: "2025-10-03T09:35:12+05:30",
        verifiedAt: "2025-10-03T13:05:44+05:30",
        total: "₹ 1,250.00",
        clinician: "Dr. K. Anand",
        priority: "Routine",
    },
    {
        id: "LAB-2025-0002",
        patientId: "PAT-1002",
        patient: "Arjun Verma",
        age: 41,
        gender: "M",
        tests: ["Fasting Glucose", "HbA1c"],
        status: "Approved",
        collectedAt: "2025-10-04T08:12:59+05:30",
        verifiedAt: null,
        total: "₹ 980.00",
        clinician: "Dr. P. Sinha",
        priority: "Routine",
    },
    {
        id: "LAB-2025-0003",
        patientId: "PAT-1013",
        patient: "Neha Gupta",
        age: 27,
        gender: "F",
        tests: ["TSH", "T3", "T4"],
        status: "Pending",
        collectedAt: "2025-10-05T10:04:21+05:30",
        verifiedAt: null,
        total: "₹ 1,450.00",
        clinician: "Dr. V. Rao",
        priority: "High",
    },
    {
        id: "LAB-2025-0004",
        patientId: "PAT-1007",
        patient: "Rohit Mehta",
        age: 36,
        gender: "M",
        tests: ["Vitamin D 25-OH"],
        status: "Completed",
        collectedAt: "2025-10-02T16:12:00+05:30",
        verifiedAt: "2025-10-02T19:40:10+05:30",
        total: "₹ 1,200.00",
        clinician: "Dr. H. Wadhwa",
        priority: "Routine",
    },
    {
        id: "LAB-2025-0005",
        patientId: "PAT-1026",
        patient: "Ankit Patel",
        age: 45,
        gender: "M",
        tests: ["Lipid Profile"],
        status: "Cancelled",
        collectedAt: "2025-10-04T14:22:34+05:30",
        verifiedAt: null,
        total: "₹ 0.00",
        clinician: "—",
        priority: "Routine",
    },
    {
        id: "LAB-2025-0006",
        patientId: "PAT-1019",
        patient: "Pooja Nair",
        age: 30,
        gender: "F",
        tests: ["Urine Routine", "Urine Culture"],
        status: "In Lab",
        collectedAt: "2025-10-05T11:28:10+05:30",
        verifiedAt: null,
        total: "₹ 1,150.00",
        clinician: "Dr. R. Kapoor",
        priority: "High",
    },
    {
        id: "LAB-2025-0007",
        patientId: "PAT-1033",
        patient: "Karan Singh",
        age: 52,
        gender: "M",
        tests: ["PSA"],
        status: "Approved",
        collectedAt: "2025-10-03T18:44:50+05:30",
        verifiedAt: null,
        total: "₹ 1,650.00",
        clinician: "Dr. T. Bose",
        priority: "Routine",
    },
    {
        id: "LAB-2025-0008",
        patientId: "PAT-1045",
        patient: "Sneha Joshi",
        age: 24,
        gender: "F",
        tests: ["Beta-hCG"],
        status: "Pending",
        collectedAt: "2025-10-05T12:02:14+05:30",
        verifiedAt: null,
        total: "₹ 1,350.00",
        clinician: "Dr. S. Mathur",
        priority: "High",
    },
    {
        id: "LAB-2025-0009",
        patientId: "PAT-1003",
        patient: "Vikram Iyer",
        age: 40,
        gender: "M",
        tests: ["CRP", "ESR"],
        status: "Completed",
        collectedAt: "2025-10-01T09:12:31+05:30",
        verifiedAt: "2025-10-01T12:22:06+05:30",
        total: "₹ 890.00",
        clinician: "Dr. R. Bhalla",
        priority: "Routine",
    },
    {
        id: "LAB-2025-0010",
        patientId: "PAT-1052",
        patient: "Ishita Desai",
        age: 34,
        gender: "F",
        tests: ["D-Dimer"],
        status: "In Lab",
        collectedAt: "2025-10-05T09:50:01+05:30",
        verifiedAt: null,
        total: "₹ 1,050.00",
        clinician: "Dr. P. Batra",
        priority: "High",
    },
    {
        id: "LAB-2025-0011",
        patientId: "PAT-1064",
        patient: "Saurabh Jain",
        age: 29,
        gender: "M",
        tests: ["KFT"],
        status: "Approved",
        collectedAt: "2025-10-04T17:33:47+05:30",
        verifiedAt: null,
        total: "₹ 1,200.00",
        clinician: "Dr. Q. Singh",
        priority: "Routine",
    },
    {
        id: "LAB-2025-0012",
        patientId: "PAT-1070",
        patient: "Tanya Kapoor",
        age: 38,
        gender: "F",
        tests: ["Ferritin", "Iron", "TIBC"],
        status: "Pending",
        collectedAt: "2025-10-05T13:41:25+05:30",
        verifiedAt: null,
        total: "₹ 1,420.00",
        clinician: "Dr. L. Menon",
        priority: "Routine",
    },
];

const STATUS_ORDER = ["Pending", "In Lab", "Approved", "Completed", "Cancelled"];

function LabsListPage() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("All");
    const [modal, setModal] = useState(null); // { title, body }

    const filtered = useMemo(() => {
        const t = q.trim().toLowerCase();
        return FIXTURE_LABS.filter((r) => {
            const matchText =
                !t ||
                r.id.toLowerCase().includes(t) ||
                r.patient.toLowerCase().includes(t) ||
                r.tests.join(", ").toLowerCase().includes(t) ||
                r.patientId.toLowerCase().includes(t) ||
                r.clinician.toLowerCase().includes(t);
            const matchStatus = status === "All" ? true : r.status === status;
            return matchText && matchStatus;
        }).sort((a, b) => {
            const ai = STATUS_ORDER.indexOf(a.status);
            const bi = STATUS_ORDER.indexOf(b.status);
            return ai - bi || b.collectedAt.localeCompare(a.collectedAt);
        });
    }, [q, status]);

    const counts = useMemo(() => {
        const c = { All: FIXTURE_LABS.length };
        for (const s of STATUS_ORDER) c[s] = FIXTURE_LABS.filter((r) => r.status === s).length;
        return c;
    }, []);

    // print selected area only
    const printList = () => {
        const el = document.getElementById("search-print-area");
        if (!el) return;
        document.body.classList.add("print-section-mode");
        try {
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 250);
        }
    };

    const openDisabledModal = (title) => {
        setModal({
            title,
            body: (
                <>
                    <p style={{ marginBottom: 8 }}>{DEMO_DISABLED_MSG}</p>
                    <p>Use the existing orders for navigation and printing.</p>
                </>
            ),
        });
    };

    useEffect(() => {
        document.title = "Labs — Orders";
    }, []);

    return (
        <S.Page>
            {/* Print rules (scoped) */}
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

            <S.HeaderBar>
                <div className="crumbs">
                    <NavLink to="/home">Home</NavLink>
                    <span className="sep">›</span>
                    <NavLink to="/labs">Labs</NavLink>
                    <span className="sep">›</span>
                    <span>Orders</span>
                </div>
                <div className="headerRight">
                    <button
                        className="btn subtle"
                        onClick={() => navigate("/labs/catalog")}
                        title="Browse test catalog"
                    >
                        Open Catalog
                    </button>
                    <button
                        className="btn"
                        onClick={() => openDisabledModal("New Lab Order")}
                        aria-label="New lab order"
                    >
                        New Lab Order
                    </button>
                    <button className="btn outline" onClick={printList} aria-label="Print list">Print</button>
                </div>
            </S.HeaderBar>

            <S.TopStrip>
                <div className="metrics">
                    <div className="card">
                        <div className="k">Total</div>
                        <div className="v">{counts.All}</div>
                    </div>
                    <div className="card">
                        <div className="k">Pending</div>
                        <div className="v">{counts.Pending}</div>
                    </div>
                    <div className="card">
                        <div className="k">In Lab</div>
                        <div className="v">{counts["In Lab"]}</div>
                    </div>
                    <div className="card">
                        <div className="k">Approved</div>
                        <div className="v">{counts.Approved}</div>
                    </div>
                    <div className="card">
                        <div className="k">Completed</div>
                        <div className="v">{counts.Completed}</div>
                    </div>
                    <div className="card">
                        <div className="k">Cancelled</div>
                        <div className="v">{counts.Cancelled}</div>
                    </div>
                </div>

                <div className="quickLinks">
                    <Link to="/patients" className="ql">Patients</Link>
                    <Link to="/appointments" className="ql">Appointments</Link>
                    <Link to="/prescriptions" className="ql">Prescriptions</Link>
                    <Link to="/labs/catalog" className="ql">Lab Catalog</Link>
                    <Link to="/finance" className="ql">Finance</Link>
                    <Link to="/reports" className="ql">Reports</Link>
                </div>
            </S.TopStrip>

            <S.Grid>
                <S.Side>
                    <div className="searchBox">
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search by ID / patient / test / clinician"
                            aria-label="Search labs"
                        />
                    </div>

                    <div className="section">
                        <div className="sectionTitle">Status</div>
                        <div className="chips">
                            {["All", ...STATUS_ORDER].map((s) => (
                                <button
                                    key={s}
                                    className={`chip ${status === s ? "active" : ""}`}
                                    onClick={() => setStatus(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="section">
                        <div className="sectionTitle">Shortcuts</div>
                        <div className="links">
                            <Link to="/labs">Orders</Link>
                            <Link to="/labs/catalog">Catalog</Link>
                            <Link to="/labs/catalog" state={{ q: "CBC" }}>CBC in Catalog</Link>
                            <Link to="/reports/inventory">Inventory Report</Link>
                            <Link to="/reports/finance">Finance Report</Link>
                            <Link to="/admin/users">Admin · Users</Link>
                            <Link to="/settings/print-templates">Print Templates</Link>
                        </div>
                    </div>

                    <div className="section">
                        <div className="sectionTitle">Help</div>
                        <div className="links">
                            <Link to="/help">Help Center</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/changelog">Changelog</Link>
                            <Link to="/roadmap">Roadmap</Link>
                        </div>
                    </div>
                </S.Side>

                <S.Main id="search-print-area">
                    <S.TableWrap>
                        <table className="labs">
                            <thead>
                                <tr>
                                    <th>Order</th>
                                    <th>Patient</th>
                                    <th>Tests</th>
                                    <th>Priority</th>
                                    <th>Collected</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Navigate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((r) => (
                                    <tr key={r.id}>
                                        <td>
                                            <div className="idcell">
                                                <Link className="id" to={`/labs/${r.id}`}>{r.id}</Link>
                                                <div className="meta">
                                                    <span>Clinician: {r.clinician}</span>
                                                    {r.verifiedAt ? (
                                                        <span>Verified: {fmtDateTime(r.verifiedAt)}</span>
                                                    ) : (
                                                        <span>—</span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="patient">
                                                <div className="avatar" aria-hidden="true">
                                                    {r.patient
                                                        .split(" ")
                                                        .map((x) => x[0])
                                                        .join("")
                                                        .slice(0, 2)}
                                                </div>
                                                <div className="pinfo">
                                                    <Link to={`/patients/${r.patientId}`} className="pname">
                                                        {r.patient}
                                                    </Link>
                                                    <div className="psub">
                                                        <span>{r.gender} · {r.age}y</span>
                                                        <span> · ID: {r.patientId}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="tests">
                                                {r.tests.map((t) => (
                                                    <span key={t} className="test">
                                                        <Link to="/labs/catalog" state={{ q: t }}>{t}</Link>
                                                    </span>
                                                ))}
                                            </div>
                                        </td>

                                        <td>
                                            <span className={`badge ${r.priority.toLowerCase()}`}>{r.priority}</span>
                                        </td>

                                        <td>
                                            <div className="dates">
                                                <div className="d">{fmtDate(r.collectedAt)}</div>
                                                <div className="t">{fmtTime(r.collectedAt)}</div>
                                            </div>
                                        </td>

                                        <td>
                                            <span className={`status ${r.status.replace(/\s+/g, "-").toLowerCase()}`}>
                                                {r.status}
                                            </span>
                                        </td>

                                        <td>{r.total}</td>

                                        <td>
                                            <div className="go">
                                                <Link to={`/labs/${r.id}`}>View</Link>
                                                <span className="dot">·</span>
                                                <Link to={`/labs/${r.id}/print`}>Print</Link>
                                                <span className="dot">·</span>
                                                <Link to={`/appointments`}>Schedule</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {filtered.length === 0 && (
                            <div className="empty">
                                <div className="title">No results</div>
                                <div className="sub">Try a different search or status filter.</div>
                            </div>
                        )}
                    </S.TableWrap>
                </S.Main>
            </S.Grid>

            {/* Inline modal (custom, not browser alert) */}
            {modal && (
                <S.Modal role="dialog" aria-modal="true">
                    <div className="overlay" onClick={() => setModal(null)} />
                    <div className="box" role="document">
                        <div className="head">
                            <div className="ttl">{modal.title}</div>
                            <button className="x" onClick={() => setModal(null)} aria-label="Close">×</button>
                        </div>
                        <div className="body">{modal.body}</div>
                        <div className="foot">
                            <button className="btn" onClick={() => setModal(null)}>Okay</button>
                        </div>
                    </div>
                </S.Modal>
            )}
        </S.Page>
    );
}

export default LabsListPage;
