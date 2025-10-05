import React, { useMemo, useState, useEffect, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { StyledSeed as S } from "./styled";
import {
    FiDatabase, FiUsers, FiPackage, FiFileText, FiTruck, FiUser,
    FiTag, FiHome, FiBarChart2, FiSettings, FiShield, FiActivity,
    FiPlay, FiTrash, FiPrinter, FiLink, FiTool, FiChevronRight
} from "react-icons/fi";

/** Demo-only: nothing persists, nothing writes. */

const DEMO_MODE = true;

/** Fixed datasets summary (display only) */
const DATASETS = [
    { key: "customers", label: "Customers", icon: <FiUsers />, count: 48, list: "/customers", sample: "/customers/CUST-1001" },
    { key: "orders", label: "Orders", icon: <FiFileText />, count: 112, list: "/orders", sample: "/orders/ORD-3001" },
    { key: "invoices", label: "Invoices", icon: <FiFileText />, count: 97, list: "/invoices", sample: "/invoices/INV-2031" },
    { key: "receipts", label: "Receipts", icon: <FiFileText />, count: 154, list: "/receipts", sample: "/invoices" },
    { key: "products", label: "Products", icon: <FiPackage />, count: 260, list: "/products", sample: "/products/PRD-AXN-01" },
    { key: "categories", label: "Categories", icon: <FiTag />, count: 22, list: "/categories", sample: "/categories" },
    { key: "medicines", label: "Medicines", icon: <FiDatabase />, count: 180, list: "/medicines", sample: "/medicines/MED-AMOX-500" },
    { key: "vendors", label: "Vendors", icon: <FiUser />, count: 18, list: "/vendors", sample: "/vendors/VEND-1002" },
    { key: "purchase", label: "Purchase Orders", icon: <FiFileText />, count: 41, list: "/purchase-orders", sample: "/purchase-orders/PO-5010" },
    { key: "shipments", label: "Shipments", icon: <FiTruck />, count: 26, list: "/shipments", sample: "/shipments/SHP-7001" },
    { key: "warehouses", label: "Warehouses", icon: <FiHome />, count: 4, list: "/inventory/warehouses", sample: "/inventory/warehouses" },
    { key: "inventory", label: "Inventory Lots", icon: <FiDatabase />, count: 820, list: "/inventory/lots", sample: "/inventory/lots" },
    { key: "reports", label: "Reports", icon: <FiBarChart2 />, count: 7, list: "/reports", sample: "/reports/sales" },
    { key: "users", label: "Users", icon: <FiShield />, count: 12, list: "/admin/users", sample: "/admin/users" },
];

/** Utility: date formatting exactly as requested */
function pad2(n) { return n.toString().padStart(2, "0"); }
function shortDow(d) { return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()]; }
function shortMon(d) { return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()]; }

