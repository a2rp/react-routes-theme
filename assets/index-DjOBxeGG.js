import{d as l,u as y,r as j,j as e,N as a}from"./index-CvWKwy17.js";import{m as $,B as w,a as O,k as C,H as g,I as T,f as I,J as L,j as M,K as W,d as S,L as P}from"./index-BJa2s43o.js";const c="var(--text, #f3f4f6)",t="var(--muted, #a0a0a7)",n="var(--card, #111318)",o="var(--border, #23262d)",i="var(--accent, #5aa9ff)",v="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",r={Wrap:l.div`
        color: ${c};
        display: block;
        width: 100%;
        padding: 16px;
        container-type: inline-size;

        .card {
            background: ${n};
            border: 1px solid ${o};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${v};
        }

        .ghost {
            background: transparent;
            border: 1px solid ${o};
            color: ${c};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .ghost:hover {
            border-color: ${i};
            color: ${i};
            background: color-mix(in oklab, ${i} 10%, transparent);
        }

        .muted {
            color: ${t};
            font-size: 12px;
        }
        .sub {
            color: ${t};
            font-size: 11px;
        }
        .cellLink {
            color: ${c};
        }
        .cellLink:hover {
            color: ${i};
            text-decoration: underline;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            height: 22px;
            padding: 0 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${o};
            background: color-mix(in oklab, ${n} 85%, transparent);
        }
        .pill.wip {
            border-color: ${i};
            color: ${i};
        }
        .pill.queued {
            color: ${c};
            opacity: 0.9;
        }
        .pill.overdue {
            color: #e11d48;
            border-color: #e11d48;
        }
        .pill.state-waiting {
            color: ${t};
        }
        .pill.state-running {
            color: ${i};
            border-color: ${i};
        }
        .pill.state-delayed {
            color: #e11d48;
            border-color: #e11d48;
        }
        .pill.qc-pending {
            color: ${i};
            border-color: ${i};
        }
        .pill.qc-scheduled {
            color: ${t};
        }
        .pill.qc-hold {
            color: #e11d48;
            border-color: #e11d48;
        }
    `,Header:l.header`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 16px;

        .titles h1 {
            font-family: "Antonio", sans-serif;
            font-size: 28px;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }
        .meta {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${t};
            margin-bottom: 8px;
        }
        .crumbs {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${t};
        }
        .crumbs a {
            color: ${t};
        }
        .crumbs a:hover {
            color: ${i};
            text-decoration: underline;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .actions button,
        .actions a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: ${n};
            color: ${c};
            border: 1px solid ${o};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.06s ease;
        }
        .actions button:hover,
        .actions a:hover {
            border-color: ${i};
            color: ${i};
            background: color-mix(in oklab, ${i} 10%, transparent);
        }
        .actions button:active,
        .actions a:active {
            transform: translateY(1px);
        }
        .actions button[disabled] {
            opacity: 0.55;
            cursor: not-allowed;
        }

        /* Pure-CSS tooltip for disabled buttons */
        .tip {
            position: relative;
            display: inline-flex;
        }
        .tip[data-tip]::after {
            content: attr(data-tip);
            position: absolute;
            bottom: calc(100% + 6px);
            left: 50%;
            transform: translateX(-50%);
            background: ${n};
            border: 1px solid ${o};
            color: ${c};
            padding: 6px 8px;
            border-radius: 6px;
            white-space: nowrap;
            font-size: 12px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.15s ease;
            box-shadow: ${v};
        }
        .tip:hover::after {
            opacity: 1;
        }
    `,Subnav:l.nav`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin: 8px 0 16px 0;

        a {
            color: ${t};
            border: 1px solid ${o};
            border-radius: 999px;
            padding: 6px 10px;
            text-decoration: none;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            background: color-mix(in oklab, ${n} 90%, transparent);
        }
        a:hover {
            color: ${i};
            border-color: ${i};
        }
        a.active {
            color: ${i};
            border-color: ${i};
            background: color-mix(in oklab, ${i} 12%, transparent);
        }
    `,KpiGrid:l.section`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 12px;
        margin-bottom: 16px;

        .kpi {
            display: grid;
            grid-template-rows: auto auto auto;
            gap: 4px;
            min-height: 96px;
        }
        .kpi .value {
            font-size: 24px;
            font-weight: 700;
        }
        .kpi .label {
            color: ${t};
            font-weight: 600;
        }
        .kpi .sub {
            color: ${t};
            font-size: 12px;
        }
    `,Columns:l.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 12px;
        margin-bottom: 16px;

        @container (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .sectionHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 10px;
        }
        .sectionHead .title {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
        }
        .sectionHead .tools .link {
            color: ${t};
            text-decoration: none;
            border-bottom: 1px dashed ${o};
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        .sectionHead .tools .link:hover {
            color: ${i};
            border-color: ${i};
        }
    `,Table:l.div`
        border: 1px solid ${o};
        border-radius: 10px;
        overflow: hidden;
        font-size: 13px;

        .thead {
            background: ${n};
            border-bottom: 1px solid ${o};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        .tr {
            display: grid;
            grid-template-columns: 140px 1.6fr 1.1fr 160px 160px 100px 120px 1fr;
        }
        .tr > div {
            padding: 10px 12px;
            border-bottom: 1px solid ${o};
        }
        .th {
            font-weight: 600;
            color: ${i};
            background: color-mix(in oklab, ${n} 95%, transparent);
        }
        .td.right,
        .th.right {
            text-align: right;
        }
        .tbody .tr:hover {
            background: color-mix(in oklab, ${i} 6%, transparent);
        }

        /* Narrow variants for other tables */
        &:has(.th:only-child) {
        }
        &:not(:has(.th:nth-child(8))) .tr {
            grid-template-columns: 140px 1.2fr 1fr 1fr 1fr 1fr;
        }
    `,Timeline:l.div`
        display: grid;
        gap: 10px;

        .item {
            display: grid;
            grid-template-columns: 14px 1fr;
            gap: 8px;
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-top: 6px;
            background: ${t};
            border: 1px solid ${o};
        }
        .dot.wo {
            background: ${i};
        }
        .dot.qc {
            background: color-mix(in oklab, ${i} 18%, #ffffff);
        }
        .dot.bom {
            background: color-mix(in oklab, ${i} 10%, #ffffff);
        }
        .dot.alert {
            background: #e11d48;
        }
        .content .text {
            font-weight: 500;
        }
        .content .time {
            color: ${t};
            font-size: 12px;
        }
    `,ListLinks:l.div`
        display: grid;
        gap: 8px;
        a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border: 1px solid ${o};
            border-radius: 8px;
            color: ${c};
            text-decoration: none;
            background: color-mix(in oklab, ${n} 92%, transparent);
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        a:hover {
            color: ${i};
            border-color: ${i};
            background: color-mix(in oklab, ${i} 8%, transparent);
        }
    `,Modal:l.div`
        position: fixed;
        inset: 0;
        z-index: 1000;

        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(1px);
        }
        .panel {
            position: absolute;
            right: 24px;
            bottom: 24px;
            max-width: 420px;
            display: grid;
            gap: 10px;
        }
        .panel header {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
        }
        .panel footer {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
    `},x=d=>new Date(d).toDateString(),m=d=>new Date(d).toLocaleTimeString("en-GB",{hour12:!1})+"hrs",N=d=>`${x(d)} ${m(d)}`,B=[{key:"wip",label:"Work Orders (WIP)",value:"18",sub:"7 due today"},{key:"overdue",label:"Overdue Ops",value:"4",sub:"check queue"},{key:"capacity",label:"Capacity Utilization",value:"82%",sub:"shift A"},{key:"oee",label:"OEE",value:"74%",sub:"last 7 days"},{key:"rejections",label:"Rejections",value:"1.9%",sub:"month-to-date"},{key:"downtime",label:"Planned Downtime",value:"03:20hrs",sub:"this week"}],D=[{id:"WO-3001",bomId:"BOM-1001",productId:"MED-AMOX-500",product:"Amoxicillin 500mg Tablets",line:"Tablet Line 1",scheduledFor:"2025-10-04T09:00:00+05:30",eta:"2025-10-04T16:30:00+05:30",status:"WIP",qty:"25,000"},{id:"WO-3002",bomId:"BOM-1010",productId:"MED-PCM-650",product:"Paracetamol 650mg Tablets",line:"Tablet Line 2",scheduledFor:"2025-10-04T10:30:00+05:30",eta:"2025-10-04T18:00:00+05:30",status:"Queued",qty:"40,000"},{id:"WO-2997",bomId:"BOM-0999",productId:"MED-ORS-200",product:"Oral Rehydration Salts 200ml",line:"Sachet Line",scheduledFor:"2025-10-03T15:00:00+05:30",eta:"2025-10-03T20:00:00+05:30",status:"Overdue",qty:"12,000"}],A=[{id:"BOM-1001",productId:"MED-AMOX-500",product:"Amoxicillin 500mg Tablets",rev:"R3",components:12},{id:"BOM-1010",productId:"MED-PCM-650",product:"Paracetamol 650mg Tablets",rev:"R1",components:8},{id:"BOM-2003",productId:"MED-AZT-250",product:"Azithromycin 250mg",rev:"R2",components:10}],F=[{id:"Q-01",woId:"WO-3002",step:"Granulation",line:"Tablet Line 2",start:"2025-10-04T10:30:00+05:30",state:"Waiting"},{id:"Q-02",woId:"WO-3001",step:"Compression",line:"Tablet Line 1",start:"2025-10-04T11:15:00+05:30",state:"Running"},{id:"Q-03",woId:"WO-2997",step:"Coating",line:"Tablet Line 1",start:"2025-10-03T17:00:00+05:30",state:"Delayed"}],R=[{id:"QC-5001",woId:"WO-3001",gate:"In-Process",status:"Pending",at:"2025-10-04T13:00:00+05:30"},{id:"QC-5002",woId:"WO-3001",gate:"Finished Goods",status:"Scheduled",at:"2025-10-04T17:00:00+05:30"},{id:"QC-4987",woId:"WO-2997",gate:"In-Process",status:"Hold",at:"2025-10-03T19:10:00+05:30"}],Q=[{id:1,type:"wo",text:"WO-3001 moved to Compression",at:"2025-10-04T11:20:00+05:30"},{id:2,type:"qc",text:"QC sample drawn for WO-3001 (IPQC)",at:"2025-10-04T11:45:00+05:30"},{id:3,type:"bom",text:"BOM-1010 revision R1 released",at:"2025-10-03T18:05:00+05:30"},{id:4,type:"alert",text:"Coating delay flagged on WO-2997",at:"2025-10-03T19:30:00+05:30"}],E=new Date().toISOString();function G(){const d=y(),[p,h]=j.useState({open:!1,title:"",message:"",onConfirm:null}),f=j.useMemo(()=>N(E),[]),k=()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),0)},b=(s,u)=>{h({open:!0,title:s,message:u,onConfirm:()=>h({open:!1,title:"",message:"",onConfirm:null})})};return e.jsxs(r.Wrap,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(r.Header,{children:[e.jsxs("div",{className:"titles",children:[e.jsx("h1",{children:"Manufacturing"}),e.jsxs("p",{className:"meta",children:[e.jsx($,{"aria-hidden":"true"})," Snapshot  ",e.jsx("strong",{children:f})]}),e.jsxs("nav",{className:"crumbs","aria-label":"Breadcrumb",children:[e.jsx(a,{to:"/home",children:"Home"}),e.jsx(w,{}),e.jsx(a,{to:"/manufacturing","aria-current":"page",children:"Overview"})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{onClick:k,children:[e.jsx(O,{})," Print Overview"]}),e.jsxs("a",{className:"ghost",href:"/tools/import-export",onClick:s=>{s.preventDefault(),d("/tools/import-export")},children:[e.jsx(C,{})," Export / Import"]}),e.jsx("span",{className:"tip","data-tip":"Disabled in demo",children:e.jsxs("button",{disabled:!0,"aria-disabled":!0,children:[e.jsx(g,{})," New BOM"]})}),e.jsx("span",{className:"tip","data-tip":"Disabled in demo",children:e.jsxs("button",{disabled:!0,"aria-disabled":!0,children:[e.jsx(T,{})," New Work Order"]})})]})]}),e.jsxs(r.Subnav,{"aria-label":"Manufacturing sections",children:[e.jsx(a,{to:"/manufacturing",end:!0,children:"Overview"}),e.jsx(a,{to:"/manufacturing/bom",children:"BOM"}),e.jsx(a,{to:"/manufacturing/work-orders",children:"Work Orders"}),e.jsx(a,{to:"/manufacturing/production",children:"Production"}),e.jsx(a,{to:"/inventory/warehouses",children:"Warehouses"}),e.jsx(a,{to:"/reports/inventory",children:"Inventory Report"}),e.jsx(a,{to:"/products",children:"Products"}),e.jsx(a,{to:"/medicines",children:"Medicines"}),e.jsx(a,{to:"/settings/print-templates",children:"Print Templates"})]}),e.jsxs("div",{id:"search-print-area",children:[e.jsx(r.KpiGrid,{children:B.map(s=>e.jsxs("div",{className:"kpi card",role:"group","aria-label":s.label,children:[e.jsx("div",{className:"value",children:s.value}),e.jsx("div",{className:"label",children:s.label}),e.jsx("div",{className:"sub",children:s.sub})]},s.key))}),e.jsxs(r.Columns,{children:[e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsxs("div",{className:"title",children:[e.jsx(I,{})," Work Orders — Today & Upcoming"]}),e.jsx("div",{className:"tools",children:e.jsx(a,{to:"/manufacturing/work-orders",className:"link",children:"View All"})})]}),e.jsxs(r.Table,{role:"table","aria-label":"Work orders table",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",children:"WO ID"}),e.jsx("div",{className:"th",children:"Product"}),e.jsx("div",{className:"th",children:"Line"}),e.jsx("div",{className:"th",children:"Scheduled"}),e.jsx("div",{className:"th",children:"ETA"}),e.jsx("div",{className:"th",children:"Qty"}),e.jsx("div",{className:"th",children:"Status"}),e.jsx("div",{className:"th right",children:"Actions"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:D.map(s=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td",children:e.jsx(a,{to:`/manufacturing/work-orders/${s.id}`,className:"cellLink",children:s.id})}),e.jsx("div",{className:"td",children:e.jsxs("div",{className:"stack",children:[e.jsx(a,{to:`/products/${s.productId}`,className:"cellLink",children:s.product}),e.jsxs(a,{to:`/manufacturing/bom/${s.bomId}`,className:"muted",children:["BOM: ",s.bomId]})]})}),e.jsx("div",{className:"td",children:s.line}),e.jsxs("div",{className:"td",children:[e.jsx("span",{className:"muted",children:x(s.scheduledFor)}),e.jsx("div",{className:"sub",children:m(s.scheduledFor)})]}),e.jsxs("div",{className:"td",children:[e.jsx("span",{className:"muted",children:x(s.eta)}),e.jsx("div",{className:"sub",children:m(s.eta)})]}),e.jsx("div",{className:"td",children:s.qty}),e.jsx("div",{className:"td",children:e.jsx("span",{className:`pill ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("div",{className:"td right",children:e.jsxs("div",{className:"rowActions",children:[e.jsx(a,{to:`/manufacturing/work-orders/${s.id}`,className:"ghost",children:"Open"}),e.jsx("button",{className:"ghost",onClick:()=>b("Close Work Order","This action is disabled in the demo build."),children:"Close"}),e.jsx("button",{className:"ghost",onClick:()=>b("Cancel Work Order","This action is disabled in the demo build."),children:"Cancel"})]})})]},s.id))})]})]}),e.jsxs("aside",{children:[e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsxs("div",{className:"title",children:[e.jsx(L,{})," Recent Activity"]}),e.jsx("div",{className:"tools",children:e.jsx(a,{to:"/admin/audit-log",className:"link",children:"Audit Log"})})]}),e.jsx(r.Timeline,{children:Q.map(s=>e.jsxs("div",{className:"item",children:[e.jsx("div",{className:`dot ${s.type}`}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"text",children:s.text}),e.jsx("div",{className:"time",children:N(s.at)})]})]},s.id))})]}),e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"sectionHead",children:e.jsxs("div",{className:"title",children:[e.jsx(M,{})," Quick Shortcuts"]})}),e.jsxs(r.ListLinks,{children:[e.jsx(a,{to:"/manufacturing/bom",children:"Open BOM Catalog"}),e.jsx(a,{to:"/manufacturing/work-orders",children:"Browse Work Orders"}),e.jsx(a,{to:"/manufacturing/production",children:"Production Board"}),e.jsx(a,{to:"/inventory/warehouses",children:"Go to Warehouses"}),e.jsx(a,{to:"/reports/production",children:"Production Reports"}),e.jsx(a,{to:"/settings/print-templates",children:"Configure Print Templates"})]})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsxs("div",{className:"title",children:[e.jsx(g,{})," Bill of Materials — Top Items"]}),e.jsx("div",{className:"tools",children:e.jsx(a,{to:"/manufacturing/bom",className:"link",children:"View All"})})]}),e.jsxs(r.Table,{role:"table","aria-label":"Top BOMs table",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",children:"BOM"}),e.jsx("div",{className:"th",children:"Product"}),e.jsx("div",{className:"th",children:"Revision"}),e.jsx("div",{className:"th",children:"Components"}),e.jsx("div",{className:"th right",children:"Open"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:A.map(s=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td",children:e.jsx(a,{to:`/manufacturing/bom/${s.id}`,className:"cellLink",children:s.id})}),e.jsx("div",{className:"td",children:e.jsx(a,{to:`/products/${s.productId}`,className:"cellLink",children:s.product})}),e.jsx("div",{className:"td",children:s.rev}),e.jsx("div",{className:"td",children:s.components}),e.jsx("div",{className:"td right",children:e.jsx(a,{to:`/manufacturing/bom/${s.id}`,className:"ghost",children:"Open"})})]},s.id))})]})]}),e.jsxs(r.Columns,{children:[e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsxs("div",{className:"title",children:[e.jsx(W,{})," Production Queue"]}),e.jsx("div",{className:"tools",children:e.jsx(a,{to:"/manufacturing/production",className:"link",children:"Board"})})]}),e.jsxs(r.Table,{role:"table","aria-label":"Production queue",children:[e.jsx("div",{className:"thead",children:e.jsxs("div",{className:"tr",children:[e.jsx("div",{className:"th",children:"#"}),e.jsx("div",{className:"th",children:"WO"}),e.jsx("div",{className:"th",children:"Step"}),e.jsx("div",{className:"th",children:"Line"}),e.jsx("div",{className:"th",children:"Start"}),e.jsx("div",{className:"th",children:"State"})]})}),e.jsx("div",{className:"tbody",children:F.map((s,u)=>e.jsxs("div",{className:"tr",children:[e.jsx("div",{className:"td",children:String(u+1).padStart(2,"0")}),e.jsx("div",{className:"td",children:e.jsx(a,{to:`/manufacturing/work-orders/${s.woId}`,className:"cellLink",children:s.woId})}),e.jsx("div",{className:"td",children:s.step}),e.jsx("div",{className:"td",children:s.line}),e.jsxs("div",{className:"td",children:[e.jsx("span",{className:"muted",children:x(s.start)}),e.jsx("div",{className:"sub",children:m(s.start)})]}),e.jsx("div",{className:"td",children:e.jsx("span",{className:`pill state-${s.state.toLowerCase()}`,children:s.state})})]},s.id))})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsxs("div",{className:"title",children:[e.jsx(S,{})," Quality Checks"]}),e.jsx("div",{className:"tools",children:e.jsx(a,{to:"/reports/quality",className:"link",children:"QC Reports"})})]}),e.jsxs(r.Table,{role:"table","aria-label":"Quality checks",children:[e.jsx("div",{className:"thead",children:e.jsxs("div",{className:"tr",children:[e.jsx("div",{className:"th",children:"QC"}),e.jsx("div",{className:"th",children:"WO"}),e.jsx("div",{className:"th",children:"Gate"}),e.jsx("div",{className:"th",children:"Status"}),e.jsx("div",{className:"th",children:"When"})]})}),e.jsx("div",{className:"tbody",children:R.map(s=>e.jsxs("div",{className:"tr",children:[e.jsx("div",{className:"td",children:s.id}),e.jsx("div",{className:"td",children:e.jsx(a,{to:`/manufacturing/work-orders/${s.woId}`,className:"cellLink",children:s.woId})}),e.jsx("div",{className:"td",children:s.gate}),e.jsx("div",{className:"td",children:e.jsx("span",{className:`pill qc-${s.status.toLowerCase()}`,children:s.status})}),e.jsxs("div",{className:"td",children:[e.jsx("span",{className:"muted",children:x(s.at)}),e.jsx("div",{className:"sub",children:m(s.at)})]})]},s.id))})]})]})]})]}),p.open&&e.jsxs(r.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:[e.jsx("div",{className:"overlay",onClick:()=>h({open:!1,title:"",message:"",onConfirm:null})}),e.jsxs("div",{className:"panel card",children:[e.jsxs("header",{children:[e.jsx(P,{}),e.jsx("h3",{id:"confirm-title",children:p.title||"Confirm"})]}),e.jsx("div",{className:"body",children:e.jsx("p",{children:p.message||"Are you sure?"})}),e.jsxs("footer",{children:[e.jsx("button",{onClick:()=>h({open:!1,title:"",message:"",onConfirm:null}),className:"ghost",children:"Close"}),e.jsx("button",{onClick:()=>{p.onConfirm&&p.onConfirm()},disabled:!0,"aria-disabled":!0,title:"Disabled in demo",children:"Continue"})]})]})]})]})}export{G as default};
