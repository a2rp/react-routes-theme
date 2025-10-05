import{d as P,u as D,r as k,j as s,L as j,N as i}from"./index-P_7RwasD.js";import{F as R,a as $,b as C,c as b,d as f,e as S,f as v,g as N,h as O,i as I,j as L,k as g,l as T,m as M,n as B}from"./index-B9VUTsVq.js";const o="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",x="var(--card, #111318)",t="var(--border, #23262d)",r="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",V={Page:P.main`
        display: grid;
        gap: 16px;
        color: ${o};

        /* Hero */
        .hero {
            display: grid;
            grid-template-columns: 1.6fr 1fr;
            gap: 16px;
            padding: 18px 20px;
            align-items: center;
        }
        @media (max-width: 980px) {
            .hero {
                grid-template-columns: 1fr;
            }
        }

        .heroText h1 {
            font-size: 28px;
            letter-spacing: 0.6px;
            margin-bottom: 8px;
        }
        .heroText .lead {
            color: ${c};
            max-width: 64ch;
            margin-bottom: 10px;
        }
        .heroText .meta {
            display: flex;
            gap: 10px;
            align-items: center;
            color: ${c};
        }
        .heroText .dot {
            opacity: 0.7;
        }

        .heroActions {
            display: grid;
            gap: 10px;
            justify-items: start;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 10px 14px;
            border: 1px solid ${t};
            background: ${x};
            color: ${o};
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${y};
        }
        .btnGhost {
            opacity: 0.92;
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .ghostRow {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        /* Actions (demo disabled CTAs) */
        .actions {
            display: grid;
            grid-template-columns: repeat(4, minmax(180px, 1fr));
            gap: 10px;
        }
        @media (max-width: 980px) {
            .actions {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        .actions .cta {
            position: relative;
            border-radius: 10px;
            border: 1px solid ${t};
            background: ${x};
            color: ${o};
            height: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .actions .cta[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .actions .cta[disabled]:hover {
            border-color: ${t};
            color: ${o};
        }
        .actions .cta[disabled][data-tooltip]:hover::after,
        .actions .cta[disabled][data-tooltip]:hover::before {
            opacity: 1;
            transform: translateY(-4px);
        }
        .actions .cta[disabled]::before {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translate(-50%, 0);
            background: ${x};
            border: 1px solid ${t};
            color: ${o};
            padding: 6px 8px;
            border-radius: 8px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s, transform 0.2s;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }
        .actions .cta[disabled]::after {
            content: "";
            position: absolute;
            bottom: calc(100% - 6px);
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            background: ${x};
            border-left: 1px solid ${t};
            border-top: 1px solid ${t};
            rotate: 45deg;
            opacity: 0;
            transition: opacity 0.2s, transform 0.2s;
        }

        /* KPIs */
        .kpis {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1280px) {
            .kpis {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 640px) {
            .kpis {
                grid-template-columns: 1fr;
            }
        }
        .kpi {
            display: grid;
            grid-template-columns: 56px 1fr;
            gap: 10px;
            padding: 14px;
        }
        .kpiIcon {
            width: 56px;
            height: 56px;
            border: 1px solid ${t};
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: color-mix(in oklab, ${r} 10%, transparent);
            font-size: 22px;
        }
        .kpiLabel {
            color: ${c};
            font-size: 12px;
        }
        .kpiValue {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }
        .kpiFoot {
            color: ${c};
            font-size: 12px;
        }

        /* Grid (lower section) */
        .grid {
            display: grid;
            gap: 16px;
            grid-template-columns: 1.2fr 1fr 1fr 1fr;
        }
        @media (max-width: 1480px) {
            .grid {
                grid-template-columns: 1.2fr 1fr 1fr;
            }
        }
        @media (max-width: 1100px) {
            .grid {
                grid-template-columns: 1fr 1fr;
            }
        }
        @media (max-width: 720px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .shortcuts h3,
        .recent h3,
        .news h3,
        .sys h3,
        .printTarget h3 {
            margin-bottom: 10px;
        }

        .shortcuts ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .shortcuts a {
            border: 1px solid ${t};
            background: ${x};
            color: ${o};
            padding: 10px 12px;
            border-radius: 10px;
            display: flex;
            gap: 8px;
            align-items: center;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .shortcuts a:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${y};
        }

        /* Recently Viewed */
        .recent .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .recent .list a {
            display: inline-flex;
            gap: 6px;
            align-items: center;
        }
        .recent .list .x {
            opacity: 0.7;
        }
        .muted {
            color: ${c};
            font-size: 12px;
        }

        /* Announcements / timeline */
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 8px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${r};
            border: 1px solid ${t};
        }

        /* System info */
        .sys .rows {
            display: grid;
            gap: 8px;
        }
        .sys .k {
            color: ${c};
            font-size: 12px;
        }
        .sys .v {
            font-weight: 700;
        }

        /* Print target */
        .printTarget .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 8px 12px;
            margin-bottom: 12px;
        }
        .printTarget .k {
            color: ${c};
        }
        .printTarget .v {
            color: ${o};
        }
        .printBtns {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        /* Footer */
        .foot {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border: 1px solid ${t};
            border-radius: 10px;
            background: ${x};
        }
        .foot .left {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${c};
        }
        .foot strong {
            color: ${o};
            margin-left: 4px;
        }
        .foot .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .pill {
            border: 1px solid ${t};
            background: ${x};
            color: ${o};
            border-radius: 999px;
            padding: 6px 10px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .pill:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${y};
        }
    `},a=(n,l)=>{const e=n instanceof Date?n:new Date(n),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=u=>String(u).padStart(2,"0"),h=`${m[e.getDay()]} ${d[e.getMonth()]} ${p(e.getDate())} ${e.getFullYear()}`;return l?`${h} ${p(e.getHours())}:${p(e.getMinutes())}:${p(e.getSeconds())}hrs`:h},w=n=>{const l=n instanceof Date?n:new Date(n),e=m=>String(m).padStart(2,"0");return`${e(l.getHours())}:${e(l.getMinutes())}:${e(l.getSeconds())}hrs`},z=()=>{const n=D(),l=k.useRef(null),e="2025-10-05T19:47:22.329Z",m="2025-10-06T01:17:15+05:30",d=k.useMemo(()=>new Date,[]),p=a(d),h=a(d,!0),u=()=>{l.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},F=()=>n("/search");return s.jsxs(V.Page,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"hero card",children:[s.jsxs("div",{className:"heroText",children:[s.jsx("h1",{children:"React Routes Theme"}),s.jsx("p",{className:"lead",children:"Polished, display-only ERP frontend theme. No writes, no surprises — just premium UX, deep links, and gorgeous defaults."}),s.jsxs("div",{className:"meta",children:[s.jsx("span",{title:"Current date",children:p}),s.jsx("span",{className:"dot",children:"•"}),s.jsx("span",{title:"Current time",children:w(d)})]})]}),s.jsxs("div",{className:"heroActions",children:[s.jsxs("button",{className:"btnPrimary",onClick:F,"aria-label":"Open global search",children:[s.jsx(R,{style:{marginRight:8}})," Open Search"]}),s.jsxs("div",{className:"ghostRow",children:[s.jsxs(j,{className:"btnGhost",to:"/examples/print",title:"Print demo",children:[s.jsx($,{style:{marginRight:8}})," Print Demo"]}),s.jsxs("a",{className:"btnGhost",href:"data:application/json;charset=utf-8,{}",download:"export.json",title:"Export snapshot (static)",children:[s.jsx(C,{style:{marginRight:8}})," Export JSON"]})]})]})]}),s.jsxs("section",{className:"actions",children:[s.jsxs("button",{className:"cta",disabled:!0,"data-tooltip":"Demo mode: action disabled",children:[s.jsx(b,{})," New Order"]}),s.jsxs("button",{className:"cta",disabled:!0,"data-tooltip":"Demo mode: action disabled",children:[s.jsx(f,{})," New Invoice"]}),s.jsxs("button",{className:"cta",disabled:!0,"data-tooltip":"Demo mode: action disabled",children:[s.jsx(S,{})," New Customer"]}),s.jsxs("button",{className:"cta",disabled:!0,"data-tooltip":"Demo mode: action disabled",children:[s.jsx(v,{})," New Product"]})]}),s.jsxs("section",{className:"kpis",children:[s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"kpiIcon",children:s.jsx(b,{})}),s.jsxs("div",{className:"kpiBody",children:[s.jsx("div",{className:"kpiLabel",children:"Orders Today"}),s.jsx("div",{className:"kpiValue",children:"128"}),s.jsxs("div",{className:"kpiFoot",children:["as of ",h]})]})]}),s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"kpiIcon",children:s.jsx(f,{})}),s.jsxs("div",{className:"kpiBody",children:[s.jsx("div",{className:"kpiLabel",children:"Invoices (Open)"}),s.jsx("div",{className:"kpiValue",children:"42"}),s.jsxs("div",{className:"kpiFoot",children:["updated ",h]})]})]}),s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"kpiIcon",children:s.jsx(N,{})}),s.jsxs("div",{className:"kpiBody",children:[s.jsx("div",{className:"kpiLabel",children:"Pending Shipments"}),s.jsx("div",{className:"kpiValue",children:"17"}),s.jsxs("div",{className:"kpiFoot",children:["cutoff ",w(d)]})]})]}),s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"kpiIcon",children:s.jsx(v,{})}),s.jsxs("div",{className:"kpiBody",children:[s.jsx("div",{className:"kpiLabel",children:"Low-Stock SKUs"}),s.jsx("div",{className:"kpiValue",children:"9"}),s.jsx("div",{className:"kpiFoot",children:s.jsx(i,{to:"/inventory/reorder",children:"View Reorder"})})]})]})]}),s.jsxs("section",{className:"grid",children:[s.jsxs("div",{className:"card shortcuts",children:[s.jsx("h3",{children:"Shortcuts"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsxs(i,{to:"/customers",children:[s.jsx(S,{})," Customers"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/orders",children:[s.jsx(b,{})," Orders"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/products",children:[s.jsx(v,{})," Products"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/inventory",children:[s.jsx(O,{})," Inventory"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/vendors",children:[s.jsx(N,{})," Vendors"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/invoices",children:[s.jsx(f,{})," Invoices"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/shipments",children:[s.jsx(N,{})," Shipments"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/reports",children:[s.jsx(I,{})," Reports"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/settings",children:[s.jsx(L,{})," Settings"]})})]})]}),s.jsxs("div",{className:"card recent",children:[s.jsx("h3",{children:"Recently Viewed"}),s.jsxs("ul",{className:"list",children:[s.jsxs("li",{children:[s.jsxs(i,{to:"/customers/CUST-1001",children:["Customer CUST-1001 ",s.jsx(g,{className:"x"})]}),s.jsx("span",{className:"muted",children:a("2025-10-04T12:15:23+05:30",!0)})]}),s.jsxs("li",{children:[s.jsxs(i,{to:"/orders/ORD-3001",children:["Order ORD-3001 ",s.jsx(g,{className:"x"})]}),s.jsx("span",{className:"muted",children:a("2025-10-02T18:05:10+05:30",!0)})]}),s.jsxs("li",{children:[s.jsxs(i,{to:"/invoices/INV-2031",children:["Invoice INV-2031 ",s.jsx(g,{className:"x"})]}),s.jsx("span",{className:"muted",children:a("2025-10-01T09:40:00+05:30",!0)})]}),s.jsxs("li",{children:[s.jsxs(i,{to:"/medicines/MED-AMOX-500",children:["MED-AMOX-500 ",s.jsx(g,{className:"x"})]}),s.jsx("span",{className:"muted",children:a("2025-09-30T14:32:55+05:30",!0)})]})]})]}),s.jsxs("div",{className:"card news",children:[s.jsx("h3",{children:"Announcements"}),s.jsxs("ul",{className:"timeline",children:[s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Theme refresh · Cards & Focus states"}),s.jsx("div",{className:"muted",children:a("2025-10-04T10:00:00+05:30",!0)}),s.jsx("p",{children:"Sharper spacing, improved shadows, and accessible focus rings across components."})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Navigation · Collapsible sections + search memory"}),s.jsx("div",{className:"muted",children:a("2025-10-03T11:35:00+05:30",!0)}),s.jsx("p",{children:"Sidebar sections collapse, remember state, and auto-open on route match."})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Printing · Section-only print"}),s.jsx("div",{className:"muted",children:a("2025-10-01T16:05:00+05:30",!0)}),s.jsx("p",{children:"Pinpoint print support for summaries without layout hacks."})]})]})]})]}),s.jsxs("div",{className:"card sys",children:[s.jsx("h3",{children:"System"}),s.jsxs("div",{className:"rows",children:[s.jsxs("div",{children:[s.jsx("div",{className:"k",children:"Build"}),s.jsx("div",{className:"v",children:a(e,!0)})]}),s.jsxs("div",{children:[s.jsx("div",{className:"k",children:"Last Commit"}),s.jsx("div",{className:"v",children:a(m,!0)})]}),s.jsxs("div",{children:[s.jsx("div",{className:"k",children:"Demo Mode"}),s.jsx("div",{className:"v",children:"Enabled"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"k",children:"Base Path"}),s.jsx("div",{className:"v",children:"/react-routes-theme"})]})]})]}),s.jsxs("div",{className:"card printTarget",id:"search-print-area",ref:l,children:[s.jsx("h3",{children:"Printable Overview"}),s.jsxs("div",{className:"kv",children:[s.jsx("span",{className:"k",children:"Date"}),s.jsx("span",{className:"v",children:p}),s.jsx("span",{className:"k",children:"Time"}),s.jsx("span",{className:"v",children:w(d)}),s.jsx("span",{className:"k",children:"Build"}),s.jsx("span",{className:"v",children:a(e,!0)}),s.jsx("span",{className:"k",children:"Commit"}),s.jsx("span",{className:"v",children:a(m,!0)})]}),s.jsxs("div",{className:"printBtns",children:[s.jsxs("button",{className:"btnGhost",onClick:u,children:[s.jsx($,{style:{marginRight:8}})," Print Overview"]}),s.jsxs(j,{className:"btnGhost",to:"/examples/print",children:[s.jsx(T,{style:{marginRight:8}})," Print Docs"]})]})]})]}),s.jsxs("footer",{className:"foot",children:[s.jsxs("div",{className:"left",children:[s.jsx(M,{})," ",s.jsx("span",{children:"Last refreshed"}),s.jsx("strong",{children:a(d,!0)})]}),s.jsxs("div",{className:"right",children:[s.jsxs(j,{to:"/changelog",className:"pill",children:[s.jsx(B,{})," Changelog"]}),s.jsxs(j,{to:"/roadmap",className:"pill",children:[s.jsx(g,{})," Roadmap"]}),s.jsxs(j,{to:"/help",className:"pill",children:[s.jsx(T,{})," Help"]})]})]})]})};export{z as default};
