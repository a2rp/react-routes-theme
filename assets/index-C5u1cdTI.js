import{d as h,r as j,u as w,j as e,N as l}from"./index-B_KzNciT.js";const d="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",p="var(--card, #111318)",a="var(--border, #23262d)",s="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",C="var(--radius, 16px)",u={Page:h.div`
        padding: 24px 0 64px;
        color: ${d};
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${c};
        }
        .breadcrumbs .current {
            color: ${d};
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
    `,Header:h.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${c};
            font-size: 12px;
        }
        .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${a};
            background: ${p};
            color: ${d};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${s};
            color: ${s};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnGhost:hover {
            border-color: ${s};
            color: ${s};
        }
    `,Toolbar:h.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 12px 14px;
        margin-bottom: 16px;

        .filters {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }
        .search input {
            width: 320px;
            max-width: 60vw;
            border: 1px solid ${a};
            background: ${p};
            color: ${d};
            padding: 8px 12px;
            border-radius: 8px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input::placeholder {
            color: ${c};
        }
        .search input:focus {
            outline: none;
            border-color: ${s};
            box-shadow: 0 0 0 3px ${y};
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${a};
            background: ${p};
            color: ${d};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip:hover {
            border-color: ${s};
            color: ${s};
        }

        .toolbarRight {
            display: flex;
            align-items: center;
            gap: 16px;
        }
        .legend {
            display: flex;
            align-items: center;
            gap: 10px;
            color: ${c};
            font-size: 12px;
        }
        .legend .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid ${a};
        }
        .legend .rx {
            background: color-mix(in oklab, ${s} 60%, transparent);
        }
        .legend .otc {
            background: color-mix(in oklab, ${s} 25%, transparent);
        }

        .quick {
            display: flex;
            gap: 8px;
        }
        .mini {
            border: 1px solid ${a};
            background: ${p};
            color: ${d};
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 12px;
        }
        .mini:hover {
            border-color: ${s};
            color: ${s};
        }
    `,Layout:h.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1060px) {
            grid-template-columns: 2fr 1fr;
        }

        .main.card {
            padding: 0;
        }
        .side {
            display: grid;
            gap: 16px;
        }

        .card {
            border: 1px solid ${a};
            border-radius: 12px;
            background: ${p};
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
            padding: 16px;
        }

        .gridTwo {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
            .label {
                color: ${c};
                font-size: 12px;
            }
            .value {
                font-weight: 700;
            }
        }
        .divider {
            height: 1px;
            background: ${a};
            margin: 12px 0;
            opacity: 0.7;
        }

        .keylist {
            display: grid;
            gap: 8px;
            grid-template-columns: 120px 1fr;
        }
        .keylist .k {
            color: ${c};
        }
        .keylist .v ul {
            margin: 0;
            padding-left: 18px;
        }
        .small {
            font-size: 12px;
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
            background: ${s};
            border: 1px solid ${a};
        }
        .timeline .muted {
            color: ${c};
            font-size: 12px;
        }
    `,Table:h.div`
        overflow: auto;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;

        .thead {
            position: sticky;
            top: 0;
            z-index: 2;
            background: color-mix(in oklab, ${p} 96%, transparent);
        }
        .tr {
            display: grid;
            grid-template-columns: 1.2fr 0.9fr 1.1fr 0.6fr 0.6fr 0.5fr 1.2fr 0.9fr 0.9fr;
            border-bottom: 1px solid ${a};
        }
        .th,
        .td {
            padding: 12px 14px;
        }
        .th {
            font-weight: 700;
            color: ${s};
            background: ${p};
            position: sticky;
            top: 0;
            border-bottom: 1px solid ${a};
        }
        .tbody .tr:hover {
            background: color-mix(in oklab, ${s} 8%, transparent);
        }

        .titleCell .name {
            font-weight: 700;
        }
        .titleCell .muted {
            color: ${c};
            font-size: 12px;
        }

        .chipsLine {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip.tiny {
            border: 1px solid ${a};
            border-radius: 999px;
            padding: 4px 8px;
            font-size: 12px;
            background: ${p};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .badge {
            border: 1px solid ${a};
            border-radius: 999px;
            padding: 4px 8px;
            font-weight: 700;
        }
        .badge.rx {
            background: color-mix(in oklab, ${s} 12%, transparent);
        }
        .badge.otc {
            background: color-mix(in oklab, ${s} 6%, transparent);
        }

        .bullets {
            margin: 0;
            padding-left: 18px;
        }
        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .empty {
            padding: 36px;
            text-align: center;
            color: ${c};
        }
        .empty .title {
            font-weight: 700;
            color: ${d};
            margin-top: 8px;
        }
        .empty .sub {
            color: ${c};
            margin-top: 4px;
        }
        .empty .icon {
            font-size: 34px;
        }
    `,FooterBar:h.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;

        .muted {
            color: ${c};
            font-size: 12px;
        }
        .btnGhost.mini {
            border: 1px solid ${a};
            background: ${p};
            color: ${d};
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 12px;
        }
        .btnGhost.mini:hover {
            border-color: ${s};
            color: ${s};
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
        border-radius: ${C};
        border: 1px solid ${a};
        background: ${p};
        color: ${d};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${a};
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
            border-top: 1px solid ${a};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${a};
            background: ${p};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${s};
            color: ${s};
            box-shadow: 0 0 0 3px ${y};
        }
    `},f=(t,m)=>{const r=t instanceof Date?t:new Date(t),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=v=>String(v).padStart(2,"0");return`${`${x[r.getDay()]} ${n[r.getMonth()]} ${g(r.getDate())} ${r.getFullYear()}`} ${g(r.getHours())}:${g(r.getMinutes())}:${g(r.getSeconds())}hrs`},k=t=>{const m=t instanceof Date?t:new Date(t),r=x=>String(x).padStart(2,"0");return`${r(m.getHours())}:${r(m.getMinutes())}:${r(m.getSeconds())}hrs`},N="Demo mode: action unavailable",T=({open:t,title:m,message:r,onClose:x})=>t?e.jsx(u.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:x,children:e.jsxs(u.Modal,{className:"card",onMouseDown:n=>n.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:m})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:r})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:x,children:"Close"})})]})}):null,S=()=>{const t=j.useMemo(()=>new Date,[]);w();const[m,r]=j.useState(""),[x,n]=j.useState(!1),g=j.useRef(null),b=j.useMemo(()=>[{id:"MOL-PAR-500",molecule:"Paracetamol",forms:["Tablet","Syrup","IV"],strengths:["500 mg","650 mg","125 mg/5ml"],atc:"N02BE01",schedule:"OTC",brandsCount:120,interactions:["Warfarin (monitor INR)"],lastUpdated:"2025-10-04T15:38:20+05:30"},{id:"MOL-AMOX-500",molecule:"Amoxicillin",forms:["Capsule","Dry Syrup"],strengths:["250 mg","500 mg"],atc:"J01CA04",schedule:"Rx",brandsCount:80,interactions:["Allopurinol (rash risk)","Warfarin (INR)"],lastUpdated:"2025-09-30T11:12:05+05:30"},{id:"MOL-AZITH-500",molecule:"Azithromycin",forms:["Tablet","Oral Suspension"],strengths:["250 mg","500 mg","200 mg/5ml"],atc:"J01FA10",schedule:"Rx",brandsCount:64,interactions:["QT-prolonging agents"],lastUpdated:"2025-09-26T09:01:41+05:30"},{id:"MOL-MET-500",molecule:"Metformin",forms:["Tablet","ER Tablet"],strengths:["500 mg","850 mg","1000 mg"],atc:"A10BA02",schedule:"Rx",brandsCount:90,interactions:["Iodinated contrast (hold)","Alcohol"],lastUpdated:"2025-10-01T10:05:12+05:30"},{id:"MOL-AMLO-5",molecule:"Amlodipine",forms:["Tablet"],strengths:["2.5 mg","5 mg","10 mg"],atc:"C08CA01",schedule:"Rx",brandsCount:76,interactions:["CYP3A4 inhibitors/inducers"],lastUpdated:"2025-09-27T13:15:00+05:30"},{id:"MOL-LOSA-50",molecule:"Losartan",forms:["Tablet"],strengths:["25 mg","50 mg","100 mg"],atc:"C09CA01",schedule:"Rx",brandsCount:48,interactions:["Potassium-sparing agents"],lastUpdated:"2025-09-28T17:42:33+05:30"},{id:"MOL-PANTO-40",molecule:"Pantoprazole",forms:["Tablet","IV"],strengths:["20 mg","40 mg"],atc:"A02BC02",schedule:"Rx",brandsCount:54,interactions:["Drugs needing acidic pH"],lastUpdated:"2025-09-25T08:10:22+05:30"},{id:"MOL-OMEP-20",molecule:"Omeprazole",forms:["Capsule"],strengths:["10 mg","20 mg","40 mg"],atc:"A02BC01",schedule:"Rx",brandsCount:67,interactions:["Clopidogrel (reduced activation)"],lastUpdated:"2025-09-22T19:25:12+05:30"},{id:"MOL-IBU-400",molecule:"Ibuprofen",forms:["Tablet","Suspension"],strengths:["200 mg","400 mg"],atc:"M01AE01",schedule:"OTC/Rx",brandsCount:110,interactions:["Antihypertensives (reduced effect)"],lastUpdated:"2025-10-02T16:20:45+05:30"},{id:"MOL-DICLO-50",molecule:"Diclofenac",forms:["Tablet","Gel"],strengths:["50 mg","75 mg","1% gel"],atc:"M01AB05",schedule:"Rx",brandsCount:88,interactions:["Anticoagulants","SSRIs (bleed risk)"],lastUpdated:"2025-09-18T12:11:09+05:30"},{id:"MOL-CET-10",molecule:"Cetirizine",forms:["Tablet","Syrup"],strengths:["5 mg","10 mg"],atc:"R06AE07",schedule:"OTC/Rx",brandsCount:72,interactions:["CNS depressants (sedation)"],lastUpdated:"2025-10-03T09:47:12+05:30"},{id:"MOL-LEVO-5",molecule:"Levocetirizine",forms:["Tablet","Syrup"],strengths:["5 mg","2.5 mg/5ml"],atc:"R06AE09",schedule:"Rx",brandsCount:58,interactions:["CNS depressants (sedation)"],lastUpdated:"2025-09-29T14:36:05+05:30"}],[]),v=j.useMemo(()=>{const i=m.trim().toLowerCase();return i?b.filter(o=>(o.molecule+" "+o.atc+" "+o.forms.join(" ")+" "+o.strengths.join(" ")).toLowerCase().includes(i)):b},[m,b]),$=()=>{g.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(u.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(u.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Molecules"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(l,{to:"/medicines",children:"Medicines"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Molecules"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",b.length]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Last sync: ",f(t)]})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",onClick:$,title:"Print list",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:()=>n(!0),title:N,children:"Add Molecule"}),e.jsx("button",{className:"btnGhost",onClick:()=>n(!0),title:N,children:"Bulk Import"})]})]}),e.jsxs(u.Toolbar,{className:"card",children:[e.jsxs("div",{className:"filters",children:[e.jsx("div",{className:"search",children:e.jsx("input",{value:m,onChange:i=>r(i.target.value),placeholder:"Search molecule, ATC, form, strength…","aria-label":"Search molecules"})}),e.jsxs("div",{className:"chips",children:[e.jsx("button",{className:"chip",onClick:()=>n(!0),title:"Coming soon",children:"Class: Analgesic"}),e.jsx("button",{className:"chip",onClick:()=>n(!0),title:"Coming soon",children:"Form: Tablet"}),e.jsx("button",{className:"chip",onClick:()=>n(!0),title:"Coming soon",children:"Schedule: Rx"}),e.jsx("button",{className:"chip",onClick:()=>n(!0),title:"Coming soon",children:"Schedule: OTC"})]})]}),e.jsxs("div",{className:"toolbarRight",children:[e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot rx"})," Rx",e.jsx("span",{className:"dot otc"})," OTC"]}),e.jsxs("div",{className:"quick",children:[e.jsx(l,{className:"mini",to:"/medicines/forms",children:"Forms"}),e.jsx(l,{className:"mini",to:"/medicines/strengths",children:"Strengths"}),e.jsx(l,{className:"mini",to:"/medicines/hsn-gst",children:"HSN / GST"})]})]})]}),e.jsxs(u.Layout,{children:[e.jsxs("section",{className:"main card",children:[e.jsxs(u.Table,{role:"table","aria-label":"Molecules table",children:[e.jsx("div",{className:"thead",role:"rowgroup",children:e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"th",role:"columnheader",children:"Molecule"}),e.jsx("div",{className:"th",role:"columnheader",children:"Forms"}),e.jsx("div",{className:"th",role:"columnheader",children:"Common Strengths"}),e.jsx("div",{className:"th",role:"columnheader",title:"Anatomical Therapeutic Chemical",children:"ATC"}),e.jsx("div",{className:"th",role:"columnheader",children:"Schedule"}),e.jsx("div",{className:"th",role:"columnheader",children:"Brands"}),e.jsx("div",{className:"th",role:"columnheader",children:"Interactions"}),e.jsx("div",{className:"th",role:"columnheader",children:"Updated"}),e.jsx("div",{className:"th actions",role:"columnheader",children:"Actions"})]})}),e.jsx("div",{className:"tbody",role:"rowgroup",children:v.length===0?e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"icon",children:"🔎"}),e.jsx("div",{className:"title",children:"No matches"}),e.jsx("div",{className:"sub",children:"Try a different keyword or clear filters."})]}):v.map(i=>e.jsxs("div",{className:"tr",role:"row",children:[e.jsx("div",{className:"td",children:e.jsxs("div",{className:"titleCell",children:[e.jsx("div",{className:"name",children:i.molecule}),e.jsxs("div",{className:"muted",children:["ID: ",i.id]})]})}),e.jsx("div",{className:"td",children:e.jsx("div",{className:"chipsLine",children:i.forms.map(o=>e.jsx("span",{className:"chip tiny",children:o},o))})}),e.jsx("div",{className:"td",children:e.jsx("div",{className:"chipsLine",children:i.strengths.map(o=>e.jsx("span",{className:"chip tiny",children:o},o))})}),e.jsx("div",{className:"td",children:e.jsx("span",{className:"mono",children:i.atc})}),e.jsx("div",{className:"td",children:e.jsx("span",{className:`badge ${String(i.schedule).toLowerCase().includes("otc")?"otc":"rx"}`,children:i.schedule})}),e.jsx("div",{className:"td",children:i.brandsCount}),e.jsx("div",{className:"td",children:e.jsx("ul",{className:"bullets",children:i.interactions.map(o=>e.jsx("li",{children:o},o))})}),e.jsx("div",{className:"td",children:f(i.lastUpdated)}),e.jsxs("div",{className:"td actions",children:[e.jsx(l,{className:"mini",to:"/products",title:"Browse products",children:"Products"}),e.jsx(l,{className:"mini",to:"/products/brands",title:"View brands",children:"Brands"}),e.jsx(l,{className:"mini",to:"/medicines/hsn-gst",title:"HSN & GST",children:"HSN/GST"})]})]},i.id))})]}),e.jsxs(u.FooterBar,{children:[e.jsx("div",{className:"left",children:e.jsxs("span",{className:"muted",children:["Showing ",v.length," of ",b.length]})}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost mini",onClick:()=>n(!0),title:N,children:"Prev"}),e.jsx("button",{className:"btnGhost mini",onClick:()=>n(!0),title:N,children:"Next"})]})]})]}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card",id:"search-print-area",ref:g,children:[e.jsx("h3",{children:"Summary"}),e.jsxs("div",{className:"gridTwo",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Dataset"}),e.jsx("div",{className:"value",children:"Molecules"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Count"}),e.jsx("div",{className:"value",children:b.length})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Generated"}),e.jsx("div",{className:"value",children:f(t)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Local time"}),e.jsx("div",{className:"value",children:k(t)})]})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"keylist",children:[e.jsx("div",{className:"k",children:"Quick links"}),e.jsx("div",{className:"v",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(l,{to:"/medicines/forms",children:"Forms"})}),e.jsx("li",{children:e.jsx(l,{to:"/medicines/strengths",children:"Strengths"})}),e.jsx("li",{children:e.jsx(l,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"})}),e.jsx("li",{children:e.jsx(l,{to:"/products",children:"Products"})})]})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Recent Updates"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Interaction list refreshed"}),e.jsx("div",{className:"muted",children:f(t)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"ATC mappings checked"}),e.jsx("div",{className:"muted",children:f("2025-09-30T11:12:05+05:30")})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Form catalog revised"}),e.jsx("div",{className:"muted",children:f("2025-09-26T09:01:41+05:30")})]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Reference"}),e.jsxs("div",{className:"legendRef",children:[e.jsxs("span",{children:[e.jsx("span",{className:"dot rx"})," Prescription"]}),e.jsxs("span",{children:[e.jsx("span",{className:"dot otc"})," Over-the-counter"]})]}),e.jsx("p",{className:"muted small",children:"This view is for demonstration. Create/Import actions are disabled."})]})]})]}),e.jsx(T,{open:x,title:"Unavailable in Demo",message:N,onClose:()=>n(!1)})]})};export{S as default};
