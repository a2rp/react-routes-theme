import{d as b,r as u,j as e,N as g}from"./index-CTSbLEdo.js";const c="var(--text, #f3f4f6)",h="var(--muted, #a0a0a7)",x="var(--card, #111318)",i="var(--border, #23262d)",r="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",z="var(--radius, 16px)",f={Page:b.div`
        padding: 18px;
        color: ${c};
    `,Header:b.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        padding: 14px 16px;
        margin-bottom: 14px;
        border: 1px solid ${i};
        border-radius: 12px;
        background: ${x};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            a {
                color: ${h};
            }
            .current {
                color: ${c};
            }
        }
        .meta {
            margin-top: 4px;
            color: ${h};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
            justify-content: flex-end;
            .btnPrimary,
            .btnGhost {
                border-radius: 8px;
                padding: 8px 14px;
                border: 1px solid ${i};
                background: ${x};
                color: ${c};
                font-weight: 600;
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                    background 0.25s, transform 0.06s;
            }
            .btnPrimary:hover {
                border-color: ${r};
                color: ${r};
                box-shadow: 0 0 0 3px ${y};
            }
            .btnGhost:hover {
                border-color: ${r};
                color: ${r};
            }
            .btnPrimary:active,
            .btnGhost:active {
                transform: translateY(1px);
            }

            /* simple tooltip */
            [data-tooltip] {
                position: relative;
            }
            [data-tooltip]:hover::after {
                content: attr(data-tooltip);
                position: absolute;
                bottom: calc(100% + 8px);
                left: 50%;
                transform: translateX(-50%);
                background: ${x};
                color: ${c};
                border: 1px solid ${i};
                border-radius: 8px;
                padding: 6px 8px;
                font-size: 12px;
                white-space: nowrap;
                box-shadow: var(--shadow);
                pointer-events: none;
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }
    `,Filters:b.section`
        border: 1px solid ${i};
        background: ${x};
        border-radius: 12px;
        box-shadow: var(--shadow);
        padding: 14px;
        margin-bottom: 14px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 160px 160px;
            }
        }

        .field label {
            display: block;
            font-size: 12px;
            color: ${h};
            margin-bottom: 6px;
        }
        .hints {
            margin-top: 8px;
        }
        .hint {
            color: ${h};
            font-size: 12px;
        }
    `,Split:b.div`
        display: grid;
        gap: 14px;
        grid-template-columns: 1fr;
        @media (min-width: 1180px) {
            grid-template-columns: 2.3fr 1fr;
        }

        .tableWrap {
            border: 1px solid ${i};
            background: ${x};
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 0;
        }

        .tableHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid ${i};
            padding: 10px 12px;
            h3 {
                font-size: 16px;
            }
            .legend {
                display: flex;
                gap: 8px;
            }
            .pill {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${i};
                font-size: 12px;
                color: ${c};
                background: color-mix(in oklab, ${r} 10%, transparent);
            }
            .pill.warn {
                background: color-mix(in oklab, ${r} 5%, transparent);
            }
            .pill.off {
                background: color-mix(in oklab, ${r} 0%, transparent);
                opacity: 0.7;
            }
        }

        .scroll {
            overflow: auto;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            th,
            td {
                padding: 10px 12px;
                border-bottom: 1px solid ${i};
                vertical-align: top;
            }
            thead th {
                position: sticky;
                top: 0;
                background: ${x};
                z-index: 1;
                color: ${c};
                text-align: left;
            }
            tbody tr:hover {
                background: color-mix(in oklab, ${r} 7%, transparent);
            }

            .carrierCell {
                display: grid;
                grid-template-columns: 40px 1fr;
                gap: 10px;
                align-items: center;
                .logo {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    display: grid;
                    place-items: center;
                    border: 1px solid ${i};
                    background: color-mix(in oklab, ${r} 8%, transparent);
                    font-weight: 700;
                    letter-spacing: 0.4px;
                }
                .stack .status {
                    display: inline-block;
                    margin-top: 2px;
                    font-size: 11px;
                    color: ${h};
                    padding: 2px 8px;
                    border-radius: 999px;
                    border: 1px solid ${i};
                    background: color-mix(in oklab, ${r} 6%, transparent);
                }
                .stack .status.maintenance {
                    background: color-mix(in oklab, ${r} 3%, transparent);
                }
            }

            .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }
            .chips.small .chip {
                padding: 4px 8px;
                font-size: 12px;
            }
            .chip {
                border: 1px solid ${i};
                padding: 6px 10px;
                border-radius: 999px;
                color: ${c};
                background: color-mix(in oklab, ${r} 8%, transparent);
            }

            .meter {
                position: relative;
                height: 18px;
                border: 1px solid ${i};
                border-radius: 10px;
                overflow: hidden;
                background: color-mix(in oklab, ${r} 4%, transparent);
                .bar {
                    height: 100%;
                    background: ${r};
                }
                .val {
                    position: absolute;
                    inset: 0;
                    display: grid;
                    place-items: center;
                    font-size: 12px;
                    color: ${c};
                }
            }

            .pill.ok {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${i};
            }
            .pill.off {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${i};
                opacity: 0.7;
            }

            .btnTiny {
                border: 1px solid ${i};
                border-radius: 999px;
                padding: 4px 10px;
                background: ${x};
                color: ${c};
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
            }
            .btnTiny:hover {
                border-color: ${r};
                color: ${r};
            }
            .btnTiny.isDefault {
                border-color: ${r};
                color: ${r};
            }
            .btnTiny:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }

        .rail {
            display: grid;
            gap: 14px;
        }
        .facts {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .facts li {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px dashed ${i};
            padding-bottom: 6px;
        }
        .facts .k {
            color: ${h};
        }
        .rank {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .rank li {
            display: grid;
            grid-template-columns: 1fr 1fr auto;
            align-items: center;
            gap: 8px;
        }
        .rank .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .rank .spark {
            height: 8px;
            border: 1px solid ${i};
            border-radius: 6px;
            overflow: hidden;
            background: color-mix(in oklab, ${r} 4%, transparent);
        }
        .rank .spark .bar {
            height: 100%;
            background: ${r};
        }
        .rank .pct {
            text-align: right;
            font-variant-numeric: tabular-nums;
        }
        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 6px;
        }
        .links a {
            color: ${h};
            padding: 6px 8px;
            border: 1px solid ${i};
            border-radius: 8px;
            background: ${x};
        }
        .links a:hover {
            color: ${r};
            border-color: ${r};
        }
        .bullets {
            margin: 8px 0 0 16px;
            color: ${c};
        }
        .muted {
            color: ${h};
        }
    `,Overlay:b.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:b.div`
        width: min(520px, 92vw);
        border-radius: ${z};
        border: 1px solid ${i};
        background: ${x};
        color: ${c};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${i};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${i};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${x};
            color: ${c};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${y};
        }
    `},I=s=>{const t=s instanceof Date?s:new Date(s),n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=j=>String(j).padStart(2,"0");return`${n[t.getDay()]} ${p[t.getMonth()]} ${m(t.getDate())} ${t.getFullYear()}`},k=s=>{const t=s instanceof Date?s:new Date(s),n=p=>String(p).padStart(2,"0");return`${I(t)} ${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}hrs`},R=s=>{const t=s instanceof Date?s:new Date(`1970-01-01T${s}`),n=p=>String(p).padStart(2,"0");return`${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}hrs`},O=()=>{const s=u.useMemo(()=>new Date("2025-10-04T15:38:20+05:30"),[]);return{data:u.useMemo(()=>[{id:"CAR-DELHIVERY",name:"Delhivery",code:"DELHIVERY",status:"active",onTime:96,cod:!0,trackingUrl:"https://www.delhivery.com/tracking",pickupCutoff:"17:30:00",serviceLevels:["Surface","Air Express","Same Day"],coverage:"PAN India",zones:["Z1","Z2","Z3","Z4"],default:!0,updatedAt:s,supportEmail:"ops@delhivery.example.com"},{id:"CAR-BLUEDART",name:"Blue Dart",code:"BLUEDART",status:"active",onTime:94,cod:!0,trackingUrl:"https://www.bluedart.com/tracking",pickupCutoff:"18:00:00",serviceLevels:["Express","Priority","Temperature Controlled"],coverage:"Tier 1–3 Cities",zones:["Z1","Z2","Z3"],default:!1,updatedAt:s,supportEmail:"ops@bluedart.example.com"},{id:"CAR-FEDEX",name:"FedEx",code:"FEDEX",status:"active",onTime:97,cod:!1,trackingUrl:"https://www.fedex.com/apps/fedextrack/",pickupCutoff:"16:30:00",serviceLevels:["International Priority","Domestic Express"],coverage:"International + Metro India",zones:["INTL","Z1"],default:!1,updatedAt:s,supportEmail:"ops@fedex.example.com"},{id:"CAR-DHL",name:"DHL Express",code:"DHL",status:"active",onTime:98,cod:!1,trackingUrl:"https://www.dhl.com/in-en/home/tracking.html",pickupCutoff:"16:00:00",serviceLevels:["Time Definite","Economy Select"],coverage:"International",zones:["INTL"],default:!1,updatedAt:s,supportEmail:"ops@dhl.example.com"},{id:"CAR-INDIAPOST",name:"India Post",code:"INDIAPOST",status:"active",onTime:86,cod:!0,trackingUrl:"https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx",pickupCutoff:"15:00:00",serviceLevels:["Speed Post","Business Parcel"],coverage:"All PIN codes",zones:["RURAL","URBAN"],default:!1,updatedAt:s,supportEmail:"ops@indiapost.example.com"},{id:"CAR-ECOMXP",name:"Ecom Express",code:"ECOMXP",status:"maintenance",onTime:90,cod:!0,trackingUrl:"https://www.ecomexpress.in/tracking/",pickupCutoff:"17:00:00",serviceLevels:["Express","Reverse Logistics"],coverage:"Urban + Semi-urban",zones:["Z1","Z2"],default:!1,updatedAt:s,supportEmail:"ops@ecomxp.example.com"}],[s]),generatedAt:s}},M=({open:s,title:t,message:n,onClose:p})=>s?e.jsx(f.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:p,children:e.jsxs(f.Modal,{className:"card",onMouseDown:m=>m.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:t})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:n})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:p,children:"OK"})})]})}):null,H=()=>{var w;const{data:s,generatedAt:t}=O(),[n,p]=u.useState(""),[m,j]=u.useState("all"),[v,N]=u.useState("name-asc"),[T,$]=u.useState(!1),C=u.useRef(null),D=u.useMemo(()=>{const a=n.toLowerCase().split(/\s+/).filter(Boolean);let l=s.filter(o=>{const d=[o.name,o.code,o.coverage,...o.serviceLevels||[],...o.zones||[]].join(" ").toLowerCase(),L=a.every(P=>d.includes(P)),E=m==="all"?!0:m==="intl"?o.zones.includes("INTL"):!o.zones.includes("INTL");return L&&E});switch(v){case"name-asc":l.sort((o,d)=>o.name.localeCompare(d.name));break;case"name-desc":l.sort((o,d)=>d.name.localeCompare(o.name));break;case"ontime-desc":l.sort((o,d)=>d.onTime-o.onTime);break;case"ontime-asc":l.sort((o,d)=>o.onTime-d.onTime);break}return l},[s,n,m,v]),S=()=>{const a={generatedAt:k(t),carriers:s},l=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),o=URL.createObjectURL(l),d=document.createElement("a");d.href=o,d.download="carriers.json",document.body.appendChild(d),d.click(),d.remove(),URL.revokeObjectURL(o)},A=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return e.jsxs(f.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(f.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Carriers"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(g,{to:"/shipments",children:"Shipments"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Carriers"})]}),e.jsx("p",{className:"meta",children:e.jsxs("span",{children:["Generated: ",k(t)]})})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnPrimary",disabled:!0,"data-tooltip":"Disabled in demo",onClick:()=>$(!0),children:"Add Carrier"}),e.jsx("button",{className:"btnGhost",onClick:S,title:"Export carriers",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:A,title:"Print table",children:"Print"}),e.jsx(g,{className:"btnGhost",to:"/shipments",title:"Go to shipments",children:"All Shipments"})]})]}),e.jsxs(f.Filters,{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{placeholder:"Search name, code, service, zone…",value:n,onChange:a=>p(a.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Region"}),e.jsxs("select",{value:m,onChange:a=>j(a.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"domestic",children:"Domestic"}),e.jsx("option",{value:"intl",children:"International"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Sort"}),e.jsxs("select",{value:v,onChange:a=>N(a.target.value),children:[e.jsx("option",{value:"name-asc",children:"Name ↑"}),e.jsx("option",{value:"name-desc",children:"Name ↓"}),e.jsx("option",{value:"ontime-desc",children:"On-time % ↓"}),e.jsx("option",{value:"ontime-asc",children:"On-time % ↑"})]})]})]}),e.jsx("div",{className:"hints",children:e.jsx("span",{className:"hint",children:"Tip: Try “priority”, “reverse”, “INTL”, “Z1”…"})})]}),e.jsxs(f.Split,{children:[e.jsxs("section",{className:"card tableWrap",id:"search-print-area",ref:C,children:[e.jsxs("header",{className:"tableHeader",children:[e.jsx("h3",{children:"Service Matrix"}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"pill ok",children:"Active"}),e.jsx("span",{className:"pill warn",children:"Maintenance"}),e.jsx("span",{className:"pill off",children:"Paused"})]})]}),e.jsx("div",{className:"scroll",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Carrier"}),e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Services"}),e.jsx("th",{children:"Coverage"}),e.jsx("th",{children:"Zones"}),e.jsx("th",{children:"Pickup Cutoff"}),e.jsx("th",{children:"On-time %"}),e.jsx("th",{children:"COD"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{children:"Tracking"})]})}),e.jsx("tbody",{children:D.map(a=>e.jsxs("tr",{children:[e.jsxs("td",{className:"carrierCell",children:[e.jsx("span",{className:"logo","aria-hidden":"true",children:a.name.slice(0,2).toUpperCase()}),e.jsxs("div",{className:"stack",children:[e.jsx("strong",{children:a.name}),e.jsx("span",{className:`status ${a.status}`,children:a.status})]})]}),e.jsx("td",{children:a.code}),e.jsx("td",{children:e.jsx("div",{className:"chips",children:a.serviceLevels.map(l=>e.jsx("span",{className:"chip",children:l},l))})}),e.jsx("td",{children:a.coverage}),e.jsx("td",{children:e.jsx("div",{className:"chips small",children:a.zones.map(l=>e.jsx("span",{className:"chip",children:l},l))})}),e.jsx("td",{children:R(a.pickupCutoff)}),e.jsx("td",{children:e.jsxs("div",{className:"meter",role:"meter","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a.onTime,children:[e.jsx("div",{className:"bar",style:{width:`${a.onTime}%`}}),e.jsxs("span",{className:"val",children:[a.onTime,"%"]})]})}),e.jsx("td",{children:e.jsx("span",{className:`pill ${a.cod?"ok":"off"}`,children:a.cod?"Yes":"No"})}),e.jsx("td",{children:e.jsx("button",{className:`btnTiny ${a.default?"isDefault":""}`,disabled:!0,"data-tooltip":"Disabled in demo",onClick:()=>{},title:"Set as default",children:a.default?"Default":"Set Default"})}),e.jsx("td",{children:k(a.updatedAt)}),e.jsx("td",{children:e.jsx("a",{href:a.trackingUrl,target:"_blank",rel:"noreferrer",children:"Open"})})]},a.id))})]})})]}),e.jsxs("aside",{className:"rail",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Highlights"}),e.jsxs("ul",{className:"facts",children:[e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Total carriers"}),e.jsx("span",{className:"v",children:s.length})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"International capable"}),e.jsx("span",{className:"v",children:s.filter(a=>a.zones.includes("INTL")).length})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"COD enabled"}),e.jsx("span",{className:"v",children:s.filter(a=>a.cod).length})]}),e.jsxs("li",{children:[e.jsx("span",{className:"k",children:"Default set"}),e.jsx("span",{className:"v",children:(w=s.find(a=>a.default))==null?void 0:w.name})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Top On-time"}),e.jsx("ul",{className:"rank",children:s.slice().sort((a,l)=>l.onTime-a.onTime).map(a=>e.jsxs("li",{children:[e.jsx("span",{className:"name",children:a.name}),e.jsx("div",{className:"spark",children:e.jsx("div",{className:"bar",style:{width:`${a.onTime}%`}})}),e.jsxs("span",{className:"pct",children:[a.onTime,"%"]})]},a.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(g,{to:"/shipments",children:"Shipments"})}),e.jsx("li",{children:e.jsx(g,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(g,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(g,{to:"/reports/shipment",children:"Shipment Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"SLA Notes"}),e.jsx("p",{className:"muted",children:"Pickup cutoffs are indicative windows shared by operations. Actual pickup time may vary by location and load."}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Reverse pickup supported where mentioned."}),e.jsx("li",{children:"Temperature control needs advance booking."}),e.jsx("li",{children:"For international, ensure KYC & invoice copies attached."})]})]})]})]}),e.jsx(M,{open:T,title:"Action unavailable",message:"This is a display-only build. Adding carriers is disabled.",onClose:()=>$(!1)})]})};export{H as default};
