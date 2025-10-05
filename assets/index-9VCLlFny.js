import{d as k,u as M,r as h,j as e,N as s,K as O,A,w as v,O as S,H as P,e as D,k as T}from"./index-Dm9gfKqL.js";const C="var(--bg, #0d1117)",l="var(--text, #f3f4f6)",i="var(--muted, #a0a0a7)",p="var(--card, #111318)",d="var(--border, #23262d)",r="var(--accent, #5aa9ff)",b="var(--accent-soft, rgba(90,169,255,0.15))",B="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",I={Page:k.div`
        color: ${l};
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        .card {
            background: ${p};
            border: 1px solid ${d};
            border-radius: 12px;
            box-shadow: ${B};
        }

        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            .crumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                a {
                    color: ${i};
                    text-decoration: none;
                    border-bottom: 1px dashed transparent;
                    &:hover {
                        color: ${r};
                        border-bottom-color: ${r};
                    }
                }
                .current {
                    color: ${l};
                    font-weight: 600;
                }
                .sep {
                    color: ${i};
                }
            }

            .actions {
                display: flex;
                gap: 10px;
                button {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    border-radius: 8px;
                    border: 1px solid ${d};
                    background: ${p};
                    color: ${l};
                    cursor: pointer;
                    transition: border-color 0.25s ease, color 0.25s ease,
                        background 0.25s ease, transform 0.02s ease;
                    &:hover {
                        color: ${r};
                        border-color: ${r};
                        background: rgba(0, 0, 0, 0.08);
                    }
                    &:active {
                        transform: translateY(1px);
                    }
                    &:disabled {
                        opacity: 0.6;
                        cursor: not-allowed;
                    }
                }
                .ghost {
                    background: transparent;
                }
            }
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(5, minmax(180px, 1fr));
            gap: 12px;

            .statCard {
                padding: 14px;
                display: grid;
                grid-template-rows: auto 1fr auto;
                .label {
                    color: ${i};
                    font-weight: 600;
                    letter-spacing: 0.3px;
                }
                .value {
                    font-size: 22px;
                    font-weight: 800;
                    margin-top: 4px;
                }
                .meta {
                    margin-top: 6px;
                    color: ${i};
                    font-size: 12px;
                }
            }

            @media (max-width: 1200px) {
                grid-template-columns: repeat(3, minmax(180px, 1fr));
            }
            @media (max-width: 780px) {
                grid-template-columns: repeat(2, minmax(180px, 1fr));
            }
            @media (max-width: 520px) {
                grid-template-columns: 1fr;
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 380px auto 1fr auto;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;

            .search {
                position: relative;
                display: flex;
                align-items: center;
                .icon {
                    position: absolute;
                    left: 10px;
                    opacity: 0.8;
                }
                input {
                    width: 100%;
                    height: 38px;
                    border-radius: 8px;
                    border: 1px solid ${d};
                    background: ${C};
                    color: ${l};
                    padding: 0 12px 0 34px;
                    transition: border-color 0.25s ease, box-shadow 0.25s ease;
                    &::placeholder {
                        color: ${i};
                    }
                    &:focus {
                        outline: none;
                        border-color: ${r};
                        box-shadow: 0 0 0 3px ${b};
                    }
                }
            }

            .tabs {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .tab {
                    height: 34px;
                    padding: 0 12px;
                    border: 1px solid ${d};
                    background: ${p};
                    color: ${l};
                    border-radius: 999px;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    &:hover {
                        color: ${r};
                        border-color: ${r};
                        background: rgba(0, 0, 0, 0.06);
                    }
                    &.active {
                        color: ${r};
                        border-color: ${r};
                        box-shadow: 0 0 0 3px ${b};
                    }
                }
            }

            .spacer {
                height: 1px;
            }

            .toolbarLinks {
                display: flex;
                gap: 12px;
                a {
                    color: ${i};
                    text-decoration: none;
                    border-bottom: 1px dashed transparent;
                    &:hover {
                        color: ${r};
                        border-bottom-color: ${r};
                    }
                }
            }

            @media (max-width: 1020px) {
                grid-template-columns: 1fr;
                .spacer {
                    display: none;
                }
                .toolbarLinks {
                    justify-content: flex-start;
                    flex-wrap: wrap;
                }
            }
        }

        .tableWrap {
            padding: 0;
            overflow: hidden;

            .table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
            }

            thead th {
                position: sticky;
                top: 0;
                z-index: 2;
                background: ${p};
                border-bottom: 1px solid ${d};
                text-align: left;
                font-weight: 700;
                letter-spacing: 0.3px;
                padding: 12px;
                white-space: nowrap;
            }

            tbody td {
                border-bottom: 1px solid ${d};
                padding: 12px;
                vertical-align: top;
            }

            tbody tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }

            .right {
                text-align: right;
            }
            .nowrap {
                white-space: nowrap;
            }
            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }

            .sub {
                color: ${i};
                font-size: 12px;
                margin-top: 4px;
            }

            .ellipsis {
                max-width: 260px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .minor {
                color: ${i};
                font-size: 12px;
                display: inline-block;
            }

            a {
                color: ${l};
                text-decoration: none;
            }
            a:hover {
                color: ${r};
            }

            .chip {
                display: inline-flex;
                align-items: center;
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${d};
                background: rgba(0, 0, 0, 0.06);
                font-size: 12px;
                &.inprogress {
                    border-color: ${r};
                    box-shadow: 0 0 0 3px ${b};
                }
                &.completed {
                    opacity: 0.9;
                }
                &.planned {
                    opacity: 0.9;
                }
                &.hold {
                    opacity: 0.9;
                }
                &.mute {
                    background: transparent;
                }
            }

            .rowActions {
                display: inline-flex;
                gap: 8px;
                .btn {
                    height: 30px;
                    min-width: 30px;
                    padding: 0 8px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    border: 1px solid ${d};
                    background: ${p};
                    color: ${l};
                    cursor: pointer;
                    transition: all 0.25s ease;
                    &:hover {
                        color: ${r};
                        border-color: ${r};
                        background: rgba(0, 0, 0, 0.06);
                    }
                    &:disabled {
                        opacity: 0.6;
                        cursor: not-allowed;
                    }
                    &.danger:hover {
                        border-color: #c24545;
                    }
                }
            }

            .linksCell {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                a {
                    border-bottom: 1px dashed transparent;
                    &:hover {
                        border-bottom-color: ${r};
                    }
                }
            }

            tfoot td {
                padding: 10px;
            }
            .footBar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                .muted {
                    color: ${i};
                }
                .pager {
                    display: inline-flex;
                    gap: 6px;
                    button {
                        height: 30px;
                        min-width: 30px;
                        padding: 0 10px;
                        border-radius: 8px;
                        border: 1px solid ${d};
                        background: ${p};
                        color: ${l};
                        &:hover {
                            color: ${r};
                            border-color: ${r};
                        }
                        &.active {
                            color: ${r};
                            border-color: ${r};
                            box-shadow: 0 0 0 3px ${b};
                        }
                        &:disabled {
                            opacity: 0.6;
                            cursor: not-allowed;
                        }
                    }
                }
            }
        }

        /* confirm modal */
        .confirmBackdrop {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: center;
            background: rgba(0, 0, 0, 0.5);
            z-index: 50;
        }
        .confirmModal {
            width: min(560px, 96vw);
            padding: 14px;
            .title {
                font-weight: 800;
                margin-bottom: 6px;
            }
            .body {
                color: ${i};
                margin: 6px 0 12px;
            }
            .footer {
                display: flex;
                justify-content: flex-end;
                gap: 10px;
            }
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 8px;
                border: 1px solid ${d};
                background: ${p};
                color: ${l};
                cursor: pointer;
                transition: all 0.25s ease;
                &:hover {
                    color: ${r};
                    border-color: ${r};
                    background: rgba(0, 0, 0, 0.06);
                }
            }
        }
    `},W=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=o=>o<10?"0"+o:""+o,L=o=>{const a=new Date(o);return`${W[a.getDay()]} ${E[a.getMonth()]} ${g(a.getDate())} ${a.getFullYear()}`},R=o=>{const a=new Date(o);return`${g(a.getHours())}:${g(a.getMinutes())}:${g(a.getSeconds())}hrs`},y=o=>`${L(o)} ${R(o)}`,c=[{id:"WO-1001",title:"Blister Pack — Amoxicillin 500mg (10x10)",productId:"MED-AMOX-500",productName:"Amoxicillin 500mg",bomId:"BOM-2001",warehouse:"WH-MUM-01",priority:"High",status:"In Progress",qtyPlanned:1e4,qtyDone:4200,uom:"tabs",startAt:"2025-10-02T09:30:12+05:30",dueAt:"2025-10-06T18:00:00+05:30",owner:"usr-ops-01",ownerName:"S. Mehta",updatedAt:"2025-10-04T15:38:20+05:30",links:{product:"/products/MED-AMOX-500",bom:"/manufacturing/bom/BOM-2001",inventory:"/inventory/lots",production:"/manufacturing/production"}},{id:"WO-1002",title:"Syrup — Paracetamol 250mg/5ml (100ml)",productId:"MED-PARA-250-SYR",productName:"Paracetamol Syrup 250mg/5ml",bomId:"BOM-2007",warehouse:"WH-DEL-02",priority:"Medium",status:"Planned",qtyPlanned:2500,qtyDone:0,uom:"bottles",startAt:"2025-10-05T10:10:00+05:30",dueAt:"2025-10-10T19:00:00+05:30",owner:"usr-ops-02",ownerName:"A. Roy",updatedAt:"2025-10-04T11:12:00+05:30",links:{product:"/products/MED-PARA-250-SYR",bom:"/manufacturing/bom/BOM-2007",inventory:"/inventory/reorder",production:"/manufacturing/production"}},{id:"WO-1003",title:"Capsule — Omeprazole 20mg (Alu-Alu)",productId:"MED-OME-020",productName:"Omeprazole 20mg",bomId:"BOM-2010",warehouse:"WH-MUM-01",priority:"Low",status:"Hold",qtyPlanned:15e3,qtyDone:0,uom:"caps",startAt:"2025-10-03T14:05:45+05:30",dueAt:"2025-10-09T12:00:00+05:30",owner:"usr-ops-04",ownerName:"R. Gupta",updatedAt:"2025-10-04T09:02:10+05:30",links:{product:"/products/MED-OME-020",bom:"/manufacturing/bom/BOM-2010",inventory:"/inventory/warehouses",production:"/manufacturing/production"}},{id:"WO-1004",title:"Tablet — Metformin 500mg (Film Coated)",productId:"MED-MET-500",productName:"Metformin 500mg",bomId:"BOM-2015",warehouse:"WH-PUN-01",priority:"High",status:"Completed",qtyPlanned:8e3,qtyDone:8e3,uom:"tabs",startAt:"2025-09-28T08:45:20+05:30",dueAt:"2025-10-03T17:30:00+05:30",owner:"usr-ops-03",ownerName:"K. Verma",updatedAt:"2025-10-03T18:10:05+05:30",links:{product:"/products/MED-MET-500",bom:"/manufacturing/bom/BOM-2015",inventory:"/inventory/batches",production:"/manufacturing/production"}},{id:"WO-1005",title:"Bottle — Cough Syrup (Ambroxol + Guaifenesin)",productId:"MED-CGH-AMB-GF",productName:"Ambroxol + Guaifenesin",bomId:"BOM-2022",warehouse:"WH-DEL-02",priority:"Medium",status:"In Progress",qtyPlanned:5e3,qtyDone:1200,uom:"bottles",startAt:"2025-10-04T11:30:00+05:30",dueAt:"2025-10-08T20:00:00+05:30",owner:"usr-ops-05",ownerName:"N. Iyer",updatedAt:"2025-10-04T16:05:00+05:30",links:{product:"/products/MED-CGH-AMB-GF",bom:"/manufacturing/bom/BOM-2022",inventory:"/inventory/adjustments",production:"/manufacturing/production"}}],z={total:c.length,inProgress:c.filter(o=>o.status==="In Progress").length,planned:c.filter(o=>o.status==="Planned").length,completed:c.filter(o=>o.status==="Completed").length,hold:c.filter(o=>o.status==="Hold").length},H=[{key:"total",label:"Total WOs"},{key:"inProgress",label:"In Progress"},{key:"planned",label:"Planned"},{key:"completed",label:"Completed"},{key:"hold",label:"On Hold"}],q=["All","Planned","In Progress","Completed","Hold"],x=(o,a)=>o==null?void 0:o.toLowerCase().includes(a);function U(){M();const[o,a]=h.useState(""),[m,N]=h.useState("All"),[$,j]=h.useState(!1),f=h.useMemo(()=>{const t=o.trim().toLowerCase();return c.filter(n=>(m==="All"?!0:n.status===m)?t?x(n.id,t)||x(n.title,t)||x(n.productId,t)||x(n.productName,t)||x(n.ownerName,t)||x(n.warehouse,t):!0:!1)},[o,m]),w=()=>{try{const t=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),u=document.createElement("a");u.href=n,u.download="work-orders.json",document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(n)}catch{}};return e.jsxs(I.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs("div",{className:"head",children:[e.jsxs("div",{className:"crumbs",children:[e.jsx(s,{to:"/manufacturing",end:!0,children:"Manufacturing"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"current",children:"Work Orders"})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{type:"button",title:"Filters",className:"ghost",children:[e.jsx(O,{size:18})," ",e.jsx("span",{children:"Filters"})]}),e.jsxs("button",{type:"button",title:"Export JSON",onClick:w,children:[e.jsx(A,{size:18})," ",e.jsx("span",{children:"Export"})]}),e.jsxs("button",{type:"button",title:"New Work Order (disabled)",disabled:!0,children:[e.jsx(v,{size:18})," ",e.jsx("span",{children:"New"})]}),e.jsx("button",{type:"button",title:"More",className:"ghost",disabled:!0,children:e.jsx(S,{size:18})})]})]}),e.jsx("div",{className:"stats",children:H.map(t=>e.jsxs("div",{className:"statCard card",children:[e.jsx("div",{className:"label",children:t.label}),e.jsx("div",{className:"value",children:z[t.key]}),e.jsxs("div",{className:"meta",children:["Updated ",y("2025-10-04T15:38:20+05:30")]})]},t.key))}),e.jsxs("div",{className:"toolbar card",children:[e.jsxs("div",{className:"search",children:[e.jsx(P,{size:18,className:"icon"}),e.jsx("input",{placeholder:"Search by WO ID, product, owner, warehouse…",value:o,onChange:t=>a(t.target.value),"aria-label":"Search work orders"})]}),e.jsx("div",{className:"tabs",children:q.map(t=>e.jsx("button",{className:`tab ${m===t?"active":""}`,onClick:()=>N(t),type:"button",children:t},t))}),e.jsx("div",{className:"spacer"}),e.jsxs("div",{className:"toolbarLinks",children:[e.jsx(s,{to:"/manufacturing/bom",title:"Bill of Materials",children:"BOM"}),e.jsx(s,{to:"/manufacturing/production",title:"Production",children:"Production"}),e.jsx(s,{to:"/inventory/warehouses",title:"Warehouses",children:"Warehouses"}),e.jsx(s,{to:"/reports/inventory",title:"Inventory Report",children:"Report"})]})]}),e.jsx("div",{className:"tableWrap card",id:"search-print-area",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"WO"}),e.jsx("th",{children:"Product"}),e.jsx("th",{children:"BOM"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Priority"}),e.jsx("th",{children:"Start"}),e.jsx("th",{children:"Due"}),e.jsx("th",{children:"Owner"}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{className:"nowrap",children:"Links"}),e.jsx("th",{className:"right",children:"Actions"})]})}),e.jsxs("tbody",{children:[f.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{className:"mono",children:[e.jsx(s,{to:`/manufacturing/work-orders/${t.id}`,title:"Open work order",children:t.id}),e.jsx("div",{className:"sub",children:t.title})]}),e.jsxs("td",{children:[e.jsx("div",{className:"ellipsis",children:t.productName}),e.jsx(s,{to:t.links.product,className:"minor ellipsis",title:"Open product",children:t.productId})]}),e.jsx("td",{children:e.jsx(s,{to:t.links.bom,className:"mono",title:"Open BOM",children:t.bomId})}),e.jsx("td",{children:e.jsxs("div",{className:"mono",children:[t.qtyDone," / ",t.qtyPlanned," ",t.uom]})}),e.jsx("td",{children:e.jsx("span",{className:`chip ${t.status.replace(/\s+/g,"").toLowerCase()}`,children:t.status})}),e.jsx("td",{children:e.jsx("span",{className:`chip mute ${t.priority.toLowerCase()}`,children:t.priority})}),e.jsx("td",{children:e.jsx("div",{className:"mono",children:y(t.startAt)})}),e.jsx("td",{children:e.jsx("div",{className:"mono",children:y(t.dueAt)})}),e.jsx("td",{children:e.jsx("div",{className:"ellipsis",children:t.ownerName})}),e.jsx("td",{children:e.jsx(s,{to:"/inventory/warehouses",className:"mono",title:"View warehouse",children:t.warehouse})}),e.jsxs("td",{className:"linksCell",children:[e.jsx(s,{to:t.links.inventory,title:"Inventory",children:"Inventory"}),e.jsx(s,{to:t.links.production,title:"Production",children:"Production"})]}),e.jsx("td",{className:"right",children:e.jsxs("div",{className:"rowActions",children:[e.jsx(s,{to:`/manufacturing/work-orders/${t.id}`,className:"btn",title:"Open",children:e.jsx(v,{size:16})}),e.jsx(s,{to:`/print/sticker/${t.id}`,className:"btn",title:"Print sticker",children:e.jsx(D,{size:16})}),e.jsx("button",{className:"btn",title:"Close (disabled)",disabled:!0,onClick:()=>j(!0),children:"Close"}),e.jsx("button",{className:"btn danger",title:"Delete (disabled)",disabled:!0,onClick:()=>j(!0),children:"Delete"})]})})]},t.id)),f.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:12,children:e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"big",children:"No matching work orders"}),e.jsx("div",{className:"muted",children:"Try a different keyword or clear filters."}),e.jsxs("div",{className:"quickLinks",children:[e.jsx(s,{to:"/manufacturing",className:"ghost",children:"Manufacturing Home"}),e.jsx(s,{to:"/manufacturing/bom",className:"ghost",children:"Browse BOM"}),e.jsx(s,{to:"/products",className:"ghost",children:"All Products"})]})]})})})]}),e.jsx("tfoot",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:12,children:e.jsxs("div",{className:"footBar",children:[e.jsxs("div",{className:"muted",children:["Showing ",f.length," of ",c.length]}),e.jsxs("div",{className:"pager",children:[e.jsx("button",{type:"button",disabled:!0,children:"«"}),e.jsx("button",{type:"button",className:"active",children:"1"}),e.jsx("button",{type:"button",disabled:!0,children:"2"}),e.jsx("button",{type:"button",disabled:!0,children:"»"})]})]})})})})]})}),$&&e.jsx("div",{className:"confirmBackdrop",role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"confirmModal card",children:[e.jsx("div",{className:"title",children:"Action Unavailable"}),e.jsx("div",{className:"body",children:"This is a read-only preview. Destructive actions are disabled."}),e.jsx("div",{className:"footer",children:e.jsxs("button",{onClick:()=>j(!1),children:[e.jsx(T,{size:18})," ",e.jsx("span",{children:"Close"})]})})]})})]})}export{U as default};
