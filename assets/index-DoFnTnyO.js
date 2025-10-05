import{d as x,a as $,r as y,j as e,N as u,L as a}from"./index-DwhKQ_MC.js";const k="var(--bg, #0d1117)",c="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",t="var(--card, #111318)",o="var(--border, #23262d)",s="var(--accent, #5aa9ff)",b="var(--accent-soft, rgba(90,169,255,0.15))",m={Page:x.div`
        width: 100%;
        color: ${c};
        background: ${k};
        padding: 16px 20px 40px;

        a {
            color: ${c};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
            transition: color 0.2s ease, border-color 0.2s ease,
                background 0.2s ease;
        }
        a:hover {
            color: ${s};
            border-color: ${s};
        }

        h1,
        h2,
        h3,
        h4 {
            letter-spacing: 0.3px;
        }
    `,Header:x.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        margin-bottom: 18px;

        .left h1 {
            font-size: 28px;
            line-height: 1.2;
            margin-bottom: 6px;
        }

        .meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            color: ${p};
            font-size: 12px;

            .divider {
                opacity: 0.6;
            }
            .dim {
                opacity: 0.7;
            }

            .crumbs a {
                color: ${p};
            }
            .crumbs a:hover {
                color: ${s};
            }
            .crumbs .sep {
                margin: 0 6px;
                opacity: 0.5;
            }
            .current {
                color: ${c};
            }
        }

        .tags {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tag {
            display: inline-flex;
            align-items: center;
            padding: 4px 10px;
            border: 1px solid ${o};
            border-radius: 999px;
            font-size: 11px;
            background: ${t};
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
        }

        .toolbar {
            display: flex;
            gap: 8px;
        }
        .toolbar .primary,
        .toolbar .ghost {
            border: 1px solid ${o};
            background: ${t};
            color: ${c};
            border-radius: 8px;
            padding: 8px 12px;
            font-weight: 600;
            cursor: pointer;
        }
        .toolbar .primary:hover,
        .toolbar .ghost:hover {
            border-color: ${s};
            color: ${s};
            box-shadow: 0 0 0 3px ${b};
        }
        .toolbar .ghost {
            text-decoration: none;
            display: inline-flex;
            align-items: center;
        }

        .quicklinks {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            max-width: 720px;
            justify-content: flex-end;
        }
        .q {
            padding: 6px 10px;
            border: 1px dashed ${o};
            border-radius: 6px;
            background: color-mix(in oklab, ${t} 90%, transparent);
            font-size: 12px;
        }
        .q:hover {
            border-color: ${s};
            color: ${s};
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            .right {
                align-items: flex-start;
            }
            .quicklinks {
                justify-content: flex-start;
                max-width: none;
            }
        }
    `,Legend:x.div`
        margin: 6px 0 16px 0;
        border: 1px solid ${o};
        border-radius: 10px;
        background: ${t};
        padding: 12px;
        box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));

        .row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            margin: 4px 0;
        }
        .badge {
            font-size: 11px;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${o};
            background: color-mix(in oklab, ${t} 92%, transparent);
            color: ${c};
        }
        .badge.now {
            box-shadow: 0 0 0 3px ${b};
        }
        .badge.next {
            opacity: 0.9;
        }
        .badge.later {
            opacity: 0.8;
        }
        .badge.shipped {
            outline: 1px dashed ${s};
        }

        .anchor {
            padding: 4px 8px;
            border-radius: 6px;
            border: 1px solid ${o};
            background: color-mix(in oklab, ${t} 94%, transparent);
            font-size: 12px;
        }
        .anchor:hover {
            border-color: ${s};
            color: ${s};
        }
    `,Grid:x.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;

        .lane {
            border: 1px solid ${o};
            border-radius: 12px;
            background: ${t};
            overflow: hidden;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
            display: flex;
            flex-direction: column;
            min-height: 280px;
        }

        .laneHead {
            padding: 12px 14px;
            border-bottom: 1px solid ${o};
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: color-mix(in oklab, ${t} 92%, transparent);
        }
        .laneHead h2 {
            font-size: 16px;
            letter-spacing: 0.4px;
        }

        .cards {
            padding: 12px;
            display: grid;
            gap: 12px;
            align-content: start;
        }

        .card {
            border: 1px solid ${o};
            border-radius: 10px;
            background: color-mix(in oklab, ${t} 96%, transparent);
            padding: 12px;
            display: grid;
            gap: 8px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease,
                transform 0.05s ease;
        }
        .card:hover {
            border-color: ${s};
            box-shadow: 0 0 0 3px ${b};
        }
        .card:active {
            transform: translateY(1px);
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            color: ${p};
            font-size: 12px;
        }
        .status {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${o};
            font-weight: 700;
            background: color-mix(in oklab, ${t} 92%, transparent);
            color: ${c};
        }
        .status.now {
            box-shadow: 0 0 0 3px ${b};
        }
        .status.shipped {
            outline: 1px dashed ${s};
        }

        .id {
            opacity: 0.85;
            font-weight: 600;
            letter-spacing: 0.3px;
        }

        .title {
            font-size: 14px;
            line-height: 1.45;
        }

        .meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            color: ${p};
            font-size: 12px;
        }
        .meta .dot {
            opacity: 0.5;
        }
        .meta .area {
            display: inline-flex;
            align-items: center;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px dashed ${o};
            background: color-mix(in oklab, ${t} 94%, transparent);
            color: ${c};
            font-size: 11px;
            font-weight: 600;
        }
        .time {
            opacity: 0.9;
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .inlineLink {
            font-size: 12px;
            padding: 4px 8px;
            border: 1px solid ${o};
            border-radius: 6px;
            background: color-mix(in oklab, ${t} 96%, transparent);
        }
        .inlineLink:hover {
            border-color: ${s};
            color: ${s};
        }

        .foot {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 4px;
        }
        .pill {
            font-size: 11px;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${o};
            background: color-mix(in oklab, ${t} 94%, transparent);
            text-decoration: none;
        }
        .pill:hover {
            border-color: ${s};
            color: ${s};
        }

        .empty {
            text-align: center;
            color: ${p};
            border: 1px dashed ${o};
            border-radius: 10px;
            padding: 18px;
            background: color-mix(in oklab, ${t} 96%, transparent);
        }
        .empty .hint a {
            color: ${s};
        }

        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 680px) {
            grid-template-columns: 1fr;
        }
    `,FooterNav:x.div`
        margin-top: 18px;
        border: 1px solid ${o};
        border-radius: 12px;
        background: ${t};
        padding: 14px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;

        .col h4 {
            margin-bottom: 8px;
            font-size: 13px;
            color: ${p};
        }
        nav {
            display: grid;
            gap: 6px;
        }
        a {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 8px;
            border: 1px solid ${o};
            border-radius: 8px;
            background: color-mix(in oklab, ${t} 96%, transparent);
            font-size: 12px;
        }
        a:hover {
            border-color: ${s};
            color: ${s};
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `};function w(l){return new Date(l).toDateString()}function v(l){const i=new Date(l),g=String(i.getHours()).padStart(2,"0"),r=String(i.getMinutes()).padStart(2,"0"),n=String(i.getSeconds()).padStart(2,"0");return`${g}:${r}:${n}hrs`}function f(l){const i=new Date(l);return`${i.toDateString()} ${v(i)}`}const N="2025-10-05T21:23:35.172Z",T="2025-10-06T02:53:30+05:30",j=[{key:"now",label:"Now"},{key:"next",label:"Next"},{key:"later",label:"Later"},{key:"shipped",label:"Recently Shipped"}],S=["UX","Performance","Reliability","Compliance","Integrations","Healthcare Pack","E-commerce Pack","Reporting","DevEx"],R=[{id:"RM-101",title:"Global Search polish & result previews",area:"UX",lane:"now",date:"2025-10-04T12:15:20+05:30",links:[{to:"/search",label:"Open Search"},{to:"/examples/nav-search",label:"Nav Search Demo"}]},{id:"RM-102",title:"Customers detail page — activity timeline & print area",area:"UX",lane:"now",date:"2025-10-03T16:45:00+05:30",links:[{to:"/customers",label:"Customers"},{to:"/reports/customers",label:"Customers Report"}]},{id:"RM-110",title:"Invoice print layout presets",area:"Reporting",lane:"next",date:"2025-10-10T10:05:00+05:30",links:[{to:"/invoices",label:"Invoices"},{to:"/settings/print-templates",label:"Print Templates"}]},{id:"RM-120",title:"Inventory: near-expiry & low-stock ribbons",area:"Reliability",lane:"next",date:"2025-10-18T11:30:00+05:30",links:[{to:"/inventory",label:"Inventory"},{to:"/medicines/expiry-tracker",label:"Expiry Tracker"},{to:"/inventory/reorder",label:"Reorder Planner"}]},{id:"RM-130",title:"Finance views: P&L, Balance Sheet, Trial Balance (display)",area:"Reporting",lane:"later",date:"2025-11-15T09:00:00+05:30",links:[{to:"/finance/profit-loss",label:"Profit & Loss"},{to:"/finance/balance-sheet",label:"Balance Sheet"},{to:"/finance/trial-balance",label:"Trial Balance"}]},{id:"RM-140",title:"Feature Flags console for demo toggles",area:"DevEx",lane:"later",date:"2025-12-01T14:25:00+05:30",links:[{to:"/admin/feature-flags",label:"Feature Flags"},{to:"/admin/system-status",label:"System Status"}]},{id:"RM-090",title:"Theme tokens preview & live playground",area:"DevEx",lane:"shipped",date:"2025-09-26T18:28:57+05:30",links:[{to:"/examples/theme",label:"Theme Demo"},{to:"/tools/theme-tokens",label:"Theme Tokens"},{to:"/settings/appearance",label:"Appearance"}]},{id:"RM-095",title:"Collapsible, searchable sidebar navigation",area:"UX",lane:"shipped",date:"2025-09-28T13:12:00+05:30",links:[{to:"/examples/breadcrumbs",label:"Breadcrumbs"},{to:"/dashboard",label:"Dashboard"}]}],L=[{to:"/customers",label:"Customers"},{to:"/orders",label:"Orders"},{to:"/products",label:"Products"},{to:"/medicines",label:"Medicines"},{to:"/inventory",label:"Inventory"},{to:"/vendors",label:"Vendors"},{to:"/purchase-orders",label:"Purchase Orders"},{to:"/shipments",label:"Shipments"},{to:"/invoices",label:"Invoices"},{to:"/receipts",label:"Receipts"},{to:"/finance",label:"Finance"},{to:"/reports",label:"Reports"},{to:"/admin/users",label:"Admin: Users"},{to:"/admin/feature-flags",label:"Admin: Feature Flags"},{to:"/settings/appearance",label:"Settings: Appearance"},{to:"/tools/theme-tokens",label:"Tools: Theme Tokens"},{to:"/help",label:"Help Center"},{to:"/changelog",label:"Changelog"}];function F(){const{pathname:l}=$(),i=y.useMemo(()=>{const r=Object.fromEntries(j.map(n=>[n.key,[]]));for(const n of R)r[n.lane]&&r[n.lane].push(n);return r},[]),g=()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>{window.print(),document.body.classList.remove("print-section-mode")},10)};return e.jsxs(m.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(m.Header,{children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Product Roadmap"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{className:"crumbs",children:[e.jsx(u,{to:"/home",title:"Home",children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx(u,{to:"/about",title:"About",children:"About"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"current","aria-current":"page",children:"Roadmap"})]}),e.jsx("span",{className:"divider",children:"•"}),e.jsx("span",{title:"Current route",children:l}),e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"divider",children:"•"}),e.jsx("span",{className:"dim",children:"Build:"})," ",e.jsx("span",{children:f(N)})]}),e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"divider",children:"•"}),e.jsx("span",{className:"dim",children:"Last commit:"})," ",e.jsx("span",{children:f(T)})]})]}),e.jsx("div",{className:"tags",children:S.map(r=>e.jsx("span",{className:"tag",title:`Area: ${r}`,children:r},r))})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"toolbar",children:[e.jsx("button",{className:"primary",onClick:g,title:"Print this roadmap section",children:"Print"}),e.jsx("a",{className:"ghost",href:"/changelog",title:"See releases",children:"Release Notes"}),e.jsx("a",{className:"ghost",href:"/admin/feature-flags",title:"Feature flags console",children:"Feature Flags"}),e.jsx("a",{className:"ghost",href:"/settings/appearance",title:"Theme & appearance",children:"Appearance"})]}),e.jsx("div",{className:"quicklinks",children:L.map(r=>e.jsx(a,{to:r.to,className:"q",title:r.label,children:r.label},r.to))})]})]}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs(m.Legend,{children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"badge now",children:"Now"}),e.jsx("span",{className:"badge next",children:"Next"}),e.jsx("span",{className:"badge later",children:"Later"}),e.jsx("span",{className:"badge shipped",children:"Shipped"})]}),e.jsxs("div",{className:"row",children:[e.jsx("a",{href:"#lane-now",className:"anchor",children:"Jump to Now"}),e.jsx("a",{href:"#lane-next",className:"anchor",children:"Jump to Next"}),e.jsx("a",{href:"#lane-later",className:"anchor",children:"Jump to Later"}),e.jsx("a",{href:"#lane-shipped",className:"anchor",children:"Jump to Shipped"})]})]}),e.jsx(m.Grid,{children:j.map(({key:r,label:n})=>e.jsxs("section",{id:`lane-${r}`,className:"lane",children:[e.jsx("header",{className:`laneHead ${r}`,children:e.jsx("h2",{children:n})}),e.jsxs("div",{className:"cards",children:[i[r].map(d=>e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:`status ${r}`,children:n}),e.jsx("span",{className:"id",children:d.id})]}),e.jsx("h3",{className:"title",children:d.title}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"area",title:"Work area",children:d.area}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{title:"Target / Shipped on",children:w(d.date)}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{className:"time",title:"Time",children:v(d.date)})]}),e.jsx("div",{className:"links",children:d.links.map(h=>e.jsx(a,{to:h.to,className:"inlineLink",title:h.label,children:h.label},h.to))}),e.jsxs("div",{className:"foot",children:[e.jsx(a,{to:"/reports",className:"pill",title:"Reports",children:"Reports"}),e.jsx(a,{to:"/dashboard",className:"pill",title:"Dashboard",children:"Dashboard"}),e.jsx(a,{to:"/settings/print-templates",className:"pill",title:"Print Templates",children:"Print Templates"})]})]},d.id)),i[r].length===0&&e.jsxs("div",{className:"empty",children:[e.jsx("p",{children:"No items in this lane right now."}),e.jsxs("p",{className:"hint",children:["Explore ",e.jsx(a,{to:"/changelog",children:"Changelog"})," or return to ",e.jsx(a,{to:"/home",children:"Home"}),"."]})]})]})]},r))}),e.jsxs(m.FooterNav,{children:[e.jsxs("div",{className:"col",children:[e.jsx("h4",{children:"Explore"}),e.jsxs("nav",{children:[e.jsx(a,{to:"/customers",children:"Customers"}),e.jsx(a,{to:"/orders",children:"Orders"}),e.jsx(a,{to:"/products",children:"Products"}),e.jsx(a,{to:"/medicines",children:"Medicines"}),e.jsx(a,{to:"/inventory",children:"Inventory"}),e.jsx(a,{to:"/shipments",children:"Shipments"}),e.jsx(a,{to:"/invoices",children:"Invoices"}),e.jsx(a,{to:"/receipts",children:"Receipts"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("h4",{children:"Reports"}),e.jsxs("nav",{children:[e.jsx(a,{to:"/reports/sales",children:"Sales"}),e.jsx(a,{to:"/reports/inventory",children:"Inventory"}),e.jsx(a,{to:"/reports/customers",children:"Customers"}),e.jsx(a,{to:"/reports/finance",children:"Finance"}),e.jsx(a,{to:"/reports/gst",children:"GST"})]})]}),e.jsxs("div",{className:"col",children:[e.jsx("h4",{children:"Admin & Settings"}),e.jsxs("nav",{children:[e.jsx(a,{to:"/admin/users",children:"Users"}),e.jsx(a,{to:"/admin/roles",children:"Roles"}),e.jsx(a,{to:"/admin/feature-flags",children:"Feature Flags"}),e.jsx(a,{to:"/settings/appearance",children:"Appearance"}),e.jsx(a,{to:"/tools/theme-tokens",children:"Theme Tokens"}),e.jsx(a,{to:"/help",children:"Help Center"})]})]})]})]})]})}export{F as default};
