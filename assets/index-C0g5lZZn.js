import{d as a,a as E,u as J,r as m,j as e,L as i}from"./index-CqBbF2bz.js";const I="var(--bg, #0d1117)",l="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",c="var(--card, #111318)",n="var(--border, #23262d)",t="var(--accent, #5aa9ff)",g="var(--accent-soft, rgba(90,169,255,0.15))",R="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",U=a.div`
    width: 100%;
    color: ${l};
    background: ${I};
`,q=a.div`
    position: sticky;
    top: 0;
    z-index: 2;
    background: ${"color-mix(in oklab, "+I+" 92%, transparent)"};
    backdrop-filter: blur(8px);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    padding: 18px 20px;
    border-bottom: 1px solid ${n};

    h1 {
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 6px;
        letter-spacing: 0.3px;
    }
    .meta {
        display: flex;
        gap: 14px;
        color: ${x};
        font-size: 12px;
        span {
            white-space: nowrap;
        }
    }
    .r {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`,G=a.div`
    display: flex;
    gap: 8px;
    button {
        background: ${c};
        border: 1px solid ${n};
        color: ${l};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
            transform 0.06s;
        &:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${g};
        }
        &:active {
            transform: translateY(1px);
        }
    }
`,K=a.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${x};
    font-size: 12px;
