import React, { useMemo, useState } from "react";
import { NavLink, Link, useParams, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

const IST = "Asia/Kolkata";

// date & time formatters (IST + required string shapes)
const fmt = {
    date(d) {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: IST,
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric",
        }).formatToParts(new Date(d));
        const map = Object.fromEntries(parts.map(p => [p.type, p.value]));
        // Sat Oct 04 2025
        return `${map.weekday} ${map.month} ${map.day} ${map.year}`;
    },
    time(d) {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: IST,
            hourCycle: "h23",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }).formatToParts(new Date(d));
        const map = Object.fromEntries(parts.map(p => [p.type, p.value]));
        // 15:38:20hrs
        return `${map.hour}:${map.minute}:${map.second}hrs`;
    },
    dateTime(d) {
        // Sat Oct 04 2025 15:38:20hrs
        return `${fmt.date(d)} ${fmt.time(d)}`;
    }
};

// self-made confirm modal (non-blocking; no browser alert)
const ConfirmModal = ({ open, title, message, onConfirm, onClose }) => {
    if (!open) return null;
    return (
        <Styled.ModalOverlay role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <Styled.ModalCard>
                <header className="modalHeader">
                    <h4 id="confirm-title">{title}</h4>
                </header>
                <div className="modalBody">
                    <p>{message}</p>
                    <p className="muted small">This is a demo-only UI. No changes will be made.</p>
                </div>
                <footer className="modalActions">
                    <button className="btn ghost" onClick={onClose}>Close</button>
                    <button className="btn primary" onClick={() => { onConfirm?.(); onClose(); }}>Okay</button>
                </footer>
            </Styled.ModalCard>
        </Styled.ModalOverlay>
    );
};

