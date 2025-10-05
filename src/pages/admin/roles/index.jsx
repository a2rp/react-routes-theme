import React, { useMemo, useState, useEffect, useCallback } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdSearch,
    MdAdd,
    MdEdit,
    MdDelete,
    MdPrint,
    MdSecurity,
    MdOpenInNew,
    MdLock,
    MdInfoOutline,
} from "react-icons/md";

/** -----------------------------------------------------------
 * Demo fixtures: display-only
 * ----------------------------------------------------------*/
const ROLE_FIXTURES = [
    {
        id: "ROLE-ADMIN",
        name: "Administrator",
        description: "Full platform access. Manage users, roles, billing, and all settings.",
        assignedUsers: 6,
        permissions: [
            "users.read",
            "users.manage",
            "roles.read",
            "roles.manage",
            "permissions.read",
            "audit.read",
            "settings.read",
            "settings.manage",
            "billing.read",
            "billing.manage",
            "features.toggle",
            "webhooks.manage",
        ],
        status: "Active",
        createdAtISO: "2025-07-12T09:21:33+05:30",
        updatedAtISO: "2025-10-04T15:38:20+05:30",
    },
    {
        id: "ROLE-MANAGER",
        name: "Manager",
        description: "Business operations control—orders, invoices, inventory, and reports.",
        assignedUsers: 12,
        permissions: [
            "orders.read",
            "orders.manage",
            "invoices.read",
            "invoices.manage",
            "inventory.read",
            "inventory.adjust",
            "reports.read",
            "customers.read",
            "vendors.read",
        ],
        status: "Active",
        createdAtISO: "2025-06-03T11:08:04+05:30",
        updatedAtISO: "2025-09-30T10:10:10+05:30",
    },
    {
        id: "ROLE-ACCOUNTANT",
        name: "Accountant",
        description: "Finance surfaces—journals, ledgers, GST, and financial statements.",
        assignedUsers: 4,
        permissions: [
            "finance.read",
            "journals.read",
            "ledgers.read",
            "gst.read",
            "invoices.read",
            "payments.read",
            "reports.read",
        ],
        status: "Restricted",
        createdAtISO: "2025-05-15T08:55:30+05:30",
        updatedAtISO: "2025-09-11T17:02:49+05:30",
    },
    {
        id: "ROLE-ANALYST",
        name: "Analyst",
        description: "View-only access to dashboards, trends, and analytics.",
        assignedUsers: 8,
        permissions: ["dashboard.read", "reports.read", "customers.read", "inventory.read"],
        status: "Active",
        createdAtISO: "2025-02-21T14:40:02+05:30",
        updatedAtISO: "2025-08-22T10:00:00+05:30",
    },
    {
        id: "ROLE-OPERATOR",
        name: "Operator",
        description: "Day-to-day operations—orders, shipments, and printing.",
        assignedUsers: 10,
        permissions: ["orders.read", "shipments.read", "shipments.labels", "print.read"],
        status: "Active",
        createdAtISO: "2025-01-05T12:12:12+05:30",
        updatedAtISO: "2025-09-10T12:12:12+05:30",
    },
    {
        id: "ROLE-LEGACY",
        name: "Legacy Role",
        description: "Deprecated role kept for compatibility with old projects.",
        assignedUsers: 0,
        permissions: ["*legacy.read"],
        status: "Deprecated",
        createdAtISO: "2024-12-10T19:01:00+05:30",
        updatedAtISO: "2025-01-10T09:00:00+05:30",
    },
];

