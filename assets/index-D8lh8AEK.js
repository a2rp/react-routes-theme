import{d as t,r as g,j as s,N as r}from"./index-Dm9gfKqL.js";const m="var(--text, #f3f4f6)",j="var(--muted, #a0a0a7)",p="var(--card, #111318)",n="var(--border, #23262d)",i="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",y="var(--radius, 16px)",a={Page:t.div`
        padding: 18px;
        color: ${m};
    `,Header:t.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 14px 16px;
        margin-bottom: 16px;
        align-items: center;

        .lhs h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${j};
            font-size: 12px;
        }

        .rhs {
            display: grid;
            grid-auto-flow: column;
            align-items: end;
            gap: 16px;
        }
        .filters {
            display: grid;
            grid-auto-flow: column;
            gap: 12px;
        }
        .f {
            min-width: 140px;
        }
        .f label {
            display: block;
            font-size: 12px;
            color: ${j};
            margin-bottom: 6px;
        }
        .actions {
            display: flex;
            gap: 8px;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${p};
            color: ${m};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.03s;
        }
        .btnPrimary:hover {
            color: ${i};
            border-color: ${i};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnGhost:hover {
            color: ${i};
            border-color: ${i};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,KPIRow:t.section`
        display: grid;
        grid-template-columns: repeat(6, minmax(220px, 1fr));
        gap: 14px;
        margin-bottom: 16px;

        @media (max-width: 1500px) {
            grid-template-columns: repeat(3, minmax(220px, 1fr));
        }
        @media (max-width: 900px) {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,KPI:t.div`
        padding: 12px 14px;
        border: 1px solid ${n};
        border-radius: ${y};
        background: ${p};
        box-shadow: var(--shadow);

        .k {
            color: ${j};
            font-size: 12px;
        }
        .v {
            font-size: 22px;
            font-weight: 700;
            margin-top: 6px;
            letter-spacing: 0.2px;
        }
        .tiny {
            margin-top: 4px;
            color: ${j};
            font-size: 12px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border: 1px solid ${n};
            border-radius: 999px;
            margin-right: 6px;
            margin-top: 8px;
            background: color-mix(in oklab, ${i} 8%, transparent);
        }
    `,Spark:t.div`
        margin-top: 10px;
        svg {
            width: 100%;
            height: 46px;
        }
        polyline {
            fill: none;
            stroke: ${i};
            stroke-width: 2;
            vector-effect: non-scaling-stroke;
        }
    `,Segments:t.div`
        margin-top: 6px;
    `,MainGrid:t.div`
        display: grid;
        grid-template-columns: 2fr 2fr 1fr;
        gap: 16px;

        @media (max-width: 1400px) {
            grid-template-columns: 1.5fr 1.5fr 1fr;
        }
        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .block {
            padding: 14px;
        }
        .block header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .block h3 {
            font-size: 16px;
        }
        .block .tools {
            display: flex;
            gap: 8px;
        }

        .btnGhost.small {
            padding: 6px 10px;
            border: 1px solid ${n};
            border-radius: 8px;
            background: ${p};
            color: ${m};
        }
        .btnGhost.small:hover {
            border-color: ${i};
            color: ${i};
        }
        .btnGhost.tiny {
            padding: 4px 8px;
            font-size: 12px;
            border: 1px solid ${n};
            border-radius: 8px;
        }
        .btnGhost.tiny:hover {
            border-color: ${i};
            color: ${i};
        }

        .content {
            display: block;
        }
        .content.two {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 1100px) {
            .content.two {
                grid-template-columns: 1fr;
            }
        }

        .side {
            display: grid;
            gap: 16px;
        }
        .sideBlock {
            padding: 14px;
        }
        .sideBlock h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }
        .list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .list li {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 8px;
            align-items: center;
        }
        .list .label {
            color: ${m};
        }
        .list .value {
            color: ${j};
            font-size: 12px;
        }

        .linksCol {
            display: grid;
            gap: 8px;
        }
        .linksCol a {
            color: var(--muted, #a0a0a7);
            padding: 6px 8px;
            border: 1px solid ${n};
            border-radius: 8px;
            background: ${p};
        }
        .linksCol a:hover {
            color: ${i};
            border-color: ${i};
        }
    `,Chart:t.div`
        width: 100%;
        border: 1px solid ${n};
        border-radius: 12px;
        padding: 10px;
        background: ${p};

        .legend {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-right: 14px;
            color: ${j};
            font-size: 12px;
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            display: inline-block;
            border: 1px solid ${n};
        }
        .dot1 {
            background: color-mix(in oklab, ${i} 45%, transparent);
        }
        .dot2 {
            background: color-mix(in oklab, ${i} 25%, transparent);
        }
        .dot3 {
            background: color-mix(in oklab, ${i} 10%, transparent);
        }

        svg {
            width: 100%;
            height: 220px;
            margin-top: 8px;
        }
        .axis {
            stroke: ${n};
            stroke-width: 1;
        }
        .s1,
        .s2,
        .s3 {
            fill: none;
            stroke-width: 2;
            vector-effect: non-scaling-stroke;
        }
        .s1 {
            stroke: ${i};
        }
        .s2 {
            stroke: color-mix(in oklab, ${i} 60%, #888);
        }
        .s3 {
            stroke: color-mix(in oklab, ${i} 35%, #888);
        }
    `,MiniStats:t.div`
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 12px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }

        .stat {
            border: 1px solid ${n};
            border-radius: 10px;
            padding: 10px 12px;
            background: ${p};
        }
        .k {
            color: ${j};
            font-size: 12px;
        }
        .v {
            margin-top: 4px;
            font-weight: 700;
        }
    `,Table:t.div`
        border: 1px solid ${n};
        border-radius: 10px;
        overflow: hidden;

        .thead {
            background: ${p};
        }
        .tr {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            border-bottom: 1px solid ${n};
        }
        .thead .tr {
            font-weight: 600;
            color: ${i};
        }
        .tbody .tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .th,
        .td {
            padding: 10px;
        }
        .td.num {
            text-align: right;
        }

        /* variants: 3 / 2 columns used in some tables */
        &[role="table"][aria-label="Top accounts by balance"] .tr {
            grid-template-columns: 2fr 1fr 1fr;
        }
        &[role="table"][aria-label="Recent journal entries"] .tr {
            grid-template-columns: 1.1fr 1.2fr 2fr 1fr;
        }
        &[role="table"][aria-label="Aged receivables"] .tr,
        &[role="table"][aria-label="Aged payables"] .tr {
            grid-template-columns: 1fr 1fr;
        }
    `,Overlay:t.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:t.div`
        width: min(520px, 92vw);
        border-radius: ${y};
        border: 1px solid ${n};
        background: ${p};
        color: ${m};
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
            color: ${m};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${n};
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${p};
            color: ${m};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
        }
    `},o=(l,c)=>{const d=l instanceof Date?l:new Date(l),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=N=>String(N).padStart(2,"0"),v=`${x[d.getDay()]} ${b[d.getMonth()]} ${h(d.getDate())} ${d.getFullYear()}`;return c?`${v} ${h(d.getHours())}:${h(d.getMinutes())}:${h(d.getSeconds())}hrs`:v},$=l=>{const c=l instanceof Date?l:new Date(l),d=x=>String(x).padStart(2,"0");return`${d(c.getHours())}:${d(c.getMinutes())}:${d(c.getSeconds())}hrs`},S=({open:l,title:c,message:d,onClose:x,onConfirm:b,confirmText:h="Confirm"})=>l?s.jsx(a.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:x,children:s.jsxs(a.Modal,{className:"card",onMouseDown:v=>v.stopPropagation(),children:[s.jsx("header",{children:s.jsx("h4",{children:c})}),s.jsx("div",{className:"body",children:s.jsx("p",{children:d})}),s.jsxs("footer",{children:[s.jsx("button",{className:"btnGhost",onClick:x,children:"Close"}),s.jsx("button",{className:"btnPrimary",onClick:b,children:h})]})]})}):null,P=()=>{const l=g.useMemo(()=>new Date,[]),[c,d]=g.useState("Sep 2025"),[x,b]=g.useState("FY 2025-26"),[h,v]=g.useState("INR"),[N,u]=g.useState(!1),k=g.useRef(null),w=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};return s.jsxs(a.Page,{children:[s.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left:0; top:0; width:100%; }
        }
      `}),s.jsxs(a.Header,{className:"card",children:[s.jsxs("div",{className:"lhs",children:[s.jsx("h1",{children:"Finance"}),s.jsxs("div",{className:"meta",children:[s.jsx("span",{children:"Overview"}),s.jsx("span",{children:"•"}),s.jsxs("span",{children:["Updated ",o(l,!0)]})]})]}),s.jsxs("div",{className:"rhs",children:[s.jsxs("div",{className:"filters",children:[s.jsxs("div",{className:"f",children:[s.jsx("label",{children:"Period"}),s.jsxs("select",{value:c,onChange:e=>d(e.target.value),children:[s.jsx("option",{children:"Sep 2025"}),s.jsx("option",{children:"Aug 2025"}),s.jsx("option",{children:"Jul 2025"}),s.jsx("option",{children:"Q2 2025-26"}),s.jsx("option",{children:"YTD 2025-26"})]})]}),s.jsxs("div",{className:"f",children:[s.jsx("label",{children:"FY"}),s.jsxs("select",{value:x,onChange:e=>b(e.target.value),children:[s.jsx("option",{children:"FY 2025-26"}),s.jsx("option",{children:"FY 2024-25"}),s.jsx("option",{children:"FY 2023-24"})]})]}),s.jsxs("div",{className:"f",children:[s.jsx("label",{children:"Currency"}),s.jsxs("select",{value:h,onChange:e=>v(e.target.value),children:[s.jsx("option",{children:"INR"}),s.jsx("option",{children:"USD"}),s.jsx("option",{children:"EUR"})]})]})]}),s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btnGhost",onClick:w,title:"Print finance snapshot",children:"Print"}),s.jsx("button",{className:"btnPrimary",onClick:()=>u(!0),title:"Close current period",children:"Close Period"})]})]})]}),s.jsxs(a.KPIRow,{children:[s.jsxs(a.KPI,{className:"card",children:[s.jsx("div",{className:"k",children:"Cash & Bank"}),s.jsx("div",{className:"v",children:"₹ 1,92,40,000"}),s.jsxs("div",{className:"tiny",children:["as of ",o(l)]}),s.jsx(a.Spark,{"aria-hidden":"true",children:s.jsx("svg",{viewBox:"0 0 120 40",preserveAspectRatio:"none",children:s.jsx("polyline",{points:"0,30 15,22 30,26 45,18 60,14 75,16 90,10 105,14 120,8"})})})]}),s.jsxs(a.KPI,{className:"card",children:[s.jsx("div",{className:"k",children:"Receivables"}),s.jsx("div",{className:"v",children:"₹ 58,10,300"}),s.jsx("div",{className:"tiny",children:"Avg. DSO 43 days"}),s.jsxs(a.Segments,{children:[s.jsx("span",{className:"chip",children:"Current"}),s.jsx("span",{className:"chip",children:"30+"}),s.jsx("span",{className:"chip",children:"60+"}),s.jsx("span",{className:"chip",children:"90+"})]})]}),s.jsxs(a.KPI,{className:"card",children:[s.jsx("div",{className:"k",children:"Payables"}),s.jsx("div",{className:"v",children:"₹ 31,55,900"}),s.jsxs("div",{className:"tiny",children:["Next payout ",o(l)]}),s.jsx(a.Spark,{children:s.jsx("svg",{viewBox:"0 0 120 40",preserveAspectRatio:"none",children:s.jsx("polyline",{points:"0,20 15,18 30,22 45,14 60,18 75,20 90,22 105,17 120,19"})})})]}),s.jsxs(a.KPI,{className:"card",children:[s.jsx("div",{className:"k",children:"Revenue (MTD)"}),s.jsx("div",{className:"v",children:"₹ 14,85,200"}),s.jsxs("div",{className:"tiny",children:["Cutoff ",$(l)]}),s.jsx(a.Spark,{children:s.jsx("svg",{viewBox:"0 0 120 40",preserveAspectRatio:"none",children:s.jsx("polyline",{points:"0,32 20,30 40,26 60,24 80,18 100,14 120,10"})})})]}),s.jsxs(a.KPI,{className:"card",children:[s.jsx("div",{className:"k",children:"Expenses (MTD)"}),s.jsx("div",{className:"v",children:"₹ 8,42,700"}),s.jsx("div",{className:"tiny",children:"Incl. payroll & utilities"}),s.jsx(a.Spark,{children:s.jsx("svg",{viewBox:"0 0 120 40",preserveAspectRatio:"none",children:s.jsx("polyline",{points:"0,16 20,18 40,20 60,22 80,26 100,28 120,30"})})})]}),s.jsxs(a.KPI,{className:"card",children:[s.jsx("div",{className:"k",children:"Net Profit (MTD)"}),s.jsx("div",{className:"v",children:"₹ 6,42,500"}),s.jsx("div",{className:"tiny",children:"Margin 18.6%"}),s.jsx(a.Spark,{children:s.jsx("svg",{viewBox:"0 0 120 40",preserveAspectRatio:"none",children:s.jsx("polyline",{points:"0,30 20,28 40,24 60,26 80,20 100,16 120,14"})})})]})]}),s.jsxs(a.MainGrid,{children:[s.jsxs("section",{className:"card block",children:[s.jsxs("header",{children:[s.jsx("h3",{children:"P&L Snapshot"}),s.jsx("div",{className:"tools",children:s.jsx(r,{to:"/finance/profit-loss",className:"btnGhost small",children:"Open"})})]}),s.jsxs("div",{className:"content",children:[s.jsxs(a.Chart,{children:[s.jsxs("div",{className:"legend",children:[s.jsx("span",{className:"dot dot1"})," Revenue"]}),s.jsxs("div",{className:"legend",children:[s.jsx("span",{className:"dot dot2"})," COGS"]}),s.jsxs("div",{className:"legend",children:[s.jsx("span",{className:"dot dot3"})," Opex"]}),s.jsxs("svg",{viewBox:"0 0 800 220",preserveAspectRatio:"none",children:[s.jsx("line",{x1:"40",y1:"10",x2:"40",y2:"200",className:"axis"}),s.jsx("line",{x1:"40",y1:"200",x2:"780",y2:"200",className:"axis"}),s.jsx("polyline",{className:"s1",points:"40,180 120,160 200,154 280,138 360,126 440,110 520,96 600,92 680,82 760,70"}),s.jsx("polyline",{className:"s2",points:"40,190 120,178 200,172 280,166 360,160 440,154 520,148 600,144 680,138 760,132"}),s.jsx("polyline",{className:"s3",points:"40,188 120,184 200,182 280,178 360,176 440,172 520,168 600,166 680,164 760,162"})]})]}),s.jsxs(a.MiniStats,{children:[s.jsxs("div",{className:"stat",children:[s.jsx("div",{className:"k",children:"Gross Margin"}),s.jsx("div",{className:"v",children:"34.1%"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("div",{className:"k",children:"Opex Ratio"}),s.jsx("div",{className:"v",children:"12.8%"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("div",{className:"k",children:"EBITDA"}),s.jsx("div",{className:"v",children:"₹ 3,24,000"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("div",{className:"k",children:"Runway"}),s.jsx("div",{className:"v",children:"11.2 months"})]})]})]})]}),s.jsxs("section",{className:"card block",children:[s.jsxs("header",{children:[s.jsx("h3",{children:"Top Accounts"}),s.jsx("div",{className:"tools",children:s.jsx(r,{to:"/finance/ledgers",className:"btnGhost small",children:"Ledgers"})})]}),s.jsx("div",{className:"content",children:s.jsxs(a.Table,{role:"table","aria-label":"Top accounts by balance",children:[s.jsx("div",{className:"thead",role:"rowgroup",children:s.jsxs("div",{className:"tr",role:"row",children:[s.jsx("div",{className:"th",role:"columnheader",children:"Account"}),s.jsx("div",{className:"th",role:"columnheader",children:"Type"}),s.jsx("div",{className:"th",role:"columnheader",style:{textAlign:"right"},children:"Balance"})]})}),s.jsx("div",{className:"tbody",role:"rowgroup",children:[["1001 - Cash on Hand","Asset","₹ 24,40,000"],["1005 - Bank - HDFC","Asset","₹ 1,68,00,000"],["1200 - Accounts Receivable","Asset","₹ 58,10,300"],["2100 - Accounts Payable","Liability","₹ 31,55,900"],["4000 - Sales","Income","₹ 14,85,200"]].map(e=>s.jsxs("div",{className:"tr",role:"row",children:[s.jsx("div",{className:"td",role:"cell",children:s.jsx(r,{to:"/finance/ledgers/1005",children:e[0]})}),s.jsx("div",{className:"td",role:"cell",children:e[1]}),s.jsx("div",{className:"td num",role:"cell",children:e[2]})]},e[0]))})]})})]}),s.jsxs("section",{className:"card block",children:[s.jsxs("header",{children:[s.jsx("h3",{children:"Recent Journals"}),s.jsx("div",{className:"tools",children:s.jsx(r,{to:"/finance/journals",className:"btnGhost small",children:"Journals"})})]}),s.jsx("div",{className:"content",children:s.jsxs(a.Table,{role:"table","aria-label":"Recent journal entries",children:[s.jsx("div",{className:"thead",role:"rowgroup",children:s.jsxs("div",{className:"tr",role:"row",children:[s.jsx("div",{className:"th",children:"Date"}),s.jsx("div",{className:"th",children:"Journal #"}),s.jsx("div",{className:"th",children:"Memo"}),s.jsx("div",{className:"th",style:{textAlign:"right"},children:"Amount"})]})}),s.jsx("div",{className:"tbody",role:"rowgroup",children:[[o(l),"JR-31021","Payroll Sep Wk4","₹ 4,80,000"],[o(l),"JR-31020","GST Settlement","₹ 1,22,400"],[o(l),"JR-31019","COGS Adjustment","₹ 86,700"],[o(l),"JR-31018","Sales Recognition","₹ 9,50,000"]].map(e=>s.jsxs("div",{className:"tr",children:[s.jsx("div",{className:"td",children:e[0]}),s.jsx("div",{className:"td",children:s.jsx(r,{to:"/finance/journals/JR-31021",children:e[1]})}),s.jsx("div",{className:"td",children:e[2]}),s.jsx("div",{className:"td num",children:e[3]})]},e[1]))})]})})]}),s.jsxs("aside",{className:"side",children:[s.jsxs("div",{className:"card sideBlock",children:[s.jsx("h3",{children:"Compliance"}),s.jsxs("ul",{className:"list",children:[s.jsxs("li",{children:[s.jsx("span",{className:"label",children:"GST Return"}),s.jsxs("span",{className:"value",children:["Due ",o(l)]}),s.jsx(r,{to:"/finance/gst-returns",className:"btnGhost tiny",children:"Open"})]}),s.jsxs("li",{children:[s.jsx("span",{className:"label",children:"Tax"}),s.jsxs("span",{className:"value",children:["Next ",o(l)]}),s.jsx(r,{to:"/finance/taxes",className:"btnGhost tiny",children:"Tax"})]})]})]}),s.jsxs("div",{className:"card sideBlock",children:[s.jsx("h3",{children:"Shortcuts"}),s.jsxs("div",{className:"linksCol",children:[s.jsx(r,{to:"/finance/balance-sheet",children:"Balance Sheet"}),s.jsx(r,{to:"/finance/profit-loss",children:"Profit & Loss"}),s.jsx(r,{to:"/finance/chart-of-accounts",children:"Chart of Accounts"}),s.jsx(r,{to:"/finance/ledgers",children:"Ledgers"}),s.jsx(r,{to:"/finance/journals",children:"Journals"}),s.jsx(r,{to:"/invoices",children:"Invoices"}),s.jsx(r,{to:"/reports/finance",children:"Finance Report"})]})]}),s.jsxs("div",{className:"card sideBlock",id:"search-print-area",ref:k,children:[s.jsx("h3",{children:"Print Snapshot"}),s.jsxs("div",{className:"printGrid",children:[s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"k",children:"Period"}),s.jsx("span",{className:"v",children:c})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"k",children:"FY"}),s.jsx("span",{className:"v",children:x})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"k",children:"Currency"}),s.jsx("span",{className:"v",children:h})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"k",children:"Cash & Bank"}),s.jsx("span",{className:"v",children:"₹ 1,92,40,000"})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"k",children:"Receivables"}),s.jsx("span",{className:"v",children:"₹ 58,10,300"})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"k",children:"Payables"}),s.jsx("span",{className:"v",children:"₹ 31,55,900"})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"k",children:"Revenue (MTD)"}),s.jsx("span",{className:"v",children:"₹ 14,85,200"})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"k",children:"Expenses (MTD)"}),s.jsx("span",{className:"v",children:"₹ 8,42,700"})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{className:"k",children:"Generated"}),s.jsx("span",{className:"v",children:o(l,!0)})]})]})]})]}),s.jsxs("section",{className:"card block",children:[s.jsxs("header",{children:[s.jsx("h3",{children:"Aged Buckets (Receivables / Payables)"}),s.jsxs("div",{className:"tools",children:[s.jsx(r,{to:"/reports/customers",className:"btnGhost small",children:"Customer Aging"}),s.jsx(r,{to:"/reports/procurement",className:"btnGhost small",children:"Vendor Aging"})]})]}),s.jsxs("div",{className:"content two",children:[s.jsxs(a.Table,{role:"table","aria-label":"Aged receivables",children:[s.jsx("div",{className:"thead",children:s.jsxs("div",{className:"tr",children:[s.jsx("div",{className:"th",children:"Bucket"}),s.jsx("div",{className:"th",style:{textAlign:"right"},children:"Amount"})]})}),s.jsx("div",{className:"tbody",children:[["Current","₹ 31,70,000"],["30+","₹ 16,20,300"],["60+","₹ 8,10,000"],["90+","₹ 2,10,000"]].map(e=>s.jsxs("div",{className:"tr",children:[s.jsx("div",{className:"td",children:e[0]}),s.jsx("div",{className:"td num",children:e[1]})]},e[0]))})]}),s.jsxs(a.Table,{role:"table","aria-label":"Aged payables",children:[s.jsx("div",{className:"thead",children:s.jsxs("div",{className:"tr",children:[s.jsx("div",{className:"th",children:"Bucket"}),s.jsx("div",{className:"th",style:{textAlign:"right"},children:"Amount"})]})}),s.jsx("div",{className:"tbody",children:[["Current","₹ 22,40,000"],["30+","₹ 6,40,900"],["60+","₹ 2,35,000"],["90+","₹ 40,000"]].map(e=>s.jsxs("div",{className:"tr",children:[s.jsx("div",{className:"td",children:e[0]}),s.jsx("div",{className:"td num",children:e[1]})]},e[0]))})]})]})]}),s.jsxs("section",{className:"card block",children:[s.jsxs("header",{children:[s.jsx("h3",{children:"Tax Summary"}),s.jsx("div",{className:"tools",children:s.jsx(r,{to:"/finance/taxes",className:"btnGhost small",children:"Open"})})]}),s.jsx("div",{className:"content",children:s.jsxs(a.Table,{role:"table","aria-label":"Tax summary",children:[s.jsx("div",{className:"thead",children:s.jsxs("div",{className:"tr",children:[s.jsx("div",{className:"th",children:"Head"}),s.jsx("div",{className:"th",children:"Period"}),s.jsx("div",{className:"th",style:{textAlign:"right"},children:"Payable"}),s.jsx("div",{className:"th",style:{textAlign:"right"},children:"Input Credit"}),s.jsx("div",{className:"th",style:{textAlign:"right"},children:"Net"})]})}),s.jsx("div",{className:"tbody",children:[["GST",c,"₹ 1,98,400","₹ 76,000","₹ 1,22,400"],["TDS",c,"₹ 64,800","₹ 0","₹ 64,800"],["Professional Tax",c,"₹ 12,000","₹ 0","₹ 12,000"]].map(e=>s.jsxs("div",{className:"tr",children:[s.jsx("div",{className:"td",children:e[0]}),s.jsx("div",{className:"td",children:e[1]}),s.jsx("div",{className:"td num",children:e[2]}),s.jsx("div",{className:"td num",children:e[3]}),s.jsx("div",{className:"td num",children:e[4]})]},e[0]))})]})})]})]}),s.jsx(S,{open:N,title:"Close Period",message:"This is a demo preview. Period closing is disabled here.",confirmText:"Okay",onConfirm:()=>u(!1),onClose:()=>u(!1)})]})};export{P as default};
