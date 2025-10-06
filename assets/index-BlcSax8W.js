import{d as p,q as T,u as P,r as b,j as e,N as f}from"./index-CqBbF2bz.js";const m="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",j="var(--card, #111318)",l="var(--border, #23262d)",d="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",A="var(--radius, 16px)",o={Page:p.div`
        padding: 20px 0 64px;
        color: ${m};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${x};
            }
            .current {
                color: ${m};
            }
        }
    `,Header:p.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${x};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${l};
            background: ${j};
            color: ${m};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${w};
        }
        .btnGhost:hover {
            border-color: ${d};
            color: ${d};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnGhost[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Band:p.div`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 12px;
        padding: 14px 16px;
        margin-bottom: 16px;

        .item {
            padding: 10px 12px;
            border: 1px solid ${l};
            border-radius: 12px;
            background: ${j};
        }
        .k {
            color: ${x};
            font-size: 12px;
            margin-bottom: 4px;
        }
        .v {
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .s {
            font-size: 12px;
            margin-top: 2px;
        }
        .muted {
            color: ${x};
        }

        @media (max-width: 1180px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,Grid:p.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .filters {
            margin-bottom: 10px;
            .row {
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(5, minmax(120px, 1fr));
                align-items: end;
                @media (max-width: 1100px) {
                    grid-template-columns: 1fr 1fr;
                }
                label {
                    display: block;
                    color: ${x};
                    font-size: 12px;
                    margin-bottom: 6px;
                }
                .stretch {
                    grid-column: span 2;
                }
                .btns {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }
            }
        }

        .tableWrap {
            border: 1px solid ${l};
            border-radius: 12px;
            overflow: hidden;
            background: ${j};
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${j};
            border-bottom: 1px solid ${l};
            text-align: left;
            padding: 10px 12px;
            font-weight: 600;
            color: ${d};
        }
        tbody td {
            padding: 10px 12px;
            border-bottom: 1px solid ${l};
            vertical-align: top;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${d} 8%, transparent);
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
        .tdp .muted {
            color: ${x};
            font-size: 12px;
        }

        .recon.sub {
            margin-top: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .recon h3 {
            font-size: 14px;
            margin-bottom: 4px;
        }
        .recon .muted {
            color: ${x};
            font-size: 12px;
        }
    `,Side:p.aside``,Card:p.div``};o.Grid=p(o.Grid)`
    .side {
        display: grid;
        gap: 16px;
    }
    .kv {
        display: grid;
        gap: 8px;
    }
    .kv .k {
        color: ${x};
        width: 140px;
        display: inline-block;
    }
    .kv .v {
        color: ${m};
    }

    .chips {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .chip {
        border: 1px solid ${l};
        padding: 6px 10px;
        border-radius: 999px;
        background: color-mix(in oklab, ${d} 8%, transparent);
    }

    .files {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 8px;
    }
    .files a {
        color: ${m};
    }
    .files a:hover {
        color: ${d};
    }

    .inlineBtns {
        margin-top: 10px;
        display: flex;
        gap: 8px;
    }

    .timeline {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
    }
    .timeline li {
        display: grid;
        grid-template-columns: 16px 1fr;
        gap: 8px;
    }
    .timeline .dot {
        margin-top: 6px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${d};
        border: 1px solid ${l};
    }
`;o.Overlay=p.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.55);
    display: grid;
    place-items: center;
    z-index: 50;
`;o.Modal=p.div`
    width: min(520px, 92vw);
    border-radius: ${A};
    border: 1px solid ${l};
    background: ${j};
    color: ${m};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
    overflow: hidden;

    header {
        padding: 14px 16px;
        border-bottom: 1px solid ${l};
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
        border-top: 1px solid ${l};
    }

    .btnPrimary {
        border-radius: 8px;
        padding: 8px 14px;
        border: 1px solid ${l};
        background: ${j};
        color: ${m};
        font-weight: 600;
        transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
            transform 0.08s;
    }
    .btnPrimary:hover {
        border-color: ${d};
        color: ${d};
        box-shadow: 0 0 0 3px ${w};
    }
    .btnPrimary:active {
        transform: translateY(1px);
    }
