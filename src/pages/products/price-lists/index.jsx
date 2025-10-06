import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

// date helpers (single source of truth)
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

// tiny tooltip-aware disabled button
const DemoBtn = ({ children, className = "", title = "Demo only", ...rest }) => (
    <button className={`btnGhost demoDisabled ${className}`} title={title} disabled aria-disabled="true" {...rest}>
        {children}
    </button>
);

// non-blocking info dialog
const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer><button className="btnPrimary" onClick={onClose}>Okay</button></footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const PriceListsPage = () => {
    // pre-seeded display-only data
    const lists = useMemo(() => ([
        {
            id: "PL-STD-IN-2025",
            name: "Standard India 2025",
            type: "Standard",
            currency: "INR",
            channel: "All",
            active: true,
            validFrom: "2025-01-01T00:00:00+05:30",
            validTo: "2025-12-31T23:59:59+05:30",
            rounding: "Nearest 0.50",
            itemsCount: 1280,
            updatedAt: "2025-09-28T14:05:18+05:30",
            updatedBy: "ops@company.com",
            notes: "Primary list for domestic catalog. Includes seasonal markdown windows built-in.",
        },
        {
            id: "PL-WS-IN-2025Q4",
            name: "Wholesale Q4",
            type: "Wholesale",
            currency: "INR",
            channel: "B2B",
            active: true,
            validFrom: "2025-10-01T00:00:00+05:30",
            validTo: "2025-12-31T23:59:59+05:30",
            rounding: "None",
            itemsCount: 860,
            updatedAt: "2025-10-02T11:22:47+05:30",
            updatedBy: "pricing@company.com",
            notes: "Bulk tiers for distributors. Includes pallet pricing and carton incentives.",
        },
        {
            id: "PL-PROMO-DIW-2025",
            name: "Festive Promo Diwali",
            type: "Promotion",
            currency: "INR",
            channel: "Retail",
            active: false,
            validFrom: "2025-10-15T00:00:00+05:30",
            validTo: "2025-11-10T23:59:59+05:30",
            rounding: "Nearest 1.00",
            itemsCount: 230,
            updatedAt: "2025-09-30T09:10:12+05:30",
            updatedBy: "marketing@company.com",
            notes: "Gift bundles + BOGO on selected SKUs. Auto-expire post festival.",
        },
        {
            id: "PL-EXPORT-GCC",
            name: "Export GCC",
            type: "Export",
            currency: "AED",
            channel: "Export",
            active: true,
            validFrom: "2025-07-01T00:00:00+04:00",
            validTo: "2026-06-30T23:59:59+04:00",
            rounding: "Nearest 0.25",
            itemsCount: 410,
            updatedAt: "2025-09-18T18:50:02+05:30",
            updatedBy: "intl@company.com",
            notes: "HSN/GST parity mapped; includes freight buffer and FX guardrail.",
        },
    ]), []);

    const [selected, setSelected] = useState(null);
    const [banner, setBanner] = useState("");
    const [infoOpen, setInfoOpen] = useState(false);
    const printRef = useRef(null);

    // export JSON link (static)
    const exportHref = useMemo(() => {
        const blob = new Blob([JSON.stringify(lists, null, 2)], { type: "application/json" });
        return URL.createObjectURL(blob);
    }, [lists]);

    useEffect(() => () => URL.revokeObjectURL(exportHref), [exportHref]);

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3500);
        return () => clearTimeout(t);
    }, [banner]);

    const onCopyLink = (id) => {
        const link = `${location.origin}${location.pathname}#${id}`;
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(link).then(() => setBanner("Link copied"));
        } else {
            setBanner("Copy not supported here");
        }
    };

    const onArchive = () => {
        setInfoOpen(true); // display-only
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    // on hash select (deep link)
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const found = lists.find((x) => x.id === id);
            if (found) setSelected(found);
        }
    }, [lists]);

    return (
        <Styled.Page>
            {/* print rules  */}
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

            <Styled.Header className="card">
                <div className="left">
                    <h1>Price Lists</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/products">Products</NavLink>
                        <span>/</span>
                        <span className="current">Price Lists</span>
                    </nav>
                    <div className="meta">
                        <span>Total: {lists.length}</span>
                        <span>•</span>
                        <span>Last Updated: {fmtDateTime(lists[1].updatedAt)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <DemoBtn title="Demo: action disabled">New Price List</DemoBtn>
                    <DemoBtn title="Demo: action disabled">Import</DemoBtn>
                    <a className="btnPrimary" href={exportHref} download="price-lists.json" title="Download JSON snapshot">Export</a>
                    <button className="btnGhost" onClick={printSection} title="Print selected section">Print</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status">{banner}</Styled.Banner> : null}

            <Styled.Layout>
                <section className="card main">
                    <div className="toolbar">
                        <div className="filters">
                            <input placeholder="Search (read-only demo)" disabled />
                            <select disabled>
                                <option>All types</option>
                                <option>Standard</option>
                                <option>Wholesale</option>
                                <option>Promotion</option>
                                <option>Export</option>
                            </select>
                            <select disabled>
                                <option>All channels</option>
                                <option>Retail</option>
                                <option>B2B</option>
                                <option>Export</option>
                            </select>
                            <select disabled>
                                <option>Status: Any</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                        <div className="toolbarRight">
                            <button className="btnGhost" onClick={() => setBanner("Filters reset (demo)")}>Reset</button>
                        </div>
                    </div>

                    <div className="tableWrap">
                        <table className="tbl">
                            <thead>
                                <tr>
                                    <th style={{ width: 38 }}></th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Currency</th>
                                    <th>Channel</th>
                                    <th>Status</th>
                                    <th>Valid</th>
                                    <th>Rounding</th>
                                    <th>Items</th>
                                    <th>Updated</th>
                                    <th style={{ width: 180 }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lists.map((row) => (
                                    <tr key={row.id} className={selected?.id === row.id ? "isSelected" : ""}>
                                        <td className="selCell">
                                            <input
                                                type="radio"
                                                name="sel"
                                                checked={selected?.id === row.id}
                                                onChange={() => setSelected(row)}
                                                aria-label={`Select ${row.name}`}
                                            />
                                        </td>
                                        <td>
                                            <div className="cellTitle">{row.name}</div>
                                            <div className="muted">{row.id}</div>
                                        </td>
                                        <td>{row.type}</td>
                                        <td>{row.currency}</td>
                                        <td>{row.channel}</td>
                                        <td>
                                            <span className={`badge ${row.active ? "ok" : "mutedBadge"}`}>
                                                {row.active ? "Active" : "Inactive"}
                                            </span>
                                        </td>
                                        <td>
                                            <div>{fmtDate(row.validFrom)} →</div>
                                            <div>{fmtDate(row.validTo)}</div>
                                        </td>
                                        <td>{row.rounding}</td>
                                        <td>{row.itemsCount}</td>
                                        <td>
                                            <div>{fmtDate(row.updatedAt)}</div>
                                            <div className="muted">{row.updatedBy}</div>
                                        </td>
                                        <td className="actionsCell">
                                            <button className="btnPrimary small" onClick={() => setSelected(row)} title="Open details in panel">View</button>
                                            <button className="btnGhost small" onClick={() => onCopyLink(row.id)} title="Copy deep link">Copy Link</button>
                                            <button className="btnDanger small" onClick={onArchive} title="Archive list (demo)">Archive</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <aside className="side">
                    <div className="card sticky">
                        <h3>Details</h3>
                        {!selected ? (
                            <div className="empty">
                                <p>Select a price list to preview its summary, validity, and meta info.</p>
                            </div>
                        ) : (
                            <div className="detail">
                                <header className="hero">
                                    <div className="title">{selected.name}</div>
                                    <div className="meta">
                                        <span className="muted">{selected.id}</span>
                                        <span>•</span>
                                        <span className="badge sm">{selected.type}</span>
                                        <span>•</span>
                                        <span>{selected.currency}</span>
                                    </div>
                                </header>

                                <div className="grid2">
                                    <div>
                                        <div className="label">Channel</div>
                                        <div>{selected.channel}</div>
                                    </div>
                                    <div>
                                        <div className="label">Status</div>
                                        <div>
                                            <span className={`badge ${selected.active ? "ok" : "mutedBadge"}`}>
                                                {selected.active ? "Active" : "Inactive"}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="label">Valid From</div>
                                        <div>{fmtDate(selected.validFrom)}</div>
                                    </div>
                                    <div>
                                        <div className="label">Valid To</div>
                                        <div>{fmtDate(selected.validTo)}</div>
                                    </div>
                                    <div>
                                        <div className="label">Rounding</div>
                                        <div>{selected.rounding}</div>
                                    </div>
                                    <div>
                                        <div className="label">Items</div>
                                        <div>{selected.itemsCount}</div>
                                    </div>
                                </div>

                                <div className="notes">
                                    <div className="label">Notes</div>
                                    <p>{selected.notes}</p>
                                </div>

                                <div className="updated">
                                    <div className="label">Last Updated</div>
                                    <div>{fmtDateTime(selected.updatedAt)} by {selected.updatedBy}</div>
                                </div>

                                {/* print target */}
                                <div id="search-print-area" ref={printRef} className="printCard">
                                    <h4>Price List Summary</h4>
                                    <div className="kv">
                                        <div className="k">Name</div><div className="v">{selected.name}</div>
                                        <div className="k">ID</div><div className="v">{selected.id}</div>
                                        <div className="k">Type</div><div className="v">{selected.type}</div>
                                        <div className="k">Currency</div><div className="v">{selected.currency}</div>
                                        <div className="k">Channel</div><div className="v">{selected.channel}</div>
                                        <div className="k">Status</div><div className="v">{selected.active ? "Active" : "Inactive"}</div>
                                        <div className="k">Valid From</div><div className="v">{fmtDate(selected.validFrom)}</div>
                                        <div className="k">Valid To</div><div className="v">{fmtDate(selected.validTo)}</div>
                                        <div className="k">Rounding</div><div className="v">{selected.rounding}</div>
                                        <div className="k">Items</div><div className="v">{selected.itemsCount}</div>
                                        <div className="k">Updated</div><div className="v">{fmtDateTime(selected.updatedAt)} · {selected.updatedBy}</div>
                                    </div>
                                </div>

                                <div className="panelActions">
                                    <button className="btnGhost" onClick={() => onCopyLink(selected.id)} title="Copy deep link">Copy Link</button>
                                    <button className="btnDanger" onClick={onArchive} title="Archive (demo)">Archive</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/products">Products</NavLink></li>
                            <li><NavLink to="/categories">Categories</NavLink></li>
                            <li><NavLink to="/inventory">Inventory</NavLink></li>
                            <li><NavLink to="/reports/sales">Sales Report</NavLink></li>
                            <li><NavLink to="/tools/import-export">Import / Export</NavLink></li>
                        </ul>
                    </div>
                </aside>
            </Styled.Layout>

            <InfoDialog
                open={infoOpen}
                title="Demo"
                message="This action is disabled in the demo."
                onClose={() => setInfoOpen(false)}
            />
        </Styled.Page>
    );
};

export default PriceListsPage;
