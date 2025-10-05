import{d as P,r as p,j as e,N as k,L as i}from"./index-Dm9gfKqL.js";import{Z as O,j as b,n as w,a as $,u as q,v as H,w as B,m as j,H as A,V as C,x as E,_ as S,M as I,t as M,k as v,S as z,T as U,$ as D,a0 as G,r as N,q as F}from"./index-BjqOZRWg.js";const r="var(--text, #f3f4f6)",m="var(--muted, #a0a0a7)",x="var(--card, #111318)",l="var(--border, #23262d)",a="var(--accent, #5aa9ff)",Z={Page:P.div`
        color: ${r};
        padding: 16px 16px 32px;

        .muted {
            color: ${m};
        }
        .small {
            font-size: 12px;
        }

        .card {
            background: ${x};
            border: 1px solid ${l};
            border-radius: 12px;
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${l};
            background: color-mix(in oklab, ${a} 12%, transparent);
            color: ${a};
            font-size: 12px;
            margin-left: 8px;
        }
        .badge.soft {
            background: color-mix(in oklab, ${a} 8%, transparent);
            color: ${r};
            margin-left: 8px;
        }

        .btn {
            background: ${x};
            color: ${r};
            border: 1px solid ${l};
            padding: 8px 12px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            font-weight: 500;
        }
        .btn:hover {
            color: ${a};
            border-color: ${a};
            background: rgba(0, 0, 0, 0.06);
        }
        .btn[aria-disabled],
        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .btn.ghost {
            background: transparent;
        }
        .btn.primary {
            border-color: ${a};
            color: ${a};
            background: color-mix(in oklab, ${a} 8%, transparent);
        }
        .btn.primary:hover {
            background: color-mix(in oklab, ${a} 14%, transparent);
        }

        .iconBtn {
            border: 1px solid ${l};
            background: ${x};
            color: ${r};
            border-radius: 8px;
            width: 36px;
            height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .iconBtn:hover {
            color: ${a};
            border-color: ${a};
        }

        .pageHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 16px;
            flex-wrap: wrap;
        }
        .breadcrumbs {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${m};
        }
        .breadcrumbs a {
            color: ${m};
        }
        .breadcrumbs a:hover {
            color: ${a};
        }
        .breadcrumbs .current {
            color: ${r};
        }

        .actions {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .identity {
            display: grid;
            grid-template-columns: 96px 1fr auto;
            gap: 16px;
            align-items: center;
            margin-bottom: 16px;
        }
        .identity .avatar {
            width: 96px;
            height: 96px;
            border-radius: 999px;
            display: grid;
            place-items: center;
            font-size: 36px;
            font-weight: 700;
            font-family: "Antonio", sans-serif;
            background: color-mix(in oklab, ${a} 10%, transparent);
            border: 1px solid ${l};
            color: ${r};
        }
        .identity .who h1 {
            font-family: "Antonio", sans-serif;
            margin-bottom: 6px;
        }
        .metaRow {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }
        .metaRow .muted {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .metaList {
            list-style: none;
            margin-top: 10px;
        }
        .metaList li {
            display: flex;
            gap: 8px;
            align-items: center;
            padding: 4px 0;
            color: ${m};
        }
        .metaList li strong {
            color: ${r};
        }

        .share {
            display: flex;
            flex-direction: column;
            gap: 6px;
            align-items: flex-end;
        }
        .shareField {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .shareField input {
            width: 360px;
            max-width: 50vw;
            background: ${x};
            color: ${r};
            border: 1px solid ${l};
            padding: 8px 10px;
            border-radius: 8px;
        }

        .quickGrid {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            margin-bottom: 16px;
        }
        .quick.card {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: ${r};
        }
        .quick .icon {
            width: 40px;
            height: 40px;
            display: grid;
            place-items: center;
            border: 1px solid ${l};
            border-radius: 10px;
        }
        .quick:hover {
            border-color: ${a};
            color: ${a};
        }

        .contentGrid {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }

        .sectionHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }
        .sectionHeader h3 {
            font-family: "Antonio", sans-serif;
        }

        .fields {
            display: grid;
            gap: 12px;
        }
        .fields.twoCol {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .field {
            display: grid;
            gap: 6px;
        }
        .field label {
            color: ${m};
            font-size: 12px;
        }
        .field input {
            background: ${x};
            border: 1px solid ${l};
            color: ${r};
            padding: 8px 10px;
            border-radius: 8px;
        }
        .inline {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btnRow {
            display: inline-flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .linksRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${l};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            color: ${r};
        }
        .chip:hover {
            color: ${a};
            border-color: ${a};
        }

        .tableWrap {
            overflow: auto;
            border-radius: 10px;
            border: 1px solid ${l};
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 10px;
            background: ${x};
            color: ${a};
            border-bottom: 1px solid ${l};
            position: sticky;
            top: 0;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${l};
        }
        td.text-right {
            text-align: right;
        }

        .danger {
            outline: 1px dashed ${l};
        }

        /* modal */
        .modalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            display: grid;
            place-items: center;
            z-index: 9999;
        }
        .modalCard {
            width: min(560px, 92vw);
        }
        .modalHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .modalBody {
            color: ${r};
        }
        .modalFooter {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            margin-top: 16px;
        }
    `},f=n=>String(n).padStart(2,"0"),W=n=>n.toDateString(),V=n=>`${f(n.getHours())}:${f(n.getMinutes())}:${f(n.getSeconds())}hrs`,c=n=>{const d=new Date(n);return`${W(d)} ${V(d)}`},K=()=>{try{const n="/react-routes-theme/".replace(/\/$/,"");return new URL(`${n}/settings/profile`,window.location.origin).toString()}catch{return"/settings/profile"}},R=({open:n,title:d="Are you sure?",message:g,onClose:o,onConfirm:u,confirmLabel:h="Confirm",demoOnly:s=!0})=>n?e.jsx("div",{role:"dialog","aria-modal":"true",className:"modalOverlay",children:e.jsxs("div",{className:"modalCard card",children:[e.jsxs("div",{className:"modalHeader",children:[e.jsx("h4",{children:d}),e.jsx("button",{className:"iconBtn","aria-label":"Close",onClick:o,children:e.jsx(N,{})})]}),e.jsxs("div",{className:"modalBody",children:[e.jsx("p",{children:g}),s&&e.jsx("p",{className:"muted small",children:"Demo mode: This action is disabled."})]}),e.jsxs("div",{className:"modalFooter",children:[e.jsxs("button",{className:"btn",onClick:o,children:[e.jsx(N,{style:{marginRight:6}}),"Cancel"]}),e.jsxs("button",{className:"btn primary",disabled:s,"aria-disabled":s,title:s?"Disabled in demo":"",onClick:u,children:[e.jsx(D,{style:{marginRight:6}}),h]})]})]})}):null,_=()=>{const[n,d]=p.useState(!1),[g,o]=p.useState(!1),[u,h]=p.useState(!1),s=p.useMemo(()=>({id:"USR-0001",name:"Ashish Ranjan",role:"Owner",email:"ashish@example.com",phone:"+91 98765 43210",timezone:"Asia/Kolkata",language:"English (India)",location:"Patna, Bihar, India",org:{company:"Arohan Labs Pvt. Ltd.",department:"Engineering",manager:"—"},memberSince:"2025-10-06T00:49:19+05:30",lastActive:"2025-10-05T19:19:24.622Z",lastPasswordChange:"2025-07-12T10:22:15+05:30",twoFA:{enabled:!0,method:"Authenticator App",lastVerified:"2025-09-30T20:11:02+05:30"},sessions:[{id:"S-1",device:"MacBook Pro • Chrome 127",ip:"103.25.88.19",location:"Bengaluru, IN",lastActive:"2025-10-04T21:48:30+05:30",thisDevice:!0},{id:"S-2",device:"iPhone 14 • Safari",ip:"49.37.200.11",location:"Patna, IN",lastActive:"2025-10-03T09:14:52+05:30"},{id:"S-3",device:"Office Windows • Edge",ip:"172.19.8.23",location:"Noida, IN",lastActive:"2025-09-28T12:05:01+05:30"}],connectedApps:[{id:"C-1",name:"Slack",scope:"notifications:read",linked:"2025-08-05T11:19:00+05:30"},{id:"C-2",name:"Zapier",scope:"orders:read reports:read",linked:"2025-08-22T16:03:42+05:30"},{id:"C-3",name:"Google Drive",scope:"exports:write",linked:"2025-09-12T08:40:11+05:30"}]}),[]),y=K(),T=async()=>{try{await navigator.clipboard.writeText(y),h(!0),setTimeout(()=>h(!1),1500)}catch{h(!1)}},L=()=>{const t=document.body;t.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>t.classList.remove("print-section-mode"),50)},10)};return e.jsxs(Z.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs("div",{className:"pageHeader",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(k,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(k,{to:"/settings",children:"Settings"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Profile"})]}),e.jsxs("div",{className:"actions",children:[e.jsxs(i,{className:"btn ghost",to:"/profile",children:[e.jsx(O,{style:{marginRight:6}}),"View Profile"]}),e.jsxs(i,{className:"btn ghost",to:"/settings/appearance",children:[e.jsx(b,{style:{marginRight:6}}),"Appearance"]}),e.jsxs(i,{className:"btn ghost",to:"/settings/notifications",children:[e.jsx(w,{style:{marginRight:6}}),"Notifications"]}),e.jsxs("button",{className:"btn primary",onClick:L,title:"Print this section",children:[e.jsx($,{style:{marginRight:6}}),"Print"]})]})]}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs("div",{className:"identity card",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:s.name.split(" ").map(t=>t[0]).join("").slice(0,2).toUpperCase()}),e.jsxs("div",{className:"who",children:[e.jsx("h1",{children:s.name}),e.jsxs("div",{className:"metaRow",children:[e.jsx("span",{className:"badge",children:s.role}),e.jsxs("span",{className:"muted",children:[e.jsx(q,{})," ",s.email]}),e.jsxs("span",{className:"muted",children:[e.jsx(H,{})," ",s.phone]}),e.jsxs("span",{className:"muted",children:[e.jsx(B,{})," ",s.timezone]})]}),e.jsxs("ul",{className:"metaList",children:[e.jsxs("li",{children:[e.jsx(j,{})," Member since ",e.jsx("strong",{children:c(s.memberSince)})]}),e.jsxs("li",{children:[e.jsx(j,{})," Last active ",e.jsx("strong",{children:c(s.lastActive)})]}),e.jsxs("li",{children:[e.jsx(A,{})," App Commit ",e.jsx("strong",{children:c("2025-10-06T00:49:19+05:30")})]}),e.jsxs("li",{children:[e.jsx(C,{})," Build Time ",e.jsx("strong",{children:c("2025-10-05T19:19:24.622Z")})]})]})]}),e.jsxs("div",{className:"share",children:[e.jsxs("div",{className:"shareField",children:[e.jsx("input",{readOnly:!0,value:y,"aria-label":"Shareable link"}),e.jsx("button",{className:"iconBtn",onClick:T,title:"Copy link",children:e.jsx(E,{})})]}),e.jsx("div",{className:"muted small",children:u?"Copied!":"Deep link to this page"})]})]}),e.jsxs("div",{className:"quickGrid",children:[e.jsxs(i,{to:"/settings/billing",className:"quick card",children:[e.jsx("div",{className:"icon",children:e.jsx(S,{})}),e.jsxs("div",{className:"qtext",children:[e.jsx("h4",{children:"Billing"}),e.jsx("p",{children:"Plan & invoices"})]})]}),e.jsxs(i,{to:"/settings/tokens",className:"quick card",children:[e.jsx("div",{className:"icon",children:e.jsx(S,{})}),e.jsxs("div",{className:"qtext",children:[e.jsx("h4",{children:"API Tokens"}),e.jsx("p",{children:"Programmatic access"})]})]}),e.jsxs(i,{to:"/settings/print-templates",className:"quick card",children:[e.jsx("div",{className:"icon",children:e.jsx($,{})}),e.jsxs("div",{className:"qtext",children:[e.jsx("h4",{children:"Print Templates"}),e.jsx("p",{children:"Documents & layouts"})]})]}),e.jsxs(i,{to:"/settings/numbering",className:"quick card",children:[e.jsx("div",{className:"icon",children:e.jsx(A,{})}),e.jsxs("div",{className:"qtext",children:[e.jsx("h4",{children:"Numbering"}),e.jsx("p",{children:"Document sequences"})]})]}),e.jsxs(i,{to:"/settings/webhooks",className:"quick card",children:[e.jsx("div",{className:"icon",children:e.jsx(C,{})}),e.jsxs("div",{className:"qtext",children:[e.jsx("h4",{children:"Webhooks"}),e.jsx("p",{children:"Outbound events"})]})]}),e.jsxs(i,{to:"/settings/backups",className:"quick card",children:[e.jsx("div",{className:"icon",children:e.jsx(b,{})}),e.jsxs("div",{className:"qtext",children:[e.jsx("h4",{children:"Backups"}),e.jsx("p",{children:"Snapshots & restore"})]})]})]}),e.jsxs("div",{className:"contentGrid",children:[e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("h3",{children:"Profile"}),e.jsx("div",{className:"sectionActions",children:e.jsxs("button",{className:"btn","aria-disabled":!0,title:"Demo only",children:[e.jsx(I,{style:{marginRight:6}}),"Edit"]})})]}),e.jsxs("div",{className:"fields twoCol",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Full Name"}),e.jsx("input",{readOnly:!0,value:s.name})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"User ID"}),e.jsx("input",{readOnly:!0,value:s.id})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Email"}),e.jsx("input",{readOnly:!0,value:s.email})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{readOnly:!0,value:s.phone})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Role"}),e.jsx("input",{readOnly:!0,value:s.role})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Timezone"}),e.jsx("input",{readOnly:!0,value:s.timezone})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Language"}),e.jsx("input",{readOnly:!0,value:s.language})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Location"}),e.jsxs("div",{className:"inline",children:[e.jsx(M,{})," ",e.jsx("span",{children:s.location})]})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("h3",{children:"Organization"}),e.jsx("div",{className:"sectionActions",children:e.jsxs(i,{className:"btn ghost",to:"/admin/users",children:[e.jsx(v,{style:{marginRight:6}}),"Manage Users"]})})]}),e.jsxs("div",{className:"fields twoCol",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Company"}),e.jsx("input",{readOnly:!0,value:s.org.company})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Department"}),e.jsx("input",{readOnly:!0,value:s.org.department})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Reporting Manager"}),e.jsx("input",{readOnly:!0,value:s.org.manager})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsx("input",{readOnly:!0,value:"Active"})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("h3",{children:"Security"}),e.jsxs("div",{className:"sectionActions",children:[e.jsxs(i,{to:"/auth/reset",className:"btn",children:[e.jsx(z,{style:{marginRight:6}}),"Change Password"]}),e.jsxs("button",{className:"btn","aria-disabled":!0,title:"Demo only",children:[e.jsx(U,{style:{marginRight:6}}),"Manage 2FA"]})]})]}),e.jsxs("ul",{className:"metaList",children:[e.jsxs("li",{children:[e.jsx(D,{})," 2FA: ",e.jsx("strong",{children:s.twoFA.enabled?`${s.twoFA.method} (enabled)`:"Disabled"})]}),e.jsxs("li",{children:[e.jsx(j,{})," Last password change ",e.jsx("strong",{children:c(s.lastPasswordChange)})]}),e.jsxs("li",{children:[e.jsx(j,{})," 2FA last verified ",e.jsx("strong",{children:c(s.twoFA.lastVerified)})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("h3",{children:"Active Sessions"}),e.jsx("div",{className:"sectionActions",children:e.jsxs("button",{className:"btn",onClick:()=>o(!0),title:"Demo modal",children:[e.jsx(G,{style:{marginRight:6}}),"Sign out other devices"]})})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Device"}),e.jsx("th",{children:"IP"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Last Active"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:s.sessions.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{children:[t.device,t.thisDevice&&e.jsx("span",{className:"badge soft",children:"This device"})]}),e.jsx("td",{children:t.ip}),e.jsx("td",{children:t.location}),e.jsx("td",{children:c(t.lastActive)}),e.jsx("td",{className:"text-right",children:e.jsxs("button",{className:"btn ghost","aria-disabled":!0,title:"Demo only",children:[e.jsx(N,{style:{marginRight:6}}),"Revoke"]})})]},t.id))})]})})]}),e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("h3",{children:"Connected Apps"}),e.jsx("div",{className:"sectionActions",children:e.jsxs(i,{to:"/admin/integrations",className:"btn",children:[e.jsx(v,{style:{marginRight:6}}),"Manage Integrations"]})})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"App"}),e.jsx("th",{children:"Scopes"}),e.jsx("th",{children:"Linked"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:s.connectedApps.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.name}),e.jsx("td",{children:e.jsx("code",{children:t.scope})}),e.jsx("td",{children:c(t.linked)}),e.jsx("td",{className:"text-right",children:e.jsxs("button",{className:"btn ghost","aria-disabled":!0,title:"Demo only",children:[e.jsx(F,{style:{marginRight:6}}),"Remove"]})})]},t.id))})]})})]}),e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("h3",{children:"Preferences"}),e.jsxs("div",{className:"sectionActions",children:[e.jsxs(i,{className:"btn ghost",to:"/settings/appearance",children:[e.jsx(b,{style:{marginRight:6}}),"Appearance"]}),e.jsxs(i,{className:"btn ghost",to:"/settings/notifications",children:[e.jsx(w,{style:{marginRight:6}}),"Notifications"]})]})]}),e.jsxs("div",{className:"fields twoCol",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Theme"}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{className:"btn",onClick:()=>document.documentElement.setAttribute("data-theme","light"),children:"Light"}),e.jsx("button",{className:"btn",onClick:()=>document.documentElement.setAttribute("data-theme","dark"),children:"Dark"}),e.jsx("button",{className:"btn ghost",onClick:()=>document.documentElement.removeAttribute("data-theme"),title:"Follow system",children:"System"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Density"}),e.jsx("input",{readOnly:!0,value:"Comfortable"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Date Format"}),e.jsx("input",{readOnly:!0,value:"Sat Oct 04 2025"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Time Format"}),e.jsx("input",{readOnly:!0,value:"15:38:20hrs"})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("h3",{children:"Help & Docs"}),e.jsx("div",{className:"sectionActions",children:e.jsxs(i,{className:"btn ghost",to:"/help",children:[e.jsx(v,{style:{marginRight:6}}),"Help Center"]})})]}),e.jsxs("div",{className:"linksRow",children:[e.jsx(i,{to:"/faq",className:"chip",children:"FAQ"}),e.jsx(i,{to:"/changelog",className:"chip",children:"Changelog"}),e.jsx(i,{to:"/roadmap",className:"chip",children:"Roadmap"}),e.jsx(i,{to:"/contact",className:"chip",children:"Contact"}),e.jsx(i,{to:"/feedback",className:"chip",children:"Feedback"}),e.jsx(i,{to:"/reports",className:"chip",children:"Reports"}),e.jsx(i,{to:"/admin/permissions",className:"chip",children:"Permissions"}),e.jsx(i,{to:"/tools/import-export",className:"chip",children:"Import / Export"})]})]}),e.jsxs("section",{className:"card danger",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("h3",{children:"Danger Zone"}),e.jsx("div",{className:"sectionActions",children:e.jsxs("button",{className:"btn",onClick:()=>d(!0),title:"Demo modal",children:[e.jsx(F,{style:{marginRight:6}}),"Deactivate Account"]})})]}),e.jsx("p",{className:"muted",children:"Account deactivation is irreversible. In this demo, the action is intentionally disabled."})]})]})]}),e.jsx(R,{open:n,onClose:()=>d(!1),title:"Deactivate account?",message:"This would permanently deactivate your account and revoke access. In the demo, this action is disabled.",onConfirm:()=>d(!1),confirmLabel:"Deactivate",demoOnly:!0}),e.jsx(R,{open:g,onClose:()=>o(!1),title:"Sign out other devices?",message:"All sessions except the current one will be signed out. In the demo, this action is disabled.",onConfirm:()=>o(!1),confirmLabel:"Sign out others",demoOnly:!0})]})};export{_ as default};
