import React, { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    Page,
    Header,
    Crumbs,
    Title,
    Meta,
    Actions,
    Grid,
    Card,
    KPICard,
    KPIValue,
    KPISub,
    SectionHead,
    TableWrap,
    Table,
    Tag,
    Toolbar,
    FiltersRow,
    ModalBackdrop,
    ModalCard,
    ModalActions,
    Note,
    StatRow,
    List,
    LinkRow,
    InlineCode,
} from "./styled";

const fmtDate = (iso) => {
    const d = iso ? new Date(iso) : new Date();
    return d.toDateString(); // e.g., "Sat Oct 04 2025"
};
const fmtDateTime = (iso) => {
    const d = iso ? new Date(iso) : new Date();
    const t = d.toTimeString().slice(0, 8);
    return `${d.toDateString()} ${t}hrs`; // e.g., "Sat Oct 04 2025 15:38:20hrs"
};
const fmtTime = (iso) => {
    const d = iso ? new Date(iso) : new Date();
    return `${d.toTimeString().slice(0, 8)}hrs`; // e.g., "15:38:20hrs"
};

const ReportProcurement = () => {
    const { pathname } = useLocation();
    const [showDemoModal, setShowDemoModal] = useState(false);

    // demo, display-only—static data for a premium feel
    const asOfISO =
        typeof __APP_COMMIT_ISO__ !== "undefined"
            ? __APP_COMMIT_ISO__
            : typeof __APP_BUILD_ISO__ !== "undefined"
                ? __APP_BUILD_ISO__
                : new Date().toISOString();

    const kpis = useMemo(
        () => [
            { key: "openPOs", label: "Open POs", value: "38", sub: "Awaiting receipts" },
            { key: "onTime", label: "On-time Delivery", value: "92%", sub: "Last 30 days" },
            { key: "spendMonth", label: "Month Spend", value: "₹ 46.8L", sub: "Oct 2025" },
            { key: "savings", label: "Realized Savings", value: "₹ 5.2L", sub: "vs. baseline" },
            { key: "leadTime", label: "Avg Lead Time", value: "6.3d", sub: "PO → GRN" },
            { key: "grnPending", label: "Pending GRN", value: "11", sub: "Receipt in progress" },
        ],
        []
    );

    const poRows = useMemo(
        () => [
            { code: "PO-1011", vendor: "Acme Surgicals", status: "Open", amount: "₹ 1,28,000", date: "2025-10-02T11:05:20+05:30", link: "/purchase-orders/PO-1011" },
            { code: "PO-1010", vendor: "Prism Pharma", status: "Partially Received", amount: "₹ 3,64,500", date: "2025-10-01T16:25:41+05:30", link: "/purchase-orders/PO-1010" },
            { code: "PO-1009", vendor: "Medichem Labs", status: "Open", amount: "₹ 86,300", date: "2025-09-29T12:02:10+05:30", link: "/purchase-orders/PO-1009" },
            { code: "PO-1008", vendor: "BlueLeaf Distributors", status: "Closed", amount: "₹ 2,18,900", date: "2025-09-24T09:15:00+05:30", link: "/purchase-orders/PO-1008" },
            { code: "PO-1007", vendor: "NeoMed Devices", status: "Open", amount: "₹ 5,12,000", date: "2025-09-22T14:40:08+05:30", link: "/purchase-orders/PO-1007" },
            { code: "PO-1006", vendor: "Zenith Health", status: "Closed", amount: "₹ 1,02,450", date: "2025-09-18T10:30:12+05:30", link: "/purchase-orders/PO-1006" },
        ],
        []
    );

    const receipts = useMemo(
        () => [
            { grn: "GRN-3221", po: "PO-1008", vendor: "BlueLeaf Distributors", qty: "1,240", ts: "2025-09-26T18:38:20+05:30", link: "/shipments/SH-7781" },
            { grn: "GRN-3218", po: "PO-1006", vendor: "Zenith Health", qty: "540", ts: "2025-09-19T11:02:04+05:30", link: "/shipments/SH-7772" },
            { grn: "GRN-3215", po: "PO-1005", vendor: "Acme Surgicals", qty: "300", ts: "2025-09-17T15:48:59+05:30", link: "/shipments/SH-7767" },
        ],
        []
    );

    const vendorTop = useMemo(
        () => [
            { vendor: "Prism Pharma", score: "4.8/5", onTime: "96%", defects: "0.3%", link: "/vendors/V-PRISM" },
            { vendor: "Acme Surgicals", score: "4.6/5", onTime: "92%", defects: "0.5%", link: "/vendors/V-ACME" },
            { vendor: "Medichem Labs", score: "4.5/5", onTime: "90%", defects: "0.6%", link: "/vendors/V-MED" },
            { vendor: "BlueLeaf Distributors", score: "4.4/5", onTime: "88%", defects: "0.9%", link: "/vendors/V-BLUE" },
        ],
        []
    );

    const spendByCategory = useMemo(
        () => [
            { cat: "Antibiotics", amount: "₹ 14.2L", link: "/reports/procurement?category=Antibiotics" },
            { cat: "Surgical", amount: "₹ 10.6L", link: "/reports/procurement?category=Surgical" },
            { cat: "Consumables", amount: "₹ 8.9L", link: "/reports/procurement?category=Consumables" },
            { cat: "Devices", amount: "₹ 7.1L", link: "/reports/procurement?category=Devices" },
            { cat: "PPE", amount: "₹ 6.0L", link: "/reports/procurement?category=PPE" },
        ],
        []
    );

    const actions = {
        exportJsonHref:
            "data:application/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify({ kpis, poRows, receipts, vendorTop, spendByCategory }, null, 2)),
    };

    return (
        <Page>
            {/* print-only setup */}
            <style>{`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}</style>

            <Header>
                <Crumbs aria-label="Breadcrumbs">
                    <NavLink to="/home">Home</NavLink>
                    <span>/</span>
                    <NavLink to="/reports">Reports</NavLink>
                    <span>/</span>
                    <span className="current">Procurement</span>
                </Crumbs>

                <Meta>
                    <span>Report</span>
                    <InlineCode>/reports/procurement</InlineCode>
                    <span className="dot">•</span>
                    <span>As of</span>
                    <strong title={fmtDateTime(asOfISO)}>{fmtDate(asOfISO)}</strong>
                </Meta>

                <Title>
                    <h1>Procurement Overview</h1>
                    <p>Spend, suppliers, purchase orders, receipts & risk signals at a glance.</p>
                </Title>

                <Actions className="toolbar">
                    <a className="btn" href={actions.exportJsonHref} download="procurement-report.json" title="Download as JSON">
                        Export JSON
                    </a>
                    <NavLink className="btn" to="/reports" title="Go to Reports Home">
                        Reports Home
                    </NavLink>
                    <NavLink className="btn" to="/purchase-orders" title="View Purchase Orders">
                        Purchase Orders
                    </NavLink>
                    <NavLink className="btn" to="/vendors" title="View Vendors">
                        Vendors
                    </NavLink>
                    <button className="btn" onClick={() => setShowDemoModal(true)} title="Demo only">
                        Close Period
                    </button>
                </Actions>
            </Header>

            {/* sticky filters / quick nav */}
            <Toolbar>
                <FiltersRow>
                    <div className="filter">
                        <label>Period</label>
                        <select disabled defaultValue="oct-2025" aria-label="Period (display only)">
                            <option value="oct-2025">Oct 2025</option>
                            <option value="sep-2025">Sep 2025</option>
                            <option value="aug-2025">Aug 2025</option>
                        </select>
                    </div>

                    <div className="filter">
                        <label>Warehouse</label>
                        <select disabled defaultValue="all">
                            <option value="all">All</option>
                            <option value="wh-mumbai">Mumbai DC</option>
                            <option value="wh-pune">Pune DC</option>
                        </select>
                    </div>

                    <div className="filter">
                        <label>Status</label>
                        <select disabled defaultValue="all">
                            <option value="all">All</option>
                            <option value="open">Open</option>
                            <option value="partial">Partially Received</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>

                    <div className="links">
                        <a href="#kpi" className="link">KPIs</a>
                        <a href="#po" className="link">Purchase Orders</a>
                        <a href="#receipts" className="link">Receipts</a>
                        <a href="#vendors" className="link">Vendors</a>
                        <a href="#spend" className="link">Spend</a>
                        <a href="#risks" className="link">Risks</a>
                    </div>
                </FiltersRow>
            </Toolbar>

            {/* PRINT AREA START */}
            <div id="search-print-area">
                {/* KPIs */}
                <SectionHead id="kpi">
                    <div>
                        <h2>Highlights</h2>
                        <p>Key procurement signals for the selected period.</p>
                    </div>
                    <div className="head-links">
                        <NavLink to="/finance" title="Open Finance">Finance</NavLink>
                        <NavLink to="/inventory" title="Open Inventory">Inventory</NavLink>
                        <NavLink to="/tools/import-export" title="Import / Export">Import / Export</NavLink>
                    </div>
                </SectionHead>

                <Grid cols={6} gap={12}>
                    {kpis.map((k) => (
                        <KPICard key={k.key}>
                            <span className="k-label">{k.label}</span>
                            <KPIValue>{k.value}</KPIValue>
                            <KPISub>{k.sub}</KPISub>
                        </KPICard>
                    ))}
                </Grid>

                {/* Purchase Orders */}
                <SectionHead id="po">
                    <div>
                        <h2>Purchase Orders</h2>
                        <p>Track open, partial, and closed POs—navigate into details with deep links.</p>
                    </div>
                    <div className="head-links">
                        <NavLink to="/purchase-orders/new" title="Create PO (demo disabled)">New PO</NavLink>
                        <NavLink to="/purchase-orders" title="All POs">All POs</NavLink>
                    </div>
                </SectionHead>

                <TableWrap>
                    <Table aria-label="Purchase Orders">
                        <thead>
                            <tr>
                                <th>PO</th>
                                <th>Vendor</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th>Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {poRows.map((r) => (
                                <tr key={r.code}>
                                    <td><NavLink to={r.link}>{r.code}</NavLink></td>
                                    <td><NavLink to={`/vendors/${encodeURIComponent(r.vendor.replace(/\s+/g, "-").toUpperCase())}`}>{r.vendor}</NavLink></td>
                                    <td>
                                        <Tag data-variant={r.status.replace(/\s+/g, "-").toLowerCase()}>{r.status}</Tag>
                                    </td>
                                    <td>{r.amount}</td>
                                    <td title={fmtDateTime(r.date)}>{fmtDate(r.date)}</td>
                                    <td className="row-actions">
                                        <NavLink to={`${r.link}/receipt`} title="Post receipt (demo)">Receipt</NavLink>
                                        <span className="sep">•</span>
                                        <NavLink to={`${r.link}/bill`} title="Create bill (demo)">Bill</NavLink>
                                        <span className="sep">•</span>
                                        <NavLink to={`${r.link}/print`} title="Print PO">Print</NavLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrap>

                {/* Receipts */}
                <SectionHead id="receipts">
                    <div>
                        <h2>Recent Receipts</h2>
                        <p>Latest GRNs and linked shipments.</p>
                    </div>
                    <div className="head-links">
                        <NavLink to="/receipts" title="All receipts">Receipts</NavLink>
                        <NavLink to="/shipments" title="All shipments">Shipments</NavLink>
                    </div>
                </SectionHead>

                <Grid cols={3} gap={12}>
                    {receipts.map((g) => (
                        <Card key={g.grn}>
                            <StatRow>
                                <strong>{g.grn}</strong>
                                <Tag data-variant="info">GRN</Tag>
                            </StatRow>
                            <List>
                                <li><span>PO</span><NavLink to={`/purchase-orders/${g.po}`}>{g.po}</NavLink></li>
                                <li><span>Vendor</span><NavLink to={`/vendors/${g.vendor.replace(/\s+/g, "-").toUpperCase()}`}>{g.vendor}</NavLink></li>
                                <li><span>Quantity</span><em>{g.qty}</em></li>
                                <li><span>Received</span><em title={fmtDateTime(g.ts)}>{fmtDate(g.ts)}</em></li>
                            </List>
                            <LinkRow>
                                <NavLink to={g.link} title="Open shipment">Open Shipment</NavLink>
                                <NavLink to={`/print/sticker/${g.grn}`} title="Print labels">Print Labels</NavLink>
                            </LinkRow>
                        </Card>
                    ))}
                </Grid>

                {/* Vendors */}
                <SectionHead id="vendors">
                    <div>
                        <h2>Vendor Performance</h2>
                        <p>Composite score, on-time %, and defects for the period.</p>
                    </div>
                    <div className="head-links">
                        <NavLink to="/vendors" title="Vendors">All Vendors</NavLink>
                        <NavLink to="/reports/supplier" title="Supplier Report">Supplier Report</NavLink>
                    </div>
                </SectionHead>

                <Grid cols={4} gap={12}>
                    {vendorTop.map((v) => (
                        <Card key={v.vendor}>
                            <h3 className="card-title"><NavLink to={v.link}>{v.vendor}</NavLink></h3>
                            <List>
                                <li><span>Score</span><em>{v.score}</em></li>
                                <li><span>On-time</span><em>{v.onTime}</em></li>
                                <li><span>Defects</span><em>{v.defects}</em></li>
                            </List>
                            <LinkRow>
                                <NavLink to={`${v.link}/edit`} title="Edit vendor (demo)">Edit</NavLink>
                                <NavLink to={`/reports/purchases?vendor=${encodeURIComponent(v.vendor)}`} title="View spend">View Spend</NavLink>
                            </LinkRow>
                        </Card>
                    ))}
                </Grid>

                {/* Spend */}
                <SectionHead id="spend">
                    <div>
                        <h2>Spend by Category</h2>
                        <p>Where your money goes—navigate into category-specific views.</p>
                    </div>
                    <div className="head-links">
                        <NavLink to="/finance" title="Finance">Finance</NavLink>
                        <NavLink to="/reports/finance" title="Finance report">Finance Report</NavLink>
                    </div>
                </SectionHead>

                <Grid cols={5} gap={12}>
                    {spendByCategory.map((s) => (
                        <Card key={s.cat}>
                            <StatRow>
                                <strong>{s.cat}</strong>
                                <Tag data-variant="neutral">Category</Tag>
                            </StatRow>
                            <h3 className="amount">{s.amount}</h3>
                            <LinkRow>
                                <NavLink to={s.link}>Open Category</NavLink>
                                <NavLink to={`/products?category=${encodeURIComponent(s.cat)}`}>Browse Items</NavLink>
                            </LinkRow>
                        </Card>
                    ))}
                </Grid>

                {/* Risks / Signals */}
                <SectionHead id="risks">
                    <div>
                        <h2>Risks & Signals</h2>
                        <p>Watchouts based on recent receipts and PO statuses.</p>
                    </div>
                    <div className="head-links">
                        <NavLink to="/inventory/reorder" title="Reorder planner">Reorder Planner</NavLink>
                        <NavLink to="/medicines/expiry-tracker" title="Near-expiry tracker">Expiry Tracker</NavLink>
                    </div>
                </SectionHead>

                <Grid cols={3} gap={12}>
                    <Card>
                        <h3 className="card-title">Near Expiry Lots</h3>
                        <List>
                            <li><span>MED-AMOX-500</span><em>Batch A13 — <NavLink to="/medicines/expiry-tracker">Nov 2025</NavLink></em></li>
                            <li><span>MED-PAR-650</span><em>Batch P22 — <NavLink to="/medicines/expiry-tracker">Dec 2025</NavLink></em></li>
                        </List>
                        <Note>Review reorder against shelf life to avoid write-offs.</Note>
                    </Card>

                    <Card>
                        <h3 className="card-title">Supply Delays (Watch)</h3>
                        <List>
                            <li><span>PO-1010</span><em>ETA slipped by 1.5d</em></li>
                            <li><span>PO-1007</span><em>Transit exception reported</em></li>
                        </List>
                        <LinkRow>
                            <NavLink to="/shipments" title="All shipments">Open Shipments</NavLink>
                            <NavLink to="/purchase-orders" title="All POs">Open POs</NavLink>
                        </LinkRow>
                    </Card>

                    <Card>
                        <h3 className="card-title">Spend Guardrails</h3>
                        <List>
                            <li><span>Devices</span><em>↑ 18% vs last month</em></li>
                            <li><span>Surgical</span><em>↑ 12% vs baseline</em></li>
                        </List>
                        <Note>Validate price lists and approvals; review vendor mix.</Note>
                    </Card>
                </Grid>
            </div>
            {/* PRINT AREA END */}

            {/* demo modal (own component, no browser alerts) */}
            {showDemoModal && (
                <ModalBackdrop role="dialog" aria-modal="true" onClick={() => setShowDemoModal(false)}>
                    <ModalCard onClick={(e) => e.stopPropagation()}>
                        <h3>Demo mode</h3>
                        <p>This action is disabled in the demo. Explore reports, deep links, and printing from the toolbar.</p>
                        <ModalActions>
                            <button onClick={() => setShowDemoModal(false)}>Got it</button>
                            <NavLink to="/reports" className="btn-link">Go to Reports</NavLink>
                        </ModalActions>
                    </ModalCard>
                </ModalBackdrop>
            )}
        </Page>
    );
};

export default ReportProcurement;
