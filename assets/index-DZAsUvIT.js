import{d as v,u as I,r as b,j as e,N as D}from"./index-BscvFKDB.js";const c="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",m="var(--card, #111318)",n="var(--border, #23262d)",r="var(--accent, #5aa9ff)",f="var(--accent-soft, rgba(90,169,255,0.15))",G="var(--radius, 16px)",N={Wrap:v.div`
        color: ${c};
        padding: 20px 0 80px;
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
        .breadcrumbs {
            display: flex;
            gap: 8px;
            margin-top: 6px;
            align-items: center;
        }
        .breadcrumbs a {
            color: ${o};
        }
        .breadcrumbs .current {
            color: ${c};
        }
        .meta {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            color: ${o};
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
            border: 1px solid ${n};
            background: ${m};
            color: ${c};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }
    `,TopStrip:v.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        margin-bottom: 12px;

        .stepper {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .step {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid ${n};
            background: ${m};
            color: ${o};
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .step .num {
            width: 22px;
            height: 22px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            border: 1px solid ${n};
        }
        .step.active {
            color: ${r};
            border-color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .step:hover {
            color: ${r};
            border-color: ${r};
        }

        .tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .chip {
            border: 1px solid ${n};
            padding: 6px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${r} 10%, transparent);
            color: ${c};
            white-space: nowrap;
        }
        .chip.alt {
            background: color-mix(in oklab, ${r} 6%, transparent);
        }
    `,Grid:v.div`
        display: grid;
        gap: 16px;
        grid-template-columns: 2fr 1fr;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .col.main.card {
            padding: 16px 18px;
        }
        .block {
            margin-bottom: 16px;
        }

        .blockHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }
        .blockHead.between {
            justify-content: space-between;
        }
        .blockHead h3 {
            font-size: 16px;
        }
        .blockHead .micro {
            color: ${o};
            font-size: 12px;
            display: flex;
            gap: 8px;
        }

        .fields {
            display: grid;
            gap: 12px;
        }
        .two {
            grid-template-columns: 1fr;
        }
        .three {
            grid-template-columns: 1fr;
        }
        .four {
            grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
            .two {
                grid-template-columns: 1fr 1fr;
            }
            .three {
                grid-template-columns: repeat(3, 1fr);
            }
            .four {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        label {
            display: block;
            font-size: 12px;
            color: ${o};
            margin-bottom: 6px;
        }
        input,
        select {
            width: 100%;
        }

        .twoCol {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 1000px) {
            .twoCol {
                grid-template-columns: 1fr 1fr;
            }
        }
        .sub {
            padding: 14px;
        }

        .carrierGrid {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 800px) {
            .carrierGrid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .carrier {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            border: 1px solid ${n};
            background: ${m};
            padding: 12px;
            border-radius: 12px;
            cursor: pointer;
            transition: border-color 0.25s, box-shadow 0.25s, color 0.25s;
        }
        .carrier:hover {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .carrier input {
            margin-top: 3px;
        }
        .carrier .meta .t {
            font-weight: 700;
        }
        .carrier .meta .d {
            color: ${o};
            font-size: 12px;
        }
        .carrier.active {
            border-color: ${r};
            box-shadow: 0 0 0 3px ${f};
            color: ${c};
        }

        .tableWrap {
            overflow: auto;
            border: 1px solid ${n};
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${n};
        }
        th {
            background: ${m};
            color: ${r};
            text-align: left;
        }
        td a {
            color: ${c};
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }
        .num {
            text-align: right;
        }

        .review {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
        }
        @media (min-width: 800px) {
            .review {
                grid-template-columns: 1fr 1fr;
            }
        }
        .review .k {
            color: ${o};
        }
        .review .v {
            color: ${c};
        }

        .ctaRow {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${m};
            color: ${c};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s,
                transform 0.08s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
        .btnGhost:hover {
            border-color: ${r};
            color: ${r};
        }
        .btnPrimary:active,
        .btnGhost:active {
            transform: translateY(1px);
        }

        /* sidebar */
        .side {
            display: grid;
            gap: 16px;
        }
        .chargeList {
            display: grid;
            gap: 8px;
        }
        .chargeList > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .chargeList .total {
            padding-top: 6px;
            border-top: 1px solid ${n};
            font-weight: 700;
        }

        .files {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
        }
        .files li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .files a {
            color: ${c};
        }
        .miniActions {
            display: flex;
            gap: 8px;
            margin-top: 10px;
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
            border: 1px solid ${n};
        }
        .timeline .muted {
            color: ${o};
            font-size: 12px;
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
            color: ${c};
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
        border-radius: ${G};
        border: 1px solid ${n};
        background: ${m};
        color: ${c};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        overflow: hidden;

        header {
            padding: 14px 16px;
            border-bottom: 1px solid ${n};
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
            border-top: 1px solid ${n};
        }

        .btnPrimary {
            border-radius: 10px;
            padding: 8px 14px;
            border: 1px solid ${n};
            background: ${m};
            color: ${c};
            font-weight: 600;
            transition: border-color 0.25s, color 0.25s, box-shadow 0.25s;
        }
        .btnPrimary:hover {
            border-color: ${r};
            color: ${r};
            box-shadow: 0 0 0 3px ${f};
        }
    `},p=(x,u)=>{const l=x instanceof Date?x:new Date(x),h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],j=w=>String(w).padStart(2,"0"),y=`${h[l.getDay()]} ${g[l.getMonth()]} ${j(l.getDate())} ${l.getFullYear()}`;return u?`${y} ${j(l.getHours())}:${j(l.getMinutes())}:${j(l.getSeconds())}hrs`:y},H=({open:x,title:u,message:l,onClose:h})=>x?e.jsx(N.Overlay,{role:"dialog","aria-modal":"true",onMouseDown:h,children:e.jsxs(N.Modal,{className:"card",onMouseDown:g=>g.stopPropagation(),children:[e.jsx("header",{children:e.jsx("h4",{children:u})}),e.jsx("div",{className:"body",children:e.jsx("p",{children:l})}),e.jsx("footer",{children:e.jsx("button",{className:"btnPrimary",onClick:h,children:"OK"})})]})}):null,z=()=>{const x=I(),u=b.useRef(null),l=b.useMemo(()=>new Date,[]),h=b.useMemo(()=>new Date("2025-10-11T10:30:00"),[]),g="SHP-5007",[j,y]=b.useState(2),[w,C]=b.useState(!1),[a,$]=b.useState({reference:"PO-88921",service:"Express",carrier:"BlueDart",pickupDate:"2025-10-06",pickupTimeFrom:"10:00",pickupTimeTo:"17:00",payer:"Shipper",declaredValue:"₹ 48,000",incoterm:"DAP",insurance:"Included",weightKg:"7.50",volWeightKg:"9.30",pieces:"3",notes:"Leave at the reception if consignee unavailable.",shipper:{name:"Bluewave Traders",contact:"Aarav Sharma",phone:"+91 98765 43210",email:"shipping@bluewave.example.com",line1:"A-12, 4th Floor",line2:"DLF Cyber City",city:"Gurugram",state:"HR",zip:"122002",country:"India",gstin:"06ABCDE1234F1Z8"},consignee:{name:"Orchid Retail Pvt Ltd",contact:"Rhea Kapoor",phone:"+91 98200 12345",email:"ops@orchidretail.example.com",line1:"241 Park Avenue",line2:"Near Riverfront Mall",city:"Mumbai",state:"MH",zip:"400001",country:"India",gstin:"27ABCDE1234F1Z2"},items:[{sku:"MED-AMOX-500",desc:"Amoxicillin 500mg (10x10)",hsCode:"30049099",batch:"AX5-2209",exp:"2026-09-30",qty:"20",weight:"4.2 kg"},{sku:"MED-D3-60K",desc:"Vitamin D3 60K IU (1x8)",hsCode:"30045039",batch:"D3K-2503",exp:"2027-03-31",qty:"12",weight:"1.1 kg"},{sku:"MED-PAR-650",desc:"Paracetamol 650mg (25x10)",hsCode:"30049013",batch:"PA6-2501",exp:"2026-12-31",qty:"6",weight:"2.2 kg"}],charges:{base:"₹ 1,650.00",fuel:"₹ 231.00",cod:"₹ 0.00",insurance:"₹ 120.00",handling:"₹ 80.00",tax:"₹ 358.20",total:"₹ 2,439.20"},docs:[{name:"Commercial Invoice.pdf",href:"#",size:"148 KB"},{name:"E-Way Bill.pdf",href:"#",size:"92 KB"},{name:"Packing List.pdf",href:"#",size:"106 KB"}]}),i=(s,d,S)=>{$(s?k=>({...k,[s]:{...k[s],[d]:S}}):k=>({...k,[d]:S}))},t=()=>C(!0),P=()=>x("/shipments"),T=()=>{u.current&&(document.body.classList.add("print-section-mode"),window.onafterprint=()=>{document.body.classList.remove("print-section-mode"),window.onafterprint=null},window.print())},A=e.jsxs("nav",{"aria-label":"Breadcrumb",className:"breadcrumbs",children:[e.jsx(D,{to:"/shipments",children:"Shipments"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"New"})]});return e.jsxs(N.Wrap,{children:[e.jsx("style",{children:`
        @media print {
          :root { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          body.print-section-mode { background:#fff; }
          body.print-section-mode * { visibility: hidden !important; }
          body.print-section-mode #search-print-area,
          body.print-section-mode #search-print-area * { visibility: visible !important; }
          body.print-section-mode #search-print-area { position: absolute !important; left: 0; top: 0; width: 100%; }
        }
      `}),e.jsxs(N.Header,{className:"card",children:[e.jsxs("div",{className:"left",children:[e.jsx("h1",{children:"New Shipment"}),A,e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Draft: ",g]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Created: ",p(l,!0)]})]})]}),e.jsxs("div",{className:"right actions",children:[e.jsx("button",{className:"btnGhost",onClick:P,title:"Back to list",children:"Back"}),e.jsx("button",{className:"btnGhost",onClick:T,title:"Print summary",children:"Print"}),e.jsx("button",{className:"btnPrimary",onClick:t,title:"Save draft",children:"Save Draft"}),e.jsx("button",{className:"btnPrimary",onClick:t,title:"Create & Book",children:"Create Shipment"})]})]}),e.jsxs(N.TopStrip,{children:[e.jsx("div",{className:"stepper",children:[{n:1,t:"Details"},{n:2,t:"Addresses"},{n:3,t:"Carrier"},{n:4,t:"Items"},{n:5,t:"Review"}].map(({n:s,t:d})=>e.jsxs("button",{className:`step ${j===s?"active":""}`,onClick:()=>y(s),type:"button",title:d,children:[e.jsx("span",{className:"num",children:s}),e.jsx("span",{className:"txt",children:d})]},s))}),e.jsxs("div",{className:"tags",children:[e.jsxs("span",{className:"chip",children:["Service: ",a.service]}),e.jsxs("span",{className:"chip",children:["Carrier: ",a.carrier]}),e.jsxs("span",{className:"chip",children:["Pieces: ",a.pieces]}),e.jsxs("span",{className:"chip",children:["Weight: ",a.weightKg," kg"]}),e.jsxs("span",{className:"chip alt",children:["Vol Wt: ",a.volWeightKg," kg"]})]})]}),e.jsxs(N.Grid,{children:[e.jsxs("section",{className:"col main card",children:[e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"blockHead",children:[e.jsx("h3",{children:"Shipment Details"}),e.jsxs("div",{className:"micro",children:[e.jsxs("span",{children:["ETA: ",p(h)]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Pickup window: ",a.pickupTimeFrom,"-",a.pickupTimeTo]})]})]}),e.jsxs("div",{className:"fields three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Reference"}),e.jsx("input",{value:a.reference,onChange:s=>i(null,"reference",s.target.value),placeholder:"Customer reference"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Payer"}),e.jsxs("select",{value:a.payer,onChange:s=>i(null,"payer",s.target.value),children:[e.jsx("option",{children:"Shipper"}),e.jsx("option",{children:"Consignee"}),e.jsx("option",{children:"Third Party"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Incoterm"}),e.jsxs("select",{value:a.incoterm,onChange:s=>i(null,"incoterm",s.target.value),children:[e.jsx("option",{children:"DAP"}),e.jsx("option",{children:"DDP"}),e.jsx("option",{children:"EXW"}),e.jsx("option",{children:"CPT"})]})]})]}),e.jsxs("div",{className:"fields three",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Declared Value"}),e.jsx("input",{value:a.declaredValue,onChange:s=>i(null,"declaredValue",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Insurance"}),e.jsxs("select",{value:a.insurance,onChange:s=>i(null,"insurance",s.target.value),children:[e.jsx("option",{children:"Included"}),e.jsx("option",{children:"Not Included"})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Service"}),e.jsxs("select",{value:a.service,onChange:s=>i(null,"service",s.target.value),children:[e.jsx("option",{children:"Express"}),e.jsx("option",{children:"Surface"}),e.jsx("option",{children:"Overnight"})]})]})]}),e.jsxs("div",{className:"fields four",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Pickup Date"}),e.jsx("input",{type:"date",value:a.pickupDate,onChange:s=>i(null,"pickupDate",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"From"}),e.jsx("input",{type:"time",value:a.pickupTimeFrom,onChange:s=>i(null,"pickupTimeFrom",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"To"}),e.jsx("input",{type:"time",value:a.pickupTimeTo,onChange:s=>i(null,"pickupTimeTo",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Special Notes"}),e.jsx("input",{value:a.notes,onChange:s=>i(null,"notes",s.target.value)})]})]})]}),e.jsxs("div",{className:"block twoCol",children:[e.jsxs("div",{className:"card sub",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h3",{children:"Shipper"})}),e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Company"}),e.jsx("input",{value:a.shipper.name,onChange:s=>i("shipper","name",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Contact"}),e.jsx("input",{value:a.shipper.contact,onChange:s=>i("shipper","contact",s.target.value)})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{value:a.shipper.phone,onChange:s=>i("shipper","phone",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{type:"email",value:a.shipper.email,onChange:s=>i("shipper","email",s.target.value)})]})]}),e.jsx("input",{placeholder:"Address line 1",value:a.shipper.line1,onChange:s=>i("shipper","line1",s.target.value)}),e.jsx("input",{placeholder:"Address line 2",value:a.shipper.line2,onChange:s=>i("shipper","line2",s.target.value)}),e.jsxs("div",{className:"three",children:[e.jsx("input",{placeholder:"City",value:a.shipper.city,onChange:s=>i("shipper","city",s.target.value)}),e.jsx("input",{placeholder:"State",value:a.shipper.state,onChange:s=>i("shipper","state",s.target.value)}),e.jsx("input",{placeholder:"PIN",value:a.shipper.zip,onChange:s=>i("shipper","zip",s.target.value)})]}),e.jsxs("div",{className:"two",children:[e.jsx("input",{placeholder:"Country",value:a.shipper.country,onChange:s=>i("shipper","country",s.target.value)}),e.jsx("input",{placeholder:"GSTIN",value:a.shipper.gstin,onChange:s=>i("shipper","gstin",s.target.value)})]})]})]}),e.jsxs("div",{className:"card sub",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h3",{children:"Consignee"})}),e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Company"}),e.jsx("input",{value:a.consignee.name,onChange:s=>i("consignee","name",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Contact"}),e.jsx("input",{value:a.consignee.contact,onChange:s=>i("consignee","contact",s.target.value)})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{value:a.consignee.phone,onChange:s=>i("consignee","phone",s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Email"}),e.jsx("input",{type:"email",value:a.consignee.email,onChange:s=>i("consignee","email",s.target.value)})]})]}),e.jsx("input",{placeholder:"Address line 1",value:a.consignee.line1,onChange:s=>i("consignee","line1",s.target.value)}),e.jsx("input",{placeholder:"Address line 2",value:a.consignee.line2,onChange:s=>i("consignee","line2",s.target.value)}),e.jsxs("div",{className:"three",children:[e.jsx("input",{placeholder:"City",value:a.consignee.city,onChange:s=>i("consignee","city",s.target.value)}),e.jsx("input",{placeholder:"State",value:a.consignee.state,onChange:s=>i("consignee","state",s.target.value)}),e.jsx("input",{placeholder:"PIN",value:a.consignee.zip,onChange:s=>i("consignee","zip",s.target.value)})]}),e.jsxs("div",{className:"two",children:[e.jsx("input",{placeholder:"Country",value:a.consignee.country,onChange:s=>i("consignee","country",s.target.value)}),e.jsx("input",{placeholder:"GSTIN",value:a.consignee.gstin,onChange:s=>i("consignee","gstin",s.target.value)})]})]})]})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h3",{children:"Carrier & Service"})}),e.jsx("div",{className:"carrierGrid",children:[{code:"BlueDart",title:"Blue Dart",desc:"Express Air | Door to Door"},{code:"DTDC",title:"DTDC",desc:"Surface Plus | Metro Priority"},{code:"Delhivery",title:"Delhivery",desc:"Express Surface | Pan-India"}].map(s=>e.jsxs("label",{className:`carrier ${a.carrier===s.code?"active":""}`,title:s.desc,children:[e.jsx("input",{type:"radio",name:"carrier",value:s.code,checked:a.carrier===s.code,onChange:d=>i(null,"carrier",d.target.value)}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"t",children:s.title}),e.jsx("div",{className:"d",children:s.desc})]})]},s.code))})]}),e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"blockHead between",children:[e.jsx("h3",{children:"Items"}),e.jsxs("div",{className:"miniActions",children:[e.jsx("button",{className:"btnGhost",onClick:t,title:"Add line item",children:"Add Item"}),e.jsx("button",{className:"btnGhost",onClick:t,title:"Import",children:"Import"})]})]}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SKU"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"HSN"}),e.jsx("th",{children:"Batch"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{className:"num",children:"Qty"}),e.jsx("th",{children:"Weight"})]})}),e.jsx("tbody",{children:a.items.map((s,d)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(D,{to:`/products/${s.sku}`,children:s.sku})}),e.jsx("td",{children:s.desc}),e.jsx("td",{children:s.hsCode}),e.jsx("td",{children:s.batch}),e.jsx("td",{children:p(s.exp)}),e.jsx("td",{className:"num",children:s.qty}),e.jsx("td",{children:s.weight})]},d))})]})})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h3",{children:"Review"})}),e.jsxs("div",{className:"review",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Reference"}),e.jsx("span",{className:"v",children:a.reference})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Service"}),e.jsx("span",{className:"v",children:a.service})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Carrier"}),e.jsx("span",{className:"v",children:a.carrier})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Pieces"}),e.jsx("span",{className:"v",children:a.pieces})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Wt / Vol"}),e.jsxs("span",{className:"v",children:[a.weightKg," kg / ",a.volWeightKg," kg"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Pickup"}),e.jsxs("span",{className:"v",children:[p(a.pickupDate)," ",a.pickupTimeFrom,"-",a.pickupTimeTo]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"ETA"}),e.jsx("span",{className:"v",children:p(h)})]})]}),e.jsxs("div",{className:"ctaRow",children:[e.jsx("button",{className:"btnPrimary",onClick:t,title:"Create shipment",children:"Create Shipment"}),e.jsx("button",{className:"btnGhost",onClick:t,title:"Book pickup",children:"Book Pickup"}),e.jsx("button",{className:"btnGhost",onClick:t,title:"Generate labels",children:"Generate Labels"})]})]})]}),e.jsxs("aside",{className:"col side",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h3",{children:"Charges"})}),e.jsxs("div",{className:"chargeList",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Base"}),e.jsx("span",{children:a.charges.base})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Fuel Surcharge"}),e.jsx("span",{children:a.charges.fuel})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Insurance"}),e.jsx("span",{children:a.charges.insurance})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Handling"}),e.jsx("span",{children:a.charges.handling})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Tax"}),e.jsx("span",{children:a.charges.tax})]}),e.jsxs("div",{className:"total",children:[e.jsx("span",{children:"Total"}),e.jsx("span",{children:a.charges.total})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h3",{children:"Attachments"})}),e.jsx("ul",{className:"files",children:a.docs.map(s=>e.jsxs("li",{children:[e.jsx("a",{href:s.href,download:!0,children:s.name}),e.jsx("span",{className:"muted",children:s.size})]},s.name))}),e.jsxs("div",{className:"miniActions",children:[e.jsx("button",{className:"btnGhost",onClick:t,title:"Upload",children:"Upload"}),e.jsx("button",{className:"btnGhost",onClick:t,title:"Scan",children:"Scan"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"blockHead",children:e.jsx("h3",{children:"Activity"})}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Draft created"}),e.jsx("div",{className:"muted",children:p(l,!0)})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Address validated"}),e.jsx("div",{className:"muted",children:p(l)})]})]})]})]}),e.jsxs("div",{className:"card",id:"search-print-area",ref:u,children:[e.jsx("div",{className:"blockHead",children:e.jsx("h3",{children:"Print Summary"})}),e.jsxs("div",{className:"printSummary",children:[e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Draft"}),e.jsx("span",{className:"v",children:g})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Shipper"}),e.jsxs("span",{className:"v",children:[a.shipper.name,", ",a.shipper.city]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Consignee"}),e.jsxs("span",{className:"v",children:[a.consignee.name,", ",a.consignee.city]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Carrier"}),e.jsxs("span",{className:"v",children:[a.carrier," (",a.service,")"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Pieces"}),e.jsx("span",{className:"v",children:a.pieces})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Weight"}),e.jsxs("span",{className:"v",children:[a.weightKg," kg / ",a.volWeightKg," kg"]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Pickup"}),e.jsxs("span",{className:"v",children:[p(a.pickupDate)," ",a.pickupTimeFrom,"-",a.pickupTimeTo]})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"ETA"}),e.jsx("span",{className:"v",children:p(h)})]}),e.jsxs("div",{className:"line",children:[e.jsx("span",{className:"k",children:"Amount"}),e.jsx("span",{className:"v",children:a.charges.total})]})]})]})]})]}),e.jsx(H,{open:w,title:"Demo mode",message:"This is a display-only preview. Create/Book/Upload actions are disabled in demo.",onClose:()=>C(!1)})]})};export{z as default};
