import{d as c,u as O,r as u,j as e,N as t}from"./index-Dm9gfKqL.js";const l="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",n="var(--card, #111318)",s="var(--border, #23262d)",r="var(--accent, #5aa9ff)",S="var(--accent-soft, rgba(90,169,255,0.15))",j="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",p={Wrapper:c.div`
        width: 100%;
        color: ${l};
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,Breadcrumbs:c.nav`
        font-size: 12px;
        color: ${o};
        .crumb a {
            color: ${o};
        }
        .crumb a:hover {
            color: ${r};
        }
        .sep {
            margin: 0 6px;
            opacity: 0.8;
        }
        .current {
            color: ${l};
        }
    `,Header:c.header`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        .left h1 {
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .left .sub {
            color: ${o};
        }
        .right .btnRow {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnRow .btn,
        .btnRow a.btn {
            background: ${n};
            color: ${l};
            border: 1px solid ${s};
            padding: 8px 12px;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        .btnRow .btn:hover,
        .btnRow a.btn:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnRow .subtle {
            background: transparent;
        }
    `,Toolbar:c.section`
        display: grid;
        grid-template-columns: 1fr 1.2fr auto;
        gap: 12px;
        align-items: center;
        padding: 12px;
        border: 1px solid ${s};
        border-radius: 12px;
        background: ${n};
        box-shadow: ${j};

        .searchCol input {
            width: 100%;
            height: 40px;
            border-radius: 8px;
            border: 1px solid ${s};
            background: ${n};
            color: ${l};
            padding: 0 12px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .searchCol input::placeholder {
            color: ${o};
        }
        .searchCol input:focus {
            border-color: ${r};
            outline: none;
            box-shadow: 0 0 0 3px ${S};
        }

        .filtersCol {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }
        .chips {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${s};
            background: transparent;
            color: ${o};
            padding: 6px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .chip:hover {
            color: ${r};
            border-color: ${r};
        }
        .chip.active {
            color: ${r};
            border-color: ${r};
            background: color-mix(in oklab, ${r} 12%, transparent);
        }

        .selectWrap {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .selectWrap label {
            color: ${o};
        }
        .selectWrap select {
            height: 36px;
            border-radius: 8px;
            border: 1px solid ${s};
            background: ${n};
            color: ${l};
            padding: 0 10px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .selectWrap select:focus {
            border-color: ${r};
            outline: none;
            box-shadow: 0 0 0 3px ${S};
        }

        .actionsCol {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-self: end;
        }
        .btn,
        a.btn {
            border: 1px solid ${s};
            background: ${n};
            color: ${l};
            padding: 8px 12px;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        .btn:hover,
        a.btn:hover {
            border-color: ${r};
            color: ${r};
        }
        .primary {
            border-color: ${r};
            color: ${r};
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
    `,QuickLinks:c.nav`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        a {
            border: 1px solid ${s};
            background: transparent;
            color: ${o};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        a:hover {
            color: ${r};
            border-color: ${r};
        }
    `,StatsRow:c.section`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(4, minmax(0, 1fr));

        .card.stat {
            background: ${n};
            border: 1px solid ${s};
            border-radius: 12px;
            padding: 14px;
            box-shadow: ${j};
        }
        .label {
            color: ${o};
            font-size: 12px;
        }
        .value {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin-top: 4px;
        }
        .hint {
            color: ${o};
            font-size: 12px;
            margin-top: 2px;
        }
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,TableWrap:c.section`
        width: 100%;
        border: 1px solid ${s};
        border-radius: 12px;
        overflow: hidden;
        background: color-mix(in oklab, ${n} 96%, transparent);
        box-shadow: ${j};

        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${n};
            color: ${l};
            border-bottom: 1px solid ${s};
            text-align: left;
            padding: 10px;
            font-weight: 600;
        }
        tbody td {
            padding: 12px 10px;
            border-bottom: 1px solid ${s};
            vertical-align: middle;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .empty {
            text-align: center;
            padding: 28px 0;
        }
        .empty .title {
            font-weight: 600;
        }
        .empty .sub {
            color: ${o};
        }

        .userCell {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            border: 1px solid ${s};
            background: ${n};
            font-size: 12px;
        }
        .userMeta .name {
            color: ${l};
            text-decoration: none;
        }
        .userMeta .name:hover {
            color: ${r};
        }
        .userMeta .id {
            color: ${o};
            font-size: 12px;
        }

        .link {
            color: ${l};
            text-decoration: none;
        }
        .link:hover {
            color: ${r};
        }

        .pill {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${s};
            color: ${o};
            font-size: 12px;
        }
        .pill.active {
            color: ${r};
            border-color: ${r};
        }
        .pill.pending {
            color: ${l};
            border-color: ${s};
            background: rgba(255, 255, 255, 0.04);
        }
        .pill.suspended {
            color: ${o};
            border-style: dashed;
        }

        .rowActions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .btnRow,
        .btnRow.subtle {
            border: 1px solid ${s};
            background: ${n};
            color: ${l};
            padding: 6px 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .btnRow.subtle {
            background: transparent;
        }
        .btnRow:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnRow.danger:hover {
            color: #ff7a7a;
            border-color: #ff7a7a;
        }
    `,FooterLinks:c.footer`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        .group {
            border: 1px solid ${s};
            border-radius: 12px;
            background: ${n};
            padding: 12px;
        }
        .title {
            font-weight: 600;
            margin-bottom: 8px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .links a {
            border: 1px solid ${s};
            border-radius: 999px;
            padding: 6px 10px;
            text-decoration: none;
            color: ${o};
            transition: all 0.2s ease;
        }
        .links a:hover {
            color: ${r};
            border-color: ${r};
        }
        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,Modal:c.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .box {
            position: relative;
            width: min(720px, 96vw);
            background: ${n};
            border: 1px solid ${s};
            border-radius: 12px;
            box-shadow: ${j};
            padding: 16px;
        }
        .head h3 {
            margin: 0 0 6px 0;
        }
        .body {
            color: ${l};
        }
        .body .modalList {
            margin: 8px 0 0 16px;
        }
        .body .modalList li {
            margin: 4px 0;
            color: ${o};
        }
        .foot {
            margin-top: 12px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .foot .btn {
            border: 1px solid ${s};
            background: ${n};
            color: ${l};
            padding: 8px 12px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .foot .btn:hover {
            border-color: ${r};
            color: ${r};
        }
    `},M=[{id:"USR-1001",name:"Aarav Sharma",email:"aarav.sharma@example.com",role:"Admin",status:"Active",createdISO:"2025-01-12T10:05:10+05:30",lastActiveISO:"2025-10-04T15:38:20+05:30"},{id:"USR-1002",name:"Ishita Rao",email:"ishita.rao@example.com",role:"Manager",status:"Active",createdISO:"2024-11-28T11:12:01+05:30",lastActiveISO:"2025-10-03T09:18:45+05:30"},{id:"USR-1003",name:"Kabir Mehta",email:"kabir.mehta@example.com",role:"Staff",status:"Pending",createdISO:"2025-09-04T08:32:47+05:30",lastActiveISO:""},{id:"USR-1004",name:"Rhea Kapoor",email:"rhea.kapoor@example.com",role:"Viewer",status:"Suspended",createdISO:"2024-08-20T19:51:13+05:30",lastActiveISO:"2025-06-14T22:07:10+05:30"},{id:"USR-1005",name:"Dev Mishra",email:"dev.mishra@example.com",role:"Staff",status:"Active",createdISO:"2025-02-01T14:09:22+05:30",lastActiveISO:"2025-10-04T11:05:00+05:30"},{id:"USR-1006",name:"Meera Narang",email:"meera.narang@example.com",role:"Manager",status:"Active",createdISO:"2024-12-05T16:20:00+05:30",lastActiveISO:"2025-09-27T18:40:12+05:30"},{id:"USR-1007",name:"Arjun Verma",email:"arjun.verma@example.com",role:"Viewer",status:"Active",createdISO:"2023-11-02T12:40:35+05:30",lastActiveISO:"2025-10-02T08:10:03+05:30"},{id:"USR-1008",name:"Sara Qureshi",email:"sara.qureshi@example.com",role:"Staff",status:"Pending",createdISO:"2025-07-18T13:03:10+05:30",lastActiveISO:""}],y=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function U(d){if(!d)return"—";const i=new Date(d),b=i.getDate().toString().padStart(2,"0");return`${y[i.getDay()]} ${N[i.getMonth()]} ${b} ${i.getFullYear()}`}function L(d){if(!d)return"—";const i=new Date(d),b=i.getDate().toString().padStart(2,"0"),m=i.getHours().toString().padStart(2,"0"),v=i.getMinutes().toString().padStart(2,"0"),h=i.getSeconds().toString().padStart(2,"0");return`${y[i.getDay()]} ${N[i.getMonth()]} ${b} ${i.getFullYear()} ${m}:${v}:${h}hrs`}const F=["All","Active","Pending","Suspended"],P=["All","Admin","Manager","Staff","Viewer"];function E(){const d=O(),[i,b]=u.useState(""),[m,v]=u.useState("All"),[h,k]=u.useState("All"),[$,f]=u.useState({open:!1,title:"",body:""}),w=u.useMemo(()=>{const a=i.trim().toLowerCase();return M.filter(x=>{const R=m==="All"?!0:x.status===m,T=h==="All"?!0:x.role===h,C=`${x.name} ${x.email} ${x.id} ${x.role}`.toLowerCase(),I=a.length===0||C.includes(a);return R&&T&&I})},[i,m,h]),g=a=>{f({open:!0,title:a,body:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is a read-only showcase. Actions are intentionally disabled."}),e.jsxs("ul",{className:"modalList",children:[e.jsx("li",{children:"Use deep links to explore detail views."}),e.jsx("li",{children:"Try navigation shortcuts from the sidebar or quick links below."}),e.jsx("li",{children:"Print the table section via the toolbar."})]})]})})},A=()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>{document.body.classList.remove("print-section-mode")},300)};return e.jsxs(p.Wrapper,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(p.Breadcrumbs,{"aria-label":"Breadcrumbs",children:[e.jsx("span",{className:"crumb",children:e.jsx(t,{to:"/home",end:!0,children:"Home"})}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"crumb",children:e.jsx(t,{to:"/admin/system-status",end:!0,children:"Admin"})}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"crumb current","aria-current":"page",children:"Users"})]}),e.jsxs(p.Header,{children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Users"}),e.jsx("p",{className:"sub",children:"Manage directory, roles, access and audit trails. Explore deep links and route structure."})]}),e.jsx("div",{className:"right",children:e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{className:"btn subtle",onClick:()=>d("/admin/roles"),title:"Open Roles",children:"Roles"}),e.jsx("button",{className:"btn subtle",onClick:()=>d("/admin/permissions"),title:"Open Permissions",children:"Permissions"}),e.jsx("button",{className:"btn subtle",onClick:()=>d("/admin/audit-log"),title:"Open Audit Log",children:"Audit Log"}),e.jsx("button",{className:"btn subtle",onClick:()=>d("/admin/feature-flags"),title:"Feature Flags",children:"Feature Flags"}),e.jsx("button",{className:"btn subtle",onClick:()=>d("/admin/integrations"),title:"Integrations",children:"Integrations"})]})})]}),e.jsxs(p.Toolbar,{role:"region","aria-label":"Users toolbar",children:[e.jsx("div",{className:"searchCol",children:e.jsx("input",{value:i,onChange:a=>b(a.target.value),placeholder:"Search users (name, email, id)","aria-label":"Search users"})}),e.jsxs("div",{className:"filtersCol",children:[e.jsx("div",{className:"chips",role:"tablist","aria-label":"Status filter",children:F.map(a=>e.jsx("button",{className:`chip ${a===m?"active":""}`,onClick:()=>v(a),role:"tab","aria-selected":a===m,children:a},a))}),e.jsxs("div",{className:"selectWrap",children:[e.jsx("label",{htmlFor:"roleFilter",children:"Role"}),e.jsx("select",{id:"roleFilter",value:h,onChange:a=>k(a.target.value),"aria-label":"Role filter",children:P.map(a=>e.jsx("option",{value:a,children:a},a))})]})]}),e.jsxs("div",{className:"actionsCol",children:[e.jsx("button",{className:"btn primary",onClick:()=>g("Add User"),"aria-disabled":"true",title:"Read-only showcase",children:"+ Add User"}),e.jsx("button",{className:"btn",onClick:()=>g("Import CSV"),"aria-disabled":"true",title:"Read-only showcase",children:"Import"}),e.jsx(t,{className:"btn",to:"/tools/import-export",end:!0,title:"Export / Import",children:"Export"}),e.jsx("button",{className:"btn",onClick:A,title:"Print users section",children:"Print"})]})]}),e.jsxs(p.QuickLinks,{role:"navigation","aria-label":"Admin quick links",children:[e.jsx(t,{to:"/admin/users",end:!0,children:"Users"}),e.jsx(t,{to:"/admin/roles",end:!0,children:"Roles"}),e.jsx(t,{to:"/admin/permissions",end:!0,children:"Permissions"}),e.jsx(t,{to:"/admin/audit-log",end:!0,children:"Audit Log"}),e.jsx(t,{to:"/admin/activity",end:!0,children:"Activity"}),e.jsx(t,{to:"/admin/system-status",end:!0,children:"System Status"}),e.jsx(t,{to:"/admin/feature-flags",end:!0,children:"Feature Flags"}),e.jsx(t,{to:"/admin/tenants",end:!0,children:"Tenants"}),e.jsx(t,{to:"/admin/integrations",end:!0,children:"Integrations"}),e.jsx(t,{to:"/admin/email-templates",end:!0,children:"Email Templates"}),e.jsx(t,{to:"/admin/sms-templates",end:!0,children:"SMS Templates"}),e.jsx(t,{to:"/settings/notifications",end:!0,children:"Notification Settings"})]}),e.jsxs(p.StatsRow,{children:[e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"Total Users"}),e.jsx("div",{className:"value",children:"8"}),e.jsx("div",{className:"hint",children:"Directory size"})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"Active"}),e.jsx("div",{className:"value",children:"5"}),e.jsx("div",{className:"hint",children:"Signed in recently"})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"Pending"}),e.jsx("div",{className:"value",children:"2"}),e.jsx("div",{className:"hint",children:"Awaiting invite acceptance"})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"label",children:"Suspended"}),e.jsx("div",{className:"value",children:"1"}),e.jsx("div",{className:"hint",children:"Temporarily blocked"})]})]}),e.jsx(p.TableWrap,{id:"search-print-area",role:"region","aria-label":"Users table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"User"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Active"}),e.jsx("th",{children:"Created"}),e.jsx("th",{style:{width:320},children:"Actions"})]})}),e.jsxs("tbody",{children:[w.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"title",children:"No results"}),e.jsx("div",{className:"sub",children:"Try changing filters or clearing the search."})]})})}),w.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"userCell",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:a.name.split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase()}),e.jsxs("div",{className:"userMeta",children:[e.jsx(t,{className:"name",to:`/admin/users/${a.id}`,title:"Open user detail",end:!0,children:a.name}),e.jsx("div",{className:"id",children:a.id})]})]})}),e.jsx("td",{children:e.jsx("a",{className:"link",href:`mailto:${a.email}`,children:a.email})}),e.jsx("td",{children:a.role}),e.jsx("td",{children:e.jsx("span",{className:`pill ${a.status.toLowerCase()}`,children:a.status})}),e.jsx("td",{children:a.lastActiveISO?L(a.lastActiveISO):"—"}),e.jsx("td",{children:U(a.createdISO)}),e.jsx("td",{children:e.jsxs("div",{className:"rowActions",children:[e.jsx(t,{className:"btnRow subtle",to:`/admin/users/${a.id}`,end:!0,children:"View"}),e.jsx(t,{className:"btnRow subtle",to:`/admin/audit-log?user=${a.id}`,end:!0,children:"Audit"}),e.jsx(t,{className:"btnRow subtle",to:`/admin/permissions?user=${a.id}`,end:!0,children:"Permissions"}),e.jsx("button",{className:"btnRow",onClick:()=>g(`Impersonate ${a.name}`),"aria-disabled":"true",title:"Read-only showcase",children:"Impersonate"}),e.jsx("button",{className:"btnRow danger",onClick:()=>g(`Suspend ${a.name}`),"aria-disabled":"true",title:"Read-only showcase",children:"Suspend"})]})})]},a.id))]})]})}),e.jsxs(p.FooterLinks,{children:[e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"title",children:"Explore"}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/reports/customers",end:!0,children:"Customer Report"}),e.jsx(t,{to:"/reports/sales",end:!0,children:"Sales Report"}),e.jsx(t,{to:"/reports/inventory",end:!0,children:"Inventory Report"}),e.jsx(t,{to:"/tools/theme-tokens",end:!0,children:"Theme Tokens"})]})]}),e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"title",children:"Shortcuts"}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/settings/appearance",end:!0,children:"Appearance"}),e.jsx(t,{to:"/settings/notifications",end:!0,children:"Notifications"}),e.jsx(t,{to:"/settings/print-templates",end:!0,children:"Print Templates"}),e.jsx(t,{to:"/help",end:!0,children:"Help Center"})]})]})]}),$.open&&e.jsxs(p.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"modalTitle",children:[e.jsx("div",{className:"overlay",onClick:()=>f({open:!1,title:"",body:""})}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"head",children:e.jsx("h3",{id:"modalTitle",children:$.title})}),e.jsx("div",{className:"body",children:$.body}),e.jsx("div",{className:"foot",children:e.jsx("button",{className:"btn",onClick:()=>f({open:!1,title:"",body:""}),children:"Close"})})]})]})]})}export{E as default};
