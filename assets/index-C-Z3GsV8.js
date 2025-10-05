import{d as r,u as D,r as g,j as e,N as t}from"./index-Dm9gfKqL.js";import{T as v,j as E,U as h,V as $,a as R,D as w,S as I,k as b,G as S,W as L,y as P}from"./index-BjqOZRWg.js";const m="var(--text, #f3f4f6)",i="var(--muted, #a0a0a7)",c="var(--card, #111318)",a="var(--border, #23262d)",s="var(--accent, #5aa9ff)",N="var(--accent-soft, rgba(90,169,255,0.15))",l={Wrap:r.div`
        width: 100%;
        color: ${m};
        display: block;
    `,Breadcrumbs:r.nav`
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 0 4px 0;
        a {
            color: ${i};
            text-decoration: none;
        }
        a:hover {
            color: ${s};
        }
        strong {
            color: ${m};
        }
        .rightLinks {
            margin-left: auto;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            a {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border: 1px solid ${a};
                border-radius: 8px;
            }
            a:hover {
                border-color: ${s};
                color: ${s};
            }
        }
    `,PageHead:r.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 8px 0 16px 0;
        border-bottom: 1px dashed ${a};

        .title h1 {
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.5px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .title p {
            color: ${i};
        }

        .meta {
            display: grid;
            gap: 6px;
            align-content: start;
            .row {
                display: flex;
                gap: 8px;
                justify-content: flex-end;
            }
            .row span {
                color: ${i};
            }
            .row strong {
                color: ${m};
            }
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            .meta {
                justify-items: start;
            }
            .meta .row {
                justify-content: flex-start;
            }
        }
    `,ActionBar:r.div`
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 16px 0;

        button,
        .linkBtn {
            border: 1px solid ${a};
            background: ${c};
            color: ${m};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s ease, color 0.2s ease,
                box-shadow 0.2s ease, transform 0.05s ease-in;
        }
        button:hover,
        .linkBtn:hover {
            border-color: ${s};
            color: ${s};
        }
        button:active {
            transform: translateY(1px);
        }

        .primary {
            box-shadow: 0 0 0 3px ${N};
            border-color: ${s};
        }
        .ghost {
            background: transparent;
        }
        .danger {
            border-color: #f43f5e;
        }
        .spacer {
            flex: 1;
        }
    `,StatRow:r.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        margin-bottom: 16px;
        .card {
            background: ${c};
            border: 1px solid ${a};
            border-radius: 12px;
            padding: 14px;
            box-shadow: var(--shadow);
        }
        .stat {
            display: grid;
            gap: 4px;
            align-content: center;
        }
        .stat .k {
            color: ${i};
            font-size: 12px;
        }
        .stat .v {
            font-size: 18px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        @media (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,QuickLinks:r.div`
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(9, minmax(0, 1fr));
        margin-bottom: 14px;
        .q {
            border: 1px solid ${a};
            border-radius: 10px;
            padding: 8px 10px;
            text-decoration: none;
            color: ${i};
            text-align: center;
            background: color-mix(in oklab, ${c} 96%, transparent);
        }
        .q:hover {
            color: ${s};
            border-color: ${s};
        }
        @media (max-width: 1300px) {
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }
        @media (max-width: 900px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 520px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,SectionHead:r.div`
        margin: 18px 0 10px 0;
        display: flex;
        align-items: baseline;
        gap: 12px;
        h2 {
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.4px;
        }
        .subnav {
            margin-left: auto;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .subnav a {
            border: 1px solid ${a};
            border-radius: 8px;
            padding: 6px 10px;
            text-decoration: none;
            color: ${i};
        }
        .subnav a:hover {
            color: ${s};
            border-color: ${s};
        }
    `,Grid:r.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin-bottom: 18px;
        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }

        .card {
            background: ${c};
            border: 1px solid ${a};
            border-radius: 14px;
            padding: 14px;
            box-shadow: var(--shadow);
        }

        .app header {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-bottom: 10px;
        }
        .app .logo {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid ${a};
            font-weight: 700;
            letter-spacing: 0.5px;
            background: color-mix(in oklab, ${c} 88%, transparent);
        }
        .app .meta h3 {
            margin: 0;
        }
        .app .meta .row {
            display: flex;
            gap: 8px;
            align-items: center;
            color: ${i};
        }
        .app .meta .row .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border-radius: 999px;
            padding: 4px 8px;
            border: 1px solid ${a};
        }
        .app .meta .row .badge.ok {
            border-color: color-mix(in oklab, ${s} 50%, ${a});
        }
        .app .meta .row .badge.off {
            border-color: #4b5563;
        }

        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 8px;
        }
        .links a {
            border: 1px dashed ${a};
            padding: 6px 10px;
            border-radius: 8px;
            color: ${i};
            text-decoration: none;
        }
        .links a:hover {
            border-color: ${s};
            color: ${s};
        }

        footer {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }
        footer .linkBtn {
            border: 1px solid ${a};
            border-radius: 10px;
            padding: 6px 10px;
            color: ${i};
            text-decoration: none;
        }
        footer .linkBtn:hover {
            color: ${s};
            border-color: ${s};
        }
        footer button {
            border: 1px solid ${a};
            background: ${c};
            color: ${m};
            border-radius: 10px;
            padding: 8px 12px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: border-color 0.2s, color 0.2s, transform 0.05s;
        }
        footer button:hover {
            border-color: ${s};
            color: ${s};
        }
        footer button:active {
            transform: translateY(1px);
        }
        footer .danger {
            border-color: #f43f5e;
        }
        footer .primary {
            box-shadow: 0 0 0 3px ${N};
            border-color: ${s};
        }
    `,HelpPanel:r.div`
        display: flex;
        gap: 12px;
        align-items: flex-start;
        margin: 8px 0 40px 0;
        .icon {
            font-size: 22px;
            margin-top: 2px;
            color: ${s};
        }
        .copy h3 {
            margin: 0 0 6px 0;
        }
        .copy p {
            color: ${i};
            margin-bottom: 8px;
        }
        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .links a {
            border: 1px solid ${a};
            border-radius: 8px;
            padding: 6px 10px;
            text-decoration: none;
            color: ${i};
        }
        .links a:hover {
            color: ${s};
            border-color: ${s};
        }
    `,Modal:r.div`
        position: fixed;
        inset: 0;
        z-index: 50;
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .box {
            position: relative;
            z-index: 1;
            width: min(560px, 92%);
            margin: 8vh auto 0 auto;
            background: ${c};
            border: 1px solid ${a};
            border-radius: 14px;
            padding: 16px;
            box-shadow: var(--shadow);
        }
        .box h4 {
            margin: 0 0 6px 0;
        }
        .box p {
            color: ${i};
            margin: 0 0 12px 0;
        }
        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
        .actions button,
        .actions .linkBtn {
            border: 1px solid ${a};
            background: ${c};
            color: ${m};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }
        .actions button:hover,
        .actions .linkBtn:hover {
            border-color: ${s};
            color: ${s};
        }
    `},q=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W=n=>`${q[n.getDay()]} ${H[n.getMonth()]} ${String(n.getDate()).padStart(2,"0")} ${n.getFullYear()}`,z=n=>`${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}:${String(n.getSeconds()).padStart(2,"0")}hrs`,k=n=>`${W(n)} ${z(n)}`,G=new Date,O="2025-10-05T19:19:24.622Z",J="2025-10-06T00:49:19+05:30",f=[{key:"stripe",name:"Stripe",kind:"Payments",status:"connected",note:"Live keys masked",links:[{to:"/reports/finance",label:"Finance Reports"},{to:"/invoices",label:"Invoices"}]},{key:"razorpay",name:"Razorpay",kind:"Payments",status:"connected",note:"Webhook active",links:[{to:"/invoices",label:"Invoices"},{to:"/reports/sales",label:"Sales Reports"}]},{key:"paytm",name:"Paytm",kind:"Payments",status:"not-linked",note:"Ready to connect",links:[{to:"/invoices",label:"Invoices"}]},{key:"twilio",name:"Twilio",kind:"Telephony",status:"connected",note:"SMS & WhatsApp",links:[{to:"/admin/sms-templates",label:"SMS Templates"},{to:"/notifications",label:"Notifications"}]},{key:"sendgrid",name:"SendGrid",kind:"Email",status:"connected",note:"Domain verified",links:[{to:"/admin/email-templates",label:"Email Templates"}]},{key:"mailgun",name:"Mailgun",kind:"Email",status:"not-linked",note:"SPF pending",links:[{to:"/admin/email-templates",label:"Email Templates"}]},{key:"ses",name:"AWS SES",kind:"Email",status:"not-linked",note:"Region not set",links:[{to:"/settings/notifications",label:"Notifications"}]},{key:"slack",name:"Slack",kind:"Collab",status:"connected",note:"#ops alerts on",links:[{to:"/admin/activity",label:"Activity"}]},{key:"teams",name:"Microsoft Teams",kind:"Collab",status:"not-linked",note:"Requires tenant",links:[{to:"/admin/tenants",label:"Tenants"}]},{key:"github",name:"GitHub",kind:"Source",status:"connected",note:"PR checks enabled",links:[{to:"/admin/feature-flags",label:"Feature Flags"}]},{key:"bitbucket",name:"Bitbucket",kind:"Source",status:"not-linked",note:"OAuth app needed",links:[{to:"/admin/feature-flags",label:"Feature Flags"}]},{key:"s3",name:"S3 / R2",kind:"Storage",status:"connected",note:"Assets offloaded",links:[{to:"/tools/import-export",label:"Import/Export"}]},{key:"gdrive",name:"Google Drive",kind:"Storage",status:"not-linked",note:"Service account",links:[{to:"/tools/import-export",label:"Import/Export"}]},{key:"dropbox",name:"Dropbox",kind:"Storage",status:"not-linked",note:"App folder mode",links:[{to:"/tools/import-export",label:"Import/Export"}]},{key:"quickbooks",name:"QuickBooks",kind:"Accounting",status:"connected",note:"Sync read-only",links:[{to:"/finance/ledgers",label:"Ledgers"},{to:"/finance/journals",label:"Journals"}]},{key:"tally",name:"Tally Bridge",kind:"Accounting",status:"not-linked",note:"Gateway required",links:[{to:"/finance",label:"Finance"}]},{key:"webhooks",name:"Webhooks",kind:"Automation",status:"connected",note:"4 endpoints live",links:[{to:"/settings/webhooks",label:"Manage Webhooks"}]},{key:"zapier",name:"Zapier",kind:"Automation",status:"not-linked",note:"Invite-only app",links:[{to:"/tools/playground",label:"Playground"}]}],Y=n=>n==="connected"?e.jsxs("span",{className:"badge ok",children:[e.jsx(P,{})," Connected"]}):e.jsxs("span",{className:"badge off",children:[e.jsx(S,{})," Not Connected"]}),V=()=>{const n=D(),[u,x]=g.useState(null),A=g.useMemo(()=>new Date(O),[]),F=g.useMemo(()=>new Date(J),[]),j=o=>{x({title:"Demo Mode",body:`${o} connection is disabled in this demo. Explore templates, docs, and related pages instead.`})},C=o=>{x({title:"Demo Mode",body:`Disconnect is disabled for ${o}. You can still review audit logs and system status.`})},T=()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),1e3)}},B=g.useMemo(()=>{const o=new Map;return f.forEach(p=>{o.has(p.kind)||o.set(p.kind,[]),o.get(p.kind).push(p)}),Array.from(o.entries())},[]);return e.jsxs(l.Wrap,{children:[e.jsxs(l.Breadcrumbs,{"aria-label":"breadcrumb",children:[e.jsx(t,{to:"/home",end:!0,children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(t,{to:"/admin/system-status",end:!0,children:"Admin"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Integrations"}),e.jsxs("div",{className:"rightLinks",children:[e.jsxs(t,{to:"/admin/system-status",end:!0,children:[e.jsx(v,{})," System Status"]}),e.jsxs(t,{to:"/admin/feature-flags",end:!0,children:[e.jsx(E,{})," Feature Flags"]}),e.jsxs(t,{to:"/admin/audit-log",end:!0,children:[e.jsx(h,{})," Audit Log"]})]})]}),e.jsxs(l.PageHead,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Integrations"}),e.jsx("p",{children:"Connect payments, messaging, storage, and automation services. Display-only demo—safe to explore."})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Build:"}),e.jsx("strong",{children:k(A)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Last Commit:"}),e.jsx("strong",{children:k(F)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Now:"}),e.jsx("strong",{children:k(G)})]})]})]}),e.jsxs(l.ActionBar,{children:[e.jsxs("button",{className:"primary",onClick:()=>j("New Integration"),title:"Disabled in demo",children:[e.jsx($,{})," Connect New"]}),e.jsxs("button",{className:"ghost",onClick:T,children:[e.jsx(R,{})," Print Overview"]}),e.jsx("div",{className:"spacer"}),e.jsxs(t,{to:"/settings/webhooks",end:!0,className:"linkBtn",children:[e.jsx(w,{})," Manage Webhooks"]}),e.jsxs(t,{to:"/settings/tokens",end:!0,className:"linkBtn",children:[e.jsx(I,{})," API Tokens"]}),e.jsxs(t,{to:"/help",end:!0,className:"linkBtn",children:[e.jsx(b,{})," Help Center"]})]}),e.jsxs(l.StatRow,{id:"search-print-area",children:[e.jsxs("div",{className:"card stat",children:[e.jsx("span",{className:"k",children:"Connected"}),e.jsx("span",{className:"v",children:f.filter(o=>o.status==="connected").length})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("span",{className:"k",children:"Available"}),e.jsx("span",{className:"v",children:f.length})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("span",{className:"k",children:"Security"}),e.jsxs("span",{className:"v",children:[e.jsx(v,{})," OK"]})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("span",{className:"k",children:"Audit"}),e.jsx("span",{className:"v",children:e.jsx(t,{to:"/admin/audit-log",end:!0,children:"View Logs"})})]})]}),e.jsxs(l.QuickLinks,{children:[e.jsx(t,{to:"/invoices",end:!0,className:"q",children:"Invoices"}),e.jsx(t,{to:"/reports/sales",end:!0,className:"q",children:"Sales Reports"}),e.jsx(t,{to:"/reports/finance",end:!0,className:"q",children:"Finance Reports"}),e.jsx(t,{to:"/notifications",end:!0,className:"q",children:"Notifications"}),e.jsx(t,{to:"/admin/email-templates",end:!0,className:"q",children:"Email Templates"}),e.jsx(t,{to:"/admin/sms-templates",end:!0,className:"q",children:"SMS Templates"}),e.jsx(t,{to:"/tools/import-export",end:!0,className:"q",children:"Import / Export"}),e.jsx(t,{to:"/settings/notifications",end:!0,className:"q",children:"Notification Rules"}),e.jsx(t,{to:"/settings/print-templates",end:!0,className:"q",children:"Print Templates"})]}),B.map(([o,p])=>e.jsxs("section",{children:[e.jsxs(l.SectionHead,{children:[e.jsx("h2",{children:o}),e.jsxs("div",{className:"subnav",children:[e.jsx(t,{to:"/admin/system-status",end:!0,children:"System"}),e.jsx(t,{to:"/admin/feature-flags",end:!0,children:"Flags"}),e.jsx(t,{to:"/settings/webhooks",end:!0,children:"Webhooks"}),e.jsx(t,{to:"/settings/tokens",end:!0,children:"Tokens"})]})]}),e.jsx(l.Grid,{children:p.map(d=>e.jsxs("article",{className:"card app",children:[e.jsxs("header",{children:[e.jsx("div",{className:"logo",children:d.name.slice(0,2)}),e.jsxs("div",{className:"meta",children:[e.jsx("h3",{children:d.name}),e.jsxs("div",{className:"row",children:[Y(d.status),e.jsx("span",{className:"muted",children:"•"}),e.jsx("span",{className:"muted",children:d.note})]})]})]}),e.jsx("div",{className:"links",children:d.links.map((y,M)=>e.jsx(t,{to:y.to,end:!0,children:y.label},M))}),e.jsxs("footer",{children:[e.jsxs("button",{className:"ghost",onClick:()=>n("/help"),children:[e.jsx(b,{})," Docs"]}),d.status==="connected"?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"danger",onClick:()=>C(d.name),children:[e.jsx(S,{})," Disconnect"]}),e.jsxs(t,{to:"/admin/audit-log",end:!0,className:"linkBtn",children:[e.jsx(h,{})," Audits"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"primary",onClick:()=>j(d.name),children:[e.jsx($,{})," Connect"]}),e.jsxs(t,{to:"/settings/webhooks",end:!0,className:"linkBtn",children:[e.jsx(w,{})," Webhooks"]})]})]})]},d.key))})]},o)),e.jsxs(l.HelpPanel,{className:"card",children:[e.jsx("div",{className:"icon",children:e.jsx(L,{})}),e.jsxs("div",{className:"copy",children:[e.jsx("h3",{children:"How to use this page"}),e.jsx("p",{children:"Explore linked areas to see how integrations influence invoices, reports, and notifications. This is a display-only demo with deep links enabled across Admin, Settings, and Reports."}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/reports",end:!0,children:"All Reports"}),e.jsx(t,{to:"/settings",end:!0,children:"Settings Home"}),e.jsx(t,{to:"/admin",end:!0,children:"Admin Area"}),e.jsx(t,{to:"/help",end:!0,children:"Help Center"})]})]})]}),e.jsx("style",{children:`
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
      `}),u&&e.jsxs(l.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[e.jsxs("div",{className:"box card",children:[e.jsx("h4",{id:"modal-title",children:u.title}),e.jsx("p",{children:u.body}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>x(null),children:"Close"}),e.jsxs(t,{to:"/help",end:!0,className:"linkBtn",children:[e.jsx(b,{})," Help"]}),e.jsxs(t,{to:"/admin/audit-log",end:!0,className:"linkBtn",children:[e.jsx(h,{})," Audit Log"]})]})]}),e.jsx("div",{className:"backdrop",onClick:()=>x(null)})]})]})};export{V as default};
