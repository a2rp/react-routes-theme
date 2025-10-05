import{d as u,u as S,r as j,j as e,N as v}from"./index-B_KzNciT.js";const t="var(--text, #f3f4f6)",n="var(--muted, #a0a0a7)",m="var(--card, #111318)",r="var(--border, #23262d)",i="var(--accent, #5aa9ff)",N="var(--accent-soft, rgba(90,169,255,0.15))",y="var(--radius, 14px)",g={Page:u.div`
        width: 100%;
        color: ${t};
        padding: 24px 0 64px;

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${n};
            }
            .current {
                color: ${t};
            }
        }
    `,Header:u.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
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
            color: ${n};
            font-size: 12px;
            flex-wrap: wrap;
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
            background: ${m};
            color: ${t};
            font-weight: 600;
            transition: all 0.25s;
        }
        .btnPrimary:hover:not(:disabled) {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${N};
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        button:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
    `,Banner:u.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${r};
        border-radius: 10px;
        background: color-mix(in oklab, ${i} 10%, transparent);
        color: ${t};
    `,Stepper:u.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 12px;
        margin-bottom: 16px;
        padding: 12px;
        .step {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid ${r};
            border-radius: ${y};
            padding: 10px 12px;
            background: ${m};
            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: ${n};
            }
            .t {
                font-weight: 700;
            }
            .s {
                color: ${n};
                font-size: 12px;
            }
        }
        .step.done .dot {
            background: ${i};
        }
        .step.current {
            box-shadow: 0 0 0 3px ${N};
            border-color: ${i};
        }
        @media (max-width: 960px) {
            grid-template-columns: 1fr;
        }
    `,Grid:u.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1180px) {
            grid-template-columns: 1fr;
        }

        .col.main .row {
            margin-bottom: 16px;
        }

        .card {
            background: ${m};
            border: 1px solid ${r};
            border-radius: ${y};
            padding: 14px 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        /* parties */
        .party {
            display: grid;
            gap: 8px;
        }
        .row.card {
            display: grid;
            gap: 16px;
        }
        .row.card.two {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 980px) {
            .row.card.two {
                grid-template-columns: 1fr;
            }
        }
        h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }

        .kv {
            display: grid;
            gap: 6px;
        }
        .kv .k {
            color: ${n};
            width: 90px;
            display: inline-block;
        }
        .kv .v a {
            color: ${t};
            border-bottom: 1px dashed ${r};
        }
        address.addr {
            color: ${t};
            opacity: 0.9;
            font-style: normal;
            line-height: 1.6;
        }

        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${r};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${i} 8%, transparent);
        }
        .hint {
            color: ${n};
            font-size: 12px;
        }

        /* items */
        .rowHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
        }
        .filters input {
            width: 260px;
            max-width: 46vw;
            border: 1px solid ${r};
            border-radius: 8px;
            background: ${m};
            color: ${t};
            padding: 8px 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .filters input:focus {
            border-color: ${i};
            outline: none;
            box-shadow: 0 0 0 3px ${N};
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${r};
            border-radius: 10px;
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.items thead th {
            position: sticky;
            top: 0;
            background: ${m};
            border-bottom: 1px solid ${r};
            text-align: left;
            color: ${i};
            font-weight: 600;
            padding: 10px;
        }
        table.items td {
            border-bottom: 1px solid ${r};
            padding: 10px;
            vertical-align: top;
        }
        table.items .num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .pname {
            font-weight: 700;
        }
        .psub {
            color: ${n};
            font-size: 12px;
            margin-top: 2px;
        }
        a.inline {
            color: ${n};
        }
        a.inline:hover {
            color: ${i};
        }

        .totals {
            display: grid;
            gap: 6px;
            margin-top: 12px;
            padding: 12px;
            border: 1px dashed ${r};
            border-radius: 10px;
        }
        .totals .line {
            display: flex;
            justify-content: space-between;
        }
        .totals .grand {
            font-weight: 800;
        }
        .totals .grand span:last-child {
            color: ${t};
        }

        .para {
            line-height: 1.7;
            opacity: 0.95;
        }

        .files {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .filepill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border: 1px solid ${r};
            border-radius: 999px;
            color: ${t};
            background: color-mix(in oklab, ${i} 8%, transparent);
        }
        .filepill .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${i};
        }

        /* side */
        .side {
            display: grid;
            gap: 16px;
        }

        #search-print-area .summary {
            margin-top: 8px;
            display: grid;
            gap: 6px;
        }
        #search-print-area .kv {
            display: grid;
            grid-template-columns: 110px 1fr;
        }
        #search-print-area .k {
            color: ${n};
        }
        #search-print-area .v.strong {
            font-weight: 800;
        }
        #search-print-area .printNote {
            margin-top: 10px;
            color: ${n};
            font-size: 12px;
        }

        .approvers {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .approvers li {
            display: grid;
            grid-template-columns: 36px 1fr;
            gap: 10px;
            align-items: center;
        }
        .avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: color-mix(in oklab, ${i} 15%, transparent);
            border: 1px solid ${r};
            font-weight: 800;
        }
        .approvers .role {
            color: ${n};
            font-size: 12px;
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
            grid-template-columns: 14px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${i};
            margin-top: 6px;
            border: 1px solid ${r};
        }
        .timeline .muted {
            color: ${n};
            font-size: 12px;
        }

        .shortcuts {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        kbd {
            display: inline-block;
            padding: 2px 6px;
            border: 1px solid ${r};
            border-bottom-width: 2px;
            border-radius: 6px;
            font-size: 12px;
            background: ${m};
        }
    `},o=d=>String(d).padStart(2,"0"),c=(d,l=!1)=>{const s=d instanceof Date?d:new Date(d),b=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=`${b[s.getDay()]} ${p[s.getMonth()]} ${o(s.getDate())} ${s.getFullYear()}`;return l?`${x} ${o(s.getHours())}:${o(s.getMinutes())}:${o(s.getSeconds())}hrs`:x},D=d=>{const l=d instanceof Date?d:new Date(d);return`${o(l.getHours())}:${o(l.getMinutes())}:${o(l.getSeconds())}hrs`},T=()=>{const d=S(),l=j.useRef(null),s=j.useMemo(()=>({id:"PO-50021",createdISO:"2025-10-04T15:38:20+05:30",expectedISO:"2025-10-11T09:00:00+05:30",status:"Draft",buyer:{name:"Aster Labs & Pharma",code:"BUY-ALP-01",gstin:"09ABCDR1234E1Z9",address:{line1:"2nd Floor, Crescent Tower",line2:"MG Road",city:"Bengaluru",state:"KA",zip:"560001",country:"India"},warehouse:{name:"Central DC - BLR",line1:"Plot 22, KIADB Ind. Area",city:"Bengaluru",state:"KA",zip:"560099",country:"India"}},vendor:{id:"VEND-1001",name:"Omni Distributors Pvt. Ltd.",contact:"Neha Verma",email:"sales@omni.example.com",phone:"+91 98100 11223",gstin:"07ABCDE1234F1Z6",address:{line1:"D-14, Okhla Phase 1",line2:"Near Metro Depot",city:"New Delhi",state:"DL",zip:"110020",country:"India"}},shipTo:{attention:"Stores – Central DC",line1:"Dock 3, Gate-B",line2:"Plot 22, KIADB Ind. Area",city:"Bengaluru",state:"KA",zip:"560099",country:"India"},items:[{sku:"MED-AMOX-500",name:"Amoxicillin",spec:"500 mg | 10x10 Tablets",uom:"Box",qty:24,rate:"₹ 480.00",gst:"12%",amount:"₹ 11,520.00",productId:"MED-AMOX-500"},{sku:"MED-PARA-650",name:"Paracetamol",spec:"650 mg | 25x10 Tablets",uom:"Box",qty:12,rate:"₹ 720.00",gst:"5%",amount:"₹ 8,640.00",productId:"MED-PARA-650"},{sku:"MED-ORS-200",name:"ORS Sachet",spec:"200 ml | 50 Sachets",uom:"Pack",qty:20,rate:"₹ 96.00",gst:"12%",amount:"₹ 1,920.00",productId:"MED-ORS-200"},{sku:"MED-GLV-NIT",name:"Nitrile Gloves",spec:"Medium | 100 pcs",uom:"Box",qty:10,rate:"₹ 180.00",gst:"12%",amount:"₹ 1,800.00",productId:"MED-GLV-NIT"}],totals:{subtotal:"₹ 23,880.00",discount:"₹ 1,194.00",tax:"₹ 2,094.00",freight:"₹ 0.00",grandTotal:"₹ 24,780.00"},attachments:["rfq-2025-09-28.pdf","vendor-catalog.csv"],terms:"Prices include primary packaging. Delivery within 7 days from PO date. Payment NET 30 days via bank transfer.",notes:"Urgent replenishment for top SKUs. Please coordinate delivery slot with warehouse before dispatch.",timeline:[{label:"PO created",when:"2025-10-04T15:38:20+05:30"},{label:"RFQ finalized with vendor",when:"2025-09-29T11:10:00+05:30"},{label:"Budget approved by Finance",when:"2025-09-28T10:05:00+05:30"}],approvers:[{name:"R. Srinivas",role:"Procurement Head"},{name:"A. Kapoor",role:"Finance Controller"},{name:"M. Dutta",role:"Ops"}],tags:["priority","replenishment","medicines"]}),[]),[b,p]=j.useState(""),[x,f]=j.useState(""),w=async()=>{try{await navigator.clipboard.writeText(window.location.href),p(`Link copied at ${c(new Date,!0)}`),setTimeout(()=>p(""),3500)}catch{p("Could not copy the link"),setTimeout(()=>p(""),3500)}},k=j.useMemo(()=>{const a=x.trim().toLowerCase();return a?s.items.filter(h=>[h.sku,h.name,h.spec].join(" ").toLowerCase().includes(a)):s.items},[x,s.items]),$=()=>{l.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(g.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(g.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"New Purchase Order"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(v,{to:"/purchase-orders",children:"Purchase Orders"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"New"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["ID: ",s.id]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",c(s.createdISO,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Expected: ",c(s.expectedISO)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Status: ",s.status]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",title:"Go back",onClick:()=>d("/purchase-orders"),children:"Cancel"}),e.jsx("button",{className:"btnPrimary",title:"Demo only",disabled:!0,children:"Save Draft"}),e.jsx("button",{className:"btnPrimary",title:"Demo only",disabled:!0,children:"Submit PO"}),e.jsx("button",{className:"btnGhost",onClick:$,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnGhost",onClick:w,title:"Copy link",children:"Copy Link"})]})]}),b?e.jsx(g.Banner,{role:"status","aria-live":"polite",children:b}):null,e.jsxs(g.Stepper,{className:"card",children:[e.jsxs("div",{className:"step done",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"info",children:[e.jsx("div",{className:"t",children:"Vendor"}),e.jsx("div",{className:"s",children:s.vendor.name})]})]}),e.jsxs("div",{className:"step current",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"info",children:[e.jsx("div",{className:"t",children:"Items"}),e.jsxs("div",{className:"s",children:[s.items.length," lines"]})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"info",children:[e.jsx("div",{className:"t",children:"Review & Submit"}),e.jsx("div",{className:"s",children:"Confirmation"})]})]})]}),e.jsxs(g.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"row card",children:[e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Buyer"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Org"}),e.jsx("span",{className:"v",children:s.buyer.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Code"}),e.jsx("span",{className:"v",children:s.buyer.code})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"GSTIN"}),e.jsx("span",{className:"v",children:s.buyer.gstin})]})]}),e.jsxs("address",{className:"addr",children:[s.buyer.address.line1,e.jsx("br",{}),s.buyer.address.line2,e.jsx("br",{}),s.buyer.address.city," ",s.buyer.address.zip,", ",s.buyer.address.state,", ",s.buyer.address.country]})]}),e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Vendor"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Name"}),e.jsx("span",{className:"v",children:e.jsx(v,{to:`/vendors/${s.vendor.id}`,children:s.vendor.name})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Contact"}),e.jsx("span",{className:"v",children:s.vendor.contact})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"GSTIN"}),e.jsx("span",{className:"v",children:s.vendor.gstin})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:s.vendor.email})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:s.vendor.phone})]})]}),e.jsxs("address",{className:"addr",children:[s.vendor.address.line1,e.jsx("br",{}),s.vendor.address.line2,e.jsx("br",{}),s.vendor.address.city," ",s.vendor.address.zip,", ",s.vendor.address.state,", ",s.vendor.address.country]})]}),e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Ship To"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Attention"}),e.jsx("span",{className:"v",children:s.shipTo.attention})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Window"}),e.jsx("span",{className:"v",children:D(s.expectedISO)})]})]}),e.jsxs("address",{className:"addr",children:[s.shipTo.line1,e.jsx("br",{}),s.shipTo.line2,e.jsx("br",{}),s.shipTo.city," ",s.shipTo.zip,", ",s.shipTo.state,", ",s.shipTo.country]})]})]}),e.jsxs("div",{className:"row card",children:[e.jsx("div",{className:"tags",children:s.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))}),e.jsx("div",{className:"hint",children:"Actions are disabled in demo mode. Use the Print button for a formatted summary."})]}),e.jsxs("div",{className:"row card",children:[e.jsxs("div",{className:"rowHead",children:[e.jsx("h3",{children:"Items"}),e.jsx("div",{className:"filters",children:e.jsx("input",{type:"text",placeholder:"Filter items…",value:x,onChange:a=>f(a.target.value),"aria-label":"Filter items"})})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"items",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:160},children:"SKU"}),e.jsx("th",{children:"Product"}),e.jsx("th",{style:{width:160},children:"UoM"}),e.jsx("th",{style:{width:110},className:"num",children:"Qty"}),e.jsx("th",{style:{width:140},className:"num",children:"Rate"}),e.jsx("th",{style:{width:100},className:"num",children:"GST"}),e.jsx("th",{style:{width:160},className:"num",children:"Amount"}),e.jsx("th",{style:{width:120},children:"Links"})]})}),e.jsx("tbody",{children:k.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"mono",children:a.sku})}),e.jsxs("td",{children:[e.jsx("div",{className:"pname",children:a.name}),e.jsx("div",{className:"psub",children:a.spec})]}),e.jsx("td",{children:a.uom}),e.jsx("td",{className:"num",children:a.qty}),e.jsx("td",{className:"num",children:a.rate}),e.jsx("td",{className:"num",children:a.gst}),e.jsx("td",{className:"num",children:a.amount}),e.jsx("td",{children:e.jsx(v,{className:"inline",to:`/products/${a.productId}`,children:"Product"})})]},a.sku))})]})}),e.jsxs("div",{className:"totals",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Subtotal"}),e.jsx("span",{children:s.totals.subtotal})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Discount"}),e.jsx("span",{children:s.totals.discount})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Tax"}),e.jsx("span",{children:s.totals.tax})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Freight"}),e.jsx("span",{children:s.totals.freight})]}),e.jsxs("div",{className:"line grand",children:[e.jsx("span",{children:"Grand Total"}),e.jsx("span",{children:s.totals.grandTotal})]})]})]}),e.jsxs("div",{className:"row card two",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Terms"}),e.jsx("p",{className:"para",children:s.terms})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Internal Notes"}),e.jsx("p",{className:"para",children:s.notes})]})]}),e.jsxs("div",{className:"row card",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("div",{className:"files",children:s.attachments.map(a=>e.jsxs("a",{href:"#",className:"filepill",title:"Open file (demo)",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:a})]},a))})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",id:"search-print-area",ref:l,children:[e.jsx("h3",{children:"PO Summary"}),e.jsxs("div",{className:"summary",children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"PO"}),e.jsx("span",{className:"v",children:s.id})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Date"}),e.jsx("span",{className:"v",children:c(s.createdISO)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Expected"}),e.jsx("span",{className:"v",children:c(s.expectedISO)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Vendor"}),e.jsx("span",{className:"v",children:s.vendor.name})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Contact"}),e.jsx("span",{className:"v",children:s.vendor.contact})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Amount"}),e.jsx("span",{className:"v strong",children:s.totals.grandTotal})]})]}),e.jsxs("div",{className:"printNote",children:["Printed on ",c(new Date,!0)]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Approvers"}),e.jsx("ul",{className:"approvers",children:s.approvers.map(a=>e.jsxs("li",{children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:a.name.split(" ").map(h=>h[0]).slice(0,2).join("")}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"name",children:a.name}),e.jsx("div",{className:"role",children:a.role})]})]},a.name))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsx("ul",{className:"timeline",children:s.timeline.map(a=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:a.label}),e.jsx("div",{className:"muted",children:c(a.when,!0)})]})]},a.label))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Shortcuts"}),e.jsxs("ul",{className:"shortcuts",children:[e.jsxs("li",{children:[e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"P"})," — Print"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"L"})," — Copy Link"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Esc"})," — Close / Cancel"]})]})]})]})]})]})};export{T as default};
