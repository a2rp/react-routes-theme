import{d as p,q as S,u as P,r as f,j as e,L as i}from"./index-LshBDmDj.js";const u="var(--text, #f3f4f6)",n="var(--muted, #a0a0a7)",d="var(--card, #111318)",r="var(--border, #23262d)",t="var(--accent, #5aa9ff)",A="var(--accent-soft, rgba(90,169,255,0.15))",m="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",x={Wrap:p.div`
        width: 100%;
        color: ${u};
    `,Toolbar:p.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 16px;
        background: ${d};
        border: 1px solid ${r};
        border-radius: 12px;
        box-shadow: ${m};
        margin: 12px 0;

        .left {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .crumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            a {
                color: ${n};
            }
            .current {
                color: ${u};
                font-weight: 600;
            }
        }
        .meta {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            span {
                color: ${n};
            }
            .tag {
                background: color-mix(in oklab, ${t} 18%, transparent);
                border: 1px solid ${t};
                color: ${t};
                padding: 2px 8px;
                border-radius: 999px;
                font-size: 12px;
            }
        }
        .right {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
        }
        button,
        .linkish {
            background: ${d};
            color: ${u};
            border: 1px solid ${r};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s ease;
            text-decoration: none;
        }
        button:hover,
        .linkish:hover {
            border-color: ${t};
            color: ${t};
            background: color-mix(in oklab, ${t} 10%, transparent);
            box-shadow: 0 0 0 3px ${A};
        }
    `,Header:p.div`
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 16px;

        .brandBlock {
            display: flex;
            align-items: center;
            gap: 14px;
            .logo {
                width: 56px;
                height: 56px;
                display: grid;
                place-items: center;
                border-radius: 12px;
                background: color-mix(in oklab, ${t} 18%, transparent);
                border: 1px solid ${t};
                font-weight: 700;
                letter-spacing: 0.5px;
            }
            h1 {
                margin: 0;
                line-height: 1.2;
            }
            .brandName {
                color: ${t};
                font-weight: 700;
            }
            .brandAddr {
                color: ${n};
            }
        }

        .idBlock {
            display: grid;
            align-content: start;
            gap: 8px;
            .row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: color-mix(in oklab, ${d} 96%, transparent);
                border: 1px solid ${r};
                border-radius: 8px;
                padding: 8px 10px;
                span {
                    color: ${n};
                }
                strong {
                    font-weight: 700;
                }
            }
        }

        &.card {
            background: ${d};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${m};
        }

        @media (max-width: 860px) {
            grid-template-columns: 1fr;
        }
    `,Parties:p.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;

        &.card {
            background: ${d};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${m};
        }

        .party {
            border: 1px dashed ${r};
            border-radius: 10px;
            padding: 12px;
            display: grid;
            gap: 6px;
            h3 {
                margin: 0 0 4px 0;
            }
            .name {
                font-weight: 700;
            }
            .addr,
            .line {
                color: ${n};
            }
            .links {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                margin-top: 6px;
            }
            .links a {
                color: ${n};
                border-bottom: 1px dashed ${r};
            }
            .links a:hover {
                color: ${t};
                border-color: ${t};
            }
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,Items:p.div`
        &.card {
            background: ${d};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 0;
            box-shadow: ${m};
            overflow: hidden;
        }

        .tableHead,
        .row {
            display: grid;
            grid-template-columns: 56px 1fr 120px 140px 100px 180px;
            gap: 0;
        }
        .tableHead {
            background: color-mix(in oklab, ${d} 94%, transparent);
            border-bottom: 1px solid ${r};
            > div {
                padding: 10px 12px;
                font-weight: 700;
                color: ${t};
                border-right: 1px solid ${r};
            }
            > div:last-child {
                border-right: 0;
            }
        }

        .row {
            border-bottom: 1px solid ${r};
            .col {
                padding: 12px;
                border-right: 1px solid ${r};
            }
            .col:last-child {
                border-right: 0;
            }
            .name a {
                color: ${u};
            }
            .name a:hover {
                color: ${t};
            }
            .muted {
                color: ${n};
                margin-top: 4px;
                font-size: 12px;
            }
            &:hover {
                background: color-mix(in oklab, ${t} 6%, transparent);
            }
        }

        .empty {
            padding: 24px;
            text-align: center;
            .title {
                font-weight: 700;
                margin-bottom: 6px;
            }
            .desc {
                color: ${n};
            }
            a {
                color: ${t};
            }
        }

        @media (max-width: 1024px) {
            .tableHead,
            .row {
                grid-template-columns: 40px 1fr 100px 120px 80px 140px;
            }
        }
        @media (max-width: 760px) {
            .tableHead {
                display: none;
            }
            .row {
                display: grid;
                grid-template-columns: 1fr;
                .index {
                    display: none;
                }
                .qty,
                .rate,
                .tax,
                .amount {
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    border-right: 0;
                }
                .qty::before {
                    content: "Qty";
                    color: ${n};
                }
                .rate::before {
                    content: "Rate";
                    color: ${n};
                }
                .tax::before {
                    content: "Tax";
                    color: ${n};
                }
                .amount::before {
                    content: "Amount";
                    color: ${n};
                }
            }
        }
    `,TotalsTerms:p.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        &.card {
            background: ${d};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${m};
        }

        .totals {
            border: 1px dashed ${r};
            border-radius: 10px;
            padding: 12px;
            display: grid;
            gap: 8px;
            .line,
            .grand {
                display: flex;
                align-items: center;
                justify-content: space-between;
                span {
                    color: ${n};
                }
            }
            .grand {
                margin-top: 6px;
                padding-top: 10px;
                border-top: 1px solid ${r};
                strong {
                    font-size: 18px;
                    color: ${t};
                }
            }
        }

        .terms {
            border: 1px dashed ${r};
            border-radius: 10px;
            padding: 12px;
            h3 {
                margin: 0 0 6px 0;
            }
            ul {
                padding-left: 18px;
                margin: 8px 0;
            }
            li {
                margin: 4px 0;
                color: ${u};
            }
            .attachments {
                padding-left: 18px;
            }
            .attachments li a {
                color: ${t};
            }
        }

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,SignBlock:p.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;

        &.card {
            background: ${d};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${m};
        }

        .sig {
            border: 1px dashed ${r};
            border-radius: 10px;
            padding: 12px;
            .label {
                color: ${n};
            }
            .value {
                font-weight: 700;
            }
            .muted {
                color: ${n};
            }
            .signBox {
                margin-top: 18px;
                height: 72px;
                border: 1px solid ${r};
                border-radius: 8px;
                background: repeating-linear-gradient(
                    -45deg,
                    transparent 0 8px,
                    color-mix(in oklab, ${t} 10%, transparent) 8px 16px
                );
            }
        }

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,FooterBar:p.div`
        margin: 12px 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        &.card {
            background: ${d};
            border: 1px solid ${r};
            border-radius: 12px;
            padding: 12px 16px;
            box-shadow: ${m};
        }

        .left {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            span {
                color: ${n};
            }
        }
        .right {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            a {
                color: ${n};
                border-bottom: 1px dashed ${r};
            }
            a:hover {
                color: ${t};
                border-color: ${t};
            }
        }
    `,Toast:p.div`
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 14px;
        border-radius: 999px;
        background: ${d};
        border: 1px solid ${r};
        box-shadow: ${m};
        color: ${u};
        z-index: 60;
        animation: fadeout 2.2s cubic-bezier(0.2, 0.9, 0.2, 1) forwards;

        &[data-type="success"] {
            border-color: ${t};
        }
        &[data-type="error"] {
            border-color: #d33;
        }
        &[data-type="info"] {
            border-color: ${r};
        }

        @keyframes fadeout {
            0% {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            75% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translateX(-50%) translateY(8px);
            }
        }
    `},v=l=>String(l).padStart(2,"0"),b=l=>new Date(l).toDateString(),j=l=>{const c=new Date(l),h=c.toDateString(),s=`${v(c.getHours())}:${v(c.getMinutes())}:${v(c.getSeconds())}hrs`;return`${h} ${s}`},$=[{id:"Q-2025-001",number:"Q-2025-001",createdAt:"2025-10-03T12:38:20+05:30",validTill:"2025-10-15T23:59:59+05:30",customer:{id:"CUST-1001",name:"Nimbus Meditech Pvt Ltd",code:"CUST-1001",email:"ops@nimbusmeditech.com",phone:"+91 98180 12345",billing:{line1:"A-17, 3rd Floor, Sector 64",line2:"Noida, Uttar Pradesh 201301",gstin:"09ABCDE1234F1Z5"},shipping:{line1:"Block B, 2nd Floor, Technopark",line2:"Noida, Uttar Pradesh 201301"}},seller:{name:"Ashish Ranjan",email:"ashish@example.com",phone:"+91 90000 00000",brand:"Ash Labs",address:"Bengaluru, Karnataka"},status:"Open",currency:"INR",items:[{id:"I-01",sku:"MED-AMOX-500",name:"Amoxicillin 500mg Cap",desc:"Blister pack of 10 capsules",hsn:"3004",batch:"AXL2309",exp:"2027-09-30T00:00:00+05:30",qty:50,unit:"Pack",mrp:"₹150.00",rate:"₹120.00",discount:"₹0.00",tax:"12%",lineTotal:"₹6,720.00"},{id:"I-02",sku:"MED-PARA-650",name:"Paracetamol 650mg Tab",desc:"Strip of 15 tablets",hsn:"3004",batch:"PCM2411",exp:"2026-11-30T00:00:00+05:30",qty:120,unit:"Strip",mrp:"₹40.00",rate:"₹28.00",discount:"₹0.00",tax:"12%",lineTotal:"₹3,763.20"},{id:"I-03",sku:"MED-ORS-200",name:"ORS Powder 200ml Sachet",desc:"Orange flavour",hsn:"2106",batch:"ORS2502",exp:"2026-02-28T00:00:00+05:30",qty:200,unit:"Sachet",mrp:"₹18.00",rate:"₹12.50",discount:"₹0.00",tax:"5%",lineTotal:"₹2,625.00"}],totals:{subTotal:"₹13,108.20",discount:"₹0.00",tax:"₹1,362.98",freight:"₹250.00",roundOff:"₹-0.18",grand:"₹14,721.00"},terms:["Prices inclusive of taxes as mentioned; freight additional where applicable.","Payment within 15 days from the invoice date.","Delivery within 3–5 working days from confirmation.","Damaged/short supply to be reported within 24 hours of delivery.","Warranty as per manufacturer policy."],attachments:[{label:"Specification Sheet (PDF)",href:"/docs/spec-amox.pdf"},{label:"COA – Amoxicillin",href:"/docs/coa-amox.pdf"}],references:{opportunityId:"OPP-8891",customerRef:"PO-REQ-4451",salesOwner:"USR-007"}},{id:"Q-2025-002",number:"Q-2025-002",createdAt:"2025-09-25T09:10:00+05:30",validTill:"2025-10-20T23:59:59+05:30",customer:{id:"CUST-1024",name:"HealthFirst Diagnostics",code:"CUST-1024",email:"procure@healthfirst.in",phone:"+91 98990 11122",billing:{line1:"Plot 44, HSR Layout",line2:"Bengaluru, Karnataka 560102",gstin:"29ABCDE1234F1Z9"},shipping:{line1:"HSR Club Road",line2:"Bengaluru, Karnataka 560102"}},seller:{name:"Ashish Ranjan",email:"ashish@example.com",phone:"+91 90000 00000",brand:"Ash Labs",address:"Bengaluru, Karnataka"},status:"Open",currency:"INR",items:[],totals:{subTotal:"₹0.00",discount:"₹0.00",tax:"₹0.00",freight:"₹0.00",roundOff:"₹0.00",grand:"₹0.00"},terms:["This is a budgetary quote. Final pricing may vary with quantity.","Offer valid till the date mentioned on this document."],attachments:[],references:{opportunityId:"OPP-9002",customerRef:"RFI-212",salesOwner:"USR-007"}}],R=()=>{const{id:l}=S();P();const[c,h]=f.useState(null),s=f.useMemo(()=>$.find(a=>a.id===l)||$[0],[l]),y=()=>{document.body.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),300)},50)},N=async()=>{try{await navigator.clipboard.writeText(window.location.href),h({type:"success",text:"Link copied"})}catch{h({type:"error",text:"Couldn’t copy"})}},w=()=>{const a=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),o=URL.createObjectURL(a),g=document.createElement("a");g.href=o,g.download=`${s.id}.json`,document.body.appendChild(g),g.click(),g.remove(),URL.revokeObjectURL(o),h({type:"success",text:`${s.id}.json downloaded`})},k=()=>{const a=document.documentElement,o=a.getAttribute("data-theme");a.setAttribute("data-theme",o==="light"?"dark":"light")};f.useEffect(()=>{if(!l)return;const a=setTimeout(()=>{h({type:"info",text:`Viewing Quote ${s.number}`})},200);return()=>clearTimeout(a)},[l,s.number]);const T=s.items.length===0;return e.jsxs(x.Wrap,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(x.Toolbar,{role:"region","aria-label":"Quote actions",children:[e.jsxs("div",{className:"left",children:[e.jsxs("nav",{className:"crumbs","aria-label":"Breadcrumb",children:[e.jsx(i,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(i,{to:"/sales",children:"Sales"}),e.jsx("span",{children:"/"}),e.jsx(i,{to:"/sales/quotes",children:"Quotes"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.number})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"tag",children:s.status}),e.jsxs("span",{children:["Created: ",j(s.createdAt)]}),e.jsxs("span",{children:["Valid till: ",b(s.validTill)]})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{onClick:y,"aria-label":"Print quote",children:"Print"}),e.jsx("button",{onClick:N,"aria-label":"Copy deep link",children:"Copy Link"}),e.jsx("button",{onClick:w,"aria-label":"Export JSON",children:"Export"}),e.jsx("button",{onClick:k,"aria-label":"Toggle theme",children:"Theme"}),e.jsx(i,{to:`/customers/${s.customer.id}`,className:"linkish",title:"View customer",children:"Customer"}),e.jsx(i,{to:"/invoices",className:"linkish",title:"Invoices",children:"Invoices"}),e.jsx(i,{to:"/orders",className:"linkish",title:"Orders",children:"Orders"}),e.jsx(i,{to:"/reports/sales",className:"linkish",title:"Sales report",children:"Reports"})]})]}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs(x.Header,{className:"card",children:[e.jsxs("div",{className:"brandBlock",children:[e.jsx("div",{className:"logo","aria-hidden":!0,children:"AL"}),e.jsxs("div",{children:[e.jsx("h1",{children:"Quotation"}),e.jsx("div",{className:"brandName",children:"Ash Labs"}),e.jsx("div",{className:"brandAddr",children:"Bengaluru, Karnataka"})]})]}),e.jsxs("div",{className:"idBlock",children:[e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Quote No."}),e.jsx("strong",{children:s.number})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Date"}),e.jsx("strong",{children:b(s.createdAt)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Valid Till"}),e.jsx("strong",{children:b(s.validTill)})]}),e.jsxs("div",{className:"row",children:[e.jsx("span",{children:"Sales Owner"}),e.jsx("strong",{children:s.references.salesOwner})]})]})]}),e.jsxs(x.Parties,{className:"card",children:[e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Bill To"}),e.jsx("div",{className:"name",children:s.customer.name}),e.jsx("div",{className:"addr",children:s.customer.billing.line1}),e.jsx("div",{className:"addr",children:s.customer.billing.line2}),e.jsxs("div",{className:"line",children:["GSTIN: ",s.customer.billing.gstin]}),e.jsxs("div",{className:"line",children:[e.jsx("a",{href:`mailto:${s.customer.email}`,children:s.customer.email})," ·"," ",e.jsx("a",{href:`tel:${s.customer.phone}`,children:s.customer.phone})]}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:`/customers/${s.customer.id}`,children:"View Profile"}),e.jsx(i,{to:`/customers/${s.customer.id}/edit`,children:"Edit (demo)"}),e.jsx(i,{to:`/customers/${s.customer.id}/print`,children:"Print Customer"})]})]}),e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Ship To"}),e.jsx("div",{className:"name",children:s.customer.name}),e.jsx("div",{className:"addr",children:s.customer.shipping.line1}),e.jsx("div",{className:"addr",children:s.customer.shipping.line2}),e.jsxs("div",{className:"line",children:["Ref: ",s.references.customerRef]}),e.jsxs("div",{className:"line",children:["Opportunity: ",s.references.opportunityId]})]}),e.jsxs("div",{className:"party",children:[e.jsx("h3",{children:"Seller"}),e.jsx("div",{className:"name",children:s.seller.brand}),e.jsx("div",{className:"addr",children:s.seller.address}),e.jsxs("div",{className:"line",children:[e.jsx("a",{href:`mailto:${s.seller.email}`,children:s.seller.email})," ·"," ",e.jsx("a",{href:`tel:${s.seller.phone}`,children:s.seller.phone})]})]})]}),e.jsxs(x.Items,{className:"card",children:[e.jsxs("div",{className:"tableHead",children:[e.jsx("div",{children:"#"}),e.jsx("div",{children:"Item"}),e.jsx("div",{children:"Qty"}),e.jsx("div",{children:"Rate"}),e.jsx("div",{children:"Tax"}),e.jsx("div",{children:"Amount"})]}),T?e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"title",children:"No items in this quote"}),e.jsxs("div",{className:"desc",children:["Browse ",e.jsx(i,{to:"/products",children:"Products"})," or jump to"," ",e.jsx(i,{to:"/medicines",children:"Medicines"})," catalog."]})]}):s.items.map((a,o)=>e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col index",children:o+1}),e.jsxs("div",{className:"col item",children:[e.jsx("div",{className:"name",children:e.jsx(i,{to:`/products/${a.sku}`,children:a.name})}),e.jsxs("div",{className:"muted",children:["SKU: ",a.sku," · HSN: ",a.hsn," · Batch: ",a.batch," · Exp: ",b(a.exp)]}),e.jsx("div",{className:"muted",children:a.desc})]}),e.jsxs("div",{className:"col qty",children:[a.qty," ",a.unit]}),e.jsx("div",{className:"col rate",children:a.rate}),e.jsx("div",{className:"col tax",children:a.tax}),e.jsx("div",{className:"col amount",children:a.lineTotal})]},a.id))]}),e.jsxs(x.TotalsTerms,{className:"card",children:[e.jsxs("div",{className:"totals",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Sub Total"}),e.jsx("strong",{children:s.totals.subTotal})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Discounts"}),e.jsx("strong",{children:s.totals.discount})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Tax"}),e.jsx("strong",{children:s.totals.tax})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Freight"}),e.jsx("strong",{children:s.totals.freight})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{children:"Round Off"}),e.jsx("strong",{children:s.totals.roundOff})]}),e.jsxs("div",{className:"grand",children:[e.jsx("span",{children:"Grand Total"}),e.jsx("strong",{children:s.totals.grand})]})]}),e.jsxs("div",{className:"terms",children:[e.jsx("h3",{children:"Terms & Conditions"}),e.jsx("ul",{children:s.terms.map((a,o)=>e.jsx("li",{children:a},o))}),s.attachments.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"Attachments"}),e.jsx("ul",{className:"attachments",children:s.attachments.map((a,o)=>e.jsx("li",{children:e.jsx("a",{href:a.href,children:a.label})},o))})]})]})]}),e.jsxs(x.SignBlock,{className:"card",children:[e.jsxs("div",{className:"sig",children:[e.jsx("div",{className:"line label",children:"Prepared by"}),e.jsx("div",{className:"line value",children:s.seller.name}),e.jsxs("div",{className:"line muted",children:[s.seller.email," · ",s.seller.phone]})]}),e.jsxs("div",{className:"sig",children:[e.jsx("div",{className:"line label",children:"For & on behalf of"}),e.jsx("div",{className:"line value",children:s.seller.brand}),e.jsx("div",{className:"signBox","aria-hidden":!0})]}),e.jsxs("div",{className:"sig",children:[e.jsx("div",{className:"line label",children:"Customer Acknowledgement"}),e.jsx("div",{className:"signBox","aria-hidden":!0})]})]}),e.jsxs(x.FooterBar,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsxs("span",{children:["Printed: ",j(new Date().toISOString())]}),e.jsxs("span",{children:["Build: ",j("2025-10-06T06:42:50.910Z")]}),e.jsxs("span",{children:["Commit: ",j("2025-10-06T12:12:45+05:30")]})]}),e.jsxs("div",{className:"right",children:[e.jsx(i,{to:"/print/invoice/INV-2031",children:"Print Invoice"}),e.jsx(i,{to:"/print/sticker/STK-1001",children:"Print Sticker"}),e.jsx(i,{to:"/reports/sales",children:"Sales Report"}),e.jsx(i,{to:"/invoices",children:"Invoices"}),e.jsx(i,{to:"/receipts",children:"Receipts"}),e.jsx(i,{to:"/finance",children:"Finance"}),e.jsx(i,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(i,{to:"/settings/appearance",children:"Appearance"}),e.jsx(i,{to:"/help",children:"Help"})]})]})]}),c&&e.jsx(x.Toast,{role:"status","data-type":c.type,onAnimationEnd:()=>h(null),children:c.text})]})};export{R as default};
