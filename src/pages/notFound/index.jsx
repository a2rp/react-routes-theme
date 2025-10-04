import React, { useMemo, useState, useRef, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

// date utils – consistent with your preferred formats
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

const NotFound = () => {
    const navigate = useNavigate();
    const { pathname, search, hash } = useLocation();
    const attemptedUrl = useMemo(() => `${pathname}${search}${hash}`, [pathname, search, hash]);
    const [q, setQ] = useState("");
    const [toast, setToast] = useState("");

    const printRef = useRef(null);
    const searchRef = useRef(null);

    useEffect(() => {
        const t = requestAnimationFrame(() => {
            try { searchRef.current?.focus({ preventScroll: true }); } catch { searchRef.current?.focus(); }
        });
        return () => cancelAnimationFrame(t);
    }, []);

    const doSearch = (e) => {
        e.preventDefault();
        const term = q.trim();
        if (!term) return;
        navigate(`/search?q=${encodeURIComponent(term)}`);
    };

    const back = () => navigate(-1);
    const home = () => navigate("/home");

    const copyUrl = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setToast("Link copied to clipboard");
        } catch {
            setToast("Unable to copy link");
        } finally {
            setTimeout(() => setToast(""), 2800);
        }
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const now = useMemo(() => new Date(), []);

    // curated deep links – display-only friendly
    const quick = [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/customers", label: "Customers" },
        { to: "/orders", label: "Orders" },
        { to: "/invoices", label: "Invoices" },
        { to: "/inventory", label: "Inventory" },
        { to: "/products", label: "Products" },
    ];

    const sitemap = [
        {
            title: "Sales & Billing",
            links: [
                { to: "/sales", label: "Sales Overview" },
                { to: "/orders", label: "Orders" },
                { to: "/sales/quotes", label: "Quotes" },
                { to: "/invoices", label: "Invoices" },
                { to: "/receipts", label: "Receipts" },
                { to: "/invoices/credit-notes", label: "Credit Notes" },
            ],
        },
        {
            title: "Catalog",
            links: [
                { to: "/products", label: "All Products" },
                { to: "/categories", label: "Categories" },
                { to: "/products/brands", label: "Brands" },
                { to: "/products/attributes", label: "Attributes" },
                { to: "/products/price-lists", label: "Price Lists" },
                { to: "/medicines", label: "Medicines" },
            ],
        },
        {
            title: "Operations",
            links: [
                { to: "/inventory", label: "Inventory" },
                { to: "/inventory/lots", label: "Lots" },
                { to: "/inventory/batches", label: "Batches" },
                { to: "/shipments", label: "Shipments" },
                { to: "/vendors", label: "Vendors" },
                { to: "/purchase-orders", label: "Purchase Orders" },
            ],
        },
        {
            title: "Reports & Finance",
            links: [
                { to: "/reports", label: "All Reports" },
                { to: "/reports/sales", label: "Sales" },
                { to: "/reports/inventory", label: "Inventory" },
                { to: "/finance", label: "Finance Overview" },
                { to: "/finance/profit-loss", label: "Profit & Loss" },
                { to: "/finance/balance-sheet", label: "Balance Sheet" },
            ],
        },
        {
            title: "Admin & Settings",
            links: [
                { to: "/admin/users", label: "Users" },
                { to: "/admin/roles", label: "Roles" },
                { to: "/settings", label: "Settings" },
                { to: "/settings/appearance", label: "Appearance" },
                { to: "/changelog", label: "Changelog" },
                { to: "/roadmap", label: "Roadmap" },
            ],
        },
        {
            title: "Help",
            links: [
                { to: "/help", label: "Help Center" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
                { to: "/feedback", label: "Feedback" },
            ],
        },
    ];

    return (
        <Styled.Wrapper className="container">
            {/* print rules – your exact snippet */}
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

            {toast ? <Styled.Toast role="status" aria-live="polite">{toast}</Styled.Toast> : null}

            <Styled.Hero className="card">
                <div className="mark">
                    {/* inline SVG – minimal, no external deps */}
                    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
                        <defs>
                            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="var(--accent)" />
                                <stop offset="1" stopColor="rgba(90,169,255,0.5)" />
                            </linearGradient>
                        </defs>
                        <circle cx="60" cy="60" r="52" fill="url(#g1)" opacity="0.15" />
                        <path d="M35 70 L50 50 L65 70 L85 45" stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="copy">
                    <div className="eyebrow">Error</div>
                    <h1>
                        <span className="num">404</span> Page not found
                    </h1>
                    <p className="muted">
                        The page you’re looking for doesn’t exist, moved, or the URL was mistyped.
                        Use search or jump to a popular section below.
                    </p>

                    <form className="search" onSubmit={doSearch}>
                        <input
                            ref={searchRef}
                            type="text"
                            placeholder="Search the app…"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            aria-label="Search"
                        />
                        <button className="btnPrimary" type="submit" title="Search">
                            Search
                        </button>
                    </form>

                    <div className="actions">
                        <button className="btnGhost" onClick={back} title="Go back">Go Back</button>
                        <button className="btnPrimary" onClick={home} title="Go home">Go Home</button>
                        <button className="btnGhost" onClick={copyUrl} title="Copy URL">Copy Link</button>
                        <NavLink className="btnGhost" to="/feedback" title="Report this broken link">Report</NavLink>
                        <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    </div>
                </div>
            </Styled.Hero>

            <Styled.PanelGrid>
                <section className="card quick">
                    <header>
                        <h3>Quick destinations</h3>
                    </header>
                    <div className="links">
                        {quick.map((x) => (
                            <NavLink key={x.to} to={x.to} className="chip" title={x.label}>{x.label}</NavLink>
                        ))}
                    </div>
                </section>

                <section className="card info" id="search-print-area" ref={printRef}>
                    <header>
                        <h3>Request details</h3>
                    </header>
                    <div className="rows">
                        <div className="row">
                            <div className="k">Attempted URL</div>
                            <div className="v">{attemptedUrl || "/"}</div>
                        </div>
                        <div className="row">
                            <div className="k">Timestamp</div>
                            <div className="v">{fmt(now, true)}</div>
                        </div>
                        <div className="row">
                            <div className="k">Referrer</div>
                            <div className="v">{document.referrer || "—"}</div>
                        </div>
                    </div>
                    <div className="foot">
                        <NavLink to="/help" className="btnGhost" title="Help Center">Help Center</NavLink>
                        <NavLink to="/contact" className="btnGhost" title="Contact">Contact</NavLink>
                    </div>
                </section>

                <section className="card map">
                    <header>
                        <h3>Sitemap (popular areas)</h3>
                    </header>
                    <div className="cols">
                        {sitemap.map((group) => (
                            <div className="col" key={group.title}>
                                <h4>{group.title}</h4>
                                <ul>
                                    {group.links.map((l) => (
                                        <li key={l.to}><NavLink to={l.to}>{l.label}</NavLink></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </Styled.PanelGrid>
        </Styled.Wrapper>
    );
};

export default NotFound;
