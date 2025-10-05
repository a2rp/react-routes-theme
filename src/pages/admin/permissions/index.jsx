import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/** ----------------------------------------------------------------
 *  Demo data (display-only)
 *  ---------------------------------------------------------------- */
const ACTIONS = ["view", "create", "edit", "delete", "export", "approve"];

// Modules you already route to (kept exhaustive for navigation)
const MODULES = [
    { key: "dashboard", label: "Dashboard", route: "/dashboard" },
    { key: "customers", label: "Customers", route: "/customers" },
    { key: "orders", label: "Orders", route: "/orders" },
    { key: "products", label: "Products", route: "/products" },
    { key: "categories", label: "Categories", route: "/categories" },
    { key: "inventory", label: "Inventory", route: "/inventory" },
    { key: "invoices", label: "Invoices", route: "/invoices" },
    { key: "receipts", label: "Receipts", route: "/receipts" },
    { key: "shipments", label: "Shipments", route: "/shipments" },
    { key: "vendors", label: "Vendors", route: "/vendors" },
    { key: "purchaseOrders", label: "Purchase Orders", route: "/purchase-orders" },
    { key: "reports", label: "Reports", route: "/reports" },
    { key: "finance", label: "Finance", route: "/finance" },
    { key: "medicines", label: "Medicines", route: "/medicines" },
    { key: "warehouses", label: "Warehouses", route: "/inventory/warehouses" },
    { key: "adjustments", label: "Adjustments", route: "/inventory/adjustments" },
    { key: "transfers", label: "Transfers", route: "/inventory/transfers" },
    { key: "priceLists", label: "Price Lists", route: "/products/price-lists" },
    { key: "brands", label: "Brands", route: "/products/brands" },
    { key: "attributes", label: "Attributes", route: "/products/attributes" },
    { key: "healthcarePatients", label: "Patients", route: "/patients" },
    { key: "appointments", label: "Appointments", route: "/appointments" },
    { key: "prescriptions", label: "Prescriptions", route: "/prescriptions" },
    { key: "labs", label: "Labs", route: "/labs" },
    { key: "imaging", label: "Imaging", route: "/imaging" },
    { key: "adminUsers", label: "Admin • Users", route: "/admin/users" },
    { key: "adminRoles", label: "Admin • Roles", route: "/admin/roles" },
    { key: "adminPermissions", label: "Admin • Permissions", route: "/admin/permissions" },
    { key: "adminAudit", label: "Admin • Audit Log", route: "/admin/audit-log" },
    { key: "adminSystem", label: "Admin • System Status", route: "/admin/system-status" },
    { key: "settings", label: "Settings", route: "/settings" },
    { key: "appearance", label: "Appearance", route: "/settings/appearance" },
    { key: "tokens", label: "API Tokens", route: "/settings/tokens" },
    { key: "printTemplates", label: "Print Templates", route: "/settings/print-templates" },
    { key: "tools", label: "Tools", route: "/tools" },
    { key: "importExport", label: "Import / Export", route: "/tools/import-export" },
];

const ROLES = [
    {
        code: "ADMIN",
        name: "Workspace Admin",
        description:
            "Full access across modules, approvals, configuration and audit.",
        members: 3,
        active: true,
        createdAt: "2025-05-20T10:22:33+05:30",
        updatedAt: "2025-09-26T18:28:57+05:30",
    },
    {
        code: "MANAGER",
        name: "Operations Manager",
        description:
            "Manage orders, inventory, shipments and approve invoices.",
        members: 7,
        active: true,
        createdAt: "2025-03-12T09:12:31+05:30",
        updatedAt: "2025-09-01T13:05:10+05:30",
    },
    {
        code: "SALES",
        name: "Sales Executive",
        description:
            "Create quotes, sales orders and invoices. Read-only finance.",
        members: 14,
        active: true,
        createdAt: "2025-01-06T12:01:00+05:30",
        updatedAt: "2025-08-18T08:11:50+05:30",
    },
    {
        code: "SUPPORT",
        name: "Support",
        description:
            "View customers, orders and activity. No write access.",
        members: 5,
        active: true,
        createdAt: "2025-04-02T08:35:00+05:30",
        updatedAt: "2025-07-10T17:42:05+05:30",
    },
    {
        code: "VIEWER",
        name: "Viewer",
        description: "Read-only across most modules.",
        members: 9,
        active: true,
        createdAt: "2025-06-01T11:22:45+05:30",
        updatedAt: "2025-08-02T15:17:22+05:30",
    },
];

