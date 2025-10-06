import React, { useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Styled } from "./styled";

/** ----------------------------------------------------------------------------
 *  Date helpers (format must be EXACT )
 *  ---------------------------------------------------------------------------- */
const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => `${DAY[d.getDay()]} ${MON[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
const fmtTime = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
const fmtDateTime = (d) => `${fmtDate(d)} ${fmtTime(d)}`;

// iCal helpers
const icsDate = (d) => {
    const yyyy = d.getFullYear();
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const hh = pad(d.getHours());
    const mi = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    return `${yyyy}${mm}${dd}T${hh}${mi}${ss}`;
};

/** ----------------------------------------------------------------------------
 *  Demo events (display-only)
 *  ---------------------------------------------------------------------------- */
const DEMO_EVENTS = [
    {
        id: "APP-1001",
        title: "Consultation · Fever & Headache",
        patient: { id: "PAT-2001", name: "Riya Sharma" },
        doctor: { id: "USR-88", name: "Dr. A. Kapoor" },
        room: "OPD 3",
        status: "confirmed",
        startISO: "2025-10-04T09:30:00+05:30",
        endISO: "2025-10-04T10:00:00+05:30",
    },
    {
        id: "APP-1002",
        title: "Follow-up · BP Review",
        patient: { id: "PAT-2002", name: "Manish Gupta" },
        doctor: { id: "USR-92", name: "Dr. S. Malik" },
        room: "OPD 1",
        status: "confirmed",
        startISO: "2025-10-04T11:00:00+05:30",
        endISO: "2025-10-04T11:20:00+05:30",
    },
    {
        id: "APP-1003",
        title: "New Patient Registration",
        patient: { id: "PAT-2003", name: "Ananya Bose" },
        doctor: { id: "USR-88", name: "Dr. A. Kapoor" },
        room: "Reception",
        status: "tentative",
        startISO: "2025-10-05T10:30:00+05:30",
        endISO: "2025-10-05T10:45:00+05:30",
    },
    {
        id: "APP-1004",
        title: "Lab Report Discussion",
        patient: { id: "PAT-2004", name: "Raghav Verma" },
        doctor: { id: "USR-88", name: "Dr. A. Kapoor" },
        room: "OPD 2",
        status: "confirmed",
        startISO: "2025-10-06T16:00:00+05:30",
        endISO: "2025-10-06T16:20:00+05:30",
    },
    {
        id: "APP-1005",
        title: "Prescription Review",
        patient: { id: "PAT-2005", name: "Meera Saxena" },
        doctor: { id: "USR-92", name: "Dr. S. Malik" },
        room: "Telehealth",
        status: "cancelled",
        startISO: "2025-10-07T12:00:00+05:30",
        endISO: "2025-10-07T12:30:00+05:30",
    },
    {
        id: "APP-1006",
        title: "Diabetes Diet Counselling",
        patient: { id: "PAT-2006", name: "Sanjay Patil" },
        doctor: { id: "USR-95", name: "Dietician P. Rao" },
        room: "Nutrition",
        status: "confirmed",
        startISO: "2025-10-08T09:15:00+05:30",
        endISO: "2025-10-08T09:45:00+05:30",
    },
];

/** ----------------------------------------------------------------------------
 *  Calendar grid (month) for a given year & month
 *  ---------------------------------------------------------------------------- */
function buildMonthGrid(year, month /* 0-based */) {
    // Start from Sunday; produce 6 rows x 7 cols = 42 cells
    const first = new Date(year, month, 1);
    const startOffset = first.getDay(); // 0..6 (Sun..Sat)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells = [];
    let dayNum = 1 - startOffset;
    for (let i = 0; i < 42; i++, dayNum++) {
        cells.push(new Date(year, month, dayNum));
    }
    return cells;
}

/** ----------------------------------------------------------------------------
 *  ICS file generation (download)
 *  ---------------------------------------------------------------------------- */
function exportICS(events) {
    const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Demo ERP//Appointments//EN",
    ];
    events.forEach((e) => {
        const s = new Date(e.startISO);
        const t = new Date(e.endISO);
        lines.push("BEGIN:VEVENT");
        lines.push(`UID:${e.id}@demo-erp`);
        lines.push(`DTSTAMP:${icsDate(new Date())}`);
        lines.push(`DTSTART:${icsDate(s)}`);
        lines.push(`DTEND:${icsDate(t)}`);
        lines.push(`SUMMARY:${e.title}`);
        lines.push(`LOCATION:${e.room || ""}`);
        lines.push(`DESCRIPTION:Patient ${e.patient.name} with ${e.doctor.name}`);
        lines.push("END:VEVENT");
    });
    lines.push("END:VCALENDAR");
    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "appointments.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

/** ----------------------------------------------------------------------------
 *  Component
 *  ---------------------------------------------------------------------------- */
const AppointmentCalendarPage = () => {
    // Default to October 2025 to showcase the month with demo data
    const [year, setYear] = useState(2025);
    const [month, setMonth] = useState(9); // 0=Jan, 9=Oct
    const [view, setView] = useState("month"); // 'month' | 'day'
    const [selectedDate, setSelectedDate] = useState(() => new Date(2025, 9, 4));
    const [copied, setCopied] = useState(false);
    const location = useLocation();

    const grid = useMemo(() => buildMonthGrid(year, month), [year, month]);
    const monthLabel = `${MON[month]} ${year}`;

    const eventsByDay = useMemo(() => {
        const map = new Map();
        DEMO_EVENTS.forEach((e) => {
            const d = new Date(e.startISO);
            const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(e);
        });
        return map;
    }, []);

    const isSameDay = (a, b) =>
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate();

    const today = new Date();
    const onPrev = () => {
        if (view === "month") {
            let y = year, m = month - 1;
            if (m < 0) { m = 11; y -= 1; }
            setYear(y); setMonth(m);
        } else {
            const d = new Date(selectedDate); d.setDate(d.getDate() - 1); setSelectedDate(d);
        }
    };
    const onNext = () => {
        if (view === "month") {
            let y = year, m = month + 1;
            if (m > 11) { m = 0; y += 1; }
            setYear(y); setMonth(m);
        } else {
            const d = new Date(selectedDate); d.setDate(d.getDate() + 1); setSelectedDate(d);
        }
    };
    const onToday = () => {
        if (view === "month") {
            setYear(today.getFullYear()); setMonth(today.getMonth());
        } else {
            setSelectedDate(new Date());
        }
    };

    const dayEvents = useMemo(() => {
        const key = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
        return (eventsByDay.get(key) || []).slice().sort((a, b) => +new Date(a.startISO) - +new Date(b.startISO));
    }, [eventsByDay, selectedDate]);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch { }
    };

    const printSection = () => {
        const body = document.body;
        body.classList.add("print-section-mode");
        window.AnimationFrame(() => {
            window.print();
            window.setTimeout(() => body.classList.remove("print-section-mode"), 300);
        });
    };

    return (
        <Styled.Page>
            {/* Print CSS   */}
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

            {/* Header / Toolbar */}
            <Styled.Toolbar>
                <div className="left">
                    <div className="titleBlock">
                        <h1>Appointment Calendar</h1>
                        <span className="sub">
                            Deep-link friendly · Display-only · {fmtDate(new Date())}
                        </span>
                    </div>

                    <div className="segment">
                        <button
                            className={view === "month" ? "on" : ""}
                            onClick={() => setView("month")}
                            aria-pressed={view === "month"}
                            title="Month view"
                        >Month</button>
                        <button
                            className={view === "day" ? "on" : ""}
                            onClick={() => setView("day")}
                            aria-pressed={view === "day"}
                            title="Day agenda view"
                        >Day</button>
                    </div>

                    <div className="nav">
                        <button onClick={onPrev} title="Previous">
                            ‹
                        </button>
                        <button onClick={onToday} title="Go to Today">Today</button>
                        <button onClick={onNext} title="Next">
                            ›
                        </button>
                        <span className="period">
                            {view === "month" ? monthLabel : fmtDate(selectedDate)}
                        </span>
                    </div>
                </div>

                <div className="right">
                    <div className="links">
                        <Link to="/appointments" className="link">All Appointments</Link>
                        <Link to="/patients" className="link">Patients</Link>
                        <Link to="/prescriptions" className="link">Prescriptions</Link>
                        <Link to="/labs" className="link">Labs</Link>
                        <Link to="/imaging" className="link">Imaging</Link>
                        <Link to="/reports/sales" className="link">Reports</Link>
                        <Link to="/help" className="link">Help</Link>
                    </div>

                    <div className="actions">
                        <button disabled title="Demo only">New Appointment</button>
                        <button onClick={() => exportICS(DEMO_EVENTS)} title="Export iCal">
                            Export ICS
                        </button>
                        <button onClick={copyLink} title="Copy deep link">Copy Link</button>
                        <button onClick={printSection} title="Print this view">Print</button>
                    </div>
                    {copied && <span className="copied">Link copied</span>}
                </div>
            </Styled.Toolbar>

            <Styled.Legend role="note" aria-label="Legend">
                <span className="dot confirmed"></span> Confirmed
                <span className="dot tentative"></span> Tentative
                <span className="dot cancelled"></span> Cancelled
            </Styled.Legend>

            {/* Printable area */}
            <div id="search-print-area">
                {view === "month" ? (
                    <MonthGrid
                        year={year}
                        month={month}
                        grid={grid}
                        selectedDate={selectedDate}
                        onSelectDate={setSelectedDate}
                        isSameDay={isSameDay}
                        eventsByDay={eventsByDay}
                    />
                ) : (
                    <DayAgenda
                        date={selectedDate}
                        events={dayEvents}
                    />
                )}
            </div>

            <Styled.FooterNav>
                <div className="group">
                    <span>Quick jump:</span>
                    <Link to="/appointments" className="lnk">Appointments</Link>
                    <Link to="/appointments/APP-1001" className="lnk">/appointments/APP-1001</Link>
                    <Link to="/patients/PAT-2001" className="lnk">/patients/PAT-2001</Link>
                    <Link to="/admin/users/USR-88" className="lnk">/admin/users/USR-88</Link>
                    <Link to="/reports/inventory" className="lnk">/reports/inventory</Link>
                    <Link to="/settings/appearance" className="lnk">/settings/appearance</Link>
                    <Link to="/tools/import-export" className="lnk">/tools/import-export</Link>
                </div>
            </Styled.FooterNav>
        </Styled.Page>
    );
};

/** ----------------------------------------------------------------------------
 *  Month Grid
 *  ---------------------------------------------------------------------------- */
function MonthGrid({ year, month, grid, selectedDate, onSelectDate, isSameDay, eventsByDay }) {
    return (
        <Styled.Month>
            <div className="head">
                {DAY.map((d) => (
                    <div key={d} className="colHead">{d}</div>
                ))}
            </div>
            <div className="grid" role="grid" aria-label="Month grid">
                {grid.map((d, idx) => {
                    const inMonth = d.getMonth() === month && d.getFullYear() === year;
                    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
                    const list = eventsByDay.get(key) || [];
                    const active = isSameDay(d, selectedDate);
                    return (
                        <div
                            key={idx}
                            className={`cell ${inMonth ? "" : "dim"} ${active ? "active" : ""}`}
                            role="gridcell"
                            aria-selected={active}
                            onClick={() => onSelectDate(new Date(d))}
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelectDate(new Date(d))}
                        >
                            <div className="date">{pad(d.getDate())}</div>
                            {list.length > 0 && (
                                <div className="events">
                                    {list.map((e) => (
                                        <EventChip key={e.id} e={e} />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </Styled.Month>
    );
}

/** ----------------------------------------------------------------------------
 *  Day Agenda
 *  ---------------------------------------------------------------------------- */
function DayAgenda({ date, events }) {
    return (
        <Styled.Day>
            <div className="dayHead">
                <div className="when">
                    <h2>{fmtDate(date)}</h2>
                    <div className="meta">Generated at {fmtDateTime(new Date())}</div>
                </div>
                <div className="links">
                    <Link to="/appointments" className="lnk">Back to Appointments</Link>
                    <Link to="/appointments/calendar" className="lnk">Calendar</Link>
                    <Link to="/patients" className="lnk">Patients</Link>
                    <Link to="/help" className="lnk">Help</Link>
                </div>
            </div>

            <div className="list">
                {events.length === 0 ? (
                    <div className="empty">No appointments on this day.</div>
                ) : (
                    events.map((e) => (
                        <div key={e.id} className={`row ${e.status}`}>
                            <div className="time">
                                <span>{fmtTime(new Date(e.startISO))}</span> – <span>{fmtTime(new Date(e.endISO))}</span>
                            </div>
                            <div className="summary">
                                <Link to={`/appointments/${e.id}`} className="title">{e.title}</Link>
                                <div className="meta">
                                    <span>Patient:&nbsp;<Link to={`/patients/${e.patient.id}`}>{e.patient.name}</Link></span>
                                    <span>Doctor:&nbsp;<Link to={`/admin/users/${e.doctor.id}`}>{e.doctor.name}</Link></span>
                                    {e.room ? <span>Room: {e.room}</span> : null}
                                </div>
                            </div>
                            <div className="actions">
                                <Link className="btn" to={`/appointments/${e.id}`}>View</Link>
                                <Link className="btn" to={`/prescriptions`}>Prescription</Link>
                                <Link className="btn" to={`/labs`}>Lab</Link>
                                <Link className="btn" to={`/imaging`}>Imaging</Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Styled.Day>
    );
}

/** ----------------------------------------------------------------------------
 *  Event Chip (used in month cells)
 *  ---------------------------------------------------------------------------- */
function EventChip({ e }) {
    const s = new Date(e.startISO);
    const t = new Date(e.endISO);
    return (
        <Link to={`/appointments/${e.id}`} className={`chip ${e.status}`} title={`${fmtTime(s)} – ${fmtTime(t)} · ${e.patient.name}`}>
            <span className="time">{fmtTime(s)}–{fmtTime(t)}</span>
            <span className="txt">{e.patient.name}</span>
        </Link>
    );
}

export default AppointmentCalendarPage;
