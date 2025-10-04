import{d as h,r as i,j as e,N as w}from"./index-RFS3WyFt.js";const b="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",g="var(--card, #111318)",o="var(--border, #23262d)",n="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",y="var(--danger, #ef4444)",c={Page:h.div`
        padding: 24px 0 64px;
        color: ${b};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${x};
            }
            .current {
                color: ${b};
            }
        }
    `,Header:h.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${x};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${g};
            color: ${b};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.1s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }
        .btnDanger {
            border-color: ${y};
            color: ${y};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${y} 10%, transparent);
        }
    `,Grid:h.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1020px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main {
            display: grid;
            gap: 16px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .summary {
            display: grid;
            gap: 8px;
        }
        .summary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .summary .k {
            color: ${x};
        }
        .summary .v {
            color: ${b};
        }

        .links,
        .shortcuts {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${x};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${o};
            background: ${g};
        }
        .links a:hover {
            color: ${n};
            border-color: ${n};
        }
        .shortcuts code {
            border: 1px solid ${o};
            border-radius: 6px;
            padding: 2px 6px;
        }
    `,CounterCard:h.div`
        padding: 16px 18px;
        border: 1px solid ${o};
        border-radius: 12px;
        background: ${g};
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        transition: border-color 0.25s, box-shadow 0.25s, transform 0.1s;

        &.active {
            border-color: ${n};
            box-shadow: 0 0 0 3px ${D};
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        header h3 {
            font-size: 16px;
        }
        .hint {
            color: ${x};
            font-size: 12px;
        }

        .row {
            display: grid;
            grid-template-columns: 80px 1fr;
            gap: 10px;
            align-items: center;
            margin-bottom: 10px;
        }
        label {
            color: ${x};
            font-size: 12px;
        }

        .value {
            font-size: 40px;
            font-weight: 700;
            letter-spacing: 0.5px;
            margin: 6px 0 12px;
            text-align: center;
        }

        .controls {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .controls > button {
            border: 1px solid ${o};
            background: ${g};
            color: ${b};
            border-radius: 10px;
            padding: 8px 14px;
            font-weight: 700;
            transition: color 0.25s, border-color 0.25s, box-shadow 0.25s,
                transform 0.1s, background 0.25s;
            min-width: 64px;
        }
        .controls > button:hover {
            color: ${n};
            border-color: ${n};
            box-shadow: 0 0 0 3px ${D};
        }
        .controls > button:active {
            transform: translateY(1px);
        }
        .controls > button[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
            box-shadow: none;
        }

        .btnGhost {
            opacity: 0.9;
        }

        .spinner {
            width: 16px;
            height: 16px;
            display: inline-block;
            border-radius: 50%;
            border: 2px solid ${o};
            border-top-color: ${n};
            animation: spin 0.8s linear infinite;
            vertical-align: -3px;
        }
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        footer {
            margin-top: 10px;
            text-align: center;
            color: ${x};
            font-size: 12px;
        }
        footer .kbd span {
            display: inline-block;
            padding: 0 6px;
            margin: 0 2px;
            border: 1px solid ${o};
            border-radius: 6px;
        }

        /* progress UI for bounded */
        .progressWrap {
            position: relative;
            margin: 10px 0 12px;
        }
        .progressTrack {
            height: 10px;
            border: 1px solid ${o};
            border-radius: 999px;
            background: color-mix(in oklab, ${n} 8%, transparent);
        }
        .progressBar {
            position: relative;
            height: 10px;
            border-radius: 999px;
            background: ${n};
            transform: translateY(-10px);
        }
        .progressMeta {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: ${x};
            margin-top: -2px;
        }
    `,StatsGrid:h.div`
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr 1fr;
    `,Stat:h.div`
        border: 1px solid ${o};
        border-radius: 10px;
        padding: 10px 12px;
        background: ${g};
        .label {
            color: ${x};
            font-size: 12px;
        }
        .value {
            font-size: 18px;
            font-weight: 700;
        }
    `,Overlay:h.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:h.div`
        width: min(520px, 92vw);
        border-radius: 16px;
        border: 1px solid ${o};
        background: ${g};
        color: ${b};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${o};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${b};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${o};
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${g};
            color: ${b};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnDanger {
            border-color: ${y};
            color: ${y};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${y} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }
    `},j=r=>String(r).padStart(2,"0"),Y=r=>{const a=r instanceof Date?r:new Date(r),k=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${k[a.getDay()]} ${m[a.getMonth()]} ${j(a.getDate())} ${a.getFullYear()}`},A=r=>{const a=r instanceof Date?r:new Date(r);return`${Y(a)} ${j(a.getHours())}:${j(a.getMinutes())}:${j(a.getSeconds())}hrs`},J=r=>{const a=r instanceof Date?r:new Date(r);return`${j(a.getHours())}:${j(a.getMinutes())}:${j(a.getSeconds())}hrs`},W=({open:r,title:a,message:k,onConfirm:m,onClose:p,confirmText:t="Confirm"})=>r?e.jsx(c.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:p,children:e.jsxs(c.Modal,{className:"card",onMouseDown:P=>P.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:a})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:k})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:p,children:"Cancel"}),e.jsx("button",{className:"btnDanger",onClick:m,children:t})]})]})}):null,M=({label:r,value:a})=>e.jsxs(c.Stat,{children:[e.jsx("div",{className:"label",children:r}),e.jsx("div",{className:"value","aria-live":"polite",children:a})]}),K=()=>{const r=i.useMemo(()=>new Date,[]),[a,k]=i.useState(()=>new Date),[m,p]=i.useState(0),[t,P]=i.useState(5),[R,v]=i.useState(10),[N,f]=i.useState(3),$=0,u=10,[G,B]=i.useState(!1),[l,z]=i.useState("basic"),[E,C]=i.useState(!1);i.useEffect(()=>{const s=setInterval(()=>k(new Date),1e3);return()=>clearInterval(s)},[]),i.useEffect(()=>{const s=O=>{const S=O.key;S==="+"||S==="="?(l==="basic"&&p(d=>d+1),l==="stepped"&&v(d=>d+t),l==="bounded"&&f(d=>Math.min(u,d+1))):S==="-"?(l==="basic"&&p(d=>d-1),l==="stepped"&&v(d=>d-t),l==="bounded"&&f(d=>Math.max($,d-1))):S==="0"&&C(!0)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[l,t]);const I=async()=>{G||(B(!0),await new Promise(s=>setTimeout(s,900)),p(s=>s+1),B(!1))},L=()=>{C(!1),p(0),v(10),f(3)},T=Math.round((N-$)/(u-$)*100),F=i.useRef(null),H=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(c.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(c.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Example: Counter"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(w,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Counter"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Session: ",A(r)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Now: ",A(a)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>C(!0),title:"Reset all counters (0 key)",children:"Reset All"}),e.jsx("button",{className:"btnPrimary",onClick:H,title:"Print the summary panel",children:"Print"})]})]}),e.jsxs(c.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs(c.CounterCard,{className:`card ${l==="basic"?"active":""}`,role:"group","aria-label":"Basic counter",onClick:()=>z("basic"),children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Basic"}),e.jsx("span",{className:"hint",children:"Click to target. Use + / - keys."})]}),e.jsx("div",{className:"value","aria-live":"polite","data-testid":"basic-value",children:m}),e.jsxs("div",{className:"controls",children:[e.jsx("button",{onClick:()=>p(s=>s-1),"aria-label":"Decrease",children:"−"}),e.jsx("button",{onClick:()=>p(s=>s+1),"aria-label":"Increase",children:"+"}),e.jsx("button",{onClick:I,disabled:G,"aria-label":"Async increment",title:"Adds 1 after a short delay",children:G?e.jsx("span",{className:"spinner","aria-hidden":"true"}):"Async +1"})]}),e.jsx("footer",{children:e.jsxs("div",{className:"kbd",children:[e.jsx("span",{children:"+"}),"/",e.jsx("span",{children:"-"})," or ",e.jsx("span",{children:"0"})," to reset all"]})})]}),e.jsxs(c.CounterCard,{className:`card ${l==="stepped"?"active":""}`,role:"group","aria-label":"Stepped counter",onClick:()=>z("stepped"),children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Stepped"}),e.jsx("span",{className:"hint",children:"Choose a step and nudge."})]}),e.jsxs("div",{className:"row",children:[e.jsx("label",{htmlFor:"stepSel",children:"Step"}),e.jsxs("select",{id:"stepSel",value:t,onChange:s=>P(Number(s.target.value)),children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:25,children:"25"})]})]}),e.jsx("div",{className:"value","aria-live":"polite","data-testid":"stepped-value",children:R}),e.jsxs("div",{className:"controls",children:[e.jsxs("button",{onClick:()=>v(s=>s-t),"aria-label":`Decrease by ${t}`,children:["−",t]}),e.jsxs("button",{onClick:()=>v(s=>s+t),"aria-label":`Increase by ${t}`,children:["+",t]}),e.jsx("button",{className:"btnGhost",onClick:()=>v(0),"aria-label":"Reset stepped to 0",children:"Reset"})]})]}),e.jsxs(c.CounterCard,{className:`card ${l==="bounded"?"active":""}`,role:"group","aria-label":"Bounded counter",onClick:()=>z("bounded"),children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Bounded"}),e.jsxs("span",{className:"hint",children:["Min ",$," · Max ",u]})]}),e.jsx("div",{className:"value","aria-live":"polite","data-testid":"bounded-value",children:N}),e.jsxs("div",{className:"progressWrap","aria-label":"Progress",children:[e.jsx("div",{className:"progressTrack"}),e.jsx("div",{className:"progressBar",style:{width:`${T}%`}}),e.jsxs("div",{className:"progressMeta",children:[e.jsx("span",{children:$}),e.jsxs("span",{children:[T,"%"]}),e.jsx("span",{children:u})]})]}),e.jsxs("div",{className:"controls",children:[e.jsx("button",{onClick:()=>f(s=>Math.max($,s-1)),"aria-label":"Decrease bounded",children:"−"}),e.jsx("button",{onClick:()=>f(s=>Math.min(u,s+1)),"aria-label":"Increase bounded",children:"+"}),e.jsx("button",{className:"btnGhost",onClick:()=>f(3),"aria-label":"Reset bounded to 3",children:"Reset"})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",id:"search-print-area",ref:F,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"summary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Basic"}),e.jsx("span",{className:"v",children:m})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Stepped"}),e.jsxs("span",{className:"v",children:[R," (step ",t,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Bounded"}),e.jsxs("span",{className:"v",children:[N," / ",u]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Snapshot"}),e.jsx("span",{className:"v",children:A(a)})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Live Stats"}),e.jsxs(c.StatsGrid,{children:[e.jsx(M,{label:"Total (all)",value:m+R+N}),e.jsx(M,{label:"Max allowed",value:u}),e.jsx(M,{label:"Active panel",value:l}),e.jsx(M,{label:"Clock",value:J(a)})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Shortcuts"}),e.jsxs("ul",{className:"shortcuts",children:[e.jsxs("li",{children:[e.jsx("code",{children:"+"})," / ",e.jsx("code",{children:"-"})," — increment/decrement active panel"]}),e.jsxs("li",{children:[e.jsx("code",{children:"0"})," — Reset all (asks confirmation)"]}),e.jsx("li",{children:"Click a card to make it active"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(w,{to:"/examples",children:"Examples Overview"})}),e.jsx("li",{children:e.jsx(w,{to:"/examples/table",children:"Table"})}),e.jsx("li",{children:e.jsx(w,{to:"/examples/print",children:"Print Demo"})}),e.jsx("li",{children:e.jsx(w,{to:"/reports",children:"Reports"})})]})]})]})]}),e.jsx(W,{open:E,title:"Reset counters?",message:"This will set all counters back to their initial state.",confirmText:"Reset",onConfirm:L,onClose:()=>C(!1)})]})};export{K as default};
