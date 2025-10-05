import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---------------------------
   Tiny date helpers (global format rules)
----------------------------*/
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
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ---------------------------
   Faux barcode + QR renderers (display-only)
   Not real encoders—just premium-looking vectors for demo.
----------------------------*/
const hash = (str) => {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = (h * 16777619) >>> 0;
    }
    return h;
};

const Barcode = ({ value }) => {
    const bands = useMemo(() => {
        // make ~80 bands of varying width from the hash
        const h = hash(value);
        const arr = [];
        let x = 0;
        for (let i = 0; i < 80; i++) {
            const w = 1 + ((h >> (i % 24)) & 0x3); // width 1..4
            const on = ((h >> (i % 31)) & 1) === 1;
            arr.push({ x, w, on });
            x += w;
        }
        const total = x;
        return { arr, total };
    }, [value]);

    return (
        <svg className="barcode" viewBox={`0 0 ${bands.total} 60`} preserveAspectRatio="none">
            <rect x="0" y="0" width={bands.total} height="60" fill="var(--card, #111318)" />
            {bands.arr.map((b, i) =>
                b.on ? <rect key={i} x={b.x} y="0" width={b.w} height="60" fill="var(--text, #f3f4f6)" /> : null
            )}
        </svg>
    );
};

const QrMini = ({ value, size = 21 }) => {
    const grid = useMemo(() => {
        // simple pseudo-random matrix with fixed finders
        const h = hash(value);
        const m = Array.from({ length: size }, () => Array(size).fill(false));
        const rnd = (r, c) => ((h >> ((r * 7 + c) % 31)) & 1) === 1;

        // place pseudo pattern
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                m[r][c] = rnd(r, c);
            }
        }
        // finder patterns
        const placeFinder = (R, C) => {
            for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
                const edge = r === 0 || r === 6 || c === 0 || c === 6;
                const core = r >= 2 && r <= 4 && c >= 2 && c <= 4;
                m[R + r][C + c] = edge || core;
            }
        };
        placeFinder(0, 0);
        placeFinder(0, size - 7);
        placeFinder(size - 7, 0);
        return m;
    }, [value, size]);

    const px = 2; // device pixels per module for preview
    return (
        <svg className="qr" width={size * px} height={size * px} viewBox={`0 0 ${size} ${size}`}>
            <rect x="0" y="0" width={size} height={size} fill="var(--card, #111318)" />
            {grid.flatMap((row, r) =>
                row.map((on, c) =>
                    on ? <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="var(--text, #f3f4f6)" /> : null
                )
            )}
        </svg>
    );
};

/* ---------------------------
   Demo fixtures (display-only)
----------------------------*/
const demoShipment = (id) => ({
    id,
    carrier: "BlueExpress",
    service: "Priority Air",
    createdAt: "2025-10-04T09:42:18+05:30",
    from: {
        name: "Bluewave Traders",
        line1: "Plot 14, Industrial Area",
        line2: "Phase 2",
        city: "Gurugram",
        state: "HR",
        zip: "122002",
        country: "India",
        phone: "+91 98111 22222",
    },
    to: {
        name: "Aarav Sharma",
        line1: "221B Baker Street",
        line2: "Khan Market",
        city: "New Delhi",
        state: "DL",
        zip: "110003",
        country: "India",
        phone: "+91 98765 43210",
    },
    packages: [
        {
            pkgId: "PKG-01",
            tracking: "BLX-IND-560001-0001",
            weightKg: 2.35,
            dims: "25 × 18 × 12 cm",
            cod: false,
            ref: "ORD-3456 / INV-2031",
            notes: "Handle with care",
        },
        {
            pkgId: "PKG-02",
            tracking: "BLX-IND-560001-0002",
            weightKg: 1.10,
            dims: "20 × 16 × 10 cm",
            cod: false,
            ref: "ORD-3456 / INV-2031",
            notes: "",
        },
    ],
});

