import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- tiny date utils (global formatting rule) ---------- */
const fmtDate = (d, withTime = false) => {
    const dd = d instanceof Date ? d : new Date(d);
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dd.getDay()];
    const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][dd.getMonth()];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${day} ${mon} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ---------- demo fixtures (display-only) ---------- */
const DATA = [
    {
        id: "attr-color",
        name: "Color",
        code: "color",
        type: "select",
        multi: true,
        options: ["Black", "White", "Blue", "Red", "Silver", "Grey"],
        usedIn: 142,
        groups: ["Catalog", "Variants"],
        required: false,
        updated: "2025-10-04T12:28:10+05:30"
    },
    {
        id: "attr-size",
        name: "Size",
        code: "size",
        type: "select",
        multi: false,
        options: ["XS", "S", "M", "L", "XL", "XXL"],
        usedIn: 126,
        groups: ["Catalog", "Variants"],
        required: true,
        updated: "2025-10-04T09:40:03+05:30"
    },
    {
        id: "attr-material",
        name: "Material",
        code: "material",
        type: "text",
        multi: false,
        options: [],
        usedIn: 88,
        groups: ["Catalog", "Specs"],
        required: false,
        updated: "2025-10-03T17:22:31+05:30"
    },
    {
        id: "attr-weight",
        name: "Weight",
        code: "weight",
        type: "number",
        unit: "g",
        min: 1,
        max: 100000,
        step: 1,
        usedIn: 71,
        groups: ["Logistics", "Specs"],
        required: false,
        updated: "2025-10-02T19:11:45+05:30"
    },
    {
        id: "attr-brand",
        name: "Brand",
        code: "brand",
        type: "select",
        multi: false,
        options: ["Aurelia", "NorthPeak", "UrbanGo", "Mistral", "EdgeX"],
        usedIn: 97,
        groups: ["Catalog", "Marketing"],
        required: false,
        updated: "2025-10-01T13:05:10+05:30"
    },
    {
        id: "attr-expiry",
        name: "Expiry Date",
        code: "expiry",
        type: "date",
        usedIn: 54,
        groups: ["Compliance", "Medicines"],
        required: false,
        updated: "2025-09-28T10:18:55+05:30"
    },
    {
        id: "attr-hsn",
        name: "HSN",
        code: "hsn",
        type: "text",
        usedIn: 39,
        groups: ["Tax", "Compliance"],
        required: true,
        updated: "2025-09-26T16:10:21+05:30"
    },
    {
        id: "attr-batch",
        name: "Batch",
        code: "batch",
        type: "text",
        usedIn: 60,
        groups: ["Medicines", "Inventory"],
        required: true,
        updated: "2025-09-25T20:02:41+05:30"
    }
];

