import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- tiny date utils to keep format consistent ---------- */
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

/* ---------- demo data (display-only) ---------- */
const PRODUCTS = {
    "MED-AMOX-500": {
        id: "MED-AMOX-500",
        name: "Amoxicillin 500 mg",
        sku: "AMOX-500-TAB",
        status: "active",
        categoryPath: ["Products", "Medicines", "Antibiotics"],
        brand: "Bluewave",
        manufacturer: "Bluewave Pharma Ltd.",
        molecules: ["Amoxicillin"],
        form: "Tablet",
        strength: "500 mg",
        packSize: "10 x 10 Tablets",
        hsn: "3004",
        gstRate: "12%",
        mrp: "₹245.00",
        sellPrice: "₹210.00",
        barcodes: ["8901234567890"],
        attributes: {
            "Shelf Life": "24 months",
            Storage: "Below 25°C, dry place",
            "Prescription": "Required",
            "Country of Origin": "India",
            "Color Index": "N/A"
        },
        identifiers: {
            "Internal Code": "P-10234",
            "Catalog #": "CAT-AM-500",
            "EAN/GTIN": "8901234567890"
        },
        tags: ["priority", "fast-moving", "antibiotic"],
        stockByWarehouse: [
            { warehouse: "Delhi WH", onHand: 1200, reserved: 150, available: 1050, batches: 4, nearExpiry: 0 },
            { warehouse: "Mumbai WH", onHand: 800, reserved: 60, available: 740, batches: 3, nearExpiry: 40 },
            { warehouse: "Bengaluru WH", onHand: 430, reserved: 35, available: 395, batches: 2, nearExpiry: 0 }
        ],
        variants: [
            { id: "MED-AMOX-250", name: "Amoxicillin 250 mg", form: "Capsule", packSize: "10 x 10", link: "/products/MED-AMOX-250" },
            { id: "MED-AMOX-SUSP", name: "Amoxicillin Suspension 250 mg/5ml", form: "Syrup", packSize: "60 ml", link: "/products/MED-AMOX-SUSP" }
        ],
        vendors: [
            { id: "VEND-1001", name: "MedMart Distributors", lastPrice: "₹198.00", leadTime: "3 days", link: "/vendors/VEND-1001" },
            { id: "VEND-1007", name: "HealHub Wholesale", lastPrice: "₹200.50", leadTime: "4 days", link: "/vendors/VEND-1007" }
        ],
        related: [
            { id: "MED-CLAV-625", name: "Amoxicillin + Clavulanate 625", link: "/products/MED-CLAV-625" },
            { id: "MED-CEF-500", name: "Cefixime 500 mg", link: "/products/MED-CEF-500" }
        ],
        createdAt: "2024-05-21T09:12:30+05:30",
        updatedAt: "2025-10-04T15:22:11+05:30"
    },

    "MED-CLAV-625": {
        id: "MED-CLAV-625",
        name: "Amoxicillin + Clavulanate 625",
        sku: "AMC-625-TAB",
        status: "active",
        categoryPath: ["Products", "Medicines", "Antibiotics"],
        brand: "Bluewave",
        manufacturer: "Bluewave Pharma Ltd.",
        molecules: ["Amoxicillin", "Clavulanate"],
        form: "Tablet",
        strength: "625 mg",
        packSize: "10 x 6 Tablets",
        hsn: "3004",
        gstRate: "12%",
        mrp: "₹325.00",
        sellPrice: "₹295.00",
        barcodes: ["8909876543210"],
        attributes: { "Shelf Life": "24 months", Storage: "Below 25°C", Prescription: "Required" },
        identifiers: { "Internal Code": "P-10235" },
        tags: ["combo", "fast-moving"],
        stockByWarehouse: [
            { warehouse: "Delhi WH", onHand: 210, reserved: 20, available: 190, batches: 1, nearExpiry: 0 }
        ],
        variants: [],
        vendors: [],
        related: [{ id: "MED-AMOX-500", name: "Amoxicillin 500 mg", link: "/products/MED-AMOX-500" }],
        createdAt: "2024-07-11T11:02:00+05:30",
        updatedAt: "2025-09-30T18:08:40+05:30"
    }
};