/* ---------------------------
   Main page
----------------------------*/
const ShipmentLabelsPage = () => {
    const { shipmentId = "SHIP-1001" } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    const data = useMemo(() => demoShipment(shipmentId), [shipmentId]);

    const [size, setSize] = useState("4x6");         // 4x6, a6, a5half
    const [orientation, setOrientation] = useState("portrait"); // portrait | landscape
    const [perRow, setPerRow] = useState(2);         // 1,2,3
    const [crop, setCrop] = useState(true);
    const [safe, setSafe] = useState(true);
    const [margin, setMargin] = useState("normal");  // none | narrow | normal
    const [dpi, setDpi] = useState(300);

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    useEffect(() => {
        // pick sensible defaults based on size
        if (size === "4x6") setPerRow(2);
        if (size === "a6") setPerRow(3);
        if (size === "a5half") setPerRow(2);
    }, [size]);

    const meta = (
        <div className="meta">
            <span><strong>Shipment</strong> {data.id}</span>
            <span>•</span>
            <span><strong>Carrier</strong> {data.carrier}</span>
            <span>•</span>
            <span><strong>Service</strong> {data.service}</span>
            <span>•</span>
            <span><strong>Created</strong> {fmtDateTime(data.createdAt)}</span>
        </div>
    );

    return (
        <Styled.Page>
            {/* print CSS for section-only printing */}
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
                    <h1>Shipment Labels</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/shipments">Shipments</NavLink>
                        <span>/</span>
                        <NavLink to={`/shipments/${data.id}`}>{data.id}</NavLink>
                        <span>/</span>
                        <span className="current">Labels</span>
                    </nav>
                    {meta}
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate(`/shipments/${data.id}`)} title="Back to shipment">Back</button>
                    <button className="btnPrimary" onClick={printSection} title="Print labels">Print</button>
                    <button className="btnGhost" disabled title="Export PDF (demo)">Export PDF</button>
                </div>
            </Styled.Header>

            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="ctrl">
                        <label>Label size</label>
                        <div className="btnset">
                            <button className={size === "4x6" ? "on" : ""} onClick={() => setSize("4x6")}>4 × 6 in</button>
                            <button className={size === "a6" ? "on" : ""} onClick={() => setSize("a6")}>A6</button>
                            <button className={size === "a5half" ? "on" : ""} onClick={() => setSize("a5half")}>A5 Half</button>
                        </div>
                    </div>
                    <div className="ctrl">
                        <label>Orientation</label>
                        <div className="btnset">
                            <button className={orientation === "portrait" ? "on" : ""} onClick={() => setOrientation("portrait")}>Portrait</button>
                            <button className={orientation === "landscape" ? "on" : ""} onClick={() => setOrientation("landscape")}>Landscape</button>
                        </div>
                    </div>
                    <div className="ctrl">
                        <label>Per row</label>
                        <div className="btnset">
                            {[1, 2, 3].map(n => (
                                <button key={n} className={perRow === n ? "on" : ""} onClick={() => setPerRow(n)}>{n}</button>
                            ))}
                        </div>
                    </div>
                    <div className="ctrl">
                        <label>Margins</label>
                        <div className="btnset">
                            <button className={margin === "none" ? "on" : ""} onClick={() => setMargin("none")}>None</button>
                            <button className={margin === "narrow" ? "on" : ""} onClick={() => setMargin("narrow")}>Narrow</button>
                            <button className={margin === "normal" ? "on" : ""} onClick={() => setMargin("normal")}>Normal</button>
                        </div>
                    </div>
                    <div className="ctrl">
                        <label>Guides</label>
                        <div className="btnset">
                            <button className={crop ? "on" : ""} onClick={() => setCrop(!crop)}>Crop Marks</button>
                            <button className={safe ? "on" : ""} onClick={() => setSafe(!safe)}>Safe Area</button>
                        </div>
                    </div>
                    <div className="ctrl">
                        <label>DPI</label>
                        <div className="btnset">
                            {[203, 300, 600].map(v => (
                                <button key={v} className={dpi === v ? "on" : ""} onClick={() => setDpi(v)}>{v}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </Styled.Toolbar>

            <Styled.Board
                id="search-print-area"
                data-perrow={perRow}
                data-size={size}
                data-orient={orientation}
                data-margin={margin}
                data-dpi={dpi}
            >
                {data.packages.map((pkg) => (
                    <LabelCard
                        key={pkg.pkgId}
                        shipment={data}
                        pkg={pkg}
                        crop={crop}
                        safe={safe}
                    />
                ))}
            </Styled.Board>
        </Styled.Page>
    );
};

/* ---------------------------
   Single label card
----------------------------*/
const LabelCard = ({ shipment, pkg, crop, safe }) => {
    return (
        <Styled.Label className={`label ${crop ? "with-crop" : ""}`}>
            <header className="labelHead">
                <div className="carrier">
                    <span className="badge">{shipment.carrier}</span>
                    <span className="service">{shipment.service}</span>
                </div>
                <div className="meta">
                    <span>Pkg {pkg.pkgId}</span>
                    <span>•</span>
                    <span>{fmtDate(shipment.createdAt)}</span>
                </div>
            </header>

            <section className={`zones ${safe ? "with-safe" : ""}`}>
                <div className="fromto">
                    <div className="blk">
                        <h5>From</h5>
                        <div className="txt">
                            <strong>{shipment.from.name}</strong><br />
                            {shipment.from.line1}, {shipment.from.line2}<br />
                            {shipment.from.city} {shipment.from.zip}, {shipment.from.state}<br />
                            {shipment.from.country}<br />
                            {shipment.from.phone}
                        </div>
                    </div>
                    <div className="blk">
                        <h5>To</h5>
                        <div className="txt">
                            <strong>{shipment.to.name}</strong><br />
                            {shipment.to.line1}, {shipment.to.line2}<br />
                            {shipment.to.city} {shipment.to.zip}, {shipment.to.state}<br />
                            {shipment.to.country}<br />
                            {shipment.to.phone}
                        </div>
                    </div>
                    <div className="blk small">
                        <h5>Specs</h5>
                        <div className="txt">
                            <div>Weight: <strong>{pkg.weightKg} kg</strong></div>
                            <div>Dims: <strong>{pkg.dims}</strong></div>
                            <div>Ref: <strong>{pkg.ref}</strong></div>
                        </div>
                    </div>
                </div>

                <div className="track">
                    <div className="code">{pkg.tracking}</div>
                    <Barcode value={pkg.tracking} />
                    <div className="under">
                        <div className="kw">
                            <span>Tracking</span>
                            <strong>{pkg.tracking}</strong>
                        </div>
                        <div className="kw">
                            <span>Printed</span>
                            <strong>{fmtDateTime(new Date())}</strong>
                        </div>
                        <div className="qrWrap" aria-hidden="true">
                            <QrMini value={pkg.tracking} />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="labelFoot">
                <div className="notes">{pkg.notes ? `Note: ${pkg.notes}` : "—"}</div>
                <div className="brand">Generated by React Routes Theme</div>
            </footer>

            {/* crop marks */}
            {crop && (
                <>
                    <i className="crop tl" />
                    <i className="crop tr" />
                    <i className="crop bl" />
                    <i className="crop br" />
                </>
            )}
        </Styled.Label>
    );
};

export default ShipmentLabelsPage;
