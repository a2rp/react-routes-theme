/* global __APP_BUILD_ISO__, __APP_COMMIT_ISO__ */
import React, { useMemo, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import {
    LuSearch,
    LuScan,
    LuUser,
    LuClock,
    LuPrinter,
    LuDownload,
    LuExternalLink,
    LuFolderOpen,
    LuTriangleAlert,
    LuEye,
    LuListChecks,
    LuArrowUpRight,
} from "react-icons/lu";

const fmtDate = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    return d.toDateString(); // e.g. "Sat Oct 04 2025"
};
const fmtTime = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`; // e.g. "15:38:20hrs"
};
const fmtDateTime = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    const date = d.toDateString();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${date} ${hh}:${mm}:${ss}hrs`; // "Sat Oct 04 2025 15:38:20hrs"
};

const studiesSeed = [
    {
        id: "IMG-20251004-001",
        patient: { id: "PAT-1001", name: "Rahul Verma", age: 42, sex: "M" },
        modality: "CT",
        bodyPart: "Chest",
        images: 342,
        status: "Final",
        priority: "Routine",
        createdAt: "2025-10-04T09:20:11+05:30",
        performedAt: "2025-10-04T10:02:33+05:30",
        reportedAt: "2025-10-04T12:21:09+05:30",
        notes: "CT Thorax with contrast. Rule out PE.",
    },
    {
        id: "IMG-20251003-007",
        patient: { id: "PAT-1035", name: "Nisha Sharma", age: 29, sex: "F" },
        modality: "MRI",
        bodyPart: "Brain",
        images: 188,
        status: "Preliminary",
        priority: "STAT",
        createdAt: "2025-10-03T18:40:03+05:30",
        performedAt: "2025-10-03T19:08:42+05:30",
        reportedAt: "",
        notes: "Headache, r/o demyelination.",
    },
    {
        id: "IMG-20250927-112",
        patient: { id: "PAT-1113", name: "Arun Kumar", age: 64, sex: "M" },
        modality: "XR",
        bodyPart: "Knee",
        images: 6,
        status: "Final",
        priority: "Routine",
        createdAt: "2025-09-27T12:10:21+05:30",
        performedAt: "2025-09-27T12:25:10+05:30",
        reportedAt: "2025-09-27T14:19:57+05:30",
        notes: "AP/Lateral knee. OA assessment.",
    },
    {
        id: "IMG-20250925-054",
        patient: { id: "PAT-1022", name: "Sneha Iyer", age: 35, sex: "F" },
        modality: "USG",
        bodyPart: "Abdomen",
        images: 72,
        status: "Final",
        priority: "Routine",
        createdAt: "2025-09-25T11:02:09+05:30",
        performedAt: "2025-09-25T11:15:43+05:30",
        reportedAt: "2025-09-25T12:36:01+05:30",
        notes: "Upper abdomen screening.",
    },
    {
        id: "IMG-20250922-019",
        patient: { id: "PAT-1189", name: "Pooja Singh", age: 47, sex: "F" },
        modality: "MAMMO",
        bodyPart: "Breast",
        images: 44,
        status: "Final",
        priority: "Routine",
        createdAt: "2025-09-22T09:50:14+05:30",
        performedAt: "2025-09-22T10:20:00+05:30",
        reportedAt: "2025-09-22T12:59:35+05:30",
        notes: "Screening mammography.",
    },
    {
        id: "IMG-20250922-020",
        patient: { id: "PAT-1189", name: "Pooja Singh", age: 47, sex: "F" },
        modality: "USG",
        bodyPart: "Breast",
        images: 23,
        status: "Final",
        priority: "Routine",
        createdAt: "2025-09-22T13:10:14+05:30",
        performedAt: "2025-09-22T13:30:00+05:30",
        reportedAt: "2025-09-22T14:05:35+05:30",
        notes: "Targeted ultrasound.",
    },
    {
        id: "IMG-20250921-081",
        patient: { id: "PAT-1066", name: "Imran Khan", age: 51, sex: "M" },
        modality: "CT",
        bodyPart: "Abdomen",
        images: 256,
        status: "Final",
        priority: "Routine",
        createdAt: "2025-09-21T16:03:41+05:30",
        performedAt: "2025-09-21T16:55:10+05:30",
        reportedAt: "2025-09-21T18:47:17+05:30",
        notes: "CT Abdomen triphasic.",
    },
    {
        id: "IMG-20250920-014",
        patient: { id: "PAT-1200", name: "Ritika Desai", age: 38, sex: "F" },
        modality: "XR",
        bodyPart: "Cervical Spine",
        images: 8,
        status: "Preliminary",
        priority: "Routine",
        createdAt: "2025-09-20T08:14:10+05:30",
        performedAt: "2025-09-20T08:26:55+05:30",
        reportedAt: "",
        notes: "Neck pain.",
    },
    {
        id: "IMG-20250918-301",
        patient: { id: "PAT-1150", name: "Kapil Mehra", age: 23, sex: "M" },
        modality: "USG",
        bodyPart: "KUB",
        images: 36,
        status: "Final",
        priority: "Routine",
        createdAt: "2025-09-18T13:45:00+05:30",
        performedAt: "2025-09-18T14:05:11+05:30",
        reportedAt: "2025-09-18T15:38:20+05:30",
        notes: "Renal calculus follow-up.",
    },
    {
        id: "IMG-20250915-222",
        patient: { id: "PAT-1010", name: "Aisha Khan", age: 33, sex: "F" },
        modality: "MRI",
        bodyPart: "Knee",
        images: 210,
        status: "Final",
        priority: "Routine",
        createdAt: "2025-09-15T10:10:21+05:30",
        performedAt: "2025-09-15T11:02:07+05:30",
        reportedAt: "2025-09-15T13:25:49+05:30",
        notes: "ACL/PCL integrity.",
    },
];

