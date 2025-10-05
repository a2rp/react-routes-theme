import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* --- date utils (consistent across the app) --- */
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

/* --- pre-seeded display-only data --- */
const seededTransfers = [
    {
        id: "TRF-1001",
        createdAt: "2025-10-04T10:12:24+05:30",
        fromWh: "DEL-01 / Main",
        toWh: "GGM-02 / North Hub",
        itemCount: 14,
        status: "In Transit",
        eta: "2025-10-06T13:00:00+05:30",
        lastUpdate: "2025-10-04T18:22:11+05:30",
        ref: "SO-3481",
        notes: "High priority; temperature controlled carton included.",
        items: [
            { sku: "MED-AMOX-500", name: "Amoxicillin 500mg Cap", qty: 120, unit: "caps", lot: "L-AX5-332", expiry: "2027-03-31" },
            { sku: "MED-PARA-650", name: "Paracetamol 650mg Tab", qty: 600, unit: "tabs", lot: "L-PR6-119", expiry: "2026-12-31" },
            { sku: "MED-ORS-200", name: "ORS Sachet 20g", qty: 200, unit: "sachet", lot: "L-OR2-009", expiry: "2026-08-30" },
        ],
        timeline: [
            { at: "2025-10-04T10:12:24+05:30", label: "Transfer created" },
            { at: "2025-10-04T12:09:00+05:30", label: "Packed & sealed" },
            { at: "2025-10-04T14:42:12+05:30", label: "Handed to carrier (Bluedart)" },
            { at: "2025-10-04T18:22:11+05:30", label: "Departed origin facility" },
        ],
    },
    {
        id: "TRF-1002",
        createdAt: "2025-10-03T09:05:42+05:30",
        fromWh: "DEL-01 / Main",
        toWh: "MUM-01 / West DC",
        itemCount: 7,
        status: "Completed",
        eta: "2025-10-03T20:00:00+05:30",
        lastUpdate: "2025-10-03T19:58:20+05:30",
        ref: "PO-7719",
        notes: "Delivered to cage B-12; GRN posted.",
        items: [
            { sku: "MED-CET-10", name: "Cetirizine 10mg Tab", qty: 300, unit: "tabs", lot: "L-CT1-221", expiry: "2027-05-31" },
            { sku: "MED-VITC-500", name: "Vitamin C 500mg", qty: 150, unit: "tabs", lot: "L-VC5-872", expiry: "2027-01-31" },
        ],
        timeline: [
            { at: "2025-10-03T09:05:42+05:30", label: "Transfer created" },
            { at: "2025-10-03T10:30:00+05:30", label: "Picked" },
            { at: "2025-10-03T12:00:00+05:30", label: "In transit" },
            { at: "2025-10-03T19:58:20+05:30", label: "Delivered & verified" },
        ],
    },
    {
        id: "TRF-1003",
        createdAt: "2025-10-02T16:45:10+05:30",
        fromWh: "GGM-02 / North Hub",
        toWh: "DEL-01 / Main",
        itemCount: 5,
        status: "Draft",
        eta: "2025-10-05T16:00:00+05:30",
        lastUpdate: "2025-10-02T18:11:33+05:30",
        ref: "",
        notes: "Awaiting approval; carrier not assigned.",
        items: [
            { sku: "MED-AMOX-250", name: "Amoxicillin 250mg Cap", qty: 80, unit: "caps", lot: "L-AX2-774", expiry: "2026-04-30" },
            { sku: "MED-ORS-200", name: "ORS Sachet 20g", qty: 90, unit: "sachet", lot: "L-OR2-103", expiry: "2026-02-28" },
        ],
        timeline: [
            { at: "2025-10-02T16:45:10+05:30", label: "Transfer created (draft)" },
            { at: "2025-10-02T18:11:33+05:30", label: "Items added" },
        ],
    },
    {
        id: "TRF-1004",
        createdAt: "2025-10-01T08:22:01+05:30",
        fromWh: "MUM-01 / West DC",
        toWh: "DEL-01 / Main",
        itemCount: 10,
        status: "Cancelled",
        eta: "2025-10-02T21:00:00+05:30",
        lastUpdate: "2025-10-01T10:13:59+05:30",
        ref: "SO-3478",
        notes: "Cancelled due to mismatch in requested pack size.",
        items: [
            { sku: "MED-IBU-400", name: "Ibuprofen 400mg Tab", qty: 240, unit: "tabs", lot: "L-IB4-009", expiry: "2026-10-31" },
        ],
        timeline: [
            { at: "2025-10-01T08:22:01+05:30", label: "Transfer created" },
            { at: "2025-10-01T10:13:59+05:30", label: "Cancelled" },
        ],
    },
];

/* CSV export helper */
const exportCsv = (rows) => {
    const headers = ["Transfer ID", "Created", "From", "To", "Items", "Status", "ETA", "Last Update", "Reference"];
    const lines = [headers.join(",")];
    for (const r of rows) {
        const vals = [
            r.id,
            fmt(r.createdAt, true),
            r.fromWh,
            r.toWh,
            String(r.itemCount),
            r.status,
            fmt(r.eta),
            fmt(r.lastUpdate, true),
            r.ref || "-",
        ].map(v => `"${String(v).replace(/"/g, '""')}"`);
        lines.push(vals.join(","));
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "inventory-transfers.csv"; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 500);
};

