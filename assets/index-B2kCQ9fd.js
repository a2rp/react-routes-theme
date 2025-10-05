import{d as u,q as C,u as T,r as f,j as s,N as m}from"./index-CTSbLEdo.js";const d="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",g="var(--card, #111318)",r="var(--border, #23262d)",l="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",M="var(--radius, 16px)",x={Page:u.div`
        padding: 24px 0 64px;
        color: ${d};

        .muted {
            color: ${p};
        }
        .pill {
            display: inline-block;
            margin-left: 10px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${r};
            background: color-mix(in oklab, ${l} 10%, transparent);
            color: ${d};
            font-size: 12px;
            font-weight: 600;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
            a {
                color: ${p};
            }
            .current {
                color: ${d};
            }
        }
    `,Header:u.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 6px;
        }
        .subMeta {
            display: flex;
            gap: 8px;
            color: ${p};
            font-size: 12px;
            margin-top: 4px;
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
            border: 1px solid ${r};
            background: ${g};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.04s;
        }
        .btnPrimary:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnGhost:hover {
            border-color: ${l};
            color: ${l};
        }
        .btnDisabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Grid:u.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1024px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main > .hero {
            padding: 16px;
        }
        .card {
            background: ${g};
            border: 1px solid ${r};
            border-radius: ${M};
            box-shadow: var(--shadow);
        }

        .hero {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 920px) {
                grid-template-columns: 1.1fr 1fr;
            }
            .gallery {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 16px;
                .thumbs {
                    display: grid;
                    gap: 10px;
                    align-content: start;
                }
                .thumb {
                    width: 100%;
                    aspect-ratio: 1/1;
                    border-radius: 12px;
                    border: 1px solid ${r};
                    background: linear-gradient(
                        135deg,
                        rgba(90, 169, 255, 0.15),
                        rgba(255, 255, 255, 0.04)
                    );
                }
                .mainImage .image {
                    width: 100%;
                    aspect-ratio: 4/3;
                    border-radius: 16px;
                    border: 1px solid ${r};
                    background: radial-gradient(
                            1200px 400px at 20% 0%,
                            rgba(90, 169, 255, 0.15),
                            transparent 60%
                        ),
                        linear-gradient(
                            135deg,
                            rgba(255, 255, 255, 0.04),
                            rgba(255, 255, 255, 0)
                        );
                }
            }
            .facts {
                display: grid;
                gap: 12px;
                align-content: start;
            }
            .facts .row {
                display: grid;
                gap: 14px;
                grid-template-columns: repeat(4, 1fr);
                @media (max-width: 780px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                .label {
                    color: ${p};
                    font-size: 12px;
                    margin-bottom: 4px;
                }
                .wrap {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .chip {
                    border: 1px solid ${r};
                    padding: 6px 10px;
                    border-radius: 999px;
                    background: color-mix(in oklab, ${l} 8%, transparent);
                    color: ${d};
                    font-weight: 600;
                    font-size: 12px;
                }
            }
        }

        .row2 {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 920px) {
                grid-template-columns: 1fr 1fr;
            }
        }

        .block {
            padding: 16px;
        }
        .block h3 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        .pairs {
            display: grid;
            gap: 10px;
        }
        .pairs .k {
            color: ${p};
            width: 140px;
            display: inline-block;
        }
        .pairs .v {
            color: ${d};
        }
        .pairs .v.column {
            display: grid;
            gap: 6px;
        }
        .pairs .v.wrap {
            white-space: normal;
        }

        .attrs {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 720px) {
            .attrs {
                grid-template-columns: 1fr;
            }
        }
        .attrs .item {
            border: 1px dashed ${r};
            border-radius: 10px;
            padding: 10px 12px;
        }
        .attrs .item .k {
            color: ${p};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .attrs .item .v {
            color: ${d};
        }

        .table {
            width: 100%;
            border-collapse: collapse;
        }
        .table th,
        .table td {
            padding: 10px;
            border-bottom: 1px solid ${r};
        }
        .table th {
            text-align: left;
            color: ${l};
            background: ${g};
            position: sticky;
            top: 0;
        }
        .table .right {
            text-align: right;
        }
        .table .link {
            color: ${d};
        }
        .table .link:hover {
            color: ${l};
        }

        .empty {
            padding: 8px 0;
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
            background: ${l};
            border: 1px solid ${r};
            margin-top: 6px;
        }

        .summary {
            display: grid;
            gap: 8px;
        }
        .summary .k {
            color: ${p};
            width: 120px;
            display: inline-block;
        }
        .summary .v {
            color: ${d};
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .list li {
            display: grid;
            gap: 4px;
        }
        .wrap {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .grid2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .label {
            color: ${p};
            font-size: 12px;
        }
    `,Empty:u.div`
        padding: 28px 20px;
        text-align: center;
        .icon {
            font-size: 40px;
            margin-bottom: 8px;
        }
        h3 {
            margin-bottom: 6px;
        }
        .actions {
            margin-top: 10px;
        }
        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${g};
            color: ${d};
            font-weight: 600;
        }
        .btnPrimary:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${y};
        }
    `,Overlay:u.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:u.div`
        width: min(520px, 92vw);
        border-radius: ${M};
        border: 1px solid ${r};
        background: ${g};
        color: ${d};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${r};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
            color: ${d};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${r};
        }
        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${g};
            color: ${d};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${y};
        }
    `},b=(n,t)=>{const i=n instanceof Date?n:new Date(n),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=N=>String(N).padStart(2,"0"),j=`${c[i.getDay()]} ${h[i.getMonth()]} ${e(i.getDate())} ${i.getFullYear()}`;return t?`${j} ${e(i.getHours())}:${e(i.getMinutes())}:${e(i.getSeconds())}hrs`:j},O=n=>{const t=n instanceof Date?n:new Date(n),i=c=>String(c).padStart(2,"0");return`${i(t.getHours())}:${i(t.getMinutes())}:${i(t.getSeconds())}hrs`},z={"MED-AMOX-500":{id:"MED-AMOX-500",name:"Amoxicillin 500 mg",sku:"AMOX-500-TAB",status:"active",categoryPath:["Products","Medicines","Antibiotics"],brand:"Bluewave",manufacturer:"Bluewave Pharma Ltd.",molecules:["Amoxicillin"],form:"Tablet",strength:"500 mg",packSize:"10 x 10 Tablets",hsn:"3004",gstRate:"12%",mrp:"₹245.00",sellPrice:"₹210.00",barcodes:["8901234567890"],attributes:{"Shelf Life":"24 months",Storage:"Below 25°C, dry place",Prescription:"Required","Country of Origin":"India","Color Index":"N/A"},identifiers:{"Internal Code":"P-10234","Catalog #":"CAT-AM-500","EAN/GTIN":"8901234567890"},tags:["priority","fast-moving","antibiotic"],stockByWarehouse:[{warehouse:"Delhi WH",onHand:1200,reserved:150,available:1050,batches:4,nearExpiry:0},{warehouse:"Mumbai WH",onHand:800,reserved:60,available:740,batches:3,nearExpiry:40},{warehouse:"Bengaluru WH",onHand:430,reserved:35,available:395,batches:2,nearExpiry:0}],variants:[{id:"MED-AMOX-250",name:"Amoxicillin 250 mg",form:"Capsule",packSize:"10 x 10",link:"/products/MED-AMOX-250"},{id:"MED-AMOX-SUSP",name:"Amoxicillin Suspension 250 mg/5ml",form:"Syrup",packSize:"60 ml",link:"/products/MED-AMOX-SUSP"}],vendors:[{id:"VEND-1001",name:"MedMart Distributors",lastPrice:"₹198.00",leadTime:"3 days",link:"/vendors/VEND-1001"},{id:"VEND-1007",name:"HealHub Wholesale",lastPrice:"₹200.50",leadTime:"4 days",link:"/vendors/VEND-1007"}],related:[{id:"MED-CLAV-625",name:"Amoxicillin + Clavulanate 625",link:"/products/MED-CLAV-625"},{id:"MED-CEF-500",name:"Cefixime 500 mg",link:"/products/MED-CEF-500"}],createdAt:"2024-05-21T09:12:30+05:30",updatedAt:"2025-10-04T15:22:11+05:30"},"MED-CLAV-625":{id:"MED-CLAV-625",name:"Amoxicillin + Clavulanate 625",sku:"AMC-625-TAB",status:"active",categoryPath:["Products","Medicines","Antibiotics"],brand:"Bluewave",manufacturer:"Bluewave Pharma Ltd.",molecules:["Amoxicillin","Clavulanate"],form:"Tablet",strength:"625 mg",packSize:"10 x 6 Tablets",hsn:"3004",gstRate:"12%",mrp:"₹325.00",sellPrice:"₹295.00",barcodes:["8909876543210"],attributes:{"Shelf Life":"24 months",Storage:"Below 25°C",Prescription:"Required"},identifiers:{"Internal Code":"P-10235"},tags:["combo","fast-moving"],stockByWarehouse:[{warehouse:"Delhi WH",onHand:210,reserved:20,available:190,batches:1,nearExpiry:0}],variants:[],vendors:[],related:[{id:"MED-AMOX-500",name:"Amoxicillin 500 mg",link:"/products/MED-AMOX-500"}],createdAt:"2024-07-11T11:02:00+05:30",updatedAt:"2025-09-30T18:08:40+05:30"}},B=({open:n,title:t,message:i,onClose:c})=>n?s.jsx(x.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:c,children:s.jsxs(x.Modal,{className:"card",onMouseDown:h=>h.stopPropagation(),children:[s.jsx("header",{children:s.jsx("h4",{children:t})}),s.jsx("div",{className:"body",children:s.jsx("p",{children:i})}),s.jsx("footer",{children:s.jsx("button",{className:"btnPrimary",onClick:c,children:"OK"})})]})}):null,L=()=>{var k,w,$,P,S;const{productId:n}=C(),t=T(),i=f.useRef(null),[c,h]=f.useState(!1),e=z[n],j=f.useMemo(()=>new Date,[]),N=s.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[s.jsx(m,{to:"/products",children:"Products"}),(k=e==null?void 0:e.categoryPath)==null?void 0:k.slice(1,-1).map((a,o)=>s.jsxs("span",{className:"muted",children:["/ ",a]},o)),s.jsxs("span",{className:"current",children:["/ ",e?e.name:"Not found"]})]});f.useEffect(()=>{},[n]);const A=()=>{if(!e)return;const a=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),o=URL.createObjectURL(a),v=document.createElement("a");v.href=o,v.download=`${e.id}.json`,document.body.appendChild(v),v.click(),v.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)},D=async()=>{try{await navigator.clipboard.writeText(window.location.href)}catch{}h(!0)},E=()=>{i.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e?s.jsxs(x.Page,{className:"container",children:[s.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),s.jsxs(x.Header,{className:"card",children:[s.jsxs("div",{className:"left",children:[s.jsx("h1",{children:e.name}),s.jsxs("div",{className:"meta",children:[N,s.jsx("span",{className:"pill",children:e.status}),s.jsxs("span",{className:"muted",children:["SKU: ",e.sku]})]}),s.jsxs("div",{className:"subMeta",children:[s.jsxs("span",{children:["Created: ",b(e.createdAt)]}),s.jsx("span",{children:"•"}),s.jsxs("span",{children:["Updated: ",b(e.updatedAt,!0)]})]})]}),s.jsxs("div",{className:"right actions",children:[s.jsx(m,{to:"/products",className:"btnGhost",children:"Back"}),s.jsx(m,{to:`/products/${e.id}/edit`,className:"btnPrimary",children:"Edit"}),s.jsx("button",{className:"btnGhost",onClick:D,title:"Copy current link",children:"Copy Link"}),s.jsx("button",{className:"btnGhost",onClick:A,title:"Download JSON",children:"Export"}),s.jsx("button",{className:"btnGhost",onClick:E,title:"Print summary",children:"Print"}),s.jsx("button",{className:"btnDisabled",onClick:()=>h(!0),title:"Disabled in demo",children:"Delete"})]})]}),s.jsxs(x.Grid,{children:[s.jsxs("section",{className:"col main",children:[s.jsxs("div",{className:"card hero",children:[s.jsxs("div",{className:"gallery",children:[s.jsxs("div",{className:"thumbs",children:[s.jsx("div",{className:"thumb",title:"Primary image"}),s.jsx("div",{className:"thumb"}),s.jsx("div",{className:"thumb"}),s.jsx("div",{className:"thumb"})]}),s.jsx("div",{className:"mainImage",children:s.jsx("div",{className:"image","aria-label":"Product image"})})]}),s.jsxs("div",{className:"facts",children:[s.jsxs("div",{className:"row",children:[s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"Brand"}),s.jsx("div",{children:e.brand})]}),s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"Manufacturer"}),s.jsx("div",{children:e.manufacturer})]}),s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"Form"}),s.jsx("div",{children:e.form})]}),s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"Strength"}),s.jsx("div",{children:e.strength})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"Pack Size"}),s.jsx("div",{children:e.packSize})]}),s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"HSN"}),s.jsx("div",{children:e.hsn})]}),s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"GST"}),s.jsx("div",{children:e.gstRate})]}),s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"Molecules"}),s.jsx("div",{className:"wrap",children:(w=e.molecules)==null?void 0:w.map(a=>s.jsx("span",{className:"chip",children:a},a))})]})]})]})]}),s.jsxs("div",{className:"row2",children:[s.jsxs("div",{className:"card block",children:[s.jsx("h3",{children:"Pricing"}),s.jsxs("div",{className:"pairs",children:[s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"MRP"}),s.jsx("span",{className:"v",children:e.mrp})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Sell Price"}),s.jsx("span",{className:"v",children:e.sellPrice})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"GST Rate"}),s.jsx("span",{className:"v",children:e.gstRate})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"HSN Code"}),s.jsx("span",{className:"v",children:e.hsn})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Barcodes"}),s.jsx("span",{className:"v wrap",children:e.barcodes.join(", ")})]})]})]}),s.jsxs("div",{className:"card block",children:[s.jsx("h3",{children:"Packaging"}),s.jsxs("div",{className:"pairs",children:[s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Form"}),s.jsx("span",{className:"v",children:e.form})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Strength"}),s.jsx("span",{className:"v",children:e.strength})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Pack Size"}),s.jsx("span",{className:"v",children:e.packSize})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Identifiers"}),s.jsx("span",{className:"v column",children:Object.entries(e.identifiers).map(([a,o])=>s.jsxs("div",{children:[s.jsxs("span",{className:"muted",children:[a,":"]})," ",o]},a))})]})]})]})]}),s.jsxs("div",{className:"card block",children:[s.jsx("h3",{children:"Attributes"}),s.jsx("div",{className:"attrs",children:Object.entries(e.attributes).map(([a,o])=>s.jsxs("div",{className:"item",children:[s.jsx("div",{className:"k",children:a}),s.jsx("div",{className:"v",children:o})]},a))})]}),s.jsxs("div",{className:"card block",children:[s.jsx("h3",{children:"Variants"}),($=e.variants)!=null&&$.length?s.jsxs("table",{className:"table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Variant"}),s.jsx("th",{children:"Form"}),s.jsx("th",{children:"Pack"}),s.jsx("th",{className:"right",children:"Open"})]})}),s.jsx("tbody",{children:e.variants.map(a=>s.jsxs("tr",{children:[s.jsx("td",{children:a.name}),s.jsx("td",{children:a.form}),s.jsx("td",{children:a.packSize}),s.jsx("td",{className:"right",children:s.jsx(m,{to:a.link,className:"link",children:"View"})})]},a.id))})]}):s.jsx("div",{className:"empty muted",children:"No variants for this item."})]}),s.jsxs("div",{className:"card block",children:[s.jsx("h3",{children:"Activity"}),s.jsxs("ul",{className:"timeline",children:[s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Price updated"}),s.jsx("div",{className:"muted",children:b(e.updatedAt,!0)})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Stock counted (cycle)"}),s.jsx("div",{className:"muted",children:b(j)})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"New batch received"}),s.jsx("div",{className:"muted",children:b(j,!0)})]})]})]})]}),s.jsxs("div",{className:"card block",id:"search-print-area",ref:i,children:[s.jsx("h3",{children:"Print Summary"}),s.jsxs("div",{className:"summary",children:[s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Product"}),s.jsxs("span",{className:"v",children:[e.name," (",e.id,")"]})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"SKU"}),s.jsx("span",{className:"v",children:e.sku})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Brand"}),s.jsx("span",{className:"v",children:e.brand})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Form"}),s.jsx("span",{className:"v",children:e.form})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Strength"}),s.jsx("span",{className:"v",children:e.strength})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Pack"}),s.jsx("span",{className:"v",children:e.packSize})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"MRP"}),s.jsx("span",{className:"v",children:e.mrp})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"GST"}),s.jsx("span",{className:"v",children:e.gstRate})]}),s.jsxs("div",{children:[s.jsx("span",{className:"k",children:"Updated"}),s.jsx("span",{className:"v",children:b(e.updatedAt,!0)})]})]})]})]}),s.jsxs("aside",{className:"col side",children:[s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Stock by Warehouse"}),s.jsxs("table",{className:"table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Warehouse"}),s.jsx("th",{className:"right",children:"On hand"}),s.jsx("th",{className:"right",children:"Reserved"}),s.jsx("th",{className:"right",children:"Available"}),s.jsx("th",{className:"right",children:"Batches"}),s.jsx("th",{className:"right",children:"Near Exp."})]})}),s.jsx("tbody",{children:e.stockByWarehouse.map(a=>s.jsxs("tr",{children:[s.jsx("td",{children:a.warehouse}),s.jsx("td",{className:"right",children:a.onHand}),s.jsx("td",{className:"right",children:a.reserved}),s.jsx("td",{className:"right",children:a.available}),s.jsx("td",{className:"right",children:a.batches}),s.jsx("td",{className:"right",children:a.nearExpiry})]},a.warehouse))})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Vendors"}),(P=e.vendors)!=null&&P.length?s.jsx("ul",{className:"list",children:e.vendors.map(a=>s.jsxs("li",{children:[s.jsxs("div",{className:"main",children:[s.jsx(m,{to:a.link,children:a.name}),s.jsxs("span",{className:"muted",children:["• Lead ",a.leadTime]})]}),s.jsxs("div",{className:"muted",children:["Last Price: ",a.lastPrice]})]},a.id))}):s.jsx("div",{className:"empty muted",children:"No vendor linked."})]}),s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Categories & Tags"}),s.jsxs("div",{className:"wrap",children:[e.categoryPath.slice(1).map(a=>s.jsx("span",{className:"chip",children:a},a)),e.tags.map(a=>s.jsx("span",{className:"chip",children:a},a))]})]}),s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Related Products"}),(S=e.related)!=null&&S.length?s.jsx("ul",{className:"list",children:e.related.map(a=>s.jsx("li",{children:s.jsx(m,{to:a.link,children:a.name})},a.id))}):s.jsx("div",{className:"empty muted",children:"No related items."})]}),s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Contact Window"}),s.jsxs("div",{className:"grid2",children:[s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"Best time"}),s.jsx("div",{children:O(j)})]}),s.jsxs("div",{children:[s.jsx("div",{className:"label",children:"Support"}),s.jsx("div",{children:"Mon–Sat"})]})]})]})]})]}),s.jsx(B,{open:c,title:"Demo",message:"This action is disabled in the demo. You can copy links, print, or export JSON.",onClose:()=>h(!1)})]}):s.jsxs(x.Page,{className:"container",children:[s.jsxs(x.Header,{className:"card",children:[s.jsxs("div",{className:"left",children:[s.jsx("h1",{children:"Product"}),s.jsx("div",{className:"meta",children:N})]}),s.jsx("div",{className:"right actions",children:s.jsx("button",{className:"btnGhost",onClick:()=>t("/products"),children:"Back to Products"})})]}),s.jsxs(x.Empty,{className:"card",children:[s.jsx("div",{className:"icon",children:"⌕"}),s.jsx("h3",{children:"We couldn’t find that product"}),s.jsx("p",{className:"muted",children:"The link might be old or the item isn’t part of this demo dataset."}),s.jsx("div",{className:"actions",children:s.jsx(m,{className:"btnPrimary",to:"/products",children:"Go to Products"})})]})]})};export{L as default};
