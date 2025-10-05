import{d as a,q as C,u as P,r as b,j as e,N as t}from"./index-BpMGcZ_2.js";const j="var(--bg, #0d1117)",o="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",m="var(--card, #111318)",n="var(--border, #23262d)",d="var(--accent, #5aa9ff)",T="var(--accent-soft, rgba(90,169,255,0.15))",v="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",D=a.div`
    color: ${o};
    padding: 16px;
`,I=a.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    a {
        color: ${x};
        text-decoration: none;
    }
    a:hover {
        color: ${d};
    }
    .spacer {
        flex: 1;
    }
    span {
        color: ${x};
    }
`,R=a.section`
    background: ${m};
    border: 1px solid ${n};
    border-radius: 12px;
    padding: 16px;
    box-shadow: ${v};
    margin-bottom: 16px;

    .left {
        display: flex;
        gap: 14px;
        align-items: center;
    }
    .avatar {
        width: 72px;
        height: 72px;
        border-radius: 12px;
        border: 1px solid ${n};
        object-fit: cover;
    }
    .meta h1 {
        font-size: 22px;
        margin-bottom: 2px;
    }
    .row {
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${x};
    }
    .row .code {
        color: ${d};
        font-weight: 600;
    }
    .row .dot {
        opacity: 0.6;
    }
    .tags {
        display: flex;
        gap: 6px;
        margin-top: 8px;
        flex-wrap: wrap;
    }
`,O=a.span`
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 12px;
    background: color-mix(in oklab, ${d} 16%, transparent);
    border: 1px solid ${n};
    color: ${o};
`,V=a.div`
    margin-top: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;

    .hint {
        margin-left: 6px;
        color: ${d};
        font-size: 12px;
    }

    a,
    button {
        text-decoration: none;
        border: 1px solid ${n};
        background: ${j};
        color: ${o};
        padding: 6px 10px;
        border-radius: 8px;
        transition: border-color 0.2s ease, color 0.2s ease,
            background 0.2s ease;
    }
    a:hover,
    button:hover {
        border-color: ${d};
        color: ${d};
        background: rgba(0, 0, 0, 0.08);
    }
    .ghost {
        background: ${m};
    }
    .danger {
        border-color: ${n};
    }
    button[disabled],
    button[aria-disabled] {
        opacity: 0.55;
        cursor: not-allowed;
    }
`,L=a.div`
    margin-top: 14px;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 10px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`,p=a.div`
    background: ${j};
    border: 1px solid ${n};
    border-radius: 10px;
    padding: 10px 12px;

    .label {
        color: ${x};
        font-size: 12px;
        margin-bottom: 4px;
    }
    .value {
        font-weight: 600;
    }
`,M=a.div`
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 16px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`,B=a.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,z=a.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,g=a.section`
    background: ${m};
    border: 1px solid ${n};
    border-radius: 12px;
    padding: 14px;
    box-shadow: ${v};

    h3 {
        margin-bottom: 10px;
    }

    .list {
        display: grid;
        grid-template-columns: 120px 1fr;
        row-gap: 8px;
    }
    .list > div {
        display: contents;
    }
    .list span:first-child {
        color: ${x};
    }
    .list a {
        color: ${o};
        text-decoration: none;
    }
    .list a:hover {
        color: ${d};
    }

    .addr {
        color: ${o};
        line-height: 1.6;
    }
    .inline-links {
        margin-top: 8px;
    }
    .inline-links a {
        color: ${d};
        text-decoration: none;
    }
`,S=a.div`
    display: grid;
    grid-auto-rows: min-content;

    /* Tab headers */
    label {
        display: inline-flex;
        align-items: center;
        padding: 8px 12px;
        margin-right: 6px;
        margin-bottom: 8px;
        border-radius: 8px;
        border: 1px solid ${n};
        background: ${j};
        color: ${o};
        cursor: pointer;
        user-select: none;
    }
    input[type="radio"] {
        display: none;
    }

    /* Panels */
    .panel {
        display: none;
    }
    #tab-overview:checked ~ label[for="tab-overview"],
    #tab-visits:checked ~ label[for="tab-visits"],
    #tab-presc:checked ~ label[for="tab-presc"],
    #tab-labs:checked ~ label[for="tab-labs"],
    #tab-imaging:checked ~ label[for="tab-imaging"],
    #tab-bill:checked ~ label[for="tab-bill"],
    #tab-activity:checked ~ label[for="tab-activity"],
    #tab-files:checked ~ label[for="tab-files"] {
        border-color: ${d};
        box-shadow: 0 0 0 3px ${T};
        color: ${d};
    }

    #tab-overview:checked ~ [data-for="tab-overview"],
    #tab-visits:checked ~ [data-for="tab-visits"],
    #tab-presc:checked ~ [data-for="tab-presc"],
    #tab-labs:checked ~ [data-for="tab-labs"],
    #tab-imaging:checked ~ [data-for="tab-imaging"],
    #tab-bill:checked ~ [data-for="tab-bill"],
    #tab-activity:checked ~ [data-for="tab-activity"],
    #tab-files:checked ~ [data-for="tab-files"] {
        display: block;
    }
