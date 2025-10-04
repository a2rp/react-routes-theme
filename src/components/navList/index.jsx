import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { Styled } from "./styled";
import { MdClear } from "react-icons/md";

const STORAGE_KEY = "navSearch";
const COLLAPSE_KEY = "navCollapsed";

const NavListCore = () => {
    const navRef = useRef(null);
    const wrapperRef = useRef(null);
    const searchInputRef = useRef(null);
    const { pathname } = useLocation();

    const [search, setSearch] = useState(() => {
        try { return sessionStorage.getItem(STORAGE_KEY) ?? ""; } catch { return ""; }
    });
    const [collapsed, setCollapsed] = useState(() => {
        try { return JSON.parse(sessionStorage.getItem(COLLAPSE_KEY) || "{}"); } catch { return {}; }
    });

    // keep the active link centered
    useEffect(() => {
        const el = navRef.current?.querySelector("a.active");
        if (!el) return;
        const id = requestAnimationFrame(() => {
            try { el.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" }); }
            catch { el.scrollIntoView(); }
        });
        return () => cancelAnimationFrame(id);
    }, [pathname]);

    // collapse helpers
    const applySectionCollapse = useCallback((sectionLabel, isCollapsed) => {
        const root = wrapperRef.current; if (!root) return;
        const h = root.querySelector(`h3.title[data-sec="${CSS.escape(sectionLabel)}"]`);
        if (!h) return;

        let node = h.nextElementSibling;
        while (node && node.tagName !== "H3") {
            if (node.tagName === "A") node.setAttribute("data-collapsed", isCollapsed ? "true" : "false");
            node = node.nextElementSibling;
        }
        h.setAttribute("data-collapsed", isCollapsed ? "true" : "false");
    }, []);

    const applyAllCollapsed = useCallback(() => {
        const root = wrapperRef.current; if (!root) return;
        const headers = Array.from(root.querySelectorAll("h3.title[data-sec]"));
        headers.forEach(h => {
            const key = h.getAttribute("data-sec");
            const isCollapsed = !!collapsed[key];
            applySectionCollapse(key, isCollapsed);
        });
    }, [collapsed, applySectionCollapse]);

    useEffect(() => {
        try { sessionStorage.setItem(COLLAPSE_KEY, JSON.stringify(collapsed)); } catch { }
        applyAllCollapsed();
    }, [collapsed, applyAllCollapsed]);

    // search/filter — OPEN sections that have a match (without overwriting saved state)
    useEffect(() => {
        try { sessionStorage.setItem(STORAGE_KEY, search); } catch { }
        const root = wrapperRef.current; if (!root) return;

        const q = search.trim().toLowerCase();
        const tokens = q.length ? q.split(/\s+/).filter(Boolean) : [];
        const links = Array.from(root.querySelectorAll("a[href]"));

        // mark matched links
        links.forEach((a) => {
            const label = (a.textContent || "").toLowerCase();
            const title = (a.getAttribute("title") || "").toLowerCase();
            const isMatch = tokens.length === 0 || tokens.every((t) => (label + " " + title).includes(t));
            a.setAttribute("data-hidden", isMatch ? "false" : "true");
        });

        // header visibility + force-open sections with matches
        const headers = Array.from(root.querySelectorAll("h3.title[data-sec]"));
        if (tokens.length === 0) {
            headers.forEach(h => h.setAttribute("data-hidden", "false"));
            applyAllCollapsed();
        } else {
            headers.forEach((h) => {
                let hasVisible = false;
                let node = h.nextElementSibling;
                while (node && node.tagName !== "H3") {
                    if (node.tagName === "A" && node.getAttribute("data-hidden") === "false") { hasVisible = true; break; }
                    node = node.nextElementSibling;
                }
                h.setAttribute("data-hidden", hasVisible ? "false" : "true");

                const key = h.getAttribute("data-sec");
                applySectionCollapse(key, hasVisible ? false : !!collapsed[key]);
            });
        }
    }, [search, collapsed, applyAllCollapsed, applySectionCollapse]);

    const handleSearchChange = (e) => setSearch(e.target.value);
    const clearSearch = () => setSearch("");

    const toggleSection = (key) => setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
    const onTitleKey = (e, key) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleSection(key); }
    };

    // focus search on load
    useEffect(() => {
        const el = searchInputRef.current;
        if (!el) return;
        const id = requestAnimationFrame(() => {
            try { el.focus({ preventScroll: true }); } catch { el.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    // auto-open the section that contains the current route
    useEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        const raf = requestAnimationFrame(() => {
            const pickSectionHeader = (anchor) => {
                if (!anchor) return null;
                let node = anchor.previousElementSibling;
                while (node && node.tagName !== 'H3') node = node.previousElementSibling;
                return node && node.classList.contains('title') ? node : null;
            };

            // a) try the active link
            let active = root.querySelector('a.active');
            let header = pickSectionHeader(active);

            // b) fallback: first segment (/orders, /products, etc.)
            if (!header) {
                const seg = '/' + (pathname.split('/')[1] || '');
                const anchor = root.querySelector(`a[href="${seg}"]`);
                header = pickSectionHeader(anchor);
            }

            const key = header?.getAttribute('data-sec');
            if (key) {
                setCollapsed(prev => (prev[key] ? { ...prev, [key]: false } : prev));
            }
        });

        return () => cancelAnimationFrame(raf);
    }, [pathname]);

    // ARIA helper so aria-expanded reflects actual open state (including search-forced open)
    const ariaExpandedFor = (sec) => {
        const root = wrapperRef.current;
        if (root) {
            const h = root.querySelector(`h3.title[data-sec="${CSS.escape(sec)}"]`);
            if (h) return h.getAttribute('data-collapsed') !== 'true';
        }
        return !(collapsed[sec] ?? false);
    };

    return (
        <Styled.Nav ref={navRef} aria-label="Clinic ERP Navigation">
            <div className="searchWraper">
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search (Ctrl + K)"
                    value={search}
                    onChange={handleSearchChange}
                    aria-label="Search navigation"
                    aria-controls="navlinksWrapper"
                />
                {search.trim().length > 0 && (
                    <div className="clearIconWrapper" onClick={clearSearch} role="button" aria-label="Clear search" title="Clear">
                        <MdClear size={20} />
                    </div>
                )}
            </div>

            <div className="navlinksWrapper" id="navlinksWrapper" ref={wrapperRef}>
                {/* Core */}
                <h3 className="title" data-sec="Core" role="button" tabIndex={0}
                    data-collapsed={collapsed["Core"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Core")}
                    onClick={() => toggleSection("Core")}
                    onKeyDown={(e) => onTitleKey(e, "Core")}>
                    <span className="chev" aria-hidden="true"></span> Core
                </h3>
                <NavLink to="/home" end title="Landing overview" className="home">Home</NavLink>
                <NavLink to="/about" end title="About this theme">About</NavLink>
                <NavLink to="/dashboard" end title="KPIs & widgets">Dashboard</NavLink>
                <NavLink to="/search" end title="Global search">Search</NavLink>

                {/* Examples */}
                <h3 className="title" data-sec="Examples" role="button" tabIndex={0}
                    data-collapsed={collapsed["Examples"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Examples")}
                    onClick={() => toggleSection("Examples")}
                    onKeyDown={(e) => onTitleKey(e, "Examples")}>
                    <span className="chev" aria-hidden="true"></span> Examples
                </h3>
                <NavLink to="/examples" end title="Examples home">Overview</NavLink>
                <NavLink to="/examples/table" end title="Table demo (sorting, paging)">Table</NavLink>
                <NavLink to="/examples/form" end title="Form demo (validation)">Form</NavLink>
                <NavLink to="/examples/gallery" end title="Media grid">Gallery</NavLink>
                <NavLink to="/examples/print" end title="Section print demo">Print Demo</NavLink>
                <NavLink to="/examples/confirm-modal" end title="Custom confirm modal demo">Confirm Modal</NavLink>
                <NavLink to="/examples/theme" end title="Theme tokens preview">Theme Demo</NavLink>
                <NavLink to="/examples/breadcrumbs" end title="Dynamic breadcrumbs demo">Breadcrumbs</NavLink>
                <NavLink to="/examples/nav-search" end title="Sidebar search demo">Nav Search</NavLink>
                <NavLink to="/examples/counter" end title="Counter demo">Counter</NavLink>
                <NavLink to="/examples/persist-theme" end title="Persist theme demo">Persist Theme</NavLink>
                <NavLink to="/examples/devtools-todos" end title="Devtools todos demo">Devtools Todos</NavLink>
                <NavLink to="/examples/subscribe-selector" end title="subscribeWithSelector demo">Subscribe + Selector</NavLink>
                <NavLink to="/examples/undo-redo" end title="Temporal history demo">Undo / Redo</NavLink>

                {/* Customers */}
                <h3 className="title" data-sec="Customers" role="button" tabIndex={0}
                    data-collapsed={collapsed["Customers"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Customers")}
                    onClick={() => toggleSection("Customers")}
                    onKeyDown={(e) => onTitleKey(e, "Customers")}>
                    <span className="chev" aria-hidden="true"></span> Customers
                </h3>
                <NavLink to="/customers" end title="All customers">All Customers</NavLink>
                <NavLink to="/customers/new" end title="Create customer (demo disabled)">Add Customer</NavLink>

                {/* Sales */}
                <h3 className="title" data-sec="Sales" role="button" tabIndex={0}
                    data-collapsed={collapsed["Sales"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Sales")}
                    onClick={() => toggleSection("Sales")}
                    onKeyDown={(e) => onTitleKey(e, "Sales")}>
                    <span className="chev" aria-hidden="true"></span> Sales
                </h3>
                <NavLink to="/sales" end title="Sales overview">Overview</NavLink>
                <NavLink to="/sales/quotes" end title="Quotations">Quotes</NavLink>
                <NavLink to="/sales/returns" end title="Sales returns">Returns</NavLink>
                <NavLink to="/sales/payments" end title="Customer payments">Payments</NavLink>

                {/* Orders */}
                <h3 className="title" data-sec="Orders" role="button" tabIndex={0}
                    data-collapsed={collapsed["Orders"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Orders")}
                    onClick={() => toggleSection("Orders")}
                    onKeyDown={(e) => onTitleKey(e, "Orders")}>
                    <span className="chev" aria-hidden="true"></span> Orders
                </h3>
                <NavLink to="/orders" end title="Sales orders list">All Orders</NavLink>
                <NavLink to="/orders/new" end title="Create order (demo disabled)">New Order</NavLink>

                {/* Products / Catalog */}
                <h3 className="title" data-sec="Products" role="button" tabIndex={0}
                    data-collapsed={collapsed["Products"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Products")}
                    onClick={() => toggleSection("Products")}
                    onKeyDown={(e) => onTitleKey(e, "Products")}>
                    <span className="chev" aria-hidden="true"></span> Products
                </h3>
                <NavLink to="/products" end title="All products">All Products</NavLink>
                <NavLink to="/products/new" end title="Add product (demo disabled)">Add Product</NavLink>
                <NavLink to="/categories" end title="Product categories">Categories</NavLink>
                <NavLink to="/products/brands" end title="Brands">Brands</NavLink>
                <NavLink to="/products/attributes" end title="Attributes">Attributes</NavLink>
                <NavLink to="/products/price-lists" end title="Price lists">Price Lists</NavLink>

                {/* Medicines */}
                <h3 className="title" data-sec="Medicines" role="button" tabIndex={0}
                    data-collapsed={collapsed["Medicines"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Medicines")}
                    onClick={() => toggleSection("Medicines")}
                    onKeyDown={(e) => onTitleKey(e, "Medicines")}>
                    <span className="chev" aria-hidden="true"></span> Medicines
                </h3>
                <NavLink to="/medicines" end title="Medicine catalog">Catalog</NavLink>
                <NavLink to="/medicines/manufacturers" end title="Manufacturers">Manufacturers</NavLink>
                <NavLink to="/medicines/molecules" end title="Molecules / Salts">Molecules</NavLink>
                <NavLink to="/medicines/forms" end title="Forms (Tab, Cap, Syrup)">Forms</NavLink>
                <NavLink to="/medicines/strengths" end title="Strengths">Strengths</NavLink>
                <NavLink to="/medicines/expiry-tracker" end title="Near-expiry tracker">Expiry Tracker</NavLink>
                <NavLink to="/medicines/hsn-gst" end title="HSN & GST mapping">HSN / GST</NavLink>

                {/* Inventory */}
                <h3 className="title" data-sec="Inventory" role="button" tabIndex={0}
                    data-collapsed={collapsed["Inventory"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Inventory")}
                    onClick={() => toggleSection("Inventory")}
                    onKeyDown={(e) => onTitleKey(e, "Inventory")}>
                    <span className="chev" aria-hidden="true"></span> Inventory
                </h3>
                <NavLink to="/inventory" end title="Stock overview">Overview</NavLink>
                <NavLink to="/inventory/lots" end title="Lots">Lots</NavLink>
                <NavLink to="/inventory/batches" end title="Batches">Batches</NavLink>
                <NavLink to="/inventory/adjustments" end title="Adjustments">Adjustments</NavLink>
                <NavLink to="/inventory/transfers" end title="Warehouse transfers">Transfers</NavLink>
                <NavLink to="/inventory/warehouses" end title="Warehouses">Warehouses</NavLink>
                <NavLink to="/inventory/reorder" end title="Reorder planner">Reorder</NavLink>

                {/* Purchasing */}
                <h3 className="title" data-sec="Purchasing" role="button" tabIndex={0}
                    data-collapsed={collapsed["Purchasing"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Purchasing")}
                    onClick={() => toggleSection("Purchasing")}
                    onKeyDown={(e) => onTitleKey(e, "Purchasing")}>
                    <span className="chev" aria-hidden="true"></span> Purchasing
                </h3>
                <NavLink to="/vendors" end title="Vendors">Vendors</NavLink>
                <NavLink to="/vendors/new" end title="Add vendor (demo disabled)">Add Vendor</NavLink>
                <NavLink to="/purchase-orders" end title="Purchase orders">Purchase Orders</NavLink>
                <NavLink to="/purchase-orders/new" end title="Create PO (demo disabled)">New PO</NavLink>

                {/* Shipments */}
                <h3 className="title" data-sec="Shipments" role="button" tabIndex={0}
                    data-collapsed={collapsed["Shipments"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Shipments")}
                    onClick={() => toggleSection("Shipments")}
                    onKeyDown={(e) => onTitleKey(e, "Shipments")}>
                    <span className="chev" aria-hidden="true"></span> Shipments
                </h3>
                <NavLink to="/shipments" end title="All shipments">All Shipments</NavLink>
                <NavLink to="/shipments/new" end title="Create shipment (demo disabled)">New Shipment</NavLink>
                <NavLink to="/shipments/carriers" end title="Carriers">Carriers</NavLink>

                {/* Billing */}
                <h3 className="title" data-sec="Billing" role="button" tabIndex={0}
                    data-collapsed={collapsed["Billing"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Billing")}
                    onClick={() => toggleSection("Billing")}
                    onKeyDown={(e) => onTitleKey(e, "Billing")}>
                    <span className="chev" aria-hidden="true"></span> Billing
                </h3>
                <NavLink to="/invoices" end title="Invoices list">Invoices</NavLink>
                <NavLink to="/invoices/new" end title="Create invoice (demo disabled)">New Invoice</NavLink>
                <NavLink to="/receipts" end title="Receipts">Receipts</NavLink>
                <NavLink to="/invoices/credit-notes" end title="Credit notes">Credit Notes</NavLink>

                {/* Finance */}
                <h3 className="title" data-sec="Finance" role="button" tabIndex={0}
                    data-collapsed={collapsed["Finance"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Finance")}
                    onClick={() => toggleSection("Finance")}
                    onKeyDown={(e) => onTitleKey(e, "Finance")}>
                    <span className="chev" aria-hidden="true"></span> Finance
                </h3>
                <NavLink to="/finance" end title="Finance overview">Overview</NavLink>
                <NavLink to="/finance/chart-of-accounts" end title="Chart of accounts">Chart of Accounts</NavLink>
                <NavLink to="/finance/ledgers" end title="Ledgers">Ledgers</NavLink>
                <NavLink to="/finance/journals" end title="Journal vouchers">Journals</NavLink>
                <NavLink to="/finance/taxes" end title="Taxes">Taxes</NavLink>
                <NavLink to="/finance/gst-returns" end title="GST returns">GST Returns</NavLink>
                <NavLink to="/finance/balance-sheet" end title="Balance sheet">Balance Sheet</NavLink>
                <NavLink to="/finance/profit-loss" end title="Profit & Loss">Profit & Loss</NavLink>
                <NavLink to="/finance/trial-balance" end title="Trial balance">Trial Balance</NavLink>

                {/* Manufacturing */}
                <h3 className="title" data-sec="Manufacturing" role="button" tabIndex={0}
                    data-collapsed={collapsed["Manufacturing"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Manufacturing")}
                    onClick={() => toggleSection("Manufacturing")}
                    onKeyDown={(e) => onTitleKey(e, "Manufacturing")}>
                    <span className="chev" aria-hidden="true"></span> Manufacturing
                </h3>
                <NavLink to="/manufacturing" end title="Production overview">Overview</NavLink>
                <NavLink to="/manufacturing/bom" end title="Bill of Materials">BOM</NavLink>
                <NavLink to="/manufacturing/work-orders" end title="Work orders">Work Orders</NavLink>
                <NavLink to="/manufacturing/production" end title="Production runs">Production</NavLink>

                {/* Healthcare */}
                <h3 className="title" data-sec="Healthcare" role="button" tabIndex={0}
                    data-collapsed={collapsed["Healthcare"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Healthcare")}
                    onClick={() => toggleSection("Healthcare")}
                    onKeyDown={(e) => onTitleKey(e, "Healthcare")}>
                    <span className="chev" aria-hidden="true"></span> Healthcare
                </h3>
                <NavLink to="/patients" end title="Patients registry">Patients</NavLink>
                <NavLink to="/appointments" end title="Appointments">Appointments</NavLink>
                <NavLink to="/prescriptions" end title="Prescriptions">Prescriptions</NavLink>
                <NavLink to="/labs" end title="Lab orders">Labs</NavLink>
                <NavLink to="/imaging" end title="Imaging orders">Imaging</NavLink>

                {/* Reports */}
                <h3 className="title" data-sec="Reports" role="button" tabIndex={0}
                    data-collapsed={collapsed["Reports"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Reports")}
                    onClick={() => toggleSection("Reports")}
                    onKeyDown={(e) => onTitleKey(e, "Reports")}>
                    <span className="chev" aria-hidden="true"></span> Reports
                </h3>
                <NavLink to="/reports" end title="Reports home">Overview</NavLink>
                <NavLink to="/reports/sales" end title="Sales">Sales</NavLink>
                <NavLink to="/reports/inventory" end title="Inventory">Inventory</NavLink>
                <NavLink to="/reports/customers" end title="Customers">Customers</NavLink>
                <NavLink to="/reports/finance" end title="Finance">Finance</NavLink>
                <NavLink to="/reports/procurement" end title="Procurement">Procurement</NavLink>
                <NavLink to="/reports/shipment" end title="Shipment">Shipment</NavLink>
                <NavLink to="/reports/gst" end title="GST">GST</NavLink>

                {/* Admin */}
                <h3 className="title" data-sec="Admin" role="button" tabIndex={0}
                    data-collapsed={collapsed["Admin"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Admin")}
                    onClick={() => toggleSection("Admin")}
                    onKeyDown={(e) => onTitleKey(e, "Admin")}>
                    <span className="chev" aria-hidden="true"></span> Admin
                </h3>
                <NavLink to="/admin/users" end title="Users">Users</NavLink>
                <NavLink to="/admin/roles" end title="Roles">Roles</NavLink>
                <NavLink to="/admin/permissions" end title="Permissions">Permissions</NavLink>
                <NavLink to="/admin/audit-log" end title="Audit log">Audit Log</NavLink>
                <NavLink to="/admin/activity" end title="Activity">Activity</NavLink>
                <NavLink to="/admin/system-status" end title="System status">System Status</NavLink>
                <NavLink to="/admin/feature-flags" end title="Feature toggles">Feature Flags</NavLink>
                <NavLink to="/admin/tenants" end title="Tenants">Tenants</NavLink>
                <NavLink to="/admin/integrations" end title="Integrations">Integrations</NavLink>
                <NavLink to="/admin/email-templates" end title="Email templates">Email Templates</NavLink>
                <NavLink to="/admin/sms-templates" end title="SMS templates">SMS Templates</NavLink>

                {/* Settings */}
                <h3 className="title" data-sec="Settings" role="button" tabIndex={0}
                    data-collapsed={collapsed["Settings"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Settings")}
                    onClick={() => toggleSection("Settings")}
                    onKeyDown={(e) => onTitleKey(e, "Settings")}>
                    <span className="chev" aria-hidden="true"></span> Settings
                </h3>
                <NavLink to="/settings" end title="Settings home">Overview</NavLink>
                <NavLink to="/settings/profile" end title="Profile">Profile</NavLink>
                <NavLink to="/settings/appearance" end title="Appearance">Appearance</NavLink>
                <NavLink to="/settings/billing" end title="Billing">Billing</NavLink>
                <NavLink to="/settings/backups" end title="Backups">Backups</NavLink>
                <NavLink to="/settings/tokens" end title="API tokens">Tokens</NavLink>
                <NavLink to="/settings/warehouses" end title="Warehouses">Warehouses</NavLink>
                <NavLink to="/settings/locations" end title="Locations">Locations</NavLink>
                <NavLink to="/settings/tax" end title="Tax">Tax</NavLink>
                <NavLink to="/settings/units" end title="Units of measure">Units</NavLink>
                <NavLink to="/settings/currencies" end title="Currencies">Currencies</NavLink>
                <NavLink to="/settings/numbering" end title="Document numbering">Numbering</NavLink>
                <NavLink to="/settings/print-templates" end title="Print templates">Print Templates</NavLink>
                <NavLink to="/settings/notifications" end title="Notifications">Notifications</NavLink>
                <NavLink to="/settings/webhooks" end title="Webhooks">Webhooks</NavLink>

                {/* Tools */}
                <h3 className="title" data-sec="Tools" role="button" tabIndex={0}
                    data-collapsed={collapsed["Tools"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Tools")}
                    onClick={() => toggleSection("Tools")}
                    onKeyDown={(e) => onTitleKey(e, "Tools")}>
                    <span className="chev" aria-hidden="true"></span> Tools
                </h3>
                <NavLink to="/tools/import-export" end title="Import / Export">Import / Export</NavLink>
                <NavLink to="/tools/seed" end title="Seed demo data (disabled)">Seed</NavLink>
                <NavLink to="/tools/theme-tokens" end title="Theme tokens">Theme Tokens</NavLink>
                <NavLink to="/tools/playground" end title="Playground">Playground</NavLink>

                {/* Auth */}
                <h3 className="title" data-sec="Auth" role="button" tabIndex={0}
                    data-collapsed={collapsed["Auth"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Auth")}
                    onClick={() => toggleSection("Auth")}
                    onKeyDown={(e) => onTitleKey(e, "Auth")}>
                    <span className="chev" aria-hidden="true"></span> Auth
                </h3>
                <NavLink to="/auth/login" end title="Login">Login</NavLink>
                <NavLink to="/auth/register" end title="Register">Register</NavLink>
                <NavLink to="/auth/forgot" end title="Forgot password">Forgot</NavLink>
                <NavLink to="/auth/reset" end title="Reset password">Reset</NavLink>
                <NavLink to="/auth/verify" end title="Verify email">Verify</NavLink>

                {/* Account */}
                <h3 className="title" data-sec="Account" role="button" tabIndex={0}
                    data-collapsed={collapsed["Account"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Account")}
                    onClick={() => toggleSection("Account")}
                    onKeyDown={(e) => onTitleKey(e, "Account")}>
                    <span className="chev" aria-hidden="true"></span> Account
                </h3>
                <NavLink to="/profile" end title="My profile">Profile</NavLink>
                <NavLink to="/notifications" end title="Notifications center">Notifications</NavLink>

                {/* Help & Docs */}
                <h3 className="title" data-sec="Help & Docs" role="button" tabIndex={0}
                    data-collapsed={collapsed["Help & Docs"] ? "true" : "false"}
                    aria-expanded={ariaExpandedFor("Help & Docs")}
                    onClick={() => toggleSection("Help & Docs")}
                    onKeyDown={(e) => onTitleKey(e, "Help & Docs")}>
                    <span className="chev" aria-hidden="true"></span> Help &amp; Docs
                </h3>
                <NavLink to="/help" end title="Help center">Help Center</NavLink>
                <NavLink to="/faq" end title="FAQ">FAQ</NavLink>
                <NavLink to="/contact" end title="Contact">Contact</NavLink>
                <NavLink to="/feedback" end title="Feedback">Feedback</NavLink>
                <NavLink to="/changelog" end title="Release notes">Changelog</NavLink>
                <NavLink to="/roadmap" end title="Roadmap">Roadmap</NavLink>
            </div>

            {/* Only hide links (not headers) when collapsed */}
            <style>{`
        [data-hidden="true"] { display: none !important; }
        #navlinksWrapper a[data-collapsed="true"] { display: none !important; }
      `}</style>
        </Styled.Nav >
    );
};

export default NavListCore;
