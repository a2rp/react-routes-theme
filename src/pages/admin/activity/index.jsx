import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import { MdOutlineSearch, MdOutlineDownload, MdPrint, MdClose, MdContentCopy, MdNorthEast, MdHistory, MdOutlineWarningAmber } from "react-icons/md";
import { RiUserSettingsLine, RiSettings5Line, RiShieldKeyholeLine, RiErrorWarningLine } from "react-icons/ri";
import { FiRefreshCw, FiExternalLink } from "react-icons/fi";

/* Demo-only flag (non-destructive actions only) */
const DEMO_MODE = true;

/* Date helpers — exact formats requested */
const pad = (n) => String(n).padStart(2, "0");

const fmtDate = (d) => {
    // Sat Oct 04 2025
    // Using toDateString() to match day/mon text, then ensure day is 2-digit
    const parts = d.toDateString().split(" "); // ["Sat","Oct","04","2025"]
    if (parts.length === 4) {
        const dd = pad(parseInt(parts[2], 10));
        return `${parts[0]} ${parts[1]} ${dd} ${parts[3]}`;
    }
    return d.toDateString();
};

const fmtTime = (d) => {
    // 15:38:20hrs (24h)
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};

const fmtDateTime = (d) => `${fmtDate(d)} ${fmtTime(d)}`;

/* Small utility for export */
const downloadJSON = (filename, obj) => {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
};

/* Build a safe base (works with Vite base + GH Pages) */
const BASE = (import.meta?.env?.BASE_URL || "/").replace(/\/+$/, "");

