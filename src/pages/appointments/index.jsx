import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdSearch, MdPrint, MdClose, MdMoreVert, MdOutlineCalendarToday, MdOpenInNew, MdSchedule, MdAccessTime, MdPerson, MdLocalHospital, MdLocationOn, MdCancel, MdOutlineEditCalendar } from "react-icons/md";
import { Styled } from "./styled";

/** Demo-only fixtures (display-only) */
const APPOINTMENTS = [
    {
        id: "APT-1001",
        date: "2025-10-05T09:30:00",
        durationMin: 20,
        status: "Scheduled",
        type: "Consultation",
        patient: { id: "PAT-1001", name: "Rahul Sharma", sex: "M", age: 32 },
        doctor: { id: "USR-201", name: "Dr. Meera Nair", dept: "Cardiology" },
        location: "OPD-2",
        tags: ["first-visit", "cash"],
        createdAt: "2025-10-04T12:10:12",
        updatedAt: "2025-10-04T12:10:12"
    },
    {
        id: "APT-1002",
        date: "2025-10-05T10:00:00",
        durationMin: 20,
        status: "Checked-in",
        type: "Consultation",
        patient: { id: "PAT-1002", name: "Priya Verma", sex: "F", age: 27 },
        doctor: { id: "USR-202", name: "Dr. Arjun Bhat", dept: "Dermatology" },
        location: "OPD-1",
        tags: ["follow-up"],
        createdAt: "2025-10-03T17:22:45",
        updatedAt: "2025-10-05T09:58:00"
    },
    {
        id: "APT-1003",
        date: "2025-10-05T10:30:00",
        durationMin: 30,
        status: "Completed",
        type: "Consultation",
        patient: { id: "PAT-1003", name: "Sanjay Patel", sex: "M", age: 45 },
        doctor: { id: "USR-203", name: "Dr. Kavya Rao", dept: "Orthopedics" },
        location: "OPD-3",
        tags: ["xray"],
        createdAt: "2025-10-02T11:01:05",
        updatedAt: "2025-10-05T10:58:10"
    },
    {
        id: "APT-1004",
        date: "2025-10-05T11:00:00",
        durationMin: 20,
        status: "Scheduled",
        type: "Vaccination",
        patient: { id: "PAT-1004", name: "Aarav Sinha", sex: "M", age: 6 },
        doctor: { id: "USR-204", name: "Dr. Nidhi Kapoor", dept: "Pediatrics" },
        location: "Immunization Bay",
        tags: ["vaccine"],
        createdAt: "2025-10-01T09:10:12",
        updatedAt: "2025-10-04T14:20:12"
    },
    {
        id: "APT-1005",
        date: "2025-10-05T11:30:00",
        durationMin: 20,
        status: "Cancelled",
        type: "Consultation",
        patient: { id: "PAT-1005", name: "Neha Gupta", sex: "F", age: 36 },
        doctor: { id: "USR-202", name: "Dr. Arjun Bhat", dept: "Dermatology" },
        location: "OPD-1",
        tags: ["cancelled-by-patient"],
        createdAt: "2025-10-03T10:00:00",
        updatedAt: "2025-10-04T18:12:00"
    },
    {
        id: "APT-1006",
        date: "2025-10-05T12:00:00",
        durationMin: 20,
        status: "No-show",
        type: "Follow-up",
        patient: { id: "PAT-1006", name: "Vikas Yadav", sex: "M", age: 41 },
        doctor: { id: "USR-201", name: "Dr. Meera Nair", dept: "Cardiology" },
        location: "OPD-2",
        tags: ["call-reminder"],
        createdAt: "2025-10-04T15:00:00",
        updatedAt: "2025-10-05T12:30:00"
    },
    {
        id: "APT-1007",
        date: "2025-10-05T12:30:00",
        durationMin: 20,
        status: "Scheduled",
        type: "Consultation",
        patient: { id: "PAT-1007", name: "Ananya Singh", sex: "F", age: 30 },
        doctor: { id: "USR-203", name: "Dr. Kavya Rao", dept: "Orthopedics" },
        location: "OPD-3",
        tags: ["insurance"],
        createdAt: "2025-10-02T09:30:00",
        updatedAt: "2025-10-02T09:30:00"
    },
    {
        id: "APT-1008",
        date: "2025-10-05T13:00:00",
        durationMin: 30,
        status: "Scheduled",
        type: "Dressing",
        patient: { id: "PAT-1008", name: "Mohit Kumar", sex: "M", age: 29 },
        doctor: { id: "USR-205", name: "Nurse Station", dept: "Nursing" },
        location: "Treatment Room 2",
        tags: ["nursing"],
        createdAt: "2025-10-04T08:25:10",
        updatedAt: "2025-10-04T08:25:10"
    },
    {
        id: "APT-1009",
        date: "2025-10-05T13:45:00",
        durationMin: 20,
        status: "Scheduled",
        type: "Consultation",
        patient: { id: "PAT-1009", name: "Ritu Das", sex: "F", age: 52 },
        doctor: { id: "USR-206", name: "Dr. Aman Gill", dept: "ENT" },
        location: "OPD-4",
        tags: [],
        createdAt: "2025-10-04T16:02:20",
        updatedAt: "2025-10-04T16:02:20"
    },
    {
        id: "APT-1010",
        date: "2025-10-05T14:15:00",
        durationMin: 20,
        status: "Scheduled",
        type: "Consultation",
        patient: { id: "PAT-1010", name: "Farhan Ali", sex: "M", age: 38 },
        doctor: { id: "USR-202", name: "Dr. Arjun Bhat", dept: "Dermatology" },
        location: "OPD-1",
        tags: ["biopsy"],
        createdAt: "2025-10-03T09:48:00",
        updatedAt: "2025-10-03T09:48:00"
    },
    {
        id: "APT-1011",
        date: "2025-10-05T14:45:00",
        durationMin: 20,
        status: "Scheduled",
        type: "Consultation",
        patient: { id: "PAT-1011", name: "Divya Menon", sex: "F", age: 34 },
        doctor: { id: "USR-201", name: "Dr. Meera Nair", dept: "Cardiology" },
        location: "OPD-2",
        tags: ["echo"],
        createdAt: "2025-10-04T10:11:29",
        updatedAt: "2025-10-04T10:11:29"
    },
    {
        id: "APT-1012",
        date: "2025-10-05T15:15:00",
        durationMin: 20,
        status: "Scheduled",
        type: "Consultation",
        patient: { id: "PAT-1012", name: "Kiran Joshi", sex: "M", age: 49 },
        doctor: { id: "USR-203", name: "Dr. Kavya Rao", dept: "Orthopedics" },
        location: "OPD-3",
        tags: [],
        createdAt: "2025-10-04T12:45:00",
        updatedAt: "2025-10-04T12:45:00"
    }
];

