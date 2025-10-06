import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

/* date/time formatters (consistent everywhere)
   - Date: Sat Oct 04 2025
   - DateTime: Sat Oct 04 2025 15:38:20hrs
   - Time: 15:38:20hrs
*/
const fmt = (d, withTime = false) => {
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

/* Demo fixtures (display-only; no network / no localStorage) */
const FIX = {
    customers: [
        { id: "CUST-1001", name: "Aarav Sharma", email: "aarav.sharma@example.com", phone: "+91 98765 43210", tags: ["priority", "wholesale"], updatedAt: "2025-10-04T10:15:10+05:30" },
        { id: "CUST-1002", name: "Isha Verma", email: "isha.verma@example.com", phone: "+91 98765 41230", tags: ["north"], updatedAt: "2025-09-20T18:05:00+05:30" },
    ],
    orders: [
        { id: "ORD-3456", customerId: "CUST-1001", customer: "Aarav Sharma", status: "Packed", total: "₹ 84,300", updatedAt: "2025-10-03T19:28:20+05:30" },
        { id: "ORD-3461", customerId: "CUST-1002", customer: "Isha Verma", status: "Pending", total: "₹ 12,990", updatedAt: "2025-09-29T16:05:21+05:30" },
    ],
    products: [
        { id: "PROD-AX12", name: "Thermal Label Printer X12", sku: "AX12-THERM", category: "Hardware", price: "₹ 8,999", updatedAt: "2025-09-28T09:00:00+05:30" },
        { id: "PROD-SCAN9", name: "Handheld Scanner S9", sku: "SCAN-9", category: "Hardware", price: "₹ 4,499", updatedAt: "2025-09-11T15:21:15+05:30" },
    ],
    medicines: [
        { id: "MED-AMOX-500", name: "Amoxicillin 500mg", form: "Capsule", strength: "500mg", mrp: "₹ 120", manufacturer: "ZenPharma", updatedAt: "2025-10-01T13:11:11+05:30" },
        { id: "MED-PARA-650", name: "Paracetamol 650mg", form: "Tablet", strength: "650mg", mrp: "₹ 35", manufacturer: "Bluewave Biotech", updatedAt: "2025-09-23T08:45:00+05:30" },
    ],
    invoices: [
        { id: "INV-2031", orderId: "ORD-3456", customer: "Aarav Sharma", amount: "₹ 84,300", status: "Sent", updatedAt: "2025-10-03T19:29:01+05:30" },
        { id: "INV-2036", orderId: "ORD-3461", customer: "Isha Verma", amount: "₹ 12,990", status: "Draft", updatedAt: "2025-09-29T16:15:00+05:30" },
    ],
    vendors: [
        { id: "VEND-901", name: "Shakti Med Supplies", city: "Mumbai", contact: "+91 99871 22334", updatedAt: "2025-09-26T12:40:00+05:30" },
        { id: "VEND-902", name: "NorthChem Traders", city: "Delhi", contact: "+91 99111 44556", updatedAt: "2025-09-14T09:40:00+05:30" },
    ],
};

const ENTITY_META = [
    { key: "customers", label: "Customers", color: "var(--accent)" },
    { key: "orders", label: "Orders", color: "var(--accent)" },
    { key: "products", label: "Products", color: "var(--accent)" },
    { key: "medicines", label: "Medicines", color: "var(--accent)" },
    { key: "invoices", label: "Invoices", color: "var(--accent)" },
    { key: "vendors", label: "Vendors", color: "var(--accent)" },
];

const SearchPage = () => {
    const location = useLocation();
    const inputRef = useRef(null);
    const [q, setQ] = useState("");
    const [enabled, setEnabled] = useState(() => {
        const init = {};
        ENTITY_META.forEach(e => (init[e.key] = true));
        return init;
    });
    const [indexedAt] = useState(() => new Date());

    // prefill from ?q= on first mount
    useEffect(() => {
        const sp = new URLSearchParams(location.search);
        const val = sp.get("q") || "";
        if (val && !q) setQ(val);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // focus search on load and support Ctrl/Cmd + K
    useEffect(() => {
        const el = inputRef.current;
        if (el) {
            const id = requestAnimationFrame(() => {
                try { el.focus({ preventScroll: true }); } catch { el.focus(); }
            });
            return () => cancelAnimationFrame(id);
        }
    }, []);
    useEffect(() => {
        const onKey = (e) => {
            const isMac = navigator.platform.toUpperCase().includes("MAC");
            if ((isMac && e.metaKey && e.key.toLowerCase() === "k") || (!isMac && e.ctrlKey && e.key.toLowerCase() === "k")) {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const toggleEntity = (key) => setEnabled(s => ({ ...s, [key]: !s[key] }));
    const enableAll = () => {
        const o = {}; ENTITY_META.forEach(e => (o[e.key] = true)); setEnabled(o);
    };
    const disableAll = () => {
        const o = {}; ENTITY_META.forEach(e => (o[e.key] = false)); setEnabled(o);
    };
    const clearQuery = () => setQ("");

    const filtered = useMemo(() => {
        const term = q.trim().toLowerCase();
        const groups = [];

        const includes = (obj, fields) =>
            term.length === 0 ||
            fields.some(f => (obj[f] || "").toString().toLowerCase().includes(term));

        ENTITY_META.forEach(({ key, label }) => {
            if (!enabled[key]) return;
            const list = FIX[key] || [];
            let rows = [];
            switch (key) {
                case "customers":
                    rows = list.filter(x => includes(x, ["id", "name", "email", "phone", "tags"])).map(x => ({
                        id: x.id, title: x.name, sub: x.email || x.phone,
                        right: x.id, when: x.updatedAt, to: `/customers/${x.id}`
                    }));
                    break;
                case "orders":
                    rows = list.filter(x => includes(x, ["id", "customer", "status", "total"])).map(x => ({
                        id: x.id, title: `${x.id} · ${x.customer}`, sub: `Status: ${x.status} · Total: ${x.total}`,
                        right: x.id, when: x.updatedAt, to: `/orders/${x.id}`
                    }));
                    break;
                case "products":
                    rows = list.filter(x => includes(x, ["id", "name", "sku", "category", "price"])).map(x => ({
                        id: x.id, title: x.name, sub: `SKU: ${x.sku} · ${x.category} · ${x.price}`,
                        right: x.id, when: x.updatedAt, to: `/products/${x.id}`
                    }));
                    break;
                case "medicines":
                    rows = list.filter(x => includes(x, ["id", "name", "form", "strength", "manufacturer", "mrp"])).map(x => ({
                        id: x.id, title: x.name, sub: `${x.form} · ${x.strength} · ${x.manufacturer} · MRP ${x.mrp}`,
                        right: x.id, when: x.updatedAt, to: `/medicines/${x.id}`
                    }));
                    break;
                case "invoices":
                    rows = list.filter(x => includes(x, ["id", "orderId", "customer", "amount", "status"])).map(x => ({
                        id: x.id, title: `${x.id} · ${x.customer}`, sub: `Amount: ${x.amount} · ${x.status}`,
                        right: x.id, when: x.updatedAt, to: `/invoices/${x.id}`
                    }));
                    break;
                case "vendors":
                    rows = list.filter(x => includes(x, ["id", "name", "city", "contact"])).map(x => ({
                        id: x.id, title: x.name, sub: `${x.city} · ${x.contact}`,
                        right: x.id, when: x.updatedAt, to: `/vendors/${x.id}`
                    }));
                    break;
                default: rows = [];
            }
            if (rows.length) groups.push({ key, label, rows });
        });

        return groups;
    }, [q, enabled]);

    const totalResults = filtered.reduce((n, g) => n + g.rows.length, 0);

    const copyLink = async (href) => {
        try {
            const url = window.location.origin + (import.meta.env.BASE_URL || "") + href.replace(/^\//, "");
            await navigator.clipboard?.writeText(url);
        } catch {/* ignore */ }
    };

    const exportJSON = () => {
        const data = {
            query: q,
            generatedAt: fmt(new Date(), true),
            groups: filtered.map(g => ({ group: g.label, count: g.rows.length, items: g.rows }))
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `search-export-${Date.now()}.json`;
        document.body.appendChild(a); a.click();
        a.remove(); URL.revokeObjectURL(url);
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page>
            {/* print CSS */}
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
                    <h1>Global Search</h1>
                    <div className="meta">
                        <span>Indexed: {fmt(indexedAt, true)}</span>
                        <span>•</span>
                        <span>Local time: {onlyTime(new Date())}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={exportJSON} title="Export visible results as JSON">Export</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            <Styled.SearchBar className="card" role="search">
                <div className="row">
                    <input
                        ref={inputRef}
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search customers, orders, products, invoices… (Ctrl + K)"
                        aria-label="Search input"
                    />
                    {q ? <button className="btnGhost" onClick={clearQuery} title="Clear">Clear</button> : null}
                </div>

                <div className="chips">
                    <div className="chipLabel">Entities:</div>
                    <div className="chipWrap">
                        {ENTITY_META.map(e => (
                            <button
                                key={e.key}
                                className={`chip ${enabled[e.key] ? "on" : ""}`}
                                onClick={() => toggleEntity(e.key)}
                                type="button"
                                aria-pressed={enabled[e.key]}
                                title={enabled[e.key] ? "Enabled" : "Disabled"}
                            >
                                <span className="dot" style={{ background: e.color }} />
                                {e.label}
                            </button>
                        ))}
                    </div>
                    <div className="chipActions">
                        <button className="btnGhost small" onClick={enableAll}>All</button>
                        <button className="btnGhost small" onClick={disableAll}>None</button>
                    </div>
                </div>

                <div className="stats">
                    <span>{totalResults} results</span>
                    {q ? <span className="muted">for “{q}”</span> : <span className="muted">type to search</span>}
                </div>
            </Styled.SearchBar>

            <Styled.Columns>
                <section className="col">
                    {filtered.length === 0 ? (
                        <Styled.Empty className="card">
                            <div className="big">No results</div>
                            <div className="muted">Try enabling more entities or changing the query.</div>
                            <div className="helpLinks">
                                <NavLink to="/customers">Browse Customers</NavLink>
                                <NavLink to="/orders">View Orders</NavLink>
                                <NavLink to="/products">All Products</NavLink>
                                <NavLink to="/reports">Reports</NavLink>
                            </div>
                        </Styled.Empty>
                    ) : (
                        filtered.map(group => (
                            <Styled.Group className="card" key={group.key}>
                                <header>
                                    <h3>{group.label}</h3>
                                    <span className="count">{group.rows.length}</span>
                                </header>
                                <ul className="list">
                                    {group.rows.map(item => (
                                        <li key={item.id} className="row">
                                            <div className="main">
                                                <NavLink to={item.to} className="title">{item.title}</NavLink>
                                                <div className="sub">{item.sub}</div>
                                            </div>
                                            <div className="meta">
                                                <span className="when" title={fmt(item.when, true)}>{fmt(item.when)}</span>
                                                <div className="actions">
                                                    <NavLink to={item.to} className="btnGhost small" title="Open">Open</NavLink>
                                                    <a href={item.to} className="btnGhost small" target="_blank" rel="noreferrer" title="Open in new tab">New Tab</a>
                                                    <button className="btnGhost small" onClick={() => copyLink(item.to)} title="Copy deep link">Copy Link</button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Styled.Group>
                        ))
                    )}
                </section>

                {/* print-friendly summary block */}
                <aside className="side">
                    <div className="card" id="search-print-area">
                        <h3>Print Summary</h3>
                        <div className="summary">
                            <div className="line"><span className="k">Query</span><span className="v">{q || "—"}</span></div>
                            <div className="line"><span className="k">Generated</span><span className="v">{fmt(new Date(), true)}</span></div>
                            <div className="line"><span className="k">Entities</span>
                                <span className="v">
                                    {ENTITY_META.filter(e => enabled[e.key]).map(e => e.label).join(", ") || "None"}
                                </span>
                            </div>
                            <div className="line"><span className="k">Total</span><span className="v">{totalResults}</span></div>
                        </div>
                        <div className="tips">
                            <div className="tip">Tip: use <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd> to focus search.</div>
                            <div className="tip">Deep links open respective detail pages with display-only content.</div>
                        </div>
                    </div>

                    <div className="card quick">
                        <h3>Quick Access</h3>
                        <ul>
                            <li><NavLink to="/customers">Customers</NavLink></li>
                            <li><NavLink to="/orders">Orders</NavLink></li>
                            <li><NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/medicines">Medicines</NavLink></li>
                            <li><NavLink to="/reports">Reports</NavLink></li>
                            <li><NavLink to="/admin/users">Admin · Users</NavLink></li>
                        </ul>
                    </div>
                </aside>
            </Styled.Columns>
        </Styled.Page>
    );
};

export default SearchPage;
