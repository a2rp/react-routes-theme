import{d as g,q as R,u as P,a as A,r as y,j as e,N as v}from"./index-B_KzNciT.js";const o="var(--text, #f3f4f6)",p="var(--muted, #a0a0a7)",h="var(--card, #111318)",n="var(--border, #23262d)",r="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",m="var(--danger, #ef4444)",L="var(--radius, 16px)",f={Page:g.div`
        padding: 24px 0 64px;
        color: ${o};
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${p};
        }
        .breadcrumbs .current {
            color: ${o};
        }
    `,Header:g.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;
        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${p};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${h};
            color: ${o};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${w};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnDanger {
            border-color: ${m};
            color: ${m};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${m} 10%, transparent);
        }
        .btnDisabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        button:active {
            transform: translateY(1px);
        }
    `,Grid:g.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 980px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main {
            display: grid;
            gap: 16px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .summary {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            padding: 14px 16px;
            @media (max-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
            .summaryItem {
                border: 1px solid ${n};
                border-radius: 12px;
                padding: 12px;
                background: color-mix(in oklab, ${h} 98%, transparent);
                .label {
                    color: ${p};
                    font-size: 12px;
                    margin-bottom: 6px;
                }
                .value {
                    font-size: 16px;
                    font-weight: 700;
                }
                .sub {
                    color: ${p};
                    font-size: 12px;
                    margin-top: 4px;
                }
            }
            .pill {
                padding: 4px 10px;
                border-radius: 999px;
                border: 1px solid ${n};
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-weight: 700;
            }
            .pill.reconciled {
                color: ${r};
                border-color: ${r};
                background: color-mix(in oklab, ${r} 12%, transparent);
            }
            .pill.pending {
                color: ${o};
            }
            .pill.failed {
                color: ${m};
                border-color: ${m};
                background: color-mix(in oklab, ${m} 10%, transparent);
            }
            .pill.refunded {
                color: ${p};
            }
        }

        .section {
            padding: 16px 18px;
        }
        .sectionHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
        }
        .section h3 {
            font-size: 14px;
        }
        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .chip {
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 8%, transparent);
        }

        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
        }
        .panel {
            border: 1px solid ${n};
            border-radius: 12px;
            padding: 12px;
            background: ${h};
        }

        .kv {
            display: grid;
            gap: 10px;
        }
        .kv > div {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .kv dt {
            color: ${p};
        }
        .kv dd {
            color: ${o};
            margin: 0;
        }

        .notes {
            margin-top: 12px;
            color: ${o};
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${n};
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            text-align: left;
            padding: 10px;
            background: ${h};
            color: ${r};
            border-bottom: 1px solid ${n};
            position: sticky;
            top: 0;
        }
        tbody td {
            padding: 10px;
            border-bottom: 1px solid ${n};
        }
        tfoot td {
            padding: 10px;
            border-top: 1px solid ${n};
            font-weight: 700;
        }
        .num {
            text-align: right;
        }
        tfoot .label {
            color: ${p};
            font-weight: 600;
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
            background: ${r};
            border: 1px solid ${n};
        }
        .timeline .muted {
            color: ${p};
            font-size: 12px;
        }

        .customer {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .customer .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: ${h};
            border: 1px solid ${n};
            font-weight: 700;
        }
        .customer .name {
            font-weight: 700;
        }
        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }
        .miniGrid .label {
            color: ${p};
            font-size: 12px;
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .files a {
            color: ${o};
            border: 1px solid ${n};
            border-radius: 8px;
            padding: 6px 8px;
            background: ${h};
        }
        .files a:hover {
            color: ${r};
            border-color: ${r};
        }

        .receipt {
            display: grid;
            gap: 8px;
        }
        .receipt .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .receipt .pill {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${n};
            display: inline-flex;
        }
        .receipt .pill.reconciled {
            color: ${r};
            border-color: ${r};
            background: color-mix(in oklab, ${r} 12%, transparent);
        }
    `,Overlay:g.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:g.div`
        width: min(520px, 92vw);
        border-radius: ${L};
        border: 1px solid ${n};
        background: ${h};
        color: ${o};
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
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${n};
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${h};
            color: ${o};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${w};
        }
        .btnDanger {
            border-color: ${m};
            color: ${m};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${m} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `},t=(d,l)=>{const a=d instanceof Date?d:new Date(d),x=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=c=>String(c).padStart(2,"0"),j=`${x[a.getDay()]} ${b[a.getMonth()]} ${s(a.getDate())} ${a.getFullYear()}`;return l?`${j} ${s(a.getHours())}:${s(a.getMinutes())}:${s(a.getSeconds())}hrs`:j},T=d=>{const l=d instanceof Date?d:new Date(d),a=x=>String(x).padStart(2,"0");return`${a(l.getHours())}:${a(l.getMinutes())}:${a(l.getSeconds())}hrs`},O=({open:d,title:l,message:a,onConfirm:x,onClose:b,confirmText:s="Confirm",danger:j=!1})=>d?e.jsx(f.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:b,children:e.jsxs(f.Modal,{className:"card",onMouseDown:c=>c.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:l})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:a})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:b,children:"Close"}),e.jsx("button",{className:j?"btnDanger":"btnPrimary",onClick:x,children:s})]})]})}):null,F=()=>{const{paymentId:d}=R(),l=P(),a=A(),x=y.useRef(null),b=y.useMemo(()=>new Date,[]),s=y.useMemo(()=>({id:d||"PAY-7852",number:d||"PAY-7852",status:"reconciled",method:"UPI",amount:45e3,currency:"INR",receivedOn:"2025-10-04T15:38:20+05:30",createdAt:"2025-10-04T15:39:25+05:30",updatedAt:"2025-10-04T15:41:12+05:30",reference:{utr:"HDFC/NEFT/9002345678",upiRef:"324878234123@upi",bank:"HDFC Bank",account:"XXXX 1234",posRef:"",notes:"Collected by counter on weekend; auto-reconcile successful."},customer:{id:"CUST-1001",code:"CUST-1001",name:"Aarav Sharma"},collectedBy:{id:"USR-17",name:"A. Ranjan"},tags:["counter","kiosk","priority"],allocations:[{invoiceId:"INV-2031",invoiceDate:"2025-09-28",dueDate:"2025-10-05",amount:3e4,applied:3e4},{invoiceId:"INV-2040",invoiceDate:"2025-09-30",dueDate:"2025-10-07",amount:15e3,applied:15e3}],overpayment:0,timeline:[{label:"Payment recorded",at:"2025-10-04T15:38:20+05:30"},{label:"UPI confirmed by gateway",at:"2025-10-04T15:38:50+05:30"},{label:"Auto-applied to invoices",at:"2025-10-04T15:39:05+05:30"},{label:"Reconciliation completed",at:"2025-10-04T15:41:12+05:30"}],attachments:[{name:"upi-receipt.pdf",href:"#"},{name:"counter-slip.jpg",href:"#"}],remarks:"Customer prefers messages by email. Next collection expected last week of month."}),[d]),[j,c]=y.useState(!1),D=e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(v,{to:"/sales",children:"Sales"}),e.jsx("span",{children:"/"}),e.jsx(v,{to:"/sales/payments",children:"Payments"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.number})]}),S=async()=>{try{await navigator.clipboard.writeText(window.location.origin+a.pathname)}catch{}},I=()=>{const i={id:s.id,number:s.number,amount:s.amount,currency:s.currency,method:s.method,receivedOn:s.receivedOn,customer:s.customer,reference:s.reference,allocations:s.allocations,overpayment:s.overpayment,status:s.status},u=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),k=URL.createObjectURL(u),N=Object.assign(document.createElement("a"),{href:k,download:`${s.number}.json`});document.body.appendChild(N),N.click(),N.remove(),URL.revokeObjectURL(k)},C=()=>{x.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},$=s.allocations.reduce((i,u)=>i+u.applied,0);return e.jsxs(f.Page,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(f.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Payment Detail"}),D,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["ID: ",s.number]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Received: ",t(s.receivedOn,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",t(s.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>l("/sales/payments"),title:"Back to payments",children:"Back"}),e.jsx("button",{className:"btnGhost",onClick:S,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:I,title:"Download JSON",children:"Export"}),e.jsx("button",{className:"btnPrimary",onClick:C,title:"Print payment",children:"Print"}),e.jsx("button",{className:"btnDisabled",onClick:()=>c(!0),title:"Demo only",children:"Edit"}),e.jsx("button",{className:"btnDisabled",onClick:()=>c(!0),title:"Demo only",children:"Refund"}),e.jsx("button",{className:"btnDisabled",onClick:()=>c(!0),title:"Demo only",children:"Delete"})]})]}),e.jsxs(f.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card summary",children:[e.jsxs("div",{className:"summaryItem",children:[e.jsx("div",{className:"label",children:"Amount"}),e.jsxs("div",{className:"value",children:[s.currency," ",s.amount.toLocaleString("en-IN",{minimumFractionDigits:2})]}),e.jsxs("div",{className:"sub",children:["Applied: ",s.currency," ",$.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsxs("div",{className:"summaryItem",children:[e.jsx("div",{className:"label",children:"Method"}),e.jsx("div",{className:"value",children:s.method}),e.jsxs("div",{className:"sub",children:["Ref: ",s.reference.upiRef||s.reference.utr||"—"]})]}),e.jsxs("div",{className:"summaryItem",children:[e.jsx("div",{className:"label",children:"Status"}),e.jsx("div",{className:`pill ${s.status}`,children:s.status}),e.jsxs("div",{className:"sub",children:["Collected: ",t(s.receivedOn)]})]}),e.jsxs("div",{className:"summaryItem",children:[e.jsx("div",{className:"label",children:"Customer"}),e.jsx("div",{className:"value",children:e.jsx(v,{to:`/customers/${s.customer.id}`,children:s.customer.name})}),e.jsx("div",{className:"sub",children:s.customer.code})]})]}),e.jsxs("div",{className:"card section",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("h3",{children:"Payment Information"}),e.jsx("div",{className:"tags",children:s.tags.map(i=>e.jsx("span",{className:"chip",children:i},i))})]}),e.jsxs("div",{className:"two",children:[e.jsx("div",{className:"panel",children:e.jsxs("dl",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Received on"}),e.jsx("dd",{children:t(s.receivedOn,!0)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Method"}),e.jsx("dd",{children:s.method})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Currency"}),e.jsx("dd",{children:s.currency})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Collected by"}),e.jsx("dd",{children:s.collectedBy.name})]})]})}),e.jsx("div",{className:"panel",children:e.jsxs("dl",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"UTR / Ref"}),e.jsx("dd",{children:s.reference.utr||"—"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"UPI Ref"}),e.jsx("dd",{children:s.reference.upiRef||"—"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Bank"}),e.jsx("dd",{children:s.reference.bank||"—"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Account"}),e.jsx("dd",{children:s.reference.account||"—"})]})]})})]}),e.jsx("div",{className:"notes",children:s.reference.notes})]}),e.jsxs("div",{className:"card section",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("h3",{children:"Allocations"}),e.jsx("div",{className:"hint",children:"Invoices this payment was applied to."})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Invoice"}),e.jsx("th",{children:"Invoice Date"}),e.jsx("th",{children:"Due Date"}),e.jsx("th",{className:"num",children:"Invoice Amount"}),e.jsx("th",{className:"num",children:"Applied"})]})}),e.jsx("tbody",{children:s.allocations.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(v,{to:`/invoices/${i.invoiceId}`,children:i.invoiceId})}),e.jsx("td",{children:t(i.invoiceDate)}),e.jsx("td",{children:t(i.dueDate)}),e.jsxs("td",{className:"num",children:[s.currency," ",i.amount.toLocaleString("en-IN",{minimumFractionDigits:2})]}),e.jsxs("td",{className:"num",children:[s.currency," ",i.applied.toLocaleString("en-IN",{minimumFractionDigits:2})]})]},i.invoiceId))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{children:[e.jsx("td",{colSpan:3,className:"num label",children:"Totals"}),e.jsxs("td",{className:"num",children:[s.currency," ",s.allocations.reduce((i,u)=>i+u.amount,0).toLocaleString("en-IN",{minimumFractionDigits:2})]}),e.jsxs("td",{className:"num",children:[s.currency," ",$.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:3,className:"num label",children:"Overpayment"}),e.jsx("td",{className:"num",children:"—"}),e.jsxs("td",{className:"num",children:[s.currency," ",s.overpayment.toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})]})})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{className:"card section",children:[e.jsx("div",{className:"sectionHead",children:e.jsx("h3",{children:"Remarks"})}),e.jsx("div",{className:"notes",children:s.remarks})]}),e.jsxs("div",{className:"card section",children:[e.jsx("div",{className:"sectionHead",children:e.jsx("h3",{children:"Timeline"})}),e.jsx("ul",{className:"timeline",children:s.timeline.map((i,u)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:i.label}),e.jsx("div",{className:"muted",children:t(i.at,!0)})]})]},u))})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Customer"}),e.jsxs("div",{className:"customer",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:"A"}),e.jsxs("div",{className:"info",children:[e.jsx(v,{to:`/customers/${s.customer.id}`,className:"name",children:s.customer.name}),e.jsx("div",{className:"muted",children:s.customer.code})]})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Best time"}),e.jsx("div",{children:T(b)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Preferred"}),e.jsx("div",{children:"Email"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Meta"}),e.jsxs("dl",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Created"}),e.jsx("dd",{children:t(s.createdAt,!0)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Updated"}),e.jsx("dd",{children:t(s.updatedAt,!0)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Status"}),e.jsx("dd",{children:e.jsx("span",{className:`pill ${s.status}`,children:s.status})})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("ul",{className:"files",children:s.attachments.map(i=>e.jsx("li",{children:e.jsx("a",{href:i.href,download:!0,children:i.name})},i.name))})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:x,children:[e.jsx("h3",{children:"Receipt"}),e.jsxs("div",{className:"receipt",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Payment"}),e.jsx("span",{children:s.number})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Date"}),e.jsx("span",{children:t(s.receivedOn,!0)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Customer"}),e.jsxs("span",{children:[s.customer.name," (",s.customer.code,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Amount"}),e.jsxs("span",{children:[s.currency," ",s.amount.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Method"}),e.jsx("span",{children:s.method})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Reference"}),e.jsx("span",{children:s.reference.upiRef||s.reference.utr||"—"})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Status"}),e.jsx("span",{className:`pill ${s.status}`,children:s.status})]})]})]})]})]}),e.jsx(O,{open:j,title:"Demo mode",message:"This is a display-only theme. Actions like Edit/Refund/Delete are disabled.",onConfirm:()=>c(!1),onClose:()=>c(!1)})]})};export{F as default};
