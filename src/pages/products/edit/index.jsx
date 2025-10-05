import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- date formatting helpers ---------- */
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

/* ---------- simple confirm/info dialog ---------- */
const ConfirmDialog = ({ open, title, message, onConfirm, onClose, confirmText = "OK" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                    <button className="btnPrimary" onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const DEMO_MODE = true;

const ProductEdit = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    const now = useMemo(() => new Date(), []);
    const [activeImage, setActiveImage] = useState(0);
    const [showDemoModal, setShowDemoModal] = useState(false);

    // fixture-like model (display-only)
    const model = useMemo(() => ({
        id: productId || "PROD-AXN-501",
        sku: "AXN-501",
        barcode: "8901234567890",
        name: "Axion Sports Bottle 750ml",
        brand: "Axion",
        categories: ["Sports", "Hydration"],
        status: "active", // active | archived | draft
        createdAt: now,
        updatedAt: now,
        description:
            "Premium-grade BPA-free sports bottle with flip-top lid and silicone carry loop. Ideal for gyms, outdoor, cycling. Textured grip and wide-mouth design for easy cleaning.",
        images: [
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1570980431380-5cc43f1f2f1f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1622037024294-7b593a1cf9b6?q=80&w=1200&auto=format&fit=crop",
        ],
        tags: ["bestseller", "summer", "outdoor"],
        pricing: {
            currency: "INR",
            mrp: 899.00,
            sellingPrice: 699.00,
            cost: 542.25,
            marginPercent: "22.4%",
            tiers: [
                { minQty: 5, price: 679.0, label: "Pack of 5" },
                { minQty: 10, price: 659.0, label: "Pack of 10" },
                { minQty: 25, price: 639.0, label: "Pack of 25" },
            ],
            priceList: "Standard India 2025",
        },
        tax: { hsn: "3926", gstRate: "18%" },
        attributes: {
            color: "Ocean Blue",
            capacity: "750 ml",
            material: "Tritan (BPA-free)",
            finish: "Matte",
        },
        dimensions: {
            weight: "210 g",
            length: "7.2 cm",
            width: "7.2 cm",
            height: "25.5 cm",
            shippingWeight: "290 g",
            packageDims: "9 x 9 x 27 cm",
        },
        shipping: {
            isFragile: false,
            returnable: true,
            shelfLifeDays: 0,
            handlingNotes: "Avoid extreme heat; top-rack dishwasher safe.",
        },
        inventory: {
            stockOnHand: 1840,
            committed: 215,
            available: 1625,
            reorderLevel: 500,
            warehouses: [
                { id: "W-DEL", name: "Delhi WH", available: 620 },
                { id: "W-MUM", name: "Mumbai WH", available: 480 },
                { id: "W-BLR", name: "Bengaluru WH", available: 525 },
            ],
            batches: [
                { batch: "AXN-750-A1", mfg: "2025-06-12", expiry: "", qty: 900 },
                { batch: "AXN-750-A2", mfg: "2025-08-02", expiry: "", qty: 940 },
            ],
        },
        variants: [
            { id: "VAR-OBL-750", sku: "AXN-501-OBL", attrs: { color: "Ocean Blue", cap: "Flip" }, price: 699, stock: 820 },
            { id: "VAR-CBL-750", sku: "AXN-501-CBL", attrs: { color: "Carbon Black", cap: "Flip" }, price: 699, stock: 805 },
            { id: "VAR-RED-750", sku: "AXN-501-RED", attrs: { color: "Signal Red", cap: "Flip" }, price: 699, stock: 0 },
        ],
        vendors: [
            { id: "VND-1002", name: "Bluewave Traders", leadTimeDays: 7, moq: 50, rating: "4.5/5" },
            { id: "VND-1041", name: "HydroSupply India", leadTimeDays: 10, moq: 100, rating: "4.2/5" },
        ],
        seo: {
            slug: "axion-sports-bottle-750ml",
            metaTitle: "Axion Sports Bottle 750ml – BPA-free, Leakproof",
            metaDescription: "Premium Tritan bottle with flip-top lid and wide-mouth design. Perfect for gym and outdoor.",
        },
        related: [
            { id: "PROD-AXN-350", name: "Axion Mini 350ml", price: "₹399" },
            { id: "PROD-AXN-1000", name: "Axion Max 1L", price: "₹799" },
            { id: "PROD-AXN-ICE", name: "Axion Ice Rod", price: "₹249" },
        ],
    }), [productId, now]);

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/products">Products</NavLink>
            <span>/</span>
            <NavLink to={`/products/${model.id}`}>{model.id}</NavLink>
            <span>/</span>
            <span className="current">Edit</span>
        </nav>
    );

    const onCancel = () => navigate(model.id ? `/products/${model.id}` : "/products");

    const onSave = () => {
        if (DEMO_MODE) { setShowDemoModal(true); return; }
    };
    const onDelete = () => {
        if (DEMO_MODE) { setShowDemoModal(true); return; }
    };
    const onPrint = () => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    useEffect(() => {
        // reset active image if product changes
        setActiveImage(0);
    }, [model.id]);

    return (
        <Styled.Page>
            {/* print CSS block (as requested) */}
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
                    <div className="titleRow">
                        <h1>Product</h1>
                        <span className={`status ${model.status}`}>{model.status}</span>
                    </div>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Created: {fmt(model.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmt(model.updatedAt, true)}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="btnGhost" onClick={onCancel} title="Back to details">Cancel</button>
                    <button className="btnPrimary" onClick={onSave} title="Save (demo)">{DEMO_MODE ? "Save (demo)" : "Save"}</button>
                    <button className="btnDanger" onClick={onDelete} title="Delete (demo)">Delete</button>
                    <button className="btnGhost" onClick={onPrint} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                {/* Main column */}
                <section className="col main card">
                    {/* gallery */}
                    <div className="gallery">
                        <div className="imageMain" style={{ backgroundImage: `url(${model.images[activeImage]})` }} />
                        <div className="thumbs">
                            {model.images.map((src, i) => (
                                <button
                                    key={i}
                                    className={`thumb ${i === activeImage ? "active" : ""}`}
                                    style={{ backgroundImage: `url(${src})` }}
                                    onClick={() => setActiveImage(i)}
                                    aria-label={`Image ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* essentials */}
                    <div className="section">
                        <div className="sectionHeader"><h3>Essentials</h3></div>
                        <div className="grid two">
                            <div>
                                <label>Name</label>
                                <input value={model.name} readOnly />
                            </div>
                            <div>
                                <label>SKU</label>
                                <input value={model.sku} readOnly />
                            </div>
                        </div>
                        <div className="grid three">
                            <div>
                                <label>Barcode</label>
                                <input value={model.barcode} readOnly />
                            </div>
                            <div>
                                <label>Brand</label>
                                <input value={model.brand} readOnly />
                            </div>
                            <div>
                                <label>Categories</label>
                                <input value={model.categories.join(", ")} readOnly />
                            </div>
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea rows={5} value={model.description} readOnly />
                        </div>
                        <div className="chips">
                            {model.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                        </div>
                    </div>

                    {/* pricing */}
                    <div className="section">
                        <div className="sectionHeader"><h3>Pricing</h3></div>
                        <div className="grid three">
                            <div>
                                <div className="metric">
                                    <div className="k">MRP</div>
                                    <div className="v">₹{model.pricing.mrp.toFixed(2)}</div>
                                </div>
                            </div>
                            <div>
                                <div className="metric">
                                    <div className="k">Selling Price</div>
                                    <div className="v">₹{model.pricing.sellingPrice.toFixed(2)}</div>
                                </div>
                            </div>
                            <div>
                                <div className="metric">
                                    <div className="k">Cost</div>
                                    <div className="v">₹{model.pricing.cost.toFixed(2)}</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid two">
                            <div className="card sub">
                                <h4>Price Tiers</h4>
                                <table className="table">
                                    <thead>
                                        <tr><th>Label</th><th>Min Qty</th><th>Price</th></tr>
                                    </thead>
                                    <tbody>
                                        {model.pricing.tiers.map((t, idx) => (
                                            <tr key={idx}>
                                                <td>{t.label}</td>
                                                <td>{t.minQty}</td>
                                                <td>₹{t.price.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="muted small">List: {model.pricing.priceList} • Margin: {model.pricing.marginPercent}</div>
                            </div>

                            <div className="card sub">
                                <h4>Taxes</h4>
                                <div className="grid two">
                                    <div>
                                        <label>HSN</label>
                                        <input value={model.tax.hsn} readOnly />
                                    </div>
                                    <div>
                                        <label>GST Rate</label>
                                        <input value={model.tax.gstRate} readOnly />
                                    </div>
                                </div>
                                <p className="muted small">Tax settings are read-only in this demo.</p>
                            </div>
                        </div>
                    </div>

                    {/* variants */}
                    <div className="section">
                        <div className="sectionHeader">
                            <h3>Variants</h3>
                            <span className="muted small">Display-only</span>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Variant</th>
                                    <th>SKU</th>
                                    <th>Attributes</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {model.variants.map((v) => (
                                    <tr key={v.id}>
                                        <td>{v.id}</td>
                                        <td>{v.sku}</td>
                                        <td>{Object.entries(v.attrs).map(([k, val]) => `${k}: ${val}`).join(", ")}</td>
                                        <td>₹{v.price.toFixed(2)}</td>
                                        <td>{v.stock}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* inventory */}
                    <div className="section">
                        <div className="sectionHeader"><h3>Inventory</h3></div>
                        <div className="grid four metrics">
                            <div className="metric">
                                <div className="k">On Hand</div><div className="v">{model.inventory.stockOnHand}</div>
                            </div>
                            <div className="metric">
                                <div className="k">Committed</div><div className="v">{model.inventory.committed}</div>
                            </div>
                            <div className="metric">
                                <div className="k">Available</div><div className="v">{model.inventory.available}</div>
                            </div>
                            <div className="metric">
                                <div className="k">Reorder Level</div><div className="v">{model.inventory.reorderLevel}</div>
                            </div>
                        </div>

                        <div className="grid two">
                            <div className="card sub">
                                <h4>By Warehouse</h4>
                                <table className="table">
                                    <thead><tr><th>ID</th><th>Warehouse</th><th>Available</th></tr></thead>
                                    <tbody>
                                        {model.inventory.warehouses.map(w => (
                                            <tr key={w.id}><td>{w.id}</td><td>{w.name}</td><td>{w.available}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="card sub">
                                <h4>Batches</h4>
                                <table className="table">
                                    <thead><tr><th>Batch</th><th>MFG</th><th>Expiry</th><th>Qty</th></tr></thead>
                                    <tbody>
                                        {model.inventory.batches.map(b => (
                                            <tr key={b.batch}>
                                                <td>{b.batch}</td>
                                                <td>{fmt(b.mfg)}</td>
                                                <td>{b.expiry ? fmt(b.expiry) : "-"}</td>
                                                <td>{b.qty}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* attributes & shipping */}
                    <div className="section">
                        <div className="sectionHeader"><h3>Attributes & Shipping</h3></div>
                        <div className="grid two">
                            <div className="card sub">
                                <h4>Attributes</h4>
                                <div className="grid two">
                                    <div><label>Color</label><input value={model.attributes.color} readOnly /></div>
                                    <div><label>Capacity</label><input value={model.attributes.capacity} readOnly /></div>
                                    <div><label>Material</label><input value={model.attributes.material} readOnly /></div>
                                    <div><label>Finish</label><input value={model.attributes.finish} readOnly /></div>
                                </div>
                            </div>
                            <div className="card sub">
                                <h4>Dimensions & Shipping</h4>
                                <div className="grid two">
                                    <div><label>Weight</label><input value={model.dimensions.weight} readOnly /></div>
                                    <div><label>Shipping Weight</label><input value={model.dimensions.shippingWeight} readOnly /></div>
                                    <div><label>Package</label><input value={model.dimensions.packageDims} readOnly /></div>
                                    <div><label>Size</label><input value={`${model.dimensions.length} × ${model.dimensions.width} × ${model.dimensions.height}`} readOnly /></div>
                                </div>
                                <div className="grid three flags">
                                    <div><span className="flag">Fragile: {model.shipping.isFragile ? "Yes" : "No"}</span></div>
                                    <div><span className="flag">Returnable: {model.shipping.returnable ? "Yes" : "Yes"}</span></div>
                                    <div><span className="flag">Shelf Life: {model.shipping.shelfLifeDays || 0} days</span></div>
                                </div>
                                <div className="muted small">{model.shipping.handlingNotes}</div>
                            </div>
                        </div>
                    </div>

                    {/* SEO */}
                    <div className="section">
                        <div className="sectionHeader"><h3>SEO</h3></div>
                        <div className="grid two">
                            <div>
                                <label>Slug</label>
                                <input value={model.seo.slug} readOnly />
                            </div>
                            <div>
                                <label>Meta Title</label>
                                <input value={model.seo.metaTitle} readOnly />
                            </div>
                        </div>
                        <div>
                            <label>Meta Description</label>
                            <textarea rows={3} value={model.seo.metaDescription} readOnly />
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="col side">
                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/products">All Products</NavLink></li>
                            <li><NavLink to={`/products/${model.id}`}>View Details</NavLink></li>
                            <li><NavLink to="/categories">Categories</NavLink></li>
                            <li><NavLink to="/inventory">Inventory</NavLink></li>
                            <li><NavLink to="/products/price-lists">Price Lists</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Vendors</h3>
                        <ul className="vendors">
                            {model.vendors.map(v => (
                                <li key={v.id}>
                                    <div className="vname">{v.name}</div>
                                    <div className="vmeta muted small">Lead: {v.leadTimeDays} days • MOQ: {v.moq} • {v.rating}</div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li>
                                <span className="dot" />
                                <div><strong>Price updated</strong><div className="muted">{fmt(now, true)}</div></div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div><strong>Stock received (Delhi WH)</strong><div className="muted">{fmt(now)}</div></div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div><strong>New variant added</strong><div className="muted">{onlyTime(now)}</div></div>
                            </li>
                        </ul>
                    </div>

                    <div className="card related">
                        <h3>Related</h3>
                        <div className="relGrid">
                            {model.related.map(r => (
                                <NavLink key={r.id} to={`/products/${r.id}`} className="relCard">
                                    <div className="title">{r.name}</div>
                                    <div className="price">{r.price}</div>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* printable summary */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Product</span><span className="v">{model.name}</span></div>
                            <div className="line"><span className="k">SKU</span><span className="v">{model.sku}</span></div>
                            <div className="line"><span className="k">Brand</span><span className="v">{model.brand}</span></div>
                            <div className="line"><span className="k">Categories</span><span className="v">{model.categories.join(", ")}</span></div>
                            <div className="line"><span className="k">MRP</span><span className="v">₹{model.pricing.mrp.toFixed(2)}</span></div>
                            <div className="line"><span className="k">Selling</span><span className="v">₹{model.pricing.sellingPrice.toFixed(2)}</span></div>
                            <div className="line"><span className="k">HSN</span><span className="v">{model.tax.hsn} / {model.tax.gstRate}</span></div>
                            <div className="line"><span className="k">Created</span><span className="v">{fmt(model.createdAt, true)}</span></div>
                        </div>
                    </div>

                    <div className="card danger">
                        <h3>Danger Zone</h3>
                        <button className="btnDanger full" onClick={onDelete} title="Delete product (demo)">Delete Product</button>
                        <div className="muted small">Destructive actions are disabled in demo.</div>
                    </div>
                </aside>
            </Styled.Grid>

            <ConfirmDialog
                open={showDemoModal}
                title="Demo mode"
                message="This action is disabled in the demo. All data is read-only."
                confirmText="Got it"
                onConfirm={() => setShowDemoModal(false)}
                onClose={() => setShowDemoModal(false)}
            />
        </Styled.Page>
    );
};

export default ProductEdit;
