import{d as x,q as D,u as S,r as g,j as e,N as p}from"./index-BauM8ZfN.js";const l="var(--text, #f3f4f6)",h="var(--muted, #a0a0a7)",j="var(--card, #111318)",t="var(--border, #23262d)",i="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",f="var(--danger, #ef4444)",P="var(--radius, 16px)",b={Page:x.div`
        padding: 24px 0 64px;
        color: ${l};
    `,Header:x.header`
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
        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
        }
        .breadcrumbs a {
            color: ${h};
        }
        .breadcrumbs .current {
            color: ${l};
        }

        .meta {
            margin-top: 8px;
            display: flex;
            gap: 10px;
            align-items: center;
            color: ${h};
            font-size: 12px;
        }
        .status {
            padding: 4px 8px;
            border-radius: 999px;
            border: 1px solid ${t};
            background: color-mix(in oklab, ${i} 10%, transparent);
            color: ${l};
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .btnPrimary,
        .btnGhost,
        .btnDisabled {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${t};
            background: ${j};
            color: ${l};
            font-weight: 600;
            transition: transform 0.06s ease, border-color 0.25s ease,
                color 0.25s ease, box-shadow 0.25s ease;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${$};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
            transform: translateY(1px);
        }
        .btnDisabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,Banner:x.div`
        margin: 12px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${t};
        border-radius: 10px;
        background: color-mix(in oklab, ${i} 10%, transparent);
        color: ${l};
    `,Grid:x.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1080px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main > .card {
            padding: 16px 18px;
        }
        .col.side {
            display: grid;
            gap: 16px;
        }

        .identity {
            display: grid;
            gap: 14px;
            grid-template-columns: 1fr;
            @media (min-width: 860px) {
                grid-template-columns: 1.6fr 1fr;
            }

            .customer {
                display: flex;
                gap: 12px;
                align-items: center;
            }
            .avatar {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                background: ${j};
                border: 1px solid ${t};
                display: grid;
                place-items: center;
                font-weight: 700;
            }
            .who h3 {
                font-size: 16px;
            }
            .muted {
                color: ${h};
            }
            .tags {
                margin-top: 6px;
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
            }
            .tag {
                padding: 4px 8px;
                border: 1px solid ${t};
                border-radius: 999px;
                background: color-mix(in oklab, ${i} 8%, transparent);
            }
            .info {
                display: grid;
                gap: 10px;
                grid-template-columns: repeat(2, 1fr);
            }
            .info .k {
                color: ${h};
                font-size: 12px;
            }
            .info .v {
                font-weight: 600;
            }
            .pill {
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${t};
            }
        }

        .addr h3 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
            .two {
                grid-template-columns: 1fr 1fr;
            }
        }

        .items .tableWrap {
            overflow: auto;
            border: 1px solid ${t};
            border-radius: 12px;
        }
        .items table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .items thead th {
            position: sticky;
            top: 0;
            background: ${j};
            border-bottom: 1px solid ${t};
            text-align: left;
            padding: 10px;
            color: ${l};
        }
        .items tbody td {
            border-top: 1px solid ${t};
            padding: 10px;
            vertical-align: top;
        }
        .items .num {
            text-align: right;
            white-space: nowrap;
        }
        .items .name {
            font-weight: 600;
        }
        .items .small {
            font-size: 12px;
            color: ${h};
        }
        .items .strong {
            font-weight: 700;
        }

        .totals {
            margin-top: 12px;
            display: grid;
            gap: 6px;
            max-width: 360px;
            margin-left: auto;
            .row {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 12px;
            }
            .grand {
                border-top: 1px dashed ${t};
                padding-top: 10px;
                font-weight: 800;
            }
        }

        .terms {
            margin: 6px 0 0 18px;
            line-height: 1.9;
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
            grid-template-columns: 1fr auto auto auto;
            gap: 10px;
            align-items: center;
        }
        .files .file {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .files .size {
            color: ${h};
            font-size: 12px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
            border-radius: 8px;
            border: 1px solid ${t};
            background: ${j};
            color: ${l};
        }
        .small:hover {
            border-color: ${i};
            color: ${i};
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
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid ${t};
            margin-top: 6px;
            background: ${i};
        }
        .timeline .dot.note {
            background: color-mix(in oklab, ${i} 35%, transparent);
        }
        .timeline .dot.email {
            background: ${i};
        }
        .timeline .dot.create {
            background: color-mix(in oklab, ${i} 20%, transparent);
        }

        .quick .qgrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }
        .facts .list {
            display: grid;
            gap: 8px;
        }
        .facts .list > div {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .facts .k {
            color: ${h};
        }
        .facts .v {
            color: ${l};
        }

        .print .ps {
            display: grid;
            gap: 8px;
        }
        .print .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
    `,_tmp:x.div``,Overlay:x.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        z-index: 50;
        background: rgba(2, 6, 23, 0.55);
    `,Modal:x.div`
        width: min(520px, 92vw);
        border-radius: ${P};
        border: 1px solid ${t};
        background: ${j};
        color: ${l};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${t};
        }
        h4 {
            font-size: 18px;
        }
        .body {
            padding: 16px;
        }
        footer {
            padding: 12px 16px;
            border-top: 1px solid ${t};
            display: flex;
            gap: 8px;
            justify-content: flex-end;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${t};
            background: ${j};
            color: ${l};
            font-weight: 600;
            transition: border-color 0.25s ease, color 0.25s ease,
                box-shadow 0.25s ease, transform 0.06s ease;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${$};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${i};
            color: ${i};
            transform: translateY(1px);
        }
    `};x.div`
    .pill.draft,
    .status.draft {
        background: color-mix(in oklab, ${i} 8%, transparent);
    }
    .pill.sent,
    .status.sent {
        background: color-mix(in oklab, ${i} 12%, transparent);
    }
    .pill.viewed,
    .status.viewed {
        background: color-mix(in oklab, ${i} 18%, transparent);
    }
    .pill.accepted,
    .status.accepted {
        background: color-mix(in oklab, ${i} 22%, transparent);
    }
    .pill.declined,
    .status.declined {
        background: color-mix(in oklab, ${f} 14%, transparent);
        border-color: ${f};
    }
    .pill.expired,
    .status.expired {
        background: color-mix(in oklab, ${f} 10%, transparent);
        border-color: ${f};
    }
