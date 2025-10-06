import{d as o,u as E,r as b,j as e,N as a}from"./index-CqBbF2bz.js";import{B as S,a6 as T,a7 as W,a as z,I as H,j,D as F,i as u,a8 as f,h as M,d as p,T as N,J as U,e as q,f as G,Z as J,g as V,a9 as Y}from"./index-BGrfC-E0.js";const v="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",c="var(--card, #111318)",r="var(--border, #23262d)",i="var(--accent, #5aa9ff)",D="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",t={Wrap:o.div`
        width: 100%;
        color: ${v};
        padding: 18px;
        display: grid;
        gap: 16px;

        a {
            color: ${v};
        }
        a:hover {
            color: ${i};
        }
        .card {
            background: ${c};
            border: 1px solid ${r};
            border-radius: 12px;
            box-shadow: ${D};
            padding: 16px;
        }
        .btn {
            background: ${c};
            color: ${v};
            border: 1px solid ${r};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.04s;
            text-decoration: none;
            user-select: none;
        }
        .btn:hover {
            border-color: ${i};
            color: ${i};
        }
        .btn:active {
            transform: translateY(1px);
        }
        .btn:disabled {
            opacity: 0.55;
            cursor: not-allowed;
            color: ${l};
            border-color: ${r};
        }
        .btn.primary {
            border-color: ${i};
        }
        .btn.ghost {
            background: transparent;
        }
        .btn.danger {
            border-color: ${r};
        }

        code {
            background: rgba(0, 0, 0, 0.18);
            border: 1px solid ${r};
            padding: 2px 6px;
            border-radius: 6px;
        }
    `,Header:o.header`
        display: grid;
        gap: 12px;

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        h1 {
            font-size: 28px;
            line-height: 1.2;
            letter-spacing: 0.4px;
        }
    `,DemoBadge:o.span`
        padding: 2px 8px;
        border: 1px dashed ${r};
        border-radius: 999px;
        font-size: 11px;
        letter-spacing: 0.5px;
        color: ${l};
        background: color-mix(in oklab, ${i} 10%, transparent);
    `,Breadcrumbs:o.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${l};
        a {
            color: ${l};
        }
        a:hover {
            color: ${i};
        }
        .sep {
            display: inline-flex;
            align-items: center;
            opacity: 0.7;
        }
        .current {
            color: ${v};
        }
    `,Meta:o.div`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        .metaItem {
            display: grid;
            gap: 2px;
            padding: 6px 10px;
            border: 1px solid ${r};
            border-radius: 8px;
            background: ${c};
        }
        .k {
            font-size: 11px;
            color: ${l};
        }
        .v {
            font-family: "Antonio", sans-serif;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
    `,Actions:o.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    `,Grid:o.div`
        display: grid;
        grid-template-columns: repeat(${n=>n.cols||4}, minmax(0, 1fr));
        gap: 12px;

        .tile {
            display: grid;
            grid-template-columns: 40px 1fr 20px;
            align-items: center;
            gap: 10px;
            background: ${c};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 12px;
            text-decoration: none;
            box-shadow: ${D};
            transition: border-color 0.2s, transform 0.06s, background 0.2s;
        }
        .tile:hover {
            border-color: ${i};
            transform: translateY(-1px);
        }
        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: ${i};
        }
        .meta .label {
            font-weight: 600;
        }
        .meta .count {
            color: ${l};
            font-size: 12px;
        }
        .go {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${l};
        }
    `,Card:o.section`
        .cardHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
        }
        h2 {
            font-size: 20px;
        }
        .headActions {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    `,Progress:o.div`
        --pct: 0%;
        display: grid;
        grid-template-columns: 220px 1fr 60px;
        gap: 10px;
        align-items: center;
        padding: 8px 0;
        .label {
            color: ${l};
        }
        .bar {
            position: relative;
            height: 10px;
            border: 1px solid ${r};
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.18);
        }
        .bar span {
            position: absolute;
            inset: 0;
            width: var(--pct);
            background: linear-gradient(
                90deg,
                color-mix(in oklab, ${i} 45%, transparent),
                ${i}
            );
            border-radius: 999px;
        }
        .val {
            text-align: right;
            font-variant-numeric: tabular-nums;
        }
    `,TableWrap:o.div`
        overflow: auto;
        border: 1px solid ${r};
        border-radius: 10px;
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            text-align: left;
            background: ${c};
            color: ${i};
            padding: 12px;
            border-bottom: 1px solid ${r};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${r};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .dset {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .dset .ico {
            color: ${i};
            display: flex;
            font-size: 18px;
        }
        .dset .name {
            font-weight: 600;
        }
        .dset .help {
            color: ${l};
            font-size: 12px;
        }

        .checkWrap {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }
        .checkWrap input {
            position: absolute;
            opacity: 0;
            pointer-events: none;
        }
        .checkWrap .fake {
            width: 18px;
            height: 18px;
            border: 1px solid ${r};
            border-radius: 4px;
            display: inline-block;
            background: ${c};
            position: relative;
            transition: border-color 0.2s, background 0.2s;
        }
        .checkWrap input:checked + .fake {
            border-color: ${i};
            background: color-mix(in oklab, ${i} 14%, transparent);
        }
        .linkBtn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            border: 1px solid ${r};
            border-radius: 8px;
            text-decoration: none;
        }
        .linkBtn:hover {
            border-color: ${i};
            color: ${i};
        }
    `,LinksGrid:o.div`
        display: grid;
        grid-template-columns: repeat(${n=>n.cols||3}, minmax(0, 1fr));
        gap: 10px;
        .deepLink {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border: 1px dashed ${r};
            border-radius: 10px;
            text-decoration: none;
            background: color-mix(in oklab, ${c} 96%, transparent);
            transition: border-color 0.2s;
        }
        .deepLink:hover {
            border-color: ${i};
            color: ${i};
        }
    `,PrintCard:o.section`
        margin-top: 18px;
        .printMeta {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            color: ${l};
            margin-bottom: 10px;
        }
    `,ModalOverlay:o.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `,Modal:o.div`
        width: 520px;
        max-width: 92vw;
        background: ${c};
        border: 1px solid ${r};
        border-radius: 12px;
        box-shadow: ${D};
        padding: 16px;
        display: grid;
        gap: 10px;

        h3 {
            font-size: 18px;
        }
        p {
            color: ${l};
        }

        .quickLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .quickLinks a {
            padding: 6px 10px;
            border: 1px solid ${r};
            border-radius: 8px;
            text-decoration: none;
        }
        .quickLinks a:hover {
            border-color: ${i};
            color: ${i};
        }
        .modalActions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
    `},C=!0,y=[{key:"customers",label:"Customers",icon:e.jsx(q,{}),count:48,list:"/customers",sample:"/customers/CUST-1001"},{key:"orders",label:"Orders",icon:e.jsx(p,{}),count:112,list:"/orders",sample:"/orders/ORD-3001"},{key:"invoices",label:"Invoices",icon:e.jsx(p,{}),count:97,list:"/invoices",sample:"/invoices/INV-2031"},{key:"receipts",label:"Receipts",icon:e.jsx(p,{}),count:154,list:"/receipts",sample:"/invoices"},{key:"products",label:"Products",icon:e.jsx(G,{}),count:260,list:"/products",sample:"/products/PRD-AXN-01"},{key:"categories",label:"Categories",icon:e.jsx(f,{}),count:22,list:"/categories",sample:"/categories"},{key:"medicines",label:"Medicines",icon:e.jsx(M,{}),count:180,list:"/medicines",sample:"/medicines/MED-AMOX-500"},{key:"vendors",label:"Vendors",icon:e.jsx(J,{}),count:18,list:"/vendors",sample:"/vendors/VEND-1002"},{key:"purchase",label:"Purchase Orders",icon:e.jsx(p,{}),count:41,list:"/purchase-orders",sample:"/purchase-orders/PO-5010"},{key:"shipments",label:"Shipments",icon:e.jsx(V,{}),count:26,list:"/shipments",sample:"/shipments/SHP-7001"},{key:"warehouses",label:"Warehouses",icon:e.jsx(Y,{}),count:4,list:"/inventory/warehouses",sample:"/inventory/warehouses"},{key:"inventory",label:"Inventory Lots",icon:e.jsx(M,{}),count:820,list:"/inventory/lots",sample:"/inventory/lots"},{key:"reports",label:"Reports",icon:e.jsx(u,{}),count:7,list:"/reports",sample:"/reports/sales"},{key:"users",label:"Users",icon:e.jsx(N,{}),count:12,list:"/admin/users",sample:"/admin/users"}];function $(n){return n.toString().padStart(2,"0")}function Q(n){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][n.getDay()]}function X(n){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]}function Z(n){const d=new Date(n);return`${Q(d)} ${X(d)} ${$(d.getDate())} ${d.getFullYear()}`}function h(n){const d=new Date(n),g=Z(n),w=`${$(d.getHours())}:${$(d.getMinutes())}:${$(d.getSeconds())}hrs`;return`${g} ${w}`}const P="2025-10-06T08:55:04+05:30",A="2025-10-06T03:25:08.920Z";function ee(){const n=E(),[d,g]=b.useState(!1),[w,I]=b.useState(()=>new Set(y.map(s=>s.key))),O=s=>{I(m=>{const k=new Set(m);return k.has(s)?k.delete(s):k.add(s),k})},B=b.useMemo(()=>[{label:"Catalog & Inventory",pct:92},{label:"Sales & Billing",pct:88},{label:"Vendors & PO",pct:81},{label:"Logistics",pct:76},{label:"Admin & Settings",pct:84}],[]),L=b.useCallback(s=>{var m;(m=s==null?void 0:s.preventDefault)==null||m.call(s),g(!0)},[]),x=b.useCallback(()=>g(!1),[]),R=()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{const s=()=>{document.body.classList.remove("print-section-mode"),window.removeEventListener("afterprint",s)};window.addEventListener("afterprint",s)}};return e.jsxs(t.Wrap,{children:[e.jsx("style",{children:`
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
        }
      `}),e.jsxs(t.Header,{children:[e.jsxs(t.Breadcrumbs,{"aria-label":"Breadcrumbs",children:[e.jsx(a,{to:"/home",children:"Home"}),e.jsx("span",{className:"sep",children:e.jsx(S,{})}),e.jsx(a,{to:"/tools/import-export",children:"Tools"}),e.jsx("span",{className:"sep",children:e.jsx(S,{})}),e.jsx("span",{className:"current",children:"Seed"})]}),e.jsxs("div",{className:"titleRow",children:[e.jsx("h1",{children:"Seed Demo Data"}),e.jsx(t.DemoBadge,{title:"Display-only build",children:"DEMO"})]}),e.jsxs(t.Meta,{children:[e.jsxs("div",{className:"metaItem",children:[e.jsx("span",{className:"k",children:"Build"}),e.jsx("span",{className:"v",children:h(A)})]}),e.jsxs("div",{className:"metaItem",children:[e.jsx("span",{className:"k",children:"Last Commit"}),e.jsx("span",{className:"v",children:h(P)})]}),e.jsxs("div",{className:"metaItem",children:[e.jsx("span",{className:"k",children:"Now"}),e.jsx("span",{className:"v",children:h(new Date().toISOString())})]})]}),e.jsxs(t.Actions,{children:[e.jsxs("button",{className:"btn primary",disabled:C,onClick:L,children:[e.jsx(T,{})," Seed All"]}),e.jsxs("button",{className:"btn danger",disabled:C,onClick:L,children:[e.jsx(W,{})," Clear All"]}),e.jsxs("button",{className:"btn",onClick:R,children:[e.jsx(z,{})," Print Summary"]}),e.jsxs(a,{className:"btn ghost",to:"/tools/import-export",children:[e.jsx(H,{})," Import / Export"]})]})]}),e.jsx(t.Grid,{cols:6,role:"navigation","aria-label":"Quick links",children:y.map(s=>e.jsxs(a,{to:s.list,className:"tile",children:[e.jsx("div",{className:"icon",children:s.icon}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"label",children:s.label}),e.jsxs("div",{className:"count",children:[s.count," items"]})]}),e.jsx("div",{className:"go",children:e.jsx(S,{})})]},s.key))}),e.jsxs(t.Card,{className:"card",children:[e.jsx("div",{className:"cardHead",children:e.jsx("h2",{children:"Dataset Readiness"})}),e.jsx("div",{className:"progressList",children:B.map(s=>e.jsxs(t.Progress,{style:{"--pct":`${s.pct}%`},children:[e.jsx("div",{className:"label",children:s.label}),e.jsx("div",{className:"bar",children:e.jsx("span",{})}),e.jsxs("div",{className:"val",children:[s.pct,"%"]})]},s.label))})]}),e.jsxs(t.Card,{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h2",{children:"Seed Packs"}),e.jsxs("div",{className:"headActions",children:[e.jsxs("button",{className:"btn primary",disabled:C,onClick:L,children:[e.jsx(T,{})," Seed Selected"]}),e.jsxs("button",{className:"btn ghost",onClick:()=>n("/tools/theme-tokens"),children:[e.jsx(j,{})," Theme Tokens"]})]})]}),e.jsx(t.TableWrap,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:56},children:"Use"}),e.jsx("th",{children:"Dataset"}),e.jsx("th",{style:{width:140},children:"Items"}),e.jsx("th",{children:"Open"}),e.jsx("th",{children:"Deep Link"})]})}),e.jsx("tbody",{children:y.map(s=>{const m=w.has(s.key);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("label",{className:"checkWrap",title:"Toggle (no effect in demo)",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:()=>O(s.key),"aria-label":`Toggle ${s.label}`}),e.jsx("span",{className:"fake"})]})}),e.jsx("td",{children:e.jsxs("div",{className:"dset",children:[e.jsx("span",{className:"ico",children:s.icon}),e.jsxs("div",{className:"text",children:[e.jsx("div",{className:"name",children:s.label}),e.jsx("div",{className:"help",children:"predefined sample data"})]})]})}),e.jsx("td",{children:e.jsx("code",{children:s.count})}),e.jsx("td",{children:e.jsxs(a,{to:s.list,className:"linkBtn",children:[e.jsx(F,{})," List"]})}),e.jsx("td",{children:e.jsxs(a,{to:s.sample,className:"linkBtn",children:[e.jsx(F,{})," Sample"]})})]},s.key)})})]})})]}),e.jsx("div",{id:"search-print-area","aria-hidden":"true",children:e.jsxs(t.PrintCard,{className:"card",children:[e.jsx("h2",{children:"Seed Summary (Print)"}),e.jsxs("div",{className:"printMeta",children:[e.jsxs("div",{children:["Build: ",h(A)]}),e.jsxs("div",{children:["Commit: ",h(P)]}),e.jsxs("div",{children:["Generated: ",h(new Date().toISOString())]})]}),e.jsx(t.TableWrap,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Dataset"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"List"}),e.jsx("th",{children:"Sample"})]})}),e.jsx("tbody",{children:y.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.label}),e.jsx("td",{children:s.count}),e.jsx("td",{children:s.list}),e.jsx("td",{children:s.sample})]},s.key))})]})})]})}),e.jsxs(t.Card,{className:"card",children:[e.jsx("div",{className:"cardHead",children:e.jsx("h2",{children:"Explore More"})}),e.jsxs(t.LinksGrid,{cols:4,children:[e.jsxs(a,{to:"/reports/sales",className:"deepLink",children:[e.jsx(u,{})," Sales Report"]}),e.jsxs(a,{to:"/reports/inventory",className:"deepLink",children:[e.jsx(u,{})," Inventory Report"]}),e.jsxs(a,{to:"/reports/customers",className:"deepLink",children:[e.jsx(u,{})," Customer Report"]}),e.jsxs(a,{to:"/reports/finance",className:"deepLink",children:[e.jsx(u,{})," Finance Report"]}),e.jsxs(a,{to:"/products/brands",className:"deepLink",children:[e.jsx(f,{})," Brands"]}),e.jsxs(a,{to:"/products/attributes",className:"deepLink",children:[e.jsx(f,{})," Attributes"]}),e.jsxs(a,{to:"/products/price-lists",className:"deepLink",children:[e.jsx(f,{})," Price Lists"]}),e.jsxs(a,{to:"/inventory/batches",className:"deepLink",children:[e.jsx(M,{})," Batches"]}),e.jsxs(a,{to:"/sales/quotes",className:"deepLink",children:[e.jsx(p,{})," Quotes"]}),e.jsxs(a,{to:"/sales/returns",className:"deepLink",children:[e.jsx(p,{})," Returns"]}),e.jsxs(a,{to:"/sales/payments",className:"deepLink",children:[e.jsx(p,{})," Payments"]}),e.jsxs(a,{to:"/invoices/credit-notes",className:"deepLink",children:[e.jsx(p,{})," Credit Notes"]}),e.jsxs(a,{to:"/admin/users",className:"deepLink",children:[e.jsx(N,{})," Users"]}),e.jsxs(a,{to:"/admin/roles",className:"deepLink",children:[e.jsx(N,{})," Roles"]}),e.jsxs(a,{to:"/admin/permissions",className:"deepLink",children:[e.jsx(N,{})," Permissions"]}),e.jsxs(a,{to:"/admin/audit-log",className:"deepLink",children:[e.jsx(U,{})," Audit Log"]}),e.jsxs(a,{to:"/settings/appearance",className:"deepLink",children:[e.jsx(j,{})," Appearance"]}),e.jsxs(a,{to:"/settings/notifications",className:"deepLink",children:[e.jsx(j,{})," Notifications"]}),e.jsxs(a,{to:"/settings/print-templates",className:"deepLink",children:[e.jsx(j,{})," Print Templates"]}),e.jsxs(a,{to:"/settings/webhooks",className:"deepLink",children:[e.jsx(j,{})," Webhooks"]})]})]}),d&&e.jsx(t.ModalOverlay,{role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:e.jsxs(t.Modal,{children:[e.jsx("h3",{id:"modal-title",children:"Action unavailable in demo"}),e.jsx("p",{children:"This build is display-only. Explore the datasets and deep links below instead."}),e.jsxs("div",{className:"quickLinks",children:[e.jsx(a,{to:"/customers",onClick:x,children:"Customers"}),e.jsx(a,{to:"/orders",onClick:x,children:"Orders"}),e.jsx(a,{to:"/products",onClick:x,children:"Products"}),e.jsx(a,{to:"/invoices",onClick:x,children:"Invoices"}),e.jsx(a,{to:"/tools/import-export",onClick:x,children:"Import / Export"})]}),e.jsx("div",{className:"modalActions",children:e.jsx("button",{className:"btn",onClick:x,children:"Close"})})]})})]})}export{ee as default};
