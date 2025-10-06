import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdDarkMode,
    MdLightMode,
    MdComputer,
    MdOutlineRestartAlt,
    MdOpenInNew,
    MdPalette,
    MdTune,
    MdBorderStyle,
    MdBlurOn,
    MdViewSidebar,
    MdPrint,
    MdLink,
} from "react-icons/md";

/* --- tiny date utils --- */
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad2 = (n) => String(n).padStart(2, "0");
const fmtDate = (d) =>
    `${days[d.getDay()]} ${months[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
const fmtTime = (d) =>
    `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
const fmtDateTime = (d) => `${fmtDate(d)} ${fmtTime(d)}`;

const buildISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || new Date().toISOString();
const commitISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || new Date().toISOString();

const buildAt = new Date(buildISO);
const commitAt = new Date(commitISO);

const BASE = (import.meta?.env?.BASE_URL || "/"); // vite base: "/react-routes-theme/"
const SELF_DEEP_LINK = `${window.location.origin}${BASE}settings/appearance`;

const DemoConfirmModal = ({ open, title, note, onClose }) => {
    if (!open) return null;
    return (
        <Styled.ModalBackdrop onClick={onClose}>
            <Styled.ModalCard onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
                <header>
                    <h3>{title}</h3>
                </header>
                <section>
                    <p>{note}</p>
                </section>
                <footer>
                    <button onClick={onClose}>Close</button>
                    <button disabled title="Demo only">Confirm</button>
                </footer>
            </Styled.ModalCard>
        </Styled.ModalBackdrop>
    );
};

