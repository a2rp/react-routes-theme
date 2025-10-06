import React, { useMemo, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Styled as S } from "./styled";
import { FiCopy, FiEdit2, FiEye, FiPrinter, FiTrash2, FiPlus, FiX, FiSearch } from "react-icons/fi";

/** --------- demo fixtures (display-only) --------- */
const TEMPLATES = [
    {
        id: "TMP-1001",
        name: "Login OTP",
        type: "OTP",
        category: "Transactional",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000001",
        status: "Active",
        lastUpdated: "2025-10-04T15:38:20+05:30",
        variables: ["otp", "minutes"],
        body: "Your OTP is {{otp}}. It expires in {{minutes}} minutes. Do not share this with anyone.",
        usage: { last30d: 12890, lastSentAt: "2025-10-04T12:10:05+05:30" },
    },
    {
        id: "TMP-1002",
        name: "Order Confirmed",
        type: "System",
        category: "Transactional",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000002",
        status: "Active",
        lastUpdated: "2025-09-30T09:12:43+05:30",
        variables: ["order_id", "amount"],
        body: "Order {{order_id}} confirmed. Payment of ₹{{amount}} received. Track from account → Orders.",
        usage: { last30d: 7852, lastSentAt: "2025-10-04T10:28:18+05:30" },
    },
    {
        id: "TMP-1003",
        name: "Delivery Out for Delivery",
        type: "Alert",
        category: "Transactional",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000003",
        status: "Active",
        lastUpdated: "2025-09-26T18:28:57+05:30",
        variables: ["shipment_id", "eta"],
        body: "Shipment {{shipment_id}} is out for delivery. ETA: {{eta}}. Keep phone reachable.",
        usage: { last30d: 5090, lastSentAt: "2025-10-04T09:13:42+05:30" },
    },
    {
        id: "TMP-1004",
        name: "Low Balance Reminder",
        type: "Reminder",
        category: "System",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000004",
        status: "Active",
        lastUpdated: "2025-09-21T11:05:23+05:30",
        variables: ["balance"],
        body: "Heads up! Your wallet balance is ₹{{balance}}. Recharge to avoid interruptions.",
        usage: { last30d: 2130, lastSentAt: "2025-10-03T20:22:28+05:30" },
    },
    {
        id: "TMP-1005",
        name: "Welcome Promo",
        type: "Campaign",
        category: "Promotional",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000005",
        status: "Paused",
        lastUpdated: "2025-09-20T14:55:01+05:30",
        variables: ["code"],
        body: "Welcome aboard! Use code {{code}} on your first purchase. T&C apply.",
        usage: { last30d: 1200, lastSentAt: "2025-09-28T19:01:31+05:30" },
    },
    {
        id: "TMP-1006",
        name: "Password Reset",
        type: "System",
        category: "Transactional",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000006",
        status: "Active",
        lastUpdated: "2025-09-18T08:10:10+05:30",
        variables: ["link", "minutes"],
        body: "Reset password link: {{link}}. Valid for {{minutes}} minutes.",
        usage: { last30d: 3400, lastSentAt: "2025-10-04T13:48:04+05:30" },
    },
    {
        id: "TMP-1007",
        name: "Invoice Paid",
        type: "System",
        category: "Transactional",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000007",
        status: "Active",
        lastUpdated: "2025-09-17T17:37:11+05:30",
        variables: ["invoice_id", "amount"],
        body: "Invoice {{invoice_id}} for ₹{{amount}} has been paid. Thank you.",
        usage: { last30d: 980, lastSentAt: "2025-10-01T16:12:57+05:30" },
    },
    {
        id: "TMP-1008",
        name: "New Device Login",
        type: "Alert",
        category: "System",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000008",
        status: "Active",
        lastUpdated: "2025-09-15T19:00:42+05:30",
        variables: ["device", "location"],
        body: "New login from {{device}} at {{location}}. If this wasn't you, secure your account.",
        usage: { last30d: 560, lastSentAt: "2025-10-02T07:25:33+05:30" },
    },
    {
        id: "TMP-1009",
        name: "Abandoned Cart",
        type: "Campaign",
        category: "Promotional",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000009",
        status: "Draft",
        lastUpdated: "2025-09-10T10:02:20+05:30",
        variables: ["percent"],
        body: "Items are waiting! Complete your order and save {{percent}} today.",
        usage: { last30d: 0, lastSentAt: null },
    },
    {
        id: "TMP-1010",
        name: "Appointment Reminder",
        type: "Reminder",
        category: "System",
        language: "en",
        senderId: "ACME",
        dltTemplateId: "1107167354321000010",
        status: "Active",
        lastUpdated: "2025-09-08T21:16:55+05:30",
        variables: ["date", "time"],
        body: "Reminder: Appointment on {{date}} at {{time}}. Reply 1 to confirm.",
        usage: { last30d: 260, lastSentAt: "2025-10-03T08:45:02+05:30" },
    },
];

