import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Styled } from "./styled";

// date format helpers (consistent across app)
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

// non-blocking custom dialogs
const ConfirmDialog = ({ open, title, message, confirmText = "Confirm", danger = false, onConfirm, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnGhost" onClick={onClose}>Cancel</button>
                    <button className={danger ? "btnDanger" : "btnPrimary"} onClick={onConfirm}>{confirmText}</button>
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
                    <p>This is a display-only theme. Create/Update/Delete actions are not available in the demo.</p>
                </div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>Got it</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const VendorEdit = () => {
    const { vendorId } = useParams();
    const navigate = useNavigate();
    const printRef = useRef(null);

    // deterministic “fixture-like” model (no persistence)
    const now = useMemo(() => new Date(), []);
    const initial = useMemo(() => ({
        id: vendorId || "VEND-5012",
        code: "VEND-5012",
        legalName: "NovaChem Labs Pvt. Ltd.",
        displayName: "NovaChem",
        email: "supply@novachem.example.com",
        phone: "+91 98111 22334",
        altPhone: "+91 98700 12345",
        website: "https://novachem.example.com",
        gstin: "07ABCDE1234F1Z7",
        pan: "ABCDE1234F",
        msme: "UDYAM-DL-09-0001234",
        paymentTerms: "Net 30",
        creditLimitINR: "1,50,00,000",
        leadTimeDays: 5,
        incoTerms: "FOB",
        preferredLogistics: "BlueDart, Delhivery",
        bank: {
            name: "ICICI Bank",
            account: "000705002345",
            ifsc: "ICIC0000705",
            branch: "Connaught Place, New Delhi",
            swift: "ICICINBBXXX",
        },
        categories: ["Pharma APIs", "Excipients", "Packaging"],
        certifications: ["GMP", "WHO-GMP", "ISO 9001", "ISO 14001"],
        compliance: {
            gxp: true, reach: true, rohs: true, ehs: true, dataPrivacy: true,
        },
        rating: 4.6,
        status: "active", // active | on-hold | blacklisted
        createdAt: now,
        updatedAt: now,
        tags: ["priority", "bulk", "domestic"],
        keyContacts: [
            { id: "CT-01", name: "Kiran Mehta", title: "Account Manager", email: "kiran.mehta@novachem.example.com", phone: "+91 98100 99881", preferred: "Email" },
            { id: "CT-02", name: "Rahul Verma", title: "Finance SPOC", email: "rahul.verma@novachem.example.com", phone: "+91 99900 11223", preferred: "Phone" },
        ],
        billing: {
            line1: "501, 5th Floor, Tower B",
            line2: "DLF Cyber City",
            city: "Gurugram",
            state: "HR",
            zip: "122002",
            country: "India",
        },
        shipping: {
            line1: "Plot 23, Industrial Area",
            line2: "Phase II",
            city: "Gurugram",
            state: "HR",
            zip: "122016",
            country: "India",
        },
        risk: {
            financial: "Low",
            delivery: "Low",
            quality: "Medium",
            overall: "Low",
        },
        sla: {
            otp: "98.1%", // on-time performance
            defectRate: "0.42%",
            avgResponse: "02:14:00", // HH:mm:ss
            returnsRate: "0.18%",
        },
        documents: [
            { id: "DOC-1", name: "GST Certificate.pdf", type: "PDF", size: "324 KB", uploadedAt: now },
            { id: "DOC-2", name: "GMP Compliance Letter.pdf", type: "PDF", size: "217 KB", uploadedAt: now },
            { id: "DOC-3", name: "Bank Cancelled Cheque.png", type: "PNG", size: "492 KB", uploadedAt: now },
        ],
        lastPO: { id: "PO-70145", date: now, total: "₹ 12,48,500" },
        lastInvoice: { id: "INV-2031", date: now, total: "₹ 12,48,500" },
    }), [vendorId, now]);

    const [model] = useState(initial);
    const [askDelete, setAskDelete] = useState(false);
    const [showDemo, setShowDemo] = useState(false);

    const fullName = `${model.displayName} (${model.code})`;

    const breadcrumbs = (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <NavLink to="/vendors">Vendors</NavLink>
            <span>/</span>
            <NavLink to={`/vendors/${model.id}`}>{model.id}</NavLink>
            <span>/</span>
            <span className="current">Edit</span>
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

    const goBack = () => {
        navigate(`/vendors/${model.id}`);
    };

    const deleteVendor = () => setAskDelete(true);
    const confirmDelete = () => {
        setAskDelete(false);
        navigate("/vendors");
    };

    useEffect(() => {
        // No side-effects; display-only. Intentionally blank.
    }, []);

    return (
        <Styled.Page>
            {/* print CSS (as requested) */}
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
                    <h1>Vendor</h1>
                    {breadcrumbs}
                    <div className="meta">
                        <span>Created: {fmt(model.createdAt)}</span>
                        <span>•</span>
                        <span>Updated: {fmt(model.updatedAt, true)}</span>
                        <span className={`status ${model.status}`}>{model.status}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={goBack} title="Back to details">Back</button>
                    <button className="btnGhost" onClick={printSection} title="Print summary">Print</button>
                    <button className="btnDisabled" onClick={() => setShowDemo(true)} title="Demo only">Save</button>
                    <button className="btnDisabled" onClick={() => setShowDemo(true)} title="Demo only">Save &amp; View</button>
                    <button className="btnDisabled danger" onClick={() => setShowDemo(true)} title="Demo only">Delete</button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                {/* MAIN */}
                <section className="col main card">
                    {/* identity + score */}
                    <div className="identity">
                        <div className="brand">
                            <div className="logo" aria-hidden="true">{(model.displayName || "N")[0]}</div>
                            <div className="info">
                                <h2>{model.legalName}</h2>
                                <div className="row">
                                    <span className="muted">{model.displayName}</span>
                                    <span className="sep">•</span>
                                    <a className="link" href={model.website} target="_blank" rel="noreferrer">{model.website}</a>
                                </div>
                                <div className="row">
                                    <a className="link" href={`mailto:${model.email}`}>{model.email}</a>
                                    <span className="sep">•</span>
                                    <a className="link" href={`tel:${model.phone}`}>{model.phone}</a>
                                </div>
                            </div>
                        </div>

                        <div className="scorecard">
                            <div className="score">
                                <div className="value">{model.rating.toFixed(1)}</div>
                                <div className="stars" aria-label={`${model.rating.toFixed(1)} out of 5`}>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className={i < Math.round(model.rating) ? "star fill" : "star"}>★</span>
                                    ))}
                                </div>
                                <div className="hint">Vendor Rating</div>
                            </div>
                            <div className="pillset">
                                <span className="pill">{model.categories[0]}</span>
                                <span className="pill">{model.categories[1]}</span>
                                <span className="pill">{model.categories[2]}</span>
                            </div>
                        </div>
                    </div>

                    {/* business ids */}
                    <div className="cardsRow">
                        <div className="kv">
                            <div className="k">GSTIN</div><div className="v">{model.gstin}</div>
                        </div>
                        <div className="kv">
                            <div className="k">PAN</div><div className="v">{model.pan}</div>
                        </div>
                        <div className="kv">
                            <div className="k">MSME</div><div className="v">{model.msme}</div>
                        </div>
                        <div className="kv">
                            <div className="k">Credit Limit</div><div className="v">{model.creditLimitINR}</div>
                        </div>
                        <div className="kv">
                            <div className="k">Payment Terms</div><div className="v">{model.paymentTerms}</div>
                        </div>
                        <div className="kv">
                            <div className="k">Lead Time</div><div className="v">{model.leadTimeDays} days</div>
                        </div>
                    </div>

                    {/* compliance + certifications */}
                    <div className="card sub">
                        <h3>Compliance & Certifications</h3>
                        <div className="grid two">
                            <div>
                                <ul className="badges">
                                    {model.certifications.map((c) => <li className="badge" key={c}>{c}</li>)}
                                </ul>
                            </div>
                            <div className="checks">
                                <label><input type="checkbox" checked={!!model.compliance.gxp} readOnly /> GxP Ready</label>
                                <label><input type="checkbox" checked={!!model.compliance.reach} readOnly /> REACH</label>
                                <label><input type="checkbox" checked={!!model.compliance.rohs} readOnly /> RoHS</label>
                                <label><input type="checkbox" checked={!!model.compliance.ehs} readOnly /> EHS</label>
                                <label><input type="checkbox" checked={!!model.compliance.dataPrivacy} readOnly /> Data Privacy</label>
                            </div>
                        </div>
                    </div>

                    {/* contacts */}
                    <div className="card sub">
                        <h3>Key Contacts</h3>
                        <div className="contacts">
                            {model.keyContacts.map((c) => (
                                <div className="contact" key={c.id}>
                                    <div className="avatar" aria-hidden="true">{c.name.charAt(0)}</div>
                                    <div className="ct">
                                        <div className="name">{c.name}</div>
                                        <div className="title">{c.title}</div>
                                        <div className="muted">{c.preferred} • {c.phone}</div>
                                        <a className="link" href={`mailto:${c.email}`}>{c.email}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* addresses */}
                    <div className="grid two">
                        <div className="card sub">
                            <h3>Billing Address</h3>
                            <div className="addr">
                                <input readOnly value={model.billing.line1} />
                                <input readOnly value={model.billing.line2} />
                                <div className="grid three">
                                    <input readOnly value={model.billing.city} />
                                    <input readOnly value={model.billing.state} />
                                    <input readOnly value={model.billing.zip} />
                                </div>
                                <input readOnly value={model.billing.country} />
                            </div>
                        </div>
                        <div className="card sub">
                            <h3>Shipping Address</h3>
                            <div className="addr">
                                <input readOnly value={model.shipping.line1} />
                                <input readOnly value={model.shipping.line2} />
                                <div className="grid three">
                                    <input readOnly value={model.shipping.city} />
                                    <input readOnly value={model.shipping.state} />
                                    <input readOnly value={model.shipping.zip} />
                                </div>
                                <input readOnly value={model.shipping.country} />
                            </div>
                        </div>
                    </div>

                    {/* banking & terms */}
                    <div className="grid two">
                        <div className="card sub">
                            <h3>Bank Details</h3>
                            <div className="kvList">
                                <div><span className="k">Bank</span><span className="v">{model.bank.name}</span></div>
                                <div><span className="k">Account</span><span className="v">{model.bank.account}</span></div>
                                <div><span className="k">IFSC</span><span className="v">{model.bank.ifsc}</span></div>
                                <div><span className="k">Branch</span><span className="v">{model.bank.branch}</span></div>
                                <div><span className="k">SWIFT</span><span className="v">{model.bank.swift}</span></div>
                            </div>
                        </div>
                        <div className="card sub">
                            <h3>Commercial Terms</h3>
                            <div className="kvList">
                                <div><span className="k">Payment Terms</span><span className="v">{model.paymentTerms}</span></div>
                                <div><span className="k">Credit Limit</span><span className="v">{model.creditLimitINR}</span></div>
                                <div><span className="k">Incoterms</span><span className="v">{model.incoTerms}</span></div>
                                <div><span className="k">Preferred Logistics</span><span className="v">{model.preferredLogistics}</span></div>
                                <div><span className="k">Lead Time</span><span className="v">{model.leadTimeDays} days</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDEBAR */}
                <aside className="col side">
                    <div className="card">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            <li><NavLink to={`/vendors/${model.id}`}>View Details</NavLink></li>
                            <li><NavLink to="/purchase-orders">Purchase Orders</NavLink></li>
                            <li><NavLink to="/invoices">Invoices</NavLink></li>
                            <li><NavLink to="/inventory">Inventory</NavLink></li>
                            <li><NavLink to="/reports/procurement">Procurement Report</NavLink></li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Risk & SLA</h3>
                        <div className="risk">
                            <span className={`chip ${model.risk.overall.toLowerCase()}`}>Overall: {model.risk.overall}</span>
                            <div className="list">
                                <div><span className="k">Financial</span><span className="v">{model.risk.financial}</span></div>
                                <div><span className="k">Delivery</span><span className="v">{model.risk.delivery}</span></div>
                                <div><span className="k">Quality</span><span className="v">{model.risk.quality}</span></div>
                            </div>
                            <div className="sla">
                                <div><span className="k">On-time</span><span className="v">{model.sla.otp}</span></div>
                                <div><span className="k">Defects</span><span className="v">{model.sla.defectRate}</span></div>
                                <div><span className="k">Response</span><span className="v">{model.sla.avgResponse}</span></div>
                                <div><span className="k">Returns</span><span className="v">{model.sla.returnsRate}</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Recent Activity</h3>
                        <ul className="timeline">
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>PO {model.lastPO.id} issued</strong>
                                    <div className="muted">{fmt(model.lastPO.date, true)}</div>
                                </div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Invoice {model.lastInvoice.id} received</strong>
                                    <div className="muted">{fmt(model.lastInvoice.date)}</div>
                                </div>
                            </li>
                            <li>
                                <span className="dot" />
                                <div>
                                    <strong>Vendor documents updated</strong>
                                    <div className="muted">{fmt(now, true)}</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* printable summary */}
                    <div className="card" id="search-print-area" ref={printRef}>
                        <h3>Print Summary</h3>
                        <div className="printSummary">
                            <div className="line"><span className="k">Vendor</span><span className="v">{fullName}</span></div>
                            <div className="line"><span className="k">Email</span><span className="v">{model.email}</span></div>
                            <div className="line"><span className="k">Phone</span><span className="v">{model.phone}</span></div>
                            <div className="line"><span className="k">GSTIN</span><span className="v">{model.gstin}</span></div>
                            <div className="line"><span className="k">Payment Terms</span><span className="v">{model.paymentTerms}</span></div>
                            <div className="line"><span className="k">Lead Time</span><span className="v">{model.leadTimeDays} days</span></div>
                            <div className="line"><span className="k">Created</span><span className="v">{fmt(model.createdAt, true)}</span></div>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Documents</h3>
                        <ul className="docs">
                            {model.documents.map(doc => (
                                <li key={doc.id}>
                                    <div className="meta">
                                        <span className="name">{doc.name}</span>
                                        <span className="muted">{doc.type} • {doc.size} • {fmt(doc.uploadedAt)}</span>
                                    </div>
                                    <div className="act">
                                        <a className="btnGhost small" href="#" onClick={(e) => e.preventDefault()}>Preview</a>
                                        <a className="btnGhost small" href="#" onClick={(e) => e.preventDefault()}>Download</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <ConfirmDialog
                open={askDelete}
                danger
                title="Delete vendor?"
                message={`This will permanently remove ${fullName}.`}
                confirmText="Delete"
                onConfirm={confirmDelete}
                onClose={() => setAskDelete(false)}
            />

            <DemoNotice open={showDemo} onClose={() => setShowDemo(false)} />
        </Styled.Page>
    );
};

export default VendorEdit;
