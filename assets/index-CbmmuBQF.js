import{d as x,r as i,j as e,N as C}from"./index-CvWKwy17.js";const l="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",d="var(--card, #111318)",o="var(--border, #23262d)",n="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",G="var(--radius, 16px)",h={Page:x.div`
        padding: 24px 0 64px;
        color: ${l};
        max-width: 1200px;
        margin: 0 auto;
    `,Header:x.header`
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
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${c};
            }
            .current {
                color: ${l};
            }
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
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${d};
            color: ${l};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.05s;
        }
        .btnPrimary:hover,
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        [aria-disabled="true"] {
            opacity: 0.65;
            cursor: not-allowed;
        }
        a.btnGhost {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
        }
    `,KpiRow:x.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 16px;
        @media (min-width: 900px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 14px;
        }
        .k {
            color: ${c};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .v {
            font-size: 20px;
            font-weight: 700;
        }
    `,Toolbar:x.section`
        padding: 14px 16px;
        margin-bottom: 16px;
        display: grid;
        gap: 12px;
        .search input {
            width: 100%;
            height: 40px;
            border: 1px solid ${o};
            border-radius: 10px;
            background: ${d};
            color: ${l};
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${c};
        }
        .search input:focus {
            border-color: ${n};
            outline: none;
            box-shadow: 0 0 0 3px ${f};
        }

        .filters {
            display: grid;
            gap: 10px;
        }
        .letters {
            display: grid;
            grid-template-columns: repeat(13, minmax(0, 1fr));
            gap: 6px;
        }
        .letters button {
            height: 32px;
            border: 1px solid ${o};
            background: ${d};
            color: ${l};
            border-radius: 8px;
            font-weight: 600;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .letters button:hover {
            border-color: ${n};
            color: ${n};
        }
        .letters button.on {
            border-color: ${n};
            box-shadow: 0 0 0 3px ${f};
            color: ${n};
        }

        .tags {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }
        .tags .label {
            color: ${c};
            font-size: 12px;
        }
        .chip {
            border: 1px solid ${o};
            padding: 6px 10px;
            border-radius: 999px;
            background: ${d};
            color: ${l};
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .chip.on,
        .chip:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${f};
        }
    `,Grid:x.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        margin-bottom: 16px;
        @media (min-width: 720px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 1080px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        .brandCard {
            display: grid;
            grid-template-rows: auto auto 1fr auto;
            gap: 10px;
            padding: 14px;
        }
        .logo {
            width: 56px;
            height: 56px;
            border: 1px solid ${o};
            border-radius: 14px;
            background: ${d};
            background-size: cover;
            background-position: center;
            display: grid;
            place-items: center;
            overflow: hidden;
        }
        .fallback {
            font-weight: 700;
            font-size: 20px;
            color: ${l};
            opacity: 0.9;
        }
        .info h3 {
            font-size: 16px;
        }
        .info .muted {
            color: ${c};
            font-size: 12px;
            margin-top: 2px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 6px;
        }
        .chip {
            border: 1px solid ${o};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            color: ${l};
            background: color-mix(in oklab, ${n} 8%, transparent);
        }

        .stats {
            display: grid;
            gap: 8px;
        }
        .stats .k {
            color: ${c};
            font-size: 12px;
        }
        .stats .v {
            font-weight: 700;
        }
        .skuRow .skuList {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .skuRow .sku {
            border: 1px dashed ${o};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
        }

        .links {
            display: flex;
            gap: 8px;
            margin-top: 4px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }
        .btnGhost {
            border-radius: 8px;
            border: 1px solid ${o};
            background: ${d};
            color: ${l};
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${f};
        }
        a.btnGhost {
            text-decoration: none;
        }
    `,TableWrap:x.section`
        padding: 12px 12px 0;
        .tableHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4px 4px 10px;
        }
        .tableHeader .muted {
            color: ${c};
            font-size: 12px;
        }

        .tableScroll {
            overflow: auto;
            border: 1px solid ${o};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${d};
            border-bottom: 1px solid ${o};
            text-align: left;
            padding: 10px;
            color: ${n};
            font-weight: 600;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${o};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .num {
            text-align: right;
        }

        .brandCell {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .brandCell .avatar {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: ${d};
            background-size: cover;
            background-position: center;
            border: 1px solid ${o};
            display: grid;
            place-items: center;
            overflow: hidden;
        }
        .brandCell .fallback {
            font-weight: 700;
        }
        .brandCell .name {
            font-weight: 600;
        }
        .brandCell .id {
            color: ${c};
            font-size: 12px;
        }
        .tagsMini {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .tagsMini .mini {
            border: 1px solid ${o};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            background: ${d};
        }
        .link {
            color: ${l};
            text-decoration: none;
        }
        .link:hover {
            color: ${n};
            text-decoration: underline;
        }
    `,Overlay:x.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:x.div`
        width: min(520px, 92vw);
        border-radius: ${G};
        border: 1px solid ${o};
        background: ${d};
        color: ${l};
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
        }
        footer {
            padding: 12px 16px;
            display: flex;
            justify-content: flex-end;
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${d};
            color: ${l};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${f};
        }
    `},u=t=>String(t).padStart(2,"0"),F=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],j=t=>{const r=t instanceof Date?t:new Date(t);return`${F[r.getDay()]} ${V[r.getMonth()]} ${u(r.getDate())} ${r.getFullYear()}`},H=t=>{const r=t instanceof Date?t:new Date(t);return`${j(r)} ${u(r.getHours())}:${u(r.getMinutes())}:${u(r.getSeconds())}hrs`},U=t=>{const r=t instanceof Date?t:new Date(t);return`${u(r.getHours())}:${u(r.getMinutes())}:${u(r.getSeconds())}hrs`},p=[{id:"BR-APX",name:"Apex Remedies",country:"India",since:"2008-07-02",website:"https://apex.example.com",productsCount:148,topSkus:["AMOX-500","AZI-250","CEF-200"],tags:["antibiotics","essential","wholesale"],logo:"/logos/apex.svg"},{id:"BR-NXT",name:"NextGen Labs",country:"India",since:"2015-01-15",website:"https://nextgen.example.com",productsCount:96,topSkus:["PCM-650","DICLO-50","IBU-400"],tags:["analgesic","popular"],logo:"/logos/nextgen.svg"},{id:"BR-BWV",name:"Bluewave Pharma",country:"India",since:"2012-05-10",website:"https://bluewave.example.com",productsCount:204,topSkus:["LEV-500","CIP-500","OFLO-200"],tags:["antibiotics","export"],logo:"/logos/bluewave.svg"},{id:"BR-ORC",name:"Orchid Biotech",country:"India",since:"2010-11-25",website:"https://orchid.example.com",productsCount:72,topSkus:["B12-1500","FER-100","FOL-5"],tags:["supplements"],logo:"/logos/orchid.svg"},{id:"BR-ALP",name:"Alpha Care",country:"India",since:"2009-02-09",website:"https://alpha.example.com",productsCount:131,topSkus:["LOR-2","CET-10","MON-10"],tags:["respiratory","otc"],logo:"/logos/alpha.svg"},{id:"BR-SKY",name:"Skylark Therapeutics",country:"India",since:"2017-08-01",website:"https://skylark.example.com",productsCount:58,topSkus:["RAB-20","PAN-40"],tags:["gastro"],logo:"/logos/skylark.svg"},{id:"BR-RIV",name:"Riviera Med",country:"India",since:"2014-04-19",website:"https://riviera.example.com",productsCount:83,topSkus:["CAL-500","VITD3-60K"],tags:["supplements","bones"],logo:"/logos/riviera.svg"},{id:"BR-ATN",name:"Aeternum Healthcare",country:"India",since:"2013-09-03",website:"https://aeternum.example.com",productsCount:117,topSkus:["MET-500","GLI-2","SITA-50"],tags:["diabetes","chronic"],logo:"/logos/aeternum.svg"},{id:"BR-TRN",name:"Trinity Formulations",country:"India",since:"2011-03-12",website:"https://trinity.example.com",productsCount:91,topSkus:["ATV-10","ROSU-20"],tags:["cardiac"],logo:"/logos/trinity.svg"},{id:"BR-VAL",name:"Valence Pharma",country:"India",since:"2018-06-28",website:"https://valence.example.com",productsCount:49,topSkus:["LEVOCET-5","FEXO-180"],tags:["allergy"],logo:"/logos/valence.svg"}],L=!0,W=({open:t,title:r,message:m,onClose:v})=>t?e.jsx(h.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:v,children:e.jsxs(h.Modal,{className:"card",onMouseDown:g=>g.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:r})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:m})}),e.jsx("footer",{children:e.jsx("button",{onClick:v,className:"btnPrimary",children:"Close"})})]})}):null,J=()=>{const[t,r]=i.useState(""),[m,v]=i.useState("ALL"),[g,A]=i.useState("ALL"),[R,$]=i.useState(!1),D=i.useRef(null),k=i.useMemo(()=>new Date,[]),T=p.length,I=i.useMemo(()=>p.reduce((s,a)=>s+(a.productsCount||0),0),[]),M=i.useMemo(()=>{const s=new Set;return p.forEach(a=>(a.tags||[]).forEach(b=>s.add(b))),["ALL",...Array.from(s)]},[]),N=s=>{s.preventDefault(),$(!0)},S=i.useMemo(()=>{const s=t.trim().toLowerCase();return p.filter(a=>{const b=!s||a.name.toLowerCase().includes(s)||a.country.toLowerCase().includes(s)||(a.topSkus||[]).some(y=>y.toLowerCase().includes(s))||(a.tags||[]).some(y=>y.toLowerCase().includes(s)),z=m==="ALL"?!0:a.name.toUpperCase().startsWith(m),E=g==="ALL"?!0:(a.tags||[]).includes(g);return b&&z&&E})},[t,m,g]),B=i.useMemo(()=>p.slice(0,6),[]),P=i.useMemo(()=>{const s=JSON.stringify(p,null,2);return`data:application/json;charset=utf-8,${encodeURIComponent(s)}`},[]),O=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},w=i.useRef(null);return i.useEffect(()=>{const s=requestAnimationFrame(()=>{var a,b;try{(a=w.current)==null||a.focus({preventScroll:!0})}catch{(b=w.current)==null||b.focus()}});return()=>cancelAnimationFrame(s)},[]),e.jsxs(h.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs(h.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Brands"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(C,{to:"/products",children:"Products"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Brands"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Updated: ",H(k)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Server Time: ",U(k)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnPrimary","aria-disabled":L,onClick:N,title:"Create a brand",children:"New Brand"}),e.jsx("button",{className:"btnGhost","aria-disabled":L,onClick:N,title:"Import CSV",children:"Import CSV"}),e.jsx("a",{className:"btnGhost",href:P,download:"brands.json",title:"Export JSON",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:O,title:"Print list",children:"Print"})]})]}),e.jsxs(h.KpiRow,{children:[e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Total Brands"}),e.jsx("div",{className:"v",children:T})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Products (All)"}),e.jsx("div",{className:"v",children:I})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Oldest Since"}),e.jsx("div",{className:"v",children:j(p.map(s=>new Date(s.since)).sort((s,a)=>s-a)[0])})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Newest Since"}),e.jsx("div",{className:"v",children:j(p.map(s=>new Date(s.since)).sort((s,a)=>a-s)[0])})]})]}),e.jsxs(h.Toolbar,{className:"card",children:[e.jsx("div",{className:"search",children:e.jsx("input",{ref:w,value:t,onChange:s=>r(s.target.value),placeholder:"Search brand, country, SKU or tag","aria-label":"Search brands"})}),e.jsxs("div",{className:"filters",children:[e.jsx("div",{className:"letters",role:"tablist","aria-label":"Alphabet filter",children:["ALL","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map(s=>e.jsx("button",{role:"tab","aria-selected":m===s,className:m===s?"on":"",onClick:()=>v(s),title:s==="ALL"?"Show all brands":`Starts with ${s}`,children:s},s))}),e.jsxs("div",{className:"tags",children:[e.jsx("span",{className:"label",children:"Tag:"}),M.map(s=>e.jsx("button",{className:`chip ${s===g?"on":""}`,onClick:()=>A(s),title:s==="ALL"?"All tags":`Filter: ${s}`,children:s},s))]})]})]}),e.jsx(h.Grid,{children:B.map(s=>e.jsxs("div",{className:"brandCard card",children:[e.jsx("div",{className:"logo",style:{backgroundImage:`url(${s.logo||""})`},children:!s.logo&&e.jsx("span",{className:"fallback",children:s.name.slice(0,1)})}),e.jsxs("div",{className:"info",children:[e.jsx("h3",{children:s.name}),e.jsxs("div",{className:"muted",children:[s.country," • Since ",j(s.since)]}),e.jsx("div",{className:"chips",children:(s.tags||[]).map(a=>e.jsx("span",{className:"chip",children:a},a))})]}),e.jsxs("div",{className:"stats",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Products"}),e.jsx("span",{className:"v",children:s.productsCount})]}),e.jsxs("div",{className:"skuRow",children:[e.jsx("span",{className:"k",children:"Top SKUs"}),e.jsx("div",{className:"skuList",children:(s.topSkus||[]).slice(0,3).map(a=>e.jsx("span",{className:"sku",children:a},a))})]})]}),e.jsxs("div",{className:"links",children:[e.jsx("a",{href:s.website,target:"_blank",rel:"noreferrer",className:"btnGhost small",children:"Website"}),e.jsx(C,{to:"/products",className:"btnGhost small",title:"Open catalog",children:"Open Catalog"})]})]},s.id))}),e.jsxs(h.TableWrap,{className:"card",id:"search-print-area",ref:D,children:[e.jsxs("div",{className:"tableHeader",children:[e.jsx("h3",{children:"All Brands"}),e.jsxs("div",{className:"muted",children:[S.length," of ",p.length," shown"]})]}),e.jsx("div",{className:"tableScroll",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Brand"}),e.jsx("th",{children:"Country"}),e.jsx("th",{children:"Since"}),e.jsx("th",{children:"Products"}),e.jsx("th",{children:"Tags"}),e.jsx("th",{children:"Website"})]})}),e.jsx("tbody",{children:S.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"brandCell",children:[e.jsx("div",{className:"avatar",style:{backgroundImage:`url(${s.logo||""})`},children:!s.logo&&e.jsx("span",{className:"fallback",children:s.name.slice(0,1)})}),e.jsxs("div",{className:"text",children:[e.jsx("div",{className:"name",children:s.name}),e.jsx("div",{className:"id",children:s.id})]})]})}),e.jsx("td",{children:s.country}),e.jsx("td",{children:j(s.since)}),e.jsx("td",{className:"num",children:s.productsCount}),e.jsx("td",{children:e.jsx("div",{className:"tagsMini",children:(s.tags||[]).map(a=>e.jsx("span",{className:"chip mini",children:a},a))})}),e.jsx("td",{children:e.jsx("a",{href:s.website,target:"_blank",rel:"noreferrer",className:"link",children:new URL(s.website).host})})]},s.id))})]})})]}),e.jsx(W,{open:R,title:"Demo mode",message:"This is a display-only preview. Create/Import are disabled.",onClose:()=>$(!1)})]})};export{J as default};
