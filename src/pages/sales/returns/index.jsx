import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* date format helpers */
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

/* lightweight info dialog (no browser alerts) */
const InfoDialog = ({ open, title, message, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body"><p>{message}</p></div>
                <footer>
                    <button className="btnPrimary" onClick={onClose}>Close</button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const SalesReturnsList = () => {
    const printRef = useRef(null);
    const searchRef = useRef(null);
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("all"); // all | pending | approved | in_transit | received | rejected
    const [method, setMethod] = useState("all"); // all | pickup | dropoff | courier
    const [info, setInfo] = useState({ open: false, title: "", message: "" });

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            try { searchRef.current?.focus({ preventScroll: true }); } catch { searchRef.current?.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    /* demo fixtures (display-only) */
    const rows = useMemo(() => ([
        {
            id: "RTN-5001",
            orderId: "ORD-3456",
            customer: { id: "CUST-1001", name: "Aarav Sharma" },
            itemsCount: 3,
            amount: "₹ 2,450.00",
            status: "Pending",
            method: "Pickup",
            tags: ["damaged", "priority"],
            requestedAt: "2025-10-04T11:08:20+05:30",
            updatedAt: "2025-10-04T11:12:32+05:30"
        },
        {
            id: "RTN-5002",
            orderId: "ORD-3491",
            customer: { id: "CUST-1004", name: "Ishita Kapoor" },
            itemsCount: 1,
            amount: "₹ 650.00",
            status: "Approved",
            method: "Dropoff",
            tags: ["unused"],
            requestedAt: "2025-10-02T16:20:01+05:30",
            updatedAt: "2025-10-03T09:05:10+05:30"
        },
        {
            id: "RTN-5003",
            orderId: "ORD-3495",
            customer: { id: "CUST-1007", name: "Rahul Verma" },
            itemsCount: 2,
            amount: "₹ 1,280.00",
            status: "In Transit",
            method: "Courier",
            tags: ["exchange"],
            requestedAt: "2025-10-01T14:38:48+05:30",
            updatedAt: "2025-10-04T10:02:20+05:30"
        },
        {
            id: "RTN-5004",
            orderId: "ORD-3502",
            customer: { id: "CUST-1012", name: "Neha Singh" },
            itemsCount: 4,
            amount: "₹ 3,240.00",
            status: "Received",
            method: "Pickup",
            tags: ["restock"],
            requestedAt: "2025-09-28T12:02:00+05:30",
            updatedAt: "2025-10-01T18:30:00+05:30"
        },
        {
            id: "RTN-5005",
            orderId: "ORD-3508",
            customer: { id: "CUST-1018", name: "Ankit Jain" },
            itemsCount: 1,
            amount: "₹ 299.00",
            status: "Rejected",
            method: "Dropoff",
            tags: ["opened"],
            requestedAt: "2025-09-30T09:25:41+05:30",
            updatedAt: "2025-10-01T10:00:00+05:30"
        },
        {
            id: "RTN-5006",
            orderId: "ORD-3510",
            customer: { id: "CUST-1021", name: "Priya Nair" },
            itemsCount: 2,
            amount: "₹ 1,120.00",
            status: "Pending",
            method: "Courier",
            tags: ["wrong-item"],
            requestedAt: "2025-10-03T19:02:02+05:30",
            updatedAt: "2025-10-04T08:51:45+05:30"
        },
        {
            id: "RTN-5007",
            orderId: "ORD-3513",
            customer: { id: "CUST-1024", name: "Vikram Mehta" },
            itemsCount: 5,
            amount: "₹ 4,420.00",
            status: "Approved",
            method: "Pickup",
            tags: ["bulk"],
            requestedAt: "2025-09-27T10:10:10+05:30",
            updatedAt: "2025-09-27T18:00:00+05:30"
        },
        {
            id: "RTN-5008",
            orderId: "ORD-3517",
            customer: { id: "CUST-1028", name: "Kritika Joshi" },
            itemsCount: 3,
            amount: "₹ 1,980.00",
            status: "In Transit",
            method: "Courier",
            tags: ["restock"],
            requestedAt: "2025-10-04T07:45:30+05:30",
            updatedAt: "2025-10-04T09:00:10+05:30"
        },
        {
            id: "RTN-5009",
            orderId: "ORD-3521",
            customer: { id: "CUST-1030", name: "Sana Qureshi" },
            itemsCount: 2,
            amount: "₹ 820.00",
            status: "Received",
            method: "Dropoff",
            tags: ["sealed"],
            requestedAt: "2025-09-26T11:44:44+05:30",
            updatedAt: "2025-09-29T15:10:12+05:30"
        },
        {
            id: "RTN-5010",
            orderId: "ORD-3525",
            customer: { id: "CUST-1034", name: "Mohit Gupta" },
            itemsCount: 1,
            amount: "₹ 499.00",
            status: "Pending",
            method: "Pickup",
            tags: ["short-expiry"],
            requestedAt: "2025-10-04T12:12:12+05:30",
            updatedAt: "2025-10-04T12:45:00+05:30"
        }
    ]), []);

    const statusMap = {
        all: "All",
        pending: "Pending",
        approved: "Approved",
        in_transit: "In Transit",
        received: "Received",
        rejected: "Rejected",
    };
    const methodMap = { all: "All", pickup: "Pickup", dropoff: "Dropoff", courier: "Courier" };

    const counts = useMemo(() => {
        const c = { all: rows.length, pending: 0, approved: 0, in_transit: 0, received: 0, rejected: 0 };
        rows.forEach(r => {
            const key = r.status === "In Transit" ? "in_transit" : r.status.toLowerCase();
            if (c[key] !== undefined) c[key] += 1;
        });
        return c;
    }, [rows]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return rows.filter(r => {
            const statusOk = status === "all" ? true :
                (status === "in_transit" ? r.status === "In Transit" : r.status.toLowerCase() === status);
            const methodOk = method === "all" ? true : r.method.toLowerCase() === method;
            const bag = `${r.id} ${r.orderId} ${r.customer.name} ${r.status} ${r.method} ${r.tags.join(" ")}`.toLowerCase();
            const textOk = q.length === 0 || bag.includes(q);
            return statusOk && methodOk && textOk;
        });
    }, [rows, query, status, method]);

    const showInfo = (title, message) => setInfo({ open: true, title, message });

    const exportJson = () => {
        const payload = { exportedAt: fmtDateTime(new Date()), filters: { query, status: statusMap[status], method: methodMap[method] }, rows: filtered };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `sales-returns-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const printList = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    return (
        <Styled.Page className="container">
            {/* print-only rules for a fixed section id */}
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
                <div className="left">
                    <h1>Sales Returns</h1>
                    <div className="meta">
                        <span>Updated: {fmtDateTime("2025-10-04T12:45:00+05:30")}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button
                        aria-disabled="true"
                        className="btnGhost"
                        onClick={() => showInfo("Demo Mode", "Creating a return is disabled in this demo.")}
                        title="Demo only"
                    >
                        New Return
                    </button>
                    <button
                        aria-disabled="true"
                        className="btnGhost"
                        onClick={() => showInfo("Demo Mode", "Bulk actions are disabled in this demo.")}
                        title="Demo only"
                    >
                        Bulk Approve
                    </button>
                    <button className="btnPrimary" onClick={exportJson} title="Download filtered JSON">
                        Export
                    </button>
                    <button className="btnPrimary" onClick={printList} title="Print current view">
                        Print
                    </button>
                </div>
            </Styled.Header>

            <Styled.Cards>
                <div className="card stat">
                    <div className="k">All</div>
                    <div className="v">{counts.all}</div>
                </div>
                <div className="card stat">
                    <div className="k">Pending</div>
                    <div className="v">{counts.pending}</div>
                </div>
                <div className="card stat">
                    <div className="k">Approved</div>
                    <div className="v">{counts.approved}</div>
                </div>
                <div className="card stat">
                    <div className="k">In Transit</div>
                    <div className="v">{counts.in_transit}</div>
                </div>
                <div className="card stat">
                    <div className="k">Received</div>
                    <div className="v">{counts.received}</div>
                </div>
                <div className="card stat">
                    <div className="k">Rejected</div>
                    <div className="v">{counts.rejected}</div>
                </div>
            </Styled.Cards>

            <Styled.Toolbar className="card">
                <div className="row">
                    <div className="search">
                        <input
                            ref={searchRef}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search by return id, customer, order, tags…"
                            aria-label="Search sales returns"
                        />
                    </div>

                    <div className="filters">
                        <div className="group">
                            {Object.entries(statusMap).map(([key, label]) => (
                                <button
                                    key={key}
                                    onClick={() => setStatus(key)}
                                    className={key === status ? "pill active" : "pill"}
                                    title={`Filter: ${label}`}
                                    aria-pressed={key === status}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        <div className="group">
                            {Object.entries(methodMap).map(([key, label]) => (
                                <button
                                    key={key}
                                    onClick={() => setMethod(key)}
                                    className={key === method ? "pill active" : "pill"}
                                    title={`Method: ${label}`}
                                    aria-pressed={key === method}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </Styled.Toolbar>

            <Styled.TableWrap className="card">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: 140 }}>Return</th>
                            <th>Customer</th>
                            <th style={{ width: 140 }}>Order</th>
                            <th style={{ width: 110 }}>Method</th>
                            <th style={{ width: 90, textAlign: "right" }}>Items</th>
                            <th style={{ width: 140, textAlign: "right" }}>Amount</th>
                            <th style={{ width: 130 }}>Status</th>
                            <th style={{ width: 200 }}>Requested</th>
                            <th style={{ width: 200 }}>Updated</th>
                            <th style={{ width: 200 }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan={10}>
                                    <div className="empty">
                                        <div className="icon">⟡</div>
                                        <div className="text">
                                            <h4>No results</h4>
                                            <p>Try a different keyword or clear filters.</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ) : filtered.map((r) => (
                            <tr key={r.id}>
                                <td>
                                    <NavLink to={`/sales/returns/${r.id}`} title="Open return details" className="link">{r.id}</NavLink>
                                </td>
                                <td>
                                    <NavLink to={`/customers/${r.customer.id}`} className="link">{r.customer.name}</NavLink>
                                </td>
                                <td>
                                    <NavLink to={`/orders/${r.orderId}`} className="link">{r.orderId}</NavLink>
                                </td>
                                <td><span className="badge">{r.method}</span></td>
                                <td style={{ textAlign: "right" }}>{r.itemsCount}</td>
                                <td style={{ textAlign: "right" }}>{r.amount}</td>
                                <td>
                                    <span className={`status s-${r.status.replace(" ", "").toLowerCase()}`}>{r.status}</span>
                                </td>
                                <td>
                                    <div className="muted">{fmtDate(r.requestedAt)}</div>
                                    <div className="sub">{fmtDateTime(r.requestedAt)}</div>
                                </td>
                                <td>
                                    <div className="muted">{fmtDate(r.updatedAt)}</div>
                                    <div className="sub">{fmtDateTime(r.updatedAt)}</div>
                                </td>
                                <td className="actions">
                                    <NavLink to={`/sales/returns/${r.id}`} className="btnRow">View</NavLink>
                                    <NavLink to={`/sales/returns/${r.id}/print`} className="btnRow">Print</NavLink>
                                    <button
                                        aria-disabled="true"
                                        className="btnRow ghost"
                                        onClick={() => showInfo("Demo Mode", "Mark Received is disabled in demo.")}
                                        title="Demo only"
                                    >
                                        Mark Received
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Styled.TableWrap>

            {/* print target (summary of current filter) */}
            <Styled.PrintCard id="search-print-area" className="card">
                <h3>Sales Returns — Summary</h3>
                <div className="grid">
                    <div><div className="k">Exported</div><div className="v">{fmtDateTime(new Date())}</div></div>
                    <div><div className="k">Query</div><div className="v">{query || "—"}</div></div>
                    <div><div className="k">Status</div><div className="v">{statusMap[status]}</div></div>
                    <div><div className="k">Method</div><div className="v">{methodMap[method]}</div></div>
                    <div><div className="k">Visible Rows</div><div className="v">{filtered.length}</div></div>
                </div>
            </Styled.PrintCard>

            <InfoDialog
                open={info.open}
                title={info.title}
                message={info.message}
                onClose={() => setInfo({ open: false, title: "", message: "" })}
            />
        </Styled.Page>
    );
};

export default SalesReturnsList;
