import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* date formatting helpers (single source of truth) */
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

/* demo data (display-only) */
const SHIPMENTS = [
    {
        id: "SHP-5001",
        date: "2025-10-02T10:12:21+05:30",
        customer: { id: "CUST-1001", name: "Aarav Sharma" },
        from: { city: "New Delhi", state: "DL" },
        to: { city: "Mumbai", state: "MH" },
        carrier: "BlueDart",
        service: "Air Express",
        weightKg: 2.3,
        cod: false,
        amount: 1540.0,
        status: "In Transit",
        tracking: "BLD123456789",
        items: 3,
        eta: "2025-10-05T18:30:00+05:30",
    },
    {
        id: "SHP-5002",
        date: "2025-10-01T09:02:10+05:30",
        customer: { id: "CUST-1014", name: "Bluewave Traders" },
        from: { city: "Gurugram", state: "HR" },
        to: { city: "Pune", state: "MH" },
        carrier: "Delhivery",
        service: "Surface",
        weightKg: 14.8,
        cod: true,
        amount: 23600.0,
        status: "Out for Delivery",
        tracking: "DLV987650012",
        items: 12,
        eta: "2025-10-04T12:00:00+05:30",
    },
    {
        id: "SHP-5003",
        date: "2025-09-30T16:40:05+05:30",
        customer: { id: "CUST-1042", name: "Rhea Kapoor" },
        from: { city: "Bengaluru", state: "KA" },
        to: { city: "Hyderabad", state: "TG" },
        carrier: "DTDC",
        service: "Priority",
        weightKg: 6.2,
        cod: false,
        amount: 8820.0,
        status: "Delivered",
        tracking: "DTDC32145009",
        items: 5,
        eta: "2025-10-02T14:15:00+05:30",
    },
    {
        id: "SHP-5004",
        date: "2025-10-03T11:18:44+05:30",
        customer: { id: "CUST-1007", name: "Nova Wellness" },
        from: { city: "Jaipur", state: "RJ" },
        to: { city: "Chandigarh", state: "CH" },
        carrier: "Ecom Express",
        service: "Air",
        weightKg: 1.1,
        cod: false,
        amount: 1240.0,
        status: "Label Created",
        tracking: "ECO4422108",
        items: 2,
        eta: "2025-10-06T19:30:00+05:30",
    },
    {
        id: "SHP-5005",
        date: "2025-10-02T20:28:59+05:30",
        customer: { id: "CUST-1031", name: "Medico Plus" },
        from: { city: "Ahmedabad", state: "GJ" },
        to: { city: "Kolkata", state: "WB" },
        carrier: "Shiprocket",
        service: "Surface Plus",
        weightKg: 22.0,
        cod: false,
        amount: 19450.0,
        status: "Delayed",
        tracking: "SRK55880021",
        items: 15,
        eta: "2025-10-08T09:45:00+05:30",
    },
    {
        id: "SHP-5006",
        date: "2025-10-04T08:05:32+05:30",
        customer: { id: "CUST-1050", name: "City Care Pharmacy" },
        from: { city: "Lucknow", state: "UP" },
        to: { city: "Varanasi", state: "UP" },
        carrier: "BlueDart",
        service: "Surface",
        weightKg: 4.6,
        cod: true,
        amount: 6720.0,
        status: "Pending Pickup",
        tracking: "BLD22336002",
        items: 4,
        eta: "2025-10-06T16:00:00+05:30",
    },
    {
        id: "SHP-5007",
        date: "2025-09-29T13:12:02+05:30",
        customer: { id: "CUST-1020", name: "Care & Cure" },
        from: { city: "Surat", state: "GJ" },
        to: { city: "Bhopal", state: "MP" },
        carrier: "Delhivery",
        service: "Air Express",
        weightKg: 3.8,
        cod: false,
        amount: 4590.0,
        status: "Returned",
        tracking: "DLV77660221",
        items: 3,
        eta: "2025-10-01T12:30:00+05:30",
    },
    {
        id: "SHP-5008",
        date: "2025-10-04T12:22:16+05:30",
        customer: { id: "CUST-1067", name: "Pulse Point" },
        from: { city: "Kochi", state: "KL" },
        to: { city: "Coimbatore", state: "TN" },
        carrier: "DTDC",
        service: "Priority",
        weightKg: 2.0,
        cod: false,
        amount: 3290.0,
        status: "In Transit",
        tracking: "DTDC99882103",
        items: 2,
        eta: "2025-10-05T20:00:00+05:30",
    },
];

