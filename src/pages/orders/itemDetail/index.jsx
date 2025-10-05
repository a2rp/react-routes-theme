import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/** tiny date helpers to keep the exact formats everywhere */
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
    const p = (n) => String(n).padStart(2, "0");
    return `${p(dd.getHours())}:${p(dd.getMinutes())}:${p(dd.getSeconds())}hrs`;
};

const OrderItemDetail = () => {
    const { orderId = "ORD-3456", itemId = "ITEM-01" } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // pre-specified display-only data (no calculations here)
    const model = useMemo(
        () => ({
            id: itemId,
            orderId,
            customerId: "CUST-1001",
            invoiceId: "INV-2031",
            product: {
                id: "MED-AMOX-500",
                name: "Amoxicillin 500 mg",
                variant: "Capsule · Strip of 10",
                sku: "AMOX-500-CAP-10",
                brand: "MediCore",
                generic: "Amoxicillin",
                image: "/product.svg",
            },
            quantity: {
                ordered: 5,
                allocated: 5,
                picked: 5,
                packed: 5,
                shipped: 5,
                delivered: 4,
                uom: "strip",
            },
            pricing: {
                currency: "INR",
                unitPrice: "₹250.00",
                discount: "₹0.00",
                tax: "₹225.00",
                subtotal: "₹1,250.00",
                total: "₹1,475.00",
                priceList: "Retail MRP",
            },
            compliance: {
                hsn: "3004",
                gstRate: "18%",
                batch: "BCH-7A19",
                lot: "LOT-1092",
                mrp: "₹265.00",
                expiry: "2026-02-28T00:00:00+05:30",
                mfg: "2024-06-15T00:00:00+05:30",
            },
            warehouse: {
                code: "WH-NCR-01",
                bin: "A-17-3",
                rack: "R-05",
                temperature: "Ambient",
            },
            dimensions: {
                weight: "0.25 kg",
                length: "14 cm",
                width: "10 cm",
                height: "4 cm",
            },
            status: "Partially Delivered",
            createdAt: "2025-10-04T10:12:23+05:30",
            updatedAt: "2025-10-04T15:38:20+05:30",
            notes:
                "Cold chain not required. Keep away from moisture. Replace any strip with damaged foil. Customer prefers morning deliveries.",
            tags: ["antibiotic", "rx", "priority"],
            shipments: [
                { id: "SHP-9001", status: "Delivered", date: "2025-10-04T12:55:10+05:30" },
                { id: "SHP-9010", status: "In Transit", date: "2025-10-04T21:15:00+05:30" },
            ],
            attachments: [
                { name: "COA-BCH-7A19.pdf", type: "pdf", href: "#" },
                { name: "Storage-Guidelines.pdf", type: "pdf", href: "#" },
            ],
            timeline: [
                { label: "Added to Order", at: "2025-10-04T10:12:23+05:30" },
                { label: "Allocated", at: "2025-10-04T10:30:00+05:30" },
                { label: "Picked", at: "2025-10-04T11:10:40+05:30" },
                { label: "Packed", at: "2025-10-04T11:45:00+05:30" },
                { label: "Shipped (SHP-9001)", at: "2025-10-04T12:10:00+05:30" },
                { label: "Part Delivered", at: "2025-10-04T12:55:10+05:30" },
            ],
        }),
        [orderId, itemId]
    );

    const [banner, setBanner] = useState("");

    useEffect(() => {
        let t;
        if (banner) t = setTimeout(() => setBanner(""), 3000);
        return () => t && clearTimeout(t);
    }, [banner]);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setBanner(`Link copied at ${fmt(new Date(), true)}`);
        } catch {
            setBanner(`Unable to copy at ${fmt(new Date(), true)}`);
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

    const exportJson = () => {
        const blob = new Blob([JSON.stringify(model, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement("a"), { href: url, download: `${model.orderId}-${model.id}.json` });
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        setBanner(`Exported at ${fmt(new Date(), true)}`);
    };

    const goBackToOrder = () => navigate(`/orders/${model.orderId}`);

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/orders">Orders</NavLink>
            <span>/</span>
            <NavLink to={`/orders/${model.orderId}`}>{model.orderId}</NavLink>
            <span>/</span>
            <span className="current">{model.id}</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print css block */}
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
                    <h1>Order Item</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>ID: {model.id}</span>
                        <span>•</span>
                        <span>Status: <span className="chip">{model.status}</span></span>
                        <span>•</span>
                        <span>Created: {fmt(model.createdAt, true)}</span>
                        <span>•</span>
                        <span>Updated: {fmt(model.updatedAt, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={goBackToOrder} title="Back to order">Back</button>
                    <button className="btnGhost" onClick={copyLink} title="Copy deep link">Copy Link</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnPrimary" onClick={exportJson} title="Export JSON">Export</button>
                    <button className="btnDisabled" title="Demo only">Edit Item</button>
                    <button className="btnDisabled" title="Demo only">Remove</button>
                    <button className="btnDisabled" title="Demo only">Create RMA</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* Main */}
                <section className="col main card">
                    {/* product identity */}
                    <div className="identity">
                        <div className="image" style={{ backgroundImage: `url(${model.product.image})` }} />
                        <div className="info">
                            <h2>{model.product.name}</h2>
                            <div className="sub">{model.product.variant}</div>
                            <div className="kv">
                                <div><span className="k">SKU</span><span className="v">{model.product.sku}</span></div>
                                <div><span className="k">Brand</span><span className="v">{model.product.brand}</span></div>
                                <div><span className="k">Generic</span><span className="v">{model.product.generic}</span></div>
                            </div>
                            <div className="links">
                                <NavLink to={`/products/${model.product.id}`}>Open Product</NavLink>
                                <NavLink to={`/customers/${model.customerId}`}>Customer</NavLink>
                                <NavLink to={`/invoices/${model.invoiceId}`}>Invoice</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* qty + pricing */}
                    <div className="panels">
                        <div className="panel">
                            <h3>Quantities</h3>
                            <div className="grid3">
                                <div className="stat">
                                    <div className="label">Ordered</div>
                                    <div className="value">{model.quantity.ordered} {model.quantity.uom}</div>
                                </div>
                                <div className="stat">
                                    <div className="label">Allocated</div>
                                    <div className="value">{model.quantity.allocated} {model.quantity.uom}</div>
                                </div>
                                <div className="stat">
                                    <div className="label">Picked</div>
                                    <div className="value">{model.quantity.picked} {model.quantity.uom}</div>
                                </div>
                                <div className="stat">
                                    <div className="label">Packed</div>
                                    <div className="value">{model.quantity.packed} {model.quantity.uom}</div>
                                </div>
                                <div className="stat">
                                    <div className="label">Shipped</div>
                                    <div className="value">{model.quantity.shipped} {model.quantity.uom}</div>
                                </div>
                                <div className="stat">
                                    <div className="label">Delivered</div>
                                    <div className="value">{model.quantity.delivered} {model.quantity.uom}</div>
                                </div>
                            </div>
                            <div className="tags">
                                {model.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                            </div>
                        </div>

                        <div className="panel">
                            <h3>Pricing</h3>
                            <table className="strip">
                                <tbody>
                                    <tr><th>Price List</th><td>{model.pricing.priceList}</td></tr>
                                    <tr><th>Unit Price</th><td>{model.pricing.unitPrice}</td></tr>
                                    <tr><th>Discount</th><td>{model.pricing.discount}</td></tr>
                                    <tr><th>Tax</th><td>{model.pricing.tax}</td></tr>
                                    <tr><th>Subtotal</th><td>{model.pricing.subtotal}</td></tr>
                                    <tr><th>Total</th><td><strong>{model.pricing.total}</strong></td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="panel">
                            <h3>Compliance & Batch</h3>
                            <table className="strip">
                                <tbody>
                                    <tr><th>HSN</th><td>{model.compliance.hsn}</td></tr>
                                    <tr><th>GST</th><td>{model.compliance.gstRate}</td></tr>
                                    <tr><th>Batch</th><td>{model.compliance.batch}</td></tr>
                                    <tr><th>Lot</th><td>{model.compliance.lot}</td></tr>
                                    <tr><th>MRP</th><td>{model.compliance.mrp}</td></tr>
                                    <tr><th>Expiry</th><td>{fmt(model.compliance.expiry)}</td></tr>
                                    <tr><th>MFG</th><td>{fmt(model.compliance.mfg)}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="panel">
                            <h3>Warehouse</h3>
                            <div className="kv two">
                                <div><span className="k">Warehouse</span><span className="v">{model.warehouse.code}</span></div>
                                <div><span className="k">Bin</span><span className="v">{model.warehouse.bin}</span></div>
                                <div><span className="k">Rack</span><span className="v">{model.warehouse.rack}</span></div>
                                <div><span className="k">Temperature</span><span className="v">{model.warehouse.temperature}</span></div>
                            </div>
                        </div>

                        <div className="panel">
                            <h3>Dimensions</h3>
                            <div className="kv three">
                                <div><span className="k">Weight</span><span className="v">{model.dimensions.weight}</span></div>
                                <div><span className="k">Length</span><span className="v">{model.dimensions.length}</span></div>
                                <div><span className="k">Width</span><span className="v">{model.dimensions.width}</span></div>
                                <div><span className="k">Height</span><span className="v">{model.dimensions.height}</span></div>
                            </div>
                        </div>

                        <div className="panel">
                            <h3>Notes</h3>
                            <p className="notes">{model.notes}</p>
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="col side">
                    <div className="card">
                        <h3>Order</h3>
                        <div className="kv">
                            <div><span className="k">Order</span><span className="v"><NavLink to={`/orders/${model.orderId}`}>{model.orderId}</NavLink></span></div>
                            <div><span className="k">Customer</span><span className="v"><NavLink to={`/customers/${model.customerId}`}>{model.customerId}</NavLink></span></div>
                            <div><span className="k">Invoice</span><span className="v"><NavLink to={`/invoices/${model.invoiceId}`}>{model.invoiceId}</NavLink></span></div>
                            <div><span className="k">Updated</span><span className="v">{fmt(model.updatedAt, true)}</span></div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Fulfilment</h3>
                        <ul className="timeline">
                            {model.timeline.map((e, i) => (
                                <li key={i}>
                                    <span className="dot" />
                                    <div>
                                        <strong>{e.label}</strong>
                                        <div className="muted">{fmt(e.at, true)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Shipments</h3>
                        <ul className="links">
                            {model.shipments.map(s => (
                                <li key={s.id}>
                                    <NavLink to={`/shipments/${s.id}`}>{s.id}</NavLink>
                                    <span className="muted"> — {s.status} · {fmt(s.date, true)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Attachments</h3>
                        <ul className="links">
                            {model.attachments.map(a => (
                                <li key={a.name}><a href={a.href}>{a.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* printable */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Order</span><span className="v">{model.orderId}</span></div>
                            <div className="line"><span className="k">Item</span><span className="v">{model.id}</span></div>
                            <div className="line"><span className="k">Product</span><span className="v">{model.product.name} ({model.product.sku})</span></div>
                            <div className="line"><span className="k">Qty</span><span className="v">{model.quantity.ordered} {model.quantity.uom}</span></div>
                            <div className="line"><span className="k">Total</span><span className="v">{model.pricing.total}</span></div>
                            <div className="line"><span className="k">Status</span><span className="v">{model.status}</span></div>
                            <div className="line"><span className="k">Updated</span><span className="v">{fmt(model.updatedAt, true)}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default OrderItemDetail;
