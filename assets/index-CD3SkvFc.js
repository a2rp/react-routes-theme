import{d as j,q as k,u as $,r as N,j as e,N as g,z as w,e as T,A as P,B as A,x as R}from"./index-BauM8ZfN.js";const i="var(--text, #f3f4f6)",n="var(--muted, #a0a0a7)",x="var(--card, #111318)",r="var(--border, #23262d)",l="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",y="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",v={Page:j.div`
        color: ${i};
        padding: 16px;
    `,Toolbar:j.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 16px;
        border: 1px solid ${r};
        border-radius: 12px;
        background: ${x};
        box-shadow: ${y};
        margin-bottom: 16px;

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .title h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 4px;
        }
        .breadcrumbs a {
            color: ${n};
        }
        .breadcrumbs .current {
            color: ${i};
        }

        .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            display: flex;
            align-items: center;
            gap: 8px;
            border-radius: 10px;
            padding: 8px 12px;
            border: 1px solid ${r};
            background: ${x};
            color: ${i};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.05s;
        }
        .btnGhost:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnPrimary {
            border-color: ${l};
            color: ${l};
        }
        .btnPrimary:hover {
            box-shadow: 0 0 0 3px ${f};
        }
        .btnPrimary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            box-shadow: none;
        }
        .btnGhost:active,
        .btnPrimary:active {
            transform: translateY(1px);
        }
    `,Header:j.div`
        display: grid;
        gap: 14px;
        margin-bottom: 16px;

        .ids {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .idBlock {
            border: 1px solid ${r};
            background: ${x};
            padding: 8px 12px;
            border-radius: 10px;
            display: flex;
            gap: 8px;
            align-items: baseline;
        }
        .idBlock .k {
            color: ${n};
            font-size: 12px;
        }
        .idBlock .v {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .statusRow {
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${r};
            background: color-mix(in oklab, ${l} 10%, transparent);
        }
        .pill .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${l};
            display: inline-block;
        }

        .meta {
            display: flex;
            gap: 8px;
            color: ${n};
            font-size: 12px;
            flex-wrap: wrap;
        }

        .progress {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .progress .label {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${n};
        }
        .progress .bar {
            height: 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${i} 6%, transparent);
            overflow: hidden;
            border: 1px solid ${r};
        }
        .progress .fill {
            height: 100%;
            background: ${l};
        }
        .progress .pct {
            font-weight: 700;
            color: ${i};
        }
    `,Grid:j.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main .section,
        .col.side .section {
            border: 1px solid ${r};
            border-radius: 12px;
            background: ${x};
            box-shadow: ${y};
            padding: 14px 16px;
        }

        .secHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .secHead h3 {
            font-size: 16px;
        }

        .pairGrid {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }
        .pairGrid .k {
            color: ${n};
            font-size: 12px;
        }
        .pairGrid .v {
            color: ${i};
        }
        .pairGrid .full {
            grid-column: 1 / -1;
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${r};
            border-radius: 10px;
        }
        table.table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .table thead th {
            position: sticky;
            top: 0;
            background: ${x};
            border-bottom: 1px solid ${r};
            text-align: left;
            padding: 10px;
        }
        .table tbody td {
            border-top: 1px solid ${r};
            padding: 10px;
            vertical-align: top;
        }
        .table th.num,
        .table td.num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .notes {
            color: ${i};
            opacity: 0.95;
        }

        /* side */
        .addr .name {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .addr .line {
            color: ${i};
            opacity: 0.9;
        }
        .kv {
            display: grid;
            gap: 8px;
        }
        .kv .k {
            color: ${n};
        }
        .kv .v {
            color: ${i};
        }
        .kv .strong {
            font-weight: 800;
        }
        .kv .split {
            border-top: 1px dashed ${r};
            padding-top: 8px;
            margin-top: 6px;
        }

        .code {
            margin-top: 12px;
            border: 1px dashed ${r};
            border-radius: 10px;
            padding: 10px;
            background: color-mix(in oklab, ${l} 8%, transparent);
        }
        .code .label {
            color: ${n};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .code .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 12px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${l};
            border: 1px solid ${r};
            margin-top: 6px;
        }
        .timeline .rowTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }
        .timeline .rowTop a {
            color: ${i};
        }
        .timeline .rowTop .muted {
            color: ${n};
            font-size: 12px;
        }
        .timeline .rowSub {
            display: flex;
            gap: 8px;
            color: ${n};
            font-size: 12px;
            flex-wrap: wrap;
        }
        .timeline .note {
            color: ${i};
            opacity: 0.9;
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .files li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            border: 1px solid ${r};
            border-radius: 10px;
            padding: 8px 10px;
            background: color-mix(in oklab, ${l} 6%, transparent);
        }
        .files .file {
        }
        .files .size {
            color: ${n};
            font-size: 12px;
        }
    `},c=(t,u=!1)=>{const d=t instanceof Date?t:new Date(t),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=a=>String(a).padStart(2,"0"),h=`${s[d.getDay()]} ${b[d.getMonth()]} ${o(d.getDate())} ${d.getFullYear()}`;return u?`${h} ${o(d.getHours())}:${o(d.getMinutes())}:${o(d.getSeconds())}hrs`:h},B=()=>{const{poId:t="PO-2025-00421"}=k(),u=$(),d=N.useRef(null),s=N.useMemo(()=>({poId:t,receiptId:"GRN-1041",status:"Partially Received",orderedAt:"2025-10-04T12:30:10+05:30",expectedAt:"2025-10-10T18:00:00+05:30",receivedAt:"2025-10-04T15:38:20+05:30",vendor:{name:"Medistar Pharma Pvt. Ltd.",code:"VND-2012",contact:"R. Verma",email:"sales@medistar.example.com",phone:"+91 98999 10010",gstin:"07AAACM1234Q1Z7",address:"A-34, Okhla Industrial Area, Phase 1, New Delhi 110020, India"},billTo:{name:"Bluewave Traders",address:"3rd Floor, 221B Baker Street, Khan Market, New Delhi 110003, India",gstin:"22ABCDE1234F1Z5"},shipTo:{name:"Bluewave DC – Gurugram",address:"Plot 14, Industrial Area, Phase 2, Gurugram 122002, India",contact:"Warehouse Desk",phone:"+91 98100 11223"},reference:{vendorRef:"QTN-7789",paymentTerms:"Net 15",currency:"INR",incoterm:"DAP",carrier:"BlueDart",mode:"Surface"},progressPct:60,totals:{subtotal:"₹1,84,000.00",discount:"₹4,000.00",tax:"₹9,000.00",freight:"₹2,500.00",grandTotal:"₹1,91,500.00",paid:"₹1,00,000.00",balance:"₹91,500.00"},items:[{line:1,sku:"MED-AMOX-500",name:"Amoxicillin 500mg Capsule",uom:"Box (10x10)",orderedQty:"50",receivedQty:"30",pendingQty:"20",batch:"AMX0925A",expiry:"2027-03-31",mrp:"₹120.00",rate:"₹75.00",lineTotal:"₹37,500.00",remarks:"Outer cartons OK"},{line:2,sku:"MED-PARA-650",name:"Paracetamol 650mg Tablet",uom:"Box (20x10)",orderedQty:"80",receivedQty:"50",pendingQty:"30",batch:"PARA1025Z",expiry:"2026-12-31",mrp:"₹45.00",rate:"₹28.00",lineTotal:"₹28,000.00",remarks:"5 boxes dented (repacked)"},{line:3,sku:"MED-CPM-25",name:"Chlorpheniramine Maleate 25mg",uom:"Bottle (100 tabs)",orderedQty:"100",receivedQty:"100",pendingQty:"0",batch:"CPM0925K",expiry:"2028-06-30",mrp:"₹195.00",rate:"₹110.00",lineTotal:"₹11,000.00",remarks:"Sealed"}],receipts:[{id:"GRN-1041",date:"2025-10-04T15:38:20+05:30",by:"A. Sharma",boxes:"8",lines:"3",note:"Outer cartons in good condition."},{id:"ASN-1040",date:"2025-10-04T11:08:42+05:30",by:"Vendor (ASN)",boxes:"8",lines:"3",note:"Advance Shipment Notice synced."}],attachments:[{name:"Vendor-Quotation.pdf",size:"124 KB"},{name:"COA-Amoxicillin-Batch-AMX0925A.pdf",size:"356 KB"},{name:"Packing-List-GRN-1041.pdf",size:"88 KB"}],notes:"Checked and received in presence of vendor rep. Temperature logs within range. Dented boxes inspected and repacked. Pending due to backorder from supplier."}),[t]),b=()=>{d.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},o=()=>{const a=new Blob([`Receipt: ${s.receiptId}
PO: ${s.poId}
Received: ${c(s.receivedAt,!0)}
Carrier: ${s.reference.carrier}
Mode: ${s.reference.mode}
`],{type:"text/plain;charset=utf-8"}),m=URL.createObjectURL(a),p=document.createElement("a");p.href=m,p.download=`${s.receiptId}.txt`,document.body.appendChild(p),p.click(),p.remove(),URL.revokeObjectURL(m)},h=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(g,{to:"/purchase-orders",children:"Purchase Orders"}),e.jsx("span",{children:"/"}),e.jsx(g,{to:`/purchase-orders/${s.poId}`,children:s.poId}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.receiptId})]});return e.jsxs(v.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(v.Toolbar,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("button",{className:"btnGhost",onClick:()=>u(`/purchase-orders/${s.poId}`),children:[e.jsx(w,{size:18}),e.jsx("span",{children:"Back to PO"})]}),e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Goods Receipt"}),h]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("button",{className:"btnGhost",onClick:b,title:"Print",children:[e.jsx(T,{size:18}),e.jsx("span",{children:"Print"})]}),e.jsxs("button",{className:"btnGhost",onClick:o,title:"Download",children:[e.jsx(P,{size:18}),e.jsx("span",{children:"Download"})]}),e.jsxs("button",{className:"btnPrimary",disabled:!0,title:"Demo only",children:[e.jsx(A,{size:18}),e.jsx("span",{children:"Book Purchase Bill"})]})]})]}),e.jsxs("div",{id:"search-print-area",ref:d,children:[e.jsxs(v.Header,{children:[e.jsxs("div",{className:"ids",children:[e.jsxs("div",{className:"idBlock",children:[e.jsx("div",{className:"k",children:"PO"}),e.jsx("div",{className:"v",children:s.poId})]}),e.jsxs("div",{className:"idBlock",children:[e.jsx("div",{className:"k",children:"Receipt"}),e.jsx("div",{className:"v",children:s.receiptId})]})]}),e.jsxs("div",{className:"statusRow",children:[e.jsxs("div",{className:"pill status",children:[e.jsx("span",{className:"dot"}),s.status]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Ordered: ",c(s.orderedAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Expected: ",c(s.expectedAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Received: ",c(s.receivedAt,!0)]})]})]}),e.jsxs("div",{className:"progress",children:[e.jsxs("div",{className:"label",children:[e.jsx(R,{"aria-hidden":"true"}),e.jsx("span",{children:"Receiving Progress"})]}),e.jsx("div",{className:"bar",children:e.jsx("div",{className:"fill",style:{width:`${s.progressPct}%`}})}),e.jsxs("div",{className:"pct",children:[s.progressPct,"%"]})]})]}),e.jsxs(v.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card section",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Receipt Details"})}),e.jsxs("div",{className:"pairGrid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Vendor"}),e.jsxs("div",{className:"v",children:[s.vendor.name," (",s.vendor.code,")"]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Vendor Ref"}),e.jsx("div",{className:"v",children:s.reference.vendorRef})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Contact"}),e.jsxs("div",{className:"v",children:[s.vendor.contact," · ",s.vendor.phone," · ",s.vendor.email]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"GSTIN"}),e.jsx("div",{className:"v",children:s.vendor.gstin})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Incoterm"}),e.jsx("div",{className:"v",children:s.reference.incoterm})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Currency"}),e.jsx("div",{className:"v",children:s.reference.currency})]}),e.jsxs("div",{className:"full",children:[e.jsx("div",{className:"k",children:"Vendor Address"}),e.jsx("div",{className:"v",children:s.vendor.address})]})]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Line Items"})}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Item"}),e.jsx("th",{children:"UoM"}),e.jsx("th",{className:"num",children:"Ordered"}),e.jsx("th",{className:"num",children:"Received"}),e.jsx("th",{className:"num",children:"Pending"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"num",children:"Rate"}),e.jsx("th",{className:"num",children:"MRP"}),e.jsx("th",{className:"num",children:"Line Total"}),e.jsx("th",{children:"Remarks"})]})}),e.jsx("tbody",{children:s.items.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.line}),e.jsx("td",{children:e.jsx("div",{className:"mono",children:a.sku})}),e.jsx("td",{children:a.name}),e.jsx("td",{children:a.uom}),e.jsx("td",{className:"num",children:a.orderedQty}),e.jsx("td",{className:"num",children:a.receivedQty}),e.jsx("td",{className:"num",children:a.pendingQty}),e.jsx("td",{children:a.batch}),e.jsx("td",{children:c(a.expiry)}),e.jsx("td",{className:"num",children:a.rate}),e.jsx("td",{className:"num",children:a.mrp}),e.jsx("td",{className:"num",children:a.lineTotal}),e.jsx("td",{children:a.remarks})]},a.line))})]})})]}),e.jsxs("div",{className:"card section",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Notes"})}),e.jsx("p",{className:"notes",children:s.notes})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card section",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Bill To"})}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{className:"name",children:s.billTo.name}),e.jsx("div",{className:"line",children:s.billTo.address}),e.jsxs("div",{className:"line",children:["GSTIN: ",s.billTo.gstin]})]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Ship To"})}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{className:"name",children:s.shipTo.name}),e.jsx("div",{className:"line",children:s.shipTo.address}),e.jsxs("div",{className:"line",children:[s.shipTo.contact," · ",s.shipTo.phone]})]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Logistics"})}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Carrier"}),e.jsx("span",{className:"v",children:s.reference.carrier})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Mode"}),e.jsx("span",{className:"v",children:s.reference.mode})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Expected"}),e.jsx("span",{className:"v",children:c(s.expectedAt)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Received"}),e.jsx("span",{className:"v",children:c(s.receivedAt,!0)})]})]}),e.jsxs("div",{className:"code",children:[e.jsx("div",{className:"label",children:"PO / Receipt"}),e.jsxs("div",{className:"mono",children:[s.poId," · ",s.receiptId]})]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Totals"})}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Subtotal"}),e.jsx("span",{className:"v",children:s.totals.subtotal})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Discount"}),e.jsx("span",{className:"v",children:s.totals.discount})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Tax"}),e.jsx("span",{className:"v",children:s.totals.tax})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Freight"}),e.jsx("span",{className:"v",children:s.totals.freight})]}),e.jsxs("div",{className:"split",children:[e.jsx("span",{className:"k",children:"Grand Total"}),e.jsx("span",{className:"v strong",children:s.totals.grandTotal})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Paid"}),e.jsx("span",{className:"v",children:s.totals.paid})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Balance"}),e.jsx("span",{className:"v",children:s.totals.balance})]})]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Receipts & ASN"})}),e.jsx("ul",{className:"timeline",children:s.receipts.map(a=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"rowTop",children:[e.jsx(g,{to:"#",title:"Open",children:a.id}),e.jsx("span",{className:"muted",children:c(a.date,!0)})]}),e.jsxs("div",{className:"rowSub",children:[e.jsxs("span",{children:["By: ",a.by]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Boxes: ",a.boxes]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Lines: ",a.lines]})]}),e.jsx("div",{className:"note",children:a.note})]})]},a.id))})]}),e.jsxs("div",{className:"card section",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Attachments"})}),e.jsx("ul",{className:"files",children:s.attachments.map((a,m)=>e.jsxs("li",{children:[e.jsx("span",{className:"file",children:a.name}),e.jsx("span",{className:"size",children:a.size})]},m))})]})]})]})]})]})};export{B as default};
