import{d as v,r as l,j as e,N as y}from"./index-P_7RwasD.js";const c="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",x="var(--card, #111318)",n="var(--border, #23262d)",d="var(--accent, #5aa9ff)",z="var(--accent-soft, rgba(90,169,255,0.15))",B="var(--radius, 16px)",N={Page:v.div`
        padding: 24px 0 64px;
        color: ${c};
    `,Header:v.header`
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
        }
        .breadcrumbs a {
            color: ${p};
        }
        .breadcrumbs .current {
            color: ${c};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${p};
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
            background: ${x};
            color: ${c};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${z};
        }
        .btnGhost:hover {
            border-color: ${d};
            color: ${d};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Banner:v.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${n};
        border-radius: 10px;
        background: color-mix(in oklab, ${d} 10%, transparent);
        color: ${c};
    `,Layout:v.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .main {
            display: grid;
            gap: 16px;
        }
        .side {
            display: grid;
            gap: 16px;
        }

        .toolbar.card {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 860px) {
                grid-template-columns: 1fr auto;
                align-items: center;
            }
            padding: 12px 14px;
        }
        .search input {
            width: 100%;
            height: 38px;
            border: 1px solid ${n};
            background: ${x};
            color: ${c};
            border-radius: 8px;
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            outline: none;
            border-color: ${d};
            box-shadow: 0 0 0 3px ${z};
        }
        .filters {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .filters label {
            color: ${p};
            font-size: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .filters select {
            height: 34px;
            border: 1px solid ${n};
            background: ${x};
            color: ${c};
            border-radius: 8px;
            padding: 0 10px;
        }

        .statsRow {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, 1fr);
            @media (min-width: 680px) {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        .stat {
            padding: 14px;
        }
        .stat .k {
            color: ${p};
            font-size: 12px;
        }
        .stat .v {
            font-size: 20px;
            font-weight: 700;
            margin-top: 4px;
        }

        .tableWrap {
            padding: 0;
            overflow: auto;
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${x};
            color: ${d};
            border-bottom: 1px solid ${n};
            text-align: left;
            padding: 12px;
        }
        tbody td {
            border-bottom: 1px solid ${n};
            padding: 12px;
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${d} 7%, transparent);
        }

        .nameCell {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .nameCell .name {
            font-weight: 700;
        }
        .nameCell .id {
            color: ${p};
            font-size: 12px;
        }

        .code {
            background: color-mix(in oklab, ${d} 8%, transparent);
            padding: 2px 6px;
            border-radius: 6px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${n};
            background: ${x};
            color: ${c};
            font-size: 12px;
        }
        .chip.type {
            text-transform: capitalize;
        }
        .chip.opt {
            opacity: 0.95;
        }
        .chip.group {
            opacity: 0.9;
        }

        .optionsCell {
            white-space: nowrap;
        }
        .optionsCell .more {
            margin-left: 6px;
            color: ${p};
        }

        .num {
            text-align: right;
        }

        .actions {
            white-space: nowrap;
        }
        .actions .small {
            padding: 6px 10px;
        }

        .empty {
            text-align: center;
            padding: 28px 12px;
        }
        .emptyBlock .big {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .muted {
            color: ${p};
        }
        .small {
            font-size: 12px;
        }

        .pager {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
        }
        .pager .hint {
            color: ${p};
            font-size: 12px;
        }
        .pager .buttons {
            display: flex;
            gap: 8px;
        }
        .pager button {
            height: 32px;
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${p};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${n};
            background: ${x};
        }
        .links a:hover {
            color: ${d};
            border-color: ${d};
        }

        .tree {
            list-style: none;
            padding-left: 0;
            margin: 0;
            display: grid;
            gap: 6px;
            color: ${c};
        }
        .tree > li {
            padding: 6px 8px;
            border: 1px solid ${n};
            border-radius: 8px;
            background: ${x};
        }
        .tree ul {
            list-style: disc;
            padding-left: 18px;
            margin-top: 8px;
            color: ${p};
        }

        .printCard .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, 1fr);
        }
        .printCard .grid .full {
            grid-column: 1 / -1;
        }
        .printCard .k {
            color: ${p};
            font-size: 12px;
        }
        .printCard .v {
            font-weight: 700;
        }

        .schema {
            margin-top: 8px;
            border: 1px solid ${n};
            border-radius: 10px;
            padding: 10px;
            background: ${x};
            overflow: auto;
            max-height: 240px;
        }
    `,Overlay:v.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:v.div`
        width: min(520px, 92vw);
        border-radius: ${B};
        border: 1px solid ${n};
        background: ${x};
        color: ${c};
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
            color: ${c};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${n};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${x};
            color: ${c};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${z};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
    `},f=(h,$=!1)=>{const i=h instanceof Date?h:new Date(h),b=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][i.getDay()],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i.getMonth()],g=S=>String(S).padStart(2,"0"),j=`${b} ${u} ${g(i.getDate())} ${i.getFullYear()}`;return $?`${j} ${g(i.getHours())}:${g(i.getMinutes())}:${g(i.getSeconds())}hrs`:j},m=[{id:"attr-color",name:"Color",code:"color",type:"select",multi:!0,options:["Black","White","Blue","Red","Silver","Grey"],usedIn:142,groups:["Catalog","Variants"],required:!1,updated:"2025-10-04T12:28:10+05:30"},{id:"attr-size",name:"Size",code:"size",type:"select",multi:!1,options:["XS","S","M","L","XL","XXL"],usedIn:126,groups:["Catalog","Variants"],required:!0,updated:"2025-10-04T09:40:03+05:30"},{id:"attr-material",name:"Material",code:"material",type:"text",multi:!1,options:[],usedIn:88,groups:["Catalog","Specs"],required:!1,updated:"2025-10-03T17:22:31+05:30"},{id:"attr-weight",name:"Weight",code:"weight",type:"number",unit:"g",min:1,max:1e5,step:1,usedIn:71,groups:["Logistics","Specs"],required:!1,updated:"2025-10-02T19:11:45+05:30"},{id:"attr-brand",name:"Brand",code:"brand",type:"select",multi:!1,options:["Aurelia","NorthPeak","UrbanGo","Mistral","EdgeX"],usedIn:97,groups:["Catalog","Marketing"],required:!1,updated:"2025-10-01T13:05:10+05:30"},{id:"attr-expiry",name:"Expiry Date",code:"expiry",type:"date",usedIn:54,groups:["Compliance","Medicines"],required:!1,updated:"2025-09-28T10:18:55+05:30"},{id:"attr-hsn",name:"HSN",code:"hsn",type:"text",usedIn:39,groups:["Tax","Compliance"],required:!0,updated:"2025-09-26T16:10:21+05:30"},{id:"attr-batch",name:"Batch",code:"batch",type:"text",usedIn:60,groups:["Medicines","Inventory"],required:!0,updated:"2025-09-25T20:02:41+05:30"}],O=({open:h,title:$,message:i,onClose:b})=>h?e.jsx(N.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:b,children:e.jsxs(N.Modal,{className:"card",onMouseDown:u=>u.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:$})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:i})}),e.jsx("footer",{children:e.jsx("button",{onClick:b,className:"btnPrimary",children:"OK"})})]})}):null,X=()=>{const[h,$]=l.useState(""),[i,b]=l.useState("all"),[u,g]=l.useState("all"),[j,S]=l.useState("name-asc"),[w,T]=l.useState(""),[M,A]=l.useState(!1),L=l.useRef(null),G=l.useRef(null);l.useEffect(()=>{const s=requestAnimationFrame(()=>{var t,r;try{(t=L.current)==null||t.focus({preventScroll:!0})}catch{(r=L.current)==null||r.focus()}});return()=>cancelAnimationFrame(s)},[]),l.useEffect(()=>{if(!w)return;const s=setTimeout(()=>T(""),3500);return()=>clearTimeout(s)},[w]);const I=l.useMemo(()=>{const s=new Set;return m.forEach(t=>(t.groups||[]).forEach(r=>s.add(r))),["all",...Array.from(s)]},[]),k=l.useMemo(()=>{const s=h.trim().toLowerCase();let t=m.filter(r=>{const a=!s||r.name.toLowerCase().includes(s)||r.code.toLowerCase().includes(s)||(r.options||[]).some(P=>P.toLowerCase().includes(s))||(r.groups||[]).some(P=>P.toLowerCase().includes(s)),D=i==="all"||r.type===i,R=u==="all"||(r.groups||[]).includes(u);return a&&D&&R});switch(j){case"name-desc":t=t.sort((r,a)=>a.name.localeCompare(r.name));break;case"used-desc":t=t.sort((r,a)=>(a.usedIn||0)-(r.usedIn||0));break;case"updated-desc":t=t.sort((r,a)=>new Date(a.updated)-new Date(r.updated));break;default:t=t.sort((r,a)=>r.name.localeCompare(a.name))}return t},[h,i,u,j]),E=()=>{const s=new Blob([JSON.stringify(k,null,2)],{type:"application/json"}),t=URL.createObjectURL(s),r=document.createElement("a");r.href=t,r.download="attributes.json",document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(t),T(`Exported ${k.length} attributes at ${f(new Date,!0)}`)},U=()=>{var t;const s=window.location.href;(t=navigator.clipboard)==null||t.writeText(s),T("Link copied")},q=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},C=()=>A(!0),o=l.useMemo(()=>{const s=m.length,t={select:m.filter(a=>a.type==="select").length,text:m.filter(a=>a.type==="text").length,number:m.filter(a=>a.type==="number").length,date:m.filter(a=>a.type==="date").length},r=m.map(a=>new Date(a.updated)).sort((a,D)=>D-a)[0];return{all:s,byType:t,lastUpdated:r}},[]);return e.jsxs(N.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(N.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Attributes"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(y,{to:"/products",children:"Products"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Attributes"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",o.all]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",f(o.lastUpdated,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:U,title:"Copy page link",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:E,title:"Export as JSON",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:q,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:C,title:"Create new attribute (demo)",children:"New Attribute"})]})]}),w?e.jsx(N.Banner,{role:"status","aria-live":"polite",children:w}):null,e.jsxs(N.Layout,{children:[e.jsxs("section",{className:"main",children:[e.jsxs("div",{className:"toolbar card",children:[e.jsx("div",{className:"search",children:e.jsx("input",{ref:L,value:h,onChange:s=>$(s.target.value),placeholder:"Search name, code, option, group…","aria-label":"Search attributes"})}),e.jsxs("div",{className:"filters",children:[e.jsxs("label",{children:["Type",e.jsxs("select",{value:i,onChange:s=>b(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"select",children:"Select"}),e.jsx("option",{value:"text",children:"Text"}),e.jsx("option",{value:"number",children:"Number"}),e.jsx("option",{value:"date",children:"Date"})]})]}),e.jsxs("label",{children:["Group",e.jsx("select",{value:u,onChange:s=>g(s.target.value),children:I.map(s=>e.jsx("option",{value:s,children:s},s))})]}),e.jsxs("label",{children:["Sort",e.jsxs("select",{value:j,onChange:s=>S(s.target.value),children:[e.jsx("option",{value:"name-asc",children:"Name ↑"}),e.jsx("option",{value:"name-desc",children:"Name ↓"}),e.jsx("option",{value:"used-desc",children:"Used In ↓"}),e.jsx("option",{value:"updated-desc",children:"Updated ↓"})]})]})]})]}),e.jsxs("div",{className:"statsRow",children:[e.jsxs("div",{className:"stat card",children:[e.jsx("div",{className:"k",children:"Select"}),e.jsx("div",{className:"v",children:o.byType.select})]}),e.jsxs("div",{className:"stat card",children:[e.jsx("div",{className:"k",children:"Text"}),e.jsx("div",{className:"v",children:o.byType.text})]}),e.jsxs("div",{className:"stat card",children:[e.jsx("div",{className:"k",children:"Number"}),e.jsx("div",{className:"v",children:o.byType.number})]}),e.jsxs("div",{className:"stat card",children:[e.jsx("div",{className:"k",children:"Date"}),e.jsx("div",{className:"v",children:o.byType.date})]})]}),e.jsx("div",{className:"tableWrap card",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Attribute"}),e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Input"}),e.jsx("th",{children:"Options"}),e.jsx("th",{children:"Groups"}),e.jsx("th",{className:"num",children:"Used In"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{className:"actions",children:"Actions"})]})}),e.jsxs("tbody",{children:[k.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"nameCell",children:[e.jsx("span",{className:"name",children:s.name}),e.jsx("span",{className:"id",children:s.id})]})}),e.jsx("td",{children:e.jsx("code",{className:"code",children:s.code})}),e.jsx("td",{children:e.jsxs("span",{className:`chip type ${s.type}`,children:[s.type,s.multi?" (multi)":""]})}),e.jsxs("td",{className:"optionsCell",children:[s.options&&s.options.length?s.options.slice(0,4).map(t=>e.jsx("span",{className:"chip opt",children:t},t)):e.jsx("span",{className:"muted",children:"—"}),s.options&&s.options.length>4?e.jsxs("span",{className:"more",children:["+",s.options.length-4]}):null]}),e.jsx("td",{children:e.jsx("div",{className:"groups",children:(s.groups||[]).map(t=>e.jsx("span",{className:"chip group",children:t},t))})}),e.jsx("td",{className:"num",children:s.usedIn??0}),e.jsx("td",{children:s.required?"Yes":"No"}),e.jsx("td",{title:f(s.updated,!0),children:f(s.updated)}),e.jsxs("td",{className:"actions",children:[e.jsx("button",{className:"btnGhost small",onClick:C,title:"View (demo)",children:"View"}),e.jsx("button",{className:"btnGhost small",onClick:C,title:"Edit (demo)",children:"Edit"}),e.jsx("button",{className:"btnGhost small",onClick:C,title:"Delete (demo)",children:"Delete"})]})]},s.id)),!k.length&&e.jsx("tr",{children:e.jsx("td",{colSpan:9,className:"empty",children:e.jsxs("div",{className:"emptyBlock",children:[e.jsx("div",{className:"big",children:"No attributes match your filters"}),e.jsx("div",{className:"muted",children:"Try clearing search or switching Type/Group."})]})})})]})]})}),e.jsxs("div",{className:"pager card",children:[e.jsx("div",{className:"hint",children:"Page 1 of 1"}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{className:"btnGhost",disabled:!0,children:"Prev"}),e.jsx("button",{className:"btnGhost",disabled:!0,children:"Next"})]})]})]}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(y,{to:"/products",children:"All Products"})}),e.jsx("li",{children:e.jsx(y,{to:"/categories",children:"Categories"})}),e.jsx("li",{children:e.jsx(y,{to:"/products/brands",children:"Brands"})}),e.jsx("li",{children:e.jsx(y,{to:"/inventory",children:"Inventory"})}),e.jsx("li",{children:e.jsx(y,{to:"/reports/inventory",children:"Inventory Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Taxonomy"}),e.jsxs("ul",{className:"tree",children:[e.jsxs("li",{children:["Catalog",e.jsxs("ul",{children:[e.jsx("li",{children:"Attributes"}),e.jsx("li",{children:"Variants"}),e.jsx("li",{children:"Price Lists"})]})]}),e.jsxs("li",{children:["Logistics",e.jsxs("ul",{children:[e.jsx("li",{children:"Weight"}),e.jsx("li",{children:"Dimensions"})]})]}),e.jsxs("li",{children:["Compliance",e.jsxs("ul",{children:[e.jsx("li",{children:"HSN"}),e.jsx("li",{children:"Expiry"})]})]})]})]}),e.jsxs("div",{className:"card printCard",id:"search-print-area",ref:G,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Total"}),e.jsx("div",{className:"v",children:o.all})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Select"}),e.jsx("div",{className:"v",children:o.byType.select})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Text"}),e.jsx("div",{className:"v",children:o.byType.text})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Number"}),e.jsx("div",{className:"v",children:o.byType.number})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Date"}),e.jsx("div",{className:"v",children:o.byType.date})]}),e.jsxs("div",{className:"full",children:[e.jsx("div",{className:"k",children:"Last Updated"}),e.jsx("div",{className:"v",children:f(o.lastUpdated,!0)})]})]}),e.jsx("div",{className:"list",children:m.slice(0,6).map(s=>e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"n",children:s.name}),e.jsxs("span",{className:"m",children:[s.type,s.multi?" (multi)":""]}),e.jsx("span",{className:"t",children:f(s.updated)})]},s.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Schema Preview"}),e.jsx("pre",{className:"schema","aria-label":"Attribute JSON schema",children:`{
  "id": "attr-size",
  "name": "Size",
  "code": "size",
  "type": "select",
  "multi": false,
  "options": ["XS","S","M","L","XL","XXL"],
  "groups": ["Catalog","Variants"],
  "required": true,
  "updated": "2025-10-04T09:40:03+05:30"
}`}),e.jsx("div",{className:"muted small",children:"This is illustrative—data here is static for the demo."})]})]})]}),e.jsx(O,{open:M,title:"Demo mode",message:"This is a display-only preview. Actions like create, edit or delete are disabled.",onClose:()=>A(!1)})]})};export{X as default};
