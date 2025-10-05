import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    FiEdit, FiPrinter, FiExternalLink, FiCopy, FiShield, FiKey, FiBell, FiUser,
    FiMail, FiPhone, FiMapPin, FiClock, FiLogOut, FiTrash2, FiX, FiCheck, FiLock, FiGlobe, FiSettings, FiLayers, FiZap
} from "react-icons/fi";

/** date/time helpers (required formats):
 * Date       -> Sat Oct 04 2025
 * Date+Time  -> Sat Oct 04 2025 15:38:20hrs
 * Time only  -> 15:38:20hrs
 */
const pad2 = (n) => String(n).padStart(2, "0");
const toDateStr = (d) => d.toDateString(); // "Sat Oct 04 2025"
const toTimeStr = (d) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
const toDateTimeStr = (iso) => {
    const d = new Date(iso);
    return `${toDateStr(d)} ${toTimeStr(d)}`;
};

const buildShareUrl = () => {
    try {
        const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
        return new URL(`${base}/settings/profile`, window.location.origin).toString();
    } catch {
        return "/settings/profile";
    }
};

const ConfirmModal = ({ open, title = "Are you sure?", message, onClose, onConfirm, confirmLabel = "Confirm", demoOnly = true }) => {
    if (!open) return null;
    return (
        <div role="dialog" aria-modal="true" className="modalOverlay">
            <div className="modalCard card">
                <div className="modalHeader">
                    <h4>{title}</h4>
                    <button className="iconBtn" aria-label="Close" onClick={onClose}><FiX /></button>
                </div>
                <div className="modalBody">
                    <p>{message}</p>
                    {demoOnly && <p className="muted small">Demo mode: This action is disabled.</p>}
                </div>
                <div className="modalFooter">
                    <button className="btn" onClick={onClose}><FiX style={{ marginRight: 6 }} />Cancel</button>
                    <button className="btn primary" disabled={demoOnly} aria-disabled={demoOnly} title={demoOnly ? "Disabled in demo" : ""} onClick={onConfirm}>
                        <FiCheck style={{ marginRight: 6 }} />{confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

const SettingsProfilePage = () => {
    const [showDeactivate, setShowDeactivate] = useState(false);
    const [showSignOutOthers, setShowSignOutOthers] = useState(false);
    const [copied, setCopied] = useState(false);

    const profile = useMemo(() => ({
        id: "USR-0001",
        name: "Ashish Ranjan",
        role: "Owner",
        email: "ashish@example.com",
        phone: "+91 98765 43210",
        timezone: "Asia/Kolkata",
        language: "English (India)",
        location: "Patna, Bihar, India",
        org: { company: "Arohan Labs Pvt. Ltd.", department: "Engineering", manager: "—" },
        // Use build/commit if defined by Vite, else fallback
        memberSince: (typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString()),
        lastActive: (typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString()),
        lastPasswordChange: "2025-07-12T10:22:15+05:30",
        twoFA: { enabled: true, method: "Authenticator App", lastVerified: "2025-09-30T20:11:02+05:30" },
        sessions: [
            { id: "S-1", device: "MacBook Pro • Chrome 127", ip: "103.25.88.19", location: "Bengaluru, IN", lastActive: "2025-10-04T21:48:30+05:30", thisDevice: true },
            { id: "S-2", device: "iPhone 14 • Safari", ip: "49.37.200.11", location: "Patna, IN", lastActive: "2025-10-03T09:14:52+05:30" },
            { id: "S-3", device: "Office Windows • Edge", ip: "172.19.8.23", location: "Noida, IN", lastActive: "2025-09-28T12:05:01+05:30" },
        ],
        connectedApps: [
            { id: "C-1", name: "Slack", scope: "notifications:read", linked: "2025-08-05T11:19:00+05:30" },
            { id: "C-2", name: "Zapier", scope: "orders:read reports:read", linked: "2025-08-22T16:03:42+05:30" },
            { id: "C-3", name: "Google Drive", scope: "exports:write", linked: "2025-09-12T08:40:11+05:30" },
        ],
    }), []);

    const shareUrl = buildShareUrl();

    const copyShareLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    const printSection = () => {
        const body = document.body;
        body.classList.add("print-section-mode");
        setTimeout(() => {
            window.print();
            setTimeout(() => body.classList.remove("print-section-mode"), 50);
        }, 10);
    };

    return (
        <Styled.Page>
            {/* Print-only scope */}
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

            {/* Top header */}
            <div className="pageHeader">
                <div className="breadcrumbs">
                    <NavLink to="/home">Home</NavLink>
                    <span>/</span>
                    <NavLink to="/settings">Settings</NavLink>
                    <span>/</span>
                    <span className="current">Profile</span>
                </div>

                <div className="actions">
                    <Link className="btn ghost" to="/profile"><FiUser style={{ marginRight: 6 }} />View Profile</Link>
                    <Link className="btn ghost" to="/settings/appearance"><FiSettings style={{ marginRight: 6 }} />Appearance</Link>
                    <Link className="btn ghost" to="/settings/notifications"><FiBell style={{ marginRight: 6 }} />Notifications</Link>
                    <button className="btn primary" onClick={printSection} title="Print this section"><FiPrinter style={{ marginRight: 6 }} />Print</button>
                </div>
            </div>

            {/* Printable scope */}
            <div id="search-print-area">
                {/* Identity block */}
                <div className="identity card">
                    <div className="avatar" aria-hidden="true">{profile.name.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase()}</div>
                    <div className="who">
                        <h1>{profile.name}</h1>
                        <div className="metaRow">
                            <span className="badge">{profile.role}</span>
                            <span className="muted"><FiMail /> {profile.email}</span>
                            <span className="muted"><FiPhone /> {profile.phone}</span>
                            <span className="muted"><FiGlobe /> {profile.timezone}</span>
                        </div>
                        <ul className="metaList">
                            <li><FiClock /> Member since <strong>{toDateTimeStr(profile.memberSince)}</strong></li>
                            <li><FiClock /> Last active <strong>{toDateTimeStr(profile.lastActive)}</strong></li>
                            <li><FiLayers /> App Commit <strong>{toDateTimeStr(typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString())}</strong></li>
                            <li><FiZap /> Build Time <strong>{toDateTimeStr(typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString())}</strong></li>
                        </ul>
                    </div>

                    <div className="share">
                        <div className="shareField">
                            <input readOnly value={shareUrl} aria-label="Shareable link" />
                            <button className="iconBtn" onClick={copyShareLink} title="Copy link"><FiCopy /></button>
                        </div>
                        <div className="muted small">{copied ? "Copied!" : "Deep link to this page"}</div>
                    </div>
                </div>

                {/* Quick links */}
                <div className="quickGrid">
                    <Link to="/settings/billing" className="quick card"><div className="icon"><FiKey /></div><div className="qtext"><h4>Billing</h4><p>Plan & invoices</p></div></Link>
                    <Link to="/settings/tokens" className="quick card"><div className="icon"><FiKey /></div><div className="qtext"><h4>API Tokens</h4><p>Programmatic access</p></div></Link>
                    <Link to="/settings/print-templates" className="quick card"><div className="icon"><FiPrinter /></div><div className="qtext"><h4>Print Templates</h4><p>Documents & layouts</p></div></Link>
                    <Link to="/settings/numbering" className="quick card"><div className="icon"><FiLayers /></div><div className="qtext"><h4>Numbering</h4><p>Document sequences</p></div></Link>
                    <Link to="/settings/webhooks" className="quick card"><div className="icon"><FiZap /></div><div className="qtext"><h4>Webhooks</h4><p>Outbound events</p></div></Link>
                    <Link to="/settings/backups" className="quick card"><div className="icon"><FiSettings /></div><div className="qtext"><h4>Backups</h4><p>Snapshots & restore</p></div></Link>
                </div>

                {/* Content grid */}
                <div className="contentGrid">
                    {/* Profile details */}
                    <section className="card">
                        <div className="sectionHeader">
                            <h3>Profile</h3>
                            <div className="sectionActions">
                                <button className="btn" aria-disabled title="Demo only"><FiEdit style={{ marginRight: 6 }} />Edit</button>
                            </div>
                        </div>
                        <div className="fields twoCol">
                            <div className="field">
                                <label>Full Name</label>
                                <input readOnly value={profile.name} />
                            </div>
                            <div className="field">
                                <label>User ID</label>
                                <input readOnly value={profile.id} />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input readOnly value={profile.email} />
                            </div>
                            <div className="field">
                                <label>Phone</label>
                                <input readOnly value={profile.phone} />
                            </div>
                            <div className="field">
                                <label>Role</label>
                                <input readOnly value={profile.role} />
                            </div>
                            <div className="field">
                                <label>Timezone</label>
                                <input readOnly value={profile.timezone} />
                            </div>
                            <div className="field">
                                <label>Language</label>
                                <input readOnly value={profile.language} />
                            </div>
                            <div className="field">
                                <label>Location</label>
                                <div className="inline"><FiMapPin /> <span>{profile.location}</span></div>
                            </div>
                        </div>
                    </section>

                    {/* Organization */}
                    <section className="card">
                        <div className="sectionHeader">
                            <h3>Organization</h3>
                            <div className="sectionActions">
                                <Link className="btn ghost" to="/admin/users"><FiExternalLink style={{ marginRight: 6 }} />Manage Users</Link>
                            </div>
                        </div>
                        <div className="fields twoCol">
                            <div className="field"><label>Company</label><input readOnly value={profile.org.company} /></div>
                            <div className="field"><label>Department</label><input readOnly value={profile.org.department} /></div>
                            <div className="field"><label>Reporting Manager</label><input readOnly value={profile.org.manager} /></div>
                            <div className="field"><label>Status</label><input readOnly value="Active" /></div>
                        </div>
                    </section>

                    {/* Security */}
                    <section className="card">
                        <div className="sectionHeader">
                            <h3>Security</h3>
                            <div className="sectionActions">
                                <Link to="/auth/reset" className="btn"><FiLock style={{ marginRight: 6 }} />Change Password</Link>
                                <button className="btn" aria-disabled title="Demo only"><FiShield style={{ marginRight: 6 }} />Manage 2FA</button>
                            </div>
                        </div>
                        <ul className="metaList">
                            <li><FiCheck /> 2FA: <strong>{profile.twoFA.enabled ? `${profile.twoFA.method} (enabled)` : "Disabled"}</strong></li>
                            <li><FiClock /> Last password change <strong>{toDateTimeStr(profile.lastPasswordChange)}</strong></li>
                            <li><FiClock /> 2FA last verified <strong>{toDateTimeStr(profile.twoFA.lastVerified)}</strong></li>
                        </ul>
                    </section>

                    {/* Sessions */}
                    <section className="card">
                        <div className="sectionHeader">
                            <h3>Active Sessions</h3>
                            <div className="sectionActions">
                                <button className="btn" onClick={() => setShowSignOutOthers(true)} title="Demo modal"><FiLogOut style={{ marginRight: 6 }} />Sign out other devices</button>
                            </div>
                        </div>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Device</th>
                                        <th>IP</th>
                                        <th>Location</th>
                                        <th>Last Active</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profile.sessions.map(s => (
                                        <tr key={s.id}>
                                            <td>{s.device}{s.thisDevice && <span className="badge soft">This device</span>}</td>
                                            <td>{s.ip}</td>
                                            <td>{s.location}</td>
                                            <td>{toDateTimeStr(s.lastActive)}</td>
                                            <td className="text-right">
                                                <button className="btn ghost" aria-disabled title="Demo only"><FiX style={{ marginRight: 6 }} />Revoke</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Connected apps */}
                    <section className="card">
                        <div className="sectionHeader">
                            <h3>Connected Apps</h3>
                            <div className="sectionActions">
                                <Link to="/admin/integrations" className="btn"><FiExternalLink style={{ marginRight: 6 }} />Manage Integrations</Link>
                            </div>
                        </div>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>App</th>
                                        <th>Scopes</th>
                                        <th>Linked</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profile.connectedApps.map(a => (
                                        <tr key={a.id}>
                                            <td>{a.name}</td>
                                            <td><code>{a.scope}</code></td>
                                            <td>{toDateTimeStr(a.linked)}</td>
                                            <td className="text-right">
                                                <button className="btn ghost" aria-disabled title="Demo only"><FiTrash2 style={{ marginRight: 6 }} />Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Preferences */}
                    <section className="card">
                        <div className="sectionHeader">
                            <h3>Preferences</h3>
                            <div className="sectionActions">
                                <Link className="btn ghost" to="/settings/appearance"><FiSettings style={{ marginRight: 6 }} />Appearance</Link>
                                <Link className="btn ghost" to="/settings/notifications"><FiBell style={{ marginRight: 6 }} />Notifications</Link>
                            </div>
                        </div>
                        <div className="fields twoCol">
                            <div className="field">
                                <label>Theme</label>
                                <div className="btnRow">
                                    <button className="btn" onClick={() => document.documentElement.setAttribute("data-theme", "light")}>Light</button>
                                    <button className="btn" onClick={() => document.documentElement.setAttribute("data-theme", "dark")}>Dark</button>
                                    <button className="btn ghost" onClick={() => document.documentElement.removeAttribute("data-theme")} title="Follow system">System</button>
                                </div>
                            </div>
                            <div className="field">
                                <label>Density</label>
                                <input readOnly value="Comfortable" />
                            </div>
                            <div className="field">
                                <label>Date Format</label>
                                <input readOnly value="Sat Oct 04 2025" />
                            </div>
                            <div className="field">
                                <label>Time Format</label>
                                <input readOnly value="15:38:20hrs" />
                            </div>
                        </div>
                    </section>

                    {/* Help cards */}
                    <section className="card">
                        <div className="sectionHeader">
                            <h3>Help & Docs</h3>
                            <div className="sectionActions">
                                <Link className="btn ghost" to="/help"><FiExternalLink style={{ marginRight: 6 }} />Help Center</Link>
                            </div>
                        </div>
                        <div className="linksRow">
                            <Link to="/faq" className="chip">FAQ</Link>
                            <Link to="/changelog" className="chip">Changelog</Link>
                            <Link to="/roadmap" className="chip">Roadmap</Link>
                            <Link to="/contact" className="chip">Contact</Link>
                            <Link to="/feedback" className="chip">Feedback</Link>
                            <Link to="/reports" className="chip">Reports</Link>
                            <Link to="/admin/permissions" className="chip">Permissions</Link>
                            <Link to="/tools/import-export" className="chip">Import / Export</Link>
                        </div>
                    </section>

                    {/* Danger zone */}
                    <section className="card danger">
                        <div className="sectionHeader">
                            <h3>Danger Zone</h3>
                            <div className="sectionActions">
                                <button className="btn" onClick={() => setShowDeactivate(true)} title="Demo modal"><FiTrash2 style={{ marginRight: 6 }} />Deactivate Account</button>
                            </div>
                        </div>
                        <p className="muted">Account deactivation is irreversible. In this demo, the action is intentionally disabled.</p>
                    </section>
                </div>
            </div>

            {/* Modals */}
            <ConfirmModal
                open={showDeactivate}
                onClose={() => setShowDeactivate(false)}
                title="Deactivate account?"
                message="This would permanently deactivate your account and revoke access. In the demo, this action is disabled."
                onConfirm={() => setShowDeactivate(false)}
                confirmLabel="Deactivate"
                demoOnly
            />
            <ConfirmModal
                open={showSignOutOthers}
                onClose={() => setShowSignOutOthers(false)}
                title="Sign out other devices?"
                message="All sessions except the current one will be signed out. In the demo, this action is disabled."
                onConfirm={() => setShowSignOutOthers(false)}
                confirmLabel="Sign out others"
                demoOnly
            />
        </Styled.Page>
    );
};

export default SettingsProfilePage;
