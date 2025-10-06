import { useEffect, useMemo, useState, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdLockReset, MdEmail, MdPhoneIphone, MdInfoOutline, MdOutlineShield, MdPrint, MdArrowForward, MdClose } from "react-icons/md";
import { S } from "./styled";

/**
 * Date formatting helpers (required formats)
 */
function pad2(n) { return n < 10 ? `0${n}` : `${n}`; }
function fmtDate(d) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[d.getDay()]} ${mons[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
}
function fmtTime(d) {
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
}
function fmtDateTime(d) {
    return `${fmtDate(d)} ${fmtTime(d)}`;
}

const buildISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || new Date().toISOString();
const commitISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || new Date().toISOString();

export default function ResetPage() {
    const navigate = useNavigate();

    // UI state (display-only)
    const [mode, setMode] = useState("email"); // 'email' | 'otp'
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    // modal state (custom, no browser alert)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalKind, setModalKind] = useState("info"); // 'info' | 'success'
    const [modalTitle, setModalTitle] = useState("");
    const [modalBody, setModalBody] = useState("");

    const now = useMemo(() => new Date(), []);
    const buildDate = useMemo(() => new Date(buildISO), []);
    const commitDate = useMemo(() => new Date(commitISO), []);

    // focus first field for better UX
    useEffect(() => {
        const el = document.querySelector("#reset-email, #reset-phone");
        if (el) {
            try { el.focus({ preventScroll: true }); } catch { el.focus(); }
        }
    }, [mode]);

    // print helper (print only the target section)
    const handlePrint = useCallback(() => {
        const body = document.body;
        body.classList.add("print-section-mode");
        window.print();
        const done = () => {
            body.classList.remove("print-section-mode");
            window.removeEventListener("afterprint", done);
        };
        window.addEventListener("afterprint", done);
    }, []);

    const openDemoModal = useCallback((type) => {
        setModalKind(type === "success" ? "success" : "info");
        setModalTitle(type === "success" ? "Password reset link dispatched" : "Demo mode");
        setModalBody(
            type === "success"
                ? "For the demo, this simulates sending a secure reset link. In production, the link would expire and enforce device checks."
                : "This is a display-only build. Actions that modify data are disabled."
        );
        setModalOpen(true);
    }, []);

    const onSendLink = (e) => {
        e.preventDefault();
        openDemoModal("success");
    };
    const onVerifyAndSet = (e) => {
        e.preventDefault();
        openDemoModal("info");
    };

    const closeModal = () => setModalOpen(false);

    return (
        <S.Wrap>
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

            {/* Breadcrumbs / header */}
            <div className="pageHead">
                <div className="crumbs">
                    <NavLink to="/home" className="crumb">Home</NavLink>
                    <span className="sep">/</span>
                    <NavLink to="/auth/login" className="crumb">Auth</NavLink>
                    <span className="sep">/</span>
                    <span className="here">Reset</span>
                </div>

                <div className="actions">
                    <button className="btn ghost" onClick={() => navigate("/auth/login")} title="Back to login">
                        Back to Login <MdArrowForward size={18} />
                    </button>
                    <button className="btn" onClick={handlePrint} title="Print this section">
                        <MdPrint size={18} /> Print
                    </button>
                </div>
            </div>

            <div className="grid">
                {/* LEFT: reset area (print target) */}
                <section id="search-print-area" className="card resetCard">
                    <header className="cardHead">
                        <div className="title">
                            <MdLockReset size={22} />
                            <h1>Reset your password</h1>
                        </div>
                        <p className="muted">Pick a recovery method. This demo doesn’t perform any real action.</p>
                    </header>

                    {/* method switch */}
                    <div className="switcher" role="tablist" aria-label="Reset method">
                        <button
                            role="tab"
                            aria-selected={mode === "email"}
                            className={mode === "email" ? "seg active" : "seg"}
                            onClick={() => setMode("email")}
                            title="Send email reset link"
                        >
                            <MdEmail size={18} /> Email Link
                        </button>
                        <button
                            role="tab"
                            aria-selected={mode === "otp"}
                            className={mode === "otp" ? "seg active" : "seg"}
                            onClick={() => setMode("otp")}
                            title="Verify OTP then set password"
                        >
                            <MdPhoneIphone size={18} /> OTP + New Password
                        </button>
                    </div>

                    {/* forms */}
                    {mode === "email" ? (
                        <form className="form" onSubmit={onSendLink} aria-labelledby="h-email">
                            <h2 id="h-email">Reset via secure email link</h2>

                            <div className="field">
                                <label htmlFor="reset-email">Email</label>
                                <input
                                    id="reset-email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="hint"><MdInfoOutline /> We’ll send a one-time link to this address.</div>
                            </div>

                            <div className="ctaRow">
                                <button className="btn primary" type="submit" title="Simulate sending reset link">
                                    Send Reset Link
                                </button>
                                <Link className="link" to="/auth/login">Back to login</Link>
                                <Link className="link" to="/auth/register">Create account</Link>
                                <Link className="link" to="/auth/verify">Verify email</Link>
                            </div>
                        </form>
                    ) : (
                        <form className="form" onSubmit={onVerifyAndSet} aria-labelledby="h-otp">
                            <h2 id="h-otp">Verify OTP then set new password</h2>

                            <div className="row2">
                                <div className="field">
                                    <label htmlFor="reset-phone">Phone</label>
                                    <input
                                        id="reset-phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="reset-otp">OTP</label>
                                    <input
                                        id="reset-otp"
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="6-digit code"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="row2">
                                <div className="field">
                                    <label htmlFor="reset-pass">New password</label>
                                    <input
                                        id="reset-pass"
                                        type="password"
                                        placeholder="********"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="reset-confirm">Confirm password</label>
                                    <input
                                        id="reset-confirm"
                                        type="password"
                                        placeholder="********"
                                        value={confirm}
                                        onChange={(e) => setConfirm(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="hint"><MdOutlineShield /> For demo, OTP check and strength policy are simulated.</div>

                            <div className="ctaRow">
                                <button className="btn primary" type="submit" title="Demo only">
                                    Verify &amp; Set Password
                                </button>
                                <Link className="link" to="/auth/login">Back to login</Link>
                                <Link className="link" to="/auth/forgot">Forgot password</Link>
                            </div>
                        </form>
                    )}

                    {/* quick pointers */}
                    <div className="metaGrid">
                        <div className="meta">
                            <h3>When can I try again?</h3>
                            <p>Anytime. This is a display build, so no throttling is enforced.</p>
                            <ul>
                                <li>Use <code>you@example.com</code> in demos</li>
                                <li>OTP field accepts any digits in this demo</li>
                            </ul>
                        </div>
                        <div className="meta">
                            <h3>Password rules (display)</h3>
                            <ul>
                                <li>Min 8 characters</li>
                                <li>Mixed case &amp; a number</li>
                                <li>Special character recommended</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* RIGHT: help, links, build meta */}
                <aside className="side">
                    <section className="card">
                        <header className="cardHead">
                            <div className="title">
                                <MdOutlineShield size={20} />
                                <h2>Security tips</h2>
                            </div>
                        </header>
                        <ul className="ticks">
                            <li>Never share one-time codes.</li>
                            <li>Use a unique password for each app.</li>
                            <li>Enable 2-factor where possible.</li>
                            <li>Review active sessions regularly.</li>
                        </ul>
                        <div className="linksCols">
                            <Link to="/help">Help Center</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/feedback">Feedback</Link>
                            <Link to="/changelog">Changelog</Link>
                            <Link to="/roadmap">Roadmap</Link>
                        </div>
                    </section>

                    <section className="card">
                        <header className="cardHead">
                            <div className="title">
                                <MdInfoOutline size={20} />
                                <h2>Explore the demo</h2>
                            </div>
                        </header>
                        <div className="quickLinks">
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/customers">Customers</Link>
                            <Link to="/orders">Orders</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/inventory">Inventory</Link>
                            <Link to="/invoices">Invoices</Link>
                            <Link to="/receipts">Receipts</Link>
                            <Link to="/reports">Reports</Link>
                            <Link to="/admin/users">Admin &rsaquo; Users</Link>
                            <Link to="/settings">Settings</Link>
                            <Link to="/tools/theme-tokens">Theme Tokens</Link>
                            <Link to="/examples">Examples</Link>
                        </div>
                    </section>

                    <section className="card">
                        <header className="cardHead">
                            <div className="title">
                                <MdInfoOutline size={20} />
                                <h2>Build metadata</h2>
                            </div>
                        </header>
                        <div className="build">
                            <div><span>Now</span><strong>{fmtDateTime(now)}</strong></div>
                            <div><span>Built</span><strong>{fmtDateTime(buildDate)}</strong></div>
                            <div><span>Last commit</span><strong>{fmtDateTime(commitDate)}</strong></div>
                        </div>
                    </section>
                </aside>
            </div>

            {/* Custom modal (no browser alert) */}
            {modalOpen && (
                <div className="modalRoot" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className="backdrop" onClick={closeModal} />
                    <div className="modalCard">
                        <header className="modalHead">
                            <h3 id="modal-title">{modalTitle}</h3>
                            <button className="iconBtn" onClick={closeModal} aria-label="Close">
                                <MdClose size={20} />
                            </button>
                        </header>
                        <div className="modalBody">
                            <p>{modalBody}</p>
                        </div>
                        <footer className="modalFoot">
                            <Link className="btn ghost" to="/auth/login">Go to Login</Link>
                            <button className="btn" onClick={closeModal}>Close</button>
                        </footer>
                    </div>
                </div>
            )}
        </S.Wrap>
    );
}
