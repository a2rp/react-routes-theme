import{d as p,u as T,s as M,r as b,j as e,ag as A,N as t,b as I,t as E,e as L,w as h,ah as z,a2 as D,n as U,F as P}from"./index-CvWKwy17.js";const o="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",n="var(--card, #111318)",r="var(--border, #23262d)",a="var(--accent, #5aa9ff)",v="var(--bg, #0d1117)",u="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",x={Page:p.div`
        color: ${o};
        width: 100%;
        display: block;
    `,Header:p.header`
        background: ${n};
        border: 1px solid ${r};
        border-radius: 12px;
        padding: 18px 18px 12px;
        margin-bottom: 16px;
        box-shadow: ${u};

        .titleRow {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 16px;
            align-items: start;
        }
        .left .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            color: ${c};
            margin-bottom: 4px;
            user-select: none;
        }
        h1 {
            font-size: 24px;
            line-height: 1.2;
            margin-bottom: 6px;
            letter-spacing: 0.4px;
        }
        .sub {
            color: ${c};
            max-width: 70ch;
        }
        .right {
            display: grid;
            gap: 8px;
            justify-items: end;
        }
        .meta {
            font-size: 12px;
            color: ${c};
            strong {
                color: ${o};
                margin-left: 6px;
            }
        }
        .links {
            display: flex;
            gap: 8px;
            a {
                border: 1px solid ${r};
                background: ${v};
                padding: 6px 10px;
                border-radius: 8px;
                text-decoration: none;
                color: ${o};
                transition: border-color 0.2s, color 0.2s, background 0.2s;
            }
            a:hover {
                color: ${a};
                border-color: ${a};
            }
        }
    `,Actions:p.div`
        margin-top: 12px;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: center;

        .left {
            display: flex;
            flex-wrap: wrap;
            gap: 10px 12px;
            align-items: center;
        }

        .search {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border: 1px solid ${r};
            border-radius: 10px;
            background: ${v};
            input {
                background: transparent;
                border: 0;
                color: ${o};
                outline: none;
                font-size: 13px;
                width: 260px;
            }
        }

        .badges {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .badge {
            border: 1px solid ${r};
            background: ${v};
            color: ${c};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
        }

        .right {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }

        button,
        .ghost {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 10px;
            font-weight: 600;
            border: 1px solid ${r};
            background: ${n};
            color: ${o};
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
        }
        button:hover,
        .ghost:hover {
            color: ${a};
            border-color: ${a};
            background: rgba(0, 0, 0, 0.08);
        }
        button:active {
            transform: translateY(1px);
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .primary {
            box-shadow: ${u};
        }
    `,QuickNav:p.nav`
        margin-top: 12px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border: 1px solid ${r};
            border-radius: 8px;
            color: ${c};
            text-decoration: none;
            transition: color 0.2s, border-color 0.2s, background 0.2s;
            background: ${v};
        }
        a:hover {
            color: ${a};
            border-color: ${a};
        }
    `,TableWrap:p.div`
        border: 1px solid ${r};
        border-radius: 12px;
        background: ${n};
        box-shadow: ${u};
        overflow: hidden;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${n};
            text-align: left;
            padding: 12px 14px;
            border-bottom: 1px solid ${r};
            color: ${a};
            z-index: 1;
        }
        tbody td {
            padding: 12px 14px;
            border-bottom: 1px solid ${r};
            vertical-align: top;
        }

        .roleCell {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .avatar {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: grid;
            place-items: center;
            font-weight: 700;
            border: 1px solid ${r};
            background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.06),
                rgba(0, 0, 0, 0.06)
            );
        }
        .label .name {
            font-weight: 700;
        }
        .label .id {
            color: ${c};
            font-size: 12px;
        }

        .muted {
            color: ${c};
        }

        .permRow {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .chip {
            border: 1px solid ${r};
            padding: 4px 8px;
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.06);
            font-size: 12px;
            color: ${o};
        }
        .linkish {
            text-decoration: none;
            transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .linkish:hover {
            color: ${a};
            border-color: ${a};
            background: rgba(0, 0, 0, 0.08);
        }

        .status {
            padding: 4px 8px;
            border-radius: 999px;
            font-weight: 700;
            font-size: 12px;
            border: 1px solid ${r};
            background: rgba(0, 0, 0, 0.06);
        }
        .status.active {
        }
        .status.restricted {
            opacity: 0.9;
        }
        .status.deprecated {
            opacity: 0.7;
            text-decoration: line-through;
        }

        .datetime .d {
            font-weight: 600;
        }
        .datetime .t {
            color: ${c};
            font-size: 12px;
        }

        .rowActions {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            justify-content: flex-end;
        }
        .rowActions .sm {
            padding: 6px 8px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 12px;
        }
        .rowActions .ghost {
            border: 1px solid ${r};
            background: ${n};
            color: ${o};
            cursor: pointer;
            transition: color 0.2s, border-color 0.2s, background 0.2s,
                transform 0.05s;
        }
        .rowActions .ghost:hover {
            color: ${a};
            border-color: ${a};
            background: rgba(0, 0, 0, 0.08);
        }
        .rowActions .danger {
            border: 1px dashed ${r};
            background: ${n};
            color: ${o};
            cursor: not-allowed;
            opacity: 0.6;
        }
    `,Empty:p.div`
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: center;
        padding: 18px;
        .text {
            display: grid;
        }
        .text span {
            color: ${c};
        }
        .ghost {
            border: 1px solid ${r};
            background: ${n};
            color: ${o};
            padding: 6px 10px;
            border-radius: 8px;
            transition: color 0.2s, border-color 0.2s, background 0.2s;
            cursor: pointer;
        }
        .ghost:hover {
            color: ${a};
            border-color: ${a};
            background: rgba(0, 0, 0, 0.08);
        }
    `,InfoBar:p.div`
        position: sticky;
        bottom: 0;
        margin-top: 12px;
        background: ${n};
        border: 1px solid ${r};
        border-radius: 12px;
        padding: 10px 12px;
        box-shadow: ${u};
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 12px;

        .left {
            display: inline-flex;
            gap: 10px;
            align-items: center;
            color: ${c};
        }
        .right {
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }
        .right .ghost,
        .right .primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            border: 1px solid ${r};
            background: ${n};
            color: ${o};
            transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .right .ghost:hover {
            color: ${a};
            border-color: ${a};
            background: rgba(0, 0, 0, 0.08);
        }
        .right .primary {
            box-shadow: ${u};
        }
    `,ModalOverlay:p.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.45);
        z-index: 1000;
        padding: 16px;
    `,Modal:p.div`
        width: min(560px, 96vw);
        background: ${n};
        border: 1px solid ${r};
        border-radius: 14px;
        box-shadow: ${u};
        overflow: hidden;
        display: grid;

        .head {
            padding: 14px 16px;
            border-bottom: 1px solid ${r};
            h3 {
                margin: 0;
            }
        }
        .body {
            padding: 16px;
            color: ${o};
            p {
                margin: 0;
                color: ${o};
            }
        }
        .foot {
            padding: 12px 16px;
            border-top: 1px solid ${r};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            button {
                border: 1px solid ${r};
                background: ${n};
                color: ${o};
                padding: 8px 12px;
                border-radius: 10px;
                font-weight: 700;
                transition: color 0.2s, border-color 0.2s, background 0.2s;
            }
            button:hover {
                color: ${a};
                border-color: ${a};
                background: rgba(0, 0, 0, 0.08);
            }
            .primary {
                box-shadow: ${u};
            }
        }
    `},f=[{id:"ROLE-ADMIN",name:"Administrator",description:"Full platform access. Manage users, roles, billing, and all settings.",assignedUsers:6,permissions:["users.read","users.manage","roles.read","roles.manage","permissions.read","audit.read","settings.read","settings.manage","billing.read","billing.manage","features.toggle","webhooks.manage"],status:"Active",createdAtISO:"2025-07-12T09:21:33+05:30",updatedAtISO:"2025-10-04T15:38:20+05:30"},{id:"ROLE-MANAGER",name:"Manager",description:"Business operations control—orders, invoices, inventory, and reports.",assignedUsers:12,permissions:["orders.read","orders.manage","invoices.read","invoices.manage","inventory.read","inventory.adjust","reports.read","customers.read","vendors.read"],status:"Active",createdAtISO:"2025-06-03T11:08:04+05:30",updatedAtISO:"2025-09-30T10:10:10+05:30"},{id:"ROLE-ACCOUNTANT",name:"Accountant",description:"Finance surfaces—journals, ledgers, GST, and financial statements.",assignedUsers:4,permissions:["finance.read","journals.read","ledgers.read","gst.read","invoices.read","payments.read","reports.read"],status:"Restricted",createdAtISO:"2025-05-15T08:55:30+05:30",updatedAtISO:"2025-09-11T17:02:49+05:30"},{id:"ROLE-ANALYST",name:"Analyst",description:"View-only access to dashboards, trends, and analytics.",assignedUsers:8,permissions:["dashboard.read","reports.read","customers.read","inventory.read"],status:"Active",createdAtISO:"2025-02-21T14:40:02+05:30",updatedAtISO:"2025-08-22T10:00:00+05:30"},{id:"ROLE-OPERATOR",name:"Operator",description:"Day-to-day operations—orders, shipments, and printing.",assignedUsers:10,permissions:["orders.read","shipments.read","shipments.labels","print.read"],status:"Active",createdAtISO:"2025-01-05T12:12:12+05:30",updatedAtISO:"2025-09-10T12:12:12+05:30"},{id:"ROLE-LEGACY",name:"Legacy Role",description:"Deprecated role kept for compatibility with old projects.",assignedUsers:0,permissions:["*legacy.read"],status:"Deprecated",createdAtISO:"2024-12-10T19:01:00+05:30",updatedAtISO:"2025-01-10T09:00:00+05:30"}],F=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function w(g){const d=new Date(g),l=F[d.getDay()],j=q[d.getMonth()],m=String(d.getDate()).padStart(2,"0"),y=d.getFullYear();return`${l} ${j} ${m} ${y}`}function N(g){const d=new Date(g),l=String(d.getHours()).padStart(2,"0"),j=String(d.getMinutes()).padStart(2,"0"),m=String(d.getSeconds()).padStart(2,"0");return`${l}:${j}:${m}hrs`}function H(g){return`${w(g)} ${N(g)}`}function Y(){const g=T(),[d]=M(),[l,j]=b.useState(()=>d.get("q")??""),[m,y]=b.useState({open:!1,title:"",body:""}),k=b.useMemo(()=>{const s=l.trim().toLowerCase().split(/\s+/).filter(Boolean);return s.length===0?f:f.filter(i=>{const C=(i.name+" "+i.description+" "+i.permissions.join(" ")).toLowerCase();return s.every(R=>C.includes(R))})},[l]);b.useEffect(()=>{const s=new URLSearchParams(d);l?s.set("q",l):s.delete("q");const i={pathname:"/admin/roles",search:s.toString()?`?${s.toString()}`:""};g(i,{replace:!0})},[l]);const $=b.useCallback((s,i)=>{y({open:!0,title:s,body:i})},[]),S=b.useCallback(()=>y({open:!1,title:"",body:""}),[]),O=b.useCallback(()=>{const s="print-section-mode";document.body.classList.add(s);const i=()=>{document.body.classList.remove(s),window.removeEventListener("afterprint",i)};window.addEventListener("afterprint",i),window.print()},[]);return e.jsxs(x.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(x.Header,{id:"search-print-area",children:[e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"eyebrow",children:[e.jsx(A,{size:18})," Admin"]}),e.jsx("h1",{children:"Roles"}),e.jsx("p",{className:"sub",children:"Manage who sees what. Configure responsibilities across modules."})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:"Last updated:"}),e.jsx("strong",{children:H("2025-10-04T15:38:20+05:30")})]}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/admin/users",className:"ghost",children:"Users"}),e.jsx(t,{to:"/admin/permissions",className:"ghost",children:"Permissions"}),e.jsx(t,{to:"/admin/audit-log",className:"ghost",children:"Audit Log"}),e.jsx(t,{to:"/admin/system-status",className:"ghost",children:"System Status"})]})]})]}),e.jsxs(x.Actions,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"search",children:[e.jsx(I,{size:18}),e.jsx("input",{type:"text",value:l,onChange:s=>j(s.target.value),placeholder:"Search roles, descriptions, permissions…","aria-label":"Search roles"})]}),e.jsxs("div",{className:"badges",children:[e.jsxs("span",{className:"badge",children:["Total: ",f.length]}),e.jsxs("span",{className:"badge",children:["Active: ",f.filter(s=>s.status==="Active").length]}),e.jsxs("span",{className:"badge",children:["Restricted: ",f.filter(s=>s.status==="Restricted").length]}),e.jsxs("span",{className:"badge",children:["Deprecated: ",f.filter(s=>s.status==="Deprecated").length]})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("button",{className:"primary",disabled:!0,onClick:()=>$("Create role (disabled in demo)","This is a display-only demo. Creating or saving changes is intentionally disabled."),title:"Create role (demo)",children:[e.jsx(E,{size:18})," New Role"]}),e.jsxs("button",{className:"ghost",onClick:O,title:"Print role list",children:[e.jsx(L,{size:18})," Print"]})]})]}),e.jsxs(x.QuickNav,{children:[e.jsxs(t,{to:"/settings/appearance",children:[e.jsx(h,{})," Appearance"]}),e.jsxs(t,{to:"/settings/notifications",children:[e.jsx(h,{})," Notifications"]}),e.jsxs(t,{to:"/settings/tokens",children:[e.jsx(h,{})," API Tokens"]}),e.jsxs(t,{to:"/settings/webhooks",children:[e.jsx(h,{})," Webhooks"]}),e.jsxs(t,{to:"/reports/finance",children:[e.jsx(h,{})," Finance Report"]}),e.jsxs(t,{to:"/reports/inventory",children:[e.jsx(h,{})," Inventory Report"]}),e.jsxs(t,{to:"/help",children:[e.jsx(h,{})," Help Center"]}),e.jsxs(t,{to:"/faq",children:[e.jsx(h,{})," FAQ"]})]})]}),e.jsx(x.TableWrap,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"28rem"},children:"Role"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Users"}),e.jsx("th",{children:"Permissions"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{style:{width:"1%"},children:"Actions"})]})}),e.jsxs("tbody",{children:[k.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"roleCell",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:s.name.slice(0,2).toUpperCase()}),e.jsxs("div",{className:"label",children:[e.jsx("div",{className:"name",children:s.name}),e.jsx("div",{className:"id",children:s.id})]})]})}),e.jsx("td",{className:"muted",children:s.description}),e.jsx("td",{children:e.jsxs(t,{to:`/admin/users?q=${encodeURIComponent(s.name)}`,className:"chip linkish",title:"View users",children:[s.assignedUsers," users"]})}),e.jsx("td",{children:e.jsxs("div",{className:"permRow",children:[s.permissions.slice(0,5).map(i=>e.jsx("span",{className:"chip",children:i},i)),s.permissions.length>5&&e.jsxs(t,{to:`/admin/permissions?role=${encodeURIComponent(s.id)}`,className:"chip linkish",title:"View all permissions",children:["+",s.permissions.length-5," more"]})]})}),e.jsx("td",{children:e.jsx("span",{className:`status ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("td",{children:e.jsxs("div",{className:"datetime",children:[e.jsx("div",{className:"d",children:w(s.createdAtISO)}),e.jsx("div",{className:"t",children:N(s.createdAtISO)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"datetime",children:[e.jsx("div",{className:"d",children:w(s.updatedAtISO)}),e.jsx("div",{className:"t",children:N(s.updatedAtISO)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"rowActions",children:[e.jsxs(t,{to:`/admin/permissions?role=${encodeURIComponent(s.id)}`,className:"ghost sm",title:"View permissions",children:[e.jsx(A,{size:16})," Permissions"]}),e.jsxs("button",{className:"ghost sm",disabled:!0,onClick:()=>$("Edit role (demo)","Editing is disabled in this demo."),title:"Edit role (demo)",children:[e.jsx(z,{size:16})," Edit"]}),e.jsxs("button",{className:"danger sm",disabled:!0,onClick:()=>$("Delete role (disabled)","Destructive actions are disabled here."),title:"Delete role (demo)",children:[e.jsx(D,{size:16})," Delete"]})]})})]},s.id)),k.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsxs(x.Empty,{children:[e.jsx(U,{size:22}),e.jsxs("div",{className:"text",children:[e.jsx("strong",{children:"No roles match your search."}),e.jsx("span",{children:"Try a simpler keyword or clear the query."})]}),e.jsx("button",{className:"ghost",onClick:()=>j(""),children:"Clear search"})]})})})]})]})}),e.jsxs(x.InfoBar,{children:[e.jsxs("div",{className:"left",children:[e.jsx(P,{size:18}),e.jsx("span",{children:"This is a display-only demo. Creating, editing, and deleting are disabled."})]}),e.jsxs("div",{className:"right",children:[e.jsx(t,{to:"/changelog",className:"ghost",children:"Changelog"}),e.jsx(t,{to:"/roadmap",className:"ghost",children:"Roadmap"}),e.jsx(t,{to:"/feedback",className:"primary",children:"Send feedback"})]})]}),m.open&&e.jsx(x.ModalOverlay,{role:"dialog","aria-modal":"true",children:e.jsxs(x.Modal,{children:[e.jsx("div",{className:"head",children:e.jsx("h3",{children:m.title})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:m.body})}),e.jsx("div",{className:"foot",children:e.jsx("button",{className:"primary",onClick:S,children:"OK"})})]})})]})}export{Y as default};