export default function SettingsAppearancePage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const links = useMemo(() => ([
        { to: "/settings", label: "Settings Home" },
        { to: "/settings/profile", label: "Profile" },
        { to: "/settings/appearance", label: "Appearance (You are here)" },
        { to: "/settings/print-templates", label: "Print Templates" },
        { to: "/settings/notifications", label: "Notifications" },
        { to: "/settings/warehouses", label: "Warehouses" },
        { to: "/settings/locations", label: "Locations" },
        { to: "/settings/tax", label: "Tax" },
        { to: "/settings/units", label: "Units of Measure" },
        { to: "/settings/currencies", label: "Currencies" },
        { to: "/settings/numbering", label: "Document Numbering" },
        { to: "/tools/theme-tokens", label: "Theme Tokens" },
        { to: "/examples/theme", label: "Theme Demo" },
        { to: "/dashboard", label: "Dashboard" },
        { to: "/home", label: "Home" },
        { to: "/reports", label: "Reports" },
    ]), []);

    const handlePrintPreview = () => {
        const cls = "print-section-mode";
        document.body.classList.add(cls);
        // give layout a tick
        setTimeout(() => {
            window.print();
            // cleanup
            setTimeout(() => document.body.classList.remove(cls), 50);
        }, 50);
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(SELF_DEEP_LINK);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    return (
        <Styled.Wrap>
            {/* print-only rules (scoped) */}
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

            {/* header / breadcrumbs */}
            <Styled.HeaderBar>
                <div className="left">
                    <div className="crumbs">
                        <NavLink to="/settings">Settings</NavLink>
                        <span>›</span>
                        <strong>Appearance</strong>
                    </div>
                    <div className="meta">
                        <span>Build: {fmtDateTime(buildAt)}</span>
                        <span className="dot">•</span>
                        <span>Last Commit: {fmtDateTime(commitAt)}</span>
                    </div>
                </div>

                <div className="actions">
                    <button onClick={handleCopyLink} title="Copy deep link">
                        <MdLink size={18} />
                        {copied ? "Copied" : "Copy Link"}
                    </button>
                    <Link to="/tools/theme-tokens" className="ghost" title="Open Theme Tokens">
                        <MdOpenInNew size={18} />
                        Theme Tokens
                    </Link>
                    <button className="danger" onClick={() => setModalOpen(true)} title="Reset to defaults (demo)">
                        <MdOutlineRestartAlt size={18} />
                        Reset Defaults
                    </button>
                </div>
            </Styled.HeaderBar>

            {/* main content printable area */}
            <Styled.Main id="search-print-area">
                {/* Left rail: controls (display only, disabled) */}
                <section className="panel">
                    <h3><MdTune /> Appearance Controls</h3>

                    <div className="group">
                        <div className="groupHead"><MdComputer /> Theme Mode</div>
                        <div className="options">
                            <label title="Demo only">
                                <input type="radio" name="mode" disabled />
                                <span className="icon"><MdComputer /></span>
                                System
                            </label>
                            <label title="Demo only">
                                <input type="radio" name="mode" disabled />
                                <span className="icon"><MdLightMode /></span>
                                Light
                            </label>
                            <label title="Demo only">
                                <input type="radio" name="mode" disabled />
                                <span className="icon"><MdDarkMode /></span>
                                Dark
                            </label>
                        </div>
                    </div>

                    <div className="group">
                        <div className="groupHead"><MdPalette /> Accent & Tokens</div>
                        <div className="swatches">
                            <span className="sw" style={{ background: "var(--accent)" }} title="--accent" />
                            <span className="sw" style={{ background: "color-mix(in oklab, var(--accent) 70%, transparent)" }} title="accent 70%" />
                            <span className="sw" style={{ background: "color-mix(in oklab, var(--accent) 40%, transparent)" }} title="accent 40%" />
                            <span className="sw" style={{ background: "var(--accent-soft)" }} title="--accent-soft" />
                        </div>
                        <div className="tokens">
                            <div className="kv">
                                <code>--bg</code><span className="chip demo-bg" />
                            </div>
                            <div className="kv">
                                <code>--text</code><span className="chip demo-text">Aa</span>
                            </div>
                            <div className="kv">
                                <code>--card</code><span className="chip demo-card" />
                            </div>
                            <div className="kv">
                                <code>--border</code><span className="chip demo-border" />
                            </div>
                            <div className="kv">
                                <code>--muted</code><span className="chip demo-muted">Aa</span>
                            </div>
                        </div>
                        <div className="ctaRow">
                            <Link to="/examples/theme" className="ghost">Preview Tokens</Link>
                            <Link to="/tools/theme-tokens" className="primary">Edit Tokens</Link>
                        </div>
                    </div>

                    <div className="group">
                        <div className="groupHead"><MdBorderStyle /> Radius & Density</div>
                        <div className="options twoCol">
                            <label title="Demo only"><input type="checkbox" disabled /> Compact</label>
                            <label title="Demo only"><input type="checkbox" disabled /> Comfortable</label>
                            <label title="Demo only"><input type="checkbox" disabled /> Spacious</label>
                            <label title="Demo only"><input type="checkbox" disabled /> Extra Round Corners</label>
                        </div>
                    </div>

                    <div className="group">
                        <div className="groupHead"><MdBlurOn /> Shadows</div>
                        <div className="shadowRow">
                            <span className="shadowBox s1">Card</span>
                            <span className="shadowBox s2">Popover</span>
                            <span className="shadowBox s3">Dropdown</span>
                        </div>
                    </div>

                    <div className="group">
                        <div className="groupHead"><MdViewSidebar /> Layout & Sidebar</div>
                        <div className="options twoCol">
                            <label title="Demo only"><input type="checkbox" disabled /> Sidebar Collapsed</label>
                            <label title="Demo only"><input type="checkbox" disabled /> Floating Submenu</label>
                            <label title="Demo only"><input type="checkbox" disabled /> Sticky Header</label>
                            <label title="Demo only"><input type="checkbox" disabled /> Bordered Tables</label>
                        </div>
                    </div>

                    <div className="group">
                        <div className="groupHead"><MdPrint /> Print</div>
                        <div className="tiny">
                            Uses a scoped print mode for the highlighted section.
                        </div>
                        <div className="ctaRow">
                            <button onClick={handlePrintPreview} title="Print the preview area only">Print Preview</button>
                            <Link to="/settings/print-templates" className="ghost">Print Templates</Link>
                        </div>
                    </div>
                </section>

                {/* Right: live previews */}
                <section className="preview">
                    <div className="titleRow">
                        <h2>Theme Preview</h2>
                        <div className="rightLinks">
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/reports">Reports</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/customers">Customers</Link>
                            <Link to="/invoices">Invoices</Link>
                            <Link to="/receipts">Receipts</Link>
                        </div>
                    </div>

                    <div className="grid">
                        <article className="card kpi">
                            <header>
                                <h4>Surface · Card</h4>
                                <span className="badge">Live</span>
                            </header>
                            <div className="kpiNums">
                                <div>
                                    <div className="label">Orders</div>
                                    <div className="num">1,240</div>
                                </div>
                                <div>
                                    <div className="label">Invoiced</div>
                                    <div className="num">₹86.4L</div>
                                </div>
                                <div>
                                    <div className="label">Pending</div>
                                    <div className="num">72</div>
                                </div>
                            </div>
                            <footer>
                                <span>Updated: {fmtDate(new Date())}</span>
                            </footer>
                        </article>

                        <article className="card table">
                            <header><h4>Table · Borders & Zebra</h4></header>
                            <div className="tblWrap">
                                <table>
                                    <thead>
                                        <tr><th>SKU</th><th>Name</th><th>Category</th><th>MRP</th><th>Expiry</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>MED-AMOX-500</td><td>Amoxicillin 500mg</td><td>Antibiotic</td><td>₹58.00</td><td>Sat Oct 04 2025</td></tr>
                                        <tr><td>MED-PCM-650</td><td>Paracetamol 650</td><td>Analgesic</td><td>₹25.00</td><td>Sat Oct 04 2025</td></tr>
                                        <tr><td>MED-IBU-400</td><td>Ibuprofen 400</td><td>NSAID</td><td>₹42.00</td><td>Sat Oct 04 2025</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <footer className="rowLinks">
                                <Link to="/medicines">Open Catalog</Link>
                                <Link to="/medicines/expiry-tracker">Expiry Tracker</Link>
                            </footer>
                        </article>

                        <article className="card typography">
                            <header><h4>Typography · Antonio + System Sans</h4></header>
                            <div className="typo">
                                <h1>H1 Headline</h1>
                                <h2>H2 Section</h2>
                                <h3>H3 Subsection</h3>
                                <p>
                                    Body text sample. This block demonstrates contrast, line-height, and link states.
                                    <NavLink to="/examples/theme" className="inlineLink">Open theme demo</NavLink>.
                                </p>
                                <ul className="bullets">
                                    <li>Readable density</li>
                                    <li>Consistent spacing</li>
                                    <li>Accessible focus rings</li>
                                </ul>
                            </div>
                            <footer>
                                <span>Snapshot: {fmtDateTime(new Date())}</span>
                            </footer>
                        </article>

                        <article className="card buttons">
                            <header><h4>Buttons · States</h4></header>
                            <div className="btnRow">
                                <button>Primary</button>
                                <button className="ghost">Ghost</button>
                                <button disabled title="Demo only">Disabled</button>
                            </div>
                            <div className="btnRow">
                                <Link to="/orders" className="primary">View Orders</Link>
                                <Link to="/sales/quotes" className="ghost">Quotes</Link>
                                <Link to="/shipments" className="primary">Shipments</Link>
                            </div>
                        </article>

                        <article className="card sidebar">
                            <header><h4>Sidebar Preview</h4></header>
                            <div className="miniNav">
                                <div className="section">
                                    <div className="head">Core</div>
                                    <NavLink to="/home" end>Home</NavLink>
                                    <NavLink to="/dashboard" end>Dashboard</NavLink>
                                    <NavLink to="/search" end>Search</NavLink>
                                </div>
                                <div className="section">
                                    <div className="head">Billing</div>
                                    <NavLink to="/invoices" end>Invoices</NavLink>
                                    <NavLink to="/receipts" end>Receipts</NavLink>
                                    <NavLink to="/invoices/credit-notes" end>Credit Notes</NavLink>
                                </div>
                            </div>
                        </article>

                        <article className="card links">
                            <header><h4>Quick Links</h4></header>
                            <div className="linksGrid">
                                {links.map((l) => (
                                    <Link key={l.to} to={l.to}>{l.label}</Link>
                                ))}
                            </div>
                            <footer className="rowLinks">
                                <a href={SELF_DEEP_LINK} target="_blank" rel="noreferrer">
                                    Open this page <MdOpenInNew />
                                </a>
                            </footer>
                        </article>
                    </div>
                </section>
            </Styled.Main>

            <DemoConfirmModal
                open={modalOpen}
                title="Reset to Defaults"
                note="This is a demo preview. Changes are disabled."
                onClose={() => setModalOpen(false)}
            />
        </Styled.Wrap>
    );
}
