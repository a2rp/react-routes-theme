import React, { useMemo, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { FiDownload, FiPrinter, FiExternalLink, FiChevronRight } from "react-icons/fi";

/** --------- tiny date format helpers (single source of truth) ---------- */
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toDate(x) {
    if (!x) return new Date();
    if (x instanceof Date) return x;
    const dt = new Date(x);
    return isNaN(dt.getTime()) ? new Date() : dt;
}
function pad2(n) { return String(n).padStart(2, "0"); }
function formatDate(d) {
    const dt = toDate(d);
    return `${DAYS[dt.getDay()]} ${MONTHS[dt.getMonth()]} ${pad2(dt.getDate())} ${dt.getFullYear()}`;
}
function formatTime(d) {
    const dt = toDate(d);
    const hh = pad2(dt.getHours());
    const mm = pad2(dt.getMinutes());
    const ss = pad2(dt.getSeconds());
    return `${hh}:${mm}:${ss}hrs`;
}
function formatDateTime(d) {
    const dt = toDate(d);
    return `${formatDate(dt)} ${formatTime(dt)}`;
}

/** Build & commit time coming from Vite define() */
const buildISO = (typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : null);
const commitISO = (typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : null);

const ReportsOverview = () => {
    const navigate = useNavigate();

    const now = useMemo(() => new Date(), []);
    const asOf = useMemo(() => formatDateTime(now), [now]);
    const buildAt = useMemo(() => buildISO ? formatDateTime(buildISO) : null, []);
    const commitAt = useMemo(() => commitISO ? formatDateTime(commitISO) : null, []);

    /** Print only the summary area */
    const handlePrint = useCallback(() => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            // give the browser a tick to enter print, then revert on return
            setTimeout(() => document.body.classList.remove("print-section-mode"), 0);
        }
    }, []);

    /** Export a static snapshot JSON (display-only) */
    const handleExport = useCallback(() => {
        const snapshot = {
            meta: {
                title: "Reports Overview Snapshot",
                generatedAt: asOf,
                buildAt,
                commitAt
            },
            quickLinks: [
                "/reports/sales",
                "/reports/inventory",
                "/reports/customers",
                "/reports/finance",
                "/reports/procurement",
                "/reports/shipment",
                "/reports/gst"
            ],
            kpis: [
                { label: "Revenue (YTD)", value: "₹ 2.40 Cr" },
                { label: "Invoices (YTD)", value: "3,482" },
                { label: "Avg. Order Value", value: "₹ 8,930" },
                { label: "Open POs", value: "128" },
                { label: "Stockouts", value: "7" },
                { label: "Near Expiry (30d)", value: "19" }
            ]
        };
        const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "reports-overview.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }, [asOf, buildAt, commitAt]);

    return (
        <Styled.Wrap>
            {/* print-only CSS for targeted area */}
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

            {/* Page header */}
            <header className="header">
                <div className="breadcrumbs">
                    <NavLink to="/home" className="crumb">Home</NavLink>
                    <span className="sep"><FiChevronRight /></span>
                    <span className="crumb current">Reports</span>
                </div>

                <div className="headline">
                    <h1>Reports Overview</h1>
                    <p className="sub">As of <strong>{asOf}</strong></p>
                </div>

                <div className="actions">
                    <button className="btn" onClick={handlePrint} title="Print summary section">
                        <FiPrinter aria-hidden={true} /> <span>Print</span>
                    </button>
                    <button className="btn" onClick={handleExport} title="Export overview snapshot">
                        <FiDownload aria-hidden={true} /> <span>Export</span>
                    </button>
                    <button className="btn ghost" onClick={() => navigate("/dashboard")} title="Open dashboard">
                        <FiExternalLink aria-hidden={true} /> <span>Open Dashboard</span>
                    </button>
                </div>
            </header>

            {/* Top metrics (static values for demo) */}
            <section className="kpis">
                {[
                    { key: "rev", label: "Revenue (YTD)", value: "₹ 2.40 Cr", hint: "All channels" },
                    { key: "inv", label: "Invoices (YTD)", value: "3,482", hint: "Finalized" },
                    { key: "aov", label: "Avg. Order Value", value: "₹ 8,930", hint: "Sales orders" },
                    { key: "mrr", label: "Receivables", value: "₹ 41.2 L", hint: "Pending" },
                    { key: "po", label: "Open POs", value: "128", hint: "Awaiting receipt" },
                    { key: "so", label: "Backorders", value: "23", hint: "Allocations pending" }
                ].map(x => (
                    <div key={x.key} className="kpi card" role="group" aria-label={x.label}>
                        <div className="kpi-top">
                            <span className="kpi-label">{x.label}</span>
                            <span className="dot" />
                        </div>
                        <div className="kpi-value">{x.value}</div>
                        <div className="kpi-hint">{x.hint}</div>
                    </div>
                ))}
            </section>

            {/* Print-friendly summary */}
            <section id="search-print-area" className="summary card">
                <div className="summary-head">
                    <h2>Executive Summary</h2>
                    <div className="meta">
                        {buildAt && <span>Build: <strong>{buildAt}</strong></span>}
                        {commitAt && <span>Commit: <strong>{commitAt}</strong></span>}
                    </div>
                </div>
                <div className="summary-grid">
                    <div className="summary-block">
                        <h3>Sales</h3>
                        <ul className="links">
                            <li><NavLink to="/reports/sales">Sales Report</NavLink></li>
                            <li><NavLink to="/orders">Orders</NavLink></li>
                            <li><NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/sales/payments">Payments</NavLink></li>
                            <li><NavLink to="/sales/returns">Returns</NavLink></li>
                            <li><NavLink to="/reports/customers">Customer Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="summary-block">
                        <h3>Inventory</h3>
                        <ul className="links">
                            <li><NavLink to="/reports/inventory">Inventory Report</NavLink></li>
                            <li><NavLink to="/inventory">Overview</NavLink></li>
                            <li><NavLink to="/inventory/lots">Lots</NavLink></li>
                            <li><NavLink to="/inventory/batches">Batches</NavLink></li>
                            <li><NavLink to="/inventory/reorder">Reorder Planner</NavLink></li>
                            <li><NavLink to="/medicines/expiry-tracker">Expiry Tracker</NavLink></li>
                        </ul>
                    </div>

                    <div className="summary-block">
                        <h3>Procurement</h3>
                        <ul className="links">
                            <li><NavLink to="/reports/procurement">Procurement Report</NavLink></li>
                            <li><NavLink to="/purchase-orders">Purchase Orders</NavLink></li>
                            <li><NavLink to="/vendors">Vendors</NavLink></li>
                            <li><NavLink to="/shipments">Shipments</NavLink></li>
                            <li><NavLink to="/shipments/carriers">Carriers</NavLink></li>
                        </ul>
                    </div>

                    <div className="summary-block">
                        <h3>Finance</h3>
                        <ul className="links">
                            <li><NavLink to="/reports/finance">Finance Report</NavLink></li>
                            <li><NavLink to="/finance/ledgers">Ledgers</NavLink></li>
                            <li><NavLink to="/finance/journals">Journals</NavLink></li>
                            <li><NavLink to="/finance/taxes">Taxes</NavLink></li>
                            <li><NavLink to="/finance/gst-returns">GST Returns</NavLink></li>
                            <li><NavLink to="/invoices/credit-notes">Credit Notes</NavLink></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Quick filters (display-only links) */}
            <section className="chips">
                {[
                    { label: "Today", to: "/reports/sales?range=today" },
                    { label: "This Week", to: "/reports/sales?range=week" },
                    { label: "This Month", to: "/reports/sales?range=month" },
                    { label: "Quarter-To-Date", to: "/reports/sales?range=qtd" },
                    { label: "Year-To-Date", to: "/reports/sales?range=ytd" },
                    { label: "Last FY", to: "/reports/sales?range=lastfy" },
                    { label: "Top Customers", to: "/reports/customers?view=top" },
                    { label: "Aging (AR)", to: "/reports/finance?tab=aging" }
                ].map((c) => (
                    <NavLink key={c.label} to={c.to} className="chip">{c.label}</NavLink>
                ))}
            </section>

            {/* Previews: compact data blocks (static rows) */}
            <section className="panels">
                <div className="panel card">
                    <div className="panel-head">
                        <h3>Recent Invoices</h3>
                        <NavLink to="/invoices" className="see-all">See all</NavLink>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th><th>Customer</th><th>Date</th><th>Status</th><th>Amount</th><th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { no: "INV-2031", cust: "Galaxy Pharma", dt: "2025-10-04T10:15:40+05:30", st: "Final", amt: "₹ 12,840", href: "/invoices/INV-2031" },
                                    { no: "INV-2030", cust: "Urban Labs", dt: "2025-10-03T18:02:10+05:30", st: "Final", amt: "₹ 8,420", href: "/invoices/INV-2030" },
                                    { no: "INV-2029", cust: "Horizon Clinic", dt: "2025-10-03T12:41:03+05:30", st: "Draft", amt: "₹ 6,210", href: "/invoices/INV-2029" },
                                    { no: "INV-2028", cust: "Nova Care", dt: "2025-10-02T09:15:29+05:30", st: "Final", amt: "₹ 19,320", href: "/invoices/INV-2028" },
                                    { no: "INV-2027", cust: "Apex Med", dt: "2025-10-01T17:22:45+05:30", st: "Final", amt: "₹ 5,980", href: "/invoices/INV-2027" }
                                ].map(row => (
                                    <tr key={row.no}>
                                        <td>{row.no}</td>
                                        <td>{row.cust}</td>
                                        <td>
                                            <span title={formatDateTime(row.dt)}>{formatDate(row.dt)}</span>
                                        </td>
                                        <td>{row.st}</td>
                                        <td>{row.amt}</td>
                                        <td><NavLink to={row.href}>Open</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="panel card">
                    <div className="panel-head">
                        <h3>Low Stock Items</h3>
                        <NavLink to="/inventory/reorder" className="see-all">Reorder</NavLink>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>SKU</th><th>Item</th><th>On Hand</th><th>Reorder Pt.</th><th>Warehouse</th><th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { sku: "MED-AMOX-500", item: "Amoxicillin 500mg", oh: "14", rp: "25", wh: "WH-Main", href: "/products/MED-AMOX-500" },
                                    { sku: "MED-PCM-650", item: "Paracetamol 650", oh: "9", rp: "30", wh: "WH-Main", href: "/products/MED-PCM-650" },
                                    { sku: "MED-OMZ-20", item: "Omeprazole 20mg", oh: "11", rp: "20", wh: "WH-East", href: "/products/MED-OMZ-20" },
                                    { sku: "MED-ALB-4", item: "Albendazole 400mg", oh: "8", rp: "18", wh: "WH-North", href: "/products/MED-ALB-4" },
                                    { sku: "MED-CET-10", item: "Cetirizine 10mg", oh: "7", rp: "16", wh: "WH-South", href: "/products/MED-CET-10" }
                                ].map(row => (
                                    <tr key={row.sku}>
                                        <td>{row.sku}</td>
                                        <td>{row.item}</td>
                                        <td className="num">{row.oh}</td>
                                        <td className="num">{row.rp}</td>
                                        <td>{row.wh}</td>
                                        <td><NavLink to={row.href}>Open</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="panel card">
                    <div className="panel-head">
                        <h3>Pending Purchases</h3>
                        <NavLink to="/purchase-orders" className="see-all">POs</NavLink>
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>PO #</th><th>Vendor</th><th>Date</th><th>Status</th><th>ETA</th><th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { po: "PO-5019", ven: "Zen Suppliers", dt: "2025-09-30T11:01:20+05:30", st: "Open", eta: "Sat Oct 04 2025", href: "/purchase-orders/PO-5019" },
                                    { po: "PO-5018", ven: "Nimbus Traders", dt: "2025-09-29T14:22:40+05:30", st: "Open", eta: "Sun Oct 05 2025", href: "/purchase-orders/PO-5018" },
                                    { po: "PO-5017", ven: "Aurum Med", dt: "2025-09-28T16:43:12+05:30", st: "Partial", eta: "Tue Oct 07 2025", href: "/purchase-orders/PO-5017" },
                                    { po: "PO-5016", ven: "Vertex Pharma", dt: "2025-09-28T10:05:54+05:30", st: "Open", eta: "Mon Oct 06 2025", href: "/purchase-orders/PO-5016" },
                                    { po: "PO-5015", ven: "Cobalt Labs", dt: "2025-09-27T09:18:33+05:30", st: "Billed", eta: "—", href: "/purchase-orders/PO-5015" }
                                ].map(row => (
                                    <tr key={row.po}>
                                        <td>{row.po}</td>
                                        <td>{row.ven}</td>
                                        <td><span title={formatDateTime(row.dt)}>{formatDate(row.dt)}</span></td>
                                        <td>{row.st}</td>
                                        <td>{row.eta}</td>
                                        <td><NavLink to={row.href}>Open</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Big navigation wall */}
            <section className="navwall card">
                <h2>Jump to a Report</h2>
                <div className="grid">
                    {[
                        {
                            title: "Sales", to: "/reports/sales", items: [
                                { t: "Orders", to: "/orders" },
                                { t: "Invoices", to: "/invoices" },
                                { t: "Payments", to: "/sales/payments" },
                                { t: "Returns", to: "/sales/returns" },
                                { t: "Customers", to: "/reports/customers" }
                            ]
                        },
                        {
                            title: "Inventory", to: "/reports/inventory", items: [
                                { t: "Lots", to: "/inventory/lots" },
                                { t: "Batches", to: "/inventory/batches" },
                                { t: "Transfers", to: "/inventory/transfers" },
                                { t: "Warehouses", to: "/inventory/warehouses" },
                                { t: "Reorder", to: "/inventory/reorder" }
                            ]
                        },
                        {
                            title: "Procurement", to: "/reports/procurement", items: [
                                { t: "Vendors", to: "/vendors" },
                                { t: "Purchase Orders", to: "/purchase-orders" },
                                { t: "Receipts", to: "/receipts" },
                                { t: "Shipments", to: "/shipments" }
                            ]
                        },
                        {
                            title: "Finance", to: "/reports/finance", items: [
                                { t: "Ledgers", to: "/finance/ledgers" },
                                { t: "Journals", to: "/finance/journals" },
                                { t: "Taxes", to: "/finance/taxes" },
                                { t: "GST Returns", to: "/finance/gst-returns" },
                                { t: "Balance Sheet", to: "/finance/balance-sheet" },
                                { t: "Profit & Loss", to: "/finance/profit-loss" }
                            ]
                        },
                        {
                            title: "Shipping", to: "/reports/shipment", items: [
                                { t: "All Shipments", to: "/shipments" },
                                { t: "Carriers", to: "/shipments/carriers" }
                            ]
                        },
                        {
                            title: "Compliance", to: "/reports/gst", items: [
                                { t: "GST Mapping", to: "/medicines/hsn-gst" },
                                { t: "Credit Notes", to: "/invoices/credit-notes" }
                            ]
                        }
                    ].map(box => (
                        <div key={box.title} className="tile">
                            <NavLink to={box.to} className="tile-head">
                                <span>{box.title}</span> <FiExternalLink />
                            </NavLink>
                            <ul className="tile-links">
                                {box.items.map(i => (
                                    <li key={i.to}><NavLink to={i.to}>{i.t}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </Styled.Wrap>
    );
};

export default ReportsOverview;
