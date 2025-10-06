import{d,u as D,a as M,r as p,j as e,N as r}from"./index-LshBDmDj.js";const h="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",m="var(--card, #111318)",a="var(--border, #23262d)",i="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",g="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",t={Page:d.div`
        width: 100%;
        color: ${h};
        display: flex;
        flex-direction: column;
        gap: 16px;

        a {
            color: inherit;
        }
        .card {
            background: ${m};
            border: 1px solid ${a};
            border-radius: 12px;
            box-shadow: ${g};
        }
        .primary {
            background: ${i};
            color: #fff;
            border-color: ${i};
        }
        .linklike {
            border: 1px dashed ${a};
            background: transparent;
        }
        button,
        .linklike {
            padding: 8px 14px;
            border-radius: 8px;
            border: 1px solid ${a};
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease, transform 0.05s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
        }
        button:hover,
        .linklike:hover {
            border-color: ${i};
            color: ${i};
            background: rgba(0, 0, 0, 0.08);
        }
        button:active,
        .linklike:active {
            transform: translateY(1px);
        }
        button:focus-visible,
        .linklike:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${y};
        }
    `,Breadcrumbs:d.nav`
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 12px;
        color: ${o};
        a {
            color: ${o};
        }
        .current {
            color: ${h};
            font-weight: 600;
        }
    `,Header:d.header`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        border: 1px solid ${a};
        border-radius: 12px;
        background: ${m};
        box-shadow: ${g};

        .title h1 {
            font-size: 24px;
            line-height: 1.2;
        }
        .title .meta {
            color: ${o};
            margin-top: 6px;
        }
        .title select {
            background: ${m};
            color: ${h};
            border: 1px solid ${a};
            padding: 4px 8px;
            border-radius: 6px;
            margin-left: 6px;
        }
        .title select:focus {
            outline: none;
            border-color: ${i};
            box-shadow: 0 0 0 3px ${y};
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .actions .linklike {
            color: ${o};
        }
        .actions .linklike:hover {
            color: ${i};
        }
    `,KpiGrid:d.div`
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 12px;

        @media (max-width: 1280px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .kpi {
            padding: 14px;
            border: 1px solid ${a};
            border-radius: 12px;
            text-decoration: none;
            transition: transform 0.08s ease, border-color 0.2s ease,
                background 0.2s ease, color 0.2s ease;
        }
        .kpi:hover {
            transform: translateY(-1px);
            border-color: ${i};
            color: ${h};
            background: rgba(0, 0, 0, 0.06);
        }
        .kpi .label {
            color: ${o};
            font-size: 12px;
        }
        .kpi .value {
            font-size: 22px;
            margin: 6px 0 4px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .kpi .sub {
            color: ${o};
            font-size: 12px;
        }
    `,QuickLinks:d.div`
        padding: 14px 16px;
        .ql-head {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }
        .ql-head .muted {
            color: ${o};
            font-size: 12px;
        }
        .ql-grid {
            display: grid;
            gap: 8px;
            grid-template-columns: repeat(8, minmax(0, 1fr));
            @media (max-width: 1280px) {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }
            @media (max-width: 720px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        a {
            padding: 8px 10px;
            border: 1px solid ${a};
            border-radius: 8px;
            text-align: center;
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
            color: ${o};
            text-decoration: none;
        }
        a:hover {
            border-color: ${i};
            color: ${i};
            background: rgba(0, 0, 0, 0.06);
        }
    `,TwoCol:d.div`
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 12px;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }
        .col {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
    `,Card:d.div`
        padding: 14px 16px;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        header h3 {
            font-size: 16px;
        }
        header .seeall {
            font-size: 12px;
            color: ${o};
            text-decoration: none;
        }
        header .seeall:hover {
            color: ${i};
        }
        .legend .pill {
            font-size: 11px;
            color: ${o};
            border: 1px solid ${a};
            padding: 3px 8px;
            border-radius: 999px;
            margin-right: 6px;
        }
        .footlnks {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .linkchip {
            border: 1px solid ${a};
            padding: 4px 8px;
            border-radius: 999px;
            text-decoration: none;
            color: ${o};
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .linkchip:hover {
            color: ${i};
            border-color: ${i};
            background: rgba(0, 0, 0, 0.06);
        }
    `,Table:d.div`
        overflow: hidden;
        border: 1px solid ${a};
        border-radius: 10px;

        .thead,
        .tr {
            display: grid;
            grid-template-columns: 2.2fr 1.4fr 0.8fr 0.9fr;
        }
        .thead {
            background: rgba(0, 0, 0, 0.08);
            border-bottom: 1px solid ${a};
            font-weight: 600;
            color: ${o};
        }
        .thead .th {
            padding: 10px 12px;
        }
        .tbody .tr {
            text-decoration: none;
            color: ${h};
            border-bottom: 1px solid ${a};
            transition: background 0.15s ease, border-color 0.2s ease;
        }
        .tbody .tr:hover {
            background: rgba(0, 0, 0, 0.06);
            border-color: ${i};
        }
        .td {
            padding: 10px 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .num {
            text-align: right;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (max-width: 720px) {
            .thead,
            .tr {
                grid-template-columns: 1.6fr 0.9fr 0.7fr 0.8fr;
            }
        }
    `,ChartPlaceholder:d.div`
        height: 220px;
        border: 1px dashed ${a};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 10px;
        .bars {
            display: flex;
            align-items: flex-end;
            gap: 10px;
            flex: 1;
        }
        .bars > div {
            flex: 1;
            background: color-mix(in oklab, ${i} 35%, transparent);
            border-radius: 6px 6px 0 0;
            border: 1px solid ${a};
        }
        .xlabels {
            display: flex;
            justify-content: space-between;
            color: ${o};
            font-size: 12px;
            margin-top: 6px;
        }
    `,ChartDonut:d.div`
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;

        .ring {
            position: relative;
            width: 170px;
            height: 170px;
        }
        .ring .hole {
            position: absolute;
            inset: 20px;
            background: ${m};
            border: 1px solid ${a};
            border-radius: 50%;
            box-shadow: inset 0 0 0 60px rgba(0, 0, 0, 0.02);
        }
        .ring .seg {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            /* simple layered arcs as display-only */
            box-shadow: 0 0 0 20px
                color-mix(in oklab, ${i} 40%, transparent);
        }
        .ring .s1 {
            clip-path: polygon(50% 50%, 100% 0, 100% 100%);
        }
        .ring .s2 {
            clip-path: polygon(50% 50%, 0 0, 100% 0);
            transform: rotate(120deg);
        }
        .ring .s3 {
            clip-path: polygon(50% 50%, 0 100%, 0 0);
            transform: rotate(210deg);
        }

        .legend {
            display: flex;
            flex-direction: column;
            gap: 8px;
            color: ${o};
            font-size: 13px;
        }
        .legend .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 8px;
            border: 1px solid ${a};
            background: color-mix(in oklab, ${i} 40%, transparent);
        }
        .legend .d2 {
            background: color-mix(in oklab, ${i} 60%, transparent);
        }
        .legend .d3 {
            background: color-mix(in oklab, ${i} 20%, transparent);
        }
    `,MapPlaceholder:d.div`
        position: relative;
        height: 220px;
        border: 1px dashed ${a};
        border-radius: 10px;
        overflow: hidden;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.06), transparent);

        .blob {
            position: absolute;
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background: color-mix(in oklab, ${i} 15%, transparent);
            border: 1px solid ${a};
            filter: blur(2px);
        }
        .b1 {
            left: 12%;
            top: 16%;
        }
        .b2 {
            left: 58%;
            top: 22%;
        }
        .b3 {
            left: 34%;
            top: 54%;
        }
        .b4 {
            left: 70%;
            top: 60%;
        }
    `,FooterLinks:d.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        padding: 14px 16px;
        border: 1px solid ${a};
        border-radius: 12px;
        background: ${m};
        @media (max-width: 960px) {
            grid-template-columns: 1fr;
        }
        .group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        h4 {
            font-size: 14px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .links a {
            text-decoration: none;
            border: 1px solid ${a};
            border-radius: 999px;
            padding: 6px 10px;
            color: ${o};
            transition: border-color 0.2s ease, color 0.2s ease,
                background 0.2s ease;
        }
        .links a:hover {
            border-color: ${i};
            color: ${i};
            background: rgba(0, 0, 0, 0.06);
        }
    `,ModalBackdrop:d.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
    `,Modal:d.div`
        width: min(520px, 92vw);
        background: ${m};
        border: 1px solid ${a};
        border-radius: 12px;
        box-shadow: ${g};
        .modal-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-bottom: 1px solid ${a};
        }
        .modal-head h4 {
            font-size: 16px;
        }
        .modal-head .icon {
            background: transparent;
            border: 1px solid ${a};
            border-radius: 8px;
            padding: 2px 8px;
            color: ${o};
            cursor: pointer;
        }
        .modal-head .icon:hover {
            border-color: ${i};
            color: ${i};
        }

        .modal-body {
            padding: 12px 14px;
            color: ${h};
        }
        .modal-foot {
            padding: 12px 14px;
            border-top: 1px solid ${a};
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .modal-foot .primary {
            background: ${i};
            color: #fff;
        }
    `},u=n=>String(n).padStart(2,"0"),O=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],A=n=>{const l=n instanceof Date?n:new Date(n);return`${O[l.getDay()]} ${I[l.getMonth()]} ${u(l.getDate())} ${l.getFullYear()}`},z=n=>{const l=n instanceof Date?n:new Date(n);return`${u(l.getHours())}:${u(l.getMinutes())}:${u(l.getSeconds())}hrs`},j=n=>`${A(n)} ${z(n)}`,U=(()=>{try{return j(new Date("2025-10-06T12:12:45+05:30"))}catch{}try{return j(new Date("2025-10-06T06:42:50.910Z"))}catch{}return j(new Date)})(),L=({open:n,title:l="Are you sure?",message:x,confirmText:b="Continue",onClose:c})=>n?e.jsx(t.ModalBackdrop,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:e.jsxs(t.Modal,{children:[e.jsxs("header",{className:"modal-head",children:[e.jsx("h4",{id:"confirm-title",children:l}),e.jsx("button",{className:"icon",onClick:()=>c(!1),"aria-label":"Close",children:"×"})]}),e.jsx("div",{className:"modal-body",children:e.jsx("p",{children:x})}),e.jsxs("footer",{className:"modal-foot",children:[e.jsx("button",{onClick:()=>c(!1),children:"Cancel"}),e.jsx("button",{className:"primary",onClick:()=>c(!0),children:b})]})]})}):null,F=()=>{const n=D(),{search:l}=M(),[x,b]=p.useState(()=>new URLSearchParams(l).get("range")||"last-30"),[c,v]=p.useState({open:!1,title:"",message:"",onDone:null}),f=p.useCallback(s=>{v({open:!0,title:(s==null?void 0:s.title)||"Action",message:(s==null?void 0:s.message)||"Confirm?",onDone:P=>{v(T=>({...T,open:!1})),P&&typeof(s==null?void 0:s.onOk)=="function"&&s.onOk()}})},[]);p.useEffect(()=>{const s=new URLSearchParams(l);s.get("range")!==x&&(s.set("range",x),n({search:s.toString()},{replace:!0}))},[x,l,n]);const k=p.useMemo(()=>[{label:"Gross Revenue",value:"₹ 1,82,40,000",sub:"vs last period +3.2%",link:"/reports/finance"},{label:"Net Revenue",value:"₹ 1,64,10,000",sub:"Discounts & returns adjusted",link:"/reports/finance"},{label:"Orders",value:"4,820",sub:"Completed & partially fulfilled",link:"/orders"},{label:"Invoices Issued",value:"4,605",sub:"Includes recurring invoices",link:"/invoices"},{label:"Avg Order Value",value:"₹ 3,404",sub:"AO V incl. tax",link:"/reports/sales"},{label:"Payments Captured",value:"₹ 1,57,20,000",sub:"All gateways",link:"/sales/payments"}],[]),N=p.useMemo(()=>[{id:"PRD-1001",name:"Amoxicillin 500mg (Strip of 10)",sku:"MED-AMOX-500",units:"12,420",revenue:"₹ 36,80,000",link:"/products/PRD-1001"},{id:"PRD-1022",name:"Paracetamol 650mg (Bottle 60ml)",sku:"MED-PARA-650",units:"10,250",revenue:"₹ 18,40,000",link:"/products/PRD-1022"},{id:"PRD-1045",name:"Azithromycin 250mg (Strip of 6)",sku:"MED-AZI-250",units:"8,660",revenue:"₹ 15,10,000",link:"/products/PRD-1045"},{id:"PRD-1064",name:"Cough Syrup 100ml",sku:"MED-CS-100",units:"6,390",revenue:"₹ 9,70,000",link:"/products/PRD-1064"},{id:"PRD-1090",name:"Vitamin D3 60K IU (Caps)",sku:"MED-D3-60K",units:"5,120",revenue:"₹ 8,30,000",link:"/products/PRD-1090"}],[]),$=p.useMemo(()=>[{id:"CUST-1001",name:"Sunrise Pharmacy",city:"Bengaluru",orders:"320",revenue:"₹ 12,40,000",link:"/customers/CUST-1001"},{id:"CUST-1015",name:"Medico Plus",city:"Hyderabad",orders:"275",revenue:"₹ 10,30,000",link:"/customers/CUST-1015"},{id:"CUST-1042",name:"City Health Mart",city:"Pune",orders:"240",revenue:"₹ 9,10,000",link:"/customers/CUST-1042"},{id:"CUST-1078",name:"Apollo Retail",city:"Chennai",orders:"210",revenue:"₹ 8,60,000",link:"/customers/CUST-1078"},{id:"CUST-1110",name:"Care & Cure",city:"Mumbai",orders:"190",revenue:"₹ 7,50,000",link:"/customers/CUST-1110"}],[]),w=p.useMemo(()=>[{type:"Order",id:"ORD-3001",when:"Sat Oct 04 2025 10:18:22hrs",who:"Sunrise Pharmacy",link:"/orders/ORD-3001"},{type:"Invoice",id:"INV-2031",when:"Sat Oct 04 2025 09:12:04hrs",who:"Medico Plus",link:"/invoices/INV-2031"},{type:"Quote",id:"QUO-1101",when:"Fri Oct 03 2025 18:27:10hrs",who:"City Health Mart",link:"/sales/quotes/QUO-1101"},{type:"Return",id:"RET-5001",when:"Fri Oct 03 2025 17:06:40hrs",who:"Care & Cure",link:"/sales/returns/RET-5001"},{type:"Payment",id:"PAY-7209",when:"Fri Oct 03 2025 16:20:19hrs",who:"Apollo Retail",link:"/sales/payments/PAY-7209"}],[]),C=()=>{{f({title:"Export disabled",message:"This is a demo-only build. Data export is disabled here.",onOk:()=>{}});return}},S=()=>{f({title:"Schedule report",message:"Scheduling is demoed here. In production, this would set up a periodic email with attachments.",onOk:()=>{}})},R=()=>{document.body.classList.add("print-section-mode"),requestAnimationFrame(()=>{window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),0)})};return e.jsxs(t.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(t.Breadcrumbs,{"aria-label":"breadcrumbs",children:[e.jsx(r,{to:"/reports",children:"Reports"}),e.jsx("span",{"aria-hidden":"true",children:"/"}),e.jsx("span",{className:"current",children:"Sales"})]}),e.jsxs(t.Header,{children:[e.jsxs("div",{className:"title",children:[e.jsx("h1",{children:"Sales Report"}),e.jsxs("p",{className:"meta",children:["Generated: ",e.jsx("strong",{children:U}),"  •  Range: ",e.jsxs("select",{value:x,onChange:s=>b(s.target.value),"aria-label":"Select report range",children:[e.jsx("option",{value:"today",children:"Today"}),e.jsx("option",{value:"yesterday",children:"Yesterday"}),e.jsx("option",{value:"last-7",children:"Last 7 days"}),e.jsx("option",{value:"last-30",children:"Last 30 days"}),e.jsx("option",{value:"this-month",children:"This month"}),e.jsx("option",{value:"last-month",children:"Last month"}),e.jsx("option",{value:"qtd",children:"Quarter to date"}),e.jsx("option",{value:"ytd",children:"Year to date"}),e.jsx("option",{value:"custom",children:"Custom"})]})]})]}),e.jsxs("div",{className:"actions",role:"toolbar","aria-label":"report actions",children:[e.jsx("button",{onClick:R,className:"primary",children:"Print"}),e.jsx("button",{onClick:C,title:"Export CSV/XLS",children:"Export"}),e.jsx("button",{onClick:S,title:"Schedule email",children:"Schedule"}),e.jsx(r,{to:"/dashboard",className:"linklike",title:"Go to dashboard",children:"Go to Dashboard"})]})]}),e.jsxs("section",{id:"search-print-area",children:[e.jsx(t.KpiGrid,{children:k.map(s=>e.jsxs(r,{to:s.link,className:"kpi card",title:s.label,children:[e.jsx("div",{className:"label",children:s.label}),e.jsx("div",{className:"value",children:s.value}),e.jsx("div",{className:"sub",children:s.sub})]},s.label))}),e.jsxs(t.QuickLinks,{className:"card",children:[e.jsxs("div",{className:"ql-head",children:[e.jsx("h3",{children:"Quick Navigation"}),e.jsx("span",{className:"muted",children:"Deep links you might need"})]}),e.jsxs("div",{className:"ql-grid",children:[e.jsx(r,{to:"/orders",title:"Sales Orders",children:"Sales Orders"}),e.jsx(r,{to:"/sales/quotes",title:"Quotations",children:"Quotations"}),e.jsx(r,{to:"/sales/payments",title:"Payments",children:"Payments"}),e.jsx(r,{to:"/invoices",title:"Invoices",children:"Invoices"}),e.jsx(r,{to:"/receipts",title:"Receipts",children:"Receipts"}),e.jsx(r,{to:"/customers",title:"Customers",children:"Customers"}),e.jsx(r,{to:"/products",title:"Products",children:"Products"}),e.jsx(r,{to:"/medicines",title:"Medicine Catalog",children:"Medicine Catalog"}),e.jsx(r,{to:"/inventory",title:"Inventory",children:"Inventory"}),e.jsx(r,{to:"/reports/inventory",title:"Inventory Report",children:"Inventory Report"}),e.jsx(r,{to:"/reports/finance",title:"Finance Report",children:"Finance Report"}),e.jsx(r,{to:"/reports/gst",title:"GST Report",children:"GST Report"})]})]}),e.jsxs(t.TwoCol,{children:[e.jsxs("div",{className:"col",children:[e.jsxs(t.Card,{className:"card",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Top Products"}),e.jsx(r,{to:"/products",className:"seeall",children:"See all"})]}),e.jsxs(t.Table,{role:"table","aria-label":"Top products",children:[e.jsxs("div",{className:"thead",role:"row",children:[e.jsx("div",{className:"th",children:"Product"}),e.jsx("div",{className:"th",children:"SKU"}),e.jsx("div",{className:"th num",children:"Units"}),e.jsx("div",{className:"th num",children:"Revenue"})]}),e.jsx("div",{className:"tbody",children:N.map(s=>e.jsxs(r,{to:s.link,className:"tr",role:"row",title:s.name,children:[e.jsx("div",{className:"td",children:s.name}),e.jsx("div",{className:"td mono",children:s.sku}),e.jsx("div",{className:"td num",children:s.units}),e.jsx("div",{className:"td num",children:s.revenue})]},s.id))})]})]}),e.jsxs(t.Card,{className:"card",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Top Customers"}),e.jsx(r,{to:"/customers",className:"seeall",children:"See all"})]}),e.jsxs(t.Table,{role:"table","aria-label":"Top customers",children:[e.jsxs("div",{className:"thead",role:"row",children:[e.jsx("div",{className:"th",children:"Customer"}),e.jsx("div",{className:"th",children:"City"}),e.jsx("div",{className:"th num",children:"Orders"}),e.jsx("div",{className:"th num",children:"Revenue"})]}),e.jsx("div",{className:"tbody",children:$.map(s=>e.jsxs(r,{to:s.link,className:"tr",role:"row",title:s.name,children:[e.jsx("div",{className:"td",children:s.name}),e.jsx("div",{className:"td",children:s.city}),e.jsx("div",{className:"td num",children:s.orders}),e.jsx("div",{className:"td num",children:s.revenue})]},s.id))})]})]}),e.jsxs(t.Card,{className:"card",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Recent Documents"}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"pill",children:"Order"}),e.jsx("span",{className:"pill",children:"Invoice"}),e.jsx("span",{className:"pill",children:"Quote"}),e.jsx("span",{className:"pill",children:"Return"}),e.jsx("span",{className:"pill",children:"Payment"})]})]}),e.jsxs(t.Table,{role:"table","aria-label":"Recent documents",children:[e.jsxs("div",{className:"thead",role:"row",children:[e.jsx("div",{className:"th",children:"Type"}),e.jsx("div",{className:"th",children:"ID"}),e.jsx("div",{className:"th",children:"When"}),e.jsx("div",{className:"th",children:"Party"})]}),e.jsx("div",{className:"tbody",children:w.map(s=>e.jsxs(r,{to:s.link,className:"tr",role:"row",title:s.id,children:[e.jsx("div",{className:"td",children:s.type}),e.jsx("div",{className:"td mono",children:s.id}),e.jsx("div",{className:"td",children:s.when}),e.jsx("div",{className:"td",children:s.who})]},s.id))})]})]})]}),e.jsxs("div",{className:"col",children:[e.jsxs(t.Card,{className:"card",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Revenue by Channel"}),e.jsx("div",{className:"muted",children:"Online • Retail • Wholesale"})]}),e.jsxs(t.ChartPlaceholder,{"aria-hidden":"true",children:[e.jsxs("div",{className:"bars",children:[e.jsx("div",{style:{height:"72%"}}),e.jsx("div",{style:{height:"55%"}}),e.jsx("div",{style:{height:"83%"}}),e.jsx("div",{style:{height:"64%"}}),e.jsx("div",{style:{height:"91%"}}),e.jsx("div",{style:{height:"47%"}})]}),e.jsxs("div",{className:"xlabels",children:[e.jsx("span",{children:"Mon"}),e.jsx("span",{children:"Tue"}),e.jsx("span",{children:"Wed"}),e.jsx("span",{children:"Thu"}),e.jsx("span",{children:"Fri"}),e.jsx("span",{children:"Sat"})]})]}),e.jsxs("div",{className:"footlnks",children:[e.jsx(r,{to:"/reports/sales",className:"linkchip",children:"Weekly"}),e.jsx(r,{to:"/reports/sales?range=last-30",className:"linkchip",children:"Monthly"}),e.jsx(r,{to:"/reports/sales?range=ytd",className:"linkchip",children:"YTD"})]})]}),e.jsxs(t.Card,{className:"card",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Payments by Gateway"}),e.jsx("div",{className:"muted",children:"Razorpay • Stripe • Cash"})]}),e.jsxs(t.ChartDonut,{"aria-hidden":"true",children:[e.jsxs("div",{className:"ring",children:[e.jsx("div",{className:"seg s1"}),e.jsx("div",{className:"seg s2"}),e.jsx("div",{className:"seg s3"}),e.jsx("div",{className:"hole"})]}),e.jsxs("div",{className:"legend",children:[e.jsxs("span",{children:[e.jsx("i",{className:"dot d1"})," Razorpay"]}),e.jsxs("span",{children:[e.jsx("i",{className:"dot d2"})," Stripe"]}),e.jsxs("span",{children:[e.jsx("i",{className:"dot d3"})," Cash"]})]})]}),e.jsxs("div",{className:"footlnks",children:[e.jsx(r,{to:"/sales/payments",className:"linkchip",children:"View Payments"}),e.jsx(r,{to:"/finance/ledgers",className:"linkchip",children:"Open Ledgers"})]})]}),e.jsxs(t.Card,{className:"card",children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Regional Mix"}),e.jsx("div",{className:"muted",children:"City-wise contribution"})]}),e.jsxs(t.MapPlaceholder,{"aria-hidden":"true",children:[e.jsx("div",{className:"blob b1"}),e.jsx("div",{className:"blob b2"}),e.jsx("div",{className:"blob b3"}),e.jsx("div",{className:"blob b4"})]}),e.jsxs("div",{className:"footlnks",children:[e.jsx(r,{to:"/reports/sales",className:"linkchip",children:"Metro"}),e.jsx(r,{to:"/reports/sales",className:"linkchip",children:"Tier II"}),e.jsx(r,{to:"/reports/sales",className:"linkchip",children:"Tier III"})]})]})]})]})]}),e.jsxs(t.FooterLinks,{className:"card",children:[e.jsxs("div",{className:"group",children:[e.jsx("h4",{children:"Related Reports"}),e.jsxs("div",{className:"links",children:[e.jsx(r,{to:"/reports/inventory",children:"Inventory"}),e.jsx(r,{to:"/reports/customers",children:"Customers"}),e.jsx(r,{to:"/reports/finance",children:"Finance"}),e.jsx(r,{to:"/reports/procurement",children:"Procurement"}),e.jsx(r,{to:"/reports/shipment",children:"Shipment"}),e.jsx(r,{to:"/reports/gst",children:"GST"})]})]}),e.jsxs("div",{className:"group",children:[e.jsx("h4",{children:"Open Modules"}),e.jsxs("div",{className:"links",children:[e.jsx(r,{to:"/orders",children:"Orders"}),e.jsx(r,{to:"/invoices",children:"Invoices"}),e.jsx(r,{to:"/customers",children:"Customers"}),e.jsx(r,{to:"/products",children:"Products"}),e.jsx(r,{to:"/inventory",children:"Inventory"}),e.jsx(r,{to:"/sales/payments",children:"Payments"})]})]}),e.jsxs("div",{className:"group",children:[e.jsx("h4",{children:"Settings"}),e.jsxs("div",{className:"links",children:[e.jsx(r,{to:"/settings/appearance",children:"Appearance"}),e.jsx(r,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(r,{to:"/settings/notifications",children:"Notifications"}),e.jsx(r,{to:"/settings/numbering",children:"Numbering"}),e.jsx(r,{to:"/settings/tax",children:"Tax"})]})]})]}),e.jsx(L,{open:c.open,title:c.title,message:c.message,onClose:s=>c.onDone&&c.onDone(s),confirmText:"OK"})]})};export{F as default};
