import { useMemo, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdOutlineAddBusiness,
    MdInfoOutline,
    MdEdit,
    MdDeleteOutline,
    MdArchive,
    MdContentCopy,
    MdPrint,
    MdDownload,
    MdRoute,
    MdOutlineMap,
    MdOutlineWarehouse,
    MdClose,
} from "react-icons/md";

/** Date formatting helpers (required display formats)
 *  Date      -> Sat Oct 04 2025
 *  DateTime  -> Sat Oct 04 2025 15:38:20hrs
 *  Time only -> 15:38:20hrs
 */
function fmtDate(iso) {
    const d = new Date(iso);
    return d.toDateString();
}
function fmtDateTime(iso) {
    const d = new Date(iso);
    return `${d.toDateString()} ${d.toLocaleTimeString("en-GB")}hrs`;
}
function fmtTime(iso) {
    const d = new Date(iso);
    return `${d.toLocaleTimeString("en-GB")}hrs`;
}

const DEMO_LOCK_MESSAGE =
    "This is a demo preview. Creating or modifying records is disabled.";

/** Static demo data (display-only) */
const DEMO_WAREHOUSES = [
    {
        id: "WH-DEL-01",
        name: "Delhi Main FC",
        type: "Fulfillment Center",
        capacity: "30,000 units",
        temperature: "Ambient",
        contact: { manager: "Neha Sharma", phone: "+91 98XXXXXX12", email: "neha@acme.example" },
        address: "Plot 21, Okhla Phase II, New Delhi, DL 110020",
        timezone: "Asia/Kolkata",
        createdAt: "2025-08-02T10:05:20+05:30",
        updatedAt: "2025-10-03T19:24:01+05:30",
        lastAudit: "2025-09-27T11:02:11+05:30",
        status: "Active",
        tags: ["north", "primary", "ecom"],
    },
    {
        id: "WH-BLR-02",
        name: "Bengaluru Cold Store",
        type: "Cold Storage",
        capacity: "12,000 units",
        temperature: "2–8°C",
        contact: { manager: "Rahul Nair", phone: "+91 97XXXXXX55", email: "rahul@acme.example" },
        address: "1st Main, Whitefield Industrial Area, Bengaluru, KA 560066",
        timezone: "Asia/Kolkata",
        createdAt: "2025-06-10T08:40:00+05:30",
        updatedAt: "2025-09-29T17:12:43+05:30",
        lastAudit: "2025-09-20T16:35:00+05:30",
        status: "Active",
        tags: ["south", "pharma", "cold-chain"],
    },
    {
        id: "WH-PUN-03",
        name: "Pune Satellite Hub",
        type: "Cross-Dock",
        capacity: "8,500 units",
        temperature: "Ambient",
        contact: { manager: "Aditi Kulkarni", phone: "+91 98XXXXXX88", email: "aditi@acme.example" },
        address: "MIDC, Chakan Phase I, Pune, MH 410501",
        timezone: "Asia/Kolkata",
        createdAt: "2025-05-05T09:10:42+05:30",
        updatedAt: "2025-09-18T12:01:12+05:30",
        lastAudit: "2025-09-15T10:18:25+05:30",
        status: "Active",
        tags: ["west", "last-mile"],
    },
    {
        id: "WH-HYD-04",
        name: "Hyderabad Reserve",
        type: "Reserve Storage",
        capacity: "16,000 units",
        temperature: "Ambient",
        contact: { manager: "Vikas Reddy", phone: "+91 90XXXXXX32", email: "vikas@acme.example" },
        address: "IDA Cherlapally, Hyderabad, TS 500051",
        timezone: "Asia/Kolkata",
        createdAt: "2025-04-01T12:45:11+05:30",
        updatedAt: "2025-09-12T09:55:39+05:30",
        lastAudit: "2025-09-05T18:12:40+05:30",
        status: "Inactive",
        tags: ["south", "overflow"],
    },
];