`;const c=n=>{const r=n instanceof Date?n:new Date(n),t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=v=>String(v).padStart(2,"0");return`${t[r.getDay()]} ${s[r.getMonth()]} ${i(r.getDate())} ${r.getFullYear()}`},h=n=>{const r=n instanceof Date?n:new Date(n),t=s=>String(s).padStart(2,"0");return`${c(r)} ${t(r.getHours())}:${t(r.getMinutes())}:${t(r.getSeconds())}hrs`},R=n=>{const r=n instanceof Date?n:new Date(n),t=s=>String(s).padStart(2,"0");return`${t(r.getHours())}:${t(r.getMinutes())}:${t(r.getSeconds())}hrs`},F=()=>{const{accountId:n="LEDGER-1001"}=T(),r=P(),t=b.useRef(null),s=b.useMemo(()=>({id:n,code:"110101",name:"Cash in Hand",type:"Asset",currency:"INR",status:"Active",parent:{code:"1101",name:"Cash & Bank"},taxProfile:"Non-GST",openingBalance:"₹ 1,25,000.00 (Dr)",openingAsOn:"2025-04-01T00:00:00+05:30",createdAt:"2024-06-15T12:22:03+05:30",updatedAt:"2025-10-04T15:38:20+05:30",tags:["finance","current-asset","priority"]}),[n]),i=b.useMemo(()=>({periodLabel:"FY 2025-26",periodFrom:"2025-04-01T00:00:00+05:30",periodTo:"2026-03-31T23:59:59+05:30",broughtForward:"₹ 1,25,000.00 (Dr)",totalDebits:"₹ 9,40,000.00",totalCredits:"₹ 8,60,000.00",carriedForward:"₹ 2,05,000.00 (Dr)",lastReconciled:"2025-10-02T18:05:12+05:30"}),[]),v=b.useMemo(()=>[{id:"JV-4021",dt:"2025-10-01T10:15:21+05:30",ref:"Receipt #RCPT-1188",journal:"Receipt",description:"Cash received from CUST-1001 (part payment for INV-2031)",debit:"₹ 35,000.00",credit:"—",balanceAfter:"₹ 1,60,000.00 (Dr)"},{id:"JV-4022",dt:"2025-10-01T17:32:54+05:30",ref:"Payment #PMT-9042",journal:"Payment",description:"Cash deposited to bank (BOB A/c)",debit:"—",credit:"₹ 50,000.00",balanceAfter:"₹ 1,10,000.00 (Dr)"},{id:"JV-4023",dt:"2025-10-02T09:02:03+05:30",ref:"Expense #EXP-7713",journal:"Expense",description:"Courier charges (Petty cash)",debit:"₹ 1,200.00",credit:"—",balanceAfter:"₹ 1,11,200.00 (Dr)"},{id:"JV-4024",dt:"2025-10-02T13:48:37+05:30",ref:"Receipt #RCPT-1189",journal:"Receipt",description:"Cash received from CUST-1012",debit:"₹ 22,500.00",credit:"—",balanceAfter:"₹ 1,33,700.00 (Dr)"},{id:"JV-4025",dt:"2025-10-03T11:20:10+05:30",ref:"Contra #CN-3320",journal:"Contra",description:"Cash withdrawn from bank (operational float)",debit:"₹ 50,000.00",credit:"—",balanceAfter:"₹ 1,83,700.00 (Dr)"},{id:"JV-4026",dt:"2025-10-03T17:02:45+05:30",ref:"Payment #PMT-9046",journal:"Payment",description:"Advance to vendor VEND-2007",debit:"—",credit:"₹ 35,000.00",balanceAfter:"₹ 1,48,700.00 (Dr)"},{id:"JV-4027",dt:"2025-10-04T09:30:18+05:30",ref:"Expense #EXP-7725",journal:"Expense",description:"Stationery and printing",debit:"₹ 2,350.00",credit:"—",balanceAfter:"₹ 1,51,050.00 (Dr)"},{id:"JV-4028",dt:"2025-10-04T12:56:02+05:30",ref:"Receipt #RCPT-1191",journal:"Receipt",description:"Cash received from CUST-1020 (round-off)",debit:"₹ 650.00",credit:"—",balanceAfter:"₹ 1,51,700.00 (Dr)"},{id:"JV-4029",dt:"2025-10-04T15:38:20+05:30",ref:"Payment #PMT-9051",journal:"Payment",description:"Cash paid for housekeeping",debit:"—",credit:"₹ 2,700.00",balanceAfter:"₹ 1,49,000.00 (Dr)"}],[]),[N,g]=b.useState(""),k=()=>{t.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},D=()=>{const a={account:s,periodSummary:i,entries:v},C=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),y=URL.createObjectURL(C),u=document.createElement("a");u.href=y,u.download=`${s.code}-${s.name.replace(/\s+/g,"-").toLowerCase()}-ledger.json`,document.body.appendChild(u),u.click(),u.remove(),URL.revokeObjectURL(y)},$=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(f,{to:"/finance",children:"Finance"}),e.jsx("span",{children:"/"}),e.jsx(f,{to:"/finance/ledgers",children:"Ledgers"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.code})]});return e.jsxs(o.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(o.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:s.name}),$,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Code: ",s.code]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Type: ",s.type]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Status: ",s.status]})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",c(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",h(s.updatedAt)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>r("/finance/ledgers"),title:"Back to ledgers",children:"Back"}),e.jsx("button",{className:"btnPrimary",onClick:D,title:"Download JSON snapshot",children:"Export"}),e.jsx("button",{className:"btnPrimary",onClick:k,title:"Print this ledger",children:"Print"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo only",children:"New Journal"}),e.jsx("button",{className:"btnGhost",onClick:()=>g("Adjust opening balance is disabled in demo."),title:"Adjust opening balance",children:"Adjust OB"})]})]}),e.jsxs(o.Band,{className:"card",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Period"}),e.jsx("div",{className:"v",children:i.periodLabel}),e.jsxs("div",{className:"s",children:[c(i.periodFrom)," — ",c(i.periodTo)]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"B/F"}),e.jsx("div",{className:"v",children:i.broughtForward}),e.jsxs("div",{className:"s",children:["as on ",c(i.periodFrom)]})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Total Debits"}),e.jsx("div",{className:"v",children:i.totalDebits}),e.jsx("div",{className:"s muted",children:"receipts, contra, adjustments"})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"Total Credits"}),e.jsx("div",{className:"v",children:i.totalCredits}),e.jsx("div",{className:"s muted",children:"payments, contra, adjustments"})]}),e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"k",children:"C/F"}),e.jsx("div",{className:"v",children:i.carriedForward}),e.jsxs("div",{className:"s",children:["as of ",h(new Date)]})]})]}),e.jsxs(o.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsx("div",{className:"filters",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("label",{children:"From"}),e.jsx("input",{type:"date",disabled:!0,title:"Demo only",defaultValue:"2025-10-01"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"To"}),e.jsx("input",{type:"date",disabled:!0,title:"Demo only",defaultValue:"2025-10-04"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Show"}),e.jsxs("select",{disabled:!0,title:"Demo only",defaultValue:"all",children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"debits",children:"Only Debits"}),e.jsx("option",{value:"credits",children:"Only Credits"}),e.jsx("option",{value:"reconciled",children:"Reconciled"}),e.jsx("option",{value:"unreconciled",children:"Unreconciled"})]})]}),e.jsxs("div",{className:"stretch",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{placeholder:"Reference, description…",disabled:!0,title:"Demo only"})]}),e.jsxs("div",{className:"btns",children:[e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo only",children:"Apply"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo only",children:"Reset"})]})]})}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:170},children:"Date"}),e.jsx("th",{style:{width:160},children:"Ref"}),e.jsx("th",{style:{width:120},children:"Journal"}),e.jsx("th",{children:"Description"}),e.jsx("th",{className:"num",style:{width:140},children:"Debit"}),e.jsx("th",{className:"num",style:{width:140},children:"Credit"}),e.jsx("th",{className:"num",style:{width:200},children:"Balance"})]})}),e.jsx("tbody",{children:v.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"tdp",children:[e.jsx("div",{children:c(a.dt)}),e.jsx("div",{className:"muted",children:R(a.dt)})]})}),e.jsxs("td",{children:[e.jsx(f,{to:`/finance/journals/${a.id}`,title:"Open journal",children:a.id}),e.jsx("div",{className:"muted",children:a.ref})]}),e.jsx("td",{children:a.journal}),e.jsx("td",{children:a.description}),e.jsx("td",{className:"num",children:a.debit}),e.jsx("td",{className:"num",children:a.credit}),e.jsx("td",{className:"num",children:a.balanceAfter})]},a.id))})]})}),e.jsxs("div",{className:"recon card sub",children:[e.jsxs("div",{className:"left",children:[e.jsx("h3",{children:"Reconciliation"}),e.jsxs("div",{className:"muted",children:["Last reconciled on ",h(i.lastReconciled)]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo only",children:"Start Reconciliation"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo only",children:"Mark as Reconciled"})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Account"}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Code"}),e.jsx("span",{className:"v",children:s.code})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Type"}),e.jsx("span",{className:"v",children:s.type})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Parent"}),e.jsxs("span",{className:"v",children:[s.parent.code," — ",s.parent.name]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Currency"}),e.jsx("span",{className:"v",children:s.currency})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Tax Profile"}),e.jsx("span",{className:"v",children:s.taxProfile})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Opening Balance"}),e.jsx("span",{className:"v",children:s.openingBalance})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Opening as on"}),e.jsx("span",{className:"v",children:c(s.openingAsOn)})]})]}),e.jsx("div",{className:"chips",children:s.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Attachments"}),e.jsxs("ul",{className:"files",children:[e.jsxs("li",{children:[e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),title:"Demo",children:"cash-counter-audit.pdf"}),e.jsxs("span",{className:"muted",children:[" • ",c("2025-10-03T14:11:00+05:30")]})]}),e.jsxs("li",{children:[e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),title:"Demo",children:"petty-cash-vouchers.zip"}),e.jsxs("span",{className:"muted",children:[" • ",c("2025-10-02T10:44:00+05:30")]})]}),e.jsxs("li",{children:[e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),title:"Demo",children:"recon-oct-week1.csv"}),e.jsxs("span",{className:"muted",children:[" • ",c("2025-10-01T18:05:00+05:30")]})]})]}),e.jsxs("div",{className:"inlineBtns",children:[e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo only",children:"Upload"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo only",children:"Remove"})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:t,children:[e.jsx("h3",{children:"Print Snapshot"}),e.jsxs("div",{className:"printKVs",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Account"}),e.jsx("span",{className:"v",children:s.name})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Code"}),e.jsx("span",{className:"v",children:s.code})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Type"}),e.jsx("span",{className:"v",children:s.type})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Period"}),e.jsx("span",{className:"v",children:i.periodLabel})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"B/F"}),e.jsx("span",{className:"v",children:i.broughtForward})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Debits"}),e.jsx("span",{className:"v",children:i.totalDebits})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Credits"}),e.jsx("span",{className:"v",children:i.totalCredits})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"C/F"}),e.jsx("span",{className:"v",children:i.carriedForward})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"k",children:"Printed"}),e.jsx("span",{className:"v",children:h(new Date)})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Opening balance updated"}),e.jsx("div",{className:"muted",children:h("2025-10-01T09:00:00+05:30")})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Attachment added (cash-counter-audit.pdf)"}),e.jsx("div",{className:"muted",children:h("2025-10-03T14:11:00+05:30")})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Reconciled through Oct Week 1"}),e.jsx("div",{className:"muted",children:h(i.lastReconciled)})]})]})]})]})]})]}),N?e.jsx(o.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:()=>g(""),children:e.jsxs(o.Modal,{className:"card",onMouseDown:a=>a.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:"Demo"})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:N})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:()=>g(""),children:"OK"})})]})}):null]})};export{F as default};
