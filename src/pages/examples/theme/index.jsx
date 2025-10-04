import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

// --- date utils (consistent formatting everywhere)
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

// build/commit (provided by Vite define in your config)
const BUILD_ISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
const COMMIT_ISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString();

// tokens we’ll surface
const TOKEN_KEYS = [
    "--bg",
    "--text",
    "--muted",
    "--card",
    "--border",
    "--accent",
    "--accent-soft",
    "--shadow",
    "--picker-filter",
];

const readComputedTokens = () => {
    const cs = getComputedStyle(document.documentElement);
    const entries = TOKEN_KEYS.map((k) => [k, cs.getPropertyValue(k).trim()]);
    return Object.fromEntries(entries);
};

const ExampleTheme = () => {
    const [mode, setMode] = useState(() => {
        const hasAttr = document.documentElement.hasAttribute("data-theme");
        return hasAttr ? document.documentElement.getAttribute("data-theme") : "system";
    });
    const [tokens, setTokens] = useState(() => (typeof window !== "undefined" ? readComputedTokens() : {}));
    const [accent, setAccent] = useState(() => tokens["--accent"] || "#5aa9ff");
    const [copied, setCopied] = useState("");
    const [exportHint, setExportHint] = useState("");
    const demoScopeRef = useRef(null);
    const printRef = useRef(null);

    // re-read tokens whenever theme or accent scope changes
    useEffect(() => {
        const id = requestAnimationFrame(() => setTokens(readComputedTokens()));
        return () => cancelAnimationFrame(id);
    }, [mode, accent]);

    // apply theme mode to :root
    const applyMode = (next) => {
        setMode(next);
        const root = document.documentElement;
        if (next === "system") root.removeAttribute("data-theme");
        else root.setAttribute("data-theme", next);
    };

    // apply accent only inside demo scope (to illustrate overrides without touching global)
    useEffect(() => {
        const scope = demoScopeRef.current;
        if (!scope) return;
        scope.style.setProperty("--accent", accent);
        scope.style.setProperty("--accent-soft", `color-mix(in oklab, ${accent} 15%, transparent)`);
    }, [accent]);

    const onCopyJSON = async () => {
        try {
            await navigator.clipboard.writeText(JSON.stringify(tokens, null, 2));
            setCopied("Copied!");
            setTimeout(() => setCopied(""), 1500);
        } catch {
            setCopied("Unable to copy");
            setTimeout(() => setCopied(""), 1500);
        }
    };

    const onExportJSON = () => {
        const blob = new Blob([JSON.stringify(tokens, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.download = "theme-tokens.json";
        a.href = url;
        a.click();
        URL.revokeObjectURL(url);
        setExportHint("Downloaded");
        setTimeout(() => setExportHint(""), 1500);
    };

    const now = useMemo(() => new Date(), []);
    const buildDate = useMemo(() => new Date(BUILD_ISO), []);
    const commitDate = useMemo(() => new Date(COMMIT_ISO), []);

    const printTokenSheet = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page>
            {/* print CSS (scoped behavior) */}
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

            <Styled.Header className="card">
                <div className="lhs">
                    <h1>Theme Tokens Preview</h1>
                    <nav className="breadcrumbs">
                        <NavLink to="/examples">Examples</NavLink>
                        <span>/</span>
                        <span className="current">Theme</span>
                    </nav>
                    <div className="meta">
                        <span>Build: {fmtDateTime(buildDate)}</span>
                        <span>•</span>
                        <span>Last Commit: {fmtDateTime(commitDate)}</span>
                        <span>•</span>
                        <span>Opened: {fmtDate(now)}</span>
                    </div>
                </div>
                <div className="rhs">
                    <div className="seg">
                        <span className="label">Theme</span>
                        <div className="btns">
                            <button className={mode === "system" ? "btnPrimary" : "btnGhost"} onClick={() => applyMode("system")}>System</button>
                            <button className={mode === "light" ? "btnPrimary" : "btnGhost"} onClick={() => applyMode("light")}>Light</button>
                            <button className={mode === "dark" ? "btnPrimary" : "btnGhost"} onClick={() => applyMode("dark")}>Dark</button>
                        </div>
                    </div>
                    <div className="seg">
                        <span className="label">Tokens</span>
                        <div className="btns">
                            <button className="btnGhost" onClick={onCopyJSON} title="Copy CSS variables as JSON">Copy</button>
                            <button className="btnGhost" onClick={onExportJSON} title="Download JSON">Export</button>
                            <button className="btnGhost" onClick={printTokenSheet} title="Print token sheet">Print</button>
                        </div>
                        {(copied || exportHint) && <div className="hint">{copied || exportHint}</div>}
                    </div>
                </div>
            </Styled.Header>

            <Styled.Grid>
                {/* Token values (also becomes the printable sheet) */}
                <section className="card tokens" id="search-print-area" ref={printRef}>
                    <header>
                        <h3>CSS Variables</h3>
                        <p className="muted">Live values from <code>:root</code>. Change theme to see them update.</p>
                    </header>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Variable</th>
                                    <th>Value</th>
                                    <th>Sample</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TOKEN_KEYS.map((k) => {
                                    const val = tokens[k] || "";
                                    const showSwatch = /(^#|rgb|hsl)/i.test(val);
                                    return (
                                        <tr key={k}>
                                            <td><code>{k}</code></td>
                                            <td className="valueCell"><code>{val}</code></td>
                                            <td>{showSwatch ? <span className="swatch" style={{ background: val }} /> : <span className="swatch none">—</span>}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <footer className="foot">
                        <span>Snapshot: {fmtDateTime(new Date())}</span>
                    </footer>
                </section>

                {/* Component gallery (consumes tokens) */}
                <section className="card gallery">
                    <header>
                        <h3>Components Gallery</h3>
                        <p className="muted">Buttons, inputs, table, and a code block using your theme variables.</p>
                    </header>

                    <div className="row">
                        <div>
                            <div className="label">Buttons</div>
                            <div className="btnRow">
                                <button className="btnPrimary">Primary</button>
                                <button className="btnGhost">Ghost</button>
                                <button className="btnOutline">Outline</button>
                                <button className="btnSubtle">Subtle</button>
                                <button className="btnIcon" aria-label="Icon button">★</button>
                            </div>
                        </div>

                        <div>
                            <div className="label">Inputs</div>
                            <div className="inputs">
                                <input placeholder="Text input" />
                                <input type="date" />
                                <select defaultValue="">
                                    <option value="" disabled>Choose</option>
                                    <option>Option A</option>
                                    <option>Option B</option>
                                </select>
                                <textarea rows={3} placeholder="Textarea" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <div className="label">Table</div>
                            <div className="tableWrap small">
                                <table>
                                    <thead>
                                        <tr><th>Code</th><th>Name</th><th>Status</th><th>Updated</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>ITM-001</td><td>Bluewave Desk</td><td><span className="badge ok">Active</span></td><td>{fmtDateTime(new Date())}</td></tr>
                                        <tr><td>ITM-002</td><td>Orbit Chair</td><td><span className="badge warn">Hold</span></td><td>{fmtDateTime(new Date())}</td></tr>
                                        <tr><td>ITM-003</td><td>Neptune Lamp</td><td><span className="badge off">Archived</span></td><td>{fmtDateTime(new Date())}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <div className="label">Code</div>
                            <pre className="codeWrap">
                                {`:root {
  --bg: ${tokens["--bg"] || ""};
  --text: ${tokens["--text"] || ""};
  --muted: ${tokens["--muted"] || ""};
  --card: ${tokens["--card"] || ""};
  --border: ${tokens["--border"] || ""};
  --accent: ${tokens["--accent"] || ""};
  --accent-soft: ${tokens["--accent-soft"] || ""};
  --shadow: ${tokens["--shadow"] || ""};
}`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Accent playground (scoped override) */}
                <section className="card playground" ref={demoScopeRef}>
                    <header>
                        <h3>Accent Playground (Scoped)</h3>
                        <p className="muted">This panel overrides <code>--accent</code> locally to demonstrate easy theming.</p>
                    </header>

                    <div className="controls">
                        <div className="pick">
                            <label>Accent</label>
                            <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} aria-label="Pick accent color" />
                        </div>
                        <div className="examples">
                            <button className="btnPrimary">Primary</button>
                            <button className="btnGhost">Ghost</button>
                            <button className="btnOutline">Outline</button>
                            <span className="chip">Accent Chip</span>
                            <span className="chip soft">Soft Chip</span>
                        </div>
                    </div>

                    <div className="card inner">
                        <h4>Preview Card</h4>
                        <p>
                            Buttons, chips, focus rings and borders in this area use the
                            locally-scoped <code>--accent</code>. Outside this card, the
                            global theme remains unchanged.
                        </p>
                        <div className="miniGrid">
                            <div className="stat">
                                <div className="k">Accent</div>
                                <div className="v"><code>{accent}</code></div>
                            </div>
                            <div className="stat">
                                <div className="k">Accent Soft</div>
                                <div className="v"><code>color-mix(in oklab, {accent} 15%, transparent)</code></div>
                            </div>
                        </div>
                    </div>
                </section>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default ExampleTheme;
