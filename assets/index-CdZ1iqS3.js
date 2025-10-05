import{d as v,u as P,r as w,j as e,L as r}from"./index-CvWKwy17.js";const o="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",c="var(--card, #111318)",t="var(--border, #23262d)",i="var(--accent, #5aa9ff)",g={Wrap:v.div`
        width: 100%;
        color: ${o};
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            background: ${c};
            border: 1px solid ${t};
            border-radius: 12px;
            padding: 12px 14px;
            box-shadow: var(--shadow);

            .breadcrumbs {
                display: flex;
                gap: 8px;
                align-items: center;
                a,
                strong,
                span {
                    color: ${l};
                }
                a:hover {
                    color: ${i};
                }
                strong {
                    color: ${o};
                    font-weight: 600;
                }
            }

            .toolbar {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;

                .btn-link {
                    display: inline-flex;
                    align-items: center;
                    height: 32px;
                    padding: 0 10px;
                    border-radius: 8px;
                    border: 1px solid ${t};
                    background: transparent;
                    color: ${o};
                }
                .btn-link:hover {
                    color: ${i};
                    border-color: ${i};
                }

                button {
                    height: 32px;
                    padding: 0 12px;
                    border-radius: 8px;
                    background: ${c};
                    border: 1px solid ${t};
                    color: ${o};
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease;
                }
                button:hover {
                    border-color: ${i};
                    color: ${i};
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        .tabs {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            a {
                padding: 6px 10px;
                border: 1px solid ${t};
                border-radius: 8px;
                color: ${l};
                background: color-mix(in oklab, ${c} 96%, transparent);
            }
            a:hover {
                color: ${i};
                border-color: ${i};
            }
        }

        .card {
            background: ${c};
            border: 1px solid ${t};
            border-radius: 12px;
            box-shadow: var(--shadow);
            padding: 16px;
        }

        .section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;

            h2 {
                font-size: 18px;
            }
            .meta {
                display: flex;
                gap: 14px;
                color: ${l};
                font-size: 12px;
            }

            .section-actions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .btn-link {
                    display: inline-flex;
                    align-items: center;
                    height: 30px;
                    padding: 0 10px;
                    border-radius: 8px;
                    border: 1px solid ${t};
                    color: ${o};
                }
                .btn-link:hover {
                    color: ${i};
                    border-color: ${i};
                }
                button {
                    height: 30px;
                    padding: 0 10px;
                    border-radius: 8px;
                    border: 1px solid ${t};
                    background: ${c};
                    color: ${o};
                }
                button:hover {
                    border-color: ${i};
                    color: ${i};
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        /* KPI grid */
        .grid-kpi .kpis {
            display: grid;
            grid-template-columns: repeat(5, minmax(160px, 1fr));
            gap: 12px;
        }
        @media (max-width: 1100px) {
            .grid-kpi .kpis {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 640px) {
            .grid-kpi .kpis {
                grid-template-columns: 1fr;
            }
        }
        .kpi {
            border: 1px solid ${t};
            border-radius: 10px;
            padding: 12px;
            background: color-mix(in oklab, ${c} 96%, transparent);
        }
        .kpi-title {
            color: ${l};
            font-size: 12px;
        }
        .kpi-value {
            font-size: 24px;
            font-weight: 700;
            margin: 4px 0 6px;
        }
        .kpi-value.warn {
            color: #f59e0b;
        } /* amber */
        .kpi-foot a {
            color: ${l};
        }
        .kpi-foot a:hover {
            color: ${i};
        }

        /* Tables */
        .table-wrap {
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            position: sticky;
            top: 0;
            background: ${c};
            border-bottom: 1px solid ${t};
            padding: 10px;
            color: ${i};
        }
        tbody td {
            border-top: 1px solid ${t};
            padding: 10px;
            vertical-align: top;
        }
        td.num {
            text-align: right;
        }
        .muted {
            color: ${l};
            font-size: 12px;
        }
        .text-error {
            color: #ef4444;
        } /* red */

        .row-actions {
            display: flex;
            gap: 6px;
            align-items: center;
            flex-wrap: wrap;
            .btn-link {
                border: 1px solid ${t};
                padding: 4px 8px;
                border-radius: 8px;
                color: ${o};
            }
            .btn-link:hover {
                border-color: ${i};
                color: ${i};
            }
            button {
                padding: 4px 8px;
                border-radius: 8px;
                border: 1px solid ${t};
                background: ${c};
                color: ${o};
            }
            button:hover {
                border-color: ${i};
                color: ${i};
            }
        }

        /* Chips */
        .chip {
            display: inline-flex;
            align-items: center;
            height: 22px;
            padding: 0 8px;
            border-radius: 999px;
            border: 1px solid ${t};
            background: color-mix(in oklab, ${c} 96%, transparent);
            font-size: 12px;
        }
        .chip.ok {
            border-color: ${i};
            color: ${i};
        }
        .chip.warn {
            border-color: #f59e0b;
            color: #f59e0b;
        }
        .chip.muted {
            color: ${l};
        }

        /* Work Centers */
        .wc-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(220px, 1fr));
            gap: 12px;
        }
        @media (max-width: 1400px) {
            .wc-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 900px) {
            .wc-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 640px) {
            .wc-grid {
                grid-template-columns: 1fr;
            }
        }
        .wc-card {
            border: 1px solid ${t};
            border-radius: 10px;
            padding: 12px;
        }
        .wc-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .wc-head h3 {
            font-size: 14px;
        }
        .wc-body .kv {
            display: grid;
            grid-template-columns: 100px 1fr;
            margin: 6px 0;
        }
        .wc-body .k {
            color: ${l};
        }
        .wc-foot {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }
        .wc-foot a {
            color: ${l};
            border-bottom: 1px dashed ${t};
        }
        .wc-foot a:hover {
            color: ${i};
            border-color: ${i};
        }

        /* Timeline */
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 14px 200px 1fr;
            gap: 10px;
            align-items: start;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${i};
            margin-top: 6px;
        }
        .timeline .when {
            color: ${l};
            font-size: 12px;
        }
        .timeline .what {
            color: ${o};
        }

        .footlinks {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: flex-end;
            a {
                color: ${l};
            }
            a:hover {
                color: ${i};
            }
        }
    `,ModalOverlay:v.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    `,ModalCard:v.div`
        width: min(640px, 96vw);
        background: ${c};
        border: 1px solid ${t};
        border-radius: 12px;
        box-shadow: var(--shadow);
        padding: 0;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${t};
        }
        header h3 {
            font-size: 16px;
        }

        .body {
            padding: 14px 16px;
            color: ${o};
        }
        footer {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            padding: 12px 16px;
            border-top: 1px solid ${t};
            button {
                padding: 6px 12px;
                border-radius: 8px;
                border: 1px solid ${t};
                background: ${c};
                color: ${o};
            }
            button:hover {
                border-color: ${i};
                color: ${i};
            }
        }
    `},y=d=>{try{return new Date(d).toDateString()}catch{return d}},N=d=>String(d).padStart(2,"0"),S=d=>{try{const a=new Date(d),u=N(a.getHours()),m=N(a.getMinutes()),j=N(a.getSeconds());return`${u}:${m}:${j}hrs`}catch{return d}},h=d=>`${y(d)} ${S(d)}`,n={buildISO:"2025-10-05T20:32:19.337Z",commitISO:"2025-10-06T02:02:13+05:30",runningWOs:[{id:"WO-2025-0007",orderRef:"ORD-3001",product:{id:"PROD-AMOX-500-CAP",name:"Amoxicillin 500mg Capsule (Strip 10)"},qtyPlanned:2e3,qtyDone:1150,status:"In Progress",startedAt:"2025-10-04T08:45:10+05:30",dueAt:"2025-10-05T18:00:00+05:30",workCenter:"WC-MIX-01",priority:"High"},{id:"WO-2025-0008",orderRef:"ORD-3002",product:{id:"PROD-PARA-650-TAB",name:"Paracetamol 650mg Tablet (Bottle 100)"},qtyPlanned:1e3,qtyDone:420,status:"In Progress",startedAt:"2025-10-04T10:20:00+05:30",dueAt:"2025-10-06T12:30:00+05:30",workCenter:"WC-TABLET-01",priority:"Medium"},{id:"WO-2025-0009",orderRef:"ORD-3004",product:{id:"PROD-SYRUP-IBU-100",name:"Ibuprofen 100mg/5ml Syrup (100ml)"},qtyPlanned:600,qtyDone:120,status:"Waiting QC",startedAt:"2025-10-03T14:05:00+05:30",dueAt:"2025-10-05T17:00:00+05:30",workCenter:"WC-LIQ-02",priority:"High"},{id:"WO-2025-0010",orderRef:"ORD-3005",product:{id:"PROD-CREAM-HC-15",name:"Hydrocortisone 1% Cream (15g)"},qtyPlanned:800,qtyDone:0,status:"Queued",startedAt:"2025-10-05T09:00:00+05:30",dueAt:"2025-10-07T18:30:00+05:30",workCenter:"WC-SEMISOLID-01",priority:"Low"}],workCenters:[{id:"WC-MIX-01",name:"Mixer Line 01",state:"Running",oee:83,shift:"A",crew:4},{id:"WC-TABLET-01",name:"Tablet Press 01",state:"Setup",oee:72,shift:"A",crew:3},{id:"WC-COAT-01",name:"Coating Drum",state:"Idle",oee:0,shift:"A",crew:1},{id:"WC-LIQ-02",name:"Liquid Fill 02",state:"Hold-QC",oee:58,shift:"A",crew:2},{id:"WC-SEMISOLID-01",name:"Semisolid Line",state:"Queued",oee:0,shift:"A",crew:2}],schedule:[{id:"SLOT-01",wc:"WC-MIX-01",wo:"WO-2025-0007",from:"2025-10-04T08:30:00+05:30",to:"2025-10-04T12:00:00+05:30"},{id:"SLOT-02",wc:"WC-TABLET-01",wo:"WO-2025-0008",from:"2025-10-04T10:30:00+05:30",to:"2025-10-04T16:30:00+05:30"},{id:"SLOT-03",wc:"WC-LIQ-02",wo:"WO-2025-0009",from:"2025-10-04T13:00:00+05:30",to:"2025-10-04T17:30:00+05:30"}],shortages:[{bom:"BOM-PARA-650",productId:"RAW-PARA-API",name:"Paracetamol API",need:25,uom:"kg",available:10,warehouseId:"WH-01"},{bom:"BOM-AMOX-500",productId:"RAW-AMOX-API",name:"Amoxicillin API",need:18,uom:"kg",available:12,warehouseId:"WH-02"},{bom:"BOM-IBU-100",productId:"RAW-IBU-API",name:"Ibuprofen API",need:12,uom:"kg",available:12,warehouseId:"WH-02"}],qc:[{id:"QC-1131",wo:"WO-2025-0009",step:"Assay",status:"Pending",due:"2025-10-04T15:00:00+05:30"},{id:"QC-1132",wo:"WO-2025-0007",step:"Uniformity",status:"In Progress",due:"2025-10-04T14:30:00+05:30"},{id:"QC-1133",wo:"WO-2025-0008",step:"Dissolution",status:"Scheduled",due:"2025-10-05T10:00:00+05:30"}],downtime:[{id:"DT-5001",wc:"WC-TABLET-01",reason:"Punch wear",started:"2025-10-04T07:15:00+05:30",ended:"2025-10-04T09:05:00+05:30"},{id:"DT-5002",wc:"WC-COAT-01",reason:"Cleaning",started:"2025-10-03T18:20:00+05:30",ended:"2025-10-03T19:10:00+05:30"}],activity:[{ts:"2025-10-04T11:58:22+05:30",text:"WO-2025-0007 lot 2 moved to uniformity QC."},{ts:"2025-10-04T10:45:02+05:30",text:"Tablet Press 01 changed tooling (13mm capsule)."},{ts:"2025-10-04T09:15:40+05:30",text:"Issued raw material: Paracetamol API 10kg from WH-01."},{ts:"2025-10-04T08:47:05+05:30",text:"Shift A handover completed for Mixer Line 01."}]},I=({open:d,title:a,message:u,onCancel:m,onConfirm:j})=>d?e.jsx(g.ModalOverlay,{role:"dialog","aria-modal":"true",children:e.jsxs(g.ModalCard,{className:"card",children:[e.jsx("header",{children:e.jsx("h3",{children:a})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:u})}),e.jsxs("footer",{children:[e.jsx("button",{onClick:m,children:"Cancel"}),e.jsx("button",{onClick:j,children:"Confirm"})]})]})}):null,D=({open:d,onClose:a})=>d?e.jsx(g.ModalOverlay,{role:"dialog","aria-modal":"true",children:e.jsxs(g.ModalCard,{className:"card",children:[e.jsx("header",{children:e.jsx("h3",{children:"Demo Mode"})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:"This is a display-only preview. Actions are disabled."})}),e.jsx("footer",{children:e.jsx("button",{onClick:a,children:"Close"})})]})}):null;function M(){P();const[d,a]=w.useState(!1),[u,m]=w.useState(!1),[j,$]=w.useState(null),k=w.useMemo(()=>{const s=n.runningWOs.filter(p=>["In Progress","Waiting QC"].includes(p.status)).length,x=n.runningWOs.filter(p=>new Date(p.dueAt)<new Date&&p.status!=="Queued").length,b=n.runningWOs.filter(p=>p.status==="Queued").length,W=n.runningWOs.reduce((p,T)=>p+(T.qtyDone||0),0);return{running:s,delayed:x,queued:b,outputToday:W}},[]),C=()=>{const s=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),x=URL.createObjectURL(s),b=document.createElement("a");b.href=x,b.download="production-demo.json",b.click(),URL.revokeObjectURL(x)},O=()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>{document.body.classList.remove("print-section-mode")},300)},f=s=>{$(s),a(!0)},A=()=>{a(!1),m(!0)};return e.jsxs(g.Wrap,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs("div",{className:"topbar",children:[e.jsxs("nav",{className:"breadcrumbs",children:[e.jsx(r,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:"/manufacturing",children:"Manufacturing"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Production"})]}),e.jsxs("div",{className:"toolbar",children:[e.jsx("button",{title:"Create work order (disabled)",disabled:!0,children:"New Work Order"}),e.jsx("button",{title:"Start shift (disabled)",disabled:!0,children:"Start Shift"}),e.jsx("button",{onClick:O,title:"Print section",children:"Print"}),e.jsx("button",{onClick:C,title:"Export JSON",children:"Export"}),e.jsx(r,{className:"btn-link",to:"/manufacturing/work-orders",children:"Work Orders"}),e.jsx(r,{className:"btn-link",to:"/manufacturing/bom",children:"BOM"}),e.jsx(r,{className:"btn-link",to:"/inventory/warehouses",children:"Warehouses"}),e.jsx(r,{className:"btn-link",to:"/reports/production",children:"Production Report"})]})]}),e.jsxs("div",{className:"tabs",children:[e.jsx("a",{href:"#overview",children:"Overview"}),e.jsx("a",{href:"#running",children:"Running Orders"}),e.jsx("a",{href:"#workcenters",children:"Work Centers"}),e.jsx("a",{href:"#schedule",children:"Schedule"}),e.jsx("a",{href:"#materials",children:"Materials"}),e.jsx("a",{href:"#quality",children:"Quality"}),e.jsx("a",{href:"#downtime",children:"Downtime"}),e.jsx("a",{href:"#activity",children:"Activity"})]}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs("section",{id:"overview",className:"grid-kpi card",children:[e.jsxs("header",{className:"section-header",children:[e.jsx("h2",{children:"Production Overview"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Build: ",h(n.buildISO)]}),e.jsxs("span",{children:["Last Commit: ",h(n.commitISO)]})]})]}),e.jsxs("div",{className:"kpis",children:[e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"kpi-title",children:"Running"}),e.jsx("div",{className:"kpi-value",children:k.running}),e.jsx("div",{className:"kpi-foot",children:e.jsx(r,{to:"/manufacturing/work-orders",children:"Go to Work Orders"})})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"kpi-title",children:"Delayed"}),e.jsx("div",{className:"kpi-value warn",children:k.delayed}),e.jsx("div",{className:"kpi-foot",children:e.jsx(r,{to:"/reports/production",children:"See Delays Report"})})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"kpi-title",children:"Queued"}),e.jsx("div",{className:"kpi-value",children:k.queued}),e.jsx("div",{className:"kpi-foot",children:e.jsx(r,{to:"/manufacturing/work-orders",children:"Queue"})})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"kpi-title",children:"Output Today"}),e.jsx("div",{className:"kpi-value",children:k.outputToday}),e.jsx("div",{className:"kpi-foot",children:e.jsx(r,{to:"/reports/production",children:"Daily Output"})})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"kpi-title",children:"OEE (Mixer 01)"}),e.jsxs("div",{className:"kpi-value",children:[n.workCenters[0].oee,"%"]}),e.jsx("div",{className:"kpi-foot",children:e.jsx("a",{href:"#workcenters",children:"Work Centers"})})]})]})]}),e.jsxs("section",{id:"running",className:"card",children:[e.jsxs("header",{className:"section-header",children:[e.jsx("h2",{children:"Running Work Orders"}),e.jsxs("div",{className:"section-actions",children:[e.jsx("button",{title:"Bulk complete (disabled)",disabled:!0,children:"Bulk Complete"}),e.jsx("button",{onClick:()=>f("Close Period"),title:"Close production period",children:"Close Period"})]})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"WO #"}),e.jsx("th",{children:"Product"}),e.jsx("th",{children:"Planned"}),e.jsx("th",{children:"Done"}),e.jsx("th",{children:"Work Center"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Started"}),e.jsx("th",{children:"Due"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:n.runningWOs.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(r,{to:`/manufacturing/work-orders/${s.id}`,children:s.id}),e.jsxs("div",{className:"muted",children:["Sales ",e.jsx(r,{to:`/orders/${s.orderRef}`,children:s.orderRef})]})]}),e.jsx("td",{children:e.jsx(r,{to:`/products/${s.product.id}`,children:s.product.name})}),e.jsx("td",{className:"num",children:s.qtyPlanned}),e.jsx("td",{className:"num",children:s.qtyDone}),e.jsx("td",{children:e.jsx(r,{to:`/manufacturing/work-orders?wc=${s.workCenter}`,children:s.workCenter})}),e.jsx("td",{children:e.jsx("span",{className:`chip ${s.status==="In Progress"?"ok":s.status==="Waiting QC"?"warn":"muted"}`,children:s.status})}),e.jsx("td",{children:e.jsx("span",{className:`chip ${s.priority==="High"?"warn":"muted"}`,children:s.priority})}),e.jsx("td",{children:e.jsx("div",{children:h(s.startedAt)})}),e.jsx("td",{children:e.jsx("div",{className:new Date(s.dueAt)<new Date?"text-error":"",children:h(s.dueAt)})}),e.jsxs("td",{className:"row-actions",children:[e.jsx("button",{onClick:()=>f(`Mark ${s.id} Done`),title:"Mark as Done",children:"Mark Done"}),e.jsx("button",{onClick:()=>f(`Scrap on ${s.id}`),title:"Scrap",children:"Scrap"}),e.jsx(r,{className:"btn-link",to:`/manufacturing/work-orders/${s.id}`,children:"Open"})]})]},s.id))})]})})]}),e.jsxs("section",{id:"workcenters",className:"card",children:[e.jsxs("header",{className:"section-header",children:[e.jsx("h2",{children:"Work Centers"}),e.jsxs("div",{className:"section-actions",children:[e.jsx(r,{className:"btn-link",to:"/manufacturing/work-orders",children:"All Orders"}),e.jsx(r,{className:"btn-link",to:"/reports/production",children:"Reports"})]})]}),e.jsx("div",{className:"wc-grid",children:n.workCenters.map(s=>e.jsxs("div",{className:"wc-card",children:[e.jsxs("div",{className:"wc-head",children:[e.jsx("h3",{children:s.name}),e.jsx("span",{className:`chip ${s.state==="Running"?"ok":s.state.includes("Hold")?"warn":"muted"}`,children:s.state})]}),e.jsxs("div",{className:"wc-body",children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Code"}),e.jsx("span",{className:"v",children:s.id})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"OEE"}),e.jsxs("span",{className:"v",children:[s.oee,"%"]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Shift"}),e.jsx("span",{className:"v",children:s.shift})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{className:"k",children:"Crew"}),e.jsx("span",{className:"v",children:s.crew})]})]}),e.jsxs("div",{className:"wc-foot",children:[e.jsx(r,{to:`/manufacturing/work-orders?wc=${s.id}`,children:"View Orders"}),e.jsx(r,{to:`/reports/production?wc=${s.id}`,children:"KPI"})]})]},s.id))})]}),e.jsxs("section",{id:"schedule",className:"card",children:[e.jsxs("header",{className:"section-header",children:[e.jsxs("h2",{children:["Schedule — ",y(n.buildISO)]}),e.jsx("div",{className:"section-actions",children:e.jsx("button",{title:"Reschedule (disabled)",disabled:!0,children:"Auto-Reschedule"})})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Slot"}),e.jsx("th",{children:"Work Center"}),e.jsx("th",{children:"Work Order"}),e.jsx("th",{children:"From"}),e.jsx("th",{children:"To"}),e.jsx("th",{children:"Navigate"})]})}),e.jsx("tbody",{children:n.schedule.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx(r,{to:`/manufacturing/work-orders?wc=${s.wc}`,children:s.wc})}),e.jsx("td",{children:e.jsx(r,{to:`/manufacturing/work-orders/${s.wo}`,children:s.wo})}),e.jsx("td",{children:h(s.from)}),e.jsx("td",{children:h(s.to)}),e.jsxs("td",{className:"row-actions",children:[e.jsx(r,{className:"btn-link",to:`/manufacturing/work-orders/${s.wo}`,children:"Open WO"}),e.jsx(r,{className:"btn-link",to:`/print/sticker/${s.wo}`,children:"Print Sticker"})]})]},s.id))})]})})]}),e.jsxs("section",{id:"materials",className:"card",children:[e.jsxs("header",{className:"section-header",children:[e.jsx("h2",{children:"Materials Requirements"}),e.jsxs("div",{className:"section-actions",children:[e.jsx(r,{className:"btn-link",to:"/purchase-orders",children:"Purchase Orders"}),e.jsx(r,{className:"btn-link",to:"/inventory",children:"Inventory"})]})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"BOM"}),e.jsx("th",{children:"Item"}),e.jsx("th",{children:"Need"}),e.jsx("th",{children:"Available"}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Links"})]})}),e.jsx("tbody",{children:n.shortages.map(s=>{const x=s.available>=s.need;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r,{to:`/manufacturing/bom/${s.bom}`,children:s.bom})}),e.jsxs("td",{children:[e.jsx(r,{to:`/products/${s.productId}`,children:s.name}),e.jsx("div",{className:"muted",children:s.productId})]}),e.jsxs("td",{className:"num",children:[s.need," ",s.uom]}),e.jsxs("td",{className:"num",children:[s.available," ",s.uom]}),e.jsx("td",{children:e.jsx(r,{to:"/settings/warehouses",children:s.warehouseId})}),e.jsx("td",{children:e.jsx("span",{className:`chip ${x?"ok":"warn"}`,children:x?"OK":"Short"})}),e.jsxs("td",{className:"row-actions",children:[e.jsx(r,{className:"btn-link",to:"/purchase-orders/new",children:"Raise PO"}),e.jsx(r,{className:"btn-link",to:"/inventory/warehouses",children:"Reallocate"})]})]},s.productId)})})]})})]}),e.jsxs("section",{id:"quality",className:"card",children:[e.jsxs("header",{className:"section-header",children:[e.jsx("h2",{children:"Quality Checks"}),e.jsxs("div",{className:"section-actions",children:[e.jsx(r,{className:"btn-link",to:"/labs",children:"Labs"}),e.jsx(r,{className:"btn-link",to:"/reports/quality",children:"Quality Reports"})]})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"QC #"}),e.jsx("th",{children:"WO #"}),e.jsx("th",{children:"Step"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Due"}),e.jsx("th",{children:"Open"})]})}),e.jsx("tbody",{children:n.qc.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx(r,{to:`/manufacturing/work-orders/${s.wo}`,children:s.wo})}),e.jsx("td",{children:s.step}),e.jsx("td",{children:e.jsx("span",{className:`chip ${s.status==="In Progress"?"ok":s.status==="Pending"?"warn":"muted"}`,children:s.status})}),e.jsx("td",{children:h(s.due)}),e.jsx("td",{className:"row-actions",children:e.jsx(r,{className:"btn-link",to:`/manufacturing/work-orders/${s.wo}`,children:"Open WO"})})]},s.id))})]})})]}),e.jsxs("section",{id:"downtime",className:"card",children:[e.jsxs("header",{className:"section-header",children:[e.jsx("h2",{children:"Downtime"}),e.jsx("div",{className:"section-actions",children:e.jsx("button",{onClick:()=>f("Acknowledge Downtime"),title:"Acknowledge",children:"Acknowledge"})})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Work Center"}),e.jsx("th",{children:"Reason"}),e.jsx("th",{children:"Start"}),e.jsx("th",{children:"End"}),e.jsx("th",{children:"Links"})]})}),e.jsx("tbody",{children:n.downtime.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx(r,{to:`/manufacturing/work-orders?wc=${s.wc}`,children:s.wc})}),e.jsx("td",{children:s.reason}),e.jsx("td",{children:h(s.started)}),e.jsx("td",{children:h(s.ended)}),e.jsx("td",{className:"row-actions",children:e.jsx(r,{className:"btn-link",to:"/reports/production",children:"Downtime Report"})})]},s.id))})]})})]}),e.jsxs("section",{id:"activity",className:"card",children:[e.jsxs("header",{className:"section-header",children:[e.jsx("h2",{children:"Activity"}),e.jsx("div",{className:"section-actions",children:e.jsx(r,{className:"btn-link",to:"/admin/audit-log",children:"Audit Log"})})]}),e.jsx("ul",{className:"timeline",children:n.activity.map((s,x)=>e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsx("div",{className:"when",children:h(s.ts)}),e.jsx("div",{className:"what",children:s.text})]},x))})]})]}),e.jsxs("div",{className:"footlinks",children:[e.jsx(r,{to:"/manufacturing/bom",children:"Go to BOM"}),e.jsx(r,{to:"/manufacturing/work-orders",children:"Work Orders"}),e.jsx(r,{to:"/inventory",children:"Inventory"}),e.jsx(r,{to:"/reports",children:"Reports"}),e.jsx(r,{to:"/settings",children:"Settings"})]}),e.jsx(I,{open:d,title:j||"Proceed?",message:"This action will be simulated. Continue?",onCancel:()=>a(!1),onConfirm:A}),e.jsx(D,{open:u,onClose:()=>m(!1)})]})}export{M as default};
