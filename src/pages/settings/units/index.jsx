import React, { useMemo, useState, useCallback } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiPlus, FiPrinter, FiEdit2, FiTrash2, FiExternalLink, FiInfo, FiLink2, FiSearch } from "react-icons/fi";
import {
    Wrap, Header, Breadcrumbs, Toolbar, Tabs, Kpis, TableWrap, Table, StatusPill,
    HelpCallout, RightLinks, FooterNote, ModalBackdrop, ModalCard
} from "./styled";

const DEMO_MODE = true;

/* ------------------------------
   Date formatting helpers
   ------------------------------ */
const pad2 = (n) => String(n).padStart(2, "0");
const fmtDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    // "Sat Oct 04 2025"
    return d.toDateString();
};
const fmtTime = (iso) => {
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

/* ------------------------------
   Static demo dataset (display-only)
   ------------------------------ */
const UNITS = [
    { code: "PCS", name: "Pieces", decimals: 0, symbol: "pc", category: "Count", status: "Active", createdAt: "2025-06-14T10:20:33+05:30", updatedAt: "2025-09-17T17:02:11+05:30", usedIn: ["products", "orders"] },
    { code: "BOX", name: "Box", decimals: 0, symbol: "box", category: "Pack", status: "Active", createdAt: "2025-02-02T09:12:22+05:30", updatedAt: "2025-07-11T21:44:10+05:30", usedIn: ["products", "inventory"] },
    { code: "STRIP", name: "Strip", decimals: 0, symbol: "strip", category: "Pack", status: "Active", createdAt: "2025-01-13T12:30:10+05:30", updatedAt: "2025-09-03T19:05:52+05:30", usedIn: ["medicines"] },
    { code: "BOTTLE", name: "Bottle", decimals: 0, symbol: "btl", category: "Liquid", status: "Active", createdAt: "2025-03-26T14:58:47+05:30", updatedAt: "2025-08-29T08:10:03+05:30", usedIn: ["medicines", "inventory"] },
    { code: "TAB", name: "Tablet", decimals: 0, symbol: "tab", category: "Dose", status: "Active", createdAt: "2025-05-08T16:01:39+05:30", updatedAt: "2025-09-12T12:12:12+05:30", usedIn: ["medicines", "orders"] },
    { code: "CAP", name: "Capsule", decimals: 0, symbol: "cap", category: "Dose", status: "Active", createdAt: "2025-04-17T11:22:45+05:30", updatedAt: "2025-09-22T18:30:01+05:30", usedIn: ["medicines"] },
    { code: "ML", name: "Millilitre", decimals: 2, symbol: "ml", category: "Volume", status: "Active", createdAt: "2025-02-21T10:02:00+05:30", updatedAt: "2025-07-09T13:40:34+05:30", usedIn: ["medicines", "inventory"] },
    { code: "L", name: "Litre", decimals: 3, symbol: "L", category: "Volume", status: "Active", createdAt: "2025-02-21T10:02:00+05:30", updatedAt: "2025-07-09T13:40:34+05:30", usedIn: ["inventory"] },
    { code: "GM", name: "Gram", decimals: 2, symbol: "g", category: "Weight", status: "Active", createdAt: "2025-06-01T07:45:50+05:30", updatedAt: "2025-07-19T11:20:01+05:30", usedIn: ["products", "inventory"] },
    { code: "KG", name: "Kilogram", decimals: 3, symbol: "kg", category: "Weight", status: "Active", createdAt: "2025-06-01T07:45:50+05:30", updatedAt: "2025-07-19T11:20:01+05:30", usedIn: ["inventory"] },
    { code: "PAIR", name: "Pair", decimals: 0, symbol: "pair", category: "Count", status: "Archived", createdAt: "2025-01-02T08:20:10+05:30", updatedAt: "2025-04-02T09:20:10+05:30", usedIn: [] },
];

/* ------------------------------
   Simple Confirm Modal (demo-safe)
   ------------------------------ */
const ConfirmModal = ({ open, title, body, confirmText = "Confirm", onClose }) => {
    if (!open) return null;
    return (
        <ModalBackdrop role="dialog" aria-modal="true">
            <ModalCard className="card">
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="actions">
                    <button onClick={onClose} className="btn-primary" aria-label="Close">Okay</button>
                </div>
            </ModalCard>
        </ModalBackdrop>
    );
};

export default function SettingsUnitsPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return UNITS;
        return UNITS.filter(u =>
            [u.code, u.name, u.symbol, u.category, u.status].join(" ").toLowerCase().includes(q)
        );
    }, [query]);

    const onPrint = useCallback(() => {
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
    }, []);

    const copyLink = useCallback(() => {
        try {
            const url = window.location.href;
            navigator.clipboard?.writeText(url);
        } catch { }
    }, []);

    const onDemoAction = useCallback((e) => {
        e.preventDefault();
        setModalOpen(true);
    }, []);

    const buildISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
    const commitISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString();

    return (
        <Wrap>
            <Header>
                <div className="title">
                    <h1>Units of Measure</h1>
                    <p>Define how quantities are represented across products, inventory, and documents.</p>
                </div>

                <div className="actions">
                    <button
                        className="btn-primary"
                        disabled={DEMO_MODE}
                        data-tooltip={DEMO_MODE ? "Demo only" : ""}
                        onClick={DEMO_MODE ? onDemoAction : undefined}
                    >
                        <FiPlus size={16} style={{ marginRight: 8 }} />
                        New Unit
                    </button>

                    <button className="btn-ghost" onClick={onPrint}>
                        <FiPrinter size={16} style={{ marginRight: 8 }} />
                        Print
                    </button>

                    <button className="btn-ghost" onClick={copyLink}>
                        <FiLink2 size={16} style={{ marginRight: 8 }} />
                        Copy Link
                    </button>
                </div>
            </Header>

            <Breadcrumbs aria-label="breadcrumbs">
                <NavLink to="/home">Home</NavLink>
                <span>/</span>
                <NavLink to="/settings">Settings</NavLink>
                <span>/</span>
                <strong>Units</strong>
            </Breadcrumbs>

            <Tabs>
                <NavLink to="/settings" end>Overview</NavLink>
                <NavLink to="/settings/profile">Profile</NavLink>
                <NavLink to="/settings/appearance">Appearance</NavLink>
                <NavLink to="/settings/billing">Billing</NavLink>
                <NavLink to="/settings/backups">Backups</NavLink>
                <NavLink to="/settings/tokens">Tokens</NavLink>
                <NavLink to="/settings/warehouses">Warehouses</NavLink>
                <NavLink to="/settings/locations">Locations</NavLink>
                <NavLink to="/settings/tax">Tax</NavLink>
                <NavLink to="/settings/units" className="active">Units</NavLink>
                <NavLink to="/settings/currencies">Currencies</NavLink>
                <NavLink to="/settings/numbering">Numbering</NavLink>
                <NavLink to="/settings/print-templates">Print Templates</NavLink>
                <NavLink to="/settings/notifications">Notifications</NavLink>
                <NavLink to="/settings/webhooks">Webhooks</NavLink>
            </Tabs>

            <Kpis>
                <div className="kpi card">
                    <div className="kpi-label">Total Units</div>
                    <div className="kpi-value">{UNITS.length}</div>
                </div>
                <div className="kpi card">
                    <div className="kpi-label">Active</div>
                    <div className="kpi-value">{UNITS.filter(u => u.status === "Active").length}</div>
                </div>
                <div className="kpi card">
                    <div className="kpi-label">Categories</div>
                    <div className="kpi-value">{new Set(UNITS.map(u => u.category)).size}</div>
                </div>
                <div className="kpi card">
                    <div className="kpi-label">Last Commit</div>
                    <div className="kpi-sub">{fmtDateTime(commitISO)}</div>
                </div>
                <div className="kpi card">
                    <div className="kpi-label">Built</div>
                    <div className="kpi-sub">{fmtDateTime(buildISO)}</div>
                </div>
            </Kpis>

            <Toolbar>
                <div className="left">
                    <div className="search">
                        <FiSearch className="search-icon" size={16} />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search units (code, name, symbol, category)…"
                            aria-label="Search units"
                        />
                    </div>

                    <div className="chips">
                        <button
                            className={`chip ${location.search.includes("active") ? "chip-on" : ""}`}
                            onClick={() => navigate("/settings/units?active")}
                            title="Filter active"
                        >
                            Active
                        </button>
                        <button
                            className={`chip ${location.search.includes("archived") ? "chip-on" : ""}`}
                            onClick={() => navigate("/settings/units?archived")}
                            title="Filter archived"
                        >
                            Archived
                        </button>
                    </div>
                </div>

                <RightLinks>
                    <NavLink to="/products" className="link">
                        <FiExternalLink /> Products
                    </NavLink>
                    <NavLink to="/inventory" className="link">
                        <FiExternalLink /> Inventory
                    </NavLink>
                    <NavLink to="/reports/inventory" className="link">
                        <FiExternalLink /> Inventory Report
                    </NavLink>
                    <NavLink to="/help" className="link">
                        <FiExternalLink /> Help
                    </NavLink>
                </RightLinks>
            </Toolbar>

            {/* PRINT AREA START */}
            <div id="search-print-area">
                <TableWrap className="card">
                    <div className="table-head">
                        <h3>All Units</h3>
                        <span className="muted">{filtered.length} shown</span>
                    </div>

                    <Table>
                        <thead>
                            <tr>
                                <th style={{ width: 110 }}>Code</th>
                                <th>Name</th>
                                <th style={{ width: 110 }}>Symbol</th>
                                <th style={{ width: 140 }}>Category</th>
                                <th style={{ width: 110 }}>Decimals</th>
                                <th style={{ width: 150 }}>Status</th>
                                <th style={{ width: 240 }}>Created</th>
                                <th style={{ width: 240 }}>Updated</th>
                                <th style={{ width: 270 }}>Used In</th>
                                <th style={{ width: 180 }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((u) => (
                                <tr key={u.code}>
                                    <td><code>{u.code}</code></td>
                                    <td>{u.name}</td>
                                    <td>{u.symbol}</td>
                                    <td>{u.category}</td>
                                    <td>{u.decimals}</td>
                                    <td><StatusPill data-variant={u.status}>{u.status}</StatusPill></td>
                                    <td>
                                        <div className="mono">{fmtDate(u.createdAt)}</div>
                                        <div className="muted mono">{fmtTime(u.createdAt)}</div>
                                    </td>
                                    <td>
                                        <div className="mono">{fmtDate(u.updatedAt)}</div>
                                        <div className="muted mono">{fmtTime(u.updatedAt)}</div>
                                    </td>
                                    <td className="usedin">
                                        {u.usedIn?.length ? (
                                            <>
                                                {u.usedIn.includes("products") && <NavLink to="/products">Products</NavLink>}
                                                {u.usedIn.includes("orders") && <NavLink to="/orders">Orders</NavLink>}
                                                {u.usedIn.includes("inventory") && <NavLink to="/inventory">Inventory</NavLink>}
                                                {u.usedIn.includes("medicines") && <NavLink to="/medicines">Medicines</NavLink>}
                                            </>
                                        ) : <span className="muted">—</span>}
                                    </td>
                                    <td className="row-actions">
                                        <button className="btn-ghost" disabled data-tooltip="Demo only">
                                            <FiEdit2 size={16} />
                                            <span>Edit</span>
                                        </button>
                                        <button className="btn-ghost danger" disabled onClick={onDemoAction} data-tooltip="Demo only">
                                            <FiTrash2 size={16} />
                                            <span>Delete</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrap>
            </div>
            {/* PRINT AREA END */}

            <HelpCallout className="card">
                <div className="icon"><FiInfo size={18} /></div>
                <div className="text">
                    <h4>How units are used</h4>
                    <p>
                        Units standardize quantities across products, medicines, orders, and inventory. Keep the list minimal and
                        consistent. You can navigate to <NavLink to="/settings/numbering">Numbering</NavLink> or{" "}
                        <NavLink to="/settings/print-templates">Print Templates</NavLink> to control how units appear on documents.
                    </p>
                    <div className="links">
                        <NavLink to="/settings/currencies">Currencies</NavLink>
                        <NavLink to="/settings/tax">Tax</NavLink>
                        <NavLink to="/products/attributes">Attributes</NavLink>
                        <NavLink to="/reports/inventory">Inventory Report</NavLink>
                    </div>
                </div>
            </HelpCallout>

            <FooterNote>
                <span>Snapshot:</span>
                <span>Commit {fmtDateTime(commitISO)}</span>
                <span>•</span>
                <span>Build {fmtDateTime(buildISO)}</span>
            </FooterNote>

            <ConfirmModal
                open={modalOpen}
                title="Action unavailable in demo"
                body="This is a display-only preview. Create, edit, and delete actions are disabled."
                onClose={() => setModalOpen(false)}
            />

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
        </Wrap>
    );
}
