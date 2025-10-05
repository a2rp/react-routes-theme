import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- date utils (exact formats) ---------- */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = n => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* non-destructive toast */
const Banner = ({ text }) => !text ? null : (
    <Styled.Banner role="status" aria-live="polite">{text}</Styled.Banner>
);

const ShipmentTrack = () => {
    const { shipmentId } = useParams();
    const navigate = useNavigate();
    const [toast, setToast] = useState("");
    const printRef = useRef(null);

    /* fixed demo data (display-only) */
    const data = useMemo(() => ({
        id: shipmentId || "SHIP-784213",
        orderId: "ORD-3456",
        invoiceId: "INV-2031",
        carrier: { name: "BlueDart Express", mode: "Surface", service: "Priority", hotline: "+91 1860 233 1234" },
        trackingNumber: "BDX3456784213",
        reference: "PO-9981",
        pieces: 2,
        weight: "4.20 kg",
        dims: "45 × 30 × 22 cm",
        cod: false,
        insured: true,
        declaredValue: "₹18,900",
        route: { origin: "New Delhi (DL)", hub: "Mumbai Hub", destination: "Thane (MH)" },
        eta: "2025-10-05T21:00:00+05:30",
        status: "Delivered",
        lastUpdated: "2025-10-05T16:05:20+05:30",
        timeline: [
            { ts: "2025-10-01T09:10:00+05:30", loc: "New Delhi", scan: "Order received", note: "Label generated" },
            { ts: "2025-10-01T16:20:00+05:30", loc: "New Delhi", scan: "Picked up", note: "Pickup by rider BL-21" },
            { ts: "2025-10-02T08:45:00+05:30", loc: "New Delhi", scan: "In transit", note: "Line-haul departed" },
            { ts: "2025-10-03T14:30:00+05:30", loc: "Mumbai Hub", scan: "Arrived at hub", note: "Sortation completed" },
            { ts: "2025-10-04T11:05:00+05:30", loc: "Thane", scan: "Out for delivery", note: "Vehicle TH-09-XX-2211" },
            { ts: "2025-10-04T17:40:00+05:30", loc: "Thane", scan: "Delivery attempt", note: "Customer not available" },
            { ts: "2025-10-05T10:20:00+05:30", loc: "Thane", scan: "Out for delivery", note: "Rescheduled by customer" },
            { ts: "2025-10-05T16:05:20+05:30", loc: "Thane", scan: "Delivered", note: "Signed by A. Sharma" },
        ],
        addressFrom: {
            name: "Bluewave Traders",
            line1: "221B Baker Street, Khan Market",
            city: "New Delhi", state: "DL", pin: "110003", phone: "+91 98765 43210"
        },
        addressTo: {
            name: "Aarav Sharma",
            line1: "Plot 14, Industrial Area, Phase 2",
            city: "Thane", state: "MH", pin: "400607", phone: "+91 90000 12345"
        }
    }), [shipmentId]);

    useEffect(() => {
        let t;
        if (toast) t = setTimeout(() => setToast(""), 3000);
        return () => t && clearTimeout(t);
    }, [toast]);

    const copyLink = async () => {
        try {
            const url = location.origin + location.pathname.replace(/\/$/, "");
            await navigator.clipboard.writeText(url);
            setToast(`Link copied at ${fmt(new Date(), true)}`);
        } catch {
            /* silent */
        }
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

    return (
        <Styled.Page>
            {/* print CSS as requested */}
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

            <Styled.Header className="card">
                <div className="left">
                    <h1>Track Shipment</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/shipments">Shipments</NavLink>
                        <span>/</span>
                        <NavLink to={`/shipments/${data.id}`}>{data.id}</NavLink>
                        <span>/</span>
                        <span className="current">Track</span>
                    </nav>
                    <div className="meta">
                        <span>{data.carrier.name} • {data.carrier.service}</span>
                        <span>•</span>
                        <span>Tracking: {data.trackingNumber}</span>
                        <span>•</span>
                        <span>Updated: {fmt(data.lastUpdated, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate(`/shipments/${data.id}`)}>Back</button>
                    <button className="btnPrimary" onClick={copyLink} title="Copy link for this tracking page">Share</button>
                    <button className="btnGhost" onClick={printSection}>Print</button>
                    <button className="btnDisabled" disabled title="Demo only">Refresh</button>
                </div>
            </Styled.Header>

            <Banner text={toast} />

            <Styled.Grid>
                {/* Left: main journey */}
                <section className="col main">
                    {/* status + milestones */}
                    <div className="card status">
                        <div className="top">
                            <div className={`pill ${data.status.toLowerCase()}`}>{data.status}</div>
                            <div className="eta">ETA: {fmt(data.eta, true)}</div>
                        </div>

                        <div className="milestones" aria-label="Delivery progress">
                            <div className="step done">
                                <span className="dot" /><span className="label">Picked up</span>
                            </div>
                            <div className="step done">
                                <span className="dot" /><span className="label">In transit</span>
                            </div>
                            <div className="step done">
                                <span className="dot" /><span className="label">At hub</span>
                            </div>
                            <div className="step done">
                                <span className="dot" /><span className="label">Out for delivery</span>
                            </div>
                            <div className="step done current">
                                <span className="dot" /><span className="label">Delivered</span>
                            </div>
                        </div>
                    </div>

                    {/* map & route */}
                    <div className="card mapCard">
                        <div className="mapHeader">
                            <h3>Route</h3>
                            <div className="legend">
                                <span className="dot start" /> <span>Origin</span>
                                <span className="dot hub" /> <span>Hub</span>
                                <span className="dot end" /> <span>Destination</span>
                            </div>
                        </div>

                        <div className="map">
                            {/* inline svg path for a clean route line */}
                            <svg viewBox="0 0 1200 320" className="route" aria-hidden="true">
                                <defs>
                                    <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.4" /></filter>
                                </defs>
                                <path d="M80,240 C240,60 480,60 640,220 S960,300 1120,120"
                                    stroke="var(--accent)" strokeWidth="6" fill="none" filter="url(#shadow)" />
                            </svg>

                            <div className="pin start" style={{ left: "64px", top: "210px" }}>
                                <div className="note">{data.route.origin}</div>
                            </div>
                            <div className="pin hub" style={{ left: "620px", top: "190px" }}>
                                <div className="note">{data.route.hub}</div>
                            </div>
                            <div className="pin end" style={{ left: "1080px", top: "90px" }}>
                                <div className="note">{data.route.destination}</div>
                            </div>
                        </div>
                    </div>

                    {/* scans table */}
                    <div className="card scans">
                        <div className="scansHeader">
                            <h3>Scan Events</h3>
                            <div className="tools">
                                <button className="btnGhost" onClick={copyLink}>Copy link</button>
                                <button className="btnDisabled" disabled title="Demo only">Download POD</button>
                            </div>
                        </div>
                        <div className="tableWrap" role="region" aria-label="Scan events (scroll)">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{ width: "220px" }}>Date &amp; Time</th>
                                        <th style={{ width: "220px" }}>Location</th>
                                        <th>Scan</th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.timeline.map((e, i) => (
                                        <tr key={i}>
                                            <td>{fmt(e.ts, true)}</td>
                                            <td>{e.loc}</td>
                                            <td>{e.scan}</td>
                                            <td className="muted">{e.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Right: meta & print */}
                <aside className="col side">
                    <div className="card facts">
                        <h3>Shipment</h3>
                        <div className="kv">
                            <div><span className="k">Shipment ID</span><span className="v">{data.id}</span></div>
                            <div><span className="k">Tracking No.</span><span className="v">{data.trackingNumber}</span></div>
                            <div><span className="k">Order</span><span className="v"><NavLink to={`/orders/${data.orderId}`}>{data.orderId}</NavLink></span></div>
                            <div><span className="k">Invoice</span><span className="v"><NavLink to={`/invoices/${data.invoiceId}`}>{data.invoiceId}</NavLink></span></div>
                            <div><span className="k">Reference</span><span className="v">{data.reference}</span></div>
                            <div><span className="k">Pieces</span><span className="v">{data.pieces}</span></div>
                            <div><span className="k">Weight</span><span className="v">{data.weight}</span></div>
                            <div><span className="k">Dimensions</span><span className="v">{data.dims}</span></div>
                            <div><span className="k">COD</span><span className="v">{data.cod ? "Yes" : "No"}</span></div>
                            <div><span className="k">Insured</span><span className="v">{data.insured ? "Yes" : "No"}</span></div>
                            <div><span className="k">Declared Value</span><span className="v">{data.declaredValue}</span></div>
                        </div>
                    </div>

                    <div className="card parties">
                        <h3>Addresses</h3>
                        <div className="addr">
                            <div>
                                <div className="label">From</div>
                                <strong>{data.addressFrom.name}</strong>
                                <div>{data.addressFrom.line1}</div>
                                <div>{data.addressFrom.city}, {data.addressFrom.state} {data.addressFrom.pin}</div>
                                <div className="muted">{data.addressFrom.phone}</div>
                            </div>
                            <div>
                                <div className="label">To</div>
                                <strong>{data.addressTo.name}</strong>
                                <div>{data.addressTo.line1}</div>
                                <div>{data.addressTo.city}, {data.addressTo.state} {data.addressTo.pin}</div>
                                <div className="muted">{data.addressTo.phone}</div>
                            </div>
                        </div>
                    </div>

                    <div className="card carrier">
                        <h3>Carrier</h3>
                        <div className="kv">
                            <div><span className="k">Name</span><span className="v">{data.carrier.name}</span></div>
                            <div><span className="k">Mode</span><span className="v">{data.carrier.mode}</span></div>
                            <div><span className="k">Service</span><span className="v">{data.carrier.service}</span></div>
                            <div><span className="k">Hotline</span><span className="v">{data.carrier.hotline}</span></div>
                        </div>
                        <div className="actions">
                            <button className="btnDisabled" disabled title="Demo only">Email Updates</button>
                            <button className="btnDisabled" disabled title="Demo only">Report Issue</button>
                        </div>
                    </div>

                    {/* Printable summary */}
                    <div className="card print" id="search-print-area" ref={printRef}>
                        <div className="printHeader">
                            <h3>Label &amp; Summary</h3>
                            <div className="muted">Created: {fmt("2025-10-01T09:10:00+05:30", true)}</div>
                        </div>

                        <div className="labelGrid">
                            <div className="left">
                                <div className="shipFrom">
                                    <div className="tiny muted">FROM</div>
                                    <strong>{data.addressFrom.name}</strong>
                                    <div>{data.addressFrom.line1}</div>
                                    <div>{data.addressFrom.city}, {data.addressFrom.state} {data.addressFrom.pin}</div>
                                    <div>{data.addressFrom.phone}</div>
                                </div>
                                <div className="shipTo">
                                    <div className="tiny muted">TO</div>
                                    <strong>{data.addressTo.name}</strong>
                                    <div>{data.addressTo.line1}</div>
                                    <div>{data.addressTo.city}, {data.addressTo.state} {data.addressTo.pin}</div>
                                    <div>{data.addressTo.phone}</div>
                                </div>
                                <div className="tiny muted">TRACKING</div>
                                <div className="trk">{data.trackingNumber}</div>
                            </div>
                            <div className="right">
                                {/* Simple inline barcode look */}
                                <svg className="barcode" viewBox="0 0 400 120" preserveAspectRatio="none" aria-label="Barcode">
                                    <rect x="0" y="0" width="400" height="120" fill="var(--card)" />
                                    {Array.from({ length: 70 }).map((_, i) => {
                                        const w = (i % 7 === 0) ? 4 : (i % 3 === 0 ? 3 : 2);
                                        const gap = 2;
                                        const x = 12 + i * (w + gap);
                                        return <rect key={i} x={x} y="10" width={w} height="100" fill="var(--text)" />;
                                    })}
                                </svg>
                                <div className="tiny muted center">{data.trackingNumber}</div>
                            </div>
                        </div>

                        <div className="miniKV">
                            <div><span className="k">Pieces</span><span className="v">{data.pieces}</span></div>
                            <div><span className="k">Weight</span><span className="v">{data.weight}</span></div>
                            <div><span className="k">Dims</span><span className="v">{data.dims}</span></div>
                            <div><span className="k">Insured</span><span className="v">{data.insured ? "Yes" : "No"}</span></div>
                            <div><span className="k">Value</span><span className="v">{data.declaredValue}</span></div>
                            <div><span className="k">ETA</span><span className="v">{fmt(data.eta, true)}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default ShipmentTrack;
