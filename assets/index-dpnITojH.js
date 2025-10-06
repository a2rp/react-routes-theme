import{d as h,q as V,u as E,r as $,j as e,N as r}from"./index-LshBDmDj.js";const g="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",x="var(--card, #111318)",i="var(--border, #23262d)",n="var(--accent, #5aa9ff)",O="var(--accent-soft, rgba(90,169,255,0.15))",P="var(--danger, #ef4444)",m={Page:h.div`
        padding: 18px 0 60px;
        color: ${g};
    `,Header:h.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;
        border: 1px solid ${i};
        border-radius: 12px;
        background: ${x};
        box-shadow: var(--shadow);

        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .muted {
            color: ${l};
            font-weight: 500;
        }
        .breadcrumbs {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${l};
        }
        .breadcrumbs .current {
            color: ${g};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${l};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${x};
            color: ${g};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            color: ${n};
            border-color: ${n};
            box-shadow: 0 0 0 3px ${O};
        }
        .btnPrimary:active {
            transform: translateY(1px);
        }
        .btnGhost:hover {
            color: ${n};
            border-color: ${n};
        }
        .btnDisabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Banner:h.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${i};
        border-radius: 10px;
        background: color-mix(in oklab, ${n} 10%, transparent);
    `,Notice:h.div`
        padding: 20px;
        border: 1px solid ${i};
        border-radius: 12px;
        background: ${x};
        h3 {
            margin-bottom: 8px;
        }
    `,Grid:h.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr; /* full width layout with side column */

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main > .card,
        .col.side > .card {
            border: 1px solid ${i};
            border-radius: 12px;
            background: ${x};
            padding: 16px;
            box-shadow: var(--shadow);
        }

        /* Summary */
        .summary {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(4, 1fr);
            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 720px) {
                grid-template-columns: 1fr;
            }
        }
        .summary .label {
            color: ${l};
            font-size: 12px;
        }
        .summary .value {
            font-weight: 600;
        }
        .summary .value .sub {
            color: ${l};
            font-weight: 500;
            font-size: 12px;
            margin-top: 4px;
        }

        /* Table */
        .tableWrap {
            overflow: auto;
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        table.items th,
        table.items td {
            padding: 10px;
            border-bottom: 1px solid ${i};
        }
        table.items th {
            text-align: left;
            color: ${n};
            background: ${x};
            position: sticky;
            top: 0;
        }
        table.items td .sub {
            color: ${l};
            font-size: 12px;
        }
        .num {
            text-align: right;
        }

        /* Totals */
        .totals {
            display: grid;
            grid-template-columns: 1fr 320px;
            gap: 16px;
            margin-top: 14px;
        }
        @media (max-width: 900px) {
            .totals {
                grid-template-columns: 1fr;
            }
        }
        .totals .left .addr {
            margin-bottom: 10px;
        }
        .totals .left h4 {
            font-size: 14px;
            margin-bottom: 6px;
        }
        .totals .right .row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dashed ${i};
        }
        .totals .right .row.grand {
            font-size: 16px;
            font-weight: 700;
            border-bottom: 0;
        }

        /* Two columns block */
        .two {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        @media (max-width: 900px) {
            .two {
                grid-template-columns: 1fr;
            }
        }
        .empty {
            color: ${l};
        }

        .notes {
            background: color-mix(in oklab, ${n} 6%, transparent);
            border: 1px solid ${i};
            border-radius: 10px;
            padding: 10px;
            line-height: 1.6;
        }
        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .chip {
            border: 1px solid ${i};
            border-radius: 999px;
            padding: 6px 10px;
            background: color-mix(in oklab, ${n} 8%, transparent);
        }

        /* Side */
        .printHead {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .kv {
            display: grid;
            gap: 8px;
        }
        .kv .k {
            color: ${l};
            width: 100px;
            display: inline-block;
        }
        .kv .v {
            font-weight: 600;
        }
        .miniTable .mh {
            color: ${l};
            margin: 10px 0 6px;
        }
        .miniTable ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .miniTable li {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px dashed ${i};
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
            gap: 8px;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${n};
            border: 1px solid ${i};
            margin-top: 6px;
        }
        .timeline .muted {
            color: ${l};
            font-size: 12px;
        }

        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .files li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
            border: 1px solid ${i};
            border-radius: 8px;
            padding: 10px;
        }
        .files .name {
            font-weight: 600;
        }
        .files .size {
            color: ${l};
            font-size: 12px;
        }
        .rowBtns {
            display: flex;
            gap: 6px;
            justify-content: flex-end;
        }
        .small {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${i};
            background: ${x};
            color: ${g};
            font-weight: 600;
        }
        .small:hover {
            border-color: ${n};
            color: ${n};
        }
        .ql {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .ql a {
            color: ${l};
            padding: 6px 8px;
            border: 1px solid ${i};
            border-radius: 8px;
            background: ${x};
        }
        .ql a:hover {
            color: ${n};
            border-color: ${n};
        }
    `};h.span``;h.span``;const H=`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 999px;
  border: 1px solid ${i};
  background: color-mix(in oklab, ${n} 10%, transparent);
  color: ${g};
`,C=typeof document<"u"?document.createElement("style"):null;C&&(C.textContent=`
    .badge { ${H} }
    .badge.status-issued { }
    .badge.status-partially\\ applied { }
    .badge.status-applied { }
    .badge.status-void { background: color-mix(in oklab, ${P} 12%, transparent); border-color: ${P}; }
  `,document.head.appendChild(C));h.div`
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.55);
    display: grid;
    place-items: center;
    z-index: 50;
`;h.div`
    width: min(520px, 92vw);
    border: 1px solid ${i};
    border-radius: 16px;
    background: ${x};
    color: ${g};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
    overflow: hidden;

    header {
        padding: 14px 16px;
        border-bottom: 1px solid ${i};
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
        justify-content: flex-end;
    }
    .btnPrimary {
        border-radius: 8px;
        padding: 8px 14px;
        border: 1px solid ${i};
        background: ${x};
        color: ${g};
    }
    .btnPrimary:hover {
        border-color: ${n};
        color: ${n};
        box-shadow: 0 0 0 3px ${O};
    }
`;const j=(d,p=!1)=>{const a=d instanceof Date?d:new Date(d),v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],N=k=>String(k).padStart(2,"0"),u=`${v[a.getDay()]} ${o[a.getMonth()]} ${N(a.getDate())} ${a.getFullYear()}`;return p?`${u} ${N(a.getHours())}:${N(a.getMinutes())}:${N(a.getSeconds())}hrs`:u},t=d=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}).format(d),F={"CN-2025-0012":{id:"CN-2025-0012",status:"Issued",createdAt:"2025-10-04T09:15:22+05:30",updatedAt:"2025-10-04T09:40:11+05:30",customer:{id:"CUST-1001",name:"Aarav Sharma",email:"aarav.sharma@example.com",phone:"+91 98765 43210",code:"CUST-1001",tags:["priority","wholesale","north"]},invoice:{id:"INV-2031",date:"2025-09-28T11:25:00+05:30"},reason:"Overcharge adjustment on Item #2",currency:"INR",totals:{subTotal:10600,discount:600,tax:{split:[{label:"CGST 9%",amount:900},{label:"SGST 9%",amount:900}],total:1800},roundOff:0,grandTotal:11800,applied:5e3,balance:6800},allocations:[{id:"INV-2031",appliedOn:"2025-10-04T09:35:00+05:30",amount:5e3}],items:[{id:"MED-AMOX-500",name:"Amoxicillin 500 mg Capsule",hsn:"3004",batch:"AMX0925",expiry:"2027-01-31",qty:20,uom:"Strip",rate:250,disc:0,taxPerc:18,amount:5900},{id:"MED-PARA-650",name:"Paracetamol 650 mg Tablet",hsn:"3004",batch:"PAR0825",expiry:"2026-12-31",qty:20,uom:"Strip",rate:235,disc:600,taxPerc:18,amount:5900}],notes:"Customer requested adjustment due to rate discrepancy detected during reconciliation. Apply remaining balance to next invoice automatically when raised.",address:{billing:"221B Baker Street, Khan Market, New Delhi 110003, DL, India",shipping:"Plot 14, Industrial Area, Phase 2, Gurugram 122002, HR, India"},activity:[{t:"2025-10-04T09:40:11+05:30",line:"Credit note updated by Ashish"},{t:"2025-10-04T09:35:00+05:30",line:"₹5,000 applied to INV-2031"},{t:"2025-10-04T09:20:00+05:30",line:"Credit note emailed to customer"},{t:"2025-10-04T09:15:22+05:30",line:"Credit note created"}],attachments:[{id:"ATT-1",name:"Rate-Discrepancy-Screenshot.png",size:"184 KB"},{id:"ATT-2",name:"Approval-Manager.pdf",size:"92 KB"}]},"CN-2025-0013":{id:"CN-2025-0013",status:"Void",createdAt:"2025-09-20T14:10:00+05:30",updatedAt:"2025-09-20T15:12:00+05:30",customer:{id:"CUST-1020",name:"Bluewave Traders",email:"ap@bluewave.example.com",phone:"+91 98200 20000"},invoice:{id:"INV-2011",date:"2025-09-18T12:00:00+05:30"},reason:"Cancelled request by customer",currency:"INR",totals:{subTotal:2500,discount:0,tax:{split:[{label:"IGST 18%",amount:450}],total:450},roundOff:0,grandTotal:2950,applied:0,balance:2950},allocations:[],items:[{id:"MED-VITC-1K",name:"Vitamin C 1000 mg",hsn:"3004",batch:"VIT0825",expiry:"2027-02-28",qty:5,uom:"Bottle",rate:500,disc:0,taxPerc:18,amount:2950}],notes:"Voided on same day before customer receipt.",address:{billing:"G-101, Andheri, Mumbai 400053, MH, India",shipping:"Same as billing"},activity:[{t:"2025-09-20T15:12:00+05:30",line:"Credit note voided"},{t:"2025-09-20T14:10:00+05:30",line:"Credit note created"}],attachments:[]}},J=({status:d})=>{const p=(d||"").toLowerCase();return e.jsx("span",{className:`badge status-${p}`,children:d})},K=({open:d,onClose:p,title:a="Demo mode",message:v="This action is disabled on the demo."})=>d?e.jsx(m.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:p,children:e.jsxs(m.Modal,{className:"card",onMouseDown:o=>o.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:a})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:v})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:p,children:"OK"})})]})}):null,X=()=>{const{creditId:d}=V(),p=E(),a=$.useMemo(()=>F[d]||null,[d]),[v,o]=$.useState(""),[N,u]=$.useState(!1),k=$.useRef(null),R=async()=>{try{await navigator.clipboard.writeText(window.location.href),o("Link copied to clipboard."),setTimeout(()=>o(""),2500)}catch{o("Copy not available."),setTimeout(()=>o(""),2500)}},B=()=>{if(!a)return;const s=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),w=URL.createObjectURL(s),y=document.createElement("a");y.href=w,y.download=`${a.id}.json`,document.body.appendChild(y),y.click(),y.remove(),URL.revokeObjectURL(w),o("Download started."),setTimeout(()=>o(""),2e3)},M=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()};if(!a)return e.jsxs(m.Page,{children:[e.jsxs(m.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Credit Note"}),e.jsxs("nav",{className:"breadcrumbs",children:[e.jsx(r,{to:"/invoices",children:"Invoices"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:"/invoices/credit-notes",children:"Credit Notes"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Not found"})]})]}),e.jsx("div",{className:"right actions",children:e.jsx("button",{className:"btnGhost",onClick:()=>p("/invoices/credit-notes"),children:"Back"})})]}),e.jsxs(m.Notice,{className:"card",children:[e.jsx("h3",{children:"We couldn’t find that credit note."}),e.jsxs("p",{children:["Check the URL or head back to ",e.jsx(r,{to:"/invoices/credit-notes",children:"Credit Notes"}),"."]})]})]});const{id:T,status:S,customer:b,invoice:f,totals:c,items:z,reason:G,notes:L,createdAt:A,updatedAt:q,address:D,activity:U,attachments:I}=a;return e.jsxs(m.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(m.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("h1",{children:["Credit Note ",e.jsxs("span",{className:"muted",children:["#",T]})," ",e.jsx(J,{status:S})]}),e.jsxs("nav",{className:"breadcrumbs",children:[e.jsx(r,{to:"/invoices",children:"Invoices"}),e.jsx("span",{children:"/"}),e.jsx(r,{to:"/invoices/credit-notes",children:"Credit Notes"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:T})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",j(A,!0)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",j(q,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>p("/invoices/credit-notes"),children:"Back"}),e.jsx("button",{className:"btnPrimary",onClick:M,children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:B,children:"Download JSON"}),e.jsx("button",{className:"btnGhost",onClick:R,children:"Copy Link"}),e.jsx("button",{className:"btnDisabled",onClick:()=>u(!0),title:"Disabled on demo",children:"Void"}),e.jsx("button",{className:"btnDisabled",onClick:()=>u(!0),title:"Disabled on demo",children:"Apply"})]})]}),v?e.jsx(m.Banner,{role:"status","aria-live":"polite",children:v}):null,e.jsxs(m.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsx("div",{className:"card",children:e.jsxs("div",{className:"summary",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Customer"}),e.jsxs("div",{className:"value",children:[e.jsx(r,{to:`/customers/${b.id}`,children:b.name}),e.jsxs("div",{className:"sub",children:[b.email," • ",b.phone]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Against Invoice"}),e.jsxs("div",{className:"value",children:[e.jsx(r,{to:`/invoices/${f.id}`,children:f.id}),e.jsx("div",{className:"sub",children:j(f.date)})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Reason"}),e.jsx("div",{className:"value",children:G})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Currency"}),e.jsx("div",{className:"value",children:a.currency})]})]})}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"items",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"30%"},children:"Item"}),e.jsx("th",{children:"HSN/SAC"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{children:"UoM"}),e.jsx("th",{className:"num",children:"Rate"}),e.jsx("th",{className:"num",children:"Disc"}),e.jsx("th",{className:"num",children:"Tax %"}),e.jsx("th",{className:"num",children:"Amount"})]})}),e.jsx("tbody",{children:z.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(r,{to:`/products/${s.id}`,children:s.name}),e.jsx("div",{className:"sub",children:s.id})]}),e.jsx("td",{children:s.hsn}),e.jsx("td",{children:s.batch}),e.jsx("td",{children:j(s.expiry)}),e.jsx("td",{className:"num",children:s.qty}),e.jsx("td",{children:s.uom}),e.jsx("td",{className:"num",children:t(s.rate)}),e.jsx("td",{className:"num",children:s.disc?t(s.disc):"-"}),e.jsxs("td",{className:"num",children:[s.taxPerc,"%"]}),e.jsx("td",{className:"num",children:t(s.amount)})]},s.id))})]})}),e.jsxs("div",{className:"totals",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"addr",children:[e.jsx("h4",{children:"Billing"}),e.jsx("p",{children:D.billing})]}),e.jsxs("div",{className:"addr",children:[e.jsx("h4",{children:"Shipping"}),e.jsx("p",{children:D.shipping})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Subtotal"}),e.jsx("span",{children:t(c.subTotal)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Discount"}),e.jsxs("span",{children:["-",t(c.discount)]})]}),c.tax.split.map(s=>e.jsxs("div",{className:"row",children:[e.jsx("span",{children:s.label}),e.jsx("span",{children:t(s.amount)})]},s.label)),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Round Off"}),e.jsx("span",{children:t(c.roundOff)})]}),e.jsxs("div",{className:"row grand",children:[e.jsx("span",{children:"Grand Total"}),e.jsx("span",{children:t(c.grandTotal)})]})]})]})]}),e.jsx("div",{className:"card",children:e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Allocations"}),a.allocations.length===0?e.jsx("div",{className:"empty",children:"No allocations yet."}):e.jsxs("table",{className:"alloc",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Invoice"}),e.jsx("th",{children:"Applied On"}),e.jsx("th",{className:"num",children:"Amount"})]})}),e.jsx("tbody",{children:a.allocations.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(r,{to:`/invoices/${s.id}`,children:s.id})}),e.jsx("td",{children:j(s.appliedOn,!0)}),e.jsx("td",{className:"num",children:t(s.amount)})]},s.id))}),e.jsxs("tfoot",{children:[e.jsxs("tr",{children:[e.jsx("td",{colSpan:2,children:"Applied"}),e.jsx("td",{className:"num",children:t(c.applied)})]}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:2,children:"Balance"}),e.jsx("td",{className:"num",children:t(c.balance)})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Notes"}),e.jsx("div",{className:"notes",children:L}),e.jsx("div",{className:"chips",children:b.tags.map(s=>e.jsx("span",{className:"chip",children:s},s))})]})]})})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",id:"search-print-area",ref:k,children:[e.jsxs("div",{className:"printHead",children:[e.jsx("h2",{children:"Credit Note"}),e.jsx("div",{className:"muted",children:j(A,!0)})]}),e.jsxs("div",{className:"kv",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"No."}),e.jsx("span",{className:"v",children:T})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:S})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:b.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Against"}),e.jsx("span",{className:"v",children:f.id})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Amount"}),e.jsx("span",{className:"v",children:t(c.grandTotal)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Balance"}),e.jsx("span",{className:"v",children:t(c.balance)})]})]}),e.jsxs("div",{className:"miniTable",children:[e.jsx("div",{className:"mh",children:"Taxes"}),e.jsx("ul",{children:c.tax.split.map(s=>e.jsxs("li",{children:[e.jsx("span",{children:s.label}),e.jsx("span",{children:t(s.amount)})]},s.label))})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsx("ul",{className:"timeline",children:U.map((s,w)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("div",{children:s.line}),e.jsx("div",{className:"muted",children:j(s.t,!0)})]})]},w))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Attachments"}),I.length===0?e.jsx("div",{className:"empty",children:"No files."}):e.jsx("ul",{className:"files",children:I.map(s=>e.jsxs("li",{children:[e.jsx("div",{className:"name",children:s.name}),e.jsx("div",{className:"size",children:s.size}),e.jsxs("div",{className:"rowBtns",children:[e.jsx("button",{className:"btnGhost small",onClick:()=>u(!0),title:"Open",children:"Open"}),e.jsx("button",{className:"btnGhost small",onClick:()=>u(!0),title:"Download",children:"Download"})]})]},s.id))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"ql",children:[e.jsx("li",{children:e.jsx(r,{to:`/customers/${b.id}`,children:"Customer"})}),e.jsx("li",{children:e.jsx(r,{to:`/invoices/${f.id}`,children:"Invoice"})}),e.jsx("li",{children:e.jsx(r,{to:"/reports/finance",children:"Finance Report"})})]})]})]})]}),e.jsx(K,{open:N,onClose:()=>u(!1)})]})};export{X as default};
