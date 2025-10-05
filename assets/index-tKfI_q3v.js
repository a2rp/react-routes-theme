import{d as v,s as V,u as J,r as h,j as e,N as Y}from"./index-BpMGcZ_2.js";const j="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",N="var(--card, #111318)",n="var(--border, #23262d)",r="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",K="var(--danger, #ef4444)",F="var(--warn, #f59e0b)",ee="var(--radius, 16px)",g={Page:v.div`
        padding: 24px 0 64px;
        color: ${j};
    `,Header:v.header`
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
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${c};
        }
        .breadcrumbs .current {
            color: ${j};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${c};
            font-size: 12px;
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
            border: 1px solid ${n};
            background: ${N};
            color: ${j};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `,KPIs:v.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (min-width: 980px) {
            grid-template-columns: repeat(5, 1fr);
        }

        .kpi {
            padding: 14px 16px;
        }
        .label {
            color: ${c};
            font-size: 12px;
        }
        .value {
            font-size: 22px;
            font-weight: 700;
            margin-top: 2px;
        }
        .hint {
            color: ${c};
            font-size: 12px;
            margin-top: 4px;
        }
    `,Toolbar:v.section`
        padding: 12px 14px;
        margin-bottom: 16px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
            .row {
                grid-template-columns: 1.5fr 2fr auto;
                align-items: end;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${c};
            margin-bottom: 6px;
        }
        .search input {
            width: 100%;
        }
        .filters {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(3, 1fr);
        }
        .sortGroup {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${n};
            background: ${N};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${j};
            font-weight: 600;
        }
        .chip.active,
        .chip:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${D};
        }
    `,TableWrap:v.section`
        padding: 0;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${N};
            border-bottom: 1px solid ${n};
            color: ${r};
            text-align: left;
            padding: 10px;
        }
        tbody td {
            padding: 12px 10px;
            border-bottom: 1px solid ${n};
            vertical-align: top;
        }
        tbody tr {
            cursor: pointer;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
        tbody tr:focus-visible {
            outline: none;
            box-shadow: inset 0 0 0 2px ${r};
        }

        .muted {
            color: ${c};
            font-size: 12px;
        }

        .lot .id {
            font-weight: 700;
        }
        .lot .sku {
            color: ${c};
            font-size: 12px;
        }

        .prod .name {
            font-weight: 600;
        }
        .prod .sub {
            color: ${c};
            font-size: 12px;
        }

        .dateCol {
            line-height: 1.4;
        }

        .qty .row {
            display: grid;
            grid-template-columns: auto auto auto auto auto auto;
            gap: 8px;
            align-items: center;
        }
        .qty .label {
            color: ${c};
            font-size: 12px;
        }
        .qty .val {
            font-weight: 700;
        }

        .qty .bar {
            margin-top: 6px;
            height: 8px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid ${n};
        }
        .qty .bar span {
            display: block;
            height: 100%;
            border-radius: 999px;
            background: ${r};
        }

        .loc {
            line-height: 1.4;
        }

        .price {
            line-height: 1.4;
        }
        .price .muted {
            margin-left: 4px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${n};
            padding: 4px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 8%, transparent);
            color: ${j};
            font-weight: 600;
            white-space: nowrap;
        }
        .badge.ok {
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
        .badge.warn {
            background: color-mix(in oklab, ${F} 18%, transparent);
            border-color: color-mix(in oklab, ${F} 50%, ${n});
        }
        .badge.danger {
            background: color-mix(in oklab, ${K} 15%, transparent);
            border-color: color-mix(in oklab, ${K} 55%, ${n});
        }
        .badge.soft {
            background: color-mix(in oklab, ${r} 6%, transparent);
        }
    `,Empty:v.div`
        padding: 36px 0;
        display: grid;
        place-items: center;
        gap: 6px;
        .icon {
            font-size: 28px;
        }
        .title {
            font-weight: 700;
        }
        .desc {
            color: ${c};
        }
    `,Drawer:v.div`
        position: fixed;
        inset: 0;
        display: grid;
        justify-items: end;
        z-index: 40;
        background: rgba(2, 6, 23, 0.55);

        .sheet {
            position: relative; /* <-- add this */
            width: min(860px, 96vw);
            height: 100%;
            background: ${N};
            border-left: 1px solid ${n};
            box-shadow: -20px 0 60px rgba(0, 0, 0, 0.35);
            display: grid;
            grid-template-rows: auto 1fr;
        }

        /* floating close button */
        .closeX {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border-radius: 8px;
            border: 1px solid ${n};
            background: ${N};
            color: ${j};
            font-size: 18px;
            line-height: 1;
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .closeX:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${D};
        }

        .hdr {
            padding: 14px 16px;
            border-bottom: 1px solid ${n};
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .hdr h2 {
            font-size: 18px;
        }
        .hdr .sub {
            margin-top: 4px;
            color: ${c};
        }
        .hdr-actions {
            display: flex;
            gap: 8px;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${N};
            color: ${j};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${D};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }

        .body {
            padding: 16px;
            overflow: auto;
            display: grid;
            gap: 16px;
        }

        .info .grid {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, 1fr);
            @media (min-width: 900px) {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        .label {
            color: ${c};
            font-size: 12px;
        }
        .value {
            font-weight: 700;
        }

        .chips {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .actions {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        h3 {
            font-size: 14px;
            margin-bottom: 10px;
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
            background: ${r};
            border: 1px solid ${n};
        }

        .printCard .labelTop {
            margin-bottom: 10px;
        }
        .printCard .big {
            font-weight: 800;
            font-size: 18px;
        }
        .printCard .sub {
            color: ${c};
        }
        .printCard .grid.two {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 10px;
        }
        @media (min-width: 800px) {
            .printCard .grid.two {
                grid-template-columns: 1fr 1fr;
            }
        }
        .printCard .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px;
        }
        .printCard .k {
            color: ${c};
        }
    `,Overlay:v.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:v.div`
        width: min(420px, 90vw);
        border-radius: ${ee};
        border: 1px solid ${n};
        background: ${N};
        color: ${j};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;
        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${n};
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
            border-top: 1px solid ${n};
        }
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${N};
            color: ${j};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s;
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `},y=o=>{const d=o instanceof Date?o:new Date(o),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],C=$=>String($).padStart(2,"0");return`${x[d.getDay()]} ${b[d.getMonth()]} ${C(d.getDate())} ${d.getFullYear()}`},T=o=>{const d=o instanceof Date?o:new Date(o),x=b=>String(b).padStart(2,"0");return`${y(d)} ${x(d.getHours())}:${x(d.getMinutes())}:${x(d.getSeconds())}hrs`},se=o=>{const d=o instanceof Date?o:new Date(o),x=b=>String(b).padStart(2,"0");return`${x(d.getHours())}:${x(d.getMinutes())}:${x(d.getSeconds())}hrs`},k=[{id:"LOT-AX9K21",productId:"MED-AMOX-500",productName:"Amoxicillin 500mg Capsules",sku:"AMOX-500-CAP",batch:"B2309A",mfg:"2024-09-05T10:00:00+05:30",expiry:"2026-03-31T23:59:59+05:30",qtyOnHand:1200,qtyReserved:150,qtyAvailable:1050,unitCost:6.25,mrp:12.5,valuation:7500,status:"in_stock",warehouse:"WH-DEL",bin:"A-03-2",supplier:"Medico Labs",receivedAt:"2025-02-18T13:12:54+05:30",lastMovementAt:"2025-09-21T11:24:02+05:30"},{id:"LOT-C2J7M0",productId:"MED-PARA-650",productName:"Paracetamol 650mg Tablets",sku:"PARA-650-TAB",batch:"P2411Z",mfg:"2024-11-15T09:00:00+05:30",expiry:"2026-11-30T23:59:59+05:30",qtyOnHand:340,qtyReserved:20,qtyAvailable:320,unitCost:1.9,mrp:4,valuation:646,status:"low",warehouse:"WH-DEL",bin:"B-01-1",supplier:"HealPlus Pharma",receivedAt:"2025-03-01T10:08:10+05:30",lastMovementAt:"2025-08-19T17:20:10+05:30"},{id:"LOT-ZP88KQ",productId:"MED-CET-10",productName:"Cetirizine 10mg Tablets",sku:"CET-10-TAB",batch:"C2502K",mfg:"2025-02-01T10:00:00+05:30",expiry:"2025-11-30T23:59:59+05:30",qtyOnHand:90,qtyReserved:10,qtyAvailable:80,unitCost:.9,mrp:2.5,valuation:81,status:"expiring",warehouse:"WH-MUM",bin:"M-02-5",supplier:"Orbit Remedies",receivedAt:"2025-02-20T09:20:34+05:30",lastMovementAt:"2025-09-02T16:02:11+05:30"},{id:"LOT-K1R4DX",productId:"MED-RAB-20",productName:"Rabeprazole 20mg Tablets",sku:"RAB-20-TAB",batch:"R2408S",mfg:"2024-08-20T10:00:00+05:30",expiry:"2025-08-31T23:59:59+05:30",qtyOnHand:0,qtyReserved:0,qtyAvailable:0,unitCost:3.1,mrp:7.5,valuation:0,status:"expired",warehouse:"WH-MUM",bin:"M-07-1",supplier:"ZenCore Healthcare",receivedAt:"2024-09-01T11:16:40+05:30",lastMovementAt:"2025-08-31T08:10:01+05:30"},{id:"LOT-7NY42F",productId:"MED-AZT-250",productName:"Azithromycin 250mg Tablets",sku:"AZT-250-TAB",batch:"A2505N",mfg:"2025-05-01T10:00:00+05:30",expiry:"2027-04-30T23:59:59+05:30",qtyOnHand:540,qtyReserved:60,qtyAvailable:480,unitCost:5.2,mrp:11,valuation:2808,status:"in_stock",warehouse:"WH-DEL",bin:"A-05-4",supplier:"Medico Labs",receivedAt:"2025-05-14T12:01:00+05:30",lastMovementAt:"2025-09-26T10:45:12+05:30"},{id:"LOT-VB4T56",productId:"MED-IBU-400",productName:"Ibuprofen 400mg Tablets",sku:"IBU-400-TAB",batch:"I2503B",mfg:"2025-03-20T10:00:00+05:30",expiry:"2026-09-30T23:59:59+05:30",qtyOnHand:210,qtyReserved:0,qtyAvailable:210,unitCost:2.1,mrp:5.2,valuation:441,status:"in_stock",warehouse:"WH-BLR",bin:"BL-01-1",supplier:"Orbit Remedies",receivedAt:"2025-03-28T15:22:11+05:30",lastMovementAt:"2025-09-18T14:55:42+05:30"},{id:"LOT-PT4L9A",productId:"MED-MULTI-60",productName:"Multivitamin 60 Tabs",sku:"MULTI-60",batch:"MV2501N",mfg:"2025-01-12T10:00:00+05:30",expiry:"2027-01-31T23:59:59+05:30",qtyOnHand:75,qtyReserved:5,qtyAvailable:70,unitCost:8.9,mrp:16,valuation:667.5,status:"low",warehouse:"WH-BLR",bin:"BL-07-3",supplier:"HealPlus Pharma",receivedAt:"2025-01-30T18:10:30+05:30",lastMovementAt:"2025-09-29T18:40:00+05:30"},{id:"LOT-CT2R8E",productId:"MED-ORS-200",productName:"ORS 200ml",sku:"ORS-200",batch:"O2506L",mfg:"2025-06-12T10:00:00+05:30",expiry:"2026-06-30T23:59:59+05:30",qtyOnHand:320,qtyReserved:40,qtyAvailable:280,unitCost:10,mrp:18,valuation:3200,status:"in_stock",warehouse:"WH-DEL",bin:"A-02-2",supplier:"ZenCore Healthcare",receivedAt:"2025-06-20T09:45:12+05:30",lastMovementAt:"2025-09-24T12:10:20+05:30"},{id:"LOT-LM94TZ",productId:"MED-GLU-75",productName:"Glucose Powder 75g",sku:"GLU-75",batch:"G2507T",mfg:"2025-07-01T10:00:00+05:30",expiry:"2026-12-31T23:59:59+05:30",qtyOnHand:150,qtyReserved:0,qtyAvailable:150,unitCost:3.2,mrp:6,valuation:480,status:"in_stock",warehouse:"WH-MUM",bin:"M-03-4",supplier:"Medico Labs",receivedAt:"2025-07-10T16:12:00+05:30",lastMovementAt:"2025-09-27T13:22:30+05:30"},{id:"LOT-AD8Q3W",productId:"MED-SAL-0.9",productName:"Normal Saline 0.9% 500ml",sku:"SAL-0.9-500",batch:"S2505H",mfg:"2025-05-15T10:00:00+05:30",expiry:"2026-05-31T23:59:59+05:30",qtyOnHand:40,qtyReserved:2,qtyAvailable:38,unitCost:22.5,mrp:38,valuation:900,status:"expiring",warehouse:"WH-DEL",bin:"A-10-2",supplier:"Orbit Remedies",receivedAt:"2025-05-25T11:10:10+05:30",lastMovementAt:"2025-09-20T09:12:50+05:30"}],M={in_stock:{label:"In Stock",tone:"ok"},low:{label:"Low",tone:"warn"},expiring:{label:"Expiring",tone:"warn"},expired:{label:"Expired",tone:"danger"}},_=["WH-DEL","WH-MUM","WH-BLR"],te=()=>{var G,Q;const[o,d]=V(),x=J(),[b,C]=h.useState(""),[$,B]=h.useState("all"),[L,I]=h.useState("all"),[f,S]=h.useState("expiry"),[O,U]=h.useState("asc"),[a,E]=h.useState(null),z=h.useRef(null);h.useEffect(()=>{const s=o.get("lot");if(!s)return;const l=k.find(t=>t.id===s);E(l||null)},[o]);const W=s=>{E(s),d(l=>{const t=new URLSearchParams(l);return t.set("lot",s.id),t},{replace:!1})},q=()=>{E(null),d(s=>{const l=new URLSearchParams(s);return l.delete("lot"),l},{replace:!0})},H=h.useMemo(()=>{const s=b.trim().toLowerCase().split(/\s+/).filter(Boolean);let l=k.filter(t=>{const m=$==="all"?!0:t.warehouse===$,u=L==="all"?!0:t.status===L;if(!m||!u)return!1;if(s.length===0)return!0;const p=`${t.id} ${t.productName} ${t.sku} ${t.batch} ${t.productId} ${t.warehouse} ${t.bin}`.toLowerCase();return s.every(i=>p.includes(i))});return l=l.sort((t,m)=>{const u=O==="asc"?1:-1;return f==="expiry"?(new Date(t.expiry)-new Date(m.expiry))*u:f==="qty"?(t.qtyAvailable-m.qtyAvailable)*u:f==="updated"?(new Date(t.lastMovementAt)-new Date(m.lastMovementAt))*u:0}),l},[b,$,L,f,O]),w=h.useMemo(()=>{const s=k.length,l=k.reduce((p,i)=>p+i.qtyOnHand,0),t=k.filter(p=>p.status==="expiring").length,m=k.filter(p=>p.status==="expired").length,u=k.filter(p=>p.status==="low").length;return{totalLots:s,totalQty:l,expiringCount:t,expiredCount:m,lowCount:u}},[]),X=()=>{const s=["Lot ID","Product","SKU","Batch","Mfg","Expiry","Warehouse","Bin","Qty On Hand","Qty Reserved","Qty Available","Unit Cost","MRP","Valuation","Status","Supplier","Last Movement"],l=H.map(i=>{var R;return[i.id,i.productName,i.sku,i.batch,y(i.mfg),y(i.expiry),i.warehouse,i.bin,i.qtyOnHand,i.qtyReserved,i.qtyAvailable,i.unitCost,i.mrp,i.valuation,((R=M[i.status])==null?void 0:R.label)||i.status,i.supplier,T(i.lastMovementAt)]}),t=[s,...l].map(i=>i.map(R=>`"${String(R).replace(/"/g,'""')}"`).join(",")).join(`
`),m=new Blob([t],{type:"text/csv;charset=utf-8"}),u=URL.createObjectURL(m),p=document.createElement("a");p.href=u,p.download="inventory-lots.csv",p.click(),URL.revokeObjectURL(u)},Z=()=>{z.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},[P,A]=h.useState(null);return h.useEffect(()=>{if(!a)return;const s=l=>{l.key==="Escape"&&q()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[a]),e.jsxs(g.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(g.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Inventory Lots"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(Y,{to:"/inventory",children:"Inventory"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Lots"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",w.totalLots]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Qty: ",w.totalQty]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",T(new Date)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>x(-1),title:"Back",children:"Back"}),e.jsx("button",{className:"btnPrimary",onClick:X,title:"Export CSV",children:"Export"})]})]}),e.jsxs(g.KPIs,{children:[e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Lots"}),e.jsx("div",{className:"value",children:w.totalLots}),e.jsxs("div",{className:"hint",children:[_.length," warehouses"]})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"On Hand"}),e.jsx("div",{className:"value",children:w.totalQty}),e.jsx("div",{className:"hint",children:"All active lots"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Expiring"}),e.jsx("div",{className:"value",children:w.expiringCount}),e.jsx("div",{className:"hint",children:"Next few months"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Expired"}),e.jsx("div",{className:"value",children:w.expiredCount}),e.jsx("div",{className:"hint",children:"Action required"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Low Stock"}),e.jsx("div",{className:"value",children:w.lowCount}),e.jsx("div",{className:"hint",children:"Below threshold"})]})]}),e.jsx(g.Toolbar,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"search",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{value:b,onChange:s=>C(s.target.value),placeholder:"Search lot / product / sku / batch / location","aria-label":"Search lots"})]}),e.jsxs("div",{className:"filters",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Warehouse"}),e.jsxs("select",{value:$,onChange:s=>B(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),_.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{value:L,onChange:s=>I(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"in_stock",children:"In Stock"}),e.jsx("option",{value:"low",children:"Low"}),e.jsx("option",{value:"expiring",children:"Expiring"}),e.jsx("option",{value:"expired",children:"Expired"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Sort"}),e.jsxs("div",{className:"sortGroup",role:"group","aria-label":"Sort",children:[e.jsx("button",{className:`chip ${f==="expiry"?"active":""}`,onClick:()=>S("expiry"),children:"Expiry"}),e.jsx("button",{className:`chip ${f==="qty"?"active":""}`,onClick:()=>S("qty"),children:"Qty"}),e.jsx("button",{className:`chip ${f==="updated"?"active":""}`,onClick:()=>S("updated"),children:"Updated"}),e.jsx("button",{className:"chip",onClick:()=>U(s=>s==="asc"?"desc":"asc"),title:"Toggle direction",children:O==="asc"?"Asc":"Desc"})]})]})]}),e.jsx("div",{className:"cta",children:e.jsx("button",{className:"btnGhost",onClick:()=>{C(""),B("all"),I("all"),S("expiry"),U("asc")},children:"Reset"})})]})}),e.jsx(g.TableWrap,{className:"card",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Lot"}),e.jsx("th",{children:"Product"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Updated"})]})}),e.jsxs("tbody",{children:[H.map(s=>{var l,t;return e.jsxs("tr",{onClick:()=>W(s),tabIndex:0,onKeyDown:m=>m.key==="Enter"?W(s):null,children:[e.jsx("td",{children:e.jsxs("div",{className:"lot",children:[e.jsx("div",{className:"id",children:s.id}),e.jsx("div",{className:"sku",children:s.sku})]})}),e.jsx("td",{children:e.jsxs("div",{className:"prod",children:[e.jsx("div",{className:"name",children:s.productName}),e.jsx("div",{className:"sub",children:s.productId})]})}),e.jsx("td",{children:s.batch}),e.jsx("td",{children:e.jsxs("div",{className:"dateCol",children:[e.jsx("div",{children:y(s.expiry)}),e.jsxs("div",{className:"muted",children:["Mfg ",y(s.mfg)]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"qty",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"OH"}),e.jsx("span",{className:"val",children:s.qtyOnHand}),e.jsx("span",{className:"label",children:"Res"}),e.jsx("span",{className:"val",children:s.qtyReserved}),e.jsx("span",{className:"label",children:"Avail"}),e.jsx("span",{className:"val",children:s.qtyAvailable})]}),e.jsx("div",{className:"bar",children:e.jsx("span",{style:{width:`${Math.min(100,s.qtyAvailable/Math.max(1,s.qtyOnHand||s.qtyAvailable)*100)}%`}})})]})}),e.jsx("td",{children:e.jsxs("div",{className:"loc",children:[e.jsx("div",{children:s.warehouse}),e.jsx("div",{className:"muted",children:s.bin})]})}),e.jsx("td",{children:e.jsxs("div",{className:"price",children:[e.jsxs("div",{children:["₹",s.unitCost.toFixed(2)," ",e.jsx("span",{className:"muted",children:"cost"})]}),e.jsxs("div",{children:["₹",s.mrp.toFixed(2)," ",e.jsx("span",{className:"muted",children:"MRP"})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`badge ${((l=M[s.status])==null?void 0:l.tone)||""}`,children:((t=M[s.status])==null?void 0:t.label)||s.status})}),e.jsx("td",{children:e.jsxs("div",{className:"dateCol",children:[e.jsx("div",{children:y(s.lastMovementAt)}),e.jsx("div",{className:"muted",children:se(s.lastMovementAt)})]})})]},s.id)}),H.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsxs(g.Empty,{children:[e.jsx("div",{className:"icon",children:"📦"}),e.jsx("div",{className:"title",children:"No lots match your filters"}),e.jsx("div",{className:"desc",children:"Try resetting filters or search with a different term."})]})})})]})]})}),a&&e.jsx(g.Drawer,{role:"dialog","aria-modal":"true","aria-labelledby":"lot-title",onMouseDown:s=>{s.target===s.currentTarget&&q()},children:e.jsxs("div",{className:"sheet",onMouseDown:s=>s.stopPropagation(),children:[e.jsx("button",{className:"closeX",onClick:q,"aria-label":"Close panel",children:e.jsx("span",{"aria-hidden":!0,children:"×"})}),e.jsxs("header",{className:"hdr",children:[e.jsxs("div",{children:[e.jsx("h2",{id:"lot-title",children:a.productName}),e.jsxs("div",{className:"sub",children:[e.jsx("span",{className:"id",children:a.id})," • ",e.jsx("span",{className:"sku",children:a.sku})]})]}),e.jsxs("div",{className:"hdr-actions",children:[e.jsx("button",{className:"btnGhost",onClick:q,children:"Close"}),e.jsx("button",{className:"btnPrimary",onClick:Z,children:"Print"})]})]}),e.jsxs("div",{className:"body",children:[e.jsxs("section",{className:"card info",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Batch"}),e.jsx("div",{className:"value",children:a.batch})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Expiry"}),e.jsx("div",{className:"value",children:y(a.expiry)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Manufactured"}),e.jsx("div",{className:"value",children:y(a.mfg)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Warehouse"}),e.jsx("div",{className:"value",children:a.warehouse})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Bin"}),e.jsx("div",{className:"value",children:a.bin})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Supplier"}),e.jsx("div",{className:"value",children:a.supplier})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"On Hand"}),e.jsx("div",{className:"value",children:a.qtyOnHand})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Reserved"}),e.jsx("div",{className:"value",children:a.qtyReserved})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Available"}),e.jsx("div",{className:"value",children:a.qtyAvailable})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Unit Cost"}),e.jsxs("div",{className:"value",children:["₹",a.unitCost.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"MRP"}),e.jsxs("div",{className:"value",children:["₹",a.mrp.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Valuation"}),e.jsxs("div",{className:"value",children:["₹",a.valuation]})]})]}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:`badge ${((G=M[a.status])==null?void 0:G.tone)||""}`,children:((Q=M[a.status])==null?void 0:Q.label)||a.status}),e.jsx("span",{className:"badge soft",children:a.productId})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>A({title:"Adjust Stock",msg:"Disabled in demo."}),children:"Adjust Stock"}),e.jsx("button",{className:"btnGhost",onClick:()=>A({title:"Archive Lot",msg:"Disabled in demo."}),children:"Archive"}),e.jsx("button",{className:"btnGhost",onClick:()=>A({title:"Relabel",msg:"Disabled in demo."}),children:"Relabel"})]})]}),e.jsxs("section",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsxs("strong",{children:["Transfer to ",a.warehouse,"/",a.bin]}),e.jsx("div",{className:"muted",children:T(a.lastMovementAt)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Received"}),e.jsx("div",{className:"muted",children:T(a.receivedAt)})]})]})]})]}),e.jsxs("section",{className:"card printCard",id:"search-print-area",ref:z,children:[e.jsxs("div",{className:"labelTop",children:[e.jsx("div",{className:"big",children:a.productName}),e.jsxs("div",{className:"sub",children:["SKU: ",a.sku," • Batch: ",a.batch]})]}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Lot"}),e.jsx("span",{className:"v",children:a.id})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Expiry"}),e.jsx("span",{className:"v",children:y(a.expiry)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Warehouse"}),e.jsx("span",{className:"v",children:a.warehouse})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Bin"}),e.jsx("span",{className:"v",children:a.bin})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"On Hand"}),e.jsx("span",{className:"v",children:a.qtyOnHand})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Reserved"}),e.jsx("span",{className:"v",children:a.qtyReserved})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Available"}),e.jsx("span",{className:"v",children:a.qtyAvailable})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Supplier"}),e.jsx("span",{className:"v",children:a.supplier})]})]})]}),e.jsxs("div",{className:"footer",children:["Generated: ",T(new Date)]})]})]})]})}),P&&e.jsx(g.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:()=>A(null),children:e.jsxs(g.Modal,{className:"card",onMouseDown:s=>s.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:P.title})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:P.msg})}),e.jsx("footer",{children:e.jsx("button",{className:"btnGhost",onClick:()=>A(null),children:"Close"})})]})})]})};export{te as default};
