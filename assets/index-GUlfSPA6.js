import{d as C,j as e,N as K,r as l}from"./index-BauM8ZfN.js";const b="var(--text, #f3f4f6)",k="var(--muted, #a0a0a7)",f="var(--card, #111318)",x="var(--border, #23262d)",u="var(--accent, #5aa9ff)",U="var(--accent-soft, rgba(90,169,255,0.15))",v={Page:C.div`
        padding: 22px 0 64px;
        color: ${b};

        .container & {
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 6px;
            a {
                color: ${k};
            }
            .current {
                color: ${b};
            }
        }
    `,Header:C.header`
        padding: 16px 20px;
        margin-bottom: 16px;
        border: 1px solid ${x};
        border-radius: 12px;
        background: ${f};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            color: ${k};
            font-size: 12px;
        }
    `,Grid:C.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        @media (min-width: 1000px) {
            grid-template-columns: 1fr 1fr;
            align-items: start;
        }
    `,Card:C.section`
        border: 1px solid ${x};
        border-radius: 12px;
        background: ${f};
        box-shadow: var(--shadow);
        padding: 14px;
        outline: none;

        &:focus-visible {
            box-shadow: 0 0 0 3px ${U};
        }

        .counterWrap {
            display: grid;
            gap: 12px;
            padding: 8px 4px 16px;
        }

        .value {
            font-size: 42px;
            font-weight: 700;
            text-align: center;
            padding: 6px 0 10px;
        }

        .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        button {
            border-radius: 8px;
            border: 1px solid ${x};
            background: ${f};
            color: ${b};
            padding: 8px 12px;
            font-weight: 600;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
                background 0.2s, transform 0.04s;
        }
        button:hover {
            border-color: ${u};
            color: ${u};
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        .hint {
            color: ${k};
            font-size: 12px;
            text-align: center;
            margin-top: 2px;
        }

        .noteWrap {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: 1.2fr 0.8fr;
            }
        }

        .editor .field {
            margin-bottom: 12px;
        }
        .editor .two {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
            align-items: end;
        }
        .editor label {
            color: ${k};
            font-size: 12px;
            display: block;
            margin-bottom: 6px;
        }
        .editor input,
        .editor textarea {
            width: 100%;
            border: 1px solid ${x};
            background: ${f};
            color: ${b};
            border-radius: 8px;
            padding: 8px 10px;
        }
        .editor input:focus,
        .editor textarea:focus {
            outline: none;
            border-color: ${u};
            box-shadow: 0 0 0 3px ${U};
        }
        .editor .actions {
            display: flex;
            gap: 8px;
        }

        .preview {
            padding: 12px;
            border-radius: 10px;
            border: 1px solid ${x};
            background: color-mix(in oklab, ${f} 96%, transparent);
        }
        .preview .ph {
            color: ${k};
            font-size: 12px;
            margin-bottom: 8px;
        }
        .preview h3 {
            margin-bottom: 10px;
        }
        .preview .body {
            white-space: pre-wrap;
            line-height: 1.6;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: ${b};
        }
    `,Toolbar:C.div`
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 6px 10px;
        border-bottom: 1px dashed ${x};
        margin: -6px -6px 12px -6px;

        .label {
            font-weight: 700;
            letter-spacing: 0.3px;
            padding: 0 8px;
        }
        .spacer {
            flex: 1;
        }

        button {
            border-radius: 8px;
            border: 1px solid ${x};
            background: ${f};
            color: ${b};
            padding: 8px 12px;
            font-weight: 600;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
                background 0.2s, transform 0.04s;
        }
        button:hover {
            border-color: ${u};
            color: ${u};
        }
        button:active {
            transform: translateY(1px);
        }
        button.primary {
            border-color: ${u};
        }
    `,History:C.div`
        margin-top: 12px;
        padding: 10px;
        border: 1px solid ${x};
        border-radius: 10px;
        background: color-mix(in oklab, ${f} 96%, transparent);

        .top {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }
        .title {
            font-weight: 700;
        }
        .meta {
            color: ${k};
            font-size: 12px;
        }

        .slider {
            width: 100%;
            margin: 4px 0 10px;
            appearance: none;
            height: 4px;
            border-radius: 999px;
            background: linear-gradient(90deg, ${u}, transparent);
            outline: none;
        }
        .slider::-webkit-slider-thumb {
            appearance: none;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: ${u};
            border: 1px solid ${x};
            cursor: pointer;
        }
        .slider::-moz-range-thumb {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: ${u};
            border: 1px solid ${x};
            cursor: pointer;
        }

        .list {
            display: grid;
            gap: 6px;
            max-height: 260px;
            overflow: auto;
        }

        .row {
            display: grid;
            grid-template-columns: 14px 28px 1fr;
            align-items: center;
            gap: 10px;
            text-align: left;
            border: 1px solid ${x};
            background: ${f};
            color: ${b};
            border-radius: 8px;
            padding: 6px 8px;
            transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .row:hover {
            border-color: ${u};
            color: ${u};
        }
        .row.current {
            border-color: ${u};
            box-shadow: 0 0 0 3px ${U};
        }
        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${u};
            border: 1px solid ${x};
            justify-self: center;
        }
        .idx {
            font-variant-numeric: tabular-nums;
            color: ${k};
        }
        .val {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12.5px;
            color: ${b};
        }
    `,Help:C.section`
        margin-top: 16px;
        padding: 14px 16px;
        border: 1px solid ${x};
        border-radius: 12px;
        background: ${f};
        box-shadow: var(--shadow);

        .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 2fr;
            }
        }
        h3 {
            margin-bottom: 10px;
        }
        p,
        li {
            color: ${b};
        }
        ul {
            margin-left: 18px;
        }
    `},E=(t,i)=>{const n=t instanceof Date?t:new Date(t),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=m=>String(m).padStart(2,"0");return`${`${a[n.getDay()]} ${o[n.getMonth()]} ${c(n.getDate())} ${n.getFullYear()}`} ${c(n.getHours())}:${c(n.getMinutes())}:${c(n.getSeconds())}hrs`};function T(t,{capacity:i=100}={}){const[n,a]=l.useState([]),[o,c]=l.useState(t),[h,m]=l.useState([]),S=l.useCallback(s=>{a(p=>{const g=o,j=typeof s=="function"?s(g):s;if(Object.is(j,g))return p;const z=[...p,g];return z.length>i&&z.shift(),c(j),m([]),z})},[o,i]),R=l.useCallback(()=>{a(s=>{if(s.length===0)return s;const p=s[s.length-1],g=s.slice(0,-1);return m(j=>[o,...j]),c(p),g})},[o]),N=l.useCallback(()=>{m(s=>{if(s.length===0)return s;const p=s[0],g=s.slice(1);return a(j=>[...j,o]),c(p),g})},[o]),y=l.useCallback((s=t)=>{a([]),c(s),m([])},[t]),w=l.useMemo(()=>[...n,o,...h],[n,o,h]),D=l.useMemo(()=>n.length,[n]),$=n.length>0,d=h.length>0,r=l.useCallback(s=>{const p=[...n,o,...h];if(s<0||s>=p.length)return;const g=p[s],j=p.slice(0,s),z=p.slice(s+1);a(j),c(g),m(z)},[n,o,h]);return{state:o,set:S,undo:R,redo:N,reset:y,canUndo:$,canRedo:d,timeline:w,index:D,jump:r}}const M=({label:t,onUndo:i,onRedo:n,onReset:a,canUndo:o,canRedo:c})=>e.jsxs(v.Toolbar,{children:[e.jsx("div",{className:"label",children:t}),e.jsx("div",{className:"spacer"}),e.jsx("button",{onClick:i,disabled:!o,title:"Undo (Ctrl/Cmd+Z)",children:"Undo"}),e.jsx("button",{onClick:n,disabled:!c,title:"Redo (Ctrl/Cmd+Y or Shift+Ctrl/Cmd+Z)",children:"Redo"}),e.jsx("button",{className:"primary",onClick:a,title:"Reset state",children:"Reset"})]}),H=({timeline:t,index:i,onJump:n})=>e.jsxs(v.History,{className:"card",children:[e.jsxs("div",{className:"top",children:[e.jsx("div",{className:"title",children:"History"}),e.jsxs("div",{className:"meta",children:["Steps: ",t.length]})]}),e.jsx("input",{className:"slider",type:"range",min:0,max:Math.max(0,t.length-1),value:i,onChange:a=>n(Number(a.target.value)),"aria-label":"Time travel slider"}),e.jsx("div",{className:"list",children:t.map((a,o)=>e.jsxs("button",{className:o===i?"row current":"row",onClick:()=>n(o),title:o===i?"Current state":"Jump to this state",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"idx",children:o}),e.jsx("span",{className:"val",children:L(a)})]},o))})]});function L(t){if(typeof t=="number")return`value: ${t}`;if(typeof t=="string")return t.slice(0,40)||"empty";if(t&&typeof t=="object"){if("title"in t)return`${t.title} • ${String((t.body||"").length)} chars`;try{return JSON.stringify(t).slice(0,60)}catch{return"object"}}return String(t)}const J=()=>{const{state:t,set:i,undo:n,redo:a,reset:o,canUndo:c,canRedo:h,timeline:m,index:S,jump:R}=T(0),N=l.useRef(null),y=()=>i(r=>r+1),w=()=>i(r=>r-1),D=()=>i(r=>r+10),$=()=>i(r=>r-10),d=l.useCallback(r=>{(r.ctrlKey||r.metaKey)&&(r.key.toLowerCase()==="z"?(r.preventDefault(),r.shiftKey?a():n()):r.key.toLowerCase()==="y"&&(r.preventDefault(),a())),!r.ctrlKey&&!r.metaKey&&(r.key==="+"&&(r.preventDefault(),y()),r.key==="-"&&(r.preventDefault(),w()))},[n,a]);return l.useEffect(()=>{const r=N.current;if(r)return r.addEventListener("keydown",d),()=>r.removeEventListener("keydown",d)},[d]),e.jsxs(v.Card,{tabIndex:0,ref:N,"aria-label":"Counter undo redo zone",children:[e.jsx(M,{label:"Counter",onUndo:n,onRedo:a,onReset:()=>o(0),canUndo:c,canRedo:h}),e.jsxs("div",{className:"counterWrap",children:[e.jsx("div",{className:"value","aria-live":"polite",children:t}),e.jsxs("div",{className:"grid",children:[e.jsx("button",{onClick:w,title:"Decrement (-)",children:"-1"}),e.jsx("button",{onClick:y,title:"Increment (+)",children:"+1"}),e.jsx("button",{onClick:$,title:"Subtract 10",children:"-10"}),e.jsx("button",{onClick:D,title:"Add 10",children:"+10"})]}),e.jsx("div",{className:"hint",children:"Tips: Use + / - keys. Undo: Ctrl/Cmd+Z, Redo: Ctrl/Cmd+Y or Shift+Ctrl/Cmd+Z"})]}),e.jsx(H,{timeline:m,index:S,onJump:R})]})},O=()=>{const t=l.useMemo(()=>({title:"Daily Note",body:`Welcome. Try typing here and then undo/redo.

