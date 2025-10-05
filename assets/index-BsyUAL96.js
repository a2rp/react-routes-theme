import{d as h,q as S,u as D,r as g,j as e,N as n}from"./index-B_KzNciT.js";const l="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",x="var(--card, #111318)",a="var(--border, #23262d)",r="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",y="var(--danger, #ef4444)",k="var(--radius, 16px)",j={Page:h.div`
        padding: 24px 0 64px;
        color: ${l};
    `,Header:h.header`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .idwrap {
            display: flex;
            gap: 16px;
            align-items: center;
        }
        .avatar {
            width: 64px;
            height: 64px;
            border-radius: ${k};
            background: ${x};
            background-size: cover;
            background-position: center;
            border: 1px solid ${a};
            box-shadow: var(--shadow);
        }
        .title h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            color: ${p};
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .breadcrumbs {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${p};
        }
        .breadcrumbs .current {
            color: ${l};
        }

        .badge {
            font-size: 12px;
            border: 1px solid ${a};
            padding: 2px 8px;
            border-radius: 999px;
            color: ${l};
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
        .badge.active {
        }
        .badge.inactive {
            opacity: 0.7;
        }
        .badge.prospect {
            opacity: 0.9;
        }

        .sep {
            color: ${p};
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
            border: 1px solid ${a};
            background: ${x};
            color: ${l};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${$};
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
            border-color: ${r};
            color: ${r};
        }
    `,TopGrid:h.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 2fr 1fr;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .kpi {
            grid-column: span 3;
            @media (max-width: 1100px) {
                grid-column: span 1;
            }
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            padding: 14px 16px;
        }
        .kpi .item {
            border: 1px solid ${a};
            border-radius: 12px;
            padding: 12px;
            background: ${x};
            box-shadow: var(--shadow);
            display: grid;
            gap: 6px;
        }
        .kpi .label {
            color: ${p};
            font-size: 12px;
        }
        .kpi .value {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.2px;
        }

        .identity,
        .tax {
            padding: 14px 16px;
        }
        .identity .grid,
        .tax .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        @media (max-width: 720px) {
            .identity .grid,
            .tax .grid {
                grid-template-columns: 1fr;
            }
        }

        .k {
            color: ${p};
            font-size: 12px;
        }
        .v a {
            color: ${l};
            border-bottom: 1px dotted ${a};
        }
        .chips {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${a};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 8%, transparent);
            color: ${l};
        }
        .chip.alt {
            background: color-mix(in oklab, ${r} 14%, transparent);
        }
    `,MainGrid:h.div`
        margin-top: 16px;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .section {
            padding: 14px 16px;
        }
        .section h3 {
            margin-bottom: 10px;
        }
        .section .two {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        @media (max-width: 900px) {
            .section .two {
                grid-template-columns: 1fr;
            }
        }

        .sub {
            padding: 12px;
        }
        .addr {
            color: ${l};
        }
        .addr div {
            margin-bottom: 4px;
        }

        .contactList {
            display: grid;
            gap: 10px;
        }
        .contact {
            display: grid;
            grid-template-columns: 120px 1fr 1.4fr 1fr;
            gap: 10px;
            padding: 10px;
            border: 1px solid ${a};
            border-radius: 10px;
            background: ${x};
        }
        @media (max-width: 900px) {
            .contact {
                grid-template-columns: 1fr;
            }
        }
        .contact .role {
            color: ${p};
        }
        .contact .name {
            font-weight: 600;
        }

        .note {
            margin-top: 8px;
            color: ${p};
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
            color: ${p};
        }

        .headerRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .mini {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${a};
            background: ${x};
        }
        .mini:hover {
            border-color: ${r};
            color: ${r};
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${a};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            background: ${x};
            color: ${r};
            position: sticky;
            top: 0;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${a};
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
        td.right {
            text-align: right;
        }
        .link {
            color: ${l};
            border-bottom: 1px dotted ${a};
        }
        .badge.pill {
            font-size: 12px;
            border: 1px solid ${a};
            padding: 2px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 8%, transparent);
        }

        .files {
            display: grid;
            gap: 10px;
        }
        .file {
            display: grid;
            grid-template-columns: 36px 1fr;
            gap: 10px;
            align-items: center;
            padding: 8px;
            border: 1px solid ${a};
            border-radius: 10px;
            background: ${x};
        }
        .file .icon {
            width: 28px;
            height: 28px;
            border-radius: 6px;
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
        .file .icon.pdf {
        }
        .file .icon.docx {
        }
        .file .name {
            font-weight: 600;
        }

        .stretch {
            grid-column: 1 / span 1;
        }
        @media (max-width: 1100px) {
            .stretch {
                grid-column: auto;
            }
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${l};
            border: 1px solid ${a};
            border-radius: 8px;
            padding: 8px;
            background: ${x};
        }
        .links a:hover {
            border-color: ${r};
            color: ${r};
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${r};
            border: 1px solid ${a};
        }
        .timeline .title {
            font-weight: 600;
        }
        .timeline .time {
            color: ${p};
            font-size: 12px;
        }
        .empty {
            color: ${p};
            padding: 8px 0;
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
        border-radius: ${k};
        border: 1px solid ${a};
        background: ${x};
        color: ${l};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${a};
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
            border-top: 1px solid ${a};
        }

        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${a};
            background: ${x};
            color: ${l};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${$};
        }
    `},m=(t,o)=>{const d=t instanceof Date?t:new Date(t),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=b=>String(b).padStart(2,"0"),v=`${c[d.getDay()]} ${u[d.getMonth()]} ${s(d.getDate())} ${d.getFullYear()}`;return o?`${v} ${s(d.getHours())}:${s(d.getMinutes())}:${s(d.getSeconds())}hrs`:v},T=t=>{const o=t instanceof Date?t:new Date(t),d=c=>String(c).padStart(2,"0");return`${d(o.getHours())}:${d(o.getMinutes())}:${d(o.getSeconds())}hrs`},O=({open:t,title:o,message:d,onClose:c})=>t?e.jsx(j.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:c,children:e.jsxs(j.Modal,{className:"card",onMouseDown:u=>u.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:o})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:d})}),e.jsx("footer",{children:e.jsx("button",{className:"btnGhost",onClick:c,children:"Close"})})]})}):null,C=()=>{const{customerId:t}=S(),o=D(),d=g.useRef(null),c=g.useMemo(()=>new Date,[]),s=g.useMemo(()=>({"CUST-1001":{id:"CUST-1001",firstName:"Aarav",lastName:"Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210",altPhone:"",gender:"male",dob:"1996-10-04",company:"Bluewave Traders",website:"https://bluewave.example.com",status:"active",createdAt:"2024-12-11T10:45:18+05:30",updatedAt:"2025-09-28T17:21:10+05:30",tags:["priority","wholesale","north"],groups:["B2B","Early Adopter"],billing:{line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"},shipping:{line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India"},gstin:"22ABCDE1234F1Z5",pan:"ABCDE1234F",kpis:{totalOrders:18,ltv:"₹ 8,42,300",outstanding:"₹ 47,500",lastOrderAt:"2025-09-19T15:38:20+05:30"},recentOrders:[{id:"ORD-3456",date:"2025-09-19T15:38:20+05:30",amount:"₹ 62,450",status:"Packed"},{id:"ORD-3402",date:"2025-08-23T11:06:02+05:30",amount:"₹ 41,320",status:"Delivered"},{id:"ORD-3391",date:"2025-08-11T18:12:45+05:30",amount:"₹ 59,800",status:"Invoiced"}],recentInvoices:[{id:"INV-2031",date:"2025-09-19T16:02:15+05:30",amount:"₹ 62,450",status:"Unpaid"},{id:"INV-1993",date:"2025-08-23T12:01:05+05:30",amount:"₹ 41,320",status:"Paid"},{id:"INV-1982",date:"2025-08-11T19:10:02+05:30",amount:"₹ 59,800",status:"Paid"}],activity:[{id:"a1",title:"Invoice #INV-2031 emailed",ts:"2025-09-19T16:05:10+05:30"},{id:"a2",title:"Order #ORD-3456 packed",ts:"2025-09-19T15:50:00+05:30"},{id:"a3",title:"Profile fields updated",ts:"2025-09-01T10:00:00+05:30"}],contacts:[{type:"Owner",name:"Aarav Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210"},{type:"Accounts",name:"Divya Mehta",email:"accounts@bluewave.example.com",phone:"+91 99300 11223"}],attachments:[{name:"GST-Certificate.pdf",size:"188 KB",url:"#",type:"pdf"},{name:"PO-Template.docx",size:"84 KB",url:"#",type:"docx"}],preferences:{channel:"Email",bestTime:"2025-10-04T15:38:20+05:30",notes:"Responds quickly before 5 PM."}}}),[])[t]||{id:t||"CUST-XXXX",firstName:"Unknown",lastName:"Customer",email:"unknown@example.com",phone:"",status:"prospect",createdAt:c.toISOString(),updatedAt:c.toISOString(),tags:[],groups:[],billing:{line1:"",line2:"",city:"",state:"",zip:"",country:""},shipping:{line1:"",line2:"",city:"",state:"",zip:"",country:""},kpis:{totalOrders:0,ltv:"₹ 0",outstanding:"₹ 0",lastOrderAt:c.toISOString()},recentOrders:[],recentInvoices:[],activity:[],contacts:[],attachments:[],preferences:{channel:"Email",bestTime:c.toISOString(),notes:""}},[v,b]=g.useState(!1),N=`${s.firstName||""} ${s.lastName||""}`.trim(),w=()=>{d.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return g.useEffect(()=>{},[]),e.jsxs(j.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(j.Header,{className:"card",children:[e.jsxs("div",{className:"idwrap",children:[e.jsx("div",{className:"avatar",style:{backgroundImage:"url(/avatar.svg)"}}),e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:N||s.id}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:`badge ${s.status}`,children:s.status}),e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{children:["ID: ",s.id]}),e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{children:["Created: ",m(s.createdAt)]}),e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{children:["Updated: ",m(s.updatedAt,!0)]})]}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(n,{to:"/customers",children:"Customers"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.id})]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>o("/customers"),title:"Back to list",children:"Back"}),e.jsx("button",{className:"btnPrimary",onClick:()=>o(`/customers/${s.id}/edit`),title:"Edit",children:"Edit"}),e.jsx("button",{className:"btnDanger",onClick:()=>b(!0),title:"Delete (demo)",children:"Delete"}),e.jsx("button",{className:"btnGhost",onClick:w,title:"Print summary",children:"Print"})]})]}),e.jsxs(j.TopGrid,{children:[e.jsxs("div",{className:"card kpi",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Total Orders"}),e.jsx("div",{className:"value",children:s.kpis.totalOrders})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Lifetime Value"}),e.jsx("div",{className:"value",children:s.kpis.ltv})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Outstanding"}),e.jsx("div",{className:"value",children:s.kpis.outstanding})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"label",children:"Last Order"}),e.jsx("div",{className:"value",children:m(s.kpis.lastOrderAt,!0)})]})]}),e.jsxs("div",{className:"card identity",children:[e.jsx("h3",{children:"Identity"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Name"}),e.jsx("div",{className:"v",children:N})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Email"}),e.jsx("div",{className:"v",children:s.email})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Phone"}),e.jsx("div",{className:"v",children:s.phone||"-"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Company"}),e.jsx("div",{className:"v",children:s.company||"-"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Website"}),e.jsx("div",{className:"v",children:s.website?e.jsx("a",{href:s.website,target:"_blank",rel:"noreferrer",children:s.website}):"-"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"DOB"}),e.jsx("div",{className:"v",children:s.dob?m(s.dob):"-"})]})]}),e.jsxs("div",{className:"chips",children:[(s.tags||[]).map(i=>e.jsx("span",{className:"chip",children:i},i)),(s.groups||[]).map(i=>e.jsx("span",{className:"chip alt",children:i},i))]})]}),e.jsxs("div",{className:"card tax",children:[e.jsx("h3",{children:"Tax & Registration"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"GSTIN"}),e.jsx("div",{className:"v",children:s.gstin||"-"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"PAN"}),e.jsx("div",{className:"v",children:s.pan||"-"})]})]})]})]}),e.jsxs(j.MainGrid,{children:[e.jsxs("section",{className:"card section",children:[e.jsx("h3",{children:"Addresses"}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"Billing"}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{children:s.billing.line1}),e.jsx("div",{children:s.billing.line2}),e.jsx("div",{children:[s.billing.city,s.billing.zip].filter(Boolean).join(" ")}),e.jsx("div",{children:[s.billing.state,s.billing.country].filter(Boolean).join(", ")})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"Shipping"}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{children:s.shipping.line1}),e.jsx("div",{children:s.shipping.line2}),e.jsx("div",{children:[s.shipping.city,s.shipping.zip].filter(Boolean).join(" ")}),e.jsx("div",{children:[s.shipping.state,s.shipping.country].filter(Boolean).join(", ")})]})]})]})]}),e.jsxs("section",{className:"card section",children:[e.jsx("h3",{children:"Contacts"}),e.jsxs("div",{className:"contactList",children:[s.contacts.length===0?e.jsx("div",{className:"empty",children:"No additional contacts."}):null,s.contacts.map((i,f)=>e.jsxs("div",{className:"contact",children:[e.jsx("div",{className:"role",children:i.type}),e.jsx("div",{className:"name",children:i.name}),e.jsx("div",{className:"email",children:i.email}),e.jsx("div",{className:"phone",children:i.phone||"-"})]},f))]})]}),e.jsxs("section",{className:"card section",children:[e.jsx("h3",{children:"Preferences"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Channel"}),e.jsx("div",{className:"v",children:s.preferences.channel})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Best time"}),e.jsxs("div",{className:"v",children:[m(s.preferences.bestTime,!0)," (local)"]})]})]}),e.jsx("div",{className:"note",children:s.preferences.notes})]}),e.jsxs("section",{className:"card section",id:"search-print-area",ref:d,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"summary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsxs("span",{className:"v",children:[N," (",s.id,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:s.status})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:s.email})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:s.phone||"-"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Address"}),e.jsx("span",{className:"v",children:[s.billing.line1,s.billing.line2,s.billing.city,s.billing.zip,s.billing.state,s.billing.country].filter(Boolean).join(", ")})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:m(s.createdAt,!0)})]})]})]}),e.jsxs("section",{className:"card section stretch",children:[e.jsxs("div",{className:"headerRow",children:[e.jsx("h3",{children:"Recent Orders"}),e.jsx(n,{to:"/orders",className:"btnGhost mini",children:"View all"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Order"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:s.recentOrders.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("div",{className:"empty",children:"No orders yet."})})}):s.recentOrders.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n,{to:`/orders/${i.id}`,children:i.id})}),e.jsx("td",{children:m(i.date,!0)}),e.jsx("td",{children:i.amount}),e.jsx("td",{children:e.jsx("span",{className:"badge pill",children:i.status})}),e.jsx("td",{className:"right",children:e.jsx(n,{to:`/orders/${i.id}/print`,className:"link",children:"Print"})})]},i.id))})]})})]}),e.jsxs("section",{className:"card section stretch",children:[e.jsxs("div",{className:"headerRow",children:[e.jsx("h3",{children:"Recent Invoices"}),e.jsx(n,{to:"/invoices",className:"btnGhost mini",children:"View all"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Invoice"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:s.recentInvoices.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("div",{className:"empty",children:"No invoices yet."})})}):s.recentInvoices.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n,{to:`/invoices/${i.id}`,children:i.id})}),e.jsx("td",{children:m(i.date,!0)}),e.jsx("td",{children:i.amount}),e.jsx("td",{children:e.jsx("span",{className:"badge pill",children:i.status})}),e.jsx("td",{className:"right",children:e.jsx(n,{to:`/invoices/${i.id}/print`,className:"link",children:"Print"})})]},i.id))})]})})]}),e.jsxs("section",{className:"card section",children:[e.jsx("h3",{children:"Attachments"}),e.jsxs("div",{className:"files",children:[s.attachments.length===0?e.jsx("div",{className:"empty",children:"No files attached."}):null,s.attachments.map((i,f)=>e.jsxs("a",{href:i.url,download:!0,className:"file",children:[e.jsx("div",{className:`icon ${i.type}`}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"name",children:i.name}),e.jsx("div",{className:"muted",children:i.size})]})]},f))]})]}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[s.activity.length===0?e.jsx("li",{className:"muted",children:"No activity yet."}):null,s.activity.map(i=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("div",{className:"title",children:i.title}),e.jsx("div",{className:"time",children:m(i.ts,!0)})]})]},i.id))]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(n,{to:`/customers/${s.id}/edit`,children:"Edit"})}),e.jsx("li",{children:e.jsx(n,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(n,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(n,{to:"/shipments",children:"Shipments"})}),e.jsx("li",{children:e.jsx(n,{to:"/reports/customers",children:"Customer Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Contact Window"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Best time"}),e.jsx("div",{className:"v",children:T(s.preferences.bestTime)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Preferred"}),e.jsx("div",{className:"v",children:s.preferences.channel})]})]})]})]})]}),e.jsx(O,{open:v,title:"Action unavailable",message:"This environment is a display-only demo. Destructive actions are disabled.",onClose:()=>b(!1)})]})};export{C as default};
