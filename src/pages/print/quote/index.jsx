import React, { useMemo, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

// tiny date utils with your required formats
const pad = (n) => String(n).padStart(2, "0");
const dateOnly = (iso) => {
    const d = new Date(iso);
    return d.toDateString(); // e.g. "Sat Oct 04 2025"
};
const dateTime = (iso) => {
    const d = new Date(iso);
    const date = d.toDateString();
    const time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
    return `${date} ${time}`; // "Sat Oct 04 2025 15:38:20hrs"
};
const timeOnly = (iso) => {
    const d = new Date(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};

// demo fixtures (display-only, all totals pre-computed)
const QUOTES_FIX = [
    {
        id: "Q-2025-001",
        number: "Q-2025-001",
        createdAt: "2025-10-03T12:38:20+05:30",
        validTill: "2025-10-15T23:59:59+05:30",
        customer: {
            id: "CUST-1001",
            name: "Nimbus Meditech Pvt Ltd",
            code: "CUST-1001",
            email: "ops@nimbusmeditech.com",
            phone: "+91 98180 12345",
            billing: {
                line1: "A-17, 3rd Floor, Sector 64",
                line2: "Noida, Uttar Pradesh 201301",
                gstin: "09ABCDE1234F1Z5",
            },
            shipping: {
                line1: "Block B, 2nd Floor, Technopark",
                line2: "Noida, Uttar Pradesh 201301",
            },
        },
        seller: {
            name: "Ashish Ranjan",
            email: "ashish@example.com",
            phone: "+91 90000 00000",
            brand: "Ash Labs",
            address: "Bengaluru, Karnataka",
        },
        status: "Open",
        currency: "INR",
        items: [
            {
                id: "I-01",
                sku: "MED-AMOX-500",
                name: "Amoxicillin 500mg Cap",
                desc: "Blister pack of 10 capsules",
                hsn: "3004",
                batch: "AXL2309",
                exp: "2027-09-30T00:00:00+05:30",
                qty: 50,
                unit: "Pack",
                mrp: "₹150.00",
                rate: "₹120.00",
                discount: "₹0.00",
                tax: "12%",
                lineTotal: "₹6,720.00",
            },
            {
                id: "I-02",
                sku: "MED-PARA-650",
                name: "Paracetamol 650mg Tab",
                desc: "Strip of 15 tablets",
                hsn: "3004",
                batch: "PCM2411",
                exp: "2026-11-30T00:00:00+05:30",
                qty: 120,
                unit: "Strip",
                mrp: "₹40.00",
                rate: "₹28.00",
                discount: "₹0.00",
                tax: "12%",
                lineTotal: "₹3,763.20",
            },
            {
                id: "I-03",
                sku: "MED-ORS-200",
                name: "ORS Powder 200ml Sachet",
                desc: "Orange flavour",
                hsn: "2106",
                batch: "ORS2502",
                exp: "2026-02-28T00:00:00+05:30",
                qty: 200,
                unit: "Sachet",
                mrp: "₹18.00",
                rate: "₹12.50",
                discount: "₹0.00",
                tax: "5%",
                lineTotal: "₹2,625.00",
            },
        ],
        totals: {
            subTotal: "₹13,108.20",
            discount: "₹0.00",
            tax: "₹1,362.98",
            freight: "₹250.00",
            roundOff: "₹-0.18",
            grand: "₹14,721.00",
        },
        terms: [
            "Prices inclusive of taxes as mentioned; freight additional where applicable.",
            "Payment within 15 days from the invoice date.",
            "Delivery within 3–5 working days from confirmation.",
            "Damaged/short supply to be reported within 24 hours of delivery.",
            "Warranty as per manufacturer policy.",
        ],
        attachments: [
            { label: "Specification Sheet (PDF)", href: "/docs/spec-amox.pdf" },
            { label: "COA – Amoxicillin", href: "/docs/coa-amox.pdf" },
        ],
        references: {
            opportunityId: "OPP-8891",
            customerRef: "PO-REQ-4451",
            salesOwner: "USR-007",
        },
    },
    {
        id: "Q-2025-002",
        number: "Q-2025-002",
        createdAt: "2025-09-25T09:10:00+05:30",
        validTill: "2025-10-20T23:59:59+05:30",
        customer: {
            id: "CUST-1024",
            name: "HealthFirst Diagnostics",
            code: "CUST-1024",
            email: "procure@healthfirst.in",
            phone: "+91 98990 11122",
            billing: {
                line1: "Plot 44, HSR Layout",
                line2: "Bengaluru, Karnataka 560102",
                gstin: "29ABCDE1234F1Z9",
            },
            shipping: {
                line1: "HSR Club Road",
                line2: "Bengaluru, Karnataka 560102",
            },
        },
        seller: {
            name: "Ashish Ranjan",
            email: "ashish@example.com",
            phone: "+91 90000 00000",
            brand: "Ash Labs",
            address: "Bengaluru, Karnataka",
        },
        status: "Open",
        currency: "INR",
        items: [],
        totals: {
            subTotal: "₹0.00",
            discount: "₹0.00",
            tax: "₹0.00",
            freight: "₹0.00",
            roundOff: "₹0.00",
            grand: "₹0.00",
        },
        terms: [
            "This is a budgetary quote. Final pricing may vary with quantity.",
            "Offer valid till the date mentioned on this document.",
        ],
        attachments: [],
        references: {
            opportunityId: "OPP-9002",
            customerRef: "RFI-212",
            salesOwner: "USR-007",
        },
    },
];

const PrintQuote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [toast, setToast] = useState(null); // {type:'info'|'success'|'error', text:string}

    const data = useMemo(() => {
        return QUOTES_FIX.find((q) => q.id === id) || QUOTES_FIX[0];
    }, [id]);

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        setTimeout(() => {
            window.print();
            setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
        }, 50);
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setToast({ type: "success", text: "Link copied" });
        } catch {
            setToast({ type: "error", text: "Couldn’t copy" });
        }
    };

    const exportJson = () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${data.id}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        setToast({ type: "success", text: `${data.id}.json downloaded` });
    };

    const toggleTheme = () => {
        const r = document.documentElement;
        const curr = r.getAttribute("data-theme");
        r.setAttribute("data-theme", curr === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (!id) return;
        // soft auto-open toast hint just once
        const t = setTimeout(() => {
            setToast({ type: "info", text: `Viewing Quote ${data.number}` });
        }, 200);
        return () => clearTimeout(t);
    }, [id, data.number]);

    const isEmpty = data.items.length === 0;

    return (
        <Styled.Wrap>
            {/* print CSS (your exact snippet) */}
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

            <Styled.Toolbar role="region" aria-label="Quote actions">
                <div className="left">
                    <nav className="crumbs" aria-label="Breadcrumb">
                        <Link to="/home">Home</Link>
                        <span>/</span>
                        <Link to="/sales">Sales</Link>
                        <span>/</span>
                        <Link to="/sales/quotes">Quotes</Link>
                        <span>/</span>
                        <span className="current">{data.number}</span>
                    </nav>
                    <div className="meta">
                        <span className="tag">{data.status}</span>
                        <span>Created: {dateTime(data.createdAt)}</span>
                        <span>Valid till: {dateOnly(data.validTill)}</span>
                    </div>
                </div>

                <div className="right">
                    <button onClick={printSection} aria-label="Print quote">Print</button>
                    <button onClick={copyLink} aria-label="Copy deep link">Copy Link</button>
                    <button onClick={exportJson} aria-label="Export JSON">Export</button>
                    <button onClick={toggleTheme} aria-label="Toggle theme">Theme</button>
                    <Link to={`/customers/${data.customer.id}`} className="linkish" title="View customer">Customer</Link>
                    <Link to="/invoices" className="linkish" title="Invoices">Invoices</Link>
                    <Link to="/orders" className="linkish" title="Orders">Orders</Link>
                    <Link to="/reports/sales" className="linkish" title="Sales report">Reports</Link>
                </div>
            </Styled.Toolbar>

            <div id="search-print-area">
                {/* Header */}
                <Styled.Header className="card">
                    <div className="brandBlock">
                        <div className="logo" aria-hidden>AL</div>
                        <div>
                            <h1>Quotation</h1>
                            <div className="brandName">Ash Labs</div>
                            <div className="brandAddr">Bengaluru, Karnataka</div>
                        </div>
                    </div>

                    <div className="idBlock">
                        <div className="row">
                            <span>Quote No.</span>
                            <strong>{data.number}</strong>
                        </div>
                        <div className="row">
                            <span>Date</span>
                            <strong>{dateOnly(data.createdAt)}</strong>
                        </div>
                        <div className="row">
                            <span>Valid Till</span>
                            <strong>{dateOnly(data.validTill)}</strong>
                        </div>
                        <div className="row">
                            <span>Sales Owner</span>
                            <strong>{data.references.salesOwner}</strong>
                        </div>
                    </div>
                </Styled.Header>

                {/* Parties */}
                <Styled.Parties className="card">
                    <div className="party">
                        <h3>Bill To</h3>
                        <div className="name">{data.customer.name}</div>
                        <div className="addr">{data.customer.billing.line1}</div>
                        <div className="addr">{data.customer.billing.line2}</div>
                        <div className="line">GSTIN: {data.customer.billing.gstin}</div>
                        <div className="line">
                            <a href={`mailto:${data.customer.email}`}>{data.customer.email}</a> ·{" "}
                            <a href={`tel:${data.customer.phone}`}>{data.customer.phone}</a>
                        </div>
                        <div className="links">
                            <Link to={`/customers/${data.customer.id}`}>View Profile</Link>
                            <Link to={`/customers/${data.customer.id}/edit`}>Edit (demo)</Link>
                            <Link to={`/customers/${data.customer.id}/print`}>Print Customer</Link>
                        </div>
                    </div>

                    <div className="party">
                        <h3>Ship To</h3>
                        <div className="name">{data.customer.name}</div>
                        <div className="addr">{data.customer.shipping.line1}</div>
                        <div className="addr">{data.customer.shipping.line2}</div>
                        <div className="line">Ref: {data.references.customerRef}</div>
                        <div className="line">Opportunity: {data.references.opportunityId}</div>
                    </div>

                    <div className="party">
                        <h3>Seller</h3>
                        <div className="name">{data.seller.brand}</div>
                        <div className="addr">{data.seller.address}</div>
                        <div className="line">
                            <a href={`mailto:${data.seller.email}`}>{data.seller.email}</a> ·{" "}
                            <a href={`tel:${data.seller.phone}`}>{data.seller.phone}</a>
                        </div>
                    </div>
                </Styled.Parties>

                {/* Items */}
                <Styled.Items className="card">
                    <div className="tableHead">
                        <div>#</div>
                        <div>Item</div>
                        <div>Qty</div>
                        <div>Rate</div>
                        <div>Tax</div>
                        <div>Amount</div>
                    </div>

                    {!isEmpty ? (
                        data.items.map((it, idx) => (
                            <div className="row" key={it.id}>
                                <div className="col index">{idx + 1}</div>
                                <div className="col item">
                                    <div className="name">
                                        <Link to={`/products/${it.sku}`}>{it.name}</Link>
                                    </div>
                                    <div className="muted">
                                        SKU: {it.sku} · HSN: {it.hsn} · Batch: {it.batch} · Exp: {dateOnly(it.exp)}
                                    </div>
                                    <div className="muted">{it.desc}</div>
                                </div>
                                <div className="col qty">{it.qty} {it.unit}</div>
                                <div className="col rate">{it.rate}</div>
                                <div className="col tax">{it.tax}</div>
                                <div className="col amount">{it.lineTotal}</div>
                            </div>
                        ))
                    ) : (
                        <div className="empty">
                            <div className="title">No items in this quote</div>
                            <div className="desc">
                                Browse <Link to="/products">Products</Link> or jump to{" "}
                                <Link to="/medicines">Medicines</Link> catalog.
                            </div>
                        </div>
                    )}
                </Styled.Items>

                {/* Totals + Notes */}
                <Styled.TotalsTerms className="card">
                    <div className="totals">
                        <div className="line"><span>Sub Total</span><strong>{data.totals.subTotal}</strong></div>
                        <div className="line"><span>Discounts</span><strong>{data.totals.discount}</strong></div>
                        <div className="line"><span>Tax</span><strong>{data.totals.tax}</strong></div>
                        <div className="line"><span>Freight</span><strong>{data.totals.freight}</strong></div>
                        <div className="line"><span>Round Off</span><strong>{data.totals.roundOff}</strong></div>
                        <div className="grand"><span>Grand Total</span><strong>{data.totals.grand}</strong></div>
                    </div>

                    <div className="terms">
                        <h3>Terms & Conditions</h3>
                        <ul>
                            {data.terms.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>

                        {data.attachments.length > 0 && (
                            <>
                                <h4>Attachments</h4>
                                <ul className="attachments">
                                    {data.attachments.map((a, i) => (
                                        <li key={i}><a href={a.href}>{a.label}</a></li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </Styled.TotalsTerms>

                {/* Signatures + Footer */}
                <Styled.SignBlock className="card">
                    <div className="sig">
                        <div className="line label">Prepared by</div>
                        <div className="line value">{data.seller.name}</div>
                        <div className="line muted">{data.seller.email} · {data.seller.phone}</div>
                    </div>
                    <div className="sig">
                        <div className="line label">For & on behalf of</div>
                        <div className="line value">{data.seller.brand}</div>
                        <div className="signBox" aria-hidden />
                    </div>
                    <div className="sig">
                        <div className="line label">Customer Acknowledgement</div>
                        <div className="signBox" aria-hidden />
                    </div>
                </Styled.SignBlock>

                <Styled.FooterBar className="card">
                    <div className="left">
                        <span>Printed: {dateTime(new Date().toISOString())}</span>
                        {typeof __APP_BUILD_ISO__ !== "undefined" && (
                            <span>Build: {dateTime(__APP_BUILD_ISO__)}</span>
                        )}
                        {typeof __APP_COMMIT_ISO__ !== "undefined" && (
                            <span>Commit: {dateTime(__APP_COMMIT_ISO__)}</span>
                        )}
                    </div>
                    <div className="right">
                        <Link to="/print/invoice/INV-2031">Print Invoice</Link>
                        <Link to="/print/sticker/STK-1001">Print Sticker</Link>
                        <Link to="/reports/sales">Sales Report</Link>
                        <Link to="/invoices">Invoices</Link>
                        <Link to="/receipts">Receipts</Link>
                        <Link to="/finance">Finance</Link>
                        <Link to="/settings/print-templates">Print Templates</Link>
                        <Link to="/settings/appearance">Appearance</Link>
                        <Link to="/help">Help</Link>
                    </div>
                </Styled.FooterBar>
            </div>

            {/* inline toast */}
            {toast && (
                <Styled.Toast
                    role="status"
                    data-type={toast.type}
                    onAnimationEnd={() => setToast(null)}
                >
                    {toast.text}
                </Styled.Toast>
            )}
        </Styled.Wrap>
    );
};

export default PrintQuote;
