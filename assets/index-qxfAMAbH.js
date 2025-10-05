import{d as v,q as R,u as M,a as T,r as d,j as e,N as a}from"./index-BM8H5dnP.js";const m="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",o="var(--card, #111318)",l="var(--border, #23262d)",r="var(--accent, #5aa9ff)",h="var(--accent-soft, rgba(90,169,255,0.15))",I="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",k={Page:v.div`
        width: 100%;
        color: ${m};
        display: block;

        .muted {
            color: ${c};
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .inline {
            color: ${r};
            text-decoration: none;
        }
        .inline:hover {
            text-decoration: underline;
        }

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-bottom: 12px;
            color: ${c};
            a {
                color: ${c};
            }
            a:hover {
                color: ${r};
            }
            .current {
                color: ${m};
                font-weight: 600;
            }
        }

        .page-actions {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 16px;
            .left h1 {
                font-family: "Antonio", sans-serif;
                font-weight: 700;
                margin-bottom: 6px;
            }
            .left .meta {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${c};
            }
            .left .meta .sep {
                opacity: 0.6;
            }
            .badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 2px 8px;
                border-radius: 999px;
                font-size: 12px;
                border: 1px solid ${l};
                background: ${o};
                color: ${m};
            }
            .badge.ok {
                border-color: ${r};
                box-shadow: 0 0 0 3px ${h};
            }
            .right {
                display: flex;
                gap: 8px;
            }
        }

        .tabs {
            display: flex;
            gap: 10px;
            margin: 10px 0 18px;
            a {
                padding: 8px 12px;
                border: 1px solid ${l};
                border-radius: 8px;
                text-decoration: none;
                color: ${c};
                background: ${o};
                transition: 0.2s ease;
            }
            a:hover {
                color: ${r};
                border-color: ${r};
                box-shadow: 0 0 0 3px ${h};
            }
        }

        .content-grid {
            display: grid;
            grid-template-columns: 2.2fr 1.3fr;
            gap: 16px;
        }

        .card {
            background: ${o};
            border: 1px solid ${l};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${I};
        }

        .identity {
            display: grid;
            grid-template-columns: 120px 1fr auto;
            gap: 16px;
            align-items: start;
        }

        .identity .avatar img {
            width: 120px;
            height: 120px;
            border-radius: 12px;
            object-fit: cover;
            border: 1px solid ${l};
        }

        .identity .who h2 {
            margin-bottom: 6px;
        }
        .identity .info-cols {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px 18px;
        }
        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .chip,
        .chip.alt {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid ${l};
            text-decoration: none;
            color: ${c};
            background: color-mix(in oklab, ${o} 92%, transparent);
            font-size: 12px;
            transition: 0.2s;
        }
        .chip:hover {
            color: ${r};
            border-color: ${r};
        }
        .chip.alt:hover {
            color: ${r};
            border-color: ${r};
        }

        .identity .actions {
            display: flex;
            flex-direction: column;
            gap: 8px;
            button {
                width: 220px;
            }
        }

        .kpis h3 {
            margin-bottom: 12px;
        }
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .kpi {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
            border: 1px dashed ${l};
            border-radius: 12px;
            padding: 12px;
            text-decoration: none;
            color: ${m};
            background: color-mix(in oklab, ${o} 96%, transparent);
            transition: 0.2s;
        }
        .kpi:hover {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${h};
        }
        .kpi .value {
            font-size: 24px;
            font-weight: 700;
        }
        .kpi .label {
            color: ${c};
        }

        .section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            h3 {
                margin: 0;
            }
        }

        .security-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
            margin-bottom: 14px;
        }
        .sec-block {
            border: 1px dashed ${l};
            border-radius: 10px;
            padding: 10px;
            background: color-mix(in oklab, ${o} 96%, transparent);
        }
        .sec-block .strong {
            font-weight: 700;
        }

        .sessions h4 {
            margin: 8px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,
        td {
            border-bottom: 1px solid ${l};
            padding: 10px;
            text-align: left;
        }
        thead th {
            color: ${r};
            background: ${o};
        }

        .table-perms td,
        .table-perms th {
            white-space: nowrap;
        }

        .manager {
            margin-top: 10px;
        }

        .timeline {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 12px;
            padding: 8px 0;
            border-bottom: 1px dashed ${l};
        }
        .timeline li:last-child {
            border-bottom: 0;
        }
        .timeline .when {
            color: ${c};
        }
        .timeline .event a {
            text-decoration: none;
            color: ${m};
        }
        .timeline .event a:hover {
            color: ${r};
        }

        .navhub .links {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
        }
        .hub-link {
            display: block;
            padding: 10px 12px;
            border: 1px solid ${l};
            border-radius: 10px;
            text-decoration: none;
            color: ${c};
            background: color-mix(in oklab, ${o} 96%, transparent);
            transition: 0.2s;
        }
        .hub-link:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${h};
        }

        .footer {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-end;
            margin-top: 14px;
            padding-top: 8px;
            border-top: 1px solid ${l};
        }

        /* buttons */
        button {
            background: ${o};
            color: ${m};
            border: 1px solid ${l};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: 0.25s ease;
        }
        button:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${h};
        }
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            box-shadow: none;
        }

        .btn-primary {
            background: color-mix(in oklab, ${r} 18%, ${o});
            border-color: ${r};
        }
        .btn-primary:hover {
            background: color-mix(in oklab, ${r} 24%, ${o});
        }

        .btn-danger,
        .btn-danger-outline {
            border-color: #b33a3a;
        }
        .btn-danger {
            background: #2a1111;
        }
        .btn-danger-outline {
            background: transparent;
        }
        .btn-secondary {
            background: ${o};
        }

        .linklike {
            background: transparent;
            border: none;
            color: ${r};
            cursor: pointer;
            padding: 0;
        }
        .linklike:hover {
            text-decoration: underline;
        }

        @media (max-width: 1200px) {
            .content-grid {
                grid-template-columns: 1fr;
            }
            .identity {
                grid-template-columns: 100px 1fr;
            }
            .identity .actions {
                grid-column: 1 / -1;
                flex-direction: row;
                flex-wrap: wrap;
            }
            .security-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .kpi-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .timeline li {
                grid-template-columns: 1fr;
            }
            .navhub .links {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
    `,ModalBackdrop:v.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        z-index: 50;
    `,ModalCard:v.div`
        width: min(560px, 92vw);
        .modal-actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            margin-top: 16px;
        }
        h3 {
            margin-bottom: 6px;
        }
    `},f=!0;function x(n){return String(n).padStart(2,"0")}function L(n){return new Date(n).toDateString()}function p(n){const t=new Date(n),u=t.toDateString(),s=`${x(t.getHours())}:${x(t.getMinutes())}:${x(t.getSeconds())}hrs`;return`${u} ${s}`}function E(n){const t=new Date(n);return`${x(t.getHours())}:${x(t.getMinutes())}:${x(t.getSeconds())}hrs`}const O=({title:n,message:t,confirmText:u="Confirm",cancelText:s="Cancel",onConfirm:g,onClose:b})=>e.jsx(k.ModalBackdrop,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:e.jsxs(k.ModalCard,{className:"card",children:[e.jsx("h3",{id:"confirm-title",children:n}),e.jsx("p",{className:"muted",children:t}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{onClick:b,className:"btn-secondary",children:s}),e.jsx("button",{onClick:g,className:"btn-danger",children:u})]})]})}),V=()=>{const{userId:n="USR-1001"}=R(),t=M(),{pathname:u}=T(),s=d.useMemo(()=>({id:n,name:"Aarav Malhotra",email:"aarav.malhotra@example.com",phone:"+91-98765-43210",status:"Active",avatar:"https://ui-avatars.com/api/?name=Aarav+Malhotra&background=111318&color=fff",role:"Admin",roles:["Admin","Approver","Analytics"],teams:["Core Ops","Revenue"],timezone:"Asia/Kolkata",createdAt:"2025-08-12T09:30:12+05:30",updatedAt:"2025-10-02T18:21:49+05:30",lastActiveAt:"2025-10-04T15:38:20+05:30",manager:{id:"USR-1002",name:"S. Iyer"},security:{twoFA:"Enabled",sessions:[{id:"SESS-01",device:"MacBook Pro",browser:"Chrome 128",ip:"103.24.55.10",at:"2025-10-04T15:38:20+05:30",location:"Bengaluru, IN"},{id:"SESS-02",device:"iPhone 15",browser:"Safari iOS",ip:"10.0.0.2",at:"2025-10-03T12:08:04+05:30",location:"Mumbai, IN"}],lastPasswordReset:"2025-09-10T11:20:00+05:30",recoveryEmail:"aarav.backup@example.com",loginAlerts:"On",allowedIPs:["103.24.55.0/24","10.0.0.0/8"]},permissionsSummary:[{group:"Users",read:!0,write:!1,approve:!0,export:!0},{group:"Orders",read:!0,write:!0,approve:!0,export:!0},{group:"Invoices",read:!0,write:!0,approve:!1,export:!0},{group:"Reports",read:!0,write:!1,approve:!1,export:!0},{group:"Settings",read:!0,write:!0,approve:!0,export:!1}],quickLinks:[{to:"/admin/users",label:"Back to Users"},{to:"/admin/roles",label:"Manage Roles"},{to:"/admin/permissions",label:"Permissions Matrix"},{to:"/admin/audit-log",label:"Audit Log"},{to:"/admin/system-status",label:"System Status"},{to:"/reports",label:"Reports Home"},{to:"/reports/finance",label:"Finance Reports"},{to:"/settings/profile",label:"My Profile"},{to:"/settings/appearance",label:"Appearance"},{to:"/tools/import-export",label:"Import / Export"}],contributions:[{label:"Orders Created",value:58,link:"/orders"},{label:"Invoices Issued",value:31,link:"/invoices"},{label:"Vendors Onboarded",value:12,link:"/vendors"},{label:"Shipments Dispatched",value:22,link:"/shipments"}],activity:[{id:"A-1007",at:"2025-10-04T14:55:40+05:30",text:"Approved invoice INV-2041",link:"/invoices/INV-2041"},{id:"A-1006",at:"2025-10-04T11:20:10+05:30",text:"Edited purchase order PO-9012",link:"/purchase-orders/PO-9012"},{id:"A-1005",at:"2025-10-03T17:08:30+05:30",text:"Created order ORD-3001",link:"/orders/ORD-3001"},{id:"A-1004",at:"2025-10-02T09:45:22+05:30",text:"Updated user permissions",link:"/admin/permissions"},{id:"A-1003",at:"2025-09-30T18:15:01+05:30",text:"Added vendor VND-881",link:"/vendors/VND-881"},{id:"A-1002",at:"2025-09-29T12:00:00+05:30",text:"Viewed finance report",link:"/reports/finance"}]}),[n]),[g,b]=d.useState(!1),[j,$]=d.useState({}),y=d.useCallback((i,P,D="Confirm")=>{$({title:i,message:P,confirmText:D}),b(!0)},[]),N=d.useCallback(()=>b(!1),[]),w=d.useCallback(i=>{y(i,"This is a demo preview. Actions are disabled here.")},[y]),A=d.useCallback(async()=>{try{await navigator.clipboard.writeText(window.location.href)}catch{}},[]),C=d.useCallback(()=>{const i="print-section-mode";document.body.classList.add(i);try{window.print()}finally{document.body.classList.remove(i)}},[]),S=d.useCallback(()=>t(`/admin/users/${s.manager.id}`),[t,s]);return e.jsxs(k.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(a,{to:"/admin",children:"Admin"}),e.jsx("span",{children:"/"}),e.jsx(a,{to:"/admin/users",children:"Users"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.name})]}),e.jsxs("div",{className:"page-actions",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:s.name}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:`badge ${s.status==="Active"?"ok":"warn"}`,children:s.status}),e.jsx("span",{className:"sep",children:"•"}),e.jsx("span",{className:"muted",children:"ID:"})," ",e.jsx("strong",{children:s.id}),e.jsx("span",{className:"sep",children:"•"}),e.jsx("span",{className:"muted",children:"Role:"})," ",e.jsx(a,{to:"/admin/roles",className:"inline",children:s.role})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{onClick:A,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{onClick:C,title:"Print this section",children:"Print"}),e.jsx("button",{className:"btn-primary",title:"Edit in display mode only",onClick:()=>t(`/admin/users/${s.id}`),children:"View"})]})]}),e.jsxs("div",{className:"tabs",children:[e.jsx("a",{href:"#overview",children:"Overview"}),e.jsx("a",{href:"#security",children:"Security"}),e.jsx("a",{href:"#permissions",children:"Permissions"}),e.jsx("a",{href:"#activity",children:"Activity"}),e.jsx("a",{href:"#navigation",children:"Navigation"})]}),e.jsxs("div",{id:"search-print-area",className:"content-grid",children:[e.jsxs("section",{id:"overview",className:"card identity",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:s.avatar,alt:`${s.name} avatar`})}),e.jsxs("div",{className:"who",children:[e.jsx("h2",{children:s.name}),e.jsxs("div",{className:"info-cols",children:[e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("span",{className:"muted",children:"Email:"})," ",e.jsx("a",{href:`mailto:${s.email}`,children:s.email})]}),e.jsxs("div",{children:[e.jsx("span",{className:"muted",children:"Phone:"})," ",e.jsx("a",{href:`tel:${s.phone}`,children:s.phone})]}),e.jsxs("div",{children:[e.jsx("span",{className:"muted",children:"Timezone:"})," ",s.timezone]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("span",{className:"muted",children:"Created:"})," ",p(s.createdAt)]}),e.jsxs("div",{children:[e.jsx("span",{className:"muted",children:"Updated:"})," ",p(s.updatedAt)]}),e.jsxs("div",{children:[e.jsx("span",{className:"muted",children:"Last Active:"})," ",p(s.lastActiveAt)]})]})]}),e.jsxs("div",{className:"chips",children:[s.roles.map(i=>e.jsx(a,{to:"/admin/roles",className:"chip",children:i},i)),s.teams.map(i=>e.jsx(a,{to:"/admin/users",className:"chip alt",children:i},i))]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{disabled:f,title:"Demo preview",children:"Reset Password (demo)"}),e.jsx("button",{disabled:f,title:"Demo preview",children:"Send Verification (demo)"}),e.jsx("button",{className:"btn-danger-outline",onClick:()=>w("Deactivate User"),title:"Demo preview",children:"Deactivate"})]})]}),e.jsxs("section",{className:"card kpis",children:[e.jsx("h3",{children:"Contributions"}),e.jsx("div",{className:"kpi-grid",children:s.contributions.map(i=>e.jsxs(a,{to:i.link,className:"kpi",children:[e.jsx("div",{className:"value",children:i.value}),e.jsx("div",{className:"label",children:i.label})]},i.label))})]}),e.jsxs("section",{id:"security",className:"card",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h3",{children:"Security"}),e.jsxs("div",{className:"sec-actions",children:[e.jsx("button",{disabled:f,title:"Demo preview",children:"Revoke Sessions (demo)"}),e.jsx("button",{className:"btn-danger-outline",onClick:()=>w("Force Password Reset"),title:"Demo preview",children:"Force Password Reset"})]})]}),e.jsxs("div",{className:"security-grid",children:[e.jsxs("div",{className:"sec-block",children:[e.jsx("div",{className:"muted",children:"2FA"}),e.jsx("div",{className:"strong",children:s.security.twoFA})]}),e.jsxs("div",{className:"sec-block",children:[e.jsx("div",{className:"muted",children:"Recovery Email"}),e.jsx("div",{children:s.security.recoveryEmail})]}),e.jsxs("div",{className:"sec-block",children:[e.jsx("div",{className:"muted",children:"Login Alerts"}),e.jsx("div",{children:s.security.loginAlerts})]}),e.jsxs("div",{className:"sec-block",children:[e.jsx("div",{className:"muted",children:"Last Password Reset"}),e.jsx("div",{children:p(s.security.lastPasswordReset)})]}),e.jsxs("div",{className:"sec-block",children:[e.jsx("div",{className:"muted",children:"Allowed IP Ranges"}),e.jsx("div",{className:"mono",children:s.security.allowedIPs.join(", ")})]})]}),e.jsxs("div",{className:"sessions",children:[e.jsx("h4",{children:"Recent Sessions"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Device"}),e.jsx("th",{children:"Browser"}),e.jsx("th",{children:"IP"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"When"})]})}),e.jsx("tbody",{children:s.security.sessions.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.device}),e.jsx("td",{children:i.browser}),e.jsx("td",{className:"mono",children:i.ip}),e.jsx("td",{children:i.location}),e.jsx("td",{children:p(i.at)})]},i.id))})]})]})]}),e.jsxs("section",{id:"permissions",className:"card",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h3",{children:"Permissions"}),e.jsx(a,{to:"/admin/permissions",className:"inline",children:"Open Matrix"})]}),e.jsxs("table",{className:"table-perms",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Group"}),e.jsx("th",{children:"Read"}),e.jsx("th",{children:"Write"}),e.jsx("th",{children:"Approve"}),e.jsx("th",{children:"Export"})]})}),e.jsx("tbody",{children:s.permissionsSummary.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(a,{to:"/admin/permissions",children:i.group})}),e.jsx("td",{children:i.read?"Yes":"—"}),e.jsx("td",{children:i.write?"Yes":"—"}),e.jsx("td",{children:i.approve?"Yes":"—"}),e.jsx("td",{children:i.export?"Yes":"—"})]},i.group))})]}),e.jsxs("div",{className:"manager",children:[e.jsx("span",{className:"muted",children:"Manager:"})," ",e.jsx("button",{className:"linklike",onClick:S,children:s.manager.name})]})]}),e.jsxs("section",{id:"activity",className:"card",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h3",{children:"Activity"}),e.jsx(a,{to:"/admin/audit-log",className:"inline",children:"Full Audit Log"})]}),e.jsx("ol",{className:"timeline",children:s.activity.map(i=>e.jsxs("li",{children:[e.jsx("div",{className:"when",children:p(i.at)}),e.jsx("div",{className:"event",children:e.jsx(a,{to:i.link,children:i.text})})]},i.id))})]}),e.jsxs("section",{id:"navigation",className:"card navhub",children:[e.jsx("h3",{children:"Quick Navigation"}),e.jsxs("div",{className:"links",children:[s.quickLinks.map(i=>e.jsx(a,{to:i.to,className:"hub-link",children:i.label},i.label)),e.jsx(a,{to:"/customers",className:"hub-link",children:"Customers"}),e.jsx(a,{to:"/orders",className:"hub-link",children:"Orders"}),e.jsx(a,{to:"/invoices",className:"hub-link",children:"Invoices"}),e.jsx(a,{to:"/shipments",className:"hub-link",children:"Shipments"}),e.jsx(a,{to:"/vendors",className:"hub-link",children:"Vendors"}),e.jsx(a,{to:"/purchase-orders",className:"hub-link",children:"Purchase Orders"}),e.jsx(a,{to:"/inventory",className:"hub-link",children:"Inventory"}),e.jsx(a,{to:"/reports/sales",className:"hub-link",children:"Sales Reports"}),e.jsx(a,{to:"/reports/inventory",className:"hub-link",children:"Inventory Reports"}),e.jsx(a,{to:"/settings",className:"hub-link",children:"Settings"}),e.jsx(a,{to:"/tools/import-export",className:"hub-link",children:"Import / Export"})]})]})]}),e.jsxs("footer",{className:"muted footer",children:[e.jsxs("span",{children:["Created: ",L(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Last updated: ",p(s.updatedAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Local time: ",E(s.lastActiveAt)]})]}),g&&e.jsx(O,{title:j.title,message:j.message,confirmText:j.confirmText,onConfirm:N,onClose:N})]})};export{V as default};
