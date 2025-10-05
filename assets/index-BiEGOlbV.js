import{d as g,q as I,u as A,r as k,j as e,N as x}from"./index-P_7RwasD.js";const m="var(--text, #f3f4f6)",b="var(--muted, #a0a0a7)",l="var(--card, #111318)",i="var(--border, #23262d)",d="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",c="var(--danger, #ef4444)",T="var(--radius, 16px)",j={Page:g.div`
        padding: 24px 0 60px;
        color: ${m};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${b};
            }
            .current {
                color: ${m};
            }
        }
    `,Header:g.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;

        .l h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
            margin-bottom: 4px;
        }
        .meta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            color: ${b};
            font-size: 12px;
        }

        .r {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .chip {
            border: 1px solid ${i};
            padding: 6px 10px;
            border-radius: 999px;
            font-weight: 600;
            background: color-mix(in oklab, ${d} 10%, transparent);
            color: ${m};
        }
        .chip.paid {
            background: color-mix(in oklab, ${d} 16%, transparent);
        }
        .chip.overdue {
            border-color: ${c};
            color: ${c};
            background: color-mix(in oklab, ${c} 12%, transparent);
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
            border: 1px solid ${i};
            background: ${l};
            color: ${m};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${$};
        }
        .btnDanger {
            border-color: ${c};
            color: ${c};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${c} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${d};
            color: ${d};
        }
        button:active {
            transform: translateY(1px);
        }
    `,Banner:g.div`
        margin: 10px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${i};
        border-radius: 10px;
        background: color-mix(in oklab, ${d} 10%, transparent);
        color: ${m};
    `,Layout:g.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2.2fr 1fr;
        }

        .rail {
            display: grid;
            gap: 16px;
        }
        .rail-card {
            padding: 14px 16px;
        }
        .links {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${b};
            border: 1px solid ${i};
            background: ${l};
            padding: 6px 8px;
            border-radius: 8px;
        }
        .links a:hover {
            color: ${d};
            border-color: ${d};
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
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${d};
            margin-top: 6px;
            border: 1px solid ${i};
        }

        .card.printable {
            padding: 16px 18px;
        }

        .grid-top {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            gap: 16px;
            align-items: start;
            @media (max-width: 880px) {
                grid-template-columns: 1fr;
            }
        }

        .org {
            display: flex;
            gap: 14px;
            align-items: flex-start;
        }
        .logo {
            width: 52px;
            height: 52px;
            border-radius: 12px;
            background: ${l};
            display: grid;
            place-items: center;
            font-weight: 800;
            border: 1px solid ${i};
        }
        .org-meta h3 {
            font-size: 16px;
            margin-bottom: 6px;
        }
        .muted {
            color: ${b};
            font-size: 12px;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                "Liberation Mono", monospace;
        }

        .inv-meta {
            display: grid;
            gap: 10px;
        }
        .inv-meta table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        .inv-meta th {
            text-align: left;
            color: ${b};
            width: 40%;
            padding: 4px 0;
        }
        .inv-meta td {
            padding: 4px 0;
        }
        .barcode {
            height: 44px;
            width: 100%;
            background: repeating-linear-gradient(
                90deg,
                #000 0,
                #000 1px,
                transparent 1px,
                transparent 3px
            );
            opacity: 0.5;
            border-radius: 6px;
        }

        .grid-party {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 14px;
            margin-top: 12px;
            @media (max-width: 980px) {
                grid-template-columns: 1fr;
            }
        }
        .party {
            border: 1px solid ${i};
            border-radius: 10px;
            padding: 12px;
            background: ${l};
        }
        .party h4 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .party .name {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .party.pay .qr {
            margin-top: 8px;
            width: 120px;
            height: 120px;
            border: 1px dashed ${i};
            border-radius: 8px;
            background: repeating-conic-gradient(
                from 45deg,
                #000 0 4%,
                transparent 0 8%
            );
            opacity: 0.3;
        }

        .items table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 14px;
        }
        .items th,
        .items td {
            border-bottom: 1px solid ${i};
            padding: 10px;
            vertical-align: top;
        }
        .items thead th {
            position: sticky;
            top: 0;
            background: ${l};
            z-index: 1;
        }
        .items .itm {
            font-weight: 600;
        }
        .ta-r {
            text-align: right;
        }

        .grid-summary {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 16px;
            margin-top: 14px;
            @media (max-width: 980px) {
                grid-template-columns: 1fr;
            }
        }

        .left .box,
        .right .box {
            border: 1px solid ${i};
            border-radius: 10px;
            padding: 12px;
            background: ${l};
        }
        .left .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            padding: 6px 0;
        }
        .left .row.total {
            border-top: 1px dashed ${i};
            margin-top: 6px;
            padding-top: 10px;
            font-weight: 800;
        }
        .words {
            margin-top: 10px;
            font-size: 12px;
            color: ${b};
        }

        .right .mini .hdr {
            font-weight: 700;
            margin-bottom: 8px;
        }
        .paylist {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .paylist li {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;
            align-items: center;
        }
        .paylist .amt {
            font-weight: 700;
        }
        .due {
            display: flex;
            justify-content: space-between;
            border-top: 1px dashed ${i};
            margin-top: 8px;
            padding-top: 8px;
        }

        .notes-terms {
            display: grid;
            grid-template-columns: 2fr 2fr 1fr;
            gap: 16px;
            margin-top: 16px;
        }
        @media (max-width: 1100px) {
            .notes-terms {
                grid-template-columns: 1fr;
            }
        }
        .blk {
            border: 1px solid ${i};
            border-radius: 10px;
            padding: 12px;
            background: ${l};
        }
        .blk h4 {
            font-size: 14px;
            margin-bottom: 8px;
        }
        .blk.sign .signbox {
            height: 64px;
            border: 1px dashed ${i};
            border-radius: 8px;
            background: repeating-linear-gradient(
                45deg,
                transparent 0 6px,
                rgba(255, 255, 255, 0.04) 6px 12px
            );
            margin-bottom: 6px;
        }

        .footer {
            margin-top: 12px;
            display: flex;
            justify-content: center;
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
        border-radius: ${T};
        border: 1px solid ${i};
        background: ${l};
        color: ${m};
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
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${i};
        }

        .btnPrimary,
        .btnGhost,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${l};
            color: ${m};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${d};
            color: ${d};
            box-shadow: 0 0 0 3px ${$};
        }
        .btnDanger {
            border-color: ${c};
            color: ${c};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${c} 10%, transparent);
        }
        .btnGhost:hover {
            border-color: ${d};
            color: ${d};
        }
    `},h=r=>String(r).padStart(2,"0"),C=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],N=r=>{const n=r instanceof Date?r:new Date(r);return`${C[n.getDay()]} ${O[n.getMonth()]} ${h(n.getDate())} ${n.getFullYear()}`},v=r=>{const n=r instanceof Date?r:new Date(r);return`${N(n)} ${h(n.getHours())}:${h(n.getMinutes())}:${h(n.getSeconds())}hrs`},M=r=>{const n=r instanceof Date?r:new Date(r);return`${h(n.getHours())}:${h(n.getMinutes())}:${h(n.getSeconds())}hrs`},o=r=>`₹${Number(r).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`,L=({open:r,title:n,message:y,onClose:s,actions:u})=>r?e.jsx(j.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:s,children:e.jsxs(j.Modal,{className:"card",onMouseDown:t=>t.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:n})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:y})}),e.jsx("footer",{children:(u||[]).map(t=>e.jsx("button",{className:t.kind||"btnPrimary",onClick:t.onClick,children:t.label},t.label))})]})}):null,B=()=>{const{orderId:r}=I(),n=A(),y=k.useRef(null),s=k.useMemo(()=>{const a=new Date,p=new Date(a.getTime()+7*24*60*60*1e3);return{orderId:r||"ORD-3001",invoiceId:"INV-2031",status:"Unpaid",issuedAt:a,dueAt:p,channel:"Online",currency:"INR",seller:{name:"Bluewave Traders Pvt. Ltd.",gstin:"22ABCDE1234F1Z5",pan:"ABCDE1234F",address:["17/3, NH-8","DLF Phase 2","Gurugram - 122002","Haryana, India"],email:"billing@bluewave.example.com",phone:"+91 11 4455 7788",placeOfSupply:"Haryana"},buyer:{code:"CUST-1001",name:"Aarav Sharma",company:"Aarav Retail",gstin:"29AABCU9603R1ZV",address:["221B Baker Street","Khan Market","New Delhi - 110003","India"],email:"aarav.sharma@example.com",phone:"+91 98765 43210",shipping:["Plot 14, Industrial Area","Phase 2","Gurugram - 122002","Haryana, India"]},items:[{lineNo:1,sku:"MED-AMOX-500",name:"Amoxicillin 500mg Capsule",hsn:"3004",qty:2,uom:"Box",rate:120,discount:0,taxPct:12,taxAmt:28.8,lineTotal:268.8},{lineNo:2,sku:"MED-PARA-650",name:"Paracetamol 650mg Tablet",hsn:"3004",qty:5,uom:"Strip",rate:35,discount:5,taxPct:12,taxAmt:18.6,lineTotal:198.6},{lineNo:3,sku:"MED-ORS-20",name:"ORS Powder 20.5g Sachet",hsn:"2106",qty:10,uom:"Sachet",rate:9.5,discount:0,taxPct:5,taxAmt:4.75,lineTotal:99.75}],summary:{subTotal:533,discountTotal:5,taxBreakup:[{label:"CGST",pct:9,amount:30},{label:"SGST",pct:9,amount:30},{label:"IGST",pct:0,amount:0}],roundOff:.05,grandTotal:598.4,amountInWords:"Rupees Five Hundred Ninety Eight and Forty Paise Only"},payments:[{id:"PMT-7001",mode:"UPI",ref:"UPI-AXIS-88921",at:a,amount:0}],notes:"Thank you for your business. Medicines once sold cannot be returned without authorization.",terms:["Payment due within 7 days.","All disputes are subject to Gurugram jurisdiction.","Prices inclusive of applicable GST as itemized."],bank:{name:"HDFC Bank",branch:"DLF Phase 2",account:"XXXXXXXX1234",ifsc:"HDFC0000123",upi:"bluewave@hdfcbank"},meta:{createdBy:"ashish",createdAt:a,lastPrintedAt:null}}},[r]),[u,t]=k.useState(""),w=async()=>{try{await navigator.clipboard.writeText(window.location.href),t(`Link copied at ${M(new Date)}`)}catch{t("Could not copy link")}},D=()=>{const a=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),p=document.createElement("a");p.href=URL.createObjectURL(a),p.download=`${s.invoiceId}.json`,p.click(),URL.revokeObjectURL(p.href)},S=()=>{y.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},f=a=>t(a),P=e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(x,{to:"/orders",children:"Orders"}),e.jsx("span",{children:"/"}),e.jsx(x,{to:`/orders/${s.orderId}`,children:s.orderId}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Invoice"})]});return e.jsxs(j.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(j.Header,{className:"card",children:[e.jsxs("div",{className:"l",children:[e.jsx("h1",{children:"Tax Invoice"}),P,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Invoice: ",e.jsx("strong",{children:s.invoiceId})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Order: ",e.jsx(x,{to:`/orders/${s.orderId}`,children:s.orderId})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Issued: ",v(s.issuedAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Due: ",N(s.dueAt)]})]})]}),e.jsxs("div",{className:"r",children:[e.jsx("span",{className:`chip ${s.status.toLowerCase().replace(/\s/g,"-")}`,children:s.status}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:()=>n(-1),children:"Back"}),e.jsx("button",{className:"btnGhost",onClick:w,title:"Copy link",children:"Copy Link"}),e.jsx("button",{className:"btnPrimary",onClick:S,title:"Print",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:D,title:"Export JSON",children:"Export"}),e.jsx("button",{className:"btnGhost",onClick:()=>f("Email sending is disabled in demo."),title:"Email invoice",children:"Email"}),e.jsx("button",{className:"btnDanger",onClick:()=>f("Void action is disabled in demo."),title:"Void invoice",children:"Void"})]})]})]}),u?e.jsx(j.Banner,{children:u}):null,e.jsxs(j.Layout,{children:[e.jsxs("section",{className:"card printable",id:"search-print-area",ref:y,children:[e.jsxs("div",{className:"grid-top",children:[e.jsxs("div",{className:"org",children:[e.jsx("div",{className:"logo",children:"BW"}),e.jsxs("div",{className:"org-meta",children:[e.jsx("h3",{children:s.seller.name}),e.jsx("div",{className:"muted",children:s.seller.address.join(", ")}),e.jsxs("div",{className:"muted",children:[e.jsxs("span",{children:["GSTIN: ",s.seller.gstin]})," • ",e.jsxs("span",{children:["PAN: ",s.seller.pan]})]}),e.jsxs("div",{className:"muted",children:[s.seller.email," • ",s.seller.phone]})]})]}),e.jsxs("div",{className:"inv-meta",children:[e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Invoice No."}),e.jsx("td",{children:s.invoiceId})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Invoice Date"}),e.jsx("td",{children:N(s.issuedAt)})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Order No."}),e.jsx("td",{children:s.orderId})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Channel"}),e.jsx("td",{children:s.channel})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Place of Supply"}),e.jsx("td",{children:s.seller.placeOfSupply})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Currency"}),e.jsx("td",{children:s.currency})]})]})}),e.jsx("div",{className:"barcode","aria-hidden":"true"})]})]}),e.jsxs("div",{className:"grid-party",children:[e.jsxs("div",{className:"party",children:[e.jsx("h4",{children:"Bill To"}),e.jsx("div",{className:"name",children:s.buyer.company}),e.jsx("div",{className:"muted",children:s.buyer.name}),e.jsx("div",{className:"muted",children:s.buyer.address.join(", ")}),e.jsxs("div",{className:"muted",children:["GSTIN: ",s.buyer.gstin]}),e.jsxs("div",{className:"muted",children:[s.buyer.email," • ",s.buyer.phone]})]}),e.jsxs("div",{className:"party",children:[e.jsx("h4",{children:"Ship To"}),e.jsx("div",{className:"name",children:s.buyer.company}),e.jsx("div",{className:"muted",children:s.buyer.shipping.join(", ")})]}),e.jsxs("div",{className:"party pay",children:[e.jsx("h4",{children:"Pay To"}),e.jsxs("div",{className:"muted",children:[s.bank.name," – ",s.bank.branch]}),e.jsxs("div",{className:"muted",children:["A/C: ",s.bank.account," • IFSC: ",s.bank.ifsc]}),e.jsxs("div",{className:"muted",children:["UPI: ",s.bank.upi]}),e.jsx("div",{className:"qr","aria-hidden":"true"})]})]}),e.jsx("div",{className:"items",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{style:{minWidth:220},children:"Item"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"UoM"}),e.jsx("th",{children:"Rate"}),e.jsx("th",{children:"Disc"}),e.jsx("th",{children:"Tax %"}),e.jsx("th",{children:"Tax Amt"}),e.jsx("th",{style:{textAlign:"right"},children:"Line Total"})]})}),e.jsx("tbody",{children:s.items.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.lineNo}),e.jsxs("td",{children:[e.jsx("div",{className:"itm",children:a.name}),e.jsx("div",{className:"muted mono",children:a.sku})]}),e.jsx("td",{className:"mono",children:a.hsn}),e.jsx("td",{className:"mono",children:a.qty}),e.jsx("td",{children:a.uom}),e.jsx("td",{className:"mono",children:o(a.rate)}),e.jsx("td",{className:"mono",children:o(a.discount)}),e.jsxs("td",{className:"mono",children:[a.taxPct,"%"]}),e.jsx("td",{className:"mono",children:o(a.taxAmt)}),e.jsx("td",{className:"mono ta-r",children:o(a.lineTotal)})]},a.lineNo))})]})}),e.jsxs("div",{className:"grid-summary",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Subtotal"}),e.jsx("div",{className:"v",children:o(s.summary.subTotal)})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Discount"}),e.jsx("div",{className:"v",children:o(s.summary.discountTotal)})]}),s.summary.taxBreakup.map(a=>e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"k",children:[a.label," (",a.pct,"%)"]}),e.jsx("div",{className:"v",children:o(a.amount)})]},a.label)),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"k",children:"Round Off"}),e.jsx("div",{className:"v",children:o(s.summary.roundOff)})]}),e.jsxs("div",{className:"row total",children:[e.jsx("div",{className:"k",children:"Grand Total"}),e.jsx("div",{className:"v",children:o(s.summary.grandTotal)})]})]}),e.jsxs("div",{className:"words",children:["Amount in words: ",e.jsx("strong",{children:s.summary.amountInWords})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"box mini",children:[e.jsx("div",{className:"hdr",children:"Payment Summary"}),e.jsx("ul",{className:"paylist",children:s.payments.map(a=>e.jsxs("li",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mono",children:a.id}),e.jsxs("div",{className:"muted",children:[a.mode," • ",a.ref||"—"]})]}),e.jsx("div",{className:"amt mono",children:o(a.amount)})]},a.id))}),e.jsxs("div",{className:"due",children:[e.jsx("span",{children:"Due Date"}),e.jsx("strong",{children:N(s.dueAt)})]})]}),e.jsxs("div",{className:"box mini",children:[e.jsx("div",{className:"hdr",children:"Meta"}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Created by"}),e.jsx("span",{className:"mono",children:s.meta.createdBy})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Created at"}),e.jsx("span",{children:v(s.meta.createdAt)})]}),e.jsxs("div",{className:"kv",children:[e.jsx("span",{children:"Last printed"}),e.jsx("span",{children:s.meta.lastPrintedAt?v(s.meta.lastPrintedAt):"—"})]})]})]})]}),e.jsxs("div",{className:"notes-terms",children:[e.jsxs("div",{className:"blk",children:[e.jsx("h4",{children:"Notes"}),e.jsx("p",{children:s.notes})]}),e.jsxs("div",{className:"blk",children:[e.jsx("h4",{children:"Terms"}),e.jsx("ul",{children:s.terms.map((a,p)=>e.jsx("li",{children:a},p))})]}),e.jsxs("div",{className:"blk sign",children:[e.jsx("h4",{children:"Authorized Signatory"}),e.jsx("div",{className:"signbox"}),e.jsxs("div",{className:"muted",children:["For ",s.seller.name]})]})]}),e.jsx("div",{className:"footer",children:e.jsx("div",{className:"muted",children:"This is a computer-generated invoice. No signature required."})})]}),e.jsxs("aside",{className:"rail",children:[e.jsxs("div",{className:"card rail-card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(x,{to:`/orders/${s.orderId}`,children:"Order Detail"})}),e.jsx("li",{children:e.jsx(x,{to:`/invoices/${s.invoiceId}`,children:"Open Invoice Page"})}),e.jsx("li",{children:e.jsx(x,{to:"/customers",children:"Customer Directory"})}),e.jsx("li",{children:e.jsx(x,{to:"/reports/sales",children:"Sales Report"})})]})]}),e.jsxs("div",{className:"card rail-card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Invoice generated"}),e.jsx("div",{className:"muted",children:v(s.issuedAt)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Order confirmed"}),e.jsx("div",{className:"muted",children:v(s.issuedAt)})]})]})]})]}),e.jsxs("div",{className:"card rail-card",children:[e.jsx("h3",{children:"Support"}),e.jsx("p",{className:"muted",children:"Need a correction? Reach billing support with the invoice number."}),e.jsx("button",{className:"btnGhost",onClick:()=>f("Support ticketing is disabled in demo."),children:"Raise Ticket"})]})]})]}),e.jsx(L,{open:!!u,title:"Demo",message:u,onClose:()=>t(""),actions:[{label:"Close",onClick:()=>t(""),kind:"btnPrimary"}]})]})};export{B as default};
