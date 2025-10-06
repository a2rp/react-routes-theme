import{d as n,_ as D,a as A,r as x,j as e,N as r}from"./index-LshBDmDj.js";const o="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",a="var(--card, #111318)",t="var(--border, #23262d)",i="var(--accent, #5aa9ff)",b="var(--accent-soft, rgba(90,169,255,0.15))",k="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",M=n.div`
    width: 100%;
    padding: 16px;
    color: ${o};
`,L=n.header`
    display: grid;
    gap: 12px;
    margin-bottom: 12px;

    h1 {
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 4px;
    }
    p {
        color: ${l};
    }
`,V=n.nav`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${l};
    a {
        color: ${l};
    }
    .current {
        color: ${o};
    }
`,E=n.div`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${l};
    .dot {
        opacity: 0.6;
    }
    strong {
        color: ${o};
    }
`,I=n.code`
    background: ${a};
    border: 1px solid ${t};
    padding: 2px 6px;
    border-radius: 6px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    color: ${o};
`,H=n.div`
    display: grid;
    gap: 2px;
`,G=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    .btn,
    button,
    a.btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${t};
        background: ${a};
        color: ${o};
        padding: 8px 12px;
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;
        transition: border-color 0.25s ease, color 0.25s ease,
            box-shadow 0.25s ease, background 0.25s ease;
    }
    .btn:hover,
    button:hover,
    a.btn:hover {
        color: ${i};
        border-color: ${i};
        box-shadow: 0 0 0 3px ${b};
    }
`,z=n.div`
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 8px 0;
    backdrop-filter: blur(8px);
`,B=n.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(180px, 220px)) 1fr;
    gap: 12px;
    align-items: end;

    .filter {
        display: grid;
        gap: 6px;
        label {
            color: ${l};
            font-size: 12px;
        }
        select {
            background: ${a};
            color: ${o};
            border: 1px solid ${t};
            border-radius: 8px;
            height: 36px;
            padding: 0 10px;
            outline: none;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        select:focus {
            border-color: ${i};
            box-shadow: 0 0 0 3px ${b};
        }
    }

    .links {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        .link {
            border: 1px solid ${t};
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            color: ${o};
            background: ${a};
            transition: border-color 0.25s ease, color 0.25s ease,
                box-shadow 0.25s ease;
        }
        .link:hover {
            color: ${i};
            border-color: ${i};
            box-shadow: 0 0 0 3px ${b};
        }
    }
`,h=n.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin: 18px 0 10px;
    h2 {
        font-size: 20px;
    }
    p {
        color: ${l};
    }
    .head-links {
        display: flex;
        gap: 10px;
        a {
            color: ${o};
            text-decoration: none;
            border: 1px solid ${t};
            border-radius: 8px;
            padding: 6px 10px;
            background: ${a};
        }
        a:hover {
            color: ${i};
            border-color: ${i};
            box-shadow: 0 0 0 3px ${b};
        }
    }
`,m=n.div`
    ${({cols:d=3,gap:c=12})=>D`
        display: grid;
        grid-template-columns: repeat(${d}, minmax(0, 1fr));
        gap: ${c}px;
    `}
`,p=n.div`
    background: ${a};
    border: 1px solid ${t};
    border-radius: 12px;
    padding: 14px;
    box-shadow: ${k};

    .card-title {
        margin-bottom: 6px;
    }
    .amount {
        font-size: 24px;
        margin-top: 6px;
    }
`,F=n(p)`
    .k-label {
        color: ${l};
        font-size: 12px;
    }
`,U=n.div`
    font-size: 26px;
    font-weight: 700;
    line-height: 1.1;
    margin-top: 4px;
`,J=n.div`
    color: ${l};
    font-size: 12px;
`,K=n.div`
    background: ${a};
    border: 1px solid ${t};
    border-radius: 12px;
    box-shadow: ${k};
    overflow: hidden;
