import{d as g,u as C,r as j,j as e,N as a}from"./index-BauM8ZfN.js";const l="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",o="var(--card, #111318)",r="var(--border, #23262d)",i="var(--accent, #5aa9ff)",v="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",N={Page:g.div`
        color: ${l};
        padding: 18px;

        .muted {
            color: ${p};
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
            a {
                color: ${p};
            }
            .sep {
                color: ${p};
            }
            .current {
                color: ${l};
                font-weight: 600;
            }
        }

        .header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 16px;
            .titles h1 {
                font-size: 24px;
                line-height: 1.2;
            }
            .titles .muted {
                margin-top: 4px;
            }
            .toolbar {
                display: inline-flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .toolbar button {
                background: ${o};
                border: 1px solid ${r};
                color: ${l};
                padding: 8px 14px;
                border-radius: 10px;
                box-shadow: ${v};
                transition: all 0.2s ease;
                font-weight: 600;
            }
            .toolbar button:hover {
                border-color: ${i};
                color: ${i};
                background: rgba(0, 0, 0, 0.08);
            }
            .toolbar .danger {
                border-color: ${r};
            }
            .toolbar .danger:hover {
                color: ${i};
                border-color: ${i};
            }
        }

        .grid {
            display: grid;
            gap: 12px;
            margin-bottom: 12px;
        }
        .grid-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .grid-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 1100px) {
            .grid-4 {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (max-width: 700px) {
            .grid-4,
            .grid-2 {
                grid-template-columns: 1fr;
            }
        }

        .card {
            background: ${o};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${v};
        }

        .kpi .label {
            color: ${p};
            font-weight: 600;
            margin-bottom: 6px;
        }
        .kpi .value {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .kpi .hint {
            color: ${p};
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${r};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 600;
            margin-top: 6px;
            background: color-mix(in oklab, ${i} 10%, transparent);
            color: ${l};
        }
        .pill.active {
            opacity: 0.95;
        }
        .pill.inactive {
            opacity: 0.6;
        }
        .pill.paid {
            opacity: 0.95;
        }
        .pill.active,
        .pill.paid {
            border-color: ${i};
        }

        h2 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .row .actions button {
            background: ${o};
            border: 1px solid ${r};
            padding: 6px 12px;
            border-radius: 8px;
            color: ${l};
            transition: all 0.2s ease;
        }
        .row .actions button:hover {
            border-color: ${i};
            color: ${i};
            background: rgba(0, 0, 0, 0.06);
        }

        .pm {
            display: flex;
            align-items: baseline;
            gap: 12px;
        }
        .pm-brand {
            font-weight: 700;
        }
        .pm-last4 {
            letter-spacing: 1px;
        }
        .pm-exp {
            color: ${p};
        }

        .meta {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            margin-top: 12px;
        }
        @media (max-width: 700px) {
            .meta {
                grid-template-columns: 1fr;
            }
        }

        .links,
        .foot-nav,
        .quick-links {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 12px;
            a {
                border: 1px solid ${r};
                padding: 6px 10px;
                border-radius: 8px;
                text-decoration: none;
                color: ${l};
                transition: all 0.2s ease;
                background: transparent;
            }
            a:hover {
                color: ${i};
                border-color: ${i};
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .features {
            display: grid;
            gap: 6px;
        }
        .features li {
            list-style: none;
            border: 1px dashed ${r};
            border-radius: 8px;
            padding: 6px 10px;
        }

        .cta-row {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .cta-row a,
        .cta-row button {
            border: 1px solid ${r};
            background: ${o};
            color: ${l};
            padding: 6px 12px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .cta-row a:hover,
        .cta-row button:hover {
            color: ${i};
            border-color: ${i};
            background: rgba(0, 0, 0, 0.06);
        }

        .addons {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }
        @media (max-width: 1100px) {
            .addons {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (max-width: 700px) {
            .addons {
                grid-template-columns: 1fr;
            }
        }

        .addon {
            border: 1px solid ${r};
            border-radius: 10px;
            padding: 12px;
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 10px;
            align-items: center;
            background: color-mix(in oklab, ${o} 95%, transparent);
        }
        .addon .addon-title {
            font-weight: 600;
        }
        .addon button {
            border: 1px solid ${r};
            background: ${o};
            color: ${l};
            padding: 6px 10px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .addon button:hover {
            color: ${i};
            border-color: ${i};
            background: rgba(0, 0, 0, 0.06);
        }

        table.simple {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.simple th,
        table.simple td {
            padding: 10px;
            border-bottom: 1px solid ${r};
        }
        table.simple thead th {
            background: ${o};
            color: ${i};
            text-align: left;
        }
        table.simple tfoot th {
            text-align: left;
        }
        .right {
            text-align: right;
        }

        table.hoverable tbody tr:hover {
            background: color-mix(in oklab, ${i} 6%, transparent);
        }

        .row-actions {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }
        .row-actions a,
        .row-actions button {
            border: 1px solid ${r};
            background: ${o};
            color: ${l};
            padding: 4px 10px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .row-actions a:hover,
        .row-actions button:hover {
            color: ${i};
            border-color: ${i};
            background: rgba(0, 0, 0, 0.06);
        }

        .print-row {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .print-row .note {
            color: ${p};
        }
    `,Modal:g.div`
        .backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
        }
        .box {
            position: fixed;
            left: 50%;
            top: 20%;
            transform: translateX(-50%);
            width: min(520px, 94vw);
            padding: 16px;
            z-index: 40;
        }
        h3 {
            margin-bottom: 8px;
        }
        .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 12px;
        }
        .modal-actions button {
            border: 1px solid ${r};
            background: ${o};
            color: ${l};
            padding: 6px 12px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .modal-actions button:hover {
            color: ${i};
            border-color: ${i};
            background: rgba(0, 0, 0, 0.06);
        }
    `},P=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=d=>d<10?`0${d}`:`${d}`,m=d=>{const n=new Date(d);return`${P[n.getDay()]} ${M[n.getMonth()]} ${h(n.getDate())} ${n.getFullYear()}`},f=d=>{const n=new Date(d);return`${m(n)} ${h(n.getHours())}:${h(n.getMinutes())}:${h(n.getSeconds())}hrs`},T=()=>{C();const[d,n]=j.useState({open:!1,title:"",body:""}),t={name:"Scale",status:"Active",cycle:"Monthly",currency:"INR",seats:25,perSeat:899,nextChargeOn:"2025-10-20T10:30:00",lastBilledOn:"2025-09-20T10:30:00",paymentMethod:{brand:"Visa",last4:"4242",exp:"08/28",holder:"Ashish Ranjan"},billingEmail:"billing@acmecare.in",billingPhone:"+91-98765-43210",gstin:"29ABCDE1234F2Z5"},$=[{key:"inventoryPro",label:"Inventory Pro",status:"Active"},{key:"advancedReports",label:"Advanced Reports",status:"Active"},{key:"auditTrail",label:"Audit Trail",status:"Active"},{key:"whitelabel",label:"Whitelabel",status:"Inactive"},{key:"sso",label:"SSO (SAML/OIDC)",status:"Inactive"},{key:"governance",label:"Data Governance",status:"Inactive"}],y=j.useMemo(()=>[{id:"INV-2031",date:"2025-09-20T10:30:00",amount:22475,status:"Paid",method:"Visa •••• 4242"},{id:"INV-2022",date:"2025-08-20T10:30:00",amount:22475,status:"Paid",method:"Visa •••• 4242"},{id:"INV-2013",date:"2025-07-20T10:30:00",amount:22475,status:"Paid",method:"Visa •••• 4242"},{id:"INV-2004",date:"2025-06-20T10:30:00",amount:22475,status:"Paid",method:"Visa •••• 4242"},{id:"INV-1995",date:"2025-05-20T10:30:00",amount:22475,status:"Paid",method:"Visa •••• 4242"},{id:"INV-1986",date:"2025-04-20T10:30:00",amount:22475,status:"Paid",method:"Visa •••• 4242"},{id:"INV-1977",date:"2025-03-20T10:30:00",amount:22475,status:"Paid",method:"Visa •••• 4242"},{id:"INV-1968",date:"2025-02-20T10:30:00",amount:22475,status:"Paid",method:"Visa •••• 4242"}],[]),u=[{label:"Base plan (Scale, 25 seats × ₹899)",value:25*899},{label:"Add-on: Inventory Pro",value:3e3},{label:"Add-on: Advanced Reports",value:2e3},{label:"CGST (9%)",value:Math.round((25*899+3e3+2e3)*.09)},{label:"SGST (9%)",value:Math.round((25*899+3e3+2e3)*.09)}],w=u.reduce((s,x)=>s+x.value,0),c=(s,x)=>n({open:!0,title:s,body:x}),b=()=>n({open:!1,title:"",body:""}),k=()=>{document.body.classList.add("print-section-mode"),window.setTimeout(()=>{window.print(),window.setTimeout(()=>document.body.classList.remove("print-section-mode"),300)},100)};return e.jsxs(N.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(a,{to:"/settings",end:!0,children:"Settings"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"current",children:"Billing"})]}),e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"titles",children:[e.jsx("h1",{children:"Billing"}),e.jsx("p",{className:"muted",children:"Manage subscription, invoices, and payment methods."})]}),e.jsxs("div",{className:"toolbar",children:[e.jsx("button",{onClick:()=>c("Update Card","Card updates are disabled in this demo."),title:"Update card",children:"Update Card"}),e.jsx("button",{onClick:()=>c("Change Plan","Plan changes are disabled in this demo."),title:"Change plan",children:"Change Plan"}),e.jsx("button",{className:"danger",onClick:()=>c("Cancel Subscription","Subscription cancellation is disabled in this demo."),title:"Cancel subscription",children:"Cancel Subscription"})]})]}),e.jsxs("section",{id:"search-print-area",children:[e.jsxs("div",{className:"grid grid-4",children:[e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"label",children:"Plan"}),e.jsx("div",{className:"value",children:t.name}),e.jsx("div",{className:`pill ${t.status.toLowerCase()}`,children:t.status})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"label",children:"Next charge"}),e.jsx("div",{className:"value",children:f(t.nextChargeOn)}),e.jsxs("div",{className:"hint",children:[t.cycle," • ",t.currency]})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"label",children:"Seats"}),e.jsx("div",{className:"value",children:t.seats}),e.jsxs("div",{className:"hint",children:["₹",t.perSeat,"/seat"]})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"label",children:"Last billed"}),e.jsx("div",{className:"value",children:m(t.lastBilledOn)}),e.jsxs("div",{className:"hint",children:["Method • ",t.paymentMethod.brand," •••• ",t.paymentMethod.last4]})]})]}),e.jsxs("div",{className:"grid grid-2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"Payment Method"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"pm",children:[e.jsx("div",{className:"pm-brand",children:t.paymentMethod.brand}),e.jsxs("div",{className:"pm-last4",children:["•••• ",t.paymentMethod.last4]}),e.jsxs("div",{className:"pm-exp",children:["Exp ",t.paymentMethod.exp]})]}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:()=>c("Update Card","Card updates are disabled in this demo."),children:"Update"})})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{children:["Cardholder: ",e.jsx("span",{className:"muted",children:t.paymentMethod.holder})]}),e.jsxs("div",{children:["Billing email: ",e.jsx("span",{className:"muted",children:t.billingEmail})]}),e.jsxs("div",{children:["Billing phone: ",e.jsx("span",{className:"muted",children:t.billingPhone})]}),e.jsxs("div",{children:["GSTIN: ",e.jsx("span",{className:"muted",children:t.gstin})]})]}),e.jsxs("div",{className:"links",children:[e.jsx(a,{to:"/settings/profile",end:!0,children:"Profile"}),e.jsx(a,{to:"/admin/users",end:!0,children:"Users"}),e.jsx(a,{to:"/settings/print-templates",end:!0,children:"Print Templates"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"Current Plan"}),e.jsxs("ul",{className:"features",children:[e.jsx("li",{children:"Unlimited workspaces"}),e.jsx("li",{children:"Priority support"}),e.jsx("li",{children:"Advanced RBAC"}),e.jsx("li",{children:"15 custom print templates"}),e.jsx("li",{children:"API rate: 10k req/day"})]}),e.jsxs("div",{className:"cta-row",children:[e.jsx("button",{onClick:()=>c("Change Plan","Plan changes are disabled in this demo."),children:"Change Plan"}),e.jsx(a,{to:"/settings/billing",end:!0,children:"Refresh"})]}),e.jsxs("div",{className:"hint",children:["Cycle: ",t.cycle," • Currency: ",t.currency]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"Add-ons"}),e.jsx("div",{className:"addons",children:$.map(s=>e.jsxs("div",{className:"addon",children:[e.jsx("div",{className:"addon-title",children:s.label}),e.jsx("div",{className:`pill ${s.status==="Active"?"active":"inactive"}`,children:s.status}),e.jsx("button",{onClick:()=>c("Manage Add-on","Add-on changes are disabled in this demo."),title:"Manage add-on",children:"Manage"})]},s.key))})]}),e.jsxs("div",{className:"grid grid-2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"This Cycle (preview)"}),e.jsxs("table",{className:"simple",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Description"}),e.jsx("th",{className:"right",children:"Amount (₹)"})]})}),e.jsx("tbody",{children:u.map((s,x)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.label}),e.jsx("td",{className:"right",children:s.value.toLocaleString("en-IN")})]},x))}),e.jsx("tfoot",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:["Total due on ",m(t.nextChargeOn)]}),e.jsx("th",{className:"right",children:w.toLocaleString("en-IN")})]})})]}),e.jsxs("div",{className:"links",children:[e.jsx(a,{to:"/finance/taxes",end:!0,children:"Taxes"}),e.jsx(a,{to:"/finance",end:!0,children:"Finance"}),e.jsx(a,{to:"/reports/finance",end:!0,children:"Finance Reports"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"Quick Navigation"}),e.jsxs("div",{className:"quick-links",children:[e.jsx(a,{to:"/invoices",end:!0,children:"Invoices"}),e.jsx(a,{to:"/receipts",end:!0,children:"Receipts"}),e.jsx(a,{to:"/invoices/credit-notes",end:!0,children:"Credit Notes"}),e.jsx(a,{to:"/settings/numbering",end:!0,children:"Document Numbering"}),e.jsx(a,{to:"/settings/currencies",end:!0,children:"Currencies"}),e.jsx(a,{to:"/settings/tax",end:!0,children:"Tax"}),e.jsx(a,{to:"/tools/import-export",end:!0,children:"Import / Export"}),e.jsx(a,{to:"/settings/backups",end:!0,children:"Backups"}),e.jsx(a,{to:"/reports",end:!0,children:"All Reports"}),e.jsx(a,{to:"/dashboard",end:!0,children:"Dashboard"})]}),e.jsxs("div",{className:"print-row",children:[e.jsx("button",{onClick:k,title:"Print this section",children:"Print Billing Summary"}),e.jsxs("span",{className:"note",children:["Printed on ",f(new Date)]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h2",{children:"Invoice History"}),e.jsxs("table",{className:"simple hoverable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Invoice"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Amount (₹)"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Method"}),e.jsx("th",{className:"right",children:"Actions"})]})}),e.jsx("tbody",{children:y.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(a,{to:`/invoices/${s.id}`,title:"Open invoice",children:s.id})}),e.jsx("td",{children:m(s.date)}),e.jsx("td",{children:s.amount.toLocaleString("en-IN")}),e.jsx("td",{children:e.jsx("span",{className:`pill ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("td",{className:"muted",children:s.method}),e.jsx("td",{className:"right",children:e.jsxs("div",{className:"row-actions",children:[e.jsx(a,{to:`/invoices/${s.id}`,end:!0,children:"View"}),e.jsx(a,{to:`/invoices/${s.id}/print`,end:!0,children:"Print"}),e.jsx("button",{onClick:()=>c("Download PDF","Downloads are disabled in this demo."),children:"Download"})]})})]},s.id))})]}),e.jsxs("div",{className:"foot-nav",children:[e.jsx(a,{to:"/invoices",end:!0,children:"Go to Invoices"}),e.jsx(a,{to:"/reports/sales",end:!0,children:"Sales Report"}),e.jsx(a,{to:"/reports/gst",end:!0,children:"GST Report"})]})]})]}),d.open&&e.jsxs(N.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[e.jsx("div",{className:"backdrop",onClick:b}),e.jsxs("div",{className:"box card",role:"document",children:[e.jsx("h3",{id:"modal-title",children:d.title}),e.jsx("p",{className:"muted",children:d.body}),e.jsx("div",{className:"modal-actions",children:e.jsx("button",{onClick:b,children:"Close"})})]})]})]})};export{T as default};
