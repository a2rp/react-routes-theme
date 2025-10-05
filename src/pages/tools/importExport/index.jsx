import React, { useMemo, useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./styled";
import { FiDownload, FiUpload, FiPrinter, FiLink, FiExternalLink, FiArchive, FiClock, FiFolder, FiFile } from "react-icons/fi";

/** Date/Time formatting helpers (required formats)
 *  Date => Sat Oct 04 2025
 *  Date+Time => Sat Oct 04 2025 15:38:20hrs
 *  Time => 15:38:20hrs
 */
function fmtDate(d) {
    const day = d.toDateString(); // "Sat Oct 04 2025"
    return day;
}
function pad(n) { return String(n).padStart(2, "0"); }
function fmtTime(d) {
    const hh = pad(d.getHours()), mm = pad(d.getMinutes()), ss = pad(d.getSeconds());
    return `${hh}:${mm}:${ss}hrs`;
}
function fmtDateTime(d) {
    return `${fmtDate(d)} ${fmtTime(d)}`;
}

const now = new Date();

// Non-blocking custom modal
const DemoModal = ({ open, onClose, title = "Demo mode", children }) => {
    if (!open) return null;
    return (
        <S.ModalOverlay role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
            <S.ModalCard>
                <div className="header">
                    <h3 id="demo-modal-title">{title}</h3>
                    <button onClick={onClose} className="ghost" aria-label="Close modal">×</button>
                </div>
                <div className="body">{children}</div>
                <div className="footer">
                    <button onClick={onClose}>OK</button>
                </div>
            </S.ModalCard>
        </S.ModalOverlay>
    );
};

const ImportExport = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState(null);

    const openDemoModal = useCallback((body) => {
        setModalBody(body);
        setModalOpen(true);
    }, []);
    const closeDemoModal = useCallback(() => setModalOpen(false), []);

    const lastFullExport = useMemo(() => fmtDateTime(new Date(now.getTime() - 1000 * 60 * 60 * 26)), []); // yesterday-ish
    const lastCustomerExport = useMemo(() => fmtDateTime(new Date(now.getTime() - 1000 * 60 * 40)), []);  // ~40 mins ago
    const lastInvoicesExport = useMemo(() => fmtDateTime(new Date(now.getTime() - 1000 * 60 * 5)), []);   // ~5 mins ago

    const onPrintSummary = useCallback(() => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            // tiny delay for browsers that defer class removal after print
            setTimeout(() => document.body.classList.remove("print-section-mode"), 50);
        }
    }, []);

    const onExportClick = useCallback((what) => {
        openDemoModal(
            <div>
                <p><strong>{what}</strong> export is disabled in this showcase.</p>
                <p>You can still browse, copy deep links, or print this summary.</p>
            </div>
        );
    }, [openDemoModal]);

    const onImportClick = useCallback(() => {
        openDemoModal(
            <div>
                <p><strong>Import</strong> is disabled in this showcase.</p>
                <p>In a real app, you would upload a JSON/CSV and map columns here.</p>
            </div>
        );
    }, [openDemoModal]);

    const quickLinks = [
        { to: "/customers", label: "Customers" },
        { to: "/orders", label: "Orders" },
        { to: "/products", label: "Products" },
        { to: "/categories", label: "Categories" },
        { to: "/inventory", label: "Inventory" },
        { to: "/vendors", label: "Vendors" },
        { to: "/purchase-orders", label: "Purchase Orders" },
        { to: "/shipments", label: "Shipments" },
        { to: "/invoices", label: "Invoices" },
        { to: "/receipts", label: "Receipts" },
        { to: "/finance", label: "Finance" },
        { to: "/reports", label: "Reports" },
        { to: "/settings", label: "Settings" },
        { to: "/admin/users", label: "Admin → Users" },
    ];

    const deepLinks = [
        { label: "Customer CUST-1001", to: "/customers/CUST-1001" },
        { label: "Order ORD-3001", to: "/orders/ORD-3001" },
        { label: "Product MED-AMOX-500", to: "/products/MED-AMOX-500" },
        { label: "Invoice INV-2031", to: "/invoices/INV-2031" },
        { label: "Shipment SHP-5501", to: "/shipments/SHP-5501" },
        { label: "Vendor VEND-2002", to: "/vendors/VEND-2002" },
    ];

    return (
        <S.Root>
            {/* Printable area */}
            <section id="search-print-area">
                <S.Header>
                    <div className="title">
                        <FiArchive aria-hidden size={22} />
                        <div>
                            <h1>Import / Export</h1>
                            <p className="muted">Display-only showcase. Explore exports, print summaries, and jump via deep links.</p>
                        </div>
                    </div>

                    <S.Toolbar>
                        <button onClick={() => onExportClick("Full")} title="Export all data as JSON">
                            <FiDownload size={16} /> Export All (JSON)
                        </button>
                        <button onClick={() => onExportClick("Customers")} title="Export customers as JSON">
                            <FiDownload size={16} /> Export Customers
                        </button>
                        <button onClick={() => onExportClick("Invoices")} title="Export invoices as JSON">
                            <FiDownload size={16} /> Export Invoices
                        </button>
                        <button onClick={onPrintSummary} title="Print the summary section">
                            <FiPrinter size={16} /> Print Summary
                        </button>
                    </S.Toolbar>

                    <S.MetaRow>
                        <span><FiClock /> Last full export: <strong>{lastFullExport}</strong></span>
                        <span><FiClock /> Customers: <strong>{lastCustomerExport}</strong></span>
                        <span><FiClock /> Invoices: <strong>{lastInvoicesExport}</strong></span>
                    </S.MetaRow>
                </S.Header>

                <S.Grid>
                    {/* Export collections */}
                    <S.Card>
                        <div className="cardHead">
                            <h3>Collections</h3>
                            <span className="badge">Export</span>
                        </div>
                        <div className="rows">
                            <div className="row">
                                <div className="left">
                                    <FiFolder /> <span>Customers</span>
                                </div>
                                <div className="right">
                                    <NavLink to="/customers" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Customers")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Orders</span></div>
                                <div className="right">
                                    <NavLink to="/orders" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Orders")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Products</span></div>
                                <div className="right">
                                    <NavLink to="/products" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Products")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Categories</span></div>
                                <div className="right">
                                    <NavLink to="/categories" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Categories")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Inventory</span></div>
                                <div className="right">
                                    <NavLink to="/inventory" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Inventory")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Vendors</span></div>
                                <div className="right">
                                    <NavLink to="/vendors" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Vendors")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Purchase Orders</span></div>
                                <div className="right">
                                    <NavLink to="/purchase-orders" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Purchase Orders")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Shipments</span></div>
                                <div className="right">
                                    <NavLink to="/shipments" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Shipments")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Invoices</span></div>
                                <div className="right">
                                    <NavLink to="/invoices" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Invoices")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Receipts</span></div>
                                <div className="right">
                                    <NavLink to="/receipts" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Receipts")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Finance (Ledgers, Journals)</span></div>
                                <div className="right">
                                    <NavLink to="/finance" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Finance")}><FiDownload /> Export</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFolder /> <span>Reports</span></div>
                                <div className="right">
                                    <NavLink to="/reports" end className="link"><FiExternalLink /> Open</NavLink>
                                    <button onClick={() => onExportClick("Reports")}><FiDownload /> Export</button>
                                </div>
                            </div>
                        </div>
                    </S.Card>

                    {/* Import (disabled demo) */}
                    <S.Card>
                        <div className="cardHead">
                            <h3>Import</h3>
                            <span className="badge">Disabled</span>
                        </div>
                        <div className="importWrap">
                            <div className="dropZone" role="button" tabIndex={0}
                                onClick={onImportClick}
                                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onImportClick()}>
                                <FiUpload size={24} />
                                <p>Drag & drop JSON/CSV here</p>
                                <S.Muted>Or click to select a file</S.Muted>
                            </div>
                            <div className="map">
                                <h4>Column Mapping</h4>
                                <p>Preview how incoming columns would map to entities.</p>
                                <div className="mapRows">
                                    <div className="mapRow"><span>customer_id</span><span>→</span><strong>Customer ID</strong></div>
                                    <div className="mapRow"><span>name</span><span>→</span><strong>Display Name</strong></div>
                                    <div className="mapRow"><span>email</span><span>→</span><strong>Email</strong></div>
                                    <div className="mapRow"><span>phone</span><span>→</span><strong>Phone</strong></div>
                                </div>
                                <div className="buttons">
                                    <button onClick={onImportClick}><FiUpload /> Validate</button>
                                    <button onClick={onImportClick}><FiUpload /> Import</button>
                                </div>
                            </div>
                        </div>
                    </S.Card>

                    {/* Snapshots */}
                    <S.Card>
                        <div className="cardHead">
                            <h3>Snapshots</h3>
                            <span className="badge">Read-only</span>
                        </div>
                        <div className="rows">
                            <div className="row">
                                <div className="left"><FiFile /> <span>Baseline (Demo)</span></div>
                                <div className="right">
                                    <span className="meta">{fmtDate(new Date(2025, 9, 1))} 09:30:00hrs</span>
                                    <button onClick={() => onExportClick("Snapshot: Baseline")}><FiDownload /> Download</button>
                                    <button onClick={() => openDemoModal(<p>Restore is disabled in the demo.</p>)}>Restore</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFile /> <span>Sales Only</span></div>
                                <div className="right">
                                    <span className="meta">{fmtDate(new Date(2025, 9, 3))} 12:05:12hrs</span>
                                    <button onClick={() => onExportClick("Snapshot: Sales Only")}><FiDownload /> Download</button>
                                    <button onClick={() => openDemoModal(<p>Restore is disabled in the demo.</p>)}>Restore</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="left"><FiFile /> <span>Inventory Focus</span></div>
                                <div className="right">
                                    <span className="meta">{fmtDate(new Date(2025, 9, 4))} 18:28:57hrs</span>
                                    <button onClick={() => onExportClick("Snapshot: Inventory Focus")}><FiDownload /> Download</button>
                                    <button onClick={() => openDemoModal(<p>Restore is disabled in the demo.</p>)}>Restore</button>
                                </div>
                            </div>
                        </div>
                    </S.Card>

                    {/* Deep links */}
                    <S.Card>
                        <div className="cardHead">
                            <h3>Deep Links</h3>
                            <span className="badge">Navigate</span>
                        </div>
                        <S.LinkList>
                            {deepLinks.map((l) => (
                                <li key={l.to}>
                                    <NavLink to={l.to} className="link">
                                        <FiLink /> {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </S.LinkList>
                        <S.Separator />
                        <div className="quickLinks">
                            <h4>Quick sections</h4>
                            <ul>
                                {quickLinks.map((q) => (
                                    <li key={q.to}><NavLink to={q.to} end className="link"><FiExternalLink /> {q.label}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                    </S.Card>
                </S.Grid>
            </section>

            {/* Print stylesheet (exact spec) */}
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

            <DemoModal open={modalOpen} onClose={closeDemoModal}>
                {modalBody}
            </DemoModal>
        </S.Root>
    );
};

export default ImportExport;
