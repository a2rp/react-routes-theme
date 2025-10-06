import{d as m,r as y,j as e,N as r}from"./index-BauM8ZfN.js";const c="var(--text, #f3f4f6)",g="var(--muted, #a0a0a7)",h="var(--card, #111318)",a="var(--border, #23262d)",i="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",b="var(--danger, #ef4444)",D="var(--radius, 16px)",j={Page:m.div`
        display: grid;
        gap: 16px;
        color: ${c};
    `,Header:m.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${g};
            font-size: 12px;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${g};
        }
        .breadcrumbs .current {
            color: ${c};
        }

        .rhs {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${a};
            background: ${h};
            color: ${c};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
    `,KpiRow:m.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 900px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 14px 16px;
        }
        .kpi .label {
            color: ${g};
            font-size: 12px;
        }
        .kpi .value {
            font-size: 24px;
            margin-top: 4px;
        }
        .kpi .trend {
            margin-top: 4px;
            font-size: 12px;
            user-select: none;
        }
        .kpi .trend.up {
            color: ${i};
        }
        .kpi .trend.down {
            color: ${b};
        }
        .kpi .spark {
            margin-top: 10px;
            height: 38px;
        }
        .kpi svg {
            width: 100%;
            height: 100%;
            display: block;
        }
    `,Grid:m.section`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 1.2fr 1fr;
        }
        @media (min-width: 1400px) {
            grid-template-columns: 1.2fr 1fr;
        }

        .sectionHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
            h3 {
                font-size: 16px;
            }
            .seeAll {
                color: ${g};
                border: 1px solid ${a};
                padding: 6px 10px;
                border-radius: 8px;
            }
            .seeAll:hover {
                color: ${i};
                border-color: ${i};
            }
        }

        .quickGrid {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            @media (min-width: 680px) {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }
        .quick {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid ${a};
            border-radius: 12px;
            padding: 12px 14px;
            color: ${c};
            background: ${h};
            transition: border-color 0.25s, color 0.25s, background 0.25s,
                transform 0.05s;
        }
        .quick .icon {
            font-size: 18px;
        }
        .quick:hover {
            border-color: ${i};
            color: ${i};
            transform: translateY(-1px);
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${a};
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        thead th {
            text-align: left;
            padding: 10px;
            font-weight: 600;
            color: ${i};
            border-bottom: 1px solid ${a};
            background: color-mix(in oklab, ${i} 8%, transparent);
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${a};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .num {
            text-align: right;
        }

        .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .list li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            border: 1px solid ${a};
            border-radius: 12px;
            padding: 12px 14px;
            background: ${h};
        }
        .money {
            font-weight: 700;
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 16px 1fr;
            gap: 10px;
        }
        .timeline .dot {
            margin-top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${i};
            border: 1px solid ${a};
        }

        .alerts {
            display: grid;
            gap: 10px;
        }
        .alert {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            border: 1px solid ${a};
            border-radius: 12px;
            padding: 12px 14px;
            background: ${h};
        }
        .name {
            font-weight: 600;
        }
        .small {
            font-size: 12px;
        }
        .pill {
            border: 1px solid ${a};
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            text-align: center;
            background: color-mix(in oklab, ${i} 10%, transparent);
            color: ${c};
        }
        .pill.ok {
            background: color-mix(in oklab, ${i} 12%, transparent);
        }
        .pill.warn {
            background: color-mix(in oklab, ${i} 0%, transparent);
            color: ${i};
            border-color: ${i};
        }
        .pill.danger {
            background: color-mix(in oklab, ${b} 14%, transparent);
            color: ${b};
            border-color: ${b};
        }

        .printBlock .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 12px;
        }
        .printSummary .k {
            color: ${g};
        }
        .printSummary .v {
            color: ${c};
        }
    `,Overlay:m.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 60;
    `,Modal:m.div`
        width: min(520px, 92vw);
        border-radius: ${D};
        border: 1px solid ${a};
        background: ${h};
        color: ${c};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${a};
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
            border-top: 1px solid ${a};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${a};
            background: ${h};
            color: ${c};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${k};
        }
    `},n=(d,l)=>{const s=d instanceof Date?d:new Date(d),t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=N=>String(N).padStart(2,"0"),x=`${t[s.getDay()]} ${p[s.getMonth()]} ${o(s.getDate())} ${s.getFullYear()}`;return l?`${x} ${o(s.getHours())}:${o(s.getMinutes())}:${o(s.getSeconds())}hrs`:x},R=d=>{const l=d instanceof Date?d:new Date(d),s=t=>String(t).padStart(2,"0");return`${s(l.getHours())}:${s(l.getMinutes())}:${s(l.getSeconds())}hrs`},I=({open:d,title:l,message:s,onClose:t})=>d?e.jsx(j.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:t,children:e.jsxs(j.Modal,{className:"card",onMouseDown:p=>p.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:l})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:s})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:t,children:"Okay"})})]})}):null,C=()=>{const d="2025-10-06T05:55:22.539Z",l="2025-10-06T11:25:17+05:30",s=y.useMemo(()=>new Date,[]),[t,p]=y.useState(""),o=y.useRef(null),x=(v="This action is disabled in the demo.")=>p(v),N=()=>p(""),$=()=>{const v={meta:{snapshotAt:n(new Date,!0),app:"React Routes Theme (Display Only)",version:"1.0"},kpis:{revenue:"₹ 24,80,000",orders:"1,248",customers:"4,310",inventoryValue:"₹ 78,40,000"},quick:{topCustomers:["CUST-1001","CUST-1015","CUST-1032"],pendingInvoices:["INV-2031","INV-2032","INV-2035"]}},S=new Blob([JSON.stringify(v,null,2)],{type:"application/json"}),f=URL.createObjectURL(S),u=document.createElement("a");u.href=f,u.download=`dashboard-snapshot-${Date.now()}.json`,document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(f)},w=()=>{o.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(j.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          /* show only the target section, without hiding its ancestors from layout */
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }

          /* ensure it prints from top-left and uses full width */
          body.print-section-mode #search-print-area {
            position: absolute !important;
            left: 0; top: 0; width: 100%;
          }
        }
      `}),e.jsxs(j.Header,{className:"card",children:[e.jsxs("div",{className:"lhs",children:[e.jsx("h1",{children:"Dashboard"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Today: ",n(s,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Build: ",n(d,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Commit: ",n(l,!0)]})]}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(r,{to:"/home",title:"Go Home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Dashboard"})]})]}),e.jsxs("div",{className:"rhs",children:[e.jsx("button",{className:"btnPrimary",onClick:()=>x("New Order is disabled in the demo."),title:"Demo only",children:"New Order"}),e.jsx("button",{className:"btnPrimary",onClick:()=>x("New Invoice is disabled in the demo."),title:"Demo only",children:"New Invoice"}),e.jsx("button",{className:"btnPrimary",onClick:()=>x("Add Product is disabled in the demo."),title:"Demo only",children:"Add Product"}),e.jsx("button",{className:"btnGhost",onClick:$,title:"Export a JSON snapshot",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:w,title:"Print summary section",children:"Print"})]})]}),e.jsxs(j.KpiRow,{children:[e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Revenue"}),e.jsx("div",{className:"value",children:"₹ 24,80,000"}),e.jsx("div",{className:"trend up",children:"▲ 4.2%"}),e.jsx("div",{className:"spark",children:e.jsx("svg",{viewBox:"0 0 100 30",preserveAspectRatio:"none","aria-hidden":"true",children:e.jsx("polyline",{fill:"none",stroke:"var(--accent)",strokeWidth:"2",points:"0,22 10,24 20,18 30,16 40,20 50,12 60,14 70,10 80,12 90,8 100,10"})})})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Orders"}),e.jsx("div",{className:"value",children:"1,248"}),e.jsx("div",{className:"trend up",children:"▲ 2.6%"}),e.jsx("div",{className:"spark",children:e.jsx("svg",{viewBox:"0 0 100 30",preserveAspectRatio:"none","aria-hidden":"true",children:e.jsx("polyline",{fill:"none",stroke:"var(--accent)",strokeWidth:"2",points:"0,16 10,18 20,14 30,12 40,14 50,16 60,12 70,10 80,12 90,11 100,9"})})})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Customers"}),e.jsx("div",{className:"value",children:"4,310"}),e.jsx("div",{className:"trend up",children:"▲ 1.1%"}),e.jsx("div",{className:"spark",children:e.jsx("svg",{viewBox:"0 0 100 30",preserveAspectRatio:"none","aria-hidden":"true",children:e.jsx("polyline",{fill:"none",stroke:"var(--accent)",strokeWidth:"2",points:"0,18 10,17 20,16 30,15 40,14 50,13 60,12 70,11 80,10 90,10 100,9"})})})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"label",children:"Inventory Value"}),e.jsx("div",{className:"value",children:"₹ 78,40,000"}),e.jsx("div",{className:"trend down",children:"▼ 0.7%"}),e.jsx("div",{className:"spark",children:e.jsx("svg",{viewBox:"0 0 100 30",preserveAspectRatio:"none","aria-hidden":"true",children:e.jsx("polyline",{fill:"none",stroke:"var(--accent)",strokeWidth:"2",points:"0,8 10,10 20,9 30,12 40,12 50,13 60,14 70,16 80,18 90,20 100,22"})})})]})]}),e.jsxs(j.Grid,{children:[e.jsxs("section",{className:"card",children:[e.jsx("header",{className:"sectionHeader",children:e.jsx("h3",{children:"Quick Links"})}),e.jsxs("div",{className:"quickGrid",children:[e.jsxs(r,{to:"/customers",className:"quick",title:"All customers",children:[e.jsx("span",{className:"icon",children:"👤"}),e.jsx("span",{children:"Customers"})]}),e.jsxs(r,{to:"/orders",className:"quick",title:"All orders",children:[e.jsx("span",{className:"icon",children:"🧾"}),e.jsx("span",{children:"Orders"})]}),e.jsxs(r,{to:"/invoices",className:"quick",title:"Invoices",children:[e.jsx("span",{className:"icon",children:"💳"}),e.jsx("span",{children:"Invoices"})]}),e.jsxs(r,{to:"/products",className:"quick",title:"Products",children:[e.jsx("span",{className:"icon",children:"📦"}),e.jsx("span",{children:"Products"})]}),e.jsxs(r,{to:"/inventory",className:"quick",title:"Inventory",children:[e.jsx("span",{className:"icon",children:"🏷️"}),e.jsx("span",{children:"Inventory"})]}),e.jsxs(r,{to:"/reports",className:"quick",title:"Reports",children:[e.jsx("span",{className:"icon",children:"📈"}),e.jsx("span",{children:"Reports"})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHeader",children:[e.jsx("h3",{children:"Recent Orders"}),e.jsx(r,{to:"/orders",className:"seeAll",children:"See all"})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Order"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"num",children:"Total"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r,{to:"/orders/ORD-3456",children:"ORD-3456"})}),e.jsx("td",{children:e.jsx(r,{to:"/customers/CUST-1001",children:"CUST-1001"})}),e.jsx("td",{children:n(s)}),e.jsx("td",{children:e.jsx("span",{className:"pill ok",children:"Confirmed"})}),e.jsx("td",{className:"num",children:"₹ 54,000"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r,{to:"/orders/ORD-3457",children:"ORD-3457"})}),e.jsx("td",{children:e.jsx(r,{to:"/customers/CUST-1015",children:"CUST-1015"})}),e.jsx("td",{children:n(s)}),e.jsx("td",{children:e.jsx("span",{className:"pill warn",children:"Awaiting Payment"})}),e.jsx("td",{className:"num",children:"₹ 38,500"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r,{to:"/orders/ORD-3460",children:"ORD-3460"})}),e.jsx("td",{children:e.jsx(r,{to:"/customers/CUST-1032",children:"CUST-1032"})}),e.jsx("td",{children:n(s)}),e.jsx("td",{children:e.jsx("span",{className:"pill ok",children:"Packed"})}),e.jsx("td",{className:"num",children:"₹ 19,750"})]})]})]})})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHeader",children:[e.jsx("h3",{children:"Pending Invoices"}),e.jsx(r,{to:"/invoices",className:"seeAll",children:"See all"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsxs("div",{children:[e.jsx(r,{to:"/invoices/INV-2031",children:"INV-2031"}),e.jsxs("div",{className:"muted",children:["Raised: ",n(s,!0)]})]}),e.jsx("div",{className:"money",children:"₹ 42,000"})]}),e.jsxs("li",{children:[e.jsxs("div",{children:[e.jsx(r,{to:"/invoices/INV-2032",children:"INV-2032"}),e.jsxs("div",{className:"muted",children:["Raised: ",n(s,!0)]})]}),e.jsx("div",{className:"money",children:"₹ 11,900"})]}),e.jsxs("li",{children:[e.jsxs("div",{children:[e.jsx(r,{to:"/invoices/INV-2035",children:"INV-2035"}),e.jsxs("div",{className:"muted",children:["Raised: ",n(s,!0)]})]}),e.jsx("div",{className:"money",children:"₹ 67,300"})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHeader",children:[e.jsx("h3",{children:"Activity"}),e.jsx("span",{className:"muted",children:R(s)})]}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Invoice INV-2031 emailed"}),e.jsx("div",{className:"muted",children:n(s,!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Order ORD-3456 packed"}),e.jsx("div",{className:"muted",children:n(s)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Customer CUST-1001 profile updated"}),e.jsx("div",{className:"muted",children:n(s,!0)})]})]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("header",{className:"sectionHeader",children:[e.jsx("h3",{children:"Stock Alerts"}),e.jsx(r,{to:"/inventory",className:"seeAll",children:"Inventory"})]}),e.jsxs("div",{className:"alerts",children:[e.jsxs("div",{className:"alert",children:[e.jsxs("div",{children:[e.jsx("div",{className:"name",children:"MED-AMOX-500"}),e.jsx("div",{className:"muted",children:"Amoxicillin 500mg • Tablets"})]}),e.jsxs("div",{className:"right",children:[e.jsx("div",{className:"pill warn",children:"Low"}),e.jsx("div",{className:"muted small",children:"Reorder soon"})]})]}),e.jsxs("div",{className:"alert",children:[e.jsxs("div",{children:[e.jsx("div",{className:"name",children:"MED-PARA-650"}),e.jsx("div",{className:"muted",children:"Paracetamol 650mg • Tablets"})]}),e.jsxs("div",{className:"right",children:[e.jsx("div",{className:"pill ok",children:"Healthy"}),e.jsx("div",{className:"muted small",children:"Sufficient"})]})]}),e.jsxs("div",{className:"alert",children:[e.jsxs("div",{children:[e.jsx("div",{className:"name",children:"MED-IBU-400"}),e.jsx("div",{className:"muted",children:"Ibuprofen 400mg • Tablets"})]}),e.jsxs("div",{className:"right",children:[e.jsx("div",{className:"pill danger",children:"Expiry"}),e.jsx("div",{className:"muted small",children:"Track batch"})]})]})]})]}),e.jsxs("section",{className:"card printBlock",id:"search-print-area",ref:o,children:[e.jsx("header",{className:"sectionHeader",children:e.jsx("h3",{children:"Print Summary"})}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Snapshot"}),e.jsx("span",{className:"v",children:n(s,!0)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Revenue"}),e.jsx("span",{className:"v",children:"₹ 24,80,000"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Orders"}),e.jsx("span",{className:"v",children:"1,248"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customers"}),e.jsx("span",{className:"v",children:"4,310"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Inventory"}),e.jsx("span",{className:"v",children:"₹ 78,40,000"})]})]})]})]}),e.jsx(I,{open:!!t,title:"Demo Mode",message:t,onClose:N})]})};export{C as default};
