import{d as O,u as T,r as c,j as e,N as r}from"./index-BM8H5dnP.js";import{B as w,a as P,b as S,k as y}from"./index-CVqscwcs.js";const p="var(--text, #f3f4f6)",a="var(--muted, #a0a0a7)",h="var(--card, #111318)",l="var(--border, #23262d)",i="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",D="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",M={Wrap:O.main`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 18px;

        .card {
            background: ${h};
            border: 1px solid ${l};
            border-radius: 12px;
            box-shadow: ${D};
        }

        .header {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-areas:
                "bc actions"
                "title actions";
            gap: 10px 16px;
            align-items: center;

            .breadcrumbs {
                grid-area: bc;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                color: ${a};
                .crumb {
                    color: ${a};
                }
                .crumb.current {
                    color: ${p};
                    font-weight: 600;
                }
                .sep {
                    display: inline-flex;
                    align-items: center;
                    opacity: 0.8;
                }
                a:hover {
                    color: ${i};
                }
            }

            .headline {
                grid-area: title;
                h1 {
                    font-size: 24px;
                    line-height: 1.2;
                    letter-spacing: 0.3px;
                    margin: 0;
                }
                .sub {
                    color: ${a};
                    margin-top: 4px;
                }
                strong {
                    color: ${p};
                }
            }

            .actions {
                grid-area: actions;
                display: inline-flex;
                gap: 10px;
                justify-self: end;

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 12px;
                    border-radius: 10px;
                    background: ${h};
                    color: ${p};
                    border: 1px solid ${l};
                    transition: border-color 0.2s ease, color 0.2s ease,
                        background 0.2s ease, transform 0.05s ease;
                    cursor: pointer;
                    &:hover {
                        color: ${i};
                        border-color: ${i};
                        background: rgba(0, 0, 0, 0.06);
                    }
                    &:active {
                        transform: translateY(1px);
                    }
                    &.ghost {
                        background: transparent;
                    }
                    svg {
                        font-size: 16px;
                    }
                }
            }
        }

        .kpis {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            gap: 12px;

            .kpi {
                padding: 14px;
            }
            .kpi-top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 6px;
                .kpi-label {
                    color: ${a};
                    font-weight: 600;
                    letter-spacing: 0.2px;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 999px;
                    background: ${i};
                    opacity: 0.8;
                }
            }
            .kpi-value {
                font-size: 22px;
                font-weight: 700;
                letter-spacing: 0.4px;
            }
            .kpi-hint {
                margin-top: 4px;
                color: ${a};
            }
        }

        .summary {
            padding: 14px;

            .summary-head {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: 10px;
                margin-bottom: 10px;
                h2 {
                    font-size: 18px;
                }
                .meta {
                    display: flex;
                    gap: 16px;
                    color: ${a};
                }
                strong {
                    color: ${p};
                }
            }

            .summary-grid {
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

                .summary-block {
                    border: 1px solid ${l};
                    border-radius: 10px;
                    padding: 12px;
                    background: color-mix(in oklab, ${h} 96%, transparent);

                    h3 {
                        font-size: 14px;
                        margin-bottom: 8px;
                        letter-spacing: 0.2px;
                    }
                    .links {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: grid;
                        gap: 6px;
                        a {
                            color: ${a};
                        }
                        a:hover {
                            color: ${i};
                        }
                    }
                }
            }
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            .chip {
                display: inline-flex;
                align-items: center;
                padding: 6px 10px;
                border-radius: 999px;
                border: 1px solid ${l};
                color: ${a};
                background: color-mix(in oklab, ${h} 96%, transparent);
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, box-shadow 0.2s ease;
                &:hover {
                    color: ${i};
                    border-color: ${i};
                    box-shadow: 0 0 0 3px ${k};
                }
            }
        }

        .panels {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;

            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            @media (max-width: 800px) {
                grid-template-columns: 1fr;
            }

            .panel {
                padding: 12px;
            }
            .panel-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;
                h3 {
                    font-size: 14px;
                }
                .see-all {
                    color: ${a};
                }
                .see-all:hover {
                    color: ${i};
                }
            }

            .table-wrap {
                overflow: auto;
                border: 1px solid ${l};
                border-radius: 10px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            thead th {
                background: ${h};
                color: ${i};
                text-align: left;
                padding: 10px;
                border-bottom: 1px solid ${l};
                position: sticky;
                top: 0;
                z-index: 1;
            }
            tbody td {
                padding: 10px;
                border-bottom: 1px solid ${l};
                color: ${p};
            }
            tbody tr:hover td {
                background: rgba(0, 0, 0, 0.06);
            }
            td.num {
                text-align: right;
            }
        }

        .navwall {
            padding: 14px;

            h2 {
                font-size: 18px;
                margin-bottom: 10px;
            }

            .grid {
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            }

            .tile {
                border: 1px solid ${l};
                border-radius: 12px;
                padding: 10px;
                background: color-mix(in oklab, ${h} 96%, transparent);
            }
            .tile-head {
                display: inline-flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 8px 10px;
                border-radius: 8px;
                border: 1px solid ${l};
                color: ${p};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, box-shadow 0.2s ease;
            }
            .tile-head:hover {
                color: ${i};
                border-color: ${i};
                box-shadow: 0 0 0 3px ${k};
            }

            .tile-links {
                list-style: none;
                padding: 10px 6px 4px;
                margin: 0;
                display: grid;
                gap: 6px;
                a {
                    color: ${a};
                }
                a:hover {
                    color: ${i};
                }
            }
        }
    `},R=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function v(n){if(!n)return new Date;if(n instanceof Date)return n;const t=new Date(n);return isNaN(t.getTime())?new Date:t}function b(n){return String(n).padStart(2,"0")}function g(n){const t=v(n);return`${R[t.getDay()]} ${C[t.getMonth()]} ${b(t.getDate())} ${t.getFullYear()}`}function A(n){const t=v(n),x=b(t.getHours()),o=b(t.getMinutes()),d=b(t.getSeconds());return`${x}:${o}:${d}hrs`}function j(n){const t=v(n);return`${g(t)} ${A(t)}`}const E="2025-10-05T20:52:55.477Z",L="2025-10-06T02:22:50+05:30",V=()=>{const n=T(),t=c.useMemo(()=>new Date,[]),x=c.useMemo(()=>j(t),[t]),o=c.useMemo(()=>j(E),[]),d=c.useMemo(()=>j(L),[]),N=c.useCallback(()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),0)}},[]),$=c.useCallback(()=>{const s={meta:{title:"Reports Overview Snapshot",generatedAt:x,buildAt:o,commitAt:d},quickLinks:["/reports/sales","/reports/inventory","/reports/customers","/reports/finance","/reports/procurement","/reports/shipment","/reports/gst"],kpis:[{label:"Revenue (YTD)",value:"₹ 2.40 Cr"},{label:"Invoices (YTD)",value:"3,482"},{label:"Avg. Order Value",value:"₹ 8,930"},{label:"Open POs",value:"128"},{label:"Stockouts",value:"7"},{label:"Near Expiry (30d)",value:"19"}]},m=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),f=URL.createObjectURL(m),u=document.createElement("a");u.href=f,u.download="reports-overview.json",document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(f)},[x,o,d]);return e.jsxs(M.Wrap,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(r,{to:"/home",className:"crumb",children:"Home"}),e.jsx("span",{className:"sep",children:e.jsx(w,{})}),e.jsx("span",{className:"crumb current",children:"Reports"})]}),e.jsxs("div",{className:"headline",children:[e.jsx("h1",{children:"Reports Overview"}),e.jsxs("p",{className:"sub",children:["As of ",e.jsx("strong",{children:x})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btn",onClick:N,title:"Print summary section",children:[e.jsx(P,{"aria-hidden":!0})," ",e.jsx("span",{children:"Print"})]}),e.jsxs("button",{className:"btn",onClick:$,title:"Export overview snapshot",children:[e.jsx(S,{"aria-hidden":!0})," ",e.jsx("span",{children:"Export"})]}),e.jsxs("button",{className:"btn ghost",onClick:()=>n("/dashboard"),title:"Open dashboard",children:[e.jsx(y,{"aria-hidden":!0})," ",e.jsx("span",{children:"Open Dashboard"})]})]})]}),e.jsx("section",{className:"kpis",children:[{key:"rev",label:"Revenue (YTD)",value:"₹ 2.40 Cr",hint:"All channels"},{key:"inv",label:"Invoices (YTD)",value:"3,482",hint:"Finalized"},{key:"aov",label:"Avg. Order Value",value:"₹ 8,930",hint:"Sales orders"},{key:"mrr",label:"Receivables",value:"₹ 41.2 L",hint:"Pending"},{key:"po",label:"Open POs",value:"128",hint:"Awaiting receipt"},{key:"so",label:"Backorders",value:"23",hint:"Allocations pending"}].map(s=>e.jsxs("div",{className:"kpi card",role:"group","aria-label":s.label,children:[e.jsxs("div",{className:"kpi-top",children:[e.jsx("span",{className:"kpi-label",children:s.label}),e.jsx("span",{className:"dot"})]}),e.jsx("div",{className:"kpi-value",children:s.value}),e.jsx("div",{className:"kpi-hint",children:s.hint})]},s.key))}),e.jsxs("section",{id:"search-print-area",className:"summary card",children:[e.jsxs("div",{className:"summary-head",children:[e.jsx("h2",{children:"Executive Summary"}),e.jsxs("div",{className:"meta",children:[o&&e.jsxs("span",{children:["Build: ",e.jsx("strong",{children:o})]}),d&&e.jsxs("span",{children:["Commit: ",e.jsx("strong",{children:d})]})]})]}),e.jsxs("div",{className:"summary-grid",children:[e.jsxs("div",{className:"summary-block",children:[e.jsx("h3",{children:"Sales"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(r,{to:"/reports/sales",children:"Sales Report"})}),e.jsx("li",{children:e.jsx(r,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(r,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(r,{to:"/sales/payments",children:"Payments"})}),e.jsx("li",{children:e.jsx(r,{to:"/sales/returns",children:"Returns"})}),e.jsx("li",{children:e.jsx(r,{to:"/reports/customers",children:"Customer Report"})})]})]}),e.jsxs("div",{className:"summary-block",children:[e.jsx("h3",{children:"Inventory"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(r,{to:"/reports/inventory",children:"Inventory Report"})}),e.jsx("li",{children:e.jsx(r,{to:"/inventory",children:"Overview"})}),e.jsx("li",{children:e.jsx(r,{to:"/inventory/lots",children:"Lots"})}),e.jsx("li",{children:e.jsx(r,{to:"/inventory/batches",children:"Batches"})}),e.jsx("li",{children:e.jsx(r,{to:"/inventory/reorder",children:"Reorder Planner"})}),e.jsx("li",{children:e.jsx(r,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"})})]})]}),e.jsxs("div",{className:"summary-block",children:[e.jsx("h3",{children:"Procurement"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(r,{to:"/reports/procurement",children:"Procurement Report"})}),e.jsx("li",{children:e.jsx(r,{to:"/purchase-orders",children:"Purchase Orders"})}),e.jsx("li",{children:e.jsx(r,{to:"/vendors",children:"Vendors"})}),e.jsx("li",{children:e.jsx(r,{to:"/shipments",children:"Shipments"})}),e.jsx("li",{children:e.jsx(r,{to:"/shipments/carriers",children:"Carriers"})})]})]}),e.jsxs("div",{className:"summary-block",children:[e.jsx("h3",{children:"Finance"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(r,{to:"/reports/finance",children:"Finance Report"})}),e.jsx("li",{children:e.jsx(r,{to:"/finance/ledgers",children:"Ledgers"})}),e.jsx("li",{children:e.jsx(r,{to:"/finance/journals",children:"Journals"})}),e.jsx("li",{children:e.jsx(r,{to:"/finance/taxes",children:"Taxes"})}),e.jsx("li",{children:e.jsx(r,{to:"/finance/gst-returns",children:"GST Returns"})}),e.jsx("li",{children:e.jsx(r,{to:"/invoices/credit-notes",children:"Credit Notes"})})]})]})]})]}),e.jsx("section",{className:"chips",children:[{label:"Today",to:"/reports/sales?range=today"},{label:"This Week",to:"/reports/sales?range=week"},{label:"This Month",to:"/reports/sales?range=month"},{label:"Quarter-To-Date",to:"/reports/sales?range=qtd"},{label:"Year-To-Date",to:"/reports/sales?range=ytd"},{label:"Last FY",to:"/reports/sales?range=lastfy"},{label:"Top Customers",to:"/reports/customers?view=top"},{label:"Aging (AR)",to:"/reports/finance?tab=aging"}].map(s=>e.jsx(r,{to:s.to,className:"chip",children:s.label},s.label))}),e.jsxs("section",{className:"panels",children:[e.jsxs("div",{className:"panel card",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h3",{children:"Recent Invoices"}),e.jsx(r,{to:"/invoices",className:"see-all",children:"See all"})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Link"})]})}),e.jsx("tbody",{children:[{no:"INV-2031",cust:"Galaxy Pharma",dt:"2025-10-04T10:15:40+05:30",st:"Final",amt:"₹ 12,840",href:"/invoices/INV-2031"},{no:"INV-2030",cust:"Urban Labs",dt:"2025-10-03T18:02:10+05:30",st:"Final",amt:"₹ 8,420",href:"/invoices/INV-2030"},{no:"INV-2029",cust:"Horizon Clinic",dt:"2025-10-03T12:41:03+05:30",st:"Draft",amt:"₹ 6,210",href:"/invoices/INV-2029"},{no:"INV-2028",cust:"Nova Care",dt:"2025-10-02T09:15:29+05:30",st:"Final",amt:"₹ 19,320",href:"/invoices/INV-2028"},{no:"INV-2027",cust:"Apex Med",dt:"2025-10-01T17:22:45+05:30",st:"Final",amt:"₹ 5,980",href:"/invoices/INV-2027"}].map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.no}),e.jsx("td",{children:s.cust}),e.jsx("td",{children:e.jsx("span",{title:j(s.dt),children:g(s.dt)})}),e.jsx("td",{children:s.st}),e.jsx("td",{children:s.amt}),e.jsx("td",{children:e.jsx(r,{to:s.href,children:"Open"})})]},s.no))})]})})]}),e.jsxs("div",{className:"panel card",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h3",{children:"Low Stock Items"}),e.jsx(r,{to:"/inventory/reorder",className:"see-all",children:"Reorder"})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Item"}),e.jsx("th",{children:"On Hand"}),e.jsx("th",{children:"Reorder Pt."}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{children:"Link"})]})}),e.jsx("tbody",{children:[{sku:"MED-AMOX-500",item:"Amoxicillin 500mg",oh:"14",rp:"25",wh:"WH-Main",href:"/products/MED-AMOX-500"},{sku:"MED-PCM-650",item:"Paracetamol 650",oh:"9",rp:"30",wh:"WH-Main",href:"/products/MED-PCM-650"},{sku:"MED-OMZ-20",item:"Omeprazole 20mg",oh:"11",rp:"20",wh:"WH-East",href:"/products/MED-OMZ-20"},{sku:"MED-ALB-4",item:"Albendazole 400mg",oh:"8",rp:"18",wh:"WH-North",href:"/products/MED-ALB-4"},{sku:"MED-CET-10",item:"Cetirizine 10mg",oh:"7",rp:"16",wh:"WH-South",href:"/products/MED-CET-10"}].map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.sku}),e.jsx("td",{children:s.item}),e.jsx("td",{className:"num",children:s.oh}),e.jsx("td",{className:"num",children:s.rp}),e.jsx("td",{children:s.wh}),e.jsx("td",{children:e.jsx(r,{to:s.href,children:"Open"})})]},s.sku))})]})})]}),e.jsxs("div",{className:"panel card",children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h3",{children:"Pending Purchases"}),e.jsx(r,{to:"/purchase-orders",className:"see-all",children:"POs"})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"PO #"}),e.jsx("th",{children:"Vendor"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"ETA"}),e.jsx("th",{children:"Link"})]})}),e.jsx("tbody",{children:[{po:"PO-5019",ven:"Zen Suppliers",dt:"2025-09-30T11:01:20+05:30",st:"Open",eta:"Sat Oct 04 2025",href:"/purchase-orders/PO-5019"},{po:"PO-5018",ven:"Nimbus Traders",dt:"2025-09-29T14:22:40+05:30",st:"Open",eta:"Sun Oct 05 2025",href:"/purchase-orders/PO-5018"},{po:"PO-5017",ven:"Aurum Med",dt:"2025-09-28T16:43:12+05:30",st:"Partial",eta:"Tue Oct 07 2025",href:"/purchase-orders/PO-5017"},{po:"PO-5016",ven:"Vertex Pharma",dt:"2025-09-28T10:05:54+05:30",st:"Open",eta:"Mon Oct 06 2025",href:"/purchase-orders/PO-5016"},{po:"PO-5015",ven:"Cobalt Labs",dt:"2025-09-27T09:18:33+05:30",st:"Billed",eta:"—",href:"/purchase-orders/PO-5015"}].map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.po}),e.jsx("td",{children:s.ven}),e.jsx("td",{children:e.jsx("span",{title:j(s.dt),children:g(s.dt)})}),e.jsx("td",{children:s.st}),e.jsx("td",{children:s.eta}),e.jsx("td",{children:e.jsx(r,{to:s.href,children:"Open"})})]},s.po))})]})})]})]}),e.jsxs("section",{className:"navwall card",children:[e.jsx("h2",{children:"Jump to a Report"}),e.jsx("div",{className:"grid",children:[{title:"Sales",to:"/reports/sales",items:[{t:"Orders",to:"/orders"},{t:"Invoices",to:"/invoices"},{t:"Payments",to:"/sales/payments"},{t:"Returns",to:"/sales/returns"},{t:"Customers",to:"/reports/customers"}]},{title:"Inventory",to:"/reports/inventory",items:[{t:"Lots",to:"/inventory/lots"},{t:"Batches",to:"/inventory/batches"},{t:"Transfers",to:"/inventory/transfers"},{t:"Warehouses",to:"/inventory/warehouses"},{t:"Reorder",to:"/inventory/reorder"}]},{title:"Procurement",to:"/reports/procurement",items:[{t:"Vendors",to:"/vendors"},{t:"Purchase Orders",to:"/purchase-orders"},{t:"Receipts",to:"/receipts"},{t:"Shipments",to:"/shipments"}]},{title:"Finance",to:"/reports/finance",items:[{t:"Ledgers",to:"/finance/ledgers"},{t:"Journals",to:"/finance/journals"},{t:"Taxes",to:"/finance/taxes"},{t:"GST Returns",to:"/finance/gst-returns"},{t:"Balance Sheet",to:"/finance/balance-sheet"},{t:"Profit & Loss",to:"/finance/profit-loss"}]},{title:"Shipping",to:"/reports/shipment",items:[{t:"All Shipments",to:"/shipments"},{t:"Carriers",to:"/shipments/carriers"}]},{title:"Compliance",to:"/reports/gst",items:[{t:"GST Mapping",to:"/medicines/hsn-gst"},{t:"Credit Notes",to:"/invoices/credit-notes"}]}].map(s=>e.jsxs("div",{className:"tile",children:[e.jsxs(r,{to:s.to,className:"tile-head",children:[e.jsx("span",{children:s.title})," ",e.jsx(y,{})]}),e.jsx("ul",{className:"tile-links",children:s.items.map(m=>e.jsx("li",{children:e.jsx(r,{to:m.to,children:m.t})},m.to))})]},s.title))})]})]})};export{V as default};
