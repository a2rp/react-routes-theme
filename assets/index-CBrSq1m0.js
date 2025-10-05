import{d as j,u as L,r as g,j as e,N}from"./index-oZLsTwJy.js";const m="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",u="var(--card, #111318)",n="var(--border, #23262d)",t="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",w="var(--radius, 16px)",b={Page:j.div`
        padding: 24px 0 72px;
        color: ${m};
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
        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${o};
        }
        .breadcrumbs .current {
            color: ${m};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${o};
            font-size: 12px;
        }

        .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${u};
            color: ${m};
            font-weight: 600;
            transition: 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Grid:j.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1020px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .panel {
            border: 1px solid ${n};
            border-radius: ${w};
            background: ${u};
            padding: 14px 14px;
            margin-bottom: 16px;
        }
        .panel h3 {
            font-size: 15px;
            margin-bottom: 10px;
        }

        .row {
            display: grid;
            gap: 16px;
            margin-bottom: 12px;
        }
        .row.two {
            grid-template-columns: 1fr;
        }
        .row.three {
            grid-template-columns: 1fr;
        }
        @media (min-width: 980px) {
            .row.two {
                grid-template-columns: 1fr 1fr;
            }
            .row.three {
                grid-template-columns: repeat(3, 1fr);
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
            background: ${u};
            border: 1px solid ${n};
            color: ${m};
            padding: 8px 10px;
            border-radius: 8px;
            transition: 0.25s;
        }
        input:focus,
        select:focus,
        textarea:focus {
            border-color: ${t};
            box-shadow: 0 0 0 3px ${f};
            outline: none;
        }

        .withBadge {
            position: relative;
        }
        .badgeLink {
            position: absolute;
            right: 6px;
            top: 50%;
            transform: translateY(-50%);
            border: 1px solid ${n};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            color: ${o};
            background: ${u};
        }
        .badgeLink:hover {
            border-color: ${t};
            color: ${t};
        }

        .sub {
            padding: 12px 12px;
        }
        .addr {
            line-height: 1.9;
        }
        .addr .muted {
            color: ${o};
        }

        .tableHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .tableHeader .actions {
            display: flex;
            gap: 8px;
        }
        .tableWrap {
            overflow: auto;
            border: 1px solid ${n};
            border-radius: ${w};
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            background: ${u};
            color: ${t};
            position: sticky;
            top: 0;
            border-bottom: 1px solid ${n};
            padding: 10px;
        }
        tbody td {
            border-bottom: 1px solid ${n};
            padding: 10px;
        }
        .num {
            text-align: right;
        }
        .strong {
            font-weight: 700;
        }
        .title {
            font-weight: 600;
        }
        .tiny {
            font-size: 12px;
        }

        .notesWrap {
            margin-top: 12px;
        }
        .notesWrap textarea {
            min-height: 88px;
        }

        .side {
            display: grid;
            gap: 16px;
        }

        .summary {
            display: grid;
            gap: 10px;
        }
        .summary > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .summary .grand {
            padding-top: 6px;
            margin-top: 6px;
            border-top: 1px solid ${n};
            font-size: 15px;
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .steps li {
            text-align: center;
            border: 1px solid ${n};
            padding: 8px 6px;
            border-radius: 8px;
            color: ${o};
            background: ${u};
        }
        .steps li.active {
            color: ${t};
            border-color: ${t};
            box-shadow: 0 0 0 3px ${f};
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${t} 8%, transparent);
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
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${t};
            border: 1px solid ${n};
            margin-top: 6px;
        }
        .timeline .tiny {
            font-size: 12px;
            color: ${o};
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
            color: ${m};
        }
    `,DemoBar:j.div`
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 8px 14px;
        text-align: center;
        border-top: 1px solid ${n};
        background: color-mix(in oklab, ${t} 10%, transparent);
        color: ${m};
        z-index: 30;
    `},x=a=>String(a).padStart(2,"0"),O=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=a=>{const r=a instanceof Date?a:new Date(a);return`${O[r.getDay()]} ${A[r.getMonth()]} ${x(r.getDate())} ${r.getFullYear()}`},y=a=>{const r=a instanceof Date?a:new Date(a);return`${v(r)} ${x(r.getHours())}:${x(r.getMinutes())}:${x(r.getSeconds())}hrs`},C=a=>{const r=a instanceof Date?a:new Date(a);return`${x(r.getHours())}:${x(r.getMinutes())}:${x(r.getSeconds())}hrs`},$=!0,H=()=>{const a=L(),r=g.useRef(null),h=g.useMemo(()=>new Date,[]),[s,S]=g.useState({customerId:"CUST-1001",customerName:"Aarav Sharma",orderDate:h.toISOString().slice(0,10),warehouse:"WH-DEL-01",priceList:"PL-STD-2025",paymentTerm:"Net 15",shippingMethod:"Surface",salesperson:"USR-009 | Roshni",notes:"Monthly bulk purchase. Leave package at gate if not available.",tags:["priority","wholesale","north"]}),[D]=g.useState([{id:"MED-AMOX-500",name:"Amoxicillin 500mg",sku:"MED-AMOX-500",batch:"AMX0925A",exp:"2026-02-28",qty:2,unit:"box",mrp:480,net:420,tax:5,lineTotal:840},{id:"MED-PARA-650",name:"Paracetamol 650mg",sku:"MED-PARA-650",batch:"PAR0825D",exp:"2027-08-31",qty:3,unit:"box",mrp:320,net:285,tax:12,lineTotal:855},{id:"MED-ORS-200",name:"ORS Powder 200ml",sku:"MED-ORS-200",batch:"ORS0725B",exp:"2026-11-30",qty:5,unit:"pkt",mrp:45,net:40,tax:12,lineTotal:200}]),c={subtotal:1895,discount:95,tax:146.3,shipping:60,roundoff:-.3,grand:2006},d={line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India",gstin:"22ABCDE1234F1Z5",pan:"ABCDE1234F"},p={line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India",contact:"+91 98765 43210"},l=i=>{const{name:M,value:T}=i.target;S(P=>({...P,[M]:T}))},k=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(b.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(b.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"New Order"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(N,{to:"/sales",children:"Sales"}),e.jsx("span",{children:"/"}),e.jsx(N,{to:"/orders",children:"Orders"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"New"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Today: ",v(h)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",y(h)]})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",onClick:()=>a("/orders"),title:"Back to orders",children:"Cancel"}),e.jsx("button",{className:"btnPrimary",disabled:$,title:"Disabled in demo",children:"Save Draft"}),e.jsx("button",{className:"btnPrimary",disabled:$,title:"Disabled in demo",children:"Create Order"}),e.jsx("button",{className:"btnGhost",onClick:k,title:"Print summary",children:"Print"})]})]}),e.jsxs(b.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"row two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Customer"}),e.jsxs("div",{className:"withBadge",children:[e.jsxs("select",{name:"customerId",value:s.customerId,onChange:l,"aria-label":"Customer",children:[e.jsx("option",{value:"CUST-1001",children:"CUST-1001 · Aarav Sharma"}),e.jsx("option",{value:"CUST-1002",children:"CUST-1002 · Neha Verma"}),e.jsx("option",{value:"CUST-1003",children:"CUST-1003 · Bluewave Traders"})]}),e.jsx(N,{className:"badgeLink",to:`/customers/${s.customerId}`,title:"Open customer",children:"View"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Order Date"}),e.jsx("input",{type:"date",name:"orderDate",value:s.orderDate,onChange:l})]})]}),e.jsxs("div",{className:"row three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Warehouse"}),e.jsxs("select",{name:"warehouse",value:s.warehouse,onChange:l,children:[e.jsx("option",{value:"WH-DEL-01",children:"Delhi · WH-DEL-01"}),e.jsx("option",{value:"WH-MUM-01",children:"Mumbai · WH-MUM-01"}),e.jsx("option",{value:"WH-BLR-02",children:"Bengaluru · WH-BLR-02"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Price List"}),e.jsxs("select",{name:"priceList",value:s.priceList,onChange:l,children:[e.jsx("option",{value:"PL-STD-2025",children:"Standard · PL-STD-2025"}),e.jsx("option",{value:"PL-HOSP-2025",children:"Hospital · PL-HOSP-2025"}),e.jsx("option",{value:"PL-WHOL-2025",children:"Wholesale · PL-WHOL-2025"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Salesperson"}),e.jsxs("select",{name:"salesperson",value:s.salesperson,onChange:l,children:[e.jsx("option",{children:"USR-009 | Roshni"}),e.jsx("option",{children:"USR-011 | Karan"}),e.jsx("option",{children:"USR-004 | Nidhi"})]})]})]}),e.jsxs("div",{className:"row three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Payment Term"}),e.jsxs("select",{name:"paymentTerm",value:s.paymentTerm,onChange:l,children:[e.jsx("option",{children:"Advance"}),e.jsx("option",{children:"Net 7"}),e.jsx("option",{children:"Net 15"}),e.jsx("option",{children:"Net 30"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Shipping Method"}),e.jsxs("select",{name:"shippingMethod",value:s.shippingMethod,onChange:l,children:[e.jsx("option",{children:"Surface"}),e.jsx("option",{children:"Air"}),e.jsx("option",{children:"Express"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Reference #"}),e.jsx("input",{value:"RFQ-2025-091",onChange:()=>{},placeholder:"PO/Ref"})]})]})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Billing Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{children:d.line1}),e.jsx("div",{children:d.line2}),e.jsxs("div",{children:[d.city," - ",d.zip,", ",d.state,", ",d.country]}),e.jsxs("div",{className:"muted",children:["GSTIN: ",d.gstin," • PAN: ",d.pan]})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Shipping Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("div",{children:p.line1}),e.jsx("div",{children:p.line2}),e.jsxs("div",{children:[p.city," - ",p.zip,", ",p.state,", ",p.country]}),e.jsxs("div",{className:"muted",children:["Contact: ",p.contact]})]})]})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"tableHeader",children:[e.jsx("h3",{children:"Items"}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",disabled:!0,title:"Disabled in demo",children:"Add Item"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Disabled in demo",children:"Import CSV"})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"26%"},children:"Item"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{children:"Unit"}),e.jsx("th",{className:"num",children:"Price"}),e.jsx("th",{className:"num",children:"Tax %"}),e.jsx("th",{className:"num",children:"Line Total"})]})}),e.jsx("tbody",{children:D.map(i=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"title",children:i.name}),e.jsx("div",{className:"muted tiny",children:i.id})]}),e.jsx("td",{children:i.sku}),e.jsx("td",{children:i.batch}),e.jsx("td",{children:v(i.exp)}),e.jsx("td",{className:"num",children:i.qty}),e.jsx("td",{children:i.unit}),e.jsxs("td",{className:"num",children:["₹ ",i.net.toFixed(2)]}),e.jsxs("td",{className:"num",children:[i.tax,"%"]}),e.jsxs("td",{className:"num strong",children:["₹ ",i.lineTotal.toFixed(2)]})]},i.id))})]})}),e.jsxs("div",{className:"notesWrap",children:[e.jsx("label",{children:"Order Notes"}),e.jsx("textarea",{rows:4,value:s.notes,onChange:l,name:"notes",placeholder:"Instructions for packing, delivery windows, etc."})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Order Summary"}),e.jsxs("div",{className:"summary",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Subtotal"}),e.jsxs("strong",{children:["₹ ",c.subtotal.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Discount"}),e.jsxs("strong",{children:["- ₹ ",c.discount.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Tax"}),e.jsxs("strong",{children:["₹ ",c.tax.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Shipping"}),e.jsxs("strong",{children:["₹ ",c.shipping.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Round-off"}),e.jsxs("strong",{children:["- ","₹ ",Math.abs(c.roundoff).toFixed(2)]})]}),e.jsxs("div",{className:"grand",children:[e.jsx("span",{children:"Grand Total"}),e.jsxs("strong",{children:["₹ ",c.grand.toFixed(2)]})]})]}),e.jsxs("div",{className:"mini muted",children:["Updated: ",y(h)]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Status"}),e.jsxs("ol",{className:"steps",children:[e.jsx("li",{className:"active",children:"Draft"}),e.jsx("li",{children:"Confirmed"}),e.jsx("li",{children:"Fulfilled"}),e.jsx("li",{children:"Invoiced"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Tags"}),e.jsx("div",{className:"chips",children:s.tags.map(i=>e.jsx("span",{className:"chip",children:i},i))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Order draft created"}),e.jsx("div",{className:"muted tiny",children:y(h)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsxs("strong",{children:["Customer viewed price list ",s.priceList]}),e.jsx("div",{className:"muted tiny",children:C(h)})]})]})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:r,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsxs("span",{className:"v",children:[s.customerName," (",s.customerId,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Order Date"}),e.jsx("span",{className:"v",children:v(s.orderDate)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Warehouse"}),e.jsx("span",{className:"v",children:s.warehouse})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Payment"}),e.jsx("span",{className:"v",children:s.paymentTerm})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Shipping"}),e.jsx("span",{className:"v",children:s.shippingMethod})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Total"}),e.jsxs("span",{className:"v",children:["₹ ",c.grand.toFixed(2)]})]})]})]})]})]}),e.jsx(b.DemoBar,{role:"status","aria-live":"polite",children:"Demo mode: create/save is disabled. Explore the UI freely."})]})};export{H as default};
