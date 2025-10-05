import{d as o,r as g,j as e,N as j,L as s}from"./index-Dm9gfKqL.js";import{B as u,b as f,a as L,k as h,Q as T,R as G}from"./index-BjqOZRWg.js";const $="var(--bg, #0d1117)",i="var(--text, #f3f4f6)",t="var(--muted, #a0a0a7)",l="var(--card, #111318)",n="var(--border, #23262d)",a="var(--accent, #5aa9ff)",m="var(--accent-soft, rgba(90,169,255,0.15))",R=o.div`
    width: 100%;
    padding: 16px 18px 32px;
    color: ${i};
`,C=o.header`
    margin-bottom: 18px;

    .breadcrumbs {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${t};
        a {
            color: inherit;
            text-decoration: none;
        }
        svg {
            opacity: 0.7;
        }
    }

    .titleRow {
        margin-top: 8px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
    }

    .titleBlock {
        h1 {
            font-size: 24px;
            line-height: 1.2;
            margin: 0 0 6px 0;
            font-family: "Antonio", sans-serif;
            letter-spacing: 0.3px;
        }
        .meta {
            display: flex;
            gap: 14px;
            color: ${t};
            font-size: 12px;
            span {
                border-left: 1px solid ${n};
                padding-left: 10px;
            }
            span:first-child {
                border-left: none;
                padding-left: 0;
            }
        }
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        button,
        a {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: ${l};
            color: ${i};
            border: 1px solid ${n};
            padding: 8px 12px;
            border-radius: 8px;
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s, background 0.2s,
                transform 0.05s;
        }
        button:hover,
        a:hover {
            border-color: ${a};
            color: ${a};
            background: rgba(0, 0, 0, 0.08);
        }
        button:active,
        a:active {
            transform: translateY(1px);
        }
        .ghost {
            background: transparent;
        }
    }
`,A=o.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
    margin-bottom: 18px;

    .kpi {
        display: grid;
        grid-template-rows: auto auto auto auto;
        gap: 6px;
        padding: 12px;
        background: ${l};
        border: 1px solid ${n};
        border-radius: 12px;
        text-decoration: none;
        color: ${i};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

        &:hover {
            border-color: ${a};
            color: ${i};
            outline: none;
            box-shadow: 0 0 0 3px ${m};
        }

        .label {
            color: ${t};
            font-size: 12px;
        }
        .value {
            font-size: 20px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .delta {
            font-size: 12px;
            color: ${t};
        }
        .spark {
            margin-top: 4px;
            color: ${a};
        }
        .trend {
            opacity: 0.9;
        }
    }
`,v=o.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`,p=o.section`
    background: ${l};
    border: 1px solid ${n};
    border-radius: 12px;
    padding: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;
        h2 {
            font-size: 16px;
            letter-spacing: 0.2px;
        }
        a {
            color: ${t};
            text-decoration: none;
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 8px;
        }
        a:hover {
            color: ${a};
            border-color: ${a};
            background: rgba(0, 0, 0, 0.06);
        }
    }

    .footLinks {
        margin-top: 10px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        a {
            color: ${t};
            text-decoration: none;
        }
        a:hover {
            color: ${a};
        }
    }

    .legend {
        display: flex;
        gap: 8px;
    }
    .chip {
        border: 1px solid ${n};
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 12px;
        color: ${t};
        background: color-mix(in oklab, ${l} 92%, transparent);
    }

    .taxGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 10px;
    }
    .tax {
        display: grid;
        gap: 4px;
        text-decoration: none;
        color: ${i};
        padding: 10px;
        border: 1px solid ${n};
        border-radius: 10px;
        background: ${$};
    }
    .tax:hover {
        border-color: ${a};
        box-shadow: 0 0 0 3px ${m};
    }
    .tax .name {
        color: ${t};
        font-size: 12px;
    }
    .tax .amt {
        font-weight: 700;
    }
`,b=o.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;

    thead th {
        text-align: left;
        background: ${l};
        color: ${a};
        font-weight: 600;
        border-bottom: 1px solid ${n};
        padding: 10px;
        position: sticky;
        top: 0;
        z-index: 1;
    }
    tbody td {
        border-bottom: 1px solid ${n};
        padding: 10px;
        vertical-align: top;
    }
    tbody tr:hover {
        background: color-mix(in oklab, ${l} 92%, transparent);
    }
    .right {
        text-align: right;
    }
    .muted {
        color: ${t};
    }
    a.inlineLink {
        color: ${t};
        text-decoration: none;
    }
    a.inlineLink:hover {
        color: ${a};
    }
`,S=o.nav`
    margin: 12px 0 18px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 10px;

    .q {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: ${i};
        border: 1px solid ${n};
        border-radius: 12px;
        padding: 12px;
        background: ${l};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    }
    .q:hover {
        border-color: ${a};
        box-shadow: 0 0 0 3px ${m};
    }
`,V=o.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 10px;

    li {
        display: grid;
        grid-template-columns: 14px 1fr;
        gap: 8px;
    }
    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${a};
        margin-top: 7px;
        box-shadow: 0 0 0 3px ${m};
    }
    .row {
        display: grid;
        gap: 2px;
    }
    .when {
        color: ${t};
        font-size: 12px;
    }
    .what a {
        color: ${i};
        text-decoration: none;
        border-bottom: 1px dashed ${n};
    }
    .what a:hover {
        color: ${a};
        border-color: ${a};
    }
`,O=o.footer`
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-top: 1px solid ${n};
    padding-top: 12px;

    .left {
        display: flex;
        gap: 8px;
        color: ${t};
        font-size: 12px;
    }
    .left strong {
        color: ${i};
    }
    .right {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }
    .right a {
        color: ${t};
        text-decoration: none;
    }
    .right a:hover {
        color: ${a};
    }
`,P=o.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 50;
`,B=o.div`
    width: min(680px, 92vw);
    background: ${l};
    color: ${i};
    border: 1px solid ${n};
    border-radius: 14px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    overflow: hidden;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        border-bottom: 1px solid ${n};
        h3 {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0;
            font-size: 16px;
        }
        .icon {
            border: 1px solid ${n};
            background: transparent;
            color: ${i};
            padding: 4px 8px;
            border-radius: 8px;
            cursor: pointer;
        }
        .icon:hover {
            border-color: ${a};
            color: ${a};
        }
    }
    .content {
        padding: 14px;
        p {
            color: ${t};
            margin: 0 0 10px 0;
        }
        .options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 8px;
            margin: 8px 0;
        }
        .opt {
            border: 1px solid ${n};
            padding: 10px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
            background: ${$};
        }
        .share {
            display: flex;
            gap: 8px;
            margin-top: 8px;
        }
        .share .ghost {
            border: 1px solid ${n};
            background: transparent;
            color: ${i};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
        }
        .share .ghost:hover {
            border-color: ${a};
            color: ${a};
        }
    }
    footer {
        padding: 12px 14px;
        border-top: 1px solid ${n};
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        button {
            background: ${l};
            color: ${i};
            border: 1px solid ${n};
            padding: 8px 12px;
            border-radius: 10px;
            cursor: pointer;
        }
        button:hover {
            border-color: ${a};
            color: ${a};
        }
    }
