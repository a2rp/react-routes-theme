import{d as p,q as A,u as P,r as f,j as e,N as n}from"./index-BpMGcZ_2.js";const c="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",g="var(--card, #111318)",r="var(--border, #23262d)",i="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",j="var(--danger, #ef4444)",I="var(--radius, 16px)",x={Page:p.div`
        padding: 24px 0 64px;
        color: ${c};
    `,Header:p.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            a {
                color: ${o};
            }
            .current {
                color: ${c};
            }
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
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${g};
            color: ${c};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnDanger {
            border-color: ${j};
            color: ${j};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${j} 10%, transparent);
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `,Banner:p.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${r};
        border-radius: 10px;
        background: color-mix(in oklab, ${i} 10%, transparent);
        color: ${c};
    `,TopGrid:p.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 1.2fr 1fr 1fr;
        }

        .card {
            padding: 16px;
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
        .secHead .tinyLink {
            font-size: 12px;
            color: ${o};
        }
        .secHead .tinyLink:hover {
            color: ${i};
        }
        .secHead .status {
            font-size: 12px;
            color: ${i};
        }

        .pair {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
            @media (max-width: 680px) {
                grid-template-columns: 1fr;
            }
            .label {
                color: ${o};
                font-size: 12px;
                margin-bottom: 4px;
            }
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid ${r};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${i} 8%, transparent);
        }

        .addrWrap {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }
        .addrHead {
            font-weight: 700;
            margin-bottom: 8px;
        }
    `,TableCard:p.section`
        margin-top: 16px;
        padding: 14px 16px;

        .secHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .legend {
            color: ${o};
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .legend .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${i};
            display: inline-block;
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${r};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${r};
            background: ${g};
            color: ${i};
            position: sticky;
            top: 0;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${r};
            vertical-align: top;
        }
        .num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .muted {
            color: ${o};
        }
        .strong {
            font-weight: 700;
        }
        .title {
            font-weight: 600;
            display: inline-block;
        }

        /* row + link styling for clickable items */
        tbody.itemsBody a {
            color: ${c};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s ease, border-color 0.2s ease;
        }
        tbody.itemsBody a:hover {
            color: ${i};
            border-color: ${i};
        }
        tr.itemRow:hover td {
            background: rgba(0, 0, 0, 0.06);
        }

        .total {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
        }
        .viewLink {
            border: 1px solid ${r};
            border-radius: 8px;
            padding: 4px 8px;
            background: ${g};
        }
        .viewLink:hover {
            border-color: ${i};
            color: ${i};
        }
    `,SecondaryGrid:p.div`
        margin-top: 16px;
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }

        .card {
            padding: 16px;
        }

        .shipments {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .ship {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border: 1px solid ${r};
            border-radius: 10px;
            padding: 10px 12px;
            background: ${g};
        }
        .ship .id {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .ship .status {
            color: ${i};
            font-size: 12px;
        }
        .ship .meta.small {
            color: ${o};
            font-size: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .ship .right .small {
            padding: 6px 10px;
        }

        .docs {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .docs .k {
            display: inline-block;
            width: 120px;
            color: ${o};
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
            background: ${i};
            border: 1px solid ${r};
        }
        .note {
            margin-bottom: 10px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${r};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${i} 8%, transparent);
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${o};
        }
        .printSummary .v {
            color: ${c};
        }
    `,Overlay:p.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:p.div`
        width: min(520px, 92vw);
        border-radius: ${I};
        border: 1px solid ${r};
        background: ${g};
        color: ${c};
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
            color: ${c};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${r};
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${g};
            color: ${c};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnDanger {
            border-color: ${j};
            color: ${j};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${j} 10%, transparent);
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
    `},b=(l,v)=>{const t=l instanceof Date?l:new Date(l),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=u=>String(u).padStart(2,"0");return`${`${s[t.getDay()]} ${m[t.getMonth()]} ${d(t.getDate())} ${t.getFullYear()}`} ${d(t.getHours())}:${d(t.getMinutes())}:${d(t.getSeconds())}hrs`},C=({open:l,title:v,message:t,onConfirm:s,onClose:m,confirmText:d="Confirm"})=>l?e.jsx(x.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:m,children:e.jsxs(x.Modal,{className:"card",onMouseDown:N=>N.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:v})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:t})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:m,children:"Close"}),e.jsx("button",{className:"btnDanger",onClick:s,children:d})]})]})}):null,M=()=>{const{orderId:l="ORD-3001"}=A(),v=P(),t=f.useRef(null),s=f.useMemo(()=>({id:l,code:l,channel:"Online",status:"Partially Shipped",createdAt:"2025-10-04T09:22:31+05:30",confirmedAt:"2025-10-04T09:25:12+05:30",packedAt:"2025-10-04T11:40:00+05:30",shippedAt:"2025-10-04T17:10:45+05:30",deliveredAt:"",customer:{id:"CUST-1001",name:"Aarav Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210",tags:["priority","wholesale"]},billingAddress:{line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"},shippingAddress:{line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India"},payment:{status:"Partially Paid",method:"UPI",reference:"TXN-77H92P",paidAt:"2025-10-04T10:05:14+05:30",amounts:{currency:"INR",subtotal:18450,discount:950,tax:3321,shipping:250,total:211,grandTotal:21071,paid:15e3,balance:6071}},invoice:{id:"INV-2031"},shipments:[{id:"SHP-501",carrier:"Delhivery",trackingNo:"DLV-993442118",labels:2,createdAt:"2025-10-04T17:12:11+05:30",status:"In Transit"},{id:"SHP-502",carrier:"BlueDart",trackingNo:"BD-77449155",labels:1,createdAt:"2025-10-04T19:45:03+05:30",status:"Label Created"}],items:[{itemId:"ITEM-01",lineId:"LN-01",sku:"MED-AMOX-500",name:"Amoxicillin 500mg (10 tabs)",hsn:"3004",qty:6,unit:"box",rate:250,discount:50,tax:54,lineTotal:1504},{itemId:"ITEM-02",lineId:"LN-02",sku:"MED-PARA-650",name:"Paracetamol 650mg (15 tabs)",hsn:"3003",qty:12,unit:"box",rate:190,discount:0,tax:410,lineTotal:2290},{itemId:"ITEM-03",lineId:"LN-03",sku:"MED-ORS-200",name:"ORS 200ml",hsn:"2202",qty:24,unit:"bottle",rate:35,discount:120,tax:190,lineTotal:910},{itemId:"ITEM-04",lineId:"LN-04",sku:"MED-ZINC-50",name:"Zinc 50mg (100 tabs)",hsn:"3004",qty:3,unit:"bottle",rate:420,discount:60,tax:158,lineTotal:1418}],docs:{quoteId:"QUO-7811",pickingList:"PL-3001",packingList:"PK-3001"},notes:"Deliver weekday afternoons only. Keep outer packaging discreet. Club all partials in single invoice.",activity:[{t:"Order created",at:"2025-10-04T09:22:31+05:30"},{t:"Payment received (partial)",at:"2025-10-04T10:05:14+05:30"},{t:"Packed",at:"2025-10-04T11:40:00+05:30"},{t:"Shipment SHP-501 created",at:"2025-10-04T17:12:11+05:30"},{t:"Shipment SHP-502 label created",at:"2025-10-04T19:45:03+05:30"}],tags:["priority","north","bulk"]}),[l]),[m,d]=f.useState(""),[N,u]=f.useState(!1),w=()=>{var h;const a=window.location.href;(h=navigator.clipboard)!=null&&h.writeText&&(navigator.clipboard.writeText(a),d("Link copied"),setTimeout(()=>d(""),2500))},S=()=>{t.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},T=()=>u(!0),L=()=>{u(!1),d("Demo: cancel action not available"),setTimeout(()=>d(""),3e3)},D=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(n,{to:"/orders",children:"Orders"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.code})]});return e.jsxs(x.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(x.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("h1",{children:["Order ",s.code]}),D,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",b(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Status: ",s.status]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>v("/orders"),children:"Back"}),e.jsx(n,{className:"btnGhost",to:`/orders/${s.id}/print`,children:"Print View"}),e.jsx("button",{className:"btnGhost",onClick:w,children:"Copy Link"}),e.jsx(n,{className:"btnPrimary",to:`/orders/${s.id}/edit`,title:"Display-only demo",children:"Edit"}),e.jsx("button",{className:"btnDanger",onClick:T,title:"Display-only",children:"Cancel Order"}),e.jsx("button",{className:"btnGhost",onClick:S,children:"Print"})]})]}),m?e.jsx(x.Banner,{role:"status","aria-live":"polite",children:m}):null,e.jsxs(x.TopGrid,{children:[e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"secHead",children:[e.jsx("h3",{children:"Customer"}),e.jsx(n,{className:"tinyLink",to:`/customers/${s.customer.id}`,children:"View"})]}),e.jsxs("div",{className:"pair",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Name"}),e.jsx("div",{children:s.customer.name})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Customer ID"}),e.jsx("div",{children:e.jsx(n,{to:`/customers/${s.customer.id}`,children:s.customer.id})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Email"}),e.jsx("div",{children:s.customer.email})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Phone"}),e.jsx("div",{children:s.customer.phone})]})]}),e.jsx("div",{className:"chips",children:s.customer.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"secHead",children:[e.jsx("h3",{children:"Payment"}),e.jsx("span",{className:"status",children:s.payment.status})]}),e.jsxs("div",{className:"pair",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Method"}),e.jsx("div",{children:s.payment.method})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Reference"}),e.jsx("div",{children:s.payment.reference})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Paid At"}),e.jsx("div",{children:b(s.payment.paidAt)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Invoice"}),e.jsx("div",{children:e.jsx(n,{to:`/invoices/${s.invoice.id}`,children:s.invoice.id})})]})]}),e.jsxs("div",{className:"totals",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Subtotal"}),e.jsxs("b",{children:["₹ ",s.payment.amounts.subtotal.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Discount"}),e.jsxs("b",{children:["₹ ",s.payment.amounts.discount.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Tax"}),e.jsxs("b",{children:["₹ ",s.payment.amounts.tax.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Shipping"}),e.jsxs("b",{children:["₹ ",s.payment.amounts.shipping.toLocaleString()]})]}),e.jsx("div",{className:"hr"}),e.jsxs("div",{className:"grand",children:[e.jsx("span",{children:"Grand Total"}),e.jsxs("b",{children:["₹ ",s.payment.amounts.grandTotal.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Paid"}),e.jsxs("b",{children:["₹ ",s.payment.amounts.paid.toLocaleString()]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Balance"}),e.jsxs("b",{children:["₹ ",s.payment.amounts.balance.toLocaleString()]})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Addresses"})}),e.jsxs("div",{className:"addrWrap",children:[e.jsxs("div",{className:"addr",children:[e.jsx("div",{className:"addrHead",children:"Billing"}),e.jsx("p",{children:s.billingAddress.line1}),e.jsx("p",{children:s.billingAddress.line2}),e.jsxs("p",{children:[s.billingAddress.city," - ",s.billingAddress.zip]}),e.jsxs("p",{children:[s.billingAddress.state,", ",s.billingAddress.country]})]}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{className:"addrHead",children:"Shipping"}),e.jsx("p",{children:s.shippingAddress.line1}),e.jsx("p",{children:s.shippingAddress.line2}),e.jsxs("p",{children:[s.shippingAddress.city," - ",s.shippingAddress.zip]}),e.jsxs("p",{children:[s.shippingAddress.state,", ",s.shippingAddress.country]})]})]})]})]}),e.jsxs(x.TableCard,{className:"card",children:[e.jsxs("header",{className:"secHead",children:[e.jsx("h3",{children:"Items"}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot"})," ",s.status]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Item"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{className:"num",children:"Rate"}),e.jsx("th",{className:"num",children:"Discount"}),e.jsx("th",{className:"num",children:"Tax"}),e.jsx("th",{className:"num",children:"Line Total"})]})}),e.jsx("tbody",{className:"itemsBody",children:s.items.map((a,h)=>{const y=a.itemId||`ITEM-${String(h+1).padStart(2,"0")}`,$=`/orders/${s.id}/items/${y}`;return e.jsxs("tr",{className:"itemRow",children:[e.jsx("td",{className:"mono",children:e.jsx(n,{to:$,title:`Open ${y}`,children:a.sku})}),e.jsxs("td",{children:[e.jsx(n,{to:$,title:`Open ${y}`,className:"title",children:a.name}),e.jsxs("div",{className:"muted",children:["Unit: ",a.unit]})]}),e.jsx("td",{className:"mono",children:a.hsn}),e.jsx("td",{className:"num",children:a.qty}),e.jsxs("td",{className:"num",children:["₹ ",a.rate.toLocaleString()]}),e.jsxs("td",{className:"num",children:["₹ ",a.discount.toLocaleString()]}),e.jsxs("td",{className:"num",children:["₹ ",a.tax.toLocaleString()]}),e.jsxs("td",{className:"num strong total",children:[e.jsxs("span",{children:["₹ ",a.lineTotal.toLocaleString()]}),e.jsx(n,{to:$,className:"viewLink",title:`Open ${y}`,children:"View"})]})]},a.lineId)})})]})})]}),e.jsxs(x.SecondaryGrid,{children:[e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Shipments"})}),e.jsx("ul",{className:"shipments",children:s.shipments.map(a=>e.jsxs("li",{className:"ship",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"id",children:[e.jsx(n,{to:`/shipments/${a.id}`,children:a.id}),e.jsx("span",{className:"status",children:a.status})]}),e.jsxs("div",{className:"meta small",children:[e.jsxs("span",{children:["Carrier: ",a.carrier]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Tracking: ",a.trackingNo]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",b(a.createdAt)]})]})]}),e.jsxs("div",{className:"right",children:[e.jsx(n,{className:"btnGhost small",to:`/shipments/${a.id}/track`,children:"Track"}),e.jsxs(n,{className:"btnGhost small",to:`/shipments/${a.id}/labels`,children:["Labels (",a.labels,")"]})]})]},a.id))})]}),e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Documents"})}),e.jsxs("ul",{className:"docs",children:[e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Quote"})," ",e.jsx(n,{to:`/sales/quotes/${s.docs.quoteId}`,children:s.docs.quoteId})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Invoice"})," ",e.jsx(n,{to:`/invoices/${s.invoice.id}`,children:s.invoice.id})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Picking"})," ",s.docs.pickingList]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Packing"})," ",s.docs.packingList]})]})]}),e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Timeline"})}),e.jsx("ul",{className:"timeline",children:s.activity.map((a,h)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:a.t}),e.jsx("div",{className:"muted",children:b(a.at)})]})]},h))})]}),e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Notes & Tags"})}),e.jsx("p",{className:"note",children:s.notes}),e.jsx("div",{className:"chips",children:s.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))})]}),e.jsxs("section",{className:"card",id:"search-print-area",ref:t,children:[e.jsx("header",{className:"secHead",children:e.jsx("h3",{children:"Print Summary"})}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Order"}),e.jsx("span",{className:"v",children:s.code})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsxs("span",{className:"v",children:[s.customer.name," (",s.customer.id,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:s.status})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:b(s.createdAt)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Invoice"}),e.jsx("span",{className:"v",children:s.invoice.id})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Grand Total"}),e.jsxs("span",{className:"v",children:["₹ ",s.payment.amounts.grandTotal.toLocaleString()]})]})]})]})]}),e.jsx(C,{open:N,title:"Cancel this order?",message:"This is a demo. Cancelling will not change any data.",confirmText:"Understood",onConfirm:L,onClose:()=>u(!1)})]})};export{M as default};
