import React, { useMemo, useRef } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { MdPrint, MdArrowBack, MdFileDownload, MdLocalShipping, MdInventory2 } from "react-icons/md";

/* date utilities exact formatting rules */
const fmt = (input, withTime = false) => {
    const d = input instanceof Date ? input : new Date(input);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[d.getDay()]} ${mons[d.getMonth()]} ${pad(d.getDate())} ${d.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const onlyTime = (input) => {
    const d = input instanceof Date ? input : new Date(input);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};

const PurchaseOrderReceipt = () => {
    const { poId = "PO-2025-00421" } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // display-only, pre-specified data (no calculations)
    const data = useMemo(
        () => ({
            poId,
            receiptId: "GRN-1041",
            status: "Partially Received",
            orderedAt: "2025-10-04T12:30:10+05:30",
            expectedAt: "2025-10-10T18:00:00+05:30",
            receivedAt: "2025-10-04T15:38:20+05:30",
            vendor: {
                name: "Medistar Pharma Pvt. Ltd.",
                code: "VND-2012",
                contact: "R. Verma",
                email: "sales@medistar.example.com",
                phone: "+91 98999 10010",
                gstin: "07AAACM1234Q1Z7",
                address: "A-34, Okhla Industrial Area, Phase 1, New Delhi 110020, India",
            },
            billTo: {
                name: "Bluewave Traders",
                address:
                    "3rd Floor, 221B Baker Street, Khan Market, New Delhi 110003, India",
                gstin: "22ABCDE1234F1Z5",
            },
            shipTo: {
                name: "Bluewave DC – Gurugram",
                address: "Plot 14, Industrial Area, Phase 2, Gurugram 122002, India",
                contact: "Warehouse Desk",
                phone: "+91 98100 11223",
            },
            reference: {
                vendorRef: "QTN-7789",
                paymentTerms: "Net 15",
                currency: "INR",
                incoterm: "DAP",
                carrier: "BlueDart",
                mode: "Surface",
            },
            progressPct: 60, // static for display
            totals: {
                subtotal: "₹1,84,000.00",
                discount: "₹4,000.00",
                tax: "₹9,000.00",
                freight: "₹2,500.00",
                grandTotal: "₹1,91,500.00",
                paid: "₹1,00,000.00",
                balance: "₹91,500.00",
            },
            items: [
                {
                    line: 1,
                    sku: "MED-AMOX-500",
                    name: "Amoxicillin 500mg Capsule",
                    uom: "Box (10x10)",
                    orderedQty: "50",
                    receivedQty: "30",
                    pendingQty: "20",
                    batch: "AMX0925A",
                    expiry: "2027-03-31",
                    mrp: "₹120.00",
                    rate: "₹75.00",
                    lineTotal: "₹37,500.00",
                    remarks: "Outer cartons OK",
                },
                {
                    line: 2,
                    sku: "MED-PARA-650",
                    name: "Paracetamol 650mg Tablet",
                    uom: "Box (20x10)",
                    orderedQty: "80",
                    receivedQty: "50",
                    pendingQty: "30",
                    batch: "PARA1025Z",
                    expiry: "2026-12-31",
                    mrp: "₹45.00",
                    rate: "₹28.00",
                    lineTotal: "₹28,000.00",
                    remarks: "5 boxes dented (repacked)",
                },
                {
                    line: 3,
                    sku: "MED-CPM-25",
                    name: "Chlorpheniramine Maleate 25mg",
                    uom: "Bottle (100 tabs)",
                    orderedQty: "100",
                    receivedQty: "100",
                    pendingQty: "0",
                    batch: "CPM0925K",
                    expiry: "2028-06-30",
                    mrp: "₹195.00",
                    rate: "₹110.00",
                    lineTotal: "₹11,000.00",
                    remarks: "Sealed",
                },
            ],
            receipts: [
                {
                    id: "GRN-1041",
                    date: "2025-10-04T15:38:20+05:30",
                    by: "A. Sharma",
                    boxes: "8",
                    lines: "3",
                    note: "Outer cartons in good condition.",
                },
                {
                    id: "ASN-1040",
                    date: "2025-10-04T11:08:42+05:30",
                    by: "Vendor (ASN)",
                    boxes: "8",
                    lines: "3",
                    note: "Advance Shipment Notice synced.",
                },
            ],
            attachments: [
                { name: "Vendor-Quotation.pdf", size: "124 KB" },
                { name: "COA-Amoxicillin-Batch-AMX0925A.pdf", size: "356 KB" },
                { name: "Packing-List-GRN-1041.pdf", size: "88 KB" },
            ],
            notes:
                "Checked and received in presence of vendor rep. Temperature logs within range. Dented boxes inspected and repacked. Pending due to backorder from supplier.",
        }),
        [poId]
    );

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

    const downloadReceiptTxt = () => {
        const blob = new Blob(
            [
                `Receipt: ${data.receiptId}\nPO: ${data.poId}\nReceived: ${fmt(data.receivedAt, true)}\nCarrier: ${data.reference.carrier}\nMode: ${data.reference.mode}\n`,
            ],
            { type: "text/plain;charset=utf-8" }
        );
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${data.receiptId}.txt`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/purchase-orders">Purchase Orders</NavLink>
            <span>/</span>
            <NavLink to={`/purchase-orders/${data.poId}`}>{data.poId}</NavLink>
            <span>/</span>
            <span className="current">{data.receiptId}</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* Print CSS */}
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

            <Styled.Toolbar className="card">
                <div className="left">
                    <button className="btnGhost" onClick={() => navigate(`/purchase-orders/${data.poId}`)}>
                        <MdArrowBack size={18} />
                        <span>Back to PO</span>
                    </button>
                    <div className="title">
                        <h1>Goods Receipt</h1>
                        {breadcrumbs}
                    </div>
                </div>

                <div className="right">
                    <button className="btnGhost" onClick={printSection} title="Print">
                        <MdPrint size={18} />
                        <span>Print</span>
                    </button>
                    <button className="btnGhost" onClick={downloadReceiptTxt} title="Download">
                        <MdFileDownload size={18} />
                        <span>Download</span>
                    </button>
                    <button className="btnPrimary" disabled title="Demo only">
                        <MdInventory2 size={18} />
                        <span>Book Purchase Bill</span>
                    </button>
                </div>
            </Styled.Toolbar>

            {/* Printable area begins here */}
            <div id="search-print-area" ref={printRef}>
                <Styled.Header>
                    <div className="ids">
                        <div className="idBlock">
                            <div className="k">PO</div>
                            <div className="v">{data.poId}</div>
                        </div>
                        <div className="idBlock">
                            <div className="k">Receipt</div>
                            <div className="v">{data.receiptId}</div>
                        </div>
                    </div>

                    <div className="statusRow">
                        <div className={`pill status`}>
                            <span className="dot" />
                            {data.status}
                        </div>
                        <div className="meta">
                            <span>Ordered: {fmt(data.orderedAt)}</span>
                            <span>•</span>
                            <span>Expected: {fmt(data.expectedAt)}</span>
                            <span>•</span>
                            <span>Received: {fmt(data.receivedAt, true)}</span>
                        </div>
                    </div>

                    <div className="progress">
                        <div className="label">
                            <MdLocalShipping aria-hidden="true" />
                            <span>Receiving Progress</span>
                        </div>
                        <div className="bar">
                            <div className="fill" style={{ width: `${data.progressPct}%` }} />
                        </div>
                        <div className="pct">{data.progressPct}%</div>
                    </div>
                </Styled.Header>

                <Styled.Grid>
                    {/* Left: Main document */}
                    <section className="col main">
                        <div className="card section">
                            <header className="secHead">
                                <h3>Receipt Details</h3>
                            </header>

                            <div className="pairGrid">
                                <div>
                                    <div className="k">Vendor</div>
                                    <div className="v">{data.vendor.name} ({data.vendor.code})</div>
                                </div>
                                <div>
                                    <div className="k">Vendor Ref</div>
                                    <div className="v">{data.reference.vendorRef}</div>
                                </div>
                                <div>
                                    <div className="k">Contact</div>
                                    <div className="v">
                                        {data.vendor.contact} · {data.vendor.phone} · {data.vendor.email}
                                    </div>
                                </div>
                                <div>
                                    <div className="k">GSTIN</div>
                                    <div className="v">{data.vendor.gstin}</div>
                                </div>
                                <div>
                                    <div className="k">Incoterm</div>
                                    <div className="v">{data.reference.incoterm}</div>
                                </div>
                                <div>
                                    <div className="k">Currency</div>
                                    <div className="v">{data.reference.currency}</div>
                                </div>
                                <div className="full">
                                    <div className="k">Vendor Address</div>
                                    <div className="v">{data.vendor.address}</div>
                                </div>
                            </div>
                        </div>

                        <div className="card section">
                            <header className="secHead">
                                <h3>Line Items</h3>
                            </header>

                            <div className="tableWrap">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>SKU</th>
                                            <th>Item</th>
                                            <th>UoM</th>
                                            <th className="num">Ordered</th>
                                            <th className="num">Received</th>
                                            <th className="num">Pending</th>
                                            <th>Batch</th>
                                            <th>Expiry</th>
                                            <th className="num">Rate</th>
                                            <th className="num">MRP</th>
                                            <th className="num">Line Total</th>
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.items.map((it) => (
                                            <tr key={it.line}>
                                                <td>{it.line}</td>
                                                <td>
                                                    <div className="mono">{it.sku}</div>
                                                </td>
                                                <td>{it.name}</td>
                                                <td>{it.uom}</td>
                                                <td className="num">{it.orderedQty}</td>
                                                <td className="num">{it.receivedQty}</td>
                                                <td className="num">{it.pendingQty}</td>
                                                <td>{it.batch}</td>
                                                <td>{fmt(it.expiry)}</td>
                                                <td className="num">{it.rate}</td>
                                                <td className="num">{it.mrp}</td>
                                                <td className="num">{it.lineTotal}</td>
                                                <td>{it.remarks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="card section">
                            <header className="secHead">
                                <h3>Notes</h3>
                            </header>
                            <p className="notes">{data.notes}</p>
                        </div>
                    </section>

                    {/* Right: Context */}
                    <aside className="col side">
                        <div className="card section">
                            <header className="secHead">
                                <h3>Bill To</h3>
                            </header>
                            <div className="addr">
                                <div className="name">{data.billTo.name}</div>
                                <div className="line">{data.billTo.address}</div>
                                <div className="line">GSTIN: {data.billTo.gstin}</div>
                            </div>
                        </div>

                        <div className="card section">
                            <header className="secHead">
                                <h3>Ship To</h3>
                            </header>
                            <div className="addr">
                                <div className="name">{data.shipTo.name}</div>
                                <div className="line">{data.shipTo.address}</div>
                                <div className="line">{data.shipTo.contact} · {data.shipTo.phone}</div>
                            </div>
                        </div>

                        <div className="card section">
                            <header className="secHead">
                                <h3>Logistics</h3>
                            </header>
                            <div className="kv">
                                <div><span className="k">Carrier</span><span className="v">{data.reference.carrier}</span></div>
                                <div><span className="k">Mode</span><span className="v">{data.reference.mode}</span></div>
                                <div><span className="k">Expected</span><span className="v">{fmt(data.expectedAt)}</span></div>
                                <div><span className="k">Received</span><span className="v">{fmt(data.receivedAt, true)}</span></div>
                            </div>
                            <div className="code">
                                <div className="label">PO / Receipt</div>
                                <div className="mono">{data.poId} · {data.receiptId}</div>
                            </div>
                        </div>

                        <div className="card section">
                            <header className="secHead">
                                <h3>Totals</h3>
                            </header>
                            <div className="kv">
                                <div><span className="k">Subtotal</span><span className="v">{data.totals.subtotal}</span></div>
                                <div><span className="k">Discount</span><span className="v">{data.totals.discount}</span></div>
                                <div><span className="k">Tax</span><span className="v">{data.totals.tax}</span></div>
                                <div><span className="k">Freight</span><span className="v">{data.totals.freight}</span></div>
                                <div className="split"><span className="k">Grand Total</span><span className="v strong">{data.totals.grandTotal}</span></div>
                                <div><span className="k">Paid</span><span className="v">{data.totals.paid}</span></div>
                                <div><span className="k">Balance</span><span className="v">{data.totals.balance}</span></div>
                            </div>
                        </div>

                        <div className="card section">
                            <header className="secHead">
                                <h3>Receipts & ASN</h3>
                            </header>
                            <ul className="timeline">
                                {data.receipts.map((g) => (
                                    <li key={g.id}>
                                        <span className="dot" />
                                        <div className="block">
                                            <div className="rowTop">
                                                <NavLink to="#" title="Open">{g.id}</NavLink>
                                                <span className="muted">{fmt(g.date, true)}</span>
                                            </div>
                                            <div className="rowSub">
                                                <span>By: {g.by}</span>
                                                <span>•</span>
                                                <span>Boxes: {g.boxes}</span>
                                                <span>•</span>
                                                <span>Lines: {g.lines}</span>
                                            </div>
                                            <div className="note">{g.note}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card section">
                            <header className="secHead">
                                <h3>Attachments</h3>
                            </header>
                            <ul className="files">
                                {data.attachments.map((f, i) => (
                                    <li key={i}>
                                        <span className="file">{f.name}</span>
                                        <span className="size">{f.size}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </Styled.Grid>
            </div>
            {/* Printable area ends */}
        </Styled.Page>
    );
};

export default PurchaseOrderReceipt;
