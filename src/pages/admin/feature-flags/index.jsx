import React, { useMemo, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./styled";

/** date formatting helpers (spec you gave) */
const fmt = {
    date: (iso) => {
        if (!iso) return "";
        const d = new Date(iso);
        return d.toDateString(); // e.g., "Sat Oct 04 2025"
    },
    dateTime: (iso) => {
        if (!iso) return "";
        const d = new Date(iso);
        const date = d.toDateString();
        const time = [d.getHours(), d.getMinutes(), d.getSeconds()]
            .map((n) => String(n).padStart(2, "0"))
            .join(":");
        return `${date} ${time}hrs`; // "Sat Oct 04 2025 15:38:20hrs"
    },
    time: (iso) => {
        if (!iso) return "";
        const d = new Date(iso);
        const time = [d.getHours(), d.getMinutes(), d.getSeconds()]
            .map((n) => String(n).padStart(2, "0"))
            .join(":");
        return `${time}hrs`; // "15:38:20hrs"
    },
};

/** display-only fixtures; expand later from your global repo layer when ready */
const FIX_FLAGS = [
    {
        key: "checkout_new_ui",
        name: "Checkout — New UI",
        owner: "Platform",
        tags: ["ui", "checkout", "experiment"],
        updatedAt: "2025-10-04T15:38:20+05:30",
        description:
            "Modernized checkout experience. Includes condensed address block, smart UPI hints, and order summary in a sticky rail.",
        env: {
            production: { state: "on", rollout: 25, note: "limited rollout" },
            staging: { state: "on", rollout: 100 },
            development: { state: "on", rollout: 100 },
        },
        links: [
            { label: "Dashboard", to: "/dashboard" },
            { label: "Orders", to: "/orders" },
            { label: "Reports — Sales", to: "/reports/sales" },
        ],
    },
    {
        key: "rx_batch_expiry_banner",
        name: "RX — Batch Expiry Banner",
        owner: "Pharmacy",
        tags: ["rx", "compliance", "expiry"],
        updatedAt: "2025-10-04T11:22:01+05:30",
        description:
            "Shows an inline banner on product detail and order lines if batch expiry is near. Reads from inventory lots.",
        env: {
            production: { state: "on", rollout: 100 },
            staging: { state: "on", rollout: 100 },
            development: { state: "on", rollout: 100 },
        },
        links: [
            { label: "Inventory — Lots", to: "/inventory/lots" },
            { label: "Medicines — Expiry Tracker", to: "/medicines/expiry-tracker" },
            { label: "Reports — Inventory", to: "/reports/inventory" },
        ],
    },
    {
        key: "reports_async_export",
        name: "Reports — Async Export",
        owner: "Reporting",
        tags: ["reports", "export", "queue"],
        updatedAt: "2025-10-04T09:05:55+05:30",
        description:
            "Queues heavy exports and notifies through the notification center. Visual progress only; no background worker in demo.",
        env: {
            production: { state: "off", rollout: 0 },
            staging: { state: "on", rollout: 100 },
            development: { state: "on", rollout: 100 },
        },
        links: [
            { label: "Reports — Overview", to: "/reports" },
            { label: "Notifications", to: "/notifications" },
            { label: "Admin — System Status", to: "/admin/system-status" },
        ],
    },
    {
        key: "inventory_fast_search",
        name: "Inventory — Fast Search",
        owner: "Supply Chain",
        tags: ["inventory", "search"],
        updatedAt: "2025-10-03T19:40:08+05:30",
        description:
            "Streamlined lookups across SKU, barcode, and batch fields on a unified field. Showcase-only; no API index.",
        env: {
            production: { state: "on", rollout: 60 },
            staging: { state: "on", rollout: 100 },
            development: { state: "on", rollout: 100 },
        },
        links: [
            { label: "Inventory — Overview", to: "/inventory" },
            { label: "Products", to: "/products" },
            { label: "Tools — Playground", to: "/tools/playground" },
        ],
    },
    {
        key: "gst_rounding_fix",
        name: "Finance — GST Rounding Fix",
        owner: "Finance",
        tags: ["finance", "gst", "compliance"],
        updatedAt: "2025-10-02T14:10:11+05:30",
        description:
            "Displays corrected rounding at line-level for invoice previews. Values are pre-computed in fixtures.",
        env: {
            production: { state: "on", rollout: 100 },
            staging: { state: "on", rollout: 100 },
            development: { state: "on", rollout: 100 },
        },
        links: [
            { label: "Invoices", to: "/invoices" },
            { label: "Finance — GST Returns", to: "/finance/gst-returns" },
            { label: "Reports — GST", to: "/reports/gst" },
        ],
    },
    {
        key: "patients_kiosk_mode",
        name: "Patients — Kiosk Mode",
        owner: "Clinic",
        tags: ["patients", "ux", "kiosk"],
        updatedAt: "2025-10-01T09:00:00+05:30",
        description:
            "Large-format UI for front-desk kiosks with simplified touch targets. Demo only.",
        env: {
            production: { state: "off", rollout: 0 },
            staging: { state: "off", rollout: 0 },
            development: { state: "on", rollout: 100 },
        },
        links: [
            { label: "Patients", to: "/patients" },
            { label: "Appointments — Calendar", to: "/appointments/calendar" },
            { label: "Settings — Appearance", to: "/settings/appearance" },
        ],
    },
];

/** small toast */
function useToaster() {
    const [note, setNote] = useState("");
    useEffect(() => {
        if (!note) return;
        const t = setTimeout(() => setNote(""), 1800);
        return () => clearTimeout(t);
    }, [note]);
    return { note, push: setNote };
}

/** custom modal (no browser alert) */
function ConfirmModal({ open, title, message, onClose }) {
    if (!open) return null;
    return (
        <S.ModalBackdrop role="dialog" aria-modal="true">
            <S.ModalCard className="card">
                <header>
                    <h3>{title}</h3>
                </header>
                <section>
                    <p>{message}</p>
                    <S.LinksRow>
                        <NavLink to="/help">Help Center</NavLink>
                        <NavLink to="/feedback">Feedback</NavLink>
                        <NavLink to="/roadmap">Roadmap</NavLink>
                    </S.LinksRow>
                </section>
                <footer>
                    <button onClick={onClose} autoFocus>Close</button>
                </footer>
            </S.ModalCard>
        </S.ModalBackdrop>
    );
}

export default function AdminFeatureFlags() {
    const navigate = useNavigate();
    const [env, setEnv] = useState("production");
    const [q, setQ] = useState("");
    const [tag, setTag] = useState("all");
    const [showDemoModal, setShowDemoModal] = useState(false);
    const { note, push } = useToaster();

    const allTags = useMemo(() => {
        const bag = new Set();
        FIX_FLAGS.forEach(f => f.tags.forEach(t => bag.add(t)));
        return ["all", ...Array.from(bag)];
    }, []);

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return FIX_FLAGS.filter((f) => {
            const tokenMatch =
                tokens.length === 0 ||
                tokens.every((t) =>
                    (f.key + " " + f.name + " " + f.owner + " " + f.tags.join(" ")).toLowerCase().includes(t)
                );
            const tagMatch = tag === "all" || f.tags.includes(tag);
            return tokenMatch && tagMatch;
        });
    }, [q, tag]);

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        // only print the grid area
        window.print();
        setTimeout(() => {
            document.body.classList.remove("print-section-mode");
        }, 200);
    };

    const copyDeepLink = (flagKey) => {
        const url = new URL(window.location.href);
        url.pathname = "/admin/feature-flags";
        url.search = `?flag=${encodeURIComponent(flagKey)}&env=${encodeURIComponent(env)}`;
        const text = url.toString();
        navigator?.clipboard?.writeText(text).then(
            () => push("Deep link copied"),
            () => push("Link ready")
        );
    };

    // optional: read deep link (flag param) and focus that row
    const [highlightKey, setHighlightKey] = useState("");
    useEffect(() => {
        const p = new URLSearchParams(window.location.search);
        const fk = p.get("flag");
        const e = p.get("env");
        if (e && ["production", "staging", "development"].includes(e)) setEnv(e);
        if (fk) setHighlightKey(fk);
        const t = setTimeout(() => setHighlightKey(""), 2500);
        return () => clearTimeout(t);
    }, []);

    return (
        <S.Wrap>
            <S.Header>
                <div className="left">
                    <h1>Feature Flags</h1>
                    <div className="meta">
                        <span>Environment</span>
                        <S.Tabs role="tablist" aria-label="Environment">
                            {["production", "staging", "development"].map((e) => (
                                <button
                                    key={e}
                                    role="tab"
                                    aria-selected={env === e}
                                    className={env === e ? "active" : ""}
                                    onClick={() => setEnv(e)}
                                    title={`Switch to ${e}`}
                                >
                                    {e[0].toUpperCase() + e.slice(1)}
                                </button>
                            ))}
                        </S.Tabs>
                    </div>
                </div>

                <S.QuickLinks>
                    <NavLink to="/admin/system-status">System Status</NavLink>
                    <NavLink to="/admin/audit-log">Audit Log</NavLink>
                    <NavLink to="/admin/users">Users</NavLink>
                    <NavLink to="/admin/roles">Roles</NavLink>
                    <NavLink to="/settings/appearance">Appearance</NavLink>
                    <NavLink to="/tools/theme-tokens">Theme Tokens</NavLink>
                    <NavLink to="/reports">Reports</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </S.QuickLinks>
            </S.Header>

            <S.Toolbar className="card">
                <div className="search">
                    <input
                        type="text"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search flags, owners, tags…"
                        aria-label="Search feature flags"
                    />
                </div>

                <div className="filters">
                    <label className="select">
                        <span>Tag</span>
                        <select value={tag} onChange={(e) => setTag(e.target.value)}>
                            {allTags.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </label>
                    <button onClick={printSection} title="Print list">Print</button>
                    <button onClick={() => setShowDemoModal(true)} title="Demo only">
                        Request Change
                    </button>
                </div>
            </S.Toolbar>

            {/* print-only styles (your exact snippet) */}
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

            <S.Grid id="search-print-area">
                <S.StickyHeader>
                    <div>Flag</div>
                    <div>Owner</div>
                    <div>Status</div>
                    <div>Rollout</div>
                    <div>Tags</div>
                    <div>Updated</div>
                    <div>Links</div>
                    <div>Actions</div>
                </S.StickyHeader>

                {filtered.map((f) => {
                    const info = f.env[env] || { state: "off", rollout: 0 };
                    const on = info.state === "on";
                    return (
                        <S.Row
                            className="card"
                            key={f.key}
                            data-highlight={highlightKey === f.key ? "true" : "false"}
                        >
                            <div className="flag">
                                <div className="top">
                                    <S.Key>{f.key}</S.Key>
                                    <S.StatePill data-on={on ? "true" : "false"}>
                                        {on ? "On" : "Off"}
                                    </S.StatePill>
                                </div>
                                <div className="name">{f.name}</div>
                                <div className="desc">{f.description}</div>
                            </div>

                            <div className="owner">
                                <NavLink to="/admin/users" title="Open Users">{f.owner}</NavLink>
                            </div>

                            <div className="status">
                                <S.EnvDot data-env={env} />
                                <span className="env">{env}</span>
                            </div>

                            <div className="rollout">
                                <S.Meter aria-label="Rollout percentage">
                                    <span style={{ width: `${info.rollout}%` }} />
                                </S.Meter>
                                <span className="pct">{info.rollout}%</span>
                            </div>

                            <div className="tags">
                                {f.tags.map((t) => (
                                    <NavLink key={t} to={`/reports`} className="tag" title={`Filter by ${t}`}>{t}</NavLink>
                                ))}
                            </div>

                            <div className="updated">
                                <div className="date">{fmt.date(f.updatedAt)}</div>
                                <div className="time">{fmt.time(f.updatedAt)}</div>
                            </div>

                            <div className="links">
                                {f.links.map((lnk, i) => (
                                    <NavLink key={i} to={lnk.to} className="link">{lnk.label}</NavLink>
                                ))}
                            </div>

                            <div className="actions">
                                <button
                                    className="ghost"
                                    onClick={() => copyDeepLink(f.key)}
                                    title="Copy deep link"
                                >
                                    Copy Link
                                </button>
                                <button
                                    className="toggle"
                                    onClick={() => setShowDemoModal(true)}
                                    title="Demo only"
                                >
                                    Toggle
                                </button>
                            </div>
                        </S.Row>
                    );
                })}
            </S.Grid>

            {note && <S.Toast role="status" aria-live="polite">{note}</S.Toast>}
            <ConfirmModal
                open={showDemoModal}
                title="Action disabled in demo"
                message="This is a display-only preview. Use the navigation links to explore related areas."
                onClose={() => setShowDemoModal(false)}
            />
        </S.Wrap>
    );
}
