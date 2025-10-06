import React, { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* date utils: single source of truth for formatting */
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

/* simple non-blocking modal */
const ConfirmModal = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body">
                    <p>{message}</p>
                </div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const CustomerDetail = () => {
    const { customerId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    const now = useMemo(() => new Date(), []);
    const demoCustomers = useMemo(() => ({
        "CUST-1001": {
            id: "CUST-1001",
            firstName: "Aarav",
            lastName: "Sharma",
            email: "aarav.sharma@example.com",
            phone: "+91 98765 43210",
            altPhone: "",
            gender: "male",
            dob: "1996-10-04",
            company: "Bluewave Traders",
            website: "https://bluewave.example.com",
            status: "active",
            createdAt: "2024-12-11T10:45:18+05:30",
            updatedAt: "2025-09-28T17:21:10+05:30",
            tags: ["priority", "wholesale", "north"],
            groups: ["B2B", "Early Adopter"],
            billing: {
                line1: "221B Baker Street",
                line2: "Khan Market",
                city: "New Delhi", state: "DL", zip: "110003", country: "India",
            },
            shipping: {
                line1: "Plot 14, Industrial Area", line2: "Phase 2",
                city: "Gurugram", state: "HR", zip: "122002", country: "India",
            },
            gstin: "22ABCDE1234F1Z5",
            pan: "ABCDE1234F",
            kpis: {
                totalOrders: 18,
                ltv: "₹ 8,42,300",
                outstanding: "₹ 47,500",
                lastOrderAt: "2025-09-19T15:38:20+05:30",
            },
            recentOrders: [
                { id: "ORD-3456", date: "2025-09-19T15:38:20+05:30", amount: "₹ 62,450", status: "Packed" },
                { id: "ORD-3402", date: "2025-08-23T11:06:02+05:30", amount: "₹ 41,320", status: "Delivered" },
                { id: "ORD-3391", date: "2025-08-11T18:12:45+05:30", amount: "₹ 59,800", status: "Invoiced" },
            ],
            recentInvoices: [
                { id: "INV-2031", date: "2025-09-19T16:02:15+05:30", amount: "₹ 62,450", status: "Unpaid" },
                { id: "INV-1993", date: "2025-08-23T12:01:05+05:30", amount: "₹ 41,320", status: "Paid" },
                { id: "INV-1982", date: "2025-08-11T19:10:02+05:30", amount: "₹ 59,800", status: "Paid" },
            ],
            activity: [
                { id: "a1", title: "Invoice #INV-2031 emailed", ts: "2025-09-19T16:05:10+05:30" },
                { id: "a2", title: "Order #ORD-3456 packed", ts: "2025-09-19T15:50:00+05:30" },
                { id: "a3", title: "Profile fields updated", ts: "2025-09-01T10:00:00+05:30" },
            ],
            contacts: [
                { type: "Owner", name: "Aarav Sharma", email: "aarav.sharma@example.com", phone: "+91 98765 43210" },
                { type: "Accounts", name: "Divya Mehta", email: "accounts@bluewave.example.com", phone: "+91 99300 11223" },
            ],
            attachments: [
                { name: "GST-Certificate.pdf", size: "188 KB", url: "#", type: "pdf" },
                { name: "PO-Template.docx", size: "84 KB", url: "#", type: "docx" },
            ],
            preferences: { channel: "Email", bestTime: "2025-10-04T15:38:20+05:30", notes: "Responds quickly before 5 PM." },
        },
    }), []);

    const model = demoCustomers[customerId] || {
        id: customerId || "CUST-XXXX",
        firstName: "Unknown",
        lastName: "Customer",
        email: "unknown@example.com",
        phone: "",
        status: "prospect",
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
        tags: [],
        groups: [],
        billing: { line1: "", line2: "", city: "", state: "", zip: "", country: "" },
        shipping: { line1: "", line2: "", city: "", state: "", zip: "", country: "" },
        kpis: { totalOrders: 0, ltv: "₹ 0", outstanding: "₹ 0", lastOrderAt: now.toISOString() },
        recentOrders: [],
        recentInvoices: [],
        activity: [],
        contacts: [],
        attachments: [],
        preferences: { channel: "Email", bestTime: now.toISOString(), notes: "" },
    };

    const [showDemoModal, setShowDemoModal] = useState(false);

    const fullName = `${model.firstName || ""} ${model.lastName || ""}`.trim();
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

    useEffect(() => {
        // no side-effects; just placeholder if needed later
    }, []);

    return (
        <Styled.Page>
            {/* print CSS  */}
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
                <div className="idwrap">
                    <div className="avatar" style={{ backgroundImage: `url(/avatar.svg)` }} />
                    <div className="title">
                        <h1>{fullName || model.id}</h1>
                        <div className="meta">
                            <span className={`badge ${model.status}`}>{model.status}</span>
                            <span className="sep">•</span>
                            <span>ID: {model.id}</span>
                            <span className="sep">•</span>
                            <span>Created: {fmt(model.createdAt)}</span>
                            <span className="sep">•</span>
                            <span>Updated: {fmt(model.updatedAt, true)}</span>
                        </div>
                        <nav className="breadcrumbs" aria-label="Breadcrumb">
                            <NavLink to="/customers">Customers</NavLink>
                            <span>/</span>
                            <span className="current">{model.id}</span>
                        </nav>
                    </div>
                </div>

                <div className="actions">
                    <button className="btnGhost" onClick={() => navigate("/customers")} title="Back to list">Back</button>
                    <button className="btnPrimary" onClick={() => navigate(`/customers/${model.id}/edit`)} title="Edit">Edit</button>
                    <button className="btnDanger" onClick={() => setShowDemoModal(true)} title="Delete (demo)">Delete</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            <Styled.TopGrid>
                <div className="card kpi">
                    <div className="item">
                        <div className="label">Total Orders</div>
                        <div className="value">{model.kpis.totalOrders}</div>
                    </div>
                    <div className="item">
                        <div className="label">Lifetime Value</div>
                        <div className="value">{model.kpis.ltv}</div>
                    </div>
                    <div className="item">
                        <div className="label">Outstanding</div>
                        <div className="value">{model.kpis.outstanding}</div>
                    </div>
                    <div className="item">
                        <div className="label">Last Order</div>
                        <div className="value">{fmt(model.kpis.lastOrderAt, true)}</div>
                    </div>
                </div>

                <div className="card identity">
                    <h3>Identity</h3>
                    <div className="grid">
                        <div><div className="k">Name</div><div className="v">{fullName}</div></div>
                        <div><div className="k">Email</div><div className="v">{model.email}</div></div>
                        <div><div className="k">Phone</div><div className="v">{model.phone || "-"}</div></div>
                        <div><div className="k">Company</div><div className="v">{model.company || "-"}</div></div>
                        <div><div className="k">Website</div><div className="v">{model.website ? <a href={model.website} target="_blank" rel="noreferrer">{model.website}</a> : "-"}</div></div>
                        <div><div className="k">DOB</div><div className="v">{model.dob ? fmt(model.dob) : "-"}</div></div>
                    </div>
                    <div className="chips">
                        {(model.tags || []).map(t => <span key={t} className="chip">{t}</span>)}
                        {(model.groups || []).map(g => <span key={g} className="chip alt">{g}</span>)}
                    </div>
                </div>

                <div className="card tax">
                    <h3>Tax & Registration</h3>
                    <div className="grid">
                        <div><div className="k">GSTIN</div><div className="v">{model.gstin || "-"}</div></div>
                        <div><div className="k">PAN</div><div className="v">{model.pan || "-"}</div></div>
                    </div>
                </div>
            </Styled.TopGrid>

            <Styled.MainGrid>
                <section className="card section">
                    <h3>Addresses</h3>
                    <div className="two">
                        <div className="card sub">
                            <h4>Billing</h4>
                            <div className="addr">
                                <div>{model.billing.line1}</div>
                                <div>{model.billing.line2}</div>
                                <div>{[model.billing.city, model.billing.zip].filter(Boolean).join(" ")}</div>
                                <div>{[model.billing.state, model.billing.country].filter(Boolean).join(", ")}</div>
                            </div>
                        </div>
                        <div className="card sub">
                            <h4>Shipping</h4>
                            <div className="addr">
                                <div>{model.shipping.line1}</div>
                                <div>{model.shipping.line2}</div>
                                <div>{[model.shipping.city, model.shipping.zip].filter(Boolean).join(" ")}</div>
                                <div>{[model.shipping.state, model.shipping.country].filter(Boolean).join(", ")}</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card section">
                    <h3>Contacts</h3>
                    <div className="contactList">
                        {model.contacts.length === 0 ? <div className="empty">No additional contacts.</div> : null}
                        {model.contacts.map((c, i) => (
                            <div className="contact" key={i}>
                                <div className="role">{c.type}</div>
                                <div className="name">{c.name}</div>
                                <div className="email">{c.email}</div>
                                <div className="phone">{c.phone || "-"}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="card section">
                    <h3>Preferences</h3>
                    <div className="grid">
                        <div><div className="k">Channel</div><div className="v">{model.preferences.channel}</div></div>
                        <div><div className="k">Best time</div><div className="v">{fmt(model.preferences.bestTime, true)} (local)</div></div>
                    </div>
                    <div className="note">{model.preferences.notes}</div>
                </section>

                <section className="card section" id="search-print-area" ref={printRef}>
                    <h3>Print Summary</h3>
                    <div className="summary">
                        <div className="line"><span className="k">Customer</span><span className="v">{fullName} ({model.id})</span></div>
                        <div className="line"><span className="k">Status</span><span className="v">{model.status}</span></div>
                        <div className="line"><span className="k">Email</span><span className="v">{model.email}</span></div>
                        <div className="line"><span className="k">Phone</span><span className="v">{model.phone || "-"}</span></div>
                        <div className="line"><span className="k">Address</span><span className="v">
                            {[model.billing.line1, model.billing.line2, model.billing.city, model.billing.zip, model.billing.state, model.billing.country]
                                .filter(Boolean).join(", ")}
                        </span></div>
                        <div className="line"><span className="k">Created</span><span className="v">{fmt(model.createdAt, true)}</span></div>
                    </div>
                </section>

                <section className="card section stretch">
                    <div className="headerRow">
                        <h3>Recent Orders</h3>
                        <NavLink to="/orders" className="btnGhost mini">View all</NavLink>
                    </div>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {model.recentOrders.length === 0 ? (
                                    <tr><td colSpan={5}><div className="empty">No orders yet.</div></td></tr>
                                ) : model.recentOrders.map((o) => (
                                    <tr key={o.id}>
                                        <td><NavLink to={`/orders/${o.id}`}>{o.id}</NavLink></td>
                                        <td>{fmt(o.date, true)}</td>
                                        <td>{o.amount}</td>
                                        <td><span className="badge pill">{o.status}</span></td>
                                        <td className="right"><NavLink to={`/orders/${o.id}/print`} className="link">Print</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="card section stretch">
                    <div className="headerRow">
                        <h3>Recent Invoices</h3>
                        <NavLink to="/invoices" className="btnGhost mini">View all</NavLink>
                    </div>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Invoice</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {model.recentInvoices.length === 0 ? (
                                    <tr><td colSpan={5}><div className="empty">No invoices yet.</div></td></tr>
                                ) : model.recentInvoices.map((o) => (
                                    <tr key={o.id}>
                                        <td><NavLink to={`/invoices/${o.id}`}>{o.id}</NavLink></td>
                                        <td>{fmt(o.date, true)}</td>
                                        <td>{o.amount}</td>
                                        <td><span className="badge pill">{o.status}</span></td>
                                        <td className="right"><NavLink to={`/invoices/${o.id}/print`} className="link">Print</NavLink></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="card section">
                    <h3>Attachments</h3>
                    <div className="files">
                        {model.attachments.length === 0 ? <div className="empty">No files attached.</div> : null}
                        {model.attachments.map((f, i) => (
                            <a key={i} href={f.url} download className="file">
                                <div className={`icon ${f.type}`} />
                                <div className="meta">
                                    <div className="name">{f.name}</div>
                                    <div className="muted">{f.size}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <aside className="side">
                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            {model.activity.length === 0 ? <li className="muted">No activity yet.</li> : null}
                            {model.activity.map(a => (
                                <li key={a.id}>
                                    <span className="dot" />
                                    <div>
                                        <div className="title">{a.title}</div>
                                        <div className="time">{fmt(a.ts, true)}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to={`/customers/${model.id}/edit`}>Edit</NavLink></li>
                            <li><NavLink to="/orders">Orders</NavLink></li>
                            <li><NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/shipments">Shipments</NavLink></li>
                            <li><NavLink to="/reports/customers">Customer Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Contact Window</h3>
                        <div className="grid">
                            <div>
                                <div className="k">Best time</div>
                                <div className="v">{onlyTime(model.preferences.bestTime)}</div>
                            </div>
                            <div>
                                <div className="k">Preferred</div>
                                <div className="v">{model.preferences.channel}</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </Styled.MainGrid>

            <ConfirmModal
                open={showDemoModal}
                title="Action unavailable"
                message="This environment is a display-only demo. Destructive actions are disabled."
                onClose={() => setShowDemoModal(false)}
            />
        </Styled.Page>
    );
};

export default CustomerDetail;
