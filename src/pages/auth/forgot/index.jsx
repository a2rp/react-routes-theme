import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdEmail, MdLockReset, MdArrowBack, MdHelpOutline, MdInfoOutline, MdOutlineShield, MdClose, MdCheckCircle } from "react-icons/md";
import { Styled } from "./styled";

const DEMO_MODE = true;

function fmtDate(d) {
    // Date -> "Sat Oct 04 2025"
    return d.toDateString();
}
function fmtDateTime(d) {
    // DateTime -> "Sat Oct 04 2025 15:38:20hrs"
    const t = d.toTimeString().split(" ")[0];
    return `${fmtDate(d)} ${t}hrs`;
}

export default function ForgotPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [touched, setTouched] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const now = useMemo(() => new Date(), []);
    const isValidEmail = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email]);

    useEffect(() => {
        // focus email on mount
        const el = document.getElementById("forgot-email-input");
        if (el) {
            try { el.focus({ preventScroll: true }); } catch { el.focus(); }
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();
        setTouched(true);
        if (!isValidEmail) return;

        if (DEMO_MODE) {
            setShowModal(true);
            return;
        }

        // (Live mode) would call API here, then navigate or show success UI.
    };

    return (
        <Styled.Page id="auth-forgot-page">
            <Styled.Banner role="note" aria-live="polite">
                <div className="left">
                    <MdInfoOutline size={18} />
                    <span>Demo preview — password reset is display-only.</span>
                </div>
                <div className="right">
                    <NavLink to="/home" title="Go to home">Home</NavLink>
                    <span className="dot">•</span>
                    <NavLink to="/dashboard" title="See dashboard">Dashboard</NavLink>
                    <span className="dot">•</span>
                    <NavLink to="/help" title="Need help?">Help</NavLink>
                </div>
            </Styled.Banner>

            <Styled.Header>
                <div className="title">
                    <MdLockReset size={26} aria-hidden />
                    <h1>Forgot Password</h1>
                </div>
                <p className="subtitle">
                    Enter your email and we’ll send a reset link. This preview shows how the experience looks in production.
                </p>
                <div className="meta">
                    <span>Last updated: {fmtDateTime(now)}</span>
                    <span>•</span>
                    <span><MdOutlineShield size={16} aria-hidden /> Secure by design</span>
                </div>
            </Styled.Header>

            <Styled.Body>
                <Styled.Card as="form" onSubmit={submit} aria-labelledby="forgot-title">
                    <h2 id="forgot-title">Reset link to your inbox</h2>

                    <div className="row">
                        <label htmlFor="forgot-email-input">Email address</label>
                        <div className={`field ${touched && !isValidEmail ? "error" : ""}`}>
                            <MdEmail aria-hidden className="icon" />
                            <input
                                id="forgot-email-input"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                placeholder="you@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => setTouched(true)}
                                aria-invalid={touched && !isValidEmail ? "true" : "false"}
                                aria-describedby="forgot-email-hint"
                            />
                        </div>
                        <div id="forgot-email-hint" className="hint">
                            We’ll never share your email. Reset link typically arrives in under a minute.
                        </div>
                        {touched && !isValidEmail && (
                            <div role="alert" className="errorText">Please enter a valid email address.</div>
                        )}
                    </div>

                    <div className="actions">
                        <button type="submit" className="primary">
                            Send reset link
                        </button>
                        <Link to="/auth/login" className="ghost">
                            <MdArrowBack size={18} aria-hidden />
                            Back to login
                        </Link>
                    </div>

                    <div className="altRoutes">
                        <div className="col">
                            <p className="label">Continue with</p>
                            <div className="links">
                                <NavLink to="/auth/login" title="Sign in">Sign in</NavLink>
                                <NavLink to="/auth/register" title="Register">Create account</NavLink>
                                <NavLink to="/auth/verify" title="Verify email">Verify email</NavLink>
                                <NavLink to="/auth/reset" title="Reset using token">Have a token?</NavLink>
                            </div>
                        </div>
                        <div className="col">
                            <p className="label">Explore</p>
                            <div className="links">
                                <NavLink to="/home" title="Home">Home</NavLink>
                                <NavLink to="/dashboard" title="KPIs">Dashboard</NavLink>
                                <NavLink to="/reports" title="Reports">Reports</NavLink>
                                <NavLink to="/help" title="Help center">Help Center</NavLink>
                            </div>
                        </div>
                        <div className="col">
                            <p className="label">Support</p>
                            <div className="links">
                                <NavLink to="/faq" title="FAQ">FAQ</NavLink>
                                <NavLink to="/contact" title="Contact">Contact</NavLink>
                                <NavLink to="/feedback" title="Feedback">Feedback</NavLink>
                                <NavLink to="/changelog" title="Changelog">Changelog</NavLink>
                            </div>
                        </div>
                    </div>
                </Styled.Card>

                <Styled.Side>
                    <Styled.InfoCard>
                        <div className="head">
                            <MdOutlineShield size={20} aria-hidden />
                            <h3>Security tips</h3>
                        </div>
                        <ul>
                            <li>Only reset from a device you trust.</li>
                            <li>Never share links or one-time codes.</li>
                            <li>Create unique passwords for every app.</li>
                            <li>Enable two-factor authentication in <NavLink to="/settings/notifications">Settings</NavLink>.</li>
                        </ul>
                    </Styled.InfoCard>

                    <Styled.InfoCard>
                        <div className="head">
                            <MdHelpOutline size={20} aria-hidden />
                            <h3>Need help?</h3>
                        </div>
                        <p>Can’t access your email? Try the options below:</p>
                        <div className="chips">
                            <NavLink to="/contact">Contact Support</NavLink>
                            <NavLink to="/faq">Troubleshooting</NavLink>
                            <NavLink to="/auth/verify">Resend verification</NavLink>
                            <NavLink to="/settings/profile">Update profile</NavLink>
                        </div>
                        <div className="small">
                            Tip: If your workspace uses SSO, ask your admin to reset from <NavLink to="/admin/users">Users</NavLink>.
                        </div>
                    </Styled.InfoCard>

                    <Styled.TinyCard>
                        <div className="row">
                            <span className="k">Today</span>
                            <span className="v">{fmtDate(now)}</span>
                        </div>
                        <div className="row">
                            <span className="k">Local time</span>
                            <span className="v">{fmtDateTime(now).split(" ").slice(3).join(" ")}</span>
                        </div>
                    </Styled.TinyCard>
                </Styled.Side>
            </Styled.Body>

            {/* Demo modal (no browser alert) */}
            {showModal && (
                <Styled.ModalBackdrop role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
                    <Styled.ModalCard>
                        <button className="close" onClick={() => setShowModal(false)} aria-label="Close">
                            <MdClose size={20} />
                        </button>
                        <div className="iconWrap">
                            <MdCheckCircle size={28} aria-hidden />
                        </div>
                        <h3 id="demo-modal-title">Check your inbox</h3>
                        <p>
                            If this were live, we’d send a secure link to <strong>{email}</strong>. Use it within 10 minutes to set a new password.
                        </p>
                        <div className="ctaRow">
                            <Link to="/auth/reset" className="primary">Open Reset Page</Link>
                            <button className="ghost" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                        <div className="footNote">
                            Didn’t receive an email? Check spam, or <NavLink to="/auth/verify">verify your account</NavLink>.
                        </div>
                    </Styled.ModalCard>
                </Styled.ModalBackdrop>
            )}
        </Styled.Page>
    );
}
