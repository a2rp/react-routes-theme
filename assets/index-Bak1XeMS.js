import{d as l,u as U,r as b,j as e,N as s}from"./index-LshBDmDj.js";const y="var(--bg, #0d1117)",p="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",h="var(--card, #111318)",n="var(--border, #23262d)",r="var(--accent, #5aa9ff)",g="var(--accent-soft, rgba(90,169,255,0.15))",c={Page:l.div`
        width: 100%;
        padding: 18px 20px 32px 20px;
        color: ${p};
    `,Breadcrumbs:l.div`
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${x};
        margin-bottom: 12px;
        a {
            color: ${x};
        }
        a:hover {
            color: ${r};
        }
        strong {
            color: ${p};
        }
    `,HeadRow:l.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 16px;

        .title h1 {
            font-size: 28px;
            line-height: 1.2;
            margin: 0;
        }
        .title .sub {
            color: ${x};
            margin-top: 4px;
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .actions .ghost {
            background: transparent;
            border: 1px solid ${n};
            padding: 8px 12px;
            border-radius: 8px;
        }
        button,
        .actions .ghost {
            cursor: pointer;
            color: ${p};
            transition: 0.2s ease;
        }
        button {
            background: ${h};
            border: 1px solid ${n};
            padding: 8px 14px;
            border-radius: 8px;
        }
        button:hover,
        .actions .ghost:hover {
            border-color: ${r};
            color: ${r};
            background: color-mix(in oklab, ${r} 10%, transparent);
            box-shadow: 0 0 0 3px ${g};
        }
    `,Toolbar:l.div`
        background: ${h};
        border: 1px solid ${n};
        border-radius: 12px;
        padding: 12px;
        margin-bottom: 14px;

        .tabs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }
        .tabs button {
            border: 1px solid ${n};
            background: transparent;
            color: ${p};
            padding: 6px 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.2s ease;
        }
        .tabs button.active,
        .tabs button:hover {
            border-color: ${r};
            color: ${r};
            background: color-mix(in oklab, ${r} 12%, transparent);
            box-shadow: 0 0 0 3px ${g};
        }

        .filters {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .filters input {
            width: 100%;
            background: ${y};
            color: ${p};
            border: 1px solid ${n};
            border-radius: 8px;
            padding: 10px 12px;
            outline: none;
            transition: 0.2s ease;
        }
        .filters input:focus {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${g};
        }
        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .chip {
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${x};
        }
        .chip:hover {
            border-color: ${r};
            color: ${r};
        }
    `,TableWrap:l.div`
        background: ${h};
        border: 1px solid ${n};
        border-radius: 12px;
        overflow: hidden;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${h};
            border-bottom: 1px solid ${n};
            padding: 12px;
            text-align: left;
            color: ${r};
            z-index: 1;
        }
        tbody td {
            border-top: 1px solid ${n};
            padding: 12px;
            vertical-align: top;
        }
        tbody tr:hover td {
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
        .right {
            text-align: right;
        }
        .bold {
            font-weight: 600;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .muted {
            color: ${x};
        }
        .empty {
            text-align: center;
            padding: 36px 12px;
            color: ${x};
        }
        .empty .links {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin-top: 10px;
        }

        .pill {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 999px;
            border: 1px solid ${n};
            background: color-mix(in oklab, ${r} 12%, transparent);
            color: ${p};
            text-transform: capitalize;
            font-size: 12px;
        }
        .pill.warning {
            background: color-mix(in oklab, ${r} 18%, transparent);
        }
        .pill.error {
            background: color-mix(in oklab, ${r} 24%, transparent);
        }
    `,FooterLinks:l.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 10px;
        margin-top: 14px;

        .group {
            background: ${h};
            border: 1px solid ${n};
            border-radius: 10px;
            padding: 10px;
        }
        .group > span {
            display: inline-block;
            color: ${x};
            margin-bottom: 8px;
            font-weight: 600;
        }
        .group a {
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 6px;
            color: ${p};
            border: 1px solid ${n};
            padding: 4px 8px;
            border-radius: 8px;
        }
        .group a:hover {
            color: ${r};
            border-color: ${r};
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
    `,DrawerBackdrop:l.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 50;
    `,DrawerPanel:l.aside`
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: min(520px, 100%);
        background: ${y};
        border-left: 1px solid ${n};
        z-index: 60;
        display: flex;
        flex-direction: column;

        .drawer-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${n};
            background: ${h};
        }
        .drawer-head h3 {
            margin: 0;
        }
        .drawer-head button {
            border: 1px solid ${n};
            background: transparent;
            color: ${p};
            padding: 6px 10px;
            border-radius: 8px;
            cursor: pointer;
        }
        .drawer-head button:hover {
            border-color: ${r};
            color: ${r};
            background: color-mix(in oklab, ${r} 10%, transparent);
        }

        .drawer-body {
            padding: 14px;
            overflow: auto;
            display: grid;
            gap: 14px;
        }
        section {
            background: ${h};
            border: 1px solid ${n};
            border-radius: 10px;
            padding: 12px;
        }
        section h4 {
            margin: 0 0 8px 0;
        }
        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 6px 12px;
            align-items: baseline;
        }
        .meta {
            display: grid;
            gap: 8px;
        }
        .meta-row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 6px 12px;
        }
        .k {
            color: ${x};
        }
        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .links .chip {
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 999px;
        }
        .links .chip:hover {
            border-color: ${r};
            color: ${r};
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
    `,ModalBackdrop:l.div`
        position: fixed;
        inset: 0;
        z-index: 70;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
    `,ModalCard:l.div`
        background: ${y};
        border: 1px solid ${n};
        border-radius: 12px;
        width: min(520px, 92vw);
        padding: 14px;

        h3 {
            margin: 0 0 8px 0;
        }
        p {
            color: ${x};
            margin: 0 0 12px 0;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
        .actions button {
            border: 1px solid ${n};
            background: ${h};
            color: ${p};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
        }
        .actions button:hover {
            border-color: ${r};
            color: ${r};
            background: color-mix(in oklab, ${r} 10%, transparent);
            box-shadow: 0 0 0 3px ${g};
        }
    `},j=i=>i<10?`0${i}`:`${i}`,M=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],E=i=>new Date(i),w=i=>{const o=E(i);return`${M[o.getDay()]} ${V[o.getMonth()]} ${j(o.getDate())} ${o.getFullYear()}`},A=i=>{const o=E(i);return`${j(o.getHours())}:${j(o.getMinutes())}:${j(o.getSeconds())}hrs`},C=i=>`${w(i)} ${A(i)}`,B=[{id:"EVT-90031",at:"2025-10-04T15:38:20+05:30",actor:{id:"USR-010",name:"Priya Sharma",email:"priya@acme.in"},action:"LOGIN_SUCCESS",entity:{type:"user",id:"USR-010",label:"Priya Sharma"},source:"web",ip:"103.47.18.201",status:"success",meta:{userAgent:"Chrome 129 / Windows 11",mfa:"TOTP",location:"Patna, IN"}},{id:"EVT-90032",at:"2025-10-04T15:41:02+05:30",actor:{id:"USR-010",name:"Priya Sharma",email:"priya@acme.in"},action:"ORDER_UPDATE",entity:{type:"order",id:"ORD-3001",label:"SO-3001"},source:"web",ip:"103.47.18.201",status:"success",meta:{fields:["status: Confirmed → Packed","dispatchAt: 2025-10-05T10:00:00+05:30"],itemsChanged:2}},{id:"EVT-90033",at:"2025-10-04T15:43:10+05:30",actor:{id:"USR-003",name:"Ashish Ranjan",email:"ashish@acme.in"},action:"INVOICE_PRINT",entity:{type:"invoice",id:"INV-2031",label:"INV-2031"},source:"web",ip:"49.36.129.77",status:"success",meta:{copies:1,template:"Standard A4",customerId:"CUST-1001"}},{id:"EVT-90034",at:"2025-10-04T15:48:27+05:30",actor:{id:"USR-002",name:"Rohit Mehta",email:"rohit@acme.in"},action:"USER_ROLE_CHANGE",entity:{type:"user",id:"USR-005",label:"Neha Singh"},source:"admin",ip:"10.0.0.48",status:"warning",meta:{from:["viewer"],to:["manager"],reason:"Team lead handover"}},{id:"EVT-90035",at:"2025-10-04T15:55:42+05:30",actor:{id:"USR-010",name:"Priya Sharma",email:"priya@acme.in"},action:"FAILED_LOGIN",entity:{type:"user",id:"USR-010",label:"Priya Sharma"},source:"web",ip:"103.47.18.201",status:"error",meta:{reason:"Wrong TOTP",attempt:1}},{id:"EVT-90036",at:"2025-10-04T16:01:05+05:30",actor:{id:"USR-002",name:"Rohit Mehta",email:"rohit@acme.in"},action:"LEDGER_EXPORT",entity:{type:"ledger",id:"ACC-11001",label:"Sales Ledger"},source:"web",ip:"10.0.0.48",status:"success",meta:{period:"FY 2024-25 (Q2)",format:"CSV",fileSize:"212KB"}},{id:"EVT-90037",at:"2025-10-04T16:10:21+05:30",actor:{id:"USR-005",name:"Neha Singh",email:"neha@acme.in"},action:"SHIPMENT_LABELS_GENERATE",entity:{type:"shipment",id:"SHP-5521",label:"SHP-5521"},source:"web",ip:"49.36.129.77",status:"success",meta:{carrier:"Delhivery",labels:3,size:"A6"}},{id:"EVT-90038",at:"2025-10-04T16:18:13+05:30",actor:{id:"USR-003",name:"Ashish Ranjan",email:"ashish@acme.in"},action:"GST_RETURN_VIEW",entity:{type:"gst",id:"GSTR-3B-2025-09",label:"GSTR-3B Sep 2025"},source:"web",ip:"49.36.129.77",status:"success",meta:{period:"Sep 2025",section:"Outward Supplies"}}],P=i=>{if(!i)return"#";switch(i.type){case"order":return`/orders/${i.id}`;case"invoice":return`/invoices/${i.id}`;case"user":return`/admin/users/${i.id}`;case"ledger":return`/finance/ledgers/${i.id}`;case"shipment":return`/shipments/${i.id}`;case"gst":return"/reports/gst";default:return`/${i.type}/${i.id}`}},_=[{key:"all",label:"All Events"},{key:"auth",label:"Auth"},{key:"security",label:"Security"},{key:"data",label:"Data"},{key:"system",label:"System"}],z=i=>/login/i.test(i.action)?"auth":/role|permission|token|mfa/i.test(i.action)?"security":/order|invoice|ledger|shipment|gst|export|update|print/i.test(i.action)?"data":"system",F=({open:i,title:o,message:a,onClose:m})=>i?e.jsx(c.ModalBackdrop,{role:"dialog","aria-modal":"true",children:e.jsxs(c.ModalCard,{children:[e.jsx("h3",{children:o}),e.jsx("p",{children:a}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:m,children:"Close"})})]})}):null,G=({open:i,onClose:o,row:a})=>!i||!a?null:e.jsxs(e.Fragment,{children:[e.jsx(c.DrawerBackdrop,{onClick:o}),e.jsxs(c.DrawerPanel,{role:"region","aria-label":"Audit event detail",children:[e.jsxs("div",{className:"drawer-head",children:[e.jsx("h3",{children:"Event Detail"}),e.jsx("button",{onClick:o,"aria-label":"Close",children:"✕"})]}),e.jsxs("div",{className:"drawer-body",children:[e.jsxs("section",{children:[e.jsx("h4",{children:"Event"}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"ID"}),e.jsx("span",{children:a.id}),e.jsx("span",{children:"Action"}),e.jsx("span",{children:a.action}),e.jsx("span",{children:"Status"}),e.jsx("span",{children:e.jsx("span",{className:`pill ${a.status}`,children:a.status})}),e.jsx("span",{children:"Occurred"}),e.jsx("span",{children:C(a.at)}),e.jsx("span",{children:"Source"}),e.jsx("span",{children:a.source}),e.jsx("span",{children:"IP"}),e.jsx("span",{children:a.ip})]})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Actor"}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Name"}),e.jsx("span",{children:e.jsx(s,{to:`/admin/users/${a.actor.id}`,children:a.actor.name})}),e.jsx("span",{children:"Email"}),e.jsx("span",{children:a.actor.email}),e.jsx("span",{children:"User ID"}),e.jsx("span",{children:a.actor.id})]})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Entity"}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Type"}),e.jsx("span",{children:a.entity.type}),e.jsx("span",{children:"ID"}),e.jsx("span",{children:a.entity.id}),e.jsx("span",{children:"Label"}),e.jsx("span",{children:e.jsx(s,{to:P(a.entity),children:a.entity.label})})]})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Metadata"}),e.jsx("div",{className:"meta",children:Object.entries(a.meta||{}).map(([m,u])=>e.jsxs("div",{className:"meta-row",children:[e.jsx("div",{className:"k",children:m}),e.jsx("div",{className:"v",children:Array.isArray(u)?u.join(", "):String(u)})]},m))})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Quick Links"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/admin/users",className:"chip",children:"Users"}),e.jsx(s,{to:"/admin/roles",className:"chip",children:"Roles"}),e.jsx(s,{to:"/admin/permissions",className:"chip",children:"Permissions"}),e.jsx(s,{to:"/admin/system-status",className:"chip",children:"System Status"}),e.jsx(s,{to:"/orders",className:"chip",children:"Orders"}),e.jsx(s,{to:"/invoices",className:"chip",children:"Invoices"}),e.jsx(s,{to:"/shipments",className:"chip",children:"Shipments"}),e.jsx(s,{to:"/finance/ledgers",className:"chip",children:"Ledgers"}),e.jsx(s,{to:"/reports/gst",className:"chip",children:"GST Report"})]})]})]})]})]}),W=()=>{U();const[i,o]=b.useState("all"),[a,m]=b.useState(""),[u,$]=b.useState(null),[D,v]=b.useState(!1);b.useEffect(()=>{document.title="Audit Log • Admin"},[]);const f=b.useMemo(()=>{const t=a.trim().toLowerCase().split(/\s+/).filter(Boolean);return B.filter(d=>{var k,N,S,T,R;if(i!=="all"&&z(d)!==i)return!1;if(!t.length)return!0;const O=[d.id,d.action,d.status,d.ip,d.source,(k=d.actor)==null?void 0:k.name,(N=d.actor)==null?void 0:N.email,(S=d.entity)==null?void 0:S.type,(T=d.entity)==null?void 0:T.id,(R=d.entity)==null?void 0:R.label,JSON.stringify(d.meta||{})].join(" ").toLowerCase();return t.every(I=>O.includes(I))})},[i,a]),L=()=>{document.body.classList.add("print-section-mode"),window.setTimeout(()=>{window.print(),window.setTimeout(()=>document.body.classList.remove("print-section-mode"),200)},10)};return e.jsxs(c.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(c.Breadcrumbs,{children:[e.jsx(s,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(s,{to:"/admin/system-status",children:"Admin"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Audit Log"})]}),e.jsxs(c.HeadRow,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Audit Log"}),e.jsxs("div",{className:"sub",children:["Last updated: ",C("2025-10-04T16:21:00+05:30")]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>v(!0),title:"Demo only",children:"Purge Logs"}),e.jsx("button",{onClick:L,title:"Print current view",children:"Print"}),e.jsx(s,{to:"/admin/system-status",className:"ghost",children:"System Status"}),e.jsx(s,{to:"/admin/users",className:"ghost",children:"Users"})]})]}),e.jsxs(c.Toolbar,{children:[e.jsx("div",{className:"tabs",role:"tablist","aria-label":"Audit categories",children:_.map(t=>e.jsx("button",{role:"tab","aria-selected":i===t.key,className:i===t.key?"active":"",onClick:()=>o(t.key),children:t.label},t.key))}),e.jsxs("div",{className:"filters",children:[e.jsx("input",{type:"text",placeholder:"Search events, users, entities…",value:a,onChange:t=>m(t.target.value),"aria-label":"Search audit logs"}),e.jsxs("div",{className:"chips",children:[e.jsx(s,{to:"/admin/permissions",className:"chip",children:"Permissions"}),e.jsx(s,{to:"/settings/appearance",className:"chip",children:"Appearance"}),e.jsx(s,{to:"/reports",className:"chip",children:"Reports"}),e.jsx(s,{to:"/tools/import-export",className:"chip",children:"Import/Export"})]})]})]}),e.jsx(c.TableWrap,{id:"search-print-area",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Time"}),e.jsx("th",{children:"Action"}),e.jsx("th",{children:"Actor"}),e.jsx("th",{children:"Entity"}),e.jsx("th",{children:"Source"}),e.jsx("th",{children:"IP"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"right",children:"Open"})]})}),e.jsxs("tbody",{children:[f.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"mono",children:w(t.at)}),e.jsx("div",{className:"muted",children:A(t.at)})]}),e.jsxs("td",{children:[e.jsx("div",{className:"bold",children:t.action.replace(/_/g," ")}),e.jsxs("div",{className:"muted",children:["#",t.id]})]}),e.jsxs("td",{children:[e.jsx(s,{to:`/admin/users/${t.actor.id}`,children:t.actor.name}),e.jsx("div",{className:"muted",children:t.actor.email})]}),e.jsxs("td",{children:[e.jsx(s,{to:P(t.entity),children:t.entity.label}),e.jsxs("div",{className:"muted",children:[t.entity.type," • ",t.entity.id]})]}),e.jsx("td",{children:t.source}),e.jsx("td",{className:"mono",children:t.ip}),e.jsx("td",{children:e.jsx("span",{className:`pill ${t.status}`,children:t.status})}),e.jsx("td",{className:"right",children:e.jsx("button",{onClick:()=>$(t),"aria-label":"Open detail",children:"View"})})]},t.id)),!f.length&&e.jsx("tr",{children:e.jsxs("td",{colSpan:8,className:"empty",children:["No events match your filters.",e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/admin/users",children:"Go to Users"}),e.jsx(s,{to:"/orders",children:"Open Orders"}),e.jsx(s,{to:"/invoices",children:"Open Invoices"})]})]})})]})]})}),e.jsxs(c.FooterLinks,{children:[e.jsxs("div",{className:"group",children:[e.jsx("span",{children:"Admin"}),e.jsx(s,{to:"/admin/roles",children:"Roles"}),e.jsx(s,{to:"/admin/permissions",children:"Permissions"}),e.jsx(s,{to:"/admin/feature-flags",children:"Feature Flags"}),e.jsx(s,{to:"/admin/integrations",children:"Integrations"})]}),e.jsxs("div",{className:"group",children:[e.jsx("span",{children:"Billing"}),e.jsx(s,{to:"/invoices",children:"Invoices"}),e.jsx(s,{to:"/receipts",children:"Receipts"}),e.jsx(s,{to:"/invoices/credit-notes",children:"Credit Notes"})]}),e.jsxs("div",{className:"group",children:[e.jsx("span",{children:"Ops"}),e.jsx(s,{to:"/shipments",children:"Shipments"}),e.jsx(s,{to:"/inventory",children:"Inventory"}),e.jsx(s,{to:"/purchase-orders",children:"Purchase Orders"})]}),e.jsxs("div",{className:"group",children:[e.jsx("span",{children:"Reports"}),e.jsx(s,{to:"/reports/sales",children:"Sales"}),e.jsx(s,{to:"/reports/inventory",children:"Inventory"}),e.jsx(s,{to:"/reports/gst",children:"GST"})]})]}),e.jsx(G,{open:!!u,onClose:()=>$(null),row:u}),e.jsx(F,{open:D,title:"Action disabled",message:"This is a demo environment. Destructive actions are turned off.",onClose:()=>v(!1)})]})};export{W as default};
