import React, { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* date utils */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

const OrderItems = () => {
    const { orderId = "ORD-3001" } = useParams();
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all");
    const [sortBy, setSortBy] = useState("line");
    const [banner, setBanner] = useState("");

    const printRef = useRef(null);

    /* demo data (display-only) */
    const meta = useMemo(() => ({
        id: orderId,
        customerId: "CUST-1001",
        customerName: "Bluewave Traders",
        channel: "Web",
        status: "Partially Packed",
        createdAt: "2025-10-04T10:12:34+05:30",
        updatedAt: "2025-10-04T15:38:20+05:30",
        currency: "₹",
        totals: {
            items: "₹18,920.00",
            tax: "₹1,812.40",
            discount: "₹500.00",
            shipping: "₹0.00",
            grand: "₹20,232.40",
        }
    }), [orderId]);

    const items = useMemo(() => ([
        { line: 1, id: "ITEM-01", sku: "MED-AMOX-500", name: "Amoxicillin 500mg Capsule", batch: "B-AX-23-091", expiry: "2026-02-28", qty: "20", uom: "Strip", price: "₹120.00", tax: "12%", discount: "₹0.00", amount: "₹2,400.00", status: "Packed", notes: "Keep dry" },
        { line: 2, id: "ITEM-02", sku: "MED-PARA-650", name: "Paracetamol 650mg Tablet", batch: "P-650-24-005", expiry: "2027-01-15", qty: "50", uom: "Strip", price: "₹32.00", tax: "5%", discount: "₹50.00", amount: "₹1,550.00", status: "Pending", notes: "Gift pack promo" },
        { line: 3, id: "ITEM-03", sku: "MED-ALB-200", name: "Albendazole 200mg", batch: "ALB-0924-77", expiry: "2026-09-30", qty: "120", uom: "Tab", price: "₹4.50", tax: "12%", discount: "₹0.00", amount: "₹540.00", status: "Packed", notes: "—" },
        { line: 4, id: "ITEM-04", sku: "MED-RABE-20", name: "Rabeprazole 20mg", batch: "RBZ-24-221", expiry: "2027-03-31", qty: "80", uom: "Tab", price: "₹7.80", tax: "12%", discount: "₹0.00", amount: "₹624.00", status: "Backorder", notes: "ETA next week" },
        { line: 5, id: "ITEM-05", sku: "MED-AZT-500", name: "Azithromycin 500mg", batch: "AZT-23-199", expiry: "2026-12-31", qty: "60", uom: "Tab", price: "₹21.00", tax: "12%", discount: "₹150.00", amount: "₹1,110.00", status: "Packed", notes: "Lot check" },
        { line: 6, id: "ITEM-06", sku: "MED-VITC-1G", name: "Vitamin C 1000mg", batch: "VTC-25-014", expiry: "2027-05-31", qty: "40", uom: "Bottle", price: "₹199.00", tax: "12%", discount: "₹0.00", amount: "₹7,960.00", status: "Pending", notes: "Batch QC pending" },
        { line: 7, id: "ITEM-07", sku: "MED-ORS-21", name: "ORS Sachet", batch: "ORS-9925", expiry: "2026-07-31", qty: "100", uom: "Sachet", price: "₹18.00", tax: "5%", discount: "₹0.00", amount: "₹1,800.00", status: "Cancelled", notes: "Customer request" },
        { line: 8, id: "ITEM-08", sku: "MED-ZINC-50", name: "Zinc 50mg", batch: "ZNC-24-08", expiry: "2026-04-30", qty: "90", uom: "Tab", price: "₹6.80", tax: "12%", discount: "₹0.00", amount: "₹612.00", status: "Packed", notes: "—" },
        { line: 9, id: "ITEM-09", sku: "MED-IBU-400", name: "Ibuprofen 400mg", batch: "IBU-24-55", expiry: "2026-11-30", qty: "70", uom: "Tab", price: "₹10.50", tax: "12%", discount: "₹0.00", amount: "₹735.00", status: "Shipped", notes: "From WH-2" },
    ]), []);

    /* filter/sort (UI-only) */
    const visible = useMemo(() => {
        let r = items;
        const qq = q.trim().toLowerCase();
        if (qq) {
            r = r.filter(x =>
                (x.name + " " + x.sku + " " + x.batch + " " + x.notes).toLowerCase().includes(qq)
            );
        }
        if (status !== "all") {
            r = r.filter(x => x.status.toLowerCase() === status);
        }
        const by = String(sortBy || "line");
        r = [...r].sort((a, b) => {
            if (by === "name") return a.name.localeCompare(b.name);
            if (by === "sku") return a.sku.localeCompare(b.sku);
            if (by === "expiry") return new Date(a.expiry) - new Date(b.expiry);
            return a.line - b.line;
        });
        return r;
    }, [items, q, status, sortBy]);

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3000);
        return () => clearTimeout(t);
    }, [banner]);

    const copyLink = async () => {
        const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
        const url = `${window.location.origin}${base}/orders/${meta.id}/items`;
        try {
            await navigator.clipboard.writeText(url);
            setBanner("Link copied");
        } catch {
            setBanner("Could not copy link");
        }
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const exportCsv = () => {
        const head = ["Line", "Product", "SKU", "Batch", "Expiry", "Qty", "UOM", "Price", "Tax", "Discount", "Amount", "Status", "Notes"];
        const rows = visible.map(x => [x.line, x.name, x.sku, x.batch, x.expiry, x.qty, x.uom, x.price, x.tax, x.discount, x.amount, x.status, x.notes]);
        const csv = [head, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `${meta.id}-items.csv`;
        document.body.appendChild(a); a.click();
        a.remove(); URL.revokeObjectURL(url);
    };

    const breadcrumbs = (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <NavLink to="/orders">Orders</NavLink>
            <span>/</span>
            <NavLink to={`/orders/${meta.id}`}>{meta.id}</NavLink>
            <span>/</span>
            <span className="current">Items</span>
        </nav>
    );

    return (
        <Styled.Page>
            {/* print css  */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Order Items</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Order: {meta.id}</span>
                        <span>•</span>
                        <span>Created: {fmt(meta.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmt(meta.updatedAt, true)}</span>
                    </div>
                </div>
                <div className="right">
                    <button className="btnGhost" onClick={copyLink} title="Copy deep link">Copy Link</button>
                    <button className="btnGhost" onClick={printSection} title="Print items">Print</button>
                    <button className="btnPrimary" onClick={exportCsv} title="Export visible rows">Export CSV</button>
                </div>
            </Styled.Header>

            {banner && <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner>}

            <Styled.Layout>
                {/* main */}
                <div className="main card">
                    <Styled.Toolbar>
                        <div className="filters">
                            <input
                                type="text"
                                placeholder="Search items…"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                aria-label="Search items"
                            />
                            <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
                                <option value="all">All statuses</option>
                                <option value="packed">Packed</option>
                                <option value="pending">Pending</option>
                                <option value="backorder">Backorder</option>
                                <option value="shipped">Shipped</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} aria-label="Sort items">
                                <option value="line">Sort: Line</option>
                                <option value="name">Sort: Name</option>
                                <option value="sku">Sort: SKU</option>
                                <option value="expiry">Sort: Expiry</option>
                            </select>
                        </div>
                        <div className="actions">
                            <button disabled title="Demo only">Add Item</button>
                            <button disabled title="Demo only">Delete Selected</button>
                            <button disabled title="Demo only">Bulk Update</button>
                        </div>
                    </Styled.Toolbar>

                    <Styled.TableWrap>
                        <Styled.Table role="table" aria-label="Order items">
                            <div className="thead" role="rowgroup">
                                <div className="tr" role="row">
                                    <div className="th sticky" role="columnheader">Line</div>
                                    <div className="th" role="columnheader">Product</div>
                                    <div className="th" role="columnheader">SKU</div>
                                    <div className="th" role="columnheader">Batch</div>
                                    <div className="th" role="columnheader">Expiry</div>
                                    <div className="th num" role="columnheader">Qty</div>
                                    <div className="th" role="columnheader">UOM</div>
                                    <div className="th num" role="columnheader">Price</div>
                                    <div className="th" role="columnheader">Tax</div>
                                    <div className="th num" role="columnheader">Discount</div>
                                    <div className="th num" role="columnheader">Amount</div>
                                    <div className="th" role="columnheader">Status</div>
                                    <div className="th" role="columnheader">Notes</div>
                                </div>
                            </div>

                            <div className="tbody" role="rowgroup">
                                {visible.map(x => (
                                    <div className="tr" role="row" key={x.id}>
                                        <div className="td sticky" role="cell">{x.line}</div>
                                        <div className="td" role="cell">
                                            <div className="prod">
                                                <div className="name">{x.name}</div>
                                                <div className="muted small">{x.id}</div>
                                            </div>
                                        </div>
                                        <div className="td" role="cell">{x.sku}</div>
                                        <div className="td" role="cell">{x.batch}</div>
                                        <div className="td" role="cell">{fmt(x.expiry)}</div>
                                        <div className="td num" role="cell">{x.qty}</div>
                                        <div className="td" role="cell">{x.uom}</div>
                                        <div className="td num" role="cell">{x.price}</div>
                                        <div className="td" role="cell">{x.tax}</div>
                                        <div className="td num" role="cell">{x.discount}</div>
                                        <div className="td num" role="cell"><strong>{x.amount}</strong></div>
                                        <div className="td" role="cell">
                                            <span className={`chip status ${x.status.toLowerCase()}`}>{x.status}</span>
                                        </div>
                                        <div className="td" role="cell">{x.notes}</div>
                                    </div>
                                ))}
                            </div>
                        </Styled.Table>

                        {/* pagination (display-only) */}
                        <Styled.Pager>
                            <button disabled aria-label="Previous page">‹</button>
                            <span>Page 1 of 1 • {visible.length} items</span>
                            <button disabled aria-label="Next page">›</button>
                        </Styled.Pager>
                    </Styled.TableWrap>
                </div>

                {/* side */}
                <Styled.Side className="side">
                    <div className="card">
                        <h3>Order</h3>
                        <div className="metaList">
                            <div><span className="k">ID</span><span className="v">{meta.id}</span></div>
                            <div><span className="k">Customer</span><span className="v"><NavLink to={`/customers/${meta.customerId}`}>{meta.customerName}</NavLink></span></div>
                            <div><span className="k">Channel</span><span className="v">{meta.channel}</span></div>
                            <div><span className="k">Status</span><span className="v"><span className="chip soft">{meta.status}</span></span></div>
                            <div><span className="k">Created</span><span className="v">{fmt(meta.createdAt, true)}</span></div>
                            <div><span className="k">Updated</span><span className="v">{fmt(meta.updatedAt, true)}</span></div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Totals</h3>
                        <ul className="totals">
                            <li><span>Items</span><strong>{meta.totals.items}</strong></li>
                            <li><span>Tax</span><strong>{meta.totals.tax}</strong></li>
                            <li><span>Discount</span><strong>{meta.totals.discount}</strong></li>
                            <li><span>Shipping</span><strong>{meta.totals.shipping}</strong></li>
                            <li className="grand"><span>Grand Total</span><strong>{meta.totals.grand}</strong></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Related</h3>
                        <ul className="links">
                            <li><NavLink to={`/orders/${meta.id}`}>Order Details</NavLink></li>
                            <li><NavLink to={`/orders/${meta.id}/invoice`}>Invoice</NavLink></li>
                            <li><NavLink to={`/orders/${meta.id}/print`}>Print Order</NavLink></li>
                            <li><NavLink to={`/customers/${meta.customerId}`}>Customer</NavLink></li>
                            <li><NavLink to="/shipments">Shipments</NavLink></li>
                        </ul>
                    </div>

                    {/* printable summary */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printGrid">
                            <div><span className="k">Order</span><span className="v">{meta.id}</span></div>
                            <div><span className="k">Customer</span><span className="v">{meta.customerName}</span></div>
                            <div><span className="k">Items (visible)</span><span className="v">{visible.length}</span></div>
                            <div><span className="k">Updated</span><span className="v">{fmt(meta.updatedAt, true)}</span></div>
                            <div className="full">
                                <div className="small muted">This print shows the summary and currently visible items count.</div>
                            </div>
                        </div>
                    </div>
                </Styled.Side>
            </Styled.Layout>
        </Styled.Page>
    );
};

export default OrderItems;
