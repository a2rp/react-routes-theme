import React, { useMemo, useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import { FiSearch, FiDownload, FiPlus, FiTrash2, FiCheckSquare, FiX } from "react-icons/fi";

// ------------------------------------------------------------------
// tiny date utils to keep one consistent format app-wide
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

// ------------------------------------------------------------------
// Demo fixtures (display-only; no persistence)
const TODOS = [
    {
        id: "TD-1001",
        title: "Onboard supplier API mock",
        project: "Catalog",
        priority: "High",
        tags: ["api", "mock", "repository"],
        assignee: "Aarav",
        status: "Open",
        due: "2025-10-10T16:00:00+05:30",
        createdAt: "2025-09-20T11:12:13+05:30",
        updatedAt: "2025-10-01T09:20:00+05:30",
        description: "Set up repository adapter for suppliers and wire sample fixtures. Ensure route loaders resolve promises for a realistic feel."
    },
    {
        id: "TD-1002",
        title: "Invoice detail printable layout",
        project: "Billing",
        priority: "Medium",
        tags: ["print", "layout"],
        assignee: "Meera",
        status: "Open",
        due: "2025-10-12T13:30:00+05:30",
        createdAt: "2025-09-18T08:40:00+05:30",
        updatedAt: "2025-10-02T17:05:00+05:30",
        description: "Use #search-print-area pattern and align totals block with tokens. Include watermark placeholder."
    },
    {
        id: "TD-1003",
        title: "Inventory batches table sticky header",
        project: "Inventory",
        priority: "Low",
        tags: ["table", "ux"],
        assignee: "Kabir",
        status: "Done",
        due: "2025-09-28T10:00:00+05:30",
        createdAt: "2025-09-10T12:10:00+05:30",
        updatedAt: "2025-09-28T10:15:10+05:30",
        description: "Keep top toolbar visible; hover highlights rows; subtle zebra on hover only."
    },
    {
        id: "TD-1004",
        title: "Patients detail: timeline component",
        project: "Healthcare",
        priority: "High",
        tags: ["timeline", "component"],
        assignee: "Sia",
        status: "Open",
        due: "2025-10-18T11:15:00+05:30",
        createdAt: "2025-09-25T12:00:00+05:30",
        updatedAt: "2025-10-03T19:22:00+05:30",
        description: "Compact timeline with dot markers; show created/updated in the specified date format."
    },
    {
        id: "TD-1005",
        title: "Nav: collapsible sections + search memory",
        project: "Core",
        priority: "Medium",
        tags: ["nav", "search"],
        assignee: "Ishaan",
        status: "Done",
        due: "2025-09-22T19:00:00+05:30",
        createdAt: "2025-09-05T14:20:00+05:30",
        updatedAt: "2025-09-22T19:10:00+05:30",
        description: "Section titles toggle with arrow; search forces open on matches; remembers state per session."
    },
    {
        id: "TD-1006",
        title: "Theme tokens preview cards",
        project: "Examples",
        priority: "Low",
        tags: ["theme", "tokens"],
        assignee: "Aisha",
        status: "Open",
        due: "2025-10-25T12:00:00+05:30",
        createdAt: "2025-09-29T09:00:00+05:30",
        updatedAt: "2025-10-01T18:40:00+05:30",
        description: "Grid of cards showing bg, text, border, accent with copy-ready CSS variables."
    },
    {
        id: "TD-1007",
        title: "Reports hub: static KPI tiles",
        project: "Reports",
        priority: "High",
        tags: ["cards", "kpi"],
        assignee: "Rhea",
        status: "Open",
        due: "2025-10-06T09:30:00+05:30",
        createdAt: "2025-09-21T16:00:00+05:30",
        updatedAt: "2025-10-02T08:10:00+05:30",
        description: "Non-interactive KPI set with icons; link to detailed pages via NavLink."
    },
    {
        id: "TD-1008",
        title: "Orders detail: address blocks",
        project: "Orders",
        priority: "Medium",
        tags: ["address", "ui"],
        assignee: "Dev",
        status: "Open",
        due: "2025-10-14T18:00:00+05:30",
        createdAt: "2025-09-15T10:00:00+05:30",
        updatedAt: "2025-10-01T10:05:00+05:30",
        description: "Two-column billing/shipping with labels and subtle dividers."
    },
    {
        id: "TD-1009",
        title: "Receipts list: compact rows + badge",
        project: "Billing",
        priority: "Low",
        tags: ["list", "badge"],
        assignee: "Indu",
        status: "Open",
        due: "2025-10-09T10:00:00+05:30",
        createdAt: "2025-09-26T17:00:00+05:30",
        updatedAt: "2025-10-03T11:35:00+05:30",
        description: "Row density targets 44px; amount and mode right-aligned; date left."
    },
    {
        id: "TD-1010",
        title: "Manufacturing BOM: read-only graph",
        project: "Manufacturing",
        priority: "Medium",
        tags: ["graph", "bom"],
        assignee: "Vihaan",
        status: "Open",
        due: "2025-10-30T12:30:00+05:30",
        createdAt: "2025-09-30T12:30:00+05:30",
        updatedAt: "2025-10-02T09:55:00+05:30",
        description: "Simple tree list with levels; expand/collapse sections only."
    }
];

const DEMO_MODE = true;

// simple modal (for non-destructive demo notices)
const Modal = ({ open, title, children, onClose }) => {
    if (!open) return null;
    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal className="card" onMouseDown={(e) => e.stopPropagation()}>
                <header><h4>{title}</h4></header>
                <div className="body">{children}</div>
                <footer><button className="btnPrimary" onClick={onClose}><FiX /> Close</button></footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

const ExampleDevtoolsTodos = () => {
    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all"); // all | open | done
    const [priority, setPriority] = useState("all"); // all | high | medium | low
    const [selected, setSelected] = useState(TODOS[0]);
    const [showDemo, setShowDemo] = useState(false);

    // focus search on mount (matches your nav UX)
    const searchRef = useRef(null);
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            try { searchRef.current?.focus({ preventScroll: true }); } catch { searchRef.current?.focus(); }
        });
        return () => cancelAnimationFrame(id);
    }, []);

    // filter logic (display-only)
    const filtered = useMemo(() => {
        const t = q.trim().toLowerCase();
        return TODOS.filter(item => {
            const okStatus =
                status === "all" ||
                (status === "open" && item.status === "Open") ||
                (status === "done" && item.status === "Done");

            const okPriority =
                priority === "all" ||
                priority === item.priority.toLowerCase();

            const hay = `${item.id} ${item.title} ${item.project} ${item.assignee} ${item.tags.join(" ")}`.toLowerCase();
            const okQ = !t || hay.includes(t);
            return okStatus && okPriority && okQ;
        });
    }, [q, status, priority]);

    // printable summary area
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
            {/* print CSS as requested (scoped here) */}
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

            <Styled.Header className="card">
                <div className="left">
                    <h1>Devtools Todos</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/examples">Examples</NavLink><span>/</span><span className="current">Devtools Todos</span>
                    </nav>
                    <div className="meta">
                        <span>Updated: {fmt(new Date(), true)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" title="Back to Examples">
                        <NavLink to="/examples">← Back</NavLink>
                    </button>
                    <button className="btnPrimary" onClick={printSection} title="Print selected">Print</button>
                    <button
                        className="btnPrimary"
                        onClick={() => setShowDemo(true)}
                        title="Export JSON (demo only)"
                    >
                        <FiDownload /> Export
                    </button>
                    <button
                        className="btnDisabled"
                        onClick={() => setShowDemo(true)}
                        aria-disabled="true"
                        title="Add (disabled in demo)"
                    >
                        <FiPlus /> Add
                    </button>
                    <button
                        className="btnDisabled"
                        onClick={() => setShowDemo(true)}
                        aria-disabled="true"
                        title="Complete selected (disabled in demo)"
                    >
                        <FiCheckSquare /> Complete
                    </button>
                    <button
                        className="btnDanger"
                        onClick={() => setShowDemo(true)}
                        title="Delete (disabled in demo)"
                    >
                        <FiTrash2 /> Delete
                    </button>
                </div>
            </Styled.Header>

            <Styled.Grid>
                <section className="col main card">
                    <Styled.Toolbar>
                        <div className="search">
                            <FiSearch aria-hidden="true" />
                            <input
                                ref={searchRef}
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search todos, tags, projects, assignees…"
                                aria-label="Search todos"
                            />
                        </div>

                        <div className="filters" role="group" aria-label="Filters">
                            <div className="seg">
                                <button
                                    className={status === "all" ? "segActive" : ""}
                                    onClick={() => setStatus("all")}
                                    title="Show all"
                                >All</button>
                                <button
                                    className={status === "open" ? "segActive" : ""}
                                    onClick={() => setStatus("open")}
                                    title="Open only"
                                >Open</button>
                                <button
                                    className={status === "done" ? "segActive" : ""}
                                    onClick={() => setStatus("done")}
                                    title="Completed only"
                                >Done</button>
                            </div>

                            <div className="seg">
                                <button
                                    className={priority === "all" ? "segActive" : ""}
                                    onClick={() => setPriority("all")}
                                >All Pri</button>
                                <button
                                    className={priority === "high" ? "segActive" : ""}
                                    onClick={() => setPriority("high")}
                                >High</button>
                                <button
                                    className={priority === "medium" ? "segActive" : ""}
                                    onClick={() => setPriority("medium")}
                                >Medium</button>
                                <button
                                    className={priority === "low" ? "segActive" : ""}
                                    onClick={() => setPriority("low")}
                                >Low</button>
                            </div>
                        </div>
                    </Styled.Toolbar>

                    <Styled.TableWrap>
                        <table className="todos">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Project</th>
                                    <th>Priority</th>
                                    <th>Tags</th>
                                    <th>Assignee</th>
                                    <th>Status</th>
                                    <th>Due</th>
                                    <th>Updated</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((t) => (
                                    <tr
                                        key={t.id}
                                        className={selected?.id === t.id ? "active" : ""}
                                        onClick={() => setSelected(t)}
                                    >
                                        <td className="mono">{t.id}</td>
                                        <td className="titleCell">{t.title}</td>
                                        <td>{t.project}</td>
                                        <td><span className={`pri ${t.priority.toLowerCase()}`}>{t.priority}</span></td>
                                        <td className="tags">
                                            {t.tags.map((x) => <span className="chip" key={t.id + x}>{x}</span>)}
                                        </td>
                                        <td>{t.assignee}</td>
                                        <td>
                                            <span className={`status ${t.status === "Open" ? "open" : "done"}`}>{t.status}</span>
                                        </td>
                                        <td className="mono">{fmt(t.due)}</td>
                                        <td className="mono">{fmt(t.updatedAt, true)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {filtered.length === 0 && (
                            <div className="empty">
                                <div className="title">No todos found</div>
                                <div className="sub">Try clearing filters or search query.</div>
                            </div>
                        )}
                    </Styled.TableWrap>
                </section>

                <aside className="col side">
                    <div className="card sticky">
                        <h3>Details</h3>
                        {selected ? (
                            <div className="details">
                                <div className="kv"><span className="k">ID</span><span className="v mono">{selected.id}</span></div>
                                <div className="kv"><span className="k">Title</span><span className="v">{selected.title}</span></div>
                                <div className="kv"><span className="k">Project</span><span className="v">{selected.project}</span></div>
                                <div className="kv"><span className="k">Priority</span><span className="v"><span className={`pri ${selected.priority.toLowerCase()}`}>{selected.priority}</span></span></div>
                                <div className="kv"><span className="k">Status</span><span className="v"><span className={`status ${selected.status === "Open" ? "open" : "done"}`}>{selected.status}</span></span></div>
                                <div className="kv"><span className="k">Assignee</span><span className="v">{selected.assignee}</span></div>
                                <div className="kv"><span className="k">Due</span><span className="v mono">{fmt(selected.due)}</span></div>
                                <div className="kv"><span className="k">Created</span><span className="v mono">{fmt(selected.createdAt, true)}</span></div>
                                <div className="kv"><span className="k">Updated</span><span className="v mono">{fmt(selected.updatedAt, true)}</span></div>
                                <div className="desc">{selected.description}</div>

                                <div className="chips">
                                    {selected.tags.map((x) => <span className="chip" key={selected.id + "_d_" + x}>{x}</span>)}
                                </div>

                                <div className="links">
                                    <NavLink to="/examples">Examples Overview</NavLink>
                                    <NavLink to="/reports">Reports</NavLink>
                                    <NavLink to="/billing"> {/* not a route; display-only link style */}
                                        Invoices
                                    </NavLink>
                                </div>
                            </div>
                        ) : (
                            <div className="empty">
                                <div className="title">Select any row</div>
                                <div className="sub">Details appear here for quick review and printing.</div>
                            </div>
                        )}
                    </div>

                    <div className="card" id="search-print-area">
                        <h3>Print Summary</h3>
                        {!selected ? (
                            <div className="empty">
                                <div className="title">Nothing to print</div>
                                <div className="sub">Pick a todo from the list.</div>
                            </div>
                        ) : (
                            <div className="printBlock">
                                <div className="line"><span className="k">Todo</span><span className="v">{selected.title}</span></div>
                                <div className="line"><span className="k">ID</span><span className="v mono">{selected.id}</span></div>
                                <div className="line"><span className="k">Project</span><span className="v">{selected.project}</span></div>
                                <div className="line"><span className="k">Priority</span><span className="v"><span className={`pri ${selected.priority.toLowerCase()}`}>{selected.priority}</span></span></div>
                                <div className="line"><span className="k">Status</span><span className="v"><span className={`status ${selected.status === "Open" ? "open" : "done"}`}>{selected.status}</span></span></div>
                                <div className="line"><span className="k">Assignee</span><span className="v">{selected.assignee}</span></div>
                                <div className="line"><span className="k">Due</span><span className="v mono">{fmt(selected.due)}</span></div>
                                <div className="line"><span className="k">Updated</span><span className="v mono">{fmt(selected.updatedAt, true)}</span></div>
                                <div className="line col"><span className="k">Description</span><span className="v">{selected.description}</span></div>
                                <div className="line"><span className="k">Tags</span><span className="v">{selected.tags.join(", ")}</span></div>
                            </div>
                        )}
                    </div>
                </aside>
            </Styled.Grid>

            <Modal open={showDemo} title="Demo Mode" onClose={() => setShowDemo(false)}>
                <p>This showcase is display-only. Actions like Add, Complete, Delete, and Export are disabled.</p>
                <p>Use the filters, select a row to preview, or print the summary for a realistic feel.</p>
            </Modal>
        </Styled.Page>
    );
};

export default ExampleDevtoolsTodos;
