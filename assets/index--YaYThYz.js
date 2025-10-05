import{d as r,u as D,r as m,j as e,L as $,N as t}from"./index-DwhKQ_MC.js";const p="var(--text, #f3f4f6)",h="var(--muted, #a0a0a7)",c="var(--card, #111318)",d="var(--border, #23262d)",a="var(--accent, #5aa9ff)",x="var(--accent-soft, rgba(90,169,255,0.15))",P="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",A=r.div`
    width: 100%;
    color: ${p};
    display: flex;
    flex-direction: column;
    gap: 16px;

    .muted {
        color: ${h};
    }
    .card {
        background: ${c};
        border: 1px solid ${d};
        border-radius: 12px;
        box-shadow: ${P};
    }
`,S=r.header`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    padding: 16px;

    h1 {
        margin-top: 6px;
        letter-spacing: 0.2px;
    }

    .crumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        .crumb {
            color: ${p};
        }
        .sep {
            color: ${h};
            user-select: none;
        }
        .current {
            color: ${h};
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
    }
`,R=r.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    button {
        background: ${c};
        color: ${p};
        border: 1px solid ${d};
        padding: 8px 12px;
        border-radius: 8px;
        transition: border-color 0.25s, box-shadow 0.25s, color 0.25s,
            background 0.25s;
        cursor: pointer;
    }
    button:hover {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${x};
    }
`,L=r.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    a {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid ${d};
        text-decoration: none;
    }
    a:hover {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${x};
    }
`,M=r.main`
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 16px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`,O=r.section`
    padding: 14px;

    .paneTitle {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 10px;

        h3 {
            letter-spacing: 0.3px;
        }
    }
`,E=r.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
`,I=r.span`
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid ${d};
    background: rgba(0, 0, 0, 0.1);
    font-size: 12px;
    letter-spacing: 0.2px;
`,q=r.div`
    padding: 12px;
    border: 1px solid ${d};
    border-radius: 10px;
    background: color-mix(in oklab, ${c} 96%, transparent);
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s, transform 0.04s,
        background 0.25s;
    cursor: pointer;

    &:hover {
        border-color: ${a};
        box-shadow: 0 0 0 3px ${x};
    }
    &[data-active="true"] {
        border-color: ${a};
        background: color-mix(in oklab, ${a} 10%, ${c});
    }
    &:active {
        transform: translateY(1px);
    }

    .row1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
        .name {
            letter-spacing: 0.2px;
        }
    }
    .row2 {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 8px;
    }
`,Q=r.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 6px 10px;
    font-size: 12px;
    margin-bottom: 10px;

    .k {
        color: ${h};
    }
    .v a {
        text-decoration: none;
    }
    .v a:hover {
        color: ${a};
    }
`,U=r.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding-top: 6px;
    border-top: 1px dashed ${d};

    button {
        border: 1px solid ${d};
        padding: 6px 10px;
        border-radius: 8px;
        background: ${c};
        color: ${p};
        cursor: pointer;
        transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
    }
    button:hover {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${x};
    }
`,G=r.div`
    margin-top: 12px;
    border-top: 1px solid ${d};
    padding-top: 12px;

    .title {
        font-weight: 600;
        margin-bottom: 6px;
    }
    .links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
    }
    a {
        padding: 6px 8px;
        border: 1px solid ${d};
        border-radius: 8px;
        text-decoration: none;
    }
    a:hover {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${x};
    }
`,B=r.section`
    padding: 14px;

    .paneTitle {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 12px;
        .meta {
            font-size: 12px;
        }
    }
