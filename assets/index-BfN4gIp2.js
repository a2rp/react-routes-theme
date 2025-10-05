import{d as y,q as I,u as L,r as h,j as e,N as j}from"./index-P_7RwasD.js";const d="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",p="var(--card, #111318)",i="var(--border, #23262d)",r="var(--accent, #5aa9ff)",w="var(--accent-soft, rgba(90,169,255,0.15))",x="var(--danger, #ef4444)",f="var(--radius, 16px)",g={Page:y.div`
        width: 100%;
        padding: 24px 0 64px;
        color: ${d};

        .breadcrumbs {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-top: 6px;
            a {
                color: ${o};
            }
            .current {
                color: ${d};
            }
        }

        .link {
            color: ${d};
            border-bottom: 1px dashed ${i};
        }
        .link:hover {
            color: ${r};
        }

        .muted {
            color: ${o};
        }
        .sep {
            opacity: 0.6;
            margin: 0 6px;
        }
    `,Header:y.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 20px;
        margin-bottom: 16px;
        border-radius: ${f};
        border: 1px solid ${i};
        background: ${p};
        box-shadow: var(--shadow);

        .left h1 {
            font-size: 22px;
            letter-spacing: 0.4px;
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${o};
            font-size: 12px;
            align-items: center;
        }
        .status {
            margin-left: 8px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${i};
            background: color-mix(in oklab, ${r} 10%, transparent);
            color: ${d};
            text-transform: capitalize;
        }

        .actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .btnPrimary,
        .btnGhost,
        .btnDisabled,
        .btnDanger {
            border-radius: 8px;
            padding: 8px 14px;
            border: 1px solid ${i};
            background: ${p};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s, transform 0.05s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${w};
            transform: translateY(1px);
        }
        .btnDanger {
            border-color: ${x};
            color: ${x};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${x} 10%, transparent);
            transform: translateY(1px);
        }
        .btnGhost {
            opacity: 0.95;
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
            transform: translateY(1px);
        }

        .btnDisabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .btnDisabled.danger {
            border-color: ${x};
            color: ${x};
        }
    `,Grid:y.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1080px) {
            grid-template-columns: 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }
        .card {
            background: ${p};
            border: 1px solid ${i};
            border-radius: ${f};
            padding: 16px;
            box-shadow: var(--shadow);
        }
        .sub {
            padding: 14px;
        }

        .identity {
            display: grid;
            grid-template-columns: 1.6fr 0.8fr;
            gap: 16px;
            align-items: center;
            margin-bottom: 16px;
            @media (max-width: 980px) {
                grid-template-columns: 1fr;
            }
            .brand {
                display: flex;
                gap: 16px;
                align-items: center;
            }
            .logo {
                width: 64px;
                height: 64px;
                border-radius: 16px;
                display: grid;
                place-items: center;
                font-weight: 800;
                font-size: 24px;
                background: color-mix(in oklab, ${r} 12%, transparent);
                border: 1px solid ${i};
            }
            .info h2 {
                font-size: 18px;
                margin-bottom: 6px;
            }
            .row {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                align-items: center;
            }
            .scorecard {
                display: grid;
                gap: 10px;
                align-content: start;
                justify-items: start;
            }
            .score {
                display: grid;
                gap: 4px;
            }
            .value {
                font-size: 26px;
                font-weight: 800;
            }
            .stars .star {
                opacity: 0.35;
                margin-right: 2px;
            }
            .stars .fill {
                opacity: 1;
            }
            .hint {
                color: ${o};
                font-size: 12px;
            }
            .pillset {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }
            .pill {
                border: 1px solid ${i};
                padding: 6px 10px;
                border-radius: 999px;
                background: color-mix(in oklab, ${r} 8%, transparent);
            }
        }

        .cardsRow {
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(3, 1fr);
            @media (max-width: 1200px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 780px) {
                grid-template-columns: 1fr;
            }
            .kv {
                border: 1px solid ${i};
                border-radius: 12px;
                padding: 12px 14px;
                background: color-mix(in oklab, ${p} 96%, transparent);
            }
            .k {
                color: ${o};
                font-size: 12px;
            }
            .v {
                color: ${d};
                font-weight: 600;
                margin-top: 2px;
            }
        }

        .grid.two {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr 1fr;
        }
        .grid.three {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 980px) {
            .grid.two,
            .grid.three {
                grid-template-columns: 1fr;
            }
        }

        .badges {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .badge {
            border: 1px solid ${i};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 10%, transparent);
        }

        .checks {
            display: grid;
            gap: 8px;
            align-content: start;
        }
        .checks label {
            display: flex;
            gap: 8px;
            align-items: center;
            color: ${d};
        }
        .checks input {
            accent-color: ${r};
        }

        .contacts {
            display: grid;
            gap: 12px;
        }
        .contact {
            display: grid;
            grid-template-columns: 48px 1fr;
            gap: 12px;
            align-items: center;
            border: 1px solid ${i};
            border-radius: 12px;
            padding: 10px 12px;
            background: color-mix(in oklab, ${p} 96%, transparent);
        }
        .contact .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            font-weight: 700;
            background: color-mix(in oklab, ${r} 14%, transparent);
            border: 1px solid ${i};
        }
        .contact .name {
            font-weight: 700;
        }
        .contact .title {
            color: ${o};
            font-size: 12px;
            margin: 2px 0 6px;
        }

        .addr input {
            margin-bottom: 10px;
        }

        .kvList {
            display: grid;
            gap: 10px;
        }
        .kvList .k {
            color: ${o};
            width: 160px;
            display: inline-block;
        }
        .kvList .v {
            font-weight: 600;
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
            color: ${d};
            padding: 6px 8px;
            border-radius: 8px;
            border: 1px solid ${i};
            background: ${p};
        }
        .links a:hover {
            color: ${r};
            border-color: ${r};
        }

        .risk .chip {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid ${i};
            margin-bottom: 10px;
            background: color-mix(in oklab, ${r} 10%, transparent);
        }
        .risk .list,
        .risk .sla {
            display: grid;
            gap: 8px;
        }
        .risk .k {
            color: ${o};
        }
        .risk .v {
            font-weight: 600;
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
            background: ${r};
            border: 1px solid ${i};
        }

        .docs {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }
        .docs li {
            border: 1px solid ${i};
            border-radius: 12px;
            padding: 10px 12px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            align-items: center;
        }
        .docs .meta .name {
            font-weight: 600;
        }
        .docs .act {
            display: flex;
            gap: 8px;
        }
        .small {
            padding: 6px 10px;
            font-weight: 600;
        }

        .printSummary {
            display: grid;
            gap: 8px;
        }
        .printSummary .line {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
        }
        .printSummary .k {
            color: ${o};
        }
        .printSummary .v {
            color: ${d};
        }
    `,Overlay:y.div`
        position: fixed;
        inset: 0;
        background: rgba(2, 6, 23, 0.55);
        display: grid;
        place-items: center;
        z-index: 50;
    `,Modal:y.div`
        width: min(520px, 92vw);
        border-radius: ${f};
        border: 1px solid ${i};
        background: ${p};
        color: ${d};
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
            background: ${p};
            color: ${d};
            font-weight: 600;
            transition: background 0.25s, color 0.25s, border-color 0.25s,
                box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${w};
        }
        .btnDanger {
            border-color: ${x};
            color: ${x};
        }
        .btnDanger:hover {
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
            background: color-mix(in oklab, ${x} 10%, transparent);
        }
        .btnGhost {
            opacity: 0.9;
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
    `},u=(t,c)=>{const n=t instanceof Date?t:new Date(t),l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=v=>String(v).padStart(2,"0"),m=`${l[n.getDay()]} ${N[n.getMonth()]} ${s(n.getDate())} ${n.getFullYear()}`;return c?`${m} ${s(n.getHours())}:${s(n.getMinutes())}:${s(n.getSeconds())}hrs`:m},T=({open:t,title:c,message:n,confirmText:l="Confirm",danger:N=!1,onConfirm:s,onClose:m})=>t?e.jsx(g.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:m,children:e.jsxs(g.Modal,{className:"card",onMouseDown:v=>v.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:c})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:n})}),e.jsxs("footer",{children:[e.jsx("button",{className:"btnGhost",onClick:m,children:"Cancel"}),e.jsx("button",{className:N?"btnDanger":"btnPrimary",onClick:s,children:l})]})]})}):null,A=({open:t,onClose:c})=>t?e.jsx(g.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:c,children:e.jsxs(g.Modal,{className:"card",onMouseDown:n=>n.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:"Demo mode"})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:"This is a display-only theme. Create/Update/Delete actions are not available in the demo."})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:c,children:"Got it"})})]})}):null,G=()=>{const{vendorId:t}=I(),c=L(),n=h.useRef(null),l=h.useMemo(()=>new Date,[]),N=h.useMemo(()=>({id:t||"VEND-5012",code:"VEND-5012",legalName:"NovaChem Labs Pvt. Ltd.",displayName:"NovaChem",email:"supply@novachem.example.com",phone:"+91 98111 22334",altPhone:"+91 98700 12345",website:"https://novachem.example.com",gstin:"07ABCDE1234F1Z7",pan:"ABCDE1234F",msme:"UDYAM-DL-09-0001234",paymentTerms:"Net 30",creditLimitINR:"1,50,00,000",leadTimeDays:5,incoTerms:"FOB",preferredLogistics:"BlueDart, Delhivery",bank:{name:"ICICI Bank",account:"000705002345",ifsc:"ICIC0000705",branch:"Connaught Place, New Delhi",swift:"ICICINBBXXX"},categories:["Pharma APIs","Excipients","Packaging"],certifications:["GMP","WHO-GMP","ISO 9001","ISO 14001"],compliance:{gxp:!0,reach:!0,rohs:!0,ehs:!0,dataPrivacy:!0},rating:4.6,status:"active",createdAt:l,updatedAt:l,tags:["priority","bulk","domestic"],keyContacts:[{id:"CT-01",name:"Kiran Mehta",title:"Account Manager",email:"kiran.mehta@novachem.example.com",phone:"+91 98100 99881",preferred:"Email"},{id:"CT-02",name:"Rahul Verma",title:"Finance SPOC",email:"rahul.verma@novachem.example.com",phone:"+91 99900 11223",preferred:"Phone"}],billing:{line1:"501, 5th Floor, Tower B",line2:"DLF Cyber City",city:"Gurugram",state:"HR",zip:"122002",country:"India"},shipping:{line1:"Plot 23, Industrial Area",line2:"Phase II",city:"Gurugram",state:"HR",zip:"122016",country:"India"},risk:{financial:"Low",delivery:"Low",quality:"Medium",overall:"Low"},sla:{otp:"98.1%",defectRate:"0.42%",avgResponse:"02:14:00",returnsRate:"0.18%"},documents:[{id:"DOC-1",name:"GST Certificate.pdf",type:"PDF",size:"324 KB",uploadedAt:l},{id:"DOC-2",name:"GMP Compliance Letter.pdf",type:"PDF",size:"217 KB",uploadedAt:l},{id:"DOC-3",name:"Bank Cancelled Cheque.png",type:"PNG",size:"492 KB",uploadedAt:l}],lastPO:{id:"PO-70145",date:l,total:"₹ 12,48,500"},lastInvoice:{id:"INV-2031",date:l,total:"₹ 12,48,500"}}),[t,l]),[s]=h.useState(N),[m,v]=h.useState(!1),[D,k]=h.useState(!1),$=`${s.displayName} (${s.code})`,C=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(j,{to:"/vendors",children:"Vendors"}),e.jsx("span",{children:"/"}),e.jsx(j,{to:`/vendors/${s.id}`,children:s.id}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Edit"})]}),P=()=>{n.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},O=()=>{c(`/vendors/${s.id}`)},S=()=>{v(!1),c("/vendors")};return h.useEffect(()=>{},[]),e.jsxs(g.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(g.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"Vendor"}),C,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Created: ",u(s.createdAt)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Updated: ",u(s.updatedAt,!0)]}),e.jsx("span",{className:`status ${s.status}`,children:s.status})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:O,title:"Back to details",children:"Back"}),e.jsx("button",{className:"btnGhost",onClick:P,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnDisabled",onClick:()=>k(!0),title:"Demo only",children:"Save"}),e.jsx("button",{className:"btnDisabled",onClick:()=>k(!0),title:"Demo only",children:"Save & View"}),e.jsx("button",{className:"btnDisabled danger",onClick:()=>k(!0),title:"Demo only",children:"Delete"})]})]}),e.jsxs(g.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"identity",children:[e.jsxs("div",{className:"brand",children:[e.jsx("div",{className:"logo","aria-hidden":"true",children:(s.displayName||"N")[0]}),e.jsxs("div",{className:"info",children:[e.jsx("h2",{children:s.legalName}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"muted",children:s.displayName}),e.jsx("span",{className:"sep",children:"•"}),e.jsx("a",{className:"link",href:s.website,target:"_blank",rel:"noreferrer",children:s.website})]}),e.jsxs("div",{className:"row",children:[e.jsx("a",{className:"link",href:`mailto:${s.email}`,children:s.email}),e.jsx("span",{className:"sep",children:"•"}),e.jsx("a",{className:"link",href:`tel:${s.phone}`,children:s.phone})]})]})]}),e.jsxs("div",{className:"scorecard",children:[e.jsxs("div",{className:"score",children:[e.jsx("div",{className:"value",children:s.rating.toFixed(1)}),e.jsx("div",{className:"stars","aria-label":`${s.rating.toFixed(1)} out of 5`,children:Array.from({length:5}).map((a,b)=>e.jsx("span",{className:b<Math.round(s.rating)?"star fill":"star",children:"★"},b))}),e.jsx("div",{className:"hint",children:"Vendor Rating"})]}),e.jsxs("div",{className:"pillset",children:[e.jsx("span",{className:"pill",children:s.categories[0]}),e.jsx("span",{className:"pill",children:s.categories[1]}),e.jsx("span",{className:"pill",children:s.categories[2]})]})]})]}),e.jsxs("div",{className:"cardsRow",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"GSTIN"}),e.jsx("div",{className:"v",children:s.gstin})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"PAN"}),e.jsx("div",{className:"v",children:s.pan})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"MSME"}),e.jsx("div",{className:"v",children:s.msme})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Credit Limit"}),e.jsx("div",{className:"v",children:s.creditLimitINR})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Payment Terms"}),e.jsx("div",{className:"v",children:s.paymentTerms})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Lead Time"}),e.jsxs("div",{className:"v",children:[s.leadTimeDays," days"]})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Compliance & Certifications"}),e.jsxs("div",{className:"grid two",children:[e.jsx("div",{children:e.jsx("ul",{className:"badges",children:s.certifications.map(a=>e.jsx("li",{className:"badge",children:a},a))})}),e.jsxs("div",{className:"checks",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!!s.compliance.gxp,readOnly:!0})," GxP Ready"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!!s.compliance.reach,readOnly:!0})," REACH"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!!s.compliance.rohs,readOnly:!0})," RoHS"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!!s.compliance.ehs,readOnly:!0})," EHS"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!!s.compliance.dataPrivacy,readOnly:!0})," Data Privacy"]})]})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Key Contacts"}),e.jsx("div",{className:"contacts",children:s.keyContacts.map(a=>e.jsxs("div",{className:"contact",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:a.name.charAt(0)}),e.jsxs("div",{className:"ct",children:[e.jsx("div",{className:"name",children:a.name}),e.jsx("div",{className:"title",children:a.title}),e.jsxs("div",{className:"muted",children:[a.preferred," • ",a.phone]}),e.jsx("a",{className:"link",href:`mailto:${a.email}`,children:a.email})]})]},a.id))})]}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Billing Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("input",{readOnly:!0,value:s.billing.line1}),e.jsx("input",{readOnly:!0,value:s.billing.line2}),e.jsxs("div",{className:"grid three",children:[e.jsx("input",{readOnly:!0,value:s.billing.city}),e.jsx("input",{readOnly:!0,value:s.billing.state}),e.jsx("input",{readOnly:!0,value:s.billing.zip})]}),e.jsx("input",{readOnly:!0,value:s.billing.country})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Shipping Address"}),e.jsxs("div",{className:"addr",children:[e.jsx("input",{readOnly:!0,value:s.shipping.line1}),e.jsx("input",{readOnly:!0,value:s.shipping.line2}),e.jsxs("div",{className:"grid three",children:[e.jsx("input",{readOnly:!0,value:s.shipping.city}),e.jsx("input",{readOnly:!0,value:s.shipping.state}),e.jsx("input",{readOnly:!0,value:s.shipping.zip})]}),e.jsx("input",{readOnly:!0,value:s.shipping.country})]})]})]}),e.jsxs("div",{className:"grid two",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Bank Details"}),e.jsxs("div",{className:"kvList",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Bank"}),e.jsx("span",{className:"v",children:s.bank.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Account"}),e.jsx("span",{className:"v",children:s.bank.account})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"IFSC"}),e.jsx("span",{className:"v",children:s.bank.ifsc})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Branch"}),e.jsx("span",{className:"v",children:s.bank.branch})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"SWIFT"}),e.jsx("span",{className:"v",children:s.bank.swift})]})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("h3",{children:"Commercial Terms"}),e.jsxs("div",{className:"kvList",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Payment Terms"}),e.jsx("span",{className:"v",children:s.paymentTerms})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Credit Limit"}),e.jsx("span",{className:"v",children:s.creditLimitINR})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Incoterms"}),e.jsx("span",{className:"v",children:s.incoTerms})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Preferred Logistics"}),e.jsx("span",{className:"v",children:s.preferredLogistics})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Lead Time"}),e.jsxs("span",{className:"v",children:[s.leadTimeDays," days"]})]})]})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(j,{to:`/vendors/${s.id}`,children:"View Details"})}),e.jsx("li",{children:e.jsx(j,{to:"/purchase-orders",children:"Purchase Orders"})}),e.jsx("li",{children:e.jsx(j,{to:"/invoices",children:"Invoices"})}),e.jsx("li",{children:e.jsx(j,{to:"/inventory",children:"Inventory"})}),e.jsx("li",{children:e.jsx(j,{to:"/reports/procurement",children:"Procurement Report"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Risk & SLA"}),e.jsxs("div",{className:"risk",children:[e.jsxs("span",{className:`chip ${s.risk.overall.toLowerCase()}`,children:["Overall: ",s.risk.overall]}),e.jsxs("div",{className:"list",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Financial"}),e.jsx("span",{className:"v",children:s.risk.financial})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Delivery"}),e.jsx("span",{className:"v",children:s.risk.delivery})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Quality"}),e.jsx("span",{className:"v",children:s.risk.quality})]})]}),e.jsxs("div",{className:"sla",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"On-time"}),e.jsx("span",{className:"v",children:s.sla.otp})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Defects"}),e.jsx("span",{className:"v",children:s.sla.defectRate})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Response"}),e.jsx("span",{className:"v",children:s.sla.avgResponse})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Returns"}),e.jsx("span",{className:"v",children:s.sla.returnsRate})]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Recent Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsxs("strong",{children:["PO ",s.lastPO.id," issued"]}),e.jsx("div",{className:"muted",children:u(s.lastPO.date,!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsxs("strong",{children:["Invoice ",s.lastInvoice.id," received"]}),e.jsx("div",{className:"muted",children:u(s.lastInvoice.date)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Vendor documents updated"}),e.jsx("div",{className:"muted",children:u(l,!0)})]})]})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:n,children:[e.jsx("h3",{children:"Print Summary"}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Vendor"}),e.jsx("span",{className:"v",children:$})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Email"}),e.jsx("span",{className:"v",children:s.email})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Phone"}),e.jsx("span",{className:"v",children:s.phone})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"GSTIN"}),e.jsx("span",{className:"v",children:s.gstin})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Payment Terms"}),e.jsx("span",{className:"v",children:s.paymentTerms})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Lead Time"}),e.jsxs("span",{className:"v",children:[s.leadTimeDays," days"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:u(s.createdAt,!0)})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Documents"}),e.jsx("ul",{className:"docs",children:s.documents.map(a=>e.jsxs("li",{children:[e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"name",children:a.name}),e.jsxs("span",{className:"muted",children:[a.type," • ",a.size," • ",u(a.uploadedAt)]})]}),e.jsxs("div",{className:"act",children:[e.jsx("a",{className:"btnGhost small",href:"#",onClick:b=>b.preventDefault(),children:"Preview"}),e.jsx("a",{className:"btnGhost small",href:"#",onClick:b=>b.preventDefault(),children:"Download"})]})]},a.id))})]})]})]}),e.jsx(T,{open:m,danger:!0,title:"Delete vendor?",message:`This will permanently remove ${$}.`,confirmText:"Delete",onConfirm:S,onClose:()=>v(!1)}),e.jsx(A,{open:D,onClose:()=>k(!1)})]})};export{G as default};
