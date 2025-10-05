import{d as x,q as N,u as f,r as y,j as e,N as i}from"./index-BM8H5dnP.js";const h="var(--text)",r="var(--muted)",m="var(--card)",l="var(--border)",d="var(--accent)",k="var(--accent-soft)",j="var(--shadow)",b={Wrapper:x.div`
        width: 100%;
        padding: 18px;

        .muted {
            color: ${r};
        }
        .small {
            font-size: 12px;
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .btn {
            background: ${m};
            color: ${h};
            border: 1px solid ${l};
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s ease;
        }
        .btn:hover {
            border-color: ${d};
            color: ${d};
        }
        .btn.primary {
            border-color: ${d};
            box-shadow: 0 0 0 3px ${k};
        }
        .btn.ghost {
            background: transparent;
        }
        .btn.tiny {
            padding: 6px 8px;
            font-size: 12px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid ${l};
            background: ${m};
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            margin-left: 6px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            padding: 4px 10px;
            border-radius: 999px;
            background: color-mix(in oklab, ${d} 16%, transparent);
            color: ${d};
            border: 1px solid ${l};
            margin-right: 8px;
            font-weight: 600;
            font-size: 12px;
        }
        .status {
            border-color: ${d};
            background: color-mix(in oklab, ${d} 18%, transparent);
            color: ${h};
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 14px;
        }
        .breadcrumbs .sep {
            color: ${r};
        }
        .breadcrumbs a {
            color: ${r};
        }
        .breadcrumbs a:hover {
            color: ${d};
        }
        .crumbActions {
            margin-left: auto;
            display: flex;
            gap: 8px;
        }

        .pageHeader {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 18px;
            padding: 16px;
            background: ${m};
            border: 1px solid ${l};
            border-radius: 12px;
            box-shadow: ${j};
            margin-bottom: 18px;
        }
        .pageHeader .title {
            font-size: 22px;
            line-height: 1.2;
        }
        .pageHeader .meta {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        .pageHeader .subMeta {
            display: flex;
            flex-wrap: wrap;
            gap: 18px;
            margin-top: 8px;
            color: ${r};
        }
        .headerActions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .gridTwo {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            margin-bottom: 18px;
        }
        @media (max-width: 900px) {
            .gridTwo {
                grid-template-columns: 1fr;
            }
        }

        .card {
            background: ${m};
            border: 1px solid ${l};
            border-radius: 12px;
            box-shadow: ${j};
            padding: 16px;
        }
        .card h3 {
            margin-bottom: 10px;
        }

        .infoCard .identity {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 10px;
        }
        .infoCard .avatar {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            background: color-mix(in oklab, ${d} 14%, transparent);
            display: grid;
            place-items: center;
            font-weight: 800;
        }
        .infoCard .linkTitle {
            font-size: 16px;
            font-weight: 700;
        }
        .infoCard .rows {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 8px;
        }
        .infoCard .rows .label {
            color: ${r};
            margin-right: 8px;
        }
        .infoCard .links {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .dl {
            display: grid;
            grid-template-columns: 160px 1fr;
            row-gap: 8px;
        }
        .dl dt {
            color: ${r};
        }
        .dl dd {
            margin: 0;
        }

        .linkGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }
        @media (max-width: 1100px) {
            .linkGrid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media (max-width: 600px) {
            .linkGrid {
                grid-template-columns: 1fr;
            }
        }
        .linkTile {
            border: 1px solid ${l};
            border-radius: 10px;
            padding: 12px;
            background: color-mix(in oklab, ${m} 96%, transparent);
            text-decoration: none;
            color: ${h};
            display: block;
        }
        .linkTile:hover {
            border-color: ${d};
            color: ${d};
        }

        .vitalsGrid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 10px;
        }
        @media (max-width: 1200px) {
            .vitalsGrid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media (max-width: 600px) {
            .vitalsGrid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        .vital {
            border: 1px solid ${l};
            border-radius: 10px;
            padding: 12px;
            background: color-mix(in oklab, ${m} 96%, transparent);
        }
        .vk {
            color: ${r};
        }
        .vv {
            font-weight: 700;
            font-size: 15px;
        }

        .notes .noteRow {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 12px;
            padding: 10px 0;
            border-bottom: 1px solid ${l};
        }
        .notes .noteRow:last-child {
            border-bottom: 0;
        }
        .noteLabel {
            color: ${r};
            font-weight: 600;
        }
        .noteText {
            white-space: pre-line;
        }

        .tableWrap {
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th,
        td {
            padding: 10px;
            border-bottom: 1px solid ${l};
        }
        th {
            text-align: left;
            color: ${d};
        }

        .linkRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        .linkRow .dot {
            color: ${r};
        }

        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            position: relative;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 18px 1fr;
            gap: 10px;
            position: relative;
            padding: 8px 0;
        }
        .timeline li::before {
            content: "";
            position: absolute;
            left: 8px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: color-mix(in oklab, ${d} 18%, transparent);
        }
        .tlDot {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: ${d};
            position: relative;
            z-index: 1;
        }
        .tlBody .tlRow {
            display: flex;
            gap: 10px;
            align-items: baseline;
        }
        .tlLabel {
            font-weight: 700;
        }
        .tlWhen {
            color: ${r};
            font-size: 12px;
        }
    `,Tabs:x.section`
        margin-top: 6px;

        /* radio tabs (CSS-only) */
        input[type="radio"] {
            display: none;
        }

        .tabBar {
            display: flex;
            gap: 8px;
            align-items: center;
            border-bottom: 1px solid ${l};
            margin-bottom: 12px;
        }
        .tabBar label {
            padding: 8px 12px;
            border: 1px solid ${l};
            border-bottom: none;
            border-radius: 10px 10px 0 0;
            background: ${m};
            cursor: pointer;
            color: ${r};
            user-select: none;
        }
        .tabBar label:hover {
            color: ${d};
        }
        .tabBar .flexSpacer {
            flex: 1;
        }
        .tabBar .miniLink {
            font-size: 12px;
            color: ${r};
            text-decoration: none;
        }
        .tabBar .miniLink:hover {
            color: ${d};
        }

        /* panes */
        .tabPane {
            display: none;
        }
        #tab-summary:checked ~ .tabPane:nth-of-type(1) {
            display: block;
        }
        #tab-vitals:checked ~ .tabPane:nth-of-type(2) {
            display: block;
        }
        #tab-notes:checked ~ .tabPane:nth-of-type(3) {
            display: block;
        }
        #tab-related:checked ~ .tabPane:nth-of-type(4) {
            display: block;
        }
        #tab-activity:checked ~ .tabPane:nth-of-type(5) {
            display: block;
        }

        /* active tab style */
        #tab-summary:checked ~ .tabBar label[for="tab-summary"],
        #tab-vitals:checked ~ .tabBar label[for="tab-vitals"],
        #tab-notes:checked ~ .tabBar label[for="tab-notes"],
        #tab-related:checked ~ .tabBar label[for="tab-related"],
        #tab-activity:checked ~ .tabBar label[for="tab-activity"] {
            color: ${h};
            background: color-mix(in oklab, ${d} 12%, ${m});
            box-shadow: 0 -3px 0 0 ${d} inset;
        }
    `,StickyBar:x.div`
        position: sticky;
        bottom: 0;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        background: ${m};
        border: 1px solid ${l};
        border-radius: 12px;
        box-shadow: ${j};
        padding: 10px;
        margin-top: 18px;
        z-index: 5;

        .left {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .left .sep {
            color: ${r};
        }
        .right {
            display: flex;
            gap: 8px;
        }
    `,ModalOverlay:x.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        z-index: 1000;
    `,ModalCard:x.div`
        width: min(520px, 96vw);
        background: ${m};
        color: ${h};
        border: 1px solid ${l};
        border-radius: 12px;
        box-shadow: ${j};
        .modalHeader {
            padding: 14px 16px;
            border-bottom: 1px solid ${l};
        }
        .modalBody {
            padding: 14px 16px;
        }
        .modalActions {
            padding: 12px 16px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            border-top: 1px solid ${l};
        }
    `},v="Asia/Kolkata",t={date(c){const p=new Intl.DateTimeFormat("en-US",{timeZone:v,weekday:"short",month:"short",day:"2-digit",year:"numeric"}).formatToParts(new Date(c)),o=Object.fromEntries(p.map(n=>[n.type,n.value]));return`${o.weekday} ${o.month} ${o.day} ${o.year}`},time(c){const p=new Intl.DateTimeFormat("en-US",{timeZone:v,hourCycle:"h23",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(new Date(c)),o=Object.fromEntries(p.map(n=>[n.type,n.value]));return`${o.hour}:${o.minute}:${o.second}hrs`},dateTime(c){return`${t.date(c)} ${t.time(c)}`}},$=({open:c,title:p,message:o,onConfirm:n,onClose:a})=>c?e.jsx(b.ModalOverlay,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:e.jsxs(b.ModalCard,{children:[e.jsx("header",{className:"modalHeader",children:e.jsx("h4",{id:"confirm-title",children:p})}),e.jsxs("div",{className:"modalBody",children:[e.jsx("p",{children:o}),e.jsx("p",{className:"muted small",children:"This is a demo-only UI. No changes will be made."})]}),e.jsxs("footer",{className:"modalActions",children:[e.jsx("button",{className:"btn ghost",onClick:a,children:"Close"}),e.jsx("button",{className:"btn primary",onClick:()=>{n==null||n(),a()},children:"Okay"})]})]})}):null;function T(){const{appointmentId:c="APT-30241"}=N(),p=f(),[o,n]=y.useState(!1),a=y.useMemo(()=>({id:c,status:"Confirmed",type:"Consultation",priority:"Normal",department:"Internal Medicine",doctor:{id:"USR-2002",name:"Dr. Arvind Mehta",speciality:"Internal Medicine",phone:"+91 98xxxxxx12"},patient:{id:"PAT-1007",name:"Ritika Sharma",dob:"1992-07-18",age:"33",phone:"+91 98xxxxxx31",email:"ritika@example.com",code:"PT-1007"},slot:{date:"2025-10-04T15:30:00+05:30",start:"2025-10-04T15:30:00+05:30",end:"2025-10-04T16:00:00+05:30",room:"OPD-02"},meta:{createdAt:"2025-09-28T10:12:45+05:30",updatedAt:"2025-10-04T16:02:05+05:30",createdBy:{id:"USR-1001",name:"Frontdesk"},updatedBy:{id:"USR-1001",name:"Frontdesk"}},tags:["first visit","cash","no-allergy"],vitals:[{k:"Height",v:"164 cm"},{k:"Weight",v:"58 kg"},{k:"Temp",v:"98.6 °F"},{k:"Pulse",v:"78 bpm"},{k:"SpO₂",v:"99%"},{k:"BP",v:"118/76 mmHg"}],notes:[{label:"Chief complaint",text:"Intermittent headache and mild nausea since 3 days."},{label:"History",text:"No prior chronic conditions reported. No medication currently."},{label:"Assessment",text:"Likely tension-type headache; rule out dehydration."},{label:"Plan",text:"Hydration advice, OTC analgesic if required, follow-up if persists."}],related:{prescriptions:[{id:"RX-92831",date:"2025-10-04T16:05:00+05:30"}],labs:[{id:"LAB-55620",date:"2025-10-04T16:10:00+05:30",title:"CBC"}],imaging:[],invoices:[{id:"INV-2031",date:"2025-10-04T16:20:00+05:30",total:"₹600"}],receipts:[{id:"RCT-6615",date:"2025-10-04T16:25:20+05:30",amount:"₹600"}]},timeline:[{at:"2025-09-28T10:12:45+05:30",label:"Created",by:"Frontdesk"},{at:"2025-10-04T15:00:00+05:30",label:"Reminder sent",by:"System"},{at:"2025-10-04T15:20:00+05:30",label:"Checked-in",by:"Frontdesk"},{at:"2025-10-04T15:30:00+05:30",label:"Roomed",by:"Nurse"},{at:"2025-10-04T16:00:00+05:30",label:"Consult completed",by:"Dr. A. Mehta"}]}),[c]),u=()=>{document.body.classList.add("print-section-mode");try{window.print()}finally{setTimeout(()=>document.body.classList.remove("print-section-mode"),300)}};return e.jsxs(b.Wrapper,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(i,{to:"/home",children:"Home"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx(i,{to:"/appointments",children:"Appointments"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"muted",children:a.id}),e.jsxs("div",{className:"crumbActions",children:[e.jsx(i,{to:"/appointments",className:"btn ghost tiny",children:"Back to list"}),e.jsx(i,{to:"/appointments/calendar",className:"btn ghost tiny",children:"Calendar"})]})]}),e.jsxs("header",{className:"pageHeader",children:[e.jsxs("div",{className:"titleBlock",children:[e.jsxs("h1",{className:"title",children:["Appointment ",e.jsx("span",{className:"mono",children:a.id})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:`status pill status-${a.status.toLowerCase().replace(/\s+/g,"-")}`,children:a.status}),e.jsx("span",{className:"pill",children:a.type}),e.jsx("span",{className:"pill",children:a.priority}),e.jsx("span",{className:"pill",children:a.department}),a.tags.map(s=>e.jsx("span",{className:"chip",children:s},s))]}),e.jsxs("div",{className:"subMeta",children:[e.jsxs("span",{children:[e.jsx("strong",{children:"Created:"})," ",t.dateTime(a.meta.createdAt)]}),e.jsxs("span",{children:[e.jsx("strong",{children:"Updated:"})," ",t.dateTime(a.meta.updatedAt)]}),e.jsxs("span",{children:[e.jsx("strong",{children:"Slot:"})," ",t.date(a.slot.date)," · ",t.time(a.slot.start)," – ",t.time(a.slot.end)," · Room ",a.slot.room]})]})]}),e.jsxs("div",{className:"headerActions",children:[e.jsx("button",{className:"btn primary",onClick:u,children:"Print Summary"}),e.jsx("button",{className:"btn",onClick:()=>p(`/patients/${a.patient.id}`),children:"Open Patient"}),e.jsx("button",{className:"btn",onClick:()=>p(`/admin/users/${a.doctor.id}`),children:"Open Doctor"}),e.jsx("button",{className:"btn",onClick:()=>n(!0),children:"Cancel Appointment"})]})]}),e.jsxs("section",{className:"gridTwo",children:[e.jsxs("div",{className:"card infoCard",id:"search-print-area",children:[e.jsx("h3",{children:"Patient"}),e.jsxs("div",{className:"identity",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:"RS"}),e.jsxs("div",{className:"idBlock",children:[e.jsx(i,{to:`/patients/${a.patient.id}`,className:"linkTitle",children:a.patient.name}),e.jsx("div",{className:"mono small",children:a.patient.code})]})]}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"DOB"}),e.jsx("span",{children:t.date(a.patient.dob)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Age"}),e.jsx("span",{children:a.patient.age})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Phone"}),e.jsx("span",{children:a.patient.phone})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Email"}),e.jsx("span",{children:a.patient.email})]})]}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:`/patients/${a.patient.id}`,className:"btn ghost tiny",children:"View profile"}),e.jsx(i,{to:`/patients/${a.patient.id}/visits`,className:"btn ghost tiny",children:"Visits"}),e.jsx(i,{to:"/prescriptions",className:"btn ghost tiny",children:"Prescriptions"}),e.jsx(i,{to:"/labs",className:"btn ghost tiny",children:"Labs"})]})]}),e.jsxs("div",{className:"card infoCard",children:[e.jsx("h3",{children:"Doctor"}),e.jsxs("div",{className:"identity",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:"AM"}),e.jsxs("div",{className:"idBlock",children:[e.jsx(i,{to:`/admin/users/${a.doctor.id}`,className:"linkTitle",children:a.doctor.name}),e.jsx("div",{className:"mono small",children:a.doctor.speciality})]})]}),e.jsxs("div",{className:"rows",children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Dept"}),e.jsx("span",{children:a.department})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Phone"}),e.jsx("span",{children:a.doctor.phone})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Slot"}),e.jsxs("span",{children:[t.time(a.slot.start)," – ",t.time(a.slot.end)]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"Room"}),e.jsx("span",{children:a.slot.room})]})]}),e.jsxs("div",{className:"links",children:[e.jsx(i,{to:"/appointments/calendar",className:"btn ghost tiny",children:"View calendar"}),e.jsx(i,{to:"/admin/users",className:"btn ghost tiny",children:"All users"}),e.jsx(i,{to:"/settings/appearance",className:"btn ghost tiny",children:"Appearance"})]})]})]}),e.jsxs(b.Tabs,{children:[e.jsx("input",{type:"radio",name:"apptTabs",id:"tab-summary",defaultChecked:!0}),e.jsx("input",{type:"radio",name:"apptTabs",id:"tab-vitals"}),e.jsx("input",{type:"radio",name:"apptTabs",id:"tab-notes"}),e.jsx("input",{type:"radio",name:"apptTabs",id:"tab-related"}),e.jsx("input",{type:"radio",name:"apptTabs",id:"tab-activity"}),e.jsxs("div",{className:"tabBar",children:[e.jsx("label",{htmlFor:"tab-summary",children:"Summary"}),e.jsx("label",{htmlFor:"tab-vitals",children:"Vitals"}),e.jsx("label",{htmlFor:"tab-notes",children:"Notes"}),e.jsx("label",{htmlFor:"tab-related",children:"Related"}),e.jsx("label",{htmlFor:"tab-activity",children:"Activity"}),e.jsx("div",{className:"flexSpacer"}),e.jsx(i,{className:"miniLink",to:"/reports/customers",children:"Reports"}),e.jsx(i,{className:"miniLink",to:"/notifications",children:"Notifications"})]}),e.jsxs("div",{className:"tabPane",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Overview"}),e.jsxs("div",{className:"gridTwo",children:[e.jsx("div",{children:e.jsxs("dl",{className:"dl",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Status"}),e.jsx("dd",{children:a.status})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Type"}),e.jsx("dd",{children:a.type})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Priority"}),e.jsx("dd",{children:a.priority})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Department"}),e.jsx("dd",{children:a.department})]})]})}),e.jsx("div",{children:e.jsxs("dl",{className:"dl",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Created"}),e.jsxs("dd",{children:[t.dateTime(a.meta.createdAt)," by ",a.meta.createdBy.name]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Updated"}),e.jsxs("dd",{children:[t.dateTime(a.meta.updatedAt)," by ",a.meta.updatedBy.name]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Scheduled for"}),e.jsxs("dd",{children:[t.date(a.slot.date)," at ",t.time(a.slot.start)]})]})]})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("div",{className:"linkGrid",children:[e.jsxs(i,{to:`/patients/${a.patient.id}`,className:"linkTile",children:["Patient • ",a.patient.name]}),e.jsxs(i,{to:`/prescriptions/${a.related.prescriptions[0].id}`,className:"linkTile",children:["Prescription • ",a.related.prescriptions[0].id]}),e.jsxs(i,{to:`/labs/${a.related.labs[0].id}`,className:"linkTile",children:["Lab • ",a.related.labs[0].title]}),e.jsxs(i,{to:`/invoices/${a.related.invoices[0].id}`,className:"linkTile",children:["Invoice • ",a.related.invoices[0].id]}),e.jsx(i,{to:"/receipts",className:"linkTile",children:"Receipts"}),e.jsx(i,{to:"/reports/inventory",className:"linkTile",children:"Inventory Report"}),e.jsx(i,{to:"/finance/ledgers",className:"linkTile",children:"Ledgers"}),e.jsx(i,{to:"/tools/import-export",className:"linkTile",children:"Import / Export"})]})]})]}),e.jsx("div",{className:"tabPane",children:e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Vitals (read-only)"}),e.jsx("div",{className:"vitalsGrid",children:a.vitals.map(s=>e.jsxs("div",{className:"vital",children:[e.jsx("div",{className:"vk",children:s.k}),e.jsx("div",{className:"vv",children:s.v})]},s.k))})]})}),e.jsx("div",{className:"tabPane",children:e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Clinical Notes"}),e.jsx("div",{className:"notes",children:a.notes.map((s,g)=>e.jsxs("div",{className:"noteRow",children:[e.jsx("div",{className:"noteLabel",children:s.label}),e.jsx("div",{className:"noteText",children:s.text})]},g))})]})}),e.jsx("div",{className:"tabPane",children:e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Related Records"}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type"}),e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Action"})]})}),e.jsxs("tbody",{children:[a.related.prescriptions.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:"Prescription"}),e.jsx("td",{className:"mono",children:s.id}),e.jsx("td",{children:t.dateTime(s.date)}),e.jsx("td",{children:e.jsx(i,{to:`/prescriptions/${s.id}`,className:"btn tiny",children:"Open"})})]},s.id)),a.related.labs.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:"Lab"}),e.jsx("td",{className:"mono",children:s.id}),e.jsx("td",{children:t.dateTime(s.date)}),e.jsx("td",{children:e.jsx(i,{to:`/labs/${s.id}`,className:"btn tiny",children:"Open"})})]},s.id)),a.related.imaging.length===0&&e.jsxs("tr",{children:[e.jsx("td",{children:"Imaging"}),e.jsx("td",{colSpan:3,className:"muted",children:"No imaging ordered"})]}),a.related.invoices.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:"Invoice"}),e.jsx("td",{className:"mono",children:s.id}),e.jsx("td",{children:t.dateTime(a.meta.updatedAt)}),e.jsx("td",{children:e.jsx(i,{to:`/invoices/${s.id}`,className:"btn tiny",children:"Open"})})]},s.id)),a.related.receipts.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:"Receipt"}),e.jsx("td",{className:"mono",children:s.id}),e.jsx("td",{children:t.dateTime(s.date)}),e.jsx("td",{children:e.jsx(i,{to:"/receipts",className:"btn tiny",children:"Open"})})]},s.id))]})]})}),e.jsxs("div",{className:"linkRow",children:[e.jsx(i,{to:"/labs/catalog",children:"Lab Catalog"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(i,{to:`/patients/${a.patient.id}/visits`,children:"All Visits"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(i,{to:"/reports/sales",children:"Sales Report"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(i,{to:"/finance/taxes",children:"Taxes"})]})]})}),e.jsx("div",{className:"tabPane",children:e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Timeline"}),e.jsx("ol",{className:"timeline",children:a.timeline.map((s,g)=>e.jsxs("li",{children:[e.jsx("div",{className:"tlDot"}),e.jsxs("div",{className:"tlBody",children:[e.jsxs("div",{className:"tlRow",children:[e.jsx("span",{className:"tlLabel",children:s.label}),e.jsx("span",{className:"tlWhen",children:t.dateTime(s.at)})]}),e.jsxs("div",{className:"muted small",children:["by ",s.by]})]})]},g))})]})})]}),e.jsxs(b.StickyBar,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"muted",children:"ID"})," ",e.jsx("span",{className:"mono",children:a.id}),e.jsx("span",{className:"sep",children:"•"}),e.jsxs("span",{children:[t.date(a.slot.date)," · ",t.time(a.slot.start)," – ",t.time(a.slot.end)]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{className:"btn",onClick:()=>p(`/patients/${a.patient.id}`),children:"Open Patient"}),e.jsx("button",{className:"btn",onClick:()=>p(`/prescriptions/${a.related.prescriptions[0].id}`),children:"Prescription"}),e.jsx("button",{className:"btn",onClick:u,children:"Print"}),e.jsx("button",{className:"btn",onClick:()=>n(!0),children:"Cancel"})]})]}),e.jsx($,{open:o,title:"Action disabled in demo",message:"This is a display-only theme. Cancellation and edits are disabled.",onClose:()=>n(!1)})]})}export{T as default};
