import React, { useCallback, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/** -------------------------------------------------------
 *  Display-only, premium user detail page
 *  - Wide (no parent max-width)
 *  - Uses theme tokens from index.css
 *  - Rich navigation links across the app
 *  - Custom confirm modal (no browser alert)
 *  - Print only the main section (#search-print-area)
 *  - Dates follow:
 *      Date         → Sat Oct 04 2025
 *      Date + Time  → Sat Oct 04 2025 15:38:20hrs
 *      Time only    → 15:38:20hrs
 *  ----------------------------------------------------- */

const DEMO = true;

/* --- date helpers (display-only) --- */
function pad(n) { return String(n).padStart(2, "0"); }
function fmtDate(iso) {
    const d = new Date(iso);
    return d.toDateString(); // e.g., Sat Oct 04 2025
}
function fmtDateTime(iso) {
    const d = new Date(iso);
    const date = d.toDateString();
    const time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
    return `${date} ${time}`;
}
function fmtTime(iso) {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
}

/* --- tiny confirm modal --- */
const ConfirmModal = ({ title, message, confirmText = "Confirm", cancelText = "Cancel", onConfirm, onClose }) => {
    return (
        <Styled.ModalBackdrop role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <Styled.ModalCard className="card">
                <h3 id="confirm-title">{title}</h3>
                <p className="muted">{message}</p>
                <div className="modal-actions">
                    <button onClick={onClose} className="btn-secondary">{cancelText}</button>
                    <button onClick={onConfirm} className="btn-danger">{confirmText}</button>
                </div>
            </Styled.ModalCard>
        </Styled.ModalBackdrop>
    );
};

const AdminUserDetailPage = () => {
    const { userId = "USR-1001" } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    // Demo fixture (display-only)
    const user = useMemo(() => ({
        id: userId,
        name: "Aarav Malhotra",
        email: "aarav.malhotra@example.com",
        phone: "+91-98765-43210",
        status: "Active",
        avatar: "https://ui-avatars.com/api/?name=Aarav+Malhotra&background=111318&color=fff",
        role: "Admin",
        roles: ["Admin", "Approver", "Analytics"],
        teams: ["Core Ops", "Revenue"],
        timezone: "Asia/Kolkata",
        createdAt: "2025-08-12T09:30:12+05:30",
        updatedAt: "2025-10-02T18:21:49+05:30",
        lastActiveAt: "2025-10-04T15:38:20+05:30",
        manager: { id: "USR-1002", name: "S. Iyer" },
        security: {
            twoFA: "Enabled",
            sessions: [
                { id: "SESS-01", device: "MacBook Pro", browser: "Chrome 128", ip: "103.24.55.10", at: "2025-10-04T15:38:20+05:30", location: "Bengaluru, IN" },
                { id: "SESS-02", device: "iPhone 15", browser: "Safari iOS", ip: "10.0.0.2", at: "2025-10-03T12:08:04+05:30", location: "Mumbai, IN" },
            ],
            lastPasswordReset: "2025-09-10T11:20:00+05:30",
            recoveryEmail: "aarav.backup@example.com",
            loginAlerts: "On",
            allowedIPs: ["103.24.55.0/24", "10.0.0.0/8"],
        },
        permissionsSummary: [
            { group: "Users", read: true, write: false, approve: true, export: true },
            { group: "Orders", read: true, write: true, approve: true, export: true },
            { group: "Invoices", read: true, write: true, approve: false, export: true },
            { group: "Reports", read: true, write: false, approve: false, export: true },
            { group: "Settings", read: true, write: true, approve: true, export: false },
        ],
        quickLinks: [
            { to: "/admin/users", label: "Back to Users" },
            { to: "/admin/roles", label: "Manage Roles" },
            { to: "/admin/permissions", label: "Permissions Matrix" },
            { to: "/admin/audit-log", label: "Audit Log" },
            { to: "/admin/system-status", label: "System Status" },
            { to: "/reports", label: "Reports Home" },
            { to: "/reports/finance", label: "Finance Reports" },
            { to: "/settings/profile", label: "My Profile" },
            { to: "/settings/appearance", label: "Appearance" },
            { to: "/tools/import-export", label: "Import / Export" },
        ],
        contributions: [
            { label: "Orders Created", value: 58, link: "/orders" },
            { label: "Invoices Issued", value: 31, link: "/invoices" },
            { label: "Vendors Onboarded", value: 12, link: "/vendors" },
            { label: "Shipments Dispatched", value: 22, link: "/shipments" },
        ],
        activity: [
            { id: "A-1007", at: "2025-10-04T14:55:40+05:30", text: "Approved invoice INV-2041", link: "/invoices/INV-2041" },
            { id: "A-1006", at: "2025-10-04T11:20:10+05:30", text: "Edited purchase order PO-9012", link: "/purchase-orders/PO-9012" },
            { id: "A-1005", at: "2025-10-03T17:08:30+05:30", text: "Created order ORD-3001", link: "/orders/ORD-3001" },
            { id: "A-1004", at: "2025-10-02T09:45:22+05:30", text: "Updated user permissions", link: "/admin/permissions" },
            { id: "A-1003", at: "2025-09-30T18:15:01+05:30", text: "Added vendor VND-881", link: "/vendors/VND-881" },
            { id: "A-1002", at: "2025-09-29T12:00:00+05:30", text: "Viewed finance report", link: "/reports/finance" },
        ],
    }), [userId]);

    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmConfig, setConfirmConfig] = useState({});

    const openConfirm = useCallback((title, message, confirmText = "Confirm") => {
        setConfirmConfig({ title, message, confirmText });
        setShowConfirm(true);
    }, []);
    const closeConfirm = useCallback(() => setShowConfirm(false), []);

    const handleDanger = useCallback((actionLabel) => {
        openConfirm(actionLabel, "This is a demo preview. Actions are disabled here.");
    }, [openConfirm]);

    const copyDeepLink = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
        } catch {
            /* ignore */
        }
    }, []);

    const doPrint = useCallback(() => {
        const cls = "print-section-mode";
        document.body.classList.add(cls);
        try { window.print(); } finally { document.body.classList.remove(cls); }
    }, []);

    const goToManager = useCallback(() => navigate(`/admin/users/${user.manager.id}`), [navigate, user]);

    return (
        <Styled.Page>
            {/* Print rules (section-only) */}
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
            <div className="breadcrumbs">
                <NavLink to="/admin">Admin</NavLink>
                <span>/</span>
                <NavLink to="/admin/users">Users</NavLink>
                <span>/</span>
                <span className="current">{user.name}</span>
            </div>

            {/* Header actions */}
            <div className="page-actions">
                <div className="left">
                    <h1>{user.name}</h1>
                    <div className="meta">
                        <span className={`badge ${user.status === "Active" ? "ok" : "warn"}`}>{user.status}</span>
                        <span className="sep">•</span>
                        <span className="muted">ID:</span>&nbsp;<strong>{user.id}</strong>
                        <span className="sep">•</span>
                        <span className="muted">Role:</span>&nbsp;<NavLink to="/admin/roles" className="inline">{user.role}</NavLink>
                    </div>
                </div>
                <div className="right">
                    <button onClick={copyDeepLink} title="Copy deep link">Copy Link</button>
                    <button onClick={doPrint} title="Print this section">Print</button>
                    <button className="btn-primary" title="Edit in display mode only" onClick={() => navigate(`/admin/users/${user.id}`)}>View</button>
                </div>
            </div>

            {/* Tabs (anchors) */}
            <div className="tabs">
                <a href="#overview">Overview</a>
                <a href="#security">Security</a>
                <a href="#permissions">Permissions</a>
                <a href="#activity">Activity</a>
                <a href="#navigation">Navigation</a>
            </div>

            {/* Printable main area */}
            <div id="search-print-area" className="content-grid">
                {/* Overview / Identity */}
                <section id="overview" className="card identity">
                    <div className="avatar">
                        <img src={user.avatar} alt={`${user.name} avatar`} />
                    </div>
                    <div className="who">
                        <h2>{user.name}</h2>
                        <div className="info-cols">
                            <div>
                                <div><span className="muted">Email:</span> <a href={`mailto:${user.email}`}>{user.email}</a></div>
                                <div><span className="muted">Phone:</span> <a href={`tel:${user.phone}`}>{user.phone}</a></div>
                                <div><span className="muted">Timezone:</span> {user.timezone}</div>
                            </div>
                            <div>
                                <div><span className="muted">Created:</span> {fmtDateTime(user.createdAt)}</div>
                                <div><span className="muted">Updated:</span> {fmtDateTime(user.updatedAt)}</div>
                                <div><span className="muted">Last Active:</span> {fmtDateTime(user.lastActiveAt)}</div>
                            </div>
                        </div>
                        <div className="chips">
                            {user.roles.map(r => <NavLink key={r} to="/admin/roles" className="chip">{r}</NavLink>)}
                            {user.teams.map(t => <NavLink key={t} to="/admin/users" className="chip alt">{t}</NavLink>)}
                        </div>
                    </div>
                    <div className="actions">
                        <button disabled={DEMO} title="Demo preview">{DEMO ? "Reset Password (demo)" : "Reset Password"}</button>
                        <button disabled={DEMO} title="Demo preview">{DEMO ? "Send Verification (demo)" : "Send Verification"}</button>
                        <button className="btn-danger-outline" onClick={() => handleDanger("Deactivate User")} title="Demo preview">Deactivate</button>
                    </div>
                </section>

                {/* Contributions / KPIs */}
                <section className="card kpis">
                    <h3>Contributions</h3>
                    <div className="kpi-grid">
                        {user.contributions.map((k) => (
                            <NavLink key={k.label} to={k.link} className="kpi">
                                <div className="value">{k.value}</div>
                                <div className="label">{k.label}</div>
                            </NavLink>
                        ))}
                    </div>
                </section>

                {/* Security */}
                <section id="security" className="card">
                    <div className="section-head">
                        <h3>Security</h3>
                        <div className="sec-actions">
                            <button disabled={DEMO} title="Demo preview">{DEMO ? "Revoke Sessions (demo)" : "Revoke Sessions"}</button>
                            <button className="btn-danger-outline" onClick={() => handleDanger("Force Password Reset")} title="Demo preview">
                                Force Password Reset
                            </button>
                        </div>
                    </div>

                    <div className="security-grid">
                        <div className="sec-block">
                            <div className="muted">2FA</div>
                            <div className="strong">{user.security.twoFA}</div>
                        </div>
                        <div className="sec-block">
                            <div className="muted">Recovery Email</div>
                            <div>{user.security.recoveryEmail}</div>
                        </div>
                        <div className="sec-block">
                            <div className="muted">Login Alerts</div>
                            <div>{user.security.loginAlerts}</div>
                        </div>
                        <div className="sec-block">
                            <div className="muted">Last Password Reset</div>
                            <div>{fmtDateTime(user.security.lastPasswordReset)}</div>
                        </div>
                        <div className="sec-block">
                            <div className="muted">Allowed IP Ranges</div>
                            <div className="mono">
                                {user.security.allowedIPs.join(", ")}
                            </div>
                        </div>
                    </div>

                    <div className="sessions">
                        <h4>Recent Sessions</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Device</th>
                                    <th>Browser</th>
                                    <th>IP</th>
                                    <th>Location</th>
                                    <th>When</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.security.sessions.map(s => (
                                    <tr key={s.id}>
                                        <td>{s.device}</td>
                                        <td>{s.browser}</td>
                                        <td className="mono">{s.ip}</td>
                                        <td>{s.location}</td>
                                        <td>{fmtDateTime(s.at)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Permissions */}
                <section id="permissions" className="card">
                    <div className="section-head">
                        <h3>Permissions</h3>
                        <NavLink to="/admin/permissions" className="inline">Open Matrix</NavLink>
                    </div>
                    <table className="table-perms">
                        <thead>
                            <tr>
                                <th>Group</th>
                                <th>Read</th>
                                <th>Write</th>
                                <th>Approve</th>
                                <th>Export</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.permissionsSummary.map((p) => (
                                <tr key={p.group}>
                                    <td><NavLink to="/admin/permissions">{p.group}</NavLink></td>
                                    <td>{p.read ? "Yes" : "—"}</td>
                                    <td>{p.write ? "Yes" : "—"}</td>
                                    <td>{p.approve ? "Yes" : "—"}</td>
                                    <td>{p.export ? "Yes" : "—"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="manager">
                        <span className="muted">Manager:</span>{" "}
                        <button className="linklike" onClick={goToManager}>{user.manager.name}</button>
                    </div>
                </section>

                {/* Activity Timeline */}
                <section id="activity" className="card">
                    <div className="section-head">
                        <h3>Activity</h3>
                        <NavLink to="/admin/audit-log" className="inline">Full Audit Log</NavLink>
                    </div>
                    <ol className="timeline">
                        {user.activity.map(a => (
                            <li key={a.id}>
                                <div className="when">{fmtDateTime(a.at)}</div>
                                <div className="event">
                                    <NavLink to={a.link}>{a.text}</NavLink>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Navigation hub */}
                <section id="navigation" className="card navhub">
                    <h3>Quick Navigation</h3>
                    <div className="links">
                        {user.quickLinks.map(q => (
                            <NavLink key={q.label} to={q.to} className="hub-link">{q.label}</NavLink>
                        ))}
                        {/* cross-app deep nav */}
                        <NavLink to={`/customers`} className="hub-link">Customers</NavLink>
                        <NavLink to={`/orders`} className="hub-link">Orders</NavLink>
                        <NavLink to={`/invoices`} className="hub-link">Invoices</NavLink>
                        <NavLink to={`/shipments`} className="hub-link">Shipments</NavLink>
                        <NavLink to={`/vendors`} className="hub-link">Vendors</NavLink>
                        <NavLink to={`/purchase-orders`} className="hub-link">Purchase Orders</NavLink>
                        <NavLink to={`/inventory`} className="hub-link">Inventory</NavLink>
                        <NavLink to={`/reports/sales`} className="hub-link">Sales Reports</NavLink>
                        <NavLink to={`/reports/inventory`} className="hub-link">Inventory Reports</NavLink>
                        <NavLink to={`/settings`} className="hub-link">Settings</NavLink>
                        <NavLink to={`/tools/import-export`} className="hub-link">Import / Export</NavLink>
                    </div>
                </section>
            </div>

            {/* Footer micro-meta */}
            <footer className="muted footer">
                <span>Created: {fmtDate(user.createdAt)}</span>
                <span>•</span>
                <span>Last updated: {fmtDateTime(user.updatedAt)}</span>
                <span>•</span>
                <span>Local time: {fmtTime(user.lastActiveAt)}</span>
            </footer>

            {showConfirm && (
                <ConfirmModal
                    title={confirmConfig.title}
                    message={confirmConfig.message}
                    confirmText={confirmConfig.confirmText}
                    onConfirm={closeConfirm}
                    onClose={closeConfirm}
                />
            )}
        </Styled.Page>
    );
};

export default AdminUserDetailPage;
