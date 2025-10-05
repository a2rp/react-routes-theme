import{d as y,u as z,r as j,j as e,N as o}from"./index-Dm9gfKqL.js";const m="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",l="var(--card, #111318)",n="var(--border, #23262d)",i="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",W="var(--bg, #0d1117)",w={Wrap:y.div`
        width: 100%;
        color: ${m};
    `,HeaderBar:y.header`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;

        .l {
            h1 {
                font-family: "Antonio", sans-serif;
                font-size: 28px;
                letter-spacing: 0.4px;
                margin-top: 6px;
            }
            .muted {
                color: ${c};
            }
            .breadcrumbs {
                display: flex;
                gap: 8px;
                align-items: center;
                a {
                    color: ${c};
                    border-bottom: 1px dashed transparent;
                }
                a:hover {
                    color: ${i};
                    border-color: ${i};
                }
                .current {
                    color: ${m};
                }
            }
        }
        .r {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }

        .btn {
            background: ${l};
            color: ${m};
            border: 1px solid ${n};
            padding: 8px 14px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .btn:hover {
            border-color: ${i};
            color: ${i};
        }
        .btn.primary {
            border-color: ${i};
            box-shadow: 0 0 0 3px ${k};
        }
    `,QuickNav:y.nav`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 16px;

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${n};
            background: ${l};
            color: ${m};
            font-size: 12px;
            text-decoration: none;
            transition: 0.2s;
        }
        .pill:hover {
            color: ${i};
            border-color: ${i};
        }
        .pill.active {
            color: ${i};
            box-shadow: 0 0 0 3px ${k};
        }
    `,Grid:y.div`
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 16px;

        .rail {
            border: 1px solid ${n};
            background: ${l};
            border-radius: 12px;
            padding: 12px;
            position: sticky;
            top: 10px;
            height: fit-content;

            .rail-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;
                h3 {
                    font-size: 14px;
                    letter-spacing: 0.3px;
                }
                .mini {
                    border: 1px solid ${n};
                    background: ${l};
                    color: ${m};
                    padding: 4px 8px;
                    border-radius: 6px;
                    cursor: pointer;
                }
                .mini:hover {
                    color: ${i};
                    border-color: ${i};
                }
            }

            ul.roles {
                list-style: none;
                padding: 0;
                margin: 0 0 10px 0;
            }
            ul.roles li {
                border: 1px solid ${n};
                background: color-mix(in oklab, ${l} 96%, transparent);
                border-radius: 10px;
                margin-bottom: 8px;
                overflow: hidden;
            }
            ul.roles li.active {
                border-color: ${i};
                box-shadow: 0 0 0 3px ${k};
            }

            .role-btn {
                width: 100%;
                display: grid;
                grid-template-columns: 12px 1fr auto;
                gap: 10px;
                align-items: center;
                padding: 8px 10px;
                background: transparent;
                color: ${m};
                border: 0;
                text-align: left;
                cursor: pointer;
            }
            .role-btn:hover {
                color: ${i};
            }
            .role-btn .dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: ${i};
            }
            .role-btn .name {
                font-weight: 600;
                letter-spacing: 0.2px;
            }
            .role-btn .meta {
                color: ${c};
                font-size: 12px;
            }

            .role-links {
                display: flex;
                gap: 8px;
                padding: 6px 10px 10px 28px;
            }
            .role-links .tiny,
            .matrix .tiny {
                font-size: 12px;
                color: ${c};
                text-decoration: none;
                border: 1px solid ${n};
                padding: 4px 8px;
                border-radius: 999px;
                background: ${l};
                transition: 0.2s;
            }
            .role-links .tiny:hover,
            .matrix .tiny:hover {
                color: ${i};
                border-color: ${i};
            }

            .rail-card {
                border-top: 1px dashed ${n};
                padding-top: 10px;
                margin-top: 6px;
            }
            .rail-card .row {
                display: flex;
                justify-content: space-between;
                margin: 6px 0;
                color: ${c};
            }
            .rail-card .row strong {
                color: ${m};
            }
            .rail-card .links {
                display: grid;
                gap: 6px;
                margin-top: 10px;
            }
            .rail-card .links a {
                color: ${c};
                text-decoration: none;
            }
            .rail-card .links a:hover {
                color: ${i};
            }
        }

        .matrix {
            display: grid;
            gap: 12px;
            .controls {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 8px;
                align-items: center;
            }
            .controls .search input {
                width: 100%;
                height: 38px;
                border-radius: 8px;
                border: 1px solid ${n};
                background: ${l};
                color: ${m};
                padding: 0 12px;
                outline: none;
                transition: 0.2s;
            }
            .controls .search input:focus {
                border-color: ${i};
                box-shadow: 0 0 0 3px ${k};
            }
            .controls .filters {
                display: flex;
                gap: 8px;
                align-items: center;
            }
            .controls select {
                height: 38px;
                border-radius: 8px;
                border: 1px solid ${n};
                background: ${l};
                color: ${m};
                padding: 0 10px;
            }
            .controls .btn.ghost {
                background: transparent;
                color: ${c};
                border: 1px dashed ${n};
                padding: 8px 12px;
                border-radius: 8px;
            }
            .controls .btn.ghost:hover {
                color: ${i};
                border-color: ${i};
            }

            .legend {
                display: flex;
                align-items: center;
                gap: 10px;
                color: ${c};
            }
            .legend .badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                border: 1px solid ${n};
                padding: 4px 8px;
                border-radius: 999px;
                background: ${l};
                font-size: 12px;
            }
            .legend .ok {
                color: ${m};
            }
            .legend .no {
                color: ${c};
            }
            .legend .sep {
                width: 1px;
                height: 12px;
                background: ${n};
                display: inline-block;
                margin: 0 4px;
            }

            .tableWrap {
                border: 1px solid ${n};
                border-radius: 12px;
                overflow: auto;
                background: ${l};
            }
            table.perm {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                font-size: 13px;
                line-height: 1.5;
            }
            table.perm thead th {
                position: sticky;
                top: 0;
                background: color-mix(in oklab, ${l} 98%, transparent);
                border-bottom: 1px solid ${n};
                padding: 10px;
                text-align: left;
                z-index: 3;
            }
            table.perm th,
            table.perm td {
                border-bottom: 1px solid ${n};
                padding: 10px;
            }
            table.perm tbody tr:hover {
                background: color-mix(in oklab, ${W} 94%, transparent);
            }

            .sticky-left {
                position: sticky;
                left: 0;
                background: color-mix(in oklab, ${l} 98%, transparent);
                z-index: 2;
            }
            .sticky-right {
                position: sticky;
                right: 0;
                background: color-mix(in oklab, ${l} 98%, transparent);
                z-index: 2;
            }

            .modName {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .modName .dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: ${i};
            }

            td.allow {
                color: ${m};
            }
            td.deny {
                color: ${c};
            }

            .actions-col {
                white-space: nowrap;
            }
            .actions-col .tiny {
                margin-right: 6px;
            }
            .actions-col .tiny.disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }

            .activity {
                border: 1px solid ${n};
                border-radius: 12px;
                padding: 12px;
                background: ${l};
            }
            .activity h3 {
                margin-bottom: 8px;
            }
            .activity ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 8px;
            }
            .activity li {
                display: grid;
                grid-template-columns: 220px 1fr;
                gap: 12px;
                align-items: baseline;
            }
            .activity .ts {
                color: ${c};
            }
            .activity .only-time {
                margin-left: 6px;
                color: ${c};
            }
            .activity .txt a {
                color: ${i};
                text-decoration: none;
            }
            .activity .txt a:hover {
                text-decoration: underline;
            }
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
            .rail {
                position: static;
            }
            .activity li {
                grid-template-columns: 1fr;
            }
        }
    `,ModalOverlay:y.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.55);
        display: grid;
        place-items: center;
        z-index: 40;
    `,ModalCard:y.div`
        width: min(540px, 92vw);
        background: ${l};
        border: 1px solid ${n};
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

        h3 {
            margin-bottom: 6px;
        }
        .muted {
            color: ${c};
            margin-bottom: 12px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }

        .btn {
            background: ${l};
            color: ${m};
            border: 1px solid ${n};
            padding: 8px 14px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .btn:hover {
            color: ${i};
            border-color: ${i};
        }
        .btn.primary {
            border-color: ${i};
            box-shadow: 0 0 0 3px ${k};
        }
    `},f=["view","create","edit","delete","export","approve"],S=[{key:"dashboard",label:"Dashboard",route:"/dashboard"},{key:"customers",label:"Customers",route:"/customers"},{key:"orders",label:"Orders",route:"/orders"},{key:"products",label:"Products",route:"/products"},{key:"categories",label:"Categories",route:"/categories"},{key:"inventory",label:"Inventory",route:"/inventory"},{key:"invoices",label:"Invoices",route:"/invoices"},{key:"receipts",label:"Receipts",route:"/receipts"},{key:"shipments",label:"Shipments",route:"/shipments"},{key:"vendors",label:"Vendors",route:"/vendors"},{key:"purchaseOrders",label:"Purchase Orders",route:"/purchase-orders"},{key:"reports",label:"Reports",route:"/reports"},{key:"finance",label:"Finance",route:"/finance"},{key:"medicines",label:"Medicines",route:"/medicines"},{key:"warehouses",label:"Warehouses",route:"/inventory/warehouses"},{key:"adjustments",label:"Adjustments",route:"/inventory/adjustments"},{key:"transfers",label:"Transfers",route:"/inventory/transfers"},{key:"priceLists",label:"Price Lists",route:"/products/price-lists"},{key:"brands",label:"Brands",route:"/products/brands"},{key:"attributes",label:"Attributes",route:"/products/attributes"},{key:"healthcarePatients",label:"Patients",route:"/patients"},{key:"appointments",label:"Appointments",route:"/appointments"},{key:"prescriptions",label:"Prescriptions",route:"/prescriptions"},{key:"labs",label:"Labs",route:"/labs"},{key:"imaging",label:"Imaging",route:"/imaging"},{key:"adminUsers",label:"Admin • Users",route:"/admin/users"},{key:"adminRoles",label:"Admin • Roles",route:"/admin/roles"},{key:"adminPermissions",label:"Admin • Permissions",route:"/admin/permissions"},{key:"adminAudit",label:"Admin • Audit Log",route:"/admin/audit-log"},{key:"adminSystem",label:"Admin • System Status",route:"/admin/system-status"},{key:"settings",label:"Settings",route:"/settings"},{key:"appearance",label:"Appearance",route:"/settings/appearance"},{key:"tokens",label:"API Tokens",route:"/settings/tokens"},{key:"printTemplates",label:"Print Templates",route:"/settings/print-templates"},{key:"tools",label:"Tools",route:"/tools"},{key:"importExport",label:"Import / Export",route:"/tools/import-export"}],E=[{code:"ADMIN",name:"Workspace Admin",description:"Full access across modules, approvals, configuration and audit.",members:3,active:!0,createdAt:"2025-05-20T10:22:33+05:30",updatedAt:"2025-09-26T18:28:57+05:30"},{code:"MANAGER",name:"Operations Manager",description:"Manage orders, inventory, shipments and approve invoices.",members:7,active:!0,createdAt:"2025-03-12T09:12:31+05:30",updatedAt:"2025-09-01T13:05:10+05:30"},{code:"SALES",name:"Sales Executive",description:"Create quotes, sales orders and invoices. Read-only finance.",members:14,active:!0,createdAt:"2025-01-06T12:01:00+05:30",updatedAt:"2025-08-18T08:11:50+05:30"},{code:"SUPPORT",name:"Support",description:"View customers, orders and activity. No write access.",members:5,active:!0,createdAt:"2025-04-02T08:35:00+05:30",updatedAt:"2025-07-10T17:42:05+05:30"},{code:"VIEWER",name:"Viewer",description:"Read-only across most modules.",members:9,active:!0,createdAt:"2025-06-01T11:22:45+05:30",updatedAt:"2025-08-02T15:17:22+05:30"}],F={ADMIN:D(!0),MANAGER:A({customers:t("view","create","edit","delete","export"),orders:t("view","create","edit","delete","export","approve"),products:t("view","create","edit","delete","export"),categories:t("view","create","edit","delete","export"),inventory:t("view","create","edit","delete","export"),invoices:t("view","create","edit","export","approve"),receipts:t("view","export"),shipments:t("view","create","edit","export"),vendors:t("view","create","edit","export"),purchaseOrders:t("view","create","edit","export","approve"),reports:t("view","export"),finance:t("view","export","approve"),medicines:t("view","create","edit","export"),warehouses:t("view","create","edit","export"),adjustments:t("view","create","edit"),transfers:t("view","create","edit"),priceLists:t("view","create","edit","export"),brands:t("view","create","edit","export"),attributes:t("view","create","edit","export"),healthcarePatients:t("view"),appointments:t("view","create","edit"),prescriptions:t("view"),labs:t("view"),imaging:t("view"),adminUsers:t("view","edit"),adminRoles:t("view","edit"),adminPermissions:t("view","edit"),adminAudit:t("view","export"),adminSystem:t("view","export"),settings:t("view","edit"),appearance:t("view","edit"),tokens:t("view"),printTemplates:t("view","edit"),tools:t("view","export"),importExport:t("view","export"),dashboard:t("view")}),SALES:A({customers:t("view","create","edit","export"),orders:t("view","create","edit","export"),products:t("view","export"),invoices:t("view","create","export"),receipts:t("view"),reports:t("view"),medicines:t("view"),dashboard:t("view")}),SUPPORT:A({customers:t("view"),orders:t("view"),shipments:t("view"),reports:t("view"),dashboard:t("view")}),VIEWER:A({customers:t("view"),orders:t("view"),products:t("view"),reports:t("view"),dashboard:t("view")})};function D(a){const r={};return S.forEach(d=>{r[d.key]={},f.forEach(u=>r[d.key][u]=a)}),r}function A(a){const r=D(!1);return Object.keys(a).forEach(d=>r[d]=I(a[d])),r}function t(...a){const r={};return f.forEach(d=>r[d]=a.includes(d)),r}function I(a){const r={};return f.forEach(d=>r[d]=!!a[d]),r}const H=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=a=>String(a).padStart(2,"0");function M(a){const r=new Date(a);return`${H[r.getDay()]} ${V[r.getMonth()]} ${h(r.getDate())} ${r.getFullYear()}`}function G(a){const r=new Date(a);return`${h(r.getHours())}:${h(r.getMinutes())}:${h(r.getSeconds())}hrs`}function T(a){const r=new Date(a);return`${M(r)} ${h(r.getHours())}:${h(r.getMinutes())}:${h(r.getSeconds())}hrs`}const J=({open:a,title:r,message:d,onClose:u})=>a?e.jsx(w.ModalOverlay,{role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:e.jsxs(w.ModalCard,{children:[e.jsx("h3",{id:"modal-title",children:r}),e.jsx("p",{className:"muted",children:d}),e.jsxs("div",{className:"actions",children:[e.jsx(o,{to:"/admin/roles",className:"btn",children:"Go to Roles"}),e.jsx("button",{className:"btn primary",onClick:u,autoFocus:!0,children:"Close"})]})]})}):null,Q=()=>{const a=z(),[r,d]=j.useState("ADMIN"),[u,R]=j.useState(""),[$,C]=j.useState("all"),[P,g]=j.useState(!1),p=j.useMemo(()=>E.find(s=>s.code===r),[r]),O=j.useMemo(()=>{const s=$==="all"?S:S.filter(x=>x.key===$);if(!u.trim())return s;const v=u.trim().toLowerCase();return s.filter(x=>(x.label+" "+x.key).toLowerCase().includes(v))},[u,$]),N=F[r]||{},L=()=>{const s={role:r,exportedAt:new Date().toISOString(),permissions:N},v=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),x=URL.createObjectURL(v),b=document.createElement("a");b.href=x,b.download=`permissions_${r.toLowerCase()}.json`,document.body.appendChild(b),b.click(),b.remove(),URL.revokeObjectURL(x)},U=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>document.body.classList.remove("print-section-mode"),window.print()};return e.jsxs(w.Wrap,{children:[e.jsxs(w.HeaderBar,{children:[e.jsxs("div",{className:"l",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(o,{to:"/home",children:"Home"}),e.jsx("span",{"aria-hidden":"true",children:"/"}),e.jsx(o,{to:"/admin/users",children:"Admin"}),e.jsx("span",{"aria-hidden":"true",children:"/"}),e.jsx("span",{className:"current",children:"Permissions"})]}),e.jsx("h1",{children:"Permissions Matrix"}),e.jsx("p",{className:"muted",children:"Map roles to fine-grained capabilities across modules. Display-only demo; edits are disabled."})]}),e.jsxs("div",{className:"r",children:[e.jsx("button",{className:"btn",onClick:()=>g(!0),title:"Demo mode: editing disabled",children:"Edit Matrix"}),e.jsx("button",{className:"btn",onClick:()=>g(!0),title:"Demo mode: role creation disabled",children:"Add Role"}),e.jsx("button",{className:"btn",onClick:L,title:"Download JSON snapshot",children:"Export"}),e.jsx("button",{className:"btn primary",onClick:U,title:"Print visible section",children:"Print"})]})]}),e.jsxs(w.QuickNav,{children:[e.jsx(o,{to:"/admin/users",className:"pill",children:"Users"}),e.jsx(o,{to:"/admin/roles",className:"pill",children:"Roles"}),e.jsx(o,{to:"/admin/permissions",className:"pill active",children:"Permissions"}),e.jsx(o,{to:"/admin/audit-log",className:"pill",children:"Audit Log"}),e.jsx(o,{to:"/admin/system-status",className:"pill",children:"System Status"}),e.jsx(o,{to:"/settings",className:"pill",children:"Settings"}),e.jsx(o,{to:"/settings/print-templates",className:"pill",children:"Print Templates"}),e.jsx(o,{to:"/tools/import-export",className:"pill",children:"Import / Export"}),e.jsx(o,{to:"/reports",className:"pill",children:"Reports"})]}),e.jsxs(w.Grid,{id:"search-print-area",children:[e.jsxs("aside",{className:"rail",children:[e.jsxs("div",{className:"rail-head",children:[e.jsx("h3",{children:"Roles"}),e.jsx("button",{className:"mini",onClick:()=>g(!0),title:"Demo mode",children:"New"})]}),e.jsx("ul",{className:"roles",children:E.map(s=>e.jsxs("li",{className:s.code===r?"active":"",children:[e.jsxs("button",{onClick:()=>d(s.code),className:"role-btn","aria-current":s.code===r,children:[e.jsx("span",{className:"dot","aria-hidden":"true"}),e.jsx("span",{className:"name",children:s.name}),e.jsxs("span",{className:"meta",children:[s.members," members"]})]}),e.jsxs("div",{className:"role-links",children:[e.jsx(o,{to:"/admin/roles",className:"tiny",children:"Open"}),e.jsx("button",{className:"tiny",onClick:()=>g(!0),title:"Demo mode",children:"Edit"})]})]},s.code))}),e.jsxs("div",{className:"rail-card",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Selected"}),e.jsx("strong",{children:p==null?void 0:p.name})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Status"}),e.jsx("strong",{children:p!=null&&p.active?"Active":"Inactive"})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Created"}),e.jsx("strong",{children:M((p==null?void 0:p.createdAt)||new Date)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Updated"}),e.jsx("strong",{children:T((p==null?void 0:p.updatedAt)||new Date)})]}),e.jsxs("div",{className:"links",children:[e.jsx(o,{to:"/admin/users",children:"Manage Users"}),e.jsx(o,{to:"/admin/roles",children:"Manage Roles"}),e.jsx(o,{to:"/admin/audit-log",children:"View Audit Log"})]})]})]}),e.jsxs("section",{className:"matrix",children:[e.jsxs("div",{className:"controls",children:[e.jsx("div",{className:"search",children:e.jsx("input",{value:u,onChange:s=>R(s.target.value),placeholder:"Search modules (e.g., invoices, inventory)","aria-label":"Search modules"})}),e.jsxs("div",{className:"filters",children:[e.jsxs("select",{value:$,onChange:s=>C(s.target.value),"aria-label":"Filter by module",children:[e.jsx("option",{value:"all",children:"All Modules"}),S.map(s=>e.jsx("option",{value:s.key,children:s.label},s.key))]}),e.jsx("button",{className:"btn ghost",onClick:()=>{R(""),C("all")},children:"Reset"}),e.jsx("button",{className:"btn ghost",onClick:()=>a("/admin/permissions"),children:"Refresh"})]})]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"badge ok",children:"✓ allowed"}),e.jsx("span",{className:"badge no",children:"— not allowed"}),e.jsx("span",{className:"sep"}),e.jsx("span",{className:"hint",children:"Hover module name for route. Click “Open” to navigate."})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"perm",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"sticky-left",children:"Module"}),f.map(s=>e.jsx("th",{title:s.toUpperCase(),children:s},s)),e.jsx("th",{className:"actions-col sticky-right",children:"Links"})]})}),e.jsx("tbody",{children:O.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"sticky-left",children:e.jsxs("div",{className:"modName",title:s.route,children:[e.jsx("span",{className:"dot","aria-hidden":"true"}),e.jsx("span",{children:s.label})]})}),f.map(v=>{var b;const x=((b=N==null?void 0:N[s.key])==null?void 0:b[v])??!1;return e.jsx("td",{className:x?"allow":"deny",children:x?"✓":"—"},v)}),e.jsxs("td",{className:"actions-col sticky-right",children:[e.jsx(o,{to:s.route,className:"tiny",children:"Open"}),e.jsx("button",{className:"tiny disabled",onClick:()=>g(!0),title:"Demo mode",children:"Edit"})]})]},s.key))})]})}),e.jsxs("div",{className:"activity",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{className:"ts",children:T("2025-10-04T15:38:20+05:30")}),e.jsxs("span",{className:"txt",children:[e.jsx("strong",{children:"Workspace Admin"})," role synced with system defaults."]})]}),e.jsxs("li",{children:[e.jsxs("span",{className:"ts",children:[M("2025-09-26")," ",e.jsx("span",{className:"only-time",children:G("2025-09-26T18:28:57+05:30")})]}),e.jsxs("span",{className:"txt",children:["Permissions audit exported by ",e.jsx(o,{to:"/admin/users/USR-1001",children:"USR-1001"}),"."]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"ts",children:M("2025-08-18")}),e.jsxs("span",{className:"txt",children:["Role descriptions updated for ",e.jsx(o,{to:"/admin/roles",children:"Operations Manager"}),"."]})]})]})]})]})]}),e.jsx("style",{children:`
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
          thead { -webkit-print-color-adjust: exact; }
        }
      `}),e.jsx(J,{open:P,title:"Demo mode",message:"This is a display-only theme. Editing roles and permissions is disabled.",onClose:()=>g(!1)})]})};export{Q as default};
