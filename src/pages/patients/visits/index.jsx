import React, { useMemo, useState, useCallback, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Styled } from "./styled";

// --- formatting helpers (consistent across the app) ---
const fmt = {
    date: (iso) => {
        const d = new Date(iso);
        const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()];
        const mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()];
        const day = String(d.getDate()).padStart(2, "0");
        const yr = d.getFullYear();
        return `${wd} ${mo} ${day} ${yr}`;
    },
    time: (iso) => {
        const d = new Date(iso);
        const hh = String(d.getHours()).padStart(2, "0");
        const mm = String(d.getMinutes()).padStart(2, "0");
        const ss = String(d.getSeconds()).padStart(2, "0");
        return `${hh}:${mm}:${ss}hrs`;
    },
    datetime: (iso) => `${fmt.date(iso)} ${fmt.time(iso)}`
};

// --- demo fixture (display-only) ---
const demoPatient = {
    id: "PAT-1001",
    code: "PAT-1001",
    name: "Riya Singh",
    gender: "F",
    age: 32,
    phone: "+91 98xxxxxx12",
    email: "riya.singh@example.com",
    bloodGroup: "O+",
    tags: ["VIP", "Diabetic"],
    createdAt: "2025-02-14T12:20:00+05:30",
    updatedAt: "2025-10-02T10:05:22+05:30",
};

const demoVisits = [
    {
        id: "VIS-5006",
        at: "2025-10-04T15:38:20+05:30",
        dept: "Internal Medicine",
        reason: "Follow-up: HbA1c",
        doctor: "Dr. A. Menon",
        vitals: { bp: "120/80", pulse: "78", temp: "98.6°F", spo2: "99%" },
        appointmentId: "APT-9021",
        rxId: "RX-1047",
        labId: "LAB-7881",
        imagingId: "IMG-5440",
        invoiceId: "INV-2088",
        status: "Completed"
    },
    {
        id: "VIS-5007",
        at: "2025-10-18T10:00:00+05:30",
        dept: "Endocrinology",
        reason: "Routine review",
        doctor: "Dr. S. Rao",
        vitals: { bp: "122/82", pulse: "76", temp: "98.4°F", spo2: "98%" },
        appointmentId: "APT-9050",
        rxId: "RX-1059",
        labId: "LAB-7920",
        imagingId: "IMG-5512",
        invoiceId: "INV-2096",
        status: "Upcoming"
    },
    {
        id: "VIS-5003",
        at: "2025-08-22T11:45:12+05:30",
        dept: "Cardiology",
        reason: "ECG review",
        doctor: "Dr. P. Gupta",
        vitals: { bp: "124/82", pulse: "80", temp: "98.7°F", spo2: "98%" },
        appointmentId: "APT-8840",
        rxId: "RX-1011",
        labId: "LAB-7610",
        imagingId: "IMG-5201",
        invoiceId: "INV-2019",
        status: "Completed"
    },
    {
        id: "VIS-5001",
        at: "2025-06-15T09:10:45+05:30",
        dept: "General OPD",
        reason: "Fever & fatigue",
        doctor: "Dr. K. Chawla",
        vitals: { bp: "118/78", pulse: "84", temp: "100.1°F", spo2: "97%" },
        appointmentId: "APT-8711",
        rxId: "RX-0992",
        labId: "LAB-7495",
        imagingId: "IMG-5102",
        invoiceId: "INV-1980",
        status: "Completed"
    }
];

// simple status badge color map via CSS classes (kept semantic)
const statusClass = (s) =>
    s === "Completed" ? "ok" : s === "Upcoming" ? "warn" : "muted";

// custom confirm/notice modal (non-blocking)
const DemoModal = ({ open, onClose, title = "Action unavailable", body = "This is a demo. Changes are disabled." }) => {
    if (!open) return null;
    return (
        <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
            <div className="box card">
                <h3 id="demo-modal-title">{title}</h3>
                <p>{body}</p>
                <div className="actions">
                    <button onClick={onClose} autoFocus>Close</button>
                </div>
            </div>
            <div className="backdrop" onClick={onClose} />
        </Styled.Modal>
    );
};

