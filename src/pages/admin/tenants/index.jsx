import React, { useMemo, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FiFilter, FiPlus, FiPrinter, FiRefreshCw, FiExternalLink, FiLock, FiTrash2, FiUsers, FiSettings, FiDatabase, FiActivity } from "react-icons/fi";
import { Styled } from "./styled";

const DEMO_MODE = true;

const TENANTS = [
    {
        id: "TEN-001",
        name: "Blue Orchid Healthcare",
        code: "blue-orchid",
        domain: "https://blueorchid.example.com",
        plan: "Business",
        status: "Active",
        createdAt: "2025-07-11T09:30:23+05:30",
        renewsAt: "2026-07-11T09:30:23+05:30",
        owner: { name: "Ananya Singh", email: "ananya@blueorchid.example.com" },
        usage: { users: 42, storageGB: 118, apiCallsM: 1.9 },
        tags: ["clinic", "east-zone", "priority"]
    },
    {
        id: "TEN-002",
        name: "Astra Labs",
        code: "astra-labs",
        domain: "https://astra.example.com",
        plan: "Enterprise",
        status: "Active",
        createdAt: "2024-12-20T14:12:04+05:30",
        renewsAt: "2025-12-20T14:12:04+05:30",
        owner: { name: "Rahul Verma", email: "rahul@astra.example.com" },
        usage: { users: 230, storageGB: 860, apiCallsM: 9.4 },
        tags: ["pathology", "west-zone"]
    },
    {
        id: "TEN-003",
        name: "Nimbus Care",
        code: "nimbus-care",
        domain: "https://nimbus.example.com",
        plan: "Starter",
        status: "Trial",
        createdAt: "2025-09-18T10:02:51+05:30",
        renewsAt: "2025-10-18T10:02:51+05:30",
        owner: { name: "Priya Iyer", email: "priya@nimbus.example.com" },
        usage: { users: 8, storageGB: 6, apiCallsM: 0.1 },
        tags: ["trial"]
    },
    {
        id: "TEN-004",
        name: "Northwind Wellness",
        code: "northwind-wellness",
        domain: "https://northwind.example.com",
        plan: "Business",
        status: "Suspended",
        createdAt: "2023-04-02T08:50:10+05:30",
        renewsAt: "2025-06-02T08:50:10+05:30",
        owner: { name: "Aman Gupta", email: "aman@northwind.example.com" },
        usage: { users: 64, storageGB: 240, apiCallsM: 2.3 },
        tags: ["overdue"]
    },
    {
        id: "TEN-005",
        name: "Lumina Clinics",
        code: "lumina-clinics",
        domain: "https://lumina.example.com",
        plan: "Business",
        status: "Active",
        createdAt: "2025-01-05T12:25:41+05:30",
        renewsAt: "2026-01-05T12:25:41+05:30",
        owner: { name: "Devika Rao", email: "devika@lumina.example.com" },
        usage: { users: 31, storageGB: 120, apiCallsM: 0.7 },
        tags: ["multi-branch"]
    },
    {
        id: "TEN-006",
        name: "MedAxis Group",
        code: "medaxis-group",
        domain: "https://medaxis.example.com",
        plan: "Enterprise",
        status: "Active",
        createdAt: "2022-10-14T19:40:00+05:30",
        renewsAt: "2025-10-14T19:40:00+05:30",
        owner: { name: "Harsh Vardhan", email: "harsh@medaxis.example.com" },
        usage: { users: 520, storageGB: 1730, apiCallsM: 12.1 },
        tags: ["priority", "multi-country"]
    },
    {
        id: "TEN-007",
        name: "Sunrise Diagnostics",
        code: "sunrise-diagnostics",
        domain: "https://sunrise.example.com",
        plan: "Starter",
        status: "Cancelled",
        createdAt: "2024-02-22T15:15:59+05:30",
        renewsAt: "2025-02-22T15:15:59+05:30",
        owner: { name: "Rina Kapoor", email: "rina@sunrise.example.com" },
        usage: { users: 12, storageGB: 14, apiCallsM: 0.0 },
        tags: ["offboarded"]
    },
    {
        id: "TEN-008",
        name: "Trident Hospitals",
        code: "trident-hospitals",
        domain: "https://trident.example.com",
        plan: "Enterprise",
        status: "Active",
        createdAt: "2025-03-28T11:05:17+05:30",
        renewsAt: "2026-03-28T11:05:17+05:30",
        owner: { name: "Karan Arora", email: "karan@trident.example.com" },
        usage: { users: 310, storageGB: 980, apiCallsM: 7.2 },
        tags: ["priority", "teaching"]
    }
];

