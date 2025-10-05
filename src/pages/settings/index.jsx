import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Styled } from "./styled";

/** tiny date utils for required formats */
const pad = (n) => String(n).padStart(2, "0");
const fmtDateOnly = (iso) => {
    const d = new Date(iso);
    return d.toDateString(); // e.g. "Sat Oct 04 2025"
};
const fmtTimeOnly = (iso) => {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDateOnly(iso)} ${fmtTimeOnly(iso)}`;

const BUILD_ISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
const COMMIT_ISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : BUILD_ISO;

const SettingsOverview = () => {
    const [demoLockOpen, setDemoLockOpen] = useState(false);

    const meta = useMemo(
        () => [
            { label: "Build", value: fmtDateTime(BUILD_ISO) },
            { label: "Last Commit", value: fmtDateTime(COMMIT_ISO) },
            { label: "Base Path", value: "/react-routes-theme" },
            { label: "Mode", value: "Demo (Display-only)" },
        ],
        []
    );

    const quickShortcuts = [
        { to: "/settings/appearance", label: "Appearance" },
        { to: "/settings/profile", label: "Profile" },
        { to: "/settings/notifications", label: "Notifications" },
        { to: "/settings/tokens", label: "API Tokens" },
        { to: "/settings/backups", label: "Backups" },
        { to: "/settings/print-templates", label: "Print Templates" },
    ];

    const sections = [
        {
            title: "Account",
            links: [
                { to: "/settings/profile", label: "Profile" },
                { to: "/settings/billing", label: "Billing" },
                { to: "/settings/notifications", label: "Notifications" },
                { to: "/settings/backups", label: "Backups" },
            ],
            note: "Manage your profile, subscription preferences, notifications and backups.",
            stats: [
                { k: "Profiles", v: "1 active" },
                { k: "Backup Plans", v: "Daily" },
                { k: "Alerts", v: "3 rules" },
            ],
        },
        {
            title: "Appearance",
            links: [
                { to: "/settings/appearance", label: "Theme & Appearance" },
                { to: "/settings/print-templates", label: "Print Templates" },
                { to: "/examples/theme", label: "Theme Tokens Demo" },
            ],
            note: "Fonts, accents, tokens and print layouts.",
            stats: [
                { k: "Theme", v: "Auto" },
                { k: "Tokens", v: "Base + Overrides" },
                { k: "Print Presets", v: "2" },
            ],
        },
        {
            title: "Catalog & Regional",
            links: [
                { to: "/settings/tax", label: "Tax" },
                { to: "/settings/units", label: "Units of Measure" },
                { to: "/settings/currencies", label: "Currencies" },
                { to: "/settings/numbering", label: "Document Numbering" },
            ],
            note: "Tax rules, UOM, currency and numbering standards.",
            stats: [
                { k: "Taxes", v: "GST enabled" },
                { k: "Units", v: "12" },
                { k: "Currencies", v: "INR" },
            ],
        },
        {
            title: "Logistics",
            links: [
                { to: "/settings/warehouses", label: "Warehouses" },
                { to: "/settings/locations", label: "Locations" },
                { to: "/inventory/warehouses", label: "Inventory Warehouses" },
            ],
            note: "Warehouses, locations and inventory preferences.",
            stats: [
                { k: "Warehouses", v: "3" },
                { k: "Locations", v: "18" },
                { k: "Reorder", v: "Enabled" },
            ],
        },
        {
            title: "Integrations & Delivery",
            links: [
                { to: "/settings/webhooks", label: "Webhooks" },
                { to: "/admin/integrations", label: "Integrations" },
                { to: "/admin/email-templates", label: "Email Templates" },
                { to: "/admin/sms-templates", label: "SMS Templates" },
            ],
            note: "Connectors, hooks and communication templates.",
            stats: [
                { k: "Webhooks", v: "5" },
                { k: "Email Templates", v: "8" },
                { k: "SMS Templates", v: "4" },
            ],
        },
        {
            title: "Access & Security",
            links: [
                { to: "/admin/users", label: "Users" },
                { to: "/admin/roles", label: "Roles" },
                { to: "/admin/permissions", label: "Permissions" },
                { to: "/admin/feature-flags", label: "Feature Flags" },
            ],
            note: "Users, roles, permissions and feature toggles.",
            stats: [
                { k: "Users", v: "6" },
                { k: "Roles", v: "3" },
                { k: "Flags", v: "2 toggled" },
            ],
        },
        {
            title: "Finance",
            links: [
                { to: "/settings/billing", label: "Billing" },
                { to: "/finance/taxes", label: "Taxes" },
                { to: "/finance/gst-returns", label: "GST Returns" },
                { to: "/finance/ledgers", label: "Ledgers" },
            ],
            note: "Billing preferences and finance configuration.",
            stats: [
                { k: "Plan", v: "Pro" },
                { k: "Tax Regime", v: "GST" },
                { k: "Ledgers", v: "Read-only" },
            ],
        },
        {
            title: "Dev & System",
            links: [
                { to: "/settings/tokens", label: "API Tokens" },
                { to: "/admin/system-status", label: "System Status" },
                { to: "/settings/backups", label: "Backups" },
                { to: "/settings/webhooks", label: "Webhooks" },
            ],
            note: "Tokens, runtime health and data recovery.",
            stats: [
                { k: "Tokens", v: "2 active" },
                { k: "Backups", v: "Daily 02:00" },
                { k: "Status", v: "OK" },
            ],
        },
    ];

    const handlePrint = () => {
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => document.body.classList.remove("print-section-mode"), 0);
    };

    return (
        <>
            <Styled.Wrap>
                {/* Header */}
                <Styled.Header>
                    <div className="titleBlock">
                        <h1>Settings</h1>
                        <div className="sub">Central configuration hub for your workspace.</div>
                    </div>

                    <div className="actions">
                        <button
                            className="primary"
                            onClick={handlePrint}
                            title="Print this overview"
                        >
                            Print Overview
                        </button>

                        <button
                            className="ghost" onClick={() => setDemoLockOpen(true)}
                            aria-disabled="true"
                            data-demo-disabled="true"
                            title="Display-only demo"
                        >
                            Export All
                        </button>

                        <NavLink className="cta" to="/settings/appearance" title="Open theme settings">
                            Open Appearance
                        </NavLink>
                    </div>
                </Styled.Header>

                {/* Meta */}
                <Styled.Meta id="search-print-area">
                    {meta.map((m) => (
                        <div key={m.label} className="item">
                            <div className="k">{m.label}</div>
                            <div className="v">{m.value}</div>
                        </div>
                    ))}
                </Styled.Meta>

                {/* Shortcuts */}
                <Styled.Shortcuts>
                    {quickShortcuts.map((q) => (
                        <NavLink key={q.to} to={q.to} className="chip" title={q.label}>
                            {q.label}
                        </NavLink>
                    ))}
                </Styled.Shortcuts>

                {/* Stats row */}
                <Styled.StatsRow>
                    <div className="statCard">
                        <div className="k">Warehouses</div>
                        <div className="v">3</div>
                        <div className="hint">Configured across regions</div>
                    </div>
                    <div className="statCard">
                        <div className="k">Webhooks</div>
                        <div className="v">5</div>
                        <div className="hint">Delivery: 100%</div>
                    </div>
                    <div className="statCard">
                        <div className="k">Backups</div>
                        <div className="v">Daily</div>
                        <div className="hint">Last: {fmtDateTime(BUILD_ISO)}</div>
                    </div>
                    <div className="statCard">
                        <div className="k">Tokens</div>
                        <div className="v">2</div>
                        <div className="hint">Rotates monthly</div>
                    </div>
                </Styled.StatsRow>

                {/* Sections */}
                <Styled.Grid>
                    {sections.map((sec) => (
                        <section key={sec.title} className="card">
                            <header>
                                <h2>{sec.title}</h2>
                                <p className="note">{sec.note}</p>
                            </header>

                            <ul className="links">
                                {sec.links.map((l) => (
                                    <li key={l.to}>
                                        <NavLink to={l.to} className="link">
                                            <span className="arrow" aria-hidden>›</span>
                                            <span>{l.label}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            <div className="stats">
                                {sec.stats.map((s) => (
                                    <div key={s.k} className="kv">
                                        <div className="k">{s.k}</div>
                                        <div className="v">{s.v}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </Styled.Grid>

                {/* Explore more */}
                <Styled.Explore>
                    <div className="left">
                        <h3>Explore more</h3>
                        <p>Common destinations you might need while configuring the workspace.</p>
                    </div>
                    <div className="links">
                        <NavLink to="/products/attributes">Product Attributes</NavLink>
                        <NavLink to="/products/price-lists">Price Lists</NavLink>
                        <NavLink to="/categories">Categories</NavLink>
                        <NavLink to="/admin/system-status">System Status</NavLink>
                        <NavLink to="/admin/feature-flags">Feature Flags</NavLink>
                        <NavLink to="/reports/gst">GST Report</NavLink>
                        <NavLink to="/reports/finance">Finance Report</NavLink>
                        <NavLink to="/invoices">Invoices</NavLink>
                        <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                    </div>
                </Styled.Explore>

                {/* Footer actions */}
                <Styled.FooterActions>
                    <button
                        className="ghost" onClick={() => setDemoLockOpen(true)}
                        aria-disabled="true" data-demo-disabled="true"
                        title="Display-only demo"
                    >
                        Reset to Defaults
                    </button>

                    <NavLink to="/settings/webhooks" className="cta">Manage Webhooks</NavLink>
                    <NavLink to="/settings/print-templates" className="cta">Edit Print Templates</NavLink>
                    <NavLink to="/settings/tokens" className="cta">Create API Token</NavLink>
                </Styled.FooterActions>
            </Styled.Wrap>

            {/* Confirm/Demo Lock modal */}
            {demoLockOpen && (
                <Styled.ModalOverlay onClick={() => setDemoLockOpen(false)} aria-modal="true" role="dialog">
                    <Styled.Modal onClick={(e) => e.stopPropagation()}>
                        <h3>Demo mode</h3>
                        <p>This preview is display-only. Actions like Export or Reset are disabled.</p>
                        <div className="row">
                            <button className="primary" onClick={() => setDemoLockOpen(false)}>Got it</button>
                            <NavLink to="/settings/backups" className="cta">Open Backups</NavLink>
                        </div>
                    </Styled.Modal>
                </Styled.ModalOverlay>
            )}

            {/* Print CSS (exact as provided) */}
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
        </>
    );
};

export default SettingsOverview;