/** --------- date formatting helpers (strict to your spec) --------- */
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad2 = (n) => (n < 10 ? `0${n}` : `${n}`);

function fmtDate(iso) {
    const d = new Date(iso);
    return `${DOW[d.getDay()]} ${MON[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
}
function fmtTime(iso) {
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
}
function fmtDateTime(iso) {
    const d = new Date(iso);
    return `${fmtDate(d)} ${fmtTime(d)}`;
}

/** --------- tiny ui helpers --------- */
const Badge = ({ children }) => <S.Badge>{children}</S.Badge>;
const StatusPill = ({ status }) => <S.Status data-status={status}>{status}</S.Status>;

const Tabs = ["All", "Transactional", "Promotional", "System", "OTP", "Reminder", "Alert"];

const AdminSmsTemplates = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [q, setQ] = useState("");
    const [tab, setTab] = useState("All");
    const [status, setStatus] = useState("Any");
    const [language, setLanguage] = useState("Any");
    const [selectedId, setSelectedId] = useState("TMP-1001");
    const [modal, setModal] = useState({ open: false, action: null, template: null });
    const [toast, setToast] = useState("");

    /** ensure deep link selection if visiting /admin/sms-templates/:id later */
    useEffect(() => {
        // naive parse: if path ends with TMP-XXXX, select it
        const maybeId = pathname.split("/").slice(-1)[0];
        if (/^TMP-\d{4,}$/.test(maybeId)) setSelectedId(maybeId);
    }, [pathname]);

    const items = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return TEMPLATES.filter(t => {
            const inTab =
                tab === "All" ||
                t.category === tab ||
                t.type === tab;
            const okStatus = status === "Any" || t.status === status;
            const okLang = language === "Any" || t.language === language;
            const text = (t.name + " " + t.body + " " + t.id + " " + t.type + " " + t.category + " " + t.senderId).toLowerCase();
            const okQ = tokens.length === 0 || tokens.every(tok => text.includes(tok));
            return inTab && okStatus && okLang && okQ;
        });
    }, [q, tab, status, language]);

    const selected = useMemo(() => items.find(i => i.id === selectedId) || TEMPLATES.find(i => i.id === selectedId), [items, selectedId]);

    const copyBody = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setToast("Copied template body");
            setTimeout(() => setToast(""), 1600);
        } catch {
            setToast("Copy failed");
            setTimeout(() => setToast(""), 1600);
        }
    };

    const openDemoModal = (action, template) => setModal({ open: true, action, template });
    const closeDemoModal = () => setModal({ open: false, action: null, template: null });

    const printSelected = () => {
        const el = document.getElementById("search-print-area");
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => document.body.classList.remove("print-section-mode"), 50);
    };

    return (
        <S.Wrap>
            {/* inline print CSS   */}
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

            <S.HeaderBar>
                <S.Breadcrumbs>
                    <NavLink to="/home">Home</NavLink>
                    <span>/</span>
                    <NavLink to="/admin">Admin</NavLink>
                    <span>/</span>
                    <strong>SMS Templates</strong>
                </S.Breadcrumbs>

                <S.HeaderActions>
                    <NavLink className="btn ghost" to="/admin/email-templates" title="Go to Email Templates">Email Templates</NavLink>
                    <NavLink className="btn ghost" to="/settings/notifications" title="Notification Settings">Notifications</NavLink>
                    <NavLink className="btn ghost" to="/admin/audit-log" title="View Audit Log">Audit Log</NavLink>
                    <button className="btn" disabled title="Demo: disabled"><FiPlus /> New Template</button>
                </S.HeaderActions>
            </S.HeaderBar>

            <S.TopStrip>
                <S.SearchBox>
                    <FiSearch />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search templates (e.g., OTP, invoice, reminder)"
                        aria-label="Search SMS templates"
                    />
                    {q && <button className="clear" onClick={() => setQ("")} aria-label="Clear search"><FiX /></button>}
                </S.SearchBox>

                <S.Filters>
                    <label>
                        Status
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>Any</option>
                            <option>Active</option>
                            <option>Paused</option>
                            <option>Draft</option>
                        </select>
                    </label>
                    <label>
                        Language
                        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                            <option>Any</option>
                            <option>en</option>
                        </select>
                    </label>
                </S.Filters>
            </S.TopStrip>

            <S.Tabs>
                {Tabs.map(t => (
                    <button
                        key={t}
                        className={tab === t ? "active" : ""}
                        onClick={() => setTab(t)}
                        aria-pressed={tab === t}
                    >
                        {t}
                    </button>
                ))}
            </S.Tabs>

            <S.Grid>
                <S.ListPane>
                    <S.Table role="table" aria-label="SMS template listing">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Template</th>
                                <th>Type</th>
                                <th>Lang</th>
                                <th>Sender</th>
                                <th>Status</th>
                                <th>Last Updated</th>
                                <th>Usage (30d)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(row => (
                                <tr key={row.id} className={row.id === selectedId ? "selected" : ""} onClick={() => setSelectedId(row.id)}>
                                    <td>
                                        <NavLink to={`/admin/sms-templates/${row.id}`} className="idlink" title="Open details">
                                            {row.id}
                                        </NavLink>
                                    </td>
                                    <td>
                                        <div className="name">{row.name}</div>
                                        <div className="vars">
                                            {row.variables.map(v => <Badge key={v}>{`{{${v}}}`}</Badge>)}
                                        </div>
                                    </td>
                                    <td>
                                        <S.Chips>
                                            <Badge>{row.type}</Badge>
                                            {row.category !== row.type && <Badge>{row.category}</Badge>}
                                        </S.Chips>
                                    </td>
                                    <td>{row.language}</td>
                                    <td>{row.senderId}</td>
                                    <td><StatusPill status={row.status} /></td>
                                    <td title={fmtDateTime(row.lastUpdated)}>{fmtDate(row.lastUpdated)}</td>
                                    <td>
                                        <div className="usage">{row.usage.last30d.toLocaleString()}</div>
                                        <div className="muted">{row.usage.lastSentAt ? fmtDateTime(row.usage.lastSentAt) : "—"}</div>
                                    </td>
                                    <td className="rowActions" onClick={(e) => e.stopPropagation()}>
                                        <NavLink className="icon" to={`/admin/sms-templates/${row.id}`} title="View"><FiEye /></NavLink>
                                        <NavLink className="icon" to={`/admin/sms-templates/${row.id}/edit`} title="Edit"><FiEdit2 /></NavLink>
                                        <button className="icon" onClick={() => openDemoModal("archive", row)} title="Archive (demo)"><FiTrash2 /></button>
                                        <button className="icon" onClick={() => copyBody(row.body)} title="Copy body"><FiCopy /></button>
                                        <button className="icon" onClick={() => { setSelectedId(row.id); printSelected(); }} title="Print preview"><FiPrinter /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </S.Table>

                    <S.ListFooter>
                        <div className="hint">
                            Showing <strong>{items.length}</strong> of <strong>{TEMPLATES.length}</strong> templates
                        </div>
                        <div className="quicklinks">
                            <NavLink to="/admin/integrations">Integrations</NavLink>
                            <NavLink to="/admin/users">Users</NavLink>
                            <NavLink to="/admin/roles">Roles</NavLink>
                            <NavLink to="/settings/appearance">Appearance</NavLink>
                            <NavLink to="/reports/customers">Reports → Customers</NavLink>
                            <NavLink to="/tools/import-export">Import / Export</NavLink>
                        </div>
                    </S.ListFooter>
                </S.ListPane>

                <S.DetailPane id="search-print-area" aria-live="polite">
                    {!selected ? (
                        <S.EmptyState>
                            <div className="title">Select a template to preview</div>
                            <div className="sub">Pick from the left list to see variables, DLT details, and a live preview.</div>
                        </S.EmptyState>
                    ) : (
                        <S.PreviewCard>
                            <header>
                                <div className="title">
                                    <h2>{selected.name}</h2>
                                    <S.Chips>
                                        <Badge>{selected.type}</Badge>
                                        {selected.category !== selected.type && <Badge>{selected.category}</Badge>}
                                        <Badge>lang: {selected.language}</Badge>
                                    </S.Chips>
                                </div>
                                <div className="actions">
                                    <NavLink className="btn ghost" to={`/admin/sms-templates/${selected.id}`}><FiEye /> View</NavLink>
                                    <NavLink className="btn ghost" to={`/admin/sms-templates/${selected.id}/edit`}><FiEdit2 /> Edit</NavLink>
                                    <button className="btn" onClick={() => printSelected()}><FiPrinter /> Print</button>
                                </div>
                            </header>

                            <S.MetaGrid>
                                <div>
                                    <div className="label">Template ID</div>
                                    <div className="value mono">{selected.id}</div>
                                </div>
                                <div>
                                    <div className="label">DLT ID</div>
                                    <div className="value mono">{selected.dltTemplateId}</div>
                                </div>
                                <div>
                                    <div className="label">Sender ID</div>
                                    <div className="value">{selected.senderId}</div>
                                </div>
                                <div>
                                    <div className="label">Status</div>
                                    <div className="value"><StatusPill status={selected.status} /></div>
                                </div>
                                <div>
                                    <div className="label">Last Updated</div>
                                    <div className="value">{fmtDateTime(selected.lastUpdated)}</div>
                                </div>
                                <div>
                                    <div className="label">Last Sent</div>
                                    <div className="value">{selected.usage.lastSentAt ? fmtDateTime(selected.usage.lastSentAt) : "—"}</div>
                                </div>
                            </S.MetaGrid>

                            <S.Section>
                                <div className="sectionTitle">Variables</div>
                                <S.Chips className="wrap">
                                    {selected.variables.map(v => <Badge key={v}>{`{{${v}}}`}</Badge>)}
                                </S.Chips>
                            </S.Section>

                            <S.Section>
                                <div className="sectionTitle">Body</div>
                                <S.SmsScreen>
                                    <div className="smsHeader">@{selected.senderId}</div>
                                    <div className="smsBubble">
                                        {selected.body.split(/(\{\{.*?\}\})/g).map((seg, i) =>
                                            seg.startsWith("{{") ? <span key={i} className="token">{seg}</span> : <span key={i}>{seg}</span>
                                        )}
                                    </div>
                                    <div className="smsTime">{selected.usage.lastSentAt ? fmtTime(selected.usage.lastSentAt) : fmtTime(selected.lastUpdated)}</div>
                                </S.SmsScreen>
                                <div className="rowBtns">
                                    <button className="btn ghost" onClick={() => copyBody(selected.body)}><FiCopy /> Copy Body</button>
                                    <NavLink className="btn ghost" to={`/tools/playground?tab=sms&tmpl=${selected.id}`}>Open in Playground</NavLink>
                                    <NavLink className="btn ghost" to={`/admin/sms-templates/new?from=${selected.id}`}>Duplicate</NavLink>
                                    <button className="btn danger" onClick={() => openDemoModal("archive", selected)}><FiTrash2 /> Archive</button>
                                </div>
                            </S.Section>

                            <S.Section>
                                <div className="sectionTitle">Navigation</div>
                                <S.LinksGrid>
                                    <NavLink to="/admin/email-templates">Email Templates</NavLink>
                                    <NavLink to="/admin/integrations">Integrations</NavLink>
                                    <NavLink to="/settings/notifications">Notification Settings</NavLink>
                                    <NavLink to="/reports/sales">Reports → Sales</NavLink>
                                    <NavLink to="/reports/inventory">Reports → Inventory</NavLink>
                                    <NavLink to="/reports/gst">Reports → GST</NavLink>
                                    <NavLink to="/tools/import-export">Import / Export</NavLink>
                                    <NavLink to="/admin/audit-log">Audit Log</NavLink>
                                    <NavLink to="/admin/system-status">System Status</NavLink>
                                </S.LinksGrid>
                            </S.Section>
                        </S.PreviewCard>
                    )}
                </S.DetailPane>
            </S.Grid>

            {toast && <S.Toast role="status" aria-live="polite">{toast}</S.Toast>}

            {modal.open && (
                <S.Modal role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
                    <div className="box">
                        <div className="head">
                            <h3 id="demo-modal-title">Action unavailable in demo</h3>
                            <button className="icon" onClick={closeDemoModal} aria-label="Close"><FiX /></button>
                        </div>
                        <div className="body">
                            <p>This is a display-only theme. <strong>{modal.action}</strong> for <span className="mono">{modal.template?.id}</span> is disabled.</p>
                            <p>Explore other areas instead:</p>
                            <S.Chips className="wrap">
                                <NavLink className="chiplink" to="/admin/audit-log">Audit Log</NavLink>
                                <NavLink className="chiplink" to="/admin/integrations">Integrations</NavLink>
                                <NavLink className="chiplink" to="/settings/notifications">Notifications</NavLink>
                                <NavLink className="chiplink" to={`/admin/sms-templates/${modal.template?.id}`}>View Template</NavLink>
                            </S.Chips>
                        </div>
                        <div className="foot">
                            <button className="btn" onClick={closeDemoModal}>Got it</button>
                        </div>
                    </div>
                </S.Modal>
            )}
        </S.Wrap>
    );
};

export default AdminSmsTemplates;
