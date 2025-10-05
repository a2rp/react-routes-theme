import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import { MdOpenInNew, MdPrint, MdContentCopy, MdWarningAmber, MdRestartAlt, MdCheckCircle, MdError } from "react-icons/md";

/** Safe guards for build/commit time constants (defined via Vite define) */
const BUILD_ISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || new Date().toISOString();
const COMMIT_ISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || new Date().toISOString();

/** Formatting utils (required formats)
 *  Date:        Sat Oct 04 2025
 *  Date+Time:   Sat Oct 04 2025 15:38:20hrs
 *  Time only:   15:38:20hrs
 */
const day = (d) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()];
const mon = (d) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()];
const pad = (n) => (n < 10 ? "0" + n : String(n));
const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${day(d)} ${mon(d)} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (iso) => {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

/** Static display-only data (demo) */
const SERVICES = [
    { key: "api", name: "Core API", status: "operational", docs: "/help", link: "/admin/audit-log" },
    { key: "db", name: "Primary Database", status: "operational", docs: "/help", link: "/admin/system-status" },
    { key: "cache", name: "Cache Cluster", status: "degraded", docs: "/help", link: "/admin/system-status" },
    { key: "search", name: "Search Service", status: "operational", docs: "/help", link: "/tools/playground" },
    { key: "email", name: "Email Gateway", status: "operational", docs: "/admin/email-templates", link: "/admin/email-templates" },
    { key: "sms", name: "SMS Gateway", status: "operational", docs: "/admin/sms-templates", link: "/admin/sms-templates" },
    { key: "storage", name: "Object Storage", status: "operational", docs: "/settings/backups", link: "/settings/backups" },
    { key: "cdn", name: "CDN Edge", status: "degraded", docs: "/help", link: "/reports/shipment" },
    { key: "payments", name: "Payments", status: "operational", docs: "/finance", link: "/finance" },
    { key: "notifications", name: "Notifications Worker", status: "operational", docs: "/settings/notifications", link: "/settings/notifications" },
];

const INCIDENTS = [
    {
        id: "INC-1042",
        title: "Intermittent CDN latency in APAC",
        severity: "minor",
        startedAt: "2025-10-04T08:12:34Z",
        resolvedAt: "2025-10-04T08:56:11Z",
        affected: ["CDN Edge"],
        link: "/admin/activity"
    },
    {
        id: "INC-1038",
        title: "Cache node rotation (degraded hits)",
        severity: "minor",
        startedAt: "2025-10-03T17:41:10Z",
        resolvedAt: "2025-10-03T18:05:28Z",
        affected: ["Cache Cluster"],
        link: "/admin/audit-log"
    },
];

const MAINTENANCE = [
    {
        id: "SCH-205",
        title: "Database minor upgrades (rolling)",
        windowStart: "2025-10-06T02:00:00Z",
        windowEnd: "2025-10-06T04:30:00Z",
        components: ["Primary Database"],
        link: "/admin/system-status"
    },
];

const FEATURE_FLAGS = [
    { key: "ff-optim-search", label: "Search Optimizer v2", state: "On", description: "Smarter query planner (display-only)" },
    { key: "ff-invoice-v3", label: "Invoice Layout v3", state: "Off", description: "New print template (display-only)" },
    { key: "ff-2fa-mandate", label: "2FA Mandatory", state: "On", description: "Admins enforced 2FA" },
];

const DEPENDENCIES = [
    { name: "Email Provider", vendor: "Postmark", region: "Global", status: "Operational", docs: "/admin/email-templates" },
    { name: "SMS Provider", vendor: "Twilio", region: "Global", status: "Operational", docs: "/admin/sms-templates" },
    { name: "Object Storage", vendor: "S3-compatible", region: "Multi-region", status: "Operational", docs: "/settings/backups" },
    { name: "Payments", vendor: "Stripe", region: "Global", status: "Operational", docs: "/finance" },
];

export default function AdminSystemStatus() {
    const { pathname } = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const buildInfo = useMemo(() => ({
        builtAt: fmtDateTime(BUILD_ISO),
        commitAt: fmtDateTime(COMMIT_ISO),
        commitRaw: COMMIT_ISO,
        buildRaw: BUILD_ISO,
    }), []);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch { }
    };

    const exportStatusJson = () => {
        const payload = {
            asOf: fmtDateTime(new Date().toISOString()),
            route: pathname,
            services: SERVICES,
            incidents: INCIDENTS,
            maintenance: MAINTENANCE,
            flags: FEATURE_FLAGS,
            build: buildInfo,
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "system-status.json";
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 500);
    };

    const printSection = () => {
        const body = document.body;
        body.classList.add("print-section-mode");
        // Allow layout to settle
        setTimeout(() => {
            window.print();
            setTimeout(() => body.classList.remove("print-section-mode"), 50);
        }, 40);
    };

    const statusIcon = (s) => {
        if (s === "operational") return <MdCheckCircle size={18} aria-label="Operational" />;
        if (s === "degraded") return <MdWarningAmber size={18} aria-label="Degraded" />;
        return <MdError size={18} aria-label="Down" />;
    };

    return (
        <Styled.Page>
            {/* Print section CSS (scoped) */}
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

            <Styled.Breadcrumbs>
                <Link to="/home">Home</Link>
                <span>/</span>
                <Link to="/admin">Admin</Link>
                <span>/</span>
                <strong>System Status</strong>
            </Styled.Breadcrumbs>

            <Styled.HeaderBar>
                <div>
                    <h1>System Status</h1>
                    <p>Live overview of core services, recent incidents, maintenance windows, and feature flags.</p>
                </div>
                <Styled.HeaderActions>
                    <button onClick={copyLink} title="Copy page link">
                        <MdContentCopy size={18} /> Copy Link
                    </button>
                    <button onClick={exportStatusJson} title="Export as JSON">
                        <MdOpenInNew size={18} /> Export JSON
                    </button>
                    <button onClick={printSection} title="Print" id="btn-print">
                        <MdPrint size={18} /> Print
                    </button>
                    <button onClick={() => setShowModal(true)} title="Restart (demo disabled)" disabled>
                        <MdRestartAlt size={18} /> Restart All
                    </button>
                </Styled.HeaderActions>
            </Styled.HeaderBar>

            {copied && <Styled.Toast role="status">Link copied</Styled.Toast>}

            {/* Printable area wraps the key summary + services table */}
            <div id="search-print-area">
                <Styled.InfoGrid>
                    <Styled.Card>
                        <h3>Environment</h3>
                        <div className="kv">
                            <div>
                                <span className="k">App Route</span>
                                <span className="v">{pathname}</span>
                            </div>
                            <div>
                                <span className="k">Timezone</span>
                                <span className="v">{Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
                            </div>
                            <div>
                                <span className="k">Built At</span>
                                <span className="v">{buildInfo.builtAt}</span>
                            </div>
                            <div>
                                <span className="k">Last Commit</span>
                                <span className="v">{buildInfo.commitAt}</span>
                            </div>
                        </div>
                        <div className="links">
                            <Link to="/changelog" className="text-link">Changelog</Link>
                            <Link to="/roadmap" className="text-link">Roadmap</Link>
                            <Link to="/admin/audit-log" className="text-link">Audit Log</Link>
                            <Link to="/admin/activity" className="text-link">Activity</Link>
                        </div>
                    </Styled.Card>

                    <Styled.Card>
                        <h3>Feature Flags</h3>
                        <ul className="flags">
                            {FEATURE_FLAGS.map(f => (
                                <li key={f.key}>
                                    <span className={`state ${f.state === "On" ? "on" : "off"}`}>{f.state}</span>
                                    <span className="label">{f.label}</span>
                                    <span className="desc">{f.description}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="links">
                            <Link to="/admin/feature-flags" className="text-link">Open Flags</Link>
                            <Link to="/settings/notifications" className="text-link">Notifications</Link>
                            <Link to="/settings/appearance" className="text-link">Appearance</Link>
                        </div>
                    </Styled.Card>

                    <Styled.Card className="dep-card">
                        <h3>Dependencies</h3>
                        <table className="flat">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Vendor</th>
                                    <th>Region</th>
                                    <th>Status</th>
                                    <th>Docs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DEPENDENCIES.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.name}</td>
                                        <td>{d.vendor}</td>
                                        <td>{d.region}</td>
                                        <td><Styled.StatusChip status="operational">Operational</Styled.StatusChip></td>
                                        <td><Link to={d.docs} className="text-link">Open</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Styled.Card>
                </Styled.InfoGrid>

                <Styled.Card>
                    <div className="card-head">
                        <h3>Core Services</h3>
                        <div className="head-links">
                            <Link to="/admin/integrations" className="text-link">Integrations</Link>
                            <Link to="/reports" className="text-link">Reports</Link>
                            <Link to="/tools/playground" className="text-link">Playground</Link>
                        </div>
                    </div>
                    <table className="flat">
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Status</th>
                                <th>Deep Link</th>
                                <th>Docs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SERVICES.map(s => (
                                <tr key={s.key}>
                                    <td className="svc">
                                        <span className="dot" data-status={s.status} />
                                        {s.name}
                                    </td>
                                    <td>
                                        <Styled.StatusChip status={s.status}>
                                            {s.status === "operational" ? "Operational" : s.status === "degraded" ? "Degraded" : "Down"}
                                        </Styled.StatusChip>
                                    </td>
                                    <td>
                                        <Link to={s.link} className="text-link">
                                            Open <MdOpenInNew size={14} />
                                        </Link>
                                    </td>
                                    <td><Link to={s.docs} className="text-link">Docs</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Styled.Card>
            </div>

            <Styled.TwoCol>
                <Styled.Card>
                    <div className="card-head">
                        <h3>Recent Incidents</h3>
                        <Link to="/admin/audit-log" className="text-link">Audit Log</Link>
                    </div>
                    {INCIDENTS.length === 0 ? (
                        <div className="empty">No incidents recorded.</div>
                    ) : (
                        <ul className="timeline">
                            {INCIDENTS.map((it) => (
                                <li key={it.id}>
                                    <div className="line" />
                                    <div className="node">
                                        <span className={`sev ${it.severity}`} title={it.severity}>
                                            {it.severity === "minor" ? <MdWarningAmber size={16} /> : <MdError size={16} />}
                                        </span>
                                    </div>
                                    <div className="content">
                                        <div className="row">
                                            <strong>{it.title}</strong>
                                            <Link to={it.link} className="text-link">Details</Link>
                                        </div>
                                        <div className="meta">
                                            <span>ID: {it.id}</span>
                                            <span>Started: {fmtDateTime(it.startedAt)}</span>
                                            <span>Resolved: {fmtDateTime(it.resolvedAt)}</span>
                                        </div>
                                        <div className="tags">
                                            {it.affected.map(a => <span className="tag" key={a}>{a}</span>)}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </Styled.Card>

                <Styled.Card>
                    <div className="card-head">
                        <h3>Scheduled Maintenance</h3>
                        <Link to="/admin/system-status" className="text-link">Calendar</Link>
                    </div>
                    <table className="flat">
                        <thead>
                            <tr>
                                <th>Window</th>
                                <th>Components</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MAINTENANCE.map(m => (
                                <tr key={m.id}>
                                    <td>
                                        <div>{fmtDate(m.windowStart)} {fmtTime(m.windowStart)} → {fmtTime(m.windowEnd)}</div>
                                        <div className="muted">{fmtDate(m.windowEnd)}</div>
                                    </td>
                                    <td>
                                        <div className="tags">
                                            {m.components.map(c => <span className="tag" key={c}>{c}</span>)}
                                        </div>
                                    </td>
                                    <td><Link to={m.link} className="text-link">Open</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Styled.Card>
            </Styled.TwoCol>

            <Styled.QuickLinks>
                <h3>Quick Navigation</h3>
                <div className="grid">
                    <Link to="/admin/users" className="ql">Users</Link>
                    <Link to="/admin/roles" className="ql">Roles</Link>
                    <Link to="/admin/permissions" className="ql">Permissions</Link>
                    <Link to="/admin/integrations" className="ql">Integrations</Link>
                    <Link to="/settings/appearance" className="ql">Appearance</Link>
                    <Link to="/settings/notifications" className="ql">Notifications</Link>
                    <Link to="/reports" className="ql">Reports</Link>
                    <Link to="/tools/import-export" className="ql">Import / Export</Link>
                    <Link to="/finance" className="ql">Finance</Link>
                    <Link to="/inventory" className="ql">Inventory</Link>
                    <Link to="/orders" className="ql">Orders</Link>
                    <Link to="/invoices" className="ql">Invoices</Link>
                </div>
            </Styled.QuickLinks>

            {/* Demo-only custom modal (button is disabled; modal kept here as example pattern) */}
            {showModal && (
                <Styled.ModalBackdrop onClick={() => setShowModal(false)}>
                    <Styled.Modal onClick={(e) => e.stopPropagation()}>
                        <h4>Restart Services</h4>
                        <p>This is a display-only theme. Service actions are disabled.</p>
                        <div className="row">
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </Styled.Modal>
                </Styled.ModalBackdrop>
            )}
        </Styled.Page>
    );
}
