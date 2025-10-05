import React, { useMemo, useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiPrinter, FiInfo, FiExternalLink, FiAlertTriangle, FiHash, FiSettings } from 'react-icons/fi';
import { Wrapper, Header, Crumbs, Actions, Tabs, Card, TableWrap, Badge, Btn, Grid, Kpi, Token, Hint, FooterLinks, ModalBackdrop, ModalCard } from './styled';

/** Small util: required date/time formats (client-only, no persistence) */
function fmtDate(d = new Date()) {
    // Sat Oct 04 2025
    const str = d.toDateString(); // e.g., Sat Oct 04 2025
    return str;
}
function fmtDateTime(d = new Date()) {
    // Sat Oct 04 2025 15:38:20hrs
    const pad = (n) => String(n).padStart(2, '0');
    const time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
    return `${fmtDate(d)} ${time}`;
}
function fmtTime(d = new Date()) {
    // 15:38:20hrs
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}hrs`;
}

/** Static demo data (display-only). Examples pre-computed for clarity. */
const SCHEMES = [
    { entity: 'Invoices', code: 'INV', pattern: 'INV-{YYYY}-{MM}-{####}', example: 'INV-2025-10-0007', next: 'INV-2025-10-0008', scope: 'Global', reset: 'Monthly (MM)', link: '/invoices' },
    { entity: 'Receipts', code: 'RCPT', pattern: 'RCPT-{YYYY}-{MM}-{####}', example: 'RCPT-2025-10-0041', next: 'RCPT-2025-10-0042', scope: 'Global', reset: 'Monthly (MM)', link: '/receipts' },
    { entity: 'Orders', code: 'SO', pattern: 'SO-{YYYY}-{MM}-{#####}', example: 'SO-2025-10-01234', next: 'SO-2025-10-01235', scope: 'Global', reset: 'Monthly (MM)', link: '/orders' },
    { entity: 'Purchase Orders', code: 'PO', pattern: 'PO-{YYYY}-{MM}-{####}', example: 'PO-2025-10-0199', next: 'PO-2025-10-0200', scope: 'Global', reset: 'Monthly (MM)', link: '/purchase-orders' },
    { entity: 'Shipments', code: 'SHP', pattern: 'SHP-{YYYY}-{MM}-{####}', example: 'SHP-2025-10-0450', next: 'SHP-2025-10-0451', scope: 'Global', reset: 'Monthly (MM)', link: '/shipments' },
    { entity: 'Credit Notes', code: 'CN', pattern: 'CN-{YYYY}-{MM}-{####}', example: 'CN-2025-10-0003', next: 'CN-2025-10-0004', scope: 'Global', reset: 'Monthly (MM)', link: '/invoices/credit-notes' },
    { entity: 'Quotes', code: 'QT', pattern: 'QT-{YYYY}-{MM}-{####}', example: 'QT-2025-10-0221', next: 'QT-2025-10-0222', scope: 'Global', reset: 'Monthly (MM)', link: '/sales/quotes' },
    { entity: 'Returns', code: 'RTN', pattern: 'RTN-{YYYY}-{MM}-{####}', example: 'RTN-2025-10-0011', next: 'RTN-2025-10-0012', scope: 'Global', reset: 'Monthly (MM)', link: '/sales/returns' },
    { entity: 'Payments', code: 'PMT', pattern: 'PMT-{YYYY}-{MM}-{####}', example: 'PMT-2025-10-0300', next: 'PMT-2025-10-0301', scope: 'Global', reset: 'Monthly (MM)', link: '/sales/payments' },
    { entity: 'Customers', code: 'CUST', pattern: 'CUST-{YYYY}-{####}', example: 'CUST-2025-0007', next: 'CUST-2025-0008', scope: 'Global', reset: 'Yearly (YYYY)', link: '/customers' },
    { entity: 'Products', code: 'SKU', pattern: 'SKU-{CATEGORY}-{####}', example: 'SKU-MED-0421', next: 'SKU-MED-0422', scope: 'By Category', reset: 'Never', link: '/products' },
];

const TOKENS = [
    { t: '{YYYY}', desc: 'Four digit year (e.g., 2025)' },
    { t: '{YY}', desc: 'Two digit year (e.g., 25)' },
    { t: '{MM}', desc: 'Month (01–12)' },
    { t: '{DD}', desc: 'Day of month (01–31)' },
    { t: '{####}', desc: 'Zero-padded auto counter (4 digits). Repeat # to change width.' },
    { t: '{SITE}', desc: 'Site code (e.g., BLR, DEL). Optional; default empty.' },
    { t: '{WH}', desc: 'Warehouse code (e.g., WH1). Optional; default empty.' },
    { t: '{CATEGORY}', desc: 'Product category code (e.g., MED, LAB).' },
    { t: '{PREFIX}', desc: 'Custom prefix per entity (e.g., INV, PO).' },
    { t: '{SUFFIX}', desc: 'Custom suffix (optional).' },
];

const LINKS = [
    { label: 'Settings Home', to: '/settings' },
    { label: 'Appearance', to: '/settings/appearance' },
    { label: 'Print Templates', to: '/settings/print-templates' },
    { label: 'Notifications', to: '/settings/notifications' },
    { label: 'Tokens (API)', to: '/settings/tokens' },
    { label: 'Warehouses', to: '/settings/warehouses' },
    { label: 'Tax', to: '/settings/tax' },
    { label: 'Units', to: '/settings/units' },
    { label: 'Currencies', to: '/settings/currencies' },
    { label: 'Numbering', to: '/settings/numbering' },
];

export default function SettingsNumberingPage() {
    const [modal, setModal] = useState(null); // 'add' | 'save' | 'reset' | null
    const now = useMemo(() => new Date(), []);

    const openModal = useCallback((type) => setModal(type), []);
    const closeModal = useCallback(() => setModal(null), []);

    const handlePrint = useCallback(() => {
        document.body.classList.add('print-section-mode');
        const done = () => {
            document.body.classList.remove('print-section-mode');
            window.removeEventListener('afterprint', done);
        };
        window.addEventListener('afterprint', done);
        window.print();
    }, []);

    return (
        <Wrapper>
            <Header>
                <Crumbs>
                    <Link to="/home">Home</Link>
                    <span>/</span>
                    <Link to="/settings">Settings</Link>
                    <span>/</span>
                    <span className="current">Numbering</span>
                </Crumbs>

                <Actions>
                    <Btn onClick={handlePrint} title="Print this section">
                        <FiPrinter size={16} /> Print
                    </Btn>
                    <Btn disabled title="Add scheme (demo)">
                        <FiHash size={16} /> New Scheme
                    </Btn>
                    <Btn disabled title="Save changes (demo)">
                        <FiSettings size={16} /> Save
                    </Btn>
                </Actions>
            </Header>

            <Tabs role="tablist">
                <a href="#schemes" role="tab">Schemes</a>
                <a href="#placeholders" role="tab">Placeholders</a>
                <a href="#resets" role="tab">Resets</a>
                <a href="#status" role="tab">Status</a>
                <a href="#links" role="tab">Links</a>
            </Tabs>

            {/* PRINT TARGET */}
            <div id="search-print-area">
                <Grid>
                    {/* Schemes */}
                    <Card id="schemes">
                        <div className="cardHead">
                            <h2>Document Numbering Schemes</h2>
                            <span className="muted">Generated: {fmtDateTime(now)}</span>
                        </div>

                        <TableWrap role="table" aria-label="Numbering schemes">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Entity</th>
                                        <th>Code</th>
                                        <th>Pattern</th>
                                        <th>Example</th>
                                        <th>Scope</th>
                                        <th>Reset</th>
                                        <th>Next</th>
                                        <th>Navigate</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SCHEMES.map((s, i) => (
                                        <tr key={i}>
                                            <td><strong>{s.entity}</strong></td>
                                            <td><Badge>{s.code}</Badge></td>
                                            <td><code>{s.pattern}</code></td>
                                            <td className="example">{s.example}</td>
                                            <td>{s.scope}</td>
                                            <td>{s.reset}</td>
                                            <td className="next">{s.next}</td>
                                            <td>
                                                <NavLink to={s.link} className="nav">
                                                    Open <FiExternalLink aria-hidden />
                                                </NavLink>
                                            </td>
                                            <td className="rowActions">
                                                <button disabled title="Edit (demo)">Edit</button>
                                                <button disabled title="Clone (demo)">Clone</button>
                                                <button onClick={() => openModal('reset')} title="Explain reset policy">Reset?</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </TableWrap>

                        <Hint>
                            <FiInfo size={16} />
                            Patterns expand using tokens below. Resets are evaluated at issue time; counters are independent per scheme.
                        </Hint>
                    </Card>

                    {/* Placeholders */}
                    <Card id="placeholders">
                        <div className="cardHead">
                            <h3>Placeholder Tokens</h3>
                            <span className="muted">As of {fmtDate(now)}</span>
                        </div>

                        <div className="tokens">
                            {TOKENS.map((x, idx) => (
                                <Token key={idx}>
                                    <kbd>{x.t}</kbd>
                                    <span>{x.desc}</span>
                                </Token>
                            ))}
                        </div>

                        <div className="examples">
                            <h4>Examples</h4>
                            <ul>
                                <li><code>INV-{`{YYYY}`}-{`{MM}`}-{`{####}`}</code> → <strong>INV-2025-10-0008</strong></li>
                                <li><code>PO-{`{YY}`}-{`{MM}`}-{`{####}`}</code> → <strong>PO-25-10-0200</strong></li>
                                <li><code>SKU-{`{CATEGORY}`}-{`{####}`}</code> → <strong>SKU-MED-0422</strong></li>
                                <li><code>RCPT-{`{SITE}`}-{`{YYYY}`}-{`{####}`}</code> → <strong>RCPT-BLR-2025-0042</strong></li>
                            </ul>
                        </div>
                    </Card>

                    {/* Resets */}
                    <Card id="resets">
                        <div className="cardHead">
                            <h3>Auto-Reset Policies</h3>
                            <span className="muted">Last updated {fmtDateTime(now)}</span>
                        </div>

                        <ul className="bullets">
                            <li><strong>Never:</strong> Counter grows forever; recommended for SKUs.</li>
                            <li><strong>Yearly (YYYY):</strong> Counter resets on Jan 1, e.g., <em>INV-2026-01-0001</em>.</li>
                            <li><strong>Monthly (MM):</strong> Resets on 1st of each month; common for SO/PO/INV.</li>
                            <li><strong>Site/Warehouse scoped:</strong> Separate counters for each <code>{'{SITE}'}</code> or <code>{'{WH}'}</code>.</li>
                        </ul>

                        <div className="ctaRow">
                            <button onClick={() => openModal('reset')} title="Learn why reset is disabled in demo">Reset Counters</button>
                            <button disabled title="Save (demo)">Save Changes</button>
                        </div>

                        <Hint>
                            <FiAlertTriangle size={16} />
                            This is a display-only demo. Counter changes and resets are disabled.
                        </Hint>
                    </Card>

                    {/* Status */}
                    <Card id="status">
                        <div className="cardHead">
                            <h3>Sequence Status</h3>
                            <span className="muted">Snapshot {fmtTime(now)}</span>
                        </div>

                        <Grid cols="5">
                            {SCHEMES.slice(0, 10).map((s, i) => (
                                <Kpi key={i} role="status">
                                    <div className="k-label">{s.entity}</div>
                                    <div className="k-value">{s.next}</div>
                                    <div className="k-sub">Pattern: <code>{s.pattern}</code></div>
                                </Kpi>
                            ))}
                        </Grid>
                    </Card>

                    {/* Useful links */}
                    <Card id="links">
                        <div className="cardHead">
                            <h3>Jump to Related Settings & Modules</h3>
                            <span className="muted">Navigate</span>
                        </div>

                        <FooterLinks>
                            {LINKS.map((l, i) => (
                                <NavLink key={i} to={l.to}>{l.label}</NavLink>
                            ))}
                            <NavLink to="/invoices">Invoices</NavLink>
                            <NavLink to="/receipts">Receipts</NavLink>
                            <NavLink to="/orders">Orders</NavLink>
                            <NavLink to="/purchase-orders">Purchase Orders</NavLink>
                            <NavLink to="/shipments">Shipments</NavLink>
                            <NavLink to="/customers">Customers</NavLink>
                            <NavLink to="/products">Products</NavLink>
                            <NavLink to="/finance/gst-returns">GST Returns</NavLink>
                            <NavLink to="/reports">Reports</NavLink>
                            <NavLink to="/settings/print-templates">Print Templates</NavLink>
                        </FooterLinks>
                    </Card>
                </Grid>
            </div>

            {/* Print CSS (as requested) */}
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

            {/* Demo modal (custom, never browser alert) */}
            {modal && (
                <ModalBackdrop onClick={closeModal} role="dialog" aria-modal="true">
                    <ModalCard onClick={(e) => e.stopPropagation()} role="document">
                        <header>
                            <FiInfo size={18} />
                            <h4>Demo Mode</h4>
                        </header>
                        {modal === 'reset' && (
                            <p>Counters and resets are disabled in this demo. You can explore patterns, navigate modules, and print this page.</p>
                        )}
                        {modal === 'add' && (
                            <p>Adding new schemes is disabled here. Open the related module to see how numbering is used in context.</p>
                        )}
                        {modal === 'save' && (
                            <p>Saving configuration is disabled in this demo. Patterns shown are for display and navigation only.</p>
                        )}
                        <div className="modalActions">
                            <button onClick={closeModal}>Okay</button>
                        </div>
                    </ModalCard>
                </ModalBackdrop>
            )}
        </Wrapper>
    );
}
