import{d,r as m,j as e,N as s,e as q,b as S,a_ as y,at as F,a$ as C}from"./index-Dvs-eF3B.js";const l="var(--text, #f3f4f6)",u="var(--muted, #a0a0a7)",g="var(--card, #111318)",c="var(--border, #23262d)",n="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",v="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",I=d.div`
    width: 100%;
    color: ${l};
    padding: 18px 18px 28px 18px;
`,T=d.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;

    .title h1 {
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 6px;
    }
    .title .subtitle {
        color: ${u};
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    }

    .btn {
        border: 1px solid ${c};
        background: ${g};
        color: ${l};
        padding: 8px 12px;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        font-weight: 600;
        box-shadow: ${v};
        transition: border-color 0.25s ease, color 0.25s ease,
            background 0.25s ease, transform 0.06s ease;
    }
    .btn.ghost:hover {
        border-color: ${n};
        color: ${n};
    }
    .btn.primary {
        border-color: ${n};
    }
    .btn.primary:hover {
        color: ${n};
        transform: translateY(1px);
    }
`,P=d.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    color: ${u};

    .meta strong {
        color: ${l};
    }
    .divider {
        opacity: 0.6;
    }
`,A=d.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    margin-bottom: 16px;

    .search {
        position: relative;
    }
    .search .icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.8;
    }
    .search input {
        width: 100%;
        height: 40px;
        padding: 0 12px 0 34px;
        border: 1px solid ${c};
        background: ${g};
        color: ${l};
        border-radius: 10px;
        transition: border-color 0.25s ease, box-shadow 0.25s ease;
    }
    .search input::placeholder {
        color: ${u};
    }
    .search input:focus {
        outline: none;
        border-color: ${n};
        box-shadow: 0 0 0 3px ${w};
    }

    .jumpers {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
    .chip {
        border: 1px solid ${c};
        background: ${g};
        color: ${l};
        padding: 6px 10px;
        font-size: 12px;
        border-radius: 999px;
        text-decoration: none;
        transition: border-color 0.25s ease, color 0.25s ease,
            background 0.25s ease;
    }
    .chip:hover {
        border-color: ${n};
        color: ${n};
    }

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
        .jumpers {
            justify-content: flex-start;
        }
    }
`,R=d.div`
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 16px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`,M=d.aside`
    position: sticky;
    top: 12px;
    align-self: start;
    display: grid;
    gap: 16px;

    .toc,
    .quick {
        background: ${g};
        border: 1px solid ${c};
        border-radius: 12px;
        box-shadow: ${v};
        padding: 12px;
    }

    .toc-title,
    .quick-title {
        font-weight: 700;
        letter-spacing: 0.3px;
        color: ${l};
        margin-bottom: 8px;
    }

    .toc ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .toc li a {
        display: grid;
        grid-template-columns: 18px 1fr auto;
        gap: 6px;
        align-items: center;
        padding: 6px 6px;
        border-radius: 8px;
        text-decoration: none;
        color: ${u};
        border: 1px solid transparent;
        transition: color 0.25s ease, border-color 0.25s ease,
            background 0.25s ease;
    }
    .toc li a:hover {
        color: ${n};
        border-color: ${n};
        background: rgba(0, 0, 0, 0.06);
    }
    .toc .count {
        font-size: 11px;
        opacity: 0.8;
    }

    .quick .list {
        display: grid;
        gap: 6px;
    }
    .quick .row {
        display: block;
        padding: 8px 10px;
        border: 1px solid ${c};
        border-radius: 8px;
        text-decoration: none;
        color: ${u};
        transition: color 0.25s ease, border-color 0.25s ease,
            background 0.25s ease;
    }
    .quick .row:hover {
        color: ${n};
        border-color: ${n};
        background: rgba(0, 0, 0, 0.06);
    }
