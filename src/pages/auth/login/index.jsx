/* global __APP_BUILD_ISO__, __APP_COMMIT_ISO__ */
import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Styled as S } from "./styled";
import { MdVisibility, MdVisibilityOff, MdInfoOutline, MdSearch } from "react-icons/md";
import { FaGoogle, FaGithub, FaMicrosoft, FaApple } from "react-icons/fa";

const DEMO_MODE = true;

function fmtDate(iso) {
    const d = iso ? new Date(iso) : new Date();
    return d.toDateString(); // e.g., Sat Oct 04 2025
}
function fmtDateTime(iso) {
    const d = iso ? new Date(iso) : new Date();
    const date = d.toDateString(); // Sat Oct 04 2025
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${date} ${hh}:${mm}:${ss}hrs`;
}
function fmtTime(iso) {
    const d = iso ? new Date(iso) : new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
}

export default function Login() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [showPwd, setShowPwd] = useState(false);
    const [capsOn, setCapsOn] = useState(false);
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);

    const buildISO = (typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString());
    const commitISO = (typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString());

    const fromPath = state?.from?.pathname || "/dashboard";

    useEffect(() => {
        // autofocus email on mount
        const el = document.getElementById("login-email");
        if (el) {
            requestAnimationFrame(() => {
                try { el.focus({ preventScroll: true }); } catch { el.focus(); }
            });
        }
    }, []);

    function onSubmit(e) {
        e.preventDefault();
        if (DEMO_MODE) {
            setShowDemoModal(true);
            return;
        }
        // non-demo path (kept for future): fake async then navigate
        setLoadingBtn(true);
        setTimeout(() => {
            setLoadingBtn(false);
            navigate(fromPath, { replace: true });
        }, 700);
    }

    function onSSO(provider) {
        if (DEMO_MODE) {
            setShowDemoModal(true);
            return;
        }
        // future: provider flow
    }

    function onKey(e) {
        if (e.getModifierState && e.getModifierState("CapsLock")) {
            setCapsOn(true);
        } else {
            setCapsOn(false);
        }
    }

    const ssoButtons = useMemo(() => ([
        { key: "google", label: "Continue with Google", Icon: FaGoogle },
        { key: "github", label: "Continue with GitHub", Icon: FaGithub },
        { key: "microsoft", label: "Continue with Microsoft", Icon: FaMicrosoft },
        { key: "apple", label: "Continue with Apple", Icon: FaApple },
    ]), []);

    return (
        <S.Wrap id="search-print-area">
            {/* Left / Brand */}
            <S.BrandPane>
                <div className="brand">
                    <div className="logo" aria-hidden="true">AR</div>
                    <div className="name">Ashish Ranjan</div>
                </div>

                <div className="headline">
                    <h1>Welcome back</h1>
                    <p>Access the unified ERP demo—fast navigation, clean typography, and consistent theming across every module.</p>
                </div>

                <div className="featureGrid">
                    <div className="feature card">
                        <h3>Deep Links</h3>
                        <p>Jump straight to entity views with stable URLs for lists, details, and print-friendly pages.</p>
                        <div className="links">
                            <NavLink to="/customers">Customers</NavLink>
                            <NavLink to="/orders">Orders</NavLink>
                            <NavLink to="/products">Products</NavLink>
                            <NavLink to="/invoices">Invoices</NavLink>
                        </div>
                    </div>
                    <div className="feature card">
                        <h3>Display-only Demo</h3>
                        <p>Buttons that would mutate data are gated. Explore UI, layouts, and flows without any side effects.</p>
                        <div className="links">
                            <NavLink to="/reports">Reports</NavLink>
                            <NavLink to="/finance">Finance</NavLink>
                            <NavLink to="/inventory">Inventory</NavLink>
                        </div>
                    </div>
                    <div className="feature card">
                        <h3>Consistent UX</h3>
                        <p>Shared tokens, cards, shadows, and focus states ensure a cohesive experience across the app.</p>
                        <div className="links">
                            <NavLink to="/examples/theme">Theme Tokens</NavLink>
                            <NavLink to="/examples/table">Tables</NavLink>
                            <NavLink to="/examples/print">Print Demo</NavLink>
                        </div>
                    </div>
                </div>

                <div className="quick">
                    <div className="searchHint">
                        <MdSearch size={18} aria-hidden="true" />
                        <span>Tip: Press <b>Ctrl + K</b> to search nav</span>
                    </div>

                    <div className="quickLinks">
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/reports/sales">Sales Report</NavLink>
                        <NavLink to="/reports/inventory">Inventory Report</NavLink>
                        <NavLink to="/admin/users">Admin &gt; Users</NavLink>
                        <NavLink to="/settings/appearance">Settings &gt; Appearance</NavLink>
                        <NavLink to="/help">Help Center</NavLink>
                    </div>
                </div>

                <div className="buildInfo card">
                    <div className="row">
                        <span className="k">Build</span>
                        <span className="v">{fmtDateTime(buildISO)}</span>
                    </div>
                    <div className="row">
                        <span className="k">Last Commit</span>
                        <span className="v">{fmtDateTime(commitISO)}</span>
                    </div>
                    <div className="row">
                        <span className="k">Local Time</span>
                        <span className="v">{fmtTime()}</span>
                    </div>
                </div>
            </S.BrandPane>

            {/* Right / Form */}
            <S.FormPane>
                <S.Card role="region" aria-label="Sign in">
                    <div className="cardHeader">
                        <h2>Sign in</h2>
                        <p>Use demo credentials shown below or continue with an identity provider.</p>
                    </div>

                    <form onSubmit={onSubmit} className="form" autoComplete="on">
                        <div className="row">
                            <label htmlFor="login-email">Email</label>
                            <input
                                id="login-email"
                                type="email"
                                inputMode="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyUp={onKey}
                                onKeyDown={onKey}
                                required
                            />
                        </div>

                        <div className="row">
                            <label htmlFor="login-password">Password</label>
                            <div className="pwdWrap">
                                <input
                                    id="login-password"
                                    type={showPwd ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={pwd}
                                    onChange={(e) => setPwd(e.target.value)}
                                    onKeyUp={onKey}
                                    onKeyDown={onKey}
                                    required
                                />
                                <button type="button" className="iconBtn" aria-label={showPwd ? "Hide password" : "Show password"} onClick={() => setShowPwd(v => !v)}>
                                    {showPwd ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                                </button>
                            </div>
                            {capsOn && (
                                <div className="hint">
                                    <MdInfoOutline size={16} aria-hidden="true" />
                                    <span>Caps Lock is ON</span>
                                </div>
                            )}
                        </div>

                        <div className="row rowInline">
                            <label className="checkbox">
                                <input type="checkbox" /> <span>Remember me</span>
                            </label>
                            <NavLink to="/auth/forgot" className="muted">Forgot password?</NavLink>
                        </div>

                        <div className="actions">
                            <button type="submit" className="primary" disabled={loadingBtn}>
                                {DEMO_MODE ? "Sign in (Demo)" : "Sign in"}
                            </button>
                            <NavLink to="/auth/register" className="ghost">Create account</NavLink>
                        </div>
                    </form>

                    <div className="divLine" role="separator" aria-label="or continue with">
                        <span>or continue with</span>
                    </div>

                    <div className="ssoGrid">
                        {ssoButtons.map(({ key, label, Icon }) => (
                            <button key={key} className="ssoBtn" type="button" onClick={() => onSSO(key)}>
                                <Icon size={18} aria-hidden="true" />
                                <span>{label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="footerLinks">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/faq">FAQ</NavLink>
                        <NavLink to="/changelog">Changelog</NavLink>
                        <NavLink to="/roadmap">Roadmap</NavLink>
                        <NavLink to="/settings">Settings</NavLink>
                    </div>
                </S.Card>

                <S.MetaRow>
                    <div className="muted">By continuing, you agree to our <NavLink to="/settings/print-templates">Terms</NavLink> &amp; <NavLink to="/settings/privacy">Privacy</NavLink>.</div>
                    <div className="muted">Need access? Visit <NavLink to="/admin/users">Admin &gt; Users</NavLink> or <NavLink to="/help">Help Center</NavLink>.</div>
                </S.MetaRow>
            </S.FormPane>

            {/* Demo mode modal */}
            {showDemoModal && (
                <S.Modal onClick={() => setShowDemoModal(false)} role="dialog" aria-modal="true" aria-label="Demo mode">
                    <div className="sheet" onClick={(e) => e.stopPropagation()}>
                        <div className="head">
                            <h3>Demo Mode</h3>
                            <p>Authentication is disabled in this demo. Explore the app using navigation links below.</p>
                        </div>
                        <div className="gridLinks">
                            <NavLink to="/dashboard" onClick={() => setShowDemoModal(false)}>Open Dashboard</NavLink>
                            <NavLink to="/customers" onClick={() => setShowDemoModal(false)}>Browse Customers</NavLink>
                            <NavLink to="/orders" onClick={() => setShowDemoModal(false)}>View Orders</NavLink>
                            <NavLink to="/products" onClick={() => setShowDemoModal(false)}>Products</NavLink>
                            <NavLink to="/invoices" onClick={() => setShowDemoModal(false)}>Invoices</NavLink>
                            <NavLink to="/reports" onClick={() => setShowDemoModal(false)}>Reports</NavLink>
                            <NavLink to="/inventory" onClick={() => setShowDemoModal(false)}>Inventory</NavLink>
                            <NavLink to="/admin/users" onClick={() => setShowDemoModal(false)}>Admin &gt; Users</NavLink>
                        </div>
                        <div className="actions">
                            <button className="primary" onClick={() => { setShowDemoModal(false); navigate("/dashboard"); }}>Go to Dashboard</button>
                            <button className="ghost" onClick={() => setShowDemoModal(false)}>Close</button>
                        </div>
                    </div>
                </S.Modal>
            )}

            {/* Print rules (section-only) */}
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
        </S.Wrap>
    );
}
