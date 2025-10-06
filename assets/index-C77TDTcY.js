import{d as g,q as T,u as S,r as y,j as e,N as j}from"./index-CqBbF2bz.js";const t="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",h="var(--card, #111318)",r="var(--border, #23262d)",i="var(--accent, #5aa9ff)",C="var(--accent-soft, rgba(90,169,255,0.15))",v="var(--danger, #ef4444)",P="var(--radius, 16px)",N={Page:g.div`
        padding: 24px 0 64px;
        color: ${t};
    `,Header:g.header`
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
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${p};
        }
        .breadcrumbs .current {
            color: ${t};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${p};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }

        .status {
            text-transform: capitalize;
            border: 1px solid ${r};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${i} 10%, transparent);
            color: ${t};
            font-weight: 600;
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${h};
            color: ${t};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover:not(:disabled) {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${C};
        }
        .btnPrimary:active:not(:disabled) {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnDanger {
            border-color: ${v};
            color: ${v};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${v} 10%, transparent);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Banner:g.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${r};
        border-radius: 10px;
        background: color-mix(in oklab, ${i} 10%, transparent);
        color: ${t};
    `,Grid:g.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .row {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            margin-bottom: 18px;
        }
        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
        }

        .idRow {
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
        .idBlock .label {
            color: ${p};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .idBlock .value {
            font-weight: 700;
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            margin-top: -2px;
            margin-bottom: 8px;
        }
        .step {
            border: 1px solid ${r};
            border-radius: 10px;
            padding: 8px 10px;
            text-align: center;
            background: ${h};
            color: ${p};
            font-weight: 600;
            font-size: 12px;
        }
        .step.done {
            color: ${t};
            background: color-mix(in oklab, ${i} 10%, transparent);
            border-color: ${i};
        }

        .tableWrap h3 {
            font-size: 14px;
        }
        .tableHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .tableActions {
            display: flex;
            gap: 8px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        .scroller {
            overflow: auto;
            border: 1px solid ${r};
            border-radius: 10px;
            background: color-mix(in oklab, ${h} 96%, transparent);
        }
        table.grid {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.grid thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${h};
            color: ${t};
            text-align: left;
            border-bottom: 1px solid ${r};
            padding: 10px;
        }
        table.grid tbody td {
            padding: 10px;
            border-bottom: 1px solid ${r};
            vertical-align: top;
        }
        table.grid tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        table.grid tfoot td {
            padding: 10px;
            border-top: 1px solid ${r};
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
        .strong {
            font-weight: 700;
        }
        .xsmall {
            padding: 4px 8px;
        }

        .pTitle .muted {
            color: ${p};
            font-size: 12px;
        }

        .sub {
            padding: 14px;
        }
        .sub h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        textarea[readonly] {
            opacity: 0.9;
        }

        /* side */
        .side {
            display: grid;
            gap: 16px;
        }
        .kv {
            display: grid;
            gap: 8px;
        }
        .kv .k {
            color: ${p};
        }
        .kv > div {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
        }
        .progress {
            margin-top: 10px;
            height: 8px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid ${r};
            border-radius: 999px;
            overflow: hidden;
        }
        .progress .bar {
            height: 100%;
            background: ${i};
        }

        .addr {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
        }
        .addr .label {
            color: ${p};
            font-size: 12px;
            margin-bottom: 4px;
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
            color: ${t};
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .files li {
            display: grid;
            grid-template-columns: 1fr auto auto auto;
            gap: 8px;
            align-items: center;
            border: 1px solid ${r};
            background: ${h};
            border-radius: 8px;
            padding: 8px 10px;
        }
        .files .fileName {
            font-weight: 600;
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
            background: ${i};
            border: 1px solid ${r};
        }
        .timeline .muted {
            color: ${p};
            font-size: 12px;
        }
    `,Overlay:g.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:g.div`
        width: min(520px, 92vw);
        border-radius: ${P};
        border: 1px solid ${r};
        background: ${h};
        color: ${t};
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
            color: ${t};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${r};
        }

        .btnDanger,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${h};
            color: ${t};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnDanger {
            border-color: ${v};
            color: ${v};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${v} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
    `},x=(c,u)=>{const d=c instanceof Date?c:new Date(c),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=f=>String(f).padStart(2,"0"),m=`${s[d.getDay()]} ${b[d.getMonth()]} ${n(d.getDate())} ${d.getFullYear()}`;return u?`${m} ${n(d.getHours())}:${n(d.getMinutes())}:${n(d.getSeconds())}hrs`:m},I=({open:c,title:u,message:d,onConfirm:s,onClose:b,confirmText:n="Confirm"})=>c?e.jsx(N.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:b,children:e.jsxs(N.Modal,{className:"card",onMouseDown:m=>m.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:u})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:d})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:b,children:"Cancel"}),e.jsx("button",{className:"btnDanger",onClick:s,children:n})]})]})}):null,R=()=>{const{orderId:c}=T(),u=S(),d=y.useRef(null),s=y.useMemo(()=>({id:c||"ORD-3001",number:c||"ORD-3001",status:"processing",createdAt:"2025-10-04T10:22:33+05:30",updatedAt:"2025-10-04T15:38:20+05:30",currency:"₹",customer:{id:"CUST-1001",name:"Aarav Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210",code:"CUST-1001"},billingAddress:{line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"},shippingAddress:{line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India"},tags:["priority","pharma","online"],references:{po:"PO-7749",invoiceId:"INV-2031",shipmentId:"SHP-5012"},items:[{id:"ITEM-01",productId:"MED-AMOX-500",name:"Amoxicillin 500mg Capsule",sku:"AMOX-500",batch:"BCH-2201",expiry:"2026-02-28",qty:2,unit:"strip",mrp:"150.00",rate:"120.00",discount:"10.00",taxRate:"12%",tax:"25.92",lineTotal:"233.92"},{id:"ITEM-02",productId:"MED-PARA-650",name:"Paracetamol 650mg Tablet",sku:"PARA-650",batch:"BCH-2305",expiry:"2027-05-31",qty:4,unit:"strip",mrp:"90.00",rate:"72.00",discount:"0.00",taxRate:"12%",tax:"34.56",lineTotal:"322.56"},{id:"ITEM-03",productId:"MED-ORS-200",name:"ORS Sachet 20.5g",sku:"ORS-20",batch:"BCH-2311",expiry:"2026-11-30",qty:12,unit:"sachet",mrp:"20.00",rate:"16.00",discount:"6.00",taxRate:"5%",tax:"9.00",lineTotal:"165.00"}],totals:{subTotal:"680.00",discountTotal:"20.00",taxTotal:"69.48",shipping:"12.12",roundOff:"-0.60",grandTotal:"741.00",paid:"500.00",balance:"241.00"},notes:"Pack medicines with temperature-control gel. Do not substitute brand. Deliver before evening.",attachments:[{id:"A1",name:"Doctor_Prescription.pdf",size:"182 KB"},{id:"A2",name:"KYC_Customer.pdf",size:"96 KB"}]}),[c]),[b,n]=y.useState(!1),[m,f]=y.useState(""),$=()=>{d.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},k=()=>u(`/orders/${s.id}`),w=()=>n(!0),A=()=>{n(!1),u("/orders")},o=a=>{f(a),window.clearTimeout(o._t),o._t=window.setTimeout(()=>f(""),3500)},l="Demo only: action disabled";return e.jsxs(N.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(N.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Edit Order"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumbs",children:[e.jsx(j,{to:"/orders",children:"Orders"}),e.jsx("span",{children:"/"}),e.jsx(j,{to:`/orders/${s.id}`,children:s.number}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Edit"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",x(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",x(s.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("span",{className:`status ${s.status}`,children:s.status}),e.jsx("button",{className:"btnGhost",onClick:k,title:"Back to order details",children:"Cancel"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:l,onClick:()=>o(l),children:"Save"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:l,onClick:()=>o(l),children:"Save & View"}),e.jsx("button",{className:"btnDanger",onClick:w,title:"Delete this order",children:"Delete"}),e.jsx("button",{className:"btnGhost",onClick:$,title:"Print summary",children:"Print"})]})]}),m?e.jsx(N.Banner,{role:"status","aria-live":"polite",children:m}):null,e.jsxs(N.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"row idRow",children:[e.jsxs("div",{className:"idBlock",children:[e.jsx("div",{className:"label",children:"Order"}),e.jsx("div",{className:"value",children:s.number})]}),e.jsxs("div",{className:"idBlock",children:[e.jsx("div",{className:"label",children:"Customer"}),e.jsxs("div",{className:"value",children:[e.jsx(j,{to:`/customers/${s.customer.id}`,children:s.customer.name}),e.jsxs("div",{className:"muted",children:[s.customer.email," · ",s.customer.phone]})]})]}),e.jsxs("div",{className:"idBlock",children:[e.jsx("div",{className:"label",children:"References"}),e.jsxs("div",{className:"value",children:["PO: ",s.references.po," ·"," ",e.jsx(j,{to:`/invoices/${s.references.invoiceId}`,children:s.references.invoiceId})," ·"," ",e.jsx(j,{to:`/shipments/${s.references.shipmentId}`,children:s.references.shipmentId})]})]})]}),e.jsxs("div",{className:"steps",children:[e.jsx("div",{className:`step ${["draft","processing","packed","shipped","delivered"].includes(s.status)?"done":""}`,children:e.jsx("span",{children:"Draft"})}),e.jsx("div",{className:`step ${["processing","packed","shipped","delivered"].includes(s.status)?"done":""}`,children:e.jsx("span",{children:"Processing"})}),e.jsx("div",{className:`step ${["packed","shipped","delivered"].includes(s.status)?"done":""}`,children:e.jsx("span",{children:"Packed"})}),e.jsx("div",{className:`step ${["shipped","delivered"].includes(s.status)?"done":""}`,children:e.jsx("span",{children:"Shipped"})}),e.jsx("div",{className:`step ${s.status==="delivered"?"done":""}`,children:e.jsx("span",{children:"Delivered"})})]}),e.jsxs("div",{className:"tableWrap",children:[e.jsxs("div",{className:"tableHeader",children:[e.jsx("h3",{children:"Items"}),e.jsxs("div",{className:"tableActions",children:[e.jsx("button",{className:"btnGhost small",disabled:!0,title:l,onClick:()=>o(l),children:"Add Item"}),e.jsx("button",{className:"btnGhost small",disabled:!0,title:l,onClick:()=>o(l),children:"Import Items"})]})]}),e.jsx("div",{className:"scroller",children:e.jsxs("table",{className:"grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{minWidth:240},children:"Product"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Batch / Expiry"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{className:"num",children:"Rate"}),e.jsx("th",{className:"num",children:"Discount"}),e.jsx("th",{className:"num",children:"Tax"}),e.jsx("th",{className:"num",children:"Line Total"}),e.jsx("th",{className:"num",children:"Action"})]})}),e.jsx("tbody",{children:s.items.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"pTitle",children:[e.jsx(j,{to:`/products/${a.productId}`,children:a.name}),e.jsx("div",{className:"muted",children:a.unit})]})}),e.jsx("td",{children:a.sku}),e.jsxs("td",{children:[a.batch," · ",a.expiry]}),e.jsx("td",{className:"num",children:a.qty}),e.jsxs("td",{className:"num",children:[s.currency,a.rate]}),e.jsxs("td",{className:"num",children:[s.currency,a.discount]}),e.jsxs("td",{className:"num",children:[a.taxRate," (",s.currency,a.tax,")"]}),e.jsxs("td",{className:"num strong",children:[s.currency,a.lineTotal]}),e.jsx("td",{className:"num",children:e.jsx("button",{className:"btnGhost xsmall",disabled:!0,title:l,onClick:()=>o(l),children:"Remove"})})]},a.id))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{children:[e.jsx("td",{colSpan:6}),e.jsx("td",{className:"num",children:"Sub Total"}),e.jsxs("td",{className:"num strong",children:[s.currency,s.totals.subTotal]}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:6}),e.jsx("td",{className:"num",children:"Discount"}),e.jsxs("td",{className:"num strong",children:["-",s.currency,s.totals.discountTotal]}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:6}),e.jsx("td",{className:"num",children:"Tax"}),e.jsxs("td",{className:"num strong",children:[s.currency,s.totals.taxTotal]}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:6}),e.jsx("td",{className:"num",children:"Shipping"}),e.jsxs("td",{className:"num strong",children:[s.currency,s.totals.shipping]}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:6}),e.jsx("td",{className:"num",children:"Round Off"}),e.jsxs("td",{className:"num strong",children:[s.currency,s.totals.roundOff]}),e.jsx("td",{})]}),e.jsxs("tr",{className:"grand",children:[e.jsx("td",{colSpan:6}),e.jsx("td",{className:"num",children:"Grand Total"}),e.jsxs("td",{className:"num strong",children:[s.currency,s.totals.grandTotal]}),e.jsx("td",{})]})]})]})})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Notes"}),e.jsx("textarea",{rows:6,defaultValue:s.notes,readOnly:!0}),e.jsxs("div",{className:"mini",children:["Last edit: ",x(s.updatedAt,!0)]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("ul",{className:"files",children:s.attachments.map(a=>e.jsxs("li",{children:[e.jsx("span",{className:"fileName",children:a.name}),e.jsx("span",{className:"muted",children:a.size}),e.jsx("button",{className:"btnGhost xsmall",onClick:()=>o("Preview coming soon"),children:"Preview"}),e.jsx("a",{className:"btnGhost xsmall",href:"#",onClick:D=>D.preventDefault(),title:"Download copy",children:"Download"})]},a.id))})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Payment"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Received"}),e.jsxs("span",{className:"v",children:[s.currency,s.totals.paid]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Balance"}),e.jsxs("span",{className:"v",children:[s.currency,s.totals.balance]})]})]}),e.jsx("div",{className:"progress",children:e.jsx("div",{className:"bar",style:{width:`${Math.min(100,Math.round(Number(s.totals.paid)/Number(s.totals.grandTotal)*100))}%`}})}),e.jsxs("div",{className:"mini muted",children:["Collected on: ",x(s.updatedAt)]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Addresses"}),e.jsxs("div",{className:"addr",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Billing"}),e.jsxs("p",{children:[s.billingAddress.line1,e.jsx("br",{}),s.billingAddress.line2,e.jsx("br",{}),s.billingAddress.city," ",s.billingAddress.zip,e.jsx("br",{}),s.billingAddress.state,", ",s.billingAddress.country]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Shipping"}),e.jsxs("p",{children:[s.shippingAddress.line1,e.jsx("br",{}),s.shippingAddress.line2,e.jsx("br",{}),s.shippingAddress.city," ",s.shippingAddress.zip,e.jsx("br",{}),s.shippingAddress.state,", ",s.shippingAddress.country]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Tags"}),e.jsx("div",{className:"chips",children:s.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:d,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Order"}),e.jsx("span",{className:"v",children:s.number})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsxs("span",{className:"v",children:[s.customer.name," (",s.customer.code,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:s.status})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:x(s.createdAt,!0)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Grand Total"}),e.jsxs("span",{className:"v",children:[s.currency,s.totals.grandTotal]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Packed"}),e.jsx("div",{className:"muted",children:x("2025-10-04T14:10:00+05:30",!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Processing started"}),e.jsx("div",{className:"muted",children:x("2025-10-04T11:00:00+05:30",!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Order created"}),e.jsx("div",{className:"muted",children:x(s.createdAt,!0)})]})]})]})]})]})]}),e.jsx(I,{open:b,title:"Delete order?",message:`This will remove ${s.number}.`,confirmText:"Delete",onConfirm:A,onClose:()=>n(!1)})]})};export{R as default};
