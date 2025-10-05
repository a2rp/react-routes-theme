import{d as v,r as m,u as M,j as e,N}from"./index-Dm9gfKqL.js";const t="var(--text, #f3f4f6)",u="var(--muted, #a0a0a7)",c="var(--card, #111318)",n="var(--border, #23262d)",a="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",I="var(--danger, #ef4444)",$={Page:v.div`
        padding: 24px 0 64px;
        color: ${t};
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${u};
            }
            .current {
                color: ${t};
            }
        }
    `,Header:v.header`
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
            color: ${u};
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
            border: 1px solid ${n};
            background: ${c};
            color: ${t};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnPrimary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Cards:v.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 900px) {
            grid-template-columns: repeat(4, 1fr);
        }
        margin-bottom: 16px;

        .kpi {
            padding: 16px;
            border: 1px solid ${n};
            border-radius: 12px;
            background: ${c};
            box-shadow: var(--shadow);
            .label {
                color: ${u};
                font-size: 12px;
            }
            .value {
                font-size: 22px;
                font-weight: 700;
                margin-top: 6px;
            }
            .muted {
                color: ${u};
                margin-top: 8px;
                font-size: 12px;
            }
        }
    `,Toolbar:v.section`
        padding: 14px 16px;
        border: 1px solid ${n};
        border-radius: 12px;
        background: ${c};
        margin-bottom: 16px;
        box-shadow: var(--shadow);

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            align-items: end;
        }
        @media (min-width: 980px) {
            .row {
                grid-template-columns: 1.6fr 0.8fr 0.8fr 1.2fr;
            }
        }

        .search input {
            width: 100%;
            border: 1px solid ${n};
            background: ${c};
            color: ${t};
            border-radius: 8px;
            padding: 10px 12px;
            outline: none;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${y};
        }

        .filters {
            display: grid;
            gap: 6px;
        }
        .filters label,
        .period label {
            color: ${u};
            font-size: 12px;
        }
        select {
            height: 36px;
            border: 1px solid ${n};
            background: ${c};
            color: ${t};
            border-radius: 8px;
            padding: 0 10px;
            outline: none;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        select:focus {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${y};
        }

        .period .chips {
            display: flex;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${n};
            background: ${c};
            color: ${t};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip:hover {
            border-color: ${a};
            color: ${a};
        }
        .chip.active {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${y};
        }
    `,Table:v.section`
        border: 1px solid ${n};
        border-radius: 12px;
        background: ${c};
        box-shadow: var(--shadow);

        .tableWrap {
            width: 100%;
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${c};
            color: ${t};
            border-bottom: 1px solid ${n};
            text-align: left;
            padding: 12px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        tbody td {
            border-bottom: 1px solid ${n};
            padding: 12px;
            vertical-align: middle;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${a} 8%, transparent);
        }

        .num {
            text-align: right;
        }
        .actions {
            white-space: nowrap;
            text-align: right;
        }
        .actions .link {
            margin-left: 10px;
            color: var(--muted);
        }
        .actions .link:hover {
            color: ${a};
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${n};
            font-size: 12px;
        }
        .badge.light {
            background: color-mix(in oklab, ${a} 10%, transparent);
        }
        .badge.status.pending {
            background: rgba(160, 160, 167, 0.15);
            color: ${t};
        }
        .badge.status.packed {
            background: color-mix(in oklab, ${a} 16%, transparent);
            color: ${t};
        }
        .badge.status.shipped {
            background: color-mix(in oklab, ${a} 20%, transparent);
            color: ${t};
        }
        .badge.status.invoiced {
            background: color-mix(in oklab, ${a} 24%, transparent);
            color: ${t};
        }
        .badge.status.completed {
            background: color-mix(in oklab, ${a} 28%, transparent);
            color: ${t};
        }
        .badge.status.cancelled {
            background: color-mix(in oklab, ${I} 18%, transparent);
            color: ${t};
        }

        .tableFooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px;
            color: ${u};
        }
        .pager {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .pager .page {
            color: ${t};
        }
        .btnGhost {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${n};
            background: ${c};
            color: ${t};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
    `,PrintCard:v.section`
        margin-top: 16px;
        padding: 16px;
        border: 1px solid ${n};
        border-radius: 12px;
        background: ${c};
        h3 {
            margin-bottom: 12px;
        }
        .grid {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(5, 1fr);
            @media (max-width: 920px) {
                grid-template-columns: 1fr 1fr;
            }
        }
        .grid > div {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .k {
            color: ${u};
        }
        .v {
            color: ${t};
        }
        .list {
            margin-top: 14px;
            display: grid;
            gap: 8px;
        }
        .row {
            display: grid;
            grid-template-columns: 120px 1fr 140px 120px;
            gap: 10px;
            padding: 8px 10px;
            border: 1px dashed ${n};
            border-radius: 10px;
        }
        .right {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
    `},A=r=>{const o=r instanceof Date?r:new Date(r),d=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=O=>String(O).padStart(2,"0");return`${d[o.getDay()]} ${f[o.getMonth()]} ${b(o.getDate())} ${o.getFullYear()}`},C=r=>{const o=r instanceof Date?r:new Date(r),d=f=>String(f).padStart(2,"0");return`${A(o)} ${d(o.getHours())}:${d(o.getMinutes())}:${d(o.getSeconds())}hrs`},w=r=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}).format(r),x=[{id:"ORD-3001",customer:"Bluewave Traders",items:12,amount:18450,status:"Pending",channel:"POS",placedAt:"2025-10-04T10:35:20+05:30",dueAt:"2025-10-10T00:00:00+05:30"},{id:"ORD-3002",customer:"Northline Mart",items:5,amount:7299,status:"Packed",channel:"Online",placedAt:"2025-10-03T16:22:58+05:30",dueAt:"2025-10-09T00:00:00+05:30"},{id:"ORD-3003",customer:"Sharma Pharmacy",items:18,amount:26490,status:"Shipped",channel:"B2B",placedAt:"2025-10-02T12:10:31+05:30",dueAt:"2025-10-12T00:00:00+05:30"},{id:"ORD-3004",customer:"Eastern Supplies",items:9,amount:15200,status:"Completed",channel:"B2B",placedAt:"2025-10-01T09:05:11+05:30",dueAt:"2025-10-08T00:00:00+05:30"},{id:"ORD-3005",customer:"Metro Medicos",items:22,amount:30990,status:"Invoiced",channel:"Online",placedAt:"2025-09-30T18:44:42+05:30",dueAt:"2025-10-06T00:00:00+05:30"},{id:"ORD-3006",customer:"Prime Healthcare",items:7,amount:9980,status:"Pending",channel:"POS",placedAt:"2025-09-29T14:29:00+05:30",dueAt:"2025-10-05T00:00:00+05:30"},{id:"ORD-3007",customer:"Kanishk Retail",items:11,amount:17120,status:"Cancelled",channel:"Online",placedAt:"2025-09-29T08:19:54+05:30",dueAt:"2025-10-07T00:00:00+05:30"},{id:"ORD-3008",customer:"City Care Store",items:14,amount:21950,status:"Completed",channel:"POS",placedAt:"2025-09-28T13:17:09+05:30",dueAt:"2025-10-04T00:00:00+05:30"},{id:"ORD-3009",customer:"Aarav Distributors",items:6,amount:8450,status:"Invoiced",channel:"B2B",placedAt:"2025-09-27T11:02:40+05:30",dueAt:"2025-10-03T00:00:00+05:30"},{id:"ORD-3010",customer:"Lotus Chemists",items:16,amount:24810,status:"Shipped",channel:"Online",placedAt:"2025-09-26T17:40:28+05:30",dueAt:"2025-10-02T00:00:00+05:30"}],F=()=>{const[r,o]=m.useState(""),[d,f]=m.useState("all"),[b,O]=m.useState("all"),[g,k]=m.useState("30d"),P=m.useRef(null);M();const T=m.useMemo(()=>{const s=r.trim().toLowerCase().split(/\s+/).filter(Boolean);return x.filter(l=>{const j=`${l.id} ${l.customer} ${l.channel} ${l.status}`.toLowerCase(),p=s.length?s.every(L=>j.includes(L)):!0,h=d==="all"?!0:l.status.toLowerCase()===d,S=b==="all"?!0:l.channel.toLowerCase()===b;return p&&h&&S&&!0})},[r,d,b,g]),i=m.useMemo(()=>{const s=x.length,l=x.filter(h=>["pending","packed","shipped"].includes(h.status.toLowerCase())).length,j=x.filter(h=>h.status.toLowerCase()==="invoiced").length,p=x.filter(h=>["invoiced","completed"].includes(h.status.toLowerCase())).reduce((h,S)=>h+S.amount,0);return{total:s,open:l,invoiced:j,revenue:p}},[]),R=()=>{P.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},D=()=>{const s=JSON.stringify(x,null,2),l=new Blob([s],{type:"application/json"}),j=URL.createObjectURL(l),p=document.createElement("a");p.href=j,p.download="orders-demo.json",document.body.appendChild(p),p.click(),p.remove(),URL.revokeObjectURL(j)};return e.jsxs($.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs($.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Orders"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(N,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Orders"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",i.total]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Open: ",i.open]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Invoiced: ",i.invoiced]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Recognised: ",w(i.revenue)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:D,title:"Download JSON snapshot",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:R,title:"Print table",children:"Print"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo only: creation disabled",children:"New Order"})]})]}),e.jsxs($.Cards,{children:[e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"All Orders"}),e.jsx("div",{className:"value",children:i.total}),e.jsxs("div",{className:"muted",children:["Last updated ",C(new Date)]})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Open"}),e.jsx("div",{className:"value",children:i.open}),e.jsx("div",{className:"muted",children:"Pending / Packed / Shipped"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Invoiced"}),e.jsx("div",{className:"value",children:i.invoiced}),e.jsx("div",{className:"muted",children:"Awaiting payment"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Recognised Revenue"}),e.jsx("div",{className:"value",children:w(i.revenue)}),e.jsx("div",{className:"muted",children:"Completed + Invoiced"})]})]}),e.jsx($.Toolbar,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"search",children:e.jsx("input",{type:"text",placeholder:"Search orders, customers, channels…",value:r,onChange:s=>o(s.target.value),"aria-label":"Search orders"})}),e.jsxs("div",{className:"filters",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{value:d,onChange:s=>f(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"packed",children:"Packed"}),e.jsx("option",{value:"shipped",children:"Shipped"}),e.jsx("option",{value:"invoiced",children:"Invoiced"}),e.jsx("option",{value:"completed",children:"Completed"}),e.jsx("option",{value:"cancelled",children:"Cancelled"})]})]}),e.jsxs("div",{className:"filters",children:[e.jsx("label",{children:"Channel"}),e.jsxs("select",{value:b,onChange:s=>O(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"pos",children:"POS"}),e.jsx("option",{value:"online",children:"Online"}),e.jsx("option",{value:"b2b",children:"B2B"})]})]}),e.jsxs("div",{className:"period",children:[e.jsx("label",{children:"Period"}),e.jsxs("div",{className:"chips",children:[e.jsx("button",{className:g==="today"?"chip active":"chip",onClick:()=>k("today"),title:"Today",children:"Today"}),e.jsx("button",{className:g==="7d"?"chip active":"chip",onClick:()=>k("7d"),title:"Last 7 days",children:"7d"}),e.jsx("button",{className:g==="30d"?"chip active":"chip",onClick:()=>k("30d"),title:"Last 30 days",children:"30d"}),e.jsx("button",{className:g==="all"?"chip active":"chip",onClick:()=>k("all"),title:"All time",children:"All"})]})]})]})}),e.jsxs($.Table,{className:"card",children:[e.jsx("div",{className:"tableWrap",role:"region","aria-label":"Orders table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Order"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{className:"num",children:"Items"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Channel"}),e.jsx("th",{children:"Placed"}),e.jsx("th",{children:"Due"}),e.jsx("th",{className:"actions",children:"Actions"})]})}),e.jsx("tbody",{children:T.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(N,{to:`/orders/${s.id}`,className:"mono",children:s.id})}),e.jsx("td",{children:s.customer}),e.jsx("td",{className:"num",children:s.items}),e.jsx("td",{className:"num",children:w(s.amount)}),e.jsx("td",{children:e.jsx("span",{className:`badge status ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("td",{children:e.jsx("span",{className:"badge light",children:s.channel})}),e.jsx("td",{title:C(s.placedAt),children:C(s.placedAt)}),e.jsx("td",{title:A(s.dueAt),children:A(s.dueAt)}),e.jsxs("td",{className:"actions",children:[e.jsx(N,{to:`/orders/${s.id}`,className:"link",children:"View"}),e.jsx(N,{to:`/orders/${s.id}/edit`,className:"link",children:"Edit"}),e.jsx(N,{to:`/orders/${s.id}/print`,className:"link",children:"Print"}),e.jsx(N,{to:`/orders/${s.id}/invoice`,className:"link",children:"Invoice"})]})]},s.id))})]})}),e.jsxs("div",{className:"tableFooter",children:[e.jsxs("div",{className:"hint",children:[T.length," of ",x.length," shown"]}),e.jsxs("div",{className:"pager",children:[e.jsx("button",{className:"btnGhost",disabled:!0,title:"First page",children:"«"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Previous page",children:"‹"}),e.jsx("span",{className:"page",children:"1 / 1"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Next page",children:"›"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Last page",children:"»"})]})]})]}),e.jsxs($.PrintCard,{className:"card",id:"search-print-area",ref:P,children:[e.jsx("h3",{children:"Orders — Summary"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Generated"}),e.jsx("span",{className:"v",children:C(new Date)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Total Orders"}),e.jsx("span",{className:"v",children:i.total})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Open"}),e.jsx("span",{className:"v",children:i.open})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Invoiced"}),e.jsx("span",{className:"v",children:i.invoiced})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Recognised"}),e.jsx("span",{className:"v",children:w(i.revenue)})]})]}),e.jsx("div",{className:"list",children:x.map(s=>e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"mono",children:s.id}),e.jsx("span",{children:s.customer}),e.jsx("span",{className:"right",children:w(s.amount)}),e.jsx("span",{className:"right",children:s.status})]},s.id))})]})]})};export{F as default};
