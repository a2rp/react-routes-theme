import{d as g,q as S,u as I,r as v,j as e,N as c}from"./index-BauM8ZfN.js";const o="var(--text, #f3f4f6)",n="var(--muted, #a0a0a7)",h="var(--card, #111318)",d="var(--border, #23262d)",i="var(--accent, #5aa9ff)",P="var(--accent-soft, rgba(90,169,255,0.15))",T="var(--radius, 16px)",b={Page:g.div`
        padding: 24px 0 64px;
        color: ${o};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${n};
            }
            .current {
                color: ${o};
            }
        }
    `,Header:g.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            color: ${n};
            font-size: 12px;
        }

        .chip {
            padding: 2px 8px;
            border: 1px solid ${d};
            border-radius: 999px;
            background: color-mix(in oklab, ${i} 10%, transparent);
            color: ${o};
            font-weight: 600;
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
            border: 1px solid ${d};
            background: ${h};
            color: ${o};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${P};
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnDisabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
        button:active {
            transform: translateY(1px);
        }
    `,Banner:g.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${d};
        border-radius: 10px;
        background: color-mix(in oklab, ${i} 10%, transparent);
        color: ${o};
    `,Grid:g.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .identity {
            display: grid;
            grid-template-columns: 112px 1fr;
            gap: 16px;
            margin-bottom: 18px;
            .image {
                width: 112px;
                height: 112px;
                border-radius: ${T};
                border: 1px solid ${d};
                background: ${h};
                background-size: cover;
                background-position: center;
            }
            .info h2 {
                font-size: 18px;
            }
            .sub {
                color: ${n};
                margin-top: 4px;
            }
            .kv {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                margin-top: 12px;
            }
            .kv .k {
                color: ${n};
                font-size: 12px;
            }
            .kv .v {
                color: ${o};
            }
            .links {
                display: flex;
                gap: 12px;
                margin-top: 12px;
            }
            .links a {
                color: ${n};
                border: 1px solid ${d};
                border-radius: 8px;
                padding: 6px 8px;
                background: ${h};
            }
            .links a:hover {
                color: ${i};
                border-color: ${i};
            }
        }

        .panels {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .panels {
                grid-template-columns: 1fr 1fr;
            }
            .panels .panel:nth-child(3) {
                grid-column: span 2;
            }
            .panels .panel:nth-child(4) {
                grid-column: span 1;
            }
            .panels .panel:nth-child(5) {
                grid-column: span 1;
            }
        }

        .panel {
            border: 1px solid ${d};
            border-radius: 12px;
            background: ${h};
            padding: 14px;
        }
        .panel h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .grid3 {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(3, 1fr);
            @media (max-width: 720px) {
                grid-template-columns: 1fr 1fr;
            }
            .stat {
                border: 1px solid ${d};
                border-radius: 10px;
                padding: 10px;
                background: color-mix(in oklab, ${i} 6%, transparent);
            }
            .label {
                color: ${n};
                font-size: 12px;
            }
            .value {
                font-weight: 700;
                margin-top: 4px;
            }
        }

        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 12px;
        }
        .tag {
            border: 1px solid ${d};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${o};
            background: color-mix(in oklab, ${i} 8%, transparent);
            font-weight: 600;
            font-size: 12px;
        }

        table.strip {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            th,
            td {
                padding: 10px;
                border-bottom: 1px solid ${d};
            }
            th {
                text-align: left;
                color: ${i};
                background: ${h};
                font-weight: 600;
                width: 160px;
            }
            tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .kv {
            display: grid;
            gap: 10px;
        }
        .kv.two {
            grid-template-columns: 1fr 1fr;
        }
        .kv.three {
            grid-template-columns: 1fr 1fr 1fr;
        }
        .kv .k {
            color: ${n};
            font-size: 12px;
        }
        .kv .v {
            color: ${o};
        }

        .notes {
            line-height: 1.8;
        }

        /* sidebar */
        .side {
            display: grid;
            gap: 16px;
        }
        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${n};
        }
        .links a:hover {
            color: ${i};
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
            border: 1px solid ${d};
        }
        .timeline .muted {
            color: ${n};
            font-size: 12px;
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
            color: ${n};
        }
        .printSummary .v {
            color: ${o};
        }
    `},r=(x,m)=>{const t=x instanceof Date?x:new Date(x),j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=N=>String(N).padStart(2,"0"),p=`${j[t.getDay()]} ${s[t.getMonth()]} ${l(t.getDate())} ${t.getFullYear()}`;return m?`${p} ${l(t.getHours())}:${l(t.getMinutes())}:${l(t.getSeconds())}hrs`:p},A=()=>{const{orderId:x="ORD-3456",itemId:m="ITEM-01"}=S(),t=I(),j=v.useRef(null),s=v.useMemo(()=>({id:m,orderId:x,customerId:"CUST-1001",invoiceId:"INV-2031",product:{id:"MED-AMOX-500",name:"Amoxicillin 500 mg",variant:"Capsule · Strip of 10",sku:"AMOX-500-CAP-10",brand:"MediCore",generic:"Amoxicillin",image:"/product.svg"},quantity:{ordered:5,allocated:5,picked:5,packed:5,shipped:5,delivered:4,uom:"strip"},pricing:{currency:"INR",unitPrice:"₹250.00",discount:"₹0.00",tax:"₹225.00",subtotal:"₹1,250.00",total:"₹1,475.00",priceList:"Retail MRP"},compliance:{hsn:"3004",gstRate:"18%",batch:"BCH-7A19",lot:"LOT-1092",mrp:"₹265.00",expiry:"2026-02-28T00:00:00+05:30",mfg:"2024-06-15T00:00:00+05:30"},warehouse:{code:"WH-NCR-01",bin:"A-17-3",rack:"R-05",temperature:"Ambient"},dimensions:{weight:"0.25 kg",length:"14 cm",width:"10 cm",height:"4 cm"},status:"Partially Delivered",createdAt:"2025-10-04T10:12:23+05:30",updatedAt:"2025-10-04T15:38:20+05:30",notes:"Cold chain not required. Keep away from moisture. Replace any strip with damaged foil. Customer prefers morning deliveries.",tags:["antibiotic","rx","priority"],shipments:[{id:"SHP-9001",status:"Delivered",date:"2025-10-04T12:55:10+05:30"},{id:"SHP-9010",status:"In Transit",date:"2025-10-04T21:15:00+05:30"}],attachments:[{name:"COA-BCH-7A19.pdf",type:"pdf",href:"#"},{name:"Storage-Guidelines.pdf",type:"pdf",href:"#"}],timeline:[{label:"Added to Order",at:"2025-10-04T10:12:23+05:30"},{label:"Allocated",at:"2025-10-04T10:30:00+05:30"},{label:"Picked",at:"2025-10-04T11:10:40+05:30"},{label:"Packed",at:"2025-10-04T11:45:00+05:30"},{label:"Shipped (SHP-9001)",at:"2025-10-04T12:10:00+05:30"},{label:"Part Delivered",at:"2025-10-04T12:55:10+05:30"}]}),[x,m]),[l,p]=v.useState("");v.useEffect(()=>{let a;return l&&(a=setTimeout(()=>p(""),3e3)),()=>a&&clearTimeout(a)},[l]);const N=async()=>{try{await navigator.clipboard.writeText(window.location.href),p(`Link copied at ${r(new Date,!0)}`)}catch{p(`Unable to copy at ${r(new Date,!0)}`)}},f=()=>{j.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},y=()=>{const a=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),u=URL.createObjectURL(a),k=Object.assign(document.createElement("a"),{href:u,download:`${s.orderId}-${s.id}.json`});document.body.appendChild(k),k.click(),k.remove(),URL.revokeObjectURL(u),p(`Exported at ${r(new Date,!0)}`)},$=()=>t(`/orders/${s.orderId}`),w=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(c,{to:"/orders",children:"Orders"}),e.jsx("span",{children:"/"}),e.jsx(c,{to:`/orders/${s.orderId}`,children:s.orderId}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.id})]});return e.jsxs(b.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(b.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Order Item"}),w,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["ID: ",s.id]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Status: ",e.jsx("span",{className:"chip",children:s.status})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",r(s.createdAt,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",r(s.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:$,title:"Back to order",children:"Back"}),e.jsx("button",{className:"btnGhost",onClick:N,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:f,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:y,title:"Export JSON",children:"Export"}),e.jsx("button",{className:"btnDisabled",title:"Demo only",children:"Edit Item"}),e.jsx("button",{className:"btnDisabled",title:"Demo only",children:"Remove"}),e.jsx("button",{className:"btnDisabled",title:"Demo only",children:"Create RMA"})]})]}),l?e.jsx(b.Banner,{role:"status","aria-live":"polite",children:l}):null,e.jsxs(b.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"identity",children:[e.jsx("div",{className:"image",style:{backgroundImage:`url(${s.product.image})`}}),e.jsxs("div",{className:"info",children:[e.jsx("h2",{children:s.product.name}),e.jsx("div",{className:"sub",children:s.product.variant}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"SKU"}),e.jsx("span",{className:"v",children:s.product.sku})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Brand"}),e.jsx("span",{className:"v",children:s.product.brand})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Generic"}),e.jsx("span",{className:"v",children:s.product.generic})]})]}),e.jsxs("div",{className:"links",children:[e.jsx(c,{to:`/products/${s.product.id}`,children:"Open Product"}),e.jsx(c,{to:`/customers/${s.customerId}`,children:"Customer"}),e.jsx(c,{to:`/invoices/${s.invoiceId}`,children:"Invoice"})]})]})]}),e.jsxs("div",{className:"panels",children:[e.jsxs("div",{className:"panel",children:[e.jsx("h3",{children:"Quantities"}),e.jsxs("div",{className:"grid3",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"label",children:"Ordered"}),e.jsxs("div",{className:"value",children:[s.quantity.ordered," ",s.quantity.uom]})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"label",children:"Allocated"}),e.jsxs("div",{className:"value",children:[s.quantity.allocated," ",s.quantity.uom]})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"label",children:"Picked"}),e.jsxs("div",{className:"value",children:[s.quantity.picked," ",s.quantity.uom]})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"label",children:"Packed"}),e.jsxs("div",{className:"value",children:[s.quantity.packed," ",s.quantity.uom]})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"label",children:"Shipped"}),e.jsxs("div",{className:"value",children:[s.quantity.shipped," ",s.quantity.uom]})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"label",children:"Delivered"}),e.jsxs("div",{className:"value",children:[s.quantity.delivered," ",s.quantity.uom]})]})]}),e.jsx("div",{className:"tags",children:s.tags.map(a=>e.jsx("span",{className:"tag",children:a},a))})]}),e.jsxs("div",{className:"panel",children:[e.jsx("h3",{children:"Pricing"}),e.jsx("table",{className:"strip",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Price List"}),e.jsx("td",{children:s.pricing.priceList})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Unit Price"}),e.jsx("td",{children:s.pricing.unitPrice})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Discount"}),e.jsx("td",{children:s.pricing.discount})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Tax"}),e.jsx("td",{children:s.pricing.tax})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Subtotal"}),e.jsx("td",{children:s.pricing.subtotal})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Total"}),e.jsx("td",{children:e.jsx("strong",{children:s.pricing.total})})]})]})})]}),e.jsxs("div",{className:"panel",children:[e.jsx("h3",{children:"Compliance & Batch"}),e.jsx("table",{className:"strip",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"HSN"}),e.jsx("td",{children:s.compliance.hsn})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"GST"}),e.jsx("td",{children:s.compliance.gstRate})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Batch"}),e.jsx("td",{children:s.compliance.batch})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Lot"}),e.jsx("td",{children:s.compliance.lot})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"MRP"}),e.jsx("td",{children:s.compliance.mrp})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Expiry"}),e.jsx("td",{children:r(s.compliance.expiry)})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"MFG"}),e.jsx("td",{children:r(s.compliance.mfg)})]})]})})]}),e.jsxs("div",{className:"panel",children:[e.jsx("h3",{children:"Warehouse"}),e.jsxs("div",{className:"kv two",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Warehouse"}),e.jsx("span",{className:"v",children:s.warehouse.code})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Bin"}),e.jsx("span",{className:"v",children:s.warehouse.bin})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Rack"}),e.jsx("span",{className:"v",children:s.warehouse.rack})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Temperature"}),e.jsx("span",{className:"v",children:s.warehouse.temperature})]})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("h3",{children:"Dimensions"}),e.jsxs("div",{className:"kv three",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Weight"}),e.jsx("span",{className:"v",children:s.dimensions.weight})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Length"}),e.jsx("span",{className:"v",children:s.dimensions.length})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Width"}),e.jsx("span",{className:"v",children:s.dimensions.width})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Height"}),e.jsx("span",{className:"v",children:s.dimensions.height})]})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("h3",{children:"Notes"}),e.jsx("p",{className:"notes",children:s.notes})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Order"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Order"}),e.jsx("span",{className:"v",children:e.jsx(c,{to:`/orders/${s.orderId}`,children:s.orderId})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:e.jsx(c,{to:`/customers/${s.customerId}`,children:s.customerId})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Invoice"}),e.jsx("span",{className:"v",children:e.jsx(c,{to:`/invoices/${s.invoiceId}`,children:s.invoiceId})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v",children:r(s.updatedAt,!0)})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Fulfilment"}),e.jsx("ul",{className:"timeline",children:s.timeline.map((a,u)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:a.label}),e.jsx("div",{className:"muted",children:r(a.at,!0)})]})]},u))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Shipments"}),e.jsx("ul",{className:"links",children:s.shipments.map(a=>e.jsxs("li",{children:[e.jsx(c,{to:`/shipments/${a.id}`,children:a.id}),e.jsxs("span",{className:"muted",children:[" — ",a.status," · ",r(a.date,!0)]})]},a.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("ul",{className:"links",children:s.attachments.map(a=>e.jsx("li",{children:e.jsx("a",{href:a.href,children:a.name})},a.name))})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:j,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Order"}),e.jsx("span",{className:"v",children:s.orderId})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Item"}),e.jsx("span",{className:"v",children:s.id})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Product"}),e.jsxs("span",{className:"v",children:[s.product.name," (",s.product.sku,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Qty"}),e.jsxs("span",{className:"v",children:[s.quantity.ordered," ",s.quantity.uom]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Total"}),e.jsx("span",{className:"v",children:s.pricing.total})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:s.status})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v",children:r(s.updatedAt,!0)})]})]})]})]})]})]})};export{A as default};