`,O=d.main`
    display: grid;
    gap: 16px;

    .faq-section {
        background: ${g};
        border: 1px solid ${c};
        border-radius: 12px;
        box-shadow: ${v};
        padding: 16px;
    }

    .items {
        display: grid;
        gap: 10px;
        margin-top: 10px;
    }
`,H=d.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 8px;

    h2 {
        font-size: 20px;
        line-height: 1.3;
    }

    .anchor {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border: 1px solid ${c};
        border-radius: 8px;
        color: ${u};
        text-decoration: none;
        transition: color 0.25s ease, border-color 0.25s ease,
            background 0.25s ease;
    }
    .anchor:hover {
        color: ${n};
        border-color: ${n};
        background: rgba(0, 0, 0, 0.06);
    }
`,W=d.article`
    border: 1px solid ${c};
    background: ${g};
    border-radius: 10px;
    overflow: hidden;

    .q {
        width: 100%;
        background: transparent;
        color: ${l};
        border: none;
        text-align: left;
        display: grid;
        grid-template-columns: 20px 1fr;
        gap: 6px;
        align-items: center;
        padding: 10px 12px;
        cursor: pointer;
        transition: background 0.2s ease;
    }
    .q:hover {
        background: rgba(0, 0, 0, 0.06);
    }
    .q:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px ${w};
    }
    .q .label {
        font-weight: 600;
    }

    .a {
        padding: 12px;
        color: ${l};
        border-top: 1px solid ${c};
        line-height: 1.8;
    }
    .a .bullets {
        margin-top: 6px;
        padding-left: 18px;
    }
    .a .bullets li {
        margin: 2px 0;
    }

    &[data-open="false"] .a {
        display: none;
    }
`,f={date(t){return new Date(t).toDateString()},time(t){const i=new Date(t),p=String(i.getHours()).padStart(2,"0"),h=String(i.getMinutes()).padStart(2,"0"),o=String(i.getSeconds()).padStart(2,"0");return`${p}:${h}:${o}hrs`},dateTime(t){return`${f.date(t)} ${f.time(t)}`}},L="2025-10-06T12:16:55+05:30",D=[{id:"getting-started",title:"Getting Started",faqs:[{id:"gs-1",q:"Where is the main dashboard and how do I navigate?",a:e.jsxs(e.Fragment,{children:["Use ",e.jsx(s,{to:"/dashboard",children:"Dashboard"})," for a quick overview. Global navigation is on the left. Core areas:",e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx(s,{to:"/customers",children:"Customers"}),", ",e.jsx(s,{to:"/orders",children:"Orders"}),", ",e.jsx(s,{to:"/invoices",children:"Invoices"})]}),e.jsxs("li",{children:[e.jsx(s,{to:"/products",children:"Products"}),", ",e.jsx(s,{to:"/inventory",children:"Inventory"}),", ",e.jsx(s,{to:"/purchase-orders",children:"Purchase Orders"})]}),e.jsxs("li",{children:[e.jsx(s,{to:"/reports",children:"Reports"}),", ",e.jsx(s,{to:"/finance",children:"Finance"}),", ",e.jsx(s,{to:"/admin/users",children:"Admin"})]})]}),"Pro-tip: Press ",e.jsx("kbd",{children:"Tab"})," to move focus; sidebar sections toggle with ",e.jsx("kbd",{children:"Enter"}),"/",e.jsx("kbd",{children:"Space"}),"."]})},{id:"gs-2",q:"Does the theme support deep links for demo data?",a:e.jsxs(e.Fragment,{children:["Yes. Open a list page (e.g. ",e.jsx(s,{to:"/customers",children:"Customers"}),") and navigate to details from within the page. The sidebar intentionally shows high-level routes only to keep it clean. You can also try print-friendly routes like"," ",e.jsx(s,{to:"/print/invoice/INV-1001",children:"/print/invoice/INV-1001"})," (example placeholder)."]})},{id:"gs-3",q:"How do I switch appearance and theme tokens?",a:e.jsxs(e.Fragment,{children:["Visit ",e.jsx(s,{to:"/settings/appearance",children:"Appearance"})," for theme surface previews and token references. To explore variables, try"," ",e.jsx(s,{to:"/tools/theme-tokens",children:"Theme Tokens"}),". The color system is driven by CSS variables defined globally in ",e.jsx("code",{children:"index.css"}),"."]})}]},{id:"customers",title:"Customers & CRM",faqs:[{id:"cus-1",q:"Where can I see all customers and a sample profile?",a:e.jsxs(e.Fragment,{children:["Go to ",e.jsx(s,{to:"/customers",children:"All Customers"}),". For a profile layout preview, open a customer and then try the edit path like"," ",e.jsx(s,{to:"/customers/CUST-1001/edit",children:"/customers/CUST-1001/edit"})," (if seeded). You’ll find identity, meta panels (Created/Updated), contacts, and activity timeline."]})},{id:"cus-2",q:"Can I create or delete customers here?",a:e.jsxs(e.Fragment,{children:["This is a display-only demo. Actions like ",e.jsx("em",{children:"create"}),"/",e.jsx("em",{children:"delete"})," are represented by disabled buttons or non-destructive previews. Use ",e.jsx(s,{to:"/customers/new",children:"Add Customer"})," to preview the layout and form density."]})}]},{id:"sales-orders",title:"Sales, Orders & Billing",faqs:[{id:"so-1",q:"Where do I manage orders and invoices?",a:e.jsxs(e.Fragment,{children:["Orders live at ",e.jsx(s,{to:"/orders",children:"Orders"}),". Invoices are at ",e.jsx(s,{to:"/invoices",children:"Invoices"})," and receipts at"," ",e.jsx(s,{to:"/receipts",children:"Receipts"}),". You can also view credit notes via"," ",e.jsx(s,{to:"/invoices/credit-notes",children:"Credit Notes"}),"."]})},{id:"so-2",q:"How do I preview print templates?",a:e.jsxs(e.Fragment,{children:["Most detail pages include a print section. For a quick demo, open ",e.jsx(s,{to:"/examples/print",children:"Print Demo"}),". You can also navigate to specific print helpers like"," ",e.jsx(s,{to:"/print/invoice/INV-1001",children:"Invoice Print"})," or"," ",e.jsx(s,{to:"/orders/ORD-3001/print",children:"Order Print"})," (examples)."]})}]},{id:"catalog-inventory",title:"Catalog, Medicines & Inventory",faqs:[{id:"cat-1",q:"Where do I browse products and medicine specific taxonomies?",a:e.jsxs(e.Fragment,{children:["Check ",e.jsx(s,{to:"/products",children:"Products"})," and categories at"," ",e.jsx(s,{to:"/categories",children:"Categories"}),". Medicine-focused views:"," ",e.jsx(s,{to:"/medicines",children:"Catalog"}),","," ",e.jsx(s,{to:"/medicines/manufacturers",children:"Manufacturers"}),","," ",e.jsx(s,{to:"/medicines/molecules",children:"Molecules"}),","," ",e.jsx(s,{to:"/medicines/forms",children:"Forms"}),","," ",e.jsx(s,{to:"/medicines/strengths",children:"Strengths"}),","," ",e.jsx(s,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"}),","," ",e.jsx(s,{to:"/medicines/hsn-gst",children:"HSN / GST"}),"."]})},{id:"inv-1",q:"Where are inventory movements and warehouses?",a:e.jsxs(e.Fragment,{children:["Inventory overview is at ",e.jsx(s,{to:"/inventory",children:"Inventory"}),". Explore"," ",e.jsx(s,{to:"/inventory/lots",children:"Lots"}),","," ",e.jsx(s,{to:"/inventory/batches",children:"Batches"}),","," ",e.jsx(s,{to:"/inventory/adjustments",children:"Adjustments"}),","," ",e.jsx(s,{to:"/inventory/transfers",children:"Transfers"}),","," ",e.jsx(s,{to:"/inventory/warehouses",children:"Warehouses"}),","," ",e.jsx(s,{to:"/inventory/reorder",children:"Reorder"}),"."]})}]},{id:"procurement-logistics",title:"Procurement & Logistics",faqs:[{id:"po-1",q:"Where do I manage vendors and purchase orders?",a:e.jsxs(e.Fragment,{children:["Vendors live under ",e.jsx(s,{to:"/vendors",children:"Vendors"}),". Purchase flows under"," ",e.jsx(s,{to:"/purchase-orders",children:"Purchase Orders"})," with child paths like"," ",e.jsx(s,{to:"/purchase-orders/PO-1024/receipt",children:"Goods Receipt"})," and"," ",e.jsx(s,{to:"/purchase-orders/PO-1024/bill",children:"Vendor Bill"})," (example deep links)."]})},{id:"ship-1",q:"Where do I track shipments and labels?",a:e.jsxs(e.Fragment,{children:["Use ",e.jsx(s,{to:"/shipments",children:"Shipments"}),". You can also preview"," ",e.jsx(s,{to:"/shipments/carriers",children:"Carriers"}),","," ",e.jsx(s,{to:"/shipments/SHIP-2301/track",children:"Track"}),", and"," ",e.jsx(s,{to:"/shipments/SHIP-2301/labels",children:"Labels"})," (examples)."]})}]},{id:"finance-reports",title:"Finance & Reports",faqs:[{id:"fin-1",q:"What finance sections are available?",a:e.jsxs(e.Fragment,{children:["Explore ",e.jsx(s,{to:"/finance",children:"Finance"}),", chart of accounts at"," ",e.jsx(s,{to:"/finance/chart-of-accounts",children:"COA"}),","," ",e.jsx(s,{to:"/finance/ledgers",children:"Ledgers"}),","," ",e.jsx(s,{to:"/finance/journals",children:"Journals"}),","," ",e.jsx(s,{to:"/finance/taxes",children:"Taxes"}),","," ",e.jsx(s,{to:"/finance/gst-returns",children:"GST Returns"}),","," ",e.jsx(s,{to:"/finance/balance-sheet",children:"Balance Sheet"}),","," ",e.jsx(s,{to:"/finance/profit-loss",children:"Profit & Loss"}),","," ",e.jsx(s,{to:"/finance/trial-balance",children:"Trial Balance"}),"."]})},{id:"rep-1",q:"Where are business reports?",a:e.jsxs(e.Fragment,{children:["Head to ",e.jsx(s,{to:"/reports",children:"Reports"})," →"," ",e.jsx(s,{to:"/reports/sales",children:"Sales"}),","," ",e.jsx(s,{to:"/reports/inventory",children:"Inventory"}),","," ",e.jsx(s,{to:"/reports/customers",children:"Customers"}),","," ",e.jsx(s,{to:"/reports/finance",children:"Finance"}),","," ",e.jsx(s,{to:"/reports/procurement",children:"Procurement"}),","," ",e.jsx(s,{to:"/reports/shipment",children:"Shipment"}),","," ",e.jsx(s,{to:"/reports/gst",children:"GST"}),"."]})}]},{id:"admin-settings",title:"Admin & Settings",faqs:[{id:"adm-1",q:"Admin features overview",a:e.jsxs(e.Fragment,{children:["See ",e.jsx(s,{to:"/admin/users",children:"Users"}),", ",e.jsx(s,{to:"/admin/roles",children:"Roles"}),","," ",e.jsx(s,{to:"/admin/permissions",children:"Permissions"}),","," ",e.jsx(s,{to:"/admin/audit-log",children:"Audit Log"}),","," ",e.jsx(s,{to:"/admin/activity",children:"Activity"}),","," ",e.jsx(s,{to:"/admin/system-status",children:"System Status"}),","," ",e.jsx(s,{to:"/admin/feature-flags",children:"Feature Flags"}),","," ",e.jsx(s,{to:"/admin/tenants",children:"Tenants"}),","," ",e.jsx(s,{to:"/admin/integrations",children:"Integrations"}),","," ",e.jsx(s,{to:"/admin/email-templates",children:"Email Templates"}),","," ",e.jsx(s,{to:"/admin/sms-templates",children:"SMS Templates"}),"."]})},{id:"set-1",q:"Where do I configure appearance, numbering and notifications?",a:e.jsxs(e.Fragment,{children:["Visit ",e.jsx(s,{to:"/settings",children:"Settings"})," →"," ",e.jsx(s,{to:"/settings/appearance",children:"Appearance"}),","," ",e.jsx(s,{to:"/settings/numbering",children:"Numbering"}),","," ",e.jsx(s,{to:"/settings/notifications",children:"Notifications"}),","," ",e.jsx(s,{to:"/settings/print-templates",children:"Print Templates"}),","," ",e.jsx(s,{to:"/settings/webhooks",children:"Webhooks"}),"."]})}]},{id:"help-feedback",title:"Help, Feedback & Roadmap",faqs:[{id:"help-1",q:"Where can I find more examples or raise a query?",a:e.jsxs(e.Fragment,{children:["Try ",e.jsx(s,{to:"/examples",children:"Examples"})," for component demos. For general docs go to ",e.jsx(s,{to:"/help",children:"Help Center"}),", common questions at"," ",e.jsx(s,{to:"/faq",children:"FAQ"}),", share thoughts at"," ",e.jsx(s,{to:"/feedback",children:"Feedback"})," or check"," ",e.jsx(s,{to:"/changelog",children:"Changelog"})," and"," ",e.jsx(s,{to:"/roadmap",children:"Roadmap"}),"."]})},{id:"help-2",q:"How do I contact support?",a:e.jsxs(e.Fragment,{children:["Use ",e.jsx(s,{to:"/contact",children:"Contact"}),". You may also open"," ",e.jsx(s,{to:"/notifications",children:"Notifications"})," for system messages."]})}]}];function z(t){const i=t.trim().toLowerCase().split(/\s+/).filter(Boolean);return i.length?{predicate:o=>{const j=(o||"").toLowerCase();return i.every(b=>j.includes(b))},highlight:o=>o}:{predicate:()=>!0,highlight:o=>o}}const Y=()=>{const[t,i]=m.useState(""),p=m.useRef(null),{predicate:h}=m.useMemo(()=>z(t),[t]),o=m.useMemo(()=>D.map(r=>{const a=r.faqs.map(x=>{const N=`${x.q} ${typeof x.a=="string"?x.a:""}`,$=h(N);return{...x,_show:$}}),k=a.some(x=>x._show);return{...r,faqs:a,_any:k}}),[t]),j=()=>{const r=document.body;r&&(r.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>r.classList.remove("print-section-mode"),100)},50))},b=m.useMemo(()=>o.filter(r=>r._any).map(r=>({id:r.id,title:r.title,count:r.faqs.filter(a=>a._show).length})),[o]);return e.jsxs(I,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(T,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"FAQ"}),e.jsxs(P,{children:[e.jsxs("span",{className:"meta",children:["Docs last updated: ",e.jsx("strong",{children:f.dateTime(L)})]}),e.jsx("span",{className:"divider",children:"•"}),e.jsxs("span",{className:"meta",children:["Need more? Visit ",e.jsx(s,{to:"/help",children:"Help Center"})," or ",e.jsx(s,{to:"/contact",children:"Contact"})]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx(s,{className:"btn ghost",to:"/help",children:"Help Center"}),e.jsx(s,{className:"btn ghost",to:"/changelog",children:"Changelog"}),e.jsx(s,{className:"btn ghost",to:"/roadmap",children:"Roadmap"}),e.jsxs("button",{className:"btn primary",onClick:j,title:"Print FAQ",children:[e.jsx(q,{size:16})," Print"]})]})]}),e.jsxs(A,{children:[e.jsxs("div",{className:"search",children:[e.jsx(S,{size:18,className:"icon"}),e.jsx("input",{value:t,onChange:r=>i(r.target.value),placeholder:"Search questions (e.g. orders print, inventory transfers)","aria-label":"Search FAQs"})]}),e.jsxs("div",{className:"jumpers",children:[e.jsx(s,{className:"chip",to:"/home",children:"Home"}),e.jsx(s,{className:"chip",to:"/dashboard",children:"Dashboard"}),e.jsx(s,{className:"chip",to:"/customers",children:"Customers"}),e.jsx(s,{className:"chip",to:"/orders",children:"Orders"}),e.jsx(s,{className:"chip",to:"/invoices",children:"Invoices"}),e.jsx(s,{className:"chip",to:"/products",children:"Products"}),e.jsx(s,{className:"chip",to:"/inventory",children:"Inventory"}),e.jsx(s,{className:"chip",to:"/reports",children:"Reports"}),e.jsx(s,{className:"chip",to:"/finance",children:"Finance"}),e.jsx(s,{className:"chip",to:"/admin/users",children:"Admin"}),e.jsx(s,{className:"chip",to:"/settings",children:"Settings"}),e.jsx(s,{className:"chip",to:"/tools/theme-tokens",children:"Theme Tokens"})]})]}),e.jsxs(R,{children:[e.jsxs(M,{children:[e.jsxs("div",{className:"toc",children:[e.jsx("div",{className:"toc-title",children:"On this page"}),e.jsx("ul",{children:b.map(r=>e.jsx("li",{children:e.jsxs("a",{href:`#${r.id}`,title:r.title,children:[e.jsx("span",{className:"arrow",children:e.jsx(y,{size:16})}),e.jsx("span",{className:"label",children:r.title}),e.jsx("span",{className:"count",children:r.count})]})},r.id))})]}),e.jsxs("div",{className:"quick",children:[e.jsx("div",{className:"quick-title",children:"Quick Links"}),e.jsxs("div",{className:"list",children:[e.jsx(s,{to:"/examples",className:"row",children:"Examples"}),e.jsx(s,{to:"/examples/print",className:"row",children:"Print Demo"}),e.jsx(s,{to:"/invoices",className:"row",children:"Invoices"}),e.jsx(s,{to:"/receipts",className:"row",children:"Receipts"}),e.jsx(s,{to:"/purchase-orders",className:"row",children:"Purchase Orders"}),e.jsx(s,{to:"/shipments",className:"row",children:"Shipments"}),e.jsx(s,{to:"/admin/system-status",className:"row",children:"System Status"}),e.jsx(s,{to:"/settings/appearance",className:"row",children:"Appearance"}),e.jsx(s,{to:"/tools/import-export",className:"row",children:"Import / Export"})]})]})]}),e.jsx(O,{id:"search-print-area",ref:p,children:o.map(r=>r._any&&e.jsxs("section",{id:r.id,className:"faq-section",children:[e.jsxs(H,{children:[e.jsx("h2",{children:r.title}),e.jsx("a",{className:"anchor",href:`#${r.id}`,title:"Copy link",children:e.jsx(F,{size:16})})]}),e.jsx("div",{className:"items",children:r.faqs.filter(a=>a._show).map(a=>e.jsx(E,{item:a},a.id))})]},r.id))})]})]})};function E({item:t}){const[i,p]=m.useState(!0);return e.jsxs(W,{"data-open":i?"true":"false",children:[e.jsxs("button",{className:"q",onClick:()=>p(h=>!h),"aria-expanded":i,children:[e.jsx("span",{className:"icon",children:i?e.jsx(C,{size:18}):e.jsx(y,{size:18})}),e.jsx("span",{className:"label",children:t.q})]}),e.jsx("div",{className:"a","aria-hidden":!i,children:t.a})]})}export{Y as default};
