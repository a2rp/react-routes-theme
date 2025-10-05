import{d as T,u as D,r as g,j as e,L as r,N as L,P as R,w as O,e as z,Q as B,S as U,b as F,U as E,V as I,W as K,X as V,O as W,k as G}from"./index-CvWKwy17.js";const i="var(--text, #f3f4f6)",x="var(--muted, #a0a0a7)",p="var(--card, #111318)",o="var(--border, #23262d)",a="var(--accent, #5aa9ff)",j="var(--accent-soft, rgba(90,169,255,0.15))",w="var(--shadow, 0 10px 30px rgba(0,0,0,0.35))",k={Page:T.div`
        padding: 18px 18px 28px;
        color: ${i};

        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
            .breadcrumbs {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${x};
                a {
                    color: ${i};
                    opacity: 0.9;
                }
                a:hover {
                    color: ${a};
                }
                span {
                    opacity: 0.6;
                }
            }
            .toolbar {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                .toolLink {
                    text-decoration: none;
                }
                .toolBtn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid ${o};
                    background: ${p};
                    color: ${i};
                    padding: 8px 12px;
                    border-radius: 9px;
                    box-shadow: none;
                    cursor: pointer;
                    transition: border-color 0.25s, box-shadow 0.25s,
                        transform 0.05s;
                }
                .toolBtn:hover {
                    border-color: ${a};
                    box-shadow: 0 0 0 3px ${j};
                    color: ${a};
                }
                .toolBtn:active {
                    transform: translateY(1px);
                }
                .toolBtn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
        }

        .headline {
            background: ${p};
            border: 1px solid ${o};
            border-radius: 12px;
            padding: 16px;
            box-shadow: ${w};
            margin-bottom: 14px;
            .titleRow {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                margin-bottom: 12px;
                h1 {
                    font-size: 18px;
                    letter-spacing: 0.3px;
                    display: flex;
                    align-items: center;
                }
                .meta {
                    color: ${x};
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .dot {
                    opacity: 0.5;
                }
            }
            .statsRow {
                display: grid;
                grid-template-columns: repeat(6, minmax(0, 1fr));
                gap: 10px;
                @media (max-width: 1200px) {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }
                @media (max-width: 640px) {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
                .stat {
                    background: color-mix(in oklab, ${p} 92%, transparent);
                    border: 1px solid ${o};
                    border-radius: 10px;
                    padding: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .label {
                        color: ${x};
                        font-weight: 600;
                    }
                    .value {
                        font-size: 18px;
                        font-weight: 700;
                        color: ${i};
                    }
                }
            }
        }

        .filters {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-wrap: wrap;
            margin-bottom: 12px;
            .search {
                position: relative;
                min-width: 320px;
                flex: 1 1 360px;
                border: 1px solid ${o};
                background: ${p};
                border-radius: 10px;
                display: flex;
                align-items: center;
                padding: 8px 10px;
                gap: 8px;
                input {
                    width: 100%;
                    background: transparent;
                    border: none;
                    outline: none;
                    color: ${i};
                    font-size: 13px;
                }
            }
            .seg {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                button {
                    border: 1px solid ${o};
                    background: ${p};
                    color: ${i};
                    border-radius: 18px;
                    padding: 6px 10px;
                    cursor: pointer;
                }
                button:hover {
                    border-color: ${a};
                    color: ${a};
                    box-shadow: 0 0 0 3px ${j};
                }
                button.active {
                    border-color: ${a};
                    color: ${a};
                }
            }
            .quicklinks {
                margin-left: auto;
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                a {
                    color: ${i};
                    opacity: 0.9;
                    border-bottom: 1px dotted ${o};
                }
                a:hover {
                    color: ${a};
                    border-color: ${a};
                }
            }
        }

        .tableWrap {
            background: ${p};
            border: 1px solid ${o};
            border-radius: 12px;
            box-shadow: ${w};
            overflow: hidden;
            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
            }
            thead th {
                text-align: left;
                padding: 12px 14px;
                background: color-mix(in oklab, ${p} 96%, transparent);
                border-bottom: 1px solid ${o};
                position: sticky;
                top: 0;
                z-index: 2;
            }
            tbody td {
                padding: 12px 14px;
                border-bottom: 1px solid ${o};
                vertical-align: top;
            }
            tbody tr:hover {
                background: color-mix(in oklab, ${a} 8%, transparent);
            }

            .cellTitle {
                display: flex;
                flex-direction: column;
                gap: 4px;
                .id {
                    color: ${i};
                    font-weight: 700;
                }
                .id:hover {
                    color: ${a};
                }
                .sub {
                    color: ${x};
                }
            }

            .person {
                display: flex;
                gap: 10px;
                align-items: flex-start;
                .ic {
                    opacity: 0.8;
                    margin-top: 2px;
                }
                .col {
                    display: flex;
                    flex-direction: column;
                }
                .name {
                    color: ${i};
                    font-weight: 600;
                }
                .name:hover {
                    color: ${a};
                }
                .sub {
                    color: ${x};
                }
            }

            .when {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .when .date {
                font-weight: 600;
            }
            .when .time {
                display: flex;
                align-items: center;
                gap: 6px;
                color: ${x};
            }

            .loc {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .tags {
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
            }
            .tags .tag {
                border: 1px dashed ${o};
                padding: 2px 8px;
                border-radius: 999px;
                color: ${i};
                background: color-mix(in oklab, ${a} 8%, transparent);
            }
            .muted {
                color: ${x};
            }

            .rowActions {
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
                .link {
                    background: transparent;
                    border: none;
                    color: ${i};
                    cursor: pointer;
                    padding: 0;
                    border-bottom: 1px dotted ${o};
                    text-decoration: none;
                }
                .link:hover {
                    color: ${a};
                    border-color: ${a};
                }
                .link.danger {
                    color: #e25555;
                    border-color: color-mix(in oklab, #e25555 60%, ${o});
                }
                .iconBtn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    height: 28px;
                    border-radius: 6px;
                    border: 1px solid ${o};
                    background: ${p};
                }
                .iconBtn:hover {
                    color: ${a};
                    border-color: ${a};
                    box-shadow: 0 0 0 3px ${j};
                }
                .link:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }

            .status {
                display: inline-flex;
                align-items: center;
                padding: 3px 8px;
                border-radius: 999px;
                font-weight: 600;
                border: 1px solid ${o};
                background: color-mix(in oklab, ${a} 8%, transparent);
            }
            .status.checked-in {
                background: color-mix(in oklab, ${a} 16%, transparent);
            }
            .status.completed {
                opacity: 0.85;
            }
            .status.cancelled {
                background: color-mix(in oklab, #e25555 14%, transparent);
                border-color: color-mix(in oklab, #e25555 60%, ${o});
            }
            .status.no-show {
                background: color-mix(in oklab, #b8b8b8 18%, transparent);
                border-color: color-mix(in oklab, #b8b8b8 60%, ${o});
                color: ${i};
            }

            .empty {
                padding: 28px;
                text-align: center;
                color: ${x};
                .emptyLinks {
                    margin-top: 8px;
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .emptyLinks a {
                    color: ${i};
                    border-bottom: 1px dotted ${o};
                }
                .emptyLinks a:hover {
                    color: ${a};
                    border-color: ${a};
                }
            }
        }

        .footerNav {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${x};
            margin-top: 10px;
            a {
                color: ${i};
            }
            a:hover {
                color: ${a};
            }
            .dot {
                opacity: 0.5;
            }
        }
    `,Modal:T.div`
        position: fixed;
        inset: 0;
        z-index: 50;
        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        .card {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: min(560px, 96vw);
            background: ${p};
            color: ${i};
            border: 1px solid ${o};
            border-radius: 12px;
            box-shadow: ${w};
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 14px;
            border-bottom: 1px solid ${o};
            h3 {
                font-size: 16px;
            }
            .icon {
                border: 1px solid ${o};
                background: ${p};
                color: ${i};
                border-radius: 8px;
                width: 28px;
                height: 28px;
                display: grid;
                place-items: center;
                cursor: pointer;
            }
            .icon:hover {
                border-color: ${a};
                color: ${a};
                box-shadow: 0 0 0 3px ${j};
            }
        }
        .body {
            padding: 14px;
        }
        .body p {
            line-height: 1.7;
        }
        .small {
            color: ${x};
            font-size: 12px;
        }
        footer {
            padding: 12px 14px;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            border-top: 1px solid ${o};
            button {
                border: 1px solid ${o};
                background: ${p};
                color: ${i};
                border-radius: 9px;
                padding: 8px 12px;
                cursor: pointer;
            }
            button:hover {
                border-color: ${a};
                color: ${a};
                box-shadow: 0 0 0 3px ${j};
            }
            .danger {
                border-color: color-mix(in oklab, #e25555 60%, ${o});
                color: #e25555;
            }
            .danger:hover {
                box-shadow: 0 0 0 3px
                    color-mix(in oklab, #e25555 30%, transparent);
            }
            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    `},v=[{id:"APT-1001",date:"2025-10-05T09:30:00",durationMin:20,status:"Scheduled",type:"Consultation",patient:{id:"PAT-1001",name:"Rahul Sharma",sex:"M",age:32},doctor:{id:"USR-201",name:"Dr. Meera Nair",dept:"Cardiology"},location:"OPD-2",tags:["first-visit","cash"],createdAt:"2025-10-04T12:10:12",updatedAt:"2025-10-04T12:10:12"},{id:"APT-1002",date:"2025-10-05T10:00:00",durationMin:20,status:"Checked-in",type:"Consultation",patient:{id:"PAT-1002",name:"Priya Verma",sex:"F",age:27},doctor:{id:"USR-202",name:"Dr. Arjun Bhat",dept:"Dermatology"},location:"OPD-1",tags:["follow-up"],createdAt:"2025-10-03T17:22:45",updatedAt:"2025-10-05T09:58:00"},{id:"APT-1003",date:"2025-10-05T10:30:00",durationMin:30,status:"Completed",type:"Consultation",patient:{id:"PAT-1003",name:"Sanjay Patel",sex:"M",age:45},doctor:{id:"USR-203",name:"Dr. Kavya Rao",dept:"Orthopedics"},location:"OPD-3",tags:["xray"],createdAt:"2025-10-02T11:01:05",updatedAt:"2025-10-05T10:58:10"},{id:"APT-1004",date:"2025-10-05T11:00:00",durationMin:20,status:"Scheduled",type:"Vaccination",patient:{id:"PAT-1004",name:"Aarav Sinha",sex:"M",age:6},doctor:{id:"USR-204",name:"Dr. Nidhi Kapoor",dept:"Pediatrics"},location:"Immunization Bay",tags:["vaccine"],createdAt:"2025-10-01T09:10:12",updatedAt:"2025-10-04T14:20:12"},{id:"APT-1005",date:"2025-10-05T11:30:00",durationMin:20,status:"Cancelled",type:"Consultation",patient:{id:"PAT-1005",name:"Neha Gupta",sex:"F",age:36},doctor:{id:"USR-202",name:"Dr. Arjun Bhat",dept:"Dermatology"},location:"OPD-1",tags:["cancelled-by-patient"],createdAt:"2025-10-03T10:00:00",updatedAt:"2025-10-04T18:12:00"},{id:"APT-1006",date:"2025-10-05T12:00:00",durationMin:20,status:"No-show",type:"Follow-up",patient:{id:"PAT-1006",name:"Vikas Yadav",sex:"M",age:41},doctor:{id:"USR-201",name:"Dr. Meera Nair",dept:"Cardiology"},location:"OPD-2",tags:["call-reminder"],createdAt:"2025-10-04T15:00:00",updatedAt:"2025-10-05T12:30:00"},{id:"APT-1007",date:"2025-10-05T12:30:00",durationMin:20,status:"Scheduled",type:"Consultation",patient:{id:"PAT-1007",name:"Ananya Singh",sex:"F",age:30},doctor:{id:"USR-203",name:"Dr. Kavya Rao",dept:"Orthopedics"},location:"OPD-3",tags:["insurance"],createdAt:"2025-10-02T09:30:00",updatedAt:"2025-10-02T09:30:00"},{id:"APT-1008",date:"2025-10-05T13:00:00",durationMin:30,status:"Scheduled",type:"Dressing",patient:{id:"PAT-1008",name:"Mohit Kumar",sex:"M",age:29},doctor:{id:"USR-205",name:"Nurse Station",dept:"Nursing"},location:"Treatment Room 2",tags:["nursing"],createdAt:"2025-10-04T08:25:10",updatedAt:"2025-10-04T08:25:10"},{id:"APT-1009",date:"2025-10-05T13:45:00",durationMin:20,status:"Scheduled",type:"Consultation",patient:{id:"PAT-1009",name:"Ritu Das",sex:"F",age:52},doctor:{id:"USR-206",name:"Dr. Aman Gill",dept:"ENT"},location:"OPD-4",tags:[],createdAt:"2025-10-04T16:02:20",updatedAt:"2025-10-04T16:02:20"},{id:"APT-1010",date:"2025-10-05T14:15:00",durationMin:20,status:"Scheduled",type:"Consultation",patient:{id:"PAT-1010",name:"Farhan Ali",sex:"M",age:38},doctor:{id:"USR-202",name:"Dr. Arjun Bhat",dept:"Dermatology"},location:"OPD-1",tags:["biopsy"],createdAt:"2025-10-03T09:48:00",updatedAt:"2025-10-03T09:48:00"},{id:"APT-1011",date:"2025-10-05T14:45:00",durationMin:20,status:"Scheduled",type:"Consultation",patient:{id:"PAT-1011",name:"Divya Menon",sex:"F",age:34},doctor:{id:"USR-201",name:"Dr. Meera Nair",dept:"Cardiology"},location:"OPD-2",tags:["echo"],createdAt:"2025-10-04T10:11:29",updatedAt:"2025-10-04T10:11:29"},{id:"APT-1012",date:"2025-10-05T15:15:00",durationMin:20,status:"Scheduled",type:"Consultation",patient:{id:"PAT-1012",name:"Kiran Joshi",sex:"M",age:49},doctor:{id:"USR-203",name:"Dr. Kavya Rao",dept:"Orthopedics"},location:"OPD-3",tags:[],createdAt:"2025-10-04T12:45:00",updatedAt:"2025-10-04T12:45:00"}],H=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],J=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function f(s){return s<10?`0${s}`:`${s}`}function A(s){const n=new Date(s);return`${H[n.getDay()]} ${J[n.getMonth()]} ${f(n.getDate())} ${n.getFullYear()}`}function N(s){const n=new Date(s);return`${f(n.getHours())}:${f(n.getMinutes())}:${f(n.getSeconds())}hrs`}function Y(s,n){const l=new Date(s);return l.setMinutes(l.getMinutes()+n),l.toISOString().slice(0,19)}const q=({open:s,onClose:n,title:l,body:h,actionLabel:u,onAction:b,disabled:m})=>s?e.jsxs(k.Modal,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",children:[e.jsx("div",{className:"overlay",onClick:n}),e.jsxs("div",{className:"card",children:[e.jsxs("header",{children:[e.jsx("h3",{id:"confirm-title",children:l}),e.jsx("button",{className:"icon",onClick:n,title:"Close",children:e.jsx(G,{size:18})})]}),e.jsx("div",{className:"body",children:e.jsx("p",{children:h})}),e.jsxs("footer",{children:[e.jsx("button",{onClick:n,children:"Close"}),e.jsx("button",{disabled:m,onClick:b,className:"danger",children:u})]})]})]}):null,$=({to:s,onClick:n,icon:l,label:h,title:u,disabled:b})=>{const m=e.jsxs("button",{onClick:n,disabled:b,title:u??h,className:"toolBtn",children:[l,e.jsx("span",{children:h})]});return s?e.jsx(r,{to:s,className:"toolLink",children:m}):m};function X(){D();const[s,n]=g.useState(""),[l,h]=g.useState("all"),[u,b]=g.useState({open:!1,id:null}),m=g.useMemo(()=>{const t=s.trim().toLowerCase();return v.filter(d=>{const y=!t||d.id.toLowerCase().includes(t)||d.patient.name.toLowerCase().includes(t)||d.doctor.name.toLowerCase().includes(t)||d.type.toLowerCase().includes(t)||d.location.toLowerCase().includes(t),S=l==="all"||d.status.toLowerCase()===l;return y&&S})},[s,l]),c=g.useMemo(()=>{const t={all:v.length,scheduled:0,"checked-in":0,completed:0,cancelled:0,"no-show":0};return v.forEach(d=>{t[d.status.toLowerCase()]=(t[d.status.toLowerCase()]||0)+1}),t},[]),C=t=>{document.getElementById(t)&&(document.body.classList.add("print-section-mode"),window.print(),setTimeout(()=>document.body.classList.remove("print-section-mode"),100))},M=t=>b({open:!0,id:t}),P=()=>b({open:!1,id:null});return e.jsxs(k.Page,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"topbar",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsx(r,{to:"/home",children:"Home"}),e.jsx("span",{children:"/"}),e.jsx(L,{to:"/appointments",end:!0,children:"Appointments"})]}),e.jsxs("div",{className:"toolbar",children:[e.jsx($,{to:"/appointments/calendar",icon:e.jsx(R,{size:16}),label:"Calendar"}),e.jsx($,{to:"/tools/import-export",icon:e.jsx(O,{size:16}),label:"Export",title:"Go to Import/Export"}),e.jsx($,{onClick:()=>C("search-print-area"),icon:e.jsx(z,{size:16}),label:"Print List",title:"Print visible appointments"}),e.jsx($,{icon:e.jsx(B,{size:16}),label:"New Appointment",title:"Demo mode: action disabled",disabled:!0})]})]}),e.jsxs("div",{className:"headline",children:[e.jsxs("div",{className:"titleRow",children:[e.jsxs("h1",{children:[e.jsx(U,{size:22,style:{marginRight:8,verticalAlign:"text-bottom"}})," Appointments"]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{children:["Today: ",A(new Date)]}),e.jsx("span",{className:"dot",children:"•"}),e.jsxs("span",{children:["Server time: ",N(new Date)]})]})]}),e.jsxs("div",{className:"statsRow",role:"region","aria-label":"Quick stats",children:[e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"label",children:"All"}),e.jsx("span",{className:"value",children:c.all})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"label",children:"Scheduled"}),e.jsx("span",{className:"value",children:c.scheduled})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"label",children:"Checked-in"}),e.jsx("span",{className:"value",children:c["checked-in"]})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"label",children:"Completed"}),e.jsx("span",{className:"value",children:c.completed})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"label",children:"Cancelled"}),e.jsx("span",{className:"value",children:c.cancelled})]}),e.jsxs("div",{className:"stat",children:[e.jsx("span",{className:"label",children:"No-show"}),e.jsx("span",{className:"value",children:c["no-show"]})]})]})]}),e.jsxs("div",{className:"filters",children:[e.jsxs("div",{className:"search",children:[e.jsx(F,{size:18}),e.jsx("input",{value:s,onChange:t=>n(t.target.value),placeholder:"Search by patient, doctor, ID, type, location","aria-label":"Search appointments"})]}),e.jsx("div",{className:"seg",children:[["all",`All (${c.all})`],["scheduled",`Scheduled (${c.scheduled})`],["checked-in",`Checked-in (${c["checked-in"]})`],["completed",`Completed (${c.completed})`],["cancelled",`Cancelled (${c.cancelled})`],["no-show",`No-show (${c["no-show"]})`]].map(([t,d])=>e.jsx("button",{className:l===t?"active":"",onClick:()=>h(t),title:`Filter: ${d}`,type:"button",children:d},t))}),e.jsxs("div",{className:"quicklinks",children:[e.jsx(r,{to:"/appointments/calendar",children:"Open Calendar"}),e.jsx(r,{to:"/reports/appointments",children:"Appointments Report"}),e.jsx(r,{to:"/patients",children:"Patients"}),e.jsx(r,{to:"/admin/users",children:"Doctors"})]})]}),e.jsxs("section",{id:"search-print-area",className:"tableWrap",children:[e.jsxs("table",{"aria-label":"Appointments table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:140},children:"Appointment"}),e.jsx("th",{style:{width:260},children:"Patient"}),e.jsx("th",{style:{width:260},children:"Doctor"}),e.jsx("th",{style:{width:160},children:"When"}),e.jsx("th",{style:{width:160},children:"Location"}),e.jsx("th",{style:{width:140},children:"Status"}),e.jsx("th",{children:"Tags"}),e.jsx("th",{style:{width:220},children:"Actions"})]})}),e.jsx("tbody",{children:m.map(t=>{const d=Y(t.date,t.durationMin);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"cellTitle",children:[e.jsx(r,{to:`/appointments/${t.id}`,className:"id",children:t.id}),e.jsx("span",{className:"sub",children:t.type})]})}),e.jsx("td",{children:e.jsxs("div",{className:"person",children:[e.jsx(E,{size:16,className:"ic"}),e.jsxs("div",{className:"col",children:[e.jsx(r,{to:`/patients/${t.patient.id}`,className:"name",children:t.patient.name}),e.jsxs("span",{className:"sub",children:[t.patient.sex," • ",t.patient.age,"y"]})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"person",children:[e.jsx(I,{size:16,className:"ic"}),e.jsxs("div",{className:"col",children:[e.jsx(r,{to:`/admin/users/${t.doctor.id}`,className:"name",children:t.doctor.name}),e.jsx("span",{className:"sub",children:t.doctor.dept})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"when",children:[e.jsx("div",{className:"date",children:A(t.date)}),e.jsxs("div",{className:"time",children:[e.jsx(K,{size:14})," ",N(t.date)," – ",N(d)]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"loc",children:[e.jsx(V,{size:14})," ",t.location]})}),e.jsx("td",{children:e.jsx("span",{className:`status ${t.status.toLowerCase().replace(/\s/g,"-")}`,children:t.status})}),e.jsx("td",{children:e.jsx("div",{className:"tags",children:t.tags.length===0?e.jsx("span",{className:"muted",children:"—"}):t.tags.map(y=>e.jsx("span",{className:"tag",children:y},y))})}),e.jsx("td",{children:e.jsxs("div",{className:"rowActions",children:[e.jsx(r,{to:`/appointments/${t.id}`,className:"link",children:"View"}),e.jsx(r,{to:`/print/sticker/${t.id}`,className:"link",children:"Print"}),e.jsx("button",{className:"link",title:"Demo mode: reschedule disabled",disabled:!0,children:"Reschedule"}),e.jsx("button",{className:"link danger",onClick:()=>M(t.id),title:"Cancel (demo-safe confirmation)",children:"Cancel"}),e.jsx("button",{className:"iconBtn",title:"More",children:e.jsx(W,{size:16})})]})})]},t.id)})})]}),m.length===0&&e.jsxs("div",{className:"empty",children:[e.jsx("p",{children:"No appointments match your search."}),e.jsxs("div",{className:"emptyLinks",children:[e.jsx(r,{to:"/appointments",children:"Clear filters"}),e.jsx(r,{to:"/appointments/calendar",children:"Open Calendar"}),e.jsx(r,{to:"/patients",children:"Go to Patients"})]})]})]}),e.jsxs("div",{className:"footerNav",children:[e.jsx(r,{to:"/appointments/calendar",children:"Calendar"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(r,{to:"/reports/appointments",children:"Reports"}),e.jsx("span",{className:"dot",children:"•"}),e.jsx(r,{to:"/help",children:"Help"})]}),e.jsx(q,{open:u.open,onClose:P,title:"Cancel appointment?",body:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:8},children:"You are viewing a demo. Destructive actions are disabled."}),e.jsxs("div",{className:"small",children:["Appointment ID: ",e.jsx("strong",{children:u.id})]})]}),actionLabel:"Confirm Cancel",onAction:()=>{},disabled:!0})]})}export{X as default};
