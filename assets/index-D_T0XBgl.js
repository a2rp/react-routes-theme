import{d as j,r as m,j as e,N as h}from"./index-CqBbF2bz.js";const b="var(--text, #f3f4f6)",n="var(--muted, #a0a0a7)",L="var(--card, #111318)",l="var(--border, #23262d)",o="var(--accent, #5aa9ff)",B="var(--accent-soft, rgba(90,169,255,0.15))",f={Page:j.div`
        padding: 24px 0 64px;
        color: ${b};
    `,Header:j.header`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${n};
        }
        .breadcrumbs .current {
            color: ${b};
        }
        .meta {
            margin-top: 6px;
            color: ${n};
            font-size: 12px;
        }

        .right {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .btnGhost {
            border: 1px solid ${l};
            background: ${L};
            color: ${b};
            border-radius: 8px;
            padding: 8px 14px;
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                background 0.25s;
        }
        .btnGhost:hover {
            border-color: ${o};
            color: ${o};
            box-shadow: 0 0 0 3px ${B};
        }
    `,Cards:j.div`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 16px;
        @media (min-width: 980px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 16px;
        }
        .kpi .label {
            color: ${n};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .kpi .value {
            font-size: 24px;
            font-weight: 700;
        }
    `,Controls:j.div`
        padding: 14px 16px;
        margin-bottom: 16px;

        .row {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .field {
            min-width: 180px;
        }
        .field.grow {
            flex: 1;
            min-width: 260px;
        }

        label {
            display: block;
            color: ${n};
            font-size: 12px;
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }

        .actions {
            margin-top: 8px;
        }
        .btnDisabled {
            border: 1px dashed ${l};
            background: ${L};
            color: ${n};
            border-radius: 8px;
            padding: 8px 14px;
            font-weight: 700;
            cursor: not-allowed;
        }
    `,Layout:j.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
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

        .empty {
            text-align: center;
            padding: 24px;
        }
        .empty h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .empty p {
            color: ${n};
        }

        .group {
            overflow: hidden;
        }
        .groupHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${l};
        }
        .groupHead h3 {
            font-size: 14px;
        }
        .groupHead .count {
            color: ${n};
            font-size: 12px;
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
            background: ${L};
            z-index: 1;
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${l};
            color: ${n};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${l};
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${o} 8%, transparent);
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .muted {
            color: ${n};
        }
        .right {
            text-align: right;
        }
        .name a {
            color: ${b};
        }
        .name a:hover {
            color: ${o};
        }

        .chip {
            display: inline-flex;
            align-items: center;
            height: 24px;
            padding: 0 10px;
            border-radius: 999px;
            border: 1px solid ${l};
            font-weight: 600;
            background: color-mix(in oklab, ${o} 10%, transparent);
        }
        .chip.soon {
            background: color-mix(in oklab, ${o} 20%, transparent);
        }
        .chip.expired {
            background: color-mix(in oklab, ${o} 12%, transparent);
        }
        .chip.ok {
            background: color-mix(in oklab, ${o} 8%, transparent);
        }

        .rowActions .link {
            color: ${n};
            border: 1px solid ${l};
            padding: 4px 8px;
            border-radius: 6px;
        }
        .rowActions .link:hover {
            color: ${o};
            border-color: ${o};
        }

        .links,
        .views {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${n};
            border: 1px solid ${l};
            padding: 6px 8px;
            border-radius: 8px;
            background: ${L};
        }
        .links a:hover {
            color: ${o};
            border-color: ${o};
        }
        .views .btnGhost.small {
            padding: 6px 10px;
            border: 1px solid ${l};
            border-radius: 8px;
        }
        .legend .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        .legend .muted.small {
            font-size: 12px;
            margin-top: 6px;
            display: block;
        }

        #search-print-area {
            padding: 12px 14px;
        }
        #search-print-area .summaryGrid {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(2, 1fr);
        }
        #search-print-area .summaryGrid .wide {
            grid-column: 1 / -1;
        }
        #search-print-area .k {
            color: ${n};
        }
        #search-print-area .v {
            color: ${b};
            font-weight: 700;
        }
        .miniList {
            margin-top: 12px;
        }
        .miniList h4 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .miniList ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        .miniList li {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .miniList .n {
            color: ${b};
        }
        .miniList .x {
            color: ${n};
        }
    `},N=d=>{const t=d instanceof Date?d:new Date(d),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=g=>String(g).padStart(2,"0");return`${c[t.getDay()]} ${x[t.getMonth()]} ${u(t.getDate())} ${t.getFullYear()}`},O=d=>{const t=d instanceof Date?d:new Date(d),c=x=>String(x).padStart(2,"0");return`${N(t)} ${c(t.getHours())}:${c(t.getMinutes())}:${c(t.getSeconds())}hrs`},p={totalBatches:48,expiringSoon:12,expired:3,ok:33,lastSyncISO:"2025-10-04T15:38:20+05:30"},v=[{title:"Oct 2025",count:6,items:[{id:"LOT-AX5",productId:"MED-AMOX-500",sku:"AMOX-500-TAB",name:"Amoxicillin 500",strength:"500mg",form:"Tablet",batch:"AX5-2408",mfg:"2025-02-10",expiry:"2025-10-21",bucket:"Soon",qty:"240",location:"WH-DEL / A-12",vendor:"Bluewave Traders",manufacturer:"Cipra Labs",mrp:"₹ 145.00"},{id:"LOT-PCM",productId:"MED-PARA-650",sku:"PARA-650-TAB",name:"Paracetamol 650",strength:"650mg",form:"Tablet",batch:"PCM-0925",mfg:"2025-03-05",expiry:"2025-10-28",bucket:"Soon",qty:"500",location:"WH-DEL / B-02",vendor:"Medilink",manufacturer:"Nova Remedies",mrp:"₹ 28.00"},{id:"LOT-IBU",productId:"MED-IBU-400",sku:"IBU-400-TAB",name:"Ibuprofen 400",strength:"400mg",form:"Tablet",batch:"IBU-10-25",mfg:"2025-01-18",expiry:"2025-10-09",bucket:"Soon",qty:"310",location:"WH-GGN / C-07",vendor:"Helios Distributors",manufacturer:"Zen Pharma",mrp:"₹ 36.00"},{id:"LOT-RAB",productId:"MED-RAB-20",sku:"RAB-20-TAB",name:"Rabeprazole 20",strength:"20mg",form:"Tablet",batch:"RAB-2025-10",mfg:"2025-02-02",expiry:"2025-10-30",bucket:"Soon",qty:"180",location:"WH-DEL / D-10",vendor:"Bluewave Traders",manufacturer:"Crestor Labs",mrp:"₹ 98.00"},{id:"LOT-CEF",productId:"MED-CEF-200",sku:"CEF-200-TAB",name:"Cefixime 200",strength:"200mg",form:"Tablet",batch:"CEF-200-25A",mfg:"2025-01-09",expiry:"2025-10-14",bucket:"Soon",qty:"90",location:"WH-DEL / E-02",vendor:"Medilink",manufacturer:"Trident Biotech",mrp:"₹ 178.00"},{id:"LOT-LOR",productId:"MED-LOR-2",sku:"LOR-2-TAB",name:"Loratadine 2",strength:"2mg",form:"Syrup",batch:"LOR-SYR-25",mfg:"2024-12-20",expiry:"2025-10-03",bucket:"Expired",qty:"14",location:"WH-GGN / S-01",vendor:"Helios Distributors",manufacturer:"Valence Care",mrp:"₹ 64.00"}]},{title:"Nov 2025",count:4,items:[{id:"LOT-LEV",productId:"MED-LEV-500",sku:"LEV-500-TAB",name:"Levofloxacin 500",strength:"500mg",form:"Tablet",batch:"LEV-1125",mfg:"2025-04-18",expiry:"2025-11-12",bucket:"Soon",qty:"120",location:"WH-DEL / F-04",vendor:"Bluewave Traders",manufacturer:"Zen Pharma",mrp:"₹ 210.00"},{id:"LOT-OME",productId:"MED-OME-20",sku:"OME-20-CAP",name:"Omeprazole 20",strength:"20mg",form:"Capsule",batch:"OME-20-25B",mfg:"2025-03-08",expiry:"2025-11-22",bucket:"OK",qty:"260",location:"WH-DEL / A-07",vendor:"Medilink",manufacturer:"Nova Remedies",mrp:"₹ 85.00"},{id:"LOT-AZI",productId:"MED-AZI-500",sku:"AZI-500-TAB",name:"Azithromycin 500",strength:"500mg",form:"Tablet",batch:"AZI-500-25",mfg:"2025-05-01",expiry:"2025-11-29",bucket:"OK",qty:"70",location:"WH-DEL / H-11",vendor:"Helios Distributors",manufacturer:"Cipra Labs",mrp:"₹ 228.00"},{id:"LOT-VITC",productId:"MED-ASC-500",sku:"ASC-500-CHEW",name:"Vitamin C 500",strength:"500mg",form:"Chewable",batch:"ASC-CH-25",mfg:"2025-02-12",expiry:"2025-11-06",bucket:"Soon",qty:"200",location:"WH-GGN / V-03",vendor:"Bluewave Traders",manufacturer:"Crestor Labs",mrp:"₹ 125.00"}]},{title:"Dec 2025",count:3,items:[{id:"LOT-MET",productId:"MED-MET-500",sku:"MET-500-TAB",name:"Metformin 500",strength:"500mg",form:"Tablet",batch:"MET-500-25",mfg:"2025-04-01",expiry:"2025-12-18",bucket:"OK",qty:"400",location:"WH-DEL / D-05",vendor:"Medilink",manufacturer:"Zen Pharma",mrp:"₹ 34.00"},{id:"LOT-DIC",productId:"MED-DIC-50",sku:"DIC-50-GEL",name:"Diclofenac 50",strength:"50mg",form:"Gel",batch:"DIC-GEL-25",mfg:"2025-04-28",expiry:"2025-12-04",bucket:"OK",qty:"150",location:"WH-GGN / G-01",vendor:"Helios Distributors",manufacturer:"Valence Care",mrp:"₹ 72.00"},{id:"LOT-ASP",productId:"MED-ASP-75",sku:"ASP-75-TAB",name:"Aspirin 75",strength:"75mg",form:"Tablet",batch:"ASP-75-25",mfg:"2025-03-17",expiry:"2025-12-29",bucket:"OK",qty:"180",location:"WH-DEL / K-02",vendor:"Bluewave Traders",manufacturer:"Trident Biotech",mrp:"₹ 22.00"}]}],H=()=>{const d=m.useRef(null),[t,c]=m.useState(""),[x,u]=m.useState("ALL"),[g,y]=m.useState("ALL"),[E,k]=m.useState("ALL"),A=m.useMemo(()=>O(p.lastSyncISO),[]),w=r=>{const a=`${r.name} ${r.sku} ${r.batch} ${r.manufacturer} ${r.vendor} ${r.location}`.toLowerCase(),i=t.trim()===""||a.includes(t.trim().toLowerCase()),s=x==="ALL"||r.bucket===x,D=g==="ALL"||(r.form||"").toLowerCase()===g.toLowerCase(),M=E==="ALL"||(r.manufacturer||"")===E;return i&&s&&D&&M},$=v.map(r=>({...r,items:r.items.filter(w),count:r.items.filter(w).length})).filter(r=>r.items.length>0),S=m.useMemo(()=>{const r=new Set;return v.forEach(a=>a.items.forEach(i=>r.add(i.manufacturer))),["ALL",...Array.from(r)]},[]),T=m.useMemo(()=>{const r=new Set;return v.forEach(a=>a.items.forEach(i=>i.form&&r.add(i.form))),["ALL",...Array.from(r)]},[]),C=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(f.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs(f.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Expiry Tracker"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(h,{to:"/medicines",children:"Medicines"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Expiry Tracker"})]}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Last sync: ",A]})})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",onClick:C,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnGhost",title:"Export CSV (static download)",onClick:()=>{const r=["Batch,SKU,Name,Strength,Form,Expiry,Bucket,Qty,Location,Vendor,Manufacturer,MRP",...v.flatMap(s=>s.items).map(s=>[s.batch,s.sku,s.name,s.strength,s.form,N(s.expiry),s.bucket,s.qty,`"${s.location}"`,`"${s.vendor}"`,`"${s.manufacturer}"`,s.mrp].join(","))].join(`
`),a=URL.createObjectURL(new Blob([r],{type:"text/csv"})),i=document.createElement("a");i.href=a,i.download="expiry-tracker.csv",document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(a)},children:"Export"})]})]}),e.jsxs(f.Cards,{children:[e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Total Batches"}),e.jsx("div",{className:"value",children:p.totalBatches})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Expiring Soon"}),e.jsx("div",{className:"value",children:p.expiringSoon})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Expired"}),e.jsx("div",{className:"value",children:p.expired})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"OK"}),e.jsx("div",{className:"value",children:p.ok})]})]}),e.jsxs(f.Controls,{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field grow",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{value:t,onChange:r=>c(r.target.value),placeholder:"Search by name, SKU, batch, vendor, location…"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{value:x,onChange:r=>u(r.target.value),children:[e.jsx("option",{value:"ALL",children:"All"}),e.jsx("option",{value:"Soon",children:"Expiring Soon"}),e.jsx("option",{value:"Expired",children:"Expired"}),e.jsx("option",{value:"OK",children:"OK"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Form"}),e.jsx("select",{value:g,onChange:r=>y(r.target.value),children:T.map(r=>e.jsx("option",{value:r,children:r},r))})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Manufacturer"}),e.jsx("select",{value:E,onChange:r=>k(r.target.value),children:S.map(r=>e.jsx("option",{value:r,children:r},r))})]})]}),e.jsxs("div",{className:"row actions",children:[e.jsx("button",{className:"btnDisabled",title:"Demo mode",children:"Add Batch"}),e.jsx("button",{className:"btnDisabled",title:"Demo mode",children:"Adjust Stock"}),e.jsx("button",{className:"btnDisabled",title:"Demo mode",children:"Archive Expired"})]})]}),e.jsxs(f.Layout,{children:[e.jsx("section",{className:"main",children:$.length===0?e.jsxs("div",{className:"empty card",children:[e.jsx("h3",{children:"No results"}),e.jsx("p",{children:"Try clearing filters or search with a different keyword."})]}):$.map(r=>e.jsxs("div",{className:"group card",children:[e.jsxs("header",{className:"groupHead",children:[e.jsx("h3",{children:r.title}),e.jsxs("span",{className:"count",children:[r.count," batch",r.count===1?"":"es"]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Product"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Vendor"}),e.jsx("th",{children:"Manufacturer"}),e.jsx("th",{children:"MRP"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:r.items.map(a=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"mono",children:a.batch}),e.jsx("div",{className:"muted",children:a.sku})]}),e.jsxs("td",{children:[e.jsx("div",{className:"name",children:e.jsx(h,{to:`/medicines/${a.productId}`,children:a.name})}),e.jsxs("div",{className:"muted",children:[a.strength," • ",a.form]})]}),e.jsx("td",{children:N(a.expiry)}),e.jsx("td",{children:e.jsx("span",{className:`chip ${a.bucket.toLowerCase()}`,children:a.bucket})}),e.jsx("td",{className:"right",children:a.qty}),e.jsx("td",{children:a.location}),e.jsx("td",{children:a.vendor}),e.jsx("td",{children:a.manufacturer}),e.jsx("td",{className:"right",children:a.mrp}),e.jsx("td",{className:"rowActions",children:e.jsx(h,{className:"link",to:`/medicines/${a.productId}`,children:"View"})})]},a.id))})]})})]},r.title))}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Shortcuts"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(h,{to:"/medicines",children:"Catalog"})}),e.jsx("li",{children:e.jsx(h,{to:"/inventory/batches",children:"Batches"})}),e.jsx("li",{children:e.jsx(h,{to:"/inventory/lots",children:"Lots"})}),e.jsx("li",{children:e.jsx(h,{to:"/reports/inventory",children:"Inventory Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Saved Views"}),e.jsxs("ul",{className:"views",children:[e.jsx("li",{children:e.jsx("button",{className:"btnGhost small",onClick:()=>{u("Soon"),y("ALL"),k("ALL"),c("")},children:"Expiring this quarter"})}),e.jsx("li",{children:e.jsx("button",{className:"btnGhost small",onClick:()=>{u("Expired"),y("ALL"),k("ALL"),c("")},children:"Expired"})}),e.jsx("li",{children:e.jsx("button",{className:"btnGhost small",onClick:()=>{u("OK"),y("Tablet"),k("ALL"),c("")},children:"Tablets (OK)"})})]})]}),e.jsxs("div",{className:"card legend",children:[e.jsx("h3",{children:"Legend"}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip soon",children:"Expiring Soon"}),e.jsx("span",{className:"chip expired",children:"Expired"}),e.jsx("span",{className:"chip ok",children:"OK"})]}),e.jsx("p",{className:"muted small",children:"Status reflects predefined batch buckets in demo data."})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:d,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"summaryGrid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Total"}),e.jsx("span",{className:"v",children:p.totalBatches})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Soon"}),e.jsx("span",{className:"v",children:p.expiringSoon})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Expired"}),e.jsx("span",{className:"v",children:p.expired})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"OK"}),e.jsx("span",{className:"v",children:p.ok})]}),e.jsxs("div",{className:"wide",children:[e.jsx("span",{className:"k",children:"As of"}),e.jsx("span",{className:"v",children:A})]})]}),e.jsxs("div",{className:"miniList",children:[e.jsx("h4",{children:"Top Batches"}),e.jsx("ul",{children:v[0].items.slice(0,3).map(r=>e.jsxs("li",{children:[e.jsx("span",{className:"n",children:r.name}),e.jsx("span",{className:"x",children:N(r.expiry)})]},r.id))})]})]})]})]})]})};export{H as default};
