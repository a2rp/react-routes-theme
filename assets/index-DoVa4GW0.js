import{d as o,q as I,u as K,r as g,j as e,N as l}from"./index-BpMGcZ_2.js";const b="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",m="var(--card, #111318)",r="var(--border, #23262d)",i="var(--accent, #5aa9ff)",v="var(--accent-soft, rgba(90,169,255,0.15))",N="var(--radius, 14px)",x={Page:o.div`
        width: 100%;
        color: ${b};
        padding: 20px 0 60px;

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${d};
            }
            .current {
                color: ${b};
            }
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${m};
            color: ${b};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${v};
        }
        .btnDanger {
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `,Header:o.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 14px 20px;
        margin-bottom: 14px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${d};
            font-size: 12px;
            flex-wrap: wrap;
        }

        .pill {
            padding: 2px 8px;
            border: 1px solid ${r};
            border-radius: 999px;
            background: color-mix(in oklab, ${i} 10%, transparent);
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
    `,Milestones:o.section`
        padding: 12px 16px;
        margin-bottom: 16px;

        .meter {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 8px;
            list-style: none;
            padding: 0;
            margin: 0 0 10px;
            position: relative;
        }
        .meter::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 17px;
            height: 2px;
            background: ${r};
        }
        .meter li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
            align-items: start;
            position: relative;
        }
        .meter .dot {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid ${r};
            background: ${m};
            z-index: 1;
        }
        .meter li.done .dot {
            background: ${i};
            border-color: ${i};
        }
        .meter li.current .dot {
            box-shadow: 0 0 0 4px ${v};
        }

        .label .k {
            font-weight: 700;
        }
        .label .v {
            color: ${d};
            font-size: 12px;
        }

        .lastScan {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            border-top: 1px solid ${r};
            padding-top: 10px;
        }
        @media (max-width: 900px) {
            .lastScan {
                grid-template-columns: 1fr;
            }
            .meter {
                grid-template-columns: 1fr 1fr;
            }
            .meter::before {
                display: none;
            }
        }
    `,Stats:o.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        margin-bottom: 16px;

        .stat {
            padding: 12px 14px;
            display: grid;
            gap: 6px;
        }
        .label {
            color: ${d};
            font-size: 12px;
        }
        .value {
            font-size: 16px;
            font-weight: 700;
        }
        @media (max-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 700px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,Grid:o.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main .card {
            padding: 14px 16px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .sectionHead {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            margin-bottom: 10px;
            h3 {
                font-size: 16px;
            }
            .rightSmall {
                color: ${d};
                font-size: 12px;
            }
        }

        .summaryGrid {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(2, 1fr);
            @media (max-width: 1100px) {
                grid-template-columns: 1fr;
            }

            .block {
                border: 1px solid ${r};
                border-radius: ${N};
                padding: 12px;
                background: color-mix(in oklab, ${m} 96%, transparent);
            }
            .blockHead {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;
            }
            address {
                font-style: normal;
            }
            .name {
                font-weight: 700;
            }
            .kv {
                display: grid;
                grid-template-columns: 140px 1fr;
                gap: 10px;
                margin-bottom: 8px;
            }
            .kv .k {
                color: ${d};
            }
            .kv.total .v {
                font-weight: 800;
            }
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${r};
            border-radius: ${N};
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            font-weight: 700;
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${r};
            background: ${m};
            color: ${i};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${r};
        }
        td.num,
        th.num {
            text-align: right;
        }

        .printGrid {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(2, 1fr);
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
            .kv {
                display: grid;
                grid-template-columns: 160px 1fr;
                gap: 8px;
            }
            .kv .k {
                color: ${d};
            }
        }

        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${d};
            padding: 6px 8px;
            border-radius: 10px;
            border: 1px solid ${r};
            background: ${m};
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .links a:hover {
            color: ${i};
            border-color: ${i};
            box-shadow: 0 0 0 3px ${v};
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
            background: ${i};
            border: 1px solid ${r};
        }
        .timeline .muted {
            color: ${d};
            font-size: 12px;
        }
        .timeline .note {
            font-size: 12px;
        }

        .map .mapBox {
            position: relative;
            height: 180px;
            border: 1px solid ${r};
            border-radius: ${N};
            background: color-mix(in oklab, ${m} 94%, transparent);
            overflow: hidden;
            margin-top: 8px;
        }
        .map .line {
            position: absolute;
            left: 10%;
            right: 10%;
            top: 50%;
            height: 2px;
            background: ${i};
        }
        .map .pin {
            position: absolute;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: ${i};
            border: 1px solid ${r};
        }
        .map .pin.origin {
            left: 10%;
            top: calc(50% - 6px);
        }
        .map .pin.hub {
            left: 50%;
            top: calc(50% - 6px);
        }
        .map .pin.dest {
            left: 90%;
            top: calc(50% - 6px);
        }

        .map .legend {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-top: 8px;
            color: ${d};
        }
        .map .legend .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${i};
            border: 1px solid ${r};
            margin-right: 6px;
        }
        .map .legend .origin {
            background: ${i};
        }
        .map .legend .hub {
            background: color-mix(in oklab, ${i} 80%, transparent);
        }
        .map .legend .dest {
            background: color-mix(in oklab, ${i} 60%, transparent);
        }
    `,Banner:o.div`
        margin: 10px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${r};
        border-radius: 12px;
        background: color-mix(in oklab, ${i} 12%, transparent);
    `,Overlay:o.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
    `,Modal:o.div`
        width: min(560px, 92vw);
        background: ${m};
        color: ${b};
        border: 1px solid ${r};
        border-radius: ${N};
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.38);
        overflow: hidden;
        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${r};
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
            border-top: 1px solid ${r};
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${m};
            color: ${b};
            font-weight: 700;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${v};
        }
        .btnDanger {
            border-color: #ef4444;
            color: #ef4444;
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, #ef4444 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
        }
    `},k=n=>String(n).padStart(2,"0"),c=(n,u=!1)=>{const t=n instanceof Date?n:new Date(n),j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=`${j[t.getDay()]} ${s[t.getMonth()]} ${k(t.getDate())} ${t.getFullYear()}`;return u?`${p} ${k(t.getHours())}:${k(t.getMinutes())}:${k(t.getSeconds())}hrs`:p},R=({text:n})=>n?e.jsx(x.Banner,{role:"status","aria-live":"polite",children:n}):null,D=({open:n,title:u,message:t,confirmText:j="Confirm",onConfirm:s,onClose:p,variant:h="danger"})=>n?e.jsx(x.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:p,children:e.jsxs(x.Modal,{className:"card",onMouseDown:f=>f.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:u})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:t})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:p,children:"Close"}),e.jsx("button",{className:h==="danger"?"btnDanger":"btnPrimary",onClick:s,children:j})]})]})}):null,z=()=>{const{shipmentId:n="SHP-78421"}=I(),u=K(),t=g.useRef(null),j=g.useMemo(()=>new Date("2025-10-04T15:38:20"),[]),s=g.useMemo(()=>({id:n,status:"In Transit",service:"Surface Plus",carrier:"Delhivery",trackingNumber:"DLV123456789IN",awb:"AWB-9988776655",createdAt:"2025-10-01T09:05:12+05:30",updatedAt:"2025-10-04T12:32:10+05:30",expectedDelivery:"2025-10-06T18:30:00+05:30",source:{name:"Bluewave Central Warehouse",contact:"+91 22 4567 8900",line1:"Plot 18, MIDC",line2:"Andheri East",city:"Mumbai",state:"MH",zip:"400059",country:"India"},destination:{name:"Aarav Sharma",contact:"+91 98765 43210",line1:"C-14, Greenwood Enclave",line2:"Golf Course Road",city:"Gurugram",state:"HR",zip:"122002",country:"India"},packages:[{id:"PKG-01",items:3,weightKg:4.25,dims:"30 × 25 × 18 cm",volumetricKg:5,fragile:!1},{id:"PKG-02",items:2,weightKg:2.1,dims:"28 × 18 × 14 cm",volumetricKg:2.4,fragile:!0}],items:[{sku:"MED-AMOX-500",name:"Amoxicillin 500mg Capsules",batch:"AMX0925A",exp:"2027-06-30",qty:2,uom:"box",weightKg:1.1},{sku:"MED-PARA-650",name:"Paracetamol 650mg Tablets",batch:"PARA0925B",exp:"2026-12-31",qty:1,uom:"box",weightKg:.8},{sku:"MED-ORS-200",name:"ORS Sachets 200ml",batch:"ORS0825",exp:"2026-03-31",qty:2,uom:"pack",weightKg:1.2},{sku:"MED-ZINC-20",name:"Zinc 20mg Tablets",batch:"ZNC0725",exp:"2027-01-31",qty:1,uom:"box",weightKg:.5},{sku:"MED-VITA-D3",name:"Vit D3 60k IU Softgel",batch:"VD30925",exp:"2027-09-30",qty:1,uom:"strip",weightKg:.15}],milestones:[{key:"Created",at:"2025-10-01T09:05:12+05:30",note:"Shipment created by system"},{key:"Packed",at:"2025-10-01T12:40:10+05:30",note:"Items picked and packed"},{key:"Dispatched",at:"2025-10-02T10:02:05+05:30",note:"Handed over to carrier hub"},{key:"In Transit",at:"2025-10-03T08:14:53+05:30",note:"Line haul to NCR hub"},{key:"Out for Delivery",at:null,note:""},{key:"Delivered",at:null,note:""}],costs:{shipping:220,fuelSurcharge:18.5,insurance:12,codFees:0,tax:45.9,total:296.4,currency:"INR"},meta:{paymentTerm:"Prepaid",incoterm:"DDP",mode:"Road",pieces:2,totalWeightKg:6.35,volumetricKg:7.4},lastScan:{when:"2025-10-04T12:30:25+05:30",hub:"Gurugram (NCR)",code:"HUB-NCR-2",remark:"Arrived at destination hub"}}),[n]),[p,h]=g.useState(""),[f,y]=g.useState(!1),[C,$]=g.useState(!1),T=async()=>{try{await navigator.clipboard.writeText(s.trackingNumber),h(`Tracking copied: ${s.trackingNumber}`),setTimeout(()=>h(""),3e3)}catch{h("Could not copy tracking number"),setTimeout(()=>h(""),3e3)}},P=()=>{t.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},M=e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(l,{to:"/shipments",children:"Shipments"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.id})]}),S=s.milestones.findIndex(a=>a.key===s.status),A=s.milestones.reduce((a,w)=>a+(w.at?1:0),0);return e.jsxs(x.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(x.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("h1",{children:["Shipment ",s.id]}),M,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Status: ",e.jsx("strong",{className:`pill ${s.status.replace(/\s+/g,"-").toLowerCase()}`,children:s.status})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Carrier: ",e.jsx("strong",{children:s.carrier})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Service: ",e.jsx("strong",{children:s.service})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",c(s.createdAt,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>u("/shipments"),title:"Back to list",children:"Back"}),e.jsx("button",{className:"btnGhost",onClick:T,title:"Copy tracking number",children:"Copy Tracking"}),e.jsx(l,{className:"btnGhost",to:`/shipments/${s.id}/track`,title:"Live tracking",children:"Track"}),e.jsx(l,{className:"btnGhost",to:`/shipments/${s.id}/labels`,title:"Labels & docs",children:"Labels"}),e.jsx("button",{className:"btnPrimary",onClick:P,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnDanger",onClick:()=>y(!0),title:"Cancel shipment (demo)",children:"Cancel"}),e.jsx("button",{className:"btnPrimary",onClick:()=>$(!0),title:"Mark delivered (demo)",children:"Mark Delivered"})]})]}),e.jsx(R,{text:p}),e.jsxs(x.Milestones,{className:"card","aria-label":"Shipment progress",children:[e.jsx("ol",{className:"meter","data-progress":S,children:s.milestones.map((a,w)=>{const G=!!a.at,H=a.key===s.status;return e.jsxs("li",{className:`${G?"done":""} ${H?"current":""}`,children:[e.jsx("div",{className:"dot","aria-hidden":"true"}),e.jsxs("div",{className:"label",children:[e.jsx("div",{className:"k",children:a.key}),e.jsx("div",{className:"v",children:a.at?c(a.at,!0):w<=S?"processing…":"pending"})]})]},a.key)})}),e.jsxs("div",{className:"lastScan",children:[e.jsxs("div",{children:[e.jsx("span",{className:"muted",children:"Last scan"})," ",e.jsx("strong",{children:c(s.lastScan.when,!0)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"muted",children:"Hub"})," ",e.jsx("strong",{children:s.lastScan.hub})," ",e.jsxs("span",{className:"muted",children:["(",s.lastScan.code,")"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"muted",children:"Remark"})," ",e.jsx("strong",{children:s.lastScan.remark})]})]})]}),e.jsxs(x.Stats,{children:[e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"ETA"}),e.jsx("div",{className:"value",children:c(s.expectedDelivery)})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"Pieces"}),e.jsx("div",{className:"value",children:s.meta.pieces})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"Total Weight"}),e.jsxs("div",{className:"value",children:[s.meta.totalWeightKg," kg"]})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"Volumetric"}),e.jsxs("div",{className:"value",children:[s.meta.volumetricKg," kg"]})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"Mode"}),e.jsx("div",{className:"value",children:s.meta.mode})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"Payment"}),e.jsx("div",{className:"value",children:s.meta.paymentTerm})]})]}),e.jsxs(x.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsx("h3",{children:"Shipment Summary"}),e.jsxs("div",{className:"badgeRow",children:[e.jsxs("span",{className:"badge",children:["AWB ",s.awb]}),e.jsxs("span",{className:"badge",children:["Tracking ",s.trackingNumber]})]})]}),e.jsxs("div",{className:"summaryGrid",children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h4",{children:"From"})}),e.jsxs("address",{children:[e.jsx("div",{className:"name",children:s.source.name}),e.jsx("div",{children:s.source.line1}),e.jsx("div",{children:s.source.line2}),e.jsxs("div",{children:[s.source.city," ",s.source.zip]}),e.jsxs("div",{children:[s.source.state,", ",s.source.country]}),e.jsx("div",{className:"muted",children:s.source.contact})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h4",{children:"To"})}),e.jsxs("address",{children:[e.jsx("div",{className:"name",children:s.destination.name}),e.jsx("div",{children:s.destination.line1}),e.jsx("div",{children:s.destination.line2}),e.jsxs("div",{children:[s.destination.city," ",s.destination.zip]}),e.jsxs("div",{children:[s.destination.state,", ",s.destination.country]}),e.jsx("div",{className:"muted",children:s.destination.contact})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h4",{children:"Carrier"})}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Name"}),e.jsx("span",{className:"v",children:s.carrier})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Service"}),e.jsx("span",{className:"v",children:s.service})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Mode"}),e.jsx("span",{className:"v",children:s.meta.mode})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v",children:c(s.updatedAt,!0)})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h4",{children:"Costs"})}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Shipping"}),e.jsxs("span",{className:"v",children:[s.costs.currency," ",s.costs.shipping.toFixed(2)]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Fuel Surcharge"}),e.jsxs("span",{className:"v",children:[s.costs.currency," ",s.costs.fuelSurcharge.toFixed(2)]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Insurance"}),e.jsxs("span",{className:"v",children:[s.costs.currency," ",s.costs.insurance.toFixed(2)]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"COD Fees"}),e.jsxs("span",{className:"v",children:[s.costs.currency," ",s.costs.codFees.toFixed(2)]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Tax"}),e.jsxs("span",{className:"v",children:[s.costs.currency," ",s.costs.tax.toFixed(2)]})]}),e.jsxs("div",{className:"kv total",children:[e.jsx("span",{className:"k",children:"Total"}),e.jsxs("span",{className:"v",children:[s.costs.currency," ",s.costs.total.toFixed(2)]})]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsx("h3",{children:"Items"}),e.jsxs("div",{className:"rightSmall",children:["Total lines: ",s.items.length]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Item"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{children:"UoM"}),e.jsx("th",{className:"num",children:"Weight (kg)"})]})}),e.jsx("tbody",{children:s.items.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(l,{to:`/products/${encodeURIComponent(a.sku)}`,title:"View product",children:a.sku})}),e.jsx("td",{children:a.name}),e.jsx("td",{children:a.batch}),e.jsx("td",{children:c(a.exp)}),e.jsx("td",{className:"num",children:a.qty}),e.jsx("td",{children:a.uom}),e.jsx("td",{className:"num",children:a.weightKg.toFixed(2)})]},a.sku))})]})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("header",{className:"sectionHead",children:[e.jsx("h3",{children:"Packages"}),e.jsxs("div",{className:"rightSmall",children:["Total: ",s.packages.length]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Package"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Weight (kg)"}),e.jsx("th",{children:"Vol. Weight (kg)"}),e.jsx("th",{children:"Dimensions"}),e.jsx("th",{children:"Fragile"})]})}),e.jsx("tbody",{children:s.packages.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id}),e.jsx("td",{className:"num",children:a.items}),e.jsx("td",{className:"num",children:a.weightKg.toFixed(2)}),e.jsx("td",{className:"num",children:a.volumetricKg.toFixed(2)}),e.jsx("td",{children:a.dims}),e.jsx("td",{children:a.fragile?"Yes":"No"})]},a.id))})]})})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:t,children:[e.jsxs("header",{className:"sectionHead",children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"rightSmall",children:["Generated: ",c(j,!0)]})]}),e.jsxs("div",{className:"printGrid",children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Shipment"}),e.jsx("span",{className:"v",children:s.id})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Tracking"}),e.jsx("span",{className:"v",children:s.trackingNumber})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Carrier"}),e.jsx("span",{className:"v",children:s.carrier})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Service"}),e.jsx("span",{className:"v",children:s.service})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:s.status})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"ETA"}),e.jsx("span",{className:"v",children:c(s.expectedDelivery)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Pieces"}),e.jsx("span",{className:"v",children:s.meta.pieces})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Weight"}),e.jsxs("span",{className:"v",children:[s.meta.totalWeightKg," kg"]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Volumetric"}),e.jsxs("span",{className:"v",children:[s.meta.volumetricKg," kg"]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"From"}),e.jsxs("span",{className:"v",children:[s.source.city,", ",s.source.state]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"To"}),e.jsxs("span",{className:"v",children:[s.destination.city,", ",s.destination.state]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v",children:c(s.updatedAt,!0)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Total Cost"}),e.jsxs("span",{className:"v",children:[s.costs.currency," ",s.costs.total.toFixed(2)]})]})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(l,{to:"/shipments",children:"All Shipments"})}),e.jsx("li",{children:e.jsx(l,{to:`/shipments/${s.id}/track`,children:"Live Tracking"})}),e.jsx("li",{children:e.jsx(l,{to:`/shipments/${s.id}/labels`,children:"Labels & Docs"})}),e.jsx("li",{children:e.jsx(l,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(l,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(l,{to:"/reports/shipment",children:"Shipment Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsx("ul",{className:"timeline",children:s.milestones.slice(0,A).map(a=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:a.key}),e.jsx("div",{className:"muted",children:c(a.at,!0)}),a.note?e.jsx("div",{className:"note",children:a.note}):null]})]},a.key))})]}),e.jsxs("div",{className:"card map",children:[e.jsx("h3",{children:"Route Snapshot"}),e.jsxs("div",{className:"mapBox","aria-label":"Route mini map (placeholder)",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"pin origin",title:"Origin"}),e.jsx("div",{className:"pin hub",title:"Hub"}),e.jsx("div",{className:"pin dest",title:"Destination"})]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot origin"})," Origin",e.jsx("span",{className:"dot hub"})," Hub",e.jsx("span",{className:"dot dest"})," Destination"]})]})]})]}),e.jsx(D,{open:f,title:"Cancel shipment?",message:"This is a demo. Cancelling is disabled here, but this is how the confirmation would look.",confirmText:"I Understand",variant:"danger",onConfirm:()=>y(!1),onClose:()=>y(!1)}),e.jsx(D,{open:C,title:"Mark as delivered?",message:"This is a demo. State changes are disabled.",confirmText:"Close",variant:"primary",onConfirm:()=>$(!1),onClose:()=>$(!1)})]})};export{z as default};
