import{d as p,u as W,r as d,j as e,L as O,N as h}from"./index-LshBDmDj.js";const x="var(--text, #f3f4f6)",b="var(--muted, #a0a0a7)",f="var(--card, #111318)",k="var(--border, #23262d)",o="var(--accent, #5aa9ff)",C="var(--accent-soft, rgba(90,169,255,0.15))",c={Page:p.div`
        padding: 24px 0 64px;
        color: ${x};
        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
    `,Header:p.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 18px;
        margin-bottom: 12px;

        .title {
            display: grid;
            gap: 6px;
        }
        .meta {
            display: flex;
            gap: 8px;
            align-items: center;
            color: ${b};
        }
        .meta strong {
            color: ${x};
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${k};
            background: ${f};
            color: ${x};
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                transform 0.08s;
        }
        .btnGhost:hover,
        .btnPrimary:hover {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${C};
        }
        button:active {
            transform: translateY(1px);
        }
        button[disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,Toolbar:p.section`
        padding: 12px 14px;
        margin-bottom: 12px;
        display: grid;
        gap: 10px;

        .search input {
            width: 100%;
            height: 38px;
            border: 1px solid ${k};
            background: ${f};
            color: ${x};
            border-radius: 8px;
            padding: 0 12px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${b};
        }
        .search input:focus {
            border-color: ${o};
            box-shadow: 0 0 0 3px ${C};
            outline: none;
        }

        .filters {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .filters {
                grid-template-columns: 1fr 1fr;
            }
        }

        .group {
            display: grid;
            gap: 8px;
        }
        .groupTitle {
            color: ${b};
            font-size: 12px;
            font-weight: 600;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .chip {
            border: 1px solid ${k};
            padding: 6px 10px;
            border-radius: 999px;
            background: ${f};
            color: ${x};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip:hover {
            border-color: ${o};
            color: ${o};
        }
        .chip.active {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${C};
        }

        .sort {
            display: flex;
            gap: 8px;
            align-items: center;
            justify-content: flex-end;
        }
        .sort span {
            color: ${b};
        }
        .sort select {
            height: 34px;
            border: 1px solid ${k};
            border-radius: 8px;
            background: ${f};
            color: ${x};
            padding: 0 8px;
        }
        .sort .btnGhost {
            height: 34px;
        }
    `,Grid:p.div`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .main.card {
            padding: 0;
        }
        .side {
            display: grid;
            gap: 12px;
        }
        .miniCard {
            padding: 12px 14px;
        }
        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            border: 1px solid ${k};
            border-radius: 8px;
            padding: 6px 8px;
            background: ${f};
            color: ${x};
        }
        .links a:hover {
            border-color: ${o};
            color: ${o};
        }
    `,Empty:p.div`
        display: grid;
        place-items: center;
        padding: 32px 0;
        .emoji {
            font-size: 24px;
        }
        .title {
            margin-top: 8px;
            font-weight: 700;
        }
        .hint {
            color: ${b};
        }
    `,TableWrap:p.div``,_:p.div``};c.Page=c.Page;c.Grid=c.Grid;c.Page=c.Page;const S=r=>String(r).padStart(2,"0"),$=(r,i=!1)=>{const n=r instanceof Date?r:new Date(r),T=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],y=`${T[n.getDay()]} ${l[n.getMonth()]} ${S(n.getDate())} ${n.getFullYear()}`;return i?`${y} ${S(n.getHours())}:${S(n.getMinutes())}:${S(n.getSeconds())}hrs`:y},X=[{id:"MED-AMOX-500",brand:"Amoxitab",generic:"Amoxicillin",strength:"500 mg",form:"Tablet",pack:"10x10",mrp:165,gst:12,manufacturer:"Astra Remedies",hsn:"30049099",stock:420,status:"ok",expiryISO:"2026-02-15",updatedAt:"2025-10-04T10:12:45+05:30"},{id:"MED-PCM-650",brand:"Paracet",generic:"Paracetamol",strength:"650 mg",form:"Tablet",pack:"15x1",mrp:32,gst:5,manufacturer:"Beacon Labs",hsn:"30049091",stock:36,status:"low",expiryISO:"2025-11-20",updatedAt:"2025-10-04T09:01:10+05:30"},{id:"MED-AZ-500",brand:"Azicine",generic:"Azithromycin",strength:"500 mg",form:"Tablet",pack:"3x1",mrp:79,gst:12,manufacturer:"NovaCare Pharma",hsn:"30042049",stock:180,status:"ok",expiryISO:"2027-01-05",updatedAt:"2025-10-04T08:30:00+05:30"},{id:"MED-DOLO-650",brand:"Dolor",generic:"Paracetamol",strength:"650 mg",form:"Tablet",pack:"15x1",mrp:35,gst:5,manufacturer:"Everest Biotech",hsn:"30049091",stock:0,status:"out",expiryISO:"2025-10-10",updatedAt:"2025-10-04T07:58:33+05:30"},{id:"MED-IBU-400",brand:"Ibufast",generic:"Ibuprofen",strength:"400 mg",form:"Tablet",pack:"10x1",mrp:48,gst:12,manufacturer:"Astra Remedies",hsn:"30049029",stock:95,status:"ok",expiryISO:"2026-06-30",updatedAt:"2025-10-03T17:41:22+05:30"},{id:"MED-OND-4",brand:"Ondex",generic:"Ondansetron",strength:"4 mg/5ml",form:"Syrup",pack:"60 ml",mrp:58,gst:12,manufacturer:"Beacon Labs",hsn:"30049034",stock:22,status:"low",expiryISO:"2025-12-31",updatedAt:"2025-10-03T12:10:48+05:30"},{id:"MED-PANT-40",brand:"Pantose",generic:"Pantoprazole",strength:"40 mg",form:"Tablet",pack:"15x1",mrp:89,gst:12,manufacturer:"Trident Healthcare",hsn:"30049099",stock:300,status:"ok",expiryISO:"2027-05-01",updatedAt:"2025-10-02T16:05:05+05:30"},{id:"MED-AMLO-5",brand:"Amlocard",generic:"Amlodipine",strength:"5 mg",form:"Tablet",pack:"10x1",mrp:25,gst:12,manufacturer:"NovaCare Pharma",hsn:"30049069",stock:11,status:"low",expiryISO:"2025-10-06",updatedAt:"2025-10-04T11:21:09+05:30"},{id:"MED-SALBUT-100",brand:"Salbair",generic:"Salbutamol",strength:"100 mcg",form:"Inhaler",pack:"200 metered",mrp:295,gst:12,manufacturer:"Everest Biotech",hsn:"30049022",stock:62,status:"ok",expiryISO:"2026-11-18",updatedAt:"2025-09-22T14:18:27+05:30"},{id:"MED-AMOX-250-SYR",brand:"AmoxiKid",generic:"Amoxicillin",strength:"250 mg/5ml",form:"Syrup",pack:"100 ml",mrp:84,gst:12,manufacturer:"Astra Remedies",hsn:"30049099",stock:8,status:"low",expiryISO:"2025-10-04",updatedAt:"2025-10-04T06:33:11+05:30"},{id:"MED-CEF-200",brand:"Cefin",generic:"Cefixime",strength:"200 mg",form:"Tablet",pack:"10x1",mrp:145,gst:12,manufacturer:"Trident Healthcare",hsn:"30042032",stock:210,status:"ok",expiryISO:"2026-02-01",updatedAt:"2025-09-30T10:00:00+05:30"},{id:"MED-BET-0.1",brand:"Betasol",generic:"Betamethasone",strength:"0.1%",form:"Ointment",pack:"20 g",mrp:70,gst:12,manufacturer:"Beacon Labs",hsn:"30049011",stock:4,status:"low",expiryISO:"2025-10-12",updatedAt:"2025-10-04T08:55:55+05:30"}],G={brand:(r,i)=>r.brand.localeCompare(i.brand),generic:(r,i)=>r.generic.localeCompare(i.generic),mrp:(r,i)=>r.mrp-i.mrp,stock:(r,i)=>r.stock-i.stock,expiry:(r,i)=>new Date(r.expiryISO)-new Date(i.expiryISO)},Y=["Tablet","Capsule","Syrup","Ointment","Inhaler","Injection"],Q=[{key:"ok",label:"In Stock"},{key:"low",label:"Low Stock"},{key:"out",label:"Out of Stock"}],Z=()=>{W();const[r,i]=d.useState(""),[n,T]=d.useState(new Set),[l,y]=d.useState(new Set),[N,D]=d.useState("brand"),[w,v]=d.useState("asc"),[u,g]=d.useState(1),M=10,I=d.useRef(null),P=d.useMemo(()=>X,[]),E=d.useMemo(()=>{const s=r.trim().toLowerCase().split(/\s+/).filter(Boolean);return P.filter(t=>{const a=`${t.id} ${t.brand} ${t.generic} ${t.form} ${t.manufacturer} ${t.hsn}`.toLowerCase(),U=s.length===0||s.every(q=>a.includes(q)),J=n.size?n.has(t.form):!0,K=l.size?l.has(t.status):!0;return U&&J&&K})},[P,r,n,l]),m=d.useMemo(()=>{const s=[...E],t=G[N]||G.brand;return s.sort(t),w==="desc"&&s.reverse(),s},[E,N,w]),A=Math.max(1,Math.ceil(m.length/M)),L=m.slice((u-1)*M,u*M),R=s=>{g(1),T(t=>{const a=new Set(t);return a.has(s)?a.delete(s):a.add(s),a})},F=s=>{g(1),y(t=>{const a=new Set(t);return a.has(s)?a.delete(s):a.add(s),a})},j=s=>{s===N?v(t=>t==="asc"?"desc":"asc"):(D(s),v("asc"))},B=()=>{const s=new Blob([JSON.stringify(m,null,2)],{type:"application/json"}),t=URL.createObjectURL(s),a=document.createElement("a");a.href=t,a.download="medicines-export.json",a.click(),URL.revokeObjectURL(t)},z=s=>{var a;const t=new URL(window.location.href);t.pathname=`${"/react-routes-theme/".replace(/\/$/,"")||""}/medicines/${s}`,(a=navigator.clipboard)==null||a.writeText(t.toString())},H=()=>{I.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(c.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left:0; top:0; width:100%;
          }
        }
      `}),e.jsxs(c.Header,{className:"card",children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Medicines"}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:"Total"}),e.jsx("strong",{children:m.length}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Updated"}),e.jsx("strong",{children:$(new Date,!0)})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:H,children:"Print"}),e.jsx("button",{className:"btnGhost",onClick:B,children:"Export"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo mode",children:"Add Medicine"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo mode",children:"Import"})]})]}),e.jsxs(c.Toolbar,{className:"card",children:[e.jsx("div",{className:"search",children:e.jsx("input",{value:r,onChange:s=>{i(s.target.value),g(1)},placeholder:"Search brand, generic, SKU, manufacturer…","aria-label":"Search medicines"})}),e.jsxs("div",{className:"filters",children:[e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"groupTitle",children:"Form"}),e.jsx("div",{className:"chips",children:Y.map(s=>e.jsx("button",{className:`chip ${n.has(s)?"active":""}`,onClick:()=>R(s),children:s},s))})]}),e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"groupTitle",children:"Status"}),e.jsx("div",{className:"chips",children:Q.map(s=>e.jsx("button",{className:`chip ${l.has(s.key)?"active":""}`,onClick:()=>F(s.key),children:s.label},s.key))})]})]}),e.jsxs("div",{className:"sort",children:[e.jsx("span",{children:"Sort by"}),e.jsxs("select",{value:N,onChange:s=>{D(s.target.value),v("asc")},children:[e.jsx("option",{value:"brand",children:"Brand"}),e.jsx("option",{value:"generic",children:"Generic"}),e.jsx("option",{value:"mrp",children:"MRP"}),e.jsx("option",{value:"stock",children:"Stock"}),e.jsx("option",{value:"expiry",children:"Expiry"})]}),e.jsx("button",{className:"btnGhost",onClick:()=>v(s=>s==="asc"?"desc":"asc"),children:w==="asc"?"Asc":"Desc"})]})]}),e.jsxs(c.Grid,{children:[e.jsxs("section",{className:"main card",children:[e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>j("brand"),children:"Brand"}),e.jsx("th",{onClick:()=>j("generic"),children:"Generic"}),e.jsx("th",{children:"Form"}),e.jsx("th",{children:"Strength"}),e.jsx("th",{children:"Pack"}),e.jsx("th",{onClick:()=>j("mrp"),children:"MRP"}),e.jsx("th",{children:"GST %"}),e.jsx("th",{onClick:()=>j("stock"),children:"Stock"}),e.jsx("th",{onClick:()=>j("expiry"),children:"Expiry"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Actions"})]})}),e.jsxs("tbody",{children:[L.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"brand",children:[e.jsx(O,{className:"brandLink",to:`/medicines/${s.id}`,children:s.brand}),e.jsx("div",{className:"sku",children:s.id})]})}),e.jsxs("td",{children:[e.jsx("div",{className:"generic",children:s.generic}),e.jsxs("div",{className:"mfg",children:[e.jsx("span",{className:"muted",children:"by"})," ",e.jsx(h,{to:"/medicines/manufacturers",children:s.manufacturer})]})]}),e.jsx("td",{children:s.form}),e.jsx("td",{children:s.strength}),e.jsx("td",{children:s.pack}),e.jsxs("td",{children:["₹",s.mrp.toFixed(2)]}),e.jsxs("td",{children:[s.gst,"%"]}),e.jsx("td",{children:s.stock}),e.jsx("td",{children:$(s.expiryISO)}),e.jsx("td",{children:e.jsxs("span",{className:`badge ${s.status}`,children:[s.status==="ok"&&"In Stock",s.status==="low"&&"Low",s.status==="out"&&"Out"]})}),e.jsxs("td",{className:"rowActions",children:[e.jsx(O,{to:`/medicines/${s.id}`,className:"act",children:"View"}),e.jsx("button",{className:"act",onClick:()=>z(s.id),children:"Copy Link"}),e.jsx(O,{to:"/medicines/hsn-gst",className:"act",children:"HSN"})]})]},s.id)),L.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:11,children:e.jsxs(c.Empty,{children:[e.jsx("div",{className:"emoji",children:"🗂️"}),e.jsx("div",{className:"title",children:"No results"}),e.jsx("div",{className:"hint",children:"Try adjusting filters or search terms."})]})})})]})]})}),e.jsxs("div",{className:"pager",children:[e.jsx("button",{className:"btnGhost",disabled:u<=1,onClick:()=>g(s=>Math.max(1,s-1)),children:"Prev"}),e.jsxs("div",{className:"pageInfo",children:["Page ",u," / ",A]}),e.jsx("button",{className:"btnGhost",disabled:u>=A,onClick:()=>g(s=>Math.min(A,s+1)),children:"Next"})]})]}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card miniCard",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(h,{to:"/medicines/manufacturers",children:"Manufacturers"})}),e.jsx("li",{children:e.jsx(h,{to:"/medicines/molecules",children:"Molecules"})}),e.jsx("li",{children:e.jsx(h,{to:"/medicines/forms",children:"Forms"})}),e.jsx("li",{children:e.jsx(h,{to:"/medicines/strengths",children:"Strengths"})}),e.jsx("li",{children:e.jsx(h,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"})}),e.jsx("li",{children:e.jsx(h,{to:"/medicines/hsn-gst",children:"HSN & GST"})})]})]}),e.jsxs("div",{className:"card miniCard",children:[e.jsx("h3",{children:"Legend"}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"badge ok",children:"In Stock"}),e.jsx("span",{className:"badge low",children:"Low"}),e.jsx("span",{className:"badge out",children:"Out"})]}),e.jsx("div",{className:"legendNote",children:"Row menu includes deep links and copy-link for quick sharing."})]}),e.jsxs("div",{className:"card miniCard",id:"search-print-area",ref:I,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Generated"}),e.jsx("span",{className:"v",children:$(new Date,!0)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Items"}),e.jsx("span",{className:"v",children:m.length})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Filters"}),e.jsxs("span",{className:"v",children:[r?`q="${r}"`:"none",n.size?`, forms=[${[...n].join(", ")}]`:"",l.size?`, status=[${[...l].join(", ")}]`:""]})]})]}),e.jsx("div",{className:"miniTable",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Brand"}),e.jsx("th",{children:"Generic"}),e.jsx("th",{children:"MRP"}),e.jsx("th",{children:"Expiry"})]})}),e.jsx("tbody",{children:m.slice(0,8).map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.brand}),e.jsx("td",{children:s.generic}),e.jsxs("td",{children:["₹",s.mrp.toFixed(2)]}),e.jsx("td",{children:$(s.expiryISO)})]},s.id))})]})})]})]})]})]})};export{Z as default};
