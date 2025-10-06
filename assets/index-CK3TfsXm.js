import{d,q as P,u as A,r as b,j as e,N as u}from"./index-CqBbF2bz.js";const h="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",g="var(--card, #111318)",r="var(--border, #23262d)",t="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",C="var(--radius, 16px)",I="var(--danger, #ef4444)",B="var(--warn, #f59e0b)",l={Page:d.div`
        padding: 24px 0 64px;
        color: ${h};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${o};
            }
            .current {
                color: ${h};
            }
        }
    `,Header:d.header`
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
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            color: ${o};
            font-size: 12px;
        }
        .sep {
            opacity: 0.6;
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
            border: 1px solid ${r};
            background: ${g};
            color: ${h};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${$};
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Banner:d.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${r};
        border-radius: 10px;
        background: color-mix(in oklab, ${t} 10%, transparent);
        color: ${h};
    `,Grid:d.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main {
            display: grid;
            gap: 16px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .links {
            list-style: none;
            display: grid;
            gap: 8px;
            padding: 0;
            margin: 0;
        }
        .links a {
            color: ${o};
            padding: 6px 8px;
            border-radius: 10px;
            border: 1px solid ${r};
            background: ${g};
        }
        .links a:hover {
            color: ${t};
            border-color: ${t};
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .files li {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }
        .cust .name {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .addr {
            margin-top: 6px;
            color: ${o};
        }
    `,PrintHeader:d.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        margin-bottom: 14px;
        .brand {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        .logo {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1px solid ${r};
            display: grid;
            place-items: center;
            font-weight: 800;
            background: ${g};
        }
        .bmeta h3 {
            font-size: 16px;
        }
        .muted {
            color: ${o};
            font-size: 12px;
        }
        .invBlock {
            text-align: right;
        }
        .num {
            color: ${o};
            font-size: 12px;
        }
        .big {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.6px;
        }
        .kv {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            align-items: center;
            font-size: 12px;
            color: ${o};
        }
    `,Addresses:d.div`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        margin-bottom: 12px;
        @media (min-width: 950px) {
            grid-template-columns: repeat(4, 1fr);
        }

        h4 {
            font-size: 13px;
            margin-bottom: 6px;
        }
        .name {
            font-weight: 700;
        }
        .muted {
            color: ${o};
            font-size: 12px;
        }
        .dates .kv {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            gap: 12px;
        }
    `,TableWrap:d.div`
        overflow: auto;
        border: 1px solid ${r};
        border-radius: 12px;
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            background: ${g};
            color: ${t};
            font-weight: 600;
            padding: 10px;
            border-bottom: 1px solid ${r};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${r};
        }
        .muted {
            color: ${o};
            font-size: 12px;
        }
        .itname {
            font-weight: 600;
        }
        .right {
            text-align: right;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${t} 6%, transparent);
        }
    `,Summary:d.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        margin-top: 12px;
        @media (min-width: 950px) {
            grid-template-columns: 2fr 1fr;
            align-items: start;
        }

        .left .tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${r};
            background: color-mix(in oklab, ${t} 8%, transparent);
            margin: 0 8px 8px 0;
        }
        .left .note,
        .left .terms {
            margin-top: 10px;
        }
        .left h5 {
            font-size: 13px;
            margin-bottom: 6px;
        }

        .right {
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 12px;
            background: color-mix(in oklab, ${g} 96%, transparent);
        }
        .kv {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            padding: 6px 0;
        }
        .kv.tiny {
            font-size: 12px;
            color: ${o};
            padding: 2px 0;
        }
        .taxsplit {
            margin-top: 2px;
        }
        .divider {
            height: 1px;
            background: ${r};
            margin: 6px 0;
        }
        .total {
            font-size: 16px;
            font-weight: 800;
        }
        .due strong {
            color: ${t};
        }
    `,SectionHeader:d.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        .hint {
            color: ${o};
            font-size: 12px;
        }
    `,Timeline:d.ul`
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
        li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${t};
            border: 1px solid ${r};
        }
        .muted {
            color: ${o};
            font-size: 12px;
        }
        .empty {
            padding: 8px 0 2px;
        }
    `,Pill:d.span`
        --tone: ${t};
        ${({tone:n})=>n==="success"?"--tone:#22c55e":""};
        ${({tone:n})=>n==="danger"?`--tone:${I}`:""};
        ${({tone:n})=>n==="warning"?`--tone:${B}`:""};
        ${({tone:n})=>n==="muted"?"--tone:#94a3b8":""};
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 8px;
        border-radius: 999px;
        border: 1px solid ${r};
        background: color-mix(in oklab, var(--tone) 14%, transparent);
        color: ${h};
        font-size: 12px;
        font-weight: 700;
    `,Overlay:d.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:d.div`
        width: min(520px, 92vw);
        border-radius: ${C};
        border: 1px solid ${r};
        background: ${g};
        color: ${h};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${r};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${h};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${r};
        }

        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${g};
            color: ${h};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${$};
        }
        .sheet {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 6px;
        }
        .linklike {
            background: transparent;
            border: 0;
            color: ${h};
            text-align: left;
            cursor: pointer;
            padding: 6px 0;
        }
        .linklike:hover {
            color: ${t};
        }
    `},p=(n,x)=>{const a=n instanceof Date?n:new Date(n),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=f=>String(f).padStart(2,"0"),v=`${s[a.getDay()]} ${j[a.getMonth()]} ${m(a.getDate())} ${a.getFullYear()}`;return x?`${v} ${m(a.getHours())}:${m(a.getMinutes())}:${m(a.getSeconds())}hrs`:v},w=n=>{const x=n instanceof Date?n:new Date(n),a=s=>String(s).padStart(2,"0");return`${a(x.getHours())}:${a(x.getMinutes())}:${a(x.getSeconds())}hrs`},D=({open:n,title:x,onClose:a,children:s})=>n?e.jsx(l.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:a,children:e.jsxs(l.Modal,{className:"card",onMouseDown:j=>j.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:x})}),e.jsx("div",{className:"body",children:s}),e.jsx("footer",{children:e.jsx("button",{className:"btnGhost",onClick:a,children:"Close"})})]})}):null,M=()=>{const{invoiceId:n}=P(),x=A(),a=b.useRef(null),s=b.useMemo(()=>{const i=n||"INV-2031",c=new Date("2025-10-04T10:35:20+05:30");return{id:i,number:i,poNumber:"PO-77821",status:"Unpaid",currency:"INR",issuedAt:c,dueAt:new Date("2025-10-14T23:59:59+05:30"),createdAt:c,updatedAt:new Date("2025-10-04T15:38:20+05:30"),seller:{name:"Bluewave Traders Pvt. Ltd.",gstin:"22ABCDE1234F1Z5",pan:"ABCDE1234F",email:"billing@bluewave.example.com",phone:"+91 98765 10001",address:["2nd Floor, DLF Cyber City","Phase III, Gurugram, HR 122002","India"],website:"https://bluewave.example.com"},customer:{code:"CUST-1001",name:"Aarav Sharma",company:"Aarav Retail Mart",email:"aarav.sharma@example.com",phone:"+91 98765 43210",gstin:"07AAACB2233C1Z9",address:["221B Baker Street, Khan Market","New Delhi 110003, DL","India"],shipping:["Plot 14, Industrial Area, Phase 2","Gurugram 122002, HR","India"]},tags:["priority","net-10","retail"],items:[{id:"MED-AMOX-500",name:"Amoxicillin 500mg Capsules",hsn:"3004",qty:2,unit:"Box (10x10)",rate:1250,tax:"12%",amount:2500},{id:"MED-PARA-650",name:"Paracetamol 650mg Tablets",hsn:"3004",qty:3,unit:"Box (10x15)",rate:780,tax:"12%",amount:2340},{id:"MED-VITD3",name:"Vitamin D3 60k IU Softgels",hsn:"3004",qty:1,unit:"Pack (8)",rate:540,tax:"5%",amount:540}],summary:{notes:"Thank you for your business. For NEFT, use virtual account shared on first invoice.",terms:"Payment due within 10 days of issue. Late fee 1.5%/month post due date. Goods once sold are not returnable unless damaged on delivery.",subtotal:5380,discount:180,shipping:120,tax:534,grandTotal:5854,paid:0,due:5854,taxBreakup:[{label:"CGST (6%)",amount:267},{label:"SGST (6%)",amount:267}]},payments:[],activity:[{t:"Created invoice",at:c},{t:"Viewed by customer",at:new Date("2025-10-04T12:02:11+05:30")},{t:"Reminder scheduled",at:new Date("2025-10-07T09:00:00+05:30")}],attachments:[{name:`${i}.pdf`,size:"122 KB",href:"/sample/invoice.pdf"},{name:"PO-77821.pdf",size:"88 KB",href:"/sample/po.pdf"}]}},[n]),[j,m]=b.useState(""),[v,f]=b.useState(!1),[S,y]=b.useState(!1),N=async()=>{const i=window.location.href;try{await navigator.clipboard.writeText(i),m(`Link copied • ${p(new Date,!0)}`),setTimeout(()=>m(""),3e3)}catch{m(`Copy failed • ${p(new Date,!0)}`),setTimeout(()=>m(""),3e3)}},k=()=>{a.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},T=i=>{switch(i){case"Paid":return"success";case"Overdue":return"danger";case"Partially Paid":return"warning";case"Draft":return"muted";default:return"info"}};return e.jsxs(l.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(l.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("h1",{children:["Invoice ",s.number]}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(u,{to:"/invoices",children:"Invoices"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.number})]}),e.jsxs("div",{className:"meta",children:[e.jsx(l.Pill,{tone:T(s.status),children:s.status}),e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{children:["Issued: ",p(s.issuedAt,!0)]}),e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{children:["Due: ",p(s.dueAt)]}),e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{children:["Updated: ",p(s.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>x("/invoices"),title:"Back to list",children:"Back"}),e.jsx(u,{to:`/invoices/${s.id}/edit`,className:"btnGhost",title:"Edit invoice",children:"Edit"}),e.jsx("button",{className:"btnPrimary",onClick:k,title:"Print",children:"Print"}),e.jsx("a",{className:"btnGhost",href:"/sample/invoice.pdf",download:!0,title:"Download PDF",children:"Download"}),e.jsx("button",{className:"btnGhost",onClick:N,title:"Copy share link",children:"Share"}),e.jsx("button",{className:"btnPrimary",onClick:()=>f(!0),title:"Send invoice",children:"Send"}),e.jsx("button",{className:"btnGhost",onClick:()=>y(!0),title:"More",children:"More"})]})]}),j?e.jsx(l.Banner,{role:"status","aria-live":"polite",children:j}):null,e.jsxs(l.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card",id:"search-print-area",ref:a,children:[e.jsxs(l.PrintHeader,{children:[e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"logo","aria-hidden":"true",children:"BW"}),e.jsxs("div",{className:"bmeta",children:[e.jsx("h3",{children:s.seller.name}),e.jsx("div",{className:"muted",children:s.seller.website})]})]}),e.jsxs("div",{className:"invBlock",children:[e.jsx("div",{className:"num",children:"Invoice"}),e.jsx("div",{className:"big",children:s.number}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"PO #"}),e.jsx("strong",{children:s.poNumber})]})]})]}),e.jsxs(l.Addresses,{children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Bill From"}),e.jsx("div",{className:"name",children:s.seller.name}),s.seller.address.map((i,c)=>e.jsx("div",{children:i},c)),e.jsxs("div",{className:"muted",children:["GSTIN: ",s.seller.gstin," • PAN: ",s.seller.pan]}),e.jsxs("div",{className:"muted",children:[s.seller.email," • ",s.seller.phone]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Bill To"}),e.jsx("div",{className:"name",children:s.customer.company}),e.jsxs("div",{className:"muted",children:[s.customer.name," • ",s.customer.email]}),s.customer.address.map((i,c)=>e.jsx("div",{children:i},c)),e.jsxs("div",{className:"muted",children:["GSTIN: ",s.customer.gstin]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Ship To"}),s.customer.shipping.map((i,c)=>e.jsx("div",{children:i},c)),e.jsx("div",{className:"muted",children:s.customer.phone})]}),e.jsxs("div",{className:"dates",children:[e.jsx("h4",{children:"Dates"}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Issued"}),e.jsx("strong",{children:p(s.issuedAt)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Due"}),e.jsx("strong",{children:p(s.dueAt)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Time"}),e.jsx("strong",{children:w(s.issuedAt)})]})]})]}),e.jsx(l.TableWrap,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"38%"},children:"Item"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Unit"}),e.jsxs("th",{children:["Rate (",s.currency,")"]}),e.jsx("th",{children:"Tax"}),e.jsxs("th",{style:{textAlign:"right"},children:["Amount (",s.currency,")"]})]})}),e.jsx("tbody",{children:s.items.map(i=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"itname",children:i.name}),e.jsx("div",{className:"muted",children:i.id})]}),e.jsx("td",{children:i.hsn}),e.jsx("td",{children:i.qty}),e.jsx("td",{children:i.unit}),e.jsx("td",{children:i.rate.toFixed(2)}),e.jsx("td",{children:i.tax}),e.jsx("td",{className:"right",children:i.amount.toFixed(2)})]},i.id))})]})}),e.jsxs(l.Summary,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"badges",children:s.tags.map(i=>e.jsx("span",{className:"tag",children:i},i))}),e.jsxs("div",{className:"note",children:[e.jsx("h5",{children:"Notes"}),e.jsx("p",{children:s.summary.notes})]}),e.jsxs("div",{className:"terms",children:[e.jsx("h5",{children:"Terms"}),e.jsx("p",{children:s.summary.terms})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Subtotal"}),e.jsx("strong",{children:s.summary.subtotal.toFixed(2)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Discount"}),e.jsxs("strong",{children:["-",s.summary.discount.toFixed(2)]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Shipping"}),e.jsx("strong",{children:s.summary.shipping.toFixed(2)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Tax"}),e.jsx("strong",{children:s.summary.tax.toFixed(2)})]}),e.jsx("div",{className:"taxsplit",children:s.summary.taxBreakup.map(i=>e.jsxs("div",{className:"kv tiny",children:[e.jsx("span",{children:i.label}),e.jsx("strong",{children:i.amount.toFixed(2)})]},i.label))}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"kv total",children:[e.jsx("span",{children:"Total"}),e.jsx("strong",{children:s.summary.grandTotal.toFixed(2)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Paid"}),e.jsx("strong",{children:s.summary.paid.toFixed(2)})]}),e.jsxs("div",{className:"kv due",children:[e.jsx("span",{children:"Due"}),e.jsx("strong",{children:s.summary.due.toFixed(2)})]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs(l.SectionHeader,{children:[e.jsx("h3",{children:"Timeline"}),e.jsxs("div",{className:"hint",children:["All times local • ",p(new Date,!0)]})]}),e.jsxs(l.Timeline,{children:[s.activity.map((i,c)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:i.t}),e.jsx("div",{className:"muted",children:p(i.at,!0)})]})]},c)),s.payments.length===0?e.jsx("li",{className:"empty",children:e.jsx("div",{className:"muted",children:"No payments recorded for this invoice."})}):null]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(u,{to:"/invoices",children:"All Invoices"})}),e.jsx("li",{children:e.jsx(u,{to:`/invoices/${s.id}/edit`,children:"Edit"})}),e.jsx("li",{children:e.jsx(u,{to:"/customers",children:"Customers"})}),e.jsx("li",{children:e.jsx(u,{to:"/reports/finance",children:"Finance Report"})}),e.jsx("li",{children:e.jsx(u,{to:"/receipts",children:"Receipts"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Payment Window"}),e.jsxs("div",{className:"kvgrid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Due Date"}),e.jsx("span",{className:"v",children:p(s.dueAt)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Preferred"}),e.jsx("span",{className:"v",children:"NEFT / UPI"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Support"}),e.jsx("span",{className:"v",children:s.seller.email})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Best Time"}),e.jsx("span",{className:"v",children:w(new Date)})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("ul",{className:"files",children:s.attachments.map(i=>e.jsxs("li",{children:[e.jsx("a",{href:i.href,download:!0,children:i.name}),e.jsx("span",{className:"muted",children:i.size})]},i.name))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Customer"}),e.jsxs("div",{className:"cust",children:[e.jsx("div",{className:"name",children:s.customer.company}),e.jsxs("div",{className:"muted",children:[s.customer.name," • ",s.customer.email]}),e.jsx("div",{className:"muted",children:s.customer.phone}),e.jsx("div",{className:"addr",children:s.customer.address.join(", ")})]})]})]})]}),e.jsxs(D,{open:v,title:"Send Invoice",onClose:()=>f(!1),children:[e.jsx("p",{children:"This is a display-only demo. Configure email/SMS in a real integration."}),e.jsx("div",{className:"mini muted",style:{marginTop:8},children:"Last attempted: none"})]}),e.jsx(D,{open:S,title:"More Actions",onClose:()=>y(!1),children:e.jsxs("ul",{className:"sheet",children:[e.jsx("li",{children:e.jsx("button",{className:"linklike",onClick:N,children:"Copy public link"})}),e.jsx("li",{children:e.jsx("a",{className:"linklike",href:"/sample/invoice.pdf",download:!0,children:"Download PDF"})}),e.jsx("li",{children:e.jsx("button",{className:"linklike",onClick:k,children:"Print invoice"})})]})})]})};export{M as default};
