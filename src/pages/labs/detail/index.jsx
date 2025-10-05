import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";
import {
    LuPrinter, LuTrash2, LuCopy, LuExternalLink, LuFileText,
    LuInfo, LuMicroscope, LuBeaker, LuUser, LuStethoscope,
    LuCalendarClock, LuFileCheck
} from "react-icons/lu";
import { FiEdit } from "react-icons/fi";

/** Date formatting helpers (consistent across the app) */
const fmtDate = (d) => new Date(d).toDateString(); // Sat Oct 04 2025
const fmtTime = (d) => new Date(d).toLocaleTimeString("en-GB", { hour12: false }) + "hrs"; // 15:38:20hrs
const fmtDateTime = (d) => `${fmtDate(d)} ${fmtTime(d)}`; // Sat Oct 04 2025 15:38:20hrs

/** Simple confirm modal (no browser alerts) */
const ConfirmModal = ({ open, title, children, onClose, onConfirm, confirmText = "Confirm", disabled }) => {
    if (!open) return null;
    return (
        <Styled.ModalOverlay role="dialog" aria-modal="true">
            <Styled.ModalCard className="card">
                <div className="modal-head">
                    <h3>{title}</h3>
                    <button onClick={onClose} aria-label="Close modal">✕</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-foot">
                    <button onClick={onClose}>Close</button>
                    <button onClick={onConfirm} disabled={disabled} title={disabled ? "Demo mode" : undefined}>
                        {confirmText}
                    </button>
                </div>
            </Styled.ModalCard>
        </Styled.ModalOverlay>
    );
};

