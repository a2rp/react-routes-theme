import{d as f,u as Y,r as g,j as e,N as P}from"./index-B_KzNciT.js";const x="var(--text, #f3f4f6)",v="var(--muted, #a0a0a7)",b="var(--card, #111318)",d="var(--border, #23262d)",n="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",R="var(--danger, #ef4444)",T="var(--radius, 16px)",N={Page:f.div`
        padding: 24px 0 64px;
        color: ${x};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${v};
            }
            .current {
                color: ${x};
            }
        }
    `,Header:f.header`
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
            color: ${v};
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
            border: 1px solid ${d};
            background: ${b};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${$};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }

        .btnPrimary[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
            box-shadow: none;
            border-color: ${d};
            color: ${v};
        }
    `,Banner:f.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${d};
        border-radius: 10px;
        background: color-mix(in oklab, ${n} 10%, transparent);
        color: ${x};
    `,Grid:f.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .block {
            margin-bottom: 18px;
        }
        .block h3 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .three {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        .four {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .two {
                grid-template-columns: 1fr 1fr;
            }
            .three {
                grid-template-columns: repeat(3, 1fr);
            }
            .four {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${v};
            margin-bottom: 6px;
        }
        input,
        select,
        textarea {
            width: 100%;
        }

        .hint {
            margin-top: 6px;
            color: ${v};
            font-size: 12px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid ${d};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${n} 8%, transparent);
        }

        /* Media */
        .media {
            display: grid;
            gap: 16px;
            grid-template-columns: 280px 1fr;
        }
        @media (max-width: 900px) {
            .media {
                grid-template-columns: 1fr;
            }
        }

        .cover .thumb {
            width: 100%;
            aspect-ratio: 1/1;
            background-size: cover;
            background-position: center;
            border: 1px solid ${d};
            border-radius: ${T};
            background-color: ${b};
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        .cover .controls {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        .gallery .row {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 10px;
            margin-bottom: 10px;
        }
        .gthumb {
            position: relative;
            border: 1px solid ${d};
            border-radius: 10px;
            overflow: hidden;
            background: ${b};
        }
        .gthumb .img {
            width: 100%;
            padding-top: 100%;
            background-size: cover;
            background-position: center;
        }
        .gthumb .x {
            position: absolute;
            top: 6px;
            right: 6px;
            border: 1px solid ${d};
            background: ${b};
            color: ${x};
            border-radius: 8px;
            padding: 2px 8px;
            cursor: pointer;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .gthumb .x:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${$};
        }

        /* Table */
        .tableWrap {
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${d};
            font-size: 13px;
        }
        th {
            text-align: left;
            background: ${b};
            color: ${n};
            font-weight: 600;
        }
        tr:hover td {
            background: color-mix(in oklab, ${n} 10%, transparent);
        }

        /* Sidebar */
        .side {
            display: grid;
            gap: 16px;
        }
        .kvs {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .kvs .k {
            color: ${v};
            width: 120px;
            display: inline-block;
        }
        .kvs .v {
            color: ${x};
        }
        .sideActions {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chipLink {
            border: 1px solid ${d};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${x};
            background: color-mix(in oklab, ${n} 8%, transparent);
            text-decoration: none;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chipLink:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${$};
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
            color: ${v};
        }
        .printSummary .v {
            color: ${x};
        }
    `,Overlay:f.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:f.div`
        width: min(520px, 92vw);
        border-radius: ${T};
        border: 1px solid ${d};
        background: ${b};
        color: ${x};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${d};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
            color: ${x};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${d};
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${d};
            background: ${b};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${$};
        }
        .btnDanger {
            border-color: ${R};
            color: ${R};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${R} 10%, transparent);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }
    `},I=!0,k=(h,p)=>{const l=h instanceof Date?h:new Date(h),u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=i=>String(i).padStart(2,"0"),a=`${u[l.getDay()]} ${y[l.getMonth()]} ${m(l.getDate())} ${l.getFullYear()}`;return p?`${a} ${m(l.getHours())}:${m(l.getMinutes())}:${m(l.getSeconds())}hrs`:a},K=h=>{const p=h instanceof Date?h:new Date(h),l=u=>String(u).padStart(2,"0");return`${l(p.getHours())}:${l(p.getMinutes())}:${l(p.getSeconds())}hrs`},F=({open:h,title:p,message:l,onConfirm:u,onClose:y,confirmText:m="Confirm",danger:a=!1})=>h?e.jsx(N.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:y,children:e.jsxs(N.Modal,{className:"card",onMouseDown:i=>i.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:p})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:l})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:y,children:"Cancel"}),e.jsx("button",{className:a?"btnDanger":"btnPrimary",onClick:u,children:m})]})]})}):null,X=()=>{const h=Y(),p=g.useMemo(()=>new Date,[]),l=g.useRef(null),u=g.useRef(null),y=g.useRef(null),m=g.useMemo(()=>({id:"PROD-NEW",createdAt:p.toISOString(),updatedAt:p.toISOString(),status:"draft",visibility:"catalog",type:"simple",name:"Acme Ergonomic Chair",sku:"AC-CHAIR-ERG-01",brand:"Acme",category:"Office Chairs",barcode:"8901234567890",uom:"pcs",currency:"INR",pricing:{mrp:"12999.00",sell:"10999.00",cost:"7499.00",taxClass:"GST 18%",hsn:"9401",discount:"0.00",gstPercent:"18"},inventory:{track:"yes",opening:"0",reorder:"5",warehouse:"Central WH",lotTracking:"enabled",expiryRequired:"no",shelf:"A3-14"},attributes:{color:"Black",size:"Standard",material:"Mesh + Alloy",weight:"12.5 kg",dimensions:{l:"70 cm",w:"70 cm",h:"120 cm"}},media:{cover:"",gallery:[]},seo:{slug:"acme-ergonomic-chair",metaTitle:"Acme Ergonomic Chair – Lumbar Support, 4D Armrest",metaDescription:"Premium ergonomic office chair with adjustable lumbar, headrest, and 4D armrest. Ideal for long work hours.",canonical:"https://example.com/products/acme-ergonomic-chair"},tags:["ergonomic","office","chair","mesh"],variants:[{id:"V1",attrs:"Black / Standard",sku:"AC-CHAIR-ERG-01",price:"10999.00",stock:12},{id:"V2",attrs:"Grey / Standard",sku:"AC-CHAIR-ERG-02",price:"10999.00",stock:8},{id:"V3",attrs:"Black / XL",sku:"AC-CHAIR-ERG-03",price:"11999.00",stock:4}],related:["PROD-2001","PROD-3002","PROD-1108"],compliance:{requiresPrescription:"no",storage:"Room temperature",batchPattern:"N/A",schedule:"General Goods"}}),[p]),[a,i]=g.useState(m),[C,w]=g.useState(""),[M,S]=g.useState(!1);g.useEffect(()=>{if(!C)return;const s=setTimeout(()=>w(""),3500);return()=>clearTimeout(s)},[C]);const j=s=>{const{name:r,value:c}=s.target;i(o=>({...o,[r]:c,updatedAt:new Date().toISOString()}))},t=(s,r,c)=>{i(o=>({...o,[s]:{...o[s],[r]:c},updatedAt:new Date().toISOString()}))},D=(s,r)=>{i(c=>({...c,attributes:{...c.attributes,dimensions:{...c.attributes.dimensions,[s]:r}},updatedAt:new Date().toISOString()}))},O=s=>{var o;const r=(o=s.target.files)==null?void 0:o[0];if(!r)return;const c=URL.createObjectURL(r);i(G=>({...G,media:{...G.media,cover:c},updatedAt:new Date().toISOString()}))},B=()=>{i(s=>({...s,media:{...s.media,cover:""},updatedAt:new Date().toISOString()})),u.current&&(u.current.value="")},E=s=>{const r=Array.from(s.target.files||[]);if(!r.length)return;const c=r.map(o=>URL.createObjectURL(o));i(o=>({...o,media:{...o.media,gallery:[...o.media.gallery,...c]},updatedAt:new Date().toISOString()}))},L=s=>{i(r=>{const c=[...r.media.gallery];return c.splice(s,1),{...r,media:{...r.media,gallery:c},updatedAt:new Date().toISOString()}})},H=()=>h("/products"),U=()=>{w(`Demo mode: creation disabled • ${k(new Date,!0)}`)},z=()=>w(`Demo mode: creation disabled • ${k(new Date,!0)}`),W=()=>S(!0),q=()=>{S(!1),i(m),w("Cleared form")},A=()=>{l.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},V=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(P,{to:"/products",children:"Products"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"New"})]});return e.jsxs(N.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(N.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"New Product"}),V,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",k(a.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",k(a.updatedAt,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Local Time: ",K(new Date)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:H,title:"Back to products",children:"Cancel"}),e.jsx("button",{className:"btnGhost",onClick:W,title:"Clear all fields",children:"Clear"}),e.jsx("button",{className:"btnPrimary",disabled:I,title:"Demo mode: action unavailable",onClick:U,children:"Create"}),e.jsx("button",{className:"btnPrimary",disabled:I,title:"Demo mode: action unavailable",onClick:z,children:"Create & View"}),e.jsx("button",{className:"btnGhost",onClick:A,title:"Print summary",children:"Print"})]})]}),C?e.jsx(N.Banner,{role:"status","aria-live":"polite",children:C}):null,e.jsxs(N.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Basic Details"}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Product Name"}),e.jsx("input",{name:"name",value:a.name,onChange:j,placeholder:"Product name"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"SKU"}),e.jsx("input",{name:"sku",value:a.sku,onChange:j,placeholder:"Stock keeping unit"})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Brand"}),e.jsx("input",{name:"brand",value:a.brand,onChange:j,placeholder:"Brand"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Category"}),e.jsx("input",{name:"category",value:a.category,onChange:j,placeholder:"Category"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{name:"status",value:a.status,onChange:j,children:[e.jsx("option",{value:"draft",children:"Draft"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"archived",children:"Archived"})]})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Visibility"}),e.jsx("select",{value:a.visibility,onChange:s=>t("visibility",null,null),disabled:!0,children:e.jsx("option",{value:"catalog",children:"Catalog"})}),e.jsx("div",{className:"hint",children:"Shown in listings and detail pages."})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Barcode"}),e.jsx("input",{name:"barcode",value:a.barcode,onChange:j,placeholder:"EAN/UPC"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Unit of Measure"}),e.jsxs("select",{name:"uom",value:a.uom,onChange:j,children:[e.jsx("option",{value:"pcs",children:"pcs"}),e.jsx("option",{value:"box",children:"box"}),e.jsx("option",{value:"pack",children:"pack"})]})]})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Pricing & Tax"}),e.jsxs("div",{className:"four",children:[e.jsxs("div",{children:[e.jsx("label",{children:"MRP"}),e.jsx("input",{value:a.pricing.mrp,onChange:s=>t("pricing","mrp",s.target.value),placeholder:"0.00"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Selling Price"}),e.jsx("input",{value:a.pricing.sell,onChange:s=>t("pricing","sell",s.target.value),placeholder:"0.00"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Cost"}),e.jsx("input",{value:a.pricing.cost,onChange:s=>t("pricing","cost",s.target.value),placeholder:"0.00"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Currency"}),e.jsxs("select",{value:a.currency,onChange:s=>j({target:{name:"currency",value:s.target.value}}),children:[e.jsx("option",{value:"INR",children:"INR"}),e.jsx("option",{value:"USD",children:"USD"}),e.jsx("option",{value:"EUR",children:"EUR"})]})]})]}),e.jsxs("div",{className:"four",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Tax Class"}),e.jsxs("select",{value:a.pricing.taxClass,onChange:s=>t("pricing","taxClass",s.target.value),children:[e.jsx("option",{children:"GST 0%"}),e.jsx("option",{children:"GST 5%"}),e.jsx("option",{children:"GST 12%"}),e.jsx("option",{children:"GST 18%"}),e.jsx("option",{children:"GST 28%"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"HSN Code"}),e.jsx("input",{value:a.pricing.hsn,onChange:s=>t("pricing","hsn",s.target.value),placeholder:"HSN"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"GST %"}),e.jsx("input",{value:a.pricing.gstPercent,onChange:s=>t("pricing","gstPercent",s.target.value),placeholder:"%"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Discount"}),e.jsx("input",{value:a.pricing.discount,onChange:s=>t("pricing","discount",s.target.value),placeholder:"0.00"})]})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Inventory"}),e.jsxs("div",{className:"four",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Track Inventory"}),e.jsxs("select",{value:a.inventory.track,onChange:s=>t("inventory","track",s.target.value),children:[e.jsx("option",{value:"yes",children:"Yes"}),e.jsx("option",{value:"no",children:"No"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Opening Stock"}),e.jsx("input",{value:a.inventory.opening,onChange:s=>t("inventory","opening",s.target.value),placeholder:"0"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Reorder Level"}),e.jsx("input",{value:a.inventory.reorder,onChange:s=>t("inventory","reorder",s.target.value),placeholder:"0"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Warehouse"}),e.jsxs("select",{value:a.inventory.warehouse,onChange:s=>t("inventory","warehouse",s.target.value),children:[e.jsx("option",{children:"Central WH"}),e.jsx("option",{children:"North Hub"}),e.jsx("option",{children:"South Hub"})]})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Lot/Batch Tracking"}),e.jsxs("select",{value:a.inventory.lotTracking,onChange:s=>t("inventory","lotTracking",s.target.value),children:[e.jsx("option",{value:"enabled",children:"Enabled"}),e.jsx("option",{value:"disabled",children:"Disabled"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Expiry Required"}),e.jsxs("select",{value:a.inventory.expiryRequired,onChange:s=>t("inventory","expiryRequired",s.target.value),children:[e.jsx("option",{value:"no",children:"No"}),e.jsx("option",{value:"yes",children:"Yes"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Shelf"}),e.jsx("input",{value:a.inventory.shelf,onChange:s=>t("inventory","shelf",s.target.value),placeholder:"Bay/Rack"})]})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Attributes"}),e.jsxs("div",{className:"four",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Color"}),e.jsx("input",{value:a.attributes.color,onChange:s=>i(r=>({...r,attributes:{...r.attributes,color:s.target.value}}))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Size"}),e.jsx("input",{value:a.attributes.size,onChange:s=>i(r=>({...r,attributes:{...r.attributes,size:s.target.value}}))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Material"}),e.jsx("input",{value:a.attributes.material,onChange:s=>i(r=>({...r,attributes:{...r.attributes,material:s.target.value}}))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Weight"}),e.jsx("input",{value:a.attributes.weight,onChange:s=>i(r=>({...r,attributes:{...r.attributes,weight:s.target.value}}))})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Length"}),e.jsx("input",{value:a.attributes.dimensions.l,onChange:s=>D("l",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Width"}),e.jsx("input",{value:a.attributes.dimensions.w,onChange:s=>D("w",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Height"}),e.jsx("input",{value:a.attributes.dimensions.h,onChange:s=>D("h",s.target.value)})]})]}),e.jsx("div",{className:"chips",children:a.tags.map(s=>e.jsx("span",{className:"chip",children:s},s))})]}),e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Media"}),e.jsxs("div",{className:"media",children:[e.jsxs("div",{className:"cover",children:[e.jsx("div",{className:"thumb",style:{backgroundImage:`url(${a.media.cover||"/image.svg"})`}}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{className:"btnGhost small",children:["Choose Cover",e.jsx("input",{ref:u,type:"file",accept:"image/*",hidden:!0,onChange:O})]}),a.media.cover?e.jsx("button",{className:"btnGhost small",onClick:B,children:"Remove"}):null,e.jsx("a",{className:"btnGhost small",href:a.media.cover||"/image.svg",download:!0,children:"Download"})]})]}),e.jsxs("div",{className:"gallery",children:[e.jsx("div",{className:"row",children:a.media.gallery.length===0?e.jsx("div",{className:"empty",children:"No gallery images yet."}):a.media.gallery.map((s,r)=>e.jsxs("div",{className:"gthumb",children:[e.jsx("div",{className:"img",style:{backgroundImage:`url(${s})`}}),e.jsx("button",{className:"x",onClick:()=>L(r),title:"Remove",children:"×"})]},r))}),e.jsxs("label",{className:"btnGhost small",children:["Add Gallery",e.jsx("input",{ref:y,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:E})]})]})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"SEO"}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Slug"}),e.jsx("input",{value:a.seo.slug,onChange:s=>i(r=>({...r,seo:{...r.seo,slug:s.target.value}}))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Canonical URL"}),e.jsx("input",{value:a.seo.canonical,onChange:s=>i(r=>({...r,seo:{...r.seo,canonical:s.target.value}}))})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Meta Title"}),e.jsx("input",{value:a.seo.metaTitle,onChange:s=>i(r=>({...r,seo:{...r.seo,metaTitle:s.target.value}}))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Meta Description"}),e.jsx("textarea",{rows:3,value:a.seo.metaDescription,onChange:s=>i(r=>({...r,seo:{...r.seo,metaDescription:s.target.value}}))})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Variants"}),e.jsx("div",{className:"hint",children:"Preview of variant matrix (read-only in demo)."}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Variant"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Stock"})]})}),e.jsx("tbody",{children:a.variants.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.attrs}),e.jsx("td",{children:s.sku}),e.jsxs("td",{children:[a.currency," ",s.price]}),e.jsx("td",{children:s.stock})]},s.id))})]})})]}),e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Compliance"}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Requires Prescription"}),e.jsxs("select",{value:a.compliance.requiresPrescription,onChange:s=>i(r=>({...r,compliance:{...r.compliance,requiresPrescription:s.target.value}})),children:[e.jsx("option",{value:"no",children:"No"}),e.jsx("option",{value:"yes",children:"Yes"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Storage"}),e.jsx("input",{value:a.compliance.storage,onChange:s=>i(r=>({...r,compliance:{...r.compliance,storage:s.target.value}}))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Batch Code Pattern"}),e.jsx("input",{value:a.compliance.batchPattern,onChange:s=>i(r=>({...r,compliance:{...r.compliance,batchPattern:s.target.value}}))})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Schedule"}),e.jsx("input",{value:a.compliance.schedule,onChange:s=>i(r=>({...r,compliance:{...r.compliance,schedule:s.target.value}}))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Notes"}),e.jsx("input",{placeholder:"Any handling notes…"})]})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Summary"}),e.jsxs("ul",{className:"kvs",children:[e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Name"}),e.jsx("span",{className:"v",children:a.name})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"SKU"}),e.jsx("span",{className:"v",children:a.sku})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Brand"}),e.jsx("span",{className:"v",children:a.brand})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Category"}),e.jsx("span",{className:"v",children:a.category})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:a.status})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Price"}),e.jsxs("span",{className:"v",children:[a.currency," ",a.pricing.sell]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Tax"}),e.jsx("span",{className:"v",children:a.pricing.taxClass})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"HSN"}),e.jsx("span",{className:"v",children:a.pricing.hsn})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Stock"}),e.jsx("span",{className:"v",children:a.inventory.opening})]})]}),e.jsxs("div",{className:"sideActions",children:[e.jsx("button",{className:"btnGhost",onClick:A,children:"Print"}),e.jsx(P,{to:"/products",className:"btnGhost",children:"Back to List"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Related Products"}),e.jsx("div",{className:"chips",children:a.related.map(s=>e.jsx(P,{to:`/products/${s}`,className:"chipLink",children:s},s))})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:l,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Product"}),e.jsx("span",{className:"v",children:a.name})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"SKU"}),e.jsx("span",{className:"v",children:a.sku})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Brand"}),e.jsx("span",{className:"v",children:a.brand})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Category"}),e.jsx("span",{className:"v",children:a.category})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Price"}),e.jsxs("span",{className:"v",children:[a.currency," ",a.pricing.sell]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Tax"}),e.jsxs("span",{className:"v",children:[a.pricing.taxClass," (HSN ",a.pricing.hsn,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:k(a.createdAt,!0)})]})]})]})]})]}),e.jsx(F,{open:M,title:"Clear all fields?",message:"This will reset the form to its initial values.",confirmText:"Clear",onConfirm:q,onClose:()=>S(!1)})]})};export{X as default};
