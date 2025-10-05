import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* -------------------------------
   date/time formatting (global rule)
----------------------------------*/
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* -------------------------------
   tiny demo fixtures (display-only)
   (totals precomputed: no calc here)
----------------------------------*/
const demoOrders = {
    "ORD-3456": {
        orderId: "ORD-3456",
        docType: "Sales Order",
        orderDate: "2025-10-04T15:38:20+05:30",
        dueDate: "2025-10-10T00:00:00+05:30",
        company: {
            name: "Bluewave Traders Pvt. Ltd.",
            gstin: "22ABCDE1234F1Z5",
            pan: "ABCDE1234F",
            address: "5th Floor, DLF Cyber City, Phase III, Gurugram, HR 122002, India",
            phone: "+91 124 555 0101",
            email: "billing@bluewave.example.com",
            website: "https://bluewave.example.com",
            logo: "/logo.svg"
        },
        customer: {
            code: "CUST-1001",
            name: "Aarav Sharma",
            company: "Bluewave Retail Partner",
            email: "aarav.sharma@example.com",
            phone: "+91 98765 43210",
            gstin: "22ABCDE1234F1Z5",
            billing: {
                line1: "221B Baker Street",
                line2: "Khan Market",
                city: "New Delhi",
                state: "DL",
                zip: "110003",
                country: "India"
            },
            shipping: {
                line1: "Plot 14, Industrial Area",
                line2: "Phase 2",
                city: "Gurugram",
                state: "HR",
                zip: "122002",
                country: "India"
            }
        },
        meta: {
            preparedBy: "Ashish Ranjan",
            approvedBy: "Operations",
            channel: "Online",
            terms: "Net 7 days",
            notes: "Handle with care. Keep away from sunlight."
        },
        items: [
            {
                sl: 1,
                sku: "MED-AMOX-500",
                name: "Amoxicillin 500mg (Capsule)",
                hsn: "3004",
                batch: "AMX0925A",
                exp: "2027-03-31",
                qty: 10,
                uom: "Strip",
                price: 120.00,
                taxRate: 12,
                lineTotal: 1344.00,     // includes tax or as per your fixture convention
                taxAmount: 144.00
            },
            {
                sl: 2,
                sku: "MED-PARA-650",
                name: "Paracetamol 650mg (Tablet)",
                hsn: "3004",
                batch: "PAR0825B",
                exp: "2026-12-31",
                qty: 20,
                uom: "Strip",
                price: 45.00,
                taxRate: 12,
                lineTotal: 1008.00,
                taxAmount: 108.00
            },
            {
                sl: 3,
                sku: "MED-ORS-200",
                name: "ORS 200ml (Liquid)",
                hsn: "3004",
                batch: "ORS0725C",
                exp: "2026-08-31",
                qty: 12,
                uom: "Bottle",
                price: 30.00,
                taxRate: 5,
                lineTotal: 378.00,
                taxAmount: 18.00
            }
        ],
        totals: {
            subTotal: 2500.00,
            discount: 150.00,
            shipping: 0.00,
            taxBreakup: [
                { rate: 5, amount: 18.00 },
                { rate: 12, amount: 252.00 }
            ],
            roundOff: -0.00,
            grandTotal: 2370.00,
            amountWords: "Two Thousand Three Hundred Seventy Rupees Only"
        },
        stamps: {
            createdAt: "2025-10-04T15:10:05+05:30",
            updatedAt: "2025-10-04T15:38:20+05:30"
        }
    }
};

const fallbackOrder = (orderId) => ({
    ...demoOrders["ORD-3456"],
    orderId,
});

