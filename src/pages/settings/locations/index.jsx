import React, { useMemo, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/** Demo fixtures (display-only) */
const LOCATIONS = [
    {
        id: "LOC-MUM-001",
        code: "MUM-01",
        name: "Mumbai Distribution Center",
        type: "Warehouse",
        warehouse: "Mumbai DC",
        zones: ["Ambient", "Cold-chain"],
        status: "Active",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        createdAt: "2024-10-11T10:45:21+05:30",
        updatedAt: "2025-09-13T18:09:00+05:30",
    },
    {
        id: "LOC-DEL-001",
        code: "DEL-01",
        name: "Delhi Central Hub",
        type: "Warehouse",
        warehouse: "Delhi Hub",
        zones: ["Ambient"],
        status: "Active",
        city: "New Delhi",
        state: "Delhi",
        country: "India",
        createdAt: "2023-08-01T09:00:00+05:30",
        updatedAt: "2025-07-21T12:51:09+05:30",
    },
    {
        id: "LOC-BLR-001",
        code: "BLR-01",
        name: "Bengaluru Clinic Store",
        type: "Clinic Store",
        warehouse: "Bengaluru Clinic",
        zones: ["Controlled"],
        status: "Active",
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
        createdAt: "2022-12-05T14:22:33+05:30",
        updatedAt: "2025-05-19T11:02:11+05:30",
    },
    {
        id: "LOC-PUN-001",
        code: "PUN-01",
        name: "Pune Retail Front",
        type: "Storefront",
        warehouse: "Pune Retail",
        zones: ["Ambient"],
        status: "Inactive",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        createdAt: "2021-06-09T08:09:45+05:30",
        updatedAt: "2025-03-17T10:10:10+05:30",
    },
    {
        id: "LOC-HYD-001",
        code: "HYD-01",
        name: "Hyderabad Pharma Park",
        type: "Warehouse",
        warehouse: "Hyderabad Park",
        zones: ["Ambient", "Cold-chain", "Hazard Controlled"],
        status: "Active",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        createdAt: "2020-01-15T16:10:00+05:30",
        updatedAt: "2025-04-02T19:40:00+05:30",
    },
    {
        id: "LOC-KOL-001",
        code: "KOL-01",
        name: "Kolkata City Depot",
        type: "Depot",
        warehouse: "Kolkata Depot",
        zones: ["Ambient"],
        status: "Active",
        city: "Kolkata",
        state: "West Bengal",
        country: "India",
        createdAt: "2024-02-19T09:35:20+05:30",
        updatedAt: "2025-09-01T21:11:11+05:30",
    },
    {
        id: "LOC-AHM-001",
        code: "AHM-01",
        name: "Ahmedabad Cold Room",
        type: "Cold Room",
        warehouse: "Ahmedabad CR-2",
        zones: ["Cold-chain"],
        status: "Active",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        createdAt: "2023-10-10T10:10:10+05:30",
        updatedAt: "2025-08-24T07:05:05+05:30",
    },
    {
        id: "LOC-CHN-001",
        code: "CHN-01",
        name: "Chennai Regional",
        type: "Warehouse",
        warehouse: "Chennai REG",
        zones: ["Ambient", "Controlled"],
        status: "Active",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
        createdAt: "2022-01-01T00:00:00+05:30",
        updatedAt: "2025-06-06T06:06:06+05:30",
    },
    {
        id: "LOC-NOI-001",
        code: "NOI-01",
        name: "Noida Courier Cross-dock",
        type: "Cross-dock",
        warehouse: "Noida Dock",
        zones: ["Ambient"],
        status: "Inactive",
        city: "Noida",
        state: "UP",
        country: "India",
        createdAt: "2021-11-05T11:11:11+05:30",
        updatedAt: "2025-01-09T09:09:09+05:30",
    },
    {
        id: "LOC-SRT-001",
        code: "SRT-01",
        name: "Surat Medical Market",
        type: "Storefront",
        warehouse: "Surat Retail",
        zones: ["Ambient"],
        status: "Active",
        city: "Surat",
        state: "Gujarat",
        country: "India",
        createdAt: "2024-07-07T07:07:07+05:30",
        updatedAt: "2025-08-08T08:08:08+05:30",
    },
    {
        id: "LOC-JPR-001",
        code: "JPR-01",
        name: "Jaipur Specialty Store",
        type: "Clinic Store",
        warehouse: "Jaipur Clinic",
        zones: ["Controlled"],
        status: "Active",
        city: "Jaipur",
        state: "Rajasthan",
        country: "India",
        createdAt: "2023-09-30T12:34:56+05:30",
        updatedAt: "2025-09-20T12:34:56+05:30",
    },
    {
        id: "LOC-TRV-001",
        code: "TRV-01",
        name: "Trivandrum Coastal Depot",
        type: "Depot",
        warehouse: "Trivandrum Depot",
        zones: ["Ambient"],
        status: "Active",
        city: "Thiruvananthapuram",
        state: "Kerala",
        country: "India",
        createdAt: "2022-05-22T15:00:00+05:30",
        updatedAt: "2025-07-11T17:17:17+05:30",
    },
];

/** Date formatting helpers (exact format requirement) */
const dayShort = (d) => d.toLocaleString("en-US", { weekday: "short" });
const monShort = (d) => d.toLocaleString("en-US", { month: "short" });
const two = (n) => String(n).padStart(2, "0");
const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${dayShort(d)} ${monShort(d)} ${two(d.getDate())} ${d.getFullYear()}`;
};
const fmtDateTime = (iso) => {
    const d = new Date(iso);
    return `${fmtDate(iso)} ${two(d.getHours())}:${two(d.getMinutes())}:${two(d.getSeconds())}hrs`;
};

const SettingsLocations = () => {
    const navigate = useNavigate();
    const [view, setView] = useState("table"); // 'table' | 'grid'
    const [q, setQ] = useState("");
    const [type, setType] = useState("all");
    const [status, setStatus] = useState("all");

    const filtered = useMemo(() => {
        const qq = q.trim().toLowerCase();
        return LOCATIONS.filter((x) => {
            const s1 = status === "all" || x.status.toLowerCase() === status;
            const s2 = type === "all" || x.type.toLowerCase() === type;
            const s3 =
                !qq ||
                [x.name, x.code, x.warehouse, x.city, x.state, x.country, ...x.zones]
                    .join(" ")
                    .toLowerCase()
                    .includes(qq);
            return s1 && s2 && s3;
        });
    }, [q, type, status]);

    const handlePrint = () => {
        document.body.classList.add("print-section-mode");
        setTimeout(() => {
            window.print();
            setTimeout(() => document.body.classList.remove("print-section-mode"), 0);
        }, 0);
    };

    return (
        <Styled.Wrapper>
            {/* PRINT CSS  */}
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

            {/* Breadcrumb + Page actions */}
            <div className="pageHead">
                <div className="crumbs">
                    <NavLink to="/settings" end>Settings</NavLink>
                    <span className="sep">/</span>
                    <span className="current">Locations</span>
                </div>
                <div className="headActions">
                    <button className="btn ghost" onClick={() => navigate("/tools/import-export")}>
                        Import / Export
                    </button>
                    <button className="btn ghost" onClick={() => navigate("/inventory/warehouses")}>
                        Warehouses
                    </button>
                    <button className="btn" disabled title="Demo mode">
                        New Location
                    </button>
                    <button className="btn outline" onClick={handlePrint} title="Print list">
                        Print
                    </button>
                </div>
            </div>

            {/* Intra-settings quick nav */}
            <nav className="tabs">
                <NavLink to="/settings/profile" end>Profile</NavLink>
                <NavLink to="/settings/appearance" end>Appearance</NavLink>
                <NavLink to="/settings/billing" end>Billing</NavLink>
                <NavLink to="/settings/backups" end>Backups</NavLink>
                <NavLink to="/settings/tokens" end>Tokens</NavLink>
                <NavLink to="/settings/warehouses" end>Warehouses</NavLink>
                <NavLink to="/settings/locations" end className="active">Locations</NavLink>
                <NavLink to="/settings/tax" end>Tax</NavLink>
                <NavLink to="/settings/units" end>Units</NavLink>
                <NavLink to="/settings/currencies" end>Currencies</NavLink>
                <NavLink to="/settings/numbering" end>Numbering</NavLink>
                <NavLink to="/settings/print-templates" end>Print Templates</NavLink>
                <NavLink to="/settings/notifications" end>Notifications</NavLink>
                <NavLink to="/settings/webhooks" end>Webhooks</NavLink>
            </nav>

            {/* Filter + View Toolbar */}
            <div className="toolbar">
                <div className="search">
                    <input
                        type="text"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search code, city, zone…"
                        aria-label="Search locations"
                    />
                </div>
                <div className="filters">
                    <label>
                        <span>Type</span>
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="all">All</option>
                            <option value="warehouse">Warehouse</option>
                            <option value="clinic store">Clinic Store</option>
                            <option value="storefront">Storefront</option>
                            <option value="depot">Depot</option>
                            <option value="cold room">Cold Room</option>
                            <option value="cross-dock">Cross-dock</option>
                        </select>
                    </label>
                    <label>
                        <span>Status</span>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </label>
                </div>
                <div className="viewToggle">
                    <button
                        className={view === "table" ? "btn active" : "btn"}
                        onClick={() => setView("table")}
                        title="Table view"
                    >
                        Table
                    </button>
                    <button
                        className={view === "grid" ? "btn active" : "btn"}
                        onClick={() => setView("grid")}
                        title="Card grid"
                    >
                        Grid
                    </button>
                </div>
            </div>

            {/* Print area wrapper */}
            <div id="search-print-area" className="content">
                {/* Summary strip */}
                <div className="statStrip">
                    <div className="statCard">
                        <div className="label">Total</div>
                        <div className="value">{LOCATIONS.length}</div>
                    </div>
                    <div className="statCard">
                        <div className="label">Active</div>
                        <div className="value">{LOCATIONS.filter(x => x.status === "Active").length}</div>
                    </div>
                    <div className="statCard">
                        <div className="label">Zones</div>
                        <div className="value">
                            {Array.from(new Set(LOCATIONS.flatMap(x => x.zones))).length}
                        </div>
                    </div>
                    <div className="statCard">
                        <div className="label">Updated</div>
                        <div className="value">{fmtDateTime("2025-10-04T15:38:20+05:30")}</div>
                    </div>
                </div>

                {/* Views */}
                {view === "table" ? (
                    <div className="tableWrap card">
                        <table>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Warehouse</th>
                                    <th>Zones</th>
                                    <th>City</th>
                                    <th>Status</th>
                                    <th>Created</th>
                                    <th>Updated</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((x) => (
                                    <tr key={x.id} id={x.id}>
                                        <td>
                                            <span className="mono">{x.code}</span>
                                        </td>
                                        <td>
                                            <div className="nameCol">
                                                <span className="name">{x.name}</span>
                                                <span className="addr">{x.city}, {x.state}</span>
                                            </div>
                                        </td>
                                        <td>{x.type}</td>
                                        <td>
                                            <Link to="/inventory/warehouses" className="link">{x.warehouse}</Link>
                                        </td>
                                        <td>
                                            <div className="chips">
                                                {x.zones.map((z) => (
                                                    <span className="chip" key={z}>{z}</span>
                                                ))}
                                            </div>
                                        </td>
                                        <td>{x.city}</td>
                                        <td>
                                            <span className={`badge ${x.status === "Active" ? "ok" : "off"}`}>
                                                {x.status}
                                            </span>
                                        </td>
                                        <td>{fmtDate(x.createdAt)}</td>
                                        <td>{fmtDateTime(x.updatedAt)}</td>
                                        <td className="actions">
                                            <Link to="/inventory/transfers" className="mini">Transfers</Link>
                                            <Link to="/shipments" className="mini">Shipments</Link>
                                            <button className="mini" disabled title="Demo mode">Edit</button>
                                            <button className="mini danger" disabled title="Demo mode">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={10}>
                                            <div className="empty">
                                                <div className="title">No locations match your filter</div>
                                                <div className="sub">Try clearing search or selecting “All”.</div>
                                                <div className="links">
                                                    <Link to="/settings/warehouses">Manage Warehouses</Link>
                                                    <Link to="/inventory/warehouses">Inventory &gt; Warehouses</Link>
                                                    <Link to="/tools/import-export">Import / Export</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="gridWrap">
                        {filtered.map((x) => (
                            <div className="gcard card" key={x.id}>
                                <div className="ghead">
                                    <div className="left">
                                        <div className="code mono">{x.code}</div>
                                        <div className="title">{x.name}</div>
                                        <div className="meta">
                                            <span className="muted">{x.type}</span>
                                            <span className="dot">•</span>
                                            <span className="muted">{x.city}, {x.state}</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <span className={`badge ${x.status === "Active" ? "ok" : "off"}`}>{x.status}</span>
                                    </div>
                                </div>
                                <div className="body">
                                    <div className="row">
                                        <span className="label">Warehouse</span>
                                        <Link to="/inventory/warehouses" className="value link">{x.warehouse}</Link>
                                    </div>
                                    <div className="row">
                                        <span className="label">Zones</span>
                                        <div className="chips">
                                            {x.zones.map((z) => <span className="chip" key={z}>{z}</span>)}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <span className="label">Created</span>
                                        <span className="value">{fmtDate(x.createdAt)}</span>
                                    </div>
                                    <div className="row">
                                        <span className="label">Updated</span>
                                        <span className="value">{fmtDateTime(x.updatedAt)}</span>
                                    </div>
                                </div>
                                <div className="gactions">
                                    <Link to="/inventory/transfers" className="mini">Transfers</Link>
                                    <Link to="/shipments" className="mini">Shipments</Link>
                                    <button className="mini" disabled title="Demo mode">Edit</button>
                                    <button className="mini danger" disabled title="Demo mode">Delete</button>
                                </div>
                            </div>
                        ))}
                        {filtered.length === 0 && (
                            <div className="empty card">
                                <div className="title">No locations match your filter</div>
                                <div className="sub">Try clearing search or selecting “All”.</div>
                                <div className="links">
                                    <Link to="/settings/warehouses">Manage Warehouses</Link>
                                    <Link to="/inventory/warehouses">Inventory &gt; Warehouses</Link>
                                    <Link to="/tools/import-export">Import / Export</Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Footer quick-jumps */}
            <div className="footerNav">
                <div className="group">
                    <div className="title">Go to</div>
                    <div className="items">
                        <Link to="/inventory/warehouses">Inventory &gt; Warehouses</Link>
                        <Link to="/inventory/transfers">Inventory &gt; Transfers</Link>
                        <Link to="/purchase-orders">Purchasing &gt; POs</Link>
                        <Link to="/shipments">Shipments</Link>
                        <Link to="/reports/inventory">Reports &gt; Inventory</Link>
                        <Link to="/reports/procurement">Reports &gt; Procurement</Link>
                    </div>
                </div>
                <div className="group">
                    <div className="title">Settings</div>
                    <div className="items">
                        <Link to="/settings/profile">Profile</Link>
                        <Link to="/settings/appearance">Appearance</Link>
                        <Link to="/settings/print-templates">Print Templates</Link>
                        <Link to="/settings/numbering">Numbering</Link>
                        <Link to="/settings/notifications">Notifications</Link>
                        <Link to="/settings/webhooks">Webhooks</Link>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SettingsLocations;