function formatDateOnly(iso) {
    const d = new Date(iso);
    return `${shortDow(d)} ${shortMon(d)} ${pad2(d.getDate())} ${d.getFullYear()}`;
}
function formatDateTime(iso) {
    const d = new Date(iso);
    const date = formatDateOnly(iso);
    const time = `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
    return `${date} ${time}`;
}
function formatTimeOnly(iso) {
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
}

const commitISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || new Date().toISOString();
const buildISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || new Date().toISOString();

export default function ToolsSeedPage() {
    const navigate = useNavigate();

    const [showDisabledModal, setShowDisabledModal] = useState(false);
    const [selected, setSelected] = useState(() => new Set(DATASETS.map(d => d.key))); // ephemeral only

    const toggleSelect = (key) => {
        setSelected(prev => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key); else next.add(key);
            return next;
        });
    };

    const readiness = useMemo(() => ([
        { label: "Catalog & Inventory", pct: 92 },
        { label: "Sales & Billing", pct: 88 },
        { label: "Vendors & PO", pct: 81 },
        { label: "Logistics", pct: 76 },
        { label: "Admin & Settings", pct: 84 },
    ]), []);

    const openDisabledModal = useCallback((e) => {
        e?.preventDefault?.();
        setShowDisabledModal(true);
    }, []);

    const closeDisabledModal = useCallback(() => setShowDisabledModal(false), []);

    const handlePrint = () => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            const onAfter = () => {
                document.body.classList.remove("print-section-mode");
                window.removeEventListener("afterprint", onAfter);
            };
            window.addEventListener("afterprint", onAfter);
        }
    };

    return (
        <S.Wrap>
            {/* print rules (scoped snippet you provided) */}
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

            <S.Header>
                <S.Breadcrumbs aria-label="Breadcrumbs">
                    <NavLink to="/home">Home</NavLink>
                    <span className="sep"><FiChevronRight /></span>
                    <NavLink to="/tools/import-export">Tools</NavLink>
                    <span className="sep"><FiChevronRight /></span>
                    <span className="current">Seed</span>
                </S.Breadcrumbs>

                <div className="titleRow">
                    <h1>Seed Demo Data</h1>
                    <S.DemoBadge title="Display-only build">DEMO</S.DemoBadge>
                </div>

                <S.Meta>
                    <div className="metaItem">
                        <span className="k">Build</span>
                        <span className="v">{formatDateTime(buildISO)}</span>
                    </div>
                    <div className="metaItem">
                        <span className="k">Last Commit</span>
                        <span className="v">{formatDateTime(commitISO)}</span>
                    </div>
                    <div className="metaItem">
                        <span className="k">Now</span>
                        <span className="v">{formatDateTime(new Date().toISOString())}</span>
                    </div>
                </S.Meta>

                <S.Actions>
                    <button className="btn primary" disabled={DEMO_MODE} onClick={DEMO_MODE ? openDisabledModal : undefined}>
                        <FiPlay /> Seed All
                    </button>
                    <button className="btn danger" disabled={DEMO_MODE} onClick={DEMO_MODE ? openDisabledModal : undefined}>
                        <FiTrash /> Clear All
                    </button>
                    <button className="btn" onClick={handlePrint}>
                        <FiPrinter /> Print Summary
                    </button>
                    <NavLink className="btn ghost" to="/tools/import-export">
                        <FiTool /> Import / Export
                    </NavLink>
                </S.Actions>
            </S.Header>

            {/* Quick access tiles */}
            <S.Grid cols={6} role="navigation" aria-label="Quick links">
                {DATASETS.map(d => (
                    <NavLink key={d.key} to={d.list} className="tile">
                        <div className="icon">{d.icon}</div>
                        <div className="meta">
                            <div className="label">{d.label}</div>
                            <div className="count">{d.count} items</div>
                        </div>
                        <div className="go"><FiChevronRight /></div>
                    </NavLink>
                ))}
            </S.Grid>

            {/* Readiness snapshot */}
            <S.Card className="card">
                <div className="cardHead">
                    <h2>Dataset Readiness</h2>
                </div>
                <div className="progressList">
                    {readiness.map((r) => (
                        <S.Progress key={r.label} style={{ ["--pct"]: `${r.pct}%` }}>
                            <div className="label">{r.label}</div>
                            <div className="bar"><span /></div>
                            <div className="val">{r.pct}%</div>
                        </S.Progress>
                    ))}
                </div>
            </S.Card>

            {/* Selection table (pure display, actions disabled) */}
            <S.Card className="card">
                <div className="cardHead">
                    <h2>Seed Packs</h2>
                    <div className="headActions">
                        <button className="btn primary" disabled={DEMO_MODE} onClick={DEMO_MODE ? openDisabledModal : undefined}>
                            <FiPlay /> Seed Selected
                        </button>
                        <button className="btn ghost" onClick={() => navigate("/tools/theme-tokens")}>
                            <FiSettings /> Theme Tokens
                        </button>
                    </div>
                </div>

                <S.TableWrap>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: 56 }}>Use</th>
                                <th>Dataset</th>
                                <th style={{ width: 140 }}>Items</th>
                                <th>Open</th>
                                <th>Deep Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DATASETS.map((d) => {
                                const checked = selected.has(d.key);
                                return (
                                    <tr key={d.key}>
                                        <td>
                                            <label className="checkWrap" title="Toggle (no effect in demo)">
                                                <input
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={() => toggleSelect(d.key)}
                                                    aria-label={`Toggle ${d.label}`}
                                                />
                                                <span className="fake" />
                                            </label>
                                        </td>
                                        <td>
                                            <div className="dset">
                                                <span className="ico">{d.icon}</span>
                                                <div className="text">
                                                    <div className="name">{d.label}</div>
                                                    <div className="help">predefined sample data</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><code>{d.count}</code></td>
                                        <td>
                                            <NavLink to={d.list} className="linkBtn"><FiLink /> List</NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={d.sample} className="linkBtn"><FiLink /> Sample</NavLink>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </S.TableWrap>
            </S.Card>

            {/* Print area (summary) */}
            <div id="search-print-area" aria-hidden="true">
                <S.PrintCard className="card">
                    <h2>Seed Summary (Print)</h2>
                    <div className="printMeta">
                        <div>Build: {formatDateTime(buildISO)}</div>
                        <div>Commit: {formatDateTime(commitISO)}</div>
                        <div>Generated: {formatDateTime(new Date().toISOString())}</div>
                    </div>
                    <S.TableWrap>
                        <table>
                            <thead>
                                <tr>
                                    <th>Dataset</th>
                                    <th>Items</th>
                                    <th>List</th>
                                    <th>Sample</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DATASETS.map(d => (
                                    <tr key={d.key}>
                                        <td>{d.label}</td>
                                        <td>{d.count}</td>
                                        <td>{d.list}</td>
                                        <td>{d.sample}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </S.TableWrap>
                </S.PrintCard>
            </div>

            {/* Explore more routes */}
            <S.Card className="card">
                <div className="cardHead">
                    <h2>Explore More</h2>
                </div>
                <S.LinksGrid cols={4}>
                    <NavLink to="/reports/sales" className="deepLink"><FiBarChart2 /> Sales Report</NavLink>
                    <NavLink to="/reports/inventory" className="deepLink"><FiBarChart2 /> Inventory Report</NavLink>
                    <NavLink to="/reports/customers" className="deepLink"><FiBarChart2 /> Customer Report</NavLink>
                    <NavLink to="/reports/finance" className="deepLink"><FiBarChart2 /> Finance Report</NavLink>

                    <NavLink to="/products/brands" className="deepLink"><FiTag /> Brands</NavLink>
                    <NavLink to="/products/attributes" className="deepLink"><FiTag /> Attributes</NavLink>
                    <NavLink to="/products/price-lists" className="deepLink"><FiTag /> Price Lists</NavLink>
                    <NavLink to="/inventory/batches" className="deepLink"><FiDatabase /> Batches</NavLink>

                    <NavLink to="/sales/quotes" className="deepLink"><FiFileText /> Quotes</NavLink>
                    <NavLink to="/sales/returns" className="deepLink"><FiFileText /> Returns</NavLink>
                    <NavLink to="/sales/payments" className="deepLink"><FiFileText /> Payments</NavLink>
                    <NavLink to="/invoices/credit-notes" className="deepLink"><FiFileText /> Credit Notes</NavLink>

                    <NavLink to="/admin/users" className="deepLink"><FiShield /> Users</NavLink>
                    <NavLink to="/admin/roles" className="deepLink"><FiShield /> Roles</NavLink>
                    <NavLink to="/admin/permissions" className="deepLink"><FiShield /> Permissions</NavLink>
                    <NavLink to="/admin/audit-log" className="deepLink"><FiActivity /> Audit Log</NavLink>

                    <NavLink to="/settings/appearance" className="deepLink"><FiSettings /> Appearance</NavLink>
                    <NavLink to="/settings/notifications" className="deepLink"><FiSettings /> Notifications</NavLink>
                    <NavLink to="/settings/print-templates" className="deepLink"><FiSettings /> Print Templates</NavLink>
                    <NavLink to="/settings/webhooks" className="deepLink"><FiSettings /> Webhooks</NavLink>
                </S.LinksGrid>
            </S.Card>

            {/* Disabled action modal (custom) */}
            {showDisabledModal && (
                <S.ModalOverlay role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <S.Modal>
                        <h3 id="modal-title">Action unavailable in demo</h3>
                        <p>
                            This build is display-only. Explore the datasets and deep links below instead.
                        </p>
                        <div className="quickLinks">
                            <NavLink to="/customers" onClick={closeDisabledModal}>Customers</NavLink>
                            <NavLink to="/orders" onClick={closeDisabledModal}>Orders</NavLink>
                            <NavLink to="/products" onClick={closeDisabledModal}>Products</NavLink>
                            <NavLink to="/invoices" onClick={closeDisabledModal}>Invoices</NavLink>
                            <NavLink to="/tools/import-export" onClick={closeDisabledModal}>Import / Export</NavLink>
                        </div>
                        <div className="modalActions">
                            <button className="btn" onClick={closeDisabledModal}>Close</button>
                        </div>
                    </S.Modal>
                </S.ModalOverlay>
            )}
        </S.Wrap>
    );
}
