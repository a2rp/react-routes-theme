// src/pages/tools/theme-tokens/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiCopy, FiExternalLink, FiMonitor, FiMoon, FiSun, FiPrinter, FiSlash } from "react-icons/fi";
import { Styled } from "./styled";

const fmt = {
    date: (iso) => {
        if (!iso) return "";
        const d = new Date(iso);
        const dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()];
        const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()];
        const dd = String(d.getDate()).padStart(2, "0");
        const yyyy = d.getFullYear();
        return `${dow} ${mon} ${dd} ${yyyy}`;
    },
    time: (iso) => {
        if (!iso) return "";
        const d = new Date(iso);
        const hh = String(d.getHours()).padStart(2, "0");
        const mm = String(d.getMinutes()).padStart(2, "0");
        const ss = String(d.getSeconds()).padStart(2, "0");
        return `${hh}:${mm}:${ss}hrs`;
    },
    dateTime: (iso) => `${fmt.date(iso)} ${fmt.time(iso)}`
};

const tokenDefs = [
    { key: "--bg", label: "Background" },
    { key: "--text", label: "Text" },
    { key: "--muted", label: "Muted Text" },
    { key: "--card", label: "Card" },
    { key: "--border", label: "Border" },
    { key: "--accent", label: "Accent" },
    { key: "--accent-soft", label: "Accent Soft" },
    { key: "--shadow", label: "Shadow (effect)" },
    { key: "--picker-filter", label: "Picker Icon Filter" },
];