/* ---------- self-made non-blocking dialog for demo actions ---------- */
const DemoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer><button onClick={onClose} className="btnPrimary">OK</button></footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const AttributesPage = () => {
    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("all"); // all|select|text|number|date
    const [groupFilter, setGroupFilter] = useState("all"); // all or any group
    const [sort, setSort] = useState("name-asc"); // name-asc|name-desc|used-desc|updated-desc
    const [banner, setBanner] = useState("");
    const [demoOpen, setDemoOpen] = useState(false);
    const searchRef = useRef(null);
    const printRef = useRef(null);

    useEffect(() => {
        const raf = requestAnimationFrame(() => {
            try { searchRef.current?.focus({ preventScroll: true }); } catch { searchRef.current?.focus(); }
        });
        return () => cancelAnimationFrame(raf);
    }, []);

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3500);
        return () => clearTimeout(t);
    }, [banner]);

    const groupsUniverse = useMemo(() => {
        const s = new Set();
        DATA.forEach(a => (a.groups || []).forEach(g => s.add(g)));
        return ["all", ...Array.from(s)];
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let out = DATA.filter(a => {
            const matchesQ =
                !q ||
                a.name.toLowerCase().includes(q) ||
                a.code.toLowerCase().includes(q) ||
                (a.options || []).some(o => o.toLowerCase().includes(q)) ||
                (a.groups || []).some(g => g.toLowerCase().includes(q));
            const matchesType = typeFilter === "all" || a.type === typeFilter;
            const matchesGroup = groupFilter === "all" || (a.groups || []).includes(groupFilter);
            return matchesQ && matchesType && matchesGroup;
        });

        switch (sort) {
            case "name-desc": out = out.sort((a, b) => b.name.localeCompare(a.name)); break;
            case "used-desc": out = out.sort((a, b) => (b.usedIn || 0) - (a.usedIn || 0)); break;
            case "updated-desc": out = out.sort((a, b) => new Date(b.updated) - new Date(a.updated)); break;
            default: out = out.sort((a, b) => a.name.localeCompare(b.name)); // name-asc
        }
        return out;
    }, [query, typeFilter, groupFilter, sort]);

    const exportJson = () => {
        const blob = new Blob([JSON.stringify(filtered, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "attributes.json";
        document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
        setBanner(`Exported ${filtered.length} attributes at ${fmtDate(new Date(), true)}`);
    };

    const copyDeepLink = () => {
        const url = window.location.href;
        navigator.clipboard?.writeText(url);
        setBanner("Link copied");
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const openDemoDialog = () => setDemoOpen(true);

    const totals = useMemo(() => {
        const all = DATA.length;
        const byType = {
            select: DATA.filter(d => d.type === "select").length,
            text: DATA.filter(d => d.type === "text").length,
            number: DATA.filter(d => d.type === "number").length,
            date: DATA.filter(d => d.type === "date").length,
        };
        const lastUpdated = DATA.map(d => new Date(d.updated)).sort((a, b) => b - a)[0];
        return { all, byType, lastUpdated };
    }, []);

    return (
        <Styled.Page>
            {/* print CSS (section-only, exactly as required) */}
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
                    <h1>Attributes</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/products">Products</NavLink>
                        <span>/</span>
                        <span className="current">Attributes</span>
                    </nav>
                    <div className="meta">
                        <span>Total: {totals.all}</span>
                        <span>•</span>
                        <span>Updated: {fmtDate(totals.lastUpdated, true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={copyDeepLink} title="Copy page link">Copy Link</button>
                    <button className="btnGhost" onClick={exportJson} title="Export as JSON">Export</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnPrimary" onClick={openDemoDialog} title="Create new attribute (demo)">
                        New Attribute
                    </button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Layout>
                {/* Main column */}
                <section className="main">
                    <div className="toolbar card">
                        <div className="search">
                            <input
                                ref={searchRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search name, code, option, group…"
                                aria-label="Search attributes"
                            />
                        </div>
                        <div className="filters">
                            <label>
                                Type
                                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                                    <option value="all">All</option>
                                    <option value="select">Select</option>
                                    <option value="text">Text</option>
                                    <option value="number">Number</option>
                                    <option value="date">Date</option>
                                </select>
                            </label>
                            <label>
                                Group
                                <select value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)}>
                                    {groupsUniverse.map(g => <option key={g} value={g}>{g}</option>)}
                                </select>
                            </label>
                            <label>
                                Sort
                                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                                    <option value="name-asc">Name ↑</option>
                                    <option value="name-desc">Name ↓</option>
                                    <option value="used-desc">Used In ↓</option>
                                    <option value="updated-desc">Updated ↓</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="statsRow">
                        <div className="stat card">
                            <div className="k">Select</div>
                            <div className="v">{totals.byType.select}</div>
                        </div>
                        <div className="stat card">
                            <div className="k">Text</div>
                            <div className="v">{totals.byType.text}</div>
                        </div>
                        <div className="stat card">
                            <div className="k">Number</div>
                            <div className="v">{totals.byType.number}</div>
                        </div>
                        <div className="stat card">
                            <div className="k">Date</div>
                            <div className="v">{totals.byType.date}</div>
                        </div>
                    </div>

                    <div className="tableWrap card">
                        <table>
                            <thead>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Code</th>
                                    <th>Input</th>
                                    <th>Options</th>
                                    <th>Groups</th>
                                    <th className="num">Used In</th>
                                    <th>Required</th>
                                    <th>Updated</th>
                                    <th className="actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map(a => (
                                    <tr key={a.id}>
                                        <td>
                                            <div className="nameCell">
                                                <span className="name">{a.name}</span>
                                                <span className="id">{a.id}</span>
                                            </div>
                                        </td>
                                        <td><code className="code">{a.code}</code></td>
                                        <td>
                                            <span className={`chip type ${a.type}`}>{a.type}{a.multi ? " (multi)" : ""}</span>
                                        </td>
                                        <td className="optionsCell">
                                            {a.options && a.options.length
                                                ? a.options.slice(0, 4).map(o => <span className="chip opt" key={o}>{o}</span>)
                                                : <span className="muted">—</span>}
                                            {a.options && a.options.length > 4 ? <span className="more">+{a.options.length - 4}</span> : null}
                                        </td>
                                        <td>
                                            <div className="groups">
                                                {(a.groups || []).map(g => <span className="chip group" key={g}>{g}</span>)}
                                            </div>
                                        </td>
                                        <td className="num">{a.usedIn ?? 0}</td>
                                        <td>{a.required ? "Yes" : "No"}</td>
                                        <td title={fmtDate(a.updated, true)}>{fmtDate(a.updated)}</td>
                                        <td className="actions">
                                            <button className="btnGhost small" onClick={openDemoDialog} title="View (demo)">View</button>
                                            <button className="btnGhost small" onClick={openDemoDialog} title="Edit (demo)">Edit</button>
                                            <button className="btnGhost small" onClick={openDemoDialog} title="Delete (demo)">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {!filtered.length && (
                                    <tr>
                                        <td colSpan={9} className="empty">
                                            <div className="emptyBlock">
                                                <div className="big">No attributes match your filters</div>
                                                <div className="muted">Try clearing search or switching Type/Group.</div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="pager card">
                        <div className="hint">Page 1 of 1</div>
                        <div className="buttons">
                            <button className="btnGhost" disabled>Prev</button>
                            <button className="btnGhost" disabled>Next</button>
                        </div>
                    </div>
                </section>

                {/* Right sidebar */}
                <aside className="side">
                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/products">All Products</NavLink></li>
                            <li><NavLink to="/categories">Categories</NavLink></li>
                            <li><NavLink to="/products/brands">Brands</NavLink></li>
                            <li><NavLink to="/inventory">Inventory</NavLink></li>
                            <li><NavLink to="/reports/inventory">Inventory Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Taxonomy</h3>
                        <ul className="tree">
                            <li>
                                Catalog
                                <ul>
                                    <li>Attributes</li>
                                    <li>Variants</li>
                                    <li>Price Lists</li>
                                </ul>
                            </li>
                            <li>
                                Logistics
                                <ul>
                                    <li>Weight</li>
                                    <li>Dimensions</li>
                                </ul>
                            </li>
                            <li>
                                Compliance
                                <ul>
                                    <li>HSN</li>
                                    <li>Expiry</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Printable summary */}
                    <div className="card printCard" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="grid">
                            <div><div className="k">Total</div><div className="v">{totals.all}</div></div>
                            <div><div className="k">Select</div><div className="v">{totals.byType.select}</div></div>
                            <div><div className="k">Text</div><div className="v">{totals.byType.text}</div></div>
                            <div><div className="k">Number</div><div className="v">{totals.byType.number}</div></div>
                            <div><div className="k">Date</div><div className="v">{totals.byType.date}</div></div>
                            <div className="full">
                                <div className="k">Last Updated</div>
                                <div className="v">{fmtDate(totals.lastUpdated, true)}</div>
                            </div>
                        </div>
                        <div className="list">
                            {DATA.slice(0, 6).map(a => (
                                <div className="line" key={a.id}>
                                    <span className="n">{a.name}</span>
                                    <span className="m">{a.type}{a.multi ? " (multi)" : ""}</span>
                                    <span className="t">{fmtDate(a.updated)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <h3>Schema Preview</h3>
                        <pre className="schema" aria-label="Attribute JSON schema">
                            {`{
  "id": "attr-size",
  "name": "Size",
  "code": "size",
  "type": "select",
  "multi": false,
  "options": ["XS","S","M","L","XL","XXL"],
  "groups": ["Catalog","Variants"],
  "required": true,
  "updated": "2025-10-04T09:40:03+05:30"
}`}
                        </pre>
                        <div className="muted small">This is illustrative—data here is static for the demo.</div>
                    </div>
                </aside>
            </Styled.Layout>

            <DemoDialog
                open={demoOpen}
                title="Demo mode"
                message="This is a display-only preview. Actions like create, edit or delete are disabled."
                onClose={() => setDemoOpen(false)}
            />
        </Styled.Page>
    );
};

export default AttributesPage;