export default function AppointmentDetailPage() {
    const { appointmentId = "APT-30241" } = useParams();
    const navigate = useNavigate();
    const [confirmOpen, setConfirmOpen] = useState(false);

    // Display-only seeded data (links point to existing routes)
    const data = useMemo(() => ({
        id: appointmentId,
        status: "Confirmed", // Requested | Confirmed | In-Progress | Completed | Cancelled
        type: "Consultation",
        priority: "Normal",
        department: "Internal Medicine",
        doctor: { id: "USR-2002", name: "Dr. Arvind Mehta", speciality: "Internal Medicine", phone: "+91 98xxxxxx12" },
        patient: { id: "PAT-1007", name: "Ritika Sharma", dob: "1992-07-18", age: "33", phone: "+91 98xxxxxx31", email: "ritika@example.com", code: "PT-1007" },
        slot: {
            date: "2025-10-04T15:30:00+05:30",
            start: "2025-10-04T15:30:00+05:30",
            end: "2025-10-04T16:00:00+05:30",
            room: "OPD-02"
        },
        meta: {
            createdAt: "2025-09-28T10:12:45+05:30",
            updatedAt: "2025-10-04T16:02:05+05:30",
            createdBy: { id: "USR-1001", name: "Frontdesk" },
            updatedBy: { id: "USR-1001", name: "Frontdesk" }
        },
        tags: ["first visit", "cash", "no-allergy"],
        vitals: [
            { k: "Height", v: "164 cm" },
            { k: "Weight", v: "58 kg" },
            { k: "Temp", v: "98.6 °F" },
            { k: "Pulse", v: "78 bpm" },
            { k: "SpO₂", v: "99%" },
            { k: "BP", v: "118/76 mmHg" }
        ],
        notes: [
            { label: "Chief complaint", text: "Intermittent headache and mild nausea since 3 days." },
            { label: "History", text: "No prior chronic conditions reported. No medication currently." },
            { label: "Assessment", text: "Likely tension-type headache; rule out dehydration." },
            { label: "Plan", text: "Hydration advice, OTC analgesic if required, follow-up if persists." }
        ],
        related: {
            prescriptions: [{ id: "RX-92831", date: "2025-10-04T16:05:00+05:30" }],
            labs: [{ id: "LAB-55620", date: "2025-10-04T16:10:00+05:30", title: "CBC" }],
            imaging: [],
            invoices: [{ id: "INV-2031", date: "2025-10-04T16:20:00+05:30", total: "₹600" }],
            receipts: [{ id: "RCT-6615", date: "2025-10-04T16:25:20+05:30", amount: "₹600" }]
        },
        timeline: [
            { at: "2025-09-28T10:12:45+05:30", label: "Created", by: "Frontdesk" },
            { at: "2025-10-04T15:00:00+05:30", label: "Reminder sent", by: "System" },
            { at: "2025-10-04T15:20:00+05:30", label: "Checked-in", by: "Frontdesk" },
            { at: "2025-10-04T15:30:00+05:30", label: "Roomed", by: "Nurse" },
            { at: "2025-10-04T16:00:00+05:30", label: "Consult completed", by: "Dr. A. Mehta" },
        ]
    }), [appointmentId]);

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        try {
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
        }
    };

    return (
        <Styled.Wrapper>
            {/* print rules for #search-print-area */}
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

            {/* Breadcrumbs + secondary quick nav */}
            <div className="breadcrumbs">
                <NavLink to="/home">Home</NavLink>
                <span className="sep">/</span>
                <NavLink to="/appointments">Appointments</NavLink>
                <span className="sep">/</span>
                <span className="muted">{data.id}</span>

                <div className="crumbActions">
                    <NavLink to="/appointments" className="btn ghost tiny">Back to list</NavLink>
                    <NavLink to="/appointments/calendar" className="btn ghost tiny">Calendar</NavLink>
                </div>
            </div>

            {/* Header */}
            <header className="pageHeader">
                <div className="titleBlock">
                    <h1 className="title">Appointment <span className="mono">{data.id}</span></h1>
                    <div className="meta">
                        <span className={`status pill status-${data.status.toLowerCase().replace(/\s+/g, '-')}`}>{data.status}</span>
                        <span className="pill">{data.type}</span>
                        <span className="pill">{data.priority}</span>
                        <span className="pill">{data.department}</span>
                        {data.tags.map(t => <span key={t} className="chip">{t}</span>)}
                    </div>
                    <div className="subMeta">
                        <span><strong>Created:</strong> {fmt.dateTime(data.meta.createdAt)}</span>
                        <span><strong>Updated:</strong> {fmt.dateTime(data.meta.updatedAt)}</span>
                        <span><strong>Slot:</strong> {fmt.date(data.slot.date)} · {fmt.time(data.slot.start)} – {fmt.time(data.slot.end)} · Room {data.slot.room}</span>
                    </div>
                </div>

                <div className="headerActions">
                    <button className="btn primary" onClick={printSection}>Print Summary</button>
                    <button className="btn" onClick={() => navigate(`/patients/${data.patient.id}`)}>Open Patient</button>
                    <button className="btn" onClick={() => navigate(`/admin/users/${data.doctor.id}`)}>Open Doctor</button>
                    <button className="btn" onClick={() => setConfirmOpen(true)}>Cancel Appointment</button>
                </div>
            </header>

            {/* Top section: Patient & Doctor */}
            <section className="gridTwo">
                <div className="card infoCard" id="search-print-area">
                    <h3>Patient</h3>
                    <div className="identity">
                        <div className="avatar" aria-hidden="true">RS</div>
                        <div className="idBlock">
                            <NavLink to={`/patients/${data.patient.id}`} className="linkTitle">{data.patient.name}</NavLink>
                            <div className="mono small">{data.patient.code}</div>
                        </div>
                    </div>
                    <div className="rows">
                        <div><span className="label">DOB</span><span>{fmt.date(data.patient.dob)}</span></div>
                        <div><span className="label">Age</span><span>{data.patient.age}</span></div>
                        <div><span className="label">Phone</span><span>{data.patient.phone}</span></div>
                        <div><span className="label">Email</span><span>{data.patient.email}</span></div>
                    </div>
                    <div className="links">
                        <NavLink to={`/patients/${data.patient.id}`} className="btn ghost tiny">View profile</NavLink>
                        <NavLink to={`/patients/${data.patient.id}/visits`} className="btn ghost tiny">Visits</NavLink>
                        <NavLink to="/prescriptions" className="btn ghost tiny">Prescriptions</NavLink>
                        <NavLink to="/labs" className="btn ghost tiny">Labs</NavLink>
                    </div>
                </div>

                <div className="card infoCard">
                    <h3>Doctor</h3>
                    <div className="identity">
                        <div className="avatar" aria-hidden="true">AM</div>
                        <div className="idBlock">
                            <NavLink to={`/admin/users/${data.doctor.id}`} className="linkTitle">{data.doctor.name}</NavLink>
                            <div className="mono small">{data.doctor.speciality}</div>
                        </div>
                    </div>
                    <div className="rows">
                        <div><span className="label">Dept</span><span>{data.department}</span></div>
                        <div><span className="label">Phone</span><span>{data.doctor.phone}</span></div>
                        <div><span className="label">Slot</span><span>{fmt.time(data.slot.start)} – {fmt.time(data.slot.end)}</span></div>
                        <div><span className="label">Room</span><span>{data.slot.room}</span></div>
                    </div>
                    <div className="links">
                        <NavLink to="/appointments/calendar" className="btn ghost tiny">View calendar</NavLink>
                        <NavLink to="/admin/users" className="btn ghost tiny">All users</NavLink>
                        <NavLink to="/settings/appearance" className="btn ghost tiny">Appearance</NavLink>
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <Styled.Tabs>
                <input type="radio" name="apptTabs" id="tab-summary" defaultChecked />
                <input type="radio" name="apptTabs" id="tab-vitals" />
                <input type="radio" name="apptTabs" id="tab-notes" />
                <input type="radio" name="apptTabs" id="tab-related" />
                <input type="radio" name="apptTabs" id="tab-activity" />
                <div className="tabBar">
                    <label htmlFor="tab-summary">Summary</label>
                    <label htmlFor="tab-vitals">Vitals</label>
                    <label htmlFor="tab-notes">Notes</label>
                    <label htmlFor="tab-related">Related</label>
                    <label htmlFor="tab-activity">Activity</label>
                    <div className="flexSpacer" />
                    <NavLink className="miniLink" to="/reports/customers">Reports</NavLink>
                    <NavLink className="miniLink" to="/notifications">Notifications</NavLink>
                </div>

                {/* Summary */}
                <div className="tabPane">
                    <div className="card">
                        <h3>Overview</h3>
                        <div className="gridTwo">
                            <div>
                                <dl className="dl">
                                    <div><dt>Status</dt><dd>{data.status}</dd></div>
                                    <div><dt>Type</dt><dd>{data.type}</dd></div>
                                    <div><dt>Priority</dt><dd>{data.priority}</dd></div>
                                    <div><dt>Department</dt><dd>{data.department}</dd></div>
                                </dl>
                            </div>
                            <div>
                                <dl className="dl">
                                    <div><dt>Created</dt><dd>{fmt.dateTime(data.meta.createdAt)} by {data.meta.createdBy.name}</dd></div>
                                    <div><dt>Updated</dt><dd>{fmt.dateTime(data.meta.updatedAt)} by {data.meta.updatedBy.name}</dd></div>
                                    <div><dt>Scheduled for</dt><dd>{fmt.date(data.slot.date)} at {fmt.time(data.slot.start)}</dd></div>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Quick Links</h3>
                        <div className="linkGrid">
                            <NavLink to={`/patients/${data.patient.id}`} className="linkTile">Patient • {data.patient.name}</NavLink>
                            <NavLink to={`/prescriptions/${data.related.prescriptions[0].id}`} className="linkTile">Prescription • {data.related.prescriptions[0].id}</NavLink>
                            <NavLink to={`/labs/${data.related.labs[0].id}`} className="linkTile">Lab • {data.related.labs[0].title}</NavLink>
                            <NavLink to={`/invoices/${data.related.invoices[0].id}`} className="linkTile">Invoice • {data.related.invoices[0].id}</NavLink>
                            <NavLink to="/receipts" className="linkTile">Receipts</NavLink>
                            <NavLink to="/reports/inventory" className="linkTile">Inventory Report</NavLink>
                            <NavLink to="/finance/ledgers" className="linkTile">Ledgers</NavLink>
                            <NavLink to="/tools/import-export" className="linkTile">Import / Export</NavLink>
                        </div>
                    </div>
                </div>

                {/* Vitals */}
                <div className="tabPane">
                    <div className="card">
                        <h3>Vitals (read-only)</h3>
                        <div className="vitalsGrid">
                            {data.vitals.map(v => (
                                <div className="vital" key={v.k}>
                                    <div className="vk">{v.k}</div>
                                    <div className="vv">{v.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Notes */}
                <div className="tabPane">
                    <div className="card">
                        <h3>Clinical Notes</h3>
                        <div className="notes">
                            {data.notes.map((n, i) => (
                                <div className="noteRow" key={i}>
                                    <div className="noteLabel">{n.label}</div>
                                    <div className="noteText">{n.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related */}
                <div className="tabPane">
                    <div className="card">
                        <h3>Related Records</h3>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.related.prescriptions.map(rx => (
                                        <tr key={rx.id}>
                                            <td>Prescription</td>
                                            <td className="mono">{rx.id}</td>
                                            <td>{fmt.dateTime(rx.date)}</td>
                                            <td><NavLink to={`/prescriptions/${rx.id}`} className="btn tiny">Open</NavLink></td>
                                        </tr>
                                    ))}
                                    {data.related.labs.map(l => (
                                        <tr key={l.id}>
                                            <td>Lab</td>
                                            <td className="mono">{l.id}</td>
                                            <td>{fmt.dateTime(l.date)}</td>
                                            <td><NavLink to={`/labs/${l.id}`} className="btn tiny">Open</NavLink></td>
                                        </tr>
                                    ))}
                                    {data.related.imaging.length === 0 && (
                                        <tr>
                                            <td>Imaging</td>
                                            <td colSpan={3} className="muted">No imaging ordered</td>
                                        </tr>
                                    )}
                                    {data.related.invoices.map(inv => (
                                        <tr key={inv.id}>
                                            <td>Invoice</td>
                                            <td className="mono">{inv.id}</td>
                                            <td>{fmt.dateTime(data.meta.updatedAt)}</td>
                                            <td><NavLink to={`/invoices/${inv.id}`} className="btn tiny">Open</NavLink></td>
                                        </tr>
                                    ))}
                                    {data.related.receipts.map(rc => (
                                        <tr key={rc.id}>
                                            <td>Receipt</td>
                                            <td className="mono">{rc.id}</td>
                                            <td>{fmt.dateTime(rc.date)}</td>
                                            <td><NavLink to={`/receipts`} className="btn tiny">Open</NavLink></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="linkRow">
                            <NavLink to="/labs/catalog">Lab Catalog</NavLink>
                            <span className="dot">•</span>
                            <NavLink to={`/patients/${data.patient.id}/visits`}>All Visits</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/reports/sales">Sales Report</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/finance/taxes">Taxes</NavLink>
                        </div>
                    </div>
                </div>

                {/* Activity */}
                <div className="tabPane">
                    <div className="card">
                        <h3>Timeline</h3>
                        <ol className="timeline">
                            {data.timeline.map((t, i) => (
                                <li key={i}>
                                    <div className="tlDot" />
                                    <div className="tlBody">
                                        <div className="tlRow">
                                            <span className="tlLabel">{t.label}</span>
                                            <span className="tlWhen">{fmt.dateTime(t.at)}</span>
                                        </div>
                                        <div className="muted small">by {t.by}</div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </Styled.Tabs>

            {/* Sticky footer actions */}
            <Styled.StickyBar>
                <div className="left">
                    <span className="muted">ID</span> <span className="mono">{data.id}</span>
                    <span className="sep">•</span>
                    <span>{fmt.date(data.slot.date)} · {fmt.time(data.slot.start)} – {fmt.time(data.slot.end)}</span>
                </div>
                <div className="right">
                    <button className="btn" onClick={() => navigate(`/patients/${data.patient.id}`)}>Open Patient</button>
                    <button className="btn" onClick={() => navigate(`/prescriptions/${data.related.prescriptions[0].id}`)}>Prescription</button>
                    <button className="btn" onClick={printSection}>Print</button>
                    <button className="btn" onClick={() => setConfirmOpen(true)}>Cancel</button>
                </div>
            </Styled.StickyBar>

            <ConfirmModal
                open={confirmOpen}
                title="Action disabled in demo"
                message="This is a display-only theme. Cancellation and edits are disabled."
                onClose={() => setConfirmOpen(false)}
            />
        </Styled.Wrapper>
    );
}
