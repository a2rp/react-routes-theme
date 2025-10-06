import React, { useMemo, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { MdSearch, MdPrint, MdOutlineEmail, MdOutlineOpenInNew, MdOutlineInfo, MdOutlineBugReport, MdOutlineKeyboard } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";

/** Build / commit timestamps are defined in vite.config define{} */
const BUILD_ISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || new Date().toISOString();
const COMMIT_ISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || new Date().toISOString();

/** Date formatting — required formats:
 *  - Date only: Sat Oct 04 2025
 *  - Date+Time: Sat Oct 04 2025 15:38:20hrs
 *  - Time only: 15:38:20hrs
 */
const fmtDate = (dLike) => {
    const d = new Date(dLike);
    const wd = d.toLocaleString("en-US", { weekday: "short" });
    const mon = d.toLocaleString("en-US", { month: "short" });
    const day = String(d.getDate()).padStart(2, "0");
    const yr = d.getFullYear();
    return `${wd} ${mon} ${day} ${yr}`;
};
const fmtTime = (dLike) => {
    const d = new Date(dLike);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
};
const fmtDateTime = (dLike) => `${fmtDate(dLike)} ${fmtTime(dLike)}`;

const HelpPage = () => {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const printRef = useRef(null);

    const buildInfo = useMemo(
        () => ({
            buildAt: fmtDateTime(BUILD_ISO),
            commitAt: fmtDateTime(COMMIT_ISO),
        }),
        []
    );

    const onSearch = (e) => {
        e.preventDefault();
        const query = q.trim();
        if (!query) {
            navigate("/search");
        } else {
            // deep-link to your search route with query
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    const handlePrint = () => {
        const root = document.body;
        if (!root) return;
        root.classList.add("print-section-mode");
        // ensure our section is the print area
        const id = setTimeout(() => {
            window.print();
            clearTimeout(id);
            // small delay to guarantee print dialog has opened
            setTimeout(() => root.classList.remove("print-section-mode"), 300);
        }, 50);
    };

    return (
        <Styled.Page>
            <Styled.Hero>
                <div className="copy">
                    <h1>Help Center</h1>
                    <p>
                        Everything you need to navigate this theme: quick links, module docs, and deep routes for a comprehensive demo walkthrough.
                    </p>
                    <div className="meta">
                        <span title="Build timestamp">
                            <MdOutlineInfo size={16} /> Build: <strong>{buildInfo.buildAt}</strong>
                        </span>
                        <span title="Last commit timestamp">
                            <MdOutlineInfo size={16} /> Last Commit: <strong>{buildInfo.commitAt}</strong>
                        </span>
                    </div>
                </div>

                <form className="search" onSubmit={onSearch} role="search" aria-label="Help search">
                    <MdSearch size={20} aria-hidden="true" />
                    <input
                        type="text"
                        placeholder="Search the documentation (try: invoices, inventory, roles, GST...)"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        aria-label="Search help"
                    />
                    <button type="submit" title="Go to Global Search">
                        Search
                    </button>
                </form>

                <div className="toolbar">
                    <button type="button" onClick={handlePrint} title="Print this Help">
                        <MdPrint size={18} /> Print
                    </button>
                    <NavLink to="/contact" className="quiet" title="Contact">
                        <MdOutlineEmail size={18} /> Contact
                    </NavLink>
                    <a href="https://github.com/" className="quiet" target="_blank" rel="noreferrer" title="External docs (sample)">
                        <LuExternalLink size={18} /> External Docs
                    </a>
                </div>
            </Styled.Hero>

            {/* PRINT AREA START */}
            <section id="search-print-area" ref={printRef}>
                <Styled.BlockGrid>
                    {/* Getting Started */}
                    <Styled.Block className="accent">
                        <header>
                            <h2>Getting Started</h2>
                            <span className="tag">Start here</span>
                        </header>
                        <p>New to this theme? Explore the core pages and example flows:</p>
                        <ul className="links">
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/examples">Examples Overview</NavLink></li>
                            <li><NavLink to="/examples/theme">Theme Tokens</NavLink></li>
                            <li><NavLink to="/examples/print">Print Demo</NavLink></li>
                        </ul>
                        <footer className="foot">
                            <div className="note">Tip: Use the sidebar search (Ctrl + K) to jump to any section.</div>
                        </footer>
                    </Styled.Block>

                    {/* Sales & Billing */}
                    <Styled.Block>
                        <header>
                            <h2>Sales &amp; Billing</h2>
                            <span className="tag">Commerce</span>
                        </header>
                        <div className="cols">
                            <ul className="links">
                                <li><NavLink to="/sales">Sales Overview</NavLink></li>
                                <li><NavLink to="/sales/quotes">Quotations</NavLink></li>
                                <li><NavLink to="/orders">Orders</NavLink></li>
                                <li><NavLink to="/sales/returns">Sales Returns</NavLink></li>
                                <li><NavLink to="/sales/payments">Payments</NavLink></li>
                            </ul>
                            <ul className="links">
                                <li><NavLink to="/invoices">Invoices</NavLink></li>
                                <li><NavLink to="/invoices/new">New Invoice (demo)</NavLink></li>
                                <li><NavLink to="/invoices/credit-notes">Credit Notes</NavLink></li>
                                <li><NavLink to="/receipts">Receipts</NavLink></li>
                                <li><NavLink to="/reports/sales">Sales Report</NavLink></li>
                            </ul>
                        </div>
                    </Styled.Block>

                    {/* Customers & CRM */}
                    <Styled.Block>
                        <header>
                            <h2>Customers &amp; CRM</h2>
                            <span className="tag">CRM</span>
                        </header>
                        <div className="cols">
                            <ul className="links">
                                <li><NavLink to="/customers">All Customers</NavLink></li>
                                <li><NavLink to="/customers/new" title="Demo only">Add Customer</NavLink></li>
                                <li><NavLink to="/reports/customers">Customer Report</NavLink></li>
                            </ul>
                            <ul className="links">
                                <li><NavLink to="/profile">My Profile</NavLink></li>
                                <li><NavLink to="/notifications">Notifications</NavLink></li>
                                <li><NavLink to="/help">Help Center</NavLink></li>
                            </ul>
                        </div>
                    </Styled.Block>

                    {/* Products & Inventory */}
                    <Styled.Block>
                        <header>
                            <h2>Products &amp; Inventory</h2>
                            <span className="tag">Catalog</span>
                        </header>
                        <div className="cols">
                            <ul className="links">
                                <li><NavLink to="/products">All Products</NavLink></li>
                                <li><NavLink to="/products/new" title="Demo only">Add Product</NavLink></li>
                                <li><NavLink to="/categories">Categories</NavLink></li>
                                <li><NavLink to="/products/brands">Brands</NavLink></li>
                                <li><NavLink to="/products/attributes">Attributes</NavLink></li>
                                <li><NavLink to="/products/price-lists">Price Lists</NavLink></li>
                            </ul>
                            <ul className="links">
                                <li><NavLink to="/inventory">Inventory Overview</NavLink></li>
                                <li><NavLink to="/inventory/lots">Lots</NavLink></li>
                                <li><NavLink to="/inventory/batches">Batches</NavLink></li>
                                <li><NavLink to="/inventory/adjustments">Adjustments</NavLink></li>
                                <li><NavLink to="/inventory/transfers">Transfers</NavLink></li>
                                <li><NavLink to="/inventory/warehouses">Warehouses</NavLink></li>
                                <li><NavLink to="/inventory/reorder">Reorder Planner</NavLink></li>
                            </ul>
                        </div>
                    </Styled.Block>

                    {/* Medicines pack */}
                    <Styled.Block>
                        <header>
                            <h2>Medicines Catalog</h2>
                            <span className="tag">Healthcare</span>
                        </header>
                        <div className="cols">
                            <ul className="links">
                                <li><NavLink to="/medicines">Catalog</NavLink></li>
                                <li><NavLink to="/medicines/manufacturers">Manufacturers</NavLink></li>
                                <li><NavLink to="/medicines/molecules">Molecules</NavLink></li>
                                <li><NavLink to="/medicines/forms">Forms</NavLink></li>
                                <li><NavLink to="/medicines/strengths">Strengths</NavLink></li>
                            </ul>
                            <ul className="links">
                                <li><NavLink to="/medicines/expiry-tracker">Expiry Tracker</NavLink></li>
                                <li><NavLink to="/medicines/hsn-gst">HSN / GST</NavLink></li>
                                <li><NavLink to="/reports/inventory">Inventory Report</NavLink></li>
                                <li><NavLink to="/reports/gst">GST Report</NavLink></li>
                            </ul>
                        </div>
                    </Styled.Block>

                    {/* Purchasing & Vendors */}
                    <Styled.Block>
                        <header>
                            <h2>Purchasing &amp; Vendors</h2>
                            <span className="tag">Procurement</span>
                        </header>
                        <div className="cols">
                            <ul className="links">
                                <li><NavLink to="/vendors">Vendors</NavLink></li>
                                <li><NavLink to="/vendors/new" title="Demo only">Add Vendor</NavLink></li>
                                <li><NavLink to="/purchase-orders">Purchase Orders</NavLink></li>
                                <li><NavLink to="/purchase-orders/new" title="Demo only">New PO</NavLink></li>
                            </ul>
                            <ul className="links">
                                <li><NavLink to="/reports/procurement">Procurement Report</NavLink></li>
                                <li><NavLink to="/shipments">Shipments</NavLink></li>
                                <li><NavLink to="/shipments/carriers">Carriers</NavLink></li>
                            </ul>
                        </div>
                    </Styled.Block>

                    {/* Finance */}
                    <Styled.Block>
                        <header>
                            <h2>Finance &amp; Accounting</h2>
                            <span className="tag">Finance</span>
                        </header>
                        <div className="cols">
                            <ul className="links">
                                <li><NavLink to="/finance">Overview</NavLink></li>
                                <li><NavLink to="/finance/chart-of-accounts">Chart of Accounts</NavLink></li>
                                <li><NavLink to="/finance/ledgers">Ledgers</NavLink></li>
                                <li><NavLink to="/finance/journals">Journals</NavLink></li>
                                <li><NavLink to="/finance/taxes">Taxes</NavLink></li>
                            </ul>
                            <ul className="links">
                                <li><NavLink to="/finance/gst-returns">GST Returns</NavLink></li>
                                <li><NavLink to="/finance/balance-sheet">Balance Sheet</NavLink></li>
                                <li><NavLink to="/finance/profit-loss">Profit &amp; Loss</NavLink></li>
                                <li><NavLink to="/finance/trial-balance">Trial Balance</NavLink></li>
                            </ul>
                        </div>
                    </Styled.Block>

                    {/* Admin & Settings */}
                    <Styled.Block>
                        <header>
                            <h2>Admin &amp; Settings</h2>
                            <span className="tag">Admin</span>
                        </header>
                        <div className="cols">
                            <ul className="links">
                                <li><NavLink to="/admin/users">Users</NavLink></li>
                                <li><NavLink to="/admin/roles">Roles</NavLink></li>
                                <li><NavLink to="/admin/permissions">Permissions</NavLink></li>
                                <li><NavLink to="/admin/audit-log">Audit Log</NavLink></li>
                                <li><NavLink to="/admin/activity">Activity</NavLink></li>
                            </ul>
                            <ul className="links">
                                <li><NavLink to="/admin/system-status">System Status</NavLink></li>
                                <li><NavLink to="/admin/feature-flags">Feature Flags</NavLink></li>
                                <li><NavLink to="/admin/integrations">Integrations</NavLink></li>
                                <li><NavLink to="/settings">Settings Home</NavLink></li>
                                <li><NavLink to="/settings/appearance">Appearance</NavLink></li>
                                <li><NavLink to="/settings/notifications">Notifications</NavLink></li>
                                <li><NavLink to="/settings/print-templates">Print Templates</NavLink></li>
                            </ul>
                        </div>
                    </Styled.Block>

                    {/* Tools & Developer */}
                    <Styled.Block>
                        <header>
                            <h2>Tools &amp; Developer</h2>
                            <span className="tag">Tools</span>
                        </header>
                        <div className="cols">
                            <ul className="links">
                                <li><NavLink to="/tools/import-export">Import / Export</NavLink></li>
                                <li><NavLink to="/tools/theme-tokens">Theme Tokens</NavLink></li>
                                <li><NavLink to="/tools/playground">Playground</NavLink></li>
                                <li><NavLink to="/examples/confirm-modal">Confirm Modal</NavLink></li>
                                <li><NavLink to="/examples/breadcrumbs">Breadcrumbs</NavLink></li>
                                <li><NavLink to="/examples/nav-search">Sidebar Search</NavLink></li>
                            </ul>
                            <ul className="links">
                                <li><NavLink to="/changelog">Changelog</NavLink></li>
                                <li><NavLink to="/roadmap">Roadmap</NavLink></li>
                                <li><NavLink to="/faq">FAQ</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/feedback">Feedback</NavLink></li>
                            </ul>
                        </div>
                    </Styled.Block>

                    {/* Shortcuts & Tips */}
                    <Styled.Block className="muted">
                        <header>
                            <h2><MdOutlineKeyboard size={18} /> Shortcuts &amp; Tips</h2>
                            <span className="tag">Productivity</span>
                        </header>
                        <div className="tips">
                            <div className="tip">
                                <code>Ctrl + K</code> — Open sidebar search
                            </div>
                            <div className="tip">
                                <code>Tab</code>/<code>Shift + Tab</code> — Fast navigation
                            </div>
                            <div className="tip">
                                <code>?</code> — Help focus (when supported)
                            </div>
                            <div className="tip">
                                <code>Alt + ←/→</code> — Browser history
                            </div>
                        </div>
                        <footer className="foot">
                            <span className="quiet">
                                <MdOutlineBugReport size={16} /> Found an issue in docs? Use <NavLink to="/feedback">Feedback</NavLink>.
                            </span>
                        </footer>
                    </Styled.Block>
                </Styled.BlockGrid>
            </section>
            {/* PRINT AREA END */}

            {/* Print styles   */}
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
        </Styled.Page>
    );
};

export default HelpPage;
