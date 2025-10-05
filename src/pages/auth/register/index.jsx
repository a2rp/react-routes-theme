/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Styled } from "./styled";

// tiny date helpers to match the exact format you want
const pad2 = (n) => String(n).padStart(2, "0");
const fmtDate = (iso) => {
    try { return new Date(iso).toDateString(); } catch { return new Date().toDateString(); }
};
const fmtDateTime = (iso) => {
    const d = (() => { try { return new Date(iso); } catch { return new Date(); } })();
    const time = `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
    return `${d.toDateString()} ${time}`;
};

export default function RegisterPage() {
    const [showDemoModal, setShowDemoModal] = useState(false);

    const buildInfo = useMemo(() => {
        const build = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
        const commit = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : build;
        return {
            buildDate: fmtDateTime(build),
            commitDate: fmtDateTime(commit),
        };
    }, []);

    const onCreateAccount = (e) => {
        e.preventDefault();
        setShowDemoModal(true);
    };

    const handlePrint = () => {
        try {
            document.body.classList.add("print-section-mode");
            setTimeout(() => window.print(), 0);
            const cleanup = () => document.body.classList.remove("print-section-mode");
            window.addEventListener("afterprint", cleanup, { once: true });
        } catch { }
    };

    return (
        <Styled.Page>
            {/* print CSS for this page */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }

          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <header className="topbar">
                <div className="crumbs">
                    <Link to="/home" className="crumb">Home</Link>
                    <span className="sep">/</span>
                    <Link to="/auth/login" className="crumb">Auth</Link>
                    <span className="sep">/</span>
                    <span className="current">Register</span>
                </div>

                <div className="build-meta">
                    <span title="Build timestamp">Build: {buildInfo.buildDate}</span>
                    <span className="dot">•</span>
                    <span title="Last commit timestamp">Commit: {buildInfo.commitDate}</span>
                </div>
            </header>

            <section className="hero">
                <h1>Create your account</h1>
                <p className="sub">
                    One account for everything — dashboard, customers, orders, invoices, reports, and more.
                </p>
                <div className="quick-links">
                    <Link to="/dashboard" className="chip" title="Go to Dashboard">Dashboard</Link>
                    <Link to="/customers" className="chip" title="Browse Customers">Customers</Link>
                    <Link to="/orders" className="chip" title="View Orders">Orders</Link>
                    <Link to="/products" className="chip" title="See Products">Products</Link>
                    <Link to="/reports" className="chip" title="Open Reports">Reports</Link>
                    <Link to="/help" className="chip" title="Help Center">Help</Link>
                </div>
            </section>

            <section className="content">
                {/* Left: registration form */}
                <div className="formCard card">
                    <div className="formHeader">
                        <h2>Sign up</h2>
                        <span className="badge demo">Demo</span>
                    </div>

                    <form onSubmit={onCreateAccount} noValidate>
                        <div className="grid">
                            <div className="field">
                                <label>Full Name</label>
                                <input type="text" placeholder="e.g. Ashish Ranjan" />
                            </div>
                            <div className="field">
                                <label>Work Email</label>
                                <input type="email" placeholder="e.g. ashish@example.com" />
                            </div>
                            <div className="field">
                                <label>Mobile</label>
                                <input type="tel" placeholder="+91 98xxxxxxx" />
                            </div>
                            <div className="field">
                                <label>Company</label>
                                <input type="text" placeholder="Company / Clinic Name" />
                            </div>
                            <div className="field">
                                <label>Country</label>
                                <select defaultValue="">
                                    <option value="" disabled>Choose country</option>
                                    <option>India</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>Singapore</option>
                                    <option>Australia</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>Role</label>
                                <select defaultValue="">
                                    <option value="" disabled>Select role</option>
                                    <option>Owner</option>
                                    <option>Admin</option>
                                    <option>Manager</option>
                                    <option>Staff</option>
                                </select>
                            </div>

                            <div className="field">
                                <label>Password</label>
                                <input type="password" placeholder="Create password" />
                                <div className="hint">8+ characters, mixed case, a number, a symbol.</div>
                            </div>
                            <div className="field">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Re-enter password" />
                            </div>
                        </div>

                        <div className="agreements">
                            <label className="ck">
                                <input type="checkbox" /> <span>I agree to the{" "}</span>
                                <Link to="/settings/print-templates" className="link">Terms</Link> and{" "}
                                <Link to="/settings/privacy" className="link">Privacy</Link>.
                            </label>
                            <label className="ck">
                                <input type="checkbox" /> Send me product updates.
                            </label>
                        </div>

                        <div className="actions">
                            <button type="submit" className="btnPrimary" title="Display-only demo — action disabled">
                                Create Account
                            </button>
                            <button type="button" className="btnGhost" onClick={handlePrint} title="Print the summary section">
                                Print Summary
                            </button>
                            <div className="grow" />
                            <Link to="/auth/login" className="link">Already have an account? Log in</Link>
                        </div>

                        <div className="ssoRow">
                            <button type="button" className="ssoBtn" disabled title="Disabled in demo">Continue with Google</button>
                            <button type="button" className="ssoBtn" disabled title="Disabled in demo">Continue with Microsoft</button>
                            <button type="button" className="ssoBtn" disabled title="Disabled in demo">Continue with GitHub</button>
                        </div>
                    </form>

                    <div id="search-print-area" className="printBlock">
                        <h3>Registration Summary (Preview)</h3>
                        <p>
                            This is a display-only preview of the registration details for printing.
                            For full onboarding, see{" "}
                            <Link to="/help" className="link">Help Center</Link> and{" "}
                            <Link to="/roadmap" className="link">Roadmap</Link>.
                        </p>
                        <ul className="bullets">
                            <li>Account scope: multi-warehouse, multi-user.</li>
                            <li>Core modules: Customers, Orders, Products, Inventory, Billing, Finance.</li>
                            <li>Optional modules: Manufacturing, Healthcare, Labs, Imaging.</li>
                        </ul>
                        <div className="meta">
                            <div><span className="k">Printed on:</span> {fmtDateTime(new Date().toISOString())}</div>
                            <div><span className="k">Build:</span> {buildInfo.buildDate}</div>
                            <div><span className="k">Commit:</span> {buildInfo.commitDate}</div>
                        </div>
                    </div>
                </div>

                {/* Right: shortcuts & highlights */}
                <aside className="sideCard card">
                    <div className="section">
                        <h3>Jump to a module</h3>
                        <div className="linksGrid">
                            <Link to="/customers" className="pill">Customers</Link>
                            <Link to="/orders" className="pill">Orders</Link>
                            <Link to="/products" className="pill">Products</Link>
                            <Link to="/inventory" className="pill">Inventory</Link>
                            <Link to="/invoices" className="pill">Invoices</Link>
                            <Link to="/receipts" className="pill">Receipts</Link>
                            <Link to="/reports" className="pill">Reports</Link>
                            <Link to="/finance" className="pill">Finance</Link>
                            <Link to="/shipments" className="pill">Shipments</Link>
                            <Link to="/vendors" className="pill">Vendors</Link>
                            <Link to="/purchase-orders" className="pill">Purchase Orders</Link>
                            <Link to="/medicines" className="pill">Medicines</Link>
                            <Link to="/manufacturing" className="pill">Manufacturing</Link>
                            <Link to="/patients" className="pill">Patients</Link>
                            <Link to="/appointments" className="pill">Appointments</Link>
                            <Link to="/prescriptions" className="pill">Prescriptions</Link>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Useful account links</h3>
                        <div className="stack">
                            <Link to="/auth/forgot" className="row">Forgot password</Link>
                            <Link to="/auth/reset" className="row">Reset with token</Link>
                            <Link to="/auth/verify" className="row">Verify email</Link>
                            <Link to="/settings/profile" className="row">Profile settings</Link>
                            <Link to="/settings/appearance" className="row">Appearance</Link>
                            <Link to="/settings/notifications" className="row">Notifications</Link>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Documentation</h3>
                        <div className="stack">
                            <Link to="/help" className="row">Help Center</Link>
                            <Link to="/faq" className="row">FAQ</Link>
                            <Link to="/contact" className="row">Contact</Link>
                            <Link to="/feedback" className="row">Send feedback</Link>
                            <Link to="/changelog" className="row">Changelog</Link>
                            <Link to="/roadmap" className="row">Roadmap</Link>
                        </div>
                    </div>

                    <div className="section muted">
                        <div className="kv">
                            <span className="k">Today</span>
                            <span className="v">{fmtDate(new Date().toISOString())}</span>
                        </div>
                        <div className="kv">
                            <span className="k">Time now</span>
                            <span className="v">{(() => {
                                const d = new Date(); return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
                            })()}</span>
                        </div>
                    </div>
                </aside>
            </section>

            {/* demo modal (custom, no browser alert) */}
            {showDemoModal && (
                <div className="modalOverlay" role="dialog" aria-modal="true" aria-labelledby="demoTitle">
                    <div className="modal card">
                        <div className="modalHeader">
                            <h3 id="demoTitle">Registration is disabled in this demo</h3>
                        </div>
                        <div className="modalBody">
                            <p>
                                This is a display-only theme. Account creation isn’t available here.
                                Explore the modules using the links below.
                            </p>
                            <div className="modalLinks">
                                <Link to="/dashboard" className="pill">Dashboard</Link>
                                <Link to="/customers" className="pill">Customers</Link>
                                <Link to="/orders" className="pill">Orders</Link>
                                <Link to="/reports" className="pill">Reports</Link>
                                <Link to="/auth/login" className="pill">Login</Link>
                            </div>
                        </div>
                        <div className="modalFooter">
                            <button className="btnPrimary" onClick={() => setShowDemoModal(false)}>Close</button>
                            <Link to="/auth/login" className="btnGhost">Go to Login</Link>
                        </div>
                    </div>
                </div>
            )}
        </Styled.Page>
    );
}
