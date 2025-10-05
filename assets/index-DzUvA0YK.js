import{d as N,u as R,r as n,j as e,N as v}from"./index-DwhKQ_MC.js";const h="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",g="var(--card, #111318)",r="var(--border, #23262d)",a="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",C={Page:N.div`
        padding: 24px 0 64px;
        color: ${h};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${c};
            }
            .current {
                color: ${h};
            }
        }
    `,Header:N.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${c};
            font-size: 12px;
            flex-wrap: wrap;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnGhost,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${g};
            color: ${h};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${w};
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Filters:N.div`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: 1.3fr 1fr 1fr 0.8fr 0.4fr;
            }
        }

        label {
            display: block;
            margin-bottom: 6px;
            color: ${c};
            font-size: 12px;
        }

        input,
        select {
            width: 100%;
            background: ${g};
            color: ${h};
            border: 1px solid ${r};
            padding: 8px 10px;
            border-radius: 8px;
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        input:focus,
        select:focus {
            border-color: ${a};
            box-shadow: 0 0 0 3px ${w};
            outline: none;
        }

        .pills {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${r};
            background: ${g};
            color: ${h};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .pill:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${w};
        }
        .pill.active {
            border-color: ${a};
            color: ${a};
            background: color-mix(in oklab, ${a} 10%, transparent);
        }
    `,Grid:N.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        align-items: start;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .tableHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            .sub {
                color: ${c};
                font-size: 12px;
                margin-left: 10px;
            }
            .legend {
                display: none;
                gap: 8px;
            }
            @media (min-width: 1100px) {
                .legend {
                    display: flex;
                }
            }
        }

        .tableWrap {
            border: 1px solid ${r};
            border-radius: 12px;
            overflow: auto;
            background: ${g};
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 13px;
        }

        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${g};
            color: ${h};
            text-align: left;
            border-bottom: 1px solid ${r};
            padding: 12px 14px;
            font-weight: 600;
        }

        tbody td {
            border-top: 1px solid ${r};
            padding: 12px 14px;
            vertical-align: top;
        }

        tbody tr:hover td {
            background: color-mix(in oklab, ${a} 7%, transparent);
        }

        .chips {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${r};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${a} 8%, transparent);
            cursor: pointer;
            user-select: none;
        }
        .chip.legendItem {
            cursor: default;
        }

        .molecule .muted {
            color: ${c};
            font-size: 12px;
            margin-top: 2px;
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .brandCell {
            display: grid;
            gap: 6px;
        }
        .brandCell .count {
            font-weight: 600;
        }
        .brandCell .examples {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .brandCell .example {
            border: 1px dashed ${r};
            padding: 2px 6px;
            border-radius: 6px;
            color: ${c};
        }

        .rowActions {
            display: flex;
            gap: 10px;
        }
        .linkBtn {
            background: transparent;
            border: none;
            color: ${a};
            cursor: pointer;
            padding: 0;
            font-weight: 700;
            border-bottom: 1px dashed transparent;
        }
        .linkBtn:hover {
            border-bottom-color: ${a};
        }

        .empty {
            display: grid;
            place-items: center;
            padding: 40px 0;
            color: ${c};
            gap: 8px;
        }
        .empty .icon {
            font-size: 24px;
        }

        /* right column cards */
        .side {
            display: grid;
            gap: 16px;
        }
        .info p {
            margin: 8px 0 12px;
        }
        .info .bullets {
            margin: 0 0 12px 18px;
            color: ${c};
        }
        .info .links {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .info .links a {
            color: ${c};
            border: 1px solid ${r};
            background: ${g};
            padding: 6px 8px;
            border-radius: 8px;
        }
        .info .links a:hover {
            color: ${a};
            border-color: ${a};
        }

        .callout {
            border: 1px solid ${r};
        }
        .callout h3 {
            margin-bottom: 8px;
        }
        .callout p {
            color: ${h};
        }

        .toast {
            position: sticky;
            bottom: 10px;
            padding: 10px 12px;
            border: 1px solid ${r};
            background: color-mix(in oklab, ${a} 14%, transparent);
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
    `},D=(i,b=!1)=>{const o=i instanceof Date?i:new Date(i),f=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=j=>String(j).padStart(2,"0"),m=`${f[o.getDay()]} ${x[o.getMonth()]} ${d(o.getDate())} ${o.getFullYear()}`;return b?`${m} ${d(o.getHours())}:${d(o.getMinutes())}:${d(o.getSeconds())}hrs`:m},u=[{id:"MED-AMOX",molecule:"Amoxicillin",forms:["Tablet","Capsule","Suspension"],strengths:["125 mg/5 ml","250 mg","500 mg"],uomGroup:"mg",brandExamples:["Amoxil","Mox","Trimox"],brandCount:28,updatedAt:"2025-10-04T10:15:00+05:30"},{id:"MED-AZTH",molecule:"Azithromycin",forms:["Tablet","Suspension"],strengths:["200 mg/5 ml","250 mg","500 mg"],uomGroup:"mg",brandExamples:["Azithral","Zithromax"],brandCount:31,updatedAt:"2025-10-04T08:20:00+05:30"},{id:"MED-PARA",molecule:"Paracetamol",forms:["Tablet","Syrup","Suppository"],strengths:["125 mg/5 ml","250 mg/5 ml","500 mg","650 mg"],uomGroup:"mg",brandExamples:["Crocin","Calpol","Tylenol"],brandCount:52,updatedAt:"2025-10-03T17:32:00+05:30"},{id:"MED-IBU",molecule:"Ibuprofen",forms:["Tablet","Suspension","Gel"],strengths:["100 mg/5 ml","200 mg","400 mg"],uomGroup:"mg",brandExamples:["Brufen","Advil"],brandCount:22,updatedAt:"2025-10-02T12:05:00+05:30"},{id:"MED-METF",molecule:"Metformin",forms:["Tablet","Tablet ER"],strengths:["250 mg","500 mg","750 mg","1000 mg"],uomGroup:"mg",brandExamples:["Glycomet","Glucophage"],brandCount:26,updatedAt:"2025-10-04T09:42:00+05:30"},{id:"MED-ATOR",molecule:"Atorvastatin",forms:["Tablet"],strengths:["5 mg","10 mg","20 mg","40 mg"],uomGroup:"mg",brandExamples:["Atorlip","Lipitor"],brandCount:18,updatedAt:"2025-09-29T11:10:00+05:30"},{id:"MED-OMEP",molecule:"Omeprazole",forms:["Capsule","Tablet"],strengths:["10 mg","20 mg","40 mg"],uomGroup:"mg",brandExamples:["Omez","Prilosec"],brandCount:16,updatedAt:"2025-10-01T10:00:00+05:30"},{id:"MED-PANTO",molecule:"Pantoprazole",forms:["Tablet","Injection"],strengths:["20 mg","40 mg"],uomGroup:"mg",brandExamples:["Pantocid","Protonix"],brandCount:19,updatedAt:"2025-10-03T10:36:00+05:30"},{id:"MED-CEFI",molecule:"Cefixime",forms:["Tablet","Dispersible Tablet","Suspension"],strengths:["50 mg/5 ml","100 mg","200 mg"],uomGroup:"mg",brandExamples:["Suprax","Taxim-O"],brandCount:21,updatedAt:"2025-10-04T07:04:00+05:30"},{id:"MED-DOXY",molecule:"Doxycycline",forms:["Capsule","Tablet"],strengths:["50 mg","100 mg"],uomGroup:"mg",brandExamples:["Doxy-1","Vibramycin"],brandCount:15,updatedAt:"2025-09-28T13:44:00+05:30"},{id:"MED-SALB",molecule:"Salbutamol",forms:["Inhaler","Syrup","Neb Solution"],strengths:["100 mcg/dose","2 mg/5 ml","5 mg/ml"],uomGroup:"mcg",brandExamples:["Ventolin","Asthalin"],brandCount:14,updatedAt:"2025-10-04T06:40:00+05:30"},{id:"MED-LEVOC",molecule:"Levocetirizine",forms:["Tablet","Syrup"],strengths:["2.5 mg/5 ml","5 mg"],uomGroup:"mg",brandExamples:["Xyzal","Levocet"],brandCount:17,updatedAt:"2025-10-02T18:21:00+05:30"},{id:"MED-CETI",molecule:"Cetirizine",forms:["Tablet","Syrup"],strengths:["1 mg/ml","5 mg","10 mg"],uomGroup:"mg",brandExamples:["Cetzine","Zyrtec"],brandCount:24,updatedAt:"2025-10-03T14:51:00+05:30"},{id:"MED-VITD3",molecule:"Cholecalciferol (Vit D3)",forms:["Softgel","Granules","Drops"],strengths:["60000 IU","400 IU/drop"],uomGroup:"IU",brandExamples:["D-Rise","Calcirol"],brandCount:12,updatedAt:"2025-10-04T09:00:00+05:30"},{id:"MED-VITB12",molecule:"Cyanocobalamin (Vit B12)",forms:["Tablet","Injection"],strengths:["500 mcg","1000 mcg"],uomGroup:"mcg",brandExamples:["Cobadex","Milgamma"],brandCount:9,updatedAt:"2025-10-01T19:30:00+05:30"},{id:"MED-INS",molecule:"Insulin (Regular)",forms:["Injection"],strengths:["100 IU/ml"],uomGroup:"IU",brandExamples:["Actrapid"],brandCount:6,updatedAt:"2025-09-30T08:02:00+05:30"},{id:"MED-PVID",molecule:"Povidone Iodine",forms:["Solution","Ointment","Gargle"],strengths:["5 %","10 %"],uomGroup:"%",brandExamples:["Betadine"],brandCount:8,updatedAt:"2025-10-02T16:10:00+05:30"},{id:"MED-CHX",molecule:"Chlorhexidine",forms:["Mouthwash","Solution"],strengths:["0.2 %"],uomGroup:"%",brandExamples:["Hexidine"],brandCount:5,updatedAt:"2025-10-03T11:11:00+05:30"},{id:"MED-DICL",molecule:"Diclofenac",forms:["Tablet","Gel","Injection"],strengths:["50 mg","75 mg/ml"],uomGroup:"mg",brandExamples:["Voveran","Voltaren"],brandCount:20,updatedAt:"2025-10-01T09:27:00+05:30"}],A=i=>[...new Set(i)],M=i=>i.reduce((b,o)=>b.concat(o),[]),V=()=>{const i=R(),b=n.useRef(null),[o,f]=n.useState(""),[x,d]=n.useState("All"),[m,j]=n.useState("All"),[y,S]=n.useState("alpha"),[E,k]=n.useState(""),G=n.useMemo(()=>A(M(u.map(s=>s.forms))),[]),I=n.useMemo(()=>A(u.map(s=>s.uomGroup)),[]),F=n.useMemo(()=>{const s=u.reduce((l,t)=>Math.max(l,new Date(t.updatedAt).getTime()),0);return new Date(s)},[]),$=n.useMemo(()=>{const s=o.trim().toLowerCase().split(/\s+/).filter(Boolean);let l=u.filter(t=>{const p=[t.molecule,t.forms.join(" "),t.strengths.join(" "),t.brandExamples.join(" "),t.uomGroup].join(" ").toLowerCase(),L=s.length===0||s.every(O=>p.includes(O)),B=x==="All"||t.forms.includes(x),P=m==="All"||t.uomGroup===m;return L&&B&&P});return y==="brands"?l.sort((t,p)=>p.brandCount-t.brandCount||t.molecule.localeCompare(p.molecule)):y==="updated"?l.sort((t,p)=>new Date(p.updatedAt)-new Date(t.updatedAt)):l.sort((t,p)=>t.molecule.localeCompare(p.molecule)),l},[o,x,m,y]),T=n.useMemo(()=>({molecules:u.length,forms:A(M(u.map(s=>s.forms))).length,uoms:A(u.map(s=>s.uomGroup)).length}),[]),U=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},z=s=>{try{navigator.clipboard.writeText(window.location.origin+"/react-routes-theme/"+s.replace(/^\//,"")),k(s),setTimeout(()=>k(""),2e3)}catch{}};return n.useEffect(()=>{const s=document.getElementById("strengths-search");if(!s)return;const l=requestAnimationFrame(()=>{try{s.focus({preventScroll:!0})}catch{s.focus()}});return()=>cancelAnimationFrame(l)},[]),e.jsxs(C.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs(C.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Medicine Strengths"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(v,{to:"/medicines",children:"Medicines"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Strengths"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total Molecules: ",T.molecules]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Forms: ",T.forms]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["UoM Groups: ",T.uoms]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Last Update: ",D(F,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:U,title:"Print this list",children:"Print"}),e.jsx("button",{className:"btnDisabled",title:"Demo only — adding is disabled",children:"Add Strength"}),e.jsx("button",{className:"btnDisabled",title:"Demo only — import is disabled",children:"Import"}),e.jsx("button",{className:"btnDisabled",title:"Demo only — export is disabled",children:"Export"})]})]}),e.jsx(C.Filters,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"cell grow",children:[e.jsx("label",{htmlFor:"strengths-search",children:"Search"}),e.jsx("input",{id:"strengths-search",type:"text",placeholder:"Search molecule, form, strength, brand…",value:o,onChange:s=>f(s.target.value)})]}),e.jsxs("div",{className:"cell",children:[e.jsx("label",{children:"Form"}),e.jsxs("div",{className:"pills",children:[e.jsx("button",{className:x==="All"?"pill active":"pill",onClick:()=>d("All"),title:"All forms",children:"All"}),G.map(s=>e.jsx("button",{className:x===s?"pill active":"pill",onClick:()=>d(s),title:s,children:s},s))]})]}),e.jsxs("div",{className:"cell",children:[e.jsx("label",{children:"Unit"}),e.jsxs("div",{className:"pills",children:[e.jsx("button",{className:m==="All"?"pill active":"pill",onClick:()=>j("All"),children:"All"}),I.map(s=>e.jsx("button",{className:m===s?"pill active":"pill",onClick:()=>j(s),children:s},s))]})]}),e.jsxs("div",{className:"cell",children:[e.jsx("label",{children:"Sort"}),e.jsxs("select",{value:y,onChange:s=>S(s.target.value),children:[e.jsx("option",{value:"alpha",children:"A → Z (Molecule)"}),e.jsx("option",{value:"brands",children:"Brands (High → Low)"}),e.jsx("option",{value:"updated",children:"Recently Updated"})]})]}),e.jsxs("div",{className:"cell",children:[e.jsx("label",{children:" "}),e.jsx("button",{className:"btnGhost",onClick:()=>{f(""),d("All"),j("All"),S("alpha")},children:"Reset"})]})]})}),e.jsxs(C.Grid,{children:[e.jsxs("section",{className:"col main card",id:"search-print-area",ref:b,children:[e.jsxs("div",{className:"tableHead",children:[e.jsxs("div",{className:"titleLeft",children:[e.jsx("h3",{children:"Catalog"}),e.jsxs("span",{className:"sub",children:["Showing ",$.length," of ",u.length]})]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"chip legendItem",children:"Tablet"}),e.jsx("span",{className:"chip legendItem",children:"Capsule"}),e.jsx("span",{className:"chip legendItem",children:"Syrup"}),e.jsx("span",{className:"chip legendItem",children:"Injection"}),e.jsx("span",{className:"chip legendItem",children:"Inhaler"})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"26%"},children:"Molecule"}),e.jsx("th",{style:{width:"24%"},children:"Forms"}),e.jsx("th",{style:{width:"26%"},children:"Strengths"}),e.jsx("th",{style:{width:"10%"},children:"UoM"}),e.jsx("th",{style:{width:"14%"},children:"Brands"})]})}),e.jsxs("tbody",{children:[$.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"molecule",children:[e.jsx("strong",{children:s.molecule}),e.jsxs("div",{className:"muted",children:["Updated: ",D(s.updatedAt,!0)]})]})}),e.jsx("td",{children:e.jsx("div",{className:"chips",children:s.forms.map(l=>e.jsx("span",{className:"chip",onClick:()=>d(l),role:"button",title:`Filter by ${l}`,children:l},l))})}),e.jsx("td",{className:"mono",children:s.strengths.join(", ")}),e.jsx("td",{className:"mono",children:s.uomGroup}),e.jsx("td",{children:e.jsxs("div",{className:"brandCell",children:[e.jsxs("span",{className:"count",children:[s.brandCount," brands"]}),e.jsx("div",{className:"examples",children:s.brandExamples.slice(0,3).map(l=>e.jsx("span",{className:"example",children:l},l))}),e.jsxs("div",{className:"rowActions",children:[e.jsx("button",{className:"linkBtn",onClick:()=>i(`/medicines/${s.id}`),title:"Open details",children:"Open"}),e.jsx("button",{className:"linkBtn",onClick:()=>z(`/medicines/${s.id}`),title:"Copy deep link",children:"Copy Link"})]})]})})]},s.id)),$.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"icon","aria-hidden":"true",children:"🔎"}),e.jsx("div",{children:"No results. Try clearing filters."})]})})})]})]})})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card info",children:[e.jsx("h3",{children:"What counts as a “Strength”"}),e.jsxs("p",{children:["Strengths represent labeled potency of a pharmaceutical product (e.g., ",e.jsx("span",{className:"mono",children:"500 mg"}),", ",e.jsx("span",{className:"mono",children:"125 mg/5 ml"}),", ",e.jsx("span",{className:"mono",children:"100 IU/ml"}),"). Forms contextualize dosing (Tablet, Capsule, Syrup, Injection, etc.)."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Units commonly used: ",e.jsx("span",{className:"mono",children:"mg"}),", ",e.jsx("span",{className:"mono",children:"mcg"}),", ",e.jsx("span",{className:"mono",children:"IU"}),", ",e.jsx("span",{className:"mono",children:"%"}),"."]}),e.jsxs("li",{children:["Suspensions and syrups indicate volume basis: ",e.jsx("span",{className:"mono",children:"mg/5 ml"}),", ",e.jsx("span",{className:"mono",children:"mg/ml"}),"."]}),e.jsx("li",{children:"Inhalers often use dose-based microgram notation."})]}),e.jsxs("div",{className:"links",children:[e.jsx(v,{to:"/medicines/forms",children:"See Forms"}),e.jsx(v,{to:"/medicines/hsn-gst",children:"HSN / GST"}),e.jsx(v,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"})]})]}),e.jsxs("div",{className:"card callout",children:[e.jsx("h3",{children:"Demo Mode"}),e.jsx("p",{children:"This catalog is display-only. Actions like Add, Import, Export are intentionally disabled here. Deep links still work—open any molecule and share the link."})]}),E&&e.jsxs("div",{className:"toast",role:"status","aria-live":"polite",children:["Copied: ",e.jsx("span",{className:"mono",children:E})]})]})]})]})};export{V as default};
