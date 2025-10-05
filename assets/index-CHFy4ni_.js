import{d as j,q as k,u as $,r as g,j as e,N as i}from"./index-BM8H5dnP.js";const t="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",o="var(--card, #111318)",l="var(--border, #23262d)",r="var(--accent, #5aa9ff)",N={Page:j.div`
        color: ${t};
        padding: 16px;

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }
        .muted {
            color: ${c};
        }
        .dot {
            margin: 0 8px;
            color: ${c};
        }

        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
            .crumb {
                color: ${c};
            }
            .crumb:hover {
                color: ${r};
            }
            .current {
                color: ${t};
                font-weight: 600;
            }
            .sep {
                color: ${c};
            }
        }

        .titlebar {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 16px;
            h1 {
                font-size: 24px;
                line-height: 1.3;
                margin-bottom: 6px;
            }
            .meta {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                align-items: center;
            }
            .right.actions {
                display: flex;
                gap: 8px;
                align-items: center;
                flex-wrap: wrap;
            }
            .btn {
                background: ${o};
                border: 1px solid ${l};
                color: ${t};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            .btn:hover {
                border-color: ${r};
                color: ${r};
                background: rgba(0, 0, 0, 0.08);
            }
            .btn.danger:hover {
                box-shadow: 0 0 0 3px
                    color-mix(in oklab, crimson 22%, transparent);
            }
            .btn.link {
                text-decoration: none;
                display: inline-flex;
                align-items: center;
            }
        }

        .badge {
            border: 1px solid ${l};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: color-mix(in oklab, ${o} 92%, transparent);
            /* white-space: nowrap;
            border: 1px solid #f00; */
        }
        .tone-priority {
            color: ${r};
            border-color: ${r};
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
        .tone-soft {
            color: ${t};
            background: color-mix(in oklab, ${o} 80%, transparent);
        }
        .tone-planned {
            color: ${t};
        }
        .tone-progress {
            color: ${r};
            border-color: ${r};
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
        .tone-done {
            color: #7cd992;
            border-color: #2b9957;
            background: color-mix(in oklab, #2b9957 14%, transparent);
        }
        .tone-hold {
            color: #f0c36a;
            border-color: #b8872a;
            background: color-mix(in oklab, #b8872a 12%, transparent);
        }
        .tone-cancel {
            color: #ff8c8c;
            border-color: #a43a3a;
            background: color-mix(in oklab, #a43a3a 14%, transparent);
        }

        .strip {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 16px;
            .tile {
                background: ${o};
                border: 1px solid ${l};
                border-radius: 12px;
                padding: 12px;
                box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
                .k {
                    color: ${c};
                    font-size: 12px;
                }
                .v {
                    margin-top: 6px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .chip {
                    border: 1px dashed ${l};
                    padding: 2px 6px;
                    border-radius: 999px;
                    font-size: 12px;
                }
                .chip.soft {
                    opacity: 0.9;
                }
                a {
                    color: ${t};
                }
                a:hover {
                    color: ${r};
                }
            }
        }
        @media (max-width: 1200px) {
            .strip {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (max-width: 700px) {
            .strip {
                grid-template-columns: 1fr;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1.3fr 1fr;
            gap: 16px;
            align-items: start;
        }
        @media (max-width: 1200px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .col {
            display: grid;
            gap: 16px;
        }

        .card {
            background: ${o};
            border: 1px solid ${l};
            border-radius: 12px;
            padding: 12px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }
        .card-h {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
            h2 {
                font-size: 16px;
            }
            .links {
                display: flex;
                gap: 8px;
                align-items: center;
            }
            .links a {
                color: ${c};
            }
            .links a:hover {
                color: ${r};
            }
        }

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 700px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }
        .k {
            color: ${c};
            font-size: 12px;
        }
        .v {
            margin-top: 4px;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            th,
            td {
                padding: 10px;
                border-bottom: 1px solid ${l};
                vertical-align: top;
            }
            th {
                text-align: left;
                color: ${r};
                background: ${o};
            }
            tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .op-notes {
            margin-top: 8px;
            display: grid;
            gap: 6px;
        }
        .op-notes .note {
            font-size: 13px;
            color: ${t};
        }

        .list {
            list-style: none;
            display: grid;
            gap: 8px;
        }
        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            border: 1px solid ${l};
            border-radius: 10px;
            padding: 10px;
            background: color-mix(in oklab, ${o} 94%, transparent);
        }
        .row .l .name {
            color: ${t};
        }
        .row .r {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip-user {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid ${l};
            border-radius: 999px;
            padding: 4px 10px;
            background: color-mix(in oklab, ${o} 92%, transparent);
            color: ${t};
            text-decoration: none;
        }
        .chip-user:hover {
            color: ${r};
            border-color: ${r};
        }
        .avatar {
            width: 22px;
            height: 22px;
            border-radius: 999px;
            border: 1px solid ${l};
            display: grid;
            place-items: center;
            font-size: 11px;
            background: color-mix(in oklab, ${o} 85%, transparent);
        }

        .links-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            a {
                display: inline-flex;
                gap: 6px;
                color: ${t};
            }
            a:hover {
                color: ${r};
            }
        }
        @media (max-width: 700px) {
            .links-grid {
                grid-template-columns: 1fr;
            }
        }

        .notes {
            color: ${t};
            line-height: 1.7;
        }
        .notes a {
            color: ${r};
        }

        .activity {
            list-style: none;
            display: grid;
            gap: 10px;
        }
        .activity li {
            display: grid;
            grid-template-columns: 200px 1fr auto;
            gap: 10px;
            border-bottom: 1px dashed ${l};
            padding-bottom: 8px;
        }
        @media (max-width: 900px) {
            .activity li {
                grid-template-columns: 1fr;
            }
        }
        .activity .time {
            color: ${c};
        }
        .activity .by {
            text-align: right;
        }
        @media (max-width: 900px) {
            .activity .by {
                text-align: left;
            }
        }

        .audit {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 8px;
            align-items: center;
        }
        .audit .k {
            color: ${c};
        }
        .audit .v {
            color: ${t};
        }

        .explore {
            margin-top: 16px;
        }
        .explore .links {
            margin-top: 8px;
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        .explore a {
            color: ${c};
        }
        .explore a:hover {
            color: ${r};
        }
    `,Modal:j.div`
        position: fixed;
        inset: 0;
        z-index: 60;
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .panel {
            position: absolute;
            left: 50%;
            top: 20%;
            transform: translateX(-50%);
            width: min(520px, 92vw);
            background: ${o};
            border: 1px solid ${l};
            border-radius: 12px;
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }
        h3 {
            margin-bottom: 8px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 12px;
        }
        button {
            background: ${o};
            color: ${t};
            border: 1px solid ${l};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        button:hover {
            border-color: ${r};
            color: ${r};
        }
    `},w=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=n=>String(n).padStart(2,"0");function h(n){if(!n)return"—";const d=new Date(n);return`${w[d.getDay()]} ${P[d.getMonth()]} ${x(d.getDate())} ${d.getFullYear()}`}function p(n){if(!n)return"—";const d=new Date(n),m=`${x(d.getHours())}:${x(d.getMinutes())}:${x(d.getSeconds())}hrs`;return`${h(n)} ${m}`}function b(n){if(!n)return"—";const d=new Date(n);return`${x(d.getHours())}:${x(d.getMinutes())}:${x(d.getSeconds())}hrs`}const C=({open:n,title:d="Action",message:m="Demo only",onClose:s})=>n?e.jsxs(N.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-title",children:[e.jsx("div",{className:"backdrop",onClick:s}),e.jsxs("div",{className:"panel",role:"document",children:[e.jsx("h3",{id:"demo-title",children:d}),e.jsx("p",{className:"muted",children:m}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:s,children:"Close"})})]})]}):null;function M(){const{woId:n="WO-0001"}=k();$();const[d,m]=g.useState(!1),s=g.useMemo(()=>({id:n,status:"In Progress",priority:"High",product:{id:"MED-AMOX-500",name:"Amoxicillin 500mg Capsule",category:"Antibiotics"},bom:{id:"BOM-1007",rev:"R2"},batch:{id:"BATCH-23A91",lot:"LOT-7231",expiry:"2026-03-31T00:00:00.000Z"},warehouse:{id:"WH-MUM-01",name:"Mumbai Central DC"},vendor:{id:"VEND-1043",name:"BlueCaps Machinery"},purchaseOrder:{id:"PO-20877"},shipment:{id:"SHIP-7012"},createdAt:"2025-10-06T02:22:50+05:30",scheduledStart:"2025-10-04T09:30:15.000Z",dueDate:"2025-10-06T18:00:00.000Z",startedAt:"2025-10-04T10:05:12.000Z",completedAt:null,lastUpdated:"2025-10-05T20:52:55.477Z",quantity:{uom:"packs",planned:1200,produced:340,scrap:5},operations:[{id:"OP-10",name:"Mixing",workstation:"MIX-01",owner:"Akash",start:"2025-10-04T10:10:00.000Z",end:"2025-10-04T11:05:00.000Z",status:"Done",notes:"Viscosity checked"},{id:"OP-20",name:"Granulation",workstation:"GRN-02",owner:"Mira",start:"2025-10-04T11:20:00.000Z",end:"",status:"Running",notes:"Humidity stable"},{id:"OP-30",name:"Drying",workstation:"DRY-01",owner:"—",start:"",end:"",status:"Pending",notes:""},{id:"OP-40",name:"Compression",workstation:"CMP-03",owner:"—",start:"",end:"",status:"Pending",notes:""},{id:"OP-50",name:"Blister Packaging",workstation:"PKG-01",owner:"—",start:"",end:"",status:"Pending",notes:""}],materials:[{id:"RM-AMOX",name:"Amoxicillin Trihydrate",type:"API",uom:"kg",planned:85,issued:24,lot:"LOT-API-991",expiry:"2027-06-30T00:00:00.000Z"},{id:"RM-LACT",name:"Lactose Monohydrate",type:"Excipient",uom:"kg",planned:40,issued:10,lot:"LOT-EXC-402",expiry:"2028-01-31T00:00:00.000Z"},{id:"PK-CAP",name:"Empty Hard Gelatin Capsules Size-0",type:"Pack",uom:"pcs",planned:72e3,issued:2e4,lot:"LOT-PK-118",expiry:"2029-12-31T00:00:00.000Z"},{id:"PK-ALU",name:"Alu Foil 250µ",type:"Pack",uom:"roll",planned:42,issued:11,lot:"LOT-PK-232",expiry:""}],qc:[{id:"QC-01",name:"Assay",result:"Conforming",at:"2025-10-04T10:50:12.000Z",by:"QA-Devika"},{id:"QC-02",name:"Uniformity",result:"Pending",at:"",by:""},{id:"QC-03",name:"Dissolution",result:"Pending",at:"",by:""}],assignees:[{id:"USR-101",name:"Akash Patel"},{id:"USR-219",name:"Mira Shah"},{id:"USR-333",name:"Arun B"}],activity:[{id:"ACT-1",text:"Work order created",at:"2025-10-04T09:31:10.000Z",by:"system"},{id:"ACT-2",text:"BOM R2 attached (BOM-1007)",at:"2025-10-04T09:33:27.000Z",by:"system"},{id:"ACT-3",text:"Started Mixing (OP-10)",at:"2025-10-04T10:10:03.000Z",by:"Akash"},{id:"ACT-4",text:"QC Assay passed",at:"2025-10-04T10:50:12.000Z",by:"QA-Devika"},{id:"ACT-5",text:"Granulation begun (OP-20)",at:"2025-10-04T11:20:05.000Z",by:"Mira"}]}),[n]),u=()=>m(!0),v=()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>window.print(),50),setTimeout(()=>document.body.classList.remove("print-section-mode"),500)},y={Planned:"tone-planned","In Progress":"tone-progress","On Hold":"tone-hold",Completed:"tone-done",Cancelled:"tone-cancel"}[s.status]||"tone-progress";return e.jsxs(N.Page,{children:[e.jsxs("div",{className:"crumbs",children:[e.jsx(i,{to:"/manufacturing",className:"crumb",children:"Manufacturing"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx(i,{to:"/manufacturing/work-orders",className:"crumb",children:"Work Orders"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"crumb current",children:s.id})]}),e.jsxs("header",{className:"titlebar",children:[e.jsxs("div",{className:"left",children:[e.jsxs("h1",{children:["Work Order ",e.jsx("span",{className:"mono",children:s.id})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:`badge ${y}`,children:s.status}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{className:"muted",children:"Priority:"})," ",e.jsx("span",{className:"badge tone-priority",children:s.priority}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{className:"muted",children:"Created:"})," ",e.jsx("span",{children:p(s.createdAt)}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{className:"muted",children:"Updated:"})," ",e.jsx("span",{children:p(s.lastUpdated)})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx(i,{className:"btn link",to:`/manufacturing/production?woId=${encodeURIComponent(s.id)}`,children:"Open Production"}),e.jsx("button",{onClick:v,className:"btn",children:"Print"}),e.jsx("button",{onClick:u,className:"btn",title:"Display demo only",children:"Start"}),e.jsx("button",{onClick:u,className:"btn",title:"Display demo only",children:"Complete"}),e.jsx("button",{onClick:u,className:"btn danger",title:"Display demo only",children:"Cancel"})]})]}),e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs("main",{id:"search-print-area",children:[e.jsxs("section",{className:"strip",children:[e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"k",children:"Product"}),e.jsxs("div",{className:"v",children:[e.jsx(i,{to:`/products/${s.product.id}`,className:"mono",children:s.product.id}),e.jsxs("span",{className:"muted",children:[" — ",s.product.name]})]})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"k",children:"BOM"}),e.jsxs("div",{className:"v",children:[e.jsx(i,{to:`/manufacturing/bom/${s.bom.id}`,className:"mono",children:s.bom.id}),e.jsxs("span",{className:"muted",children:[" (",s.bom.rev,")"]})]})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"k",children:"Batch / Lot"}),e.jsxs("div",{className:"v",children:[e.jsx(i,{to:"/inventory/batches",className:"mono",children:s.batch.id}),e.jsxs("span",{className:"muted",children:[" — ",s.batch.lot]}),e.jsxs("span",{className:"chip",children:["Expiry: ",h(s.batch.expiry)]})]})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"k",children:"Warehouse"}),e.jsxs("div",{className:"v",children:[e.jsx(i,{to:"/inventory/warehouses",className:"mono",children:s.warehouse.id}),e.jsxs("span",{className:"muted",children:[" — ",s.warehouse.name]})]})]}),e.jsxs("div",{className:"tile",children:[e.jsx("div",{className:"k",children:"Quantity"}),e.jsxs("div",{className:"v",children:[e.jsx("span",{className:"mono",children:s.quantity.planned})," ",s.quantity.uom,e.jsxs("span",{className:"chip soft",children:["Produced: ",s.quantity.produced]}),e.jsxs("span",{className:"chip soft",children:["Scrap: ",s.quantity.scrap]})]})]})]}),e.jsxs("section",{className:"grid",children:[e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-h",children:[e.jsx("h2",{children:"Schedule"}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/appointments/calendar",children:"Calendar"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(i,{to:"/reports/production",children:"Reports"})]})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Scheduled Start"}),e.jsx("div",{className:"v",children:p(s.scheduledStart)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Due"}),e.jsx("div",{className:"v",children:p(s.dueDate)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Started"}),e.jsx("div",{className:"v",children:p(s.startedAt)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Completed"}),e.jsx("div",{className:"v",children:s.completedAt?p(s.completedAt):"—"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-h",children:[e.jsx("h2",{children:"Operations"}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/manufacturing/work-orders",children:"All Work Orders"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(i,{to:`/manufacturing/work-orders/${encodeURIComponent(s.id)}`,children:"This Work Order"})]})]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Op"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Workstation"}),e.jsx("th",{children:"Owner"}),e.jsx("th",{children:"Start"}),e.jsx("th",{children:"End"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:s.operations.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"mono",children:a.id}),e.jsx("td",{children:a.name}),e.jsx("td",{children:e.jsx(i,{to:"/manufacturing/production",title:"Open production",children:a.workstation})}),e.jsx("td",{children:a.owner||"—"}),e.jsx("td",{children:a.start?b(a.start):"—"}),e.jsx("td",{children:a.end?b(a.end):"—"}),e.jsx("td",{children:e.jsx("span",{className:`badge ${a.status==="Done"?"tone-done":a.status==="Running"?"tone-progress":"tone-planned"}`,children:a.status})})]},a.id))})]}),s.operations.some(a=>a.notes)&&e.jsx("div",{className:"op-notes",children:s.operations.filter(a=>a.notes).map(a=>e.jsxs("div",{className:"note",children:[e.jsx("span",{className:"mono",children:a.id}),e.jsx("span",{className:"muted",children:" — "}),e.jsx("span",{children:a.notes})]},a.id))})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-h",children:[e.jsx("h2",{children:"Quality Checks"}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/labs",children:"Labs"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(i,{to:"/reports/quality",children:"Quality Report"})]})]}),e.jsx("ul",{className:"list",children:s.qc.map(a=>e.jsxs("li",{className:"row",children:[e.jsxs("div",{className:"l",children:[e.jsx("div",{className:"mono",children:a.id}),e.jsx("div",{className:"name",children:a.name})]}),e.jsxs("div",{className:"r",children:[e.jsx("span",{className:`badge ${a.result==="Conforming"?"tone-done":"tone-planned"}`,children:a.result||"Pending"}),e.jsx("span",{className:"muted",children:a.at?` • ${p(a.at)}`:""}),a.by?e.jsx("span",{className:"muted",children:` • by ${a.by}`}):null]})]},a.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-h",children:e.jsx("h2",{children:"Assignees"})}),e.jsx("div",{className:"chips",children:s.assignees.map(a=>e.jsxs(i,{to:`/admin/users/${a.id}`,className:"chip-user",title:a.name,children:[e.jsx("span",{className:"avatar",children:a.name.split(" ").map(f=>f[0]).join("").slice(0,2).toUpperCase()}),e.jsx("span",{className:"label",children:a.name})]},a.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-h",children:e.jsx("h2",{children:"Linked"})}),e.jsxs("div",{className:"links-grid",children:[e.jsxs(i,{to:`/products/${s.product.id}`,children:["Product: ",e.jsx("span",{className:"mono",children:s.product.id})]}),e.jsxs(i,{to:`/manufacturing/bom/${s.bom.id}`,children:["BOM: ",e.jsx("span",{className:"mono",children:s.bom.id})]}),e.jsxs(i,{to:`/purchase-orders/${s.purchaseOrder.id}`,children:["PO: ",e.jsx("span",{className:"mono",children:s.purchaseOrder.id})]}),e.jsxs(i,{to:`/shipments/${s.shipment.id}`,children:["Shipment: ",e.jsx("span",{className:"mono",children:s.shipment.id})]}),e.jsxs(i,{to:`/vendors/${s.vendor.id}`,children:["Vendor: ",e.jsx("span",{className:"mono",children:s.vendor.id})]}),e.jsxs(i,{to:"/inventory/warehouses",children:["Warehouse: ",e.jsx("span",{className:"mono",children:s.warehouse.id})]})]})]})]}),e.jsxs("div",{className:"col",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-h",children:[e.jsx("h2",{children:"Materials"}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/inventory",children:"Inventory"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(i,{to:"/categories",children:"Categories"})]})]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Item"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Lot"}),e.jsx("th",{children:"Planned"}),e.jsx("th",{children:"Issued"}),e.jsx("th",{children:"Expiry"})]})}),e.jsx("tbody",{children:s.materials.map(a=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(i,{to:`/products/${a.id}`,className:"mono",children:a.id}),e.jsx("div",{className:"muted",children:a.name})]}),e.jsx("td",{children:a.type}),e.jsx("td",{children:a.lot||"—"}),e.jsxs("td",{children:[a.planned," ",a.uom]}),e.jsxs("td",{children:[a.issued," ",a.uom]}),e.jsx("td",{children:a.expiry?h(a.expiry):"—"})]},a.id))})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-h",children:e.jsx("h2",{children:"Tools & Machines"})}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{className:"row",children:[e.jsxs("div",{className:"l",children:[e.jsx("div",{className:"mono",children:"MIX-01"}),e.jsx("div",{className:"name",children:"Planetary Mixer"})]}),e.jsx("div",{className:"r",children:e.jsx("span",{className:"badge tone-soft",children:"Calibrated"})})]}),e.jsxs("li",{className:"row",children:[e.jsxs("div",{className:"l",children:[e.jsx("div",{className:"mono",children:"GRN-02"}),e.jsx("div",{className:"name",children:"High Shear Granulator"})]}),e.jsx("div",{className:"r",children:e.jsx("span",{className:"badge tone-soft",children:"Calibrated"})})]}),e.jsxs("li",{className:"row",children:[e.jsxs("div",{className:"l",children:[e.jsx("div",{className:"mono",children:"DRY-01"}),e.jsx("div",{className:"name",children:"Fluid Bed Dryer"})]}),e.jsx("div",{className:"r",children:e.jsxs("span",{className:"badge tone-soft",children:["Due: ",h("2025-11-15T00:00:00.000Z")]})})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-h",children:e.jsx("h2",{children:"Notes"})}),e.jsxs("div",{className:"notes",children:[e.jsx("p",{children:"Humidity maintained at 45–50% RH in granulation area. Ensure blister sealing temp at 180–190°C."}),e.jsxs("p",{children:["Packaging art: ",e.jsx(i,{to:"/settings/print-templates",children:"Print Templates"})," • Storage: ",e.jsx(i,{to:"/inventory/warehouses",children:"WH-MUM-01"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-h",children:e.jsx("h2",{children:"Activity"})}),e.jsx("ul",{className:"activity",children:s.activity.map(a=>e.jsxs("li",{children:[e.jsx("div",{className:"time",children:p(a.at)}),e.jsx("div",{className:"text",children:a.text}),e.jsxs("div",{className:"by muted",children:["by ",a.by]})]},a.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-h",children:e.jsx("h2",{children:"Audit"})}),e.jsxs("div",{className:"audit",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:p(s.createdAt)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Last Updated"}),e.jsx("span",{className:"v",children:p(s.lastUpdated)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Source"}),e.jsx("span",{className:"v",children:"Manufacturing module"})]})]})]})]})]}),e.jsxs("section",{className:"explore",children:[e.jsx("h3",{children:"Explore"}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/manufacturing/work-orders",children:"All Work Orders"}),e.jsxs(i,{to:`/manufacturing/bom/${s.bom.id}`,children:["BOM ",s.bom.id]}),e.jsxs(i,{to:`/products/${s.product.id}`,children:["Product ",s.product.id]}),e.jsxs(i,{to:`/purchase-orders/${s.purchaseOrder.id}`,children:["PO ",s.purchaseOrder.id]}),e.jsx(i,{to:"/inventory/lots",children:"Lots"}),e.jsx(i,{to:"/inventory/transfers",children:"Transfers"}),e.jsx(i,{to:"/reports/inventory",children:"Inventory Report"}),e.jsx(i,{to:"/reports/sales",children:"Sales Report"}),e.jsx(i,{to:"/admin/users",children:"Users"}),e.jsx(i,{to:"/settings/appearance",children:"Appearance"})]})]})]}),e.jsx(C,{open:d,title:"Demo",message:"Display-only theme. Actions are not available.",onClose:()=>m(!1)})]})}export{M as default};
