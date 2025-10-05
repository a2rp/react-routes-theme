import{d as l,q as se,u as ae,r as h,j as e,N as g}from"./index-BM8H5dnP.js";const j="var(--text, #f3f4f6)",c="var(--muted, #a0a0a7)",t="var(--card, #111318)",r="var(--border, #23262d)",n="var(--accent, #5aa9ff)",J="var(--accent-soft, rgba(90,169,255,0.15))",K="var(--radius, 16px)",Z="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",p={Page:l.div`
        padding: 18px 0 56px;
        color: ${j};
    `,HeadBar:l.header`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 16px;
        padding: 14px 16px;
        border-radius: ${K};
        border: 1px solid ${r};
        background: ${t};
        box-shadow: ${Z};
        margin-bottom: 12px;

        h1 {
            font-size: 20px;
            letter-spacing: 0.3px;
        }
        .meta {
            margin-top: 4px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            color: ${c};
            font-size: 12px;
        }
        .meta a {
            color: ${c};
        }
        .meta a:hover {
            color: ${n};
        }

        .actions {
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
        .toggles {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-top: 8px;
        }
        .toggle {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            color: ${c};
            font-size: 13px;
        }

        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${r};
            background: ${t};
            color: ${j};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                background 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${n};
            color: ${n};
            box-shadow: 0 0 0 3px ${J};
        }
        .btnGhost:hover {
            border-color: ${n};
            color: ${n};
        }
    `,Banner:l.div`
        margin: 10px 0 12px;
        padding: 10px 12px;
        border: 1px solid ${r};
        border-radius: 10px;
        background: color-mix(in oklab, ${n} 10%, transparent);
    `,Sheet:l.div`
        border: 1px solid ${r};
        border-radius: ${K};
        background: ${t};
        box-shadow: ${Z};
        padding: 18px;

        .sheetHeader {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 16px;
            margin-bottom: 12px;
            border-bottom: 1px dashed ${r};
            padding-bottom: 12px;
        }

        .brand {
            display: flex;
            gap: 12px;
            align-items: center;
            .logo {
                width: 48px;
                height: 48px;
                border-radius: 12px;
                border: 1px solid ${r};
                background: ${t};
                display: grid;
                place-items: center;
                overflow: hidden;
            }
            .logo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .logo .fallback {
                font-weight: 700;
                color: ${n};
            }
            h2 {
                font-size: 18px;
            }
            .muted {
                color: ${c};
            }
        }

        .ident {
            display: grid;
            gap: 6px;
            min-width: 260px;
            .k {
                color: ${c};
                display: inline-block;
                width: 96px;
            }
            .v {
                color: ${j};
                font-weight: 600;
            }
        }
    `,Parties:l.section`
        display: grid;
        gap: 12px;
        grid-template-columns: 1fr;
        margin: 12px 0 6px;

        @media (min-width: 980px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        .party {
            border: 1px solid ${r};
            border-radius: 12px;
            background: color-mix(in oklab, ${t} 98%, transparent);
            padding: 12px 14px;
            h3 {
                font-size: 14px;
                margin-bottom: 6px;
            }
            .name {
                font-weight: 700;
            }
            .muted {
                color: ${c};
            }
        }
    `,Items:l.section`
        margin-top: 10px;

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            border: 1px solid ${r};
            border-radius: 12px;
            overflow: hidden;
            background: color-mix(in oklab, ${t} 98%, transparent);
        }
        thead th {
            text-align: left;
            background: ${t};
            color: ${n};
            border-bottom: 1px solid ${r};
            padding: 10px;
        }
        td {
            border-bottom: 1px solid ${r};
            padding: 10px;
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .right {
            text-align: right;
        }
        .title {
            font-weight: 600;
        }
        .sub {
            font-size: 12px;
        }
    `,Totals:l.section`
        display: grid;
        gap: 14px;
        margin-top: 14px;
        grid-template-columns: 1fr;
        @media (min-width: 900px) {
            grid-template-columns: 1fr 1fr;
        }

        .cardish {
            border: 1px solid ${r};
            border-radius: 12px;
            background: color-mix(in oklab, ${t} 98%, transparent);
            padding: 12px 14px;
        }

        .notes h4 {
            margin-bottom: 8px;
        }
        .notes p {
            margin-bottom: 6px;
        }

        .numbers .row {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 12px;
            padding: 6px 0;
            border-bottom: 1px dashed ${r};
        }
        .numbers .row:last-child {
            border-bottom: none;
        }
        .numbers .head {
            color: ${c};
            font-weight: 600;
        }
        .numbers .grand span:last-child {
            font-weight: 800;
            font-size: 16px;
        }
        .numbers .amtWords {
            margin-top: 8px;
        }
        .tax {
            margin-top: 6px;
        }
    `,SheetFooter:l.footer`
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        border-top: 1px dashed ${r};
        padding-top: 12px;

        .qr .code {
            font-family: monospace;
            border: 1px dashed ${r};
            display: inline-block;
            padding: 6px 8px;
            border-radius: 8px;
            background: color-mix(in oklab, ${t} 96%, transparent);
        }

        .sign {
            text-align: right;
        }
        .sign .line {
            height: 1px;
            width: 220px;
            background: ${r};
            margin: 22px 0 6px auto;
        }
    `,Secondary:l.nav`
        margin-top: 14px;
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${c};
        .crumb,
        .link {
            color: ${c};
            border: 1px solid ${r};
            border-radius: 8px;
            padding: 6px 10px;
            background: ${t};
        }
        .crumb:hover,
        .link:hover {
            color: ${n};
            border-color: ${n};
            box-shadow: 0 0 0 3px ${J};
        }
        .current {
            color: ${j};
        }
        .spacer {
            flex: 1;
        }
    `},m=(i,b)=>{const d=i instanceof Date?i:new Date(i),u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=s=>String(s).padStart(2,"0"),x=`${u[d.getDay()]} ${v[d.getMonth()]} ${o(d.getDate())} ${d.getFullYear()}`;return b?`${x} ${o(d.getHours())}:${o(d.getMinutes())}:${o(d.getSeconds())}hrs`:x},Q={"ORD-3456":{orderId:"ORD-3456",docType:"Sales Order",orderDate:"2025-10-04T15:38:20+05:30",dueDate:"2025-10-10T00:00:00+05:30",company:{name:"Bluewave Traders Pvt. Ltd.",gstin:"22ABCDE1234F1Z5",pan:"ABCDE1234F",address:"5th Floor, DLF Cyber City, Phase III, Gurugram, HR 122002, India",phone:"+91 124 555 0101",email:"billing@bluewave.example.com",website:"https://bluewave.example.com",logo:"/logo.svg"},customer:{code:"CUST-1001",name:"Aarav Sharma",company:"Bluewave Retail Partner",email:"aarav.sharma@example.com",phone:"+91 98765 43210",gstin:"22ABCDE1234F1Z5",billing:{line1:"221B Baker Street",line2:"Khan Market",city:"New Delhi",state:"DL",zip:"110003",country:"India"},shipping:{line1:"Plot 14, Industrial Area",line2:"Phase 2",city:"Gurugram",state:"HR",zip:"122002",country:"India"}},meta:{preparedBy:"Ashish Ranjan",approvedBy:"Operations",channel:"Online",terms:"Net 7 days",notes:"Handle with care. Keep away from sunlight."},items:[{sl:1,sku:"MED-AMOX-500",name:"Amoxicillin 500mg (Capsule)",hsn:"3004",batch:"AMX0925A",exp:"2027-03-31",qty:10,uom:"Strip",price:120,taxRate:12,lineTotal:1344,taxAmount:144},{sl:2,sku:"MED-PARA-650",name:"Paracetamol 650mg (Tablet)",hsn:"3004",batch:"PAR0825B",exp:"2026-12-31",qty:20,uom:"Strip",price:45,taxRate:12,lineTotal:1008,taxAmount:108},{sl:3,sku:"MED-ORS-200",name:"ORS 200ml (Liquid)",hsn:"3004",batch:"ORS0725C",exp:"2026-08-31",qty:12,uom:"Bottle",price:30,taxRate:5,lineTotal:378,taxAmount:18}],totals:{subTotal:2500,discount:150,shipping:0,taxBreakup:[{rate:5,amount:18},{rate:12,amount:252}],roundOff:-0,grandTotal:2370,amountWords:"Two Thousand Three Hundred Seventy Rupees Only"},stamps:{createdAt:"2025-10-04T15:10:05+05:30",updatedAt:"2025-10-04T15:38:20+05:30"}}},re=i=>({...Q["ORD-3456"],orderId:i}),ne=()=>{var f,N,$,w,k,T,S,A,D,B,O,R,P,I,F,C,M,z,E,L,G,H,q,W,X,U;const{orderId:i}=se(),b=ae(),d=h.useRef(null),[u,v]=h.useState(!0),[o,x]=h.useState(""),s=h.useMemo(()=>Q[i]||re(i||"ORD-XXXX"),[i]);h.useEffect(()=>{if(!o)return;const a=setTimeout(()=>x(""),3e3);return()=>clearTimeout(a)},[o]);const V=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},Y=async()=>{try{await navigator.clipboard.writeText(window.location.href),x("Link copied.")}catch{x("Unable to copy link.")}},_=()=>b(`/orders/${s.orderId}`),y=a=>`${a.line1}, ${a.line2}, ${a.city} ${a.zip}, ${a.state}, ${a.country}`;return e.jsxs(p.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(p.HeadBar,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:(f=s.company)==null?void 0:f.name}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:(N=s.company)==null?void 0:N.address}),e.jsx("span",{children:"•"}),e.jsx("span",{children:($=s.company)==null?void 0:$.phone}),e.jsx("span",{children:"•"}),e.jsx("a",{href:(w=s.company)==null?void 0:w.website,target:"_blank",rel:"noreferrer",children:(k=s.company)==null?void 0:k.website})]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"actions",children:[e.jsx("button",{className:"btnGhost",onClick:_,title:"Back to Order",children:"Back"}),e.jsx("button",{className:"btnGhost",onClick:Y,title:"Copy share link",children:"Copy Link"}),e.jsx("button",{className:"btnPrimary",onClick:V,title:"Print this order",children:"Print"})]}),e.jsx("div",{className:"toggles",children:e.jsxs("label",{className:"toggle",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:a=>v(a.target.checked)}),e.jsx("span",{children:"Show tax summary"})]})})]})]}),o?e.jsx(p.Banner,{children:o}):null,e.jsxs(p.Sheet,{id:"search-print-area",ref:d,className:"card",children:[e.jsxs("header",{className:"sheetHeader",children:[e.jsxs("div",{className:"brand",children:[e.jsxs("div",{className:"logo","aria-hidden":"true",children:[e.jsx("img",{src:(T=s.company)==null?void 0:T.logo,alt:"",onError:a=>{a.currentTarget.style.display="none"}}),e.jsx("div",{className:"fallback",children:(((S=s.company)==null?void 0:S.name)||"BW").slice(0,2)})]}),e.jsxs("div",{children:[e.jsx("h2",{children:s.docType}),e.jsx("div",{className:"muted",children:(A=s.company)==null?void 0:A.name})]})]}),e.jsxs("div",{className:"ident",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Order No"}),e.jsx("span",{className:"v",children:s.orderId})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Order Date"}),e.jsx("span",{className:"v",children:m(s.orderDate,!0)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Due Date"}),e.jsx("span",{className:"v",children:m(s.dueDate)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Channel"}),e.jsx("span",{className:"v",children:(D=s.meta)==null?void 0:D.channel})]})]})]}),e.jsxs(p.Parties,{children:[e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Bill To"}),e.jsx("div",{className:"name",children:(B=s.customer)==null?void 0:B.name}),e.jsx("div",{className:"muted",children:(O=s.customer)==null?void 0:O.company}),e.jsx("div",{className:"muted",children:y((R=s.customer)==null?void 0:R.billing)}),e.jsxs("div",{className:"muted",children:["GSTIN: ",(P=s.customer)==null?void 0:P.gstin]}),e.jsxs("div",{className:"muted",children:[(I=s.customer)==null?void 0:I.email," • ",(F=s.customer)==null?void 0:F.phone]})]}),e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Ship To"}),e.jsx("div",{className:"name",children:(C=s.customer)==null?void 0:C.name}),e.jsx("div",{className:"muted",children:y((M=s.customer)==null?void 0:M.shipping)}),e.jsxs("div",{className:"muted",children:["Contact: ",(z=s.customer)==null?void 0:z.phone]})]}),e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Account"}),e.jsxs("div",{className:"muted",children:["GSTIN: ",(E=s.company)==null?void 0:E.gstin]}),e.jsxs("div",{className:"muted",children:["PAN: ",(L=s.company)==null?void 0:L.pan]}),e.jsxs("div",{className:"muted",children:["Prepared: ",(G=s.meta)==null?void 0:G.preparedBy]}),e.jsxs("div",{className:"muted",children:["Approved: ",(H=s.meta)==null?void 0:H.approvedBy]})]})]}),e.jsx(p.Items,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{style:{minWidth:220},children:"Item"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"right",children:"Qty"}),e.jsx("th",{children:"UOM"}),e.jsx("th",{className:"right",children:"Rate"}),e.jsx("th",{children:"Tax %"}),e.jsx("th",{className:"right",children:"Line Total"})]})}),e.jsx("tbody",{children:s.items.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.sl}),e.jsxs("td",{children:[e.jsx("div",{className:"title",children:a.name}),e.jsx("div",{className:"sub muted",children:a.sku})]}),e.jsx("td",{children:a.hsn}),e.jsx("td",{children:a.batch}),e.jsx("td",{children:m(a.exp)}),e.jsx("td",{className:"right",children:a.qty}),e.jsx("td",{children:a.uom}),e.jsx("td",{className:"right",children:a.price.toFixed(2)}),e.jsxs("td",{children:[a.taxRate,"%"]}),e.jsx("td",{className:"right",children:a.lineTotal.toFixed(2)})]},a.sl))})]})}),e.jsxs(p.Totals,{children:[e.jsxs("div",{className:"notes cardish",children:[e.jsx("h4",{children:"Notes & Terms"}),e.jsx("p",{children:(q=s.meta)==null?void 0:q.notes}),e.jsxs("ul",{className:"muted",children:[e.jsxs("li",{children:["Payment Terms: ",(W=s.meta)==null?void 0:W.terms]}),e.jsxs("li",{children:["Created: ",m((X=s.stamps)==null?void 0:X.createdAt,!0)]}),e.jsxs("li",{children:["Updated: ",m((U=s.stamps)==null?void 0:U.updatedAt,!0)]})]})]}),e.jsxs("div",{className:"numbers cardish",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Sub Total"}),e.jsx("span",{children:s.totals.subTotal.toFixed(2)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Discount"}),e.jsxs("span",{children:["-",s.totals.discount.toFixed(2)]})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Shipping"}),e.jsx("span",{children:s.totals.shipping.toFixed(2)})]}),u&&e.jsxs("div",{className:"tax",children:[e.jsxs("div",{className:"row head",children:[e.jsx("span",{children:"Tax Summary"}),e.jsx("span",{children:"Amount"})]}),s.totals.taxBreakup.map((a,ee)=>e.jsxs("div",{className:"row",children:[e.jsxs("span",{children:["GST @ ",a.rate,"%"]}),e.jsx("span",{children:a.amount.toFixed(2)})]},ee))]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Round Off"}),e.jsx("span",{children:s.totals.roundOff.toFixed(2)})]}),e.jsxs("div",{className:"row grand",children:[e.jsx("span",{children:"Grand Total"}),e.jsx("span",{children:s.totals.grandTotal.toFixed(2)})]}),e.jsx("div",{className:"amtWords muted",children:s.totals.amountWords})]})]}),e.jsxs(p.SheetFooter,{children:[e.jsx("div",{className:"left",children:e.jsxs("div",{className:"qr",children:[e.jsx("div",{className:"code",children:s.orderId}),e.jsx("div",{className:"muted",children:"Scan / verify against portal"})]})}),e.jsxs("div",{className:"right sign",children:[e.jsx("div",{className:"line"}),e.jsx("div",{children:"Authorised Signatory"})]})]})]}),e.jsxs(p.Secondary,{children:[e.jsx(g,{to:`/orders/${s.orderId}`,className:"crumb",children:"View Order"}),e.jsx("span",{children:"›"}),e.jsx("span",{className:"current",children:"Print"}),e.jsx("div",{className:"spacer"}),e.jsx(g,{to:"/invoices",className:"link",children:"Invoices"}),e.jsx(g,{to:"/receipts",className:"link",children:"Receipts"}),e.jsx(g,{to:"/reports/sales",className:"link",children:"Sales Report"})]})]})};export{ne as default};
