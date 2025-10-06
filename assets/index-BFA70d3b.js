import{d as x,q as I,u as M,r as h,j as e,N as f}from"./index-CqBbF2bz.js";const n="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",p="var(--card, #111318)",r="var(--border, #23262d)",i="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",m="var(--danger, #ef4444)",B="var(--radius, 16px)",j={Page:x.div`
        width: 100%;
        color: ${n};
        padding: 20px 0 64px;

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${l};
            }
            .current {
                color: ${n};
            }
        }
    `,Header:x.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .status {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border: 1px solid ${r};
            border-radius: 999px;
            background: color-mix(in oklab, ${i} 10%, transparent);
            color: ${n};
            font-weight: 600;
            font-size: 12px;
        }
        .status.paid {
            background: color-mix(in oklab, ${i} 18%, transparent);
        }
        .status.overdue {
            border-color: ${m};
            color: ${m};
            background: color-mix(in oklab, ${m} 10%, transparent);
        }

        .meta {
            margin-top: 6px;
            color: ${l};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${p};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
            box-shadow: 0 0 0 3px ${w};
        }
        .btnPrimary:active,
        .btnGhost:active,
        .btnDanger:active {
            transform: translateY(1px);
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
            border-color: ${i};
            color: ${i};
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `,Banner:x.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${r};
        border-radius: 10px;
        background: color-mix(in oklab, ${i} 10%, transparent);
        color: ${n};
    `,Grid:x.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .partyRow {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: 1.2fr 1.2fr 1fr;
            }
        }
        .party {
            padding: 14px;
            border: 1px solid ${r};
            border-radius: 12px;
            background: ${p};
            .name {
                font-weight: 700;
            }
            .comp {
                color: ${n};
                margin-top: 2px;
            }
            .addr {
                color: ${l};
                margin-top: 6px;
            }
            .metaLine {
                display: flex;
                gap: 8px;
                color: ${l};
                margin-top: 4px;
                flex-wrap: wrap;
            }
            a {
                color: ${l};
            }
            .chips {
                margin-top: 8px;
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .chip {
                border: 1px solid ${r};
                padding: 6px 10px;
                border-radius: 999px;
                background: color-mix(in oklab, ${i} 8%, transparent);
            }
            .links {
                margin-top: 8px;
                a {
                    border: 1px solid ${r};
                    padding: 4px 8px;
                    border-radius: 6px;
                    background: ${p};
                }
            }
        }
        .metaCard {
            padding: 14px;
            border: 1px solid ${r};
            border-radius: 12px;
            background: ${p};
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            align-items: start;
            .row {
                display: grid;
                gap: 8px;
                grid-template-columns: 1fr 1fr;
            }
            .k {
                color: ${l};
                display: inline-block;
                min-width: 88px;
            }
            .v {
                color: ${n};
            }
            .qrArea {
                display: grid;
                justify-items: center;
                gap: 6px;
            }
            .qr {
                width: 96px;
                height: 96px;
                background: radial-gradient(
                        circle at 25% 30%,
                        #222 18%,
                        transparent 19%
                    ),
                    radial-gradient(
                        circle at 74% 22%,
                        #333 16%,
                        transparent 17%
                    ),
                    radial-gradient(
                        circle at 50% 70%,
                        #3b3b3b 18%,
                        transparent 19%
                    ),
                    linear-gradient(45deg, #1c1f27, #2a2f3a);
                border: 1px solid ${r};
                border-radius: 10px;
            }
            .qrHint {
                color: ${l};
                font-size: 12px;
            }
        }

        .tableWrap {
            margin-top: 16px;
        }
        .tableHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 8px;
            border: 1px solid ${r};
            border-radius: 999px;
            color: ${n};
            background: color-mix(in oklab, ${i} 10%, transparent);
            font-size: 12px;
        }

        .scroll {
            overflow: auto;
            border: 1px solid ${r};
            border-radius: 12px;
        }
        table.items {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            background: ${p};
            th,
            td {
                padding: 10px;
                border-bottom: 1px solid ${r};
            }
            thead th {
                position: sticky;
                top: 0;
                background: ${p};
                z-index: 1;
                color: ${i};
            }
            td.num,
            th.num {
                text-align: right;
            }
            .mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
            }
            tbody tr:hover {
                background: rgba(0, 0, 0, 0.06);
            }
        }

        .blocks {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 16px;
        }
        @media (min-width: 900px) {
            .blocks {
                grid-template-columns: 1fr 1fr;
            }
        }
        .block {
            padding: 14px;
        }
        .terms {
            margin-left: 18px;
        }
        .attachments {
            padding: 14px;
            margin-top: 16px;
        }
        .files {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .files li {
            display: flex;
            justify-content: space-between;
            border: 1px solid ${r};
            background: ${p};
            padding: 8px 10px;
            border-radius: 8px;
        }
        .file {
            color: ${n};
        }
        .size {
            color: ${l};
        }

        .printCard {
            margin-top: 16px;
            padding: 14px;
        }
        .printCard .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        .printCard .k {
            color: ${l};
        }
        .printCard .v {
            color: ${n};
        }

        /* side */
        .side {
            display: grid;
            gap: 16px;
        }
        .totals .rows {
            display: grid;
            gap: 8px;
        }
        .totals .k {
            color: ${l};
        }
        .totals .v {
            color: ${n};
        }
        .totals hr {
            border: none;
            border-top: 1px solid ${r};
            margin: 8px 0;
        }
        .totals .grand {
            margin-top: 6px;
            padding-top: 6px;
            border-top: 1px dashed ${r};
            display: flex;
            justify-content: space-between;
            font-weight: 700;
        }

        .payments .plist {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .payments li {
            border: 1px solid ${r};
            background: ${p};
            border-radius: 10px;
            padding: 10px;
        }
        .payments .row1 {
            display: flex;
            justify-content: space-between;
        }
        .payments .row2 {
            display: flex;
            gap: 8px;
            color: ${l};
            margin-top: 2px;
            flex-wrap: wrap;
        }
        .payments .row3 {
            margin-top: 4px;
        }
        .amt {
            font-weight: 700;
        }
        .mono {
            font-family: ui-monospace, Menlo, Consolas, monospace;
        }

        .info .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            .k {
                color: ${l};
            }
            .v a {
                color: ${n};
            }
        }

        .signatures .sigGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        .sigBox {
            display: grid;
            gap: 6px;
        }
        .sigBox .line {
            height: 48px;
            border-bottom: 1px dashed ${r};
        }
        .sigBox .cap {
            color: ${l};
            font-size: 12px;
            text-align: center;
        }
    `,Overlay:x.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:x.div`
        width: min(520px, 92vw);
        border-radius: ${B};
        border: 1px solid ${r};
        background: ${p};
        color: ${n};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${r};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${n};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${r};
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${p};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${i};
            color: ${i};
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
            border-color: ${i};
            color: ${i};
        }
        button:active {
            transform: translateY(1px);
        }
    `},u=t=>{const d=t instanceof Date?t:new Date(t),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=s=>String(s).padStart(2,"0");return`${c[d.getDay()]} ${o[d.getMonth()]} ${g(d.getDate())} ${d.getFullYear()}`},y=t=>{const d=t instanceof Date?t:new Date(t),c=o=>String(o).padStart(2,"0");return`${u(d)} ${c(d.getHours())}:${c(d.getMinutes())}:${c(d.getSeconds())}hrs`},G=({open:t,title:d,message:c,onClose:o,onConfirm:g,confirmText:s="Confirm",danger:$})=>t?e.jsx(j.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:o,children:e.jsxs(j.Modal,{className:"card",onMouseDown:b=>b.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:d})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:c})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:o,children:"Cancel"}),e.jsx("button",{className:$?"btnDanger":"btnPrimary",onClick:g,children:s})]})]})}):null,L=()=>{const{invoiceId:t}=I(),d=M(),c=h.useRef(null),o=!0,g=h.useMemo(()=>new Date("2025-10-04T12:05:33+05:30"),[]),s=h.useMemo(()=>({id:t||"INV-2031",number:t||"INV-2031",status:"Sent",createdAt:"2025-10-02T09:30:05+05:30",updatedAt:"2025-10-04T11:58:20+05:30",issueDate:"2025-10-03",dueDate:"2025-10-15",reference:"SO-3456",customer:{id:"CUST-1001",name:"Aarav Sharma",company:"Bluewave Traders",email:"billing@bluewave.example.com",phone:"+91 98765 43210",gstin:"22ABCDE1234F1Z5",pan:"ABCDE1234F",billing:{line1:"221B Baker Street, Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"},shipping:{line1:"Plot 14, Industrial Area, Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India"},tags:["priority","wholesale","north"]},seller:{name:"Nova Commerce Pvt Ltd",email:"accounts@nova.example.com",phone:"+91 99999 11111",gstin:"07AAACN1234M1Z1",address:"7th Floor, Tower-B, DLF Cybercity, Gurugram 122002, IN"},currency:"₹",items:[{id:"IT-01",sku:"MED-AMOX-500",name:"Amoxicillin 500mg Capsule",hsn:"3003",batch:"BCH-7F9A",exp:"2026-02",qty:10,unit:"strip",rate:120,discount:20,taxLabel:"GST 18%",taxAmount:180,amount:1360},{id:"IT-02",sku:"MED-PARA-650",name:"Paracetamol 650mg Tablet",hsn:"3004",batch:"BCH-9Z2K",exp:"2027-09",qty:40,unit:"strip",rate:95,discount:0,taxLabel:"GST 12%",taxAmount:456,amount:3800},{id:"IT-03",sku:"MED-ORS-200",name:"ORS Sachet 200ml",hsn:"3004",batch:"BCH-3Q1M",exp:"2026-12",qty:100,unit:"pc",rate:28.5,discount:50,taxLabel:"GST 5%",taxAmount:142.5,amount:2900}],charges:{shipping:250,packing:0,other:0},summary:{subTotal:7750,discountTotal:70,taxable:7680,cgst:799.5,sgst:799.5,igst:0,roundOff:-0,grandTotal:9529},payments:[{id:"PMT-1098",date:"2025-10-03T14:08:12+05:30",amount:5e3,mode:"UPI",ref:"TXN-9981",note:"Advance"},{id:"PMT-1107",date:"2025-10-04T10:11:39+05:30",amount:2500,mode:"Bank Transfer",ref:"NEFT-AXIS-3391",note:"Part payment"}],terms:["Goods once sold will not be taken back.","Payment due within 12 days from the date of invoice.","Subject to Gurugram jurisdiction."],notes:"Please verify batch/expiry on receipt. For issues, write to support@nova.example.com.",attachments:[{id:"F-01",name:"PO-SO-3456.pdf",size:"142 KB"},{id:"F-02",name:"Delivery-Challan-INV-2031.pdf",size:"96 KB"}],qrText:"INV-2031 | Bluewave Traders | ₹9529.00"}),[t,g]),[$,b]=h.useState(!1),[v,N]=h.useState("");h.useEffect(()=>{if(!v)return;const a=setTimeout(()=>N(""),3500);return()=>clearTimeout(a)},[v]);const D=()=>d(`/invoices/${s.id}`),T=()=>{{N("Demo mode: editing is disabled");return}},S=()=>{{N("Demo mode: editing is disabled");return}},C=()=>b(!0),A=()=>{b(!1);{N("Demo mode: delete is disabled");return}},F=()=>{c.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},P=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(f,{to:"/invoices",children:"Invoices"}),e.jsx("span",{children:"/"}),e.jsx(f,{to:`/invoices/${s.id}`,children:s.id}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Edit"})]});return e.jsxs(j.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(j.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h1",{children:"Invoice"}),e.jsx("span",{className:`status ${s.status.toLowerCase().replace(/\s+/g,"-")}`,children:s.status})]}),P,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",u(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",y(s.updatedAt)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:D,title:"Back to invoice details",children:"Cancel"}),e.jsx("button",{className:"btnPrimary",disabled:o,onClick:T,title:"Demo mode",children:"Save"}),e.jsx("button",{className:"btnPrimary",disabled:o,onClick:S,title:"Demo mode",children:"Save & View"}),e.jsx("button",{className:"btnDanger",disabled:o,onClick:C,title:"Demo mode",children:"Delete"}),e.jsx("button",{className:"btnGhost",onClick:F,title:"Print",children:"Print"})]})]}),v?e.jsx(j.Banner,{role:"status",children:v}):null,e.jsxs(j.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"partyRow",children:[e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Bill To"}),e.jsx("div",{className:"name",children:s.customer.name}),e.jsx("div",{className:"comp",children:s.customer.company}),e.jsxs("div",{className:"addr",children:[s.customer.billing.line1,", ",s.customer.billing.city,"-",s.customer.billing.zip,", ",s.customer.billing.state,", ",s.customer.billing.country]}),e.jsxs("div",{className:"metaLine",children:[e.jsxs("span",{children:["GSTIN: ",s.customer.gstin]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["PAN: ",s.customer.pan]})]}),e.jsxs("div",{className:"metaLine",children:[e.jsx("a",{href:`mailto:${s.customer.email}`,children:s.customer.email}),e.jsx("span",{children:"•"}),e.jsx("a",{href:`tel:${s.customer.phone}`,children:s.customer.phone})]}),e.jsx("div",{className:"chips",children:s.customer.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))}),e.jsx("div",{className:"links",children:e.jsx(f,{to:`/customers/${s.customer.id}`,children:"View customer"})})]}),e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"From"}),e.jsx("div",{className:"name",children:s.seller.name}),e.jsx("div",{className:"addr",children:s.seller.address}),e.jsx("div",{className:"metaLine",children:e.jsxs("span",{children:["GSTIN: ",s.seller.gstin]})}),e.jsxs("div",{className:"metaLine",children:[e.jsx("a",{href:`mailto:${s.seller.email}`,children:s.seller.email}),e.jsx("span",{children:"•"}),e.jsx("a",{href:`tel:${s.seller.phone}`,children:s.seller.phone})]})]}),e.jsxs("div",{className:"metaCard",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Invoice #"}),e.jsx("span",{className:"v",children:s.number})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Reference"}),e.jsx("span",{className:"v",children:s.reference})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Issue Date"}),e.jsx("span",{className:"v",children:u(s.issueDate)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Due Date"}),e.jsx("span",{className:"v",children:u(s.dueDate)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Currency"}),e.jsx("span",{className:"v",children:s.currency})]})]}),e.jsxs("div",{className:"qrArea","aria-label":"QR placeholder",children:[e.jsx("div",{className:"qr"}),e.jsx("div",{className:"qrHint",children:"Scan to view invoice"})]})]})]}),e.jsxs("div",{className:"tableWrap",children:[e.jsxs("div",{className:"tableHeader",children:[e.jsx("h3",{children:"Items"}),e.jsx("div",{className:"legend",children:e.jsx("span",{className:"badge",children:"Display-only"})})]}),e.jsx("div",{className:"scroll",children:e.jsxs("table",{className:"items",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{children:"Unit"}),e.jsx("th",{className:"num",children:"Rate"}),e.jsx("th",{className:"num",children:"Discount"}),e.jsx("th",{children:"Tax"}),e.jsx("th",{className:"num",children:"Tax Amt"}),e.jsx("th",{className:"num",children:"Amount"})]})}),e.jsx("tbody",{children:s.items.map((a,k)=>e.jsxs("tr",{children:[e.jsx("td",{children:k+1}),e.jsx("td",{className:"mono",children:a.sku}),e.jsx("td",{children:a.name}),e.jsx("td",{className:"mono",children:a.hsn}),e.jsx("td",{className:"mono",children:a.batch}),e.jsx("td",{className:"mono",children:a.exp}),e.jsx("td",{className:"num",children:a.qty}),e.jsx("td",{className:"mono",children:a.unit}),e.jsxs("td",{className:"num",children:[s.currency,a.rate.toFixed(2)]}),e.jsxs("td",{className:"num",children:[s.currency,a.discount.toFixed(2)]}),e.jsx("td",{children:a.taxLabel}),e.jsxs("td",{className:"num",children:[s.currency,a.taxAmount.toFixed(2)]}),e.jsxs("td",{className:"num",children:[s.currency,a.amount.toFixed(2)]})]},a.id))})]})})]}),e.jsxs("div",{className:"blocks",children:[e.jsxs("div",{className:"block card",children:[e.jsx("h3",{children:"Terms"}),e.jsx("ul",{className:"terms",children:s.terms.map((a,k)=>e.jsx("li",{children:a},k))})]}),e.jsxs("div",{className:"block card",children:[e.jsx("h3",{children:"Notes"}),e.jsx("p",{children:s.notes})]})]}),e.jsxs("div",{className:"attachments card",children:[e.jsx("h3",{children:"Attachments"}),e.jsx("ul",{className:"files",children:s.attachments.map(a=>e.jsxs("li",{children:[e.jsx("span",{className:"file",children:a.name}),e.jsx("span",{className:"size",children:a.size})]},a.id))})]}),e.jsxs("div",{className:"card printCard",id:"search-print-area",ref:c,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Invoice"}),e.jsx("span",{className:"v",children:s.number})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Issue"}),e.jsx("span",{className:"v",children:u(s.issueDate)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Due"}),e.jsx("span",{className:"v",children:u(s.dueDate)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:s.customer.company})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Total"}),e.jsxs("span",{className:"v",children:[s.currency,s.summary.grandTotal.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:s.status})]})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card totals",children:[e.jsx("h3",{children:"Totals"}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Subtotal"}),e.jsxs("span",{className:"v",children:[s.currency,s.summary.subTotal.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Discount"}),e.jsxs("span",{className:"v",children:["− ",s.currency,s.summary.discountTotal.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Taxable"}),e.jsxs("span",{className:"v",children:[s.currency,s.summary.taxable.toFixed(2)]})]}),e.jsx("hr",{}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"CGST"}),e.jsxs("span",{className:"v",children:[s.currency,s.summary.cgst.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"SGST"}),e.jsxs("span",{className:"v",children:[s.currency,s.summary.sgst.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"IGST"}),e.jsxs("span",{className:"v",children:[s.currency,s.summary.igst.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Shipping"}),e.jsxs("span",{className:"v",children:[s.currency,s.charges.shipping.toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Round Off"}),e.jsxs("span",{className:"v",children:[s.currency,s.summary.roundOff.toFixed(2)]})]}),e.jsxs("div",{className:"grand",children:[e.jsx("span",{className:"k",children:"Grand Total"}),e.jsxs("span",{className:"v",children:[s.currency,s.summary.grandTotal.toFixed(2)]})]})]})]}),e.jsxs("div",{className:"card payments",children:[e.jsx("h3",{children:"Payments"}),e.jsx("ul",{className:"plist",children:s.payments.map(a=>e.jsxs("li",{children:[e.jsxs("div",{className:"row1",children:[e.jsx("strong",{children:a.id}),e.jsxs("span",{className:"amt",children:[s.currency,a.amount.toFixed(2)]})]}),e.jsxs("div",{className:"row2",children:[e.jsx("span",{children:y(a.date)}),e.jsx("span",{children:"•"}),e.jsx("span",{children:a.mode}),e.jsx("span",{children:"•"}),e.jsx("span",{className:"mono",children:a.ref})]}),e.jsx("div",{className:"row3 muted",children:a.note})]},a.id))})]}),e.jsxs("div",{className:"card info",children:[e.jsx("h3",{children:"Document Info"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:y(s.createdAt)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Updated"}),e.jsx("span",{className:"v",children:y(s.updatedAt)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Customer"}),e.jsx("span",{className:"v",children:e.jsx(f,{to:`/customers/${s.customer.id}`,children:s.customer.id})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Ref"}),e.jsx("span",{className:"v",children:s.reference})]})]})]}),e.jsxs("div",{className:"card signatures",children:[e.jsx("h3",{children:"Signatures"}),e.jsxs("div",{className:"sigGrid",children:[e.jsxs("div",{className:"sigBox",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"cap",children:"Authorized Signatory"})]}),e.jsxs("div",{className:"sigBox",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"cap",children:"Customer"})]})]})]})]})]}),e.jsx(G,{open:$,title:"Delete invoice?",message:`This will permanently remove ${s.number}.`,danger:!0,confirmText:"Delete",onClose:()=>b(!1),onConfirm:A})]})};export{L as default};
