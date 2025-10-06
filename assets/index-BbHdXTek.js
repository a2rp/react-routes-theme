import{d as m,u as N,r as g,j as e,Y as f,b as $,e as S,N as s,aX as w,aY as C,aZ as T}from"./index-Dvs-eF3B.js";import{a as P}from"./index-DIs3JGCi.js";const a="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",o="var(--card, #111318)",t="var(--border, #23262d)",i="var(--accent, #5aa9ff)",b="var(--accent-soft, rgba(90,169,255,0.15))",v="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",r={Page:m.div`
        width: 100%;
        color: ${a};
    `,Hero:m.section`
        padding: 28px 24px 18px 24px;
        border-bottom: 1px solid ${t};
        background: radial-gradient(
                1200px 300px at 10% -20%,
                color-mix(in oklab, ${i} 12%, transparent) 0%,
                transparent 60%
            ),
            radial-gradient(
                1000px 280px at 90% -30%,
                color-mix(in oklab, ${i} 10%, transparent) 0%,
                transparent 65%
            );

        .copy {
            display: grid;
            gap: 8px;
            margin-bottom: 14px;

            h1 {
                font-size: clamp(24px, 3.5vw, 36px);
                letter-spacing: 0.4px;
            }
            p {
                color: ${p};
            }
            .meta {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                color: ${p};
                span {
                    display: inline-flex;
                    gap: 6px;
                    align-items: center;
                }
                strong {
                    color: ${a};
                    font-weight: 600;
                }
            }
        }

        .search {
            display: grid;
            grid-template-columns: 24px 1fr auto;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            background: ${o};
            border: 1px solid ${t};
            border-radius: 10px;
            box-shadow: ${v};
            max-width: 100%;

            input {
                background: transparent;
                border: none;
                color: ${a};
                outline: none;
                height: 34px;
            }
            button {
                border: 1px solid ${t};
                background: color-mix(in oklab, ${i} 8%, ${o});
                padding: 8px 14px;
                border-radius: 8px;
                cursor: pointer;
                transition: 0.25s ease;
            }
            button:hover {
                border-color: ${i};
                color: ${i};
                box-shadow: 0 0 0 3px ${b};
            }
            svg {
                opacity: 0.9;
            }
        }

        .toolbar {
            display: flex;
            gap: 10px;
            margin-top: 12px;

            button,
            a {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${t};
                background: ${o};
                color: ${a};
                padding: 8px 12px;
                border-radius: 8px;
                text-decoration: none;
                transition: 0.25s ease;
            }
            button:hover,
            a:hover {
                color: ${i};
                border-color: ${i};
                box-shadow: 0 0 0 3px ${b};
            }
            .quiet {
                background: transparent;
            }
        }
    `,BlockGrid:m.div`
        padding: 18px 24px 28px 24px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 16px;

        @media (max-width: 1400px) {
            grid-template-columns: repeat(8, 1fr);
        }
        @media (max-width: 900px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,Block:m.article`
        grid-column: span 6;
        display: flex;
        flex-direction: column;
        background: ${o};
        border: 1px solid ${t};
        border-radius: 12px;
        box-shadow: ${v};
        padding: 16px 16px 12px 16px;
        min-height: 220px;

        &.accent {
            outline: 1px solid color-mix(in oklab, ${i} 40%, transparent);
            background: linear-gradient(
                180deg,
                color-mix(in oklab, ${i} 9%, ${o}) 0%,
                ${o} 70%
            );
        }

        &.muted {
            background: color-mix(in oklab, ${o} 96%, transparent);
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;

            h2 {
                font-size: 18px;
                letter-spacing: 0.2px;
            }
            .tag {
                color: ${i};
                border: 1px solid ${t};
                padding: 4px 8px;
                border-radius: 999px;
                font-size: 12px;
                user-select: none;
                background: color-mix(in oklab, ${i} 8%, transparent);
            }
        }

        p {
            color: ${p};
        }

        .cols {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 12px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .links {
            list-style: none;
            padding: 0;
            margin: 6px 0 0 0;
        }
        .links li a {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 6px;
            margin: 0 -6px;
            border-radius: 8px;
            color: ${a};
            text-decoration: none;
            border: 1px solid transparent;
            transition: 0.2s ease;
        }
        .links li a:hover {
            color: ${i};
            border-color: ${i};
            background: color-mix(in oklab, ${i} 10%, transparent);
            box-shadow: 0 0 0 3px ${b};
        }

        .foot {
            margin-top: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            color: ${p};
            border-top: 1px dashed ${t};
            padding-top: 10px;

            .note {
                font-size: 12px;
            }
            .quiet {
                color: ${p};
            }
            .quiet a {
                color: ${a};
            }
            .quiet a:hover {
                color: ${i};
            }
        }

        .tips {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }
        .tip {
            border: 1px dashed ${t};
            border-radius: 10px;
            padding: 10px;
            background: color-mix(in oklab, ${o} 94%, transparent);
            color: ${a};
        }
        .tip code {
            border: 1px solid ${t};
            border-radius: 6px;
            padding: 2px 6px;
            background: color-mix(in oklab, ${i} 8%, transparent);
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
    `},B="2025-10-06T06:46:59.352Z",A="2025-10-06T12:16:55+05:30",M=l=>{const n=new Date(l),x=n.toLocaleString("en-US",{weekday:"short"}),h=n.toLocaleString("en-US",{month:"short"}),d=String(n.getDate()).padStart(2,"0"),u=n.getFullYear();return`${x} ${h} ${d} ${u}`},R=l=>{const n=new Date(l),x=String(n.getHours()).padStart(2,"0"),h=String(n.getMinutes()).padStart(2,"0"),d=String(n.getSeconds()).padStart(2,"0");return`${x}:${h}:${d}hrs`},k=l=>`${M(l)} ${R(l)}`,O=()=>{const l=N(),[n,x]=g.useState(""),h=g.useRef(null),d=g.useMemo(()=>({buildAt:k(B),commitAt:k(A)}),[]),u=c=>{c.preventDefault();const j=n.trim();l(j?`/search?q=${encodeURIComponent(j)}`:"/search")},y=()=>{const c=document.body;if(!c)return;c.classList.add("print-section-mode");const j=setTimeout(()=>{window.print(),clearTimeout(j),setTimeout(()=>c.classList.remove("print-section-mode"),300)},50)};return e.jsxs(r.Page,{children:[e.jsxs(r.Hero,{children:[e.jsxs("div",{className:"copy",children:[e.jsx("h1",{children:"Help Center"}),e.jsx("p",{children:"Everything you need to navigate this theme: quick links, module docs, and deep routes for a comprehensive demo walkthrough."}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{title:"Build timestamp",children:[e.jsx(f,{size:16})," Build: ",e.jsx("strong",{children:d.buildAt})]}),e.jsxs("span",{title:"Last commit timestamp",children:[e.jsx(f,{size:16})," Last Commit: ",e.jsx("strong",{children:d.commitAt})]})]})]}),e.jsxs("form",{className:"search",onSubmit:u,role:"search","aria-label":"Help search",children:[e.jsx($,{size:20,"aria-hidden":"true"}),e.jsx("input",{type:"text",placeholder:"Search the documentation (try: invoices, inventory, roles, GST...)",value:n,onChange:c=>x(c.target.value),"aria-label":"Search help"}),e.jsx("button",{type:"submit",title:"Go to Global Search",children:"Search"})]}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("button",{type:"button",onClick:y,title:"Print this Help",children:[e.jsx(S,{size:18})," Print"]}),e.jsxs(s,{to:"/contact",className:"quiet",title:"Contact",children:[e.jsx(w,{size:18})," Contact"]}),e.jsxs("a",{href:"https://github.com/",className:"quiet",target:"_blank",rel:"noreferrer",title:"External docs (sample)",children:[e.jsx(P,{size:18})," External Docs"]})]})]}),e.jsx("section",{id:"search-print-area",ref:h,children:e.jsxs(r.BlockGrid,{children:[e.jsxs(r.Block,{className:"accent",children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Getting Started"}),e.jsx("span",{className:"tag",children:"Start here"})]}),e.jsx("p",{children:"New to this theme? Explore the core pages and example flows:"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/home",children:"Home"})}),e.jsx("li",{children:e.jsx(s,{to:"/dashboard",children:"Dashboard"})}),e.jsx("li",{children:e.jsx(s,{to:"/about",children:"About"})}),e.jsx("li",{children:e.jsx(s,{to:"/examples",children:"Examples Overview"})}),e.jsx("li",{children:e.jsx(s,{to:"/examples/theme",children:"Theme Tokens"})}),e.jsx("li",{children:e.jsx(s,{to:"/examples/print",children:"Print Demo"})})]}),e.jsx("footer",{className:"foot",children:e.jsx("div",{className:"note",children:"Tip: Use the sidebar search (Ctrl + K) to jump to any section."})})]}),e.jsxs(r.Block,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Sales & Billing"}),e.jsx("span",{className:"tag",children:"Commerce"})]}),e.jsxs("div",{className:"cols",children:[e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/sales",children:"Sales Overview"})}),e.jsx("li",{children:e.jsx(s,{to:"/sales/quotes",children:"Quotations"})}),e.jsx("li",{children:e.jsx(s,{to:"/orders",children:"Orders"})}),e.jsx("li",{children:e.jsx(s,{to:"/sales/returns",children:"Sales Returns"})}),e.jsx("li",{children:e.jsx(s,{to:"/sales/payments",children:"Payments"})})]}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(s,{to:"/invoices/new",children:"New Invoice (demo)"})}),e.jsx("li",{children:e.jsx(s,{to:"/invoices/credit-notes",children:"Credit Notes"})}),e.jsx("li",{children:e.jsx(s,{to:"/receipts",children:"Receipts"})}),e.jsx("li",{children:e.jsx(s,{to:"/reports/sales",children:"Sales Report"})})]})]})]}),e.jsxs(r.Block,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Customers & CRM"}),e.jsx("span",{className:"tag",children:"CRM"})]}),e.jsxs("div",{className:"cols",children:[e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/customers",children:"All Customers"})}),e.jsx("li",{children:e.jsx(s,{to:"/customers/new",title:"Demo only",children:"Add Customer"})}),e.jsx("li",{children:e.jsx(s,{to:"/reports/customers",children:"Customer Report"})})]}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/profile",children:"My Profile"})}),e.jsx("li",{children:e.jsx(s,{to:"/notifications",children:"Notifications"})}),e.jsx("li",{children:e.jsx(s,{to:"/help",children:"Help Center"})})]})]})]}),e.jsxs(r.Block,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Products & Inventory"}),e.jsx("span",{className:"tag",children:"Catalog"})]}),e.jsxs("div",{className:"cols",children:[e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/products",children:"All Products"})}),e.jsx("li",{children:e.jsx(s,{to:"/products/new",title:"Demo only",children:"Add Product"})}),e.jsx("li",{children:e.jsx(s,{to:"/categories",children:"Categories"})}),e.jsx("li",{children:e.jsx(s,{to:"/products/brands",children:"Brands"})}),e.jsx("li",{children:e.jsx(s,{to:"/products/attributes",children:"Attributes"})}),e.jsx("li",{children:e.jsx(s,{to:"/products/price-lists",children:"Price Lists"})})]}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/inventory",children:"Inventory Overview"})}),e.jsx("li",{children:e.jsx(s,{to:"/inventory/lots",children:"Lots"})}),e.jsx("li",{children:e.jsx(s,{to:"/inventory/batches",children:"Batches"})}),e.jsx("li",{children:e.jsx(s,{to:"/inventory/adjustments",children:"Adjustments"})}),e.jsx("li",{children:e.jsx(s,{to:"/inventory/transfers",children:"Transfers"})}),e.jsx("li",{children:e.jsx(s,{to:"/inventory/warehouses",children:"Warehouses"})}),e.jsx("li",{children:e.jsx(s,{to:"/inventory/reorder",children:"Reorder Planner"})})]})]})]}),e.jsxs(r.Block,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Medicines Catalog"}),e.jsx("span",{className:"tag",children:"Healthcare"})]}),e.jsxs("div",{className:"cols",children:[e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/medicines",children:"Catalog"})}),e.jsx("li",{children:e.jsx(s,{to:"/medicines/manufacturers",children:"Manufacturers"})}),e.jsx("li",{children:e.jsx(s,{to:"/medicines/molecules",children:"Molecules"})}),e.jsx("li",{children:e.jsx(s,{to:"/medicines/forms",children:"Forms"})}),e.jsx("li",{children:e.jsx(s,{to:"/medicines/strengths",children:"Strengths"})})]}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/medicines/expiry-tracker",children:"Expiry Tracker"})}),e.jsx("li",{children:e.jsx(s,{to:"/medicines/hsn-gst",children:"HSN / GST"})}),e.jsx("li",{children:e.jsx(s,{to:"/reports/inventory",children:"Inventory Report"})}),e.jsx("li",{children:e.jsx(s,{to:"/reports/gst",children:"GST Report"})})]})]})]}),e.jsxs(r.Block,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Purchasing & Vendors"}),e.jsx("span",{className:"tag",children:"Procurement"})]}),e.jsxs("div",{className:"cols",children:[e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/vendors",children:"Vendors"})}),e.jsx("li",{children:e.jsx(s,{to:"/vendors/new",title:"Demo only",children:"Add Vendor"})}),e.jsx("li",{children:e.jsx(s,{to:"/purchase-orders",children:"Purchase Orders"})}),e.jsx("li",{children:e.jsx(s,{to:"/purchase-orders/new",title:"Demo only",children:"New PO"})})]}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/reports/procurement",children:"Procurement Report"})}),e.jsx("li",{children:e.jsx(s,{to:"/shipments",children:"Shipments"})}),e.jsx("li",{children:e.jsx(s,{to:"/shipments/carriers",children:"Carriers"})})]})]})]}),e.jsxs(r.Block,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Finance & Accounting"}),e.jsx("span",{className:"tag",children:"Finance"})]}),e.jsxs("div",{className:"cols",children:[e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/finance",children:"Overview"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance/chart-of-accounts",children:"Chart of Accounts"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance/ledgers",children:"Ledgers"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance/journals",children:"Journals"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance/taxes",children:"Taxes"})})]}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/finance/gst-returns",children:"GST Returns"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance/balance-sheet",children:"Balance Sheet"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance/profit-loss",children:"Profit & Loss"})}),e.jsx("li",{children:e.jsx(s,{to:"/finance/trial-balance",children:"Trial Balance"})})]})]})]}),e.jsxs(r.Block,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Admin & Settings"}),e.jsx("span",{className:"tag",children:"Admin"})]}),e.jsxs("div",{className:"cols",children:[e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/admin/users",children:"Users"})}),e.jsx("li",{children:e.jsx(s,{to:"/admin/roles",children:"Roles"})}),e.jsx("li",{children:e.jsx(s,{to:"/admin/permissions",children:"Permissions"})}),e.jsx("li",{children:e.jsx(s,{to:"/admin/audit-log",children:"Audit Log"})}),e.jsx("li",{children:e.jsx(s,{to:"/admin/activity",children:"Activity"})})]}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/admin/system-status",children:"System Status"})}),e.jsx("li",{children:e.jsx(s,{to:"/admin/feature-flags",children:"Feature Flags"})}),e.jsx("li",{children:e.jsx(s,{to:"/admin/integrations",children:"Integrations"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings",children:"Settings Home"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings/appearance",children:"Appearance"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings/notifications",children:"Notifications"})}),e.jsx("li",{children:e.jsx(s,{to:"/settings/print-templates",children:"Print Templates"})})]})]})]}),e.jsxs(r.Block,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Tools & Developer"}),e.jsx("span",{className:"tag",children:"Tools"})]}),e.jsxs("div",{className:"cols",children:[e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/tools/import-export",children:"Import / Export"})}),e.jsx("li",{children:e.jsx(s,{to:"/tools/theme-tokens",children:"Theme Tokens"})}),e.jsx("li",{children:e.jsx(s,{to:"/tools/playground",children:"Playground"})}),e.jsx("li",{children:e.jsx(s,{to:"/examples/confirm-modal",children:"Confirm Modal"})}),e.jsx("li",{children:e.jsx(s,{to:"/examples/breadcrumbs",children:"Breadcrumbs"})}),e.jsx("li",{children:e.jsx(s,{to:"/examples/nav-search",children:"Sidebar Search"})})]}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(s,{to:"/changelog",children:"Changelog"})}),e.jsx("li",{children:e.jsx(s,{to:"/roadmap",children:"Roadmap"})}),e.jsx("li",{children:e.jsx(s,{to:"/faq",children:"FAQ"})}),e.jsx("li",{children:e.jsx(s,{to:"/contact",children:"Contact"})}),e.jsx("li",{children:e.jsx(s,{to:"/feedback",children:"Feedback"})})]})]})]}),e.jsxs(r.Block,{className:"muted",children:[e.jsxs("header",{children:[e.jsxs("h2",{children:[e.jsx(C,{size:18})," Shortcuts & Tips"]}),e.jsx("span",{className:"tag",children:"Productivity"})]}),e.jsxs("div",{className:"tips",children:[e.jsxs("div",{className:"tip",children:[e.jsx("code",{children:"Ctrl + K"})," — Open sidebar search"]}),e.jsxs("div",{className:"tip",children:[e.jsx("code",{children:"Tab"}),"/",e.jsx("code",{children:"Shift + Tab"})," — Fast navigation"]}),e.jsxs("div",{className:"tip",children:[e.jsx("code",{children:"?"})," — Help focus (when supported)"]}),e.jsxs("div",{className:"tip",children:[e.jsx("code",{children:"Alt + ←/→"})," — Browser history"]})]}),e.jsx("footer",{className:"foot",children:e.jsxs("span",{className:"quiet",children:[e.jsx(T,{size:16})," Found an issue in docs? Use ",e.jsx(s,{to:"/feedback",children:"Feedback"}),"."]})})]})]})}),e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `})]})};export{O as default};
