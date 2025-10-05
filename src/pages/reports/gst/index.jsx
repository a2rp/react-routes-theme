import React, { useMemo, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { MdPrint, MdFileDownload, MdOpenInNew, MdInfo, MdWarning, MdCheckCircle, MdPlayArrow, MdContentCopy } from "react-icons/md";

/** date format helpers */
const fmtDate = (iso) => {
    try { return new Date(iso).toDateString(); } catch { return iso; }
};
const fmtDateTime = (iso) => {
    try {
        const d = new Date(iso);
        const date = d.toDateString(); // "Sat Oct 04 2025"
        const time = d.toTimeString().slice(0, 8); // "15:38:20"
        return `${date} ${time}hrs`;
    } catch { return iso; }
};
const nowDT = () => fmtDateTime(new Date().toISOString());

/** demo-only confirm modal */
function ConfirmModal({ open, title, message, onClose }) {
    if (!open) return null;
    return (
        <Styled.ModalBackdrop>
            <Styled.ModalCard role="dialog" aria-modal="true" aria-labelledby="confirm-title">
                <div className="head">
                    <h4 id="confirm-title">{title}</h4>
                    <button onClick={onClose} className="ghost" aria-label="Close modal">✕</button>
                </div>
                <div className="body">
                    <p>{message}</p>
                    <ul className="hints">
                        <li><NavLink to="/tools/import-export">Use Import / Export</NavLink> to try file actions.</li>
                        <li>All critical actions are disabled in demo.</li>
                    </ul>
                </div>
                <div className="foot">
                    <button onClick={onClose}>Close</button>
                </div>
            </Styled.ModalCard>
        </Styled.ModalBackdrop>
    );
}

export default function ReportGstPage() {
    const navigate = useNavigate();
    const [modal, setModal] = useState({ open: false, title: "", message: "" });

    const asOf = useMemo(() => nowDT(), []);

    const openBlocked = (title, message) => setModal({ open: true, title, message });
    const closeModal = () => setModal({ open: false, title: "", message: "" });

    const handlePrintSection = () => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 600);
        }
    };

    const copyPath = (path) => {
        try {
            navigator.clipboard?.writeText(window.location.origin + path);
        } catch { }
    };

    return (
        <Styled.Page id="gst-report-page">
            {/* sticky header */}
            <Styled.Topbar>
                <div className="left">
                    <h1>GST Summary</h1>
                    <div className="breadcrumbs">
                        <NavLink to="/home">Home</NavLink>
                        <span>›</span>
                        <NavLink to="/reports">Reports</NavLink>
                        <span>›</span>
                        <strong>GST</strong>
                    </div>
                </div>
                <div className="right">
                    <button onClick={() => openBlocked("Export Disabled", "This is a demo. File export is disabled.")} title="Export CSV">
                        <MdFileDownload /> Export
                    </button>
                    <button onClick={handlePrintSection} title="Print this section">
                        <MdPrint /> Print
                    </button>
                    <button className="ghost" onClick={() => navigate("/finance/gst-returns")} title="Open GST Returns">
                        <MdOpenInNew /> GST Returns
                    </button>
                </div>
            </Styled.Topbar>

            {/* filter strip (display-only) */}
            <Styled.Filters className="card">
                <div className="row">
                    <label>
                        Period
                        <select disabled defaultValue="2025-10">
                            <option value="2025-10">Oct 2025</option>
                            <option value="2025-09">Sep 2025</option>
                            <option value="2025-08">Aug 2025</option>
                        </select>
                    </label>
                    <label>
                        FY
                        <select disabled defaultValue="2025-2026">
                            <option>2025-2026</option>
                            <option>2024-2025</option>
                            <option>2023-2024</option>
                        </select>
                    </label>
                    <label>
                        Branch
                        <select disabled defaultValue="All">
                            <option>All</option>
                            <option>HQ</option>
                            <option>Warehouse-A</option>
                            <option>Store-1</option>
                        </select>
                    </label>
                    <label>
                        GSTIN
                        <select disabled defaultValue="27ABCDE1234Z5Z6">
                            <option>27ABCDE1234Z5Z6</option>
                            <option>07ABCDE1234Z5Z6</option>
                        </select>
                    </label>
                    <div className="asof">as of <span>{asOf}</span></div>
                </div>
                <div className="quick">
                    <Link to="/reports/gst">Refresh</Link>
                    <Link to="/reports/sales">Sales Report</Link>
                    <Link to="/invoices">Invoices</Link>
                    <Link to="/receipts">Receipts</Link>
                    <Link to="/finance/taxes">Tax Settings</Link>
                    <Link to="/tools/import-export">Import / Export</Link>
                </div>
            </Styled.Filters>

            {/* PRINT SCOPE */}
            <section id="search-print-area">
                {/* KPI cards */}
                <Styled.Kpis>
                    <div className="kpi card">
                        <div className="label">Outward GST (GSTR-1)</div>
                        <div className="value">₹ 12,48,900</div>
                        <div className="meta">B2B + B2C + Exports</div>
                        <div className="links">
                            <NavLink to="/reports/sales">View Sales</NavLink>
                            <NavLink to="/invoices">Open Invoices</NavLink>
                        </div>
                    </div>
                    <div className="kpi card">
                        <div className="label">Input Tax Credit (ITC)</div>
                        <div className="value">₹ 3,82,450</div>
                        <div className="meta">Eligible ITC from purchases</div>
                        <div className="links">
                            <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                            <NavLink to="/vendors">Vendors</NavLink>
                        </div>
                    </div>
                    <div className="kpi card">
                        <div className="label">Net GST Liability</div>
                        <div className="value">₹ 8,66,450</div>
                        <div className="meta">After ITC adjustments</div>
                        <div className="links">
                            <NavLink to="/finance">Finance</NavLink>
                            <NavLink to="/finance/journals">Journals</NavLink>
                        </div>
                    </div>
                    <div className="kpi card">
                        <div className="label">Payable Due</div>
                        <div className="value">₹ 8,66,450</div>
                        <div className="meta">Due by <span>{fmtDate("2025-10-20T00:00:00Z")}</span></div>
                        <div className="links">
                            <NavLink to="/finance/gst-returns">GST Returns</NavLink>
                            <NavLink to="/reports/gst">GST Summary</NavLink>
                        </div>
                    </div>
                </Styled.Kpis>

                {/* status pills */}
                <Styled.StatusRow className="card">
                    <div className="pill ok"><MdCheckCircle /> GSTR-1 Prepared</div>
                    <div className="pill warn"><MdWarning /> 2 Invoices Missing HSN</div>
                    <div className="pill info"><MdInfo /> Reconciliation Pending</div>
                    <div className="spacer" />
                    <button
                        onClick={() => openBlocked("Filing Disabled", "Filing actions are disabled in demo.")}
                        title="File GSTR-3B"
                    >
                        <MdPlayArrow /> File GSTR-3B
                    </button>
                </Styled.StatusRow>

                {/* tabs-ish: three wide sections */}
                <Styled.ThreeCol>
                    <div className="panel card">
                        <div className="panelHead">Outward Supplies (Sales)</div>
                        <div className="panelBody">
                            <div className="numRow">
                                <div><span className="num">₹ 9,21,500</span><span className="cap">B2B</span></div>
                                <div><span className="num">₹ 2,98,400</span><span className="cap">B2C</span></div>
                                <div><span className="num">₹ 29,000</span><span className="cap">Exports/SEZ</span></div>
                            </div>
                            <div className="actions">
                                <NavLink to="/reports/sales">Sales Report</NavLink>
                                <NavLink to="/invoices">Invoices</NavLink>
                                <NavLink to="/sales/returns">Sales Returns</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="panel card">
                        <div className="panelHead">Input Tax Credit (Purchases)</div>
                        <div className="panelBody">
                            <div className="numRow">
                                <div><span className="num">₹ 2,44,300</span><span className="cap">IGST</span></div>
                                <div><span className="num">₹ 1,10,750</span><span className="cap">CGST</span></div>
                                <div><span className="num">₹ 27,400</span><span className="cap">SGST</span></div>
                            </div>
                            <div className="actions">
                                <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                                <NavLink to="/vendors">Vendors</NavLink>
                                <NavLink to="/inventory/batches">Batches</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="panel card">
                        <div className="panelHead">Reconciliation</div>
                        <div className="panelBody">
                            <ul className="list">
                                <li>2 invoices missing HSN — <Link to="/invoices">review</Link></li>
                                <li>1 supplier GSTIN unverified — <Link to="/vendors">check vendor</Link></li>
                                <li>3 e-way bills not linked — <Link to="/shipments">link shipment</Link></li>
                            </ul>
                            <div className="actions">
                                <NavLink to="/finance/ledgers">Ledgers</NavLink>
                                <NavLink to="/admin/audit-log">Audit Log</NavLink>
                            </div>
                        </div>
                    </div>
                </Styled.ThreeCol>

                {/* outward supplies table */}
                <Styled.TableBlock className="card">
                    <div className="head">
                        <h3>Invoice Register — Outward</h3>
                        <div className="links">
                            <Link to="/invoices">Open List</Link>
                            <button onClick={() => openBlocked("Export Disabled", "Exporting tables is disabled in demo.")}><MdFileDownload /> Export</button>
                        </div>
                    </div>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Invoice</th>
                                    <th>Date</th>
                                    <th>Customer</th>
                                    <th>Place of Supply</th>
                                    <th>Taxable</th>
                                    <th>IGST</th>
                                    <th>CGST</th>
                                    <th>SGST</th>
                                    <th>Total</th>
                                    <th>Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { inv: "INV-2031", date: "2025-10-02T11:21:08Z", cust: "Medicare Pvt Ltd", pos: "MH", tx: "₹ 1,10,000", igst: "₹ 0", cgst: "₹ 9,900", sgst: "₹ 9,900", total: "₹ 1,29,800" },
                                    { inv: "INV-2032", date: "2025-10-03T06:40:12Z", cust: "Aster Hospital", pos: "KA", tx: "₹ 2,45,000", igst: "₹ 22,050", cgst: "₹ 0", sgst: "₹ 0", total: "₹ 2,67,050" },
                                    { inv: "INV-2033", date: "2025-10-03T10:14:44Z", cust: "Retail Walk-in", pos: "MH", tx: "₹ 18,500", igst: "₹ 0", cgst: "₹ 832", sgst: "₹ 832", total: "₹ 20,164" },
                                ].map(r => (
                                    <tr key={r.inv}>
                                        <td><NavLink to={`/invoices/${r.inv}`}>{r.inv}</NavLink></td>
                                        <td>{fmtDate(r.date)}</td>
                                        <td>{r.cust}</td>
                                        <td>{r.pos}</td>
                                        <td className="num">{r.tx}</td>
                                        <td className="num">{r.igst}</td>
                                        <td className="num">{r.cgst}</td>
                                        <td className="num">{r.sgst}</td>
                                        <td className="num">{r.total}</td>
                                        <td className="links">
                                            <Link to={`/invoices/${r.inv}/print`}>Print</Link>
                                            <button className="linkish" onClick={() => copyPath(`/invoices/${r.inv}`)} title="Copy deep link">
                                                <MdContentCopy /> Copy
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styled.TableBlock>

                {/* ITC table */}
                <Styled.TableBlock className="card">
                    <div className="head">
                        <h3>Input Tax Credit — Purchases</h3>
                        <div className="links">
                            <Link to="/purchase-orders">Purchases</Link>
                            <button onClick={() => openBlocked("Export Disabled", "Exporting tables is disabled in demo.")}><MdFileDownload /> Export</button>
                        </div>
                    </div>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Bill No</th>
                                    <th>Date</th>
                                    <th>Vendor</th>
                                    <th>GSTIN</th>
                                    <th>Taxable</th>
                                    <th>IGST</th>
                                    <th>CGST</th>
                                    <th>SGST</th>
                                    <th>Total</th>
                                    <th>Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { bill: "BILL-5581", date: "2025-10-01T09:00:03Z", vendor: "Trinity Pharma", gstin: "27ABCDE1234Z5Z6", tx: "₹ 1,55,000", igst: "₹ 0", cgst: "₹ 13,950", sgst: "₹ 13,950", total: "₹ 1,82,900" },
                                    { bill: "BILL-5589", date: "2025-10-03T05:11:33Z", vendor: "Supreme Drugs", gstin: "07ABCDE1234Z5Z6", tx: "₹ 98,500", igst: "₹ 17,730", cgst: "₹ 0", sgst: "₹ 0", total: "₹ 1,16,230" },
                                ].map(r => (
                                    <tr key={r.bill}>
                                        <td>{r.bill}</td>
                                        <td>{fmtDate(r.date)}</td>
                                        <td><NavLink to="/vendors"> {r.vendor} </NavLink></td>
                                        <td>{r.gstin}</td>
                                        <td className="num">{r.tx}</td>
                                        <td className="num">{r.igst}</td>
                                        <td className="num">{r.cgst}</td>
                                        <td className="num">{r.sgst}</td>
                                        <td className="num">{r.total}</td>
                                        <td className="links">
                                            <Link to="/vendors">Vendor</Link>
                                            <Link to="/inventory/batches">Batches</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Styled.TableBlock>

                {/* timeline */}
                <Styled.Timeline className="card">
                    <h3>Filing Timeline</h3>
                    <ul>
                        <li>
                            <div className="dot ok" />
                            <div className="content">
                                <div className="t">GSTR-1 prepared</div>
                                <div className="d">{fmtDateTime("2025-10-05T06:18:11Z")}</div>
                                <div className="links">
                                    <Link to="/reports/sales">Sales</Link>
                                    <Link to="/invoices">Invoices</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dot info" />
                            <div className="content">
                                <div className="t">Reconciliation review</div>
                                <div className="d">{fmtDateTime("2025-10-07T10:01:22Z")}</div>
                                <div className="links">
                                    <Link to="/finance/ledgers">Ledgers</Link>
                                    <Link to="/admin/audit-log">Audit log</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dot warn" />
                            <div className="content">
                                <div className="t">2 invoices missing HSN</div>
                                <div className="d">{fmtDateTime("2025-10-08T08:42:00Z")}</div>
                                <div className="links">
                                    <Link to="/invoices">Fix invoices</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Styled.Timeline>

                {/* quick navigation tiles */}
                <Styled.QuickGrid>
                    {[
                        { to: "/reports", title: "Reports Home", caption: "All reports" },
                        { to: "/reports/sales", title: "Sales Report", caption: "GSTR-1 basis" },
                        { to: "/finance/gst-returns", title: "GST Returns", caption: "Filings & challans" },
                        { to: "/invoices", title: "Invoices", caption: "Outward supplies" },
                        { to: "/purchase-orders", title: "Purchases", caption: "ITC sources" },
                        { to: "/inventory/batches", title: "Batches", caption: "HSN & expiry" },
                        { to: "/tools/import-export", title: "Import / Export", caption: "Data snapshots" },
                        { to: "/settings/tax", title: "Tax Settings", caption: "Rates & codes" },
                    ].map(tile => (
                        <NavLink key={tile.to} to={tile.to} className="q card">
                            <div className="t">{tile.title}</div>
                            <div className="c">{tile.caption}</div>
                        </NavLink>
                    ))}
                </Styled.QuickGrid>
            </section>

            {/* print CSS (as supplied) */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <ConfirmModal
                open={modal.open}
                title={modal.title}
                message={modal.message}
                onClose={closeModal}
            />
        </Styled.Page>
    );
}
