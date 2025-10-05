import React, { useMemo, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FiExternalLink, FiZap, FiPrinter, FiLock, FiShield, FiAlertCircle, FiCheckCircle, FiXCircle, FiSettings, FiRefreshCcw, FiLink } from "react-icons/fi";
import { S } from "./styled";

/** Date formatting helpers (required format) */
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (d) => `${dayNames[d.getDay()]} ${monNames[d.getMonth()]} ${String(d.getDate()).padStart(2, "0")} ${d.getFullYear()}`;
const fmtTime = (d) => `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}hrs`;
const fmtDateTime = (d) => `${fmtDate(d)} ${fmtTime(d)}`;

const now = new Date();
const buildISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
const commitISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString();

const demoProviders = [
    { key: "stripe", name: "Stripe", kind: "Payments", status: "connected", note: "Live keys masked", links: [{ to: "/reports/finance", label: "Finance Reports" }, { to: "/invoices", label: "Invoices" }] },
    { key: "razorpay", name: "Razorpay", kind: "Payments", status: "connected", note: "Webhook active", links: [{ to: "/invoices", label: "Invoices" }, { to: "/reports/sales", label: "Sales Reports" }] },
    { key: "paytm", name: "Paytm", kind: "Payments", status: "not-linked", note: "Ready to connect", links: [{ to: "/invoices", label: "Invoices" }] },
    { key: "twilio", name: "Twilio", kind: "Telephony", status: "connected", note: "SMS & WhatsApp", links: [{ to: "/admin/sms-templates", label: "SMS Templates" }, { to: "/notifications", label: "Notifications" }] },
    { key: "sendgrid", name: "SendGrid", kind: "Email", status: "connected", note: "Domain verified", links: [{ to: "/admin/email-templates", label: "Email Templates" }] },
    { key: "mailgun", name: "Mailgun", kind: "Email", status: "not-linked", note: "SPF pending", links: [{ to: "/admin/email-templates", label: "Email Templates" }] },
    { key: "ses", name: "AWS SES", kind: "Email", status: "not-linked", note: "Region not set", links: [{ to: "/settings/notifications", label: "Notifications" }] },
    { key: "slack", name: "Slack", kind: "Collab", status: "connected", note: "#ops alerts on", links: [{ to: "/admin/activity", label: "Activity" }] },
    { key: "teams", name: "Microsoft Teams", kind: "Collab", status: "not-linked", note: "Requires tenant", links: [{ to: "/admin/tenants", label: "Tenants" }] },
    { key: "github", name: "GitHub", kind: "Source", status: "connected", note: "PR checks enabled", links: [{ to: "/admin/feature-flags", label: "Feature Flags" }] },
    { key: "bitbucket", name: "Bitbucket", kind: "Source", status: "not-linked", note: "OAuth app needed", links: [{ to: "/admin/feature-flags", label: "Feature Flags" }] },
    { key: "s3", name: "S3 / R2", kind: "Storage", status: "connected", note: "Assets offloaded", links: [{ to: "/tools/import-export", label: "Import/Export" }] },
    { key: "gdrive", name: "Google Drive", kind: "Storage", status: "not-linked", note: "Service account", links: [{ to: "/tools/import-export", label: "Import/Export" }] },
    { key: "dropbox", name: "Dropbox", kind: "Storage", status: "not-linked", note: "App folder mode", links: [{ to: "/tools/import-export", label: "Import/Export" }] },
    { key: "quickbooks", name: "QuickBooks", kind: "Accounting", status: "connected", note: "Sync read-only", links: [{ to: "/finance/ledgers", label: "Ledgers" }, { to: "/finance/journals", label: "Journals" }] },
    { key: "tally", name: "Tally Bridge", kind: "Accounting", status: "not-linked", note: "Gateway required", links: [{ to: "/finance", label: "Finance" }] },
    { key: "webhooks", name: "Webhooks", kind: "Automation", status: "connected", note: "4 endpoints live", links: [{ to: "/settings/webhooks", label: "Manage Webhooks" }] },
    { key: "zapier", name: "Zapier", kind: "Automation", status: "not-linked", note: "Invite-only app", links: [{ to: "/tools/playground", label: "Playground" }] },
];

