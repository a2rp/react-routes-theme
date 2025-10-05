import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { FiCopy, FiPrinter, FiRefreshCw, FiX, FiExternalLink, FiDownload, FiShield, FiLock, FiLink, FiKey } from "react-icons/fi";

/** Demo fixtures — display-only (preformatted dates per convention) */
const TOKENS = [
    {
        id: "TKN-9001",
        label: "Production – Web App",
        prefix: "pk_live",
        masked: "pk_live_••••••••••7FQ2",
        lastFour: "7FQ2",
        scope: ["read:customers", "read:orders", "read:invoices"],
        environment: "Production",
        created: "Sat Oct 04 2025 09:12:36hrs",
        lastUsed: "Sat Oct 04 2025 15:38:20hrs",
        expires: "—",
        status: "Active",
    },
    {
        id: "TKN-9002",
        label: "Production – Mobile",
        prefix: "pk_live",
        masked: "pk_live_••••••••••A1Z9",
        lastFour: "A1Z9",
        scope: ["read:customers", "read:orders"],
        environment: "Production",
        created: "Fri Oct 03 2025 14:03:09hrs",
        lastUsed: "Sat Oct 04 2025 12:18:02hrs",
        expires: "—",
        status: "Active",
    },
    {
        id: "TKN-9003",
        label: "Staging – CI Runner",
        prefix: "pk_test",
        masked: "pk_test_••••••••••Q2M4",
        lastFour: "Q2M4",
        scope: ["read:*"],
        environment: "Staging",
        created: "Thu Oct 02 2025 11:32:40hrs",
        lastUsed: "Fri Oct 03 2025 20:01:00hrs",
        expires: "Sun Nov 30 2025",
        status: "Active",
    },
    {
        id: "TKN-9004",
        label: "Legacy – Partner Sync",
        prefix: "pk_legacy",
        masked: "pk_legacy_••••••••••8K3X",
        lastFour: "8K3X",
        scope: ["read:partners"],
        environment: "Production",
        created: "Mon Sep 15 2025 10:05:12hrs",
        lastUsed: "Mon Sep 22 2025 19:42:09hrs",
        expires: "—",
        status: "Revoked",
    },
    {
        id: "TKN-9005",
        label: "Sandbox – QA Team",
        prefix: "pk_test",
        masked: "pk_test_••••••••••9D7H",
        lastFour: "9D7H",
        scope: ["read:*"],
        environment: "Sandbox",
        created: "Wed Oct 01 2025 08:20:00hrs",
        lastUsed: "Sat Oct 04 2025 08:21:10hrs",
        expires: "—",
        status: "Active",
    },
];

/** Tiny toast */
function useToast() {
    const [toasts, setToasts] = useState([]);
    const push = (msg) => {
        const id = Math.random().toString(36).slice(2);
        setToasts((x) => [...x, { id, msg }]);
        setTimeout(() => setToasts((x) => x.filter((t) => t.id !== id)), 2200);
    };
    return { toasts, push };
}

