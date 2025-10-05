import{d as y,a as I,r as c,j as e,N as W,l as B,e as Y,m as U,n as L,o as H,p as q,k as F}from"./index-BscvFKDB.js";const u="var(--text, #f3f4f6)",N="var(--muted, #a0a0a7)",m="var(--card, #111318)",l="var(--border, #23262d)",a="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",j="var(--danger, #ef4444)",R="var(--radius, 16px)",$={Page:y.div`
        padding: 24px 0 64px;
        color: ${u};
    `,Header:y.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;
        border: 1px solid ${l};
        background: ${m};
        border-radius: ${R};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${N};
        }
        .breadcrumbs .current {
            color: ${u};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${N};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${l};
            background: ${m};
            color: ${u};
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                transform 0.08s;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Banner:y.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${l};
        border-radius: 10px;
        background: color-mix(in oklab, ${a} 10%, transparent);
        color: ${u};
    `,Grid:y.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        @media (min-width: 980px) {
            grid-template-columns: 1fr 1fr;
        }

        .card {
            border: 1px solid ${l};
            background: ${m};
            border-radius: ${R};
            padding: 16px 18px;
            box-shadow: var(--shadow);
        }
        h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .muted {
            color: ${N};
        }

        .btnRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 12px;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
            padding: 10px 14px;
            border: 1px solid ${l};
            background: ${m};
            color: ${u};
            font-weight: 700;
            letter-spacing: 0.2px;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                transform 0.08s, background 0.25s;
            display: flex;
            gap: 15px;
            align-items: center;
        }
        .btnPrimary:hover {
            color: ${a};
            border-color: ${a};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnDanger {
            border-color: ${j};
            color: ${j};
        }
        .btnDanger:hover {
            background: color-mix(in oklab, ${j} 10%, transparent);
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            color: ${a};
            border-color: ${a};
        }

        .tableWrap {
            overflow: auto;
            margin-top: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${l};
        }
        th {
            text-align: left;
            background: ${m};
            color: ${a};
            font-weight: 600;
            position: sticky;
            top: 0;
        }
    `,Overlay:y.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
        padding: 20px;
    `,Modal:y.div`
        width: min(560px, 96vw);
        border: 1px solid ${l};
        border-radius: ${R};
        background: ${m};
        color: ${u};
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
        overflow: hidden;

        &.danger header .titleWrap svg {
            color: ${j};
        }
        &.primary header .titleWrap svg,
        &.info header .titleWrap svg {
            color: ${a};
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            padding: 14px 16px;
            border-bottom: 1px solid ${l};
        }
        .titleWrap {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        h4 {
            font-size: 18px;
        }
        .iconBtn {
            border: 1px solid ${l};
            background: ${m};
            color: ${N};
            border-radius: 8px;
            padding: 6px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
        }
        .iconBtn:hover {
            color: ${a};
            border-color: ${a};
            box-shadow: 0 0 0 3px ${D};
        }
        .iconBtn:active {
            transform: translateY(1px);
        }

        .body {
            padding: 14px 16px;
        }
        .body p {
            margin: 0 0 12px;
        }
        .field {
            margin-top: 10px;
        }
        .field label {
            display: block;
            font-size: 12px;
            color: ${N};
            margin-bottom: 6px;
        }
        .field input {
            width: 100%;
            padding: 8px 10px;
            border-radius: 8px;
            border: 1px solid ${l};
            background: ${m};
            color: ${u};
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .field input:focus {
            outline: none;
            border-color: ${a};
            box-shadow: 0 0 0 3px ${D};
        }

        footer {
            padding: 12px 16px;
            border-top: 1px solid ${l};
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .btnGhost,
        .btnPrimary,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${l};
            background: ${m};
            color: ${u};
            font-weight: 700;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                transform 0.08s, background 0.25s;
        }
        .btnPrimary:hover {
            color: ${a};
            border-color: ${a};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnDanger {
            border-color: ${j};
            color: ${j};
        }
        .btnDanger:hover {
            background: color-mix(in oklab, ${j} 10%, transparent);
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
        }
        .btnGhost:hover {
            color: ${a};
            border-color: ${a};
        }
        .btnGhost:active,
        .btnPrimary:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `},A=o=>{const t=o instanceof Date?o:new Date(o),n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=h=>String(h).padStart(2,"0");return`${n[t.getDay()]} ${d[t.getMonth()]} ${w(t.getDate())} ${t.getFullYear()}`},z=o=>{const t=o instanceof Date?o:new Date(o),n=d=>String(d).padStart(2,"0");return`${A(t)} ${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}hrs`},J=o=>{const t=o instanceof Date?o:new Date(o),n=d=>String(d).padStart(2,"0");return`${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}hrs`},M=({open:o,variant:t="primary",title:n,message:d,confirmText:w="Confirm",cancelText:h="Cancel",autoFocus:s="confirm",input:b=null,onClose:p,onConfirm:f})=>{const C=c.useRef(null),k=c.useRef(null),r=c.useRef(null),v=c.useRef(null);if(c.useEffect(()=>{var P;if(!o)return;const x=C.current,i=x==null?void 0:x.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),O=i==null?void 0:i[0],T=i==null?void 0:i[i.length-1],E=s==="cancel"?v.current:r.current;(P=b?k.current:E||O)==null||P.focus();const G=g=>{g.key==="Escape"&&(g.preventDefault(),p==null||p()),g.key==="Tab"&&i&&i.length>0&&(g.shiftKey&&document.activeElement===O?(g.preventDefault(),T.focus()):!g.shiftKey&&document.activeElement===T&&(g.preventDefault(),O.focus()))};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[o,p,s,b]),!o)return null;const S=()=>{var i;const x=b?((i=k.current)==null?void 0:i.value)??"":void 0;f==null||f(x)};return e.jsx($.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:p,children:e.jsxs($.Modal,{className:`card ${t}`,ref:C,onMouseDown:x=>x.stopPropagation(),"aria-labelledby":"cm-title","aria-describedby":"cm-desc",children:[e.jsxs("header",{children:[e.jsxs("div",{className:"titleWrap",children:[t==="danger"?e.jsx(H,{size:20}):t==="info"?e.jsx(L,{size:20}):e.jsx(q,{size:20}),e.jsx("h4",{id:"cm-title",children:n})]}),e.jsx("button",{className:"iconBtn",onClick:p,"aria-label":"Close",children:e.jsx(F,{size:18})})]}),e.jsxs("div",{className:"body",children:[e.jsx("p",{id:"cm-desc",children:d}),b&&e.jsxs("div",{className:"field",children:[e.jsx("label",{children:b.label}),e.jsx("input",{ref:k,placeholder:b.placeholder||""})]})]}),e.jsxs("footer",{children:[e.jsx("button",{ref:v,className:"btnGhost",onClick:p,children:h}),e.jsx("button",{ref:r,className:t==="danger"?"btnDanger":"btnPrimary",onClick:S,children:w})]})]})})},V=()=>{const{pathname:o}=I(),[t,n]=c.useState(""),[d,w]=c.useState([]),[h,s]=c.useState({archive:!1,delete:!1,cancelOrder:!1,info:!1}),b=c.useRef(null),p=c.useMemo(()=>new Date,[o]),f=(r,v="")=>{const S={id:`LOG-${d.length+1}`,ts:new Date,action:r,meta:v};w(x=>[S,...x.slice(0,49)]),n(`${r} at ${z(S.ts)}`)};c.useEffect(()=>{if(!t)return;const r=setTimeout(()=>n(""),3600);return()=>clearTimeout(r)},[t]);const C=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},k=async()=>{try{await navigator.clipboard.writeText(window.location.href),n("Deep link copied to clipboard")}catch{n("Unable to copy link")}};return e.jsxs($.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs($.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Confirm Modal Showcase"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(W,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Confirm Modal"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Today: ",A(p)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Local Time: ",J(p)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsxs("button",{className:"btnGhost",onClick:k,title:"Copy deep link",children:[e.jsx(B,{size:16})," Copy Link"]}),e.jsxs("button",{className:"btnGhost",onClick:C,title:"Print confirmation log",children:[e.jsx(Y,{size:16})," Print Log"]})]})]}),t?e.jsx($.Banner,{role:"status","aria-live":"polite",children:t}):null,e.jsxs($.Grid,{children:[e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"Basic (Archive)"}),e.jsx("p",{className:"muted",children:"Non-destructive action using the primary style."}),e.jsx("div",{className:"btnRow",children:e.jsx("button",{className:"btnPrimary",onClick:()=>s(r=>({...r,archive:!0})),title:"Open archive confirm",children:"Archive Invoice INV-2031"})})]}),e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"Danger (Delete)"}),e.jsx("p",{className:"muted",children:"Destructive action with a red emphasis. Demo-only — no actual delete."}),e.jsx("div",{className:"btnRow",children:e.jsxs("button",{className:"btnDanger",onClick:()=>s(r=>({...r,delete:!0})),title:"Open delete confirm",children:[e.jsx(U,{size:16})," Delete Customer CUST-1001"]})})]}),e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"With Reason"}),e.jsx("p",{className:"muted",children:"Ask for a short reason. Great for cancellations / reversals."}),e.jsx("div",{className:"btnRow",children:e.jsx("button",{className:"btnPrimary",onClick:()=>s(r=>({...r,cancelOrder:!0})),title:"Open cancel order modal",children:"Cancel Order ORD-3001"})})]}),e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"Informational"}),e.jsx("p",{className:"muted",children:"Use an info tone for acknowledgement flows."}),e.jsx("div",{className:"btnRow",children:e.jsxs("button",{className:"btnGhost",onClick:()=>s(r=>({...r,info:!0})),title:"Open info modal",children:[e.jsx(L,{size:16})," Session & Terms"]})})]}),e.jsxs("aside",{className:"card",id:"search-print-area",ref:b,children:[e.jsx("h3",{children:"Confirmation Log"}),e.jsx("p",{className:"muted",children:"Latest 50 entries. This section prints cleanly."}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:120},children:"Time"}),e.jsx("th",{style:{width:160},children:"Action"}),e.jsx("th",{children:"Meta"})]})}),e.jsx("tbody",{children:d.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:3,className:"muted",children:"No confirmations yet."})}):d.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:z(r.ts)}),e.jsx("td",{children:r.action}),e.jsx("td",{children:r.meta||"-"})]},r.id))})]})})]})]}),e.jsx(M,{open:h.archive,variant:"primary",title:"Archive Invoice?",message:"INV-2031 will be moved to archive. You can restore it anytime from Invoices → Filters.",confirmText:"Archive",onClose:()=>s(r=>({...r,archive:!1})),onConfirm:()=>{s(r=>({...r,archive:!1})),f("Archived invoice","INV-2031")}}),e.jsx(M,{open:h.delete,variant:"danger",title:"Delete Customer?",message:"This action cannot be undone. In demo mode, nothing will be deleted — this is for UI showcase.",confirmText:"Delete",onClose:()=>s(r=>({...r,delete:!1})),onConfirm:()=>{s(r=>({...r,delete:!1})),f("Delete requested","CUST-1001 (demo)")}}),e.jsx(M,{open:h.cancelOrder,variant:"primary",title:"Cancel Order?",message:"Please provide a short reason for cancellation.",input:{label:"Reason",placeholder:"e.g., Customer requested"},confirmText:"Cancel Order",onClose:()=>s(r=>({...r,cancelOrder:!1})),onConfirm:r=>{s(v=>({...v,cancelOrder:!1})),f("Order cancelled",`ORD-3001 — ${r||"No reason"}`)}}),e.jsx(M,{open:h.info,variant:"info",title:"Session Notice",message:"You’re exploring a display-only demo. Some actions are intentionally disabled. Continue?",confirmText:"Got it",onClose:()=>s(r=>({...r,info:!1})),onConfirm:()=>{s(r=>({...r,info:!1})),f("Acknowledged","Demo session notice")}})]})};export{V as default};
