import{d as _,a as X,r as y,j as e,ai as Z,N as x,aj as ee,ak as se,al as ae,H as ie,k as E,am as te,e as re,an as B,L as p,l as ne,ao as oe,I as le}from"./index-BpMGcZ_2.js";import{k as v,A as de}from"./index-BNpd0YtY.js";const ce="var(--bg, #0d1117)",o="var(--text, #f3f4f6)",h="var(--muted, #a0a0a7)",c="var(--card, #111318)",t="var(--border, #23262d)",r="var(--accent, #5aa9ff)",g="var(--accent-soft, rgba(90,169,255,0.15))",A="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",pe={Wrap:_.div`
        width: 100%;
        color: ${o};

        /* ===== Toolbar ===== */
        .toolbar {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 12px;
            align-items: center;
            margin-bottom: 16px;
        }
        .title {
            display: flex;
            align-items: baseline;
            gap: 10px;
            h1 {
                font-size: 20px;
                line-height: 1.2;
                letter-spacing: 0.3px;
            }
            .sub {
                color: ${h};
                font-size: 12px;
                margin-left: 6px;
            }
            svg {
                opacity: 0.9;
            }
        }

        .quick-nav {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .chip {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 10px;
                border: 1px solid ${t};
                border-radius: 999px;
                background: ${c};
                color: ${o};
                text-decoration: none;
                font-size: 12px;
                transition: border-color 0.2s, box-shadow 0.2s, color 0.2s,
                    background 0.2s;
            }
            .chip:hover {
                color: ${r};
                border-color: ${r};
                box-shadow: 0 0 0 3px ${g};
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;

            .search {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                background: ${c};
                border: 1px solid ${t};
                border-radius: 8px;
                padding: 6px 10px;
                min-width: 360px;
            }
            .search input {
                background: transparent;
                color: ${o};
                border: none;
                outline: none;
                width: 100%;
                font-size: 13px;
            }
            .search .ghost {
                border: none;
                background: transparent;
                color: ${h};
                padding: 4px;
                border-radius: 6px;
                cursor: pointer;
            }
            .search .ghost:hover {
                color: ${r};
            }

            .sp {
                width: 6px;
            }

            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border: 1px solid ${t};
                border-radius: 8px;
                background: ${c};
                color: ${o};
                font-size: 13px;
                cursor: pointer;
                transition: color 0.2s, border-color 0.2s, background 0.2s,
                    box-shadow 0.2s, transform 0.06s;
            }
            button:hover {
                color: ${r};
                border-color: ${r};
                box-shadow: 0 0 0 3px ${g};
            }
            button:active {
                transform: translateY(1px);
            }
            button.ghost {
                background: transparent;
            }
            button.danger {
                border-color: ${t};
            }
            @media (max-width: 1100px) {
                grid-template-columns: 1fr;
                .actions {
                    flex-wrap: wrap;
                }
                .actions .search {
                    min-width: 100%;
                    order: -1;
                }
            }
        }

        /* ===== Stat cards ===== */
        .cards {
            display: grid;
            grid-template-columns: repeat(4, minmax(140px, 1fr));
            gap: 12px;
            margin-bottom: 12px;
        }
        .card {
            background: ${c};
            border: 1px solid ${t};
            border-radius: 12px;
            box-shadow: ${A};
            padding: 14px;
        }
        .card.stat {
            display: grid;
            gap: 6px;
        }
        .card.stat .value {
            font-size: 26px;
            font-weight: 700;
            letter-spacing: 0.5px;
        }
        .card.stat .label {
            color: ${h};
            font-size: 12px;
        }

        /* ===== Filters ===== */
        .filters {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0 16px;
            flex-wrap: wrap;
        }
        .filters > span {
            color: ${h};
            font-size: 12px;
        }
        .pill {
            text-decoration: none;
            color: ${o};
            border: 1px solid ${t};
            background: ${c};
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            transition: color 0.2s, border-color 0.2s, background 0.2s,
                box-shadow 0.2s;
        }
        .pill:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${g};
        }

        /* ===== Day group ===== */
        .day {
            margin-bottom: 16px;
        }
        .dayHeader {
            display: flex;
            align-items: baseline;
            gap: 10px;
            padding: 8px 2px;
            position: sticky;
            top: 0;
            background: ${ce};
            z-index: 1;
            border-bottom: 1px solid ${t};
        }
        .dayHeader .date {
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .dayHeader .hint {
            color: ${h};
            font-size: 12px;
        }

        /* ===== Timeline ===== */
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .row {
            display: grid;
            grid-template-columns: 32px 1fr;
            gap: 10px;
            align-items: start;
        }
        .dot {
            height: 28px;
            width: 28px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            border: 1px solid ${t};
            background: ${c};
            color: ${o};
        }
        .dot.warn {
            box-shadow: 0 0 0 3px ${g};
        }
        .dot.error {
            box-shadow: 0 0 0 3px ${g};
        }

        .rowMain {
            background: ${c};
            border: 1px solid ${t};
            border-radius: 12px;
            box-shadow: ${A};
            padding: 12px;
            display: grid;
            gap: 10px;
        }

        .rowTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            border-bottom: 1px dashed ${t};
            padding-bottom: 6px;
        }
        .meta {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            font-size: 12px;
        }
        .meta .id {
            font-weight: 600;
        }
        .meta .type {
            color: ${h};
        }
        .meta .sev {
            padding: 2px 8px;
            border: 1px solid ${t};
            border-radius: 999px;
        }
        .meta .sev.warn {
        }
        .meta .sev.error {
        }
        .meta .ts {
            color: ${r};
        }

        .rowActions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .rowActions .ghost {
            display: inline-flex;
            gap: 6px;
            align-items: center;
            border: 1px solid ${t};
            background: transparent;
            color: ${o};
            border-radius: 8px;
            padding: 6px 10px;
            font-size: 12px;
            cursor: pointer;
            text-decoration: none;
        }
        .rowActions .ghost:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${g};
        }

        .rowBody {
            display: grid;
            gap: 10px;
        }
        .who,
        .what {
            display: flex;
            gap: 8px;
            align-items: baseline;
            flex-wrap: wrap;
            font-size: 13px;
        }
        .label {
            color: ${h};
            font-size: 12px;
        }
        .entity {
            color: ${o};
            text-decoration: none;
            border-bottom: 1px dashed transparent;
        }
        .entity:hover {
            color: ${r};
            border-color: ${r};
        }
        .muted {
            color: ${h};
            font-size: 12px;
        }

        .msg {
            font-size: 13px;
        }

        .details {
            display: grid;
            grid-template-columns: repeat(3, minmax(160px, 1fr));
            gap: 10px;
        }
        .kv {
            background: color-mix(in oklab, ${c} 92%, transparent);
            border: 1px solid ${t};
            border-radius: 8px;
            padding: 8px 10px;
            display: grid;
            gap: 4px;
        }
        .kv span {
            color: ${h};
            font-size: 12px;
        }
        .kv code {
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 12px;
        }

        .links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 4px;
        }
        .links .link {
            text-decoration: none;
            color: ${o};
            border: 1px solid ${t};
            background: ${c};
            border-radius: 8px;
            padding: 6px 10px;
            font-size: 12px;
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .links .link:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${g};
        }

        @media (max-width: 960px) {
            .details {
                grid-template-columns: 1fr;
            }
            .cards {
                grid-template-columns: repeat(2, 1fr);
            }
            .toolbar {
                grid-template-columns: 1fr;
            }
        }

        /* ===== Modal ===== */
        .modal {
            position: fixed;
            inset: 0;
            backdrop-filter: blur(2px);
            background: rgba(0, 0, 0, 0.4);
            display: grid;
            place-items: center;
            z-index: 60;
        }
        .modalCard {
            width: min(520px, 92vw);
            background: ${c};
            border: 1px solid ${t};
            border-radius: 12px;
            box-shadow: ${A};
            padding: 14px;
        }
        .modalHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            border-bottom: 1px dashed ${t};
            padding-bottom: 8px;
        }
        .modalHead h3 {
            font-size: 16px;
        }
        .modalHead .icon {
            background: transparent;
            border: 1px solid ${t};
            border-radius: 8px;
            color: ${o};
            padding: 6px;
            cursor: pointer;
        }
        .modalHead .icon:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${g};
        }
        .modalBody {
            padding: 10px 0;
            color: ${o};
        }
        .modalBody p {
            margin: 6px 0;
            color: ${o};
        }
        .modalFoot {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            padding-top: 8px;
        }
        .modalFoot button {
            background: ${c};
            color: ${o};
            border: 1px solid ${t};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: color 0.2s, border-color 0.2s, box-shadow 0.2s,
                transform 0.06s;
        }
        .modalFoot button:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${g};
        }
        .modalFoot button:active {
            transform: translateY(1px);
        }
    `},T=n=>String(n).padStart(2,"0"),H=n=>{const l=n.toDateString().split(" ");if(l.length===4){const b=T(parseInt(l[2],10));return`${l[0]} ${l[1]} ${b} ${l[3]}`}return n.toDateString()},W=n=>`${T(n.getHours())}:${T(n.getMinutes())}:${T(n.getSeconds())}hrs`,me=n=>`${H(n)} ${W(n)}`,xe=(n,l)=>{const b=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),$=URL.createObjectURL(b),m=document.createElement("a");m.href=$,m.download=n,document.body.appendChild(m),m.click(),m.remove(),URL.revokeObjectURL($)};var P,F;const he=(((F=(P=import.meta)==null?void 0:P.env)==null?void 0:F.BASE_URL)||"/").replace(/\/+$/,""),L=[{id:"ACT-9001",ts:"2025-10-04T11:12:05+05:30",type:"auth.login",severity:"info",actor:{id:"U-1001",name:"Ashish Ranjan",link:"/admin/users/U-1001"},target:{kind:"user",id:"U-1001",name:"Ashish Ranjan",link:"/admin/users/U-1001"},message:"Signed in via password.",meta:{ip:"203.0.113.8",ua:"Chrome 124 / Windows",location:"Patna, IN"},links:[{label:"Users",to:"/admin/users"},{label:"Audit Log",to:"/admin/audit-log"}]},{id:"ACT-9000",ts:"2025-10-04T10:40:44+05:30",type:"settings.updated",severity:"info",actor:{id:"U-1001",name:"Ashish Ranjan",link:"/admin/users/U-1001"},target:{kind:"system",id:"APP",name:"System Settings",link:"/settings"},message:"Appearance → switched to light theme.",meta:{ip:"203.0.113.8",ua:"Chrome 124 / Windows",location:"Patna, IN"},links:[{label:"Appearance",to:"/settings/appearance"},{label:"Settings",to:"/settings"}]},{id:"ACT-8999",ts:"2025-10-04T09:15:12+05:30",type:"role.assigned",severity:"info",actor:{id:"U-1002",name:"System Admin",link:"/admin/users/U-1002"},target:{kind:"user",id:"U-1020",name:"Demo User",link:"/admin/users/U-1020"},message:"Assigned role: Manager.",meta:{ip:"198.51.100.5",ua:"Firefox 122 / Linux",location:"Bengaluru, IN"},links:[{label:"Roles",to:"/admin/roles"},{label:"Permissions",to:"/admin/permissions"}]},{id:"ACT-8998",ts:"2025-10-04T08:51:31+05:30",type:"order.created",severity:"info",actor:{id:"U-1020",name:"Demo User",link:"/admin/users/U-1020"},target:{kind:"order",id:"ORD-3001",name:"Sales Order",link:"/orders/ORD-3001"},message:"Created sales order for customer CUST-1001.",meta:{ip:"198.51.100.5",ua:"Firefox 122 / Linux",location:"Bengaluru, IN"},links:[{label:"Orders",to:"/orders"},{label:"Customer",to:"/customers/CUST-1001"}]},{id:"ACT-8997",ts:"2025-10-03T22:02:18+05:30",type:"invoice.issued",severity:"info",actor:{id:"U-1003",name:"Billing Bot",link:"/admin/users/U-1003"},target:{kind:"invoice",id:"INV-2031",name:"Invoice INV-2031",link:"/invoices/INV-2031"},message:"Issued invoice for order ORD-2999.",meta:{ip:"203.0.113.18",ua:"Service/1.0",location:"Mumbai, IN"},links:[{label:"Invoices",to:"/invoices"},{label:"Order",to:"/orders/ORD-2999"}]},{id:"ACT-8996",ts:"2025-10-03T20:30:08+05:30",type:"permission.updated",severity:"warn",actor:{id:"U-1002",name:"System Admin",link:"/admin/users/U-1002"},target:{kind:"role",id:"ROLE-ADMIN",name:"Admin",link:"/admin/permissions"},message:"Updated role permissions: Admin can manage feature flags.",meta:{ip:"203.0.113.18",ua:"Edge 123 / Windows",location:"Mumbai, IN"},links:[{label:"Permissions",to:"/admin/permissions"},{label:"Feature Flags",to:"/admin/feature-flags"}]},{id:"ACT-8995",ts:"2025-10-03T18:45:53+05:30",type:"system.health",severity:"info",actor:{id:"SYS",name:"System",link:"/admin/system-status"},target:{kind:"system",id:"APP",name:"System Status",link:"/admin/system-status"},message:"All services nominal.",meta:{ip:"127.0.0.1",ua:"Health/1.0",location:"—"},links:[{label:"System Status",to:"/admin/system-status"}]},{id:"ACT-8994",ts:"2025-10-03T15:12:41+05:30",type:"integration.synced",severity:"info",actor:{id:"U-1004",name:"Ops",link:"/admin/users/U-1004"},target:{kind:"integration",id:"INT-GST",name:"GST Portal",link:"/admin/integrations"},message:"GST returns synced.",meta:{ip:"192.0.2.10",ua:"Chrome 124 / macOS",location:"Pune, IN"},links:[{label:"Integrations",to:"/admin/integrations"},{label:"GST Reports",to:"/reports/gst"}]},{id:"ACT-8993",ts:"2025-10-03T11:28:19+05:30",type:"email.template.edited",severity:"info",actor:{id:"U-1015",name:"Comms",link:"/admin/users/U-1015"},target:{kind:"email-template",id:"ET-INV",name:"Invoice Email",link:"/admin/email-templates"},message:"Updated invoice email template.",meta:{ip:"192.0.2.10",ua:"Chrome 124 / macOS",location:"Pune, IN"},links:[{label:"Email Templates",to:"/admin/email-templates"},{label:"Invoices",to:"/invoices"}]},{id:"ACT-8992",ts:"2025-10-03T09:00:01+05:30",type:"sms.template.edited",severity:"info",actor:{id:"U-1015",name:"Comms",link:"/admin/users/U-1015"},target:{kind:"sms-template",id:"ST-OTP",name:"OTP SMS",link:"/admin/sms-templates"},message:"Edited OTP SMS template.",meta:{ip:"192.0.2.10",ua:"Chrome 124 / macOS",location:"Pune, IN"},links:[{label:"SMS Templates",to:"/admin/sms-templates"}]}],ge=({level:n})=>n==="warn"?e.jsx(oe,{size:16,"aria-label":"warning"}):n==="error"?e.jsx(B,{size:16,"aria-label":"error"}):e.jsx(le,{size:16,"aria-label":"info"}),ye=()=>{const{search:n}=X(),[l,b]=y.useState(""),[$,m]=y.useState(!1),[Y,U]=y.useState(null);y.useEffect(()=>{const i=document.getElementById("activity-search");if(i){const a=requestAnimationFrame(()=>{try{i.focus({preventScroll:!0})}catch{i.focus()}});return()=>cancelAnimationFrame(a)}},[]);const C=y.useMemo(()=>{const i=l.trim().toLowerCase().split(/\s+/).filter(Boolean);return i.length?L.filter(a=>{var d,u,j,f,k,w,N;const s=[a.id,a.type,a.severity,(d=a.actor)==null?void 0:d.name,(u=a.actor)==null?void 0:u.id,(j=a.target)==null?void 0:j.name,(f=a.target)==null?void 0:f.id,a.message,(k=a.meta)==null?void 0:k.ip,(w=a.meta)==null?void 0:w.location,(N=a.meta)==null?void 0:N.ua].join(" ").toLowerCase();return i.every(S=>s.includes(S))}):L},[l]),q=y.useMemo(()=>{const i=new Map;for(const a of C){const s=new Date(a.ts),d=H(s);i.has(d)||i.set(d,[]),i.get(d).push(a)}return Array.from(i.entries()).sort((a,s)=>new Date(s[0])-new Date(a[0])).map(([a,s])=>({dateLabel:a,items:s.sort((d,u)=>new Date(u.ts)-new Date(d.ts))}))},[C]),V=()=>{xe(`admin-activity-${Date.now()}.json`,C)},G=()=>{document.body.classList.add("print-section-mode");const i=()=>{document.body.classList.remove("print-section-mode"),window.removeEventListener("afterprint",i)};window.addEventListener("afterprint",i),window.print()},J=()=>{{m(!0);return}},Q=async i=>{const a=`${window.location.origin}${he}/admin/activity?at=${encodeURIComponent(i)}`;try{await navigator.clipboard.writeText(a),U(i),setTimeout(()=>U(null),1500)}catch{}};return e.jsxs(pe.Wrap,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("div",{className:"title",children:[e.jsx(Z,{size:22}),e.jsx("h1",{children:"Admin Activity"}),e.jsx("span",{className:"sub",children:"system & security timeline"})]}),e.jsxs("div",{className:"quick-nav",children:[e.jsxs(x,{to:"/admin/users",className:"chip",title:"Users",children:[e.jsx(ee,{})," Users"]}),e.jsxs(x,{to:"/admin/roles",className:"chip",title:"Roles",children:[e.jsx(se,{})," Roles"]}),e.jsxs(x,{to:"/admin/permissions",className:"chip",title:"Permissions",children:[e.jsx(ae,{})," Permissions"]}),e.jsxs(x,{to:"/admin/system-status",className:"chip",title:"System Status",children:[e.jsx(v,{})," System Status"]}),e.jsxs(x,{to:"/admin/feature-flags",className:"chip",title:"Feature Flags",children:[e.jsx(v,{})," Feature Flags"]}),e.jsxs(x,{to:"/admin/integrations",className:"chip",title:"Integrations",children:[e.jsx(v,{})," Integrations"]}),e.jsxs(x,{to:"/admin/email-templates",className:"chip",title:"Email Templates",children:[e.jsx(v,{})," Email Templates"]}),e.jsxs(x,{to:"/admin/sms-templates",className:"chip",title:"SMS Templates",children:[e.jsx(v,{})," SMS Templates"]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("div",{className:"search",children:[e.jsx(ie,{size:18}),e.jsx("input",{id:"activity-search",value:l,onChange:i=>b(i.target.value),placeholder:"Search activity (actor, type, IP, message...)","aria-label":"Search admin activity"}),l&&e.jsx("button",{className:"ghost",onClick:()=>b(""),"aria-label":"Clear search",children:e.jsx(E,{size:16})})]}),e.jsx("div",{className:"sp"}),e.jsxs("button",{className:"ghost",onClick:()=>window.location.reload(),title:"Refresh",children:[e.jsx(de,{size:16}),e.jsx("span",{children:"Refresh"})]}),e.jsxs("button",{onClick:V,title:"Export JSON",children:[e.jsx(te,{size:16}),e.jsx("span",{children:"Export"})]}),e.jsxs("button",{onClick:G,title:"Print section",children:[e.jsx(re,{size:16}),e.jsx("span",{children:"Print"})]}),e.jsxs("button",{className:"danger",onClick:J,title:"Clear activity (demo)",children:[e.jsx(B,{size:16}),e.jsx("span",{children:"Clear"})]})]})]}),e.jsxs("div",{className:"cards",children:[e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"value",children:"09"}),e.jsx("div",{className:"label",children:"Events today"})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"value",children:"24"}),e.jsx("div",{className:"label",children:"Last 24 hrs"})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"value",children:"3"}),e.jsx("div",{className:"label",children:"Warnings"})]}),e.jsxs("div",{className:"card stat",children:[e.jsx("div",{className:"value",children:"0"}),e.jsx("div",{className:"label",children:"Errors"})]})]}),e.jsxs("div",{className:"filters",children:[e.jsx("span",{children:"Quick filters:"}),e.jsx(p,{to:"/admin/activity?type=auth.login",className:"pill",children:"Logins"}),e.jsx(p,{to:"/admin/activity?type=order.created",className:"pill",children:"Orders"}),e.jsx(p,{to:"/admin/activity?type=invoice.issued",className:"pill",children:"Invoices"}),e.jsx(p,{to:"/admin/activity?severity=warn",className:"pill",children:"Warnings"}),e.jsx(p,{to:"/admin/activity?severity=error",className:"pill",children:"Errors"}),e.jsx(p,{to:"/admin/activity?date=today",className:"pill",children:"Today"}),e.jsx(p,{to:"/admin/activity?date=yesterday",className:"pill",children:"Yesterday"})]}),e.jsx("div",{id:"search-print-area",children:q.map(({dateLabel:i,items:a})=>e.jsxs("section",{className:"day",children:[e.jsxs("header",{className:"dayHeader",children:[e.jsx("span",{className:"date",children:i}),e.jsxs("span",{className:"hint",children:["(",a.length," events)"]})]}),e.jsx("ul",{className:"timeline",children:a.map(s=>{var u,j,f,k,w,N,S,z,I,M,O,R;const d=new Date(s.ts);return e.jsxs("li",{className:"row",children:[e.jsx("div",{className:`dot ${s.severity}`,children:e.jsx(ge,{level:s.severity})}),e.jsxs("div",{className:"rowMain",children:[e.jsxs("div",{className:"rowTop",children:[e.jsxs("div",{className:"meta",children:[e.jsxs("span",{className:"id",children:["#",s.id]}),e.jsx("span",{className:"type",children:s.type}),e.jsx("span",{className:`sev ${s.severity}`,children:s.severity}),e.jsx("span",{className:"ts",title:me(d),children:W(d)})]}),e.jsxs("div",{className:"rowActions",children:[e.jsxs("button",{className:"ghost",onClick:()=>Q(s.id),title:"Copy deep link",children:[e.jsx(ne,{size:14}),e.jsx("span",{children:Y===s.id?"Copied":"Copy link"})]}),e.jsxs(p,{to:`${((u=s.target)==null?void 0:u.link)||"#"}`,className:"ghost",title:"Open target",children:[e.jsx(v,{size:14}),e.jsx("span",{children:"Open"})]})]})]}),e.jsxs("div",{className:"rowBody",children:[e.jsxs("div",{className:"who",children:[e.jsx("span",{className:"label",children:"Actor:"}),e.jsx(p,{to:((j=s.actor)==null?void 0:j.link)||"#",className:"entity",children:(f=s.actor)==null?void 0:f.name}),e.jsxs("span",{className:"muted",children:["(",(k=s.actor)==null?void 0:k.id,")"]})]}),e.jsxs("div",{className:"what",children:[e.jsx("span",{className:"label",children:"Target:"}),(w=s.target)!=null&&w.link?e.jsx(p,{to:s.target.link,className:"entity",children:(N=s.target)==null?void 0:N.name}):e.jsx("span",{className:"entity",children:(S=s.target)==null?void 0:S.name}),e.jsxs("span",{className:"muted",children:["(",(z=s.target)==null?void 0:z.id,")"]})]}),e.jsx("div",{className:"msg",children:s.message}),e.jsxs("div",{className:"details",children:[e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"IP"}),e.jsx("code",{children:(I=s.meta)==null?void 0:I.ip})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Location"}),e.jsx("code",{children:(M=s.meta)==null?void 0:M.location})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"User Agent"}),e.jsx("code",{children:(O=s.meta)==null?void 0:O.ua})]})]}),(R=s.links)!=null&&R.length?e.jsx("div",{className:"links",children:s.links.map((D,K)=>e.jsx(x,{to:D.to,end:!0,className:"link",children:D.label},K))}):null]})]})]},s.id)})})]},i))}),$&&e.jsx("div",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"demoTitle",children:e.jsxs("div",{className:"modalCard",children:[e.jsxs("div",{className:"modalHead",children:[e.jsx("h3",{id:"demoTitle",children:"Demo mode"}),e.jsx("button",{className:"icon",onClick:()=>m(!1),"aria-label":"Close",children:e.jsx(E,{size:18})})]}),e.jsxs("div",{className:"modalBody",children:[e.jsx("p",{children:"This is a display-only theme. Destructive actions are disabled here."}),e.jsx("p",{children:"You can still navigate, search, print, and export the activity."})]}),e.jsx("div",{className:"modalFoot",children:e.jsx("button",{onClick:()=>m(!1),children:"Okay"})})]})})]})};export{ye as default};
