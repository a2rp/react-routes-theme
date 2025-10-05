import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";
import { FiPhone, FiMail, FiGlobe, FiMapPin, FiPrinter, FiEdit3, FiFileText, FiExternalLink } from "react-icons/fi";

// date utils (consistent across app)
const fmt = (d, withTime) => {
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

const DEMO_MODE = true; // display-only theme

const VendorDetail = () => {
    const { vendorId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);
    const [showDisabledInfo, setShowDisabledInfo] = useState(false);

    // mock vendor model (display-only)
    const model = useMemo(() => ({
        id: vendorId || "VEND-2027",
        code: vendorId || "VEND-2027",
        legalName: "Medisource Lifecare Pvt. Ltd.",
        tradeName: "Medisource",
        status: "active", // active | on-hold | inactive
        rating: 4.6,
        tags: ["primary", "pharma", "iso-9001", "priority"],
        website: "https://medisource.example.com",
        email: "account@medisource.com",
        phone: "+91 98765 22010",
        altPhone: "+91 98765 22011",
        createdAt: "2025-04-09T10:30:00+05:30",
        updatedAt: "2025-10-04T15:20:12+05:30",

        paymentTerms: "Net 30",
        creditLimit: "₹ 25,00,000",
        defaultCurrency: "INR",
        moq: "50 units",
        leadTimeDays: 4,
        category: "Pharmaceuticals & Consumables",

        tax: {
            gstin: "07ABCDE1234F1Z9",
            pan: "ABCDE1234F",
            tan: "DELX01234A",
        },

        bank: {
            accountName: "Medisource Lifecare Pvt. Ltd.",
            maskedAccount: "XXXXXX2451",
            ifsc: "HDFC0002199",
            bankName: "HDFC Bank",
            branch: "Saket, New Delhi",
            upi: "medisource@hdfcbank",
            paymentWindow: "09:00–18:00 (Mon–Sat)",
        },

        billingAddress: {
            line1: "414, 4th Floor, Horizon Plaza",
            line2: "Saket District Centre",
            city: "New Delhi",
            state: "DL",
            zip: "110017",
            country: "India",
        },
        shippingAddress: {
            line1: "Plot 12, Sector 35",
            line2: "Udyog Vihar Phase IV",
            city: "Gurugram",
            state: "HR",
            zip: "122016",
            country: "India",
        },

        contacts: [
            { id: "C-01", name: "Neha Kapoor", role: "Key Account Manager", email: "neha.kapoor@medisource.com", phone: "+91 98990 11122", bestTime: "10:00–17:00" },
            { id: "C-02", name: "Rahul Menon", role: "Finance", email: "rahul.menon@medisource.com", phone: "+91 98990 22233", bestTime: "11:00–16:00" },
            { id: "C-03", name: "Priya Desai", role: "Dispatch", email: "priya.desai@medisource.com", phone: "+91 98990 33344", bestTime: "09:30–18:00" },
        ],

        // display-only scorecard (pre-computed)
        metrics: {
            onTimeDelivery: "96%",
            fillRate: "98%",
            avgLeadTime: "4 days",
            defectRate: "0.7%",
            returns: "2",
            activePOs: "3",
            lastPO: { id: "PO-4021", date: "2025-09-28T12:30:00+05:30" },
        },

        // document pointers
        related: {
            pos: [
                { id: "PO-4021", date: "2025-09-28T12:30:00+05:30", value: "₹ 3,45,000", status: "Open" },
                { id: "PO-3987", date: "2025-09-12T16:45:00+05:30", value: "₹ 1,26,500", status: "Closed" },
                { id: "PO-3902", date: "2025-08-22T11:15:00+05:30", value: "₹ 2,10,000", status: "Closed" },
            ],
            bills: [
                { id: "BILL-2099", date: "2025-09-30T10:00:00+05:30", value: "₹ 1,26,500", status: "Paid" },
                { id: "BILL-2051", date: "2025-09-05T14:05:00+05:30", value: "₹ 2,10,000", status: "Paid" },
            ],
            shipments: [
                { id: "SHP-1880", date: "2025-09-29T09:50:00+05:30", carrier: "BlueDart", status: "In Transit" },
            ],
        },

        notes: "Priority vendor for antibiotics & saline. Request shipment pictures for batches near expiry. Send e-way bill copies with every shipment.",
    }), [vendorId]);

    const breadcrumbs = (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <NavLink to="/vendors">Vendors</NavLink>
            <span>/</span>
            <span className="current">{model.code}</span>
        </nav>
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

    return (
        <Styled.Page>
            {/* print CSS (exact as required) */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="identity">
                    <div className="avatar" aria-hidden="true">{model.tradeName?.[0] || "V"}</div>
                    <div className="titles">
                        <h1>{model.tradeName} <span className={`badge ${model.status}`}>{model.status}</span></h1>
                        {breadcrumbs}
                        <div className="meta">
                            <span>Code: {model.code}</span>
                            <span>•</span>
                            <span>Created: {fmt(model.createdAt)}</span>
                            <span>•</span>
                            <span>Updated: {fmt(model.updatedAt, true)}</span>
                        </div>
                    </div>
                </div>

                <div className="actions">
                    <button className="btnGhost" onClick={() => navigate("/vendors")}><FiExternalLink /> Back to Vendors</button>
                    <NavLink to={`/vendors/${model.id}/edit`} className={`btnPrimary ${DEMO_MODE ? "isDemo" : ""}`} onClick={e => DEMO_MODE && (e.preventDefault(), setShowDisabledInfo(true))}>
                        <FiEdit3 /> Edit Vendor
                    </NavLink>
                    <NavLink to={`/purchase-orders/new?vendor=${encodeURIComponent(model.id)}`} className={`btnPrimary ${DEMO_MODE ? "isDemo" : ""}`} onClick={e => DEMO_MODE && (e.preventDefault(), setShowDisabledInfo(true))}>
                        <FiFileText /> New PO
                    </NavLink>
                    <button className="btnGhost" onClick={printSection}><FiPrinter /> Print</button>
                </div>
            </Styled.Header>

            {showDisabledInfo && (
                <Styled.InfoBar role="status" aria-live="polite" onAnimationEnd={() => { }}>
                    Demo mode – actions are disabled.
                    <button onClick={() => setShowDisabledInfo(false)} className="close">×</button>
                </Styled.InfoBar>
            )}

            <Styled.Grid>
                {/* Left: overview, addresses, contacts */}
                <section className="left">
                    {/* scorecards */}
                    <div className="card scorecards">
                        <div className="score">
                            <div className="k">On-time Delivery</div>
                            <div className="v">{model.metrics.onTimeDelivery}</div>
                            <div className="bar"><span style={{ width: model.metrics.onTimeDelivery }} /></div>
                        </div>
                        <div className="score">
                            <div className="k">Fill Rate</div>
                            <div className="v">{model.metrics.fillRate}</div>
                            <div className="bar"><span style={{ width: model.metrics.fillRate }} /></div>
                        </div>
                        <div className="score">
                            <div className="k">Avg Lead Time</div>
                            <div className="v">{model.metrics.avgLeadTime}</div>
                            <div className="sub">Target: 4–6 days</div>
                        </div>
                        <div className="score">
                            <div className="k">Defect Rate</div>
                            <div className="v">{model.metrics.defectRate}</div>
                            <div className="sub">QC flagged last 90 days</div>
                        </div>
                        <div className="score">
                            <div className="k">Active POs</div>
                            <div className="v">{model.metrics.activePOs}</div>
                            <div className="sub">Last PO: <NavLink to={`/purchase-orders/${model.metrics.lastPO.id}`}>{model.metrics.lastPO.id}</NavLink> on {fmt(model.metrics.lastPO.date)}</div>
                        </div>
                        <div className="score">
                            <div className="k">Rating</div>
                            <div className="v">{model.rating} / 5</div>
                            <div className="sub">Internal scorecard</div>
                        </div>
                    </div>

                    {/* quick info */}
                    <div className="card info">
                        <div className="row">
                            <div>
                                <div className="label">Category</div>
                                <div className="value">{model.category}</div>
                            </div>
                            <div>
                                <div className="label">Payment Terms</div>
                                <div className="value">{model.paymentTerms}</div>
                            </div>
                            <div>
                                <div className="label">Credit Limit</div>
                                <div className="value">{model.creditLimit}</div>
                            </div>
                            <div>
                                <div className="label">Default Currency</div>
                                <div className="value">{model.defaultCurrency}</div>
                            </div>
                            <div>
                                <div className="label">MOQ</div>
                                <div className="value">{model.moq}</div>
                            </div>
                            <div>
                                <div className="label">Lead Time</div>
                                <div className="value">{model.leadTimeDays} days</div>
                            </div>
                        </div>

                        <div className="tags">
                            {model.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                        </div>
                    </div>

                    {/* addresses */}
                    <div className="card duo">
                        <div className="pane">
                            <h3><FiMapPin /> Billing Address</h3>
                            <address>
                                {model.billingAddress.line1}<br />
                                {model.billingAddress.line2}<br />
                                {model.billingAddress.city} {model.billingAddress.zip}<br />
                                {model.billingAddress.state}, {model.billingAddress.country}
                            </address>
                        </div>
                        <div className="pane">
                            <h3><FiMapPin /> Shipping Address</h3>
                            <address>
                                {model.shippingAddress.line1}<br />
                                {model.shippingAddress.line2}<br />
                                {model.shippingAddress.city} {model.shippingAddress.zip}<br />
                                {model.shippingAddress.state}, {model.shippingAddress.country}
                            </address>
                        </div>
                    </div>

                    {/* contacts */}
                    <div className="card contacts">
                        <h3>Contacts</h3>
                        <div className="list">
                            {model.contacts.map(c => (
                                <div className="contact" key={c.id}>
                                    <div className="avatar">{c.name[0]}</div>
                                    <div className="meta">
                                        <div className="name">{c.name}</div>
                                        <div className="role">{c.role}</div>
                                        <div className="grid">
                                            <a href={`mailto:${c.email}`} className="link"><FiMail /> {c.email}</a>
                                            <a href={`tel:${c.phone}`} className="link"><FiPhone /> {c.phone}</a>
                                            <div className="best">Best time: {c.bestTime}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* notes */}
                    <div className="card notes">
                        <h3>Notes</h3>
                        <p>{model.notes}</p>
                        <div className="muted">Last update: {fmt(model.updatedAt, true)}</div>
                    </div>
                </section>

                {/* Right: compliance, bank, related docs, print summary */}
                <aside className="right">
                    <div className="card web-contact">
                        <h3>Contact & Web</h3>
                        <div className="grid">
                            <a className="line" href={`mailto:${model.email}`}><FiMail /> {model.email}</a>
                            <a className="line" href={`tel:${model.phone}`}><FiPhone /> {model.phone}</a>
                            <a className="line" href={model.website} target="_blank" rel="noreferrer"><FiGlobe /> {model.website.replace(/^https?:\/\//, "")}</a>
                        </div>
                    </div>

                    <div className="card compliance">
                        <h3>Compliance</h3>
                        <div className="kv">
                            <div className="k">GSTIN</div><div className="v">{model.tax.gstin}</div>
                            <div className="k">PAN</div><div className="v">{model.tax.pan}</div>
                            <div className="k">TAN</div><div className="v">{model.tax.tan}</div>
                        </div>
                    </div>

                    <div className="card banking">
                        <h3>Banking</h3>
                        <div className="kv">
                            <div className="k">Account Name</div><div className="v">{model.bank.accountName}</div>
                            <div className="k">Account No.</div><div className="v">{model.bank.maskedAccount}</div>
                            <div className="k">IFSC</div><div className="v">{model.bank.ifsc}</div>
                            <div className="k">Bank</div><div className="v">{model.bank.bankName}, {model.bank.branch}</div>
                            <div className="k">UPI</div><div className="v">{model.bank.upi}</div>
                            <div className="k">Payment Window</div><div className="v">{model.bank.paymentWindow}</div>
                        </div>
                    </div>

                    <div className="card related">
                        <h3>Related</h3>
                        <div className="subgrid">
                            <div>
                                <div className="subhead">Purchase Orders</div>
                                <ul className="list">
                                    {model.related.pos.map(po => (
                                        <li key={po.id}>
                                            <NavLink to={`/purchase-orders/${po.id}`}>{po.id}</NavLink>
                                            <span className="muted"> • {fmt(po.date)}</span>
                                            <span className="pill">{po.status}</span>
                                            <span className="value">{po.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="subhead">Bills</div>
                                <ul className="list">
                                    {model.related.bills.map(b => (
                                        <li key={b.id}>
                                            <NavLink to={`/purchase-orders/${b.id}`}>{b.id}</NavLink>
                                            <span className="muted"> • {fmt(b.date)}</span>
                                            <span className="pill">{b.status}</span>
                                            <span className="value">{b.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="subhead">Shipments</div>
                                <ul className="list">
                                    {model.related.shipments.map(s => (
                                        <li key={s.id}>
                                            <NavLink to={`/shipments/${s.id}`}>{s.id}</NavLink>
                                            <span className="muted"> • {fmt(s.date)}</span>
                                            <span className="pill">{s.status}</span>
                                            <span className="value">{s.carrier}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* printable summary */}
                    <div className="card print" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="kv">
                            <div className="k">Vendor</div><div className="v">{model.legalName} ({model.code})</div>
                            <div className="k">Status</div><div className="v">{model.status}</div>
                            <div className="k">Category</div><div className="v">{model.category}</div>
                            <div className="k">Email</div><div className="v">{model.email}</div>
                            <div className="k">Phone</div><div className="v">{model.phone}</div>
                            <div className="k">Payment Terms</div><div className="v">{model.paymentTerms}</div>
                            <div className="k">Last PO</div><div className="v">{model.metrics.lastPO.id} on {fmt(model.metrics.lastPO.date, true)}</div>
                            <div className="k">Created</div><div className="v">{fmt(model.createdAt, true)}</div>
                            <div className="k">Updated</div><div className="v">{fmt(model.updatedAt, true)}</div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default VendorDetail;
