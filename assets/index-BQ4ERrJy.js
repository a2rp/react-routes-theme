import{d as p,u as O,a as R,r as b,j as e,N as t,aC as T,aD as E,e as H,v as I,aE as B,n as D,aF as U,ah as L,$ as S,m as M,l as P,k as F}from"./index-LshBDmDj.js";const d="var(--text, #f3f4f6)",i="var(--muted, #a0a0a7)",l="var(--card, #111318)",o="var(--border, #23262d)",r="var(--accent, #5aa9ff)",K="var(--accent-soft, rgba(90,169,255,0.15))",v="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",x={Page:p.div`
        color: ${d};
    `,Breadcrumbs:p.nav`
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 10px;
        a {
            color: ${i};
        }
        a:hover {
            color: ${r};
        }
        span {
            color: ${i};
        }
        strong {
            color: ${d};
        }
    `,Header:p.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        align-items: start;
        margin-bottom: 16px;

        .titles {
            h1 {
                display: flex;
                align-items: center;
                font-size: 22px;
                margin-bottom: 6px;
            }
            p {
                color: ${i};
            }
            .meta {
                margin-top: 6px;
                display: flex;
                gap: 16px;
                color: ${i};
                span {
                    font-size: 12px;
                }
            }
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button,
            a {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: ${l};
                color: ${d};
                border: 1px solid ${o};
                padding: 8px 12px;
                border-radius: 10px;
                box-shadow: ${v};
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease, transform 0.05s ease;
                text-decoration: none;
            }
            button:hover,
            a:hover {
                border-color: ${r};
                color: ${r};
                background: rgba(0, 0, 0, 0.08);
            }
            button:active,
            a:active {
                transform: translateY(1px);
            }
        }
    `,Toolbar:p.div`
        display: grid;
        grid-template-columns: 380px 1fr;
        gap: 12px;
        align-items: center;
        margin-bottom: 12px;

        input[type="search"] {
            height: 40px;
            border: 1px solid ${o};
            background: ${l};
            color: ${d};
            border-radius: 10px;
            padding: 0 12px;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
            &::placeholder {
                color: ${i};
            }
            &:focus {
                border-color: ${r};
                box-shadow: 0 0 0 3px ${K};
                outline: none;
            }
        }

        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            .chip {
                display: inline-flex;
                gap: 6px;
                align-items: center;
                border: 1px solid ${o};
                padding: 6px 10px;
                border-radius: 999px;
                text-decoration: none;
                color: ${i};
                background: ${l};
            }
            .chip:hover {
                color: ${r};
                border-color: ${r};
            }
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            gap: 10px;
        }
    `,Grid:p.div`
        display: grid;
        grid-template-columns: 1.25fr 0.9fr;
        gap: 14px;
        align-items: start;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }
    `,TableCard:p.section`
        background: ${l};
        border: 1px solid ${o};
        border-radius: 12px;
        box-shadow: ${v};

        .cardHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            padding: 14px 14px 8px 14px;
            border-bottom: 1px solid ${o};
            h3 {
                font-size: 16px;
            }
            .sub {
                color: ${i};
                font-size: 12px;
            }
        }

        .tableWrap {
            overflow: auto;
            padding: 8px 14px 14px 14px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${l};
            border-bottom: 1px solid ${o};
            text-align: left;
            padding: 10px;
            color: ${r};
            font-weight: 600;
        }
        tbody td {
            border-bottom: 1px solid ${o};
            padding: 10px;
            vertical-align: top;
        }
        tbody tr {
            transition: background 0.15s ease;
            cursor: pointer;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        tbody tr[data-active-row="true"] {
            background: color-mix(in oklab, ${r} 10%, transparent);
        }

        .name .linkish {
            color: ${d};
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            text-decoration: underline;
        }
        .name .linkish:hover {
            color: ${r};
        }
        .tags {
            margin-top: 4px;
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .tag {
            border: 1px dashed ${o};
            color: ${i};
            padding: 2px 6px;
            border-radius: 6px;
            font-size: 11px;
        }

        .status {
            border: 1px solid ${o};
            border-radius: 999px;
            padding: 3px 8px;
            font-size: 11px;
            &.active {
                color: ${d};
            }
            &.inactive {
                color: ${i};
            }
        }

        .mgr small {
            color: ${i};
            display: block;
        }

        .rowActions {
            display: flex;
            gap: 6px;
            align-items: center;
            button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                border-radius: 8px;
                background: ${l};
                border: 1px solid ${o};
                color: ${d};
            }
            button:hover {
                color: ${r};
                border-color: ${r};
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .empty {
            padding: 28px 14px;
            text-align: center;
            color: ${i};
            .hops {
                margin-top: 10px;
                display: flex;
                gap: 12px;
                justify-content: center;
                flex-wrap: wrap;
            }
            .hops a {
                color: ${i};
                text-decoration: underline;
            }
            .hops a:hover {
                color: ${r};
            }
        }

        .cardFoot {
            border-top: 1px solid ${o};
            padding: 10px 14px;
            color: ${i};
            .quick {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                align-items: center;
            }
            .quick a {
                color: ${i};
                text-decoration: underline;
            }
            .quick a:hover {
                color: ${r};
            }
        }
    `,DetailCard:p.aside`
        background: ${l};
        border: 1px solid ${o};
        border-radius: 12px;
        box-shadow: ${v};
        padding: 14px;

        .head {
            border-bottom: 1px solid ${o};
            padding-bottom: 8px;
            margin-bottom: 8px;
            h3 {
                font-size: 16px;
                margin-bottom: 6px;
            }
            .meta {
                display: flex;
                gap: 12px;
                color: ${i};
                font-size: 12px;
            }
        }

        .blocks {
            display: grid;
            gap: 12px;
            .block {
                border: 1px solid ${o};
                border-radius: 10px;
                padding: 12px;
                background: color-mix(in oklab, ${l} 96%, transparent);
                h4 {
                    margin-bottom: 8px;
                }
                .kv {
                    list-style: none;
                    display: grid;
                    grid-template-columns: 150px 1fr;
                    gap: 6px 10px;
                }
                .kv li {
                    display: contents;
                }
                .kv label {
                    color: ${i};
                }
                .rowLinks {
                    margin-top: 8px;
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .rowLinks a {
                    color: ${i};
                    text-decoration: underline;
                }
                .rowLinks a:hover {
                    color: ${r};
                }
                .docList {
                    display: grid;
                    gap: 10px;
                }
                .doc {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 6px;
                    align-items: center;
                    border: 1px solid ${o};
                    border-radius: 8px;
                    padding: 10px;
                }
                .doc .title {
                    font-weight: 600;
                }
                .doc .meta {
                    color: ${i};
                    font-size: 12px;
                }
                .doc .cta {
                    display: flex;
                    gap: 8px;
                }
                .doc .cta button {
                    background: ${l};
                    color: ${d};
                    border: 1px solid ${o};
                    padding: 6px 10px;
                    border-radius: 8px;
                }
                .doc .cta button:hover {
                    color: ${r};
                    border-color: ${r};
                    background: rgba(0, 0, 0, 0.06);
                }

                .timeline {
                    list-style: none;
                    display: grid;
                    gap: 8px;
                }
                .timeline li {
                    display: grid;
                    grid-template-columns: 220px 1fr;
                    gap: 10px;
                }
                .timeline .dt {
                    color: ${i};
                    font-size: 12px;
                }
            }
        }

        .status {
            border: 1px solid ${o};
            border-radius: 999px;
            padding: 3px 8px;
            font-size: 11px;
            &.active {
                color: ${d};
            }
            &.inactive {
                color: ${i};
            }
        }

        .detailActions {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            button,
            a {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: ${l};
                color: ${d};
                border: 1px solid ${o};
                padding: 8px 12px;
                border-radius: 10px;
                box-shadow: ${v};
                text-decoration: none;
                transition: border-color 0.2s ease, color 0.2s ease,
                    background 0.2s ease;
            }
            button:hover,
            a:hover {
                color: ${r};
                border-color: ${r};
                background: rgba(0, 0, 0, 0.08);
            }
        }

        .empty {
            color: ${i};
            text-align: center;
            padding: 24px 0;
        }
    `,FootNav:p.div`
        margin-top: 14px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
        color: ${i};
        a {
            color: ${i};
            text-decoration: underline;
        }
        a:hover {
            color: ${r};
        }
    `,Modal:p.div`
        position: fixed;
        inset: 0;
        z-index: 60;
        .scrim {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }

        .sheet {
            position: relative;
            z-index: 61;
            width: min(560px, 92vw);
            margin: 8vh auto 0;
            background: ${l};
            border: 1px solid ${o};
            border-radius: 14px;
            box-shadow: ${v};
            display: grid;
            grid-template-rows: auto 1fr auto;
            overflow: hidden;
        }

        .sheetHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${o};
            h3 {
                font-size: 16px;
            }
            .icon {
                background: transparent;
                border: 1px solid ${o};
                color: ${d};
                width: 34px;
                height: 34px;
                border-radius: 8px;
                display: grid;
                place-items: center;
            }
            .icon:hover {
                color: ${r};
                border-color: ${r};
            }
        }
        .sheetBody {
            padding: 14px;
            color: ${d};
        }
        .sheetBody p {
            margin-bottom: 10px;
        }
        .sheetBody .hints {
            color: ${i};
            margin-left: 16px;
        }
        .sheetFoot {
            padding: 12px 14px;
            border-top: 1px solid ${o};
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            button,
            a {
                background: ${l};
                color: ${d};
                border: 1px solid ${o};
                padding: 8px 12px;
                border-radius: 10px;
                text-decoration: none;
            }
            button:hover,
            a:hover {
                color: ${r};
                border-color: ${r};
                background: rgba(0, 0, 0, 0.08);
            }
            .primary {
                border-color: ${r};
            }
        }
    `};function $(j){return new Date(j).toDateString()}function h(j){const m=new Date(j);return`${m.toDateString()} ${m.toLocaleTimeString("en-GB")}hrs`}const q="This is a demo preview. Creating or modifying records is disabled.",k=[{id:"WH-DEL-01",name:"Delhi Main FC",type:"Fulfillment Center",capacity:"30,000 units",temperature:"Ambient",contact:{manager:"Neha Sharma",phone:"+91 98XXXXXX12",email:"neha@acme.example"},address:"Plot 21, Okhla Phase II, New Delhi, DL 110020",timezone:"Asia/Kolkata",createdAt:"2025-08-02T10:05:20+05:30",updatedAt:"2025-10-03T19:24:01+05:30",lastAudit:"2025-09-27T11:02:11+05:30",status:"Active",tags:["north","primary","ecom"]},{id:"WH-BLR-02",name:"Bengaluru Cold Store",type:"Cold Storage",capacity:"12,000 units",temperature:"2–8°C",contact:{manager:"Rahul Nair",phone:"+91 97XXXXXX55",email:"rahul@acme.example"},address:"1st Main, Whitefield Industrial Area, Bengaluru, KA 560066",timezone:"Asia/Kolkata",createdAt:"2025-06-10T08:40:00+05:30",updatedAt:"2025-09-29T17:12:43+05:30",lastAudit:"2025-09-20T16:35:00+05:30",status:"Active",tags:["south","pharma","cold-chain"]},{id:"WH-PUN-03",name:"Pune Satellite Hub",type:"Cross-Dock",capacity:"8,500 units",temperature:"Ambient",contact:{manager:"Aditi Kulkarni",phone:"+91 98XXXXXX88",email:"aditi@acme.example"},address:"MIDC, Chakan Phase I, Pune, MH 410501",timezone:"Asia/Kolkata",createdAt:"2025-05-05T09:10:42+05:30",updatedAt:"2025-09-18T12:01:12+05:30",lastAudit:"2025-09-15T10:18:25+05:30",status:"Active",tags:["west","last-mile"]},{id:"WH-HYD-04",name:"Hyderabad Reserve",type:"Reserve Storage",capacity:"16,000 units",temperature:"Ambient",contact:{manager:"Vikas Reddy",phone:"+91 90XXXXXX32",email:"vikas@acme.example"},address:"IDA Cherlapally, Hyderabad, TS 500051",timezone:"Asia/Kolkata",createdAt:"2025-04-01T12:45:11+05:30",updatedAt:"2025-09-12T09:55:39+05:30",lastAudit:"2025-09-05T18:12:40+05:30",status:"Inactive",tags:["south","overflow"]}];function V(){var A;O();const j=R(),[m,W]=b.useState(""),[N,w]=b.useState(((A=k[0])==null?void 0:A.id)??null),[f,g]=b.useState(null),u=b.useMemo(()=>{const s=m.trim().toLowerCase();return s?k.filter(a=>{const y=`${a.id} ${a.name} ${a.type} ${a.capacity} ${a.temperature} ${a.address} ${a.status} ${a.tags.join(" ")} ${a.contact.manager}`.toLowerCase();return s.split(/\s+/).every(z=>y.includes(z))}):k},[m]),n=b.useMemo(()=>u.find(s=>s.id===N)??u[0]??null,[u,N]),C=s=>{var y;const a=`${j.origin||window.location.origin}/settings/warehouses#${s}`;(y=navigator.clipboard)==null||y.writeText(a).catch(()=>{})},X=()=>{const s=document.body;s.classList.add("print-section-mode"),window.onafterprint=()=>s.classList.remove("print-section-mode"),window.print()},c=s=>{g({title:s,message:q})};return e.jsxs(x.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area {
            position: absolute !important; left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(x.Breadcrumbs,{"aria-label":"breadcrumbs",children:[e.jsx(t,{to:"/home",children:"Home"}),e.jsx("span",{children:"›"}),e.jsx(t,{to:"/settings",children:"Settings"}),e.jsx("span",{children:"›"}),e.jsx("strong",{children:"Warehouses"})]}),e.jsxs(x.Header,{children:[e.jsxs("div",{className:"titles",children:[e.jsxs("h1",{children:[e.jsx(T,{size:22,style:{marginRight:8}})," Warehouses"]}),e.jsx("p",{children:"Configure your storage network, locations and fulfillment hubs. Deep links and navigation are enabled across inventory and reports."}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",$("2025-09-01T09:30:00+05:30")]}),e.jsxs("span",{children:["Last updated: ",h("2025-10-06T12:12:45+05:30")]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{onClick:()=>c("Add Warehouse"),children:[e.jsx(E,{})," New Warehouse"]}),e.jsxs("button",{onClick:X,title:"Print detail section",children:[e.jsx(H,{})," Print Details"]}),e.jsxs("button",{onClick:()=>{const s=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(s),a.download="warehouses.json",a.click(),URL.revokeObjectURL(a.href)},title:"Export visible rows as JSON",children:[e.jsx(I,{})," Export JSON"]})]})]}),e.jsxs(x.Toolbar,{role:"search",children:[e.jsx("input",{type:"search",placeholder:"Search warehouses, cities, tags, managers…",value:m,onChange:s=>W(s.target.value),"aria-label":"Search warehouses"}),e.jsxs("div",{className:"links",children:[e.jsxs(t,{to:"/inventory/warehouses",className:"chip",title:"Go to Inventory › Warehouses",children:[e.jsx(T,{})," Inventory View"]}),e.jsxs(t,{to:"/inventory/transfers",className:"chip",children:[e.jsx(B,{})," Transfers"]}),e.jsxs(t,{to:"/inventory/adjustments",className:"chip",children:[e.jsx(D,{})," Adjustments"]}),e.jsxs(t,{to:"/reports/inventory",className:"chip",children:[e.jsx(D,{})," Inventory Report"]}),e.jsxs(t,{to:"/settings/locations",className:"chip",children:[e.jsx(U,{})," Locations"]})]})]}),e.jsxs(x.Grid,{children:[e.jsxs(x.TableCard,{role:"region","aria-label":"Warehouses list",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("h3",{children:"All Warehouses"}),e.jsx("span",{className:"sub",children:"Demo overview"})]}),e.jsxs("div",{className:"tableWrap",children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Capacity"}),e.jsx("th",{children:"Temp"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"City"}),e.jsx("th",{children:"Manager"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:u.map(s=>e.jsxs("tr",{"data-active-row":(n==null?void 0:n.id)===s.id?"true":"false",onClick:()=>w(s.id),children:[e.jsx("td",{children:s.id}),e.jsxs("td",{className:"name",children:[e.jsx("button",{className:"linkish",onClick:a=>{a.stopPropagation(),w(s.id)},children:s.name}),e.jsx("div",{className:"tags",children:s.tags.map(a=>e.jsxs("span",{className:"tag",children:["#",a]},a))})]}),e.jsx("td",{children:s.type}),e.jsx("td",{children:s.capacity}),e.jsx("td",{children:s.temperature}),e.jsx("td",{children:e.jsx("span",{className:`status ${s.status.toLowerCase()}`,children:s.status})}),e.jsx("td",{children:(s.address.split(",")[2]||"").trim()||"-"}),e.jsx("td",{children:e.jsxs("div",{className:"mgr",children:[e.jsx("div",{children:s.contact.manager}),e.jsx("small",{children:s.contact.phone})]})}),e.jsx("td",{children:e.jsx("span",{title:h(s.updatedAt),children:$(s.updatedAt)})}),e.jsxs("td",{className:"rowActions",children:[e.jsx("button",{onClick:a=>{a.stopPropagation(),c("Edit Warehouse")},children:e.jsx(L,{})}),e.jsx("button",{onClick:a=>{a.stopPropagation(),c("Archive Warehouse")},children:e.jsx(S,{})}),e.jsx("button",{onClick:a=>{a.stopPropagation(),c("Delete Warehouse")},children:e.jsx(M,{})}),e.jsx("button",{onClick:a=>{a.stopPropagation(),C(s.id)},title:"Copy deep link",children:e.jsx(P,{})})]})]},s.id))})]}),u.length===0&&e.jsxs("div",{className:"empty",children:[e.jsx("p",{children:"No matches. Try a different keyword."}),e.jsxs("div",{className:"hops",children:[e.jsx(t,{to:"/settings/locations",children:"Open Locations"}),e.jsx(t,{to:"/inventory/warehouses",children:"Go to Inventory view"}),e.jsx(t,{to:"/reports/inventory",children:"See Inventory report"})]})]})]}),e.jsx("div",{className:"cardFoot",children:e.jsxs("div",{className:"quick",children:[e.jsx("span",{children:"Quick hops:"}),e.jsx(t,{to:"/inventory/reorder",children:"Reorder"}),e.jsx(t,{to:"/purchase-orders",children:"Purchase Orders"}),e.jsx(t,{to:"/shipments",children:"Shipments"}),e.jsx(t,{to:"/reports/procurement",children:"Procurement Report"}),e.jsx(t,{to:"/settings/units",children:"Units"}),e.jsx(t,{to:"/settings/tax",children:"Tax"}),e.jsx(t,{to:"/settings/print-templates",children:"Print Templates"})]})})]}),e.jsx(x.DetailCard,{id:"search-print-area",role:"region","aria-label":"Warehouse detail",children:n?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"head",children:[e.jsx("h3",{children:n.name}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Code: ",n.id]}),e.jsxs("span",{children:["Timezone: ",n.timezone]})]})]}),e.jsxs("div",{className:"blocks",children:[e.jsxs("section",{className:"block",children:[e.jsx("h4",{children:"Overview"}),e.jsxs("ul",{className:"kv",children:[e.jsxs("li",{children:[e.jsx("label",{children:"Type"}),e.jsx("div",{children:n.type})]}),e.jsxs("li",{children:[e.jsx("label",{children:"Capacity"}),e.jsx("div",{children:n.capacity})]}),e.jsxs("li",{children:[e.jsx("label",{children:"Temperature"}),e.jsx("div",{children:n.temperature})]}),e.jsxs("li",{children:[e.jsx("label",{children:"Status"}),e.jsx("div",{children:e.jsx("span",{className:`status ${n.status.toLowerCase()}`,children:n.status})})]}),e.jsxs("li",{children:[e.jsx("label",{children:"Created"}),e.jsx("div",{children:h(n.createdAt)})]}),e.jsxs("li",{children:[e.jsx("label",{children:"Updated"}),e.jsx("div",{children:h(n.updatedAt)})]}),e.jsxs("li",{children:[e.jsx("label",{children:"Last Audit"}),e.jsx("div",{children:h(n.lastAudit)})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h4",{children:"Address"}),e.jsx("p",{children:n.address}),e.jsxs("div",{className:"rowLinks",children:[e.jsx(t,{to:"/settings/locations",children:"Manage Locations"}),e.jsx(t,{to:"/inventory/transfers",children:"Plan Transfer"}),e.jsx(t,{to:"/inventory/adjustments",children:"Record Adjustment"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h4",{children:"Point of Contact"}),e.jsxs("ul",{className:"kv",children:[e.jsxs("li",{children:[e.jsx("label",{children:"Manager"}),e.jsx("div",{children:n.contact.manager})]}),e.jsxs("li",{children:[e.jsx("label",{children:"Phone"}),e.jsx("div",{children:n.contact.phone})]}),e.jsxs("li",{children:[e.jsx("label",{children:"Email"}),e.jsx("div",{children:n.contact.email})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h4",{children:"Documents"}),e.jsxs("div",{className:"docList",children:[e.jsxs("div",{className:"doc",children:[e.jsx("div",{className:"title",children:"SOP – Putaway & Picking.pdf"}),e.jsxs("div",{className:"meta",children:["Uploaded ",$("2025-09-10T12:10:00+05:30")]}),e.jsxs("div",{className:"cta",children:[e.jsx("button",{onClick:()=>c("View Document"),children:"View"}),e.jsx("button",{onClick:()=>c("Download Document"),children:"Download"})]})]}),e.jsxs("div",{className:"doc",children:[e.jsx("div",{className:"title",children:"Compliance – Cold Chain Handling.docx"}),e.jsxs("div",{className:"meta",children:["Uploaded ",$("2025-09-14T14:50:00+05:30")]}),e.jsxs("div",{className:"cta",children:[e.jsx("button",{onClick:()=>c("View Document"),children:"View"}),e.jsx("button",{onClick:()=>c("Download Document"),children:"Download"})]})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h4",{children:"Recent Activity"}),e.jsxs("ol",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dt",children:h("2025-10-03T19:24:01+05:30")}),e.jsxs("span",{className:"txt",children:["Cycle count posted by ",n.contact.manager]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dt",children:h("2025-09-27T11:02:11+05:30")}),e.jsx("span",{className:"txt",children:"Audit completed (no exceptions)"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dt",children:h("2025-09-20T16:35:00+05:30")}),e.jsx("span",{className:"txt",children:"Temperature probe replaced"})]})]}),e.jsxs("div",{className:"rowLinks",children:[e.jsx(t,{to:"/admin/audit-log",children:"Open Audit Log"}),e.jsx(t,{to:"/reports/inventory",children:"Open Inventory Report"}),e.jsx(t,{to:"/reports/shipment",children:"Open Shipment Report"})]})]})]}),e.jsxs("div",{className:"detailActions",children:[e.jsxs("button",{onClick:()=>c("Edit Warehouse"),children:[e.jsx(L,{})," Edit"]}),e.jsxs("button",{onClick:()=>c("Archive Warehouse"),children:[e.jsx(S,{})," Archive"]}),e.jsxs("button",{onClick:()=>c("Delete Warehouse"),children:[e.jsx(M,{})," Delete"]}),e.jsxs("button",{onClick:()=>C(n.id),title:"Copy deep link",children:[e.jsx(P,{})," Copy Link"]})]})]}):e.jsx("div",{className:"empty",children:e.jsx("p",{children:"Select a warehouse to view details."})})})]}),e.jsxs(x.FootNav,{children:[e.jsx("span",{children:"More settings:"}),e.jsx(t,{to:"/settings/profile",children:"Profile"}),e.jsx(t,{to:"/settings/appearance",children:"Appearance"}),e.jsx(t,{to:"/settings/billing",children:"Billing"}),e.jsx(t,{to:"/settings/units",children:"Units"}),e.jsx(t,{to:"/settings/currencies",children:"Currencies"}),e.jsx(t,{to:"/settings/tax",children:"Tax"}),e.jsx(t,{to:"/settings/notifications",children:"Notifications"}),e.jsx(t,{to:"/settings/webhooks",children:"Webhooks"})]}),f&&e.jsxs(x.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-title",children:[e.jsxs("div",{className:"sheet",children:[e.jsxs("div",{className:"sheetHead",children:[e.jsx("h3",{id:"demo-title",children:f.title}),e.jsx("button",{className:"icon",onClick:()=>g(null),"aria-label":"Close",children:e.jsx(F,{})})]}),e.jsxs("div",{className:"sheetBody",children:[e.jsx("p",{children:f.message}),e.jsxs("ul",{className:"hints",children:[e.jsx("li",{children:"Use deep links to explore detail screens."}),e.jsx("li",{children:"Try Inventory › Warehouses or Transfers for related flows."}),e.jsx("li",{children:"Print the detail section to see the themed print layout."})]})]}),e.jsxs("div",{className:"sheetFoot",children:[e.jsx("button",{onClick:()=>g(null),children:"Close"}),e.jsx(t,{className:"primary",to:"/about",onClick:()=>g(null),children:"Learn More"})]})]}),e.jsx("div",{className:"scrim",onClick:()=>g(null)})]})]})}export{V as default};
