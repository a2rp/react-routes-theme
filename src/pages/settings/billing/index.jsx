import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/** Demo flag (display-only) */
const DEMO_MODE = true;

/** Date format helpers (required formats)
 *  - Date: Sat Oct 04 2025
 *  - Date+Time: Sat Oct 04 2025 15:38:20hrs
 *  - Time: 15:38:20hrs
 */
const WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

const fmtDate = (d) => {
    const x = new Date(d);
    return `${WD[x.getDay()]} ${MON[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = new Date(d);
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const x = new Date(d);
    return `${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

const SettingsBillingPage = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState({ open: false, title: "", body: "" });

    // Static showcase data (display-only)
    const plan = {
        name: "Scale",
        status: "Active",
        cycle: "Monthly",
        currency: "INR",
        seats: 25,
        perSeat: 899,
        nextChargeOn: "2025-10-20T10:30:00",
        lastBilledOn: "2025-09-20T10:30:00",
        paymentMethod: { brand: "Visa", last4: "4242", exp: "08/28", holder: "Ashish Ranjan" },
        billingEmail: "billing@acmecare.in",
        billingPhone: "+91-98765-43210",
        gstin: "29ABCDE1234F2Z5",
    };

    const addOns = [
        { key: "inventoryPro", label: "Inventory Pro", status: "Active" },
        { key: "advancedReports", label: "Advanced Reports", status: "Active" },
        { key: "auditTrail", label: "Audit Trail", status: "Active" },
        { key: "whitelabel", label: "Whitelabel", status: "Inactive" },
        { key: "sso", label: "SSO (SAML/OIDC)", status: "Inactive" },
        { key: "governance", label: "Data Governance", status: "Inactive" },
    ];

    const invoices = useMemo(
        () => [
            { id: "INV-2031", date: "2025-09-20T10:30:00", amount: 22475, status: "Paid", method: "Visa •••• 4242" },
            { id: "INV-2022", date: "2025-08-20T10:30:00", amount: 22475, status: "Paid", method: "Visa •••• 4242" },
            { id: "INV-2013", date: "2025-07-20T10:30:00", amount: 22475, status: "Paid", method: "Visa •••• 4242" },
            { id: "INV-2004", date: "2025-06-20T10:30:00", amount: 22475, status: "Paid", method: "Visa •••• 4242" },
            { id: "INV-1995", date: "2025-05-20T10:30:00", amount: 22475, status: "Paid", method: "Visa •••• 4242" },
            { id: "INV-1986", date: "2025-04-20T10:30:00", amount: 22475, status: "Paid", method: "Visa •••• 4242" },
            { id: "INV-1977", date: "2025-03-20T10:30:00", amount: 22475, status: "Paid", method: "Visa •••• 4242" },
            { id: "INV-1968", date: "2025-02-20T10:30:00", amount: 22475, status: "Paid", method: "Visa •••• 4242" },
        ],
        []
    );

    const costBreakdown = [
        { label: "Base plan (Scale, 25 seats × ₹899)", value: 25 * 899 },
        { label: "Add-on: Inventory Pro", value: 3000 },
        { label: "Add-on: Advanced Reports", value: 2000 },
        { label: "CGST (9%)", value: Math.round((25 * 899 + 3000 + 2000) * 0.09) },
        { label: "SGST (9%)", value: Math.round((25 * 899 + 3000 + 2000) * 0.09) },
    ];
    const totalDue = costBreakdown.reduce((a, b) => a + b.value, 0);

    const openDemoModal = (title, body) => setModal({ open: true, title, body });
    const closeModal = () => setModal({ open: false, title: "", body: "" });

    const handlePrint = () => {
        document.body.classList.add("print-section-mode");
        window.setTimeout(() => {
            window.print();
            window.setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
        }, 100);
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
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}</style>

            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <NavLink to="/settings" end>Settings</NavLink>
                <span className="sep">/</span>
                <span className="current">Billing</span>
            </div>

            {/* Header / Toolbar */}
            <header className="header">
                <div className="titles">
                    <h1>Billing</h1>
                    <p className="muted">Manage subscription, invoices, and payment methods.</p>
                </div>
                <div className="toolbar">
                    <button
                        onClick={() => openDemoModal("Update Card", "Card updates are disabled in this demo.")}
                        title="Update card"
                    >
                        Update Card
                    </button>
                    <button
                        onClick={() => openDemoModal("Change Plan", "Plan changes are disabled in this demo.")}
                        title="Change plan"
                    >
                        Change Plan
                    </button>
                    <button
                        className="danger"
                        onClick={() => openDemoModal("Cancel Subscription", "Subscription cancellation is disabled in this demo.")}
                        title="Cancel subscription"
                    >
                        Cancel Subscription
                    </button>
                </div>
            </header>

            {/* Printable area */}
            <section id="search-print-area">
                {/* Top summary cards */}
                <div className="grid grid-4">
                    <div className="card kpi">
                        <div className="label">Plan</div>
                        <div className="value">{plan.name}</div>
                        <div className={`pill ${plan.status.toLowerCase()}`}>{plan.status}</div>
                    </div>
                    <div className="card kpi">
                        <div className="label">Next charge</div>
                        <div className="value">{fmtDateTime(plan.nextChargeOn)}</div>
                        <div className="hint">{plan.cycle} • {plan.currency}</div>
                    </div>
                    <div className="card kpi">
                        <div className="label">Seats</div>
                        <div className="value">{plan.seats}</div>
                        <div className="hint">₹{plan.perSeat}/seat</div>
                    </div>
                    <div className="card kpi">
                        <div className="label">Last billed</div>
                        <div className="value">{fmtDate(plan.lastBilledOn)}</div>
                        <div className="hint">Method • {plan.paymentMethod.brand} •••• {plan.paymentMethod.last4}</div>
                    </div>
                </div>

                {/* Payment Method + Billing Profile */}
                <div className="grid grid-2">
                    <div className="card">
                        <h2>Payment Method</h2>
                        <div className="row">
                            <div className="pm">
                                <div className="pm-brand">{plan.paymentMethod.brand}</div>
                                <div className="pm-last4">•••• {plan.paymentMethod.last4}</div>
                                <div className="pm-exp">Exp {plan.paymentMethod.exp}</div>
                            </div>
                            <div className="actions">
                                <button onClick={() => openDemoModal("Update Card", "Card updates are disabled in this demo.")}>
                                    Update
                                </button>
                            </div>
                        </div>
                        <div className="meta">
                            <div>Cardholder: <span className="muted">{plan.paymentMethod.holder}</span></div>
                            <div>Billing email: <span className="muted">{plan.billingEmail}</span></div>
                            <div>Billing phone: <span className="muted">{plan.billingPhone}</span></div>
                            <div>GSTIN: <span className="muted">{plan.gstin}</span></div>
                        </div>
                        <div className="links">
                            <NavLink to="/settings/profile" end>Profile</NavLink>
                            <NavLink to="/admin/users" end>Users</NavLink>
                            <NavLink to="/settings/print-templates" end>Print Templates</NavLink>
                        </div>
                    </div>

                    <div className="card">
                        <h2>Current Plan</h2>
                        <ul className="features">
                            <li>Unlimited workspaces</li>
                            <li>Priority support</li>
                            <li>Advanced RBAC</li>
                            <li>15 custom print templates</li>
                            <li>API rate: 10k req/day</li>
                        </ul>
                        <div className="cta-row">
                            <button onClick={() => openDemoModal("Change Plan", "Plan changes are disabled in this demo.")}>
                                Change Plan
                            </button>
                            <NavLink to="/settings/billing" end>Refresh</NavLink>
                        </div>
                        <div className="hint">Cycle: {plan.cycle} • Currency: {plan.currency}</div>
                    </div>
                </div>

                {/* Add-ons */}
                <div className="card">
                    <h2>Add-ons</h2>
                    <div className="addons">
                        {addOns.map((a) => (
                            <div className="addon" key={a.key}>
                                <div className="addon-title">{a.label}</div>
                                <div className={`pill ${a.status === "Active" ? "active" : "inactive"}`}>{a.status}</div>
                                <button
                                    onClick={() => openDemoModal("Manage Add-on", "Add-on changes are disabled in this demo.")}
                                    title="Manage add-on"
                                >
                                    Manage
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cost breakdown */}
                <div className="grid grid-2">
                    <div className="card">
                        <h2>This Cycle (preview)</h2>
                        <table className="simple">
                            <thead>
                                <tr><th>Description</th><th className="right">Amount (₹)</th></tr>
                            </thead>
                            <tbody>
                                {costBreakdown.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.label}</td>
                                        <td className="right">{row.value.toLocaleString("en-IN")}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Total due on {fmtDate(plan.nextChargeOn)}</th>
                                    <th className="right">{totalDue.toLocaleString("en-IN")}</th>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="links">
                            <NavLink to="/finance/taxes" end>Taxes</NavLink>
                            <NavLink to="/finance" end>Finance</NavLink>
                            <NavLink to="/reports/finance" end>Finance Reports</NavLink>
                        </div>
                    </div>

                    {/* Quick nav */}
                    <div className="card">
                        <h2>Quick Navigation</h2>
                        <div className="quick-links">
                            <NavLink to="/invoices" end>Invoices</NavLink>
                            <NavLink to="/receipts" end>Receipts</NavLink>
                            <NavLink to="/invoices/credit-notes" end>Credit Notes</NavLink>
                            <NavLink to="/settings/numbering" end>Document Numbering</NavLink>
                            <NavLink to="/settings/currencies" end>Currencies</NavLink>
                            <NavLink to="/settings/tax" end>Tax</NavLink>
                            <NavLink to="/tools/import-export" end>Import / Export</NavLink>
                            <NavLink to="/settings/backups" end>Backups</NavLink>
                            <NavLink to="/reports" end>All Reports</NavLink>
                            <NavLink to="/dashboard" end>Dashboard</NavLink>
                        </div>
                        <div className="print-row">
                            <button onClick={handlePrint} title="Print this section">Print Billing Summary</button>
                            <span className="note">Printed on {fmtDateTime(new Date())}</span>
                        </div>
                    </div>
                </div>

                {/* Invoices table */}
                <div className="card">
                    <h2>Invoice History</h2>
                    <table className="simple hoverable">
                        <thead>
                            <tr>
                                <th>Invoice</th>
                                <th>Date</th>
                                <th>Amount (₹)</th>
                                <th>Status</th>
                                <th>Method</th>
                                <th className="right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((inv) => (
                                <tr key={inv.id}>
                                    <td>
                                        <NavLink to={`/invoices/${inv.id}`} title="Open invoice">{inv.id}</NavLink>
                                    </td>
                                    <td>{fmtDate(inv.date)}</td>
                                    <td>{inv.amount.toLocaleString("en-IN")}</td>
                                    <td>
                                        <span className={`pill ${inv.status.toLowerCase()}`}>{inv.status}</span>
                                    </td>
                                    <td className="muted">{inv.method}</td>
                                    <td className="right">
                                        <div className="row-actions">
                                            <NavLink to={`/invoices/${inv.id}`} end>View</NavLink>
                                            <NavLink to={`/invoices/${inv.id}/print`} end>Print</NavLink>
                                            <button onClick={() => openDemoModal("Download PDF", "Downloads are disabled in this demo.")}>
                                                Download
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="foot-nav">
                        <NavLink to="/invoices" end>Go to Invoices</NavLink>
                        <NavLink to="/reports/sales" end>Sales Report</NavLink>
                        <NavLink to="/reports/gst" end>GST Report</NavLink>
                    </div>
                </div>
            </section>

            {/* Custom Confirm/Info Modal */}
            {modal.open && (
                <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className="backdrop" onClick={closeModal} />
                    <div className="box card" role="document">
                        <h3 id="modal-title">{modal.title}</h3>
                        <p className="muted">{modal.body}</p>
                        <div className="modal-actions">
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </Styled.Modal>
            )}
        </Styled.Page>
    );
};

export default SettingsBillingPage;
