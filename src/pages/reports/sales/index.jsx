import React, { useMemo, useState, useEffect, useCallback } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Styled } from "./styled";

const DEMO_MODE = true;

// --- Date formatting helpers (required formats)
const pad2 = (n) => String(n).padStart(2, "0");
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const fmtDate = (d) => {
    const dt = d instanceof Date ? d : new Date(d);
    return `${weekday[dt.getDay()]} ${month[dt.getMonth()]} ${pad2(dt.getDate())} ${dt.getFullYear()}`;
};
const fmtTime = (d) => {
    const dt = d instanceof Date ? d : new Date(d);
    return `${pad2(dt.getHours())}:${pad2(dt.getMinutes())}:${pad2(dt.getSeconds())}hrs`;
};
const fmtDateTime = (d) => `${fmtDate(d)} ${fmtTime(d)}`;

const buildStamp = (() => {
    try {
        // prefer commit time if defined by Vite define
        // eslint-disable-next-line no-undef
        if (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) return fmtDateTime(new Date(__APP_COMMIT_ISO__));
    } catch { }
    try {
        // eslint-disable-next-line no-undef
        if (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) return fmtDateTime(new Date(__APP_BUILD_ISO__));
    } catch { }
    return fmtDateTime(new Date());
})();

const ConfirmModal = ({ open, title = "Are you sure?", message, confirmText = "Continue", onClose }) => {
    if (!open) return null;
    return (
        <Styled.ModalBackdrop role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <Styled.Modal>
                <header className="modal-head">
                    <h4 id="confirm-title">{title}</h4>
                    <button className="icon" onClick={() => onClose(false)} aria-label="Close">×</button>
                </header>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
                <footer className="modal-foot">
                    <button onClick={() => onClose(false)}>Cancel</button>
                    <button className="primary" onClick={() => onClose(true)}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.ModalBackdrop>
    );
};