`;const m=(r,u)=>{const s=r instanceof Date?r:new Date(r),n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=v=>String(v).padStart(2,"0"),o=`${n[s.getDay()]} ${d[s.getMonth()]} ${c(s.getDate())} ${s.getFullYear()}`;return u?`${o} ${c(s.getHours())}:${c(s.getMinutes())}:${c(s.getSeconds())}hrs`:o},C=({open:r,title:u,message:s,onClose:n,onConfirm:d,confirmText:c="Confirm"})=>r?e.jsx(b.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:n,children:e.jsxs(b.Modal,{className:"card",onMouseDown:o=>o.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:u})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:s})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:n,children:"Cancel"}),e.jsx("button",{className:"btnPrimary",onClick:d,children:c})]})]})}):null,z=()=>{const{quoteId:r}=D();S();const u=g.useRef(null),s=g.useMemo(()=>{const a=new Date("2025-10-04T15:38:20+05:30");return{id:r||"Q-2025-0031",number:r||"Q-2025-0031",status:"Sent",createdAt:a,validTill:"2025-10-18",currency:"INR",salesRep:{id:"U-007",name:"A. Ranjan",email:"ar@example.com"},customer:{id:"CUST-1001",name:"Bluewave Traders",email:"ops@bluewave.example.com",phone:"+91 98765 43210"},billing:{line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"},shipping:{line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India"},tags:["priority","wholesale","north"],items:[{line:1,sku:"MED-AMOX-500",name:"Amoxicillin 500mg Capsule",desc:"Blister pack of 10",qty:"50",unitPrice:"42.00",tax:"12%",discount:"0%",lineTotal:"2,100.00"},{line:2,sku:"MED-PARA-650",name:"Paracetamol 650mg Tablet",desc:"Bottle of 100",qty:"20",unitPrice:"95.00",tax:"12%",discount:"5%",lineTotal:"1,805.00"},{line:3,sku:"MED-PANT-40",name:"Pantoprazole 40mg",desc:"Strip of 15",qty:"30",unitPrice:"68.00",tax:"12%",discount:"0%",lineTotal:"2,040.00"},{line:4,sku:"MED-CET-10",name:"Cetirizine 10mg",desc:"Strip of 10",qty:"40",unitPrice:"18.00",tax:"12%",discount:"0%",lineTotal:"720.00"}],totals:{subTotal:"6,665.00",discountTotal:"95.00",taxTotal:"788.40",shipping:"0.00",grandTotal:"7,358.40"},terms:["Prices in INR. Taxes as applicable.","Valid till the mentioned date or while stocks last.","Delivery within 3-5 business days from confirmation.","Payment: Net 15. Late fee may apply thereafter."],attachments:[{id:"att-1",name:"Quote-Q-2025-0031.pdf",size:"220 KB"},{id:"att-2",name:"Product-Specs.xlsx",size:"96 KB"}],timeline:[{type:"email",label:"Quote emailed to customer",at:a},{type:"note",label:"Requested 2 extra packs for AMOX-500",at:a},{type:"create",label:"Quote created",at:a}]}},[r]),[n,d]=g.useState(""),[c,o]=g.useState(!1);g.useEffect(()=>{if(!n)return;const a=setTimeout(()=>d(""),3500);return()=>clearTimeout(a)},[n]);const v=()=>{u.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},w=async()=>{var a;try{await((a=navigator.clipboard)==null?void 0:a.writeText(window.location.href)),d("Link copied to clipboard.")}catch{d("Copy failed. You can copy from the address bar.")}},k=()=>o(!0),T=()=>{o(!1),d(`Email queued at ${m(new Date,!0)}`)},N={Draft:"draft",Sent:"sent",Viewed:"viewed",Accepted:"accepted",Declined:"declined",Expired:"expired"}[s.status]||"draft";return e.jsxs(b.Page,{className:"container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs(b.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Sales Quote"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(p,{to:"/sales",children:"Sales"}),e.jsx("span",{children:"/"}),e.jsx(p,{to:"/sales/quotes",children:"Quotes"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.number})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:`status ${N}`,children:s.status}),e.jsxs("span",{children:["Created: ",m(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Valid till: ",m(new Date(s.validTill))]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx(p,{className:"btnGhost",to:"/sales/quotes",title:"Back to quotes",children:"Back"}),e.jsx("button",{className:"btnGhost",onClick:w,title:"Copy shareable link",children:"Copy Link"}),e.jsx("button",{className:"btnGhost",onClick:v,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:k,title:"Email this quote",children:"Email Quote"}),e.jsx("button",{className:"btnDisabled",title:"Demo: convert disabled",children:"Convert to Order"}),e.jsx("button",{className:"btnDisabled",title:"Demo: approve disabled",children:"Mark as Accepted"}),e.jsx("button",{className:"btnDisabled",title:"Demo: decline disabled",children:"Mark as Declined"})]})]}),n?e.jsx(b.Banner,{children:n}):null,e.jsxs(b.Grid,{children:[e.jsxs("section",{className:"col main",children:[e.jsxs("div",{className:"card identity",children:[e.jsxs("div",{className:"customer",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:s.customer.name.charAt(0)}),e.jsxs("div",{className:"who",children:[e.jsx("h3",{children:s.customer.name}),e.jsxs("div",{className:"muted",children:[s.customer.email," • ",s.customer.phone]}),e.jsx("div",{className:"tags",children:s.tags.map(a=>e.jsx("span",{className:"tag",children:a},a))})]})]}),e.jsxs("div",{className:"info",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Quote No"}),e.jsx("div",{className:"v",children:s.number})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Sales Rep"}),e.jsx("div",{className:"v",children:s.salesRep.name})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Currency"}),e.jsx("div",{className:"v",children:s.currency})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Status"}),e.jsx("div",{className:"v",children:e.jsx("span",{className:`pill ${N}`,children:s.status})})]})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{className:"card addr",children:[e.jsx("h3",{children:"Billing Address"}),e.jsxs("p",{children:[s.billing.line1,", ",s.billing.line2,e.jsx("br",{}),s.billing.city," ",s.billing.zip,e.jsx("br",{}),s.billing.state,", ",s.billing.country]})]}),e.jsxs("div",{className:"card addr",children:[e.jsx("h3",{children:"Shipping Address"}),e.jsxs("p",{children:[s.shipping.line1,", ",s.shipping.line2,e.jsx("br",{}),s.shipping.city," ",s.shipping.zip,e.jsx("br",{}),s.shipping.state,", ",s.shipping.country]})]})]}),e.jsxs("div",{className:"card items",children:[e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Item"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{className:"num",children:"Unit Price"}),e.jsx("th",{className:"num",children:"Tax"}),e.jsx("th",{className:"num",children:"Discount"}),e.jsx("th",{className:"num",children:"Line Total"})]})}),e.jsx("tbody",{children:s.items.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.line}),e.jsxs("td",{children:[e.jsx("div",{className:"name",children:a.name}),e.jsx("div",{className:"muted small",children:a.desc})]}),e.jsx("td",{children:a.sku}),e.jsx("td",{className:"num",children:a.qty}),e.jsx("td",{className:"num",children:a.unitPrice}),e.jsx("td",{className:"num",children:a.tax}),e.jsx("td",{className:"num",children:a.discount}),e.jsx("td",{className:"num strong",children:a.lineTotal})]},a.line))})]})}),e.jsxs("div",{className:"totals",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Subtotal"}),e.jsx("div",{children:s.totals.subTotal})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Discount"}),e.jsxs("div",{children:["-",s.totals.discountTotal]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Tax"}),e.jsx("div",{children:s.totals.taxTotal})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Shipping"}),e.jsx("div",{children:s.totals.shipping})]}),e.jsxs("div",{className:"row grand",children:[e.jsx("div",{children:"Grand Total"}),e.jsx("div",{children:s.totals.grandTotal})]})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Terms & Conditions"}),e.jsx("ul",{className:"terms",children:s.terms.map((a,y)=>e.jsx("li",{children:a},y))})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("ul",{className:"files",children:s.attachments.map(a=>e.jsxs("li",{children:[e.jsx("span",{className:"file",children:a.name}),e.jsx("span",{className:"size",children:a.size}),e.jsx("button",{className:"btnGhost small",title:"Open",children:"Open"}),e.jsx("button",{className:"btnGhost small",title:"Download",children:"Download"})]},a.id))})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsx("ul",{className:"timeline",children:s.timeline.map((a,y)=>e.jsxs("li",{children:[e.jsx("span",{className:`dot ${a.type}`}),e.jsxs("div",{children:[e.jsx("strong",{children:a.label}),e.jsx("div",{className:"muted",children:m(a.at,!0)})]})]},y))})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card quick",children:[e.jsx("h3",{children:"Quick Actions"}),e.jsxs("div",{className:"qgrid",children:[e.jsx("button",{className:"btnPrimary",onClick:k,title:"Email this quote",children:"Email Quote"}),e.jsx("button",{className:"btnGhost",onClick:v,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnDisabled",title:"Demo: convert disabled",children:"Convert to Order"}),e.jsx("button",{className:"btnDisabled",title:"Demo: edit disabled",children:"Edit"})]})]}),e.jsxs("div",{className:"card facts",children:[e.jsx("h3",{children:"Summary"}),e.jsxs("div",{className:"list",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Quote"}),e.jsx("span",{className:"v",children:s.number})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:e.jsx(p,{to:`/customers/${s.customer.id}`,children:s.customer.name})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Sales Rep"}),e.jsx("span",{className:"v",children:s.salesRep.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:m(s.createdAt,!0)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Valid Till"}),e.jsx("span",{className:"v",children:m(new Date(s.validTill))})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Currency"}),e.jsx("span",{className:"v",children:s.currency})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:e.jsx("span",{className:`pill ${N}`,children:s.status})})]})]})]}),e.jsxs("div",{className:"card print",id:"search-print-area",ref:u,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"ps",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Quote"}),e.jsx("span",{className:"v",children:s.number})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:s.customer.name})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:m(s.createdAt,!0)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Valid Till"}),e.jsx("span",{className:"v",children:m(new Date(s.validTill))})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Subtotal"}),e.jsx("span",{className:"v",children:s.totals.subTotal})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Tax"}),e.jsx("span",{className:"v",children:s.totals.taxTotal})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Grand"}),e.jsx("span",{className:"v",children:s.totals.grandTotal})]})]})]}),e.jsxs("div",{className:"card related",children:[e.jsx("h3",{children:"Related"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(p,{to:"/orders",title:"Open orders list",children:"Orders"})}),e.jsx("li",{children:e.jsx(p,{to:"/invoices",title:"Open invoices list",children:"Invoices"})}),e.jsx("li",{children:e.jsx(p,{to:"/customers",title:"Open customers list",children:"Customers"})}),e.jsx("li",{children:e.jsx(p,{to:"/reports/sales",title:"Sales report",children:"Sales Report"})})]})]})]})]}),e.jsx(C,{open:c,title:"Send quote via email?",message:`An email will be sent to ${s.customer.email}.`,onClose:()=>o(!1),onConfirm:T,confirmText:"Send Email"})]})};export{z as default};
