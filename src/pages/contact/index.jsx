import { useMemo, useState, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import { MdContentCopy, MdPrint, MdCall, MdEmail, MdOpenInNew, MdWhatsapp } from "react-icons/md";

/** Date formatting helpers (strict to your requested formats) */
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function pad2(n) { return n < 10 ? `0${n}` : `${n}`; }
function formatDateOnly(d) {
    const dt = (d instanceof Date) ? d : new Date(d);
    return `${WEEK[dt.getDay()]} ${MON[dt.getMonth()]} ${pad2(dt.getDate())} ${dt.getFullYear()}`;
}
function formatTimeOnly(d) {
    const dt = (d instanceof Date) ? d : new Date(d);
    const hh = pad2(dt.getHours()), mm = pad2(dt.getMinutes()), ss = pad2(dt.getSeconds());
    return `${hh}:${mm}:${ss}hrs`;
}
function formatDateTime(d) {
    const dt = (d instanceof Date) ? d : new Date(d);
    return `${formatDateOnly(dt)} ${formatTimeOnly(dt)}`;
}

const PRINT_TARGET_ID = "search-print-area";

const Contact = () => {
    const { pathname } = useLocation();
    const [copied, setCopied] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const deepLink = useMemo(() => {
        // Works seamlessly because BrowserRouter has basename set already.
        return window.location.origin + window.location.pathname + window.location.search + window.location.hash;
    }, [pathname]);

    const buildISO = typeof __APP_BUILD_ISO__ !== "undefined" ? __APP_BUILD_ISO__ : new Date().toISOString();
    const commitISO = typeof __APP_COMMIT_ISO__ !== "undefined" ? __APP_COMMIT_ISO__ : buildISO;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(deepLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch { }
    };

    const handlePrint = useCallback(() => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            setTimeout(() => document.body.classList.remove("print-section-mode"), 0);
        }
    }, []);

    const openDemoModal = () => setModalOpen(true);
    const closeDemoModal = () => setModalOpen(false);

    /** Static office/contact info (display-only) */
    const offices = [
        {
            key: "hq",
            title: "Head Office",
            lines: ["Plot 42, Tech Park Phase II", "Outer Ring Road, Bengaluru 560103", "Karnataka, India"],
            phone: "+91-80-4000-1234",
            email: "hq@yourco.example",
            map: "https://maps.google.com/?q=Outer+Ring+Road,+Bengaluru",
            hours: "Mon–Fri 09:30–18:30",
        },
        {
            key: "support",
            title: "Support Center",
            lines: ["2nd Floor, North Wing", "Mindspace IT Park, Hyderabad 500081", "Telangana, India"],
            phone: "+91-40-4500-2222",
            email: "support@yourco.example",
            map: "https://maps.google.com/?q=Mindspace,+Hyderabad",
            hours: "Mon–Sat 09:00–20:00",
        },
        {
            key: "warehouse",
            title: "Primary Warehouse",
            lines: ["Gate 7, Logistics Hub", "NH-48, Manesar 122052", "Haryana, India"],
            phone: "+91-124-4700-3333",
            email: "warehouse@yourco.example",
            map: "https://maps.google.com/?q=Manesar+NH48",
            hours: "Mon–Sat 08:00–18:00",
        },
    ];

    const people = [
        { id: "U-101", name: "Ashish Ranjan", role: "Product Lead", email: "ashish@yourco.example", phone: "+91-98-000-11111" },
        { id: "U-102", name: "N. Sharma", role: "Head of Support", email: "n.sharma@yourco.example", phone: "+91-98-000-22222" },
        { id: "U-103", name: "A. Mehra", role: "Billing Desk", email: "a.mehra@yourco.example", phone: "+91-98-000-33333" },
        { id: "U-104", name: "Devops Team", role: "Infra & Status", email: "devops@yourco.example", phone: "+91-98-000-44444" },
    ];

    return (
        <Styled.Page>
            {/* PRINT CSS (exact snippet you requested) */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #${PRINT_TARGET_ID},
          body.print-section-mode #${PRINT_TARGET_ID} * { visibility: visible !important; }

          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #${PRINT_TARGET_ID} {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            {/* Header */}
            <Styled.Header>
                <div className="breadcrumbs">
                    <NavLink to="/home">Home</NavLink>
                    <span>›</span>
                    <NavLink to="/help">Help</NavLink>
                    <span>›</span>
                    <span aria-current="page">Contact</span>
                </div>

                <div className="titleWrap">
                    <h1>Contact</h1>
                    <div className="meta">
                        <span className="pill" title="Build time">{formatDateTime(buildISO)}</span>
                        <span className="pill" title="Last commit">{formatDateTime(commitISO)}</span>
                    </div>
                </div>

                <Styled.Actions>
                    <button onClick={handleCopy} title="Copy this page link">
                        <MdContentCopy size={18} /> Copy Link
                    </button>
                    <a href="mailto:support@yourco.example" className="ghost" title="Email support">
                        <MdEmail size={18} /> Email Support
                    </a>
                    <a href="tel:+918045002222" className="ghost" title="Call support">
                        <MdCall size={18} /> Call
                    </a>
                    <a
                        href="https://wa.me/919800022222"
                        target="_blank" rel="noreferrer"
                        className="ghost" title="Open WhatsApp"
                    >
                        <MdWhatsapp size={18} /> WhatsApp
                    </a>
                    <button onClick={handlePrint} title="Print contact sheet">
                        <MdPrint size={18} /> Print
                    </button>
                    {copied && <span className="copied">Copied ✓</span>}
                </Styled.Actions>
            </Styled.Header>

            {/* Main content (printable) */}
            <div id={PRINT_TARGET_ID}>
                <Styled.Grid>
                    {/* Left column — Offices & Channels */}
                    <Styled.Card>
                        <h2>Offices & Channels</h2>
                        <p className="muted">Reach us via phone or email. Office hours vary by location.</p>
                        <div className="offices">
                            {offices.map(o => (
                                <div className="office" key={o.key}>
                                    <div className="officeHead">
                                        <h3>{o.title}</h3>
                                        <a href={o.map} target="_blank" rel="noreferrer" title="Open map">
                                            Map <MdOpenInNew size={16} />
                                        </a>
                                    </div>
                                    <address>
                                        {o.lines.map((ln, i) => <div key={i}>{ln}</div>)}
                                    </address>
                                    <div className="row">
                                        <a href={`tel:${o.phone.replaceAll(/[^0-9+]/g, "")}`} className="link">
                                            <MdCall size={16} /> {o.phone}
                                        </a>
                                        <a href={`mailto:${o.email}`} className="link">
                                            <MdEmail size={16} /> {o.email}
                                        </a>
                                    </div>
                                    <div className="hours">Hours: {o.hours}</div>
                                </div>
                            ))}
                        </div>

                        <div className="channels">
                            <div className="channel">
                                <h4>Support</h4>
                                <a href="mailto:support@yourco.example">support@yourco.example</a>
                                <span>Tickets answered within business hours.</span>
                            </div>
                            <div className="channel">
                                <h4>Sales</h4>
                                <a href="mailto:sales@yourco.example">sales@yourco.example</a>
                                <span>Quotes, demos, procurement assistance.</span>
                            </div>
                            <div className="channel">
                                <h4>Billing</h4>
                                <a href="mailto:billing@yourco.example">billing@yourco.example</a>
                                <span>Invoices, receipts, reconciliation.</span>
                            </div>
                            <div className="channel">
                                <h4>Infrastructure</h4>
                                <NavLink to="/admin/system-status" title="Open system status">
                                    /admin/system-status
                                </NavLink>
                                <span>Maintenance windows & uptime notes.</span>
                            </div>
                        </div>
                    </Styled.Card>

                    {/* Right column — Quick routes */}
                    <Styled.Card>
                        <h2>Quick Routes</h2>
                        <p className="muted">Navigate across frequently used sections. These are deep links for demo navigation.</p>
                        <div className="routes">
                            <section>
                                <h4>Core</h4>
                                <NavLink to="/dashboard">/dashboard</NavLink>
                                <NavLink to="/search">/search</NavLink>
                                <NavLink to="/about">/about</NavLink>
                            </section>

                            <section>
                                <h4>CRM & Sales</h4>
                                <NavLink to="/customers">/customers</NavLink>
                                <NavLink to="/orders">/orders</NavLink>
                                <NavLink to="/sales/quotes">/sales/quotes</NavLink>
                                <NavLink to="/sales/payments">/sales/payments</NavLink>
                            </section>

                            <section>
                                <h4>Catalog</h4>
                                <NavLink to="/products">/products</NavLink>
                                <NavLink to="/categories">/categories</NavLink>
                                <NavLink to="/medicines">/medicines</NavLink>
                                <NavLink to="/medicines/expiry-tracker">/medicines/expiry-tracker</NavLink>
                            </section>

                            <section>
                                <h4>Inventory & Logistics</h4>
                                <NavLink to="/inventory">/inventory</NavLink>
                                <NavLink to="/shipments">/shipments</NavLink>
                                <NavLink to="/warehouses">/settings/warehouses</NavLink>
                            </section>

                            <section>
                                <h4>Billing & Finance</h4>
                                <NavLink to="/invoices">/invoices</NavLink>
                                <NavLink to="/receipts">/receipts</NavLink>
                                <NavLink to="/finance/balance-sheet">/finance/balance-sheet</NavLink>
                                <NavLink to="/finance/profit-loss">/finance/profit-loss</NavLink>
                            </section>

                            <section>
                                <h4>Reports</h4>
                                <NavLink to="/reports/sales">/reports/sales</NavLink>
                                <NavLink to="/reports/inventory">/reports/inventory</NavLink>
                                <NavLink to="/reports/customers">/reports/customers</NavLink>
                                <NavLink to="/reports/gst">/reports/gst</NavLink>
                            </section>

                            <section>
                                <h4>Admin</h4>
                                <NavLink to="/admin/users">/admin/users</NavLink>
                                <NavLink to="/admin/permissions">/admin/permissions</NavLink>
                                <NavLink to="/admin/audit-log">/admin/audit-log</NavLink>
                                <NavLink to="/admin/system-status">/admin/system-status</NavLink>
                            </section>

                            <section>
                                <h4>Settings</h4>
                                <NavLink to="/settings/appearance">/settings/appearance</NavLink>
                                <NavLink to="/settings/notifications">/settings/notifications</NavLink>
                                <NavLink to="/settings/print-templates">/settings/print-templates</NavLink>
                                <NavLink to="/settings/webhooks">/settings/webhooks</NavLink>
                            </section>

                            <section>
                                <h4>Help</h4>
                                <NavLink to="/help">/help</NavLink>
                                <NavLink to="/faq">/faq</NavLink>
                                <NavLink to="/feedback">/feedback</NavLink>
                                <NavLink to="/roadmap">/roadmap</NavLink>
                            </section>
                        </div>
                    </Styled.Card>

                    {/* Full-width card — People */}
                    <Styled.Card className="span2">
                        <h2>Key Contacts</h2>
                        <p className="muted">Connect directly with the right team. Actions are display-only.</p>
                        <div className="people">
                            {people.map(p => (
                                <div className="person" key={p.id}>
                                    <div className="avatar" aria-hidden="true">{p.name.split(" ").map(w => w[0]).slice(0, 2).join("")}</div>
                                    <div className="info">
                                        <div className="row1">
                                            <strong>{p.name}</strong>
                                            <span className="role">{p.role}</span>
                                            <span className="id">#{p.id}</span>
                                        </div>
                                        <div className="row2">
                                            <a className="chip" href={`mailto:${p.email}`} title="Email">
                                                <MdEmail size={16} /> {p.email}
                                            </a>
                                            <a className="chip" href={`tel:${p.phone.replaceAll(/[^0-9+]/g, "")}`} title="Call">
                                                <MdCall size={16} /> {p.phone}
                                            </a>
                                            <button className="chip disabled" onClick={openDemoModal} title="Demo mode">
                                                Request Callback
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Styled.Card>

                    {/* Full-width card — Message (display-only) */}
                    <Styled.Card className="span2">
                        <h2>Send a Message</h2>
                        <p className="muted">This is a display-only theme. The form is intentionally disabled.</p>
                        <form onSubmit={(e) => e.preventDefault()} className="messageForm" aria-disabled="true">
                            <div className="grid">
                                <div>
                                    <label>Name</label>
                                    <input type="text" placeholder="Your full name" disabled />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input type="email" placeholder="you@example.com" disabled />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <input type="tel" placeholder="+91-" disabled />
                                </div>
                                <div>
                                    <label>Topic</label>
                                    <select disabled>
                                        <option>Support</option>
                                        <option>Sales</option>
                                        <option>Billing</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="full">
                                    <label>Message</label>
                                    <textarea rows={6} placeholder="Type your message..." disabled />
                                </div>
                            </div>
                            <div className="formActions">
                                <button type="button" onClick={openDemoModal}>Submit</button>
                                <a className="ghost" href="mailto:support@yourco.example" title="Fallback email">
                                    Email Instead
                                </a>
                            </div>
                        </form>
                    </Styled.Card>

                    {/* Meta / Last updated */}
                    <Styled.Card className="span2">
                        <h2>Meta</h2>
                        <div className="metaGrid">
                            <div>
                                <div className="label">This Page</div>
                                <div className="value">{deepLink}</div>
                            </div>
                            <div>
                                <div className="label">Today</div>
                                <div className="value">{formatDateOnly(new Date())}</div>
                            </div>
                            <div>
                                <div className="label">Now</div>
                                <div className="value">{formatTimeOnly(new Date())}</div>
                            </div>
                            <div>
                                <div className="label">Build</div>
                                <div className="value">{formatDateTime(buildISO)}</div>
                            </div>
                            <div>
                                <div className="label">Last Commit</div>
                                <div className="value">{formatDateTime(commitISO)}</div>
                            </div>
                        </div>
                    </Styled.Card>
                </Styled.Grid>
            </div>

            {/* Custom Modal (demo notice) */}
            {modalOpen && (
                <Styled.ModalBackdrop
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <Styled.Modal>
                        <h3 id="modal-title">Demo Only</h3>
                        <p>This is a display-only theme. Actions like “Submit” or “Request Callback” are disabled.</p>
                        <div className="actions">
                            <button onClick={closeDemoModal}>Okay</button>
                            <a className="ghost" href="mailto:support@yourco.example">Email Support</a>
                        </div>
                    </Styled.Modal>
                </Styled.ModalBackdrop>
            )}
        </Styled.Page>
    );
};

export default Contact;
