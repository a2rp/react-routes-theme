import React, { useMemo, useRef, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* date helpers — single source so formatting stays consistent */
const pad = (n) => String(n).padStart(2, "0");
const dnames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const mnames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (raw) => {
    const d = raw instanceof Date ? raw : new Date(raw);
    return `${dnames[d.getDay()]} ${mnames[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
};
const fmtDateTime = (raw) => {
    const d = raw instanceof Date ? raw : new Date(raw);
    return `${fmtDate(d)} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};

const DemoDialog = ({ open, onClose, title = "Demo mode", message = "Actions are turned off in this demo." }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer><button className="btnPrimary" onClick={onClose}>Okay</button></footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const PurchaseOrderDetail = () => {
    const { poId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // display-only data (pre-computed amounts; no calculations here)
    const data = useMemo(() => ({
        id: poId || "PO-2025-0091",
        status: "Approved", // Open | Approved | Partially Received | Closed | Cancelled
        createdAt: "2025-10-03T10:20:30+05:30",
        updatedAt: "2025-10-05T09:12:05+05:30",
        issueDate: "2025-10-03",
        expectedDate: "2025-10-12",
        reference: "RFQ-7783",
        buyer: { name: "Ashish Ranjan", email: "ashish.r@example.com", phone: "+91 90000 11111" },
        vendor: {
            id: "VEND-201",
            name: "Novacare Lifesciences Pvt Ltd",
            contact: "S. Khanna",
            email: "sales@novacare.example",
            phone: "+91 98111 23456",
            gstin: "07ABCDE1234F1Z5",
            address: "Plot 19, Okhla Phase II, New Delhi, 110020, India"
        },
        shipTo: {
            name: "Main Warehouse (DL-01)",
            address: "Shed 3, Patparganj Industrial Area, Delhi 110092, India",
            phone: "+91 99999 88888"
        },
        billTo: {
            name: "Bluewave Traders",
            address: "221B Baker Street, Khan Market, New Delhi 110003, India"
        },
        terms: {
            payment: "Net 15",
            shipping: "FOB Delhi",
            currency: "INR",
            remarks: "Deliver in standard crates. MRP stickers mandatory."
        },
        tags: ["priority", "wholesale", "medicines"],
        timeline: [
            { title: "PO approved", at: "2025-10-03T13:10:05+05:30" },
            { title: "Vendor acknowledged", at: "2025-10-03T15:22:10+05:30" },
            { title: "Labels requested", at: "2025-10-04T17:01:43+05:30" }
        ],
        attachments: [
            { name: "RFQ.pdf", size: "182 KB" },
            { name: "Novacare-Catalogue.pdf", size: "2.3 MB" }
        ],
        related: {
            receiptId: "GRN-55014",
            billId: "BILL-8821"
        },
        items: [
            {
                line: 1,
                sku: "MED-AMOX-500",
                name: "Amoxicillin 500mg",
                form: "Capsule",
                pack: "Strip of 10",
                hsn: "3004",
                gst: "12%",
                batch: "AMX-2201",
                expiry: "2027-02-28",
                uom: "Pack",
                qty: 250,
                rate: "₹ 72.00",
                amount: "₹ 18,000.00"
            },
            {
                line: 2,
                sku: "MED-PARA-650",
                name: "Paracetamol 650mg",
                form: "Tablet",
                pack: "Bottle of 100",
                hsn: "3004",
                gst: "12%",
                batch: "PAR-4411",
                expiry: "2026-11-30",
                uom: "Bottle",
                qty: 120,
                rate: "₹ 210.00",
                amount: "₹ 25,200.00"
            },
            {
                line: 3,
                sku: "MED-ORS-20",
                name: "ORS Powder 20.5g",
                form: "Sachet",
                pack: "Box of 20",
                hsn: "3004",
                gst: "12%",
                batch: "ORS-9023",
                expiry: "2026-06-30",
                uom: "Box",
                qty: 80,
                rate: "₹ 95.00",
                amount: "₹ 7,600.00"
            }
        ],
        totals: {
            subTotal: "₹ 50,800.00",
            discount: "₹ 0.00",
            tax: "₹ 6,096.00",
            shipping: "₹ 1,200.00",
            other: "₹ 0.00",
            grandTotal: "₹ 58,096.00",
            inWords: "Rupees Fifty Eight Thousand Ninety Six Only"
        },
        progress: 45 // received %
    }), [poId]);

    const [showDemo, setShowDemo] = useState(false);

    const doPrint = () => {
        const el = printRef.current;
        if (!el) return;
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
            setShowDemo(true);
        } catch {
            setShowDemo(true);
        }
    };

    const breadcrumbs = (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <NavLink to="/purchase-orders">Purchase Orders</NavLink>
            <span>/</span>
            <span className="current">{data.id}</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print CSS for the dedicated section */}
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
                    <div className="topline">
                        <h1>{data.id}</h1>
                        <Styled.Status className={`st-${data.status.replace(/\s+/g, '-').toLowerCase()}`}>{data.status}</Styled.Status>
                    </div>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Created: {fmtDate(data.issueDate)}</span>
                        <span>•</span>
                        <span>Expected: {fmtDate(data.expectedDate)}</span>
                        <span>•</span>
                        <span>Updated: {fmtDateTime(data.updatedAt)}</span>
                    </div>
                </div>

                <div className="actions">
                    <button className="btnGhost" onClick={() => navigate("/purchase-orders")} title="Back to list">Back</button>
                    <button className="btnGhost" onClick={copyLink} title="Copy deep link">Copy Link</button>
                    <button className="btnGhost" onClick={doPrint} title="Print this PO">Print</button>
                    <button className="btnPrimary" onClick={() => setShowDemo(true)} title="Mark items received">Receive Items</button>
                    <button className="btnPrimary" onClick={() => setShowDemo(true)} title="Create vendor bill">Create Bill</button>
                    <button className="btnDanger" onClick={() => setShowDemo(true)} title="Cancel this PO">Cancel PO</button>
                </div>
            </Styled.Header>

            {/* summary band */}
            <Styled.Summary className="card">
                <div className="block vendor">
                    <header>Vendor</header>
                    <div className="name">{data.vendor.name}</div>
                    <div className="kv"><span>Contact</span><span>{data.vendor.contact}</span></div>
                    <div className="kv"><span>Email</span><span>{data.vendor.email}</span></div>
                    <div className="kv"><span>Phone</span><span>{data.vendor.phone}</span></div>
                    <div className="kv"><span>GSTIN</span><span>{data.vendor.gstin}</span></div>
                    <div className="address">{data.vendor.address}</div>
                    <NavLink className="link" to={`/vendors/${data.vendor.id}`}>Open Vendor</NavLink>
                </div>

                <div className="block ship">
                    <header>Ship To</header>
                    <div className="name">{data.shipTo.name}</div>
                    <div className="address">{data.shipTo.address}</div>
                    <div className="kv"><span>Phone</span><span>{data.shipTo.phone}</span></div>
                </div>

                <div className="block bill">
                    <header>Bill To</header>
                    <div className="name">{data.billTo.name}</div>
                    <div className="address">{data.billTo.address}</div>
                    <div className="kv"><span>Currency</span><span>{data.terms.currency}</span></div>
                    <div className="kv"><span>Payment</span><span>{data.terms.payment}</span></div>
                </div>

                <div className="block meta">
                    <header>Meta</header>
                    <div className="kv"><span>Reference</span><span>{data.reference}</span></div>
                    <div className="kv"><span>Buyer</span><span>{data.buyer.name}</span></div>
                    <div className="kv"><span>Email</span><span>{data.buyer.email}</span></div>
                    <div className="kv"><span>Phone</span><span>{data.buyer.phone}</span></div>
                    <div className="tags">
                        {data.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                </div>
            </Styled.Summary>

            <Styled.Grid>
                <section className="main">
                    {/* progress strip */}
                    <Styled.Progress className="card">
                        <div className="row">
                            <span>Receiving Progress</span>
                            <span className="pct">{data.progress}%</span>
                        </div>
                        <div className="bar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={data.progress}>
                            <i style={{ width: `${data.progress}%` }} />
                        </div>
                        <div className="hint">Linked receipt: <NavLink to={`/purchase-orders/${data.id}/receipt`}>{data.related.receiptId}</NavLink></div>
                    </Styled.Progress>

                    {/* items */}
                    <Styled.Items className="card" id="search-print-area" ref={printRef}>
                        <header>
                            <div className="left">
                                <h3>Items</h3>
                                <div className="sub">All values are pre-computed and shown for reference.</div>
                            </div>
                            <div className="right">
                                <div className="doc">
                                    <div><span className="k">PO #</span><span>{data.id}</span></div>
                                    <div><span className="k">Issue</span><span>{fmtDate(data.issueDate)}</span></div>
                                    <div><span className="k">Expected</span><span>{fmtDate(data.expectedDate)}</span></div>
                                </div>
                            </div>
                        </header>

                        <div className="tableWrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>SKU / Item</th>
                                        <th>Form</th>
                                        <th>Pack</th>
                                        <th>HSN</th>
                                        <th>GST</th>
                                        <th>Batch</th>
                                        <th>Expiry</th>
                                        <th>UoM</th>
                                        <th className="num">Qty</th>
                                        <th className="num">Rate</th>
                                        <th className="num">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.items.map((it) => (
                                        <tr key={it.line}>
                                            <td>{it.line}</td>
                                            <td>
                                                <div className="sku">{it.sku}</div>
                                                <div className="name">{it.name}</div>
                                            </td>
                                            <td>{it.form}</td>
                                            <td>{it.pack}</td>
                                            <td>{it.hsn}</td>
                                            <td>{it.gst}</td>
                                            <td>{it.batch}</td>
                                            <td>{fmtDate(it.expiry)}</td>
                                            <td>{it.uom}</td>
                                            <td className="num">{it.qty}</td>
                                            <td className="num">{it.rate}</td>
                                            <td className="num">{it.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Styled.Totals>
                            <div className="left">
                                <div className="terms card slim">
                                    <header>Terms</header>
                                    <div className="kv"><span>Payment</span><span>{data.terms.payment}</span></div>
                                    <div className="kv"><span>Shipping</span><span>{data.terms.shipping}</span></div>
                                    <div className="remarks">{data.terms.remarks}</div>
                                </div>
                            </div>
                            <div className="right card slim">
                                <div className="row"><span>Sub Total</span><strong>{data.totals.subTotal}</strong></div>
                                <div className="row"><span>Discount</span><strong>{data.totals.discount}</strong></div>
                                <div className="row"><span>Tax</span><strong>{data.totals.tax}</strong></div>
                                <div className="row"><span>Shipping</span><strong>{data.totals.shipping}</strong></div>
                                <div className="row"><span>Other</span><strong>{data.totals.other}</strong></div>
                                <div className="divider" />
                                <div className="row grand"><span>Grand Total</span><strong>{data.totals.grandTotal}</strong></div>
                                <div className="inwords">{data.totals.inWords}</div>
                            </div>
                        </Styled.Totals>
                    </Styled.Items>
                </section>

                <aside className="side">
                    <div className="card sideCard">
                        <h3>Related</h3>
                        <ul className="links">
                            <li><NavLink to={`/purchase-orders/${data.id}/receipt`}>Receipt: {data.related.receiptId}</NavLink></li>
                            <li><NavLink to={`/purchase-orders/${data.id}/bill`}>Bill: {data.related.billId}</NavLink></li>
                            <li><NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/inventory/warehouses">Warehouses</NavLink></li>
                        </ul>
                    </div>

                    <div className="card sideCard">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            {data.timeline.map((t, i) => (
                                <li key={i}>
                                    <span className="dot" />
                                    <div>
                                        <strong>{t.title}</strong>
                                        <div className="muted">{fmtDateTime(t.at)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card sideCard">
                        <h3>Attachments</h3>
                        <ul className="files">
                            {data.attachments.map((f, i) => (
                                <li key={i}>
                                    <span className="name">{f.name}</span>
                                    <span className="size">{f.size}</span>
                                    <button className="btnGhost small" onClick={() => setShowDemo(true)}>View</button>
                                    <button className="btnGhost small" onClick={() => setShowDemo(true)}>Download</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card sideCard">
                        <h3>Audit</h3>
                        <div className="audit">
                            <div><span>Created</span><strong>{fmtDateTime(data.createdAt)}</strong></div>
                            <div><span>Updated</span><strong>{fmtDateTime(data.updatedAt)}</strong></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <DemoDialog open={showDemo} onClose={() => setShowDemo(false)} />
        </Styled.Page>
    );
};

export default PurchaseOrderDetail;
