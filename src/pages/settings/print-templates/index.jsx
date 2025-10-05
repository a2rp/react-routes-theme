import React, { useMemo, useState, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import * as S from "./styled";

/** Date + time formatting helpers (required exact formats)
 *  Date        -> Sat Oct 04 2025
 *  Date+Time   -> Sat Oct 04 2025 15:38:20hrs
 *  Time only   -> 15:38:20hrs
 */
function fmtDate(iso) {
    const d = iso ? new Date(iso) : new Date();
    // e.g. "Sat Oct 04 2025"
    return d.toDateString();
}
function fmtTime(iso) {
    const d = iso ? new Date(iso) : new Date();
    const t = d.toLocaleTimeString("en-GB", { hour12: false });
    return `${t}hrs`;
}
function fmtDateTime(iso) {
    const d = iso ? new Date(iso) : new Date();
    return `${d.toDateString()} ${fmtTime(d)}`;
}

/** Demo data (display-only) */
const DEMO_TEMPLATES = [
    {
        id: "tpl-invoice-modern",
        name: "Invoice — Modern",
        entity: "invoice",
        paper: "A4",
        margins: "16mm",
        default: true,
        createdAt: "2025-09-12T11:22:13+05:30",
        updatedAt: "2025-10-04T15:38:20+05:30",
        routePreview: "/print/invoice/INV-2031",
    },
    {
        id: "tpl-invoice-compact",
        name: "Invoice — Compact",
        entity: "invoice",
        paper: "A4",
        margins: "10mm",
        default: false,
        createdAt: "2025-08-03T10:05:43+05:30",
        updatedAt: "2025-09-28T19:07:02+05:30",
        routePreview: "/print/invoice/INV-1022",
    },
    {
        id: "tpl-quote-clean",
        name: "Quote — Clean",
        entity: "quote",
        paper: "A4",
        margins: "14mm",
        default: false,
        createdAt: "2025-07-21T09:31:00+05:30",
        updatedAt: "2025-09-15T18:10:40+05:30",
        routePreview: "/print/quote/Q-5409",
    },
    {
        id: "tpl-receipt-mini",
        name: "Receipt — Mini",
        entity: "receipt",
        paper: "80mm roll",
        margins: "3mm",
        default: false,
        createdAt: "2025-06-11T15:20:00+05:30",
        updatedAt: "2025-09-30T08:00:00+05:30",
        routePreview: "/receipts",
    },
    {
        id: "tpl-sticker-label",
        name: "Sticker — Shipping Label",
        entity: "sticker",
        paper: "4x6in",
        margins: "0",
        default: false,
        createdAt: "2025-08-30T12:12:12+05:30",
        updatedAt: "2025-09-12T12:12:12+05:30",
        routePreview: "/print/sticker/LBL-1001",
    },
];

const DEMO_COMPANY = {
    name: "Acme Healthcare Pvt. Ltd.",
    gstin: "29ABCDE1234F1Z5",
    address: "14, Phoenix Park, Indiranagar, Bengaluru, KA 560038",
    email: "billing@acmehealth.example",
    phone: "+91 80 0000 0000",
};

const DEMO_CUSTOMER = {
    code: "CUST-1001",
    name: "Ashok Kumar",
    address: "32/2 Lakeview Residency, Sector 21, Gurugram, HR 122016",
    email: "ashok.k@example",
    phone: "+91 98 7654 3210",
};

const DEMO_INVOICE = {
    no: "INV-2031",
    date: "2025-10-04T15:38:20+05:30",
    items: [
        { sku: "MED-AMOX-500", name: "Amoxicillin 500mg Capsules", qty: 2, mrp: 240, rate: 210, gst: 12, amount: 420 },
        { sku: "MED-PARA-650", name: "Paracetamol 650mg Tablets", qty: 1, mrp: 90, rate: 75, gst: 5, amount: 75 },
        { sku: "MED-VITC-1K", name: "Vitamin C 1000mg Effervescent", qty: 1, mrp: 350, rate: 299, gst: 12, amount: 299 },
    ],
    totals: { subTotal: 794, tax: 78, roundOff: 0, grand: 872 },
    payment: { status: "Unpaid", due: "2025-10-20T00:00:00+05:30", method: "—" },
};

function ConfirmModal({ open, title, message, onClose }) {
    if (!open) return null;
    return (
        <S.ModalBackdrop role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <S.ModalCard className="card" role="document">
                <h3 id="modalTitle">{title}</h3>
                <p className="muted">{message}</p>
                <div className="actions">
                    <button onClick={onClose} autoFocus>Okay</button>
                </div>
            </S.ModalCard>
        </S.ModalBackdrop>
    );
}

/** Preview components (display-only) */
function InvoicePreview({ company, customer, invoice }) {
    return (
        <S.PreviewSheet id="search-print-area">
            <div className="header">
                <div>
                    <h2>Invoice</h2>
                    <div className="muted">#{invoice.no}</div>
                </div>
                <div className="company">
                    <strong>{company.name}</strong>
                    <div>{company.address}</div>
                    <div>{company.email} · {company.phone}</div>
                    <div>GSTIN: {company.gstin}</div>
                </div>
            </div>

            <div className="meta card">
                <div className="col">
                    <div className="k">Billed To</div>
                    <div className="v">
                        <strong>{customer.name}</strong><br />
                        {customer.address}<br />
                        {customer.email} · {customer.phone}<br />
                        Code: {customer.code}
                    </div>
                </div>
                <div className="col">
                    <div className="k">Invoice Date</div>
                    <div className="v">{fmtDate(invoice.date)}</div>
                    <div className="k">Generated At</div>
                    <div className="v">{fmtDateTime(invoice.date)}</div>
                    <div className="k">Payment Status</div>
                    <div className="v">{invoice.payment.status}</div>
                    <div className="k">Due Date</div>
                    <div className="v">{fmtDate(invoice.payment.due)}</div>
                </div>
            </div>

            <table className="items">
                <thead>
                    <tr>
                        <th style={{ width: "10%" }}>SKU</th>
                        <th>Description</th>
                        <th style={{ width: "10%" }} className="num">Qty</th>
                        <th style={{ width: "12%" }} className="num">Rate</th>
                        <th style={{ width: "10%" }} className="num">GST%</th>
                        <th style={{ width: "14%" }} className="num">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice.items.map((it, idx) => (
                        <tr key={idx}>
                            <td>{it.sku}</td>
                            <td>{it.name}</td>
                            <td className="num">{it.qty}</td>
                            <td className="num">₹{it.rate}</td>
                            <td className="num">{it.gst}%</td>
                            <td className="num">₹{it.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <S.TotalsBlock className="card">
                <div className="row">
                    <div>Subtotal</div>
                    <div>₹{invoice.totals.subTotal}</div>
                </div>
                <div className="row">
                    <div>Tax</div>
                    <div>₹{invoice.totals.tax}</div>
                </div>
                <div className="row">
                    <div>Round Off</div>
                    <div>₹{invoice.totals.roundOff}</div>
                </div>
                <div className="row grand">
                    <div>Grand Total</div>
                    <div>₹{invoice.totals.grand}</div>
                </div>
            </S.TotalsBlock>

            <div className="footer">
                <div className="muted">
                    Thank you for your business. This is a computer-generated invoice. For questions contact {company.email}.
                </div>
                <div className="stamp">Authorized Signatory</div>
            </div>
        </S.PreviewSheet>
    );
}

function QuotePreview() {
    return (
        <S.PreviewPlaceholder className="card" id="search-print-area">
            <h2>Quote</h2>
            <p className="muted">A clean quotation layout preview appears here. Use the “Preview Route” to open a route-based print preview.</p>
            <ul className="links">
                <li><NavLink to="/sales/quotes" title="View all quotations">Go to Quotes</NavLink></li>
                <li><NavLink to="/print/quote/Q-5409" title="Open a sample quote print">Open Print Route</NavLink></li>
                <li><NavLink to="/customers/CUST-1001" title="Open customer">Customer Detail</NavLink></li>
            </ul>
        </S.PreviewPlaceholder>
    );
}

function ReceiptPreview() {
    return (
        <S.PreviewPlaceholder className="card" id="search-print-area">
            <h2>Receipt</h2>
            <p className="muted">Mini thermal receipt preview (80mm). For route-based preview, open Receipts.</p>
            <NavLink to="/receipts" title="Receipts list">Receipts List</NavLink>
        </S.PreviewPlaceholder>
    );
}

function StickerPreview() {
    return (
        <S.PreviewPlaceholder className="card" id="search-print-area">
            <h2>Shipping Label</h2>
            <p className="muted">4x6in label preview. Open the print route to view a standalone page.</p>
            <NavLink to="/print/sticker/LBL-1001" title="Open label route">Open Label Print</NavLink>
        </S.PreviewPlaceholder>
    );
}

export default function SettingsPrintTemplatesPage() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(DEMO_TEMPLATES[0]?.id || "");
    const [modal, setModal] = useState({ open: false, title: "", message: "" });

    const current = useMemo(
        () => DEMO_TEMPLATES.find(t => t.id === selected) || DEMO_TEMPLATES[0],
        [selected]
    );

    const openDemoModal = useCallback((title) => {
        setModal({
            open: true,
            title,
            message: "This is a demo build. Actions that modify data are disabled.",
        });
    }, []);

    const printSection = useCallback(() => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            // allow print dialog to open first
            setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
        }
    }, []);

    const Preview = useMemo(() => {
        switch (current.entity) {
            case "invoice": return () => <InvoicePreview company={DEMO_COMPANY} customer={DEMO_CUSTOMER} invoice={DEMO_INVOICE} />;
            case "quote": return QuotePreview;
            case "receipt": return ReceiptPreview;
            case "sticker": return StickerPreview;
            default: return QuotePreview;
        }
    }, [current]);

    return (
        <S.Wrapper>
            {/* Print CSS (as requested) */}
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

            <S.Header className="card">
                <div className="left">
                    <nav className="crumbs">
                        <Link to="/home" className="crumb">Home</Link>
                        <span className="sep">/</span>
                        <Link to="/settings" className="crumb">Settings</Link>
                        <span className="sep">/</span>
                        <span className="crumb current">Print Templates</span>
                    </nav>
                    <h1>Print Templates</h1>
                    <p className="muted">
                        Configure document layouts for invoices, quotes, receipts and labels. Current environment is read-only for showcase.
                    </p>
                </div>
                <div className="right">
                    <S.ActionRow>
                        <button onClick={() => openDemoModal("Create Template")} title="Create a new template">New Template</button>
                        <button onClick={printSection} title="Print only the preview section">Print Preview</button>
                        <button onClick={() => navigate("/settings/appearance")} title="Adjust theme & appearance">Appearance</button>
                        <button onClick={() => navigate("/settings/numbering")} title="Document numbering rules">Numbering</button>
                    </S.ActionRow>
                    <S.LinksRow>
                        <NavLink to="/invoices" title="Invoices">Invoices</NavLink>
                        <NavLink to="/sales/quotes" title="Quotes">Quotes</NavLink>
                        <NavLink to="/receipts" title="Receipts">Receipts</NavLink>
                        <NavLink to="/shipments" title="Shipments">Shipments</NavLink>
                        <NavLink to="/reports" title="Reports">Reports</NavLink>
                        <NavLink to="/reports/finance" title="Finance Report">Finance Report</NavLink>
                    </S.LinksRow>
                </div>
            </S.Header>

            <S.Layout>
                <S.ListPane className="card">
                    <div className="paneTitle">
                        <h3>Templates</h3>
                        <div className="meta muted">Updated: {fmtDateTime("2025-10-04T15:38:20+05:30")}</div>
                    </div>

                    <S.TemplateGrid>
                        {DEMO_TEMPLATES.map(t => (
                            <S.TemplateCard
                                key={t.id}
                                role="button"
                                tabIndex={0}
                                aria-pressed={t.id === selected}
                                data-active={t.id === selected ? "true" : "false"}
                                onClick={() => setSelected(t.id)}
                                onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? (e.preventDefault(), setSelected(t.id)) : null)}
                                title={`Select ${t.name}`}
                            >
                                <div className="row1">
                                    <h4 className="name">{t.name}</h4>
                                    {t.default && <S.Badge>Default</S.Badge>}
                                </div>
                                <div className="row2 muted">
                                    <span>{t.entity.toUpperCase()}</span>
                                    <span>•</span>
                                    <span>{t.paper}</span>
                                    <span>•</span>
                                    <span>Margins {t.margins}</span>
                                </div>
                                <S.MetaTable>
                                    <div className="k">Created</div>
                                    <div className="v">{fmtDate(t.createdAt)}</div>
                                    <div className="k">Updated</div>
                                    <div className="v">{fmtDateTime(t.updatedAt)}</div>
                                    <div className="k">Preview Route</div>
                                    <div className="v">
                                        <NavLink to={t.routePreview} title="Open print route">
                                            {t.routePreview}
                                        </NavLink>
                                    </div>
                                </S.MetaTable>
                                <S.CardActions>
                                    <button onClick={() => openDemoModal("Set as Default")} title="Set as default">Set Default</button>
                                    <button onClick={() => openDemoModal("Duplicate")} title="Duplicate this template">Duplicate</button>
                                    <button onClick={() => openDemoModal("Download HTML")} title="Download static HTML">Download</button>
                                    <button onClick={() => openDemoModal("Delete Template")} title="Delete this template">Delete</button>
                                </S.CardActions>
                            </S.TemplateCard>
                        ))}
                    </S.TemplateGrid>

                    <S.QuickLinks>
                        <div className="title">Quick Links</div>
                        <div className="links">
                            <NavLink to="/settings/print-templates" end>Print Templates</NavLink>
                            <NavLink to="/settings/appearance">Appearance</NavLink>
                            <NavLink to="/settings/notifications">Notifications</NavLink>
                            <NavLink to="/settings/numbering">Numbering</NavLink>
                            <NavLink to="/settings/tax">Tax</NavLink>
                            <NavLink to="/settings/units">Units</NavLink>
                            <NavLink to="/reports/sales">Sales Report</NavLink>
                            <NavLink to="/reports/finance">Finance Report</NavLink>
                            <NavLink to="/customers">Customers</NavLink>
                            <NavLink to="/orders">Orders</NavLink>
                            <NavLink to="/products">Products</NavLink>
                        </div>
                    </S.QuickLinks>
                </S.ListPane>

                <S.PreviewPane className="card">
                    <div className="paneTitle">
                        <h3>Live Preview</h3>
                        <div className="meta muted">
                            Showing: <strong>{current.name}</strong> · Entity: {current.entity.toUpperCase()}
                        </div>
                    </div>

                    <S.Toolbar>
                        <button onClick={printSection} title="Print only this preview area">Print Section</button>
                        <NavLink to={current.routePreview} title="Open route preview">Open Route Preview</NavLink>
                        <NavLink to="/settings/print-templates" title="Reload this page">Reload</NavLink>
                        <NavLink to="/invoices" title="Go to invoices">Invoices</NavLink>
                        <NavLink to="/reports" title="Go to reports">Reports</NavLink>
                    </S.Toolbar>

                    <Preview />
                </S.PreviewPane>
            </S.Layout>

            <ConfirmModal
                open={modal.open}
                title={modal.title}
                message={modal.message}
                onClose={() => setModal({ open: false, title: "", message: "" })}
            />
        </S.Wrapper>
    );
}