const TransfersPage = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const printRef = useRef(null);

    // derived filters
    const warehouses = useMemo(() => {
        const set = new Set();
        seededTransfers.forEach(t => { set.add(t.fromWh); set.add(t.toWh); });
        return Array.from(set).sort();
    }, []);

    const [q, setQ] = useState("");
    const [whFrom, setWhFrom] = useState("");
    const [whTo, setWhTo] = useState("");
    const [status, setStatus] = useState("All"); // Draft | In Transit | Completed | Cancelled
    const [selected, setSelected] = useState(null);

    // preselect via deep-link query (?select=TRF-1001)
    useEffect(() => {
        const s = new URLSearchParams(search);
        const id = s.get("select");
        if (!id) return;
        const found = seededTransfers.find(t => t.id === id);
        if (found) setSelected(found);
    }, [search]);

    const filtered = useMemo(() => {
        const ql = q.trim().toLowerCase();
        return seededTransfers.filter(t => {
            const text = `${t.id} ${t.fromWh} ${t.toWh} ${t.status} ${t.ref}`.toLowerCase();
            if (ql && !text.includes(ql)) return false;
            if (whFrom && t.fromWh !== whFrom) return false;
            if (whTo && t.toWh !== whTo) return false;
            if (status !== "All" && t.status !== status) return false;
            return true;
        });
    }, [q, whFrom, whTo, status]);

    const clearFilters = () => { setQ(""); setWhFrom(""); setWhTo(""); setStatus("All"); };

    const printSection = () => {
        if (!selected) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/inventory">Inventory</NavLink>
            <span>/</span>
            <span className="current">Transfers</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print CSS for section printing */}
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

            <Styled.Header className="card">
                <div className="left">
                    <h1>Inventory Transfers</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Total: {seededTransfers.length}</span>
                        <span>•</span>
                        <span>Last refresh: {fmt(new Date(), true)}</span>
                    </div>
                </div>
                <div className="right">
                    <button className="btnGhost" title="Back to Inventory" onClick={() => navigate("/inventory")}>Back</button>
                    <button className="btnGhost" title="Export CSV" onClick={() => exportCsv(filtered)}>Export</button>
                    <button className="btnGhost" title="Print selected summary" onClick={printSection} disabled={!selected}>Print</button>
                    <button className="btnPrimary" title="Demo only" disabled>New Transfer</button>
                </div>
            </Styled.Header>

            {/* quick stats */}
            <Styled.Kpis>
                <div className="k card">
                    <div className="label">In Transit</div>
                    <div className="value">{seededTransfers.filter(x => x.status === "In Transit").length}</div>
                    <div className="hint">ETA windows live</div>
                </div>
                <div className="k card">
                    <div className="label">Completed Today</div>
                    <div className="value">{seededTransfers.filter(x => x.status === "Completed").length}</div>
                    <div className="hint">Verified at destination</div>
                </div>
                <div className="k card">
                    <div className="label">Drafts</div>
                    <div className="value">{seededTransfers.filter(x => x.status === "Draft").length}</div>
                    <div className="hint">Awaiting approval</div>
                </div>
                <div className="k card">
                    <div className="label">Issues</div>
                    <div className="value">{seededTransfers.filter(x => x.status === "Cancelled").length}</div>
                    <div className="hint">Needs review</div>
                </div>
            </Styled.Kpis>

            {/* filters */}
            <Styled.Filters className="card">
                <div className="row">
                    <div className="field">
                        <label>Search</label>
                        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by ID, warehouse, status…" />
                    </div>
                    <div className="field">
                        <label>From Warehouse</label>
                        <select value={whFrom} onChange={(e) => setWhFrom(e.target.value)}>
                            <option value="">All</option>
                            {warehouses.map(w => <option key={`f-${w}`} value={w}>{w}</option>)}
                        </select>
                    </div>
                    <div className="field">
                        <label>To Warehouse</label>
                        <select value={whTo} onChange={(e) => setWhTo(e.target.value)}>
                            <option value="">All</option>
                            {warehouses.map(w => <option key={`t-${w}`} value={w}>{w}</option>)}
                        </select>
                    </div>
                    <div className="field">
                        <label>Status</label>
                        <div className="chipRow">
                            {["All", "In Transit", "Completed", "Draft", "Cancelled"].map(s => (
                                <button
                                    key={s}
                                    className={`chip ${status === s ? "active" : ""}`}
                                    onClick={() => setStatus(s)}
                                    type="button"
                                    title={`Filter: ${s}`}
                                >{s}</button>
                            ))}
                        </div>
                    </div>
                    <div className="field end">
                        <button className="btnGhost" onClick={clearFilters} title="Clear filters">Clear</button>
                    </div>
                </div>
            </Styled.Filters>

            <Styled.Layout>
                {/* table */}
                <section className="list card" aria-label="Transfers list">
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Transfer</th>
                                    <th>Created</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Items</th>
                                    <th>Status</th>
                                    <th>ETA</th>
                                    <th>Last Update</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map(row => (
                                    <tr key={row.id} className={selected?.id === row.id ? "selected" : ""}>
                                        <td>
                                            <div className="idcell">
                                                <strong>{row.id}</strong>
                                                <div className="muted">{row.ref || "—"}</div>
                                            </div>
                                        </td>
                                        <td>{fmt(row.createdAt, true)}</td>
                                        <td>{row.fromWh}</td>
                                        <td>{row.toWh}</td>
                                        <td className="num">{row.itemCount}</td>
                                        <td>
                                            <span className={`badge ${row.status.toLowerCase().replace(" ", "-")}`}>{row.status}</span>
                                        </td>
                                        <td>{fmt(row.eta)}</td>
                                        <td>{fmt(row.lastUpdate, true)}</td>
                                        <td className="actions">
                                            <button className="btnGhost small" onClick={() => setSelected(row)} title="Inspect details">Inspect</button>
                                            <button className="btnGhost small" onClick={() => navigator.clipboard?.writeText(`${location.origin}${location.pathname}?select=${row.id}`)} title="Copy deep link">Copy Link</button>
                                        </td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={9}>
                                            <div className="empty">
                                                <div className="title">No transfers match the filters</div>
                                                <div className="hint">Try changing Status or Warehouses.</div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* inspector / summary */}
                <aside className="inspector">
                    {selected ? (
                        <div className="inspectorCard card">
                            <div className="inspectorHead">
                                <div>
                                    <h3>{selected.id}</h3>
                                    <div className="muted">{selected.fromWh} → {selected.toWh}</div>
                                </div>
                                <button className="btnGhost" onClick={() => setSelected(null)} title="Close">Close</button>
                            </div>

                            <div className="grid meta">
                                <div><div className="label">Created</div><div>{fmt(selected.createdAt, true)}</div></div>
                                <div><div className="label">Status</div><div><span className={`badge ${selected.status.toLowerCase().replace(" ", "-")}`}>{selected.status}</span></div></div>
                                <div><div className="label">Items</div><div>{selected.itemCount}</div></div>
                                <div><div className="label">ETA</div><div>{fmt(selected.eta)}</div></div>
                                <div><div className="label">Last Update</div><div>{fmt(selected.lastUpdate, true)}</div></div>
                                <div><div className="label">Reference</div><div>{selected.ref || "—"}</div></div>
                            </div>

                            <div className="card sub">
                                <h4>Line Items</h4>
                                <div className="lines">
                                    {selected.items.map((it, idx) => (
                                        <div className="line" key={idx}>
                                            <div className="sku">{it.sku}</div>
                                            <div className="name">{it.name}</div>
                                            <div className="qty">{it.qty} {it.unit}</div>
                                            <div className="lot">Lot {it.lot}</div>
                                            <div className="exp">Exp {fmt(it.expiry)}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card sub">
                                <h4>Timeline</h4>
                                <ul className="timeline">
                                    {selected.timeline.map((ev, i) => (
                                        <li key={i}>
                                            <span className="dot" />
                                            <div>
                                                <strong>{ev.label}</strong>
                                                <div className="muted">{fmt(ev.at, true)}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card sub" id="search-print-area" ref={printRef}>
                                <h4>Print Summary</h4>
                                <div className="printSummary">
                                    <div className="row">
                                        <span className="k">Transfer</span>
                                        <span className="v">{selected.id}</span>
                                    </div>
                                    <div className="row">
                                        <span className="k">Route</span>
                                        <span className="v">{selected.fromWh} → {selected.toWh}</span>
                                    </div>
                                    <div className="row">
                                        <span className="k">Created</span>
                                        <span className="v">{fmt(selected.createdAt, true)}</span>
                                    </div>
                                    <div className="row">
                                        <span className="k">ETA</span>
                                        <span className="v">{fmt(selected.eta)}</span>
                                    </div>
                                    <div className="row">
                                        <span className="k">Status</span>
                                        <span className="v"><span className={`badge ${selected.status.toLowerCase().replace(" ", "-")}`}>{selected.status}</span></span>
                                    </div>
                                    <div className="row">
                                        <span className="k">Items</span>
                                        <span className="v">{selected.itemCount}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="actionsRow">
                                <button className="btnGhost" title="Export summary" onClick={() => exportCsv([selected])}>Export Row</button>
                                <button className="btnGhost" title="Print this summary" onClick={() => { window.scrollTo({ top: 0 }); setTimeout(() => window.print(), 50); }}>Print</button>
                                <button className="btnPrimary" title="Demo only" disabled>Mark Completed</button>
                            </div>
                        </div>
                    ) : (
                        <div className="placeholder card">
                            <div className="title">Select a transfer</div>
                            <div className="hint">Choose “Inspect” from the list to view details, timeline and print summary.</div>
                        </div>
                    )}
                </aside>
            </Styled.Layout>
        </Styled.Page>
    );
};

export default TransfersPage;
