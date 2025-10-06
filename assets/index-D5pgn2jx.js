import{d as c,u as D,r as u,j as e,N as o}from"./index-Dvs-eF3B.js";import{J as L,k as A,j as T,A as G,a as z,o as P,O as R,e as C,h as O,q as I,S as H}from"./index-HXyGamP9.js";const r="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",p="var(--card, #111318)",t="var(--border, #23262d)",a="var(--accent, #5aa9ff)",g="var(--accent-soft, rgba(90,169,255,0.15))",x={Page:c.div`
        width: 100%;
        color: ${r};
    `,Breadcrumbs:c.nav`
        margin-bottom: 10px;
        display: flex;
        gap: 8px;
        align-items: center;
        a {
            color: ${l};
            text-decoration: none;
        }
        a:hover {
            color: ${a};
        }
        strong {
            color: ${r};
        }
    `,Toolbar:c.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 14px;

        .left {
            display: grid;
            gap: 6px;
            h1 {
                font-size: 22px;
                line-height: 1.2;
            }
            .meta {
                display: flex;
                gap: 8px;
                align-items: center;
                color: ${l};
                font-size: 12px;
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            align-items: center;

            .divider {
                width: 1px;
                height: 22px;
                background: ${t};
                margin: 0 2px;
            }

            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 8px;
                border: 1px solid ${t};
                background: ${p};
                color: ${r};
                cursor: pointer;
                transition: all 0.2s ease;
                font-weight: 500;
            }
            button.ghost:hover {
                border-color: ${a};
                color: ${a};
                background: rgba(0, 0, 0, 0.06);
            }
            button.primary {
                border-color: ${a};
                box-shadow: 0 0 0 3px ${g};
            }
            button.primary:hover {
                transform: translateY(-1px);
            }
            button.danger {
                border-color: ${t};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                box-shadow: none;
            }
            svg {
                font-size: 16px;
            }
        }
    `,Filters:c.div`
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 12px;
        flex-wrap: wrap;

        .input {
            position: relative;
            min-width: 260px;
            flex: 1 1 320px;
        }
        .input .icon {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: ${l};
            pointer-events: none;
        }
        .input input {
            width: 100%;
            padding: 8px 10px 8px 34px;
            border-radius: 8px;
            border: 1px solid ${t};
            background: ${p};
            color: ${r};
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .input input:focus {
            outline: none;
            border-color: ${a};
            box-shadow: 0 0 0 3px ${g};
        }

        .selects {
            display: flex;
            gap: 8px;
            align-items: center;
            select {
                padding: 8px 10px;
                border-radius: 8px;
                border: 1px solid ${t};
                background: ${p};
                color: ${r};
                min-width: 140px;
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
            }
            select:focus {
                outline: none;
                border-color: ${a};
                box-shadow: 0 0 0 3px ${g};
            }
        }
    `,TableWrap:c.div`
        border: 1px solid ${t};
        border-radius: 12px;
        overflow: auto;
        background: ${p};

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }

        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${p};
            color: ${a};
            text-align: left;
            padding: 12px;
            border-bottom: 1px solid ${t};
        }

        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${t};
            vertical-align: top;
        }

        tbody tr:hover td {
            background: rgba(0, 0, 0, 0.06);
        }

        .tenant {
            display: flex;
            gap: 10px;
            align-items: center;
            .avatar {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                display: grid;
                place-items: center;
                background: rgba(255, 255, 255, 0.06);
                font-weight: 700;
                letter-spacing: 0.5px;
                border: 1px solid ${t};
            }
            .info .name {
                font-weight: 600;
            }
            .info .sub {
                color: ${l};
                font-size: 12px;
            }
            .tags {
                margin-top: 6px;
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
            }
            .tag {
                font-size: 11px;
                padding: 2px 6px;
                border-radius: 999px;
                border: 1px dashed ${t};
                color: ${l};
            }
        }

        .chip {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${t};
            font-weight: 600;
            font-size: 12px;
        }
        .chip.plan.starter {
            opacity: 0.9;
        }
        .chip.plan.business {
            opacity: 0.95;
        }
        .chip.plan.enterprise {
            box-shadow: 0 0 0 3px ${g};
        }

        .chip.status.active {
            color: ${a};
            border-color: ${a};
        }
        .chip.status.trial {
            color: ${r};
            background: rgba(255, 255, 255, 0.06);
        }
        .chip.status.suspended {
            color: ${l};
        }
        .chip.status.cancelled {
            opacity: 0.6;
            text-decoration: line-through;
        }

        .owner .email {
            color: ${l};
            font-size: 12px;
        }

        .usage {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            svg {
                position: relative;
                top: 2px;
            }
        }

        .links {
            display: grid;
            gap: 4px;
            a {
                color: ${r};
                text-decoration: none;
            }
            a:hover {
                color: ${a};
            }
        }

        .right {
            text-align: right;
        }

        .row-actions {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            button {
                border: 1px solid ${t};
                background: transparent;
                color: ${r};
                padding: 6px 10px;
                border-radius: 6px;
                cursor: pointer;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            button.ghost:hover {
                color: ${a};
                border-color: ${a};
                background: rgba(0, 0, 0, 0.06);
            }
            button.danger:hover {
                border-color: ${a};
                color: ${a};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    `,Empty:c.div`
        .card {
            background: ${p};
            border: 1px solid ${t};
            border-radius: 10px;
            padding: 24px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
            h3 {
                margin-bottom: 6px;
            }
            p {
                color: ${l};
            }
            .actions {
                margin-top: 12px;
                display: flex;
                gap: 10px;
                justify-content: center;
            }
            .link {
                color: ${a};
                text-decoration: none;
            }
            .link:hover {
                text-decoration: underline;
            }
            button.ghost {
                border: 1px solid ${t};
                background: transparent;
                color: ${r};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
            }
            button.ghost:hover {
                border-color: ${a};
                color: ${a};
                background: rgba(0, 0, 0, 0.06);
            }
        }
    `,Modal:c.div`
        position: fixed;
        inset: 0;
        z-index: 50;
        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
        }
        .box {
            position: absolute;
            right: 20px;
            bottom: 20px;
            min-width: 320px;
            background: ${p};
            border: 1px solid ${t};
            border-radius: 12px;
            padding: 16px;
            z-index: 51;
            display: grid;
            gap: 10px;
        }
        .box h3 {
            margin: 0;
        }
        .box p {
            color: ${l};
            margin: 0;
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
        .actions .primary {
            border: 1px solid ${a};
            color: ${r};
            background: transparent;
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 0 0 3px ${g};
        }
        .actions .primary:hover {
            transform: translateY(-1px);
        }
    `},S=!0,U=[{id:"TEN-001",name:"Blue Orchid Healthcare",code:"blue-orchid",domain:"https://blueorchid.example.com",plan:"Business",status:"Active",createdAt:"2025-07-11T09:30:23+05:30",renewsAt:"2026-07-11T09:30:23+05:30",owner:{name:"Ananya Singh",email:"ananya@blueorchid.example.com"},usage:{users:42,storageGB:118,apiCallsM:1.9},tags:["clinic","east-zone","priority"]},{id:"TEN-002",name:"Astra Labs",code:"astra-labs",domain:"https://astra.example.com",plan:"Enterprise",status:"Active",createdAt:"2024-12-20T14:12:04+05:30",renewsAt:"2025-12-20T14:12:04+05:30",owner:{name:"Rahul Verma",email:"rahul@astra.example.com"},usage:{users:230,storageGB:860,apiCallsM:9.4},tags:["pathology","west-zone"]},{id:"TEN-003",name:"Nimbus Care",code:"nimbus-care",domain:"https://nimbus.example.com",plan:"Starter",status:"Trial",createdAt:"2025-09-18T10:02:51+05:30",renewsAt:"2025-10-18T10:02:51+05:30",owner:{name:"Priya Iyer",email:"priya@nimbus.example.com"},usage:{users:8,storageGB:6,apiCallsM:.1},tags:["trial"]},{id:"TEN-004",name:"Northwind Wellness",code:"northwind-wellness",domain:"https://northwind.example.com",plan:"Business",status:"Suspended",createdAt:"2023-04-02T08:50:10+05:30",renewsAt:"2025-06-02T08:50:10+05:30",owner:{name:"Aman Gupta",email:"aman@northwind.example.com"},usage:{users:64,storageGB:240,apiCallsM:2.3},tags:["overdue"]},{id:"TEN-005",name:"Lumina Clinics",code:"lumina-clinics",domain:"https://lumina.example.com",plan:"Business",status:"Active",createdAt:"2025-01-05T12:25:41+05:30",renewsAt:"2026-01-05T12:25:41+05:30",owner:{name:"Devika Rao",email:"devika@lumina.example.com"},usage:{users:31,storageGB:120,apiCallsM:.7},tags:["multi-branch"]},{id:"TEN-006",name:"MedAxis Group",code:"medaxis-group",domain:"https://medaxis.example.com",plan:"Enterprise",status:"Active",createdAt:"2022-10-14T19:40:00+05:30",renewsAt:"2025-10-14T19:40:00+05:30",owner:{name:"Harsh Vardhan",email:"harsh@medaxis.example.com"},usage:{users:520,storageGB:1730,apiCallsM:12.1},tags:["priority","multi-country"]},{id:"TEN-007",name:"Sunrise Diagnostics",code:"sunrise-diagnostics",domain:"https://sunrise.example.com",plan:"Starter",status:"Cancelled",createdAt:"2024-02-22T15:15:59+05:30",renewsAt:"2025-02-22T15:15:59+05:30",owner:{name:"Rina Kapoor",email:"rina@sunrise.example.com"},usage:{users:12,storageGB:14,apiCallsM:0},tags:["offboarded"]},{id:"TEN-008",name:"Trident Hospitals",code:"trident-hospitals",domain:"https://trident.example.com",plan:"Enterprise",status:"Active",createdAt:"2025-03-28T11:05:17+05:30",renewsAt:"2026-03-28T11:05:17+05:30",owner:{name:"Karan Arora",email:"karan@trident.example.com"},usage:{users:310,storageGB:980,apiCallsM:7.2},tags:["priority","teaching"]}],y=n=>n?new Date(n).toDateString():"-",N=n=>{if(!n)return"-";const d=new Date(n),b=String(d.getHours()).padStart(2,"0"),h=String(d.getMinutes()).padStart(2,"0"),j=String(d.getSeconds()).padStart(2,"0");return`${b}:${h}:${j}hrs`},K=n=>`${y(n)} ${N(n)}`;function q(){const n=D(),[d,b]=u.useState(""),[h,j]=u.useState("All"),[v,k]=u.useState("All"),[$,m]=u.useState(null),w=u.useMemo(()=>{const s=d.trim().toLowerCase();return U.filter(i=>{const f=!s||i.name.toLowerCase().includes(s)||i.code.toLowerCase().includes(s)||i.owner.name.toLowerCase().includes(s)||i.owner.email.toLowerCase().includes(s),F=h==="All"||i.plan===h,B=v==="All"||i.status===v;return f&&F&&B})},[d,h,v]),M=(s="Action disabled",i="This demo is display-only.")=>{m({title:s,message:i})},E=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>document.body.classList.remove("print-section-mode"),setTimeout(()=>window.print(),0)};return e.jsxs(x.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(x.Breadcrumbs,{children:[e.jsx(o,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(o,{to:"/admin/users",children:"Admin"}),e.jsx("span",{children:"/"}),e.jsx("strong",{children:"Tenants"})]}),e.jsxs(x.Toolbar,{children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Tenants"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:[w.length," result",w.length!==1?"s":""]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Last updated: ",K(new Date().toISOString())]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"ghost",onClick:()=>n("/admin/system-status"),children:[e.jsx(L,{})," System"]}),e.jsxs("button",{className:"ghost",onClick:()=>n("/admin/integrations"),children:[e.jsx(A,{})," Integrations"]}),e.jsxs("button",{className:"ghost",onClick:()=>n("/settings/appearance"),children:[e.jsx(T,{})," Appearance"]}),e.jsxs("button",{className:"ghost",onClick:()=>{},children:[e.jsx(G,{})," Refresh"]}),e.jsxs("button",{className:"ghost",onClick:E,children:[e.jsx(z,{})," Print"]}),e.jsx("span",{className:"divider"}),e.jsxs("button",{className:"primary",disabled:S,title:"Demo: disabled",onClick:()=>M("Create tenant","Creating tenants is disabled in demo."),children:[e.jsx(P,{})," New Tenant"]})]})]}),e.jsxs(x.Filters,{children:[e.jsxs("div",{className:"input",children:[e.jsx(R,{className:"icon"}),e.jsx("input",{value:d,onChange:s=>b(s.target.value),placeholder:"Search by name, code, owner, email","aria-label":"Search tenants"})]}),e.jsxs("div",{className:"selects",children:[e.jsxs("select",{value:h,onChange:s=>j(s.target.value),"aria-label":"Filter by plan",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Starter"}),e.jsx("option",{children:"Business"}),e.jsx("option",{children:"Enterprise"})]}),e.jsxs("select",{value:v,onChange:s=>k(s.target.value),"aria-label":"Filter by status",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Trial"}),e.jsx("option",{children:"Suspended"}),e.jsx("option",{children:"Cancelled"})]})]})]}),e.jsx("div",{id:"search-print-area",children:e.jsx(x.TableWrap,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tenant"}),e.jsx("th",{children:"Plan"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Owner"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Renews"}),e.jsx("th",{children:"Usage"}),e.jsx("th",{children:"Links"}),e.jsx("th",{className:"right",children:"Actions"})]})}),e.jsxs("tbody",{children:[w.map(s=>{var i;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"tenant",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:s.name.slice(0,1)}),e.jsxs("div",{className:"info",children:[e.jsx("div",{className:"name",children:s.name}),e.jsxs("div",{className:"sub",children:[s.id," • ",s.code]}),e.jsx("div",{className:"tags",children:(i=s.tags)==null?void 0:i.map(f=>e.jsxs("span",{className:"tag",children:["#",f]},f))})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`chip plan ${s.plan.toLowerCase()}`,children:s.plan})}),e.jsx("td",{children:e.jsx("span",{className:`chip status ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("td",{children:e.jsxs("div",{className:"owner",children:[e.jsx("div",{className:"name",children:s.owner.name}),e.jsx("div",{className:"email",children:s.owner.email})]})}),e.jsxs("td",{children:[e.jsx("div",{className:"date",children:y(s.createdAt)}),e.jsx("div",{className:"time",children:N(s.createdAt)})]}),e.jsxs("td",{children:[e.jsx("div",{className:"date",children:y(s.renewsAt)}),e.jsx("div",{className:"time",children:N(s.renewsAt)})]}),e.jsx("td",{children:e.jsxs("div",{className:"usage",children:[e.jsxs("span",{title:"Users",children:[e.jsx(C,{})," ",s.usage.users]}),e.jsxs("span",{title:"Storage (GB)",children:[e.jsx(O,{})," ",s.usage.storageGB,"GB"]}),e.jsxs("span",{title:"API Calls (Monthly)",children:[s.usage.apiCallsM,"M"]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"links",children:[e.jsxs("a",{href:s.domain,target:"_blank",rel:"noreferrer",children:["Domain ",e.jsx(A,{})]}),e.jsx(o,{to:`/admin/users?tenant=${s.id}`,title:"Manage users",children:"Users"}),e.jsx(o,{to:`/admin/roles?tenant=${s.id}`,children:"Roles"}),e.jsx(o,{to:`/admin/permissions?tenant=${s.id}`,children:"Permissions"}),e.jsx(o,{to:`/admin/integrations?tenant=${s.id}`,children:"Integrations"}),e.jsx(o,{to:`/settings/billing?tenant=${s.id}`,children:"Billing"}),e.jsx(o,{to:`/reports/finance?tenant=${s.id}`,children:"Finance Report"})]})}),e.jsx("td",{className:"right",children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"ghost",onClick:()=>n(`/admin/users?tenant=${s.id}`),title:"Manage users",children:[e.jsx(C,{})," Users"]}),e.jsxs("button",{className:"ghost",onClick:()=>n(`/settings/appearance?tenant=${s.id}`),title:"Tenant appearance",children:[e.jsx(T,{})," Theme"]}),e.jsxs("button",{className:"danger",disabled:S,onClick:()=>m({title:"Delete tenant",message:"Deleting is disabled in demo."}),title:"Demo: disabled",children:[e.jsx(I,{})," Delete"]}),e.jsxs("button",{className:"ghost",onClick:()=>m({title:"Restricted",message:"This section is restricted for your role in demo."}),title:"Restricted",children:[e.jsx(H,{})," Restrict"]})]})})]},s.id)}),w.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx(x.Empty,{children:e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"No tenants match your filters"}),e.jsx("p",{children:"Try clearing filters or search by a different keyword."}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"ghost",onClick:()=>{b(""),j("All"),k("All")},children:"Reset filters"}),e.jsx(o,{to:"/admin/integrations",className:"link",children:"Go to Integrations"})]})]})})})})]})]})})}),$&&e.jsxs(x.Modal,{role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"box card",children:[e.jsx("h3",{children:$.title}),e.jsx("p",{children:$.message}),e.jsx("div",{className:"actions",children:e.jsx("button",{className:"primary",onClick:()=>m(null),children:"OK"})})]}),e.jsx("div",{className:"backdrop",onClick:()=>m(null)})]})]})}export{q as default};
