import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as S from "./styled";

/** -------------------------------------------------------
 *  Tiny date util (global rule):
 *  - Date: Sat Oct 04 2025
 *  - Date+Time: Sat Oct 04 2025 15:38:20hrs
 *  - Time: 15:38:20hrs
 * ------------------------------------------------------ */
const WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MO = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (dLike) => {
    const d = new Date(dLike);
    return `${WD[d.getDay()]} ${MO[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (dLike) => {
    const d = new Date(dLike);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const fmtDateTime = (dLike) => `${fmtDate(dLike)} ${fmtTime(dLike)}`;

/** -------------------------------------------------------
 *  Demo fixtures (display-only)
 * ------------------------------------------------------ */
const signingSecret = "whsec_***_demo_only_***";
const webhooks = [
    {
        id: "wh_live_orders",
        name: "Orders: Created & Updated",
        url: "https://hooks.example-app.com/orders",
        events: ["order.created", "order.updated", "order.cancelled"],
        status: "active",
        createdAt: "2025-08-19T09:28:13+05:30",
        lastDeliveryAt: "2025-10-04T14:05:27+05:30",
        recentSuccess: 42,
        recentFail: 1,
        avgLatencyMs: 318
    },
    {
        id: "wh_billing_paid",
        name: "Billing: Invoice Paid",
        url: "https://hooks.example-app.com/invoices",
        events: ["invoice.paid", "invoice.refund"],
        status: "active",
        createdAt: "2025-07-05T12:41:10+05:30",
        lastDeliveryAt: "2025-10-03T19:44:10+05:30",
        recentSuccess: 27,
        recentFail: 0,
        avgLatencyMs: 261
    },
    {
        id: "wh_inventory_low",
        name: "Inventory: Low Stock Alerts",
        url: "https://hooks.example-app.com/alerts/inventory",
        events: ["inventory.low", "inventory.back-in-stock"],
        status: "paused",
        createdAt: "2025-04-22T10:11:00+05:30",
        lastDeliveryAt: "2025-09-28T11:12:48+05:30",
        recentSuccess: 8,
        recentFail: 0,
        avgLatencyMs: 402
    }
];

/** -------------------------------------------------------
 *  Local components
 * ------------------------------------------------------ */
function DemoConfirm({ open, title, body, onClose }) {
    if (!open) return null;
    return (
        <S.Modal role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <div className="overlay" onClick={onClose} />
            <div className="content" role="document">
                <h3 id="confirm-title">{title}</h3>
                <p className="muted">{body}</p>
                <div className="row">
                    <button onClick={onClose} className="primary">Okay</button>
                </div>
            </div>
        </S.Modal>
    );
}

export default function SettingsWebhooks() {
    const { pathname } = useLocation();
    const [copied, setCopied] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // ephemeral toast on copy
    const copySecret = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(signingSecret.replace("***", "xxxx"));
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
            // swallow; display-only page
        }
    }, []);

    // "demo only" action modal
    const demoGuard = useCallback(() => {
        setModalOpen(true);
    }, []);

    // print: only the table area
    const printWebhooks = useCallback(() => {
        const cls = "print-section-mode";
        document.body.classList.add(cls);
        window.print();
        setTimeout(() => document.body.classList.remove(cls), 300);
    }, []);

    // page crumbs (display)
    const crumbs = useMemo(() => ([
        { to: "/settings", label: "Settings" },
        { to: pathname, label: "Webhooks" },
    ]), [pathname]);

    useEffect(() => {
        // optional UX: focus the first actionable button for keyboard users
        const b = document.querySelector('button[data-focus="first"]');
        if (b) {
            try { b.focus({ preventScroll: true }); } catch { b.focus(); }
        }
    }, []);

    return (
        <S.Wrap>
            {/* Breadcrumbs */}
            <nav className="breadcrumbs" aria-label="Breadcrumb">
                {crumbs.map((c, i) => (
                    <span key={c.to}>
                        {i > 0 && <span className="sep">/</span>}
                        {i < crumbs.length - 1
                            ? <NavLink to={c.to}>{c.label}</NavLink>
                            : <span aria-current="page">{c.label}</span>}
                    </span>
                ))}
            </nav>

            {/* Header */}
            <header className="pagehead">
                <div>
                    <h1>Webhooks</h1>
                    <p className="muted">
                        Outbound event notifications to your endpoints. Review delivery health, subscribed events, and signing options.
                    </p>
                </div>
                <div className="head-actions">
                    <button onClick={demoGuard} data-focus="first" title="Demo: disabled">New Endpoint</button>
                    <button onClick={printWebhooks} className="ghost">Print</button>
                    <Link to="/help" className="ghost">Docs</Link>
                </div>
            </header>

            {/* Top summary */}
            <section className="grid-summ">
                <div className="card">
                    <div className="stat">
                        <div className="k">3</div>
                        <div className="l">Active Endpoints</div>
                    </div>
                    <div className="meta muted">Last delivery: {fmtDateTime("2025-10-04T14:05:27+05:30")}</div>
                </div>
                <div className="card">
                    <div className="stat">
                        <div className="k">~ 260–400ms</div>
                        <div className="l">Typical Latency</div>
                    </div>
                    <div className="meta muted">Window: {fmtDate("2025-09-28")} – {fmtDate("2025-10-04")}</div>
                </div>
                <div className="card secret">
                    <div>
                        <div className="label">Signing Secret</div>
                        <code className="secretCode">{signingSecret}</code>
                    </div>
                    <div className="actions">
                        <button onClick={copySecret} className="ghost" title="Copy to clipboard">Copy</button>
                        <button onClick={demoGuard} className="danger" title="Demo: disabled">Regenerate</button>
                    </div>
                    {copied && <div className="toast">Copied</div>}
                </div>
            </section>

            {/* Quick nav */}
            <section className="quick-links">
                <Link to="/settings/notifications">Notifications</Link>
                <Link to="/settings/tokens">API Tokens</Link>
                <Link to="/settings/backups">Backups</Link>
                <Link to="/tools/import-export">Import / Export</Link>
                <Link to="/reports">Reports</Link>
                <Link to="/admin/system-status">System Status</Link>
            </section>

            {/* Table */}
            <section className="tableWrap" id="search-print-area" aria-label="Webhook endpoints">
                <div className="toolbar">
                    <div className="left">
                        <strong>Endpoints</strong>
                        <span className="muted">Showing {webhooks.length}</span>
                    </div>
                    <div className="right">
                        <input type="search" placeholder="Filter by name or URL…" aria-label="Filter webhooks" />
                    </div>
                </div>

                <div className="table card">
                    <div className="thead">
                        <div>Name</div>
                        <div>URL</div>
                        <div>Events</div>
                        <div>Status</div>
                        <div>Deliveries</div>
                        <div>Last Delivery</div>
                        <div>Actions</div>
                    </div>

                    {webhooks.map((w) => (
                        <div className="trow" key={w.id}>
                            <div className="cell name">
                                <div className="title">{w.name}</div>
                                <div className="sub muted">{w.id} • Created {fmtDate(w.createdAt)}</div>
                            </div>

                            <div className="cell url">
                                <code className="mono">{w.url}</code>
                            </div>

                            <div className="cell events">
                                <div className="chips">
                                    {w.events.map((e) => <span className="chip" key={e}>{e}</span>)}
                                </div>
                            </div>

                            <div className="cell status">
                                <span className={`badge ${w.status}`}>{w.status}</span>
                            </div>

                            <div className="cell dsum">
                                <div className="mono">{w.recentSuccess} ok</div>
                                <div className="mono">{w.recentFail} fail</div>
                                <div className="muted">~{w.avgLatencyMs}ms</div>
                            </div>

                            <div className="cell when">
                                <div>{fmtDate(w.lastDeliveryAt)}</div>
                                <div className="muted">{fmtTime(w.lastDeliveryAt)}</div>
                            </div>

                            <div className="cell actions">
                                <button onClick={demoGuard} title="Demo: disabled">Test</button>
                                <button onClick={demoGuard} className="ghost" title="Demo: disabled">Disable</button>
                                <Link to="/settings/webhooks" className="ghost">Open</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Delivery samples */}
            <section className="grid-io">
                <div className="card">
                    <div className="tit">Sample Request</div>
                    <pre className="code">
                        {`POST /your-endpoint HTTP/1.1
Host: hooks.example-app.com
User-Agent: ReactRoutesTheme/1.0
Content-Type: application/json
X-Signature: t=1696418727,v1=hex-hmac-sha256

{"event":"order.created","data":{"id":"ORD-3001","total":1299.00}}`}
                    </pre>
                </div>

                <div className="card">
                    <div className="tit">Sample Verification (pseudo)</div>
                    <pre className="code">
                        {`const ok = verifyHmacSHA256({
  secret: "whsec_xxxx",
  payload: body,
  header: signatureHeader
});`}
                    </pre>
                </div>

                <div className="card">
                    <div className="tit">Retry Policy</div>
                    <ul className="muted">
                        <li>Immediate retry x1 on 5xx.</li>
                        <li>Exponential backoff thereafter.</li>
                        <li>Max attempts: 6 within 24 hours.</li>
                        <li>Timeout per request: 5s.</li>
                    </ul>
                </div>
            </section>

            {/* Footer nav */}
            <section className="footer-nav">
                <NavLink to="/settings">← Settings Home</NavLink>
                <NavLink to="/settings/notifications">Notifications</NavLink>
                <NavLink to="/settings/print-templates">Print Templates</NavLink>
                <NavLink to="/settings/appearance">Appearance</NavLink>
                <NavLink to="/settings/numbering">Numbering</NavLink>
                <NavLink to="/settings/webhooks">Webhooks</NavLink>
            </section>

            {/* Print CSS (exact spec) */}
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

            <DemoConfirm
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Unavailable in Demo"
                body="This is a display-only theme. Actions like creating, disabling, or regenerating secrets are turned off."
            />
        </S.Wrap>
    );
}
