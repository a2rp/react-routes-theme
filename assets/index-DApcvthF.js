import{d as h,r as d,j as e,N as c}from"./index-BscvFKDB.js";const o="var(--text, #f3f4f6)",b="var(--muted, #a0a0a7)",i="var(--card, #111318)",s="var(--border, #23262d)",r="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",p={Page:h.div`
        display: grid;
        gap: 16px;
        color: ${o};
    `,Header:h.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        border-radius: 12px;
        border: 1px solid ${s};
        background: ${i};

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
            color: ${b};
        }
        .breadcrumbs .current {
            color: ${o};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${b};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${s};
            background: ${i};
            color: ${o};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${$};
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btnGhost a,
        .btnPrimary a {
            color: inherit;
            display: inline-flex;
            text-decoration: none;
        }
    `,Toolbar:h.section`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        border: 1px solid ${s};
        border-radius: 12px;
        background: ${i};
        padding: 12px 14px;

        @media (min-width: 980px) {
            grid-template-columns: 1.3fr 1fr 0.8fr 0.7fr auto;
            align-items: center;
        }

        .search input {
            width: 100%;
            height: 40px;
            border-radius: 8px;
            padding: 0 12px;
            border: 1px solid ${s};
            background: ${i};
            color: ${o};
            transition: border-color 0.25s, box-shadow 0.25s;
        }
        .search input:focus {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${$};
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .chip {
                border: 1px solid ${s};
                padding: 8px 10px;
                border-radius: 999px;
                color: ${o};
                background: transparent;
                transition: border-color 0.25s, color 0.25s, background 0.25s,
                    box-shadow 0.25s;
            }
            .chip:hover {
                border-color: ${r};
                color: ${r};
            }
            .chip.active {
                border-color: ${r};
                color: ${r};
                box-shadow: 0 0 0 3px ${$};
                background: color-mix(in oklab, ${r} 10%, transparent);
            }
        }

        .route {
            label {
                display: block;
                color: ${b};
                font-size: 12px;
                margin-bottom: 6px;
            }
            select {
                width: 100%;
                height: 40px;
                border-radius: 8px;
                padding: 0 10px;
                border: 1px solid ${s};
                background: ${i};
                color: ${o};
            }
            select:focus {
                border-color: ${r};
                box-shadow: 0 0 0 3px ${$};
                outline: none;
            }
        }

        .view .seg {
            display: inline-flex;
            border: 1px solid ${s};
            border-radius: 10px;
            overflow: hidden;
            button {
                border: none;
                background: transparent;
                color: ${o};
                padding: 8px 12px;
                cursor: pointer;
                transition: background 0.25s, color 0.25s;
            }
            button.active {
                background: color-mix(in oklab, ${r} 10%, transparent);
                color: ${o};
            }
            button:not(.active):hover {
                color: ${r};
            }
        }

        .right {
            display: flex;
            justify-content: flex-end;
        }
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${s};
            background: ${i};
            color: ${o};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `,TableWrap:h.section`
        border: 1px solid ${s};
        border-radius: 12px;
        overflow: hidden;
        background: ${i};

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            background: ${i};
            color: ${o};
            border-bottom: 1px solid ${s};
            padding: 12px;
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${s};
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .titleCell {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .titleCell .title {
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .muted {
            color: ${b};
        }

        .pill {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            padding: 4px 8px;
            border: 1px solid ${s};
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 8%, transparent);
        }

        .examples {
            max-width: 360px;
        }

        .rowActions {
            display: inline-flex;
            gap: 8px;
        }
        .linkBtn {
            background: transparent;
            border: 1px solid ${s};
            border-radius: 7px;
            padding: 6px 10px;
            color: ${o};
            cursor: pointer;
            text-decoration: none;
            transition: border-color 0.25s, color 0.25s, background 0.25s;
        }
        .linkBtn:hover {
            border-color: ${r};
            color: ${r};
        }
        .linkBtn.danger {
            opacity: 0.9;
        }
    `,Cards:h.section`
        border: 1px solid ${s};
        border-radius: 12px;
        background: ${i};
        padding: 14px;

        .grid {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 720px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (min-width: 1100px) {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        .cardItem {
            border: 1px solid ${s};
            border-radius: 12px;
            padding: 12px;
            background: color-mix(in oklab, ${i} 96%, transparent);
            display: grid;
            gap: 10px;
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            h3 {
                font-size: 16px;
                letter-spacing: 0.2px;
            }
            .pill {
                border: 1px solid ${s};
                border-radius: 999px;
                padding: 4px 8px;
                background: color-mix(in oklab, ${r} 8%, transparent);
            }
            .meta {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
            }
            .label {
                color: ${b};
                font-size: 12px;
            }
            .examples ul {
                margin-left: 16px;
            }
            .actions {
                display: flex;
                gap: 8px;
            }
            .btnGhost {
                border-radius: 8px;
                padding: 8px 14px;
                border: 1px solid ${s};
                background: ${i};
                color: ${o};
            }
            .btnGhost:hover {
                border-color: ${r};
                color: ${r};
            }
            .btnGhost.danger {
                opacity: 0.9;
            }
            .btnGhost:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    `,PrintBox:h.section`
        border: 1px solid ${s};
        border-radius: 12px;
        background: ${i};
        padding: 14px;
        h3 {
            margin-bottom: 8px;
        }
        .rows {
            display: grid;
            gap: 8px;
            margin-bottom: 12px;
        }
        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .k {
            color: ${b};
        }
        .v {
            color: ${o};
        }

        .miniTable {
            display: grid;
            gap: 6px;
            .head,
            .row {
                display: grid;
                grid-template-columns: 2fr 1fr 1.2fr 1.2fr 2fr;
                gap: 8px;
            }
            .head {
                font-weight: 700;
                color: ${o};
            }
            .row {
                color: ${o};
            }
        }
    `,Empty:h.div`
        padding: 24px;
        display: grid;
        gap: 10px;
        place-items: center;
        .icon {
            font-size: 28px;
        }
        .text h4 {
            font-size: 16px;
        }
        .muted {
            color: ${b};
        }
        .cta {
            margin-top: 6px;
        }
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${s};
            background: ${i};
            color: ${o};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `},N=(u,j)=>{const l=u instanceof Date?u:new Date(u),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=x=>String(x).padStart(2,"0");return`${`${m[l.getDay()]} ${y[l.getMonth()]} ${n(l.getDate())} ${l.getFullYear()}`} ${n(l.getHours())}:${n(l.getMinutes())}:${n(l.getSeconds())}hrs`},C=20,A=[{id:"FORM-001",name:"Tablet",abbrev:"Tab",route:"Oral",category:"Solid",examples:["Paracetamol 500","Cefixime 200"],commonUse:"General prescriptions",updatedAt:"2025-10-04T13:25:10Z"},{id:"FORM-002",name:"Capsule",abbrev:"Cap",route:"Oral",category:"Solid",examples:["Omeprazole 20","Doxycycline 100"],commonUse:"Gastro, antibiotics",updatedAt:"2025-10-04T12:05:45Z"},{id:"FORM-003",name:"Syrup",abbrev:"Syp",route:"Oral",category:"Liquid",examples:["Ambroxol","Paracetamol"],commonUse:"Paediatric dosing",updatedAt:"2025-10-04T09:11:19Z"},{id:"FORM-004",name:"Suspension",abbrev:"Susp",route:"Oral",category:"Liquid",examples:["Azithromycin 200/5ml"],commonUse:"Antibiotics (kids)",updatedAt:"2025-10-03T17:42:30Z"},{id:"FORM-005",name:"Injection",abbrev:"Inj",route:"Parenteral",category:"Parenteral",examples:["Ceftriaxone","Insulin"],commonUse:"Acute care",updatedAt:"2025-10-02T08:12:00Z"},{id:"FORM-006",name:"IV Infusion",abbrev:"IV",route:"Parenteral",category:"Parenteral",examples:["NS 0.9%","RL"],commonUse:"Fluid therapy",updatedAt:"2025-10-01T16:55:11Z"},{id:"FORM-007",name:"Ointment",abbrev:"Oint",route:"Topical",category:"Semi-solid",examples:["Mupirocin","Clobetasol"],commonUse:"Dermatology",updatedAt:"2025-09-30T10:03:50Z"},{id:"FORM-008",name:"Cream",abbrev:"Crm",route:"Topical",category:"Semi-solid",examples:["Clotrimazole","Hydrocortisone"],commonUse:"Derm / antifungal",updatedAt:"2025-09-29T14:40:21Z"},{id:"FORM-009",name:"Gel",abbrev:"Gel",route:"Topical",category:"Semi-solid",examples:["Diclofenac","Adapalene"],commonUse:"Analgesic / acne",updatedAt:"2025-09-28T07:38:10Z"},{id:"FORM-010",name:"Lotion",abbrev:"Lot",route:"Topical",category:"Liquid",examples:["Calamine","Permethrin"],commonUse:"Skin soothing",updatedAt:"2025-09-27T18:21:05Z"},{id:"FORM-011",name:"Eye Drops",abbrev:"ED",route:"Ophthalmic",category:"Liquid",examples:["Moxifloxacin","Carboxymethylcellulose"],commonUse:"Eye infections/dry eye",updatedAt:"2025-09-26T09:45:33Z"},{id:"FORM-012",name:"Ear Drops",abbrev:"EarD",route:"Otic",category:"Liquid",examples:["Ofloxacin","Neomycin/Beclo"],commonUse:"Otitis externa",updatedAt:"2025-09-26T09:45:33Z"},{id:"FORM-013",name:"Nasal Spray",abbrev:"NS",route:"Nasal",category:"Aerosol",examples:["Fluticasone","Oxymetazoline"],commonUse:"Rhinitis",updatedAt:"2025-09-25T11:00:41Z"},{id:"FORM-014",name:"Inhaler",abbrev:"Inh",route:"Inhalation",category:"Aerosol",examples:["Levosalbutamol","Budesonide"],commonUse:"Asthma/COPD",updatedAt:"2025-09-24T15:32:29Z"},{id:"FORM-015",name:"Powder",abbrev:"Pwd",route:"Oral/Topical",category:"Solid",examples:["ORS","Antifungal dusting"],commonUse:"Rehydration / skin",updatedAt:"2025-09-23T08:04:09Z"},{id:"FORM-016",name:"Sachet",abbrev:"Sach",route:"Oral",category:"Solid",examples:["Racecadotril","Probiotics"],commonUse:"Diarrhoea / gut",updatedAt:"2025-09-22T13:19:55Z"},{id:"FORM-017",name:"Suppository",abbrev:"Supp",route:"Rectal",category:"Solid",examples:["Glycerin","Paracetamol"],commonUse:"Paediatric / local",updatedAt:"2025-09-21T19:48:01Z"},{id:"FORM-018",name:"Transdermal Patch",abbrev:"Patch",route:"Transdermal",category:"Patch",examples:["Nitroglycerin","Fentanyl"],commonUse:"Chronic therapy",updatedAt:"2025-09-20T06:31:44Z"},{id:"FORM-019",name:"Mouthwash",abbrev:"MW",route:"Oral Rinse",category:"Liquid",examples:["Chlorhexidine","Fluoride"],commonUse:"Dentistry",updatedAt:"2025-09-19T12:57:13Z"},{id:"FORM-020",name:"Elixir",abbrev:"Elx",route:"Oral",category:"Liquid",examples:["Iron Elixir","Antihistamine"],commonUse:"Palatable liquids",updatedAt:"2025-09-18T17:26:39Z"}],P=[{key:"Solid",label:"Solid"},{key:"Liquid",label:"Liquid"},{key:"Semi-solid",label:"Semi-solid"},{key:"Parenteral",label:"Parenteral"},{key:"Aerosol",label:"Aerosol"},{key:"Patch",label:"Patch"}],G=["Oral","Parenteral","Topical","Ophthalmic","Otic","Inhalation","Nasal","Rectal","Transdermal","Oral Rinse","Oral/Topical"],E=()=>{const u=d.useMemo(()=>new Date,[]),[j,l]=d.useState(""),[m,y]=d.useState([]),[n,f]=d.useState("all"),[x,O]=d.useState("table"),T=d.useRef(null),k=d.useRef(null);d.useEffect(()=>{const a=requestAnimationFrame(()=>{var t,g;try{(t=k.current)==null||t.focus({preventScroll:!0})}catch{(g=k.current)==null||g.focus()}});return()=>cancelAnimationFrame(a)},[]);const R=a=>{y(t=>t.includes(a)?t.filter(g=>g!==a):[...t,a])},v=d.useMemo(()=>{const a=j.trim().toLowerCase();return A.filter(t=>{const g=!a||[t.name,t.abbrev,t.route,t.category,...t.examples,t.commonUse].join(" ").toLowerCase().includes(a),F=m.length===0||m.includes(t.category),M=n==="all"||t.route===n||n==="Oral/Topical"&&t.route==="Oral/Topical";return g&&F&&M})},[j,m,n]),w=()=>{l(""),y([]),f("all")},S=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(p.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(p.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Dosage Forms"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(c,{to:"/medicines",children:"Medicines"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Forms"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",C]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Last refreshed: ",N(u)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",title:"Open manufacturers",children:e.jsx(c,{to:"/medicines/manufacturers",children:"Manufacturers"})}),e.jsx("button",{className:"btnGhost",title:"Open molecules",children:e.jsx(c,{to:"/medicines/molecules",children:"Molecules"})}),e.jsx("button",{className:"btnGhost",title:"Inventory batches",children:e.jsx(c,{to:"/inventory/batches",children:"Batches"})}),e.jsx("button",{className:"btnGhost",title:"Reports",children:e.jsx(c,{to:"/reports/inventory",children:"Inventory Report"})}),e.jsx("button",{className:"btnPrimary",onClick:S,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnPrimary",title:"Import / Export",children:e.jsx(c,{to:"/tools/import-export",children:"Export"})}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo: action disabled",children:"New Form"})]})]}),e.jsxs(p.Toolbar,{className:"card",children:[e.jsx("div",{className:"search",children:e.jsx("input",{ref:k,type:"text",value:j,onChange:a=>l(a.target.value),placeholder:"Search by name, abbrev, route, example...","aria-label":"Search dosage forms"})}),e.jsx("div",{className:"chips",children:P.map(a=>e.jsx("button",{className:`chip ${m.includes(a.key)?"active":""}`,onClick:()=>R(a.key),"aria-pressed":m.includes(a.key),title:a.label,children:a.label},a.key))}),e.jsxs("div",{className:"route",children:[e.jsx("label",{children:"Route"}),e.jsxs("select",{value:n,onChange:a=>f(a.target.value),children:[e.jsx("option",{value:"all",children:"All"}),G.map(a=>e.jsx("option",{value:a,children:a},a))]})]}),e.jsx("div",{className:"view",children:e.jsxs("div",{className:"seg",role:"tablist","aria-label":"View mode",children:[e.jsx("button",{role:"tab","aria-selected":x==="table",className:x==="table"?"active":"",onClick:()=>O("table"),children:"Table"}),e.jsx("button",{role:"tab","aria-selected":x==="cards",className:x==="cards"?"active":"",onClick:()=>O("cards"),children:"Cards"})]})}),e.jsx("div",{className:"right",children:e.jsx("button",{className:"btnGhost",onClick:w,title:"Reset all filters",children:"Reset"})})]}),x==="table"?e.jsx(p.TableWrap,{className:"card",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Form"}),e.jsx("th",{children:"Abbrev"}),e.jsx("th",{children:"Route"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Examples"}),e.jsx("th",{children:"Notes"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),e.jsxs("tbody",{children:[v.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"titleCell",children:[e.jsx("span",{className:"title",children:a.name}),e.jsxs("span",{className:"muted",children:["#",a.id]})]})}),e.jsx("td",{children:e.jsx("span",{className:"pill",children:a.abbrev})}),e.jsx("td",{children:a.route}),e.jsx("td",{children:a.category}),e.jsx("td",{className:"examples",children:a.examples.join(", ")}),e.jsx("td",{className:"muted",children:a.commonUse}),e.jsx("td",{className:"muted",children:N(a.updatedAt)}),e.jsx("td",{style:{textAlign:"right"},children:e.jsxs("div",{className:"rowActions",children:[e.jsx(c,{to:"/medicines",title:"View related items",className:"linkBtn",children:"View Items"}),e.jsx("button",{className:"linkBtn",disabled:!0,title:"Demo: action disabled",children:"Edit"}),e.jsx("button",{className:"linkBtn danger",disabled:!0,title:"Demo: action disabled",children:"Archive"})]})})]},a.id)),v.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsxs(p.Empty,{children:[e.jsx("div",{className:"icon","aria-hidden":"true",children:"🔎"}),e.jsxs("div",{className:"text",children:[e.jsx("h4",{children:"No forms match your filters"}),e.jsx("p",{className:"muted",children:"Try clearing filters or checking a different category/route."})]}),e.jsx("div",{className:"cta",children:e.jsx("button",{className:"btnGhost",onClick:w,children:"Clear Filters"})})]})})})]})]})}):e.jsx(p.Cards,{className:"card",children:e.jsxs("div",{className:"grid",children:[v.map(a=>e.jsxs("article",{className:"cardItem",children:[e.jsxs("header",{children:[e.jsx("h3",{children:a.name}),e.jsx("span",{className:"pill",children:a.abbrev})]}),e.jsxs("section",{className:"meta",children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Route"}),e.jsx("span",{children:a.route})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Category"}),e.jsx("span",{children:a.category})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Updated"}),e.jsx("span",{className:"muted",children:N(a.updatedAt)})]})]}),e.jsxs("section",{className:"examples",children:[e.jsx("div",{className:"label",children:"Examples"}),e.jsx("ul",{children:a.examples.map(t=>e.jsx("li",{children:t},t))})]}),e.jsxs("footer",{className:"actions",children:[e.jsx(c,{to:"/medicines",className:"btnGhost",title:"View related items",children:"View Items"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo: action disabled",children:"Edit"}),e.jsx("button",{className:"btnGhost danger",disabled:!0,title:"Demo: action disabled",children:"Archive"})]})]},a.id)),v.length===0&&e.jsxs(p.Empty,{className:"card",children:[e.jsx("div",{className:"icon","aria-hidden":"true",children:"🔎"}),e.jsxs("div",{className:"text",children:[e.jsx("h4",{children:"No forms match your filters"}),e.jsx("p",{className:"muted",children:"Try clearing filters or checking a different category/route."})]}),e.jsx("div",{className:"cta",children:e.jsx("button",{className:"btnGhost",onClick:w,children:"Clear Filters"})})]})]})}),e.jsxs(p.PrintBox,{className:"card",id:"search-print-area",ref:T,children:[e.jsx("h3",{children:"Forms Summary"}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Generated"}),e.jsx("span",{className:"v",children:N(u)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Catalog"}),e.jsx("span",{className:"v",children:"Medicines → Forms"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Overview"}),e.jsx("span",{className:"v",children:"Oral, Parenteral, Topical, Aerosols and more. Common examples included for easy cross-check."})]})]}),e.jsxs("div",{className:"miniTable",children:[e.jsxs("div",{className:"head",children:[e.jsx("div",{children:"Form"}),e.jsx("div",{children:"Abbrev"}),e.jsx("div",{children:"Route"}),e.jsx("div",{children:"Category"}),e.jsx("div",{children:"Example"})]}),A.slice(0,12).map(a=>e.jsxs("div",{className:"row",children:[e.jsx("div",{children:a.name}),e.jsx("div",{children:a.abbrev}),e.jsx("div",{children:a.route}),e.jsx("div",{children:a.category}),e.jsx("div",{children:a.examples[0]})]},a.id))]})]})]})};export{E as default};
