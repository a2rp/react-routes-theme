import{d as g,r as n,j as e,N as T}from"./index-P_7RwasD.js";const i="var(--text, #f3f4f6)",b="var(--muted, #a0a0a7)",x="var(--card, #111318)",o="var(--border, #23262d)",a="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",q="var(--radius, 16px)",j={Page:g.div`
        display: grid;
        gap: 16px;
        color: ${i};
    `,Header:g.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px 18px;
        align-items: center;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${b};
            font-size: 12px;
            flex-wrap: wrap;
        }

        .breadcrumbs {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${b};
        }
        .breadcrumbs .current {
            color: ${i};
        }

        .right {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .btn {
            border: 1px solid ${o};
            background: ${x};
            color: ${i};
            border-radius: 10px;
            padding: 8px 12px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btn:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${$};
        }
        .btn.primary {
            border-color: ${a};
        }
        .btn:disabled {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
    `,Stats:g.section`
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 12px;
        padding: 14px 16px;

        .item {
            border: 1px solid ${o};
            border-radius: 12px;
            padding: 12px;
            background: color-mix(in oklab, ${x} 96%, transparent);
        }
        .k {
            color: ${b};
            font-size: 12px;
        }
        .v {
            margin-top: 6px;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .label-low {
            color: ${a};
        }
        .label-critical {
            color: ${i};
            background: color-mix(in oklab, ${a} 14%, transparent);
            padding: 2px 6px;
            border-radius: 8px;
            display: inline-block;
        }
        @media (max-width: 980px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,Toolbar:g.section`
        padding: 12px;
        display: grid;
        gap: 12px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 180px 180px 200px;
            align-items: end;
        }
        .row.actions {
            grid-template-columns: 1fr auto;
        }

        @media (max-width: 980px) {
            .row {
                grid-template-columns: 1fr;
            }
            .row.actions {
                grid-template-columns: 1fr;
            }
            .right {
                justify-self: start;
            }
        }

        .group label {
            display: block;
            font-size: 12px;
            color: ${b};
            margin-bottom: 6px;
        }
        .group input,
        .group select {
            width: 100%;
            border: 1px solid ${o};
            background: ${x};
            color: ${i};
            border-radius: 8px;
            padding: 8px 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .group input:focus,
        .group select:focus {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${$};
        }

        .group.checkbox .inline {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }
        .row.actions {
            display: grid;
            align-items: center;
        }
        .right {
            display: inline-flex;
            gap: 8px;
            justify-self: end;
        }

        .btn {
            border: 1px solid ${o};
            background: ${x};
            color: ${i};
            border-radius: 10px;
            padding: 8px 12px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btn:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${$};
        }
        .btn:disabled {
            opacity: 0.55;
            cursor: not-allowed;
            box-shadow: none;
        }
    `,TableWrap:g.section`
        overflow: auto;
        border: 1px solid ${o};
        border-radius: 12px;

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${x};
            border-bottom: 1px solid ${o};
            text-align: left;
            padding: 10px;
            font-weight: 700;
            color: ${i};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${o};
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${a} 8%, transparent);
        }
        tbody tr[data-status="Critical"] .title .link,
        tbody tr[data-status="Low"] .title .link {
            color: ${a};
        }

        .itemCell .title {
            display: flex;
            gap: 8px;
            align-items: baseline;
        }
        .itemCell .title .link {
            font-weight: 700;
        }
        .itemCell .sku {
            color: ${b};
            font-size: 12px;
        }
        .itemCell .meta {
            margin-top: 6px;
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${o};
            padding: 3px 8px;
            border-radius: 999px;
            color: ${i};
            background: color-mix(in oklab, ${a} 8%, transparent);
            font-size: 12px;
        }
        .chip.status.ok {
            opacity: 0.8;
        }
        .chip.status.low {
        }
        .chip.status.critical {
            background: color-mix(in oklab, ${a} 18%, transparent);
        }

        .bar {
            margin-top: 8px;
            height: 6px;
            background: color-mix(in oklab, ${x} 92%, transparent);
            border: 1px solid ${o};
            border-radius: 8px;
            overflow: hidden;
        }
        .bar .fill {
            display: block;
            height: 100%;
            background: ${a};
        }

        .bold {
            font-weight: 700;
        }
        .actions {
            text-align: right;
            display: flex;
            gap: 6px;
            justify-content: flex-end;
        }
        .btnLink {
            border: 1px solid ${o};
            background: ${x};
            color: ${i};
            border-radius: 8px;
            padding: 6px 10px;
            font-weight: 600;
            text-decoration: none;
        }
        .btnLink:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${$};
        }

        .btnTiny {
            border: 1px solid ${o};
            background: ${x};
            color: ${i};
            border-radius: 8px;
            padding: 6px 10px;
            font-weight: 600;
        }
        .btnTiny:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnTiny:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        .empty {
            padding: 24px 0;
            text-align: center;
        }
        .empty .big {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .empty .sub {
            color: ${b};
        }
    `,PrintCard:g.section`
        padding: 14px 16px;

        h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 8px;
            margin-bottom: 10px;
        }
        .grid .k {
            color: ${b};
        }
        .grid .v {
            color: ${i};
        }
        @media (max-width: 980px) {
            .grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .list {
            display: grid;
            gap: 8px;
        }
        .line {
            display: grid;
            grid-template-columns: 1.3fr 2fr;
            gap: 10px;
        }
        .line .name {
            font-weight: 700;
        }
        .line .meta {
            display: flex;
            gap: 12px;
            color: ${b};
            flex-wrap: wrap;
        }
    `,Overlay:g.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
    `,Modal:g.div`
        width: min(540px, 92vw);
        border: 1px solid ${o};
        border-radius: ${q};
        background: ${x};
        color: ${i};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${o};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${i};
        }
        footer {
            padding: 12px 16px;
            border-top: 1px solid ${o};
            display: flex;
            justify-content: flex-end;
        }

        .btn {
            border: 1px solid ${o};
            background: ${x};
            color: ${i};
            font-weight: 700;
            border-radius: 10px;
            padding: 8px 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btn:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${$};
        }
    `},S=(u,y)=>{const m=u instanceof Date?u:new Date(u),h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=f=>String(f).padStart(2,"0");return`${`${h[m.getDay()]} ${A[m.getMonth()]} ${d(m.getDate())} ${m.getFullYear()}`} ${d(m.getHours())}:${d(m.getMinutes())}:${d(m.getSeconds())}hrs`},k=[{id:"MED-AMOX-500",name:"Amoxicillin 500mg",sku:"AMX-500CAP",category:"Antibiotic",warehouse:"Central",supplier:{id:"VEND-SUNPH",name:"Sun Pharma"},stock:120,reorderPoint:200,stockPctOfROP:60,onOrder:0,leadTimeDays:5,uom:"Capsule",pack:"10 x 10",status:"Low",nextDeliveryEta:"2025-10-05T11:30:00+05:30",lastSoldAt:"2025-10-04T16:45:18+05:30",suggestedOrder:200},{id:"MED-PARA-650",name:"Paracetamol 650mg",sku:"PAR-650TAB",category:"Analgesic",warehouse:"Central",supplier:{id:"VEND-DRREDD",name:"Dr. Reddy’s"},stock:45,reorderPoint:300,stockPctOfROP:15,onOrder:50,leadTimeDays:4,uom:"Tablet",pack:"20 x 15",status:"Critical",nextDeliveryEta:"2025-10-06T10:10:00+05:30",lastSoldAt:"2025-10-04T12:20:40+05:30",suggestedOrder:400},{id:"MED-AZI-500",name:"Azithromycin 500mg",sku:"AZI-500TAB",category:"Antibiotic",warehouse:"Central",supplier:{id:"VEND-CIPLA",name:"Cipla"},stock:380,reorderPoint:300,stockPctOfROP:127,onOrder:0,leadTimeDays:6,uom:"Tablet",pack:"10 x 6",status:"OK",nextDeliveryEta:"",lastSoldAt:"2025-10-03T19:08:51+05:30",suggestedOrder:0},{id:"MED-IBUP-400",name:"Ibuprofen 400mg",sku:"IBU-400TAB",category:"Analgesic",warehouse:"Outlet-1",supplier:{id:"VEND-ABBOT",name:"Abbott"},stock:80,reorderPoint:180,stockPctOfROP:44,onOrder:60,leadTimeDays:7,uom:"Tablet",pack:"10 x 10",status:"Low",nextDeliveryEta:"2025-10-07T09:30:00+05:30",lastSoldAt:"2025-10-04T17:02:11+05:30",suggestedOrder:200},{id:"MED-ORS-20",name:"ORS Sachet 20.5g",sku:"ORS-20SAC",category:"Hydration",warehouse:"Outlet-2",supplier:{id:"VEND-FDC",name:"FDC"},stock:24,reorderPoint:140,stockPctOfROP:17,onOrder:0,leadTimeDays:3,uom:"Sachet",pack:"20 x 1",status:"Critical",nextDeliveryEta:"",lastSoldAt:"2025-10-04T14:30:05+05:30",suggestedOrder:180},{id:"MED-MULTI-AD",name:"Multivitamin Adult",sku:"MVT-ADULT",category:"Supplement",warehouse:"Central",supplier:{id:"VEND-GSK",name:"GSK"},stock:520,reorderPoint:400,stockPctOfROP:130,onOrder:0,leadTimeDays:4,uom:"Tablet",pack:"10 x 15",status:"OK",nextDeliveryEta:"",lastSoldAt:"2025-10-02T11:12:22+05:30",suggestedOrder:0},{id:"MED-RANT-150",name:"Ranitidine 150mg",sku:"RAN-150TAB",category:"Gastro",warehouse:"Outlet-1",supplier:{id:"VEND-TORRE",name:"Torrent"},stock:12,reorderPoint:160,stockPctOfROP:8,onOrder:0,leadTimeDays:6,uom:"Tablet",pack:"10 x 10",status:"Critical",nextDeliveryEta:"",lastSoldAt:"2025-10-04T13:40:59+05:30",suggestedOrder:220},{id:"MED-LOSA-50",name:"Losartan 50mg",sku:"LOS-50TAB",category:"Cardiac",warehouse:"Central",supplier:{id:"VEND-LUPIN",name:"Lupin"},stock:190,reorderPoint:250,stockPctOfROP:76,onOrder:100,leadTimeDays:8,uom:"Tablet",pack:"10 x 15",status:"Low",nextDeliveryEta:"2025-10-09T16:00:00+05:30",lastSoldAt:"2025-10-04T09:22:08+05:30",suggestedOrder:180},{id:"MED-METF-500",name:"Metformin 500mg",sku:"MET-500TAB",category:"Diabetes",warehouse:"Central",supplier:{id:"VEND-ALKE",name:"Alkem"},stock:600,reorderPoint:450,stockPctOfROP:133,onOrder:0,leadTimeDays:5,uom:"Tablet",pack:"20 x 10",status:"OK",nextDeliveryEta:"",lastSoldAt:"2025-10-01T17:11:35+05:30",suggestedOrder:0},{id:"MED-DICL-50",name:"Diclofenac 50mg",sku:"DIC-50TAB",category:"Analgesic",warehouse:"Outlet-2",supplier:{id:"VEND-IPCA",name:"IPCA"},stock:30,reorderPoint:160,stockPctOfROP:19,onOrder:30,leadTimeDays:5,uom:"Tablet",pack:"10 x 10",status:"Critical",nextDeliveryEta:"2025-10-06T15:00:00+05:30",lastSoldAt:"2025-10-04T15:58:44+05:30",suggestedOrder:200},{id:"MED-OMEP-20",name:"Omeprazole 20mg",sku:"OME-20CAP",category:"Gastro",warehouse:"Central",supplier:{id:"VEND-INTAS",name:"Intas"},stock:210,reorderPoint:220,stockPctOfROP:95,onOrder:0,leadTimeDays:7,uom:"Capsule",pack:"10 x 10",status:"Low",nextDeliveryEta:"",lastSoldAt:"2025-10-03T10:50:02+05:30",suggestedOrder:150},{id:"MED-CETI-10",name:"Cetirizine 10mg",sku:"CET-10TAB",category:"Allergy",warehouse:"Central",supplier:{id:"VEND-ZYDUS",name:"Zydus"},stock:95,reorderPoint:180,stockPctOfROP:52,onOrder:0,leadTimeDays:3,uom:"Tablet",pack:"10 x 10",status:"Low",nextDeliveryEta:"",lastSoldAt:"2025-10-04T08:04:33+05:30",suggestedOrder:180}],P=({children:u,label:y})=>e.jsx("span",{className:"tipWrap","aria-label":y,"data-tip":y,children:u}),Q=()=>{const u=n.useRef(null),[y,m]=n.useState(""),[h,A]=n.useState("all"),[d,M]=n.useState("all"),[f,B]=n.useState(!1),[N,C]=n.useState({}),[z,R]=n.useState(!1),L=n.useMemo(()=>new Date,[]),K=n.useMemo(()=>["Central","Outlet-1","Outlet-2"],[]),W=n.useMemo(()=>{const s=new Set(k.map(t=>t.category));return Array.from(s)},[]),p=n.useMemo(()=>{const s=y.trim().toLowerCase();return k.filter(t=>{var v;if(h!=="all"&&t.warehouse!==h||d!=="all"&&t.category!==d||f&&!(t.status==="Low"||t.status==="Critical"))return!1;if(!s)return!0;const l=`${t.name} ${t.sku} ${t.id} ${(v=t.supplier)==null?void 0:v.name}`.toLowerCase();return s.split(/\s+/).every(w=>l.includes(w))})},[y,h,d,f]),O=n.useMemo(()=>{const s=k.length,t=k.filter(c=>c.status==="Low").length,l=k.filter(c=>c.status==="Critical").length,v=k.filter(c=>c.status==="OK").length,w=k.filter(c=>c.onOrder>0).length;return{total:s,low:t,critical:l,ok:v,pending:w}},[]),F=s=>C(t=>({...t,[s]:!t[s]})),I=p.every(s=>N[s.id]),U=()=>{if(p.some(t=>!N[t.id])){const t={...N};p.forEach(l=>{t[l.id]=!0}),C(t)}else{const t={...N};p.forEach(l=>{delete t[l.id]}),C(t)}},G=()=>{u.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},H=()=>{const s=["ID","Name","SKU","Category","Warehouse","Supplier","Stock","ReorderPoint","OnOrder","LeadTimeDays","UOM","Pack","Status","NextETA","LastSold","SuggestedOrder"],t=p.map(r=>{var D;return[r.id,r.name,r.sku,r.category,r.warehouse,((D=r.supplier)==null?void 0:D.name)||"",r.stock,r.reorderPoint,r.onOrder,r.leadTimeDays,r.uom,r.pack,r.status,r.nextDeliveryEta,r.lastSoldAt,r.suggestedOrder]}),l=[s,...t].map(r=>r.map(D=>{const E=String(D??"");return/[",\n]/.test(E)?`"${E.replaceAll('"','""')}"`:E}).join(",")).join(`
`),v=new Blob([l],{type:"text/csv;charset=utf-8"}),w=URL.createObjectURL(v),c=document.createElement("a");c.href=w,c.download="reorder-export.csv",c.click(),URL.revokeObjectURL(w)},Z=()=>R(!0),V=()=>R(!1);return e.jsxs(j.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(j.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Reorder Planner"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Generated: ",S(L)]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Scope: Inventory across warehouses"})]}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(T,{to:"/inventory",children:"Inventory"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Reorder"})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btn",onClick:H,title:"Download CSV",children:"Export CSV"}),e.jsx("button",{className:"btn",onClick:G,title:"Print selection",children:"Print"}),e.jsx(P,{label:"Demo only",children:e.jsx("button",{className:"btn primary",disabled:!0,onClick:Z,title:"Create Purchase Order from selection",children:"Create PO"})})]})]}),e.jsxs(j.Stats,{className:"card",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Total SKUs"}),e.jsx("div",{className:"v",children:O.total})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"OK"}),e.jsx("div",{className:"v",children:O.ok})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Low"}),e.jsx("div",{className:"v label-low",children:O.low})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Critical"}),e.jsx("div",{className:"v label-critical",children:O.critical})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Pending PO Lines"}),e.jsx("div",{className:"v",children:O.pending})]})]}),e.jsxs(j.Toolbar,{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"group",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{placeholder:"SKU / Name / Supplier",value:y,onChange:s=>m(s.target.value)})]}),e.jsxs("div",{className:"group",children:[e.jsx("label",{children:"Warehouse"}),e.jsxs("select",{value:h,onChange:s=>A(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),K.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"group",children:[e.jsx("label",{children:"Category"}),e.jsxs("select",{value:d,onChange:s=>M(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),W.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsx("div",{className:"group checkbox",children:e.jsxs("label",{className:"inline",children:[e.jsx("input",{type:"checkbox",checked:f,onChange:s=>B(s.target.checked)}),"Show only Low/Critical"]})})]}),e.jsxs("div",{className:"row actions",children:[e.jsx("div",{className:"left",children:e.jsxs("label",{className:"inline",children:[e.jsx("input",{type:"checkbox",checked:I,onChange:U}),"Select page (",p.length,")"]})}),e.jsxs("div",{className:"right",children:[e.jsx(P,{label:"Demo only",children:e.jsx("button",{className:"btn",disabled:!0,title:"Add selected lines to a draft PO",children:"Add Selected to PO"})}),e.jsx(P,{label:"Demo only",children:e.jsx("button",{className:"btn",disabled:!0,title:"Email suppliers for quotes",children:"Request Quotes"})})]})]})]}),e.jsx(j.TableWrap,{className:"card",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:44},children:e.jsx("input",{type:"checkbox",checked:I,onChange:U,"aria-label":"Select page"})}),e.jsx("th",{children:"Item"}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{children:"Stock"}),e.jsx("th",{children:"ROP"}),e.jsx("th",{children:"On Order"}),e.jsx("th",{children:"Lead"}),e.jsx("th",{children:"Supplier"}),e.jsx("th",{children:"Suggested"}),e.jsx("th",{children:"ETA"}),e.jsx("th",{children:"Last Sold"}),e.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),e.jsxs("tbody",{children:[p.map(s=>{var l;const t=!!N[s.id];return e.jsxs("tr",{"data-status":s.status,children:[e.jsx("td",{children:e.jsx("input",{type:"checkbox",checked:t,onChange:()=>F(s.id),"aria-label":`Select ${s.name}`})}),e.jsx("td",{children:e.jsxs("div",{className:"itemCell",children:[e.jsxs("div",{className:"title",children:[e.jsx(T,{to:`/products/${s.id}`,className:"link",children:s.name}),e.jsx("span",{className:"sku",children:s.sku})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"chip",children:s.category}),e.jsx("span",{className:"chip",children:s.uom}),e.jsx("span",{className:"chip",children:s.pack}),e.jsx("span",{className:`chip status ${s.status.toLowerCase()}`,children:s.status})]}),e.jsx("div",{className:"bar",children:e.jsx("span",{className:"fill",style:{width:`${Math.min(100,Math.max(0,s.stockPctOfROP))}%`}})})]})}),e.jsx("td",{children:s.warehouse}),e.jsx("td",{children:s.stock}),e.jsx("td",{children:s.reorderPoint}),e.jsx("td",{children:s.onOrder||0}),e.jsxs("td",{children:[s.leadTimeDays,"d"]}),e.jsx("td",{children:(l=s.supplier)!=null&&l.id?e.jsx(T,{to:`/vendors/${s.supplier.id}`,className:"link",children:s.supplier.name}):"-"}),e.jsx("td",{className:"bold",children:s.suggestedOrder}),e.jsx("td",{children:s.nextDeliveryEta?S(s.nextDeliveryEta):"-"}),e.jsx("td",{children:s.lastSoldAt?S(s.lastSoldAt):"-"}),e.jsxs("td",{className:"actions",children:[e.jsx(T,{to:`/products/${s.id}`,className:"btnLink",children:"View"}),e.jsx(P,{label:"Demo only",children:e.jsx("button",{className:"btnTiny",disabled:!0,title:"Add single line to PO",children:"Add to PO"})})]})]},s.id)}),p.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:12,children:e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"big",children:"No items match this view"}),e.jsx("div",{className:"sub",children:"Try clearing filters or search keywords."})]})})})]})]})}),e.jsxs(j.PrintCard,{className:"card",id:"search-print-area",ref:u,children:[e.jsx("h3",{children:"Reorder Summary"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Generated"}),e.jsx("span",{className:"v",children:S(L)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Warehouse"}),e.jsx("span",{className:"v",children:h==="all"?"All":h})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Category"}),e.jsx("span",{className:"v",children:d==="all"?"All":d})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Filter"}),e.jsx("span",{className:"v",children:f?"Low/Critical only":"All"})]})]}),e.jsxs("div",{className:"list",children:[p.map(s=>e.jsxs("div",{className:"line",children:[e.jsxs("div",{className:"name",children:[s.name," ",e.jsxs("span",{className:"muted",children:["(",s.sku,")"]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Stock ",s.stock]}),e.jsxs("span",{children:["ROP ",s.reorderPoint]}),e.jsxs("span",{children:["On Order ",s.onOrder]}),e.jsxs("span",{children:["Lead ",s.leadTimeDays,"d"]}),e.jsxs("span",{children:["Suggested ",s.suggestedOrder]})]})]},`print-${s.id}`)),p.length===0&&e.jsx("div",{className:"muted",children:"Nothing to print."})]})]}),z&&e.jsx(j.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:V,children:e.jsxs(j.Modal,{className:"card",onMouseDown:s=>s.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:"Action unavailable in demo"})}),e.jsx("section",{className:"body",children:e.jsx("p",{children:"This is a display-only environment. Purchasing flows are disabled."})}),e.jsx("footer",{children:e.jsx("button",{className:"btn",onClick:V,children:"Close"})})]})})]})};export{Q as default};
