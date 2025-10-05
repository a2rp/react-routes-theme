import{d as $,j as e,N as a}from"./index-CTSbLEdo.js";const h="var(--bg, #0d1117)",o="var(--text, #f3f4f6)",i="var(--muted, #a0a0a7)",d="var(--card, #111318)",s="var(--border, #23262d)",r="var(--accent, #5aa9ff)",u="var(--accent-soft, rgba(90,169,255,0.15))",b="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",w={Wrap:$.div`
        color: ${o};
        width: 100%;
        padding: 16px;

        .header {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: end;
            margin-bottom: 16px;
        }
        .titleBlock h1 {
            font-size: 28px;
            line-height: 1.2;
            letter-spacing: 0.3px;
        }
        .titleBlock .meta {
            margin-top: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${i};
            font-size: 12px;
        }
        .chip {
            display: inline-flex;
            align-items: center;
            padding: 2px 8px;
            border: 1px solid ${s};
            border-radius: 999px;
            background: ${d};
        }
        .sep {
            opacity: 0.6;
        }

        .crumbs {
            display: inline-flex;
            gap: 6px;
            align-items: center;
            color: ${i};
            a {
                color: ${i};
            }
            a:hover {
                color: ${r};
            }
            .current {
                color: ${o};
            }
        }

        .toolbar {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            background: ${d};
            border: 1px solid ${s};
            border-radius: 12px;
            padding: 12px;
            box-shadow: ${b};
            margin-bottom: 16px;
        }

        .range {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: end;

            label {
                display: grid;
                gap: 6px;
                font-size: 12px;
                color: ${i};
            }
            input[type="date"] {
                height: 36px;
                background: ${h};
                border: 1px solid ${s};
                color: ${o};
                padding: 0 10px;
                border-radius: 8px;
            }
            .presets {
                display: inline-flex;
                gap: 8px;
                button {
                    height: 36px;
                    padding: 0 12px;
                    border: 1px solid ${s};
                    background: ${h};
                    color: ${i};
                    border-radius: 8px;
                    cursor: not-allowed;
                }
            }
        }

        .actions {
            display: inline-flex;
            gap: 8px;
            align-items: center;

            button,
            .btnLink {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 36px;
                padding: 0 14px;
                border: 1px solid ${s};
                background: ${h};
                color: ${o};
                border-radius: 8px;
                transition: border-color 0.2s, box-shadow 0.2s, color 0.2s,
                    background 0.2s;
            }
            button:hover,
            .btnLink:hover {
                color: ${r};
                border-color: ${r};
                box-shadow: 0 0 0 3px ${u};
            }
            .btnLink {
                text-decoration: none;
            }
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(7, minmax(180px, 1fr));
            gap: 12px;
            margin-bottom: 16px;
        }
        .card.kpi {
            background: ${d};
            border: 1px solid ${s};
            border-radius: 12px;
            padding: 12px;
            box-shadow: ${b};
            min-height: 100px;
            display: grid;
            align-content: space-between;
        }
        .kpiHead {
            font-size: 12px;
            color: ${i};
        }
        .kpiValue {
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            letter-spacing: 0.5px;
        }
        .kpiSub {
            color: ${i};
            font-size: 12px;
        }

        .pnlArea {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 12px;
            margin-bottom: 20px;
        }
        @media (max-width: 1200px) {
            .cards {
                grid-template-columns: repeat(3, minmax(180px, 1fr));
            }
            .pnlArea {
                grid-template-columns: 1fr;
            }
        }
        @media (max-width: 640px) {
            .cards {
                grid-template-columns: repeat(1, minmax(180px, 1fr));
            }
        }

        .panel {
            background: ${d};
            border: 1px solid ${s};
            border-radius: 12px;
            box-shadow: ${b};
            overflow: hidden;
        }
        .panelHead {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            padding: 12px 12px 8px 12px;
            border-bottom: 1px solid ${s};
            background: color-mix(in oklab, ${d} 94%, transparent);
        }
        .panelHead h2,
        .panelHead h3 {
            font-size: 16px;
            letter-spacing: 0.3px;
        }
        .panelMeta {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            color: ${i};
            font-size: 12px;
            strong {
                color: ${o};
            }
        }
        .panelLink {
            font-size: 12px;
            color: ${i};
            text-decoration: none;
            border: 1px solid ${s};
            padding: 4px 10px;
            border-radius: 8px;
        }
        .panelLink:hover {
            color: ${r};
            border-color: ${r};
        }

        .tableWrap {
            width: 100%;
            overflow: auto;
            padding: 12px;
        }
        .tableWrap.small {
            padding: 8px 12px 12px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 10px;
            color: ${r};
            position: sticky;
            top: 0;
            background: ${d};
            border-bottom: 1px solid ${s};
            z-index: 1;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${s};
        }
        .num {
            text-align: right;
        }

        tbody tr.hd td {
            color: ${o};
            font-weight: 600;
            background: color-mix(in oklab, ${d} 96%, transparent);
        }
        tbody tr.total td {
            font-weight: 600;
            border-top: 1px solid ${s};
            background: color-mix(in oklab, ${r} 8%, transparent);
        }
        tbody tr.calc td {
            font-weight: 600;
            color: ${o};
            background: color-mix(in oklab, ${r} 6%, transparent);
        }
        tbody tr.calcStrong td {
            font-weight: 700;
            background: color-mix(in oklab, ${r} 12%, transparent);
            border-top: 1px solid ${s};
            border-bottom: 1px solid ${s};
        }
        tbody tr.sp td {
            padding: 6px;
            border-bottom: none;
        }

        .legend {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px 14px;
            color: ${i};
            font-size: 12px;
            border-top: 1px solid ${s};
        }
        .legend .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: ${r};
            box-shadow: 0 0 0 3px ${u};
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        .quickNav {
            background: ${d};
            border: 1px solid ${s};
            border-radius: 12px;
            box-shadow: ${b};
            padding: 12px;
        }
        .qnHead {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chipLink {
            border: 1px solid ${s};
            background: ${h};
            color: ${o};
            padding: 6px 10px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 12px;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .chipLink:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${u};
        }
    `},p=n=>new Date(n).toDateString(),v=n=>{const c=new Date(n),m=c.toTimeString().slice(0,8);return`${c.toDateString()} ${m}hrs`},L=()=>{const n={from:"2025-10-01T00:00:00+05:30",to:"2025-10-04T23:59:59+05:30"},c="2025-10-05T18:29:08+05:30",m=[{key:"rev",label:"Revenue",value:"₹ 24,890,000",subtitle:"All streams"},{key:"cogs",label:"COGS",value:"₹ 14,320,000",subtitle:"Materials, freight"},{key:"gross",label:"Gross Profit",value:"₹ 10,570,000",subtitle:"Revenue − COGS"},{key:"opex",label:"Operating Expenses",value:"₹ 6,420,000",subtitle:"S&M, G&A, R&D"},{key:"opinc",label:"Operating Income",value:"₹ 4,150,000",subtitle:"Gross − Opex"},{key:"other",label:"Other Net",value:"₹ 310,000",subtitle:"Other income − expense"},{key:"net",label:"Net Profit",value:"₹ 4,460,000",subtitle:"Bottom line"}],g=[{type:"header",label:"Revenue"},{type:"row",label:"Product Sales",amount:"₹ 18,640,000"},{type:"row",label:"Service Revenue",amount:"₹ 6,250,000"},{type:"total",label:"Total Revenue",amount:"₹ 24,890,000"},{type:"spacer"},{type:"header",label:"Cost of Goods Sold (COGS)"},{type:"row",label:"Materials",amount:"₹ 11,200,000"},{type:"row",label:"Freight & Inbound",amount:"₹ 1,320,000"},{type:"row",label:"Duties & Taxes (non-credit)",amount:"₹ 1,800,000"},{type:"total",label:"Total COGS",amount:"₹ 14,320,000"},{type:"calc",label:"Gross Profit",amount:"₹ 10,570,000"},{type:"spacer"},{type:"header",label:"Operating Expenses"},{type:"row",label:"Sales & Marketing",amount:"₹ 2,780,000"},{type:"row",label:"General & Administrative",amount:"₹ 1,960,000"},{type:"row",label:"Research & Development",amount:"₹ 1,200,000"},{type:"row",label:"IT & Subscriptions",amount:"₹ 480,000"},{type:"row",label:"Rent & Utilities",amount:"₹ 0.00"},{type:"total",label:"Total Operating Expenses",amount:"₹ 6,420,000"},{type:"calc",label:"Operating Income",amount:"₹ 4,150,000"},{type:"spacer"},{type:"header",label:"Other Income / (Expense)"},{type:"row",label:"Interest Income",amount:"₹ 240,000"},{type:"row",label:"FX Gain / (Loss)",amount:"₹ 160,000"},{type:"row",label:"Other Adjustments",amount:"₹ 90,000"},{type:"total",label:"Net Other Income",amount:"₹ 490,000"},{type:"row",label:"Interest Expense",amount:"₹ (180,000)"},{type:"calc-strong",label:"Net Profit",amount:"₹ 4,460,000"}],j=[{seg:"B2B Enterprise",amt:"₹ 11,200,000",share:"45%"},{seg:"B2B SMB",amt:"₹ 7,040,000",share:"28%"},{seg:"Retail / D2C",amt:"₹ 4,480,000",share:"18%"},{seg:"Services",amt:"₹ 2,170,000",share:"9%"}],y=[{cat:"People (Salary, Bonus)",amt:"₹ 3,120,000"},{cat:"Marketing & Ads",amt:"₹ 1,080,000"},{cat:"IT / SaaS",amt:"₹ 480,000"},{cat:"Admin & Legal",amt:"₹ 1,020,000"},{cat:"Travel",amt:"₹ 720,000"}],N=()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>{document.body.classList.remove("print-section-mode")},150)},50)},k=()=>{const t={title:"Profit & Loss",period:{from:n.from,to:n.to,displayFrom:p(n.from),displayTo:p(n.to)},figures:{overviewKPIs:m,pnlRows:g,revBySegment:j,opexBreak:y},generatedAt:v(new Date().toISOString())},l=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),f=URL.createObjectURL(l),x=document.createElement("a");x.href=f,x.download=`profit-loss_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(x),x.click(),x.remove(),URL.revokeObjectURL(f)};return e.jsxs(w.Wrap,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"titleBlock",children:[e.jsx("h1",{children:"Profit & Loss"}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"chip",children:"Display Only"}),e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{children:["Period: ",p(n.from)," – ",p(n.to)]}),e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{children:["Last commit: ",v(c)]})]}),!c]})]}),e.jsxs("nav",{className:"crumbs","aria-label":"Breadcrumb",children:[e.jsx(a,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(a,{to:"/finance",children:"Finance"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Profit & Loss"})]})]}),e.jsxs("section",{className:"toolbar",children:[e.jsxs("div",{className:"range",children:[e.jsxs("label",{children:["From",e.jsx("input",{type:"date",disabled:!0,title:"Demo: controls are disabled"})]}),e.jsxs("label",{children:["To",e.jsx("input",{type:"date",disabled:!0,title:"Demo: controls are disabled"})]}),e.jsxs("div",{className:"presets","aria-label":"Quick ranges",children:[e.jsx("button",{disabled:!0,title:"Demo",children:"MTD"}),e.jsx("button",{disabled:!0,title:"Demo",children:"QTD"}),e.jsx("button",{disabled:!0,title:"Demo",children:"YTD"}),e.jsx("button",{disabled:!0,title:"Demo",children:"FY"})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:N,title:"Print this P&L view",children:"Print"}),e.jsx("button",{onClick:k,title:"Export JSON snapshot",children:"Export"}),e.jsx(a,{className:"btnLink",to:"/settings/print-templates",title:"Customize layouts",children:"Print Templates"}),e.jsx(a,{className:"btnLink",to:"/settings/currencies",title:"Currency settings",children:"Currencies"})]})]}),e.jsx("section",{className:"cards",children:m.map(t=>e.jsxs("div",{className:`card kpi ${t.key}`,children:[e.jsx("div",{className:"kpiHead",children:t.label}),e.jsx("div",{className:"kpiValue",children:t.value}),e.jsx("div",{className:"kpiSub",children:t.subtitle})]},t.key))}),e.jsxs("section",{id:"search-print-area",className:"pnlArea",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"panelHead",children:[e.jsx("h2",{children:"Statement"}),e.jsxs("div",{className:"panelMeta",children:[e.jsx("span",{children:"Period"}),e.jsxs("strong",{children:[p(n.from)," – ",p(n.to)]})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Line Item"}),e.jsx("th",{className:"num",children:"Amount"})]})}),e.jsx("tbody",{children:g.map((t,l)=>t.type==="spacer"?e.jsx("tr",{className:"sp",children:e.jsx("td",{colSpan:2})},`s-${l}`):t.type==="header"?e.jsx("tr",{className:"hd",children:e.jsx("td",{colSpan:2,children:t.label})},`h-${l}`):t.type==="total"?e.jsxs("tr",{className:"total",children:[e.jsx("td",{children:t.label}),e.jsx("td",{className:"num",children:t.amount})]},`t-${l}`):t.type==="calc"?e.jsxs("tr",{className:"calc",children:[e.jsx("td",{children:t.label}),e.jsx("td",{className:"num",children:t.amount})]},`c-${l}`):t.type==="calc-strong"?e.jsxs("tr",{className:"calcStrong",children:[e.jsx("td",{children:t.label}),e.jsx("td",{className:"num",children:t.amount})]},`cs-${l}`):e.jsxs("tr",{children:[e.jsx("td",{children:t.label}),e.jsx("td",{className:"num",children:t.amount})]},`r-${l}`))})]})})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"panelHead",children:[e.jsx("h3",{children:"Revenue by Segment"}),e.jsx(a,{to:"/reports/sales",className:"panelLink",title:"Open sales report",children:"Open Report"})]}),e.jsx("div",{className:"tableWrap small",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Segment"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{className:"num",children:"Share"})]})}),e.jsx("tbody",{children:j.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.seg}),e.jsx("td",{className:"num",children:t.amt}),e.jsx("td",{className:"num",children:t.share})]},t.seg))})]})}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Top segments by value"})]})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"panelHead",children:[e.jsx("h3",{children:"Operating Expenses (Breakdown)"}),e.jsx(a,{to:"/finance/ledgers",className:"panelLink",title:"View ledgers",children:"Ledgers"})]}),e.jsx("div",{className:"tableWrap small",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Category"}),e.jsx("th",{className:"num",children:"Amount"})]})}),e.jsx("tbody",{children:y.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.cat}),e.jsx("td",{className:"num",children:t.amt})]},t.cat))})]})}),e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Expense distribution"})]})]})]})]}),e.jsxs("section",{className:"quickNav",children:[e.jsx("div",{className:"qnHead",children:"Quick Navigation"}),e.jsxs("div",{className:"links",children:[e.jsx(a,{to:"/reports/finance",className:"chipLink",children:"Finance Reports"}),e.jsx(a,{to:"/finance/balance-sheet",className:"chipLink",children:"Balance Sheet"}),e.jsx(a,{to:"/finance/trial-balance",className:"chipLink",children:"Trial Balance"}),e.jsx(a,{to:"/finance/journals",className:"chipLink",children:"Journals"}),e.jsx(a,{to:"/finance/chart-of-accounts",className:"chipLink",children:"Chart of Accounts"}),e.jsx(a,{to:"/invoices",className:"chipLink",children:"Invoices"}),e.jsx(a,{to:"/receipts",className:"chipLink",children:"Receipts"}),e.jsx(a,{to:"/reports/sales",className:"chipLink",children:"Sales Report"}),e.jsx(a,{to:"/reports/inventory",className:"chipLink",children:"Inventory Report"}),e.jsx(a,{to:"/reports/gst",className:"chipLink",children:"GST Report"}),e.jsx(a,{to:"/settings/print-templates",className:"chipLink",children:"Print Templates"}),e.jsx(a,{to:"/tools/import-export",className:"chipLink",children:"Import / Export"})]})]})]})};export{L as default};
