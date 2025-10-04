import React, { useEffect, useMemo, useRef, useState } from "react";
import { Styled } from "./styled";

const css = (el) => getComputedStyle(el || document.documentElement);
const pick = (v) => (v || "").toString().trim();

/** helpers */
const toRGBA = (hex, alpha = 0.15) => {
    const h = hex.replace("#", "");
    const bigint = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
    const r = (bigint >> 16) & 255, g = (bigint >> 8) & 255, b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

const ExamplePersistTheme = () => {
    const root = document.documentElement;

    // read initial tokens from computed styles
    const initial = useMemo(() => {
        const s = css();
        return {
            theme: root.getAttribute("data-theme") || "", // "" means follow OS
            accent: pick(s.getPropertyValue("--accent")) || "#5aa9ff",
            radius: pick(s.getPropertyValue("--radius")) || "16px",
            shadow: pick(s.getPropertyValue("--shadow")),
            fontSize: pick(css(document.body).fontSize) || "13px",
        };
    }, []);

    const [theme, setTheme] = useState(initial.theme); // "", "light"
    const [accent, setAccent] = useState(initial.accent);
    const [radius, setRadius] = useState(parseInt(initial.radius, 10) || 16);
    const [font, setFont] = useState(parseInt(initial.fontSize, 10) || 13);
    const [banner, setBanner] = useState("");
    const [showSnippet, setShowSnippet] = useState(false);
    const printRef = useRef(null);

    // live-apply (no persistence)
    useEffect(() => {
        if (!theme) root.removeAttribute("data-theme");
        else root.setAttribute("data-theme", theme);
    }, [theme]);

    useEffect(() => {
        root.style.setProperty("--accent", accent);
        root.style.setProperty("--accent-soft", toRGBA(accent, 0.12));
    }, [accent]);

    useEffect(() => {
        root.style.setProperty("--radius", `${clamp(radius, 6, 28)}px`);
    }, [radius]);

    useEffect(() => {
        document.body.style.fontSize = `${clamp(font, 11, 18)}px`;
    }, [font]);

    // banner auto-hide
    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3000);
        return () => clearTimeout(t);
    }, [banner]);

    const resetOverrides = () => {
        root.style.removeProperty("--accent");
        root.style.removeProperty("--accent-soft");
        root.style.removeProperty("--radius");
        document.body.style.removeProperty("font-size");
        setTheme("");
        setAccent(initial.accent);
        setRadius(parseInt(initial.radius, 10) || 16);
        setFont(parseInt(initial.fontSize, 10) || 13);
        setBanner("Reverted to theme defaults");
    };

    const applyFromURL = () => {
        const url = new URL(window.location.href);
        const t = url.searchParams.get("theme");
        const a = url.searchParams.get("accent");
        const r = url.searchParams.get("radius");
        const f = url.searchParams.get("font");
        if (t === "light" || t === "dark" || t === "") setTheme(t || "");
        if (a && /^#?[0-9a-f]{3,8}$/i.test(a)) setAccent(a.startsWith("#") ? a : "#" + a);
        if (r && !isNaN(+r)) setRadius(clamp(parseInt(r, 10), 6, 28));
        if (f && !isNaN(+f)) setFont(clamp(parseInt(f, 10), 11, 18));
        setBanner("Applied theme from URL parameters");
    };

    const buildShareURL = () => {
        const url = new URL(window.location.href);
        const sp = url.searchParams;
        sp.set("theme", theme || "");
        sp.set("accent", accent.replace("#", ""));
        sp.set("radius", String(radius));
        sp.set("font", String(font));
        url.search = sp.toString();
        return url.toString();
    };

    const copyShareURL = async () => {
        const link = buildShareURL();
        try {
            await navigator.clipboard.writeText(link);
            setBanner("Share URL copied");
        } catch {
            setBanner("Copy failed — select and copy manually");
        }
    };

    const copyCSSVars = async () => {
        const s = css();
        const block = `:root {
  --bg: ${pick(s.getPropertyValue("--bg"))};
  --text: ${pick(s.getPropertyValue("--text"))};
  --muted: ${pick(s.getPropertyValue("--muted"))};
  --card: ${pick(s.getPropertyValue("--card"))};
  --border: ${pick(s.getPropertyValue("--border"))};
  --accent: ${accent};
  --accent-soft: ${toRGBA(accent, 0.12)};
  --shadow: ${pick(s.getPropertyValue("--shadow"))};
  --radius: ${radius}px;
}`;
        try {
            await navigator.clipboard.writeText(block);
            setBanner("Current CSS variables copied");
        } catch {
            setBanner("Copy failed — select and copy manually");
        }
    };

    const printSection = () => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const themeOptions = [
        { key: "", label: "Auto (OS)" },
        { key: "light", label: "Light" },
        { key: "dark", label: "Dark" },
    ];

    const accents = [
        "#5aa9ff", // default
        "#2f74ff",
        "#7da3ff",
        "#9bb7ff",
        "#5f7eff",
        "#8aa7ff",
    ];

    return (
        <Styled.Page>
            {/* print CSS (scoped) */}
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

            <header className="card head">
                <div>
                    <h1>Theme — Appearance & Persistence (Demo)</h1>
                    <p className="muted">
                        Tweak live tokens below. Nothing is stored. Use the shareable URL or copy the CSS variables for your app.
                    </p>
                </div>
                <div className="ctaRow">
                    <button className="btnGhost" onClick={resetOverrides}>Reset</button>
                    <button className="btnPrimary" onClick={copyCSSVars} title="Copy current CSS variables">Copy CSS</button>
                    <button className="btnPrimary" onClick={copyShareURL} title="Copy link with current theme params">Copy Share URL</button>
                    <button className="btnGhost" onClick={applyFromURL} title="Apply ?theme=&accent=&radius=&font=">Apply From URL</button>
                    <button className="btnDanger" onClick={() => setShowSnippet(true)}>Persistence Snippet</button>
                    <button className="btnGhost" onClick={printSection}>Print Summary</button>
                </div>
            </header>

            {banner ? <div className="banner card">{banner}</div> : null}

            <div className="grid">
                {/* Controls */}
                <section className="card panel">
                    <h3>Controls</h3>
                    <div className="controls">
                        <div className="row">
                            <label>Theme</label>
                            <div className="seg">
                                {themeOptions.map(t => (
                                    <button
                                        key={t.key || "auto"}
                                        className={`segBtn ${theme === t.key ? "active" : ""}`}
                                        onClick={() => setTheme(t.key)}
                                    >
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="row">
                            <label>Accent</label>
                            <div className="swatches">
                                {accents.map(c => (
                                    <button
                                        key={c}
                                        className={`swatch ${c === accent ? "sel" : ""}`}
                                        style={{ background: c }}
                                        onClick={() => setAccent(c)}
                                        title={c}
                                        aria-label={`Accent ${c}`}
                                    />
                                ))}
                                <div className="customPick">
                                    <input
                                        type="color"
                                        value={accent}
                                        onChange={(e) => setAccent(e.target.value)}
                                        aria-label="Custom accent"
                                    />
                                    <span>{accent}</span>
                                </div>
                            </div>
                        </div>

                        <div className="row two">
                            <div>
                                <label>Corner Radius: {radius}px</label>
                                <input type="range" min="6" max="28" value={radius} onChange={(e) => setRadius(parseInt(e.target.value, 10))} />
                            </div>
                            <div>
                                <label>Base Font Size: {font}px</label>
                                <input type="range" min="11" max="18" value={font} onChange={(e) => setFont(parseInt(e.target.value, 10))} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Preview */}
                <section className="card preview">
                    <h3>Preview</h3>
                    <div className="ui">
                        <div className="row">
                            <button className="btnPrimary">Primary</button>
                            <button className="btnGhost">Ghost</button>
                            <button className="btnDanger">Danger</button>
                            <button className="btnPrimary" disabled>Disabled</button>
                        </div>
                        <div className="row">
                            <input placeholder="Input" />
                            <select>
                                <option>Option A</option>
                                <option>Option B</option>
                            </select>
                            <input type="date" />
                        </div>
                        <div className="cards">
                            <div className="mini card">
                                <div className="k">Text</div>
                                <div className="v">A quick brown fox jumps over the lazy dog.</div>
                            </div>
                            <div className="mini card">
                                <div className="k">Muted</div>
                                <div className="v muted">Subtle description and explanatory copy styles live here.</div>
                            </div>
                            <div className="mini card">
                                <div className="k">Link</div>
                                <div className="v"><a href="#">Explore components</a></div>
                            </div>
                        </div>

                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Token</th>
                                        <th>Value</th>
                                        <th>Usage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>--bg</td><td>Canvas</td><td>App background</td></tr>
                                    <tr><td>--card</td><td>Panel surface</td><td>Cards & inputs</td></tr>
                                    <tr><td>--accent</td><td>{accent}</td><td>Highlights</td></tr>
                                    <tr><td>--radius</td><td>{radius}px</td><td>Corners</td></tr>
                                    <tr><td>--shadow</td><td>Soft</td><td>Elevation</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Tokens snapshot & print area */}
                <aside className="card snapshot" id="search-print-area" ref={printRef}>
                    <h3>Theme Summary</h3>
                    <div className="rows">
                        <div><span className="k">Theme</span><span className="v">{theme || "Auto (OS)"}</span></div>
                        <div><span className="k">Accent</span><span className="v">{accent}</span></div>
                        <div><span className="k">Radius</span><span className="v">{radius}px</span></div>
                        <div><span className="k">Base Font</span><span className="v">{font}px</span></div>
                    </div>
                    <div className="code">
                        <pre>{`:root {
  --accent: ${accent};
  --accent-soft: ${toRGBA(accent, 0.12)};
  --radius: ${radius}px;
}`}</pre>
                    </div>
                    <div className="shareLine">
                        <input value={buildShareURL()} readOnly />
                        <button className="btnGhost" onClick={copyShareURL}>Copy Link</button>
                    </div>
                </aside>
            </div>

            {/* Snippet Modal */}
            {showSnippet && (
                <Styled.ModalOverlay onMouseDown={() => setShowSnippet(false)}>
                    <Styled.Modal onMouseDown={(e) => e.stopPropagation()} className="card">
                        <header><h4>Persistence Snippet</h4></header>
                        <div className="body">
                            <p className="muted">This example doesn’t store anything. If you want to persist in your app, drop this in your root file:</p>
                            <pre className="code">{`// Read once on startup
const saved = localStorage.getItem("theme");
if (saved === "light") document.documentElement.setAttribute("data-theme", "light");
else if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
else document.documentElement.removeAttribute("data-theme");

// Toggle sample
function setThemePref(next) {
  if (!next) { localStorage.removeItem("theme"); document.documentElement.removeAttribute("data-theme"); return; }
  localStorage.setItem("theme", next);
  document.documentElement.setAttribute("data-theme", next);
}`}</pre>
                            <p className="muted">You can also persist custom tokens (accent, radius) by saving CSS variables into localStorage and replaying via <code>documentElement.style.setProperty</code> on load.</p>
                        </div>
                        <footer>
                            <button className="btnGhost" onClick={() => setShowSnippet(false)}>Close</button>
                        </footer>
                    </Styled.Modal>
                </Styled.ModalOverlay>
            )}
        </Styled.Page>
    );
};

export default ExamplePersistTheme;
