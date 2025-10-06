import{d as x,r as h,j as e,N as m}from"./index-CqBbF2bz.js";const l="var(--text, #f3f4f6)",g="var(--muted, #a0a0a7)",c="var(--card, #111318)",r="var(--border, #23262d)",t="var(--accent, #5aa9ff)",P="var(--accent-soft, rgba(90,169,255,0.15))",q={Page:x.div`
        padding: 24px 0 64px;
        color: ${l};
    `,Header:x.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${g};
        }
        .breadcrumbs .current {
            color: ${l};
        }

        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${g};
            font-size: 12px;
        }

        .r {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${c};
            color: ${l};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${t};
            color: ${t};
            box-shadow: 0 0 0 3px ${P};
        }
        .btnGhost:hover {
            border-color: ${t};
            color: ${t};
        }
    `,Grid:x.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .main {
            padding: 16px 18px;
        }

        .toolbar {
            margin-bottom: 12px;
            .row {
                display: grid;
                grid-template-columns: 1fr 220px 140px;
                gap: 12px;
            }
            .field {
                display: grid;
                gap: 6px;
            }
            .grow {
                grid-column: 1 / span 1;
            }
            .actions {
                align-self: end;
            }
            input,
            select {
                width: 100%;
            }
            .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 12px;
            }
            .chip {
                border: 1px solid ${r};
                background: ${c};
                color: ${l};
                border-radius: 999px;
                padding: 6px 10px;
                font-weight: 600;
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                    background 0.25s, transform 0.05s;
            }
            .chip:hover {
                border-color: ${t};
                color: ${t};
            }
            .chip.on {
                background: color-mix(in oklab, ${t} 10%, transparent);
                border-color: ${t};
                color: ${l};
            }
            .chip:active {
                transform: translateY(1px);
            }
        }

        .legend {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 6px 0 12px;
            .pill {
                border: 1px solid ${r};
                border-radius: 20px;
                padding: 4px 10px;
                font-weight: 700;
                font-size: 12px;
                color: ${l};
            }
        }

        .tableWrap {
            border: 1px solid ${r};
            border-radius: 12px;
            overflow: hidden;
            background: color-mix(in oklab, ${c} 96%, transparent);
        }

        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 13px;
            line-height: 1.6;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${c};
            color: ${l};
            text-align: left;
            padding: 10px 12px;
            border-bottom: 1px solid ${r};
        }
        tbody td {
            padding: 10px 12px;
            border-bottom: 1px solid ${r};
            vertical-align: top;
        }
        tbody tr:hover td {
            background: rgba(0, 0, 0, 0.08);
        }
        .empty {
            text-align: center;
            padding: 24px;
            color: ${g};
        }

        code.hsn {
            background: color-mix(in oklab, ${t} 10%, transparent);
            padding: 2px 6px;
            border-radius: 6px;
            border: 1px solid ${r};
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .cat {
            font-weight: 700;
        }
        .formtags {
            margin-top: 4px;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .formtag {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${r};
            background: ${c};
            color: ${l};
            font-size: 12px;
        }
        .examples {
            display: grid;
            gap: 4px;
        }
        .ex {
            display: inline-block;
            border: 1px solid ${r};
            background: ${c};
            padding: 2px 6px;
            border-radius: 6px;
        }
        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 48px;
            padding: 4px 8px;
            border-radius: 8px;
            border: 1px solid ${r};
            background: ${c};
            font-weight: 800;
        }

        /* badge color variants derived from accent for visual rhythm */
        .rateZero {
            background: color-mix(in oklab, ${t} 6%, transparent);
        }
        .rateLow {
            background: color-mix(in oklab, ${t} 10%, transparent);
        }
        .rateMid {
            background: color-mix(in oklab, ${t} 14%, transparent);
        }
        .rateHigh {
            background: color-mix(in oklab, ${t} 18%, transparent);
        }

        .muted {
            color: ${g};
        }
    `,Side:x.aside``,Stats:x.div``,Card:x.div``,_:x.div`
        .card {
            background: ${c};
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
            padding: 16px;
            color: ${l};
        }
        .card h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .side {
            display: grid;
            gap: 16px;
        }

        .stats .kv {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .stats .kv li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid ${r};
            border-radius: 10px;
            padding: 8px 10px;
            background: ${c};
        }
        .stats .kv span {
            color: ${g};
        }
        .stats .kv strong {
            font-size: 16px;
            letter-spacing: 0.3px;
        }

        .quicklinks ul,
        .guide ol {
            margin: 0;
            padding-left: 18px;
        }
        .quicklinks ul {
            list-style: disc;
        }
        .guide ol {
            list-style: decimal;
        }
        .quicklinks a {
            color: ${g};
        }
        .quicklinks a:hover {
            color: ${t};
        }

        .faq details {
            border: 1px solid ${r};
            border-radius: 10px;
            background: ${c};
            padding: 10px 12px;
            margin-bottom: 8px;
            transition: border-color 0.25s;
        }
        .faq details:hover {
            border-color: ${t};
        }
        .faq summary {
            cursor: pointer;
            font-weight: 700;
        }
        .faq p {
            margin-top: 8px;
            color: ${l};
        }
    `},w=o=>String(o).padStart(2,"0"),S=(o,T=!1)=>{const d=o instanceof Date?o:new Date(o),u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=`${u[d.getDay()]} ${y[d.getMonth()]} ${w(d.getDate())} ${d.getFullYear()}`;return T?`${p} ${w(d.getHours())}:${w(d.getMinutes())}:${w(d.getSeconds())}hrs`:p},G=[{hsn:"3004",category:"Medicaments, retail pack",examples:["Paracetamol Tablets 500mg","Azithromycin 250mg"],gst:12,uqc:"Pack / Box",notes:"Non-specified brand names, allopathic formulary.",effective:"2025-09-01T09:30:00+05:30",form:["Tablet","Capsule"]},{hsn:"3003",category:"Medicaments, not put up for retail sale",examples:["Bulk Ibuprofen API","Bulk Amoxicillin API"],gst:12,uqc:"KG",notes:"Bulk ingredients for further manufacture.",effective:"2025-08-10T10:00:00+05:30",form:["API"]},{hsn:"3002",category:"Human blood; antisera; vaccines",examples:["Vaccines (routine immunization)"],gst:5,uqc:"Vial",notes:"Biologicals in cold-chain.",effective:"2025-07-15T12:00:00+05:30",form:["Vaccine"]},{hsn:"3006",category:"Pharmaceutical goods (first-aid boxes, etc.)",examples:["First Aid Kit","Diagnostic strips"],gst:18,uqc:"Unit",notes:"Kits, dressings, testing strips.",effective:"2025-06-20T11:45:00+05:30",form:["Kit","Accessory"]},{hsn:"3005",category:"Wadding, gauze, bandages",examples:["Gauze Roll 10cm","Adhesive Bandage"],gst:12,uqc:"Roll / Pack",notes:"Sterile / non-sterile dressings.",effective:"2025-05-01T08:15:00+05:30",form:["Dressing"]},{hsn:"9018",category:"Instruments & appliances for medical use",examples:["Syringe (disposable)","Thermometer (digital)"],gst:12,uqc:"Unit",notes:"General medical instruments, disposables.",effective:"2025-03-22T16:10:00+05:30",form:["Device"]},{hsn:"3306",category:"Oral hygiene preparations",examples:["Medicated Mouthwash 0.2%"],gst:18,uqc:"Bottle",notes:"Borderline goods depend on active & label claims.",effective:"2025-02-02T14:05:00+05:30",form:["Liquid"]},{hsn:"3001",category:"Glands and other organs (exa. heparin)",examples:["Heparin (pharmaceutical)"],gst:5,uqc:"Vial",notes:"Special biological extracts.",effective:"2025-01-12T10:25:00+05:30",form:["Injectable"]}],D=o=>o===0?"rateZero":o<=5?"rateLow":o<=12?"rateMid":"rateHigh",B=()=>{const o=h.useRef(null),T="2025-10-06T03:25:08.920Z",d="2025-10-06T08:55:04+05:30",[u,y]=h.useState(""),[p,M]=h.useState("all"),[f,A]=h.useState({Tablet:!1,Capsule:!1,Syrup:!1,Vaccine:!1,Dressing:!1,Device:!1,API:!1,Kit:!1,Accessory:!1,Injectable:!1,Liquid:!1}),C=h.useMemo(()=>Object.entries(f).filter(([,s])=>s).map(([s])=>s),[f]),k=h.useMemo(()=>{const s=u.trim().toLowerCase().split(/\s+/).filter(Boolean);return G.filter(i=>{const n=[i.hsn,i.category,...i.examples||[],i.notes].join(" ").toLowerCase(),j=s.length===0||s.every(a=>n.includes(a)),$=p==="all"?!0:String(i.gst)===p,v=C.length===0?!0:(i.form||[]).some(a=>C.includes(a));return j&&$&&v})},[u,p,C]),b=h.useMemo(()=>{const s={total:G.length,v0:0,v5:0,v12:0,v18:0};return G.forEach(i=>{i.gst===0?s.v0++:i.gst===5?s.v5++:i.gst===12?s.v12++:i.gst===18&&s.v18++}),s},[]),L=()=>{const s=new Blob([JSON.stringify(k,null,2)],{type:"application/json"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download="hsn-gst-mapping.json",n.click(),URL.revokeObjectURL(i)},R=()=>{const s=["HSN","Category","Examples","GST%","UQC","Notes","Effective From"],i=k.map(a=>{var N;return[a.hsn,a.category,(a.examples||[]).join(" | "),a.gst,a.uqc,(N=a.notes)==null?void 0:N.replace(/\n|\r/g," "),S(a.effective,!0)]}),n=[s,...i].map(a=>a.map(N=>`"${String(N).replace(/"/g,'""')}"`).join(",")).join(`
`),j=new Blob([n],{type:"text/csv;charset=utf-8;"}),$=URL.createObjectURL(j),v=document.createElement("a");v.href=$,v.download="hsn-gst-mapping.csv",v.click(),URL.revokeObjectURL($)},H=()=>{y(""),M("all"),A(s=>Object.fromEntries(Object.keys(s).map(i=>[i,!1])))},O=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(q.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }

          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(q.Header,{className:"card",children:[e.jsxs("div",{className:"l",children:[e.jsx("h1",{children:"HSN & GST Mapping"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(m,{to:"/medicines",children:"Medicines"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"HSN & GST"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Build: ",S(T,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Commit: ",S(d,!0)]})]})]}),e.jsxs("div",{className:"r",children:[e.jsx("button",{className:"btnGhost",onClick:R,title:"Download CSV",children:"Export CSV"}),e.jsx("button",{className:"btnGhost",onClick:L,title:"Download JSON",children:"Export JSON"}),e.jsx("button",{className:"btnPrimary",onClick:O,title:"Print this list",children:"Print"})]})]}),e.jsxs(q.Grid,{children:[e.jsxs("section",{className:"card main",children:[e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field grow",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{value:u,onChange:s=>y(s.target.value),placeholder:"HSN, category, example, note…","aria-label":"Search HSN/GST mapping"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"GST Rate"}),e.jsxs("select",{value:p,onChange:s=>M(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"0",children:"0%"}),e.jsx("option",{value:"5",children:"5%"}),e.jsx("option",{value:"12",children:"12%"}),e.jsx("option",{value:"18",children:"18%"})]})]}),e.jsx("div",{className:"field actions",children:e.jsx("button",{className:"btnGhost",onClick:H,children:"Reset"})})]}),e.jsx("div",{className:"chips",children:Object.keys(f).map(s=>e.jsx("button",{className:`chip ${f[s]?"on":""}`,onClick:()=>A(i=>({...i,[s]:!i[s]})),"aria-pressed":f[s]?"true":"false",children:s},s))})]}),e.jsxs("div",{id:"search-print-area",ref:o,children:[e.jsxs("div",{className:"legend",children:[e.jsx("div",{className:"pill rateZero",children:"0%"}),e.jsx("div",{className:"pill rateLow",children:"5%"}),e.jsx("div",{className:"pill rateMid",children:"12%"}),e.jsx("div",{className:"pill rateHigh",children:"18%"}),e.jsx("div",{className:"muted",children:"Demo dataset for UI display"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{role:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"Category / Description"}),e.jsx("th",{children:"Examples"}),e.jsx("th",{children:"GST"}),e.jsx("th",{children:"UQC"}),e.jsx("th",{children:"Notes"}),e.jsx("th",{children:"Effective"})]})}),e.jsxs("tbody",{children:[k.map(s=>{var i;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"hsn",children:s.hsn})}),e.jsxs("td",{children:[e.jsx("div",{className:"cat",children:s.category}),(i=s.form)!=null&&i.length?e.jsx("div",{className:"formtags",children:s.form.map(n=>e.jsx("span",{className:"formtag",children:n},n))}):null]}),e.jsx("td",{className:"examples",children:(s.examples||[]).map((n,j)=>e.jsx("span",{className:"ex",children:n},j))}),e.jsx("td",{children:e.jsxs("span",{className:`badge ${D(s.gst)}`,children:[s.gst,"%"]})}),e.jsx("td",{children:s.uqc}),e.jsx("td",{className:"muted",children:s.notes}),e.jsx("td",{children:S(s.effective,!0)})]},`${s.hsn}-${s.category}`)}),k.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,className:"empty",children:"No matches for current filters."})})]})]})})]})]}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card stats",role:"status","aria-live":"polite",children:[e.jsx("h3",{children:"GST Summary"}),e.jsxs("ul",{className:"kv",children:[e.jsxs("li",{children:[e.jsx("span",{children:"Total"}),e.jsx("strong",{children:b.total})]}),e.jsxs("li",{children:[e.jsx("span",{children:"0%"}),e.jsx("strong",{children:b.v0})]}),e.jsxs("li",{children:[e.jsx("span",{children:"5%"}),e.jsx("strong",{children:b.v5})]}),e.jsxs("li",{children:[e.jsx("span",{children:"12%"}),e.jsx("strong",{children:b.v12})]}),e.jsxs("li",{children:[e.jsx("span",{children:"18%"}),e.jsx("strong",{children:b.v18})]})]})]}),e.jsxs("div",{className:"card quicklinks",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(m,{to:"/medicines",children:"Catalog"})}),e.jsx("li",{children:e.jsx(m,{to:"/medicines/manufacturers",children:"Manufacturers"})}),e.jsx("li",{children:e.jsx(m,{to:"/medicines/molecules",children:"Molecules"})}),e.jsx("li",{children:e.jsx(m,{to:"/medicines/forms",children:"Forms"})}),e.jsx("li",{children:e.jsx(m,{to:"/medicines/strengths",children:"Strengths"})}),e.jsx("li",{children:e.jsx(m,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"})})]})]}),e.jsxs("div",{className:"card guide",children:[e.jsx("h3",{children:"Mapping Guide"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Identify product classification and dosage form."}),e.jsx("li",{children:"Cross-check packaging (retail vs bulk)."}),e.jsx("li",{children:"Match with closest HSN description in list."}),e.jsx("li",{children:"Confirm applicable GST rate and effective date."}),e.jsx("li",{children:"Keep label claims consistent with chosen code."})]})]}),e.jsxs("div",{className:"card faq",children:[e.jsx("h3",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"What if an item fits multiple descriptions?"}),e.jsx("p",{children:"Choose the description that most closely aligns with its primary use, packaging, and label claim."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Are rates uniform across states?"}),e.jsx("p",{children:"This demo assumes uniform rates. Always verify with the latest notifications for specific cases."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"How do I handle kits with mixed items?"}),e.jsx("p",{children:"Classify by the essential character of the kit; if unclear, list components separately for clarity."})]})]})]})]})]})};export{B as default};
