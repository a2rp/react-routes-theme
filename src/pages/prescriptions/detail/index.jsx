import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./styled";

/** --- tiny date utils (required formats) --- */
const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmtDate(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    const dd = d.getDate().toString().padStart(2, "0");
    return `${DAY[d.getDay()]} ${MON[d.getMonth()]} ${dd} ${d.getFullYear()}`;
}
function fmtTime(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    const hh = d.getHours().toString().padStart(2, "0");
    const mm = d.getMinutes().toString().padStart(2, "0");
    const ss = d.getSeconds().toString().padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
}
function fmtDateTime(iso) {
    return `${fmtDate(iso)} ${fmtTime(iso)}`;
}

/** Demo: mock display-only data (pre-computed; no calculations) */
function useDemoRx() {
    const { rxId } = useParams();
    // In demo, we just map a couple of IDs to show deep links working nicely.
    const demoId = rxId || "RX-24017";
    const nowISO = "2025-10-04T15:38:20+05:30";

    return useMemo(() => ({
        id: demoId,
        code: demoId,
        status: "Issued",
        issuedAt: nowISO,
        validTill: "2025-12-15T10:00:00+05:30",
        note: "Take medicines with water. Avoid driving if feeling drowsy.",
        patient: {
            id: "PAT-1001",
            name: "Aditi Singh",
            age: 32,
            sex: "F",
            phone: "+91 90000 12345",
            email: "aditi@example.com",
            bloodGroup: "O+",
            allergies: ["Penicillin"],
            tags: ["Regular", "Insurance-Apollo"],
            addr: {
                line1: "D-32, Green Meadows",
                line2: "Baner",
                city: "Pune",
                state: "MH",
                zip: "411045",
                country: "IN"
            },
            lastVisit: "2025-09-29T11:15:22+05:30"
        },
        prescriber: {
            id: "DOC-301",
            name: "Dr. R. Malhotra",
            specialization: "Internal Medicine",
            regNo: "MCI/IM/99823",
            org: "City Health Clinic",
            contact: "+91 20 5555 1212",
            email: "dr.malhotra@cityhealth.example"
        },
        meds: [
            {
                id: "MED-AMOX-500",
                name: "Amoxicillin",
                brand: "Amoxicap 500",
                strength: "500 mg",
                form: "Capsule",
                route: "Oral",
                freq: "TID",
                duration: "5 days",
                qty: 15,
                directions: "After meals",
                notes: "Avoid if rash occurs"
            },
            {
                id: "MED-PCM-650",
                name: "Paracetamol",
                brand: "PCM 650",
                strength: "650 mg",
                form: "Tablet",
                route: "Oral",
                freq: "SOS",
                duration: "As required",
                qty: 10,
                directions: "Max 3/day",
                notes: "If fever >101°F, consult"
            },
            {
                id: "MED-RAN-150",
                name: "Ranitidine",
                brand: "Rantac 150",
                strength: "150 mg",
                form: "Tablet",
                route: "Oral",
                freq: "HS",
                duration: "5 days",
                qty: 5,
                directions: "Bedtime",
                notes: "Helps acidity"
            }
        ],
        attachments: [
            { id: "ATT-001", name: "Vitals Snapshot.png", size: "182 KB" },
            { id: "ATT-002", name: "Old Prescription (2024).pdf", size: "256 KB" },
            { id: "ATT-003", name: "Insurance Card.jpg", size: "98 KB" }
        ],
        audit: [
            { id: "LG-1", type: "create", who: "dr.malhotra", at: nowISO, text: "Prescription issued" },
            { id: "LG-2", type: "print", who: "frontdesk", at: "2025-10-04T16:05:01+05:30", text: "Hard copy printed" },
            { id: "LG-3", type: "share", who: "noreply@erp", at: "2025-10-04T16:07:13+05:30", text: "E-prescription emailed to patient" }
        ],
        meta: {
            createdBy: "dr.malhotra",
            createdAt: nowISO,
            updatedAt: "2025-10-04T16:09:31+05:30",
            source: "OPD"
        }
    }), [rxId]);
}

