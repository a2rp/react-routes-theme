import React, { useMemo, useState, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { MdSearch, MdPrint, MdOpenInNew, MdOutlineInfo, MdWarningAmber, MdClose } from "react-icons/md";

/** Demo data (display-only; deterministic) */
const RX_ROWS = [
    {
        id: "RX-2025-0001",
        dateISO: "2025-10-04T15:38:20+05:30",
        patient: { id: "PAT-1001", name: "Anita Sharma", age: 34, gender: "F" },
        doctor: { id: "USR-45", name: "Dr. K. R. Singh", specialty: "Internal Medicine" },
        status: "Issued",
        items: [
            { id: "MED-AMOX-500", name: "Amoxicillin 500mg", dose: "1-0-1", days: 5 },
            { id: "MED-PCM-650", name: "Paracetamol 650mg", dose: "0-1-0", days: 3 }
        ],
        tags: ["Respiratory", "Bacterial"]
    },
    {
        id: "RX-2025-0002",
        dateISO: "2025-10-03T11:05:12+05:30",
        patient: { id: "PAT-1008", name: "Vikram Iyer", age: 52, gender: "M" },
        doctor: { id: "USR-31", name: "Dr. R. Mehta", specialty: "Cardiology" },
        status: "Dispensed",
        items: [
            { id: "MED-ATOR-20", name: "Atorvastatin 20mg", dose: "1-0-0", days: 30 }
        ],
        tags: ["Lipid", "Long-term"]
    },
    {
        id: "RX-2025-0003",
        dateISO: "2025-10-02T09:20:40+05:30",
        patient: { id: "PAT-1015", name: "Priya Nand", age: 28, gender: "F" },
        doctor: { id: "USR-45", name: "Dr. K. R. Singh", specialty: "Internal Medicine" },
        status: "Partially Dispensed",
        items: [
            { id: "MED-FEXO-120", name: "Fexofenadine 120mg", dose: "0-1-0", days: 7 },
            { id: "MED-MONT-10", name: "Montelukast 10mg", dose: "0-0-1", days: 7 }
        ],
        tags: ["Allergy"]
    },
    {
        id: "RX-2025-0004",
        dateISO: "2025-10-01T17:48:05+05:30",
        patient: { id: "PAT-1004", name: "Sanjay Kumar", age: 41, gender: "M" },
        doctor: { id: "USR-12", name: "Dr. A. Verma", specialty: "Orthopedics" },
        status: "Cancelled",
        items: [
            { id: "MED-ETOR-90", name: "Etoricoxib 90mg", dose: "1-0-0", days: 10 }
        ],
        tags: ["Pain", "Bone/Joint"]
    },
    {
        id: "RX-2025-0005",
        dateISO: "2025-09-30T10:02:33+05:30",
        patient: { id: "PAT-1012", name: "Ritu Chauhan", age: 63, gender: "F" },
        doctor: { id: "USR-31", name: "Dr. R. Mehta", specialty: "Cardiology" },
        status: "Issued",
        items: [
            { id: "MED-METO-50", name: "Metoprolol 50mg", dose: "1-0-1", days: 30 },
            { id: "MED-ASA-75", name: "Aspirin 75mg", dose: "0-1-0", days: 30 }
        ],
        tags: ["Cardiac"]
    },
    {
        id: "RX-2025-0006",
        dateISO: "2025-09-30T08:40:10+05:30",
        patient: { id: "PAT-1007", name: "Aman Gupta", age: 19, gender: "M" },
        doctor: { id: "USR-77", name: "Dr. S. Rao", specialty: "Dermatology" },
        status: "Issued",
        items: [
            { id: "MED-ISO-20", name: "Isotretinoin 20mg", dose: "1-0-0", days: 21 }
        ],
        tags: ["Skin"]
    },
    {
        id: "RX-2025-0007",
        dateISO: "2025-09-29T12:25:08+05:30",
        patient: { id: "PAT-1018", name: "Harish V", age: 47, gender: "M" },
        doctor: { id: "USR-12", name: "Dr. A. Verma", specialty: "Orthopedics" },
        status: "Dispensed",
        items: [
            { id: "MED-D3-60K", name: "Vitamin D3 60K", dose: "once weekly", days: 8 }
        ],
        tags: ["Supplements"]
    },
    {
        id: "RX-2025-0008",
        dateISO: "2025-09-29T09:10:55+05:30",
        patient: { id: "PAT-1002", name: "Sunita Devi", age: 38, gender: "F" },
        doctor: { id: "USR-77", name: "Dr. S. Rao", specialty: "Dermatology" },
        status: "Issued",
        items: [
            { id: "MED-AZI-500", name: "Azithromycin 500mg", dose: "1-0-0", days: 3 }
        ],
        tags: ["Derm Infection"]
    }
];

/** Date formatting helpers per spec */
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${WEEK[d.getDay()]} ${MON[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (iso) => {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

const DEMO_DISABLED_MSG = "Demo mode: action not available";

/** Simple demo modal (no browser alert) */
const DemoModal = ({ open, onClose, title = "Action unavailable", message = DEMO_DISABLED_MSG }) => {
    if (!open) return null;
    return (
        <Styled.ModalBackdrop role="dialog" aria-modal="true">
            <Styled.ModalCard className="card">
                <header>
                    <h3>{title}</h3>
                    <button onClick={onClose} aria-label="Close modal"><MdClose size={18} /></button>
                </header>
                <div className="content">
                    <p>{message}</p>
                </div>
                <footer>
                    <button onClick={onClose}>Okay</button>
                </footer>
            </Styled.ModalCard>
        </Styled.ModalBackdrop>
    );
};

const ActionChip = ({ children }) => <span className="chip">{children}</span>;

export default function PrescriptionsList() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("All");
    const [modalOpen, setModalOpen] = useState(false);

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return RX_ROWS.filter(row => {
            const hay = [
                row.id,
                row.patient.name,
                row.patient.id,
                row.doctor.name,
                row.doctor.specialty,
                ...row.items.map(i => i.name),
                ...(row.tags || [])
            ].join(" ").toLowerCase();
            const matchQ = tokens.length ? tokens.every(t => hay.includes(t)) : true;
            const matchStatus = status === "All" ? true : row.status === status;
            return matchQ && matchStatus;
        });
    }, [q, status]);

    const openDemoModal = useCallback(() => setModalOpen(true), []);
    const closeDemoModal = useCallback(() => setModalOpen(false), []);

    const handlePrint = useCallback(() => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 250);
        }
    }, []);

    const deepLink = (rxId) => `/prescriptions/${encodeURIComponent(rxId)}`;

    return (
        <Styled.Page>
            <Styled.HeaderBar className="card">
                <div className="left">
                    <h2>Prescriptions</h2>
                    <div className="meta">
                        <ActionChip>{RX_ROWS.length} total</ActionChip>
                        <ActionChip>Showing {filtered.length}</ActionChip>
                        <ActionChip>Updated {fmtDateTime("2025-10-04T15:38:20+05:30")}</ActionChip>
                    </div>
                </div>

                <nav className="quicklinks">
                    <NavLink to="/patients">Patients</NavLink>
                    <NavLink to="/appointments">Appointments</NavLink>
                    <NavLink to="/appointments/calendar">Calendar</NavLink>
                    <NavLink to="/medicines">Medicines</NavLink>
                    <NavLink to="/labs">Labs</NavLink>
                    <NavLink to="/reports">Reports</NavLink>
                </nav>

                <div className="actions">
                    <button onClick={openDemoModal} title={DEMO_DISABLED_MSG} aria-disabled="true">New Prescription</button>
                    <button onClick={handlePrint} title="Print this list section"><MdPrint size={16} /> Print</button>
                </div>
            </Styled.HeaderBar>

            <Styled.Filters className="card">
                <div className="search">
                    <MdSearch size={18} />
                    <input
                        type="text"
                        placeholder="Search patient, doctor, medicine, tag…"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        aria-label="Search prescriptions"
                    />
                    {q && <button className="clear" onClick={() => setQ("")} aria-label="Clear search"><MdClose size={16} /></button>}
                </div>

                <div className="statuses" role="tablist" aria-label="Filter by status">
                    {["All", "Issued", "Dispensed", "Partially Dispensed", "Cancelled"].map(s => (
                        <button
                            key={s}
                            role="tab"
                            aria-selected={status === s}
                            className={status === s ? "active" : ""}
                            onClick={() => setStatus(s)}
                        >
                            {s}
                        </button>
                    ))}
                </div>

                <div className="hints">
                    <span><MdOutlineInfo size={16} /> Tip: open a patient, doctor, or medicine in a new tab for quick cross-check.</span>
                    <span><MdWarningAmber size={16} /> Demo mode: create/edit/void actions are disabled.</span>
                </div>
            </Styled.Filters>

            {/* Print CSS (scoped) */}
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

            <section id="search-print-area">
                <Styled.TableWrap className="card">
                    <table className="rx">
                        <thead>
                            <tr>
                                <th>RX</th>
                                <th>Date / Time</th>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Items</th>
                                <th>Status</th>
                                <th className="right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(row => (
                                <tr key={row.id}>
                                    <td>
                                        <Link to={deepLink(row.id)} className="idlink">{row.id}</Link>
                                    </td>
                                    <td>
                                        <div className="date">{fmtDate(row.dateISO)}</div>
                                        <div className="time">{fmtTime(row.dateISO)}</div>
                                    </td>
                                    <td>
                                        <Link to={`/patients/${row.patient.id}`} className="entity">{row.patient.name}</Link>
                                        <div className="muted">{row.patient.id} • {row.patient.gender} • {row.patient.age}y</div>
                                    </td>
                                    <td>
                                        <Link to={`/admin/users/${row.doctor.id}`} className="entity">{row.doctor.name}</Link>
                                        <div className="muted">{row.doctor.specialty}</div>
                                    </td>
                                    <td>
                                        <ul className="items">
                                            {row.items.map(it => (
                                                <li key={it.id}>
                                                    <Link to={`/medicines/${it.id}`} className="pill">{it.name}</Link>
                                                    <span className="muted"> — {it.dose} × {it.days}d</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="tags">
                                            {(row.tags || []).map(t => <span className="tag" key={t}>{t}</span>)}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status ${row.status.replace(/\s+/g, '-').toLowerCase()}`}>{row.status}</span>
                                    </td>
                                    <td className="right">
                                        <div className="rowactions">
                                            <Link to={deepLink(row.id)} className="ghost">Open <MdOpenInNew size={14} /></Link>
                                            <button onClick={() => navigate(`${deepLink(row.id)}`)} className="ghost">View</button>
                                            <button onClick={openDemoModal} className="ghost" aria-disabled="true" title={DEMO_DISABLED_MSG}>Edit</button>
                                            <button onClick={openDemoModal} className="ghost danger" aria-disabled="true" title={DEMO_DISABLED_MSG}>Void</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={7}>
                                        <Styled.Empty>
                                            <h3>No prescriptions match your search</h3>
                                            <p>Try adjusting the status filter or clearing your search.</p>
                                            <div className="links">
                                                <NavLink to="/patients" className="ghost">Browse Patients</NavLink>
                                                <NavLink to="/medicines" className="ghost">Browse Medicines</NavLink>
                                                <NavLink to="/appointments" className="ghost">View Appointments</NavLink>
                                            </div>
                                        </Styled.Empty>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Styled.TableWrap>
            </section>

            <Styled.FooterBar className="card">
                <div className="left">
                    <span>Showing {filtered.length} of {RX_ROWS.length}</span>
                </div>
                <div className="rlinks">
                    <NavLink to="/reports/sales">Sales Report</NavLink>
                    <NavLink to="/reports/inventory">Inventory Report</NavLink>
                    <NavLink to="/reports/customers">Customer Report</NavLink>
                    <NavLink to="/labs">Lab Orders</NavLink>
                    <NavLink to="/imaging">Imaging</NavLink>
                </div>
            </Styled.FooterBar>

            <DemoModal open={modalOpen} onClose={closeDemoModal} />
        </Styled.Page>
    );
}
