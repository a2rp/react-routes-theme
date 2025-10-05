import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

/* ---------------------------
   Date format helpers
---------------------------- */
const pad = (n) => String(n).padStart(2, "0");
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmt = (d, withTime) => {
    const x = d instanceof Date ? d : new Date(d);
    const base = `${DAYS[x.getDay()]} ${MONS[x.getMonth()]} ${pad(x.getDate())} ${x.getFullYear()}`;
    return withTime ? `${base} ${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs` : base;
};
const onlyTime = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    return `${pad(x.getHours())}:${pad(x.getMinutes())}:${pad(x.getSeconds())}hrs`;
};

/* ---------------------------
   Modals (custom, no alerts)
---------------------------- */
const ConfirmDialog = ({ open, title, message, confirmText = "Confirm", onConfirm, onClose, tone = "primary" }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Close</button>
                    <button className={tone === "danger" ? "btnDanger" : "btnPrimary"} onClick={onConfirm}>{confirmText}</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const DemoNotice = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>Demo mode</h4></header>
                <div className="body">
                    <p>This is a display-only preview. Create, update, and delete actions are disabled.</p>
                </div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>Got it</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

/* ---------------------------
   Page
---------------------------- */
const CustomerEdit = () => {
    const { customerId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);
    const now = useMemo(() => new Date(), []);
    const [showDemo, setShowDemo] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [banner, setBanner] = useState("");

    // seeded display record (no storage, no calculations)
    const seeded = useMemo(() => ({
        id: customerId || "CUST-1001",
        code: customerId || "CUST-1001",
        firstName: "Aarav",
        lastName: "Sharma",
        email: "aarav.sharma@example.com",
        phone: "+91 98765 43210",
        altPhone: "+91 98111 22222",
        status: "active",
        gstin: "22ABCDE1234F1Z5",
        pan: "ABCDE1234F",
        company: "Bluewave Traders",
        website: "https://bluewave.example.com",
        tags: ["priority", "wholesale", "north"],
        createdAt: "2025-10-04T09:18:20+05:30",
        updatedAt: "2025-10-04T14:28:52+05:30",
        contactWindow: { best: onlyTime(now), preferred: "Email" },
        address: {
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
        },
        notes: "Bulk order every last week of the month. Email preferred. Courier hard copy of invoice.",
    }), [customerId, now]);

    const [model, setModel] = useState(seeded);
    const [avatarUrl, setAvatarUrl] = useState("");

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3500);
        return () => clearTimeout(t);
    }, [banner]);

    const onInput = (e) => {
        const { name, value } = e.target;
        setModel(m => ({ ...m, [name]: value }));
    };
    const onAddr = (scope, e) => {
        const { name, value } = e.target;
        setModel(m => ({ ...m, [scope]: { ...m[scope], [name]: value } }));
    };

    const onUpload = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const url = URL.createObjectURL(f);
        setAvatarUrl(url);
    };
    const clearUpload = () => setAvatarUrl("");

    const onDisabledAction = () => setShowDemo(true);

    const onCancel = () => {
        navigate(model?.id ? `/customers/${model.id}` : "/customers");
    };

    const onDelete = () => setShowDelete(true);
    const confirmDelete = () => {
        setShowDelete(false);
        setShowDemo(true); // demo-only
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const fullName = `${model.firstName || ""} ${model.lastName || ""}`.trim();

    return (
        <Styled.Page>
            {/* precise print CSS as required */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left:0; top:0; width:100%;
          }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>Edit Customer</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/customers">Customers</NavLink>
                        <span>/</span>
                        <NavLink to={`/customers/${model.id}`}>{model.id}</NavLink>
                        <span>/</span>
                        <span className="current">Edit</span>
                    </nav>
                    <div className="meta">
                        <span>Created: {fmt(model.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmt(model.updatedAt, true)}</span>
                    </div>
                </div>

                <div className="right actions">
                    <button className="btnGhost" onClick={onCancel} title="Back to details">Cancel</button>
                    <button className="btnPrimary" onClick={onDisabledAction} title="Save changes (demo disabled)">Save</button>
                    <button className="btnPrimary" onClick={onDisabledAction} title="Save and open details (demo disabled)">Save &amp; View</button>
                    <button className="btnDanger" onClick={onDelete} title="Delete customer">Delete</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* Main column */}
                <section className="col main card">
                    <div className="row head">
                        <div className="avatar">
                            <div className="pic" style={{ backgroundImage: `url(${avatarUrl || "/avatar.svg"})` }} />
                            <div className="controls">
                                <label className="btnGhost small">
                                    Upload Photo
                                    <input type="file" accept="image/*" onChange={onUpload} hidden />
                                </label>
                                {avatarUrl ? <button className="btnGhost small" onClick={clearUpload}>Remove</button> : null}
                                <a className="btnGhost small" href={avatarUrl || "/avatar.svg"} download>Download</a>
                            </div>
                        </div>

                        <div className="idblocks">
                            <div className="card mini">
                                <div className="k">Customer</div>
                                <div className="v">{fullName || model.id}</div>
                            </div>
                            <div className="card mini">
                                <div className="k">Code</div>
                                <div className="v">{model.code}</div>
                            </div>
                            <div className="card mini">
                                <div className="k">Status</div>
                                <div className="v badge">{model.status}</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="fields">
                            <div className="two">
                                <div>
                                    <label>First name</label>
                                    <input name="firstName" value={model.firstName} onChange={onInput} placeholder="First name" />
                                </div>
                                <div>
                                    <label>Last name</label>
                                    <input name="lastName" value={model.lastName} onChange={onInput} placeholder="Last name" />
                                </div>
                            </div>

                            <div className="three">
                                <div>
                                    <label>Email</label>
                                    <input name="email" type="email" value={model.email} onChange={onInput} placeholder="name@example.com" />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <input name="phone" value={model.phone} onChange={onInput} placeholder="+91 ..." />
                                </div>
                                <div>
                                    <label>Alt Phone</label>
                                    <input name="altPhone" value={model.altPhone} onChange={onInput} placeholder="+91 ..." />
                                </div>
                            </div>

                            <div className="three">
                                <div>
                                    <label>Company</label>
                                    <input name="company" value={model.company} onChange={onInput} placeholder="Company" />
                                </div>
                                <div>
                                    <label>Website</label>
                                    <input name="website" value={model.website} onChange={onInput} placeholder="https://..." />
                                </div>
                                <div>
                                    <label>Status</label>
                                    <select name="status" value={model.status} onChange={onInput}>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="prospect">Prospect</option>
                                    </select>
                                </div>
                            </div>

                            <div className="three">
                                <div>
                                    <label>GSTIN</label>
                                    <input name="gstin" value={model.gstin} onChange={onInput} placeholder="GSTIN" />
                                </div>
                                <div>
                                    <label>PAN</label>
                                    <input name="pan" value={model.pan} onChange={onInput} placeholder="PAN" />
                                </div>
                                <div>
                                    <label>Customer Code</label>
                                    <input name="code" value={model.code} onChange={onInput} placeholder="Customer code" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row twoCol">
                        <div className="card sub">
                            <h3>Billing Address</h3>
                            <div className="addr">
                                <input name="line1" value={model.address.line1} onChange={(e) => onAddr("address", e)} placeholder="Line 1" />
                                <input name="line2" value={model.address.line2} onChange={(e) => onAddr("address", e)} placeholder="Line 2" />
                                <div className="three">
                                    <input name="city" value={model.address.city} onChange={(e) => onAddr("address", e)} placeholder="City" />
                                    <input name="state" value={model.address.state} onChange={(e) => onAddr("address", e)} placeholder="State" />
                                    <input name="zip" value={model.address.zip} onChange={(e) => onAddr("address", e)} placeholder="PIN" />
                                </div>
                                <input name="country" value={model.address.country} onChange={(e) => onAddr("address", e)} placeholder="Country" />
                            </div>
                        </div>

                        <div className="card sub">
                            <h3>Shipping Address</h3>
                            <div className="addr">
                                <input name="line1" value={model.shipping.line1} onChange={(e) => onAddr("shipping", e)} placeholder="Line 1" />
                                <input name="line2" value={model.shipping.line2} onChange={(e) => onAddr("shipping", e)} placeholder="Line 2" />
                                <div className="three">
                                    <input name="city" value={model.shipping.city} onChange={(e) => onAddr("shipping", e)} placeholder="City" />
                                    <input name="state" value={model.shipping.state} onChange={(e) => onAddr("shipping", e)} placeholder="State" />
                                    <input name="zip" value={model.shipping.zip} onChange={(e) => onAddr("shipping", e)} placeholder="PIN" />
                                </div>
                                <input name="country" value={model.shipping.country} onChange={(e) => onAddr("shipping", e)} placeholder="Country" />
                            </div>
                        </div>
                    </div>

                    <div className="row twoCol">
                        <div className="card sub">
                            <h3>Tags</h3>
                            <div className="chips">
                                {model.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                            </div>
                            <p className="hint">Tags help quick filters and segments.</p>
                        </div>

                        <div className="card sub">
                            <h3>Notes</h3>
                            <textarea rows={6} value={model.notes} onChange={(e) => setModel(m => ({ ...m, notes: e.target.value }))} placeholder="Internal notes…" />
                            <div className="mini"><span>Last edit: {fmt(now, true)}</span></div>
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="col side">
                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to={`/customers/${model.id}`}>View Details</NavLink></li>
                            <li><NavLink to="/orders">Orders</NavLink></li>
                            <li><NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/receipts">Receipts</NavLink></li>
                            <li><NavLink to="/reports/customers">Customer Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li><span className="dot" /><div><strong>Profile updated</strong><div className="muted">{fmt(now, true)}</div></div></li>
                            <li><span className="dot" /><div><strong>Invoice #INV-2031 emailed</strong><div className="muted">{fmt(now, true)}</div></div></li>
                            <li><span className="dot" /><div><strong>Order #ORD-3456 created</strong><div className="muted">{fmt(now)}</div></div></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Contact Window</h3>
                        <div className="grid">
                            <div><div className="label">Best time</div><div>{onlyTime(now)}</div></div>
                            <div><div className="label">Preferred</div><div>{model.contactWindow.preferred}</div></div>
                        </div>
                    </div>

                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Customer</span><span className="v">{fullName} ({model.id})</span></div>
                            <div className="line"><span className="k">Status</span><span className="v">{model.status}</span></div>
                            <div className="line"><span className="k">Email</span><span className="v">{model.email}</span></div>
                            <div className="line"><span className="k">Phone</span><span className="v">{model.phone}</span></div>
                            <div className="line"><span className="k">Address</span><span className="v">
                                {model.address.line1}, {model.address.line2}, {model.address.city} {model.address.zip}, {model.address.state}, {model.address.country}
                            </span></div>
                            <div className="line"><span className="k">Created</span><span className="v">{fmt(model.createdAt, true)}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <DemoNotice open={showDemo} onClose={() => setShowDemo(false)} />
            <ConfirmDialog
                open={showDelete}
                title="Delete customer?"
                message={`This action cannot be undone. `}
                tone="danger"
                confirmText="Delete"
                onConfirm={confirmDelete}
                onClose={() => setShowDelete(false)}
            />
        </Styled.Page>
    );
};

export default CustomerEdit;
