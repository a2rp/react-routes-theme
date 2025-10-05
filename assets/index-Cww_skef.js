import{d as u,q as w,u as R,r as f,j as e,N as c}from"./index-BM8H5dnP.js";const t="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",j="var(--card, #111318)",l="var(--border, #23262d)",a="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",$="var(--radius, 16px)",g={Page:u.div`
        padding: 24px 0 64px;
        color: ${t};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${d};
            }
            .current {
                color: ${t};
            }
        }
    `,Header:u.header`
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
            color: ${d};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${l};
            background: ${j};
            color: ${t};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s ease;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${y};
            transform: translateY(1px);
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Grid:u.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1024px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main .card,
        .col.side .card {
            border: 1px solid ${l};
            border-radius: ${$};
            background: ${j};
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
            padding: 16px 18px;
        }

        /* Top identity + steps */
        .rowTop {
            display: grid;
            gap: 14px;
        }
        .identity .title {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .identity .title h2 {
            font-size: 18px;
        }
        .badge {
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${l};
            background: color-mix(in oklab, ${a} 10%, transparent);
            color: ${t};
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.4px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            color: ${d};
            margin-top: 6px;
        }
        .links a {
            color: ${d};
        }
        .links a:hover {
            color: ${a};
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            margin-top: 6px;
        }
        .step {
            display: grid;
            justify-items: center;
            gap: 6px;
        }
        .step .dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid ${l};
            background: transparent;
        }
        .step.done .dot {
            background: ${a};
            border-color: ${a};
        }
        .step .label {
            font-size: 12px;
            color: ${d};
        }

        /* info row */
        .rowInfo {
            display: grid;
            gap: 16px;
            margin-top: 12px;
        }
        @media (min-width: 900px) {
            .rowInfo {
                grid-template-columns: 2fr 1fr;
            }
        }
        .info {
            display: grid;
            gap: 10px;
        }
        .info .k {
            color: ${d};
            width: 110px;
            display: inline-block;
        }
        .info .v {
            color: ${t};
        }
        .policy {
            border: 1px dashed ${l};
            border-radius: 12px;
            padding: 12px;
        }
        .policy h4 {
            font-size: 14px;
            margin-bottom: 6px;
        }

        /* items table */
        .tableWrap {
            overflow: auto;
            margin-top: 8px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            background: ${j};
            color: ${a};
            position: sticky;
            top: 0;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${l};
        }
        td.num,
        th.num {
            text-align: right;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        /* totals + notes */
        .grid2 {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            margin-top: 16px;
        }
        @media (min-width: 900px) {
            .grid2 {
                grid-template-columns: 1fr 1fr;
            }
        }

        .totals {
            display: grid;
            gap: 8px;
        }
        .totals > div {
            display: flex;
            justify-content: space-between;
        }
        .totals .grand {
            margin-top: 6px;
            font-weight: 700;
        }

        .mini {
            margin-top: 8px;
            color: ${d};
            font-size: 12px;
        }

        /* sidebar */
        .customer .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-top: 8px;
        }
        .customer .k {
            color: ${d};
            font-size: 12px;
        }
        .customer .v {
            color: ${t};
        }
        .addr {
            margin-top: 10px;
        }
        .addr .k {
            color: ${d};
            font-size: 12px;
            margin-bottom: 3px;
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
            background: ${a};
            border: 1px solid ${l};
        }
        .timeline .muted {
            color: ${d};
            font-size: 12px;
        }

        .files {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .files a {
            color: ${t};
        }
        .files a:hover {
            color: ${a};
        }
        .files .muted {
            color: ${d};
            margin-left: 8px;
        }

        .summary {
            display: grid;
            gap: 8px;
            margin-top: 8px;
        }
        .summary > div {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px;
        }
        .summary .k {
            color: ${d};
        }
        .summary .v {
            color: ${t};
        }
    `,Overlay:u.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:u.div`
        width: min(520px, 92vw);
        border-radius: ${$};
        border: 1px solid ${l};
        background: ${j};
        color: ${t};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${l};
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
            border-top: 1px solid ${l};
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${l};
            background: ${j};
            color: ${t};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover,
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${y};
        }
    `},x=(o,h)=>{const i=o instanceof Date?o:new Date(o),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=v=>String(v).padStart(2,"0"),p=`${s[i.getDay()]} ${m[i.getMonth()]} ${n(i.getDate())} ${i.getFullYear()}`;return h?`${p} ${n(i.getHours())}:${n(i.getMinutes())}:${n(i.getSeconds())}hrs`:p},A=({open:o,title:h,children:i,onClose:s,onConfirm:m,confirmText:n="OK"})=>o?e.jsx(g.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:s,children:e.jsxs(g.Modal,{className:"card",onMouseDown:p=>p.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:h})}),e.jsx("div",{className:"body",children:i}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:s,children:"Close"}),e.jsx("button",{className:"btnPrimary",onClick:m,children:n})]})]})}):null,D=()=>{const{returnId:o}=w(),h=R(),i=f.useRef(null),s=f.useMemo(()=>({id:o||"RET-49021",rma:"RMA-87432",createdAt:"2025-10-04T10:15:14+05:30",updatedAt:"2025-10-04T13:41:09+05:30",status:"Approved",reasonSummary:"Wrong item received; customer opted for refund.",method:"Courier Pickup",warehouse:"WH-NCR-01",order:{id:"ORD-3456"},invoice:{id:"INV-2031"},customer:{id:"CUST-1001",name:"Aarav Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210"},addresses:{shipping:{line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"}},items:[{id:"ITEM-01",sku:"MED-AMOX-500",name:"Amoxicillin 500mg Capsules",batch:"AMX0925A",expiry:"2027-02-28",qtyReturn:2,unitPrice:"₹180.00",refundSubtotal:"₹360.00",reason:"Wrong item",condition:"Sealed",restock:"Eligible"},{id:"ITEM-02",sku:"MED-PARA-650",name:"Paracetamol 650mg Tablets",batch:"PARA1125B",expiry:"2026-11-30",qtyReturn:1,unitPrice:"₹90.00",refundSubtotal:"₹90.00",reason:"Damaged box",condition:"Sealed",restock:"Eligible"}],totals:{subtotal:"₹450.00",tax:"₹0.00",shippingRefund:"₹0.00",adjustment:"₹-10.00",grandTotal:"₹440.00"},attachments:[{id:"F-1",name:"delivery-photo.jpg",size:"248 KB"},{id:"F-2",name:"customer-note.pdf",size:"92 KB"}],activity:[{id:"A-1",title:"Return created",time:"2025-10-04T10:15:14+05:30"},{id:"A-2",title:"RMA assigned (RMA-87432)",time:"2025-10-04T10:16:01+05:30"},{id:"A-3",title:"Return approved",time:"2025-10-04T12:10:45+05:30"}],notes:"Pickup scheduled for next working day between 11:00–16:00hrs.",policy:"Returns accepted within 7 days of delivery for sealed medicines only. Temperature-controlled items are non-returnable."}),[o]),[m,n]=f.useState(!1),p=()=>{i.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},v=r=>{const N=["Requested","Approved","Received","Refunded"].indexOf(r);return N===-1?0:N},k=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(c,{to:"/sales",children:"Sales"}),e.jsx("span",{children:"/"}),e.jsx(c,{to:"/sales/returns",children:"Returns"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.id})]});return e.jsxs(g.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(g.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Sales Return"}),k,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["RMA: ",e.jsx("strong",{children:s.rma})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",x(s.createdAt,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",x(s.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>h("/sales/returns"),title:"Back to returns",children:"Back"}),e.jsx("a",{className:"btnGhost",href:"#",onClick:r=>r.preventDefault(),title:"Download PDF",children:"Download"}),e.jsx("button",{className:"btnGhost",onClick:p,title:"Print",children:"Print"}),e.jsx("button",{className:"btnDisabled",onClick:()=>n(!0),title:"Demo only",children:"Approve"}),e.jsx("button",{className:"btnDisabled",onClick:()=>n(!0),title:"Demo only",children:"Mark Received"}),e.jsx("button",{className:"btnDisabled",onClick:()=>n(!0),title:"Demo only",children:"Refund"})]})]}),e.jsxs(g.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"rowTop",children:[e.jsxs("div",{className:"identity",children:[e.jsxs("div",{className:"title",children:[e.jsx("h2",{children:s.id}),e.jsx("span",{className:`badge ${s.status.toLowerCase()}`,children:s.status})]}),e.jsxs("div",{className:"links",children:[e.jsxs("span",{children:["Order: ",e.jsx(c,{to:`/orders/${s.order.id}`,children:s.order.id})]}),e.jsxs("span",{children:["Invoice: ",e.jsx(c,{to:`/invoices/${s.invoice.id}`,children:s.invoice.id})]}),e.jsxs("span",{children:["Customer: ",e.jsx(c,{to:`/customers/${s.customer.id}`,children:s.customer.name})]})]})]}),e.jsx("div",{className:"steps",children:["Requested","Approved","Received","Refunded"].map((r,b)=>e.jsxs("div",{className:`step ${b<=v(s.status)?"done":""}`,children:[e.jsx("div",{className:"dot"}),e.jsx("div",{className:"label",children:r})]},r))})]}),e.jsxs("div",{className:"rowInfo",children:[e.jsxs("div",{className:"info",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Method"}),e.jsx("span",{className:"v",children:s.method})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Warehouse"}),e.jsx("span",{className:"v",children:s.warehouse})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Summary"}),e.jsx("span",{className:"v",children:s.reasonSummary})]})]}),e.jsxs("div",{className:"policy",children:[e.jsx("h4",{children:"Return Policy"}),e.jsx("p",{children:s.policy})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Items"}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Product"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{className:"num",children:"Unit Price"}),e.jsx("th",{className:"num",children:"Refund"}),e.jsx("th",{children:"Reason"}),e.jsx("th",{children:"Condition"}),e.jsx("th",{children:"Restock"})]})}),e.jsx("tbody",{children:s.items.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(c,{to:`/products/${r.sku}`,children:r.sku})}),e.jsx("td",{children:r.name}),e.jsx("td",{children:r.batch}),e.jsx("td",{children:x(r.expiry)}),e.jsx("td",{className:"num",children:r.qtyReturn}),e.jsx("td",{className:"num",children:r.unitPrice}),e.jsx("td",{className:"num",children:r.refundSubtotal}),e.jsx("td",{children:r.reason}),e.jsx("td",{children:r.condition}),e.jsx("td",{children:r.restock})]},r.id))})]})})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Totals"}),e.jsxs("div",{className:"totals",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Subtotal"}),e.jsx("span",{children:s.totals.subtotal})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Tax"}),e.jsx("span",{children:s.totals.tax})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Shipping Refund"}),e.jsx("span",{children:s.totals.shippingRefund})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Adjustment"}),e.jsx("span",{children:s.totals.adjustment})]}),e.jsxs("div",{className:"grand",children:[e.jsx("span",{children:"Total Refund"}),e.jsx("span",{children:s.totals.grandTotal})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Notes"}),e.jsx("p",{children:s.notes}),e.jsxs("div",{className:"mini",children:["Last update: ",x(s.updatedAt,!0)]})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Customer"}),e.jsxs("div",{className:"customer",children:[e.jsx("div",{className:"name",children:e.jsx(c,{to:`/customers/${s.customer.id}`,children:s.customer.name})}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:s.customer.email})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:s.customer.phone})]})]}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{className:"k",children:"Ship To"}),e.jsxs("div",{className:"v",children:[s.addresses.shipping.line1,", ",s.addresses.shipping.line2,e.jsx("br",{}),s.addresses.shipping.city," ",s.addresses.shipping.zip,", ",s.addresses.shipping.state,e.jsx("br",{}),s.addresses.shipping.country]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsx("ul",{className:"timeline",children:s.activity.map(r=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:r.title}),e.jsx("div",{className:"muted",children:x(r.time,!0)})]})]},r.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("ul",{className:"files",children:s.attachments.map(r=>e.jsxs("li",{children:[e.jsx("a",{href:"#",onClick:b=>b.preventDefault(),children:r.name}),e.jsx("span",{className:"muted",children:r.size})]},r.id))})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:i,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"summary",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Return"}),e.jsx("span",{className:"v",children:s.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"RMA"}),e.jsx("span",{className:"v",children:s.rma})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:s.status})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Order"}),e.jsx("span",{className:"v",children:s.order.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Invoice"}),e.jsx("span",{className:"v",children:s.invoice.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:s.customer.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Total Refund"}),e.jsx("span",{className:"v",children:s.totals.grandTotal})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:x(s.createdAt,!0)})]})]})]})]})]}),e.jsx(A,{open:m,title:"Demo mode",onClose:()=>n(!1),onConfirm:()=>n(!1),children:e.jsx("p",{children:"These actions are shown for design preview and are disabled in the demo."})})]})};export{D as default};
