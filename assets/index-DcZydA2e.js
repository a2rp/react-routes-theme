import{d as v,u as I,a as P,r as o,j as e,N as U}from"./index-Dm9gfKqL.js";const m="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",C="var(--card, #111318)",u="var(--border, #23262d)",l="var(--accent, #5aa9ff)",A="var(--accent-soft, rgba(90,169,255,0.15))",w="var(--danger, #ef4444)",N={Page:v.div`
        padding: 24px 0 64px;
        color: ${m};

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
            color: ${m};
        }
    `,Header:v.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
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
            border: 1px solid ${u};
            background: ${C};
            color: ${m};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${A};
        }
        .btnGhost:hover {
            border-color: ${l};
            color: ${l};
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Kpis:v.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 12px;
        @media (min-width: 1100px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .k {
            padding: 14px 16px;
            display: grid;
            gap: 6px;
            border-radius: 12px;
        }
        .label {
            color: ${c};
            font-size: 12px;
        }
        .value {
            font-size: 22px;
            font-weight: 700;
        }
        .hint {
            color: ${c};
            font-size: 12px;
        }
    `,Filters:v.section`
        margin-bottom: 16px;
        padding: 14px 16px;
        border-radius: 12px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 1100px) {
            .row {
                grid-template-columns: 2fr 1fr 1fr 2fr auto;
                align-items: end;
            }
        }

        .field {
            display: grid;
            gap: 6px;
        }
        .field.end {
            justify-items: end;
        }

        .chipRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${u};
            background: ${C};
            color: ${m};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .chip.active,
        .chip:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${A};
        }
    `,Layout:v.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1200px) {
            grid-template-columns: 2fr 1fr;
        }

        .list {
            padding: 0;
            overflow: hidden;
        }

        .tableWrap {
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${C};
            border-bottom: 1px solid ${u};
            padding: 10px;
            text-align: left;
            color: ${l};
            z-index: 1;
        }
        tbody td {
            border-bottom: 1px solid ${u};
            padding: 10px;
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${l} 6%, transparent);
        }
        tbody tr.selected {
            background: color-mix(in oklab, ${l} 10%, transparent);
        }
        .idcell .muted {
            color: ${c};
            font-size: 12px;
        }
        td.num {
            text-align: right;
        }
        td.actions {
            white-space: nowrap;
        }
        .small {
            padding: 6px 10px;
        }

        .empty {
            padding: 18px;
            text-align: center;
        }
        .empty .title {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .empty .hint {
            color: ${c};
        }

        /* badges */
        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${u};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 700;
            background: color-mix(in oklab, ${l} 8%, transparent);
        }
        .badge.in-transit {
            color: ${m};
        }
        .badge.completed {
            color: ${m};
            background: color-mix(in oklab, ${l} 14%, transparent);
        }
        .badge.draft {
            color: ${c};
            background: color-mix(in oklab, ${l} 4%, transparent);
        }
        .badge.cancelled {
            color: ${w};
            border-color: ${w};
            background: color-mix(in oklab, ${w} 10%, transparent);
        }

        /* inspector */
        .inspector {
            min-height: 420px;
        }
        .inspectorCard {
            padding: 14px;
            border-radius: 12px;
            position: sticky;
            top: 8px;
        }
        .inspectorHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .inspectorHead h3 {
            font-size: 18px;
        }
        .muted {
            color: ${c};
        }

        .grid.meta {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
            margin-bottom: 12px;
            @media (min-width: 820px) {
                grid-template-columns: repeat(3, 1fr);
            }
            .label {
                color: ${c};
                font-size: 12px;
            }
        }

        .sub {
            padding: 12px;
        }
        .sub h4 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .lines {
            display: grid;
            gap: 8px;
        }
        .lines .line {
            display: grid;
            gap: 8px;
            grid-template-columns: 140px 1fr auto auto auto;
            border: 1px dashed ${u};
            border-radius: 10px;
            padding: 8px 10px;
        }
        .lines .sku {
            font-weight: 700;
        }
        .lines .name {
            color: ${m};
        }
        .lines .qty {
            text-align: right;
        }
        .lines .lot,
        .lines .exp {
            color: ${c};
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${l};
            border: 1px solid ${u};
            margin-top: 6px;
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .row {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${c};
        }
        .printSummary .v {
            color: ${m};
        }

        .actionsRow {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }
    `},r=(x,f)=>{const n=x instanceof Date?x:new Date(x),b=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=j=>String(j).padStart(2,"0"),i=`${b[n.getDay()]} ${p[n.getMonth()]} ${d(n.getDate())} ${n.getFullYear()}`;return f?`${i} ${d(n.getHours())}:${d(n.getMinutes())}:${d(n.getSeconds())}hrs`:i},h=[{id:"TRF-1001",createdAt:"2025-10-04T10:12:24+05:30",fromWh:"DEL-01 / Main",toWh:"GGM-02 / North Hub",itemCount:14,status:"In Transit",eta:"2025-10-06T13:00:00+05:30",lastUpdate:"2025-10-04T18:22:11+05:30",ref:"SO-3481",notes:"High priority; temperature controlled carton included.",items:[{sku:"MED-AMOX-500",name:"Amoxicillin 500mg Cap",qty:120,unit:"caps",lot:"L-AX5-332",expiry:"2027-03-31"},{sku:"MED-PARA-650",name:"Paracetamol 650mg Tab",qty:600,unit:"tabs",lot:"L-PR6-119",expiry:"2026-12-31"},{sku:"MED-ORS-200",name:"ORS Sachet 20g",qty:200,unit:"sachet",lot:"L-OR2-009",expiry:"2026-08-30"}],timeline:[{at:"2025-10-04T10:12:24+05:30",label:"Transfer created"},{at:"2025-10-04T12:09:00+05:30",label:"Packed & sealed"},{at:"2025-10-04T14:42:12+05:30",label:"Handed to carrier (Bluedart)"},{at:"2025-10-04T18:22:11+05:30",label:"Departed origin facility"}]},{id:"TRF-1002",createdAt:"2025-10-03T09:05:42+05:30",fromWh:"DEL-01 / Main",toWh:"MUM-01 / West DC",itemCount:7,status:"Completed",eta:"2025-10-03T20:00:00+05:30",lastUpdate:"2025-10-03T19:58:20+05:30",ref:"PO-7719",notes:"Delivered to cage B-12; GRN posted.",items:[{sku:"MED-CET-10",name:"Cetirizine 10mg Tab",qty:300,unit:"tabs",lot:"L-CT1-221",expiry:"2027-05-31"},{sku:"MED-VITC-500",name:"Vitamin C 500mg",qty:150,unit:"tabs",lot:"L-VC5-872",expiry:"2027-01-31"}],timeline:[{at:"2025-10-03T09:05:42+05:30",label:"Transfer created"},{at:"2025-10-03T10:30:00+05:30",label:"Picked"},{at:"2025-10-03T12:00:00+05:30",label:"In transit"},{at:"2025-10-03T19:58:20+05:30",label:"Delivered & verified"}]},{id:"TRF-1003",createdAt:"2025-10-02T16:45:10+05:30",fromWh:"GGM-02 / North Hub",toWh:"DEL-01 / Main",itemCount:5,status:"Draft",eta:"2025-10-05T16:00:00+05:30",lastUpdate:"2025-10-02T18:11:33+05:30",ref:"",notes:"Awaiting approval; carrier not assigned.",items:[{sku:"MED-AMOX-250",name:"Amoxicillin 250mg Cap",qty:80,unit:"caps",lot:"L-AX2-774",expiry:"2026-04-30"},{sku:"MED-ORS-200",name:"ORS Sachet 20g",qty:90,unit:"sachet",lot:"L-OR2-103",expiry:"2026-02-28"}],timeline:[{at:"2025-10-02T16:45:10+05:30",label:"Transfer created (draft)"},{at:"2025-10-02T18:11:33+05:30",label:"Items added"}]},{id:"TRF-1004",createdAt:"2025-10-01T08:22:01+05:30",fromWh:"MUM-01 / West DC",toWh:"DEL-01 / Main",itemCount:10,status:"Cancelled",eta:"2025-10-02T21:00:00+05:30",lastUpdate:"2025-10-01T10:13:59+05:30",ref:"SO-3478",notes:"Cancelled due to mismatch in requested pack size.",items:[{sku:"MED-IBU-400",name:"Ibuprofen 400mg Tab",qty:240,unit:"tabs",lot:"L-IB4-009",expiry:"2026-10-31"}],timeline:[{at:"2025-10-01T08:22:01+05:30",label:"Transfer created"},{at:"2025-10-01T10:13:59+05:30",label:"Cancelled"}]}],W=x=>{const n=[["Transfer ID","Created","From","To","Items","Status","ETA","Last Update","Reference"].join(",")];for(const i of x){const j=[i.id,r(i.createdAt,!0),i.fromWh,i.toWh,String(i.itemCount),i.status,r(i.eta),r(i.lastUpdate,!0),i.ref||"-"].map(g=>`"${String(g).replace(/"/g,'""')}"`);n.push(j.join(","))}const b=new Blob([n.join(`
`)],{type:"text/csv;charset=utf-8"}),p=URL.createObjectURL(b),d=document.createElement("a");d.href=p,d.download="inventory-transfers.csv",d.click(),setTimeout(()=>URL.revokeObjectURL(p),500)},G=()=>{const x=I(),{search:f}=P(),n=o.useRef(null),b=o.useMemo(()=>{const s=new Set;return h.forEach(a=>{s.add(a.fromWh),s.add(a.toWh)}),Array.from(s).sort()},[]),[p,d]=o.useState(""),[i,j]=o.useState(""),[g,S]=o.useState(""),[y,L]=o.useState("All"),[t,$]=o.useState(null);o.useEffect(()=>{const a=new URLSearchParams(f).get("select");if(!a)return;const T=h.find(M=>M.id===a);T&&$(T)},[f]);const k=o.useMemo(()=>{const s=p.trim().toLowerCase();return h.filter(a=>{const T=`${a.id} ${a.fromWh} ${a.toWh} ${a.status} ${a.ref}`.toLowerCase();return!(s&&!T.includes(s)||i&&a.fromWh!==i||g&&a.toWh!==g||y!=="All"&&a.status!==y)})},[p,i,g,y]),D=()=>{d(""),j(""),S(""),L("All")},R=()=>{t&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},E=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(U,{to:"/inventory",children:"Inventory"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Transfers"})]});return e.jsxs(N.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(N.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Inventory Transfers"}),E,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",h.length]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Last refresh: ",r(new Date,!0)]})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",title:"Back to Inventory",onClick:()=>x("/inventory"),children:"Back"}),e.jsx("button",{className:"btnGhost",title:"Export CSV",onClick:()=>W(k),children:"Export"}),e.jsx("button",{className:"btnGhost",title:"Print selected summary",onClick:R,disabled:!t,children:"Print"}),e.jsx("button",{className:"btnPrimary",title:"Demo only",disabled:!0,children:"New Transfer"})]})]}),e.jsxs(N.Kpis,{children:[e.jsxs("div",{className:"k card",children:[e.jsx("div",{className:"label",children:"In Transit"}),e.jsx("div",{className:"value",children:h.filter(s=>s.status==="In Transit").length}),e.jsx("div",{className:"hint",children:"ETA windows live"})]}),e.jsxs("div",{className:"k card",children:[e.jsx("div",{className:"label",children:"Completed Today"}),e.jsx("div",{className:"value",children:h.filter(s=>s.status==="Completed").length}),e.jsx("div",{className:"hint",children:"Verified at destination"})]}),e.jsxs("div",{className:"k card",children:[e.jsx("div",{className:"label",children:"Drafts"}),e.jsx("div",{className:"value",children:h.filter(s=>s.status==="Draft").length}),e.jsx("div",{className:"hint",children:"Awaiting approval"})]}),e.jsxs("div",{className:"k card",children:[e.jsx("div",{className:"label",children:"Issues"}),e.jsx("div",{className:"value",children:h.filter(s=>s.status==="Cancelled").length}),e.jsx("div",{className:"hint",children:"Needs review"})]})]}),e.jsx(N.Filters,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{value:p,onChange:s=>d(s.target.value),placeholder:"Search by ID, warehouse, status…"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"From Warehouse"}),e.jsxs("select",{value:i,onChange:s=>j(s.target.value),children:[e.jsx("option",{value:"",children:"All"}),b.map(s=>e.jsx("option",{value:s,children:s},`f-${s}`))]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"To Warehouse"}),e.jsxs("select",{value:g,onChange:s=>S(s.target.value),children:[e.jsx("option",{value:"",children:"All"}),b.map(s=>e.jsx("option",{value:s,children:s},`t-${s}`))]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsx("div",{className:"chipRow",children:["All","In Transit","Completed","Draft","Cancelled"].map(s=>e.jsx("button",{className:`chip ${y===s?"active":""}`,onClick:()=>L(s),type:"button",title:`Filter: ${s}`,children:s},s))})]}),e.jsx("div",{className:"field end",children:e.jsx("button",{className:"btnGhost",onClick:D,title:"Clear filters",children:"Clear"})})]})}),e.jsxs(N.Layout,{children:[e.jsx("section",{className:"list card","aria-label":"Transfers list",children:e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Transfer"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"From"}),e.jsx("th",{children:"To"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"ETA"}),e.jsx("th",{children:"Last Update"}),e.jsx("th",{children:"Actions"})]})}),e.jsxs("tbody",{children:[k.map(s=>e.jsxs("tr",{className:(t==null?void 0:t.id)===s.id?"selected":"",children:[e.jsx("td",{children:e.jsxs("div",{className:"idcell",children:[e.jsx("strong",{children:s.id}),e.jsx("div",{className:"muted",children:s.ref||"—"})]})}),e.jsx("td",{children:r(s.createdAt,!0)}),e.jsx("td",{children:s.fromWh}),e.jsx("td",{children:s.toWh}),e.jsx("td",{className:"num",children:s.itemCount}),e.jsx("td",{children:e.jsx("span",{className:`badge ${s.status.toLowerCase().replace(" ","-")}`,children:s.status})}),e.jsx("td",{children:r(s.eta)}),e.jsx("td",{children:r(s.lastUpdate,!0)}),e.jsxs("td",{className:"actions",children:[e.jsx("button",{className:"btnGhost small",onClick:()=>$(s),title:"Inspect details",children:"Inspect"}),e.jsx("button",{className:"btnGhost small",onClick:()=>{var a;return(a=navigator.clipboard)==null?void 0:a.writeText(`${location.origin}${location.pathname}?select=${s.id}`)},title:"Copy deep link",children:"Copy Link"})]})]},s.id)),k.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"title",children:"No transfers match the filters"}),e.jsx("div",{className:"hint",children:"Try changing Status or Warehouses."})]})})})]})]})})}),e.jsx("aside",{className:"inspector",children:t?e.jsxs("div",{className:"inspectorCard card",children:[e.jsxs("div",{className:"inspectorHead",children:[e.jsxs("div",{children:[e.jsx("h3",{children:t.id}),e.jsxs("div",{className:"muted",children:[t.fromWh," → ",t.toWh]})]}),e.jsx("button",{className:"btnGhost",onClick:()=>$(null),title:"Close",children:"Close"})]}),e.jsxs("div",{className:"grid meta",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Created"}),e.jsx("div",{children:r(t.createdAt,!0)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Status"}),e.jsx("div",{children:e.jsx("span",{className:`badge ${t.status.toLowerCase().replace(" ","-")}`,children:t.status})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Items"}),e.jsx("div",{children:t.itemCount})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"ETA"}),e.jsx("div",{children:r(t.eta)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Last Update"}),e.jsx("div",{children:r(t.lastUpdate,!0)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Reference"}),e.jsx("div",{children:t.ref||"—"})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"Line Items"}),e.jsx("div",{className:"lines",children:t.items.map((s,a)=>e.jsxs("div",{className:"line",children:[e.jsx("div",{className:"sku",children:s.sku}),e.jsx("div",{className:"name",children:s.name}),e.jsxs("div",{className:"qty",children:[s.qty," ",s.unit]}),e.jsxs("div",{className:"lot",children:["Lot ",s.lot]}),e.jsxs("div",{className:"exp",children:["Exp ",r(s.expiry)]})]},a))})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h4",{children:"Timeline"}),e.jsx("ul",{className:"timeline",children:t.timeline.map((s,a)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:s.label}),e.jsx("div",{className:"muted",children:r(s.at,!0)})]})]},a))})]}),e.jsxs("div",{className:"card sub",id:"search-print-area",ref:n,children:[e.jsx("h4",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Transfer"}),e.jsx("span",{className:"v",children:t.id})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Route"}),e.jsxs("span",{className:"v",children:[t.fromWh," → ",t.toWh]})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:r(t.createdAt,!0)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"ETA"}),e.jsx("span",{className:"v",children:r(t.eta)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:e.jsx("span",{className:`badge ${t.status.toLowerCase().replace(" ","-")}`,children:t.status})})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Items"}),e.jsx("span",{className:"v",children:t.itemCount})]})]})]}),e.jsxs("div",{className:"actionsRow",children:[e.jsx("button",{className:"btnGhost",title:"Export summary",onClick:()=>W([t]),children:"Export Row"}),e.jsx("button",{className:"btnGhost",title:"Print this summary",onClick:()=>{window.scrollTo({top:0}),setTimeout(()=>window.print(),50)},children:"Print"}),e.jsx("button",{className:"btnPrimary",title:"Demo only",disabled:!0,children:"Mark Completed"})]})]}):e.jsxs("div",{className:"placeholder card",children:[e.jsx("div",{className:"title",children:"Select a transfer"}),e.jsx("div",{className:"hint",children:"Choose “Inspect” from the list to view details, timeline and print summary."})]})})]})]})};export{G as default};
