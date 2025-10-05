import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { S } from "./styled";

/** ----------------------------------------------------------------
 * Display-only fixture (static). No writes, no persistence.
 * Keep IDs human-readable for deep links.
 * ---------------------------------------------------------------- */
const USERS = [
    {
        id: "USR-1001",
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        role: "Admin",
        status: "Active",
        createdISO: "2025-01-12T10:05:10+05:30",
        lastActiveISO: "2025-10-04T15:38:20+05:30",
    },
    {
        id: "USR-1002",
        name: "Ishita Rao",
        email: "ishita.rao@example.com",
        role: "Manager",
        status: "Active",
        createdISO: "2024-11-28T11:12:01+05:30",
        lastActiveISO: "2025-10-03T09:18:45+05:30",
    },
    {
        id: "USR-1003",
        name: "Kabir Mehta",
        email: "kabir.mehta@example.com",
        role: "Staff",
        status: "Pending",
        createdISO: "2025-09-04T08:32:47+05:30",
        lastActiveISO: "",
    },
    {
        id: "USR-1004",
        name: "Rhea Kapoor",
        email: "rhea.kapoor@example.com",
        role: "Viewer",
        status: "Suspended",
        createdISO: "2024-08-20T19:51:13+05:30",
        lastActiveISO: "2025-06-14T22:07:10+05:30",
    },
    {
        id: "USR-1005",
        name: "Dev Mishra",
        email: "dev.mishra@example.com",
        role: "Staff",
        status: "Active",
        createdISO: "2025-02-01T14:09:22+05:30",
        lastActiveISO: "2025-10-04T11:05:00+05:30",
    },
    {
        id: "USR-1006",
        name: "Meera Narang",
        email: "meera.narang@example.com",
        role: "Manager",
        status: "Active",
        createdISO: "2024-12-05T16:20:00+05:30",
        lastActiveISO: "2025-09-27T18:40:12+05:30",
    },
    {
        id: "USR-1007",
        name: "Arjun Verma",
        email: "arjun.verma@example.com",
        role: "Viewer",
        status: "Active",
        createdISO: "2023-11-02T12:40:35+05:30",
        lastActiveISO: "2025-10-02T08:10:03+05:30",
    },
    {
        id: "USR-1008",
        name: "Sara Qureshi",
        email: "sara.qureshi@example.com",
        role: "Staff",
        status: "Pending",
        createdISO: "2025-07-18T13:03:10+05:30",
        lastActiveISO: "",
    },
];

/** Date formatter per spec:
 * Date        -> "Sat Oct 04 2025"
 * Date+Time   -> "Sat Oct 04 2025 15:38:20hrs"
 * Time only   -> "15:38:20hrs"
 */
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MOS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmtDate(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    const dd = d.getDate().toString().padStart(2, "0");
    return `${DAYS[d.getDay()]} ${MOS[d.getMonth()]} ${dd} ${d.getFullYear()}`;
}
function fmtDateTime(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    const dd = d.getDate().toString().padStart(2, "0");
    const hh = d.getHours().toString().padStart(2, "0");
    const mm = d.getMinutes().toString().padStart(2, "0");
    const ss = d.getSeconds().toString().padStart(2, "0");
    return `${DAYS[d.getDay()]} ${MOS[d.getMonth()]} ${dd} ${d.getFullYear()} ${hh}:${mm}:${ss}hrs`;
}
function fmtTime(iso) {
    if (!iso) return "—";
    const d = new Date(iso);
    const hh = d.getHours().toString().padStart(2, "0");
    const mm = d.getMinutes().toString().padStart(2, "0");
    const ss = d.getSeconds().toString().padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
}

const STATUS = ["All", "Active", "Pending", "Suspended"];
const ROLES = ["All", "Admin", "Manager", "Staff", "Viewer"];

