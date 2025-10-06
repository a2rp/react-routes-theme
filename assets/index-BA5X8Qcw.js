import{d as N,q as M,u as C,r as v,j as e,N as h}from"./index-CqBbF2bz.js";const p="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",m="var(--card, #111318)",r="var(--border, #23262d)",a="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",k="var(--danger, #ef4444)",y="var(--radius, 16px)",f={Page:N.div`
        padding: 24px 0 64px;
        color: ${p};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${o};
            }
            .current {
                color: ${p};
            }
        }
    `,Header:N.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;
        border-radius: ${y};
        .titleRow {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .status {
            padding: 4px 10px;
            border: 1px solid ${r};
            border-radius: 999px;
            font-size: 12px;
            color: ${p};
            background: color-mix(in oklab, ${a} 10%, transparent);
            text-transform: capitalize;
        }
        .status.archived {
            opacity: 0.7;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${o};
            font-size: 12px;
        }
        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${m};
            color: ${p};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${$};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnDanger {
            border-color: ${k};
            color: ${k};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${k} 10%, transparent);
        }
    `,Grid:N.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 18px;
            border-radius: ${y};
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .card {
            background: ${m};
            border: 1px solid ${r};
            border-radius: ${y};
            box-shadow: var(--shadow);
        }

        .section {
            margin-top: 18px;
        }
        .sectionHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            padding-bottom: 6px;
            border-bottom: 1px dashed ${r};
            h3 {
                font-size: 16px;
            }
            .small {
                font-size: 12px;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${o};
            margin-bottom: 6px;
        }
        input,
        textarea {
            width: 100%;
        }

        .grid.two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .grid.three {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .grid.four {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .grid.two {
                grid-template-columns: repeat(2, 1fr);
            }
            .grid.three {
                grid-template-columns: repeat(3, 1fr);
            }
            .grid.four {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid ${r};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${a} 8%, transparent);
            color: ${p};
        }

        .metric {
            background: color-mix(in oklab, ${a} 8%, transparent);
            border: 1px solid ${r};
            border-radius: 10px;
            padding: 10px 12px;
        }
        .metric .k {
            font-size: 12px;
            color: ${o};
        }
        .metric .v {
            font-weight: 700;
            margin-top: 2px;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .table th,
        .table td {
            padding: 10px;
            border-bottom: 1px solid ${r};
        }
        .table th {
            text-align: left;
            color: ${a};
            background: ${m};
            position: sticky;
            top: 0;
        }
        .table tr:hover td {
            background: rgba(0, 0, 0, 0.06);
        }

        .sub {
            padding: 14px;
            border-radius: 12px;
        }

        /* gallery */
        .gallery {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
        }
        .imageMain {
            width: 100%;
            height: 300px;
            border-radius: ${y};
            border: 1px solid ${r};
            background: ${m} center/cover no-repeat;
        }
        .thumbs {
            display: flex;
            gap: 10px;
            overflow: auto;
            padding-bottom: 4px;
        }
        .thumb {
            width: 68px;
            height: 68px;
            border-radius: 12px;
            border: 1px solid ${r};
            background: ${m} center/cover no-repeat;
            cursor: pointer;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .thumb.active,
        .thumb:hover {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${$};
        }

        /* side cards */
        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${o};
            padding: 6px 8px;
            border: 1px solid ${r};
            border-radius: 8px;
            display: block;
        }
        .links a:hover {
            color: ${a};
            border-color: ${a};
        }

        .vendors {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .vendors .vname {
            font-weight: 700;
        }
        .vendors .vmeta {
            margin-top: 2px;
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
            border: 1px solid ${r};
        }
        .timeline .muted {
            color: ${o};
            font-size: 12px;
        }

        .related .relGrid {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
        }
        .related .relCard {
            border: 1px solid ${r};
            border-radius: 10px;
            padding: 10px;
            color: ${p};
            background: ${m};
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .related .relCard:hover {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${$};
        }
        .related .price {
            color: ${o};
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
            color: ${o};
        }

        .danger {
            padding: 16px;
        }
        .danger .full {
            width: 100%;
        }

        .muted {
            color: ${o};
        }
        .small {
            font-size: 12px;
        }
        .flag {
            display: inline-block;
            padding: 4px 10px;
            border: 1px solid ${r};
            border-radius: 999px;
        }
    `,Overlay:N.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:N.div`
        width: min(520px, 92vw);
        border-radius: ${y};
        border: 1px solid ${r};
        background: ${m};
        color: ${p};
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
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${r};
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${m};
            color: ${p};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${$};
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
    `},u=(l,t)=>{const d=l instanceof Date?l:new Date(l),n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=b=>String(b).padStart(2,"0"),g=`${n[d.getDay()]} ${j[d.getMonth()]} ${c(d.getDate())} ${d.getFullYear()}`;return t?`${g} ${c(d.getHours())}:${c(d.getMinutes())}:${c(d.getSeconds())}hrs`:g},R=l=>{const t=l instanceof Date?l:new Date(l),d=n=>String(n).padStart(2,"0");return`${d(t.getHours())}:${d(t.getMinutes())}:${d(t.getSeconds())}hrs`},L=({open:l,title:t,message:d,onConfirm:n,onClose:j,confirmText:c="OK"})=>l?e.jsx(f.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:j,children:e.jsxs(f.Modal,{className:"card",onMouseDown:g=>g.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:t})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:d})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:j,children:"Close"}),e.jsx("button",{className:"btnPrimary",onClick:n,children:c})]})]})}):null,H=()=>{const{productId:l}=M(),t=C(),d=v.useRef(null),n=v.useMemo(()=>new Date,[]),[j,c]=v.useState(0),[g,b]=v.useState(!1),s=v.useMemo(()=>({id:l||"PROD-AXN-501",sku:"AXN-501",barcode:"8901234567890",name:"Axion Sports Bottle 750ml",brand:"Axion",categories:["Sports","Hydration"],status:"active",createdAt:n,updatedAt:n,description:"Premium-grade BPA-free sports bottle with flip-top lid and silicone carry loop. Ideal for gyms, outdoor, cycling. Textured grip and wide-mouth design for easy cleaning.",images:["https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1570980431380-5cc43f1f2f1f?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1622037024294-7b593a1cf9b6?q=80&w=1200&auto=format&fit=crop"],tags:["bestseller","summer","outdoor"],pricing:{currency:"INR",mrp:899,sellingPrice:699,cost:542.25,marginPercent:"22.4%",tiers:[{minQty:5,price:679,label:"Pack of 5"},{minQty:10,price:659,label:"Pack of 10"},{minQty:25,price:639,label:"Pack of 25"}],priceList:"Standard India 2025"},tax:{hsn:"3926",gstRate:"18%"},attributes:{color:"Ocean Blue",capacity:"750 ml",material:"Tritan (BPA-free)",finish:"Matte"},dimensions:{weight:"210 g",length:"7.2 cm",width:"7.2 cm",height:"25.5 cm",shippingWeight:"290 g",packageDims:"9 x 9 x 27 cm"},shipping:{isFragile:!1,returnable:!0,shelfLifeDays:0,handlingNotes:"Avoid extreme heat; top-rack dishwasher safe."},inventory:{stockOnHand:1840,committed:215,available:1625,reorderLevel:500,warehouses:[{id:"W-DEL",name:"Delhi WH",available:620},{id:"W-MUM",name:"Mumbai WH",available:480},{id:"W-BLR",name:"Bengaluru WH",available:525}],batches:[{batch:"AXN-750-A1",mfg:"2025-06-12",expiry:"",qty:900},{batch:"AXN-750-A2",mfg:"2025-08-02",expiry:"",qty:940}]},variants:[{id:"VAR-OBL-750",sku:"AXN-501-OBL",attrs:{color:"Ocean Blue",cap:"Flip"},price:699,stock:820},{id:"VAR-CBL-750",sku:"AXN-501-CBL",attrs:{color:"Carbon Black",cap:"Flip"},price:699,stock:805},{id:"VAR-RED-750",sku:"AXN-501-RED",attrs:{color:"Signal Red",cap:"Flip"},price:699,stock:0}],vendors:[{id:"VND-1002",name:"Bluewave Traders",leadTimeDays:7,moq:50,rating:"4.5/5"},{id:"VND-1041",name:"HydroSupply India",leadTimeDays:10,moq:100,rating:"4.2/5"}],seo:{slug:"axion-sports-bottle-750ml",metaTitle:"Axion Sports Bottle 750ml – BPA-free, Leakproof",metaDescription:"Premium Tritan bottle with flip-top lid and wide-mouth design. Perfect for gym and outdoor."},related:[{id:"PROD-AXN-350",name:"Axion Mini 350ml",price:"₹399"},{id:"PROD-AXN-1000",name:"Axion Max 1L",price:"₹799"},{id:"PROD-AXN-ICE",name:"Axion Ice Rod",price:"₹249"}]}),[l,n]),D=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(h,{to:"/products",children:"Products"}),e.jsx("span",{children:"/"}),e.jsx(h,{to:`/products/${s.id}`,children:s.id}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Edit"})]}),P=()=>t(s.id?`/products/${s.id}`:"/products"),S=()=>{{b(!0);return}},w=()=>{{b(!0);return}},A=()=>{d.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return v.useEffect(()=>{c(0)},[s.id]),e.jsxs(f.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(f.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h1",{children:"Product"}),e.jsx("span",{className:`status ${s.status}`,children:s.status})]}),D,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",u(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",u(s.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:P,title:"Back to details",children:"Cancel"}),e.jsx("button",{className:"btnPrimary",onClick:S,title:"Save (demo)",children:"Save (demo)"}),e.jsx("button",{className:"btnDanger",onClick:w,title:"Delete (demo)",children:"Delete"}),e.jsx("button",{className:"btnGhost",onClick:A,title:"Print summary",children:"Print"})]})]}),e.jsxs(f.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"gallery",children:[e.jsx("div",{className:"imageMain",style:{backgroundImage:`url(${s.images[j]})`}}),e.jsx("div",{className:"thumbs",children:s.images.map((i,x)=>e.jsx("button",{className:`thumb ${x===j?"active":""}`,style:{backgroundImage:`url(${i})`},onClick:()=>c(x),"aria-label":`Image ${x+1}`},x))})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"sectionHeader",children:e.jsx("h3",{children:"Essentials"})}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Name"}),e.jsx("input",{value:s.name,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"SKU"}),e.jsx("input",{value:s.sku,readOnly:!0})]})]}),e.jsxs("div",{className:"grid three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Barcode"}),e.jsx("input",{value:s.barcode,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Brand"}),e.jsx("input",{value:s.brand,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Categories"}),e.jsx("input",{value:s.categories.join(", "),readOnly:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Description"}),e.jsx("textarea",{rows:5,value:s.description,readOnly:!0})]}),e.jsx("div",{className:"chips",children:s.tags.map(i=>e.jsx("span",{className:"chip",children:i},i))})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"sectionHeader",children:e.jsx("h3",{children:"Pricing"})}),e.jsxs("div",{className:"grid three",children:[e.jsx("div",{children:e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"MRP"}),e.jsxs("div",{className:"v",children:["₹",s.pricing.mrp.toFixed(2)]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"Selling Price"}),e.jsxs("div",{className:"v",children:["₹",s.pricing.sellingPrice.toFixed(2)]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"Cost"}),e.jsxs("div",{className:"v",children:["₹",s.pricing.cost.toFixed(2)]})]})})]}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"Price Tiers"}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Label"}),e.jsx("th",{children:"Min Qty"}),e.jsx("th",{children:"Price"})]})}),e.jsx("tbody",{children:s.pricing.tiers.map((i,x)=>e.jsxs("tr",{children:[e.jsx("td",{children:i.label}),e.jsx("td",{children:i.minQty}),e.jsxs("td",{children:["₹",i.price.toFixed(2)]})]},x))})]}),e.jsxs("div",{className:"muted small",children:["List: ",s.pricing.priceList," • Margin: ",s.pricing.marginPercent]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"Taxes"}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"HSN"}),e.jsx("input",{value:s.tax.hsn,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"GST Rate"}),e.jsx("input",{value:s.tax.gstRate,readOnly:!0})]})]}),e.jsx("p",{className:"muted small",children:"Tax settings are read-only in this demo."})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("h3",{children:"Variants"}),e.jsx("span",{className:"muted small",children:"Display-only"})]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Variant"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Attributes"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Stock"})]})}),e.jsx("tbody",{children:s.variants.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.sku}),e.jsx("td",{children:Object.entries(i.attrs).map(([x,O])=>`${x}: ${O}`).join(", ")}),e.jsxs("td",{children:["₹",i.price.toFixed(2)]}),e.jsx("td",{children:i.stock})]},i.id))})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"sectionHeader",children:e.jsx("h3",{children:"Inventory"})}),e.jsxs("div",{className:"grid four metrics",children:[e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"On Hand"}),e.jsx("div",{className:"v",children:s.inventory.stockOnHand})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"Committed"}),e.jsx("div",{className:"v",children:s.inventory.committed})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"Available"}),e.jsx("div",{className:"v",children:s.inventory.available})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"k",children:"Reorder Level"}),e.jsx("div",{className:"v",children:s.inventory.reorderLevel})]})]}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"By Warehouse"}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{children:"Available"})]})}),e.jsx("tbody",{children:s.inventory.warehouses.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.name}),e.jsx("td",{children:i.available})]},i.id))})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"Batches"}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"MFG"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"Qty"})]})}),e.jsx("tbody",{children:s.inventory.batches.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.batch}),e.jsx("td",{children:u(i.mfg)}),e.jsx("td",{children:i.expiry?u(i.expiry):"-"}),e.jsx("td",{children:i.qty})]},i.batch))})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"sectionHeader",children:e.jsx("h3",{children:"Attributes & Shipping"})}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"Attributes"}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Color"}),e.jsx("input",{value:s.attributes.color,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Capacity"}),e.jsx("input",{value:s.attributes.capacity,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Material"}),e.jsx("input",{value:s.attributes.material,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Finish"}),e.jsx("input",{value:s.attributes.finish,readOnly:!0})]})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"Dimensions & Shipping"}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Weight"}),e.jsx("input",{value:s.dimensions.weight,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Shipping Weight"}),e.jsx("input",{value:s.dimensions.shippingWeight,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Package"}),e.jsx("input",{value:s.dimensions.packageDims,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Size"}),e.jsx("input",{value:`${s.dimensions.length} × ${s.dimensions.width} × ${s.dimensions.height}`,readOnly:!0})]})]}),e.jsxs("div",{className:"grid three flags",children:[e.jsx("div",{children:e.jsxs("span",{className:"flag",children:["Fragile: ",s.shipping.isFragile?"Yes":"No"]})}),e.jsx("div",{children:e.jsxs("span",{className:"flag",children:["Returnable: ",(s.shipping.returnable,"Yes")]})}),e.jsx("div",{children:e.jsxs("span",{className:"flag",children:["Shelf Life: ",s.shipping.shelfLifeDays||0," days"]})})]}),e.jsx("div",{className:"muted small",children:s.shipping.handlingNotes})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"sectionHeader",children:e.jsx("h3",{children:"SEO"})}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Slug"}),e.jsx("input",{value:s.seo.slug,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Meta Title"}),e.jsx("input",{value:s.seo.metaTitle,readOnly:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Meta Description"}),e.jsx("textarea",{rows:3,value:s.seo.metaDescription,readOnly:!0})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(h,{to:"/products",children:"All Products"})}),e.jsx("li",{children:e.jsx(h,{to:`/products/${s.id}`,children:"View Details"})}),e.jsx("li",{children:e.jsx(h,{to:"/categories",children:"Categories"})}),e.jsx("li",{children:e.jsx(h,{to:"/inventory",children:"Inventory"})}),e.jsx("li",{children:e.jsx(h,{to:"/products/price-lists",children:"Price Lists"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Vendors"}),e.jsx("ul",{className:"vendors",children:s.vendors.map(i=>e.jsxs("li",{children:[e.jsx("div",{className:"vname",children:i.name}),e.jsxs("div",{className:"vmeta muted small",children:["Lead: ",i.leadTimeDays," days • MOQ: ",i.moq," • ",i.rating]})]},i.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Price updated"}),e.jsx("div",{className:"muted",children:u(n,!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Stock received (Delhi WH)"}),e.jsx("div",{className:"muted",children:u(n)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"New variant added"}),e.jsx("div",{className:"muted",children:R(n)})]})]})]})]}),e.jsxs("div",{className:"card related",children:[e.jsx("h3",{children:"Related"}),e.jsx("div",{className:"relGrid",children:s.related.map(i=>e.jsxs(h,{to:`/products/${i.id}`,className:"relCard",children:[e.jsx("div",{className:"title",children:i.name}),e.jsx("div",{className:"price",children:i.price})]},i.id))})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:d,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Product"}),e.jsx("span",{className:"v",children:s.name})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"SKU"}),e.jsx("span",{className:"v",children:s.sku})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Brand"}),e.jsx("span",{className:"v",children:s.brand})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Categories"}),e.jsx("span",{className:"v",children:s.categories.join(", ")})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"MRP"}),e.jsxs("span",{className:"v",children:["₹",s.pricing.mrp.toFixed(2)]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Selling"}),e.jsxs("span",{className:"v",children:["₹",s.pricing.sellingPrice.toFixed(2)]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"HSN"}),e.jsxs("span",{className:"v",children:[s.tax.hsn," / ",s.tax.gstRate]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:u(s.createdAt,!0)})]})]})]}),e.jsxs("div",{className:"card danger",children:[e.jsx("h3",{children:"Danger Zone"}),e.jsx("button",{className:"btnDanger full",onClick:w,title:"Delete product (demo)",children:"Delete Product"}),e.jsx("div",{className:"muted small",children:"Destructive actions are disabled in demo."})]})]})]}),e.jsx(L,{open:g,title:"Demo mode",message:"This action is disabled in the demo. All data is read-only.",confirmText:"Got it",onConfirm:()=>b(!1),onClose:()=>b(!1)})]})};export{H as default};
