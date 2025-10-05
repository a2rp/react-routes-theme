import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./styled";
import { MdOpenInNew, MdPrint, MdDownload, MdContentCopy, MdFilterList, MdInfoOutline } from "react-icons/md";

/** Date formatting helpers (required format)
 * Date: Sat Oct 04 2025
 * Date+Time: Sat Oct 04 2025 15:38:20hrs
 * Time: 15:38:20hrs
 */
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad2 = (n) => String(n).padStart(2, "0");
const fmtDate = (iso) => {
    const d = new Date(iso);
    return `${dayNames[d.getDay()]} ${monNames[d.getMonth()]} ${pad2(d.getDate())} ${d.getFullYear()}`;
};
const fmtTime = (iso) => {
    const d = new Date(iso);
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}hrs`;
};
const fmtDateTime = (iso) => `${fmtDate(iso)} ${fmtTime(iso)}`;

const DEMO_INFO = "Demo mode: Data is read-only.";

/** Inline Confirm Dialog (self-made, no browser alerts) */
function ConfirmDialog({ open, title = "Are you sure?", message, confirmText = "OK", onConfirm, onClose }) {
    if (!open) return null;
    return (
        <S.ModalBackdrop role="dialog" aria-modal="true" aria-labelledby="cd-title" onClick={onClose}>
            <S.ModalCard className="card" onClick={(e) => e.stopPropagation()}>
                <h3 id="cd-title">{title}</h3>
                <p className="muted">{message}</p>
                <div className="actions">
                    <button onClick={onClose}>Close</button>
                    <button onClick={() => { onConfirm?.(); onClose(); }} className="accent">Confirm</button>
                </div>
            </S.ModalCard>
        </S.ModalBackdrop>
    );
}

export default function ReportCustomers() {
    const { pathname } = useLocation();
    const [activeTab, setActiveTab] = useState("all");
    const [dialog, setDialog] = useState({ open: false, message: "" });
    const [copied, setCopied] = useState(false);

    // Pre-computed display-only figures (no calculations here)
    const kpis = useMemo(() => ([
        { label: "Total Customers", value: "1,248", sub: "incl. prospects", tooltip: "Total known customers & prospects" },
        { label: "Active (30d)", value: "312", sub: "recent orders", tooltip: "Placed at least one order in the last 30 days" },
        { label: "At Risk", value: "78", sub: "low activity", tooltip: "Haven’t ordered in 60–90 days" },
        { label: "VIP", value: "54", sub: "high value", tooltip: "Top segment by total revenue" },
    ]), []);

    // Display rows (static demo dataset)
    const rows = useMemo(() => ([
        {
            id: "CUST-1001",
            name: "Nova Health Supplies",
            contact: "Priya Sharma",
            phone: "+91 98765 43210",
            email: "ops@novahealth.example",
            joined: "2024-07-15T11:24:03+05:30",
            lastOrderAt: "2025-09-26T18:28:57+05:30",
            lifetimeValue: "₹ 12,40,000",
            status: "Active",
            tags: ["Hospital", "GST Registered"],
            lastOrderId: "ORD-3051",
            lastInvoiceId: "INV-2031",
        },
        {
            id: "CUST-1002",
            name: "Blue Cedar Pharmacy",
            contact: "Arun Kumar",
            phone: "+91 98200 11122",
            email: "owner@bluecedar.example",
            joined: "2023-11-02T09:12:40+05:30",
            lastOrderAt: "2025-08-11T14:05:12+05:30",
            lifetimeValue: "₹ 7,90,300",
            status: "At-Risk",
            tags: ["Retail", "Priority"],
            lastOrderId: "ORD-2998",
            lastInvoiceId: "INV-1997",
        },
        {
            id: "CUST-1003",
            name: "Aster Diagnostics",
            contact: "Meera K",
            phone: "+91 99876 22001",
            email: "procurement@asterdx.example",
            joined: "2022-04-19T17:01:11+05:30",
            lastOrderAt: "2025-09-02T10:21:45+05:30",
            lifetimeValue: "₹ 18,54,900",
            status: "VIP",
            tags: ["Diagnostics", "Enterprise"],
            lastOrderId: "ORD-3020",
            lastInvoiceId: "INV-2014",
        },
        {
            id: "CUST-1004",
            name: "City Care Clinic",
            contact: "Dr. Neha Gupta",
            phone: "+91 98111 88990",
            email: "hello@citycare.example",
            joined: "2024-02-01T12:30:00+05:30",
            lastOrderAt: "2025-07-28T16:03:30+05:30",
            lifetimeValue: "₹ 3,25,400",
            status: "Dormant",
            tags: ["Clinic"],
            lastOrderId: "ORD-2880",
            lastInvoiceId: "INV-1920",
        },
    ]), []);

    const onCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            setDialog({ open: true, message: "Could not copy the link. You can manually copy from the address bar." });
        }
    };

    const onExport = () => {
        setDialog({ open: true, message: "This is a display-only demo. Export is disabled." });
    };

    const onPrint = () => {
        try {
            document.body.classList.add("print-section-mode");
            window.print();
        } finally {
            document.body.classList.remove("print-section-mode");
        }
    };

    const FilterBar = (
        <S.Filters className="card">
            <div className="left">
                <div className="chip-row">
                    <button className={`chip ${activeTab === "all" ? "chip-active" : ""}`} onClick={() => setActiveTab("all")} title="Show all">All</button>
                    <button className={`chip ${activeTab === "active" ? "chip-active" : ""}`} onClick={() => setActiveTab("active")} title="Active in 30 days">Active</button>
                    <button className={`chip ${activeTab === "vip" ? "chip-active" : ""}`} onClick={() => setActiveTab("vip")} title="High value customers">VIP</button>
                    <button className={`chip ${activeTab === "risk" ? "chip-active" : ""}`} onClick={() => setActiveTab("risk")} title="Low activity">At-Risk</button>
                    <button className={`chip ${activeTab === "dormant" ? "chip-active" : ""}`} onClick={() => setActiveTab("dormant")} title="No orders in 90+ days">Dormant</button>
                </div>
            </div>
            <div className="right">
                <div className="hint muted" title={DEMO_INFO}><MdInfoOutline size={16} /> <span>{DEMO_INFO}</span></div>
                <div className="split">
                    <button className="icon" title="Filters (demo)">
                        <MdFilterList size={18} />
                        <span>Filters</span>
                    </button>
                    <button className="icon" onClick={onExport} title="Export CSV (demo)">
                        <MdDownload size={18} />
                        <span>Export</span>
                    </button>
                    <button className="icon" onClick={onCopyLink} title="Copy page link">
                        <MdContentCopy size={18} />
                        <span>{copied ? "Copied" : "Share"}</span>
                    </button>
                    <button className="icon" onClick={onPrint} title="Print this report">
                        <MdPrint size={18} />
                        <span>Print</span>
                    </button>
                </div>
            </div>
        </S.Filters>
    );

    return (
        <S.Page>
            {/* print-only CSS (scoped) */}
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

            <S.Header className="card">
                <div className="breadcrumbs">
                    <Link to="/home">Home</Link>
                    <span>/</span>
                    <Link to="/reports">Reports</Link>
                    <span>/</span>
                    <span aria-current="page">Customers</span>
                </div>
                <div className="title-row">
                    <div className="left">
                        <h1>Customer Insights</h1>
                        <p className="muted">
                            Snapshot generated on <strong>{fmtDateTime(new Date().toISOString())}</strong>
                        </p>
                    </div>
                    <div className="right">
                        <Link className="ghost" to="/customers" title="Go to Customers">
                            Customers <MdOpenInNew size={16} />
                        </Link>
                        <Link className="ghost" to="/reports/sales" title="Open Sales Report">
                            Sales Report <MdOpenInNew size={16} />
                        </Link>
                        <Link className="ghost" to="/reports/inventory" title="Open Inventory Report">
                            Inventory Report <MdOpenInNew size={16} />
                        </Link>
                    </div>
                </div>
            </S.Header>

            <div id="search-print-area">
                <S.KPIs>
                    {kpis.map((k) => (
                        <S.KPI key={k.label} className="card" title={k.tooltip}>
                            <div className="label">{k.label}</div>
                            <div className="value">{k.value}</div>
                            <div className="sub muted">{k.sub}</div>
                        </S.KPI>
                    ))}
                </S.KPIs>

                {FilterBar}

                <S.Grid>
                    {/* Left: main table */}
                    <S.Column>
                        <S.Section className="card">
                            <div className="section-head">
                                <h2>Customer List</h2>
                                <div className="section-actions">
                                    <Link to="/customers/new" className="ghost" title="Create (demo)">
                                        New
                                    </Link>
                                </div>
                            </div>

                            <S.Table role="table" aria-label="Customers table">
                                <div className="thead" role="rowgroup">
                                    <div className="tr" role="row">
                                        <div className="th" role="columnheader">Customer</div>
                                        <div className="th" role="columnheader">Contact</div>
                                        <div className="th" role="columnheader">Joined</div>
                                        <div className="th" role="columnheader">Last Order</div>
                                        <div className="th" role="columnheader">LTV</div>
                                        <div className="th" role="columnheader">Status</div>
                                        <div className="th" role="columnheader">Actions</div>
                                    </div>
                                </div>
                                <div className="tbody" role="rowgroup">
                                    {rows.map((r) => (
                                        <div className="tr" role="row" key={r.id}>
                                            <div className="td" role="cell">
                                                <div className="title">
                                                    <Link to={`/customers/${r.id}`} className="link">{r.name}</Link>
                                                </div>
                                                <div className="meta muted">
                                                    <span>{r.id}</span>
                                                    {r.tags?.length ? <span className="tags">{r.tags.join(" • ")}</span> : null}
                                                </div>
                                            </div>
                                            <div className="td" role="cell">
                                                <div>{r.contact}</div>
                                                <div className="muted">{r.phone}</div>
                                                <div className="muted">{r.email}</div>
                                            </div>
                                            <div className="td" role="cell">
                                                <div>{fmtDate(r.joined)}</div>
                                                <div className="muted">{fmtTime(r.joined)}</div>
                                            </div>
                                            <div className="td" role="cell">
                                                <Link to={`/orders/${r.lastOrderId}`} className="link">{r.lastOrderId}</Link>
                                                <div className="muted">{fmtDateTime(r.lastOrderAt)}</div>
                                            </div>
                                            <div className="td" role="cell">
                                                <strong>{r.lifetimeValue}</strong>
                                            </div>
                                            <div className="td" role="cell">
                                                <span className={`badge ${r.status.toLowerCase().replace(/\s/g, '-')}`}>{r.status}</span>
                                            </div>
                                            <div className="td actions" role="cell">
                                                <Link to={`/customers/${r.id}`} className="ghost small" title="View details">View</Link>
                                                <Link to={`/customers/${r.id}/edit`} className="ghost small" title="Edit (demo)">Edit</Link>
                                                <Link to={`/invoices/${r.lastInvoiceId}`} className="ghost small" title="Last invoice">Invoice</Link>
                                                <Link to={`/customers/${r.id}/print`} className="ghost small" title="Print profile">Print</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </S.Table>

                            <div className="table-footer">
                                <div className="muted">Showing 1–{rows.length} of 1,248</div>
                                <div className="pager">
                                    <button className="ghost" title="Previous (demo)">Prev</button>
                                    <button className="ghost" title="Next (demo)">Next</button>
                                </div>
                            </div>
                        </S.Section>

                        <S.Section className="card">
                            <div className="section-head">
                                <h2>Segments</h2>
                            </div>
                            <S.Segments>
                                <Link to="/reports/customers" className={`seg ${activeTab === "all" ? "seg-active" : ""}`}>All</Link>
                                <Link to="/reports/customers" className={`seg ${activeTab === "active" ? "seg-active" : ""}`}>Active</Link>
                                <Link to="/reports/customers" className={`seg ${activeTab === "vip" ? "seg-active" : ""}`}>VIP</Link>
                                <Link to="/reports/customers" className={`seg ${activeTab === "risk" ? "seg-active" : ""}`}>At-Risk</Link>
                                <Link to="/reports/customers" className={`seg ${activeTab === "dormant" ? "seg-active" : ""}`}>Dormant</Link>
                            </S.Segments>
                            <div className="muted">
                                Segments are predefined for demo. Explore <Link to="/reports/finance" className="link">Finance</Link> or <Link to="/reports/sales" className="link">Sales</Link> for more.
                            </div>
                        </S.Section>
                    </S.Column>

                    {/* Right: top cards & quick links */}
                    <S.Column>
                        <S.Section className="card">
                            <div className="section-head">
                                <h2>Top Customers</h2>
                            </div>
                            <S.TopList>
                                <div className="item">
                                    <div className="meta">
                                        <Link to="/customers/CUST-1003" className="title link">Aster Diagnostics</Link>
                                        <span className="muted">Last purchase {fmtDate("2025-09-02T10:21:45+05:30")}</span>
                                    </div>
                                    <div className="val">₹ 18,54,900</div>
                                </div>
                                <div className="item">
                                    <div className="meta">
                                        <Link to="/customers/CUST-1001" className="title link">Nova Health Supplies</Link>
                                        <span className="muted">Last purchase {fmtDate("2025-09-26T18:28:57+05:30")}</span>
                                    </div>
                                    <div className="val">₹ 12,40,000</div>
                                </div>
                                <div className="item">
                                    <div className="meta">
                                        <Link to="/customers/CUST-1002" className="title link">Blue Cedar Pharmacy</Link>
                                        <span className="muted">Last purchase {fmtDate("2025-08-11T14:05:12+05:30")}</span>
                                    </div>
                                    <div className="val">₹ 7,90,300</div>
                                </div>
                            </S.TopList>
                            <div className="muted mt8">
                                View complete list from <Link to="/reports/finance" className="link">Finance</Link>.
                            </div>
                        </S.Section>

                        <S.Section className="card">
                            <div className="section-head">
                                <h2>Quick Links</h2>
                            </div>
                            <S.Links>
                                <Link to="/customers">All Customers</Link>
                                <Link to="/orders">Sales Orders</Link>
                                <Link to="/invoices">Invoices</Link>
                                <Link to="/receipts">Receipts</Link>
                                <Link to="/reports/sales">Sales Report</Link>
                                <Link to="/reports/procurement">Procurement Report</Link>
                                <Link to="/finance/ledgers">Ledgers</Link>
                                <Link to="/admin/users">Users</Link>
                                <Link to="/settings/appearance">Appearance</Link>
                                <Link to="/tools/theme-tokens">Theme Tokens</Link>
                            </S.Links>
                        </S.Section>

                        <S.Section className="card">
                            <div className="section-head">
                                <h2>Recent Activity</h2>
                            </div>
                            <S.Timeline>
                                <div className="row">
                                    <div className="dot" />
                                    <div className="body">
                                        <div className="title">Invoice <Link to="/invoices/INV-2031" className="link">INV-2031</Link> issued</div>
                                        <div className="muted">{fmtDateTime("2025-09-26T18:28:57+05:30")}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="dot" />
                                    <div className="body">
                                        <div className="title">Order <Link to="/orders/ORD-3051" className="link">ORD-3051</Link> completed</div>
                                        <div className="muted">{fmtDateTime("2025-09-24T10:12:00+05:30")}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="dot" />
                                    <div className="body">
                                        <div className="title">New customer <Link to="/customers/CUST-1004" className="link">City Care Clinic</Link> onboarded</div>
                                        <div className="muted">{fmtDateTime("2025-07-28T16:03:30+05:30")}</div>
                                    </div>
                                </div>
                            </S.Timeline>
                        </S.Section>
                    </S.Column>
                </S.Grid>
            </div>

            <ConfirmDialog
                open={dialog.open}
                message={dialog.message}
                onClose={() => setDialog({ open: false, message: "" })}
                onConfirm={() => { }}
            />
        </S.Page>
    );
}
