import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import {
    MdDeleteOutline,
    MdWarningAmber,
    MdInfoOutline,
    MdCheck,
    MdClose,
    MdContentCopy,
    MdPrint,
} from "react-icons/md";

/* ===========================
   tiny date utils (single source of truth)
   =========================== */
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
const fmtTime = (d) => {
    const dd = d instanceof Date ? d : new Date(d);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ===========================
   Accessible Confirm Modal (no browser alert)
   =========================== */
const ConfirmModal = ({
    open,
    variant = "primary", // 'primary' | 'danger' | 'info'
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    autoFocus = "confirm", // 'confirm' | 'cancel'
    input = null,          // { label, placeholder }
    onClose,
    onConfirm,
}) => {
    const dialogRef = useRef(null);
    const inputRef = useRef(null);
    const confirmRef = useRef(null);
    const cancelRef = useRef(null);

    // focus trap + ESC close
    useEffect(() => {
        if (!open) return;
        const root = dialogRef.current;
        const focusables = root?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables?.[0];
        const last = focusables?.[focusables.length - 1];

        // autofocus order
        const af = autoFocus === "cancel" ? cancelRef.current : confirmRef.current;
        (input ? inputRef.current : af || first)?.focus();

        const onKeyDown = (e) => {
            if (e.key === "Escape") { e.preventDefault(); onClose?.(); }
            if (e.key === "Tab" && focusables && focusables.length > 0) {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault(); last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault(); first.focus();
                }
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open, onClose, autoFocus, input]);

    if (!open) return null;

    const submit = () => {
        const val = input ? (inputRef.current?.value ?? "") : undefined;
        onConfirm?.(val);
    };

    return (
        <Styled.Overlay role="dialog" aria-modal="true" onMouseDown={onClose}>
            <Styled.Modal
                className={`card ${variant}`}
                ref={dialogRef}
                onMouseDown={(e) => e.stopPropagation()}
                aria-labelledby="cm-title"
                aria-describedby="cm-desc"
            >
                <header>
                    <div className="titleWrap">
                        {variant === "danger" ? <MdWarningAmber size={20} /> : variant === "info" ? <MdInfoOutline size={20} /> : <MdCheck size={20} />}
                        <h4 id="cm-title">{title}</h4>
                    </div>
                    <button className="iconBtn" onClick={onClose} aria-label="Close">
                        <MdClose size={18} />
                    </button>
                </header>

                <div className="body">
                    <p id="cm-desc">{message}</p>
                    {input && (
                        <div className="field">
                            <label>{input.label}</label>
                            <input ref={inputRef} placeholder={input.placeholder || ""} />
                        </div>
                    )}
                </div>

                <footer>
                    <button ref={cancelRef} className="btnGhost" onClick={onClose}>{cancelText}</button>
                    <button
                        ref={confirmRef}
                        className={variant === "danger" ? "btnDanger" : variant === "info" ? "btnPrimary" : "btnPrimary"}
                        onClick={submit}
                    >
                        {confirmText}
                    </button>
                </footer>
            </Styled.Modal>
        </Styled.Overlay>
    );
};

/* ===========================
   Page
   =========================== */
const ExampleConfirmModal = () => {
    const { pathname } = useLocation();
    const [banner, setBanner] = useState("");
    const [log, setLog] = useState([]);
    const [modals, setModals] = useState({
        archive: false,
        delete: false,
        cancelOrder: false,
        info: false,
    });
    const printRef = useRef(null);

    const now = useMemo(() => new Date(), [pathname]); // simple refresh per route

    const pushLog = (action, meta = "") => {
        const entry = {
            id: `LOG-${log.length + 1}`,
            ts: new Date(),
            action,
            meta,
        };
        setLog((l) => [entry, ...l.slice(0, 49)]); // keep last 50
        setBanner(`${action} at ${fmtDateTime(entry.ts)}`);
    };

    useEffect(() => {
        if (!banner) return;
        const t = setTimeout(() => setBanner(""), 3600);
        return () => clearTimeout(t);
    }, [banner]);

    const printSection = () => {
        document.body.classList.add("print-section-mode");
        window.onafterprint = () => {
            document.body.classList.remove("print-section-mode");
            window.onafterprint = null;
        };
        window.print();
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setBanner("Deep link copied to clipboard");
        } catch {
            setBanner("Unable to copy link");
        }
    };

    return (
        <Styled.Page>
            {/* Print CSS as requested */}
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
                    <h1>Confirm Modal Showcase</h1>
                    <nav aria-label="Breadcrumb" className="breadcrumbs">
                        <NavLink to="/examples">Examples</NavLink>
                        <span>/</span>
                        <span className="current">Confirm Modal</span>
                    </nav>
                    <div className="meta">
                        <span>Today: {fmtDate(now)}</span>
                        <span>•</span>
                        <span>Local Time: {fmtTime(now)}</span>
                    </div>
                </div>
                <div className="right actions">
                    <button className="btnGhost" onClick={copyLink} title="Copy deep link">
                        <MdContentCopy size={16} /> Copy Link
                    </button>
                    <button className="btnGhost" onClick={printSection} title="Print confirmation log">
                        <MdPrint size={16} /> Print Log
                    </button>
                </div>
            </Styled.Header>

            {banner ? <Styled.Banner role="status" aria-live="polite">{banner}</Styled.Banner> : null}

            <Styled.Grid>
                <section className="card">
                    <h3>Basic (Archive)</h3>
                    <p className="muted">Non-destructive action using the primary style.</p>
                    <div className="btnRow">
                        <button
                            className="btnPrimary"
                            onClick={() => setModals((m) => ({ ...m, archive: true }))}
                            title="Open archive confirm"
                        >
                            Archive Invoice INV-2031
                        </button>
                    </div>
                </section>

                <section className="card">
                    <h3>Danger (Delete)</h3>
                    <p className="muted">Destructive action with a red emphasis. Demo-only — no actual delete.</p>
                    <div className="btnRow">
                        <button
                            className="btnDanger"
                            onClick={() => setModals((m) => ({ ...m, delete: true }))}
                            title="Open delete confirm"
                        >
                            <MdDeleteOutline size={16} /> Delete Customer CUST-1001
                        </button>
                    </div>
                </section>

                <section className="card">
                    <h3>With Reason</h3>
                    <p className="muted">Ask for a short reason. Great for cancellations / reversals.</p>
                    <div className="btnRow">
                        <button
                            className="btnPrimary"
                            onClick={() => setModals((m) => ({ ...m, cancelOrder: true }))}
                            title="Open cancel order modal"
                        >
                            Cancel Order ORD-3001
                        </button>
                    </div>
                </section>

                <section className="card">
                    <h3>Informational</h3>
                    <p className="muted">Use an info tone for acknowledgement flows.</p>
                    <div className="btnRow">
                        <button
                            className="btnGhost"
                            onClick={() => setModals((m) => ({ ...m, info: true }))}
                            title="Open info modal"
                        >
                            <MdInfoOutline size={16} /> Session & Terms
                        </button>
                    </div>
                </section>

                <aside className="card" id="search-print-area" ref={printRef}>
                    <h3>Confirmation Log</h3>
                    <p className="muted">Latest 50 entries. This section prints cleanly.</p>
                    <div className="tableWrap">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: 120 }}>Time</th>
                                    <th style={{ width: 160 }}>Action</th>
                                    <th>Meta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {log.length === 0 ? (
                                    <tr>
                                        <td colSpan={3} className="muted">No confirmations yet.</td>
                                    </tr>
                                ) : (
                                    log.map((r) => (
                                        <tr key={r.id}>
                                            <td>{fmtDateTime(r.ts)}</td>
                                            <td>{r.action}</td>
                                            <td>{r.meta || "-"}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </aside>
            </Styled.Grid>

            {/* Archive */}
            <ConfirmModal
                open={modals.archive}
                variant="primary"
                title="Archive Invoice?"
                message="INV-2031 will be moved to archive. You can restore it anytime from Invoices → Filters."
                confirmText="Archive"
                onClose={() => setModals((m) => ({ ...m, archive: false }))}
                onConfirm={() => {
                    setModals((m) => ({ ...m, archive: false }));
                    pushLog("Archived invoice", "INV-2031");
                }}
            />

            {/* Delete */}
            <ConfirmModal
                open={modals.delete}
                variant="danger"
                title="Delete Customer?"
                message="This action cannot be undone. In demo mode, nothing will be deleted — this is for UI showcase."
                confirmText="Delete"
                onClose={() => setModals((m) => ({ ...m, delete: false }))}
                onConfirm={() => {
                    setModals((m) => ({ ...m, delete: false }));
                    pushLog("Delete requested", "CUST-1001 (demo)");
                }}
            />

            {/* With Reason */}
            <ConfirmModal
                open={modals.cancelOrder}
                variant="primary"
                title="Cancel Order?"
                message="Please provide a short reason for cancellation."
                input={{ label: "Reason", placeholder: "e.g., Customer requested" }}
                confirmText="Cancel Order"
                onClose={() => setModals((m) => ({ ...m, cancelOrder: false }))}
                onConfirm={(reason) => {
                    setModals((m) => ({ ...m, cancelOrder: false }));
                    pushLog("Order cancelled", `ORD-3001 — ${reason || "No reason"}`);
                }}
            />

            {/* Info */}
            <ConfirmModal
                open={modals.info}
                variant="info"
                title="Session Notice"
                message="You’re exploring a display-only demo. Some actions are intentionally disabled. Continue?"
                confirmText="Got it"
                onClose={() => setModals((m) => ({ ...m, info: false }))}
                onConfirm={() => {
                    setModals((m) => ({ ...m, info: false }));
                    pushLog("Acknowledged", "Demo session notice");
                }}
            />
        </Styled.Page>
    );
};

export default ExampleConfirmModal;
