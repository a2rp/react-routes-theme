import{d as m,r as l,j as e,N as d,t as G,v as B,e as I,w as F,x as H,y as U,l as W,n as q}from"./index-BscvFKDB.js";const c="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",b="var(--card, #111318)",n="var(--border, #23262d)",s="var(--accent, #5aa9ff)",P="var(--accent-soft, rgba(90,169,255,0.15))",J="var(--radius, 16px)",g={Page:m.div`
        padding: 20px;
        color: ${c};
    `,Header:m.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            a {
                color: ${p};
            }
            .current {
                color: ${c};
            }
        }
        .meta {
            margin-top: 6px;
            color: ${p};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${b};
            color: ${c};
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${s};
            color: ${s};
            box-shadow: 0 0 0 3px ${P};
        }
        .btnGhost:hover {
            border-color: ${s};
            color: ${s};
        }
        [data-demo]::after {
            content: "Demo";
            margin-left: 8px;
            font-size: 11px;
            color: ${p};
            padding: 2px 8px;
            border: 1px dashed ${n};
            border-radius: 999px;
        }
    `,Toolbar:m.div`
        padding: 12px;
        margin-bottom: 16px;
        display: grid;
        gap: 10px;

        .filters {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            @media (min-width: 980px) {
                grid-template-columns: 1fr 180px 160px 160px 160px 120px;
            }
        }

        .field {
            display: grid;
            gap: 6px;
            label {
                font-size: 12px;
                color: ${p};
            }
            &.grow {
                grid-column: span 1;
            }
        }

        .legend {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .pill {
                display: inline-flex;
                align-items: center;
                padding: 4px 10px;
                border: 1px solid ${n};
                border-radius: 999px;
                font-size: 12px;
                color: ${c};
                background: color-mix(in oklab, ${s} 8%, transparent);
            }
            .open {
                background: color-mix(in oklab, ${s} 10%, transparent);
            }
            .partial {
                background: color-mix(in oklab, ${s} 14%, transparent);
            }
            .received {
                background: color-mix(in oklab, ${s} 8%, transparent);
            }
            .billed {
                background: color-mix(in oklab, ${s} 12%, transparent);
            }
            .cancelled {
                background: color-mix(in oklab, ${s} 6%, transparent);
                opacity: 0.7;
            }
        }
    `,Grid:m.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;

        @media (min-width: 1200px) {
            grid-template-columns: 3fr 1fr;
        }

        .side .sideCard {
            padding: 14px;
        }
        .side .links,
        .tips {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .side .links a {
            color: ${p};
            padding: 6px 8px;
            border: 1px solid ${n};
            background: ${b};
            border-radius: 8px;
        }
        .side .links a:hover {
            color: ${s};
            border-color: ${s};
        }
        .tips li {
            color: ${p};
            font-size: 13px;
        }
    `,TableWrap:m.div`
        padding: 0;
        overflow: hidden;

        .tableTitle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${n};
            h3 {
                font-size: 16px;
            }
            .count {
                color: ${p};
                font-size: 12px;
            }
        }

        &.compact table tr td,
        &.compact table tr th {
            padding-top: 8px;
            padding-bottom: 8px;
        }

        .tableScroll {
            overflow: auto;
            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            thead th {
                position: sticky;
                top: 0;
                background: ${b};
                border-bottom: 1px solid ${n};
                text-align: left;
                padding: 12px 10px;
                z-index: 2;
            }
            tbody td {
                border-bottom: 1px solid ${n};
                padding: 12px 10px;
                vertical-align: top;
            }
            tbody tr:hover td {
                background: color-mix(in oklab, ${s} 6%, transparent);
            }
            .num {
                text-align: right;
                white-space: nowrap;
            }
            .actions {
                width: 320px;
            }

            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }
            .sub.muted {
                color: ${p};
                font-size: 12px;
                margin-top: 2px;
            }

            .tags {
                display: flex;
                gap: 6px;
                margin-top: 6px;
                flex-wrap: wrap;
            }
            .tag {
                border: 1px solid ${n};
                border-radius: 999px;
                padding: 2px 8px;
                font-size: 11px;
                color: ${c};
                background: color-mix(in oklab, ${s} 8%, transparent);
            }

            .badge {
                display: inline-flex;
                align-items: center;
                font-weight: 600;
                border: 1px solid ${n};
                border-radius: 999px;
                padding: 4px 10px;
                background: color-mix(in oklab, ${s} 8%, transparent);
            }
            .badge.open {
                background: color-mix(in oklab, ${s} 10%, transparent);
            }
            .badge.partially-received {
                background: color-mix(in oklab, ${s} 14%, transparent);
            }
            .badge.received {
                background: color-mix(in oklab, ${s} 8%, transparent);
            }
            .badge.billed {
                background: color-mix(in oklab, ${s} 12%, transparent);
            }
            .badge.cancelled {
                background: color-mix(in oklab, ${s} 6%, transparent);
                opacity: 0.75;
            }

            .mini {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 6px 8px;
                margin-right: 6px;
                margin-bottom: 6px;
                border: 1px solid ${n};
                background: ${b};
                color: ${c};
                border-radius: 8px;
                font-weight: 600;
                text-decoration: none;
                transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
            }
            .mini:hover {
                border-color: ${s};
                color: ${s};
                box-shadow: 0 0 0 3px ${P};
            }
            .btnGhost {
                background: ${b};
            }
        }

        .empty {
            display: flex;
            gap: 8px;
            align-items: center;
            justify-content: center;
            color: ${p};
            padding: 20px 0;
        }
    `,Overlay:m.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:m.div`
        width: min(520px, 92vw);
        border-radius: ${J};
        border: 1px solid ${n};
        background: ${b};
        color: ${c};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${n};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${c};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${n};
        }

        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${b};
            color: ${c};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnGhost:hover {
            border-color: ${s};
            color: ${s};
            box-shadow: 0 0 0 3px ${P};
        }
    `},N=a=>String(a).padStart(2,"0"),C=a=>{const r=a instanceof Date?a:new Date(a),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${x[r.getDay()]} ${u[r.getMonth()]} ${N(r.getDate())} ${r.getFullYear()}`},f=a=>{const r=a instanceof Date?a:new Date(a);return`${C(r)} ${N(r.getHours())}:${N(r.getMinutes())}:${N(r.getSeconds())}hrs`},Q=({open:a,title:r,message:x,onClose:u})=>a?e.jsx(g.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:u,children:e.jsxs(g.Modal,{className:"card",onMouseDown:j=>j.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:r})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:x})}),e.jsx("footer",{children:e.jsx("button",{className:"btnGhost",onClick:u,children:"Close"})})]})}):null,Y=[{id:"PO-24001",vendorId:"VEND-1001",vendor:"Acme Supplies Pvt Ltd",status:"Open",items:6,amount:"₹ 1,24,500",currency:"INR",eta:"2025-10-12",placedAt:"2025-10-03T14:22:15+05:30",updatedAt:"2025-10-03T14:22:15+05:30",tags:["priority","north"]},{id:"PO-24002",vendorId:"VEND-1004",vendor:"Bluewave Traders",status:"Partially Received",items:9,amount:"₹ 2,63,000",currency:"INR",eta:"2025-10-09",placedAt:"2025-10-02T10:05:40+05:30",updatedAt:"2025-10-04T11:10:20+05:30",tags:["bulk"]},{id:"PO-24003",vendorId:"VEND-1012",vendor:"Zen Pharm Co.",status:"Received",items:4,amount:"₹ 78,900",currency:"INR",eta:"2025-10-07",placedAt:"2025-10-01T09:02:10+05:30",updatedAt:"2025-10-03T18:48:55+05:30",tags:["pharma"]},{id:"PO-24004",vendorId:"VEND-1015",vendor:"Orbit Logistics",status:"Billed",items:12,amount:"₹ 4,12,000",currency:"INR",eta:"2025-10-05",placedAt:"2025-09-30T12:41:33+05:30",updatedAt:"2025-10-04T15:31:12+05:30",tags:["east","wholesale"]},{id:"PO-24005",vendorId:"VEND-1019",vendor:"Nimbus Industrial",status:"Open",items:5,amount:"₹ 96,700",currency:"INR",eta:"2025-10-14",placedAt:"2025-10-03T17:10:09+05:30",updatedAt:"2025-10-03T17:10:09+05:30",tags:[]},{id:"PO-24006",vendorId:"VEND-1021",vendor:"Radiant Medline",status:"Cancelled",items:3,amount:"₹ 31,250",currency:"INR",eta:"2025-10-06",placedAt:"2025-09-29T16:15:45+05:30",updatedAt:"2025-10-01T10:00:00+05:30",tags:["price-revision"]},{id:"PO-24007",vendorId:"VEND-1027",vendor:"Vector Components",status:"Received",items:7,amount:"₹ 1,79,200",currency:"INR",eta:"2025-10-08",placedAt:"2025-10-01T13:20:00+05:30",updatedAt:"2025-10-03T09:45:22+05:30",tags:["import"]},{id:"PO-24008",vendorId:"VEND-1030",vendor:"Prime Papers",status:"Billed",items:10,amount:"₹ 2,05,900",currency:"INR",eta:"2025-10-10",placedAt:"2025-10-02T08:44:10+05:30",updatedAt:"2025-10-04T12:20:05+05:30",tags:[]}],_=()=>{const[a,r]=l.useState(""),[x,u]=l.useState("All"),[j,A]=l.useState(""),[$,O]=l.useState(""),[S,R]=l.useState("comfortable"),[M,D]=l.useState(!1),T=l.useRef(null),y=l.useMemo(()=>{const t=a.trim().toLowerCase();return Y.filter(i=>{const v=!t||i.id.toLowerCase().includes(t)||i.vendor.toLowerCase().includes(t)||i.vendorId.toLowerCase().includes(t)||i.tags.join(" ").toLowerCase().includes(t),w=x==="All"||i.status===x,h=new Date(i.placedAt).getTime(),o=j?h>=new Date(j).setHours(0,0,0,0):!0,k=$?h<=new Date($).setHours(23,59,59,999):!0;return v&&w&&o&&k})},[a,x,j,$]),z=()=>{r(""),u("All"),A(""),O("")},L=()=>{const t=["PO ID","Vendor","Vendor ID","Status","Items","Amount","ETA","Placed At","Updated At","Tags"],i=y.map(o=>[o.id,o.vendor,o.vendorId,o.status,o.items,o.amount,C(o.eta),f(o.placedAt),f(o.updatedAt),o.tags.join("|")]),v=[t,...i].map(o=>o.map(k=>`"${String(k).replace(/"/g,'""')}"`).join(",")).join(`
