import{d as w,u as z,r as u,j as e,aR as O,c as U,aS as I,am as V,D as H,b as F,aT as q,N as k,i as A,w as G,R as Q,aU as J,aV as X,aW as Y,x as K,y as W,aP as _}from"./index-DwhKQ_MC.js";const Z="var(--bg, #0d1117)",m="var(--text, #f3f4f6)",b="var(--muted, #a0a0a7)",h="var(--card, #111318)",x="var(--border, #23262d)",r="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",S="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",C={Page:w.div`
        width: 100%;
        color: ${m};
        padding: 20px 20px 40px 20px;
        background: ${Z};
    `,Header:w.header`
        display: grid;
        gap: 14px;
        margin-bottom: 16px;

        .titleRow {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 12px;
        }
        .titleRow .left {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        .leadIcon {
            font-size: 30px;
            color: ${r};
        }
        .titles h1 {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            line-height: 1.1;
            margin-bottom: 4px;
        }
        .titles .sub {
            font-size: 13px;
            color: ${b};
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .actions .ghost,
        .actions .primary {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            height: 36px;
            border-radius: 10px;
            border: 1px solid ${x};
            padding: 0 12px;
            font-weight: 600;
            background: ${h};
            color: ${m};
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                background 0.25s;
            box-shadow: ${S};
        }
        .actions .ghost:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
            background: rgba(0, 0, 0, 0.08);
        }
        .actions .primary {
            border-color: ${r};
            color: ${m};
        }
        .actions .primary:hover {
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
            background: rgba(0, 0, 0, 0.08);
        }

        .toolRow {
            display: grid;
            grid-template-columns: minmax(240px, 520px) 1fr;
            gap: 12px;
            align-items: center;
        }

        .searchBox {
            position: relative;
            display: flex;
            align-items: center;
            height: 40px;
            border: 1px solid ${x};
            border-radius: 10px;
            background: ${h};
            overflow: hidden;
            box-shadow: ${S};
        }
        .searchBox .icon {
            margin-left: 10px;
            font-size: 18px;
            color: ${b};
        }
        .searchBox input {
            flex: 1;
            height: 100%;
            background: transparent;
            border: none;
            color: ${m};
            padding: 0 10px;
            outline: none;
        }
        .searchBox .clear {
            height: 100%;
            padding: 0 10px;
            background: transparent;
            border: none;
            color: ${b};
            border-left: 1px solid ${x};
            cursor: pointer;
        }
        .searchBox .clear:hover {
            color: ${r};
            background: rgba(0, 0, 0, 0.06);
        }

        .tabs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .tab {
            height: 34px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid ${x};
            background: ${h};
            color: ${m};
            font-weight: 600;
            letter-spacing: 0.2px;
            transition: border-color 0.25s, color 0.25s, background 0.25s,
                box-shadow 0.25s;
        }
        .tab:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .tab.active {
            border-color: ${r};
            color: ${r};
            background: color-mix(in oklab, ${r} 12%, transparent);
        }

        @media (max-width: 880px) {
            .titleRow {
                grid-template-columns: 1fr;
            }
            .toolRow {
                grid-template-columns: 1fr;
            }
        }
    `,Layout:w.main`
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 16px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        .panel {
            background: ${h};
            border: 1px solid ${x};
            border-radius: 14px;
            padding: 14px;
            box-shadow: ${S};
        }

        /* Quick links */
        .quickLinks h2 {
            font-size: 16px;
            margin-bottom: 10px;
            font-family: "Antonio", sans-serif;
        }
        .quickLinks .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .linkCard {
            display: grid;
            gap: 2px;
            align-items: center;
            border: 1px solid ${x};
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
            color: ${m};
            position: relative;
            transition: border-color 0.25s, transform 0.1s ease;
            background: color-mix(in oklab, ${h} 96%, transparent);
        }
        .linkCard:hover {
            border-color: ${r};
            transform: translateY(-1px);
        }
        .linkCard .label {
            font-weight: 700;
        }
        .linkCard .desc {
            font-size: 12px;
            color: ${b};
        }
        .linkCard .open {
            position: absolute;
            right: 8px;
            top: 8px;
            font-size: 16px;
            color: ${b};
        }

        /* Pinned section */
        .pinned .panelTitle {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
        }
        .pinned h2 {
            font-size: 16px;
            font-family: "Antonio", sans-serif;
        }

        /* List + rows */
        .mainList .dateGroup {
            margin-bottom: 18px;
        }
        .dateHeader {
            font-size: 12px;
            color: ${b};
            border-bottom: 1px dashed ${x};
            padding-bottom: 6px;
            margin-bottom: 8px;
        }
        .list {
            display: grid;
            gap: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            border: 1px solid ${x};
            border-radius: 12px;
            padding: 12px;
            background: color-mix(in oklab, ${h} 96%, transparent);
            transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
            outline: none;
        }
        .row:hover,
        .row:focus-visible {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .row.unread {
            background: color-mix(in oklab, ${r} 10%, ${h});
        }

        .row .left {
            display: grid;
            grid-template-columns: 30px 1fr;
            gap: 12px;
            align-items: flex-start;
        }
        .kindIcon {
            font-size: 22px;
            color: ${r};
            margin-top: 2px;
        }
        .title {
            font-size: 14px;
            margin: 0;
        }
        .message {
            font-size: 13px;
            color: ${b};
            margin-top: 2px;
        }

        .meta header {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .unreadDot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: ${r};
            display: inline-block;
        }

        .info {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            align-items: center;
            margin-top: 6px;
            font-size: 12px;
            color: ${b};
        }
        .info .sep {
            opacity: 0.6;
        }
        .miniLink {
            text-decoration: none;
            color: ${m};
            border-bottom: 1px dotted ${x};
        }
        .miniLink:hover {
            color: ${r};
        }

        .right {
            display: flex;
            align-items: center;
        }
        .cta {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            height: 34px;
            padding: 0 12px;
            border-radius: 10px;
            border: 1px solid ${r};
            background: transparent;
            color: ${m};
            font-weight: 700;
            text-decoration: none;
        }
        .cta:hover {
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .cta.disabled {
            opacity: 0.5;
            pointer-events: none;
        }

        /* Empty state */
        .empty {
            border: 1px dashed ${x};
            border-radius: 12px;
            padding: 18px;
            display: grid;
            gap: 8px;
            justify-items: start;
        }
        .empty p {
            color: ${b};
        }
        .empty .links {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }
        .empty .a {
            color: ${m};
            text-decoration: none;
            border-bottom: 1px dotted ${x};
        }
        .empty .a:hover {
            color: ${r};
        }

        @media (max-width: 680px) {
            .quickLinks .grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .row {
                grid-template-columns: 1fr;
            }
            .right {
                justify-content: flex-start;
            }
        }
    `},ee=t=>new Date(t).toDateString(),te=t=>{const i=new Date(t),s=String(i.getHours()).padStart(2,"0"),o=String(i.getMinutes()).padStart(2,"0"),p=String(i.getSeconds()).padStart(2,"0");return`${s}:${o}:${p}hrs`},se=t=>`${new Date(t).toDateString()} ${te(t)}`,M=[{id:"N-10031",kind:"order",title:"New order received",message:"Order ORD-3008 placed by CUST-1001.",createdAt:"2025-10-06T09:12:40+05:30",status:"unread",pinned:!0,links:[{label:"View Order",to:"/orders/ORD-3008"},{label:"Customer",to:"/customers/CUST-1001"},{label:"Orders",to:"/orders"}]},{id:"N-10030",kind:"invoice",title:"Invoice generated",message:"Invoice INV-2031 created for ORD-3007.",createdAt:"2025-10-06T08:05:11+05:30",status:"unread",links:[{label:"View Invoice",to:"/invoices/INV-2031"},{label:"Print",to:"/invoices/INV-2031/print"},{label:"Invoices",to:"/invoices"}]},{id:"N-10029",kind:"shipment",title:"Shipment dispatched",message:"SHP-8823 handed over to BlueDart.",createdAt:"2025-10-05T18:41:27+05:30",status:"read",links:[{label:"Track",to:"/shipments/SHP-8823/track"},{label:"All Shipments",to:"/shipments"},{label:"Labels",to:"/shipments/SHP-8823/labels"}]},{id:"N-10028",kind:"inventory",title:"Low stock alert: AMOX-500",message:"Reorder suggested for MED-AMOX-500 (stock ≤ threshold).",createdAt:"2025-10-05T10:22:03+05:30",status:"unread",links:[{label:"Inventory",to:"/inventory"},{label:"Reorder",to:"/inventory/reorder"},{label:"Medicines",to:"/medicines"}]},{id:"N-10027",kind:"finance",title:"Payment received",message:"₹ 12,500 received against INV-2025.",createdAt:"2025-10-04T20:11:02+05:30",status:"read",links:[{label:"Payments",to:"/sales/payments"},{label:"Invoice INV-2025",to:"/invoices/INV-2025"},{label:"Finance",to:"/finance"}]},{id:"N-10026",kind:"system",title:"System update",message:"New print template presets available.",createdAt:"2025-10-03T09:03:55+05:30",status:"read",links:[{label:"Print Templates",to:"/settings/print-templates"},{label:"Changelog",to:"/changelog"},{label:"Roadmap",to:"/roadmap"}]},{id:"N-10025",kind:"mention",title:"@You on PO-7742",message:"Ravi mentioned you in Purchase Order PO-7742.",createdAt:"2025-10-02T11:47:29+05:30",status:"unread",links:[{label:"Open PO",to:"/purchase-orders/PO-7742"},{label:"Vendors",to:"/vendors"},{label:"Purchasing",to:"/purchase-orders"}]},{id:"N-10024",kind:"inventory",title:"Expiry tracker",message:"5 lots expiring in 30 days.",createdAt:"2025-10-01T08:18:14+05:30",status:"read",links:[{label:"Expiry Tracker",to:"/medicines/expiry-tracker"},{label:"Batches",to:"/inventory/batches"},{label:"Lots",to:"/inventory/lots"}]}],ie=({kind:t,className:i})=>{switch(t){case"order":return e.jsx(_,{className:i});case"invoice":return e.jsx(W,{className:i});case"shipment":return e.jsx(K,{className:i});case"inventory":return e.jsx(Y,{className:i});case"finance":return e.jsx(X,{className:i});case"system":return e.jsx(J,{className:i});case"mention":return e.jsx(O,{className:i});default:return e.jsx(O,{className:i})}};function ae(){z();const[t,i]=u.useState(""),[s,o]=u.useState("all"),[p,j]=u.useState(!0),y=u.useMemo(()=>{const n=t.trim().toLowerCase().split(/\s+/).filter(Boolean),l=a=>s==="all"?!0:s==="unread"?a.status==="unread":s==="mentions"?a.kind==="mention":s==="system"?a.kind==="system":s==="billing"?a.kind==="invoice"||a.kind==="finance":s==="orders"?a.kind==="order":s==="inventory"?a.kind==="inventory":s==="shipments"?a.kind==="shipment":s==="finance"?a.kind==="finance":!0,d=a=>{if(!n.length)return!0;const B=`${a.id} ${a.title} ${a.message} ${a.links.map(N=>N.label).join(" ")}`.toLowerCase();return n.every(N=>B.includes(N))};return M.filter(a=>l(a)&&d(a))},[t,s]),$=u.useMemo(()=>y.filter(n=>n.pinned&&p),[y,p]),P=u.useMemo(()=>y.filter(n=>!n.pinned||!p),[y,p]),L=u.useCallback(n=>{const l={};for(const d of n){const a=ee(d.createdAt);l[a]||(l[a]=[]),l[a].push(d)}return l},[]),R=u.useMemo(()=>L(P),[L,P]),v="search-print-area",D=()=>{const n=document.body;n.classList.add("print-section-mode");const l=()=>{n.classList.remove("print-section-mode"),window.removeEventListener("afterprint",l)};window.addEventListener("afterprint",l),window.print()},E=()=>{const n=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),l=URL.createObjectURL(n),d=document.createElement("a");d.href=l,d.download="notifications.json",document.body.appendChild(d),d.click(),d.remove(),URL.revokeObjectURL(l)};return e.jsxs(C.Page,{role:"main",children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #${v},
          body.print-section-mode #${v} * { visibility: visible !important; }
          body.print-section-mode #${v} {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(C.Header,{children:[e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{className:"left",children:[e.jsx(O,{className:"leadIcon"}),e.jsxs("div",{className:"titles",children:[e.jsx("h1",{children:"Notifications"}),e.jsx("p",{className:"sub",children:"Stay on top of orders, billing, inventory, and system events—display-only demo."})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"ghost",onClick:()=>o("unread"),title:"Quick filter: Unread",children:[e.jsx(U,{})," Unread"]}),e.jsxs("button",{className:"ghost",onClick:()=>j(n=>!n),title:"Toggle pinned",children:[e.jsx(I,{})," ",p?"Hide Pinned":"Show Pinned"]}),e.jsxs("button",{className:"ghost",onClick:E,title:"Export static JSON",children:[e.jsx(V,{})," Export"]}),e.jsxs("button",{className:"primary",onClick:D,title:"Print list",children:[e.jsx(H,{})," Print"]})]})]}),e.jsxs("div",{className:"toolRow",children:[e.jsxs("div",{className:"searchBox",children:[e.jsx(F,{className:"icon"}),e.jsx("input",{value:t,onChange:n=>i(n.target.value),placeholder:"Search notifications (e.g., INV-2031, shipment, reorder)","aria-label":"Search notifications"}),t.trim()&&e.jsx("button",{className:"clear",onClick:()=>i(""),title:"Clear search",children:e.jsx(q,{})})]}),e.jsxs("div",{className:"tabs",children:[e.jsx(g,{label:"All",active:s==="all",onClick:()=>o("all")}),e.jsx(g,{label:"Unread",active:s==="unread",onClick:()=>o("unread")}),e.jsx(g,{label:"Mentions",active:s==="mentions",onClick:()=>o("mentions")}),e.jsx(g,{label:"System",active:s==="system",onClick:()=>o("system")}),e.jsx(g,{label:"Billing",active:s==="billing",onClick:()=>o("billing")}),e.jsx(g,{label:"Orders",active:s==="orders",onClick:()=>o("orders")}),e.jsx(g,{label:"Inventory",active:s==="inventory",onClick:()=>o("inventory")}),e.jsx(g,{label:"Shipments",active:s==="shipments",onClick:()=>o("shipments")}),e.jsx(g,{label:"Finance",active:s==="finance",onClick:()=>o("finance")})]})]})]}),e.jsxs(C.Layout,{id:v,children:[e.jsxs("section",{className:"panel quickLinks","aria-label":"Quick links",children:[e.jsx("h2",{children:"Navigate"}),e.jsxs("div",{className:"grid",children:[e.jsx(c,{to:"/orders",label:"Orders",desc:"All sales orders"}),e.jsx(c,{to:"/invoices",label:"Invoices",desc:"Billing documents"}),e.jsx(c,{to:"/receipts",label:"Receipts",desc:"Customer receipts"}),e.jsx(c,{to:"/shipments",label:"Shipments",desc:"Tracking & labels"}),e.jsx(c,{to:"/inventory",label:"Inventory",desc:"Stock & lots"}),e.jsx(c,{to:"/medicines/expiry-tracker",label:"Expiry Tracker",desc:"Expiring lots"}),e.jsx(c,{to:"/sales/payments",label:"Payments",desc:"Recent payments"}),e.jsx(c,{to:"/finance",label:"Finance",desc:"Ledgers & reports"}),e.jsx(c,{to:"/reports",label:"Reports",desc:"Sales & inventory"}),e.jsx(c,{to:"/admin/audit-log",label:"Audit Log",desc:"Security events"}),e.jsx(c,{to:"/settings/print-templates",label:"Print Templates",desc:"Template presets"}),e.jsx(c,{to:"/help",label:"Help Center",desc:"Guides & docs"})]})]}),$.length>0&&e.jsxs("section",{className:"panel pinned","aria-label":"Pinned notifications",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(I,{})," ",e.jsx("h2",{children:"Pinned"})]}),e.jsx("div",{className:"list",children:$.map(n=>e.jsx(T,{n},n.id))})]}),e.jsx("section",{className:"panel mainList","aria-label":"Notifications",children:Object.entries(R).length===0&&$.length===0?e.jsxs("div",{className:"empty",children:[e.jsx("p",{children:"No notifications match your filters."}),e.jsxs("div",{className:"links",children:[e.jsx(k,{to:"/reports",className:"a",children:"Go to Reports"}),e.jsx(A,{}),e.jsx(k,{to:"/orders",className:"a",children:"Browse Orders"})]})]}):Object.entries(R).map(([n,l])=>e.jsxs("div",{className:"dateGroup",children:[e.jsx("div",{className:"dateHeader",children:n}),e.jsx("div",{className:"list",children:l.map(d=>e.jsx(T,{n:d},d.id))})]},n))})]})]})}function g({label:t,active:i,onClick:s}){return e.jsx("button",{className:`tab ${i?"active":""}`,onClick:s,"aria-pressed":i?"true":"false",type:"button",children:t})}function c({to:t,label:i,desc:s}){return e.jsxs(k,{className:"linkCard",to:t,title:i,children:[e.jsx("div",{className:"label",children:i}),e.jsx("div",{className:"desc",children:s}),e.jsx(G,{className:"open"})]})}function T({n:t}){var s,o;const i=(s=t.links)==null?void 0:s[0];return e.jsxs("article",{className:`row ${t.status==="unread"?"unread":""}`,tabIndex:0,"aria-label":t.title,children:[e.jsxs("div",{className:"left",children:[e.jsx(ie,{kind:t.kind,className:"kindIcon"}),e.jsxs("div",{className:"meta",children:[e.jsxs("header",{children:[e.jsx("h3",{className:"title",children:t.title}),t.status==="unread"&&e.jsx("span",{className:"badge unreadDot","aria-label":"unread"})]}),e.jsx("p",{className:"message",children:t.message}),e.jsxs("div",{className:"info",children:[e.jsx("span",{className:"time",children:se(t.createdAt)}),e.jsx("span",{className:"sep",children:"•"}),(o=t.links)==null?void 0:o.slice(0,3).map((p,j)=>e.jsxs(Q.Fragment,{children:[e.jsx(k,{to:p.to,className:"miniLink",children:p.label}),j<Math.min(t.links.length,3)-1&&e.jsx("span",{className:"miniSep",children:"/"})]},p.to))]})]})]}),e.jsx("div",{className:"right",children:i?e.jsxs(k,{to:i.to,className:"cta",children:["Open ",e.jsx(A,{})]}):e.jsx("span",{className:"cta disabled","aria-disabled":"true",children:"Open"})})]})}export{ae as default};
