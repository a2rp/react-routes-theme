import{d as h,q as S,u as P,r as f,j as e,N as n}from"./index-CTSbLEdo.js";const r="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",p="var(--card, #111318)",l="var(--border, #23262d)",a="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",y="var(--danger, #ef4444)",$="var(--radius, 16px)",j={Page:h.div`
        padding: 24px 0 64px;
        color: ${r};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${c};
            }
            .current {
                color: ${r};
            }
        }
    `,Header:h.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        align-items: center;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .sub {
            font-weight: 600;
            font-size: 14px;
            color: ${c};
            margin-left: 6px;
        }

        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${c};
            font-size: 12px;
        }

        .tags {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tag,
        .pill {
            border: 1px solid ${l};
            border-radius: 999px;
            padding: 6px 10px;
            background: color-mix(in oklab, ${a} 8%, transparent);
            color: ${r};
            font-weight: 600;
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-self: end;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${l};
            background: ${p};
            color: ${r};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
        .btnDanger {
            border-color: ${y};
            color: ${y};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${y} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        button[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
            box-shadow: none;
        }
    `,Stats:h.div`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 12px;
        padding: 12px 14px;
        margin-bottom: 16px;
        border: 1px solid ${l};
        border-radius: ${$};
        background: color-mix(in oklab, ${p} 96%, transparent);

        @media (max-width: 1100px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
        }

        .k {
            color: ${c};
            font-size: 12px;
        }
        .v {
            font-weight: 700;
            font-size: 16px;
            color: ${r};
        }
    `,Grid:h.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .section {
            padding: 16px 18px;
        }

        .kv {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px 20px;
            margin-top: 10px;
            .k {
                color: ${c};
                font-size: 12px;
            }
            .v a {
                color: ${r};
            }
            .v a:hover {
                color: ${a};
            }
            .full {
                grid-column: 1 / -1;
            }
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            font-size: 13px;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${l};
        }
        th {
            text-align: left;
            background: ${p};
            color: ${a};
            font-weight: 600;
        }

        .linksBar {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            a {
                border: 1px solid ${l};
                padding: 6px 10px;
                border-radius: 8px;
                background: ${p};
                color: ${r};
            }
            a:hover {
                border-color: ${a};
                color: ${a};
            }
        }

        .bullets {
            margin: 8px 0 0;
            padding-left: 18px;
        }
        .bullets li {
            margin: 4px 0;
        }

        .grid.two {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 12px;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
        }

        .status.ok {
            border: 1px solid ${l};
            border-radius: 999px;
            padding: 2px 8px;
            font-size: 12px;
            background: color-mix(in oklab, ${a} 12%, transparent);
            color: ${r};
        }

        .side {
            display: grid;
            gap: 16px;
        }

        .kvList {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .kvList li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
        }
        .kvList .k {
            color: ${c};
        }
        .kvList .v {
            color: ${r};
            font-weight: 700;
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${r};
            border: 1px solid ${l};
            background: ${p};
            padding: 6px 10px;
            border-radius: 8px;
        }
        .links a:hover {
            color: ${a};
            border-color: ${a};
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .fileName {
            font-weight: 600;
        }
        .fileSize {
            color: ${c};
            margin-left: 6px;
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
            color: ${c};
        }
        .printSummary .v {
            color: ${r};
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
            background: ${a};
            border: 1px solid ${l};
        }
        .timeline .muted {
            color: ${c};
            font-size: 12px;
        }
    `,Overlay:h.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:h.div`
        width: min(520px, 92vw);
        border-radius: ${$};
        border: 1px solid ${l};
        background: ${p};
        color: ${r};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${l};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${r};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${l};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${l};
            background: ${p};
            color: ${r};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${k};
        }
    `},m=(o,g)=>{const t=o instanceof Date?o:new Date(o),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=N=>String(N).padStart(2,"0"),b=`${s[t.getDay()]} ${u[t.getMonth()]} ${d(t.getDate())} ${t.getFullYear()}`;return g?`${b} ${d(t.getHours())}:${d(t.getMinutes())}:${d(t.getSeconds())}hrs`:b},O=({open:o,title:g,message:t,onClose:s,cta:u="OK"})=>o?e.jsx(j.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:s,children:e.jsxs(j.Modal,{className:"card",onMouseDown:d=>d.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:g})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:t})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:s,children:u})})]})}):null,D=()=>{const{medicineId:o}=S(),g=P(),t=f.useRef(null),s=f.useMemo(()=>{const i=new Date("2025-10-04T15:38:20+05:30");return{id:o||"MED-AMOX-500",sku:"MED-AMOX-500",brandName:"Amoxycap 500",genericName:"Amoxicillin",strength:"500 mg",form:"Capsule",packSize:"Strip of 10 capsules",manufacturer:{id:"MFG-001",name:"Bluewave Pharma Pvt Ltd"},category:{id:"CAT-ABX",name:"Antibiotics"},hsn:"300420",gst:12,schedule:"Rx Only",barcodes:["8901234567890","8901234567891"],mrp:98,ptr:65,uom:"capsule",storage:"Store below 25°C. Protect from light and moisture.",shelfLifeMonths:24,createdAt:i,updatedAt:i,tags:["priority","essential","adult"],indications:["Bacterial infections of ear, nose, throat","Lower respiratory tract infections","Skin and soft tissue infections"],contraindications:["History of hypersensitivity to penicillins"],sideEffects:["Nausea","Rash","Diarrhea","Headache"],interactions:["May reduce efficacy of oral contraceptives","Probenecid may increase serum concentration"],composition:[{moiety:"Amoxicillin Trihydrate",strength:"500 mg"},{moiety:"Excipients",strength:"q.s."}],inventory:{totalStock:425,reserved:30,available:395,inTransit:50,reorderLevel:200,warehouses:[{code:"WH-01",name:"Primary DC",stock:260},{code:"WH-02",name:"North Hub",stock:165}]},batches:[{batch:"AB1234",mfg:"2024-02-15",exp:"2026-01-31",qty:120,mrp:98,ptr:65,location:"WH-01 / A2",status:"OK"},{batch:"CD6789",mfg:"2024-05-10",exp:"2025-10-30",qty:180,mrp:98,ptr:65,location:"WH-01 / B1",status:"OK"},{batch:"EF9012",mfg:"2024-07-20",exp:"2026-04-15",qty:125,mrp:98,ptr:65,location:"WH-02 / R3",status:"OK"}],activity:[{when:i,text:"Batch EF9012 received at WH-02 (GRN #GRN-5821)"},{when:i,text:"PTR updated to 65.00"},{when:i,text:"Reorder level revised to 200"}],leaflets:[{name:"Patient Information Leaflet.pdf",size:"284 KB"},{name:"Prescribing Information.pdf",size:"412 KB"}]}},[o]),[u,d]=f.useState(!1),b=()=>{t.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},N=()=>{const i=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),x=URL.createObjectURL(i),v=document.createElement("a");v.href=x,v.download=`${s.id}.json`,document.body.appendChild(v),v.click(),v.remove(),URL.revokeObjectURL(x)},w=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(n,{to:"/medicines",children:"Medicines"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.id})]});return e.jsxs(j.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(j.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("h1",{children:[s.brandName," ",e.jsxs("span",{className:"sub",children:["(",s.genericName,")"]})]}),w,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["ID: ",s.id]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",m(s.updatedAt,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",m(s.createdAt)]})]}),e.jsxs("div",{className:"tags",children:[s.tags.map(i=>e.jsx("span",{className:"tag",children:i},i)),e.jsx("span",{className:"pill",children:s.form}),e.jsx("span",{className:"pill",children:s.strength}),e.jsx("span",{className:"pill",children:s.packSize})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>g(-1),title:"Go back",children:"Back"}),e.jsx("button",{className:"btnPrimary",onClick:N,title:"Export JSON",children:"Export"}),e.jsx("button",{className:"btnPrimary",onClick:b,title:"Print section",children:"Print"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo: disabled",onClick:()=>d(!0),children:"Add to Order"}),e.jsx("button",{className:"btnDanger",disabled:!0,title:"Demo: disabled",onClick:()=>d(!0),children:"Adjust Stock"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo: disabled",onClick:()=>d(!0),children:"Archive"})]})]}),e.jsxs(j.Stats,{className:"card",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Available"}),e.jsxs("div",{className:"v",children:[s.inventory.available," ",s.uom]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Reserved"}),e.jsxs("div",{className:"v",children:[s.inventory.reserved," ",s.uom]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"In Transit"}),e.jsxs("div",{className:"v",children:[s.inventory.inTransit," ",s.uom]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Reorder Level"}),e.jsxs("div",{className:"v",children:[s.inventory.reorderLevel," ",s.uom]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"MRP"}),e.jsxs("div",{className:"v",children:["₹",s.mrp.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"PTR"}),e.jsxs("div",{className:"v",children:["₹",s.ptr.toFixed(2)]})]})]}),e.jsxs(j.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card section",children:[e.jsx("h3",{children:"Overview"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Brand"}),e.jsx("span",{className:"v",children:s.brandName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Generic"}),e.jsx("span",{className:"v",children:s.genericName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Strength"}),e.jsx("span",{className:"v",children:s.strength})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Form"}),e.jsx("span",{className:"v",children:s.form})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Pack"}),e.jsx("span",{className:"v",children:s.packSize})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"UOM"}),e.jsx("span",{className:"v",children:s.uom})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"HSN"}),e.jsx("span",{className:"v",children:s.hsn})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"GST"}),e.jsxs("span",{className:"v",children:[s.gst,"%"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Schedule"}),e.jsx("span",{className:"v",children:s.schedule})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Barcodes"}),e.jsx("span",{className:"v",children:s.barcodes.join(", ")})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Manufacturer"}),e.jsx("span",{className:"v",children:e.jsx(n,{to:"/medicines/manufacturers",title:"Open manufacturers",children:s.manufacturer.name})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Category"}),e.jsx("span",{className:"v",children:e.jsx(n,{to:"/categories",title:"Open categories",children:s.category.name})})]}),e.jsxs("div",{className:"full",children:[e.jsx("span",{className:"k",children:"Storage"}),e.jsxs("span",{className:"v",children:[s.storage," Shelf-life: ",s.shelfLifeMonths," months"]})]})]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("h3",{children:"Composition"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Moiety"}),e.jsx("th",{children:"Strength"})]})}),e.jsx("tbody",{children:s.composition.map((i,x)=>e.jsxs("tr",{children:[e.jsx("td",{children:i.moiety}),e.jsx("td",{children:i.strength})]},x))})]}),e.jsxs("div",{className:"linksBar",children:[e.jsx(n,{to:"/medicines/molecules",title:"Open molecules catalog",children:"View molecules"}),e.jsx(n,{to:"/medicines/forms",title:"Open dosage forms",children:"View forms"}),e.jsx(n,{to:"/medicines/strengths",title:"Open strengths",children:"View strengths"})]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("h3",{children:"Indications"}),e.jsx("ul",{className:"bullets",children:s.indications.map(i=>e.jsx("li",{children:i},i))}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Contraindications"}),e.jsx("ul",{className:"bullets",children:s.contraindications.map(i=>e.jsx("li",{children:i},i))})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Interactions"}),e.jsx("ul",{className:"bullets",children:s.interactions.map(i=>e.jsx("li",{children:i},i))})]})]}),e.jsxs("div",{className:"subtle",children:["Common side effects: ",s.sideEffects.join(", "),"."]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("h3",{children:"Batches & Expiry"}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Mfg"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"MRP"}),e.jsx("th",{children:"PTR"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:s.batches.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.batch}),e.jsx("td",{children:m(i.mfg)}),e.jsx("td",{children:m(i.exp)}),e.jsx("td",{children:i.qty}),e.jsxs("td",{children:["₹",i.mrp.toFixed(2)]}),e.jsxs("td",{children:["₹",i.ptr.toFixed(2)]}),e.jsx("td",{children:i.location}),e.jsx("td",{children:e.jsx("span",{className:"status ok",children:"OK"})})]},i.batch))})]}),e.jsxs("div",{className:"linksBar",children:[e.jsx(n,{to:"/inventory/lots",title:"Open lots",children:"Lots"}),e.jsx(n,{to:"/inventory/batches",title:"Open batches",children:"Batches"}),e.jsx(n,{to:"/inventory/reorder",title:"Open reorder planner",children:"Reorder planner"})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card section",children:[e.jsx("h3",{children:"Warehouse Split"}),e.jsx("ul",{className:"kvList",children:s.inventory.warehouses.map(i=>e.jsxs("li",{children:[e.jsx("span",{className:"k",children:i.name}),e.jsxs("span",{className:"v",children:[i.stock," ",s.uom]})]},i.code))})]}),e.jsxs("div",{className:"card section",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(n,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"})}),e.jsx("li",{children:e.jsx(n,{to:"/medicines/hsn-gst",children:"HSN / GST"})}),e.jsx("li",{children:e.jsx(n,{to:"/reports/inventory",children:"Inventory Report"})}),e.jsx("li",{children:e.jsx(n,{to:"/products/price-lists",children:"Price Lists"})})]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("h3",{children:"Files"}),e.jsx("ul",{className:"files",children:s.leaflets.map(i=>e.jsxs("li",{children:[e.jsx("span",{className:"fileName",children:i.name}),e.jsx("span",{className:"fileSize",children:i.size})]},i.name))})]}),e.jsxs("div",{className:"card section",id:"search-print-area",ref:t,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Brand"}),e.jsx("span",{className:"v",children:s.brandName})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Generic"}),e.jsx("span",{className:"v",children:s.genericName})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Strength"}),e.jsx("span",{className:"v",children:s.strength})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Form"}),e.jsx("span",{className:"v",children:s.form})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Pack"}),e.jsx("span",{className:"v",children:s.packSize})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"HSN / GST"}),e.jsxs("span",{className:"v",children:[s.hsn," / ",s.gst,"%"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"MRP / PTR"}),e.jsxs("span",{className:"v",children:["₹",s.mrp.toFixed(2)," / ₹",s.ptr.toFixed(2)]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Stock"}),e.jsxs("span",{className:"v",children:[s.inventory.available," ",s.uom]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v",children:m(s.updatedAt,!0)})]})]})]}),e.jsxs("div",{className:"card section",children:[e.jsx("h3",{children:"Activity"}),e.jsx("ul",{className:"timeline",children:s.activity.map((i,x)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:i.text}),e.jsx("div",{className:"muted",children:m(i.when,!0)})]})]},x))})]})]})]}),e.jsx(O,{open:u,title:"Demo mode",message:"This is a display-only theme. Actions like Add to Order or Adjust Stock are disabled.",onClose:()=>d(!1)})]})};export{D as default};