`,S=a.kbd`
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    background: ${c};
    border: 1px solid ${n};
    padding: 2px 6px;
    border-radius: 6px;
    color: ${l};
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
`,_=a.div`
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 16px;
    padding: 16px 20px;
    border-bottom: 1px solid ${n};

    .tabs {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        button {
            border: 1px solid ${n};
            background: ${c};
            color: ${l};
            padding: 8px 12px;
            border-radius: 999px;
            cursor: pointer;
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
            &:hover {
                color: ${t};
                border-color: ${t};
                box-shadow: 0 0 0 3px ${g};
            }
            &.active {
                border-color: ${t};
                color: ${t};
            }
        }
    }
    .search {
        display: flex;
        input {
            width: 100%;
            border: 1px solid ${n};
            background: ${c};
            color: ${l};
            border-radius: 10px;
            padding: 10px 12px;
            transition: border-color 0.2s, box-shadow 0.2s;
            &::placeholder {
                color: ${x};
            }
            &:focus {
                border-color: ${t};
                outline: none;
                box-shadow: 0 0 0 3px ${g};
            }
        }
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,W=a.div`
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 18px;
    padding: 18px 20px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`,Y=a.aside`
    .box {
        background: ${c};
        border: 1px solid ${n};
        border-radius: 12px;
        box-shadow: ${R};
        padding: 12px;
        margin-bottom: 18px;
    }
    .title {
        font-weight: 600;
        letter-spacing: 0.3px;
        color: ${l};
        margin-bottom: 10px;
    }
    .list {
        display: grid;
        gap: 6px;
        button {
            width: 100%;
            text-align: left;
            background: transparent;
            border: 1px dashed ${n};
            color: ${l};
            padding: 8px 10px;
            border-radius: 8px;
            cursor: pointer;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 10px;
            transition: border-color 0.2s, color 0.2s, background 0.2s;
            .v {
                font-weight: 600;
            }
            .d {
                color: ${x};
                font-size: 12px;
            }
            &:hover {
                border-color: ${t};
                color: ${t};
                background: color-mix(in oklab, ${t} 12%, transparent);
            }
        }
    }
    .links {
        display: grid;
        gap: 6px;
        a {
            border: 1px solid ${n};
            background: ${c};
            color: ${l};
            padding: 8px 10px;
            border-radius: 8px;
            text-decoration: none;
            transition: color 0.2s, border-color 0.2s, background 0.2s;
            &:hover {
                color: ${t};
                border-color: ${t};
                background: color-mix(in oklab, ${t} 12%, transparent);
            }
        }
    }
`,Q=a.section`
    display: grid;
    gap: 16px;
`,V=a.article`
    position: relative;
    background: ${c};
    border: 1px solid ${n};
    border-radius: 16px;
    box-shadow: ${R};
    padding: 14px 16px;

    &::before {
        content: "";
        position: absolute;
        left: -10px;
        top: 24px;
        bottom: 24px;
        width: 2px;
        background: color-mix(in oklab, ${t} 50%, transparent);
        border-radius: 2px;
        display: none;
    }

    &[data-type="major"] {
        border-left: 3px solid ${t};
    }
    &[data-type="minor"] {
        border-left: 3px solid color-mix(in oklab, ${t} 75%, transparent);
    }
    &[data-type="patch"] {
        border-left: 3px solid color-mix(in oklab, ${t} 45%, transparent);
    }
`,X=a.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 10px;

    .lh {
        display: grid;
        gap: 6px;
        h2 {
            display: flex;
            align-items: center;
            gap: 8px;
            .version {
                font-size: 20px;
                letter-spacing: 0.2px;
            }
        }
        .meta {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            align-items: center;
            .date,
            .time {
                color: ${x};
                font-size: 12px;
            }
        }
    }

    .rh {
        display: flex;
        gap: 8px;
        button {
            background: transparent;
            border: 1px solid ${n};
            color: ${l};
            padding: 8px 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s,
                transform 0.06s;
            &:hover {
                border-color: ${t};
                color: ${t};
                box-shadow: 0 0 0 3px ${g};
            }
            &:active {
                transform: translateY(1px);
            }
            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    }
`,j=a.span`
    --tone: ${r=>r.tone==="solid"?`color-mix(in oklab, ${t} 85%, #000)`:r.tone==="line"?`color-mix(in oklab, ${t} 45%, transparent)`:`color-mix(in oklab, ${t} 25%, transparent)`};

    font-size: 11px;
    padding: 2px 8px;
    border-radius: 999px;
    color: ${l};
    border: 1px solid var(--tone);
    background: ${r=>r.tone==="solid"?"var(--tone)":"transparent"};
`,Z=a.span`
    font-size: 11px;
    color: ${t};
    background: color-mix(in oklab, ${t} 12%, transparent);
    border: 1px solid color-mix(in oklab, ${t} 55%, transparent);
    padding: 2px 8px;
    border-radius: 999px;
`,ee=a.p`
    color: ${l};
    margin: 6px 0 8px;
`,C=a.section`
    margin-top: 8px;
    .st {
        color: ${x};
        font-weight: 600;
        margin-bottom: 6px;
    }
    ul {
        padding-left: 18px;
    }
    li {
        margin: 4px 0;
    }
`,oe=a.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .deep-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        background: ${c};
        border: 1px solid ${n};
        padding: 6px 10px;
        border-radius: 8px;
        color: ${l};
        transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
        .dot {
            opacity: 0.75;
        }
        &:hover {
            color: ${t};
            border-color: ${t};
            box-shadow: 0 0 0 3px ${g};
        }
    }
`,te=a.div`
    background: ${c};
    border: 1px dashed ${n};
    border-radius: 16px;
    padding: 30px;
    text-align: center;
    .emoji {
        font-size: 28px;
        margin-bottom: 8px;
    }
    .title {
        font-weight: 700;
        margin-bottom: 4px;
    }
    .hint {
        color: ${x};
        button {
            margin-left: 6px;
        }
    }
`,se=a.div`
    position: fixed;
    inset: 0;
    z-index: 50;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    .card {
        width: min(560px, 92vw);
        background: ${c};
        color: ${l};
        border: 1px solid ${n};
        border-radius: 14px;
        box-shadow: ${R};
        padding: 14px;
        .head {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .body {
            color: ${x};
            margin-bottom: 12px;
        }
        .foot {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        button {
            background: ${c};
            color: ${l};
            border: 1px solid ${n};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
            &:hover {
                border-color: ${t};
                color: ${t};
                box-shadow: 0 0 0 3px ${g};
            }
        }
    }
`,re="2025-10-06T03:25:08.920Z",ie="2025-10-06T08:55:04+05:30",ae=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ne=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function v(r){return String(r).padStart(2,"0")}function T(r){const p=new Date(r);return`${ae[p.getDay()]} ${ne[p.getMonth()]} ${v(p.getDate())} ${p.getFullYear()}`}function P(r){const p=new Date(r);return`${v(p.getHours())}:${v(p.getMinutes())}:${v(p.getSeconds())}hrs`}function O(r){return`${T(r)} ${P(r)}`}const b=[{version:"1.4.0",type:"minor",dateISO:"2025-10-04T12:21:36+05:30",summary:"Inventory transfers UX pass, reports polish, and print templates clean-up.",tags:["Inventory","Reports","Print"],links:[{label:"Transfers",to:"/inventory/transfers"},{label:"Inventory Report",to:"/reports/inventory"},{label:"Print Templates",to:"/settings/print-templates"}],highlights:["New transfers overview with quick filters.","Sticky totals row in inventory report.","Print templates preview respects theme tokens."],fixes:["Table header alignment on dense mode.","Breadcrumb edge case for deep nested routes."],breaking:[]},{version:"1.3.3",type:"patch",dateISO:"2025-10-01T09:05:12+05:30",summary:"Accessibility tweaks and keyboard focus rings across nav & forms.",tags:["A11y","Forms","Nav"],links:[{label:"Theme Demo",to:"/examples/theme"},{label:"Nav Search",to:"/examples/nav-search"},{label:"Form Demo",to:"/examples/form"}],highlights:["Focus-visible rings on all primary controls.","Consistent aria-expanded on collapsible sections."],fixes:["Minor padding jitter on inputs.","Hover flicker on disabled buttons."],breaking:[]},{version:"1.3.0",type:"minor",dateISO:"2025-09-24T17:42:02+05:30",summary:"Customers detail header revamp and receipts list.",tags:["Customers","Receipts"],links:[{label:"Customers",to:"/customers"},{label:"Receipts",to:"/receipts"},{label:"Dashboard",to:"/dashboard"}],highlights:["New identity block with tags and quick actions.","Receipts list page with statuses and deep links."],fixes:["Avatar overlap at smaller widths."],breaking:[]},{version:"1.2.0",type:"minor",dateISO:"2025-09-10T13:15:20+05:30",summary:"Products & medicines catalog navigation with anchors and facets.",tags:["Products","Medicines","Catalog"],links:[{label:"All Products",to:"/products"},{label:"Medicines",to:"/medicines"},{label:"HSN / GST",to:"/medicines/hsn-gst"}],highlights:["Grouped catalog sections with quick jump.","Price list overview cards."],fixes:["Tab order in filters.","Empty state spacing in catalog facets."],breaking:[]},{version:"1.1.0",type:"minor",dateISO:"2025-08-25T10:00:00+05:30",summary:"Reports area baseline and finance pages wiring.",tags:["Reports","Finance"],links:[{label:"Reports Home",to:"/reports"},{label:"Finance Overview",to:"/finance"},{label:"Profit & Loss",to:"/finance/profit-loss"}],highlights:["Report cards with descriptions and quick filters.","Finance nav & stubs for ledgers, journals, COA."],fixes:["Copy link helper on report rows."],breaking:[]},{version:"1.0.0",type:"major",dateISO:"2025-08-01T09:00:00+05:30",summary:"Initial public demo with manual routes and premium theme.",tags:["Core","Theme","Routing"],links:[{label:"Home",to:"/home"},{label:"About",to:"/about"},{label:"Settings",to:"/settings"}],highlights:["Full manual routes map with lazy imports.","Theme tokens and layout primitives.","Sidebar search and collapsible groups."],fixes:[],breaking:["Renamed base path to /react-routes-theme/ for GH Pages."]}],le=[{key:"all",label:"All"},{key:"major",label:"Major"},{key:"minor",label:"Minor"},{key:"patch",label:"Patch"}];function ce(){const{hash:r}=E(),p=J(),[y,A]=m.useState(""),[u,L]=m.useState("all"),[D,$]=m.useState(!1),F=m.useRef(null),M=m.useMemo(()=>{const o=y.trim().toLowerCase().split(/\s+/).filter(Boolean);return b.filter(s=>{if(!(u==="all"||s.type===u))return!1;if(!o.length)return!0;const N=[s.version,s.type,s.summary,s.tags.join(" "),s.highlights.join(" "),s.fixes.join(" "),s.breaking.join(" ")].join(" ").toLowerCase();return o.every(d=>N.includes(d))})},[y,u]),k=o=>{const s=document.getElementById(o);s&&(s.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),p(`#${o}`,{replace:!0}))};m.useEffect(()=>{if(r&&r.startsWith("#")){const o=r.slice(1),s=setTimeout(()=>k(o),50);return()=>clearTimeout(s)}},[r]);const f=o=>`v-${o.replace(/\./g,"-")}`,z=async o=>{try{const s=new URL(window.location.href);s.hash=`#${o}`,await navigator.clipboard.writeText(s.toString())}catch{}},H=()=>{const o=new Blob([JSON.stringify(b,null,2)],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download="changelog.json",s.click(),URL.revokeObjectURL(s.href)},B=()=>{document.body.classList.add("print-section-mode");try{window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),0)}};return e.jsxs(U,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(q,{children:[e.jsxs("div",{className:"l",children:[e.jsx("h1",{children:"Changelog"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Build: ",O(re)]}),e.jsxs("span",{children:["Last Commit: ",O(ie)]}),e.jsxs("span",{children:["Releases: ",b.length]})]})]}),e.jsxs("div",{className:"r",children:[e.jsxs(K,{children:[e.jsx(S,{children:"J"}),e.jsx("span",{children:"↓ Next"}),e.jsx(S,{children:"K"}),e.jsx("span",{children:"↑ Prev"}),e.jsx(S,{children:"/"}),e.jsx("span",{children:"Search"})]}),e.jsxs(G,{children:[e.jsx("button",{onClick:()=>k(f(b[0].version)),title:"Jump to latest",children:"Latest"}),e.jsx("button",{onClick:H,title:"Download changelog as JSON",children:"Export"}),e.jsx("button",{onClick:B,title:"Print this page",children:"Print"})]})]})]}),e.jsxs(_,{children:[e.jsx("div",{className:"tabs",children:le.map(o=>e.jsx("button",{className:u===o.key?"active":"",onClick:()=>L(o.key),children:o.label},o.key))}),e.jsx("div",{className:"search",children:e.jsx("input",{placeholder:"Search releases, tags, notes…",value:y,onChange:o=>A(o.target.value),"aria-label":"Search changelog"})})]}),e.jsxs(W,{children:[e.jsxs(Y,{children:[e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"title",children:"Versions"}),e.jsx("div",{className:"list",children:b.map(o=>e.jsxs("button",{onClick:()=>k(f(o.version)),children:[e.jsx("span",{className:"v",children:o.version}),e.jsx("span",{className:"d",children:T(o.dateISO)})]},o.version))})]}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"title",children:"Quick Links"}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/home",children:"Home"}),e.jsx(i,{to:"/dashboard",children:"Dashboard"}),e.jsx(i,{to:"/reports",children:"Reports"}),e.jsx(i,{to:"/reports/sales",children:"Sales Report"}),e.jsx(i,{to:"/inventory",children:"Inventory"}),e.jsx(i,{to:"/inventory/transfers",children:"Transfers"}),e.jsx(i,{to:"/products",children:"Products"}),e.jsx(i,{to:"/medicines",children:"Medicines"}),e.jsx(i,{to:"/finance",children:"Finance"}),e.jsx(i,{to:"/finance/profit-loss",children:"Profit & Loss"}),e.jsx(i,{to:"/invoices",children:"Invoices"}),e.jsx(i,{to:"/receipts",children:"Receipts"}),e.jsx(i,{to:"/admin/audit-log",children:"Audit Log"}),e.jsx(i,{to:"/settings",children:"Settings"}),e.jsx(i,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(i,{to:"/help",children:"Help Center"}),e.jsx(i,{to:"/changelog",children:"Changelog"}),e.jsx(i,{to:"/roadmap",children:"Roadmap"})]})]})]}),e.jsxs(Q,{id:"search-print-area",ref:F,children:[M.map((o,s)=>{const w=f(o.version),N=s===0&&(!r||r===`#${f(b[0].version)}`);return e.jsxs(V,{id:w,"data-type":o.type,children:[e.jsxs(X,{children:[e.jsxs("div",{className:"lh",children:[e.jsxs("h2",{children:[e.jsx("span",{className:"version",children:o.version}),N&&e.jsx(j,{children:"Latest"}),o.type==="major"&&e.jsx(j,{tone:"solid",children:"Major"}),o.type==="minor"&&e.jsx(j,{tone:"line",children:"Minor"}),o.type==="patch"&&e.jsx(j,{tone:"soft",children:"Patch"})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"date",children:T(o.dateISO)}),e.jsx("span",{className:"time",children:P(o.dateISO)}),o.tags.map(d=>e.jsx(Z,{children:d},d))]})]}),e.jsxs("div",{className:"rh",children:[e.jsx("button",{onClick:()=>z(w),title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{onClick:()=>$(!0),disabled:!0,title:"Revert (demo)",children:"Revert"})]})]}),e.jsx(ee,{children:o.summary}),!!o.highlights.length&&e.jsxs(C,{children:[e.jsx("div",{className:"st",children:"Highlights"}),e.jsx("ul",{children:o.highlights.map((d,h)=>e.jsx("li",{children:d},h))})]}),!!o.fixes.length&&e.jsxs(C,{children:[e.jsx("div",{className:"st",children:"Fixes"}),e.jsx("ul",{children:o.fixes.map((d,h)=>e.jsx("li",{children:d},h))})]}),!!o.breaking.length&&e.jsxs(C,{children:[e.jsx("div",{className:"st",children:"Breaking"}),e.jsx("ul",{children:o.breaking.map((d,h)=>e.jsx("li",{children:d},h))})]}),!!o.links.length&&e.jsx(oe,{children:o.links.map((d,h)=>e.jsxs(i,{to:d.to,className:"deep-link",children:[e.jsx("span",{className:"dot","aria-hidden":"true",children:"•"})," ",d.label]},h))})]},o.version)}),M.length===0&&e.jsxs(te,{children:[e.jsx("div",{className:"emoji","aria-hidden":!0,children:"¯\\_(ツ)_/¯"}),e.jsx("div",{className:"title",children:"No releases match your filters"}),e.jsxs("div",{className:"hint",children:["Try switching tab to ",e.jsx("button",{onClick:()=>L("all"),children:"All"})," or clear search."]})]})]})]}),D&&e.jsx(se,{onClick:()=>$(!1),role:"dialog","aria-modal":"true","aria-label":"Demo notice",children:e.jsxs("div",{className:"card",onClick:o=>o.stopPropagation(),children:[e.jsx("div",{className:"head",children:"Action disabled in demo"}),e.jsx("div",{className:"body",children:"This is a display-only preview. Destructive actions are disabled."}),e.jsx("div",{className:"foot",children:e.jsx("button",{onClick:()=>$(!1),children:"Close"})})]})})]})}export{ce as default};
