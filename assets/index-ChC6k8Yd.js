import{d as O,u as C,r as b,j as s,L as j,N as i}from"./index-LshBDmDj.js";import{F as L,a as F,b as A,c as f,d as v,e as D,f as N,g as y,h as B,i as M,j as V,k as g,l as P,m as E,n as G}from"./index-CyH35cVY.js";const p="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",h="var(--card, #111318)",o="var(--border, #23262d)",c="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",z={Page:O.main`
        display: grid;
        gap: 16px;
        color: ${p};

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
            color: ${x};
            max-width: 64ch;
            margin-top: 15px;
            margin-bottom: 10px;
        }
        .heroText .meta {
            display: flex;
            gap: 10px;
            align-items: center;
            color: ${x};
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
            border: 1px solid ${o};
            background: ${h};
            color: ${p};
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${c};
            color: ${c};
            box-shadow: 0 0 0 3px ${w};
        }
        .btnGhost {
            opacity: 0.92;
        }
        .btnGhost:hover {
            border-color: ${c};
            color: ${c};
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
            border: 1px solid ${o};
            background: ${h};
            color: ${p};
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
            border-color: ${o};
            color: ${p};
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
            background: ${h};
            border: 1px solid ${o};
            color: ${p};
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
            background: ${h};
            border-left: 1px solid ${o};
            border-top: 1px solid ${o};
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
            border: 1px solid ${o};
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: color-mix(in oklab, ${c} 10%, transparent);
            font-size: 22px;
        }
        .kpiLabel {
            color: ${x};
            font-size: 12px;
        }
        .kpiValue {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }
        .kpiFoot {
            color: ${x};
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
            border: 1px solid ${o};
            background: ${h};
            color: ${p};
            padding: 10px 12px;
            border-radius: 10px;
            display: flex;
            gap: 8px;
            align-items: center;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .shortcuts a:hover {
            border-color: ${c};
            color: ${c};
            box-shadow: 0 0 0 3px ${w};
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
            color: ${x};
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
            background: ${c};
            border: 1px solid ${o};
        }

        /* System info */
        .sys .rows {
            display: grid;
            gap: 8px;
        }
        .sys .k {
            color: ${x};
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
            color: ${x};
        }
        .printTarget .v {
            color: ${p};
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
            border: 1px solid ${o};
            border-radius: 10px;
            background: ${h};
        }
        .foot .left {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${x};
        }
        .foot strong {
            color: ${p};
            margin-left: 4px;
        }
        .foot .right {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .pill {
            border: 1px solid ${o};
            background: ${h};
            color: ${p};
            border-radius: 999px;
            padding: 6px 10px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .pill:hover {
            border-color: ${c};
            color: ${c};
            box-shadow: 0 0 0 3px ${w};
        }
    `},t=(r,d)=>{const e=r instanceof Date?r:new Date(r),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=u=>String(u).padStart(2,"0"),n=`${a[e.getDay()]} ${m[e.getMonth()]} ${l(e.getDate())} ${e.getFullYear()}`;return d?`${n} ${l(e.getHours())}:${l(e.getMinutes())}:${l(e.getSeconds())}hrs`:n},k=r=>{const d=r instanceof Date?r:new Date(r),e=a=>String(a).padStart(2,"0");return`${e(d.getHours())}:${e(d.getMinutes())}:${e(d.getSeconds())}hrs`};function U(r){try{const d=new Date(r),e=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(d),a=m=>{var l;return((l=e.find(n=>n.type===m))==null?void 0:l.value)||""};return`${a("month")} ${a("day")}, ${a("year")} ${a("hour")}:${a("minute")}:${a("second")} hrs`}catch{return"-"}}const X=()=>{const r=C(),d=b.useRef(null),e="2025-10-06T06:42:50.910Z",a="2025-10-06T12:12:45+05:30",m="2025-10-06T12:12:45+05:30",l=U(m),[n,u]=b.useState(new Date);b.useEffect(()=>{const S=setInterval(()=>u(new Date),1e3);return()=>clearInterval(S)},[]);const $=t(n),T=t(n,!0),I=()=>{d.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},R=()=>r("/search");return s.jsxs(z.Page,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"hero card",children:[s.jsxs("div",{className:"heroText",children:[s.jsx("h1",{children:"React Routes Theme"}),s.jsxs("p",{className:"muted",style:{marginTop:6},children:["last updated: ",s.jsx("time",{dateTime:m,children:l})]}),s.jsxs("div",{className:"meta",children:[s.jsx("span",{title:"Current date",children:$}),s.jsx("span",{className:"dot",children:"•"}),s.jsx("span",{title:"Current time",children:k(n)})]}),s.jsx("p",{className:"lead",children:"Polished, display-only ERP frontend theme. No writes, no surprises — just premium UX, deep links, and gorgeous defaults."})]}),s.jsxs("div",{className:"heroActions",children:[s.jsxs("button",{className:"btnPrimary",onClick:R,"aria-label":"Open global search",children:[s.jsx(L,{style:{marginRight:8}})," Open Search"]}),s.jsxs("div",{className:"ghostRow",children:[s.jsxs(j,{className:"btnGhost",to:"/examples/print",title:"Print demo",children:[s.jsx(F,{style:{marginRight:8}})," Print Demo"]}),s.jsxs("a",{className:"btnGhost",href:"data:application/json;charset=utf-8,{}",download:"export.json",title:"Export snapshot (static)",children:[s.jsx(A,{style:{marginRight:8}})," Export JSON"]})]})]})]}),s.jsxs("section",{className:"actions",children:[s.jsxs("button",{className:"cta",disabled:!0,"data-tooltip":"Demo mode: action disabled",children:[s.jsx(f,{})," New Order"]}),s.jsxs("button",{className:"cta",disabled:!0,"data-tooltip":"Demo mode: action disabled",children:[s.jsx(v,{})," New Invoice"]}),s.jsxs("button",{className:"cta",disabled:!0,"data-tooltip":"Demo mode: action disabled",children:[s.jsx(D,{})," New Customer"]}),s.jsxs("button",{className:"cta",disabled:!0,"data-tooltip":"Demo mode: action disabled",children:[s.jsx(N,{})," New Product"]})]}),s.jsxs("section",{className:"kpis",children:[s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"kpiIcon",children:s.jsx(f,{})}),s.jsxs("div",{className:"kpiBody",children:[s.jsx("div",{className:"kpiLabel",children:"Orders Today"}),s.jsx("div",{className:"kpiValue",children:"128"}),s.jsxs("div",{className:"kpiFoot",children:["as of ",T]})]})]}),s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"kpiIcon",children:s.jsx(v,{})}),s.jsxs("div",{className:"kpiBody",children:[s.jsx("div",{className:"kpiLabel",children:"Invoices (Open)"}),s.jsx("div",{className:"kpiValue",children:"42"}),s.jsxs("div",{className:"kpiFoot",children:["updated ",T]})]})]}),s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"kpiIcon",children:s.jsx(y,{})}),s.jsxs("div",{className:"kpiBody",children:[s.jsx("div",{className:"kpiLabel",children:"Pending Shipments"}),s.jsx("div",{className:"kpiValue",children:"17"}),s.jsxs("div",{className:"kpiFoot",children:["cutoff ",k(n)]})]})]}),s.jsxs("div",{className:"kpi card",children:[s.jsx("div",{className:"kpiIcon",children:s.jsx(N,{})}),s.jsxs("div",{className:"kpiBody",children:[s.jsx("div",{className:"kpiLabel",children:"Low-Stock SKUs"}),s.jsx("div",{className:"kpiValue",children:"9"}),s.jsx("div",{className:"kpiFoot",children:s.jsx(i,{to:"/inventory/reorder",children:"View Reorder"})})]})]})]}),s.jsxs("section",{className:"grid",children:[s.jsxs("div",{className:"card shortcuts",children:[s.jsx("h3",{children:"Shortcuts"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsxs(i,{to:"/customers",children:[s.jsx(D,{})," Customers"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/orders",children:[s.jsx(f,{})," Orders"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/products",children:[s.jsx(N,{})," Products"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/inventory",children:[s.jsx(B,{})," Inventory"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/vendors",children:[s.jsx(y,{})," Vendors"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/invoices",children:[s.jsx(v,{})," Invoices"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/shipments",children:[s.jsx(y,{})," Shipments"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/reports",children:[s.jsx(M,{})," Reports"]})}),s.jsx("li",{children:s.jsxs(i,{to:"/settings",children:[s.jsx(V,{})," Settings"]})})]})]}),s.jsxs("div",{className:"card recent",children:[s.jsx("h3",{children:"Recently Viewed"}),s.jsxs("ul",{className:"list",children:[s.jsxs("li",{children:[s.jsxs(i,{to:"/customers/CUST-1001",children:["Customer CUST-1001 ",s.jsx(g,{className:"x"})]}),s.jsx("span",{className:"muted",children:t("2025-10-04T12:15:23+05:30",!0)})]}),s.jsxs("li",{children:[s.jsxs(i,{to:"/orders/ORD-3001",children:["Order ORD-3001 ",s.jsx(g,{className:"x"})]}),s.jsx("span",{className:"muted",children:t("2025-10-02T18:05:10+05:30",!0)})]}),s.jsxs("li",{children:[s.jsxs(i,{to:"/invoices/INV-2031",children:["Invoice INV-2031 ",s.jsx(g,{className:"x"})]}),s.jsx("span",{className:"muted",children:t("2025-10-01T09:40:00+05:30",!0)})]}),s.jsxs("li",{children:[s.jsxs(i,{to:"/medicines/MED-AMOX-500",children:["MED-AMOX-500 ",s.jsx(g,{className:"x"})]}),s.jsx("span",{className:"muted",children:t("2025-09-30T14:32:55+05:30",!0)})]})]})]}),s.jsxs("div",{className:"card news",children:[s.jsx("h3",{children:"Announcements"}),s.jsxs("ul",{className:"timeline",children:[s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Theme refresh · Cards & Focus states"}),s.jsx("div",{className:"muted",children:t("2025-10-04T10:00:00+05:30",!0)}),s.jsx("p",{children:"Sharper spacing, improved shadows, and accessible focus rings across components."})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Navigation · Collapsible sections + search memory"}),s.jsx("div",{className:"muted",children:t("2025-10-03T11:35:00+05:30",!0)}),s.jsx("p",{children:"Sidebar sections collapse, remember state, and auto-open on route match."})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"dot"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Printing · Section-only print"}),s.jsx("div",{className:"muted",children:t("2025-10-01T16:05:00+05:30",!0)}),s.jsx("p",{children:"Pinpoint print support for summaries without layout hacks."})]})]})]})]}),s.jsxs("div",{className:"card sys",children:[s.jsx("h3",{children:"System"}),s.jsxs("div",{className:"rows",children:[s.jsxs("div",{children:[s.jsx("div",{className:"k",children:"Build"}),s.jsx("div",{className:"v",children:t(e,!0)})]}),s.jsxs("div",{children:[s.jsx("div",{className:"k",children:"Last Commit"}),s.jsx("div",{className:"v",children:t(a,!0)})]}),s.jsxs("div",{children:[s.jsx("div",{className:"k",children:"Last Updated"}),s.jsx("div",{className:"v",children:s.jsx("time",{dateTime:m,children:l})})]}),s.jsxs("div",{children:[s.jsx("div",{className:"k",children:"Demo Mode"}),s.jsx("div",{className:"v",children:"Enabled"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"k",children:"Base Path"}),s.jsx("div",{className:"v",children:"/react-routes-theme"})]})]})]}),s.jsxs("div",{className:"card printTarget",id:"search-print-area",ref:d,children:[s.jsx("h3",{children:"Printable Overview"}),s.jsxs("div",{className:"kv",children:[s.jsx("span",{className:"k",children:"Date"}),s.jsx("span",{className:"v",children:$}),s.jsx("span",{className:"k",children:"Time"}),s.jsx("span",{className:"v",children:k(n)}),s.jsx("span",{className:"k",children:"Build"}),s.jsx("span",{className:"v",children:t(e,!0)}),s.jsx("span",{className:"k",children:"Commit"}),s.jsx("span",{className:"v",children:t(a,!0)})]}),s.jsxs("div",{className:"printBtns",children:[s.jsxs("button",{className:"btnGhost",onClick:I,children:[s.jsx(F,{style:{marginRight:8}})," Print Overview"]}),s.jsxs(j,{className:"btnGhost",to:"/examples/print",children:[s.jsx(P,{style:{marginRight:8}})," Print Docs"]})]})]})]}),s.jsxs("footer",{className:"foot",children:[s.jsxs("div",{className:"left",children:[s.jsx(E,{})," ",s.jsx("span",{children:"Last refreshed"}),s.jsx("strong",{children:t(n,!0)})]}),s.jsxs("div",{className:"right",children:[s.jsxs(j,{to:"/changelog",className:"pill",children:[s.jsx(G,{})," Changelog"]}),s.jsxs(j,{to:"/roadmap",className:"pill",children:[s.jsx(g,{})," Roadmap"]}),s.jsxs(j,{to:"/help",className:"pill",children:[s.jsx(P,{})," Help"]})]})]})]})};export{X as default};