/* Demo data — pre-specified activity (display-only) */
const ACTIVITY = [
    {
        id: "ACT-9001",
        ts: "2025-10-04T11:12:05+05:30",
        type: "auth.login",
        severity: "info",
        actor: { id: "U-1001", name: "Ashish Ranjan", link: "/admin/users/U-1001" },
        target: { kind: "user", id: "U-1001", name: "Ashish Ranjan", link: "/admin/users/U-1001" },
        message: "Signed in via password.",
        meta: { ip: "203.0.113.8", ua: "Chrome 124 / Windows", location: "Patna, IN" },
        links: [{ label: "Users", to: "/admin/users" }, { label: "Audit Log", to: "/admin/audit-log" }],
    },
    {
        id: "ACT-9000",
        ts: "2025-10-04T10:40:44+05:30",
        type: "settings.updated",
        severity: "info",
        actor: { id: "U-1001", name: "Ashish Ranjan", link: "/admin/users/U-1001" },
        target: { kind: "system", id: "APP", name: "System Settings", link: "/settings" },
        message: "Appearance → switched to light theme.",
        meta: { ip: "203.0.113.8", ua: "Chrome 124 / Windows", location: "Patna, IN" },
        links: [{ label: "Appearance", to: "/settings/appearance" }, { label: "Settings", to: "/settings" }],
    },
    {
        id: "ACT-8999",
        ts: "2025-10-04T09:15:12+05:30",
        type: "role.assigned",
        severity: "info",
        actor: { id: "U-1002", name: "System Admin", link: "/admin/users/U-1002" },
        target: { kind: "user", id: "U-1020", name: "Demo User", link: "/admin/users/U-1020" },
        message: "Assigned role: Manager.",
        meta: { ip: "198.51.100.5", ua: "Firefox 122 / Linux", location: "Bengaluru, IN" },
        links: [{ label: "Roles", to: "/admin/roles" }, { label: "Permissions", to: "/admin/permissions" }],
    },
    {
        id: "ACT-8998",
        ts: "2025-10-04T08:51:31+05:30",
        type: "order.created",
        severity: "info",
        actor: { id: "U-1020", name: "Demo User", link: "/admin/users/U-1020" },
        target: { kind: "order", id: "ORD-3001", name: "Sales Order", link: "/orders/ORD-3001" },
        message: "Created sales order for customer CUST-1001.",
        meta: { ip: "198.51.100.5", ua: "Firefox 122 / Linux", location: "Bengaluru, IN" },
        links: [{ label: "Orders", to: "/orders" }, { label: "Customer", to: "/customers/CUST-1001" }],
    },
    {
        id: "ACT-8997",
        ts: "2025-10-03T22:02:18+05:30",
        type: "invoice.issued",
        severity: "info",
        actor: { id: "U-1003", name: "Billing Bot", link: "/admin/users/U-1003" },
        target: { kind: "invoice", id: "INV-2031", name: "Invoice INV-2031", link: "/invoices/INV-2031" },
        message: "Issued invoice for order ORD-2999.",
        meta: { ip: "203.0.113.18", ua: "Service/1.0", location: "Mumbai, IN" },
        links: [{ label: "Invoices", to: "/invoices" }, { label: "Order", to: "/orders/ORD-2999" }],
    },
    {
        id: "ACT-8996",
        ts: "2025-10-03T20:30:08+05:30",
        type: "permission.updated",
        severity: "warn",
        actor: { id: "U-1002", name: "System Admin", link: "/admin/users/U-1002" },
        target: { kind: "role", id: "ROLE-ADMIN", name: "Admin", link: "/admin/permissions" },
        message: "Updated role permissions: Admin can manage feature flags.",
        meta: { ip: "203.0.113.18", ua: "Edge 123 / Windows", location: "Mumbai, IN" },
        links: [{ label: "Permissions", to: "/admin/permissions" }, { label: "Feature Flags", to: "/admin/feature-flags" }],
    },
    {
        id: "ACT-8995",
        ts: "2025-10-03T18:45:53+05:30",
        type: "system.health",
        severity: "info",
        actor: { id: "SYS", name: "System", link: "/admin/system-status" },
        target: { kind: "system", id: "APP", name: "System Status", link: "/admin/system-status" },
        message: "All services nominal.",
        meta: { ip: "127.0.0.1", ua: "Health/1.0", location: "—" },
        links: [{ label: "System Status", to: "/admin/system-status" }],
    },
    {
        id: "ACT-8994",
        ts: "2025-10-03T15:12:41+05:30",
        type: "integration.synced",
        severity: "info",
        actor: { id: "U-1004", name: "Ops", link: "/admin/users/U-1004" },
        target: { kind: "integration", id: "INT-GST", name: "GST Portal", link: "/admin/integrations" },
        message: "GST returns synced.",
        meta: { ip: "192.0.2.10", ua: "Chrome 124 / macOS", location: "Pune, IN" },
        links: [{ label: "Integrations", to: "/admin/integrations" }, { label: "GST Reports", to: "/reports/gst" }],
    },
    {
        id: "ACT-8993",
        ts: "2025-10-03T11:28:19+05:30",
        type: "email.template.edited",
        severity: "info",
        actor: { id: "U-1015", name: "Comms", link: "/admin/users/U-1015" },
        target: { kind: "email-template", id: "ET-INV", name: "Invoice Email", link: "/admin/email-templates" },
        message: "Updated invoice email template.",
        meta: { ip: "192.0.2.10", ua: "Chrome 124 / macOS", location: "Pune, IN" },
        links: [{ label: "Email Templates", to: "/admin/email-templates" }, { label: "Invoices", to: "/invoices" }],
    },
    {
        id: "ACT-8992",
        ts: "2025-10-03T09:00:01+05:30",
        type: "sms.template.edited",
        severity: "info",
        actor: { id: "U-1015", name: "Comms", link: "/admin/users/U-1015" },
        target: { kind: "sms-template", id: "ST-OTP", name: "OTP SMS", link: "/admin/sms-templates" },
        message: "Edited OTP SMS template.",
        meta: { ip: "192.0.2.10", ua: "Chrome 124 / macOS", location: "Pune, IN" },
        links: [{ label: "SMS Templates", to: "/admin/sms-templates" }],
    },
];

/* Severity icon map */
const SevIcon = ({ level }) => {
    if (level === "warn") return <MdOutlineWarningAmber size={16} aria-label="warning" />;
    if (level === "error") return <RiErrorWarningLine size={16} aria-label="error" />;
    return <MdHistory size={16} aria-label="info" />;
};

