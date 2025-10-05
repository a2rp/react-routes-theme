import{d as p,r as y,j as e,N as x,R as P}from"./index-B_KzNciT.js";const i="var(--text, #f3f4f6)",m="var(--muted, #a0a0a7)",h="var(--card, #111318)",n="var(--border, #23262d)",a="var(--accent, #5aa9ff)",k="var(--accent-soft, rgba(90,169,255,0.15))",I="var(--danger, #ef4444)",S="var(--radius, 16px)",u={Page:p.div`
        padding: 24px 0 64px;
        color: ${i};
    `,Header:p.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 14px;

        .lh h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            display: flex;
            gap: 8px;
            color: ${m};
            margin-top: 6px;
            font-size: 12px;
        }
        .meta strong {
            color: ${i};
        }

        .rh {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${h};
            color: ${i};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Toolbar:p.section`
        padding: 12px 14px;
        margin-bottom: 14px;

        .row {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 1100px) {
            .row {
                grid-template-columns: 1.6fr repeat(5, 1fr) auto;
                align-items: end;
            }
        }

        .field {
            display: grid;
            gap: 6px;
        }
        .field.grow {
            width: 100%;
        }

        .buttons {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${n};
            background: ${h};
            color: ${i};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnPrimary:disabled,
        .btnGhost:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid ${n};
            border-radius: 999px;
            padding: 6px 10px;
            background: color-mix(in oklab, ${a} 8%, transparent);
        }
    `,Kpis:p.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: repeat(4, 1fr);
        }

        .kpi {
            padding: 16px;
        }
        .k {
            color: ${m};
            font-size: 12px;
        }
        .v {
            font-size: 20px;
            margin-top: 4px;
        }
        .s {
            color: ${m};
            margin-top: 6px;
            font-size: 12px;
        }
    `,TableCard:p.section`
        margin-top: 14px;
        padding-top: 6px;
        overflow: hidden;

        .tableHeader,
        .tableFooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
        }
        .tableHeader .left {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .tableHeader .muted {
            color: ${m};
            font-size: 12px;
        }

        .right {
            display: flex;
            gap: 8px;
        }
        .btnGhost {
            border-radius: 8px;
            padding: 6px 10px;
            border: 1px solid ${n};
            background: ${h};
            color: ${i};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }
        .btnGhost:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .tableScroll {
            overflow: auto;
            border-top: 1px solid ${n};
            border-bottom: 1px solid ${n};
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            background: ${h};
            z-index: 1;
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid ${n};
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${n};
            vertical-align: middle;
        }
        tbody tr {
            transition: background 0.2s;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.08);
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        .num {
            text-align: right;
        }

        .status {
            padding: 4px 8px;
            border-radius: 999px;
            font-weight: 600;
            border: 1px solid ${n};
            background: color-mix(in oklab, ${a} 10%, transparent);
        }
        .status.refunded {
            background: color-mix(in oklab, ${I} 12%, transparent);
            color: ${i};
        }
        .status.failed {
            background: color-mix(in oklab, ${I} 18%, transparent);
            color: ${i};
        }
        .status.pending {
            background: color-mix(in oklab, ${a} 6%, transparent);
        }
        .status.partial {
            background: color-mix(in oklab, ${a} 14%, transparent);
        }
        .status.received {
            background: color-mix(in oklab, ${a} 18%, transparent);
        }

        .actions {
            white-space: nowrap;
        }
    `,PrintCard:p.section`
        margin-top: 14px;
        padding: 14px;
        header {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        header .meta {
            color: ${m};
            font-size: 12px;
        }

        .grid {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 900px) {
            .grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        .k {
            color: ${m};
            font-size: 12px;
        }
        .v {
            font-size: 18px;
            margin-top: 4px;
        }
    `,Drawer:p.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: stretch;
        z-index: 60;

        .panel {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: min(560px, 92vw);
            border-left: 1px solid ${n};
            background: ${h};
            color: ${i};
            box-shadow: -20px 0 60px rgba(0, 0, 0, 0.35);
            overflow: auto;
            padding: 0;
            border-top-left-radius: ${S};
            border-bottom-left-radius: ${S};
        }

        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            padding: 12px 14px;
            border-bottom: 1px solid ${n};
        }
        .head h3 {
            font-size: 18px;
        }

        .body {
            padding: 14px;
        }
        .cols {
            display: grid;
            gap: 12px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 920px) {
            .cols {
                grid-template-columns: 1.3fr 0.7fr;
            }
        }

        .line {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 8px 0;
            border-bottom: 1px dashed ${n};
        }
        .line .k {
            color: ${m};
        }
        .line .v {
            color: ${i};
        }

        .card.tiny {
            padding: 12px;
        }
        .cap {
            color: ${m};
            font-size: 12px;
            margin-bottom: 8px;
        }
        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 6px;
        }
        .links a {
            color: ${i};
            border: 1px solid ${n};
            border-radius: 8px;
            padding: 6px 8px;
            background: ${h};
        }
        .links a:hover {
            border-color: ${a};
            color: ${a};
        }

        .btns {
            display: grid;
            gap: 8px;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid ${n};
            background: ${h};
            color: ${i};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${k};
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
        }

        .miniPrint {
            margin-top: 14px;
            padding: 10px;
            .row {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 10px;
                padding: 6px 0;
                border-bottom: 1px dashed ${n};
            }
            .k {
                color: ${m};
            }
            .v {
                color: ${i};
            }
        }
    `},b=(l,v)=>{const r=l instanceof Date?l:new Date(l),g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=f=>String(f).padStart(2,"0"),j=`${g[r.getDay()]} ${N[r.getMonth()]} ${d(r.getDate())} ${r.getFullYear()}`;return v?`${j} ${d(r.getHours())}:${d(r.getMinutes())}:${d(r.getSeconds())}hrs`:j},o={totalAmount:"₹2,45,80,000.00",totalCount:"1,284",refundedAmount:"₹6,30,000.00",todayCount:"12"},R=["UPI","Card","NetBanking","Cash","Cheque"],D=["received","partial","pending","refunded","failed"],G=["INR","USD","EUR"],A=[{id:"PAY-90231",date:"2025-10-04T11:38:20+05:30",customer:"Bluewave Traders",customerId:"CUST-1001",method:"UPI",reference:"UPI-AXIS-9X31",amount:"₹1,25,000.00",currency:"INR",status:"received",invoices:["INV-2031","INV-2033"],notes:"Received via UPI. Auto-reconciled."},{id:"PAY-90230",date:"2025-10-04T10:15:05+05:30",customer:"Goodwill Pharma",customerId:"CUST-1044",method:"Card",reference:"VISA-8891",amount:"₹80,000.00",currency:"INR",status:"partial",invoices:["INV-2028"],notes:"Part-payment against INV-2028."},{id:"PAY-90229",date:"2025-10-03T18:22:49+05:30",customer:"Healcon Retail",customerId:"CUST-1022",method:"NetBanking",reference:"NEFT-HDFC-001233",amount:"₹45,000.00",currency:"INR",status:"received",invoices:["INV-2025"],notes:"NEFT received EOD."},{id:"PAY-90228",date:"2025-10-02T14:05:12+05:30",customer:"Care & Cure",customerId:"CUST-1019",method:"Cash",reference:"CASH-CTR-12",amount:"₹15,000.00",currency:"INR",status:"pending",invoices:["INV-2021"],notes:"Cash to be deposited next business day."},{id:"PAY-90227",date:"2025-10-02T09:44:03+05:30",customer:"Silverline Medicos",customerId:"CUST-1007",method:"Cheque",reference:"CHQ-SBI-557700",amount:"₹60,000.00",currency:"INR",status:"failed",invoices:["INV-2017"],notes:"Cheque returned — signature mismatch."},{id:"PAY-90226",date:"2025-10-01T12:00:00+05:30",customer:"Bluewave Traders",customerId:"CUST-1001",method:"UPI",reference:"UPI-AXIS-9X01",amount:"₹1,10,000.00",currency:"INR",status:"refunded",invoices:["INV-2009"],notes:"Refund processed as credit note CN-5509."},{id:"PAY-90225",date:"2025-09-30T16:01:11+05:30",customer:"Nova Wellness",customerId:"CUST-1032",method:"Card",reference:"AMEX-0912",amount:"₹1,80,000.00",currency:"INR",status:"received",invoices:["INV-2002","INV-2003","INV-2004"],notes:"Corporate AMEX."},{id:"PAY-90224",date:"2025-09-29T08:21:44+05:30",customer:"Apex Hospitals",customerId:"CUST-1100",method:"NetBanking",reference:"RTGS-ICICI-99112",amount:"₹7,50,000.00",currency:"INR",status:"received",invoices:["INV-1999"],notes:"Annual contract milestone."}],M=()=>{const[l,v]=y.useState({q:"",from:"",to:"",method:"",status:"",currency:""}),[r,g]=y.useState({open:!1,current:null}),N=y.useRef(null),d=s=>{const{name:t,value:c}=s.target;v($=>({...$,[t]:c}))},j=s=>g({open:!0,current:s}),f=()=>g({open:!1,current:null}),T=()=>{const s=new Blob([JSON.stringify(A,null,2)],{type:"application/json"}),t=URL.createObjectURL(s),c=document.createElement("a");c.href=t,c.download="sales-payments.json",document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(t)},w=()=>{N.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},C=y.useMemo(()=>A,[]);return e.jsxs(u.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(u.Header,{className:"card",children:[e.jsxs("div",{className:"lh",children:[e.jsx("h1",{children:"Payments"}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Total: ",e.jsx("strong",{children:o.totalAmount})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Count: ",e.jsx("strong",{children:o.totalCount})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Refunded: ",e.jsx("strong",{children:o.refundedAmount})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Today: ",e.jsx("strong",{children:o.todayCount})]})]})]}),e.jsxs("div",{className:"rh",children:[e.jsx("button",{className:"btnGhost",onClick:T,title:"Export JSON",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:w,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo mode",children:"New Payment"})]})]}),e.jsxs(u.Toolbar,{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field grow",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{name:"q",placeholder:"Search payments, customers, references…",value:l.q,onChange:d})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"From"}),e.jsx("input",{type:"date",name:"from",value:l.from,onChange:d})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"To"}),e.jsx("input",{type:"date",name:"to",value:l.to,onChange:d})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Method"}),e.jsxs("select",{name:"method",value:l.method,onChange:d,children:[e.jsx("option",{value:"",children:"Any"}),R.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{name:"status",value:l.status,onChange:d,children:[e.jsx("option",{value:"",children:"Any"}),D.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Currency"}),e.jsxs("select",{name:"currency",value:l.currency,onChange:d,children:[e.jsx("option",{value:"",children:"Any"}),G.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo mode",children:"Apply"}),e.jsx("button",{className:"btnGhost",onClick:()=>v({q:"",from:"",to:"",method:"",status:"",currency:""}),children:"Reset"})]})]}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Preset: Last 7 days"}),e.jsx("span",{className:"chip",children:"Channel: Online"}),e.jsx("span",{className:"chip",children:"Reconciled"})]})]}),e.jsxs(u.Kpis,{children:[e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Total Collected"}),e.jsx("div",{className:"v",children:o.totalAmount}),e.jsxs("div",{className:"s",children:["As of ",b(new Date,!0)]})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Payments"}),e.jsx("div",{className:"v",children:o.totalCount}),e.jsx("div",{className:"s",children:"All time"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Refunded"}),e.jsx("div",{className:"v",children:o.refundedAmount}),e.jsx("div",{className:"s",children:"Cumulative"})]}),e.jsxs("div",{className:"kpi card",children:[e.jsx("div",{className:"k",children:"Today"}),e.jsx("div",{className:"v",children:o.todayCount}),e.jsx("div",{className:"s",children:b(new Date)})]})]}),e.jsxs(u.TableCard,{className:"card",children:[e.jsxs("div",{className:"tableHeader",children:[e.jsxs("div",{className:"left",children:[e.jsx("strong",{children:"Payments"}),e.jsxs("span",{className:"muted",children:["Showing ",C.length]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo mode",children:"Sort"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo mode",children:"Columns"})]})]}),e.jsx("div",{className:"tableScroll",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Reference"}),e.jsx("th",{className:"num",children:"Amount"}),e.jsx("th",{children:"Currency"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Invoices"}),e.jsx("th",{className:"actions",children:"Actions"})]})}),e.jsx("tbody",{children:C.map(s=>e.jsxs("tr",{onClick:()=>j(s),children:[e.jsx("td",{children:e.jsx(x,{to:`/sales/payments/${s.id}`,onClick:t=>t.stopPropagation(),children:s.id})}),e.jsx("td",{children:b(s.date,!0)}),e.jsx("td",{children:e.jsx(x,{to:`/customers/${s.customerId}`,onClick:t=>t.stopPropagation(),title:"Open customer",children:s.customer})}),e.jsx("td",{children:s.method}),e.jsx("td",{className:"mono",children:s.reference}),e.jsx("td",{className:"num mono",children:s.amount}),e.jsx("td",{children:s.currency}),e.jsx("td",{children:e.jsx("span",{className:`status ${s.status}`,children:s.status})}),e.jsx("td",{className:"mono",children:s.invoices.map((t,c)=>e.jsxs(P.Fragment,{children:[e.jsx(x,{to:`/invoices/${t}`,onClick:$=>$.stopPropagation(),children:t}),c<s.invoices.length-1?", ":""]},t))}),e.jsxs("td",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:t=>{t.stopPropagation(),j(s)},children:"View"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo mode",onClick:t=>t.stopPropagation(),children:"Refund"}),e.jsx("a",{className:"btnGhost",href:`/sales/payments/${s.id}`,onClick:t=>t.stopPropagation(),title:"Open in new tab",target:"_blank",rel:"noreferrer",children:"Open"})]})]},s.id))})]})}),e.jsxs("div",{className:"tableFooter",children:[e.jsx("div",{className:"left",children:e.jsx("span",{className:"muted",children:"Page 1 of 5"})}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo mode",children:"Prev"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo mode",children:"Next"})]})]})]}),e.jsxs(u.PrintCard,{className:"card",id:"search-print-area",ref:N,children:[e.jsxs("header",{children:[e.jsx("h3",{children:"Payments — Summary"}),e.jsx("div",{className:"meta",children:b(new Date,!0)})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Total Amount"}),e.jsx("div",{className:"v",children:o.totalAmount})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Payments"}),e.jsx("div",{className:"v",children:o.totalCount})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Refunded"}),e.jsx("div",{className:"v",children:o.refundedAmount})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Today"}),e.jsx("div",{className:"v",children:o.todayCount})]})]})]}),r.open&&r.current?e.jsx(u.Drawer,{onClick:f,role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"panel card",onClick:s=>s.stopPropagation(),children:[e.jsxs("div",{className:"head",children:[e.jsx("h3",{children:r.current.id}),e.jsx("button",{className:"btnGhost",onClick:f,children:"Close"})]}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"cols",children:[e.jsxs("div",{className:"main",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:e.jsx(x,{to:`/customers/${r.current.customerId}`,children:r.current.customer})})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Date"}),e.jsx("span",{className:"v",children:b(r.current.date,!0)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Method"}),e.jsx("span",{className:"v",children:r.current.method})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Reference"}),e.jsx("span",{className:"v mono",children:r.current.reference})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Amount"}),e.jsxs("span",{className:"v mono",children:[r.current.amount," ",r.current.currency]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:e.jsx("span",{className:`status ${r.current.status}`,children:r.current.status})})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Invoices"}),e.jsx("span",{className:"v mono",children:r.current.invoices.map((s,t)=>e.jsxs(P.Fragment,{children:[e.jsx(x,{to:`/invoices/${s}`,children:s}),t<r.current.invoices.length-1?", ":""]},s))})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Notes"}),e.jsx("span",{className:"v",children:r.current.notes})]})]}),e.jsxs("div",{className:"side",children:[e.jsxs("div",{className:"card tiny",children:[e.jsx("div",{className:"cap",children:"Quick links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(x,{to:`/sales/payments/${r.current.id}`,children:"Open detail"})}),e.jsx("li",{children:e.jsx(x,{to:`/customers/${r.current.customerId}`,children:"Open customer"})}),e.jsx("li",{children:e.jsx("a",{href:`/sales/payments/${r.current.id}`,target:"_blank",rel:"noreferrer",children:"Open in new tab"})})]})]}),e.jsxs("div",{className:"card tiny",children:[e.jsx("div",{className:"cap",children:"Actions"}),e.jsxs("div",{className:"btns",children:[e.jsx("button",{className:"btnPrimary",disabled:!0,title:"Demo mode",children:"Mark as Refunded"}),e.jsx("button",{className:"btnGhost",onClick:w,children:"Print Summary"}),e.jsx("button",{className:"btnGhost",disabled:!0,title:"Demo mode",children:"Delete"})]})]})]})]}),e.jsxs("div",{className:"miniPrint card",id:"search-print-area",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Payment"}),e.jsx("div",{className:"v",children:r.current.id})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Customer"}),e.jsxs("div",{className:"v",children:[r.current.customer," (",r.current.customerId,")"]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Date"}),e.jsx("div",{className:"v",children:b(r.current.date,!0)})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Amount"}),e.jsxs("div",{className:"v mono",children:[r.current.amount," ",r.current.currency]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Status"}),e.jsx("div",{className:"v",children:e.jsx("span",{className:`status ${r.current.status}`,children:r.current.status})})]})]})]})]})}):null]})};export{M as default};
