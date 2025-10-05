import React, { useMemo, useState, useEffect, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdNotificationsActive,
    MdMarkEmailUnread,
    MdLocalShipping,
    MdInventory,
    MdReceiptLong,
    MdPaid,
    MdSystemUpdateAlt,
    MdFilterList,
    MdOutlineDownload,
    MdOutlinePrint,
    MdSearch,
    MdOpenInNew,
    MdChevronRight,
    MdOutlineClearAll,
    MdOutlinePushPin,
} from "react-icons/md";

/** Date format helpers (required formats)
 *  - Date only:        Sat Oct 04 2025
 *  - Date + time:      Sat Oct 04 2025 15:38:20hrs
 *  - Time only:        15:38:20hrs
 */
const toDateOnly = (iso) => new Date(iso).toDateString();
const toTimeOnly = (iso) => {
    const d = new Date(iso);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
};
const toDateTime = (iso) => `${new Date(iso).toDateString()} ${toTimeOnly(iso)}`;

/** Demo fixtures (display-only) */
const DEMO_NOTIFICATIONS = [
    {
        id: "N-10031",
        kind: "order",
        title: "New order received",
        message: "Order ORD-3008 placed by CUST-1001.",
        createdAt: "2025-10-06T09:12:40+05:30",
        status: "unread",
        pinned: true,
        links: [
            { label: "View Order", to: "/orders/ORD-3008" },
            { label: "Customer", to: "/customers/CUST-1001" },
            { label: "Orders", to: "/orders" },
        ],
    },
    {
        id: "N-10030",
        kind: "invoice",
        title: "Invoice generated",
        message: "Invoice INV-2031 created for ORD-3007.",
        createdAt: "2025-10-06T08:05:11+05:30",
        status: "unread",
        links: [
            { label: "View Invoice", to: "/invoices/INV-2031" },
            { label: "Print", to: "/invoices/INV-2031/print" },
            { label: "Invoices", to: "/invoices" },
        ],
    },
    {
        id: "N-10029",
        kind: "shipment",
        title: "Shipment dispatched",
        message: "SHP-8823 handed over to BlueDart.",
        createdAt: "2025-10-05T18:41:27+05:30",
        status: "read",
        links: [
            { label: "Track", to: "/shipments/SHP-8823/track" },
            { label: "All Shipments", to: "/shipments" },
            { label: "Labels", to: "/shipments/SHP-8823/labels" },
        ],
    },
    {
        id: "N-10028",
        kind: "inventory",
        title: "Low stock alert: AMOX-500",
        message: "Reorder suggested for MED-AMOX-500 (stock ≤ threshold).",
        createdAt: "2025-10-05T10:22:03+05:30",
        status: "unread",
        links: [
            { label: "Inventory", to: "/inventory" },
            { label: "Reorder", to: "/inventory/reorder" },
            { label: "Medicines", to: "/medicines" },
        ],
    },
    {
        id: "N-10027",
        kind: "finance",
        title: "Payment received",
        message: "₹ 12,500 received against INV-2025.",
        createdAt: "2025-10-04T20:11:02+05:30",
        status: "read",
        links: [
            { label: "Payments", to: "/sales/payments" },
            { label: "Invoice INV-2025", to: "/invoices/INV-2025" },
            { label: "Finance", to: "/finance" },
        ],
    },
    {
        id: "N-10026",
        kind: "system",
        title: "System update",
        message: "New print template presets available.",
        createdAt: "2025-10-03T09:03:55+05:30",
        status: "read",
        links: [
            { label: "Print Templates", to: "/settings/print-templates" },
            { label: "Changelog", to: "/changelog" },
            { label: "Roadmap", to: "/roadmap" },
        ],
    },
    {
        id: "N-10025",
        kind: "mention",
        title: "@You on PO-7742",
        message: "Ravi mentioned you in Purchase Order PO-7742.",
        createdAt: "2025-10-02T11:47:29+05:30",
        status: "unread",
        links: [
            { label: "Open PO", to: "/purchase-orders/PO-7742" },
            { label: "Vendors", to: "/vendors" },
            { label: "Purchasing", to: "/purchase-orders" },
        ],
    },
    {
        id: "N-10024",
        kind: "inventory",
        title: "Expiry tracker",
        message: "5 lots expiring in 30 days.",
        createdAt: "2025-10-01T08:18:14+05:30",
        status: "read",
        links: [
            { label: "Expiry Tracker", to: "/medicines/expiry-tracker" },
            { label: "Batches", to: "/inventory/batches" },
            { label: "Lots", to: "/inventory/lots" },
        ],
    },
];

