import{d as h,u as z,r as d,j as e,N as A}from"./index-Dm9gfKqL.js";const n="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",p="var(--card, #111318)",i="var(--border, #23262d)",r="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",S="var(--danger, #ef4444)",C="var(--warn, #f59e0b)",G="var(--radius, 14px)",m={Page:h.div`
        padding: 24px 0 64px;
        color: ${n};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${o};
            }
            .current {
                color: ${n};
            }
        }
    `,Header:h.header`
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
            color: ${o};
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
            border: 1px solid ${i};
            background: ${p};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `,Summary:h.section`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin-bottom: 16px;
        @media (min-width: 900px) {
            grid-template-columns: repeat(5, 1fr);
        }

        .stat {
            padding: 14px 16px;
        }
        .k {
            color: ${o};
            font-size: 12px;
        }
        .v {
            font-size: 24px;
            font-weight: 800;
            letter-spacing: 0.4px;
        }
        .s {
            color: ${o};
            font-size: 12px;
            margin-top: 4px;
        }
    `,Toolbar:h.section`
        padding: 12px;
        margin-bottom: 16px;
        display: grid;
        gap: 12px;

        .filters {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            align-items: center;
            @media (min-width: 1024px) {
                grid-template-columns: 1fr auto auto;
            }
        }

        .search input {
            width: 100%;
            height: 40px;
            border: 1px solid ${i};
            background: ${p};
            color: ${n};
            border-radius: 10px;
            padding: 0 14px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${o};
        }
        .search input:focus {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${f};
            outline: none;
        }

        .seg {
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .seg .seg {
            border: 1px solid ${i};
            background: ${p};
            color: ${o};
            border-radius: 999px;
            padding: 8px 12px;
            font-weight: 600;
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .seg .seg:hover {
            border-color: ${r};
            color: ${r};
        }
        .seg .seg.active {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }

        .pickers {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .pickers label {
            display: grid;
            gap: 4px;
            font-size: 12px;
            color: ${o};
        }
        .pickers select {
            min-width: 160px;
            height: 40px;
            border: 1px solid ${i};
            background: ${p};
            color: ${n};
            border-radius: 10px;
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .pickers select:focus {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${f};
            outline: none;
        }

        .legend {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }
    `,TableWrap:h.section`
        overflow: auto;
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${p};
            border-bottom: 1px solid ${i};
            text-align: left;
            padding: 10px;
            z-index: 1;
            color: ${o};
            font-weight: 700;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${i};
            vertical-align: middle;
        }

        .name .link {
            color: ${n};
        }
        .name .link:hover {
            color: ${r};
        }
        .name .sub {
            color: ${o};
            font-size: 12px;
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${i};
            background: ${p};
            color: ${n};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
        }

        .pill {
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
            border: 1px solid ${i};
        }
        .pill.info {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 2px ${f} inset;
        }
        .pill.warn {
            color: ${C};
            border-color: ${C};
            box-shadow: 0 0 0 2px color-mix(in oklab, ${C} 20%, transparent)
                inset;
        }
        .pill.danger {
            color: ${S};
            border-color: ${S};
            box-shadow: 0 0 0 2px
                color-mix(in oklab, ${S} 20%, transparent) inset;
        }
        .pill.mute {
            color: ${o};
            border-color: ${i};
        }

        .rowActions {
            display: flex;
            gap: 8px;
        }
        .btnLink {
            background: transparent;
            color: ${r};
            border: none;
            padding: 0;
            cursor: pointer;
            font-weight: 700;
        }
        .btnLink:hover {
            text-decoration: underline;
        }

        .right {
            text-align: right;
        }

        tr:hover td {
            background: color-mix(in oklab, ${r} 6%, transparent);
        }

        .empty {
            text-align: center;
            padding: 40px 0;
        }
        .empty .title {
            font-weight: 800;
            margin-bottom: 6px;
        }
        .empty .sub {
            color: ${o};
        }

        .footerBar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            color: ${o};
        }
        .footerBar .right {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .footerBar .page {
            color: ${n};
        }
        .btnGhost {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${i};
            background: ${p};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `,PrintCard:h.section`
        margin-top: 16px;
        padding: 14px 16px;
        h3 {
            margin-bottom: 10px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        @media (min-width: 900px) {
            .grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        .k {
            color: ${o};
            font-size: 12px;
        }
        .v {
            font-weight: 700;
        }
        .note {
            color: ${o};
            margin-top: 10px;
            font-size: 12px;
        }
    `,Overlay:h.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
    `,Modal:h.div`
        width: min(460px, 92vw);
        border-radius: ${G};
        border: 1px solid ${i};
        background: ${p};
        color: ${n};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${i};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${n};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${i};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${p};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
    `},N=(l,j)=>{const t=l instanceof Date?l:new Date(l),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=$=>String($).padStart(2,"0"),u=`${g[t.getDay()]} ${x[t.getMonth()]} ${v(t.getDate())} ${t.getFullYear()}`;return j?`${u} ${v(t.getHours())}:${v(t.getMinutes())}:${v(t.getSeconds())}hrs`:u},T=[{id:"MED-AMOX-500",name:"Amoxicillin 500mg Capsule",sku:"AMOX-500-CAP",brand:"PharmaOne",category:"Antibiotics",mrp:"₹120.00",pack:"Strip of 10",status:"Active",hsn:"300490",gst:"12%",stock:240,reorder:50,expiry:"2026-03-31",tags:["Rx","Cold-Chain:No"]},{id:"MED-AZTH-250",name:"Azithromycin 250mg Tablet",sku:"AZTH-250-TAB",brand:"MediCore",category:"Antibiotics",mrp:"₹98.00",pack:"Strip of 6",status:"Active",hsn:"300420",gst:"12%",stock:34,reorder:40,expiry:"2026-12-31",tags:["Rx"]},{id:"MED-PARA-650",name:"Paracetamol 650mg Tablet",sku:"PARA-650-TAB",brand:"GoodHealth",category:"Analgesics",mrp:"₹28.00",pack:"Strip of 15",status:"Active",hsn:"300450",gst:"12%",stock:0,reorder:100,expiry:"2027-05-31",tags:["OTC","Bestseller"]},{id:"MED-IBUP-400",name:"Ibuprofen 400mg Tablet",sku:"IBUP-400-TAB",brand:"MediCore",category:"Analgesics",mrp:"₹52.00",pack:"Strip of 10",status:"Active",hsn:"300450",gst:"12%",stock:12,reorder:30,expiry:"2025-12-31",tags:["OTC"]},{id:"MED-OMEP-20",name:"Omeprazole 20mg Capsule",sku:"OMEP-20-CAP",brand:"Healix",category:"Gastro",mrp:"₹75.00",pack:"Strip of 20",status:"Active",hsn:"300490",gst:"12%",stock:410,reorder:100,expiry:"2026-10-31",tags:["Rx"]},{id:"MED-ATOR-10",name:"Atorvastatin 10mg Tablet",sku:"ATOR-10-TAB",brand:"PharmaOne",category:"Cardiac",mrp:"₹135.00",pack:"Strip of 10",status:"Active",hsn:"300490",gst:"12%",stock:76,reorder:40,expiry:"2027-02-28",tags:["Rx","Chronic"]},{id:"MED-RANT-150",name:"Ranitidine 150mg Tablet",sku:"RANT-150-TAB",brand:"GenoMed",category:"Gastro",mrp:"₹46.00",pack:"Strip of 14",status:"Discontinued",hsn:"300490",gst:"12%",stock:0,reorder:0,expiry:"2024-12-31",tags:["Legacy"]},{id:"MED-MULT-ADL",name:"Multivitamin Adult",sku:"MULT-ADL-CAP",brand:"GoodHealth",category:"Supplements",mrp:"₹199.00",pack:"Bottle of 60",status:"Active",hsn:"210690",gst:"18%",stock:155,reorder:60,expiry:"2027-08-31",tags:["OTC"]},{id:"MED-VITC-500",name:"Vitamin C 500mg Tablet",sku:"VITC-500-TAB",brand:"NutraPlus",category:"Supplements",mrp:"₹120.00",pack:"Bottle of 100",status:"Active",hsn:"210690",gst:"18%",stock:5,reorder:40,expiry:"2026-01-31",tags:["OTC","Seasonal"]},{id:"MED-ORS-20",name:"ORS Powder 20.5g",sku:"ORS-20-SAT",brand:"HydroCare",category:"Electrolytes",mrp:"₹20.00",pack:"Sachet",status:"Active",hsn:"300490",gst:"12%",stock:320,reorder:80,expiry:"2028-03-31",tags:["OTC","ESSENTIAL"]},{id:"MED-CETI-10",name:"Cetirizine 10mg Tablet",sku:"CETI-10-TAB",brand:"MediCore",category:"Anti-Allergic",mrp:"₹18.00",pack:"Strip of 10",status:"Active",hsn:"300490",gst:"12%",stock:90,reorder:30,expiry:"2026-04-30",tags:["OTC"]},{id:"MED-METF-500",name:"Metformin 500mg Tablet",sku:"METF-500-TAB",brand:"Healix",category:"Diabetes",mrp:"₹36.00",pack:"Strip of 10",status:"Active",hsn:"300490",gst:"12%",stock:260,reorder:80,expiry:"2027-11-30",tags:["Rx","Chronic"]}],H=({open:l,onClose:j,title:t="Demo only",message:g="This action is disabled in the demo."})=>l?e.jsx(m.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:j,children:e.jsxs(m.Modal,{className:"card",onMouseDown:x=>x.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:t})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:g})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:j,children:"Okay"})})]})}):null,I=()=>{z();const[l,j]=d.useState(""),[t,g]=d.useState("all"),[x,v]=d.useState("all"),[u,$]=d.useState("all"),[O,b]=d.useState(!1),M=d.useRef(null),D=d.useRef(null);d.useEffect(()=>{const s=M.current;if(!s)return;const a=requestAnimationFrame(()=>{try{s.focus({preventScroll:!0})}catch{s.focus()}});return()=>cancelAnimationFrame(a)},[]);const E=d.useMemo(()=>Array.from(new Set(T.map(s=>s.brand))).sort(),[]),R=d.useMemo(()=>Array.from(new Set(T.map(s=>s.category))).sort(),[]),y=d.useMemo(()=>{const s=l.trim().toLowerCase();return T.filter(a=>{if(t!=="all"&&(t==="active"&&a.status!=="Active"||t==="discontinued"&&a.status!=="Discontinued")||x!=="all"&&a.brand!==x||u!=="all"&&a.category!==u)return!1;if(!s)return!0;const c=`${a.name} ${a.sku} ${a.brand} ${a.category} ${a.id} ${a.hsn}`.toLowerCase();return s.split(/\s+/).every(k=>c.includes(k))})},[l,t,x,u]),B=()=>{D.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},L=()=>{const s=new Blob([JSON.stringify(y,null,2)],{type:"application/json"}),a=URL.createObjectURL(s),c=document.createElement("a");c.href=a,c.download="products.json",document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(a)},w=new Date;return e.jsxs(m.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(m.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Products"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(A,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Products"})]}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Last refreshed: ",N(w,!0)]})})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>b(!0),title:"Disabled in demo",children:"New Product"}),e.jsx("button",{className:"btnGhost",onClick:()=>b(!0),title:"Disabled in demo",children:"Bulk Edit"}),e.jsx("button",{className:"btnGhost",onClick:()=>b(!0),title:"Disabled in demo",children:"Import"}),e.jsx("button",{className:"btnPrimary",onClick:L,children:"Export JSON"}),e.jsx("button",{className:"btnPrimary",onClick:B,children:"Print"})]})]}),e.jsxs(m.Summary,{children:[e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"Total SKUs"}),e.jsx("div",{className:"v",children:"2,480"}),e.jsxs("div",{className:"s",children:["as of ",N(w)]})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"Brands"}),e.jsx("div",{className:"v",children:"112"}),e.jsx("div",{className:"s",children:"active"})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"Categories"}),e.jsx("div",{className:"v",children:"58"}),e.jsx("div",{className:"s",children:"catalog"})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"Near Expiry"}),e.jsx("div",{className:"v",children:"17"}),e.jsx("div",{className:"s",children:"next 90 days"})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"k",children:"Out of Stock"}),e.jsx("div",{className:"v",children:"4"}),e.jsx("div",{className:"s",children:"critical"})]})]}),e.jsxs(m.Toolbar,{className:"card",children:[e.jsxs("div",{className:"filters",children:[e.jsx("div",{className:"search",children:e.jsx("input",{ref:M,value:l,onChange:s=>j(s.target.value),placeholder:"Search name, SKU, brand, HSN… (Ctrl + K)","aria-label":"Search products"})}),e.jsxs("div",{className:"seg",children:[e.jsx("button",{className:t==="all"?"seg active":"seg",onClick:()=>g("all"),children:"All"}),e.jsx("button",{className:t==="active"?"seg active":"seg",onClick:()=>g("active"),children:"Active"}),e.jsx("button",{className:t==="discontinued"?"seg active":"seg",onClick:()=>g("discontinued"),children:"Discontinued"})]}),e.jsxs("div",{className:"pickers",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Brand"}),e.jsxs("select",{value:x,onChange:s=>v(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),E.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Category"}),e.jsxs("select",{value:u,onChange:s=>$(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),R.map(s=>e.jsx("option",{value:s,children:s},s))]})]})]})]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"pill info",children:"Active"}),e.jsx("span",{className:"pill warn",children:"Low"}),e.jsx("span",{className:"pill danger",children:"OOS"}),e.jsx("span",{className:"pill mute",children:"Discontinued"})]})]}),e.jsxs(m.TableWrap,{className:"card",children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:220},children:"Product"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Brand"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Pack"}),e.jsx("th",{children:"MRP"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"GST"}),e.jsx("th",{className:"right",children:"Stock"}),e.jsx("th",{className:"right",children:"Reorder"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{style:{width:160},children:"Status"}),e.jsx("th",{style:{width:140},children:"Actions"})]})}),e.jsxs("tbody",{children:[y.map(s=>{var k;const a=s.stock>0&&s.stock<=s.reorder,c=s.stock===0;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"name",children:[e.jsx(A,{to:`/products/${s.id}`,className:"link",children:s.name}),e.jsxs("div",{className:"sub",children:["#",s.id]})]})}),e.jsx("td",{children:e.jsx("code",{className:"mono",children:s.sku})}),e.jsx("td",{children:s.brand}),e.jsx("td",{children:s.category}),e.jsx("td",{children:s.pack}),e.jsx("td",{children:s.mrp}),e.jsx("td",{children:s.hsn}),e.jsx("td",{children:s.gst}),e.jsx("td",{className:"right",children:s.stock}),e.jsx("td",{className:"right",children:s.reorder}),e.jsx("td",{children:s.expiry?N(s.expiry):"-"}),e.jsx("td",{children:e.jsxs("div",{className:"tags",children:[s.status==="Active"&&e.jsx("span",{className:"pill info",children:"Active"}),s.status==="Discontinued"&&e.jsx("span",{className:"pill mute",children:"Discontinued"}),a&&e.jsx("span",{className:"pill warn",children:"Low"}),c&&e.jsx("span",{className:"pill danger",children:"OOS"}),(k=s.tags)==null?void 0:k.map(P=>e.jsx("span",{className:"chip",children:P},P))]})}),e.jsx("td",{children:e.jsxs("div",{className:"rowActions",children:[e.jsx(A,{to:`/products/${s.id}`,className:"btnLink",children:"View"}),e.jsx("button",{className:"btnLink",onClick:()=>b(!0),title:"Disabled in demo",children:"Edit"})]})})]},s.id)}),y.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:13,children:e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"title",children:"No products found"}),e.jsx("div",{className:"sub",children:"Try another search or clear filters."})]})})})]})]}),e.jsxs("div",{className:"footerBar",children:[e.jsx("div",{className:"left",children:e.jsxs("span",{children:["Rows: ",y.length]})}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",onClick:()=>b(!0),title:"Disabled in demo",children:"‹ Prev"}),e.jsx("span",{className:"page",children:"Page 1 of 120"}),e.jsx("button",{className:"btnGhost",onClick:()=>b(!0),title:"Disabled in demo",children:"Next ›"})]})]})]}),e.jsxs(m.PrintCard,{className:"card",id:"search-print-area",ref:D,children:[e.jsx("h3",{children:"Products Snapshot"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Generated"}),e.jsx("div",{className:"v",children:N(w,!0)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Products Shown"}),e.jsx("div",{className:"v",children:y.length})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Brands (total)"}),e.jsx("div",{className:"v",children:"112"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Categories (total)"}),e.jsx("div",{className:"v",children:"58"})]})]}),e.jsx("div",{className:"note",children:"This is a demo printout. Values shown for brand/category totals are representative."})]}),e.jsx(H,{open:O,onClose:()=>b(!1)})]})};export{I as default};
