import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Styled } from "./styled";

const DEMO_MODE = true;

const SettingsNotifications = () => {
    const handlePrint = () => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            setTimeout(() => {
                document.body.classList.remove("print-section-mode");
            }, 50);
        }
    };

    return (
        <Styled.Wrapper>
            {/* Page Header */}
            <header className="header">
                <div className="breadcrumbs">
                    <NavLink to="/home" title="Go Home">Home</NavLink>
                    <span className="sep">/</span>
                    <NavLink to="/settings" title="Open Settings">Settings</NavLink>
                    <span className="sep">/</span>
                    <span className="here">Notifications</span>
                </div>

                <div className="header-actions">
                    <NavLink className="btn ghost" to="/settings/appearance" title="Appearance">Appearance</NavLink>
                    <NavLink className="btn ghost" to="/settings/profile" title="Profile">Profile</NavLink>
                    <NavLink className="btn ghost" to="/settings/print-templates" title="Print Templates">Print Templates</NavLink>
                    <NavLink className="btn ghost" to="/settings/webhooks" title="Webhooks">Webhooks</NavLink>
                    <button
                        className="btn"
                        onClick={handlePrint}
                        title="Print this section"
                    >
                        Print
                    </button>
                    <button
                        className="btn primary"
                        disabled={DEMO_MODE}
                        title={DEMO_MODE ? "Demo only — disabled" : "Save settings"}
                    >
                        Save Changes
                    </button>
                </div>
            </header>

            {/* Top Summary */}
            <section className="grid grid-4">
                <div className="card kpi">
                    <div className="kpi-title">Channels</div>
                    <div className="kpi-value">Email · SMS · In-App · Push</div>
                    <div className="kpi-sub">All channels are configured</div>
                </div>
                <div className="card kpi">
                    <div className="kpi-title">Quiet Hours</div>
                    <div className="kpi-value">22:00hrs – 07:00hrs</div>
                    <div className="kpi-sub">No outbound during quiet hours</div>
                </div>
                <div className="card kpi">
                    <div className="kpi-title">Digest</div>
                    <div className="kpi-value">Daily, 08:30hrs</div>
                    <div className="kpi-sub">Also Weekly, Sat 09:00hrs</div>
                </div>
                <div className="card kpi">
                    <div className="kpi-title">Templates</div>
                    <div className="kpi-value">24</div>
                    <div className="kpi-sub">Shared across apps</div>
                </div>
            </section>

            {/* Print CSS */}
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

            {/* Main Content */}
            <div id="search-print-area">
                {/* Channels */}
                <section className="section">
                    <div className="section-head">
                        <h2 className="title">Notification Channels</h2>
                        <div className="links">
                            <NavLink to="/settings/notifications" end title="Notifications home">Home</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/settings/email-templates" title="Email Templates">Email Templates</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/admin/email-templates" title="Admin Email Templates">Admin Templates</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/admin/sms-templates" title="Admin SMS Templates">SMS Templates</NavLink>
                        </div>
                    </div>

                    <div className="grid grid-4">
                        <div className="card channel">
                            <div className="channel-head">
                                <div>
                                    <h3>Email</h3>
                                    <p className="muted">Transactional and system messages</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span></span>
                                </label>
                            </div>
                            <ul className="list">
                                <li>Order updates</li>
                                <li>Invoice issued</li>
                                <li>Low stock alerts</li>
                                <li>Security notifications</li>
                            </ul>
                            <div className="actions">
                                <NavLink to="/settings/print-templates" className="btn small ghost" title="Manage print/email layouts">Manage Templates</NavLink>
                                <NavLink to="/reports/customers" className="btn small ghost" title="Open customer reports">Open Reports</NavLink>
                            </div>
                        </div>

                        <div className="card channel">
                            <div className="channel-head">
                                <div>
                                    <h3>SMS</h3>
                                    <p className="muted">Time-critical alerts</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span></span>
                                </label>
                            </div>
                            <ul className="list">
                                <li>OTP & verification</li>
                                <li>Payment failures</li>
                                <li>Shipment exceptions</li>
                            </ul>
                            <div className="actions">
                                <NavLink to="/admin/sms-templates" className="btn small ghost" title="Edit SMS templates">Edit Templates</NavLink>
                                <NavLink to="/shipments" className="btn small ghost" title="See all shipments">Shipments</NavLink>
                            </div>
                        </div>

                        <div className="card channel">
                            <div className="channel-head">
                                <div>
                                    <h3>In-App</h3>
                                    <p className="muted">Bell icon feed & toasts</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span></span>
                                </label>
                            </div>
                            <ul className="list">
                                <li>Mentions & assignments</li>
                                <li>Approvals pending</li>
                                <li>Import/Export status</li>
                            </ul>
                            <div className="actions">
                                <NavLink to="/notifications" className="btn small ghost" title="Open notifications center">Open Center</NavLink>
                                <NavLink to="/tools/import-export" className="btn small ghost" title="Go to Import/Export">Import / Export</NavLink>
                            </div>
                        </div>

                        <div className="card channel">
                            <div className="channel-head">
                                <div>
                                    <h3>Push</h3>
                                    <p className="muted">Mobile & desktop push</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span></span>
                                </label>
                            </div>
                            <ul className="list">
                                <li>Shipment out for delivery</li>
                                <li>Invoice payment received</li>
                            </ul>
                            <div className="actions">
                                <NavLink to="/shipments" className="btn small ghost" title="Shipments list">Track Shipments</NavLink>
                                <NavLink to="/invoices" className="btn small ghost" title="Invoices list">Invoices</NavLink>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Subscription Matrix */}
                <section className="section">
                    <div className="section-head">
                        <h2 className="title">Subscriptions Matrix</h2>
                        <div className="links">
                            <NavLink to="/admin/users" title="Users">Users</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/admin/roles" title="Roles">Roles</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/admin/permissions" title="Permissions">Permissions</NavLink>
                        </div>
                    </div>

                    <div className="card">
                        <div className="table-scroll">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Event</th>
                                        <th>Email</th>
                                        <th>SMS</th>
                                        <th>In-App</th>
                                        <th>Push</th>
                                        <th>Links</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { ev: "Order Placed", links: ["/orders", "/reports/sales"] },
                                        { ev: "Order Shipped", links: ["/shipments", "/orders"] },
                                        { ev: "Invoice Issued", links: ["/invoices", "/reports/finance"] },
                                        { ev: "Payment Received", links: ["/sales/payments", "/invoices"] },
                                        { ev: "Low Stock", links: ["/inventory", "/inventory/reorder"] },
                                        { ev: "PO Approved", links: ["/purchase-orders", "/vendors"] },
                                    ].map((row, i) => (
                                        <tr key={i}>
                                            <td className="event">{row.ev}</td>
                                            {Array.from({ length: 4 }).map((_, idx) => (
                                                <td key={idx}>
                                                    <span className="badge on" title="Enabled">ON</span>
                                                </td>
                                            ))}
                                            <td className="quick-links">
                                                {row.links.map((to, j) => (
                                                    <NavLink key={j} to={to} className="tiny-link">{to}</NavLink>
                                                ))}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="note muted">
                            Display-only demo. Toggle changes are disabled.
                        </div>
                    </div>
                </section>

                {/* Digests & Quiet Hours */}
                <section className="section">
                    <div className="section-head">
                        <h2 className="title">Digests & Quiet Hours</h2>
                        <div className="links">
                            <NavLink to="/settings/numbering" title="Document numbering">Numbering</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/settings/currencies" title="Currencies">Currencies</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/settings/units" title="Units of measure">Units</NavLink>
                        </div>
                    </div>

                    <div className="grid grid-3">
                        <div className="card">
                            <h3 className="subhead">Daily Digest</h3>
                            <p className="muted">Sent once a day with summarized events.</p>
                            <div className="chips">
                                <span className="chip">08:30hrs</span>
                                <span className="chip">Includes: Orders, Invoices, Inventory</span>
                            </div>
                        </div>
                        <div className="card">
                            <h3 className="subhead">Weekly Digest</h3>
                            <p className="muted">Compact overview for leadership.</p>
                            <div className="chips">
                                <span className="chip">Sat 09:00hrs</span>
                                <span className="chip">Includes: Finance, Procurement</span>
                            </div>
                        </div>
                        <div className="card">
                            <h3 className="subhead">Quiet Hours</h3>
                            <p className="muted">Outbound notifications are paused.</p>
                            <div className="chips">
                                <span className="chip">22:00hrs → 07:00hrs</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Templates */}
                <section className="section">
                    <div className="section-head">
                        <h2 className="title">Templates</h2>
                        <div className="links">
                            <NavLink to="/admin/email-templates" title="Admin Email Templates">Admin Email</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/admin/sms-templates" title="Admin SMS Templates">Admin SMS</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/settings/print-templates" title="Print Templates">Print Templates</NavLink>
                        </div>
                    </div>

                    <div className="card">
                        <div className="templates">
                            {[
                                { name: "Order Confirmation", route: "/admin/email-templates" },
                                { name: "Invoice Issued", route: "/admin/email-templates" },
                                { name: "Payment Received", route: "/admin/email-templates" },
                                { name: "Shipment Dispatched", route: "/admin/email-templates" },
                                { name: "Low Stock Alert", route: "/admin/email-templates" },
                                { name: "Password Reset", route: "/admin/email-templates" },
                            ].map((t, i) => (
                                <Link key={i} to={t.route} className="tpl">
                                    <span className="dot-bullet" aria-hidden="true"></span>
                                    {t.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Webhooks & Endpoints */}
                <section className="section">
                    <div className="section-head">
                        <h2 className="title">Outbound Endpoints (Read-only)</h2>
                        <div className="links">
                            <NavLink to="/settings/webhooks" title="Webhooks">Manage Webhooks</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/tools/playground" title="Playground">Playground</NavLink>
                        </div>
                    </div>

                    <div className="grid grid-2">
                        <div className="card endpoint">
                            <h3 className="subhead">Email Provider</h3>
                            <code className="code">POST https://api.example.com/v1/email/send</code>
                            <div className="chips">
                                <span className="chip">Auth: Bearer ••••</span>
                                <span className="chip">Timeout: 10s</span>
                            </div>
                        </div>
                        <div className="card endpoint">
                            <h3 className="subhead">SMS Provider</h3>
                            <code className="code">POST https://api.example.com/v1/sms/send</code>
                            <div className="chips">
                                <span className="chip">DND Compliance</span>
                                <span className="chip">Timeout: 5s</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent Activity */}
                <section className="section">
                    <div className="section-head">
                        <h2 className="title">Recent Notification Activity</h2>
                        <div className="links">
                            <NavLink to="/admin/audit-log" title="Audit Log">Audit Log</NavLink>
                            <span className="dot">•</span>
                            <NavLink to="/admin/activity" title="System Activity">System Activity</NavLink>
                        </div>
                    </div>

                    <div className="card timeline">
                        <ul>
                            <li>
                                <span className="time">Sat Oct 04 2025 09:02:11hrs</span>
                                <span className="label">Email</span>
                                <span>Invoice INV-2031 sent to <i>arpit@example.com</i></span>
                                <NavLink to="/invoices/INV-2031" className="tiny-link">/invoices/INV-2031</NavLink>
                            </li>
                            <li>
                                <span className="time">Sat Oct 04 2025 08:30:00hrs</span>
                                <span className="label">Digest</span>
                                <span>Daily digest generated for Admins</span>
                                <NavLink to="/reports/finance" className="tiny-link">/reports/finance</NavLink>
                            </li>
                            <li>
                                <span className="time">Fri Oct 03 2025 18:22:45hrs</span>
                                <span className="label">SMS</span>
                                <span>Shipment S-1023 out for delivery</span>
                                <NavLink to="/shipments/S-1023" className="tiny-link">/shipments/S-1023</NavLink>
                            </li>
                            <li>
                                <span className="time">Fri Oct 03 2025 11:05:10hrs</span>
                                <span className="label">In-App</span>
                                <span>PO PO-5017 approved by Priya</span>
                                <NavLink to="/purchase-orders/PO-5017" className="tiny-link">/purchase-orders/PO-5017</NavLink>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
};

export default SettingsNotifications;
