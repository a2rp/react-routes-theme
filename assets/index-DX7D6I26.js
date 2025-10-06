import{d as n,u as w,r as g,j as e,N as r,a3 as T,a4 as S,a5 as L,a6 as D,a7 as z,a8 as b,a9 as f,aa as N,ab as R,ac as y}from"./index-Dvs-eF3B.js";const p="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",d="var(--card, #111318)",t="var(--border, #23262d)",l="var(--accent, #5aa9ff)",h="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",a={Page:n.div`
        width: 100%;
        color: ${p};
    `,Header:n.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 16px;

        .secondary {
            background: transparent;
            border: 1px solid ${t};
            color: ${p};
        }
    `,Breadcrumbs:n.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: ${o};

        a {
            color: ${o};
            text-decoration: none;
        }
        a:hover {
            color: ${l};
        }
        strong {
            color: ${p};
        }
    `,Actions:n.div`
        display: flex;
        align-items: center;
        gap: 8px;

        a,
        button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 10px;
            border: 1px solid ${t};
            background: ${d};
            color: ${p};
            text-decoration: none;
            box-shadow: ${h};
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.06s ease;
        }
        a:hover,
        button:hover {
            border-color: ${l};
            color: ${l};
            background: color-mix(in oklab, ${l} 12%, transparent);
        }
        button:active {
            transform: translateY(1px);
        }
        button[disabled] {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
    `,Subnav:n.div`
        position: sticky;
        top: 0;
        z-index: 5;
        display: flex;
        gap: 10px;
        padding: 10px 0 14px 0;
        background: linear-gradient(
            180deg,
            color-mix(in oklab, ${d} 85%, transparent),
            transparent
        );

        a {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${t};
            background: ${d};
            color: ${o};
            text-decoration: none;
            font-size: 12px;
            transition: all 0.2s ease;
            box-shadow: ${h};
        }
        a:hover {
            color: ${l};
            border-color: ${l};
        }
        a.route {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
    `,HeaderMeta:n.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 12px;
        padding: 14px;
        border: 1px solid ${t};
        border-radius: 12px;
        background: color-mix(in oklab, ${d} 96%, transparent);
        box-shadow: ${h};

        .title h1 {
            font-size: 22px;
            line-height: 1.2;
            margin-bottom: 4px;
        }
        .title p {
            color: ${o};
            font-size: 12px;
        }
        .meta {
            list-style: none;
            display: flex;
            gap: 18px;
            padding: 0;
            margin: 0;
        }
        .meta li {
            display: grid;
            gap: 4px;
            font-size: 12px;
        }
        .meta li span {
            color: ${o};
        }
        .meta li strong {
            color: ${p};
        }
    `,KPIGrid:n.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin: 12px 0;
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,KPI:n.div`
        display: grid;
        grid-template-columns: 36px 1fr;
        gap: 10px;
        padding: 14px;
        border: 1px solid ${t};
        border-radius: 12px;
        background: ${d};
        box-shadow: ${h};

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 10px;
            border: 1px solid ${t};
            background: color-mix(in oklab, ${l} 10%, transparent);
            color: ${l};
        }
        .meta .value {
            font-size: 22px;
            font-weight: 700;
            line-height: 1.1;
        }
        .meta .label {
            color: ${p};
            font-size: 13px;
        }
        .meta .hint {
            color: ${o};
            font-size: 12px;
        }
    `,Quickbar:n.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin: 8px 0 16px 0;

        .group {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        a {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${t};
            color: ${p};
            background: ${d};
            text-decoration: none;
            font-size: 12px;
            transition: all 0.2s ease;
        }
        a:hover {
            color: ${l};
            border-color: ${l};
            background: color-mix(in oklab, ${l} 12%, transparent);
        }
    `,SegmentHeader:n.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin: 18px 0 8px 0;

        .l {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .l h2 {
            font-size: 16px;
        }

        a.soft {
            font-size: 12px;
            color: ${o};
            text-decoration: none;
            border: 1px solid ${t};
            padding: 6px 10px;
            border-radius: 8px;
            background: ${d};
            transition: all 0.2s ease;
        }
        a.soft:hover {
            color: ${l};
            border-color: ${l};
        }
    `,Table:n.div`
        border: 1px solid ${t};
        border-radius: 12px;
        overflow: hidden;
        background: ${d};
        box-shadow: ${h};

        .thead,
        .tbody {
            display: grid;
        }
        .tr {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.8fr 0.9fr 0.9fr 0.8fr 0.9fr;
            gap: 0;
            border-bottom: 1px solid ${t};
        }
        /* adapt columns for different tables */
        &[aria-label="Lane performance"] .tr {
            grid-template-columns: 1.2fr 0.6fr 0.6fr 0.6fr 0.5fr 0.6fr;
        }
        &[aria-label="Carriers"] .tr {
            grid-template-columns: 1.2fr 0.8fr 0.6fr 0.6fr;
        }

        .th,
        .td {
            padding: 10px 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 13px;
            border-right: 1px solid ${t};
        }
        .th:last-child,
        .td:last-child {
            border-right: 0;
        }
        .th {
            font-weight: 600;
            color: ${l};
            background: color-mix(in oklab, ${d} 90%, transparent);
            position: sticky;
            top: 0;
            z-index: 1;
        }
        .tbody .tr:hover {
            background: color-mix(in oklab, ${l} 8%, transparent);
        }

        a {
            color: ${p};
            text-decoration: none;
        }
        a:hover {
            color: ${l};
        }

        .links {
            display: flex;
            align-items: center;
            gap: 6px;
        }
    `,Badge:n.span.attrs(i=>({role:"status"}))`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 12px;
        border: 1px solid ${t};
        background: ${({tone:i})=>i==="ok"?`color-mix(in oklab, ${l} 14%, transparent)`:i==="warn"?"rgba(255, 191, 0, .12)":i==="issue"?"rgba(255, 99, 71, .14)":`color-mix(in oklab, ${l} 10%, transparent)`};
        color: ${({tone:i})=>i==="ok"?`${l}`:i==="warn"?"#ffbf00":i==="issue"?"#ff6347":`${l}`};
    `,SLAList:n.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,SLACard:n.div`
        border: 1px solid ${t};
        border-radius: 12px;
        background: ${d};
        box-shadow: ${h};
        padding: 14px;

        .t {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .t h3 {
            font-size: 14px;
        }
        .t a {
            color: ${o};
            text-decoration: none;
            font-size: 12px;
        }
        .t a:hover {
            color: ${l};
        }

        .row {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px;
            padding: 6px 0;
            border-top: 1px dashed ${t};
        }
        .row:first-of-type {
            border-top: 0;
        }
        .k {
            color: ${o};
            font-size: 12px;
        }
        .v {
            font-size: 13px;
        }
    `,CostGrid:n.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,CostCard:n.div`
        border: 1px solid ${t};
        border-radius: 12px;
        background: ${d};
        box-shadow: ${h};
        padding: 14px;

        .t {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .t h3 {
            font-size: 14px;
        }
        .t a {
            color: ${o};
            text-decoration: none;
            font-size: 12px;
        }
        .t a:hover {
            color: ${l};
        }

        .row {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px;
            padding: 6px 0;
            border-top: 1px dashed ${t};
        }
        .row:first-of-type {
            border-top: 0;
        }
        .k {
            color: ${o};
            font-size: 12px;
        }
        .v {
            font-size: 13px;
        }
    `},m=i=>i<10?`0${i}`:`${i}`,A=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function j(i){const c=new Date(i);return`${A[c.getDay()]} ${C[c.getMonth()]} ${m(c.getDate())} ${c.getFullYear()}`}function u(i){const c=new Date(i);return`${m(c.getHours())}:${m(c.getMinutes())}:${m(c.getSeconds())}hrs`}function x(i){return`${j(i)} ${u(i)}`}const P="2025-10-06T06:46:59.352Z",E="2025-10-06T12:16:55+05:30",H=[{key:"total",label:"Total Shipments",value:"1,286",hint:"Last 30 days",icon:e.jsx(f,{size:20})},{key:"onTime",label:"On-Time",value:"92.4%",hint:"Delivered within SLA",icon:e.jsx(b,{size:20})},{key:"inTransit",label:"In-Transit",value:"184",hint:"Across all carriers",icon:e.jsx(y,{size:20})},{key:"exceptions",label:"Exceptions",value:"23",hint:"Delay/Damage/Address",icon:e.jsx(N,{size:20})}],O=[{lane:"BLR → DEL",mode:"Air",onTime:"95.8%",avgTt:"1.2d",volume:264,deep:"/shipments?lane=BLR-DEL"},{lane:"MUM → HYD",mode:"Surface",onTime:"89.1%",avgTt:"2.8d",volume:198,deep:"/shipments?lane=MUM-HYD"},{lane:"PNQ → BLR",mode:"Air",onTime:"94.4%",avgTt:"1.1d",volume:121,deep:"/shipments?lane=PNQ-BLR"},{lane:"DEL → KOL",mode:"Rail",onTime:"87.2%",avgTt:"3.3d",volume:96,deep:"/shipments?lane=DEL-KOL"}],B=[{name:"BlueDart",onTime:"96.1%",vol:521,link:"/shipments/carriers#bluedart"},{name:"Delhivery",onTime:"92.7%",vol:406,link:"/shipments/carriers#delhivery"},{name:"XpressBees",onTime:"90.2%",vol:231,link:"/shipments/carriers#xpressbees"},{name:"Ecom Express",onTime:"88.4%",vol:128,link:"/shipments/carriers#ecom"}],M=[{id:"SHP-41023",type:"Delay",lane:"BLR → DEL",carrier:"Delhivery",raised:"2025-10-04T15:38:20+05:30",deep:"/shipments/SHP-41023"},{id:"SHP-41088",type:"Damage",lane:"MUM → HYD",carrier:"BlueDart",raised:"2025-10-03T11:06:42+05:30",deep:"/shipments/SHP-41088"},{id:"SHP-41102",type:"Address",lane:"DEL → KOL",carrier:"XpressBees",raised:"2025-10-02T18:22:01+05:30",deep:"/shipments/SHP-41102"},{id:"SHP-41177",type:"Delay",lane:"PNQ → BLR",carrier:"BlueDart",raised:"2025-10-01T09:58:13+05:30",deep:"/shipments/SHP-41177"}],I=[{id:"SHP-41210",carrier:"BlueDart",mode:"Air",from:"BLR",to:"DEL",created:"2025-10-04T21:10:05+05:30",eta:"2025-10-05T20:30:00+05:30",status:"In Transit"},{id:"SHP-41207",carrier:"Delhivery",mode:"Surface",from:"MUM",to:"HYD",created:"2025-10-04T19:44:11+05:30",eta:"2025-10-07T12:00:00+05:30",status:"In Transit"},{id:"SHP-41199",carrier:"XpressBees",mode:"Rail",from:"DEL",to:"KOL",created:"2025-10-04T14:12:29+05:30",eta:"2025-10-06T16:45:00+05:30",status:"Delayed"},{id:"SHP-41190",carrier:"Ecom Express",mode:"Air",from:"PNQ",to:"BLR",created:"2025-10-03T22:38:40+05:30",eta:"2025-10-04T18:00:00+05:30",status:"Delivered"}],K=[{name:"Air D+1",target:"95%",achieved:"93.8%",link:"/reports/shipment#sla-air"},{name:"Surface D+3",target:"90%",achieved:"89.0%",link:"/reports/shipment#sla-surface"},{name:"Rail D+2",target:"92%",achieved:"90.6%",link:"/reports/shipment#sla-rail"}],Y=[{bucket:"Air Express",avg:"₹142.30",yoy:"↓ 2.3%",link:"/reports/shipment#cost-air"},{bucket:"Surface Standard",avg:"₹76.10",yoy:"↑ 1.1%",link:"/reports/shipment#cost-surface"},{bucket:"Rail",avg:"₹64.80",yoy:"↓ 0.9%",link:"/reports/shipment#cost-rail"}];function G(){w();const i=g.useRef(null),c=g.useMemo(()=>x(P),[]),$=g.useMemo(()=>x(E),[]),k=()=>{i.current&&(document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>{document.body.classList.remove("print-section-mode")},250))};return e.jsxs(a.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs(a.Header,{children:[e.jsxs(a.Breadcrumbs,{children:[e.jsx(r,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:"/reports",children:"Reports"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Shipment"})]}),e.jsxs(a.Actions,{children:[e.jsxs("button",{onClick:k,title:"Print this report section",children:[e.jsx(T,{size:18}),e.jsx("span",{children:"Print"})]}),e.jsxs(r,{to:"/tools/import-export",className:"secondary",title:"Open Import / Export",children:[e.jsx(S,{size:18}),e.jsx("span",{children:"Export"})]}),e.jsxs("button",{disabled:!0,title:"Demo only",children:[e.jsx(L,{size:18}),e.jsx("span",{children:"Refresh"})]}),e.jsxs("button",{disabled:!0,title:"Demo only",children:[e.jsx(D,{size:18}),e.jsx("span",{children:"Schedule Email"})]})]})]}),e.jsxs(a.Subnav,{children:[e.jsx("a",{href:"#overview",children:"Overview"}),e.jsx("a",{href:"#lanes",children:"Lanes"}),e.jsx("a",{href:"#carriers",children:"Carriers"}),e.jsx("a",{href:"#exceptions",children:"Exceptions"}),e.jsx("a",{href:"#sla",children:"SLA"}),e.jsx("a",{href:"#costs",children:"Costs"}),e.jsxs(r,{to:"/shipments",className:"route",children:["Open Shipments ",e.jsx(z,{size:16})]})]}),e.jsxs("div",{id:"search-print-area",ref:i,children:[e.jsxs(a.HeaderMeta,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Shipment Performance"}),e.jsx("p",{children:"Period: Sat Oct 04 2025 — Sun Oct 05 2025 • Timezone: Asia/Kolkata"})]}),e.jsxs("ul",{className:"meta",children:[e.jsxs("li",{children:[e.jsx("span",{children:"Generated"}),e.jsx("strong",{children:c})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Last Commit"}),e.jsx("strong",{children:$})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Source"}),e.jsx("strong",{children:"Demo fixtures"})]})]})]}),e.jsxs("section",{id:"overview",children:[e.jsx(a.KPIGrid,{children:H.map(s=>e.jsxs(a.KPI,{className:s.key,children:[e.jsx("div",{className:"icon",children:s.icon}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"value",children:s.value}),e.jsx("div",{className:"label",children:s.label}),e.jsx("div",{className:"hint",children:s.hint})]})]},s.key))}),e.jsxs(a.Quickbar,{children:[e.jsxs("div",{className:"group",children:[e.jsx(r,{to:"/shipments",children:"All Shipments"}),e.jsx(r,{to:"/shipments/new",title:"Demo disabled",children:"Create Shipment"}),e.jsx(r,{to:"/shipments/carriers",children:"Carriers"}),e.jsx(r,{to:"/inventory/transfers",children:"Warehouse Transfers"})]}),e.jsxs("div",{className:"group",children:[e.jsx(r,{to:"/reports/inventory",children:"Inventory Report"}),e.jsx(r,{to:"/reports/sales",children:"Sales Report"}),e.jsx(r,{to:"/reports/gst",children:"GST Report"}),e.jsx(r,{to:"/reports/finance",children:"Finance Report"})]})]})]}),e.jsxs("section",{id:"lanes",children:[e.jsxs(a.SegmentHeader,{children:[e.jsxs("div",{className:"l",children:[e.jsx(b,{size:18}),e.jsx("h2",{children:"Lane Performance"})]}),e.jsx(r,{to:"/shipments",className:"soft",children:"View All"})]}),e.jsxs(a.Table,{role:"table","aria-label":"Lane performance",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",role:"columnheader",children:"Lane"}),e.jsx("div",{className:"th",role:"columnheader",children:"Mode"}),e.jsx("div",{className:"th",role:"columnheader",children:"On-Time"}),e.jsx("div",{className:"th",role:"columnheader",children:"Avg TT"}),e.jsx("div",{className:"th",role:"columnheader",children:"Volume"}),e.jsx("div",{className:"th",role:"columnheader",children:"Link"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:O.map((s,v)=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td",role:"cell",children:s.lane}),e.jsx("div",{className:"td",role:"cell",children:s.mode}),e.jsx("div",{className:"td",role:"cell",children:e.jsx(a.Badge,{tone:"ok",children:s.onTime})}),e.jsx("div",{className:"td",role:"cell",children:s.avgTt}),e.jsx("div",{className:"td",role:"cell",children:s.volume}),e.jsx("div",{className:"td",role:"cell",children:e.jsx(r,{to:s.deep,children:"Open"})})]},v))})]})]}),e.jsxs("section",{id:"carriers",children:[e.jsxs(a.SegmentHeader,{children:[e.jsxs("div",{className:"l",children:[e.jsx(f,{size:18}),e.jsx("h2",{children:"Top Carriers"})]}),e.jsx(r,{to:"/shipments/carriers",className:"soft",children:"Manage Carriers"})]}),e.jsxs(a.Table,{role:"table","aria-label":"Carriers",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",role:"columnheader",children:"Carrier"}),e.jsx("div",{className:"th",role:"columnheader",children:"On-Time %"}),e.jsx("div",{className:"th",role:"columnheader",children:"Volume"}),e.jsx("div",{className:"th",role:"columnheader",children:"Link"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:B.map((s,v)=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td",role:"cell",children:s.name}),e.jsx("div",{className:"td",role:"cell",children:e.jsx(a.Badge,{tone:"ok",children:s.onTime})}),e.jsx("div",{className:"td",role:"cell",children:s.vol}),e.jsx("div",{className:"td",role:"cell",children:e.jsx(r,{to:s.link,children:"Open"})})]},v))})]})]}),e.jsxs("section",{id:"exceptions",children:[e.jsxs(a.SegmentHeader,{children:[e.jsxs("div",{className:"l",children:[e.jsx(N,{size:18}),e.jsx("h2",{children:"Exceptions"})]}),e.jsx(r,{to:"/reports/shipment#overview",className:"soft",children:"Overview"})]}),e.jsxs(a.Table,{role:"table","aria-label":"Exceptions",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",role:"columnheader",children:"Shipment"}),e.jsx("div",{className:"th",role:"columnheader",children:"Type"}),e.jsx("div",{className:"th",role:"columnheader",children:"Lane"}),e.jsx("div",{className:"th",role:"columnheader",children:"Carrier"}),e.jsx("div",{className:"th",role:"columnheader",children:"Raised"}),e.jsx("div",{className:"th",role:"columnheader",children:"Links"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:M.map(s=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td",role:"cell",children:e.jsx(r,{to:s.deep,children:s.id})}),e.jsx("div",{className:"td",role:"cell",children:e.jsx(a.Badge,{tone:s.type==="Damage"?"warn":"issue",children:s.type})}),e.jsx("div",{className:"td",role:"cell",children:s.lane}),e.jsx("div",{className:"td",role:"cell",children:s.carrier}),e.jsxs("div",{className:"td",role:"cell",title:x(s.raised),children:[j(s.raised)," ",u(s.raised)]}),e.jsxs("div",{className:"td links",role:"cell",children:[e.jsx(r,{to:`${s.deep}/track`,children:"Track"}),e.jsx("span",{children:"·"}),e.jsx(r,{to:`${s.deep}/labels`,children:"Labels"})]})]},s.id))})]})]}),e.jsxs("section",{id:"sla",children:[e.jsxs(a.SegmentHeader,{children:[e.jsxs("div",{className:"l",children:[e.jsx(b,{size:18}),e.jsx("h2",{children:"SLA Compliance"})]}),e.jsx(r,{to:"/reports",className:"soft",children:"All Reports"})]}),e.jsx(a.SLAList,{children:K.map(s=>e.jsxs(a.SLACard,{children:[e.jsxs("div",{className:"t",children:[e.jsx("h3",{children:s.name}),e.jsx(r,{to:s.link,children:"Open"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Target"}),e.jsx("span",{className:"v",children:s.target})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Achieved"}),e.jsx("span",{className:"v",children:e.jsx(a.Badge,{tone:"ok",children:s.achieved})})]})]},s.name))})]}),e.jsxs("section",{id:"costs",children:[e.jsxs(a.SegmentHeader,{children:[e.jsxs("div",{className:"l",children:[e.jsx(R,{size:18}),e.jsx("h2",{children:"Cost Insights"})]}),e.jsx(r,{to:"/finance",className:"soft",children:"Finance"})]}),e.jsx(a.CostGrid,{children:Y.map(s=>e.jsxs(a.CostCard,{id:s.link.replace("#",""),children:[e.jsxs("div",{className:"t",children:[e.jsx("h3",{children:s.bucket}),e.jsx(r,{to:s.link,children:"Open"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Avg Cost"}),e.jsx("span",{className:"v",children:s.avg})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"YoY"}),e.jsx("span",{className:"v",children:s.yoy})]})]},s.bucket))})]}),e.jsxs("section",{id:"recent",children:[e.jsxs(a.SegmentHeader,{children:[e.jsxs("div",{className:"l",children:[e.jsx(y,{size:18}),e.jsx("h2",{children:"Recent Shipments"})]}),e.jsx(r,{to:"/shipments",className:"soft",children:"Open Shipments"})]}),e.jsxs(a.Table,{role:"table","aria-label":"Recent shipments",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",role:"columnheader",children:"Shipment"}),e.jsx("div",{className:"th",role:"columnheader",children:"Carrier"}),e.jsx("div",{className:"th",role:"columnheader",children:"Mode"}),e.jsx("div",{className:"th",role:"columnheader",children:"From"}),e.jsx("div",{className:"th",role:"columnheader",children:"To"}),e.jsx("div",{className:"th",role:"columnheader",children:"Created"}),e.jsx("div",{className:"th",role:"columnheader",children:"ETA"}),e.jsx("div",{className:"th",role:"columnheader",children:"Status"}),e.jsx("div",{className:"th",role:"columnheader",children:"Links"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:I.map(s=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td",role:"cell",children:e.jsx(r,{to:`/shipments/${s.id}`,children:s.id})}),e.jsx("div",{className:"td",role:"cell",children:s.carrier}),e.jsx("div",{className:"td",role:"cell",children:s.mode}),e.jsx("div",{className:"td",role:"cell",children:s.from}),e.jsx("div",{className:"td",role:"cell",children:s.to}),e.jsxs("div",{className:"td",role:"cell",title:x(s.created),children:[j(s.created)," ",u(s.created)]}),e.jsxs("div",{className:"td",role:"cell",title:x(s.eta),children:[j(s.eta)," ",u(s.eta)]}),e.jsx("div",{className:"td",role:"cell",children:e.jsx(a.Badge,{tone:s.status==="Delivered"?"ok":s.status==="Delayed"?"warn":"info",children:s.status})}),e.jsxs("div",{className:"td links",role:"cell",children:[e.jsx(r,{to:`/shipments/${s.id}/track`,children:"Track"}),e.jsx("span",{children:"·"}),e.jsx(r,{to:`/shipments/${s.id}/labels`,children:"Labels"})]})]},s.id))})]})]})]})]})}export{G as default,j as fmtDate,x as fmtDateTime,u as fmtTime};
