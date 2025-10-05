import{d as p,r as g,j as e,N as v}from"./index-BpMGcZ_2.js";const n="var(--text, #f3f4f6)",d="var(--muted, #a0a0a7)",h="var(--card, #111318)",s="var(--border, #23262d)",a="var(--accent, #5aa9ff)",y="var(--accent-soft, rgba(90,169,255,0.15))",x="var(--radius, 16px)",u={Page:p.div`
        width: 100%;
        padding: 18px 18px 56px;
        color: ${n};

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 6px;
            a {
                color: ${d};
            }
            .current {
                color: ${n};
            }
        }
    `,Header:p.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            color: ${d};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${s};
            background: ${h};
            color: ${n};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.06s;
        }
        .btnPrimary:hover {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${y};
            transform: translateY(1px);
        }
        .btnGhost:hover {
            border-color: ${a};
            color: ${a};
            transform: translateY(1px);
        }
        button[disabled],
        button[aria-disabled="true"] {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,Summary:p.section`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
        margin-bottom: 16px;
        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }

        .kpi {
            padding: 14px 16px;
            border: 1px solid ${s};
            border-radius: ${x};
            background: color-mix(in oklab, ${a} 6%, transparent);
            .k {
                color: ${d};
                font-size: 12px;
            }
            .v {
                font-size: 20px;
                margin-top: 4px;
                letter-spacing: 0.3px;
            }
            .hint {
                margin-top: 6px;
                font-size: 12px;
                color: ${d};
            }
        }
    `,Filters:p.section`
        padding: 12px 14px;
        margin-bottom: 16px;
        border: 1px solid ${s};
        border-radius: ${x};
        background: ${h};

        .row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1000px) {
            .row {
                grid-template-columns: 1fr;
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${d};
            margin-bottom: 6px;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${s};
            background: color-mix(in oklab, ${a} 6%, transparent);
            color: ${n};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            font-size: 12px;
            transition: border-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .chip.active {
            border-color: ${a};
            color: ${a};
            box-shadow: 0 0 0 3px ${y};
        }

        .metaRow {
            margin-top: 12px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 16px;
            align-items: center;
            @media (max-width: 840px) {
                grid-template-columns: 1fr;
            }
        }
        .legend {
            display: flex;
            gap: 12px;
            color: ${d};
            font-size: 12px;
            align-items: center;
        }
        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            display: inline-block;
            border: 1px solid ${s};
        }
        .dot.upi {
            background: color-mix(in oklab, ${a} 30%, transparent);
        }
        .dot.card {
            background: color-mix(in oklab, ${a} 20%, transparent);
        }
        .dot.cash {
            background: color-mix(in oklab, ${a} 12%, transparent);
        }
        .dot.bank {
            background: color-mix(in oklab, ${a} 24%, transparent);
        }

        .distribution .bar {
            height: 10px;
            width: 280px;
            max-width: 100%;
            border-radius: 999px;
            overflow: hidden;
            border: 1px solid ${s};
            background: color-mix(in oklab, ${a} 6%, transparent);
            display: flex;
        }
        .distribution .seg {
            display: block;
            height: 100%;
        }
        .distribution .seg.upi {
            background: color-mix(in oklab, ${a} 30%, transparent);
        }
        .distribution .seg.card {
            background: color-mix(in oklab, ${a} 22%, transparent);
        }
        .distribution .seg.cash {
            background: color-mix(in oklab, ${a} 14%, transparent);
        }
        .distribution .seg.bank {
            background: color-mix(in oklab, ${a} 26%, transparent);
        }
        .distribution .note {
            margin-top: 6px;
            color: ${d};
            font-size: 12px;
            text-align: right;
        }
    `,TableCard:p.section`
        padding: 0;
        border: 1px solid ${s};
        border-radius: ${x};
        background: ${h};

        .tableWrap {
            width: 100%;
            overflow: auto;
            border-top-left-radius: ${x};
            border-top-right-radius: ${x};
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${h};
            border-bottom: 1px solid ${s};
            text-align: left;
            padding: 12px 12px;
            color: ${a};
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        tbody td {
            padding: 12px 12px;
            border-bottom: 1px solid ${s};
            vertical-align: middle;
            white-space: nowrap;
        }
        tbody tr:hover {
            background: color-mix(in oklab, ${a} 8%, transparent);
        }
        .right {
            text-align: right;
        }
        .muted {
            color: ${d};
        }

        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        a.tiny {
            font-size: 12px;
            margin-right: 10px;
            color: ${d};
        }
        a.tiny:hover {
            color: ${a};
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 8px;
            border: 1px solid ${s};
            border-radius: 999px;
            font-weight: 600;
            background: color-mix(in oklab, ${a} 8%, transparent);
        }

        .badge.method.upi {
            background: color-mix(in oklab, ${a} 14%, transparent);
        }
        .badge.method.card {
            background: color-mix(in oklab, ${a} 10%, transparent);
        }
        .badge.method.cash {
            background: color-mix(in oklab, ${a} 8%, transparent);
        }
        .badge.method.bank {
            background: color-mix(in oklab, ${a} 12%, transparent);
        }

        .badge.status.settled {
            border-color: ${a};
            color: ${a};
        }
        .badge.status.pending {
            color: ${n};
            opacity: 0.85;
        }
        .badge.status.partial {
            color: ${n};
            opacity: 0.85;
        }
        .badge.status.refunded {
            color: ${n};
            opacity: 0.85;
        }

        .footerBar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 12px;
            border-top: 1px solid ${s};
        }
        .pager {
            display: flex;
            gap: 8px;
        }
        .small {
            padding: 6px 10px;
            border-radius: 8px;
            border: 1px solid ${s};
            background: ${h};
            color: ${n};
        }
        .small:hover {
            border-color: ${a};
            color: ${a};
        }
    `,PrintArea:p.section`
        margin-top: 24px;
        padding: 16px;
        border: 1px dashed ${s};
        border-radius: ${x};
        background: ${h};

        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-bottom: 12px;
            @media (max-width: 1000px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 560px) {
                grid-template-columns: 1fr;
            }
        }
        .k {
            color: ${d};
            font-size: 12px;
        }
        .v {
            color: ${n};
        }

        .printTable {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
            margin-top: 8px;
        }
        .printTable th,
        .printTable td {
            border: 1px solid ${s};
            padding: 8px;
            text-align: left;
        }
        .printTable th {
            color: ${a};
            background: color-mix(in oklab, ${a} 8%, transparent);
        }
    `},P=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],N=r=>String(r).padStart(2,"0"),w=r=>{const i=r instanceof Date?r:new Date(r);return`${P[i.getDay()]} ${A[i.getMonth()]} ${N(i.getDate())} ${i.getFullYear()}`},j=r=>{const i=r instanceof Date?r:new Date(r);return`${w(i)} ${N(i.getHours())}:${N(i.getMinutes())}:${N(i.getSeconds())}hrs`},b={totalReceipts:"₹ 2,43,890.00",today:"₹ 12,450.00",month:"₹ 1,28,700.00",avgAmount:"₹ 7,436.06"},B=[{id:"RCPT-5001",invoiceId:"INV-2031",customer:{id:"CUST-1001",name:"Aarav Sharma"},amount:12450,method:"UPI",status:"Settled",receivedAt:"2025-10-04T14:08:21+05:30",createdBy:"ashish"},{id:"RCPT-5002",invoiceId:"INV-2032",customer:{id:"CUST-1002",name:"Niharika Verma"},amount:8900,method:"Card",status:"Settled",receivedAt:"2025-10-03T17:42:09+05:30",createdBy:"mohit"},{id:"RCPT-5003",invoiceId:"INV-2033",customer:{id:"CUST-1003",name:"Bluewave Traders"},amount:45200,method:"Bank",status:"Pending",receivedAt:"2025-10-02T11:23:55+05:30",createdBy:"neha"},{id:"RCPT-5004",invoiceId:"INV-2034",customer:{id:"CUST-1004",name:"Tricity Medico"},amount:2150,method:"Cash",status:"Settled",receivedAt:"2025-10-01T10:00:00+05:30",createdBy:"ashish"},{id:"RCPT-5005",invoiceId:"INV-2035",customer:{id:"CUST-1005",name:"Ananya Rao"},amount:12600,method:"UPI",status:"Settled",receivedAt:"2025-09-30T19:18:44+05:30",createdBy:"mohit"},{id:"RCPT-5006",invoiceId:"INV-2036",customer:{id:"CUST-1006",name:"RapidCare Labs"},amount:37850,method:"Bank",status:"Partial",receivedAt:"2025-09-29T09:02:07+05:30",createdBy:"neha"},{id:"RCPT-5007",invoiceId:"INV-2037",customer:{id:"CUST-1007",name:"Sunrise Pharmacy"},amount:4999,method:"Card",status:"Settled",receivedAt:"2025-09-28T12:16:30+05:30",createdBy:"ashish"},{id:"RCPT-5008",invoiceId:"INV-2038",customer:{id:"CUST-1008",name:"NeuroWell Clinic"},amount:16450,method:"UPI",status:"Refunded",receivedAt:"2025-09-28T16:40:12+05:30",createdBy:"neha"},{id:"RCPT-5009",invoiceId:"INV-2039",customer:{id:"CUST-1009",name:"Apex Diagnostics"},amount:28500,method:"Bank",status:"Settled",receivedAt:"2025-09-27T10:11:11+05:30",createdBy:"mohit"},{id:"RCPT-5010",invoiceId:"INV-2040",customer:{id:"CUST-1010",name:"Cliniva Pvt Ltd"},amount:9800,method:"Cash",status:"Settled",receivedAt:"2025-09-27T18:33:26+05:30",createdBy:"ashish"},{id:"RCPT-5011",invoiceId:"INV-2041",customer:{id:"CUST-1011",name:"Alpha Care"},amount:13200,method:"UPI",status:"Settled",receivedAt:"2025-09-26T13:58:00+05:30",createdBy:"neha"},{id:"RCPT-5012",invoiceId:"INV-2042",customer:{id:"CUST-1012",name:"WellSpring"},amount:7300,method:"Card",status:"Settled",receivedAt:"2025-09-25T12:05:42+05:30",createdBy:"mohit"},{id:"RCPT-5013",invoiceId:"INV-2043",customer:{id:"CUST-1013",name:"Aarogya Plus"},amount:25100,method:"Bank",status:"Pending",receivedAt:"2025-09-25T20:14:09+05:30",createdBy:"ashish"},{id:"RCPT-5014",invoiceId:"INV-2044",customer:{id:"CUST-1014",name:"Bharat Pharma"},amount:15400,method:"UPI",status:"Settled",receivedAt:"2025-09-24T08:44:29+05:30",createdBy:"neha"},{id:"RCPT-5015",invoiceId:"INV-2045",customer:{id:"CUST-1015",name:"Om Clinics"},amount:6400,method:"Cash",status:"Settled",receivedAt:"2025-09-24T10:10:10+05:30",createdBy:"mohit"}],k=!0,M=()=>{const r=g.useRef(null),[i,C]=g.useState(""),[l,T]=g.useState("all"),[m,S]=g.useState("all"),$=g.useMemo(()=>{const t=i.trim().toLowerCase().split(/\s+/).filter(Boolean);return B.filter(o=>{if(l!=="all"&&o.status!==l||m!=="all"&&o.method!==m)return!1;if(t.length===0)return!0;const f=`${o.id} ${o.invoiceId} ${o.customer.name} ${o.method} ${o.status}`.toLowerCase();return t.every(c=>f.includes(c))})},[i,l,m]),I=()=>{const t={generatedAt:j(new Date),filters:{q:i,status:l,method:m},items:$},o=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),f=URL.createObjectURL(o),c=document.createElement("a");c.href=f,c.download=`receipts-${Date.now()}.json`,document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(f)},R=()=>{r.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(u.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(u.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Receipts"}),e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(v,{to:"/invoices",children:"Billing"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Receipts"})]}),e.jsx("div",{className:"meta",children:e.jsxs("span",{children:["As of ",j(new Date)]})})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",title:"Demo — create is disabled",disabled:k,"aria-disabled":k,children:"New Receipt"}),e.jsx("button",{className:"btnPrimary",onClick:I,title:"Download JSON snapshot",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:R,title:"Print this view",children:"Print"})]})]}),e.jsxs(u.Summary,{children:[e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"Total"}),e.jsx("div",{className:"v",children:b.totalReceipts}),e.jsx("div",{className:"hint",children:"All-time received"})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"Today"}),e.jsx("div",{className:"v",children:b.today}),e.jsx("div",{className:"hint",children:w(new Date)})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"This Month"}),e.jsx("div",{className:"v",children:b.month}),e.jsx("div",{className:"hint",children:"Month-to-date"})]}),e.jsxs("div",{className:"card kpi",children:[e.jsx("div",{className:"k",children:"Avg Amount"}),e.jsx("div",{className:"v",children:b.avgAmount}),e.jsx("div",{className:"hint",children:"Per receipt"})]})]}),e.jsxs(u.Filters,{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Search"}),e.jsx("input",{value:i,onChange:t=>C(t.target.value),placeholder:"Receipt / Invoice / Customer / Method","aria-label":"Search receipts"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Status"}),e.jsx("div",{className:"chips",children:["all","Settled","Pending","Partial","Refunded"].map(t=>e.jsx("button",{className:`chip ${l===t?"active":""}`,onClick:()=>T(t),children:t},t))})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Method"}),e.jsx("div",{className:"chips",children:["all","UPI","Card","Cash","Bank"].map(t=>e.jsx("button",{className:`chip ${m===t?"active":""}`,onClick:()=>S(t),children:t},t))})]})]}),e.jsxs("div",{className:"row metaRow",children:[e.jsxs("div",{className:"legend",children:[e.jsx("span",{className:"dot upi"})," UPI",e.jsx("span",{className:"dot card"})," Card",e.jsx("span",{className:"dot cash"})," Cash",e.jsx("span",{className:"dot bank"})," Bank"]}),e.jsxs("div",{className:"distribution",children:[e.jsxs("div",{className:"bar",children:[e.jsx("span",{className:"seg upi",style:{width:"34%"}}),e.jsx("span",{className:"seg card",style:{width:"26%"}}),e.jsx("span",{className:"seg cash",style:{width:"18%"}}),e.jsx("span",{className:"seg bank",style:{width:"22%"}})]}),e.jsx("div",{className:"note",children:"Method mix (demo)"})]})]})]}),e.jsxs(u.TableCard,{className:"card",children:[e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Receipt"}),e.jsx("th",{children:"Invoice"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{className:"right",children:"Amount (₹)"}),e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Received On"}),e.jsx("th",{children:"Created By"}),e.jsx("th",{children:"Links"})]})}),e.jsx("tbody",{children:$.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"mono",children:t.id})}),e.jsx("td",{children:e.jsx(v,{to:`/invoices/${t.invoiceId}`,title:`Open ${t.invoiceId}`,children:t.invoiceId})}),e.jsx("td",{children:e.jsx(v,{to:`/customers/${t.customer.id}`,title:`Open ${t.customer.name}`,children:t.customer.name})}),e.jsx("td",{className:"right",children:t.amount.toLocaleString("en-IN",{minimumFractionDigits:2})}),e.jsx("td",{children:e.jsx("span",{className:`badge method ${t.method.toLowerCase()}`,children:t.method})}),e.jsx("td",{children:e.jsx("span",{className:`badge status ${t.status.toLowerCase().replace(/\s+/g,"-")}`,children:t.status})}),e.jsx("td",{children:j(t.receivedAt)}),e.jsx("td",{className:"muted",children:t.createdBy}),e.jsxs("td",{className:"links",children:[e.jsx(v,{to:`/invoices/${t.invoiceId}`,className:"tiny",children:"Invoice"}),e.jsx(v,{to:`/customers/${t.customer.id}`,className:"tiny",children:"Customer"})]})]},t.id))})]})}),e.jsxs("div",{className:"footerBar",children:[e.jsxs("div",{className:"count",children:[$.length," receipts"]}),e.jsxs("div",{className:"pager",children:[e.jsx("button",{className:"btnGhost small",disabled:!0,children:"Prev"}),e.jsx("button",{className:"btnGhost small",disabled:!0,children:"Next"})]})]})]}),e.jsxs(u.PrintArea,{id:"search-print-area",ref:r,children:[e.jsx("h2",{children:"Receipts — Summary"}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Generated"}),e.jsx("div",{className:"v",children:j(new Date)})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Filters"}),e.jsxs("div",{className:"v",children:["q: ",i||"—",", status: ",l,", method: ",m]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Total"}),e.jsx("div",{className:"v",children:b.totalReceipts})]}),e.jsxs("div",{children:[e.jsx("div",{className:"k",children:"Today"}),e.jsx("div",{className:"v",children:b.today})]})]}),e.jsxs("table",{className:"printTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Receipt"}),e.jsx("th",{children:"Invoice"}),e.jsx("th",{children:"Customer"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Method"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Received"})]})}),e.jsx("tbody",{children:$.slice(0,14).map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:t.invoiceId}),e.jsx("td",{children:t.customer.name}),e.jsxs("td",{children:["₹ ",t.amount.toLocaleString("en-IN",{minimumFractionDigits:2})]}),e.jsx("td",{children:t.method}),e.jsx("td",{children:t.status}),e.jsx("td",{children:j(t.receivedAt)})]},`p-${t.id}`))})]})]})]})};export{M as default};
