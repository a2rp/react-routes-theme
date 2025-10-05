import{d as p,u as R,r as g,j as e,N as r}from"./index-DwhKQ_MC.js";import{l as C,a as A,b as x,N as T,O as H,P as V,r as L}from"./index-iMuACjyt.js";const M="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",y="var(--card, #111318)",m="var(--border, #23262d)",d="var(--accent, #5aa9ff)",U="var(--accent-soft, rgba(90,169,255,0.15))",c={Page:p.div`
        display: grid;
        gap: 16px;
        padding: 16px;

        a {
            color: ${M};
        }
        a:hover {
            color: ${d};
        }
        .card {
            background: ${y};
            border: 1px solid ${m};
            border-radius: 12px;
            box-shadow: var(--shadow);
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .num {
            text-align: right;
        }
        button {
            background: ${y};
            color: ${M};
            border: 1px solid ${m};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            display: inline-flex;
            gap: 8px;
            align-items: center;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
        }
        button:hover {
            border-color: ${d};
            color: ${d};
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Header:p.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px;

        .left {
            display: grid;
            gap: 8px;
            .breadcrumbs {
                display: flex;
                gap: 8px;
                color: ${o};
                a {
                    color: ${o};
                }
                a:hover {
                    color: ${d};
                }
            }
            h1 {
                font-size: 22px;
                letter-spacing: 0.3px;
            }
            .meta {
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
                color: ${o};
                span {
                    display: inline-flex;
                    gap: 6px;
                    align-items: center;
                }
                svg {
                    opacity: 0.8;
                }
            }
        }

        .right {
            display: grid;
            gap: 12px;
            justify-items: end;

            .toolbar {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                justify-content: end;
            }
            .quickLinks {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: end;
                a {
                    border: 1px dashed ${m};
                    padding: 6px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                    color: ${o};
                }
                a:hover {
                    border-color: ${d};
                    color: ${d};
                }
            }
        }

        @media (max-width: 960px) {
            grid-template-columns: 1fr;
            .right {
                justify-items: start;
            }
            .right .quickLinks {
                justify-content: start;
            }
        }
    `,Filters:p.div`
        padding: 12px 16px;
        .row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr auto auto;
            gap: 14px;
            align-items: center;
        }
        .group {
            display: grid;
            gap: 8px;
            .label {
                color: ${o};
                display: inline-flex;
                gap: 8px;
                align-items: center;
            }
            .chips {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                button {
                    padding: 6px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                }
                button[aria-pressed="true"] {
                    border-color: ${d};
                    color: ${d};
                    box-shadow: 0 0 0 3px ${U};
                }
            }
        }
        .spacer {
            flex: 1;
        }
        .actions {
            display: flex;
            gap: 8px;
        }

        @media (max-width: 1200px) {
            .row {
                grid-template-columns: 1fr 1fr;
            }
            .actions {
                grid-column: 1 / -1;
            }
        }
    `,Kpis:p.div`
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 12px;

        .kpi {
            padding: 14px;
            display: grid;
            gap: 8px;
            .k {
                color: ${o};
                font-size: 12px;
            }
            .v {
                font-size: 22px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
            .s {
                color: ${o};
                font-size: 12px;
            }
        }

        @media (max-width: 1400px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 780px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,TableCard:p.div`
        padding: 0;

        .head {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            padding: 14px 16px;
            border-bottom: 1px solid ${m};

            h2 {
                font-size: 16px;
            }
            .headActions {
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
                a {
                    border: 1px dashed ${m};
                    padding: 6px 10px;
                    border-radius: 999px;
                    font-size: 12px;
                    color: ${o};
                }
                a:hover {
                    border-color: ${d};
                    color: ${d};
                }
            }
        }

        .tableWrap {
            overflow: auto;
            padding: 6px 0 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            min-width: 880px;

            thead th {
                position: sticky;
                top: 0;
                background: ${y};
                border-bottom: 1px solid ${m};
                padding: 10px 12px;
                text-align: left;
                color: ${o};
                font-weight: 600;
            }
            tbody td {
                padding: 10px 12px;
                border-bottom: 1px solid ${m};
            }
            tbody tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }
        }
    `,FooterNav:p.div`
        padding: 12px 16px;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }
        .links a {
            color: ${o};
        }
        .links a:hover {
            color: ${d};
        }
        .stamp {
            color: ${o};
            font-size: 12px;
        }

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
            row-gap: 10px;
        }
    `,ModalBackdrop:p.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.6);
        display: grid;
        place-items: center;
        z-index: 40;
    `,ModalCard:p.div`
        width: min(520px, 96vw);
        padding: 12px;
        .modalHead {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            padding: 8px 8px 0;
            .title {
                font-weight: 700;
            }
            .iconBtn {
                border-radius: 8px;
                padding: 6px;
            }
        }
        .modalBody {
            padding: 12px 8px;
            color: ${o};
        }
        .modalFoot {
            padding: 8px;
            display: flex;
            justify-content: end;
            gap: 8px;
        }
    `},F=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],B=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function w(s){const i=new Date(s);return`${F[i.getDay()]} ${B[i.getMonth()]} ${String(i.getDate()).padStart(2,"0")} ${i.getFullYear()}`}function I(s){const i=new Date(s),a=String(i.getHours()).padStart(2,"0"),n=String(i.getMinutes()).padStart(2,"0"),l=String(i.getSeconds()).padStart(2,"0");return`${a}:${n}:${l}hrs`}function u(s){return`${w(s)} ${I(s)}`}const W="2025-10-06T02:53:30+05:30";function z(s,i){const a=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),n=URL.createObjectURL(a),l=document.createElement("a");l.href=n,l.download=s,l.click(),URL.revokeObjectURL(n)}function h(s,i){if(!(i!=null&&i.length))return;const a=Object.keys(i[0]),n=b=>`"${String(b??"").replaceAll('"','""')}"`,l=[a.map(n).join(","),...i.map(b=>a.map(E=>n(b[E])).join(","))].join(`
`),j=new Blob([l],{type:"text/csv;charset=utf-8;"}),t=URL.createObjectURL(j),v=document.createElement("a");v.href=t,v.download=s,v.click(),URL.revokeObjectURL(t)}const N=[{id:"PROD-1001",name:"N95 Respirator Mask",sku:"MASK-N95-10",cat:"PPE",uom:"Pack",soH:820,monthlyOut:540,route:"/products/PROD-1001"},{id:"MED-AMOX-500",name:"Amoxicillin 500mg",sku:"MED-AMOX-500",cat:"Antibiotic",uom:"Strip",soH:1200,monthlyOut:480,route:"/medicines/MED-AMOX-500"},{id:"PROD-1019",name:"Infrared Thermometer",sku:"THERMO-IR",cat:"Devices",uom:"Unit",soH:145,monthlyOut:132,route:"/products/PROD-1019"},{id:"PROD-1027",name:"3-Ply Surgical Mask",sku:"MASK-3PLY-50",cat:"PPE",uom:"Box",soH:650,monthlyOut:410,route:"/products/PROD-1027"}],k=[{id:"MED-PCM-650",name:"Paracetamol 650mg",sku:"MED-PCM-650",cat:"Analgesic",uom:"Strip",reOrder:120,soH:90,route:"/medicines/MED-PCM-650"},{id:"PROD-2002",name:"IV Cannula 20G",sku:"IV-20G",cat:"Consumable",uom:"Unit",reOrder:300,soH:120,route:"/products/PROD-2002"},{id:"PROD-2005",name:"Alcohol Swab 70%",sku:"AS-70-100",cat:"Consumable",uom:"Box",reOrder:80,soH:62,route:"/products/PROD-2005"}],f=[{id:"MED-OMEP-20",name:"Omeprazole 20mg",sku:"MED-OMEP-20",batch:"B-0925",exp:"2026-01-15T00:00:00Z",soH:220,route:"/medicines/MED-OMEP-20"},{id:"MED-ATV-10",name:"Atorvastatin 10mg",sku:"MED-ATV-10",batch:"B-0825",exp:"2025-12-05T00:00:00Z",soH:140,route:"/medicines/MED-ATV-10"},{id:"PROD-3001",name:"Vitamin C Chewable",sku:"VITC-500",batch:"B-0725",exp:"2025-11-18T00:00:00Z",soH:95,route:"/products/PROD-3001"}],S=[{cat:"PPE",items:22,sohUnits:4600,value:"₹ 9,80,000"},{cat:"Antibiotic",items:48,sohUnits:8200,value:"₹ 12,45,000"},{cat:"Devices",items:17,sohUnits:730,value:"₹ 6,70,500"},{cat:"Consumable",items:65,sohUnits:14200,value:"₹ 7,60,300"}],O=N.map(s=>({id:s.id,name:s.name,sku:s.sku,category:s.cat,uom:s.uom,stock_on_hand:s.soH,monthly_out:s.monthlyOut})),P=k.map(s=>({id:s.id,name:s.name,sku:s.sku,category:s.cat,uom:s.uom,reorder_level:s.reOrder,stock_on_hand:s.soH})),$=f.map(s=>({id:s.id,name:s.name,sku:s.sku,batch:s.batch,expiry:w(s.exp),stock_on_hand:s.soH})),D=S.map(s=>({category:s.cat,items:s.items,soh_units:s.sohUnits,value:s.value}));function _({open:s,onClose:i,title:a="Action unavailable",desc:n="This is a demo. Actions are disabled."}){return s?e.jsx(c.ModalBackdrop,{role:"dialog","aria-modal":"true",children:e.jsxs(c.ModalCard,{className:"card",children:[e.jsxs("div",{className:"modalHead",children:[e.jsx("div",{className:"title",children:a}),e.jsx("button",{className:"iconBtn",onClick:i,"aria-label":"Close",children:e.jsx(L,{})})]}),e.jsx("div",{className:"modalBody",children:e.jsx("p",{children:n})}),e.jsx("div",{className:"modalFoot",children:e.jsx("button",{onClick:i,children:"Close"})})]})}):null}function Y(){R();const[s,i]=g.useState(!1),a=g.useMemo(()=>new Date,[]),n=g.useMemo(()=>W,[]),l=()=>{const t=document.body;t.classList.add("print-section-mode"),window.requestAnimationFrame(()=>{window.print(),setTimeout(()=>t.classList.remove("print-section-mode"),0)})},j=async()=>{try{await navigator.clipboard.writeText(window.location.href),i(!0)}catch{i(!0)}};return e.jsxs(c.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(c.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(r,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:"/reports",children:"Reports"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Inventory"})]}),e.jsx("h1",{children:"Inventory Report"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{title:u(a),children:[e.jsx(C,{})," Generated: ",u(a)]}),e.jsxs("span",{title:u(n),children:[e.jsx(C,{})," Last updated: ",u(n)]})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"toolbar",children:[e.jsxs("button",{onClick:l,title:"Print report",children:[e.jsx(A,{})," Print"]}),e.jsxs("button",{onClick:()=>z("inventory-report.json",{topMovers:N,lowStock:k,nearExpiry:f,categoryValuation:S,generatedAt:a}),title:"Download as JSON",children:[e.jsx(x,{})," JSON"]}),e.jsxs("button",{onClick:()=>h("inventory-top-movers.csv",O),title:"Export Top Movers CSV",children:[e.jsx(x,{})," Top Movers CSV"]}),e.jsxs("button",{onClick:()=>h("inventory-low-stock.csv",P),title:"Export Low Stock CSV",children:[e.jsx(x,{})," Low Stock CSV"]}),e.jsxs("button",{onClick:()=>h("inventory-near-expiry.csv",$),title:"Export Near Expiry CSV",children:[e.jsx(x,{})," Near Expiry CSV"]}),e.jsxs("button",{onClick:()=>h("inventory-valuation.csv",D),title:"Export Valuation CSV",children:[e.jsx(x,{})," Valuation CSV"]}),e.jsxs("button",{onClick:j,title:"Copy link to this report",children:[e.jsx(T,{})," Copy Link"]})]}),e.jsxs("div",{className:"quickLinks",children:[e.jsx(r,{to:"/inventory",children:"Inventory"}),e.jsx(r,{to:"/inventory/lots",children:"Lots"}),e.jsx(r,{to:"/inventory/batches",children:"Batches"}),e.jsx(r,{to:"/inventory/transfers",children:"Transfers"}),e.jsx(r,{to:"/inventory/warehouses",children:"Warehouses"}),e.jsx(r,{to:"/products",children:"Products"}),e.jsx(r,{to:"/medicines",children:"Medicines"}),e.jsx(r,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"}),e.jsx(r,{to:"/reports",children:"All Reports"}),e.jsx(r,{to:"/reports/sales",children:"Sales Report"}),e.jsx(r,{to:"/reports/procurement",children:"Procurement Report"}),e.jsx(r,{to:"/purchase-orders",children:"Purchase Orders"})]})]})]}),e.jsx(c.Filters,{className:"card",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:"label",children:[e.jsx(H,{})," Timeframe"]}),e.jsxs("div",{className:"chips",children:[e.jsx("button",{"aria-pressed":"true",children:"Last 30 days"}),e.jsx("button",{children:"Last 7 days"}),e.jsx("button",{children:"Today"}),e.jsx("button",{children:"Q2 FY25–26"}),e.jsx("button",{children:"FY25–26"}),e.jsx("button",{disabled:!0,title:"Demo",children:"Custom…"})]})]}),e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:"label",children:[e.jsx(V,{})," Scope"]}),e.jsxs("div",{className:"chips",children:[e.jsx("button",{"aria-pressed":"true",children:"All Warehouses"}),e.jsx("button",{children:"WH-Mumbai"}),e.jsx("button",{children:"WH-Delhi"}),e.jsx("button",{children:"WH-Bengaluru"})]})]}),e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"label",children:"Category"}),e.jsxs("div",{className:"chips",children:[e.jsx("button",{"aria-pressed":"true",children:"All"}),e.jsx("button",{children:"PPE"}),e.jsx("button",{children:"Antibiotic"}),e.jsx("button",{children:"Devices"}),e.jsx("button",{children:"Consumable"})]})]}),e.jsx("div",{className:"spacer"}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{disabled:!0,title:"Demo only",children:"Save View"}),e.jsx("button",{onClick:()=>i(!0),children:"Schedule Email"})]})]})}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs(c.Kpis,{children:[e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Stock on Hand (Units)"}),e.jsx("div",{className:"v",children:"27,530"}),e.jsx("div",{className:"s",children:"All warehouses"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Inventory Valuation"}),e.jsx("div",{className:"v",children:"₹ 36,55,800"}),e.jsx("div",{className:"s",children:"MRP · display-only"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Unique SKUs"}),e.jsx("div",{className:"v",children:"1,218"}),e.jsx("div",{className:"s",children:"Active catalog"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Warehouses"}),e.jsx("div",{className:"v",children:"3"}),e.jsx("div",{className:"s",children:"Mumbai · Delhi · Bengaluru"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Out of Stock"}),e.jsx("div",{className:"v",children:"31"}),e.jsx("div",{className:"s",children:e.jsx(r,{to:"/inventory/reorder",children:"View reorder"})})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Near Expiry (≤90d)"}),e.jsx("div",{className:"v",children:"12"}),e.jsx("div",{className:"s",children:e.jsx(r,{to:"/medicines/expiry-tracker",children:"Open tracker"})})]})]}),e.jsxs(c.TableCard,{className:"card",children:[e.jsxs("div",{className:"head",children:[e.jsx("h2",{children:"Top Movers"}),e.jsxs("div",{className:"headActions",children:[e.jsx(r,{to:"/reports/sales",children:"Sales Report"}),e.jsx(r,{to:"/products",children:"Catalog"}),e.jsxs("button",{onClick:()=>h("inventory-top-movers.csv",O),children:[e.jsx(x,{})," CSV"]})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Product"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"UoM"}),e.jsx("th",{className:"num",children:"Stock on Hand"}),e.jsx("th",{className:"num",children:"Monthly Out"}),e.jsx("th",{children:"Open"})]})}),e.jsx("tbody",{children:N.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"mono",children:t.sku}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.cat}),e.jsx("td",{children:t.uom}),e.jsx("td",{className:"num",children:t.soH}),e.jsx("td",{className:"num",children:t.monthlyOut}),e.jsx("td",{children:e.jsx(r,{to:t.route,children:"View"})})]},t.id))})]})})]}),e.jsxs(c.TableCard,{className:"card",children:[e.jsxs("div",{className:"head",children:[e.jsx("h2",{children:"Low Stock"}),e.jsxs("div",{className:"headActions",children:[e.jsx(r,{to:"/inventory/reorder",children:"Reorder Planner"}),e.jsx(r,{to:"/purchase-orders",children:"Purchase Orders"}),e.jsxs("button",{onClick:()=>h("inventory-low-stock.csv",P),children:[e.jsx(x,{})," CSV"]})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Product"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"UoM"}),e.jsx("th",{className:"num",children:"Reorder Level"}),e.jsx("th",{className:"num",children:"Stock on Hand"}),e.jsx("th",{children:"Open"})]})}),e.jsx("tbody",{children:k.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"mono",children:t.sku}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.cat}),e.jsx("td",{children:t.uom}),e.jsx("td",{className:"num",children:t.reOrder}),e.jsx("td",{className:"num",children:t.soH}),e.jsx("td",{children:e.jsx(r,{to:t.route,children:"View"})})]},t.id))})]})})]}),e.jsxs(c.TableCard,{className:"card",children:[e.jsxs("div",{className:"head",children:[e.jsx("h2",{children:"Near Expiry"}),e.jsxs("div",{className:"headActions",children:[e.jsx(r,{to:"/medicines/expiry-tracker",children:"Open Tracker"}),e.jsx(r,{to:"/inventory/batches",children:"Batches"}),e.jsxs("button",{onClick:()=>h("inventory-near-expiry.csv",$),children:[e.jsx(x,{})," CSV"]})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Product"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"num",children:"Stock on Hand"}),e.jsx("th",{children:"Open"})]})}),e.jsx("tbody",{children:f.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"mono",children:t.sku}),e.jsx("td",{children:t.name}),e.jsx("td",{className:"mono",children:t.batch}),e.jsx("td",{children:w(t.exp)}),e.jsx("td",{className:"num",children:t.soH}),e.jsx("td",{children:e.jsx(r,{to:t.route,children:"View"})})]},t.id))})]})})]}),e.jsxs(c.TableCard,{className:"card",children:[e.jsxs("div",{className:"head",children:[e.jsx("h2",{children:"Valuation by Category"}),e.jsxs("div",{className:"headActions",children:[e.jsx(r,{to:"/inventory",children:"Inventory"}),e.jsxs("button",{onClick:()=>h("inventory-valuation.csv",D),children:[e.jsx(x,{})," CSV"]})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{className:"num",children:"Items"}),e.jsx("th",{className:"num",children:"SOH Units"}),e.jsx("th",{className:"num",children:"Valuation"})]})}),e.jsx("tbody",{children:S.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.cat}),e.jsx("td",{className:"num",children:t.items}),e.jsx("td",{className:"num",children:t.sohUnits}),e.jsx("td",{className:"num",children:t.value})]},t.cat))})]})})]}),e.jsxs(c.FooterNav,{className:"card",children:[e.jsxs("div",{className:"links",children:[e.jsx(r,{to:"/reports",children:"← Reports Home"}),e.jsx(r,{to:"/reports/sales",children:"Sales"}),e.jsx(r,{to:"/reports/customers",children:"Customers"}),e.jsx(r,{to:"/reports/finance",children:"Finance"}),e.jsx(r,{to:"/reports/procurement",children:"Procurement"}),e.jsx(r,{to:"/reports/shipment",children:"Shipment"}),e.jsx(r,{to:"/reports/gst",children:"GST"}),e.jsx(r,{to:"/inventory",children:"Inventory Overview →"})]}),e.jsxs("div",{className:"stamp",children:["Report generated on ",u(a)]})]})]}),e.jsx(_,{open:s,onClose:()=>i(!1),title:"Saved!",desc:"Link copied / demo action shown."})]})}export{Y as default};
