import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* -----------------------------
   Date formatting helpers
------------------------------ */
const pad = (n) => String(n).padStart(2, "0");
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${DAYS[x.getDay()]} ${MONS[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

/* -----------------------------
   Demo fixtures (display-only)
------------------------------ */
const BRANDS = [
    {
        id: "BR-APX",
        name: "Apex Remedies",
        country: "India",
        since: "2008-07-02",
        website: "https://apex.example.com",
        productsCount: 148,
        topSkus: ["AMOX-500", "AZI-250", "CEF-200"],
        tags: ["antibiotics", "essential", "wholesale"],
        logo: "/logos/apex.svg",
    },
    {
        id: "BR-NXT",
        name: "NextGen Labs",
        country: "India",
        since: "2015-01-15",
        website: "https://nextgen.example.com",
        productsCount: 96,
        topSkus: ["PCM-650", "DICLO-50", "IBU-400"],
        tags: ["analgesic", "popular"],
        logo: "/logos/nextgen.svg",
    },
    {
        id: "BR-BWV",
        name: "Bluewave Pharma",
        country: "India",
        since: "2012-05-10",
        website: "https://bluewave.example.com",
        productsCount: 204,
        topSkus: ["LEV-500", "CIP-500", "OFLO-200"],
        tags: ["antibiotics", "export"],
        logo: "/logos/bluewave.svg",
    },
    {
        id: "BR-ORC",
        name: "Orchid Biotech",
        country: "India",
        since: "2010-11-25",
        website: "https://orchid.example.com",
        productsCount: 72,
        topSkus: ["B12-1500", "FER-100", "FOL-5"],
        tags: ["supplements"],
        logo: "/logos/orchid.svg",
    },
    {
        id: "BR-ALP",
        name: "Alpha Care",
        country: "India",
        since: "2009-02-09",
        website: "https://alpha.example.com",
        productsCount: 131,
        topSkus: ["LOR-2", "CET-10", "MON-10"],
        tags: ["respiratory", "otc"],
        logo: "/logos/alpha.svg",
    },
    {
        id: "BR-SKY",
        name: "Skylark Therapeutics",
        country: "India",
        since: "2017-08-01",
        website: "https://skylark.example.com",
        productsCount: 58,
        topSkus: ["RAB-20", "PAN-40"],
        tags: ["gastro"],
        logo: "/logos/skylark.svg",
    },
    {
        id: "BR-RIV",
        name: "Riviera Med",
        country: "India",
        since: "2014-04-19",
        website: "https://riviera.example.com",
        productsCount: 83,
        topSkus: ["CAL-500", "VITD3-60K"],
        tags: ["supplements", "bones"],
        logo: "/logos/riviera.svg",
    },
    {
        id: "BR-ATN",
        name: "Aeternum Healthcare",
        country: "India",
        since: "2013-09-03",
        website: "https://aeternum.example.com",
        productsCount: 117,
        topSkus: ["MET-500", "GLI-2", "SITA-50"],
        tags: ["diabetes", "chronic"],
        logo: "/logos/aeternum.svg",
    },
    {
        id: "BR-TRN",
        name: "Trinity Formulations",
        country: "India",
        since: "2011-03-12",
        website: "https://trinity.example.com",
        productsCount: 91,
        topSkus: ["ATV-10", "ROSU-20"],
        tags: ["cardiac"],
        logo: "/logos/trinity.svg",
    },
    {
        id: "BR-VAL",
        name: "Valence Pharma",
        country: "India",
        since: "2018-06-28",
        website: "https://valence.example.com",
        productsCount: 49,
        topSkus: ["LEVOCET-5", "FEXO-180"],
        tags: ["allergy"],
        logo: "/logos/valence.svg",
    },
];

/* -----------------------------
   UI
------------------------------ */
const DEMO_MODE = true;

const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body">
                    <p>{message}</p>
                </div>
                <footer>
                    <button onClick={onClose} className="btnPrimary">Close</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const BrandsPage = () => {
    const [q, setQ] = useState("");
    const [letter, setLetter] = useState("ALL");
    const [tagFilter, setTagFilter] = useState("ALL");
    const [showDemoInfo, setShowDemoInfo] = useState(false);
    const printRef = useRef(null);

    // derive meta (display-only)
    const now = useMemo(() => new Date(), []);
    const totalBrands = BRANDS.length;
    const totalProducts = useMemo(() => BRANDS.reduce((acc, b) => acc + (b.productsCount || 0), 0), []);
    const allTags = useMemo(() => {
        const t = new Set();
        BRANDS.forEach(b => (b.tags || []).forEach(x => t.add(x)));
        return ["ALL", ...Array.from(t)];
    }, []);

    const onDisabledAction = (e) => {
        e.preventDefault();
        if (DEMO_MODE) setShowDemoInfo(true);
    };

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();
        return BRANDS.filter((b) => {
            const matchesQ = !query
                || b.name.toLowerCase().includes(query)
                || b.country.toLowerCase().includes(query)
                || (b.topSkus || []).some(s => s.toLowerCase().includes(query))
                || (b.tags || []).some(s => s.toLowerCase().includes(query));
            const matchesLetter = letter === "ALL" ? true : b.name.toUpperCase().startsWith(letter);
            const matchesTag = tagFilter === "ALL" ? true : (b.tags || []).includes(tagFilter);
            return matchesQ && matchesLetter && matchesTag;
        });
    }, [q, letter, tagFilter]);

    const featured = useMemo(() => BRANDS.slice(0, 6), []);

    const exportHref = useMemo(() => {
        const blob = JSON.stringify(BRANDS, null, 2);
        return `data:application/json;charset=utf-8,${encodeURIComponent(blob)}`;
    }, []);

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    // focus search on mount for quick UX
    const searchRef = useRef(null);
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            try { searchRef.current?.focus({ preventScroll: true }); } catch { searchRef.current?.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <Styled.Page>
            {/* print rules */}
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
                    <h1>Brands</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/products">Products</NavLink>
                        <span>/</span>
                        <span className="current">Brands</span>
                    </nav>
                    <div className="meta">
                        <span>Updated: {fmtDateTime(now)}</span>
                        <span>•</span>
                        <span>Server Time: {fmtTime(now)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnPrimary" aria-disabled={DEMO_MODE} onClick={onDisabledAction} title="Create a brand">New Brand</button>
                    <button className="btnGhost" aria-disabled={DEMO_MODE} onClick={onDisabledAction} title="Import CSV">Import CSV</button>
                    <a className="btnGhost" href={exportHref} download="brands.json" title="Export JSON">Export</a>
                    <button className="btnGhost" onClick={printSection} title="Print list">Print</button>
                </div>
            </Styled.Header>

            <Styled.KpiRow>
                <div className="kpi card">
                    <div className="k">Total Brands</div>
                    <div className="v">{totalBrands}</div>
                </div>
                <div className="kpi card">
                    <div className="k">Products (All)</div>
                    <div className="v">{totalProducts}</div>
                </div>
                <div className="kpi card">
                    <div className="k">Oldest Since</div>
                    <div className="v">{fmtDate(BRANDS.map(b => new Date(b.since)).sort((a, b) => a - b)[0])}</div>
                </div>
                <div className="kpi card">
                    <div className="k">Newest Since</div>
                    <div className="v">{fmtDate(BRANDS.map(b => new Date(b.since)).sort((a, b) => b - a)[0])}</div>
                </div>
            </Styled.KpiRow>

            <Styled.Toolbar className="card">
                <div className="search">
                    <input
                        ref={searchRef}
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search brand, country, SKU or tag"
                        aria-label="Search brands"
                    />
                </div>
                <div className="filters">
                    <div className="letters" role="tablist" aria-label="Alphabet filter">
                        {["ALL", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map(l => (
                            <button
                                key={l}
                                role="tab"
                                aria-selected={letter === l}
                                className={letter === l ? "on" : ""}
                                onClick={() => setLetter(l)}
                                title={l === "ALL" ? "Show all brands" : `Starts with ${l}`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>

                    <div className="tags">
                        <span className="label">Tag:</span>
                        {allTags.map((t) => (
                            <button
                                key={t}
                                className={`chip ${t === tagFilter ? "on" : ""}`}
                                onClick={() => setTagFilter(t)}
                                title={t === "ALL" ? "All tags" : `Filter: ${t}`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
            </Styled.Toolbar>

            {/* Featured grid */}
            <Styled.Grid>
                {featured.map((b) => (
                    <div className="brandCard card" key={b.id}>
                        <div className="logo" style={{ backgroundImage: `url(${b.logo || ""})` }}>
                            {!b.logo && <span className="fallback">{b.name.slice(0, 1)}</span>}
                        </div>
                        <div className="info">
                            <h3>{b.name}</h3>
                            <div className="muted">{b.country} • Since {fmtDate(b.since)}</div>
                            <div className="chips">
                                {(b.tags || []).map(t => <span className="chip" key={t}>{t}</span>)}
                            </div>
                        </div>
                        <div className="stats">
                            <div><span className="k">Products</span><span className="v">{b.productsCount}</span></div>
                            <div className="skuRow">
                                <span className="k">Top SKUs</span>
                                <div className="skuList">
                                    {(b.topSkus || []).slice(0, 3).map(s => <span className="sku" key={s}>{s}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className="links">
                            <a href={b.website} target="_blank" rel="noreferrer" className="btnGhost small">Website</a>
                            <NavLink to="/products" className="btnGhost small" title="Open catalog">Open Catalog</NavLink>
                        </div>
                    </div>
                ))}
            </Styled.Grid>

            {/* Table list (printable) */}
            <Styled.TableWrap className="card" id="search-print-area" ref={printRef}>
                <div className="tableHeader">
                    <h3>All Brands</h3>
                    <div className="muted">{filtered.length} of {BRANDS.length} shown</div>
                </div>
                <div className="tableScroll">
                    <table>
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Country</th>
                                <th>Since</th>
                                <th>Products</th>
                                <th>Tags</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((b) => (
                                <tr key={b.id}>
                                    <td>
                                        <div className="brandCell">
                                            <div className="avatar" style={{ backgroundImage: `url(${b.logo || ""})` }}>
                                                {!b.logo && <span className="fallback">{b.name.slice(0, 1)}</span>}
                                            </div>
                                            <div className="text">
                                                <div className="name">{b.name}</div>
                                                <div className="id">{b.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{b.country}</td>
                                    <td>{fmtDate(b.since)}</td>
                                    <td className="num">{b.productsCount}</td>
                                    <td>
                                        <div className="tagsMini">
                                            {(b.tags || []).map(t => <span key={t} className="chip mini">{t}</span>)}
                                        </div>
                                    </td>
                                    <td>
                                        <a href={b.website} target="_blank" rel="noreferrer" className="link">{new URL(b.website).host}</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Styled.TableWrap>

            <InfoDialog
                open={showDemoInfo}
                title="Demo mode"
                message="This is a display-only preview. Create/Import are disabled."
                onClose={() => setShowDemoInfo(false)}
            />
        </Styled.Page>
    );
};

export default BrandsPage;