/* tiny in-memory helpers (display-only) */
const searchMatch = (row, q) => {
    const str = [
        row.id,
        row.customer?.name,
        row.customer?.id,
        row.carrier,
        row.service,
        row.tracking,
        row.from?.city,
        row.to?.city,
    ]
        .join(" ")
        .toLowerCase();
    return q.split(/\s+/).filter(Boolean).every(t => str.includes(t));
};

const ShipmentsList = () => {
    const now = useMemo(() => new Date(), []);
    const printRef = useRef(null);

    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("");
    const [carrier, setCarrier] = useState("");
    const [sortKey, setSortKey] = useState("date");
    const [sortDir, setSortDir] = useState("desc");
    const [infoOpen, setInfoOpen] = useState(false);

    const carriers = useMemo(
        () => Array.from(new Set(SHIPMENTS.map(s => s.carrier))).sort(),
        []
    );
    const statuses = [
        "Label Created",
        "Pending Pickup",
        "In Transit",
        "Out for Delivery",
        "Delivered",
        "Delayed",
        "Returned",
    ];

    const filtered = useMemo(() => {
        let out = SHIPMENTS.slice();
        if (query.trim()) out = out.filter(r => searchMatch(r, query.trim().toLowerCase()));
        if (status) out = out.filter(r => r.status === status);
        if (carrier) out = out.filter(r => r.carrier === carrier);

        out.sort((a, b) => {
            const dir = sortDir === "asc" ? 1 : -1;
            let av, bv;
            switch (sortKey) {
                case "id": av = a.id; bv = b.id; break;
                case "customer": av = a.customer.name; bv = b.customer.name; break;
                case "carrier": av = a.carrier; bv = b.carrier; break;
                case "status": av = a.status; bv = b.status; break;
                case "amount": av = a.amount; bv = b.amount; break;
                case "weight": av = a.weightKg; bv = b.weightKg; break;
                default: av = new Date(a.date).getTime(); bv = new Date(b.date).getTime();
            }
            if (av < bv) return -1 * dir;
            if (av > bv) return 1 * dir;
            return 0;
        });
        return out;
    }, [query, status, carrier, sortKey, sortDir]);

    const counts = useMemo(() => {
        const map = Object.fromEntries(statuses.map(s => [s, 0]));
        for (const s of SHIPMENTS) map[s.status] = (map[s.status] || 0) + 1;
        return map;
    }, [statuses]);

    const toggleSort = (key) => {
        setSortKey(prev => (prev === key ? key : key));
        setSortDir(prev => (sortKey === key ? (prev === "asc" ? "desc" : "asc") : "asc"));
    };

    const exportJSON = () => {
        const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "shipments.json"; a.click();
        URL.revokeObjectURL(url);
    };

    const printList = () => {
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
            {/* print rules   */}
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
                    <h1>Shipments</h1>
                    <div className="meta">
                        <span>Total: {SHIPMENTS.length}</span>
                        <span>•</span>
                        <span>Last updated: {fmtDateTime(now)}</span>
                    </div>
                </div>
                <div className="right">
                    <button className="btnGhost" onClick={() => setInfoOpen(true)} title="Create shipment (demo disabled)">New Shipment</button>
                    <button className="btnPrimary" onClick={exportJSON} title="Export filtered list as JSON">Export</button>
                    <button className="btnGhost" onClick={printList} title="Print list">Print</button>
                </div>
            </Styled.Header>

            {/* Status overview (quick glance) */}
            <Styled.Stats>
                {statuses.map(s => (
                    <div key={s} className="card stat" data-status={s}>
                        <div className="k">{s}</div>
                        <div className="v">{counts[s] ?? 0}</div>
                    </div>
                ))}
            </Styled.Stats>

            {/* Toolbar */}
            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="field grow">
                        <label>Search</label>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Track no., customer, city, carrier…"
                            aria-label="Search shipments"
                        />
                    </div>
                    <div className="field">
                        <label>Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">All</option>
                            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div className="field">
                        <label>Carrier</label>
                        <select value={carrier} onChange={(e) => setCarrier(e.target.value)}>
                            <option value="">All</option>
                            {carriers.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div className="actions">
                        <button className="btnGhost" onClick={() => { setQuery(""); setStatus(""); setCarrier(""); }}>Clear</button>
                    </div>
                </div>
            </Styled.Toolbar>

            {/* Table */}
            <Styled.TableWrap className="card" id="search-print-area" ref={printRef}>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => toggleSort("id")} data-sort={sortKey === "id" ? sortDir : undefined}>ID</th>
                            <th onClick={() => toggleSort("date")} data-sort={sortKey === "date" ? sortDir : undefined}>Date</th>
                            <th onClick={() => toggleSort("customer")} data-sort={sortKey === "customer" ? sortDir : undefined}>Customer</th>
                            <th>Route</th>
                            <th onClick={() => toggleSort("carrier")} data-sort={sortKey === "carrier" ? sortDir : undefined}>Carrier</th>
                            <th>Service</th>
                            <th onClick={() => toggleSort("weight")} data-sort={sortKey === "weight" ? sortDir : undefined}>Weight</th>
                            <th>COD</th>
                            <th onClick={() => toggleSort("amount")} data-sort={sortKey === "amount" ? sortDir : undefined}>Amount</th>
                            <th>Status</th>
                            <th>Tracking</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(row => (
                            <tr key={row.id}>
                                <td><NavLink to={`/shipments/${row.id}`}>{row.id}</NavLink></td>
                                <td>
                                    <div className="muted">{fmtDate(row.date)}</div>
                                    <div className="small">{fmtDateTime(row.date).split(" ").slice(4).join(" ")}</div>
                                </td>
                                <td>
                                    <div className="strong">{row.customer.name}</div>
                                    <div className="muted">{row.customer.id}</div>
                                </td>
                                <td>
                                    <div className="muted">{row.from.city}, {row.from.state}</div>
                                    <div className="arrow">→</div>
                                    <div className="muted">{row.to.city}, {row.to.state}</div>
                                </td>
                                <td>{row.carrier}</td>
                                <td>{row.service}</td>
                                <td>{row.weightKg.toFixed(1)} kg</td>
                                <td>{row.cod ? <span className="chip cod">COD</span> : <span className="chip prepaid">Prepaid</span>}</td>
                                <td>₹ {row.amount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</td>
                                <td><span className="chip status" data-status={row.status}>{row.status}</span></td>
                                <td className="mono">{row.tracking}</td>
                                <td className="rowActions">
                                    <NavLink to={`/shipments/${row.id}`}>View</NavLink>
                                    <NavLink to={`/shipments/${row.id}/track`}>Track</NavLink>
                                    <NavLink to={`/shipments/${row.id}/labels`}>Labels</NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filtered.length === 0 && (
                    <div className="empty">
                        <div className="title">No results</div>
                        <div className="desc">Try changing filters or search keywords.</div>
                    </div>
                )}
            </Styled.TableWrap>

            {/* demo info dialog (custom modal) */}
            {infoOpen && (
                <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={() => setInfoOpen(false)}>
                    <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                        <header><h4>Demo only</h4></header>
                        <div className="body">
                            <p>This is a display preview. Creating shipments is disabled in the demo.</p>
                        </div>
                        <footer>
                            <button className="btnPrimary" onClick={() => setInfoOpen(false)}>Close</button>
                        </footer>
                    </Styled.Modal>
                </Styled.Overlay>
            )}
        </Styled.Page>
    );
};

export default ShipmentsList;
