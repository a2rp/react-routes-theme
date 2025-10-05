import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* date formatting helpers */
const pad = (n) => String(n).padStart(2, "0");
const fmt = (d, withTime = false) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const onlyTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

const PurchaseOrderNew = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    // demo payload (pre-specified, display-only)
    const po = useMemo(() => ({
        id: "PO-50021",
        createdISO: "2025-10-04T15:38:20+05:30",
        expectedISO: "2025-10-11T09:00:00+05:30",
        status: "Draft",
        buyer: {
            name: "Aster Labs & Pharma",
            code: "BUY-ALP-01",
            gstin: "09ABCDR1234E1Z9",
            address: {
                line1: "2nd Floor, Crescent Tower",
                line2: "MG Road",
                city: "Bengaluru",
                state: "KA",
                zip: "560001",
                country: "India",
            },
            warehouse: {
                name: "Central DC - BLR",
                line1: "Plot 22, KIADB Ind. Area",
                city: "Bengaluru",
                state: "KA",
                zip: "560099",
                country: "India",
            },
        },
        vendor: {
            id: "VEND-1001",
            name: "Omni Distributors Pvt. Ltd.",
            contact: "Neha Verma",
            email: "sales@omni.example.com",
            phone: "+91 98100 11223",
            gstin: "07ABCDE1234F1Z6",
            address: {
                line1: "D-14, Okhla Phase 1",
                line2: "Near Metro Depot",
                city: "New Delhi",
                state: "DL",
                zip: "110020",
                country: "India",
            },
        },
        shipTo: {
            attention: "Stores – Central DC",
            line1: "Dock 3, Gate-B",
            line2: "Plot 22, KIADB Ind. Area",
            city: "Bengaluru",
            state: "KA",
            zip: "560099",
            country: "India",
        },
        // items (display-only; precomputed line totals)
        items: [
            {
                sku: "MED-AMOX-500",
                name: "Amoxicillin",
                spec: "500 mg | 10x10 Tablets",
                uom: "Box",
                qty: 24,
                rate: "₹ 480.00",
                gst: "12%",
                amount: "₹ 11,520.00",
                productId: "MED-AMOX-500"
            },
            {
                sku: "MED-PARA-650",
                name: "Paracetamol",
                spec: "650 mg | 25x10 Tablets",
                uom: "Box",
                qty: 12,
                rate: "₹ 720.00",
                gst: "5%",
                amount: "₹ 8,640.00",
                productId: "MED-PARA-650"
            },
            {
                sku: "MED-ORS-200",
                name: "ORS Sachet",
                spec: "200 ml | 50 Sachets",
                uom: "Pack",
                qty: 20,
                rate: "₹ 96.00",
                gst: "12%",
                amount: "₹ 1,920.00",
                productId: "MED-ORS-200"
            },
            {
                sku: "MED-GLV-NIT",
                name: "Nitrile Gloves",
                spec: "Medium | 100 pcs",
                uom: "Box",
                qty: 10,
                rate: "₹ 180.00",
                gst: "12%",
                amount: "₹ 1,800.00",
                productId: "MED-GLV-NIT"
            }
        ],
        totals: {
            subtotal: "₹ 23,880.00",
            discount: "₹ 1,194.00",
            tax: "₹ 2,094.00",
            freight: "₹ 0.00",
            grandTotal: "₹ 24,780.00"
        },
        attachments: ["rfq-2025-09-28.pdf", "vendor-catalog.csv"],
        terms: "Prices include primary packaging. Delivery within 7 days from PO date. Payment NET 30 days via bank transfer.",
        notes: "Urgent replenishment for top SKUs. Please coordinate delivery slot with warehouse before dispatch.",
        timeline: [
            { label: "PO created", when: "2025-10-04T15:38:20+05:30" },
            { label: "RFQ finalized with vendor", when: "2025-09-29T11:10:00+05:30" },
            { label: "Budget approved by Finance", when: "2025-09-28T10:05:00+05:30" }
        ],
        approvers: [
            { name: "R. Srinivas", role: "Procurement Head" },
            { name: "A. Kapoor", role: "Finance Controller" },
            { name: "M. Dutta", role: "Ops" }
        ],
        tags: ["priority", "replenishment", "medicines"]
    }), []);

    const [banner, setBanner] = useState("");
    const [q, setQ] = useState("");

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setBanner(`Link copied at ${fmt(new Date(), true)}`);
            setTimeout(() => setBanner(""), 3500);
        } catch {
            setBanner("Could not copy the link");
            setTimeout(() => setBanner(""), 3500);
        }
    };

    const filteredItems = useMemo(() => {
        const term = q.trim().toLowerCase();
        if (!term) return po.items;
        return po.items.filter(it =>
            [it.sku, it.name, it.spec].join(" ").toLowerCase().includes(term)
        );
    }, [q, po.items]);

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

    return (
        <Styled.Page>
            {/* print-only CSS per your standard */}
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
                    <h1>New Purchase Order</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                        <span>/</span>
                        <span className="current">New</span>
                    </nav>
                    <div className="meta">
                        <span>ID: {po.id}</span><span>•</span>
                        <span>Created: {fmt(po.createdISO, true)}</span><span>•</span>
                        <span>Expected: {fmt(po.expectedISO)}</span><span>•</span>
                        <span>Status: {po.status}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" title="Go back" onClick={() => navigate("/purchase-orders")}>Cancel</button>
                    <button className="btnPrimary" title="Demo only" disabled>Save Draft</button>
                    <button className="btnPrimary" title="Demo only" disabled>Submit PO</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnGhost" onClick={copyLink} title="Copy link">Copy Link</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            {/* progress / steps */}
            <Styled.Stepper className="card">
                <div className="step done">
                    <span className="dot" />
                    <div className="info">
                        <div className="t">Vendor</div>
                        <div className="s">{po.vendor.name}</div>
                    </div>
                </div>
                <div className="step current">
                    <span className="dot" />
                    <div className="info">
                        <div className="t">Items</div>
                        <div className="s">{po.items.length} lines</div>
                    </div>
                </div>
                <div className="step">
                    <span className="dot" />
                    <div className="info">
                        <div className="t">Review &amp; Submit</div>
                        <div className="s">Confirmation</div>
                    </div>
                </div>
            </Styled.Stepper>

            <Styled.Grid>
                {/* LEFT – content */}
                <section className="col main">
                    {/* parties */}
                    <div className="row card">
                        <div className="party">
                            <h3>Buyer</h3>
                            <div className="kv">
                                <div><span className="k">Org</span><span className="v">{po.buyer.name}</span></div>
                                <div><span className="k">Code</span><span className="v">{po.buyer.code}</span></div>
                                <div><span className="k">GSTIN</span><span className="v">{po.buyer.gstin}</span></div>
                            </div>
                            <address className="addr">
                                {po.buyer.address.line1}<br />
                                {po.buyer.address.line2}<br />
                                {po.buyer.address.city} {po.buyer.address.zip}, {po.buyer.address.state}, {po.buyer.address.country}
                            </address>
                        </div>
                        <div className="party">
                            <h3>Vendor</h3>
                            <div className="kv">
                                <div><span className="k">Name</span><span className="v"><NavLink to={`/vendors/${po.vendor.id}`}>{po.vendor.name}</NavLink></span></div>
                                <div><span className="k">Contact</span><span className="v">{po.vendor.contact}</span></div>
                                <div><span className="k">GSTIN</span><span className="v">{po.vendor.gstin}</span></div>
                                <div><span className="k">Email</span><span className="v">{po.vendor.email}</span></div>
                                <div><span className="k">Phone</span><span className="v">{po.vendor.phone}</span></div>
                            </div>
                            <address className="addr">
                                {po.vendor.address.line1}<br />
                                {po.vendor.address.line2}<br />
                                {po.vendor.address.city} {po.vendor.address.zip}, {po.vendor.address.state}, {po.vendor.address.country}
                            </address>
                        </div>
                        <div className="party">
                            <h3>Ship To</h3>
                            <div className="kv">
                                <div><span className="k">Attention</span><span className="v">{po.shipTo.attention}</span></div>
                                <div><span className="k">Window</span><span className="v">{onlyTime(po.expectedISO)}</span></div>
                            </div>
                            <address className="addr">
                                {po.shipTo.line1}<br />
                                {po.shipTo.line2}<br />
                                {po.shipTo.city} {po.shipTo.zip}, {po.shipTo.state}, {po.shipTo.country}
                            </address>
                        </div>
                    </div>

                    {/* tags + controls (display-only) */}
                    <div className="row card">
                        <div className="tags">
                            {po.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                        </div>
                        <div className="hint">Actions are disabled in demo mode. Use the Print button for a formatted summary.</div>
                    </div>

                    {/* items */}
                    <div className="row card">
                        <div className="rowHead">
                            <h3>Items</h3>
                            <div className="filters">
                                <input
                                    type="text"
                                    placeholder="Filter items…"
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    aria-label="Filter items"
                                />
                            </div>
                        </div>
                        <div className="tableWrap">
                            <table className="items">
                                <thead>
                                    <tr>
                                        <th style={{ width: 160 }}>SKU</th>
                                        <th>Product</th>
                                        <th style={{ width: 160 }}>UoM</th>
                                        <th style={{ width: 110 }} className="num">Qty</th>
                                        <th style={{ width: 140 }} className="num">Rate</th>
                                        <th style={{ width: 100 }} className="num">GST</th>
                                        <th style={{ width: 160 }} className="num">Amount</th>
                                        <th style={{ width: 120 }}>Links</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredItems.map((it) => (
                                        <tr key={it.sku}>
                                            <td><code className="mono">{it.sku}</code></td>
                                            <td>
                                                <div className="pname">{it.name}</div>
                                                <div className="psub">{it.spec}</div>
                                            </td>
                                            <td>{it.uom}</td>
                                            <td className="num">{it.qty}</td>
                                            <td className="num">{it.rate}</td>
                                            <td className="num">{it.gst}</td>
                                            <td className="num">{it.amount}</td>
                                            <td>
                                                <NavLink className="inline" to={`/products/${it.productId}`}>Product</NavLink>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* totals block (precomputed) */}
                        <div className="totals">
                            <div className="line"><span>Subtotal</span><span>{po.totals.subtotal}</span></div>
                            <div className="line"><span>Discount</span><span>{po.totals.discount}</span></div>
                            <div className="line"><span>Tax</span><span>{po.totals.tax}</span></div>
                            <div className="line"><span>Freight</span><span>{po.totals.freight}</span></div>
                            <div className="line grand"><span>Grand Total</span><span>{po.totals.grandTotal}</span></div>
                        </div>
                    </div>

                    {/* terms & notes */}
                    <div className="row card two">
                        <div>
                            <h3>Terms</h3>
                            <p className="para">{po.terms}</p>
                        </div>
                        <div>
                            <h3>Internal Notes</h3>
                            <p className="para">{po.notes}</p>
                        </div>
                    </div>

                    {/* attachments */}
                    <div className="row card">
                        <h3>Attachments</h3>
                        <div className="files">
                            {po.attachments.map(f => (
                                <a key={f} href="#" className="filepill" title="Open file (demo)">
                                    <span className="dot" /><span>{f}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RIGHT – summary / activity / print */}
                <aside className="col side">
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>PO Summary</h3>
                        <div className="summary">
                            <div className="kv"><span className="k">PO</span><span className="v">{po.id}</span></div>
                            <div className="kv"><span className="k">Date</span><span className="v">{fmt(po.createdISO)}</span></div>
                            <div className="kv"><span className="k">Expected</span><span className="v">{fmt(po.expectedISO)}</span></div>
                            <div className="kv"><span className="k">Vendor</span><span className="v">{po.vendor.name}</span></div>
                            <div className="kv"><span className="k">Contact</span><span className="v">{po.vendor.contact}</span></div>
                            <div className="kv"><span className="k">Amount</span><span className="v strong">{po.totals.grandTotal}</span></div>
                        </div>
                        <div className="printNote">Printed on {fmt(new Date(), true)}</div>
                    </div>

                    <div className="card">
                        <h3>Approvers</h3>
                        <ul className="approvers">
                            {po.approvers.map(a => (
                                <li key={a.name}>
                                    <div className="avatar" aria-hidden="true">{a.name.split(" ").map(s => s[0]).slice(0, 2).join("")}</div>
                                    <div className="meta">
                                        <div className="name">{a.name}</div>
                                        <div className="role">{a.role}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            {po.timeline.map(ev => (
                                <li key={ev.label}>
                                    <span className="dot" />
                                    <div>
                                        <strong>{ev.label}</strong>
                                        <div className="muted">{fmt(ev.when, true)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Shortcuts</h3>
                        <ul className="shortcuts">
                            <li><kbd>Ctrl</kbd> + <kbd>P</kbd> — Print</li>
                            <li><kbd>Ctrl</kbd> + <kbd>L</kbd> — Copy Link</li>
                            <li><kbd>Esc</kbd> — Close / Cancel</li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default PurchaseOrderNew;