const PatientVisits = () => {
    const { patientId = demoPatient.id } = useParams();
    const [modalOpen, setModalOpen] = useState(false);
    const printRef = useRef(null);

    // derive current patient (display-only)
    const patient = useMemo(() => ({ ...demoPatient, id: patientId }), [patientId]);

    const onDemoAction = useCallback(() => setModalOpen(true), []);
    const closeModal = useCallback(() => setModalOpen(false), []);

    // print only the section with id="search-print-area"
    const onPrint = useCallback(() => {
        const body = document.body;
        body.classList.add("print-section-mode");
        setTimeout(() => {
            window.print();
            setTimeout(() => body.classList.remove("print-section-mode"), 50);
        }, 50);
    }, []);

    return (
        <Styled.Wrap>
            {/* print-only rules for targeted section */}
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
            <nav className="breadcrumbs">
                <NavLink to="/home">Home</NavLink>
                <span>/</span>
                <NavLink to="/patients">Patients</NavLink>
                <span>/</span>
                <NavLink to={`/patients/${patient.id}`}>{patient.name}</NavLink>
                <span>/</span>
                <span className="current">Visits</span>
            </nav>

            {/* Header: patient summary + quick links */}
            <section className="header card" id="search-print-area" ref={printRef}>
                <div className="identity">
                    <div className="avatar" aria-hidden="true">{patient.name.charAt(0)}</div>
                    <div className="meta">
                        <h1>{patient.name} <span className="code">{patient.code}</span></h1>
                        <div className="muted">
                            {patient.gender} • {patient.age} yrs • {patient.bloodGroup} •{" "}
                            <a href={`tel:${patient.phone}`} title="Call">{patient.phone}</a> •{" "}
                            <a href={`mailto:${patient.email}`} title="Email">{patient.email}</a>
                        </div>
                        <div className="tags">
                            {patient.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                        </div>
                    </div>
                </div>

                <div className="meta-grid">
                    <div><span className="k">Created</span><span className="v">{fmt.datetime(patient.createdAt)}</span></div>
                    <div><span className="k">Last Updated</span><span className="v">{fmt.datetime(patient.updatedAt)}</span></div>
                    <div><span className="k">Total Visits</span><span className="v">{demoVisits.length}</span></div>
                    <div><span className="k">Primary Dept</span><span className="v">Internal Medicine</span></div>
                </div>

                <div className="quicklinks">
                    <NavLink to={`/patients/${patient.id}`} className="link">Patient Detail</NavLink>
                    <NavLink to="/appointments" className="link">Appointments</NavLink>
                    <NavLink to="/appointments/calendar" className="link">Calendar</NavLink>
                    <NavLink to="/prescriptions" className="link">Prescriptions</NavLink>
                    <NavLink to="/labs" className="link">Labs</NavLink>
                    <NavLink to="/imaging" className="link">Imaging</NavLink>
                    <NavLink to="/invoices" className="link">Invoices</NavLink>
                    <NavLink to="/reports/customers" className="link">Customer Report</NavLink>
                    <NavLink to="/reports/finance" className="link">Finance Report</NavLink>
                </div>
            </section>

            {/* Toolbar */}
            <div className="toolbar card">
                <div className="left">
                    <input type="text" placeholder="Search visits" aria-label="Search visits" />
                    <input type="date" aria-label="From date" />
                    <input type="date" aria-label="To date" />
                    <select aria-label="Status filter" defaultValue="ALL">
                        <option value="ALL">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Upcoming">Upcoming</option>
                    </select>
                </div>
                <div className="right">
                    <button title="Demo only" disabled>New Visit</button>
                    <button title="Demo only" disabled>New Prescription</button>
                    <button onClick={onPrint} title="Print summary">Print Summary</button>
                </div>
            </div>

            {/* Content grid */}
            <div className="grid">
                {/* Visits table */}
                <div className="table card">
                    <div className="table-head">
                        <h2>All Visits</h2>
                        <div className="hint muted">Showing {demoVisits.length} records</div>
                    </div>

                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Visit ID</th>
                                    <th>Date / Time</th>
                                    <th>Department • Reason</th>
                                    <th>Doctor</th>
                                    <th>Vitals</th>
                                    <th>Links</th>
                                    <th>Status</th>
                                    <th className="right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {demoVisits.map(v => (
                                    <tr key={v.id} data-status={v.status}>
                                        <td><code>{v.id}</code></td>
                                        <td>
                                            <div>{fmt.date(v.at)}</div>
                                            <div className="muted">{fmt.time(v.at)}</div>
                                        </td>
                                        <td>
                                            <div className="strong">{v.dept}</div>
                                            <div className="muted">{v.reason}</div>
                                        </td>
                                        <td>{v.doctor}</td>
                                        <td className="vitals">
                                            <span>BP {v.vitals.bp}</span>
                                            <span>Pulse {v.vitals.pulse}</span>
                                            <span>Temp {v.vitals.temp}</span>
                                            <span>SpO₂ {v.vitals.spo2}</span>
                                        </td>
                                        <td className="links">
                                            <NavLink to={`/appointments/${v.appointmentId}`} title="Appointment">Appt</NavLink>
                                            <NavLink to={`/prescriptions/${v.rxId}`} title="Prescription">Rx</NavLink>
                                            <NavLink to={`/labs/${v.labId}`} title="Lab">Lab</NavLink>
                                            <NavLink to={`/imaging/${v.imagingId}`} title="Imaging">Img</NavLink>
                                            <NavLink to={`/invoices/${v.invoiceId}`} title="Invoice">Inv</NavLink>
                                        </td>
                                        <td>
                                            <span className={`badge ${statusClass(v.status)}`}>{v.status}</span>
                                        </td>
                                        <td className="right actions">
                                            <NavLink to={`/patients/${patient.id}`} className="ghost">View</NavLink>
                                            <button className="ghost" onClick={onPrint}>Print</button>
                                            <button className="ghost danger" onClick={onDemoAction}>Cancel</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="table-footer">
                        <div className="muted">Deep links open across modules. List is static for demo.</div>
                        <div className="pager">
                            <button disabled title="Demo only">Prev</button>
                            <button disabled title="Demo only">Next</button>
                        </div>
                    </div>
                </div>

                {/* Right rail: activity & shortcuts */}
                <aside className="rail">
                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li>
                                <div className="dot" />
                                <div>
                                    <div className="t">Last visit</div>
                                    <div className="muted">{fmt.datetime(demoVisits[0].at)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="dot" />
                                <div>
                                    <div className="t">Record updated</div>
                                    <div className="muted">{fmt.datetime(patient.updatedAt)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="dot" />
                                <div>
                                    <div className="t">Patient created</div>
                                    <div className="muted">{fmt.datetime(patient.createdAt)}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="card shortcuts">
                        <h3>Shortcuts</h3>
                        <NavLink to={`/patients/${patient.id}`} className="s-link">Open Patient</NavLink>
                        <NavLink to="/appointments" className="s-link">Appointments</NavLink>
                        <NavLink to="/appointments/calendar" className="s-link">Calendar</NavLink>
                        <NavLink to="/prescriptions" className="s-link">Prescriptions</NavLink>
                        <NavLink to="/labs" className="s-link">Lab Orders</NavLink>
                        <NavLink to="/imaging" className="s-link">Imaging</NavLink>
                        <NavLink to="/reports" className="s-link">Reports</NavLink>
                        <NavLink to="/finance" className="s-link">Finance</NavLink>
                    </div>
                </aside>
            </div>

            <DemoModal open={modalOpen} onClose={closeModal} />
        </Styled.Wrap>
    );
};

export default PatientVisits;
