import{d as y,u as H,r as p,j as e,N as R}from"./index-P_7RwasD.js";const m="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",k="var(--card, #111318)",o="var(--border, #23262d)",n="var(--accent, #5aa9ff)",G="var(--accent-soft, rgba(90,169,255,0.15))",P="var(--danger, #ef4444)",f={Page:y.div`
        padding: 24px 0 72px;
        color: ${m};
    `,Header:y.header`
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
            margin-top: 6px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${c};
        }
        .breadcrumbs .current {
            color: ${m};
        }
        .meta {
            margin-top: 6px;
            color: ${c};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${o};
            background: ${k};
            color: ${m};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${G};
        }
        .btnDanger {
            border-color: ${P};
            color: ${P};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }
        button:active {
            transform: translateY(1px);
        }

        button[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }

        /* lightweight tooltip via data-tip */
        [data-tip] {
            position: relative;
        }
        [data-tip]:hover::after {
            content: attr(data-tip);
            position: absolute;
            top: calc(100% + 6px);
            left: 50%;
            transform: translateX(-50%);
            background: ${k};
            color: ${m};
            border: 1px solid ${o};
            border-radius: 8px;
            padding: 6px 8px;
            white-space: nowrap;
            font-size: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
            z-index: 10;
        }
    `,Toast:y.div`
        position: sticky;
        top: 8px;
        margin-bottom: 12px;
        z-index: 5;
        align-self: flex-start;
        width: fit-content;
        padding: 8px 12px;
        border: 1px solid ${o};
        border-radius: 10px;
        background: color-mix(in oklab, ${n} 10%, transparent);
        color: ${m};
    `,Toolbar:y.div`
        padding: 14px 16px;
        margin-bottom: 16px;
        .row {
            display: grid;
            grid-template-columns: 1.5fr repeat(2, 0.9fr) 1fr;
            gap: 12px;
            align-items: end;
        }
        @media (max-width: 900px) {
            .row {
                grid-template-columns: 1fr;
            }
        }
        .field label {
            display: block;
            font-size: 12px;
            color: ${c};
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }
        .spacer {
            flex: 1;
        }

        .quickStats {
            display: flex;
            gap: 16px;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            border-left: 1px dashed ${o};
            padding-left: 12px;
        }
        .quickStats .k {
            color: ${c};
            margin-right: 6px;
        }
        .quickStats .v {
            font-weight: 700;
        }
        .quickStats .bar {
            width: 120px;
            height: 8px;
            border: 1px solid ${o};
            border-radius: 999px;
            margin-left: 8px;
            background: color-mix(in oklab, ${n} 8%, transparent);
            position: relative;
            overflow: hidden;
        }
        .quickStats .bar i {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            border-radius: 999px;
            background: ${n};
        }
    `,Layout:y.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1.6fr 0.9fr;
        @media (max-width: 1180px) {
            grid-template-columns: 1fr;
        }

        .col {
            display: grid;
            gap: 16px;
        }

        /* table */
        .list {
            padding: 0;
            overflow: hidden;
        }

        .tableHead {
            display: grid;
            grid-template-columns: 110px 1.3fr 120px 170px 120px 90px 110px 160px 190px 210px;
            gap: 12px;
            align-items: center;
            padding: 12px 14px;
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${k};
            border-bottom: 1px solid ${o};
        }

        .rows {
            display: block;
        }
        .row {
            display: grid;
            grid-template-columns: 110px 1.3fr 120px 170px 120px 90px 110px 160px 190px 210px;
            gap: 12px;
            align-items: center;
            padding: 12px 14px;
            border-bottom: 1px solid ${o};
            transition: background 0.2s, border-color 0.2s;
            cursor: pointer;
        }
        .row:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .row.selected {
            border-left: 3px solid ${n};
            background: color-mix(in oklab, ${n} 10%, transparent);
        }

        .cell .title {
            font-weight: 700;
        }
        .cell.mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .cell .muted {
            color: ${c};
            font-size: 12px;
        }

        .util .pct {
            font-weight: 700;
            margin-bottom: 6px;
        }
        .util .meter {
            height: 8px;
            border: 1px solid ${o};
            border-radius: 999px;
            position: relative;
            overflow: hidden;
        }
        .util .meter i {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: ${n};
        }
        .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .tag {
            border: 1px solid ${o};
            padding: 4px 8px;
            border-radius: 999px;
            background: color-mix(in oklab, ${n} 8%, transparent);
        }

        .empty {
            padding: 24px;
            text-align: center;
        }
        .empty .big {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 6px;
        }

        /* side */
        .side .card {
            padding: 14px 16px;
        }
        .side h3 {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px 12px;
            margin-bottom: 10px;
        }
        .kv .k {
            color: ${c};
        }
        .kv .v {
            color: ${m};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .address {
            border: 1px dashed ${o};
            border-radius: 10px;
            padding: 10px 12px;
            margin: 10px 0;
            color: ${m};
        }
        .notes .label {
            color: ${c};
            font-size: 12px;
            margin-bottom: 6px;
        }

        .heat .label {
            color: ${c};
            font-size: 12px;
            margin-bottom: 6px;
        }
        .heat .gradient {
            height: 10px;
            border: 1px solid ${o};
            border-radius: 999px;
            background: linear-gradient(
                90deg,
                color-mix(in oklab, ${n} 10%, transparent),
                ${n}
            );
        }
        .heat .legend {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: ${c};
            margin-top: 6px;
        }

        .actions {
            display: flex;
            gap: 8px;
        }
        .info .grid2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .info .label {
            color: ${c};
            font-size: 12px;
        }
    `},j=(r,h)=>{const i=r instanceof Date?r:new Date(r),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=v=>String(v).padStart(2,"0");return`${`${g[i.getDay()]} ${u[i.getMonth()]} ${b(i.getDate())} ${i.getFullYear()}`} ${b(i.getHours())}:${b(i.getMinutes())}:${b(i.getSeconds())}hrs`},O=r=>{const h=r instanceof Date?r:new Date(r),i=g=>String(g).padStart(2,"0");return`${i(h.getHours())}:${i(h.getMinutes())}:${i(h.getSeconds())}hrs`},l={totalWarehouses:6,totalBins:1984,totalCapacityM3:17850,overallUtilizationPct:74,lastAuditISO:"2025-10-04T15:38:20+05:30"},$=[{id:"W-DEL-01",code:"DEL-01",name:"Delhi Central DC",type:"Distribution",location:{city:"New Delhi",state:"DL",country:"India",lat:28.6139,lon:77.209},zones:["A","B","C"],bins:420,capacityM3:4200,utilizationPct:82,temperature:"Ambient",contact:{manager:"Aarav Sharma",phone:"+91 98765 43210",email:"aarav.sharma@example.com"},updatedISO:"2025-10-04T15:38:20+05:30",tags:["priority","north","automated"],address:["221B Baker Street","Khan Market","New Delhi 110003, DL, India"],notes:"Fast movers on Zone A. Gate-in congestion 9–11am."},{id:"W-GGN-02",code:"GGN-02",name:"Gurugram Fulfillment",type:"Fulfillment",location:{city:"Gurugram",state:"HR",country:"India",lat:28.4595,lon:77.0266},zones:["A","Chilled"],bins:310,capacityM3:3600,utilizationPct:68,temperature:"Multi",contact:{manager:"Niharika Rao",phone:"+91 99887 66554",email:"niharika.rao@example.com"},updatedISO:"2025-10-03T10:22:41+05:30",tags:["multi-temp","priority","last-mile"],address:["Plot 14","Industrial Area, Phase 2","Gurugram 122002, HR, India"],notes:"Chilled lane restock post 16:00."},{id:"W-MUM-01",code:"MUM-01",name:"Mumbai West Hub",type:"Hub",location:{city:"Mumbai",state:"MH",country:"India",lat:19.076,lon:72.8777},zones:["A","BULK"],bins:190,capacityM3:2100,utilizationPct:51,temperature:"Ambient",contact:{manager:"Kabir Patel",phone:"+91 90123 45678",email:"kabir.patel@example.com"},updatedISO:"2025-10-02T12:12:00+05:30",tags:["west","port-proximity"],address:["Unit 12","Sion-Bandra Link Road","Mumbai 400017, MH, India"],notes:"Bulk staging in Zone BULK; port cut-off 18:00."},{id:"W-BLR-01",code:"BLR-01",name:"Bengaluru Tech Park DC",type:"Distribution",location:{city:"Bengaluru",state:"KA",country:"India",lat:12.9716,lon:77.5946},zones:["A","B","C","Returns"],bins:520,capacityM3:4900,utilizationPct:77,temperature:"Ambient",contact:{manager:"Meera N",phone:"+91 98111 22233",email:"meera.n@example.com"},updatedISO:"2025-10-01T09:05:32+05:30",tags:["south","returns"],address:["Block 7","Outer Ring Road","Bengaluru 560037, KA, India"],notes:"Returns processing after 14:00."},{id:"W-HYD-01",code:"HYD-01",name:"Hyderabad Pharma FC",type:"Fulfillment",location:{city:"Hyderabad",state:"TS",country:"India",lat:17.385,lon:78.4867},zones:["A","Chilled","Controlled"],bins:320,capacityM3:3100,utilizationPct:65,temperature:"Controlled",contact:{manager:"Sara Ali",phone:"+91 97654 32109",email:"sara.ali@example.com"},updatedISO:"2025-09-30T17:40:10+05:30",tags:["pharma","gxp"],address:["Plot 3","Genome Valley","Hyderabad 500078, TS, India"],notes:"GxP compliance checks 10:00 daily."},{id:"W-PUN-01",code:"PUN-01",name:"Pune Regional Store",type:"Store",location:{city:"Pune",state:"MH",country:"India",lat:18.5204,lon:73.8567},zones:["A"],bins:224,capacityM3:1950,utilizationPct:49,temperature:"Ambient",contact:{manager:"Aditya Kulkarni",phone:"+91 90909 00001",email:"aditya.kulkarni@example.com"},updatedISO:"2025-09-29T11:00:00+05:30",tags:["regional"],address:["Shed 9","Hinjawadi Phase 1","Pune 411057, MH, India"],notes:"Cross-dock hours 13:00–16:00."}],F=()=>{H();const[r,h]=p.useState(""),[i,g]=p.useState("all"),[u,b]=p.useState("all"),[s,v]=p.useState(null),[N,S]=p.useState(""),w=p.useRef(null);p.useEffect(()=>{if(!N)return;const a=setTimeout(()=>S(""),2500);return()=>clearTimeout(a)},[N]);const C=p.useMemo(()=>{const a=r.toLowerCase().trim().split(/\s+/).filter(Boolean);return $.filter(t=>{const x=`${t.name} ${t.code} ${t.type} ${t.location.city} ${t.location.state} ${t.location.country} ${t.tags.join(" ")}`.toLowerCase(),d=a.length===0||a.every(U=>x.includes(U)),I=i==="all"||t.type.toLowerCase()===i,B=u==="all"||t.temperature.toLowerCase().includes(u);return d&&I&&B})},[r,i,u]),z=()=>{const a={generatedAt:j(new Date),stats:l,warehouses:$},t=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),x=URL.createObjectURL(t),d=document.createElement("a");d.href=x,d.download=`warehouses-${Date.now()}.json`,document.body.appendChild(d),d.click(),d.remove(),URL.revokeObjectURL(x)},M=()=>{var t;const a=new URL(window.location.href);s&&a.searchParams.set("id",s.id),(t=navigator.clipboard)==null||t.writeText(a.toString()).then(()=>{S(`Link copied at ${j(new Date)}`)}).catch(()=>{})},T=()=>{w.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};p.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("id");if(!t)return;const x=$.find(d=>d.id===t);x&&v(x)},[]);const L=()=>{v(null);const a=new URL(window.location.href);a.searchParams.delete("id"),window.history.replaceState(null,"",a.toString())},D=e.jsxs(f.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Warehouses"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(R,{to:"/inventory",children:"Inventory"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Warehouses"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",l.totalWarehouses]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Last audit: ",j(l.lastAuditISO)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:M,"data-tip":"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:z,"data-tip":"Export JSON",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:T,"data-tip":"Print selected / summary",children:"Print"}),e.jsx("button",{className:"btnPrimary",disabled:!0,"data-tip":"Demo only",children:"New Warehouse"})]})]}),A=e.jsx(f.Toolbar,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{value:r,onChange:a=>h(a.target.value),placeholder:"City, code, tag, manager…","aria-label":"Search warehouses"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Type"}),e.jsxs("select",{value:i,onChange:a=>g(a.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"distribution",children:"Distribution"}),e.jsx("option",{value:"fulfillment",children:"Fulfillment"}),e.jsx("option",{value:"hub",children:"Hub"}),e.jsx("option",{value:"store",children:"Store"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Temperature"}),e.jsxs("select",{value:u,onChange:a=>b(a.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"ambient",children:"Ambient"}),e.jsx("option",{value:"controlled",children:"Controlled"}),e.jsx("option",{value:"chilled",children:"Chilled"}),e.jsx("option",{value:"multi",children:"Multi"})]})]}),e.jsx("div",{className:"spacer"}),e.jsxs("div",{className:"quickStats",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Bins"}),e.jsx("span",{className:"v",children:l.totalBins})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Capacity (m³)"}),e.jsx("span",{className:"v",children:l.totalCapacityM3})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Utilization"}),e.jsxs("span",{className:"v",children:[l.overallUtilizationPct,"%"]}),e.jsx("span",{className:"bar",children:e.jsx("i",{style:{width:`${l.overallUtilizationPct}%`}})})]})]})]})});return e.jsxs(f.Page,{className:"container",children:[e.jsx("style",{children:`
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
      `}),D,N?e.jsx(f.Toast,{children:N}):null,A,e.jsxs(f.Layout,{children:[e.jsxs("section",{className:"col list card",children:[e.jsxs("header",{className:"tableHead",children:[e.jsx("div",{children:"Code"}),e.jsx("div",{children:"Name"}),e.jsx("div",{children:"Type"}),e.jsx("div",{children:"Location"}),e.jsx("div",{children:"Zones"}),e.jsx("div",{children:"Bins"}),e.jsx("div",{children:"Capacity"}),e.jsx("div",{children:"Utilization"}),e.jsx("div",{children:"Updated"}),e.jsx("div",{children:"Tags"})]}),e.jsxs("div",{className:"rows",role:"table","aria-label":"Warehouses table",children:[C.map(a=>e.jsxs("article",{className:`row ${(s==null?void 0:s.id)===a.id?"selected":""}`,onClick:()=>v(a),role:"row",children:[e.jsx("div",{className:"cell mono",children:a.code}),e.jsxs("div",{className:"cell name",children:[e.jsx("div",{className:"title",children:a.name}),e.jsxs("div",{className:"muted",children:[a.contact.manager," • ",a.contact.phone]})]}),e.jsx("div",{className:"cell",children:a.type}),e.jsxs("div",{className:"cell",children:[e.jsx("div",{children:a.location.city}),e.jsxs("div",{className:"muted",children:[a.location.state,", ",a.location.country]})]}),e.jsx("div",{className:"cell",children:a.zones.join(", ")}),e.jsx("div",{className:"cell",children:a.bins}),e.jsxs("div",{className:"cell",children:[a.capacityM3," m³"]}),e.jsxs("div",{className:"cell util",children:[e.jsxs("div",{className:"pct",children:[a.utilizationPct,"%"]}),e.jsx("div",{className:"meter",children:e.jsx("i",{style:{width:`${a.utilizationPct}%`}})})]}),e.jsx("div",{className:"cell",children:j(a.updatedISO)}),e.jsx("div",{className:"cell tags",children:a.tags.map(t=>e.jsx("span",{className:"tag",children:t},t))})]},a.id)),C.length===0&&e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"big",children:"No matches"}),e.jsx("div",{className:"muted",children:"Try different filters or clear the search."})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsx("div",{className:"card",id:"search-print-area",ref:w,children:s?e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:["Snapshot • ",s.name]}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Code"}),e.jsx("span",{className:"v mono",children:s.code})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Type"}),e.jsx("span",{className:"v",children:s.type})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"City"}),e.jsx("span",{className:"v",children:s.location.city})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"State"}),e.jsx("span",{className:"v",children:s.location.state})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Country"}),e.jsx("span",{className:"v",children:s.location.country})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Zones"}),e.jsx("span",{className:"v",children:s.zones.join(", ")})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Bins"}),e.jsx("span",{className:"v",children:s.bins})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Capacity"}),e.jsxs("span",{className:"v",children:[s.capacityM3," m³"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Utilization"}),e.jsxs("span",{className:"v",children:[s.utilizationPct,"%"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Temp"}),e.jsx("span",{className:"v",children:s.temperature})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Manager"}),e.jsx("span",{className:"v",children:s.contact.manager})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:s.contact.phone})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:s.contact.email})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v",children:j(s.updatedISO)})]})]}),e.jsx("div",{className:"address",children:s.address.map((a,t)=>e.jsx("div",{children:a},t))}),e.jsxs("div",{className:"notes",children:[e.jsx("div",{className:"label",children:"Notes"}),e.jsx("p",{children:s.notes})]}),e.jsxs("div",{className:"heat",children:[e.jsx("div",{className:"label",children:"Capacity Heat"}),e.jsx("div",{className:"gradient","aria-hidden":"true"}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{children:"0%"}),e.jsx("span",{children:"50%"}),e.jsx("span",{children:"100%"})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Printable Summary"}),e.jsxs("div",{className:"summary",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Total warehouses"}),e.jsx("span",{className:"v",children:l.totalWarehouses})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Bins"}),e.jsx("span",{className:"v",children:l.totalBins})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Capacity (m³)"}),e.jsx("span",{className:"v",children:l.totalCapacityM3})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Utilization"}),e.jsxs("span",{className:"v",children:[l.overallUtilizationPct,"%"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Last audit"}),e.jsx("span",{className:"v",children:j(l.lastAuditISO)})]})]}),e.jsx("div",{className:"muted small",children:"Select a warehouse to print its snapshot."})]})}),e.jsxs("div",{className:"card actions",children:[e.jsx("button",{className:"btnGhost",onClick:L,disabled:!s,children:"Clear Selection"}),e.jsx("button",{className:"btnGhost",onClick:M,"data-tip":"Copy deep link to selection",disabled:!s,children:"Copy Link"}),e.jsx("button",{className:"btnPrimary",disabled:!0,"data-tip":"Demo only",children:"Edit"}),e.jsx("button",{className:"btnDanger",disabled:!0,"data-tip":"Demo only",children:"Disable"})]}),e.jsxs("div",{className:"card info",children:[e.jsx("h3",{children:"Service Window"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Gate-in"}),e.jsx("div",{children:"09:00–18:00"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Best time"}),e.jsx("div",{children:O(new Date)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"SLA"}),e.jsx("div",{children:"Inbound < 2h"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Compliance"}),e.jsx("div",{children:"GxP / SOP v3.1"})]})]})]})]})]})]})};export{F as default};
