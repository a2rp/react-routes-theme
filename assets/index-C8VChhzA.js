import{d as y,R as k,r as N,j as e,N as w}from"./index-B_KzNciT.js";const f="var(--text, #f3f4f6)",m="var(--muted, #a0a0a7)",v="var(--card, #111318)",x="var(--border, #23262d)",d="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",C="var(--radius, 16px)",$={Page:y.div`
        padding: 24px 0 64px;
        color: ${f};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${m};
            }
            .current {
                color: ${f};
            }
        }

        .muted {
            color: ${m};
        }
        code {
            padding: 0 6px;
            border: 1px solid ${x};
            border-radius: 6px;
            background: ${v};
        }
    `,Header:y.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${m};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${x};
            background: ${v};
            color: ${f};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnGhost:hover {
            border-color: ${d};
            color: ${d};
        }
    `,Grid:y.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .col {
            display: grid;
            gap: 16px;
        }

        .card {
            border: 1px solid ${x};
            background: ${v};
            border-radius: ${C};
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        .stacks .stack {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 760px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .slice {
            border: 1px dashed ${x};
            border-radius: 12px;
            padding: 14px;
            display: grid;
            gap: 12px;
        }
        .sliceHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }
        .slice h4 {
            font-size: 14px;
        }
        .slice .value {
            font-size: 24px;
            font-weight: 700;
        }
        .rowBtns {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        }
        .rowBtns button {
            border: 1px solid ${x};
            border-radius: 8px;
            padding: 8px 0;
            background: ${v};
            color: ${f};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .rowBtns button:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${D};
        }

        .derived .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 760px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .derived .label {
            color: ${m};
            font-size: 12px;
        }
        .derived .big {
            font-size: 20px;
            font-weight: 700;
        }

        .renderBadge {
            border: 1px solid ${x};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            color: ${m};
            background: color-mix(in oklab, ${d} 8%, transparent);
        }

        .perf h3 {
            margin-bottom: 6px;
        }
        .tips {
            margin-top: 10px;
            display: grid;
            gap: 6px;
        }

        .snapshot {
            display: grid;
            gap: 10px;
            margin-top: 6px;
        }
        .snapshot .label {
            color: ${m};
            width: 120px;
            display: inline-block;
        }
        .snapshot .value {
            font-weight: 700;
            margin-left: 8px;
        }

        .feed {
            display: grid;
            gap: 8px;
            max-height: 420px;
            overflow: auto;
        }
        .feed .empty {
            color: ${m};
            font-style: italic;
        }
        .feed .line {
            display: grid;
            gap: 4px;
            border-bottom: 1px dashed ${x};
            padding-bottom: 8px;
        }
        .feed .when {
            color: ${m};
            font-size: 12px;
        }
        .feed .what .tag {
            border: 1px solid ${x};
            border-radius: 999px;
            padding: 1px 8px;
            margin-right: 6px;
            background: color-mix(in oklab, ${d} 10%, transparent);
            font-size: 12px;
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${m};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${x};
            background: ${v};
        }
        .links a:hover {
            color: ${d};
            border-color: ${d};
        }
    `,Overlay:y.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:y.div`
        width: min(520px, 92vw);
        border-radius: ${C};
        border: 1px solid ${x};
        background: ${v};
        color: ${f};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${x};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
            color: ${f};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${x};
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${x};
            background: ${v};
            color: ${f};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnGhost:hover {
            border-color: ${d};
            color: ${d};
        }
    `},I=s=>{let t;const r=new Set,n=(u,S)=>{const l=typeof u=="function"?u(t):u;if(!Object.is(l,t)){const a=t;t=S??(typeof l!="object"||l===null)?l:Object.assign({},t,l),r.forEach(p=>p(t,a))}},c=()=>t,j={setState:n,getState:c,getInitialState:()=>o,subscribe:u=>(r.add(u),()=>r.delete(u))},o=t=s(n,c,j);return j},P=s=>s?I(s):I,M=s=>s;function R(s,t=M){const r=k.useSyncExternalStore(s.subscribe,k.useCallback(()=>t(s.getState()),[s,t]),k.useCallback(()=>t(s.getInitialState()),[s,t]));return k.useDebugValue(r),r}const T=s=>{const t=P(s),r=n=>R(t,n);return Object.assign(r,t),r},z=s=>s?T(s):T,U=s=>(t,r,n)=>{const c=n.subscribe;return n.subscribe=(b,j,o)=>{let u=b;if(j){const S=(o==null?void 0:o.equalityFn)||Object.is;let l=b(n.getState());u=a=>{const p=b(a);if(!S(l,p)){const h=l;j(l=p,h)}},o!=null&&o.fireImmediately&&j(l,l)}return c(u)},s(t,r,n)},E=U,O=s=>{const t=s instanceof Date?s:new Date(s),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=g=>String(g).padStart(2,"0");return`${r[t.getDay()]} ${n[t.getMonth()]} ${c(t.getDate())} ${t.getFullYear()}`},B=s=>{const t=s instanceof Date?s:new Date(s),r=n=>String(n).padStart(2,"0");return`${O(t)} ${r(t.getHours())}:${r(t.getMinutes())}:${r(t.getSeconds())}hrs`},H=s=>{const t=s instanceof Date?s:new Date(s),r=n=>String(n).padStart(2,"0");return`${r(t.getHours())}:${r(t.getMinutes())}:${r(t.getSeconds())}hrs`},G=({open:s,title:t,message:r,confirmText:n="Confirm",onConfirm:c,onClose:g})=>s?e.jsx($.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:g,children:e.jsxs($.Modal,{className:"card",onMouseDown:b=>b.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:t})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:r})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:g,children:"Cancel"}),e.jsx("button",{className:"btnPrimary",onClick:c,children:n})]})]})}):null,i=z(E((s,t)=>({counterA:1,counterB:5,toggle:!1,updatedAt:new Date().toISOString(),incrementA:(r=1)=>s(n=>({counterA:n.counterA+r,updatedAt:new Date().toISOString()})),decrementA:(r=1)=>s(n=>({counterA:Math.max(0,n.counterA-r),updatedAt:new Date().toISOString()})),incrementB:(r=1)=>s(n=>({counterB:n.counterB+r,updatedAt:new Date().toISOString()})),decrementB:(r=1)=>s(n=>({counterB:Math.max(0,n.counterB-r),updatedAt:new Date().toISOString()})),setToggle:r=>s(()=>({toggle:!!r,updatedAt:new Date().toISOString()})),reset:()=>s(()=>({counterA:1,counterB:5,toggle:!1,updatedAt:new Date().toISOString()}))}))),A=()=>{const s=N.useRef(0);return s.current+=1,e.jsxs("span",{className:"renderBadge",children:["render #",s.current]})},F=()=>{const s=i(n=>n.counterA),t=i(n=>n.incrementA),r=i(n=>n.decrementA);return e.jsxs("div",{className:"slice",children:[e.jsxs("div",{className:"sliceHead",children:[e.jsx("h4",{children:"Counter A"}),e.jsx(A,{})]}),e.jsx("div",{className:"value",children:s}),e.jsxs("div",{className:"rowBtns",children:[e.jsx("button",{onClick:()=>r(1),children:"-1"}),e.jsx("button",{onClick:()=>t(1),children:"+1"}),e.jsx("button",{onClick:()=>r(10),children:"-10"}),e.jsx("button",{onClick:()=>t(10),children:"+10"})]})]})},W=()=>{const s=i(n=>n.counterB),t=i(n=>n.incrementB),r=i(n=>n.decrementB);return e.jsxs("div",{className:"slice",children:[e.jsxs("div",{className:"sliceHead",children:[e.jsx("h4",{children:"Counter B"}),e.jsx(A,{})]}),e.jsx("div",{className:"value",children:s}),e.jsxs("div",{className:"rowBtns",children:[e.jsx("button",{onClick:()=>r(1),children:"-1"}),e.jsx("button",{onClick:()=>t(1),children:"+1"}),e.jsx("button",{onClick:()=>r(10),children:"-10"}),e.jsx("button",{onClick:()=>t(10),children:"+10"})]})]})},J=()=>{const s=i(r=>r.toggle),t=i(r=>r.setToggle);return e.jsxs("div",{className:"slice",children:[e.jsxs("div",{className:"sliceHead",children:[e.jsx("h4",{children:"Toggle"}),e.jsx(A,{})]}),e.jsx("div",{className:"value",children:String(s)}),e.jsx("div",{className:"rowBtns",children:e.jsx("button",{onClick:()=>t(!s),children:s?"Switch Off":"Switch On"})})]})},q=()=>{const s=i(c=>c.counterA),t=i(c=>c.counterB),r=s+t,n=Math.abs(s-t);return e.jsxs("div",{className:"derived card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Sum"}),e.jsx("div",{className:"big",children:r})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Difference"}),e.jsx("div",{className:"big",children:n})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Updated"}),e.jsx("div",{className:"big",children:B(i.getState().updatedAt)})]})]}),e.jsx(A,{})]})},Q=()=>{const[s,t]=N.useState([]),[r,n]=N.useState(!1),c=N.useMemo(()=>new Date,[]),g=i(o=>o.reset);N.useEffect(()=>{const o=i.subscribe(a=>a.counterA,(a,p)=>{t(h=>[{id:crypto.randomUUID(),t:new Date,k:"counterA",prev:p,cur:a},...h].slice(0,24))}),u=i.subscribe(a=>a.counterB,(a,p)=>{t(h=>[{id:crypto.randomUUID(),t:new Date,k:"counterB",prev:p,cur:a},...h].slice(0,24))}),S=i.subscribe(a=>a.counterA+a.counterB,(a,p)=>{t(h=>[{id:crypto.randomUUID(),t:new Date,k:"sum(a+b)",prev:p,cur:a},...h].slice(0,24))}),l=i.subscribe(a=>a.toggle,(a,p)=>{t(h=>[{id:crypto.randomUUID(),t:new Date,k:"toggle",prev:String(p),cur:String(a)},...h].slice(0,24))});return()=>{o(),u(),S(),l()}},[]);const b=e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(w,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Subscribe + Selector"})]}),j=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs($.Page,{className:"container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs($.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"subscribeWithSelector Demo"}),b,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Today: ",O(c)]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:H(c)})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>n(!0),title:"Reset demo state",children:"Reset"}),e.jsx("button",{className:"btnPrimary",onClick:j,title:"Print snapshot",children:"Print"})]})]}),e.jsxs($.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card stacks",children:[e.jsxs("div",{className:"stack",children:[e.jsx(F,{}),e.jsx(W,{}),e.jsx(J,{})]}),e.jsx(q,{})]}),e.jsxs("div",{className:"card perf",children:[e.jsx("h3",{children:"Selective Rendering"}),e.jsxs("p",{className:"muted",children:["Each box reads a ",e.jsx("em",{children:"slice"})," from the store. Updating A doesn’t re-render B (and vice-versa). The little counter on the right shows how many times that component re-rendered."]}),e.jsxs("ul",{className:"tips",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"useStore(selector)"})," or external ",e.jsx("code",{children:"store.subscribe(selector)"})," for precision."]}),e.jsx("li",{children:"Avoid passing the entire state into heavy trees; subscribe to what’s necessary."}),e.jsxs("li",{children:["Derive values locally (e.g., ",e.jsx("code",{children:"a + b"}),") when cheap; memoize expensive derivations."]})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",children:[e.jsx("h3",{children:"Printable Snapshot"}),e.jsxs("div",{className:"snapshot",children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Counter A"}),e.jsx("span",{className:"value",children:i.getState().counterA})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Counter B"}),e.jsx("span",{className:"value",children:i.getState().counterB})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Toggle"}),e.jsx("span",{className:"value",children:String(i.getState().toggle)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Sum"}),e.jsx("span",{className:"value",children:i.getState().counterA+i.getState().counterB})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Updated"}),e.jsx("span",{className:"value",children:B(i.getState().updatedAt)})]})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Event Feed"}),e.jsxs("p",{className:"muted",children:["Shows only when a ",e.jsx("em",{children:"selected slice"})," changes."]}),e.jsx("div",{className:"feed",children:s.length===0?e.jsx("div",{className:"empty",children:"No changes yet. Try incrementing counters."}):s.map(o=>e.jsxs("div",{className:"line",children:[e.jsx("div",{className:"when",children:B(o.t)}),e.jsxs("div",{className:"what",children:[e.jsx("span",{className:"tag",children:o.k})," ",String(o.prev)," → ",e.jsx("strong",{children:String(o.cur)})]})]},o.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(w,{to:"/examples",children:"Examples Home"})}),e.jsx("li",{children:e.jsx(w,{to:"/examples/table",children:"Table Demo"})}),e.jsx("li",{children:e.jsx(w,{to:"/examples/print",children:"Print Demo"})}),e.jsx("li",{children:e.jsx(w,{to:"/reports/customers",children:"Customer Report"})}),e.jsx("li",{children:e.jsx(w,{to:"/tools/playground",children:"Playground"})})]})]})]})]}),e.jsx(G,{open:r,title:"Reset demo?",message:"This will reset the in-memory store.",confirmText:"Reset",onClose:()=>n(!1),onConfirm:()=>{n(!1),g()}})]})};export{Q as default};
