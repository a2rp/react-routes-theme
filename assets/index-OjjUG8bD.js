import{d,_ as g,a as R,r as k,j as e,L as t,l as P,w as S,e as q,ap as z,o as F,aq as B}from"./index-LshBDmDj.js";const o="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",x="var(--card, #111318)",n="var(--border, #23262d)",r="var(--accent, #5aa9ff)",h="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",G=g`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;

    thead th {
        text-align: left;
        font-weight: 600;
        color: ${o};
        border-bottom: 1px solid ${n};
        padding: 10px;
        background: ${x};
    }
    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${n};
        color: ${o};
    }
    .muted {
        color: ${c};
        font-size: 12px;
    }
    .svc {
        display: flex;
        align-items: center;
        gap: 8px;
        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${r};
        }
        .dot[data-status="degraded"] {
            background: #d4aa00;
        } /* amber-ish */
        .dot[data-status="down"] {
            background: #cc4040;
        } /* red-ish */
    }
`,i={Page:d.div`
        padding: 20px;
        color: ${o};
    `,Breadcrumbs:d.div`
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
        a {
            color: ${c};
            text-decoration: none;
        }
        a:hover {
            color: ${r};
        }
        strong {
            color: ${o};
        }
        span {
            color: ${c};
        }
    `,HeaderBar:d.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 14px 16px;
        border: 1px solid ${n};
        background: ${x};
        border-radius: 12px;
        box-shadow: ${h};
        margin-bottom: 16px;

        h1 {
            font-size: 22px;
            margin-bottom: 4px;
        }
        p {
            color: ${c};
        }
    `,HeaderActions:d.div`
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;

        button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: ${x};
            color: ${o};
            border: 1px solid ${n};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        button:hover {
            border-color: ${r};
            color: ${r};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,InfoGrid:d.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,Card:d.div`
        background: ${x};
        border: 1px solid ${n};
        border-radius: 12px;
        box-shadow: ${h};
        padding: 16px;

        .card-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
            h3 {
                margin: 0;
            }
            .head-links a {
                margin-left: 10px;
            }
        }

        h3 {
            margin-bottom: 10px;
        }
        .text-link {
            color: ${r};
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .text-link:hover {
            text-decoration: underline;
        }

        .kv {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            @media (max-width: 640px) {
                grid-template-columns: 1fr;
            }
            .k {
                color: ${c};
                display: block;
            }
            .v {
                color: ${o};
                display: block;
            }
        }

        .links {
            margin-top: 10px;
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
        }

        .flags {
            list-style: none;
            padding: 0;
            margin: 0;
            li {
                display: grid;
                grid-template-columns: 70px 1fr;
                gap: 8px;
                padding: 8px 0;
                border-bottom: 1px solid ${n};
            }
            li:last-child {
                border-bottom: none;
            }
            .state {
                display: inline-block;
                font-weight: 600;
                padding: 4px 8px;
                border-radius: 999px;
                border: 1px solid ${n};
            }
            .state.on {
                color: ${o};
                background: color-mix(in oklab, ${r} 14%, transparent);
                border-color: ${r};
            }
            .state.off {
                color: ${c};
                background: rgba(0, 0, 0, 0.08);
            }
            .label {
                font-weight: 600;
            }
            .desc {
                color: ${c};
                grid-column: 2 / span 1;
            }
        }

        table.flat {
            ${G}
        }
        .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .tag {
            padding: 3px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${n};
            background: rgba(0, 0, 0, 0.08);
            color: ${o};
        }

        .empty {
            color: ${c};
            padding: 10px 4px;
        }

        &.dep-card table.flat tbody td {
            vertical-align: middle;
        }
    `,StatusChip:d.span`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 4px 10px;
        border-radius: 999px;
        border: 1px solid ${n};
        font-size: 12px;
        white-space: nowrap;

        ${({status:a})=>a==="operational"&&g`
                color: ${o};
                border-color: ${r};
                background: color-mix(in oklab, ${r} 16%, transparent);
            `}
        ${({status:a})=>a==="degraded"&&g`
                color: ${o};
                border-color: #d4aa00;
                background: color-mix(in oklab, #d4aa00 20%, transparent);
            `}
    ${({status:a})=>a==="down"&&g`
                color: ${o};
                border-color: #cc4040;
                background: color-mix(in oklab, #cc4040 16%, transparent);
            `}
    `,TwoCol:d.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 16px;
        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 20px 16px 1fr;
            gap: 10px;
            padding: 10px 0;
            border-bottom: 1px solid ${n};
        }
        .timeline li:last-child {
            border-bottom: none;
        }
        .line {
            width: 2px;
            background: ${n};
            margin-left: 9px;
        }
        .node {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .node .sev {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            border-radius: 50%;
        }
        .node .sev.minor {
            background: color-mix(in oklab, ${r} 18%, transparent);
        }
        .content .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .content .meta {
            display: flex;
            gap: 14px;
            color: ${c};
            margin-top: 4px;
            flex-wrap: wrap;
        }
    `,QuickLinks:d.div`
        margin-top: 16px;
        h3 {
            margin: 0 0 10px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 10px;
            @media (max-width: 1200px) {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
            @media (max-width: 800px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            @media (max-width: 480px) {
                grid-template-columns: 1fr;
            }
        }
        .ql {
            display: block;
            padding: 10px 12px;
            border: 1px solid ${n};
            background: ${x};
            color: ${o};
            border-radius: 10px;
            text-decoration: none;
            text-align: center;
            transition: all 0.2s ease;
        }
        .ql:hover {
            color: ${r};
            border-color: ${r};
        }
    `,Toast:d.div`
        position: fixed;
        right: 16px;
        top: 16px;
        z-index: 20;
        background: ${x};
        border: 1px solid ${n};
        color: ${o};
        padding: 8px 12px;
        border-radius: 10px;
        box-shadow: ${h};
    `,ModalBackdrop:d.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 30;
    `,Modal:d.div`
        width: min(520px, 96vw);
        background: ${x};
        border: 1px solid ${n};
        border-radius: 12px;
        box-shadow: ${h};
        padding: 16px;

        h4 {
            margin-bottom: 6px;
        }
        p {
            color: ${c};
            margin-bottom: 12px;
        }
        .row {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
        button {
            background: ${x};
            color: ${o};
            border: 1px solid ${n};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        button:hover {
            color: ${r};
            border-color: ${r};
        }
    `},C="2025-10-06T06:42:50.910Z",A="2025-10-06T12:12:45+05:30",Z=a=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][a.getDay()],H=a=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()],u=a=>a<10?"0"+a:String(a),v=a=>{const l=new Date(a);return`${Z(l)} ${H(l)} ${u(l.getDate())} ${l.getFullYear()}`},N=a=>{const l=new Date(a);return`${u(l.getHours())}:${u(l.getMinutes())}:${u(l.getSeconds())}hrs`},m=a=>`${v(a)} ${N(a)}`,O=[{key:"api",name:"Core API",status:"operational",docs:"/help",link:"/admin/audit-log"},{key:"db",name:"Primary Database",status:"operational",docs:"/help",link:"/admin/system-status"},{key:"cache",name:"Cache Cluster",status:"degraded",docs:"/help",link:"/admin/system-status"},{key:"search",name:"Search Service",status:"operational",docs:"/help",link:"/tools/playground"},{key:"email",name:"Email Gateway",status:"operational",docs:"/admin/email-templates",link:"/admin/email-templates"},{key:"sms",name:"SMS Gateway",status:"operational",docs:"/admin/sms-templates",link:"/admin/sms-templates"},{key:"storage",name:"Object Storage",status:"operational",docs:"/settings/backups",link:"/settings/backups"},{key:"cdn",name:"CDN Edge",status:"degraded",docs:"/help",link:"/reports/shipment"},{key:"payments",name:"Payments",status:"operational",docs:"/finance",link:"/finance"},{key:"notifications",name:"Notifications Worker",status:"operational",docs:"/settings/notifications",link:"/settings/notifications"}],y=[{id:"INC-1042",title:"Intermittent CDN latency in APAC",severity:"minor",startedAt:"2025-10-04T08:12:34Z",resolvedAt:"2025-10-04T08:56:11Z",affected:["CDN Edge"],link:"/admin/activity"},{id:"INC-1038",title:"Cache node rotation (degraded hits)",severity:"minor",startedAt:"2025-10-03T17:41:10Z",resolvedAt:"2025-10-03T18:05:28Z",affected:["Cache Cluster"],link:"/admin/audit-log"}],T=[{id:"SCH-205",title:"Database minor upgrades (rolling)",windowStart:"2025-10-06T02:00:00Z",windowEnd:"2025-10-06T04:30:00Z",components:["Primary Database"],link:"/admin/system-status"}],D=[{key:"ff-optim-search",label:"Search Optimizer v2",state:"On",description:"Smarter query planner (display-only)"},{key:"ff-invoice-v3",label:"Invoice Layout v3",state:"Off",description:"New print template (display-only)"},{key:"ff-2fa-mandate",label:"2FA Mandatory",state:"On",description:"Admins enforced 2FA"}],J=[{name:"Email Provider",vendor:"Postmark",region:"Global",status:"Operational",docs:"/admin/email-templates"},{name:"SMS Provider",vendor:"Twilio",region:"Global",status:"Operational",docs:"/admin/sms-templates"},{name:"Object Storage",vendor:"S3-compatible",region:"Multi-region",status:"Operational",docs:"/settings/backups"},{name:"Payments",vendor:"Stripe",region:"Global",status:"Operational",docs:"/finance"}];function W(){const{pathname:a}=R(),[l,j]=k.useState(!1),[I,w]=k.useState(!1),b=k.useMemo(()=>({builtAt:m(C),commitAt:m(A),commitRaw:A,buildRaw:C}),[]),E=async()=>{try{await navigator.clipboard.writeText(window.location.href),w(!0),setTimeout(()=>w(!1),1600)}catch{}},M=()=>{const s={asOf:m(new Date().toISOString()),route:a,services:O,incidents:y,maintenance:T,flags:D,build:b},p=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),$=URL.createObjectURL(p),f=document.createElement("a");f.href=$,f.download="system-status.json",f.click(),setTimeout(()=>URL.revokeObjectURL($),500)},L=()=>{const s=document.body;s.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>s.classList.remove("print-section-mode"),50)},40)};return e.jsxs(i.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(i.Breadcrumbs,{children:[e.jsx(t,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(t,{to:"/admin",children:"Admin"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"System Status"})]}),e.jsxs(i.HeaderBar,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"System Status"}),e.jsx("p",{children:"Live overview of core services, recent incidents, maintenance windows, and feature flags."})]}),e.jsxs(i.HeaderActions,{children:[e.jsxs("button",{onClick:E,title:"Copy page link",children:[e.jsx(P,{size:18})," Copy Link"]}),e.jsxs("button",{onClick:M,title:"Export as JSON",children:[e.jsx(S,{size:18})," Export JSON"]}),e.jsxs("button",{onClick:L,title:"Print",id:"btn-print",children:[e.jsx(q,{size:18})," Print"]}),e.jsxs("button",{onClick:()=>j(!0),title:"Restart (demo disabled)",disabled:!0,children:[e.jsx(z,{size:18})," Restart All"]})]})]}),I&&e.jsx(i.Toast,{role:"status",children:"Link copied"}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs(i.InfoGrid,{children:[e.jsxs(i.Card,{children:[e.jsx("h3",{children:"Environment"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"App Route"}),e.jsx("span",{className:"v",children:a})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Timezone"}),e.jsx("span",{className:"v",children:Intl.DateTimeFormat().resolvedOptions().timeZone})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Built At"}),e.jsx("span",{className:"v",children:b.builtAt})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Last Commit"}),e.jsx("span",{className:"v",children:b.commitAt})]})]}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/changelog",className:"text-link",children:"Changelog"}),e.jsx(t,{to:"/roadmap",className:"text-link",children:"Roadmap"}),e.jsx(t,{to:"/admin/audit-log",className:"text-link",children:"Audit Log"}),e.jsx(t,{to:"/admin/activity",className:"text-link",children:"Activity"})]})]}),e.jsxs(i.Card,{children:[e.jsx("h3",{children:"Feature Flags"}),e.jsx("ul",{className:"flags",children:D.map(s=>e.jsxs("li",{children:[e.jsx("span",{className:`state ${s.state==="On"?"on":"off"}`,children:s.state}),e.jsx("span",{className:"label",children:s.label}),e.jsx("span",{className:"desc",children:s.description})]},s.key))}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/admin/feature-flags",className:"text-link",children:"Open Flags"}),e.jsx(t,{to:"/settings/notifications",className:"text-link",children:"Notifications"}),e.jsx(t,{to:"/settings/appearance",className:"text-link",children:"Appearance"})]})]}),e.jsxs(i.Card,{className:"dep-card",children:[e.jsx("h3",{children:"Dependencies"}),e.jsxs("table",{className:"flat",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Service"}),e.jsx("th",{children:"Vendor"}),e.jsx("th",{children:"Region"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Docs"})]})}),e.jsx("tbody",{children:J.map((s,p)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.name}),e.jsx("td",{children:s.vendor}),e.jsx("td",{children:s.region}),e.jsx("td",{children:e.jsx(i.StatusChip,{status:"operational",children:"Operational"})}),e.jsx("td",{children:e.jsx(t,{to:s.docs,className:"text-link",children:"Open"})})]},p))})]})]})]}),e.jsxs(i.Card,{children:[e.jsxs("div",{className:"card-head",children:[e.jsx("h3",{children:"Core Services"}),e.jsxs("div",{className:"head-links",children:[e.jsx(t,{to:"/admin/integrations",className:"text-link",children:"Integrations"}),e.jsx(t,{to:"/reports",className:"text-link",children:"Reports"}),e.jsx(t,{to:"/tools/playground",className:"text-link",children:"Playground"})]})]}),e.jsxs("table",{className:"flat",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Service"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Deep Link"}),e.jsx("th",{children:"Docs"})]})}),e.jsx("tbody",{children:O.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{className:"svc",children:[e.jsx("span",{className:"dot","data-status":s.status}),s.name]}),e.jsx("td",{children:e.jsx(i.StatusChip,{status:s.status,children:s.status==="operational"?"Operational":s.status==="degraded"?"Degraded":"Down"})}),e.jsx("td",{children:e.jsxs(t,{to:s.link,className:"text-link",children:["Open ",e.jsx(S,{size:14})]})}),e.jsx("td",{children:e.jsx(t,{to:s.docs,className:"text-link",children:"Docs"})})]},s.key))})]})]})]}),e.jsxs(i.TwoCol,{children:[e.jsxs(i.Card,{children:[e.jsxs("div",{className:"card-head",children:[e.jsx("h3",{children:"Recent Incidents"}),e.jsx(t,{to:"/admin/audit-log",className:"text-link",children:"Audit Log"})]}),y.length===0?e.jsx("div",{className:"empty",children:"No incidents recorded."}):e.jsx("ul",{className:"timeline",children:y.map(s=>e.jsxs("li",{children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"node",children:e.jsx("span",{className:`sev ${s.severity}`,title:s.severity,children:s.severity==="minor"?e.jsx(F,{size:16}):e.jsx(B,{size:16})})}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"row",children:[e.jsx("strong",{children:s.title}),e.jsx(t,{to:s.link,className:"text-link",children:"Details"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["ID: ",s.id]}),e.jsxs("span",{children:["Started: ",m(s.startedAt)]}),e.jsxs("span",{children:["Resolved: ",m(s.resolvedAt)]})]}),e.jsx("div",{className:"tags",children:s.affected.map(p=>e.jsx("span",{className:"tag",children:p},p))})]})]},s.id))})]}),e.jsxs(i.Card,{children:[e.jsxs("div",{className:"card-head",children:[e.jsx("h3",{children:"Scheduled Maintenance"}),e.jsx(t,{to:"/admin/system-status",className:"text-link",children:"Calendar"})]}),e.jsxs("table",{className:"flat",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Window"}),e.jsx("th",{children:"Components"}),e.jsx("th",{children:"Link"})]})}),e.jsx("tbody",{children:T.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsxs("div",{children:[v(s.windowStart)," ",N(s.windowStart)," → ",N(s.windowEnd)]}),e.jsx("div",{className:"muted",children:v(s.windowEnd)})]}),e.jsx("td",{children:e.jsx("div",{className:"tags",children:s.components.map(p=>e.jsx("span",{className:"tag",children:p},p))})}),e.jsx("td",{children:e.jsx(t,{to:s.link,className:"text-link",children:"Open"})})]},s.id))})]})]})]}),e.jsxs(i.QuickLinks,{children:[e.jsx("h3",{children:"Quick Navigation"}),e.jsxs("div",{className:"grid",children:[e.jsx(t,{to:"/admin/users",className:"ql",children:"Users"}),e.jsx(t,{to:"/admin/roles",className:"ql",children:"Roles"}),e.jsx(t,{to:"/admin/permissions",className:"ql",children:"Permissions"}),e.jsx(t,{to:"/admin/integrations",className:"ql",children:"Integrations"}),e.jsx(t,{to:"/settings/appearance",className:"ql",children:"Appearance"}),e.jsx(t,{to:"/settings/notifications",className:"ql",children:"Notifications"}),e.jsx(t,{to:"/reports",className:"ql",children:"Reports"}),e.jsx(t,{to:"/tools/import-export",className:"ql",children:"Import / Export"}),e.jsx(t,{to:"/finance",className:"ql",children:"Finance"}),e.jsx(t,{to:"/inventory",className:"ql",children:"Inventory"}),e.jsx(t,{to:"/orders",className:"ql",children:"Orders"}),e.jsx(t,{to:"/invoices",className:"ql",children:"Invoices"})]})]}),l&&e.jsx(i.ModalBackdrop,{onClick:()=>j(!1),children:e.jsxs(i.Modal,{onClick:s=>s.stopPropagation(),children:[e.jsx("h4",{children:"Restart Services"}),e.jsx("p",{children:"This is a display-only theme. Service actions are disabled."}),e.jsx("div",{className:"row",children:e.jsx("button",{onClick:()=>j(!1),children:"Close"})})]})})]})}export{W as default};
