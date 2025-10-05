import React, { useMemo, useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./styled";

/** --- Build metadata (from vite.config define) --- */
const BUILD_ISO =
    (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) ||
    new Date().toISOString();
const COMMIT_ISO =
    (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) ||
    new Date().toISOString();

/** --- Utilities for date/time formatting (required formats) --- */
const W = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function two(n) { return String(n).padStart(2, "0"); }
function formatDate(iso) {
    const d = new Date(iso);
    return `${W[d.getDay()]} ${M[d.getMonth()]} ${two(d.getDate())} ${d.getFullYear()}`;
}
function formatTime(iso) {
    const d = new Date(iso);
    return `${two(d.getHours())}:${two(d.getMinutes())}:${two(d.getSeconds())}hrs`;
}
function formatDateTime(iso) {
    return `${formatDate(iso)} ${formatTime(iso)}`;
}

/** --- Demo changelog fixtures (display-only) --- */
const CHANGELOG = [
    {
        version: "1.4.0",
        type: "minor",
        dateISO: "2025-10-04T12:21:36+05:30",
        summary: "Inventory transfers UX pass, reports polish, and print templates clean-up.",
        tags: ["Inventory", "Reports", "Print"],
        links: [
            { label: "Transfers", to: "/inventory/transfers" },
            { label: "Inventory Report", to: "/reports/inventory" },
            { label: "Print Templates", to: "/settings/print-templates" },
        ],
        highlights: [
            "New transfers overview with quick filters.",
            "Sticky totals row in inventory report.",
            "Print templates preview respects theme tokens.",
        ],
        fixes: [
            "Table header alignment on dense mode.",
            "Breadcrumb edge case for deep nested routes.",
        ],
        breaking: [],
    },
    {
        version: "1.3.3",
        type: "patch",
        dateISO: "2025-10-01T09:05:12+05:30",
        summary: "Accessibility tweaks and keyboard focus rings across nav & forms.",
        tags: ["A11y", "Forms", "Nav"],
        links: [
            { label: "Theme Demo", to: "/examples/theme" },
            { label: "Nav Search", to: "/examples/nav-search" },
            { label: "Form Demo", to: "/examples/form" },
        ],
        highlights: [
            "Focus-visible rings on all primary controls.",
            "Consistent aria-expanded on collapsible sections.",
        ],
        fixes: [
            "Minor padding jitter on inputs.",
            "Hover flicker on disabled buttons.",
        ],
        breaking: [],
    },
    {
        version: "1.3.0",
        type: "minor",
        dateISO: "2025-09-24T17:42:02+05:30",
        summary: "Customers detail header revamp and receipts list.",
        tags: ["Customers", "Receipts"],
        links: [
            { label: "Customers", to: "/customers" },
            { label: "Receipts", to: "/receipts" },
            { label: "Dashboard", to: "/dashboard" },
        ],
        highlights: [
            "New identity block with tags and quick actions.",
            "Receipts list page with statuses and deep links.",
        ],
        fixes: [
            "Avatar overlap at smaller widths.",
        ],
        breaking: [],
    },
    {
        version: "1.2.0",
        type: "minor",
        dateISO: "2025-09-10T13:15:20+05:30",
        summary: "Products & medicines catalog navigation with anchors and facets.",
        tags: ["Products", "Medicines", "Catalog"],
        links: [
            { label: "All Products", to: "/products" },
            { label: "Medicines", to: "/medicines" },
            { label: "HSN / GST", to: "/medicines/hsn-gst" },
        ],
        highlights: [
            "Grouped catalog sections with quick jump.",
            "Price list overview cards.",
        ],
        fixes: [
            "Tab order in filters.",
            "Empty state spacing in catalog facets.",
        ],
        breaking: [],
    },
    {
        version: "1.1.0",
        type: "minor",
        dateISO: "2025-08-25T10:00:00+05:30",
        summary: "Reports area baseline and finance pages wiring.",
        tags: ["Reports", "Finance"],
        links: [
            { label: "Reports Home", to: "/reports" },
            { label: "Finance Overview", to: "/finance" },
            { label: "Profit & Loss", to: "/finance/profit-loss" },
        ],
        highlights: [
            "Report cards with descriptions and quick filters.",
            "Finance nav & stubs for ledgers, journals, COA.",
        ],
        fixes: ["Copy link helper on report rows."],
        breaking: [],
    },
    {
        version: "1.0.0",
        type: "major",
        dateISO: "2025-08-01T09:00:00+05:30",
        summary: "Initial public demo with manual routes and premium theme.",
        tags: ["Core", "Theme", "Routing"],
        links: [
            { label: "Home", to: "/home" },
            { label: "About", to: "/about" },
            { label: "Settings", to: "/settings" },
        ],
        highlights: [
            "Full manual routes map with lazy imports.",
            "Theme tokens and layout primitives.",
            "Sidebar search and collapsible groups.",
        ],
        fixes: [],
        breaking: ["Renamed base path to /react-routes-theme/ for GH Pages."],
    },
];

/** --- Filter tabs --- */
const TABS = [
    { key: "all", label: "All" },
    { key: "major", label: "Major" },
    { key: "minor", label: "Minor" },
    { key: "patch", label: "Patch" },
];

/** --- Main component --- */
export default function ChangelogPage() {
    const { hash } = useLocation();
    const nav = useNavigate();
    const [q, setQ] = useState("");
    const [tab, setTab] = useState("all");
    const [showConfirm, setShowConfirm] = useState(false);
    const printAreaRef = useRef(null);

    const list = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return CHANGELOG.filter((r) => {
            const typeOK = tab === "all" || r.type === tab;
            if (!typeOK) return false;
            if (!tokens.length) return true;
            const hay = [
                r.version,
                r.type,
                r.summary,
                r.tags.join(" "),
                r.highlights.join(" "),
                r.fixes.join(" "),
                r.breaking.join(" "),
            ]
                .join(" ")
                .toLowerCase();
            return tokens.every((t) => hay.includes(t));
        });
    }, [q, tab]);

    const jumpTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        nav(`#${id}`, { replace: true });
    };

    useEffect(() => {
        if (hash && hash.startsWith("#")) {
            const id = hash.slice(1);
            const t = setTimeout(() => jumpTo(id), 50);
            return () => clearTimeout(t);
        }
    }, [hash]);

    const idFor = (v) => `v-${v.replace(/\./g, "-")}`;
    const copyLink = async (id) => {
        try {
            const url = new URL(window.location.href);
            url.hash = `#${id}`;
            await navigator.clipboard.writeText(url.toString());
        } catch { }
    };

    /** Export JSON (display-only, no storage) */
    const exportJSON = () => {
        const blob = new Blob([JSON.stringify(CHANGELOG, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "changelog.json";
        a.click();
        URL.revokeObjectURL(a.href);
    };

    /** Print only the changelog area */
    const printSection = () => {
        document.body.classList.add("print-section-mode");
        try {
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 0);
        }
    };

    return (
        <S.Page>
            {/* print CSS for just-this-section */}
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

            <S.Header>
                <div className="l">
                    <h1>Changelog</h1>
                    <div className="meta">
                        <span>Build: {formatDateTime(BUILD_ISO)}</span>
                        <span>Last Commit: {formatDateTime(COMMIT_ISO)}</span>
                        <span>Releases: {CHANGELOG.length}</span>
                    </div>
                </div>
                <div className="r">
                    <S.KbdRow>
                        <S.Kbd>J</S.Kbd><span>↓ Next</span>
                        <S.Kbd>K</S.Kbd><span>↑ Prev</span>
                        <S.Kbd>/</S.Kbd><span>Search</span>
                    </S.KbdRow>
                    <S.Toolbar>
                        <button onClick={() => jumpTo(idFor(CHANGELOG[0].version))} title="Jump to latest">Latest</button>
                        <button onClick={exportJSON} title="Download changelog as JSON">Export</button>
                        <button onClick={printSection} title="Print this page">Print</button>
                    </S.Toolbar>
                </div>
            </S.Header>

            <S.Filters>
                <div className="tabs">
                    {TABS.map((t) => (
                        <button
                            key={t.key}
                            className={tab === t.key ? "active" : ""}
                            onClick={() => setTab(t.key)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
                <div className="search">
                    <input
                        placeholder="Search releases, tags, notes…"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        aria-label="Search changelog"
                    />
                </div>
            </S.Filters>

            <S.Layout>
                {/* Side index */}
                <S.SideIndex>
                    <div className="box">
                        <div className="title">Versions</div>
                        <div className="list">
                            {CHANGELOG.map((r) => (
                                <button key={r.version} onClick={() => jumpTo(idFor(r.version))}>
                                    <span className="v">{r.version}</span>
                                    <span className="d">{formatDate(r.dateISO)}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="box">
                        <div className="title">Quick Links</div>
                        <div className="links">
                            <Link to="/home">Home</Link>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/reports">Reports</Link>
                            <Link to="/reports/sales">Sales Report</Link>
                            <Link to="/inventory">Inventory</Link>
                            <Link to="/inventory/transfers">Transfers</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/medicines">Medicines</Link>
                            <Link to="/finance">Finance</Link>
                            <Link to="/finance/profit-loss">Profit &amp; Loss</Link>
                            <Link to="/invoices">Invoices</Link>
                            <Link to="/receipts">Receipts</Link>
                            <Link to="/admin/audit-log">Audit Log</Link>
                            <Link to="/settings">Settings</Link>
                            <Link to="/settings/print-templates">Print Templates</Link>
                            <Link to="/help">Help Center</Link>
                            <Link to="/changelog">Changelog</Link>
                            <Link to="/roadmap">Roadmap</Link>
                        </div>
                    </div>
                </S.SideIndex>

                {/* Main timeline (print target) */}
                <S.Main id="search-print-area" ref={printAreaRef}>
                    {list.map((r, idx) => {
                        const id = idFor(r.version);
                        const latest = idx === 0 && (!hash || hash === `#${idFor(CHANGELOG[0].version)}`);
                        return (
                            <S.Card id={id} key={r.version} data-type={r.type}>
                                <S.CardHeader>
                                    <div className="lh">
                                        <h2>
                                            <span className="version">{r.version}</span>
                                            {latest && <S.Badge>Latest</S.Badge>}
                                            {r.type === "major" && <S.Badge tone="solid">Major</S.Badge>}
                                            {r.type === "minor" && <S.Badge tone="line">Minor</S.Badge>}
                                            {r.type === "patch" && <S.Badge tone="soft">Patch</S.Badge>}
                                        </h2>
                                        <div className="meta">
                                            <span className="date">{formatDate(r.dateISO)}</span>
                                            <span className="time">{formatTime(r.dateISO)}</span>
                                            {r.tags.map((t) => <S.Tag key={t}>{t}</S.Tag>)}
                                        </div>
                                    </div>
                                    <div className="rh">
                                        <button onClick={() => copyLink(id)} title="Copy deep link">Copy Link</button>
                                        <button onClick={() => setShowConfirm(true)} disabled title="Revert (demo)">
                                            Revert
                                        </button>
                                    </div>
                                </S.CardHeader>

                                <S.Summary>{r.summary}</S.Summary>

                                {!!r.highlights.length && (
                                    <S.Section>
                                        <div className="st">Highlights</div>
                                        <ul>
                                            {r.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                        </ul>
                                    </S.Section>
                                )}

                                {!!r.fixes.length && (
                                    <S.Section>
                                        <div className="st">Fixes</div>
                                        <ul>
                                            {r.fixes.map((h, i) => <li key={i}>{h}</li>)}
                                        </ul>
                                    </S.Section>
                                )}

                                {!!r.breaking.length && (
                                    <S.Section>
                                        <div className="st">Breaking</div>
                                        <ul>
                                            {r.breaking.map((h, i) => <li key={i}>{h}</li>)}
                                        </ul>
                                    </S.Section>
                                )}

                                {!!r.links.length && (
                                    <S.LinksRow>
                                        {r.links.map((lnk, i) => (
                                            <Link key={i} to={lnk.to} className="deep-link">
                                                <span className="dot" aria-hidden="true">•</span> {lnk.label}
                                            </Link>
                                        ))}
                                    </S.LinksRow>
                                )}
                            </S.Card>
                        );
                    })}

                    {list.length === 0 && (
                        <S.Empty>
                            <div className="emoji" aria-hidden>¯\_(ツ)_/¯</div>
                            <div className="title">No releases match your filters</div>
                            <div className="hint">
                                Try switching tab to <button onClick={() => setTab("all")}>All</button> or clear search.
                            </div>
                        </S.Empty>
                    )}
                </S.Main>
            </S.Layout>

            {/* Demo confirm modal (non-blocking, custom) */}
            {showConfirm && (
                <S.Modal onClick={() => setShowConfirm(false)} role="dialog" aria-modal="true" aria-label="Demo notice">
                    <div className="card" onClick={(e) => e.stopPropagation()}>
                        <div className="head">Action disabled in demo</div>
                        <div className="body">
                            This is a display-only preview. Destructive actions are disabled.
                        </div>
                        <div className="foot">
                            <button onClick={() => setShowConfirm(false)}>Close</button>
                        </div>
                    </div>
                </S.Modal>
            )}
        </S.Page>
    );
}
