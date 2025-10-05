import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* ------------------------------------------
   Date formatting helpers (single source)
------------------------------------------- */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ------------------------------------------
   Demo fixtures (display-only)
   (pre-computed totals, human IDs, relations)
------------------------------------------- */
const DEMO_CATEGORIES = [
    {
        id: "CAT-ELC",
        name: "Electronics",
        code: "ELC",
        parent: null,
        productCount: 248,
        attributesCount: 12,
        path: "Electronics",
        tags: ["Top", "Seasonal"],
        cover: "/covers/electronics.jpg",
        createdAt: "2025-07-18T11:42:12+05:30",
        updatedAt: "2025-10-04T15:38:20+05:30",
        status: "active",
    },
    {
        id: "CAT-MOB",
        name: "Mobile Phones",
        code: "MOB",
        parent: "CAT-ELC",
        productCount: 96,
        attributesCount: 9,
        path: "Electronics › Mobile Phones",
        tags: ["Hot"],
        cover: "/covers/mobiles.jpg",
        createdAt: "2025-08-02T09:10:01+05:30",
        updatedAt: "2025-10-04T13:25:11+05:30",
        status: "active",
    },
    {
        id: "CAT-LAP",
        name: "Laptops",
        code: "LAP",
        parent: "CAT-ELC",
        productCount: 72,
        attributesCount: 11,
        path: "Electronics › Laptops",
        tags: ["B2B"],
        cover: "/covers/laptops.jpg",
        createdAt: "2025-06-22T10:03:21+05:30",
        updatedAt: "2025-10-03T19:12:44+05:30",
        status: "active",
    },
    {
        id: "CAT-ACC",
        name: "Accessories",
        code: "ACC",
        parent: "CAT-ELC",
        productCount: 80,
        attributesCount: 7,
        path: "Electronics › Accessories",
        tags: ["Add-on"],
        cover: "/covers/accessories.jpg",
        createdAt: "2025-03-11T18:28:19+05:30",
        updatedAt: "2025-10-01T10:48:10+05:30",
        status: "active",
    },
    {
        id: "CAT-HHC",
        name: "Health & Hygiene",
        code: "HHC",
        parent: null,
        productCount: 56,
        attributesCount: 6,
        path: "Health & Hygiene",
        tags: ["Essentials"],
        cover: "/covers/health.jpg",
        createdAt: "2025-02-01T08:17:55+05:30",
        updatedAt: "2025-09-29T16:02:01+05:30",
        status: "active",
    },
    {
        id: "CAT-DIS",
        name: "Discontinued",
        code: "DIS",
        parent: null,
        productCount: 14,
        attributesCount: 3,
        path: "Discontinued",
        tags: ["Archive"],
        cover: "/covers/archive.jpg",
        createdAt: "2024-12-12T12:30:10+05:30",
        updatedAt: "2025-08-18T12:00:00+05:30",
        status: "inactive",
    },
];

/* ------------------------------------------
   Utilities
------------------------------------------- */
const BASE_URL = (import.meta.env.BASE_URL || "/").replace(/\/+$/, ""); // e.g. /react-routes-theme

