import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdPrint,
    MdDownload,
    MdOpenInNew,
    MdAdd,
    MdInfoOutline,
    MdLocalShipping,
    MdReceiptLong,
    MdContentCopy,
} from "react-icons/md";

/* ================================
   Tiny date format helpers
   ================================ */
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ================================
   Demo-only modal (info)
   ================================ */
const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header>
                    <h4>{title}</h4>
                </header>
                <div className="body">
                    <p>{message}</p>
                </div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

/* ================================
   Static demo data (display only)
   ================================ */
const PO_ROWS = [
    {
        id: "PO-24001",
        vendorId: "VEND-1001",
        vendor: "Acme Supplies Pvt Ltd",
        status: "Open",
        items: 6,
        amount: "₹ 1,24,500",
        currency: "INR",
        eta: "2025-10-12",
        placedAt: "2025-10-03T14:22:15+05:30",
        updatedAt: "2025-10-03T14:22:15+05:30",
        tags: ["priority", "north"],
    },
    {
        id: "PO-24002",
        vendorId: "VEND-1004",
        vendor: "Bluewave Traders",
        status: "Partially Received",
        items: 9,
        amount: "₹ 2,63,000",
        currency: "INR",
        eta: "2025-10-09",
        placedAt: "2025-10-02T10:05:40+05:30",
        updatedAt: "2025-10-04T11:10:20+05:30",
        tags: ["bulk"],
    },
    {
        id: "PO-24003",
        vendorId: "VEND-1012",
        vendor: "Zen Pharm Co.",
        status: "Received",
        items: 4,
        amount: "₹ 78,900",
        currency: "INR",
        eta: "2025-10-07",
        placedAt: "2025-10-01T09:02:10+05:30",
        updatedAt: "2025-10-03T18:48:55+05:30",
        tags: ["pharma"],
    },
    {
        id: "PO-24004",
        vendorId: "VEND-1015",
        vendor: "Orbit Logistics",
        status: "Billed",
        items: 12,
        amount: "₹ 4,12,000",
        currency: "INR",
        eta: "2025-10-05",
        placedAt: "2025-09-30T12:41:33+05:30",
        updatedAt: "2025-10-04T15:31:12+05:30",
        tags: ["east", "wholesale"],
    },
    {
        id: "PO-24005",
        vendorId: "VEND-1019",
        vendor: "Nimbus Industrial",
        status: "Open",
        items: 5,
        amount: "₹ 96,700",
        currency: "INR",
        eta: "2025-10-14",
        placedAt: "2025-10-03T17:10:09+05:30",
        updatedAt: "2025-10-03T17:10:09+05:30",
        tags: [],
    },
    {
        id: "PO-24006",
        vendorId: "VEND-1021",
        vendor: "Radiant Medline",
        status: "Cancelled",
        items: 3,
        amount: "₹ 31,250",
        currency: "INR",
        eta: "2025-10-06",
        placedAt: "2025-09-29T16:15:45+05:30",
        updatedAt: "2025-10-01T10:00:00+05:30",
        tags: ["price-revision"],
    },
    {
        id: "PO-24007",
        vendorId: "VEND-1027",
        vendor: "Vector Components",
        status: "Received",
        items: 7,
        amount: "₹ 1,79,200",
        currency: "INR",
        eta: "2025-10-08",
        placedAt: "2025-10-01T13:20:00+05:30",
        updatedAt: "2025-10-03T09:45:22+05:30",
        tags: ["import"],
    },
    {
        id: "PO-24008",
        vendorId: "VEND-1030",
        vendor: "Prime Papers",
        status: "Billed",
        items: 10,
        amount: "₹ 2,05,900",
        currency: "INR",
        eta: "2025-10-10",
        placedAt: "2025-10-02T08:44:10+05:30",
        updatedAt: "2025-10-04T12:20:05+05:30",
        tags: [],
    },
];

/* ================================
   Component
   ================================ */
