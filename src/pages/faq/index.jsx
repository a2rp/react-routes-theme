import React, { useMemo, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import * as S from "./styled";
import { MdSearch, MdPrint, MdLink, MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const fmt = {
    date(d) {
        // Sat Oct 04 2025
        return new Date(d).toDateString();
    },
    time(d) {
        // 15:38:20hrs
        const t = new Date(d);
        const hh = String(t.getHours()).padStart(2, "0");
        const mm = String(t.getMinutes()).padStart(2, "0");
        const ss = String(t.getSeconds()).padStart(2, "0");
        return `${hh}:${mm}:${ss}hrs`;
    },
    dateTime(d) {
        // Sat Oct 04 2025 15:38:20hrs
        return `${fmt.date(d)} ${fmt.time(d)}`;
    }
};

const buildTimeISO =
    (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) ||
    (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) ||
    new Date().toISOString();

/** In-page FAQ content (display-only). Add/remove freely. */
const sections = [
    {
        id: "getting-started",
        title: "Getting Started",
        faqs: [
            {
                id: "gs-1",
                q: "Where is the main dashboard and how do I navigate?",
                a: (
                    <>
                        Use <NavLink to="/dashboard">Dashboard</NavLink> for a quick overview.
                        Global navigation is on the left. Core areas:
                        <ul className="bullets">
                            <li><NavLink to="/customers">Customers</NavLink>, <NavLink to="/orders">Orders</NavLink>, <NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink>, <NavLink to="/inventory">Inventory</NavLink>, <NavLink to="/purchase-orders">Purchase Orders</NavLink></li>
                            <li><NavLink to="/reports">Reports</NavLink>, <NavLink to="/finance">Finance</NavLink>, <NavLink to="/admin/users">Admin</NavLink></li>
                        </ul>
                        Pro-tip: Press <kbd>Tab</kbd> to move focus; sidebar sections toggle with <kbd>Enter</kbd>/<kbd>Space</kbd>.
                    </>
                )
            },
            {
                id: "gs-2",
                q: "Does the theme support deep links for demo data?",
                a: (
                    <>
                        Yes. Open a list page (e.g. <NavLink to="/customers">Customers</NavLink>) and navigate to details from within the page.
                        The sidebar intentionally shows high-level routes only to keep it clean. You can also try print-friendly routes like{" "}
                        <NavLink to="/print/invoice/INV-1001">/print/invoice/INV-1001</NavLink> (example placeholder).
                    </>
                )
            },
            {
                id: "gs-3",
                q: "How do I switch appearance and theme tokens?",
                a: (
                    <>
                        Visit <NavLink to="/settings/appearance">Appearance</NavLink> for theme surface previews and token references. To explore variables, try{" "}
                        <NavLink to="/tools/theme-tokens">Theme Tokens</NavLink>. The color system is driven by CSS variables defined globally in <code>index.css</code>.
                    </>
                )
            }
        ]
    },
    {
        id: "customers",
        title: "Customers & CRM",
        faqs: [
            {
                id: "cus-1",
                q: "Where can I see all customers and a sample profile?",
                a: (
                    <>
                        Go to <NavLink to="/customers">All Customers</NavLink>. For a profile layout preview, open a customer and then try the edit path like{" "}
                        <NavLink to="/customers/CUST-1001/edit">/customers/CUST-1001/edit</NavLink> (if seeded).
                        You’ll find identity, meta panels (Created/Updated), contacts, and activity timeline.
                    </>
                )
            },
            {
                id: "cus-2",
                q: "Can I create or delete customers here?",
                a: (
                    <>
                        This is a display-only demo. Actions like <em>create</em>/<em>delete</em> are represented by disabled buttons or non-destructive previews.
                        Use <NavLink to="/customers/new">Add Customer</NavLink> to preview the layout and form density.
                    </>
                )
            }
        ]
    },
    {
        id: "sales-orders",
        title: "Sales, Orders & Billing",
        faqs: [
            {
                id: "so-1",
                q: "Where do I manage orders and invoices?",
                a: (
                    <>
                        Orders live at <NavLink to="/orders">Orders</NavLink>. Invoices are at <NavLink to="/invoices">Invoices</NavLink> and receipts at{" "}
                        <NavLink to="/receipts">Receipts</NavLink>. You can also view credit notes via{" "}
                        <NavLink to="/invoices/credit-notes">Credit Notes</NavLink>.
                    </>
                )
            },
            {
                id: "so-2",
                q: "How do I preview print templates?",
                a: (
                    <>
                        Most detail pages include a print section. For a quick demo, open <NavLink to="/examples/print">Print Demo</NavLink>.
                        You can also navigate to specific print helpers like{" "}
                        <NavLink to="/print/invoice/INV-1001">Invoice Print</NavLink> or{" "}
                        <NavLink to="/orders/ORD-3001/print">Order Print</NavLink> (examples).
                    </>
                )
            }
        ]
    },
    {
        id: "catalog-inventory",
        title: "Catalog, Medicines & Inventory",
        faqs: [
            {
                id: "cat-1",
                q: "Where do I browse products and medicine specific taxonomies?",
                a: (
                    <>
                        Check <NavLink to="/products">Products</NavLink> and categories at{" "}
                        <NavLink to="/categories">Categories</NavLink>. Medicine-focused views:{" "}
                        <NavLink to="/medicines">Catalog</NavLink>,{" "}
                        <NavLink to="/medicines/manufacturers">Manufacturers</NavLink>,{" "}
                        <NavLink to="/medicines/molecules">Molecules</NavLink>,{" "}
                        <NavLink to="/medicines/forms">Forms</NavLink>,{" "}
                        <NavLink to="/medicines/strengths">Strengths</NavLink>,{" "}
                        <NavLink to="/medicines/expiry-tracker">Expiry Tracker</NavLink>,{" "}
                        <NavLink to="/medicines/hsn-gst">HSN / GST</NavLink>.
                    </>
                )
            },
            {
                id: "inv-1",
                q: "Where are inventory movements and warehouses?",
                a: (
                    <>
                        Inventory overview is at <NavLink to="/inventory">Inventory</NavLink>. Explore{" "}
                        <NavLink to="/inventory/lots">Lots</NavLink>,{" "}
                        <NavLink to="/inventory/batches">Batches</NavLink>,{" "}
                        <NavLink to="/inventory/adjustments">Adjustments</NavLink>,{" "}
                        <NavLink to="/inventory/transfers">Transfers</NavLink>,{" "}
                        <NavLink to="/inventory/warehouses">Warehouses</NavLink>,{" "}
                        <NavLink to="/inventory/reorder">Reorder</NavLink>.
                    </>
                )
            }
        ]
    },
    {
        id: "procurement-logistics",
        title: "Procurement & Logistics",
        faqs: [
            {
                id: "po-1",
                q: "Where do I manage vendors and purchase orders?",
                a: (
                    <>
                        Vendors live under <NavLink to="/vendors">Vendors</NavLink>. Purchase flows under{" "}
                        <NavLink to="/purchase-orders">Purchase Orders</NavLink> with child paths like{" "}
                        <NavLink to="/purchase-orders/PO-1024/receipt">Goods Receipt</NavLink> and{" "}
                        <NavLink to="/purchase-orders/PO-1024/bill">Vendor Bill</NavLink> (example deep links).
                    </>
                )
            },
            {
                id: "ship-1",
                q: "Where do I track shipments and labels?",
                a: (
                    <>
                        Use <NavLink to="/shipments">Shipments</NavLink>. You can also preview{" "}
                        <NavLink to="/shipments/carriers">Carriers</NavLink>,{" "}
                        <NavLink to="/shipments/SHIP-2301/track">Track</NavLink>, and{" "}
                        <NavLink to="/shipments/SHIP-2301/labels">Labels</NavLink> (examples).
                    </>
                )
            }
        ]
    },
    {
        id: "finance-reports",
        title: "Finance & Reports",
        faqs: [
            {
                id: "fin-1",
                q: "What finance sections are available?",
                a: (
                    <>
                        Explore <NavLink to="/finance">Finance</NavLink>, chart of accounts at{" "}
                        <NavLink to="/finance/chart-of-accounts">COA</NavLink>,{" "}
                        <NavLink to="/finance/ledgers">Ledgers</NavLink>,{" "}
                        <NavLink to="/finance/journals">Journals</NavLink>,{" "}
                        <NavLink to="/finance/taxes">Taxes</NavLink>,{" "}
                        <NavLink to="/finance/gst-returns">GST Returns</NavLink>,{" "}
                        <NavLink to="/finance/balance-sheet">Balance Sheet</NavLink>,{" "}
                        <NavLink to="/finance/profit-loss">Profit & Loss</NavLink>,{" "}
                        <NavLink to="/finance/trial-balance">Trial Balance</NavLink>.
                    </>
                )
            },
            {
                id: "rep-1",
                q: "Where are business reports?",
                a: (
                    <>
                        Head to <NavLink to="/reports">Reports</NavLink> →{" "}
                        <NavLink to="/reports/sales">Sales</NavLink>,{" "}
                        <NavLink to="/reports/inventory">Inventory</NavLink>,{" "}
                        <NavLink to="/reports/customers">Customers</NavLink>,{" "}
                        <NavLink to="/reports/finance">Finance</NavLink>,{" "}
                        <NavLink to="/reports/procurement">Procurement</NavLink>,{" "}
                        <NavLink to="/reports/shipment">Shipment</NavLink>,{" "}
                        <NavLink to="/reports/gst">GST</NavLink>.
                    </>
                )
            }
        ]
    },
    {
        id: "admin-settings",
        title: "Admin & Settings",
        faqs: [
            {
                id: "adm-1",
                q: "Admin features overview",
                a: (
                    <>
                        See <NavLink to="/admin/users">Users</NavLink>, <NavLink to="/admin/roles">Roles</NavLink>,{" "}
                        <NavLink to="/admin/permissions">Permissions</NavLink>,{" "}
                        <NavLink to="/admin/audit-log">Audit Log</NavLink>,{" "}
                        <NavLink to="/admin/activity">Activity</NavLink>,{" "}
                        <NavLink to="/admin/system-status">System Status</NavLink>,{" "}
                        <NavLink to="/admin/feature-flags">Feature Flags</NavLink>,{" "}
                        <NavLink to="/admin/tenants">Tenants</NavLink>,{" "}
                        <NavLink to="/admin/integrations">Integrations</NavLink>,{" "}
                        <NavLink to="/admin/email-templates">Email Templates</NavLink>,{" "}
                        <NavLink to="/admin/sms-templates">SMS Templates</NavLink>.
                    </>
                )
            },
            {
                id: "set-1",
                q: "Where do I configure appearance, numbering and notifications?",
                a: (
                    <>
                        Visit <NavLink to="/settings">Settings</NavLink> →{" "}
                        <NavLink to="/settings/appearance">Appearance</NavLink>,{" "}
                        <NavLink to="/settings/numbering">Numbering</NavLink>,{" "}
                        <NavLink to="/settings/notifications">Notifications</NavLink>,{" "}
                        <NavLink to="/settings/print-templates">Print Templates</NavLink>,{" "}
                        <NavLink to="/settings/webhooks">Webhooks</NavLink>.
                    </>
                )
            }
        ]
    },
    {
        id: "help-feedback",
        title: "Help, Feedback & Roadmap",
        faqs: [
            {
                id: "help-1",
                q: "Where can I find more examples or raise a query?",
                a: (
                    <>
                        Try <NavLink to="/examples">Examples</NavLink> for component demos.
                        For general docs go to <NavLink to="/help">Help Center</NavLink>, common questions at{" "}
                        <NavLink to="/faq">FAQ</NavLink>, share thoughts at{" "}
                        <NavLink to="/feedback">Feedback</NavLink> or check{" "}
                        <NavLink to="/changelog">Changelog</NavLink> and{" "}
                        <NavLink to="/roadmap">Roadmap</NavLink>.
                    </>
                )
            },
            {
                id: "help-2",
                q: "How do I contact support?",
                a: (
                    <>
                        Use <NavLink to="/contact">Contact</NavLink>. You may also open{" "}
                        <NavLink to="/notifications">Notifications</NavLink> for system messages.
                    </>
                )
            }
        ]
    }
];

function filterFaqs(query) {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!tokens.length) return { predicate: () => true, highlight: (s) => s };
    const predicate = (str) => {
        const hay = (str || "").toLowerCase();
        return tokens.every((t) => hay.includes(t));
    };
    const highlight = (node) => node; // (keep clean; theme typography is strong enough)
    return { predicate, highlight };
}

const FaqPage = () => {
    const [q, setQ] = useState("");
    const printAreaRef = useRef(null);

    const { predicate } = useMemo(() => filterFaqs(q), [q]);

    // Derived layout: which FAQs are visible
    const visible = useMemo(() => {
        return sections.map(sec => {
            const faqs = sec.faqs.map(item => {
                const text = `${item.q} ${typeof item.a === "string" ? item.a : ""}`;
                const show = predicate(text);
                return { ...item, _show: show };
            });
            const any = faqs.some(f => f._show);
            return { ...sec, faqs, _any: any };
        });
    }, [q]);

    const handlePrint = () => {
        const body = document.body;
        if (!body) return;
        body.classList.add("print-section-mode");
        // allow paint
        setTimeout(() => {
            window.print();
            setTimeout(() => body.classList.remove("print-section-mode"), 100);
        }, 50);
    };

    const toc = useMemo(() => {
        return visible
            .filter(s => s._any)
            .map(s => ({ id: s.id, title: s.title, count: s.faqs.filter(f => f._show).length }));
    }, [visible]);

    return (
        <S.Wrap>
            {/* print-only rules (scoped to page via body class as requested) */}
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

            <S.HeaderBar>
                <div className="title">
                    <h1>FAQ</h1>
                    <S.MetaRow>
                        <span className="meta">
                            Docs last updated:&nbsp;
                            <strong>{fmt.dateTime(buildTimeISO)}</strong>
                        </span>
                        <span className="divider">•</span>
                        <span className="meta">
                            Need more? Visit <NavLink to="/help">Help Center</NavLink> or <NavLink to="/contact">Contact</NavLink>
                        </span>
                    </S.MetaRow>
                </div>

                <div className="actions">
                    <NavLink className="btn ghost" to="/help">Help Center</NavLink>
                    <NavLink className="btn ghost" to="/changelog">Changelog</NavLink>
                    <NavLink className="btn ghost" to="/roadmap">Roadmap</NavLink>
                    <button className="btn primary" onClick={handlePrint} title="Print FAQ">
                        <MdPrint size={16} />&nbsp;Print
                    </button>
                </div>
            </S.HeaderBar>

            <S.ToolRow>
                <div className="search">
                    <MdSearch size={18} className="icon" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search questions (e.g. orders print, inventory transfers)"
                        aria-label="Search FAQs"
                    />
                </div>

                <div className="jumpers">
                    <NavLink className="chip" to="/home">Home</NavLink>
                    <NavLink className="chip" to="/dashboard">Dashboard</NavLink>
                    <NavLink className="chip" to="/customers">Customers</NavLink>
                    <NavLink className="chip" to="/orders">Orders</NavLink>
                    <NavLink className="chip" to="/invoices">Invoices</NavLink>
                    <NavLink className="chip" to="/products">Products</NavLink>
                    <NavLink className="chip" to="/inventory">Inventory</NavLink>
                    <NavLink className="chip" to="/reports">Reports</NavLink>
                    <NavLink className="chip" to="/finance">Finance</NavLink>
                    <NavLink className="chip" to="/admin/users">Admin</NavLink>
                    <NavLink className="chip" to="/settings">Settings</NavLink>
                    <NavLink className="chip" to="/tools/theme-tokens">Theme Tokens</NavLink>
                </div>
            </S.ToolRow>

            <S.Grid>
                {/* Sidebar TOC */}
                <S.Sidebar>
                    <div className="toc">
                        <div className="toc-title">On this page</div>
                        <ul>
                            {toc.map(item => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`} title={item.title}>
                                        <span className="arrow"><MdKeyboardArrowRight size={16} /></span>
                                        <span className="label">{item.title}</span>
                                        <span className="count">{item.count}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="quick">
                        <div className="quick-title">Quick Links</div>
                        <div className="list">
                            <NavLink to="/examples" className="row">Examples</NavLink>
                            <NavLink to="/examples/print" className="row">Print Demo</NavLink>
                            <NavLink to="/invoices" className="row">Invoices</NavLink>
                            <NavLink to="/receipts" className="row">Receipts</NavLink>
                            <NavLink to="/purchase-orders" className="row">Purchase Orders</NavLink>
                            <NavLink to="/shipments" className="row">Shipments</NavLink>
                            <NavLink to="/admin/system-status" className="row">System Status</NavLink>
                            <NavLink to="/settings/appearance" className="row">Appearance</NavLink>
                            <NavLink to="/tools/import-export" className="row">Import / Export</NavLink>
                        </div>
                    </div>
                </S.Sidebar>

                {/* Main content - print scope */}
                <S.Main id="search-print-area" ref={printAreaRef}>
                    {visible.map(sec => sec._any && (
                        <section id={sec.id} key={sec.id} className="faq-section">
                            <S.SectionHeader>
                                <h2>{sec.title}</h2>
                                <a className="anchor" href={`#${sec.id}`} title="Copy link">
                                    <MdLink size={16} />
                                </a>
                            </S.SectionHeader>

                            <div className="items">
                                {sec.faqs.filter(f => f._show).map(item => (
                                    <FaqItem key={item.id} item={item} />
                                ))}
                            </div>
                        </section>
                    ))}
                </S.Main>
            </S.Grid>
        </S.Wrap>
    );
};

function FaqItem({ item }) {
    const [open, setOpen] = useState(true); // open by default (premium, less clicks)
    return (
        <S.FaqCard data-open={open ? "true" : "false"}>
            <button className="q" onClick={() => setOpen(v => !v)} aria-expanded={open}>
                <span className="icon">{open ? <MdKeyboardArrowDown size={18} /> : <MdKeyboardArrowRight size={18} />}</span>
                <span className="label">{item.q}</span>
            </button>
            <div className="a" aria-hidden={!open}>
                {item.a}
            </div>
        </S.FaqCard>
    );
}

export default FaqPage;
