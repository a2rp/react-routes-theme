import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPrint, MdTune, MdFileUpload, MdLockOutline, MdOpenInNew, MdChevronRight } from "react-icons/md";
import { Styled } from "./styled";

/** ---- tiny date helpers (exact format required) ---- */
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad2 = (n) => String(n).padStart(2, "0");
const toDate = (dLike) => (dLike ? new Date(dLike) : new Date());
const fmtDate = (dLike) => {
    const d = toDate(dLike);
    return `${DAYS[d.getDay()]} ${MONTHS[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (dLike) => {
    const d = toDate(dLike);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
};
const fmtDateTime = (dLike) => `${fmtDate(dLike)} ${fmtTime(dLike)}`;

/** Pull build/commit timestamps if provided by Vite define */
const buildISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : null;
const commitISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : null;

const ToolsPlayground = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState({ open: false, title: "", body: "" });

    const now = useMemo(() => new Date(), []);
    const buildAt = useMemo(() => (buildISO ? new Date(buildISO) : null), []);
    const commitAt = useMemo(() => (commitISO ? new Date(commitISO) : null), []);

    /** print only the dedicated section */
    const printSection = useCallback(() => {
        const body = document.body;
        if (!body) return;
        body.classList.add("print-section-mode");
        // graceful revert after print
        const cleanup = () => body.classList.remove("print-section-mode");
        const onAfter = () => { cleanup(); window.removeEventListener("afterprint", onAfter); };
        window.addEventListener("afterprint", onAfter);
        window.print();
        // if afterprint doesn't fire (some browsers), revert after small delay
        setTimeout(cleanup, 800);
    }, []);

    const openDisabled = useCallback((title, body) => {
        setModal({ open: true, title, body });
    }, []);

    const closeModal = () => setModal({ open: false, title: "", body: "" });

    // keep page live-updating seconds label on the clock at top-right (UI only, no storage)
    const [tick, setTick] = useState(fmtDateTime(now));
    useEffect(() => {
        const id = setInterval(() => setTick(fmtDateTime(new Date())), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <Styled.Page data-page="tools-playground">
            <Styled.HeaderBar>
                <div className="lhs">
                    <h1>Playground</h1>
                    <p className="sub">Quick access to demos, deep links, and utilities — tuned for display-only theme.</p>
                </div>

                <div className="rhs">
                    <div className="meta">
                        <span className="k">Now</span>
                        <span className="v">{tick}</span>
                    </div>
                    {buildAt && (
                        <div className="meta">
                            <span className="k">Built</span>
                            <span className="v">{fmtDateTime(buildAt)}</span>
                        </div>
                    )}
                    {commitAt && (
                        <div className="meta">
                            <span className="k">Last Commit</span>
                            <span className="v">{fmtDateTime(commitAt)}</span>
                        </div>
                    )}
                    <div className="actions">
                        <button onClick={printSection} title="Print the section below">
                            <MdPrint size={18} /> <span>Print Section</span>
                        </button>
                        <button onClick={() => navigate("/tools/theme-tokens")} title="Open theme tokens">
                            <MdTune size={18} /> <span>Theme Tokens</span>
                        </button>
                        <button onClick={() => navigate("/tools/import-export")} title="Import/Export">
                            <MdFileUpload size={18} /> <span>Import / Export</span>
                        </button>
                        <button
                            onClick={() =>
                                openDisabled("Demo Mode", "Seeding is disabled in this demo. Navigation and print are available.")
                            }
                            title="Disabled in demo"
                        >
                            <MdLockOutline size={18} /> <span>Seed Data</span>
                        </button>
                    </div>
                </div>
            </Styled.HeaderBar>

            {/* quick nav chips */}
            <Styled.ChipsRow role="navigation" aria-label="Quick navigation">
                <Link to="/home" className="chip">Home</Link>
                <Link to="/dashboard" className="chip">Dashboard</Link>
                <Link to="/customers" className="chip">Customers</Link>
                <Link to="/orders" className="chip">Orders</Link>
                <Link to="/invoices" className="chip">Invoices</Link>
                <Link to="/receipts" className="chip">Receipts</Link>
                <Link to="/products" className="chip">Products</Link>
                <Link to="/medicines" className="chip">Medicines</Link>
                <Link to="/inventory" className="chip">Inventory</Link>
                <Link to="/vendors" className="chip">Vendors</Link>
                <Link to="/purchase-orders" className="chip">POs</Link>
                <Link to="/finance" className="chip">Finance</Link>
                <Link to="/reports" className="chip">Reports</Link>
                <Link to="/admin/users" className="chip">Admin</Link>
                <Link to="/settings" className="chip">Settings</Link>
                <Link to="/tools/theme-tokens" className="chip">Theme Tokens</Link>
            </Styled.ChipsRow>

            {/* main grid */}
            <Styled.Grid>
                <Styled.Card>
                    <div className="cardHd">
                        <h3>Core & CRM</h3>
                        <span className="note">Quick entry points</span>
                    </div>
                    <div className="links twoCol">
                        <Link to="/customers"><MdChevronRight /> All Customers</Link>
                        <Link to="/customers/new" title="Demo-only disabled path"><MdChevronRight /> Add Customer</Link>
                        <Link to="/customers/CUST-1001"><MdChevronRight /> Customer CUST-1001</Link>
                        <Link to="/customers/CUST-1001/edit"><MdChevronRight /> Edit CUST-1001</Link>
                        <Link to="/customers/CUST-1001/print"><MdChevronRight /> Print CUST-1001</Link>
                        <Link to="/search"><MdChevronRight /> Global Search</Link>
                        <Link to="/about"><MdChevronRight /> About</Link>
                        <Link to="/examples"><MdChevronRight /> Examples Home</Link>
                    </div>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Sales & Billing</h3>
                        <span className="note">Display-only routes</span>
                    </div>
                    <div className="links twoCol">
                        <Link to="/orders"><MdChevronRight /> Orders</Link>
                        <Link to="/orders/new" title="Demo-only disabled path"><MdChevronRight /> New Order</Link>
                        <Link to="/orders/ORD-3001"><MdChevronRight /> Order ORD-3001</Link>
                        <Link to="/orders/ORD-3001/print"><MdChevronRight /> Print ORD-3001</Link>
                        <Link to="/sales/quotes"><MdChevronRight /> Quotes</Link>
                        <Link to="/sales/returns"><MdChevronRight /> Returns</Link>
                        <Link to="/sales/payments"><MdChevronRight /> Payments</Link>
                        <Link to="/invoices"><MdChevronRight /> Invoices</Link>
                        <Link to="/invoices/new" title="Demo-only disabled path"><MdChevronRight /> New Invoice</Link>
                        <Link to="/invoices/INV-2031"><MdChevronRight /> Invoice INV-2031</Link>
                        <Link to="/invoices/INV-2031/print"><MdChevronRight /> Print INV-2031</Link>
                        <Link to="/receipts"><MdChevronRight /> Receipts</Link>
                    </div>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Catalog & Medicines</h3>
                        <span className="note">Products, attributes & pharma</span>
                    </div>
                    <div className="links twoCol">
                        <Link to="/products"><MdChevronRight /> All Products</Link>
                        <Link to="/products/new" title="Demo-only disabled path"><MdChevronRight /> Add Product</Link>
                        <Link to="/categories"><MdChevronRight /> Categories</Link>
                        <Link to="/products/brands"><MdChevronRight /> Brands</Link>
                        <Link to="/products/attributes"><MdChevronRight /> Attributes</Link>
                        <Link to="/products/price-lists"><MdChevronRight /> Price Lists</Link>
                        <Link to="/medicines"><MdChevronRight /> Medicines</Link>
                        <Link to="/medicines/manufacturers"><MdChevronRight /> Manufacturers</Link>
                        <Link to="/medicines/molecules"><MdChevronRight /> Molecules</Link>
                        <Link to="/medicines/forms"><MdChevronRight /> Forms</Link>
                        <Link to="/medicines/strengths"><MdChevronRight /> Strengths</Link>
                        <Link to="/medicines/expiry-tracker"><MdChevronRight /> Expiry Tracker</Link>
                        <Link to="/medicines/hsn-gst"><MdChevronRight /> HSN / GST</Link>
                    </div>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Inventory & Purchasing</h3>
                        <span className="note">Stock & vendors</span>
                    </div>
                    <div className="links twoCol">
                        <Link to="/inventory"><MdChevronRight /> Overview</Link>
                        <Link to="/inventory/lots"><MdChevronRight /> Lots</Link>
                        <Link to="/inventory/batches"><MdChevronRight /> Batches</Link>
                        <Link to="/inventory/adjustments"><MdChevronRight /> Adjustments</Link>
                        <Link to="/inventory/transfers"><MdChevronRight /> Transfers</Link>
                        <Link to="/inventory/warehouses"><MdChevronRight /> Warehouses</Link>
                        <Link to="/inventory/reorder"><MdChevronRight /> Reorder Planner</Link>

                        <Link to="/vendors"><MdChevronRight /> Vendors</Link>
                        <Link to="/vendors/new" title="Demo-only disabled path"><MdChevronRight /> Add Vendor</Link>
                        <Link to="/purchase-orders"><MdChevronRight /> Purchase Orders</Link>
                        <Link to="/purchase-orders/new" title="Demo-only disabled path"><MdChevronRight /> New PO</Link>
                        <Link to="/shipments"><MdChevronRight /> Shipments</Link>
                        <Link to="/shipments/new" title="Demo-only disabled path"><MdChevronRight /> New Shipment</Link>
                        <Link to="/shipments/carriers"><MdChevronRight /> Carriers</Link>
                    </div>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Reports & Finance</h3>
                        <span className="note">Static display-oriented</span>
                    </div>
                    <div className="links twoCol">
                        <Link to="/reports"><MdChevronRight /> Reports Overview</Link>
                        <Link to="/reports/sales"><MdChevronRight /> Sales</Link>
                        <Link to="/reports/inventory"><MdChevronRight /> Inventory</Link>
                        <Link to="/reports/customers"><MdChevronRight /> Customers</Link>
                        <Link to="/reports/finance"><MdChevronRight /> Finance</Link>
                        <Link to="/reports/procurement"><MdChevronRight /> Procurement</Link>
                        <Link to="/reports/shipment"><MdChevronRight /> Shipment</Link>
                        <Link to="/reports/gst"><MdChevronRight /> GST</Link>

                        <Link to="/finance"><MdChevronRight /> Finance Overview</Link>
                        <Link to="/finance/chart-of-accounts"><MdChevronRight /> Chart of Accounts</Link>
                        <Link to="/finance/ledgers"><MdChevronRight /> Ledgers</Link>
                        <Link to="/finance/journals"><MdChevronRight /> Journals</Link>
                        <Link to="/finance/taxes"><MdChevronRight /> Taxes</Link>
                        <Link to="/finance/gst-returns"><MdChevronRight /> GST Returns</Link>
                        <Link to="/finance/balance-sheet"><MdChevronRight /> Balance Sheet</Link>
                        <Link to="/finance/profit-loss"><MdChevronRight /> Profit & Loss</Link>
                        <Link to="/finance/trial-balance"><MdChevronRight /> Trial Balance</Link>
                    </div>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Admin & Settings</h3>
                        <span className="note">Configuration</span>
                    </div>
                    <div className="links twoCol">
                        <Link to="/admin/users"><MdChevronRight /> Users</Link>
                        <Link to="/admin/roles"><MdChevronRight /> Roles</Link>
                        <Link to="/admin/permissions"><MdChevronRight /> Permissions</Link>
                        <Link to="/admin/audit-log"><MdChevronRight /> Audit Log</Link>
                        <Link to="/admin/activity"><MdChevronRight /> Activity</Link>
                        <Link to="/admin/system-status"><MdChevronRight /> System Status</Link>
                        <Link to="/admin/feature-flags"><MdChevronRight /> Feature Flags</Link>
                        <Link to="/admin/tenants"><MdChevronRight /> Tenants</Link>
                        <Link to="/admin/integrations"><MdChevronRight /> Integrations</Link>
                        <Link to="/admin/email-templates"><MdChevronRight /> Email Templates</Link>
                        <Link to="/admin/sms-templates"><MdChevronRight /> SMS Templates</Link>

                        <Link to="/settings"><MdChevronRight /> Settings Home</Link>
                        <Link to="/settings/profile"><MdChevronRight /> Profile</Link>
                        <Link to="/settings/appearance"><MdChevronRight /> Appearance</Link>
                        <Link to="/settings/billing"><MdChevronRight /> Billing</Link>
                        <Link to="/settings/backups"><MdChevronRight /> Backups</Link>
                        <Link to="/settings/tokens"><MdChevronRight /> Tokens</Link>
                        <Link to="/settings/warehouses"><MdChevronRight /> Warehouses</Link>
                        <Link to="/settings/locations"><MdChevronRight /> Locations</Link>
                        <Link to="/settings/tax"><MdChevronRight /> Tax</Link>
                        <Link to="/settings/units"><MdChevronRight /> Units</Link>
                        <Link to="/settings/currencies"><MdChevronRight /> Currencies</Link>
                        <Link to="/settings/numbering"><MdChevronRight /> Numbering</Link>
                        <Link to="/settings/print-templates"><MdChevronRight /> Print Templates</Link>
                        <Link to="/settings/notifications"><MdChevronRight /> Notifications</Link>
                        <Link to="/settings/webhooks"><MdChevronRight /> Webhooks</Link>
                    </div>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Healthcare & Manufacturing</h3>
                        <span className="note">Optional modules</span>
                    </div>
                    <div className="links twoCol">
                        <Link to="/patients"><MdChevronRight /> Patients</Link>
                        <Link to="/appointments"><MdChevronRight /> Appointments</Link>
                        <Link to="/appointments/calendar"><MdChevronRight /> Appointment Calendar</Link>
                        <Link to="/prescriptions"><MdChevronRight /> Prescriptions</Link>
                        <Link to="/labs"><MdChevronRight /> Labs</Link>
                        <Link to="/imaging"><MdChevronRight /> Imaging</Link>

                        <Link to="/manufacturing"><MdChevronRight /> Manufacturing</Link>
                        <Link to="/manufacturing/bom"><MdChevronRight /> BOM</Link>
                        <Link to="/manufacturing/work-orders"><MdChevronRight /> Work Orders</Link>
                        <Link to="/manufacturing/production"><MdChevronRight /> Production</Link>
                    </div>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Theme Palette</h3>
                        <span className="note">Tokens from CSS variables</span>
                    </div>
                    <Styled.Swatches>
                        <div className="sw" data-name="bg"><span>--bg</span></div>
                        <div className="sw" data-name="text"><span>--text</span></div>
                        <div className="sw" data-name="muted"><span>--muted</span></div>
                        <div className="sw" data-name="card"><span>--card</span></div>
                        <div className="sw" data-name="border"><span>--border</span></div>
                        <div className="sw" data-name="accent"><span>--accent</span></div>
                        <div className="sw" data-name="accent-soft"><span>--accent-soft</span></div>
                    </Styled.Swatches>
                    <p className="tiny">Palette renders from current theme variables. Toggle app theme to preview.</p>
                </Styled.Card>

                <Styled.Card id="search-print-area">
                    <div className="cardHd">
                        <h3>Print Preview Area</h3>
                        <span className="note">Only this section will print</span>
                    </div>
                    <div className="printBlock">
                        <div className="row">
                            <div className="col">
                                <h4>Document</h4>
                                <p>Reference: <strong>DOC-2025-001</strong></p>
                                <p>Generated: <strong>{fmtDateTime(now)}</strong></p>
                            </div>
                            <div className="col">
                                <h4>From</h4>
                                <p>Ashish Ranjan</p>
                                <p>Playground · Theme Demos</p>
                            </div>
                            <div className="col">
                                <h4>Status</h4>
                                <span className="badge">Demo</span>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="row">
                            <div className="col wide">
                                <p>This section showcases the exact print behavior. Use the “Print Section” action above — the page will switch to print-only mode for this block and revert automatically after printing.</p>
                            </div>
                        </div>
                    </div>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Date Format Samples</h3>
                        <span className="note">Unified across the app</span>
                    </div>
                    <div className="links">
                        <div className="kv"><span>Date</span><strong>{fmtDate(now)}</strong></div>
                        <div className="kv"><span>Date + Time</span><strong>{fmtDateTime(now)}</strong></div>
                        <div className="kv"><span>Only Time</span><strong>{fmtTime(now)}</strong></div>
                    </div>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Shortcuts</h3>
                        <span className="note">Discoverability</span>
                    </div>
                    <ul className="bullets">
                        <li><kbd>Ctrl</kbd> + <kbd>K</kbd> — sidebar search focus</li>
                        <li><kbd>Enter</kbd>/<kbd>Space</kbd> — toggle a sidebar section</li>
                        <li>Tab/Shift+Tab — keyboard navigation across actions</li>
                    </ul>
                </Styled.Card>

                <Styled.Card>
                    <div className="cardHd">
                        <h3>Deep Links</h3>
                        <span className="note">Open specific screens directly</span>
                    </div>
                    <div className="links twoCol">
                        <Link to="/print/invoice/INV-2031"><MdOpenInNew /> Print · Invoice INV-2031</Link>
                        <Link to="/print/quote/Q-9001"><MdOpenInNew /> Print · Quote Q-9001</Link>
                        <Link to="/print/sticker/STK-1001"><MdOpenInNew /> Print · Sticker STK-1001</Link>
                        <Link to="/admin/users/USR-101"><MdOpenInNew /> Admin · User USR-101</Link>
                        <Link to="/finance/ledgers/ACC-500"><MdOpenInNew /> Finance · Ledger ACC-500</Link>
                        <Link to="/orders/ORD-3001/items/ITEM-01"><MdOpenInNew /> Order ORD-3001 · Item ITEM-01</Link>
                        <Link to="/labs/catalog"><MdOpenInNew /> Labs Catalog</Link>
                        <Link to="/appointments/calendar"><MdOpenInNew /> Appointment Calendar</Link>
                    </div>
                </Styled.Card>
            </Styled.Grid>

            {/* custom confirm (demo) modal */}
            {modal.open && (
                <Styled.ModalBackdrop role="dialog" aria-modal="true">
                    <Styled.ModalCard>
                        <div className="hd">
                            <h3>{modal.title}</h3>
                        </div>
                        <div className="bd">
                            <p>{modal.body}</p>
                        </div>
                        <div className="ft">
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </Styled.ModalCard>
                </Styled.ModalBackdrop>
            )}

            {/* print CSS   */}
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
        </Styled.Page>
    );
};

export default ToolsPlayground;