export default function SettingsWarehouses() {
    const navigate = useNavigate();
    const location = useLocation();

    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState(DEMO_WAREHOUSES[0]?.id ?? null);
    const [demoModal, setDemoModal] = useState(null); // { title, message }

    const items = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return DEMO_WAREHOUSES;
        return DEMO_WAREHOUSES.filter((w) => {
            const blob = `${w.id} ${w.name} ${w.type} ${w.capacity} ${w.temperature} ${w.address} ${w.status} ${w.tags.join(" ")} ${w.contact.manager}`.toLowerCase();
            return q.split(/\s+/).every((t) => blob.includes(t));
        });
    }, [query]);

    const selected = useMemo(
        () => items.find((w) => w.id === selectedId) ?? items[0] ?? null,
        [items, selectedId]
    );

    const copyLink = (id) => {
        const url = `${location.origin || window.location.origin}/settings/warehouses#${id}`;
        navigator.clipboard?.writeText(url).catch(() => { });
    };

    const onPrintSection = () => {
        // print only details panel
        const body = document.body;
        body.classList.add("print-section-mode");
        window.onafterprint = () => body.classList.remove("print-section-mode");
        window.print();
    };

    const triggerDemoModal = (title) => {
        setDemoModal({
            title,
            message: DEMO_LOCK_MESSAGE,
        });
    };

    return (
        <Styled.Page>
            {/* Print CSS   */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            {/* Breadcrumbs */}
            <Styled.Breadcrumbs aria-label="breadcrumbs">
                <NavLink to="/home">Home</NavLink>
                <span>›</span>
                <NavLink to="/settings">Settings</NavLink>
                <span>›</span>
                <strong>Warehouses</strong>
            </Styled.Breadcrumbs>

            {/* Header */}
            <Styled.Header>
                <div className="titles">
                    <h1><MdOutlineWarehouse size={22} style={{ marginRight: 8 }} /> Warehouses</h1>
                    <p>Configure your storage network, locations and fulfillment hubs. Deep links and navigation are enabled across inventory and reports.</p>
                    <div className="meta">
                        <span>Created: {fmtDate("2025-09-01T09:30:00+05:30")}</span>
                        <span>Last updated: {fmtDateTime(__APP_COMMIT_ISO__ || "2025-10-04T12:00:00+05:30")}</span>
                    </div>
                </div>
                <div className="actions">
                    <button onClick={() => triggerDemoModal("Add Warehouse")}>
                        <MdOutlineAddBusiness /> New Warehouse
                    </button>
                    <button onClick={onPrintSection} title="Print detail section">
                        <MdPrint /> Print Details
                    </button>
                    <button
                        onClick={() => {
                            // quick JSON export of the visible list
                            const blob = new Blob([JSON.stringify(items, null, 2)], { type: "application/json" });
                            const a = document.createElement("a");
                            a.href = URL.createObjectURL(blob);
                            a.download = "warehouses.json";
                            a.click();
                            URL.revokeObjectURL(a.href);
                        }}
                        title="Export visible rows as JSON"
                    >
                        <MdDownload /> Export JSON
                    </button>
                </div>
            </Styled.Header>

            {/* Toolbar */}
            <Styled.Toolbar role="search">
                <input
                    type="search"
                    placeholder="Search warehouses, cities, tags, managers…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search warehouses"
                />
                <div className="links">
                    <NavLink to="/inventory/warehouses" className="chip" title="Go to Inventory › Warehouses">
                        <MdOutlineWarehouse /> Inventory View
                    </NavLink>
                    <NavLink to="/inventory/transfers" className="chip"><MdRoute /> Transfers</NavLink>
                    <NavLink to="/inventory/adjustments" className="chip"><MdInfoOutline /> Adjustments</NavLink>
                    <NavLink to="/reports/inventory" className="chip"><MdInfoOutline /> Inventory Report</NavLink>
                    <NavLink to="/settings/locations" className="chip"><MdOutlineMap /> Locations</NavLink>
                </div>
            </Styled.Toolbar>

            {/* Content Grid */}
            <Styled.Grid>
                {/* Left: list/table */}
                <Styled.TableCard role="region" aria-label="Warehouses list">
                    <div className="cardHead">
                        <h3>All Warehouses</h3>
                        <span className="sub">Demo overview</span>
                    </div>

                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Capacity</th>
                                    <th>Temp</th>
                                    <th>Status</th>
                                    <th>City</th>
                                    <th>Manager</th>
                                    <th>Updated</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((w) => (
                                    <tr
                                        key={w.id}
                                        data-active-row={selected?.id === w.id ? "true" : "false"}
                                        onClick={() => setSelectedId(w.id)}
                                    >
                                        <td>{w.id}</td>
                                        <td className="name">
                                            <button className="linkish" onClick={(e) => { e.stopPropagation(); setSelectedId(w.id); }}>
                                                {w.name}
                                            </button>
                                            <div className="tags">
                                                {w.tags.map((t) => <span key={t} className="tag">#{t}</span>)}
                                            </div>
                                        </td>
                                        <td>{w.type}</td>
                                        <td>{w.capacity}</td>
                                        <td>{w.temperature}</td>
                                        <td>
                                            <span className={`status ${w.status.toLowerCase()}`}>{w.status}</span>
                                        </td>
                                        <td>{(w.address.split(",")[2] || "").trim() || "-"}</td>
                                        <td>
                                            <div className="mgr">
                                                <div>{w.contact.manager}</div>
                                                <small>{w.contact.phone}</small>
                                            </div>
                                        </td>
                                        <td><span title={fmtDateTime(w.updatedAt)}>{fmtDate(w.updatedAt)}</span></td>
                                        <td className="rowActions">
                                            <button onClick={(e) => { e.stopPropagation(); triggerDemoModal("Edit Warehouse"); }}>
                                                <MdEdit />
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); triggerDemoModal("Archive Warehouse"); }}>
                                                <MdArchive />
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); triggerDemoModal("Delete Warehouse"); }}>
                                                <MdDeleteOutline />
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); copyLink(w.id); }} title="Copy deep link">
                                                <MdContentCopy />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {items.length === 0 && (
                            <div className="empty">
                                <p>No matches. Try a different keyword.</p>
                                <div className="hops">
                                    <NavLink to="/settings/locations">Open Locations</NavLink>
                                    <NavLink to="/inventory/warehouses">Go to Inventory view</NavLink>
                                    <NavLink to="/reports/inventory">See Inventory report</NavLink>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="cardFoot">
                        <div className="quick">
                            <span>Quick hops:</span>
                            <NavLink to="/inventory/reorder">Reorder</NavLink>
                            <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                            <NavLink to="/shipments">Shipments</NavLink>
                            <NavLink to="/reports/procurement">Procurement Report</NavLink>
                            <NavLink to="/settings/units">Units</NavLink>
                            <NavLink to="/settings/tax">Tax</NavLink>
                            <NavLink to="/settings/print-templates">Print Templates</NavLink>
                        </div>
                    </div>
                </Styled.TableCard>

                {/* Right: details (print target) */}
                <Styled.DetailCard id="search-print-area" role="region" aria-label="Warehouse detail">
                    {selected ? (
                        <>
                            <div className="head">
                                <h3>{selected.name}</h3>
                                <div className="meta">
                                    <span>Code: {selected.id}</span>
                                    <span>Timezone: {selected.timezone}</span>
                                </div>
                            </div>

                            <div className="blocks">
                                <section className="block">
                                    <h4>Overview</h4>
                                    <ul className="kv">
                                        <li><label>Type</label><div>{selected.type}</div></li>
                                        <li><label>Capacity</label><div>{selected.capacity}</div></li>
                                        <li><label>Temperature</label><div>{selected.temperature}</div></li>
                                        <li><label>Status</label><div><span className={`status ${selected.status.toLowerCase()}`}>{selected.status}</span></div></li>
                                        <li><label>Created</label><div>{fmtDateTime(selected.createdAt)}</div></li>
                                        <li><label>Updated</label><div>{fmtDateTime(selected.updatedAt)}</div></li>
                                        <li><label>Last Audit</label><div>{fmtDateTime(selected.lastAudit)}</div></li>
                                    </ul>
                                </section>

                                <section className="block">
                                    <h4>Address</h4>
                                    <p>{selected.address}</p>
                                    <div className="rowLinks">
                                        <NavLink to="/settings/locations">Manage Locations</NavLink>
                                        <NavLink to="/inventory/transfers">Plan Transfer</NavLink>
                                        <NavLink to="/inventory/adjustments">Record Adjustment</NavLink>
                                    </div>
                                </section>

                                <section className="block">
                                    <h4>Point of Contact</h4>
                                    <ul className="kv">
                                        <li><label>Manager</label><div>{selected.contact.manager}</div></li>
                                        <li><label>Phone</label><div>{selected.contact.phone}</div></li>
                                        <li><label>Email</label><div>{selected.contact.email}</div></li>
                                    </ul>
                                </section>

                                <section className="block">
                                    <h4>Documents</h4>
                                    <div className="docList">
                                        <div className="doc">
                                            <div className="title">SOP – Putaway & Picking.pdf</div>
                                            <div className="meta">Uploaded {fmtDate("2025-09-10T12:10:00+05:30")}</div>
                                            <div className="cta">
                                                <button onClick={() => triggerDemoModal("View Document")}>View</button>
                                                <button onClick={() => triggerDemoModal("Download Document")}>Download</button>
                                            </div>
                                        </div>
                                        <div className="doc">
                                            <div className="title">Compliance – Cold Chain Handling.docx</div>
                                            <div className="meta">Uploaded {fmtDate("2025-09-14T14:50:00+05:30")}</div>
                                            <div className="cta">
                                                <button onClick={() => triggerDemoModal("View Document")}>View</button>
                                                <button onClick={() => triggerDemoModal("Download Document")}>Download</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="block">
                                    <h4>Recent Activity</h4>
                                    <ol className="timeline">
                                        <li>
                                            <span className="dt">{fmtDateTime("2025-10-03T19:24:01+05:30")}</span>
                                            <span className="txt">Cycle count posted by {selected.contact.manager}</span>
                                        </li>
                                        <li>
                                            <span className="dt">{fmtDateTime("2025-09-27T11:02:11+05:30")}</span>
                                            <span className="txt">Audit completed (no exceptions)</span>
                                        </li>
                                        <li>
                                            <span className="dt">{fmtDateTime("2025-09-20T16:35:00+05:30")}</span>
                                            <span className="txt">Temperature probe replaced</span>
                                        </li>
                                    </ol>
                                    <div className="rowLinks">
                                        <NavLink to="/admin/audit-log">Open Audit Log</NavLink>
                                        <NavLink to="/reports/inventory">Open Inventory Report</NavLink>
                                        <NavLink to="/reports/shipment">Open Shipment Report</NavLink>
                                    </div>
                                </section>
                            </div>

                            <div className="detailActions">
                                <button onClick={() => triggerDemoModal("Edit Warehouse")}><MdEdit /> Edit</button>
                                <button onClick={() => triggerDemoModal("Archive Warehouse")}><MdArchive /> Archive</button>
                                <button onClick={() => triggerDemoModal("Delete Warehouse")}><MdDeleteOutline /> Delete</button>
                                <button onClick={() => copyLink(selected.id)} title="Copy deep link"><MdContentCopy /> Copy Link</button>
                            </div>
                        </>
                    ) : (
                        <div className="empty">
                            <p>Select a warehouse to view details.</p>
                        </div>
                    )}
                </Styled.DetailCard>
            </Styled.Grid>

            {/* Footer hops */}
            <Styled.FootNav>
                <span>More settings:</span>
                <NavLink to="/settings/profile">Profile</NavLink>
                <NavLink to="/settings/appearance">Appearance</NavLink>
                <NavLink to="/settings/billing">Billing</NavLink>
                <NavLink to="/settings/units">Units</NavLink>
                <NavLink to="/settings/currencies">Currencies</NavLink>
                <NavLink to="/settings/tax">Tax</NavLink>
                <NavLink to="/settings/notifications">Notifications</NavLink>
                <NavLink to="/settings/webhooks">Webhooks</NavLink>
            </Styled.FootNav>

            {/* Demo modal (custom, no browser alert) */}
            {demoModal && (
                <Styled.Modal role="dialog" aria-modal="true" aria-labelledby="demo-title">
                    <div className="sheet">
                        <div className="sheetHead">
                            <h3 id="demo-title">{demoModal.title}</h3>
                            <button className="icon" onClick={() => setDemoModal(null)} aria-label="Close">
                                <MdClose />
                            </button>
                        </div>
                        <div className="sheetBody">
                            <p>{demoModal.message}</p>
                            <ul className="hints">
                                <li>Use deep links to explore detail screens.</li>
                                <li>Try Inventory › Warehouses or Transfers for related flows.</li>
                                <li>Print the detail section to see the themed print layout.</li>
                            </ul>
                        </div>
                        <div className="sheetFoot">
                            <button onClick={() => setDemoModal(null)}>Close</button>
                            <NavLink className="primary" to="/about" onClick={() => setDemoModal(null)}>Learn More</NavLink>
                        </div>
                    </div>
                    <div className="scrim" onClick={() => setDemoModal(null)} />
                </Styled.Modal>
            )}
        </Styled.Page>
    );
}
