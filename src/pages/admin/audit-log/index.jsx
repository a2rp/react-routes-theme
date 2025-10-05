import React, { useMemo, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/** --- small date utils (consistent app-wide format) --- */
const pad = (n) => (n < 10 ? `0${n}` : `${n}`);
const WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const asDate = (iso) => new Date(iso);
const fmtDate = (iso) => {
    const d = asDate(iso); return `${WD[d.getDay()]} ${MN[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (iso) => {
    const d = asDate(iso); return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

/** --- demo rows (display-only) --- */
const rows = [
    {
        id: "EVT-90031",
        at: "2025-10-04T15:38:20+05:30",
        actor: { id: "USR-010", name: "Priya Sharma", email: "priya@acme.in" },
        action: "LOGIN_SUCCESS",
        entity: { type: "user", id: "USR-010", label: "Priya Sharma" },
        source: "web",
        ip: "103.47.18.201",
        status: "success",
        meta: { userAgent: "Chrome 129 / Windows 11", mfa: "TOTP", location: "Patna, IN" }
    },
    {
        id: "EVT-90032",
        at: "2025-10-04T15:41:02+05:30",
        actor: { id: "USR-010", name: "Priya Sharma", email: "priya@acme.in" },
        action: "ORDER_UPDATE",
        entity: { type: "order", id: "ORD-3001", label: "SO-3001" },
        source: "web",
        ip: "103.47.18.201",
        status: "success",
        meta: { fields: ["status: Confirmed → Packed", "dispatchAt: 2025-10-05T10:00:00+05:30"], itemsChanged: 2 }
    },
    {
        id: "EVT-90033",
        at: "2025-10-04T15:43:10+05:30",
        actor: { id: "USR-003", name: "Ashish Ranjan", email: "ashish@acme.in" },
        action: "INVOICE_PRINT",
        entity: { type: "invoice", id: "INV-2031", label: "INV-2031" },
        source: "web",
        ip: "49.36.129.77",
        status: "success",
        meta: { copies: 1, template: "Standard A4", customerId: "CUST-1001" }
    },
    {
        id: "EVT-90034",
        at: "2025-10-04T15:48:27+05:30",
        actor: { id: "USR-002", name: "Rohit Mehta", email: "rohit@acme.in" },
        action: "USER_ROLE_CHANGE",
        entity: { type: "user", id: "USR-005", label: "Neha Singh" },
        source: "admin",
        ip: "10.0.0.48",
        status: "warning",
        meta: { from: ["viewer"], to: ["manager"], reason: "Team lead handover" }
    },
    {
        id: "EVT-90035",
        at: "2025-10-04T15:55:42+05:30",
        actor: { id: "USR-010", name: "Priya Sharma", email: "priya@acme.in" },
        action: "FAILED_LOGIN",
        entity: { type: "user", id: "USR-010", label: "Priya Sharma" },
        source: "web",
        ip: "103.47.18.201",
        status: "error",
        meta: { reason: "Wrong TOTP", attempt: 1 }
    },
    {
        id: "EVT-90036",
        at: "2025-10-04T16:01:05+05:30",
        actor: { id: "USR-002", name: "Rohit Mehta", email: "rohit@acme.in" },
        action: "LEDGER_EXPORT",
        entity: { type: "ledger", id: "ACC-11001", label: "Sales Ledger" },
        source: "web",
        ip: "10.0.0.48",
        status: "success",
        meta: { period: "FY 2024-25 (Q2)", format: "CSV", fileSize: "212KB" }
    },
    {
        id: "EVT-90037",
        at: "2025-10-04T16:10:21+05:30",
        actor: { id: "USR-005", name: "Neha Singh", email: "neha@acme.in" },
        action: "SHIPMENT_LABELS_GENERATE",
        entity: { type: "shipment", id: "SHP-5521", label: "SHP-5521" },
        source: "web",
        ip: "49.36.129.77",
        status: "success",
        meta: { carrier: "Delhivery", labels: 3, size: "A6" }
    },
    {
        id: "EVT-90038",
        at: "2025-10-04T16:18:13+05:30",
        actor: { id: "USR-003", name: "Ashish Ranjan", email: "ashish@acme.in" },
        action: "GST_RETURN_VIEW",
        entity: { type: "gst", id: "GSTR-3B-2025-09", label: "GSTR-3B Sep 2025" },
        source: "web",
        ip: "49.36.129.77",
        status: "success",
        meta: { period: "Sep 2025", section: "Outward Supplies" }
    }
];

/** --- helpers --- */
const getEntityHref = (e) => {
    if (!e) return "#";
    switch (e.type) {
        case "order": return `/orders/${e.id}`;
        case "invoice": return `/invoices/${e.id}`;
        case "user": return `/admin/users/${e.id}`;
        case "ledger": return `/finance/ledgers/${e.id}`;
        case "shipment": return `/shipments/${e.id}`;
        case "gst": return `/reports/gst`;
        default: return `/${e.type}/${e.id}`;
    }
};

const TABS = [
    { key: "all", label: "All Events" },
    { key: "auth", label: "Auth" },
    { key: "security", label: "Security" },
    { key: "data", label: "Data" },
    { key: "system", label: "System" },
];

const categorize = (row) => {
    if (/login/i.test(row.action)) return "auth";
    if (/role|permission|token|mfa/i.test(row.action)) return "security";
    if (/order|invoice|ledger|shipment|gst|export|update|print/i.test(row.action)) return "data";
    return "system";
};

const DemoConfirm = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.ModalBackdrop role="dialog" aria-modal="true">
            <Styled.ModalCard>
                <h3>{title}</h3>
                <p>{message}</p>
                <div className="actions">
                    <button onClick={onClose}>Close</button>
                </div>
            </Styled.ModalCard>
        </Styled.ModalBackdrop>
    );
};

const Drawer = ({ open, onClose, row }) => {
    if (!open || !row) return null;
    return (
        <>
            <Styled.DrawerBackdrop onClick={onClose} />
            <Styled.DrawerPanel role="region" aria-label="Audit event detail">
                <div className="drawer-head">
                    <h3>Event Detail</h3>
                    <button onClick={onClose} aria-label="Close">✕</button>
                </div>
                <div className="drawer-body">
                    <section>
                        <h4>Event</h4>
                        <div className="kv">
                            <span>ID</span><span>{row.id}</span>
                            <span>Action</span><span>{row.action}</span>
                            <span>Status</span>
                            <span><span className={`pill ${row.status}`}>{row.status}</span></span>
                            <span>Occurred</span><span>{fmtDateTime(row.at)}</span>
                            <span>Source</span><span>{row.source}</span>
                            <span>IP</span><span>{row.ip}</span>
                        </div>
                    </section>

                    <section>
                        <h4>Actor</h4>
                        <div className="kv">
                            <span>Name</span>
                            <span><NavLink to={`/admin/users/${row.actor.id}`}>{row.actor.name}</NavLink></span>
                            <span>Email</span><span>{row.actor.email}</span>
                            <span>User ID</span><span>{row.actor.id}</span>
                        </div>
                    </section>

                    <section>
                        <h4>Entity</h4>
                        <div className="kv">
                            <span>Type</span><span>{row.entity.type}</span>
                            <span>ID</span><span>{row.entity.id}</span>
                            <span>Label</span>
                            <span><NavLink to={getEntityHref(row.entity)}>{row.entity.label}</NavLink></span>
                        </div>
                    </section>

                    <section>
                        <h4>Metadata</h4>
                        <div className="meta">
                            {Object.entries(row.meta || {}).map(([k, v]) => (
                                <div key={k} className="meta-row">
                                    <div className="k">{k}</div>
                                    <div className="v">{Array.isArray(v) ? v.join(", ") : String(v)}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h4>Quick Links</h4>
                        <div className="links">
                            <NavLink to="/admin/users" className="chip">Users</NavLink>
                            <NavLink to="/admin/roles" className="chip">Roles</NavLink>
                            <NavLink to="/admin/permissions" className="chip">Permissions</NavLink>
                            <NavLink to="/admin/system-status" className="chip">System Status</NavLink>
                            <NavLink to="/orders" className="chip">Orders</NavLink>
                            <NavLink to="/invoices" className="chip">Invoices</NavLink>
                            <NavLink to="/shipments" className="chip">Shipments</NavLink>
                            <NavLink to="/finance/ledgers" className="chip">Ledgers</NavLink>
                            <NavLink to="/reports/gst" className="chip">GST Report</NavLink>
                        </div>
                    </section>
                </div>
            </Styled.DrawerPanel>
        </>
    );
};

const AdminAuditLogPage = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState("all");
    const [q, setQ] = useState("");
    const [selected, setSelected] = useState(null);
    const [confirmOpen, setConfirmOpen] = useState(false);

    useEffect(() => {
        document.title = "Audit Log • Admin";
    }, []);

    const list = useMemo(() => {
        const qTokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return rows.filter(r => {
            if (tab !== "all" && categorize(r) !== tab) return false;
            if (!qTokens.length) return true;
            const hay = [
                r.id, r.action, r.status, r.ip, r.source,
                r.actor?.name, r.actor?.email,
                r.entity?.type, r.entity?.id, r.entity?.label,
                JSON.stringify(r.meta || {})
            ].join(" ").toLowerCase();
            return qTokens.every(t => hay.includes(t));
        });
    }, [tab, q]);

    const onPrint = () => {
        document.body.classList.add("print-section-mode");
        window.setTimeout(() => {
            window.print();
            window.setTimeout(() => document.body.classList.remove("print-section-mode"), 200);
        }, 10);
    };

    return (
        <Styled.Page>
            {/* print css for section-only print */}
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
                <NavLink to="/home">Home</NavLink>
                <span>/</span>
                <NavLink to="/admin/system-status">Admin</NavLink>
                <span>/</span>
                <strong>Audit Log</strong>
            </Styled.Breadcrumbs>

            <Styled.HeadRow>
                <div className="title">
                    <h1>Audit Log</h1>
                    <div className="sub">Last updated: {fmtDateTime("2025-10-04T16:21:00+05:30")}</div>
                </div>
                <div className="actions">
                    <button onClick={() => setConfirmOpen(true)} title="Demo only">
                        Purge Logs
                    </button>
                    <button onClick={onPrint} title="Print current view">
                        Print
                    </button>
                    <NavLink to="/admin/system-status" className="ghost">System Status</NavLink>
                    <NavLink to="/admin/users" className="ghost">Users</NavLink>
                </div>
            </Styled.HeadRow>

            <Styled.Toolbar>
                <div className="tabs" role="tablist" aria-label="Audit categories">
                    {TABS.map(t => (
                        <button
                            key={t.key}
                            role="tab"
                            aria-selected={tab === t.key}
                            className={tab === t.key ? "active" : ""}
                            onClick={() => setTab(t.key)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                <div className="filters">
                    <input
                        type="text"
                        placeholder="Search events, users, entities…"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        aria-label="Search audit logs"
                    />
                    <div className="chips">
                        <NavLink to="/admin/permissions" className="chip">Permissions</NavLink>
                        <NavLink to="/settings/appearance" className="chip">Appearance</NavLink>
                        <NavLink to="/reports" className="chip">Reports</NavLink>
                        <NavLink to="/tools/import-export" className="chip">Import/Export</NavLink>
                    </div>
                </div>
            </Styled.Toolbar>

            <Styled.TableWrap id="search-print-area">
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Action</th>
                            <th>Actor</th>
                            <th>Entity</th>
                            <th>Source</th>
                            <th>IP</th>
                            <th>Status</th>
                            <th className="right">Open</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(row => (
                            <tr key={row.id}>
                                <td>
                                    <div className="mono">{fmtDate(row.at)}</div>
                                    <div className="muted">{fmtTime(row.at)}</div>
                                </td>
                                <td>
                                    <div className="bold">{row.action.replace(/_/g, " ")}</div>
                                    <div className="muted">#{row.id}</div>
                                </td>
                                <td>
                                    <NavLink to={`/admin/users/${row.actor.id}`}>{row.actor.name}</NavLink>
                                    <div className="muted">{row.actor.email}</div>
                                </td>
                                <td>
                                    <NavLink to={getEntityHref(row.entity)}>{row.entity.label}</NavLink>
                                    <div className="muted">{row.entity.type} • {row.entity.id}</div>
                                </td>
                                <td>{row.source}</td>
                                <td className="mono">{row.ip}</td>
                                <td><span className={`pill ${row.status}`}>{row.status}</span></td>
                                <td className="right">
                                    <button onClick={() => setSelected(row)} aria-label="Open detail">View</button>
                                </td>
                            </tr>
                        ))}
                        {!list.length && (
                            <tr>
                                <td colSpan={8} className="empty">
                                    No events match your filters.
                                    <div className="links">
                                        <NavLink to="/admin/users">Go to Users</NavLink>
                                        <NavLink to="/orders">Open Orders</NavLink>
                                        <NavLink to="/invoices">Open Invoices</NavLink>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Styled.TableWrap>

            <Styled.FooterLinks>
                <div className="group">
                    <span>Admin</span>
                    <NavLink to="/admin/roles">Roles</NavLink>
                    <NavLink to="/admin/permissions">Permissions</NavLink>
                    <NavLink to="/admin/feature-flags">Feature Flags</NavLink>
                    <NavLink to="/admin/integrations">Integrations</NavLink>
                </div>
                <div className="group">
                    <span>Billing</span>
                    <NavLink to="/invoices">Invoices</NavLink>
                    <NavLink to="/receipts">Receipts</NavLink>
                    <NavLink to="/invoices/credit-notes">Credit Notes</NavLink>
                </div>
                <div className="group">
                    <span>Ops</span>
                    <NavLink to="/shipments">Shipments</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                    <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                </div>
                <div className="group">
                    <span>Reports</span>
                    <NavLink to="/reports/sales">Sales</NavLink>
                    <NavLink to="/reports/inventory">Inventory</NavLink>
                    <NavLink to="/reports/gst">GST</NavLink>
                </div>
            </Styled.FooterLinks>

            <Drawer open={!!selected} onClose={() => setSelected(null)} row={selected} />
            <DemoConfirm
                open={confirmOpen}
                title="Action disabled"
                message="This is a demo environment. Destructive actions are turned off."
                onClose={() => setConfirmOpen(false)}
            />
        </Styled.Page>
    );
};

export default AdminAuditLogPage;