const dayFmt = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    // e.g., Sat Oct 04 2025
    return d.toDateString();
};
const timeFmt = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
};
const dateTimeFmt = (iso) => `${dayFmt(iso)} ${timeFmt(iso)}`;

export default function TenantsPage() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [plan, setPlan] = useState("All");
    const [status, setStatus] = useState("All");
    const [modal, setModal] = useState(null); // {title, message}

    const filtered = useMemo(() => {
        const t = q.trim().toLowerCase();
        return TENANTS.filter(x => {
            const matchesQ = !t ||
                x.name.toLowerCase().includes(t) ||
                x.code.toLowerCase().includes(t) ||
                x.owner.name.toLowerCase().includes(t) ||
                x.owner.email.toLowerCase().includes(t);
            const matchesPlan = (plan === "All") || (x.plan === plan);
            const matchesStatus = (status === "All") || (x.status === status);
            return matchesQ && matchesPlan && matchesStatus;
        });
    }, [q, plan, status]);

    const openDisabled = (title = "Action disabled", message = "This demo is display-only.") => {
        setModal({ title, message });
    };

    const onPrint = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => document.body.classList.remove("print-section-mode");
        setTimeout(() => window.print(), 0);
    };

    return (
        <Styled.Page>
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
                <NavLink to="/admin/users">Admin</NavLink>
                <span>/</span>
                <strong>Tenants</strong>
            </Styled.Breadcrumbs>

            <Styled.Toolbar>
                <div className="left">
                    <h1>Tenants</h1>
                    <div className="meta">
                        <span>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
                        <span>•</span>
                        <span>Last updated: {dateTimeFmt(new Date().toISOString())}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="ghost" onClick={() => navigate("/admin/system-status")}>
                        <FiActivity /> System
                    </button>
                    <button className="ghost" onClick={() => navigate("/admin/integrations")}>
                        <FiExternalLink /> Integrations
                    </button>
                    <button className="ghost" onClick={() => navigate("/settings/appearance")}>
                        <FiSettings /> Appearance
                    </button>

                    <button className="ghost" onClick={() => { /* pretend refresh */ }}>
                        <FiRefreshCw /> Refresh
                    </button>
                    <button className="ghost" onClick={onPrint}>
                        <FiPrinter /> Print
                    </button>

                    <span className="divider" />

                    <button
                        className="primary"
                        disabled={DEMO_MODE}
                        title={DEMO_MODE ? "Demo: disabled" : "Create new tenant"}
                        onClick={() => (DEMO_MODE ? openDisabled("Create tenant", "Creating tenants is disabled in demo.") : null)}
                    >
                        <FiPlus /> New Tenant
                    </button>
                </div>
            </Styled.Toolbar>

            <Styled.Filters>
                <div className="input">
                    <FiFilter className="icon" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search by name, code, owner, email"
                        aria-label="Search tenants"
                    />
                </div>
                <div className="selects">
                    <select value={plan} onChange={(e) => setPlan(e.target.value)} aria-label="Filter by plan">
                        <option>All</option>
                        <option>Starter</option>
                        <option>Business</option>
                        <option>Enterprise</option>
                    </select>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
                        <option>All</option>
                        <option>Active</option>
                        <option>Trial</option>
                        <option>Suspended</option>
                        <option>Cancelled</option>
                    </select>
                </div>
            </Styled.Filters>

            {/* Print area starts */}
            <div id="search-print-area">
                <Styled.TableWrap>
                    <table>
                        <thead>
                            <tr>
                                <th>Tenant</th>
                                <th>Plan</th>
                                <th>Status</th>
                                <th>Owner</th>
                                <th>Created</th>
                                <th>Renews</th>
                                <th>Usage</th>
                                <th>Links</th>
                                <th className="right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((t) => (
                                <tr key={t.id}>
                                    <td>
                                        <div className="tenant">
                                            <div className="avatar" aria-hidden="true">{t.name.slice(0, 1)}</div>
                                            <div className="info">
                                                <div className="name">{t.name}</div>
                                                <div className="sub">{t.id} • {t.code}</div>
                                                <div className="tags">
                                                    {t.tags?.map(tag => <span key={tag} className="tag">#{tag}</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`chip plan ${t.plan.toLowerCase()}`}>{t.plan}</span>
                                    </td>
                                    <td>
                                        <span className={`chip status ${t.status.toLowerCase()}`}>{t.status}</span>
                                    </td>
                                    <td>
                                        <div className="owner">
                                            <div className="name">{t.owner.name}</div>
                                            <div className="email">{t.owner.email}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="date">{dayFmt(t.createdAt)}</div>
                                        <div className="time">{timeFmt(t.createdAt)}</div>
                                    </td>
                                    <td>
                                        <div className="date">{dayFmt(t.renewsAt)}</div>
                                        <div className="time">{timeFmt(t.renewsAt)}</div>
                                    </td>
                                    <td>
                                        <div className="usage">
                                            <span title="Users"><FiUsers /> {t.usage.users}</span>
                                            <span title="Storage (GB)"><FiDatabase /> {t.usage.storageGB}GB</span>
                                            <span title="API Calls (Monthly)">{t.usage.apiCallsM}M</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="links">
                                            <a href={t.domain} target="_blank" rel="noreferrer">
                                                Domain <FiExternalLink />
                                            </a>
                                            <NavLink to={`/admin/users?tenant=${t.id}`} title="Manage users">Users</NavLink>
                                            <NavLink to={`/admin/roles?tenant=${t.id}`}>Roles</NavLink>
                                            <NavLink to={`/admin/permissions?tenant=${t.id}`}>Permissions</NavLink>
                                            <NavLink to={`/admin/integrations?tenant=${t.id}`}>Integrations</NavLink>
                                            <NavLink to={`/settings/billing?tenant=${t.id}`}>Billing</NavLink>
                                            <NavLink to={`/reports/finance?tenant=${t.id}`}>Finance Report</NavLink>
                                        </div>
                                    </td>
                                    <td className="right">
                                        <div className="row-actions">
                                            <button
                                                className="ghost"
                                                onClick={() => navigate(`/admin/users?tenant=${t.id}`)}
                                                title="Manage users"
                                            >
                                                <FiUsers /> Users
                                            </button>
                                            <button
                                                className="ghost"
                                                onClick={() => navigate(`/settings/appearance?tenant=${t.id}`)}
                                                title="Tenant appearance"
                                            >
                                                <FiSettings /> Theme
                                            </button>
                                            <button
                                                className="danger"
                                                disabled={DEMO_MODE}
                                                onClick={() =>
                                                    DEMO_MODE
                                                        ? setModal({ title: "Delete tenant", message: "Deleting is disabled in demo." })
                                                        : null
                                                }
                                                title={DEMO_MODE ? "Demo: disabled" : "Delete tenant"}
                                            >
                                                <FiTrash2 /> Delete
                                            </button>
                                            <button
                                                className="ghost"
                                                onClick={() => setModal({ title: "Restricted", message: "This section is restricted for your role in demo." })}
                                                title="Restricted"
                                            >
                                                <FiLock /> Restrict
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={9}>
                                        <Styled.Empty>
                                            <div className="card">
                                                <h3>No tenants match your filters</h3>
                                                <p>Try clearing filters or search by a different keyword.</p>
                                                <div className="actions">
                                                    <button className="ghost" onClick={() => { setQ(""); setPlan("All"); setStatus("All"); }}>
                                                        Reset filters
                                                    </button>
                                                    <NavLink to="/admin/integrations" className="link">Go to Integrations</NavLink>
                                                </div>
                                            </div>
                                        </Styled.Empty>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Styled.TableWrap>
            </div>
            {/* Print area ends */}

            {modal && (
                <Styled.Modal role="dialog" aria-modal="true">
                    <div className="box card">
                        <h3>{modal.title}</h3>
                        <p>{modal.message}</p>
                        <div className="actions">
                            <button className="primary" onClick={() => setModal(null)}>OK</button>
                        </div>
                    </div>
                    <div className="backdrop" onClick={() => setModal(null)} />
                </Styled.Modal>
            )}
        </Styled.Page>
    );
}