export default function AdminUsersPage() {
    const navigate = useNavigate();

    // UI state (display-only)
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("All");
    const [role, setRole] = useState("All");
    const [modal, setModal] = useState({ open: false, title: "", body: "" });

    const filtered = useMemo(() => {
        const s = q.trim().toLowerCase();
        return USERS.filter(u => {
            const statusOk = status === "All" ? true : u.status === status;
            const roleOk = role === "All" ? true : u.role === role;
            const text = `${u.name} ${u.email} ${u.id} ${u.role}`.toLowerCase();
            const match = s.length === 0 || text.includes(s);
            return statusOk && roleOk && match;
        });
    }, [q, status, role]);

    const openDisabledModal = (title) => {
        setModal({
            open: true,
            title,
            body: (
                <>
                    <p>This is a read-only showcase. Actions are intentionally disabled.</p>
                    <ul className="modalList">
                        <li>Use deep links to explore detail views.</li>
                        <li>Try navigation shortcuts from the sidebar or quick links below.</li>
                        <li>Print the table section via the toolbar.</li>
                    </ul>
                </>
            ),
        });
    };

    const handlePrint = () => {
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => {
            document.body.classList.remove("print-section-mode");
        }, 300);
    };

    return (
        <S.Wrapper>
            {/* print styles (scoped) */}
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
            <S.Breadcrumbs aria-label="Breadcrumbs">
                <span className="crumb"><NavLink to="/home" end>Home</NavLink></span>
                <span className="sep">/</span>
                <span className="crumb"><NavLink to="/admin/system-status" end>Admin</NavLink></span>
                <span className="sep">/</span>
                <span className="crumb current" aria-current="page">Users</span>
            </S.Breadcrumbs>

            {/* Header */}
            <S.Header>
                <div className="left">
                    <h1>Users</h1>
                    <p className="sub">Manage directory, roles, access and audit trails. Explore deep links and route structure.</p>
                </div>
                <div className="right">
                    <div className="btnRow">
                        <button className="btn subtle" onClick={() => navigate("/admin/roles")} title="Open Roles">
                            Roles
                        </button>
                        <button className="btn subtle" onClick={() => navigate("/admin/permissions")} title="Open Permissions">
                            Permissions
                        </button>
                        <button className="btn subtle" onClick={() => navigate("/admin/audit-log")} title="Open Audit Log">
                            Audit Log
                        </button>
                        <button className="btn subtle" onClick={() => navigate("/admin/feature-flags")} title="Feature Flags">
                            Feature Flags
                        </button>
                        <button className="btn subtle" onClick={() => navigate("/admin/integrations")} title="Integrations">
                            Integrations
                        </button>
                    </div>
                </div>
            </S.Header>

            {/* Toolbar */}
            <S.Toolbar role="region" aria-label="Users toolbar">
                <div className="searchCol">
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search users (name, email, id)"
                        aria-label="Search users"
                    />
                </div>
                <div className="filtersCol">
                    <div className="chips" role="tablist" aria-label="Status filter">
                        {STATUS.map((s) => (
                            <button
                                key={s}
                                className={`chip ${s === status ? "active" : ""}`}
                                onClick={() => setStatus(s)}
                                role="tab"
                                aria-selected={s === status}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                    <div className="selectWrap">
                        <label htmlFor="roleFilter">Role</label>
                        <select id="roleFilter" value={role} onChange={(e) => setRole(e.target.value)} aria-label="Role filter">
                            {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                </div>
                <div className="actionsCol">
                    <button
                        className="btn primary"
                        onClick={() => openDisabledModal("Add User")}
                        aria-disabled="true"
                        title="Read-only showcase"
                    >
                        + Add User
                    </button>
                    <button
                        className="btn"
                        onClick={() => openDisabledModal("Import CSV")}
                        aria-disabled="true"
                        title="Read-only showcase"
                    >
                        Import
                    </button>
                    <NavLink className="btn" to="/tools/import-export" end title="Export / Import">
                        Export
                    </NavLink>
                    <button className="btn" onClick={handlePrint} title="Print users section">Print</button>
                </div>
            </S.Toolbar>

            {/* Quick links (deep navigation) */}
            <S.QuickLinks role="navigation" aria-label="Admin quick links">
                <NavLink to="/admin/users" end>Users</NavLink>
                <NavLink to="/admin/roles" end>Roles</NavLink>
                <NavLink to="/admin/permissions" end>Permissions</NavLink>
                <NavLink to="/admin/audit-log" end>Audit Log</NavLink>
                <NavLink to="/admin/activity" end>Activity</NavLink>
                <NavLink to="/admin/system-status" end>System Status</NavLink>
                <NavLink to="/admin/feature-flags" end>Feature Flags</NavLink>
                <NavLink to="/admin/tenants" end>Tenants</NavLink>
                <NavLink to="/admin/integrations" end>Integrations</NavLink>
                <NavLink to="/admin/email-templates" end>Email Templates</NavLink>
                <NavLink to="/admin/sms-templates" end>SMS Templates</NavLink>
                <NavLink to="/settings/notifications" end>Notification Settings</NavLink>
            </S.QuickLinks>

            {/* Stats cards (static display) */}
            <S.StatsRow>
                <div className="card stat">
                    <div className="label">Total Users</div>
                    <div className="value">8</div>
                    <div className="hint">Directory size</div>
                </div>
                <div className="card stat">
                    <div className="label">Active</div>
                    <div className="value">5</div>
                    <div className="hint">Signed in recently</div>
                </div>
                <div className="card stat">
                    <div className="label">Pending</div>
                    <div className="value">2</div>
                    <div className="hint">Awaiting invite acceptance</div>
                </div>
                <div className="card stat">
                    <div className="label">Suspended</div>
                    <div className="value">1</div>
                    <div className="hint">Temporarily blocked</div>
                </div>
            </S.StatsRow>

            {/* Table (print target) */}
            <S.TableWrap id="search-print-area" role="region" aria-label="Users table">
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Last Active</th>
                            <th>Created</th>
                            <th style={{ width: 320 }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={7}>
                                    <div className="empty">
                                        <div className="title">No results</div>
                                        <div className="sub">Try changing filters or clearing the search.</div>
                                    </div>
                                </td>
                            </tr>
                        )}
                        {filtered.map((u) => (
                            <tr key={u.id}>
                                <td>
                                    <div className="userCell">
                                        <div className="avatar" aria-hidden="true">{u.name.split(" ").map(x => x[0]).slice(0, 2).join("").toUpperCase()}</div>
                                        <div className="userMeta">
                                            <NavLink className="name" to={`/admin/users/${u.id}`} title="Open user detail" end>
                                                {u.name}
                                            </NavLink>
                                            <div className="id">{u.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td><a className="link" href={`mailto:${u.email}`}>{u.email}</a></td>
                                <td>{u.role}</td>
                                <td>
                                    <span className={`pill ${u.status.toLowerCase()}`}>{u.status}</span>
                                </td>
                                <td>{u.lastActiveISO ? fmtDateTime(u.lastActiveISO) : "—"}</td>
                                <td>{fmtDate(u.createdISO)}</td>
                                <td>
                                    <div className="rowActions">
                                        <NavLink className="btnRow subtle" to={`/admin/users/${u.id}`} end>View</NavLink>
                                        <NavLink className="btnRow subtle" to={`/admin/audit-log?user=${u.id}`} end>Audit</NavLink>
                                        <NavLink className="btnRow subtle" to={`/admin/permissions?user=${u.id}`} end>Permissions</NavLink>
                                        <button
                                            className="btnRow"
                                            onClick={() => openDisabledModal(`Impersonate ${u.name}`)}
                                            aria-disabled="true"
                                            title="Read-only showcase"
                                        >
                                            Impersonate
                                        </button>
                                        <button
                                            className="btnRow danger"
                                            onClick={() => openDisabledModal(`Suspend ${u.name}`)}
                                            aria-disabled="true"
                                            title="Read-only showcase"
                                        >
                                            Suspend
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </S.TableWrap>

            {/* Footer helper links */}
            <S.FooterLinks>
                <div className="group">
                    <div className="title">Explore</div>
                    <div className="links">
                        <NavLink to="/reports/customers" end>Customer Report</NavLink>
                        <NavLink to="/reports/sales" end>Sales Report</NavLink>
                        <NavLink to="/reports/inventory" end>Inventory Report</NavLink>
                        <NavLink to="/tools/theme-tokens" end>Theme Tokens</NavLink>
                    </div>
                </div>
                <div className="group">
                    <div className="title">Shortcuts</div>
                    <div className="links">
                        <NavLink to="/settings/appearance" end>Appearance</NavLink>
                        <NavLink to="/settings/notifications" end>Notifications</NavLink>
                        <NavLink to="/settings/print-templates" end>Print Templates</NavLink>
                        <NavLink to="/help" end>Help Center</NavLink>
                    </div>
                </div>
            </S.FooterLinks>

            {/* Custom confirm / info modal */}
            {modal.open && (
                <S.Modal role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                    <div className="overlay" onClick={() => setModal({ open: false, title: "", body: "" })} />
                    <div className="box">
                        <div className="head">
                            <h3 id="modalTitle">{modal.title}</h3>
                        </div>
                        <div className="body">
                            {modal.body}
                        </div>
                        <div className="foot">
                            <button className="btn" onClick={() => setModal({ open: false, title: "", body: "" })}>Close</button>
                        </div>
                    </div>
                </S.Modal>
            )}
        </S.Wrapper>
    );
}
