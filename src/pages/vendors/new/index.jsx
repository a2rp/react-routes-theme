import React, { useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* Date helpers (consistent app-wide) */
const pad = (n) => String(n).padStart(2, "0");
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* Tiny info dialog (non-blocking) */
const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>OK</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const VendorNew = () => {
    const navigate = useNavigate();
    const printRef = useRef(null);

    const now = useMemo(() => new Date(), []);
    const [banner] = useState("Display-only demo. Actions are disabled.");
    const [logoPreview, setLogoPreview] = useState("");
    const [showInfo, setShowInfo] = useState(false);

    // ephemeral local state (not persisted)
    const [model, setModel] = useState({
        code: "VEND-4021",
        name: "Northline Distributors",
        email: "contact@northline.example.com",
        phone: "+91 98765 00000",
        website: "https://northline.example.com",
        status: "active",
        gstin: "07ABCDE1234F1Z5",
        pan: "ABCDE1234F",
        cin: "U12345DL2014PTC000001",
        msme: "UDYAM-DL-12-0001234",
        tags: ["wholesale", "preferred", "pharma"],
        address: {
            line1: "Plot 22, Okhla Phase II",
            line2: "Industrial Area",
            city: "New Delhi",
            state: "DL",
            zip: "110020",
            country: "India",
        },
        shipping: {
            line1: "Warehouse A-12",
            line2: "Sector 37",
            city: "Gurugram",
            state: "HR",
            zip: "122001",
            country: "India",
        },
        bank: {
            accountName: "Northline Distributors Pvt. Ltd.",
            accountNumber: "XXXXXX4512",
            ifsc: "HDFC0001234",
            bank: "HDFC Bank",
            branch: "Okhla Phase II",
            upi: "northline@hdfcbank",
        },
        terms: {
            payment: "Net 30",
            creditLimit: "₹ 5,00,000",
            currency: "INR",
            taxCategory: "GST Registered",
            tds: "194C - 1%",
        },
        contacts: [
            { id: "CT-01", name: "Rohit S.", role: "Sales Manager", email: "rohit.s@northline.example.com", phone: "+91 98999 11111" },
            { id: "CT-02", name: "Meera K.", role: "Accounts", email: "meera.k@northline.example.com", phone: "+91 98999 22222" },
        ],
        documents: [
            { id: "DOC-01", type: "GST Certificate", number: "07ABCDE1234F1Z5", issued: "2021-06-01" },
            { id: "DOC-02", type: "PAN", number: "ABCDE1234F", issued: "2016-07-15" },
        ],
        notes: "Preferred dispatch days: Mon/Wed/Fri. E-invoice JSON email acceptable. For urgent PO, call Sales Manager.",
        createdAt: now,
        updatedAt: now,
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setModel((m) => ({ ...m, [name]: value }));
    };
    const onAddrChange = (scope, e) => {
        const { name, value } = e.target;
        setModel((m) => ({ ...m, [scope]: { ...m[scope], [name]: value } }));
    };
    const onBankChange = (e) => {
        const { name, value } = e.target;
        setModel((m) => ({ ...m, bank: { ...m.bank, [name]: value } }));
    };
    const onTermsChange = (e) => {
        const { name, value } = e.target;
        setModel((m) => ({ ...m, terms: { ...m.terms, [name]: value } }));
    };

    const onUpload = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const url = URL.createObjectURL(f);
        setLogoPreview(url);
    };
    const clearLogo = () => setLogoPreview("");

    const goBack = () => navigate("/vendors");

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const DisabledAction = () => setShowInfo(true);

    return (
        <Styled.Page>
            {/* Print rules (exact as required) */}
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
                    <h1>New Vendor</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/vendors">Vendors</NavLink>
                        <span>/</span>
                        <span className="current">New</span>
                    </nav>
                    <div className="meta">
                        <span>Template: {fmtDate(now)}</span>
                        <span>•</span>
                        <span>Session: {fmtDateTime(now)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={goBack} title="Back to vendors">Cancel</button>
                    <button className="btnPrimary" onClick={DisabledAction} title="Demo-only">Create Vendor</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* MAIN COLUMN */}
                <section className="col main card">
                    {/* Identity */}
                    <div className="identity">
                        <div className="logo">
                            <div className="pic" style={{ backgroundImage: `url(${logoPreview || "/logo.svg"})` }} />
                            <div className="controls">
                                <label className="btnGhost small">
                                    Upload Logo
                                    <input type="file" accept="image/*" onChange={onUpload} hidden />
                                </label>
                                {logoPreview ? (
                                    <button className="btnGhost small" onClick={clearLogo}>Remove</button>
                                ) : null}
                                <a className="btnGhost small" href={logoPreview || "/logo.svg"} download>Download</a>
                            </div>
                        </div>

                        <div className="fields">
                            <div className="three">
                                <div>
                                    <label>Vendor Name</label>
                                    <input name="name" value={model.name} onChange={onChange} placeholder="Vendor legal name" />
                                </div>
                                <div>
                                    <label>Vendor Code</label>
                                    <input name="code" value={model.code} onChange={onChange} placeholder="Auto/Manual" />
                                </div>
                                <div>
                                    <label>Status</label>
                                    <select name="status" value={model.status} onChange={onChange}>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="on-hold">On Hold</option>
                                    </select>
                                </div>
                            </div>

                            <div className="three">
                                <div>
                                    <label>Email</label>
                                    <input name="email" type="email" value={model.email} onChange={onChange} placeholder="name@example.com" />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <input name="phone" value={model.phone} onChange={onChange} placeholder="+91 ..." />
                                </div>
                                <div>
                                    <label>Website</label>
                                    <input name="website" value={model.website} onChange={onChange} placeholder="https://..." />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compliance */}
                    <div className="section">
                        <h3>Compliance</h3>
                        <div className="four">
                            <div>
                                <label>GSTIN</label>
                                <input name="gstin" value={model.gstin} onChange={onChange} placeholder="GSTIN" />
                            </div>
                            <div>
                                <label>PAN</label>
                                <input name="pan" value={model.pan} onChange={onChange} placeholder="PAN" />
                            </div>
                            <div>
                                <label>CIN</label>
                                <input name="cin" value={model.cin} onChange={onChange} placeholder="Corporate Identification Number" />
                            </div>
                            <div>
                                <label>MSME / UDYAM</label>
                                <input name="msme" value={model.msme} onChange={onChange} placeholder="UDYAM-..." />
                            </div>
                        </div>
                    </div>

                    {/* Addresses */}
                    <div className="twoCols">
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

                    {/* Banking */}
                    <div className="section">
                        <h3>Bank Details</h3>
                        <div className="three">
                            <div>
                                <label>Account Name</label>
                                <input name="accountName" value={model.bank.accountName} onChange={onBankChange} placeholder="Account holder" />
                            </div>
                            <div>
                                <label>Account Number</label>
                                <input name="accountNumber" value={model.bank.accountNumber} onChange={onBankChange} placeholder="XXXXXX4512" />
                            </div>
                            <div>
                                <label>IFSC</label>
                                <input name="ifsc" value={model.bank.ifsc} onChange={onBankChange} placeholder="IFSC code" />
                            </div>
                        </div>
                        <div className="three">
                            <div>
                                <label>Bank</label>
                                <input name="bank" value={model.bank.bank} onChange={onBankChange} placeholder="Bank name" />
                            </div>
                            <div>
                                <label>Branch</label>
                                <input name="branch" value={model.bank.branch} onChange={onBankChange} placeholder="Branch" />
                            </div>
                            <div>
                                <label>UPI ID</label>
                                <input name="upi" value={model.bank.upi} onChange={onBankChange} placeholder="upi@bank" />
                            </div>
                        </div>
                    </div>

                    {/* Contacts & Documents (display-rich, non-editing) */}
                    <div className="twoCols">
                        <div className="card sub">
                            <div className="subHeader">
                                <h3>Contacts</h3>
                                <button className="btnGhost small" onClick={() => setShowInfo(true)} title="Demo-only">Add Contact</button>
                            </div>
                            <table className="data">
                                <thead>
                                    <tr><th>ID</th><th>Name</th><th>Role</th><th>Email</th><th>Phone</th></tr>
                                </thead>
                                <tbody>
                                    {model.contacts.map(c => (
                                        <tr key={c.id}>
                                            <td>{c.id}</td>
                                            <td>{c.name}</td>
                                            <td>{c.role}</td>
                                            <td>{c.email}</td>
                                            <td>{c.phone}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="card sub">
                            <div className="subHeader">
                                <h3>Documents</h3>
                                <button className="btnGhost small" onClick={() => setShowInfo(true)} title="Demo-only">Upload</button>
                            </div>
                            <table className="data">
                                <thead>
                                    <tr><th>ID</th><th>Type</th><th>Number</th><th>Issued</th></tr>
                                </thead>
                                <tbody>
                                    {model.documents.map(d => (
                                        <tr key={d.id}>
                                            <td>{d.id}</td>
                                            <td>{d.type}</td>
                                            <td>{d.number}</td>
                                            <td>{fmtDate(d.issued)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="section">
                        <h3>Notes</h3>
                        <textarea rows={5} value={model.notes} onChange={(e) => setModel(m => ({ ...m, notes: e.target.value }))} placeholder="Internal notes…" />
                        <div className="mini">Last edit: {fmtDateTime(now)} • Best call window: {fmtTime(now)}</div>
                    </div>
                </section>

                {/* SIDEBAR */}
                <aside className="col side">
                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to="/vendors">All Vendors</NavLink></li>
                            <li><NavLink to="/purchase-orders">Purchase Orders</NavLink></li>
                            <li><NavLink to="/invoices">Bills & Invoices</NavLink></li>
                            <li><NavLink to="/inventory">Inventory</NavLink></li>
                            <li><NavLink to="/reports/procurement">Procurement Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Terms & Settings</h3>
                        <div className="three">
                            <div>
                                <label>Payment Terms</label>
                                <select name="payment" value={model.terms.payment} onChange={onTermsChange}>
                                    <option value="Advance">Advance</option>
                                    <option value="Net 7">Net 7</option>
                                    <option value="Net 15">Net 15</option>
                                    <option value="Net 30">Net 30</option>
                                    <option value="Net 45">Net 45</option>
                                </select>
                            </div>
                            <div>
                                <label>Credit Limit</label>
                                <input name="creditLimit" value={model.terms.creditLimit} onChange={onTermsChange} placeholder="₹ ..." />
                            </div>
                            <div>
                                <label>Currency</label>
                                <select name="currency" value={model.terms.currency} onChange={onTermsChange}>
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                        </div>
                        <div className="three">
                            <div>
                                <label>Tax Category</label>
                                <select name="taxCategory" value={model.terms.taxCategory} onChange={onTermsChange}>
                                    <option value="GST Registered">GST Registered</option>
                                    <option value="Unregistered">Unregistered</option>
                                    <option value="Composition">Composition</option>
                                </select>
                            </div>
                            <div>
                                <label>TDS</label>
                                <input name="tds" value={model.terms.tds} onChange={onTermsChange} placeholder="e.g., 194C - 1%" />
                            </div>
                            <div>
                                <label>Tags</label>
                                <div className="chips">
                                    {model.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Activity</h3>
                        <ul className="timeline">
                            <li><span className="dot" /><div><strong>Draft created</strong><div className="muted">{fmtDateTime(now)}</div></div></li>
                            <li><span className="dot" /><div><strong>Compliance verified</strong><div className="muted">{fmtDate(now)}</div></div></li>
                            <li><span className="dot" /><div><strong>Bank details added</strong><div className="muted">{fmtDate(now)}</div></div></li>
                        </ul>
                    </div>

                    {/* Printable snapshot */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Vendor</span><span className="v">{model.name} ({model.code})</span></div>
                            <div className="line"><span className="k">Status</span><span className="v">{model.status}</span></div>
                            <div className="line"><span className="k">Email</span><span className="v">{model.email}</span></div>
                            <div className="line"><span className="k">Phone</span><span className="v">{model.phone}</span></div>
                            <div className="line"><span className="k">GSTIN</span><span className="v">{model.gstin}</span></div>
                            <div className="line"><span className="k">Address</span>
                                <span className="v">{model.address.line1}, {model.address.line2}, {model.address.city} {model.address.zip}, {model.address.state}, {model.address.country}</span>
                            </div>
                            <div className="line"><span className="k">Created</span><span className="v">{fmtDateTime(model.createdAt)}</span></div>
                        </div>
                    </div>
                </aside>
            </Styled.Grid>

            <InfoDialog
                open={showInfo}
                title="Demo-only"
                message="This is a display theme preview. Creating or modifying data is disabled."
                onClose={() => setShowInfo(false)}
            />
        </Styled.Page>
    );
};

export default VendorNew;
