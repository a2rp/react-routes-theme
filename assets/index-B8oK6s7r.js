import{d as n,r as m,j as e,N as c}from"./index-BpMGcZ_2.js";const l="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",v="var(--card, #111318)",d="var(--border, #23262d)",t="var(--accent, #5aa9ff)",T="var(--accent-soft, rgba(90,169,255,0.15))",U="var(--radius, 16px)",N="#f59e0b",S="#ef4444",r={Page:n.div`
        padding: 24px 0 64px;
        color: ${l};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${x};
            }
            .current {
                color: ${l};
            }
        }
    `,Header:n.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .l h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            color: ${x};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${d};
            background: ${v};
            color: ${l};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${T};
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,Banner:n.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${d};
        border-radius: 10px;
        background: color-mix(in oklab, ${t} 10%, transparent);
        color: ${l};
    `,Controls:n.div`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: grid;
            grid-template-columns: 160px 160px 1fr auto;
            gap: 12px;
            align-items: end;
        }
        @media (max-width: 920px) {
            .row {
                grid-template-columns: 1fr 1fr;
            }
        }

        label {
            display: block;
            color: ${x};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .field.grow input {
            width: 100%;
        }
        .cta {
            display: flex;
            gap: 8px;
        }
    `,KpiGrid:n.div`
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(4, 1fr);
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 620px) {
            grid-template-columns: 1fr;
        }
    `,KpiCard:n.div`
        padding: 14px 16px;
        .k {
            color: ${x};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 700;
            margin-top: 6px;
        }
        .s {
            color: ${x};
            font-size: 12px;
            margin-top: 2px;
        }
        .d {
            margin-top: 10px;
            font-weight: 600;
            color: ${t};
        }
    `,Grid:n.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }

        .sectHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .sectHead .hint {
            color: ${x};
            font-size: 12px;
        }
        .pipeline .row,
        .regions .row {
            display: grid;
            grid-template-columns: 120px 1fr 60px;
            gap: 10px;
            align-items: center;
        }
        .label {
            color: ${x};
        }
        .bar {
            height: 10px;
            background: color-mix(in oklab, ${t} 10%, transparent);
            border: 1px solid ${d};
            border-radius: 999px;
            overflow: hidden;
        }
        .bar > div {
            height: 100%;
            background: ${t};
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
        }
        .miniBars {
            height: 10px;
            background: color-mix(in oklab, ${t} 10%, transparent);
            border: 1px solid ${d};
            border-radius: 999px;
            overflow: hidden;
        }
        .miniBars .bar {
            height: 100%;
            background: ${t};
        }
        .val {
            text-align: right;
        }
    `,GridCols:n.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .sectHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .link {
            color: ${x};
        }
        .link:hover {
            color: ${t};
        }
        .miniMeta {
            margin-top: 10px;
            color: ${x};
            font-size: 12px;
            display: flex;
            justify-content: space-between;
        }
    `,Table:n.div`
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            text-align: left;
            background: ${v};
            color: ${t};
            border-bottom: 1px solid ${d};
            padding: 10px;
            font-weight: 600;
        }
        tbody td {
            border-bottom: 1px solid ${d};
            padding: 10px;
        }
        .num {
            text-align: right;
        }
        .w80 {
            width: 80px;
        }
        .rowLink {
            display: inline-flex;
            padding: 6px 8px;
            border: 1px solid ${d};
            border-radius: 8px;
            background: ${v};
            color: ${l};
        }
        .rowLink:hover {
            border-color: ${t};
            color: ${t};
        }

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${d};
            background: color-mix(in oklab, ${t} 8%, transparent);
            color: ${l};
        }
        .badge.sent {
            background: color-mix(in oklab, ${t} 8%, transparent);
        }
        .badge.open {
            background: color-mix(in oklab, ${N} 18%, transparent);
            color: ${l};
            border-color: color-mix(in oklab, ${N} 28%, ${d});
        }
        .badge.converted {
            background: color-mix(in oklab, ${t} 12%, transparent);
        }
        .badge.expired {
            background: color-mix(in oklab, ${S} 12%, transparent);
            border-color: color-mix(in oklab, ${S} 28%, ${d});
        }

        .badge.confirmed,
        .badge.packed,
        .badge.invoiced,
        .badge.shipped {
            background: color-mix(in oklab, ${t} 12%, transparent);
        }

        .badge.approved {
            background: color-mix(in oklab, ${t} 12%, transparent);
        }
        .badge.initiated {
            background: color-mix(in oklab, ${N} 18%, transparent);
        }
    `,Overlay:n.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:n.div`
        width: min(520px, 92vw);
        border-radius: ${U};
        border: 1px solid ${d};
        background: ${v};
        color: ${l};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${d};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${l};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${d};
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${d};
            background: ${v};
            color: ${l};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${T};
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
    `},u=(i,o=!1)=>{const a=i instanceof Date?i:new Date(i),p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=w=>String(w).padStart(2,"0"),j=`${p[a.getDay()]} ${b[a.getMonth()]} ${h(a.getDate())} ${a.getFullYear()}`;return o?`${j} ${h(a.getHours())}:${h(a.getMinutes())}:${h(a.getSeconds())}hrs`:j},F=i=>{const o=i instanceof Date?i:new Date(i),a=p=>String(p).padStart(2,"0");return`${a(o.getHours())}:${a(o.getMinutes())}:${a(o.getSeconds())}hrs`},K=({open:i,title:o,message:a,onConfirm:p,onClose:b,confirmText:h="Confirm"})=>i?e.jsx(r.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:b,children:e.jsxs(r.Modal,{className:"card",onMouseDown:j=>j.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:o})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:a})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:b,children:"Cancel"}),e.jsx("button",{className:"btnPrimary",onClick:p,children:h})]})]})}):null,W=()=>{const i=m.useMemo(()=>new Date,[]),o=m.useRef(null),[a,p]=m.useState("2025-09-01"),[b,h]=m.useState("2025-10-04"),[j,w]=m.useState(""),[C,$]=m.useState(!1),[y,f]=m.useState(""),P=async()=>{try{await navigator.clipboard.writeText(window.location.href),f("Link copied"),setTimeout(()=>f(""),2e3)}catch{f("Copy failed"),setTimeout(()=>f(""),2e3)}},R=()=>$(!0),O=()=>{$(!1);const Q=[["Metric","Value"],["Revenue (This Period)","₹ 1,48,20,000"],["Orders","1,236"],["Avg Order Value","₹ 11,985"],["Outstanding (AR)","₹ 32,40,000"]].map(B=>B.map(V=>`"${String(V).replace(/"/g,'""')}"`).join(",")).join(`