`,D=c=>{try{return new Date(c).toDateString()}catch{return""}},J=c=>{try{return new Date(c).toLocaleTimeString("en-GB",{hour12:!1})+"hrs"}catch{return""}},x=c=>{try{const d=new Date(c);return`${d.toDateString()} ${d.toLocaleTimeString("en-GB",{hour12:!1})}hrs`}catch{return""}},y="2025-10-05T19:19:24.622Z",I="2025-10-06T00:49:19+05:30",z=[{label:"Revenue (MTD)",value:"₹ 1,48,20,000",delta:"+4.8%",href:"/reports/sales"},{label:"Expenses (MTD)",value:"₹ 92,10,430",delta:"+1.2%",href:"/finance/ledgers"},{label:"Gross Margin",value:"37.8%",delta:"+0.6pp",href:"/reports/finance"},{label:"Outstanding AR",value:"₹ 58,36,210",delta:"↓",href:"/sales/payments"},{label:"Outstanding AP",value:"₹ 33,11,720",delta:"↓",href:"/purchase-orders"},{label:"Cash & Bank",value:"₹ 21,07,550",delta:"—",href:"/finance/ledgers/GL-CASH"}],F=[{code:"GL-4000",name:"Revenue",balance:"₹ 12,48,20,000",route:"/finance/ledgers/GL-4000"},{code:"GL-5001",name:"COGS",balance:"₹ 7,75,40,230",route:"/finance/ledgers/GL-5001"},{code:"GL-1001",name:"Cash",balance:"₹ 9,87,540",route:"/finance/ledgers/GL-1001"},{code:"GL-1002",name:"Bank - Current A/C",balance:"₹ 20,18,010",route:"/finance/ledgers/GL-1002"},{code:"GL-2100",name:"Accounts Payable",balance:"₹ 33,11,720",route:"/finance/ledgers/GL-2100"},{code:"GL-1200",name:"Accounts Receivable",balance:"₹ 58,36,210",route:"/finance/ledgers/GL-1200"}],M=[{id:"JV-10231",date:"2025-10-04T09:25:10+05:30",desc:"Sales recognition - Order ORD-3001",link:"/finance/journals/JV-10231",debit:"₹ 2,45,000",credit:"₹ 2,45,000"},{id:"JV-10230",date:"2025-10-03T18:04:41+05:30",desc:"Bank charges - ICICI",link:"/finance/journals/JV-10230",debit:"₹ 0",credit:"₹ 1,250"},{id:"JV-10229",date:"2025-10-03T10:11:02+05:30",desc:"Vendor bill - PO-5507",link:"/finance/journals/JV-10229",debit:"₹ 1,18,540",credit:"₹ 1,18,540"},{id:"JV-10228",date:"2025-10-02T16:33:55+05:30",desc:"Customer payment - INV-2031",link:"/finance/journals/JV-10228",debit:"₹ 1,50,000",credit:"₹ 1,50,000"}],E=[{bucket:"0–30 days",ar:"₹ 28,45,900",ap:"₹ 11,02,750"},{bucket:"31–60 days",ar:"₹ 19,11,420",ap:"₹ 13,44,970"},{bucket:"61–90 days",ar:"₹ 7,40,120",ap:"₹ 6,78,000"},{bucket:"90+ days",ar:"₹ 1,38,770",ap:"₹ 1,86,000"}],H=[{name:"GST Output",amount:"₹ 12,18,320",route:"/finance/taxes"},{name:"GST Input",amount:"₹ 9,45,150",route:"/finance/taxes"},{name:"Net GST Payable",amount:"₹ 2,73,170",route:"/finance/gst-returns"}],q=[{label:"Balance Sheet",to:"/finance/balance-sheet"},{label:"Profit & Loss",to:"/finance/profit-loss"},{label:"Trial Balance",to:"/finance/trial-balance"},{label:"Ledgers",to:"/finance/ledgers"},{label:"Journal Vouchers",to:"/finance/journals"},{label:"Taxes",to:"/finance/taxes"},{label:"GST Returns",to:"/finance/gst-returns"},{label:"Invoices",to:"/invoices"},{label:"Payments",to:"/sales/payments"},{label:"Purchase Orders",to:"/purchase-orders"}],X=()=>{const[c,d]=g.useState(!1),N=g.useMemo(()=>x(y),[]),k=g.useMemo(()=>x(I),[]),w=()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),0)}};return e.jsxs(R,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(C,{children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(j,{to:"/home",children:"Home"}),e.jsx(u,{"aria-hidden":!0}),e.jsx(j,{to:"/reports",children:"Reports"}),e.jsx(u,{"aria-hidden":!0}),e.jsx("span",{children:"Finance"})]}),e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{className:"titleBlock",children:[e.jsx("h1",{children:"Finance Overview"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Build: ",N]}),e.jsxs("span",{children:["Commit: ",k]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{onClick:()=>d(!0),title:"Export (demo)",children:[e.jsx(f,{})," Export"]}),e.jsxs("button",{onClick:w,title:"Print current section",children:[e.jsx(L,{})," Print"]}),e.jsxs(s,{to:"/finance/ledgers",className:"ghost",children:[e.jsx(h,{})," Ledgers"]}),e.jsxs(s,{to:"/finance/journals",className:"ghost",children:[e.jsx(h,{})," Journals"]})]})]})]}),e.jsxs("section",{id:"search-print-area",children:[e.jsx(A,{children:z.map(r=>e.jsxs(s,{to:r.href,className:"kpi",children:[e.jsx("div",{className:"label",children:r.label}),e.jsxs("div",{className:"value",children:[r.value," ",e.jsx(T,{className:"trend","aria-hidden":!0})]}),e.jsx("div",{className:"delta",children:r.delta}),e.jsx("svg",{className:"spark",width:"100%",height:"36",viewBox:"0 0 120 36",preserveAspectRatio:"none","aria-hidden":!0,children:e.jsx("polyline",{fill:"none",stroke:"currentColor",strokeWidth:"2",points:"0,20 12,22 24,18 36,24 48,16 60,14 72,18 84,12 96,16 108,10 120,14"})})]},r.label))}),e.jsxs(v,{children:[e.jsxs(p,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Top Accounts by Balance"}),e.jsx(s,{to:"/finance/ledgers",children:"View All"})]}),e.jsxs(b,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Code"}),e.jsx("th",{children:"Account"}),e.jsx("th",{className:"right",children:"Balance"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:F.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{to:r.route,children:r.code})}),e.jsx("td",{children:r.name}),e.jsx("td",{className:"right",children:r.balance}),e.jsx("td",{className:"right",children:e.jsxs(s,{to:r.route,className:"inlineLink",children:["Open ",e.jsx(h,{})]})})]},r.code))})]}),e.jsxs("div",{className:"footLinks",children:[e.jsx(s,{to:"/finance/balance-sheet",children:"Go to Balance Sheet"}),e.jsx(s,{to:"/finance/profit-loss",children:"Open Profit & Loss"}),e.jsx(s,{to:"/finance/trial-balance",children:"Trial Balance"})]})]}),e.jsxs(p,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Recent Journal Vouchers"}),e.jsx(s,{to:"/finance/journals",children:"View All"})]}),e.jsxs(b,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"JV No."}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Description"}),e.jsx("th",{className:"right",children:"Debit"}),e.jsx("th",{className:"right",children:"Credit"})]})}),e.jsx("tbody",{children:M.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{to:r.link,children:r.id})}),e.jsxs("td",{children:[e.jsx("div",{children:D(r.date)}),e.jsx("small",{className:"muted",children:J(r.date)})]}),e.jsx("td",{children:r.desc}),e.jsx("td",{className:"right",children:r.debit}),e.jsx("td",{className:"right",children:r.credit})]},r.id))})]}),e.jsxs("div",{className:"footLinks",children:[e.jsx(s,{to:"/reports/finance",children:"Finance Report"}),e.jsx(s,{to:"/reports/sales",children:"Sales Report"}),e.jsx(s,{to:"/reports/inventory",children:"Inventory Report"})]})]})]}),e.jsxs(v,{children:[e.jsxs(p,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Receivables / Payables Aging"}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"chip",children:"AR"}),e.jsx("span",{className:"chip",children:"AP"})]})]}),e.jsxs(b,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Bucket"}),e.jsx("th",{className:"right",children:"AR"}),e.jsx("th",{className:"right",children:"AP"})]})}),e.jsx("tbody",{children:E.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.bucket}),e.jsx("td",{className:"right",children:r.ar}),e.jsx("td",{className:"right",children:r.ap})]},r.bucket))})]}),e.jsxs("div",{className:"footLinks",children:[e.jsx(s,{to:"/finance/ledgers/GL-1200",children:"Accounts Receivable (GL-1200)"}),e.jsx(s,{to:"/finance/ledgers/GL-2100",children:"Accounts Payable (GL-2100)"})]})]}),e.jsxs(p,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Tax Summary"}),e.jsx(s,{to:"/finance/taxes",children:"Open Taxes"})]}),e.jsx("div",{className:"taxGrid",children:H.map(r=>e.jsxs(s,{to:r.route,className:"tax",children:[e.jsx("div",{className:"name",children:r.name}),e.jsx("div",{className:"amt",children:r.amount})]},r.name))}),e.jsxs("div",{className:"footLinks",children:[e.jsx(s,{to:"/finance/gst-returns",children:"GST Returns"}),e.jsx(s,{to:"/reports/gst",children:"GST Report"})]})]})]}),e.jsx(S,{children:q.map(r=>e.jsxs(s,{to:r.to,className:"q",children:[e.jsx("span",{children:r.label}),e.jsx(u,{"aria-hidden":!0})]},r.label))}),e.jsxs(p,{children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Recent Finance Activity"}),e.jsx(s,{to:"/admin/audit-log",children:"Open Audit Log"})]}),e.jsxs(V,{children:[e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"when",children:x("2025-10-04T11:35:20+05:30")}),e.jsxs("div",{className:"what",children:["Customer payment recorded for ",e.jsx(s,{to:"/invoices/INV-2031",children:"INV-2031"})," via ",e.jsx(s,{to:"/finance/ledgers/GL-1002",children:"Bank - Current A/C"}),"."]})]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"when",children:x("2025-10-03T19:02:10+05:30")}),e.jsxs("div",{className:"what",children:["Journal adjustment posted ",e.jsx(s,{to:"/finance/journals/JV-10230",children:"JV-10230"})," (bank charges)."]})]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"when",children:x("2025-10-03T10:55:42+05:30")}),e.jsxs("div",{className:"what",children:["Vendor bill linked to ",e.jsx(s,{to:"/purchase-orders/PO-5507",children:"PO-5507"})," and ",e.jsx(s,{to:"/invoices/INV-2077",children:"INV-2077"}),"."]})]})]})]})]})]}),e.jsxs(O,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{children:"Report refreshed:"}),e.jsx("strong",{children:x(y)})]}),e.jsxs("div",{className:"right",children:[e.jsx(s,{to:"/reports",children:"All Reports"}),e.jsx(s,{to:"/reports/customers",children:"Customer Report"}),e.jsx(s,{to:"/reports/inventory",children:"Inventory Report"}),e.jsx(s,{to:"/reports/procurement",children:"Procurement"})]})]}),c&&e.jsx(P,{role:"dialog","aria-modal":"true","aria-labelledby":"exportTitle",children:e.jsxs(B,{children:[e.jsxs("header",{children:[e.jsxs("h3",{id:"exportTitle",children:[e.jsx(f,{})," Export Finance Report"]}),e.jsx("button",{className:"icon",onClick:()=>d(!1),"aria-label":"Close",children:"✕"})]}),e.jsxs("div",{className:"content",children:[e.jsx("p",{children:"This is a display-only demo. You can still choose an export type to preview the flow."}),e.jsxs("div",{className:"options",children:[e.jsxs("label",{className:"opt",children:[e.jsx("input",{type:"radio",name:"ex",defaultChecked:!0})," CSV"]}),e.jsxs("label",{className:"opt",children:[e.jsx("input",{type:"radio",name:"ex"})," PDF"]}),e.jsxs("label",{className:"opt",children:[e.jsx("input",{type:"radio",name:"ex"})," XLSX"]}),e.jsxs("label",{className:"opt",children:[e.jsx("input",{type:"radio",name:"ex"})," JSON"]})]}),e.jsxs("div",{className:"share",children:[e.jsxs("button",{className:"ghost",children:[e.jsx(G,{})," Copy Link"]}),e.jsxs("button",{className:"ghost",children:[e.jsx(h,{})," Open Reports"]})]})]}),e.jsx("footer",{children:e.jsx("button",{onClick:()=>d(!1),children:"Done"})})]})})]})};export{X as default};
