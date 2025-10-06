import{d as b,r as f,j as e,N as C}from"./index-Dvs-eF3B.js";const x="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",j="var(--card, #111318)",o="var(--border, #23262d)",t="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",P="#f59e0b",A="#ef4444",g={Page:b.div`
        padding: 20px 0 64px;
        color: ${x};

        .card {
            background: ${j};
            border: 1px solid ${o};
            border-radius: 12px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }
    `,Header:b.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${d};
        }
        .breadcrumbs .current {
            color: ${x};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${d};
            font-size: 12px;
        }

        .rhs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${j};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${w};
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }

        [aria-disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,Stats:b.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (min-width: 1000px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 14px 16px;
        }
        .label {
            color: ${d};
            font-size: 12px;
        }
        .value {
            font-size: 24px;
            font-weight: 700;
            margin-top: 6px;
        }
        .sub {
            color: ${d};
            font-size: 12px;
            margin-top: 2px;
        }
    `,Toolbar:b.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        padding: 12px;
        margin-bottom: 16px;
        @media (min-width: 900px) {
            grid-template-columns: 1fr auto auto;
            align-items: center;
        }

        .search input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 8px;
            background: ${j};
            color: ${x};
            border: 1px solid ${o};
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            border-color: ${t};
            box-shadow: 0 0 0 3px ${w};
        }

        .filters {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${o};
            background: ${j};
            color: ${x};
            border-radius: 999px;
            padding: 6px 10px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip:hover {
            border-color: ${t};
            color: ${t};
        }
        .chip.active {
            border-color: ${t};
            box-shadow: 0 0 0 3px ${w};
            color: ${t};
        }

        .sort {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .sort span {
            color: ${d};
            font-size: 12px;
        }
        .link {
            border: 1px dashed ${o};
            background: transparent;
            color: ${d};
            border-radius: 8px;
            padding: 6px 10px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .link:hover {
            color: ${t};
            border-color: ${t};
        }
        .link.active {
            color: ${t};
            border-color: ${t};
            box-shadow: 0 0 0 3px ${w};
        }
    `,Grid:b.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        align-items: start;
        @media (min-width: 1200px) {
            grid-template-columns: 1.7fr 0.9fr;
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .sideTitle {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .printBlock {
            display: grid;
            gap: 8px;
        }
        .printBlock .line {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
        }
        .printBlock .k {
            color: ${d};
        }
        .printBlock .v {
            color: ${x};
        }
        .tips ul {
            margin: 0;
            padding-left: 18px;
            color: ${d};
        }
        .tips li {
            margin-bottom: 8px;
        }
    `,TableWrap:b.div`
        overflow: auto;
        border-radius: 12px;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${j};
            border-bottom: 1px solid ${o};
            text-align: left;
            padding: 10px;
            color: ${d};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${o};
            vertical-align: top;
        }

        tbody tr:hover {
            background: color-mix(in oklab, ${t} 10%, transparent);
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .prod .nm {
            font-weight: 600;
        }
        .prod .subLink {
            display: inline-block;
            margin-top: 4px;
            font-size: 12px;
            color: ${d};
            border-bottom: 1px dashed ${o};
            transition: color 0.25s, border-color 0.25s;
        }
        .prod .subLink:hover {
            color: ${t};
            border-color: ${t};
        }

        .status {
            padding: 4px 8px;
            border-radius: 999px;
            font-weight: 700;
            font-size: 11px;
            border: 1px solid ${o};
            background: color-mix(in oklab, ${t} 8%, transparent);
            color: ${x};
        }
        .status.near {
            background: color-mix(in oklab, ${P} 16%, transparent);
            border-color: color-mix(in oklab, ${P} 40%, ${o});
        }
        .status.expired {
            background: color-mix(in oklab, ${A} 16%, transparent);
            border-color: color-mix(in oklab, ${A} 40%, ${o});
        }

        .actions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .btnGhost.small {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${o};
            background: ${j};
            color: ${x};
            font-weight: 600;
            font-size: 12px;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnGhost.small:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${w};
        }
        [aria-disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,Empty:b.div`
        display: grid;
        place-items: center;
        gap: 6px;
        padding: 40px 0;
        .icon {
            font-size: 36px;
        }
        h4 {
            font-size: 16px;
        }
        p {
            color: ${d};
        }
    `,Overlay:b.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
    `,Modal:b.div`
        width: min(640px, 92vw);
        overflow: hidden;
        border-radius: 14px;
        border: 1px solid ${o};
        background: ${j};
        color: ${x};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${o};
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
            border-top: 1px solid ${o};
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${j};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${w};
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }

        .labelWrap {
            border: 1px dashed ${o};
            border-radius: 12px;
            padding: 16px;
        }
        .labelHeader,
        .labelFooter {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${d};
            font-size: 12px;
        }
        .labelHeader {
            margin-bottom: 10px;
        }
        .labelFooter {
            margin-top: 10px;
        }
        .labelMain .big {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .labelMain .meta {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            color: ${d};
            font-size: 12px;
        }
        .barcode {
            margin-top: 12px;
            height: 40px;
            background: repeating-linear-gradient(
                90deg,
                #111 0px,
                #111 2px,
                transparent 2px,
                transparent 4px
            );
            border-radius: 6px;
        }
    `},h=(y,k=!1)=>{const m=y instanceof Date?y:new Date(y),p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=v=>String(v).padStart(2,"0"),T=`${p[m.getDay()]} ${N[m.getMonth()]} ${i(m.getDate())} ${m.getFullYear()}`;return k?`${T} ${i(m.getHours())}:${i(m.getMinutes())}:${i(m.getSeconds())}hrs`:T},$=[{id:"BATCH-AX89",productId:"PROD-AMOX-500",product:"Amoxicillin 500mg",sku:"MED-AMOX-500",form:"Capsule",strength:"500mg",manufacturer:"Sun Pharma",mfg:"2025-04-15",expiry:"2026-03-31",daysLeft:177,qty:240,lowStock:!1,warehouse:"WH-DEL-01",lot:"LOT-DEL-23-09",receivedOn:"2025-09-22T10:35:20+05:30",unitCost:11.25,mrp:28,gst:12,hsn:"3003",status:"ok"},{id:"BATCH-CE12",productId:"PROD-CEFA-250",product:"Cefalexin 250mg",sku:"MED-CEFA-250",form:"Tablet",strength:"250mg",manufacturer:"Cipla",mfg:"2025-03-10",expiry:"2025-11-30",daysLeft:56,qty:42,lowStock:!0,warehouse:"WH-DEL-02",lot:"LOT-DEL-24-01",receivedOn:"2025-08-12T09:10:44+05:30",unitCost:3.9,mrp:10,gst:12,hsn:"3003",status:"near"},{id:"BATCH-PZ07",productId:"PROD-PARA-650",product:"Paracetamol 650mg",sku:"MED-PARA-650",form:"Tablet",strength:"650mg",manufacturer:"Dr. Reddy's",mfg:"2025-02-05",expiry:"2027-01-31",daysLeft:483,qty:980,lowStock:!1,warehouse:"WH-MUM-01",lot:"LOT-MUM-25-02",receivedOn:"2025-07-03T14:22:01+05:30",unitCost:1.65,mrp:4,gst:5,hsn:"3004",status:"ok"},{id:"BATCH-IB77",productId:"PROD-IBU-400",product:"Ibuprofen 400mg",sku:"MED-IBU-400",form:"Tablet",strength:"400mg",manufacturer:"Torrent",mfg:"2024-12-12",expiry:"2025-09-10",daysLeft:-24,qty:18,lowStock:!0,warehouse:"WH-DEL-01",lot:"LOT-DEL-24-07",receivedOn:"2025-04-01T11:05:31+05:30",unitCost:1.95,mrp:5.5,gst:12,hsn:"3004",status:"expired"},{id:"BATCH-OF23",productId:"PROD-OFLOX-200",product:"Ofloxacin 200mg",sku:"MED-OFLOX-200",form:"Tablet",strength:"200mg",manufacturer:"Alkem",mfg:"2025-01-20",expiry:"2026-05-31",daysLeft:239,qty:120,lowStock:!1,warehouse:"WH-MUM-02",lot:"LOT-MUM-25-03",receivedOn:"2025-06-18T10:09:22+05:30",unitCost:4.5,mrp:12,gst:12,hsn:"3004",status:"ok"},{id:"BATCH-MT10",productId:"PROD-MET-500",product:"Metformin 500mg",sku:"MED-MET-500",form:"Tablet",strength:"500mg",manufacturer:"Zydus",mfg:"2025-05-02",expiry:"2026-02-28",daysLeft:146,qty:65,lowStock:!1,warehouse:"WH-DEL-01",lot:"LOT-DEL-25-05",receivedOn:"2025-09-05T16:40:10+05:30",unitCost:.85,mrp:2,gst:5,hsn:"3004",status:"ok"},{id:"BATCH-AT21",productId:"PROD-ATOR-10",product:"Atorvastatin 10mg",sku:"MED-ATOR-10",form:"Tablet",strength:"10mg",manufacturer:"Pfizer",mfg:"2025-03-25",expiry:"2025-12-15",daysLeft:71,qty:28,lowStock:!0,warehouse:"WH-KOL-01",lot:"LOT-KOL-25-04",receivedOn:"2025-08-30T13:28:44+05:30",unitCost:3.1,mrp:8.5,gst:12,hsn:"3004",status:"near"},{id:"BATCH-CT45",productId:"PROD-CET-10",product:"Cetirizine 10mg",sku:"MED-CET-10",form:"Tablet",strength:"10mg",manufacturer:"Glenmark",mfg:"2025-06-01",expiry:"2027-05-31",daysLeft:603,qty:410,lowStock:!1,warehouse:"WH-DEL-02",lot:"LOT-DEL-25-06",receivedOn:"2025-09-10T12:05:59+05:30",unitCost:.75,mrp:2,gst:5,hsn:"3004",status:"ok"},{id:"BATCH-OM33",productId:"PROD-OMEP-20",product:"Omeprazole 20mg",sku:"MED-OMEP-20",form:"Capsule",strength:"20mg",manufacturer:"Intas",mfg:"2025-04-02",expiry:"2026-01-15",daysLeft:102,qty:52,lowStock:!1,warehouse:"WH-MUM-01",lot:"LOT-MUM-25-04",receivedOn:"2025-08-20T18:12:02+05:30",unitCost:1.2,mrp:3.2,gst:5,hsn:"3004",status:"near"},{id:"BATCH-AZ90",productId:"PROD-AZITH-500",product:"Azithromycin 500mg",sku:"MED-AZITH-500",form:"Tablet",strength:"500mg",manufacturer:"Aurobindo",mfg:"2025-02-14",expiry:"2025-08-31",daysLeft:-35,qty:9,lowStock:!0,warehouse:"WH-DEL-01",lot:"LOT-DEL-25-02",receivedOn:"2025-03-10T10:01:25+05:30",unitCost:12.5,mrp:35,gst:12,hsn:"3004",status:"expired"},{id:"BATCH-DS61",productId:"PROD-D3-60K",product:"Cholecalciferol 60k",sku:"MED-D3-60K",form:"Capsule",strength:"60000 IU",manufacturer:"Mankind",mfg:"2025-06-12",expiry:"2027-06-30",daysLeft:633,qty:205,lowStock:!1,warehouse:"WH-KOL-01",lot:"LOT-KOL-25-05",receivedOn:"2025-09-22T19:20:11+05:30",unitCost:9,mrp:22,gst:12,hsn:"3004",status:"ok"},{id:"BATCH-RS18",productId:"PROD-RABE-20",product:"Rabeprazole 20mg",sku:"MED-RABE-20",form:"Tablet",strength:"20mg",manufacturer:"Lupin",mfg:"2025-03-22",expiry:"2026-04-30",daysLeft:208,qty:33,lowStock:!0,warehouse:"WH-DEL-02",lot:"LOT-DEL-25-08",receivedOn:"2025-09-12T09:45:00+05:30",unitCost:2.2,mrp:6,gst:12,hsn:"3004",status:"ok"}],B={ok:"OK",near:"Near Expiry",expired:"Expired"},M=y=>`₹${Number(y).toFixed(2)}`,U=()=>{const y=f.useRef(null),[k,m]=f.useState(""),[p,N]=f.useState("all"),[i,T]=f.useState("expiry"),[v,E]=f.useState("asc"),[n,S]=f.useState(null),c=f.useMemo(()=>{const s=$.length,u=$.filter(l=>l.status==="near").length,L=$.filter(l=>l.status==="expired").length,a=$.reduce((l,r)=>l+r.qty,0);return{total:s,near:u,expired:L,qty:a}},[]),O=f.useMemo(()=>{let s=$;p==="near"&&(s=s.filter(a=>a.status==="near")),p==="expired"&&(s=s.filter(a=>a.status==="expired")),p==="low"&&(s=s.filter(a=>a.lowStock));const u=k.trim().toLowerCase();return u&&(s=s.filter(a=>[a.product,a.sku,a.id,a.manufacturer,a.warehouse,a.lot].join(" ").toLowerCase().includes(u))),[...s].sort((a,l)=>{const r=v==="asc"?1:-1;return i==="product"?a.product.localeCompare(l.product)*r:i==="qty"?(a.qty-l.qty)*r:i==="expiry"?(new Date(a.expiry)-new Date(l.expiry))*r:0})},[k,p,i,v]),D=s=>{i===s?E(u=>u==="asc"?"desc":"asc"):(T(s),E("asc"))},H=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},R=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},q=()=>{const u=[["Batch","Product","SKU","Form","Strength","Mfg","Expiry","DaysLeft","Qty","Status","Warehouse","Lot","ReceivedOn","UnitCost","MRP","GST%","HSN"].join(",")];O.forEach(r=>{u.push([r.id,r.product,r.sku,r.form,r.strength,h(r.mfg),h(r.expiry),r.daysLeft,r.qty,B[r.status],r.warehouse,r.lot,h(r.receivedOn,!0),r.unitCost,r.mrp,r.gst,r.hsn].map(z=>`"${String(z).replace(/"/g,'""')}"`).join(","))});const L=new Blob([u.join(`
`)],{type:"text/csv;charset=utf-8"}),a=URL.createObjectURL(L),l=document.createElement("a");l.href=a,l.download="batches.csv",l.click(),URL.revokeObjectURL(a)};return e.jsxs(g.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #label-print-area,
          body.print-section-mode #search-print-area * ,
          body.print-section-mode #label-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #label-print-area {
            position: absolute !important; left:0; top:0; width:100%;
          }
        }
      `}),e.jsxs(g.Header,{className:"card",children:[e.jsxs("div",{className:"lhs",children:[e.jsx("h1",{children:"Inventory — Batches"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(C,{to:"/inventory",end:!0,children:"Inventory"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Batches"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",c.total]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Near: ",c.near]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Expired: ",c.expired]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Qty: ",c.qty]})]})]}),e.jsxs("div",{className:"rhs",children:[e.jsx("button",{className:"btnGhost","aria-disabled":!0,title:"Demo only",children:"New Batch"}),e.jsx("button",{className:"btnGhost","aria-disabled":!0,title:"Demo only",children:"Adjust"}),e.jsx("button",{className:"btnGhost","aria-disabled":!0,title:"Demo only",children:"Transfer"}),e.jsx("button",{className:"btnPrimary",onClick:q,children:"Export CSV"}),e.jsx("button",{className:"btnPrimary",onClick:H,children:"Print"})]})]}),e.jsxs(g.Stats,{children:[e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Total Batches"}),e.jsx("div",{className:"value",children:c.total}),e.jsxs("div",{className:"sub",children:["as on ",h(new Date,!0)]})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Near Expiry"}),e.jsx("div",{className:"value",children:c.near}),e.jsx("div",{className:"sub",children:"≤ 60 days"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Expired"}),e.jsx("div",{className:"value",children:c.expired}),e.jsx("div",{className:"sub",children:"action required"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Total Quantity"}),e.jsx("div",{className:"value",children:c.qty}),e.jsx("div",{className:"sub",children:"all warehouses"})]})]}),e.jsxs(g.Toolbar,{className:"card",children:[e.jsx("div",{className:"search",children:e.jsx("input",{type:"text",value:k,onChange:s=>m(s.target.value),placeholder:"Search: product, SKU, batch, manufacturer, warehouse, lot…","aria-label":"Search batches"})}),e.jsxs("div",{className:"filters",children:[e.jsx("button",{className:p==="all"?"chip active":"chip",onClick:()=>N("all"),children:"All"}),e.jsx("button",{className:p==="near"?"chip active":"chip",onClick:()=>N("near"),children:"Near Expiry"}),e.jsx("button",{className:p==="expired"?"chip active":"chip",onClick:()=>N("expired"),children:"Expired"}),e.jsx("button",{className:p==="low"?"chip active":"chip",onClick:()=>N("low"),children:"Low Stock"})]}),e.jsxs("div",{className:"sort",children:[e.jsx("span",{children:"Sort:"}),e.jsxs("button",{className:i==="expiry"?"link active":"link",onClick:()=>D("expiry"),children:["Expiry ",i==="expiry"?v==="asc"?"▴":"▾":""]}),e.jsxs("button",{className:i==="qty"?"link active":"link",onClick:()=>D("qty"),children:["Qty ",i==="qty"?v==="asc"?"▴":"▾":""]}),e.jsxs("button",{className:i==="product"?"link active":"link",onClick:()=>D("product"),children:["Product ",i==="product"?v==="asc"?"▴":"▾":""]})]})]}),e.jsxs(g.Grid,{children:[e.jsx(g.TableWrap,{className:"card",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:26},children:e.jsx("input",{type:"checkbox",disabled:!0,"aria-label":"Select all (disabled)"})}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Product"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Form"}),e.jsx("th",{children:"Strength"}),e.jsx("th",{children:"Manufacturer"}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{children:"Lot"}),e.jsx("th",{children:"Received"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"Days"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Unit"}),e.jsx("th",{children:"MRP"}),e.jsx("th",{children:"GST"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"Status"}),e.jsx("th",{style:{width:180},children:"Actions"})]})}),e.jsxs("tbody",{children:[O.map(s=>e.jsxs("tr",{"data-state":s.status,children:[e.jsx("td",{children:e.jsx("input",{type:"checkbox",disabled:!0,"aria-label":`Select ${s.id} (disabled)`})}),e.jsx("td",{className:"mono",children:s.id}),e.jsx("td",{children:e.jsxs("div",{className:"prod",children:[e.jsx("div",{className:"nm",children:s.product}),e.jsx(C,{className:"subLink",to:`/products/${s.productId}`,children:"Open Product"})]})}),e.jsx("td",{className:"mono",children:s.sku}),e.jsx("td",{children:s.form}),e.jsx("td",{className:"mono",children:s.strength}),e.jsx("td",{children:s.manufacturer}),e.jsx("td",{className:"mono",children:s.warehouse}),e.jsx("td",{className:"mono",children:s.lot}),e.jsx("td",{className:"mono",children:h(s.receivedOn,!0)}),e.jsx("td",{className:"mono",children:h(s.expiry)}),e.jsx("td",{className:"mono",children:s.daysLeft}),e.jsx("td",{className:"mono",children:s.qty}),e.jsx("td",{className:"mono",children:M(s.unitCost)}),e.jsx("td",{className:"mono",children:M(s.mrp)}),e.jsxs("td",{className:"mono",children:[s.gst,"%"]}),e.jsx("td",{className:"mono",children:s.hsn}),e.jsx("td",{children:e.jsx("span",{className:`status ${s.status}`,children:B[s.status]})}),e.jsxs("td",{className:"actions",children:[e.jsx("button",{className:"btnGhost small",onClick:()=>S(s),children:"Label"}),e.jsx(C,{className:"btnGhost small",to:"/inventory/transfers",title:"Movement / Transfers",children:"Movement"}),e.jsx("button",{className:"btnGhost small","aria-disabled":!0,title:"Demo only",children:"Mark Damaged"})]})]},s.id)),O.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:19,children:e.jsxs(g.Empty,{children:[e.jsx("div",{className:"icon","aria-hidden":!0,children:"📦"}),e.jsx("h4",{children:"No batches found"}),e.jsx("p",{children:"Try clearing filters or searching a different keyword."})]})})})]})]})}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card",id:"search-print-area",ref:y,children:[e.jsx("h3",{className:"sideTitle",children:"Print Summary — Batches"}),e.jsxs("div",{className:"printBlock",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Printed"}),e.jsx("span",{className:"v",children:h(new Date,!0)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Total Batches"}),e.jsx("span",{className:"v",children:c.total})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Near Expiry"}),e.jsx("span",{className:"v",children:c.near})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Expired"}),e.jsx("span",{className:"v",children:c.expired})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Total Quantity"}),e.jsx("span",{className:"v",children:c.qty})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Quick Filter"}),e.jsx("span",{className:"v",children:p})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Search"}),e.jsx("span",{className:"v",children:k||"—"})]})]})]}),e.jsxs("div",{className:"card tips",children:[e.jsx("h3",{className:"sideTitle",children:"Tips"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use search for SKU, batch, lot, warehouse."}),e.jsx("li",{children:"“Label” shows a printable preview for the selected batch."}),e.jsx("li",{children:"All create/update actions are disabled in demo."})]})]})]})]}),n&&e.jsx(g.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:()=>S(null),children:e.jsxs(g.Modal,{className:"card",onMouseDown:s=>s.stopPropagation(),children:[e.jsx("header",{children:e.jsxs("h4",{children:["Label Preview — ",n.id]})}),e.jsx("div",{className:"body",children:e.jsxs("div",{className:"labelWrap",id:"label-print-area",children:[e.jsxs("div",{className:"labelHeader",children:[e.jsxs("div",{className:"brand",children:["Warehouse: ",n.warehouse]}),e.jsx("div",{className:"date",children:h(new Date,!0)})]}),e.jsxs("div",{className:"labelMain",children:[e.jsx("div",{className:"big",children:n.product}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["SKU: ",n.sku]}),e.jsxs("span",{children:["Batch: ",n.id]}),e.jsxs("span",{children:["Lot: ",n.lot]}),e.jsxs("span",{children:["Qty: ",n.qty]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Form: ",n.form]}),e.jsxs("span",{children:["Strength: ",n.strength]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Mfg: ",h(n.mfg)]}),e.jsxs("span",{children:["Exp: ",h(n.expiry)]})]}),e.jsx("div",{className:"barcode","aria-hidden":!0})]}),e.jsxs("div",{className:"labelFooter",children:[e.jsxs("span",{children:["MRP: ",M(n.mrp)]}),e.jsxs("span",{children:["GST: ",n.gst,"%"]}),e.jsxs("span",{children:["HSN: ",n.hsn]})]})]})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:()=>S(null),children:"Close"}),e.jsx("button",{className:"btnPrimary",onClick:R,children:"Print Label"})]})]})})]})};export{U as default};