const CategoriesList = () => {
    // local UI state (display-only)
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all"); // all | active | inactive
    const [sort, setSort] = useState("updated-desc");
    const [banner, setBanner] = useState("");
    const [gridMode, setGridMode] = useState(true);
    const printRef = useRef(null);

    // ephemeral banner
    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3000);
        return () => clearTimeout(t);
    }, [banner]);

    // derived list
    const list = useMemo(() => {
        let rows = DEMO_CATEGORIES.slice();

        // filter by status
        if (status !== "all") {
            rows = rows.filter(r => r.status === status);
        }
        // text search
        const text = q.trim().toLowerCase();
        if (text) {
            rows = rows.filter(r => {
                const hay = `${r.name} ${r.code} ${r.path} ${r.tags.join(" ")}`.toLowerCase();
                return hay.includes(text);
            });
        }
        // sort
        rows.sort((a, b) => {
            if (sort === "name-asc") return a.name.localeCompare(b.name);
            if (sort === "name-desc") return b.name.localeCompare(a.name);
            if (sort === "updated-asc") return new Date(a.updatedAt) - new Date(b.updatedAt);
            // default updated-desc
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        return rows;
    }, [q, status, sort]);

    const totalActive = useMemo(() => DEMO_CATEGORIES.filter(x => x.status === "active").length, []);
    const totalInactive = useMemo(() => DEMO_CATEGORIES.filter(x => x.status !== "active").length, []);
    const totalProducts = useMemo(() => DEMO_CATEGORIES.reduce((n, x) => n + x.productCount, 0), []);

    const copyLink = async (catId) => {
        const deep = `${window.location.origin}${BASE_URL}/categories?cat=${encodeURIComponent(catId)}`;
        try {
            await navigator.clipboard.writeText(deep);
            setBanner("Link copied");
        } catch {
            setBanner("Could not copy link");
        }
    };

    const exportJson = () => {
        const payload = {
            exportedAt: fmt(new Date(), true),
            count: list.length,
            items: list
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `categories-export-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        setBanner("Export ready");
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
        <Styled.Page className="container">
            {/* print CSS for this page */}
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
                    <h1>Categories</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/products">Products</NavLink>
                        <span>/</span>
                        <span className="current">Categories</span>
                    </nav>
                    <div className="meta">
                        <span>Total Categories: {DEMO_CATEGORIES.length}</span>
                        <span>•</span>
                        <span>Active: {totalActive}</span>
                        <span>•</span>
                        <span>Inactive: {totalInactive}</span>
                        <span>•</span>
                        <span>Mapped Products: {totalProducts}</span>
                    </div>
                </div>

                <div className="right actions">
                    <div className="viewToggle" role="group" aria-label="View mode">
                        <button
                            className={!gridMode ? "btnGhost small" : "btnPrimary small"}
                            onClick={() => setGridMode(true)}
                            title="Grid view"
                        >
                            Grid
                        </button>
                        <button
                            className={gridMode ? "btnGhost small" : "btnPrimary small"}
                            onClick={() => setGridMode(false)}
                            title="Table view"
                        >
                            Table
                        </button>
                    </div>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnPrimary" onClick={exportJson} title="Export as JSON">Export</button>
                    <button className="btnGhost" title="Demo only" disabled>New Category</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="field">
                        <label htmlFor="q">Search</label>
                        <input
                            id="q"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search name, code, tags…"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="status">Status</label>
                        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="sort">Sort</label>
                        <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="updated-desc">Updated (new → old)</option>
                            <option value="updated-asc">Updated (old → new)</option>
                            <option value="name-asc">Name A → Z</option>
                            <option value="name-desc">Name Z → A</option>
                        </select>
                    </div>
                </div>

                <div className="chips">
                    <span className={`chip ${status === "all" ? "active" : ""}`} onClick={() => setStatus("all")}>All</span>
                    <span className={`chip ${status === "active" ? "active" : ""}`} onClick={() => setStatus("active")}>Active</span>
                    <span className={`chip ${status === "inactive" ? "active" : ""}`} onClick={() => setStatus("inactive")}>Inactive</span>
                    {q && <span className="chip clear" onClick={() => setQ("")}>Clear Search</span>}
                </div>
            </Styled.Toolbar>

            {/* Grid or Table */}
            {gridMode ? (
                <Styled.GridCards>
                    {list.map(cat => (
                        <div className="card category" key={cat.id}>
                            <div className="cover" style={{ backgroundImage: `url(${cat.cover || "/covers/placeholder.jpg"})` }} />
                            <div className="body">
                                <div className="topline">
                                    <h3 className="name">{cat.name}</h3>
                                    <span className={`status ${cat.status}`}>{cat.status}</span>
                                </div>
                                <div className="meta">
                                    <span className="code">{cat.code}</span>
                                    <span>•</span>
                                    <span>{cat.productCount} items</span>
                                </div>
                                <div className="path">{cat.path}</div>
                                <div className="tags">
                                    {cat.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                                <div className="dates">
                                    <span>Updated: {fmt(cat.updatedAt, true)}</span>
                                </div>
                            </div>
                            <div className="actions">
                                <NavLink to="/products" className="btnGhost small" title="Open products">Open</NavLink>
                                <button className="btnGhost small" onClick={() => copyLink(cat.id)} title="Copy deep link">Copy Link</button>
                            </div>
                        </div>
                    ))}
                    {!list.length && (
                        <Styled.Empty className="card">
                            <h3>No categories match.</h3>
                            <p>Try changing filters or clearing the search.</p>
                        </Styled.Empty>
                    )}
                </Styled.GridCards>
            ) : (
                <Styled.TableWrap className="card">
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Code</th>
                                <th>Parent</th>
                                <th>Items</th>
                                <th>Attributes</th>
                                <th>Status</th>
                                <th>Updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(cat => (
                                <tr key={cat.id}>
                                    <td>
                                        <div className="cellName">
                                            <div className="avatar" style={{ backgroundImage: `url(${cat.cover || "/covers/placeholder.jpg"})` }} />
                                            <div className="col">
                                                <div className="name">{cat.name}</div>
                                                <div className="path">{cat.path}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="code">{cat.code}</span></td>
                                    <td>{cat.parent || "-"}</td>
                                    <td className="num">{cat.productCount}</td>
                                    <td className="num">{cat.attributesCount}</td>
                                    <td><span className={`pill ${cat.status}`}>{cat.status}</span></td>
                                    <td>{fmt(cat.updatedAt, true)}</td>
                                    <td className="actions">
                                        <NavLink to="/products" className="btnGhost tiny" title="Open products">Open</NavLink>
                                        <button className="btnGhost tiny" onClick={() => copyLink(cat.id)} title="Copy deep link">Copy</button>
                                    </td>
                                </tr>
                            ))}
                            {!list.length && (
                                <tr><td colSpan={8}>
                                    <Styled.EmptyPad>
                                        <h4>No categories found.</h4>
                                        <p>Adjust filters to see results.</p>
                                    </Styled.EmptyPad>
                                </td></tr>
                            )}
                        </tbody>
                    </table>
                </Styled.TableWrap>
            )}

            {/* Printable summary (uses the required id) */}
            <div id="search-print-area" ref={printRef} className="card" style={{ marginTop: 16 }}>
                <h3>Categories Summary</h3>
                <div className="summaryGrid">
                    <div><div className="k">Exported</div><div className="v">{fmt(new Date(), true)}</div></div>
                    <div><div className="k">Total</div><div className="v">{DEMO_CATEGORIES.length}</div></div>
                    <div><div className="k">Active</div><div className="v">{totalActive}</div></div>
                    <div><div className="k">Inactive</div><div className="v">{totalInactive}</div></div>
                    <div><div className="k">Mapped Products</div><div className="v">{totalProducts}</div></div>
                </div>
                <div className="lines">
                    {DEMO_CATEGORIES.slice(0, 6).map(c => (
                        <div className="line" key={c.id}>
                            <span className="name">{c.name}</span>
                            <span className="sep">•</span>
                            <span className="meta">{c.code} / {c.productCount} items / {fmt(c.updatedAt)}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer meta (optional) */}
            <Styled.Footnote className="muted">
                <div>Build: {typeof __APP_BUILD_ISO__ !== "undefined" ? fmt(__APP_BUILD_ISO__, true) : "—"}</div>
                <div>Commit: {typeof __APP_COMMIT_ISO__ !== "undefined" ? fmt(__APP_COMMIT_ISO__, true) : "—"}</div>
            </Styled.Footnote>
        </Styled.Page>
    );
};

export default CategoriesList;
