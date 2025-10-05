import{d as C,a as S,u as R,r as x,j as e,N as s}from"./index-Dm9gfKqL.js";const m="var(--text, #f3f4f6)",j="var(--muted, #a0a0a7)",b="var(--card, #111318)",h="var(--border, #23262d)",i="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",B="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",E={Page:C.main`
        color: ${m};
        width: 100%;
        padding: 16px;

        .muted {
            color: ${j};
        }

        .crumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-bottom: 10px;
            a {
                color: ${m};
                text-decoration: none;
            }
            a:hover {
                color: ${i};
            }
            span {
                color: ${j};
            }
        }

        .header {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: center;
            margin-bottom: 16px;

            h1 {
                margin: 0;
            }
            .actions {
                display: flex;
                gap: 10px;
                align-items: center;
            }
            .seg {
                background: ${b};
                border: 1px solid ${h};
                border-radius: 10px;
                display: inline-flex;
                padding: 4px;
            }
            .seg-btn {
                border: 1px solid transparent;
                background: transparent;
                color: ${m};
                padding: 6px 12px;
                border-radius: 8px;
                cursor: pointer;
            }
            .seg-btn.active {
                border-color: ${i};
                color: ${i};
                box-shadow: 0 0 0 3px ${w};
                background: color-mix(in oklab, ${i} 10%, transparent);
            }

            .toolbar {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                input {
                    width: 320px;
                    max-width: 40vw;
                    background: ${b};
                    color: ${m};
                    border: 1px solid ${h};
                    border-radius: 8px;
                    padding: 8px 12px;
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }
                input:focus {
                    border-color: ${i};
                    box-shadow: 0 0 0 3px ${w};
                }
                button {
                    background: ${b};
                    border: 1px solid ${h};
                    color: ${m};
                    padding: 8px 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                button:hover {
                    border-color: ${i};
                    color: ${i};
                    background: rgba(0, 0, 0, 0.06);
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        .kpis {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 16px;
        }
        .card {
            background: ${b};
            border: 1px solid ${h};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${B};
        }
        .kpi .kpi-title {
            font-size: 12px;
            color: ${j};
            margin-bottom: 6px;
        }
        .kpi .kpi-value {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 6px;
            font-family: "Antonio", sans-serif;
        }
        .kpi .kpi-foot a {
            color: ${i};
            text-decoration: none;
            font-size: 12px;
        }
        .kpi .kpi-foot a:hover {
            text-decoration: underline;
        }

        .tableWrap {
            margin-top: 8px;
        }
        .tableHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin: 12px 2px;
            h2 {
                margin: 0;
            }
        }

        .table {
            overflow: hidden;
            padding: 0;
        }
        .table .thead,
        .table .row {
            display: grid;
            grid-template-columns: 140px 1.3fr 1fr 1fr 1fr 100px 120px 100px 140px 340px;
            gap: 8px;
            align-items: center;
        }
        .table .thead {
            position: sticky;
            top: 0;
            z-index: 2;
            background: ${b};
            border-bottom: 1px solid ${h};
            padding: 10px 12px;
            color: ${i};
            font-weight: 600;
        }
        .table .tbody .row {
            padding: 10px 12px;
            border-top: 1px solid ${h};
        }
        .table .tbody .row:hover {
            background: color-mix(in oklab, ${i} 8%, transparent);
        }

        .cell .name {
            font-weight: 600;
        }
        .cell .sub {
            font-size: 12px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${h};
            background: color-mix(in oklab, ${i} 8%, transparent);
            color: ${m};
        }
        .pill.off {
            opacity: 0.7;
        }

        .cell.actions {
            display: inline-flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            border: 1px solid ${h};
            background: ${b};
            color: ${m};
            cursor: pointer;
            font-size: 13px;
            transition: all 0.2s ease;
        }
        .btn:hover {
            border-color: ${i};
            color: ${i};
        }
        .btn.ghost {
            background: transparent;
        }

        .code a {
            color: ${m};
            text-decoration: none;
        }
        .code a:hover {
            color: ${i};
        }

        .panelsWrap .grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(280px, 1fr));
            gap: 12px;
        }
        .panel header {
            display: grid;
            gap: 4px;
        }
        .panel header .pid {
            font-size: 12px;
            color: ${j};
        }
        .panel .meta {
            display: grid;
            gap: 6px;
            margin: 8px 0;
        }
        .panel .meta .label {
            display: inline-block;
            width: 120px;
            color: ${j};
            font-size: 12px;
        }
        .panel .tests .label {
            color: ${j};
            font-size: 12px;
        }
        .panel .tests ul {
            margin: 6px 0 0 18px;
            display: grid;
            gap: 4px;
        }
        .panel .cta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        .quicknav {
            display: grid;
            grid-template-columns: 2fr 1.2fr 1fr;
            gap: 12px;
            margin-top: 16px;
            margin-bottom: 20px;
        }
        .quicknav .links {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            a {
                text-decoration: none;
                color: ${m};
            }
            a:hover {
                color: ${i};
            }
        }
        .mini {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        .chips {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${h};
            background: ${b};
            color: ${m};
            padding: 6px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .chip:hover {
            border-color: ${i};
            color: ${i};
        }

        /* Modal */
        .modalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.45);
            display: grid;
            place-items: center;
            z-index: 9999;
        }
        .modalCard {
            width: min(520px, 96vw);
        }
        .modalCard h3 {
            margin-top: 0;
        }
        .modalActions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 12px;
        }
    `};function $(r){const a=new Date(r);return a.toDateString().replace(/^\w{3}/,a.toDateString().slice(0,3))}function I(r){const a=new Date(r),o=a.toDateString(),d=a.toTimeString().split(" ")[0];return`${o} ${d}hrs`}const v=[{id:"LAB-CBC",name:"Complete Blood Count",department:"Hematology",specimen:"Whole Blood (EDTA)",container:"Lavender Top",tat:"4 hrs",price:"₹350",active:!0,updatedAt:"2025-10-04T14:22:10+05:30",vendor:"PathX Labs",panel:null,tags:["Routine","Baseline"]},{id:"LAB-LFT",name:"Liver Function Test",department:"Biochemistry",specimen:"Serum",container:"Red/Gold Top",tat:"6 hrs",price:"₹750",active:!0,updatedAt:"2025-10-03T17:14:45+05:30",vendor:"MedCore Diagnostics",panel:"PANEL-LIVER",tags:["Panel-Compatible"]},{id:"LAB-KFT",name:"Kidney Function Test",department:"Biochemistry",specimen:"Serum",container:"Red/Gold Top",tat:"6 hrs",price:"₹700",active:!0,updatedAt:"2025-10-01T10:02:00+05:30",vendor:"MedCore Diagnostics",panel:"PANEL-RENAL",tags:["Panel-Compatible"]},{id:"LAB-CRP",name:"C-Reactive Protein (CRP)",department:"Immunology",specimen:"Serum",container:"Red/Gold Top",tat:"8 hrs",price:"₹650",active:!0,updatedAt:"2025-10-04T09:40:22+05:30",vendor:"PathX Labs",panel:null,tags:["Inflammation"]},{id:"LAB-TSH",name:"Thyroid Stimulating Hormone (TSH)",department:"Endocrinology",specimen:"Serum",container:"Red/Gold Top",tat:"8 hrs",price:"₹500",active:!0,updatedAt:"2025-09-29T19:12:58+05:30",vendor:"CoreLab India",panel:"PANEL-THYROID",tags:["Hormonal","Panel-Compatible"]},{id:"LAB-LIPID",name:"Lipid Profile",department:"Biochemistry",specimen:"Serum (Fasting)",container:"Red/Gold Top",tat:"10 hrs",price:"₹900",active:!0,updatedAt:"2025-10-02T13:18:40+05:30",vendor:"CoreLab India",panel:"PANEL-LIPID",tags:["Fasting","Preventive"]},{id:"LAB-HBA1C",name:"HbA1c (Glycated Hemoglobin)",department:"Biochemistry",specimen:"Whole Blood (EDTA)",container:"Lavender Top",tat:"6 hrs",price:"₹600",active:!0,updatedAt:"2025-09-30T11:05:10+05:30",vendor:"PathX Labs",panel:null,tags:["Diabetes"]},{id:"LAB-VITD",name:"Vitamin D (25-OH)",department:"Immunoassay",specimen:"Serum",container:"Red/Gold Top",tat:"24 hrs",price:"₹1600",active:!0,updatedAt:"2025-09-28T16:55:50+05:30",vendor:"MedCore Diagnostics",panel:null,tags:["Wellness"]},{id:"LAB-PTINR",name:"Prothrombin Time (PT/INR)",department:"Coagulation",specimen:"Citrated Plasma",container:"Light Blue Top",tat:"3 hrs",price:"₹550",active:!0,updatedAt:"2025-10-04T08:01:11+05:30",vendor:"PathX Labs",panel:null,tags:["Pre-Op"]},{id:"LAB-URINE",name:"Urine Routine & Microscopy",department:"Urinalysis",specimen:"Urine",container:"Sterile Cup",tat:"3 hrs",price:"₹300",active:!0,updatedAt:"2025-10-04T07:40:20+05:30",vendor:"CoreLab India",panel:null,tags:["Routine"]}],T=[{id:"PANEL-LIVER",name:"Liver Panel",tests:["LAB-LFT"],department:"Biochemistry",price:"₹1500",tat:"10 hrs",updatedAt:"2025-10-01T12:22:10+05:30"},{id:"PANEL-RENAL",name:"Renal Panel",tests:["LAB-KFT"],department:"Biochemistry",price:"₹1400",tat:"10 hrs",updatedAt:"2025-09-30T10:44:30+05:30"},{id:"PANEL-THYROID",name:"Thyroid Panel",tests:["LAB-TSH"],department:"Endocrinology",price:"₹1200",tat:"12 hrs",updatedAt:"2025-09-27T16:10:00+05:30"},{id:"PANEL-LIPID",name:"Lipid Panel",tests:["LAB-LIPID"],department:"Biochemistry",price:"₹1500",tat:"12 hrs",updatedAt:"2025-09-25T18:22:20+05:30"}];function z(){const r=S(),a=R(),o=x.useRef(null),[d,f]=x.useState(()=>new URLSearchParams(r.search).get("q")??""),[l,N]=x.useState(()=>new URLSearchParams(r.search).get("tab")??"tests"),[k,g]=x.useState(!1);x.useEffect(()=>{const t=requestAnimationFrame(()=>{var n,p;try{(n=o.current)==null||n.focus({preventScroll:!0})}catch{(p=o.current)==null||p.focus()}});return()=>cancelAnimationFrame(t)},[]),x.useEffect(()=>{const t=new URLSearchParams(r.search);d?t.set("q",d):t.delete("q"),l?t.set("tab",l):t.delete("tab"),a({pathname:r.pathname,search:t.toString()},{replace:!0})},[d,l]);const y=x.useMemo(()=>{if(!d.trim())return v;const t=d.trim().toLowerCase().split(/\s+/).filter(Boolean);return v.filter(n=>{const p=[n.id,n.name,n.department,n.specimen,n.container,n.vendor,...n.tags||[]].join(" ").toLowerCase();return t.every(c=>p.includes(c))})},[d]),L=x.useMemo(()=>{if(!d.trim())return T;const t=d.trim().toLowerCase().split(/\s+/).filter(Boolean);return T.filter(n=>{const p=[n.id,n.name,n.department,n.price,n.tat].join(" ").toLowerCase();return t.every(c=>p.includes(c))})},[d]),P=()=>{const t=document.body;t.classList.add("print-section-mode");const n=()=>t.classList.remove("print-section-mode"),p=()=>setTimeout(n,0);if("onafterprint"in window){const c=window.onafterprint;window.onafterprint=()=>{c&&c(),p()}}window.print()},A=()=>{const t=l==="tests"?y:L,n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),p=URL.createObjectURL(n),c=document.createElement("a");c.href=p,c.download=l==="tests"?"lab-tests.json":"lab-panels.json",document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(p)},u={tests:v.length,panels:T.length,vendors:new Set(v.map(t=>t.vendor)).size,depts:new Set(v.map(t=>t.department)).size};return e.jsxs(E.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs("nav",{className:"crumbs","aria-label":"Breadcrumb",children:[e.jsx(s,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(s,{to:"/labs",children:"Labs"}),e.jsx("span",{children:"/"}),e.jsx("span",{"aria-current":"page",children:"Catalog"})]}),e.jsxs("header",{className:"header",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Lab Catalog"}),e.jsxs("p",{className:"muted",children:["Updated: ",I("2025-10-04T15:38:20+05:30")," • Departments: ",u.depts," • Vendors: ",u.vendors]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("div",{className:"seg",children:[e.jsxs("button",{className:`seg-btn ${l==="tests"?"active":""}`,onClick:()=>N("tests"),"aria-pressed":l==="tests",children:["Tests (",u.tests,")"]}),e.jsxs("button",{className:`seg-btn ${l==="panels"?"active":""}`,onClick:()=>N("panels"),"aria-pressed":l==="panels",children:["Panels (",u.panels,")"]})]}),e.jsxs("div",{className:"toolbar",children:[e.jsx("input",{ref:o,value:d,onChange:t=>f(t.target.value),placeholder:"Search tests, panels, specimen, vendor…","aria-label":"Search catalog"}),e.jsx("button",{onClick:A,title:"Export JSON",children:"Export"}),e.jsx("button",{onClick:P,title:"Print list",children:"Print"}),e.jsx("button",{onClick:()=>g(!0),disabled:!0,title:"Demo mode: action disabled",children:"New Test"})]})]})]}),e.jsxs("section",{className:"kpis","aria-label":"Catalog stats",children:[e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"kpi-title",children:"Total Tests"}),e.jsx("div",{className:"kpi-value",children:u.tests}),e.jsx("div",{className:"kpi-foot",children:e.jsx(s,{to:"/labs",title:"Open Labs",children:"Go to Labs"})})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"kpi-title",children:"Panels"}),e.jsx("div",{className:"kpi-value",children:u.panels}),e.jsx("div",{className:"kpi-foot",children:e.jsx("a",{href:"#panels",children:"Jump to Panels"})})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"kpi-title",children:"Vendors"}),e.jsx("div",{className:"kpi-value",children:u.vendors}),e.jsx("div",{className:"kpi-foot",children:e.jsx(s,{to:"/admin/integrations",title:"Vendor integrations",children:"Vendor Integrations"})})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"kpi-title",children:"Departments"}),e.jsx("div",{className:"kpi-value",children:u.depts}),e.jsx("div",{className:"kpi-foot",children:e.jsx(s,{to:"/settings/units",title:"Units",children:"Units & References"})})]})]}),e.jsx("div",{id:"search-print-area",children:l==="tests"?e.jsx(D,{data:y}):e.jsx(U,{data:L})}),e.jsxs("footer",{className:"quicknav",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/labs",children:"Labs Home"}),e.jsx(s,{to:"/labs/catalog",children:"Catalog"}),e.jsx(s,{to:"/patients",children:"Patients"}),e.jsx(s,{to:"/appointments",children:"Appointments"}),e.jsx(s,{to:"/orders",children:"Orders"}),e.jsx(s,{to:"/invoices",children:"Invoices"}),e.jsx(s,{to:"/reports",children:"Reports"}),e.jsx(s,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(s,{to:"/tools/import-export",children:"Import / Export"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Common Panels"}),e.jsx("ul",{className:"mini",children:T.map(t=>e.jsxs("li",{children:[e.jsx(s,{to:`/labs/catalog?tab=panels&q=${encodeURIComponent(t.name)}`,children:t.name}),e.jsxs("span",{className:"muted",children:[" • ",t.department]})]},t.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Specimen Types"}),e.jsx("ul",{className:"chips",children:["Serum","Plasma","Urine","Whole Blood","Citrated Plasma"].map(t=>e.jsx("li",{children:e.jsx("button",{className:"chip",onClick:()=>f(t),children:t})},t))})]})]}),k&&e.jsx(H,{title:"Action unavailable",message:"This is a display-only demo. Creating new tests is disabled.",confirmText:"Got it",onClose:()=>g(!1),onConfirm:()=>g(!1),single:!0})]})}function D({data:r}){return e.jsxs("section",{className:"tableWrap","aria-label":"Tests table",children:[e.jsxs("div",{className:"tableHead",children:[e.jsx("h2",{children:"Tests"}),e.jsxs("div",{className:"muted",children:["Showing ",r.length," records"]})]}),e.jsxs("div",{className:"table card",children:[e.jsxs("div",{className:"thead",children:[e.jsx("div",{children:"Code"}),e.jsx("div",{children:"Test"}),e.jsx("div",{children:"Department"}),e.jsx("div",{children:"Specimen"}),e.jsx("div",{children:"Container"}),e.jsx("div",{children:"TAT"}),e.jsx("div",{children:"Price"}),e.jsx("div",{children:"Status"}),e.jsx("div",{children:"Updated"}),e.jsx("div",{children:"Actions"})]}),e.jsx("div",{className:"tbody",children:r.map(a=>{var o;return e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"cell code",children:e.jsx(s,{to:`/labs/${a.id}`,title:"Open test",children:a.id})}),e.jsxs("div",{className:"cell",children:[e.jsx("div",{className:"name",children:a.name}),e.jsx("div",{className:"sub muted",children:(o=a.tags)==null?void 0:o.join(" • ")})]}),e.jsx("div",{className:"cell",children:a.department}),e.jsx("div",{className:"cell",children:a.specimen}),e.jsx("div",{className:"cell",children:a.container}),e.jsx("div",{className:"cell",children:a.tat}),e.jsx("div",{className:"cell",children:a.price}),e.jsx("div",{className:"cell",children:e.jsx("span",{className:`pill ${a.active?"ok":"off"}`,children:a.active?"Active":"Inactive"})}),e.jsx("div",{className:"cell",children:$(a.updatedAt)}),e.jsxs("div",{className:"cell actions",children:[e.jsx(s,{to:`/labs/${a.id}`,className:"btn",title:"View details",children:"View"}),a.panel?e.jsx(s,{to:`/labs/catalog?tab=panels&q=${encodeURIComponent(a.panel)}`,className:"btn",title:"Open panel",children:"Panel"}):e.jsx("button",{className:"btn ghost",disabled:!0,title:"No panel",children:"Panel"}),e.jsx(s,{to:"/admin/integrations",className:"btn",title:"Vendor",children:"Vendor"}),e.jsx(s,{to:"/settings/print-templates",className:"btn",title:"Templates",children:"Template"})]})]},a.id)})})]})]})}function U({data:r}){return e.jsxs("section",{id:"panels",className:"panelsWrap","aria-label":"Panels grid",children:[e.jsxs("div",{className:"tableHead",children:[e.jsx("h2",{children:"Panels"}),e.jsxs("div",{className:"muted",children:["Showing ",r.length," records"]})]}),e.jsx("div",{className:"grid",children:r.map(a=>e.jsxs("article",{className:"panel card",children:[e.jsxs("header",{children:[e.jsx("div",{className:"pid",children:a.id}),e.jsx("h3",{children:a.name})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Department"}),e.jsx("span",{children:a.department})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Price"}),e.jsx("span",{children:a.price})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"TAT"}),e.jsx("span",{children:a.tat})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Updated"}),e.jsx("span",{children:$(a.updatedAt)})]})]}),e.jsxs("div",{className:"tests",children:[e.jsx("div",{className:"label",children:"Includes"}),e.jsx("ul",{children:a.tests.map(o=>e.jsx("li",{children:e.jsx(s,{to:`/labs/${o}`,children:o})},o))})]}),e.jsxs("footer",{className:"cta",children:[e.jsx(s,{to:`/labs/catalog?tab=tests&q=${encodeURIComponent(a.name)}`,className:"btn",children:"View Tests"}),e.jsx(s,{to:"/reports/lab",className:"btn ghost",title:"Open lab reports",children:"Reports"}),e.jsx(s,{to:"/settings/print-templates",className:"btn ghost",title:"Print template",children:"Print Template"})]})]},a.id))})]})}function H({title:r,message:a,confirmText:o="OK",cancelText:d="Close",onConfirm:f,onClose:l,single:N=!1}){const k=x.useRef(null);return x.useEffect(()=>{const g=y=>{y.key==="Escape"&&(l==null||l())};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[l]),e.jsx("div",{className:"modalOverlay",ref:k,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:e.jsxs("div",{className:"modalCard card",children:[e.jsx("h3",{id:"modal-title",children:r}),e.jsx("p",{className:"muted",children:a}),e.jsxs("div",{className:"modalActions",children:[!N&&e.jsx("button",{onClick:l,children:"Cancel"}),e.jsx("button",{onClick:f,children:o})]})]})})}export{z as default};
