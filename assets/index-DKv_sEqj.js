import{d as m,q as v,u as f,r as N,j as e,N as l}from"./index-Dm9gfKqL.js";const c="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",j="var(--card, #111318)",i="var(--border, #23262d)",n="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",k="var(--radius, 16px)",$="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",g={Page:m.div`
        padding: 24px 0 64px;
        color: ${c};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${d};
            }
            .current {
                color: ${c};
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
            color: ${d};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${j};
            color: ${c};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }
    `,SheetWrap:m.div`
        display: grid;
        place-items: center;
    `,PrintSheet:m.div`
        width: min(980px, 96%);
        padding: 24px 24px 28px;
        border: 1px solid ${i};
        border-radius: ${k};
        background: ${j};
        box-shadow: ${$};
        color: ${c};

        .sheetHead {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            margin-bottom: 16px;
            .brand {
                display: flex;
                gap: 12px;
                align-items: center;
            }
            .logo {
                width: 44px;
                height: 44px;
                border: 1px solid ${i};
                border-radius: 10px;
                display: grid;
                place-items: center;
                font-weight: 800;
                letter-spacing: 0.6px;
                background: color-mix(in oklab, ${n} 14%, transparent);
            }
            .brandText h2 {
                font-size: 18px;
                margin-bottom: 2px;
            }
            .brandText .muted {
                color: ${d};
                font-size: 12px;
            }

            .docMeta {
                display: grid;
                gap: 6px;
                text-align: right;
                .k {
                    color: ${d};
                    margin-right: 8px;
                }
                .v {
                    color: ${c};
                    font-weight: 600;
                }
                .badge {
                    padding: 2px 8px;
                    border: 1px solid ${i};
                    border-radius: 999px;
                    background: color-mix(in oklab, ${n} 10%, transparent);
                }
            }
        }

        .identity {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 16px;
            margin-bottom: 12px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
            .who h3 {
                font-size: 18px;
                margin-bottom: 10px;
            }
            .grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
            }
            .k {
                color: ${d};
                margin-right: 8px;
            }
            .v {
                color: ${c};
                font-weight: 600;
            }
            .addr .block {
                padding: 12px;
            }
            .addr h4 {
                font-size: 14px;
                margin-bottom: 6px;
            }
            .addr p {
                line-height: 1.6;
            }
        }

        .tagsKpi {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 10px 0 8px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
            .tags {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                align-content: start;
            }
            .chip {
                border: 1px solid ${i};
                padding: 6px 10px;
                border-radius: 999px;
                background: color-mix(in oklab, ${n} 8%, transparent);
                font-weight: 600;
            }
            .kpis {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
            }
            .kpi {
                border: 1px solid ${i};
                border-radius: 12px;
                padding: 10px 12px;
                background: color-mix(in oklab, ${j} 96%, transparent);
            }
            .kpi .label {
                color: ${d};
                font-size: 12px;
            }
            .kpi .value {
                font-size: 16px;
                font-weight: 700;
                margin-top: 4px;
            }
        }

        .section {
            margin-top: 14px;
        }
        .sectionHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .sectionHead h3 {
            font-size: 16px;
        }
        .miniLink {
            color: ${d};
            border: 1px solid ${i};
            padding: 4px 8px;
            border-radius: 8px;
        }
        .miniLink:hover {
            color: ${n};
            border-color: ${n};
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${i};
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            background: color-mix(in oklab, ${j} 94%, transparent);
            color: ${c};
            padding: 10px;
            border-bottom: 1px solid ${i};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${i};
        }
        tbody tr:hover td {
            background: rgba(0, 0, 0, 0.06);
        }
        .right {
            text-align: right;
        }

        .notesSign {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 16px;
            margin-top: 16px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
            .note {
                padding: 14px;
            }
            .note h4 {
                margin-bottom: 8px;
            }
            .signs {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                align-items: end;
            }
            .signBlock {
                display: grid;
                gap: 6px;
            }
            .line {
                height: 42px;
                border-bottom: 1px dashed ${i};
            }
            .cap {
                text-align: center;
                color: ${d};
                font-size: 12px;
            }
        }

        .sheetFoot {
            margin-top: 18px;
            padding-top: 10px;
            border-top: 1px solid ${i};
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 8px;
            font-size: 12px;
            color: ${d};
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 4px;
            }
        }
    `},r=(o,u)=>{const t=o instanceof Date?o:new Date(o),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=b=>String(b).padStart(2,"0"),h=`${x[t.getDay()]} ${s[t.getMonth()]} ${p(t.getDate())} ${t.getFullYear()}`;return u?`${h} ${p(t.getHours())}:${p(t.getMinutes())}:${p(t.getSeconds())}hrs`:h},P=()=>{const{customerId:o}=v(),u=f(),t=N.useRef(null),x=N.useMemo(()=>new Date,[]),s=N.useMemo(()=>({id:o||"CUST-1001",code:"CUST-1001",createdAt:"2024-12-17T10:15:45+05:30",updatedAt:"2025-10-04T12:28:10+05:30",firstName:"Aarav",lastName:"Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210",gender:"male",dob:"1996-10-04",gstin:"22ABCDE1234F1Z5",pan:"ABCDE1234F",company:"Bluewave Traders",website:"https://bluewave.example.com",status:"active",tags:["priority","wholesale","north"],billing:{line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"},shipping:{line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India"},kpIs:{lifetimeValue:"₹ 14,28,500",outstanding:"₹ 36,200",totalOrders:"58",lastOrderAt:"2025-09-22T18:43:10+05:30"},orders:[{id:"ORD-3456",date:"2025-09-22T18:43:10+05:30",items:12,amount:"₹ 42,300",status:"Fulfilled"},{id:"ORD-3419",date:"2025-08-28T11:20:45+05:30",items:8,amount:"₹ 28,750",status:"Shipped"},{id:"ORD-3381",date:"2025-07-15T16:09:20+05:30",items:10,amount:"₹ 33,400",status:"Delivered"}],invoices:[{id:"INV-2034",date:"2025-09-22T19:01:12+05:30",due:"2025-10-10T00:00:00+05:30",amount:"₹ 42,300",paid:"₹ 24,000",balance:"₹ 18,300",status:"Partially Paid"},{id:"INV-2011",date:"2025-08-28T11:44:30+05:30",due:"2025-09-15T00:00:00+05:30",amount:"₹ 28,750",paid:"₹ 28,750",balance:"₹ 0",status:"Paid"}],payments:[{id:"RCPT-1421",date:"2025-09-24T10:05:10+05:30",mode:"NEFT",ref:"UTR-98X2JK1",amount:"₹ 24,000"},{id:"RCPT-1389",date:"2025-08-31T15:20:00+05:30",mode:"UPI",ref:"UPI-3290AV",amount:"₹ 28,750"}],notes:"Bulk orders in month-end cycle. Prefers email. Ship from Warehouse-2 to Gurugram address. Mark urgent if order contains cold-chain items."}),[o]),p=`${s.firstName} ${s.lastName}`.trim(),h=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},b=()=>u(s.id?`/customers/${s.id}`:"/customers");return e.jsxs(g.Page,{className:"container",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(g.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Print Customer"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(l,{to:"/customers",children:"Customers"}),e.jsx("span",{children:"/"}),e.jsx(l,{to:`/customers/${s.id}`,children:s.id}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Print"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",r(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",r(s.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:b,title:"Back to details",children:"Back"}),e.jsx(l,{className:"btnGhost",to:`/customers/${s.id}`,title:"Open details",children:"Open Details"}),e.jsx("button",{className:"btnPrimary",onClick:h,title:"Print this sheet",children:"Print"})]})]}),e.jsx(g.SheetWrap,{children:e.jsx("div",{id:"search-print-area",ref:t,children:e.jsxs(g.PrintSheet,{className:"card",children:[e.jsxs("header",{className:"sheetHead",children:[e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"logo","aria-hidden":"true",children:"AR"}),e.jsxs("div",{className:"brandText",children:[e.jsx("h2",{children:"Bluewave ERP"}),e.jsx("div",{className:"muted",children:"Customer Summary"})]})]}),e.jsxs("div",{className:"docMeta",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Generated"}),e.jsx("span",{className:"v",children:r(x,!0)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Customer ID"}),e.jsx("span",{className:"v",children:s.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v badge",children:s.status})]})]})]}),e.jsxs("section",{className:"identity",children:[e.jsxs("div",{className:"who",children:[e.jsx("h3",{children:p}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Company"}),e.jsx("span",{className:"v",children:s.company})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:s.email})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:s.phone})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Website"}),e.jsx("span",{className:"v",children:s.website})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"GSTIN"}),e.jsx("span",{className:"v",children:s.gstin})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"PAN"}),e.jsx("span",{className:"v",children:s.pan})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"DOB"}),e.jsx("span",{className:"v",children:r(s.dob)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Gender"}),e.jsx("span",{className:"v",children:s.gender})]})]})]}),e.jsxs("div",{className:"addr",children:[e.jsxs("div",{className:"card block",children:[e.jsx("h4",{children:"Billing Address"}),e.jsxs("p",{children:[s.billing.line1,e.jsx("br",{}),s.billing.line2,e.jsx("br",{}),s.billing.city," ",s.billing.zip,e.jsx("br",{}),s.billing.state,", ",s.billing.country]})]}),e.jsxs("div",{className:"card block",children:[e.jsx("h4",{children:"Shipping Address"}),e.jsxs("p",{children:[s.shipping.line1,e.jsx("br",{}),s.shipping.line2,e.jsx("br",{}),s.shipping.city," ",s.shipping.zip,e.jsx("br",{}),s.shipping.state,", ",s.shipping.country]})]})]})]}),e.jsxs("section",{className:"tagsKpi",children:[e.jsx("div",{className:"tags",children:s.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))}),e.jsxs("div",{className:"kpis",children:[e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Lifetime Value"}),e.jsx("div",{className:"value",children:s.kpIs.lifetimeValue})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Outstanding"}),e.jsx("div",{className:"value",children:s.kpIs.outstanding})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Total Orders"}),e.jsx("div",{className:"value",children:s.kpIs.totalOrders})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Last Order"}),e.jsx("div",{className:"value",children:r(s.kpIs.lastOrderAt,!0)})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("h3",{children:"Recent Orders"}),e.jsx(l,{to:"/orders",className:"miniLink",children:"Open Orders"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Order"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Items"}),e.jsx("th",{className:"right",children:"Amount"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:s.orders.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(l,{to:`/orders/${a.id}`,children:a.id})}),e.jsx("td",{children:r(a.date,!0)}),e.jsx("td",{children:a.items}),e.jsx("td",{className:"right",children:a.amount}),e.jsx("td",{children:a.status})]},a.id))})]})})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("h3",{children:"Invoices"}),e.jsx(l,{to:"/invoices",className:"miniLink",children:"Open Invoices"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Invoice"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Due"}),e.jsx("th",{className:"right",children:"Amount"}),e.jsx("th",{className:"right",children:"Paid"}),e.jsx("th",{className:"right",children:"Balance"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:s.invoices.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(l,{to:`/invoices/${a.id}`,children:a.id})}),e.jsx("td",{children:r(a.date,!0)}),e.jsx("td",{children:r(a.due)}),e.jsx("td",{className:"right",children:a.amount}),e.jsx("td",{className:"right",children:a.paid}),e.jsx("td",{className:"right",children:a.balance}),e.jsx("td",{children:a.status})]},a.id))})]})})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("h3",{children:"Payments"}),e.jsx(l,{to:"/receipts",className:"miniLink",children:"Open Receipts"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Receipt"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Mode"}),e.jsx("th",{children:"Reference"}),e.jsx("th",{className:"right",children:"Amount"})]})}),e.jsx("tbody",{children:s.payments.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.id}),e.jsx("td",{children:r(a.date,!0)}),e.jsx("td",{children:a.mode}),e.jsx("td",{children:a.ref}),e.jsx("td",{className:"right",children:a.amount})]},a.id))})]})})]}),e.jsxs("section",{className:"notesSign",children:[e.jsxs("div",{className:"card note",children:[e.jsx("h4",{children:"Notes"}),e.jsx("p",{children:s.notes})]}),e.jsxs("div",{className:"signs",children:[e.jsxs("div",{className:"signBlock",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"cap",children:"Prepared by"})]}),e.jsxs("div",{className:"signBlock",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"cap",children:"Approved by"})]}),e.jsxs("div",{className:"signBlock",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"cap",children:"Customer"})]})]})]}),e.jsxs("footer",{className:"sheetFoot",children:[e.jsxs("div",{children:["Printed: ",r(x,!0)]}),e.jsx("div",{children:"Contact: support@bluewave.example.com • +91 99999 99999"}),e.jsx("div",{children:"Page 1 of 1"})]})]})})})]})};export{P as default};