/* -------------------------------
   Component
----------------------------------*/
const OrderPrint = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);
    const [showTax, setShowTax] = useState(true);
    const [banner, setBanner] = useState("");

    const order = useMemo(() => {
        return demoOrders[orderId] || fallbackOrder(orderId || "ORD-XXXX");
    }, [orderId]);

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3000);
        return () => clearTimeout(t);
    }, [banner]);

    const onPrint = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setBanner("Link copied.");
        } catch {
            setBanner("Unable to copy link.");
        }
    };

    const backToOrder = () => navigate(`/orders/${order.orderId}`);

    const addr = (a) => `${a.line1}, ${a.line2}, ${a.city} ${a.zip}, ${a.state}, ${a.country}`;

    return (
        <Styled.Page>
            {/* print CSS (as required) */}
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

            <Styled.HeadBar className="card">
                <div className="left">
                    <h1>{order.company?.name}</h1>
                    <div className="meta">
                        <span>{order.company?.address}</span>
                        <span>•</span>
                        <span>{order.company?.phone}</span>
                        <span>•</span>
                        <a href={order.company?.website} target="_blank" rel="noreferrer">{order.company?.website}</a>
                    </div>
                </div>
                <div className="right">
                    <div className="actions">
                        <button className="btnGhost" onClick={backToOrder} title="Back to Order">Back</button>
                        <button className="btnGhost" onClick={copyLink} title="Copy share link">Copy Link</button>
                        <button className="btnPrimary" onClick={onPrint} title="Print this order">Print</button>
                    </div>
                    <div className="toggles">
                        <label className="toggle">
                            <input type="checkbox" checked={showTax} onChange={(e) => setShowTax(e.target.checked)} />
                            <span>Show tax summary</span>
                        </label>
                    </div>
                </div>
            </Styled.HeadBar>

            {banner ? <Styled.Banner>{banner}</Styled.Banner> : null}

            {/* Printable area */}
            <Styled.Sheet id="search-print-area" ref={printRef} className="card">
                <header className="sheetHeader">
                    <div className="brand">
                        <div className="logo" aria-hidden="true">
                            {/* If you have /logo.svg it will show, else a monogram */}
                            <img src={order.company?.logo} alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            <div className="fallback">{(order.company?.name || "BW").slice(0, 2)}</div>
                        </div>
                        <div>
                            <h2>{order.docType}</h2>
                            <div className="muted">{order.company?.name}</div>
                        </div>
                    </div>

                    <div className="ident">
                        <div><span className="k">Order No</span><span className="v">{order.orderId}</span></div>
                        <div><span className="k">Order Date</span><span className="v">{fmt(order.orderDate, true)}</span></div>
                        <div><span className="k">Due Date</span><span className="v">{fmt(order.dueDate)}</span></div>
                        <div><span className="k">Channel</span><span className="v">{order.meta?.channel}</span></div>
                    </div>
                </header>

                {/* parties */}
                <Styled.Parties>
                    <div className="party">
                        <h3>Bill To</h3>
                        <div className="name">{order.customer?.name}</div>
                        <div className="muted">{order.customer?.company}</div>
                        <div className="muted">{addr(order.customer?.billing)}</div>
                        <div className="muted">GSTIN: {order.customer?.gstin}</div>
                        <div className="muted">{order.customer?.email} • {order.customer?.phone}</div>
                    </div>

                    <div className="party">
                        <h3>Ship To</h3>
                        <div className="name">{order.customer?.name}</div>
                        <div className="muted">{addr(order.customer?.shipping)}</div>
                        <div className="muted">Contact: {order.customer?.phone}</div>
                    </div>

                    <div className="party">
                        <h3>Account</h3>
                        <div className="muted">GSTIN: {order.company?.gstin}</div>
                        <div className="muted">PAN: {order.company?.pan}</div>
                        <div className="muted">Prepared: {order.meta?.preparedBy}</div>
                        <div className="muted">Approved: {order.meta?.approvedBy}</div>
                    </div>
                </Styled.Parties>

                {/* items */}
                <Styled.Items>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style={{ minWidth: 220 }}>Item</th>
                                <th>HSN</th>
                                <th>Batch</th>
                                <th>Expiry</th>
                                <th className="right">Qty</th>
                                <th>UOM</th>
                                <th className="right">Rate</th>
                                <th>Tax %</th>
                                <th className="right">Line Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((it) => (
                                <tr key={it.sl}>
                                    <td>{it.sl}</td>
                                    <td>
                                        <div className="title">{it.name}</div>
                                        <div className="sub muted">{it.sku}</div>
                                    </td>
                                    <td>{it.hsn}</td>
                                    <td>{it.batch}</td>
                                    <td>{fmt(it.exp)}</td>
                                    <td className="right">{it.qty}</td>
                                    <td>{it.uom}</td>
                                    <td className="right">{it.price.toFixed(2)}</td>
                                    <td>{it.taxRate}%</td>
                                    <td className="right">{it.lineTotal.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Styled.Items>

                {/* totals */}
                <Styled.Totals>
                    <div className="notes cardish">
                        <h4>Notes & Terms</h4>
                        <p>{order.meta?.notes}</p>
                        <ul className="muted">
                            <li>Payment Terms: {order.meta?.terms}</li>
                            <li>Created: {fmt(order.stamps?.createdAt, true)}</li>
                            <li>Updated: {fmt(order.stamps?.updatedAt, true)}</li>
                        </ul>
                    </div>

                    <div className="numbers cardish">
                        <div className="row"><span>Sub Total</span><span>{order.totals.subTotal.toFixed(2)}</span></div>
                        <div className="row"><span>Discount</span><span>-{order.totals.discount.toFixed(2)}</span></div>
                        <div className="row"><span>Shipping</span><span>{order.totals.shipping.toFixed(2)}</span></div>
                        {showTax && (
                            <div className="tax">
                                <div className="row head"><span>Tax Summary</span><span>Amount</span></div>
                                {order.totals.taxBreakup.map((t, idx) => (
                                    <div className="row" key={idx}><span>GST @ {t.rate}%</span><span>{t.amount.toFixed(2)}</span></div>
                                ))}
                            </div>
                        )}
                        <div className="row"><span>Round Off</span><span>{order.totals.roundOff.toFixed(2)}</span></div>
                        <div className="row grand"><span>Grand Total</span><span>{order.totals.grandTotal.toFixed(2)}</span></div>
                        <div className="amtWords muted">{order.totals.amountWords}</div>
                    </div>
                </Styled.Totals>

                {/* footer block */}
                <Styled.SheetFooter>
                    <div className="left">
                        <div className="qr">
                            <div className="code">{order.orderId}</div>
                            <div className="muted">Scan / verify against portal</div>
                        </div>
                    </div>
                    <div className="right sign">
                        <div className="line"></div>
                        <div>Authorised Signatory</div>
                    </div>
                </Styled.SheetFooter>
            </Styled.Sheet>

            {/* secondary nav (breadcrumbs / quick links) */}
            <Styled.Secondary>
                <NavLink to={`/orders/${order.orderId}`} className="crumb">View Order</NavLink>
                <span>›</span>
                <span className="current">Print</span>
                <div className="spacer" />
                <NavLink to="/invoices" className="link">Invoices</NavLink>
                <NavLink to="/receipts" className="link">Receipts</NavLink>
                <NavLink to="/reports/sales" className="link">Sales Report</NavLink>
            </Styled.Secondary>
        </Styled.Page>
    );
};

export default OrderPrint;
