import React, { useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* date utils */
const pad = (n) => String(n).padStart(2, "0");
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (d) => { const x = d instanceof Date ? d : new Date(d); return `${DOW[x.getDay()]} ${MON[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`; };
const fmtDateTime = (d) => { const x = d instanceof Date ? d : new Date(d); return `${fmtDate(x)} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`; };
const fmtTime = (d) => { const x = d instanceof Date ? d : new Date(d); return `${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`; };

const ExamplePrint = () => {
    const now = useMemo(() => new Date(), []);
    const printAreaRef = useRef(null);
    const [notesOpen, setNotesOpen] = useState(true);

    const invoice = useMemo(() => ({
        id: "INV-2031",
        date: now,
        customer: {
            code: "CUST-1001",
            name: "Aarav Sharma",
            company: "Bluewave Traders",
            email: "aarav.sharma@example.com",
            phone: "+91 98765 43210",
            address: "221B Baker Street, Khan Market, New Delhi 110003, India",
        },
        summary: {
            status: "Paid",
            subTotal: "₹ 1,58,000.00",
            tax: "₹ 12,640.00",
            discount: "₹ 0.00",
            total: "₹ 1,70,640.00",
            received: "₹ 1,70,640.00",
            balance: "₹ 0.00",
        },
        items: [
            { sku: "MED-AMOX-500", title: "Amoxicillin 500 mg (Capsule)", qty: 120, price: "₹ 12.00", amount: "₹ 1,440.00" },
            { sku: "MED-PARA-650", title: "Paracetamol 650 mg (Tablet)", qty: 1000, price: "₹ 2.50", amount: "₹ 2,500.00" },
            { sku: "MED-AZI-250", title: "Azithromycin 250 mg (Tablet)", qty: 600, price: "₹ 10.50", amount: "₹ 6,300.00" },
            { sku: "MED-ORS-200", title: "ORS 200 ml (Pack of 5)", qty: 75, price: "₹ 60.00", amount: "₹ 4,500.00" },
            { sku: "MED-MULTI-60", title: "Multivitamin 60 caps (Bottle)", qty: 240, price: "₹ 180.00", amount: "₹ 43,200.00" },
            { sku: "MED-D3-60K", title: "Vitamin D3 60K IU (Capsule)", qty: 350, price: "₹ 28.00", amount: "₹ 9,800.00" },
            { sku: "MED-ANTAC-150", title: "Ranitidine 150 mg (Tablet)", qty: 900, price: "₹ 1.90", amount: "₹ 1,710.00" },
            { sku: "MED-COUGH-100", title: "Cough Syrup 100 ml", qty: 420, price: "₹ 85.00", amount: "₹ 35,700.00" },
            { sku: "MED-GLUCO-1KG", title: "Glucose D 1 kg", qty: 200, price: "₹ 72.00", amount: "₹ 14,400.00" },
            { sku: "MED-THERM", title: "Digital Thermometer", qty: 50, price: "₹ 230.00", amount: "₹ 11,500.00" },
        ],
        notes: "Invoice for September cycle bulk order. Preferred communication via email. Attach PDF with e-invoice IRN.",
    }), [now]);

    /** Print the entire page content (this page only), hiding app chrome */
    const printFull = () => {
        document.body.classList.add("print-section-mode");
        // target the whole page wrapper
        const page = document.getElementById("page-print-area");
        if (page) page.setAttribute("data-print-target", "true");
        window.onafterprint = () => {
            if (page) page.removeAttribute("data-print-target");
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    /** Print only the summary card */
    const printSection = () => {
        const el = printAreaRef.current;
        if (!el) return;
        document.body.classList.add("print-section-mode");
        el.setAttribute("data-print-target", "true");
        window.onafterprint = () => {
            el.removeAttribute("data-print-target");
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page id="page-print-area">
            {/* print CSS */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          html, body, #root { height: auto !important; overflow: visible !important; }
          thead { display: table-header-group; } tfoot { display: table-footer-group; }
          thead th { position: static !important; }
          [data-print-grid], [data-print-grid] > * { width: 100% !important; }
          .no-print { display: none !important; }
        }

        /* Section-print mode (works for full page or the summary card) */
        @media print {
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode [data-print-target="true"],
          body.print-section-mode [data-print-target="true"] * { visibility: visible !important; }
          body.print-section-mode [data-print-target="true"] {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Print Demo</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/examples">Examples</NavLink><span>/</span>
                        <span className="current">Print</span>
                    </nav>
                    <div className="meta">
                        <span>Today: {fmtDate(now)}</span><span>•</span>
                        <span>Now: {fmtDateTime(now)}</span>
                    </div>
                </div>
                <div className="right">
                    <button className="btnGhost" onClick={printFull} title="Print entire page">
                        Print Page
                    </button>
                    <button className="btnPrimary no-print" onClick={printSection} title="Print summary card only">
                        Print Summary
                    </button>
                </div>
            </Styled.Header>

            <Styled.Grid data-print-grid>
                <section className="col main card">
                    <header className="docHeader">
                        <div className="brand">
                            <div className="logo" aria-hidden="true">AR</div>
                            <div>
                                <div className="brandName">Ashish Ranjan</div>
                                <div className="muted">Demo ERP Theme (Display-only)</div>
                            </div>
                        </div>
                        <div className="docMeta">
                            <div><span className="k">Invoice</span><span className="v">{invoice.id}</span></div>
                            <div><span className="k">Date</span><span className="v">{fmtDate(invoice.date)}</span></div>
                            <div><span className="k">Time</span><span className="v">{fmtTime(invoice.date)}</span></div>
                            <div><span className="k">Status</span><span className="badge">{invoice.summary.status}</span></div>
                        </div>
                    </header>

                    <div className="pair">
                        <div className="card sub">
                            <h3>Bill To</h3>
                            <div className="block">
                                <div className="title">{invoice.customer.name} <span className="muted">({invoice.customer.code})</span></div>
                                <div className="muted">{invoice.customer.company}</div>
                                <div className="muted">{invoice.customer.address}</div>
                                <div className="muted">{invoice.customer.email} · {invoice.customer.phone}</div>
                            </div>
                        </div>

                        <div className="card sub">
                            <h3>Summary</h3>
                            <div className="kv">
                                <div><span className="k">Subtotal</span><span className="v">{invoice.summary.subTotal}</span></div>
                                <div><span className="k">Tax</span><span className="v">{invoice.summary.tax}</span></div>
                                <div><span className="k">Discount</span><span className="v">{invoice.summary.discount}</span></div>
                                <div className="total"><span className="k">Total</span><span className="v">{invoice.summary.total}</span></div>
                                <div><span className="k">Received</span><span className="v">{invoice.summary.received}</span></div>
                                <div><span className="k">Balance</span><span className="v">{invoice.summary.balance}</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: 140 }}>SKU</th>
                                    <th>Item</th>
                                    <th className="num" style={{ width: 80 }}>Qty</th>
                                    <th className="num" style={{ width: 120 }}>Price</th>
                                    <th className="num" style={{ width: 140 }}>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoice.items.map((it, i) => (
                                    <tr key={it.sku + i}>
                                        <td className="mono">{it.sku}</td>
                                        <td>{it.title}</td>
                                        <td className="num">{it.qty}</td>
                                        <td className="num">{it.price}</td>
                                        <td className="num strong">{it.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <details className="notes" open={notesOpen} onToggle={(e) => setNotesOpen(e.currentTarget.open)}>
                        <summary>Notes</summary>
                        <div className="muted">{invoice.notes}</div>
                    </details>

                    <footer className="docFooter">
                        <div>Generated on {fmtDateTime(now)}</div>
                        <div className="muted">This is a display-only demo. No actual accounting/stock actions are performed.</div>
                    </footer>
                </section>

                <aside className="col side">
                    <div className="card" id="search-print-area" ref={printAreaRef}>
                        <h3>Invoice Summary (Print Target)</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Invoice</span><span className="v">{invoice.id}</span></div>
                            <div className="line"><span className="k">Date</span><span className="v">{fmtDate(invoice.date)}</span></div>
                            <div className="line"><span className="k">Time</span><span className="v">{fmtTime(invoice.date)}</span></div>
                            <div className="line"><span className="k">Customer</span><span className="v">{invoice.customer.name} ({invoice.customer.code})</span></div>
                            <div className="line"><span className="k">Company</span><span className="v">{invoice.customer.company}</span></div>
                            <div className="line"><span className="k">Total</span><span className="v">{invoice.summary.total}</span></div>
                            <div className="line"><span className="k">Status</span><span className="v badge">{invoice.summary.status}</span></div>
                            <div className="hint muted">Use “Print Summary” to print this card alone.</div>
                        </div>
                    </div>

                    <div className="card tips">
                        <h3>Pro Tips</h3>
                        <ul>
                            <li>“Print Page” prints this page wrapper only (full content across pages).</li>
                            <li>“Print Summary” prints just the right card.</li>
                            <li>Colors come from theme tokens.</li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default ExamplePrint;