const ReportSales = () => {
    const navigate = useNavigate();
    const { search } = useLocation();

    const [range, setRange] = useState(() => {
        const sp = new URLSearchParams(search);
        return sp.get("range") || "last-30";
    });

    const [confirm, setConfirm] = useState({ open: false, title: "", message: "", onDone: null });

    const openConfirm = useCallback((opts) => {
        setConfirm({
            open: true,
            title: opts?.title || "Action",
            message: opts?.message || "Confirm?",
            onDone: (ok) => {
                setConfirm((c) => ({ ...c, open: false }));
                if (ok && typeof opts?.onOk === "function") opts.onOk();
            }
        });
    }, []);

    // Sync range to URL (display-only; no data fetch)
    useEffect(() => {
        const sp = new URLSearchParams(search);
        if (sp.get("range") !== range) {
            sp.set("range", range);
            navigate({ search: sp.toString() }, { replace: true });
        }
    }, [range, search, navigate]);

    // decorative, static display-only data (no calculations)
    const kpis = useMemo(() => ([
        { label: "Gross Revenue", value: "₹ 1,82,40,000", sub: "vs last period +3.2%", link: "/reports/finance" },
        { label: "Net Revenue", value: "₹ 1,64,10,000", sub: "Discounts & returns adjusted", link: "/reports/finance" },
        { label: "Orders", value: "4,820", sub: "Completed & partially fulfilled", link: "/orders" },
        { label: "Invoices Issued", value: "4,605", sub: "Includes recurring invoices", link: "/invoices" },
        { label: "Avg Order Value", value: "₹ 3,404", sub: "AO V incl. tax", link: "/reports/sales" },
        { label: "Payments Captured", value: "₹ 1,57,20,000", sub: "All gateways", link: "/sales/payments" },
    ]), []);

    const topProducts = useMemo(() => ([
        { id: "PRD-1001", name: "Amoxicillin 500mg (Strip of 10)", sku: "MED-AMOX-500", units: "12,420", revenue: "₹ 36,80,000", link: "/products/PRD-1001" },
        { id: "PRD-1022", name: "Paracetamol 650mg (Bottle 60ml)", sku: "MED-PARA-650", units: "10,250", revenue: "₹ 18,40,000", link: "/products/PRD-1022" },
        { id: "PRD-1045", name: "Azithromycin 250mg (Strip of 6)", sku: "MED-AZI-250", units: "8,660", revenue: "₹ 15,10,000", link: "/products/PRD-1045" },
        { id: "PRD-1064", name: "Cough Syrup 100ml", sku: "MED-CS-100", units: "6,390", revenue: "₹ 9,70,000", link: "/products/PRD-1064" },
        { id: "PRD-1090", name: "Vitamin D3 60K IU (Caps)", sku: "MED-D3-60K", units: "5,120", revenue: "₹ 8,30,000", link: "/products/PRD-1090" },
    ]), []);

    const topCustomers = useMemo(() => ([
        { id: "CUST-1001", name: "Sunrise Pharmacy", city: "Bengaluru", orders: "320", revenue: "₹ 12,40,000", link: "/customers/CUST-1001" },
        { id: "CUST-1015", name: "Medico Plus", city: "Hyderabad", orders: "275", revenue: "₹ 10,30,000", link: "/customers/CUST-1015" },
        { id: "CUST-1042", name: "City Health Mart", city: "Pune", orders: "240", revenue: "₹ 9,10,000", link: "/customers/CUST-1042" },
        { id: "CUST-1078", name: "Apollo Retail", city: "Chennai", orders: "210", revenue: "₹ 8,60,000", link: "/customers/CUST-1078" },
        { id: "CUST-1110", name: "Care & Cure", city: "Mumbai", orders: "190", revenue: "₹ 7,50,000", link: "/customers/CUST-1110" },
    ]), []);

    const recentDocs = useMemo(() => ([
        { type: "Order", id: "ORD-3001", when: "Sat Oct 04 2025 10:18:22hrs", who: "Sunrise Pharmacy", link: "/orders/ORD-3001" },
        { type: "Invoice", id: "INV-2031", when: "Sat Oct 04 2025 09:12:04hrs", who: "Medico Plus", link: "/invoices/INV-2031" },
        { type: "Quote", id: "QUO-1101", when: "Fri Oct 03 2025 18:27:10hrs", who: "City Health Mart", link: "/sales/quotes/QUO-1101" },
        { type: "Return", id: "RET-5001", when: "Fri Oct 03 2025 17:06:40hrs", who: "Care & Cure", link: "/sales/returns/RET-5001" },
        { type: "Payment", id: "PAY-7209", when: "Fri Oct 03 2025 16:20:19hrs", who: "Apollo Retail", link: "/sales/payments/PAY-7209" },
    ]), []);

    const handleExport = () => {
        if (DEMO_MODE) {
            openConfirm({
                title: "Export disabled",
                message: "This is a demo-only build. Data export is disabled here.",
                onOk: () => { }
            });
            return;
        }
    };

    const handleSchedule = () => {
        openConfirm({
            title: "Schedule report",
            message: "Scheduling is demoed here. In production, this would set up a periodic email with attachments.",
            onOk: () => { }
        });
    };

    const handlePrint = () => {
        document.body.classList.add("print-section-mode");
        // give layout a tick to apply the class
        requestAnimationFrame(() => {
            window.print();
            setTimeout(() => document.body.classList.remove("print-section-mode"), 0);
        });
    };

    return (
        <Styled.Page>
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

            {/* Breadcrumbs / header */}
            <Styled.Breadcrumbs aria-label="breadcrumbs">
                <NavLink to="/reports">Reports</NavLink>
                <span aria-hidden="true">/</span>
                <span className="current">Sales</span>
            </Styled.Breadcrumbs>

            <Styled.Header>
                <div className="title">
                    <h1>Sales Report</h1>
                    <p className="meta">
                        Generated: <strong>{buildStamp}</strong> &nbsp;•&nbsp; Range:&nbsp;
                        <select value={range} onChange={(e) => setRange(e.target.value)} aria-label="Select report range">
                            <option value="today">Today</option>
                            <option value="yesterday">Yesterday</option>
                            <option value="last-7">Last 7 days</option>
                            <option value="last-30">Last 30 days</option>
                            <option value="this-month">This month</option>
                            <option value="last-month">Last month</option>
                            <option value="qtd">Quarter to date</option>
                            <option value="ytd">Year to date</option>
                            <option value="custom">Custom</option>
                        </select>
                    </p>
                </div>

                <div className="actions" role="toolbar" aria-label="report actions">
                    <button onClick={handlePrint} className="primary">Print</button>
                    <button onClick={handleExport} title="Export CSV/XLS">Export</button>
                    <button onClick={handleSchedule} title="Schedule email">Schedule</button>
                    <NavLink to="/dashboard" className="linklike" title="Go to dashboard">Go to Dashboard</NavLink>
                </div>
            </Styled.Header>

            {/* Everything inside this section will be printable */}
            <section id="search-print-area">
                {/* KPI grid */}
                <Styled.KpiGrid>
                    {kpis.map((k) => (
                        <NavLink to={k.link} key={k.label} className="kpi card" title={k.label}>
                            <div className="label">{k.label}</div>
                            <div className="value">{k.value}</div>
                            <div className="sub">{k.sub}</div>
                        </NavLink>
                    ))}
                </Styled.KpiGrid>

                {/* Quick links */}
                <Styled.QuickLinks className="card">
                    <div className="ql-head">
                        <h3>Quick Navigation</h3>
                        <span className="muted">Deep links you might need</span>
                    </div>
                    <div className="ql-grid">
                        <NavLink to="/orders" title="Sales Orders">Sales Orders</NavLink>
                        <NavLink to="/sales/quotes" title="Quotations">Quotations</NavLink>
                        <NavLink to="/sales/payments" title="Payments">Payments</NavLink>
                        <NavLink to="/invoices" title="Invoices">Invoices</NavLink>
                        <NavLink to="/receipts" title="Receipts">Receipts</NavLink>
                        <NavLink to="/customers" title="Customers">Customers</NavLink>
                        <NavLink to="/products" title="Products">Products</NavLink>
                        <NavLink to="/medicines" title="Medicine Catalog">Medicine Catalog</NavLink>
                        <NavLink to="/inventory" title="Inventory">Inventory</NavLink>
                        <NavLink to="/reports/inventory" title="Inventory Report">Inventory Report</NavLink>
                        <NavLink to="/reports/finance" title="Finance Report">Finance Report</NavLink>
                        <NavLink to="/reports/gst" title="GST Report">GST Report</NavLink>
                    </div>
                </Styled.QuickLinks>

                {/* Two column layout: tables + charts (pure display) */}
                <Styled.TwoCol>
                    <div className="col">
                        <Styled.Card className="card">
                            <header>
                                <h3>Top Products</h3>
                                <NavLink to="/products" className="seeall">See all</NavLink>
                            </header>
                            <Styled.Table role="table" aria-label="Top products">
                                <div className="thead" role="row">
                                    <div className="th">Product</div>
                                    <div className="th">SKU</div>
                                    <div className="th num">Units</div>
                                    <div className="th num">Revenue</div>
                                </div>
                                <div className="tbody">
                                    {topProducts.map((p) => (
                                        <NavLink to={p.link} className="tr" role="row" key={p.id} title={p.name}>
                                            <div className="td">{p.name}</div>
                                            <div className="td mono">{p.sku}</div>
                                            <div className="td num">{p.units}</div>
                                            <div className="td num">{p.revenue}</div>
                                        </NavLink>
                                    ))}
                                </div>
                            </Styled.Table>
                        </Styled.Card>

                        <Styled.Card className="card">
                            <header>
                                <h3>Top Customers</h3>
                                <NavLink to="/customers" className="seeall">See all</NavLink>
                            </header>
                            <Styled.Table role="table" aria-label="Top customers">
                                <div className="thead" role="row">
                                    <div className="th">Customer</div>
                                    <div className="th">City</div>
                                    <div className="th num">Orders</div>
                                    <div className="th num">Revenue</div>
                                </div>
                                <div className="tbody">
                                    {topCustomers.map((c) => (
                                        <NavLink to={c.link} className="tr" role="row" key={c.id} title={c.name}>
                                            <div className="td">{c.name}</div>
                                            <div className="td">{c.city}</div>
                                            <div className="td num">{c.orders}</div>
                                            <div className="td num">{c.revenue}</div>
                                        </NavLink>
                                    ))}
                                </div>
                            </Styled.Table>
                        </Styled.Card>

                        <Styled.Card className="card">
                            <header>
                                <h3>Recent Documents</h3>
                                <div className="legend">
                                    <span className="pill">Order</span>
                                    <span className="pill">Invoice</span>
                                    <span className="pill">Quote</span>
                                    <span className="pill">Return</span>
                                    <span className="pill">Payment</span>
                                </div>
                            </header>
                            <Styled.Table role="table" aria-label="Recent documents">
                                <div className="thead" role="row">
                                    <div className="th">Type</div>
                                    <div className="th">ID</div>
                                    <div className="th">When</div>
                                    <div className="th">Party</div>
                                </div>
                                <div className="tbody">
                                    {recentDocs.map((d) => (
                                        <NavLink to={d.link} className="tr" role="row" key={d.id} title={d.id}>
                                            <div className="td">{d.type}</div>
                                            <div className="td mono">{d.id}</div>
                                            <div className="td">{d.when}</div>
                                            <div className="td">{d.who}</div>
                                        </NavLink>
                                    ))}
                                </div>
                            </Styled.Table>
                        </Styled.Card>
                    </div>

                    <div className="col">
                        {/* Chart placeholders (purely cosmetic, display-only) */}
                        <Styled.Card className="card">
                            <header>
                                <h3>Revenue by Channel</h3>
                                <div className="muted">Online • Retail • Wholesale</div>
                            </header>
                            <Styled.ChartPlaceholder aria-hidden="true">
                                <div className="bars">
                                    <div style={{ height: "72%" }} />
                                    <div style={{ height: "55%" }} />
                                    <div style={{ height: "83%" }} />
                                    <div style={{ height: "64%" }} />
                                    <div style={{ height: "91%" }} />
                                    <div style={{ height: "47%" }} />
                                </div>
                                <div className="xlabels">
                                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                                </div>
                            </Styled.ChartPlaceholder>
                            <div className="footlnks">
                                <NavLink to="/reports/sales" className="linkchip">Weekly</NavLink>
                                <NavLink to="/reports/sales?range=last-30" className="linkchip">Monthly</NavLink>
                                <NavLink to="/reports/sales?range=ytd" className="linkchip">YTD</NavLink>
                            </div>
                        </Styled.Card>

                        <Styled.Card className="card">
                            <header>
                                <h3>Payments by Gateway</h3>
                                <div className="muted">Razorpay • Stripe • Cash</div>
                            </header>
                            <Styled.ChartDonut aria-hidden="true">
                                <div className="ring">
                                    <div className="seg s1" />
                                    <div className="seg s2" />
                                    <div className="seg s3" />
                                    <div className="hole" />
                                </div>
                                <div className="legend">
                                    <span><i className="dot d1" /> Razorpay</span>
                                    <span><i className="dot d2" /> Stripe</span>
                                    <span><i className="dot d3" /> Cash</span>
                                </div>
                            </Styled.ChartDonut>
                            <div className="footlnks">
                                <NavLink to="/sales/payments" className="linkchip">View Payments</NavLink>
                                <NavLink to="/finance/ledgers" className="linkchip">Open Ledgers</NavLink>
                            </div>
                        </Styled.Card>

                        <Styled.Card className="card">
                            <header>
                                <h3>Regional Mix</h3>
                                <div className="muted">City-wise contribution</div>
                            </header>
                            <Styled.MapPlaceholder aria-hidden="true">
                                <div className="blob b1" />
                                <div className="blob b2" />
                                <div className="blob b3" />
                                <div className="blob b4" />
                            </Styled.MapPlaceholder>
                            <div className="footlnks">
                                <NavLink to="/reports/sales" className="linkchip">Metro</NavLink>
                                <NavLink to="/reports/sales" className="linkchip">Tier II</NavLink>
                                <NavLink to="/reports/sales" className="linkchip">Tier III</NavLink>
                            </div>
                        </Styled.Card>
                    </div>
                </Styled.TwoCol>
            </section>

            {/* Footer shortcuts */}
            <Styled.FooterLinks className="card">
                <div className="group">
                    <h4>Related Reports</h4>
                    <div className="links">
                        <NavLink to="/reports/inventory">Inventory</NavLink>
                        <NavLink to="/reports/customers">Customers</NavLink>
                        <NavLink to="/reports/finance">Finance</NavLink>
                        <NavLink to="/reports/procurement">Procurement</NavLink>
                        <NavLink to="/reports/shipment">Shipment</NavLink>
                        <NavLink to="/reports/gst">GST</NavLink>
                    </div>
                </div>
                <div className="group">
                    <h4>Open Modules</h4>
                    <div className="links">
                        <NavLink to="/orders">Orders</NavLink>
                        <NavLink to="/invoices">Invoices</NavLink>
                        <NavLink to="/customers">Customers</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/inventory">Inventory</NavLink>
                        <NavLink to="/sales/payments">Payments</NavLink>
                    </div>
                </div>
                <div className="group">
                    <h4>Settings</h4>
                    <div className="links">
                        <NavLink to="/settings/appearance">Appearance</NavLink>
                        <NavLink to="/settings/print-templates">Print Templates</NavLink>
                        <NavLink to="/settings/notifications">Notifications</NavLink>
                        <NavLink to="/settings/numbering">Numbering</NavLink>
                        <NavLink to="/settings/tax">Tax</NavLink>
                    </div>
                </div>
            </Styled.FooterLinks>

            <ConfirmModal
                open={confirm.open}
                title={confirm.title}
                message={confirm.message}
                onClose={(ok) => confirm.onDone && confirm.onDone(ok)}
                confirmText="OK"
            />
        </Styled.Page>
    );
};

export default ReportSales;
