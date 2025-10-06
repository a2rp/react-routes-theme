import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/**
 * Tiny date utils — formats must be exactly:
 * - Date: Sat Oct 04 2025
 * - Date+Time: Sat Oct 04 2025 15:38:20hrs
 * - Time: 15:38:20hrs
 */
const two = (n) => String(n).padStart(2, "0");
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${WEEK[d.getDay()]} ${MON[d.getMonth()]} ${two(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (iso) => {
    const d = new Date(iso);
    return `${two(d.getHours())}:${two(d.getMinutes())}:${two(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

/** Demo dataset (display-only) */
const DEMO_ITEMS = [
    {
        id: "STK-00045",
        productId: "MED-AMOX-500",
        sku: "AMOX-500-TAB",
        name: "Amoxicillin 500 mg Tablets",
        brand: "HealPharm",
        mfg: "HealPharm Labs Pvt. Ltd.",
        hsn: "30049099",
        batch: "B23K7A",
        mrp: "₹ 145.00",
        mfgDate: "2025-04-12T10:15:07+05:30",
        expDate: "2027-03-31T23:59:59+05:30",
        pack: "10 x 10",
        qty: 1,
        price: "₹ 120.00",
        barcode: "8901234567894",
        lot: "LOT-7781",
    },
    {
        id: "STK-00046",
        productId: "MED-PARA-650",
        sku: "PARA-650-TAB",
        name: "Paracetamol 650 mg Tablets",
        brand: "Medico",
        mfg: "Medico Formulations",
        hsn: "30045039",
        batch: "P65X9C",
        mrp: "₹ 75.00",
        mfgDate: "2025-02-02T09:11:02+05:30",
        expDate: "2026-12-31T23:59:59+05:30",
        pack: "10 x 15",
        qty: 1,
        price: "₹ 60.00",
        barcode: "8906543210987",
        lot: "LOT-9213",
    },
];

/** Safe access to build/commit ISO injected by Vite define */
const APP_BUILD = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
const APP_COMMIT = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : new Date().toISOString();

/** Custom lightweight modal for demo notices */
function DemoNotice({ open, title = "Demo Mode", message, onClose }) {
    if (!open) return null;
    return (
        <Styled.ModalBackdrop role="dialog" aria-modal="true" aria-label={title}>
            <Styled.ModalCard className="card">
                <header className="modalHeader">
                    <h3>{title}</h3>
                    <button onClick={onClose} title="Close">✕</button>
                </header>
                <div className="modalBody">
                    <p>{message || "This action is disabled in the demo."}</p>
                </div>
                <footer className="modalFooter">
                    <button onClick={onClose} className="primary">OK</button>
                </footer>
            </Styled.ModalCard>
        </Styled.ModalBackdrop>
    );
}

export default function PrintStickerPage() {
    const { id } = useParams(); // sticker id
    const location = useLocation();
    const navigate = useNavigate();

    // options to tweak preview (display-only)
    const [stickerSize, setStickerSize] = useState("50x25"); // '25x25' | '50x25' | '100x75'
    const [columns, setColumns] = useState(2);
    const [showBarcode, setShowBarcode] = useState(true);
    const [showQR, setShowQR] = useState(true);
    const [showPrice, setShowPrice] = useState(true);
    const [demoOpen, setDemoOpen] = useState(false);

    // select record by id, else fallback to first
    const record = useMemo(() => {
        if (!id) return DEMO_ITEMS[0];
        return DEMO_ITEMS.find(x => x.id === id) || DEMO_ITEMS[0];
    }, [id]);

    const printedAtISO = useMemo(() => new Date().toISOString(), [location.key]);

    // Print only selected section helper
    const doPrint = () => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
        }
    };

    const copyLink = async () => {
        const url = window.location.href;
        try {
            await navigator.clipboard.writeText(url);
        } catch {
            // no alerts—silent fallback
        }
    };

    const openNewTab = () => {
        window.open(window.location.href, "_blank", "noopener,noreferrer");
    };

    const openDemoNotice = () => setDemoOpen(true);
    const closeDemoNotice = () => setDemoOpen(false);

    // navigate helpers
    const goto = (href) => () => navigate(href);

    return (
        <>
            {/* Print CSS for section-only print */}
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

            <Styled.Wrap>
                <header className="pageHeader">
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <Link to="/home" title="Home">Home</Link>
                        <span>/</span>
                        <Link to="/orders" title="Orders">Orders</Link>
                        <span>/</span>
                        <Link to={`/orders/ORD-3001`} title="Order details">ORD-3001</Link>
                        <span>/</span>
                        <Link to={`/print/sticker/${record.id}`} title="Sticker print">Sticker</Link>
                    </nav>

                    <div className="heading">
                        <div className="title">
                            <h1>Print Sticker</h1>
                            <p className="sub">
                                Sticker ID: <strong>{record.id}</strong> • Product: <Link to={`/products/${record.productId}`}>{record.productId}</Link>
                            </p>
                        </div>
                        <div className="headerActions">
                            <button onClick={doPrint} className="primary" title="Print section">Print Sticker</button>
                            <button onClick={copyLink} title="Copy URL">Copy Link</button>
                            <button onClick={openNewTab} title="Open in new tab">Open in New Tab</button>
                            <button onClick={openDemoNotice} title="Download PNG (demo disabled)">&darr; Download PNG</button>
                        </div>
                    </div>
                </header>

                {/* Secondary quick nav */}
                <Styled.Tabs role="tablist" aria-label="Print views">
                    <Link to={`/print/invoice/INV-2031`} role="tab" title="Print Invoice">Invoice</Link>
                    <Link to={`/print/quote/Q-1099`} role="tab" title="Print Quote">Quote</Link>
                    <Link to={`/print/sticker/${record.id}`} role="tab" aria-selected="true" title="Print Sticker" className="active">Sticker</Link>
                </Styled.Tabs>

                <Styled.Grid>
                    {/* Left: meta & options */}
                    <section aria-labelledby="meta-title" className="card metaCard">
                        <h2 id="meta-title">Sticker Meta</h2>

                        <dl className="metaList">
                            <div>
                                <dt>Sticker ID</dt>
                                <dd>{record.id}</dd>
                            </div>
                            <div>
                                <dt>Product</dt>
                                <dd>
                                    <Link to={`/products/${record.productId}`}>{record.name}</Link>
                                    <div className="muted">SKU: {record.sku}</div>
                                </dd>
                            </div>
                            <div>
                                <dt>Brand</dt>
                                <dd>{record.brand}</dd>
                            </div>
                            <div>
                                <dt>Manufacturer</dt>
                                <dd>{record.mfg}</dd>
                            </div>
                            <div>
                                <dt>HSN</dt>
                                <dd>{record.hsn}</dd>
                            </div>
                            <div>
                                <dt>Batch</dt>
                                <dd>{record.batch}</dd>
                            </div>
                            <div>
                                <dt>Lot</dt>
                                <dd><Link to={`/inventory/lots`}>{record.lot}</Link></dd>
                            </div>
                            <div>
                                <dt>MRP</dt>
                                <dd>{record.mrp}</dd>
                            </div>
                            <div>
                                <dt>Pack</dt>
                                <dd>{record.pack}</dd>
                            </div>
                            <div>
                                <dt>Manufactured</dt>
                                <dd>{fmtDate(record.mfgDate)}</dd>
                            </div>
                            <div>
                                <dt>Expiry</dt>
                                <dd>{fmtDate(record.expDate)}</dd>
                            </div>
                            <div>
                                <dt>Printed At</dt>
                                <dd>{fmtDateTime(printedAtISO)}</dd>
                            </div>
                            <div>
                                <dt>Build</dt>
                                <dd>{fmtDateTime(APP_BUILD)}</dd>
                            </div>
                            <div>
                                <dt>Last Commit</dt>
                                <dd>{fmtDateTime(APP_COMMIT)}</dd>
                            </div>
                        </dl>

                        <div className="divider" />

                        <div className="optionRow">
                            <span className="label">Sticker Size</span>
                            <div className="chipRow" role="group" aria-label="Sticker size">
                                {["25x25", "50x25", "100x75"].map(sz => (
                                    <button
                                        key={sz}
                                        className={`chip ${stickerSize === sz ? "selected" : ""}`}
                                        onClick={() => setStickerSize(sz)}
                                        title={sz.replace("x", " × ") + " mm"}
                                    >
                                        {sz.replace("x", "×")} mm
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="optionRow">
                            <span className="label">Columns</span>
                            <div className="chipRow" role="group" aria-label="Columns">
                                {[1, 2, 3, 4].map(c => (
                                    <button
                                        key={c}
                                        className={`chip ${columns === c ? "selected" : ""}`}
                                        onClick={() => setColumns(c)}
                                        title={`${c} per row`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="optionRow">
                            <span className="label">Elements</span>
                            <div className="toggleRow">
                                <label>
                                    <input type="checkbox" checked={showBarcode} onChange={(e) => setShowBarcode(e.target.checked)} />
                                    <span>Barcode</span>
                                </label>
                                <label>
                                    <input type="checkbox" checked={showQR} onChange={(e) => setShowQR(e.target.checked)} />
                                    <span>QR</span>
                                </label>
                                <label>
                                    <input type="checkbox" checked={showPrice} onChange={(e) => setShowPrice(e.target.checked)} />
                                    <span>Price</span>
                                </label>
                            </div>
                        </div>

                        <div className="divider" />

                        <div className="links">
                            <h3>Related Links</h3>
                            <ul>
                                <li><Link to={`/orders`}>Orders</Link></li>
                                <li><Link to={`/orders/ORD-3001`}>Order ORD-3001</Link></li>
                                <li><Link to={`/invoices/INV-2031`}>Invoice INV-2031</Link></li>
                                <li><Link to={`/receipts`}>Receipts</Link></li>
                                <li><Link to={`/inventory`}>Inventory</Link></li>
                                <li><Link to={`/inventory/batches`}>Batches</Link></li>
                                <li><Link to={`/inventory/warehouses`}>Warehouses</Link></li>
                                <li><Link to={`/medicines`}>Medicines Catalog</Link></li>
                                <li><Link to={`/medicines/expiry-tracker`}>Expiry Tracker</Link></li>
                                <li><Link to={`/reports/inventory`}>Inventory Report</Link></li>
                                <li><Link to={`/tools/print-templates`}>Print Templates</Link></li>
                            </ul>
                        </div>
                    </section>

                    {/* Right: preview grid (print target) */}
                    <section className="preview card">
                        <header className="previewHead">
                            <h2>Preview</h2>
                            <div className="rowBtns">
                                <button onClick={doPrint} className="primary" title="Print section">Print</button>
                                <button onClick={openDemoNotice} title="Duplicate (demo disabled)">Duplicate</button>
                                <button onClick={goto(`/products/${record.productId}`)} title="Go to product">Open Product</button>
                            </div>
                        </header>

                        <div
                            id="search-print-area"
                            className={`sheet columns-${columns} size-${stickerSize}`}
                            aria-label="Sticker sheet"
                        >
                            {Array.from({ length: columns * 6 }).map((_, i) => (
                                <Sticker
                                    key={i}
                                    record={record}
                                    showBarcode={showBarcode}
                                    showQR={showQR}
                                    showPrice={showPrice}
                                    size={stickerSize}
                                />
                            ))}
                        </div>
                    </section>
                </Styled.Grid>

                <footer className="pageFooter">
                    <div className="left">
                        <Link to="/home">Home</Link>
                        <span>•</span>
                        <Link to="/reports">Reports</Link>
                        <span>•</span>
                        <Link to="/settings/appearance">Appearance</Link>
                        <span>•</span>
                        <Link to="/help">Help</Link>
                    </div>
                    <div className="right">
                        <span>Built: {fmtDateTime(APP_BUILD)}</span>
                        <span>•</span>
                        <span>Commit: {fmtDateTime(APP_COMMIT)}</span>
                    </div>
                </footer>
            </Styled.Wrap>

            <DemoNotice
                open={demoOpen}
                onClose={closeDemoNotice}
                message="Nice try. Downloads and write operations are disabled in this demo."
            />
        </>
    );
}

/** Single sticker card */
function Sticker({ record, showBarcode, showQR, showPrice, size }) {
    return (
        <Styled.Sticker className={`sticker size-${size}`} role="group" aria-label={`${record.name} sticker`}>
            <div className="line a">
                <div className="brand">{record.brand}</div>
                <div className="sku">{record.sku}</div>
            </div>

            <div className="line b">
                <div className="name" title={record.name}>{record.name}</div>
            </div>

            <div className="line c">
                <div className="pair"><span>Batch</span><strong>{record.batch}</strong></div>
                <div className="pair"><span>Mfg</span><strong>{fmtDate(record.mfgDate)}</strong></div>
                <div className="pair"><span>Exp</span><strong>{fmtDate(record.expDate)}</strong></div>
            </div>

            <div className="line d">
                <div className="pair"><span>Pack</span><strong>{record.pack}</strong></div>
                <div className="pair"><span>HSN</span><strong>{record.hsn}</strong></div>
                {showPrice && <div className="pair"><span>MRP</span><strong>{record.mrp}</strong></div>}
            </div>

            <div className="line e">
                {showBarcode && (
                    <div className="barcode" aria-label={`Barcode ${record.barcode}`}>
                        <div className="bars" />
                        <div className="code">{record.barcode}</div>
                    </div>
                )}
                {showQR && (
                    <div className="qr" role="img" aria-label={`QR ${record.sku}`} />
                )}
            </div>
        </Styled.Sticker>
    );
}
