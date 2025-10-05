import React, { useMemo, useRef, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import * as S from "./styled";

// Display-only dataset (deep links work; totals pre-filled; no calculations)
const PATIENTS = [
    {
        id: "PAT-1001",
        name: "Ananya Sharma",
        gender: "Female",
        age: 29,
        dob: "1996-02-11",
        phone: "+91 98100 10001",
        email: "ananya.sharma@example.com",
        status: "Active",
        tags: ["Prime", "Insurance"],
        lastVisit: "2025-09-28T10:15:20+05:30",
        nextAppt: "2025-10-07T09:00:00+05:30",
    },
    {
        id: "PAT-1002",
        name: "Rohit Mehta",
        gender: "Male",
        age: 41,
        dob: "1984-07-22",
        phone: "+91 98100 10002",
        email: "rohit.mehta@example.com",
        status: "Active",
        tags: ["Diabetic"],
        lastVisit: "2025-09-30T16:40:05+05:30",
        nextAppt: "2025-10-05T18:30:00+05:30",
    },
    {
        id: "PAT-1003",
        name: "Sara Khan",
        gender: "Female",
        age: 35,
        dob: "1990-12-03",
        phone: "+91 98100 10003",
        email: "sara.khan@example.com",
        status: "Inactive",
        tags: ["Self-pay"],
        lastVisit: "2025-07-14T11:05:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1004",
        name: "Vikram Singh",
        gender: "Male",
        age: 52,
        dob: "1973-08-19",
        phone: "+91 98100 10004",
        email: "vikram.singh@example.com",
        status: "Active",
        tags: ["Cardio"],
        lastVisit: "2025-09-25T13:25:00+05:30",
        nextAppt: "2025-10-11T12:15:00+05:30",
    },
    {
        id: "PAT-1005",
        name: "Meera Iyer",
        gender: "Female",
        age: 46,
        dob: "1979-03-08",
        phone: "+91 98100 10005",
        email: "meera.iyer@example.com",
        status: "Active",
        tags: ["Allergy"],
        lastVisit: "2025-09-10T15:00:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1006",
        name: "Kunal Verma",
        gender: "Male",
        age: 33,
        dob: "1992-05-16",
        phone: "+91 98100 10006",
        email: "kunal.verma@example.com",
        status: "Active",
        tags: ["Prime"],
        lastVisit: "2025-09-29T10:45:00+05:30",
        nextAppt: "2025-10-08T10:00:00+05:30",
    },
    {
        id: "PAT-1007",
        name: "Priya Nair",
        gender: "Female",
        age: 27,
        dob: "1998-01-24",
        phone: "+91 98100 10007",
        email: "priya.nair@example.com",
        status: "Active",
        tags: ["ENT"],
        lastVisit: "2025-08-18T17:20:00+05:30",
        nextAppt: "2025-10-06T09:30:00+05:30",
    },
    {
        id: "PAT-1008",
        name: "Aman Gupta",
        gender: "Male",
        age: 38,
        dob: "1987-04-02",
        phone: "+91 98100 10008",
        email: "aman.gupta@example.com",
        status: "Inactive",
        tags: ["Orthopedic"],
        lastVisit: "2025-06-03T12:10:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1009",
        name: "Ishita Roy",
        gender: "Female",
        age: 31,
        dob: "1994-09-12",
        phone: "+91 98100 10009",
        email: "ishita.roy@example.com",
        status: "Active",
        tags: ["Insurance"],
        lastVisit: "2025-09-21T09:05:00+05:30",
        nextAppt: "2025-10-09T14:00:00+05:30",
    },
    {
        id: "PAT-1010",
        name: "Arjun Desai",
        gender: "Male",
        age: 45,
        dob: "1980-11-30",
        phone: "+91 98100 10010",
        email: "arjun.desai@example.com",
        status: "Active",
        tags: ["Asthma"],
        lastVisit: "2025-09-12T08:50:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1011",
        name: "Neha Bhat",
        gender: "Female",
        age: 36,
        dob: "1989-02-18",
        phone: "+91 98100 10011",
        email: "neha.bhat@example.com",
        status: "Active",
        tags: ["Derm"],
        lastVisit: "2025-09-26T19:20:00+05:30",
        nextAppt: "2025-10-10T16:10:00+05:30",
    },
    {
        id: "PAT-1012",
        name: "Siddharth Jain",
        gender: "Male",
        age: 28,
        dob: "1997-06-07",
        phone: "+91 98100 10012",
        email: "sid.jain@example.com",
        status: "Active",
        tags: ["Prime"],
        lastVisit: "2025-09-22T11:10:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1013",
        name: "Riya Kapoor",
        gender: "Female",
        age: 22,
        dob: "2003-10-01",
        phone: "+91 98100 10013",
        email: "riya.kapoor@example.com",
        status: "Active",
        tags: ["Peds"],
        lastVisit: "2025-10-01T15:30:00+05:30",
        nextAppt: "2025-10-15T10:00:00+05:30",
    },
    {
        id: "PAT-1014",
        name: "Kabir Arora",
        gender: "Male",
        age: 54,
        dob: "1971-12-21",
        phone: "+91 98100 10014",
        email: "kabir.arora@example.com",
        status: "Active",
        tags: ["Cardio", "Insurance"],
        lastVisit: "2025-09-05T09:40:00+05:30",
        nextAppt: "2025-10-20T09:00:00+05:30",
    },
    {
        id: "PAT-1015",
        name: "Simran Gill",
        gender: "Female",
        age: 34,
        dob: "1991-08-13",
        phone: "+91 98100 10015",
        email: "simran.gill@example.com",
        status: "Inactive",
        tags: [],
        lastVisit: "2025-05-10T18:00:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1016",
        name: "Aarav Joshi",
        gender: "Male",
        age: 19,
        dob: "2006-03-17",
        phone: "+91 98100 10016",
        email: "aarav.joshi@example.com",
        status: "Active",
        tags: ["Sports"],
        lastVisit: "2025-09-17T10:10:00+05:30",
        nextAppt: "2025-10-14T11:30:00+05:30",
    },
    {
        id: "PAT-1017",
        name: "Zoya Ahmed",
        gender: "Female",
        age: 40,
        dob: "1985-01-05",
        phone: "+91 98100 10017",
        email: "zoya.ahmed@example.com",
        status: "Active",
        tags: ["ENT", "Insurance"],
        lastVisit: "2025-09-08T12:35:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1018",
        name: "Mohit Rao",
        gender: "Male",
        age: 47,
        dob: "1978-06-29",
        phone: "+91 98100 10018",
        email: "mohit.rao@example.com",
        status: "Active",
        tags: ["Neuro"],
        lastVisit: "2025-08-29T14:05:00+05:30",
        nextAppt: "2025-10-19T15:00:00+05:30",
    },
    {
        id: "PAT-1019",
        name: "Tara Menon",
        gender: "Female",
        age: 60,
        dob: "1965-02-10",
        phone: "+91 98100 10019",
        email: "tara.menon@example.com",
        status: "Active",
        tags: ["Prime"],
        lastVisit: "2025-07-30T10:00:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1020",
        name: "Dev Patel",
        gender: "Male",
        age: 30,
        dob: "1995-09-05",
        phone: "+91 98100 10020",
        email: "dev.patel@example.com",
        status: "Active",
        tags: ["Allergy"],
        lastVisit: "2025-09-15T16:20:00+05:30",
        nextAppt: "2025-10-12T09:30:00+05:30",
    },
    {
        id: "PAT-1021",
        name: "Nisha Kulkarni",
        gender: "Female",
        age: 26,
        dob: "1999-04-23",
        phone: "+91 98100 10021",
        email: "nisha.kulkarni@example.com",
        status: "Active",
        tags: ["Derm"],
        lastVisit: "2025-09-03T11:00:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1022",
        name: "Harsh Vardhan",
        gender: "Male",
        age: 37,
        dob: "1988-10-11",
        phone: "+91 98100 10022",
        email: "harsh.vardhan@example.com",
        status: "Inactive",
        tags: [],
        lastVisit: "2025-03-18T13:50:00+05:30",
        nextAppt: null,
    },
    {
        id: "PAT-1023",
        name: "Aisha Qureshi",
        gender: "Female",
        age: 32,
        dob: "1993-01-29",
        phone: "+91 98100 10023",
        email: "aisha.qureshi@example.com",
        status: "Active",
        tags: ["Prime"],
        lastVisit: "2025-09-27T09:10:00+05:30",
        nextAppt: "2025-10-16T12:00:00+05:30",
    },
    {
        id: "PAT-1024",
        name: "Rohan Kapoor",
        gender: "Male",
        age: 43,
        dob: "1982-05-14",
        phone: "+91 98100 10024",
        email: "rohan.kapoor@example.com",
        status: "Active",
        tags: ["Cardio"],
        lastVisit: "2025-09-20T08:40:00+05:30",
        nextAppt: null,
    },
];

const DEMO_MODE = true;

// Formatting helpers (required formats)
const fmtDate = (iso) => {
    try { return new Date(iso).toDateString(); } catch { return ""; }
};
const fmtTime = (iso) => {
    try {
        const d = new Date(iso);
        const hh = String(d.getHours()).padStart(2, "0");
        const mm = String(d.getMinutes()).padStart(2, "0");
        const ss = String(d.getSeconds()).padStart(2, "0");
        return `${hh}:${mm}:${ss}hrs`;
    } catch { return ""; }
};
const fmtDateTime = (iso) => {
    try { return `${fmtDate(iso)} ${fmtTime(iso)}`; } catch { return ""; }
};

export default function PatientsList() {
    const navigate = useNavigate();
    const { search: qs } = useLocation();
    const searchRef = useRef(null);

    const [q, setQ] = useState("");
    const [status, setStatus] = useState("All");
    const [gender, setGender] = useState("All");
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return PATIENTS.filter((p) => {
            const str = [p.id, p.name, p.email, p.phone, p.tags.join(" "), p.status, p.gender].join(" ").toLowerCase();
            const okQ = tokens.length === 0 || tokens.every(t => str.includes(t));
            const okStatus = status === "All" || p.status === status;
            const okGender = gender === "All" || p.gender === gender;
            return okQ && okStatus && okGender;
        });
    }, [q, status, gender]);

    const total = PATIENTS.length;
    const totalActive = PATIENTS.filter(p => p.status === "Active").length;
    const totalUpcoming = PATIENTS.filter(p => !!p.nextAppt).length;

    const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const current = Math.min(page, pages);
    const slice = useMemo(() => {
        const start = (current - 1) * pageSize;
        return filtered.slice(start, start + pageSize);
    }, [filtered, current]);

    const onRowClick = (id) => navigate(`/patients/${id}`);
    const onClear = () => setQ("");

    const downloadJSON = () => {
        const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "patients.json";
        document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
    };

    return (
        <S.Page>
            <S.Breadcrumbs>
                <NavLink to="/home">Home</NavLink>
                <span>›</span>
                <NavLink to="/patients">Healthcare</NavLink>
                <span>›</span>
                <strong>Patients</strong>
            </S.Breadcrumbs>

            <S.HeaderBar>
                <div className="left">
                    <h1>Patients</h1>
                    <div className="meta">
                        <S.Badge title={`${total} total`}>{total} total</S.Badge>
                        <S.Badge title={`${totalActive} active`}>{totalActive} active</S.Badge>
                        <S.Badge title={`${totalUpcoming} with upcoming`}>{totalUpcoming} upcoming</S.Badge>
                    </div>
                </div>
                <div className="actions">
                    <S.Button
                        title="Demo mode"
                        disabled={DEMO_MODE}
                        aria-disabled={DEMO_MODE}
                    >
                        New Patient
                    </S.Button>
                    <S.Button onClick={downloadJSON}>Export JSON</S.Button>
                    <S.Button onClick={printSection}>Print</S.Button>
                </div>
            </S.HeaderBar>

            <S.UtilityRow>
                <S.SearchWrap>
                    <input
                        ref={searchRef}
                        type="text"
                        placeholder="Search name, phone, email, tag…"
                        value={q}
                        onChange={(e) => { setQ(e.target.value); setPage(1); }}
                        aria-label="Search patients"
                    />
                    {q.trim() && (
                        <button className="clear" onClick={onClear} aria-label="Clear search">×</button>
                    )}
                </S.SearchWrap>

                <S.Filters>
                    <label>
                        Status
                        <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }}>
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </label>
                    <label>
                        Gender
                        <select value={gender} onChange={(e) => { setGender(e.target.value); setPage(1); }}>
                            <option>All</option>
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                    </label>

                    <S.QuickLinks>
                        <NavLink to="/appointments" title="Appointments">Appointments</NavLink>
                        <NavLink to="/prescriptions" title="Prescriptions">Prescriptions</NavLink>
                        <NavLink to="/labs" title="Labs">Labs</NavLink>
                        <NavLink to="/imaging" title="Imaging">Imaging</NavLink>
                        <NavLink to="/reports/customers" title="Patient reports">Reports</NavLink>
                    </S.QuickLinks>
                </S.Filters>
            </S.UtilityRow>

            {/* PRINT TARGET */}
            <div id="search-print-area">
                <S.TableWrap>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Patient</th>
                                <th>Gender</th>
                                <th>DOB</th>
                                <th>Age</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Last Visit</th>
                                <th>Next Appt</th>
                                <th>Tags</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slice.map((p) => (
                                <tr key={p.id} onClick={() => onRowClick(p.id)} role="button">
                                    <td><Link to={`/patients/${p.id}`} onClick={(e) => e.stopPropagation()}>{p.id}</Link></td>
                                    <td className="name">
                                        <div className="nameWrap">
                                            <S.Avatar>{p.name.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase()}</S.Avatar>
                                            <div className="col">
                                                <Link to={`/patients/${p.id}`} onClick={(e) => e.stopPropagation()}>{p.name}</Link>
                                                <small>{p.email}</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{p.gender}</td>
                                    <td>{fmtDate(p.dob)}</td>
                                    <td>{p.age}</td>
                                    <td>{p.phone}</td>
                                    <td className="muted">{p.email}</td>
                                    <td>
                                        <S.Status $kind={p.status}>{p.status}</S.Status>
                                    </td>
                                    <td>
                                        {p.lastVisit ? (
                                            <div>
                                                <div>{fmtDate(p.lastVisit)}</div>
                                                <small className="muted">{fmtTime(p.lastVisit)}</small>
                                            </div>
                                        ) : <span className="muted">—</span>}
                                    </td>
                                    <td>
                                        {p.nextAppt ? (
                                            <div>
                                                <div>{fmtDate(p.nextAppt)}</div>
                                                <small className="muted">{fmtTime(p.nextAppt)}</small>
                                            </div>
                                        ) : <span className="muted">—</span>}
                                    </td>
                                    <td className="tags">
                                        {p.tags.length ? p.tags.map(t => <S.Tag key={t}>{t}</S.Tag>) : <span className="muted">—</span>}
                                    </td>
                                    <td className="rowActions" onClick={(e) => e.stopPropagation()}>
                                        <S.RowLinks>
                                            <NavLink to={`/patients/${p.id}`}>View</NavLink>
                                            <NavLink to={`/patients/${p.id}/visits`}>Visits</NavLink>
                                            <NavLink to={`/appointments?patient=${encodeURIComponent(p.id)}`}>Appts</NavLink>
                                            <NavLink to={`/prescriptions?patient=${encodeURIComponent(p.id)}`}>Rx</NavLink>
                                            <NavLink to={`/labs?patient=${encodeURIComponent(p.id)}`}>Labs</NavLink>
                                            <NavLink to={`/imaging?patient=${encodeURIComponent(p.id)}`}>Imaging</NavLink>
                                        </S.RowLinks>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filtered.length === 0 && (
                        <S.EmptyState>
                            <h3>No patients match your filters</h3>
                            <p>Try clearing the search or switching status/gender filters.</p>
                            <div className="links">
                                <NavLink to="/patients">Reset</NavLink>
                                <NavLink to="/help">Help Center</NavLink>
                            </div>
                        </S.EmptyState>
                    )}
                </S.TableWrap>
            </div>

            <S.PaginationBar>
                <div className="info">
                    Page {current} of {pages} · Showing {slice.length} of {filtered.length}
                </div>
                <div className="pager">
                    <S.Button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={current === 1}
                    >
                        Prev
                    </S.Button>
                    {Array.from({ length: pages }).slice(0, 6).map((_, i) => {
                        const n = i + 1;
                        return (
                            <S.Button
                                key={n}
                                onClick={() => setPage(n)}
                                data-active={n === current ? "true" : "false"}
                            >
                                {n}
                            </S.Button>
                        );
                    })}
                    <S.Button
                        onClick={() => setPage(p => Math.min(pages, p + 1))}
                        disabled={current === pages}
                    >
                        Next
                    </S.Button>
                </div>
            </S.PaginationBar>

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
        </S.Page>
    );
}
