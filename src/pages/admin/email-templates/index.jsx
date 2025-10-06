import React, { useMemo, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdSearch,
    MdPrint,
    MdCloudUpload,
    MdDownload,
    MdAdd,
    MdFilterList,
    MdOpenInNew,
    MdContentCopy,
    MdDeleteOutline,
    MdInfoOutline,
    MdCheckCircle,
    MdPauseCircleOutline,
    MdChevronRight,
    MdTune,
} from "react-icons/md";

/** Date helpers (required formats):
 * Date: Sat Oct 04 2025
 * Date+Time: Sat Oct 04 2025 15:38:20hrs
 * Time only: 15:38:20hrs
 */
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const pad2 = (n) => (n < 10 ? "0" + n : "" + n);

export const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${WEEK[d.getDay()]} ${MON[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
};
export const fmtTime = (iso) => {
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
};
export const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

/** Demo fixtures (display-only) */
const TEMPLATES = [
    {
        id: "TMP-ORD-CONF",
        name: "Order Confirmation",
        key: "order_confirmation",
        category: "Transactional",
        subject: "Your order {{orderNumber}} is confirmed",
        updatedISO: "2025-10-03T15:24:11+05:30",
        createdISO: "2024-08-11T11:02:05+05:30",
        author: "Ops Bot",
        status: "Active",
        tags: ["order", "customer", "transactions"],
    },
    {
        id: "TMP-PWD-RESET",
        name: "Password Reset",
        key: "password_reset",
        category: "System",
        subject: "Reset your password",
        updatedISO: "2025-09-28T10:12:57+05:30",
        createdISO: "2024-02-14T13:44:24+05:30",
        author: "Admin",
        status: "Active",
        tags: ["auth", "security"],
    },
    {
        id: "TMP-WELCOME",
        name: "Welcome Email",
        key: "welcome_email",
        category: "Marketing",
        subject: "Welcome to {{brand}} — let's get you started",
        updatedISO: "2025-09-11T09:02:22+05:30",
        createdISO: "2023-11-01T10:15:00+05:30",
        author: "Growth",
        status: "Active",
        tags: ["onboarding", "brand"],
    },
    {
        id: "TMP-INV-READY",
        name: "Invoice Ready",
        key: "invoice_ready",
        category: "Transactional",
        subject: "Invoice {{invoiceNumber}} is ready to view",
        updatedISO: "2025-10-01T12:18:42+05:30",
        createdISO: "2024-04-19T16:19:18+05:30",
        author: "Finance",
        status: "Active",
        tags: ["billing", "invoices"],
    },
    {
        id: "TMP-SHIP-DISP",
        name: "Shipment Dispatched",
        key: "shipment_dispatched",
        category: "Transactional",
        subject: "Shipment {{shipmentId}} is on the way",
        updatedISO: "2025-09-30T18:37:59+05:30",
        createdISO: "2024-05-27T08:55:13+05:30",
        author: "Logistics",
        status: "Active",
        tags: ["shipping", "tracking"],
    },
    {
        id: "TMP-LOW-STOCK",
        name: "Low Stock Alert",
        key: "low_stock_alert",
        category: "System",
        subject: "Low inventory on {{sku}} — action recommended",
        updatedISO: "2025-08-14T21:44:10+05:30",
        createdISO: "2024-12-31T13:11:00+05:30",
        author: "Inventory",
        status: "Active",
        tags: ["inventory", "alerts"],
    },
    {
        id: "TMP-PAY-RECV",
        name: "Payment Received",
        key: "payment_received",
        category: "Transactional",
        subject: "Payment received — {{amount}} for {{invoiceNumber}}",
        updatedISO: "2025-09-20T18:01:10+05:30",
        createdISO: "2024-01-18T11:45:05+05:30",
        author: "Finance",
        status: "Active",
        tags: ["payments", "billing"],
    },
    {
        id: "TMP-APPT-REM",
        name: "Appointment Reminder",
        key: "appointment_reminder",
        category: "System",
        subject: "Reminder: your appointment on {{date}} at {{time}}",
        updatedISO: "2025-09-25T07:45:32+05:30",
        createdISO: "2024-03-20T09:30:12+05:30",
        author: "Clinic",
        status: "Active",
        tags: ["appointments"],
    },
    {
        id: "TMP-ABANDON",
        name: "Abandoned Cart",
        key: "abandoned_cart",
        category: "Marketing",
        subject: "Still thinking about {{product}}?",
        updatedISO: "2025-09-17T14:11:05+05:30",
        createdISO: "2023-10-21T17:03:00+05:30",
        author: "Growth",
        status: "Draft",
        tags: ["cart", "offers"],
    },
    {
        id: "TMP-NEWS-OCT",
        name: "Newsletter — October",
        key: "newsletter_oct",
        category: "Marketing",
        subject: "What’s new this month",
        updatedISO: "2025-10-02T10:21:44+05:30",
        createdISO: "2025-10-01T08:15:33+05:30",
        author: "Marketing",
        status: "Active",
        tags: ["newsletter"],
    },
    {
        id: "TMP-ADM-ALERT",
        name: "Admin Alert: Error",
        key: "admin_error",
        category: "System",
        subject: "An error occurred in {{service}}",
        updatedISO: "2025-09-10T12:40:19+05:30",
        createdISO: "2024-05-22T12:40:19+05:30",
        author: "SRE",
        status: "Active",
        tags: ["ops", "errors"],
    },
    {
        id: "TMP-2FA",
        name: "Two-Factor Code",
        key: "two_factor",
        category: "System",
        subject: "Your security code: {{code}}",
        updatedISO: "2025-09-05T06:05:05+05:30",
        createdISO: "2023-08-12T06:05:05+05:30",
        author: "Auth",
        status: "Active",
        tags: ["auth", "security"],
    },
];

const CATEGORIES = ["All", "Transactional", "Marketing", "System"];
const STATUSES = ["All", "Active", "Draft"];
const SORTS = [
    { id: "updated_desc", label: "Last updated (newest)" },
    { id: "updated_asc", label: "Last updated (oldest)" },
    { id: "name_asc", label: "Name (A→Z)" },
    { id: "name_desc", label: "Name (Z→A)" },
];

const DemoConfirmModal = ({ open, title, desc, onClose }) => {
    if (!open) return null;
    return (
        <Styled.ModalBackdrop onClick={onClose} role="dialog" aria-modal="true">
            <Styled.Modal onClick={(e) => e.stopPropagation()}>
                <div className="head">
                    <MdInfoOutline size={20} />
                    <h4>{title}</h4>
                </div>
                <p className="desc">{desc}</p>
                <div className="actions">
                    <button onClick={onClose} className="primary">Okay</button>
                </div>
            </Styled.Modal>
        </Styled.ModalBackdrop>
    );
};

export default function AdminEmailTemplates() {
    const [q, setQ] = useState("");
    const [category, setCategory] = useState("All");
    const [status, setStatus] = useState("All");
    const [sort, setSort] = useState("updated_desc");
    const [selectedId, setSelectedId] = useState(TEMPLATES[0]?.id || null);
    const [showModal, setShowModal] = useState(false);

    const filtered = useMemo(() => {
        let data = TEMPLATES.slice();
        if (category !== "All") data = data.filter((t) => t.category === category);
        if (status !== "All") data = data.filter((t) => t.status === status);
        if (q.trim()) {
            const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
            data = data.filter((t) => tokens.every((tok) =>
                (t.name + " " + t.key + " " + t.subject + " " + t.tags.join(" ")).toLowerCase().includes(tok)
            ));
        }
        switch (sort) {
            case "updated_asc":
                data.sort((a, b) => new Date(a.updatedISO) - new Date(b.updatedISO)); break;
            case "name_asc":
                data.sort((a, b) => a.name.localeCompare(b.name)); break;
            case "name_desc":
                data.sort((a, b) => b.name.localeCompare(a.name)); break;
            default:
                data.sort((a, b) => new Date(b.updatedISO) - new Date(a.updatedISO)); break;
        }
        return data;
    }, [q, category, status, sort]);

    // keep selection valid
    useEffect(() => {
        if (!selectedId || !filtered.find(t => t.id === selectedId)) {
            setSelectedId(filtered[0]?.id || null);
        }
    }, [filtered, selectedId]);

    const selected = useMemo(
        () => filtered.find((t) => t.id === selectedId) || filtered[0] || null,
        [filtered, selectedId]
    );

    const handlePrint = () => {
        const cls = "print-section-mode";
        document.body.classList.add(cls);
        setTimeout(() => {
            window.print();
            setTimeout(() => document.body.classList.remove(cls), 0);
        }, 20);
    };

    return (
        <Styled.Wrap>
            {/* Header */}
            <div className="pageHead">
                <div className="crumbs">
                    <NavLink to="/admin">Admin</NavLink>
                    <MdChevronRight aria-hidden />
                    <span>Email Templates</span>
                </div>

                <div className="titleRow">
                    <div>
                        <h1>Email Templates</h1>
                        <p className="sub">Display-only gallery of transactional, marketing, and system templates.</p>
                    </div>
                    <div className="headActions">
                        <button disabled title="Demo mode">
                            <MdAdd /> New Template
                        </button>
                        <button disabled title="Demo mode">
                            <MdCloudUpload /> Import
                        </button>
                        <button disabled title="Demo mode">
                            <MdDownload /> Export
                        </button>
                        <NavLink to="/settings/notifications" className="ghost">
                            <MdTune /> Notifications Settings
                        </NavLink>
                        <button onClick={handlePrint} className="primary">
                            <MdPrint /> Print
                        </button>
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div className="toolbar">
                <div className="search">
                    <MdSearch size={18} />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search name, key, subject, tags…"
                        aria-label="Search templates"
                    />
                </div>

                <div className="filters">
                    <div className="pills" role="tablist" aria-label="Categories">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c}
                                role="tab"
                                aria-selected={category === c}
                                className={category === c ? "pill active" : "pill"}
                                onClick={() => setCategory(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="selects">
                        <div className="select">
                            <MdFilterList />
                            <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status filter">
                                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>

                        <div className="select">
                            <MdFilterList />
                            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by">
                                {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid">
                {/* List */}
                <aside className="listPane">
                    <div className="listHead">
                        <span>Templates</span>
                        <span className="count">{filtered.length}</span>
                    </div>

                    <div className="tableWrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Key</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Updated</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((t) => (
                                    <tr
                                        key={t.id}
                                        className={t.id === selected?.id ? "active" : ""}
                                        onClick={() => setSelectedId(t.id)}
                                        tabIndex={0}
                                        onKeyDown={(e) => { if (e.key === "Enter") setSelectedId(t.id); }}
                                    >
                                        <td>
                                            <div className="nameCell">
                                                <span className="name">{t.name}</span>
                                                <div className="tags">
                                                    {t.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                                                </div>
                                            </div>
                                        </td>
                                        <td><code className="code">{t.key}</code></td>
                                        <td>{t.category}</td>
                                        <td>
                                            {t.status === "Active" ? (
                                                <span className="status ok"><MdCheckCircle /> {t.status}</span>
                                            ) : (
                                                <span className="status paused"><MdPauseCircleOutline /> {t.status}</span>
                                            )}
                                        </td>
                                        <td title={fmtDateTime(t.updatedISO)}>{fmtDate(t.updatedISO)}</td>
                                        <td className="rowActions">
                                            <NavLink to="/settings/notifications" className="tiny">Settings</NavLink>
                                            <NavLink to="/admin/sms-templates" className="tiny">SMS</NavLink>
                                            <button className="tiny" onClick={() => setShowModal(true)} title="Demo mode">Disable</button>
                                        </td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={6}>
                                            <div className="empty">
                                                <MdInfoOutline size={20} />
                                                <div>
                                                    <div>No templates found</div>
                                                    <div className="muted">Try a different search or category.</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </aside>

                {/* Preview */}
                <main className="previewPane" id="search-print-area">
                    {selected ? (
                        <>
                            <div className="previewHead">
                                <div>
                                    <h2>{selected.name}</h2>
                                    <div className="meta">
                                        <span>Key: <code>{selected.key}</code></span>
                                        <span>•</span>
                                        <span>Updated: {fmtDateTime(selected.updatedISO)}</span>
                                        <span>•</span>
                                        <span>Created: {fmtDate(selected.createdISO)}</span>
                                        <span>•</span>
                                        <span>Author: {selected.author}</span>
                                    </div>
                                </div>
                                <div className="previewActions">
                                    <button className="ghost" onClick={() => setShowModal(true)} title="Demo mode"><MdContentCopy /> Duplicate</button>
                                    <button className="danger ghost" onClick={() => setShowModal(true)} title="Demo mode"><MdDeleteOutline /> Delete</button>
                                    <button className="primary" onClick={handlePrint}><MdPrint /> Print</button>
                                </div>
                            </div>

                            <div className="cards">
                                <section className="card">
                                    <div className="cardHead">
                                        <h3>Subject</h3>
                                    </div>
                                    <div className="subject">{selected.subject}</div>
                                    <div className="vars">
                                        <span className="hint">Available variables:</span>
                                        <div className="chips">
                                            {Array.from(new Set((selected.subject.match(/\{\{(.*?)\}\}/g) || []).map(s => s.replace(/[{}]/g, "")))).map(v => (
                                                <span key={v} className="chip">{"{{"}{v}{"}}"}</span>
                                            ))}
                                            {selected.subject.indexOf("{{") === -1 && <span className="muted">No variables</span>}
                                        </div>
                                    </div>
                                </section>

                                <section className="card">
                                    <div className="cardHead">
                                        <h3>Preview (HTML)</h3>
                                        <div className="links">
                                            <NavLink to="/settings/print-templates" className="tiny">Print Templates</NavLink>
                                            <NavLink to="/settings/appearance" className="tiny">Appearance</NavLink>
                                            <NavLink to="/tools/theme-tokens" className="tiny">Theme Tokens</NavLink>
                                        </div>
                                    </div>
                                    <div className="htmlPreview">
                                        <div className="emailShell">
                                            <div className="emailHeader">
                                                <div className="logo">Mail</div>
                                                <div className="subjectLine">{selected.subject}</div>
                                            </div>
                                            <div className="emailBody">
                                                <p>
                                                    Hi <b>{"{{firstName}}"}</b>,
                                                </p>
                                                <p>
                                                    This is a display-only preview for <b>{selected.name}</b>. Use the links on
                                                    the right to explore related settings and routes.
                                                </p>
                                                <ul>
                                                    <li><NavLink to="/invoices" className="inlineLink">Invoices</NavLink></li>
                                                    <li><NavLink to="/shipments" className="inlineLink">Shipments</NavLink></li>
                                                    <li><NavLink to="/reports/sales" className="inlineLink">Sales Reports</NavLink></li>
                                                    <li><NavLink to="/products" className="inlineLink">Product Catalog</NavLink></li>
                                                </ul>
                                                <p className="footerLine">
                                                    Updated on {fmtDate(selected.updatedISO)} at {fmtTime(selected.updatedISO)}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </section>

                                <section className="card">
                                    <div className="cardHead">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <div className="quickLinks">
                                        <NavLink to="/admin/sms-templates"><MdOpenInNew /> SMS Templates</NavLink>
                                        <NavLink to="/settings/notifications"><MdOpenInNew /> Notifications</NavLink>
                                        <NavLink to="/settings/webhooks"><MdOpenInNew /> Webhooks</NavLink>
                                        <NavLink to="/settings/print-templates"><MdOpenInNew /> Print Templates</NavLink>
                                        <NavLink to="/reports"><MdOpenInNew /> Reports Home</NavLink>
                                        <NavLink to="/reports/customers"><MdOpenInNew /> Customer Reports</NavLink>
                                        <NavLink to="/reports/inventory"><MdOpenInNew /> Inventory Reports</NavLink>
                                        <NavLink to="/finance"><MdOpenInNew /> Finance</NavLink>
                                        <NavLink to="/tools/theme-tokens"><MdOpenInNew /> Theme Tokens</NavLink>
                                        <NavLink to="/admin/users"><MdOpenInNew /> Users</NavLink>
                                        <NavLink to="/admin/roles"><MdOpenInNew /> Roles</NavLink>
                                        <NavLink to="/admin/permissions"><MdOpenInNew /> Permissions</NavLink>
                                    </div>
                                </section>
                            </div>
                        </>
                    ) : (
                        <div className="placeholder">
                            <MdInfoOutline size={24} />
                            <div>
                                <div>Select a template to preview</div>
                                <div className="muted">Use the list on the left to pick one.</div>
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {/* Print CSS  */}
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

            <DemoConfirmModal
                open={showModal}
                onClose={() => setShowModal(false)}
                title="Demo mode"
                desc="This action is disabled in the demo. Explore other sections or print the current preview."
            />
        </Styled.Wrap>
    );
}