/* ---------- simple non-blocking modal (no browser alert) ---------- */
const InfoDialog = ({ open, title, message, onClose }) => {
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

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);
    const [showDemoInfo, setShowDemoInfo] = useState(false);
    const product = PRODUCTS[productId];

    const now = useMemo(() => new Date(), []);
    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/products">Products</NavLink>
            {product?.categoryPath?.slice(1, -1).map((seg, idx) => (
                <span key={idx} className="muted">/ {seg}</span>
            ))}
            <span className="current">/ {product ? product.name : "Not found"}</span>
        </nav>
    );

    useEffect(() => {
        // if wrong id, keep user in a premium "not found" inside the page
        // (no redirect; deep links remain visible)
    }, [productId]);

    const exportJson = () => {
        if (!product) return;
        const blob = new Blob([JSON.stringify(product, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `${product.id}.json`;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
        } catch {
            // swallow; avoid alerts
        }
        setShowDemoInfo(true);
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

    if (!product) {
        return (
            <Styled.Page className="container">
                <Styled.Header className="card">
                    <div className="left">
                        <h1>Product</h1>
                        <div className="meta">{breadcrumbs}</div>
                    </div>
                    <div className="right actions">
                        <button className="btnGhost" onClick={() => navigate("/products")}>Back to Products</button>
                    </div>
                </Styled.Header>

                <Styled.Empty className="card">
                    <div className="icon">⌕</div>
                    <h3>We couldn’t find that product</h3>
                    <p className="muted">The link might be old or the item isn’t part of this demo dataset.</p>
                    <div className="actions">
                        <NavLink className="btnPrimary" to="/products">Go to Products</NavLink>
                    </div>
                </Styled.Empty>
            </Styled.Page>
        );
    }

    return (
        <Styled.Page className="container">
            {/* Print rules applied globally when printing this section */}
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

            <Styled.Header className="card">
                <div className="left">
                    <h1>{product.name}</h1>
                    <div className="meta">
                        {breadcrumbs}
                        <span className="pill">{product.status}</span>
                        <span className="muted">SKU: {product.sku}</span>
                    </div>
                    <div className="subMeta">
                        <span>Created: {fmt(product.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmt(product.updatedAt, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <NavLink to="/products" className="btnGhost">Back</NavLink>
                    <NavLink to={`/products/${product.id}/edit`} className="btnPrimary">Edit</NavLink>
                    <button className="btnGhost" onClick={copyLink} title="Copy current link">Copy Link</button>
                    <button className="btnGhost" onClick={exportJson} title="Download JSON">Export</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnDisabled" onClick={() => setShowDemoInfo(true)} title="Disabled in demo">Delete</button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                {/* Left Column */}
                <section className="col main">
                    <div className="card hero">
                        <div className="gallery">
                            <div className="thumbs">
                                <div className="thumb" title="Primary image" />
                                <div className="thumb" />
                                <div className="thumb" />
                                <div className="thumb" />
                            </div>
                            <div className="mainImage">
                                <div className="image" aria-label="Product image" />
                            </div>
                        </div>

                        <div className="facts">
                            <div className="row">
                                <div>
                                    <div className="label">Brand</div>
                                    <div>{product.brand}</div>
                                </div>
                                <div>
                                    <div className="label">Manufacturer</div>
                                    <div>{product.manufacturer}</div>
                                </div>
                                <div>
                                    <div className="label">Form</div>
                                    <div>{product.form}</div>
                                </div>
                                <div>
                                    <div className="label">Strength</div>
                                    <div>{product.strength}</div>
                                </div>
                            </div>

                            <div className="row">
                                <div>
                                    <div className="label">Pack Size</div>
                                    <div>{product.packSize}</div>
                                </div>
                                <div>
                                    <div className="label">HSN</div>
                                    <div>{product.hsn}</div>
                                </div>
                                <div>
                                    <div className="label">GST</div>
                                    <div>{product.gstRate}</div>
                                </div>
                                <div>
                                    <div className="label">Molecules</div>
                                    <div className="wrap">
                                        {product.molecules?.map((m) => (<span className="chip" key={m}>{m}</span>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing & Packaging */}
                    <div className="row2">
                        <div className="card block">
                            <h3>Pricing</h3>
                            <div className="pairs">
                                <div><span className="k">MRP</span><span className="v">{product.mrp}</span></div>
                                <div><span className="k">Sell Price</span><span className="v">{product.sellPrice}</span></div>
                                <div><span className="k">GST Rate</span><span className="v">{product.gstRate}</span></div>
                                <div><span className="k">HSN Code</span><span className="v">{product.hsn}</span></div>
                                <div><span className="k">Barcodes</span><span className="v wrap">{product.barcodes.join(", ")}</span></div>
                            </div>
                        </div>

                        <div className="card block">
                            <h3>Packaging</h3>
                            <div className="pairs">
                                <div><span className="k">Form</span><span className="v">{product.form}</span></div>
                                <div><span className="k">Strength</span><span className="v">{product.strength}</span></div>
                                <div><span className="k">Pack Size</span><span className="v">{product.packSize}</span></div>
                                <div><span className="k">Identifiers</span><span className="v column">
                                    {Object.entries(product.identifiers).map(([k, v]) => <div key={k}><span className="muted">{k}:</span> {v}</div>)}
                                </span></div>
                            </div>
                        </div>
                    </div>

                    {/* Attributes */}
                    <div className="card block">
                        <h3>Attributes</h3>
                        <div className="attrs">
                            {Object.entries(product.attributes).map(([k, v]) => (
                                <div className="item" key={k}>
                                    <div className="k">{k}</div>
                                    <div className="v">{v}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Variants */}
                    <div className="card block">
                        <h3>Variants</h3>
                        {product.variants?.length ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Variant</th>
                                        <th>Form</th>
                                        <th>Pack</th>
                                        <th className="right">Open</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.variants.map(v => (
                                        <tr key={v.id}>
                                            <td>{v.name}</td>
                                            <td>{v.form}</td>
                                            <td>{v.packSize}</td>
                                            <td className="right">
                                                <NavLink to={v.link} className="link">View</NavLink>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="empty muted">No variants for this item.</div>
                        )}
                    </div>

                    {/* Activity */}
                    <div className="card block">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Price updated</strong>
                                    <div className="muted">{fmt(product.updatedAt, true)}</div>
                                </div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Stock counted (cycle)</strong>
                                    <div className="muted">{fmt(now)}</div>
                                </div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>New batch received</strong>
                                    <div className="muted">{fmt(now, true)}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Printable Summary */}
                    <div className="card block" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="summary">
                            <div><span className="k">Product</span><span className="v">{product.name} ({product.id})</span></div>
                            <div><span className="k">SKU</span><span className="v">{product.sku}</span></div>
                            <div><span className="k">Brand</span><span className="v">{product.brand}</span></div>
                            <div><span className="k">Form</span><span className="v">{product.form}</span></div>
                            <div><span className="k">Strength</span><span className="v">{product.strength}</span></div>
                            <div><span className="k">Pack</span><span className="v">{product.packSize}</span></div>
                            <div><span className="k">MRP</span><span className="v">{product.mrp}</span></div>
                            <div><span className="k">GST</span><span className="v">{product.gstRate}</span></div>
                            <div><span className="k">Updated</span><span className="v">{fmt(product.updatedAt, true)}</span></div>
                        </div>
                    </div>
                </section>

                {/* Right Column */}
                <aside className="col side">
                    <div className="card">
                        <h3>Stock by Warehouse</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Warehouse</th>
                                    <th className="right">On hand</th>
                                    <th className="right">Reserved</th>
                                    <th className="right">Available</th>
                                    <th className="right">Batches</th>
                                    <th className="right">Near Exp.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.stockByWarehouse.map((w) => (
                                    <tr key={w.warehouse}>
                                        <td>{w.warehouse}</td>
                                        <td className="right">{w.onHand}</td>
                                        <td className="right">{w.reserved}</td>
                                        <td className="right">{w.available}</td>
                                        <td className="right">{w.batches}</td>
                                        <td className="right">{w.nearExpiry}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="card">
                        <h3>Vendors</h3>
                        {product.vendors?.length ? (
                            <ul className="list">
                                {product.vendors.map(v => (
                                    <li key={v.id}>
                                        <div className="main">
                                            <NavLink to={v.link}>{v.name}</NavLink>
                                            <span className="muted">• Lead {v.leadTime}</span>
                                        </div>
                                        <div className="muted">Last Price: {v.lastPrice}</div>
                                    </li>
                                ))}
                            </ul>
                        ) : <div className="empty muted">No vendor linked.</div>}
                    </div>

                    <div className="card">
                        <h3>Categories & Tags</h3>
                        <div className="wrap">
                            {product.categoryPath.slice(1).map(c => (<span className="chip" key={c}>{c}</span>))}
                            {product.tags.map(t => (<span className="chip" key={t}>{t}</span>))}
                        </div>
                    </div>

                    <div className="card">
                        <h3>Related Products</h3>
                        {product.related?.length ? (
                            <ul className="list">
                                {product.related.map(r => (
                                    <li key={r.id}>
                                        <NavLink to={r.link}>{r.name}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        ) : <div className="empty muted">No related items.</div>}
                    </div>

                    <div className="card">
                        <h3>Contact Window</h3>
                        <div className="grid2">
                            <div><div className="label">Best time</div><div>{onlyTime(now)}</div></div>
                            <div><div className="label">Support</div><div>Mon–Sat</div></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <InfoDialog
                open={showDemoInfo}
                title="Demo"
                message="This action is disabled in the demo. You can copy links, print, or export JSON."
                onClose={() => setShowDemoInfo(false)}
            />
        </Styled.Page>
    );
};

export default ProductDetail;