const LabDetailPage = () => {
    const navigate = useNavigate();
    const { labId } = useParams();

    /** Demo-only fixture (display, no calculations/no persistence) */
    const data = useMemo(() => ({
        lab: {
            id: labId || "LAB-240153",
            code: "LAB-240153",
            status: "Completed",
            priority: "Routine",
            collectedAt: "2025-10-04T09:20:05+05:30",
            receivedAt: "2025-10-04T10:02:17+05:30",
            reportedAt: "2025-10-04T14:45:52+05:30",
            orderingProviderId: "USR-0031",
            orderingProvider: "Dr. Meera Shah",
            department: "Pathology",
            specimen: "Venous Blood",
            container: "Vacutainer (Red Top)",
            notes: "Fasting sample. No anticoagulant medication in last 48 hours.",
            invoiceId: "INV-2031",
            appointmentId: "APT-88211",
            relatedImagingId: "IMG-11107",
            prescriptionId: "RX-55472"
        },
        patient: {
            id: "PAT-1002",
            name: "Ravi Kumar",
            gender: "Male",
            dob: "1986-07-09T00:00:00+05:30",
            phone: "+91 98xxxxxx23",
            email: "ravi.kumar@example.com",
            mrn: "MRN-774210",
            bloodGroup: "O+",
            address: "A-203, Lake View Residency, BTM Layout, Bengaluru 560076"
        },
        tests: [
            {
                key: "CBC",
                name: "Complete Blood Count",
                group: "Hematology",
                results: [
                    { analyte: "Hemoglobin", value: "14.1", unit: "g/dL", ref: "13.0 – 17.0", flag: "" },
                    { analyte: "WBC", value: "6.3", unit: "10^3/µL", ref: "4.0 – 10.0", flag: "" },
                    { analyte: "Platelets", value: "235", unit: "10^3/µL", ref: "150 – 400", flag: "" },
                ],
                comment: "All CBC indices within reference range."
            },
            {
                key: "CMP",
                name: "Comprehensive Metabolic Panel",
                group: "Biochemistry",
                results: [
                    { analyte: "Glucose (Fasting)", value: "94", unit: "mg/dL", ref: "70 – 99", flag: "" },
                    { analyte: "Creatinine", value: "0.9", unit: "mg/dL", ref: "0.7 – 1.3", flag: "" },
                    { analyte: "ALT (SGPT)", value: "32", unit: "U/L", ref: "0 – 45", flag: "" },
                    { analyte: "AST (SGOT)", value: "28", unit: "U/L", ref: "0 – 40", flag: "" }
                ],
                comment: "Liver and kidney markers within reference limits."
            },
            {
                key: "LIPID",
                name: "Lipid Profile",
                group: "Biochemistry",
                results: [
                    { analyte: "Total Cholesterol", value: "186", unit: "mg/dL", ref: "< 200", flag: "" },
                    { analyte: "HDL", value: "52", unit: "mg/dL", ref: "> 40", flag: "" },
                    { analyte: "LDL (calc.)", value: "112", unit: "mg/dL", ref: "< 130", flag: "" },
                    { analyte: "Triglycerides", value: "128", unit: "mg/dL", ref: "< 150", flag: "" }
                ],
                comment: "Lipid profile optimal."
            }
        ],
        activity: [
            { ts: "2025-10-04T08:52:11+05:30", label: "Order created", by: "Front Desk", icon: "file" },
            { ts: "2025-10-04T09:20:05+05:30", label: "Specimen collected", by: "Nurse Station 2", icon: "beaker" },
            { ts: "2025-10-04T10:02:17+05:30", label: "Sample received in lab", by: "Pathology Desk", icon: "microscope" },
            { ts: "2025-10-04T14:30:04+05:30", label: "Results validated", by: "Dr. Meera Shah", icon: "check" },
            { ts: "2025-10-04T14:45:52+05:30", label: "Report finalized", by: "LIS", icon: "file-check" }
        ],
        attachments: [
            { id: "ATT-1", name: "LAB-240153-Report.pdf", kind: "PDF", size: "182 KB" },
            { id: "ATT-2", name: "Microscopy-Image-01.png", kind: "Image", size: "1.2 MB" }
        ]
    }), [labId]);

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyLink = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch { /* ignore */ }
    }, []);

    const handlePrint = useCallback(() => {
        document.body.classList.add("print-section-mode");
        const onAfter = () => {
            document.body.classList.remove("print-section-mode");
            window.removeEventListener("afterprint", onAfter);
        };
        window.addEventListener("afterprint", onAfter);
        window.print();
    }, []);

    useEffect(() => {
        // scroll top when ID changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [labId]);

    return (
        <Styled.Page data-testid="lab-detail-page">
            {/* Print CSS (as provided) */}
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

            {/* Breadcrumbs */}
            <Styled.Breadcrumbs aria-label="breadcrumbs">
                <NavLink to="/home">Home</NavLink>
                <span>›</span>
                <NavLink to="/labs">Labs</NavLink>
                <span>›</span>
                <span className="current">{data.lab.code}</span>
            </Styled.Breadcrumbs>

            {/* Header */}
            <Styled.Header className="card">
                <div className="title">
                    <h1><LuFileText /> {data.lab.code}</h1>
                    <div className="badges">
                        <span className={`chip status ${data.lab.status.toLowerCase()}`}>{data.lab.status}</span>
                        <span className="chip">{data.lab.priority}</span>
                        <span className="chip">{data.lab.department}</span>
                    </div>
                </div>

                <div className="actions">
                    <button onClick={() => navigate("/labs")} title="Back to Labs">
                        <LuExternalLink /> Labs
                    </button>
                    <button onClick={handleCopyLink} aria-live="polite" title="Copy deep link">
                        <LuCopy /> {copied ? "Copied" : "Copy Link"}
                    </button>
                    <button onClick={handlePrint} title="Print this report">
                        <LuPrinter /> Print
                    </button>
                    <button disabled title="Demo mode">
                        <FiEdit /> Edit
                    </button>

                    <button onClick={() => setConfirmOpen(true)} title="Delete (demo protected)" disabled>
                        <LuTrash2 /> Delete
                    </button>
                </div>
            </Styled.Header>

            {/* Printable content wrapper */}
            <div id="search-print-area">
                {/* Top meta: patient + order */}
                <Styled.MetaGrid>
                    <div className="card meta">
                        <header><LuUser /> Patient</header>
                        <div className="rows">
                            <div><span>Name</span><strong><Link to={`/patients/${data.patient.id}`}>{data.patient.name}</Link></strong></div>
                            <div><span>MRN</span><strong>{data.patient.mrn}</strong></div>
                            <div><span>Gender</span><strong>{data.patient.gender}</strong></div>
                            <div><span>DOB</span><strong>{fmtDate(data.patient.dob)}</strong></div>
                            <div><span>Contact</span><strong>{data.patient.phone}</strong></div>
                            <div><span>Email</span><strong><a href={`mailto:${data.patient.email}`}>{data.patient.email}</a></strong></div>
                            <div className="wide"><span>Address</span><strong>{data.patient.address}</strong></div>
                        </div>
                        <div className="quicklinks">
                            <Link to={`/patients/${data.patient.id}`}>Open Patient</Link>
                            <Link to={`/appointments/${data.lab.appointmentId}`}>Appointment</Link>
                            <Link to={`/prescriptions/${data.lab.prescriptionId}`}>Prescription</Link>
                        </div>
                    </div>

                    <div className="card meta">
                        <header><LuStethoscope /> Order</header>
                        <div className="rows">
                            <div><span>Provider</span><strong><Link to={`/admin/users/${data.lab.orderingProviderId}`}>{data.lab.orderingProvider}</Link></strong></div>
                            <div><span>Specimen</span><strong>{data.lab.specimen}</strong></div>
                            <div><span>Container</span><strong>{data.lab.container}</strong></div>
                            <div><span>Collected</span><strong>{fmtDateTime(data.lab.collectedAt)}</strong></div>
                            <div><span>Received</span><strong>{fmtDateTime(data.lab.receivedAt)}</strong></div>
                            <div><span>Reported</span><strong>{fmtDateTime(data.lab.reportedAt)}</strong></div>
                        </div>
                        <div className="quicklinks">
                            <Link to={`/invoices/${data.lab.invoiceId}`}>Invoice {data.lab.invoiceId}</Link>
                            <Link to={`/imaging/${data.lab.relatedImagingId}`}>Imaging {data.lab.relatedImagingId}</Link>
                            <Link to="/labs/catalog">Lab Catalog</Link>
                        </div>
                    </div>

                    <div className="card meta notes">
                        <header><LuInfo /> Notes</header>
                        <p>{data.lab.notes}</p>
                    </div>
                </Styled.MetaGrid>

                {/* Results */}
                <Styled.Section className="card">
                    <div className="section-head">
                        <h2><LuMicroscope /> Results</h2>
                        <div className="section-links">
                            <Link to="/reports/lab" title="(demo link)">Reports</Link>
                            <Link to="/labs" title="All labs">All Labs</Link>
                            <Link to={`/labs/${data.lab.id}/print`} title="(demo link)">Print Page</Link>
                        </div>
                    </div>

                    {data.tests.map((test) => (
                        <div className="test-block" key={test.key}>
                            <div className="test-head">
                                <div className="info">
                                    <span className="test-name">{test.name}</span>
                                    <span className="test-group">{test.group}</span>
                                </div>
                            </div>

                            <div className="table-wrap">
                                <table className="results">
                                    <thead>
                                        <tr>
                                            <th>Analyte</th>
                                            <th>Result</th>
                                            <th>Unit</th>
                                            <th>Reference Range</th>
                                            <th>Flag</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {test.results.map((r, idx) => (
                                            <tr key={idx}>
                                                <td>{r.analyte}</td>
                                                <td className="result">{r.value}</td>
                                                <td>{r.unit}</td>
                                                <td className="ref">{r.ref}</td>
                                                <td className={`flag ${r.flag ? "has-flag" : ""}`}>{r.flag || "-"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {test.comment && (
                                <div className="comment">
                                    <LuFileCheck /> <em>{test.comment}</em>
                                </div>
                            )}
                        </div>
                    ))}
                </Styled.Section>

                {/* Attachments */}
                <Styled.Attachments className="card">
                    <div className="section-head">
                        <h2><LuBeaker /> Attachments</h2>
                        <div className="section-links">
                            <Link to={`/invoices/${data.lab.invoiceId}/print`}>(Demo) Print Invoice</Link>
                        </div>
                    </div>
                    <div className="files">
                        {data.attachments.map((f) => (
                            <div className="file" key={f.id}>
                                <div className="meta">
                                    <strong>{f.name}</strong>
                                    <span>{f.kind} · {f.size}</span>
                                </div>
                                <div className="cta">
                                    <button disabled title="Demo mode">View</button>
                                    <button disabled title="Demo mode">Download</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Styled.Attachments>

                {/* Activity Timeline */}
                <Styled.Timeline className="card">
                    <div className="section-head">
                        <h2><LuCalendarClock /> Activity</h2>
                        <div className="section-links">
                            <Link to="/admin/audit-log">Audit Log</Link>
                        </div>
                    </div>
                    <ul className="steps">
                        {data.activity.map((a, i) => (
                            <li key={i}>
                                <span className="dot" />
                                <div className="content">
                                    <div className="line">
                                        <strong>{a.label}</strong>
                                        <span className="by">by {a.by}</span>
                                    </div>
                                    <div className="ts">{fmtDateTime(a.ts)}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Styled.Timeline>

                {/* Quick Navigation */}
                <Styled.QuickNav className="card">
                    <header>Navigate</header>
                    <nav className="links">
                        <Link to="/labs">All Labs</Link>
                        <Link to="/labs/catalog">Lab Catalog</Link>
                        <Link to={`/patients/${data.patient.id}`}>Patient</Link>
                        <Link to={`/appointments/${data.lab.appointmentId}`}>Appointment</Link>
                        <Link to={`/prescriptions/${data.lab.prescriptionId}`}>Prescription</Link>
                        <Link to={`/invoices/${data.lab.invoiceId}`}>Invoice</Link>
                        <Link to={`/imaging/${data.lab.relatedImagingId}`}>Imaging</Link>
                        <Link to="/reports/inventory">Inventory Report</Link>
                        <Link to="/reports/finance">Finance Report</Link>
                        <Link to="/settings/print-templates">Print Templates</Link>
                    </nav>
                </Styled.QuickNav>
            </div>

            {/* Confirm (Demo-protected) */}
            <ConfirmModal
                open={confirmOpen}
                title="Delete Lab Order"
                onClose={() => setConfirmOpen(false)}
                onConfirm={() => { }}
                confirmText="Delete"
                disabled
            >
                <p>This action is disabled in the demo.</p>
            </ConfirmModal>
        </Styled.Page>
    );
};

export default LabDetailPage;