/** Icon by kind */
const KindIcon = ({ kind, className }) => {
    switch (kind) {
        case "order": return <MdMarkEmailUnread className={className} />;
        case "invoice": return <MdReceiptLong className={className} />;
        case "shipment": return <MdLocalShipping className={className} />;
        case "inventory": return <MdInventory className={className} />;
        case "finance": return <MdPaid className={className} />;
        case "system": return <MdSystemUpdateAlt className={className} />;
        case "mention": return <MdNotificationsActive className={className} />;
        default: return <MdNotificationsActive className={className} />;
    }
};

/** Page */
export default function NotificationsPage() {
    const navigate = useNavigate();

    // ui state
    const [q, setQ] = useState("");
    const [tab, setTab] = useState("all"); // all | unread | mentions | system | billing | orders | inventory | shipments | finance
    const [showPinned, setShowPinned] = useState(true);

    // derived filter
    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        const byTab = (n) => {
            if (tab === "all") return true;
            if (tab === "unread") return n.status === "unread";
            if (tab === "mentions") return n.kind === "mention";
            if (tab === "system") return n.kind === "system";
            if (tab === "billing") return n.kind === "invoice" || n.kind === "finance";
            if (tab === "orders") return n.kind === "order";
            if (tab === "inventory") return n.kind === "inventory";
            if (tab === "shipments") return n.kind === "shipment";
            if (tab === "finance") return n.kind === "finance";
            return true;
        };
        const byQuery = (n) => {
            if (!tokens.length) return true;
            const hay = `${n.id} ${n.title} ${n.message} ${n.links.map(l => l.label).join(" ")}`.toLowerCase();
            return tokens.every(t => hay.includes(t));
        };
        return DEMO_NOTIFICATIONS.filter(n => byTab(n) && byQuery(n));
    }, [q, tab]);

    const pinned = useMemo(() => filtered.filter(n => n.pinned && showPinned), [filtered, showPinned]);
    const nonPinned = useMemo(() => filtered.filter(n => !n.pinned || !showPinned), [filtered, showPinned]);

    // group by date string
    const groupByDate = useCallback((items) => {
        const groups = {};
        for (const it of items) {
            const key = toDateOnly(it.createdAt); // "Sat Oct 04 2025"
            if (!groups[key]) groups[key] = [];
            groups[key].push(it);
        }
        return groups;
    }, []);

    const nonPinnedGroups = useMemo(() => groupByDate(nonPinned), [groupByDate, nonPinned]);

    // print only the list area
    const printAreaId = "search-print-area";
    const doPrint = () => {
        const body = document.body;
        body.classList.add("print-section-mode");
        const onAfter = () => {
            body.classList.remove("print-section-mode");
            window.removeEventListener("afterprint", onAfter);
        };
        window.addEventListener("afterprint", onAfter);
        window.print();
    };

    // export JSON (static file)
    const doExport = () => {
        const blob = new Blob([JSON.stringify(DEMO_NOTIFICATIONS, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "notifications.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <Styled.Page role="main">
            {/* Print-only rules (scoped to #search-print-area) */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #${printAreaId},
          body.print-section-mode #${printAreaId} * { visibility: visible !important; }
          body.print-section-mode #${printAreaId} {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <Styled.Header>
                <div className="titleRow">
                    <div className="left">
                        <MdNotificationsActive className="leadIcon" />
                        <div className="titles">
                            <h1>Notifications</h1>
                            <p className="sub">Stay on top of orders, billing, inventory, and system events—display-only demo.</p>
                        </div>
                    </div>

                    <div className="actions">
                        <button className="ghost" onClick={() => setTab("unread")} title="Quick filter: Unread">
                            <MdFilterList /> Unread
                        </button>
                        <button className="ghost" onClick={() => setShowPinned((s) => !s)} title="Toggle pinned">
                            <MdOutlinePushPin /> {showPinned ? "Hide Pinned" : "Show Pinned"}
                        </button>
                        <button className="ghost" onClick={doExport} title="Export static JSON">
                            <MdOutlineDownload /> Export
                        </button>
                        <button className="primary" onClick={doPrint} title="Print list">
                            <MdOutlinePrint /> Print
                        </button>
                    </div>
                </div>

                <div className="toolRow">
                    <div className="searchBox">
                        <MdSearch className="icon" />
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search notifications (e.g., INV-2031, shipment, reorder)"
                            aria-label="Search notifications"
                        />
                        {q.trim() && (
                            <button className="clear" onClick={() => setQ("")} title="Clear search">
                                <MdOutlineClearAll />
                            </button>
                        )}
                    </div>

                    <div className="tabs">
                        <Tab label="All" active={tab === "all"} onClick={() => setTab("all")} />
                        <Tab label="Unread" active={tab === "unread"} onClick={() => setTab("unread")} />
                        <Tab label="Mentions" active={tab === "mentions"} onClick={() => setTab("mentions")} />
                        <Tab label="System" active={tab === "system"} onClick={() => setTab("system")} />
                        <Tab label="Billing" active={tab === "billing"} onClick={() => setTab("billing")} />
                        <Tab label="Orders" active={tab === "orders"} onClick={() => setTab("orders")} />
                        <Tab label="Inventory" active={tab === "inventory"} onClick={() => setTab("inventory")} />
                        <Tab label="Shipments" active={tab === "shipments"} onClick={() => setTab("shipments")} />
                        <Tab label="Finance" active={tab === "finance"} onClick={() => setTab("finance")} />
                    </div>
                </div>
            </Styled.Header>

            <Styled.Layout id={printAreaId}>
                {/* Quick links panel */}
                <section className="panel quickLinks" aria-label="Quick links">
                    <h2>Navigate</h2>
                    <div className="grid">
                        <LinkCard to="/orders" label="Orders" desc="All sales orders" />
                        <LinkCard to="/invoices" label="Invoices" desc="Billing documents" />
                        <LinkCard to="/receipts" label="Receipts" desc="Customer receipts" />
                        <LinkCard to="/shipments" label="Shipments" desc="Tracking & labels" />
                        <LinkCard to="/inventory" label="Inventory" desc="Stock & lots" />
                        <LinkCard to="/medicines/expiry-tracker" label="Expiry Tracker" desc="Expiring lots" />
                        <LinkCard to="/sales/payments" label="Payments" desc="Recent payments" />
                        <LinkCard to="/finance" label="Finance" desc="Ledgers & reports" />
                        <LinkCard to="/reports" label="Reports" desc="Sales & inventory" />
                        <LinkCard to="/admin/audit-log" label="Audit Log" desc="Security events" />
                        <LinkCard to="/settings/print-templates" label="Print Templates" desc="Template presets" />
                        <LinkCard to="/help" label="Help Center" desc="Guides & docs" />
                    </div>
                </section>

                {/* Pinned */}
                {pinned.length > 0 && (
                    <section className="panel pinned" aria-label="Pinned notifications">
                        <div className="panelTitle">
                            <MdOutlinePushPin /> <h2>Pinned</h2>
                        </div>
                        <div className="list">
                            {pinned.map((n) => (
                                <NotificationRow key={n.id} n={n} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Non-pinned, grouped by date */}
                <section className="panel mainList" aria-label="Notifications">
                    {Object.entries(nonPinnedGroups).length === 0 && pinned.length === 0 ? (
                        <div className="empty">
                            <p>No notifications match your filters.</p>
                            <div className="links">
                                <NavLink to="/reports" className="a">Go to Reports</NavLink>
                                <MdChevronRight />
                                <NavLink to="/orders" className="a">Browse Orders</NavLink>
                            </div>
                        </div>
                    ) : (
                        Object.entries(nonPinnedGroups).map(([dateLabel, rows]) => (
                            <div className="dateGroup" key={dateLabel}>
                                <div className="dateHeader">{dateLabel}</div>
                                <div className="list">
                                    {rows.map((n) => <NotificationRow key={n.id} n={n} />)}
                                </div>
                            </div>
                        ))
                    )}
                </section>
            </Styled.Layout>
        </Styled.Page>
    );
}

/** Small components */
function Tab({ label, active, onClick }) {
    return (
        <button
            className={`tab ${active ? "active" : ""}`}
            onClick={onClick}
            aria-pressed={active ? "true" : "false"}
            type="button"
        >
            {label}
        </button>
    );
}

function LinkCard({ to, label, desc }) {
    return (
        <NavLink className="linkCard" to={to} title={label}>
            <div className="label">{label}</div>
            <div className="desc">{desc}</div>
            <MdOpenInNew className="open" />
        </NavLink>
    );
}

function NotificationRow({ n }) {
    const firstLink = n.links?.[0];
    return (
        <article className={`row ${n.status === "unread" ? "unread" : ""}`} tabIndex={0} aria-label={n.title}>
            <div className="left">
                <KindIcon kind={n.kind} className="kindIcon" />
                <div className="meta">
                    <header>
                        <h3 className="title">{n.title}</h3>
                        {n.status === "unread" && <span className="badge unreadDot" aria-label="unread" />}
                    </header>
                    <p className="message">{n.message}</p>
                    <div className="info">
                        <span className="time">{toDateTime(n.createdAt)}</span>
                        <span className="sep">•</span>
                        {n.links?.slice(0, 3).map((l, idx) => (
                            <React.Fragment key={l.to}>
                                <NavLink to={l.to} className="miniLink">{l.label}</NavLink>
                                {idx < Math.min(n.links.length, 3) - 1 && <span className="miniSep">/</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className="right">
                {firstLink ? (
                    <NavLink to={firstLink.to} className="cta">
                        Open <MdChevronRight />
                    </NavLink>
                ) : (
                    <span className="cta disabled" aria-disabled="true">Open</span>
                )}
            </div>
        </article>
    );
}
