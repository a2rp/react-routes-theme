import React, { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/** Date formatting helpers (single source of truth) */
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

/** Demo data (display-only) */
const STATS = {
    totalWarehouses: 6,
    totalBins: 1984,
    totalCapacityM3: 17850,
    overallUtilizationPct: 74,
    lastAuditISO: "2025-10-04T15:38:20+05:30",
};

const WAREHOUSES = [
    {
        id: "W-DEL-01",
        code: "DEL-01",
        name: "Delhi Central DC",
        type: "Distribution",
        location: { city: "New Delhi", state: "DL", country: "India", lat: 28.6139, lon: 77.209 },
        zones: ["A", "B", "C"],
        bins: 420,
        capacityM3: 4200,
        utilizationPct: 82,
        temperature: "Ambient",
        contact: { manager: "Aarav Sharma", phone: "+91 98765 43210", email: "aarav.sharma@example.com" },
        updatedISO: "2025-10-04T15:38:20+05:30",
        tags: ["priority", "north", "automated"],
        address: [
            "221B Baker Street",
            "Khan Market",
            "New Delhi 110003, DL, India",
        ],
        notes: "Fast movers on Zone A. Gate-in congestion 9–11am.",
    },
    {
        id: "W-GGN-02",
        code: "GGN-02",
        name: "Gurugram Fulfillment",
        type: "Fulfillment",
        location: { city: "Gurugram", state: "HR", country: "India", lat: 28.4595, lon: 77.0266 },
        zones: ["A", "Chilled"],
        bins: 310,
        capacityM3: 3600,
        utilizationPct: 68,
        temperature: "Multi",
        contact: { manager: "Niharika Rao", phone: "+91 99887 66554", email: "niharika.rao@example.com" },
        updatedISO: "2025-10-03T10:22:41+05:30",
        tags: ["multi-temp", "priority", "last-mile"],
        address: ["Plot 14", "Industrial Area, Phase 2", "Gurugram 122002, HR, India"],
        notes: "Chilled lane restock post 16:00.",
    },
    {
        id: "W-MUM-01",
        code: "MUM-01",
        name: "Mumbai West Hub",
        type: "Hub",
        location: { city: "Mumbai", state: "MH", country: "India", lat: 19.076, lon: 72.8777 },
        zones: ["A", "BULK"],
        bins: 190,
        capacityM3: 2100,
        utilizationPct: 51,
        temperature: "Ambient",
        contact: { manager: "Kabir Patel", phone: "+91 90123 45678", email: "kabir.patel@example.com" },
        updatedISO: "2025-10-02T12:12:00+05:30",
        tags: ["west", "port-proximity"],
        address: ["Unit 12", "Sion-Bandra Link Road", "Mumbai 400017, MH, India"],
        notes: "Bulk staging in Zone BULK; port cut-off 18:00.",
    },
    {
        id: "W-BLR-01",
        code: "BLR-01",
        name: "Bengaluru Tech Park DC",
        type: "Distribution",
        location: { city: "Bengaluru", state: "KA", country: "India", lat: 12.9716, lon: 77.5946 },
        zones: ["A", "B", "C", "Returns"],
        bins: 520,
        capacityM3: 4900,
        utilizationPct: 77,
        temperature: "Ambient",
        contact: { manager: "Meera N", phone: "+91 98111 22233", email: "meera.n@example.com" },
        updatedISO: "2025-10-01T09:05:32+05:30",
        tags: ["south", "returns"],
        address: ["Block 7", "Outer Ring Road", "Bengaluru 560037, KA, India"],
        notes: "Returns processing after 14:00.",
    },
    {
        id: "W-HYD-01",
        code: "HYD-01",
        name: "Hyderabad Pharma FC",
        type: "Fulfillment",
        location: { city: "Hyderabad", state: "TS", country: "India", lat: 17.385, lon: 78.4867 },
        zones: ["A", "Chilled", "Controlled"],
        bins: 320,
        capacityM3: 3100,
        utilizationPct: 65,
        temperature: "Controlled",
        contact: { manager: "Sara Ali", phone: "+91 97654 32109", email: "sara.ali@example.com" },
        updatedISO: "2025-09-30T17:40:10+05:30",
        tags: ["pharma", "gxp"],
        address: ["Plot 3", "Genome Valley", "Hyderabad 500078, TS, India"],
        notes: "GxP compliance checks 10:00 daily.",
    },
    {
        id: "W-PUN-01",
        code: "PUN-01",
        name: "Pune Regional Store",
        type: "Store",
        location: { city: "Pune", state: "MH", country: "India", lat: 18.5204, lon: 73.8567 },
        zones: ["A"],
        bins: 224,
        capacityM3: 1950,
        utilizationPct: 49,
        temperature: "Ambient",
        contact: { manager: "Aditya Kulkarni", phone: "+91 90909 00001", email: "aditya.kulkarni@example.com" },
        updatedISO: "2025-09-29T11:00:00+05:30",
        tags: ["regional"],
        address: ["Shed 9", "Hinjawadi Phase 1", "Pune 411057, MH, India"],
        notes: "Cross-dock hours 13:00–16:00.",
    },
];

const Warehouses = () => {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [tempFilter, setTempFilter] = useState("all");
    const [selected, setSelected] = useState(null);
    const [toast, setToast] = useState("");

    const printRef = useRef(null);

    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => setToast(""), 2500);
        return () => clearTimeout(t);
    }, [toast]);

    const filtered = useMemo(() => {
        const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
        return WAREHOUSES.filter(w => {
            const hay =
                `${w.name} ${w.code} ${w.type} ${w.location.city} ${w.location.state} ${w.location.country} ${w.tags.join(" ")}`
                    .toLowerCase();
            const passQ = tokens.length === 0 || tokens.every(t => hay.includes(t));
            const passType = typeFilter === "all" || w.type.toLowerCase() === typeFilter;
            const passTemp = tempFilter === "all" || w.temperature.toLowerCase().includes(tempFilter);
            return passQ && passType && passTemp;
        });
    }, [q, typeFilter, tempFilter]);

    const exportJson = () => {
        const payload = { generatedAt: fmt(new Date(), true), stats: STATS, warehouses: WAREHOUSES };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `warehouses-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const copyLink = () => {
        const url = new URL(window.location.href);
        if (selected) url.searchParams.set("id", selected.id);
        navigator.clipboard?.writeText(url.toString()).then(() => {
            setToast(`Link copied at ${fmt(new Date(), true)}`);
        }).catch(() => { });
    };

    const printArea = () => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    // pick selection from URL if present
    useEffect(() => {
        const p = new URLSearchParams(window.location.search);
        const id = p.get("id");
        if (!id) return;
        const hit = WAREHOUSES.find(w => w.id === id);
        if (hit) setSelected(hit);
    }, []);

    const clearSelection = () => {
        setSelected(null);
        const url = new URL(window.location.href);
        url.searchParams.delete("id");
        window.history.replaceState(null, "", url.toString());
    };

    const Header = (
        <Styled.Header className="card">
            <div className="left">
                <h1>Warehouses</h1>
                <nav className="breadcrumbs" aria-label="Breadcrumb">
                    <NavLink to="/inventory">Inventory</NavLink>
                    <span>/</span>
                    <span className="current">Warehouses</span>
                </nav>
                <div className="meta">
                    <span>Total: {STATS.totalWarehouses}</span>
                    <span>•</span>
                    <span>Last audit: {fmt(STATS.lastAuditISO, true)}</span>
                </div>
            </div>

            <div className="right actions">
                <button className="btnGhost" onClick={copyLink} data-tip="Copy deep link">Copy Link</button>
                <button className="btnGhost" onClick={exportJson} data-tip="Export JSON">Export</button>
                <button className="btnGhost" onClick={printArea} data-tip="Print selected / summary">Print</button>

                <button className="btnPrimary" disabled data-tip="Demo only">New Warehouse</button>
            </div>
        </Styled.Header>
    );

    const Toolbar = (
        <Styled.Toolbar className="card">
            <div className="row">
                <div className="field">
                    <label>Search</label>
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="City, code, tag, manager…"
                        aria-label="Search warehouses"
                    />
                </div>

                <div className="field">
                    <label>Type</label>
                    <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="distribution">Distribution</option>
                        <option value="fulfillment">Fulfillment</option>
                        <option value="hub">Hub</option>
                        <option value="store">Store</option>
                    </select>
                </div>

                <div className="field">
                    <label>Temperature</label>
                    <select value={tempFilter} onChange={(e) => setTempFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="ambient">Ambient</option>
                        <option value="controlled">Controlled</option>
                        <option value="chilled">Chilled</option>
                        <option value="multi">Multi</option>
                    </select>
                </div>

                <div className="spacer" />

                <div className="quickStats">
                    <div><span className="k">Bins</span><span className="v">{STATS.totalBins}</span></div>
                    <div><span className="k">Capacity (m³)</span><span className="v">{STATS.totalCapacityM3}</span></div>
                    <div><span className="k">Utilization</span>
                        <span className="v">{STATS.overallUtilizationPct}%</span>
                        <span className="bar"><i style={{ width: `${STATS.overallUtilizationPct}%` }} /></span>
                    </div>
                </div>
            </div>
        </Styled.Toolbar>
    );

    return (
        <Styled.Page className="container">
            {/* print CSS (exact semantics) */}
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

            {Header}
            {toast ? <Styled.Toast>{toast}</Styled.Toast> : null}
            {Toolbar}

            <Styled.Layout>
                {/* Left: table */}
                <section className="col list card">
                    <header className="tableHead">
                        <div>Code</div>
                        <div>Name</div>
                        <div>Type</div>
                        <div>Location</div>
                        <div>Zones</div>
                        <div>Bins</div>
                        <div>Capacity</div>
                        <div>Utilization</div>
                        <div>Updated</div>
                        <div>Tags</div>
                    </header>

                    <div className="rows" role="table" aria-label="Warehouses table">
                        {filtered.map(w => (
                            <article
                                key={w.id}
                                className={`row ${selected?.id === w.id ? "selected" : ""}`}
                                onClick={() => setSelected(w)}
                                role="row"
                            >
                                <div className="cell mono">{w.code}</div>
                                <div className="cell name">
                                    <div className="title">{w.name}</div>
                                    <div className="muted">{w.contact.manager} • {w.contact.phone}</div>
                                </div>
                                <div className="cell">{w.type}</div>
                                <div className="cell">
                                    <div>{w.location.city}</div>
                                    <div className="muted">{w.location.state}, {w.location.country}</div>
                                </div>
                                <div className="cell">{w.zones.join(", ")}</div>
                                <div className="cell">{w.bins}</div>
                                <div className="cell">{w.capacityM3} m³</div>
                                <div className="cell util">
                                    <div className="pct">{w.utilizationPct}%</div>
                                    <div className="meter"><i style={{ width: `${w.utilizationPct}%` }} /></div>
                                </div>
                                <div className="cell">{fmt(w.updatedISO, true)}</div>
                                <div className="cell tags">
                                    {w.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </article>
                        ))}

                        {filtered.length === 0 && (
                            <div className="empty">
                                <div className="big">No matches</div>
                                <div className="muted">Try different filters or clear the search.</div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Right: detail / snapshot */}
                <aside className="col side">
                    <div className="card" id="search-print-area" ref={printRef}>
                        {selected ? (
                            <>
                                <h3>Snapshot • {selected.name}</h3>
                                <div className="kv">
                                    <div><span className="k">Code</span><span className="v mono">{selected.code}</span></div>
                                    <div><span className="k">Type</span><span className="v">{selected.type}</span></div>
                                    <div><span className="k">City</span><span className="v">{selected.location.city}</span></div>
                                    <div><span className="k">State</span><span className="v">{selected.location.state}</span></div>
                                    <div><span className="k">Country</span><span className="v">{selected.location.country}</span></div>
                                    <div><span className="k">Zones</span><span className="v">{selected.zones.join(", ")}</span></div>
                                    <div><span className="k">Bins</span><span className="v">{selected.bins}</span></div>
                                    <div><span className="k">Capacity</span><span className="v">{selected.capacityM3} m³</span></div>
                                    <div><span className="k">Utilization</span>
                                        <span className="v">{selected.utilizationPct}%</span>
                                    </div>
                                    <div><span className="k">Temp</span><span className="v">{selected.temperature}</span></div>
                                    <div><span className="k">Manager</span><span className="v">{selected.contact.manager}</span></div>
                                    <div><span className="k">Phone</span><span className="v">{selected.contact.phone}</span></div>
                                    <div><span className="k">Email</span><span className="v">{selected.contact.email}</span></div>
                                    <div><span className="k">Updated</span><span className="v">{fmt(selected.updatedISO, true)}</span></div>
                                </div>

                                <div className="address">
                                    {selected.address.map((ln, i) => <div key={i}>{ln}</div>)}
                                </div>

                                <div className="notes">
                                    <div className="label">Notes</div>
                                    <p>{selected.notes}</p>
                                </div>

                                <div className="heat">
                                    <div className="label">Capacity Heat</div>
                                    <div className="gradient" aria-hidden="true" />
                                    <div className="legend">
                                        <span>0%</span><span>50%</span><span>100%</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3>Printable Summary</h3>
                                <div className="summary">
                                    <div><span className="k">Total warehouses</span><span className="v">{STATS.totalWarehouses}</span></div>
                                    <div><span className="k">Bins</span><span className="v">{STATS.totalBins}</span></div>
                                    <div><span className="k">Capacity (m³)</span><span className="v">{STATS.totalCapacityM3}</span></div>
                                    <div><span className="k">Utilization</span><span className="v">{STATS.overallUtilizationPct}%</span></div>
                                    <div><span className="k">Last audit</span><span className="v">{fmt(STATS.lastAuditISO, true)}</span></div>
                                </div>
                                <div className="muted small">Select a warehouse to print its snapshot.</div>
                            </>
                        )}
                    </div>

                    <div className="card actions">
                        <button className="btnGhost" onClick={clearSelection} disabled={!selected}>Clear Selection</button>
                        <button className="btnGhost" onClick={copyLink} data-tip="Copy deep link to selection" disabled={!selected}>Copy Link</button>
                        <button className="btnPrimary" disabled data-tip="Demo only">Edit</button>
                        <button className="btnDanger" disabled data-tip="Demo only">Disable</button>
                    </div>

                    <div className="card info">
                        <h3>Service Window</h3>
                        <div className="grid2">
                            <div>
                                <div className="label">Gate-in</div>
                                <div>09:00–18:00</div>
                            </div>
                            <div>
                                <div className="label">Best time</div>
                                <div>{onlyTime(new Date())}</div>
                            </div>
                            <div>
                                <div className="label">SLA</div>
                                <div>Inbound &lt; 2h</div>
                            </div>
                            <div>
                                <div className="label">Compliance</div>
                                <div>GxP / SOP v3.1</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </Styled.Layout>
        </Styled.Page>
    );
};

export default Warehouses;
