import{d as m,u as $,r as u,j as e,N as n}from"./index-BpMGcZ_2.js";const c="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",j="var(--card, #111318)",l="var(--border, #23262d)",r="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",o={Page:m.div`
        padding: 24px 0 64px;
        color: ${c};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${d};
            }
            .current {
                color: ${c};
            }
        }
    `,Header:m.header`
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
            color: ${c};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s ease-in;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnDisabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,KpiGrid:m.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
        @media (min-width: 900px) {
            grid-template-columns: repeat(6, 1fr);
        }

        .kpi {
            padding: 16px;
        }
        .k {
            color: ${d};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 700;
            line-height: 1.1;
            margin-top: 6px;
        }
        .hint {
            color: ${d};
            font-size: 12px;
            margin-top: 6px;
        }
    `,Grid:m.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .card {
            padding: 16px;
        }

        .printSummary header {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .printSummary h3 {
            font-size: 16px;
        }
        .printSummary .time {
            color: ${d};
            font-size: 12px;
        }
        .printSummary .rows {
            display: grid;
            gap: 8px;
        }
        .printSummary .row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${d};
        }
        .printSummary .v {
            color: ${c};
        }

        .cardHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
            .link {
                color: ${d};
            }
            .link:hover {
                color: ${r};
            }
            .tools {
                display: flex;
                gap: 8px;
            }
            .tools input {
                border: 1px solid ${l};
                border-radius: 8px;
                background: ${j};
                color: ${c};
                height: 36px;
                padding: 0 10px;
                width: 240px;
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            .tools input:focus {
                border-color: ${r};
                box-shadow: 0 0 0 3px ${y};
                outline: none;
            }
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .sideCard h3 {
            margin-bottom: 8px;
            font-size: 14px;
        }
        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${d};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${l};
            background: ${j};
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
            border: 1px solid ${l};
        }
        .timeline .entry .row1 {
            display: flex;
            gap: 8px;
            align-items: baseline;
        }
        .timeline .entry .row2 {
            color: ${c};
            margin-top: 2px;
        }
        .timeline .entry .row3 {
            display: flex;
            gap: 8px;
            margin-top: 6px;
        }
        .timeline .entry .chip {
            border: 1px solid ${l};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 10%, transparent);
            color: ${c};
            font-size: 12px;
        }
        .timeline .sep {
            color: ${d};
        }
        .muted {
            color: ${d};
        }
    `,Table:m.div`
        overflow: auto;
        border: 1px solid ${l};
        border-radius: 12px;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${j};
            color: ${r};
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${l};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${l};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .num {
            text-align: right;
        }
    `,Progress:m.div`
        position: relative;
        height: 10px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid ${l};
        span {
            display: block;
            height: 100%;
            border-radius: 999px;
            background: linear-gradient(
                90deg,
                ${r},
                color-mix(in oklab, ${r} 40%, transparent)
            );
            transition: width 0.6s ease;
        }
        i {
            position: absolute;
            right: 6px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 11px;
            color: ${c};
        }
    `},x=a=>String(a).padStart(2,"0"),f=a=>{const i=a instanceof Date?a:new Date(a),p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${p[i.getDay()]} ${b[i.getMonth()]} ${x(i.getDate())} ${i.getFullYear()}`},v=a=>{const i=a instanceof Date?a:new Date(a);return`${f(i)} ${x(i.getHours())}:${x(i.getMinutes())}:${x(i.getSeconds())}hrs`},C=a=>{const i=a instanceof Date?a:new Date(a);return`${x(i.getHours())}:${x(i.getMinutes())}:${x(i.getSeconds())}hrs`},h=new Date,t=Object.freeze({totalSkus:"12,480",totalUnits:"1,487,265",warehouses:5,nearExpiry:42,reorderPending:128,capacityUtil:"73%"}),S=[{id:"WH-ND-01",name:"New Delhi HQ",city:"New Delhi",bins:1240,skus:7850,units:"512,340",capacity:82},{id:"WH-MUM-02",name:"Mumbai DC",city:"Mumbai",bins:910,skus:5620,units:"383,904",capacity:69},{id:"WH-BLR-03",name:"Bengaluru DC",city:"Bengaluru",bins:760,skus:4980,units:"291,002",capacity:61},{id:"WH-KOL-04",name:"Kolkata DC",city:"Kolkata",bins:540,skus:3120,units:"145,833",capacity:48},{id:"WH-HYD-05",name:"Hyderabad DC",city:"Hyderabad",bins:620,skus:3190,units:"154,186",capacity:52}],N=[{sku:"MED-AMOX-500",name:"Amoxicillin 500mg Cap",onHand:120,min:500,vendor:"Zentis Labs",eta:"Sat Oct 11 2025"},{sku:"MED-PARA-650",name:"Paracetamol 650mg Tab",onHand:980,min:1500,vendor:"CureWell Pharma",eta:"Mon Oct 13 2025"},{sku:"MED-IBU-400",name:"Ibuprofen 400mg Tab",onHand:410,min:950,vendor:"Auric Remedies",eta:"Tue Oct 14 2025"},{sku:"MED-OMZ-20",name:"Omeprazole 20mg Cap",onHand:210,min:600,vendor:"Zeon Biocare",eta:"Wed Oct 15 2025"},{sku:"MED-LEV-500",name:"Levofloxacin 500mg Tab",onHand:80,min:300,vendor:"Silverline Labs",eta:"Fri Oct 17 2025"},{sku:"MED-CET-10",name:"Cetirizine 10mg Tab",onHand:350,min:900,vendor:"Apollo Generics",eta:"Sat Oct 18 2025"},{sku:"MED-RAB-20",name:"Rabeprazole 20mg Tab",onHand:150,min:500,vendor:"Medinova",eta:"Sun Oct 19 2025"}],T=[{lot:"LOT-AZ-1221",sku:"MED-AZI-500",name:"Azithromycin 500mg Tab",exp:"Sat Nov 15 2025",wh:"New Delhi HQ",qty:220},{lot:"LOT-MET-980",sku:"MED-MET-850",name:"Metformin 850mg Tab",exp:"Sun Nov 30 2025",wh:"Mumbai DC",qty:480},{lot:"LOT-AMP-705",sku:"MED-AMPI-250",name:"Ampicillin 250mg Cap",exp:"Tue Dec 02 2025",wh:"Bengaluru DC",qty:130},{lot:"LOT-PAN-231",sku:"MED-PANT-40",name:"Pantoprazole 40mg Tab",exp:"Sat Dec 06 2025",wh:"Hyderabad DC",qty:96},{lot:"LOT-DOX-404",sku:"MED-DOXY-100",name:"Doxycycline 100mg Cap",exp:"Mon Dec 15 2025",wh:"Kolkata DC",qty:260}],M=[{id:"TR-9001",from:"Mumbai DC",to:"New Delhi HQ",items:12,units:8500,when:v(h)},{id:"TR-9000",from:"Hyderabad DC",to:"Bengaluru DC",items:7,units:2900,when:"Fri Oct 03 2025 18:22:05hrs"},{id:"TR-8999",from:"Kolkata DC",to:"Mumbai DC",items:4,units:1200,when:"Fri Oct 03 2025 11:05:41hrs"},{id:"TR-8998",from:"New Delhi HQ",to:"Hyderabad DC",items:15,units:10100,when:"Thu Oct 02 2025 16:44:12hrs"}],O=()=>{const a=$(),i=u.useRef(null),[p,b]=u.useState(""),k=u.useMemo(()=>{const s=p.trim().toLowerCase();return s?N.filter(g=>g.sku.toLowerCase().includes(s)||g.name.toLowerCase().includes(s)||g.vendor.toLowerCase().includes(s)):N},[p]),w=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(n,{to:"/inventory",children:"Inventory"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Overview"})]}),D=()=>{i.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return u.useEffect(()=>{},[]),e.jsxs(o.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(o.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Inventory Overview"}),w,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Snapshot: ",v(h)]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Best viewed on desktop"})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>a("/inventory/warehouses"),title:"Go to Warehouses",children:"Warehouses"}),e.jsx("button",{className:"btnGhost",onClick:()=>a("/inventory/transfers"),title:"Go to Transfers",children:"Transfers"}),e.jsx("a",{className:"btnGhost",href:"/data/inventory-snapshot.csv",download:!0,title:"Export static snapshot",children:"Export"}),e.jsx("button",{className:"btnPrimary",onClick:D,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnDisabled","aria-disabled":"true",title:"Demo mode: Adjustments disabled",children:"Adjust Stock"}),e.jsx("button",{className:"btnDisabled","aria-disabled":"true",title:"Demo mode: New transfer disabled",children:"New Transfer"})]})]}),e.jsxs(o.KpiGrid,{children:[e.jsxs("section",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"Total SKUs"}),e.jsx("div",{className:"v",children:t.totalSkus}),e.jsx("div",{className:"hint",children:"Across catalog"})]}),e.jsxs("section",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"Total Units"}),e.jsx("div",{className:"v",children:t.totalUnits}),e.jsx("div",{className:"hint",children:"All warehouses"})]}),e.jsxs("section",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"Warehouses"}),e.jsx("div",{className:"v",children:t.warehouses}),e.jsx("div",{className:"hint",children:"Active locations"})]}),e.jsxs("section",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"Near Expiry"}),e.jsx("div",{className:"v",children:t.nearExpiry}),e.jsx("div",{className:"hint",children:"Lots in next 60 days"})]}),e.jsxs("section",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"Reorder Pending"}),e.jsx("div",{className:"v",children:t.reorderPending}),e.jsx("div",{className:"hint",children:"Items under min"})]}),e.jsxs("section",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"Capacity Used"}),e.jsx("div",{className:"v",children:t.capacityUtil}),e.jsx("div",{className:"hint",children:"Average across network"})]})]}),e.jsxs(o.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card printSummary",id:"search-print-area",ref:i,children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Snapshot Summary"}),e.jsxs("div",{className:"time",children:["Generated ",v(h)]})]}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Total SKUs"}),e.jsx("span",{className:"v",children:t.totalSkus})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Total Units"}),e.jsx("span",{className:"v",children:t.totalUnits})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Warehouses"}),e.jsx("span",{className:"v",children:t.warehouses})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Near Expiry"}),e.jsx("span",{className:"v",children:t.nearExpiry})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Reorder Pending"}),e.jsx("span",{className:"v",children:t.reorderPending})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Capacity Used"}),e.jsx("span",{className:"v",children:t.capacityUtil})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("header",{className:"cardHeader",children:[e.jsx("h3",{children:"Warehouses & Capacity"}),e.jsx(n,{to:"/inventory/warehouses",className:"link",children:"View all"})]}),e.jsx(o.Table,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{children:"City"}),e.jsx("th",{children:"Bins"}),e.jsx("th",{children:"SKUs"}),e.jsx("th",{children:"Units"}),e.jsx("th",{children:"Capacity"})]})}),e.jsx("tbody",{children:S.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n,{to:"/inventory/warehouses",title:"Open warehouses",children:s.id})}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.city}),e.jsx("td",{className:"num",children:s.bins}),e.jsx("td",{className:"num",children:s.skus}),e.jsx("td",{className:"num",children:s.units}),e.jsx("td",{children:e.jsxs(o.Progress,{value:s.capacity,children:[e.jsx("span",{style:{width:`${s.capacity}%`}}),e.jsxs("i",{children:[s.capacity,"%"]})]})})]},s.id))})]})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("header",{className:"cardHeader",children:[e.jsx("h3",{children:"Reorder Queue"}),e.jsxs("div",{className:"tools",children:[e.jsx("input",{placeholder:"Search SKU, name, vendor",value:p,onChange:s=>b(s.target.value),"aria-label":"Filter reorder table"}),e.jsx("button",{className:"btnDisabled","aria-disabled":"true",title:"Demo mode: Create PO disabled",children:"Create PO"})]})]}),e.jsx(o.Table,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Item"}),e.jsx("th",{children:"On Hand"}),e.jsx("th",{children:"Min"}),e.jsx("th",{children:"Vendor"}),e.jsx("th",{children:"ETA"})]})}),e.jsx("tbody",{children:k.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n,{to:`/products/${encodeURIComponent(s.sku)}`,children:s.sku})}),e.jsx("td",{children:s.name}),e.jsx("td",{className:"num",children:s.onHand}),e.jsx("td",{className:"num",children:s.min}),e.jsx("td",{children:s.vendor}),e.jsx("td",{children:s.eta})]},s.sku))})]})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("header",{className:"cardHeader",children:[e.jsx("h3",{children:"Near Expiry Lots"}),e.jsx(n,{to:"/medicines/expiry-tracker",className:"link",children:"Open tracker"})]}),e.jsx(o.Table,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Lot"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Item"}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{children:"Expires"}),e.jsx("th",{children:"Qty"})]})}),e.jsx("tbody",{children:T.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.lot}),e.jsx("td",{children:e.jsx(n,{to:`/medicines/${encodeURIComponent(s.sku)}`,children:s.sku})}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.wh}),e.jsx("td",{children:s.exp}),e.jsx("td",{className:"num",children:s.qty})]},s.lot))})]})})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card sideCard",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(n,{to:"/inventory/lots",children:"Lots"})}),e.jsx("li",{children:e.jsx(n,{to:"/inventory/batches",children:"Batches"})}),e.jsx("li",{children:e.jsx(n,{to:"/inventory/transfers",children:"Transfers"})}),e.jsx("li",{children:e.jsx(n,{to:"/inventory/adjustments",children:"Adjustments"})}),e.jsx("li",{children:e.jsx(n,{to:"/inventory/warehouses",children:"Warehouses"})}),e.jsx("li",{children:e.jsx(n,{to:"/reports/inventory",children:"Inventory Report"})})]})]}),e.jsxs("div",{className:"card sideCard",children:[e.jsx("h3",{children:"Recent Transfers"}),e.jsx("ul",{className:"timeline",children:M.map(s=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"entry",children:[e.jsxs("div",{className:"row1",children:[e.jsx(n,{to:"/inventory/transfers",children:s.id}),e.jsx("span",{className:"sep",children:"•"}),e.jsx("span",{className:"muted",children:s.when})]}),e.jsxs("div",{className:"row2",children:[s.from," → ",s.to]}),e.jsxs("div",{className:"row3",children:[e.jsxs("span",{className:"chip",children:[s.items," items"]}),e.jsxs("span",{className:"chip",children:[s.units," units"]})]})]})]},s.id))})]}),e.jsxs("div",{className:"card sideCard",children:[e.jsx("h3",{children:"Contact Window"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Ops Desk"}),e.jsxs("span",{className:"v",children:["09:00–18:00 (",C(h),")"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Cutoff (PO)"}),e.jsx("span",{className:"v",children:"16:00hrs"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Next Cycle"}),e.jsx("span",{className:"v",children:f(new Date(h.getFullYear(),h.getMonth(),h.getDate()+7))})]})]})]})]})]})]})};export{O as default};
