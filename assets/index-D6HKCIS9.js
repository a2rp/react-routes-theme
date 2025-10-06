import{d as c,u as I,r as l,j as s,e as H,K as R,aG as B,aH as L,L as e,i as n,w as x}from"./index-Dvs-eF3B.js";const $="var(--bg, #0d1117)",h="var(--text, #f3f4f6)",u="var(--muted, #a0a0a7)",o="var(--card, #111318)",r="var(--border, #23262d)",d="var(--accent, #5aa9ff)",g="var(--accent-soft, rgba(90,169,255,0.15))",f="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",i={Page:c.div`
        width: 100%;
        color: ${h};
        display: block;
        padding: 18px;
    `,HeaderBar:c.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        margin-bottom: 16px;
        background: ${o};
        border: 1px solid ${r};
        border-radius: 12px;
        padding: 16px;
        box-shadow: ${f};

        .lhs h1 {
            font-size: 22px;
            line-height: 1.25;
            margin: 0 0 4px 0;
        }
        .lhs .sub {
            color: ${u};
        }

        .rhs {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            gap: 14px;
        }

        .meta {
            display: grid;
            gap: 2px;
            align-content: center;
            padding: 6px 10px;
            border: 1px dashed ${r};
            border-radius: 8px;
            min-width: 180px;
            background: color-mix(in oklab, ${o} 92%, transparent);
        }
        .meta .k {
            color: ${u};
            font-size: 11px;
            letter-spacing: 0.2px;
        }
        .meta .v {
            font-weight: 600;
        }

        .actions {
            display: flex;
            gap: 8px;
        }
        .actions button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 36px;
            padding: 0 12px;
            background: ${o};
            border: 1px solid ${r};
            border-radius: 8px;
            box-shadow: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                color 0.2s ease, transform 0.05s ease;
        }
        .actions button:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${g};
        }
        .actions button:active {
            transform: translateY(1px);
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
            .rhs {
                grid-auto-flow: row;
                justify-items: start;
            }
        }
    `,ChipsRow:c.nav`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 14px 0 18px 0;

        .chip {
            font-size: 12px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${r};
            background: ${o};
            color: ${h};
            text-decoration: none;
            transition: color 0.2s ease, border-color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .chip:hover {
            color: ${d};
            border-color: ${d};
            box-shadow: 0 0 0 3px ${g};
        }
    `,Grid:c.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,Card:c.section`
        background: ${o};
        border: 1px solid ${r};
        border-radius: 12px;
        box-shadow: ${f};
        padding: 14px;

        .cardHd {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .cardHd h3 {
            font-size: 16px;
        }
        .cardHd .note {
            color: ${u};
            font-size: 12px;
        }

        .links {
            display: grid;
            gap: 6px;
        }
        .links.twoCol {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .links a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border: 1px solid ${r};
            border-radius: 8px;
            text-decoration: none;
            color: ${h};
            background: color-mix(in oklab, ${o} 96%, transparent);
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease, box-shadow 0.2s ease;
        }
        .links a:hover {
            color: ${d};
            border-color: ${d};
            background: color-mix(in oklab, ${d} 12%, transparent);
            box-shadow: 0 0 0 3px ${g};
        }

        .kv {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 10px;
            border: 1px dashed ${r};
            border-radius: 8px;
            margin-bottom: 6px;
            background: color-mix(in oklab, ${o} 94%, transparent);
        }
        .kv span {
            color: ${u};
        }
        .kv strong {
            letter-spacing: 0.2px;
        }

        .bullets {
            padding-left: 18px;
        }
        .bullets li {
            margin: 6px 0;
        }

        .printBlock {
            border: 1px solid ${r};
            border-radius: 10px;
            padding: 12px;
            background: color-mix(in oklab, ${o} 96%, transparent);
        }
        .printBlock .row {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
            margin-bottom: 8px;
        }
        .printBlock .row .col {
            border: 1px dashed ${r};
            padding: 8px;
            border-radius: 8px;
        }
        .printBlock .row .col.wide {
            grid-column: 1 / -1;
        }
        .printBlock .divider {
            height: 1px;
            background: ${r};
            margin: 10px 0;
        }
        .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${r};
            background: color-mix(in oklab, ${d} 14%, transparent);
            color: ${h};
            font-size: 12px;
        }
    `,Swatches:c.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;
        margin-top: 6px;

        .sw {
            position: relative;
            height: 50px;
            border: 1px solid ${r};
            border-radius: 10px;
            box-shadow: inset 0 0 0 1px
                color-mix(in oklab, ${r} 70%, transparent);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: ${h};
        }

        .sw[data-name="bg"] {
            background: ${$};
        }
        .sw[data-name="text"] {
            background: ${h};
            color: ${$};
        }
        .sw[data-name="muted"] {
            background: ${u};
        }
        .sw[data-name="card"] {
            background: ${o};
        }
        .sw[data-name="border"] {
            background: ${r};
        }
        .sw[data-name="accent"] {
            background: ${d};
        }
        .sw[data-name="accent-soft"] {
            background: ${g};
        }
    `,ModalBackdrop:c.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
    `,ModalCard:c.div`
        width: min(560px, 92vw);
        background: ${o};
        border: 1px solid ${r};
        border-radius: 12px;
        box-shadow: ${f};
        overflow: hidden;

        .hd {
            padding: 14px;
            border-bottom: 1px solid ${r};
        }
        .bd {
            padding: 14px;
            color: ${h};
        }
        .ft {
            padding: 12px;
            border-top: 1px solid ${r};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .ft button {
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid ${r};
            background: ${o};
            color: ${h};
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease;
        }
        .ft button:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${g};
        }
    `},E=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=t=>String(t).padStart(2,"0"),C=t=>t?new Date(t):new Date,S=t=>{const a=C(t);return`${E[a.getDay()]} ${F[a.getMonth()]} ${v(a.getDate())} ${a.getFullYear()}`},T=t=>{const a=C(t);return`${v(a.getHours())}:${v(a.getMinutes())}:${v(a.getSeconds())}hrs`},j=t=>`${S(t)} ${T(t)}`,U="2025-10-06T06:46:59.352Z",z="2025-10-06T12:16:55+05:30",G=()=>{const t=I(),[a,w]=l.useState({open:!1,title:"",body:""}),m=l.useMemo(()=>new Date,[]),N=l.useMemo(()=>new Date(U),[]),k=l.useMemo(()=>new Date(z),[]),D=l.useCallback(()=>{const p=document.body;if(!p)return;p.classList.add("print-section-mode");const b=()=>p.classList.remove("print-section-mode"),y=()=>{b(),window.removeEventListener("afterprint",y)};window.addEventListener("afterprint",y),window.print(),setTimeout(b,800)},[]),P=l.useCallback((p,b)=>{w({open:!0,title:p,body:b})},[]),M=()=>w({open:!1,title:"",body:""}),[O,A]=l.useState(j(m));return l.useEffect(()=>{const p=setInterval(()=>A(j(new Date)),1e3);return()=>clearInterval(p)},[]),s.jsxs(i.Page,{"data-page":"tools-playground",children:[s.jsxs(i.HeaderBar,{children:[s.jsxs("div",{className:"lhs",children:[s.jsx("h1",{children:"Playground"}),s.jsx("p",{className:"sub",children:"Quick access to demos, deep links, and utilities — tuned for display-only theme."})]}),s.jsxs("div",{className:"rhs",children:[s.jsxs("div",{className:"meta",children:[s.jsx("span",{className:"k",children:"Now"}),s.jsx("span",{className:"v",children:O})]}),N&&s.jsxs("div",{className:"meta",children:[s.jsx("span",{className:"k",children:"Built"}),s.jsx("span",{className:"v",children:j(N)})]}),k&&s.jsxs("div",{className:"meta",children:[s.jsx("span",{className:"k",children:"Last Commit"}),s.jsx("span",{className:"v",children:j(k)})]}),s.jsxs("div",{className:"actions",children:[s.jsxs("button",{onClick:D,title:"Print the section below",children:[s.jsx(H,{size:18})," ",s.jsx("span",{children:"Print Section"})]}),s.jsxs("button",{onClick:()=>t("/tools/theme-tokens"),title:"Open theme tokens",children:[s.jsx(R,{size:18})," ",s.jsx("span",{children:"Theme Tokens"})]}),s.jsxs("button",{onClick:()=>t("/tools/import-export"),title:"Import/Export",children:[s.jsx(B,{size:18})," ",s.jsx("span",{children:"Import / Export"})]}),s.jsxs("button",{onClick:()=>P("Demo Mode","Seeding is disabled in this demo. Navigation and print are available."),title:"Disabled in demo",children:[s.jsx(L,{size:18})," ",s.jsx("span",{children:"Seed Data"})]})]})]})]}),s.jsxs(i.ChipsRow,{role:"navigation","aria-label":"Quick navigation",children:[s.jsx(e,{to:"/home",className:"chip",children:"Home"}),s.jsx(e,{to:"/dashboard",className:"chip",children:"Dashboard"}),s.jsx(e,{to:"/customers",className:"chip",children:"Customers"}),s.jsx(e,{to:"/orders",className:"chip",children:"Orders"}),s.jsx(e,{to:"/invoices",className:"chip",children:"Invoices"}),s.jsx(e,{to:"/receipts",className:"chip",children:"Receipts"}),s.jsx(e,{to:"/products",className:"chip",children:"Products"}),s.jsx(e,{to:"/medicines",className:"chip",children:"Medicines"}),s.jsx(e,{to:"/inventory",className:"chip",children:"Inventory"}),s.jsx(e,{to:"/vendors",className:"chip",children:"Vendors"}),s.jsx(e,{to:"/purchase-orders",className:"chip",children:"POs"}),s.jsx(e,{to:"/finance",className:"chip",children:"Finance"}),s.jsx(e,{to:"/reports",className:"chip",children:"Reports"}),s.jsx(e,{to:"/admin/users",className:"chip",children:"Admin"}),s.jsx(e,{to:"/settings",className:"chip",children:"Settings"}),s.jsx(e,{to:"/tools/theme-tokens",className:"chip",children:"Theme Tokens"})]}),s.jsxs(i.Grid,{children:[s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Core & CRM"}),s.jsx("span",{className:"note",children:"Quick entry points"})]}),s.jsxs("div",{className:"links twoCol",children:[s.jsxs(e,{to:"/customers",children:[s.jsx(n,{})," All Customers"]}),s.jsxs(e,{to:"/customers/new",title:"Demo-only disabled path",children:[s.jsx(n,{})," Add Customer"]}),s.jsxs(e,{to:"/customers/CUST-1001",children:[s.jsx(n,{})," Customer CUST-1001"]}),s.jsxs(e,{to:"/customers/CUST-1001/edit",children:[s.jsx(n,{})," Edit CUST-1001"]}),s.jsxs(e,{to:"/customers/CUST-1001/print",children:[s.jsx(n,{})," Print CUST-1001"]}),s.jsxs(e,{to:"/search",children:[s.jsx(n,{})," Global Search"]}),s.jsxs(e,{to:"/about",children:[s.jsx(n,{})," About"]}),s.jsxs(e,{to:"/examples",children:[s.jsx(n,{})," Examples Home"]})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Sales & Billing"}),s.jsx("span",{className:"note",children:"Display-only routes"})]}),s.jsxs("div",{className:"links twoCol",children:[s.jsxs(e,{to:"/orders",children:[s.jsx(n,{})," Orders"]}),s.jsxs(e,{to:"/orders/new",title:"Demo-only disabled path",children:[s.jsx(n,{})," New Order"]}),s.jsxs(e,{to:"/orders/ORD-3001",children:[s.jsx(n,{})," Order ORD-3001"]}),s.jsxs(e,{to:"/orders/ORD-3001/print",children:[s.jsx(n,{})," Print ORD-3001"]}),s.jsxs(e,{to:"/sales/quotes",children:[s.jsx(n,{})," Quotes"]}),s.jsxs(e,{to:"/sales/returns",children:[s.jsx(n,{})," Returns"]}),s.jsxs(e,{to:"/sales/payments",children:[s.jsx(n,{})," Payments"]}),s.jsxs(e,{to:"/invoices",children:[s.jsx(n,{})," Invoices"]}),s.jsxs(e,{to:"/invoices/new",title:"Demo-only disabled path",children:[s.jsx(n,{})," New Invoice"]}),s.jsxs(e,{to:"/invoices/INV-2031",children:[s.jsx(n,{})," Invoice INV-2031"]}),s.jsxs(e,{to:"/invoices/INV-2031/print",children:[s.jsx(n,{})," Print INV-2031"]}),s.jsxs(e,{to:"/receipts",children:[s.jsx(n,{})," Receipts"]})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Catalog & Medicines"}),s.jsx("span",{className:"note",children:"Products, attributes & pharma"})]}),s.jsxs("div",{className:"links twoCol",children:[s.jsxs(e,{to:"/products",children:[s.jsx(n,{})," All Products"]}),s.jsxs(e,{to:"/products/new",title:"Demo-only disabled path",children:[s.jsx(n,{})," Add Product"]}),s.jsxs(e,{to:"/categories",children:[s.jsx(n,{})," Categories"]}),s.jsxs(e,{to:"/products/brands",children:[s.jsx(n,{})," Brands"]}),s.jsxs(e,{to:"/products/attributes",children:[s.jsx(n,{})," Attributes"]}),s.jsxs(e,{to:"/products/price-lists",children:[s.jsx(n,{})," Price Lists"]}),s.jsxs(e,{to:"/medicines",children:[s.jsx(n,{})," Medicines"]}),s.jsxs(e,{to:"/medicines/manufacturers",children:[s.jsx(n,{})," Manufacturers"]}),s.jsxs(e,{to:"/medicines/molecules",children:[s.jsx(n,{})," Molecules"]}),s.jsxs(e,{to:"/medicines/forms",children:[s.jsx(n,{})," Forms"]}),s.jsxs(e,{to:"/medicines/strengths",children:[s.jsx(n,{})," Strengths"]}),s.jsxs(e,{to:"/medicines/expiry-tracker",children:[s.jsx(n,{})," Expiry Tracker"]}),s.jsxs(e,{to:"/medicines/hsn-gst",children:[s.jsx(n,{})," HSN / GST"]})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Inventory & Purchasing"}),s.jsx("span",{className:"note",children:"Stock & vendors"})]}),s.jsxs("div",{className:"links twoCol",children:[s.jsxs(e,{to:"/inventory",children:[s.jsx(n,{})," Overview"]}),s.jsxs(e,{to:"/inventory/lots",children:[s.jsx(n,{})," Lots"]}),s.jsxs(e,{to:"/inventory/batches",children:[s.jsx(n,{})," Batches"]}),s.jsxs(e,{to:"/inventory/adjustments",children:[s.jsx(n,{})," Adjustments"]}),s.jsxs(e,{to:"/inventory/transfers",children:[s.jsx(n,{})," Transfers"]}),s.jsxs(e,{to:"/inventory/warehouses",children:[s.jsx(n,{})," Warehouses"]}),s.jsxs(e,{to:"/inventory/reorder",children:[s.jsx(n,{})," Reorder Planner"]}),s.jsxs(e,{to:"/vendors",children:[s.jsx(n,{})," Vendors"]}),s.jsxs(e,{to:"/vendors/new",title:"Demo-only disabled path",children:[s.jsx(n,{})," Add Vendor"]}),s.jsxs(e,{to:"/purchase-orders",children:[s.jsx(n,{})," Purchase Orders"]}),s.jsxs(e,{to:"/purchase-orders/new",title:"Demo-only disabled path",children:[s.jsx(n,{})," New PO"]}),s.jsxs(e,{to:"/shipments",children:[s.jsx(n,{})," Shipments"]}),s.jsxs(e,{to:"/shipments/new",title:"Demo-only disabled path",children:[s.jsx(n,{})," New Shipment"]}),s.jsxs(e,{to:"/shipments/carriers",children:[s.jsx(n,{})," Carriers"]})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Reports & Finance"}),s.jsx("span",{className:"note",children:"Static display-oriented"})]}),s.jsxs("div",{className:"links twoCol",children:[s.jsxs(e,{to:"/reports",children:[s.jsx(n,{})," Reports Overview"]}),s.jsxs(e,{to:"/reports/sales",children:[s.jsx(n,{})," Sales"]}),s.jsxs(e,{to:"/reports/inventory",children:[s.jsx(n,{})," Inventory"]}),s.jsxs(e,{to:"/reports/customers",children:[s.jsx(n,{})," Customers"]}),s.jsxs(e,{to:"/reports/finance",children:[s.jsx(n,{})," Finance"]}),s.jsxs(e,{to:"/reports/procurement",children:[s.jsx(n,{})," Procurement"]}),s.jsxs(e,{to:"/reports/shipment",children:[s.jsx(n,{})," Shipment"]}),s.jsxs(e,{to:"/reports/gst",children:[s.jsx(n,{})," GST"]}),s.jsxs(e,{to:"/finance",children:[s.jsx(n,{})," Finance Overview"]}),s.jsxs(e,{to:"/finance/chart-of-accounts",children:[s.jsx(n,{})," Chart of Accounts"]}),s.jsxs(e,{to:"/finance/ledgers",children:[s.jsx(n,{})," Ledgers"]}),s.jsxs(e,{to:"/finance/journals",children:[s.jsx(n,{})," Journals"]}),s.jsxs(e,{to:"/finance/taxes",children:[s.jsx(n,{})," Taxes"]}),s.jsxs(e,{to:"/finance/gst-returns",children:[s.jsx(n,{})," GST Returns"]}),s.jsxs(e,{to:"/finance/balance-sheet",children:[s.jsx(n,{})," Balance Sheet"]}),s.jsxs(e,{to:"/finance/profit-loss",children:[s.jsx(n,{})," Profit & Loss"]}),s.jsxs(e,{to:"/finance/trial-balance",children:[s.jsx(n,{})," Trial Balance"]})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Admin & Settings"}),s.jsx("span",{className:"note",children:"Configuration"})]}),s.jsxs("div",{className:"links twoCol",children:[s.jsxs(e,{to:"/admin/users",children:[s.jsx(n,{})," Users"]}),s.jsxs(e,{to:"/admin/roles",children:[s.jsx(n,{})," Roles"]}),s.jsxs(e,{to:"/admin/permissions",children:[s.jsx(n,{})," Permissions"]}),s.jsxs(e,{to:"/admin/audit-log",children:[s.jsx(n,{})," Audit Log"]}),s.jsxs(e,{to:"/admin/activity",children:[s.jsx(n,{})," Activity"]}),s.jsxs(e,{to:"/admin/system-status",children:[s.jsx(n,{})," System Status"]}),s.jsxs(e,{to:"/admin/feature-flags",children:[s.jsx(n,{})," Feature Flags"]}),s.jsxs(e,{to:"/admin/tenants",children:[s.jsx(n,{})," Tenants"]}),s.jsxs(e,{to:"/admin/integrations",children:[s.jsx(n,{})," Integrations"]}),s.jsxs(e,{to:"/admin/email-templates",children:[s.jsx(n,{})," Email Templates"]}),s.jsxs(e,{to:"/admin/sms-templates",children:[s.jsx(n,{})," SMS Templates"]}),s.jsxs(e,{to:"/settings",children:[s.jsx(n,{})," Settings Home"]}),s.jsxs(e,{to:"/settings/profile",children:[s.jsx(n,{})," Profile"]}),s.jsxs(e,{to:"/settings/appearance",children:[s.jsx(n,{})," Appearance"]}),s.jsxs(e,{to:"/settings/billing",children:[s.jsx(n,{})," Billing"]}),s.jsxs(e,{to:"/settings/backups",children:[s.jsx(n,{})," Backups"]}),s.jsxs(e,{to:"/settings/tokens",children:[s.jsx(n,{})," Tokens"]}),s.jsxs(e,{to:"/settings/warehouses",children:[s.jsx(n,{})," Warehouses"]}),s.jsxs(e,{to:"/settings/locations",children:[s.jsx(n,{})," Locations"]}),s.jsxs(e,{to:"/settings/tax",children:[s.jsx(n,{})," Tax"]}),s.jsxs(e,{to:"/settings/units",children:[s.jsx(n,{})," Units"]}),s.jsxs(e,{to:"/settings/currencies",children:[s.jsx(n,{})," Currencies"]}),s.jsxs(e,{to:"/settings/numbering",children:[s.jsx(n,{})," Numbering"]}),s.jsxs(e,{to:"/settings/print-templates",children:[s.jsx(n,{})," Print Templates"]}),s.jsxs(e,{to:"/settings/notifications",children:[s.jsx(n,{})," Notifications"]}),s.jsxs(e,{to:"/settings/webhooks",children:[s.jsx(n,{})," Webhooks"]})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Healthcare & Manufacturing"}),s.jsx("span",{className:"note",children:"Optional modules"})]}),s.jsxs("div",{className:"links twoCol",children:[s.jsxs(e,{to:"/patients",children:[s.jsx(n,{})," Patients"]}),s.jsxs(e,{to:"/appointments",children:[s.jsx(n,{})," Appointments"]}),s.jsxs(e,{to:"/appointments/calendar",children:[s.jsx(n,{})," Appointment Calendar"]}),s.jsxs(e,{to:"/prescriptions",children:[s.jsx(n,{})," Prescriptions"]}),s.jsxs(e,{to:"/labs",children:[s.jsx(n,{})," Labs"]}),s.jsxs(e,{to:"/imaging",children:[s.jsx(n,{})," Imaging"]}),s.jsxs(e,{to:"/manufacturing",children:[s.jsx(n,{})," Manufacturing"]}),s.jsxs(e,{to:"/manufacturing/bom",children:[s.jsx(n,{})," BOM"]}),s.jsxs(e,{to:"/manufacturing/work-orders",children:[s.jsx(n,{})," Work Orders"]}),s.jsxs(e,{to:"/manufacturing/production",children:[s.jsx(n,{})," Production"]})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Theme Palette"}),s.jsx("span",{className:"note",children:"Tokens from CSS variables"})]}),s.jsxs(i.Swatches,{children:[s.jsx("div",{className:"sw","data-name":"bg",children:s.jsx("span",{children:"--bg"})}),s.jsx("div",{className:"sw","data-name":"text",children:s.jsx("span",{children:"--text"})}),s.jsx("div",{className:"sw","data-name":"muted",children:s.jsx("span",{children:"--muted"})}),s.jsx("div",{className:"sw","data-name":"card",children:s.jsx("span",{children:"--card"})}),s.jsx("div",{className:"sw","data-name":"border",children:s.jsx("span",{children:"--border"})}),s.jsx("div",{className:"sw","data-name":"accent",children:s.jsx("span",{children:"--accent"})}),s.jsx("div",{className:"sw","data-name":"accent-soft",children:s.jsx("span",{children:"--accent-soft"})})]}),s.jsx("p",{className:"tiny",children:"Palette renders from current theme variables. Toggle app theme to preview."})]}),s.jsxs(i.Card,{id:"search-print-area",children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Print Preview Area"}),s.jsx("span",{className:"note",children:"Only this section will print"})]}),s.jsxs("div",{className:"printBlock",children:[s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col",children:[s.jsx("h4",{children:"Document"}),s.jsxs("p",{children:["Reference: ",s.jsx("strong",{children:"DOC-2025-001"})]}),s.jsxs("p",{children:["Generated: ",s.jsx("strong",{children:j(m)})]})]}),s.jsxs("div",{className:"col",children:[s.jsx("h4",{children:"From"}),s.jsx("p",{children:"Ashish Ranjan"}),s.jsx("p",{children:"Playground · Theme Demos"})]}),s.jsxs("div",{className:"col",children:[s.jsx("h4",{children:"Status"}),s.jsx("span",{className:"badge",children:"Demo"})]})]}),s.jsx("div",{className:"divider"}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col wide",children:s.jsx("p",{children:"This section showcases the exact print behavior. Use the “Print Section” action above — the page will switch to print-only mode for this block and revert automatically after printing."})})})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Date Format Samples"}),s.jsx("span",{className:"note",children:"Unified across the app"})]}),s.jsxs("div",{className:"links",children:[s.jsxs("div",{className:"kv",children:[s.jsx("span",{children:"Date"}),s.jsx("strong",{children:S(m)})]}),s.jsxs("div",{className:"kv",children:[s.jsx("span",{children:"Date + Time"}),s.jsx("strong",{children:j(m)})]}),s.jsxs("div",{className:"kv",children:[s.jsx("span",{children:"Only Time"}),s.jsx("strong",{children:T(m)})]})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Shortcuts"}),s.jsx("span",{className:"note",children:"Discoverability"})]}),s.jsxs("ul",{className:"bullets",children:[s.jsxs("li",{children:[s.jsx("kbd",{children:"Ctrl"})," + ",s.jsx("kbd",{children:"K"})," — sidebar search focus"]}),s.jsxs("li",{children:[s.jsx("kbd",{children:"Enter"}),"/",s.jsx("kbd",{children:"Space"})," — toggle a sidebar section"]}),s.jsx("li",{children:"Tab/Shift+Tab — keyboard navigation across actions"})]})]}),s.jsxs(i.Card,{children:[s.jsxs("div",{className:"cardHd",children:[s.jsx("h3",{children:"Deep Links"}),s.jsx("span",{className:"note",children:"Open specific screens directly"})]}),s.jsxs("div",{className:"links twoCol",children:[s.jsxs(e,{to:"/print/invoice/INV-2031",children:[s.jsx(x,{})," Print · Invoice INV-2031"]}),s.jsxs(e,{to:"/print/quote/Q-9001",children:[s.jsx(x,{})," Print · Quote Q-9001"]}),s.jsxs(e,{to:"/print/sticker/STK-1001",children:[s.jsx(x,{})," Print · Sticker STK-1001"]}),s.jsxs(e,{to:"/admin/users/USR-101",children:[s.jsx(x,{})," Admin · User USR-101"]}),s.jsxs(e,{to:"/finance/ledgers/ACC-500",children:[s.jsx(x,{})," Finance · Ledger ACC-500"]}),s.jsxs(e,{to:"/orders/ORD-3001/items/ITEM-01",children:[s.jsx(x,{})," Order ORD-3001 · Item ITEM-01"]}),s.jsxs(e,{to:"/labs/catalog",children:[s.jsx(x,{})," Labs Catalog"]}),s.jsxs(e,{to:"/appointments/calendar",children:[s.jsx(x,{})," Appointment Calendar"]})]})]})]}),a.open&&s.jsx(i.ModalBackdrop,{role:"dialog","aria-modal":"true",children:s.jsxs(i.ModalCard,{children:[s.jsx("div",{className:"hd",children:s.jsx("h3",{children:a.title})}),s.jsx("div",{className:"bd",children:s.jsx("p",{children:a.body})}),s.jsx("div",{className:"ft",children:s.jsx("button",{onClick:M,children:"Close"})})]})}),s.jsx("style",{children:`
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
      `})]})};export{G as default};
