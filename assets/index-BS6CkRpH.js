import{d as x,u as P,r as N,j as e,N as m,e as R,v as O,J as q,n as B,w as A}from"./index-B_b4CsLB.js";const b="var(--text, #f3f4f6)",r="var(--muted, #a0a0a7)",p="var(--card, #111318)",n="var(--border, #23262d)",o="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",d={Page:x.div`
        width: 100%;
        color: ${b};
    `,Header:x.header`
        padding: 14px 4px 10px;

        .topline {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${r};
            .crumb {
                color: ${r};
            }
            .crumb:hover {
                color: ${o};
            }
            .sep {
                opacity: 0.5;
            }
            .here {
                color: ${b};
                font-weight: 600;
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                border: 1px solid ${n};
                background: ${p};
                color: ${b};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
                transition: border-color 0.2s ease, box-shadow 0.2s ease,
                    color 0.2s ease, background 0.2s ease;
            }
            button:hover {
                border-color: ${o};
                color: ${o};
                box-shadow: 0 0 0 3px ${D};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                box-shadow: none;
            }
        }

        .titleRow {
            margin-top: 10px;
            padding: 8px 0;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: end;
            h1 {
                font-size: 26px;
                letter-spacing: 0.5px;
            }
            .meta {
                color: ${r};
                display: flex;
                align-items: center;
                gap: 6px;
                margin-top: 4px;
            }
            .period {
                display: grid;
                gap: 8px;
                align-items: center;
                justify-items: end;
                .range {
                    color: ${r};
                    display: flex;
                    gap: 8px;
                }
                .quick {
                    display: flex;
                    gap: 8px;
                }
                .quick button {
                    border: 1px solid ${n};
                    background: ${p};
                    color: ${r};
                    padding: 6px 10px;
                    border-radius: 6px;
                }
                .quick button:hover {
                    border-color: ${o};
                    color: ${o};
                }
            }
        }
    `,Kpis:x.div`
        padding: 8px 0 12px;
        display: grid;
        grid-template-columns: repeat(4, minmax(180px, 1fr));
        gap: 12px;

        .kpi {
            border: 1px solid ${n};
            border-radius: 12px;
            background: ${p};
            display: grid;
            gap: 6px;
            .label {
                color: ${r};
                font-weight: 600;
            }
            .value {
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 0.3px;
            }
        }

        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, minmax(180px, 1fr));
        }
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,Content:x.div`
        display: grid;
        grid-template-columns: 1fr 340px;
        gap: 14px;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        .left {
            min-width: 0;
        }
        .right {
            position: relative;
            min-width: 280px;
        }
    `,Statement:x.div`
        border: 1px solid ${n};
        border-radius: 12px;
        background: ${p};
        padding: 14px;

        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            h2 {
                font-size: 18px;
            }
            .head-actions {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                .ghost {
                    display: inline-flex;
                    gap: 6px;
                    align-items: center;
                    padding: 6px 10px;
                    border-radius: 8px;
                    border: 1px dashed ${n};
                    color: ${r};
                }
                .ghost:hover {
                    border-color: ${o};
                    color: ${o};
                }
            }
        }

        .section {
            margin-top: 12px;
            h3 {
                margin-bottom: 8px;
            }
            details {
                border: 1px solid ${n};
                border-radius: 10px;
                margin-bottom: 10px;
                overflow: hidden;
                summary {
                    cursor: pointer;
                    padding: 10px 12px;
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.08);
                }
                .total {
                    color: ${b};
                    font-weight: 700;
                }
                .tableWrap {
                    overflow: auto;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 13px;
                }
                thead th {
                    text-align: left;
                    border-bottom: 1px solid ${n};
                    color: ${o};
                    padding: 10px 12px;
                    background: ${p};
                    position: sticky;
                    top: 0;
                    z-index: 1;
                }
                tbody td {
                    border-bottom: 1px solid ${n};
                    padding: 10px 12px;
                }
                tbody tr:hover td {
                    background: rgba(0, 0, 0, 0.06);
                }
                .num {
                    text-align: right;
                }
            }
        }

        .footerTotals {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(220px, 1fr));
            gap: 10px;
            .tot {
                border: 1px solid ${n};
                border-radius: 10px;
                padding: 10px 12px;
                display: flex;
                justify-content: space-between;
                span {
                    color: ${r};
                }
                strong {
                    font-weight: 700;
                }
            }
            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
        }
    `,SideCard:x.aside`
        border: 1px solid ${n};
        border-radius: 12px;
        background: ${p};
        padding: 14px;
        margin-bottom: 14px;

        h3 {
            margin-bottom: 8px;
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        a {
            color: ${b};
        }
        a:hover {
            color: ${o};
        }

        .note {
            color: ${r};
            border-left: 3px solid ${n};
            padding: 8px 10px;
            border-radius: 8px;
            background: rgba(0, 0, 0, 0.05);
            margin-bottom: 8px;
        }

        .meta {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 6px;
            .label {
                color: ${r};
            }
            .value {
                color: ${b};
                font-weight: 600;
            }
        }

        .controls {
            display: grid;
            gap: 8px;
            button {
                border: 1px solid ${n};
                background: ${p};
                color: ${b};
                padding: 8px 10px;
                border-radius: 8px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${o};
                color: ${o};
                box-shadow: 0 0 0 3px ${D};
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                box-shadow: none;
            }
        }
    `,ModalBackdrop:x.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.45);
        display: grid;
        place-items: center;
        z-index: 50;
    `,ModalCard:x.div`
        width: min(520px, 92vw);
        border: 1px solid ${n};
        background: ${p};
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        padding: 14px;

        header {
            margin-bottom: 10px;
        }
        h3 {
            margin: 0;
        }
        section {
            color: ${r};
        }
        footer {
            margin-top: 14px;
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            button {
                border: 1px solid ${n};
                background: ${p};
                color: ${b};
                padding: 8px 12px;
                border-radius: 8px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${o};
                color: ${o};
            }
            .danger {
                border-color: ${n};
            }
        }
    `},F=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],z=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function f(s){return s<10?`0${s}`:`${s}`}function k(s){const i=s instanceof Date?s:new Date(s);return`${F[i.getDay()]} ${z[i.getMonth()]} ${f(i.getDate())} ${i.getFullYear()}`}function T(s){const i=s instanceof Date?s:new Date(s);return`${f(i.getHours())}:${f(i.getMinutes())}:${f(i.getSeconds())}hrs`}function L(s){const i=s instanceof Date?s:new Date(s);return`${k(i)} ${T(i)}`}const l={period:{asOf:new Date,start:"2025-04-01T00:00:00+05:30",end:"2025-10-05T00:00:00+05:30",fy:"FY 2025-26"},kpis:[{key:"assets",label:"Total Assets",value:"₹ 12,48,20,000"},{key:"liabilities",label:"Total Liabilities",value:"₹ 7,31,90,000"},{key:"equity",label:"Equity",value:"₹ 5,16,30,000"},{key:"working",label:"Working Capital",value:"₹ 3,84,75,000"}],statement:{assets:[{group:"Current Assets",rows:[{code:"CA-101",name:"Cash & Cash Equivalents",balance:"₹ 1,48,50,000"},{code:"CA-102",name:"Accounts Receivable",balance:"₹ 2,31,70,000",link:"/finance/ledgers/AR"},{code:"CA-103",name:"Inventory",balance:"₹ 3,02,40,000",link:"/inventory"},{code:"CA-104",name:"Short-term Investments",balance:"₹ 74,60,000"}],total:"₹ 7,57,20,000"},{group:"Non-Current Assets",rows:[{code:"NCA-201",name:"Property, Plant & Equipment",balance:"₹ 3,84,00,000",link:"/manufacturing"},{code:"NCA-202",name:"Intangible Assets",balance:"₹ 72,00,000"},{code:"NCA-203",name:"Deferred Tax Assets",balance:"₹ 35,00,000"}],total:"₹ 4,91,00,000"}],liabilitiesEquity:[{group:"Current Liabilities",rows:[{code:"CL-301",name:"Accounts Payable",balance:"₹ 2,12,30,000",link:"/finance/ledgers/AP"},{code:"CL-302",name:"GST Payable",balance:"₹ 58,60,000",link:"/finance/gst-returns"},{code:"CL-303",name:"Short-term Borrowings",balance:"₹ 1,26,50,000"}],total:"₹ 3,97,40,000"},{group:"Non-Current Liabilities",rows:[{code:"NCL-401",name:"Long-term Borrowings",balance:"₹ 3,34,50,000"}],total:"₹ 3,34,50,000"},{group:"Equity",rows:[{code:"EQ-501",name:"Share Capital",balance:"₹ 3,00,00,000"},{code:"EQ-502",name:"Reserves & Surplus",balance:"₹ 2,16,30,000",link:"/finance/ledgers/RES"}],total:"₹ 5,16,30,000"}],totals:{assets:"₹ 12,48,20,000",liabilitiesEquity:"₹ 12,48,20,000"}},quickLinks:[{label:"Chart of Accounts",to:"/finance/chart-of-accounts"},{label:"Ledgers",to:"/finance/ledgers"},{label:"Journals",to:"/finance/journals"},{label:"Profit & Loss",to:"/finance/profit-loss"},{label:"Trial Balance",to:"/finance/trial-balance"},{label:"GST Returns",to:"/finance/gst-returns"},{label:"Invoices",to:"/invoices"},{label:"Receipts",to:"/receipts"},{label:"Reports: Finance",to:"/reports/finance"}]};function I({open:s,title:i,body:g,confirmText:j="Confirm",onConfirm:y,onClose:v}){return s?e.jsx(d.ModalBackdrop,{role:"dialog","aria-modal":"true",children:e.jsxs(d.ModalCard,{className:"card",children:[e.jsx("header",{children:e.jsx("h3",{children:i})}),e.jsx("section",{children:e.jsx("p",{children:g})}),e.jsxs("footer",{children:[e.jsx("button",{onClick:v,"aria-label":"Cancel",children:"Cancel"}),e.jsx("button",{onClick:y,"aria-label":j,className:"danger",children:j})]})]})}):null}function K(){P();const[s,i]=N.useState({open:!1,type:null}),g=N.useMemo(()=>new Date,[]),j=`${k(l.period.start)} — ${k(l.period.end)}`,y=L(l.period.asOf),v=()=>{const a=document.body;a.classList.add("print-section-mode"),window.print(),setTimeout(()=>a.classList.remove("print-section-mode"),250)},E=()=>{const t=[["Section","Code","Name","Balance"],...l.statement.assets.flatMap(u=>u.rows.map(c=>["Assets",c.code,c.name,c.balance])),...l.statement.liabilitiesEquity.flatMap(u=>u.rows.map(c=>["Liabilities/Equity",c.code,c.name,c.balance]))].map(u=>u.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(",")).join(`
`),M=new Blob([t],{type:"text/csv;charset=utf-8"}),S=URL.createObjectURL(M),h=document.createElement("a");h.href=S,h.download=`balance-sheet-${new Date().toISOString().slice(0,10)}.csv`,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(S)},$=a=>i({open:!0,type:a}),C=()=>i({open:!1,type:null}),w=N.useMemo(()=>{if(!s.open)return{title:"",body:""};switch(s.type){case"close-period":return{title:"Close Period",body:"This is a display-only theme. Period close is disabled in demo.",btn:"OK"};case"adjustments":return{title:"Post Adjustments",body:"Journal adjustments are disabled in demo.",btn:"OK"};default:return{title:"Action Disabled",body:"Not available in demo.",btn:"OK"}}},[s]);return e.jsxs(d.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(d.Header,{children:[e.jsxs("div",{className:"topline",children:[e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(m,{to:"/home",className:"crumb",end:!0,children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx(m,{to:"/finance",className:"crumb",end:!0,children:"Finance"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"here",children:"Balance Sheet"})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{onClick:v,title:"Print section",children:[e.jsx(R,{size:18})," ",e.jsx("span",{children:"Print"})]}),e.jsxs("button",{onClick:E,title:"Export CSV",children:[e.jsx(O,{size:18})," ",e.jsx("span",{children:"Export"})]}),e.jsxs("button",{onClick:()=>$("close-period"),title:"Close period (disabled)",children:[e.jsx(q,{size:18})," ",e.jsx("span",{children:"Close Period"})]})]})]}),e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Balance Sheet"}),e.jsxs("p",{className:"meta",children:[e.jsx(B,{size:16,"aria-hidden":"true"}),e.jsxs("span",{children:[" As of ",y," • ",l.period.fy]})]})]}),e.jsxs("div",{className:"period",children:[e.jsxs("div",{className:"range",children:[e.jsx("span",{children:"Period:"}),e.jsx("strong",{children:j})]}),e.jsxs("div",{className:"quick",children:[e.jsx("button",{disabled:!0,title:"Demo only",children:"This FY"}),e.jsx("button",{disabled:!0,title:"Demo only",children:"This Quarter"}),e.jsx("button",{disabled:!0,title:"Demo only",children:"This Month"})]})]})]})]}),e.jsxs("section",{id:"search-print-area",children:[e.jsx(d.Kpis,{children:l.kpis.map(a=>e.jsxs("div",{className:"kpi card",role:"article","aria-label":a.label,children:[e.jsx("div",{className:"label",children:a.label}),e.jsx("div",{className:"value",children:a.value})]},a.key))}),e.jsxs(d.Content,{children:[e.jsx("div",{className:"left",children:e.jsxs(d.Statement,{className:"card",children:[e.jsxs("div",{className:"head",children:[e.jsx("h2",{children:"Statement"}),e.jsxs("div",{className:"head-actions",children:[e.jsxs(m,{to:"/finance/trial-balance",className:"ghost",title:"Open Trial Balance",children:["Open Trial Balance ",e.jsx(A,{size:16})]}),e.jsxs(m,{to:"/reports/finance",className:"ghost",title:"Finance Reports",children:["Finance Reports ",e.jsx(A,{size:16})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Assets"}),l.statement.assets.map(a=>e.jsxs("details",{open:!0,children:[e.jsxs("summary",{children:[a.group," ",e.jsx("span",{className:"total",children:a.total})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{role:"table","aria-label":`${a.group} table`,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"120px"},children:"Code"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:"180px"},className:"num",children:"Balance"})]})}),e.jsx("tbody",{children:a.rows.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.code}),e.jsx("td",{children:t.link?e.jsx(m,{to:t.link,title:"Open link",children:t.name}):t.name}),e.jsx("td",{className:"num",children:t.balance})]},t.code))})]})})]},a.group))]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Liabilities & Equity"}),l.statement.liabilitiesEquity.map(a=>e.jsxs("details",{open:!0,children:[e.jsxs("summary",{children:[a.group," ",e.jsx("span",{className:"total",children:a.total})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{role:"table","aria-label":`${a.group} table`,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"120px"},children:"Code"}),e.jsx("th",{children:"Name"}),e.jsx("th",{style:{width:"180px"},className:"num",children:"Balance"})]})}),e.jsx("tbody",{children:a.rows.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.code}),e.jsx("td",{children:t.link?e.jsx(m,{to:t.link,title:"Open link",children:t.name}):t.name}),e.jsx("td",{className:"num",children:t.balance})]},t.code))})]})})]},a.group))]}),e.jsxs("div",{className:"footerTotals",children:[e.jsxs("div",{className:"tot",children:[e.jsx("span",{children:"Assets Total"}),e.jsx("strong",{children:l.statement.totals.assets})]}),e.jsxs("div",{className:"tot",children:[e.jsx("span",{children:"Liabilities + Equity"}),e.jsx("strong",{children:l.statement.totals.liabilitiesEquity})]})]})]})}),e.jsxs("aside",{className:"right",children:[e.jsxs(d.SideCard,{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsx("ul",{children:l.quickLinks.map(a=>e.jsx("li",{children:e.jsx(m,{to:a.to,title:`Go to ${a.label}`,children:a.label})},a.to))})]}),e.jsxs(d.SideCard,{className:"card",children:[e.jsx("h3",{children:"Notes"}),e.jsx("div",{className:"note",children:"Figures are for presentation only. For ledgers or vouchers, use the links above."}),e.jsxs("div",{className:"note",children:["To view receivables/payables aging, open"," ",e.jsx(m,{to:"/reports/finance",title:"Finance Reports",children:"Finance Reports"}),"."]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"label",children:"Generated"}),e.jsx("span",{className:"value",children:L(g)})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"label",children:"Time"}),e.jsx("span",{className:"value",children:T(g)})]})]}),e.jsxs(d.SideCard,{className:"card",children:[e.jsx("h3",{children:"Period Controls"}),e.jsxs("div",{className:"controls",children:[e.jsx("button",{disabled:!0,title:"Demo only",children:"Post Adjustments"}),e.jsx("button",{onClick:()=>$("adjustments"),title:"Disabled in demo",children:"Explain"}),e.jsx("button",{disabled:!0,title:"Demo only",children:"Re-run Consolidation"}),e.jsx("button",{onClick:()=>$("close-period"),title:"Disabled in demo",children:"Close Period"})]})]})]})]})]}),e.jsx(I,{open:s.open,title:w.title,body:w.body,confirmText:w.btn,onConfirm:C,onClose:C})]})}export{K as default};
