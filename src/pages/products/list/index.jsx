import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

// --- tiny date utils with the exact formats you use everywhere
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

// --- demo fixtures (display-only)
const FIXED_PRODUCTS = [
    {
        id: "MED-AMOX-500",
        name: "Amoxicillin 500mg Capsule",
        sku: "AMOX-500-CAP",
        brand: "PharmaOne",
        category: "Antibiotics",
        mrp: "₹120.00",
        pack: "Strip of 10",
        status: "Active",
        hsn: "300490",
        gst: "12%",
        stock: 240,
        reorder: 50,
        expiry: "2026-03-31",
        tags: ["Rx", "Cold-Chain:No"],
    },
    {
        id: "MED-AZTH-250",
        name: "Azithromycin 250mg Tablet",
        sku: "AZTH-250-TAB",
        brand: "MediCore",
        category: "Antibiotics",
        mrp: "₹98.00",
        pack: "Strip of 6",
        status: "Active",
        hsn: "300420",
        gst: "12%",
        stock: 34,
        reorder: 40,
        expiry: "2026-12-31",
        tags: ["Rx"],
    },
    {
        id: "MED-PARA-650",
        name: "Paracetamol 650mg Tablet",
        sku: "PARA-650-TAB",
        brand: "GoodHealth",
        category: "Analgesics",
        mrp: "₹28.00",
        pack: "Strip of 15",
        status: "Active",
        hsn: "300450",
        gst: "12%",
        stock: 0,
        reorder: 100,
        expiry: "2027-05-31",
        tags: ["OTC", "Bestseller"],
    },
    {
        id: "MED-IBUP-400",
        name: "Ibuprofen 400mg Tablet",
        sku: "IBUP-400-TAB",
        brand: "MediCore",
        category: "Analgesics",
        mrp: "₹52.00",
        pack: "Strip of 10",
        status: "Active",
        hsn: "300450",
        gst: "12%",
        stock: 12,
        reorder: 30,
        expiry: "2025-12-31",
        tags: ["OTC"],
    },
    {
        id: "MED-OMEP-20",
        name: "Omeprazole 20mg Capsule",
        sku: "OMEP-20-CAP",
        brand: "Healix",
        category: "Gastro",
        mrp: "₹75.00",
        pack: "Strip of 20",
        status: "Active",
        hsn: "300490",
        gst: "12%",
        stock: 410,
        reorder: 100,
        expiry: "2026-10-31",
        tags: ["Rx"],
    },
    {
        id: "MED-ATOR-10",
        name: "Atorvastatin 10mg Tablet",
        sku: "ATOR-10-TAB",
        brand: "PharmaOne",
        category: "Cardiac",
        mrp: "₹135.00",
        pack: "Strip of 10",
        status: "Active",
        hsn: "300490",
        gst: "12%",
        stock: 76,
        reorder: 40,
        expiry: "2027-02-28",
        tags: ["Rx", "Chronic"],
    },
    {
        id: "MED-RANT-150",
        name: "Ranitidine 150mg Tablet",
        sku: "RANT-150-TAB",
        brand: "GenoMed",
        category: "Gastro",
        mrp: "₹46.00",
        pack: "Strip of 14",
        status: "Discontinued",
        hsn: "300490",
        gst: "12%",
        stock: 0,
        reorder: 0,
        expiry: "2024-12-31",
        tags: ["Legacy"],
    },
    {
        id: "MED-MULT-ADL",
        name: "Multivitamin Adult",
        sku: "MULT-ADL-CAP",
        brand: "GoodHealth",
        category: "Supplements",
        mrp: "₹199.00",
        pack: "Bottle of 60",
        status: "Active",
        hsn: "210690",
        gst: "18%",
        stock: 155,
        reorder: 60,
        expiry: "2027-08-31",
        tags: ["OTC"],
    },
    {
        id: "MED-VITC-500",
        name: "Vitamin C 500mg Tablet",
        sku: "VITC-500-TAB",
        brand: "NutraPlus",
        category: "Supplements",
        mrp: "₹120.00",
        pack: "Bottle of 100",
        status: "Active",
        hsn: "210690",
        gst: "18%",
        stock: 5,
        reorder: 40,
        expiry: "2026-01-31",
        tags: ["OTC", "Seasonal"],
    },
    {
        id: "MED-ORS-20",
        name: "ORS Powder 20.5g",
        sku: "ORS-20-SAT",
        brand: "HydroCare",
        category: "Electrolytes",
        mrp: "₹20.00",
        pack: "Sachet",
        status: "Active",
        hsn: "300490",
        gst: "12%",
        stock: 320,
        reorder: 80,
        expiry: "2028-03-31",
        tags: ["OTC", "ESSENTIAL"],
    },
    {
        id: "MED-CETI-10",
        name: "Cetirizine 10mg Tablet",
        sku: "CETI-10-TAB",
        brand: "MediCore",
        category: "Anti-Allergic",
        mrp: "₹18.00",
        pack: "Strip of 10",
        status: "Active",
        hsn: "300490",
        gst: "12%",
        stock: 90,
        reorder: 30,
        expiry: "2026-04-30",
        tags: ["OTC"],
    },
    {
        id: "MED-METF-500",
        name: "Metformin 500mg Tablet",
        sku: "METF-500-TAB",
        brand: "Healix",
        category: "Diabetes",
        mrp: "₹36.00",
        pack: "Strip of 10",
        status: "Active",
        hsn: "300490",
        gst: "12%",
        stock: 260,
        reorder: 80,
        expiry: "2027-11-30",
        tags: ["Rx", "Chronic"],
    },
];

