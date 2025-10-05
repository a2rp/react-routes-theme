import{d as c,r as m,u as D,j as e,L as x,N as n}from"./index-BM8H5dnP.js";import{y as M,s as z,a as B,u as R,v as E,w as H,t as U,k as h,ad as G,m as X,T as f,n as w,d as y,e as k,L as V,r as N,c as J,ae as W,af as Q,a8 as Y,g as Z,h as _,ag as q,Z as K}from"./index-CVqscwcs.js";const o="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",g="var(--card, #111318)",t="var(--border, #23262d)",d="var(--accent, #5aa9ff)",S="var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35))",s={Page:c.div`
        color: ${o};
        padding: 18px;
        display: grid;
        gap: 16px;

        .card {
            background: ${g};
            border: 1px solid ${t};
            border-radius: 12px;
            box-shadow: ${S};
        }

        a {
            color: ${o};
        }

        button {
            background: ${g};
            color: ${o};
            border: 1px solid ${t};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.08s ease;
        }
        button:hover {
            color: ${d};
            border-color: ${d};
            background: rgba(0, 0, 0, 0.08);
        }
        button:active {
            transform: translateY(1px);
        }
        button.ghost {
            background: transparent;
        }
    `,Header:c.div`
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 16px;

        .left {
            display: grid;
            grid-template-columns: 72px 1fr;
            gap: 14px;
            align-items: center;
        }

        .meta .nameRow {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        h1 {
            font-size: 24px;
            line-height: 1.2;
            margin: 0;
        }

        .verified {
            color: ${d};
            display: inline-flex;
            align-items: center;
        }

        .sub {
            color: ${p};
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .sub .dot {
            opacity: 0.5;
        }

        .tags {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .tag {
            font-size: 12px;
            padding: 4px 8px;
            border: 1px solid ${t};
            border-radius: 999px;
            background: color-mix(in oklab, ${d} 14%, transparent);
            color: ${o};
        }

        .actions {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-end;
        }
    `,Avatar:c.div`
        width: 72px;
        height: 72px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        font-size: 26px;
        font-weight: 700;
        background: radial-gradient(
                120px 120px at 30% 30%,
                color-mix(in oklab, ${d} 35%, transparent),
                transparent
            ),
            linear-gradient(
                135deg,
                color-mix(in oklab, ${d} 22%, transparent),
                transparent
            );
        border: 1px solid ${t};
    `,Grid:c.div`
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(${r=>r.cols||3}, minmax(0, 1fr));
        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }

        .qLink {
            /* border: 1px solid #f00; */
            display: flex;
            align-items: center;
            gap: 15px;
        }
    `,SectionHeader:c.div`
        display: grid;
        gap: 6px;
        padding: 2px 2px 0 2px;
        h2 {
            font-size: 18px;
            margin: 0;
        }
        p {
            color: ${p};
            margin: 0;
        }
    `,Card:c.div`
        padding: 14px;

        .line {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${p};
            font-weight: 600;
            margin-bottom: 8px;
        }
        .value {
            font-size: 14px;
            color: ${o};
        }

        .kvs {
            display: grid;
            gap: 8px;
        }
        .kvs .k {
            color: ${p};
            margin-right: 8px;
        }
        .kvs .v {
            color: ${o};
            font-weight: 600;
        }

        &.timeline {
            padding: 0;
            overflow: hidden;
        }
        &.timeline ul {
            list-style: none;
            padding: 10px 0 0 0;
            margin: 0;
        }
        &.timeline li {
            display: grid;
            grid-template-columns: 20px 1fr;
            gap: 10px;
            padding: 10px 14px;
            border-top: 1px solid ${t};
        }
        &.timeline li:first-child {
            border-top: 0;
        }
        &.timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-top: 6px;
            background: color-mix(in oklab, ${d} 50%, transparent);
            border: 1px solid ${t};
        }
        &.timeline .text {
            line-height: 1.5;
        }
        &.timeline .stamp {
            color: ${p};
            font-size: 12px;
            margin-top: 2px;
        }

        &.danger .title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        &.danger p {
            color: ${p};
            margin: 0 0 8px 0;
        }
        &.danger .row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
    `,TableCard:c.div`
        padding: 0;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 12px 14px;
            background: ${g};
            color: ${d};
            border-bottom: 1px solid ${t};
            position: sticky;
            top: 0;
            z-index: 1;
        }
        tbody td {
            padding: 12px 14px;
            border-bottom: 1px solid ${t};
            vertical-align: middle;
        }
        .pill {
            margin-left: 8px;
            font-size: 11px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${t};
            background: color-mix(in oklab, ${d} 18%, transparent);
        }

        .rowActions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            padding: 10px 14px;
        }
    `,ModalOverlay:c.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
        padding: 16px;
    `,Modal:c.div`
        background: ${g};
        color: ${o};
        border: 1px solid ${t};
        border-radius: 12px;
        box-shadow: ${S};
        width: min(520px, 100%);
        padding: 16px;

        .head {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
            color: ${d};
        }
        p {
            color: ${o};
            margin: 8px 0 12px;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
    `},ee=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],se=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=r=>r<10?`0${r}`:`${r}`;function j(r){const l=new Date(r);return`${ee[l.getDay()]} ${se[l.getMonth()]} ${u(l.getDate())} ${l.getFullYear()}`}function v(r){const l=new Date(r);return`${u(l.getHours())}:${u(l.getMinutes())}:${u(l.getSeconds())}hrs`}function C(r){const l=new Date(r);return`${j(l)} ${v(l)}`}const ie="2025-10-05T20:52:55.477Z",ae="2025-10-06T02:22:50+05:30",a={id:"USR-0001",name:"Ashish Ranjan",handle:"@ashish",role:"Owner",org:"Demo Clinic ERP",email:"ashish@example.com",phone:"+91 98XXX 4XXX2",timezone:"Asia/Kolkata",locale:"en-IN",location:"Patna, Bihar, IN",status:"Active",joinedISO:"2024-01-12T10:15:00+05:30",lastLoginISO:"2025-10-04T15:38:20+05:30",avatarInitials:"AR",tags:["Founder","Full Access","Beta Channel"]},ne=[{id:"S-01",device:"MacBook Pro • Chrome 129",ip:"49.37.114.21",location:"Patna, IN",lastActive:"2025-10-04T15:30:12+05:30",current:!0},{id:"S-02",device:"iPhone 14 • Safari",ip:"100.97.12.5",location:"Bengaluru, IN",lastActive:"2025-09-29T22:04:51+05:30",current:!1},{id:"S-03",device:"Windows 11 • Edge",ip:"172.19.22.140",location:"Hyderabad, IN",lastActive:"2025-09-20T09:12:33+05:30",current:!1}],re=[{id:"A-01",text:e.jsxs(e.Fragment,{children:["Created ",e.jsx(n,{to:"/orders/ORD-3001",children:"Sales Order ORD-3001"})]}),stamp:"2025-10-04T10:12:56+05:30"},{id:"A-02",text:e.jsxs(e.Fragment,{children:["Updated ",e.jsx(n,{to:"/customers/CUST-1001",children:"Customer CUST-1001"})," address"]}),stamp:"2025-10-03T18:44:09+05:30"},{id:"A-03",text:e.jsxs(e.Fragment,{children:["Printed ",e.jsx(n,{to:"/invoices/INV-2031/print",children:"Invoice INV-2031"})]}),stamp:"2025-10-02T12:03:40+05:30"},{id:"A-04",text:e.jsxs(e.Fragment,{children:["Added product to ",e.jsx(n,{to:"/purchase-orders/PO-9015",children:"PO-9015"})]}),stamp:"2025-09-30T09:20:15+05:30"}],le=[{to:"/orders",icon:e.jsx(J,{}),label:"Orders"},{to:"/invoices",icon:e.jsx(y,{}),label:"Invoices"},{to:"/receipts",icon:e.jsx(W,{}),label:"Receipts"},{to:"/products",icon:e.jsx(Q,{}),label:"Products"},{to:"/categories",icon:e.jsx(Y,{}),label:"Categories"},{to:"/vendors",icon:e.jsx(k,{}),label:"Vendors"},{to:"/shipments",icon:e.jsx(Z,{}),label:"Shipments"},{to:"/inventory",icon:e.jsx(_,{}),label:"Inventory"},{to:"/finance",icon:e.jsx(q,{}),label:"Finance"},{to:"/reports/sales",icon:e.jsx(y,{}),label:"Sales Report"},{to:"/settings/profile",icon:e.jsx(K,{}),label:"Profile Settings"},{to:"/notifications",icon:e.jsx(w,{}),label:"Notifications"},{to:"/admin/users",icon:e.jsx(k,{}),label:"Admin • Users"},{to:"/tools/import-export",icon:e.jsx(h,{}),label:"Import/Export"},{to:"/help",icon:e.jsx(h,{}),label:"Help Center"},{to:"/faq",icon:e.jsx(h,{}),label:"FAQ"}];function ce(){const[r,l]=m.useState({open:!1,title:"",message:""}),F=D(),A=m.useMemo(()=>C(ie),[]),T=m.useMemo(()=>C(ae),[]),O=m.useMemo(()=>j(a.joinedISO),[]),I=m.useMemo(()=>`${j(a.lastLoginISO)} ${v(a.lastLoginISO)}`,[]),b=(i="Action unavailable",P="This is a demo display. Actions are disabled.")=>{l({open:!0,title:i,message:P})},$=()=>l({open:!1,title:"",message:""}),L=()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{const i=()=>document.body.classList.remove("print-section-mode");window.addEventListener("afterprint",i,{once:!0}),setTimeout(i,1200)}};return e.jsxs(s.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(s.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx(s.Avatar,{"aria-hidden":"true",children:a.avatarInitials}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{className:"nameRow",children:[e.jsx("h1",{children:a.name}),e.jsx("span",{className:"verified",title:"Verified account",children:e.jsx(M,{})})]}),e.jsxs("div",{className:"sub",children:[e.jsx("span",{children:a.handle}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{children:a.role}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{children:a.org})]}),e.jsx("div",{className:"tags",children:a.tags.map(i=>e.jsx("span",{className:"tag",children:i},i))})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsxs("button",{className:"ghost",onClick:()=>F("/settings/profile"),title:"Edit in Settings",children:[e.jsx(z,{})," Edit Profile"]}),e.jsxs("button",{onClick:L,title:"Print summary",children:[e.jsx(B,{})," Print"]})]})]}),e.jsxs(s.Grid,{cols:"4",className:"topMeta",children:[e.jsxs(s.Card,{children:[e.jsxs("div",{className:"line",children:[e.jsx(R,{}),e.jsx("span",{children:"Email"})]}),e.jsx("div",{className:"value",children:a.email})]}),e.jsxs(s.Card,{children:[e.jsxs("div",{className:"line",children:[e.jsx(E,{}),e.jsx("span",{children:"Phone"})]}),e.jsx("div",{className:"value",children:a.phone})]}),e.jsxs(s.Card,{children:[e.jsxs("div",{className:"line",children:[e.jsx(H,{}),e.jsx("span",{children:"Timezone"})]}),e.jsx("div",{className:"value",children:a.timezone})]}),e.jsxs(s.Card,{children:[e.jsxs("div",{className:"line",children:[e.jsx(U,{}),e.jsx("span",{children:"Location"})]}),e.jsx("div",{className:"value",children:a.location})]})]}),e.jsxs(s.SectionHeader,{children:[e.jsx("h2",{children:"Quick Links"}),e.jsx("p",{children:"Jump to your most-used areas."})]}),e.jsx(s.Grid,{cols:"8",className:"quickLinks",children:le.map(i=>e.jsxs(x,{to:i.to,className:"qLink card",title:i.label,children:[e.jsx("span",{className:"icon",children:i.icon}),e.jsx("span",{className:"label",children:i.label}),e.jsx(h,{className:"ext"})]},i.to))}),e.jsxs(s.SectionHeader,{children:[e.jsx("h2",{children:"Profile Summary"}),e.jsx("p",{children:"Read-only overview for audit and reports."})]}),e.jsx("div",{id:"search-print-area",children:e.jsxs(s.Grid,{cols:"3",children:[e.jsx(s.Card,{children:e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"User ID"}),e.jsx("span",{className:"v",children:a.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:a.status})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Member Since"}),e.jsx("span",{className:"v",children:O})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Last Login"}),e.jsx("span",{className:"v",children:I})]})]})}),e.jsx(s.Card,{children:e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Organization"}),e.jsx("span",{className:"v",children:a.org})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Role"}),e.jsx("span",{className:"v",children:a.role})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Locale"}),e.jsx("span",{className:"v",children:a.locale})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Timezone"}),e.jsx("span",{className:"v",children:a.timezone})]})]})}),e.jsx(s.Card,{children:e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Build Time"}),e.jsx("span",{className:"v",children:A})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Last Commit"}),e.jsx("span",{className:"v",children:T})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"App Base"}),e.jsx("span",{className:"v",children:"/react-routes-theme/"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Environment"}),e.jsx("span",{className:"v",children:"Demo"})]})]})})]})}),e.jsxs(s.SectionHeader,{children:[e.jsx("h2",{children:"Security & Sessions"}),e.jsx("p",{children:"Active logins across your devices."})]}),e.jsxs(s.TableCard,{className:"card",children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:[e.jsx(G,{})," Device"]}),e.jsx("th",{children:"IP"}),e.jsx("th",{children:"Location"}),e.jsxs("th",{children:[e.jsx(X,{})," Last Active"]}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:ne.map(i=>e.jsxs("tr",{children:[e.jsxs("td",{children:[i.device,i.current?e.jsx("span",{className:"pill",children:"Current"}):null]}),e.jsx("td",{children:i.ip}),e.jsx("td",{children:i.location}),e.jsx("td",{children:`${j(i.lastActive)} ${v(i.lastActive)}`}),e.jsx("td",{children:e.jsxs("button",{className:"ghost",disabled:!0,title:"Demo display",children:[e.jsx(f,{})," Sign out"]})})]},i.id))})]}),e.jsx("div",{className:"rowActions",children:e.jsxs("button",{className:"ghost",onClick:()=>b("Disabled in demo","Sign out of all sessions is disabled in this demo."),children:[e.jsx(f,{})," Sign out of other sessions"]})})]}),e.jsxs(s.SectionHeader,{children:[e.jsx("h2",{children:"Notifications"}),e.jsx("p",{children:"Channel preferences (read-only for demo)."})]}),e.jsxs(s.Grid,{cols:"3",children:[e.jsxs(s.Card,{children:[e.jsxs("div",{className:"line",children:[e.jsx(w,{}),e.jsx("span",{children:"System Alerts"})]}),e.jsxs("div",{className:"toggles",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!0,readOnly:!0})," Email"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!0,readOnly:!0})," In-app"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",readOnly:!0})," SMS"]})]})]}),e.jsxs(s.Card,{children:[e.jsxs("div",{className:"line",children:[e.jsx(y,{}),e.jsx("span",{children:"Billing"})]}),e.jsxs("div",{className:"toggles",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!0,readOnly:!0})," Invoices"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!0,readOnly:!0})," Receipts"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",readOnly:!0})," Dunning"]})]})]}),e.jsxs(s.Card,{children:[e.jsxs("div",{className:"line",children:[e.jsx(k,{}),e.jsx("span",{children:"Team"})]}),e.jsxs("div",{className:"toggles",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!0,readOnly:!0})," Mentions"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",readOnly:!0})," Invites"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!0,readOnly:!0})," Approvals"]})]})]})]}),e.jsxs(s.SectionHeader,{children:[e.jsx("h2",{children:"Recent Activity"}),e.jsx("p",{children:"Latest events tied to your account."})]}),e.jsxs(s.Card,{className:"timeline card",children:[e.jsx("ul",{children:re.map(i=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"text",children:i.text}),e.jsx("div",{className:"stamp",children:`${j(i.stamp)} ${v(i.stamp)}`})]})]},i.id))}),e.jsxs("div",{className:"timelineLinks",children:[e.jsxs(x,{to:"/admin/activity",className:"ghost",children:[e.jsx(h,{})," View all activity"]}),e.jsxs(x,{to:"/admin/audit-log",className:"ghost",children:[e.jsx(h,{})," Open audit log"]})]})]}),e.jsxs(s.SectionHeader,{children:[e.jsx("h2",{children:"Explore More"}),e.jsx("p",{children:"Navigate across modules."})]}),e.jsxs(s.Grid,{cols:"4",children:[e.jsxs(x,{to:"/customers",className:"navBlock card",children:[e.jsx("h3",{children:"Customers"}),e.jsx("p",{children:"Browse accounts and relationships."}),e.jsxs("div",{className:"links",children:[e.jsx(n,{to:"/customers",children:"All Customers"}),e.jsx(n,{to:"/orders",children:"Orders"}),e.jsx(n,{to:"/invoices",children:"Invoices"})]})]}),e.jsxs(x,{to:"/products",className:"navBlock card",children:[e.jsx("h3",{children:"Catalog"}),e.jsx("p",{children:"Products, brands, attributes, price lists."}),e.jsxs("div",{className:"links",children:[e.jsx(n,{to:"/products",children:"Products"}),e.jsx(n,{to:"/products/brands",children:"Brands"}),e.jsx(n,{to:"/products/price-lists",children:"Price Lists"})]})]}),e.jsxs(x,{to:"/inventory",className:"navBlock card",children:[e.jsx("h3",{children:"Inventory"}),e.jsx("p",{children:"Lots, batches, warehouses, transfers."}),e.jsxs("div",{className:"links",children:[e.jsx(n,{to:"/inventory",children:"Overview"}),e.jsx(n,{to:"/inventory/transfers",children:"Transfers"}),e.jsx(n,{to:"/inventory/warehouses",children:"Warehouses"})]})]}),e.jsxs(x,{to:"/reports",className:"navBlock card",children:[e.jsx("h3",{children:"Reports"}),e.jsx("p",{children:"Sales, inventory, finance, procurement."}),e.jsxs("div",{className:"links",children:[e.jsx(n,{to:"/reports/sales",children:"Sales"}),e.jsx(n,{to:"/reports/inventory",children:"Inventory"}),e.jsx(n,{to:"/reports/finance",children:"Finance"})]})]})]}),e.jsxs(s.Card,{className:"danger card",children:[e.jsxs("div",{className:"title",children:[e.jsx(V,{})," Account Controls"]}),e.jsx("p",{children:"These actions are disabled in the demo."}),e.jsxs("div",{className:"row",children:[e.jsxs("button",{className:"ghost",onClick:()=>b("Disabled in demo","Deactivating account is disabled in this demo."),children:[e.jsx(N,{})," Deactivate"]}),e.jsxs("button",{className:"ghost",onClick:()=>b("Disabled in demo","Deleting account is disabled in this demo."),children:[e.jsx(N,{})," Delete"]})]})]}),r.open&&e.jsx(s.ModalOverlay,{onClick:$,children:e.jsxs(s.Modal,{role:"dialog","aria-modal":"true",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"head",children:[e.jsx(f,{}),e.jsx("h3",{children:r.title})]}),e.jsx("p",{children:r.message}),e.jsx("div",{className:"actions",children:e.jsxs("button",{onClick:$,children:[e.jsx(N,{})," Close"]})})]})})]})}export{ce as default};