// Permission matrix by role (display-only, no writes)
const MATRIX = {
    ADMIN: buildAll(true),
    MANAGER: allowSome({
        // can manage most ops; finance approvals allowed
        customers: A("view", "create", "edit", "delete", "export"),
        orders: A("view", "create", "edit", "delete", "export", "approve"),
        products: A("view", "create", "edit", "delete", "export"),
        categories: A("view", "create", "edit", "delete", "export"),
        inventory: A("view", "create", "edit", "delete", "export"),
        invoices: A("view", "create", "edit", "export", "approve"),
        receipts: A("view", "export"),
        shipments: A("view", "create", "edit", "export"),
        vendors: A("view", "create", "edit", "export"),
        purchaseOrders: A("view", "create", "edit", "export", "approve"),
        reports: A("view", "export"),
        finance: A("view", "export", "approve"),
        medicines: A("view", "create", "edit", "export"),
        warehouses: A("view", "create", "edit", "export"),
        adjustments: A("view", "create", "edit"),
        transfers: A("view", "create", "edit"),
        priceLists: A("view", "create", "edit", "export"),
        brands: A("view", "create", "edit", "export"),
        attributes: A("view", "create", "edit", "export"),
        healthcarePatients: A("view"),
        appointments: A("view", "create", "edit"),
        prescriptions: A("view"),
        labs: A("view"),
        imaging: A("view"),
        adminUsers: A("view", "edit"),
        adminRoles: A("view", "edit"),
        adminPermissions: A("view", "edit"),
        adminAudit: A("view", "export"),
        adminSystem: A("view", "export"),
        settings: A("view", "edit"),
        appearance: A("view", "edit"),
        tokens: A("view"),
        printTemplates: A("view", "edit"),
        tools: A("view", "export"),
        importExport: A("view", "export"),
        dashboard: A("view"),
    }),
    SALES: allowSome({
        customers: A("view", "create", "edit", "export"),
        orders: A("view", "create", "edit", "export"),
        products: A("view", "export"),
        invoices: A("view", "create", "export"),
        receipts: A("view"),
        reports: A("view"),
        medicines: A("view"),
        dashboard: A("view"),
    }),
    SUPPORT: allowSome({
        customers: A("view"),
        orders: A("view"),
        shipments: A("view"),
        reports: A("view"),
        dashboard: A("view"),
    }),
    VIEWER: allowSome({
        customers: A("view"),
        orders: A("view"),
        products: A("view"),
        reports: A("view"),
        dashboard: A("view"),
    }),
};

// helpers for matrix
function buildAll(val) {
    const m = {};
    MODULES.forEach((mod) => {
        m[mod.key] = {};
        ACTIONS.forEach((a) => (m[mod.key][a] = val));
    });
    return m;
}
function allowSome(spec) {
    const base = buildAll(false);
    Object.keys(spec).forEach((k) => (base[k] = mapFrom(spec[k])));
    return base;
}
function A(...allowed) {
    const x = {};
    ACTIONS.forEach((a) => (x[a] = allowed.includes(a)));
    return x;
}
function mapFrom(obj) {
    const x = {};
    ACTIONS.forEach((a) => (x[a] = !!obj[a]));
    return x;
}

/** ----------------------------------------------------------------
 *  Formatting helpers (required formats)
 *  ---------------------------------------------------------------- */
const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad2 = (n) => String(n).padStart(2, "0");

function formatDate(iso) {
    const d = new Date(iso);
    return `${DAY[d.getDay()]} ${MON[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
}
function formatTime(iso) {
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
}
function formatDateTime(iso) {
    const d = new Date(iso);
    return `${formatDate(d)} ${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
}

/** ----------------------------------------------------------------
 *  Page
 *  ---------------------------------------------------------------- */
const ConfirmModal = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.ModalOverlay role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <Styled.ModalCard>
                <h3 id="modal-title">{title}</h3>
                <p className="muted">{message}</p>
                <div className="actions">
                    <NavLink to="/admin/roles" className="btn">Go to Roles</NavLink>
                    <button className="btn primary" onClick={onClose} autoFocus>Close</button>
                </div>
            </Styled.ModalCard>
        </Styled.ModalOverlay>
    );
};

