import{d as m,q as B,u as M,r as p,j as s,N as f}from"./index-Dvs-eF3B.js";const n="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",u="var(--card, #111318)",i="var(--border, #23262d)",r="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",g="var(--danger, #ef4444)",$="var(--radius, 14px)",j={Page:m.div`
        padding: 20px;
        color: ${n};
    `,Header:m.header`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${o};
            }
            .current {
                color: ${n};
            }
        }
        .meta {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            flex-wrap: wrap;
            &.muted {
                color: ${o};
                font-size: 12px;
            }
            .badge {
                padding: 2px 8px;
                border: 1px solid ${i};
                border-radius: 999px;
                font-weight: 600;
                &.paid {
                    color: ${n};
                    background: color-mix(in oklab, ${r} 14%, transparent);
                    border-color: ${r};
                }
                &.unpaid {
                    color: ${n};
                    background: color-mix(in oklab, ${g} 12%, transparent);
                    border-color: ${g};
                }
                &.partially {
                    color: ${n};
                    background: color-mix(in oklab, ${r} 10%, transparent);
                    border-color: ${r};
                }
                &.cancelled {
                    color: ${o};
                }
            }
        }
        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${u};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnDanger {
            border-color: ${g};
            color: ${g};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${g} 10%, transparent);
        }
    `,Banner:m.div`
        margin: 10px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${i};
        border-radius: 10px;
        background: color-mix(in oklab, ${r} 10%, transparent);
        color: ${n};
    `,Grid:m.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }

        .col.main .card,
        .col.side .card {
            padding: 16px 18px;
        }

        .card {
            background: ${u};
            border: 1px solid ${i};
            border-radius: ${$};
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        .split.two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr 1fr;
            margin-bottom: 12px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .kv {
            display: grid;
            gap: 8px;
            > div {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 10px;
            }
            .k {
                color: ${o};
            }
            .v {
                color: ${n};
            }
        }

        .addr {
            font-style: normal;
            border: 1px solid ${i};
            border-radius: 10px;
            padding: 10px 12px;
            background: color-mix(in oklab, ${u} 96%, transparent);
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${i};
            border-radius: 10px;
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            min-width: 980px;
        }
        table.items thead th {
            position: sticky;
            top: 0;
            background: ${u};
            border-bottom: 1px solid ${i};
            text-align: left;
            padding: 10px;
            color: ${r};
            z-index: 1;
        }
        table.items tbody td {
            padding: 10px;
            border-bottom: 1px solid ${i};
        }
        table.items tbody tr:hover {
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }

        .notes {
            margin-top: 14px;
        }
        .notes p {
            color: ${n};
            margin-bottom: 10px;
        }
        .notes h3 {
            margin-top: 4px;
        }

        .totals .summary {
            display: grid;
            gap: 8px;
            > div {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 12px;
            }
            .k {
                color: ${o};
            }
            .v {
                color: ${n};
            }
            .grand {
                padding-top: 8px;
                border-top: 1px solid ${i};
                font-weight: 700;
            }
        }

        .tax {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .tax li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
        }
        .tax .num {
            text-align: right;
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .files a {
            color: ${n};
            border: 1px solid ${i};
            padding: 8px 10px;
            border-radius: 8px;
            display: inline-block;
        }
        .files a:hover {
            color: ${r};
            border-color: ${r};
        }
        .files .size {
            color: ${o};
            margin-left: 8px;
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
            color: ${o};
            font-size: 12px;
        }

        .print {
            display: grid;
            gap: 8px;
        }
        .print > div {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 12px;
        }
        .print .k {
            color: ${o};
        }
    `,Overlay:m.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:m.div`
        width: min(520px, 92vw);
        border-radius: ${$};
        border: 1px solid ${i};
        background: ${u};
        color: ${n};
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
            background: ${u};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${k};
        }
    `},d=(c,b=!1)=>{const l=c instanceof Date?c:new Date(c),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=v=>String(v).padStart(2,"0"),h=`${x[l.getDay()]} ${e[l.getMonth()]} ${t(l.getDate())} ${l.getFullYear()}`;return b?`${h} ${t(l.getHours())}:${t(l.getMinutes())}:${t(l.getSeconds())}hrs`:h},O=({open:c,title:b,message:l,onClose:x})=>c?s.jsx(j.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:x,children:s.jsxs(j.Modal,{className:"card",onMouseDown:e=>e.stopPropagation(),children:[s.jsx("header",{children:s.jsx("h4",{children:b})}),s.jsx("div",{className:"body",children:s.jsx("p",{children:l})}),s.jsx("footer",{children:s.jsx("button",{className:"btnPrimary",onClick:x,children:"OK"})})]})}):null,I=()=>{const{poId:c}=B(),b=M(),l=p.useRef(null),x=p.useMemo(()=>new Date,[]),e=p.useMemo(()=>({poId:c||"PO-2025-0042",billNo:"BILL-77821",status:"Unpaid",currency:"INR",poDate:"2025-10-03T11:15:12+05:30",billDate:"2025-10-04T09:30:22+05:30",dueDate:"2025-10-18T23:59:59+05:30",expectedDate:"2025-10-07T00:00:00+05:30",terms:"Net 14, GRN required, no partial returns without RMA.",vendor:{id:"VEND-0093",name:"Medisphere Pharmaceuticals Pvt. Ltd.",gstin:"07ABCDM1234K1ZP",pan:"ABCDM1234K",email:"ap@medisphere.example.com",phone:"+91 98100 22233",contact:"Sanya Gupta"},billingAddress:{line1:"21, Connaught Place",line2:"Block D",city:"New Delhi",state:"DL",zip:"110001",country:"India"},shippingAddress:{line1:"Warehouse A, Plot 14",line2:"Udyog Vihar, Phase 1",city:"Gurugram",state:"HR",zip:"122016",country:"India"},items:[{sku:"MED-AMOX-500",name:"Amoxicillin 500mg Capsules",hsn:"3004",batch:"AXL25B",expiry:"2027-06-30",qty:"120",unit:"Box",mrp:"₹1,200.00",rate:"₹820.00",discount:"5%",tax:"12%",taxAmt:"₹9,840.00",lineTotal:"₹98,280.00"},{sku:"MED-PARA-650",name:"Paracetamol 650mg Tablets",hsn:"3004",batch:"PCM65Z",expiry:"2026-12-31",qty:"200",unit:"Bottle",mrp:"₹450.00",rate:"₹310.00",discount:"0%",tax:"5%",taxAmt:"₹3,100.00",lineTotal:"₹62,000.00"},{sku:"MED-ORS-20",name:"ORS Sachet 20g (Orange)",hsn:"3004",batch:"ORS20O",expiry:"2026-03-31",qty:"500",unit:"Sachet",mrp:"₹18.00",rate:"₹12.00",discount:"0%",tax:"12%",taxAmt:"₹7,200.00",lineTotal:"₹60,000.00"}],charges:{subTotal:"₹2,20,280.00",discount:"₹4,114.00",freight:"₹1,250.00",taxTotal:"₹20,140.00",roundOff:"₹0.00",grandTotal:"₹2,37,556.00"},taxBreakup:[{code:"CGST",rate:"6%",amount:"₹10,070.00"},{code:"SGST",rate:"6%",amount:"₹10,070.00"},{code:"IGST",rate:"0%",amount:"₹0.00"}],attachments:[{name:"Supplier Bill (scan).pdf",url:"/files/bill-77821.pdf",size:"325 KB"},{name:"Packing List.pdf",url:"/files/packing-77821.pdf",size:"112 KB"}],notes:"Ensure temperature-controlled storage for antibiotics. Report shortages within 24 hours.",activity:[{title:"Bill created",at:"2025-10-04T09:30:22+05:30",by:"System"},{title:"PO acknowledged by vendor",at:"2025-10-03T12:02:11+05:30",by:"Medisphere"},{title:"PO approved",at:"2025-10-03T11:42:55+05:30",by:"A. Ranjan"}]}),[c]),[t,h]=p.useState(""),[v,y]=p.useState(!1),[w,D]=p.useState("");p.useEffect(()=>{let a;return t&&(a=setTimeout(()=>h(""),3200)),()=>a&&clearTimeout(a)},[t]);const P=async()=>{try{await navigator.clipboard.writeText(window.location.href),h("Link copied to clipboard.")}catch{h("Unable to copy link.")}},N=(a="This is a display-only build. Action is unavailable.")=>{D(a),y(!0)},A=()=>{l.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},T=s.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[s.jsx(f,{to:"/purchase-orders",children:"Purchase Orders"}),s.jsx("span",{children:"/"}),s.jsx(f,{to:`/purchase-orders/${e.poId}`,children:e.poId}),s.jsx("span",{children:"/"}),s.jsx("span",{className:"current",children:"Bill"})]});return s.jsxs(j.Page,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs(j.Header,{className:"card",children:[s.jsxs("div",{className:"left",children:[s.jsx("h1",{children:"Supplier Bill"}),T,s.jsxs("div",{className:"meta",children:[s.jsxs("span",{children:["PO: ",s.jsx("strong",{children:e.poId})]}),s.jsx("span",{children:"•"}),s.jsxs("span",{children:["Bill No: ",s.jsx("strong",{children:e.billNo})]}),s.jsx("span",{children:"•"}),s.jsxs("span",{children:["Status: ",s.jsx("span",{className:`badge ${e.status.toLowerCase()}`,children:e.status})]})]}),s.jsxs("div",{className:"meta muted",children:[s.jsxs("span",{children:["PO Date: ",d(e.poDate)]}),s.jsx("span",{children:"•"}),s.jsxs("span",{children:["Bill Date: ",d(e.billDate,!0)]}),s.jsx("span",{children:"•"}),s.jsxs("span",{children:["Due: ",d(e.dueDate)]})]})]}),s.jsxs("div",{className:"right actions",children:[s.jsx("button",{className:"btnGhost",onClick:()=>b(`/purchase-orders/${e.poId}`),children:"Back to PO"}),s.jsx("button",{className:"btnGhost",onClick:P,title:"Copy share link",children:"Copy Link"}),s.jsx("button",{className:"btnPrimary",onClick:A,title:"Print bill",children:"Print"}),s.jsx("button",{className:"btnGhost",onClick:()=>N("Export disabled in display-only build."),title:"Export PDF",children:"Export PDF"}),s.jsx("button",{className:"btnDanger",onClick:()=>N("Payments are disabled in display-only build."),title:"Mark as Paid",children:"Mark as Paid"}),s.jsx("button",{className:"btnGhost",onClick:()=>N("Emailing is disabled in display-only build."),title:"Email to AP",children:"Email"})]})]}),t?s.jsx(j.Banner,{role:"status","aria-live":"polite",children:t}):null,s.jsxs(j.Grid,{children:[s.jsxs("section",{className:"col main",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"split two",children:[s.jsxs("div",{children:[s.jsx("h3",{children:"Vendor"}),s.jsxs("div",{className:"kv",children:[s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Name"}),s.jsx("span",{className:"v",children:e.vendor.name})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Contact"}),s.jsxs("span",{className:"v",children:[e.vendor.contact," (",e.vendor.phone,")"]})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Email"}),s.jsx("span",{className:"v",children:e.vendor.email})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"GSTIN"}),s.jsx("span",{className:"v",children:e.vendor.gstin})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"PAN"}),s.jsx("span",{className:"v",children:e.vendor.pan})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"Bill Info"}),s.jsxs("div",{className:"kv",children:[s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Bill No"}),s.jsx("span",{className:"v",children:e.billNo})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Currency"}),s.jsx("span",{className:"v",children:e.currency})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"PO Date"}),s.jsx("span",{className:"v",children:d(e.poDate)})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Bill Date"}),s.jsx("span",{className:"v",children:d(e.billDate,!0)})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Due Date"}),s.jsx("span",{className:"v",children:d(e.dueDate)})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Expected"}),s.jsx("span",{className:"v",children:d(e.expectedDate)})]})]})]})]}),s.jsxs("div",{className:"split two",children:[s.jsxs("div",{children:[s.jsx("h3",{children:"Billing Address"}),s.jsxs("address",{className:"addr",children:[e.billingAddress.line1,s.jsx("br",{}),e.billingAddress.line2,s.jsx("br",{}),e.billingAddress.city," ",e.billingAddress.zip,s.jsx("br",{}),e.billingAddress.state,", ",e.billingAddress.country]})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"Shipping Address"}),s.jsxs("address",{className:"addr",children:[e.shippingAddress.line1,s.jsx("br",{}),e.shippingAddress.line2,s.jsx("br",{}),e.shippingAddress.city," ",e.shippingAddress.zip,s.jsx("br",{}),e.shippingAddress.state,", ",e.shippingAddress.country]})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"tableWrap",children:s.jsxs("table",{className:"items",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"SKU"}),s.jsx("th",{children:"Item"}),s.jsx("th",{children:"HSN"}),s.jsx("th",{children:"Batch"}),s.jsx("th",{children:"Expiry"}),s.jsx("th",{className:"num",children:"Qty"}),s.jsx("th",{children:"Unit"}),s.jsx("th",{className:"num",children:"MRP"}),s.jsx("th",{className:"num",children:"Rate"}),s.jsx("th",{className:"num",children:"Disc"}),s.jsx("th",{className:"num",children:"Tax %"}),s.jsx("th",{className:"num",children:"Tax Amt"}),s.jsx("th",{className:"num",children:"Line Total"})]})}),s.jsx("tbody",{children:e.items.map(a=>s.jsxs("tr",{children:[s.jsx("td",{children:a.sku}),s.jsx("td",{children:a.name}),s.jsx("td",{children:a.hsn}),s.jsx("td",{children:a.batch}),s.jsx("td",{children:d(a.expiry)}),s.jsx("td",{className:"num",children:a.qty}),s.jsx("td",{children:a.unit}),s.jsx("td",{className:"num",children:a.mrp}),s.jsx("td",{className:"num",children:a.rate}),s.jsx("td",{className:"num",children:a.discount}),s.jsx("td",{className:"num",children:a.tax}),s.jsx("td",{className:"num",children:a.taxAmt}),s.jsx("td",{className:"num",children:a.lineTotal})]},a.sku))})]})}),s.jsxs("div",{className:"notes",children:[s.jsx("h3",{children:"Notes"}),s.jsx("p",{children:e.notes}),s.jsx("h3",{children:"Terms"}),s.jsx("p",{children:e.terms})]})]})]}),s.jsxs("aside",{className:"col side",children:[s.jsxs("div",{className:"card totals",children:[s.jsx("h3",{children:"Totals"}),s.jsxs("div",{className:"summary",children:[s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Subtotal"}),s.jsx("span",{className:"v",children:e.charges.subTotal})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Discount"}),s.jsx("span",{className:"v",children:e.charges.discount})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Freight"}),s.jsx("span",{className:"v",children:e.charges.freight})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Tax"}),s.jsx("span",{className:"v",children:e.charges.taxTotal})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Round Off"}),s.jsx("span",{className:"v",children:e.charges.roundOff})]}),s.jsxs("div",{className:"grand",children:[s.jsx("span",{className:"k",children:"Grand Total"}),s.jsx("span",{className:"v",children:e.charges.grandTotal})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Tax Breakdown"}),s.jsx("ul",{className:"tax",children:e.taxBreakup.map(a=>s.jsxs("li",{children:[s.jsxs("span",{children:[a.code," (",a.rate,")"]}),s.jsx("span",{className:"num",children:a.amount})]},a.code))})]}),s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Attachments"}),s.jsx("ul",{className:"files",children:e.attachments.map(a=>s.jsxs("li",{children:[s.jsx("a",{href:a.url,download:!0,children:a.name}),s.jsx("span",{className:"size",children:a.size})]},a.name))})]}),s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Activity"}),s.jsxs("ul",{className:"timeline",children:[e.activity.map((a,S)=>s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:a.title}),s.jsxs("div",{className:"muted",children:[d(a.at,!0)," • ",a.by]})]})]},S)),s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Viewed"}),s.jsxs("div",{className:"muted",children:[d(x,!0)," • You"]})]})]})]})]}),s.jsxs("div",{className:"card",id:"search-print-area",ref:l,children:[s.jsx("h3",{children:"Print Snapshot"}),s.jsxs("div",{className:"print",children:[s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"PO"}),s.jsx("span",{className:"v",children:e.poId})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Bill No"}),s.jsx("span",{className:"v",children:e.billNo})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Vendor"}),s.jsx("span",{className:"v",children:e.vendor.name})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Bill Date"}),s.jsx("span",{className:"v",children:d(e.billDate,!0)})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Due"}),s.jsx("span",{className:"v",children:d(e.dueDate)})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Total"}),s.jsx("span",{className:"v",children:e.charges.grandTotal})]})]})]})]})]}),s.jsx(O,{open:v,title:"Action Unavailable",message:w,onClose:()=>y(!1)})]})};export{I as default};