`,z=r.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 12px;

    a,
    button {
        border: 1px solid ${d};
        padding: 8px 12px;
        border-radius: 8px;
        background: ${c};
        color: ${p};
        text-decoration: none;
        transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
            background 0.25s;
        cursor: pointer;
    }
    a:hover,
    button:hover {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${x};
    }
`,F=r.div`
    border: 1px solid ${d};
    border-radius: 10px;
    padding: 16px;
    background: color-mix(in oklab, ${c} 98%, transparent);

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
        h2 {
            letter-spacing: 0.4px;
        }
        .company {
            text-align: right;
        }
    }

    .meta {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-bottom: 12px;
        .k {
            color: ${h};
            font-size: 12px;
        }
        .v {
            font-size: 13px;
        }
        .col {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 4px 8px;
        }
    }

    table.items {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0 12px 0;
        font-size: 13px;
    }
    table.items th,
    table.items td {
        padding: 8px 10px;
        border-bottom: 1px solid ${d};
    }
    table.items th {
        color: ${a};
        text-align: left;
    }
    .num {
        text-align: right;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        .stamp {
            border: 1px solid ${d};
            padding: 8px 12px;
            border-radius: 8px;
        }
    }
`,V=r.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 6px;
    width: 320px;
    margin-left: auto;

    .row {
        display: contents;
    }
    .row div:nth-child(1) {
        color: ${h};
    }
    .row div:nth-child(2) {
        text-align: right;
    }
    .grand div:nth-child(1) {
        color: ${p};
        font-weight: 700;
    }
    .grand div:nth-child(2) {
        font-weight: 700;
    }
`,N=r.div`
    padding: 14px;
    h2 {
        margin-bottom: 8px;
    }
    .links {
        margin-top: 8px;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        color: ${a};
    }
