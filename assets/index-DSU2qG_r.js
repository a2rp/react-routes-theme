import{d as o,q as P,u as D,r as y,j as e,N as x}from"./index-CTSbLEdo.js";const t="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",h="var(--card, #111318)",i="var(--border, #23262d)",r="var(--accent, #5aa9ff)",N="var(--accent-soft, rgba(90,169,255,0.15))",j="var(--danger, #ef4444)",T="var(--radius, 16px)",c={Page:o.div`
        padding: 20px;
        color: ${t};
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${l};
            }
            .current {
                color: ${t};
            }
        }
    `,Header:o.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .topline {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }

        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${l};
            font-size: 12px;
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
            border: 1px solid ${i};
            background: ${h};
            color: ${t};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${N};
        }
        .btnDanger {
            border-color: ${j};
            color: ${j};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${j} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `,Status:o.span`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        border: 1px solid ${i};
        background: color-mix(in oklab, ${r} 10%, transparent);
        color: ${t};
        font-weight: 700;
        font-size: 12px;

        &.st-open {
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
        &.st-approved {
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
        &.st-partially-received {
            background: color-mix(in oklab, ${r} 16%, transparent);
        }
        &.st-closed {
            background: color-mix(in oklab, ${r} 20%, transparent);
        }
        &.st-cancelled {
            background: color-mix(in oklab, ${j} 18%, transparent);
            border-color: ${j};
            color: ${t};
        }
    `,Summary:o.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        padding: 16px 18px;
        margin-bottom: 16px;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 2fr 2fr 2fr;
        }

        .block {
            border: 1px solid ${i};
            border-radius: 12px;
            padding: 12px;
            background: ${h};
            box-shadow: var(--shadow);
        }
        header {
            font-weight: 700;
            margin-bottom: 6px;
            color: ${t};
        }
        .name {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .address {
            color: ${t};
            opacity: 0.95;
            margin: 6px 0;
        }
        .kv {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            color: ${t};
        }
        .kv span:first-child {
            color: ${l};
        }
        .link {
            display: inline-block;
            margin-top: 8px;
            color: ${t};
            border: 1px solid ${i};
            padding: 6px 10px;
            border-radius: 8px;
        }
        .link:hover {
            border-color: ${r};
            color: ${r};
        }
        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .tag {
            border: 1px solid ${i};
            padding: 4px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
    `,Grid:o.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1200px) {
            grid-template-columns: 2.2fr 1fr;
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .sideCard {
            padding: 14px;
        }
        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${l};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${i};
            background: ${h};
        }
        .links a:hover {
            color: ${r};
            border-color: ${r};
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
            background: ${r};
            border: 1px solid ${i};
        }
        .timeline .muted {
            color: ${l};
            font-size: 12px;
        }

        .files {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .files li {
            display: grid;
            grid-template-columns: 1fr auto auto auto;
            align-items: center;
            gap: 8px;
        }
        .files .name {
            font-weight: 600;
        }
        .files .size {
            color: ${l};
            font-size: 12px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }
        .audit {
            display: grid;
            gap: 10px;
        }
        .audit span {
            color: ${l};
        }
    `,Progress:o.div`
        padding: 14px;
        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .pct {
            font-weight: 700;
        }
        .bar {
            width: 100%;
            height: 10px;
            border: 1px solid ${i};
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 8%, transparent);
            overflow: hidden;
        }
        .bar i {
            display: block;
            height: 100%;
            background: ${r};
        }
        .hint {
            margin-top: 8px;
            color: ${l};
        }
    `,Items:o.section`
        padding: 16px 18px;

        header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 10px;
            .sub {
                color: ${l};
                font-size: 12px;
            }
            .doc {
                display: grid;
                gap: 6px;
            }
            .doc .k {
                color: ${l};
                margin-right: 8px;
            }
            .doc > div {
                display: flex;
                gap: 8px;
                justify-content: flex-end;
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${i};
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${h};
            color: ${t};
            border-bottom: 1px solid ${i};
            text-align: left;
            padding: 10px;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${i};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .sku {
            color: ${l};
            font-size: 12px;
        }
        .name {
            font-weight: 600;
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
    `,Totals:o.div`
        margin-top: 16px;
        display: grid;
        gap: 16px;
        grid-template-columns: 1.2fr 1fr;
        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }

        .slim {
            padding: 12px;
        }
        .terms header {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .kv {
            display: flex;
            justify-content: space-between;
            gap: 8px;
            margin: 6px 0;
        }
        .remarks {
            margin-top: 8px;
            color: ${l};
        }

        .right .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 0;
        }
        .right .divider {
            height: 1px;
            background: ${i};
            margin: 6px 0;
        }
        .right .grand {
            font-size: 16px;
            font-weight: 800;
        }
        .right .inwords {
            margin-top: 8px;
            color: ${l};
            font-size: 12px;
        }
    `,Overlay:o.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:o.div`
        width: min(520px, 92vw);
        border-radius: ${T};
        border: 1px solid ${i};
        background: ${h};
        color: ${t};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${i};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
            color: ${t};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${i};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${h};
            color: ${t};
            font-weight: 700;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${N};
        }
    `},b=n=>String(n).padStart(2,"0"),S=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=n=>{const d=n instanceof Date?n:new Date(n);return`${S[d.getDay()]} ${C[d.getMonth()]} ${b(d.getDate())} ${d.getFullYear()}`},u=n=>{const d=n instanceof Date?n:new Date(n);return`${m(d)} ${b(d.getHours())}:${b(d.getMinutes())}:${b(d.getSeconds())}hrs`},A=({open:n,onClose:d,title:g="Demo mode",message:s="Actions are turned off in this demo."})=>n?e.jsx(c.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:d,children:e.jsxs(c.Modal,{className:"card",onMouseDown:v=>v.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:g})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:s})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:d,children:"Okay"})})]})}):null,M=()=>{const{poId:n}=P(),d=D(),g=y.useRef(null),s=y.useMemo(()=>({id:n||"PO-2025-0091",status:"Approved",createdAt:"2025-10-03T10:20:30+05:30",updatedAt:"2025-10-05T09:12:05+05:30",issueDate:"2025-10-03",expectedDate:"2025-10-12",reference:"RFQ-7783",buyer:{name:"Ashish Ranjan",email:"ashish.r@example.com",phone:"+91 90000 11111"},vendor:{id:"VEND-201",name:"Novacare Lifesciences Pvt Ltd",contact:"S. Khanna",email:"sales@novacare.example",phone:"+91 98111 23456",gstin:"07ABCDE1234F1Z5",address:"Plot 19, Okhla Phase II, New Delhi, 110020, India"},shipTo:{name:"Main Warehouse (DL-01)",address:"Shed 3, Patparganj Industrial Area, Delhi 110092, India",phone:"+91 99999 88888"},billTo:{name:"Bluewave Traders",address:"221B Baker Street, Khan Market, New Delhi 110003, India"},terms:{payment:"Net 15",shipping:"FOB Delhi",currency:"INR",remarks:"Deliver in standard crates. MRP stickers mandatory."},tags:["priority","wholesale","medicines"],timeline:[{title:"PO approved",at:"2025-10-03T13:10:05+05:30"},{title:"Vendor acknowledged",at:"2025-10-03T15:22:10+05:30"},{title:"Labels requested",at:"2025-10-04T17:01:43+05:30"}],attachments:[{name:"RFQ.pdf",size:"182 KB"},{name:"Novacare-Catalogue.pdf",size:"2.3 MB"}],related:{receiptId:"GRN-55014",billId:"BILL-8821"},items:[{line:1,sku:"MED-AMOX-500",name:"Amoxicillin 500mg",form:"Capsule",pack:"Strip of 10",hsn:"3004",gst:"12%",batch:"AMX-2201",expiry:"2027-02-28",uom:"Pack",qty:250,rate:"₹ 72.00",amount:"₹ 18,000.00"},{line:2,sku:"MED-PARA-650",name:"Paracetamol 650mg",form:"Tablet",pack:"Bottle of 100",hsn:"3004",gst:"12%",batch:"PAR-4411",expiry:"2026-11-30",uom:"Bottle",qty:120,rate:"₹ 210.00",amount:"₹ 25,200.00"},{line:3,sku:"MED-ORS-20",name:"ORS Powder 20.5g",form:"Sachet",pack:"Box of 20",hsn:"3004",gst:"12%",batch:"ORS-9023",expiry:"2026-06-30",uom:"Box",qty:80,rate:"₹ 95.00",amount:"₹ 7,600.00"}],totals:{subTotal:"₹ 50,800.00",discount:"₹ 0.00",tax:"₹ 6,096.00",shipping:"₹ 1,200.00",other:"₹ 0.00",grandTotal:"₹ 58,096.00",inWords:"Rupees Fifty Eight Thousand Ninety Six Only"},progress:45}),[n]),[v,p]=y.useState(!1),k=()=>{g.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},$=async()=>{try{await navigator.clipboard.writeText(window.location.href),p(!0)}catch{p(!0)}},w=e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(x,{to:"/purchase-orders",children:"Purchase Orders"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.id})]});return e.jsxs(c.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(c.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"topline",children:[e.jsx("h1",{children:s.id}),e.jsx(c.Status,{className:`st-${s.status.replace(/\s+/g,"-").toLowerCase()}`,children:s.status})]}),w,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",m(s.issueDate)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Expected: ",m(s.expectedDate)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",u(s.updatedAt)]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>d("/purchase-orders"),title:"Back to list",children:"Back"}),e.jsx("button",{className:"btnGhost",onClick:$,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:k,title:"Print this PO",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:()=>p(!0),title:"Mark items received",children:"Receive Items"}),e.jsx("button",{className:"btnPrimary",onClick:()=>p(!0),title:"Create vendor bill",children:"Create Bill"}),e.jsx("button",{className:"btnDanger",onClick:()=>p(!0),title:"Cancel this PO",children:"Cancel PO"})]})]}),e.jsxs(c.Summary,{className:"card",children:[e.jsxs("div",{className:"block vendor",children:[e.jsx("header",{children:"Vendor"}),e.jsx("div",{className:"name",children:s.vendor.name}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Contact"}),e.jsx("span",{children:s.vendor.contact})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Email"}),e.jsx("span",{children:s.vendor.email})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Phone"}),e.jsx("span",{children:s.vendor.phone})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"GSTIN"}),e.jsx("span",{children:s.vendor.gstin})]}),e.jsx("div",{className:"address",children:s.vendor.address}),e.jsx(x,{className:"link",to:`/vendors/${s.vendor.id}`,children:"Open Vendor"})]}),e.jsxs("div",{className:"block ship",children:[e.jsx("header",{children:"Ship To"}),e.jsx("div",{className:"name",children:s.shipTo.name}),e.jsx("div",{className:"address",children:s.shipTo.address}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Phone"}),e.jsx("span",{children:s.shipTo.phone})]})]}),e.jsxs("div",{className:"block bill",children:[e.jsx("header",{children:"Bill To"}),e.jsx("div",{className:"name",children:s.billTo.name}),e.jsx("div",{className:"address",children:s.billTo.address}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Currency"}),e.jsx("span",{children:s.terms.currency})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Payment"}),e.jsx("span",{children:s.terms.payment})]})]}),e.jsxs("div",{className:"block meta",children:[e.jsx("header",{children:"Meta"}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Reference"}),e.jsx("span",{children:s.reference})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Buyer"}),e.jsx("span",{children:s.buyer.name})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Email"}),e.jsx("span",{children:s.buyer.email})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Phone"}),e.jsx("span",{children:s.buyer.phone})]}),e.jsx("div",{className:"tags",children:s.tags.map(a=>e.jsx("span",{className:"tag",children:a},a))})]})]}),e.jsxs(c.Grid,{children:[e.jsxs("section",{className:"main",children:[e.jsxs(c.Progress,{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Receiving Progress"}),e.jsxs("span",{className:"pct",children:[s.progress,"%"]})]}),e.jsx("div",{className:"bar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":s.progress,children:e.jsx("i",{style:{width:`${s.progress}%`}})}),e.jsxs("div",{className:"hint",children:["Linked receipt: ",e.jsx(x,{to:`/purchase-orders/${s.id}/receipt`,children:s.related.receiptId})]})]}),e.jsxs(c.Items,{className:"card",id:"search-print-area",ref:g,children:[e.jsxs("header",{children:[e.jsxs("div",{className:"left",children:[e.jsx("h3",{children:"Items"}),e.jsx("div",{className:"sub",children:"All values are pre-computed and shown for reference."})]}),e.jsx("div",{className:"right",children:e.jsxs("div",{className:"doc",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"PO #"}),e.jsx("span",{children:s.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Issue"}),e.jsx("span",{children:m(s.issueDate)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Expected"}),e.jsx("span",{children:m(s.expectedDate)})]})]})})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"SKU / Item"}),e.jsx("th",{children:"Form"}),e.jsx("th",{children:"Pack"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"GST"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"UoM"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{className:"num",children:"Rate"}),e.jsx("th",{className:"num",children:"Amount"})]})}),e.jsx("tbody",{children:s.items.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.line}),e.jsxs("td",{children:[e.jsx("div",{className:"sku",children:a.sku}),e.jsx("div",{className:"name",children:a.name})]}),e.jsx("td",{children:a.form}),e.jsx("td",{children:a.pack}),e.jsx("td",{children:a.hsn}),e.jsx("td",{children:a.gst}),e.jsx("td",{children:a.batch}),e.jsx("td",{children:m(a.expiry)}),e.jsx("td",{children:a.uom}),e.jsx("td",{className:"num",children:a.qty}),e.jsx("td",{className:"num",children:a.rate}),e.jsx("td",{className:"num",children:a.amount})]},a.line))})]})}),e.jsxs(c.Totals,{children:[e.jsx("div",{className:"left",children:e.jsxs("div",{className:"terms card slim",children:[e.jsx("header",{children:"Terms"}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Payment"}),e.jsx("span",{children:s.terms.payment})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Shipping"}),e.jsx("span",{children:s.terms.shipping})]}),e.jsx("div",{className:"remarks",children:s.terms.remarks})]})}),e.jsxs("div",{className:"right card slim",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Sub Total"}),e.jsx("strong",{children:s.totals.subTotal})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Discount"}),e.jsx("strong",{children:s.totals.discount})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Tax"}),e.jsx("strong",{children:s.totals.tax})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Shipping"}),e.jsx("strong",{children:s.totals.shipping})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Other"}),e.jsx("strong",{children:s.totals.other})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"row grand",children:[e.jsx("span",{children:"Grand Total"}),e.jsx("strong",{children:s.totals.grandTotal})]}),e.jsx("div",{className:"inwords",children:s.totals.inWords})]})]})]})]}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card sideCard",children:[e.jsx("h3",{children:"Related"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsxs(x,{to:`/purchase-orders/${s.id}/receipt`,children:["Receipt: ",s.related.receiptId]})}),e.jsx("li",{children:e.jsxs(x,{to:`/purchase-orders/${s.id}/bill`,children:["Bill: ",s.related.billId]})}),e.jsx("li",{children:e.jsx(x,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(x,{to:"/inventory/warehouses",children:"Warehouses"})})]})]}),e.jsxs("div",{className:"card sideCard",children:[e.jsx("h3",{children:"Activity"}),e.jsx("ul",{className:"timeline",children:s.timeline.map((a,f)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:a.title}),e.jsx("div",{className:"muted",children:u(a.at)})]})]},f))})]}),e.jsxs("div",{className:"card sideCard",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("ul",{className:"files",children:s.attachments.map((a,f)=>e.jsxs("li",{children:[e.jsx("span",{className:"name",children:a.name}),e.jsx("span",{className:"size",children:a.size}),e.jsx("button",{className:"btnGhost small",onClick:()=>p(!0),children:"View"}),e.jsx("button",{className:"btnGhost small",onClick:()=>p(!0),children:"Download"})]},f))})]}),e.jsxs("div",{className:"card sideCard",children:[e.jsx("h3",{children:"Audit"}),e.jsxs("div",{className:"audit",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Created"}),e.jsx("strong",{children:u(s.createdAt)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Updated"}),e.jsx("strong",{children:u(s.updatedAt)})]})]})]})]})]}),e.jsx(A,{open:v,onClose:()=>p(!1)})]})};export{M as default};
