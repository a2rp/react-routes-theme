import{d,Z as A,u as P,r as f,j as e,L as t,q as S}from"./index-P_7RwasD.js";const x="var(--text, #f3f4f6)",o="var(--muted, #a0a0a7)",p="var(--card, #111318)",n="var(--border, #23262d)",r="var(--accent, #5aa9ff)",c="var(--accent-soft, rgba(90,169,255,0.15))",v="var(--shadow, 0 10px 30px rgba(0,0,0,.35))",M=d.div`
    width: 100%;
    color: ${x};
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    a {
        color: ${x};
        text-decoration: none;
    }
    a:hover {
        color: ${r};
    }

    .card {
        background: ${p};
        border: 1px solid ${n};
        border-radius: 12px;
        box-shadow: ${v};
    }
`,z=d.header`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 14px;
    align-items: end;

    .left {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .crumbs {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${o};
        font-size: 12px;
    }
    .crumbs .current {
        color: ${x};
    }

    h1 {
        font-size: 24px;
        line-height: 1.2;
    }

    .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        color: ${o};
        font-size: 12px;
    }
    .meta b {
        color: ${x};
    }

    .actions {
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .actions button {
        background: ${p};
        border: 1px solid ${n};
        color: ${x};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.25s, box-shadow 0.25s, color 0.2s,
            background 0.2s;
    }
    .actions button:hover {
        border-color: ${r};
        color: ${r};
        box-shadow: 0 0 0 3px ${c};
    }
`,C=d.nav`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px 12px;
    background: ${p};
    border: 1px solid ${n};
    border-radius: 10px;

    a {
        padding: 6px 10px;
        border: 1px solid ${n};
        border-radius: 999px;
        font-size: 12px;
    }
    a:hover {
        border-color: ${r};
        color: ${r};
        box-shadow: 0 0 0 3px ${c};
    }
`,D=d.section`
    padding: 16px;

    header {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 12px;
    }
    h2 {
        font-size: 18px;
    }
    .tags {
        display: flex;
        gap: 8px;
        align-items: center;
    }
    .tag {
        border: 1px solid ${n};
        padding: 4px 8px;
        border-radius: 999px;
        font-size: 11px;
        color: ${o};
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 14px;
    }

    .note {
        margin-top: 8px;
        color: ${o};
        font-style: italic;
    }

    .chips {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        margin: 6px 0;
    }
    .chip {
        border: 1px solid ${n};
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 11px;
        color: ${o};
    }
    .addr {
        color: ${o};
        font-size: 12px;
        margin: 6px 0;
    }
`,g=d.div`
    padding: 12px;
    border: 1px dashed ${n};
    border-radius: 10px;

    h4 {
        margin-bottom: 8px;
    }

    .title {
        font-weight: 600;
    }
    .muted {
        color: ${o};
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    }
    .links a {
        border: 1px solid ${n};
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 12px;
    }
    .links a:hover {
        border-color: ${r};
        color: ${r};
        box-shadow: 0 0 0 3px ${c};
    }
`,R=d.section`
    padding: 16px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h2 {
        font-size: 18px;
    }
    .right button {
        background: ${p};
        border: 1px solid ${n};
        padding: 8px 12px;
        border-radius: 8px;
        transition: border-color 0.25s, box-shadow 0.25s, color 0.2s,
            background 0.2s;
    }
    .right button:hover {
        border-color: ${r};
        color: ${r};
        box-shadow: 0 0 0 3px ${c};
    }

    .tblWrap {
        overflow: auto;
        margin-top: 12px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        background: ${p};
        color: ${r};
        text-align: left;
        border-bottom: 1px solid ${n};
        position: sticky;
        top: 0;
        padding: 10px;
    }
    tbody td {
        border-bottom: 1px solid ${n};
        padding: 10px;
        vertical-align: top;
    }
    tbody tr:hover td {
        background: rgba(0, 0, 0, 0.06);
    }
    .sub {
        color: ${o};
        font-size: 12px;
        margin-top: 2px;
    }
    .num {
        text-align: right;
        font-variant-numeric: tabular-nums;
    }
    .linksRow {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 12px;
    }
    .linksRow a {
        border: 1px solid ${n};
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 12px;
    }
    .linksRow a:hover {
        border-color: ${r};
        color: ${r};
        box-shadow: 0 0 0 3px ${c};
    }
`,T=d.section`
    padding: 16px;
    h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .bullets {
        margin-left: 18px;
        line-height: 1.8;
    }
    .linksRow {
        display: flex;
        gap: 10px;
        margin-top: 12px;
        flex-wrap: wrap;
    }
    .linksRow a {
        border: 1px solid ${n};
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 12px;
    }
    .linksRow a:hover {
        border-color: ${r};
        color: ${r};
        box-shadow: 0 0 0 3px ${c};
    }
`,y=d.section`
    padding: 16px;

    header {
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 12px;
    }
    .label {
        color: ${o};
        font-size: 12px;
        margin-bottom: 4px;
    }
    .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
    }

    .linksRow {
        display: flex;
        gap: 10px;
        margin-top: 12px;
        flex-wrap: wrap;
    }
    .linksRow a {
        border: 1px solid ${n};
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 12px;
    }
    .linksRow a:hover {
        border-color: ${r};
        color: ${r};
        box-shadow: 0 0 0 3px ${c};
    }
`,I=d.section`
    padding: 16px;

    header {
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 12px;
    }
    .file {
        padding: 12px;
    }
    .name {
        font-weight: 600;
    }
    .muted {
        color: ${o};
        font-size: 12px;
        margin-top: 4px;
    }
    .btns {
        display: flex;
        gap: 8px;
        margin-top: 10px;
    }
    .btns a,
    .btns button {
        border: 1px solid ${n};
        background: ${p};
        color: ${x};
        padding: 6px 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.25s, box-shadow 0.25s, color 0.2s,
            background 0.2s;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
    }
    .btns a:hover,
    .btns button:hover {
        border-color: ${r};
        color: ${r};
        box-shadow: 0 0 0 3px ${c};
    }
`,O=d.section`
    padding: 16px;

    header {
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
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
        gap: 10px;
        align-items: start;
    }
    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-top: 6px;
        background: ${r};
        box-shadow: 0 0 0 3px ${c};
    }
    .dot.create {
    }
    .dot.print {
    }
    .dot.share {
    }
    .body .when {
        color: ${o};
        font-size: 12px;
    }
    .body .what {
        font-weight: 600;
        margin: 2px 0;
    }
    .body .who {
        color: ${o};
        font-size: 12px;
    }
`,L=A`
  from { transform: translateY(6px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,B=d.div`
    position: fixed;
    bottom: 16px;
    right: 16px;
    background: ${p};
    border: 1px solid ${n};
    color: ${x};
    padding: 8px 12px;
    border-radius: 10px;
    box-shadow: ${v};
    animation: ${L} 0.2s ease-out both;
