import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { StyledBackups as S } from "./styled";

/** Demo-only flag */
const DEMO_MODE = true;

/** Date formatting helpers (strict formats) */
const dd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const mm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad2 = (n) => (n < 10 ? "0" + n : "" + n);

function fmtDate(iso) {
    const d = new Date(iso);
    return `${dd[d.getDay()]} ${mm[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
}
function fmtDateTime(iso) {
    const d = new Date(iso);
    const h = pad2(d.getHours());
    const m = pad2(d.getMinutes());
    const s = pad2(d.getSeconds());
    return `${fmtDate(iso)} ${h}:${m}:${s}hrs`;
}
function fmtTime(iso) {
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
}

/** Static fixture: backups list (display-only) */
const FIXTURE_BACKUPS = [
    {
        id: "BKP-2025-10-03-0200",
        type: "Full",
        size: "4.2 GB",
        createdAt: "2025-10-03T02:00:05+05:30",
        completedAt: "2025-10-03T02:08:41+05:30",
        duration: "00:08:36",
        status: "Success",
        location: "S3://prod-erptheme/backups/",
        notes: "Scheduled full snapshot (daily@02:00).",
    },
    {
        id: "BKP-2025-10-02-0200",
        type: "Full",
        size: "4.2 GB",
        createdAt: "2025-10-02T02:00:11+05:30",
        completedAt: "2025-10-02T02:08:37+05:30",
        duration: "00:08:26",
        status: "Success",
        location: "S3://prod-erptheme/backups/",
        notes: "Scheduled full snapshot (daily@02:00).",
    },
    {
        id: "BKP-2025-10-01-0200",
        type: "Full",
        size: "4.1 GB",
        createdAt: "2025-10-01T02:00:03+05:30",
        completedAt: "2025-10-01T02:07:58+05:30",
        duration: "00:07:55",
        status: "Success",
        location: "S3://prod-erptheme/backups/",
        notes: "Scheduled full snapshot (daily@02:00).",
    },
    {
        id: "BKP-2025-09-30-0200",
        type: "Full",
        size: "4.1 GB",
        createdAt: "2025-09-30T02:00:02+05:30",
        completedAt: "2025-09-30T02:07:44+05:30",
        duration: "00:07:42",
        status: "Success",
        location: "S3://prod-erptheme/backups/",
        notes: "Scheduled full snapshot (daily@02:00).",
    },
    {
        id: "BKP-2025-09-29-0200",
        type: "Full",
        size: "4.1 GB",
        createdAt: "2025-09-29T02:00:07+05:30",
        completedAt: "2025-09-29T02:07:51+05:30",
        duration: "00:07:44",
        status: "Success",
        location: "S3://prod-erptheme/backups/",
        notes: "Scheduled full snapshot (daily@02:00).",
    },
    {
        id: "BKP-2025-09-28-0200",
        type: "Full",
        size: "4.0 GB",
        createdAt: "2025-09-28T02:00:09+05:30",
        completedAt: "2025-09-28T02:07:33+05:30",
        duration: "00:07:24",
        status: "Success",
        location: "S3://prod-erptheme/backups/",
        notes: "Scheduled full snapshot (daily@02:00).",
    },
    {
        id: "BKP-2025-09-27-0200",
        type: "Full",
        size: "4.0 GB",
        createdAt: "2025-09-27T02:00:04+05:30",
        completedAt: "2025-09-27T02:07:21+05:30",
        duration: "00:07:17",
        status: "Success",
        location: "S3://prod-erptheme/backups/",
        notes: "Scheduled full snapshot (daily@02:00).",
    },
    {
        id: "BKP-2025-09-26-0200",
        type: "Full",
        size: "3.9 GB",
        createdAt: "2025-09-26T02:00:03+05:30",
        completedAt: "2025-09-26T02:06:59+05:30",
        duration: "00:06:56",
        status: "Success",
        location: "S3://prod-erptheme/backups/",
        notes: "Scheduled full snapshot (daily@02:00).",
    }
];

/** Lightweight demo modal */
const DemoModal = ({ open, onClose, title = "Action unavailable", message = "This is a live demo. Write actions are disabled." }) => {
    if (!open) return null;
    return (
        <S.ModalOverlay role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
            <S.ModalCard>
                <h3 id="demo-modal-title">{title}</h3>
                <p>{message}</p>
                <div className="actions">
                    <button onClick={onClose} autoFocus>OK</button>
                </div>
            </S.ModalCard>
        </S.ModalOverlay>
    );
};

export default function SettingsBackups() {
    const { hash } = useLocation();
    const [q, setQ] = useState("");
    const [demoOpen, setDemoOpen] = useState(false);

    const data = useMemo(() => {
        if (!q.trim()) return FIXTURE_BACKUPS;
        const t = q.trim().toLowerCase();
        return FIXTURE_BACKUPS.filter(b =>
            (b.id + " " + b.type + " " + b.status + " " + b.location).toLowerCase().includes(t)
        );
    }, [q]);

    /** Print only the table section using the provided CSS approach */
    const handlePrint = useCallback(() => {
        const body = document.body;
        body.classList.add("print-section-mode");
        // Let styles apply first frame
        requestAnimationFrame(() => {
            window.print();
        });
        const onAfter = () => {
            body.classList.remove("print-section-mode");
            window.removeEventListener("afterprint", onAfter);
        };
        window.addEventListener("afterprint", onAfter);
    }, []);

    // Auto-scroll to backup row if hash deep link present
    useEffect(() => {
        if (!hash) return;
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.classList.add("row-focus");
            setTimeout(() => el.classList.remove("row-focus"), 1200);
        }
    }, [hash]);

    // Derived display stats (pre-computed look)
    const total = FIXTURE_BACKUPS.length;
    const last = FIXTURE_BACKUPS[0];
    const lastCompleted = last?.completedAt ? fmtDateTime(last.completedAt) : "-";
    const nextPlanned = "Sun Oct 05 2025 02:00:00hrs"; // static display for demo
    const retention = "30 daily snapshots";

    return (
        <S.Wrap>
            {/* Print CSS (as provided) */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }

          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            {/* Breadcrumbs */}
            <S.Breadcrumbs>
                <NavLink to="/settings" end>Settings</NavLink>
                <span>/</span>
                <strong>Backups</strong>
            </S.Breadcrumbs>

            {/* Page header / actions */}
            <S.HeaderBar>
                <div className="title">
                    <h1>Backups</h1>
                    <p>Automated snapshots of configuration & reference datasets for disaster-readiness.</p>
                </div>
                <div className="actions">
                    <button
                        onClick={() => setDemoOpen(true)}
                        aria-disabled={DEMO_MODE}
                        title="Demo mode: action disabled"
                    >
                        Create Backup
                    </button>
                    <Link to="/tools/import-export" className="ghost" title="Open Import/Export tool">
                        Import / Export
                    </Link>
                    <button className="ghost" onClick={handlePrint} title="Print this list">
                        Print List
                    </button>
                    <Link to="/help" className="ghost" title="Open Help Center">
                        Docs
                    </Link>
                </div>
            </S.HeaderBar>

            {/* Top meta / stats */}
            <S.StatsGrid>
                <S.StatCard>
                    <div className="k">Snapshots</div>
                    <div className="v">{total}</div>
                    <div className="s">retained</div>
                </S.StatCard>
                <S.StatCard>
                    <div className="k">Storage Used</div>
                    <div className="v">~4.2 GB</div>
                    <div className="s">compressed</div>
                </S.StatCard>
                <S.StatCard>
                    <div className="k">Last Backup</div>
                    <div className="v">{lastCompleted}</div>
                    <div className="s tag ok">Success</div>
                </S.StatCard>
                <S.StatCard>
                    <div className="k">Next Scheduled</div>
                    <div className="v">{nextPlanned}</div>
                    <div className="s">daily @ 02:00</div>
                </S.StatCard>
                <S.StatCard>
                    <div className="k">Retention</div>
                    <div className="v">{retention}</div>
                    <div className="s">
                        <Link to="/settings/backups#retention">view policy</Link>
                    </div>
                </S.StatCard>
            </S.StatsGrid>

            {/* Policy & destinations */}
            <S.Row>
                <S.Card>
                    <h3 id="retention">Schedule & Retention</h3>
                    <ul className="bullets">
                        <li>Schedule: Daily at 02:00hrs (IST)</li>
                        <li>Policy: {retention}</li>
                        <li>Format: tar + gzip, integrity hash (SHA-256)</li>
                        <li>Scope: settings, templates, reference catalogs, metadata</li>
                    </ul>
                    <div className="inline-links">
                        <Link to="/settings/print-templates" title="Print templates">Print Templates</Link>
                        <Link to="/settings/numbering" title="Document numbering">Document Numbering</Link>
                        <Link to="/settings/tokens" title="API tokens">API Tokens</Link>
                        <Link to="/settings/notifications" title="Notifications">Notifications</Link>
                    </div>
                </S.Card>

                <S.Card>
                    <h3>Destinations</h3>
                    <div className="dest">
                        <div className="item">
                            <div className="k">Primary</div>
                            <div className="v">S3 (ap-south-1)</div>
                            <div className="s">Lifecycle: 30 days</div>
                        </div>
                        <div className="item">
                            <div className="k">Secondary</div>
                            <div className="v">Local (artifact store)</div>
                            <div className="s">Pruned: 7 days</div>
                        </div>
                    </div>
                    <div className="inline-links">
                        <Link to="/settings/backups#dest">view config</Link>
                        <Link to="/admin/system-status" title="System Status">System Status</Link>
                        <Link to="/admin/activity" title="Recent Activity">Activity</Link>
                    </div>
                </S.Card>
            </S.Row>

            {/* Search + table */}
            <S.TableCard>
                <div className="table-head">
                    <div className="left">
                        <h3>Snapshots</h3>
                        <p>Browse recent backups. Use quick search to filter by ID, type, status, or location.</p>
                    </div>
                    <div className="right">
                        <input
                            type="text"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search backups (e.g. Success, S3, Full)"
                            aria-label="Search backups"
                        />
                    </div>
                </div>

                <div id="search-print-area">
                    <S.TableWrap>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Type</th>
                                    <th>Size</th>
                                    <th>Created</th>
                                    <th>Completed</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                    <th>Location</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(row => (
                                    <tr key={row.id} id={row.id}>
                                        <td className="mono">
                                            <a href={`#${row.id}`} title="Deep link to row">{row.id}</a>
                                        </td>
                                        <td>{row.type}</td>
                                        <td>{row.size}</td>
                                        <td>{fmtDateTime(row.createdAt)}</td>
                                        <td>{fmtDateTime(row.completedAt)}</td>
                                        <td className="mono">{row.duration}</td>
                                        <td>
                                            <span className={`tag ${row.status.toLowerCase()}`}>{row.status}</span>
                                        </td>
                                        <td className="truncate" title={row.location}>{row.location}</td>
                                        <td className="actions">
                                            <Link to={`/tools/import-export`} className="small" title="Open in Import/Export">View</Link>
                                            <button className="small ghost" onClick={() => setDemoOpen(true)} title="Demo mode: restore disabled">
                                                Restore
                                            </button>
                                            <button className="small ghost" onClick={() => setDemoOpen(true)} title="Demo mode: delete disabled">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </S.TableWrap>
                </div>

                <div className="table-foot">
                    <div className="links">
                        <Link to="/settings">Settings Home</Link>
                        <Link to="/tools/import-export">Import / Export</Link>
                        <Link to="/settings/backups">Backups</Link>
                        <Link to="/admin/audit-log">Audit Log</Link>
                    </div>
                    <div className="page">Page 1 of 1</div>
                </div>
            </S.TableCard>

            {/* Secondary navigation */}
            <S.SectionNav>
                <NavLink to="/settings/appearance" end>Appearance</NavLink>
                <NavLink to="/settings/profile" end>Profile</NavLink>
                <NavLink to="/settings/print-templates" end>Print Templates</NavLink>
                <NavLink to="/settings/numbering" end>Numbering</NavLink>
                <NavLink to="/settings/tax" end>Tax</NavLink>
                <NavLink to="/settings/units" end>Units</NavLink>
                <NavLink to="/settings/currencies" end>Currencies</NavLink>
                <NavLink to="/settings/locations" end>Locations</NavLink>
                <NavLink to="/settings/warehouses" end>Warehouses</NavLink>
                <NavLink to="/settings/notifications" end>Notifications</NavLink>
                <NavLink to="/settings/webhooks" end>Webhooks</NavLink>
            </S.SectionNav>

            <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
        </S.Wrap>
    );
}