const badgeFor = (status) => status === "connected" ? (
    <span className="badge ok"><FiCheckCircle /> Connected</span>
) : (
    <span className="badge off"><FiXCircle /> Not Connected</span>
);

const AdminIntegrations = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(null); // {title, body}
    const buildAt = useMemo(() => new Date(buildISO), []);
    const commitAt = useMemo(() => new Date(commitISO), []);

    const onConnect = (name) => {
        setModal({
            title: "Demo Mode",
            body: `${name} connection is disabled in this demo. Explore templates, docs, and related pages instead.`,
        });
    };

    const onDisconnect = (name) => {
        setModal({
            title: "Demo Mode",
            body: `Disconnect is disabled for ${name}. You can still review audit logs and system status.`,
        });
    };

    const printOverview = () => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 1000);
        }
    };

    const byCategory = useMemo(() => {
        const map = new Map();
        demoProviders.forEach(p => {
            if (!map.has(p.kind)) map.set(p.kind, []);
            map.get(p.kind).push(p);
        });
        return Array.from(map.entries()); // [kind, items[]]
    }, []);

    return (
        <S.Wrap>
            {/* Breadcrumbs */}
            <S.Breadcrumbs aria-label="breadcrumb">
                <NavLink to="/home" end>Home</NavLink>
                <span>/</span>
                <NavLink to="/admin/system-status" end>Admin</NavLink>
                <span>/</span>
                <strong>Integrations</strong>
                <div className="rightLinks">
                    <NavLink to="/admin/system-status" end><FiShield /> System Status</NavLink>
                    <NavLink to="/admin/feature-flags" end><FiSettings /> Feature Flags</NavLink>
                    <NavLink to="/admin/audit-log" end><FiRefreshCcw /> Audit Log</NavLink>
                </div>
            </S.Breadcrumbs>

            {/* Page header */}
            <S.PageHead>
                <div className="title">
                    <h1>Integrations</h1>
                    <p>Connect payments, messaging, storage, and automation services. Display-only demo—safe to explore.</p>
                </div>
                <div className="meta">
                    <div className="row">
                        <span>Build:</span>
                        <strong>{fmtDateTime(buildAt)}</strong>
                    </div>
                    <div className="row">
                        <span>Last Commit:</span>
                        <strong>{fmtDateTime(commitAt)}</strong>
                    </div>
                    <div className="row">
                        <span>Now:</span>
                        <strong>{fmtDateTime(now)}</strong>
                    </div>
                </div>
            </S.PageHead>

            {/* Top actions + Quick Nav */}
            <S.ActionBar>
                <button className="primary" onClick={() => onConnect("New Integration")} title="Disabled in demo">
                    <FiZap /> Connect New
                </button>
                <button className="ghost" onClick={printOverview}>
                    <FiPrinter /> Print Overview
                </button>
                <div className="spacer" />
                <NavLink to="/settings/webhooks" end className="linkBtn"><FiLink /> Manage Webhooks</NavLink>
                <NavLink to="/settings/tokens" end className="linkBtn"><FiLock /> API Tokens</NavLink>
                <NavLink to="/help" end className="linkBtn"><FiExternalLink /> Help Center</NavLink>
            </S.ActionBar>

            {/* Stats row */}
            <S.StatRow id="search-print-area">
                <div className="card stat">
                    <span className="k">Connected</span>
                    <span className="v">
                        {demoProviders.filter(p => p.status === "connected").length}
                    </span>
                </div>
                <div className="card stat">
                    <span className="k">Available</span>
                    <span className="v">{demoProviders.length}</span>
                </div>
                <div className="card stat">
                    <span className="k">Security</span>
                    <span className="v"><FiShield /> OK</span>
                </div>
                <div className="card stat">
                    <span className="k">Audit</span>
                    <span className="v"><NavLink to="/admin/audit-log" end>View Logs</NavLink></span>
                </div>
            </S.StatRow>

            {/* Featured quick links */}
            <S.QuickLinks>
                <NavLink to="/invoices" end className="q">Invoices</NavLink>
                <NavLink to="/reports/sales" end className="q">Sales Reports</NavLink>
                <NavLink to="/reports/finance" end className="q">Finance Reports</NavLink>
                <NavLink to="/notifications" end className="q">Notifications</NavLink>
                <NavLink to="/admin/email-templates" end className="q">Email Templates</NavLink>
                <NavLink to="/admin/sms-templates" end className="q">SMS Templates</NavLink>
                <NavLink to="/tools/import-export" end className="q">Import / Export</NavLink>
                <NavLink to="/settings/notifications" end className="q">Notification Rules</NavLink>
                <NavLink to="/settings/print-templates" end className="q">Print Templates</NavLink>
            </S.QuickLinks>

            {/* Sections by category */}
            {byCategory.map(([kind, items]) => (
                <section key={kind}>
                    <S.SectionHead>
                        <h2>{kind}</h2>
                        <div className="subnav">
                            <NavLink to="/admin/system-status" end>System</NavLink>
                            <NavLink to="/admin/feature-flags" end>Flags</NavLink>
                            <NavLink to="/settings/webhooks" end>Webhooks</NavLink>
                            <NavLink to="/settings/tokens" end>Tokens</NavLink>
                        </div>
                    </S.SectionHead>

                    <S.Grid>
                        {items.map(p => (
                            <article key={p.key} className="card app">
                                <header>
                                    <div className="logo">{p.name.slice(0, 2)}</div>
                                    <div className="meta">
                                        <h3>{p.name}</h3>
                                        <div className="row">
                                            {badgeFor(p.status)}
                                            <span className="muted">•</span>
                                            <span className="muted">{p.note}</span>
                                        </div>
                                    </div>
                                </header>

                                <div className="links">
                                    {p.links.map((l, i) => (
                                        <NavLink key={i} to={l.to} end>{l.label}</NavLink>
                                    ))}
                                </div>

                                <footer>
                                    <button className="ghost" onClick={() => navigate("/help")}><FiExternalLink /> Docs</button>
                                    {p.status === "connected" ? (
                                        <>
                                            <button className="danger" onClick={() => onDisconnect(p.name)}><FiXCircle /> Disconnect</button>
                                            <NavLink to="/admin/audit-log" end className="linkBtn"><FiRefreshCcw /> Audits</NavLink>
                                        </>
                                    ) : (
                                        <>
                                            <button className="primary" onClick={() => onConnect(p.name)}><FiZap /> Connect</button>
                                            <NavLink to="/settings/webhooks" end className="linkBtn"><FiLink /> Webhooks</NavLink>
                                        </>
                                    )}
                                </footer>
                            </article>
                        ))}
                    </S.Grid>
                </section>
            ))}

            {/* Guidance panel */}
            <S.HelpPanel className="card">
                <div className="icon"><FiAlertCircle /></div>
                <div className="copy">
                    <h3>How to use this page</h3>
                    <p>Explore linked areas to see how integrations influence invoices, reports, and notifications. This is a display-only demo with deep links enabled across Admin, Settings, and Reports.</p>
                    <div className="links">
                        <NavLink to="/reports" end>All Reports</NavLink>
                        <NavLink to="/settings" end>Settings Home</NavLink>
                        <NavLink to="/admin" end>Admin Area</NavLink>
                        <NavLink to="/help" end>Help Center</NavLink>
                    </div>
                </div>
            </S.HelpPanel>

            {/* Print styles (sectioned printing) */}
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

            {/* Demo modal */}
            {modal && (
                <S.Modal role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className="box card">
                        <h4 id="modal-title">{modal.title}</h4>
                        <p>{modal.body}</p>
                        <div className="actions">
                            <button onClick={() => setModal(null)}>Close</button>
                            <NavLink to="/help" end className="linkBtn"><FiExternalLink /> Help</NavLink>
                            <NavLink to="/admin/audit-log" end className="linkBtn"><FiRefreshCcw /> Audit Log</NavLink>
                        </div>
                    </div>
                    <div className="backdrop" onClick={() => setModal(null)} />
                </S.Modal>
            )}
        </S.Wrap>
    );
};

export default AdminIntegrations;
