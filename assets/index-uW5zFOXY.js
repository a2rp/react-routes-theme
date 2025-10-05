import{d as $,u as w,r as k,j as e,N as r,L as o}from"./index-CvWKwy17.js";import{_ as C,a as T,b as S,k as l,T as A,S as F,A as L,D as R,x as P,r as M}from"./index-BJa2s43o.js";const x="var(--text, #f3f4f6)",t="var(--muted, #a0a0a7)",n="var(--card, #111318)",a="var(--border, #23262d)",i="var(--accent, #5aa9ff)",B="var(--accent-soft, rgba(90,169,255,0.15))",g="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",_={Page:$.div`
        color: ${x};
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        .card {
            background: ${n};
            border: 1px solid ${a};
            border-radius: 12px;
            box-shadow: ${g};
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", monospace;
        }

        .ghost {
            background: transparent;
            border: 1px solid ${a};
            color: ${x};
            padding: 6px 10px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .ghost:hover {
            border-color: ${i};
            color: ${i};
            background: rgba(0, 0, 0, 0.06);
        }
        .ghost.small {
            padding: 4px 8px;
            font-size: 12px;
        }

        .btn {
            background: ${n};
            color: ${x};
            border: 1px solid ${a};
            padding: 8px 12px;
            border-radius: 10px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .btn:hover {
            color: ${i};
            border-color: ${i};
        }
        .btn:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }

        .crumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 13px;
            a {
                color: ${t};
                text-decoration: none;
                border-bottom: 1px dashed transparent;
            }
            a:hover {
                color: ${i};
                border-bottom-color: ${i};
            }
            span[aria-current="page"] {
                color: ${x};
            }
        }

        .pageHead {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: start;

            .titleBlock {
                .titleLine {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                }
                h1 {
                    font-size: 24px;
                    line-height: 1.2;
                }
                .titleIcon {
                    opacity: 0.9;
                }
                .badge {
                    font-size: 12px;
                    padding: 2px 8px;
                    border-radius: 999px;
                    border: 1px solid ${a};
                    background: ${"color-mix(in oklab, "+i+" 12%, transparent)"};
                    color: ${i};
                }
                .subtle {
                    color: ${t};
                    margin-top: 6px;
                }
            }

            .actions {
                display: inline-flex;
                gap: 8px;
                flex-wrap: wrap;
                justify-content: flex-end;
            }
        }

        .quickNav {
            display: grid;
            grid-template-columns: repeat(8, minmax(160px, 1fr));
            gap: 8px;
            a {
                border: 1px solid ${a};
                background: ${n};
                border-radius: 10px;
                padding: 8px 10px;
                text-decoration: none;
                color: ${t};
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            a:hover {
                border-color: ${i};
                color: ${i};
                background: rgba(0, 0, 0, 0.06);
            }
            @media (max-width: 1200px) {
                grid-template-columns: repeat(4, 1fr);
            }
            @media (max-width: 800px) {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .kpis {
            display: grid;
            grid-template-columns: repeat(3, minmax(220px, 1fr));
            gap: 12px;

            .kpiCard {
                display: grid;
                grid-template-columns: 44px 1fr;
                align-items: center;
                gap: 12px;
                padding: 12px;
                border-radius: 12px;
                border: 1px solid ${a};
                background: ${n};
                box-shadow: ${g};
            }
            .kpiIcon {
                width: 44px;
                height: 44px;
                border-radius: 10px;
                display: grid;
                place-items: center;
                border: 1px solid ${a};
                background: ${"color-mix(in oklab, "+i+" 10%, transparent)"};
                color: ${i};
                font-size: 18px;
            }
            .kpiMeta .kpiValue {
                font-weight: 700;
            }
            .kpiMeta .kpiLabel {
                color: ${t};
                font-size: 12px;
                margin-top: 2px;
            }

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 12px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }

            .searchBox input {
                width: 100%;
                background: ${n};
                border: 1px solid ${a};
                color: ${x};
                padding: 10px 12px;
                border-radius: 10px;
                outline: none;
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
            }
            .searchBox input::placeholder {
                color: ${t};
            }
            .searchBox input:focus {
                border-color: ${i};
                box-shadow: 0 0 0 3px ${B};
            }

            .helperLinks {
                display: inline-flex;
                gap: 8px;
                align-items: center;
                justify-content: flex-end;
                flex-wrap: wrap;
                a.ghost {
                    border-radius: 8px;
                }
            }
        }

        .tableWrap {
            padding: 12px;

            .tableHead {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                padding: 6px 4px 12px 4px;
                h3 {
                    font-size: 16px;
                }
                .hint {
                    color: ${t};
                    font-size: 12px;
                }
            }

            .tableScroller {
                overflow: auto;
                border: 1px solid ${a};
                border-radius: 10px;
                background: ${"color-mix(in oklab, "+n+" 96%, transparent)"};
            }

            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            thead th {
                text-align: left;
                padding: 10px;
                background: ${n};
                border-bottom: 1px solid ${a};
                color: ${i};
                position: sticky;
                top: 0;
                z-index: 1;
            }
            tbody td {
                padding: 10px;
                border-bottom: 1px solid ${a};
                vertical-align: top;
            }
            tbody tr:hover {
                background: rgba(0, 0, 0, 0.06);
            }
            .right {
                text-align: right;
            }

            .rowActions {
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            .linkBtn {
                background: transparent;
                border: none;
                color: ${t};
                display: inline-flex;
                align-items: center;
                gap: 6px;
                cursor: pointer;
                padding: 0;
            }
            .linkBtn:hover {
                color: ${i};
            }

            .scopeChips {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                .chip {
                    font-size: 12px;
                    border: 1px solid ${a};
                    border-radius: 999px;
                    padding: 2px 8px;
                    color: ${t};
                    background: ${"color-mix(in oklab, "+i+" 8%, transparent)"};
                }
            }

            .status {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${a};
                font-size: 12px;
            }
            .status.active {
                color: ${i};
                background: ${"color-mix(in oklab, "+i+" 12%, transparent)"};
            }
            .status.revoked {
                color: ${t};
                background: rgba(0, 0, 0, 0.08);
            }

            .mutedRow td {
                color: ${t};
            }
            .empty {
                display: flex;
                gap: 8px;
                align-items: center;
                padding: 10px;
                color: ${t};
            }
        }

        .relatedRoutes {
            display: grid;
            grid-template-columns: repeat(3, minmax(220px, 1fr));
            gap: 16px;
            margin-top: 12px;

            .rrCol {
                border: 1px solid ${a};
                border-radius: 10px;
                padding: 12px;
                background: ${n};
                box-shadow: ${g};
            }
            h4 {
                margin-bottom: 8px;
            }
            ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            li + li {
                margin-top: 6px;
            }
            a {
                color: ${t};
                text-decoration: none;
                border-bottom: 1px dashed transparent;
            }
            a:hover {
                color: ${i};
                border-bottom-color: ${i};
            }
            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        /* Toasts */
        .toasts {
            position: fixed;
            right: 16px;
            bottom: 16px;
            display: grid;
            gap: 8px;
            z-index: 50;
        }
        .toast {
            background: ${n};
            border: 1px solid ${a};
            color: ${x};
            padding: 8px 12px;
            border-radius: 8px;
            box-shadow: ${g};
        }

        /* Modal */
        .modalRoot {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            display: grid;
            place-items: center;
            z-index: 60;
        }
        .modalCard {
            width: min(680px, 96vw);
            background: ${n};
            border: 1px solid ${a};
            border-radius: 12px;
            box-shadow: ${g};
            overflow: hidden;
        }
        .modalHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border-bottom: 1px solid ${a};
            h4 {
                font-size: 16px;
            }
            .iconBtn {
                background: transparent;
                color: ${t};
                border: 1px solid ${a};
                border-radius: 8px;
                width: 34px;
                height: 34px;
                display: grid;
                place-items: center;
                cursor: pointer;
            }
            .iconBtn:hover {
                color: ${i};
                border-color: ${i};
            }
        }
        .modalBody {
            padding: 12px;
            color: ${x};
        }
        .modalBody .callout {
            margin-top: 8px;
            border: 1px dashed ${a};
            padding: 8px;
            border-radius: 8px;
            color: ${t};
            background: ${"color-mix(in oklab, "+i+" 6%, transparent)"};
        }
        .modalFoot {
            padding: 10px 12px;
            border-top: 1px solid ${a};
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
    `},v=[{id:"TKN-9001",label:"Production – Web App",prefix:"pk_live",masked:"pk_live_••••••••••7FQ2",lastFour:"7FQ2",scope:["read:customers","read:orders","read:invoices"],environment:"Production",created:"Sat Oct 04 2025 09:12:36hrs",lastUsed:"Sat Oct 04 2025 15:38:20hrs",expires:"—",status:"Active"},{id:"TKN-9002",label:"Production – Mobile",prefix:"pk_live",masked:"pk_live_••••••••••A1Z9",lastFour:"A1Z9",scope:["read:customers","read:orders"],environment:"Production",created:"Fri Oct 03 2025 14:03:09hrs",lastUsed:"Sat Oct 04 2025 12:18:02hrs",expires:"—",status:"Active"},{id:"TKN-9003",label:"Staging – CI Runner",prefix:"pk_test",masked:"pk_test_••••••••••Q2M4",lastFour:"Q2M4",scope:["read:*"],environment:"Staging",created:"Thu Oct 02 2025 11:32:40hrs",lastUsed:"Fri Oct 03 2025 20:01:00hrs",expires:"Sun Nov 30 2025",status:"Active"},{id:"TKN-9004",label:"Legacy – Partner Sync",prefix:"pk_legacy",masked:"pk_legacy_••••••••••8K3X",lastFour:"8K3X",scope:["read:partners"],environment:"Production",created:"Mon Sep 15 2025 10:05:12hrs",lastUsed:"Mon Sep 22 2025 19:42:09hrs",expires:"—",status:"Revoked"},{id:"TKN-9005",label:"Sandbox – QA Team",prefix:"pk_test",masked:"pk_test_••••••••••9D7H",lastFour:"9D7H",scope:["read:*"],environment:"Sandbox",created:"Wed Oct 01 2025 08:20:00hrs",lastUsed:"Sat Oct 04 2025 08:21:10hrs",expires:"—",status:"Active"}];function z(){const[b,d]=k.useState([]);return{toasts:b,push:c=>{const u=Math.random().toString(36).slice(2);d(m=>[...m,{id:u,msg:c}]),setTimeout(()=>d(m=>m.filter(j=>j.id!==u)),2200)}}}function I({open:b,title:d,body:h,onClose:c}){return b?e.jsx("div",{className:"modalRoot",role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"modalCard",children:[e.jsxs("div",{className:"modalHead",children:[e.jsx("h4",{children:d}),e.jsx("button",{className:"iconBtn",onClick:c,"aria-label":"Close",children:e.jsx(M,{})})]}),e.jsxs("div",{className:"modalBody",children:[e.jsx("p",{children:h}),e.jsx("div",{className:"callout",children:"This is a demo preview. Actions are disabled by design."})]}),e.jsx("div",{className:"modalFoot",children:e.jsx("button",{onClick:c,children:"Close"})})]})}):null}function D(){w();const{toasts:b,push:d}=z(),[h,c]=k.useState(""),[u,m]=k.useState(!1),j=k.useMemo(()=>{const s=h.trim().toLowerCase();return s?v.filter(p=>[p.label,p.environment,p.status,p.prefix,p.lastFour].join(" ").toLowerCase().includes(s)):v},[h]),f=async s=>{try{await navigator.clipboard.writeText(s),d("Copied to clipboard")}catch{d("Copy not available")}},N=()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),300)},50)};return e.jsxs(_.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),e.jsxs("nav",{className:"crumbs","aria-label":"Breadcrumb",children:[e.jsx(r,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:"/settings",children:"Settings"}),e.jsx("span",{children:"/"}),e.jsx("span",{"aria-current":"page",children:"Tokens"})]}),e.jsxs("header",{className:"pageHead",children:[e.jsxs("div",{className:"titleBlock",children:[e.jsxs("div",{className:"titleLine",children:[e.jsx(C,{className:"titleIcon","aria-hidden":"true"}),e.jsx("h1",{children:"API Tokens"}),e.jsx("span",{className:"badge",children:"Demo"})]}),e.jsx("p",{className:"subtle",children:"Manage read-only API tokens for integrations and client applications. This preview is display-only."})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btn",disabled:!0,title:"Demo: disabled",children:"New Token"}),e.jsx("button",{className:"btn",onClick:()=>m(!0),title:"Demo: disabled",children:"Rotate All"}),e.jsxs("button",{className:"btn",onClick:N,title:"Print this section",children:[e.jsx(T,{})," Print"]}),e.jsxs(o,{className:"btn ghost",to:"/tools/import-export",title:"Go to Import/Export",children:[e.jsx(S,{})," Export"]})]})]}),e.jsxs("div",{className:"quickNav",children:[e.jsxs(o,{to:"/settings/profile",children:[e.jsx(l,{})," Profile"]}),e.jsxs(o,{to:"/settings/appearance",children:[e.jsx(l,{})," Appearance"]}),e.jsxs(o,{to:"/settings/notifications",children:[e.jsx(l,{})," Notifications"]}),e.jsxs(o,{to:"/settings/print-templates",children:[e.jsx(l,{})," Print Templates"]}),e.jsxs(o,{to:"/admin/users",children:[e.jsx(l,{})," Admin · Users"]}),e.jsxs(o,{to:"/admin/roles",children:[e.jsx(l,{})," Admin · Roles"]}),e.jsxs(o,{to:"/admin/permissions",children:[e.jsx(l,{})," Admin · Permissions"]}),e.jsxs(o,{to:"/tools/theme-tokens",children:[e.jsx(l,{})," Theme Tokens"]})]}),e.jsxs("section",{className:"kpis",children:[e.jsxs("div",{className:"kpiCard",children:[e.jsx("div",{className:"kpiIcon",children:e.jsx(A,{})}),e.jsxs("div",{className:"kpiMeta",children:[e.jsx("div",{className:"kpiValue",children:"4"}),e.jsx("div",{className:"kpiLabel",children:"Active Tokens"})]})]}),e.jsxs("div",{className:"kpiCard",children:[e.jsx("div",{className:"kpiIcon",children:e.jsx(F,{})}),e.jsxs("div",{className:"kpiMeta",children:[e.jsx("div",{className:"kpiValue",children:"1"}),e.jsx("div",{className:"kpiLabel",children:"Revoked"})]})]}),e.jsxs("div",{className:"kpiCard",children:[e.jsx("div",{className:"kpiIcon",children:e.jsx(L,{})}),e.jsxs("div",{className:"kpiMeta",children:[e.jsx("div",{className:"kpiValue",children:"Sat Oct 04 2025 13:12:00hrs"}),e.jsx("div",{className:"kpiLabel",children:"Last Rotation"})]})]})]}),e.jsxs("section",{className:"toolbar",children:[e.jsx("div",{className:"searchBox",children:e.jsx("input",{type:"text",placeholder:"Search tokens, labels, env, last 4…",value:h,onChange:s=>c(s.target.value),"aria-label":"Search tokens"})}),e.jsxs("div",{className:"helperLinks",children:[e.jsxs(o,{to:"/help",className:"ghost",children:[e.jsx(R,{})," Help Center"]}),e.jsx(o,{to:"/faq",className:"ghost",children:"FAQ"}),e.jsx(o,{to:"/changelog",className:"ghost",children:"Changelog"}),e.jsx(o,{to:"/roadmap",className:"ghost",children:"Roadmap"})]})]}),e.jsxs("section",{className:"tableWrap card",id:"search-print-area","aria-label":"Tokens table",children:[e.jsxs("div",{className:"tableHead",children:[e.jsx("h3",{children:"Token Inventory"}),e.jsx("span",{className:"hint",children:"Select any row to view deep links & related routes."})]}),e.jsx("div",{className:"tableScroller",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Label"}),e.jsx("th",{children:"Token"}),e.jsx("th",{children:"Env"}),e.jsx("th",{children:"Scope"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Last Used"}),e.jsx("th",{children:"Expires"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"right",children:"Actions"})]})}),e.jsxs("tbody",{children:[j.map(s=>e.jsxs("tr",{className:s.status==="Revoked"?"mutedRow":"",children:[e.jsxs("td",{children:[e.jsx("div",{className:"cellTitle",children:s.label}),e.jsx("div",{className:"meta",children:e.jsx("span",{className:"mono",children:s.id})})]}),e.jsxs("td",{children:[e.jsx("div",{className:"mono",children:s.masked}),e.jsxs("button",{className:"linkBtn",onClick:()=>f(s.masked),title:"Copy masked token",children:[e.jsx(P,{})," Copy"]})]}),e.jsx("td",{children:s.environment}),e.jsx("td",{children:e.jsx("div",{className:"scopeChips",children:s.scope.map((p,y)=>e.jsx("span",{className:"chip",children:p},y))})}),e.jsx("td",{children:s.created}),e.jsx("td",{children:s.lastUsed}),e.jsx("td",{children:s.expires}),e.jsx("td",{children:e.jsx("span",{className:`status ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("td",{className:"right",children:e.jsxs("div",{className:"rowActions",children:[e.jsxs(o,{to:"/settings/tokens",className:"ghost small",children:[e.jsx(l,{})," Open"]}),e.jsx("button",{className:"ghost small",disabled:!0,title:"Demo: disabled",children:"Revoke"}),e.jsx("button",{className:"ghost small",disabled:!0,title:"Demo: disabled",children:"Regenerate"})]})})]},s.id)),j.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsxs("div",{className:"empty",children:["No tokens match your search.",e.jsx("button",{onClick:()=>c(""),className:"ghost small",children:"Clear search"})]})})})]})]})}),e.jsxs("div",{className:"relatedRoutes",children:[e.jsxs("div",{className:"rrCol",children:[e.jsx("h4",{children:"Related Settings"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{to:"/settings/profile",children:"Profile"})}),e.jsx("li",{children:e.jsx(r,{to:"/settings/appearance",children:"Appearance"})}),e.jsx("li",{children:e.jsx(r,{to:"/settings/notifications",children:"Notifications"})}),e.jsx("li",{children:e.jsx(r,{to:"/settings/backups",children:"Backups"})}),e.jsx("li",{children:e.jsx(r,{to:"/settings/print-templates",children:"Print Templates"})}),e.jsx("li",{children:e.jsx(r,{to:"/settings/webhooks",children:"Webhooks"})})]})]}),e.jsxs("div",{className:"rrCol",children:[e.jsx("h4",{children:"Admin & Access"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{to:"/admin/users",children:"Users"})}),e.jsx("li",{children:e.jsx(r,{to:"/admin/roles",children:"Roles"})}),e.jsx("li",{children:e.jsx(r,{to:"/admin/permissions",children:"Permissions"})}),e.jsx("li",{children:e.jsx(r,{to:"/admin/audit-log",children:"Audit Log"})}),e.jsx("li",{children:e.jsx(r,{to:"/admin/activity",children:"Activity"})})]})]}),e.jsxs("div",{className:"rrCol",children:[e.jsx("h4",{children:"Developer Tools"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{to:"/tools/import-export",children:"Import / Export"})}),e.jsx("li",{children:e.jsx(r,{to:"/tools/theme-tokens",children:"Theme Tokens"})}),e.jsx("li",{children:e.jsx(r,{to:"/tools/playground",children:"Playground"})}),e.jsx("li",{children:e.jsx(r,{to:"/help",children:"Help Center"})}),e.jsx("li",{children:e.jsx(r,{to:"/faq",children:"FAQ"})})]})]})]})]}),e.jsx("div",{className:"toasts","aria-live":"polite","aria-atomic":"true",children:b.map(s=>e.jsx("div",{className:"toast",children:s.msg},s.id))}),e.jsx(I,{open:u,title:"Rotate All Tokens",body:"Rotation updates all active tokens. In the preview build, this operation is disabled.",onClose:()=>m(!1)})]})}export{D as default};
