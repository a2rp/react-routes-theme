import{d as h,q as A,r as d,j as e,N as S}from"./index-BpMGcZ_2.js";const o="var(--text, #f3f4f6)",r="var(--muted, #a0a0a7)",p="var(--card, #111318)",n="var(--border, #23262d)",l="var(--accent, #5aa9ff)",D="var(--accent-soft, rgba(90,169,255,0.15))",u="var(--radius, 12px)",f="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",j={Wrapper:h.div`
        width: 100%;
        color: ${o};
        padding: 16px;

        /* toggles */
        &[data-compact="on"] table tbody td,
        &[data-compact="on"] table thead th {
            padding-top: 6px;
            padding-bottom: 6px;
        }

        &[data-gridlines="off"] table,
        &[data-gridlines="off"] .card {
            border-color: transparent;
        }

        .card {
            background: ${p};
            border: 1px solid ${n};
            border-radius: ${u};
            box-shadow: ${f};
        }
        a {
            color: ${o};
        }
    `,Toolbar:h.div`
        margin-bottom: 14px;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        .btn {
            background: ${p};
            color: ${o};
            border: 1px solid ${n};
            border-radius: 8px;
            padding: 8px 12px;
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btn:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${D};
        }

        .toggles {
            display: flex;
            gap: 14px;
            align-items: center;
        }
        .toggle {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            color: ${r};
        }
        .toggle input {
            accent-color: currentColor;
        }
    `,PrintArea:h.div`
        width: 100%;
        display: grid;
        gap: 14px;

        .inv-header {
            display: grid;
            grid-template-columns: 1.6fr 1fr;
            gap: 14px;
            align-items: stretch;
        }
        .brand {
            display: grid;
            grid-template-columns: 100px 1fr;
            gap: 14px;
            padding: 14px;
            border: 1px solid ${n};
            border-radius: ${u};
            background: ${p};
            box-shadow: ${f};
        }
        .logo {
            width: 100px;
            height: 100px;
            border: 1px solid ${n};
            border-radius: ${u};
            background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.08),
                transparent
            );
        }
        .seller h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
            margin-bottom: 6px;
        }
        .seller-name {
            font-weight: 700;
        }
        .seller-meta {
            display: flex;
            gap: 8px;
            color: ${r};
            font-size: 12px;
        }

        .doc-meta {
            padding: 14px;
        }
        .doc-meta .status {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 4px 10px;
            border-radius: 999px;
            font-weight: 700;
            margin-bottom: 10px;
            border: 1px solid ${n};
            background: color-mix(in oklab, ${l} 12%, transparent);
            color: ${o};
            text-transform: uppercase;
            letter-spacing: 0.6px;
        }
        .doc-meta .status.paid {
            background: color-mix(in oklab, ${l} 25%, transparent);
        }
        .doc-meta .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px 12px;
            margin-bottom: 8px;
        }
        .doc-meta .k {
            color: ${r};
            display: block;
            font-size: 12px;
        }
        .doc-meta .v {
            font-weight: 600;
        }

        .parties {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
        }
        .party {
            padding: 14px;
        }
        .party h3 {
            font-size: 14px;
            margin-bottom: 6px;
        }
        .party .name {
            font-weight: 700;
            margin-bottom: 4px;
        }
        .party address {
            font-style: normal;
            color: ${o};
        }
        .party .muted {
            color: ${r};
            font-size: 12px;
        }

        .items {
            padding: 0;
            overflow: hidden;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            border: 1px solid ${n};
        }
        thead th {
            text-align: left;
            padding: 10px 10px;
            border-bottom: 1px solid ${n};
            background: ${p};
            color: ${l};
        }
        tbody td {
            padding: 10px 10px;
            border-bottom: 1px solid ${n};
            vertical-align: top;
        }
        tbody tr:hover td {
            background: color-mix(in oklab, ${l} 6%, transparent);
        }
        .num {
            text-align: right;
            white-space: nowrap;
        }
        .pname {
            font-weight: 600;
        }

        .summary {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 14px;
        }
        .pay,
        .terms,
        .stamps,
        .totals {
            padding: 14px;
        }
        .pay .rows {
            display: grid;
            gap: 8px;
        }
        .pay .k {
            color: ${r};
            width: 110px;
            display: inline-block;
        }
        .pay .v {
            font-weight: 600;
        }

        .terms p {
            margin: 6px 0;
        }

        .stamps {
            display: grid;
            grid-template-columns: 110px 1fr 110px;
            align-items: center;
            gap: 16px;
        }
        .stamps .qr {
            text-align: center;
        }
        .stamps .sign .line {
            height: 32px;
            border-bottom: 1px dashed ${n};
            margin-bottom: 4px;
        }
        .stamps .stamp {
            border: 2px dashed ${n};
            border-radius: 8px;
            height: 72px;
            display: grid;
            place-items: center;
            font-weight: 700;
            opacity: 0.8;
        }

        .totals .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            padding: 8px 0;
            border-bottom: 1px dashed ${n};
        }
        .totals .grand {
            font-size: 16px;
            font-weight: 800;
            border-bottom: 0;
            padding-top: 10px;
        }
        .totals .inwords {
            margin-top: 8px;
            font-style: italic;
            color: ${r};
        }
        .totals .meta {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            color: ${r};
            font-size: 12px;
            flex-wrap: wrap;
        }

        .inv-footer {
            border-top: 1px solid ${n};
            padding-top: 10px;
            display: grid;
            gap: 6px;
            color: ${r};
            font-size: 12px;
        }

        @media (max-width: 1100px) {
            .inv-header {
                grid-template-columns: 1fr;
            }
            .parties {
                grid-template-columns: 1fr;
            }
            .summary {
                grid-template-columns: 1fr;
            }
            .stamps {
                grid-template-columns: 1fr 1fr;
            }
        }
    `},x=t=>String(t).padStart(2,"0"),P=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=t=>{const s=t instanceof Date?t:new Date(t);return`${P[s.getDay()]} ${I[s.getMonth()]} ${x(s.getDate())} ${s.getFullYear()}`},g=t=>{const s=t instanceof Date?t:new Date(t);return`${m(s)} ${x(s.getHours())}:${x(s.getMinutes())}:${x(s.getSeconds())}hrs`},C=t=>{const s=d.useMemo(()=>new Date,[]),i=t||"INV-2031";return d.useMemo(()=>({id:i,number:i,status:"Unpaid",currency:"INR",symbol:"₹",issueDate:s,dueDate:new Date(s.getTime()+7*24*60*60*1e3),createdAt:s,updatedAt:s,seller:{name:"Bluewave Traders Pvt. Ltd.",gstin:"22ABCDE1234F1Z5",pan:"ABCDE1234F",address:["5th Floor, Vertex Plaza","MG Road","Bengaluru, KA 560001","India"],email:"accounts@bluewave.example.com",phone:"+91 80 4000 1234",website:"https://bluewave.example.com",bank:{accountName:"Bluewave Traders Pvt. Ltd.",accountNo:"123456789012",ifsc:"HDFC0001234",bankName:"HDFC Bank, MG Road Branch",upi:"bluewave@okhdfcbank"}},buyer:{code:"CUST-1001",name:"Aarav Sharma",company:"Sharma & Co.",email:"billing@sharma-co.example.com",phone:"+91 98765 43210",billTo:["221B Baker Street","Khan Market","New Delhi 110003","India"],shipTo:["Plot 14, Industrial Area","Phase II","Gurugram 122002","India"],gstin:"07ASDFG1234Z1A2"},meta:{poNumber:"PO-7765",salesperson:"PRIYA N",reference:"SO-3456",terms:"Net 7 days. Late fee 2% per 30 days after due date.",notes:"Thanks for your business. For queries, reply to this email with the invoice number."},items:[{no:1,sku:"MED-AMOX-500",name:"Amoxycillin 500mg Capsule",hsn:"3003",batch:"AX500-24-09",exp:"2026-09-30",qty:"2",unit:"Box",rate:"₹ 1,250.00",discount:"₹ 0.00",taxPct:"12%",taxAmt:"₹ 300.00",lineTotal:"₹ 2,800.00"},{no:2,sku:"MED-PARA-650",name:"Paracetamol 650mg Tablet",hsn:"3004",batch:"PA650-24-06",exp:"2027-06-30",qty:"5",unit:"Strip",rate:"₹ 120.00",discount:"₹ 20.00",taxPct:"5%",taxAmt:"₹ 25.00",lineTotal:"₹ 605.00"},{no:3,sku:"MED-ZINC-20",name:"Zinc 20mg Tablet",hsn:"3004",batch:"ZN020-25-01",exp:"2028-01-31",qty:"3",unit:"Bottle",rate:"₹ 220.00",discount:"₹ 0.00",taxPct:"5%",taxAmt:"₹ 33.00",lineTotal:"₹ 693.00"},{no:4,sku:"MED-ORS-1L",name:"ORS 1L Solution",hsn:"3004",batch:"ORS1L-25-07",exp:"2027-07-31",qty:"6",unit:"Bottle",rate:"₹ 75.00",discount:"₹ 0.00",taxPct:"5%",taxAmt:"₹ 22.50",lineTotal:"₹ 472.50"},{no:5,sku:"MED-IBU-400",name:"Ibuprofen 400mg Tablet",hsn:"3004",batch:"IBU400-26-02",exp:"2028-02-28",qty:"2",unit:"Box",rate:"₹ 530.00",discount:"₹ 0.00",taxPct:"12%",taxAmt:"₹ 127.20",lineTotal:"₹ 1,187.20"}],totals:{subTotal:"₹ 5,602.70",discount:"₹ 20.00",tax:"₹ 507.70",roundOff:"₹ 0.60",grandTotal:"₹ 6,091.00",inWords:"Six Thousand Ninety One Only"},footer:{declaration:"Goods once sold will not be taken back. All disputes subject to Bengaluru jurisdiction.",support:"Need help? +91 80 4000 1234 • support@bluewave.example.com"}}),[i,s])},M=()=>{const{invoiceId:t}=A(),s=C(t),i=d.useRef(null),[y,b]=d.useState(!1),[v,w]=d.useState(!1),[N,k]=d.useState(!0),$=()=>{i.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},T=async()=>{try{await navigator.clipboard.writeText(window.location.href),b(!0),setTimeout(()=>b(!1),2e3)}catch{}};return e.jsxs(j.Wrapper,{"data-gridlines":N?"on":"off","data-compact":v?"on":"off",children:[e.jsx("style",{children:`
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
      `}),e.jsxs(j.Toolbar,{className:"card","aria-label":"Invoice actions",children:[e.jsxs("div",{className:"left",children:[e.jsx(S,{to:`/invoices/${s.id}`,className:"btn",children:"Back to Invoice"}),e.jsx("button",{className:"btn",onClick:$,children:"Print"}),e.jsx("button",{className:"btn",onClick:T,children:y?"Link Copied":"Copy Link"})]}),e.jsxs("div",{className:"right toggles",children:[e.jsxs("label",{className:"toggle",children:[e.jsx("input",{type:"checkbox",checked:v,onChange:()=>w(a=>!a)}),e.jsx("span",{children:"Compact rows"})]}),e.jsxs("label",{className:"toggle",children:[e.jsx("input",{type:"checkbox",checked:N,onChange:()=>k(a=>!a)}),e.jsx("span",{children:"Show gridlines"})]})]})]}),e.jsxs(j.PrintArea,{id:"search-print-area",ref:i,children:[e.jsxs("header",{className:"inv-header",children:[e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"logo","aria-label":"Company logo"}),e.jsxs("div",{className:"seller",children:[e.jsx("h1",{children:"Tax Invoice"}),e.jsx("div",{className:"seller-name",children:s.seller.name}),e.jsxs("div",{className:"seller-meta",children:[e.jsxs("span",{children:["GSTIN: ",s.seller.gstin]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["PAN: ",s.seller.pan]}),e.jsx("span",{children:"•"}),e.jsx("a",{href:s.seller.website,target:"_blank",rel:"noreferrer",children:s.seller.website})]}),e.jsxs("div",{className:"seller-meta",children:[e.jsx("span",{children:s.seller.email}),e.jsx("span",{children:"•"}),e.jsx("span",{children:s.seller.phone})]})]})]}),e.jsxs("div",{className:"doc-meta card",children:[e.jsx("div",{className:`status ${s.status.toLowerCase()}`,children:s.status}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Invoice #"}),e.jsx("span",{className:"v",children:s.number})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Issue Date"}),e.jsx("span",{className:"v",children:m(s.issueDate)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Due Date"}),e.jsx("span",{className:"v",children:m(s.dueDate)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Currency"}),e.jsx("span",{className:"v",children:s.currency})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Salesperson"}),e.jsx("span",{className:"v",children:s.meta.salesperson})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"PO #"}),e.jsx("span",{className:"v",children:s.meta.poNumber})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Reference"}),e.jsx("span",{className:"v",children:s.meta.reference})]})]})]})]}),e.jsxs("section",{className:"parties",children:[e.jsxs("div",{className:"party card",children:[e.jsx("h3",{children:"From"}),e.jsx("div",{className:"name",children:s.seller.name}),e.jsx("address",{children:s.seller.address.map((a,c)=>e.jsx("div",{children:a},c))})]}),e.jsxs("div",{className:"party card",children:[e.jsx("h3",{children:"Bill To"}),e.jsx("div",{className:"name",children:s.buyer.company}),e.jsxs("div",{className:"muted",children:[s.buyer.name," · ",s.buyer.phone]}),e.jsx("address",{children:s.buyer.billTo.map((a,c)=>e.jsx("div",{children:a},c))}),e.jsxs("div",{className:"muted",children:["GSTIN: ",s.buyer.gstin]})]}),e.jsxs("div",{className:"party card",children:[e.jsx("h3",{children:"Ship To"}),e.jsx("address",{children:s.buyer.shipTo.map((a,c)=>e.jsx("div",{children:a},c))})]})]}),e.jsx("section",{className:"items card",children:e.jsxs("table",{"aria-label":"Invoice items",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Item / SKU"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{children:"Unit"}),e.jsx("th",{className:"num",children:"Rate"}),e.jsx("th",{className:"num",children:"Disc."}),e.jsx("th",{className:"num",children:"Tax %"}),e.jsx("th",{className:"num",children:"Tax Amt"}),e.jsx("th",{className:"num",children:"Line Total"})]})}),e.jsx("tbody",{children:s.items.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.no}),e.jsxs("td",{children:[e.jsx("div",{className:"pname",children:a.name}),e.jsx("div",{className:"muted",children:a.sku})]}),e.jsx("td",{children:a.hsn}),e.jsx("td",{children:a.batch}),e.jsx("td",{children:m(a.exp)}),e.jsx("td",{className:"num",children:a.qty}),e.jsx("td",{children:a.unit}),e.jsx("td",{className:"num",children:a.rate}),e.jsx("td",{className:"num",children:a.discount}),e.jsx("td",{className:"num",children:a.taxPct}),e.jsx("td",{className:"num",children:a.taxAmt}),e.jsx("td",{className:"num",children:a.lineTotal})]},a.no))})]})}),e.jsxs("section",{className:"summary",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"card pay",children:[e.jsx("h3",{children:"Payment"}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"UPI"}),e.jsx("span",{className:"v",children:s.seller.bank.upi})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Account"}),e.jsx("span",{className:"v",children:s.seller.bank.accountNo})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"IFSC"}),e.jsx("span",{className:"v",children:s.seller.bank.ifsc})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Bank"}),e.jsx("span",{className:"v",children:s.seller.bank.bankName})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"A/c Name"}),e.jsx("span",{className:"v",children:s.seller.bank.accountName})]})]})]}),e.jsxs("div",{className:"card terms",children:[e.jsx("h3",{children:"Terms & Notes"}),e.jsx("p",{className:"muted",children:s.meta.terms}),e.jsx("p",{className:"muted",children:s.meta.notes})]}),e.jsxs("div",{className:"card stamps",children:[e.jsxs("div",{className:"qr",children:[e.jsxs("svg",{viewBox:"0 0 80 80",width:"80",height:"80","aria-label":"QR",children:[e.jsx("rect",{x:"0",y:"0",width:"80",height:"80",fill:"var(--card)",stroke:"var(--border)"}),e.jsx("rect",{x:"6",y:"6",width:"20",height:"20",fill:"var(--text)"}),e.jsx("rect",{x:"54",y:"6",width:"20",height:"20",fill:"var(--text)"}),e.jsx("rect",{x:"6",y:"54",width:"20",height:"20",fill:"var(--text)"}),e.jsx("rect",{x:"26",y:"26",width:"28",height:"28",fill:"var(--text)"})]}),e.jsx("div",{className:"muted",children:"Scan to pay"})]}),e.jsxs("div",{className:"sign",children:[e.jsx("div",{className:"line"}),e.jsx("div",{className:"muted",children:"Authorized Signatory"})]}),e.jsx("div",{className:"stamp",children:"Company Seal"})]})]}),e.jsx("div",{className:"right",children:e.jsxs("div",{className:"card totals",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Subtotal"}),e.jsx("span",{children:s.totals.subTotal})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Discount"}),e.jsx("span",{children:s.totals.discount})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Tax"}),e.jsx("span",{children:s.totals.tax})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Round Off"}),e.jsx("span",{children:s.totals.roundOff})]}),e.jsxs("div",{className:"grand row",children:[e.jsx("span",{children:"Grand Total"}),e.jsx("span",{children:s.totals.grandTotal})]}),e.jsxs("div",{className:"inwords",children:["Amount in words: ",s.totals.inWords]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Generated: ",g(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",g(s.updatedAt)]})]})]})})]}),e.jsxs("footer",{className:"inv-footer",children:[e.jsx("div",{className:"decl",children:s.footer.declaration}),e.jsx("div",{className:"support",children:s.footer.support}),e.jsxs("div",{className:"tiny",children:["Printed on ",g(new Date)," • Page 1 of 1"]})]})]})]})};export{M as default};