`,G=a.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`,c=a.div`
    background: ${m};
    border: 1px solid ${n};
    border-radius: 12px;
    padding: 14px;
    box-shadow: ${v};

    h4 {
        margin-bottom: 10px;
    }

    .links {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
    }
    .links a {
        text-decoration: none;
        border: 1px solid ${n};
        background: ${j};
        padding: 8px 10px;
        border-radius: 8px;
        color: ${o};
    }
    .links a:hover {
        color: ${d};
        border-color: ${d};
    }

    .panel-head {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
    }
    .panel-head .btn-link {
        margin-left: auto;
        color: ${d};
        text-decoration: none;
    }

    ul.timeline {
        list-style: none;
        display: grid;
        gap: 8px;
    }
    ul.timeline li {
        display: grid;
        grid-template-columns: 240px 1fr;
        gap: 10px;
        padding: 10px;
        border: 1px solid ${n};
        border-radius: 8px;
        background: ${j};
    }
    ul.timeline .when {
        color: ${x};
    }
    ul.timeline .text {
        color: ${o};
    }
`,h=a.div`
    overflow: auto;
    border-radius: 8px;
    border: 1px solid ${n};

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }
    thead th {
        position: sticky;
        top: 0;
        background: ${m};
        color: ${d};
        text-align: left;
        border-bottom: 1px solid ${n};
        padding: 10px;
    }
    tbody td {
        padding: 10px;
        border-bottom: 1px solid ${n};
    }
    tbody tr:hover {
        background: rgba(0, 0, 0, 0.08);
    }
    .muted {
        color: ${x};
    }
`,F=a.div`
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.45);
    z-index: 60;
`,E=a.div`
    background: ${m};
    border: 1px solid ${n};
    border-radius: 12px;
    box-shadow: ${v};
    padding: 16px;
    width: min(520px, 92vw);

    h3 {
        margin-bottom: 8px;
    }
    .muted {
        color: ${x};
        margin-bottom: 12px;
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
    .actions button {
        background: ${j};
        color: ${o};
        border: 1px solid ${n};
        padding: 8px 12px;
        border-radius: 8px;
    }
    .actions button:hover {
        border-color: ${d};
        color: ${d};
    }
    .actions button[disabled] {
        opacity: 0.55;
        cursor: not-allowed;
    }
`,N=l=>new Date(l).toDateString(),H=l=>new Date(l).toLocaleTimeString("en-GB",{hour12:!1})+"hrs",r=l=>`${N(l)} ${H(l)}`,K=!0,U=({open:l,title:f,message:y,onClose:u})=>l?e.jsx(F,{role:"dialog","aria-modal":"true","aria-labelledby":"cm-title",children:e.jsxs(E,{children:[e.jsx("h3",{id:"cm-title",children:f}),e.jsx("p",{className:"muted",children:y}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{onClick:u,children:"Close"}),e.jsx("button",{disabled:!0,title:"Disabled in demo","aria-disabled":!0,children:"Proceed"})]})]})}):null,q=()=>{const{patientId:l}=C(),f=P(),[y,u]=b.useState(!1),[k,$]=b.useState(!1),i=b.useMemo(()=>({id:l||"PAT-1001",code:"PAT-1001",name:"Aarav Mehta",gender:"Male",age:34,bloodGroup:"B+",photo:"https://ui-avatars.com/api/?name=Aarav+Mehta&size=128&background=111318&color=f3f4f6",phone:"+91 98765 43210",email:"aarav.mehta@example.com",tags:["Premium","Insurance","Chronic"],createdAt:"2025-01-19T09:05:14+05:30",updatedAt:"2025-10-04T15:38:20+05:30",lastVisitAt:"2025-09-28T11:30:00+05:30",nextAppointmentAt:"2025-10-06T10:00:00+05:30",address:{line1:"D-42, Orchid Residency",line2:"Baner, Pune",city:"Pune",state:"MH",zip:"411045",country:"IN"},emergencyContact:{name:"Rhea Mehta",relation:"Spouse",phone:"+91 99876 54321"},insurance:{provider:"Horizon HealthCare",policyNo:"HHC-IND-993415",validTill:"2026-03-31T00:00:00+05:30",tpa:"MedAssist"},balance:1280,allergies:["Penicillin"],conditions:["Type 2 Diabetes"],preferredPharmacy:"CityCare Pharmacy, Baner",counts:{visits:7,prescriptions:5,labs:3,imaging:2,invoices:4},visits:[{id:"VIS-24017",date:"2025-09-28T11:30:00+05:30",clinician:"Dr. K. Narayan",department:"General Medicine",notes:"Routine follow-up"},{id:"VIS-24012",date:"2025-08-18T12:00:00+05:30",clinician:"Dr. K. Narayan",department:"General Medicine",notes:"Dose adjust for Metformin"}],prescriptions:[{id:"RX-3121",date:"2025-09-28T12:05:00+05:30",items:3},{id:"RX-2950",date:"2025-08-18T12:20:00+05:30",items:2}],labs:[{id:"LAB-7781",date:"2025-09-29T09:00:00+05:30",panel:"HbA1c"},{id:"LAB-7602",date:"2025-08-20T10:30:00+05:30",panel:"Lipid"}],imaging:[{id:"IMG-515",date:"2025-05-03T15:30:00+05:30",type:"X-Ray Chest"}],invoices:[{id:"INV-2047",date:"2025-09-29T12:45:00+05:30",amount:980,status:"Paid"},{id:"INV-1999",date:"2025-08-20T13:10:00+05:30",amount:300,status:"Unpaid"}],activity:[{id:"A1",when:"2025-10-04T15:38:20+05:30",text:"Profile updated by front desk"},{id:"A0",when:"2025-09-29T12:48:00+05:30",text:"Invoice INV-2047 paid via UPI"}],attachments:[{id:"DOC-1001",name:"Insurance Card.pdf",size:"256KB",uploadedAt:"2025-02-11T14:20:00+05:30"},{id:"IMG-2001",name:"Xray-Result.jpg",size:"1.2MB",uploadedAt:"2025-05-03T16:10:00+05:30"}]}),[l]),w=b.useCallback(async()=>{try{await navigator.clipboard.writeText(window.location.href),$(!0),setTimeout(()=>$(!1),1600)}catch{}},[]),A=b.useCallback(()=>{document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),0)},[]);return e.jsxs(D,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs(I,{children:[e.jsx(t,{to:"/patients",children:"Patients"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:i.name}),e.jsx("div",{className:"spacer"}),e.jsx(t,{to:"/appointments/calendar",title:"Calendar",children:"Calendar"}),e.jsx(t,{to:"/reports/customers",title:"Patient Reports",children:"Reports"})]}),e.jsxs(R,{id:"search-print-area",children:[e.jsxs("div",{className:"left",children:[e.jsx("img",{className:"avatar",src:i.photo,alt:i.name}),e.jsxs("div",{className:"meta",children:[e.jsx("h1",{children:i.name}),e.jsxs("div",{className:"row",children:[e.jsx("span",{className:"code",children:i.code}),e.jsx("span",{className:"dot",children:"•"}),e.jsx("span",{children:i.gender}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{children:[i.age," yrs"]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{children:["Blood ",i.bloodGroup]})]}),e.jsx("div",{className:"tags",children:i.tags.map(s=>e.jsx(O,{children:s},s))})]})]}),e.jsxs(V,{children:[e.jsx("button",{onClick:()=>f("/patients"),title:"Back to list",children:"Back"}),e.jsx("button",{onClick:w,title:"Copy deep link",children:"Copy Link"}),e.jsx("button",{onClick:A,title:"Print summary",children:"Print"}),e.jsx("button",{disabled:K,"aria-disabled":!0,title:"Disabled in demo",children:"Edit"}),e.jsx("button",{onClick:()=>u(!0),title:"Delete patient",className:"danger",children:"Delete"}),e.jsx(t,{to:"/appointments",className:"ghost",title:"All appointments",children:"Appointments"}),e.jsx(t,{to:"/prescriptions",className:"ghost",title:"All prescriptions",children:"Prescriptions"}),e.jsx(t,{to:"/labs",className:"ghost",title:"All labs",children:"Labs"}),e.jsx(t,{to:"/imaging",className:"ghost",title:"All imaging",children:"Imaging"}),k&&e.jsx("span",{className:"hint",children:"Link copied"})]}),e.jsxs(L,{children:[e.jsxs(p,{children:[e.jsx("div",{className:"label",children:"Last Visit"}),e.jsx("div",{className:"value",children:r(i.lastVisitAt)})]}),e.jsxs(p,{children:[e.jsx("div",{className:"label",children:"Next Appointment"}),e.jsx("div",{className:"value",children:r(i.nextAppointmentAt)})]}),e.jsxs(p,{children:[e.jsx("div",{className:"label",children:"Open Balance"}),e.jsxs("div",{className:"value",children:["₹ ",i.balance.toFixed(2)]})]}),e.jsxs(p,{children:[e.jsx("div",{className:"label",children:"Created"}),e.jsx("div",{className:"value",children:r(i.createdAt)})]}),e.jsxs(p,{children:[e.jsx("div",{className:"label",children:"Updated"}),e.jsx("div",{className:"value",children:r(i.updatedAt)})]}),e.jsxs(p,{children:[e.jsx("div",{className:"label",children:"Relations"}),e.jsxs("div",{className:"value",children:[i.counts.visits," visits • ",i.counts.prescriptions," rx • ",i.counts.labs," labs"]})]})]})]}),e.jsxs(M,{children:[e.jsxs(B,{children:[e.jsxs(g,{children:[e.jsx("h3",{children:"Contact"}),e.jsxs("div",{className:"list",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Email"}),e.jsx("a",{href:`mailto:${i.email}`,children:i.email})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Phone"}),e.jsx("a",{href:`tel:${i.phone}`,children:i.phone})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Preferred Pharmacy"}),e.jsx("span",{children:i.preferredPharmacy})]})]})]}),e.jsxs(g,{children:[e.jsx("h3",{children:"Address"}),e.jsxs("address",{className:"addr",children:[i.address.line1,e.jsx("br",{}),i.address.line2,e.jsx("br",{}),i.address.city," - ",i.address.zip,", ",i.address.state,", ",i.address.country]}),e.jsx("div",{className:"inline-links",children:e.jsx("a",{href:`https://maps.google.com/?q=${encodeURIComponent(`${i.address.line1}, ${i.address.line2}, ${i.address.city} ${i.address.zip}`)}`,target:"_blank",rel:"noreferrer",children:"Open Map"})})]}),e.jsxs(g,{children:[e.jsx("h3",{children:"Emergency"}),e.jsxs("div",{className:"list",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Name"}),e.jsx("span",{children:i.emergencyContact.name})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Relation"}),e.jsx("span",{children:i.emergencyContact.relation})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Phone"}),e.jsx("a",{href:`tel:${i.emergencyContact.phone}`,children:i.emergencyContact.phone})]})]})]}),e.jsxs(g,{children:[e.jsx("h3",{children:"Insurance"}),e.jsxs("div",{className:"list",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Provider"}),e.jsx("span",{children:i.insurance.provider})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Policy #"}),e.jsx("span",{children:i.insurance.policyNo})]}),e.jsxs("div",{children:[e.jsx("span",{children:"TPA"}),e.jsx("span",{children:i.insurance.tpa})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Valid Till"}),e.jsx("span",{children:N(i.insurance.validTill)})]})]})]}),e.jsxs(g,{children:[e.jsx("h3",{children:"Clinical"}),e.jsxs("div",{className:"list",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Allergies"}),e.jsx("span",{children:i.allergies.join(", ")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Conditions"}),e.jsx("span",{children:i.conditions.join(", ")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Blood Group"}),e.jsx("span",{children:i.bloodGroup})]})]})]})]}),e.jsx(z,{children:e.jsxs(S,{children:[e.jsx("input",{type:"radio",id:"tab-overview",name:"ptabs",defaultChecked:!0}),e.jsx("label",{htmlFor:"tab-overview",children:"Overview"}),e.jsx("input",{type:"radio",id:"tab-visits",name:"ptabs"}),e.jsx("label",{htmlFor:"tab-visits",children:"Visits"}),e.jsx("input",{type:"radio",id:"tab-presc",name:"ptabs"}),e.jsx("label",{htmlFor:"tab-presc",children:"Prescriptions"}),e.jsx("input",{type:"radio",id:"tab-labs",name:"ptabs"}),e.jsx("label",{htmlFor:"tab-labs",children:"Labs"}),e.jsx("input",{type:"radio",id:"tab-imaging",name:"ptabs"}),e.jsx("label",{htmlFor:"tab-imaging",children:"Imaging"}),e.jsx("input",{type:"radio",id:"tab-bill",name:"ptabs"}),e.jsx("label",{htmlFor:"tab-bill",children:"Billing"}),e.jsx("input",{type:"radio",id:"tab-activity",name:"ptabs"}),e.jsx("label",{htmlFor:"tab-activity",children:"Activity"}),e.jsx("input",{type:"radio",id:"tab-files",name:"ptabs"}),e.jsx("label",{htmlFor:"tab-files",children:"Attachments"}),e.jsx("section",{className:"panel","data-for":"tab-overview",children:e.jsxs(G,{children:[e.jsxs(c,{children:[e.jsx("h4",{children:"Quick Links"}),e.jsxs("div",{className:"links",children:[e.jsx(t,{to:`/patients/${i.id}/visits`,title:"All visits",children:"All Visits"}),e.jsx(t,{to:"/appointments",title:"Appointments list",children:"Appointments"}),e.jsx(t,{to:"/appointments/calendar",title:"Calendar",children:"Calendar"}),e.jsx(t,{to:"/prescriptions",title:"All prescriptions",children:"Prescriptions"}),e.jsx(t,{to:"/labs/catalog",title:"Lab catalog",children:"Lab Catalog"}),e.jsx(t,{to:"/imaging",title:"Imaging list",children:"Imaging"}),e.jsx(t,{to:"/reports/customers",title:"Patient reports",children:"Reports"}),e.jsx(t,{to:"/invoices",title:"Invoices",children:"Invoices"}),e.jsx(t,{to:"/receipts",title:"Receipts",children:"Receipts"})]})]}),e.jsxs(c,{children:[e.jsx("h4",{children:"Recent Visits"}),e.jsx(h,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Visit ID"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Clinician"}),e.jsx("th",{children:"Department"}),e.jsx("th",{children:"Notes"})]})}),e.jsx("tbody",{children:i.visits.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t,{to:`/patients/${i.id}/visits`,title:"Open visits",children:s.id})}),e.jsx("td",{children:r(s.date)}),e.jsx("td",{children:s.clinician}),e.jsx("td",{children:s.department}),e.jsx("td",{className:"muted",children:s.notes})]},s.id))})]})})]}),e.jsxs(c,{children:[e.jsx("h4",{children:"Recent Prescriptions"}),e.jsx(h,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Rx ID"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Open"})]})}),e.jsx("tbody",{children:i.prescriptions.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:r(s.date)}),e.jsx("td",{children:s.items}),e.jsx("td",{children:e.jsx(t,{to:`/prescriptions/${s.id}`,title:"Open prescription",children:"View"})})]},s.id))})]})})]})]})}),e.jsx("section",{className:"panel","data-for":"tab-visits",children:e.jsxs(c,{children:[e.jsxs("div",{className:"panel-head",children:[e.jsxs("h4",{children:["All Visits (",i.counts.visits,")"]}),e.jsx(t,{to:`/patients/${i.id}/visits`,className:"btn-link",children:"Open Visits"})]}),e.jsx(h,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Visit ID"}),e.jsx("th",{children:"Date & Time"}),e.jsx("th",{children:"Clinician"}),e.jsx("th",{children:"Department"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:i.visits.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:r(s.date)}),e.jsx("td",{children:s.clinician}),e.jsx("td",{children:s.department}),e.jsxs("td",{children:[e.jsx(t,{to:`/print/sticker/${s.id}`,title:"Print sticker",children:"Sticker"})," ","•"," ",e.jsx(t,{to:`/print/quote/${s.id}`,title:"Print sheet",children:"Print"})]})]},s.id))})]})})]})}),e.jsx("section",{className:"panel","data-for":"tab-presc",children:e.jsxs(c,{children:[e.jsxs("div",{className:"panel-head",children:[e.jsxs("h4",{children:["Prescriptions (",i.counts.prescriptions,")"]}),e.jsx(t,{to:"/prescriptions",className:"btn-link",children:"Open All"})]}),e.jsx(h,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Rx ID"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Open"})]})}),e.jsx("tbody",{children:i.prescriptions.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:r(s.date)}),e.jsx("td",{children:s.items}),e.jsx("td",{children:e.jsx(t,{to:`/prescriptions/${s.id}`,children:"View"})})]},s.id))})]})})]})}),e.jsx("section",{className:"panel","data-for":"tab-labs",children:e.jsxs(c,{children:[e.jsxs("div",{className:"panel-head",children:[e.jsxs("h4",{children:["Lab Orders (",i.counts.labs,")"]}),e.jsx(t,{to:"/labs",className:"btn-link",children:"Open All"})]}),e.jsx(h,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Lab ID"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Panel"}),e.jsx("th",{children:"Open"})]})}),e.jsx("tbody",{children:i.labs.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:r(s.date)}),e.jsx("td",{children:s.panel}),e.jsx("td",{children:e.jsx(t,{to:`/labs/${s.id}`,children:"View"})})]},s.id))})]})})]})}),e.jsx("section",{className:"panel","data-for":"tab-imaging",children:e.jsxs(c,{children:[e.jsxs("div",{className:"panel-head",children:[e.jsxs("h4",{children:["Imaging (",i.counts.imaging,")"]}),e.jsx(t,{to:"/imaging",className:"btn-link",children:"Open All"})]}),e.jsx(h,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Image ID"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Open"})]})}),e.jsx("tbody",{children:i.imaging.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:r(s.date)}),e.jsx("td",{children:s.type}),e.jsx("td",{children:e.jsx(t,{to:`/imaging/${s.id}`,children:"View"})})]},s.id))})]})})]})}),e.jsx("section",{className:"panel","data-for":"tab-bill",children:e.jsxs(c,{children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h4",{children:"Billing"}),e.jsx(t,{to:"/invoices",className:"btn-link",children:"Open Invoices"})]}),e.jsx(h,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Invoice ID"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Open"})]})}),e.jsx("tbody",{children:i.invoices.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:r(s.date)}),e.jsx("td",{children:s.status}),e.jsxs("td",{children:["₹ ",s.amount.toFixed(2)]}),e.jsxs("td",{children:[e.jsx(t,{to:`/invoices/${s.id}`,children:"View"})," ","•"," ",e.jsx(t,{to:`/invoices/${s.id}/print`,children:"Print"})]})]},s.id))})]})}),e.jsxs("div",{className:"links-row",children:[e.jsx(t,{to:"/receipts",children:"Receipts"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(t,{to:"/finance/ledgers",children:"Ledgers"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(t,{to:"/finance/taxes",children:"Taxes"})]})]})}),e.jsx("section",{className:"panel","data-for":"tab-activity",children:e.jsxs(c,{children:[e.jsx("h4",{children:"Activity"}),e.jsx("ul",{className:"timeline",children:i.activity.map(s=>e.jsxs("li",{children:[e.jsx("span",{className:"when",children:r(s.when)}),e.jsx("span",{className:"text",children:s.text})]},s.id))})]})}),e.jsx("section",{className:"panel","data-for":"tab-files",children:e.jsxs(c,{children:[e.jsxs("div",{className:"panel-head",children:[e.jsx("h4",{children:"Attachments"}),e.jsx(t,{to:"/settings/print-templates",className:"btn-link",children:"Print Templates"})]}),e.jsx(h,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"File"}),e.jsx("th",{children:"Size"}),e.jsx("th",{children:"Uploaded"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:i.attachments.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.name}),e.jsx("td",{children:s.size}),e.jsx("td",{children:r(s.uploadedAt)}),e.jsx("td",{children:e.jsx("button",{disabled:!0,"aria-disabled":!0,title:"Download disabled in demo",children:"Download"})})]},s.id))})]})})]})})]})})]}),e.jsx(U,{open:y,title:"Delete Patient?",message:"This action is disabled in the demo.",onClose:()=>u(!1)})]})};export{q as default};