const AdminActivityPage = () => {
    const { search: queryString } = useLocation();
    const [q, setQ] = useState("");
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [copiedId, setCopiedId] = useState(null);

    useEffect(() => {
        // autofocus search on mount
        const el = document.getElementById("activity-search");
        if (el) {
            const id = requestAnimationFrame(() => {
                try { el.focus({ preventScroll: true }); } catch { el.focus(); }
            });
            return () => cancelAnimationFrame(id);
        }
    }, []);

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        if (!tokens.length) return ACTIVITY;
        return ACTIVITY.filter(a => {
            const hay = [
                a.id,
                a.type,
                a.severity,
                a.actor?.name,
                a.actor?.id,
                a.target?.name,
                a.target?.id,
                a.message,
                a.meta?.ip,
                a.meta?.location,
                a.meta?.ua,
            ].join(" ").toLowerCase();
            return tokens.every(t => hay.includes(t));
        });
    }, [q]);

    const grouped = useMemo(() => {
        const map = new Map();
        for (const item of filtered) {
            const d = new Date(item.ts);
            const key = fmtDate(d);
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(item);
        }
        // Sort groups (desc by date) and items (desc by timestamp)
        return Array.from(map.entries())
            .sort((a, b) => new Date(b[0]) - new Date(a[0]))
            .map(([dateLabel, items]) => ({
                dateLabel,
                items: items.sort((a, b) => new Date(b.ts) - new Date(a.ts)),
            }));
    }, [filtered]);

    const onExport = () => {
        downloadJSON(`admin-activity-${Date.now()}.json`, filtered);
    };

    const onPrint = () => {
        document.body.classList.add("print-section-mode");
        const after = () => {
            document.body.classList.remove("print-section-mode");
            window.removeEventListener("afterprint", after);
        };
        window.addEventListener("afterprint", after);
        window.print();
    };

    const onDisabledAction = () => {
        if (DEMO_MODE) {
            setShowDemoModal(true);
            return;
        }
    };

    const copyDeeplink = async (id) => {
        const url = `${window.location.origin}${BASE}/admin/activity?at=${encodeURIComponent(id)}`;
        try {
            await navigator.clipboard.writeText(url);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 1500);
        } catch {
            /* ignore */
        }
    };

    return (
        <Styled.Wrap>
            {/* Print-only CSS (section based) */}
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

            {/* Toolbar */}
            <div className="toolbar">
                <div className="title">
                    <RiSettings5Line size={22} />
                    <h1>Admin Activity</h1>
                    <span className="sub">system & security timeline</span>
                </div>

                <div className="quick-nav">
                    <NavLink to="/admin/users" className="chip" title="Users"><RiUserSettingsLine /> Users</NavLink>
                    <NavLink to="/admin/roles" className="chip" title="Roles"><MdNorthEast /> Roles</NavLink>
                    <NavLink to="/admin/permissions" className="chip" title="Permissions"><RiShieldKeyholeLine /> Permissions</NavLink>
                    <NavLink to="/admin/system-status" className="chip" title="System Status"><FiExternalLink /> System Status</NavLink>
                    <NavLink to="/admin/feature-flags" className="chip" title="Feature Flags"><FiExternalLink /> Feature Flags</NavLink>
                    <NavLink to="/admin/integrations" className="chip" title="Integrations"><FiExternalLink /> Integrations</NavLink>
                    <NavLink to="/admin/email-templates" className="chip" title="Email Templates"><FiExternalLink /> Email Templates</NavLink>
                    <NavLink to="/admin/sms-templates" className="chip" title="SMS Templates"><FiExternalLink /> SMS Templates</NavLink>
                </div>

                <div className="actions">
                    <div className="search">
                        <MdOutlineSearch size={18} />
                        <input
                            id="activity-search"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search activity (actor, type, IP, message...)"
                            aria-label="Search admin activity"
                        />
                        {q && (
                            <button className="ghost" onClick={() => setQ("")} aria-label="Clear search">
                                <MdClose size={16} />
                            </button>
                        )}
                    </div>

                    <div className="sp" />
                    <button className="ghost" onClick={() => window.location.reload()} title="Refresh">
                        <FiRefreshCw size={16} />
                        <span>Refresh</span>
                    </button>
                    <button onClick={onExport} title="Export JSON">
                        <MdOutlineDownload size={16} />
                        <span>Export</span>
                    </button>
                    <button onClick={onPrint} title="Print section">
                        <MdPrint size={16} />
                        <span>Print</span>
                    </button>
                    <button className="danger" onClick={onDisabledAction} title="Clear activity (demo)">
                        <RiErrorWarningLine size={16} />
                        <span>Clear</span>
                    </button>
                </div>
            </div>

            {/* Key cards (static/presentational) */}
            <div className="cards">
                <div className="card stat">
                    <div className="value">09</div>
                    <div className="label">Events today</div>
                </div>
                <div className="card stat">
                    <div className="value">24</div>
                    <div className="label">Last 24 hrs</div>
                </div>
                <div className="card stat">
                    <div className="value">3</div>
                    <div className="label">Warnings</div>
                </div>
                <div className="card stat">
                    <div className="value">0</div>
                    <div className="label">Errors</div>
                </div>
            </div>

            {/* Filter bar (links only) */}
            <div className="filters">
                <span>Quick filters:</span>
                <Link to="/admin/activity?type=auth.login" className="pill">Logins</Link>
                <Link to="/admin/activity?type=order.created" className="pill">Orders</Link>
                <Link to="/admin/activity?type=invoice.issued" className="pill">Invoices</Link>
                <Link to="/admin/activity?severity=warn" className="pill">Warnings</Link>
                <Link to="/admin/activity?severity=error" className="pill">Errors</Link>
                <Link to="/admin/activity?date=today" className="pill">Today</Link>
                <Link to="/admin/activity?date=yesterday" className="pill">Yesterday</Link>
            </div>

            {/* Printable content wrapper */}
            <div id="search-print-area">
                {grouped.map(({ dateLabel, items }) => (
                    <section className="day" key={dateLabel}>
                        <header className="dayHeader">
                            <span className="date">{dateLabel}</span>
                            <span className="hint">({items.length} events)</span>
                        </header>

                        <ul className="timeline">
                            {items.map((a) => {
                                const d = new Date(a.ts);
                                return (
                                    <li className="row" key={a.id}>
                                        <div className={`dot ${a.severity}`}>
                                            <SevIcon level={a.severity} />
                                        </div>

                                        <div className="rowMain">
                                            <div className="rowTop">
                                                <div className="meta">
                                                    <span className="id">#{a.id}</span>
                                                    <span className="type">{a.type}</span>
                                                    <span className={`sev ${a.severity}`}>{a.severity}</span>
                                                    <span className="ts" title={fmtDateTime(d)}>{fmtTime(d)}</span>
                                                </div>
                                                <div className="rowActions">
                                                    <button className="ghost" onClick={() => copyDeeplink(a.id)} title="Copy deep link">
                                                        <MdContentCopy size={14} />
                                                        <span>{copiedId === a.id ? "Copied" : "Copy link"}</span>
                                                    </button>
                                                    <Link to={`${a.target?.link || "#"}`} className="ghost" title="Open target">
                                                        <FiExternalLink size={14} />
                                                        <span>Open</span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="rowBody">
                                                <div className="who">
                                                    <span className="label">Actor:</span>
                                                    <Link to={a.actor?.link || "#"} className="entity">{a.actor?.name}</Link>
                                                    <span className="muted">({a.actor?.id})</span>
                                                </div>

                                                <div className="what">
                                                    <span className="label">Target:</span>
                                                    {a.target?.link ? (
                                                        <Link to={a.target.link} className="entity">{a.target?.name}</Link>
                                                    ) : (
                                                        <span className="entity">{a.target?.name}</span>
                                                    )}
                                                    <span className="muted">({a.target?.id})</span>
                                                </div>

                                                <div className="msg">{a.message}</div>

                                                <div className="details">
                                                    <div className="kv">
                                                        <span>IP</span><code>{a.meta?.ip}</code>
                                                    </div>
                                                    <div className="kv">
                                                        <span>Location</span><code>{a.meta?.location}</code>
                                                    </div>
                                                    <div className="kv">
                                                        <span>User Agent</span><code>{a.meta?.ua}</code>
                                                    </div>
                                                </div>

                                                {a.links?.length ? (
                                                    <div className="links">
                                                        {a.links.map((l, i) => (
                                                            <NavLink key={i} to={l.to} end className="link">
                                                                {l.label}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                ))}
            </div>

            {/* Demo modal (non-blocking confirm) */}
            {showDemoModal && (
                <div className="modal" role="dialog" aria-modal="true" aria-labelledby="demoTitle">
                    <div className="modalCard">
                        <div className="modalHead">
                            <h3 id="demoTitle">Demo mode</h3>
                            <button className="icon" onClick={() => setShowDemoModal(false)} aria-label="Close">
                                <MdClose size={18} />
                            </button>
                        </div>
                        <div className="modalBody">
                            <p>This is a display-only theme. Destructive actions are disabled here.</p>
                            <p>You can still navigate, search, print, and export the activity.</p>
                        </div>
                        <div className="modalFoot">
                            <button onClick={() => setShowDemoModal(false)}>Okay</button>
                        </div>
                    </div>
                </div>
            )}
        </Styled.Wrap>
    );
};

export default AdminActivityPage;