`,W=n.table`
    width: 100%;
    border-collapse: collapse;
    th,
    td {
        padding: 12px;
        border-bottom: 1px solid ${t};
    }
    thead th {
        text-align: left;
        color: ${i};
        background: ${a};
        font-weight: 600;
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    td .sep {
        opacity: 0.6;
        margin: 0 6px;
    }
    td a {
        text-decoration: none;
        color: ${o};
    }
    td a:hover {
        color: ${i};
    }
    .row-actions {
        white-space: nowrap;
    }
`,g=n.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 12px;
    border: 1px solid ${t};
    background: ${a};
    color: ${o};
    &[data-variant="open"] {
        box-shadow: inset 0 0 0 1px ${i};
    }
    &[data-variant="partially-received"] {
        box-shadow: inset 0 0 0 1px ${i};
        opacity: 0.95;
    }
    &[data-variant="closed"] {
        opacity: 0.85;
    }
    &[data-variant="info"] {
        opacity: 0.95;
    }
    &[data-variant="neutral"] {
        opacity: 0.9;
    }
`,S=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`,u=n.ul`
    list-style: none;
    display: grid;
    gap: 6px;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    }
    li span {
        color: ${l};
    }
    li em {
        font-style: normal;
    }
`,v=n.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
    a {
        text-decoration: none;
        color: ${o};
        border-bottom: 1px dashed ${t};
    }
    a:hover {
        color: ${i};
        border-color: ${i};
    }
`,C=n.p`
    margin-top: 8px;
    color: ${l};
`;n.tr``;n.section``;const q=n.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    z-index: 999;
`,Z=n.div`
    background: ${a};
    border: 1px solid ${t};
    border-radius: 12px;
    box-shadow: ${k};
    width: min(560px, 92vw);
    padding: 16px;
    h3 {
        margin-bottom: 8px;
    }
    p {
        color: ${l};
    }
