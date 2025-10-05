import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* date helpers: strict formats */
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[x.getDay()]} ${mons[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

/* fixture data (display-only) */
const FIXTURE_VENDORS = [
    {
        id: "VEND-1001",
        name: "Apex Pharmaceuticals",
        code: "APX",
        contact: "Meera Iyer",
        email: "meera@apexpharma.co",
        phone: "+91 98990 12001",
        gstin: "07APXPH1234F1Z7",
        pan: "APXPH1234F",
        address: { city: "Bengaluru", state: "KA", country: "India" },
        tags: ["pharma", "priority", "api"],
        rating: 4.7,
        categories: ["API", "Packaging"],
        spendYTD: "₹58,40,000",
        spendLifetime: "₹3,12,50,000",
        openPOs: 4,
        lastOrderAt: "2025-09-21T10:30:00+05:30",
        status: "active",
        leadTimeDays: 4,
        payment: "Net 30",
        accountManager: "Anita Desai",
        portalUrl: "https://portal.apexpharma.co",
    },
    {
        id: "VEND-1002",
        name: "Bluewave Traders",
        code: "BWT",
        contact: "Siddharth Rao",
        email: "sid@bluewave.trade",
        phone: "+91 99870 44556",
        gstin: "29BWTTR9876T1Z3",
        pan: "BWTTR9876T",
        address: { city: "Mumbai", state: "MH", country: "India" },
        tags: ["wholesale", "priority"],
        rating: 4.4,
        categories: ["Consumables"],
        spendYTD: "₹22,90,500",
        spendLifetime: "₹1,07,80,000",
        openPOs: 2,
        lastOrderAt: "2025-08-27T14:55:12+05:30",
        status: "active",
        leadTimeDays: 2,
        payment: "Advance",
        accountManager: "R. Nair",
        portalUrl: "https://bluewave.example.com",
    },
    {
        id: "VEND-1003",
        name: "Nimbus Packaging",
        code: "NIM",
        contact: "Anmol Kapoor",
        email: "ops@nimbuspack.in",
        phone: "+91 97654 22119",
        gstin: "23NIMPK4455L1Z2",
        pan: "NIMPK4455L",
        address: { city: "Indore", state: "MP", country: "India" },
        tags: ["packaging"],
        rating: 4.2,
        categories: ["Packaging"],
        spendYTD: "₹12,60,000",
        spendLifetime: "₹56,40,000",
        openPOs: 1,
        lastOrderAt: "2025-09-17T11:14:40+05:30",
        status: "active",
        leadTimeDays: 6,
        payment: "Net 15",
        accountManager: "Dev S",
        portalUrl: "",
    },
    {
        id: "VEND-1004",
        name: "Zen Lifesciences",
        code: "ZEN",
        contact: "Trisha G",
        email: "trisha@zenlife.co",
        phone: "+91 98200 11812",
        gstin: "06ZNLFS9021H1Z6",
        pan: "ZNLFS9021H",
        address: { city: "Gurugram", state: "HR", country: "India" },
        tags: ["pharma", "formulation"],
        rating: 4.8,
        categories: ["API", "Formulations"],
        spendYTD: "₹64,10,000",
        spendLifetime: "₹2,81,00,000",
        openPOs: 5,
        lastOrderAt: "2025-10-02T16:08:03+05:30",
        status: "active",
        leadTimeDays: 3,
        payment: "Net 45",
        accountManager: "A Kumar",
        portalUrl: "https://zenlife.example",
    },
    {
        id: "VEND-1005",
        name: "Orbit Chemicals",
        code: "ORB",
        contact: "Prakash Jain",
        email: "sales@orbitchem.com",
        phone: "+91 99450 66778",
        gstin: "33ORBCM3344J1Z8",
        pan: "ORBCM3344J",
        address: { city: "Chennai", state: "TN", country: "India" },
        tags: ["raw-material"],
        rating: 3.9,
        categories: ["API"],
        spendYTD: "₹8,90,000",
        spendLifetime: "₹40,70,000",
        openPOs: 0,
        lastOrderAt: "2025-07-12T09:10:05+05:30",
        status: "inactive",
        leadTimeDays: 7,
        payment: "Advance",
        accountManager: "—",
        portalUrl: "",
    },
    {
        id: "VEND-1006",
        name: "Silverline Logistics",
        code: "SLV",
        contact: "Guneet K",
        email: "guneet@silverline.log",
        phone: "+91 98001 20022",
        gstin: "19SLVLG7782Q1Z6",
        pan: "SLVLG7782Q",
        address: { city: "Kolkata", state: "WB", country: "India" },
        tags: ["logistics"],
        rating: 4.1,
        categories: ["Freight"],
        spendYTD: "₹4,70,000",
        spendLifetime: "₹19,80,000",
        openPOs: 1,
        lastOrderAt: "2025-09-30T18:22:40+05:30",
        status: "active",
        leadTimeDays: 5,
        payment: "Per Shipment",
        accountManager: "M. Bose",
        portalUrl: "",
    },
    {
        id: "VEND-1007",
        name: "Crystal Printworks",
        code: "CRY",
        contact: "Parul Shah",
        email: "hello@crystalprint.in",
        phone: "+91 99000 77882",
        gstin: "24CRYPR5512V1Z3",
        pan: "CRYPR5512V",
        address: { city: "Ahmedabad", state: "GJ", country: "India" },
        tags: ["labels", "packaging"],
        rating: 4.3,
        categories: ["Labels", "Packaging"],
        spendYTD: "₹9,40,000",
        spendLifetime: "₹42,60,000",
        openPOs: 1,
        lastOrderAt: "2025-09-19T13:44:10+05:30",
        status: "active",
        leadTimeDays: 5,
        payment: "Net 15",
        accountManager: "P. Mehta",
        portalUrl: "",
    },
    {
        id: "VEND-1008",
        name: "Northwind Instruments",
        code: "NWI",
        contact: "Kritika R",
        email: "k.raj@nwind.io",
        phone: "+91 98188 55321",
        gstin: "05NWINM8833W1Z7",
        pan: "NWINM8833W",
        address: { city: "Dehradun", state: "UK", country: "India" },
        tags: ["equipment"],
        rating: 4.0,
        categories: ["Equipment"],
        spendYTD: "₹15,20,000",
        spendLifetime: "₹61,90,000",
        openPOs: 0,
        lastOrderAt: "2025-08-11T12:05:50+05:30",
        status: "active",
        leadTimeDays: 10,
        payment: "Milestones",
        accountManager: "—",
        portalUrl: "",
    },
    {
        id: "VEND-1009",
        name: "Metro Courier",
        code: "MTC",
        contact: "Arnav D",
        email: "ops@metrocourier.co",
        phone: "+91 97222 11145",
        gstin: "27MTCCR9090M1Z4",
        pan: "MTCCR9090M",
        address: { city: "Pune", state: "MH", country: "India" },
        tags: ["courier", "logistics"],
        rating: 3.8,
        categories: ["Courier"],
        spendYTD: "₹3,10,000",
        spendLifetime: "₹14,90,000",
        openPOs: 3,
        lastOrderAt: "2025-09-26T10:18:22+05:30",
        status: "active",
        leadTimeDays: 2,
        payment: "Per Shipment",
        accountManager: "L. Patil",
        portalUrl: "",
    },
    {
        id: "VEND-1010",
        name: "Orion Biotech",
        code: "ORN",
        contact: "Bhavya M",
        email: "b.m@orionbio.co",
        phone: "+91 90000 11234",
        gstin: "21ORNBT4411Y1Z9",
        pan: "ORNBT4411Y",
        address: { city: "Bhubaneswar", state: "OD", country: "India" },
        tags: ["pharma", "biotech", "priority"],
        rating: 4.6,
        categories: ["API", "Reagents"],
        spendYTD: "₹44,80,000",
        spendLifetime: "₹1,88,00,000",
        openPOs: 2,
        lastOrderAt: "2025-09-29T17:45:55+05:30",
        status: "active",
        leadTimeDays: 5,
        payment: "Net 30",
        accountManager: "Bhaskar",
        portalUrl: "",
    },
    {
        id: "VEND-1011",
        name: "Saffron Office Supplies",
        code: "SAS",
        contact: "Komal V",
        email: "sales@saffronos.in",
        phone: "+91 98888 66002",
        gstin: "09SASOS2210D1Z5",
        pan: "SASOS2210D",
        address: { city: "Noida", state: "UP", country: "India" },
        tags: ["consumables"],
        rating: 4.1,
        categories: ["Stationery"],
        spendYTD: "₹2,80,000",
        spendLifetime: "₹10,70,000",
        openPOs: 0,
        lastOrderAt: "2025-06-13T15:30:20+05:30",
        status: "active",
        leadTimeDays: 3,
        payment: "Advance",
        accountManager: "—",
        portalUrl: "",
    },
    {
        id: "VEND-1012",
        name: "Helio Labs",
        code: "HEL",
        contact: "Raghav S",
        email: "raghav@helio-labs.com",
        phone: "+91 99555 33001",
        gstin: "36HELIO9901P1Z1",
        pan: "HELIO9901P",
        address: { city: "Hyderabad", state: "TS", country: "India" },
        tags: ["pharma", "formulation"],
        rating: 4.5,
        categories: ["Formulations"],
        spendYTD: "₹31,50,000",
        spendLifetime: "₹1,21,60,000",
        openPOs: 1,
        lastOrderAt: "2025-10-03T19:12:00+05:30",
        status: "active",
        leadTimeDays: 4,
        payment: "Net 30",
        accountManager: "A. Khan",
        portalUrl: "",
    },
];

/* simple CSV builder for export */
const toCSV = (rows) => {
    const headers = [
        "ID", "Name", "Code", "Contact", "Email", "Phone", "City", "State", "Country",
        "Tags", "Rating", "Categories", "SpendYTD", "SpendLifetime", "OpenPOs",
        "LastOrderAt", "Status", "LeadTimeDays", "Payment", "AccountManager", "PortalURL"
    ];
    const escape = (v) => {
        if (v == null) return "";
        const s = String(v);
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const body = rows.map(v => [
        v.id, v.name, v.code, v.contact, v.email, v.phone,
        v.address.city, v.address.state, v.address.country,
        (v.tags || []).join(" | "),
        v.rating, (v.categories || []).join(" | "),
        v.spendYTD, v.spendLifetime, v.openPOs,
        fmtDateTime(v.lastOrderAt), v.status, v.leadTimeDays, v.payment, v.accountManager, v.portalUrl
    ].map(escape).join(",")).join("\n");
    return [headers.join(","), body].join("\n");
};

const VendorsList = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const [q, setQ] = useState(() => params.get("q") || "");
    const [status, setStatus] = useState(() => params.get("status") || "all");
    const [tag, setTag] = useState(() => params.get("tag") || "all");
    const [category, setCategory] = useState(() => params.get("category") || "all");
    const [sort, setSort] = useState(() => params.get("sort") || "name:asc");
    const [selected, setSelected] = useState(null);
    const printRef = useRef(null);
    const searchRef = useRef(null);

    useEffect(() => {
        const next = new URLSearchParams();
        if (q) next.set("q", q);
        if (status !== "all") next.set("status", status);
        if (tag !== "all") next.set("tag", tag);
        if (category !== "all") next.set("category", category);
        if (sort !== "name:asc") next.set("sort", sort);
        setParams(next, { replace: true });
    }, [q, status, tag, category, sort, setParams]);

    useEffect(() => {
        const el = searchRef.current;
        if (!el) return;
        const id = requestAnimationFrame(() => {
            try { el.focus({ preventScroll: true }); } catch { el.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    const allTags = useMemo(() => {
        const s = new Set();
        FIXTURE_VENDORS.forEach(v => (v.tags || []).forEach(t => s.add(t)));
        return ["all", ...Array.from(s)];
    }, []);
    const allCategories = useMemo(() => {
        const s = new Set();
        FIXTURE_VENDORS.forEach(v => (v.categories || []).forEach(t => s.add(t)));
        return ["all", ...Array.from(s)];
    }, []);

    const filtered = useMemo(() => {
        const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        const pass = (v) => {
            if (status !== "all" && v.status !== status) return false;
            if (tag !== "all" && !(v.tags || []).includes(tag)) return false;
            if (category !== "all" && !(v.categories || []).includes(category)) return false;
            if (tokens.length) {
                const hay = [
                    v.name, v.code, v.contact, v.email, v.phone,
                    v.address.city, v.address.state, v.address.country,
                    (v.tags || []).join(" "), (v.categories || []).join(" ")
                ].join(" ").toLowerCase();
                if (!tokens.every(t => hay.includes(t))) return false;
            }
            return true;
        };
        const arr = FIXTURE_VENDORS.filter(pass);
        const [key, dir] = sort.split(":");
        arr.sort((a, b) => {
            const va = key === "rating" ? a.rating : String(a[key] || a.name).toLowerCase();
            const vb = key === "rating" ? b.rating : String(b[key] || b.name).toLowerCase();
            if (va < vb) return dir === "asc" ? -1 : 1;
            if (va > vb) return dir === "asc" ? 1 : -1;
            return 0;
        });
        return arr;
    }, [q, status, tag, category, sort]);

    const onExport = () => {
        const csv = toCSV(filtered);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = "vendors.csv"; a.click();
        URL.revokeObjectURL(url);
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
                    <h1>Vendors</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/home">Home</NavLink>
                        <span>/</span>
                        <span className="current">Vendors</span>
                    </nav>
                    <div className="meta">
                        <span>Total: {FIXTURE_VENDORS.length}</span>
                        <span>•</span>
                        <span>Updated: {fmtDateTime(new Date())}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate("/purchase-orders")} title="Open Purchase Orders">POs</button>
                    <button className="btnGhost" onClick={() => navigate("/invoices")} title="Open Invoices">Invoices</button>
                    <button className="btnGhost" onClick={printSection} title="Print current view">Print</button>
                    <button className="btnPrimary" onClick={onExport} title="Export filtered list to CSV">Export CSV</button>
                    <button className="btnDisabled" disabled title="Disabled in demo">New Vendor</button>
                </div>
            </Styled.Header>

            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="field">
                        <label>Search</label>
                        <input
                            ref={searchRef}
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search name, code, email, city…"
                            aria-label="Search vendors"
                        />
                    </div>

                    <div className="field">
                        <label>Status</label>
                        <div className="chipset">
                            {["all", "active", "inactive"].map(s => (
                                <button
                                    key={s}
                                    className={`chip ${status === s ? "active" : ""}`}
                                    onClick={() => setStatus(s)}
                                    aria-pressed={status === s}
                                    title={`Filter status: ${s}`}
                                >
                                    {s[0].toUpperCase() + s.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="field">
                        <label>Tag</label>
                        <select value={tag} onChange={(e) => setTag(e.target.value)}>
                            {allTags.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>

                    <div className="field">
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            {allCategories.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>

                    <div className="field">
                        <label>Sort</label>
                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="name:asc">Name ↑</option>
                            <option value="name:desc">Name ↓</option>
                            <option value="rating:desc">Rating ↑</option>
                            <option value="rating:asc">Rating ↓</option>
                        </select>
                    </div>
                </div>
            </Styled.Toolbar>

            <Styled.Split>
                {/* main list (printable) */}
                <section className="list card" id="search-print-area" ref={printRef}>
                    <header className="tableHeader">
                        <div className="left">
                            <strong>Results</strong>
                            <span className="muted">({filtered.length})</span>
                        </div>
                        <div className="legend">
                            <span className="dot active" /> Active
                            <span className="dot inactive" /> Inactive
                        </div>
                    </header>

                    {filtered.length === 0 ? (
                        <Styled.Empty>
                            <div className="icon" aria-hidden="true">⌁</div>
                            <h3>No vendors found</h3>
                            <p>Try a different keyword or clear filters.</p>
                        </Styled.Empty>
                    ) : (
                        <div className="tableWrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Vendor</th>
                                        <th>Contact</th>
                                        <th>Location</th>
                                        <th>Tags</th>
                                        <th>Rating</th>
                                        <th>Spend (YTD)</th>
                                        <th>Open POs</th>
                                        <th>Last Order</th>
                                        <th>Links</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map(v => (
                                        <tr
                                            key={v.id}
                                            data-status={v.status}
                                            className={selected?.id === v.id ? "selected" : ""}
                                            onClick={() => setSelected(v)}
                                            title="Select to preview details"
                                        >
                                            <td>
                                                <div className="titleCell">
                                                    <div className={`status ${v.status}`} aria-hidden="true" />
                                                    <div>
                                                        <div className="name">{v.name}</div>
                                                        <div className="sub muted">{v.id} · {v.code}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="stack">
                                                    <div>{v.contact}</div>
                                                    <div className="muted">{v.email}</div>
                                                    <div className="muted">{v.phone}</div>
                                                </div>
                                            </td>
                                            <td>{v.address.city}, {v.address.state}</td>
                                            <td>
                                                <div className="tags">{(v.tags || []).map(t => <span key={t} className="tag">{t}</span>)}</div>
                                            </td>
                                            <td><span className="rating" title="Vendor rating">{v.rating.toFixed(1)}</span></td>
                                            <td>{v.spendYTD}</td>
                                            <td>{v.openPOs}</td>
                                            <td>{fmtDateTime(v.lastOrderAt)}</td>
                                            <td className="links">
                                                <NavLink to={`/vendors/${v.id}`} className="lnk" title="View details">View</NavLink>
                                                <NavLink to={`/vendors/${v.id}/edit`} className="lnk disabled" aria-disabled="true" title="Disabled in demo">Edit</NavLink>
                                                <NavLink to={`/purchase-orders?vendor=${encodeURIComponent(v.id)}`} className="lnk" title="POs">POs</NavLink>
                                                <NavLink to={`/invoices?vendor=${encodeURIComponent(v.id)}`} className="lnk" title="Invoices">Invoices</NavLink>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>

                {/* side preview */}
                <aside className="side">
                    {!selected ? (
                        <Styled.HintCard className="card">
                            <h3>Vendor preview</h3>
                            <p>Select a row to see a quick profile, compliance, and quick links.</p>
                        </Styled.HintCard>
                    ) : (
                        <Styled.Preview className="card">
                            <header>
                                <div className="left">
                                    <h3>{selected.name}</h3>
                                    <div className="muted">{selected.id} · {selected.code}</div>
                                </div>
                                <div className="right">
                                    <span className="badge">{selected.status}</span>
                                </div>
                            </header>

                            <div className="grid two">
                                <div>
                                    <div className="label">Contact</div>
                                    <div>{selected.contact}</div>
                                    <div className="muted">{selected.email}</div>
                                    <div className="muted">{selected.phone}</div>
                                </div>
                                <div>
                                    <div className="label">Account Manager</div>
                                    <div>{selected.accountManager || "—"}</div>
                                    <div className="label mt8">Payment</div>
                                    <div>{selected.payment}</div>
                                </div>
                            </div>

                            <div className="grid two">
                                <div>
                                    <div className="label">Location</div>
                                    <div>{selected.address.city}, {selected.address.state}</div>
                                    <div className="muted">{selected.address.country}</div>
                                </div>
                                <div>
                                    <div className="label">Lead Time</div>
                                    <div>{selected.leadTimeDays} days</div>
                                    <div className="label mt8">Rating</div>
                                    <div>{selected.rating.toFixed(1)}</div>
                                </div>
                            </div>

                            <div className="grid two">
                                <div>
                                    <div className="label">GSTIN</div>
                                    <div>{selected.gstin}</div>
                                </div>
                                <div>
                                    <div className="label">PAN</div>
                                    <div>{selected.pan}</div>
                                </div>
                            </div>

                            <div className="line">
                                <div className="label">Categories</div>
                                <div className="tags">{(selected.categories || []).map(t => <span key={t} className="tag">{t}</span>)}</div>
                            </div>

                            <div className="metrics">
                                <div className="metric">
                                    <div className="k">Spend (YTD)</div>
                                    <div className="v">{selected.spendYTD}</div>
                                </div>
                                <div className="metric">
                                    <div className="k">Spend (Lifetime)</div>
                                    <div className="v">{selected.spendLifetime}</div>
                                </div>
                                <div className="metric">
                                    <div className="k">Open POs</div>
                                    <div className="v">{selected.openPOs}</div>
                                </div>
                                <div className="metric">
                                    <div className="k">Last Order</div>
                                    <div className="v">{fmtDateTime(selected.lastOrderAt)}</div>
                                </div>
                            </div>

                            <div className="actions">
                                <NavLink to={`/vendors/${selected.id}`} className="btnPrimary" title="Open vendor details">Open</NavLink>
                                <a href={selected.portalUrl || "#"} className={`btnGhost ${!selected.portalUrl ? "disabled" : ""}`} aria-disabled={!selected.portalUrl} title={selected.portalUrl ? "Vendor portal" : "No portal"}>
                                    Portal
                                </a>
                                <NavLink to={`/purchase-orders?vendor=${encodeURIComponent(selected.id)}`} className="btnGhost" title="View POs">
                                    View POs
                                </NavLink>
                                <NavLink to={`/invoices?vendor=${encodeURIComponent(selected.id)}`} className="btnGhost" title="View Invoices">
                                    View Invoices
                                </NavLink>
                            </div>
                        </Styled.Preview>
                    )}
                </aside>
            </Styled.Split>
        </Styled.Page>
    );
};

export default VendorsList;
