import{d as x,r as c,j as e,N as f}from"./index-RFS3WyFt.js";const d="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",m="var(--card, #111318)",n="var(--border, #23262d)",r="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",h={Page:x.div`
        padding: 24px 0 64px;
        color: ${d};
        @media print {
            padding: 0;
        }
    `,Header:x.header`
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
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${l};
        }
        .breadcrumbs .current {
            color: ${d};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${l};
            font-size: 12px;
        }

        .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${m};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }

        @media print {
            /* keep header text, hide print-only buttons if desired via .no-print */
        }
    `,Grid:x.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .docHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 16px;
        }
        .brand {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        .logo {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            font-weight: 800;
            border: 1px solid ${n};
            border-radius: 10px;
            background: ${m};
            color: ${r};
        }
        .brandName {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }

        .docMeta {
            display: grid;
            gap: 8px;
        }
        .docMeta .k {
            color: ${l};
            margin-right: 10px;
            display: inline-block;
            width: 70px;
        }
        .docMeta .v,
        .docMeta .badge {
            color: ${d};
        }
        .badge {
            border: 1px solid ${n};
            border-radius: 999px;
            padding: 2px 10px;
            color: ${r};
            background: color-mix(in oklab, ${r} 10%, transparent);
            font-weight: 700;
            font-size: 12px;
        }

        .pair {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            margin-bottom: 16px;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
        }
        .sub {
            padding: 14px;
        }
        .sub h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .block .title {
            font-weight: 700;
        }

        .kv {
            display: grid;
            gap: 8px;
        }
        .kv .k {
            color: ${l};
        }
        .kv .v {
            color: ${d};
        }
        .kv .total .k,
        .kv .total .v {
            color: ${r};
        }

        .tableWrap {
            border: 1px solid ${n};
            border-radius: 12px;
            overflow: hidden;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            background: ${m};
            color: ${r};
            font-weight: 600;
            padding: 10px;
            position: sticky;
            top: 0;
            z-index: 1;
            border-bottom: 1px solid ${n};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${n};
            color: ${d};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        td.num {
            text-align: right;
        }
        td.mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
        td.strong {
            font-weight: 700;
        }

        details.notes {
            margin-top: 14px;
            border: 1px solid ${n};
            border-radius: 10px;
            padding: 10px 12px;
            background: ${m};
        }
        details.notes > summary {
            cursor: pointer;
            color: ${r};
            font-weight: 600;
        }
        details.notes .muted {
            margin-top: 8px;
        }

        .docFooter {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 18px;
            padding-top: 12px;
            border-top: 1px dashed ${n};
        }

        /* Side cards */
        .printSummary {
            display: grid;
            gap: 10px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 12px;
        }
        .printSummary .k {
            color: ${l};
        }
        .printSummary .v {
            color: ${d};
        }
        .tips ul {
            margin: 0;
            padding-left: 18px;
        }

        /* PRINT OVERRIDES for layout */
        @media print {
            grid-template-columns: 1fr !important;
            .col.side {
                display: block;
            }
            .tableWrap {
                overflow: visible !important;
            }
            thead th {
                position: static !important;
            } /* no sticky in print */
        }
    `},o=a=>String(a).padStart(2,"0"),w=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],$=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=a=>{const i=a instanceof Date?a:new Date(a);return`${w[i.getDay()]} ${$[i.getMonth()]} ${o(i.getDate())} ${i.getFullYear()}`},u=a=>{const i=a instanceof Date?a:new Date(a);return`${p(i)} ${o(i.getHours())}:${o(i.getMinutes())}:${o(i.getSeconds())}hrs`},g=a=>{const i=a instanceof Date?a:new Date(a);return`${o(i.getHours())}:${o(i.getMinutes())}:${o(i.getSeconds())}hrs`},S=()=>{const a=c.useMemo(()=>new Date,[]),i=c.useRef(null),[j,b]=c.useState(!0),s=c.useMemo(()=>({id:"INV-2031",date:a,customer:{code:"CUST-1001",name:"Aarav Sharma",company:"Bluewave Traders",email:"aarav.sharma@example.com",phone:"+91 98765 43210",address:"221B Baker Street, Khan Market, New Delhi 110003, India"},summary:{status:"Paid",subTotal:"₹ 1,58,000.00",tax:"₹ 12,640.00",discount:"₹ 0.00",total:"₹ 1,70,640.00",received:"₹ 1,70,640.00",balance:"₹ 0.00"},items:[{sku:"MED-AMOX-500",title:"Amoxicillin 500 mg (Capsule)",qty:120,price:"₹ 12.00",amount:"₹ 1,440.00"},{sku:"MED-PARA-650",title:"Paracetamol 650 mg (Tablet)",qty:1e3,price:"₹ 2.50",amount:"₹ 2,500.00"},{sku:"MED-AZI-250",title:"Azithromycin 250 mg (Tablet)",qty:600,price:"₹ 10.50",amount:"₹ 6,300.00"},{sku:"MED-ORS-200",title:"ORS 200 ml (Pack of 5)",qty:75,price:"₹ 60.00",amount:"₹ 4,500.00"},{sku:"MED-MULTI-60",title:"Multivitamin 60 caps (Bottle)",qty:240,price:"₹ 180.00",amount:"₹ 43,200.00"},{sku:"MED-D3-60K",title:"Vitamin D3 60K IU (Capsule)",qty:350,price:"₹ 28.00",amount:"₹ 9,800.00"},{sku:"MED-ANTAC-150",title:"Ranitidine 150 mg (Tablet)",qty:900,price:"₹ 1.90",amount:"₹ 1,710.00"},{sku:"MED-COUGH-100",title:"Cough Syrup 100 ml",qty:420,price:"₹ 85.00",amount:"₹ 35,700.00"},{sku:"MED-GLUCO-1KG",title:"Glucose D 1 kg",qty:200,price:"₹ 72.00",amount:"₹ 14,400.00"},{sku:"MED-THERM",title:"Digital Thermometer",qty:50,price:"₹ 230.00",amount:"₹ 11,500.00"}],notes:"Invoice for September cycle bulk order. Preferred communication via email. Attach PDF with e-invoice IRN."}),[a]),v=()=>{document.body.classList.add("print-section-mode");const t=document.getElementById("page-print-area");t&&t.setAttribute("data-print-target","true"),window.onafterprint=()=>{t&&t.removeAttribute("data-print-target"),document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},y=()=>{const t=i.current;t&&(document.body.classList.add("print-section-mode"),t.setAttribute("data-print-target","true"),window.onafterprint=()=>{t.removeAttribute("data-print-target"),document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(h.Page,{id:"page-print-area",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          html, body, #root { height: auto !important; overflow: visible !important; }
          thead { display: table-header-group; } tfoot { display: table-footer-group; }
          thead th { position: static !important; }
          [data-print-grid], [data-print-grid] > * { width: 100% !important; }
          .no-print { display: none !important; }
        }

        /* Section-print mode (works for full page or the summary card) */
        @media print {
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode [data-print-target="true"],
          body.print-section-mode [data-print-target="true"] * { visibility: visible !important; }
          body.print-section-mode [data-print-target="true"] {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(h.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Print Demo"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(f,{to:"/examples",children:"Examples"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Print"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Today: ",p(a)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Now: ",u(a)]})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",onClick:v,title:"Print entire page",children:"Print Page"}),e.jsx("button",{className:"btnPrimary no-print",onClick:y,title:"Print summary card only",children:"Print Summary"})]})]}),e.jsxs(h.Grid,{"data-print-grid":!0,children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("header",{className:"docHeader",children:[e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"logo","aria-hidden":"true",children:"AR"}),e.jsxs("div",{children:[e.jsx("div",{className:"brandName",children:"Ashish Ranjan"}),e.jsx("div",{className:"muted",children:"Demo ERP Theme (Display-only)"})]})]}),e.jsxs("div",{className:"docMeta",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Invoice"}),e.jsx("span",{className:"v",children:s.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Date"}),e.jsx("span",{className:"v",children:p(s.date)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Time"}),e.jsx("span",{className:"v",children:g(s.date)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"badge",children:s.summary.status})]})]})]}),e.jsxs("div",{className:"pair",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Bill To"}),e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"title",children:[s.customer.name," ",e.jsxs("span",{className:"muted",children:["(",s.customer.code,")"]})]}),e.jsx("div",{className:"muted",children:s.customer.company}),e.jsx("div",{className:"muted",children:s.customer.address}),e.jsxs("div",{className:"muted",children:[s.customer.email," · ",s.customer.phone]})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Summary"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Subtotal"}),e.jsx("span",{className:"v",children:s.summary.subTotal})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Tax"}),e.jsx("span",{className:"v",children:s.summary.tax})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Discount"}),e.jsx("span",{className:"v",children:s.summary.discount})]}),e.jsxs("div",{className:"total",children:[e.jsx("span",{className:"k",children:"Total"}),e.jsx("span",{className:"v",children:s.summary.total})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Received"}),e.jsx("span",{className:"v",children:s.summary.received})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Balance"}),e.jsx("span",{className:"v",children:s.summary.balance})]})]})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:140},children:"SKU"}),e.jsx("th",{children:"Item"}),e.jsx("th",{className:"num",style:{width:80},children:"Qty"}),e.jsx("th",{className:"num",style:{width:120},children:"Price"}),e.jsx("th",{className:"num",style:{width:140},children:"Amount"})]})}),e.jsx("tbody",{children:s.items.map((t,N)=>e.jsxs("tr",{children:[e.jsx("td",{className:"mono",children:t.sku}),e.jsx("td",{children:t.title}),e.jsx("td",{className:"num",children:t.qty}),e.jsx("td",{className:"num",children:t.price}),e.jsx("td",{className:"num strong",children:t.amount})]},t.sku+N))})]})}),e.jsxs("details",{className:"notes",open:j,onToggle:t=>b(t.currentTarget.open),children:[e.jsx("summary",{children:"Notes"}),e.jsx("div",{className:"muted",children:s.notes})]}),e.jsxs("footer",{className:"docFooter",children:[e.jsxs("div",{children:["Generated on ",u(a)]}),e.jsx("div",{className:"muted",children:"This is a display-only demo. No actual accounting/stock actions are performed."})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",id:"search-print-area",ref:i,children:[e.jsx("h3",{children:"Invoice Summary (Print Target)"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Invoice"}),e.jsx("span",{className:"v",children:s.id})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Date"}),e.jsx("span",{className:"v",children:p(s.date)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Time"}),e.jsx("span",{className:"v",children:g(s.date)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsxs("span",{className:"v",children:[s.customer.name," (",s.customer.code,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Company"}),e.jsx("span",{className:"v",children:s.customer.company})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Total"}),e.jsx("span",{className:"v",children:s.summary.total})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v badge",children:s.summary.status})]}),e.jsx("div",{className:"hint muted",children:"Use “Print Summary” to print this card alone."})]})]}),e.jsxs("div",{className:"card tips",children:[e.jsx("h3",{children:"Pro Tips"}),e.jsxs("ul",{children:[e.jsx("li",{children:"“Print Page” prints this page wrapper only (full content across pages)."}),e.jsx("li",{children:"“Print Summary” prints just the right card."}),e.jsx("li",{children:"Colors come from theme tokens."})]})]})]})]})]})};export{S as default};
