import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import {
    FiPrinter,
    FiExternalLink,
    FiEdit3,
    FiShield,
    FiBell,
    FiUser,
    FiX,
    FiCheckCircle,
    FiClock,
    FiSmartphone,
    FiGlobe,
    FiMail,
    FiPhone,
    FiMapPin,
    FiDatabase,
    FiServer,
    FiBox,
    FiShoppingCart,
    FiFileText,
    FiTruck,
    FiUsers,
    FiCreditCard,
    FiAlertTriangle,
    FiTag,
} from "react-icons/fi";

/** -------------------------------------------------------
 * Utilities: date/time formatters (required formats)
 * ----------------------------------------------------- */
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

function formatDate(iso) {
    const d = new Date(iso);
    return `${days[d.getDay()]} ${months[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
}
function formatTime(iso) {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
}
function formatDateTime(iso) {
    const d = new Date(iso);
    return `${formatDate(d)} ${formatTime(d)}`;
}

/** Build/commit from Vite define (fallback to now for dev) */
const BUILD_ISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || new Date().toISOString();
const COMMIT_ISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || new Date().toISOString();

/** -------------------------------------------------------
 * Demo profile data (display-only)
 * ----------------------------------------------------- */
const demoUser = {
    id: "USR-0001",
    name: "Ashish Ranjan",
    handle: "@ashish",
    role: "Owner",
    org: "Demo Clinic ERP",
    email: "ashish@example.com",
    phone: "+91 98XXX 4XXX2",
    timezone: "Asia/Kolkata",
    locale: "en-IN",
    location: "Patna, Bihar, IN",
    status: "Active",
    joinedISO: "2024-01-12T10:15:00+05:30",
    lastLoginISO: "2025-10-04T15:38:20+05:30",
    avatarInitials: "AR",
    tags: ["Founder", "Full Access", "Beta Channel"],
};

const sessions = [
    {
        id: "S-01",
        device: "MacBook Pro • Chrome 129",
        ip: "49.37.114.21",
        location: "Patna, IN",
        lastActive: "2025-10-04T15:30:12+05:30",
        current: true,
    },
    {
        id: "S-02",
        device: "iPhone 14 • Safari",
        ip: "100.97.12.5",
        location: "Bengaluru, IN",
        lastActive: "2025-09-29T22:04:51+05:30",
        current: false,
    },
    {
        id: "S-03",
        device: "Windows 11 • Edge",
        ip: "172.19.22.140",
        location: "Hyderabad, IN",
        lastActive: "2025-09-20T09:12:33+05:30",
        current: false,
    },
];

const activity = [
    { id: "A-01", text: <>Created <NavLink to="/orders/ORD-3001">Sales Order ORD-3001</NavLink></>, stamp: "2025-10-04T10:12:56+05:30" },
    { id: "A-02", text: <>Updated <NavLink to="/customers/CUST-1001">Customer CUST-1001</NavLink> address</>, stamp: "2025-10-03T18:44:09+05:30" },
    { id: "A-03", text: <>Printed <NavLink to="/invoices/INV-2031/print">Invoice INV-2031</NavLink></>, stamp: "2025-10-02T12:03:40+05:30" },
    { id: "A-04", text: <>Added product to <NavLink to="/purchase-orders/PO-9015">PO-9015</NavLink></>, stamp: "2025-09-30T09:20:15+05:30" },
];

const quickLinks = [
    { to: "/orders", icon: <FiShoppingCart />, label: "Orders" },
    { to: "/invoices", icon: <FiFileText />, label: "Invoices" },
    { to: "/receipts", icon: <FiCreditCard />, label: "Receipts" },
    { to: "/products", icon: <FiBox />, label: "Products" },
    { to: "/categories", icon: <FiTag />, label: "Categories" },
    { to: "/vendors", icon: <FiUsers />, label: "Vendors" },
    { to: "/shipments", icon: <FiTruck />, label: "Shipments" },
    { to: "/inventory", icon: <FiDatabase />, label: "Inventory" },
    { to: "/finance", icon: <FiServer />, label: "Finance" },
    { to: "/reports/sales", icon: <FiFileText />, label: "Sales Report" },
    { to: "/settings/profile", icon: <FiUser />, label: "Profile Settings" },
    { to: "/notifications", icon: <FiBell />, label: "Notifications" },
    { to: "/admin/users", icon: <FiUsers />, label: "Admin • Users" },
    { to: "/tools/import-export", icon: <FiExternalLink />, label: "Import/Export" },
    { to: "/help", icon: <FiExternalLink />, label: "Help Center" },
    { to: "/faq", icon: <FiExternalLink />, label: "FAQ" },
];

export default function ProfilePage() {
    const [modal, setModal] = useState({ open: false, title: "", message: "" });
    const navigate = useNavigate();

    const buildTime = useMemo(() => formatDateTime(BUILD_ISO), []);
    const commitTime = useMemo(() => formatDateTime(COMMIT_ISO), []);
    const joined = useMemo(() => formatDate(demoUser.joinedISO), []);
    const lastLogin = useMemo(() => `${formatDate(demoUser.lastLoginISO)} ${formatTime(demoUser.lastLoginISO)}`, []);

    const openDemoModal = (title = "Action unavailable", message = "This is a demo display. Actions are disabled.") => {
        setModal({ open: true, title, message });
    };

    const closeModal = () => setModal({ open: false, title: "", message: "" });

    const handlePrint = () => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            const done = () => document.body.classList.remove("print-section-mode");
            window.addEventListener("afterprint", done, { once: true });
            // Fallback for some browsers
            setTimeout(done, 1200);
        }
    };

    return (
        <Styled.Page>
            {/* Print rules (as requested) */}
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

            {/* Header */}
            <Styled.Header className="card">
                <div className="left">
                    <Styled.Avatar aria-hidden="true">{demoUser.avatarInitials}</Styled.Avatar>
                    <div className="meta">
                        <div className="nameRow">
                            <h1>{demoUser.name}</h1>
                            <span className="verified" title="Verified account"><FiCheckCircle /></span>
                        </div>
                        <div className="sub">
                            <span>{demoUser.handle}</span>
                            <span className="dot">•</span>
                            <span>{demoUser.role}</span>
                            <span className="dot">•</span>
                            <span>{demoUser.org}</span>
                        </div>
                        <div className="tags">
                            {demoUser.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                        </div>
                    </div>
                </div>

                <div className="right actions">
                    <button className="ghost" onClick={() => navigate("/settings/profile")} title="Edit in Settings">
                        <FiEdit3 /> Edit Profile
                    </button>
                    <button onClick={handlePrint} title="Print summary">
                        <FiPrinter /> Print
                    </button>
                </div>
            </Styled.Header>

            {/* Top Meta */}
            <Styled.Grid cols="4" className="topMeta">
                <Styled.Card>
                    <div className="line"><FiMail /><span>Email</span></div>
                    <div className="value">{demoUser.email}</div>
                </Styled.Card>
                <Styled.Card>
                    <div className="line"><FiPhone /><span>Phone</span></div>
                    <div className="value">{demoUser.phone}</div>
                </Styled.Card>
                <Styled.Card>
                    <div className="line"><FiGlobe /><span>Timezone</span></div>
                    <div className="value">{demoUser.timezone}</div>
                </Styled.Card>
                <Styled.Card>
                    <div className="line"><FiMapPin /><span>Location</span></div>
                    <div className="value">{demoUser.location}</div>
                </Styled.Card>
            </Styled.Grid>

            {/* Quick Links */}
            <Styled.SectionHeader>
                <h2>Quick Links</h2>
                <p>Jump to your most-used areas.</p>
            </Styled.SectionHeader>
            <Styled.Grid cols="8" className="quickLinks">
                {quickLinks.map((q) => (
                    <Link key={q.to} to={q.to} className="qLink card" title={q.label}>
                        <span className="icon">{q.icon}</span>
                        <span className="label">{q.label}</span>
                        <FiExternalLink className="ext" />
                    </Link>
                ))}
            </Styled.Grid>

            {/* Summary (printable area) */}
            <Styled.SectionHeader>
                <h2>Profile Summary</h2>
                <p>Read-only overview for audit and reports.</p>
            </Styled.SectionHeader>
            <div id="search-print-area">
                <Styled.Grid cols="3">
                    <Styled.Card>
                        <div className="kvs">
                            <div><span className="k">User ID</span><span className="v">{demoUser.id}</span></div>
                            <div><span className="k">Status</span><span className="v">{demoUser.status}</span></div>
                            <div><span className="k">Member Since</span><span className="v">{joined}</span></div>
                            <div><span className="k">Last Login</span><span className="v">{lastLogin}</span></div>
                        </div>
                    </Styled.Card>

                    <Styled.Card>
                        <div className="kvs">
                            <div><span className="k">Organization</span><span className="v">{demoUser.org}</span></div>
                            <div><span className="k">Role</span><span className="v">{demoUser.role}</span></div>
                            <div><span className="k">Locale</span><span className="v">{demoUser.locale}</span></div>
                            <div><span className="k">Timezone</span><span className="v">{demoUser.timezone}</span></div>
                        </div>
                    </Styled.Card>

                    <Styled.Card>
                        <div className="kvs">
                            <div><span className="k">Build Time</span><span className="v">{buildTime}</span></div>
                            <div><span className="k">Last Commit</span><span className="v">{commitTime}</span></div>
                            <div><span className="k">App Base</span><span className="v">/react-routes-theme/</span></div>
                            <div><span className="k">Environment</span><span className="v">Demo</span></div>
                        </div>
                    </Styled.Card>
                </Styled.Grid>
            </div>

            {/* Security & Sessions */}
            <Styled.SectionHeader>
                <h2>Security & Sessions</h2>
                <p>Active logins across your devices.</p>
            </Styled.SectionHeader>
            <Styled.TableCard className="card">
                <table>
                    <thead>
                        <tr>
                            <th><FiSmartphone /> Device</th>
                            <th>IP</th>
                            <th>Location</th>
                            <th><FiClock /> Last Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessions.map(s => (
                            <tr key={s.id}>
                                <td>{s.device}{s.current ? <span className="pill">Current</span> : null}</td>
                                <td>{s.ip}</td>
                                <td>{s.location}</td>
                                <td>{`${formatDate(s.lastActive)} ${formatTime(s.lastActive)}`}</td>
                                <td>
                                    <button className="ghost" disabled title="Demo display">
                                        <FiShield /> Sign out
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="rowActions">
                    <button className="ghost" onClick={() => openDemoModal("Disabled in demo", "Sign out of all sessions is disabled in this demo.")}>
                        <FiShield /> Sign out of other sessions
                    </button>
                </div>
            </Styled.TableCard>

            {/* Notifications (display-only toggles) */}
            <Styled.SectionHeader>
                <h2>Notifications</h2>
                <p>Channel preferences (read-only for demo).</p>
            </Styled.SectionHeader>
            <Styled.Grid cols="3">
                <Styled.Card>
                    <div className="line"><FiBell /><span>System Alerts</span></div>
                    <div className="toggles">
                        <label><input type="checkbox" checked readOnly /> Email</label>
                        <label><input type="checkbox" checked readOnly /> In-app</label>
                        <label><input type="checkbox" readOnly /> SMS</label>
                    </div>
                </Styled.Card>
                <Styled.Card>
                    <div className="line"><FiFileText /><span>Billing</span></div>
                    <div className="toggles">
                        <label><input type="checkbox" checked readOnly /> Invoices</label>
                        <label><input type="checkbox" checked readOnly /> Receipts</label>
                        <label><input type="checkbox" readOnly /> Dunning</label>
                    </div>
                </Styled.Card>
                <Styled.Card>
                    <div className="line"><FiUsers /><span>Team</span></div>
                    <div className="toggles">
                        <label><input type="checkbox" checked readOnly /> Mentions</label>
                        <label><input type="checkbox" readOnly /> Invites</label>
                        <label><input type="checkbox" checked readOnly /> Approvals</label>
                    </div>
                </Styled.Card>
            </Styled.Grid>

            {/* Activity Timeline */}
            <Styled.SectionHeader>
                <h2>Recent Activity</h2>
                <p>Latest events tied to your account.</p>
            </Styled.SectionHeader>
            <Styled.Card className="timeline card">
                <ul>
                    {activity.map(a => (
                        <li key={a.id}>
                            <span className="dot" />
                            <div className="content">
                                <div className="text">{a.text}</div>
                                <div className="stamp">{`${formatDate(a.stamp)} ${formatTime(a.stamp)}`}</div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="timelineLinks">
                    <Link to="/admin/activity" className="ghost"><FiExternalLink /> View all activity</Link>
                    <Link to="/admin/audit-log" className="ghost"><FiExternalLink /> Open audit log</Link>
                </div>
            </Styled.Card>

            {/* Navigation Blocks */}
            <Styled.SectionHeader>
                <h2>Explore More</h2>
                <p>Navigate across modules.</p>
            </Styled.SectionHeader>
            <Styled.Grid cols="4">
                <Link to="/customers" className="navBlock card">
                    <h3>Customers</h3>
                    <p>Browse accounts and relationships.</p>
                    <div className="links">
                        <NavLink to="/customers">All Customers</NavLink>
                        <NavLink to="/orders">Orders</NavLink>
                        <NavLink to="/invoices">Invoices</NavLink>
                    </div>
                </Link>
                <Link to="/products" className="navBlock card">
                    <h3>Catalog</h3>
                    <p>Products, brands, attributes, price lists.</p>
                    <div className="links">
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/products/brands">Brands</NavLink>
                        <NavLink to="/products/price-lists">Price Lists</NavLink>
                    </div>
                </Link>
                <Link to="/inventory" className="navBlock card">
                    <h3>Inventory</h3>
                    <p>Lots, batches, warehouses, transfers.</p>
                    <div className="links">
                        <NavLink to="/inventory">Overview</NavLink>
                        <NavLink to="/inventory/transfers">Transfers</NavLink>
                        <NavLink to="/inventory/warehouses">Warehouses</NavLink>
                    </div>
                </Link>
                <Link to="/reports" className="navBlock card">
                    <h3>Reports</h3>
                    <p>Sales, inventory, finance, procurement.</p>
                    <div className="links">
                        <NavLink to="/reports/sales">Sales</NavLink>
                        <NavLink to="/reports/inventory">Inventory</NavLink>
                        <NavLink to="/reports/finance">Finance</NavLink>
                    </div>
                </Link>
            </Styled.Grid>

            {/* Danger-like zone (demo-guarded) */}
            <Styled.Card className="danger card">
                <div className="title"><FiAlertTriangle /> Account Controls</div>
                <p>These actions are disabled in the demo.</p>
                <div className="row">
                    <button className="ghost" onClick={() => openDemoModal("Disabled in demo", "Deactivating account is disabled in this demo.")}><FiX /> Deactivate</button>
                    <button className="ghost" onClick={() => openDemoModal("Disabled in demo", "Deleting account is disabled in this demo.")}><FiX /> Delete</button>
                </div>
            </Styled.Card>

            {/* Custom modal */}
            {modal.open && (
                <Styled.ModalOverlay onClick={closeModal}>
                    <Styled.Modal role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                        <div className="head">
                            <FiShield />
                            <h3>{modal.title}</h3>
                        </div>
                        <p>{modal.message}</p>
                        <div className="actions">
                            <button onClick={closeModal}><FiX /> Close</button>
                        </div>
                    </Styled.Modal>
                </Styled.ModalOverlay>
            )}
        </Styled.Page>
    );
}
