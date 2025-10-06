import{d as v,u as U,r as b,j as e,N}from"./index-BauM8ZfN.js";const x="var(--text, #f3f4f6)",u="var(--muted, #a0a0a7)",y="var(--card, #111318)",c="var(--border, #23262d)",l="var(--accent, #5aa9ff)",I="var(--accent-soft, rgba(90,169,255,0.15))",T="var(--radius, 16px)",f={Page:v.div`
        width: 100%;
        color: ${x};
        padding: 24px 0 64px;

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${u};
            }
            .current {
                color: ${x};
            }
        }
    `,Header:v.header`
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
            color: ${u};
            font-size: 12px;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${c};
            background: ${y};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.04s ease;
        }
        .btnPrimary:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${I};
        }
        .btnGhost:hover {
            border-color: ${l};
            color: ${l};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,Banner:v.div`
        margin: 12px 0;
        padding: 10px 14px;
        border: 1px solid ${c};
        border-radius: 10px;
        background: color-mix(in oklab, ${l} 10%, transparent);
        color: ${x};
    `,Grid:v.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media (min-width: 1100px) {
            grid-template-columns: 2fr 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }

        .identity {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 240px 1fr;
            }

            .logo {
                display: grid;
                gap: 10px;
                .pic {
                    width: 200px;
                    height: 200px;
                    background: ${y};
                    background-size: cover;
                    background-position: center;
                    border: 1px solid ${c};
                    border-radius: ${T};
                }
                .controls {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                .small {
                    padding: 6px 10px;
                    font-weight: 600;
                }
            }
        }

        .fields {
            display: grid;
            gap: 16px;
        }
        .two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: 1fr 1fr;
            }
        }
        .three {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 900px) {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .four {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${u};
            margin-bottom: 6px;
        }
        input,
        select,
        textarea {
            width: 100%;
        }

        .section {
            margin-top: 18px;
        }
        .section h3 {
            font-size: 14px;
            margin-bottom: 10px;
        }

        .twoCols {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            @media (min-width: 1100px) {
                grid-template-columns: 1fr 1fr;
            }
            .sub {
                padding: 14px;
            }
            .addr input {
                margin-bottom: 10px;
            }
        }

        .subHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 8px;
            .small {
                padding: 6px 10px;
                font-weight: 600;
            }
        }

        .data {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            th,
            td {
                padding: 10px;
                border-bottom: 1px solid ${c};
            }
            thead th {
                text-align: left;
                background: ${y};
                color: ${l};
                font-weight: 600;
            }
            tbody tr:hover {
                background: color-mix(in oklab, ${l} 8%, transparent);
            }
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .chip {
            border: 1px solid ${c};
            padding: 6px 10px;
            border-radius: 999px;
            color: ${x};
            background: color-mix(in oklab, ${l} 8%, transparent);
        }

        .mini {
            margin-top: 8px;
            color: ${u};
            font-size: 12px;
        }

        /* sidebar */
        .side {
            display: grid;
            gap: 16px;
        }
        .links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 8px;
        }
        .links a {
            color: ${u};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${c};
            background: ${y};
        }
        .links a:hover {
            color: ${l};
            border-color: ${l};
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
            background: ${l};
            border: 1px solid ${c};
        }
        .timeline .muted {
            color: ${u};
            font-size: 12px;
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${u};
        }
        .printSummary .v {
            color: ${x};
        }
    `,Overlay:v.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:v.div`
        width: min(520px, 92vw);
        border-radius: ${T};
        border: 1px solid ${c};
        background: ${y};
        color: ${x};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${c};
        }
        h4 {
            font-size: 18px;
        }

        .body {
            padding: 16px;
            color: ${x};
        }
        footer {
            padding: 12px 16px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;
            border-top: 1px solid ${c};
        }

        .btnPrimary {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${c};
            background: ${y};
            color: ${x};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${l};
            color: ${l};
            box-shadow: 0 0 0 3px ${I};
        }
    `},j=n=>String(n).padStart(2,"0"),$=n=>{const i=n instanceof Date?n:new Date(n),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${r[i.getDay()]} ${m[i.getMonth()]} ${j(i.getDate())} ${i.getFullYear()}`},S=n=>{const i=n instanceof Date?n:new Date(n);return`${$(i)} ${j(i.getHours())}:${j(i.getMinutes())}:${j(i.getSeconds())}hrs`},E=n=>{const i=n instanceof Date?n:new Date(n);return`${j(i.getHours())}:${j(i.getMinutes())}:${j(i.getSeconds())}hrs`},F=({open:n,title:i,message:r,onClose:m})=>n?e.jsx(f.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:m,children:e.jsxs(f.Modal,{className:"card",onMouseDown:C=>C.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:i})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:r})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:m,children:"OK"})})]})}):null,X=()=>{const n=U(),i=b.useRef(null),r=b.useMemo(()=>new Date,[]),[m]=b.useState("Display-only demo. Actions are disabled."),[C,A]=b.useState(""),[L,D]=b.useState(!1),[a,w]=b.useState({code:"VEND-4021",name:"Northline Distributors",email:"contact@northline.example.com",phone:"+91 98765 00000",website:"https://northline.example.com",status:"active",gstin:"07ABCDE1234F1Z5",pan:"ABCDE1234F",cin:"U12345DL2014PTC000001",msme:"UDYAM-DL-12-0001234",tags:["wholesale","preferred","pharma"],address:{line1:"Plot 22, Okhla Phase II",line2:"Industrial Area",city:"New Delhi",state:"DL",zip:"110020",country:"India"},shipping:{line1:"Warehouse A-12",line2:"Sector 37",city:"Gurugram",state:"HR",zip:"122001",country:"India"},bank:{accountName:"Northline Distributors Pvt. Ltd.",accountNumber:"XXXXXX4512",ifsc:"HDFC0001234",bank:"HDFC Bank",branch:"Okhla Phase II",upi:"northline@hdfcbank"},terms:{payment:"Net 30",creditLimit:"₹ 5,00,000",currency:"INR",taxCategory:"GST Registered",tds:"194C - 1%"},contacts:[{id:"CT-01",name:"Rohit S.",role:"Sales Manager",email:"rohit.s@northline.example.com",phone:"+91 98999 11111"},{id:"CT-02",name:"Meera K.",role:"Accounts",email:"meera.k@northline.example.com",phone:"+91 98999 22222"}],documents:[{id:"DOC-01",type:"GST Certificate",number:"07ABCDE1234F1Z5",issued:"2021-06-01"},{id:"DOC-02",type:"PAN",number:"ABCDE1234F",issued:"2016-07-15"}],notes:"Preferred dispatch days: Mon/Wed/Fri. E-invoice JSON email acceptable. For urgent PO, call Sales Manager.",createdAt:r,updatedAt:r}),p=s=>{const{name:t,value:h}=s.target;w(o=>({...o,[t]:h}))},d=(s,t)=>{const{name:h,value:o}=t.target;w(P=>({...P,[s]:{...P[s],[h]:o}}))},g=s=>{const{name:t,value:h}=s.target;w(o=>({...o,bank:{...o.bank,[t]:h}}))},k=s=>{const{name:t,value:h}=s.target;w(o=>({...o,terms:{...o.terms,[t]:h}}))},M=s=>{var o;const t=(o=s.target.files)==null?void 0:o[0];if(!t)return;const h=URL.createObjectURL(t);A(h)},B=()=>A(""),G=()=>n("/vendors"),R=()=>{document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print()},z=()=>D(!0);return e.jsxs(f.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(f.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"New Vendor"}),e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(N,{to:"/vendors",children:"Vendors"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"New"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Template: ",$(r)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Session: ",S(r)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:G,title:"Back to vendors",children:"Cancel"}),e.jsx("button",{className:"btnPrimary",onClick:z,title:"Demo-only",children:"Create Vendor"}),e.jsx("button",{className:"btnGhost",onClick:R,title:"Print summary",children:"Print"})]})]}),m?e.jsx(f.Banner,{role:"status","aria-live":"polite",children:m}):null,e.jsxs(f.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"identity",children:[e.jsxs("div",{className:"logo",children:[e.jsx("div",{className:"pic",style:{backgroundImage:`url(${C||"/logo.svg"})`}}),e.jsxs("div",{className:"controls",children:[e.jsxs("label",{className:"btnGhost small",children:["Upload Logo",e.jsx("input",{type:"file",accept:"image/*",onChange:M,hidden:!0})]}),C?e.jsx("button",{className:"btnGhost small",onClick:B,children:"Remove"}):null,e.jsx("a",{className:"btnGhost small",href:C||"/logo.svg",download:!0,children:"Download"})]})]}),e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Vendor Name"}),e.jsx("input",{name:"name",value:a.name,onChange:p,placeholder:"Vendor legal name"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Vendor Code"}),e.jsx("input",{name:"code",value:a.code,onChange:p,placeholder:"Auto/Manual"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Status"}),e.jsxs("select",{name:"status",value:a.status,onChange:p,children:[e.jsx("option",{value:"active",children:"Active"}),e.jsx("option",{value:"inactive",children:"Inactive"}),e.jsx("option",{value:"on-hold",children:"On Hold"})]})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{name:"email",type:"email",value:a.email,onChange:p,placeholder:"name@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{name:"phone",value:a.phone,onChange:p,placeholder:"+91 ..."})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Website"}),e.jsx("input",{name:"website",value:a.website,onChange:p,placeholder:"https://..."})]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Compliance"}),e.jsxs("div",{className:"four",children:[e.jsxs("div",{children:[e.jsx("label",{children:"GSTIN"}),e.jsx("input",{name:"gstin",value:a.gstin,onChange:p,placeholder:"GSTIN"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"PAN"}),e.jsx("input",{name:"pan",value:a.pan,onChange:p,placeholder:"PAN"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"CIN"}),e.jsx("input",{name:"cin",value:a.cin,onChange:p,placeholder:"Corporate Identification Number"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"MSME / UDYAM"}),e.jsx("input",{name:"msme",value:a.msme,onChange:p,placeholder:"UDYAM-..."})]})]})]}),e.jsxs("div",{className:"twoCols",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Billing Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("input",{name:"line1",value:a.address.line1,onChange:s=>d("address",s),placeholder:"Line 1"}),e.jsx("input",{name:"line2",value:a.address.line2,onChange:s=>d("address",s),placeholder:"Line 2"}),e.jsxs("div",{className:"three",children:[e.jsx("input",{name:"city",value:a.address.city,onChange:s=>d("address",s),placeholder:"City"}),e.jsx("input",{name:"state",value:a.address.state,onChange:s=>d("address",s),placeholder:"State"}),e.jsx("input",{name:"zip",value:a.address.zip,onChange:s=>d("address",s),placeholder:"PIN"})]}),e.jsx("input",{name:"country",value:a.address.country,onChange:s=>d("address",s),placeholder:"Country"})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Shipping Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("input",{name:"line1",value:a.shipping.line1,onChange:s=>d("shipping",s),placeholder:"Line 1"}),e.jsx("input",{name:"line2",value:a.shipping.line2,onChange:s=>d("shipping",s),placeholder:"Line 2"}),e.jsxs("div",{className:"three",children:[e.jsx("input",{name:"city",value:a.shipping.city,onChange:s=>d("shipping",s),placeholder:"City"}),e.jsx("input",{name:"state",value:a.shipping.state,onChange:s=>d("shipping",s),placeholder:"State"}),e.jsx("input",{name:"zip",value:a.shipping.zip,onChange:s=>d("shipping",s),placeholder:"PIN"})]}),e.jsx("input",{name:"country",value:a.shipping.country,onChange:s=>d("shipping",s),placeholder:"Country"})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Bank Details"}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Account Name"}),e.jsx("input",{name:"accountName",value:a.bank.accountName,onChange:g,placeholder:"Account holder"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Account Number"}),e.jsx("input",{name:"accountNumber",value:a.bank.accountNumber,onChange:g,placeholder:"XXXXXX4512"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"IFSC"}),e.jsx("input",{name:"ifsc",value:a.bank.ifsc,onChange:g,placeholder:"IFSC code"})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Bank"}),e.jsx("input",{name:"bank",value:a.bank.bank,onChange:g,placeholder:"Bank name"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Branch"}),e.jsx("input",{name:"branch",value:a.bank.branch,onChange:g,placeholder:"Branch"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"UPI ID"}),e.jsx("input",{name:"upi",value:a.bank.upi,onChange:g,placeholder:"upi@bank"})]})]})]}),e.jsxs("div",{className:"twoCols",children:[e.jsxs("div",{className:"card sub",children:[e.jsxs("div",{className:"subHeader",children:[e.jsx("h3",{children:"Contacts"}),e.jsx("button",{className:"btnGhost small",onClick:()=>D(!0),title:"Demo-only",children:"Add Contact"})]}),e.jsxs("table",{className:"data",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Phone"})]})}),e.jsx("tbody",{children:a.contacts.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.role}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.phone})]},s.id))})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsxs("div",{className:"subHeader",children:[e.jsx("h3",{children:"Documents"}),e.jsx("button",{className:"btnGhost small",onClick:()=>D(!0),title:"Demo-only",children:"Upload"})]}),e.jsxs("table",{className:"data",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Number"}),e.jsx("th",{children:"Issued"})]})}),e.jsx("tbody",{children:a.documents.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.type}),e.jsx("td",{children:s.number}),e.jsx("td",{children:$(s.issued)})]},s.id))})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"Notes"}),e.jsx("textarea",{rows:5,value:a.notes,onChange:s=>w(t=>({...t,notes:s.target.value})),placeholder:"Internal notes…"}),e.jsxs("div",{className:"mini",children:["Last edit: ",S(r)," • Best call window: ",E(r)]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(N,{to:"/vendors",children:"All Vendors"})}),e.jsx("li",{children:e.jsx(N,{to:"/purchase-orders",children:"Purchase Orders"})}),e.jsx("li",{children:e.jsx(N,{to:"/invoices",children:"Bills & Invoices"})}),e.jsx("li",{children:e.jsx(N,{to:"/inventory",children:"Inventory"})}),e.jsx("li",{children:e.jsx(N,{to:"/reports/procurement",children:"Procurement Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Terms & Settings"}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Payment Terms"}),e.jsxs("select",{name:"payment",value:a.terms.payment,onChange:k,children:[e.jsx("option",{value:"Advance",children:"Advance"}),e.jsx("option",{value:"Net 7",children:"Net 7"}),e.jsx("option",{value:"Net 15",children:"Net 15"}),e.jsx("option",{value:"Net 30",children:"Net 30"}),e.jsx("option",{value:"Net 45",children:"Net 45"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Credit Limit"}),e.jsx("input",{name:"creditLimit",value:a.terms.creditLimit,onChange:k,placeholder:"₹ ..."})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Currency"}),e.jsxs("select",{name:"currency",value:a.terms.currency,onChange:k,children:[e.jsx("option",{value:"INR",children:"INR"}),e.jsx("option",{value:"USD",children:"USD"}),e.jsx("option",{value:"EUR",children:"EUR"})]})]})]}),e.jsxs("div",{className:"three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Tax Category"}),e.jsxs("select",{name:"taxCategory",value:a.terms.taxCategory,onChange:k,children:[e.jsx("option",{value:"GST Registered",children:"GST Registered"}),e.jsx("option",{value:"Unregistered",children:"Unregistered"}),e.jsx("option",{value:"Composition",children:"Composition"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"TDS"}),e.jsx("input",{name:"tds",value:a.terms.tds,onChange:k,placeholder:"e.g., 194C - 1%"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Tags"}),e.jsx("div",{className:"chips",children:a.tags.map(s=>e.jsx("span",{className:"chip",children:s},s))})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Draft created"}),e.jsx("div",{className:"muted",children:S(r)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Compliance verified"}),e.jsx("div",{className:"muted",children:$(r)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Bank details added"}),e.jsx("div",{className:"muted",children:$(r)})]})]})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:i,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Vendor"}),e.jsxs("span",{className:"v",children:[a.name," (",a.code,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Status"}),e.jsx("span",{className:"v",children:a.status})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:a.email})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:a.phone})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"GSTIN"}),e.jsx("span",{className:"v",children:a.gstin})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Address"}),e.jsxs("span",{className:"v",children:[a.address.line1,", ",a.address.line2,", ",a.address.city," ",a.address.zip,", ",a.address.state,", ",a.address.country]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:S(a.createdAt)})]})]})]})]})]}),e.jsx(F,{open:L,title:"Demo-only",message:"This is a display theme preview. Creating or modifying data is disabled.",onClose:()=>D(!1)})]})};export{X as default};