`),z=new Blob([Q],{type:"text/csv;charset=utf-8"}),k=URL.createObjectURL(z),g=document.createElement("a");g.href=k,g.download=`sales-overview-${Date.now()}.csv`,document.body.appendChild(g),g.click(),g.remove(),URL.revokeObjectURL(k)},D=()=>{o.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},L=[{key:"Revenue",value:"₹ 1,48,20,000",sub:"This period",delta:"+4.2%"},{key:"Orders",value:"1,236",sub:"Confirmed",delta:"+2.1%"},{key:"Avg Order Value",value:"₹ 11,985",sub:"Incl. taxes",delta:"−1.3%"},{key:"Outstanding (AR)",value:"₹ 32,40,000",sub:"Due within 30d",delta:"—"}],A=[{label:"Leads",value:420},{label:"Qualified",value:290},{label:"Quoted",value:180},{label:"Won",value:126}],I=[{label:"North",value:42,hint:"₹ 58.2L"},{label:"West",value:36,hint:"₹ 49.4L"},{label:"South",value:31,hint:"₹ 44.7L"},{label:"East",value:21,hint:"₹ 30.1L"}],G=[{id:"Q-3107",customer:"Pixel Labs",amount:"₹ 2,45,000",date:"2025-10-02T15:08:20+05:30",status:"Open"},{id:"Q-3106",customer:"Bluewave Traders",amount:"₹ 1,05,000",date:"2025-10-01T11:14:52+05:30",status:"Sent"},{id:"Q-3105",customer:"Apollo Medicals",amount:"₹ 3,60,000",date:"2025-09-30T17:45:03+05:30",status:"Converted"},{id:"Q-3104",customer:"Arka Retail",amount:"₹ 82,000",date:"2025-09-29T10:12:44+05:30",status:"Expired"}],M=[{id:"ORD-3501",customer:"Apollo Medicals",total:"₹ 3,60,000",date:"2025-10-03T13:02:10+05:30",status:"Confirmed"},{id:"ORD-3500",customer:"Pixel Labs",total:"₹ 2,29,000",date:"2025-10-03T09:41:28+05:30",status:"Packed"},{id:"ORD-3499",customer:"Bluewave Traders",total:"₹ 1,05,000",date:"2025-10-02T18:12:31+05:30",status:"Invoiced"},{id:"ORD-3498",customer:"Arka Retail",total:"₹ 76,500",date:"2025-10-01T16:18:59+05:30",status:"Shipped"}],E=[{id:"RT-120",orderId:"ORD-3492",customer:"Care n Cure",amount:"₹ 14,200",date:"2025-09-28T10:05:11+05:30",status:"Approved"},{id:"RT-119",orderId:"ORD-3488",customer:"OmniMart",amount:"₹ 9,950",date:"2025-09-27T12:22:40+05:30",status:"Initiated"}],H=[{id:"PAY-7810",invoiceId:"INV-2042",customer:"Pixel Labs",amount:"₹ 1,10,000",mode:"NEFT",date:"2025-10-03T14:14:02+05:30"},{id:"PAY-7809",invoiceId:"INV-2041",customer:"Apollo Medicals",amount:"₹ 75,500",mode:"UPI",date:"2025-10-02T12:31:55+05:30"},{id:"PAY-7808",invoiceId:"INV-2038",customer:"Bluewave Traders",amount:"₹ 58,900",mode:"Card",date:"2025-10-01T09:06:41+05:30"}];return e.jsxs(r.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }

          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(r.Header,{className:"card",children:[e.jsxs("div",{className:"l",children:[e.jsx("h1",{children:"Sales Overview"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(c,{to:"/sales",children:"Sales"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Overview"})]}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Today: ",u(i,!0)]})})]}),e.jsxs("div",{className:"r actions",children:[e.jsx("button",{className:"btnGhost",title:"Copy deep link",onClick:P,children:"Copy Link"}),e.jsx("button",{className:"btnGhost",title:"Export snapshot",onClick:R,children:"Export Snapshot"}),e.jsx("button",{className:"btnGhost",title:"Print section",onClick:D,children:"Print"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo mode",children:"Create Quote"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo mode",children:"New Order"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo mode",children:"Record Payment"})]})]}),y?e.jsx(r.Banner,{role:"status","aria-live":"polite",children:y}):null,e.jsx(r.Controls,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"From"}),e.jsx("input",{type:"date",value:a,onChange:s=>p(s.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"To"}),e.jsx("input",{type:"date",value:b,onChange:s=>h(s.target.value)})]}),e.jsxs("div",{className:"field grow",children:[e.jsx("label",{children:"Quick find"}),e.jsx("input",{type:"text",value:j,onChange:s=>w(s.target.value),placeholder:"Search customers, orders, quotes…"})]}),e.jsxs("div",{className:"cta",children:[e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo mode",children:"Apply"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo mode",children:"Reset"})]})]})}),e.jsx(r.KpiGrid,{children:L.map(s=>e.jsxs(r.KpiCard,{className:"card",children:[e.jsx("div",{className:"k",children:s.key}),e.jsx("div",{className:"v",children:s.value}),e.jsx("div",{className:"s",children:s.sub}),e.jsx("div",{className:"d",children:s.delta})]},s.key))}),e.jsxs(r.Grid,{children:[e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectHead",children:[e.jsx("h3",{children:"Pipeline"}),e.jsxs("div",{className:"hint",children:["Snapshot as of ",u(i)]})]}),e.jsx("div",{className:"pipeline",children:A.map(s=>e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:s.label}),e.jsx("div",{className:"bar",children:e.jsx("div",{style:{width:`${s.value/4}%`}})}),e.jsx("div",{className:"val",children:s.value})]},s.label))})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectHead",children:[e.jsx("h3",{children:"Region Performance"}),e.jsx("div",{className:"hint",children:"Share by orders"})]}),e.jsx("div",{className:"regions",children:I.map(s=>e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"label",children:s.label}),e.jsx("div",{className:"miniBars",children:e.jsx("div",{className:"bar",style:{width:`${s.value*2}%`}})}),e.jsx("div",{className:"val",children:s.hint})]},s.label))})]})]}),e.jsxs(r.GridCols,{children:[e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectHead",children:[e.jsx("h3",{children:"Recent Quotes"}),e.jsx(c,{to:"/sales/quotes",className:"link",children:"Open list"})]}),e.jsx(r.Table,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Quote #"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"w80"})]})}),e.jsx("tbody",{children:G.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.customer}),e.jsx("td",{className:"num",children:s.amount}),e.jsx("td",{children:u(s.date,!0)}),e.jsx("td",{children:e.jsx("span",{className:`badge ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("td",{className:"w80",children:e.jsx(c,{to:`/sales/quotes/${s.id}`,className:"rowLink",children:"View"})})]},s.id))})]})})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectHead",children:[e.jsx("h3",{children:"Recent Orders"}),e.jsx(c,{to:"/orders",className:"link",children:"Open list"})]}),e.jsx(r.Table,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Order #"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{className:"num",children:"Total"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"w80"})]})}),e.jsx("tbody",{children:M.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.customer}),e.jsx("td",{className:"num",children:s.total}),e.jsx("td",{children:u(s.date,!0)}),e.jsx("td",{children:e.jsx("span",{className:`badge ${s.status.toLowerCase().replace(/\s+/g,"-")}`,children:s.status})}),e.jsx("td",{className:"w80",children:e.jsx(c,{to:`/orders/${s.id}`,className:"rowLink",children:"View"})})]},s.id))})]})})]})]}),e.jsxs(r.GridCols,{children:[e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectHead",children:[e.jsx("h3",{children:"Returns & Refunds"}),e.jsx(c,{to:"/sales/returns",className:"link",children:"Open list"})]}),e.jsx(r.Table,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Return #"}),e.jsx("th",{children:"Order #"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:E.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx(c,{to:`/orders/${s.orderId}`,children:s.orderId})}),e.jsx("td",{children:s.customer}),e.jsx("td",{className:"num",children:s.amount}),e.jsx("td",{children:u(s.date,!0)}),e.jsx("td",{children:e.jsx("span",{className:`badge ${s.status.toLowerCase()}`,children:s.status})})]},s.id))})]})})]}),e.jsxs("section",{className:"card",id:"search-print-area",ref:o,children:[e.jsxs("header",{className:"sectHead",children:[e.jsx("h3",{children:"Latest Payments"}),e.jsx(c,{to:"/sales/payments",className:"link",children:"Open list"})]}),e.jsx(r.Table,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Payment #"}),e.jsx("th",{children:"Invoice #"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{children:"Mode"}),e.jsx("th",{children:"Date"})]})}),e.jsx("tbody",{children:H.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx(c,{to:`/invoices/${s.invoiceId}`,children:s.invoiceId})}),e.jsx("td",{children:s.customer}),e.jsx("td",{className:"num",children:s.amount}),e.jsx("td",{children:s.mode}),e.jsx("td",{children:u(s.date,!0)})]},s.id))})]})}),e.jsxs("div",{className:"miniMeta",children:[e.jsxs("div",{children:["Printed: ",u(i,!0)]}),e.jsxs("div",{children:["Window: ",F(i)]})]})]})]}),e.jsx(K,{open:C,title:"Export snapshot?",message:"A lightweight CSV with the top metrics will be downloaded.",confirmText:"Download",onConfirm:O,onClose:()=>$(!1)})]})};export{W as default};
