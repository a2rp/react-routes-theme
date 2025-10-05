import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

// date formatting helpers (single source of truth)
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

// lightweight info/confirm dialog
const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer><button className="btnPrimary" onClick={onClose}>OK</button></footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const PurchaseOrderBill = () => {
    const { poId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    const now = useMemo(() => new Date(), []);
    // display-only: pre-specified data (no calculations here)
    const bill = useMemo(() => ({
        poId: poId || "PO-2025-0042",
        billNo: "BILL-77821",
        status: "Unpaid", // Unpaid | Partially Paid | Paid | Cancelled
        currency: "INR",
        poDate: "2025-10-03T11:15:12+05:30",
        billDate: "2025-10-04T09:30:22+05:30",
        dueDate: "2025-10-18T23:59:59+05:30",
        expectedDate: "2025-10-07T00:00:00+05:30",
        terms: "Net 14, GRN required, no partial returns without RMA.",
        vendor: {
            id: "VEND-0093",
            name: "Medisphere Pharmaceuticals Pvt. Ltd.",
            gstin: "07ABCDM1234K1ZP",
            pan: "ABCDM1234K",
            email: "ap@medisphere.example.com",
            phone: "+91 98100 22233",
            contact: "Sanya Gupta",
        },
        billingAddress: {
            line1: "21, Connaught Place",
            line2: "Block D",
            city: "New Delhi",
            state: "DL",
            zip: "110001",
            country: "India",
        },
        shippingAddress: {
            line1: "Warehouse A, Plot 14",
            line2: "Udyog Vihar, Phase 1",
            city: "Gurugram",
            state: "HR",
            zip: "122016",
            country: "India",
        },
        items: [
            {
                sku: "MED-AMOX-500",
                name: "Amoxicillin 500mg Capsules",
                hsn: "3004",
                batch: "AXL25B",
                expiry: "2027-06-30",
                qty: "120",
                unit: "Box",
                mrp: "₹1,200.00",
                rate: "₹820.00",
                discount: "5%",
                tax: "12%",
                taxAmt: "₹9,840.00",
                lineTotal: "₹98,280.00"
            },
            {
                sku: "MED-PARA-650",
                name: "Paracetamol 650mg Tablets",
                hsn: "3004",
                batch: "PCM65Z",
                expiry: "2026-12-31",
                qty: "200",
                unit: "Bottle",
                mrp: "₹450.00",
                rate: "₹310.00",
                discount: "0%",
                tax: "5%",
                taxAmt: "₹3,100.00",
                lineTotal: "₹62,000.00"
            },
            {
                sku: "MED-ORS-20",
                name: "ORS Sachet 20g (Orange)",
                hsn: "3004",
                batch: "ORS20O",
                expiry: "2026-03-31",
                qty: "500",
                unit: "Sachet",
                mrp: "₹18.00",
                rate: "₹12.00",
                discount: "0%",
                tax: "12%",
                taxAmt: "₹7,200.00",
                lineTotal: "₹60,000.00"
            }
        ],
        charges: {
            subTotal: "₹2,20,280.00",
            discount: "₹4,114.00",
            freight: "₹1,250.00",
            taxTotal: "₹20,140.00",
            roundOff: "₹0.00",
            grandTotal: "₹2,37,556.00"
        },
        taxBreakup: [
            { code: "CGST", rate: "6%", amount: "₹10,070.00" },
            { code: "SGST", rate: "6%", amount: "₹10,070.00" },
            { code: "IGST", rate: "0%", amount: "₹0.00" }
        ],
        attachments: [
            { name: "Supplier Bill (scan).pdf", url: "/files/bill-77821.pdf", size: "325 KB" },
            { name: "Packing List.pdf", url: "/files/packing-77821.pdf", size: "112 KB" }
        ],
        notes: "Ensure temperature-controlled storage for antibiotics. Report shortages within 24 hours.",
        activity: [
            { title: "Bill created", at: "2025-10-04T09:30:22+05:30", by: "System" },
            { title: "PO acknowledged by vendor", at: "2025-10-03T12:02:11+05:30", by: "Medisphere" },
            { title: "PO approved", at: "2025-10-03T11:42:55+05:30", by: "A. Ranjan" }
        ]
    }), [poId]);

    const [banner, setBanner] = useState("");
    const [infoOpen, setInfoOpen] = useState(false);
    const [infoMsg, setInfoMsg] = useState("");

    useEffect(() => {
        let t;
        if (banner) t = setTimeout(() => setBanner(""), 3200);
        return () => t && clearTimeout(t);
    }, [banner]);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setBanner("Link copied to clipboard.");
        } catch {
            setBanner("Unable to copy link.");
        }
    };

    const guard = (msg = "This is a display-only build. Action is unavailable.") => {
        setInfoMsg(msg);
        setInfoOpen(true);
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

    const crumbs = (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <NavLink to="/purchase-orders">Purchase Orders</NavLink>
            <span>/</span>
            <NavLink to={`/purchase-orders/${bill.poId}`}>{bill.poId}</NavLink>
            <span>/</span>
            <span className="current">Bill</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print: show only #search-print-area */}
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
                    <h1>Supplier Bill</h1>
                    {crumbs}
                    <div className="meta">
                        <span>PO: <strong>{bill.poId}</strong></span>
                        <span>•</span>
                        <span>Bill No: <strong>{bill.billNo}</strong></span>
                        <span>•</span>
                        <span>Status: <span className={`badge ${bill.status.toLowerCase()}`}>{bill.status}</span></span>
                    </div>
                    <div className="meta muted">
                        <span>PO Date: {fmt(bill.poDate)}</span>
                        <span>•</span>
                        <span>Bill Date: {fmt(bill.billDate, true)}</span>
                        <span>•</span>
                        <span>Due: {fmt(bill.dueDate)}</span>
                    </div>
                </div>

                <div className="right actions">
                    <button className="btnGhost" onClick={() => navigate(`/purchase-orders/${bill.poId}`)}>Back to PO</button>
                    <button className="btnGhost" onClick={copyLink} title="Copy share link">Copy Link</button>
                    <button className="btnPrimary" onClick={printSection} title="Print bill">Print</button>
                    <button className="btnGhost" onClick={() => guard("Export disabled in display-only build.")} title="Export PDF">Export PDF</button>
                    <button className="btnDanger" onClick={() => guard("Payments are disabled in display-only build.")} title="Mark as Paid">Mark as Paid</button>
                    <button className="btnGhost" onClick={() => guard("Emailing is disabled in display-only build.")} title="Email to AP">Email</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* MAIN */}
                <section className="col main">
                    <div className="card">
                        <div className="split two">
                            <div>
                                <h3>Vendor</h3>
                                <div className="kv">
                                    <div><span className="k">Name</span><span className="v">{bill.vendor.name}</span></div>
                                    <div><span className="k">Contact</span><span className="v">{bill.vendor.contact} ({bill.vendor.phone})</span></div>
                                    <div><span className="k">Email</span><span className="v">{bill.vendor.email}</span></div>
                                    <div><span className="k">GSTIN</span><span className="v">{bill.vendor.gstin}</span></div>
                                    <div><span className="k">PAN</span><span className="v">{bill.vendor.pan}</span></div>
                                </div>
                            </div>
                            <div>
                                <h3>Bill Info</h3>
                                <div className="kv">
                                    <div><span className="k">Bill No</span><span className="v">{bill.billNo}</span></div>
                                    <div><span className="k">Currency</span><span className="v">{bill.currency}</span></div>
                                    <div><span className="k">PO Date</span><span className="v">{fmt(bill.poDate)}</span></div>
                                    <div><span className="k">Bill Date</span><span className="v">{fmt(bill.billDate, true)}</span></div>
                                    <div><span className="k">Due Date</span><span className="v">{fmt(bill.dueDate)}</span></div>
                                    <div><span className="k">Expected</span><span className="v">{fmt(bill.expectedDate)}</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="split two">
                            <div>
                                <h3>Billing Address</h3>
                                <address className="addr">
                                    {bill.billingAddress.line1}<br />
                                    {bill.billingAddress.line2}<br />
                                    {bill.billingAddress.city} {bill.billingAddress.zip}<br />
                                    {bill.billingAddress.state}, {bill.billingAddress.country}
                                </address>
                            </div>
                            <div>
                                <h3>Shipping Address</h3>
                                <address className="addr">
                                    {bill.shippingAddress.line1}<br />
                                    {bill.shippingAddress.line2}<br />
                                    {bill.shippingAddress.city} {bill.shippingAddress.zip}<br />
                                    {bill.shippingAddress.state}, {bill.shippingAddress.country}
                                </address>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="tableWrap">
                            <table className="items">
                                <thead>
                                    <tr>
                                        <th>SKU</th>
                                        <th>Item</th>
                                        <th>HSN</th>
                                        <th>Batch</th>
                                        <th>Expiry</th>
                                        <th className="num">Qty</th>
                                        <th>Unit</th>
                                        <th className="num">MRP</th>
                                        <th className="num">Rate</th>
                                        <th className="num">Disc</th>
                                        <th className="num">Tax %</th>
                                        <th className="num">Tax Amt</th>
                                        <th className="num">Line Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bill.items.map((it) => (
                                        <tr key={it.sku}>
                                            <td>{it.sku}</td>
                                            <td>{it.name}</td>
                                            <td>{it.hsn}</td>
                                            <td>{it.batch}</td>
                                            <td>{fmt(it.expiry)}</td>
                                            <td className="num">{it.qty}</td>
                                            <td>{it.unit}</td>
                                            <td className="num">{it.mrp}</td>
                                            <td className="num">{it.rate}</td>
                                            <td className="num">{it.discount}</td>
                                            <td className="num">{it.tax}</td>
                                            <td className="num">{it.taxAmt}</td>
                                            <td className="num">{it.lineTotal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="notes">
                            <h3>Notes</h3>
                            <p>{bill.notes}</p>
                            <h3>Terms</h3>
                            <p>{bill.terms}</p>
                        </div>
                    </div>
                </section>

                {/* SIDE */}
                <aside className="col side">
                    <div className="card totals">
                        <h3>Totals</h3>
                        <div className="summary">
                            <div><span className="k">Subtotal</span><span className="v">{bill.charges.subTotal}</span></div>
                            <div><span className="k">Discount</span><span className="v">{bill.charges.discount}</span></div>
                            <div><span className="k">Freight</span><span className="v">{bill.charges.freight}</span></div>
                            <div><span className="k">Tax</span><span className="v">{bill.charges.taxTotal}</span></div>
                            <div><span className="k">Round Off</span><span className="v">{bill.charges.roundOff}</span></div>
                            <div className="grand"><span className="k">Grand Total</span><span className="v">{bill.charges.grandTotal}</span></div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Tax Breakdown</h3>
                        <ul className="tax">
                            {bill.taxBreakup.map((t) => (
                                <li key={t.code}>
                                    <span>{t.code} ({t.rate})</span>
                                    <span className="num">{t.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Attachments</h3>
                        <ul className="files">
                            {bill.attachments.map((f) => (
                                <li key={f.name}>
                                    <a href={f.url} download>{f.name}</a>
                                    <span className="size">{f.size}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            {bill.activity.map((a, idx) => (
                                <li key={idx}>
                                    <span className="dot" />
                                    <div>
                                        <strong>{a.title}</strong>
                                        <div className="muted">{fmt(a.at, true)} • {a.by}</div>
                                    </div>
                                </li>
                            ))}
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Viewed</strong>
                                    <div className="muted">{fmt(now, true)} • You</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* PRINTABLE SNAPSHOT */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Snapshot</h3>
                        <div className="print">
                            <div><span className="k">PO</span><span className="v">{bill.poId}</span></div>
                            <div><span className="k">Bill No</span><span className="v">{bill.billNo}</span></div>
                            <div><span className="k">Vendor</span><span className="v">{bill.vendor.name}</span></div>
                            <div><span className="k">Bill Date</span><span className="v">{fmt(bill.billDate, true)}</span></div>
                            <div><span className="k">Due</span><span className="v">{fmt(bill.dueDate)}</span></div>
                            <div><span className="k">Total</span><span className="v">{bill.charges.grandTotal}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <InfoDialog
                open={infoOpen}
                title="Action Unavailable"
                message={infoMsg}
                onClose={() => setInfoOpen(false)}
            />
        </Styled.Page>
    );
};

export default PurchaseOrderBill;