`,Q=n.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 14px;
    button,
    .btn-link {
        border: 1px solid ${t};
        background: ${a};
        color: ${o};
        padding: 8px 12px;
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;
        transition: border-color 0.25s ease, color 0.25s ease,
            box-shadow 0.25s ease;
    }
    button:hover,
    .btn-link:hover {
        color: ${i};
        border-color: ${i};
        box-shadow: 0 0 0 3px ${b};
    }
`;n.div``;n.div``;n.thead``;n.td``;const f=d=>(d?new Date(d):new Date).toDateString(),y=d=>{const c=d?new Date(d):new Date,j=c.toTimeString().slice(0,8);return`${c.toDateString()} ${j}hrs`},_=()=>{const{pathname:d}=A(),[c,j]=x.useState(!1),$="2025-10-06T12:12:45+05:30",P=x.useMemo(()=>[{key:"openPOs",label:"Open POs",value:"38",sub:"Awaiting receipts"},{key:"onTime",label:"On-time Delivery",value:"92%",sub:"Last 30 days"},{key:"spendMonth",label:"Month Spend",value:"₹ 46.8L",sub:"Oct 2025"},{key:"savings",label:"Realized Savings",value:"₹ 5.2L",sub:"vs. baseline"},{key:"leadTime",label:"Avg Lead Time",value:"6.3d",sub:"PO → GRN"},{key:"grnPending",label:"Pending GRN",value:"11",sub:"Receipt in progress"}],[]),w=x.useMemo(()=>[{code:"PO-1011",vendor:"Acme Surgicals",status:"Open",amount:"₹ 1,28,000",date:"2025-10-02T11:05:20+05:30",link:"/purchase-orders/PO-1011"},{code:"PO-1010",vendor:"Prism Pharma",status:"Partially Received",amount:"₹ 3,64,500",date:"2025-10-01T16:25:41+05:30",link:"/purchase-orders/PO-1010"},{code:"PO-1009",vendor:"Medichem Labs",status:"Open",amount:"₹ 86,300",date:"2025-09-29T12:02:10+05:30",link:"/purchase-orders/PO-1009"},{code:"PO-1008",vendor:"BlueLeaf Distributors",status:"Closed",amount:"₹ 2,18,900",date:"2025-09-24T09:15:00+05:30",link:"/purchase-orders/PO-1008"},{code:"PO-1007",vendor:"NeoMed Devices",status:"Open",amount:"₹ 5,12,000",date:"2025-09-22T14:40:08+05:30",link:"/purchase-orders/PO-1007"},{code:"PO-1006",vendor:"Zenith Health",status:"Closed",amount:"₹ 1,02,450",date:"2025-09-18T10:30:12+05:30",link:"/purchase-orders/PO-1006"}],[]),O=x.useMemo(()=>[{grn:"GRN-3221",po:"PO-1008",vendor:"BlueLeaf Distributors",qty:"1,240",ts:"2025-09-26T18:38:20+05:30",link:"/shipments/SH-7781"},{grn:"GRN-3218",po:"PO-1006",vendor:"Zenith Health",qty:"540",ts:"2025-09-19T11:02:04+05:30",link:"/shipments/SH-7772"},{grn:"GRN-3215",po:"PO-1005",vendor:"Acme Surgicals",qty:"300",ts:"2025-09-17T15:48:59+05:30",link:"/shipments/SH-7767"}],[]),N=x.useMemo(()=>[{vendor:"Prism Pharma",score:"4.8/5",onTime:"96%",defects:"0.3%",link:"/vendors/V-PRISM"},{vendor:"Acme Surgicals",score:"4.6/5",onTime:"92%",defects:"0.5%",link:"/vendors/V-ACME"},{vendor:"Medichem Labs",score:"4.5/5",onTime:"90%",defects:"0.6%",link:"/vendors/V-MED"},{vendor:"BlueLeaf Distributors",score:"4.4/5",onTime:"88%",defects:"0.9%",link:"/vendors/V-BLUE"}],[]),R=x.useMemo(()=>[{cat:"Antibiotics",amount:"₹ 14.2L",link:"/reports/procurement?category=Antibiotics"},{cat:"Surgical",amount:"₹ 10.6L",link:"/reports/procurement?category=Surgical"},{cat:"Consumables",amount:"₹ 8.9L",link:"/reports/procurement?category=Consumables"},{cat:"Devices",amount:"₹ 7.1L",link:"/reports/procurement?category=Devices"},{cat:"PPE",amount:"₹ 6.0L",link:"/reports/procurement?category=PPE"}],[]),T={exportJsonHref:"data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({kpis:P,poRows:w,receipts:O,vendorTop:N,spendByCategory:R},null,2))};return e.jsxs(M,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(L,{children:[e.jsxs(V,{"aria-label":"Breadcrumbs",children:[e.jsx(r,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:"/reports",children:"Reports"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Procurement"})]}),e.jsxs(E,{children:[e.jsx("span",{children:"Report"}),e.jsx(I,{children:"/reports/procurement"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{children:"As of"}),e.jsx("strong",{title:y($),children:f($)})]}),e.jsxs(H,{children:[e.jsx("h1",{children:"Procurement Overview"}),e.jsx("p",{children:"Spend, suppliers, purchase orders, receipts & risk signals at a glance."})]}),e.jsxs(G,{className:"toolbar",children:[e.jsx("a",{className:"btn",href:T.exportJsonHref,download:"procurement-report.json",title:"Download as JSON",children:"Export JSON"}),e.jsx(r,{className:"btn",to:"/reports",title:"Go to Reports Home",children:"Reports Home"}),e.jsx(r,{className:"btn",to:"/purchase-orders",title:"View Purchase Orders",children:"Purchase Orders"}),e.jsx(r,{className:"btn",to:"/vendors",title:"View Vendors",children:"Vendors"}),e.jsx("button",{className:"btn",onClick:()=>j(!0),title:"Demo only",children:"Close Period"})]})]}),e.jsx(z,{children:e.jsxs(B,{children:[e.jsxs("div",{className:"filter",children:[e.jsx("label",{children:"Period"}),e.jsxs("select",{disabled:!0,defaultValue:"oct-2025","aria-label":"Period (display only)",children:[e.jsx("option",{value:"oct-2025",children:"Oct 2025"}),e.jsx("option",{value:"sep-2025",children:"Sep 2025"}),e.jsx("option",{value:"aug-2025",children:"Aug 2025"})]})]}),e.jsxs("div",{className:"filter",children:[e.jsx("label",{children:"Warehouse"}),e.jsxs("select",{disabled:!0,defaultValue:"all",children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"wh-mumbai",children:"Mumbai DC"}),e.jsx("option",{value:"wh-pune",children:"Pune DC"})]})]}),e.jsxs("div",{className:"filter",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{disabled:!0,defaultValue:"all",children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"partial",children:"Partially Received"}),e.jsx("option",{value:"closed",children:"Closed"})]})]}),e.jsxs("div",{className:"links",children:[e.jsx("a",{href:"#kpi",className:"link",children:"KPIs"}),e.jsx("a",{href:"#po",className:"link",children:"Purchase Orders"}),e.jsx("a",{href:"#receipts",className:"link",children:"Receipts"}),e.jsx("a",{href:"#vendors",className:"link",children:"Vendors"}),e.jsx("a",{href:"#spend",className:"link",children:"Spend"}),e.jsx("a",{href:"#risks",className:"link",children:"Risks"})]})]})}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs(h,{id:"kpi",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Highlights"}),e.jsx("p",{children:"Key procurement signals for the selected period."})]}),e.jsxs("div",{className:"head-links",children:[e.jsx(r,{to:"/finance",title:"Open Finance",children:"Finance"}),e.jsx(r,{to:"/inventory",title:"Open Inventory",children:"Inventory"}),e.jsx(r,{to:"/tools/import-export",title:"Import / Export",children:"Import / Export"})]})]}),e.jsx(m,{cols:6,gap:12,children:P.map(s=>e.jsxs(F,{children:[e.jsx("span",{className:"k-label",children:s.label}),e.jsx(U,{children:s.value}),e.jsx(J,{children:s.sub})]},s.key))}),e.jsxs(h,{id:"po",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Purchase Orders"}),e.jsx("p",{children:"Track open, partial, and closed POs—navigate into details with deep links."})]}),e.jsxs("div",{className:"head-links",children:[e.jsx(r,{to:"/purchase-orders/new",title:"Create PO (demo disabled)",children:"New PO"}),e.jsx(r,{to:"/purchase-orders",title:"All POs",children:"All POs"})]})]}),e.jsx(K,{children:e.jsxs(W,{"aria-label":"Purchase Orders",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"PO"}),e.jsx("th",{children:"Vendor"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:w.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r,{to:s.link,children:s.code})}),e.jsx("td",{children:e.jsx(r,{to:`/vendors/${encodeURIComponent(s.vendor.replace(/\s+/g,"-").toUpperCase())}`,children:s.vendor})}),e.jsx("td",{children:e.jsx(g,{"data-variant":s.status.replace(/\s+/g,"-").toLowerCase(),children:s.status})}),e.jsx("td",{children:s.amount}),e.jsx("td",{title:y(s.date),children:f(s.date)}),e.jsxs("td",{className:"row-actions",children:[e.jsx(r,{to:`${s.link}/receipt`,title:"Post receipt (demo)",children:"Receipt"}),e.jsx("span",{className:"sep",children:"•"}),e.jsx(r,{to:`${s.link}/bill`,title:"Create bill (demo)",children:"Bill"}),e.jsx("span",{className:"sep",children:"•"}),e.jsx(r,{to:`${s.link}/print`,title:"Print PO",children:"Print"})]})]},s.code))})]})}),e.jsxs(h,{id:"receipts",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Recent Receipts"}),e.jsx("p",{children:"Latest GRNs and linked shipments."})]}),e.jsxs("div",{className:"head-links",children:[e.jsx(r,{to:"/receipts",title:"All receipts",children:"Receipts"}),e.jsx(r,{to:"/shipments",title:"All shipments",children:"Shipments"})]})]}),e.jsx(m,{cols:3,gap:12,children:O.map(s=>e.jsxs(p,{children:[e.jsxs(S,{children:[e.jsx("strong",{children:s.grn}),e.jsx(g,{"data-variant":"info",children:"GRN"})]}),e.jsxs(u,{children:[e.jsxs("li",{children:[e.jsx("span",{children:"PO"}),e.jsx(r,{to:`/purchase-orders/${s.po}`,children:s.po})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Vendor"}),e.jsx(r,{to:`/vendors/${s.vendor.replace(/\s+/g,"-").toUpperCase()}`,children:s.vendor})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Quantity"}),e.jsx("em",{children:s.qty})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Received"}),e.jsx("em",{title:y(s.ts),children:f(s.ts)})]})]}),e.jsxs(v,{children:[e.jsx(r,{to:s.link,title:"Open shipment",children:"Open Shipment"}),e.jsx(r,{to:`/print/sticker/${s.grn}`,title:"Print labels",children:"Print Labels"})]})]},s.grn))}),e.jsxs(h,{id:"vendors",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Vendor Performance"}),e.jsx("p",{children:"Composite score, on-time %, and defects for the period."})]}),e.jsxs("div",{className:"head-links",children:[e.jsx(r,{to:"/vendors",title:"Vendors",children:"All Vendors"}),e.jsx(r,{to:"/reports/supplier",title:"Supplier Report",children:"Supplier Report"})]})]}),e.jsx(m,{cols:4,gap:12,children:N.map(s=>e.jsxs(p,{children:[e.jsx("h3",{className:"card-title",children:e.jsx(r,{to:s.link,children:s.vendor})}),e.jsxs(u,{children:[e.jsxs("li",{children:[e.jsx("span",{children:"Score"}),e.jsx("em",{children:s.score})]}),e.jsxs("li",{children:[e.jsx("span",{children:"On-time"}),e.jsx("em",{children:s.onTime})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Defects"}),e.jsx("em",{children:s.defects})]})]}),e.jsxs(v,{children:[e.jsx(r,{to:`${s.link}/edit`,title:"Edit vendor (demo)",children:"Edit"}),e.jsx(r,{to:`/reports/purchases?vendor=${encodeURIComponent(s.vendor)}`,title:"View spend",children:"View Spend"})]})]},s.vendor))}),e.jsxs(h,{id:"spend",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Spend by Category"}),e.jsx("p",{children:"Where your money goes—navigate into category-specific views."})]}),e.jsxs("div",{className:"head-links",children:[e.jsx(r,{to:"/finance",title:"Finance",children:"Finance"}),e.jsx(r,{to:"/reports/finance",title:"Finance report",children:"Finance Report"})]})]}),e.jsx(m,{cols:5,gap:12,children:R.map(s=>e.jsxs(p,{children:[e.jsxs(S,{children:[e.jsx("strong",{children:s.cat}),e.jsx(g,{"data-variant":"neutral",children:"Category"})]}),e.jsx("h3",{className:"amount",children:s.amount}),e.jsxs(v,{children:[e.jsx(r,{to:s.link,children:"Open Category"}),e.jsx(r,{to:`/products?category=${encodeURIComponent(s.cat)}`,children:"Browse Items"})]})]},s.cat))}),e.jsxs(h,{id:"risks",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Risks & Signals"}),e.jsx("p",{children:"Watchouts based on recent receipts and PO statuses."})]}),e.jsxs("div",{className:"head-links",children:[e.jsx(r,{to:"/inventory/reorder",title:"Reorder planner",children:"Reorder Planner"}),e.jsx(r,{to:"/medicines/expiry-tracker",title:"Near-expiry tracker",children:"Expiry Tracker"})]})]}),e.jsxs(m,{cols:3,gap:12,children:[e.jsxs(p,{children:[e.jsx("h3",{className:"card-title",children:"Near Expiry Lots"}),e.jsxs(u,{children:[e.jsxs("li",{children:[e.jsx("span",{children:"MED-AMOX-500"}),e.jsxs("em",{children:["Batch A13 — ",e.jsx(r,{to:"/medicines/expiry-tracker",children:"Nov 2025"})]})]}),e.jsxs("li",{children:[e.jsx("span",{children:"MED-PAR-650"}),e.jsxs("em",{children:["Batch P22 — ",e.jsx(r,{to:"/medicines/expiry-tracker",children:"Dec 2025"})]})]})]}),e.jsx(C,{children:"Review reorder against shelf life to avoid write-offs."})]}),e.jsxs(p,{children:[e.jsx("h3",{className:"card-title",children:"Supply Delays (Watch)"}),e.jsxs(u,{children:[e.jsxs("li",{children:[e.jsx("span",{children:"PO-1010"}),e.jsx("em",{children:"ETA slipped by 1.5d"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"PO-1007"}),e.jsx("em",{children:"Transit exception reported"})]})]}),e.jsxs(v,{children:[e.jsx(r,{to:"/shipments",title:"All shipments",children:"Open Shipments"}),e.jsx(r,{to:"/purchase-orders",title:"All POs",children:"Open POs"})]})]}),e.jsxs(p,{children:[e.jsx("h3",{className:"card-title",children:"Spend Guardrails"}),e.jsxs(u,{children:[e.jsxs("li",{children:[e.jsx("span",{children:"Devices"}),e.jsx("em",{children:"↑ 18% vs last month"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"Surgical"}),e.jsx("em",{children:"↑ 12% vs baseline"})]})]}),e.jsx(C,{children:"Validate price lists and approvals; review vendor mix."})]})]})]}),c&&e.jsx(q,{role:"dialog","aria-modal":"true",onClick:()=>j(!1),children:e.jsxs(Z,{onClick:s=>s.stopPropagation(),children:[e.jsx("h3",{children:"Demo mode"}),e.jsx("p",{children:"This action is disabled in the demo. Explore reports, deep links, and printing from the toolbar."}),e.jsxs(Q,{children:[e.jsx("button",{onClick:()=>j(!1),children:"Got it"}),e.jsx(r,{to:"/reports",className:"btn-link",children:"Go to Reports"})]})]})})]})};export{_ as default};