/** -----------------------------------------------------------
 * Date helpers — required formats
 * ----------------------------------------------------------*/
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmtDate(dateISO) {
    const d = new Date(dateISO);
    const wd = WEEKDAYS[d.getDay()];
    const m = MONTHS[d.getMonth()];
    const dd = String(d.getDate()).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${wd} ${m} ${dd} ${yyyy}`;
}
function fmtTime(dateISO) {
    const d = new Date(dateISO);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
}
function fmtDateTime(dateISO) {
    return `${fmtDate(dateISO)} ${fmtTime(dateISO)}`;
}

/** -----------------------------------------------------------
 * Page
 * ----------------------------------------------------------*/
export default function AdminRolesPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [q, setQ] = useState(() => searchParams.get("q") ?? "");
    const [modal, setModal] = useState({ open: false, title: "", body: "" });

    // filter roles (display-only)
    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        if (tokens.length === 0) return ROLE_FIXTURES;
        return ROLE_FIXTURES.filter(r => {
            const hay =
                (r.name + " " + r.description + " " + r.permissions.join(" ")).toLowerCase();
            return tokens.every(t => hay.includes(t));
        });
    }, [q]);

    // keep search in URL (read-only convenience)
    useEffect(() => {
        const next = new URLSearchParams(searchParams);
        if (q) next.set("q", q); else next.delete("q");
        const to = { pathname: "/admin/roles", search: next.toString() ? `?${next.toString()}` : "" };
        // replace instead of push
        navigate(to, { replace: true });
    }, [q]); // eslint-disable-line react-hooks/exhaustive-deps

    const openDemoModal = useCallback((title, body) => {
        setModal({ open: true, title, body });
    }, []);
    const closeModal = useCallback(() => setModal({ open: false, title: "", body: "" }), []);

    const handlePrint = useCallback(() => {
        const cls = "print-section-mode";
        document.body.classList.add(cls);
        const cleanup = () => {
            document.body.classList.remove(cls);
            window.removeEventListener("afterprint", cleanup);
        };
        window.addEventListener("afterprint", cleanup);
        window.print();
    }, []);

    return (
        <Styled.Page>
            {/* Print CSS per spec */}
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

            <Styled.Header id="search-print-area">
                <div className="titleRow">
                    <div className="left">
                        <div className="eyebrow"><MdSecurity size={18} /> Admin</div>
                        <h1>Roles</h1>
                        <p className="sub">Manage who sees what. Configure responsibilities across modules.</p>
                    </div>
                    <div className="right">
                        <div className="meta">
                            <span>Last updated:</span>
                            <strong>{fmtDateTime("2025-10-04T15:38:20+05:30")}</strong>
                        </div>
                        <div className="links">
                            <NavLink to="/admin/users" className="ghost">Users</NavLink>
                            <NavLink to="/admin/permissions" className="ghost">Permissions</NavLink>
                            <NavLink to="/admin/audit-log" className="ghost">Audit Log</NavLink>
                            <NavLink to="/admin/system-status" className="ghost">System Status</NavLink>
                        </div>
                    </div>
                </div>

                <Styled.Actions>
                    <div className="left">
                        <div className="search">
                            <MdSearch size={18} />
                            <input
                                type="text"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search roles, descriptions, permissions…"
                                aria-label="Search roles"
                            />
                        </div>
                        <div className="badges">
                            <span className="badge">Total: {ROLE_FIXTURES.length}</span>
                            <span className="badge">Active: {ROLE_FIXTURES.filter(r => r.status === "Active").length}</span>
                            <span className="badge">Restricted: {ROLE_FIXTURES.filter(r => r.status === "Restricted").length}</span>
                            <span className="badge">Deprecated: {ROLE_FIXTURES.filter(r => r.status === "Deprecated").length}</span>
                        </div>
                    </div>
                    <div className="right">
                        <button
                            className="primary"
                            disabled
                            onClick={() =>
                                openDemoModal(
                                    "Create role (disabled in demo)",
                                    "This is a display-only demo. Creating or saving changes is intentionally disabled."
                                )
                            }
                            title="Create role (demo)"
                        >
                            <MdAdd size={18} /> New Role
                        </button>
                        <button className="ghost" onClick={handlePrint} title="Print role list">
                            <MdPrint size={18} /> Print
                        </button>
                    </div>
                </Styled.Actions>

                <Styled.QuickNav>
                    <NavLink to="/settings/appearance"><MdOpenInNew /> Appearance</NavLink>
                    <NavLink to="/settings/notifications"><MdOpenInNew /> Notifications</NavLink>
                    <NavLink to="/settings/tokens"><MdOpenInNew /> API Tokens</NavLink>
                    <NavLink to="/settings/webhooks"><MdOpenInNew /> Webhooks</NavLink>
                    <NavLink to="/reports/finance"><MdOpenInNew /> Finance Report</NavLink>
                    <NavLink to="/reports/inventory"><MdOpenInNew /> Inventory Report</NavLink>
                    <NavLink to="/help"><MdOpenInNew /> Help Center</NavLink>
                    <NavLink to="/faq"><MdOpenInNew /> FAQ</NavLink>
                </Styled.QuickNav>
            </Styled.Header>

            <Styled.TableWrap>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "28rem" }}>Role</th>
                            <th>Description</th>
                            <th>Users</th>
                            <th>Permissions</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th style={{ width: "1%" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((r) => (
                            <tr key={r.id}>
                                <td>
                                    <div className="roleCell">
                                        <div className="avatar" aria-hidden="true">{r.name.slice(0, 2).toUpperCase()}</div>
                                        <div className="label">
                                            <div className="name">{r.name}</div>
                                            <div className="id">{r.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="muted">{r.description}</td>
                                <td>
                                    <NavLink to={`/admin/users?q=${encodeURIComponent(r.name)}`} className="chip linkish" title="View users">
                                        {r.assignedUsers} users
                                    </NavLink>
                                </td>
                                <td>
                                    <div className="permRow">
                                        {r.permissions.slice(0, 5).map(p => (
                                            <span key={p} className="chip">{p}</span>
                                        ))}
                                        {r.permissions.length > 5 && (
                                            <NavLink
                                                to={`/admin/permissions?role=${encodeURIComponent(r.id)}`}
                                                className="chip linkish"
                                                title="View all permissions"
                                            >
                                                +{r.permissions.length - 5} more
                                            </NavLink>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <span className={`status ${r.status.toLowerCase()}`}>
                                        {r.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="datetime">
                                        <div className="d">{fmtDate(r.createdAtISO)}</div>
                                        <div className="t">{fmtTime(r.createdAtISO)}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="datetime">
                                        <div className="d">{fmtDate(r.updatedAtISO)}</div>
                                        <div className="t">{fmtTime(r.updatedAtISO)}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="rowActions">
                                        <NavLink
                                            to={`/admin/permissions?role=${encodeURIComponent(r.id)}`}
                                            className="ghost sm"
                                            title="View permissions"
                                        >
                                            <MdSecurity size={16} /> Permissions
                                        </NavLink>
                                        <button
                                            className="ghost sm"
                                            disabled
                                            onClick={() => openDemoModal("Edit role (demo)", "Editing is disabled in this demo.")}
                                            title="Edit role (demo)"
                                        >
                                            <MdEdit size={16} /> Edit
                                        </button>
                                        <button
                                            className="danger sm"
                                            disabled
                                            onClick={() => openDemoModal("Delete role (disabled)", "Destructive actions are disabled here.")}
                                            title="Delete role (demo)"
                                        >
                                            <MdDelete size={16} /> Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={8}>
                                    <Styled.Empty>
                                        <MdInfoOutline size={22} />
                                        <div className="text">
                                            <strong>No roles match your search.</strong>
                                            <span>Try a simpler keyword or clear the query.</span>
                                        </div>
                                        <button className="ghost" onClick={() => setQ("")}>Clear search</button>
                                    </Styled.Empty>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Styled.TableWrap>

            {/* Sticky bottom info bar */}
            <Styled.InfoBar>
                <div className="left">
                    <MdLock size={18} />
                    <span>This is a display-only demo. Creating, editing, and deleting are disabled.</span>
                </div>
                <div className="right">
                    <NavLink to="/changelog" className="ghost">Changelog</NavLink>
                    <NavLink to="/roadmap" className="ghost">Roadmap</NavLink>
                    <NavLink to="/feedback" className="primary">Send feedback</NavLink>
                </div>
            </Styled.InfoBar>

            {/* Custom modal (no browser alert) */}
            {modal.open && (
                <Styled.ModalOverlay role="dialog" aria-modal="true">
                    <Styled.Modal>
                        <div className="head">
                            <h3>{modal.title}</h3>
                        </div>
                        <div className="body">
                            <p>{modal.body}</p>
                        </div>
                        <div className="foot">
                            <button className="primary" onClick={closeModal}>OK</button>
                        </div>
                    </Styled.Modal>
                </Styled.ModalOverlay>
            )}
        </Styled.Page>
    );
}
