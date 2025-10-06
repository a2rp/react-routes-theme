import{d as j,q as k,r as x,j as e,N as s}from"./index-Dvs-eF3B.js";const p="var(--text, #f3f4f6)",m="var(--muted, #a0a0a7)",h="var(--card, #111318)",d="var(--border, #23262d)",t="var(--accent, #5aa9ff)",$="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",y="var(--accent-soft, rgba(90,169,255,0.15))",f={Wrap:j.div`
        width: 100%;
        color: ${p};
        display: flex;
        flex-direction: column;
        gap: 14px;

        .muted {
            color: ${m};
        }

        .card {
            background: ${h};
            border: 1px solid ${d};
            border-radius: 12px;
            box-shadow: ${$};
            padding: 16px;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            a {
                color: ${m};
            }
            a:hover {
                color: ${t};
            }
            .current {
                color: ${p};
            }
        }

        .header {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 16px;
        }
        @media (max-width: 1100px) {
            .header {
                grid-template-columns: 1fr;
            }
        }

        .identity {
            display: flex;
            gap: 14px;
            align-items: center;
            .avatar {
                width: 62px;
                height: 62px;
                border-radius: 50%;
                background: color-mix(in oklab, ${t} 20%, transparent);
                border: 1px solid ${d};
                display: grid;
                place-items: center;
                font-weight: 700;
                font-size: 24px;
                color: ${p};
            }
            .meta h1 {
                font-size: 22px;
                line-height: 1.2;
            }
            .meta .code {
                font-size: 12px;
                color: ${m};
                margin-left: 8px;
                background: color-mix(in oklab, ${t} 12%, transparent);
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${d};
            }
            .tags {
                display: flex;
                gap: 8px;
                margin-top: 6px;
            }
            .tag {
                font-size: 11px;
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid ${d};
                background: rgba(0, 0, 0, 0.08);
            }
        }

        .meta-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            > div {
                display: grid;
                grid-template-columns: 120px 1fr;
                gap: 8px;
                font-size: 13px;
            }
            .k {
                color: ${m};
            }
            .v {
                color: ${p};
            }
        }

        .quicklinks {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            .link {
                padding: 6px 10px;
                border-radius: 8px;
                border: 1px solid ${d};
                background: rgba(0, 0, 0, 0.08);
            }
            .link:hover {
                color: ${t};
                border-color: ${t};
                background: color-mix(in oklab, ${t} 10%, transparent);
            }
        }

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            .left,
            .right {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            input[type="text"],
            input[type="date"],
            select {
                height: 34px;
                padding: 0 10px;
                border-radius: 8px;
                border: 1px solid ${d};
                background: ${h};
                color: ${p};
                transition: border-color 0.25s, box-shadow 0.25s;
            }
            input:focus,
            select:focus {
                border-color: ${t};
                box-shadow: 0 0 0 3px ${y};
                outline: none;
            }
            button {
                padding: 8px 12px;
                border-radius: 8px;
                border: 1px solid ${d};
                background: ${h};
                color: ${p};
                cursor: pointer;
                transition: all 0.25s ease;
            }
            button:hover {
                color: ${t};
                border-color: ${t};
                background: rgba(0, 0, 0, 0.08);
            }
            button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 320px;
            gap: 14px;
        }
        @media (max-width: 1200px) {
            .grid {
                grid-template-columns: 1fr;
            }
            .rail {
                order: 2;
            }
        }

        .table .table-head {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 8px;
            h2 {
                font-size: 18px;
            }
        }

        .table-wrap {
            border: 1px solid ${d};
            border-radius: 10px;
            overflow: hidden;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${h};
            border-bottom: 1px solid ${d};
            text-align: left;
            padding: 10px;
            color: ${t};
        }
        tbody td {
            border-top: 1px solid ${d};
            padding: 10px;
            vertical-align: top;
        }
        tbody tr:hover {
            background: rgba(0, 0, 0, 0.06);
        }

        .strong {
            font-weight: 600;
        }
        .right {
            text-align: right;
        }

        .vitals {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .links a {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${d};
            background: rgba(0, 0, 0, 0.08);
        }
        .links a:hover {
            color: ${t};
            border-color: ${t};
        }

        .badge {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid ${d};
            font-size: 12px;
        }
        .badge.ok {
            background: color-mix(in oklab, ${t} 14%, transparent);
        }
        .badge.warn {
            background: rgba(255, 196, 0, 0.12);
        }
        .badge.muted {
            background: rgba(128, 128, 128, 0.16);
        }

        .actions .ghost {
            background: transparent;
            border: 1px dashed ${d};
            padding: 6px 10px;
            border-radius: 8px;
        }
        .actions .ghost:hover {
            border-color: ${t};
            color: ${t};
            background: color-mix(in oklab, ${t} 10%, transparent);
        }
        .actions .ghost.danger:hover {
            border-color: #ff4d4f;
            color: #ff4d4f; /* semantic danger */
            background: rgba(255, 77, 79, 0.08);
        }

        .table-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
            .pager {
                display: flex;
                gap: 8px;
            }
            .pager button {
                min-width: 80px;
            }
        }

        .rail .card {
            margin-bottom: 14px;
        }
        .timeline {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 10px;
        }
        .timeline li {
            display: grid;
            grid-template-columns: 14px 1fr;
            gap: 8px;
            align-items: start;
        }
        .timeline .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${t};
            margin-top: 6px;
        }
        .timeline .t {
            font-weight: 600;
        }
    `,Modal:j.div`
        position: fixed;
        inset: 0;
        display: grid;
        place-items: center;
        z-index: 9999;

        .backdrop {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .box {
            position: relative;
            z-index: 1;
            width: min(520px, 92vw);
        }
        .box h3 {
            margin-bottom: 8px;
        }
        .box p {
            color: ${m};
        }
        .actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 14px;
        }
        .actions button {
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid ${d};
            background: ${h};
            color: ${p};
            cursor: pointer;
            transition: all 0.25s ease;
        }
        .actions button:hover {
            color: ${t};
            border-color: ${t};
        }
    `},l={date:r=>{const n=new Date(r),o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][n.getDay()],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()],i=String(n.getDate()).padStart(2,"0"),b=n.getFullYear();return`${o} ${c} ${i} ${b}`},time:r=>{const n=new Date(r),o=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0"),i=String(n.getSeconds()).padStart(2,"0");return`${o}:${c}:${i}hrs`},datetime:r=>`${l.date(r)} ${l.time(r)}`},v={id:"PAT-1001",code:"PAT-1001",name:"Riya Singh",gender:"F",age:32,phone:"+91 98xxxxxx12",email:"riya.singh@example.com",bloodGroup:"O+",tags:["VIP","Diabetic"],createdAt:"2025-02-14T12:20:00+05:30",updatedAt:"2025-10-02T10:05:22+05:30"},g=[{id:"VIS-5006",at:"2025-10-04T15:38:20+05:30",dept:"Internal Medicine",reason:"Follow-up: HbA1c",doctor:"Dr. A. Menon",vitals:{bp:"120/80",pulse:"78",temp:"98.6°F",spo2:"99%"},appointmentId:"APT-9021",rxId:"RX-1047",labId:"LAB-7881",imagingId:"IMG-5440",invoiceId:"INV-2088",status:"Completed"},{id:"VIS-5007",at:"2025-10-18T10:00:00+05:30",dept:"Endocrinology",reason:"Routine review",doctor:"Dr. S. Rao",vitals:{bp:"122/82",pulse:"76",temp:"98.4°F",spo2:"98%"},appointmentId:"APT-9050",rxId:"RX-1059",labId:"LAB-7920",imagingId:"IMG-5512",invoiceId:"INV-2096",status:"Upcoming"},{id:"VIS-5003",at:"2025-08-22T11:45:12+05:30",dept:"Cardiology",reason:"ECG review",doctor:"Dr. P. Gupta",vitals:{bp:"124/82",pulse:"80",temp:"98.7°F",spo2:"98%"},appointmentId:"APT-8840",rxId:"RX-1011",labId:"LAB-7610",imagingId:"IMG-5201",invoiceId:"INV-2019",status:"Completed"},{id:"VIS-5001",at:"2025-06-15T09:10:45+05:30",dept:"General OPD",reason:"Fever & fatigue",doctor:"Dr. K. Chawla",vitals:{bp:"118/78",pulse:"84",temp:"100.1°F",spo2:"97%"},appointmentId:"APT-8711",rxId:"RX-0992",labId:"LAB-7495",imagingId:"IMG-5102",invoiceId:"INV-1980",status:"Completed"}],I=r=>r==="Completed"?"ok":r==="Upcoming"?"warn":"muted",w=({open:r,onClose:n,title:o="Action unavailable",body:c="This is a demo. Changes are disabled."})=>r?e.jsxs(f.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"demo-modal-title",children:[e.jsxs("div",{className:"box card",children:[e.jsx("h3",{id:"demo-modal-title",children:o}),e.jsx("p",{children:c}),e.jsx("div",{className:"actions",children:e.jsx("button",{onClick:n,autoFocus:!0,children:"Close"})})]}),e.jsx("div",{className:"backdrop",onClick:n})]}):null,S=()=>{const{patientId:r=v.id}=k(),[n,o]=x.useState(!1),c=x.useRef(null),i=x.useMemo(()=>({...v,id:r}),[r]),b=x.useCallback(()=>o(!0),[]),N=x.useCallback(()=>o(!1),[]),u=x.useCallback(()=>{const a=document.body;a.classList.add("print-section-mode"),setTimeout(()=>{window.print(),setTimeout(()=>a.classList.remove("print-section-mode"),50)},50)},[]);return e.jsxs(f.Wrap,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("nav",{className:"breadcrumbs",children:[e.jsx(s,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(s,{to:"/patients",children:"Patients"}),e.jsx("span",{children:"/"}),e.jsx(s,{to:`/patients/${i.id}`,children:i.name}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"current",children:"Visits"})]}),e.jsxs("section",{className:"header card",id:"search-print-area",ref:c,children:[e.jsxs("div",{className:"identity",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:i.name.charAt(0)}),e.jsxs("div",{className:"meta",children:[e.jsxs("h1",{children:[i.name," ",e.jsx("span",{className:"code",children:i.code})]}),e.jsxs("div",{className:"muted",children:[i.gender," • ",i.age," yrs • ",i.bloodGroup," •"," ",e.jsx("a",{href:`tel:${i.phone}`,title:"Call",children:i.phone})," •"," ",e.jsx("a",{href:`mailto:${i.email}`,title:"Email",children:i.email})]}),e.jsx("div",{className:"tags",children:i.tags.map(a=>e.jsx("span",{className:"tag",children:a},a))})]})]}),e.jsxs("div",{className:"meta-grid",children:[e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Created"}),e.jsx("span",{className:"v",children:l.datetime(i.createdAt)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Last Updated"}),e.jsx("span",{className:"v",children:l.datetime(i.updatedAt)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Total Visits"}),e.jsx("span",{className:"v",children:g.length})]}),e.jsxs("div",{children:[e.jsx("span",{className:"k",children:"Primary Dept"}),e.jsx("span",{className:"v",children:"Internal Medicine"})]})]}),e.jsxs("div",{className:"quicklinks",children:[e.jsx(s,{to:`/patients/${i.id}`,className:"link",children:"Patient Detail"}),e.jsx(s,{to:"/appointments",className:"link",children:"Appointments"}),e.jsx(s,{to:"/appointments/calendar",className:"link",children:"Calendar"}),e.jsx(s,{to:"/prescriptions",className:"link",children:"Prescriptions"}),e.jsx(s,{to:"/labs",className:"link",children:"Labs"}),e.jsx(s,{to:"/imaging",className:"link",children:"Imaging"}),e.jsx(s,{to:"/invoices",className:"link",children:"Invoices"}),e.jsx(s,{to:"/reports/customers",className:"link",children:"Customer Report"}),e.jsx(s,{to:"/reports/finance",className:"link",children:"Finance Report"})]})]}),e.jsxs("div",{className:"toolbar card",children:[e.jsxs("div",{className:"left",children:[e.jsx("input",{type:"text",placeholder:"Search visits","aria-label":"Search visits"}),e.jsx("input",{type:"date","aria-label":"From date"}),e.jsx("input",{type:"date","aria-label":"To date"}),e.jsxs("select",{"aria-label":"Status filter",defaultValue:"ALL",children:[e.jsx("option",{value:"ALL",children:"All"}),e.jsx("option",{value:"Completed",children:"Completed"}),e.jsx("option",{value:"Upcoming",children:"Upcoming"})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{title:"Demo only",disabled:!0,children:"New Visit"}),e.jsx("button",{title:"Demo only",disabled:!0,children:"New Prescription"}),e.jsx("button",{onClick:u,title:"Print summary",children:"Print Summary"})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"table card",children:[e.jsxs("div",{className:"table-head",children:[e.jsx("h2",{children:"All Visits"}),e.jsxs("div",{className:"hint muted",children:["Showing ",g.length," records"]})]}),e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Visit ID"}),e.jsx("th",{children:"Date / Time"}),e.jsx("th",{children:"Department • Reason"}),e.jsx("th",{children:"Doctor"}),e.jsx("th",{children:"Vitals"}),e.jsx("th",{children:"Links"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"right",children:"Actions"})]})}),e.jsx("tbody",{children:g.map(a=>e.jsxs("tr",{"data-status":a.status,children:[e.jsx("td",{children:e.jsx("code",{children:a.id})}),e.jsxs("td",{children:[e.jsx("div",{children:l.date(a.at)}),e.jsx("div",{className:"muted",children:l.time(a.at)})]}),e.jsxs("td",{children:[e.jsx("div",{className:"strong",children:a.dept}),e.jsx("div",{className:"muted",children:a.reason})]}),e.jsx("td",{children:a.doctor}),e.jsxs("td",{className:"vitals",children:[e.jsxs("span",{children:["BP ",a.vitals.bp]}),e.jsxs("span",{children:["Pulse ",a.vitals.pulse]}),e.jsxs("span",{children:["Temp ",a.vitals.temp]}),e.jsxs("span",{children:["SpO₂ ",a.vitals.spo2]})]}),e.jsxs("td",{className:"links",children:[e.jsx(s,{to:`/appointments/${a.appointmentId}`,title:"Appointment",children:"Appt"}),e.jsx(s,{to:`/prescriptions/${a.rxId}`,title:"Prescription",children:"Rx"}),e.jsx(s,{to:`/labs/${a.labId}`,title:"Lab",children:"Lab"}),e.jsx(s,{to:`/imaging/${a.imagingId}`,title:"Imaging",children:"Img"}),e.jsx(s,{to:`/invoices/${a.invoiceId}`,title:"Invoice",children:"Inv"})]}),e.jsx("td",{children:e.jsx("span",{className:`badge ${I(a.status)}`,children:a.status})}),e.jsxs("td",{className:"right actions",children:[e.jsx(s,{to:`/patients/${i.id}`,className:"ghost",children:"View"}),e.jsx("button",{className:"ghost",onClick:u,children:"Print"}),e.jsx("button",{className:"ghost danger",onClick:b,children:"Cancel"})]})]},a.id))})]})}),e.jsxs("div",{className:"table-footer",children:[e.jsx("div",{className:"muted",children:"Deep links open across modules. List is static for demo."}),e.jsxs("div",{className:"pager",children:[e.jsx("button",{disabled:!0,title:"Demo only",children:"Prev"}),e.jsx("button",{disabled:!0,title:"Demo only",children:"Next"})]})]})]}),e.jsxs("aside",{className:"rail",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Activity"}),e.jsxs("ul",{className:"timeline",children:[e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{children:[e.jsx("div",{className:"t",children:"Last visit"}),e.jsx("div",{className:"muted",children:l.datetime(g[0].at)})]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{children:[e.jsx("div",{className:"t",children:"Record updated"}),e.jsx("div",{className:"muted",children:l.datetime(i.updatedAt)})]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{children:[e.jsx("div",{className:"t",children:"Patient created"}),e.jsx("div",{className:"muted",children:l.datetime(i.createdAt)})]})]})]})]}),e.jsxs("div",{className:"card shortcuts",children:[e.jsx("h3",{children:"Shortcuts"}),e.jsx(s,{to:`/patients/${i.id}`,className:"s-link",children:"Open Patient"}),e.jsx(s,{to:"/appointments",className:"s-link",children:"Appointments"}),e.jsx(s,{to:"/appointments/calendar",className:"s-link",children:"Calendar"}),e.jsx(s,{to:"/prescriptions",className:"s-link",children:"Prescriptions"}),e.jsx(s,{to:"/labs",className:"s-link",children:"Lab Orders"}),e.jsx(s,{to:"/imaging",className:"s-link",children:"Imaging"}),e.jsx(s,{to:"/reports",className:"s-link",children:"Reports"}),e.jsx(s,{to:"/finance",className:"s-link",children:"Finance"})]})]})]}),e.jsx(w,{open:n,onClose:N})]})};export{S as default};
