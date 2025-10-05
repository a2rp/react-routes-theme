import{d as j,u as J,r as u,j as t,N as U}from"./index-B_b4CsLB.js";const x="var(--text, #f3f4f6)",v="var(--muted, #a0a0a7)",f="var(--card, #111318)",c="var(--border, #23262d)",n="var(--accent, #5aa9ff)",A="var(--accent-soft, rgba(90,169,255,0.15))",q="var(--radius, 16px)",y={Page:j.div`
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
    `,Header:j.header`
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
            flex-wrap: wrap;
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
            border: 1px solid ${c};
            background: ${f};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${A};
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDisabled:active {
            transform: translateY(1px);
        }
    `,Stats:j.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        margin-bottom: 16px;
        @media (min-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }

        .stat {
            padding: 16px;
            border-radius: 12px;
        }
        .k {
            color: ${v};
            font-size: 12px;
        }
        .v {
            font-size: 28px;
            font-weight: 700;
            margin-top: 4px;
        }
        .s {
            color: ${v};
            margin-top: 4px;
        }
    `,Toolbar:j.div`
        padding: 12px;
        margin-bottom: 16px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            align-items: center;
        }
        @media (min-width: 980px) {
            .row {
                grid-template-columns: 1fr auto;
            }
        }

        .search input {
            width: 100%;
            height: 38px;
            border-radius: 8px;
            border: 1px solid ${c};
            background: ${f};
            color: ${x};
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            border-color: ${n};
            box-shadow: 0 0 0 3px ${A};
        }

        .filters {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .filters select {
            height: 38px;
            border-radius: 8px;
            border: 1px solid ${c};
            background: ${f};
            color: ${x};
            padding: 0 10px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .filters select:focus {
            border-color: ${n};
            box-shadow: 0 0 0 3px ${A};
        }

        .density .small {
            padding: 6px 10px;
        }
    `,Grid:j.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .tableWrap {
            overflow: hidden;
        }

        table.table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${f};
            border-bottom: 1px solid ${c};
            text-align: left;
            padding: 10px;
            z-index: 1;
        }
        tbody td {
            border-bottom: 1px solid ${c};
            padding: 10px;
            vertical-align: top;
        }
        .table.compact td,
        .table.compact th {
            padding: 6px 8px;
        }

        .num {
            text-align: right;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .chip {
            border: 1px solid ${c};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${n} 8%, transparent);
        }

        .badge {
            border: 1px solid ${c};
            border-radius: 999px;
            padding: 2px 8px;
            text-transform: capitalize;
            background: color-mix(in oklab, ${n} 10%, transparent);
        }
        .badge.inactive {
            opacity: 0.7;
        }
        .badge.prospect {
            background: color-mix(in oklab, ${n} 6%, transparent);
        }

        .titleCell .id {
            font-size: 12px;
            color: ${v};
        }

        .empty {
            text-align: center;
            padding: 28px 0;
            color: ${v};
        }
        .empty .icon {
            font-size: 22px;
            margin-bottom: 6px;
        }

        .actions {
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
            border-radius: 8px;
            border: 1px solid ${c};
            background: ${f};
            color: ${x};
        }
        .small.btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }
        .small.btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        /* sidebar */
        .side {
            display: grid;
            gap: 16px;
        }
        .summary {
            display: grid;
            gap: 8px;
        }
        .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .k {
            color: ${v};
        }
        .mini {
            margin-top: 8px;
            font-size: 12px;
        }
        .tips ul {
            margin: 0;
            padding-left: 18px;
        }
        .tips li {
            margin: 6px 0;
            color: ${x};
        }
    `,Overlay:j.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:j.div`
        width: min(520px, 92vw);
        border-radius: ${q};
        border: 1px solid ${c};
        background: ${f};
        color: ${x};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${c};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
        }
        footer {
            padding: 12px 16px;
            border-top: 1px solid ${c};
            display: flex;
            justify-content: flex-end;
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${c};
            background: ${f};
            color: ${x};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${A};
        }
    `},B=l=>{const i=l instanceof Date?l:new Date(l),p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=C=>String(C).padStart(2,"0");return`${p[i.getDay()]} ${m[i.getMonth()]} ${b(i.getDate())} ${i.getFullYear()}`},P=l=>{const i=l instanceof Date?l:new Date(l),p=m=>String(m).padStart(2,"0");return`${B(i)} ${p(i.getHours())}:${p(i.getMinutes())}:${p(i.getSeconds())}hrs`},h=[{id:"MFG-ACME",name:"ACME Pharmaceuticals",country:"United States",city:"New Brunswick, NJ",brands:12,products:146,tags:["oncology","critical-care"],status:"active",gstin:"",established:"1984-04-18",updatedAt:"2025-09-30T14:22:10+05:30",rating:4.6},{id:"MFG-SUNRX",name:"Sunray Labs",country:"India",city:"Ahmedabad, GJ",brands:9,products:212,tags:["generics","oral-solids"],status:"active",gstin:"24SUNRX0099A1Z5",established:"1998-03-09",updatedAt:"2025-10-02T11:08:44+05:30",rating:4.3},{id:"MFG-NEPTUNE",name:"Neptune Biocare",country:"Germany",city:"Leverkusen",brands:7,products:88,tags:["biologics"],status:"active",gstin:"",established:"2006-07-21",updatedAt:"2025-09-15T09:46:33+05:30",rating:4.1},{id:"MFG-AZURE",name:"Azure Therapeutics",country:"United Kingdom",city:"Cambridge",brands:4,products:55,tags:["respiratory"],status:"active",gstin:"",established:"2012-10-05",updatedAt:"2025-09-24T18:01:02+05:30",rating:4},{id:"MFG-LOTUS",name:"Lotus Remedies",country:"India",city:"Hyderabad, TS",brands:5,products:102,tags:["injectables","cephalosporins"],status:"active",gstin:"36LOTUS8822Z1B2",established:"2003-01-14",updatedAt:"2025-10-03T16:42:17+05:30",rating:4.2},{id:"MFG-NIPPON",name:"Nippon Chem Labs",country:"Japan",city:"Osaka",brands:6,products:63,tags:["cardio"],status:"active",gstin:"",established:"1994-05-11",updatedAt:"2025-09-27T10:15:55+05:30",rating:3.9},{id:"MFG-ALPINE",name:"Alpine Pharma",country:"Switzerland",city:"Basel",brands:3,products:41,tags:["rare-diseases"],status:"prospect",gstin:"",established:"2019-06-30",updatedAt:"2025-09-10T12:05:02+05:30",rating:3.8},{id:"MFG-VEDA",name:"Veda Herbals",country:"India",city:"Bengaluru, KA",brands:8,products:75,tags:["ayurveda","otc"],status:"active",gstin:"29VEDA6611D8Z9",established:"2007-02-22",updatedAt:"2025-10-01T19:22:50+05:30",rating:4.4},{id:"MFG-CASCADE",name:"Cascade Life Sciences",country:"Canada",city:"Montreal",brands:2,products:18,tags:["derma"],status:"inactive",gstin:"",established:"2001-09-12",updatedAt:"2025-08-29T08:14:20+05:30",rating:3.1},{id:"MFG-MEZZA",name:"Mezza Formulations",country:"Italy",city:"Milan",brands:4,products:47,tags:["orphan-drugs"],status:"active",gstin:"",established:"2010-11-04",updatedAt:"2025-09-20T17:40:33+05:30",rating:4},{id:"MFG-ORION",name:"Orion Labs",country:"Finland",city:"Espoo",brands:3,products:36,tags:["neurology"],status:"active",gstin:"",established:"1999-04-04",updatedAt:"2025-09-12T13:58:02+05:30",rating:3.7},{id:"MFG-SANTOS",name:"Santos Biotech",country:"Brazil",city:"São Paulo",brands:5,products:69,tags:["antibiotics"],status:"active",gstin:"",established:"2008-07-19",updatedAt:"2025-09-08T15:21:11+05:30",rating:3.9}],T="Demo only: creating or editing manufacturers is disabled.",W=({open:l,title:i,message:p,onClose:m})=>l?t.jsx(y.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:m,children:t.jsxs(y.Modal,{className:"card",onMouseDown:b=>b.stopPropagation(),children:[t.jsx("header",{children:t.jsx("h4",{children:i})}),t.jsx("div",{className:"body",children:t.jsx("p",{children:p})}),t.jsx("footer",{children:t.jsx("button",{className:"btnPrimary",onClick:m,children:"Close"})})]})}):null,X=()=>{const l=J(),i=u.useRef(null),[p,m]=u.useState(""),[b,C]=u.useState("all"),[w,z]=u.useState("all"),[k,O]=u.useState("updatedAt-desc"),[M,G]=u.useState("comfortable"),[R,D]=u.useState(!1),E=u.useMemo(()=>{const e=new Set(h.map(s=>s.country));return["all",...Array.from(e)]},[]),S=u.useMemo(()=>{const e=p.trim().toLowerCase().split(/\s+/).filter(Boolean);let s=h.filter(o=>{if(b!=="all"&&o.country!==b||w!=="all"&&o.status!==w)return!1;if(!e.length)return!0;const r=(o.name+" "+o.city+" "+o.country+" "+o.tags.join(" ")).toLowerCase();return e.every(N=>r.includes(N))});const[a,d]=k.split("-");return s.sort((o,r)=>{const N=$=>a==="name"?$.name.toLowerCase():a==="products"?$.products:a==="brands"?$.brands:a==="rating"?$.rating:a==="updatedAt"?new Date($.updatedAt).getTime():0,F=N(o),L=N(r);return F<L?d==="asc"?-1:1:F>L?d==="asc"?1:-1:0}),s},[p,b,w,k]),g=u.useMemo(()=>{const e=new Set(h.map(a=>a.country)).size,s=h.filter(a=>a.status==="active").length;return{total:h.length,uniqueCountries:e,active:s,products:h.reduce((a,d)=>a+d.products,0),brands:h.reduce((a,d)=>a+d.brands,0),lastUpdated:P(h.reduce((a,d)=>new Date(d.updatedAt)>new Date(a.updatedAt)?d:a,h[0]).updatedAt)}},[]),I=()=>{const e=["ID","Name","Country","City","Brands","Products","Status","Tags","Established","UpdatedAt","Rating"].join(","),s=S.map(r=>[r.id,r.name,r.country,r.city,r.brands,r.products,r.status,r.tags.join("|"),r.established,r.updatedAt,r.rating].map(N=>`"${String(N).replaceAll('"','""')}"`).join(",")),a=new Blob([e+`
`+s.join(`
`)],{type:"text/csv;charset=utf-8"}),d=URL.createObjectURL(a),o=document.createElement("a");o.href=d,o.download="manufacturers.csv",o.click(),URL.revokeObjectURL(d)},V=()=>{i.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},Z=e=>{const s=Math.floor(e),a=e-s>=.5;return"★".repeat(s)+(a?"½":"")};u.useEffect(()=>{const e=document.getElementById("mfg-search");if(!e)return;const s=requestAnimationFrame(()=>{try{e.focus({preventScroll:!0})}catch{e.focus()}});return()=>cancelAnimationFrame(s)},[]);const H=t.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[t.jsx(U,{to:"/medicines",children:"Medicines"}),t.jsx("span",{children:"/"}),t.jsx("span",{className:"current",children:"Manufacturers"})]});return t.jsxs(y.Page,{className:"container",children:[t.jsx("style",{children:`
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
      `}),t.jsxs(y.Header,{className:"card",children:[t.jsxs("div",{className:"left",children:[t.jsx("h1",{children:"Manufacturers"}),H,t.jsxs("div",{className:"meta",children:[t.jsxs("span",{children:["Total: ",g.total]}),t.jsx("span",{children:"•"}),t.jsxs("span",{children:["Active: ",g.active]}),t.jsx("span",{children:"•"}),t.jsxs("span",{children:["Countries: ",g.uniqueCountries]}),t.jsx("span",{children:"•"}),t.jsxs("span",{children:["Last update: ",g.lastUpdated]})]})]}),t.jsxs("div",{className:"right actions",children:[t.jsx("button",{className:"btnGhost",title:"Open catalog",onClick:()=>l("/medicines"),children:"Catalog"}),t.jsx("button",{className:"btnPrimary",title:"Export CSV",onClick:I,children:"Export"}),t.jsx("button",{className:"btnGhost",title:"Print summary",onClick:V,children:"Print"}),t.jsx("button",{className:"btnDisabled",title:T,onClick:()=>D(!0),children:"New Manufacturer"})]})]}),t.jsxs(y.Stats,{children:[t.jsxs("div",{className:"card stat",children:[t.jsx("div",{className:"k",children:"Total Products"}),t.jsx("div",{className:"v",children:g.products}),t.jsx("div",{className:"s",children:"across all manufacturers"})]}),t.jsxs("div",{className:"card stat",children:[t.jsx("div",{className:"k",children:"Total Brands"}),t.jsx("div",{className:"v",children:g.brands}),t.jsx("div",{className:"s",children:"active portfolios"})]}),t.jsxs("div",{className:"card stat",children:[t.jsx("div",{className:"k",children:"Active Manufacturers"}),t.jsx("div",{className:"v",children:g.active}),t.jsx("div",{className:"s",children:"ready to supply"})]})]}),t.jsx(y.Toolbar,{className:"card",children:t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"search",children:t.jsx("input",{id:"mfg-search",type:"text",placeholder:"Search name, city, tag…",value:p,onChange:e=>m(e.target.value),"aria-label":"Search manufacturers"})}),t.jsxs("div",{className:"filters",children:[t.jsx("select",{value:b,onChange:e=>C(e.target.value),"aria-label":"Filter by country",children:E.map(e=>t.jsx("option",{value:e,children:e==="all"?"All Countries":e},e))}),t.jsxs("select",{value:w,onChange:e=>z(e.target.value),"aria-label":"Filter by status",children:[t.jsx("option",{value:"all",children:"All Status"}),t.jsx("option",{value:"active",children:"Active"}),t.jsx("option",{value:"prospect",children:"Prospect"}),t.jsx("option",{value:"inactive",children:"Inactive"})]}),t.jsxs("select",{value:k,onChange:e=>O(e.target.value),"aria-label":"Sort by",children:[t.jsx("option",{value:"updatedAt-desc",children:"Updated (newest)"}),t.jsx("option",{value:"updatedAt-asc",children:"Updated (oldest)"}),t.jsx("option",{value:"name-asc",children:"Name (A–Z)"}),t.jsx("option",{value:"name-desc",children:"Name (Z–A)"}),t.jsx("option",{value:"products-desc",children:"Products (high→low)"}),t.jsx("option",{value:"products-asc",children:"Products (low→high)"}),t.jsx("option",{value:"brands-desc",children:"Brands (high→low)"}),t.jsx("option",{value:"brands-asc",children:"Brands (low→high)"}),t.jsx("option",{value:"rating-desc",children:"Rating (high→low)"}),t.jsx("option",{value:"rating-asc",children:"Rating (low→high)"})]}),t.jsxs("div",{className:"density",children:[t.jsx("button",{className:M==="comfortable"?"btnPrimary small":"btnGhost small",onClick:()=>G("comfortable"),title:"Comfortable density",children:"Comfort"}),t.jsx("button",{className:M==="compact"?"btnPrimary small":"btnGhost small",onClick:()=>G("compact"),title:"Compact density",children:"Compact"})]})]})]})}),t.jsxs(y.Grid,{children:[t.jsx("section",{className:"card tableWrap",children:t.jsxs("table",{className:`table ${M}`,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Country / City"}),t.jsx("th",{children:"Brands"}),t.jsx("th",{children:"Products"}),t.jsx("th",{children:"Tags"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Updated"}),t.jsx("th",{children:"Rating"}),t.jsx("th",{children:"Actions"})]})}),t.jsxs("tbody",{children:[S.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"titleCell",children:[t.jsx("strong",{children:e.name}),t.jsx("div",{className:"muted id",children:e.id})]})}),t.jsxs("td",{children:[t.jsx("div",{children:e.country}),t.jsx("div",{className:"muted",children:e.city})]}),t.jsx("td",{className:"num",children:e.brands}),t.jsx("td",{className:"num",children:e.products}),t.jsx("td",{children:t.jsx("div",{className:"chips",children:e.tags.map(s=>t.jsx("span",{className:"chip",children:s},s))})}),t.jsx("td",{children:t.jsx("span",{className:`badge ${e.status}`,children:e.status})}),t.jsxs("td",{children:[t.jsx("div",{children:B(e.updatedAt)}),t.jsx("div",{className:"muted",children:P(e.updatedAt)})]}),t.jsx("td",{children:Z(e.rating)}),t.jsxs("td",{className:"actions",children:[t.jsx(U,{to:"/medicines",className:"btnGhost small",title:"Open catalog filtered",children:"View"}),t.jsx("button",{className:"btnDisabled small",title:T,onClick:()=>D(!0),children:"Edit"})]})]},e.id)),S.length===0&&t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsxs("div",{className:"empty",children:[t.jsx("div",{className:"icon",children:"∅"}),t.jsx("div",{children:"No manufacturers match your filters."})]})})})]})]})}),t.jsxs("aside",{className:"side",children:[t.jsxs("div",{className:"card",id:"search-print-area",ref:i,children:[t.jsx("h3",{children:"Print Summary"}),t.jsxs("div",{className:"summary",children:[t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"k",children:"Manufacturers"}),t.jsxs("span",{className:"v",children:[S.length," / ",h.length]})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"k",children:"Countries"}),t.jsx("span",{className:"v",children:E.length-1})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"k",children:"Exported"}),t.jsx("span",{className:"v",children:"CSV available"})]}),t.jsxs("div",{className:"line",children:[t.jsx("span",{className:"k",children:"Generated"}),t.jsx("span",{className:"v",children:P(new Date)})]})]}),t.jsx("div",{className:"mini muted",children:"Use the “Print” button to print only this section."})]}),t.jsxs("div",{className:"card tips",children:[t.jsx("h3",{children:"Hints"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Use filters to explore the catalog by country and status."}),t.jsx("li",{children:"Open the full medicine catalog from the top-right actions."}),t.jsx("li",{children:"Export the current view to CSV for a quick share."}),t.jsx("li",{children:"Detail editing is disabled in this demo."})]})]})]})]}),t.jsx(W,{open:R,title:"Action unavailable",message:T,onClose:()=>D(!1)})]})};export{X as default};
