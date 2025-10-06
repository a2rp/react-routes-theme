import React, { useMemo, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { S } from "./styled";
import { TbTruckDelivery, TbShip, TbPlaneTilt, TbDownload, TbPrinter, TbRefresh, TbMail, TbInfoCircle, TbRoute, TbArrowUpRight } from "react-icons/tb";

/** ----------------------------------------------------------------
 *  Date format helpers (required app-wide format)
 *  ---------------------------------------------------------------- */
const pad2 = (n) => (n < 10 ? `0${n}` : `${n}`);
const dayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function fmtDate(iso) {
    const d = new Date(iso);
    return `${dayShort[d.getDay()]} ${monShort[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
}
export function fmtTime(iso) {
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
}
export function fmtDateTime(iso) {
    return `${fmtDate(iso)} ${fmtTime(iso)}`;
}

/** Build/commit info from Vite define (fallbacks included) */
const BUILD_ISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || new Date().toISOString();
const COMMIT_ISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || BUILD_ISO;

/** Demo, static showcase data (display-only) */
const KPI = [
    { key: "total", label: "Total Shipments", value: "1,286", hint: "Last 30 days", icon: <TbTruckDelivery size={20} /> },
    { key: "onTime", label: "On-Time", value: "92.4%", hint: "Delivered within SLA", icon: <TbRoute size={20} /> },
    { key: "inTransit", label: "In-Transit", value: "184", hint: "Across all carriers", icon: <TbPlaneTilt size={20} /> },
    { key: "exceptions", label: "Exceptions", value: "23", hint: "Delay/Damage/Address", icon: <TbInfoCircle size={20} /> },
];

const LANE_ROWS = [
    { lane: "BLR → DEL", mode: "Air", onTime: "95.8%", avgTt: "1.2d", volume: 264, deep: "/shipments?lane=BLR-DEL" },
    { lane: "MUM → HYD", mode: "Surface", onTime: "89.1%", avgTt: "2.8d", volume: 198, deep: "/shipments?lane=MUM-HYD" },
    { lane: "PNQ → BLR", mode: "Air", onTime: "94.4%", avgTt: "1.1d", volume: 121, deep: "/shipments?lane=PNQ-BLR" },
    { lane: "DEL → KOL", mode: "Rail", onTime: "87.2%", avgTt: "3.3d", volume: 96, deep: "/shipments?lane=DEL-KOL" },
];

const CARRIERS = [
    { name: "BlueDart", onTime: "96.1%", vol: 521, link: "/shipments/carriers#bluedart" },
    { name: "Delhivery", onTime: "92.7%", vol: 406, link: "/shipments/carriers#delhivery" },
    { name: "XpressBees", onTime: "90.2%", vol: 231, link: "/shipments/carriers#xpressbees" },
    { name: "Ecom Express", onTime: "88.4%", vol: 128, link: "/shipments/carriers#ecom" },
];

const EXCEPTIONS = [
    { id: "SHP-41023", type: "Delay", lane: "BLR → DEL", carrier: "Delhivery", raised: "2025-10-04T15:38:20+05:30", deep: "/shipments/SHP-41023" },
    { id: "SHP-41088", type: "Damage", lane: "MUM → HYD", carrier: "BlueDart", raised: "2025-10-03T11:06:42+05:30", deep: "/shipments/SHP-41088" },
    { id: "SHP-41102", type: "Address", lane: "DEL → KOL", carrier: "XpressBees", raised: "2025-10-02T18:22:01+05:30", deep: "/shipments/SHP-41102" },
    { id: "SHP-41177", type: "Delay", lane: "PNQ → BLR", carrier: "BlueDart", raised: "2025-10-01T09:58:13+05:30", deep: "/shipments/SHP-41177" },
];

const RECENT = [
    { id: "SHP-41210", carrier: "BlueDart", mode: "Air", from: "BLR", to: "DEL", created: "2025-10-04T21:10:05+05:30", eta: "2025-10-05T20:30:00+05:30", status: "In Transit" },
    { id: "SHP-41207", carrier: "Delhivery", mode: "Surface", from: "MUM", to: "HYD", created: "2025-10-04T19:44:11+05:30", eta: "2025-10-07T12:00:00+05:30", status: "In Transit" },
    { id: "SHP-41199", carrier: "XpressBees", mode: "Rail", from: "DEL", to: "KOL", created: "2025-10-04T14:12:29+05:30", eta: "2025-10-06T16:45:00+05:30", status: "Delayed" },
    { id: "SHP-41190", carrier: "Ecom Express", mode: "Air", from: "PNQ", to: "BLR", created: "2025-10-03T22:38:40+05:30", eta: "2025-10-04T18:00:00+05:30", status: "Delivered" },
];

const SLAS = [
    { name: "Air D+1", target: "95%", achieved: "93.8%", link: "/reports/shipment#sla-air" },
    { name: "Surface D+3", target: "90%", achieved: "89.0%", link: "/reports/shipment#sla-surface" },
    { name: "Rail D+2", target: "92%", achieved: "90.6%", link: "/reports/shipment#sla-rail" },
];

const COSTS = [
    { bucket: "Air Express", avg: "₹142.30", yoy: "↓ 2.3%", link: "/reports/shipment#cost-air" },
    { bucket: "Surface Standard", avg: "₹76.10", yoy: "↑ 1.1%", link: "/reports/shipment#cost-surface" },
    { bucket: "Rail", avg: "₹64.80", yoy: "↓ 0.9%", link: "/reports/shipment#cost-rail" },
];

export default function ReportShipment() {
    const navigate = useNavigate();
    const printRef = useRef(null);

    const generatedOn = useMemo(() => fmtDateTime(BUILD_ISO), []);
    const committedOn = useMemo(() => fmtDateTime(COMMIT_ISO), []);

    const printSection = () => {
        const root = printRef.current;
        if (!root) return;
        document.body.classList.add("print-section-mode");
        window.print();
        setTimeout(() => {
            document.body.classList.remove("print-section-mode");
        }, 250);
    };

    return (
        <S.Page>
            {/* print-only rules  */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}</style>

            <S.Header>
                <S.Breadcrumbs>
                    <NavLink to="/home">Home</NavLink>
                    <span>/</span>
                    <NavLink to="/reports">Reports</NavLink>
                    <span>/</span>
                    <strong>Shipment</strong>
                </S.Breadcrumbs>

                <S.Actions>
                    <button onClick={printSection} title="Print this report section">
                        <TbPrinter size={18} />
                        <span>Print</span>
                    </button>
                    <NavLink to="/tools/import-export" className="secondary" title="Open Import / Export">
                        <TbDownload size={18} />
                        <span>Export</span>
                    </NavLink>
                    <button disabled title="Demo only">
                        <TbRefresh size={18} />
                        <span>Refresh</span>
                    </button>
                    <button disabled title="Demo only">
                        <TbMail size={18} />
                        <span>Schedule Email</span>
                    </button>
                </S.Actions>
            </S.Header>

            {/* sticky subnav */}
            <S.Subnav>
                <a href="#overview">Overview</a>
                <a href="#lanes">Lanes</a>
                <a href="#carriers">Carriers</a>
                <a href="#exceptions">Exceptions</a>
                <a href="#sla">SLA</a>
                <a href="#costs">Costs</a>
                <NavLink to="/shipments" className="route">
                    Open Shipments <TbArrowUpRight size={16} />
                </NavLink>
            </S.Subnav>

            {/* printable area */}
            <div id="search-print-area" ref={printRef}>
                <S.HeaderMeta>
                    <div className="title">
                        <h1>Shipment Performance</h1>
                        <p>Period: Sat Oct 04 2025 — Sun Oct 05 2025 • Timezone: Asia/Kolkata</p>
                    </div>
                    <ul className="meta">
                        <li><span>Generated</span><strong>{generatedOn}</strong></li>
                        <li><span>Last Commit</span><strong>{committedOn}</strong></li>
                        <li><span>Source</span><strong>Demo fixtures</strong></li>
                    </ul>
                </S.HeaderMeta>

                {/* Overview */}
                <section id="overview">
                    <S.KPIGrid>
                        {KPI.map(k => (
                            <S.KPI key={k.key} className={k.key}>
                                <div className="icon">{k.icon}</div>
                                <div className="meta">
                                    <div className="value">{k.value}</div>
                                    <div className="label">{k.label}</div>
                                    <div className="hint">{k.hint}</div>
                                </div>
                            </S.KPI>
                        ))}
                    </S.KPIGrid>

                    <S.Quickbar>
                        <div className="group">
                            <NavLink to="/shipments">All Shipments</NavLink>
                            <NavLink to="/shipments/new" title="Demo disabled">Create Shipment</NavLink>
                            <NavLink to="/shipments/carriers">Carriers</NavLink>
                            <NavLink to="/inventory/transfers">Warehouse Transfers</NavLink>
                        </div>
                        <div className="group">
                            <NavLink to="/reports/inventory">Inventory Report</NavLink>
                            <NavLink to="/reports/sales">Sales Report</NavLink>
                            <NavLink to="/reports/gst">GST Report</NavLink>
                            <NavLink to="/reports/finance">Finance Report</NavLink>
                        </div>
                    </S.Quickbar>
                </section>

                {/* Lanes */}
                <section id="lanes">
                    <S.SegmentHeader>
                        <div className="l">
                            <TbRoute size={18} />
                            <h2>Lane Performance</h2>
                        </div>
                        <NavLink to="/shipments" className="soft">View All</NavLink>
                    </S.SegmentHeader>

                    <S.Table role="table" aria-label="Lane performance">
                        <div className="thead" role="rowgroup">
                            <div className="tr" role="row">
                                <div className="th" role="columnheader">Lane</div>
                                <div className="th" role="columnheader">Mode</div>
                                <div className="th" role="columnheader">On-Time</div>
                                <div className="th" role="columnheader">Avg TT</div>
                                <div className="th" role="columnheader">Volume</div>
                                <div className="th" role="columnheader">Link</div>
                            </div>
                        </div>
                        <div className="tbody" role="rowgroup">
                            {LANE_ROWS.map((r, i) => (
                                <div className="tr" role="row" key={i}>
                                    <div className="td" role="cell">{r.lane}</div>
                                    <div className="td" role="cell">{r.mode}</div>
                                    <div className="td" role="cell"><S.Badge tone="ok">{r.onTime}</S.Badge></div>
                                    <div className="td" role="cell">{r.avgTt}</div>
                                    <div className="td" role="cell">{r.volume}</div>
                                    <div className="td" role="cell"><NavLink to={r.deep}>Open</NavLink></div>
                                </div>
                            ))}
                        </div>
                    </S.Table>
                </section>

                {/* Carriers */}
                <section id="carriers">
                    <S.SegmentHeader>
                        <div className="l">
                            <TbTruckDelivery size={18} />
                            <h2>Top Carriers</h2>
                        </div>
                        <NavLink to="/shipments/carriers" className="soft">Manage Carriers</NavLink>
                    </S.SegmentHeader>

                    <S.Table role="table" aria-label="Carriers">
                        <div className="thead" role="rowgroup">
                            <div className="tr" role="row">
                                <div className="th" role="columnheader">Carrier</div>
                                <div className="th" role="columnheader">On-Time %</div>
                                <div className="th" role="columnheader">Volume</div>
                                <div className="th" role="columnheader">Link</div>
                            </div>
                        </div>
                        <div className="tbody" role="rowgroup">
                            {CARRIERS.map((c, i) => (
                                <div className="tr" role="row" key={i}>
                                    <div className="td" role="cell">{c.name}</div>
                                    <div className="td" role="cell"><S.Badge tone="ok">{c.onTime}</S.Badge></div>
                                    <div className="td" role="cell">{c.vol}</div>
                                    <div className="td" role="cell"><NavLink to={c.link}>Open</NavLink></div>
                                </div>
                            ))}
                        </div>
                    </S.Table>
                </section>

                {/* Exceptions */}
                <section id="exceptions">
                    <S.SegmentHeader>
                        <div className="l">
                            <TbInfoCircle size={18} />
                            <h2>Exceptions</h2>
                        </div>
                        <NavLink to="/reports/shipment#overview" className="soft">Overview</NavLink>
                    </S.SegmentHeader>

                    <S.Table role="table" aria-label="Exceptions">
                        <div className="thead" role="rowgroup">
                            <div className="tr" role="row">
                                <div className="th" role="columnheader">Shipment</div>
                                <div className="th" role="columnheader">Type</div>
                                <div className="th" role="columnheader">Lane</div>
                                <div className="th" role="columnheader">Carrier</div>
                                <div className="th" role="columnheader">Raised</div>
                                <div className="th" role="columnheader">Links</div>
                            </div>
                        </div>
                        <div className="tbody" role="rowgroup">
                            {EXCEPTIONS.map(x => (
                                <div className="tr" role="row" key={x.id}>
                                    <div className="td" role="cell"><NavLink to={x.deep}>{x.id}</NavLink></div>
                                    <div className="td" role="cell"><S.Badge tone={x.type === "Damage" ? "warn" : "issue"}>{x.type}</S.Badge></div>
                                    <div className="td" role="cell">{x.lane}</div>
                                    <div className="td" role="cell">{x.carrier}</div>
                                    <div className="td" role="cell" title={fmtDateTime(x.raised)}>{fmtDate(x.raised)} {fmtTime(x.raised)}</div>
                                    <div className="td links" role="cell">
                                        <NavLink to={`${x.deep}/track`}>Track</NavLink>
                                        <span>·</span>
                                        <NavLink to={`${x.deep}/labels`}>Labels</NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </S.Table>
                </section>

                {/* SLA */}
                <section id="sla">
                    <S.SegmentHeader>
                        <div className="l">
                            <TbRoute size={18} />
                            <h2>SLA Compliance</h2>
                        </div>
                        <NavLink to="/reports" className="soft">All Reports</NavLink>
                    </S.SegmentHeader>

                    <S.SLAList>
                        {SLAS.map(s => (
                            <S.SLACard key={s.name}>
                                <div className="t">
                                    <h3>{s.name}</h3>
                                    <NavLink to={s.link}>Open</NavLink>
                                </div>
                                <div className="row">
                                    <span className="k">Target</span>
                                    <span className="v">{s.target}</span>
                                </div>
                                <div className="row">
                                    <span className="k">Achieved</span>
                                    <span className="v"><S.Badge tone="ok">{s.achieved}</S.Badge></span>
                                </div>
                            </S.SLACard>
                        ))}
                    </S.SLAList>
                </section>

                {/* Costs */}
                <section id="costs">
                    <S.SegmentHeader>
                        <div className="l">
                            <TbShip size={18} />
                            <h2>Cost Insights</h2>
                        </div>
                        <NavLink to="/finance" className="soft">Finance</NavLink>
                    </S.SegmentHeader>

                    <S.CostGrid>
                        {COSTS.map(c => (
                            <S.CostCard key={c.bucket} id={c.link.replace("#", "")}>
                                <div className="t">
                                    <h3>{c.bucket}</h3>
                                    <NavLink to={c.link}>Open</NavLink>
                                </div>
                                <div className="row">
                                    <span className="k">Avg Cost</span>
                                    <span className="v">{c.avg}</span>
                                </div>
                                <div className="row">
                                    <span className="k">YoY</span>
                                    <span className="v">{c.yoy}</span>
                                </div>
                            </S.CostCard>
                        ))}
                    </S.CostGrid>
                </section>

                {/* Recent shipments table */}
                <section id="recent">
                    <S.SegmentHeader>
                        <div className="l">
                            <TbPlaneTilt size={18} />
                            <h2>Recent Shipments</h2>
                        </div>
                        <NavLink to="/shipments" className="soft">Open Shipments</NavLink>
                    </S.SegmentHeader>

                    <S.Table role="table" aria-label="Recent shipments">
                        <div className="thead" role="rowgroup">
                            <div className="tr" role="row">
                                <div className="th" role="columnheader">Shipment</div>
                                <div className="th" role="columnheader">Carrier</div>
                                <div className="th" role="columnheader">Mode</div>
                                <div className="th" role="columnheader">From</div>
                                <div className="th" role="columnheader">To</div>
                                <div className="th" role="columnheader">Created</div>
                                <div className="th" role="columnheader">ETA</div>
                                <div className="th" role="columnheader">Status</div>
                                <div className="th" role="columnheader">Links</div>
                            </div>
                        </div>
                        <div className="tbody" role="rowgroup">
                            {RECENT.map(r => (
                                <div className="tr" role="row" key={r.id}>
                                    <div className="td" role="cell"><NavLink to={`/shipments/${r.id}`}>{r.id}</NavLink></div>
                                    <div className="td" role="cell">{r.carrier}</div>
                                    <div className="td" role="cell">{r.mode}</div>
                                    <div className="td" role="cell">{r.from}</div>
                                    <div className="td" role="cell">{r.to}</div>
                                    <div className="td" role="cell" title={fmtDateTime(r.created)}>{fmtDate(r.created)} {fmtTime(r.created)}</div>
                                    <div className="td" role="cell" title={fmtDateTime(r.eta)}>{fmtDate(r.eta)} {fmtTime(r.eta)}</div>
                                    <div className="td" role="cell">
                                        <S.Badge tone={
                                            r.status === "Delivered" ? "ok" :
                                                r.status === "Delayed" ? "warn" : "info"
                                        }>
                                            {r.status}
                                        </S.Badge>
                                    </div>
                                    <div className="td links" role="cell">
                                        <NavLink to={`/shipments/${r.id}/track`}>Track</NavLink>
                                        <span>·</span>
                                        <NavLink to={`/shipments/${r.id}/labels`}>Labels</NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </S.Table>
                </section>
            </div>
        </S.Page>
    );
}
