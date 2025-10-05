import React, { useMemo, useState } from "react";
import { Link, useLocation, useParams, NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdPrint,
    MdContentCopy,
    MdOpenInNew,
    MdArchive,
    MdDelete,
    MdClose,
    MdPictureAsPdf,
    MdCloudDownload,
    MdChevronRight,
} from "react-icons/md";

/** ----------------------------------------------------------------
 *  Helpers: date formatting in required formats
 *  - Date: Sat Oct 04 2025
 *  - DateTime: Sat Oct 04 2025 15:38:20hrs
 *  - Time: 15:38:20hrs
 *  ---------------------------------------------------------------*/
const pad2 = (n) => String(n).padStart(2, "0");
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmtDate(iso) {
    const d = new Date(iso);
    return `${WEEK[d.getDay()]} ${MON[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
}
function fmtTime(iso) {
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
}
function fmtDateTime(iso) {
    return `${fmtDate(iso)} ${fmtTime(iso)}`;
}

/** ----------------------------------------------------------------
 *  Demo fixtures (display-only)
 *  In real app you'd load via loader+repo. Here we keep it internal.
 *  ---------------------------------------------------------------*/
const FIXTURES = {
    "IMG-1001": {
        id: "IMG-1001",
        modality: "CT",
        bodyPart: "Abdomen & Pelvis",
        priority: "Routine",
        status: "Reported",
        requestedAt: "2025-10-04T09:35:20+05:30",
        performedAt: "2025-10-04T12:10:42+05:30",
        reportedAt: "2025-10-04T16:05:07+05:30",
        site: "Main Campus — Scanner CT-02",
        radiologist: { id: "USR-502", name: "Dr. N. Bhattacharya" },
        requestedBy: { id: "USR-410", name: "Dr. R. Sharma" },
        patient: {
            id: "PAT-2007",
            name: "Aarav Verma",
            sex: "M",
            age: "34y",
            mrn: "MRN-874233",
            phone: "+91 98XXXXXX21",
            tags: ["Self-pay", "Allergy: Iodine"],
            nextApptId: "APP-2317",
        },
        series: [
            { id: "SER-1", desc: "Scout (Topogram)", images: 2, res: "1024×1024", size: "3.2 MB" },
            { id: "SER-2", desc: "Axial Contrast (Venous Phase)", images: 312, res: "512×512", size: "412 MB" },
            { id: "SER-3", desc: "Coronal MPR", images: 180, res: "512×512", size: "210 MB" },
            { id: "SER-4", desc: "Sagittal MPR", images: 172, res: "512×512", size: "198 MB" },
        ],
        attachments: [
            { id: "ATT-1", name: "CT_Abdomen_Report.pdf", type: "application/pdf", size: "236 KB" },
            { id: "ATT-2", name: "KeyImages.zip", type: "application/zip", size: "12.4 MB" },
        ],
        impression: [
            "No acute intra-abdominal pathology.",
            "Mild fatty liver changes.",
            "No free air/fluid. No obstructive uropathy.",
        ],
        timeline: [
            { when: "2025-10-04T09:35:20+05:30", label: "Requested by ordering physician" },
            { when: "2025-10-04T10:00:00+05:30", label: "Patient checked-in & consented" },
            { when: "2025-10-04T12:10:42+05:30", label: "Scan completed" },
            { when: "2025-10-04T15:12:10+05:30", label: "Preliminary findings saved" },
            { when: "2025-10-04T16:05:07+05:30", label: "Report finalized by radiologist" },
        ],
        related: {
            labs: [{ id: "LAB-5001", label: "LFT Panel" }],
            prescriptions: [{ id: "RX-4401", label: "Liver support meds" }],
            invoices: [{ id: "INV-2031", label: "Imaging invoice" }],
        },
    },

    "IMG-1002": {
        id: "IMG-1002",
        modality: "MRI",
        bodyPart: "Lumbar Spine",
        priority: "Urgent",
        status: "In Review",
        requestedAt: "2025-10-03T18:28:10+05:30",
        performedAt: "2025-10-04T08:22:11+05:30",
        reportedAt: null,
        site: "Main Campus — MRI-01",
        radiologist: { id: "USR-503", name: "Dr. K. Ahuja" },
        requestedBy: { id: "USR-411", name: "Dr. P. Joshi" },
        patient: {
            id: "PAT-2012",
            name: "Ishita Kapoor",
            sex: "F",
            age: "29y",
            mrn: "MRN-874912",
            phone: "+91 99XXXXXX73",
            tags: ["Corporate plan"],
            nextApptId: null,
        },
        series: [
            { id: "SER-1", desc: "Localizer", images: 3, res: "1024×1024", size: "4.7 MB" },
            { id: "SER-2", desc: "T1 Sagittal", images: 24, res: "512×512", size: "28 MB" },
            { id: "SER-3", desc: "T2 Axial", images: 36, res: "512×512", size: "42 MB" },
        ],
        attachments: [],
        impression: ["Pending radiologist review."],
        timeline: [
            { when: "2025-10-03T18:28:10+05:30", label: "Requested" },
            { when: "2025-10-04T08:22:11+05:30", label: "Scan completed" },
        ],
        related: { labs: [], prescriptions: [], invoices: [] },
    },

    "IMG-1003": {
        id: "IMG-1003",
        modality: "X-Ray",
        bodyPart: "Chest PA",
        priority: "Routine",
        status: "Scheduled",
        requestedAt: "2025-10-05T09:05:00+05:30",
        performedAt: null,
        reportedAt: null,
        site: "Satellite Center — XR-03",
        radiologist: { id: "USR-502", name: "Dr. N. Bhattacharya" },
        requestedBy: { id: "USR-510", name: "Dr. A. Sen" },
        patient: {
            id: "PAT-2040",
            name: "Ravi Kumar",
            sex: "M",
            age: "41y",
            mrn: "MRN-877110",
            phone: "+91 98XXXXXX88",
            tags: [],
            nextApptId: "APP-2325",
        },
        series: [{ id: "SER-1", desc: "PA View", images: 1, res: "2048×2048", size: "6.8 MB" }],
        attachments: [],
        impression: ["Scheduled — report will be available after scan."],
        timeline: [{ when: "2025-10-05T09:05:00+05:30", label: "Requested & scheduled" }],
        related: { labs: [], prescriptions: [], invoices: [] },
    },
};

export default function ImagingDetail() {
    const { imageId } = useParams();
    const location = useLocation();
    const [modal, setModal] = useState(null); // { title, body, cta }
    const [copied, setCopied] = useState(false);

    const study = useMemo(() => FIXTURES[imageId] || null, [imageId]);

    const openDemoModal = (title, body) => setModal({ title, body });
    const closeModal = () => setModal(null);

    const onCopyLink = async () => {
        try {
            await navigator.clipboard?.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            setModal({
                title: "Copy Link",
                body: "Could not access clipboard. You can manually copy the URL from the address bar.",
            });
        }
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        setTimeout(() => window.print(), 0);
        setTimeout(() => document.body.classList.remove("print-section-mode"), 350);
    };

    if (!study) {
        return (
            <Styled.Page>
                <Styled.StickyBar role="region" aria-label="Breadcrumb">
                    <Styled.Breadcrumbs>
                        <NavLink to="/home">Home</NavLink>
                        <MdChevronRight />
                        <NavLink to="/imaging">Imaging</NavLink>
                        <MdChevronRight />
                        <span>Not Found</span>
                    </Styled.Breadcrumbs>
                    <div />
                </Styled.StickyBar>

                <Styled.Card style={{ marginTop: 16 }}>
                    <Styled.CardHeader>
                        <h2>Imaging study not found</h2>
                    </Styled.CardHeader>
                    <p>
                        We couldn’t locate <code>{imageId}</code>. Try the{" "}
                        <Link to="/imaging">Imaging catalog</Link> or search above.
                    </p>
                </Styled.Card>
            </Styled.Page>
        );
    }

    const { patient } = study;

    return (
        <Styled.Page>
            {/* Sticky header */}
            <Styled.StickyBar role="region" aria-label="Breadcrumb and actions">
                <Styled.Breadcrumbs>
                    <NavLink to="/home">Home</NavLink>
                    <MdChevronRight />
                    <NavLink to="/imaging">Imaging</NavLink>
                    <MdChevronRight />
                    <span>{study.id}</span>
                </Styled.Breadcrumbs>

                <Styled.Actions>
                    <button onClick={printSection} title="Print this report">
                        <MdPrint size={18} />
                        <span>Print</span>
                    </button>
                    <Link to={location.pathname} target="_blank" rel="noreferrer" title="Open in new tab">
                        <MdOpenInNew size={18} />
                        <span>Open</span>
                    </Link>
                    <button onClick={onCopyLink} title="Copy link to clipboard">
                        <MdContentCopy size={18} />
                        <span>{copied ? "Copied" : "Copy Link"}</span>
                    </button>
                    <button
                        onClick={() =>
                            openDemoModal(
                                "Archive (Demo)",
                                "This is a display-only demo. Archiving is disabled."
                            )
                        }
                        title="Archive study (demo disabled)"
                    >
                        <MdArchive size={18} />
                        <span>Archive</span>
                    </button>
                </Styled.Actions>
            </Styled.StickyBar>

            {/* Title block */}
            <Styled.HeaderBlock>
                <div className="left">
                    <h1>
                        {study.modality} — {study.bodyPart} <span className="dim">({study.id})</span>
                    </h1>
                    <div className="meta">
                        <Styled.Badge title={`Status: ${study.status}`}>{study.status}</Styled.Badge>
                        <Styled.Badge tone={study.priority === "Urgent" ? "danger" : "info"}>
                            {study.priority}
                        </Styled.Badge>
                        <Styled.Tag>{study.site}</Styled.Tag>
                    </div>
                </div>
                <div className="right">
                    <Styled.PillNav>
                        <Link to="/imaging">All Imaging</Link>
                        <Link to={`/patients/${patient.id}`}>Patient</Link>
                        {patient.nextApptId && <Link to={`/appointments/${patient.nextApptId}`}>Appointment</Link>}
                        <Link to="/labs">Labs</Link>
                        <Link to="/prescriptions">Prescriptions</Link>
                        <Link to="/reports/inventory">Reports</Link>
                    </Styled.PillNav>
                </div>
            </Styled.HeaderBlock>

            {/* Print-only block (same page) */}
            <div id="search-print-area" style={{ padding: 0 }}>
                <Styled.Card className="print-only">
                    <Styled.CardHeader>
                        <div>
                            <h2>Imaging Report — {study.modality} {study.bodyPart}</h2>
                            <p>
                                Study ID: <strong>{study.id}</strong> &nbsp;|&nbsp; Patient:{" "}
                                <strong>{patient.name}</strong> ({patient.sex}, {patient.age})
                            </p>
                        </div>
                    </Styled.CardHeader>
                    <Styled.PrintGrid>
                        <div>
                            <h4>Dates</h4>
                            <ul>
                                <li>Requested: {fmtDateTime(study.requestedAt)}</li>
                                {study.performedAt && <li>Performed: {fmtDateTime(study.performedAt)}</li>}
                                {study.reportedAt && <li>Reported: {fmtDateTime(study.reportedAt)}</li>}
                            </ul>
                        </div>
                        <div>
                            <h4>Clinicians</h4>
                            <ul>
                                <li>Requested by: {study.requestedBy.name}</li>
                                <li>Radiologist: {study.radiologist.name}</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Impression</h4>
                            <ul>
                                {study.impression.map((line, i) => (<li key={i}>{line}</li>))}
                            </ul>
                        </div>
                    </Styled.PrintGrid>
                </Styled.Card>
            </div>

            {/* Main 3-column grid */}
            <Styled.ThreeCol>
                {/* Patient Card */}
                <Styled.Card>
                    <Styled.CardHeader>
                        <h3>Patient</h3>
                        <Styled.SmallLinks>
                            <Link to={`/patients/${patient.id}`}>Open card</Link>
                            {patient.nextApptId && <Link to={`/appointments/${patient.nextApptId}`}>Next appointment</Link>}
                        </Styled.SmallLinks>
                    </Styled.CardHeader>
                    <Styled.KeyValue>
                        <div><span>Name</span><strong>{patient.name}</strong></div>
                        <div><span>MRN</span><strong>{patient.mrn}</strong></div>
                        <div><span>Sex / Age</span><strong>{patient.sex} / {patient.age}</strong></div>
                        <div><span>Phone</span><strong>{patient.phone}</strong></div>
                    </Styled.KeyValue>
                    {patient.tags?.length > 0 && (
                        <Styled.TagsRow style={{ marginTop: 8 }}>
                            {patient.tags.map((t) => <Styled.Tag key={t}>{t}</Styled.Tag>)}
                        </Styled.TagsRow>
                    )}
                </Styled.Card>

                {/* Study Card */}
                <Styled.Card>
                    <Styled.CardHeader>
                        <h3>Study</h3>
                        <Styled.SmallLinks>
                            <Link to="/imaging">All studies</Link>
                            <Link to={`/users/${study.requestedBy.id}`}>Ordering physician</Link>
                        </Styled.SmallLinks>
                    </Styled.CardHeader>

                    <Styled.KeyValue>
                        <div><span>Modality</span><strong>{study.modality}</strong></div>
                        <div><span>Body part</span><strong>{study.bodyPart}</strong></div>
                        <div><span>Priority</span><strong>{study.priority}</strong></div>
                        <div><span>Status</span><strong>{study.status}</strong></div>
                        <div><span>Requested</span><strong>{fmtDateTime(study.requestedAt)}</strong></div>
                        {study.performedAt && (<div><span>Performed</span><strong>{fmtDateTime(study.performedAt)}</strong></div>)}
                        {study.reportedAt && (<div><span>Reported</span><strong>{fmtDateTime(study.reportedAt)}</strong></div>)}
                        <div><span>Radiologist</span><strong><Link to={`/users/${study.radiologist.id}`}>{study.radiologist.name}</Link></strong></div>
                        <div><span>Site</span><strong>{study.site}</strong></div>
                    </Styled.KeyValue>

                    <Styled.Divider />

                    <div>
                        <h4 style={{ marginBottom: 8 }}>Impression</h4>
                        <ul>
                            {study.impression.map((line, i) => (<li key={i}>{line}</li>))}
                        </ul>
                    </div>
                </Styled.Card>

                {/* Attachments */}
                <Styled.Card>
                    <Styled.CardHeader>
                        <h3>Attachments</h3>
                        <Styled.SmallLinks>
                            <Link to={`/print/sticker/${study.id}`}>Print label</Link>
                        </Styled.SmallLinks>
                    </Styled.CardHeader>

                    {study.attachments.length === 0 ? (
                        <Styled.Empty>
                            <p>No attachments uploaded.</p>
                        </Styled.Empty>
                    ) : (
                        <Styled.AttachList>
                            {study.attachments.map((att) => (
                                <li key={att.id}>
                                    <div className="meta">
                                        <div className="icon">{att.type === "application/pdf" ? <MdPictureAsPdf /> : <MdCloudDownload />}</div>
                                        <div>
                                            <strong>{att.name}</strong>
                                            <div className="muted">{att.type} &middot; {att.size}</div>
                                        </div>
                                    </div>
                                    <div className="actions">
                                        <a href="#" title="View / Download">Open</a>
                                        <button
                                            onClick={() =>
                                                openDemoModal("Remove (Demo)", "This is a display-only demo. Removing files is disabled.")
                                            }
                                            title="Remove (demo disabled)"
                                        >
                                            <MdDelete size={16} />
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </Styled.AttachList>
                    )}
                </Styled.Card>
            </Styled.ThreeCol>

            {/* Series table */}
            <Styled.Card style={{ marginTop: 16 }}>
                <Styled.CardHeader>
                    <h3>Series</h3>
                    <Styled.SmallLinks>
                        <Link to={`/imaging/${study.id}?viewer=web`}>Open viewer</Link>
                        <Link to="/tools/playground">Open tools</Link>
                    </Styled.SmallLinks>
                </Styled.CardHeader>

                <Styled.Table>
                    <thead>
                        <tr>
                            <th>Series ID</th>
                            <th>Description</th>
                            <th className="num">Images</th>
                            <th>Resolution</th>
                            <th>Size</th>
                            <th className="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {study.series.map((s) => (
                            <tr key={s.id}>
                                <td><code>{s.id}</code></td>
                                <td>{s.desc}</td>
                                <td className="num">{s.images}</td>
                                <td>{s.res}</td>
                                <td>{s.size}</td>
                                <td className="actions">
                                    <Link to={`/imaging/${study.id}?series=${encodeURIComponent(s.id)}`} title="Open series">Open</Link>
                                    <Link to={`/print/sticker/${study.id}`} title="Print label">Label</Link>
                                    <a href="#" title="Download as ZIP">Download</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Styled.Table>
            </Styled.Card>

            {/* Timeline + Related */}
            <Styled.TwoCol style={{ marginTop: 16 }}>
                <Styled.Card>
                    <Styled.CardHeader><h3>Timeline</h3></Styled.CardHeader>
                    <Styled.Timeline>
                        {study.timeline.map((ev, idx) => (
                            <li key={idx}>
                                <div className="dot" />
                                <div className="content">
                                    <div className="when">{fmtDateTime(ev.when)}</div>
                                    <div className="label">{ev.label}</div>
                                </div>
                            </li>
                        ))}
                    </Styled.Timeline>
                </Styled.Card>

                <Styled.Card>
                    <Styled.CardHeader><h3>Related</h3></Styled.CardHeader>
                    <Styled.Related>
                        <div>
                            <h4>Labs</h4>
                            {study.related.labs.length ? (
                                <ul>
                                    {study.related.labs.map((l) => (
                                        <li key={l.id}>
                                            <Link to={`/labs/${l.id}`}>{l.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : <p className="muted">No linked labs.</p>}
                        </div>

                        <div>
                            <h4>Prescriptions</h4>
                            {study.related.prescriptions.length ? (
                                <ul>
                                    {study.related.prescriptions.map((r) => (
                                        <li key={r.id}>
                                            <Link to={`/prescriptions/${r.id}`}>{r.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : <p className="muted">No linked prescriptions.</p>}
                        </div>

                        <div>
                            <h4>Billing</h4>
                            {study.related.invoices.length ? (
                                <ul>
                                    {study.related.invoices.map((v) => (
                                        <li key={v.id}>
                                            <Link to={`/invoices/${v.id}`}>{v.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : <p className="muted">No linked invoices.</p>}
                        </div>
                    </Styled.Related>
                </Styled.Card>
            </Styled.TwoCol>

            {/* Explore other studies */}
            <Styled.Card style={{ marginTop: 16 }}>
                <Styled.CardHeader>
                    <h3>Explore</h3>
                </Styled.CardHeader>
                <Styled.TagsRow>
                    {Object.keys(FIXTURES).map((id) => (
                        <Link key={id} to={`/imaging/${id}`}><Styled.Tag as="span">{id}</Styled.Tag></Link>
                    ))}
                    <Link to="/imaging"><Styled.Tag as="span">View catalog</Styled.Tag></Link>
                    <Link to="/reports/inventory"><Styled.Tag as="span">Go to reports</Styled.Tag></Link>
                </Styled.TagsRow>
            </Styled.Card>

            {/* Custom Modal */}
            {modal && (
                <Styled.ModalOverlay role="dialog" aria-modal="true">
                    <Styled.ModalCard>
                        <header>
                            <h3>{modal.title}</h3>
                            <button className="icon" onClick={closeModal} aria-label="Close">
                                <MdClose size={18} />
                            </button>
                        </header>
                        <div className="body">
                            <p>{modal.body}</p>
                        </div>
                        <footer>
                            <button onClick={closeModal}>Close</button>
                        </footer>
                    </Styled.ModalCard>
                </Styled.ModalOverlay>
            )}

            {/* Print CSS */}
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
        </Styled.Page>
    );
}
