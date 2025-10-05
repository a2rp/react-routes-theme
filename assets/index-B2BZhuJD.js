import{d as m,q as w,u as $,r as j,j as e,N as b}from"./index-P_7RwasD.js";const o="var(--text, #f3f4f6)",t="var(--muted, #a0a0a7)",l="var(--card, #111318)",i="var(--border, #23262d)",a="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",u={Page:m.div`
        width: 100%;
        padding: 20px 0 64px;
        color: ${o};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${t};
            }
            .current {
                color: ${o};
            }
        }
    `,Header:m.header`
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
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${t};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${l};
            color: ${o};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        button:active:not(:disabled) {
            transform: translateY(1px);
        }
    `,Banner:m.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${i};
        border-radius: 10px;
        background: color-mix(in oklab, ${a} 10%, transparent);
        color: ${o};
    `,Grid:m.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        /* main column */
        .col.main {
            display: grid;
            gap: 16px;
        }

        .card {
            padding: 16px;
            border: 1px solid ${i};
            border-radius: 12px;
            background: ${l};
            box-shadow: var(--shadow);
        }

        /* status */
        .status .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
        }
        .pill {
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.3px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${i};
            background: color-mix(in oklab, ${a} 10%, transparent);
            color: ${o};
        }
        .eta {
            color: ${t};
            font-size: 12px;
        }

        .milestones {
            display: grid;
            grid-template-columns: repeat(5, minmax(120px, 1fr));
            gap: 12px;
            margin-top: 6px;
        }
        .step {
            display: grid;
            justify-items: center;
            text-align: center;
            gap: 8px;
        }
        .step .dot {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 2px solid ${i};
            background: transparent;
            transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .step.done .dot {
            background: ${a};
            border-color: ${a};
            box-shadow: 0 0 0 3px ${y};
        }
        .step .label {
            font-size: 12px;
            color: ${t};
            white-space: nowrap;
        }

        /* map */
        .mapCard .mapHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .mapCard .legend {
            display: grid;
            grid-auto-flow: column;
            gap: 8px;
            align-items: center;
            color: ${t};
            font-size: 12px;
        }
        .mapCard .legend .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid ${i};
        }
        .mapCard .legend .start {
            background: color-mix(in oklab, ${a} 30%, transparent);
        }
        .mapCard .legend .hub {
            background: color-mix(in oklab, ${a} 45%, transparent);
        }
        .mapCard .legend .end {
            background: ${a};
        }

        .map {
            position: relative;
            overflow: hidden;
            border: 1px dashed ${i};
            border-radius: 12px;
            background: radial-gradient(
                    1200px 300px at 20% 80%,
                    color-mix(in oklab, ${a} 6%, transparent),
                    transparent
                ),
                radial-gradient(
                    900px 200px at 90% 10%,
                    color-mix(in oklab, ${a} 5%, transparent),
                    transparent
                );
            height: 320px;
        }
        .map .route {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
        }
        .map .pin {
            position: absolute;
            transform: translate(-50%, -50%);
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid ${i};
            background: ${l};
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
        }
        .map .pin.start {
            background: color-mix(in oklab, ${a} 25%, ${l});
        }
        .map .pin.hub {
            background: color-mix(in oklab, ${a} 35%, ${l});
        }
        .map .pin.end {
            background: ${a};
        }
        .map .pin .note {
            position: absolute;
            left: 20px;
            top: -4px;
            background: ${l};
            border: 1px solid ${i};
            border-radius: 8px;
            padding: 6px 8px;
            color: ${o};
            white-space: nowrap;
            box-shadow: var(--shadow);
        }

        /* scans table */
        .scans .scansHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .scans .tools {
            display: flex;
            gap: 8px;
        }
        .tableWrap {
            overflow: auto;
            border: 1px solid ${i};
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${l};
            z-index: 1;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${i};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .muted {
            color: ${t};
        }

        /* side column */
        .col.side {
            display: grid;
            gap: 16px;
        }
        .facts .kv,
        .carrier .kv {
            display: grid;
            gap: 8px;
        }
        .kv > div {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .k {
            color: ${t};
        }
        .v a {
            color: inherit;
            text-decoration: underline;
        }

        .parties .addr {
            display: grid;
            gap: 14px;
        }
        .parties .label {
            font-size: 11px;
            color: ${t};
            letter-spacing: 0.3px;
        }
        .parties strong {
            font-size: 14px;
        }

        .carrier .actions {
            margin-top: 10px;
            display: flex;
            gap: 8px;
        }

        /* printable section */
        .print .printHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .labelGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        @media (max-width: 560px) {
            .labelGrid {
                grid-template-columns: 1fr;
            }
        }
        .labelGrid .left .tiny {
            font-size: 11px;
        }
        .labelGrid .right {
            display: grid;
            gap: 6px;
            align-content: start;
        }
        .barcode {
            width: 100%;
            height: 120px;
            border: 1px solid ${i};
            border-radius: 8px;
        }

        /* general */
        h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }
    `},p=(d,N)=>{const n=d instanceof Date?d:new Date(d),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=g=>String(g).padStart(2,"0");return`${`${x[n.getDay()]} ${h[n.getMonth()]} ${s(n.getDate())} ${n.getFullYear()}`} ${s(n.getHours())}:${s(n.getMinutes())}:${s(n.getSeconds())}hrs`},T=({text:d})=>d?e.jsx(u.Banner,{role:"status","aria-live":"polite",children:d}):null,C=()=>{const{shipmentId:d}=w(),N=$(),[n,x]=j.useState(""),h=j.useRef(null),s=j.useMemo(()=>({id:d||"SHIP-784213",orderId:"ORD-3456",invoiceId:"INV-2031",carrier:{name:"BlueDart Express",mode:"Surface",service:"Priority",hotline:"+91 1860 233 1234"},trackingNumber:"BDX3456784213",reference:"PO-9981",pieces:2,weight:"4.20 kg",dims:"45 × 30 × 22 cm",cod:!1,insured:!0,declaredValue:"₹18,900",route:{origin:"New Delhi (DL)",hub:"Mumbai Hub",destination:"Thane (MH)"},eta:"2025-10-05T21:00:00+05:30",status:"Delivered",lastUpdated:"2025-10-05T16:05:20+05:30",timeline:[{ts:"2025-10-01T09:10:00+05:30",loc:"New Delhi",scan:"Order received",note:"Label generated"},{ts:"2025-10-01T16:20:00+05:30",loc:"New Delhi",scan:"Picked up",note:"Pickup by rider BL-21"},{ts:"2025-10-02T08:45:00+05:30",loc:"New Delhi",scan:"In transit",note:"Line-haul departed"},{ts:"2025-10-03T14:30:00+05:30",loc:"Mumbai Hub",scan:"Arrived at hub",note:"Sortation completed"},{ts:"2025-10-04T11:05:00+05:30",loc:"Thane",scan:"Out for delivery",note:"Vehicle TH-09-XX-2211"},{ts:"2025-10-04T17:40:00+05:30",loc:"Thane",scan:"Delivery attempt",note:"Customer not available"},{ts:"2025-10-05T10:20:00+05:30",loc:"Thane",scan:"Out for delivery",note:"Rescheduled by customer"},{ts:"2025-10-05T16:05:20+05:30",loc:"Thane",scan:"Delivered",note:"Signed by A. Sharma"}],addressFrom:{name:"Bluewave Traders",line1:"221B Baker Street, Khan Market",city:"New Delhi",state:"DL",pin:"110003",phone:"+91 98765 43210"},addressTo:{name:"Aarav Sharma",line1:"Plot 14, Industrial Area, Phase 2",city:"Thane",state:"MH",pin:"400607",phone:"+91 90000 12345"}}),[d]);j.useEffect(()=>{let r;return n&&(r=setTimeout(()=>x(""),3e3)),()=>r&&clearTimeout(r)},[n]);const v=async()=>{try{const r=location.origin+location.pathname.replace(/\/$/,"");await navigator.clipboard.writeText(r),x(`Link copied at ${p(new Date,!0)}`)}catch{}},g=()=>{h.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(u.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(u.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Track Shipment"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(b,{to:"/shipments",children:"Shipments"}),e.jsx("span",{children:"/"}),e.jsx(b,{to:`/shipments/${s.id}`,children:s.id}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Track"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:[s.carrier.name," • ",s.carrier.service]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Tracking: ",s.trackingNumber]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",p(s.lastUpdated)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>N(`/shipments/${s.id}`),children:"Back"}),e.jsx("button",{className:"btnPrimary",onClick:v,title:"Copy link for this tracking page",children:"Share"}),e.jsx("button",{className:"btnGhost",onClick:g,children:"Print"}),e.jsx("button",{className:"btnDisabled",disabled:!0,title:"Demo only",children:"Refresh"})]})]}),e.jsx(T,{text:n}),e.jsxs(u.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card status",children:[e.jsxs("div",{className:"top",children:[e.jsx("div",{className:`pill ${s.status.toLowerCase()}`,children:s.status}),e.jsxs("div",{className:"eta",children:["ETA: ",p(s.eta)]})]}),e.jsxs("div",{className:"milestones","aria-label":"Delivery progress",children:[e.jsxs("div",{className:"step done",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"label",children:"Picked up"})]}),e.jsxs("div",{className:"step done",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"label",children:"In transit"})]}),e.jsxs("div",{className:"step done",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"label",children:"At hub"})]}),e.jsxs("div",{className:"step done",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"label",children:"Out for delivery"})]}),e.jsxs("div",{className:"step done current",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"label",children:"Delivered"})]})]})]}),e.jsxs("div",{className:"card mapCard",children:[e.jsxs("div",{className:"mapHeader",children:[e.jsx("h3",{children:"Route"}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot start"})," ",e.jsx("span",{children:"Origin"}),e.jsx("span",{className:"dot hub"})," ",e.jsx("span",{children:"Hub"}),e.jsx("span",{className:"dot end"})," ",e.jsx("span",{children:"Destination"})]})]}),e.jsxs("div",{className:"map",children:[e.jsxs("svg",{viewBox:"0 0 1200 320",className:"route","aria-hidden":"true",children:[e.jsx("defs",{children:e.jsx("filter",{id:"shadow",children:e.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodOpacity:"0.4"})})}),e.jsx("path",{d:"M80,240 C240,60 480,60 640,220 S960,300 1120,120",stroke:"var(--accent)",strokeWidth:"6",fill:"none",filter:"url(#shadow)"})]}),e.jsx("div",{className:"pin start",style:{left:"64px",top:"210px"},children:e.jsx("div",{className:"note",children:s.route.origin})}),e.jsx("div",{className:"pin hub",style:{left:"620px",top:"190px"},children:e.jsx("div",{className:"note",children:s.route.hub})}),e.jsx("div",{className:"pin end",style:{left:"1080px",top:"90px"},children:e.jsx("div",{className:"note",children:s.route.destination})})]})]}),e.jsxs("div",{className:"card scans",children:[e.jsxs("div",{className:"scansHeader",children:[e.jsx("h3",{children:"Scan Events"}),e.jsxs("div",{className:"tools",children:[e.jsx("button",{className:"btnGhost",onClick:v,children:"Copy link"}),e.jsx("button",{className:"btnDisabled",disabled:!0,title:"Demo only",children:"Download POD"})]})]}),e.jsx("div",{className:"tableWrap",role:"region","aria-label":"Scan events (scroll)",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"220px"},children:"Date & Time"}),e.jsx("th",{style:{width:"220px"},children:"Location"}),e.jsx("th",{children:"Scan"}),e.jsx("th",{children:"Notes"})]})}),e.jsx("tbody",{children:s.timeline.map((r,c)=>e.jsxs("tr",{children:[e.jsx("td",{children:p(r.ts)}),e.jsx("td",{children:r.loc}),e.jsx("td",{children:r.scan}),e.jsx("td",{className:"muted",children:r.note})]},c))})]})})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card facts",children:[e.jsx("h3",{children:"Shipment"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Shipment ID"}),e.jsx("span",{className:"v",children:s.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Tracking No."}),e.jsx("span",{className:"v",children:s.trackingNumber})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Order"}),e.jsx("span",{className:"v",children:e.jsx(b,{to:`/orders/${s.orderId}`,children:s.orderId})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Invoice"}),e.jsx("span",{className:"v",children:e.jsx(b,{to:`/invoices/${s.invoiceId}`,children:s.invoiceId})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Reference"}),e.jsx("span",{className:"v",children:s.reference})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Pieces"}),e.jsx("span",{className:"v",children:s.pieces})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Weight"}),e.jsx("span",{className:"v",children:s.weight})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Dimensions"}),e.jsx("span",{className:"v",children:s.dims})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"COD"}),e.jsx("span",{className:"v",children:s.cod?"Yes":"No"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Insured"}),e.jsx("span",{className:"v",children:s.insured?"Yes":"No"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Declared Value"}),e.jsx("span",{className:"v",children:s.declaredValue})]})]})]}),e.jsxs("div",{className:"card parties",children:[e.jsx("h3",{children:"Addresses"}),e.jsxs("div",{className:"addr",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("strong",{children:s.addressFrom.name}),e.jsx("div",{children:s.addressFrom.line1}),e.jsxs("div",{children:[s.addressFrom.city,", ",s.addressFrom.state," ",s.addressFrom.pin]}),e.jsx("div",{className:"muted",children:s.addressFrom.phone})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"To"}),e.jsx("strong",{children:s.addressTo.name}),e.jsx("div",{children:s.addressTo.line1}),e.jsxs("div",{children:[s.addressTo.city,", ",s.addressTo.state," ",s.addressTo.pin]}),e.jsx("div",{className:"muted",children:s.addressTo.phone})]})]})]}),e.jsxs("div",{className:"card carrier",children:[e.jsx("h3",{children:"Carrier"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Name"}),e.jsx("span",{className:"v",children:s.carrier.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Mode"}),e.jsx("span",{className:"v",children:s.carrier.mode})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Service"}),e.jsx("span",{className:"v",children:s.carrier.service})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Hotline"}),e.jsx("span",{className:"v",children:s.carrier.hotline})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnDisabled",disabled:!0,title:"Demo only",children:"Email Updates"}),e.jsx("button",{className:"btnDisabled",disabled:!0,title:"Demo only",children:"Report Issue"})]})]}),e.jsxs("div",{className:"card print",id:"search-print-area",ref:h,children:[e.jsxs("div",{className:"printHeader",children:[e.jsx("h3",{children:"Label & Summary"}),e.jsxs("div",{className:"muted",children:["Created: ",p("2025-10-01T09:10:00+05:30")]})]}),e.jsxs("div",{className:"labelGrid",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"shipFrom",children:[e.jsx("div",{className:"tiny muted",children:"FROM"}),e.jsx("strong",{children:s.addressFrom.name}),e.jsx("div",{children:s.addressFrom.line1}),e.jsxs("div",{children:[s.addressFrom.city,", ",s.addressFrom.state," ",s.addressFrom.pin]}),e.jsx("div",{children:s.addressFrom.phone})]}),e.jsxs("div",{className:"shipTo",children:[e.jsx("div",{className:"tiny muted",children:"TO"}),e.jsx("strong",{children:s.addressTo.name}),e.jsx("div",{children:s.addressTo.line1}),e.jsxs("div",{children:[s.addressTo.city,", ",s.addressTo.state," ",s.addressTo.pin]}),e.jsx("div",{children:s.addressTo.phone})]}),e.jsx("div",{className:"tiny muted",children:"TRACKING"}),e.jsx("div",{className:"trk",children:s.trackingNumber})]}),e.jsxs("div",{className:"right",children:[e.jsxs("svg",{className:"barcode",viewBox:"0 0 400 120",preserveAspectRatio:"none","aria-label":"Barcode",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"120",fill:"var(--card)"}),Array.from({length:70}).map((r,c)=>{const f=c%7===0?4:c%3===0?3:2,k=12+c*(f+2);return e.jsx("rect",{x:k,y:"10",width:f,height:"100",fill:"var(--text)"},c)})]}),e.jsx("div",{className:"tiny muted center",children:s.trackingNumber})]})]}),e.jsxs("div",{className:"miniKV",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Pieces"}),e.jsx("span",{className:"v",children:s.pieces})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Weight"}),e.jsx("span",{className:"v",children:s.weight})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Dims"}),e.jsx("span",{className:"v",children:s.dims})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Insured"}),e.jsx("span",{className:"v",children:s.insured?"Yes":"No"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Value"}),e.jsx("span",{className:"v",children:s.declaredValue})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"ETA"}),e.jsx("span",{className:"v",children:p(s.eta)})]})]})]})]})]})]})};export{C as default};
