import React, { useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as S from "./styled";

/* ===== Date helpers (exact formats you wanted) ===== */
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmtDate(iso) {
    const d = new Date(iso);
    return `${WEEK[d.getDay()]} ${MON[d.getMonth()]} ${String(d.getDate()).padStart(2, "0")} ${d.getFullYear()}`;
}
function fmtDateTime(iso) {
    const d = new Date(iso);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${fmtDate(iso)} ${hh}:${mm}:${ss}hrs`;
}
function fmtTime(iso) {
    const d = new Date(iso);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}hrs`;
}

/* ===== Demo fixture (display-only) ===== */
const demoBoms = {
    "BOM-1001": {
        id: "BOM-1001",
        productId: "MED-AMOX-500",
        productName: "Amoxicillin 500mg Capsule",
        productSku: "AMOX-500-CAP",
        uom: "Box (10x10)",
        version: "v3",
        status: "Active",
        createdAt: "2025-06-17T09:12:06+05:30",
        updatedAt: "2025-10-04T12:45:10+05:30",
        owner: { id: "USR-0021", name: "Priya Verma" },
        tags: ["Pharma", "Antibiotic", "Regulated"],
        outputs: [
            { sku: "AMOX-500-CAP", qty: 1000, uom: "Capsules" },
            { sku: "AMOX-500-BLISTER", qty: 100, uom: "Blisters (10x1)" }
        ],
        summary: {
            materials: { lines: 7, cost: "₹ 48,900.00" },
            operations: { steps: 5, cost: "₹ 14,250.00" },
            overheads: "₹ 6,000.00",
            total: "₹ 69,150.00",
            stdYield: "98.5%",
            scrap: "1.5%"
        },
        materials: [
            { id: "RM-API-AMOX", name: "Amoxicillin Trihydrate", sku: "API-AMOX-TRI", per: "520 g", uom: "g", scrap: "0.5%", vendor: { id: "VEND-2003", name: "Solvent Labs" }, lastPrice: "₹ 2,300.00 / 100g", productId: "API-AMOX-TRI" },
            { id: "RM-STARCH", name: "Pregelatinized Starch", sku: "EXC-PGS-01", per: "180 g", uom: "g", scrap: "0.0%", vendor: { id: "VEND-1031", name: "Acme Excipients" }, lastPrice: "₹ 450.00 / kg", productId: "EXC-PGS-01" },
            { id: "RM-MCC", name: "Microcrystalline Cellulose", sku: "EXC-MCC-102", per: "220 g", uom: "g", scrap: "0.2%", vendor: { id: "VEND-1031", name: "Acme Excipients" }, lastPrice: "₹ 520.00 / kg", productId: "EXC-MCC-102" },
            { id: "RM-MGST", name: "Magnesium Stearate", sku: "EXC-MGST", per: "6 g", uom: "g", scrap: "0.0%", vendor: { id: "VEND-2090", name: "Unified Chem" }, lastPrice: "₹ 1,300.00 / kg", productId: "EXC-MGST" },
            { id: "RM-CAP", name: "Hard Gelatin Capsules 0#", sku: "PKG-CAP-0", per: "1000 pcs", uom: "pcs", scrap: "0.6%", vendor: { id: "VEND-4501", name: "CapsuTech" }, lastPrice: "₹ 0.85 / pc", productId: "PKG-CAP-0" },
            { id: "RM-BLISTER", name: "Blister Foil (Alu-Alu)", sku: "PKG-BLST-ALU", per: "100 sheets", uom: "sheets", scrap: "0.2%", vendor: { id: "VEND-7710", name: "Packright" }, lastPrice: "₹ 32.00 / sheet", productId: "PKG-BLST-ALU" },
            { id: "RM-CARTON", name: "Mono Carton", sku: "PKG-CARTON-10x10", per: "100 boxes", uom: "boxes", scrap: "0.0%", vendor: { id: "VEND-7710", name: "Packright" }, lastPrice: "₹ 4.10 / box", productId: "PKG-CARTON-10x10" }
        ],
        operations: [
            { code: "OP-01", name: "Mixing", workcenter: "Mixer-200L", setup: "20 min", run: "45 min / batch", overlap: "No", doc: "SOP-MIX-200L", attachments: [{ name: "SOP-MIX-200L.pdf", href: "#" }] },
            { code: "OP-02", name: "Granulation", workcenter: "Granulator-120", setup: "15 min", run: "30 min / batch", overlap: "Yes", doc: "SOP-GRN-120", attachments: [{ name: "SOP-GRN-120.pdf", href: "#" }] },
            { code: "OP-03", name: "Drying", workcenter: "Tray Dryer-24", setup: "10 min", run: "50 min / batch", overlap: "No", doc: "SOP-DRY-24", attachments: [{ name: "SOP-DRY-24.pdf", href: "#" }] },
            { code: "OP-04", name: "Capsule Filling", workcenter: "Capsule-Fill-40K", setup: "25 min", run: "60 min / batch", overlap: "Yes", doc: "SOP-CAP-40K", attachments: [{ name: "SOP-CAP-40K.pdf", href: "#" }] },
            { code: "OP-05", name: "Blister & Cartoning", workcenter: "Blister-200 / Carton-XL", setup: "15 min", run: "40 min / batch", overlap: "Yes", doc: "SOP-PKG-200", attachments: [{ name: "SOP-PKG-200.pdf", href: "#" }] }
        ],
        revisions: [
            { id: "REV-003", by: "Priya Verma", on: "2025-10-04T12:45:10+05:30", note: "Updated capsule shell scrap to 0.6% and packaging counts." },
            { id: "REV-002", by: "Ravi Kumar", on: "2025-09-12T18:20:00+05:30", note: "Added Alu-Alu blister specs and SOP links." },
            { id: "REV-001", by: "Priya Verma", on: "2025-08-01T10:12:42+05:30", note: "Initial release for AMOX 500." }
        ],
        attachments: [
            { name: "Spec-AMOX500.pdf", kind: "Specification", href: "#" },
            { name: "CoA-Sample.pdf", kind: "Certificate of Analysis", href: "#" },
            { name: "Stability-Protocol.pdf", kind: "Stability Protocol", href: "#" }
        ],
        related: {
            workOrders: [
                { id: "WO-4012", status: "In Queue", planned: "2025-10-09T09:00:00+05:30" },
                { id: "WO-3980", status: "Completed", planned: "2025-09-20T10:00:00+05:30" }
            ],
            purchaseOrders: [
                { id: "PO-1011", vendorId: "VEND-2003", on: "2025-09-26T16:12:00+05:30" }
            ],
            inventoryLinks: [
                { label: "Batches", to: "/inventory/batches" },
                { label: "Lots", to: "/inventory/lots" },
                { label: "Reorder Planner", to: "/inventory/reorder" }
            ]
        }
    }
};

/* ===== Confirm dialog (demo-only) ===== */
function ConfirmDialog({ open, title, message, onCancel, onConfirm }) {
    if (!open) return null;
    return (
        <S.Modal role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <div className="backdrop" onClick={onCancel} />
            <div className="panel card">
                <h3 id="confirm-title">{title}</h3>
                <p className="muted">{message}</p>
                <div className="actions">
                    <button onClick={onCancel}>Close</button>
                    <button disabled title="Demo mode: action unavailable">{/* demo-locked */}Confirm</button>
                </div>
            </div>
        </S.Modal>
    );
}

export default function BomDetail() {
    const { bomId: paramId } = useParams();
    const [showArchive, setShowArchive] = useState(false);
    const [copied, setCopied] = useState(false);

    const id = paramId || "BOM-1001";
    const data = useMemo(() => demoBoms[id] ?? demoBoms["BOM-1001"], [id]);

    const handleCopyLink = async () => {
        try {
            const url = window.location.href;
            await navigator.clipboard?.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch { }
    };

    const handleExport = () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${data.id}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const handlePrint = () => {
        document.body.classList.add("print-section-mode");
        setTimeout(() => {
            window.print();
            setTimeout(() => document.body.classList.remove("print-section-mode"), 300);
        }, 50);
    };

    return (
        <S.Page>
            {/* Print-only style */}
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

            {/* Breadcrumbs */}
            <S.Breadcrumb>
                <NavLink to="/home">Home</NavLink>
                <span>/</span>
                <NavLink to="/manufacturing">Manufacturing</NavLink>
                <span>/</span>
                <NavLink to="/manufacturing/bom">BOM</NavLink>
                <span>/</span>
                <span aria-current="page">{data.id}</span>
            </S.Breadcrumb>

            {/* Header */}
            <S.Header className="card">
                <div className="title">
                    <div>
                        <h1>{data.productName}</h1>
                        <div className="sub">
                            <span className="mono">{data.id}</span>
                            <span>•</span>
                            <NavLink className="link" to={`/products/${data.productId}`}>{data.productSku}</NavLink>
                            <span>•</span>
                            <span>{data.uom}</span>
                        </div>
                    </div>
                    <div className="right">
                        <S.Status status={data.status}>{data.status}</S.Status>
                        <S.Tag>{data.version}</S.Tag>
                    </div>
                </div>

                <S.Meta>
                    <div>
                        <span>Created</span>
                        <strong>{fmtDateTime(data.createdAt)}</strong>
                    </div>
                    <div>
                        <span>Updated</span>
                        <strong>{fmtDateTime(data.updatedAt)}</strong>
                    </div>
                    <div>
                        <span>Owner</span>
                        <NavLink to={`/admin/users/${data.owner.id}`}>{data.owner.name}</NavLink>
                    </div>
                    <div>
                        <span>Output</span>
                        {data.outputs.map((o, i) => (
                            <span key={i} className="chip">{o.qty} {o.uom} <em className="mono">{o.sku}</em></span>
                        ))}
                    </div>
                    <div className="tags">
                        <span>Tags</span>
                        <div className="tagrow">
                            {data.tags.map(t => <S.Tag key={t}>{t}</S.Tag>)}
                        </div>
                    </div>
                </S.Meta>

                <S.ActionBar>
                    <div className="left">
                        <NavLink className="btn" to={`/manufacturing/bom`}>All BOMs</NavLink>
                        <NavLink className="btn" to={`/manufacturing/work-orders`}>Work Orders</NavLink>
                        <NavLink className="btn" to={`/inventory/batches`}>Batches</NavLink>
                        <NavLink className="btn" to={`/reports/inventory`}>Inventory Report</NavLink>
                    </div>
                    <div className="right">
                        <button className="btn" onClick={handleCopyLink} title="Copy link to clipboard">
                            Copy Link {copied && <span className="note">Copied</span>}
                        </button>
                        <button className="btn" onClick={handleExport}>Export JSON</button>
                        <button className="btn" onClick={handlePrint}>Print</button>
                        <button className="btn" disabled title="Demo mode: edit unavailable">Edit</button>
                        <button className="btn danger" onClick={() => setShowArchive(true)}>Archive</button>
                    </div>
                </S.ActionBar>
            </S.Header>

            {/* Printable wrapper */}
            <div id="search-print-area">
                {/* Summary */}
                <S.Grid cols="4" className="mt16">
                    <S.KPI className="card">
                        <span>Material Lines</span>
                        <strong>{data.summary.materials.lines}</strong>
                        <em>Est. Material Cost</em>
                        <b>{data.summary.materials.cost}</b>
                    </S.KPI>
                    <S.KPI className="card">
                        <span>Operations</span>
                        <strong>{data.summary.operations.steps}</strong>
                        <em>Est. Operation Cost</em>
                        <b>{data.summary.operations.cost}</b>
                    </S.KPI>
                    <S.KPI className="card">
                        <span>Overheads</span>
                        <strong>-</strong>
                        <em>Allocated</em>
                        <b>{data.summary.overheads}</b>
                    </S.KPI>
                    <S.KPI className="card">
                        <span>Total Cost</span>
                        <strong>-</strong>
                        <em>Per Batch</em>
                        <b>{data.summary.total}</b>
                    </S.KPI>
                </S.Grid>

                {/* Materials */}
                <S.Section className="card">
                    <div className="section-head">
                        <h2>Materials</h2>
                        <div className="sec-actions">
                            <NavLink to="/vendors" className="link">Vendors</NavLink>
                            <span>•</span>
                            <NavLink to="/inventory" className="link">Inventory</NavLink>
                            <span>•</span>
                            <NavLink to="/purchase-orders" className="link">Purchase Orders</NavLink>
                        </div>
                    </div>

                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>SKU</th>
                                    <th>Per Batch</th>
                                    <th>Scrap</th>
                                    <th>UoM</th>
                                    <th>Preferred Vendor</th>
                                    <th>Last Price</th>
                                    <th>Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.materials.map((m) => (
                                    <tr key={m.id}>
                                        <td>{m.name}</td>
                                        <td><NavLink to={`/products/${m.productId}`} className="mono link">{m.sku}</NavLink></td>
                                        <td>{m.per}</td>
                                        <td>{m.scrap}</td>
                                        <td>{m.uom}</td>
                                        <td><NavLink to={`/vendors/${m.vendor.id}`} className="link">{m.vendor.name}</NavLink></td>
                                        <td>{m.lastPrice}</td>
                                        <td className="links">
                                            <NavLink to="/inventory/lots">Lots</NavLink>
                                            <NavLink to="/inventory/batches">Batches</NavLink>
                                            <NavLink to="/inventory/reorder">Reorder</NavLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </S.Section>

                {/* Operations */}
                <S.Section className="card">
                    <div className="section-head">
                        <h2>Operations</h2>
                        <div className="sec-actions">
                            <NavLink to="/manufacturing/work-orders" className="link">Work Orders</NavLink>
                            <span>•</span>
                            <NavLink to="/reports/production" className="link" title="Demo route suggestion">Production Report</NavLink>
                            <span>•</span>
                            <NavLink to="/settings/print-templates" className="link">Print Templates</NavLink>
                        </div>
                    </div>

                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Op Code</th>
                                    <th>Operation</th>
                                    <th>Workcenter</th>
                                    <th>Setup</th>
                                    <th>Run</th>
                                    <th>Overlap</th>
                                    <th>Documents</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.operations.map(op => (
                                    <tr key={op.code}>
                                        <td className="mono">{op.code}</td>
                                        <td>{op.name}</td>
                                        <td>{op.workcenter}</td>
                                        <td>{op.setup}</td>
                                        <td>{op.run}</td>
                                        <td>{op.overlap}</td>
                                        <td className="links">
                                            <NavLink to="/tools/playground">{op.doc}</NavLink>
                                            {op.attachments.map((a, i) => (
                                                <a key={i} href={a.href} onClick={(e) => e.preventDefault()} title="Demo file">{a.name}</a>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </S.Section>

                {/* Attachments */}
                <S.Section className="card">
                    <div className="section-head">
                        <h2>Attachments</h2>
                    </div>
                    <S.AttachList>
                        {data.attachments.map((f, i) => (
                            <li key={i} className="file">
                                <div>
                                    <strong>{f.name}</strong>
                                    <span className="muted">{f.kind}</span>
                                </div>
                                <div className="actions">
                                    <button disabled title="Demo mode">Preview</button>
                                    <button disabled title="Demo mode">Download</button>
                                </div>
                            </li>
                        ))}
                    </S.AttachList>
                </S.Section>

                {/* Revisions (timeline) */}
                <S.Section className="card">
                    <div className="section-head">
                        <h2>Revisions</h2>
                    </div>
                    <S.Timeline>
                        {data.revisions.map(rv => (
                            <li key={rv.id}>
                                <div className="dot" />
                                <div className="content">
                                    <div className="row">
                                        <strong>{rv.id}</strong>
                                        <span className="muted">by <NavLink to="/admin/users/USR-0021"> {rv.by}</NavLink></span>
                                        <span className="muted">{fmtDateTime(rv.on)}</span>
                                    </div>
                                    <p>{rv.note}</p>
                                </div>
                            </li>
                        ))}
                    </S.Timeline>
                </S.Section>

                {/* Related */}
                <S.Section className="card">
                    <div className="section-head">
                        <h2>Related</h2>
                    </div>
                    <S.Grid cols="3">
                        <div className="card inner">
                            <h3>Work Orders</h3>
                            <ul className="list">
                                {data.related.workOrders.map(w => (
                                    <li key={w.id}>
                                        <NavLink to={`/manufacturing/work-orders/${w.id}`}>{w.id}</NavLink>
                                        <span className="muted">• {w.status}</span>
                                        <span className="muted">• {fmtDateTime(w.planned)}</span>
                                    </li>
                                ))}
                            </ul>
                            <NavLink to="/manufacturing/work-orders" className="link">All Work Orders</NavLink>
                        </div>

                        <div className="card inner">
                            <h3>Procurement</h3>
                            <ul className="list">
                                {data.related.purchaseOrders.map(p => (
                                    <li key={p.id}>
                                        <NavLink to={`/purchase-orders/${p.id}`}>{p.id}</NavLink>
                                        <span className="muted">• <NavLink to={`/vendors/${p.vendorId}`}>Vendor</NavLink></span>
                                        <span className="muted">• {fmtDate(p.on)}</span>
                                    </li>
                                ))}
                            </ul>
                            <NavLink to="/purchase-orders" className="link">All Purchase Orders</NavLink>
                        </div>

                        <div className="card inner">
                            <h3>Inventory Quick Links</h3>
                            <ul className="list">
                                {data.related.inventoryLinks.map((l, i) => (
                                    <li key={i}><NavLink to={l.to}>{l.label}</NavLink></li>
                                ))}
                                <li><NavLink to={`/products/${data.productId}`}>Output Product</NavLink></li>
                            </ul>
                        </div>
                    </S.Grid>
                </S.Section>
            </div>

            <ConfirmDialog
                open={showArchive}
                title="Archive BOM?"
                message="This is a display-only demo. Archiving is disabled."
                onCancel={() => setShowArchive(false)}
                onConfirm={() => setShowArchive(false)}
            />
        </S.Page>
    );
}