export default function ToolsThemeTokensPage() {
    const navigate = useNavigate();
    const [mode, setMode] = useState(() => {
        const attr = document.documentElement.getAttribute("data-theme");
        return attr === "light" || attr === "dark" ? attr : "system";
    });
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [copied, setCopied] = useState("");

    const buildISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
    const commitISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString();

    const tokens = useMemo(() => {
        const styles = getComputedStyle(document.documentElement);
        return tokenDefs.map(t => ({
            ...t,
            value: styles.getPropertyValue(t.key).trim() || "(unset)"
        }));
    }, [mode]);

    useEffect(() => {
        if (mode === "system") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", mode);
        }
    }, [mode]);

    const copy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(text);
            setTimeout(() => setCopied(""), 1200);
        } catch { }
    };

    const printSection = () => {
        const body = document.body;
        body.classList.add("print-section-mode");
        const cleanup = () => body.classList.remove("print-section-mode");
        window.addEventListener("afterprint", cleanup, { once: true });
        window.print();
    };

    const demoOnly = () => setShowDemoModal(true);

    return (
        <Styled.Page>
            <header className="pageHead">
                <nav className="crumbs">
                    <NavLink to="/home">Home</NavLink>
                    <span>/</span>
                    <NavLink to="/tools">Tools</NavLink>
                    <span>/</span>
                    <span aria-current="page">Theme Tokens</span>
                </nav>

                <div className="headMain">
                    <div className="titles">
                        <h1>Theme Tokens</h1>
                        <p className="sub">
                            Visual foundation of the UI — colors, border, card surfaces, shadows and focus rings.
                            Quick-compare dark/light, copy variables, and see live component previews.
                        </p>
                    </div>

                    <div className="actions">
                        <div className="mode">
                            <button
                                className={mode === "system" ? "active" : ""}
                                onClick={() => setMode("system")}
                                title="Follow OS theme"
                            >
                                <FiMonitor /> System
                            </button>
                            <button
                                className={mode === "light" ? "active" : ""}
                                onClick={() => setMode("light")}
                                title="Force Light"
                            >
                                <FiSun /> Light
                            </button>
                            <button
                                className={mode === "dark" ? "active" : ""}
                                onClick={() => setMode("dark")}
                                title="Force Dark"
                            >
                                <FiMoon /> Dark
                            </button>
                        </div>

                        <div className="ctaRow">
                            <button onClick={printSection} className="ghost" title="Print token sheet">
                                <FiPrinter /> Print
                            </button>
                            <button onClick={demoOnly} className="outline" title="Export tokens JSON">
                                Export JSON
                            </button>
                            <button onClick={demoOnly} title="Reset to system defaults">
                                <FiSlash /> Reset to System
                            </button>
                        </div>
                    </div>
                </div>

                <div className="meta">
                    <div>Build: <span className="mono">{fmt.dateTime(buildISO)}</span></div>
                    <div>Last Commit: <span className="mono">{fmt.dateTime(commitISO)}</span></div>
                    <div>Route: <span className="mono">/tools/theme-tokens</span></div>
                </div>
            </header>

            {/* QUICK LINKS */}
            <section className="quickLinks">
                <h2>Jump to</h2>
                <div className="grid">
                    <Link to="/examples/theme" className="chip">Examples → Theme Demo</Link>
                    <Link to="/settings/appearance" className="chip">Settings → Appearance</Link>
                    <Link to="/reports" className="chip">Reports Overview</Link>
                    <Link to="/products" className="chip">All Products</Link>
                    <Link to="/inventory" className="chip">Inventory</Link>
                    <Link to="/finance" className="chip">Finance Overview</Link>
                    <Link to="/admin/system-status" className="chip">System Status</Link>
                    <Link to="/help" className="chip">Help Center</Link>
                    <Link to="/changelog" className="chip">Changelog</Link>
                    <Link to="/roadmap" className="chip">Roadmap</Link>
                    <Link to="/customers" className="chip">Customers</Link>
                    <Link to="/orders" className="chip">Orders</Link>
                    <Link to="/invoices" className="chip">Invoices</Link>
                    <Link to="/shipments" className="chip">Shipments</Link>
                    <Link to="/medicines" className="chip">Medicines</Link>
                </div>
            </section>

            {/* PRINT AREA */}
            <section className="printArea card" id="search-print-area" aria-label="Printable Theme Tokens">
                <div className="printHead">
                    <h2>Token Sheet</h2>
                    <p>Snapshot of current CSS custom properties.</p>
                </div>
                <div className="tokenGrid">
                    {tokens.map(({ key, label, value }) => {
                        const isColor = key !== "--shadow" && key !== "--picker-filter";
                        return (
                            <div key={key} className="tokenCard">
                                <div className="tokenTop">
                                    <div className="label">
                                        <div className="name">{label}</div>
                                        <code className="var">{key}</code>
                                    </div>
                                    <div className="swatchWrap">
                                        {isColor ? (
                                            <span className="swatch" style={{ background: `var(${key})` }} aria-label={`${label} swatch`} />
                                        ) : (
                                            <span className="swatch shadowDemo" style={{ boxShadow: `var(${key})` }} />
                                        )}
                                    </div>
                                </div>

                                <div className="valueRow">
                                    <code className="value">{value}</code>
                                </div>

                                <div className="btns">
                                    <button className="outline" onClick={() => copy(key)} title="Copy variable name">
                                        <FiCopy /> var
                                    </button>
                                    <button className="ghost" onClick={() => copy(value)} title="Copy resolved value">
                                        <FiCopy /> value
                                    </button>
                                    <a className="plain" href="#" onClick={(e) => { e.preventDefault(); navigate("/examples/theme"); }} title="See tokens in action">
                                        <FiExternalLink /> demo
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* LIVE PREVIEW */}
            <section className="preview">
                <h2>Component Preview</h2>

                <div className="previewGrid">
                    <div className="card panel">
                        <h3>Buttons</h3>
                        <div className="btnRow">
                            <button>Primary</button>
                            <button className="outline">Outline</button>
                            <button className="ghost">Ghost</button>
                            <button disabled>Disabled</button>
                        </div>
                    </div>

                    <div className="card panel">
                        <h3>Inputs</h3>
                        <div className="form">
                            <label>Full Name</label>
                            <input placeholder="Jane Doe" />
                            <label>Email</label>
                            <input placeholder="jane@example.com" />
                            <label>Message</label>
                            <textarea rows={3} placeholder="Write something…" />
                            <div className="split">
                                <div>
                                    <label>Date</label>
                                    <input type="date" />
                                </div>
                                <div>
                                    <label>Time</label>
                                    <input type="time" />
                                </div>
                            </div>
                            <div className="btnRow">
                                <button className="outline" onClick={demoOnly}>Submit</button>
                                <button className="ghost" onClick={demoOnly}>Cancel</button>
                            </div>
                        </div>
                    </div>

                    <div className="card panel">
                        <h3>Cards & Badges</h3>
                        <div className="badgeRow">
                            <span className="badge">New</span>
                            <span className="badge alt">Active</span>
                            <span className="badge soft">Muted</span>
                        </div>
                        <div className="metaList">
                            <div><strong>Created</strong> <span className="mono">{fmt.dateTime(buildISO)}</span></div>
                            <div><strong>Updated</strong> <span className="mono">{fmt.dateTime(commitISO)}</span></div>
                        </div>
                    </div>

                    <div className="card panel tableWrap">
                        <h3>Table</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Token</th><th>Value</th><th>Usage</th><th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tokens.slice(0, 7).map(t => (
                                    <tr key={t.key}>
                                        <td><code className="mono">{t.key}</code></td>
                                        <td><span className="mono">{t.value}</span></td>
                                        <td>{t.label}</td>
                                        <td><Link to="/examples/theme">preview</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="card panel links">
                        <h3>Navigate</h3>
                        <div className="linkCols">
                            <ul>
                                <li><Link to="/customers">Customers</Link></li>
                                <li><Link to="/orders">Orders</Link></li>
                                <li><Link to="/invoices">Invoices</Link></li>
                                <li><Link to="/receipts">Receipts</Link></li>
                                <li><Link to="/shipments">Shipments</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/categories">Categories</Link></li>
                                <li><Link to="/inventory">Inventory</Link></li>
                                <li><Link to="/medicines">Medicines</Link></li>
                                <li><Link to="/finance">Finance</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="/reports">Reports</Link></li>
                                <li><Link to="/admin/users">Users</Link></li>
                                <li><Link to="/settings">Settings</Link></li>
                                <li><Link to="/tools/import-export">Import / Export</Link></li>
                                <li><Link to="/examples">Examples</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEMO MODAL */}
            {showDemoModal && (
                <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="demoTitle">
                    <div className="box card">
                        <h3 id="demoTitle">Demo Mode</h3>
                        <p>This is a display-only preview. Actions like export/reset are disabled here.</p>
                        <div className="btnRow">
                            <button onClick={() => setShowDemoModal(false)}>OK</button>
                            <button className="ghost" onClick={() => setShowDemoModal(false)}>Close</button>
                        </div>
                    </div>
                    <button className="backdrop" onClick={() => setShowDemoModal(false)} aria-label="Close" />
                </Styled.Modal>
            )}

            {/* print-only rules */}
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

            {/* small toast when copied */}
            {!!copied && (
                <div className="toast card" role="status" aria-live="polite">
                    Copied <code className="mono">{copied}</code>
                </div>
            )}
        </Styled.Page>
    );
}
