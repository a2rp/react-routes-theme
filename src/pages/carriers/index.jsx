import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* ---------------- Date/Time helpers (single source of truth) ---------------- */
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(`1970-01-01T${d}`);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ---------------- Demo fixtures (display-only) ---------------- */
const useCarriers = () => {
    const now = useMemo(() => new Date("2025-10-04T15:38:20+05:30"), []); // fixed for display
    const data = useMemo(() => ([
        {
            id: "CAR-DELHIVERY",
            name: "Delhivery",
            code: "DELHIVERY",
            status: "active",
            onTime: 96,
            cod: true,
            trackingUrl: "https://www.delhivery.com/tracking",
            pickupCutoff: "17:30:00", // 24h time -> will format to HH:mm:sshrs
            serviceLevels: ["Surface", "Air Express", "Same Day"],
            coverage: "PAN India",
            zones: ["Z1", "Z2", "Z3", "Z4"],
            default: true,
            updatedAt: now,
            supportEmail: "ops@delhivery.example.com",
        },
        {
            id: "CAR-BLUEDART",
            name: "Blue Dart",
            code: "BLUEDART",
            status: "active",
            onTime: 94,
            cod: true,
            trackingUrl: "https://www.bluedart.com/tracking",
            pickupCutoff: "18:00:00",
            serviceLevels: ["Express", "Priority", "Temperature Controlled"],
            coverage: "Tier 1–3 Cities",
            zones: ["Z1", "Z2", "Z3"],
            default: false,
            updatedAt: now,
            supportEmail: "ops@bluedart.example.com",
        },
        {
            id: "CAR-FEDEX",
            name: "FedEx",
            code: "FEDEX",
            status: "active",
            onTime: 97,
            cod: false,
            trackingUrl: "https://www.fedex.com/apps/fedextrack/",
            pickupCutoff: "16:30:00",
            serviceLevels: ["International Priority", "Domestic Express"],
            coverage: "International + Metro India",
            zones: ["INTL", "Z1"],
            default: false,
            updatedAt: now,
            supportEmail: "ops@fedex.example.com",
        },
        {
            id: "CAR-DHL",
            name: "DHL Express",
            code: "DHL",
            status: "active",
            onTime: 98,
            cod: false,
            trackingUrl: "https://www.dhl.com/in-en/home/tracking.html",
            pickupCutoff: "16:00:00",
            serviceLevels: ["Time Definite", "Economy Select"],
            coverage: "International",
            zones: ["INTL"],
            default: false,
            updatedAt: now,
            supportEmail: "ops@dhl.example.com",
        },
        {
            id: "CAR-INDIAPOST",
            name: "India Post",
            code: "INDIAPOST",
            status: "active",
            onTime: 86,
            cod: true,
            trackingUrl: "https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx",
            pickupCutoff: "15:00:00",
            serviceLevels: ["Speed Post", "Business Parcel"],
            coverage: "All PIN codes",
            zones: ["RURAL", "URBAN"],
            default: false,
            updatedAt: now,
            supportEmail: "ops@indiapost.example.com",
        },
        {
            id: "CAR-ECOMXP",
            name: "Ecom Express",
            code: "ECOMXP",
            status: "maintenance",
            onTime: 90,
            cod: true,
            trackingUrl: "https://www.ecomexpress.in/tracking/",
            pickupCutoff: "17:00:00",
            serviceLevels: ["Express", "Reverse Logistics"],
            coverage: "Urban + Semi-urban",
            zones: ["Z1", "Z2"],
            default: false,
            updatedAt: now,
            supportEmail: "ops@ecomxp.example.com",
        }
    ]), [now]);
    return { data, generatedAt: now };
};