const PurchaseOrdersList = () => {
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("All");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [density, setDensity] = useState("comfortable");
    const [infoOpen, setInfoOpen] = useState(false);
    const printRef = useRef(null);

    // filter in-memory (display only)
    const rows = useMemo(() => {
        const q = query.trim().toLowerCase();
        return PO_ROWS.filter((r) => {
            const matchQ =
                !q ||
                r.id.toLowerCase().includes(q) ||
                r.vendor.toLowerCase().includes(q) ||
                r.vendorId.toLowerCase().includes(q) ||
                r.tags.join(" ").toLowerCase().includes(q);
            const matchStatus = status === "All" || r.status === status;
            const t = new Date(r.placedAt).getTime();
            const after = from ? t >= new Date(from).setHours(0, 0, 0, 0) : true;
            const before = to ? t <= new Date(to).setHours(23, 59, 59, 999) : true;
            return matchQ && matchStatus && after && before;
        });
    }, [query, status, from, to]);

    const clearFilters = () => {
        setQuery("");
        setStatus("All");
        setFrom("");
        setTo("");
    };

    const exportCsv = () => {
        const headers = [
            "PO ID", "Vendor", "Vendor ID", "Status", "Items", "Amount", "ETA", "Placed At", "Updated At", "Tags"
        ];
        const lines = rows.map((r) => [
            r.id, r.vendor, r.vendorId, r.status, r.items, r.amount, fmtDate(r.eta), fmtDateTime(r.placedAt), fmtDateTime(r.updatedAt), r.tags.join("|")
        ]);
        const csv = [headers, ...lines].map(arr => arr.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "purchase-orders.csv";
        document.body.appendChild(link);
        link.click();
        link.remove();
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

    const copyDeepLink = (id) => {
        const url = `${window.location.origin}${import.meta.env.BASE_URL || "/"}purchase-orders/${id}`;
        navigator.clipboard?.writeText(url);
    };

    useEffect(() => {
        // focus the main search on mount
        const input = document.getElementById("po-search-input");
        if (input) {
            requestAnimationFrame(() => {
                try { input.focus({ preventScroll: true }); } catch { input.focus(); }
            });
        }
    }, []);

    return (
        <Styled.Page>
            {/* Print CSS block */}
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

            <Styled.Header className="card">
                <div className="left">
                    <h1>Purchase Orders</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                        <span>/</span>
                        <span className="current">List</span>
                    </nav>
                    <div className="meta">
                        <span>Snapshot: {fmtDateTime(new Date())}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button
                        className="btnPrimary"
                        data-demo
                        onClick={() => setInfoOpen(true)}
                        title="Create new PO (demo disabled)"
                    >
                        <MdAdd size={18} /> New PO
                    </button>
                    <button className="btnGhost" onClick={exportCsv} title="Export current view to CSV">
                        <MdDownload size={18} /> Export CSV
                    </button>
                    <button className="btnGhost" onClick={printSection} title="Print current section">
                        <MdPrint size={18} /> Print
                    </button>
                </div>
            </Styled.Header>

            <Styled.Toolbar className="card">
                <div className="filters">
                    <div className="field grow">
                        <label htmlFor="po-search-input">Search</label>
                        <input
                            id="po-search-input"
                            placeholder="Search PO ID, vendor, tag…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label>Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>All</option>
                            <option>Open</option>
                            <option>Partially Received</option>
                            <option>Received</option>
                            <option>Billed</option>
                            <option>Cancelled</option>
                        </select>
                    </div>

                    <div className="field">
                        <label>From</label>
                        <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>To</label>
                        <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
                    </div>

                    <div className="field">
                        <label>Density</label>
                        <select value={density} onChange={(e) => setDensity(e.target.value)}>
                            <option value="comfortable">Comfortable</option>
                            <option value="compact">Compact</option>
                        </select>
                    </div>

                    <div className="field">
                        <label>&nbsp;</label>
                        <button className="btnGhost" onClick={clearFilters} title="Reset filters">Clear</button>
                    </div>
                </div>

                <div className="legend">
                    <span className="pill open">Open</span>
                    <span className="pill partial">Partially Received</span>
                    <span className="pill received">Received</span>
                    <span className="pill billed">Billed</span>
                    <span className="pill cancelled">Cancelled</span>
                </div>
            </Styled.Toolbar>

            <Styled.Grid>
                <section className="main" id="search-print-area" ref={printRef}>
                    <Styled.TableWrap className={`card ${density}`}>
                        <div className="tableTitle">
                            <h3>All Purchase Orders</h3>
                            <div className="count">{rows.length} results</div>
                        </div>

                        <div className="tableScroll">
                            <table role="table" aria-label="Purchase orders">
                                <thead>
                                    <tr>
                                        <th>PO</th>
                                        <th>Vendor</th>
                                        <th className="num">Items</th>
                                        <th className="num">Amount</th>
                                        <th>Status</th>
                                        <th>ETA</th>
                                        <th>Placed</th>
                                        <th>Updated</th>
                                        <th className="actions">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((r) => (
                                        <tr key={r.id}>
                                            <td>
                                                <NavLink className="mono" to={`/purchase-orders/${r.id}`} title="Open details">
                                                    {r.id} <MdOpenInNew size={14} />
                                                </NavLink>
                                                {r.tags.length ? (
                                                    <div className="tags">
                                                        {r.tags.map((t) => (
                                                            <span className="tag" key={t}>{t}</span>
                                                        ))}
                                                    </div>
                                                ) : null}
                                            </td>
                                            <td>
                                                <NavLink to={`/vendors/${r.vendorId}`} title="View vendor">
                                                    {r.vendor}
                                                </NavLink>
                                                <div className="sub muted">{r.vendorId}</div>
                                            </td>
                                            <td className="num">{r.items}</td>
                                            <td className="num">{r.amount}</td>
                                            <td>
                                                <span className={`badge ${r.status.replace(/\s+/g, '-').toLowerCase()}`}>{r.status}</span>
                                            </td>
                                            <td>{fmtDate(r.eta)}</td>
                                            <td>{fmtDateTime(r.placedAt)}</td>
                                            <td>{fmtDateTime(r.updatedAt)}</td>
                                            <td className="actions">
                                                <NavLink to={`/purchase-orders/${r.id}/receipt`} className="mini" title="Receipts">
                                                    <MdLocalShipping size={16} /> Receive
                                                </NavLink>
                                                <NavLink to={`/purchase-orders/${r.id}/bill`} className="mini" title="Bill">
                                                    <MdReceiptLong size={16} /> Bill
                                                </NavLink>
                                                <button className="mini btnGhost" onClick={() => copyDeepLink(r.id)} title="Copy deep link">
                                                    <MdContentCopy size={16} /> Copy Link
                                                </button>
                                                <NavLink to={`/purchase-orders/${r.id}/print`} className="mini" title="Print PO">
                                                    <MdPrint size={16} /> Print
                                                </NavLink>
                                            </td>
                                        </tr>
                                    ))}

                                    {rows.length === 0 && (
                                        <tr>
                                            <td colSpan={9}>
                                                <div className="empty">
                                                    <MdInfoOutline size={20} />
                                                    <div>No purchase orders match your filters.</div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Styled.TableWrap>
                </section>

                <aside className="side">
                    <div className="card sideCard">
                        <h3>Shortcuts</h3>
                        <ul className="links">
                            <li><NavLink to="/vendors">Browse Vendors</NavLink></li>
                            <li><NavLink to="/inventory/warehouses">Warehouses</NavLink></li>
                            <li><NavLink to="/products">Products Catalog</NavLink></li>
                            <li><NavLink to="/reports/procurement">Procurement Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card sideCard">
                        <h3>PO Tips</h3>
                        <ul className="tips">
                            <li>Click a PO ID to open details. Row actions expose direct deep-links.</li>
                            <li>Use the density control for compact or comfortable views.</li>
                            <li>Export CSV respects current filters.</li>
                            <li>Print limits the page to the table section for a neat hard-copy.</li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <InfoDialog
                open={infoOpen}
                title="Demo Mode"
                message="Creating a new purchase order is disabled in the demo. All flows and deep links are available for preview."
                onClose={() => setInfoOpen(false)}
            />
        </Styled.Page>
    );
};

export default PurchaseOrdersList;