Shortcuts:
- Undo: Ctrl/Cmd+Z
- Redo: Ctrl/Cmd+Y or Shift+Ctrl/Cmd+Z

Time travel with the slider below.`,lastEditedAt:new Date().toISOString()}),[]),{state:i,set:n,undo:a,redo:o,reset:c,canUndo:h,canRedo:m,timeline:S,index:R,jump:N}=T(t),y=l.useRef(null),w=d=>{const{name:r,value:s}=d.target;n(p=>({...p,[r]:s,lastEditedAt:new Date().toISOString()}))},D=async()=>{try{await navigator.clipboard.writeText(JSON.stringify(i,null,2))}catch{}},$=l.useCallback(d=>{(d.ctrlKey||d.metaKey)&&(d.key.toLowerCase()==="z"?(d.preventDefault(),d.shiftKey?o():a()):d.key.toLowerCase()==="y"&&(d.preventDefault(),o()))},[a,o]);return l.useEffect(()=>{const d=y.current;if(d)return d.addEventListener("keydown",$),()=>d.removeEventListener("keydown",$)},[$]),e.jsxs(v.Card,{tabIndex:0,ref:y,"aria-label":"Notes undo redo zone",children:[e.jsx(M,{label:"Notes",onUndo:a,onRedo:o,onReset:()=>c(t),canUndo:h,canRedo:m}),e.jsxs("div",{className:"noteWrap",children:[e.jsxs("div",{className:"editor",children:[e.jsxs("div",{className:"field two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Title"}),e.jsx("input",{name:"title",value:i.title,onChange:w,placeholder:"Title"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Last Edited"}),e.jsx("div",{className:"meta",children:E(i.lastEditedAt)})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Body"}),e.jsx("textarea",{rows:10,name:"body",value:i.body,onChange:w,placeholder:"Start typing..."})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:D,title:"Copy current note as JSON",children:"Copy JSON"})})]}),e.jsxs("div",{className:"preview card",children:[e.jsx("div",{className:"ph",children:"Preview"}),e.jsx("h3",{children:i.title||"Untitled"}),e.jsx("pre",{className:"body",children:i.body||"Nothing yet."})]})]}),e.jsx(H,{timeline:S,index:R,onJump:N})]})},Y=()=>e.jsxs(v.Page,{className:"container",children:[e.jsx(v.Header,{className:"card",children:e.jsxs("div",{children:[e.jsx("h1",{children:"Undo / Redo"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(K,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Undo / Redo"})]}),e.jsxs("div",{className:"meta",children:["Interactive demo without persistence • ",E(new Date)]})]})}),e.jsxs(v.Grid,{children:[e.jsx(J,{}),e.jsx(O,{})]}),e.jsx(v.Help,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Keyboard"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Undo:"})," Ctrl/Cmd + Z"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Redo:"})," Ctrl/Cmd + Y or Shift + Ctrl/Cmd + Z"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Counter:"})," + / - keys"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"How it works"}),e.jsxs("p",{children:["Each change pushes the previous state to ",e.jsx("em",{children:"past"})," and clears ",e.jsx("em",{children:"future"}),". Undo moves the present to future and brings back the last past entry. Redo does the opposite. The slider and list let you time-travel to any snapshot."]})]})]})})]});export{Y as default};