/** Demo info modal (no browser alerts) */
function DemoModal({ open, onClose, title = "Demo Mode", message }) {
    if (!open) return null;
    return (
        <S.ModalBackdrop role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
            <S.ModalCard className="card">
                <h3 id="demo-modal-title">{title}</h3>
                <p>{message || "Changes are disabled in this demo."}</p>
                <div className="actions">
                    <button onClick={onClose} autoFocus>Close</button>
                </div>
            </S.ModalCard>
        </S.ModalBackdrop>
    );
}

export default function PrescriptionDetail() {
    const nav = useNavigate();
    const rx = useDemoRx();
    const [modal, setModal] = useState({ open: false, message: "" });
    const [copied, setCopied] = useState(false);

    const openDemo = (msg) => setModal({ open: true, message: msg });
    const closeDemo = () => setModal({ open: false, message: "" });

    const onCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    const printSection = () => {
        const cls = "print-section-mode";
        document.body.classList.add(cls);
        window.onafterprint = () => document.body.classList.remove(cls);
        window.print();
    };

    const sectionLinks = [
        { id: "summary", label: "Summary" },
        { id: "meds", label: "Medications" },
        { id: "directions", label: "Directions" },
        { id: "patient", label: "Patient" },
        { id: "prescriber", label: "Prescriber" },
        { id: "attachments", label: "Attachments" },
        { id: "activity", label: "Activity" }
    ];

    return (
        <S.Page>
            {/* print-only CSS for target area */}
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

            {/* Breadcrumbs / top-bar */}
            <S.TopBar>
                <div className="left">
                    <nav className="crumbs" aria-label="breadcrumbs">
                        <Link to="/home">Home</Link>
                        <span>/</span>
                        <Link to="/prescriptions">Prescriptions</Link>
                        <span>/</span>
                        <span className="current">{rx.code}</span>
                    </nav>
                    <h1>Prescription {rx.code}</h1>
                    <div className="meta">
                        <span>Status: <b>{rx.status}</b></span>
                        <span>Issued: <b>{fmtDateTime(rx.issuedAt)}</b></span>
                        <span>Valid till: <b>{fmtDateTime(rx.validTill)}</b></span>
                    </div>
                </div>

                <div className="actions">
                    <button onClick={() => nav("/prescriptions")} title="Go back to list">Back to List</button>
                    <button onClick={printSection} title="Print this prescription">Print</button>
                    <button onClick={onCopyLink} title="Copy deep link">Copy Link</button>
                    <button onClick={() => openDemo("Editing is disabled in demo.")} title="Edit (demo)">Edit</button>
                    <button onClick={() => openDemo("Delete is disabled in demo.")} title="Delete (demo)">Delete</button>
                </div>
            </S.TopBar>

            {/* quick anchors */}
            <S.SectionNav role="navigation" aria-label="Section navigation">
                {sectionLinks.map(s => (
                    <a key={s.id} href={`#${s.id}`}>{s.label}</a>
                ))}
            </S.SectionNav>

            {/* PRINT SCOPE */}
            <div id="search-print-area">
                {/* Summary */}
                <S.Summary id="summary" className="card">
                    <header>
                        <h2>Summary</h2>
                        <div className="tags">
                            <span className="tag">OPD</span>
                            <span className="tag">E-Prescription</span>
                        </div>
                    </header>

                    <div className="grid">
                        <S.Block>
                            <h4>Patient</h4>
                            <p className="title">
                                <Link to={`/patients/${rx.patient.id}`}>{rx.patient.name}</Link>
                                <span className="muted"> — {rx.patient.sex}, {rx.patient.age}</span>
                            </p>
                            <p>{rx.patient.phone} · {rx.patient.email}</p>
                            <p className="muted">
                                Last visit: {fmtDateTime(rx.patient.lastVisit)}
                            </p>
                            <div className="chips">
                                {rx.patient.tags.map(t => <span key={t} className="chip">{t}</span>)}
                            </div>
                            <div className="addr">
                                <p>{rx.patient.addr.line1}</p>
                                <p>{rx.patient.addr.line2}</p>
                                <p>{rx.patient.city}, {rx.patient.state} {rx.patient.zip}</p>
                                <p>{rx.patient.country}</p>
                            </div>
                            <div className="links">
                                <Link to={`/patients/${rx.patient.id}`}>Open Patient</Link>
                                <Link to={`/appointments?patient=${rx.patient.id}`}>Appointments</Link>
                                <Link to={`/labs?patient=${rx.patient.id}`}>Labs</Link>
                                <Link to={`/imaging?patient=${rx.patient.id}`}>Imaging</Link>
                                <Link to={`/sales/payments?customer=${rx.patient.id}`}>Payments</Link>
                            </div>
                        </S.Block>

                        <S.Block>
                            <h4>Prescriber</h4>
                            <p className="title">
                                <Link to={`/admin/users/${rx.prescriber.id}`}>{rx.prescriber.name}</Link>
                            </p>
                            <p>{rx.prescriber.specialization}</p>
                            <p className="muted">Reg: {rx.prescriber.regNo}</p>
                            <p>{rx.prescriber.org}</p>
                            <p>{rx.prescriber.contact} · {rx.prescriber.email}</p>
                            <div className="links">
                                <Link to={`/admin/users/${rx.prescriber.id}`}>Open Doctor</Link>
                                <Link to={`/settings/print-templates`}>Print Templates</Link>
                                <Link to={`/settings/appearance`}>Appearance</Link>
                            </div>
                        </S.Block>

                        <S.Block>
                            <h4>Meta</h4>
                            <p>Created by: <span className="muted">{rx.meta.createdBy}</span></p>
                            <p>Created: <b>{fmtDateTime(rx.meta.createdAt)}</b></p>
                            <p>Updated: <b>{fmtDateTime(rx.meta.updatedAt)}</b></p>
                            <p>Source: <b>{rx.meta.source}</b></p>
                            <p className="note">{rx.note}</p>
                            <div className="links">
                                <Link to={`/reports/customers`}>Customer Report</Link>
                                <Link to={`/reports/gst`}>GST</Link>
                                <Link to={`/tools/import-export`}>Export</Link>
                            </div>
                        </S.Block>
                    </div>
                </S.Summary>

                {/* Medications */}
                <S.Meds id="meds" className="card">
                    <header>
                        <h2>Medications</h2>
                        <div className="right">
                            <button onClick={() => openDemo("Add item is disabled in demo.")} title="Add item (demo)">Add Item</button>
                        </div>
                    </header>

                    <div className="tblWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Medicine</th>
                                    <th>Strength</th>
                                    <th>Form</th>
                                    <th>Route</th>
                                    <th>Frequency</th>
                                    <th>Duration</th>
                                    <th>Qty</th>
                                    <th>Directions</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rx.meds.map(m => (
                                    <tr key={m.id}>
                                        <td>
                                            <Link to={`/medicines/${m.id}`} title="Open product">{m.brand}</Link>
                                            <div className="sub">{m.name}</div>
                                        </td>
                                        <td>{m.strength}</td>
                                        <td>{m.form}</td>
                                        <td>{m.route}</td>
                                        <td>{m.freq}</td>
                                        <td>{m.duration}</td>
                                        <td className="num">{m.qty}</td>
                                        <td>{m.directions}</td>
                                        <td>{m.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="linksRow">
                        <Link to={`/products`} title="Browse products">Browse Products</Link>
                        <Link to={`/inventory`} title="Inventory overview">Inventory</Link>
                        <Link to={`/purchase-orders`} title="Create PO">Purchase Orders</Link>
                        <Link to={`/shipments`} title="Shipments">Shipments</Link>
                    </div>
                </S.Meds>

                {/* Directions / Patient instructions */}
                <S.Directions id="directions" className="card">
                    <header><h2>Directions</h2></header>
                    <ul className="bullets">
                        <li>Continue hydration; minimum 8 glasses of water daily.</li>
                        <li>Avoid spicy/oily food for 5 days.</li>
                        <li>If rash/breathlessness occurs, stop medicines and seek care.</li>
                        <li>Re-check if fever persists beyond 72 hours.</li>
                    </ul>
                    <div className="linksRow">
                        <Link to={`/help`} title="Help center">Help Center</Link>
                        <Link to={`/contact`} title="Contact">Contact</Link>
                        <Link to={`/feedback`} title="Feedback">Feedback</Link>
                    </div>
                </S.Directions>

                {/* Patient */}
                <S.Panel id="patient" className="card">
                    <header><h2>Patient</h2></header>
                    <div className="row">
                        <div>
                            <div className="label">Allergies</div>
                            <div className="chips">
                                {rx.patient.allergies.map(a => <span className="chip" key={a}>{a}</span>)}
                            </div>
                        </div>
                        <div>
                            <div className="label">Identifiers</div>
                            <div className="mono">{rx.patient.id}</div>
                        </div>
                        <div>
                            <div className="label">Blood Group</div>
                            <div className="mono">{rx.patient.bloodGroup}</div>
                        </div>
                    </div>
                    <div className="linksRow">
                        <Link to={`/patients/${rx.patient.id}`}>Patient Detail</Link>
                        <Link to={`/patients/${rx.patient.id}/visits`}>Visits</Link>
                        <Link to={`/appointments?patient=${rx.patient.id}`}>Appointments</Link>
                        <Link to={`/sales/payments?customer=${rx.patient.id}`}>Payments</Link>
                    </div>
                </S.Panel>

                {/* Prescriber */}
                <S.Panel id="prescriber" className="card">
                    <header><h2>Prescriber</h2></header>
                    <div className="row">
                        <div>
                            <div className="label">Doctor</div>
                            <div className="mono">{rx.prescriber.name}</div>
                        </div>
                        <div>
                            <div className="label">Specialization</div>
                            <div className="mono">{rx.prescriber.specialization}</div>
                        </div>
                        <div>
                            <div className="label">Registration</div>
                            <div className="mono">{rx.prescriber.regNo}</div>
                        </div>
                    </div>
                    <div className="linksRow">
                        <Link to={`/admin/users/${rx.prescriber.id}`}>User Profile</Link>
                        <Link to={`/admin/activity`}>Activity</Link>
                        <Link to={`/admin/audit-log`}>Audit Log</Link>
                    </div>
                </S.Panel>

                {/* Attachments */}
                <S.Attachments id="attachments" className="card">
                    <header><h2>Attachments</h2></header>
                    <div className="grid">
                        {rx.attachments.map(a => (
                            <div key={a.id} className="file card">
                                <div className="name">{a.name}</div>
                                <div className="muted">{a.size}</div>
                                <div className="btns">
                                    <button onClick={() => openDemo("Preview is disabled in demo.")} title="Preview (demo)">Preview</button>
                                    <Link to={`/prescriptions/${rx.id}/attachments/${a.id}`} title="Open file">Open</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="linksRow">
                        <Link to={`/tools/import-export`}>Export</Link>
                        <Link to={`/settings/backups`}>Backups</Link>
                    </div>
                </S.Attachments>

                {/* Audit / Activity */}
                <S.Activity id="activity" className="card">
                    <header><h2>Activity</h2></header>
                    <ul className="timeline">
                        {rx.audit.map(l => (
                            <li key={l.id}>
                                <div className={`dot ${l.type}`} />
                                <div className="body">
                                    <div className="when">{fmtDateTime(l.at)}</div>
                                    <div className="what">{l.text}</div>
                                    <div className="who">by <span className="mono">{l.who}</span></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="linksRow">
                        <Link to={`/reports/sales`}>Sales Report</Link>
                        <Link to={`/reports/inventory`}>Inventory Report</Link>
                        <Link to={`/reports/finance`}>Finance Report</Link>
                    </div>
                </S.Activity>
            </div>

            {/* toast for copy */}
            {copied && <S.Toast role="status">Link copied</S.Toast>}

            {/* demo modal */}
            <DemoModal open={modal.open} onClose={closeDemo} message={modal.message} />
        </S.Page>
    );
}