/* ---------------- Simple Confirm (for disabled actions) ---------------- */
const ConfirmDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer><button className="btnPrimary" onClick={onClose}>OK</button></footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const CarriersPage = () => {
    const { data: carriers, generatedAt } = useCarriers();
    const [q, setQ] = useState("");
    const [region, setRegion] = useState("all");
    const [sort, setSort] = useState("name-asc");
    const [showDisabledInfo, setShowDisabledInfo] = useState(false);
    const printRef = useRef(null);

    const filtered = useMemo(() => {
        const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
        let out = carriers.filter(c => {
            const hay = [
                c.name, c.code, c.coverage,
                ...(c.serviceLevels || []),
                ...(c.zones || [])
            ].join(" ").toLowerCase();
            const hit = tokens.every(t => hay.includes(t));
            const regionHit = region === "all" ? true :
                (region === "intl" ? c.zones.includes("INTL") : !c.zones.includes("INTL"));
            return hit && regionHit;
        });
        switch (sort) {
            case "name-asc": out.sort((a, b) => a.name.localeCompare(b.name)); break;
            case "name-desc": out.sort((a, b) => b.name.localeCompare(a.name)); break;
            case "ontime-desc": out.sort((a, b) => b.onTime - a.onTime); break;
            case "ontime-asc": out.sort((a, b) => a.onTime - b.onTime); break;
            default: break;
        }
        return out;
    }, [carriers, q, region, sort]);

    const exportJSON = () => {
        const payload = { generatedAt: fmtDateTime(generatedAt), carriers };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "carriers.json";
        document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    };

    const printTable = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page>
            {/* Print CSS scope (exact rules) */}
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
                    <h1>Carriers</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/shipments">Shipments</NavLink>
                        <span>/</span>
                        <span className="current">Carriers</span>
                    </nav>
                    <p className="meta">
                        <span>Generated: {fmtDateTime(generatedAt)}</span>
                    </p>
                </div>

                <div className="actions">
                    <button
                        className="btnPrimary"
                        disabled
                        data-tooltip="Disabled in demo"
                        onClick={() => setShowDisabledInfo(true)}
                    >
                        Add Carrier
                    </button>
                    <button className="btnGhost" onClick={exportJSON} title="Export carriers">Export</button>
                    <button className="btnGhost" onClick={printTable} title="Print table">Print</button>
                    <NavLink className="btnGhost" to="/shipments" title="Go to shipments">All Shipments</NavLink>
                </div>
            </Styled.Header>

            <Styled.Filters className="card">
                <div className="row">
                    <div className="field">
                        <label>Search</label>
                        <input
                            placeholder="Search name, code, service, zone…"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label>Region</label>
                        <select value={region} onChange={(e) => setRegion(e.target.value)}>
                            <option value="all">All</option>
                            <option value="domestic">Domestic</option>
                            <option value="intl">International</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Sort</label>
                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="name-asc">Name ↑</option>
                            <option value="name-desc">Name ↓</option>
                            <option value="ontime-desc">On-time % ↓</option>
                            <option value="ontime-asc">On-time % ↑</option>
                        </select>
                    </div>
                </div>
                <div className="hints">
                    <span className="hint">Tip: Try “priority”, “reverse”, “INTL”, “Z1”…</span>
                </div>
            </Styled.Filters>

            <Styled.Split>
                {/* Table */}
                <section className="card tableWrap" id="search-print-area" ref={printRef}>
                    <header className="tableHeader">
                        <h3>Service Matrix</h3>
                        <div className="legend">
                            <span className="pill ok">Active</span>
                            <span className="pill warn">Maintenance</span>
                            <span className="pill off">Paused</span>
                        </div>
                    </header>

                    <div className="scroll">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Carrier</th>
                                    <th>Code</th>
                                    <th>Services</th>
                                    <th>Coverage</th>
                                    <th>Zones</th>
                                    <th>Pickup Cutoff</th>
                                    <th>On-time %</th>
                                    <th>COD</th>
                                    <th>Default</th>
                                    <th>Updated</th>
                                    <th>Tracking</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map(c => (
                                    <tr key={c.id}>
                                        <td className="carrierCell">
                                            <span className="logo" aria-hidden="true">{c.name.slice(0, 2).toUpperCase()}</span>
                                            <div className="stack">
                                                <strong>{c.name}</strong>
                                                <span className={`status ${c.status}`}>{c.status}</span>
                                            </div>
                                        </td>
                                        <td>{c.code}</td>
                                        <td>
                                            <div className="chips">
                                                {c.serviceLevels.map(s => <span className="chip" key={s}>{s}</span>)}
                                            </div>
                                        </td>
                                        <td>{c.coverage}</td>
                                        <td>
                                            <div className="chips small">
                                                {c.zones.map(z => <span className="chip" key={z}>{z}</span>)}
                                            </div>
                                        </td>
                                        <td>{fmtTime(c.pickupCutoff)}</td>
                                        <td>
                                            <div className="meter" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={c.onTime}>
                                                <div className="bar" style={{ width: `${c.onTime}%` }} />
                                                <span className="val">{c.onTime}%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`pill ${c.cod ? "ok" : "off"}`}>{c.cod ? "Yes" : "No"}</span>
                                        </td>
                                        <td>
                                            <button
                                                className={`btnTiny ${c.default ? "isDefault" : ""}`}
                                                disabled
                                                data-tooltip="Disabled in demo"
                                                onClick={() => { }}
                                                title="Set as default"
                                            >
                                                {c.default ? "Default" : "Set Default"}
                                            </button>
                                        </td>
                                        <td>{fmtDateTime(c.updatedAt)}</td>
                                        <td><a href={c.trackingUrl} target="_blank" rel="noreferrer">Open</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Right rail widgets */}
                <aside className="rail">
                    <div className="card">
                        <h3>Highlights</h3>
                        <ul className="facts">
                            <li><span className="k">Total carriers</span><span className="v">{carriers.length}</span></li>
                            <li><span className="k">International capable</span><span className="v">{carriers.filter(c => c.zones.includes("INTL")).length}</span></li>
                            <li><span className="k">COD enabled</span><span className="v">{carriers.filter(c => c.cod).length}</span></li>
                            <li><span className="k">Default set</span><span className="v">{carriers.find(c => c.default)?.name}</span></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Top On-time</h3>
                        <ul className="rank">
                            {carriers
                                .slice()
                                .sort((a, b) => b.onTime - a.onTime)
                                .map(c => (
                                    <li key={c.id}>
                                        <span className="name">{c.name}</span>
                                        <div className="spark">
                                            <div className="bar" style={{ width: `${c.onTime}%` }} />
                                        </div>
                                        <span className="pct">{c.onTime}%</span>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/shipments">Shipments</NavLink></li>
                            <li><NavLink to="/orders">Orders</NavLink></li>
                            <li><NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/reports/shipment">Shipment Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>SLA Notes</h3>
                        <p className="muted">
                            Pickup cutoffs are indicative windows shared by operations. Actual pickup time may vary by location and load.
                        </p>
                        <ul className="bullets">
                            <li>Reverse pickup supported where mentioned.</li>
                            <li>Temperature control needs advance booking.</li>
                            <li>For international, ensure KYC & invoice copies attached.</li>
                        </ul>
                    </div>
                </aside>
            </Styled.Split>

            <ConfirmDialog
                open={showDisabledInfo}
                title="Action unavailable"
                message="This is a display-only build. Adding carriers is disabled."
                onClose={() => setShowDisabledInfo(false)}
            />
        </Styled.Page>
    );
};

export default CarriersPage;