`,F=d.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: grid;
    place-items: center;
    z-index: 50;
`,E=d.div`
    width: min(520px, 96vw);
    padding: 16px;
    background: ${p};
    border: 1px solid ${n};
    border-radius: 12px;
    box-shadow: ${v};

    h3 {
        margin-bottom: 8px;
    }
    p {
        color: ${o};
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 14px;
    }
    .actions button {
        background: ${p};
        color: ${x};
        border: 1px solid ${n};
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
    }
    .actions button:hover {
        border-color: ${r};
        color: ${r};
        box-shadow: 0 0 0 3px ${c};
    }
`,q=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],G=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function H(a){if(!a)return"";const i=new Date(a),l=i.getDate().toString().padStart(2,"0");return`${q[i.getDay()]} ${G[i.getMonth()]} ${l} ${i.getFullYear()}`}function V(a){if(!a)return"";const i=new Date(a),l=i.getHours().toString().padStart(2,"0"),h=i.getMinutes().toString().padStart(2,"0"),j=i.getSeconds().toString().padStart(2,"0");return`${l}:${h}:${j}hrs`}function m(a){return`${H(a)} ${V(a)}`}function Y(){const{rxId:a}=S(),i=a||"RX-24017",l="2025-10-04T15:38:20+05:30";return f.useMemo(()=>({id:i,code:i,status:"Issued",issuedAt:l,validTill:"2025-12-15T10:00:00+05:30",note:"Take medicines with water. Avoid driving if feeling drowsy.",patient:{id:"PAT-1001",name:"Aditi Singh",age:32,sex:"F",phone:"+91 90000 12345",email:"aditi@example.com",bloodGroup:"O+",allergies:["Penicillin"],tags:["Regular","Insurance-Apollo"],addr:{line1:"D-32, Green Meadows",line2:"Baner",city:"Pune",state:"MH",zip:"411045",country:"IN"},lastVisit:"2025-09-29T11:15:22+05:30"},prescriber:{id:"DOC-301",name:"Dr. R. Malhotra",specialization:"Internal Medicine",regNo:"MCI/IM/99823",org:"City Health Clinic",contact:"+91 20 5555 1212",email:"dr.malhotra@cityhealth.example"},meds:[{id:"MED-AMOX-500",name:"Amoxicillin",brand:"Amoxicap 500",strength:"500 mg",form:"Capsule",route:"Oral",freq:"TID",duration:"5 days",qty:15,directions:"After meals",notes:"Avoid if rash occurs"},{id:"MED-PCM-650",name:"Paracetamol",brand:"PCM 650",strength:"650 mg",form:"Tablet",route:"Oral",freq:"SOS",duration:"As required",qty:10,directions:"Max 3/day",notes:"If fever >101°F, consult"},{id:"MED-RAN-150",name:"Ranitidine",brand:"Rantac 150",strength:"150 mg",form:"Tablet",route:"Oral",freq:"HS",duration:"5 days",qty:5,directions:"Bedtime",notes:"Helps acidity"}],attachments:[{id:"ATT-001",name:"Vitals Snapshot.png",size:"182 KB"},{id:"ATT-002",name:"Old Prescription (2024).pdf",size:"256 KB"},{id:"ATT-003",name:"Insurance Card.jpg",size:"98 KB"}],audit:[{id:"LG-1",type:"create",who:"dr.malhotra",at:l,text:"Prescription issued"},{id:"LG-2",type:"print",who:"frontdesk",at:"2025-10-04T16:05:01+05:30",text:"Hard copy printed"},{id:"LG-3",type:"share",who:"noreply@erp",at:"2025-10-04T16:07:13+05:30",text:"E-prescription emailed to patient"}],meta:{createdBy:"dr.malhotra",createdAt:l,updatedAt:"2025-10-04T16:09:31+05:30",source:"OPD"}}),[a])}function J({open:a,onClose:i,title:l="Demo Mode",message:h}){return a?e.jsx(F,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-modal-title",children:e.jsxs(E,{className:"card",children:[e.jsx("h3",{id:"demo-modal-title",children:l}),e.jsx("p",{children:h||"Changes are disabled in this demo."}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:i,autoFocus:!0,children:"Close"})})]})}):null}function W(){const a=P(),i=Y(),[l,h]=f.useState({open:!1,message:""}),[j,u]=f.useState(!1),b=s=>h({open:!0,message:s}),$=()=>h({open:!1,message:""}),w=async()=>{try{await navigator.clipboard.writeText(window.location.href),u(!0),setTimeout(()=>u(!1),1500)}catch{u(!1)}},N=()=>{const s="print-section-mode";document.body.classList.add(s),window.onafterprint=()=>document.body.classList.remove(s),window.print()},k=[{id:"summary",label:"Summary"},{id:"meds",label:"Medications"},{id:"directions",label:"Directions"},{id:"patient",label:"Patient"},{id:"prescriber",label:"Prescriber"},{id:"attachments",label:"Attachments"},{id:"activity",label:"Activity"}];return e.jsxs(M,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(z,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("nav",{className:"crumbs","aria-label":"breadcrumbs",children:[e.jsx(t,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(t,{to:"/prescriptions",children:"Prescriptions"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:i.code})]}),e.jsxs("h1",{children:["Prescription ",i.code]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Status: ",e.jsx("b",{children:i.status})]}),e.jsxs("span",{children:["Issued: ",e.jsx("b",{children:m(i.issuedAt)})]}),e.jsxs("span",{children:["Valid till: ",e.jsx("b",{children:m(i.validTill)})]})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:()=>a("/prescriptions"),title:"Go back to list",children:"Back to List"}),e.jsx("button",{onClick:N,title:"Print this prescription",children:"Print"}),e.jsx("button",{onClick:w,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{onClick:()=>b("Editing is disabled in demo."),title:"Edit (demo)",children:"Edit"}),e.jsx("button",{onClick:()=>b("Delete is disabled in demo."),title:"Delete (demo)",children:"Delete"})]})]}),e.jsx(C,{role:"navigation","aria-label":"Section navigation",children:k.map(s=>e.jsx("a",{href:`#${s.id}`,children:s.label},s.id))}),e.jsxs("div",{id:"search-print-area",children:[e.jsxs(D,{id:"summary",className:"card",children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Summary"}),e.jsxs("div",{className:"tags",children:[e.jsx("span",{className:"tag",children:"OPD"}),e.jsx("span",{className:"tag",children:"E-Prescription"})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs(g,{children:[e.jsx("h4",{children:"Patient"}),e.jsxs("p",{className:"title",children:[e.jsx(t,{to:`/patients/${i.patient.id}`,children:i.patient.name}),e.jsxs("span",{className:"muted",children:[" — ",i.patient.sex,", ",i.patient.age]})]}),e.jsxs("p",{children:[i.patient.phone," · ",i.patient.email]}),e.jsxs("p",{className:"muted",children:["Last visit: ",m(i.patient.lastVisit)]}),e.jsx("div",{className:"chips",children:i.patient.tags.map(s=>e.jsx("span",{className:"chip",children:s},s))}),e.jsxs("div",{className:"addr",children:[e.jsx("p",{children:i.patient.addr.line1}),e.jsx("p",{children:i.patient.addr.line2}),e.jsxs("p",{children:[i.patient.city,", ",i.patient.state," ",i.patient.zip]}),e.jsx("p",{children:i.patient.country})]}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:`/patients/${i.patient.id}`,children:"Open Patient"}),e.jsx(t,{to:`/appointments?patient=${i.patient.id}`,children:"Appointments"}),e.jsx(t,{to:`/labs?patient=${i.patient.id}`,children:"Labs"}),e.jsx(t,{to:`/imaging?patient=${i.patient.id}`,children:"Imaging"}),e.jsx(t,{to:`/sales/payments?customer=${i.patient.id}`,children:"Payments"})]})]}),e.jsxs(g,{children:[e.jsx("h4",{children:"Prescriber"}),e.jsx("p",{className:"title",children:e.jsx(t,{to:`/admin/users/${i.prescriber.id}`,children:i.prescriber.name})}),e.jsx("p",{children:i.prescriber.specialization}),e.jsxs("p",{className:"muted",children:["Reg: ",i.prescriber.regNo]}),e.jsx("p",{children:i.prescriber.org}),e.jsxs("p",{children:[i.prescriber.contact," · ",i.prescriber.email]}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:`/admin/users/${i.prescriber.id}`,children:"Open Doctor"}),e.jsx(t,{to:"/settings/print-templates",children:"Print Templates"}),e.jsx(t,{to:"/settings/appearance",children:"Appearance"})]})]}),e.jsxs(g,{children:[e.jsx("h4",{children:"Meta"}),e.jsxs("p",{children:["Created by: ",e.jsx("span",{className:"muted",children:i.meta.createdBy})]}),e.jsxs("p",{children:["Created: ",e.jsx("b",{children:m(i.meta.createdAt)})]}),e.jsxs("p",{children:["Updated: ",e.jsx("b",{children:m(i.meta.updatedAt)})]}),e.jsxs("p",{children:["Source: ",e.jsx("b",{children:i.meta.source})]}),e.jsx("p",{className:"note",children:i.note}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:"/reports/customers",children:"Customer Report"}),e.jsx(t,{to:"/reports/gst",children:"GST"}),e.jsx(t,{to:"/tools/import-export",children:"Export"})]})]})]})]}),e.jsxs(R,{id:"meds",className:"card",children:[e.jsxs("header",{children:[e.jsx("h2",{children:"Medications"}),e.jsx("div",{className:"right",children:e.jsx("button",{onClick:()=>b("Add item is disabled in demo."),title:"Add item (demo)",children:"Add Item"})})]}),e.jsx("div",{className:"tblWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Medicine"}),e.jsx("th",{children:"Strength"}),e.jsx("th",{children:"Form"}),e.jsx("th",{children:"Route"}),e.jsx("th",{children:"Frequency"}),e.jsx("th",{children:"Duration"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Directions"}),e.jsx("th",{children:"Notes"})]})}),e.jsx("tbody",{children:i.meds.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx(t,{to:`/medicines/${s.id}`,title:"Open product",children:s.brand}),e.jsx("div",{className:"sub",children:s.name})]}),e.jsx("td",{children:s.strength}),e.jsx("td",{children:s.form}),e.jsx("td",{children:s.route}),e.jsx("td",{children:s.freq}),e.jsx("td",{children:s.duration}),e.jsx("td",{className:"num",children:s.qty}),e.jsx("td",{children:s.directions}),e.jsx("td",{children:s.notes})]},s.id))})]})}),e.jsxs("div",{className:"linksRow",children:[e.jsx(t,{to:"/products",title:"Browse products",children:"Browse Products"}),e.jsx(t,{to:"/inventory",title:"Inventory overview",children:"Inventory"}),e.jsx(t,{to:"/purchase-orders",title:"Create PO",children:"Purchase Orders"}),e.jsx(t,{to:"/shipments",title:"Shipments",children:"Shipments"})]})]}),e.jsxs(T,{id:"directions",className:"card",children:[e.jsx("header",{children:e.jsx("h2",{children:"Directions"})}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Continue hydration; minimum 8 glasses of water daily."}),e.jsx("li",{children:"Avoid spicy/oily food for 5 days."}),e.jsx("li",{children:"If rash/breathlessness occurs, stop medicines and seek care."}),e.jsx("li",{children:"Re-check if fever persists beyond 72 hours."})]}),e.jsxs("div",{className:"linksRow",children:[e.jsx(t,{to:"/help",title:"Help center",children:"Help Center"}),e.jsx(t,{to:"/contact",title:"Contact",children:"Contact"}),e.jsx(t,{to:"/feedback",title:"Feedback",children:"Feedback"})]})]}),e.jsxs(y,{id:"patient",className:"card",children:[e.jsx("header",{children:e.jsx("h2",{children:"Patient"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Allergies"}),e.jsx("div",{className:"chips",children:i.patient.allergies.map(s=>e.jsx("span",{className:"chip",children:s},s))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Identifiers"}),e.jsx("div",{className:"mono",children:i.patient.id})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Blood Group"}),e.jsx("div",{className:"mono",children:i.patient.bloodGroup})]})]}),e.jsxs("div",{className:"linksRow",children:[e.jsx(t,{to:`/patients/${i.patient.id}`,children:"Patient Detail"}),e.jsx(t,{to:`/patients/${i.patient.id}/visits`,children:"Visits"}),e.jsx(t,{to:`/appointments?patient=${i.patient.id}`,children:"Appointments"}),e.jsx(t,{to:`/sales/payments?customer=${i.patient.id}`,children:"Payments"})]})]}),e.jsxs(y,{id:"prescriber",className:"card",children:[e.jsx("header",{children:e.jsx("h2",{children:"Prescriber"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Doctor"}),e.jsx("div",{className:"mono",children:i.prescriber.name})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Specialization"}),e.jsx("div",{className:"mono",children:i.prescriber.specialization})]}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Registration"}),e.jsx("div",{className:"mono",children:i.prescriber.regNo})]})]}),e.jsxs("div",{className:"linksRow",children:[e.jsx(t,{to:`/admin/users/${i.prescriber.id}`,children:"User Profile"}),e.jsx(t,{to:"/admin/activity",children:"Activity"}),e.jsx(t,{to:"/admin/audit-log",children:"Audit Log"})]})]}),e.jsxs(I,{id:"attachments",className:"card",children:[e.jsx("header",{children:e.jsx("h2",{children:"Attachments"})}),e.jsx("div",{className:"grid",children:i.attachments.map(s=>e.jsxs("div",{className:"file card",children:[e.jsx("div",{className:"name",children:s.name}),e.jsx("div",{className:"muted",children:s.size}),e.jsxs("div",{className:"btns",children:[e.jsx("button",{onClick:()=>b("Preview is disabled in demo."),title:"Preview (demo)",children:"Preview"}),e.jsx(t,{to:`/prescriptions/${i.id}/attachments/${s.id}`,title:"Open file",children:"Open"})]})]},s.id))}),e.jsxs("div",{className:"linksRow",children:[e.jsx(t,{to:"/tools/import-export",children:"Export"}),e.jsx(t,{to:"/settings/backups",children:"Backups"})]})]}),e.jsxs(O,{id:"activity",className:"card",children:[e.jsx("header",{children:e.jsx("h2",{children:"Activity"})}),e.jsx("ul",{className:"timeline",children:i.audit.map(s=>e.jsxs("li",{children:[e.jsx("div",{className:`dot ${s.type}`}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"when",children:m(s.at)}),e.jsx("div",{className:"what",children:s.text}),e.jsxs("div",{className:"who",children:["by ",e.jsx("span",{className:"mono",children:s.who})]})]})]},s.id))}),e.jsxs("div",{className:"linksRow",children:[e.jsx(t,{to:"/reports/sales",children:"Sales Report"}),e.jsx(t,{to:"/reports/inventory",children:"Inventory Report"}),e.jsx(t,{to:"/reports/finance",children:"Finance Report"})]})]})]}),j&&e.jsx(B,{role:"status",children:"Link copied"}),e.jsx(J,{open:l.open,onClose:$,message:l.message})]})}export{W as default};
