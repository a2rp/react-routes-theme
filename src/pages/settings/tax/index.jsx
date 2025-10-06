import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Wrapper, Header, Actions, Subnav, Grid, Card, Table, Badge, Kbd, Pill, ModalOverlay, ModalCard } from "./styled";

const buildISO = (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) || new Date().toISOString();
const commitISO = (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) || buildISO;

const pad = (n) => String(n).padStart(2, "0");
const toDate = (iso) => new Date(iso);
const fmtDate = (iso) => toDate(iso).toDateString(); // "Sat Oct 04 2025"
const fmtDateTime = (iso) => {
    const d = toDate(iso);
    return `${d.toDateString()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};
const fmtTime = (iso) => {
    const d = toDate(iso);
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
};

const DEMO_NOTICE = "This is a display-only theme. Changes will not be saved.";

const TAX_RATES = [
    { id: "TAX-CGST-9", name: "CGST 9%", kind: "CGST", rate: "9%", jurisdiction: "India", effectiveFrom: "2024-04-01T00:00:00+05:30", status: "Active", updatedAt: "2025-09-28T10:18:30+05:30" },
    { id: "TAX-SGST-9", name: "SGST 9%", kind: "SGST", rate: "9%", jurisdiction: "India", effectiveFrom: "2024-04-01T00:00:00+05:30", status: "Active", updatedAt: "2025-09-28T10:18:30+05:30" },
    { id: "TAX-IGST-18", name: "IGST 18%", kind: "IGST", rate: "18%", jurisdiction: "Interstate (India)", effectiveFrom: "2024-04-01T00:00:00+05:30", status: "Active", updatedAt: "2025-09-28T10:18:30+05:30" },
    { id: "TAX-ZERO", name: "Zero Rated (0%)", kind: "GST", rate: "0%", jurisdiction: "India", effectiveFrom: "2024-04-01T00:00:00+05:30", status: "Active", updatedAt: "2025-05-01T12:00:00+05:30" },
    { id: "TAX-EXEMPT", name: "Exempt (N/A)", kind: "GST", rate: "—", jurisdiction: "India", effectiveFrom: "2024-04-01T00:00:00+05:30", status: "Active", updatedAt: "2025-05-01T12:00:00+05:30" },
    { id: "TAX-CESS-12", name: "Compensation Cess 12%", kind: "Cess", rate: "12%", jurisdiction: "India", effectiveFrom: "2024-04-01T00:00:00+05:30", status: "Inactive", updatedAt: "2025-03-15T09:35:20+05:30" },
];

const TAX_GROUPS = [
    { id: "TG-STD-18", label: "GST Standard 18%", components: ["CGST 9%", "SGST 9%"], appliesTo: ["Domestic Sales"], updatedAt: "2025-09-30T14:45:10+05:30" },
    { id: "TG-INT-18", label: "Interstate 18%", components: ["IGST 18%"], appliesTo: ["Interstate Sales", "Exports (as applicable)"], updatedAt: "2025-09-30T14:45:10+05:30" },
    { id: "TG-ZERO", label: "Zero Rated (0%)", components: ["0%"], appliesTo: ["SEZ / LUT / Exports"], updatedAt: "2025-09-30T14:45:10+05:30" },
];

const JURISDICTIONS = [
    { code: "IN-DL", name: "Delhi" },
    { code: "IN-MH", name: "Maharashtra" },
    { code: "IN-KA", name: "Karnataka" },
    { code: "IN-TN", name: "Tamil Nadu" },
    { code: "IN-WB", name: "West Bengal" },
    { code: "IN-UP", name: "Uttar Pradesh" },
    { code: "IN-GJ", name: "Gujarat" },
];

export default function SettingsTax() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState("");
    const [openModal, setOpenModal] = useState(null); // 'save' | 'reset' | 'info' | null

    const filteredRates = useMemo(() => {
        const q = filter.trim().toLowerCase();
        if (!q) return TAX_RATES;
        return TAX_RATES.filter(r =>
            [r.name, r.kind, r.rate, r.jurisdiction, r.id].join(" ").toLowerCase().includes(q)
        );
    }, [filter]);

    const handlePrint = () => {
        const root = document.body;
        if (!root) return;
        root.classList.add("print-section-mode");
        window.focus();
        window.print();
        setTimeout(() => root.classList.remove("print-section-mode"), 300);
    };

    const exportJSON = () => {
        const payload = { exportedAt: fmtDateTime(new Date().toISOString()), rates: TAX_RATES, groups: TAX_GROUPS, jurisdictions: JURISDICTIONS };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `settings-tax-export-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <Wrapper>
            <Header>
                <div className="breadcrumbs">
                    <NavLink to="/home">Home</NavLink>
                    <span>/</span>
                    <NavLink to="/settings">Settings</NavLink>
                    <span>/</span>
                    <span className="current">Tax</span>
                </div>

                <div className="title">
                    <h1>Tax Settings</h1>
                    <div className="meta">
                        <span>Last updated: {fmtDateTime(commitISO)}</span>
                        <span>Build: {fmtDate(buildISO)}</span>
                    </div>
                </div>

                <Actions>
                    <button onClick={() => setOpenModal("save")} title="Save changes (demo)">
                        Save Changes
                    </button>
                    <button onClick={() => setOpenModal("reset")} title="Reset to defaults (demo)">
                        Reset to Defaults
                    </button>
                    <button onClick={exportJSON} title="Export visible configuration">Export JSON</button>
                    <button onClick={handlePrint} title="Print this page">Print</button>
                </Actions>
            </Header>

            <Subnav>
                <a href="#overview">Overview</a>
                <a href="#rates">Tax Rates</a>
                <a href="#groups">Tax Groups</a>
                <a href="#jurisdictions">Jurisdictions</a>
                <a href="#compliance">Compliance</a>
                <a href="#links">Quick Links</a>
            </Subnav>

            {/* PRINT AREA */}
            <div id="search-print-area">
                {/* OVERVIEW */}
                <Grid id="overview">
                    <Card>
                        <div className="cardHeader">
                            <h3>Organization Tax Profile</h3>
                            <Badge>Read-only</Badge>
                        </div>
                        <div className="cardBody cols">
                            <div>
                                <div className="kv"><span>Legal Name</span><strong>Arena Lifecare Pvt Ltd</strong></div>
                                <div className="kv"><span>GSTIN</span><strong>07AALCA0001Z5</strong></div>
                                <div className="kv"><span>PAN</span><strong>AALCA0001</strong></div>
                                <div className="kv"><span>Registration Type</span><strong>Regular</strong></div>
                            </div>
                            <div>
                                <div className="kv"><span>Filing Frequency</span><strong>Monthly (GSTR-1/3B)</strong></div>
                                <div className="kv"><span>FY Start</span><strong>{fmtDate("2025-04-01T00:00:00+05:30")}</strong></div>
                                <div className="kv"><span>FY End</span><strong>{fmtDate("2026-03-31T23:59:59+05:30")}</strong></div>
                                <div className="kv"><span>Timezone</span><strong>Asia/Kolkata</strong></div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="cardHeader">
                            <h3>Calculation Preferences</h3>
                            <Pill>Inclusive Pricing</Pill>
                            <Pill>Round per Line</Pill>
                            <Pill>Tax on Shipping</Pill>
                        </div>
                        <div className="cardBody">
                            <ul className="bullets">
                                <li>Price list is inclusive of GST; line tax shown separately on invoices.</li>
                                <li>Rounding precision: 2 decimals at line-level; totals can differ by ±0.01.</li>
                                <li>Shipping charges considered taxable by default.</li>
                            </ul>
                            <div className="note">
                                Need other behaviours? See <NavLink to="/settings/numbering">Numbering</NavLink> and <NavLink to="/settings/print-templates">Print Templates</NavLink>.
                            </div>
                        </div>
                    </Card>
                </Grid>

                {/* RATES */}
                <Card id="rates">
                    <div className="cardHeader">
                        <h3>Tax Rates</h3>
                        <div className="tools">
                            <input
                                type="text"
                                placeholder="Filter rates (e.g., 18, CGST, interstate)"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                aria-label="Filter tax rates"
                            />
                            <Kbd>/</Kbd>
                        </div>
                    </div>

                    <Table>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Rate</th>
                                <th>Kind</th>
                                <th>Jurisdiction</th>
                                <th>Effective From</th>
                                <th>Status</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRates.map(r => (
                                <tr key={r.id}>
                                    <td className="code">{r.id}</td>
                                    <td>{r.name}</td>
                                    <td>{r.kind}</td>
                                    <td>{r.jurisdiction}</td>
                                    <td>{fmtDate(r.effectiveFrom)}</td>
                                    <td>
                                        {r.status === "Active" ? <Badge tone="success">Active</Badge> : <Badge tone="muted">Inactive</Badge>}
                                    </td>
                                    <td>{fmtDateTime(r.updatedAt)}</td>
                                </tr>
                            ))}
                            {filteredRates.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="empty">No rates match your filter.</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <div className="tableLinks">
                        <NavLink to="/products/price-lists">Go to Price Lists</NavLink>
                        <span>•</span>
                        <NavLink to="/medicines/hsn-gst">HSN / GST Mapping</NavLink>
                    </div>
                </Card>

                {/* GROUPS */}
                <Card id="groups">
                    <div className="cardHeader">
                        <h3>Tax Groups</h3>
                        <Badge>Display</Badge>
                    </div>
                    <Table dense>
                        <thead>
                            <tr>
                                <th>Group ID</th>
                                <th>Label</th>
                                <th>Components</th>
                                <th>Applies To</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TAX_GROUPS.map(g => (
                                <tr key={g.id}>
                                    <td className="code">{g.id}</td>
                                    <td>{g.label}</td>
                                    <td>{g.components.join(" + ")}</td>
                                    <td>{g.appliesTo.join(", ")}</td>
                                    <td>{fmtDateTime(g.updatedAt)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>

                {/* JURISDICTIONS */}
                <Card id="jurisdictions">
                    <div className="cardHeader">
                        <h3>Jurisdictions</h3>
                        <Badge>India</Badge>
                    </div>
                    <div className="chips">
                        {JURISDICTIONS.map(j => (
                            <Pill as="span" key={j.code} title={j.code}>{j.name}</Pill>
                        ))}
                    </div>
                    <div className="note">
                        Configure warehouse-region mapping in <NavLink to="/settings/warehouses">Warehouses</NavLink> and company branches in <NavLink to="/settings/locations">Locations</NavLink>.
                    </div>
                </Card>

                {/* COMPLIANCE */}
                <Grid id="compliance">
                    <Card>
                        <div className="cardHeader">
                            <h3>GST Returns</h3>
                            <Badge>Monthly</Badge>
                        </div>
                        <div className="cardBody cols">
                            <div>
                                <div className="kv"><span>GSTR-1</span><strong>Due by {fmtDate("2025-10-11T00:00:00+05:30")}</strong></div>
                                <div className="kv"><span>GSTR-3B</span><strong>Due by {fmtDate("2025-10-20T00:00:00+05:30")}</strong></div>
                                <div className="kv"><span>Next Window</span><strong>{fmtDateTime("2025-10-05T09:00:00+05:30")}</strong></div>
                            </div>
                            <div>
                                <ul className="bullets">
                                    <li>Report center: <NavLink to="/reports/gst">GST</NavLink></li>
                                    <li>Upload mapping available in <NavLink to="/tools/import-export">Import/Export</NavLink></li>
                                    <li>Tax ledgers view in <NavLink to="/finance/ledgers">Finance → Ledgers</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="cardHeader">
                            <h3>Documents Affected</h3>
                            <Badge>Read-only</Badge>
                        </div>
                        <ul className="bullets">
                            <li>Invoices <NavLink to="/invoices">list</NavLink>, credit notes <NavLink to="/invoices/credit-notes">here</NavLink>.</li>
                            <li>Sales Orders <NavLink to="/orders">overview</NavLink>, Returns <NavLink to="/sales/returns">here</NavLink>.</li>
                            <li>Products and HSN mapping in <NavLink to="/medicines/hsn-gst">HSN / GST</NavLink> and <NavLink to="/products">Catalog</NavLink>.</li>
                        </ul>
                    </Card>
                </Grid>

                {/* LINKS */}
                <Card id="links">
                    <div className="cardHeader">
                        <h3>Quick Links</h3>
                    </div>
                    <div className="quickLinks">
                        <NavLink to="/settings">Settings Home</NavLink>
                        <NavLink to="/settings/appearance">Appearance</NavLink>
                        <NavLink to="/settings/currencies">Currencies</NavLink>
                        <NavLink to="/settings/units">Units</NavLink>
                        <NavLink to="/settings/numbering">Document Numbering</NavLink>
                        <NavLink to="/settings/print-templates">Print Templates</NavLink>
                        <NavLink to="/reports/finance">Finance Reports</NavLink>
                        <NavLink to="/finance/gst-returns">GST Returns</NavLink>
                        <NavLink to="/products/price-lists">Price Lists</NavLink>
                        <NavLink to="/invoices">Invoices</NavLink>
                        <NavLink to="/receipts">Receipts</NavLink>
                        <NavLink to="/tools/import-export">Import / Export</NavLink>
                    </div>
                </Card>
            </div>

            {/* print CSS */}
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

            {/* Demo modal */}
            {openModal && (
                <ModalOverlay onClick={() => setOpenModal(null)} aria-modal="true" role="dialog" aria-labelledby="demo-modal-title">
                    <ModalCard onClick={(e) => e.stopPropagation()}>
                        <h3 id="demo-modal-title">Demo Mode</h3>
                        <p>{DEMO_NOTICE}</p>
                        {openModal === "save" && <p>“Save Changes” is disabled on this demo. Explore other pages using the links provided.</p>}
                        {openModal === "reset" && <p>“Reset to Defaults” is disabled on this demo. Configuration shown here is illustrative.</p>}
                        {openModal === "info" && <p>Use the quick links to navigate. Deep links are stable for showcasing flows.</p>}

                        <div className="modalActions">
                            <button onClick={() => setOpenModal(null)}>Close</button>
                            <button onClick={() => { setOpenModal(null); navigate("/reports/gst"); }}>Open Reports → GST</button>
                        </div>
                    </ModalCard>
                </ModalOverlay>
            )}
        </Wrapper>
    );
}