const DEMO_MODE = true;

export default function ImagingList() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all"); // all | final | preliminary
    const [modality, setModality] = useState("all"); // all | CT | MRI | XR | USG | MAMMO
    const [demoNotice, setDemoNotice] = useState(false);
    const printRef = useRef(null);

    const list = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return studiesSeed.filter((s) => {
            const bucket =
                (status === "all") ||
                (status === "final" && s.status === "Final") ||
                (status === "preliminary" && s.status === "Preliminary");

            const modOk = modality === "all" || s.modality === modality;

            const flat = [
                s.id,
                s.patient?.name,
                s.patient?.id,
                s.modality,
                s.bodyPart,
                s.priority,
                s.status,
                s.notes,
            ]
                .join(" ")
                .toLowerCase();

            const match = tokens.length === 0 || tokens.every((t) => flat.includes(t));
            return bucket && modOk && match;
        });
    }, [q, status, modality]);

    const onExportCSV = () => {
        const headers = [
            "Study ID",
            "Patient",
            "Patient ID",
            "Modality",
            "Body Part",
            "Images",
            "Status",
            "Priority",
            "Created",
            "Performed",
            "Reported",
            "Notes",
        ];
        const rows = list.map((s) => [
            s.id,
            s.patient.name,
            s.patient.id,
            s.modality,
            s.bodyPart,
            s.images,
            s.status,
            s.priority,
            fmtDateTime(s.createdAt),
            fmtDateTime(s.performedAt),
            s.reportedAt ? fmtDateTime(s.reportedAt) : "",
            s.notes?.replace(/\n/g, " "),
        ]);
        const csv = [headers, ...rows].map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `imaging-list-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const onPrintSection = () => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
    };

    const buildIsoSafe = (maybe) => {
        return typeof maybe === "string" && maybe ? maybe : new Date().toISOString();
    };

    const commitISO = buildIsoSafe(typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : "");
    const buildISO = buildIsoSafe(typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : "");

    return (
        <Styled.Page>
            {/* breadcrumbs */}
            <nav className="crumbs" aria-label="Breadcrumbs">
                <Link to="/home">Home</Link>
                <span className="sep">/</span>
                <Link to="/patients">Healthcare</Link>
                <span className="sep">/</span>
                <span aria-current="page">Imaging</span>
            </nav>

            <header className="pageHeader">
                <div className="l">
                    <div className="iconCircle"><LuScan size={20} aria-hidden /></div>
                    <div>
                        <h1>Imaging</h1>
                        <p>Viewer-ready studies from multiple modalities with clean deep links and premium display.</p>
                    </div>
                </div>
                <div className="meta">
                    <span title="Build time">Build: {fmtDateTime(buildISO)}</span>
                    <span title="Last commit time">Last commit: {fmtDateTime(commitISO)}</span>
                </div>
            </header>

            {/* toolbar */}
            <section className="toolbar">
                <div className="searchBox">
                    <LuSearch size={18} className="ico" aria-hidden />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search (study id, patient, modality, body part)…"
                        aria-label="Search studies"
                    />
                </div>

                <div className="filters">
                    <div className="seg">
                        <button
                            className={`chip ${status === "all" ? "on" : ""}`}
                            onClick={() => setStatus("all")}
                        >
                            All
                        </button>
                        <button
                            className={`chip ${status === "final" ? "on" : ""}`}
                            onClick={() => setStatus("final")}
                        >
                            Final
                        </button>
                        <button
                            className={`chip ${status === "preliminary" ? "on" : ""}`}
                            onClick={() => setStatus("preliminary")}
                        >
                            Preliminary
                        </button>
                    </div>

                    <div className="seg">
                        {["all", "CT", "MRI", "XR", "USG", "MAMMO"].map((m) => (
                            <button
                                key={m}
                                className={`chip ${modality === m ? "on" : ""}`}
                                onClick={() => setModality(m)}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="acts">
                    <button className="btn ghost" onClick={onPrintSection} title="Print visible list">
                        <LuPrinter size={16} /> Print
                    </button>
                    <button className="btn ghost" onClick={onExportCSV} title="Download as CSV">
                        <LuDownload size={16} /> Export
                    </button>
                    <button
                        className="btn primary"
                        disabled={DEMO_MODE}
                        onClick={() => setDemoNotice(true)}
                        title="Create imaging study (disabled in demo)"
                    >
                        <LuFolderOpen size={16} /> New Study
                    </button>
                </div>
            </section>

            {/* quick links */}
            <section className="quickLinks">
                <Link to="/patients" className="ql"><LuUser /> Patients</Link>
                <Link to="/appointments" className="ql"><LuClock /> Appointments</Link>
                <Link to="/labs" className="ql"><LuListChecks /> Labs</Link>
                <Link to="/reports" className="ql"><LuArrowUpRight /> Reports</Link>
                <Link to="/imaging" className="ql active"><LuScan /> Imaging</Link>
            </section>

            {/* table */}
            <section ref={printRef} id="search-print-area" className="tableWrap">
                <div className="subhead">
                    <span>{list.length} studies</span>
                    <span className="dot">•</span>
                    <span>Showing: {status === "all" ? "All" : status === "final" ? "Final" : "Preliminary"}</span>
                    <span className="dot">•</span>
                    <span>Modality: {modality}</span>
                </div>

                <div className="scroll">
                    <table className="grid">
                        <thead>
                            <tr>
                                <th>Study</th>
                                <th>Patient</th>
                                <th>Modality</th>
                                <th>Body Part</th>
                                <th>Images</th>
                                <th>Created</th>
                                <th>Performed</th>
                                <th>Reported</th>
                                <th>Status</th>
                                <th className="w120">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((s) => (
                                <tr key={s.id}>
                                    <td className="sticky">
                                        <Link className="idLink" to={`/imaging/${encodeURIComponent(s.id)}`} title="Open study detail">
                                            {s.id}
                                        </Link>
                                        <div className="metaRow">
                                            <LuClock aria-hidden /> {fmtDateTime(s.createdAt)}
                                        </div>
                                    </td>

                                    <td>
                                        <Link to={`/patients/${encodeURIComponent(s.patient.id)}`} className="plain">
                                            <div className="patient">
                                                <span className="avatar" aria-hidden>{s.patient.name[0]}</span>
                                                <span className="name">{s.patient.name}</span>
                                                <span className="muted">({s.patient.id})</span>
                                            </div>
                                        </Link>
                                    </td>

                                    <td>{s.modality}</td>
                                    <td>{s.bodyPart}</td>
                                    <td>{s.images}</td>
                                    <td>
                                        <div className="dt">{fmtDate(s.createdAt)}</div>
                                        <div className="tm">{fmtTime(s.createdAt)}</div>
                                    </td>
                                    <td>
                                        <div className="dt">{fmtDate(s.performedAt)}</div>
                                        <div className="tm">{fmtTime(s.performedAt)}</div>
                                    </td>
                                    <td>
                                        {s.reportedAt ? (
                                            <>
                                                <div className="dt">{fmtDate(s.reportedAt)}</div>
                                                <div className="tm">{fmtTime(s.reportedAt)}</div>
                                            </>
                                        ) : (
                                            <span className="muted">—</span>
                                        )}
                                    </td>
                                    <td>
                                        <span className={`badge ${s.status.toLowerCase()}`}>{s.status}</span>
                                        {s.priority === "STAT" && <span className="badge stat">STAT</span>}
                                    </td>
                                    <td className="acts">
                                        <Link to={`/imaging/${encodeURIComponent(s.id)}`} className="btn tiny">
                                            <LuEye /> View
                                        </Link>
                                        <button
                                            className="btn tiny ghost"
                                            onClick={() => (DEMO_MODE ? setDemoNotice(true) : navigate(`/imaging/${encodeURIComponent(s.id)}`))}
                                            title="Open viewer"
                                        >
                                            <LuExternalLink /> Viewer
                                        </button>
                                        <button className="btn tiny ghost" onClick={onPrintSection} title="Print this list">
                                            <LuPrinter />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* extra navigation cards */}
            <section className="navCards">
                <Link to="/imaging" className="card">
                    <div className="head"><LuScan /> All Studies</div>
                    <p>Browse every study with filters, search, and deep links to detail pages.</p>
                </Link>
                <Link to="/patients" className="card">
                    <div className="head"><LuUser /> Patient Registry</div>
                    <p>Open the patient’s timeline and navigate to labs, appointments, and prescriptions.</p>
                </Link>
                <Link to="/reports" className="card">
                    <div className="head"><LuListChecks /> Reporting</div>
                    <p>Jump to report dashboards for sales, inventory, and finance.</p>
                </Link>
            </section>

            {/* Demo notice modal */}
            {demoNotice && (
                <div className="modalBackdrop" role="dialog" aria-modal="true" aria-labelledby="demo-title">
                    <div className="modal">
                        <div className="mHead">
                            <LuTriangleAlert aria-hidden />
                            <h3 id="demo-title">Demo mode</h3>
                        </div>
                        <div className="mBody">
                            This is a display-only theme. Create/Update actions are disabled for a smooth walkthrough.
                        </div>
                        <div className="mActs">
                            <button className="btn" onClick={() => setDemoNotice(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* print-only CSS (section print) */}
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
