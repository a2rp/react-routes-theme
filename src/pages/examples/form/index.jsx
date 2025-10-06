import React, { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

/* ===== tiny date utils to keep one exact format everywhere ===== */
const pad = (n) => String(n).padStart(2, "0");
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    return withTime ? `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs` : base;
};
const onlyTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ===== lightweight modal (no browser alerts) ===== */
const DemoDialog = ({ open, title, message, onClose }) => {
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

const ExampleForm = () => {
    const navigate = useNavigate();
    const now = useMemo(() => new Date(), []);
    const printRef = useRef(null);
    const uploadRef = useRef(null);

    /* Demo: fully controlled, no persistence */
    const initial = useMemo(() => ({
        firstName: "Aarav",
        lastName: "Sharma",
        email: "aarav.sharma@example.com",
        phone: "+91 98765 43210",
        country: "IN",
        tz: "Asia/Kolkata",
        accountType: "business",
        dob: "1996-10-04",
        meetingAt: new Date().toISOString().slice(0, 16), // yyyy-mm-ddThh:mm
        newsletter: true,
        marketing: false,
        theme: "system",
        password: "••••••••",
        about: "Short bio goes here. Keep things crisp and focused. This is just a demo text.",
        street1: "221B Baker Street",
        street2: "Khan Market",
        city: "New Delhi",
        state: "DL",
        zip: "110003",
        avatarName: "",
        avatarUrl: "",
        satisfaction: 80,
    }), []);

    const [model, setModel] = useState(initial);
    const [showPwd, setShowPwd] = useState(false);
    const [demoMsg, setDemoMsg] = useState("");
    const [openDemo, setOpenDemo] = useState(false);
    const [banner, setBanner] = useState(`Opened at ${fmt(now, true)}`);

    useEffect(() => {
        let t;
        if (banner) t = setTimeout(() => setBanner(""), 3500);
        return () => t && clearTimeout(t);
    }, [banner]);

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setModel((m) => ({ ...m, [name]: type === "checkbox" ? checked : value }));
    };

    const onUpload = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const url = URL.createObjectURL(f);
        setModel((m) => ({ ...m, avatarName: f.name, avatarUrl: url }));
    };

    const clearPhoto = () => {
        setModel((m) => ({ ...m, avatarName: "", avatarUrl: "" }));
        if (uploadRef.current) uploadRef.current.value = "";
    };

    const resetForm = () => setModel(initial);
    const cancel = () => navigate("/examples");

    const saveDisabled = true; // display-only
    const submitDemo = () => {
        setDemoMsg("This is a display-only theme. Submissions are disabled in demo mode.");
        setOpenDemo(true);
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

    const fullName = `${model.firstName} ${model.lastName}`.trim();

    return (
        <Styled.Page className="container">

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
                    <h1>Form Demo</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/examples">Examples</NavLink>
                        <span>/</span>
                        <span className="current">Form</span>
                    </nav>
                    <div className="meta">
                        <span>Today: {fmt(now, true)}</span>
                        <span>•</span>
                        <span>Best time to call: {onlyTime(now)}</span>
                    </div>
                </div>
                <div className="actions">
                    <button className="btnGhost" onClick={cancel} title="Back to Examples">Back</button>
                    <button className="btnPrimary" onClick={printSection}>Print</button>
                    <button className="btnPrimary" disabled={saveDisabled} title="Disabled in demo">Save</button>
                    <button className="btnDanger" onClick={resetForm}>Reset</button>
                    <button className="btnPrimary" onClick={submitDemo} title="Submit (demo)">Submit</button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner>{banner}</Styled.Banner> : null}

            <Styled.Grid>
                {/* Main Form */}
                <section className="col main card">
                    {/* identity block */}
                    <div className="row stack">
                        <div className="avatar">
                            <div className="pic" style={{ backgroundImage: `url(${model.avatarUrl || "/avatar.svg"})` }} />
                            <div className="controls">
                                <label className="btnGhost small">
                                    Upload Photo
                                    <input ref={uploadRef} type="file" accept="image/*" hidden onChange={onUpload} />
                                </label>
                                {model.avatarUrl ? <button className="btnGhost small" onClick={clearPhoto}>Remove</button> : null}
                                <a className="btnGhost small" href={model.avatarUrl || "/avatar.svg"} download>Download</a>
                            </div>
                            {model.avatarName ? <div className="muted fileName">{model.avatarName}</div> : null}
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
                                    <label>Date of Birth</label>
                                    <input name="dob" type="date" value={model.dob} onChange={onChange} />
                                </div>
                            </div>

                            <div className="two">
                                <div>
                                    <label>Country</label>
                                    <select name="country" value={model.country} onChange={onChange}>
                                        <option value="">Select</option>
                                        <option value="IN">India</option>
                                        <option value="US">United States</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="SG">Singapore</option>
                                        <option value="GB">United Kingdom</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Time Zone</label>
                                    <select name="tz" value={model.tz} onChange={onChange}>
                                        <option value="Asia/Kolkata">Asia/Kolkata</option>
                                        <option value="Asia/Dubai">Asia/Dubai</option>
                                        <option value="Asia/Singapore">Asia/Singapore</option>
                                        <option value="Europe/London">Europe/London</option>
                                        <option value="America/New_York">America/New_York</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* address */}
                    <div className="row">
                        <div className="two">
                            <div>
                                <label>Address line 1</label>
                                <input name="street1" value={model.street1} onChange={onChange} placeholder="Street, building" />
                            </div>
                            <div>
                                <label>Address line 2</label>
                                <input name="street2" value={model.street2} onChange={onChange} placeholder="Area, landmark" />
                            </div>
                        </div>
                        <div className="three">
                            <div>
                                <label>City</label>
                                <input name="city" value={model.city} onChange={onChange} placeholder="City" />
                            </div>
                            <div>
                                <label>State</label>
                                <input name="state" value={model.state} onChange={onChange} placeholder="State" />
                            </div>
                            <div>
                                <label>PIN / ZIP</label>
                                <input name="zip" value={model.zip} onChange={onChange} placeholder="110003" />
                            </div>
                        </div>
                    </div>

                    {/* account / preferences */}
                    <div className="row">
                        <div className="two">
                            <div className="card sub">
                                <h3>Account</h3>
                                <div className="radioRow">
                                    <label className={`radio ${model.accountType === "personal" ? "active" : ""}`}>
                                        <input type="radio" name="accountType" value="personal"
                                            checked={model.accountType === "personal"} onChange={onChange} />
                                        <span>Personal</span>
                                    </label>
                                    <label className={`radio ${model.accountType === "business" ? "active" : ""}`}>
                                        <input type="radio" name="accountType" value="business"
                                            checked={model.accountType === "business"} onChange={onChange} />
                                        <span>Business</span>
                                    </label>
                                </div>

                                <div className="pwdRow">
                                    <label>Password</label>
                                    <div className="pwdBox">
                                        <input
                                            name="password"
                                            type={showPwd ? "text" : "password"}
                                            value={model.password}
                                            onChange={onChange}
                                            placeholder="••••••••"
                                        />
                                        <button type="button" className="btnGhost small" onClick={() => setShowPwd(v => !v)}>
                                            {showPwd ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                <div className="two compact">
                                    <div>
                                        <label>Meeting (local)</label>
                                        <input type="datetime-local" name="meetingAt" value={model.meetingAt} onChange={onChange} />
                                    </div>
                                    <div>
                                        <label>Theme</label>
                                        <select name="theme" value={model.theme} onChange={onChange}>
                                            <option value="system">System</option>
                                            <option value="dark">Dark</option>
                                            <option value="light">Light</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="two compact">
                                    <label className="switch">
                                        <input type="checkbox" name="newsletter" checked={model.newsletter} onChange={onChange} />
                                        <span className="slider" />
                                        <span className="label">Subscribe to newsletter</span>
                                    </label>
                                    <label className="switch">
                                        <input type="checkbox" name="marketing" checked={model.marketing} onChange={onChange} />
                                        <span className="slider" />
                                        <span className="label">Allow marketing emails</span>
                                    </label>
                                </div>

                                <div className="range">
                                    <label>Experience with our product (demo)</label>
                                    <input
                                        type="range" min="0" max="100" step="5"
                                        name="satisfaction" value={model.satisfaction}
                                        onChange={onChange}
                                    />
                                    <div className="muted">{model.satisfaction}%</div>
                                </div>
                            </div>

                            <div className="card sub">
                                <h3>About</h3>
                                <textarea rows={6} name="about" value={model.about} onChange={onChange} placeholder="Tell us something…" />
                                <div className="mini">Last edited: {fmt(now, true)}</div>
                            </div>
                        </div>

                        <div className="two">
                            <div className="card sub">
                                <h3>Quick Tips</h3>
                                <ul className="tips">
                                    <li>Use accurate contact details so invoices reach the right inbox.</li>
                                    <li>Choose “Business” if you need GST-compliant documents.</li>
                                    <li>Set your preferred theme; we respect OS defaults.</li>
                                    <li>Printing will use the focused summary on the right.</li>
                                </ul>
                            </div>

                            {/* printable summary on the right */}
                            <div className="card sub" id="search-print-area" ref={printRef}>
                                <h3>Print Summary</h3>
                                <div className="printSummary">
                                    <div className="line"><span className="k">Name</span><span className="v">{fullName || "—"}</span></div>
                                    <div className="line"><span className="k">Email</span><span className="v">{model.email || "—"}</span></div>
                                    <div className="line"><span className="k">Phone</span><span className="v">{model.phone || "—"}</span></div>
                                    <div className="line"><span className="k">Type</span><span className="v">{model.accountType}</span></div>
                                    <div className="line"><span className="k">Country</span><span className="v">{model.country || "—"}</span></div>
                                    <div className="line"><span className="k">Time Zone</span><span className="v">{model.tz}</span></div>
                                    <div className="line"><span className="k">DOB</span><span className="v">{fmt(model.dob)}</span></div>
                                    <div className="line"><span className="k">Meeting</span><span className="v">{fmt(new Date(model.meetingAt), true)}</span></div>
                                    <div className="line"><span className="k">Address</span>
                                        <span className="v">
                                            {model.street1}, {model.street2}, {model.city} {model.zip}, {model.state}
                                        </span>
                                    </div>
                                    <div className="line"><span className="k">Newsletter</span><span className="v">{model.newsletter ? "Yes" : "No"}</span></div>
                                    <div className="line"><span className="k">Marketing</span><span className="v">{model.marketing ? "Yes" : "No"}</span></div>
                                    <div className="line"><span className="k">Theme</span><span className="v">{model.theme}</span></div>
                                    <div className="line"><span className="k">Now</span><span className="v">{fmt(now, true)}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Side panel */}
                <aside className="col side">
                    <div className="card">
                        <h3>Live Preview</h3>
                        <div className="preview">
                            <div className="avatar sm" style={{ backgroundImage: `url(${model.avatarUrl || "/avatar.svg"})` }} />
                            <div className="details">
                                <strong>{fullName || "Unnamed"}</strong>
                                <div className="muted">{model.email} • {model.phone}</div>
                                <div className="muted">Type: {model.accountType} • Theme: {model.theme}</div>
                            </div>
                        </div>
                        <div className="badges">
                            {model.newsletter && <span className="chip">newsletter</span>}
                            {model.marketing && <span className="chip">marketing</span>}
                        </div>
                    </div>

                    <div className="card">
                        <h3>Shortcuts</h3>
                        <ul className="links">
                            <li><NavLink to="/examples/print">Print Demo</NavLink></li>
                            <li><NavLink to="/settings/appearance">Appearance</NavLink></li>
                            <li><NavLink to="/reports/customers">Customer Report</NavLink></li>
                            <li><NavLink to="/tools/theme-tokens">Theme Tokens</NavLink></li>
                        </ul>
                    </div>
                </aside>
            </Styled.Grid>

            <DemoDialog open={openDemo} title="Demo mode"
                message={demoMsg}
                onClose={() => setOpenDemo(false)} />
        </Styled.Page>
    );
};

export default ExampleForm;