/** Date formatting helpers (required formats) */
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function pad(n) { return n < 10 ? `0${n}` : `${n}`; }

function formatDate(iso) {
    const d = new Date(iso);
    return `${days[d.getDay()]} ${months[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
}
function formatTime(iso) {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
}
function formatDateTime(iso) {
    return `${formatDate(iso)} ${formatTime(iso)}`;
}

function addMinutes(iso, min) {
    const d = new Date(iso);
    d.setMinutes(d.getMinutes() + min);
    return d.toISOString().slice(0, 19); // local-like string for formatter above (seconds included)
}

/** Simple confirm modal (demo-safe) */
const ConfirmModal = ({ open, onClose, title, body, actionLabel, onAction, disabled }) => {
    if (!open) return null;
    return (
        <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <div className="overlay" onClick={onClose} />
            <div className="card">
                <header>
                    <h3 id="confirm-title">{title}</h3>
                    <button className="icon" onClick={onClose} title="Close">
                        <MdClose size={18} />
                    </button>
                </header>
                <div className="body">
                    <p>{body}</p>
                </div>
                <footer>
                    <button onClick={onClose}>Close</button>
                    <button disabled={disabled} onClick={onAction} className="danger">{actionLabel}</button>
                </footer>
            </div>
        </Styled.Modal>
    );
};

const ToolbarButton = ({ to, onClick, icon, label, title, disabled }) => {
    const content = (
        <button onClick={onClick} disabled={disabled} title={title ?? label} className="toolBtn">
            {icon}
            <span>{label}</span>
        </button>
    );
    return to ? <Link to={to} className="toolLink">{content}</Link> : content;
};

export default function AppointmentsList() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all");
    const [modal, setModal] = useState({ open: false, id: null });

    const data = useMemo(() => {
        const txt = q.trim().toLowerCase();
        return APPOINTMENTS.filter(a => {
            const matchText =
                !txt ||
                a.id.toLowerCase().includes(txt) ||
                a.patient.name.toLowerCase().includes(txt) ||
                a.doctor.name.toLowerCase().includes(txt) ||
                a.type.toLowerCase().includes(txt) ||
                a.location.toLowerCase().includes(txt);
            const matchStatus = status === "all" || a.status.toLowerCase() === status;
            return matchText && matchStatus;
        });
    }, [q, status]);

    const counts = useMemo(() => {
        const c = { all: APPOINTMENTS.length, scheduled: 0, "checked-in": 0, completed: 0, cancelled: 0, "no-show": 0 };
        APPOINTMENTS.forEach(a => { c[a.status.toLowerCase()] = (c[a.status.toLowerCase()] || 0) + 1; });
        return c;
    }, []);

    const printSection = (id) => {
        const node = document.getElementById(id);
        if (!node) return;
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => document.body.classList.remove("print-section-mode"), 100);
    };

    const openCancel = (id) => setModal({ open: true, id });
    const closeCancel = () => setModal({ open: false, id: null });

    return (
        <Styled.Page>
            {/* Print rules (as provided) */}
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

            <div className="topbar">
                <div className="breadcrumbs">
                    <Link to="/home">Home</Link>
                    <span>/</span>
                    <NavLink to="/appointments" end>Appointments</NavLink>
                </div>

                <div className="toolbar">
                    <ToolbarButton
                        to="/appointments/calendar"
                        icon={<MdOutlineCalendarToday size={16} />}
                        label="Calendar"
                    />
                    <ToolbarButton
                        to="/tools/import-export"
                        icon={<MdOpenInNew size={16} />}
                        label="Export"
                        title="Go to Import/Export"
                    />
                    <ToolbarButton
                        onClick={() => printSection("search-print-area")}
                        icon={<MdPrint size={16} />}
                        label="Print List"
                        title="Print visible appointments"
                    />
                    <ToolbarButton
                        icon={<MdOutlineEditCalendar size={16} />}
                        label="New Appointment"
                        title="Demo mode: action disabled"
                        disabled
                    />
                </div>
            </div>

            <div className="headline">
                <div className="titleRow">
                    <h1><MdSchedule size={22} style={{ marginRight: 8, verticalAlign: "text-bottom" }} /> Appointments</h1>
                    <div className="meta">
                        <span>Today: {formatDate(new Date())}</span>
                        <span className="dot">•</span>
                        <span>Server time: {formatTime(new Date())}</span>
                    </div>
                </div>

                <div className="statsRow" role="region" aria-label="Quick stats">
                    <div className="stat">
                        <span className="label">All</span>
                        <span className="value">{counts.all}</span>
                    </div>
                    <div className="stat">
                        <span className="label">Scheduled</span>
                        <span className="value">{counts.scheduled}</span>
                    </div>
                    <div className="stat">
                        <span className="label">Checked-in</span>
                        <span className="value">{counts["checked-in"]}</span>
                    </div>
                    <div className="stat">
                        <span className="label">Completed</span>
                        <span className="value">{counts.completed}</span>
                    </div>
                    <div className="stat">
                        <span className="label">Cancelled</span>
                        <span className="value">{counts.cancelled}</span>
                    </div>
                    <div className="stat">
                        <span className="label">No-show</span>
                        <span className="value">{counts["no-show"]}</span>
                    </div>
                </div>
            </div>

            <div className="filters">
                <div className="search">
                    <MdSearch size={18} />
                    <input
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        placeholder="Search by patient, doctor, ID, type, location"
                        aria-label="Search appointments"
                    />
                </div>

                <div className="seg">
                    {[
                        ["all", `All (${counts.all})`],
                        ["scheduled", `Scheduled (${counts.scheduled})`],
                        ["checked-in", `Checked-in (${counts["checked-in"]})`],
                        ["completed", `Completed (${counts.completed})`],
                        ["cancelled", `Cancelled (${counts.cancelled})`],
                        ["no-show", `No-show (${counts["no-show"]})`],
                    ].map(([key, label]) => (
                        <button
                            key={key}
                            className={status === key ? "active" : ""}
                            onClick={() => setStatus(key)}
                            title={`Filter: ${label}`}
                            type="button"
                        >{label}</button>
                    ))}
                </div>

                <div className="quicklinks">
                    <Link to="/appointments/calendar">Open Calendar</Link>
                    <Link to="/reports/appointments">Appointments Report</Link>
                    <Link to="/patients">Patients</Link>
                    <Link to="/admin/users">Doctors</Link>
                </div>
            </div>

            {/* Printable area */}
            <section id="search-print-area" className="tableWrap">
                <table aria-label="Appointments table">
                    <thead>
                        <tr>
                            <th style={{ width: 140 }}>Appointment</th>
                            <th style={{ width: 260 }}>Patient</th>
                            <th style={{ width: 260 }}>Doctor</th>
                            <th style={{ width: 160 }}>When</th>
                            <th style={{ width: 160 }}>Location</th>
                            <th style={{ width: 140 }}>Status</th>
                            <th>Tags</th>
                            <th style={{ width: 220 }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(a => {
                            const endISO = addMinutes(a.date, a.durationMin);
                            return (
                                <tr key={a.id}>
                                    <td>
                                        <div className="cellTitle">
                                            <Link to={`/appointments/${a.id}`} className="id">{a.id}</Link>
                                            <span className="sub">{a.type}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="person">
                                            <MdPerson size={16} className="ic" />
                                            <div className="col">
                                                <Link to={`/patients/${a.patient.id}`} className="name">{a.patient.name}</Link>
                                                <span className="sub">{a.patient.sex} • {a.patient.age}y</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="person">
                                            <MdLocalHospital size={16} className="ic" />
                                            <div className="col">
                                                <Link to={`/admin/users/${a.doctor.id}`} className="name">{a.doctor.name}</Link>
                                                <span className="sub">{a.doctor.dept}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="when">
                                            <div className="date">{formatDate(a.date)}</div>
                                            <div className="time"><MdAccessTime size={14} /> {formatTime(a.date)} – {formatTime(endISO)}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="loc"><MdLocationOn size={14} /> {a.location}</div>
                                    </td>
                                    <td>
                                        <span className={`status ${a.status.toLowerCase().replace(/\s/g, '-')}`}>{a.status}</span>
                                    </td>
                                    <td>
                                        <div className="tags">
                                            {a.tags.length === 0 ? <span className="muted">—</span> :
                                                a.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="rowActions">
                                            <Link to={`/appointments/${a.id}`} className="link">View</Link>
                                            <Link to={`/print/sticker/${a.id}`} className="link">Print</Link>
                                            <button
                                                className="link"
                                                title="Demo mode: reschedule disabled"
                                                disabled
                                            >
                                                Reschedule
                                            </button>
                                            <button
                                                className="link danger"
                                                onClick={() => openCancel(a.id)}
                                                title="Cancel (demo-safe confirmation)"
                                            >
                                                Cancel
                                            </button>
                                            <button className="iconBtn" title="More">
                                                <MdMoreVert size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {data.length === 0 && (
                    <div className="empty">
                        <p>No appointments match your search.</p>
                        <div className="emptyLinks">
                            <Link to="/appointments">Clear filters</Link>
                            <Link to="/appointments/calendar">Open Calendar</Link>
                            <Link to="/patients">Go to Patients</Link>
                        </div>
                    </div>
                )}
            </section>

            <div className="footerNav">
                <Link to="/appointments/calendar">Calendar</Link>
                <span className="dot">•</span>
                <Link to="/reports/appointments">Reports</Link>
                <span className="dot">•</span>
                <Link to="/help">Help</Link>
            </div>

            {/* Cancel modal (demo-safe: action is disabled) */}
            <ConfirmModal
                open={modal.open}
                onClose={closeCancel}
                title="Cancel appointment?"
                body={
                    <>
                        <div style={{ marginBottom: 8 }}>
                            You are viewing a demo. Destructive actions are disabled.
                        </div>
                        <div className="small">
                            Appointment ID: <strong>{modal.id}</strong>
                        </div>
                    </>
                }
                actionLabel="Confirm Cancel"
                onAction={() => { }}
                disabled
            />
        </Styled.Page>
    );
}