const AdminPermissionsPage = () => {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState("ADMIN");
    const [q, setQ] = useState("");
    const [moduleKey, setModuleKey] = useState("all");
    const [showModal, setShowModal] = useState(false);

    const roleInfo = useMemo(
        () => ROLES.find((r) => r.code === selectedRole),
        [selectedRole]
    );

    const filteredModules = useMemo(() => {
        const list = moduleKey === "all" ? MODULES : MODULES.filter(m => m.key === moduleKey);
        if (!q.trim()) return list;
        const s = q.trim().toLowerCase();
        return list.filter(m => (m.label + " " + m.key).toLowerCase().includes(s));
    }, [q, moduleKey]);

    const matrix = MATRIX[selectedRole] || {};

    const handleExport = () => {
        const payload = {
            role: selectedRole,
            exportedAt: new Date().toISOString(),
            permissions: matrix,
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `permissions_${selectedRole.toLowerCase()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => document.body.classList.remove("print-section-mode");
        window.print();
    };

    return (
        <Styled.Wrap>
            {/* Header */}
            <Styled.HeaderBar>
                <div className="l">
                    <div className="breadcrumbs">
                        <NavLink to="/home">Home</NavLink>
                        <span aria-hidden="true">/</span>
                        <NavLink to="/admin/users">Admin</NavLink>
                        <span aria-hidden="true">/</span>
                        <span className="current">Permissions</span>
                    </div>
                    <h1>Permissions Matrix</h1>
                    <p className="muted">
                        Map roles to fine-grained capabilities across modules. Display-only demo; edits are disabled.
                    </p>
                </div>
                <div className="r">
                    <button className="btn" onClick={() => setShowModal(true)} title="Demo mode: editing disabled">Edit Matrix</button>
                    <button className="btn" onClick={() => setShowModal(true)} title="Demo mode: role creation disabled">Add Role</button>
                    <button className="btn" onClick={handleExport} title="Download JSON snapshot">Export</button>
                    <button className="btn primary" onClick={printSection} title="Print visible section">Print</button>
                </div>
            </Styled.HeaderBar>

            {/* Quick Nav */}
            <Styled.QuickNav>
                <NavLink to="/admin/users" className="pill">Users</NavLink>
                <NavLink to="/admin/roles" className="pill">Roles</NavLink>
                <NavLink to="/admin/permissions" className="pill active">Permissions</NavLink>
                <NavLink to="/admin/audit-log" className="pill">Audit Log</NavLink>
                <NavLink to="/admin/system-status" className="pill">System Status</NavLink>
                <NavLink to="/settings" className="pill">Settings</NavLink>
                <NavLink to="/settings/print-templates" className="pill">Print Templates</NavLink>
                <NavLink to="/tools/import-export" className="pill">Import / Export</NavLink>
                <NavLink to="/reports" className="pill">Reports</NavLink>
            </Styled.QuickNav>

            {/* Main grid (left rail + matrix) */}
            <Styled.Grid id="search-print-area">
                {/* Roles rail */}
                <aside className="rail">
                    <div className="rail-head">
                        <h3>Roles</h3>
                        <button className="mini" onClick={() => setShowModal(true)} title="Demo mode">New</button>
                    </div>

                    <ul className="roles">
                        {ROLES.map((r) => (
                            <li key={r.code} className={r.code === selectedRole ? "active" : ""}>
                                <button onClick={() => setSelectedRole(r.code)} className="role-btn" aria-current={r.code === selectedRole}>
                                    <span className="dot" aria-hidden="true" />
                                    <span className="name">{r.name}</span>
                                    <span className="meta">{r.members} members</span>
                                </button>
                                <div className="role-links">
                                    <NavLink to={`/admin/roles`} className="tiny">Open</NavLink>
                                    <button className="tiny" onClick={() => setShowModal(true)} title="Demo mode">Edit</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="rail-card">
                        <div className="row">
                            <span>Selected</span>
                            <strong>{roleInfo?.name}</strong>
                        </div>
                        <div className="row">
                            <span>Status</span>
                            <strong>{roleInfo?.active ? "Active" : "Inactive"}</strong>
                        </div>
                        <div className="row">
                            <span>Created</span>
                            <strong>{formatDate(roleInfo?.createdAt || new Date())}</strong>
                        </div>
                        <div className="row">
                            <span>Updated</span>
                            <strong>{formatDateTime(roleInfo?.updatedAt || new Date())}</strong>
                        </div>
                        <div className="links">
                            <NavLink to="/admin/users">Manage Users</NavLink>
                            <NavLink to="/admin/roles">Manage Roles</NavLink>
                            <NavLink to="/admin/audit-log">View Audit Log</NavLink>
                        </div>
                    </div>
                </aside>

                {/* Matrix */}
                <section className="matrix">
                    {/* Controls */}
                    <div className="controls">
                        <div className="search">
                            <input
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search modules (e.g., invoices, inventory)"
                                aria-label="Search modules"
                            />
                        </div>
                        <div className="filters">
                            <select value={moduleKey} onChange={(e) => setModuleKey(e.target.value)} aria-label="Filter by module">
                                <option value="all">All Modules</option>
                                {MODULES.map(m => (
                                    <option key={m.key} value={m.key}>{m.label}</option>
                                ))}
                            </select>
                            <button className="btn ghost" onClick={() => { setQ(""); setModuleKey("all"); }}>
                                Reset
                            </button>
                            <button className="btn ghost" onClick={() => navigate("/admin/permissions")}>
                                Refresh
                            </button>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="legend">
                        <span className="badge ok">✓ allowed</span>
                        <span className="badge no">— not allowed</span>
                        <span className="sep" />
                        <span className="hint">Hover module name for route. Click “Open” to navigate.</span>
                    </div>

                    {/* Table */}
                    <div className="tableWrap">
                        <table className="perm">
                            <thead>
                                <tr>
                                    <th className="sticky-left">Module</th>
                                    {ACTIONS.map((a) => (
                                        <th key={a} title={a.toUpperCase()}>{a}</th>
                                    ))}
                                    <th className="actions-col sticky-right">Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredModules.map((m) => (
                                    <tr key={m.key}>
                                        <td className="sticky-left">
                                            <div className="modName" title={m.route}>
                                                <span className="dot" aria-hidden="true" />
                                                <span>{m.label}</span>
                                            </div>
                                        </td>
                                        {ACTIONS.map((a) => {
                                            const allow = matrix?.[m.key]?.[a] ?? false;
                                            return (
                                                <td key={a} className={allow ? "allow" : "deny"}>
                                                    {allow ? "✓" : "—"}
                                                </td>
                                            );
                                        })}
                                        <td className="actions-col sticky-right">
                                            <NavLink to={m.route} className="tiny">Open</NavLink>
                                            <button className="tiny disabled" onClick={() => setShowModal(true)} title="Demo mode">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Activity */}
                    <div className="activity">
                        <h3>Activity</h3>
                        <ul>
                            <li>
                                <span className="ts">{formatDateTime("2025-10-04T15:38:20+05:30")}</span>
                                <span className="txt"><strong>Workspace Admin</strong> role synced with system defaults.</span>
                            </li>
                            <li>
                                <span className="ts">{formatDate("2025-09-26")} <span className="only-time">{formatTime("2025-09-26T18:28:57+05:30")}</span></span>
                                <span className="txt">Permissions audit exported by <NavLink to="/admin/users/USR-1001">USR-1001</NavLink>.</span>
                            </li>
                            <li>
                                <span className="ts">{formatDate("2025-08-18")}</span>
                                <span className="txt">Role descriptions updated for <NavLink to="/admin/roles">Operations Manager</NavLink>.</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </Styled.Grid>

            {/* Print CSS for section */}
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
          thead { -webkit-print-color-adjust: exact; }
        }
      `}</style>

            <ConfirmModal
                open={showModal}
                title="Demo mode"
                message="This is a display-only theme. Editing roles and permissions is disabled."
                onClose={() => setShowModal(false)}
            />
        </Styled.Wrap>
    );
};

export default AdminPermissionsPage;
