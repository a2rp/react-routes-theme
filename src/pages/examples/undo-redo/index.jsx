import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

/* ---------- tiny date utils so format stays consistent everywhere ---------- */
const fmt = (d, withTime) => {
    const dd = d instanceof Date ? d : new Date(d);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (n) => String(n).padStart(2, "0");
    const base = `${days[dd.getDay()]} ${mons[dd.getMonth()]} ${pad(dd.getDate())} ${dd.getFullYear()}`;
    if (!withTime) return base;
    return `${base} ${pad(dd.getHours())}:${pad(dd.getMinutes())}:${pad(dd.getSeconds())}hrs`;
};

/* ---------- generic history hook (time travel without persistence) ---------- */
function useHistory(initial, { capacity = 100 } = {}) {
    const [past, setPast] = useState([]);
    const [present, setPresent] = useState(initial);
    const [future, setFuture] = useState([]);

    const set = useCallback((updater) => {
        setPast((prevPast) => {
            const previous = present;
            const nextValue = typeof updater === "function" ? updater(previous) : updater;
            if (Object.is(nextValue, previous)) return prevPast; // no-op
            const newPast = [...prevPast, previous];
            if (newPast.length > capacity) newPast.shift();
            setPresent(nextValue);
            setFuture([]);
            return newPast;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [present, capacity]);

    const undo = useCallback(() => {
        setPast((prevPast) => {
            if (prevPast.length === 0) return prevPast;
            const previous = prevPast[prevPast.length - 1];
            const newPast = prevPast.slice(0, -1);
            setFuture((f) => [present, ...f]);
            setPresent(previous);
            return newPast;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [present]);

    const redo = useCallback(() => {
        setFuture((prevFuture) => {
            if (prevFuture.length === 0) return prevFuture;
            const next = prevFuture[0];
            const newFuture = prevFuture.slice(1);
            setPast((p) => [...p, present]);
            setPresent(next);
            return newFuture;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [present]);

    const reset = useCallback((value = initial) => {
        setPast([]);
        setPresent(value);
        setFuture([]);
    }, [initial]);

    const timeline = useMemo(() => [...past, present, ...future], [past, present, future]);
    const index = useMemo(() => past.length, [past]);
    const canUndo = past.length > 0;
    const canRedo = future.length > 0;

    const jump = useCallback((absoluteIndex) => {
        const tl = [...past, present, ...future];
        if (absoluteIndex < 0 || absoluteIndex >= tl.length) return;
        const next = tl[absoluteIndex];
        const newPast = tl.slice(0, absoluteIndex);
        const newFuture = tl.slice(absoluteIndex + 1);
        setPast(newPast);
        setPresent(next);
        setFuture(newFuture);
    }, [past, present, future]);

    return { state: present, set, undo, redo, reset, canUndo, canRedo, timeline, index, jump };
}

/* ---------- components ---------- */

const Toolbar = ({ label, onUndo, onRedo, onReset, canUndo, canRedo }) => (
    <Styled.Toolbar>
        <div className="label">{label}</div>
        <div className="spacer" />
        <button onClick={onUndo} disabled={!canUndo} title="Undo (Ctrl/Cmd+Z)">Undo</button>
        <button onClick={onRedo} disabled={!canRedo} title="Redo (Ctrl/Cmd+Y or Shift+Ctrl/Cmd+Z)">Redo</button>
        <button className="primary" onClick={onReset} title="Reset state">Reset</button>
    </Styled.Toolbar>
);

const HistoryStrip = ({ timeline, index, onJump }) => (
    <Styled.History className="card">
        <div className="top">
            <div className="title">History</div>
            <div className="meta">Steps: {timeline.length}</div>
        </div>
        <input
            className="slider"
            type="range"
            min={0}
            max={Math.max(0, timeline.length - 1)}
            value={index}
            onChange={(e) => onJump(Number(e.target.value))}
            aria-label="Time travel slider"
        />
        <div className="list">
            {timeline.map((snap, i) => (
                <button
                    key={i}
                    className={i === index ? "row current" : "row"}
                    onClick={() => onJump(i)}
                    title={i === index ? "Current state" : "Jump to this state"}
                >
                    <span className="dot" />
                    <span className="idx">{i}</span>
                    <span className="val">{summarize(snap)}</span>
                </button>
            ))}
        </div>
    </Styled.History>
);

function summarize(s) {
    if (typeof s === "number") return `value: ${s}`;
    if (typeof s === "string") return s.slice(0, 40) || "empty";
    if (s && typeof s === "object") {
        if ("title" in s) return `${s.title} • ${String((s.body || "").length)} chars`;
        try { return JSON.stringify(s).slice(0, 60); } catch { return "object"; }
    }
    return String(s);
}

/* Counter demo (focusable area with keyboard bindings) */
const CounterDemo = () => {
    const { state, set, undo, redo, reset, canUndo, canRedo, timeline, index, jump } = useHistory(0);
    const zoneRef = useRef(null);

    const inc = () => set((n) => n + 1);
    const dec = () => set((n) => n - 1);
    const add10 = () => set((n) => n + 10);
    const sub10 = () => set((n) => n - 10);

    const onKey = useCallback((e) => {
        if (e.ctrlKey || e.metaKey) {
            if (e.key.toLowerCase() === "z") {
                e.preventDefault();
                if (e.shiftKey) redo(); else undo();
            } else if (e.key.toLowerCase() === "y") {
                e.preventDefault(); redo();
            }
        }
        if (!e.ctrlKey && !e.metaKey) {
            if (e.key === "+") { e.preventDefault(); inc(); }
            if (e.key === "-") { e.preventDefault(); dec(); }
        }
    }, [undo, redo]);

    useEffect(() => {
        const el = zoneRef.current;
        if (!el) return;
        el.addEventListener("keydown", onKey);
        return () => el.removeEventListener("keydown", onKey);
    }, [onKey]);

    return (
        <Styled.Card tabIndex={0} ref={zoneRef} aria-label="Counter undo redo zone">
            <Toolbar
                label="Counter"
                onUndo={undo}
                onRedo={redo}
                onReset={() => reset(0)}
                canUndo={canUndo}
                canRedo={canRedo}
            />
            <div className="counterWrap">
                <div className="value" aria-live="polite">{state}</div>
                <div className="grid">
                    <button onClick={dec} title="Decrement (-)">-1</button>
                    <button onClick={inc} title="Increment (+)">+1</button>
                    <button onClick={sub10} title="Subtract 10">-10</button>
                    <button onClick={add10} title="Add 10">+10</button>
                </div>
                <div className="hint">Tips: Use + / - keys. Undo: Ctrl/Cmd+Z, Redo: Ctrl/Cmd+Y or Shift+Ctrl/Cmd+Z</div>
            </div>
            <HistoryStrip timeline={timeline} index={index} onJump={jump} />
        </Styled.Card>
    );
};

/* Notes demo with title/body and live preview */
const NoteDemo = () => {
    const initial = useMemo(() => ({
        title: "Daily Note",
        body:
            `Welcome. Try typing here and then undo/redo.

Shortcuts:
- Undo: Ctrl/Cmd+Z
- Redo: Ctrl/Cmd+Y or Shift+Ctrl/Cmd+Z

Time travel with the slider below.`,
        lastEditedAt: new Date().toISOString()
    }), []);

    const { state, set, undo, redo, reset, canUndo, canRedo, timeline, index, jump } = useHistory(initial);
    const zoneRef = useRef(null);

    const onField = (e) => {
        const { name, value } = e.target;
        set((s) => ({ ...s, [name]: value, lastEditedAt: new Date().toISOString() }));
    };

    const copyJSON = async () => {
        try {
            await navigator.clipboard.writeText(JSON.stringify(state, null, 2));
        } catch { }
    };

    const onKey = useCallback((e) => {
        if (e.ctrlKey || e.metaKey) {
            if (e.key.toLowerCase() === "z") {
                e.preventDefault();
                if (e.shiftKey) redo(); else undo();
            } else if (e.key.toLowerCase() === "y") {
                e.preventDefault(); redo();
            }
        }
    }, [undo, redo]);

    useEffect(() => {
        const el = zoneRef.current;
        if (!el) return;
        el.addEventListener("keydown", onKey);
        return () => el.removeEventListener("keydown", onKey);
    }, [onKey]);

    return (
        <Styled.Card tabIndex={0} ref={zoneRef} aria-label="Notes undo redo zone">
            <Toolbar
                label="Notes"
                onUndo={undo}
                onRedo={redo}
                onReset={() => reset(initial)}
                canUndo={canUndo}
                canRedo={canRedo}
            />
            <div className="noteWrap">
                <div className="editor">
                    <div className="field two">
                        <div>
                            <label>Title</label>
                            <input name="title" value={state.title} onChange={onField} placeholder="Title" />
                        </div>
                        <div>
                            <label>Last Edited</label>
                            <div className="meta">{fmt(state.lastEditedAt, true)}</div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Body</label>
                        <textarea rows={10} name="body" value={state.body} onChange={onField} placeholder="Start typing..." />
                    </div>
                    <div className="actions">
                        <button onClick={copyJSON} title="Copy current note as JSON">Copy JSON</button>
                    </div>
                </div>
                <div className="preview card">
                    <div className="ph">Preview</div>
                    <h3>{state.title || "Untitled"}</h3>
                    <pre className="body">{state.body || "Nothing yet."}</pre>
                </div>
            </div>
            <HistoryStrip timeline={timeline} index={index} onJump={jump} />
        </Styled.Card>
    );
};

const ExampleUndoRedo = () => {
    return (
        <Styled.Page className="container">
            <Styled.Header className="card">
                <div>
                    <h1>Undo / Redo</h1>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <NavLink to="/examples">Examples</NavLink>
                        <span>/</span>
                        <span className="current">Undo / Redo</span>
                    </nav>
                    <div className="meta">Interactive demo without persistence • {fmt(new Date(), true)}</div>
                </div>
            </Styled.Header>

            <Styled.Grid>
                <CounterDemo />
                <NoteDemo />
            </Styled.Grid>

            <Styled.Help className="card">
                <div className="row">
                    <div>
                        <h3>Keyboard</h3>
                        <ul>
                            <li><strong>Undo:</strong> Ctrl/Cmd + Z</li>
                            <li><strong>Redo:</strong> Ctrl/Cmd + Y or Shift + Ctrl/Cmd + Z</li>
                            <li><strong>Counter:</strong> + / - keys</li>
                        </ul>
                    </div>
                    <div>
                        <h3>How it works</h3>
                        <p>
                            Each change pushes the previous state to <em>past</em> and clears <em>future</em>. Undo moves the present to future and brings back the last past entry. Redo does the opposite. The slider and list let you time-travel to any snapshot.
                        </p>
                    </div>
                </div>
            </Styled.Help>
        </Styled.Page>
    );
};

export default ExampleUndoRedo;