`),w=new Blob([v],{type:"text/csv;charset=utf-8"}),h=document.createElement("a");h.href=URL.createObjectURL(w),h.download="purchase-orders.csv",document.body.appendChild(h),h.click(),h.remove()},E=()=>{T.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},V=t=>{var v;const i=`${window.location.origin}/react-routes-theme/purchase-orders/${t}`;(v=navigator.clipboard)==null||v.writeText(i)};return l.useEffect(()=>{const t=document.getElementById("po-search-input");t&&requestAnimationFrame(()=>{try{t.focus({preventScroll:!0})}catch{t.focus()}})},[]),e.jsxs(g.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(g.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Purchase Orders"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(d,{to:"/purchase-orders",children:"Purchase Orders"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"List"})]}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["Snapshot: ",f(new Date)]})})]}),e.jsxs("div",{className:"right actions",children:[e.jsxs("button",{className:"btnPrimary","data-demo":!0,onClick:()=>D(!0),title:"Create new PO (demo disabled)",children:[e.jsx(G,{size:18})," New PO"]}),e.jsxs("button",{className:"btnGhost",onClick:L,title:"Export current view to CSV",children:[e.jsx(B,{size:18})," Export CSV"]}),e.jsxs("button",{className:"btnGhost",onClick:E,title:"Print current section",children:[e.jsx(I,{size:18})," Print"]})]})]}),e.jsxs(g.Toolbar,{className:"card",children:[e.jsxs("div",{className:"filters",children:[e.jsxs("div",{className:"field grow",children:[e.jsx("label",{htmlFor:"po-search-input",children:"Search"}),e.jsx("input",{id:"po-search-input",placeholder:"Search PO ID, vendor, tag…",value:a,onChange:t=>r(t.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{value:x,onChange:t=>u(t.target.value),children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Open"}),e.jsx("option",{children:"Partially Received"}),e.jsx("option",{children:"Received"}),e.jsx("option",{children:"Billed"}),e.jsx("option",{children:"Cancelled"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"From"}),e.jsx("input",{type:"date",value:j,onChange:t=>A(t.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"To"}),e.jsx("input",{type:"date",value:$,onChange:t=>O(t.target.value)})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Density"}),e.jsxs("select",{value:S,onChange:t=>R(t.target.value),children:[e.jsx("option",{value:"comfortable",children:"Comfortable"}),e.jsx("option",{value:"compact",children:"Compact"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:" "}),e.jsx("button",{className:"btnGhost",onClick:z,title:"Reset filters",children:"Clear"})]})]}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"pill open",children:"Open"}),e.jsx("span",{className:"pill partial",children:"Partially Received"}),e.jsx("span",{className:"pill received",children:"Received"}),e.jsx("span",{className:"pill billed",children:"Billed"}),e.jsx("span",{className:"pill cancelled",children:"Cancelled"})]})]}),e.jsxs(g.Grid,{children:[e.jsx("section",{className:"main",id:"search-print-area",ref:T,children:e.jsxs(g.TableWrap,{className:`card ${S}`,children:[e.jsxs("div",{className:"tableTitle",children:[e.jsx("h3",{children:"All Purchase Orders"}),e.jsxs("div",{className:"count",children:[y.length," results"]})]}),e.jsx("div",{className:"tableScroll",children:e.jsxs("table",{role:"table","aria-label":"Purchase orders",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"PO"}),e.jsx("th",{children:"Vendor"}),e.jsx("th",{className:"num",children:"Items"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"ETA"}),e.jsx("th",{children:"Placed"}),e.jsx("th",{children:"Updated"}),e.jsx("th",{className:"actions",children:"Actions"})]})}),e.jsxs("tbody",{children:[y.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsxs(d,{className:"mono",to:`/purchase-orders/${t.id}`,title:"Open details",children:[t.id," ",e.jsx(F,{size:14})]}),t.tags.length?e.jsx("div",{className:"tags",children:t.tags.map(i=>e.jsx("span",{className:"tag",children:i},i))}):null]}),e.jsxs("td",{children:[e.jsx(d,{to:`/vendors/${t.vendorId}`,title:"View vendor",children:t.vendor}),e.jsx("div",{className:"sub muted",children:t.vendorId})]}),e.jsx("td",{className:"num",children:t.items}),e.jsx("td",{className:"num",children:t.amount}),e.jsx("td",{children:e.jsx("span",{className:`badge ${t.status.replace(/\s+/g,"-").toLowerCase()}`,children:t.status})}),e.jsx("td",{children:C(t.eta)}),e.jsx("td",{children:f(t.placedAt)}),e.jsx("td",{children:f(t.updatedAt)}),e.jsxs("td",{className:"actions",children:[e.jsxs(d,{to:`/purchase-orders/${t.id}/receipt`,className:"mini",title:"Receipts",children:[e.jsx(H,{size:16})," Receive"]}),e.jsxs(d,{to:`/purchase-orders/${t.id}/bill`,className:"mini",title:"Bill",children:[e.jsx(U,{size:16})," Bill"]}),e.jsxs("button",{className:"mini btnGhost",onClick:()=>V(t.id),title:"Copy deep link",children:[e.jsx(W,{size:16})," Copy Link"]}),e.jsxs(d,{to:`/purchase-orders/${t.id}/print`,className:"mini",title:"Print PO",children:[e.jsx(I,{size:16})," Print"]})]})]},t.id)),y.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsxs("div",{className:"empty",children:[e.jsx(q,{size:20}),e.jsx("div",{children:"No purchase orders match your filters."})]})})})]})]})})]})}),e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"card sideCard",children:[e.jsx("h3",{children:"Shortcuts"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(d,{to:"/vendors",children:"Browse Vendors"})}),e.jsx("li",{children:e.jsx(d,{to:"/inventory/warehouses",children:"Warehouses"})}),e.jsx("li",{children:e.jsx(d,{to:"/products",children:"Products Catalog"})}),e.jsx("li",{children:e.jsx(d,{to:"/reports/procurement",children:"Procurement Report"})})]})]}),e.jsxs("div",{className:"card sideCard",children:[e.jsx("h3",{children:"PO Tips"}),e.jsxs("ul",{className:"tips",children:[e.jsx("li",{children:"Click a PO ID to open details. Row actions expose direct deep-links."}),e.jsx("li",{children:"Use the density control for compact or comfortable views."}),e.jsx("li",{children:"Export CSV respects current filters."}),e.jsx("li",{children:"Print limits the page to the table section for a neat hard-copy."})]})]})]})]}),e.jsx(Q,{open:M,title:"Demo Mode",message:"Creating a new purchase order is disabled in the demo. All flows and deep links are available for preview.",onClose:()=>D(!1)})]})};export{_ as default};
