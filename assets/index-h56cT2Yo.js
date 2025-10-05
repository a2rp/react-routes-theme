import{d as h,q as w,u as P,r as b,j as e,N as p}from"./index-DwhKQ_MC.js";import{k as A,s as D,d as T,a as C,t as f,u as y,v as k,w as L}from"./index-iMuACjyt.js";const t="var(--text, #f3f4f6)",l="var(--muted, #a0a0a7)",c="var(--card, #111318)",i="var(--border, #23262d)",r="var(--accent, #5aa9ff)",$="var(--accent-soft, rgba(90,169,255,0.15))",v={Page:h.div`
        padding: 20px 0 64px;
        color: ${t};

        .breadcrumbs {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            margin-top: 4px;
            a {
                color: ${l};
            }
            .current {
                color: ${t};
            }
        }
    `,Header:h.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 18px;
        margin-bottom: 16px;

        .identity {
            display: flex;
            align-items: center;
            gap: 14px;
        }
        .avatar {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            border: 1px solid ${i};
            background: ${c};
            display: grid;
            place-items: center;
            font-weight: 700;
            font-size: 20px;
        }
        h1 {
            font-size: 22px;
            letter-spacing: 0.3px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }
        .badge {
            padding: 4px 8px;
            border-radius: 999px;
            font-size: 12px;
            border: 1px solid ${i};
            background: color-mix(in oklab, ${r} 10%, transparent);
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
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${c};
            color: ${t};
            font-weight: 600;
            display: inline-flex;
            gap: 8px;
            align-items: center;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.06s ease;
        }
        .btnPrimary:hover {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${$};
        }
        .btnGhost:hover {
            color: ${r};
            border-color: ${r};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }

        .isDemo {
            opacity: 0.85;
            position: relative;
        }
        .isDemo:hover::after {
            content: "Demo mode: disabled";
            position: absolute;
            left: 0;
            right: 0;
            top: calc(100% + 6px);
            background: ${c};
            border: 1px solid ${i};
            border-radius: 8px;
            padding: 6px 8px;
            font-size: 12px;
            color: ${t};
        }
    `,InfoBar:h.div`
        margin: 10px 0 16px;
        padding: 10px 14px;
        border: 1px solid ${i};
        border-radius: 10px;
        background: color-mix(in oklab, ${r} 10%, transparent);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        .close {
            border: 1px solid ${i};
            background: transparent;
            color: ${t};
            border-radius: 8px;
            padding: 4px 8px;
        }
        .close:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${$};
        }
    `,Grid:h.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }

        .card {
            background: ${c};
            border: 1px solid ${i};
            border-radius: 14px;
            padding: 16px;
            box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.35));
        }

        /* left column */
        .left {
            display: grid;
            gap: 16px;
        }

        .scorecards {
            display: grid;
            gap: 14px;
            grid-template-columns: repeat(3, 1fr);
            @media (max-width: 1200px) {
                grid-template-columns: 1fr;
            }
            .score {
                border: 1px solid ${i};
                border-radius: 12px;
                padding: 12px;
                background: color-mix(in oklab, ${c} 96%, transparent);
                .k {
                    color: ${l};
                    font-size: 12px;
                }
                .v {
                    font-size: 20px;
                    margin-top: 4px;
                }
                .sub {
                    color: ${l};
                    font-size: 12px;
                    margin-top: 4px;
                }
                .bar {
                    width: 100%;
                    height: 8px;
                    border-radius: 999px;
                    background: rgba(0, 0, 0, 0.15);
                    margin-top: 10px;
                    overflow: hidden;
                }
                .bar > span {
                    display: block;
                    height: 100%;
                    background: ${r};
                }
            }
        }

        .info {
            .row {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 14px;
                @media (max-width: 900px) {
                    grid-template-columns: 1fr;
                }
                .label {
                    color: ${l};
                    font-size: 12px;
                }
                .value {
                    font-size: 14px;
                }
            }
            .tags {
                margin-top: 14px;
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .chip {
                border: 1px solid ${i};
                padding: 6px 10px;
                border-radius: 999px;
                background: color-mix(in oklab, ${r} 8%, transparent);
            }
        }

        .duo {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            @media (max-width: 1000px) {
                grid-template-columns: 1fr;
            }
            .pane {
                border: 1px solid ${i};
                border-radius: 12px;
                padding: 12px;
                background: color-mix(in oklab, ${c} 96%, transparent);
            }
            h3 {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 14px;
                margin-bottom: 10px;
            }
            address {
                font-style: normal;
                line-height: 1.6;
            }
        }

        .contacts {
            h3 {
                margin-bottom: 10px;
            }
            .list {
                display: grid;
                gap: 12px;
            }
            .contact {
                display: grid;
                grid-template-columns: 44px 1fr;
                gap: 12px;
                align-items: center;
                border: 1px solid ${i};
                border-radius: 12px;
                padding: 10px;
                background: color-mix(in oklab, ${c} 96%, transparent);
                .avatar {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: ${c};
                    border: 1px solid ${i};
                    display: grid;
                    place-items: center;
                    font-weight: 700;
                }
                .name {
                    font-weight: 600;
                }
                .role {
                    color: ${l};
                    font-size: 12px;
                    margin-bottom: 6px;
                }
                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 8px;
                }
                .link {
                    color: ${t};
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                }
                .link:hover {
                    color: ${r};
                }
                .best {
                    color: ${l};
                    font-size: 12px;
                }
                @media (max-width: 900px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }
            }
        }

        .notes {
            p {
                margin-bottom: 8px;
            }
            .muted {
                color: ${l};
                font-size: 12px;
            }
        }

        /* right column */
        .right {
            display: grid;
            gap: 16px;
        }

        .web-contact .grid {
            display: grid;
            gap: 8px;
        }
        .web-contact .line {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${t};
        }
        .web-contact .line:hover {
            color: ${r};
        }

        .compliance .kv,
        .banking .kv,
        .print .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 8px 12px;
        }
        .print h3 {
            margin-bottom: 10px;
        }

        .related .subgrid {
            display: grid;
            gap: 12px;
            .subhead {
                color: ${l};
                font-size: 12px;
                margin-bottom: 6px;
            }
            .list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: grid;
                gap: 6px;
            }
            .list li {
                display: grid;
                grid-template-columns: 1fr auto auto auto;
                gap: 8px;
                align-items: center;
            }
            .list a {
                color: ${t};
            }
            .list a:hover {
                color: ${r};
            }
            .pill {
                border: 1px solid ${i};
                border-radius: 999px;
                padding: 2px 8px;
                font-size: 12px;
            }
            .value {
                color: ${l};
                font-size: 12px;
                text-align: right;
            }
        }
    `},n=(o,u)=>{const d=o instanceof Date?o:new Date(o),j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=g=>String(g).padStart(2,"0"),x=`${j[d.getDay()]} ${m[d.getMonth()]} ${s(d.getDate())} ${d.getFullYear()}`;return u?`${x} ${s(d.getHours())}:${s(d.getMinutes())}:${s(d.getSeconds())}hrs`:x},O=()=>{var N;const{vendorId:o}=w(),u=P(),d=b.useRef(null),[j,m]=b.useState(!1),s=b.useMemo(()=>({id:o||"VEND-2027",code:o||"VEND-2027",legalName:"Medisource Lifecare Pvt. Ltd.",tradeName:"Medisource",status:"active",rating:4.6,tags:["primary","pharma","iso-9001","priority"],website:"https://medisource.example.com",email:"account@medisource.com",phone:"+91 98765 22010",altPhone:"+91 98765 22011",createdAt:"2025-04-09T10:30:00+05:30",updatedAt:"2025-10-04T15:20:12+05:30",paymentTerms:"Net 30",creditLimit:"₹ 25,00,000",defaultCurrency:"INR",moq:"50 units",leadTimeDays:4,category:"Pharmaceuticals & Consumables",tax:{gstin:"07ABCDE1234F1Z9",pan:"ABCDE1234F",tan:"DELX01234A"},bank:{accountName:"Medisource Lifecare Pvt. Ltd.",maskedAccount:"XXXXXX2451",ifsc:"HDFC0002199",bankName:"HDFC Bank",branch:"Saket, New Delhi",upi:"medisource@hdfcbank",paymentWindow:"09:00–18:00 (Mon–Sat)"},billingAddress:{line1:"414, 4th Floor, Horizon Plaza",line2:"Saket District Centre",city:"New Delhi",state:"DL",zip:"110017",country:"India"},shippingAddress:{line1:"Plot 12, Sector 35",line2:"Udyog Vihar Phase IV",city:"Gurugram",state:"HR",zip:"122016",country:"India"},contacts:[{id:"C-01",name:"Neha Kapoor",role:"Key Account Manager",email:"neha.kapoor@medisource.com",phone:"+91 98990 11122",bestTime:"10:00–17:00"},{id:"C-02",name:"Rahul Menon",role:"Finance",email:"rahul.menon@medisource.com",phone:"+91 98990 22233",bestTime:"11:00–16:00"},{id:"C-03",name:"Priya Desai",role:"Dispatch",email:"priya.desai@medisource.com",phone:"+91 98990 33344",bestTime:"09:30–18:00"}],metrics:{onTimeDelivery:"96%",fillRate:"98%",avgLeadTime:"4 days",defectRate:"0.7%",returns:"2",activePOs:"3",lastPO:{id:"PO-4021",date:"2025-09-28T12:30:00+05:30"}},related:{pos:[{id:"PO-4021",date:"2025-09-28T12:30:00+05:30",value:"₹ 3,45,000",status:"Open"},{id:"PO-3987",date:"2025-09-12T16:45:00+05:30",value:"₹ 1,26,500",status:"Closed"},{id:"PO-3902",date:"2025-08-22T11:15:00+05:30",value:"₹ 2,10,000",status:"Closed"}],bills:[{id:"BILL-2099",date:"2025-09-30T10:00:00+05:30",value:"₹ 1,26,500",status:"Paid"},{id:"BILL-2051",date:"2025-09-05T14:05:00+05:30",value:"₹ 2,10,000",status:"Paid"}],shipments:[{id:"SHP-1880",date:"2025-09-29T09:50:00+05:30",carrier:"BlueDart",status:"In Transit"}]},notes:"Priority vendor for antibiotics & saline. Request shipment pictures for batches near expiry. Send e-way bill copies with every shipment."}),[o]),x=e.jsxs("nav",{className:"breadcrumbs","aria-label":"Breadcrumb",children:[e.jsx(p,{to:"/vendors",children:"Vendors"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:s.code})]}),g=()=>{d.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())};return e.jsxs(v.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(v.Header,{className:"card",children:[e.jsxs("div",{className:"identity",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:((N=s.tradeName)==null?void 0:N[0])||"V"}),e.jsxs("div",{className:"titles",children:[e.jsxs("h1",{children:[s.tradeName," ",e.jsx("span",{className:`badge ${s.status}`,children:s.status})]}),x,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Code: ",s.code]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",n(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",n(s.updatedAt,!0)]})]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btnGhost",onClick:()=>u("/vendors"),children:[e.jsx(A,{})," Back to Vendors"]}),e.jsxs(p,{to:`/vendors/${s.id}/edit`,className:"btnPrimary isDemo",onClick:a=>(a.preventDefault(),m(!0)),children:[e.jsx(D,{})," Edit Vendor"]}),e.jsxs(p,{to:`/purchase-orders/new?vendor=${encodeURIComponent(s.id)}`,className:"btnPrimary isDemo",onClick:a=>(a.preventDefault(),m(!0)),children:[e.jsx(T,{})," New PO"]}),e.jsxs("button",{className:"btnGhost",onClick:g,children:[e.jsx(C,{})," Print"]})]})]}),j&&e.jsxs(v.InfoBar,{role:"status","aria-live":"polite",onAnimationEnd:()=>{},children:["Demo mode – actions are disabled.",e.jsx("button",{onClick:()=>m(!1),className:"close",children:"×"})]}),e.jsxs(v.Grid,{children:[e.jsxs("section",{className:"left",children:[e.jsxs("div",{className:"card scorecards",children:[e.jsxs("div",{className:"score",children:[e.jsx("div",{className:"k",children:"On-time Delivery"}),e.jsx("div",{className:"v",children:s.metrics.onTimeDelivery}),e.jsx("div",{className:"bar",children:e.jsx("span",{style:{width:s.metrics.onTimeDelivery}})})]}),e.jsxs("div",{className:"score",children:[e.jsx("div",{className:"k",children:"Fill Rate"}),e.jsx("div",{className:"v",children:s.metrics.fillRate}),e.jsx("div",{className:"bar",children:e.jsx("span",{style:{width:s.metrics.fillRate}})})]}),e.jsxs("div",{className:"score",children:[e.jsx("div",{className:"k",children:"Avg Lead Time"}),e.jsx("div",{className:"v",children:s.metrics.avgLeadTime}),e.jsx("div",{className:"sub",children:"Target: 4–6 days"})]}),e.jsxs("div",{className:"score",children:[e.jsx("div",{className:"k",children:"Defect Rate"}),e.jsx("div",{className:"v",children:s.metrics.defectRate}),e.jsx("div",{className:"sub",children:"QC flagged last 90 days"})]}),e.jsxs("div",{className:"score",children:[e.jsx("div",{className:"k",children:"Active POs"}),e.jsx("div",{className:"v",children:s.metrics.activePOs}),e.jsxs("div",{className:"sub",children:["Last PO: ",e.jsx(p,{to:`/purchase-orders/${s.metrics.lastPO.id}`,children:s.metrics.lastPO.id})," on ",n(s.metrics.lastPO.date)]})]}),e.jsxs("div",{className:"score",children:[e.jsx("div",{className:"k",children:"Rating"}),e.jsxs("div",{className:"v",children:[s.rating," / 5"]}),e.jsx("div",{className:"sub",children:"Internal scorecard"})]})]}),e.jsxs("div",{className:"card info",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Category"}),e.jsx("div",{className:"value",children:s.category})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Payment Terms"}),e.jsx("div",{className:"value",children:s.paymentTerms})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Credit Limit"}),e.jsx("div",{className:"value",children:s.creditLimit})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Default Currency"}),e.jsx("div",{className:"value",children:s.defaultCurrency})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"MOQ"}),e.jsx("div",{className:"value",children:s.moq})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Lead Time"}),e.jsxs("div",{className:"value",children:[s.leadTimeDays," days"]})]})]}),e.jsx("div",{className:"tags",children:s.tags.map(a=>e.jsx("span",{className:"chip",children:a},a))})]}),e.jsxs("div",{className:"card duo",children:[e.jsxs("div",{className:"pane",children:[e.jsxs("h3",{children:[e.jsx(f,{})," Billing Address"]}),e.jsxs("address",{children:[s.billingAddress.line1,e.jsx("br",{}),s.billingAddress.line2,e.jsx("br",{}),s.billingAddress.city," ",s.billingAddress.zip,e.jsx("br",{}),s.billingAddress.state,", ",s.billingAddress.country]})]}),e.jsxs("div",{className:"pane",children:[e.jsxs("h3",{children:[e.jsx(f,{})," Shipping Address"]}),e.jsxs("address",{children:[s.shippingAddress.line1,e.jsx("br",{}),s.shippingAddress.line2,e.jsx("br",{}),s.shippingAddress.city," ",s.shippingAddress.zip,e.jsx("br",{}),s.shippingAddress.state,", ",s.shippingAddress.country]})]})]}),e.jsxs("div",{className:"card contacts",children:[e.jsx("h3",{children:"Contacts"}),e.jsx("div",{className:"list",children:s.contacts.map(a=>e.jsxs("div",{className:"contact",children:[e.jsx("div",{className:"avatar",children:a.name[0]}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"name",children:a.name}),e.jsx("div",{className:"role",children:a.role}),e.jsxs("div",{className:"grid",children:[e.jsxs("a",{href:`mailto:${a.email}`,className:"link",children:[e.jsx(y,{})," ",a.email]}),e.jsxs("a",{href:`tel:${a.phone}`,className:"link",children:[e.jsx(k,{})," ",a.phone]}),e.jsxs("div",{className:"best",children:["Best time: ",a.bestTime]})]})]})]},a.id))})]}),e.jsxs("div",{className:"card notes",children:[e.jsx("h3",{children:"Notes"}),e.jsx("p",{children:s.notes}),e.jsxs("div",{className:"muted",children:["Last update: ",n(s.updatedAt,!0)]})]})]}),e.jsxs("aside",{className:"right",children:[e.jsxs("div",{className:"card web-contact",children:[e.jsx("h3",{children:"Contact & Web"}),e.jsxs("div",{className:"grid",children:[e.jsxs("a",{className:"line",href:`mailto:${s.email}`,children:[e.jsx(y,{})," ",s.email]}),e.jsxs("a",{className:"line",href:`tel:${s.phone}`,children:[e.jsx(k,{})," ",s.phone]}),e.jsxs("a",{className:"line",href:s.website,target:"_blank",rel:"noreferrer",children:[e.jsx(L,{})," ",s.website.replace(/^https?:\/\//,"")]})]})]}),e.jsxs("div",{className:"card compliance",children:[e.jsx("h3",{children:"Compliance"}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"GSTIN"}),e.jsx("div",{className:"v",children:s.tax.gstin}),e.jsx("div",{className:"k",children:"PAN"}),e.jsx("div",{className:"v",children:s.tax.pan}),e.jsx("div",{className:"k",children:"TAN"}),e.jsx("div",{className:"v",children:s.tax.tan})]})]}),e.jsxs("div",{className:"card banking",children:[e.jsx("h3",{children:"Banking"}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Account Name"}),e.jsx("div",{className:"v",children:s.bank.accountName}),e.jsx("div",{className:"k",children:"Account No."}),e.jsx("div",{className:"v",children:s.bank.maskedAccount}),e.jsx("div",{className:"k",children:"IFSC"}),e.jsx("div",{className:"v",children:s.bank.ifsc}),e.jsx("div",{className:"k",children:"Bank"}),e.jsxs("div",{className:"v",children:[s.bank.bankName,", ",s.bank.branch]}),e.jsx("div",{className:"k",children:"UPI"}),e.jsx("div",{className:"v",children:s.bank.upi}),e.jsx("div",{className:"k",children:"Payment Window"}),e.jsx("div",{className:"v",children:s.bank.paymentWindow})]})]}),e.jsxs("div",{className:"card related",children:[e.jsx("h3",{children:"Related"}),e.jsxs("div",{className:"subgrid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"subhead",children:"Purchase Orders"}),e.jsx("ul",{className:"list",children:s.related.pos.map(a=>e.jsxs("li",{children:[e.jsx(p,{to:`/purchase-orders/${a.id}`,children:a.id}),e.jsxs("span",{className:"muted",children:[" • ",n(a.date)]}),e.jsx("span",{className:"pill",children:a.status}),e.jsx("span",{className:"value",children:a.value})]},a.id))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"subhead",children:"Bills"}),e.jsx("ul",{className:"list",children:s.related.bills.map(a=>e.jsxs("li",{children:[e.jsx(p,{to:`/purchase-orders/${a.id}`,children:a.id}),e.jsxs("span",{className:"muted",children:[" • ",n(a.date)]}),e.jsx("span",{className:"pill",children:a.status}),e.jsx("span",{className:"value",children:a.value})]},a.id))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"subhead",children:"Shipments"}),e.jsx("ul",{className:"list",children:s.related.shipments.map(a=>e.jsxs("li",{children:[e.jsx(p,{to:`/shipments/${a.id}`,children:a.id}),e.jsxs("span",{className:"muted",children:[" • ",n(a.date)]}),e.jsx("span",{className:"pill",children:a.status}),e.jsx("span",{className:"value",children:a.carrier})]},a.id))})]})]})]}),e.jsxs("div",{className:"card print",id:"search-print-area",ref:d,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Vendor"}),e.jsxs("div",{className:"v",children:[s.legalName," (",s.code,")"]}),e.jsx("div",{className:"k",children:"Status"}),e.jsx("div",{className:"v",children:s.status}),e.jsx("div",{className:"k",children:"Category"}),e.jsx("div",{className:"v",children:s.category}),e.jsx("div",{className:"k",children:"Email"}),e.jsx("div",{className:"v",children:s.email}),e.jsx("div",{className:"k",children:"Phone"}),e.jsx("div",{className:"v",children:s.phone}),e.jsx("div",{className:"k",children:"Payment Terms"}),e.jsx("div",{className:"v",children:s.paymentTerms}),e.jsx("div",{className:"k",children:"Last PO"}),e.jsxs("div",{className:"v",children:[s.metrics.lastPO.id," on ",n(s.metrics.lastPO.date,!0)]}),e.jsx("div",{className:"k",children:"Created"}),e.jsx("div",{className:"v",children:n(s.createdAt,!0)}),e.jsx("div",{className:"k",children:"Updated"}),e.jsx("div",{className:"v",children:n(s.updatedAt,!0)})]})]})]})]})]})};export{O as default};
