import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* date utilities for consistent formatting */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

const now = new Date();

/* label map so segments look human */
const TITLE_MAP = {
    "": "Home",
    home: "Home",
    about: "About",
    dashboard: "Dashboard",
    search: "Search",
    examples: "Examples",
    breadcrumbs: "Breadcrumbs",
    table: "Table",
    products: "Products",
    categories: "Categories",
    orders: "Orders",
    customers: "Customers",
    invoices: "Invoices",
    "credit-notes": "Credit Notes",
    receipts: "Receipts",
    inventory: "Inventory",
    vendors: "Vendors",
    "purchase-orders": "Purchase Orders",
    shipments: "Shipments",
    reports: "Reports",
    finance: "Finance",
    settings: "Settings",
};

const SEPARATORS = [
    { id: "slash", label: " / ", glyph: "/" },
    { id: "chev", label: " › ", glyph: "›" },
    { id: "dot", label: " • ", glyph: "•" },
];

const ExampleBreadcrumbsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [sep, setSep] = useState("chev");
    const [copied, setCopied] = useState(false);
    const printRef = useRef(null);

    // derive crumbs from current URL
    const crumbs = useMemo(() => {
        // normalize: remove query/hash for display
        const clean = location.pathname.replace(/\/+$/, "");
        const parts = clean.split("/"); // first one will be empty string for root
        const nodes = [];
        let href = "";
        for (let i = 0; i < parts.length; i++) {
            const seg = parts[i];
            href += (i === 0 ? "" : "/") + seg;
            const key = seg || "";
            const label = TITLE_MAP[key] || (seg ? seg.replace(/-/g, " ") : "Home");
            nodes.push({ label, href: href || "/" });
        }
        // ensure at least Home even on root
        if (nodes.length === 0) nodes.push({ label: "Home", href: "/" });
        return nodes;
    }, [location.pathname]);

    const currentSeparator = useMemo(() => {
        return SEPARATORS.find(s => s.id === sep) || SEPARATORS[0];
    }, [sep]);

    // copy full path (base-aware) to clipboard
    const copyPath = async () => {
        try {
            const full = window.location.href;
            await navigator.clipboard.writeText(full);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // no alerts—just a subtle banner fallback
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
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

    // small helper for demo navigation
    const jumpTo = (path) => () => navigate(path);

    // JSON-LD structured data (preview only)
    const jsonLd = useMemo(() => {
        const items = crumbs.map((c, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: c.label,
            item: c.href,
        }));
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items
        };
    }, [crumbs]);

    useEffect(() => {
        // nothing heavy—just page title polish
        document.title = "Breadcrumbs · Examples";
    }, []);

    return (
        <Styled.Page className="container">

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

            <Styled.Header className="card">
                <div className="left">
                    <h1>Breadcrumbs</h1>
                    <nav aria-label="Breadcrumb" className="crumbs">
                        <ol>
                            {crumbs.map((c, idx) => {
                                const isLast = idx === crumbs.length - 1;
                                return (
                                    <li key={c.href}>
                                        {isLast ? (
                                            <span aria-current="page">{c.label}</span>
                                        ) : (
                                            <Link to={c.href}>{c.label}</Link>
                                        )}
                                        {!isLast && <span className="sep" aria-hidden="true">{currentSeparator.glyph}</span>}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                    <div className="meta">
                        <span>Updated: {fmt(now, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <div className="segPicker">
                        <label htmlFor="sep">Separator</label>
                        <select id="sep" value={sep} onChange={(e) => setSep(e.target.value)}>
                            {SEPARATORS.map(s => <option key={s.id} value={s.id}>{s.label.trim()}</option>)}
                        </select>
                    </div>
                    <button className="btnGhost" onClick={copyPath} title="Copy current URL">Copy Link</button>
                    <button className="btnGhost" onClick={printSection} title="Print section">Print</button>
                </div>
            </Styled.Header>

            {copied && (
                <Styled.Banner role="status" aria-live="polite">
                    Link copied • {fmt(new Date(), true)}
                </Styled.Banner>
            )}

            <Styled.Grid>
                {/* 1. Auto from URL */}
                <section className="card">
                    <header className="sectionHead">
                        <h3>Auto (from URL)</h3>
                        <div className="hint">Reads <code>location.pathname</code> and maps segments using a title dictionary.</div>
                    </header>
                    <div className="demoRow">
                        <nav aria-label="Breadcrumb">
                            <ol className="demoCrumbs">
                                {crumbs.map((c, idx) => {
                                    const isLast = idx === crumbs.length - 1;
                                    return (
                                        <li key={c.href}>
                                            {isLast ? (
                                                <span aria-current="page">{c.label}</span>
                                            ) : (
                                                <NavLink to={c.href}>{c.label}</NavLink>
                                            )}
                                            {!isLast && <span className="sep" aria-hidden="true">{currentSeparator.glyph}</span>}
                                        </li>
                                    );
                                })}
                            </ol>
                        </nav>
                    </div>
                    <div className="rowBtns">
                        <button className="btnGhost small" onClick={jumpTo("/examples")}>Go: /examples</button>
                        <button className="btnGhost small" onClick={jumpTo("/products/brands")}>Go: /products/brands</button>
                        <button className="btnGhost small" onClick={jumpTo("/invoices/credit-notes")}>Go: /invoices/credit-notes</button>
                        <button className="btnGhost small" onClick={jumpTo("/reports/finance")}>Go: /reports/finance</button>
                    </div>
                </section>

                {/* 2. Truncated long names + icons */}
                <section className="card">
                    <header className="sectionHead">
                        <h3>Truncate + Icons</h3>
                        <div className="hint">End item clamps to 1 line; icons on major nodes. Useful for deep catalogs.</div>
                    </header>
                    <div className="demoRow">
                        <nav aria-label="Breadcrumb" className="iconCrumbs">
                            <ol>
                                <li>
                                    <Link to="/home" title="Home" className="ico home">
                                        <span className="sr-only">Home</span>
                                    </Link>
                                    <span className="sep" aria-hidden="true">{currentSeparator.glyph}</span>
                                </li>
                                <li>
                                    <Link to="/products" className="ico box">Products</Link>
                                    <span className="sep" aria-hidden="true">{currentSeparator.glyph}</span>
                                </li>
                                <li>
                                    <Link to="/products/brands" className="ico tag">Bluewave Industrial Supplies Pvt Ltd</Link>
                                    <span className="sep" aria-hidden="true">{currentSeparator.glyph}</span>
                                </li>
                                <li className="truncate" aria-current="page">Premium Anti-rust Coating Aerosol – 500ml, Pack of 24 (Limited Launch Edition)</li>
                            </ol>
                        </nav>
                    </div>
                </section>

                {/* 3. With dropdown crumb (display-only, no persistence) */}
                <section className="card">
                    <header className="sectionHead">
                        <h3>Crumb Menu</h3>
                        <div className="hint">Intermediate segment can expose quick picks—handy for switching siblings.</div>
                    </header>
                    <div className="demoRow">
                        <nav aria-label="Breadcrumb" className="menuCrumbs">
                            <ol>
                                <li><Link to="/reports">Reports</Link><span className="sep" aria-hidden="true">{currentSeparator.glyph}</span></li>
                                <li className="menu">
                                    <button className="btnGhost tiny" type="button" aria-haspopup="menu" aria-expanded="false">
                                        Sales
                                    </button>
                                    <div className="menuList" role="menu">
                                        <Link to="/reports/sales" role="menuitem">Sales</Link>
                                        <Link to="/reports/inventory" role="menuitem">Inventory</Link>
                                        <Link to="/reports/finance" role="menuitem">Finance</Link>
                                        <Link to="/reports/procurement" role="menuitem">Procurement</Link>
                                    </div>
                                    <span className="sep" aria-hidden="true">{currentSeparator.glyph}</span>
                                </li>
                                <li aria-current="page">FY 2024-25 Q2</li>
                            </ol>
                        </nav>
                    </div>
                </section>

                {/* 4. Print-ready block */}
                <section className="card" id="search-print-area" ref={printRef}>
                    <header className="sectionHead">
                        <h3>Print Preview</h3>
                        <div className="hint">This block is printer-focused using the shared print CSS. Try the Print button above.</div>
                    </header>
                    <div className="printPreview">
                        <div className="title">Report Path</div>
                        <div className="line">
                            <span className="k">Breadcrumb</span>
                            <span className="v">
                                {crumbs.map((c, i) => (
                                    <React.Fragment key={c.href}>
                                        <span>{c.label}</span>
                                        {i < crumbs.length - 1 && <span className="sep" aria-hidden="true"> {currentSeparator.glyph} </span>}
                                    </React.Fragment>
                                ))}
                            </span>
                        </div>
                        <div className="line">
                            <span className="k">Generated</span>
                            <span className="v">{fmt(now, true)}</span>
                        </div>
                    </div>
                </section>

                {/* 5. SEO JSON-LD (read-only preview) */}
                <section className="card">
                    <header className="sectionHead">
                        <h3>Structured Data (JSON-LD)</h3>
                        <div className="hint">Preview of <code>BreadcrumbList</code>. Inject via <code>&lt;script type="application/ld+json"&gt;</code> in real apps.</div>
                    </header>
                    <pre className="code">{JSON.stringify(jsonLd, null, 2)}</pre>
                </section>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default ExampleBreadcrumbsPage;
