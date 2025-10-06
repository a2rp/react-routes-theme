import{d as j,u as z,r as x,j as e,N as f}from"./index-CqBbF2bz.js";const d="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",l="var(--card, #111318)",n="var(--border, #23262d)",t="var(--accent, #5aa9ff)",T="var(--accent-soft, rgba(90,169,255,0.15))",M="var(--radius, 16px)",b={Page:j.div`
        padding: 24px 0 64px;
        color: ${d};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${o};
            }
            .current {
                color: ${d};
            }
        }
    `,Header:j.header`
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
            color: ${o};
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
            background: ${l};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${T};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
    `,Banner:j.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${n};
        border-radius: 10px;
        background: color-mix(in oklab, ${t} 10%, transparent);
        color: ${d};
    `,Grid:j.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .row {
            display: grid;
            gap: 16px;
            margin-bottom: 18px;
        }
        .row.two {
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .row.two {
                grid-template-columns: 1fr 1fr;
            }
        }
        .row.between {
            grid-template-columns: 1fr auto;
            align-items: center;
        }

        .block h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .grid.twoCol {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
            .grid.twoCol {
                grid-template-columns: 1fr 1fr;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${o};
            margin-bottom: 6px;
        }
        input,
        select,
        textarea {
            width: 100%;
        }

        .identity {
            display: flex;
            gap: 14px;
            align-items: center;
        }
        .identity .avatar {
            width: 56px;
            height: 56px;
            background: ${l};
            border: 1px solid ${n};
            border-radius: 12px;
            background-image: url("/avatar.svg");
            background-size: cover;
            background-position: center;
        }
        .identity .name {
            font-weight: 700;
        }
        .identity .contact {
            display: flex;
            gap: 6px;
            color: ${o};
            font-size: 12px;
            margin-top: 2px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .chip {
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${d};
            background: color-mix(in oklab, ${t} 8%, transparent);
        }

        .sub {
            padding: 14px;
        }
        .addr {
            display: grid;
            gap: 4px;
        }

        .miniActions {
            display: flex;
            gap: 8px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }
        .xsmall {
            padding: 4px 8px;
            font-weight: 600;
            font-size: 12px;
        }

        .tableWrap {
            border: 1px solid ${n};
            border-radius: 10px;
            overflow: auto;
            background: ${l};
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            min-width: 860px;
        }
        table.items thead th {
            position: sticky;
            top: 0;
            background: ${l};
            border-bottom: 1px solid ${n};
            text-align: left;
            padding: 10px;
            color: ${t};
        }
        table.items tbody td {
            padding: 10px;
            border-bottom: 1px solid ${n};
            vertical-align: top;
        }
        table.items tbody tr:hover {
            background: color-mix(in oklab, ${t} 6%, transparent);
        }
        table.items .num {
            text-align: right;
        }
        table.items .actions {
            white-space: nowrap;
            display: flex;
            gap: 6px;
            justify-content: flex-end;
        }
        table.items .bold {
            font-weight: 700;
        }
        table.items .ghost td {
            border: 0;
        }

        .totals {
            margin-top: 10px;
            border: 1px solid ${n};
            border-radius: 12px;
            padding: 12px;
            background: ${l};
            display: grid;
            gap: 8px;
        }
        .totals .line {
            display: flex;
            justify-content: space-between;
            gap: 16px;
        }
        .totals .grand {
            font-weight: 800;
            font-size: 14px;
        }
        .totals .due {
            color: ${d};
        }
        .totals .sep {
            height: 1px;
            background: ${n};
            margin: 4px 0;
        }

        .mini {
            margin-top: 8px;
            color: ${o};
            font-size: 12px;
        }

        .payinfo {
            margin-top: 14px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            .label {
                color: ${o};
                font-size: 12px;
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
            color: ${o};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${n};
            background: ${l};
        }
        .links a:hover {
            color: ${t};
            border-color: ${t};
        }

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
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
            background: ${t};
            border: 1px solid ${n};
        }
        .timeline .muted {
            color: ${o};
            font-size: 12px;
        }

        /* printable card styles */
        #search-print-area .brand {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        #search-print-area .logo {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: ${l};
            border: 1px solid ${n};
        }
        #search-print-area .bname {
            font-weight: 800;
            font-size: 16px;
        }
        #search-print-area .meta {
            display: grid;
            gap: 6px;
            grid-auto-flow: column;
            justify-content: end;
            align-items: start;
        }
        #search-print-area .label {
            color: ${o};
            font-size: 12px;
        }
        #search-print-area .two {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            margin: 12px 0;
        }
        @media (min-width: 820px) {
            #search-print-area .two {
                grid-template-columns: 1fr 1fr;
            }
        }
        #search-print-area .blk {
            border: 1px solid ${n};
            border-radius: 10px;
            padding: 10px;
            background: ${l};
        }
        #search-print-area .bold {
            font-weight: 700;
        }
        #search-print-area .miniTable {
            width: 100%;
            border-collapse: collapse;
            margin-top: 6px;
        }
        #search-print-area .miniTable th,
        #search-print-area .miniTable td {
            border-bottom: 1px solid ${n};
            padding: 8px;
            font-size: 12px;
        }
        #search-print-area .miniTable th {
            text-align: left;
            color: ${t};
        }
        #search-print-area .miniTable .num {
            text-align: right;
        }
        #search-print-area .totalsMini {
            margin-top: 8px;
            display: grid;
            gap: 6px;
        }
        #search-print-area .totalsMini > div {
            display: flex;
            justify-content: space-between;
        }
        #search-print-area .totalsMini .grand {
            font-weight: 800;
        }
        #search-print-area .totalsMini .due {
        }
        #search-print-area .footnote {
            margin-top: 10px;
            font-size: 12px;
        }
    `,Overlay:j.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:j.div`
        width: min(480px, 92vw);
        border-radius: ${M};
        border: 1px solid ${n};
        background: ${l};
        color: ${d};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${n};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
            color: ${d};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${n};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${l};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${T};
        }
    `},p=r=>String(r).padStart(2,"0"),c=(r,h)=>{const a=r instanceof Date?r:new Date(r),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=`${m[a.getDay()]} ${s[a.getMonth()]} ${p(a.getDate())} ${a.getFullYear()}`;return h?`${g} ${p(a.getHours())}:${p(a.getMinutes())}:${p(a.getSeconds())}hrs`:g},F=r=>`${p(new Date(r).getHours())}:${p(new Date(r).getMinutes())}:${p(new Date(r).getSeconds())}hrs`,k=r=>new Date(r).toISOString().slice(0,10),R=({open:r,title:h,message:a,onClose:m,actionText:s="OK"})=>r?e.jsx(b.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:m,children:e.jsxs(b.Modal,{className:"card",onMouseDown:g=>g.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:h})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:a})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:m,children:s})})]})}):null,B=()=>{const r=z(),h=x.useRef(null),a=x.useMemo(()=>new Date,[]),m=x.useMemo(()=>new Date(a.getTime()+24*60*60*1e3),[a]),[s,g]=x.useState(()=>({number:"AUTO",status:"draft",issueDate:k(a),dueDate:k(m),customerId:"CUST-1001",customerName:"Bluewave Traders",customerEmail:"accounts@bluewave.example.com",customerPhone:"+91 98765 11111",billTo:{line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"},shipTo:{line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India"},reference:"SO-3456",currency:"INR",notes:"Payment due within 7 days. Cheques in favour of Bluewave Traders.",terms:"Late fee may apply after due date.",items:[{id:"MED-AMOX-500",name:"Amoxicillin 500mg",desc:"Capsule · Strip of 10",hsn:"3004",qty:2,uom:"box",rate:450,tax:"12%",amount:900},{id:"MED-PARA-650",name:"Paracetamol 650mg",desc:"Tablet · Strip of 15",hsn:"3004",qty:3,uom:"box",rate:220,tax:"5%",amount:660}],totals:{subTotal:1560,discount:60,tax:118.8,shipping:0,grandTotal:1618.8,amountPaid:0,balanceDue:1618.8},meta:{createdAt:a,updatedAt:a}})),[y,N]=x.useState(""),[D,w]=x.useState(!1);x.useEffect(()=>{let i;return y&&(i=setTimeout(()=>N(""),3500)),()=>i&&clearTimeout(i)},[y]);const S=()=>r("/invoices"),u=()=>w(!0),C=()=>{h.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},P=()=>{const i={...s,exportedAt:c(new Date,!0)},A=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),$=URL.createObjectURL(A),v=document.createElement("a");v.href=$,v.download=`invoice-draft-${s.reference||"ref"}.json`,document.body.appendChild(v),v.click(),v.remove(),URL.revokeObjectURL($),N(`Exported at ${c(new Date,!0)}`)},I=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(f,{to:"/invoices",children:"Invoices"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"New"})]});return e.jsxs(b.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(b.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"New Invoice"}),I,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",c(s.meta.createdAt,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Now: ",c(new Date,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:S,title:"Back to Invoices",children:"Discard"}),e.jsx("button",{className:"btnPrimary",onClick:u,title:"Demo only",children:"Save"}),e.jsx("button",{className:"btnPrimary",onClick:u,title:"Demo only",children:"Save & Print"}),e.jsx("button",{className:"btnGhost",onClick:C,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnGhost",onClick:P,title:"Export current draft JSON",children:"Export"})]})]}),y?e.jsx(b.Banner,{role:"status","aria-live":"polite",children:y}):null,e.jsxs(b.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"row two",children:[e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Invoice Info"}),e.jsxs("div",{className:"grid twoCol",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Invoice No."}),e.jsx("input",{value:s.number,onChange:()=>{},readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{value:s.status,onChange:()=>{},children:[e.jsx("option",{value:"draft",children:"Draft"}),e.jsx("option",{value:"issued",children:"Issued"}),e.jsx("option",{value:"paid",children:"Paid"}),e.jsx("option",{value:"overdue",children:"Overdue"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Issue Date"}),e.jsx("input",{type:"date",value:s.issueDate,onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Due Date"}),e.jsx("input",{type:"date",value:s.dueDate,onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Reference"}),e.jsx("input",{placeholder:"SO / PO / Ref",value:s.reference,onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Currency"}),e.jsxs("select",{value:s.currency,onChange:()=>{},children:[e.jsx("option",{children:"INR"}),e.jsx("option",{children:"USD"}),e.jsx("option",{children:"EUR"})]})]})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Customer"}),e.jsxs("div",{className:"identity",children:[e.jsx("div",{className:"avatar"}),e.jsxs("div",{className:"who",children:[e.jsx("div",{className:"name",children:s.customerName}),e.jsxs("div",{className:"contact",children:[e.jsx("span",{children:s.customerEmail}),e.jsx("span",{children:"•"}),e.jsx("span",{children:s.customerPhone})]}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"CUST-1001"}),e.jsx("span",{className:"chip",children:"priority"}),e.jsx("span",{className:"chip",children:"wholesale"})]})]})]})]})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("div",{className:"block card sub",children:[e.jsx("h3",{children:"Bill To"}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{children:s.billTo.line1}),e.jsx("div",{children:s.billTo.line2}),e.jsxs("div",{children:[s.billTo.city," ",s.billTo.zip]}),e.jsxs("div",{children:[s.billTo.state,", ",s.billTo.country]})]})]}),e.jsxs("div",{className:"block card sub",children:[e.jsx("h3",{children:"Ship To"}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{children:s.shipTo.line1}),e.jsx("div",{children:s.shipTo.line2}),e.jsxs("div",{children:[s.shipTo.city," ",s.shipTo.zip]}),e.jsxs("div",{children:[s.shipTo.state,", ",s.shipTo.country]})]})]})]}),e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"row between",children:[e.jsx("h3",{children:"Line Items"}),e.jsxs("div",{className:"miniActions",children:[e.jsx("button",{className:"btnGhost small",onClick:u,title:"Demo only",children:"Add Item"}),e.jsx("button",{className:"btnGhost small",onClick:u,title:"Demo only",children:"Import CSV"})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"items",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"20%"},children:"Item"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{children:"UOM"}),e.jsx("th",{className:"num",children:"Rate"}),e.jsx("th",{children:"Tax"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[s.items.map(i=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"bold",children:i.name}),e.jsx("div",{className:"muted",children:i.id})]}),e.jsx("td",{children:i.desc}),e.jsx("td",{children:i.hsn}),e.jsx("td",{className:"num",children:i.qty}),e.jsx("td",{children:i.uom}),e.jsx("td",{className:"num",children:i.rate.toFixed(2)}),e.jsx("td",{children:i.tax}),e.jsx("td",{className:"num",children:i.amount.toFixed(2)}),e.jsxs("td",{className:"actions",children:[e.jsx("button",{className:"btnGhost xsmall",onClick:u,title:"Demo only",children:"Edit"}),e.jsx("button",{className:"btnGhost xsmall",onClick:u,title:"Demo only",children:"Remove"})]})]},i.id)),e.jsx("tr",{className:"ghost",children:e.jsx("td",{colSpan:9,children:" "})})]})]})})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Notes & Terms"}),e.jsx("textarea",{rows:6,value:s.notes,onChange:()=>{}}),e.jsxs("div",{className:"mini muted",children:["Terms: ",s.terms]})]}),e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Summary"}),e.jsxs("div",{className:"totals card",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Subtotal"}),e.jsxs("span",{children:[s.totals.subTotal.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Discount"}),e.jsxs("span",{children:["-",s.totals.discount.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Tax"}),e.jsxs("span",{children:[s.totals.tax.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Shipping"}),e.jsxs("span",{children:[s.totals.shipping.toFixed(2)," ",s.currency]})]}),e.jsx("div",{className:"sep"}),e.jsxs("div",{className:"line grand",children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{children:[s.totals.grandTotal.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Amount Paid"}),e.jsxs("span",{children:[s.totals.amountPaid.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{className:"line due",children:[e.jsx("span",{children:"Balance Due"}),e.jsxs("span",{children:[s.totals.balanceDue.toFixed(2)," ",s.currency]})]})]}),e.jsxs("div",{className:"payinfo",children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Preferred Method"}),e.jsx("div",{children:"UPI / Bank Transfer"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Window"}),e.jsx("div",{children:F(a)})]})]})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(f,{to:"/invoices",children:"All Invoices"})}),e.jsx("li",{children:e.jsx(f,{to:"/customers/CUST-1001",children:"Customer"})}),e.jsx("li",{children:e.jsx(f,{to:"/orders/ORD-3456",children:"Related Order"})}),e.jsx("li",{children:e.jsx(f,{to:"/reports/finance",children:"Finance Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Draft created"}),e.jsx("div",{className:"muted",children:c(a,!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Customer added"}),e.jsx("div",{className:"muted",children:c(a)})]})]})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:h,children:[e.jsx("h3",{children:"Print Preview"}),e.jsxs("div",{className:"invHead",children:[e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"logo"}),e.jsxs("div",{children:[e.jsx("div",{className:"bname",children:"Bluewave Traders"}),e.jsx("div",{className:"muted",children:"GSTIN: 22ABCDE1234F1Z5 • PAN: ABCDE1234F"})]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Invoice"}),e.jsx("div",{children:"Auto"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Date"}),e.jsx("div",{children:c(s.meta.createdAt)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Ref"}),e.jsx("div",{children:s.reference})]})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label muted",children:"Bill To"}),e.jsxs("div",{className:"blk",children:[e.jsx("div",{className:"bold",children:s.customerName}),e.jsx("div",{children:s.billTo.line1}),e.jsx("div",{children:s.billTo.line2}),e.jsxs("div",{children:[s.billTo.city," ",s.billTo.zip]}),e.jsxs("div",{children:[s.billTo.state,", ",s.billTo.country]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label muted",children:"Ship To"}),e.jsxs("div",{className:"blk",children:[e.jsx("div",{className:"bold",children:s.customerName}),e.jsx("div",{children:s.shipTo.line1}),e.jsx("div",{children:s.shipTo.line2}),e.jsxs("div",{children:[s.shipTo.city," ",s.shipTo.zip]}),e.jsxs("div",{children:[s.shipTo.state,", ",s.shipTo.country]})]})]})]}),e.jsxs("table",{className:"miniTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Item"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{className:"num",children:"Rate"}),e.jsx("th",{className:"num",children:"Amount"})]})}),e.jsx("tbody",{children:s.items.map(i=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"bold",children:i.name}),e.jsx("div",{className:"muted small",children:i.desc})]}),e.jsx("td",{children:i.hsn}),e.jsx("td",{className:"num",children:i.qty}),e.jsx("td",{className:"num",children:i.rate.toFixed(2)}),e.jsx("td",{className:"num",children:i.amount.toFixed(2)})]},i.id))})]}),e.jsxs("div",{className:"totalsMini",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Subtotal"}),e.jsxs("span",{children:[s.totals.subTotal.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Discount"}),e.jsxs("span",{children:["-",s.totals.discount.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Tax"}),e.jsxs("span",{children:[s.totals.tax.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Shipping"}),e.jsxs("span",{children:[s.totals.shipping.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{className:"grand",children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{children:[s.totals.grandTotal.toFixed(2)," ",s.currency]})]}),e.jsxs("div",{className:"due",children:[e.jsx("span",{children:"Balance Due"}),e.jsxs("span",{children:[s.totals.balanceDue.toFixed(2)," ",s.currency]})]})]}),e.jsxs("div",{className:"footnote muted",children:["Generated: ",c(new Date,!0)]})]})]})]}),e.jsx(R,{open:D,title:"Demo mode",message:"This is a display-only demo. Saving, editing, or importing is disabled.",onClose:()=>w(!1),actionText:"Got it"})]})};export{B as default};
