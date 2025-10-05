import{d as p,r as h,j as e,N as y,L as t}from"./index-DwhKQ_MC.js";const r="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",D="var(--bg, #0d1117)",c="var(--card, #111318)",o="var(--border, #23262d)",s="var(--accent, #5aa9ff)",B="var(--accent-soft, rgba(90,169,255,0.15))",m="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",x={Page:p.div`
        width: 100%;
        color: ${r};
        background: ${D};
        padding: 16px 18px 28px;
    `,Header:p.header`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 16px;

        .path {
            display: flex;
            align-items: center;
            gap: 6px;
            a,
            strong {
                color: ${r};
            }
            a {
                opacity: 0.85;
            }
            a:hover {
                color: ${s};
            }
            span {
                color: ${l};
            }
        }

        .meta {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;

            .stamp {
                color: ${l};
                border: 1px dashed ${o};
                padding: 4px 8px;
                border-radius: 8px;
            }
            .pill {
                border: 1px solid ${o};
                background: ${c};
                padding: 6px 10px;
                border-radius: 999px;
                text-decoration: none;
                color: ${r};
                box-shadow: ${m};
            }
            .pill:hover {
                border-color: ${s};
                color: ${s};
            }
        }
    `,TopBar:p.section`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border: 1px solid ${o};
        border-radius: 12px;
        background: ${c};
        box-shadow: ${m};
        margin-bottom: 16px;

        .cluster {
            display: flex;
            align-items: center;
            gap: 10px;
            button,
            .link {
                border: 1px solid ${o};
                background: transparent;
                color: ${r};
                padding: 8px 12px;
                border-radius: 8px;
                text-decoration: none;
                transition: all 0.2s ease;
            }
            button:hover,
            .link:hover {
                border-color: ${s};
                color: ${s};
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }

        .filters {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            input,
            select {
                background: ${c};
                border: 1px solid ${o};
                color: ${r};
                padding: 8px 10px;
                border-radius: 8px;
                transition: border-color 0.25s ease, box-shadow 0.25s ease;
            }
            input::placeholder {
                color: ${l};
            }
            input:focus,
            select:focus {
                outline: none;
                border-color: ${s};
                box-shadow: 0 0 0 3px ${B};
            }
            button {
                border: 1px solid ${o};
                background: transparent;
                color: ${r};
                padding: 8px 12px;
                border-radius: 8px;
            }
            button:hover {
                border-color: ${s};
                color: ${s};
            }
        }
    `,Kpis:p.section`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 16px;

        .kpi {
            border: 1px solid ${o};
            background: ${c};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${m};
            .label {
                color: ${l};
                font-weight: 600;
            }
            .value {
                font-size: 22px;
                font-weight: 700;
                margin: 6px 0;
            }
            .hint a {
                color: ${r};
                opacity: 0.8;
            }
            .hint a:hover {
                color: ${s};
            }
        }

        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,Content:p.main`
        border: 1px solid ${o};
        background: ${c};
        border-radius: 12px;
        padding: 16px;
        box-shadow: ${m};

        .listHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;

            h1 {
                font-size: 24px;
                margin-bottom: 6px;
            }
            p {
                color: ${l};
            }

            .listActions {
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
                button,
                .link {
                    border: 1px solid ${o};
                    background: transparent;
                    color: ${r};
                    padding: 8px 12px;
                    border-radius: 8px;
                    text-decoration: none;
                }
                button:hover,
                .link:hover {
                    border-color: ${s};
                    color: ${s};
                }
            }
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
        }

        .card {
            border: 1px solid ${o};
            background: ${c};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${m};
            display: flex;
            flex-direction: column;
            gap: 10px;

            .cardHead {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .id {
                    color: ${l};
                    font-family: monospace;
                }
            }

            h2 {
                font-size: 16px;
                letter-spacing: 0.2px;
            }

            .chip {
                font-size: 12px;
                border-radius: 999px;
                padding: 4px 8px;
                border: 1px solid ${o};
                background: rgba(0, 0, 0, 0.08);
            }
            .chip.planned {
                background: color-mix(in oklab, ${s} 12%, transparent);
                border-color: ${s};
            }
            .chip.underreview {
                background: rgba(0, 0, 0, 0.16);
            }
            .chip.shipped {
                background: rgba(0, 0, 0, 0.2);
            }

            .metaRow {
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
                .badge {
                    border: 1px solid ${o};
                    padding: 2px 8px;
                    border-radius: 999px;
                    color: ${r};
                    background: rgba(0, 0, 0, 0.08);
                    font-size: 12px;
                    font-weight: 600;
                }
                .votes {
                    color: ${r};
                    opacity: 0.9;
                }
                .updated {
                    color: ${l};
                }
            }

            .links {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                .link {
                    text-decoration: none;
                    border: 1px solid ${o};
                    padding: 6px 10px;
                    border-radius: 8px;
                    color: ${r};
                }
                .link:hover {
                    border-color: ${s};
                    color: ${s};
                }
            }

            .cardFoot {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-top: 4px;
                button,
                .link {
                    border: 1px solid ${o};
                    background: transparent;
                    color: ${r};
                    padding: 8px 12px;
                    border-radius: 8px;
                    text-decoration: none;
                }
                button:hover,
                .link:hover {
                    border-color: ${s};
                    color: ${s};
                }
                button:disabled {
                    opacity: 0.55;
                    cursor: not-allowed;
                }
            }
        }

        @media (max-width: 1280px) {
            .cards {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (max-width: 760px) {
            .cards {
                grid-template-columns: 1fr;
            }
        }
    `,QuickNav:p.section`
        margin-top: 16px;
        .qtitle {
            color: ${l};
            margin-bottom: 8px;
            font-weight: 700;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 10px;
            a {
                text-decoration: none;
                color: ${r};
                border: 1px solid ${o};
                background: ${c};
                border-radius: 8px;
                padding: 10px 12px;
                text-align: center;
            }
            a:hover {
                border-color: ${s};
                color: ${s};
            }
        }
        @media (max-width: 1280px) {
            .grid {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
        }
        @media (max-width: 900px) {
            .grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }
        @media (max-width: 640px) {
            .grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
    `,Modal:p.div`
        position: fixed;
        inset: 0;
        z-index: 60;
        .backdrop {
            position: absolute;
            inset: 0;
            border: 0;
            padding: 0;
            margin: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .sheet {
            position: absolute;
            right: 20px;
            bottom: 20px;
            width: min(560px, 96vw);
            border: 1px solid ${o};
            background: ${c};
            color: ${r};
            border-radius: 12px;
            box-shadow: ${m};
            padding: 16px;
        }
        h3 {
            font-size: 18px;
            margin-bottom: 8px;
        }
        p {
            color: ${l};
            margin-bottom: 10px;
        }
        .modalLinks {
            margin: 10px 0 14px;
            padding-left: 18px;
        }
        .modalLinks a {
            color: ${r};
        }
        .modalLinks a:hover {
            color: ${s};
        }
        .controls {
            display: flex;
            justify-content: flex-end;
        }
        .controls button {
            border: 1px solid ${o};
            background: transparent;
            color: ${r};
            padding: 8px 12px;
            border-radius: 8px;
        }
        .controls button:hover {
            border-color: ${s};
            color: ${s};
        }
    `},P=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],j=i=>String(i).padStart(2,"0"),N=i=>{const n=new Date(i);return`${P[n.getDay()]} ${H[n.getMonth()]} ${j(n.getDate())} ${n.getFullYear()}`},U=i=>{const n=new Date(i);return`${j(n.getHours())}:${j(n.getMinutes())}:${j(n.getSeconds())}hrs`},b=i=>`${N(i)} ${U(i)}`,O=[{id:"FB-1007",title:"Bulk print for invoices with one click",category:"Billing",status:"Planned",votes:243,createdAt:"2025-09-02T10:05:11+05:30",updatedAt:"2025-10-04T15:38:20+05:30",related:[{label:"Invoices",to:"/invoices"},{label:"Print Templates",to:"/settings/print-templates"},{label:"Receipts",to:"/receipts"}]},{id:"FB-1006",title:"Inventory transfers with barcode handoff",category:"Inventory",status:"Under Review",votes:187,createdAt:"2025-08-22T12:12:12+05:30",updatedAt:"2025-10-01T09:14:02+05:30",related:[{label:"Transfers",to:"/inventory/transfers"},{label:"Warehouses",to:"/inventory/warehouses"},{label:"Batches",to:"/inventory/batches"}]},{id:"FB-1005",title:"Customers: pin important contacts at top",category:"Customers",status:"Shipped",votes:129,createdAt:"2025-07-19T18:45:41+05:30",updatedAt:"2025-09-15T14:33:20+05:30",related:[{label:"Customers",to:"/customers"},{label:"Users",to:"/admin/users"},{label:"Activity",to:"/admin/activity"}],shippedLink:{label:"Changelog",to:"/changelog"}},{id:"FB-1004",title:"HSN/GST matrix for medicines catalog",category:"Medicines",status:"Planned",votes:211,createdAt:"2025-07-01T10:01:01+05:30",updatedAt:"2025-09-28T11:22:01+05:30",related:[{label:"HSN / GST",to:"/medicines/hsn-gst"},{label:"Medicines",to:"/medicines"},{label:"Taxes",to:"/finance/taxes"}]},{id:"FB-1003",title:"Role-based access for Reports > Finance",category:"Admin",status:"Under Review",votes:98,createdAt:"2025-06-11T10:05:11+05:30",updatedAt:"2025-08-08T16:12:20+05:30",related:[{label:"Permissions",to:"/admin/permissions"},{label:"Roles",to:"/admin/roles"},{label:"Finance Reports",to:"/reports/finance"}]},{id:"FB-1002",title:"Dark/light follow system across subpages",category:"Settings",status:"Shipped",votes:321,createdAt:"2025-05-10T09:05:11+05:30",updatedAt:"2025-09-10T18:20:20+05:30",related:[{label:"Appearance",to:"/settings/appearance"},{label:"Theme Tokens",to:"/tools/theme-tokens"}],shippedLink:{label:"Changelog",to:"/changelog"}},{id:"FB-1001",title:"Order screen: quick add from favorites",category:"Orders",status:"Under Review",votes:77,createdAt:"2025-04-01T12:00:00+05:30",updatedAt:"2025-07-22T17:20:30+05:30",related:[{label:"Orders",to:"/orders"},{label:"Products",to:"/products"}]}],I=["All","Billing","Inventory","Customers","Medicines","Admin","Settings","Orders"],E=["All","Planned","Under Review","Shipped"];function z(){const[i,n]=h.useState(""),[g,$]=h.useState("All"),[u,f]=h.useState("All"),[A,k]=h.useState(!1),T=h.useMemo(()=>{const a=i.trim().toLowerCase().split(/\s+/).filter(Boolean);return O.filter(d=>{const S=`${d.title} ${d.category} ${d.status}`.toLowerCase(),R=a.length===0||a.every(M=>S.includes(M)),F=g==="All"||d.category===g,L=u==="All"||d.status===u;return R&&F&&L})},[i,g,u]),C=()=>k(!0),w=()=>k(!1),v="2025-10-04T15:38:20+05:30";return e.jsxs(x.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(x.Header,{children:[e.jsxs("div",{className:"path",children:[e.jsx(y,{to:"/home",children:"Home"}),e.jsx("span",{children:"›"}),e.jsx(y,{to:"/help",children:"Help & Docs"}),e.jsx("span",{children:"›"}),e.jsx("strong",{children:"Feedback"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{className:"stamp",title:b(v),children:["Updated: ",b(v)]}),e.jsx(t,{to:"/roadmap",className:"pill",children:"Roadmap"}),e.jsx(t,{to:"/changelog",className:"pill",children:"Changelog"}),e.jsx(t,{to:"/contact",className:"pill",children:"Contact"})]})]}),e.jsxs(x.TopBar,{children:[e.jsxs("div",{className:"cluster",children:[e.jsx("button",{disabled:!0,title:"Demo: action disabled",children:"New Feedback"}),e.jsx("button",{onClick:C,children:"How feedback works"}),e.jsx(t,{to:"/reports/customers",className:"link",children:"Reports"}),e.jsx(t,{to:"/admin/audit-log",className:"link",children:"Audit Log"}),e.jsx(t,{to:"/settings/notifications",className:"link",children:"Notifications"})]}),e.jsxs("div",{className:"filters",children:[e.jsx("input",{type:"text",placeholder:"Search feedback...",value:i,onChange:a=>n(a.target.value),"aria-label":"Search feedback"}),e.jsx("select",{value:g,onChange:a=>$(a.target.value),"aria-label":"Category filter",children:I.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx("select",{value:u,onChange:a=>f(a.target.value),"aria-label":"Status filter",children:E.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx("button",{onClick:()=>{n(""),$("All"),f("All")},children:"Reset"})]})]}),e.jsxs(x.Kpis,{role:"region","aria-label":"Feedback KPIs",children:[e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Total Requests"}),e.jsx("div",{className:"value",children:"7"}),e.jsxs("div",{className:"hint",children:["as of ",N(v)]})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Planned"}),e.jsx("div",{className:"value",children:"2"}),e.jsx("div",{className:"hint",children:e.jsx(t,{to:"/roadmap",children:"view roadmap"})})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Under Review"}),e.jsx("div",{className:"value",children:"3"}),e.jsx("div",{className:"hint",children:e.jsx(t,{to:"/admin/permissions",children:"related settings"})})]}),e.jsxs("div",{className:"kpi",children:[e.jsx("div",{className:"label",children:"Shipped"}),e.jsx("div",{className:"value",children:"2"}),e.jsx("div",{className:"hint",children:e.jsx(t,{to:"/changelog",children:"release notes"})})]})]}),e.jsxs(x.Content,{id:"search-print-area",children:[e.jsxs("div",{className:"listHeader",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Feedback"}),e.jsx("p",{children:"Share ideas, report issues, and see what’s planned or shipped. Everything below is display-only for the demo."})]}),e.jsxs("div",{className:"listActions",children:[e.jsx("button",{onClick:()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>{window.print(),document.body.classList.remove("print-section-mode")},0)},children:"Print This"}),e.jsx(t,{to:"/settings/print-templates",className:"link",children:"Print Templates"})]})]}),e.jsx("div",{className:"cards",children:T.map(a=>e.jsxs("article",{className:"card","aria-labelledby":`fb-${a.id}`,children:[e.jsxs("header",{className:"cardHead",children:[e.jsx("span",{className:`chip ${a.status.replace(/\s+/g,"").toLowerCase()}`,children:a.status}),e.jsx("span",{className:"id",title:`Created: ${b(a.createdAt)}`,children:a.id})]}),e.jsx("h2",{id:`fb-${a.id}`,children:a.title}),e.jsxs("div",{className:"metaRow",children:[e.jsx("span",{className:"badge",children:a.category}),e.jsxs("span",{className:"votes",title:"Upvotes (demo)",children:["▲ ",a.votes]}),e.jsxs("span",{className:"updated",title:`Updated: ${b(a.updatedAt)}`,children:["Updated: ",b(a.updatedAt)]})]}),e.jsxs("div",{className:"links",children:[a.related.map(d=>e.jsx(t,{to:d.to,className:"link",children:d.label},d.to)),a.shippedLink&&e.jsx(t,{to:a.shippedLink.to,className:"link",children:a.shippedLink.label})]}),e.jsxs("footer",{className:"cardFoot",children:[e.jsx("button",{disabled:!0,title:"Demo: action disabled",children:"Upvote"}),e.jsx("button",{disabled:!0,title:"Demo: action disabled",children:"Comment"}),e.jsx(t,{to:"/roadmap",className:"link",children:"View on Roadmap"}),e.jsx(t,{to:"/changelog",className:"link",children:"Related Changelog"})]})]},a.id))})]}),e.jsxs(x.QuickNav,{children:[e.jsx("div",{className:"qtitle",children:"Jump to"}),e.jsxs("nav",{className:"grid",children:[e.jsx(t,{to:"/invoices",children:"Invoices"}),e.jsx(t,{to:"/receipts",children:"Receipts"}),e.jsx(t,{to:"/orders",children:"Orders"}),e.jsx(t,{to:"/products",children:"Products"}),e.jsx(t,{to:"/inventory",children:"Inventory"}),e.jsx(t,{to:"/inventory/transfers",children:"Transfers"}),e.jsx(t,{to:"/inventory/warehouses",children:"Warehouses"}),e.jsx(t,{to:"/medicines",children:"Medicines"}),e.jsx(t,{to:"/medicines/hsn-gst",children:"HSN / GST"}),e.jsx(t,{to:"/customers",children:"Customers"}),e.jsx(t,{to:"/sales/quotes",children:"Quotes"}),e.jsx(t,{to:"/sales/returns",children:"Returns"}),e.jsx(t,{to:"/finance",children:"Finance"}),e.jsx(t,{to:"/reports",children:"Reports"}),e.jsx(t,{to:"/reports/finance",children:"Finance Report"}),e.jsx(t,{to:"/admin/permissions",children:"Permissions"}),e.jsx(t,{to:"/admin/roles",children:"Roles"}),e.jsx(t,{to:"/admin/audit-log",children:"Audit Log"}),e.jsx(t,{to:"/settings/appearance",children:"Appearance"}),e.jsx(t,{to:"/tools/theme-tokens",children:"Theme Tokens"}),e.jsx(t,{to:"/help",children:"Help Center"}),e.jsx(t,{to:"/faq",children:"FAQ"}),e.jsx(t,{to:"/contact",children:"Contact"}),e.jsx(t,{to:"/roadmap",children:"Roadmap"}),e.jsx(t,{to:"/changelog",children:"Changelog"})]})]}),A&&e.jsxs(x.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-modal-title",children:[e.jsxs("div",{className:"sheet",children:[e.jsx("h3",{id:"demo-modal-title",children:"About Feedback (Demo)"}),e.jsx("p",{children:"This page shows how a full feedback hub would look in production: voting, comments, and triage. In this demo, actions are disabled by design to keep the experience predictable."}),e.jsxs("ul",{className:"modalLinks",children:[e.jsx("li",{children:e.jsx(t,{to:"/roadmap",children:"Roadmap"})}),e.jsx("li",{children:e.jsx(t,{to:"/changelog",children:"Changelog"})}),e.jsx("li",{children:e.jsx(t,{to:"/settings/notifications",children:"Notification Settings"})}),e.jsx("li",{children:e.jsx(t,{to:"/admin/feature-flags",children:"Feature Flags"})})]}),e.jsx("div",{className:"controls",children:e.jsx("button",{onClick:w,children:"Close"})})]}),e.jsx("button",{className:"backdrop",onClick:w,"aria-label":"Close"})]})]})}export{z as default};
