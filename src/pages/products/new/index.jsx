import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

const DEMO_MODE = true;

// date utils 
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

// minimal confirm dialog (no browser alerts)
const ConfirmDialog = ({ open, title, message, onConfirm, onClose, confirmText = "Confirm", danger = false }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Cancel</button>
                    <button className={danger ? "btnDanger" : "btnPrimary"} onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const ProductNew = () => {
    const navigate = useNavigate();
    const now = useMemo(() => new Date(), []);
    const printRef = useRef(null);
    const coverInputRef = useRef(null);
    const galleryInputRef = useRef(null);

    // display-only initial model (no persistence)
    const initial = useMemo(() => ({
        id: "PROD-NEW",
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
        status: "draft",
        visibility: "catalog",
        type: "simple", // simple | variant
        name: "Acme Ergonomic Chair",
        sku: "AC-CHAIR-ERG-01",
        brand: "Acme",
        category: "Office Chairs",
        barcode: "8901234567890",
        uom: "pcs",
        currency: "INR",
        pricing: {
            mrp: "12999.00",
            sell: "10999.00",
            cost: "7499.00",
            taxClass: "GST 18%",
            hsn: "9401",
            discount: "0.00",
            gstPercent: "18"
        },
        inventory: {
            track: "yes",
            opening: "0",
            reorder: "5",
            warehouse: "Central WH",
            lotTracking: "enabled",
            expiryRequired: "no",
            shelf: "A3-14"
        },
        attributes: {
            color: "Black",
            size: "Standard",
            material: "Mesh + Alloy",
            weight: "12.5 kg",
            dimensions: { l: "70 cm", w: "70 cm", h: "120 cm" }
        },
        media: {
            cover: "", // Data URL for preview only
            gallery: [] // Data URLs
        },
        seo: {
            slug: "acme-ergonomic-chair",
            metaTitle: "Acme Ergonomic Chair – Lumbar Support, 4D Armrest",
            metaDescription:
                "Premium ergonomic office chair with adjustable lumbar, headrest, and 4D armrest. Ideal for long work hours.",
            canonical: "https://example.com/products/acme-ergonomic-chair"
        },
        tags: ["ergonomic", "office", "chair", "mesh"],
        variants: [
            { id: "V1", attrs: "Black / Standard", sku: "AC-CHAIR-ERG-01", price: "10999.00", stock: 12 },
            { id: "V2", attrs: "Grey / Standard", sku: "AC-CHAIR-ERG-02", price: "10999.00", stock: 8 },
            { id: "V3", attrs: "Black / XL", sku: "AC-CHAIR-ERG-03", price: "11999.00", stock: 4 }
        ],
        related: ["PROD-2001", "PROD-3002", "PROD-1108"],
        compliance: {
            requiresPrescription: "no",
            storage: "Room temperature",
            batchPattern: "N/A",
            schedule: "General Goods"
        }
    }), [now]);

    const [model, setModel] = useState(initial);
    const [banner, setBanner] = useState("");
    const [askClear, setAskClear] = useState(false);

    // ephemeral banner
    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3500);
        return () => clearTimeout(t);
    }, [banner]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setModel((m) => ({ ...m, [name]: value, updatedAt: new Date().toISOString() }));
    };
    const onNested = (scope, key, value) => {
        setModel((m) => ({
            ...m,
            [scope]: { ...m[scope], [key]: value },
            updatedAt: new Date().toISOString()
        }));
    };
    const onDims = (k, v) => {
        setModel((m) => ({
            ...m,
            attributes: { ...m.attributes, dimensions: { ...m.attributes.dimensions, [k]: v } },
            updatedAt: new Date().toISOString()
        }));
    };

    const onPickCover = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const url = URL.createObjectURL(f);
        setModel((m) => ({ ...m, media: { ...m.media, cover: url }, updatedAt: new Date().toISOString() }));
    };
    const removeCover = () => {
        setModel((m) => ({ ...m, media: { ...m.media, cover: "" }, updatedAt: new Date().toISOString() }));
        if (coverInputRef.current) coverInputRef.current.value = "";
    };
    const onPickGallery = (e) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;
        const urls = files.map((f) => URL.createObjectURL(f));
        setModel((m) => ({ ...m, media: { ...m.media, gallery: [...m.media.gallery, ...urls] }, updatedAt: new Date().toISOString() }));
    };
    const removeGalleryItem = (idx) => {
        setModel((m) => {
            const next = [...m.media.gallery];
            next.splice(idx, 1);
            return { ...m, media: { ...m.media, gallery: next }, updatedAt: new Date().toISOString() };
        });
    };

    const onCancel = () => navigate("/products");
    const onCreate = () => {
        // display-only: disabled (still show a soft banner if someone clicks via keyboard)
        setBanner(`Demo mode: creation disabled • ${fmt(new Date(), true)}`);
    };
    const onCreateAndView = () => setBanner(`Demo mode: creation disabled • ${fmt(new Date(), true)}`);

    const onClear = () => setAskClear(true);
    const confirmClear = () => {
        setAskClear(false);
        setModel(initial);
        setBanner("Cleared form");
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

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/products">Products</NavLink>
            <span>/</span>
            <span className="current">New</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print css */}
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
                    <h1>New Product</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Created: {fmt(model.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmt(model.updatedAt, true)}</span>
                        <span>•</span>
                        <span>Local Time: {onlyTime(new Date())}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={onCancel} title="Back to products">Cancel</button>
                    <button className="btnGhost" onClick={onClear} title="Clear all fields">Clear</button>
                    <button
                        className="btnPrimary"
                        disabled={DEMO_MODE}
                        title={DEMO_MODE ? "Demo mode: action unavailable" : "Create product"}
                        onClick={onCreate}
                    >
                        Create
                    </button>
                    <button
                        className="btnPrimary"
                        disabled={DEMO_MODE}
                        title={DEMO_MODE ? "Demo mode: action unavailable" : "Create and open details"}
                        onClick={onCreateAndView}
                    >
                        Create &amp; View
                    </button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* MAIN FORM */}
                <section className="col main card">
                    {/* Basic */}
                    <div className="block">
                        <h3>Basic Details</h3>
                        <div className="two">
                            <div>
                                <label>Product Name</label>
                                <input name="name" value={model.name} onChange={onChange} placeholder="Product name" />
                            </div>
                            <div>
                                <label>SKU</label>
                                <input name="sku" value={model.sku} onChange={onChange} placeholder="Stock keeping unit" />
                            </div>
                        </div>

                        <div className="three">
                            <div>
                                <label>Brand</label>
                                <input name="brand" value={model.brand} onChange={onChange} placeholder="Brand" />
                            </div>
                            <div>
                                <label>Category</label>
                                <input name="category" value={model.category} onChange={onChange} placeholder="Category" />
                            </div>
                            <div>
                                <label>Status</label>
                                <select name="status" value={model.status} onChange={onChange}>
                                    <option value="draft">Draft</option>
                                    <option value="active">Active</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>
                        </div>

                        <div className="three">
                            <div>
                                <label>Visibility</label>
                                <select value={model.visibility} onChange={(e) => onNested("visibility", null, null)} disabled>
                                    <option value="catalog">Catalog</option>
                                </select>
                                <div className="hint">Shown in listings and detail pages.</div>
                            </div>
                            <div>
                                <label>Barcode</label>
                                <input name="barcode" value={model.barcode} onChange={onChange} placeholder="EAN/UPC" />
                            </div>
                            <div>
                                <label>Unit of Measure</label>
                                <select name="uom" value={model.uom} onChange={onChange}>
                                    <option value="pcs">pcs</option>
                                    <option value="box">box</option>
                                    <option value="pack">pack</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="block">
                        <h3>Pricing &amp; Tax</h3>
                        <div className="four">
                            <div>
                                <label>MRP</label>
                                <input value={model.pricing.mrp} onChange={(e) => onNested("pricing", "mrp", e.target.value)} placeholder="0.00" />
                            </div>
                            <div>
                                <label>Selling Price</label>
                                <input value={model.pricing.sell} onChange={(e) => onNested("pricing", "sell", e.target.value)} placeholder="0.00" />
                            </div>
                            <div>
                                <label>Cost</label>
                                <input value={model.pricing.cost} onChange={(e) => onNested("pricing", "cost", e.target.value)} placeholder="0.00" />
                            </div>
                            <div>
                                <label>Currency</label>
                                <select value={model.currency} onChange={(e) => onChange({ target: { name: "currency", value: e.target.value } })}>
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                        </div>

                        <div className="four">
                            <div>
                                <label>Tax Class</label>
                                <select value={model.pricing.taxClass} onChange={(e) => onNested("pricing", "taxClass", e.target.value)}>
                                    <option>GST 0%</option>
                                    <option>GST 5%</option>
                                    <option>GST 12%</option>
                                    <option>GST 18%</option>
                                    <option>GST 28%</option>
                                </select>
                            </div>
                            <div>
                                <label>HSN Code</label>
                                <input value={model.pricing.hsn} onChange={(e) => onNested("pricing", "hsn", e.target.value)} placeholder="HSN" />
                            </div>
                            <div>
                                <label>GST %</label>
                                <input value={model.pricing.gstPercent} onChange={(e) => onNested("pricing", "gstPercent", e.target.value)} placeholder="%" />
                            </div>
                            <div>
                                <label>Discount</label>
                                <input value={model.pricing.discount} onChange={(e) => onNested("pricing", "discount", e.target.value)} placeholder="0.00" />
                            </div>
                        </div>
                    </div>

                    {/* Inventory */}
                    <div className="block">
                        <h3>Inventory</h3>
                        <div className="four">
                            <div>
                                <label>Track Inventory</label>
                                <select value={model.inventory.track} onChange={(e) => onNested("inventory", "track", e.target.value)}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div>
                                <label>Opening Stock</label>
                                <input value={model.inventory.opening} onChange={(e) => onNested("inventory", "opening", e.target.value)} placeholder="0" />
                            </div>
                            <div>
                                <label>Reorder Level</label>
                                <input value={model.inventory.reorder} onChange={(e) => onNested("inventory", "reorder", e.target.value)} placeholder="0" />
                            </div>
                            <div>
                                <label>Warehouse</label>
                                <select value={model.inventory.warehouse} onChange={(e) => onNested("inventory", "warehouse", e.target.value)}>
                                    <option>Central WH</option>
                                    <option>North Hub</option>
                                    <option>South Hub</option>
                                </select>
                            </div>
                        </div>

                        <div className="three">
                            <div>
                                <label>Lot/Batch Tracking</label>
                                <select value={model.inventory.lotTracking} onChange={(e) => onNested("inventory", "lotTracking", e.target.value)}>
                                    <option value="enabled">Enabled</option>
                                    <option value="disabled">Disabled</option>
                                </select>
                            </div>
                            <div>
                                <label>Expiry Required</label>
                                <select value={model.inventory.expiryRequired} onChange={(e) => onNested("inventory", "expiryRequired", e.target.value)}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                            <div>
                                <label>Shelf</label>
                                <input value={model.inventory.shelf} onChange={(e) => onNested("inventory", "shelf", e.target.value)} placeholder="Bay/Rack" />
                            </div>
                        </div>
                    </div>

                    {/* Attributes */}
                    <div className="block">
                        <h3>Attributes</h3>
                        <div className="four">
                            <div>
                                <label>Color</label>
                                <input value={model.attributes.color} onChange={(e) => setModel(m => ({ ...m, attributes: { ...m.attributes, color: e.target.value } }))} />
                            </div>
                            <div>
                                <label>Size</label>
                                <input value={model.attributes.size} onChange={(e) => setModel(m => ({ ...m, attributes: { ...m.attributes, size: e.target.value } }))} />
                            </div>
                            <div>
                                <label>Material</label>
                                <input value={model.attributes.material} onChange={(e) => setModel(m => ({ ...m, attributes: { ...m.attributes, material: e.target.value } }))} />
                            </div>
                            <div>
                                <label>Weight</label>
                                <input value={model.attributes.weight} onChange={(e) => setModel(m => ({ ...m, attributes: { ...m.attributes, weight: e.target.value } }))} />
                            </div>
                        </div>

                        <div className="three">
                            <div>
                                <label>Length</label>
                                <input value={model.attributes.dimensions.l} onChange={(e) => onDims("l", e.target.value)} />
                            </div>
                            <div>
                                <label>Width</label>
                                <input value={model.attributes.dimensions.w} onChange={(e) => onDims("w", e.target.value)} />
                            </div>
                            <div>
                                <label>Height</label>
                                <input value={model.attributes.dimensions.h} onChange={(e) => onDims("h", e.target.value)} />
                            </div>
                        </div>

                        <div className="chips">
                            {model.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                        </div>
                    </div>

                    {/* Media */}
                    <div className="block">
                        <h3>Media</h3>
                        <div className="media">
                            <div className="cover">
                                <div className="thumb" style={{ backgroundImage: `url(${model.media.cover || "/image.svg"})` }} />
                                <div className="controls">
                                    <label className="btnGhost small">
                                        Choose Cover
                                        <input ref={coverInputRef} type="file" accept="image/*" hidden onChange={onPickCover} />
                                    </label>
                                    {model.media.cover ? (
                                        <button className="btnGhost small" onClick={removeCover}>Remove</button>
                                    ) : null}
                                    <a className="btnGhost small" href={model.media.cover || "/image.svg"} download>Download</a>
                                </div>
                            </div>

                            <div className="gallery">
                                <div className="row">
                                    {model.media.gallery.length === 0 ? (
                                        <div className="empty">No gallery images yet.</div>
                                    ) : model.media.gallery.map((g, i) => (
                                        <div key={i} className="gthumb">
                                            <div className="img" style={{ backgroundImage: `url(${g})` }} />
                                            <button className="x" onClick={() => removeGalleryItem(i)} title="Remove">×</button>
                                        </div>
                                    ))}
                                </div>
                                <label className="btnGhost small">
                                    Add Gallery
                                    <input ref={galleryInputRef} type="file" accept="image/*" multiple hidden onChange={onPickGallery} />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* SEO */}
                    <div className="block">
                        <h3>SEO</h3>
                        <div className="two">
                            <div>
                                <label>Slug</label>
                                <input value={model.seo.slug} onChange={(e) => setModel(m => ({ ...m, seo: { ...m.seo, slug: e.target.value } }))} />
                            </div>
                            <div>
                                <label>Canonical URL</label>
                                <input value={model.seo.canonical} onChange={(e) => setModel(m => ({ ...m, seo: { ...m.seo, canonical: e.target.value } }))} />
                            </div>
                        </div>
                        <div>
                            <label>Meta Title</label>
                            <input value={model.seo.metaTitle} onChange={(e) => setModel(m => ({ ...m, seo: { ...m.seo, metaTitle: e.target.value } }))} />
                        </div>
                        <div>
                            <label>Meta Description</label>
                            <textarea rows={3} value={model.seo.metaDescription} onChange={(e) => setModel(m => ({ ...m, seo: { ...m.seo, metaDescription: e.target.value } }))} />
                        </div>
                    </div>

                    {/* Variants (display-only matrix) */}
                    <div className="block">
                        <h3>Variants</h3>
                        <div className="hint">Preview of variant matrix (read-only in demo).</div>
                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Variant</th>
                                        <th>SKU</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {model.variants.map(v => (
                                        <tr key={v.id}>
                                            <td>{v.attrs}</td>
                                            <td>{v.sku}</td>
                                            <td>{model.currency} {v.price}</td>
                                            <td>{v.stock}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Compliance */}
                    <div className="block">
                        <h3>Compliance</h3>
                        <div className="three">
                            <div>
                                <label>Requires Prescription</label>
                                <select value={model.compliance.requiresPrescription} onChange={(e) => setModel(m => ({ ...m, compliance: { ...m.compliance, requiresPrescription: e.target.value } }))}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                            <div>
                                <label>Storage</label>
                                <input value={model.compliance.storage} onChange={(e) => setModel(m => ({ ...m, compliance: { ...m.compliance, storage: e.target.value } }))} />
                            </div>
                            <div>
                                <label>Batch Code Pattern</label>
                                <input value={model.compliance.batchPattern} onChange={(e) => setModel(m => ({ ...m, compliance: { ...m.compliance, batchPattern: e.target.value } }))} />
                            </div>
                        </div>
                        <div className="two">
                            <div>
                                <label>Schedule</label>
                                <input value={model.compliance.schedule} onChange={(e) => setModel(m => ({ ...m, compliance: { ...m.compliance, schedule: e.target.value } }))} />
                            </div>
                            <div>
                                <label>Notes</label>
                                <input placeholder="Any handling notes…" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDEBAR */}
                <aside className="col side">
                    <div className="card">
                        <h3>Summary</h3>
                        <ul className="kvs">
                            <li><span className="k">Name</span><span className="v">{model.name}</span></li>
                            <li><span className="k">SKU</span><span className="v">{model.sku}</span></li>
                            <li><span className="k">Brand</span><span className="v">{model.brand}</span></li>
                            <li><span className="k">Category</span><span className="v">{model.category}</span></li>
                            <li><span className="k">Status</span><span className="v">{model.status}</span></li>
                            <li><span className="k">Price</span><span className="v">{model.currency} {model.pricing.sell}</span></li>
                            <li><span className="k">Tax</span><span className="v">{model.pricing.taxClass}</span></li>
                            <li><span className="k">HSN</span><span className="v">{model.pricing.hsn}</span></li>
                            <li><span className="k">Stock</span><span className="v">{model.inventory.opening}</span></li>
                        </ul>
                        <div className="sideActions">
                            <button className="btnGhost" onClick={printSection}>Print</button>
                            <NavLink to="/products" className="btnGhost">Back to List</NavLink>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Related Products</h3>
                        <div className="chips">
                            {model.related.map(id => (
                                <NavLink key={id} to={`/products/${id}`} className="chipLink">{id}</NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Product</span><span className="v">{model.name}</span></div>
                            <div className="line"><span className="k">SKU</span><span className="v">{model.sku}</span></div>
                            <div className="line"><span className="k">Brand</span><span className="v">{model.brand}</span></div>
                            <div className="line"><span className="k">Category</span><span className="v">{model.category}</span></div>
                            <div className="line"><span className="k">Price</span><span className="v">{model.currency} {model.pricing.sell}</span></div>
                            <div className="line"><span className="k">Tax</span><span className="v">{model.pricing.taxClass} (HSN {model.pricing.hsn})</span></div>
                            <div className="line"><span className="k">Created</span><span className="v">{fmt(model.createdAt, true)}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <ConfirmDialog
                open={askClear}
                title="Clear all fields?"
                message="This will reset the form to its initial values."
                confirmText="Clear"
                onConfirm={confirmClear}
                onClose={() => setAskClear(false)}
            />
        </Styled.Page>
    );
};

export default ProductNew;