/** Non-destructive confirm modal (demo message) */
function ConfirmModal({ open, title, body, onClose }) {
    if (!open) return null;
    return (
        <div className="modalRoot" role="dialog" aria-modal="true">
            <div className="modalCard">
                <div className="modalHead">
                    <h4>{title}</h4>
                    <button className="iconBtn" onClick={onClose} aria-label="Close">
                        <FiX />
                    </button>
                </div>
                <div className="modalBody">
                    <p>{body}</p>
                    <div className="callout">
                        This is a demo preview. Actions are disabled by design.
                    </div>
                </div>
                <div className="modalFoot">
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default function SettingsTokensPage() {
    const navigate = useNavigate();
    const { toasts, push } = useToast();
    const [query, setQuery] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return TOKENS;
        return TOKENS.filter((t) =>
            [t.label, t.environment, t.status, t.prefix, t.lastFour]
                .join(" ")
                .toLowerCase()
                .includes(q)
        );
    }, [query]);

    const handleCopy = async (masked) => {
        try {
            await navigator.clipboard.writeText(masked);
            push("Copied to clipboard");
        } catch {
            push("Copy not available");
        }
    };

    const handlePrint = () => {
        // Print only the table section (search-print-area)
        document.body.classList.add("print-section-mode");
        setTimeout(() => {
            window.print();
            setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
        }, 50);
    };

    return (
        <Styled.Page>
            {/* Print CSS — section-only */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}</style>

            {/* Breadcrumbs */}
            <nav className="crumbs" aria-label="Breadcrumb">
                <NavLink to="/home">Home</NavLink>
                <span>/</span>
                <NavLink to="/settings">Settings</NavLink>
                <span>/</span>
                <span aria-current="page">Tokens</span>
            </nav>

            {/* Page header: title + actions */}
            <header className="pageHead">
                <div className="titleBlock">
                    <div className="titleLine">
                        <FiKey className="titleIcon" aria-hidden="true" />
                        <h1>API Tokens</h1>
                        <span className="badge">Demo</span>
                    </div>
                    <p className="subtle">
                        Manage read-only API tokens for integrations and client applications. This preview is display-only.
                    </p>
                </div>

                <div className="actions">
                    <button className="btn" disabled title="Demo: disabled">New Token</button>
                    <button className="btn" onClick={() => setModalOpen(true)} title="Demo: disabled">Rotate All</button>
                    <button className="btn" onClick={handlePrint} title="Print this section">
                        <FiPrinter /> Print
                    </button>
                    <Link className="btn ghost" to="/tools/import-export" title="Go to Import/Export">
                        <FiDownload /> Export
                    </Link>
                </div>
            </header>

            {/* Quick nav */}
            <div className="quickNav">
                <Link to="/settings/profile"><FiExternalLink /> Profile</Link>
                <Link to="/settings/appearance"><FiExternalLink /> Appearance</Link>
                <Link to="/settings/notifications"><FiExternalLink /> Notifications</Link>
                <Link to="/settings/print-templates"><FiExternalLink /> Print Templates</Link>
                <Link to="/admin/users"><FiExternalLink /> Admin · Users</Link>
                <Link to="/admin/roles"><FiExternalLink /> Admin · Roles</Link>
                <Link to="/admin/permissions"><FiExternalLink /> Admin · Permissions</Link>
                <Link to="/tools/theme-tokens"><FiExternalLink /> Theme Tokens</Link>
            </div>

            {/* KPIs */}
            <section className="kpis">
                <div className="kpiCard">
                    <div className="kpiIcon"><FiShield /></div>
                    <div className="kpiMeta">
                        <div className="kpiValue">4</div>
                        <div className="kpiLabel">Active Tokens</div>
                    </div>
                </div>
                <div className="kpiCard">
                    <div className="kpiIcon"><FiLock /></div>
                    <div className="kpiMeta">
                        <div className="kpiValue">1</div>
                        <div className="kpiLabel">Revoked</div>
                    </div>
                </div>
                <div className="kpiCard">
                    <div className="kpiIcon"><FiRefreshCw /></div>
                    <div className="kpiMeta">
                        <div className="kpiValue">Sat Oct 04 2025 13:12:00hrs</div>
                        <div className="kpiLabel">Last Rotation</div>
                    </div>
                </div>
            </section>

            {/* Filters + helper */}
            <section className="toolbar">
                <div className="searchBox">
                    <input
                        type="text"
                        placeholder="Search tokens, labels, env, last 4…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Search tokens"
                    />
                </div>
                <div className="helperLinks">
                    <Link to="/help" className="ghost"><FiLink /> Help Center</Link>
                    <Link to="/faq" className="ghost">FAQ</Link>
                    <Link to="/changelog" className="ghost">Changelog</Link>
                    <Link to="/roadmap" className="ghost">Roadmap</Link>
                </div>
            </section>

            {/* Table + detail hint */}
            <section className="tableWrap card" id="search-print-area" aria-label="Tokens table">
                <div className="tableHead">
                    <h3>Token Inventory</h3>
                    <span className="hint">Select any row to view deep links &amp; related routes.</span>
                </div>
                <div className="tableScroller">
                    <table>
                        <thead>
                            <tr>
                                <th>Label</th>
                                <th>Token</th>
                                <th>Env</th>
                                <th>Scope</th>
                                <th>Created</th>
                                <th>Last Used</th>
                                <th>Expires</th>
                                <th>Status</th>
                                <th className="right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((t) => (
                                <tr key={t.id} className={t.status === "Revoked" ? "mutedRow" : ""}>
                                    <td>
                                        <div className="cellTitle">{t.label}</div>
                                        <div className="meta">
                                            <span className="mono">{t.id}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="mono">{t.masked}</div>
                                        <button className="linkBtn" onClick={() => handleCopy(t.masked)} title="Copy masked token">
                                            <FiCopy /> Copy
                                        </button>
                                    </td>
                                    <td>{t.environment}</td>
                                    <td>
                                        <div className="scopeChips">
                                            {t.scope.map((s, i) => (<span key={i} className="chip">{s}</span>))}
                                        </div>
                                    </td>
                                    <td>{t.created}</td>
                                    <td>{t.lastUsed}</td>
                                    <td>{t.expires}</td>
                                    <td>
                                        <span className={`status ${t.status.toLowerCase()}`}>{t.status}</span>
                                    </td>
                                    <td className="right">
                                        <div className="rowActions">
                                            <Link to={`/settings/tokens`} className="ghost small"><FiExternalLink /> Open</Link>
                                            <button className="ghost small" disabled title="Demo: disabled">Revoke</button>
                                            <button className="ghost small" disabled title="Demo: disabled">Regenerate</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={9}>
                                        <div className="empty">
                                            No tokens match your search.
                                            <button onClick={() => setQuery("")} className="ghost small">Clear search</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Deep links / related routes */}
                <div className="relatedRoutes">
                    <div className="rrCol">
                        <h4>Related Settings</h4>
                        <ul>
                            <li><NavLink to="/settings/profile">Profile</NavLink></li>
                            <li><NavLink to="/settings/appearance">Appearance</NavLink></li>
                            <li><NavLink to="/settings/notifications">Notifications</NavLink></li>
                            <li><NavLink to="/settings/backups">Backups</NavLink></li>
                            <li><NavLink to="/settings/print-templates">Print Templates</NavLink></li>
                            <li><NavLink to="/settings/webhooks">Webhooks</NavLink></li>
                        </ul>
                    </div>
                    <div className="rrCol">
                        <h4>Admin &amp; Access</h4>
                        <ul>
                            <li><NavLink to="/admin/users">Users</NavLink></li>
                            <li><NavLink to="/admin/roles">Roles</NavLink></li>
                            <li><NavLink to="/admin/permissions">Permissions</NavLink></li>
                            <li><NavLink to="/admin/audit-log">Audit Log</NavLink></li>
                            <li><NavLink to="/admin/activity">Activity</NavLink></li>
                        </ul>
                    </div>
                    <div className="rrCol">
                        <h4>Developer Tools</h4>
                        <ul>
                            <li><NavLink to="/tools/import-export">Import / Export</NavLink></li>
                            <li><NavLink to="/tools/theme-tokens">Theme Tokens</NavLink></li>
                            <li><NavLink to="/tools/playground">Playground</NavLink></li>
                            <li><NavLink to="/help">Help Center</NavLink></li>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Toasts */}
            <div className="toasts" aria-live="polite" aria-atomic="true">
                {toasts.map((t) => (
                    <div key={t.id} className="toast">{t.msg}</div>
                ))}
            </div>

            {/* Demo modal */}
            <ConfirmModal
                open={modalOpen}
                title="Rotate All Tokens"
                body="Rotation updates all active tokens. In the preview build, this operation is disabled."
                onClose={() => setModalOpen(false)}
            />
        </Styled.Page>
    );
}