`,H=r.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    z-index: 1000;
`,K=r.div`
    width: min(520px, 92vw);
    padding: 16px;
    border-radius: 12px;
    border: 1px solid ${d};
    background: ${c};
    box-shadow: ${P};

    h3 {
        margin-bottom: 6px;
    }
    p.muted {
        margin-bottom: 14px;
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
    button {
        border: 1px solid ${d};
        padding: 8px 12px;
        border-radius: 8px;
        background: ${c};
        color: ${p};
        cursor: pointer;
        transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
    }
    button:hover {
        border-color: ${a};
        color: ${a};
        box-shadow: 0 0 0 3px ${x};
    }
`;function f(s){return(s?new Date(s):new Date).toDateString()}function _(s){return`${(s?new Date(s):new Date).toLocaleTimeString("en-GB",{hour12:!1})}hrs`}function w(s){const n=s?new Date(s):new Date;return`${n.toDateString()} ${_(n)}`}const b=[{id:"tpl-invoice-modern",name:"Invoice — Modern",entity:"invoice",paper:"A4",margins:"16mm",default:!0,createdAt:"2025-09-12T11:22:13+05:30",updatedAt:"2025-10-04T15:38:20+05:30",routePreview:"/print/invoice/INV-2031"},{id:"tpl-invoice-compact",name:"Invoice — Compact",entity:"invoice",paper:"A4",margins:"10mm",default:!1,createdAt:"2025-08-03T10:05:43+05:30",updatedAt:"2025-09-28T19:07:02+05:30",routePreview:"/print/invoice/INV-1022"},{id:"tpl-quote-clean",name:"Quote — Clean",entity:"quote",paper:"A4",margins:"14mm",default:!1,createdAt:"2025-07-21T09:31:00+05:30",updatedAt:"2025-09-15T18:10:40+05:30",routePreview:"/print/quote/Q-5409"},{id:"tpl-receipt-mini",name:"Receipt — Mini",entity:"receipt",paper:"80mm roll",margins:"3mm",default:!1,createdAt:"2025-06-11T15:20:00+05:30",updatedAt:"2025-09-30T08:00:00+05:30",routePreview:"/receipts"},{id:"tpl-sticker-label",name:"Sticker — Shipping Label",entity:"sticker",paper:"4x6in",margins:"0",default:!1,createdAt:"2025-08-30T12:12:12+05:30",updatedAt:"2025-09-12T12:12:12+05:30",routePreview:"/print/sticker/LBL-1001"}],Y={name:"Acme Healthcare Pvt. Ltd.",gstin:"29ABCDE1234F1Z5",address:"14, Phoenix Park, Indiranagar, Bengaluru, KA 560038",email:"billing@acmehealth.example",phone:"+91 80 0000 0000"},W={code:"CUST-1001",name:"Ashok Kumar",address:"32/2 Lakeview Residency, Sector 21, Gurugram, HR 122016",email:"ashok.k@example",phone:"+91 98 7654 3210"},X={no:"INV-2031",date:"2025-10-04T15:38:20+05:30",items:[{sku:"MED-AMOX-500",name:"Amoxicillin 500mg Capsules",qty:2,mrp:240,rate:210,gst:12,amount:420},{sku:"MED-PARA-650",name:"Paracetamol 650mg Tablets",qty:1,mrp:90,rate:75,gst:5,amount:75},{sku:"MED-VITC-1K",name:"Vitamin C 1000mg Effervescent",qty:1,mrp:350,rate:299,gst:12,amount:299}],totals:{subTotal:794,tax:78,roundOff:0,grand:872},payment:{status:"Unpaid",due:"2025-10-20T00:00:00+05:30",method:"—"}};function Z({open:s,title:n,message:o,onClose:l}){return s?e.jsx(H,{role:"dialog","aria-modal":"true","aria-labelledby":"modalTitle",children:e.jsxs(K,{className:"card",role:"document",children:[e.jsx("h3",{id:"modalTitle",children:n}),e.jsx("p",{className:"muted",children:o}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:l,autoFocus:!0,children:"Okay"})})]})}):null}function J({company:s,customer:n,invoice:o}){return e.jsxs(F,{id:"search-print-area",children:[e.jsxs("div",{className:"header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Invoice"}),e.jsxs("div",{className:"muted",children:["#",o.no]})]}),e.jsxs("div",{className:"company",children:[e.jsx("strong",{children:s.name}),e.jsx("div",{children:s.address}),e.jsxs("div",{children:[s.email," · ",s.phone]}),e.jsxs("div",{children:["GSTIN: ",s.gstin]})]})]}),e.jsxs("div",{className:"meta card",children:[e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"k",children:"Billed To"}),e.jsxs("div",{className:"v",children:[e.jsx("strong",{children:n.name}),e.jsx("br",{}),n.address,e.jsx("br",{}),n.email," · ",n.phone,e.jsx("br",{}),"Code: ",n.code]})]}),e.jsxs("div",{className:"col",children:[e.jsx("div",{className:"k",children:"Invoice Date"}),e.jsx("div",{className:"v",children:f(o.date)}),e.jsx("div",{className:"k",children:"Generated At"}),e.jsx("div",{className:"v",children:w(o.date)}),e.jsx("div",{className:"k",children:"Payment Status"}),e.jsx("div",{className:"v",children:o.payment.status}),e.jsx("div",{className:"k",children:"Due Date"}),e.jsx("div",{className:"v",children:f(o.payment.due)})]})]}),e.jsxs("table",{className:"items",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"10%"},children:"SKU"}),e.jsx("th",{children:"Description"}),e.jsx("th",{style:{width:"10%"},className:"num",children:"Qty"}),e.jsx("th",{style:{width:"12%"},className:"num",children:"Rate"}),e.jsx("th",{style:{width:"10%"},className:"num",children:"GST%"}),e.jsx("th",{style:{width:"14%"},className:"num",children:"Amount"})]})}),e.jsx("tbody",{children:o.items.map((l,j)=>e.jsxs("tr",{children:[e.jsx("td",{children:l.sku}),e.jsx("td",{children:l.name}),e.jsx("td",{className:"num",children:l.qty}),e.jsxs("td",{className:"num",children:["₹",l.rate]}),e.jsxs("td",{className:"num",children:[l.gst,"%"]}),e.jsxs("td",{className:"num",children:["₹",l.amount]})]},j))})]}),e.jsxs(V,{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Subtotal"}),e.jsxs("div",{children:["₹",o.totals.subTotal]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Tax"}),e.jsxs("div",{children:["₹",o.totals.tax]})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Round Off"}),e.jsxs("div",{children:["₹",o.totals.roundOff]})]}),e.jsxs("div",{className:"row grand",children:[e.jsx("div",{children:"Grand Total"}),e.jsxs("div",{children:["₹",o.totals.grand]})]})]}),e.jsxs("div",{className:"footer",children:[e.jsxs("div",{className:"muted",children:["Thank you for your business. This is a computer-generated invoice. For questions contact ",s.email,"."]}),e.jsx("div",{className:"stamp",children:"Authorized Signatory"})]})]})}function T(){return e.jsxs(N,{className:"card",id:"search-print-area",children:[e.jsx("h2",{children:"Quote"}),e.jsx("p",{className:"muted",children:"A clean quotation layout preview appears here. Use the “Preview Route” to open a route-based print preview."}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(t,{to:"/sales/quotes",title:"View all quotations",children:"Go to Quotes"})}),e.jsx("li",{children:e.jsx(t,{to:"/print/quote/Q-5409",title:"Open a sample quote print",children:"Open Print Route"})}),e.jsx("li",{children:e.jsx(t,{to:"/customers/CUST-1001",title:"Open customer",children:"Customer Detail"})})]})]})}function ee(){return e.jsxs(N,{className:"card",id:"search-print-area",children:[e.jsx("h2",{children:"Receipt"}),e.jsx("p",{className:"muted",children:"Mini thermal receipt preview (80mm). For route-based preview, open Receipts."}),e.jsx(t,{to:"/receipts",title:"Receipts list",children:"Receipts List"})]})}function te(){return e.jsxs(N,{className:"card",id:"search-print-area",children:[e.jsx("h2",{children:"Shipping Label"}),e.jsx("p",{className:"muted",children:"4x6in label preview. Open the print route to view a standalone page."}),e.jsx(t,{to:"/print/sticker/LBL-1001",title:"Open label route",children:"Open Label Print"})]})}function ie(){var k;const s=D(),[n,o]=m.useState(((k=b[0])==null?void 0:k.id)||""),[l,j]=m.useState({open:!1,title:"",message:""}),u=m.useMemo(()=>b.find(i=>i.id===n)||b[0],[n]),g=m.useCallback(i=>{j({open:!0,title:i,message:"This is a demo build. Actions that modify data are disabled."})},[]),y=m.useCallback(()=>{try{document.body.classList.add("print-section-mode"),window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),300)}},[]),C=m.useMemo(()=>{switch(u.entity){case"invoice":return()=>e.jsx(J,{company:Y,customer:W,invoice:X});case"quote":return T;case"receipt":return ee;case"sticker":return te;default:return T}},[u]);return e.jsxs(A,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(S,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("nav",{className:"crumbs",children:[e.jsx($,{to:"/home",className:"crumb",children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx($,{to:"/settings",className:"crumb",children:"Settings"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"crumb current",children:"Print Templates"})]}),e.jsx("h1",{children:"Print Templates"}),e.jsx("p",{className:"muted",children:"Configure document layouts for invoices, quotes, receipts and labels. Current environment is read-only for showcase."})]}),e.jsxs("div",{className:"right",children:[e.jsxs(R,{children:[e.jsx("button",{onClick:()=>g("Create Template"),title:"Create a new template",children:"New Template"}),e.jsx("button",{onClick:y,title:"Print only the preview section",children:"Print Preview"}),e.jsx("button",{onClick:()=>s("/settings/appearance"),title:"Adjust theme & appearance",children:"Appearance"}),e.jsx("button",{onClick:()=>s("/settings/numbering"),title:"Document numbering rules",children:"Numbering"})]}),e.jsxs(L,{children:[e.jsx(t,{to:"/invoices",title:"Invoices",children:"Invoices"}),e.jsx(t,{to:"/sales/quotes",title:"Quotes",children:"Quotes"}),e.jsx(t,{to:"/receipts",title:"Receipts",children:"Receipts"}),e.jsx(t,{to:"/shipments",title:"Shipments",children:"Shipments"}),e.jsx(t,{to:"/reports",title:"Reports",children:"Reports"}),e.jsx(t,{to:"/reports/finance",title:"Finance Report",children:"Finance Report"})]})]})]}),e.jsxs(M,{children:[e.jsxs(O,{className:"card",children:[e.jsxs("div",{className:"paneTitle",children:[e.jsx("h3",{children:"Templates"}),e.jsxs("div",{className:"meta muted",children:["Updated: ",w("2025-10-04T15:38:20+05:30")]})]}),e.jsx(E,{children:b.map(i=>e.jsxs(q,{role:"button",tabIndex:0,"aria-pressed":i.id===n,"data-active":i.id===n?"true":"false",onClick:()=>o(i.id),onKeyDown:v=>v.key==="Enter"||v.key===" "?(v.preventDefault(),o(i.id)):null,title:`Select ${i.name}`,children:[e.jsxs("div",{className:"row1",children:[e.jsx("h4",{className:"name",children:i.name}),i.default&&e.jsx(I,{children:"Default"})]}),e.jsxs("div",{className:"row2 muted",children:[e.jsx("span",{children:i.entity.toUpperCase()}),e.jsx("span",{children:"•"}),e.jsx("span",{children:i.paper}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Margins ",i.margins]})]}),e.jsxs(Q,{children:[e.jsx("div",{className:"k",children:"Created"}),e.jsx("div",{className:"v",children:f(i.createdAt)}),e.jsx("div",{className:"k",children:"Updated"}),e.jsx("div",{className:"v",children:w(i.updatedAt)}),e.jsx("div",{className:"k",children:"Preview Route"}),e.jsx("div",{className:"v",children:e.jsx(t,{to:i.routePreview,title:"Open print route",children:i.routePreview})})]}),e.jsxs(U,{children:[e.jsx("button",{onClick:()=>g("Set as Default"),title:"Set as default",children:"Set Default"}),e.jsx("button",{onClick:()=>g("Duplicate"),title:"Duplicate this template",children:"Duplicate"}),e.jsx("button",{onClick:()=>g("Download HTML"),title:"Download static HTML",children:"Download"}),e.jsx("button",{onClick:()=>g("Delete Template"),title:"Delete this template",children:"Delete"})]})]},i.id))}),e.jsxs(G,{children:[e.jsx("div",{className:"title",children:"Quick Links"}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/settings/print-templates",end:!0,children:"Print Templates"}),e.jsx(t,{to:"/settings/appearance",children:"Appearance"}),e.jsx(t,{to:"/settings/notifications",children:"Notifications"}),e.jsx(t,{to:"/settings/numbering",children:"Numbering"}),e.jsx(t,{to:"/settings/tax",children:"Tax"}),e.jsx(t,{to:"/settings/units",children:"Units"}),e.jsx(t,{to:"/reports/sales",children:"Sales Report"}),e.jsx(t,{to:"/reports/finance",children:"Finance Report"}),e.jsx(t,{to:"/customers",children:"Customers"}),e.jsx(t,{to:"/orders",children:"Orders"}),e.jsx(t,{to:"/products",children:"Products"})]})]})]}),e.jsxs(B,{className:"card",children:[e.jsxs("div",{className:"paneTitle",children:[e.jsx("h3",{children:"Live Preview"}),e.jsxs("div",{className:"meta muted",children:["Showing: ",e.jsx("strong",{children:u.name})," · Entity: ",u.entity.toUpperCase()]})]}),e.jsxs(z,{children:[e.jsx("button",{onClick:y,title:"Print only this preview area",children:"Print Section"}),e.jsx(t,{to:u.routePreview,title:"Open route preview",children:"Open Route Preview"}),e.jsx(t,{to:"/settings/print-templates",title:"Reload this page",children:"Reload"}),e.jsx(t,{to:"/invoices",title:"Go to invoices",children:"Invoices"}),e.jsx(t,{to:"/reports",title:"Go to reports",children:"Reports"})]}),e.jsx(C,{})]})]}),e.jsx(Z,{open:l.open,title:l.title,message:l.message,onClose:()=>j({open:!1,title:"",message:""})})]})}export{ie as default};
