import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";
import { MdOpenInNew, MdSearch, MdFileDownload, MdPrint, MdContentCopy, MdInfo } from "react-icons/md";

/* -------------------------------------------------------
   date utils: exact formats
   ------------------------------------------------------- */
const fmtDate = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    return `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
};
const fmtDateTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${fmtDate(dd)} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* -------------------------------------------------------
   demo dataset (display-only; totals are pre-computed in data)
   ------------------------------------------------------- */
const DATA = [
    { id: "INV-2031", customer: "Bluewave Traders", customerId: "CUST-1001", date: "2025-10-04T10:25:32+05:30", due: "2025-10-18T23:59:59+05:30", status: "Paid", amountText: "₹ 18,650.00", balanceText: "₹ 0.00", currency: "INR", po: "PO-7712" },
    { id: "INV-2032", customer: "Nova Health Pvt Ltd", customerId: "CUST-1012", date: "2025-10-03T16:11:02+05:30", due: "2025-10-17T23:59:59+05:30", status: "Overdue", amountText: "₹ 42,300.00", balanceText: "₹ 3,200.00", currency: "INR", po: "PO-7720" },
    { id: "INV-2033", customer: "Urban Mart", customerId: "CUST-1024", date: "2025-10-02T12:02:09+05:30", due: "2025-10-09T23:59:59+05:30", status: "Partially Paid", amountText: "₹ 9,990.00", balanceText: "₹ 2,000.00", currency: "INR", po: "PO-7709" },
    { id: "INV-2034", customer: "Pinnacle Labs", customerId: "CUST-1031", date: "2025-10-01T18:45:41+05:30", due: "2025-10-15T23:59:59+05:30", status: "Paid", amountText: "₹ 75,000.00", balanceText: "₹ 0.00", currency: "INR", po: "PO-7715" },
    { id: "INV-2035", customer: "Skyline Retail", customerId: "CUST-1045", date: "2025-09-30T09:13:21+05:30", due: "2025-10-14T23:59:59+05:30", status: "Draft", amountText: "₹ 5,450.00", balanceText: "₹ 5,450.00", currency: "INR", po: "—" },
    { id: "INV-2036", customer: "Apex Surgical", customerId: "CUST-1049", date: "2025-09-29T13:00:02+05:30", due: "2025-10-13T23:59:59+05:30", status: "Paid", amountText: "₹ 21,300.00", balanceText: "₹ 0.00", currency: "INR", po: "PO-7722" },
    { id: "INV-2037", customer: "Orion Pharma", customerId: "CUST-1054", date: "2025-09-28T15:08:36+05:30", due: "2025-10-12T23:59:59+05:30", status: "Cancelled", amountText: "₹ 0.00", balanceText: "₹ 0.00", currency: "INR", po: "—" },
    { id: "INV-2038", customer: "Zenith Clinics", customerId: "CUST-1060", date: "2025-09-27T11:04:10+05:30", due: "2025-10-11T23:59:59+05:30", status: "Paid", amountText: "₹ 13,280.00", balanceText: "₹ 0.00", currency: "INR", po: "PO-7699" },
    { id: "INV-2039", customer: "Northwind Stores", customerId: "CUST-1065", date: "2025-09-26T10:22:03+05:30", due: "2025-10-10T23:59:59+05:30", status: "Overdue", amountText: "₹ 3,120.00", balanceText: "₹ 3,120.00", currency: "INR", po: "—" },
    { id: "INV-2040", customer: "Everest Diagnostics", customerId: "CUST-1069", date: "2025-09-25T19:05:50+05:30", due: "2025-10-09T23:59:59+05:30", status: "Paid", amountText: "₹ 56,400.00", balanceText: "₹ 0.00", currency: "INR", po: "PO-7688" },
    { id: "INV-2041", customer: "Metro Care", customerId: "CUST-1072", date: "2025-09-24T08:18:19+05:30", due: "2025-10-08T23:59:59+05:30", status: "Partially Paid", amountText: "₹ 12,000.00", balanceText: "₹ 4,500.00", currency: "INR", po: "PO-7683" },
    { id: "INV-2042", customer: "Trident Enterprises", customerId: "CUST-1081", date: "2025-09-23T10:42:41+05:30", due: "2025-10-07T23:59:59+05:30", status: "Paid", amountText: "₹ 7,840.00", balanceText: "₹ 0.00", currency: "INR", po: "—" },
    { id: "INV-2043", customer: "Sapphire Wholesale", customerId: "CUST-1085", date: "2025-09-22T14:31:55+05:30", due: "2025-10-06T23:59:59+05:30", status: "Paid", amountText: "₹ 28,000.00", balanceText: "₹ 0.00", currency: "INR", po: "PO-7668" },
    { id: "INV-2044", customer: "Nimbus Partners", customerId: "CUST-1090", date: "2025-09-21T16:49:27+05:30", due: "2025-10-05T23:59:59+05:30", status: "Draft", amountText: "₹ 2,200.00", balanceText: "₹ 2,200.00", currency: "INR", po: "—" },
    { id: "INV-2045", customer: "Regal Medicals", customerId: "CUST-1093", date: "2025-09-20T09:55:31+05:30", due: "2025-10-04T23:59:59+05:30", status: "Paid", amountText: "₹ 33,120.00", balanceText: "₹ 0.00", currency: "INR", po: "PO-7659" },
];

/* summary tiles (pre-written values for display) */
const SUMMARY = {
    totalInvoices: "15",
    totalValue: "₹ 3,25,650.00",
    paidCount: "7",
    overdueCount: "2",
    drafts: "2",
    partially: "2",
    cancelled: "1",
};

const InvoicesList = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("All");
    const [sortBy, setSortBy] = useState({ key: "date", dir: "desc" });
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const [banner, setBanner] = useState("");
    const printRef = useRef(null);

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3000);
        return () => clearTimeout(t);
    }, [banner]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let rows = DATA.filter(r => {
            const txt = (r.id + " " + r.customer + " " + r.po).toLowerCase();
            const matchesQuery = q.length === 0 || txt.includes(q);
            const matchesStatus = status === "All" ? true : r.status === status;
            return matchesQuery && matchesStatus;
        });

        const compare = (a, b) => {
            const { key, dir } = sortBy;
            let va, vb;
            if (key === "date" || key === "due") {
                va = new Date(a[key]).getTime(); vb = new Date(b[key]).getTime();
            } else {
                va = (a[key] || "").toString();
                vb = (b[key] || "").toString();
            }
            if (va < vb) return dir === "asc" ? -1 : 1;
            if (va > vb) return dir === "asc" ? 1 : -1;
            return 0;
        };
        rows.sort(compare);
        return rows;
    }, [query, status, sortBy]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const current = useMemo(() => {
        const start = (page - 1) * pageSize;
        return filtered.slice(start, start + pageSize);
    }, [filtered, page]);

    useEffect(() => { setPage(1); }, [query, status]);

    const toggleSort = (key) => {
        setSortBy((s) => s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" });
    };

    const exportCsv = () => {
        const cols = ["Invoice", "Customer", "Date", "Due", "Status", "Amount", "Balance", "PO"];
        const toRow = (r) => [r.id, r.customer, fmtDate(r.date), fmtDate(r.due), r.status, r.amountText, r.balanceText, r.po];
        const lines = [cols.join(","), ...filtered.map(r => toRow(r).map(v => `"${String(v).replace(/"/g, '""')}"`).join(","))];
        const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "invoices.csv";
        a.click();
        URL.revokeObjectURL(a.href);
        setBanner("Exported invoices.csv");
    };

    const copyLink = () => {
        const url = location.origin + (import.meta.env.BASE_URL || "") + "invoices";
        navigator.clipboard.writeText(url).then(() => setBanner("Link copied"));
    };

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page>
            {/* print CSS for section */}
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

            <Styled.Header className="card">
                <div className="titleRow">
                    <div>
                        <h1>Invoices</h1>
                        <nav aria-label="Breadcrumb" className="breadcrumbs">
                            <NavLink to="/home">Home</NavLink><span>/</span><span className="current">Invoices</span>
                        </nav>
                        <div className="meta">
                            <span>Updated: {fmtDateTime(new Date())}</span>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="btnGhost" title="Copy link" onClick={copyLink}><MdContentCopy /> Copy Link</button>
                        <button className="btnGhost" title="Print list" onClick={printSection}><MdPrint /> Print</button>
                        <button className="btnPrimary" title="Export CSV" onClick={exportCsv}><MdFileDownload /> Export</button>
                        <button className="btnPrimary" disabled title="Demo only"><MdOpenInNew /> New Invoice</button>
                    </div>
                </div>

                {banner ? <Styled.Banner role="status">{banner}</Styled.Banner> : null}

                <Styled.Tiles>
                    <div className="tile">
                        <div className="k">Total Invoices</div>
                        <div className="v">{SUMMARY.totalInvoices}</div>
                    </div>
                    <div className="tile">
                        <div className="k">Total Value</div>
                        <div className="v">{SUMMARY.totalValue}</div>
                    </div>
                    <div className="tile">
                        <div className="k">Paid</div>
                        <div className="v">{SUMMARY.paidCount}</div>
                    </div>
                    <div className="tile">
                        <div className="k">Overdue</div>
                        <div className="v warn">{SUMMARY.overdueCount}</div>
                    </div>
                    <div className="tile sm">
                        <div className="k">Drafts</div>
                        <div className="v">{SUMMARY.drafts}</div>
                    </div>
                    <div className="tile sm">
                        <div className="k">Partially</div>
                        <div className="v">{SUMMARY.partially}</div>
                    </div>
                    <div className="tile sm">
                        <div className="k">Cancelled</div>
                        <div className="v">{SUMMARY.cancelled}</div>
                    </div>
                </Styled.Tiles>

                <Styled.Filters>
                    <div className="searchBox">
                        <MdSearch size={18} />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search invoice, customer, PO…"
                            aria-label="Search invoices"
                        />
                    </div>

                    <div className="filterRow">
                        <label>Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status filter">
                            <option>All</option>
                            <option>Paid</option>
                            <option>Partially Paid</option>
                            <option>Overdue</option>
                            <option>Draft</option>
                            <option>Cancelled</option>
                        </select>

                        <label>Sort</label>
                        <select
                            value={`${sortBy.key}:${sortBy.dir}`}
                            onChange={(e) => {
                                const [k, d] = e.target.value.split(":");
                                setSortBy({ key: k, dir: d });
                            }}
                            aria-label="Sort by"
                        >
                            <option value="date:desc">Date ↓</option>
                            <option value="date:asc">Date ↑</option>
                            <option value="due:desc">Due ↓</option>
                            <option value="due:asc">Due ↑</option>
                            <option value="customer:asc">Customer A–Z</option>
                            <option value="customer:desc">Customer Z–A</option>
                            <option value="id:asc">Invoice ↑</option>
                            <option value="id:desc">Invoice ↓</option>
                        </select>
                    </div>
                </Styled.Filters>
            </Styled.Header>

            <Styled.TableWrap className="card">
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => toggleSort("id")} role="button" tabIndex={0}>Invoice</th>
                            <th onClick={() => toggleSort("customer")} role="button" tabIndex={0}>Customer</th>
                            <th onClick={() => toggleSort("date")} role="button" tabIndex={0}>Date</th>
                            <th onClick={() => toggleSort("due")} role="button" tabIndex={0}>Due</th>
                            <th>Status</th>
                            <th className="num">Amount</th>
                            <th className="num">Balance</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {current.length === 0 ? (
                            <tr>
                                <td colSpan={8}>
                                    <Styled.Empty>
                                        <div className="icon"><MdInfo size={24} /></div>
                                        <div>No invoices match your filters.</div>
                                    </Styled.Empty>
                                </td>
                            </tr>
                        ) : current.map((r) => (
                            <tr key={r.id}>
                                <td>
                                    <NavLink to={`/invoices/${r.id}`} className="mono">{r.id}</NavLink>
                                    <div className="sub">PO: {r.po}</div>
                                </td>
                                <td>
                                    <NavLink to={`/customers/${r.customerId}`}>{r.customer}</NavLink>
                                </td>
                                <td>{fmtDate(r.date)}</td>
                                <td>{fmtDate(r.due)}</td>
                                <td>
                                    <span className={`pill ${r.status.replace(/\s+/g, '-').toLowerCase()}`}>{r.status}</span>
                                </td>
                                <td className="num">{r.amountText}</td>
                                <td className="num">{r.balanceText}</td>
                                <td className="rowActions">
                                    <NavLink to={`/invoices/${r.id}`} className="btnLink">View</NavLink>
                                    <button className="btnLink" title="Open customer" onClick={() => navigate(`/customers/${r.customerId}`)}>Customer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Styled.Pagination>
                    <div className="left">Showing <strong>{current.length}</strong> of <strong>{filtered.length}</strong></div>
                    <div className="right">
                        <button onClick={() => setPage(1)} disabled={page === 1}>First</button>
                        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
                        <span>Page {page} / {totalPages}</span>
                        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
                        <button onClick={() => setPage(totalPages)} disabled={page === totalPages}>Last</button>
                    </div>
                </Styled.Pagination>
            </Styled.TableWrap>

            {/* PRINT AREA */}
            <Styled.PrintCard className="card" id="search-print-area" ref={printRef}>
                <h3>Invoices — Print Summary</h3>
                <div className="meta">
                    Generated: {fmtDateTime(new Date())}
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Invoice</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Due</th>
                            <th>Status</th>
                            <th className="num">Amount</th>
                            <th className="num">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((r) => (
                            <tr key={`p-${r.id}`}>
                                <td className="mono">{r.id}</td>
                                <td>{r.customer}</td>
                                <td>{fmtDate(r.date)}</td>
                                <td>{fmtDate(r.due)}</td>
                                <td>{r.status}</td>
                                <td className="num">{r.amountText}</td>
                                <td className="num">{r.balanceText}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Styled.PrintCard>
        </Styled.Page>
    );
};

export default InvoicesList;
