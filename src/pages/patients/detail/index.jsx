import React, { useMemo, useState, useCallback } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import * as S from './styled';

/** Date utilities — required formats:
 *  Date:        Sat Oct 04 2025
 *  Date+Time:   Sat Oct 04 2025 15:38:20hrs
 *  Time only:   15:38:20hrs
 */
const fmtDate = (iso) => new Date(iso).toDateString();
const fmtTime = (iso) =>
    new Date(iso).toLocaleTimeString('en-GB', { hour12: false }) + 'hrs';
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

const DEMO_MODE = true;

const ConfirmModal = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <S.ModalOverlay role="dialog" aria-modal="true" aria-labelledby="cm-title">
            <S.ModalCard>
                <h3 id="cm-title">{title}</h3>
                <p className="muted">{message}</p>
                <div className="actions">
                    <button onClick={onClose}>Close</button>
                    <button disabled title="Disabled in demo" aria-disabled>
                        Proceed
                    </button>
                </div>
            </S.ModalCard>
        </S.ModalOverlay>
    );
};

const PatientDetail = () => {
    const { patientId } = useParams();
    const navigate = useNavigate();
    const [showConfirm, setShowConfirm] = useState(false);
    const [copied, setCopied] = useState(false);

    // demo dataset (display-only)
    const patient = useMemo(
        () => ({
            id: patientId || 'PAT-1001',
            code: 'PAT-1001',
            name: 'Aarav Mehta',
            gender: 'Male',
            age: 34,
            bloodGroup: 'B+',
            photo:
                'https://ui-avatars.com/api/?name=Aarav+Mehta&size=128&background=111318&color=f3f4f6',
            phone: '+91 98765 43210',
            email: 'aarav.mehta@example.com',
            tags: ['Premium', 'Insurance', 'Chronic'],
            createdAt: '2025-01-19T09:05:14+05:30',
            updatedAt: '2025-10-04T15:38:20+05:30',
            lastVisitAt: '2025-09-28T11:30:00+05:30',
            nextAppointmentAt: '2025-10-06T10:00:00+05:30',
            address: {
                line1: 'D-42, Orchid Residency',
                line2: 'Baner, Pune',
                city: 'Pune',
                state: 'MH',
                zip: '411045',
                country: 'IN',
            },
            emergencyContact: {
                name: 'Rhea Mehta',
                relation: 'Spouse',
                phone: '+91 99876 54321',
            },
            insurance: {
                provider: 'Horizon HealthCare',
                policyNo: 'HHC-IND-993415',
                validTill: '2026-03-31T00:00:00+05:30',
                tpa: 'MedAssist',
            },
            balance: 1280.0,
            allergies: ['Penicillin'],
            conditions: ['Type 2 Diabetes'],
            preferredPharmacy: 'CityCare Pharmacy, Baner',
            // shallow related (for links)
            counts: {
                visits: 7,
                prescriptions: 5,
                labs: 3,
                imaging: 2,
                invoices: 4,
            },
            visits: [
                {
                    id: 'VIS-24017',
                    date: '2025-09-28T11:30:00+05:30',
                    clinician: 'Dr. K. Narayan',
                    department: 'General Medicine',
                    notes: 'Routine follow-up',
                },
                {
                    id: 'VIS-24012',
                    date: '2025-08-18T12:00:00+05:30',
                    clinician: 'Dr. K. Narayan',
                    department: 'General Medicine',
                    notes: 'Dose adjust for Metformin',
                },
            ],
            prescriptions: [
                { id: 'RX-3121', date: '2025-09-28T12:05:00+05:30', items: 3 },
                { id: 'RX-2950', date: '2025-08-18T12:20:00+05:30', items: 2 },
            ],
            labs: [
                { id: 'LAB-7781', date: '2025-09-29T09:00:00+05:30', panel: 'HbA1c' },
                { id: 'LAB-7602', date: '2025-08-20T10:30:00+05:30', panel: 'Lipid' },
            ],
            imaging: [
                { id: 'IMG-515', date: '2025-05-03T15:30:00+05:30', type: 'X-Ray Chest' },
            ],
            invoices: [
                { id: 'INV-2047', date: '2025-09-29T12:45:00+05:30', amount: 980.0, status: 'Paid' },
                { id: 'INV-1999', date: '2025-08-20T13:10:00+05:30', amount: 300.0, status: 'Unpaid' },
            ],
            activity: [
                { id: 'A1', when: '2025-10-04T15:38:20+05:30', text: 'Profile updated by front desk' },
                { id: 'A0', when: '2025-09-29T12:48:00+05:30', text: 'Invoice INV-2047 paid via UPI' },
            ],
            attachments: [
                { id: 'DOC-1001', name: 'Insurance Card.pdf', size: '256KB', uploadedAt: '2025-02-11T14:20:00+05:30' },
                { id: 'IMG-2001', name: 'Xray-Result.jpg', size: '1.2MB', uploadedAt: '2025-05-03T16:10:00+05:30' },
            ],
        }),
        [patientId]
    );

    const onCopyLink = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch {
            // ignore (display-only)
        }
    }, []);

    const onPrint = useCallback(() => {
        document.body.classList.add('print-section-mode');
        window.print();
        setTimeout(() => document.body.classList.remove('print-section-mode'), 0);
    }, []);

    return (
        <S.Wrapper>
            {/* Print styles for section */}
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

            <S.Breadcrumbs>
                <NavLink to="/patients">Patients</NavLink>
                <span>/</span>
                <span>{patient.name}</span>
                <div className="spacer" />
                <NavLink to="/appointments/calendar" title="Calendar">Calendar</NavLink>
                <NavLink to="/reports/customers" title="Patient Reports">Reports</NavLink>
            </S.Breadcrumbs>

            <S.Header id="search-print-area">
                <div className="left">
                    <img className="avatar" src={patient.photo} alt={patient.name} />
                    <div className="meta">
                        <h1>{patient.name}</h1>
                        <div className="row">
                            <span className="code">{patient.code}</span>
                            <span className="dot">•</span>
                            <span>{patient.gender}</span>
                            <span className="dot">•</span>
                            <span>{patient.age} yrs</span>
                            <span className="dot">•</span>
                            <span>Blood {patient.bloodGroup}</span>
                        </div>
                        <div className="tags">
                            {patient.tags.map((t) => (
                                <S.Badge key={t}>{t}</S.Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <S.Toolbar>
                    <button onClick={() => navigate('/patients')} title="Back to list">Back</button>
                    <button onClick={onCopyLink} title="Copy deep link">Copy Link</button>
                    <button onClick={onPrint} title="Print summary">Print</button>
                    <button
                        disabled={DEMO_MODE}
                        aria-disabled
                        title="Disabled in demo"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => setShowConfirm(true)}
                        title="Delete patient"
                        className="danger"
                    >
                        Delete
                    </button>
                    <NavLink to="/appointments" className="ghost" title="All appointments">
                        Appointments
                    </NavLink>
                    <NavLink to="/prescriptions" className="ghost" title="All prescriptions">
                        Prescriptions
                    </NavLink>
                    <NavLink to="/labs" className="ghost" title="All labs">
                        Labs
                    </NavLink>
                    <NavLink to="/imaging" className="ghost" title="All imaging">
                        Imaging
                    </NavLink>
                    {copied && <span className="hint">Link copied</span>}
                </S.Toolbar>

                <S.KPIGrid>
                    <S.KPI>
                        <div className="label">Last Visit</div>
                        <div className="value">{fmtDateTime(patient.lastVisitAt)}</div>
                    </S.KPI>
                    <S.KPI>
                        <div className="label">Next Appointment</div>
                        <div className="value">{fmtDateTime(patient.nextAppointmentAt)}</div>
                    </S.KPI>
                    <S.KPI>
                        <div className="label">Open Balance</div>
                        <div className="value">₹ {patient.balance.toFixed(2)}</div>
                    </S.KPI>
                    <S.KPI>
                        <div className="label">Created</div>
                        <div className="value">{fmtDateTime(patient.createdAt)}</div>
                    </S.KPI>
                    <S.KPI>
                        <div className="label">Updated</div>
                        <div className="value">{fmtDateTime(patient.updatedAt)}</div>
                    </S.KPI>
                    <S.KPI>
                        <div className="label">Relations</div>
                        <div className="value">
                            {patient.counts.visits} visits • {patient.counts.prescriptions} rx • {patient.counts.labs} labs
                        </div>
                    </S.KPI>
                </S.KPIGrid>
            </S.Header>

            <S.Grid>
                <S.LeftCol>
                    <S.Section>
                        <h3>Contact</h3>
                        <div className="list">
                            <div><span>Email</span><a href={`mailto:${patient.email}`}>{patient.email}</a></div>
                            <div><span>Phone</span><a href={`tel:${patient.phone}`}>{patient.phone}</a></div>
                            <div><span>Preferred Pharmacy</span><span>{patient.preferredPharmacy}</span></div>
                        </div>
                    </S.Section>

                    <S.Section>
                        <h3>Address</h3>
                        <address className="addr">
                            {patient.address.line1}<br />
                            {patient.address.line2}<br />
                            {patient.address.city} - {patient.address.zip}, {patient.address.state}, {patient.address.country}
                        </address>
                        <div className="inline-links">
                            <a href={`https://maps.google.com/?q=${encodeURIComponent(
                                `${patient.address.line1}, ${patient.address.line2}, ${patient.address.city} ${patient.address.zip}`
                            )}`} target="_blank" rel="noreferrer">Open Map</a>
                        </div>
                    </S.Section>

                    <S.Section>
                        <h3>Emergency</h3>
                        <div className="list">
                            <div><span>Name</span><span>{patient.emergencyContact.name}</span></div>
                            <div><span>Relation</span><span>{patient.emergencyContact.relation}</span></div>
                            <div><span>Phone</span><a href={`tel:${patient.emergencyContact.phone}`}>{patient.emergencyContact.phone}</a></div>
                        </div>
                    </S.Section>

                    <S.Section>
                        <h3>Insurance</h3>
                        <div className="list">
                            <div><span>Provider</span><span>{patient.insurance.provider}</span></div>
                            <div><span>Policy #</span><span>{patient.insurance.policyNo}</span></div>
                            <div><span>TPA</span><span>{patient.insurance.tpa}</span></div>
                            <div><span>Valid Till</span><span>{fmtDate(patient.insurance.validTill)}</span></div>
                        </div>
                    </S.Section>

                    <S.Section>
                        <h3>Clinical</h3>
                        <div className="list">
                            <div><span>Allergies</span><span>{patient.allergies.join(', ')}</span></div>
                            <div><span>Conditions</span><span>{patient.conditions.join(', ')}</span></div>
                            <div><span>Blood Group</span><span>{patient.bloodGroup}</span></div>
                        </div>
                    </S.Section>
                </S.LeftCol>

                <S.RightCol>
                    <S.Tabs>
                        <input type="radio" id="tab-overview" name="ptabs" defaultChecked />
                        <label htmlFor="tab-overview">Overview</label>

                        <input type="radio" id="tab-visits" name="ptabs" />
                        <label htmlFor="tab-visits">Visits</label>

                        <input type="radio" id="tab-presc" name="ptabs" />
                        <label htmlFor="tab-presc">Prescriptions</label>

                        <input type="radio" id="tab-labs" name="ptabs" />
                        <label htmlFor="tab-labs">Labs</label>

                        <input type="radio" id="tab-imaging" name="ptabs" />
                        <label htmlFor="tab-imaging">Imaging</label>

                        <input type="radio" id="tab-bill" name="ptabs" />
                        <label htmlFor="tab-bill">Billing</label>

                        <input type="radio" id="tab-activity" name="ptabs" />
                        <label htmlFor="tab-activity">Activity</label>

                        <input type="radio" id="tab-files" name="ptabs" />
                        <label htmlFor="tab-files">Attachments</label>

                        {/* OVERVIEW */}
                        <section className="panel" data-for="tab-overview">
                            <S.SubGrid>
                                <S.Card>
                                    <h4>Quick Links</h4>
                                    <div className="links">
                                        <NavLink to={`/patients/${patient.id}/visits`} title="All visits">All Visits</NavLink>
                                        <NavLink to="/appointments" title="Appointments list">Appointments</NavLink>
                                        <NavLink to="/appointments/calendar" title="Calendar">Calendar</NavLink>
                                        <NavLink to="/prescriptions" title="All prescriptions">Prescriptions</NavLink>
                                        <NavLink to="/labs/catalog" title="Lab catalog">Lab Catalog</NavLink>
                                        <NavLink to="/imaging" title="Imaging list">Imaging</NavLink>
                                        <NavLink to="/reports/customers" title="Patient reports">Reports</NavLink>
                                        <NavLink to="/invoices" title="Invoices">Invoices</NavLink>
                                        <NavLink to="/receipts" title="Receipts">Receipts</NavLink>
                                    </div>
                                </S.Card>

                                <S.Card>
                                    <h4>Recent Visits</h4>
                                    <S.TableWrap>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Visit ID</th>
                                                    <th>Date</th>
                                                    <th>Clinician</th>
                                                    <th>Department</th>
                                                    <th>Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {patient.visits.map(v => (
                                                    <tr key={v.id}>
                                                        <td>
                                                            <NavLink to={`/patients/${patient.id}/visits`} title="Open visits">
                                                                {v.id}
                                                            </NavLink>
                                                        </td>
                                                        <td>{fmtDateTime(v.date)}</td>
                                                        <td>{v.clinician}</td>
                                                        <td>{v.department}</td>
                                                        <td className="muted">{v.notes}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </S.TableWrap>
                                </S.Card>

                                <S.Card>
                                    <h4>Recent Prescriptions</h4>
                                    <S.TableWrap>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Rx ID</th>
                                                    <th>Date</th>
                                                    <th>Items</th>
                                                    <th>Open</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {patient.prescriptions.map(rx => (
                                                    <tr key={rx.id}>
                                                        <td>{rx.id}</td>
                                                        <td>{fmtDateTime(rx.date)}</td>
                                                        <td>{rx.items}</td>
                                                        <td>
                                                            <NavLink to={`/prescriptions/${rx.id}`} title="Open prescription">View</NavLink>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </S.TableWrap>
                                </S.Card>
                            </S.SubGrid>
                        </section>

                        {/* VISITS */}
                        <section className="panel" data-for="tab-visits">
                            <S.Card>
                                <div className="panel-head">
                                    <h4>All Visits ({patient.counts.visits})</h4>
                                    <NavLink to={`/patients/${patient.id}/visits`} className="btn-link">Open Visits</NavLink>
                                </div>
                                <S.TableWrap>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Visit ID</th>
                                                <th>Date &amp; Time</th>
                                                <th>Clinician</th>
                                                <th>Department</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patient.visits.map(v => (
                                                <tr key={v.id}>
                                                    <td>{v.id}</td>
                                                    <td>{fmtDateTime(v.date)}</td>
                                                    <td>{v.clinician}</td>
                                                    <td>{v.department}</td>
                                                    <td>
                                                        <NavLink to={`/print/sticker/${v.id}`} title="Print sticker">Sticker</NavLink>
                                                        {' '}•{' '}
                                                        <NavLink to={`/print/quote/${v.id}`} title="Print sheet">Print</NavLink>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </S.TableWrap>
                            </S.Card>
                        </section>

                        {/* PRESCRIPTIONS */}
                        <section className="panel" data-for="tab-presc">
                            <S.Card>
                                <div className="panel-head">
                                    <h4>Prescriptions ({patient.counts.prescriptions})</h4>
                                    <NavLink to="/prescriptions" className="btn-link">Open All</NavLink>
                                </div>
                                <S.TableWrap>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Rx ID</th>
                                                <th>Date</th>
                                                <th>Items</th>
                                                <th>Open</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patient.prescriptions.map(rx => (
                                                <tr key={rx.id}>
                                                    <td>{rx.id}</td>
                                                    <td>{fmtDateTime(rx.date)}</td>
                                                    <td>{rx.items}</td>
                                                    <td><NavLink to={`/prescriptions/${rx.id}`}>View</NavLink></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </S.TableWrap>
                            </S.Card>
                        </section>

                        {/* LABS */}
                        <section className="panel" data-for="tab-labs">
                            <S.Card>
                                <div className="panel-head">
                                    <h4>Lab Orders ({patient.counts.labs})</h4>
                                    <NavLink to="/labs" className="btn-link">Open All</NavLink>
                                </div>
                                <S.TableWrap>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Lab ID</th>
                                                <th>Date</th>
                                                <th>Panel</th>
                                                <th>Open</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patient.labs.map(l => (
                                                <tr key={l.id}>
                                                    <td>{l.id}</td>
                                                    <td>{fmtDateTime(l.date)}</td>
                                                    <td>{l.panel}</td>
                                                    <td><NavLink to={`/labs/${l.id}`}>View</NavLink></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </S.TableWrap>
                            </S.Card>
                        </section>

                        {/* IMAGING */}
                        <section className="panel" data-for="tab-imaging">
                            <S.Card>
                                <div className="panel-head">
                                    <h4>Imaging ({patient.counts.imaging})</h4>
                                    <NavLink to="/imaging" className="btn-link">Open All</NavLink>
                                </div>
                                <S.TableWrap>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image ID</th>
                                                <th>Date</th>
                                                <th>Type</th>
                                                <th>Open</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patient.imaging.map(im => (
                                                <tr key={im.id}>
                                                    <td>{im.id}</td>
                                                    <td>{fmtDateTime(im.date)}</td>
                                                    <td>{im.type}</td>
                                                    <td><NavLink to={`/imaging/${im.id}`}>View</NavLink></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </S.TableWrap>
                            </S.Card>
                        </section>

                        {/* BILLING */}
                        <section className="panel" data-for="tab-bill">
                            <S.Card>
                                <div className="panel-head">
                                    <h4>Billing</h4>
                                    <NavLink to="/invoices" className="btn-link">Open Invoices</NavLink>
                                </div>
                                <S.TableWrap>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Invoice ID</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Amount</th>
                                                <th>Open</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patient.invoices.map(inv => (
                                                <tr key={inv.id}>
                                                    <td>{inv.id}</td>
                                                    <td>{fmtDateTime(inv.date)}</td>
                                                    <td>{inv.status}</td>
                                                    <td>₹ {inv.amount.toFixed(2)}</td>
                                                    <td>
                                                        <NavLink to={`/invoices/${inv.id}`}>View</NavLink>
                                                        {' '}•{' '}
                                                        <NavLink to={`/invoices/${inv.id}/print`}>Print</NavLink>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </S.TableWrap>
                                <div className="links-row">
                                    <NavLink to="/receipts">Receipts</NavLink>
                                    <span className="dot">•</span>
                                    <NavLink to="/finance/ledgers">Ledgers</NavLink>
                                    <span className="dot">•</span>
                                    <NavLink to="/finance/taxes">Taxes</NavLink>
                                </div>
                            </S.Card>
                        </section>

                        {/* ACTIVITY */}
                        <section className="panel" data-for="tab-activity">
                            <S.Card>
                                <h4>Activity</h4>
                                <ul className="timeline">
                                    {patient.activity.map(a => (
                                        <li key={a.id}>
                                            <span className="when">{fmtDateTime(a.when)}</span>
                                            <span className="text">{a.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </S.Card>
                        </section>

                        {/* FILES */}
                        <section className="panel" data-for="tab-files">
                            <S.Card>
                                <div className="panel-head">
                                    <h4>Attachments</h4>
                                    <NavLink to="/settings/print-templates" className="btn-link">Print Templates</NavLink>
                                </div>
                                <S.TableWrap>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>File</th>
                                                <th>Size</th>
                                                <th>Uploaded</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patient.attachments.map(f => (
                                                <tr key={f.id}>
                                                    <td>{f.name}</td>
                                                    <td>{f.size}</td>
                                                    <td>{fmtDateTime(f.uploadedAt)}</td>
                                                    <td>
                                                        <button disabled aria-disabled title="Download disabled in demo">Download</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </S.TableWrap>
                            </S.Card>
                        </section>
                    </S.Tabs>
                </S.RightCol>
            </S.Grid>

            <ConfirmModal
                open={showConfirm}
                title="Delete Patient?"
                message="This action is disabled in the demo."
                onClose={() => setShowConfirm(false)}
            />
        </S.Wrapper>
    );
};

export default PatientDetail;
