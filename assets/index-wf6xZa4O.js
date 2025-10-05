import{d as S,u as L,r as h,j as e,N as i,L as s}from"./index-BM8H5dnP.js";const p="var(--text)",l="var(--muted)",c="var(--card)",a="var(--border)",n="var(--accent)",z="var(--accent-soft)",D={Wrapper:S.div`
        width: 100%;
        color: ${p};
        display: flex;
        flex-direction: column;
        gap: 14px;

        a {
            color: ${p};
            text-decoration: none;
        }
        a:hover {
            color: ${n};
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .card {
            background: ${c};
            border: 1px solid ${a};
            border-radius: 12px;
            box-shadow: var(--shadow);
        }

        .btn {
            background: ${c};
            border: 1px solid ${a};
            color: ${p};
            padding: 8px 14px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .btn:hover {
            border-color: ${n};
            color: ${n};
        }
        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btn.ghost {
            background: transparent;
        }
        .btn.outline {
            background: transparent;
            border-style: dashed;
        }

        .mini {
            background: transparent;
            border: 1px solid ${a};
            color: ${p};
            padding: 4px 8px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .mini:hover {
            border-color: ${n};
            color: ${n};
        }
        .mini.danger {
            border-style: dashed;
        }

        .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${a};
            background: color-mix(in oklab, ${n} 10%, transparent);
        }
        .badge.ok {
        }
        .badge.off {
            opacity: 0.7;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${a};
            background: color-mix(in oklab, ${n} 8%, transparent);
            font-size: 12px;
            white-space: nowrap;
        }

        .pageHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 8px 2px;
        }
        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: ${l};
        }
        .crumbs a {
            color: ${l};
        }
        .crumbs a:hover {
            color: ${n};
        }
        .crumbs .current {
            color: ${p};
            font-weight: 700;
        }
        .crumbs .sep {
            opacity: 0.5;
        }

        .headActions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .tabs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            border-bottom: 1px solid ${a};
            padding-bottom: 10px;
        }
        .tabs a {
            padding: 6px 10px;
            border: 1px solid ${a};
            border-bottom-color: transparent;
            border-radius: 8px 8px 0 0;
            color: ${l};
            background: transparent;
            transition: all 0.2s ease;
        }
        .tabs a:hover {
            color: ${n};
            border-color: ${n};
            border-bottom-color: transparent;
        }
        .tabs a.active {
            color: ${p};
            background: ${c};
            border-color: ${a};
            border-bottom-color: ${c};
        }

        .toolbar {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 10px;
            position: sticky;
            top: 0;
            padding: 10px 0;
            background: var(--bg);
            z-index: 5;
            border-bottom: 1px solid ${a};
        }
        .toolbar .search input {
            width: 100%;
            height: 36px;
            border: 1px solid ${a};
            background: ${c};
            color: ${p};
            border-radius: 8px;
            padding: 0 12px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .toolbar .search input:focus {
            border-color: ${n};
            box-shadow: 0 0 0 3px ${z};
            outline: none;
        }
        .toolbar .filters {
            display: flex;
            gap: 10px;
        }
        .toolbar label {
            display: grid;
            gap: 6px;
            font-size: 12px;
            color: ${l};
        }
        .toolbar select {
            height: 36px;
            border: 1px solid ${a};
            background: ${c};
            color: ${p};
            border-radius: 8px;
            padding: 0 10px;
        }
        .viewToggle {
            display: flex;
            gap: 8px;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .statStrip {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
        }
        .statCard {
            padding: 12px;
            border: 1px solid ${a};
            border-radius: 12px;
            background: ${c};
        }
        .statCard .label {
            color: ${l};
            font-size: 12px;
        }
        .statCard .value {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.3px;
        }

        .tableWrap {
            padding: 0;
            overflow: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 12px;
            position: sticky;
            top: 0;
            background: ${c};
            border-bottom: 1px solid ${a};
            z-index: 1;
            color: ${l};
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        tbody td {
            padding: 12px;
            border-bottom: 1px solid ${a};
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${n} 6%, transparent);
        }
        .nameCol {
            display: flex;
            flex-direction: column;
        }
        .nameCol .name {
            font-weight: 700;
        }
        .nameCol .addr {
            color: ${l};
            font-size: 12px;
        }
        .chips {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }
        .actions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .gridWrap {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            gap: 12px;
        }
        .gcard {
            grid-column: span 4;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 12px;
            min-height: 180px;
        }
        @media (max-width: 1200px) {
            .gcard {
                grid-column: span 6;
            }
        }
        @media (max-width: 700px) {
            .gcard {
                grid-column: span 12;
            }
        }

        .ghead {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
        }
        .ghead .code {
            font-size: 12px;
            color: ${l};
        }
        .ghead .title {
            font-size: 16px;
            font-weight: 800;
        }
        .ghead .meta {
            color: ${l};
            font-size: 12px;
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .ghead .dot {
            opacity: 0.6;
        }

        .body {
            display: grid;
            gap: 8px;
        }
        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 8px;
        }
        .label {
            color: ${l};
        }
        .value.link {
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        .gactions {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .empty {
            padding: 24px;
            display: grid;
            gap: 8px;
            text-align: center;
        }
        .empty .title {
            font-weight: 800;
        }
        .empty .sub {
            color: ${l};
        }
        .empty .links {
            display: flex;
            gap: 8px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .empty .links a {
            border: 1px solid ${a};
            border-radius: 999px;
            padding: 6px 10px;
        }

        .footerNav {
            margin-top: 8px;
            padding: 12px;
            border: 1px solid ${a};
            border-radius: 12px;
            background: ${c};
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 900px) {
            .footerNav {
                grid-template-columns: 1fr;
            }
        }
        .footerNav .group .title {
            font-weight: 800;
            margin-bottom: 8px;
        }
        .footerNav .items {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .footerNav .items a {
            border: 1px solid ${a};
            border-radius: 999px;
            padding: 6px 10px;
            color: ${l};
        }
        .footerNav .items a:hover {
            color: ${n};
            border-color: ${n};
        }
    `},g=[{id:"LOC-MUM-001",code:"MUM-01",name:"Mumbai Distribution Center",type:"Warehouse",warehouse:"Mumbai DC",zones:["Ambient","Cold-chain"],status:"Active",city:"Mumbai",state:"Maharashtra",country:"India",createdAt:"2024-10-11T10:45:21+05:30",updatedAt:"2025-09-13T18:09:00+05:30"},{id:"LOC-DEL-001",code:"DEL-01",name:"Delhi Central Hub",type:"Warehouse",warehouse:"Delhi Hub",zones:["Ambient"],status:"Active",city:"New Delhi",state:"Delhi",country:"India",createdAt:"2023-08-01T09:00:00+05:30",updatedAt:"2025-07-21T12:51:09+05:30"},{id:"LOC-BLR-001",code:"BLR-01",name:"Bengaluru Clinic Store",type:"Clinic Store",warehouse:"Bengaluru Clinic",zones:["Controlled"],status:"Active",city:"Bengaluru",state:"Karnataka",country:"India",createdAt:"2022-12-05T14:22:33+05:30",updatedAt:"2025-05-19T11:02:11+05:30"},{id:"LOC-PUN-001",code:"PUN-01",name:"Pune Retail Front",type:"Storefront",warehouse:"Pune Retail",zones:["Ambient"],status:"Inactive",city:"Pune",state:"Maharashtra",country:"India",createdAt:"2021-06-09T08:09:45+05:30",updatedAt:"2025-03-17T10:10:10+05:30"},{id:"LOC-HYD-001",code:"HYD-01",name:"Hyderabad Pharma Park",type:"Warehouse",warehouse:"Hyderabad Park",zones:["Ambient","Cold-chain","Hazard Controlled"],status:"Active",city:"Hyderabad",state:"Telangana",country:"India",createdAt:"2020-01-15T16:10:00+05:30",updatedAt:"2025-04-02T19:40:00+05:30"},{id:"LOC-KOL-001",code:"KOL-01",name:"Kolkata City Depot",type:"Depot",warehouse:"Kolkata Depot",zones:["Ambient"],status:"Active",city:"Kolkata",state:"West Bengal",country:"India",createdAt:"2024-02-19T09:35:20+05:30",updatedAt:"2025-09-01T21:11:11+05:30"},{id:"LOC-AHM-001",code:"AHM-01",name:"Ahmedabad Cold Room",type:"Cold Room",warehouse:"Ahmedabad CR-2",zones:["Cold-chain"],status:"Active",city:"Ahmedabad",state:"Gujarat",country:"India",createdAt:"2023-10-10T10:10:10+05:30",updatedAt:"2025-08-24T07:05:05+05:30"},{id:"LOC-CHN-001",code:"CHN-01",name:"Chennai Regional",type:"Warehouse",warehouse:"Chennai REG",zones:["Ambient","Controlled"],status:"Active",city:"Chennai",state:"Tamil Nadu",country:"India",createdAt:"2022-01-01T00:00:00+05:30",updatedAt:"2025-06-06T06:06:06+05:30"},{id:"LOC-NOI-001",code:"NOI-01",name:"Noida Courier Cross-dock",type:"Cross-dock",warehouse:"Noida Dock",zones:["Ambient"],status:"Inactive",city:"Noida",state:"UP",country:"India",createdAt:"2021-11-05T11:11:11+05:30",updatedAt:"2025-01-09T09:09:09+05:30"},{id:"LOC-SRT-001",code:"SRT-01",name:"Surat Medical Market",type:"Storefront",warehouse:"Surat Retail",zones:["Ambient"],status:"Active",city:"Surat",state:"Gujarat",country:"India",createdAt:"2024-07-07T07:07:07+05:30",updatedAt:"2025-08-08T08:08:08+05:30"},{id:"LOC-JPR-001",code:"JPR-01",name:"Jaipur Specialty Store",type:"Clinic Store",warehouse:"Jaipur Clinic",zones:["Controlled"],status:"Active",city:"Jaipur",state:"Rajasthan",country:"India",createdAt:"2023-09-30T12:34:56+05:30",updatedAt:"2025-09-20T12:34:56+05:30"},{id:"LOC-TRV-001",code:"TRV-01",name:"Trivandrum Coastal Depot",type:"Depot",warehouse:"Trivandrum Depot",zones:["Ambient"],status:"Active",city:"Thiruvananthapuram",state:"Kerala",country:"India",createdAt:"2022-05-22T15:00:00+05:30",updatedAt:"2025-07-11T17:17:17+05:30"}],I=o=>o.toLocaleString("en-US",{weekday:"short"}),W=o=>o.toLocaleString("en-US",{month:"short"}),b=o=>String(o).padStart(2,"0"),y=o=>{const d=new Date(o);return`${I(d)} ${W(d)} ${b(d.getDate())} ${d.getFullYear()}`},v=o=>{const d=new Date(o);return`${y(o)} ${b(d.getHours())}:${b(d.getMinutes())}:${b(d.getSeconds())}hrs`},R=()=>{const o=L(),[d,N]=h.useState("table"),[j,f]=h.useState(""),[x,w]=h.useState("all"),[m,C]=h.useState("all"),u=h.useMemo(()=>{const t=j.trim().toLowerCase();return g.filter(r=>{const A=m==="all"||r.status.toLowerCase()===m,k=x==="all"||r.type.toLowerCase()===x,T=!t||[r.name,r.code,r.warehouse,r.city,r.state,r.country,...r.zones].join(" ").toLowerCase().includes(t);return A&&k&&T})},[j,x,m]),$=()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),0)},0)};return e.jsxs(D.Wrapper,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"pageHead",children:[e.jsxs("div",{className:"crumbs",children:[e.jsx(i,{to:"/settings",end:!0,children:"Settings"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"current",children:"Locations"})]}),e.jsxs("div",{className:"headActions",children:[e.jsx("button",{className:"btn ghost",onClick:()=>o("/tools/import-export"),children:"Import / Export"}),e.jsx("button",{className:"btn ghost",onClick:()=>o("/inventory/warehouses"),children:"Warehouses"}),e.jsx("button",{className:"btn",disabled:!0,title:"Demo mode",children:"New Location"}),e.jsx("button",{className:"btn outline",onClick:$,title:"Print list",children:"Print"})]})]}),e.jsxs("nav",{className:"tabs",children:[e.jsx(i,{to:"/settings/profile",end:!0,children:"Profile"}),e.jsx(i,{to:"/settings/appearance",end:!0,children:"Appearance"}),e.jsx(i,{to:"/settings/billing",end:!0,children:"Billing"}),e.jsx(i,{to:"/settings/backups",end:!0,children:"Backups"}),e.jsx(i,{to:"/settings/tokens",end:!0,children:"Tokens"}),e.jsx(i,{to:"/settings/warehouses",end:!0,children:"Warehouses"}),e.jsx(i,{to:"/settings/locations",end:!0,className:"active",children:"Locations"}),e.jsx(i,{to:"/settings/tax",end:!0,children:"Tax"}),e.jsx(i,{to:"/settings/units",end:!0,children:"Units"}),e.jsx(i,{to:"/settings/currencies",end:!0,children:"Currencies"}),e.jsx(i,{to:"/settings/numbering",end:!0,children:"Numbering"}),e.jsx(i,{to:"/settings/print-templates",end:!0,children:"Print Templates"}),e.jsx(i,{to:"/settings/notifications",end:!0,children:"Notifications"}),e.jsx(i,{to:"/settings/webhooks",end:!0,children:"Webhooks"})]}),e.jsxs("div",{className:"toolbar",children:[e.jsx("div",{className:"search",children:e.jsx("input",{type:"text",value:j,onChange:t=>f(t.target.value),placeholder:"Search code, city, zone…","aria-label":"Search locations"})}),e.jsxs("div",{className:"filters",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Type"}),e.jsxs("select",{value:x,onChange:t=>w(t.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"warehouse",children:"Warehouse"}),e.jsx("option",{value:"clinic store",children:"Clinic Store"}),e.jsx("option",{value:"storefront",children:"Storefront"}),e.jsx("option",{value:"depot",children:"Depot"}),e.jsx("option",{value:"cold room",children:"Cold Room"}),e.jsx("option",{value:"cross-dock",children:"Cross-dock"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Status"}),e.jsxs("select",{value:m,onChange:t=>C(t.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"})]})]})]}),e.jsxs("div",{className:"viewToggle",children:[e.jsx("button",{className:d==="table"?"btn active":"btn",onClick:()=>N("table"),title:"Table view",children:"Table"}),e.jsx("button",{className:d==="grid"?"btn active":"btn",onClick:()=>N("grid"),title:"Card grid",children:"Grid"})]})]}),e.jsxs("div",{id:"search-print-area",className:"content",children:[e.jsxs("div",{className:"statStrip",children:[e.jsxs("div",{className:"statCard",children:[e.jsx("div",{className:"label",children:"Total"}),e.jsx("div",{className:"value",children:g.length})]}),e.jsxs("div",{className:"statCard",children:[e.jsx("div",{className:"label",children:"Active"}),e.jsx("div",{className:"value",children:g.filter(t=>t.status==="Active").length})]}),e.jsxs("div",{className:"statCard",children:[e.jsx("div",{className:"label",children:"Zones"}),e.jsx("div",{className:"value",children:Array.from(new Set(g.flatMap(t=>t.zones))).length})]}),e.jsxs("div",{className:"statCard",children:[e.jsx("div",{className:"label",children:"Updated"}),e.jsx("div",{className:"value",children:v("2025-10-04T15:38:20+05:30")})]})]}),d==="table"?e.jsx("div",{className:"tableWrap card",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Warehouse"}),e.jsx("th",{children:"Zones"}),e.jsx("th",{children:"City"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Created"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{children:"Actions"})]})}),e.jsxs("tbody",{children:[u.map(t=>e.jsxs("tr",{id:t.id,children:[e.jsx("td",{children:e.jsx("span",{className:"mono",children:t.code})}),e.jsx("td",{children:e.jsxs("div",{className:"nameCol",children:[e.jsx("span",{className:"name",children:t.name}),e.jsxs("span",{className:"addr",children:[t.city,", ",t.state]})]})}),e.jsx("td",{children:t.type}),e.jsx("td",{children:e.jsx(s,{to:"/inventory/warehouses",className:"link",children:t.warehouse})}),e.jsx("td",{children:e.jsx("div",{className:"chips",children:t.zones.map(r=>e.jsx("span",{className:"chip",children:r},r))})}),e.jsx("td",{children:t.city}),e.jsx("td",{children:e.jsx("span",{className:`badge ${t.status==="Active"?"ok":"off"}`,children:t.status})}),e.jsx("td",{children:y(t.createdAt)}),e.jsx("td",{children:v(t.updatedAt)}),e.jsxs("td",{className:"actions",children:[e.jsx(s,{to:"/inventory/transfers",className:"mini",children:"Transfers"}),e.jsx(s,{to:"/shipments",className:"mini",children:"Shipments"}),e.jsx("button",{className:"mini",disabled:!0,title:"Demo mode",children:"Edit"}),e.jsx("button",{className:"mini danger",disabled:!0,title:"Demo mode",children:"Delete"})]})]},t.id)),u.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"title",children:"No locations match your filter"}),e.jsx("div",{className:"sub",children:"Try clearing search or selecting “All”."}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/settings/warehouses",children:"Manage Warehouses"}),e.jsx(s,{to:"/inventory/warehouses",children:"Inventory > Warehouses"}),e.jsx(s,{to:"/tools/import-export",children:"Import / Export"})]})]})})})]})]})}):e.jsxs("div",{className:"gridWrap",children:[u.map(t=>e.jsxs("div",{className:"gcard card",children:[e.jsxs("div",{className:"ghead",children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"code mono",children:t.code}),e.jsx("div",{className:"title",children:t.name}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"muted",children:t.type}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{className:"muted",children:[t.city,", ",t.state]})]})]}),e.jsx("div",{className:"right",children:e.jsx("span",{className:`badge ${t.status==="Active"?"ok":"off"}`,children:t.status})})]}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Warehouse"}),e.jsx(s,{to:"/inventory/warehouses",className:"value link",children:t.warehouse})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Zones"}),e.jsx("div",{className:"chips",children:t.zones.map(r=>e.jsx("span",{className:"chip",children:r},r))})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Created"}),e.jsx("span",{className:"value",children:y(t.createdAt)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"label",children:"Updated"}),e.jsx("span",{className:"value",children:v(t.updatedAt)})]})]}),e.jsxs("div",{className:"gactions",children:[e.jsx(s,{to:"/inventory/transfers",className:"mini",children:"Transfers"}),e.jsx(s,{to:"/shipments",className:"mini",children:"Shipments"}),e.jsx("button",{className:"mini",disabled:!0,title:"Demo mode",children:"Edit"}),e.jsx("button",{className:"mini danger",disabled:!0,title:"Demo mode",children:"Delete"})]})]},t.id)),u.length===0&&e.jsxs("div",{className:"empty card",children:[e.jsx("div",{className:"title",children:"No locations match your filter"}),e.jsx("div",{className:"sub",children:"Try clearing search or selecting “All”."}),e.jsxs("div",{className:"links",children:[e.jsx(s,{to:"/settings/warehouses",children:"Manage Warehouses"}),e.jsx(s,{to:"/inventory/warehouses",children:"Inventory > Warehouses"}),e.jsx(s,{to:"/tools/import-export",children:"Import / Export"})]})]})]})]}),e.jsxs("div",{className:"footerNav",children:[e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"title",children:"Go to"}),e.jsxs("div",{className:"items",children:[e.jsx(s,{to:"/inventory/warehouses",children:"Inventory > Warehouses"}),e.jsx(s,{to:"/inventory/transfers",children:"Inventory > Transfers"}),e.jsx(s,{to:"/purchase-orders",children:"Purchasing > POs"}),e.jsx(s,{to:"/shipments",children:"Shipments"}),e.jsx(s,{to:"/reports/inventory",children:"Reports > Inventory"}),e.jsx(s,{to:"/reports/procurement",children:"Reports > Procurement"})]})]}),e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"title",children:"Settings"}),e.jsxs("div",{className:"items",children:[e.jsx(s,{to:"/settings/profile",children:"Profile"}),e.jsx(s,{to:"/settings/appearance",children:"Appearance"}),e.jsx(s,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(s,{to:"/settings/numbering",children:"Numbering"}),e.jsx(s,{to:"/settings/notifications",children:"Notifications"}),e.jsx(s,{to:"/settings/webhooks",children:"Webhooks"})]})]})]})]})};export{R as default};
