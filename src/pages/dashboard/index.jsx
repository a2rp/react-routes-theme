import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/** Date utils (consistent formatting across app) */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const onlyTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

// Non-blocking info modal (no browser alerts)
const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>Okay</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const DashboardPage = () => {
    // build/commit times from Vite define (fallback to now)
    const buildISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || new Date().toISOString();
    const commitISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || new Date().toISOString();

    const now = useMemo(() => new Date(), []);
    const [demoMsg, setDemoMsg] = useState("");
    const printRef = useRef(null);

    const openDemoInfo = (txt = "This action is disabled in the demo.") => setDemoMsg(txt);
    const closeDemoInfo = () => setDemoMsg("");

    const exportSnapshot = () => {
        const payload = {
            meta: {
                snapshotAt: fmt(new Date(), true),
                app: "React Routes Theme (Display Only)",
                version: "1.0",
            },
            kpis: {
                revenue: "₹ 24,80,000",
                orders: "1,248",
                customers: "4,310",
                inventoryValue: "₹ 78,40,000",
            },
            quick: {
                topCustomers: ["CUST-1001", "CUST-1015", "CUST-1032"],
                pendingInvoices: ["INV-2031", "INV-2032", "INV-2035"],
            },
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `dashboard-snapshot-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const printSection = () => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
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

            {/* Header */}
            <Styled.Header className="card">
                <div className="lhs">
                    <h1>Dashboard</h1>
                    <div className="meta">
                        <span>Today: {fmt(now, true)}</span>
                        <span>•</span>
                        <span>Build: {fmt(buildISO, true)}</span>
                        <span>•</span>
                        <span>Commit: {fmt(commitISO, true)}</span>
                    </div>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/home" title="Go Home">Home</NavLink>
                        <span>/</span>
                        <span className="current">Dashboard</span>
                    </nav>
                </div>
                <div className="rhs">
                    <button className="btnPrimary" onClick={() => openDemoInfo("New Order is disabled in the demo.")} title="Demo only">New Order</button>
                    <button className="btnPrimary" onClick={() => openDemoInfo("New Invoice is disabled in the demo.")} title="Demo only">New Invoice</button>
                    <button className="btnPrimary" onClick={() => openDemoInfo("Add Product is disabled in the demo.")} title="Demo only">Add Product</button>
                    <button className="btnGhost" onClick={exportSnapshot} title="Export a JSON snapshot">Export</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary section">Print</button>
                </div>
            </Styled.Header>

            {/* KPI Row */}
            <Styled.KpiRow>
                <div className="kpi card">
                    <div className="label">Revenue</div>
                    <div className="value">₹ 24,80,000</div>
                    <div className="trend up">▲ 4.2%</div>
                    <div className="spark">
                        {/* inline sparkline (display-only) */}
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
                            <polyline fill="none" stroke="var(--accent)" strokeWidth="2"
                                points="0,22 10,24 20,18 30,16 40,20 50,12 60,14 70,10 80,12 90,8 100,10" />
                        </svg>
                    </div>
                </div>

                <div className="kpi card">
                    <div className="label">Orders</div>
                    <div className="value">1,248</div>
                    <div className="trend up">▲ 2.6%</div>
                    <div className="spark">
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
                            <polyline fill="none" stroke="var(--accent)" strokeWidth="2"
                                points="0,16 10,18 20,14 30,12 40,14 50,16 60,12 70,10 80,12 90,11 100,9" />
                        </svg>
                    </div>
                </div>

                <div className="kpi card">
                    <div className="label">Customers</div>
                    <div className="value">4,310</div>
                    <div className="trend up">▲ 1.1%</div>
                    <div className="spark">
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
                            <polyline fill="none" stroke="var(--accent)" strokeWidth="2"
                                points="0,18 10,17 20,16 30,15 40,14 50,13 60,12 70,11 80,10 90,10 100,9" />
                        </svg>
                    </div>
                </div>

                <div className="kpi card">
                    <div className="label">Inventory Value</div>
                    <div className="value">₹ 78,40,000</div>
                    <div className="trend down">▼ 0.7%</div>
                    <div className="spark">
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
                            <polyline fill="none" stroke="var(--accent)" strokeWidth="2"
                                points="0,8 10,10 20,9 30,12 40,12 50,13 60,14 70,16 80,18 90,20 100,22" />
                        </svg>
                    </div>
                </div>
            </Styled.KpiRow>

            {/* Secondary grid */}
            <Styled.Grid>
                <section className="card">
                    <header className="sectionHeader">
                        <h3>Quick Links</h3>
                    </header>
                    <div className="quickGrid">
                        <NavLink to="/customers" className="quick" title="All customers">
                            <span className="icon">👤</span>
                            <span>Customers</span>
                        </NavLink>
                        <NavLink to="/orders" className="quick" title="All orders">
                            <span className="icon">🧾</span>
                            <span>Orders</span>
                        </NavLink>
                        <NavLink to="/invoices" className="quick" title="Invoices">
                            <span className="icon">💳</span>
                            <span>Invoices</span>
                        </NavLink>
                        <NavLink to="/products" className="quick" title="Products">
                            <span className="icon">📦</span>
                            <span>Products</span>
                        </NavLink>
                        <NavLink to="/inventory" className="quick" title="Inventory">
                            <span className="icon">🏷️</span>
                            <span>Inventory</span>
                        </NavLink>
                        <NavLink to="/reports" className="quick" title="Reports">
                            <span className="icon">📈</span>
                            <span>Reports</span>
                        </NavLink>
                    </div>
                </section>

                <section className="card">
                    <header className="sectionHeader">
                        <h3>Recent Orders</h3>
                        <NavLink to="/orders" className="seeAll">See all</NavLink>
                    </header>

                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Order</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th className="num">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><NavLink to="/orders/ORD-3456">ORD-3456</NavLink></td>
                                    <td><NavLink to="/customers/CUST-1001">CUST-1001</NavLink></td>
                                    <td>{fmt(now)}</td>
                                    <td><span className="pill ok">Confirmed</span></td>
                                    <td className="num">₹ 54,000</td>
                                </tr>
                                <tr>
                                    <td><NavLink to="/orders/ORD-3457">ORD-3457</NavLink></td>
                                    <td><NavLink to="/customers/CUST-1015">CUST-1015</NavLink></td>
                                    <td>{fmt(now)}</td>
                                    <td><span className="pill warn">Awaiting Payment</span></td>
                                    <td className="num">₹ 38,500</td>
                                </tr>
                                <tr>
                                    <td><NavLink to="/orders/ORD-3460">ORD-3460</NavLink></td>
                                    <td><NavLink to="/customers/CUST-1032">CUST-1032</NavLink></td>
                                    <td>{fmt(now)}</td>
                                    <td><span className="pill ok">Packed</span></td>
                                    <td className="num">₹ 19,750</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="card">
                    <header className="sectionHeader">
                        <h3>Pending Invoices</h3>
                        <NavLink to="/invoices" className="seeAll">See all</NavLink>
                    </header>
                    <ul className="list">
                        <li>
                            <div>
                                <NavLink to="/invoices/INV-2031">INV-2031</NavLink>
                                <div className="muted">Raised: {fmt(now, true)}</div>
                            </div>
                            <div className="money">₹ 42,000</div>
                        </li>
                        <li>
                            <div>
                                <NavLink to="/invoices/INV-2032">INV-2032</NavLink>
                                <div className="muted">Raised: {fmt(now, true)}</div>
                            </div>
                            <div className="money">₹ 11,900</div>
                        </li>
                        <li>
                            <div>
                                <NavLink to="/invoices/INV-2035">INV-2035</NavLink>
                                <div className="muted">Raised: {fmt(now, true)}</div>
                            </div>
                            <div className="money">₹ 67,300</div>
                        </li>
                    </ul>
                </section>

                <section className="card">
                    <header className="sectionHeader">
                        <h3>Activity</h3>
                        <span className="muted">{onlyTime(now)}</span>
                    </header>
                    <ul className="timeline">
                        <li>
                            <span className="dot" />
                            <div>
                                <strong>Invoice INV-2031 emailed</strong>
                                <div className="muted">{fmt(now, true)}</div>
                            </div>
                        </li>
                        <li>
                            <span className="dot" />
                            <div>
                                <strong>Order ORD-3456 packed</strong>
                                <div className="muted">{fmt(now)}</div>
                            </div>
                        </li>
                        <li>
                            <span className="dot" />
                            <div>
                                <strong>Customer CUST-1001 profile updated</strong>
                                <div className="muted">{fmt(now, true)}</div>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="card">
                    <header className="sectionHeader">
                        <h3>Stock Alerts</h3>
                        <NavLink to="/inventory" className="seeAll">Inventory</NavLink>
                    </header>
                    <div className="alerts">
                        <div className="alert">
                            <div>
                                <div className="name">MED-AMOX-500</div>
                                <div className="muted">Amoxicillin 500mg • Tablets</div>
                            </div>
                            <div className="right">
                                <div className="pill warn">Low</div>
                                <div className="muted small">Reorder soon</div>
                            </div>
                        </div>
                        <div className="alert">
                            <div>
                                <div className="name">MED-PARA-650</div>
                                <div className="muted">Paracetamol 650mg • Tablets</div>
                            </div>
                            <div className="right">
                                <div className="pill ok">Healthy</div>
                                <div className="muted small">Sufficient</div>
                            </div>
                        </div>
                        <div className="alert">
                            <div>
                                <div className="name">MED-IBU-400</div>
                                <div className="muted">Ibuprofen 400mg • Tablets</div>
                            </div>
                            <div className="right">
                                <div className="pill danger">Expiry</div>
                                <div className="muted small">Track batch</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Printable summary block */}
                <section className="card printBlock" id="search-print-area" ref={printRef}>
                    <header className="sectionHeader">
                        <h3>Print Summary</h3>
                    </header>
                    <div className="printSummary">
                        <div className="line"><span className="k">Snapshot</span><span className="v">{fmt(now, true)}</span></div>
                        <div className="line"><span className="k">Revenue</span><span className="v">₹ 24,80,000</span></div>
                        <div className="line"><span className="k">Orders</span><span className="v">1,248</span></div>
                        <div className="line"><span className="k">Customers</span><span className="v">4,310</span></div>
                        <div className="line"><span className="k">Inventory</span><span className="v">₹ 78,40,000</span></div>
                    </div>
                </section>
            </Styled.Grid>

            <InfoDialog
                open={!!demoMsg}
                title="Demo Mode"
                message={demoMsg}
                onClose={closeDemoInfo}
            />
        </Styled.Page>
    );
};

export default DashboardPage;
