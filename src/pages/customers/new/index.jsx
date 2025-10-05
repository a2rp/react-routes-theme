import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

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

const CustomerNew = () => {
    const navigate = useNavigate();
    const now = useMemo(() => new Date(), []);
    const printRef = useRef(null);
    const fileInputRef = useRef(null);

    const [model, setModel] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        altPhone: "",
        gender: "",
        dob: "",
        company: "",
        website: "",
        status: "active",
        gstin: "",
        pan: "",
        address: { line1: "", line2: "", city: "", state: "", zip: "", country: "India" },
        shipping: { line1: "", line2: "", city: "", state: "", zip: "", country: "India" },
        tags: ["prospect"],
        notes: "",
        avatar: "",
    });
    const [preview, setPreview] = useState("");

    const fullName = `${model.firstName || ""} ${model.lastName || ""}`.trim() || "New Customer";
    const codeHint = "Will be assigned on save";

    const onChange = (e) => {
        const { name, value } = e.target;
        setModel((m) => ({ ...m, [name]: value }));
    };
    const onAddrChange = (scope, e) => {
        const { name, value } = e.target;
        setModel((m) => ({ ...m, [scope]: { ...m[scope], [name]: value } }));
    };

    const onUpload = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const url = URL.createObjectURL(f);
        setPreview(url);
    };
    const clearPhoto = () => {
        setPreview("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const addTag = (e) => {
        if (e.key !== "Enter") return;
        const t = e.target.value.trim();
        if (!t) return;
        setModel((m) => (m.tags.includes(t) ? m : { ...m, tags: [...m.tags, t] }));
        e.target.value = "";
    };
    const removeTag = (t) => {
        setModel((m) => ({ ...m, tags: m.tags.filter((x) => x !== t) }));
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

    const cancel = () => navigate("/customers");

    return (
        <Styled.Page className="container">
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}</style>

            <Styled.Header className="card">
                <div className="left">
                    <h1>New Customer</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/customers">Customers</NavLink>
                        <span>/</span>
                        <span className="current">New</span>
                    </nav>
                    <div className="meta">
                        <span>Draft started: {fmt(now, true)}</span>
                        <span>•</span>
                        <span>Best time to contact: {onlyTime(now)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={cancel} title="Back to list">Cancel</button>
                    <button className="btnPrimary" disabled aria-disabled="true" title="Demo mode">Save Draft</button>
                    <button className="btnPrimary" disabled aria-disabled="true" title="Demo mode">Create Customer</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            <Styled.InfoBanner role="status" aria-live="polite">
                Display-only demo. Actions like “Create” and “Save” are disabled.
            </Styled.InfoBanner>

            <Styled.Grid>
                {/* Main form */}
                <section className="col main card">
                    <div className="row head">
                        <div className="avatar">
                            <div className="pic" style={{ backgroundImage: `url(${preview || "/avatar.svg"})` }} />
                            <div className="controls">
                                <label className="btnGhost small">
                                    Upload Photo
                                    <input ref={fileInputRef} type="file" accept="image/*" onChange={onUpload} hidden />
                                </label>
                                {preview ? <button className="btnGhost small" onClick={clearPhoto}>Remove</button> : null}
                                <a className="btnGhost small" href={preview || "/avatar.svg"} download>Download</a>
                            </div>
                        </div>

                        <div className="fields">
                            <div className="two">
                                <div>
                                    <label>First name</label>
                                    <input name="firstName" value={model.firstName} onChange={onChange} placeholder="First name" />
                                </div>
                                <div>
                                    <label>Last name</label>
                                    <input name="lastName" value={model.lastName} onChange={onChange} placeholder="Last name" />
                                </div>
                            </div>

                            <div className="two">
                                <div>
                                    <label>Email</label>
                                    <input name="email" type="email" value={model.email} onChange={onChange} placeholder="name@example.com" />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <input name="phone" value={model.phone} onChange={onChange} placeholder="+91 ..." />
                                </div>
                            </div>

                            <div className="three">
                                <div>
                                    <label>Alt Phone</label>
                                    <input name="altPhone" value={model.altPhone} onChange={onChange} placeholder="+91 ..." />
                                </div>
                                <div>
                                    <label>Gender</label>
                                    <select name="gender" value={model.gender} onChange={onChange}>
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="na">N/A</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Date of Birth</label>
                                    <input name="dob" type="date" value={model.dob} onChange={onChange} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="fields">
                            <div className="three">
                                <div>
                                    <label>Company</label>
                                    <input name="company" value={model.company} onChange={onChange} placeholder="Company name" />
                                </div>
                                <div>
                                    <label>Website</label>
                                    <input name="website" value={model.website} onChange={onChange} placeholder="https://..." />
                                </div>
                                <div>
                                    <label>Status</label>
                                    <select name="status" value={model.status} onChange={onChange}>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="prospect">Prospect</option>
                                    </select>
                                </div>
                            </div>

                            <div className="three">
                                <div>
                                    <label>GSTIN</label>
                                    <input name="gstin" value={model.gstin} onChange={onChange} placeholder="GSTIN" />
                                </div>
                                <div>
                                    <label>PAN</label>
                                    <input name="pan" value={model.pan} onChange={onChange} placeholder="PAN" />
                                </div>
                                <div>
                                    <label>Customer Code</label>
                                    <input value={codeHint} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row twoCols">
                        <div className="card sub">
                            <h3>Billing Address</h3>
                            <div className="addr">
                                <input name="line1" value={model.address.line1} onChange={(e) => onAddrChange("address", e)} placeholder="Line 1" />
                                <input name="line2" value={model.address.line2} onChange={(e) => onAddrChange("address", e)} placeholder="Line 2" />
                                <div className="three">
                                    <input name="city" value={model.address.city} onChange={(e) => onAddrChange("address", e)} placeholder="City" />
                                    <input name="state" value={model.address.state} onChange={(e) => onAddrChange("address", e)} placeholder="State" />
                                    <input name="zip" value={model.address.zip} onChange={(e) => onAddrChange("address", e)} placeholder="PIN" />
                                </div>
                                <input name="country" value={model.address.country} onChange={(e) => onAddrChange("address", e)} placeholder="Country" />
                            </div>
                        </div>

                        <div className="card sub">
                            <h3>Shipping Address</h3>
                            <div className="addr">
                                <input name="line1" value={model.shipping.line1} onChange={(e) => onAddrChange("shipping", e)} placeholder="Line 1" />
                                <input name="line2" value={model.shipping.line2} onChange={(e) => onAddrChange("shipping", e)} placeholder="Line 2" />
                                <div className="three">
                                    <input name="city" value={model.shipping.city} onChange={(e) => onAddrChange("shipping", e)} placeholder="City" />
                                    <input name="state" value={model.shipping.state} onChange={(e) => onAddrChange("shipping", e)} placeholder="State" />
                                    <input name="zip" value={model.shipping.zip} onChange={(e) => onAddrChange("shipping", e)} placeholder="PIN" />
                                </div>
                                <input name="country" value={model.shipping.country} onChange={(e) => onAddrChange("shipping", e)} placeholder="Country" />
                            </div>
                        </div>
                    </div>

                    <div className="row twoCols">
                        <div className="card sub">
                            <h3>Tags</h3>
                            <div className="chips">
                                {model.tags.map((t) => (
                                    <span className="chip" key={t} role="button" title="Remove" onClick={() => removeTag(t)}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <input className="tagInput" placeholder="Add tag and press Enter" onKeyDown={addTag} />
                            <p className="hint">Use tags for quick filters and segments.</p>
                        </div>

                        <div className="card sub">
                            <h3>Notes</h3>
                            <textarea rows={6} value={model.notes} onChange={(e) => setModel((m) => ({ ...m, notes: e.target.value }))} placeholder="Internal notes…" />
                            <div className="mini">
                                <span>Last edit: {fmt(now, true)}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sidebar */}
                <aside className="col side">
                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/customers">All Customers</NavLink></li>
                            <li><NavLink to="/orders">Orders</NavLink></li>
                            <li><NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/reports/customers">Customer Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Preview</h3>
                        <div className="preview">
                            <div className="row2">
                                <div>
                                    <div className="label">Name</div>
                                    <div className="value">{fullName}</div>
                                </div>
                                <div>
                                    <div className="label">Status</div>
                                    <div className="value badge">{model.status}</div>
                                </div>
                            </div>
                            <div className="row2">
                                <div>
                                    <div className="label">Email</div>
                                    <div className="value">{model.email || "-"}</div>
                                </div>
                                <div>
                                    <div className="label">Phone</div>
                                    <div className="value">{model.phone || "-"}</div>
                                </div>
                            </div>
                            <div className="row2">
                                <div>
                                    <div className="label">Company</div>
                                    <div className="value">{model.company || "-"}</div>
                                </div>
                                <div>
                                    <div className="label">Code</div>
                                    <div className="value">{codeHint}</div>
                                </div>
                            </div>
                            <div className="row2">
                                <div>
                                    <div className="label">GSTIN</div>
                                    <div className="value">{model.gstin || "-"}</div>
                                </div>
                                <div>
                                    <div className="label">PAN</div>
                                    <div className="value">{model.pan || "-"}</div>
                                </div>
                            </div>
                            <div className="tagsView">
                                {model.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                            </div>
                        </div>
                    </div>

                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Customer</span><span className="v">{fullName}</span></div>
                            <div className="line"><span className="k">Status</span><span className="v">{model.status}</span></div>
                            <div className="line"><span className="k">Email</span><span className="v">{model.email || "-"}</span></div>
                            <div className="line"><span className="k">Phone</span><span className="v">{model.phone || "-"}</span></div>
                            <div className="line"><span className="k">Address</span>
                                <span className="v">
                                    {[
                                        model.address.line1, model.address.line2,
                                        [model.address.city, model.address.zip].filter(Boolean).join(" "),
                                        model.address.state, model.address.country
                                    ].filter(Boolean).join(", ") || "-"}
                                </span>
                            </div>
                            <div className="line"><span className="k">Draft</span><span className="v">{fmt(now, true)}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>
        </Styled.Page>
    );
};

export default CustomerNew;