// non-blocking demo prompt (no browser alert)
const DemoDialog = ({ open, onClose, title = "Demo only", message = "This action is disabled in the demo." }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>Okay</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const ProductsList = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("all"); // all | active | discontinued
    const [brand, setBrand] = useState("all");
    const [category, setCategory] = useState("all");
    const [demoOpen, setDemoOpen] = useState(false);
    const searchRef = useRef(null);
    const printRef = useRef(null);

    // focus on mount
    useEffect(() => {
        const el = searchRef.current;
        if (!el) return;
        const id = requestAnimationFrame(() => {
            try { el.focus({ preventScroll: true }); } catch { el.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    const brands = useMemo(() => Array.from(new Set(FIXED_PRODUCTS.map(p => p.brand))).sort(), []);
    const categories = useMemo(() => Array.from(new Set(FIXED_PRODUCTS.map(p => p.category))).sort(), []);

    const data = useMemo(() => {
        const q = query.trim().toLowerCase();
        return FIXED_PRODUCTS.filter(p => {
            if (status !== "all" && ((status === "active" && p.status !== "Active") || (status === "discontinued" && p.status !== "Discontinued"))) {
                return false;
            }
            if (brand !== "all" && p.brand !== brand) return false;
            if (category !== "all" && p.category !== category) return false;
            if (!q) return true;
            const hay = `${p.name} ${p.sku} ${p.brand} ${p.category} ${p.id} ${p.hsn}`.toLowerCase();
            return q.split(/\s+/).every(t => hay.includes(t));
        });
    }, [query, status, brand, category]);

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
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "products.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const now = new Date();

    return (
        <Styled.Page>
            {/* print CSS (scoped snippet) */}
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
                    <h1>Products</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/home">Home</NavLink><span>/</span><span className="current">Products</span>
                    </nav>
                    <div className="meta">
                        <span>Last refreshed: {fmt(now, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => setDemoOpen(true)} title="Disabled in demo">New Product</button>
                    <button className="btnGhost" onClick={() => setDemoOpen(true)} title="Disabled in demo">Bulk Edit</button>
                    <button className="btnGhost" onClick={() => setDemoOpen(true)} title="Disabled in demo">Import</button>
                    <button className="btnPrimary" onClick={exportJson}>Export JSON</button>
                    <button className="btnPrimary" onClick={printSection}>Print</button>
                </div>
            </Styled.Header>

            {/* Top summary (static for demo feel) */}
            <Styled.Summary>
                <div className="card stat">
                    <div className="k">Total SKUs</div>
                    <div className="v">2,480</div>
                    <div className="s">as of {fmt(now)}</div>
                </div>
                <div className="card stat">
                    <div className="k">Brands</div>
                    <div className="v">112</div>
                    <div className="s">active</div>
                </div>
                <div className="card stat">
                    <div className="k">Categories</div>
                    <div className="v">58</div>
                    <div className="s">catalog</div>
                </div>
                <div className="card stat">
                    <div className="k">Near Expiry</div>
                    <div className="v">17</div>
                    <div className="s">next 90 days</div>
                </div>
                <div className="card stat">
                    <div className="k">Out of Stock</div>
                    <div className="v">4</div>
                    <div className="s">critical</div>
                </div>
            </Styled.Summary>

            <Styled.Toolbar className="card">
                <div className="filters">
                    <div className="search">
                        <input
                            ref={searchRef}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search name, SKU, brand, HSN… (Ctrl + K)"
                            aria-label="Search products"
                        />
                    </div>

                    <div className="seg">
                        <button
                            className={status === "all" ? "seg active" : "seg"}
                            onClick={() => setStatus("all")}
                        >All</button>
                        <button
                            className={status === "active" ? "seg active" : "seg"}
                            onClick={() => setStatus("active")}
                        >Active</button>
                        <button
                            className={status === "discontinued" ? "seg active" : "seg"}
                            onClick={() => setStatus("discontinued")}
                        >Discontinued</button>
                    </div>

                    <div className="pickers">
                        <label>
                            <span>Brand</span>
                            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                                <option value="all">All</option>
                                {brands.map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                        </label>
                        <label>
                            <span>Category</span>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="all">All</option>
                                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </label>
                    </div>
                </div>

                <div className="legend">
                    <span className="pill info">Active</span>
                    <span className="pill warn">Low</span>
                    <span className="pill danger">OOS</span>
                    <span className="pill mute">Discontinued</span>
                </div>
            </Styled.Toolbar>

            <Styled.TableWrap className="card">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: 220 }}>Product</th>
                            <th>SKU</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Pack</th>
                            <th>MRP</th>
                            <th>HSN</th>
                            <th>GST</th>
                            <th className="right">Stock</th>
                            <th className="right">Reorder</th>
                            <th>Expiry</th>
                            <th style={{ width: 160 }}>Status</th>
                            <th style={{ width: 140 }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((p) => {
                            const low = p.stock > 0 && p.stock <= p.reorder;
                            const oos = p.stock === 0;
                            return (
                                <tr key={p.id}>
                                    <td>
                                        <div className="name">
                                            <NavLink to={`/products/${p.id}`} className="link">{p.name}</NavLink>
                                            <div className="sub">#{p.id}</div>
                                        </div>
                                    </td>
                                    <td><code className="mono">{p.sku}</code></td>
                                    <td>{p.brand}</td>
                                    <td>{p.category}</td>
                                    <td>{p.pack}</td>
                                    <td>{p.mrp}</td>
                                    <td>{p.hsn}</td>
                                    <td>{p.gst}</td>
                                    <td className="right">{p.stock}</td>
                                    <td className="right">{p.reorder}</td>
                                    <td>{p.expiry ? fmt(p.expiry) : "-"}</td>
                                    <td>
                                        <div className="tags">
                                            {p.status === "Active" && <span className="pill info">Active</span>}
                                            {p.status === "Discontinued" && <span className="pill mute">Discontinued</span>}
                                            {low && <span className="pill warn">Low</span>}
                                            {oos && <span className="pill danger">OOS</span>}
                                            {p.tags?.map(t => <span className="chip" key={t}>{t}</span>)}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="rowActions">
                                            <NavLink to={`/products/${p.id}`} className="btnLink">View</NavLink>
                                            <button className="btnLink" onClick={() => setDemoOpen(true)} title="Disabled in demo">Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan={13}>
                                    <div className="empty">
                                        <div className="title">No products found</div>
                                        <div className="sub">Try another search or clear filters.</div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="footerBar">
                    <div className="left">
                        <span>Rows: {data.length}</span>
                    </div>
                    <div className="right">
                        <button className="btnGhost" onClick={() => setDemoOpen(true)} title="Disabled in demo">‹ Prev</button>
                        <span className="page">Page 1 of 120</span>
                        <button className="btnGhost" onClick={() => setDemoOpen(true)} title="Disabled in demo">Next ›</button>
                    </div>
                </div>
            </Styled.TableWrap>

            {/* Printable snapshot */}
            <Styled.PrintCard className="card" id="search-print-area" ref={printRef}>
                <h3>Products Snapshot</h3>
                <div className="grid">
                    <div><div className="k">Generated</div><div className="v">{fmt(now, true)}</div></div>
                    <div><div className="k">Products Shown</div><div className="v">{data.length}</div></div>
                    <div><div className="k">Brands (total)</div><div className="v">112</div></div>
                    <div><div className="k">Categories (total)</div><div className="v">58</div></div>
                </div>
                <div className="note">This is a demo printout. Values shown for brand/category totals are representative.</div>
            </Styled.PrintCard>

            <DemoDialog open={demoOpen} onClose={() => setDemoOpen(false)} />
        </Styled.Page>
    );
};

export default ProductsList;
