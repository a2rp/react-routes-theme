import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdSearch,
    MdFilterList,
    MdPrint,
    MdClose,
    MdChevronLeft,
    MdChevronRight,
    MdZoomIn,
    MdZoomOut,
} from "react-icons/md";

/* date utils to keep your exact formats everywhere */
const fmtDate = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    return `${days[x.getDay()]} ${mons[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

/**
 * Display-only gallery items (remote URLs to keep repo light).
 * You can swap these to /assets later if you add images locally.
 */
const ITEMS = [
    {
        id: "ph-001",
        title: "Blue Facade",
        src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
        w: 1600, h: 1000,
        tags: ["architecture", "city", "exterior"],
        createdAt: "2025-09-26T18:28:57+05:30"
    },
    {
        id: "ph-002",
        title: "Workspace",
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        w: 1600, h: 1067,
        tags: ["interior", "people", "office"],
        createdAt: "2025-09-20T10:21:37+05:30"
    },
    {
        id: "ph-003",
        title: "Morning Lines",
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
        w: 1200, h: 1600,
        tags: ["abstract", "texture"],
        createdAt: "2025-08-12T08:31:22+05:30"
    },
    {
        id: "ph-004",
        title: "Calm Sea",
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
        w: 1600, h: 1066,
        tags: ["nature", "water", "outdoor"],
        createdAt: "2025-07-04T15:11:05+05:30"
    },
    {
        id: "ph-005",
        title: "Minimal Chair",
        src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop",
        w: 1200, h: 1500,
        tags: ["product", "interior", "minimal"],
        createdAt: "2025-06-28T09:48:10+05:30"
    },
    {
        id: "ph-006",
        title: "City Night",
        src: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop",
        w: 1600, h: 1067,
        tags: ["city", "night", "lights"],
        createdAt: "2025-06-20T20:05:43+05:30"
    },
    {
        id: "ph-007",
        title: "Soft Gradient",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        w: 1200, h: 1500,
        tags: ["abstract", "gradient"],
        createdAt: "2025-05-01T11:15:25+05:30"
    },
    {
        id: "ph-008",
        title: "Desert Curve",
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
        w: 1600, h: 1000,
        tags: ["nature", "sand", "outdoor"],
        createdAt: "2025-04-21T14:02:11+05:30"
    },
    {
        id: "ph-009",
        title: "Concrete Rhythm",
        src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",
        w: 1600, h: 1067,
        tags: ["architecture", "geometry"],
        createdAt: "2025-04-10T19:32:40+05:30"
    },
    {
        id: "ph-010",
        title: "Quiet Library",
        src: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1600&auto=format&fit=crop",
        w: 1600, h: 1066,
        tags: ["interior", "books", "quiet"],
        createdAt: "2025-03-18T10:09:03+05:30"
    },
    {
        id: "ph-011",
        title: "Product Stand",
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
        w: 1200, h: 1500,
        tags: ["product", "studio"],
        createdAt: "2025-03-08T12:42:19+05:30"
    },
    {
        id: "ph-012",
        title: "Sky Blocks",
        src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
        w: 1600, h: 1066,
        tags: ["architecture", "minimal", "sky"],
        createdAt: "2025-02-28T17:51:27+05:30"
    }
];

const TAGS = ["architecture", "city", "interior", "people", "product", "nature", "abstract", "texture", "gradient", "night", "outdoor", "minimal", "books", "studio", "geometry", "water", "sand", "lights", "sky", "quiet"];

const ExampleGallery = () => {
    const [query, setQuery] = useState("");
    const [activeTags, setActiveTags] = useState([]);
    const [sort, setSort] = useState("newest"); // newest | oldest | title
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const [zoom, setZoom] = useState(1);
    const printRef = useRef(null);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = ITEMS.filter(x => {
            const matchesQ = !q || (x.title.toLowerCase().includes(q) || x.tags.join(" ").toLowerCase().includes(q));
            const matchesTags = activeTags.length === 0 || activeTags.every(t => x.tags.includes(t));
            return matchesQ && matchesTags;
        });
        if (sort === "newest") list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (sort === "oldest") list.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        if (sort === "title") list.sort((a, b) => a.title.localeCompare(b.title));
        return list;
    }, [query, activeTags, sort]);

    const openLightbox = (idx) => { setLightboxIndex(idx); setZoom(1); };
    const closeLightbox = () => setLightboxIndex(-1);
    const prev = () => setLightboxIndex(i => (i <= 0 ? filtered.length - 1 : i - 1));
    const next = () => setLightboxIndex(i => (i >= filtered.length - 1 ? 0 : i + 1));
    const zoomIn = () => setZoom(z => Math.min(3, +(z + 0.25).toFixed(2)));
    const zoomOut = () => setZoom(z => Math.max(1, +(z - 0.25).toFixed(2)));

    // key controls for lightbox
    useEffect(() => {
        if (lightboxIndex < 0) return;
        const onKey = (e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
            if (e.key === "+") zoomIn();
            if (e.key === "-") zoomOut();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightboxIndex, filtered.length]);

    const toggleTag = (t) =>
        setActiveTags((prev) => (prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]));

    const clearAll = () => { setQuery(""); setActiveTags([]); setSort("newest"); };

    const printContactSheet = useCallback(() => {
        const el = printRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    }, []);

    return (
        <Styled.Page>
            {/* print CSS block (as requested, exact selector / semantics) */}
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
                    <h1>Gallery</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/examples">Examples</NavLink>
                        <span>/</span>
                        <span className="current">Gallery</span>
                    </nav>
                    <div className="meta">
                        <span>Total: {ITEMS.length}</span>
                        <span>•</span>
                        <span>Showing: {filtered.length}</span>
                    </div>
                </div>

                <div className="right">
                    <div className="search">
                        <MdSearch size={18} className="ic" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search by title or tags"
                            aria-label="Search images"
                        />
                    </div>

                    <div className="filters">
                        <div className="inline">
                            <MdFilterList size={18} className="ic" />
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                aria-label="Sort"
                            >
                                <option value="newest">Newest first</option>
                                <option value="oldest">Oldest first</option>
                                <option value="title">Title A–Z</option>
                            </select>
                        </div>

                        <button className="btnGhost" onClick={clearAll} title="Clear filters">
                            Clear
                        </button>

                        <button className="btnPrimary" onClick={printContactSheet} title="Print contact sheet">
                            <MdPrint size={18} /> <span>Print</span>
                        </button>
                    </div>
                </div>
            </Styled.Header>

            <Styled.TagStrip className="card">
                <div className="label">Quick tags</div>
                <div className="chips">
                    {TAGS.map((t) => (
                        <button
                            key={t}
                            className={`chip ${activeTags.includes(t) ? "on" : ""}`}
                            onClick={() => toggleTag(t)}
                            aria-pressed={activeTags.includes(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </Styled.TagStrip>

            <Styled.Grid>
                {filtered.map((img, idx) => {
                    const ratio = img.w && img.h ? img.w / img.h : 1.5;
                    return (
                        <figure key={img.id} className="card cell" style={{ aspectRatio: `${ratio}` }}>
                            <button
                                className="open"
                                onClick={() => openLightbox(idx)}
                                aria-label={`Open ${img.title}`}
                                title="Open"
                            >
                                <img src={img.src} alt={img.title} loading="lazy" />
                            </button>
                            <figcaption>
                                <div className="title">{img.title}</div>
                                <div className="sub">
                                    <span className="date">{fmtDateTime(img.createdAt)}</span>
                                    <span className="dot">•</span>
                                    <span className="tags">{img.tags.join(", ")}</span>
                                </div>
                            </figcaption>
                        </figure>
                    );
                })}
                {filtered.length === 0 && (
                    <Styled.Empty className="card">
                        <div className="big">No results</div>
                        <div className="muted">Try a different search or clear filters.</div>
                    </Styled.Empty>
                )}
            </Styled.Grid>

            {/* PRINT CONTACT SHEET (hidden during normal view) */}
            <Styled.PrintWrap id="search-print-area" ref={printRef}>
                <h2>Contact Sheet — Gallery</h2>
                <div className="meta">
                    Generated: {fmtDateTime(new Date())}
                    <span className="dot">•</span>
                    Items: {filtered.length}
                </div>
                <div className="sheet">
                    {filtered.map((img) => (
                        <div key={`p-${img.id}`} className="tile">
                            <img src={img.src} alt={img.title} />
                            <div className="cap">
                                <div className="t">{img.title}</div>
                                <div className="s">{img.tags.join(", ")}</div>
                                <div className="d">{fmtDate(img.createdAt)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Styled.PrintWrap>

            {/* LIGHTBOX */}
            {lightboxIndex >= 0 && (
                <Styled.Lightbox role="dialog" aria-modal="true" onMouseDown={closeLightbox}>
                    <div className="inner card" onMouseDown={(e) => e.stopPropagation()}>
                        <header>
                            <div className="name">{filtered[lightboxIndex].title}</div>
                            <div className="actions">
                                <button className="btnGhost" onClick={zoomOut} title="Zoom out"><MdZoomOut size={18} /></button>
                                <button className="btnGhost" onClick={zoomIn} title="Zoom in"><MdZoomIn size={18} /></button>
                                <button className="btnGhost" onClick={prev} title="Previous"><MdChevronLeft size={18} /></button>
                                <button className="btnGhost" onClick={next} title="Next"><MdChevronRight size={18} /></button>
                                <button className="btnDanger" onClick={closeLightbox} title="Close"><MdClose size={18} /></button>
                            </div>
                        </header>

                        <div className="stage">
                            <img
                                src={filtered[lightboxIndex].src}
                                alt={filtered[lightboxIndex].title}
                                style={{ transform: `scale(${zoom})` }}
                            />
                        </div>

                        <footer>
                            <div className="meta">
                                <span>{filtered[lightboxIndex].tags.join(", ")}</span>
                                <span className="dot">•</span>
                                <span>{fmtDateTime(filtered[lightboxIndex].createdAt)}</span>
                            </div>
                        </footer>
                    </div>
                </Styled.Lightbox>
            )}
        </Styled.Page>
    );
};

export default ExampleGallery;
