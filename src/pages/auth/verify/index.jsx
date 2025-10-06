import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdMarkEmailUnread,
    MdCheckCircle,
    MdSchedule,
    MdContentCopy,
    MdPrint,
    MdOpenInNew,
    MdOutlineMail,
    MdArrowForward,
} from "react-icons/md";

/** Date formatting helpers (required format) */
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => d.toDateString(); // e.g., Sat Oct 04 2025
const fmtTime = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
const fmtDateTime = (d) => `${fmtDate(d)} ${fmtTime(d)}`;

/** Resolve build/commit times from Vite define (if available) */
const getIso = (maybeIso) => {
    try { return typeof maybeIso === "string" ? maybeIso : undefined; } catch { return undefined; }
};
const buildISO = getIso(typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : undefined);
const commitISO = getIso(typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : undefined);

const VerifyPage = () => {
    const { search } = useLocation();
    const params = useMemo(() => new URLSearchParams(search), [search]);

    const emailParam = params.get("email");       // ?email=user@domain.tld (optional)
    const sourceParam = params.get("source");     // optional tracking
    const demoEmail = emailParam || "user@example.com";

    const [copied, setCopied] = useState(false);
    const [printMode, setPrintMode] = useState(false);

    const token = "vfy_DEMO_3f9c7b1c4"; // static, display-only
    const sentAt = useMemo(() => {
        // Prefer last commit time for a deterministic display; fallback: build time; else now.
        const iso = commitISO || buildISO;
        const d = iso ? new Date(iso) : new Date();
        return {
            date: fmtDate(d),
            time: fmtTime(d),
            datetime: fmtDateTime(d),
        };
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(token);
            setCopied(true);
            const t = setTimeout(() => setCopied(false), 1800);
            return () => clearTimeout(t);
        } catch {
            // Silent fail; do nothing (no alerts)
        }
    };

    const handlePrint = useCallback(() => {
        // print only the confirmation block
        setPrintMode(true);
        document.body.classList.add("print-section-mode");
        const cleanup = () => {
            document.body.classList.remove("print-section-mode");
            setPrintMode(false);
            window.removeEventListener("afterprint", cleanup);
        };
        window.addEventListener("afterprint", cleanup);
        setTimeout(() => window.print(), 40);
    }, []);

    // Focus the main heading for better A11y
    useEffect(() => {
        const el = document.getElementById("verify-title");
        if (!el) return;
        const raf = requestAnimationFrame(() => {
            try { el.focus({ preventScroll: true }); } catch { el.focus(); }
        });
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <Styled.Wrap>

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

            {/* Header */}
            <header className="hdr">
                <div className="hdr-left">
                    <h1 id="verify-title" tabIndex={-1}>
                        <span className="icon"><MdMarkEmailUnread size={28} /></span>
                        Verify Your Email
                    </h1>
                    <p className="sub">
                        We’ve sent a verification link to <span className="mail">
                            <MdOutlineMail size={16} /> {demoEmail}
                        </span>. Please click the link to finish signing in.
                    </p>
                    {sourceParam && (
                        <div className="pill">Source: {sourceParam}</div>
                    )}
                </div>
                <div className="hdr-right actions">
                    <button className="btnPrimary" onClick={handlePrint} aria-label="Print confirmation">
                        <MdPrint size={18} /> Print Confirmation
                    </button>
                    <Link to="/auth/login" className="btnGhost" aria-label="Back to Login">
                        Back to Login <MdArrowForward size={18} />
                    </Link>
                </div>
            </header>

            {/* Status Banner (printable area) */}
            <section id="search-print-area" className="banner">
                <div className="banner-left">
                    <div className="status waiting">
                        <span className="dot" />
                        Waiting for verification
                    </div>

                    <div className="sentMeta">
                        <div className="row">
                            <span className="lbl"><MdSchedule size={16} /> Email sent on</span>
                            <span className="val">{sentAt.datetime}</span>
                        </div>
                        <div className="row">
                            <span className="lbl"><MdSchedule size={16} /> Date</span>
                            <span className="val">{sentAt.date}</span>
                        </div>
                        <div className="row">
                            <span className="lbl"><MdSchedule size={16} /> Time</span>
                            <span className="val">{sentAt.time}</span>
                        </div>
                    </div>
                </div>

                <div className="banner-right">
                    <div className="tokenCard">
                        <div className="tokenHead">
                            <span>Verification Token</span>
                            <button className="btnTiny" onClick={handleCopy} aria-live="polite">
                                <MdContentCopy size={16} /> {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                        <code className="token">{token}</code>

                        <div className="metaGrid">
                            <div>
                                <div className="k">Build Time</div>
                                <div className="v">{buildISO ? fmtDateTime(new Date(buildISO)) : "—"}</div>
                            </div>
                            <div>
                                <div className="k">Last Commit</div>
                                <div className="v">{commitISO ? fmtDateTime(new Date(commitISO)) : "—"}</div>
                            </div>
                        </div>
                    </div>

                    <div className="ctaRow">
                        <button className="btnDisabled" aria-disabled="true" title="Demo only">
                            Resend Email
                        </button>
                        <Link to="/settings/profile" className="btnGhost">Change Email</Link>
                        <a
                            href="https://mail.google.com"
                            target="_blank" rel="noreferrer"
                            className="btnGhost"
                            title="Open your inbox in a new tab"
                        >
                            Open Inbox <MdOpenInNew size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Steps / Timeline */}
            <section className="steps">
                <div className="step">
                    <div className="badge done"><MdCheckCircle size={18} /></div>
                    <div className="body">
                        <div className="title">We sent an email to <strong>{demoEmail}</strong></div>
                        <div className="desc">If it isn’t in your inbox, check Promotions/Spam.</div>
                    </div>
                </div>
                <div className="step">
                    <div className="badge pulse"><MdSchedule size={18} /></div>
                    <div className="body">
                        <div className="title">Click the verification link</div>
                        <div className="desc">The link opens this app and marks your email as verified.</div>
                    </div>
                </div>
                <div className="step">
                    <div className="badge idle"><MdCheckCircle size={18} /></div>
                    <div className="body">
                        <div className="title">You’re all set</div>
                        <div className="desc">Once verified, you can access everything seamlessly.</div>
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="gridNav">
                <div className="card">
                    <h3>Next Actions</h3>
                    <div className="links">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/customers">Customers</NavLink>
                        <NavLink to="/orders">Orders</NavLink>
                        <NavLink to="/invoices">Invoices</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/inventory">Inventory</NavLink>
                        <NavLink to="/reports">Reports</NavLink>
                        <NavLink to="/settings/profile">Profile</NavLink>
                    </div>
                </div>

                <div className="card">
                    <h3>Account & Security</h3>
                    <div className="links">
                        <NavLink to="/settings/appearance">Appearance</NavLink>
                        <NavLink to="/settings/notifications">Notifications</NavLink>
                        <NavLink to="/settings/tokens">API Tokens</NavLink>
                        <NavLink to="/settings/print-templates">Print Templates</NavLink>
                        <NavLink to="/settings/backups">Backups</NavLink>
                        <NavLink to="/settings/webhooks">Webhooks</NavLink>
                    </div>
                </div>

                <div className="card">
                    <h3>Help & Docs</h3>
                    <div className="links">
                        <NavLink to="/help">Help Center</NavLink>
                        <NavLink to="/faq">FAQ</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/feedback">Feedback</NavLink>
                        <NavLink to="/changelog">Changelog</NavLink>
                        <NavLink to="/roadmap">Roadmap</NavLink>
                    </div>
                </div>

                <div className="card">
                    <h3>Troubleshooting</h3>
                    <ul className="list">
                        <li>Confirm the address is correct on your <Link to="/settings/profile">Profile</Link>.</li>
                        <li>Wait a minute; some providers delay transactional emails.</li>
                        <li>Check Spam/Promotions. Mark as “Not spam”.</li>
                        <li>Try <span className="mono">Copy</span> and paste the token if you’re testing locally.</li>
                        <li>Still stuck? <Link to="/contact">Contact support</Link>.</li>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <footer className="foot">
                <div className="left">
                    <span className="hint">Tip:</span> You can return to <Link to="/auth/login">Login</Link> anytime.
                </div>
                <div className="right">
                    <Link to="/terms">Terms</Link>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/help">Help</Link>
                </div>
            </footer>
        </Styled.Wrap>
    );
};

export default VerifyPage;
